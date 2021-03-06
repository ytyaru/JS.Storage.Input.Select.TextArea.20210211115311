class Storage { // 抽象クラスにしたい
    constructor() { }
    // protected にしたい: load, save, getRadios
    // event: changeイベント時に対象要素のみ実行したいとき渡す。
    load(target=null) { this.#radiosFunc(this.#load, target); }
    save(target=null) { this.#radiosFunc(this.#save, target); }
    getRadios() { return document.querySelectorAll(`input[type="radio"]`); }
    #radiosFunc(func, target) {
        // 対象要素のみ実行する
        if (target) {
            func(target, this.getStore(target));
            return;
        }
        // すべての要素に実行する
        const elementStores = [InputRadioStore];
        for (let elementStore of elementStores) {
            const elements = elementStore.getElements();
            for (let element of elements) {
                func(element, elementStore);
            }
        }
    }
    #getStores() {
        return [InputRadioStore];
    }
    #getStore(target) {
        for (let store of this.#getStores()) {
            for (let element of store.getElements()) {
                if (target === element) { return store; }
            }
        }
        const msg = `指定したターゲット要素は保存対象外です。: ${target}`;
        console.error(msg, target);
        throw new Error(msg);
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
