import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginData } from "@core/data";
import { loginSchema } from "../validations/login.validation";
import { useState } from "react";

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
    setIsValid(true);

    if (
      form.username === LoginData.username &&
      form.password === LoginData.password
    ) {
      console.log("Redirect");
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
