import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { Field } from "formik";
import { useState } from "react";
import DatePicker from "../DatePicker/DatePicker";

interface FormProps {
  type: string;
  disabled?: boolean;
  name: string;
  placeHolder?: string;
  required?: boolean;
  label: string;
  handleBlur?: any;
  handleChange: any;
  className?: string;
  touched?: any;
  errors?: any;
  value: any;
  options?: { label: string; value: string }[];
}

const FormGroup = (props: FormProps) => {
  const {
    type,
    disabled,
    name,
    placeHolder,
    required,
    label,
    handleBlur,
    className,
    touched,
    errors,
    value,
    handleChange,
    options,
  } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const renderField = () => {
    switch (type) {
      case "text":
      case "email":
      case "number":
      case "password":
        return (
          <TextField
            fullWidth
            disabled={disabled}
            id={name}
            label={label}
            helperText={touched[name] && errors[name]}
            value={value}
            error={touched[name] && Boolean(errors[name])}
            onBlur={handleBlur}
            onChange={handleChange}
            type={type}
          />
        );

      case "select":
        return (
          <FormControl
            required={required}
            fullWidth
            error={touched[name] && Boolean(errors[name])}
            onBlur={handleBlur}
          >
            <InputLabel id={name}>{label}</InputLabel>
            <Select
              onBlur={handleBlur}
              disabled={disabled}
              labelId={name}
              id={name}
              value={value}
              label={label}
              onChange={handleChange}
            >
              {options?.map((option) => (
                <MenuItem value={option.value}>{option.label}</MenuItem>
              ))}
            </Select>
            {touched[name] && Boolean(errors[name]) && (
              <FormHelperText>{touched[name] && errors[name]}</FormHelperText>
            )}
          </FormControl>
        );

      case "checkbox":
        return (
          <FormControl
            required={required}
            error={touched[name] && Boolean(errors[name])}
          >
            {options?.map((option) => (
              <Field
                type="checkbox"
                name={name}
                value={option.value}
                key={option.label}
                as={FormControlLabel}
                onChange={handleChange}
                control={<Checkbox checked={value.includes(option.value)} />}
                label={option.label}
                onBlur={handleBlur}
              />
            ))}
            {touched[name] && Boolean(errors[name]) && (
              <FormHelperText error>
                <>{touched[name] && errors[name]}</>
              </FormHelperText>
            )}
          </FormControl>
        );

      case "date-picker":
        return (
          <DatePicker
            label={label}
            value={value}
            handleChange={handleChange}
            helperText={touched[name] && errors[name]}
            hasError={touched[name] && Boolean(errors[name])}
            id={name}
            disabled={disabled}
            handleBlur={handleBlur}
          />
        );

      default:
        return (
          <TextField
            fullWidth
            disabled={disabled}
            id={name}
            label={label}
            helperText={touched[name] && errors[name]}
            value={value}
            error={touched[name] && Boolean(errors[name])}
            onBlur={handleBlur}
            onChange={handleChange}
            type={type}
          />
        );
    }
  };
  return <div>{renderField()}</div>;
};

export default FormGroup;
