import { HttpHeaders } from '@angular/common/http';

const httpOptionsJson = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    async: 'true',
  }),
};

export { httpOptionsJson };
