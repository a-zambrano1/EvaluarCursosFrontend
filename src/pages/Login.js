import React from "react";
import { useMutation, useQuery } from "react-query";
import * as fetchers from "../middleware/fetchers";

export const Login = () => {
  const loginMutation = useMutation({
    mutationFn: fetchers.login,
  });

  return (
    <div className="container">
      <p className="title">Iniciar Sesión</p>
      <input placeholder="Correo" />
      <input placeholder="Contraseña" type="password" />
      <button disabled={loginMutation.isLoading} onClick={loginMutation.mutate}>
        Entrar
      </button>
    </div>
  );
};
