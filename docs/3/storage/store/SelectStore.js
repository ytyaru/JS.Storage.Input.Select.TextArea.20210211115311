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
        console.log('get', values);
        return JSON.stringify(values);
//        const selected = element.querySelector(`option:selected`);
//        return selected.getAttribute('value') || selected.textContent;
    }
    static setValue(element, value) {
        const values = JSON.parse(value);
        console.log(values);
        if (!values) { return; }
        SelectStore.#clearSelected(element);
        for (let option of element.querySelectorAll(`option`)) {
            console.log(option);
            if (-1 < values.indexOf(option.value)) { option.selected = true; console.log('  selected', option.value, values); }
        }
        /*
//        const savedOptions = element.querySelectorAll(`option:checked`);
        const savedOptions = Array.from(element.options)
                            .filter(option=>values.indexOf(option.value) || values.indexOf(option.textContent))
        console.log(element, element.options, values, savedOptions);
        for (let option of savedOptions) {
            option.selected = true;
        }
                            */
        console.log(element, element.options, values);
        /*
        for (let option of element.options) {
            for (let value of values) {
                if (value === option.getAttribute('value')) {
                    option.selected = true;
                }
            }
        }

        for (let value of values) {
            for (let select of SelectStore.getElements()) {
                if (element.getKey() !== select.getKey()) { continue; }
                element.selectedOptions
            }

            const checks = Array.from(SelectStore.getElements())
                                .filter(element=>value === element.getAttribute('value'));
            for (let element of checks) {
                element.checked = true;
            }
        }



        const selected = element.querySelector(`option[value="${value}"]`);
        if (selected) { selected.setAttribute('selected', 'selected'); }
        */
    }
    static #clearSelected(element) {
        for (let option of element.options) {
            option.selected = false;
        }
        /*
        for (let select of SelectStore.getElements()) {
            if (target.getAttribute('value') === target.getAttribute('value')) {
                if (element.checked) { element.checked = false; }
            }
        }
        */
    }
    static isSaveTarget(element) { return true; }
}
