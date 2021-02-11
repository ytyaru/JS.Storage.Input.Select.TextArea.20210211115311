class EveryStorage extends Storage { // load時に取得。change時に保存。
    constructor() {
        super();
        this.#add();
        this.load();
    }
    destroy() { this.#remove(); }
    #add() {
        document.addEventListener('load', this.#onLoad);
        for (let radio of this.getRadios()) {
            radio.addEventListener('change', this.#onChange);
        }
    }
    #remove() {
        document.removeEventListener('load', this.#onLoad);
        for (let radio of this.getRadios()) {
            radio.removeEventListener('change', this.#onChange);
        }
    }
    #onLoad(event) { this.load(); }
    #onChange(event) { this.save(); }

}
