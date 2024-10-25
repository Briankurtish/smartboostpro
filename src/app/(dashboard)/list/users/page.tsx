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
import { Button } from '@mui/material'

type TableBodyRowType = {
  avatarSrc?: string
  name: string
  email: string
  iconClass: string
  roleIcon?: string
  plan: string
  status: string
}

// Vars
const rowsData: TableBodyRowType[] = [
  {
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    email: 'Jacinthe_Blick@hotmail.com',
    iconClass: 'text-info',
    roleIcon: 'ri-pie-chart-2-line',
    plan: 'Classic',
    status: 'inactive'
  },
  {
    avatarSrc: '/images/avatars/2.png',
    name: 'Richard Payne',
    email: 'Jaylon_Bartell3@gmail.com',
    iconClass: 'text-warning',
    roleIcon: 'ri-vip-crown-line',
    plan: 'VIP',
    status: 'active'
  },
  {
    avatarSrc: '/images/avatars/3.png',
    name: 'Jennifer Summers',
    email: 'Tristin_Johnson@gmail.com',
    iconClass: 'text-primary',
    roleIcon: 'ri-computer-line',
    plan: 'Semi-Pro',
    status: 'active'
  },
  {
    avatarSrc: '/images/avatars/4.png',
    name: 'Mr. Justin Richardson',
    email: 'Toney21@yahoo.com',
    iconClass: 'text-info',
    roleIcon: 'ri-pie-chart-2-line',
    plan: 'Classic',
    status: 'inactive'
  },
  {
    avatarSrc: '/images/avatars/5.png',
    name: 'Nicholas Tanner',
    email: 'Hunter_Kuhic68@hotmail.com',
    iconClass: 'text-warning',
    roleIcon: 'ri-vip-crown-line',
    plan: 'VIP',
    status: 'active'
  },
  {
    avatarSrc: '/images/avatars/6.png',
    name: 'Crystal Mays',
    email: 'Norene_Bins@yahoo.com',
    iconClass: 'text-info',
    roleIcon: 'ri-pie-chart-2-line',
    plan: 'Classic',
    status: 'active'
  },
  {
    avatarSrc: '/images/avatars/7.png',
    name: 'Mary Garcia',
    email: 'Emmitt.Walker14@hotmail.com',
    iconClass: 'text-primary',
    roleIcon: 'ri-computer-line',
    plan: 'Semi-Pro',
    status: 'inactive'
  },
  {
    avatarSrc: '/images/avatars/8.png',
    name: 'Megan Roberts',
    email: 'Patrick.Howe73@gmail.com',
    iconClass: 'text-info',
    roleIcon: 'ri-pie-chart-2-line',
    plan: 'Classic',
    status: 'active'
  }
]

const Table = () => {
  return (
    <Card>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Plan</th>
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
                    </div>
                  </div>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.email}</Typography>
                </td>
                <td className='!plb-1'>
                  <div className='flex gap-2'>
                    <i className={classnames(row.roleIcon, row.iconClass, 'text-[22px]')} />
                    <Typography color='text.primary'>{row.plan}</Typography>
                  </div>
                </td>
                <td className='!pb-1'>
                  <Chip
                    className='capitalize'
                    variant='tonal'
                    color={row.status === 'pending' ? 'warning' : row.status === 'inactive' ? 'secondary' : 'success'}
                    label={row.status}
                    size='small'
                  />
                </td>
                <td className='!plb-1'>
                  <i className={classnames('ri-edit-line', 'text-[20px] text-info mr-5')} />

                  <i className={classnames('ri-delete-bin-line', 'text-[20px] text-error')} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default Table
