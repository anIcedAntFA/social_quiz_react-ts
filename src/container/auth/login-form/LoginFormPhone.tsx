import { useAppSelector } from 'src/redux/hooks';

import { authFormSelector } from 'src/redux/slices/auth-form-slice';
import LoginFormPhoneCode from './LoginFormPhoneCode';
import LoginFormPhonePassword from './LoginFormPhonePassword';

export default function LoginFormPhone() {
  const { openPassword } = useAppSelector(authFormSelector);

  return <>{openPassword ? <LoginFormPhonePassword /> : <LoginFormPhoneCode />}</>;
}
