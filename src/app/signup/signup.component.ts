import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private toastr:ToastrService,
    private router:Router) { }
    submit(form: NgForm){
  let email=form.value.email;
  let username=form.value.username;
  let fullname=form.value.fullname;
  let password=form.value.password;
    
  firebase
  .auth()
  .createUserWithEmailAndPassword(email,password)
  .then(userData => {
    console.log(userData);
    userData.user.sendEmailVerification();
    const message=`Notification email has been send to ${email} address please verify email`;
    this.toastr.success(message);

    //Connecting  firebase database
    firebase.database().ref("/user"+userData.user.uid)
    .set({
      uid:userData.user.uid,
      email,
      password,
      fullname,
      username,
      registrationDate:new Date().toString()

    });
    this.router.navigate(["/login"]);
  })
  .catch(err =>{
    this.toastr.error(err.message);
    console.log(err);
});

}


  ngOnInit() {
   

}
}
