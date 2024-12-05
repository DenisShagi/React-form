import { yupResolver } from "@hookform/resolvers/yup";
import { MainContainer } from "./MainContainer";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "./PrimaryButton";
import { MaskedInput } from "./MaskedInput";
import { GenderSelect } from "./GenderSelect";
import { BirthdayPicker } from "./BirthdayPicker";
import styles from "../App.module.scss";
import * as yup from "yup";

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
    .matches(/^([^0-9]*)$/, "Поле содержит недопустимые символы"),
  email: yup.string().email("Введен некорректный адрес почты").nullable(),
  phoneNumber: yup
    .string()
    .required("Поле является обязательным")
    .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Некорректный формат номера"),
  birthday: yup.date().required("Поле является обязательным"),
});

const initialValues = {
  lastName: "",
  firstName: "",
  surname: "",
  gender: "male",
  birthday: null,
  phoneNumber: "",
  email: "",
  address: "",
  employer: "",
};

export const Form = ({ children, ...props }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const onSubmit = (data) => {
    alert("Форма валидна, отправляется запрос");
    console.log(data);
  };

  return (
    <MainContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={styles.form}
        {...props}
      >
        <Input
          {...register("lastName")}
          id="lastName"
          type="text"
          label="Фамилия"
          name="lastName"
          variant="filled"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <Input
          {...register("firstName")}
          id="firstName"
          type="text"
          label="Имя"
          name="firstName"
          variant="filled"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          {...register("surname")}
          id="surname"
          type="text"
          label="Отчество"
          name="surname"
          variant="filled"
          error={!!errors.surname}
          helperText={errors?.surname?.message}
        />
        <GenderSelect
          register={register}
          errors={errors}
          defaultValue={initialValues.gender}
        />
        <BirthdayPicker
          control={control}
          errors={errors}
          defaultValue={initialValues.birthday}
        />
        <Input
          {...register("phoneNumber")}
          id="phoneNumber"
          type="tel"
          label="Мобильный телефон"
          name="phoneNumber"
          variant="filled"
          slotProps={{
            input: {
              inputComponent: MaskedInput,
            },
          }}
          error={!!errors.phoneNumber}
          helperText={errors?.phoneNumber?.message}
        />
        <Input
          {...register("email")}
          id="email"
          type="email"
          label="Email (необязательно)"
          name="email"
          variant="filled"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <Input
          {...register("address")}
          id="address"
          type="text"
          label="Адрес постоянной регистрации"
          name="address"
          variant="filled"
        />
        <Input
          {...register("employer")}
          id="employer"
          type="employer"
          label="Название работодателя"
          name="employer"
          variant="filled"
        />

        <PrimaryButton />
      </form>
    </MainContainer>
  );
};
