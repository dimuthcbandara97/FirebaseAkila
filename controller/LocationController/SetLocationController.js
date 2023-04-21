import express from "express";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {setDoc,getFirestore,doc} from "firebase/firestore/lite"
import dotenv from "dotenv"




const firebaseConfig = {
  apiKey: "AIzaSyBKXg5qcyOGcG8GcUiS08_22Qwfkbhd2PE",
  authDomain: "ipcreactproject.firebaseapp.com",
  databaseURL: "https://ipcreactproject-default-rtdb.firebaseio.com",
  projectId: "ipcreactproject",
  storageBucket: "ipcreactproject.appspot.com",
  messagingSenderId: "626917250462",
  appId: "1:626917250462:web:479601a42875852761b28f",
  measurementId: "G-3YSC6EZL4P"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp)
const collectionName  = "LocationData"


const setLocation = async(req,res) =>  {
    const trackerId =  req.query.trackerId;
    const longitude = req.query.longitude;
    const latitude = req.query.latitude;
    const speed = req.query.speed;
    const course = req.query.course;

    const data = {
        "sensorId" : trackerId,
        "longitude" : longitude,
        "latitude" : latitude,
        "speed": speed,
        "course": course
    }

    await setDoc(doc(firestore,collectionName,trackerId),data)


    res.send(JSON.stringify(data))

}

export default setLocation

