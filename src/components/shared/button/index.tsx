import * as React from "react";
import cn from "classnames";

import css from "./styles.module.scss";

type BtnType = "button" | "submit" | "reset";

export interface ButtonProps {
    title?: string
    type?: BtnType
    color?: string
    rounded?: boolean
    customBtnStyles?: string
    customBtnWrapStyles?: string
    disabled?: boolean
    children: React.ReactNode
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }

const Button = ({
    type = "button",
    rounded = false,
    color = "blue",
    onClick,
    customBtnStyles,
    customBtnWrapStyles,
    disabled = false,
    children
}: ButtonProps) => ( 
    <div className={cn(css.btn_wrapper, customBtnWrapStyles)}>
        <button 
            type={type}
            className={cn(
            css.btn,
            {
                [css.btn__rounded]: rounded,
                [css[color]]: css[color]
            },
            customBtnStyles
            )}
            onClick={onClick}
            disabled={disabled}
            // disabled
        >
            {children}
        </button>
    </div>
    );


export default Button;