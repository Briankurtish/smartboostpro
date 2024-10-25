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
  description: string
  price: string
  profit: string
  bonus: string
}

// Vars
const rowsData: TableBodyRowType[] = [
  {
    avatarSrc: '/images/avatars/1.png',
    name: 'Iphone 11 Pro',
    description: 'Apple Product',
    price: '$300',
    profit: '$1.2',
    bonus: 'no'
  },
  {
    avatarSrc: '/images/avatars/1.png',
    name: 'Iphone 11 Pro',
    description: 'Apple Product',
    price: '$300',
    profit: '$1.2',
    bonus: 'yes'
  },
  {
    avatarSrc: '/images/avatars/1.png',
    name: 'Iphone 11 Pro',
    description: 'Apple Product',
    price: '$300',
    profit: '$1.2',
    bonus: 'no'
  },
  {
    avatarSrc: '/images/avatars/1.png',
    name: 'Iphone 11 Pro',
    description: 'Apple Product',
    price: '$300',
    profit: '$1.2',
    bonus: 'yes'
  },
  {
    avatarSrc: '/images/avatars/1.png',
    name: 'Iphone 11 Pro',
    description: 'Apple Product',
    price: '$300',
    profit: '$1.2',
    bonus: 'no'
  },
  {
    avatarSrc: '/images/avatars/1.png',
    name: 'Iphone 11 Pro',
    description: 'Apple Product',
    price: '$300',
    profit: '$1.2',
    bonus: 'yes'
  },
  {
    avatarSrc: '/images/avatars/1.png',
    name: 'Iphone 11 Pro',
    description: 'Apple Product',
    price: '$300',
    profit: '$1.2',
    bonus: 'no'
  },
  {
    avatarSrc: '/images/avatars/1.png',
    name: 'Iphone 11 Pro',
    description: 'Apple Product',
    price: '$300',
    profit: '$1.2',
    bonus: 'yes'
  }
]

const ManageProductTable = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <Card>
      <Button size='small' variant='contained' className='m-2' href='/list/manage-products/add-new-product'>
        Add New Product
      </Button>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Dscription</th>
              <th>Price</th>
              <th>Profit</th>
              <th>Super Bonus</th>
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
                    </div>
                  </div>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.description}</Typography>
                </td>
                <td className='!plb-1'>
                  <div className='flex gap-2'>
                    <Typography color='text.primary'>{row.price}</Typography>
                  </div>
                </td>
                <td className='!plb-1'>
                  <div className='flex gap-2'>
                    <Typography color='text.primary'>{row.profit}</Typography>
                  </div>
                </td>
                <td className='!pb-1'>
                  <Chip
                    className='capitalize'
                    variant='tonal'
                    color={row.bonus === 'no' ? 'warning' : 'success'}
                    label={row.bonus}
                    size='small'
                  />
                </td>
                <td className='!plb-1'>
                  <a href='/list/manage-products/edit-product'>
                    <i className={classnames('ri-edit-line', 'text-[20px] text-info mr-5')} />
                  </a>

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

export default ManageProductTable
