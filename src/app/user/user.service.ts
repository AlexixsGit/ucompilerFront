import { RestResponse } from './../model/restResponse.model';
import { UserSaveRequest } from './../request/userSaveRequest';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { QueryResult } from './../model/queryResult.model';

@Injectable()
export class UserService {
  public errorMessage: Array<String>;
  private userRestUrl = "http://localhost:8080/";

  constructor(private http: Http) { }

  public saveOrUpdate(userSaveRequest: UserSaveRequest): Observable<RestResponse> {
    let jsonUserSaveRequest = JSON.stringify(userSaveRequest);
    return this.http.post(this.userRestUrl + "saveOrUpdateUser", jsonUserSaveRequest)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public loadCaptcha(): Observable<String> {
    return this.http.get(this.userRestUrl + "getCaptcha").map((res: Response) => res.text());
  }

  //It validates required fields
  public validate(user: User, confirmPassword: string, captcha: String, userCaptcha: String): boolean {
    let isValid = true;
    this.errorMessage = new Array<String>();

    if (!user.userName || user.userName.length == 0) {
      this.errorMessage.push("Ingre un usuario");
      isValid = false;
    }

    if (!user.email || user.email.length == 0) {
      this.errorMessage.push("Ingrese un correo");
      isValid = false;
    }

    if (!user.userPassword || user.userPassword.length == 0) {
      this.errorMessage.push("Ingrese una contraseña");
      isValid = false;
    }

    if (!confirmPassword || confirmPassword.length == 0) {
      this.errorMessage.push("Repita la contraseña");
      isValid = false;
    }

    if (captcha !== userCaptcha) {
      this.errorMessage.push("El captcha no coincide con la imagen");      
      isValid = false;
    }

    return isValid;
  }

  public getErrorMessage(): Array<String> {
    return this.errorMessage;
  }
}
