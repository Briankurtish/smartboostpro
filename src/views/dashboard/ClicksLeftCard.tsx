'use client'

//MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const ClicksLeftCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>Clicks Left</Typography>
        <Typography variant='h4' color='primary' className='font-medium  pt-4'>
          3 Clicks
        </Typography>
        <Typography variant='h6' className='font-medium pt-6'>
          Remaining clicks left for today
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ClicksLeftCard
