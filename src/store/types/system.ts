export interface ISystemState {
  userList: IUser[]
  totalCount: number

  pageList: []
  pageTotalCount: []
}

interface IUser {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}
