/* B"H
    Holds the user session. Is a singleton.
*/
import { ToastProgrammatic as toastr } from "buefy";
import router from "../router";
import { api } from "./myFetch";

const Session = {
    user: null,
    token: null,
    nextRoute: null,
    message: [] // To be used later
}
export default Session;

export async function Login(handle, password){
    const {user, token} = await api('users/login', { handle, password })
    Session.user = user;
    Session.token = token;

    console.log(Session.user);
    toastr.open({
        type: 'is-success',
        message: `Welcome ${Session.user.firstName}`
    });

    router.push(Session.nextRoute ?? '/feed')
}

export async function LoginFB(access_token){
    const {user, token} = await api('users/loginFB', { access_token })
    Session.user = user;
    Session.token = token;

    console.log(Session.user);
    toastr.open({
        type: 'is-success',
        message: `Welcome ${Session.user.firstName}`
    });

    router.push(Session.nextRoute ?? '/feed')
}

export function Logout(){
    Session.user = null
}

export function toastError(msg){
    toastr.open({
        message: msg,
        queue: false,
        type: 'is-danger'
    })
}