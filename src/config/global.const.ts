export const config = {
  serverHost: 'http://localhost:5000/api',
  appKey: 'food-management',
  tokenString:
    JSON.parse(localStorage.getItem('food-management') as any)?.token ||
    JSON.parse(sessionStorage.getItem('food-management') as any)?.token
};
