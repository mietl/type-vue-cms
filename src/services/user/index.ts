import httpRequest from '../';
import type { IAccount } from '@/types';
export function userLogin(account:IAccount){
  return httpRequest.post({
    url:'/login',
    data:account
  });
}