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
import { schema } from "../../resolvers/sign-up-form";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

export const SignUp = ({isUser}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  useEffect(()=> {
    if(isUser) {navigate('/profile')}
  }, [isUser, navigate])

  const sign_up_user = async (data) => {
    console.log(data);
    try {
      const request = await axios.post("http://localhost:3002/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });


      const token = request.data.token;

      localStorage.setItem("token", token);
      
      if (request.status === 201) {
        navigate("/profile");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(sign_up_user)}>
        <StyledInput
          type="text"
          placeholder={errors?.name ? errors.name.message : "Անուն"}
          {...register("name")}
          err={errors?.name && "true"}
        />
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
        <StyledInput
          type="password"
          placeholder={errors?.confirm_password ? errors.confirm_password.message : "Հաստատել գաղտնաբառը"}
          {...register("confirm_password")}
          err={errors?.confirm_password && "true"}
        />

        <SubmitButton type="submit">Գրանցվել</SubmitButton>
        <LinkPlace>
          <Link to={"/signin"}>Արդեն ունե՞ք հաշիվ: մուտք գործել</Link>
        </LinkPlace>
      </StyledForm>
    </FormContainer>
  );
};
