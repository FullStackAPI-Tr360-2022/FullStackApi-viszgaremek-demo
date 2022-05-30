import { Component, OnInit } from '@angular/core';
import { ConfigService, IMenuItem } from 'src/app/service/config.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebar: IMenuItem[] = this.config.sidebarMenu;

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
