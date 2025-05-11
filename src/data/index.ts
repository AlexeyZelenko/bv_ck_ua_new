import { Project, Service, TeamMember, BlogPost } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Недільне Богослужіння',
    description: 'Приєднуйтесь до нашого щотижневого служіння для поклоніння, молитви та вивчення Слова Божого.',
    imageUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_7681.webp?alt=media&token=4f429c05-9951-4cb4-b30d-2778c0b0c532',
    imageUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_7681_mobile.webp?alt=media&token=81261808-9c09-4411-89be-3daa59952fd3',
    category: 'service',
    featured: true,
    date: '',
  },
  {
    id: '2',
    title: 'Годування біженців',
    description: 'Допомога людям, які потребують їжі та підтримки під час війни.',
    imageUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_1869.webp?alt=media&token=30c5e9c3-b222-4332-bb25-872b4ee79590',
    imageUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_1869_mobile.webp?alt=media&token=1c51b253-0afb-4e5d-b341-f533b7feee15',
    category: 'service',
    date: '',
  },
  {
    id: '3',
    title: 'Євангелізаціїйні зустрічі',
    description: 'Спеціальні зустрічі для поширення Євангелії та залучення нових людей до церкви.',
    imageUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_4648.webp?alt=media&token=32cad9b8-c8ae-40a0-9c5e-201a8374f476',
    imageUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_4648_mobile.webp?alt=media&token=cad0173f-e795-49d6-b47d-9502daf34cc7',
    category: 'service',
    date: '',
  },
  {
    id: '4',
    title: 'Дитячий табір "Жнивка"',
    description: 'Табір для дітей з іграми, навчанням та спілкуванням у дружній атмосфері.',
    imageUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_0417.webp?alt=media&token=6fb391e7-ca24-48cd-9dbf-df0be954c858',
    imageUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_0417_mobile.webp?alt=media&token=1fe26c5e-541a-4253-822f-3bb0882da56e',
    category: 'children',
    date: '',
  },
  {
    id: '5',
    title: 'Молодіжний табір',
    description: 'Табір для молоді з активностями, навчанням та спілкуванням.',
    imageUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_9446.webp?alt=media&token=56d13e38-32fa-42ba-9b38-7f60a8ecf6ed',
    imageUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_9446_mobile.webp?alt=media&token=806d229c-16e2-4f78-b70b-54301e3d84a0',
    category: 'young',
    date: '',
  },
  {
    id: '6',
    title: 'Видача продуктової допомоги для нужденних та біженців',
    description: 'Допомога людям, які потребують їжі та підтримки під час війни.',
    imageUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_1765.webp?alt=media&token=de10b48a-8302-462b-af65-f4957b5d6509',
    imageUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_1765_mobile.webp?alt=media&token=9de224bf-4aad-4faa-badb-9e58c35110c9',
    category: 'service',
    date: '',
    featured: true,
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Недільне Богослужіння',
    description: 'Зустріч для поклоніння, молитви та вивчення Слова Божого.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/services%2FIMG_8228.webp?alt=media&token=85981ba9-5dbd-4625-98e5-5ee981ce1e63',
    price: '2 години',
    features: [
      'Прославлення, Поклоніння',
      'Проповідь, Молитва',
      'Спілкування',
      'Дитячі програми',
      'Підліткові програми',
      'Кафе, кава та печиво'
    ],
    popular: true,
  },
  {
    id: '2',
    title: 'Молодіжні зустрічі',
    description: 'Зустрічі для молоді з активностями, навчанням та спілкуванням.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/services%2FIMG_9447.webp?alt=media&token=3c8f260c-8852-4aee-9db4-9ca3bfdd9b2d',
    price: '2 години',
    features: [
      'Спілкування',
        'Вивчення Біблії, молитви',
        'Чай, смаколики',
        'Спільні ігри, фільми',
        'Спільні поїздки, табори',
        'Спільні акції'
    ],
  },
  {
    id: '3',
    title: 'Молитви',
    description: 'Спеціальні зустрічі для молитви за мир в Україні та підтримку людей у потребі.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/services%2FIMG_7871.webp?alt=media&token=690d5d07-0fec-44ab-9f3c-6fa2463b11ca',
    price: '',
    features: [
      'Молитва за мир в Україні',
      'Молитва за сцілення',
      'Молитва за нужденних',
      'Молитва за біженців',
      'Молитва за служіння',
      'Молитва за церкву',
    ],
  },
  {
    id: '4',
    title: 'Недільна школа',
    description: 'Заняття для дітей з іграми, навчанням та спілкуванням у дружній атмосфері.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/services%2FIMG_8033.webp?alt=media&token=3149426b-a5b9-46f9-a24c-a3cfbe2b70da',
    price: '2 години',
    features: [
      'Спілкування',
      'Вивчення Біблії, молитви',
      'Чай, смаколики',
      'Спільні ігри, фільми',
      'Спільні поїздки, табори',
      'Спільні акції'
    ],
  },
  {
    id: '5',
    title: 'Підліткові зустрічі',
    description: 'Зустрічі для підлітків з активностями, навчанням та спілкуванням.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/services%2FIMG_2461.webp?alt=media&token=d4908fb7-9a53-4106-bdbc-7b6ce0b328e3',
    price: '2 години',
    features: [
      'Спілкування',
      'Вивчення Біблії, молитви',
      'Чай, смаколики',
      'Спільні ігри, фільми',
      'Спільні поїздки, табори',
      'Спільні акції'
    ],
  },
  {
    id: '6',
    title: 'Кормлення нужденних',
    description: 'Допомога людям, які потребують їжі та підтримки під час війни.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/services%2FIMG_1781.webp?alt=media&token=432ed77b-136e-479c-a756-a06372df11a5',
    price: '2 години',
    features: [
      'Спілкування',
      'Вивчення Біблії',
      'Молитви',
      'Гаряча їжа',
      'Можливість отримати допомогу',
      'Cмаколики'
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Юрій Вікторович Бієвець',
    role: 'Головний пастор',
    bio: '30 років досвіду, служіння в Україні та за кордоном. Пастор церкви, проповідник, Магістр біблійних наук.',
    imageUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/teamMembers%2FIMG_2338_mobile.webp?alt=media&token=5434a5fb-afb6-433d-b2b9-4887146baf8e',
    imageUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/teamMembers%2FIMG_2338.webp?alt=media&token=d1129a9a-3e55-43be-907a-945eb09fcfe8',
    socialLinks: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    id: '2',
    name: 'Антоніна Вікторівна Бієвець',
    role: 'Пастор',
    bio: 'Прославлення, молитва, служіння жінкам',
    imageUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/teamMembers%2FIMG_2157_mobile.webp?alt=media&token=4293381e-42ec-49dc-bb19-922e3972707a',
    imageUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/teamMembers%2FIMG_2157.webp?alt=media&token=d2b77f0b-feff-4111-8329-b9f6ef33a34d',
    socialLinks: {
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
    },
  },
  {
    id: '3',
    name: 'Вікторія Спіжева',
    role: 'Помічниця пастора',
    bio: 'Допомогає в організації служінь, духовна підтримка людей, займається адміністративними питаннями.',
    imageUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/teamMembers%2FIMG_2390_mobile.webp?alt=media&token=7d39835e-6320-4fc8-8365-74422ddf96b3',
    imageUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/teamMembers%2FIMG_2390.webp?alt=media&token=7cd61cdd-7bb7-433b-a359-7389b4f56fe7',
    socialLinks: {
      instagram: 'https://instagram.com',
    },
  },
  {
    id: '4',
    name: 'Володимир Бобков',
    role: 'Регіональний пастор',
    bio: 'Служитель церкви.',
    imageUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/teamMembers%2FIMG_2447_mobile.webp?alt=media&token=ba5c21d1-a9f2-47e6-a0b8-31e9832ff6a9',
    imageUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/teamMembers%2FIMG_2447.webp?alt=media&token=2741f5a8-7650-4bdc-ab9e-29223a4225aa',
    socialLinks: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    id: '5',
    name: 'Дмитро Воронков',
    role: 'Регіональний пастор',
    bio: 'Служитель церкви.',
    imageUrlMobile: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/teamMembers%2FIMG_2447_mobile.webp?alt=media&token=ba5c21d1-a9f2-47e6-a0b8-31e9832ff6a9',
    imageUrlDesktop: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/teamMembers%2FIMG_2433.webp?alt=media&token=efedb677-f36b-4af5-abc2-d6b616df3341',
    socialLinks: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
    },
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Як вибрати ідеальну пару',
    summary: 'Вибір ідеальної пари - це важливий етап у житті кожної людини. У цій статті ми розглянемо основні аспекти, які варто врахувати...',
    content: 'Вибір ідеальної пари - це важливий етап у житті кожної людини. У цій статті ми розглянемо основні аспекти, які варто врахувати...',
    imageUrl: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
    author: 'Олександр Петренко',
    publishDate: '2023-08-20',
    tags: ['весілля', 'поради'],
  },
  {
    id: '2',
    title: 'Як поклонятися Богу в сучасному світі',
    summary: 'Поклоніння Богу стало ще доступнішим завдяки технологіям. У цій статті ми розглянемо, як можна поклонятися Богу в сучасному світі...',
    content: 'Поклоніння Богу стало ще доступнішим завдяки технологіям. У цій статті ми розглянемо, як можна поклонятися Богу в сучасному світі...',
    imageUrl: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg',
    author: 'Марія Коваль',
    publishDate: '2023-07-15',
    tags: ['поклоніння', 'музика'],
  },
  {
    id: '3',
    title: 'Як підготуватися до служіння',
    summary: 'Підготовка до служіння - це важливий етап для кожного віруючого. У цій статті ми розглянемо основні аспекти підготовки до служіння...',
    content: 'Підготовка до служіння - це важливий етап для кожного віруючого. У цій статті ми розглянемо основні аспекти підготовки до служіння...',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/services%2FIMG_8228.webp?alt=media&token=85981ba9-5dbd-4625-98e5-5ee981ce1e63',
    author: 'Дмитро Василенко',
    publishDate: '2023-09-05',
    tags: ['служіння', 'поради', 'підготовка'],
  },
];