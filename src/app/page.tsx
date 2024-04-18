import { Header } from "@/components/Header/header";
import { SignInForm } from "@/components/SigninForm/signIn-form";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <div className="flex flex-col h-screen w-screen p-4">
      <Header/>
      <div className="flex-1 flex flex-col justify-center items-center">
        <SignInForm/>
      </div>
    </div>
    </>
  );
}
