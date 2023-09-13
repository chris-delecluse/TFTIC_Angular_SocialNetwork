import { Injectable } from '@angular/core';
import { SignalRService } from "./signal-r.service";

@Injectable({
  providedIn: 'root'
})
export class ClientChatHubService extends SignalRService {

  constructor() {
    super()
  }
}
