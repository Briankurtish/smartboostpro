'use client'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material'

const DepositPage = () => {
  return (
    <Card>
      <CardHeader title='Recharge Account' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography className='pb-2' color='text.primary'>
                BTC Wallet Address
              </Typography>
              <Typography color='primary'>beygeui382728g2gg8g82</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className='pb-2' color='text.primary'>
                USDT Wallet Address
              </Typography>
              <Typography color='primary'>tx565wtegkolopwiw78</Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth type='number' label='Amount' placeholder='' helperText='Enter amount to deposit' />
            </Grid>

            <Grid item xs={12}>
              <div className='flex items-center justify-between flex-wrap gap-5'>
                <Button variant='contained' type='submit'>
                  Recharge Now
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default DepositPage
