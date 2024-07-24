import Nav from './Nav'
import DepositButton from './DepositButton'
import WithdrawButton from './WithdrawButton'

const AccountPage = () => {

    return (
        <div className='account'>
            <h1>Account</h1>
            <DepositButton />
            <WithdrawButton />
            <Nav />
        </div>
    )
}

export default AccountPage