import {Component, OnInit} from '@angular/core';
import {LoaderNotifyService} from './loader-notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'marvel-universe';
  showLoader = true;
  constructor(private requestStatus: LoaderNotifyService) {}

  ngOnInit() {
    this.requestStatus.getRequestStatus().subscribe(status => {
      this.showLoader = !status;
      // console.log('loader showed', !status);
    });
  }
}
