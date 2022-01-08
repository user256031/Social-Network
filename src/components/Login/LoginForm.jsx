import {required} from "../utilis/validator/validator";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import React from "react";
import style from "../common/FormsControls/FormsControls.module.css"
import {Navigate} from "react-router-dom";

/*const maxLength50 = maxLengthCreator(50);*/

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form action="google.com" onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}

            {error && <div className={style.form_summary_error}>
                {error}
            </div>}
            <div>
                <button>Login</button>
                <div>
                    <form action="https://social-network.samuraijs.com/signUp" target="_blank">
                        <button>Registration</button>
                    </form>
                </div>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)