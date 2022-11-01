import AuthCta from 'src/components/AuthCta';
import { useAppSelector } from 'src/redux/hooks';
import { authFormSelector } from 'src/redux/slices/auth-form-slice';
import RegisterFormEmail from './RegisterFormEmail';
import RegisterFormPhone from './RegisterFormPhone';

export default function RegisterForm() {
  const { openForm, openEmail } = useAppSelector(authFormSelector);

  return <>{openForm ? openEmail ? <RegisterFormEmail /> : <RegisterFormPhone /> : <AuthCta />}</>;
}
