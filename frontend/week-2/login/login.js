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
    var username = document.getElementById("username").value;
    var password = document.getElementById("pwd").value;
    const requestURL = "http://167.71.236.10/api/login/";

    fetch(requestURL, {
        method: "POST",
        body: JSON.stringify({
            "username": username,
            "password": password
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data["message"] == "Login Successful"){
            
            let token = data["token"];
            sessionStorage.setItem("token", token);
            window.location.replace(`./cashier-dashboard/cboard.html?token=${token}`);
            document.getElementById("msg").classList.replace("text-danger", "text-success");
        }
        document.getElementById("msg").style.display="block";
        document.getElementById("msg").textContent = data["message"];
    })
        
    .catch(error => {
        console.log("error:", error);
        document.getElementById("msg").style.display="block";
        document.getElementById("msg").textContent = "Some error occured : " + error;
    
    })
}
