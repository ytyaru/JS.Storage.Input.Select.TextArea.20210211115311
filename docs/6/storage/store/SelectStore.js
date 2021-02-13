class SelectStore extends Store {
    constructor() { super('select'); }
    getValue(element) {
        const values = Array.from(element.selectedOptions)
                            .map(e=>e.getAttribute('value') || e.textContent);
        return JSON.stringify(values);
    }
    setValue(element, value) {
        const values = JSON.parse(value);
        if (!values) { return; }
        this.#clearSelected(element);
        for (let option of element.querySelectorAll(`option`)) {
            if (-1 < values.indexOf(option.value)) { option.selected = true; }
        }
    }
    #clearSelected(element) {
        for (let option of element.options) {
            option.selected = false;
        }
    }
}
