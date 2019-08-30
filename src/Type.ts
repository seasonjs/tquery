
export interface TQ {
    elem: any;
    length: number;
    context: any;
    selector: string | Element;

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

    removeAttr(name: string)

    prop(pro: string | object)

    removeProp(name: string)

}
