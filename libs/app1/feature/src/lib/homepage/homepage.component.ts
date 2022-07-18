import { Component, OnInit } from '@angular/core';
import { CatStatusService } from '@monorepo-example/shared/data-access-cat-status';
import { Observable } from 'rxjs';

@Component({
  selector: 'monorepo-example-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  statusImg: string | undefined;

  constructor(private readonly catStatusService: CatStatusService) {}

  ngOnInit(): void {
    this.getCatStatusPicture(404).subscribe((img) => {
      this.statusImg = img.url;
    });
  }

  getCatStatusPicture(id: number): Observable<any> {
    return this.catStatusService.getCatStatusPicture(1);
  }
}
