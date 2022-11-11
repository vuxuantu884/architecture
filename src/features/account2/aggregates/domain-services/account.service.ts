import { Account } from '../domain-models/account.model';
import { AccountRepository } from '../domain-models/account.repository';

const accountService: () => AccountRepository = () => {
  const validateAccount = (account: Partial<Account>): boolean => {
    //validate domain rules, for example: roles must be in the list of roles and unique
    if (!account.roles || account.roles.length === 0) {
      throw new Error('Roles must be provided');
    }
    if (account.roles.length !== new Set(account.roles).size) {
      throw new Error('Roles must be unique');
    } else {
      return true;
    }
  };

  const updateAccountById = (account: Partial<Account>, id: string): Promise<Account> => {
    if (validateAccount(account)) {
      // call api to update account
    }
    throw new Error('Method not implemented.');
  };
  const createAccount = (account: Account): Promise<Account> => {
    if (validateAccount(account)) {
      // call api to update account
    }
    throw new Error('Method not implemented.');
  };
  const getAccountById = (id: string): Promise<Account> => {
    throw new Error('Method not implemented.');
  };
  const getAccountByUserName = (userName: string): Promise<Account> => {
    throw new Error('Method not implemented.');
  };
  const getAccountByEmail = (email: string): Promise<Account> => {
    throw new Error('Method not implemented.');
  };
  const getAccounts = (): Promise<Account[]> => {
    throw new Error('Method not implemented.');
  };

  const deleteAccount = (id: string): Promise<void> => {
    throw new Error('Method not implemented.');
  };

  return {
    validateAccount,
    updateAccountById,
    createAccount,
    getAccountById,
    getAccountByUserName,
    getAccountByEmail,
    getAccounts,
    deleteAccount,
  };
};

export default accountService;
