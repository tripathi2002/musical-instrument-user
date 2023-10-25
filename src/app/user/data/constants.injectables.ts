export let BASE_URL = 'http://127.0.0.1:1000/v3/api';

export const Injector: Array<any> = [
    {
        provide: BASE_URL, useValue: BASE_URL
    }
]