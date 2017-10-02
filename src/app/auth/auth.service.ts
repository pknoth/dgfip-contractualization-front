import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { config } from '../config';

@Injectable()
export class AuthService {
  constructor (
    private http: HttpClient
  ) {
  }

  franceConnectAuthorizationUrl () {
    // const res = config.oauth_url +
    //   '?client_id=' + config.clientId +
    //   '&response_type=token' +
    //   '&redirect_uri=' + config.oauthRedirectURI
    // const res = 'http://localhost:3000/users/auth/dgfip'
    const res = 'http://impots.particulier.api.gouv.fr/users/auth/france_connect'
    return encodeURI(res)
  }

  dgfipAuthorizationUrl () {
    // const res = config.oauth_url +
    //   '?client_id=' + config.clientId +
    //   '&response_type=token' +
    //   '&redirect_uri=' + config.oauthRedirectURI
    // const res = 'http://localhost:3000/users/auth/dgfip'
    const res = 'https://impots.particulier.api.gouv.fr/users/auth/dgfip'
    return encodeURI(res)
  }
}
