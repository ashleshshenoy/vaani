// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import "./Home.css";
import axios from 'axios'
import { nextFrame } from "@tensorflow/tfjs";
import {drawRect} from "./utilities"; 
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { TimeLimitedMap, labelMap} from './utilities'


function Home(){
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runCoco = async () => {
    const url =  "http://localhost:5500/public/model.json"
    const net = await tf.loadGraphModel(url)
   
    setInterval(() => {
      detect(net);
    }, 10000);
  };

  let limitMap = new TimeLimitedMap()

  const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
      for(let i=0; i<=boxes.length; i++){
          if(boxes[i] && classes[i] && scores[i]> threshold){
              // Extract variables
              const [y,x,height,width] = boxes[i]
              const text = classes[i]
          
              if( limitMap.get(labelMap[text]['name'])){
                  limitMap.set(labelMap[text]['name'])
                  console.log(labelMap[text]['name'])
                  let utter = new window.SpeechSynthesisUtterance(labelMap[text]['name']);
                  utter.onstart = ()=>{
                    console.log("Speech synthesis started");
                    SpeechRecognition.stopListening();                
                  }
                  utter.onend = ()=>{
                    console.log("speech ended")
                    SpeechRecognition.startListening({continuous:true})
                  }
                  window.speechSynthesis.cancel();
                  window.speechSynthesis.speak(utter);
              
              }else{
                  console.log("time limit")
              }
          }
      }
  }

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    )
     {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
      const boxes = await obj[1].array()
      const classes = await obj[2].array()
      const scores = await obj[4].array()
      

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)         
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.4, videoWidth, videoHeight, ctx)}); 


      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)
  
    
    }
  };


  const [videoUrls, setVideoUrls] = useState([]);

  async function fetchURL(data) {
        console.log("Fetching " + data)
        const URL = "http://localhost:8080/"
          try{
            const response = await axios.post(URL, {
              sentence : data
            });
            let urls = response.data.cdn_urls.filter((item)=> item.startsWith("http://"))
            console.log("response : " + urls)
            setVideoUrls(prevVideoUrls => [...prevVideoUrls, ...urls]);          
        }catch(error){
          console.log(error)
        }
    
  }

  useEffect(() => {
    console.log(videoUrls)
    const videoPlayer = document.getElementById('videoPlayer');
    if (videoUrls.length > 0) {
      videoPlayer.src = videoUrls[0];
      videoPlayer.play();
    }
  }, [videoUrls]);



  const playNextVideo = () => {
    if (videoUrls.length > 0) {
      setVideoUrls(prevVideoUrls => prevVideoUrls.filter((_, index) => index !== 0));
    }
  };


  useEffect(()=>{runCoco()}, []);
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  
  

  useEffect(()=>{
    if(!listening && transcript.length > 0){
      fetchURL(transcript)
    }
   }, [listening])

  useEffect(()=>{SpeechRecognition.startListening()},[listening])
  




  return (
    <div className="Home">
      <header className="App-header">
        <div className="camera-container" >

          <Webcam
          className={`camera ${listening ? 'inactive' : 'active'}`}
          ref={webcamRef}
            muted={true}
            videoConstraints ={{ aspectRatio: 16/9, width: document.body.clientWidth, facingMode: "user" }}
          />
          <canvas
            ref={canvasRef}
            className="prediction"

          />  
        </div>
        <div className="video-container" onEnded={playNextVideo}  >
          <video id="videoPlayer"  muted
          className={`${listening ? 'active' : 'inactive'}`}
          >
          </video>
        </div>


        <div>
    </div>    
      </header> 
    </div>
  );
}

export default Home;