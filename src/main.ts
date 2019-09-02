import {TQuery} from "./TQuery";

//使用方法
// 好处和jq相比，无冲突可随意更改命名所以可以有UA去判断使用哪个类，也避免了jq的很多冲突问题
// function $(el: string | Element) {
//     return new TQuery(<string>el) || new TQuery(<Element>el)
// }
// 使用单例模式以获得更大的提升性能
const $ = function () {
    let instance: any;
    return function (el: string | Element) {
        if (instance === null || instance === undefined) {
            instance = new TQuery(<string>el) || new TQuery(<Element>el)
        } else {
            instance.elem = el;
        }
        return instance;
    }
}();

export default $;

