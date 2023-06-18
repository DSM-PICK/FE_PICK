import { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "PICK DSM",
  description:
    "대덕 소프트웨어 마이스터고등학교만의 학생 출결 관리 서비스 관리자 웹 입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
