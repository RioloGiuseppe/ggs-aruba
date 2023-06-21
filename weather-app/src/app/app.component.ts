import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter, switchMap, map } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private updates: SwUpdate, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.updates.versionUpdates
      .pipe(
        filter((event): event is VersionReadyEvent => {
          console.log(event);
          const result = event.type === 'VERSION_READY';
          return result;
        }),
        switchMap(() =>
          this.snackBar.open('New version available', 'Reload')
            .afterDismissed()),
        filter(result => result.dismissedByAction),
        map(() => this.updates.activateUpdate().then(() => document.location.reload()))
      ).subscribe();
  }

  title = 'weather-app';
}
