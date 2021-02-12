class StoreFactory {
    static #stores = [InputRadioStore, InputCheckboxStore];
    static get(id=null) {
        return  (id) ? Class.get(`${id}Store`) : StoreFactory.#stores;
    }
    static * getElements() {
        for (let store of StoreFactory.get()) {
            for (let element of store.getElements()) {
                yield element;
            }
        }
    }
    static getFromElement(target) { // 指定したターゲット要素に該当するStoreクラスを返す
        for (let store of StoreFactory.get()) {
            for (let element of store.getElements()) {
                if (target === element) { return store; }
            }
        }
    }
}
