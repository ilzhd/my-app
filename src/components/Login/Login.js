import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formsControl/formsControl";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {setLogin} from "../../redux/auth-Reducer";
import {Redirect} from "react-router-dom";
import s from './Login.module.css'


let maxLength10 = maxLengthCreator(30)
let minLength2 = minLengthCreator(2)
const LoginForm = (props) => {
    let error = () =>{
        if (props.error != undefined){
            return <div className={s.error}>{props.error}</div>
        }else{
            return null
        }
    }
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"email"} name={"email"} component={Input} validate={[required, maxLength10, minLength2]}/></div>
        <div><Field placeholder={"password"} name={"password"} type={"password"} component={Input} validate={[required, maxLength10, minLength2]}/></div>
        <div><Field type={"checkbox"} name={"rememberMe"} component={"input"}/>Remember me</div>
            {error()}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: "login",})(LoginForm)

const Login = (props) => {
    const onSubmit  = (values) =>{
        let {email, password, rememberMe} = values
        props.setLogin(email, password, rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }



    return <div>
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} {...props}/>
        </div>
    </div>
}
const mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,{setLogin})(Login)