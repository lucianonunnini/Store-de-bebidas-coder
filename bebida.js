//DEFINO CONSTRUCTOR

class bebida {

    constructor(id, tipo, image) {
    
        this.id = id;
        this.tipo = tipo
        this.image = image
            
    }


    //DEVUELVE EL TIPO Y SU ID

    getTitle() {
    
        return this.tipo + "#"+ this.id
    }

    setName(newName) {
    
        this.tipo = newTipo
    }
}