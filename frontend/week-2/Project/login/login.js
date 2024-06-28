
// function checkValidPwd(){
//     var pwd = document.getElementById("pwd").value;
//     var msg = document.getElementById("message");
//     if(pwd.length !=0){
//         if(pwd != cnfPwd){
//             msg.textContent = "Passwords do not match.";
//             msg.style.backgroundColor ="rgb(255, 255, 255)";
//             msg.style.color = "red";
//         }
//         else if(pwd.length < 8 || cnfPwd.length < 8){
//             msg.textContent = "Password must be atleast 8 characters long.";
//             msg.style.backgroundColor ="rgb(255, 255, 255)";
//             msg.style.color = "red";
//         }
//         else{
//             msg.textContent = "Passwords matched ! Signing up...";
//             msg.style.backgroundColor ="rgb(255, 255, 255)";
//             msg.style.color = "green";
//         }
        
//     }
//     else{
//         msg.textContent = "Password cannot be empty !";
//         msg.style.backgroundColor ="rgb(255, 255, 255)";
//         msg.style.color = "red";
//     }
// }

let eye1 = document.getElementById("eye1");
let pwd = document.getElementById("pwd");
eye1.onclick = function(){
    if(pwd.type == "password"){
        pwd.type = "text";
        eye1.src="./assets/images/eye-open.png";
        eye1.setAttribute("style","height: 16px;");
    }
    else{
        pwd.type = "password";
        eye1.src="./assets/images/eye-close.png";
        eye1.setAttribute("style","height: 20px;");
    }
}

function checkValidPwd(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    const requestURL = "http://167.71.236.10/api/login/";

    fetch(requestURL, {
        method: "POST",
        body: JSON.stringify({
            "email": email,
            "password": password
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)})
    .catch(error => console.log("Error:", error));
}
