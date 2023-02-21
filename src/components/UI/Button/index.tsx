import {
  useEffect,
  useState,
  FC,
  forwardRef,
  ReactNode,
  CSSProperties,
} from "react";

import s from "./button.module.scss";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  laout: "nav" | "primary";
  onClick?: () => void;
  style?: CSSProperties;
}
export const Button: FC<ButtonProps> = forwardRef(
  (
    {
      children,
      disabled = false,
      onClick,
      className,
      laout,
      style,
      type = "button",
    },
    ref: any
  ) => {
    const [btnStyles, setBtnStyle] = useState<string>("");
    useEffect(() => {
      setBtnStyle(
        [s.button, className, laout === "nav" ? s.nav : s.primary].join(" ")
      );
    }, [className, laout]);
    return (
      <button
        type={type}
        style={style}
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        className={btnStyles}
      >
        {children}
      </button>
    );
  }
);
