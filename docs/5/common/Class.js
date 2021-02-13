class Class {
    static get(className){
        return Function(`return (${className})`)();
    }
}
