import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  searchResults: any[] | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchTerm = params['term'];
      this.search(searchTerm);
    });
  }

  search(searchTerm: string): void {
    this.apiService.search(searchTerm).subscribe(results => {
      this.searchResults = results;
    });
  }
}
