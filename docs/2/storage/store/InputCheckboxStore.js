class InputCheckboxStore {
    static getElements() { return document.querySelectorAll(`input[type="checkbox"]`); }
    static getKeys(elements) {
        return new Set(Array.from(elements).map(element=>element.getAttribute('name')));
    }
    static getKey(element) {
        return element.getAttribute('name');
    }
    static getValue(element) {
        const checks = InputCheckboxStore.getElements().querySelectorAll(`:checked`);
        const values = Array.from(checks).map(el=>el.getAttribute('value') || document.querySelector(`label[for="${el.getAttribute('id')}"]`).textContent);
        console.log(values);
        return values;
    }
    static setValue(element, value) {
        const values = JSON.parse(value);
        if (!values) { return; }
        console.log(values);
        const v = element.getAttribute('value');
        const l = document.querySelector(`label[for="${element.getAttribute('id')}"]`).textContent;
        if (values.indexOf(v) || values.indexOf(l)) {
            element.setAttribute('checked', 'checked');
        }
    }
    static isSaveTarget(element) { return element.checked; }
}
