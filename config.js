/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
  var config = {
    apiKey: "AIzaSyD1kbZOGHTlzQTmm_Hbk30Cfja7SuU11FU",
    authDomain: "graficas-88575.firebaseapp.com",
    databaseURL: "https://graficas-88575.firebaseio.com",
    storageBucket: "graficas-88575.appspot.com",
    messagingSenderId: "270335151577"
  };
  firebase.initializeApp(config);

  function IngresoGoogle(){
  	if (!firebase.auth().currentUser){
			var provider = new firebase.auth.GoogleAuthProvider();

			provider.addScope('https://www.googleapis.com/auth/plus.login');

			firebase.auth().signInWithPopup(provider).then(function(result) {
  						// This gives you a Google Access Token. You can use it to access the Google API.
 				 var token = result.credential.accesstoken;
 				 // The signed-in user info.
  				var user = result.user;
  				
  				console.log(user);
  					// ...
			}).catch(function(error) {
 				 // Handle Errors here.
 				 var errorCode = error.code;
 				 var errorMessage = error.message;
  				// The email of the user's account used.
  				var errorEmail = error.email;
  				// The firebase.auth.AuthCredential type that was used.
  				var credential = error.credential;
 				 // ...
			
			if (error.code === 'auth/account-exists-with-different-credential'){
				alert('es el mismo Usuario');
			}
  	});
  }else{
  	firebase.auth().signOut();
  }
}


  function IngresoFacebook(){
    if (!firebase.auth().currentUser){
      var provider = new firebase.auth.GoogleAuthProvider();

      provider.addScope('public_profile');

      firebase.auth().signInWithPopup(provider).then(function(result) {
              // This gives you a Google Access Token. You can use it to access the Google API.
         var token = result.credential.accesstoken;
         // The signed-in user info.
          var user = result.user;
          
          console.log(user);
            // ...
      }).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
          // The email of the user's account used.
          var errorEmail = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
         // ...
      
      if (error.code === 'auth/account-exists-with-different-credential'){
        alert('es el mismo Usuario');
      }
    });
  }else{
    firebase.auth().signOut();
  }
}

document.getElementByID('btn-google').addEventListener('click',IngresoGoogle,false);
document.getElementByID('btn-facebook').addEventListener('click',IngresoFacebook,false);
