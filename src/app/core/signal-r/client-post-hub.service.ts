import { Injectable } from '@angular/core';
import { SignalRService } from "./signal-r.service";

@Injectable({
  providedIn: 'root'
})
export class ClientPostHubService extends SignalRService {

  constructor() {
    super();
  }
}
