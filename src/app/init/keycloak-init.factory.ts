import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080',
          realm: 'GhadaRealm',
          clientId: 'AngularApp',
        },
        initOptions: {
          onLoad: 'login-required',  // allowed values 'login-required', 'check-sso';
          flow: "standard"          // allowed values 'standard', 'implicit', 'hybrid';
        },
      });
}