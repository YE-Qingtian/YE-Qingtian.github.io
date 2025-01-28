// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'YE-Qingtian', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['YE-Qingtian/YourBike', 'YE-Qingtian/VibeHorizon'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'YourBike (Dublin Bike Planner)',
          description:
            'A web application that helps users to plan their bike trips in Dublin. It provides the best route and station availability predictions based on the historical data and the real-time weather information. Hosted on AWS EC2.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkro-SZyzSTAxd7OpyiV8UyRvgQeIGzLguQ&s',
          link: 'https://yourbike.v6.rocks/',
        },
        {
          title: '[Archival Demo] Plan-it (Personalized Travel Planner)',
          description:
            'A user-friendly web app for personalized travel planning, offering predictive analytics on zonal busyness to help users make informed decisions. It enables seamless exploration, itinerary creation, interactive map views, and recommendations, focusing on spontaneous, authentic experiences. Currently tailored for Manhattan, NYC. [Only core web service now functioning]',
          imageUrl:
            'https://commons.wikimedia.org/wiki/File:Map_marker_font_awesome.svg#/media/File:Map_marker_font_awesome.svg',
          link: 'http://nycplanner.v6.rocks',
        },
        {
          title: 'Explorer on Independence Year by Country (Vega-Lite)',
          description: 'A visualization of the independence year of countries using Vega-Lite.',
          imageUrl: 'https://user-images.githubusercontent.com/589034/51515716-9fe92700-1dc9-11e9-93a7-11678571296d.png',
          link: 'https://vega.github.io/editor/#/url/vega-lite/N4IgJAzgxgFgpgWwIYgFwhgF0wBwqgegIDc4BzJAOjIEtMYBXAI0poHsDp5kTykBaADZ04JAKyUAVhDYA7EABoQUOQDMaZNKGQAnANZaQNWcSTCAJmlkNBgpZjZtBmGjjSqzEOAF8l0M3CGxqYWhiqCbDqGIQyB6MJkWGQ6SACeIN6Z9jRQBqig9Dl6snAQEGgATFkgxCqyUEiYaADaoADuNOb0aACMAAwDSvAaWGgAbIMgLpiCcQVwAB5N6ADCcLNMKZhw5gAEAJpwSDq7bKq7AJKy5nA4cNf3UHC7TKm7K2wMspg66UpmGnk6Ce3zgUV8IHMjRQ+RADB0gjQGGweEIBBSbWodEYTAYXh0dW230oKgQvAo5IEUMwSC8mAgBGQxgI1KQBDakUE5n4PX6CCkMnkSlUkWQywKqTuSIcODY0jkihAqiOmHhcWUn2+OhopQyEJ+SFkEBFOgQLVAETYegYbnQnUVqh0bDNsNZhnhiPQWFw+CIGKx9GYeLBhPumBJzoI+wAovwAIrGMguQ0EYw3O4PepwAD6UNSuehdPRcFUDPgSHMDOQEG2OgIMCcnTSEGzUFmhp2JIgxAySj0cHSwM1P3zFwAygB5B06rnlVDNECpI5RJRL47Zs7ZuCkb6KlRfEeK7dh1vOhCISKNHbZw3mbOyNjbcpKNO3e43LPZx3OxWyJDnjdVGzBsLDSEAAF0IRuDwbHFRdlysGw7A1A9fkQ2wlGPb5TwQc8EEvbY71ve9H11VBrFsLJQAaQQoBsK8kTXHQAApqQYfkmMArcd0wABKRVaSRFYzGzQ5jl7aizDowQGPQNj+WEwRROXXYAEIAF5dgowRdgAfl2ZiKj6CoABZdn4XZ5MoRTlOOXjdlQLSkIEud4OOFsIGMJ5s1fDMPyeCSlRoZwwUMHBjn-Rjl2zTY8RgPVwKUXQ8hAMg4DYCAYCQKVMPqNhzETMInEiQx1HWSx0CYjyvJzXz30eQJ7EldUAEcGENaZGhoUhFX8WZDC4RB1SYQRYnKfU6H69AxJ0CBdjHGrLgePyGt7KZHGcVxzSC8qkX3LU-imSb1Q+VD0l8UAyq5JE6szbzvzNbIZnVK503qrNdgAMSdM0Lp267KuizcsKaJ6ppAGa5rOXZox4xVMGa6VEFlFJEWyc8AFVZDoKLxL+q6KpAP8AM3ECm0O6ZwYAOX-Z5oYACUbPNAoJpEQZwvCCOvYiHyfeHjqRKnSPwDJIKUHAnUkOAoBcBVYQRqV0DgNqaB0aWaVkMh6PBP63VhD0kW9VE-SQTFaEDXF8VDYlSSjWME015NZFTZb3u8vMCxpIs1dLesjkrRlaVresmebVt2xKcwux7CFwpSBA51aInadxnQYp0OLevWdXDAV9VjFrEIjzygrNcTkAFggzJEpADouni1B+kmA0jRNF0k5o6TZKMVRmNfBYzlYxp2NYV27pzB6FF2AByLGRD2ABpRNzGdaf7IAPk0vpdgAHx33Z+8Hqzbv8iefqn6eACFtRpYw192Tfdj6C+58I3Yl81leEGnqeaF7w-e7HzHqfL858Z7fUNE8e+j9n7gJSFmH+B9-4PAHoA4e-IT4NVAc6C+Y5wrY0yjDBAOBVZwGgVvXe+8AFD1VBg4BWDJ4zzwUgO+G8t64PwTQQh0ZiGkMQX-PuKCj7oNHm9ce2CEC4LYMQHUmBdhzzkOQp+lCD5CLQbQ0Rb5xGMOngAJTxJ5Q081pGyK+jsMEXVSDGKgDQAENZdi6NuMwYQUAlGwL0QY2xBAMZjjHLo-hyCbioJoSPTBn4dEAAVIiqgoIINxF8ok6BiWYRB2leLpPSS5JED5TQAgAF7XjCfdH6LNgq1iRFZHJyBhAFLvEUs+zo1KaW0qLJKxw8gSkVkdXIe5hC2h+LECEjx8qFVhJXWErNAbrmBnDPwNE5iQmdCwoEC4ehiAAOxiEVEZYyVcmpdO2MQy8aMjqY2xssNyK4jrPSRDNNag5LozkJlU-JhT6HhJKfs9UD4EDGDMPzG56BXpaNPl9Ep+oNouFtEnSZKEDoAvBqdeF+Mnk3XecUn8YMXroueN9H8KLdpTLTjMsMCL1SQ1OOcWGpKvlIyOajfmZycZEtKYS5OJMgJk2ZliwWtNKW7EZqBc6ChHlsvZqSTmWxubXBInzHl6AhZPnQN4SCKrvBAA/view'
        },
        {
          title: 'Vibe Horizon',
          description: 'Mixed reality audio visualization tool on Quest 3 developed using Unity',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Meta_Quest_Icon.png?20220127014709',
          link: 'https://sidequestvr.com/app/40041/vibe-horizon'
        }
      ],
    },
  },
  seo: {
    title: 'Portfolio of YE Qingtian',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'qingtian-ye',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: 'viskyye2896', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://ye-qingtian.github.io',
    phone: '',
    email: 'qingtian.ye@ucdconnect.ie',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C#',
    'Unity',
    'JavaScript',
    'HTML',
    'CSS',
    'Vega-Lite',
    'MySQL',
    'Linux',
    'Git',
    'Docker',
    'Kubernetes',
    'Photoshop',
    'Premiere Pro',
    'Tableau',
  ],
  experiences: [
    {
      company: 'Beijing Tengjing Big Data Technology Research Institute',
      position: 'Senior Machine Learning Researcher',
      from: 'February 2021',
      to: 'April 2023',
      companyLink: 'http://www.tjresearch.cn/',
    },
    {
      company: 'Department of Domestic Think Tank, Institute of New Structural Economics, Peking University',
      position: 'Operation Specialist',
      from: 'October 2019',
      to: 'January 2021',
      companyLink: 'https://www.nse.pku.edu.cn/en/index.htm',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'University College Dublin',
      degree: 'MSc. Computer Science',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Institute of Development Studies, University of Sussex',
      degree: 'MA. Development Studies',
      from: '2018',
      to: '2019',
    },
    {
      institution: 'China Agricultural University',
      degree: 'BA. Development Studies',
      from: '2014',
      to: '2018',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
