export const formValidate = (email,password)=>{
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    //if this regex pass means its valid email addresa and our variable stores true value

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "please enter valid email address";
    if(!isPasswordValid) return "please enter valid password";

    return null;
    //return null if everthing all great
}