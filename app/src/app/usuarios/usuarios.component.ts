import { Component, OnInit } from '@angular/core';
import { ConectionsService } from '../conections.service';
import { AlertsService } from 'angular-alert-module';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
users=[];
newUser={};
edit=false;
editUser={};
  constructor(private conection:ConectionsService,private alerts: AlertsService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.conection.get().subscribe((data)=>{
    this.users=data;
    console.log(this.users);
    });
  }
  createUser(){
    this.conection.post(this.newUser).subscribe((data)=>{
    this.getUser();
    console.log(data);
    });
  }
  deleteUser(id){
    this.conection.delete(id).subscribe((data)=>{
    this.alerts.setMessage('El usuario fue eliminado ','error');
    this.getUser();
    console.log(data);
    });
  }
  editUserInput(user){
    this.edit=true;
    this.editUser=user;
  }


}
