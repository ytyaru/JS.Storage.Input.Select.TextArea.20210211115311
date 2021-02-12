class InputCheckboxStore {
    static getElements() { return document.querySelectorAll(`input[type="checkbox"]`); }
    static #getCheckedElements() { return document.querySelectorAll(`input[type="checkbox"]:checked`); }
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
        console.log('getValue()', values);
        return JSON.stringify(values);
        /*
        Array.from(InputCheckboxStore.getElements()).map(element=>element.checked)
        for (let e of InputCheckboxStore.getElements()) {
            if (e.checked) {
        }
        console.log();
        const checks = InputCheckboxStore.getElements().querySelectorAll(`:checked`);
        const values = Array.from(checks).map(el=>el.getAttribute('value') || document.querySelector(`label[for="${el.getAttribute('id')}"]`).textContent);
        console.log(values);
        return values;
        */
    }
    static setValue(element, value) {
        console.log('setValue()', value);
        const values = JSON.parse(value);
        console.log(values);
        if (!values) { return; }
        console.log(values);
        for (let value of values) {
            const checks = Array.from(InputCheckboxStore.getElements())
                                .filter(element=>value === element.getAttribute('value'));
            for (let element of checks) {
                element.setAttribute('checked', 'checked');
            }
        }
        /*
        const v = element.getAttribute('value');
        const l = document.querySelector(`label[for="${element.getAttribute('id')}"]`).textContent;
        if (values.indexOf(v) || values.indexOf(l)) {
            element.setAttribute('checked', 'checked');
        }
        */
    }
//    static isSaveTarget(element) { return element.checked; }
    static isSaveTarget(element) { return true; }
}
