import {useContext} from 'react';
import { BankBalanceContext } from './bankBalanceContext';

export const useBankBalance = () => useContext(BankBalanceContext);