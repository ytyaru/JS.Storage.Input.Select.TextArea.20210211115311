class InputCheckboxStore extends Store {
    constructor() { super('input'); }
    getElements() { return document.querySelectorAll(`input[type="checkbox"]`); }
    getElementKey(element) {
        return element.getAttribute('name') || super.createKey(element);
    }
    getValue(element) {
        const values = Array.from(this.getElements())
                            .filter(element=>element.checked)
                            .map(element=>element.getAttribute('value') || document.querySelector(`label[for="${element.getAttribute('id')}"]`).textContent);
        return JSON.stringify(values);
    }
    setValue(element, value) {
        const values = JSON.parse(value);
        if (!values) { return; }
        this.#clearChecked(element);
        for (let value of values) {
            const checks = Array.from(this.getElements())
                                .filter(element=>value === element.getAttribute('value'));
            for (let element of checks) {
                element.checked = true;
            }
        }
    }
    #clearChecked(target) {
        for (let element of this.getElements()) {
            if (target.getAttribute('name') === target.getAttribute('name')) {
                if (element.checked) { element.checked = false; }
            }
        }
    }
}
