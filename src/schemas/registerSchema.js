import { z } from "zod";

const loginSchema = z.object({
  name: z
    .string()
    .nonempty("نام الزامی هست")
    .min(3, "نام حداقل باید سه حرف باشد"),
  family: z
    .string()
    .nonempty("نام خانوادگی الزامی هست")
    .min(3, "نام خانوادگی باید حداقل سه حرف باشد"),
  email: z.string().nonempty("ایمیل الزامی هست").email("ایمیل معتبر نیست"),
  password: z
    .string()
    .nonempty("پسورد الزامی هست")
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
});

export default loginSchema;
