import { useState } from 'react';

import ResetPasswordFormEmail from './ResetPasswordFormEmail';
import ResetPasswordFormPhone from './ResetPasswordFormPhone';

export default function ResetPasswordForm() {
  const [open, setOpen] = useState<boolean>();

  const handleToggleResetFormChange = () => setOpen((prev) => !prev);

  return (
    <>
      {open ? (
        <ResetPasswordFormEmail onToggleResetFormChange={handleToggleResetFormChange} />
      ) : (
        <ResetPasswordFormPhone onToggleResetFormChange={handleToggleResetFormChange} />
      )}
    </>
  );
}
