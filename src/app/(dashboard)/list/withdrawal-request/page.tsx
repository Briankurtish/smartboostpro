import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import classnames from 'classnames'
import CustomAvatar from '@core/components/mui/Avatar'
import tableStyles from '@core/styles/table.module.css'
import { Button } from '@mui/material'
import { Deposit, Prisma, PrismaClient, Subscription, User, Withdrawal } from '@prisma/client'
import Table from '@/components/Table'

type WithdrawalList = Withdrawal & { user: User }
const prisma = new PrismaClient()

const columns = [
  {
    header: 'User ',
    accessor: 'user'
  },
  {
    header: 'Amount',
    accessor: 'amount'
  },
  {
    header: 'Wallet Address',
    accessor: 'wallet'
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

const WithdrawalReqquestListPage = async () => {
  // Update the query to filter for pending withdrawals
  const query: Prisma.WithdrawalWhereInput = {
    status: 'pending' // Filter for withdrawals with status 'pending'
  }

  const [data, count] = await prisma.$transaction([
    prisma.withdrawal.findMany({
      where: query,
      include: {
        user: true
      }
    }),
    prisma.withdrawal.count({
      where: query
    })
  ])

  return (
    <Card>
      <Typography variant='h5' className='m-3 font-bold'>
        Withdrawal Requests
      </Typography>

      <div className='overflow-x-auto'>
        <Table columns={columns} renderRow={renderRow} data={data} />
      </div>
    </Card>
  )
}

const renderRow = (item: WithdrawalList) => (
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
        <Typography color='text.primary'>{item.walletAddress}</Typography>
      </div>
    </td>
    <td className='!plb-1'>
      <div className='flex gap-2'>
        <Typography color='text.primary'>{item.cryptocurrency}</Typography>
      </div>
    </td>
    <td className='!plb-1'>
      <div className='flex gap-2'>
        <Typography color='text.primary'>{new Intl.DateTimeFormat('en-US').format(item.dateTime)}</Typography>
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
      <Button size='small' variant='contained' color='success'>
        Accept
      </Button>

      <Button className='text-error'>Cancel</Button>
    </td>
  </tr>
)

export default WithdrawalReqquestListPage
