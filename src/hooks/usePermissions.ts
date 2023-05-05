import useLoginStore from '@/store/login'

export default function usePermissions(action: string) {
  const { permissions } = useLoginStore()
  if (!permissions.length) return

  return !!permissions.find((item) => item.includes(action))
}
