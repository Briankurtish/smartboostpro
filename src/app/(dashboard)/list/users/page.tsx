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
import { Prisma, PrismaClient, Subscription, User } from '@prisma/client'
import Table from '@/components/Table'

type UserList = User & {
  subscriptions: {
    plan: {
      planName: string
    }
  }[]
}
const prisma = new PrismaClient()

const columns = [
  {
    header: 'User',
    accessor: 'user'
  },
  {
    header: 'Email',
    accessor: 'email'
  },
  {
    header: 'Plan',
    accessor: 'plan'
  },
  {
    header: 'Status',
    accessor: 'status'
  },
  {
    header: 'Actions',
    accessor: 'action'
  }
]

const UserListPage = async () => {
  const query: Prisma.UserWhereInput = {}

  const [data, count] = await prisma.$transaction([
    prisma.user.findMany({
      where: query,
      include: {
        subscriptions: {
          include: {
            plan: {
              select: {
                planName: true // Fetching the planName from the Plan model
              }
            }
          }
        }
      }
    }),
    prisma.user.count({
      where: query
    })
  ])

  // Map the data to include the plan name in the user object
  const formattedData = data.map(user => ({
    ...user,
    plan: user.subscriptions.length > 0 ? user.subscriptions[0].plan.planName : 'No Plan' // Adjust this logic as needed
  }))

  return (
    <Card>
      <div className='overflow-x-auto'>
        <Table columns={columns} renderRow={renderRow} data={formattedData} />
      </div>
    </Card>
  )
}

const renderRow = (item: UserList) => (
  <tr key={item.id}>
    <td className='!plb-1'>
      <div className='flex items-center gap-3'>
        <div className='flex flex-col'>
          <Typography color='text.primary' className='font-medium'>
            {item.firstName + ' ' + item.lastName}
          </Typography>
        </div>
      </div>
    </td>
    <td className='!plb-1'>
      <Typography>{item.email}</Typography>
    </td>
    <td className='!plb-1'>
      <div className='flex gap-2'>
        {/* <i className={classnames(row.roleIcon, row.iconClass, 'text-[22px]')} /> */}
        <Typography color='text.primary'>
          {item.subscriptions.length > 0 ? item.subscriptions[0].plan.planName : 'No Plan'}
        </Typography>
      </div>
    </td>
    <td className='!pb-1'>
      <Chip
        className='capitalize'
        variant='tonal'
        color={item.status === 'inactive' ? 'warning' : 'success'}
        label={item.status}
        size='small'
      />
    </td>
    <td className='!plb-1'>
      <a href='/list/users/edit-user'>
        <i className={classnames('ri-edit-line', 'text-[20px] text-info mr-5')} />
      </a>

      <i className={classnames('ri-delete-bin-line', 'text-[18px] text-error')} />
    </td>
  </tr>
)

export default UserListPage
