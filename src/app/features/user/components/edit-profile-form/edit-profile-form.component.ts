import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  faCakeCandles,
  faGlobe,
  faHeart,
  faImage,
  faNeuter,
  faSave,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EditUserProfileModel } from "../../../../core/models/user/Edit-user-profile.model";

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.scss']
})
export class EditProfileFormComponent implements OnInit {
  protected readonly faImage: IconDefinition = faImage;
  protected readonly faCakeCandles: IconDefinition = faCakeCandles;
  protected readonly faNeuter: IconDefinition = faNeuter;
  protected readonly faGlobe: IconDefinition = faGlobe;
  protected readonly faHeart: IconDefinition = faHeart;
  protected readonly faSave: IconDefinition = faSave;

  form !: FormGroup;

  @Output()
  emitUpdateProfileSubmit$: EventEmitter<EditUserProfileModel> = new EventEmitter<EditUserProfileModel>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      profilePicture: [null, [Validators.minLength(5), Validators.maxLength(150)]],
      backdropImage: [null, [Validators.minLength(5), Validators.maxLength(150)]],
      gender: [null, [Validators.minLength(2), Validators.maxLength(40)]],
      birthDate: [null, []],
      country: [null, [Validators.minLength(2), Validators.maxLength(75)]],
      relationShipStatus: [null, [Validators.minLength(5), Validators.maxLength(40)]]
    });
  }

  onSubmit = (): void => {
    this.emitUpdateProfileSubmit$.emit(this.form.value);
  }
}
