export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      console.log('Voce depositou')
    }
  }

  withdraw = (value: number): string => {
    const hasAvailableBalance = this.validateBalance(value)
    const isValidStatusAccount = this.validateStatus()

    const messages = {
      success: "Saque realizado com sucesso!",
      error: "Saldo insuficiente!"
    }

    if (!hasAvailableBalance || !isValidStatusAccount) {
      return messages.error
    }

    const newBalance = this.balance - value

    this.setBalance(newBalance)

    return messages.success
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (value: number): void => {
    this.balance = value
  }

  private validateBalance(value: number): boolean {
    const balance = this.getBalance()

    if (value <= balance)
      return true

    return false
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    return false
  }
}
