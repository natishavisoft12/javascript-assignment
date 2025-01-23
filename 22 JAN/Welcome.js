function showWelcomemsg(){
    const username = document.getElementById("username").value.trim();
    const msgdiv = document.getElementById("welcome")
    if(username.length<=3){
        msgdiv.textContent="name must be longer then 3 charecters"
    }
    else{ msgdiv.textContent=`welcome ${username} on this page`

    }
   
}