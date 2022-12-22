import { PropsWithChildren } from 'react';

import styles from './button.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...rest
}) => {
  console.log("[rest]: ", rest);
  return (
    <button
      {...rest}
      className={`bg-BG_MAIN_DEEP  transition-colors duration-TRANSITION_DURATION hover:brightness-90 active:brightness-75 dark:bg-DARK_BG_MAIN_DEEP  dark:hover:brightness-110 dark:active:brightness-125 ${styles["button"]} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
