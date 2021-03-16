//

const list = [
    {
        firstname: "David",
        lastname: "Liebman",
        handle: "@jewpaltz",
        pic: "",
        password: "Me"
    },
    {
        firstname: "David",
        lastname: "Liebman",
        handle: "@jewpaltz",
        pic: "",
        password: "Me"
    },
    {
        firstname: "David",
        lastname: "Liebman",
        handle: "@jewpaltz",
        pic: "",
        password: "Me"
    }
];

module.exports.GetAll = () => list;
module.exports.Get = (user_id) => list[user_id];
module.exports.Add = (user) => {
    list.push(user);
    return user;
};

module.exports.Update = (user_id, user) => {
    //TODO make patchable
    const oldObj = list[user_id];
    console.log({oldObj, user});
    list[user_id] = {... list[user_id], ... user};
    //list[user_id] = user;
    return user;
};

module.exports.Delete = (user_id) => {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
};
