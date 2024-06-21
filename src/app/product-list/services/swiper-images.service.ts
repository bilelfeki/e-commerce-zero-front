import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, switchMap, takeUntil, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwiperImagesService {
  constructor(private http: HttpClient) {}
  urlParentFolder ='https://github.com/bilelfeki/multi-website-pictures/blob/master/multi-website-picture/';
  folderName = 'Parapharmacie';
  SwiperFolderUrl = '/Couverture/';
  raw = '?raw=true';
  folderUrl = `${this.urlParentFolder}${this.folderName}${this.SwiperFolderUrl}`;

  getSwiperImages() {
    return this.http.get<string[]>(`parser?url=${this.folderUrl}`)
    .pipe(
      switchMap((data) => of(...data)),
      map((data) => `${this.folderUrl}${data}${this.raw}`),
      toArray(),
    );
  }
}
