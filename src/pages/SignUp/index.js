import React from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/logo.svg";

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Digite o nome completo" />
        <input type="email" placeholder="Digite o e-mail" />
        <input type="password" placeholder="Digite sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/">Já possui cadastro? Acesse agora</Link>
      </form>
    </>
  );
}
