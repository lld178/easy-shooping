import requests from "./request";
export const reqCategoryList = () => requests({
  url: '/product/getBaseCategoryList',
  method: 'get'
}) 
export const reGetSearch = (query) => requests({
  url: '/list',
  method: 'post',
  data:query
}) 
export const reqGetCode = (teleNum) => requests({
  url: `/user/passport/sendCode/${teleNum}`,
  method: 'get',
  
})
export const reqUserR = (data) => requests({
  url: `/user/passport/register`,
  method: 'post',
  data
})
export const reqUserL = (data) => requests({
  url: `/user/passport/login`,
  method: 'post',
  data
})
export const reqUserI = () => requests({
  url: '/user/userAddress/auth/findUserAddressList',
  method:'get'
})