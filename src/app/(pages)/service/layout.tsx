"use client";

import FullContainer from "@/app/components/ui/FullContainer";
import { PropsWithChildren, useEffect } from "react";
import Image from "next/image";
import NavMenu from "@/app/components/NavMenu";

const ServiceLayout = ({ children }: PropsWithChildren) => {
  return (
    <FullContainer className="flex flex-row">
      <div className="flex flex-col h-full p-4 border-r border-r-gray-200 w-72">
        <div className="flex items-center gap-3 pb-2">
          <Image src="/xquareLogo.webp" alt="logo" width={36} height={36} />
          <div className="text-lg font-semibold">장연순 선생님</div>
        </div>
        <div className="h-3 mb-3 border-b border-gray-200" />
        <NavMenu menuName="홈" iconSrc="/img/check.svg" menuPrefix="home" />
        <div className="h-3 mb-3 border-b border-gray-200" />

        <NavMenu
          menuName="외출 이동/수락"
          iconSrc="/img/check.svg"
          menuPrefix="/수락"
        />
        <NavMenu menuName="외출자 목록" iconSrc="/img/check.svg"></NavMenu>
        <NavMenu menuName="출결 상태" iconSrc="/img/check.svg"></NavMenu>
        <div className="h-3 mb-3 border-b border-gray-200" />
        <NavMenu menuName="동아리 인원변경" iconSrc="/img/check.svg" />
        <NavMenu menuName="반 인원변경" iconSrc="/img/check.svg"></NavMenu>
        <NavMenu menuName="방과후 인원변경" iconSrc="/img/check.svg"></NavMenu>
        <NavMenu menuName="자습감독 선생님 변경" iconSrc="/img/check.svg" />
        <div className="h-3 mb-3 border-b border-gray-200" />
        <NavMenu menuName="주말 급식 신청 현황" iconSrc="/img/check.svg" />
      </div>

      <div className="flex-1 overflow-auto">{children}</div>
    </FullContainer>
  );
};

export default ServiceLayout;
