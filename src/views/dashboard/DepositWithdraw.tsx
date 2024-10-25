// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Component Imports
import Link from '@components/Link'

type DataType = {
  logo: string
  title: string
  amount: string
  subtitle: string
}

// Vars
const depositData: DataType[] = [
  {
    amount: '+$4,650',
    subtitle: 'Sell UI Kit',
    title: 'Gumroad Account',
    logo: '/images/logos/down.png'
  },
  {
    amount: '+$92,705',
    title: 'Mastercard',
    subtitle: 'Wallet deposit',
    logo: '/images/logos/down.png'
  },
  {
    amount: '+$957',
    title: 'Stripe Account',
    subtitle: 'iOS Application',
    logo: '/images/logos/down.png'
  },
  {
    amount: '+$6,837',
    title: 'American Bank',
    subtitle: 'Bank Transfer',
    logo: '/images/logos/down.png'
  },
  {
    amount: '+$446',
    title: 'Bank Account',
    subtitle: 'Wallet deposit',
    logo: '/images/logos/down.png'
  }
]

const withdrawData = [
  {
    amount: '-$145',
    title: 'Google Adsense',
    subtitle: 'Paypal deposit',
    logo: '/images/logos/withdraw.png'
  },
  {
    amount: '-$1870',
    title: 'Github Enterprise',
    logo: '/images/logos/withdraw.png',
    subtitle: 'Security & compliance'
  },
  {
    amount: '-$450',
    title: 'Upgrade Slack Plan',
    subtitle: 'Debit card deposit',
    logo: '/images/logos/withdraw.png'
  },
  {
    amount: '-$540',
    title: 'Digital Ocean',
    subtitle: 'Cloud Hosting',
    logo: '/images/logos/withdraw.png'
  },
  {
    amount: '-$21',
    title: 'AWS Account',
    logo: '/images/logos/withdraw.png',
    subtitle: 'Choosing a Cloud Platform'
  }
]

const DepositWithdraw = () => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} md={6} className='border-be md:border-be-0 md:border-ie'>
          <CardHeader
            title='Deposit'
            action={
              <Typography component={Link} className='font-medium' color='primary'>
                View All
              </Typography>
            }
          />
          <CardContent className='flex flex-col gap-5'>
            {depositData.map((item, index) => (
              <div key={index} className='flex items-center gap-4'>
                <img src={item.logo} alt={item.title} width={30} />
                <div className='flex justify-between items-center is-full flex-wrap gap-x-4 gap-y-2'>
                  <div className='flex flex-col gap-0.5'>
                    <Typography color='text.primary' className='font-medium'>
                      {item.title}
                    </Typography>
                    <Typography>{item.subtitle}</Typography>
                  </div>
                  <Typography color='success.main' className='font-medium'>
                    {item.amount}
                  </Typography>
                </div>
              </div>
            ))}
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardHeader
            title='Withdraw'
            action={
              <Typography component={Link} className='font-medium' color='primary'>
                View All
              </Typography>
            }
          />
          <CardContent className='flex flex-col gap-5'>
            {withdrawData.map((item, index) => (
              <div key={index} className='flex items-center gap-4'>
                <img src={item.logo} alt={item.title} width={30} />
                <div className='flex justify-between items-center is-full flex-wrap gap-x-4 gap-y-2'>
                  <div className='flex flex-col gap-0.5'>
                    <Typography color='text.primary' className='font-medium'>
                      {item.title}
                    </Typography>
                    <Typography>{item.subtitle}</Typography>
                  </div>
                  <Typography color='error.main' className='font-medium'>
                    {item.amount}
                  </Typography>
                </div>
              </div>
            ))}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default DepositWithdraw
