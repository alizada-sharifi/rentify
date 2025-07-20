import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function Input({
  name = "",
  placeholder = "",
  type = "text",
  className = "",
  wrapperClassName = "",
  Icon,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const ispasswordType = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn("space-y-1 w-full", wrapperClassName)}>
      <div className="relative w-full ">
        <input
          {...register(name)}
          type={ispasswordType && showPassword ? "text" : type}
          placeholder={placeholder}
          className={cn(
            "block w-full font-medium  outline-none border border-neutral-200 p-2 pr-10 rounded-md ",
            className,
            {
              "border-error focus:border-error": errors[name],
            }
          )}
        />
        <Icon className="absolute top-1/2 -translate-y-1/2 text-gray-300 right-2 " />

        {ispasswordType && (
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 cursor-pointer"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
      {errors[name] && (
        <p className="text-xs text-error">{errors[name].message}</p>
      )}
    </div>
  );
}
