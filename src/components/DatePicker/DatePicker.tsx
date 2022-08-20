import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface IProps {
  label: string;
  value: Date | null;
  handleChange: (date: Date) => void;
  disabled?: boolean;
  id?: string;
  helperText?: string;
  hasError?: boolean;
  handleBlur?: any;
}

const DatePicker = ({
  handleChange,
  value,
  label,
  disabled,
  id,
  helperText,
  hasError,
  handleBlur,
}: IProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        label={label}
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            id={id}
            fullWidth
            disabled={disabled}
            helperText={helperText}
            error={hasError}
            onBlur={handleBlur}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
