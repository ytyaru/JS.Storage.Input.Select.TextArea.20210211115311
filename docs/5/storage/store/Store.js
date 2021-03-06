class Store { // 抽象クラスにしたい
    #elementName
    constructor(elementName) {
        this.#elementName = elementName;
    }
    get ElementName() { return this.#elementName; }
    getElements() { return document.querySelectorAll(`${this.ElementName}`); }
    getKey(element) {
        const formKey = this.#getFormKey(element);
        const elementKey = this.getElementKey(element);
        return (formKey) ? `${formKey}-${elementKey}` : `${elementKey}`;
    }
    // protectedにしたい
    getElementKey(element) {
        return element.getAttribute('id') || this.createKey(element);
    }
    // protectedにしたい
    createKey(target) {
        for (const [index, element] of this.getElements().entries()) {
            if (target === element) { return `${target.tagName.toLowerCase()}-${index}`; }
        }
    }
    #getFormKey(element) {
        const formId = element.getAttribute('form');
        if (formId) { return formId; }
        const parentForm = this.#searchParentForm(element);
        if (parentForm) { return parentForm.getAttribute('id') || this.getElementKey(parentForm); }
    }
    #searchParentForm(element, parent=null) {
        if (parent === null) { parent = element.parentElement; }
        if ('form' === parent.tagName.toLowerCase()) { return parent; }
        if (parent === document.body) { return undefined; }
        this.#searchParentForm(element, parent.parentElement)
    }
    // interface にしたい。getValue, setValue
    getValue(element) { return element.value; }
    setValue(element, value) { element.value = value; }
    isSaveTarget(element) { return true; }
}
