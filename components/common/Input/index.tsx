import styles from './input.module.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
const Input: React.FC<InputProps & TextareaProps> = ({
  className,
  ...rest
}) => {
  if (rest.type === "textarea") {
    const auto_grow = (element: any) => {
      element.style.height = "0px";
      element.style.height = element.scrollHeight + "px";
    };
    return (
      <textarea
        {...rest}
        className={`bg-slate-100  font-semibold hover:brightness-90 dark:bg-slate-800 dark:hover:brightness-110 ${styles["input"]} ${className}`}
      ></textarea>
      // onInput={(e) => auto_grow(e.target)}
    );
  } else {
    return (
      <input
        type="text"
        {...rest}
        className={`bg-slate-100  font-semibold hover:brightness-90 dark:bg-slate-800 dark:hover:brightness-110 ${styles["input"]} ${className}`}
      />
    );
  }
};
export default Input;
