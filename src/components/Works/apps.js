import bose from '../../images/apps/bose_700.jpeg';
import webstudio from '../../images/apps/web_design.jpeg';
import image_searcher from '../../images/apps/imagers.jpeg';
import trending_movies from '../../images/apps/trending_movies.jpeg';
import phonebook from '../../images/apps/phonebook.jpeg';
//import converter from '../../images/apps/converter.jpeg';
import medic_app from '../../images/apps/1AE5A43C-AA6A-4ABD-8120-A53C75DF756E.jpeg';
import car_dealership from '../../images/apps/rent_car.jpeg';
import food_delivery from '../../images/apps/food_app.jpeg';
import cinemania from '../../images/apps/cinemania.jpeg';
import goosetrack from '../../images/apps/goose_track.jpeg';
import mimino from '../../images/apps/mimino.jpeg';
import propart_spain from '../../images/apps/propart_spain.jpeg';
import prop_dubai from '../../images/apps/prop_dubai.jpeg';
import bubbly from '../../images/apps/bubbly.jpeg';
import { v4 as uuidv4 } from 'uuid';

export const CreatedApps = [
  {
    id: uuidv4(),
    image: food_delivery,
    title:
      'Food delivery, to choose from given menu, convenient search based on many params',
    techs:
      'HTML, ReactJS, Redux, Redux Toolkit, React libraries, StyledComponents, axios',
    appLink: 'https://annakolesnichenko.github.io/food-app/',
    code: 'https://github.com/AnnaKolesnichenko/food-app',
    role: 'Role: developer',
    tag: 'study',
  },
  {
    id: uuidv4(),
    image: propart_spain,
    title: 'Look for the estate of your dream',
    techs: 'HTML, RactJS, NextJS, TypeScript, ReduxToolkit, axios, SCSS',
    appLink: 'https://propart-spain-six.vercel.app/ru',
    code: 'https://github.com/AnnaKolesnichenko/propart-spain',
    role: 'Commercial project. Role: developer (areas, property card)',
    tag: 'work',
  },
  {
    id: uuidv4(),
    image: bubbly,
    title: 'Test app with bubble.io',
    techs: 'bubble.io',
    appLink: 'https://cool-app-72640.bubbleapps.io/version-test/',
    code: 'https://bubble.io/page?id=cool-app-72640&tab=tabs-1&name=index&type=page',
    role: 'Test assignment. Role: developer',
    tag: 'test',
  },
  {
    id: uuidv4(),
    image: prop_dubai,
    title: 'ProPart Dubai: Your Gateway to Elite Real Estate in the UAE.',
    techs: 'HTML, RactJS, ReduxToolkit, axios, sass, swiper',
    appLink: 'https://prop-dubai.vercel.app/',
    code: 'https://github.com/AnnaKolesnichenko/prop-dubai',
    role: 'Commercial project. Role: developer (registration, our services, areas)',
    tag: 'work',
  },
  {
    id: '2a',
    image: medic_app,
    title: 'Search and price compare medications',
    techs: 'HTML, RactJS, ReduxToolkit, axios, Firebase, StyledComponents',
    appLink: 'https://annakolesnichenko.github.io/medic-app/',
    code: 'https://github.com/AnnaKolesnichenko/medic-app',
    role: 'Test assignment. Role: developer',
    tag: 'test',
  },

  {
    id: '3a',
    image: image_searcher,
    title: 'Image searching app, Pixabay sourced',
    techs: 'HTML, CSS, ReactJS, responsive design, axios',
    appLink: 'https://annakolesnichenko.github.io/goit-react-hw-04-images/',
    code: 'https://github.com/AnnaKolesnichenko/goit-react-hw-04-images',
    role: 'Role: developer',
    tag: 'study',
  },
  {
    id: '4a',
    image: trending_movies,
    title: 'App for showing latest movies, with a search option',
    techs: 'HTML, CSS, ReactJS, REST API, responsive design, axios',
    appLink: 'https://annakolesnichenko.github.io/goit-react-hw--05-movies/',
    code: 'https://github.com/AnnaKolesnichenko/goit-react-hw--05-movies',
    role: 'Role: developer',
    tag: 'study',
  },
  {
    id: '5a',
    image: phonebook,
    title:
      'Wonderful app for storing and adding contacts, with logging and registration functionality',
    techs:
      'HTML, CSS, ReactJS, Redux Toolkit, Async Redux, responsive design, axios',
    appLink: 'https://annakolesnichenko.github.io/goit-react-hw-08-phonebook/',
    code: 'https://github.com/AnnaKolesnichenko/goit-react-hw-08-phonebook',
    role: 'Role: developer',
    tag: 'study',
  },
  // {
  //   id: '6a',
  //   image: converter,
  //   title:
  //     'Handy app, showing current currency rate for a chosen currency (UAH) and letting make exchanges both ways',
  //   techs:
  //     'HTML, CSS, ReactJS, RESP API,React libraries, StyledComponents, axios',
  //   appLink: 'https://annakolesnichenko.github.io/currency-converter/',
  //   code: 'https://github.com/AnnaKolesnichenko/currency-converter',
  //   role: 'Role: developer. Test-assignment',
  // },
  {
    id: '7a',
    image: car_dealership,
    title:
      'Car Dealership, choose the car you like, add them to your favorites, check for more info about each picked item',
    techs: 'HTML, CSS, ReactJS, React libraries, StyledComponents,',
    appLink: 'https://annakolesnichenko.github.io/car-dealership',
    code: 'https://github.com/AnnaKolesnichenko/car-dealership',
    role: 'Role: developer',
    tag: 'study',
  },
  {
    id: '8a',
    image: bose,
    title: 'BOSE_NC_700 product advertising',
    techs: 'HTML, CSS, responsive design',
    appLink: 'https://annakolesnichenko.github.io/bose_NC_700/',
    code: 'https://github.com/AnnaKolesnichenko/bose_NC_700',
    role: 'Role: developer',
    tag: 'study',
  },
  {
    id: '9a',
    image: cinemania,
    title: '',
    techs: 'HTML, CSS, ReactJS, React libraries, StyledComponents, axios',
    appLink: 'https://lapanu4.github.io/project-Tenth_Team/',
    code: 'https://github.com/LaPaNu4/project-Tenth_Team',
    role: 'Team Project. Role: My Library',
    tag: 'study',
  },
  {
    id: '10a',
    image: goosetrack,
    title: '',
    techs:
      'HTML, CSS, ReactJS, Redux, Redux Toolkit, React libraries, StyledComponents, axios, express, MongoDB',
    appLink: 'https://yura-platonov.github.io/GooseTrack_frontend/',
    code: 'https://github.com/Yura-Platonov/GooseTrack_frontend',
    role: 'Team Project. Role: Login, Register',
    tag: 'test',
  },
  {
    id: '11a',
    image: mimino,
    title: '',
    techs: 'HTML, CSS, JS, VITE.JS',
    appLink: 'https://valeru4.github.io/mimino-team-project/',
    code: 'https://github.com/Valeru4/mimino-team-project',
    role: 'Team Project. Role: Header, 2-room apt booking',
    tag: 'study',
  },
  {
    id: '12a',
    image: webstudio,
    title: 'WebDesignStudio',
    techs: 'HTML, CSS, responsive design',
    appLink: 'https://annakolesnichenko.github.io/goit-markup-hw-07/',
    code: 'https://github.com/AnnaKolesnichenko/goit-markup-hw-07',
    role: 'Role: developer',
    tag: 'study',
  },
];
