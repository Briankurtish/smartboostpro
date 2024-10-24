'use client'

import { Button } from '@mui/material'

//MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const GoToTasksCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h4'>Tasks</Typography>
        <Typography color='text.primary' className='font-medium pb-6 pt-2'>
          Perform Tasks today to earn
        </Typography>
        <Button size='small' variant='contained' href='/tasks'>
          Go to Tasks
        </Button>
      </CardContent>
    </Card>
  )
}

export default GoToTasksCard
