// holds the user session - is a singleton

const Session = {
    user: null,
    messaage: [],
    
}

export default Session;

export function login() {
    Session.user = { name: "Dave", handle: "@jewpaltz" };
}

export function logout() {
    Session.user = null;
}