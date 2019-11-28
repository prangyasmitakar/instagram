import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { MyfileService } from '../services/myfile.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastr:ToastrService ,
    private myfile:MyfileService,
    private userservice:UserService,
    private router:Router) { }
  ngOnInit() {}

  submit(form: NgForm){
    let email=form.value.email;
    let password=form.value.password;
      
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(userData => {
    if(userData.user.emailVerified){
      this.myfile
      .getDataFromDatabase(userData.user.uid)
      .then(userDatafromDatabase => {
        this.userservice.set(userDatafromDatabase);
const message=`${email} successfully verified`;
    //  this.toastr.success(message);
    //  this.router.navigate(["/addimages"]);
      })
      .catch(err =>console.log(err));
    }else{
     
        const message=`${email} not yet verified check youe email address`;
        this.toastr.error(message);
        firebase.auth().signOut();
    }
      })
      .catch(err =>{
        this.toastr.error(err.message);

    
      });
  

}
}
