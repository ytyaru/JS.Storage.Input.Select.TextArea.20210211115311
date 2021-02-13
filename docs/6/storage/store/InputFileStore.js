class InputFileStore extends Store {
    constructor() { super('input'); }
    static getElements() { return document.querySelectorAll(`input[type="file"]`); }
}
