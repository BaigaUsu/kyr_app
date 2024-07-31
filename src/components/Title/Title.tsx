import { ReactNode } from "react";
import styles from "./Title.module.scss";
import clsx from "clsx";

export type MainTitleProps = {
  className?: string;
  children: ReactNode;
};

export const MainTitle = ({ className, children }: MainTitleProps) => {
  return <h1 className={clsx(className, styles.mainTitle)}>{children}</h1>;
};


export const Title = ({ className, children }: MainTitleProps) => {
  return <h2 className={clsx(className, styles.title)}>{children}</h2>;
};