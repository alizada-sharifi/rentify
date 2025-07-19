import localFont from "next/font/local";

export const iranYekan = localFont({
  src: [
    {
      path: "../assets/fonts/IRANYekanFN/woff/iranyekanwebregular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANYekanFN/woff/iranyekanwebmedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANYekanFN/woff/iranyekanwebbold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/IRANYekanFN/woff/iranyekanwebextrabold.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-iran-yekan",
  display: "swap",
});
