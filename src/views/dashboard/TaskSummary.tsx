//MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Type Imports
import type { ThemeColor } from '@core/types'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

type DataType = {
  icon: string
  stats: string
  title: string
  color: ThemeColor
}

// Vars
const data: DataType[] = [
  {
    stats: '245k',
    title: 'Todays Profit',
    color: 'primary',
    icon: 'ri-cash-line'
  },
  {
    stats: '$88k',
    color: 'info',
    title: 'On Hold',
    icon: 'ri-error-warning-line'
  },
  {
    stats: '12.5k',
    title: 'Salary',
    color: 'success',
    icon: 'ri-money-dollar-circle-line'
  },
  {
    stats: '1.54k',
    color: 'warning',
    title: 'Clicks',
    icon: 'ri-macbook-line'
  }
]

const TaskSummary = () => {
  return (
    <Card className='bs-full'>
      <CardHeader
        title='Task Panel Summary'
        action={<OptionMenu iconClassName='text-textPrimary' options={['Refresh', 'Share', 'Update']} />}
        subheader={
          <p className='mbs-3'>
            <span className='font-medium text-textPrimary'>Work Summary 🛄</span>
          </p>
        }
      />
      <CardContent className='!pbs-5'>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={6} md={3} key={index}>
              <div className='flex items-center gap-3'>
                <CustomAvatar variant='rounded' color={item.color} className='shadow-xs'>
                  <i className={item.icon}></i>
                </CustomAvatar>
                <div>
                  <Typography>{item.title}</Typography>
                  <Typography variant='h5'>{item.stats}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TaskSummary
