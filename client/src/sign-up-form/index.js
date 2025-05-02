import {
  FormContainer,
  LinkPlace,
  StyledForm,
  StyledInput,
  SubmitButton,
} from "./styled";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../resolvers/sign-up-form";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

export const SignUpForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const sign_up_user = async (data) => {
    console.log(data);
    try {
      const request = await axios.post("http://localhost:3002/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(request);

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
          placeholder={"Name"}
          {...register("name")}
          err={errors?.name && "true"}
        />
        <StyledInput
          type="email"
          placeholder={"Email"}
          {...register("email")}
          err={errors?.email && "true"}
        />
        <StyledInput
          type="password"
          placeholder={"Password"}
          {...register("password")}
          err={errors?.password && "true"}
        />
        <StyledInput
          type="password"
          placeholder={"Confirm Password"}
          {...register("confirm_password")}
          err={errors?.confirm_password && "true"}
        />
        <SubmitButton type="submit">Sign Up</SubmitButton>
        <LinkPlace>
          <Link to={"/login"}>Already have an account? log in</Link>
        </LinkPlace>
      </StyledForm>
    </FormContainer>
  );
};
