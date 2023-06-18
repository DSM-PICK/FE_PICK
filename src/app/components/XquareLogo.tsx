import Image from "next/image";
import { ComponentProps } from "react";

interface XquareLogoProps
  extends Omit<ComponentProps<typeof Image>, "src" | "alt"> {}

const XquareLogo = ({ width = 36, height = 36, ...props }: XquareLogoProps) => {
  return (
    <Image
      src="/xquareLogo.webp"
      alt="xquare logo"
      width={width}
      height={height}
      {...props}
    />
  );
};

export default XquareLogo;
