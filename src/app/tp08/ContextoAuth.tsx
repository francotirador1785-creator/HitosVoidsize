import React, { createContext, useState, ReactNode } from "react";

type Usuario = {
  nombre: string;
};

type ContextoAuthType = {
  usuario: Usuario | null;
  iniciarSesion: (nombre: string) => void;
  cerrarSesion: () => void;
};

type ProveedorAuthProps = {
  children: ReactNode;
};

export const ContextoAuth = createContext<ContextoAuthType | undefined>(
  undefined
);

export function ProveedorAuth({ children }: ProveedorAuthProps) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const iniciarSesion = (nombre: string) => {
    setUsuario({ nombre });
  };

  const cerrarSesion = () => {
    setUsuario(null);
  };

  return (
    <ContextoAuth.Provider
      value={{
        usuario,
        iniciarSesion,
        cerrarSesion,
      }}
    >
      {children}
    </ContextoAuth.Provider>
  );
}