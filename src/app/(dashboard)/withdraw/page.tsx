'use client'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const WithdrawalPage = () => {
  return (
    <Card>
      <CardHeader title='Withdraw' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Crypto Currency'
                placeholder='John Doe'
                helperText='Enter either USDT or BTC '
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Wallet Address'
                placeholder='John Doe'
                helperText='Enter valid USDT or BTC Wallet Address'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth type='number' label='Amount' placeholder='' helperText='Enter amount to deposit' />
            </Grid>

            <Grid item xs={12}>
              <div className='flex items-center justify-between flex-wrap gap-5'>
                <Button variant='contained' type='submit'>
                  Withdraw
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default WithdrawalPage
