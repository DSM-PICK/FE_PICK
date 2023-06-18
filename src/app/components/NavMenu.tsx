"use client";
import Image, { ImageProps } from "next/image";
import { cn } from "../utils/cn";
import { usePathname } from "next/navigation";

interface NavMenuProps {
  iconSrc: ImageProps["src"];
  menuName?: string;
  menuPrefix?: string;
}

const NavMenu = ({ iconSrc, menuName = "", menuPrefix }: NavMenuProps) => {
  const currentPath = usePathname();

  return (
    <div
      className={cn(
        "flex items-center w-full h-12 hover:bg-gray-100 active:bg-gray-300 gap-2 px-3 py-2 rounded-md cursor-pointer",
        currentPath.startsWith(`/service${menuPrefix && `/${menuPrefix}`}`)
          ? "bg-gray-200"
          : "bg-white"
      )}
    >
      <Image src={iconSrc} alt={menuName} width={16} height={16} />
      <div>{menuName}</div>
    </div>
  );
};

export default NavMenu;
