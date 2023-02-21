import { Snackbar } from '@material-ui/core';
import { Alert as AlertMUI } from '@material-ui/lab';
import { Color } from '@material-ui/lab/Alert/Alert';
import React, {FC, PropsWithChildren} from 'react';
import { useAlert } from '../../hooks/useAlert';


export const Alert: FC<PropsWithChildren<{ status: Color }>> = ({status, children}) => {
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
  )
};

