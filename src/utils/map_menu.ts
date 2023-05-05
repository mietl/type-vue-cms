import type { RouteRecordRaw } from 'vue-router'
function dirRoutes() {
  // 动态加载路由对象
  const routeFiles: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', {
    eager: true // 直接拿到import的结果
  })

  return Object.values(routeFiles).map((_module) => _module.default)
}

// 首次打开页面定向的紫菜蛋
export let firstMenuItem: any = null

export function menuMapRoutes(menus: any[]): RouteRecordRaw[] {
  const matchedRoutes: RouteRecordRaw[] = []

  const allRoutes: RouteRecordRaw[] = dirRoutes()
  for (const menuItem of menus) {
    for (const submenu of menuItem.children) {
      const matchedRoute = allRoutes.find((route) => {
        if (submenu.url.includes(route.path)) {
          // 定义元数据
          route.meta = { id: submenu.id }
          return true
        }
      })
      if (matchedRoute) {
        if (!matchedRoutes.find((route) => route.path === menuItem.url)) {
          matchedRoutes.push({ path: menuItem.url, redirect: matchedRoute.path })
        }

        matchedRoutes.push(matchedRoute)
        // 赋值第一个菜单项
        if (!firstMenuItem) firstMenuItem = submenu
      }
    }
  }

  return matchedRoutes
}

interface IPathCrumbs {
  path: string
  name: string
}

export function trackMenuPath(path: string, menus: any[]): IPathCrumbs[] {
  const pathCrumbs: IPathCrumbs[] = []

  for (const menuItem of menus) {
    for (const submenu of menuItem.children) {
      const matched = submenu.url === path
      if (matched) {
        pathCrumbs.push({ name: menuItem.name, path: menuItem.url })
        pathCrumbs.push({ name: submenu.name, path: submenu.url })
        return pathCrumbs
      }
    }
  }

  return pathCrumbs
}

export function menuMapKeys(menu: any[]): number[] {
  const keys: any[] = []
  function flattenTree(menulist: any) {
    for (const item of menulist) {
      if (item.children) {
        flattenTree(item.children)
      } else {
        keys.push(item.id)
      }
    }
  }
  flattenTree(menu)
  return keys
}

/**
 * @return 权限的列表
 * @param menu 菜单的列表
 */
export function menuMapPermissions(menu: any[]) {
  const permissions: string[] = []

  function _getFloorMenu(menulist: any[]) {
    for (const item of menulist) {
      if (item.type == 3) {
        permissions.push(item.permission)
      } else {
        _getFloorMenu(item.children || [])
      }
    }
  }

  _getFloorMenu(menu)
  return permissions
}
