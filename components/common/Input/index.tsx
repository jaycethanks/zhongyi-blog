import styles from './input.module.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return (
    <input
      type="text"
      {...rest}
      className={`bg-slate-100 bg-opacity-50 font-semibold hover:brightness-90 dark:bg-slate-600 dark:hover:brightness-110 ${styles["input"]} ${className}`}
    />
  );
};
export default Input;
