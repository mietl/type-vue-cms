import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
export function formatUTC(dateStr: string, format: string = 'YYYY/MM/DD hh:mm:ss') {
  return dayjs.utc(dateStr).utcOffset(8).format(format)
}
