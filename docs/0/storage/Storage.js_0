class Storage { // 抽象クラスにしたい
    constructor() { }
    // protected にしたい: load, save, getRadios
    // event: changeイベント時に対象要素のみ実行したいとき渡す。
    load(target=null) { this.#radiosFunc(this.#load, target); }
    save(target=null) { this.#radiosFunc(this.#save, target); }
    getRadios() { return document.querySelectorAll(`input[type="radio"]`); }
    #radiosFunc(func, target) {
        if (target) {
            func(target);
            return;
        }
        for (let radio of this.getRadios()) {
            func(radio);
        }
    }
    #load(target) {
        console.log(target);
        const key = target.getAttribute('name');
        const value = localStorage.getItem(key);
        if (!value) { return; }
        const checkedRadio = document.querySelector(`input[type="radio"][name="${key}"][value="${value}"]`);
        if (!checkedRadio) { return; }
        checkedRadio.setAttribute('checked', 'checked');
    }
    #save(target) {
        console.log(target);
        if (!target.checked) { return; }
        const name = target.getAttribute('name');
        const value = target.getAttribute('value') || checkedRadio.textContent;
        localStorage.setItem(name, value);
    }
}
