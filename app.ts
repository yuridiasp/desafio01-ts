import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'

const vipAccount = new VipAccount('Poliana', 30)
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Yuri', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

vipAccount.deposit(50)
vipAccount.getBalance()
vipAccount.getName()
vipAccount.validateStatus()
vipAccount.withdraw(10)

peopleAccount.deposit(40)
peopleAccount.getBalance()
peopleAccount.getName()
peopleAccount.validateStatus()
peopleAccount.withdraw(20)

companyAccount.deposit(51)
companyAccount.getBalance()
companyAccount.getLoan(60)
companyAccount.getName()
companyAccount.withdraw(15)