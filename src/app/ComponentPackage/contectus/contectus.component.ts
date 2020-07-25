import { Component, OnInit } from '@angular/core';
import { CommonMethods } from 'src/app/UtillPackage/common-method';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactusServiceService } from 'src/app/services/contactus-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-contectus',
  templateUrl: './contectus.component.html',
  styleUrls: ['./contectus.component.css']
})
export class ContectusComponent implements OnInit {
  Tag="ContectusComponent";
  message: string;
  email: string;
  lastName: string;
  firstName: string;
  errorMessage: string;
  
  constructor(public matsnackBar: MatSnackBar,public contactService:ContactusServiceService,
    public ngxspinner:NgxSpinnerService) {
    this.message = "";
    this.email = "";
    this.lastName = "";
    this.firstName = "";
    this.errorMessage = "";
  }

  ngOnInit(): void {
  }

  validation() {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.firstName.trim().length == 0) {
      CommonMethods.showErrorDialog(this.matsnackBar, "Enter first name")
      return false
    } else if (this.lastName.trim().length == 0) {
      CommonMethods.showErrorDialog(this.matsnackBar, "Enter last name")
      return false
    } else if (this.email.trim().length == 0) {
      CommonMethods.showErrorDialog(this.matsnackBar, "Enter email")
      return false
    } else if (!EMAIL_REGEXP.test(this.email.trim())) {
      CommonMethods.showErrorDialog(this.matsnackBar, "Email is invalid");
      return false;
    } else if (this.message.trim().length == 0) {
      CommonMethods.showErrorDialog(this.matsnackBar, "Enter message")
      return false
    } else {
      return true
    }
  }

  sendMessage(){
    if(this.validation()){
      this.ngxspinner.show();
        let data:any={};
        data.firstName=this.firstName.trim();
        data.lastName=this.lastName.trim();
        data.email=this.email.trim();
        data.message=this.message.trim();
        this.contactService.sendMessageDataBase(data).subscribe(
          (response) => {                           //Next callback
            if(response.status == true){
              this.ngxspinner.hide();
                CommonMethods.opensweetalert(response.message)
              this.firstName="";
                this.lastName="";
               this.email="";
               this.message="";
            }else{
              this.ngxspinner.hide();
              CommonMethods.opensweetalertError(response.message)
            }
          },
          (error) => {    
            let errorMessage = '';                          //Error callback
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${error.error.message}`;
          } else {
              // server-side error
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          this.ngxspinner.hide();
          CommonMethods.opensweetalertError(errorMessage);
          }
        );
    }
  }


}
