import {
  AuthAvatar,
  Facebook,
  Google,
  Linkedin,
  Logo,
} from "@/components/icons";

export default function Layout({ children }) {
  return (
    <main className="bg-tint-50 w-full h-screen">
      <div className="container xl:flex items-center h-screen w-full justify-between py-10">
        <div className="bg-white xl:w-1/3  h-screen flex items-center justify-center flex-col gap-6 px-4 md:px-10 ">
          <Logo />
          {children}
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
        </div>
        <div className="hidden xl:block  ">
          <AuthAvatar />
        </div>
      </div>
    </main>
  );
}
