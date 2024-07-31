import { ReactNode } from "react";
import styles from './Button.module.scss'
import clsx from 'clsx'


export type ButtonProps = {
  className?: string;
  children: ReactNode;
};

export default function Button({className, children}: ButtonProps) {
    return (
        <button className={clsx(className, styles.button)}>{children}</button>
    )
}