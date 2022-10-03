/* eslint-disable react/prop-types */
import {
  ButtonHTMLAttributes,
  FC,
  forwardRef,
  JSXElementConstructor,
  useRef,
} from "react";
import { mergeRefs } from "react-merge-refs";
import clsx from "clsx";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  className?: string;
  active?: boolean;
  type?: "submit" | "reset" | "button";
  Component?: string | JSXElementConstructor<any>;
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
  color?: "white" | "mustard" | "ultramarine";
}

const Button: FC<ButtonProps> = forwardRef((props, buttonRef) => {
  const {
    className,
    color = "white",
    children,
    active,
    width,
    disabled = false,
    style = {},
    Component = "button",
    ...rest
  } = props;

  const ref = useRef<typeof Component>(null);

  const rootClassName = clsx(
    `transition-all font-display rounded-lg px-4 pt-2 pb-2.5 border-2 leading-normal`,
    {
      "bg-neutral-50 text-neutral-900 border-gray-500 hover:bg-neutral-100 active:btn-white-active btn-white-shadow":
        color === "white",
      "bg-ultramarine-200 text-ultramarine-500 border-ultramarine-500 hover:bg-ultramarine-100 active:btn-ultramarine-active btn-ultramarine-shadow":
        color === "ultramarine",
      "bg-mustard-500 text-brown-500 border-brown-500 active:btn-mustard-active btn-mustard-shadow":
        color === "mustard",
    },
    className,
  );

  return (
    <Component
      aria-pressed={active}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </Component>
  );
});
Button.displayName = "Button";

export default Button;
