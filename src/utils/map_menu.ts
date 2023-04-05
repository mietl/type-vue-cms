import type { RouteRecordRaw } from 'vue-router';
function dirRoutes(){
    // 动态加载路由对象
    const routeFiles:Record<string, any> = import.meta.glob('@/router/main/**/*.ts',{
      eager:true // 直接拿到import的结果
    });
  
    const routes = Object.values(routeFiles).map(_module=>_module.default);
    return routes;
}

export function menuMapRoutes(menus:any[]):RouteRecordRaw[]{
  const children = [];
  
  const routes = dirRoutes();
  for(const menuItem  of menus){
    for(const submenu of menuItem.children){
      console.log(submenu,submenu.url,routes[0].path,submenu.url.includes(routes[0].path));

      const matchPath = routes.find(route=>submenu.url.includes(route.path));
      if(matchPath){
        children.push(matchPath);
      }
    }
  }
  
  return children;
}