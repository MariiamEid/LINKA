import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { response } from 'express';
import { Route, Router } from '@angular/router';
import { error } from 'console';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  loginForm: FormGroup = new FormGroup({
    "userName":new FormControl(null,[Validators.required]),
    "password": new FormControl(null,[Validators.required])
  })
//   loginobj:Loginform;

//   constructor(private http:HttpClient,private router:Router){
//     this.loginobj=new Loginform();
//   }
//   onLogin(){
//     debugger;
//     this.http.post('https://localhost:44322/api/Auth/Login',this.loginobj).subscribe((res:any)=>{
//       if(res.result){
//         alert("login success")
//         this.router.navigateByUrl('/home-youth')
//       }
//       else{
//         alert(res.message)
//       }
//     })
//   }
// }
//   export class Loginform {
//     userName:string;
//     password:string;
//     constructor() {
//       this.userName='';
//       this.password='';

//     }
//   }






  // onSubmit(userName: string , password: string):void{
  //   this._AuthService.login(userName,password).subscribe(
  //     response =>{
  //       console.log('Login Successful').setItem("token","true");
  //       this._Router.navigateByUrl('about')

  //     },
  //     error =>{
  //       console.error('Login Error',error);
  //     }
  //   );
  // }

  login(){
    console.log(this.loginForm.value);
    try{
      this._AuthService.login(this.loginForm.value).subscribe({
        next:(response)=>{
          if(response.message=="success"){
            this._Router.navigate(['/home-investor'])
          }
        },
        error:(err)=>{
              // console.log(err.error.errors.msg);
        }
      })
    }catch(error){
      console.log(error);
    }
  }
}
