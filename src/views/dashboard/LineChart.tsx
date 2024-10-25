'use client'

import { Button } from '@mui/material'

//MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const LineChart = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h6' className='font-bold'>
          Pending Deposits
        </Typography>
        <Typography variant='h4' color='primary' className='font-medium pb-6 pt-2'>
          23.4K
        </Typography>
        <Button size='small' variant='contained'>
          Deposit Requests
        </Button>
      </CardContent>
    </Card>
  )
}

export default LineChart
