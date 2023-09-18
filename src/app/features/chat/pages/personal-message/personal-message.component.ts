import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageResponseModel } from "../../../../core/models/chat/Message-response.model";
import { TokenService } from "../../../../core/services/token.service";
import { ClientChatHubService } from "../../../../core/signal-r/client-chat-hub.service";
import { MessageFormModel } from "../../../../core/models/chat/Message-form.model";
import { ChatService } from "../../../../core/services/chat.service";
import { ApiResponseModel } from "../../../../core/models/Api-response.model";
import { ChatMediatorService } from "../../../../core/services/chat-mediator.service";

@Component({
  selector: 'app-personal-message',
  templateUrl: './personal-message.component.html',
  styleUrls: ['./personal-message.component.scss']
})
export class PersonalMessageComponent implements OnInit, AfterViewChecked {
  @ViewChild("msgContainer")
  container!: ElementRef;
  fromId!: number;
  toId!: number;
  messages!: MessageResponseModel[];

  constructor(
    private _tokenService: TokenService,
    private _chatService: ChatService,
    private _chatMediatorService: ChatMediatorService,
    private _clientChatHubService: ClientChatHubService
  ) {}

  ngAfterViewChecked() {
    this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
  }

  ngOnInit(): void {
    this.fromId = this._tokenService.extractUserFromToken()!.Id;

    this._chatMediatorService.$subject.subscribe((data: number | null) => {
      if (data !== null && data !== 0) {
        this.toId = data;
        this.getConversation(data)
      }
    })

    this._clientChatHubService.startConnection("chat")
      .then(() => {
        this._clientChatHubService.hubConnection.on("receiveMessage", (message: string): void => {
          this.convertAndPushNewMessage(message);
        })
      }).catch((err) => console.error(err));
  }

  getConversation = (targetUser: number): void => {
    this._chatService.getMessages(targetUser).subscribe({
      next: (response: ApiResponseModel<MessageResponseModel[]>) => {
        this.messages = response.data.reverse();
      }
    });
  }

  onMessageSend = async ($event: MessageFormModel): Promise<void> => {
    await this._clientChatHubService.hubConnection.invoke("sendMessage", JSON.stringify($event));
  }

  trackNewMessage(index: number, item: MessageResponseModel): number {
    return item.id;
  }

  convertAndPushNewMessage = (message: string): void => {
    const parsed = JSON.parse(message);

    this.messages.push({
      id: parsed.Id,
      from: {
        id: parsed.From.Id,
        firstName: parsed.From.FirstName,
        lastName: parsed.From.LastName,
        profilePicture: parsed.From.ProfilePicture
      },
      to: {
        id: parsed.To.Id,
        firstName: parsed.To.FirstName,
        lastName: parsed.To.LastName,
        profilePicture: parsed.To.ProfilePicture
      },
      content: parsed.Content,
      createdAt: parsed.CreatedAt
    });
  }
}
