import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Illustration from "../Illustrator";
import LoginForm from "../LoginForm";
import TextInput from "../TextInput";
export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginForm className={classes.login}>
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button>
            <span>Submit Now</span>
          </Button>
          <div class="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </LoginForm>
      </div>
    </>
  );
}
