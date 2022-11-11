import { Account, ExcelAccount } from '../domain-models/account.model';
import accountService from '../domain-services/account.service';

export const createAccountUseCase = async (account: Account) => {
  const { createAccount } = accountService();
  return await createAccount(account);
};

export const importAccountFromExcel = async (file: File) => {
  const accountExcel: ExcelAccount = await readExcelFile(file);
  const importAccount: Account = {
    id: null,
    fullName: accountExcel.fullNameExcel,
    email: accountExcel.emailExcel,
    userName: accountExcel.userNameExcel,
  };
  createAccountUseCase(importAccount);
};

export const readExcelFile = async (file: File) => {
  const accountExcel: ExcelAccount = {} as ExcelAccount;
  return accountExcel;
};
