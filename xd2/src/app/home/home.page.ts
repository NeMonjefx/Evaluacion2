import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listado = [];
  constructor(public toastController: ToastController,
              public alertController: AlertController) {}

  ngOnInit()
  {
    /*
    console.log("Holaaaa");
    localStorage.setItem("1", "Bob Esponja");
    const nombre = localStorage.getItem("1");
    console.log(nombre);
    */

  }
  async onClick(nombre: HTMLInputElement)
  {
    let nom = nombre.value.trim();

    if(nom.length >= 3)
    {
      // validar que no se repitan los nombre almacenados: if /for
      for(let id = 1; id <= localStorage.length; id++)
      {
        if(nom == localStorage.getItem(id.toString()))
        {
          const toast = await this.toastController.create({
            message: 'El nombre ya está registrado.',
            duration: 2000,
            color: "danger",
            position: "middle"
          });
          toast.present();
          return;
        }
      }  

      const id = localStorage.length + 1    
      localStorage.setItem(id.toString() , nombre.value);
      //console.log("Datos guardados " + nombre.value);
      nombre.value="";
      
      const toast = await this.toastController.create({
        message: 'El nombre fue registrado.',
        duration: 2000,
        color: "success",
        position: "middle"
      });
      toast.present();

    }
    else
    {
      const toast = await this.toastController.create({
        message: 'Falta especificar el nombre.',
        duration: 2500
      });
      toast.present();
    }
  }
  async listar()
  {
    if(localStorage.length == 0)
    {
      const toast = await this.toastController.create({
        message: 'No hay datos almacenados',
        duration: 2000,
        color: "danger",
        position: "middle"
      });
      toast.present();
      return;
    }

    this.listado = [];
    // permite recorrer el localStorage
    for(let id = 1; id <= localStorage.length; id++)
    {
      // push, permite agregar elementos al arr
      this.listado.push(localStorage.getItem(id.toString()));
    }  

  }
  // ejercicios: Permitir al usuario limpiar el 
  // localStorage. Solicitar la confirmación de esta
  // acción. 
  // Deben usar el icono "basurero" y debe aparecer
  // abajo en centro de la pantalla
  async limpiar()
  {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Limpiar LocalStorage',
      message: '<strong>¿Está seguro de limpiar?</strong>!!!',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        }, 
        {
          text: 'Si',
          handler: () => {
            this.listado = [];
            localStorage.clear();
          }
        }
      ]
    });

    await alert.present();
  }
}
