  (function() {

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCQU7uqV4OzwBvUwwvezhRh4GFgpjClOZQ",
    authDomain: "project-today-11bb5.firebaseapp.com",
    databaseURL: "https://project-today-11bb5.firebaseio.com",
    storageBucket: "project-today-11bb5.appspot.com",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Get Element
  const txtEmail = document.getElementById('txtEmail');
  const txtPass = document.getElementById('txtPass');
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  //Add Login Event
  loginBtn.addEventListener('click', (e) =>{
      e.preventDefault();
      //Get Email And Password
      const email = txtEmail.value;
      const pass = txtPass.value;
      const auth = firebase.auth();
      //sign in
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
      
  });

  //Add Sign Up Event
  signupBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    //Get Email And Password
    //TODO: Check for Emails
    const email = txtEmail.value;
    const pass = txtPass.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
    //.then(user => console.log(user));
    .catch(e => console.log(e.message));
    
});

logoutBtn.addEventListener('click', e => {
    firebase.auth().signOut();
});


//Add realtime auth. listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      logoutBtn.classList.remove('hide');
    } else {
      console.log( 'not logged in');
      logoutBtn.classList.add('hide');
  
    }
  });


}());