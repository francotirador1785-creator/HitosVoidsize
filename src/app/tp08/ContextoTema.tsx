import React, { createContext, useState, ReactNode } from "react";

type ContextoTemaType = {
  tema: "claro" | "oscuro";
  cambiarTema: () => void;
};

type ProveedorTemaProps = {
  children: ReactNode;
};

export const ContextoTema = createContext<ContextoTemaType | undefined>(
  undefined
);

export function ProveedorTema({ children }: ProveedorTemaProps) {
  const [tema, setTema] = useState<"claro" | "oscuro">("claro");

  const cambiarTema = () => {
    setTema((temaActual) =>
      temaActual === "claro" ? "oscuro" : "claro"
    );
  };

  return (
    <ContextoTema.Provider value={{ tema, cambiarTema }}>
      {children}
    </ContextoTema.Provider>
  );
}