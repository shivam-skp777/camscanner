import { Component, OnInit } from '@angular/core';
import { DocumentScanner, DocumentScannerOptions } from '@ionic-native/document-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  scannedData: any;

  constructor(
    private documentScanner: DocumentScanner
  ) { }

  ngOnInit() {}

  scanDocument() {
    let opts: DocumentScannerOptions = {
      sourceType : 1,
      fileName : "myfile",
      quality : 2.5,
      returnBase64 : true
    };
    this.documentScanner.scanDoc(opts)
      .then((res: string) => {
        console.log(res);
        this.scannedData = `data:image/jpeg;base64,${res}`;
      })
      .catch((error: any) => console.error(error))
  }

}
