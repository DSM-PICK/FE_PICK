"use client";

import FullContainer from "./components/ui/FullContainer";
import XquareLogo from "./components/XquareLogo";
import Button from "./components/ui/Button";
import Error from "next/error";

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <html>
      <body>
        <FullContainer className="flex flex-col items-center justify-center gap-3">
          <XquareLogo />
          <h2 className="text-3xl text-gray-800">
            An unknown error has occurred in global
          </h2>
          <p className="text-sm text-gray-400">
            문제가 지속될 경우 관리자를 찾아주세요.
          </p>
        </FullContainer>
      </body>
    </html>
  );
};

export default GlobalError;
