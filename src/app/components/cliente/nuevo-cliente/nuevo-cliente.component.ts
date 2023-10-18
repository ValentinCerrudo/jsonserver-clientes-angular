import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cliente } from 'src/app/interface/interface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})


export class NuevoClienteComponent implements OnInit{

  formulario: FormGroup = this.formBuilder.group({
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    nombre: ['', [Validators.required]],
    dni: ['0', [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder, private ClienteService: ClienteService) { }

  ngOnInit(): void {
  }

  guardarCliente(){
   if(this.formulario.invalid) return;
      
   const cliente : cliente = {
    apellido: this.formulario.controls['apellido'].value,
    nombre: this.formulario.controls['nombre'].value,
    dni : this.formulario.controls['dni'].value
   }

   this.ClienteService.postCliente(cliente)

  }

  validar(field: string, error: string){
    return this.formulario.controls[field].getError(error)
    &&
    this.formulario.controls[field].touched
  }

  

}

