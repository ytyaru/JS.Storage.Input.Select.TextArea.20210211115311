class Storage { // 抽象クラスにしたい
    constructor() { }
    // protected にしたい: load, save, getRadios
    // event: changeイベント時に対象要素のみ実行したいとき渡す。
    load(event=null) { this.#radiosFunc(this.#load, event); }
    save(event=null) { this.#radiosFunc(this.#save, event); }
    getRadios() { return document.querySelectorAll(`input[type="radio"]`); }
    #radiosFunc(func, event) {
        if (event) {
            func(null, event);
            return;
        }
        const radios = this.getRadios();
        const radioNames = new Set(Array.from(radios).map(radio=>radio.getAttribute('name')));
        console.log(radioNames);
        for (let name of radioNames) {
            func(name, null);
        }
    }
    #load(name, event) {
        const key = (event) ? event.target.getAttribute('name') : name;
        const value = localStorage.getItem(key);
        if (value) {
            const checkedRadio = document.querySelector(`input[type="radio"][name="${name}"][value="${value}"]`);
            if (checkedRadio) {
                checkedRadio.setAttribute('checked', 'checked');
            }
        }
    }
    #save(name, event) {
        const checkedRadio = (event) ? event.target : document.querySelector(`input[type="radio"][name="${name}"]:checked`);
        if (checkedRadio) {
            console.log(checkedRadio);
            const name = checkedRadio.getAttribute('name');
            const value = checkedRadio.getAttribute('value') || checkedRadio.textContent;
            localStorage.setItem(name, value);
        }
    }
}
