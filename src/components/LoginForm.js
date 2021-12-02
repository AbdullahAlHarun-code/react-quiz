import classes from "../styles/Form.module.css";

export default function LoginForm({ children, className, ...rest }) {
  return (
    <form className={`${className} ${classes.form}`} {...rest}>
      {children}
    </form>
  );
}
