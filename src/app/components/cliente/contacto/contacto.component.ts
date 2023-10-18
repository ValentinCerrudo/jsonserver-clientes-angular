import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contacto } from 'src/app/interface/interface';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  

  formulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    telefono: ['', [Validators.required]],
    mail: ['', [Validators.required]],
    id:0
  })

  constructor(private formBuilder: FormBuilder){}
    ngOnInit(): void{

    }

    guardarContacto(){

      if(this.formulario.invalid) return;

      const contacto : contacto = {
        nombre: this.formulario.controls['nombre'].value,
        telefono: this.formulario.controls['telefono'].value,
        mail: this.formulario.controls['mail'].value,
        id: this.formulario.controls['id'].value
      }

      console.log(contacto);
      
    }
  

}
