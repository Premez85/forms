import Input from './Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import {useInput} from "../hooks/useInput";

export default function Login() {
   const {
       value: emailValue,
       handleInputChange: handleEmailChange,
       handleInputBlur: handleEmailBlur,
       hasError: emailHasError,
   } = useInput('', (val)=> isEmail(val) && isNotEmpty(val));

   const {
       value: passwordValue,
       handleInputBlur: handlePasswordBlur,
       handleInputChange: handlePasswordInput,
       hasError: passwordHasError,
   } = useInput('', (val)=>hasMinLength(val, 6));


    function handleSubmit(event) {
        event.preventDefault();
        console.log(emailValue, passwordValue);
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    value={emailValue}
                    error={emailHasError && 'Please enter a valid email!'}
                />

                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    onChange={handlePasswordInput}
                    onBlur={handlePasswordBlur}
                    value={passwordValue}
                    error={passwordHasError && 'Please enter a valid password!'}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}