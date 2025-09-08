export const myProjects =[
    {
        id : 1,
        title : "SnapKart : E-commerce Platform",
        description : "Welcome to SnapKart, a full stack e-Commerce web application developed from scratch using modern technologies!",
        subDescription : [
            "Implemented robust security measures with Spring Security 6 and JWT-based authentication, safeguarding user data and managing role-based access controls effectively.",
            "Connected frontend and backend using RESTful APIs for operations like authentication, product retrieval, order placement, and admin CRUD controls.",
            "Enhanced user experience with custom toast notifications, loading indicators, and error handling.",
            "Whether you're a customer browsing products or an admin managing inventory, this application ensures speed, security, and smooth usability across devices."
        ],
        href:"https://youtu.be/eGUqwakfx-E",
        logo:"",
        image:"/assets/projects/SnapKart.png",
        tags:[
            {
                id : 1,
                name : "Java",
                path : "/assets/logos/java.png"
            },
            {
                id : 2,
                name : "React",
                path : "/assets/logos/react.svg"
            },{
                id : 3,
                name : "Tailwind",
                path : "/assets/logos/tailwindcss.svg"
            },{
                id : 4,
                name : "Stripe",
                path : "/assets/logos/stripe.svg"
            },{
                id : 5,
                name : "Postman",
                path : "/assets/logos/postman.svg"
            },
        ],
    },
    {
        id : 2,
        title : "Mapty",
        description : "Developed Mapty, a location-based workout tracking app, using JavaScript and Leaflet.js to log runs and cycling sessions with geolocation. Implemented interactive maps, markers, and persistent data storage for personalized user experiences.",
        subDescription : [
            "Integrated Leaflet.js maps with geolocation to track and display user workouts dynamically.",
            "Stored and managed workout data using localStorage, enabling persistent sessions across page reloads.",
            "Designed interactive UI allowing users to log, edit, and view running and cycling activities on the map."
        ],
        href:"https://mapty-lilac.vercel.app/",
        logo:"",
        image:"/assets/projects/Mapty.png",
        tags:[
            {
                id : 1,
                name : "HTML",
                path : "/assets/logos/html5.svg"
            },
            {
                id : 2,
                name : "CSS",
                path : "/assets/logos/css3.svg"
            },{
                id : 3,
                name : "Javascript",
                path : "/assets/logos/javascript.svg"
            },{
                id : 4,
                name : "Leaflet",
                path : "/assets/logos/leaflet.svg"
            },
        ],
    },{
        id : 3,
        title : "CryptoPulse",
        description : "CryptoPulse is a modern, responsive cryptocurrency tracking web application designed to deliver real-time market insights.",
        subDescription : [
            "Designed with both usability and performance in mind, the application provides users with live market data, price charts, and key metrics for hundreds of cryptocurrencies.",
            "Whether you're a beginner or a crypto enthusiast, CryptoPulse offers a smooth, fast, and informative way to explore the cryptocurrency market.",
            "Implemented interactive charts and graphs for visual representation of cryptocurrency performance over time.",
            "Engineered efficient API integration via CoinGecko API  with real-time refresh cycles to display accurate data on pricing, volume, and market cap within milliseconds.",
        ],
        href:"https://cryptopulse-tanishk.netlify.app/",
        logo:"",
        image:"/assets/projects/Crypto.png",
        tags:[
            {
                id : 1,
                name : "React",
                path : "/assets/logos/react.svg"
            },{
                id : 2,
                name : "CSS",
                path : "/assets/logos/css3.svg"
            },{
                id : 3,
                name : "Axios",
                path : "/assets/logos/axios.svg"
            }
        ],
    },{
        id : 4,
        title : "Smart AI-Powered Email Reply Assistant",
        description : "An intelligent productivity tool that auto-generates high-quality email responses using AI.",
        subDescription : [
            "An interactive web application built with React.js, designed to help the users to generate smart, AI-powered replies to email content within seconds.",
            "Also created a lightweight Chrome extension that integrates AI powered reply generation directly into the Gmail interface, enhancing email productivity with a single click.",
            "Automatically reads the content of the current email thread to pass relevant context to the AI model.",
            "Implemented a robust Spring Boot RESTful backend with clean separation of concerns, JSON-based request handling, and scalable architecture.",
            ],
        href:"https://email-reply-assistant.vercel.app/",
        logo:"",
        image:"/assets/projects/Email.png",
        tags:[
            {
                id : 1,
                name : "Java",
                path : "/assets/logos/java.png"
            },
            {
                id : 2,
                name : "React",
                path : "/assets/logos/react.svg"
            },{
                id : 3,
                name : "Javascript",
                path : "/assets/logos/javascript.svg"
            },{
                id : 4,
                name : "Gemini AI",
                path : "/assets/logos/gemini-ai.svg"
            },{
                id : 5,
                name : "Framer",
                path : "/assets/logos/framer.svg"
            }
        ],
    },
]

export const mySocials = [
  {
    name: "Gmail",
    href: "mailto:sarraftanishk2@gmail.com",
    icon: "/assets/socials/gmail.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/tanishk-sarraf/",
    icon: "/assets/socials/linkedin.svg",
  },
  {
    name: "Github",
    href: "https://github.com/Tansarraf",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "Technology Intern",
    job: "Network People Services Technologies Ltd.,Delhi",
    date: "August 2025 - Present",
    contents: [
        "- Assisting the backend team in developing a FinTech Integration Module using Java Spring Boot and related frameworks.",
        "- Building skills in Spring Security, Reactive Spring Boot and MongoDB while applying Linux commands in day-to-day tasks.",
        "- Working closely with senior engineers to understand secure application design and modern backend practices."
      ],
   }
];

export const achievements = [
    {
        id : 1,
        name : "1st position in Hack-a-Quiz"
    },{
        id : 2,
        name : "Top 20 Finalist, DTU Vihaan 9.0 "
    },{
        id : 3,
        name : "Participated and Qualified in Multiple Hackathons"
    },{
        id : 4,
        name : "Solved 300+ Problems on LeetCode"
    }
]