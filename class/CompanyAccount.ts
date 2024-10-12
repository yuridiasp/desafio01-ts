import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): string => {
    const messages = {
      success: "Empréstimo realizado com sucesso! Valores já se encontram disponíveis.",
      error: "Empréstimo não permitido. Contate o seu banco para mais informações."
    }

    const isValidStatusAccount = this.validateStatus()

    if (!isValidStatusAccount) {
      return messages.error
    }

    const newBalance = this.getBalance() + value

    this.setBalance(newBalance)

    return messages.success
  }
}
