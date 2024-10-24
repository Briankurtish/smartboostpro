// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import DepositWithdraw from '@views/dashboard/DepositWithdraw'

import Table from '@views/dashboard/Table'
import UserBalanceCard from '@/views/dashboard/UserBalance'
import TotalProfitCard from '@/views/dashboard/TotalProfit'
import ActivePlanCard from '@/views/dashboard/ActivePlan'
import GoToTasksCard from '@/views/dashboard/GoToTasksCard'
import ClicksLeftCard from '@/views/dashboard/ClicksLeftCard'

const UserDashBoard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <UserBalanceCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <TotalProfitCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <ActivePlanCard />
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <GoToTasksCard />
          </Grid>

          <Grid item xs={12} sm={6}>
            <ClicksLeftCard />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={8}>
        <DepositWithdraw />
      </Grid>
      <Grid item xs={12}>
        <Table />
      </Grid>
    </Grid>
  )
}

export default UserDashBoard
