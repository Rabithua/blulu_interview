import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import axios from "axios";

const emailSchame = z.string().email();

export const HomePage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emailErrMsg, setEmailErrMsg] = useState<string | null>(null);

  function emailInputHandle(e: any) {
    const v = e.target.value;
    const t = emailSchame.safeParse(v);
    if (!t.success) {
      setEmailErrMsg("Email fomate wrong!");
    } else {
      setEmailErrMsg(null);
    }
    setEmail(v);
  }

  function submit() {
    const t = emailSchame.safeParse(email);
    if (!t.success) {
      setEmailErrMsg("Email fomate wrong!");
    } else {
      setEmailErrMsg(null);
      sendLinkEmail();
    }
  }

  function sendLinkEmail() {
    axios
      .post("/v1/user/send_mail", {
        code: "",
        email: email,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className=" w-dvw h-dvh flex justify-center items-center p-4 lg:p-10">
      <div className=" flex flex-col gap-4 p-4 rounded-xl border bg-white">
        <div className=" text-xl font-semibold">Welcom Demo</div>
        <div>Please confirm your email to continue</div>
        <Input placeholder="Your email address" onChange={emailInputHandle} />
        {emailErrMsg && (
          <div className=" text-red-500 text-sm">{emailErrMsg}</div>
        )}
        <Button onClick={submit}>Continue</Button>
      </div>
    </div>
  );
};
