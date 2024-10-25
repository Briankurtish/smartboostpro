import { PrismaClient, UserStatus, SuperBonus, DepositStatus, WithdrawalStatus } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      status: UserStatus.active
    }
  })

  const user2 = await prisma.user.create({
    data: {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      status: UserStatus.active
    }
  })

  // Create products
  const product1 = await prisma.product.create({
    data: {
      productName: 'Product A',
      productImage: 'https://example.com/product-a.jpg',
      description: 'Description for Product A',
      price: 100.0,
      commission: 10.0,
      superBonus: SuperBonus.yes
    }
  })

  const product2 = await prisma.product.create({
    data: {
      productName: 'Product B',
      productImage: 'https://example.com/product-b.jpg',
      description: 'Description for Product B',
      price: 200.0,
      commission: 20.0,
      superBonus: SuperBonus.no
    }
  })

  // Create plans
  const plan1 = await prisma.plan.create({
    data: {
      planName: 'Basic Plan',
      price: 50.0,
      description: 'Basic subscription plan'
    }
  })

  const plan2 = await prisma.plan.create({
    data: {
      planName: 'Premium Plan',
      price: 100.0,
      description: 'Premium subscription plan'
    }
  })

  // Create deposits
  await prisma.deposit.create({
    data: {
      userId: user1.id,
      amount: 500.0,
      cryptocurrency: 'Bitcoin',
      status: DepositStatus.accepted
    }
  })

  // Create withdrawals
  await prisma.withdrawal.create({
    data: {
      userId: user2.id,
      amount: 200.0,
      cryptocurrency: 'Ethereum',
      status: WithdrawalStatus.pending
    }
  })

  // Create orders
  await prisma.order.create({
    data: {
      userId: user1.id,
      productId: product1.id,
      productPrice: product1.price,
      productCommission: product1.commission
    }
  })

  // Create subscriptions
  await prisma.subscription.create({
    data: {
      userId: user1.id,
      planId: plan1.id,
      startDate: new Date(),
      endDate: null
    }
  })

  console.log('Seed data created successfully!')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
