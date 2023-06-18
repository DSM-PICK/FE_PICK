"use client";
import { cn } from "@/app/utils/cn";
import { HTMLAttributes, PropsWithChildren } from "react";

type SizeType = "sm" | "md" | "lg";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: SizeType;
  disabled?: boolean;
  fullWidth?: boolean;
}

const ButtonSizeSelector: Record<SizeType, string> = {
  lg: "px-10 py-4 text-lg rounded-lg",
  md: "px-6 py-3 text-base rounded-md",
  sm: "px-4 py-2 text-sm rounded-sm",
};

const Button = ({
  children,
  className,
  fullWidth,
  size = "md",
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cn(
        "bg-purple-500 focus-visible:outline-purple-700 active:bg-purple-700 text-gray-50 hover:bg-purple-600 disabled:cursor-not-allowed disabled:opacity-50 w-auto h-auto",
        ButtonSizeSelector[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
