'use client'

// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const CardMobile = () => {
  // States
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card>
      <Grid container>
        <Grid item xs={12} md={5} className='flex items-center justify-center'>
          <CardContent className='flex items-center justify-center'>
            <img alt='iPhone 11 Pro' src='/images/cards/4.png' height={175} />
          </CardContent>
        </Grid>
        <Grid item xs={12} md={7} className='md:border-is border-bs md:border-bs-0'>
          <CardContent>
            <Typography variant='h5' className='mbe-2'>
              Classic Plan
            </Typography>
            <Typography className='mbe-2'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro architecto iure excepturi.
            </Typography>
            <div className='flex gap-1'>
              <Typography color='text.primary'>Price:</Typography>
              <Typography className='font-medium' color='text.primary'>
                $899
              </Typography>
            </div>
          </CardContent>
          <CardActions className='justify-between card-actions-dense'>
            <Button startIcon={<i className='ri-edit-line' />}>Edit Plan</Button>
            <IconButton>
              <i className='ri-delete-bin-line text-error' />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMobile
