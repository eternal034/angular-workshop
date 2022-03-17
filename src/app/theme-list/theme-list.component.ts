import { Component, OnInit } from '@angular/core';
import { ITheme } from '../inferfaces';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {
  
  themeList: ITheme[] | undefined;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.loadAllThemes().subscribe(themeList => {
      this.themeList = themeList;
    });
  }

}
