export interface TQ {
    elem: any;
    length: number;
    context: any;
    selector: string | Element;

    getInstance(): (elem: string | Element) => any

    each(callback: (index) => void): void;

    size(): number;

    data(key, value);

    removeData();

    get(index: number);

    index(selector: string): number;

    queue(e, q);

    dequeue([queueName]);

    clearQueue([queueName]);

    attr(att: string | object);

    toggleAttr(name: string);

    removeAttr(name: string);

    prop(pro: string | object);

    removeProp(name: string);

    addClass(clazz: string);

    removeClass(clazz: string);

    toggleClass(clazz: string);

    html(val?: string)

    text(val?: string)

    val(val?: string)
}
