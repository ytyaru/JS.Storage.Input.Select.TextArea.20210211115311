class TextAreaStore {
    static getElements() { return document.querySelectorAll(`textarea`); }
    static getKeys(elements) {
        return new Set(Array.from(elements).map(radio=>radio.getAttribute('name')));
    }
    static getKey(element) {
        return element.getAttribute('name');
    }
    static getValue(element) {
        const checked = document.querySelector(`input[type="radio"][name="${element.getAttribute('name')}"]:checked`);
        if (!checked) { return undefined; }
        return checked.getAttribute('value') || document.querySelector(`label[for="${checked.getAttribute('id')}"]`).textContent;
    }
    static setValue(element, value) {
        const selected = element.querySelector(`input[type="radio"][name="${element.getAttribute('name')}"][value="${value}"]`);
        if (selected) { selected.setAttribute('selected', 'selected'); }
    }
}
