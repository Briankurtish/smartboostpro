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
import { Deposit, Prisma, PrismaClient, Subscription, User } from '@prisma/client'
import Table from '@/components/Table'

type DepositList = Deposit & { user: User }
const prisma = new PrismaClient()

const columns = [
  {
    header: 'User',
    accessor: 'user'
  },
  {
    header: 'Amount',
    accessor: 'amount'
  },
  {
    header: 'Crypto Currency',
    accessor: 'crypto'
  },
  {
    header: 'Date',
    accessor: 'date'
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

const DepositListPage = async () => {
  const query: Prisma.DepositWhereInput = {}

  const [data, count] = await prisma.$transaction([
    prisma.deposit.findMany({
      where: query,
      include: {
        user: true
      }
    }),
    prisma.deposit.count({
      where: query
    })
  ])

  return (
    <Card>
      <Typography variant='h5' className='m-3 font-bold'>
        Manage Depoists
      </Typography>

      <div className='overflow-x-auto'>
        <Table columns={columns} renderRow={renderRow} data={data} />
      </div>
    </Card>
  )
}

const renderRow = (item: DepositList) => (
  <tr key={item.id}>
    <td className='!plb-1'>
      <div className='flex items-center gap-3'>
        <div className='flex flex-col'>
          <Typography color='text.primary' className='font-medium'>
            {item.user.firstName + ' ' + item.user.lastName}
          </Typography>
        </div>
      </div>
    </td>
    <td className='!plb-1'>
      <Typography>{item.amount}</Typography>
    </td>
    <td className='!plb-1'>
      <div className='flex gap-2'>
        {/* <i className={classnames(row.roleIcon, row.iconClass, 'text-[22px]')} /> */}
        <Typography color='text.primary'>{item.cryptocurrency}</Typography>
      </div>
    </td>
    <td className='!plb-1'>
      <div className='flex gap-2'>
        {/* <i className={classnames(row.roleIcon, row.iconClass, 'text-[22px]')} /> */}
        <Typography color='text.primary'> {new Intl.DateTimeFormat('en-US').format(item.dateTime)}</Typography>
      </div>
    </td>
    <td className='!pb-1'>
      <Chip
        className='capitalize'
        variant='tonal'
        color={
          item.status === 'pending'
            ? 'warning'
            : item.status === 'accepted'
              ? 'success'
              : item.status === 'cancelled'
                ? 'error'
                : 'default'
        }
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

export default DepositListPage
