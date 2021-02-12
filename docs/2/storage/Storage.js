class Storage { // 抽象クラスにしたい
    constructor() { }
    // protected にしたい: load, save, getRadios
    // event: changeイベント時に対象要素のみ実行したいとき渡す。
    load(target=null) { this.#radiosFunc(this.#load, target); }
    save(target=null) { this.#radiosFunc(this.#save, target); }
    #radiosFunc(func, target=null) {
        // 対象要素のみ実行する
        if (target) {
            func(target, StoreFactory.getFromElement(target));
            return;
        }
        // すべての要素に実行する
        for (let store of StoreFactory.get()) {
            for (let element of store.getElements()) {
                func(element, store);
            }
        }
    }
    #load(element, store) {
        const key = store.getKey(element);
        const value = localStorage.getItem(key);
        store.setValue(element, value);
    }
    #save(element, store) {
        if (!store.isSaveTarget(element)) { return; }
        const key = store.getKey(element);
        const value = store.getValue(element);
        localStorage.setItem(key, value);
    }
}
