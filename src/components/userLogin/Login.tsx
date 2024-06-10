"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import validate from "./validate";
import Button from "../button/Button";
import Link from "next/link";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ILogin } from "./types";
import { fetchLogin } from "@/helpers/fetchData";
import { useAuth } from "../context/UseAuth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Login() {
  const [formLogin, setFormLogin] = useState<Boolean>(false);
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const { setIsAuthenticated, setIsUserData } = useAuth();
  const router = useRouter();

  //alternar el valor entre true y false al hacer click
  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          token: "",
        }}
        validate={validate}
        onSubmit={(values: ILogin, { resetForm }) => {
          fetchLogin(values)
            .then((login) => {
              localStorage.setItem("token", login.token);
              localStorage.setItem("user", JSON.stringify(login.user));
              setIsAuthenticated(login.token);
              setIsUserData(login.user);
              toast.success("Usuario conectado");
              resetForm();
              setFormLogin(true);
              setTimeout(() => {
                router.push("/products");
              }, 1000);
            })
            .catch((error) => {
              console.error("Error al loguear usuario", error);
              toast.error("Correo electrónico o contraseña incorrecto ");
            });
        }}
      >
        {({ errors }) => (
          <Form className="text-white border p-20 rounded-xl">
            <div>
              <h1 className="text-center text-4xl sm:text-4xl md:text-5xl lg:text-5xl tracking-wider mb-8 font-bold">
                Inicia Sesión
              </h1>
            </div>
            <div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-xl sm:text-2xl md:text-2xl tracking-wide"
                >
                  Correo Electrónico:{" "}
                </label>
                <div className="flex flex-col mb-2">
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="marta@gmail.com"
                    className="bg-transparent border-b border-[#19B4FE] text-xl sm:text-2xl md:text-2xl tracking-wide"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="errors">{errors.email}</div>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col relative">
                <label
                  htmlFor="password"
                  className="text-xl sm:text-2xl md:text-2xl tracking-wide"
                >
                  Contraseña:{" "}
                </label>
                <div className="flex items-center mb-2 relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="*******"
                    className="bg-transparent border-b border-[#19B4FE] text-xl sm:text-2xl md:text-2xl tracking-wide w-full pr-10"
                  />
                  <div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={passwordVisibility}
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </div>
                </div>
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="errors">{errors.password}</div>
                  )}
                />
              </div>
              <div className="flex justify-center">
                <Button type="submit" className="lg:mx-48 my-10">
                  INICIAR SESIÓN
                </Button>
              </div>
              {formLogin && (
                <p className="text-center success">
                  Usuario logueado con éxito!
                </p>
              )}
              <div className="text-center hover:font-bold">
                <Link href="/register">¿NO TIENE UNA CUENTA? REGISTRATE</Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
