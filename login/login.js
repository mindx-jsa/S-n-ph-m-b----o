
import { auth } from '../firebase/firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

let register = document.querySelector("#signup")
register.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById('s-email').value.trim()
    let pw = document.getElementById("s-password").value.trim()
   createUserWithEmailAndPassword(auth, email, pw)
    .then((userCredential) => {
        const user = userCredential.user;
        alert('Welcome back, ' + user.email + pw);
        // Redirect to a home page or dashboard
         window.location.href = "../index.html"
    })
    .catch((error) => {
        const errorMessage = error.message;
        alert( errorMessage);

    });

    if(email.value.trim() && pw.value.trim().length == 0().length == 0){

    }else if (email.value.trim().length == 0) {
        alert("Please input your email")
    }
    else if (pw.value.trim().length == 0) {
        alert("Please input your password")
    }
})
//     if ( ) {
//         alert("Please input your email & password")
//     }
//     
//     
//     else {
//             if(localStorage.users) {
//                 let users = JSON.parse(localStorage.users)
//                 users.push({
//                     email: email.value.trim(),
//                     pw: pw.value.trim() 
//                 })
//                 localStorage.setItem("users", JSON.stringify(users))
//             } else {
//                 localStorage.setItem("users",
//                 JSON.stringify(
//                 [
//                     {
//                       email: email.value.trim(),
//                       pw: pw.value.trim()
//                     }
//                 ]));
//             }
//             location.replace("./login.html")
//     }

let login = document.getElementById('login')
login.addEventListener("submit", (e) => {
    e.preventDefault()

    // let users = JSON.parse(localStorage.users)

    let email = document.getElementById("l-email").value.trim()
    let pw = document.getElementById("l-password").value.trim()

    signInWithEmailAndPassword(auth, email, pw)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Welcome back, ' + user.email);
            // Redirect to a home page or dashboard
             window.location.href = "../index.html"
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage + pw);

        });

    // if (check == true){
       
    // } else {
    //     alert("Please input again")
    // }
})

