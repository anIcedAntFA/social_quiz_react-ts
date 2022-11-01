import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Button, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { FormProvider, TextField } from 'src/components/HookForms';
import { ArrowBackIosNewIcon, LoginIcon } from 'src/components/Icons';
import { useAppDispatch } from 'src/redux/hooks';
import { back, toggleAuthFormChange } from 'src/redux/slices/auth-form-slice';
import { PATH_AUTH } from 'src/routes/path';

interface ILoginValues {
  email: string;
  password: string;
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
});

const defaultValues: ILoginValues = {
  email: '',
  password: '',
};

export default function LoginFormEmail() {
  const dispatch = useAppDispatch();

  const methods = useForm<ILoginValues>({
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

  const handleToggleLoginFormChange = () => dispatch(toggleAuthFormChange());
  const handleBack = () => dispatch(back());

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={4}>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography component="span">Enter email address</Typography>
            <Button
              variant="text"
              sx={{ textTransform: 'none' }}
              onClick={handleToggleLoginFormChange}
            >
              Log in with phone number
            </Button>
          </Stack>
          <TextField name="email" label="Email" />
          <TextField password name="password" label="Password" />
          <Button
            component={Link}
            to={PATH_AUTH.resetPassword}
            sx={{ width: '148px', textTransform: 'none' }}
          >
            Forgot password?
          </Button>
        </Stack>
        <Stack direction="column" spacing={2}>
          <LoadingButton
            type="submit"
            variant="contained"
            startIcon={<LoginIcon />}
            disabled={!isValid}
          >
            Login
          </LoadingButton>
          <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />} onClick={handleBack}>
            Back
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
