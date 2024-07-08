function checkValidPwd(){
    var pwd = document.getElementById("pwd").value;
    var cnfPwd = document.getElementById("confirm-pwd").value;
    var msg = document.getElementById("msg");
    msg.style.display = "block";
    if(pwd.length !=0 && cnfPwd.length !=0){
        if(pwd != cnfPwd){
            msg.textContent = "Passwords do not match.";
        }
        else if(pwd.length < 8 || cnfPwd.length < 8){
            msg.textContent = "Password must be atleast 8 characters long.";
        }
        else{
            msg.textContent = "Signing up...";
            msg.classList.replace("text-danger", "text-success");
            window.location.replace("../login/login.html");
        }
        
    }
    else{
        msg.textContent = "Password cannot be empty !";
    }
}

let eye1 = document.getElementById("eye1");
let pwd = document.getElementById("pwd");
let eye2 = document.getElementById("eye2");
let cnfPwd = document.getElementById("confirm-pwd");
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

eye2.onclick = function(){
    if(cnfPwd.type == "password"){
        cnfPwd.type = "text";
        eye2.src="./assets/images/eye-open.png";
        eye2.setAttribute("style","height: 16px;");
    }
    else{
        cnfPwd.type = "password";
        eye2.src="./assets/images/eye-close.png";
        eye2.setAttribute("style","height: 20px;");
    }
}
