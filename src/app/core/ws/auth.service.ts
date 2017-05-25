import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import "rxjs/Rx";

import { AppConstantsService } from "../app-constants.service";

@Injectable()
export class AuthService {
  private http: Http;
  private appConstants: AppConstantsService;

  constructor(http: Http, appConstantsService: AppConstantsService) {
    this.http = http;
    this.appConstants = appConstantsService;
  }

  public login(username: string, password: string): any {
    let user = {
      username: username,
      password: password
    };
    return new Promise((resolve, reject) => {
      this.http.post(this.appConstants.WS_URL + "getToken", user)
        .switchMap((res: Response) => {
          return res.json().token;
        })
        .subscribe(
          (token) => {
            localStorage.setItem(this.appConstants.TOKEN_ID, JSON.stringify(token));
            resolve();
          },
          (err) => {
            reject(err.json());
          },
          () => {
            console.log("Request Complete");
          }
        );
    });
  }

  public logout(): void {
    localStorage.removeItem(this.appConstants.TOKEN_ID);
  }
}
