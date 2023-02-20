import { useContext } from 'react';
import { AlertContext } from '../components/Alert/AlertContext';

export const useAlert = () => useContext(AlertContext);
