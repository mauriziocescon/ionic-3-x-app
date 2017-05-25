import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptionsArgs } from "@angular/http";

import "rxjs/Rx";

import { AppConstantsService } from "../app-constants.service";
import { AuthService } from "./auth.service";

@Injectable()
export class ApisService {
  private http: Http;
  private auth: AuthService;
  private appConstants: AppConstantsService;

  constructor(http: Http, appConstantsService: AppConstantsService, authService: AuthService) {
    this.http = http;
    this.appConstants = appConstantsService;
    this.auth = authService;
  }

  public getPredefinedActivity(): any {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem(this.appConstants.TOKEN_ID);
      let headers = new Headers({"Authorization": "Bearer " + token});
      let options: RequestOptionsArgs = {headers: headers};
      this.http.get(this.appConstants.WS_URL + "activities/predefined", options)
        .switchMap((res) => {
          let activities = res.json();
          let keys = Object.keys(activities);
          return keys.map((key) => {
            return activities[key];
          }, []);
        })
        .subscribe(
          (data) => {
            resolve(data);
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

  public getTasks(): any {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem(this.appConstants.TOKEN_ID);
      let headers = new Headers({"Authorization": "Bearer " + token});
      let options: RequestOptionsArgs = {headers: headers};
      this.http.get(this.appConstants.WS_URL + "todo/home", options)
        .switchMap((res) => {
          let tasks = res.json();
          let keys = Object.keys(tasks);
          return keys.map((key) => {
            return tasks[key];
          }, []);
        })
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err.json());
          },
          () => console.log("Request Complete")
        );
    });
  }
}
