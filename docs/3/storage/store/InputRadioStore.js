class InputRadioStore {
    static getElements() { return document.querySelectorAll(`input[type="radio"]`); }
    static getKeys(elements) {
        return new Set(Array.from(elements).map(element=>element.getAttribute('name')));
    }
    static getKey(element) {
        return element.getAttribute('name');
    }
    static getValue(element) {
        return element.getAttribute('value') || document.querySelector(`label[for="${element.getAttribute('id')}"]`).textContent;
    }
    static setValue(element, value) {
        if (value === element.getAttribute('value') || value === document.querySelector(`label[for="${element.getAttribute('id')}"]`).textContent) {
            element.setAttribute('checked', 'checked');
        }
    }
    static isSaveTarget(element) { return element.checked; }
}
