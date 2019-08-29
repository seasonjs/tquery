/**
 * 接口定义
 */
interface tQueryInterface {
    each(callback: eachCallback): void;
    size(): number;
    length: number;
    context: any;
    get(index: number);
    index(selector: object);
    data(key, value);
    removeData();
    queue(e, q);

}