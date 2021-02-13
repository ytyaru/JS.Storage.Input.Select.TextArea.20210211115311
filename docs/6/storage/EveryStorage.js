class EveryStorage extends Storage { // load時に取得。change時に保存。
    constructor() {
        super();
        document.addEventListener('load', (event)=>{ this.load(); });
        for (let element of StoreFactory.getElements()) {
            element.addEventListener('input', (event)=>{ this.save(event.target); });
        }
        this.load();
    }
}
