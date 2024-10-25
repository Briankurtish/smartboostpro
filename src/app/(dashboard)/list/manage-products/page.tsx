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
import { Deposit, Prisma, PrismaClient, Product, Subscription, User } from '@prisma/client'
import Table from '@/components/Table'

type ProductList = Product
const prisma = new PrismaClient()

const columns = [
  {
    header: 'Product Name',
    accessor: 'name'
  },
  {
    header: 'Description',
    accessor: 'description'
  },
  {
    header: 'Price',
    accessor: 'price'
  },
  {
    header: 'Commission',
    accessor: 'commission'
  },

  {
    header: 'Super Bonus',
    accessor: 'bonus'
  },
  {
    header: 'Actions',
    accessor: 'action'
  }
]

const ProductListPage = async () => {
  const query: Prisma.ProductWhereInput = {}

  const [data, count] = await prisma.$transaction([
    prisma.product.findMany({
      where: query
    }),
    prisma.product.count({
      where: query
    })
  ])

  return (
    <Card>
      <div className='m-3'>
        <Typography variant='h3'>Manage Products</Typography>
        <Button size='small' variant='contained' className='mb-2 mt-2' href='/list/manage-products/add-new-product'>
          Add Product
        </Button>
      </div>

      <div className='overflow-x-auto'>
        <Table columns={columns} renderRow={renderRow} data={data} />
      </div>
    </Card>
  )
}

const renderRow = (item: ProductList) => (
  <tr key={item.id}>
    <td className='!plb-1'>
      <div className='flex items-center gap-3'>
        <div className='flex flex-col'>
          <Typography color='text.primary' className='font-medium'>
            {item.productName}
          </Typography>
        </div>
      </div>
    </td>
    <td className='!plb-1'>
      <Typography>{item.description}</Typography>
    </td>
    <td className='!plb-1'>
      <div className='flex gap-2'>
        {/* <i className={classnames(row.roleIcon, row.iconClass, 'text-[22px]')} /> */}
        <Typography color='text.primary'>{'$' + item.price}</Typography>
      </div>
    </td>
    <td className='!plb-1'>
      <div className='flex gap-2'>
        {/* <i className={classnames(row.roleIcon, row.iconClass, 'text-[22px]')} /> */}
        <Typography color='text.primary'> {'$' + item.commission}</Typography>
      </div>
    </td>
    <td className='!pb-1'>
      <Chip
        className='capitalize'
        variant='tonal'
        color={item.superBonus === 'no' ? 'warning' : 'success'}
        label={item.superBonus}
        size='small'
      />
    </td>
    <td className='!plb-1'>
      <a href='/list/manage-products/edit-product'>
        <i className={classnames('ri-edit-line', 'text-[20px] text-info mr-5')} />
      </a>

      <i className={classnames('ri-delete-bin-line', 'text-[18px] text-error')} />
    </td>
  </tr>
)

export default ProductListPage
