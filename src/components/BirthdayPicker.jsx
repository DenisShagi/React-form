import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/ru";
import { ruRU } from "@mui/x-date-pickers/locales";
import { Controller } from "react-hook-form";

export const BirthdayPicker = ({ control, errors }) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={"ru"}
      localeText={
        ruRU.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <Controller
        name="birthday"
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <DatePicker
            {...field}
            label="Дата рождения"
            format="DD/MM/YYYY"
            slotProps={{
              textField: {
                variant: "filled",
                sx: { width: "100%" },
                style: { gridColumn: "span 1" },
                error: !!errors.birthday,
                helperText: errors?.birthday?.message,
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};
