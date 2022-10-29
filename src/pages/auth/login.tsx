import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// import { LoginForm } from 'src/container/auth';
import { PATH_AUTH } from 'src/routes/path';

export default function LoginPage() {
  return (
    <Stack direction="column" alignItems="center" spacing={4}>
      <Typography variant="h2">Login Todo App</Typography>
      {/* <LoginForm /> */}
      <Typography>
        Do not have an account yet? <Link to={PATH_AUTH.register}>Register</Link>
      </Typography>
    </Stack>
  );
}
