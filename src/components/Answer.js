import classes from "../styles/Answer.module.css";
import Checkbox from "./Checkbox";
export default function Answer() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="A New Hope 1" id="option1" />
      <Checkbox className={classes.answer} text="A New Hope 1" id="option2" />
      <Checkbox className={classes.answer} text="A New Hope 1" id="option3" />
      <Checkbox className={classes.answer} text="A New Hope 1" id="option4" />
    </div>
  );
}
