/**
 * @interface StorageType
 * @method  setStorage -设置变量
 * @method  getStorage -获取变量
 */
export interface StorageType {
  setStorage: (keyName: string, keyValue: any) => void
  getStorage: (keyName: string) => void
}

/**
 * @Class Storage -单例模式缓存变量
 */
export default class Storage implements StorageType {
  
 /**
  * @class Storage
  * @instance
  * @methods getInstence -初始化
  */
  public static getInstence = (function () {
    let _instence = new Object;
    return () => {
      if (Object.keys(_instence).length == 0) {
        _instence = new Storage()
      }
      return _instence
    }
  })()
 

/**
  * @class Storage
  * @instance
  * @methods setStorage -设置参数
  * @param {string} keyName -存储名称
  * @param {any} keyValue -存储参数
  */
  public  setStorage = (keyName: string, keyValue:any) => {
    this[keyName] = keyValue
  }


 /**
  * @class Storage
  * @instance
  * @methods getStorage -获取参数
  * @param {string} keyName -存储名称
  */
  public  getStorage = (keyName: string) => {
    return this[keyName]
  }
}
