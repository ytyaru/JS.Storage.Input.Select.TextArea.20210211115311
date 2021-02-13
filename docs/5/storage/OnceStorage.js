class OnceStorage extends Storage { // load時に取得。beforeunload時に保存。
    constructor() {
        super();
        window.addEventListener('load', (event)=>{this.load();});
        window.addEventListener('beforeunload', (event)=>{this.save();});
        this.load();
    }
}
