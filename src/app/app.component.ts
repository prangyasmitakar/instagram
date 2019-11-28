import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'insta';


ngOnInit() {
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBX5_-mDOp7g6rj0mwtWHwQANJewJmdCXI",
  authDomain: "fullstack-insta-app.firebaseapp.com",
  databaseURL: "https://fullstack-insta-app.firebaseio.com",
  projectId: "fullstack-insta-app",
  storageBucket: "fullstack-insta-app.appspot.com",
  messagingSenderId: "603135304364",
  appId: "1:603135304364:web:94f6a8af74af89f249f509"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
}

}
