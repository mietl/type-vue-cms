import httpRequest from '..';
import type { IAccount } from '@/types';

export function userLogin(account:IAccount){
  return httpRequest.post('/login',{
    data:account,
  });
}

// 获取用户信息
export function getUserInfo(id:number){
  return httpRequest.get(`/users/${id}`);
}


// 获取用户菜单
export function getUserRoleMenus(id:number){
  return httpRequest.get(`/role/${id}/menu/`);
}

