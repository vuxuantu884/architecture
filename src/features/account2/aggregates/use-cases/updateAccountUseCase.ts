import { Account } from '../domain-models/account.model';
import accountService from '../domain-services/account.service';

export const updateAccountUseCase = async (account: Account) => {
  if (!account.id) {
    throw new Error('Id is required');
  }
  const { updateAccountById } = accountService();

  return await updateAccountById(account, account.id);
};
