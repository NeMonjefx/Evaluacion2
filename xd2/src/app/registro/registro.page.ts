import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

// importa el servicio
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private crud: CrudService,
              private toastController: ToastController,
              private alertController: AlertController,
              ) { }
  nombre1 = "";
  apellidos1 = "";
  email1="";
  direccion1="";
  suite1="";
  userName1="";
  fono1 = "";
  rut1 = "";
  listado = [];
  ngOnInit() {
    /*
    this.crud.set("Patrick Star");

    const valor = this.crud.get("1");
    valor.then(x => console.log(x));
    */
  }

  async registro(txtRut: HTMLInputElement, txtNombre: HTMLInputElement, telFono: HTMLInputElement, txtApellidos: HTMLInputElement, txtEmail: HTMLInputElement, txtDireccion: HTMLInputElement, txtUserName: HTMLInputElement, txtSuite: HTMLInputElement)
  {
    // Ejercicio: validar que los input tengan datos
    if(txtRut.value.trim().length == 0)
    {
      const toast = await this.toastController.create({
        message: 'Debe especificar el rut' ,
        duration: 3000,
        color: "warning",
        position: "bottom"
      });
      toast.present();
    }
    else if(txtNombre.value.trim().length == 0)
    {
      const toast = await this.toastController.create({
        message: 'Debe especificar el Nombre' ,
        duration: 3000,
        color: "warning",
        position: "bottom"
      });
      toast.present();
    }
    else if(txtUserName.value.trim().length == 0)
    {
      const toast = await this.toastController.create({
        message: 'Debe especificar el Nombre de Usuario' ,
        duration: 3000,
        color: "warning",
        position: "bottom"
      });
      toast.present();
    }
    else if(txtApellidos.value.trim().length == 0)
    {
      const toast = await this.toastController.create({
        message: 'Debe especificar el/los Apellidos' ,
        duration: 3000,
        color: "warning",
        position: "bottom"
      });
      toast.present();
    }
    else if(telFono.value.trim().length == 0)
    {
      const toast = await this.toastController.create({
        message: 'Debe especificar el Teléfono' ,
        duration: 3000,
        color: "warning",
        position: "bottom"
      });
      toast.present();
    }
    else if(txtEmail.value.trim().length == 0)
    {
      const toast = await this.toastController.create({
        message: 'Debe especificar el Correo Eléctronico' ,
        duration: 3000,
        color: "warning",
        position: "bottom"
      });
      toast.present();
    }
    else if(txtDireccion.value.trim().length == 0)
    {
      const toast = await this.toastController.create({
        message: 'Debe especificar la Direccion' ,
        duration: 3000,
        color: "warning",
        position: "bottom"
      });
      toast.present();
    }
    else if(txtSuite.value.trim().length == 0)
    {
      const toast = await this.toastController.create({
        message: 'Debe especificar la Direccion de Suite' ,
        duration: 3000,
        color: "warning",
        position: "bottom"
      });
      toast.present();
    }
    else
    {
      const datos = [{"rut" : txtRut.value, "nombre": txtNombre.value, "user": txtUserName.value, "apellidos": txtApellidos.value, "telefono": telFono.value, "email": txtEmail.value, "direccion": txtDireccion.value, "suite": txtSuite.value}];

      const valor = await this.crud.get(txtRut.value);
  
      if(valor != null && valor.length > 0) // permite saber que existe el rut
      {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Registro existente',
          message: '<strong>¿Está seguro de cambiar los datos?</strong>!!!',
          buttons: [
            {
              text: 'No',
              role: 'cancel'
            }, 
            {
              text: 'Si',
              handler: () => {
                this.crud.set(datos);
                txtRut.value= "";
                txtNombre.value="";
                txtUserName.value="";
                txtApellidos.value="";
                telFono.value="";
                txtEmail.value="";
                txtDireccion.value="";
                txtSuite.value="";
                this.nombre1 = "";
                this.fono1 = "";
                this.userName1="";
                this.apellidos1="";
                this.email1 = "";
                this.direccion1="";
                this.suite1="";
                this.listado = [];
              }
            }
          ]
        });
    
        await alert.present();
      }
      else
      {
        this.crud.set(datos);
        txtRut.value= "";
        txtNombre.value="";
        txtUserName.value="";
        txtApellidos.value="";
        telFono.value="";
        txtEmail.value="";
        txtDireccion.value="";
        txtSuite.value="";
        this.nombre1 = "";
        this.fono1 = "";
        this.userName1="";
        this.apellidos1="";
        this.email1 = "";
        this.direccion1="";
        this.suite1="";
        this.listado = [];
  
        const toast = await this.toastController.create({
          message: 'Los datos fueron guardados' ,
          duration: 3000,
          color: "success",
          position: "bottom"
        });
        toast.present(); 
      }

    }
  }
  async buscar(txtRut: HTMLInputElement)
  {
    if(txtRut.value.trim().length == 0)
    {
      const toast = await this.toastController.create({
        message: 'No especifico el rut' ,
        duration: 3000,
        color: "warning",
        position: "bottom"
      });
      this.nombre1 = "";
      toast.present(); 
    }
    else
    {
      
      const valor = await this.crud.get(txtRut.value);
      if (valor == null)
      {
        const toast = await this.toastController.create({
          message: 'El rut especificado no existe' ,
          duration: 3000,
          color: "warning",
          position: "bottom"
        });
        this.nombre1 = "";
        toast.present(); 
      }
      else
      {
        this.rut1 = txtRut.value;
        this.nombre1 = valor[0].txtNombre;
        this.userName1=valor[0].txtUserName;
        this.apellidos1=valor[0].txtApellidos;
        this.fono1 = valor[0].telFono;
        this.email1 = valor[0].txtEmail;
        this.direccion1=valor[0].txtDireccion;
        this.suite1=valor[0].txtSuite;
        txtRut.value = "";
        this.listado = []; 
      }
    }
  }

  listar()
  {
    this.listado = this.crud.listar();
    this.nombre1 = ""; // limpia la vista si estan los datos puestos
    this.userName1="";
    this.apellidos1="";
    this.email1 = "";
    this.fono1 = "";  
    this.direccion1="";
    this.suite1="";  
  }
  async eliminar()
  {
    if(this.rut1 != "")
    {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Registro para eliminar',
        message: '<strong>¿Está seguro de eliminar los datos?</strong>',
        buttons: [
          {
            text: 'No',
            role: 'cancel'
          }, 
          {
            text: 'Si',
            handler: async () => {
              this.crud.eliminar(this.rut1);
              this.rut1 = "";
              this.nombre1 = ""; // limpia la vista si estan los datos puestos
              this.fono1 = "";  
              const toast = await this.toastController.create({
                message: 'El dato fue eliminado',
                duration: 3000,
                color: "warning",
                position: "bottom"
              });
              toast.present();  
            }
          }
        ]
      });  
      await alert.present();      
    }
  }
  limpiar(txtRut: HTMLInputElement, txtNombre: HTMLInputElement, telFono: HTMLInputElement, txtApellidos: HTMLInputElement, txtEmail: HTMLInputElement, txtDireccion: HTMLInputElement, txtUserName: HTMLInputElement, txtSuite: HTMLInputElement)
  {
    //Ejercicios:
    // Limpiar los txt tambien
    txtRut.value= "";
    txtNombre.value="";
    txtUserName.value="";
    txtApellidos.value="";
    telFono.value="";
    txtEmail.value="";
    txtDireccion.value="";
    txtSuite.value="";
    this.nombre1 = "";
    this.fono1 = "";
    this.userName1="";
    this.apellidos1="";
    this.email1 = "";
    this.direccion1="";
    this.suite1="";
    this.listado = [];
  }
}
