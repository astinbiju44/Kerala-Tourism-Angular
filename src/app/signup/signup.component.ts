import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


email:String='';
password:String=''


submit(){
console.log(this.email,this.password)


}

}
