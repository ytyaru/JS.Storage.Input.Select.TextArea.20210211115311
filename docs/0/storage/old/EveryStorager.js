class EveryStorager { // load時に取得。change時に保存。
    constructor() {
        document.addEventListener('load', (event)=>{ this.load(); });
        for (let radio of this.#getRadios()) {
            radio.addEventListener('change', (event)=>{ this.save(); });
        }
    }
    load() { this.#radiosFunc(this.#load); }
    save() { this.#radiosFunc(this.#save); }
    #getRadios() { return document.querySelectorAll(`input[type="radio"]`); }
    #radiosFunc(func) {
        const radios = this.#getRadios();
        const radioNames = new Set(radios.filter(radio=>radio.getAttribute('name')));
        for (let name of radioNames) {
            func(radios, name);
        }
    }
    #load(radios, name) {
        const value = localStorage.getItem(name);
        if (value) {
            const checkedRadio = radios.querySelector(`input[name="${name}"][value="${value}"]`);
            if (checkedRadio) {
                localStorage.setAttribute('checked', 'checked');
            }
        }
    }
    #save(radios, name) {
        const checkedRadio = radios.querySelector(`input[name="${name}"]:checked`);
        if (checkedRadio) {
            localStorage.setItem(name, checkedRadio.getAttribute('value') || checkedRadio.textContent);
        }
    }
}
