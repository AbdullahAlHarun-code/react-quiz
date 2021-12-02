import signupImage from "../assets/images/signup.svg";
import classes from "../styles/Illustrator.module.css";
export default function Illustrator() {
  return (
    <>
      <div className={classes.illustration}>
        <img src={signupImage} alt="Signup" />
      </div>
    </>
  );
}
