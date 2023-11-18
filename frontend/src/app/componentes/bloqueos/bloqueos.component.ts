import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm,ReactiveFormsModule, Validators,FormsModule} from '@angular/forms';
import { Validator} from 'mongoose';
import { BloqueoService } from '../../servicios/bloqueo.service';
import{Bloqueo}from'../../modelos/bloqueo';

declare var M:any;

@Component({
  selector: 'app-bloqueos',
  templateUrl: './bloqueos.component.html',
  styleUrls: ['./bloqueos.component.css']
})
export class BloqueosComponent implements OnInit{
  
  
  constructor(public bloqueoServicio:BloqueoService){ 
  };

  pageActual:number=1

  getBloqueos(){
    this.bloqueoServicio.getBloqueos()
      .subscribe(res => {
        this.bloqueoServicio.bloqueos = res as Bloqueo[];
      })
  }
  ngOnInit() {
    this.getBloqueos();
  };


  editBloqueo(bloqueo:Bloqueo){
    this.bloqueoServicio.selectedBloqueo=bloqueo;
  };

  deleteBloqueo(_id:string){
    this.bloqueoServicio.deleteBloqueo(_id)
    .subscribe(res=>{
      M.toast({html: 'Cita bloqueada eliminada'});
      this.getBloqueos();
    })

  };

  onSubmit():void{
  } 

  addBloqueo(form:NgForm)
  {
    if(form.value._id)
    {
      this.bloqueoServicio.putBloqueo(form.value)
      .subscribe(res=>{
        console.log(res)
        M.toast({html: 'Cita bloqueada actualizada'});
        form.reset();
        this.getBloqueos();    
      })
    }
    else
    {
      this.bloqueoServicio.addBloqueo(form.value)
      .subscribe(res=>{
        M.toast({html: 'Cita bloqueada guardada'});
        form.reset();
        this.getBloqueos();
      })
    }
  }
}