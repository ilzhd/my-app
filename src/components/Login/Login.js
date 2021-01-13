import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formsControl/formsControl";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
let maxLength10 = maxLengthCreator(10)
let minLength2 = minLengthCreator(2)
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"login"} name={"login"} component={Input} validate={[required, maxLength10, minLength2]}/></div>
        <div><Field placeholder={"password"} name={"password"} component={Input} validate={[required, maxLength10, minLength2]}/></div>
        <div><Field type={"checkbox"} name={"rememberMe"} component={"input"}/>Remember me</div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: "login",})(LoginForm)

const Login = () => {
    const onSubmit  = (formData) =>{
        console.log(formData)
    }
    return <div>
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    </div>
}
export default Login