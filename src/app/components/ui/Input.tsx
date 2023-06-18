"use client";
import { cn } from "@/app/utils/cn";
import { InputHTMLAttributes, PropsWithChildren } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({
  children,
  className,
  ...props
}: PropsWithChildren<InputProps>) => {
  return (
    <input
      className={cn(
        "outline-none border border-gray-200 hover:border-purple-200 focus:border-purple-400 rounded-md py-2 px-3 w-full font-normal text-sm",
        className
      )}
      {...props}
    />
  );
};

export default Input;
