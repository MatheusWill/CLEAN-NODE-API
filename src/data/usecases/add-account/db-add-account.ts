import { AddAccount, AddAccountModel, AccountModel, Encrypter, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
    private readonly encrypter: Encrypter
    private readonly addAccountRepository: AddAccountRepository

    constructor(encrypeter: Encrypter, addAccountRepository: AddAccountRepository) {
        this.encrypter = encrypeter
        this.addAccountRepository = addAccountRepository
    }

    async add(accountData: AddAccountModel): Promise<AccountModel> {
        const hashedPassword = await this.encrypter.encrypt(accountData.password)
        const account = await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
        return account
    }
}