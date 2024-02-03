import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ingredientsAllowed } from './data';
import { Ingredient } from './models/ingredient';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe, PipesModule } from './filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, PipesModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ingredienList: Ingredient[] = [];
  searchForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.ingredienList = ingredientsAllowed;
    this.searchForm = this.fb.group({
      searchText: '',
    });
  }
}
