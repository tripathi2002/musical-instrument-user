export const languages = [
    {
        languages: 'English(India)',
        flag: 'bharat',
    },
    {
        languages: 'Franch',
        flag: 'france',
    },
    {
        languages: 'Russian',
        flag: 'russia',
    },
]

export const notifications = [
    {
        icon: 'fa fa-cloud-download',
        subject: 'new user joined ',
        description: 'Congratulation our team is incresing fastly'
    },
    {
        icon: 'fa fa-cloud-download',
        subject: 'someone delete the account ',
        description: 'Congratulation our team is incresing fastly'
    }
]

export const userItems = [

    {
        routeLink:'user/profile',
        icon: 'fa-regular fa-id-card',
        label: 'profile'
    },
    {
        routeLink:'user/setting',
        icon: 'fa-solid fa-gears',
        label: 'settings'
    },
    {
        routeLink: localStorage.getItem('token')?'user/logout':'user/login',
        icon: 'fa fa-right-to-bracket',
        label: localStorage.getItem('token')?'Log Out':'Log In'
    },
    // {
    //     routeLink:'user/create',
    //     icon: 'fa fa-right-to-bracket',
    //     label: 'signin'
    // },
]

