import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {
    constructor (name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): string => {
        const bonus = 10
        const isValidStatusAccount = this.validateStatus()

        const messages = {
            success: "Depósito realizado com sucesso!",
            error: "Depósito não permitido. Contate o seu banco para mais informações."
        }

        if(!isValidStatusAccount) {
            return messages.error
        }

        const newBalance = this.getBalance() + value + bonus

        this.setBalance(newBalance)

        return messages.success
    }
}