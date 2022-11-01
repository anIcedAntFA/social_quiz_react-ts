import { useAppSelector } from 'src/redux/hooks';

import AuthCta from 'src/components/AuthCta';
import { authFormSelector } from 'src/redux/slices/auth-form-slice';
import LoginFormEmail from './LoginFormEmail';
import LoginFormPhone from './LoginFormPhone';

export default function LoginForm() {
  const { openForm, openEmail } = useAppSelector(authFormSelector);

  return <>{openForm ? openEmail ? <LoginFormEmail /> : <LoginFormPhone /> : <AuthCta />}</>;
}
