"use client";

import Link from "next/link";
import Button from "./components/ui/Button";
import { useRouter } from "next/navigation";
import FullContainer from "./components/ui/FullContainer";
import Image from "next/image";
import XquareLogo from "./components/XquareLogo";

export default function NotFound() {
  const router = useRouter();
  return (
    <FullContainer className="flex flex-col items-center justify-center gap-3">
      <XquareLogo />
      <h2 className="text-3xl text-gray-800">404 NOT FOUND</h2>
      <p className="text-sm text-gray-400">
        찾으시려는 페이지가 존재하지 않습니다.
      </p>
      <Button size="sm" onClick={() => router.push("/service/home")}>
        홈으로 돌아가기
      </Button>
    </FullContainer>
  );
}
