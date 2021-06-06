
// css 作为模块加载
declare module "*.css" {
    const css:{[key:string]:string};
    export default css;
}