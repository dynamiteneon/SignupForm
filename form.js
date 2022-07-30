let submitBtn = document.getElementById('formsubmit');
const frmContainer = document.getElementsByClassName("content-form")[0];

console.log(frmContainer);

submitBtn.addEventListener("click",pwdCheck);


function pwdCheck(){
    let Pwd = document.getElementById("pass").value;
    let pwdConfirm = document.getElementById("confirmpass").value;

    if(Pwd == pwdConfirm){
        console.log("Yes");
    }

    else if(Pwd != pwdConfirm){
        let pwdAlert = document.createTextNode("Passwords do not match.");

        document.getElementById("pass").classList.add("pwdError");
        document.getElementById("confirmpass").classList.add("pwdError");
        frmContainer.appendChild(pwdAlert);
    }
}

