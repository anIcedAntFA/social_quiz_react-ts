import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Button, Divider, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { FormProvider, TextField } from 'src/components/HookForms';
import { ArrowBackIosNewIcon, LoginIcon } from 'src/components/Icons';
import { useAppDispatch } from 'src/redux/hooks';
import {
  back,
  toggleAuthFormChange,
  toggleLoginModeChange,
} from 'src/redux/slices/auth-form-slice';
import { PATH_AUTH } from 'src/routes/path';

interface ILoginValues {
  phone: string;
  password: string;
}

const loginSchema = Yup.object().shape({
  phone: Yup.string()
    .required('*Please enter your phone number')
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, '*Please enter a valid phone number'),
  password: Yup.string()
    .trim()
    .required('*Please enter your password')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/,
      `<PasswordRules />`,
    ),
});

const defaultValues: ILoginValues = {
  phone: '',
  password: '',
};

export default function LoginFormPhonePassword() {
  const dispatch = useAppDispatch();

  const methods = useForm<ILoginValues>({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
  };

  const handleToggleLoginModeChange = () => dispatch(toggleLoginModeChange());
  const handleToggleLoginFormChange = () => dispatch(toggleAuthFormChange());
  const handleBack = () => dispatch(back());

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={4}>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography component="span">Enter phone number</Typography>
            <Button sx={{ textTransform: 'none' }} onClick={handleToggleLoginFormChange}>
              Log in with email
            </Button>
          </Stack>
          <TextField name="phone" label="Phone Number" />
          <TextField password name="password" label="Password" />
          <Stack direction="row">
            <Button component={Link} to={PATH_AUTH.resetPassword} sx={{ textTransform: 'none' }}>
              Forgot password?
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Button sx={{ textTransform: 'none' }} onClick={handleToggleLoginModeChange}>
              Log in with code
            </Button>
          </Stack>
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
