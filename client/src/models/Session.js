// holds the user session - is a singleton

const Session = {
    user: null,
    messaage: [],
    
}

export default Session;

export function Login() {
    Session.user = { name: "Dave", handle: "@jewpaltz" };
}

export function Logout() {
    Session.user = null;
}