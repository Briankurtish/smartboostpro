// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const CardSupport = () => {
  return (
    <Card>
      <CardContent className='flex flex-col items-center text-center'>
        <Avatar className='mbe-2 is-[56px] bs-[56px]'>
          <i className='ri-question-line text-[32px]' />
        </Avatar>
        <Typography variant='h5' className='mbe-2 text-error font-bold'>
          ALERT
        </Typography>
        <Typography className='mbe-4'>Are you sure you want to delete this item?</Typography>
        <div className='flex flex-row'>
          <Button variant='contained' className='mr-5'>
            Yes
          </Button>
          <Button variant='contained'>No</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardSupport
