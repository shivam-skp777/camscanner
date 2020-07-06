import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private socialSharing: SocialSharing) {}

  shareImageViaEmail(){
    // Share via email
this.socialSharing.shareViaEmail('Hiii', 'Test Email', ['shivam@codestoresolutions.com']).then(() => {
  // Success!
  alert('Email Success');
}).catch(() => {
  alert('Email Fail');
});
  }

  shareImageViaWhatsApp(){
    this.socialSharing.shareViaWhatsApp('Image','https://www.cogniview.com/blog/wp-content/uploads/2013/04/share-dreamstime_xs_25506016.jpg','https://www.cogniview.com/blog/wp-content/uploads/2013/04/share-dreamstime_xs_25506016.jpg').then(()=>{
      alert('Whatsapp Success');

    }).catch(()=>{
      alert('Whatsapp Fail');

    })
  }

  shareImageViaInsta(){
    this.socialSharing.shareViaInstagram('Image','https://www.cogniview.com/blog/wp-content/uploads/2013/04/share-dreamstime_xs_25506016.jpg').then(()=>{
      alert('Insta Success');

    }).catch(()=>{
      alert('Insta Fail');

    })
  }

  shareImageViaFacebook(){
    this.socialSharing.shareViaFacebook('Image','https://www.cogniview.com/blog/wp-content/uploads/2013/04/share-dreamstime_xs_25506016.jpg','https://www.cogniview.com/blog/wp-content/uploads/2013/04/share-dreamstime_xs_25506016.jpg').then(()=>{
      alert('Facebook Success');

    }).catch(()=>{
      alert('Facebook Fail');

    })
  }
}
