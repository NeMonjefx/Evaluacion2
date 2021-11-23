import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  datos : any;
  constructor(private activatedRouter : ActivatedRoute,
              private api : ApirestService) { }

  ngOnInit() {    
    this.leer();
  }

  async leer()
  {    
    let id ="";
    this.activatedRouter.paramMap.subscribe(async param => {
      id = param.get('id');
    })
    
    await this.api.getUser(id);
    this.datos =  this.api.datos;
    console.log(this.datos);
  }
}
