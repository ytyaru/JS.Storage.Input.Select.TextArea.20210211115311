class InputStore extends Store {
    constructor() { super('input'); }
    getElements() { return document.querySelectorAll(`input:not([type]),input[type="text"],input[type="tel"],input[type="url"],input[type="email"],input[type="password"],input[type="search"],input[type="number"],input[type="range"],input[type="color"],input[type="datetime"],input[type="datetime-local"],input[type="date"],input[type="time"],input[type="month"],input[type="week"],input[type="hidden"]`); }
}
