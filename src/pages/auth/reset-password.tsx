import { Divider, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { ResetPasswordForm } from 'src/container/auth';
import { PATH_AUTH } from 'src/routes/path';

export default function ResetPasswordPage() {
  return (
    <Stack direction="column" alignItems="center">
      <Typography variant="h3" mb={4} fontWeight="700" color="primary">
        Reset Password
      </Typography>
      <ResetPasswordForm />
      <Divider sx={{ width: '100%', margin: '16px 0' }} />
      <Typography>
        Don’t have an account?{' '}
        <Link
          to={PATH_AUTH.register}
          style={{
            textDecoration: 'none',
            color: '#2979ff',
          }}
        >
          Register
        </Link>
      </Typography>
    </Stack>
  );
}
