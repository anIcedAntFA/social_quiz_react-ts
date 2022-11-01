import { Button, Stack } from '@mui/material';

import { useAppDispatch } from 'src/redux/hooks';
import { openAuthForm } from 'src/redux/slices/auth-form-slice';
import { FacebookIcon, GithubIcon, GoogleIcon, PersonOutlineIcon } from '../Icons';

export default function AuthCta() {
  const dispatch = useAppDispatch();

  const handleClickOpenAuthForm = () => dispatch(openAuthForm());

  return (
    <Stack direction="column" spacing={2}>
      <Button
        variant="outlined"
        startIcon={<PersonOutlineIcon />}
        onClick={handleClickOpenAuthForm}
      >
        Use email or phone number
      </Button>
      <Button variant="outlined" startIcon={<GoogleIcon />}>
        Continue with Google
      </Button>
      <Button variant="outlined" startIcon={<FacebookIcon />}>
        Continue with Facebook
      </Button>
      <Button variant="outlined" startIcon={<GithubIcon />}>
        Continue with Github
      </Button>
    </Stack>
  );
}
