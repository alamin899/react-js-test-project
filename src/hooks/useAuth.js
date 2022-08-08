

export default function useAuth(){
    let email = localStorage.getItem('email');

    let password = localStorage.getItem('password');
    
    if(email === `alamin@appnap.io` && password === `password`){
        return true;
    }
    else{
        return false;
    }
}
