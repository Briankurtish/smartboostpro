// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Award = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-2 relative items-start'>
        <div>
          <Typography variant='h5'>Total Deposits</Typography>
          <Typography>The total amount of money deposited</Typography>
        </div>
        <div>
          <Typography variant='h4' color='primary'>
            $42.8k
          </Typography>
        </div>
        <Button size='small' variant='contained'>
          View Deposits
        </Button>
        <img
          src='/images/pages/deposits.png'
          alt='trophy image'
          height={80}
          className='absolute inline-end-7 bottom-6'
        />
      </CardContent>
    </Card>
  )
}

export default Award
