import { LoadingButton } from '@mui/lab';
import { Button, InputAdornment, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { FormProvider, TextField } from 'src/components/HookForms';
import { ArrowBackIosNewIcon, LoginIcon, TelegramIcon } from 'src/components/Icons';
import { PATH_AUTH } from 'src/routes/path';

interface ILoginFormEmailProps {
  onToggleResetFormChange: () => void;
}

export default function ResetPasswordFormEmail({ onToggleResetFormChange }: ILoginFormEmailProps) {
  const methods = useForm({});

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography component="span">Enter email address</Typography>
            <Button variant="text" sx={{ textTransform: 'none' }} onClick={onToggleResetFormChange}>
              Reset with phone number
            </Button>
          </Stack>
          <TextField name="email" label="Email" />
          <TextField
            name="code"
            label="Code"
            placeholder="Enter 6-digit code"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" startIcon={<TelegramIcon />}>
                    Send code
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <TextField password name="password" label="Password" />
        </Stack>
        <Stack direction="column" spacing={2}>
          <LoadingButton type="submit" variant="contained" startIcon={<LoginIcon />}>
            Login
          </LoadingButton>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIosNewIcon />}
            component={Link}
            to={PATH_AUTH.login}
          >
            Back
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
