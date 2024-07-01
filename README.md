# Vaani ISL 🌟

**Vaani ISL** is an innovative Indian Sign Language project designed to facilitate both sign language generation and detection, providing a comprehensive conversational experience. This project aims to bridge the communication gap between hearing and deaf individuals, enhancing their ability to converse seamlessly.
![snap](https://github.com/ashleshshenoy/vaani/assets/73695378/4ff5613e-afa3-4c5e-9cb1-85aba67065f9)



## Key Features ✨

![usecase drawio](https://github.com/ashleshshenoy/vaani/assets/73695378/21964c2f-0926-44e8-8fcf-29a7208015b2)

- **Sign Language Generation and Detection**: Supports both the generation of sign language from text or speech and the detection of sign gestures, ensuring a full conversational loop.
  
- **NLP Module**: An advanced Natural Language Processing (NLP) module facilitates the dispatch of relevant video URLs to the frontend. These URLs are fetched from AWS S3, allowing for continuous playback of sign gestures. This seamless integration ensures real-time generation of sign language gestures.

- **Object Detection Model**: Includes an object detection model specifically trained for Indian Sign Language, capable of detecting sign gestures from the client application.

- **Mobile Optimization**: To ensure accessibility across platforms, especially mobile, we utilize the MobileNetV2 model from TensorFlow. This model is optimized for performance on mobile devices, providing a smooth and efficient user experience.

- **User-Friendly Interface**: Features an easy-to-use user interface, making it accessible for users of all ages and technical backgrounds. The intuitive design enhances the conversational ability for both hearing and deaf individuals.



## Technical Details 🛠️

![architecture drawio](https://github.com/ashleshshenoy/vaani/assets/73695378/a8253f1c-733d-4ecd-b972-6a5c75023e28)


![seq drawio](https://github.com/ashleshshenoy/vaani/assets/73695378/8dc43697-d996-4c59-9e19-342023ada79b)


- **NLP Node**: The NLP module is served over a Flask application, ensuring robust and scalable dispatch of video URLs.
  
- **AWS S3 Integration**: Videos are stored and retrieved from AWS S3, enabling reliable and high-performance access to sign gesture videos.

- **TensorFlow MobileNetV2**: The choice of MobileNetV2 ensures that our object detection model runs efficiently on mobile devices, maintaining high accuracy and speed.




## Contributing 🤝

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements 🙏

- Thanks to the TensorFlow team for MobileNetV2.
- Special thanks to the contributors who helped make this project possible.
