class OnceStorager extends Storager { // load時に取得。beforeunload時に保存。
    constructor() {
        super();
        document.addEventListener('load', (event)=>{ this.load(); });
        document.addEventListener('beforeunload', (event)=>{ this.save(); });
    }
    load() { this.#radiosFunc(this.#load); }
    save() { this.#radiosFunc(this.#save); }
    #radiosFunc(func) {
        const radios = document.querySelectorAll(`input[type="radio"]`);
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
