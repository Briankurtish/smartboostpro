// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import Award from '@views/dashboard/Award'
import Transactions from '@views/dashboard/Transactions'
import WeeklyOverview from '@views/dashboard/WeeklyOverview'
import TotalEarning from '@views/dashboard/TotalEarning'
import LineChart from '@views/dashboard/LineChart'
import DistributedColumnChart from '@views/dashboard/DistributedColumnChart'
import CardStatVertical from '@components/card-statistics/Vertical'
import Table from '@views/dashboard/Table'

const AdminDashBoard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <Award />
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Transactions />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <LineChart />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LineChart />
          </Grid>

          <Grid item xs={12} sm={6}>
            <CardStatVertical
              stats='862'
              trend='negative'
              trendNumber='18%'
              title='New Project'
              subtitle='Yearly Project'
              avatarColor='primary'
              avatarIcon='ri-file-word-2-line'
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <DistributedColumnChart />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <WeeklyOverview />
      </Grid>

      <Grid item xs={12}>
        <Table />
      </Grid>
    </Grid>
  )
}

export default AdminDashBoard
