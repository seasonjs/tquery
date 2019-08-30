'use strict';

//TODO: 将这个类拆分，目前先用这样的方式划分
var TQuery = /** @class */ (function () {
    function TQuery(el, callback) {
        //类型断言
        this.elem = document.querySelectorAll(el) && el || null;
        this.selector = el;
        //   this.ready(callback)
    }
    //TODO:还差两个没实现
    //===============================tQuery 对象访问====================================================
    /**
     * 以每一个匹配的元素作为上下文来执行一个函数。
     * @param callback
     */
    TQuery.prototype.each = function (callback) {
        this.elem.forEach(function (element, index) {
            callback(index);
        });
    };
    /**
     * jQuery 对象中元素的个数。
     */
    TQuery.prototype.size = function () {
        return this.elem.length;
    };
    /**
     *
     * @param index 在nodelist对象中的位置
     */
    TQuery.prototype.get = function (index) {
        //返回 NodeList 对象中指定索引的节点，如果索引越界，则返回null。等价的写法是 nodeList[i]，不过，在这种情况下，越界访问将返回 undefined。
        return this.elem.item(index);
    };
    /**
     * 搜索匹配的元素，并返回相应元素的索引值，从0开始计数。
     * @param selector
     */
    TQuery.prototype.index = function (selector) {
        for (var key in this.elem.keys()) {
            if (document.querySelector(selector).isSameNode(this.elem[key]))
                return Number(key);
        }
        return -1;
    };
    //===========================================数据缓存==============================================
    /**
     * TODO:目前没有实现思路暂时搁置
     * 在元素上存放数据,返回tQuery对象。
     * @param key
     * @param value
     */
    TQuery.prototype.data = function (key, value) {
    };
    TQuery.prototype.removeData = function () {
    };
    //=========================================队列控制=========================================================
    //TODO：搞懂机制
    TQuery.prototype.queue = function (e, q) {
    };
    TQuery.prototype.clearQueue = function (_a) {
        var queueName = _a[0];
    };
    TQuery.prototype.dequeue = function (_a) {
        var queueName = _a[0];
    };
    //=============================================属性========================================================
    /**
     * 获取匹配的元素集合中的第一个元素的属性的值 或 设置每一个匹配元素的一个或多个属性。
     * @param arg1
     * @param arg2
     */
    TQuery.prototype.attr = function (arg1, arg2) {
        this.elem[0];
        return this.elem[0].attributes.getNamedItem(arg1) || null;
    };
    TQuery.prototype.prop = function (pro) {
    };
    TQuery.prototype.removeAttr = function (name) {
    };
    TQuery.prototype.removeProp = function (name) {
    };
    return TQuery;
}());

//使用方法
// 好处和jq相比，无冲突可随意更改命名所以可以有UA去判断使用哪个类，也避免了jq的很多冲突问题
function $(el) {
    return new TQuery(el) && new TQuery(el);
}
$('body').each(function (index) {
    console.log(index, this);
});
