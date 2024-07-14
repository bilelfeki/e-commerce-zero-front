import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEvent, map, of, switchMap, takeUntil, toArray } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SwiperImagesService {
  constructor(private http: HttpClient) {}
  parentImagesFolderUrl = environment.parentImagesFolderUrl;
  folderType = environment.folderType;
  folderName = environment.SwiperFolder;
  folderUrl = `${this.parentImagesFolderUrl}/${this.folderType}/${this.folderName}/`;
  uri = '';
  user=''
  getSwiperImageUrls() {
    return this.http.get<string[]>(`parser?url=${this.folderUrl}`).pipe(
      switchMap((data) => of(...data)),
      map((data) => `${this.folderUrl}${data}?raw=true`),
      toArray()
    );
  }
}
