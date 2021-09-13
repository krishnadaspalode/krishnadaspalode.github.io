// config.js
module.exports = {
    github: {
        username: 'krishnadaspalode', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 16, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'krishnadas-a-64909a3a',
        twitter: '',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://krishnadaspalode.github.io',
        email: 'krishna.palode@gmail.com'
    },
    skills: [
        'JavaScript',
        'Angular',
        'Cordova',
        'Ionic',
        'HTML',
        'React.js',
        'Jquery',
        'SQL',
        'Angular.Js',
        'Git',
        'CSS',
        'Bootstrap',
    ],
    tools: [
        'npm',
        'Gradle',
        'Gulp',
        'Android Studio',
        'VS Code',
        'XCode',
        'jDeveloper',
        'Eclipse',
        'SQL Developer'
    ],
    experiences: [
        { 
            company: 'PB Comp Pvt Ltd',
            url: 'https://www.pbcomp.in/',
            position: 'Senior Consultant',
            from: 'September 2021',
            to: 'Present'
        },
        { 
            company: 'Tata Consultancy Services Pvt Ltd',
            url: 'https://www.tcs.com/',
            position: 'Senior Software Engineer',
            from: 'October 2019',
            to: 'August 2021'
        },
        { 
            company: 'RapidValue Solutions Pvt Ltd',
            url: 'https://www.rapidvaluesolutions.com/',
            position: 'Senior Software Engineer',
            from: 'February 2016',
            to: 'August 2019'
        },
        { 
            company: 'CTeBS Pvt Ltd',
            url: 'http://www.ctebs.com/',
            position: 'Associate Software Engineer',
            from: 'December 2014',
            to: ' February 2016'
        }
    ],
    education: [
        { 
            institution: 'University Of Calicut',
            degree: 'Master Of Computer Application',
            from: '2010',
            to: '2013'
        },
        { 
            institution: 'University Of Calicut',
            degree: 'B.Sc In Physics',
            from: '2007',
            to: '2010',
        },
        { 
            institution: 'Kerala Education Board',
            degree: 'Higher Secondary School Certificate (HSSC)',
            from: '2005',
            to: '2007'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: '', // medium | dev.to
        username: '',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id
        id: '' // UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    themeConfig: {
        default: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake'
        ]
    }
}