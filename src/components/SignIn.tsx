import React, { useContext } from "react";
import { SignInContext } from "../context/SignInContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInContextType } from "../context/SignInContextType";

const regEx = RegExp("(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-_@#$%]).{8,}");

/*const regEx = RegExp("(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-_@#$%]).{8,}");

const schema = yup.object().shape({
  username: yup.string().required("Digite seu usuário"),
  password: yup
    .string()
    .required("campo obrigatório")
    .matches(
      regEx,
      "A senha deve conter mínimo de oito caracteres, pelo menos uma letra, um número e um caractere especial"
    ),
});

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("campo obrigatório"),*/

const schema = yup.object().shape({
  username: yup.string().required("Digite seu usuário"),
  password: yup
    .string()
    .required("campo obrigatório")
    .matches(
      regEx,
      "A senha deve conter mínimo de oito caracteres, pelo menos uma letra, um número e um caractere especial"
    ),
});

confirmPassword: yup
  .string()
  .oneOf([yup.ref("password"), null])
  .required("campo obrigatório");

/*
const schema = yup.object().shape({
  user: yup.string().required("campo obrigatório"),
  password: yup
    .string()
    .min(8, "8 caracteres no mínimo")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#]).{8,}$/,
      "A senha deve conter mínimo de oito caracteres, pelo menos uma letra, um número e um caractere especial"
    )
    .required("Senha obrigatória"),
  passwordConfirmation: yup.string().required("Senha obrigatória"),
  /*.oneOf([yup.ref("password"), null], "Senha deve ser igual"),
});*/

interface AddUserForm {
  username: string;
  password: string;
}

const SignIn = () => {
  const { addUser } = useContext<SignInContextType>(SignInContext);
  const {
    register,
    handleSubmit,
    //  formState: { errors },
  } = useForm(); /*({ resolver: yupResolver(schema) })*/

  const onSubmit = (data: AddUserForm) => {
    addUser(data.username, data.password);
    window.location.href = "/listLead";
  };

  return (
    <form className="uk-form" onSubmit={handleSubmit<AddUserForm>(onSubmit)}>
      <div className="uk-margin ">
        <caption>Usuário*</caption>
        <input
          type="text"
          id="username"
          placeholder="nome de usuário"
          className="uk-input"
          {...register("username")}
        />
        <span>
          <small>
            <strong className="uk-text-danger"></strong>
          </small>
        </span>
        <caption>Senha*</caption>
        <input
          type="password"
          id="password"
          placeholder="senha"
          className="uk-input"
          {...register("password")}
        />
        <span>
          <small>
            <strong className="uk-text-danger"></strong>
          </small>
        </span>
        <caption>Confirmação de senha*</caption>
        <input
          type="password"
          id="confirmPassword"
          placeholder="digite a senha"
          className="uk-input"
        />
        <span>
          <small>
            <strong className="uk-text-danger"></strong>
          </small>
        </span>
      </div>
      <div className="uk-width-1-1">
        <button
          type="submit"
          className="uk-button uk-button-primary uk-margin"
          onClick={handleSubmit<AddUserForm>(onSubmit)}
        >
          Registrar
        </button>
      </div>
    </form>
  );
};

export default SignIn;
