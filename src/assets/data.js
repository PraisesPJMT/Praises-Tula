import Michael from './mishael_mesfin.png';
import Sharon from './sharon_kessio.png';
import Aakash from './aakash_verma.png';

const Projects = [
  {
    id: 1,
    title: 'KadaTech Summit',
    description: 'Landing page for the KadaTech 2022 Summit in Kaduna Nigeria.',
    code: 'https://github.com/PraisesPJMT/Kada-Tech-Summit',
    link: 'https://praisespjmt.github.io/Kada-Tech-Summit/',
    type: 'desktop',
    stack: ['HTML'],
  },
  {
    id: 2,
    title: 'ToDo List HTML',
    description: 'Webapp that displays a list of daily tasks and allows user to add, edit, and remove task from list.',
    code: 'https://github.com/PraisesPJMT/To-Do-List',
    link: 'https://praisespjmt.github.io/To-Do-List/',
    type: 'mobile',
    stack: ['HTML', 'JavaScript'],
  },
  {
    id: 3,
    title: 'Awesome Books',
    description: 'Webapp that displays a list of books and allows user to add and remove books from list.',
    code: 'https://github.com/PraisesPJMT/Awesome-Books-ES6',
    link: 'https://praisespjmt.github.io/Awesome-Books-ES6/#',
    type: 'desktop',
    stack: ['HTML', 'JavaScript'],
  },
  {
    id: 4,
    title: 'Math Magicians',
    description: 'Webapp that users can make simple calculations and read a random math-related quote.',
    code: 'https://github.com/PraisesPJMT/Math-Magicians-RX',
    link: 'https://pjmt-math.netlify.app/',
    type: 'desktop',
    stack: ['React'],
  },
  {
    id: 5,
    title: 'Leader Board',
    description: 'Webapp that displays scores submitted by different players and preserves data externally via API service.',
    code: 'https://github.com/PraisesPJMT/Leaderboard',
    link: null,
    type: 'desktop',
    stack: ['React'],
  },
  {
    id: 6,
    title: 'Wedrop',
    description: 'Webapp to check the current weather in different cities worldwide.',
    code: 'https://github.com/PraisesPJMT/Wedrop-App',
    link: 'https://wedrop-app.netlify.app/',
    type: 'mobile',
    stack: ['React'],
  },
  {
    id: 7,
    title: 'Inkling Blog',
    description: 'A classic blog website with full functionality of making posts, comments and likes.',
    code: 'https://github.com/PraisesPJMT/Inkling-Blog-App',
    link: null,
    type: 'desktop',
    stack: ['Rails'],
  },
  {
    id: 8,
    title: 'FoodPad',
    description: 'App that keeps track of all users recipes, ingredients, and inventory and allow users to make changes to them.',
    code: 'https://github.com/PraisesPJMT/FoodPad-App',
    link: null,
    type: 'desktop',
    stack: ['Rails'],
  },
  {
    id: 9,
    title: 'Fruugal',
    description: 'Webapp where users can manage budgets by adding expenses into categories.',
    code: 'https://github.com/PraisesPJMT/Fruugal',
    link: 'https://fruugal-production.up.railway.app/',
    type: 'mobile',
    stack: ['Rails'],
  },
  {
    id: 10,
    title: 'Vip Cars',
    description: 'Fullstack web application that allows users to make basic reservations of their favourite cars and as well add in a car for rent.',
    code: 'https://github.com/PraisesPJMT/Vip_Cars_React',
    link: 'https://vip-cars-rental.netlify.app/',
    type: 'desktop',
    stack: ['React', 'Rails'],
  },
];

const Sidebar = [
  {
    id: 1,
    type: 'links',
    title: 'personal-info',
    details: [
      { subid: 1, subtitle: 'bio' },
      { subid: 2, subtitle: 'interest' },
      { subid: 3, subtitle: 'public-profiles' },
    ],
  },
  {
    id: 2,
    type: 'links',
    title: 'professional-info',
    details: [
      { subid: 1, subtitle: 'basic' },
      { subid: 2, subtitle: 'tech-stack' },
      { subid: 3, subtitle: 'tool-stack' },
    ],
  },
  {
    id: 3,
    type: 'checks',
    title: 'projects',
    details: [
      {
        id: 1, subtitle: 'HTML & CSS',
      },
      {
        id: 2, subtitle: 'JavaScript',
      },
      {
        id: 3, subtitle: 'React',
      },
      {
        id: 4, subtitle: 'Ruby-on-Rails',
      },
    ],
  },
  {
    id: 4,
    type: 'text',
    title: 'contacts',
    details: [
      {
        id: 5, subtitle: 'email', value: 'praisesmusa@gmail.com', link: 'mailto:praisesmusa@gmail.com',
      },
      {
        id: 6, subtitle: 'phone', value: '+234(0)8085851818', link: 'tel:+2348085852828',
      },
    ],
  },
  {
    id: 5,
    type: 'text',
    title: 'find-me-also-on',
    details: [
      {
        id: 7, subtitle: 'github', value: 'GitHub Account', link: 'https://github.com/PraisesPJMT',
      },
      {
        id: 8, subtitle: 'linkedin', value: 'LinkedIn', link: 'https://www.linkedin.com/in/praises-tula',
      },
      {
        id: 9, subtitle: 'mastodon', value: 'Mastodon', link: 'https://ruby.social/@pjmt',
      },
      {
        id: 10, subtitle: 'angellist', value: 'AngelList', link: 'https://angel.co/u/praises-tula',
      },
    ],
  },
];

const Testimonials = [
  {
    id: 1,
    delay: -1,
    name: 'Michael Mesfin',
    photo: Michael,
    link: 'https://www.linkedin.com/in/michael-mesfin-haileyesus/',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    testament: 'Praises is a great collaborator. When working with him\n'
      + '        he makes you feel calm and interested. He has proven\n'
      + '        himself as reliable, exceptionally having great attention to\n'
      + '        detail and his obsession with making great UI transpires through\n'
      + '        his work.\n'
      + '        I would recommend\n'
      + '        Praises for the role of Software Developer and so should you!',

  },
  {
    id: 2,
    delay: 0,
    name: 'Sharon Kessio',
    photo: Sharon,
    link: 'https://www.linkedin.com/in/sharon-kessio/',
    city: 'Nairobi',
    country: 'Kenya',
    testament: 'Praise is easy to '
      + 'work with as he keeps time, fulfilled his part '
      + 'of agreements on group projects, well versed with the topics '
      + 'at hand as he did prior research, he is also keen '
      + 'on details which reduced time spent fixing bugs. I '
      + 'enjoyed working with Praises.',

  },
  {
    id: 3,
    delay: 1,
    name: 'Aakash Verma',
    photo: Aakash,
    link: 'https://www.linkedin.com/in/skyv2022/',
    city: 'Chennai',
    country: 'India',
    testament: 'Praises is an intelligent and deeply creative person. '
      + 'He is thorough and has a great eye for detail. When Praises '
      + 'was working on a project, our error-correction needs were always '
      + 'reduced by half or more thanks to his outstanding diligence and '
      + 'attention to detail. In short, Praises is a delight and an incredible '
      + 'asset to anyone lucky enough to work with him.',
  },
  {
    id: 4,
    delay: 2,
    name: 'Michael Mesfin',
    photo: Michael,
    link: 'https://www.linkedin.com/in/michael-mesfin-haileyesus/',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    testament: 'Praises is a great collaborator. When working with him\n'
      + '        he makes you feel calm and interested. He has proven\n'
      + '        himself as reliable, exceptionally having great attention to\n'
      + '        detail and his obsession with making great UI transpires through\n'
      + '        his work.\n'
      + '        I would recommend\n'
      + '        Praises for the role of Software Developer and so should you!',
  },
  {
    id: 5,
    delay: 2,
    name: 'Sharon Kessio',
    photo: Sharon,
    link: 'https://www.linkedin.com/in/sharon-kessio/',
    city: 'Nairobi',
    country: 'Kenya',
    testament: 'Praise is easy to '
      + 'work with as he keeps time, fulfilled his part '
      + 'of agreements on group projects, well versed with the topics '
      + 'at hand as he did prior research, he is also keen '
      + 'on details which reduced time spent fixing bugs. I '
      + 'enjoyed working with Praises.',
  },
];

export { Sidebar, Projects, Testimonials };
