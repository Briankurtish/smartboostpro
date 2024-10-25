import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  '/',
  '/admin',
  '/list/users',
  '/list/deposit-request',
  '/list/manage-deposits',
  '/list/withdrawal-request',
  '/list/manage-withdrawals',
  '/list/manage-plans',
  '/list/manage-products',
  '/settings',
  '/tasks',
  '/deposit',
  '/withdraw',
  '/upgrade',
  '/withdrawal-history',
  '/deposit-history',
  '/order-history',
  '/account-settings'
])

// Define admin-only routes
const isAdminRoute = createRouteMatcher([
  '/admin',
  '/list/users',
  '/list/manage-deposits',
  '/list/deposit-request',
  '/list/withdrawal-request',
  '/list/manage-withdrawals',
  '/list/manage-plans',
  '/list/manage-products',
  '/settings'
])

export default clerkMiddleware(async (auth, request) => {
  // Protect all defined routes
  if (isProtectedRoute(request)) {
    await auth.protect()
  }

  const { sessionClaims } = await auth()
  const role = (sessionClaims?.metadata as { role?: string })?.role
  // console.log(role)

  // Restrict access to admin routes only for users with no role
  if (!role && isAdminRoute(request)) {
    return new Response('Forbidden: Access restricted to admins only', { status: 403 })
  }

  // No further restrictions for admin users on admin routes
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)'
  ]
}
