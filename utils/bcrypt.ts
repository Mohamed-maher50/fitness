import bcryptjs, { genSalt } from "bcryptjs";
export const hash = async (password: string) => {
  const salt = await genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);
  return hashedPassword;
};
