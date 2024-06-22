import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, switchMap, toArray } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductImagesService {
  parentImagesFolderUrl =environment.parentImagesFolderUrl;
  folderType = environment.folderType;
  folderName = environment.productFolder;
  folderUrl = `${this.parentImagesFolderUrl}/${this.folderType}/${this.folderName}/`;
  constructor(private http:HttpClient) { }
  getProductImagesUrls(){
    return this.http.get<string[]>(`parser?url=${this.folderUrl}`)
    .pipe(
      switchMap((data) => of(...data)),
      map((data) => `${this.folderUrl}${data}?raw=true`),
      toArray(),
    );
  }
}
