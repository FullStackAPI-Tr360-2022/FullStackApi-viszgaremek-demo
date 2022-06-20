import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface IFileUploadResponse {
  success: boolean;
  name: string;
  path: string;
}

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  fileName: string = 'no file';

  @Output() uploaded: EventEmitter<IFileUploadResponse> = new EventEmitter();

  constructor(
    private http: HttpClient,
  ) { }

  onFileSelected(event: Event): void {
    const file: File | undefined = (event.target as HTMLInputElement)?.files?.[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('uploadFile', file);

      this.http.post<IFileUploadResponse>(
        `${environment.apiUrl}upload`,
        formData
      ).subscribe({
        next: (response: IFileUploadResponse) => {
          this.uploaded.emit(response);
          console.log(response);
        },
        error: err => console.error(err),
      });
    }
  }

  ngOnInit(): void {
  }

}
