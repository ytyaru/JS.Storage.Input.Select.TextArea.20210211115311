class StorageFacotry {
    static IDs = ['Once', 'Every'];
    static getIds() { return StorageFacotry.IDs; }
    static get(id='Once') {
        const cls = Class.get(`${id}Storage`);
//        const cls = StorageFacotry.#getClass(id);
        console.log('StorageFacotry.get():', cls.name);
        return new cls();
    }
    static #getClass(id){ return Function(`return (${id}Storage)`)();}
}
