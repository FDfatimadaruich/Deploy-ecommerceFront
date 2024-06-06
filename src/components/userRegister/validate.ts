import { IRegister, IRegisterError } from "./types";

export default function validate(values: IRegister): IRegisterError {
  const errors: IRegisterError = {};
  if (!values.name) {
    errors.name = "Por favor ingrese un nombre";
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
    errors.name = "El nombre solo puede contener letras y espacios";
  }
  if (!values.password) {
    errors.password = "Por favor ingrese una contraseña";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Por favor confirme su contraseña";
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  if (!values.email) {
    errors.email = "Por favor ingrese un correo electrónico";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)
  ) {
    errors.email =
      "El correo solo puede contener letras, números, puntos, guiones y guion bajo";
  }
  if (!values.address) {
    errors.address = "Por favor ingrese una dirección";
  }
  if (!values.phone) {
    errors.phone = "Por favor ingrese un número de teléfono";
  }

  return errors;
}
