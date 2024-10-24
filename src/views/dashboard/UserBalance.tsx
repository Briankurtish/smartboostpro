// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const UserBalanceCard = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-2 relative items-start'>
        <div>
          <Typography variant='h5'>Balance</Typography>
          <Typography>Amount available in your account</Typography>
        </div>
        <div>
          <Typography variant='h4' color='primary'>
            $42.8k
          </Typography>
        </div>
        <Button size='small' variant='contained' href='/deposit'>
          TopUp Account
        </Button>
        <img
          src='/images/pages/walletp.png'
          alt='trophy image'
          height={80}
          className='absolute inline-end-7 bottom-6'
        />
      </CardContent>
    </Card>
  )
}

export default UserBalanceCard
