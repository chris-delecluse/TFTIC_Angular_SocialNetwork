import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-search-friend-input',
  templateUrl: './search-friend-input.component.html',
  styleUrls: ['./search-friend-input.component.scss']
})
export class SearchFriendInputComponent implements OnInit {
  protected readonly faSearch: IconDefinition = faSearch;

  searchForm !: FormGroup;

  @Output()
  emitSearchFormSubmit$: EventEmitter<unknown> = new EventEmitter<unknown>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this._formBuilder.group({
      searchUser: [null, []]
    });
  }

  onSubmit = () => {
    this.emitSearchFormSubmit$.emit();
  }
}
