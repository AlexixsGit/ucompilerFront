import { UserSaveRequest } from './../request/userSaveRequest';
import { UserService } from './user.service';
import { User } from './../model/user';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var jQuery;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  public user: User;
  public isRunning: boolean;
  public isValid: boolean = true;
  public message: Array<String>;
  public confirmPassword: string;
  public isEditing: boolean;
  public captcha: String;
  public userCaptcha: String;

  @ViewChild("messageModal") mensajemodal: ElementRef;

  constructor(public userService: UserService) {
    this.user = new User();
    this.isEditing = false;
  }

  ngOnInit() {
    this.loadCaptcha();
  }

  //Function to insert or to update an user
  public saveOrUpdate(): void {
    this.message = new Array<String>();
    this.isValid = this.userService.validate(this.user, this.confirmPassword, this.captcha, this.userCaptcha);

    if (this.isValid) {
      this.isRunning = true;

      let userSaveRequest = new UserSaveRequest();
      userSaveRequest.user = this.user;
      userSaveRequest.confirmPassword = this.confirmPassword;

      this.userService.saveOrUpdate(userSaveRequest).subscribe(data => {
        this.isRunning = false;
        if (data.responseCode == 200) {
          jQuery(this.mensajemodal.nativeElement).modal('show');
        } else {
          this.isValid = false;
        }
        this.message.push(data.message);
      });

    } else {
      this.message = this.userService.getErrorMessage();
    }
    this.loadCaptcha();
    this.userCaptcha = "";
  }

  //Refresh the captcha
  public recaptcha(): void {
    this.loadCaptcha();
  }
  //Close modal when is open
  public closeSuccesfulModal(): void {
    this.clean();
  }

  private loadCaptcha(): void {
    this.userService.loadCaptcha().subscribe(res => {
      this.captcha = res;
    })
  }

  //Clean objects
  private clean(): void {
    this.user = new User();
    this.confirmPassword = "";
    this.isValid = true;
    this.message = Array<String>();
  }
}
