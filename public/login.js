import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAWirG8LiFOwGanZCH0sy1a6Q1ziy2Sni4",
    authDomain: "recipe-5c228.firebaseapp.com",
    projectId: "recipe-5c228",
    storageBucket: "recipe-5c228.appspot.com",
    messagingSenderId: "275293090860",
    appId: "1:275293090860:web:be6e64da29fc42ae268d89",
    measurementId: "G-7PDGTGJJLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

document.getElementById('signup-form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent form submission

  // Get user input
  const username = document.getElementById('username').value;
  const email = document.getElementById('useremail').value;
  const password = document.getElementById('password').value;

  // Validate and process user input (you can add more validation here)
  if (username && email && password) {
    try {
      // Create user in authentication system
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      // Save user data to Firestore
      await db.collection('users').doc(userId).set({
        username: username,
        email: email
      });

      // Registration successful
      alert('Registration successful!');
      // Redirect to sign-in page
      window.location.href = 'signin.html';
    } catch (error) {
      // Registration failed
      console.error(error.message);
      alert('Registration failed. Please try again.');
    }
  } else {
    alert('Please fill in all fields');
  }
});
