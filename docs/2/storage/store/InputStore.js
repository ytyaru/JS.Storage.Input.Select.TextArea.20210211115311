class InputStore {
    static getElements() { return document.querySelectorAll(`input[type="text"],input[type="tel"],input[type="url"],input[type="email"],input[type="password"],input[type="search"],input[type="number"],input[type="range"],input[type="color"],input[type="datetime"],input[type="datetime-local"],input[type="date"],input[type="time"],input[type="month"],input[type="week"],input[type="hidden"]`); }
    static getKeys(elements) {
        return new Set(Array.from(elements).map(element=>element.getAttribute('id')));
    }
    static getKey(element) {
        console.log(element.getAttribute('id') || InputStore.#createKey(element));
        return element.getAttribute('id') || InputStore.#createKey(element);
    }
    static #createKey(target) {
        for (const [index, element] of InputStore.getElements().entries()) {
            if (target === element) { return `input-${target.getAttribute('type') || 'text'}-${index}`; }
        }
    }
    static getValue(element) {
        return element.value;
    }
    static setValue(element, value) {
        element.setAttribute('value', value);
    }
    static isSaveTarget(element) { return true; }
}
