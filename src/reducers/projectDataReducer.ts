import { FETCHED_ALL_PROJECT_DATA } from "../actions/types"

export interface projectDataT {
  logo: string
  title: string
  subtitle: string
  description: string
  codeLines: string
  links: {
    client?: string
    server?: string
    cms?: string
    blog?: string
    site?: string
    repo?: string
    wireframe?: string
    documentation?: string
    "cms rust impl"?: string
  }
  status: number
  technologies: Array<any>
  type: string
  _id: number
  showInPortfolio: boolean
  images: {
    [index: number]: {
      url: string
      device: string
    }
    filter?: any
    map?: any
    length?: any
  }
  video: string
}
const initialState: projectDataT[] = [
{
  _id: 0,
  technologies: ["expo", "redux", "styled components", "typescript"],
  images: [
    {device: "mobile", url: "https://i.ibb.co/QXK39dt/crackalackin.jpg"},
    {device: "mobile", url: "https://i.ibb.co/jTK0Lzm/crackalackin2.jpg"},
  ],
  logo: "https://i.ibb.co/4YP7yDb/crackalackin.png",
  title: "Crackalackin",
  subtitle: "",
  type: "mobile",
  description: "Crackalackin is a color matching game. It was one of my first apps built and through which I've practiced with React Js. The app is available in the play store. ",
  status: 7,
  video: "https://youtu.be/ivBsuimXKFg",
  links: {
    client: "https://github.com/FormidablePencil/CrackalakinApp",
    // "Get it from the Play Store": "https://play.google.com/store/apps/details?id=com.formidablepencil.crackilackin"
  },
  codeLines: "1717",
  showInPortfolio: true,
},
{  _id: 2,
  technologies: ["expo", "react native paper", "redux", "typescript", "styled components", "bit", "mongodb", "express", "jwt", "figma"],
  images: [
    {device: "mobile", url: "https://i.ibb.co/XXPcnsB/Screenshot-20201006-210038-The-Pao-System.jpg"},
    {device: "mobile", url: "https://i.ibb.co/d50f1xv/paoImg4.jpg"},
    {device: "mobile", url: "https://i.ibb.co/WxHg6Tm/paoImg.jpg"},
    {device: "mobile", url: "https://i.ibb.co/Gp0TPrH/paoImg2.jpg"},
    {device: "mobile", url: "https://i.ibb.co/rM0hyr6/paoImg6.jpg"},
  ],
  logo: "https://i.ibb.co/1K7jQJw/pao.png",
  title: "Pao System",
  subtitle: "Pet project",
  type: "mobile",
  description: "The Pao System is a tool for helping people to memorize the PAO mnemonic system. When I get around fixing a few bugs and implementing a few more features I'll publish the app in the play store. For now, it's just for personal use.",
  status: 0,
  video: "https://youtu.be/-U7ysY2m1QE",
  links: {
    client: "https://github.com/FormidablePencil/Pao-System-App",
    server: "https://github.com/FormidablePencil/Pao-System-Server",
    wireframe: "https://www.figma.com/file/SIPzIKXeKUvyE44WJjnoH3/Pao?node-id=0%3A1",
  },
  codeLines: "5933",
  showInPortfolio: true,},
{  _id: 12,
  technologies: ["expo", "redux", "typescript", "styled components"],
  images: [
    {device: "mobile", url: "https://i.ibb.co/9qGCH5t/pokemon4.jpg"},
    {device: "mobile", url: "https://i.ibb.co/HY6DHKR/pokemon6.jpg"},
    {device: "mobile", url: "https://i.ibb.co/Y36KrYX/pokemon3.jpg"},
    {device: "mobile", url: "https://i.ibb.co/DGRG9sf/pokemon7.jpg"},
    {device: "mobile", url: "https://i.ibb.co/PhBgcnL/pokemon.jpg"},
    {device: "mobile", url: "https://i.ibb.co/vH3y6VW/pokemon5.jpg"},
    {device: "mobile", url: "https://i.ibb.co/9cjDb3W/pokemon2.jpg"},
  ],
  logo: "https://i.ibb.co/w0m4pF3/pokedex.png",
  title: "Simple Pokedex",
  subtitle: "",
  type: "mobile",
  description: "Just like most apps I've built have been merely a playground for learning how to code. In this one, I experimented with data fetching. Sadly I couldn't publish the app because it would be a copyright infringement. I should have known. Nevertheless, definitely worth it.",
  status: 10,
  video: "https://youtu.be/I5hN0ZjXz8g",
  links: {
    client: "https://github.com/FormidablePencil/pokedex",
    // "apk download": "https://drive.google.com/file/d/1WEJJhjn-xP7WBLWQETKbOFl1xFp2ECYa/view?usp=sharing"
  },
  codeLines: "4290",
  showInPortfolio: true,},
{  _id: 3,
  technologies: ["react", "material ui", "redux", "typescript", "google cloud platform", "react spring", "bit", "mongodb", "go daddy", "express", "node", "figma"],
  images: [
    {device: "web", url: "https://i.ibb.co/xGWHVTg/Screen-Shot-2020-12-24-at-5-27-02-PM.png"},
    {device: "web", url: "https://i.ibb.co/tMkCc2k/my-bubble-prototype.jpg"},
  ],
  logo: "https://i.ibb.co/X3nPJHw/portfolio.png",
  title: "My Bubble",
  subtitle: "",
  type: "web",
  description: "My Bubble is my project gallery website that you're viewing at the moment. It's a fully-fledged Mern stack website.",
  status: 0,
  video: "",
  links: {
    client: "https://github.com/FormidablePencil/my-bubble",
    server: "https://github.com/FormidablePencil/portfolio-server",
    wireframe: "https://www.figma.com/file/qvnYQdzU5jVwFSYZTUu7U3/Portfolio-redesign?node-id=25%3A13"
  },
  codeLines: "3388",
  showInPortfolio: true,},
{  _id: 4,
  technologies: ["react native", "gatsby", "material ui", "redux", "typescript", "wordpress"],
  images: [
    {device: "web", url: "https://i.ibb.co/SNWqxJZ/Screen-Shot-2020-07-15-at-12-10-28-AM.png"},
  ],
  logo: "",
  title: "Blog site",
  subtitle: "",
  type: "web",
  description: "I've utilized WordPress as a headless cms and with gatsby and graphql to query data. Fully disclosure, the theme wasn't mine, credits due to nehalist. I hope to make this space for blogging about technology related and philosophy. ",
  status: 0,
  video: "",
  links: {
    client: "",
  },
  codeLines: "",
  showInPortfolio: false,},
{  _id: 5,
  technologies: ["expo", "react native paper", "redux", "typescript", "styled components", "bit", "mongodb", "express", "jwt"],
  images: [
    {device: "mobile", url: "https://i.ibb.co/k0KpMYM/emojitacktoes.jpg"},
    {device: "mobile", url: "https://i.ibb.co/X871FxR/emoji-Tack-Toes.jpg"},
    {device: "mobile", url: "https://i.ibb.co/JFXRK8Q/emojitacktoes4.jpg"},
    {device: "mobile", url: "https://i.ibb.co/gt065hN/emojitacktoes2.jpg"},
  ],
  logo: "https://i.ibb.co/pXgcQ16/ticktacktoe.png",
  title: "Emoji Tack Toes",
  subtitle: "Multiplayer",
  type: "mobile",
  description: "Self-explanatory. Nothing more and less and oh, it's multiplayer. Check it out in the play store.",
  status: 10,
  video: "https://youtu.be/RHMmuPUvPyU",
  links: {
    client: "https://github.com/FormidablePencil/EmojITackToes",
    server: "https://github.com/FormidablePencil/EmojiTackToes-server",
    // "Get it from the Play Store": "https://play.google.com/store/apps/details?id=com.emoji.emojitacktoes"
  },
  codeLines: "2632",
  showInPortfolio: true,},
{  _id: 6,
  technologies: ["react", "redux", "sass", "typescript", "google cloud platform", "react spring", "bit", "mongodb", 'go daddy', "express", 'node', 'figma'],
  images: [
    {device: "web", url: "https://i.ibb.co/pP5ZmxM/portfolio.jpg"},
    {device: "web", url: "https://i.ibb.co/ssKv3Rd/portfolio2.jpg"},
    {device: "web", url: "https://i.ibb.co/8zjvXpj/portfolio3.jpg"},
  ],
  logo: "https://i.ibb.co/X3nPJHw/portfolio.png",
  title: "Portfolio",
  subtitle: "",
  type: "web",
  description: "Portfolio is a bit of a misnomer. My bubble is where the gallery of my projects are at. Portfolio site is merely an introduction with a few project teasers. I've only used sass as a styling framework in this project and it's been through many iterations of redesigning. See the first design prototypes in Figma.",
  status: 4,
  video: "",
  links: {
    site: "https://www.dennisaleksandrov.com",
    client: "https://github.com/FormidablePencil/portfolio",
    server: "https://github.com/FormidablePencil/portfolio-server",
    wireframe: "https://www.figma.com/file/nHgCvMFM0hZvrlWjVjr5TL/Portfolio?node-id=0%3A1",
  },
  codeLines: "1841",
  showInPortfolio: true,},
{  _id: 7,
  technologies: ["angular", "sass", "bootstrap", "typescript"],
  images: [
    {device: "web", url: "https://i.ibb.co/Fmd08CR/movie-Inspired-Desktop2.jpg"},
    {device: "web", url: "https://i.ibb.co/ZdXThKR/movie-Inspired-Desktop.jpg"},
    {device: "mobile", url: "https://i.ibb.co/nmBLQ7C/movie-inspired-2.jpg"},
    {device: "mobile", url: "https://i.ibb.co/wRytR5d/movieinspired.jpg"},
  ],
  logo: "https://i.ibb.co/NLcCqf4/movieinspired.png",
  title: "Movie App",
  subtitle: "Built in angular in a day",
  type: "web",
  description: "Built this app while playing around with Angular.js. Built it in a day.",
  status: 10,
  video: "",
  links: {
    site: "https://movie-gallery-app.netlify.app",
    client: "https://github.com/FormidablePencil/movie-inspired",
  },
  codeLines: "917",
  showInPortfolio: true,},
{  _id: 8,
  technologies: ["react", "typescript", "sass"],
  images: [
    {device: "web", url: "https://i.ibb.co/nfmz17q/gestalt1.jpg"},
    {device: "web", url: "https://i.ibb.co/T8qPPbQ/gestalt2.jpg"},
    {device: "mobile", url: "https://i.ibb.co/y4dRv5t/gestalt3.jpg"},
    {device: "mobile", url: "https://i.ibb.co/ZhsKjxT/gestalt4.jpg"},
  ],
  logo: "https://i.ibb.co/2qDzM7f/gestalt-icon.png",
  title: "Gestalt Replica",
  subtitle: "",
  type: "web",
  description: "Replica of a website for a company I've written in under a day.",
  status: 10,
  video: "",
  links: {
    client: "",
    site: "https://roopam.netlify.app/",
    repo: "https://github.com/FormidablePencil/roopam",
    // "video of original site": "https://youtu.be/dl58YJN8WOY"
  },
  codeLines: "1037",
  showInPortfolio: true,},
{  _id: 9,
  technologies: ["react", "tailwind", 'netlify'],
  images: [
    {device: "web", url: "https://i.ibb.co/xgyvd84/starbucks3.jpg"},
    {device: "web", url: "https://i.ibb.co/wymnWdn/starbucks2.jpg"},
    {device: "mobile", url: "https://i.ibb.co/mTcRwPp/starbuck4.jpg"},
    {device: "mobile", url: "https://i.ibb.co/1qzdRsC/starbucks.jpg"},
  ],
  logo: "https://i.ibb.co/J7qf2yq/starbucks-Logo.png",
  title: "Starbucks Replica",
  subtitle: "",
  type: "web",
  description: "A simple replica of Starbucks' Christmas theme landing page, one of my first websites built with React and Tailwind.",
  status: 10,
  video: "",
  links: {
    site: "https://starbucksreplicawebsite.netlify.app",
    client: "https://github.com/FormidablePencil/Starbucks-replication"
  },
  codeLines: "500",
  showInPortfolio: true,},
{  _id: 10,
  technologies: ["non disclosure"],
  images: [
    {device: "web", url: "https://i.ibb.co/7QRg80P/Screen-Shot-2022-04-15-at-9-10-54-AM.jpg"},
    {device: "mobile", url: "https://i.ibb.co/r6S3yf8/Screenshot-20220415-083444-Brave.jpg"},
    {device: "mobile", url: "https://i.ibb.co/f9Khdxm/Screenshot-20220415-083515-Brave.jpg"},
  ],
  logo: "https://i.ibb.co/yRtWBBS/Cleaning-company-Spokane.jpg",
  title: "Live Clean Today",
  subtitle: "",
  type: "web",
  description: "Manager and developer for some time.",
  status: 2,
  video: "",
  links: {
  },
  codeLines: "",
  showInPortfolio: true,},
{  _id: 11,
  technologies: ["react", 'sass', 'typescript'],
  images: [
    {device: "web", url: "https://i.ibb.co/RhYvshP/Screen-Shot-2021-03-02-at-8-55-53-PM.jpg"},
    {device: "web", url: "https://i.ibb.co/HYcQx7M/Screen-Shot-2021-03-02-at-8-56-14-PM.jpg"},
    {device: "web", url: "https://i.ibb.co/1QGKxxx/desktop1.jpg"},
    {device: "web", url: "https://i.ibb.co/R4htpbw/Screen-Shot-2021-03-02-at-8-56-23-PM.jpg"},
    {device: "mobile", url: "https://i.ibb.co/c1b7w8T/mobile3.jpg"},
    {device: "mobile", url: "https://i.ibb.co/mRKgxcG/mobile-1.jpg"},
    {device: "mobile", url: "https://i.ibb.co/1Qg7q5d/mobile2.jpg"},
  ],
  logo: "https://i.ibb.co/LJ1z3bv/TR.png",
  title: "TR Legacy",
  subtitle: "",
  type: "web",
  description: "There's a page of Tony Robbins' timeline, autobiography and books he has authored.",
  status: 10,
  video: "",
  links: {
    client: "https://tony-robbins-fan-club.netlify.app",
  },
  codeLines: "1350",
  showInPortfolio: true,},
{
  _id: 1,
  technologies: ["vue", "vuex", "tailwind", "typescript"],
  images: [
    {device: "web", url: "https://i.ibb.co/j4mJ6Gs/elonmars1.jpg"},
    {device: "web", url: "https://i.ibb.co/KF6dW25/elonmars2.jpg"},
  ],
  logo: "https://i.ibb.co/QQwyDjp/elonmarksicon.png",
  title: "Elon Mars",
  subtitle: "",
  type: "web",
  description: "Built this Vue app in a few day. Sadly I didn't find the time to make it responsive.",
  status: 10,
  video: "",
  links: {
    site: "https://elonmars.netlify.app/",
    repo: "https://github.com/FormidablePencil/elon-mars",
  },
  codeLines: "684",
  showInPortfolio: true,
},
{  _id: 13,
  technologies: ['react', 'typescript', 'sass','material ui', 'styled components', 'mongodb', 'express', 'node'],
  images: [
    {device: "mobile", url: "https://i.ibb.co/THMdkVY/Screenshot-20210330-023849-Brave.jpg"},
    {device: "web", url: "https://i.ibb.co/8KZbqgc/Screen-Shot-2021-03-30-at-2-33-24-AM.jpg"},
    {device: "mobile", url: "https://i.ibb.co/TBQX3md/Screenshot-20210330-023759-Brave.jpg"},
    {device: "web", url: "https://i.ibb.co/5T4Wbvc/Screen-Shot-2021-03-30-at-2-33-30-AM.jpg"},
    {device: "mobile", url: "https://i.ibb.co/P9VJDkK/Screenshot-20210330-023810-Brave.jpg"},
    {device: "web", url: "https://i.ibb.co/0FWBHnm/Screen-Shot-2021-03-30-at-2-33-40-AM.jpg"},
    {device: "mobile", url: "https://i.ibb.co/THMdkVY/Screenshot-20210330-023849-Brave.jpg"},
  ],
  logo: "https://i.ibb.co/HzJhtG4/camera.png",
  title: "Cinematographer's portfolio",
  subtitle: "Work in progress",
  type: "",
  description: "This project is 90% done but was abandoned due to communication complications with the client. It's responsive, has a few large features I built myself, some of which is a cms, tabular-scroll-effect I call it, and a crystal-parallaxing-effect. ",
  status: 9,
  video: "",
  links: {
    client: "https://github.com/FormidablePencil/Jordan-Portfolio",
    server: "https://github.com/FormidablePencil/jordans-portfolio-server",
    cms: "https://github.com/FormidablePencil/cms-jordan-portfolio",
  },
  codeLines: "6180",
  showInPortfolio: true,},
{  _id: 14,
  technologies: ['rust', 'kotlin', 'typescript', 'tailwind'],
  images: [
    {device: "web", url: "https://i.ibb.co/pR0kXYD/julia-alexjones.jpg"},
    {device: "mobile", url: "https://i.ibb.co/YjnRVDW/julia-flowergirl.jpg"},
    {device: "mobile", url: "https://i.ibb.co/rpYRRrT/julia-enter.jpg"},
  ],
  logo: "https://i.ibb.co/80xxPmp/julia.png",
  title: "Julia",
  subtitle: "",
  type: "web",
  description: "A set of general purpose social utilities based on the web3.0 paradigm and aimed ultimately to bring 7.75 billion people together.",
  status: 2,
  video: "",
  links: {
    cms: "https://github.com/FormidablePencil/interweb",
    documentation: "https://julia-project.netlify.app",
    "cms rust impl": "https://github.com/FormidablePencil/julia-cms",
  },
  codeLines: "15k",
  showInPortfolio: true,},
{  _id: 15,
  technologies: ["mongodb", "express", "typescript"],
  images: [
    {device: "web", url: "https://i.ibb.co/23bYsn8/todo-list.png"},
    {device: "mobile", url: "https://i.ibb.co/gmQSXdG/ultilist.jpg"},
  ],
  logo: "https://i.ibb.co/HFj55xw/icons8-todo-list-100.png",
  title: "Server for Todolist",
  subtitle: "",
  type: "web",
  description: "This app was made in collaborations with my brother Daniel Aleksandrov for his software engineering pursuits.",
  status: 3,
  video: "",
  links: {
    client: "https://github.com/DanielAleks/todoList/",
    server: "https://github.com/FormidablePencil/ulti-todos-server/"
  },
  codeLines: "457",
  showInPortfolio: true,},
{  _id: 16,
  technologies: ["non disclosure"],
  images: [
    {device: "web", url: "https://i.ibb.co/2dWtpZ1/Screen-Shot-2022-04-15-at-9-16-09-AM.jpg"},
    {device: "web", url: "https://i.ibb.co/k5bYG6P/Screen-Shot-2022-04-15-at-9-15-53-AM.jpg"},
    {device: "mobile", url: "https://i.ibb.co/grxHFBP/Screenshot-20220415-083228-Brave.jpg"},
    {device: "mobile", url: "https://i.ibb.co/KxXmR5N/Screenshot-20220415-083323-Brave.jpg"},
  ],
  logo: "https://i.ibb.co/V0yj5Sh/talkingparents.png",
  title: "Talking Parents",
  subtitle: "",
  type: "web",
  description: "Fullstack developer role. An app for recording communications in keeping parents accountable to one another.",
  status: 2,
  video: "",
  links: {
    client: "",
  },
  codeLines: "",
  showInPortfolio: true,}
]

export default (state: projectDataT[] = initialState, { type, payload }) => {
  switch (type) {

    case FETCHED_ALL_PROJECT_DATA:
      return payload

    default:
      return state
  }
}
