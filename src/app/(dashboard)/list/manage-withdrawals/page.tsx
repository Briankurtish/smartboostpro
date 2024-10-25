'use client'
// MUI Imports
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Styles Imports
import tableStyles from '@core/styles/table.module.css'
import { Button, IconButton } from '@mui/material'
import { useState } from 'react'
import Modal from '@/components/PopupModal'

type TableBodyRowType = {
  avatarSrc?: string
  name: string
  username: string
  amount: string
  address: string
  iconClass: string
  roleIcon?: string
  currency: string
  status: string
}

// Vars
const rowsData: TableBodyRowType[] = [
  {
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    username: '@amiccoo',
    amount: '$300',
    address: 'TRS8832GOBO22389Y2ON004',
    iconClass: 'text-success',
    roleIcon: 'ri-coin-line',
    currency: 'USDT',
    status: 'accepted'
  },
  {
    avatarSrc: '/images/avatars/2.png',
    name: 'Richard Payne',
    username: '@brossiter15',
    amount: '$400',
    address: 'BCS8832GOBO22389Y2ON004',
    iconClass: 'text-warning',
    roleIcon: 'ri-coin-line',
    currency: 'BTC',
    status: 'cancelled'
  },
  {
    avatarSrc: '/images/avatars/3.png',
    name: 'Jennifer Summers',
    username: '@jsbemblinf',
    amount: '$260',
    address: 'TRS8832GOBO22389Y2ON004',
    iconClass: 'text-success',
    roleIcon: 'ri-coin-line',
    currency: 'USDT',
    status: 'accepted'
  },
  {
    avatarSrc: '/images/avatars/4.png',
    name: 'Mr. Justin Richardson',
    username: '@justin45',
    amount: '$900',
    address: 'TRS8832GOBO22389Y2ON004',
    iconClass: 'text-success',
    roleIcon: 'ri-coin-line',
    currency: 'USDT',
    status: 'accepted'
  },
  {
    avatarSrc: '/images/avatars/5.png',
    name: 'Nicholas Tanner',
    username: '@tannernic',
    amount: '$450',
    address: 'BC58832GOBO22389Y2ON004',
    iconClass: 'text-warning',
    roleIcon: 'ri-coin-line',
    currency: 'BTC',
    status: 'cancelled'
  },
  {
    avatarSrc: '/images/avatars/6.png',
    name: 'Crystal Mays',
    username: '@crystal99',
    amount: '$160',
    address: 'TRS8832GOBO22389Y2ON004',
    iconClass: 'text-success',
    roleIcon: 'ri-coin-line',
    currency: 'USDT',
    status: 'cancelled'
  },
  {
    avatarSrc: '/images/avatars/7.png',
    name: 'Mary Garcia',
    username: '@marygarcia4',
    amount: '$390',
    address: 'BCS8832GOBO22389Y2ON004',
    iconClass: 'text-warning',
    roleIcon: 'ri-coin-line',
    currency: 'BTC',
    status: 'accepeted'
  },
  {
    avatarSrc: '/images/avatars/8.png',
    name: 'Megan Roberts',
    username: '@megan78',
    amount: '$200',
    address: 'TRS8832GOBO22389Y2ON004',
    iconClass: 'text-success',
    roleIcon: 'ri-coin-line',
    currency: 'USDT',
    status: 'cancelled'
  }
]

const ManageWithdrawalsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <Card>
      <Typography variant='h5' className='p-4 font-bold'>
        Withdrawals History
      </Typography>

      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>User</th>
              <th>Amount</th>
              <th>Wallet Address</th>
              <th>Crypto Currency</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rowsData.map((row, index) => (
              <tr key={index}>
                <td className='!plb-1'>
                  <div className='flex items-center gap-3'>
                    <CustomAvatar src={row.avatarSrc} size={34} />
                    <div className='flex flex-col'>
                      <Typography color='text.primary' className='font-medium'>
                        {row.name}
                      </Typography>
                      <Typography variant='body2'>{row.username}</Typography>
                    </div>
                  </div>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.amount}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.address}</Typography>
                </td>
                <td className='!plb-1'>
                  <div className='flex gap-2'>
                    <i className={classnames(row.roleIcon, row.iconClass, 'text-[22px]')} />
                    <Typography color='text.primary'>{row.currency}</Typography>
                  </div>
                </td>
                <td className='!pb-1'>
                  <Chip
                    className='capitalize'
                    variant='tonal'
                    color={row.status === 'pending' ? 'warning' : row.status === 'cancelled' ? 'error' : 'success'}
                    label={row.status}
                    size='small'
                  />
                </td>
                <td className='!plb-1'>
                  <IconButton>
                    <i className='ri-delete-bin-line text-error' onClick={openModal} />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </Card>
  )
}

export default ManageWithdrawalsTable
