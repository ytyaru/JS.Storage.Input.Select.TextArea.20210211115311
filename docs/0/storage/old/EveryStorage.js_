class EveryStorage extends Storage { // load時に取得。change時に保存。
    constructor() {
        super();
        document.addEventListener('load', (event)=>{ this.load(); });
        for (let radio of this.getRadios()) {
            radio.addEventListener('change', (event)=>{ this.save(event); });
        }
        this.load();
    }
}
