import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// import { RegisterForm } from 'src/container/auth';
import { PATH_AUTH } from 'src/routes/path';

export default function RegisterPage() {
  return (
    <Stack direction="column" alignItems="center" spacing={4}>
      <Typography variant="h2">Register TODO APP</Typography>
      {/* <RegisterForm /> */}
      <Typography>
        Already have an account? <Link to={PATH_AUTH.login}>Login</Link>
      </Typography>
    </Stack>
  );
}
