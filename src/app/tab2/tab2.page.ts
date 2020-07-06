import { Component } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  constructor(private barcodeScanner: BarcodeScanner) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }
  

  scanBarcode(){   
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
      })
      .catch(err => {
        console.log("Error", err);
      }); 
  }
}
