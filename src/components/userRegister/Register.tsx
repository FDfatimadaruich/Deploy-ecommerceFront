"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import validate from "./validate";
import Button from "../button/Button";
import Link from "next/link";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { fetchRegister } from "@/helpers/fetchData";
import { IRegister, IRegisterProps } from "./types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Register() {
  const router = useRouter();
  const [formRegister, setFormRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          address: "",
          phone: "",
        }}
        validate={validate}
        onSubmit={(values: IRegister, { resetForm }) => {
          const dataUser: IRegisterProps = {
            name: values.name,
            email: values.email,
            password: values.password,
            address: values.address,
            phone: values.phone,
          };
          fetchRegister(dataUser)
            .then((user) => {
              setFormRegister(true);
              toast.success("Usuario registrado con éxito");
              resetForm();
              setTimeout(() => {
                router.push("/login");
              }, 1000);
            })
            .catch((error) => {
              console.log("Error al registrar usuario", error);
              toast.error("Error al registrar usuario");
            });
        }}
      >
        {({ errors }) => (
          <Form className="text-white border rounded-xl p-20 w-full max-w-2xl">
            <div>
              <h1 className="text-center text-4xl sm:text-4xl md:text-5xl lg:text-5xl tracking-wider mb-2 font-bold">
                Crea una cuenta
              </h1>
              <p className="text-center tracking-wider mb-8">
                Completa todos los campos para crear una cuenta
              </p>
            </div>
            <div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-xl sm:text-2xl md:text-2xl tracking-wide"
                >
                  Nombre:
                </label>
                <div className="flex flex-col mb-2">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Marta"
                    className="bg-transparent border-b border-[#19B4FE] text-xl sm:text-2xl md:text-2xl tracking-wide"
                  />
                  <ErrorMessage
                    name="name"
                    component={() => (
                      <div className="errors">{errors.name}</div>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-xl sm:text-2xl md:text-2xl tracking-wide"
                >
                  Correo Electrónico:
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
                  Contraseña:
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
                    {showPassword ? (
                      <AiFillEyeInvisible color="white" />
                    ) : (
                      <AiFillEye color="white" />
                    )}
                  </div>
                </div>
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="errors">{errors.password}</div>
                  )}
                />
              </div>
              <div className="flex flex-col relative">
                <label
                  htmlFor="confirmPassword"
                  className="text-xl sm:text-2xl md:text-2xl tracking-wide"
                >
                  Repetir contraseña:
                </label>
                <div className="flex items-center mb-2 relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="*******"
                    className="bg-transparent border-b border-[#19B4FE] text-xl sm:text-2xl md:text-2xl tracking-wide w-full pr-10"
                  />
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component={() => (
                    <div className="errors">{errors.confirmPassword}</div>
                  )}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="address"
                  className="text-xl sm:text-2xl md:text-2xl tracking-wide"
                >
                  Dirección:
                </label>
                <div className="flex flex-col mb-2">
                  <Field
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Mitre 148"
                    className="bg-transparent border-b border-[#19B4FE] text-xl sm:text-2xl md:text-2xl tracking-wide"
                  />
                  <ErrorMessage
                    name="address"
                    component={() => (
                      <div className="errors">{errors.address}</div>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-xl sm:text-2xl md:text-2xl tracking-wide"
                >
                  Teléfono:
                </label>
                <div className="flex flex-col mb-4">
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="115-546787"
                    className="bg-transparent border-b border-[#19B4FE] text-xl sm:text-2xl md:text-2xl tracking-wide"
                  />
                  <ErrorMessage
                    name="phone"
                    component={() => (
                      <div className="errors">{errors.phone}</div>
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Button type="submit" className="my-10 lg:mx-20">
                  REGISTRARSE
                </Button>
              </div>
              {formRegister && (
                <p className="text-center success">
                  Usuario registrado con éxito!
                </p>
              )}
              <div className="text-center hover:font-bold">
                <Link href="/login">¿TIENE UNA CUENTA? INICIA SESIÓN</Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
