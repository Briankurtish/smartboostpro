// MUI Imports
// import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports

import { useUser } from '@clerk/clerk-react' // Import useUser  from Clerk

import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, MenuItem } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }: { scrollMenu: (container: any, isPerfectScrollbar: boolean) => void }) => {
  // Hooks
  const theme = useTheme()
  const { isBreakpointReached, transitionDuration } = useVerticalNav()
  const { user } = useUser() // Get the current user

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  // Extract roles from user metadata, ensuring it's an array
  const userRoles: string[] = (user?.publicMetadata?.role || []) as string[]

  // Determine if user is an admin
  const isAdmin = userRoles.includes('admin')

  const menuRoutes = [
    {
      Icon: 'ri-home-smile-line',
      label: 'Home',
      href: '/'
    },
    {
      Icon: 'ri-home-smile-line',
      label: 'Dashboard',
      href: '/admin',
      roles: ['admin'] // Role restricted
    },
    {
      Icon: 'ri-user-line',
      label: 'Users',
      href: '',
      roles: ['admin'] // Role restricted
    },
    {
      Icon: 'ri-dashboard-line',
      label: 'Manage Deposits',
      href: '',
      roles: ['admin'] // Role restricted
    },
    {
      Icon: 'ri-dashboard-line',
      label: 'Manage Withdrawals',
      href: '',
      roles: ['admin'] // Role restricted
    },
    {
      Icon: 'ri-robot-line',
      label: 'Tasks Panel',
      href: '/tasks'

      // No roles specified, accessible to all
    },
    {
      Icon: 'ri-cash-line',
      label: 'Recharge Account',
      href: '/deposit'

      // No roles specified, accessible to all
    },
    {
      Icon: 'ri-bank-line',
      label: 'Withdraw',
      href: '/withdraw'

      // No roles specified, accessible to all
    },
    {
      Icon: 'ri-bar-chart-line',
      label: 'Upgrade',
      href: '/upgrade'

      // No roles specified, accessible to all
    },
    {
      Icon: 'ri-dashboard-line',
      label: 'Manage Plans',
      href: '',
      roles: ['admin'] // Role restricted
    },
    {
      Icon: 'ri-dashboard-line',
      label: 'Manage Products',
      href: '',
      roles: ['admin'] // Role restricted
    },
    {
      Icon: 'ri-history-line',
      label: 'Withdrawal History',
      href: '/withdrawal-history'

      // No roles specified, accessible to all
    },
    {
      Icon: 'ri-history-line',
      label: 'Deposit History',
      href: '/deposit-history'

      // No roles specified, accessible to all
    },
    {
      Icon: 'ri-history-line',
      label: 'Order History',
      href: '/order-history'

      // No roles specified, accessible to all
    },
    {
      Icon: 'ri-settings-line',
      label: 'Settings',
      href: '',
      roles: ['admin'] // Role restricted
    },
    {
      Icon: 'ri-user-settings-line',
      label: 'Account Settings',
      href: '/account-settings'

      // No roles specified, accessible to all
    }
  ].filter(route => {
    if (isAdmin) {
      // Admin users see only routes with roles that include 'admin'
      return route.roles && route.roles.includes('admin')
    }

    // Non-admin users see routes with no roles or those matching their roles
    return !route.roles || route.roles.some(role => userRoles.includes(role))
  })

  return (
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      <Menu
        menuItemStyles={menuItemStyles(theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(theme)}
      >
        {menuRoutes.map(route => (
          <MenuItem key={route.href} href={route.href} icon={<i className={route.Icon} />}>
            {route.label}
          </MenuItem>
        ))}
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
