import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Button, InputAdornment, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { FormProvider, TextField } from 'src/components/HookForms';
import { AppRegistrationIcon, ArrowBackIosNewIcon, TelegramIcon } from 'src/components/Icons';
import { useAppDispatch } from 'src/redux/hooks';
import { back, toggleAuthFormChange } from 'src/redux/slices/auth-form-slice';

interface IRegisterValues {
  fullName: string;
  email: string;
  password: string;
  code: string;
}

const PasswordRules = () => {
  return (
    <>
      <strong>*Your password must have:</strong>
      <ul>
        <li>8 to 20 characters</li>
        <li>Letters, numbers, and special characters</li>
      </ul>
    </>
  );
};

const registerSchema = Yup.object().shape({
  fullName: Yup.string().required('*Please enter your full name'),
  email: Yup.string()
    .required('*Please enter your email')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      '*Please enter a valid email',
    ),
  password: Yup.string()
    .trim()
    .required('*Please enter your password')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
      `<PasswordRules />`,
    ),
  code: Yup.number()
    .typeError('*Please enter 6-digit code')
    .integer('*This field must contain integers'),
});

const defaultValues: IRegisterValues = {
  fullName: '',
  email: '',
  password: '',
  code: '',
};

export default function RegisterFormEmail() {
  const dispatch = useAppDispatch();

  const methods = useForm<IRegisterValues>({
    mode: 'onBlur',
    resolver: yupResolver(registerSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
  };

  const handleToggleRegisterFormChange = () => dispatch(toggleAuthFormChange());
  const handleBack = () => dispatch(back());

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={4}>
        <Stack direction="column" spacing={2}>
          <TextField name="fullName" label="Full name" />
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography component="span">Enter email address</Typography>
            <Button
              variant="text"
              sx={{ textTransform: 'none' }}
              onClick={handleToggleRegisterFormChange}
            >
              Register with phone number
            </Button>
          </Stack>
          <TextField name="email" label="Email" />
          <TextField password name="password" label="Password" />
          <TextField
            name="code"
            label="Code"
            placeholder="Enter 6-digit code"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" startIcon={<TelegramIcon />} disabled={!isValid}>
                    Send code
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction="column" spacing={2}>
          <LoadingButton
            type="submit"
            variant="contained"
            startIcon={<AppRegistrationIcon />}
            disabled={!isValid}
          >
            Register
          </LoadingButton>
          <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />} onClick={handleBack}>
            Back
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
