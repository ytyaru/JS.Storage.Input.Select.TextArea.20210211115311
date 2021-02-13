class InputCheckboxStore {
    static getElements() { return document.querySelectorAll(`input[type="checkbox"]`); }
    static getKeys(elements) {
        return new Set(Array.from(elements).map(element=>element.getAttribute('name')));
    }
    static getKey(element) {
        return element.getAttribute('name');
    }
    static getValue(element) {
        const values = Array.from(InputCheckboxStore.getElements())
                            .filter(element=>element.checked)
                            .map(element=>element.getAttribute('value') || document.querySelector(`label[for="${element.getAttribute('id')}"]`).textContent);
        return JSON.stringify(values);
    }
    static setValue(element, value) {
        const values = JSON.parse(value);
        if (!values) { return; }
        InputCheckboxStore.#clearChecked(element);
        for (let value of values) {
            const checks = Array.from(InputCheckboxStore.getElements())
                                .filter(element=>value === element.getAttribute('value'));
            for (let element of checks) {
                element.checked = true;
            }
        }
    }
    static #clearChecked(target) {
        for (let element of InputCheckboxStore.getElements()) {
            if (target.getAttribute('name') === target.getAttribute('name')) {
                if (element.checked) { element.checked = false; }
            }
        }
    }
    static isSaveTarget(element) { return true; }
}
