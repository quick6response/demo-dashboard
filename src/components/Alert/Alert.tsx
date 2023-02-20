import { Snackbar } from '@material-ui/core';
import { Alert as AlertMUI } from '@material-ui/lab';
import { Color } from '@material-ui/lab/Alert/Alert';
import React from 'react';
import { useAlert } from '../../hooks/useAlert';
export function Alert({
  children,
  status = 'success',
}: {
  children: React.ReactNode;
  status: Color;
}) {
  const { setAlert } = useAlert();
  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      onClose={() => setAlert(null)}
    >
      <AlertMUI onClose={() => setAlert(null)} severity={status}>
        {children}
      </AlertMUI>
    </Snackbar>
  );
}
