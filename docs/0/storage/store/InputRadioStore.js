class InputRadioStore {
    static getElements() { return document.querySelectorAll(`input[type="radio"]`); }
    static getKeys(elements) {
        return new Set(Array.from(elements).map(radio=>radio.getAttribute('name')));
    }
    static getKey(element) {
        return element.getAttribute('name');
    }
    static getValue(element) {
        return element.getAttribute('value') || document.querySelector(`label[for="${element.getAttribute('id')}"]`).textContent;
        /*
        const checked = document.querySelector(`input[type="radio"][name="${element.getAttribute('name')}"]:checked`);
        if (!checked) { return undefined; }
        return checked.getAttribute('value') || document.querySelector(`label[for="${checked.getAttribute('id')}"]`).textContent;
        */
    }
    static setValue(element, value) {
        if (value === element.getAttribute('value') || value === document.querySelector(`label[for="${element.getAttribute('id')}"]`).textContent) {
            element.setAttribute('checked', 'checked');
        }
//        const selected = element.querySelector(`input[type="radio"][name="${element.getAttribute('name')}"][value="${value}"]`);
//        if (selected) { selected.setAttribute('selected', 'selected'); }
    }
    static isSaveTarget(element) { return element.checked; }
}
