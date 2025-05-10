import { Project, Service, TeamMember, BlogPost } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Недільне Богослужіння',
    description: 'Приєднуйтесь до нашого щотижневого служіння для поклоніння, молитви та вивчення Слова Божого.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_7681.JPG?alt=media&token=f6cf411b-9332-465e-a36f-f7cf2f6ec01d',
    category: 'служіння',
    featured: true,
  },
  {
    id: '2',
    title: 'Годування біженців',
    description: 'Допомога людям, які потребують їжі та підтримки під час війни.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_1869.JPG?alt=media&token=b4145137-789e-403c-b15c-1d400c636323',
    category: 'служіння',
  },
  {
    id: '3',
    title: 'Євангелізаціїйні зустрічі',
    description: 'Спеціальні зустрічі для поширення Євангелії та залучення нових людей до церкви.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_4648.JPG?alt=media&token=170f6b0e-fe8d-48eb-ab6c-3783033e2889',
    category: 'служіння',
    date: '',
  },
  {
    id: '4',
    title: 'Дитячий табір "Жнивка"',
    description: 'Табір для дітей з іграми, навчанням та спілкуванням у дружній атмосфері.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_0417.JPG?alt=media&token=af24bd77-062e-4c92-9fae-65e67721a832',
    category: 'діти',
    date: '',
  },
  {
    id: '5',
    title: 'Молодіжний табір',
    description: 'Табір для молоді з активностями, навчанням та спілкуванням.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_9446.JPG?alt=media&token=83d0198b-c99f-4d8d-bbb2-6ecfc2372aab',
    category: 'молодь',
    date: '',
  },
  {
    id: '6',
    title: 'Видача продуктової допомоги для нужденних та біженців',
    description: 'Допомога людям, які потребують їжі та підтримки під час війни.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/project%2FIMG_1765.JPG?alt=media&token=afeb6194-0302-43d3-9487-8fc404d22fe3',
    category: 'служіння',
    date: '',
    featured: true,
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Недільне Богослужіння',
    description: 'Зустріча для поклоніння, молитви та вивчення Слова Божого.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/services%2FIMG_8228.JPG?alt=media&token=e594bd27-bc77-40ab-a399-4ce44c56f0c8',
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/services%2FIMG_9447.JPG?alt=media&token=3b2101a3-1aa8-4e32-8e3b-c6326d12b59a',
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/services%2FIMG_7871.JPG?alt=media&token=30b688a0-0b83-4b5e-bfe8-fe455c98578d',
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/services%2FIMG_8033.JPG?alt=media&token=6a650091-065c-4905-96bd-abd6fa66e6ef',
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/services%2FIMG_2461.JPG?alt=media&token=8d6d8d5d-3540-4862-bc8e-c1a21b2b9890',
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/services%2FIMG_1781.JPG?alt=media&token=c0f5dd2c-e4e9-4ad1-affa-5a893c74ea53',
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/teamMembers%2FIMG_2338.JPG?alt=media&token=39835ee2-eeaa-4917-ab76-24aa3d5bbb4d',
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/teamMembers%2FIMG_2157.JPG?alt=media&token=f4d96fc9-31f2-41b5-b400-7a6ec7a3cfc8',
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
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/teamMembers%2FIMG_2390.JPG?alt=media&token=b8a5b475-fc09-4524-bd30-260047f3d4b0',
    socialLinks: {
      instagram: 'https://instagram.com',
    },
  },
  {
    id: '4',
    name: 'Володимир Бобков',
    role: 'Регіональний пастор',
    bio: 'Служитель церкви.',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/nusk-9e136.appspot.com/o/teamMembers%2FIMG_2447.JPG?alt=media&token=59a2075e-57db-433f-bddf-e4c75e0c1a03',
    socialLinks: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
    },
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Як вибрати ідеальну локацію для весільної фотосесії',
    summary: 'Поради щодо вибору місця для зйомки, яке підкреслить вашу індивідуальність',
    content: 'Вибір локації для весільної фотосесії - це важливий крок у плануванні вашого особливого дня...',
    imageUrl: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
    author: 'Олександр Петренко',
    publishDate: '2023-08-20',
    tags: ['весілля', 'фотосесія', 'поради'],
  },
  {
    id: '2',
    title: 'Тренди відеозйомки у 2023 році',
    summary: 'Найпопулярніші стилі та техніки у сучасній відеографії',
    content: 'Світ відеозйомки постійно розвивається, і щороку з\'являються нові тренди...',
    imageUrl: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg',
    author: 'Марія Коваль',
    publishDate: '2023-07-15',
    tags: ['відео', 'тренди', 'техніки'],
  },
  {
    id: '3',
    title: 'Як підготуватися до фотосесії: поради професіоналів',
    summary: 'Все, що потрібно знати перед фотосесією, щоб отримати найкращі результати',
    content: 'Гарна підготовка - це половина успіху фотосесії. У цій статті ми розглянемо основні аспекти...',
    imageUrl: 'https://images.pexels.com/photos/3811994/pexels-photo-3811994.jpeg',
    author: 'Дмитро Василенко',
    publishDate: '2023-09-05',
    tags: ['фотосесія', 'поради', 'підготовка'],
  },
];