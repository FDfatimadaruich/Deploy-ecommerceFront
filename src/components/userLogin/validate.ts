import { ILogin, ILoginError } from "./types";

export default function validate(values: ILogin): ILoginError {
  const errors: ILoginError = {};
  if (!values.email) {
    errors.email = "Por favor ingrese un correo electrónico";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
  ) {
    errors.email =
      "El correo solo puede contener letras, números, puntos, guiones y guion bajo";
  }
  if (!values.password) {
    errors.password = "Por favor ingrese una contraseña";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  return errors;
}
