import { useEffect } from "react";
import LoginForm from "./client/LoginForm";

const Login = () => {
  return (
    <div className="absolute flex items-center justify-center w-full h-full bg-[url('/img/loginBackground.png')] bg-cover">
      <LoginForm />
    </div>
  );
};

export default Login;
