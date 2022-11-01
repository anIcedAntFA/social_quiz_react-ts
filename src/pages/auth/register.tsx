import { Divider, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { RegisterForm } from 'src/container/auth';
import { PATH_AUTH } from 'src/routes/path';

export default function RegisterPage() {
  return (
    <Stack direction="column" alignItems="center">
      <Typography variant="h3" mb={4} fontWeight="700" color="primary">
        Register for K-QUIZ
      </Typography>
      <RegisterForm />
      <Typography variant="body2" mt={6} textAlign="center">
        By continuing, you agree to K-Quiz’s{' '}
        <Link to="/" className="text-link">
          Terms of Service
        </Link>{' '}
        <br /> and confirm that you have read K-Quiz’s{' '}
        <Link to="/" className="text-link">
          Privacy Policy
        </Link>
        .
      </Typography>
      <Divider sx={{ width: '100%', margin: '16px 0' }} />
      <Typography>
        Already have an account?{' '}
        <Link to={PATH_AUTH.login} className="text-link">
          Login
        </Link>
      </Typography>
    </Stack>
  );
}
