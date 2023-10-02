export let BASE_URL = 'http://192.168.1.21:1000/v3/api/user';

export const Injector: Array<any> = [
    {
        provide: BASE_URL, useValue: BASE_URL
    }
]