import { cn } from "@/app/utils/cn";
import { HTMLAttributes, PropsWithChildren } from "react";

const FullContainer = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div
      className={cn("absolute top-0 right-0 w-full h-full", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default FullContainer;
