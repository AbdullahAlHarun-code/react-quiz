import classes from "../styles/Layout.module.css";
import Nav from "./Nav";

console.log(<Nav />);
export default function Layout({ children }) {
  console.log(children);
  return (
    <div>
      <Nav />
      <div className={classes.main}>
        <div className={classes.container}>{children}</div>
      </div>
    </div>
  );
}
