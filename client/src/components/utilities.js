// Define our labelmap
import React, {  useState, useEffect } from "react";

export const labelMap = {
    1:{name:'Hello', color:'red'},
    2:{name:'Yes', color:'blue'},
    3:{name:'No', color:'purple'},
}




export class TimeLimitedMap {
    constructor() {
        this.map = new Map();
    }

    set(key) {
        this.map.set(key,Date.now());
    }

    get(key) {
        const timestamp = this.map.get(key);
        if (!timestamp) {
            return true; 
        }

        const currentTime = Date.now();
        if (currentTime - timestamp >= 4000) 
            return true;

        return false;
        
    }
}



