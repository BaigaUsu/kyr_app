import { ReactNode } from "react";
import styles from "./Description.module.scss";
import clsx from "clsx";

export type DescriptionProps = {
  className?: string;
  children: ReactNode;
};

export const Description = ({ className, children }: DescriptionProps) => {
  return <h3 className={clsx(className, styles.description)}>{children}</h3>;
};