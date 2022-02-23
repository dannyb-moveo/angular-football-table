import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  constructor(private storageService: StorageService) {}

  authUser() {
    const user = this.storageService.getUser();
    if (user && user === 'danny') {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

  saveUserToStorage(email: string) {
    this.storageService.setUser(email);
  }
}
