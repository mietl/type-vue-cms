import type { RouteRecordRaw } from 'vue-router';
function dirRoutes(){
    // 动态加载路由对象
    const routeFiles:Record<string, any> = import.meta.glob('@/router/main/**/*.ts',{
      eager:true // 直接拿到import的结果
    });
  
    const routes = Object.values(routeFiles).map(_module=>_module.default);
    return routes;
}


export let firstMenuItem = null;

export function menuMapRoutes(menus:any[]):RouteRecordRaw[]{
  const matchedRoutes = [];
  
  const allRoutes:any[] = dirRoutes();
  for(const menuItem  of menus){
    for(const submenu of menuItem.children){
      console.log(allRoutes);
      const matchedRoute = allRoutes.find(route=>{
          if(submenu.url.includes(route.path)){
            // 定义元数据
            route.meta = {
              id:submenu.id
            }
            return true;
          }
      });
      if(matchedRoute){
        matchedRoutes.push(matchedRoute);
        // 赋值第一个菜单项
        if(!firstMenuItem)  firstMenuItem = submenu;
      }
    }
  }
  
  return matchedRoutes;
}