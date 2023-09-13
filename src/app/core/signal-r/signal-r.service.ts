import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  constructor() { }

  hubConnection!: HubConnection;

  public startConnection(hubEndpoint: string) {
    return new Promise((resolve, reject) => {
      this.hubConnection = new HubConnectionBuilder()
        .withUrl(`${environment.hubUrl}/${hubEndpoint}`).build();

      this.hubConnection.start()
        .then(() => {
          console.log(`connection to ${hubEndpoint} established`);
          return resolve(true);
        })
        .catch((err: any) => {
          console.error("error occurred" + err);
          reject(err);
        });
    });
  }
}
