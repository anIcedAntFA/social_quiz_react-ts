import {
  IconButton,
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps,
  FormHelperText,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Visibility, VisibilityOff } from '../Icons';

interface ITextFieldProps {
  name: string;
  type?: string;
  password?: boolean;
}

export default function TextField({
  name,
  type,
  password,
  ...passProps
}: ITextFieldProps & TextFieldProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { control } = useFormContext();

  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) =>
        password ? (
          <Stack direction="column">
            <MuiTextField
              {...field}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleToggleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              error={!!error}
              {...passProps}
            />
            <FormHelperText component="span" error>
              {error && error.message}
            </FormHelperText>
          </Stack>
        ) : (
          <Stack direction="column">
            <MuiTextField {...field} fullWidth error={!!error} {...passProps} />
            <FormHelperText component="span" error>
              {error && error.message}
            </FormHelperText>
          </Stack>
        )
      }
    />
  );
}
