import { useEffect } from "react";

import { FormContainer, StyledForm, StyledInput, SubmitButton } from "./styled";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../resolvers/sign-in-form";

import { useNavigate } from "react-router-dom";

import axios from "axios";

export const AdminSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("admin");
  }, []);

  const sign_up_user = async (data) => {
    try {
      const request = await axios.post(
        "http://localhost:3002/admin/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (request.data.message === "Login successful") {
        localStorage.setItem("admin", request.data.token);
        navigate("/admin-ed-na/main-panel");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(sign_up_user)}>
        <h1 style={{ textAlign: "center" }}>Welcome to admin</h1> <br />
        <StyledInput
          type="text"
          placeholder={"Login"}
          {...register("login")}
          err={errors?.login && "true"}
        />
        <StyledInput
          type="password"
          placeholder={"Password"}
          {...register("password")}
          err={errors?.password && "true"}
        />
        <SubmitButton type="submit">Sign In</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};
