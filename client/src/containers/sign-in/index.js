import { useEffect } from "react";

import {
  FormContainer,
  LinkPlace,
  StyledForm,
  StyledInput,
  SubmitButton,
} from "./styled";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../resolvers/sign-in-form";
import { Link, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";

import axios from "axios";

export const SignIn = ({ isUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  useEffect(() => {
    if (isUser) navigate("/profile");
  }, [isUser, navigate]);

  const sign_up_user = async (data) => {
    try {
      const request = await axios.post("http://localhost:3002/signin", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const token = request.data.token;

      localStorage.setItem("token", token);

      if (request.status === 200) {
        navigate("/profile");
      }
    } catch (err) {
      if (err.status === 400) toast.error("Սխալ լոգին կամ գաղտնաբառ");
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(sign_up_user)}>
        <ToastContainer />

        <StyledInput
          type="email"
          placeholder={errors?.email ? errors.email.message : "Էլ. հասցե"}
          {...register("email")}
          err={errors?.email && "true"}
        />
        <StyledInput
          type="password"
          placeholder={errors?.password ? errors.password.message : "Գաղտնաբառ"}
          {...register("password")}
          err={errors?.password && "true"}
        />

        <SubmitButton type="submit">Մուտք</SubmitButton>
        <LinkPlace>
          <Link to={"/signup"}>Չունե՞ք հաշիվ: գրանցվել</Link>
        </LinkPlace>
      </StyledForm>
    </FormContainer>
  );
};
