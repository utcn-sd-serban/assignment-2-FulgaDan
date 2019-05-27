import userModel from '../model/UserModel';

class LoginPresenter{
    onLogin(){
        window.location.assign("#/question-list");
    }

    onChange(property, value){
        userModel.changeNewUserProperty(property, value);
    }
}

const loginPresenter = new LoginPresenter();
export default loginPresenter;