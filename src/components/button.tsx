import React from 'react';
import styles from './Button.module.scss';
import classNames from "@/utils/classnames";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    backgroundColor?: string;
    label?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false, primary = false, size = 'medium' , backgroundColor }) => {
    const buttonClass = classNames({
        [styles.button]: true,
        [styles.primary]: primary,
        [styles.disabled]: disabled,
        [styles[size]]: true,
    });

    return (
        <button

            style={{ backgroundColor }}
            type="button"
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;