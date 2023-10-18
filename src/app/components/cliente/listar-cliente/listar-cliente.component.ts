import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

interface cliente{
  apellido: string,
  nombre: string,
  dni: number,
  id: number
}

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit{
  lista:cliente[] = []

  constructor(private clienteService: ClienteService){
    this.mostrarClientes()
  }

  ngOnInit(): void {
    
  }

  async mostrarClientes(){
    this.lista = await this.clienteService.getClientes()
    console.log(this.lista);
    
  }
}
