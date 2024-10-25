type RouteAccessMap = {
  [key: string]: string[]
}

export const routeAccessMap: RouteAccessMap = {
  '/admin(.*)': ['admin'],
  '/(.*)': [''],
  '/list/users': ['admin'],
  '/list/deposit-request': ['admin'],
  '/list/manage-deposits': ['admin'],
  '/list/withdrawal-request': ['admin'],
  '/list/manage-withdrawals': ['admin'],
  '/list/manage-plans': ['admin'],
  '/list/manage-products': ['admin'],
  '/settings': ['admin'],
  '/tasks': [''],
  '/deposit': [''],
  '/withdraw': [''],
  '/upgrade': [''],
  '/withdrawal-history': [''],
  '/deposit-history': [''],
  '/order-history': [''],
  '/account-settings': ['']
}
