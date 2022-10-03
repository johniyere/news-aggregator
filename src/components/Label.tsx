import cn from "clsx";
import { FC, LabelHTMLAttributes } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const Label: FC<LabelProps> = ({ className, children }) => {
  const rootClassName = cn(`text-sm`, className);

  return <label className={rootClassName}>{children}</label>;
};

export default Label;
