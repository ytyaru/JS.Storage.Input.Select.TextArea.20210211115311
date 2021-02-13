class StoreFactory {
    static #stores = [InputStore, InputRadioStore, InputCheckboxStore, SelectStore, TextAreaStore];
    static get(id=null) {
        return (id) ? new Class.get(`${id}Store`)() : StoreFactory.#newStores();
    }
    static #newStores() {
        return StoreFactory.#stores.map(store=>new store());
    }
    static * getElements() {
        for (let store of StoreFactory.get()) {
            console.log(store);
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
