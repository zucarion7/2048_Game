class Casilla{
    #valor
    #posicion
    constructor(posicion){
        this.#valor="";
        this.#posicion=posicion
    }

    set valor(value){
        this.#valor=value;
    }

    get valor(){
        return this.#valor
    }

    get posicion(){
        return this.#posicion
    }
}

module.exports=Casilla;