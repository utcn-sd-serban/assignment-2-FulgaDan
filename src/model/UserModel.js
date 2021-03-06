import {EventEmitter} from 'events'

class UserModel extends EventEmitter{
    constructor(){
        super();
        this.state = {
            users: [{
                username: "Fulga",
                password: "fulga"
            },
            {
                username: "Dan",
                password: "dan"
            },
            {
                username: "fulgadan",
                password: "fulgadan"
            }],

            newUser: {
                username: "",
                password: ""
            }
        };
    }

    addUser(username, password){
        this.state = {
            ...this.state,
            users: this.state.users.concat([{
                username: username,
                password: password
            }])
        };
        this.emit("change", this.state);
    }

    changeNewUserProperty(property, value){
        this.state = {
            ...this.state,
            newUser: {
                ...this.state.newUser,
                [property] : value
            }
        };
        this.emit("change", this.state);
    }
}
const userModel = new UserModel();
export default userModel;
