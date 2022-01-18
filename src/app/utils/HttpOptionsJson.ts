import { HttpHeaders } from '@angular/common/http';

const HttpOptionsJson: object = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

export { HttpOptionsJson };
