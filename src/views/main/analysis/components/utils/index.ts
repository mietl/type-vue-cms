import { geoCoordMap } from './data'

export interface MapInfo {
  name: string
  value: number
}

export const mapGeoCoordValue = function (data: MapInfo[]) {
  const arr: any[] = []
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    const geoCoord = geoCoordMap[item.name]
    if (geoCoord) {
      // 坐标和对应的值
      // [geoCoord,value,]
      arr.push({
        name: item.name,
        value: geoCoord.concat(item.value)
      })
    }
  }
  return arr
}
