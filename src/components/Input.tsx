/* eslint-disable react/function-component-definition */
import cn from "clsx";
import React, { forwardRef, InputHTMLAttributes, useRef } from "react";
import { mergeRefs } from "react-merge-refs";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (...args: any[]) => any;
}

const Input: React.FC<InputProps> = forwardRef((props, inputRef) => {
  // eslint-disable-next-line react/prop-types
  const { className, children, onChange, ...rest } = props;
  const ref = useRef(null);

  const rootClassName = cn(
    `w-full border-2 border-gray-900 placeholder:text-gray-400 rounded-md hover:border-blue-500 focus:input-focus-shadow`,
    className,
  );

  return (
    <input
      className={rootClassName}
      onChange={onChange}
      ref={mergeRefs([ref, inputRef])}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      {...rest}
    />
  );
});

export default Input;
