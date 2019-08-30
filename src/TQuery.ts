import {TQ} from "./Type";

//TODO: 将这个类拆分，目前先用这样的方式划分

export class TQuery implements TQ {
    ////===============================tQuery 成员变量=============================================
    context: any;
    length: number;
    elem: any;
    selector: string ;

    //===============================tQuery 核心函数=============================================
    /**
     * TODO: 需要跟jq一样能匹配更多参数
     * @param el
     */
    constructor(el: string);
    constructor(el: Element);
    constructor(el?: string | Element, callback?: () => {}) {
        //类型断言
        this.elem = document.querySelectorAll(<string>el) && <Element>el || null;
        this.selector =<string> el;
        //   this.ready(callback)
    }


    //TODO:还差两个没实现
    //===============================tQuery 对象访问====================================================
    /**
     * 以每一个匹配的元素作为上下文来执行一个函数。
     * @param callback
     */
    each(callback: (index) => void): void {
        this.elem.forEach((element, index) => {
            // @ts-ignore
            this = element;
            callback(index);
        })
    }

    /**
     * jQuery 对象中元素的个数。
     */
    size(): number {
        return this.elem.length;
    }

    /**
     *
     * @param index 在nodelist对象中的位置
     */
    get(index: number) {
        //返回 NodeList 对象中指定索引的节点，如果索引越界，则返回null。等价的写法是 nodeList[i]，不过，在这种情况下，越界访问将返回 undefined。
        return this.elem.item(index);
    }

    /**
     * 搜索匹配的元素，并返回相应元素的索引值，从0开始计数。
     * @param selector
     */
    index(selector: string): number {
        for (let key in this.elem.keys()) {
            if (document.querySelector(selector).isSameNode(this.elem[key]))
                return Number(key);
        }
        return -1;
    }

    //===========================================数据缓存==============================================
    /**
     * TODO:目前没有实现思路暂时搁置
     * 在元素上存放数据,返回tQuery对象。
     * @param key
     * @param value
     */
    data(key, value) {

    }

    removeData() {
    }

    //=========================================队列控制=========================================================
    //TODO：搞懂机制
    queue(e, q) {
    }

    clearQueue([queueName]: any[]) {
    }

    dequeue([queueName]: any[]) {
    }

    //=============================================属性========================================================

    attr(arg1: string);
    attr(arg1: { src: string, alt: string })
    attr(arg1: string, arg2: string)
    //TODO：添加一个key callback的方法重载
    attr(arg1: string | { src: string, alt: string }, arg2?: string) {
        this.elem[0].setAttributes(<{ src: string, alt: string }>arg1);
        this.elem[0].setAttributes(<string>arg1, <string>arg2);
        return this.elem[0].getAttribute(<string>arg1) || null;
    }


    prop(pro: string | object) {
    }

    removeAttr(name: string) {
    }

    removeProp(name: string) {
    }

    //==========================================插件机制=========================================================
    //在ts 下可以使用 extends 关键字继承本对象 问题：1.无法多插件扩展
    //==========================================多库共存=========================================================
    //不存在冲突问题，本类可以随意赋值
    //===========================================属性=============================================================

}
