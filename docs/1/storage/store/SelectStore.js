class SelectStore {
    static getElements() { return document.querySelectorAll(`select`); }
    static getKey(element) {
        return element.getAttribute('id');
    }
    static getValue(element) {
        const selected = element.querySelector(`option:selected`);
        return selected.getAttribute('value') || selected.textContent;
    }
    static setValue(element, value) {
        const selected = element.querySelector(`option[value="${value}"]`);
        if (selected) { selected.setAttribute('selected', 'selected'); }
        
    }
}
