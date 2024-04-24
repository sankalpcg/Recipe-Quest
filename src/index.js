import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import './index.css';

const firebaseConfig = {
  // Your Firebase config here
  apiKey: "AIzaSyAWirG8LiFOwGanZCH0sy1a6Q1ziy2Sni4",
  authDomain: "recipe-5c228.firebaseapp.com",
  projectId: "recipe-5c228",
  storageBucket: "recipe-5c228.appspot.com",
  messagingSenderId: "275293090860",
  appId: "1:275293090860:web:be6e64da29fc42ae268d89",
  measurementId: "G-7PDGTGJJLS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const root = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  root
);

