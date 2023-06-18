"use client";

import ClientOnly from "@/app/components/ClientOnly";
import XquareLogo from "@/app/components/XquareLogo";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";

const LoginForm = () => {
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/service/home");
      }}
      className="flex flex-col items-center justify-start gap-4 p-12 bg-white rounded-md w-96 drop-shadow"
    >
      <XquareLogo width={42} height={42} priority />
      <div className="flex flex-col w-full gap-2">
        <Input placeholder="아이디" />
        <Input placeholder="패스워드" type="password" />
      </div>
      <Button
        size="sm"
        onClick={() => {
          router.push("/service/home");
        }}
      >
        로그인 하기
      </Button>
    </form>
  );
};

export default LoginForm;
