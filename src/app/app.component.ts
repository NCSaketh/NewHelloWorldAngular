import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hi Chandler';
  imgUrl;
  url;
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void{
    this.title="Welcome to Rugved Systems";
    this.imgUrl="../assets/download.jpg";
    this.url="https://www.rugvedsystems.in";
  }

  onClick($event){
    console.log("Save button is clicked", $event);
    window.open(this.url, "_blank");
  }

  onInput($event) {
    console.log("Change Event Occured!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }

  
}
