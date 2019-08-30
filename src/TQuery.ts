import {TQ} from "./Type";

//TODO: 将这个类拆分，目前先用这样的方式划分

export class TQuery implements TQ {

    ////===============================tQuery 成员变量=============================================
    context: any;
    length: number;
    elem: any;
    selector: string;
    //TODO:减少选择器删选的流程
    /**
     * 实现已选择的选择器的Node节点来解决
     */
    private static selectors: any;
    //单例模式
    private static instance: TQ;

    //===============================tQuery 核心函数=============================================
    /**
     * TODO: 需要跟jq一样能匹配更多参数
     * @param el
     */
    constructor(el: string);
    constructor(el: Element);
    constructor(el?: string | Element, callback?: () => {}) {
        //类型断言
        if (typeof el === "string") this.elem = document.querySelectorAll(<string>el);
        else this.elem = <Element>el || null;
        //TODO:element类型传进来也能找到对应的selector
        this.selector = <string>el;
        //   this.ready(callback)
    }

    getInstance(elem: string | Element): (elem: string | Element) => any {
        let instance: any;
        return function (elem: string | Element): any {
            if (instance === null || instance === undefined) {
                instance = new TQuery(<string>elem) || new TQuery(<Element>elem)
            }
            return instance;
        }
    }


    //TODO:还差一个函数重载没实现
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

    //==========================================插件机制=========================================================
    //在ts 下可以使用 extends 关键字继承本对象 问题：1.无法多插件扩展
    //==========================================多库共存=========================================================
    //不存在冲突问题，本类可以随意赋值

    //=============================================属性========================================================

    attr(arg1: string);
    attr(arg1: { name: string, attr: string })
    attr(arg1: string, arg2: string)
    /**
     *  TODO：添加一个key callback的方法重载,
     * 获取匹配的元素集合中的第一个元素的属性的值 或 设置每一个匹配元素的一个或多个属性。
     * @important 相较原生jq接口的第二个方法中tq发生了变化
     * @param arg1
     * @param arg2
     */
    attr(arg1: string | { name: string, attr: string }, arg2?: string) {
        //ts并不会真正在运行的时候加入js判断类型语句，所以这需要我们去实现
        if (typeof arg1 === "string" && arg2 !== undefined) this.elem[0].setAttributes(<string>arg1, <string>arg2);
        if (typeof arg1 !== "string" && arg2 === undefined) this.elem[0].setAttributes(<{ name: string, attr: string }>arg1);
        if (typeof arg1 === "string" && arg2 === undefined) return this.elem[0].getAttribute(<string>arg1) || null;
    }

    /**
     *  jq没有的新方法
     *  切换给定元素的某个布尔值属性的状态（如果属性存在则添加属性，属性不存在则移除属性）。
     */
    toggleAttr(name: string) {
        this.elem[0].toggleAttribute(name)
    }

    prop(arg1: string);
    prop(arg1: object);
    //  prop(arg1: string, arg2: object);
    /**
     * TODO：添加一个key callback的方法重载
     * 获取匹配的元素集中第一个元素的属性（property）值或设置每一个匹配元素的一个或多个属性。
     * @param arg1
     * @param arg2
     */
    prop(arg1: string | object) {
        if (typeof arg1 === "string") return this.attr(arg1);
        if (typeof arg1 === "object") {
            Object.keys(arg1).forEach(el => {
                this.attr(el, arg1[el]);
            })
        }
    }

//TODO：功能和兼容性待加强
    removeAttr(name: string) {
        this.elem[0].removeAttribute(name);
    }

    removeProp(name: string) {
        this.removeAttr(name);
    }

    //================================================ CSS 类===========================================
    addClass(clazz: string) {
        this.attr({
            name: "class", attr: <string>clazz
        });
    }

    removeClass(clazz: string) {
        let str = this.attr("class");
        str.replace(clazz, "");
        this.addClass(str)
    }

    toggleClass(clazz: string) {
        let str = this.attr("class");
        str.indexOf(clazz) >= 0 ? this.removeClass(clazz) : this.addClass(clazz);
    }

    //=====================================HTML代码/文本/值======================================================
    /**
     * 取得第一个匹配元素的html内容。这个函数不能用于XML文档。但可以用于XHTML文档。
     * 在一个 HTML 文档中, 我们可以使用 .html() 方法来获取任意一个元素的内容。 如果选择器匹配多于一个的元素，那么只有第一个匹配元素的 HTML 内容会被获取。
     * @param val
     */
    html(val?: string) {
        if (val === undefined || val === null) {
            return this.elem[0].innerHTML;
        } else {
            this.elem[0].innerHTML = val;
        }
    }

    text(val?: string) {
        if (val === undefined || val === null) {
            return this.html();
        } else {

        }
    }

    val(val?: string) {

    }
}
