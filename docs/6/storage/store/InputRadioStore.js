class InputRadioStore extends Store {
    constructor() { super('input'); }
    getElements() { return document.querySelectorAll(`input[type="radio"]`); }
    getElementKey(element) {
        return element.getAttribute('name') || super.createKey(element);
    }
    getValue(element) {
        return element.getAttribute('value') || document.querySelector(`label[for="${element.getAttribute('id')}"]`).textContent;
    }
    setValue(element, value) {
        if (value === element.getAttribute('value') || value === document.querySelector(`label[for="${element.getAttribute('id')}"]`).textContent) {
            element.setAttribute('checked', 'checked');
        }
    }
    isSaveTarget(element) { return element.checked; }
}
