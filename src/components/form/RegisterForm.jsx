"use client";

import Input from "@/components/form/CustomInput";
import { Facebook, Google, Linkedin } from "@/components/icons";
import { Button } from "@/components/ui/button";
import useForm, { FormProvider } from "@/hooks/useForm";
import { registerSchema } from "@/schemas";
import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { useEffect } from "react";

export default function RegisterForm() {
  const [activeSection, setActiveSection] = useQueryState("activeSection");

  useEffect(() => {
    if (!activeSection) {
      setActiveSection("tenant");
    }
  }, [activeSection]);

  const { handleSubmit, ...methods } = useForm(registerSchema);

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <>
      <div className="flex w-full bg-neutral-50 py-1 rounded-2xl justify-between px-4 gap-2">
        <Button
          className={`w-1/2 font-semibold rounded-2xl ${
            activeSection === "agency" ? "text-neutral-400" : "text-black"
          }`}
          variant={activeSection === "tenant" ? "outline" : "ghost"}
          onClick={() => setActiveSection("tenant")}
        >
          مالک | مستاجر
        </Button>
        <Button
          className={`w-1/2 font-semibold rounded-2xl ${
            activeSection === "tenant" ? "text-neutral-400" : "text-black"
          }`}
          variant={activeSection === "agency" ? "outline" : "ghost"}
          onClick={() => setActiveSection("agency")}
        >
          آژانس مالک
        </Button>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <div className="flex gap-2">
            <Input name="name" placeholder="نام" Icon={User} />
            <Input name="family" placeholder="نام خانوادگی" Icon={User} />
          </div>
          <Input name="email" placeholder="ایمیل" Icon={Mail} />
          <Input
            name="password"
            placeholder="رمز عبور"
            Icon={Lock}
            type="password"
          />
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="rules"
              id="rules"
              className="size-4"
              required
            />
            <label htmlFor="rules" className="text-sm text-neutral-300">
              با قوانین{" "}
              <Link href={"/"} className="text-primary font-semibold">
                رنتی فای
              </Link>{" "}
              موافق هستم
            </label>
          </div>
          <Button className="w-full">تایید و دریافت کد</Button>
        </form>
      </FormProvider>

      <p>
        قبلا ثبت نام کردید؟{" "}
        <Link className="text-primary" href={"/login"}>
          ورود
        </Link>
      </p>
    </>
  );
}
