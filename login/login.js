
const login_form=document.querySelector(".login_form")
const ogohlantirish1=document.querySelector(".ogohlantirish_1")




login_form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const loginEmail=login_form.login_email.value.trim()
    const loginPasword=login_form.login_pasword.value.trim()
    console.log(loginEmail,loginPasword);
    if(loginEmail=="dolimov@gmail.com" && loginPasword==12345678){
        window.location.href = "../index.html";
        // console.log(salom);
    }
else{
// alert("xato")
    ogohlantirish1.style.display    ="block"
    setInterval(()=>{
    ogohlantirish1.style.display="none"
},3000)
    }
    login_form.reset()
})