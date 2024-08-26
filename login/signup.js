
const signup_form=document.querySelector(".signup_form")
const ogohlantirish=document.querySelector(".ogohlantirish")
// const ogohlantirish1=document.querySelector(".ogohlantirish_1")

signup_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const signupName=signup_form.signup_name.value.trim();
    const signupEmail=signup_form.signup_email.value.trim();
    const signupPasword=signup_form.signup_pasword.value.trim();
    
if(signupName=="samandar" && signupEmail=="dolimov@gmail.com" && signupPasword==12345678){
    window.location.href = "login.html";
}
else{
      // alert("xato")
    ogohlantirish.style.display="block"
    setInterval(()=>{
    ogohlantirish.style.display="none"
    },3000)
    }
    signup_form.reset()
})