class SelectStore {
    static getElements() { return document.querySelectorAll(`select`); }
    static getKey(element) {
        return element.getAttribute('id') || element.getAttribute('name') || SelectStore.#createKey(element);
    }
    static #createKey(target) {
        for (const [index, element] of SelectStore.getElements().entries()) {
            if (target === element) { return `${target.tagName.toLowerCase()}-${index}`; }
        }
    }
    static getValue(element) {
        const values = Array.from(element.selectedOptions)
                            .map(e=>e.getAttribute('value') || e.textContent);
        return JSON.stringify(values);
    }
    static setValue(element, value) {
        const values = JSON.parse(value);
        if (!values) { return; }
        SelectStore.#clearSelected(element);
        for (let option of element.querySelectorAll(`option`)) {
            if (-1 < values.indexOf(option.value)) { option.selected = true; }
        }
    }
    static #clearSelected(element) {
        for (let option of element.options) {
            option.selected = false;
        }
    }
    static isSaveTarget(element) { return true; }
}
