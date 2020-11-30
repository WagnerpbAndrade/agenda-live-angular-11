import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Live } from 'src/app/shared/models/live.model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesPrevios!: Live[];
  livesNext!: Live[];

  constructor(
    public liveService: LiveService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives() {
    this.liveService.getLivesWithflag('previos').subscribe(
      data => {
        this.livesPrevios = data.content;
        console.log(this.livesPrevios);
        this.livesPrevios.forEach(live => {
          live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
        });
      });

      this.liveService.getLivesWithflag('next').subscribe(
        data => {
          this.livesNext = data.content;
          console.log(this.livesNext);
          this.livesNext.forEach(live => {
            live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
          });
        });
  }
}
