export class voiture{

    
    
    constructor(private _marque?:string, private _coleur?:string){
        
    }


    get Marque(){
        return this._marque;
    }

    set Marque(value:string){
        this._marque = value;
    }

    Afficher(){

      console.log(`${this._marque} ${this._coleur}`);

    }




}


