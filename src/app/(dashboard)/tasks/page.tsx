// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Components Imports
import CardInfluencingInfluencerWithImg from '@views/card-basic/CardInfluencingInfluencerWithImg'
import CardUser from '@views/card-basic/CardUser'
import CardWithCollapse from '@views/card-basic/CardWithCollapse'
import CardMobile from '@views/card-basic/CardMobile'
import CardHorizontalRatings from '@views/card-basic/CardHorizontalRatings'
import CardWatch from '@views/card-basic/CardWatch'
import CardLifetimeMembership from '@views/card-basic/CardLifetimeMembership'
import CardInfluencingInfluencer from '@views/card-basic/CardInfluencingInfluencer'
import CardVerticalRatings from '@views/card-basic/CardVerticalRatings'
import CardSupport from '@views/card-basic/CardSupport'
import CardWithTabs from '@views/card-basic/CardWithTabs'
import CardWithTabsCenter from '@views/card-basic/CardWithTabsCenter'
import CardTwitter from '@views/card-basic/CardTwitter'
import CardFacebook from '@views/card-basic/CardFacebook'
import CardLinkedIn from '@views/card-basic/CardLinkedIn'
import Transactions from '@/views/dashboard/Transactions'
import TaskSummary from '@/views/dashboard/TaskSummary'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h3'>Task Panel</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <TaskSummary />
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Typography variant='h3'>Start Tasks</Typography>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <CardLifetimeMembership />
      </Grid>
    </Grid>
  )
}

export default CardBasic
