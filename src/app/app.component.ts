import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchForm: FormGroup;
  searchResults: any[] = [];
  searched = false;
  title: String;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.searchForm = this.formBuilder.group({
      term: ['', Validators.minLength(2)]
    });
    this.title = "jokes";
  }

  onSubmit() {
    const term = this.searchForm.controls['term'].value;
    this.apiService.search(term).subscribe(results => {
      this.searchResults = results;
      this.searched = true;
    });
  }
}
