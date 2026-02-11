import { Component } from '@angular/core';

@Component({
  selector: 'app-login-card',
  imports: [],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css'
})
export class LoginCardComponent {

   async checkUser(){


    console.log("start user checking");

    await this.waitTenSeconds().then(()=>{
      console.log("promise resolved then ");
    }).catch(()=>{
      console.log("catch resolved");
    })


    console.log("user checking end");

     
      
  }

  async testing(sec:number){
        console.log("Hello before promise ")
    const myPromise = new Promise<String>((resolve,reject) =>{
    const success = true;
    setTimeout(() => {
        if (success) {
            resolve("data aa gya");
            console.log("timeoutFunction")
        }else{
            reject("kuch toh gadbad hai ");
        }  
    }, sec);

    

    return sec;
});
console.log("Hello after promise ");
  }

async waitTenSeconds(): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("virat kohli");
      resolve();
    }, 10_000); // 10 seconds
  });
}



}
