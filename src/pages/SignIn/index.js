import React from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/logo.svg";

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="email" placeholder="Digite o e-mail" />
        <input type="password" placeholder="Digite sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Não possui cadastro? Crie agora</Link>
      </form>
    </>
  );
}
