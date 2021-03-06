import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  name: String;
  email: String;
  role: String;
  user: Object = {};

  constructor(private authService: AuthService,
              private flashMessage: FlashMessagesService,
              private router: Router,
              private userService: UserService) {

   this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
 }

  ngOnInit() {}

 public roles = [
    { value: 'bdm', display: 'BDM' },
    { value: 'isr', display: 'ISR' } 
  ]

 onEditSubmit() {
    this.userService.updateProfile(this.user).subscribe((data) => {
      if(data.success) {
        this.flashMessage.show('Profile Updated', {cssClass: 'alert-success', timeout: 3000});
        localStorage.setItem('user', JSON.stringify(data.user));
        this.router.navigate(['/profile']);
      } else {
         this.flashMessage.show('Something happened, check logs', {cssClass: 'alert-danger', timeout: 3000});
      }
 })
}
}

