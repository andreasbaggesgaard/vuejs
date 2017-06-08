// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBqetVFN_l8gSRy6NxMbp5NSfg6NfzWdyg",
    authDomain: "cmsproject-f37cb.firebaseapp.com",
    databaseURL: "https://cmsproject-f37cb.firebaseio.com", 
    storageBucket: "cmsproject-f37cb.appspot.com",
    messagingSenderId: "560833659351"
  };

export let app = firebase.initializeApp(config); 
export let db = app.database(); 
 
export let itemsRef = db.ref('items');
export let p1Ref = db.ref('placeholderOne'); 
export let p2Ref = db.ref('placeholderTwo'); 
export let p3Ref = db.ref('placeholderThree');  
export let show = db.ref('showremaining'); 
export let menu = db.ref('menu'); 

export let storageRef = firebase.storage().ref();
export let test = storageRef.child('items/');