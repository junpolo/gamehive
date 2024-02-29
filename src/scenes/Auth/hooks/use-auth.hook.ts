import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sha256 } from "crypto-hash";

import { LoginData } from "@core/data";
import { cookieHelper } from "@core/helpers";
import { loginSchema } from "../validations/login.validation";

type FormValues = {
  username: string;
  password: string;
};

export const useAuth = () => {
  const [isValid, setIsValid] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (form: FormValues) => {
    if (
      form.username === LoginData.username &&
      form.password === LoginData.password
    ) {
      const accessToken = await sha256(form.username);
      cookieHelper.setCookie("access_token", accessToken);
      window.location.href = "/app";
      return;
    }
    setIsValid(false);
  };

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
    isSubmitted,
  };
};
