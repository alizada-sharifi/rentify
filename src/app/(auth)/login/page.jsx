"use client";

import Input from "@/components/form/CustomInput";
import { Facebook, Google, Linkedin } from "@/components/icons";
import { Button } from "@/components/ui/button";
import useForm, { FormProvider } from "@/hooks/useForm";
import { loginSchema } from "@/schemas";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";

export default function Login() {
  const { handleSubmit, ...methods } = useForm(loginSchema);

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <>
      <h1 className="font-bold text-2xl md:text-4xl">ورود</h1>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <Input name="email" placeholder="ایمیل" Icon={Mail} />
          <Input
            name="password"
            placeholder="رمز عبور"
            Icon={Lock}
            type="password"
          />
          <Button className="w-full">ورود</Button>
        </form>
      </FormProvider>

      <p>
        قبلا ثبت نام نکردی؟{" "}
        <Link className="text-primary" href={"/register"}>
          ثبت نام
        </Link>
      </p>

      <div className="flex items-center gap-4 text-gray-500 text-sm">
        --------------------------
        <span>یا ورود از طریق</span>
        --------------------------
      </div>

      <div className="flex items-center gap-4">
        <Google />
        <Facebook />
        <Linkedin />
      </div>
    </>
  );
}
