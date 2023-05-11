export const projectTree = `type-vue-cms                              
├─ public                                 
│  └─ favicon.ico                         
├─ src                                    
│  ├─ assets                              
│  │  ├─ css                              
│  │  │  ├─ base.less                     
│  │  │  ├─ layout.less                   
│  │  │  ├─ main.less                     
│  │  │  ├─ public.less                   
│  │  │  └─ swal2.less                    
│  │  ├─ fonts                            
│  │  │  ├─ index.less                    
│  │  │  └─ SanFranciscoDisplay.otf       
│  │  └─ img                              
│  │     ├─ 1f535.png                     
│  │     ├─ logo.png                      
│  │     ├─ logobg.png                    
│  │     └─ t.png                         
│  ├─ components                          
│  │  ├─ card                             
│  │  │  └─ TCard.vue                     
│  │  ├─ code                             
│  │  │  └─ TCode.vue                     
│  │  ├─ count-up                         
│  │  │  └─ TCountUp.vue                  
│  │  ├─ desc-table                       
│  │  │  ├─ index.ts                      
│  │  │  └─ TDescTable.vue                
│  │  ├─ echarts                          
│  │  │  └─ BaseEchart.vue                
│  │  ├─ form-tile                        
│  │  │  └─ TFormTile.vue                 
│  │  ├─ nav-header                       
│  │  │  ├─ components                    
│  │  │  │  ├─ NavCrumbs.vue              
│  │  │  │  └─ UserNavToolbar.vue         
│  │  │  └─ NavHeader.vue                 
│  │  ├─ nav-menu                         
│  │  │  └─ NavMenu.vue                   
│  │  ├─ page-modal                       
│  │  │  └─ TTMoal.vue                    
│  │  ├─ page-search                      
│  │  │  └─ TSearch.vue                   
│  │  ├─ page-table                       
│  │  │  └─ TTable.vue                    
│  │  └─ tile-list                        
│  │     └─ TileList.vue                  
│  ├─ config                              
│  │  ├─ constant.ts                      
│  │  └─ env.ts                           
│  ├─ hooks                               
│  │  ├─ index.ts                         
│  │  ├─ usePermissions.ts                
│  │  └─ useSearch.ts                     
│  ├─ router                              
│  │  ├─ main                             
│  │  │  ├─ analysis                      
│  │  │  │  ├─ dashboard.ts               
│  │  │  │  └─ overview.ts                
│  │  │  ├─ product                       
│  │  │  │  ├─ category.ts                
│  │  │  │  └─ goods.ts                   
│  │  │  ├─ story                         
│  │  │  │  ├─ chat.ts                    
│  │  │  │  └─ list.ts                    
│  │  │  └─ system                        
│  │  │     ├─ department.ts              
│  │  │     ├─ menu.ts                    
│  │  │     ├─ role.ts                    
│  │  │     └─ user.ts                    
│  │  └─ index.ts                         
│  ├─ service                             
│  │  ├─ analysis                         
│  │  │  └─ index.ts                      
│  │  ├─ entry                            
│  │  │  ├─ login.ts                      
│  │  │  └─ pageset.ts                    
│  │  ├─ request                          
│  │  │  └─ index.ts                      
│  │  ├─ story                            
│  │  │  └─ index.ts                      
│  │  ├─ system                           
│  │  │  └─ index.ts                      
│  │  └─ index.ts                         
│  ├─ setup                               
│  │  ├─ alert.ts                         
│  │  ├─ icons.ts                         
│  │  └─ index.ts                         
│  ├─ store                               
│  │  ├─ types                            
│  │  │  └─ system.ts                     
│  │  ├─ analysis.ts                      
│  │  ├─ index.ts                         
│  │  ├─ login.ts                         
│  │  ├─ page.ts                          
│  │  └─ system.ts                        
│  ├─ types                               
│  │  ├─ form.ts                          
│  │  ├─ index.ts                         
│  │  ├─ table.ts                         
│  │  └─ user.ts                          
│  ├─ utils                               
│  │  ├─ format_date.ts                   
│  │  ├─ format_string.ts                 
│  │  ├─ form_config.ts                   
│  │  ├─ map_menu.ts                      
│  │  ├─ message.ts                       
│  │  └─ storage.ts                       
│  ├─ views                               
│  │  ├─ login                            
│  │  │  ├─ components                    
│  │  │  │  ├─ AccountLogin.vue           
│  │  │  │  ├─ login-form.css             
│  │  │  │  └─ LoginByPhone.vue           
│  │  │  └─ UserLoginPage.vue             
│  │  ├─ main                             
│  │  │  ├─ analysis                      
│  │  │  │  ├─ components                 
│  │  │  │  │  ├─ data                    
│  │  │  │  │  │  └─ china.json           
│  │  │  │  │  ├─ BarEchart.vue           
│  │  │  │  │  ├─ CountCard.vue           
│  │  │  │  │  ├─ LineEchart.vue          
│  │  │  │  │  ├─ MapEchart.vue           
│  │  │  │  │  ├─ PieEchart.vue           
│  │  │  │  │  ├─ RoseEchart.vue          
│  │  │  │  │  └─ types.ts                
│  │  │  │  ├─ dashboard                  
│  │  │  │  │  └─ Dashboard.vue           
│  │  │  │  └─ overview                   
│  │  │  │     ├─ project-config          
│  │  │  │     │  ├─ dependencies.ts      
│  │  │  │     │  ├─ dev-dependencies.ts  
│  │  │  │     │  ├─ index.ts             
│  │  │  │     │  ├─ project_dir.ts       
│  │  │  │     │  └─ technology.ts        
│  │  │  │     └─ Overview.vue            
│  │  │  ├─ product                       
│  │  │  │  ├─ category                   
│  │  │  │  │  ├─ config                  
│  │  │  │  │  │  ├─ search.config.ts     
│  │  │  │  │  │  └─ table.config.ts      
│  │  │  │  │  └─ Category.vue            
│  │  │  │  └─ goods                      
│  │  │  │     ├─ config                  
│  │  │  │     │  ├─ model.config.ts      
│  │  │  │     │  ├─ search.config.ts     
│  │  │  │     │  └─ table.config.ts      
│  │  │  │     └─ Goods.vue               
│  │  │  ├─ story                         
│  │  │  │  ├─ chat                       
│  │  │  │  │  └─ Chat.vue                
│  │  │  │  ├─ components                 
│  │  │  │  │  └─ t-editor                
│  │  │  │  │     └─ TEditor.vue          
│  │  │  │  └─ list                       
│  │  │  │     ├─ config                  
│  │  │  │     │  └─ table.config.ts      
│  │  │  │     └─ List.vue                
│  │  │  ├─ system                        
│  │  │  │  ├─ department                 
│  │  │  │  │  ├─ config                  
│  │  │  │  │  │  ├─ modal.config.ts      
│  │  │  │  │  │  ├─ search.config.ts     
│  │  │  │  │  │  └─ table.config.ts      
│  │  │  │  │  └─ Department.vue          
│  │  │  │  ├─ menu                       
│  │  │  │  │  ├─ config                  
│  │  │  │  │  │  └─ table.config.ts      
│  │  │  │  │  └─ Menu.vue                
│  │  │  │  ├─ role                       
│  │  │  │  │  ├─ config                  
│  │  │  │  │  │  ├─ modal.config.ts      
│  │  │  │  │  │  ├─ search.config.ts     
│  │  │  │  │  │  └─ table.config.ts      
│  │  │  │  │  └─ Role.vue                
│  │  │  │  └─ user                       
│  │  │  │     ├─ components              
│  │  │  │     │  ├─ SearchForm.vue       
│  │  │  │     │  ├─ UserAlertModal.vue   
│  │  │  │     │  └─ UserTable.vue        
│  │  │  │     ├─ config                  
│  │  │  │     │  ├─ modal.config.ts      
│  │  │  │     │  ├─ search.config.ts     
│  │  │  │     │  └─ table.config.ts      
│  │  │  │     └─ UserHub.vue             
│  │  │  └─ HomePage.vue                  
│  │  └─ NotFoundPage.vue                 
│  ├─ App.vue                             
│  └─ main.ts                             
├─ auto-imports.d.ts                      
├─ commitlint.config.js                   
├─ components.d.ts                        
├─ env.d.ts                               
├─ index.html                             
├─ LICENSE                                
├─ package-lock.json                      
├─ package.json                           
├─ README.md                              
├─ tsconfig.json                          
├─ tsconfig.node.json                     
└─ vite.config.ts                         
`
