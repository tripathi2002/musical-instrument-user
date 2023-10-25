import { trigger,state, style, transition, animate } from "@angular/animations";

export const error = trigger('error', [
    state('start', style({
        background: '#e62f2fd6',
        border: '.1rem solid #d03939',
        right: '3rem',
    })),
    state('end', style({
        right:'-16rem',
    })),
    transition('start => end', [
        animate('.5s ease-out')
    ]),
]);

export const success = trigger('success', [
    state('start', style({
        background: 'rgb(52 9 244 /97%)',
        border:'.1rem solid rgb(56 36 151)',
        right: '3rem',
    })),
    state('end', style({
        right:'-16rem',
    })),
    transition('start => end', [
        animate('.5s ease-out')
    ]),
    transition('end=>start', [
        animate('1s ease-out')
    ])
]); 

export const loading = trigger('loading', [
    state('start', style({
        filter: 'blur(.1rem)'
    })), 
    state('end', style({
        filter: 'blur(0)'
    })),
    transition('start=>end', [
        animate('.200ms ease-out')
    ]),
    transition('end=>start',  [
        animate('.200ms ease-out')
    ])
]);