import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile = new BehaviorSubject<Profile>(this.getProfile);

  constructor() { }

  get getProfile() {
    const profile = JSON.parse(localStorage.getItem('profile'));
    return profile !== null ? profile : {};
  }

  set setProfile(profile: Profile){
    const str = JSON.stringify(profile);
    localStorage.setItem('profile', str);
  }
}
