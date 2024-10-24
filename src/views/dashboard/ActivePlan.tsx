// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const ActivePlanCard = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-2 relative items-start'>
        <div>
          <Typography variant='h5'>Active Plan</Typography>
          <Typography>Plan currently subscribed</Typography>
        </div>
        <div>
          <Typography variant='h4' color='primary'>
            Classic Plan
          </Typography>
        </div>
        <Button size='small' variant='contained' href='/upgrade'>
          Upgrade Plan
        </Button>
        <img src='/images/pages/active.png' alt='trophy image' height={80} className='absolute inline-end-7 bottom-6' />
      </CardContent>
    </Card>
  )
}

export default ActivePlanCard
