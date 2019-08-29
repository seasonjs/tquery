class tQueryImp implements tQueryInterface {
    elems: any;
    $(el: string): object {
        return this.elems = document.querySelectorAll(el);
    }
    each(callback: eachCallback): void {
        try {
            this.elems.forEach((element,index) => {
                callback(index)
            });
        } catch (e) {
            console.error(e)
        }

        //throw new Error("Method not implemented.");
    }
    size(): number {
        return this.elems.length;
     //   throw new Error("Method not implemented.");
    }
    length: number;
    context: any;
    get(index: number) {
       // throw new Error("Method not implemented.");
    }
    index(selector: object) {
       // throw new Error("Method not implemented.");
    }
    data(key: any, value: any) {
        //throw new Error("Method not implemented.");
    }
    removeData() {
       // throw new Error("Method not implemented.");
    }
    queue(e: any, q: any) {
        throw new Error("Method not implemented.");
    }


}