// CardLifetimeMembership.tsx

'use client' // This line marks the component as a client component

import React, { useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Modal from '@/components/FormModal'

const CardLifetimeMembership = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Card>
        <Grid container>
          <Grid item xs={12} sm={7}>
            <CardContent>
              <Typography variant='h5' className='mbe-2'>
                Lifetime Membership
              </Typography>
              <Typography>
                Here, I focus on a range of items and features that we use in life without giving them a second thought
                such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not
                fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for
                picking up women or men.
              </Typography>
              <Divider className='mbs-7 mbe-7' />
              <Grid container>
                <Grid item xs={12} sm={6} className='flex flex-col pie-5 gap-[26px]'>
                  <div className='flex items-center gap-2.5'>
                    <div className='flex'>
                      <i className='ri-lock-unlock-line text-xl text-textSecondary' />
                    </div>
                    <Typography>Full Access</Typography>
                  </div>
                  <div className='flex items-center gap-2.5'>
                    <div className='flex'>
                      <i className='ri-user-3-line text-xl text-textSecondary' />
                    </div>
                    <Typography>15 Members</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} className='flex flex-col max-sm:mbs-[26px] sm:pis-5 sm:border-is gap-[26px]'>
                  <div className='flex items-center gap-2.5'>
                    <div className='flex'>
                      <i className='ri-lock-unlock-line text-xl text-textSecondary' />
                    </div>
                    <Typography>Access all Features</Typography>
                  </div>
                  <div className='flex items-center gap-2.5'>
                    <div className='flex'>
                      <i className='ri-user-3-line text-xl text-textSecondary' />
                    </div>
                    <Typography>Lifetime Free Update</Typography>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={5}>
            <CardContent className='flex items-center justify-center bs-full bg-actionHover'>
              <div className='flex flex-col items-center justify-center gap-2'>
                <div className='flex items-baseline justify-center'>
                  <i className='ri-macbook-line text-primary' />
                </div>
                <Typography className='flex flex-col text-center'>
                  <span>Start Clicking today to</span>
                  <span>earn money💵</span>
                </Typography>
                <Button variant='contained' className='mbs-4' onClick={openModal}>
                  Start Now
                </Button>
              </div>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default CardLifetimeMembership
