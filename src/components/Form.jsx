import { yupResolver } from "@hookform/resolvers/yup";
import { MainContainer } from "./MainConainer";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "./PrimaryButton";
import * as yup from "yup";
import parsePhoneNumberFromString from "libphonenumber-js";

const schema = yup.object().shape({
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле содержит недопустимые символы")
    .required("Поле является обязательным"),
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле содержит недопустимые символы")
    .required("Поле является обязательным"),
  surname: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле содержит недопустимые символы")
    .required("Поле является обязательным"),
  email: yup.string().email("Введен некорректный адрес почты"),
});

const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if(!phoneNumber){
        return value
    }
    return(
        phoneNumber.formatInternational()
    )
}
export const Form = ({ children, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <MainContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          marginTop: (theme) => theme.spacing(1),
          width: "100%",
        }}
        {...props}
      >
        <Input
          {...register("lastName")}
          id="lastName"
          type="text"
          label="Фамилия"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <Input
          {...register("firstName")}
          id="firstName"
          type="text"
          label="Имя"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register("surname")}
          id="surname"
          type="text"
          label="Отчество"
          name="surname"
          error={!!errors.surname}
          helperText={errors?.surname?.message}
        />
        <Input
          {...register("email")}
          id="email"
          type="email"
          label="Email (необязательно)"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <Input
        {...register("phoneNumber")}
          id="phoneNumber"
          type="tel"
          label="Мобильный телефон"
          name="phoneNumber"
          onChange={(event) => {
            event.target.value = normalizePhoneNumber(event.target.value)
          }}
         
        />
        <PrimaryButton />
      </form>
    </MainContainer>
  );
};
