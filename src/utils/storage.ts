class TypeCache{
  private storage: Storage;

  constructor(storageType: 'localStorage' | 'sessionStorage' = 'localStorage'){
    this.storage = window[storageType];
  }

  get(key:string) : any{
    const value = this.storage.getItem(key);
    if(value){
      return JSON.parse(value);
    }
  }

  set(key:string,value:any):void{
    if (value !== undefined) {
      this.storage.setItem(key,JSON.stringify(value));
    }
  }

  remove(key:string):void{
    this.storage.removeItem(key);
  }

  clear():void{
    this.storage.clear();
  }
}



const localCache = new TypeCache('localStorage');
const sessionCache = new TypeCache('sessionStorage');

export { localCache, sessionCache };
export default TypeCache;