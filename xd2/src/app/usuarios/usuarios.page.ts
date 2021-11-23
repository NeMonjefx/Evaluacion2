import { Component, OnInit } from '@angular/core';
import {ApirestService } from '../apirest.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  listado = []
  constructor(private api: ApirestService) { }

  ngOnInit() {
    
  }
  listar()
  {
    this.api.getUsers();
    this.listado = this.api.listado;
    //console.log(this.listado);
  }

  // ejercicio: agregar los botones para listar.
  // crear un link que permita ver el: id, name, username, email y direccion 
  // de un usuario seleccionado.
 
}
