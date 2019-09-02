export interface TQ {
    version: string
    elem: any
    length: number
    context: any
    selector: string | Element

    // getInstance(): (elem: string | Element) => any

    each(callback: (index) => void): void

    size(): number

    data(key, value)

    removeData()

    get(index: number)

    index(selector: string): number

    queue(e, q)

    dequeue([queueName])

    clearQueue([queueName])

    attr(att: string | object)

    toggleAttr(name: string)

    removeAttr(name: string)

    prop(pro: string | object)

    removeProp(name: string)

    addClass(clazz: string)

    removeClass(clazz: string)

    toggleClass(clazz: string)

    html(val?: string)

    text(val?: string)

    val(val?: string)

    css(arg1: string | object, callback?: (index: number, value: string) => any)

    cssHooks?: Array<any>

    offset(coordinates: object, callback?: (index: number, coords) => any)

    position(): { top: number, left: number }

    scrollTop(val: string | number)

    scrollLeft(val: string | number): number

    height(val: string | number, callback?: (index: number, height: number) => number | string)

    width(val: string | number, callback?: (index: number, width: number) => number | string)

    innerHeight(): number

    innerWidth(): number

    outerHeight(options: boolean): number

    outerWidth(options: boolean): number

    append()

}
