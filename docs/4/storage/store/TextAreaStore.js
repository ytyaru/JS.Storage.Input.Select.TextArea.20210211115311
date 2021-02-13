class TextAreaStore {
    static getElements() { return document.querySelectorAll(`textarea`); }
    static getKey(element) {
        return element.getAttribute('id') || TextAreaStore.#createKey(element);
    }
    static #createKey(target) {
        for (const [index, element] of TextAreaStore.getElements().entries()) {
            if (target === element) { return `${target.tagName.toLowerCase()}-${index}`; }
        }
    }
    static getValue(element) {
        return element.value;
    }
    static setValue(element, value) {
        element.value = value;
    }
    static isSaveTarget(element) { return true; }
}
