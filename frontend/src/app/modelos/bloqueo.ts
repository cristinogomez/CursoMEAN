

export class Bloqueo {

    constructor(_id='', cantidad=2, fecha='', medico=''){
        this._id=_id;
        this.cantidad=cantidad;
        this.fecha=fecha;
        this.medico=medico;
    }

    _id!: string;
    cantidad!: number;
    fecha!:string;
    medico!: string;

}
