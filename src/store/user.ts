import { defineStore } from 'pinia';

const useUserStore = defineStore('user',{
  state(){
    return {

    }
  },
  actions:{
    loginAction(user:any){
      console.log('user');
    }
  }
})

export default useUserStore;