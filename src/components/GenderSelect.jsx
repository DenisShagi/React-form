import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

export const GenderSelect = ({ register, errors }) => {
  return (
    <FormControl
      variant="filled"
        fullWidth
        
    >
      <InputLabel id="gender-select-label">Пол</InputLabel>
      <Select
        labelId="gender-select-label"
        id="gender"
        defaultValue="" 
        {...register("gender")}
      >
        <MenuItem value="male">Мужской</MenuItem>
        <MenuItem value="female">Женский</MenuItem>
      </Select>
    </FormControl>
  );
};
