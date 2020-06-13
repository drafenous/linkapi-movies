import { Component, OnInit } from '@angular/core';
import { Options } from '../models/options';
import { Profile } from '../models/profile';
import { ProfileService } from '../services/profile.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  genres = [
    {value: '0', name: 'Select your favorite Genre', disabled: true},
    {value: '1', name: 'Comedy', disabled: false},
    {value: '2', name: 'Horror', disabled: false},
    {value: '3', name: 'Thriller', disabled: false},
    {value: '4', name: 'Sci-Fi', disabled: false},
    {value: '5', name: 'Advanture', disabled: false},
    {value: '6', name: 'Action', disabled: false},
    {value: '7', name: 'Romance', disabled: false},
    {value: '8', name: 'Drama', disabled: false},
    {value: '9', name: 'Music', disabled: false},
    {value: '10', name: 'Crime', disabled: false},
    {value: '11', name: 'Biography', disabled: false},
    {value: '12', name: 'Fantasy', disabled: false},
    {value: '13', name: 'Mistery', disabled: false},
    {value: '14', name: 'Animation', disabled: false},
    {value: '15', name: 'Family', disabled: false}
  ] as Options[];


  profile = {} as Profile;
  selectedGenre = this.profile.favoriteGenre ? this.profile.favoriteGenre : '0';

  constructor(private profileService: ProfileService, private location: Location) { }

  ngOnInit(): void {
    this.profile = this.profileService.getProfile;
  }

  inputChanged(inputName: string, event){
    this.profile[inputName] = event;
  }

  saveProfile(){
    console.log(this.profile)
    this.profileService.setProfile = this.profile;
  }

  cancel(){
    return this.location.back();
  }
}
