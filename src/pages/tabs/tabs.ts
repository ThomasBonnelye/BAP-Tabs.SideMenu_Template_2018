import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { EventPage } from '../event/event';
import { PpPage } from '../pp/pp';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventPage;
  tab3Root = PpPage;
  tab4Root = AccountPage;

  constructor() {

  }
}