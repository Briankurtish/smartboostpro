// dashboard/page.tsx
'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import AdminDashboard from '@/components/AdminDashboard'
import UserDashboard from '@/components/UserDashboard'

const DashboardPage = () => {
  const { user } = useUser()
  const [role, setRole] = useState<string | null | undefined>(null)

  useEffect(() => {
    if (user) {
      const userRole = (user.publicMetadata as { role?: string | null | undefined })?.role
      setRole(userRole)
    }
  }, [user])

  // Render loading or a message if the role hasn't loaded
  if (role === null) {
    return <p>Loading...</p>
  }

  // Default to UserDashboard if the role is undefined, empty, or any value other than "admin"
  return <>{role === 'admin' ? <AdminDashboard /> : <UserDashboard />}</>
}

export default DashboardPage
