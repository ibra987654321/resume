export interface ExperienceDataDto {
    id: number;
    key: string;
    name_en: string;
    name_ru: string;
    name_ky: string;
    description_en: string;
    description_ru: string;
    description_ky: string;
    tags: string[];
    period_en: string;
    period_ru: string;
    period_ky: string;
    link: string;
}
export const ExperienceData: ExperienceDataDto[] = [
    {
        id: 1,
        key: '1',
        name_en: 'Aloo.kg Internet store (Website layout designer)',
        name_ru: 'Aloo.kg Интернет магазин (Верстальщик)',
        name_ky: 'Aloo.kg Интернет магазини (Вебсайттын макети дизайнери)',
        description_en: 'In this role, I actively worked on content creation and management using the WordPress platform. I took the initiative to create new pages and adjust the layout where necessary, which contributed to an improved user experience and overall website appeal.',
            description_ru: 'В этой роли я активно занимался созданием и управлением контентом на платформе WordPress. Я проявлял инициативу, создавая новые страницы и адаптируя дизайн там, где это было необходимо, что способствовало улучшению пользовательского опыта и общей привлекательности сайта.',
        description_ky: 'Бул ролдо мен WordPress платформасында контентти түзүү жана башкаруу менен активдүү иштедим. Жаңы барактарды түзүү жана зарыл жерлерде дизайнын жөндөө боюнча демилгени өзүм алып, сайттын колдонуучулар үчүн ыңгайлуулугун жана жалпы тартылуусун жакшыртууга көмөктөштүм.',
        tags:['Wordpress', 'HTML', 'CSS'],
        period_en: 'Jan — July 2020',
        period_ru: 'Янв — Июль 2020',
        period_ky: 'Үчтүн айы — Теке 2020',
        link:'https://www.facebook.com/p/Alookg-%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD-%D1%81-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%BE%D0%B9-%D0%BF%D0%BE-%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%D1%83-100069879802784/'
    },
    {
        id: 2,
        key: '2',
        name_en: 'Beeline Kyrgyzstan (Front-end junior )',
        name_ru: 'Билайн Кыргызстан (Front-end junior )',
        name_ky: 'Билайн Кыргызстан (Front-end junior )',
        description_en: '\n' +
            'Here’s the text in English:\n' +
            '\n' +
            'In this position, I actively worked with JavaScript and focused a lot on front-end development. I created a project from scratch, interacting with REST APIs and extensively using LocalStorage. This experience allowed me to deepen my skills in handling asynchronous requests and managing application state.\n' +
            '\n' +
            'Additionally, I gained significant experience in teamwork, which greatly improved my collaborative and communication skills. I learned to effectively connect with colleagues, share ideas, and engage in joint development.\n' +
            '\n' +
            'At the same time, I started exploring Vue.js and developing projects on this platform. I delved into Vue 2, mastering the Vuex state management library and the Vuetify CSS framework. This enabled me to create more dynamic and responsive interfaces while effectively managing application state.',
        description_ru: 'В этой позиции я активно занимался JavaScript и много работал над вёрсткой. Я создал проект с нуля, взаимодействуя с REST API, а также активно использовал LocalStorage для хранения данных. Этот опыт позволил мне углубить навыки работы с асинхронными запросами и управлением состоянием.\n' +
            '\n' +
            'Кроме того, я получил огромный опыт работы в команде, что значительно улучшило мои навыки командного взаимодействия и сотрудничества. Я научился эффективно общаться с коллегами, делиться идеями и участвовать в совместной разработке.\n' +
            '\n' +
            'Параллельно с этим я начал изучать Vue.js и разрабатывать проекты на этой платформе. Углублённо изучая вторую версию Vue, я освоил менеджер состояния Vuex и CSS-фреймворк Vuetify. Это дало мне возможность создавать более динамичные и отзывчивые интерфейсы, а также эффективно управлять состоянием приложений.',
        description_ky: 'Бул позицияда мен JavaScript менен активдүү иштеп, вёрстка боюнча көп иштерди жасадым. Мен нөлдөн баштап проект түзүп, REST API менен өз ара аракеттендим, ошондой эле LocalStorage\'ду кеңири колдонгом. Бул тажрыйба мага асинхрондук суроолор менен иштөөнү жана абалдарды башкарууну тереңирээк үйрөнүүгө мүмкүнчүлүк берди.\n' +
            '\n' +
            'Мындан тышкары, мен командалык иштөө боюнча чоң тажрыйба алдым, бул менин командалык өз ара аракеттенүү жана кызматташуу жөндөмүмдү жакшыратты. Мен кесиптештерим менен натыйжалуу байланышууга, идеяларды бөлүшүүгө жана биргелешип иштөөгө үйрөндүм.\n' +
            '\n' +
            'Ошондой эле, мен Vue.js\'ди изилдей баштадым жана бул платформада проекттерди иштеп чыктым. Vue\'нун экинчи версиясын терең үйрөнүп, Vuex абал менеджерин жана Vuetify CSS фреймворкун өздөштүрдүм. Бул мага динамикалуу жана жооп берүүчү интерфейстерди түзүүгө, ошондой эле колдонмолордун абалын натыйжалуу башкарууга мүмкүнчүлүк берди.',
        tags:['Javascript', 'Jquery', 'Vue.js','Vuetify', 'Vuex' ],
        period_en: 'July 2020 — May 2021',
        period_ru: 'Июль 2020 — Май 2021',
        period_ky: 'Теке 2020 — Бугу 2021',
        link:'https://beeline.kg'
    },
    {
        id: 3,
        key: '3',
        name_en: 'Beeline Kyrgyzstan (Front-end )',
        name_ru: 'Билайн Кыргызстан (Front-end )',
        name_ky: 'Билайн Кыргызстан (Front-end )',
        description_en: 'As a front-end developer, I worked with legacy code written in Angular, where I became familiar with TypeScript and RxJS. This experience allowed me to deepen my understanding of reading and interpreting others\' code, as well as to develop skills in designing the architecture of large applications. I learned to effectively analyze existing solutions and apply best practices to enhance code quality.\n' +
            '\n' +
            'Subsequently, I was tasked with developing projects in React, utilizing both the classic class-based and functional approaches. Throughout this process, I frequently employed RTK Query and Zustand for state management, which enabled me to create more efficient and responsive applications.',
        description_ru: 'На позиции фронтэнд разработчика я работал с легаси-кодом, написанным на Angular, где познакомился с TypeScript и RxJS. Этот опыт позволил мне углубиться в чтение и понимание чужого кода, а также развить навыки проектирования архитектуры крупных приложений. Я научился эффективно анализировать существующие решения и применять лучшие практики для улучшения качества кода.\n' +
            '\n' +
            'После этого мне было поручено разрабатывать проекты на React, используя как классический компонентный, так и функциональный подход. В процессе работы я часто использовал RTK Query и Zustand для управления состоянием, что дало мне возможность создавать более эффективные и отзывчивые приложения.',
        description_ky: 'Фронтэнд разработчик катары мен Angular\'да жазылган легаси код менен иштедим, анда TypeScript жана RxJS менен тааныштым. Бул тажрыйба мага башкалардын кодун окуу жана түшүнүү боюнча жөндөмдөрүмдү жакшыртууга, ошондой эле чоң колдонмолордун архитектурасын долбоорлоону өнүктүрүүгө мүмкүнчүлүк берди. Мен бар болгон чечимдерди натыйжалуу талдоо жана коддун сапатын жакшыртуу үчүн мыкты практикаларды колдонууга үйрөндүм.\n' +
            '\n' +
            'Андан кийин мен React’те долбоорлорду иштеп чыгуу боюнча тапшырма алдым, классикалык компоненттик жана функционалдык жакындыкты колдонуп. Бул процесс учурунда мен көп учурда RTK Query жана Zustand\'ды абалды башкаруу үчүн колдонуп, натыйжалуу жана жооп берүүчү колдонмолорду түзүүгө мүмкүнчүлүк алдым.',
        tags:['Angular', 'React.js',  'Ant Design', 'RTK', 'Zustand'],
        period_en: 'May 2021 - July 2024',
        period_ru: 'Май 2021 - Июль 2024',
        period_ky: 'Бугу 2021 - Теке 2024',
        link:'https://beeline.kg'
    },

    {
        id: 4,
        key: '4',
        name_en: 'Center for Digital Education under the MINISTRY OF EDUCATION AND SCIENCE OF THE KYRGYZ REPUBLIC (Front-end )',
        name_ru: 'Центр цифрового образования при Министерства образования и науки Кыргызской Республики (Front-end )',
        name_ky: 'КЫРГЫЗ РЕСПУБЛИКАСЫНЫН БИЛИМ ЖАНА Илим министрлигине караштуу Санариптик билим берүү борбору (Front-end )',
        description_en: 'I began actively working with TypeScript and focusing more on FSD architecture. All projects were developed using React, and we used Jotai as the state manager. Occasionally, I also worked on projects using Next.js for server-side rendering (SSR). In these projects, we utilized NextAuth, which is very convenient for authentication and session management, as well as for integrating with various services such as Google, Facebook, GitHub, and others.',
        description_ru: 'Я начал активно работать с TypeScript и уделять больше внимания FSD-архитектуре. Все проекты были написаны на React, а в качестве менеджера состояния использовался Jotai. Также иногда мне приходилось разрабатывать проекты на Next.js для серверного рендеринга (SSR). В этих проектах мы использовали NextAuth, который очень удобен для авторизации и работы с сессиями, а также интеграции с различными сервисами, такими как Google, Facebook, GitHub и другими.',
        description_ky: 'Мен TypeScript менен активдүү иштеп, FSD архитектурасына көбүрөөк көңүл бура баштадым. Бардык долбоорлор React колдонуп иштелип чыккан, ал эми абал менеджери катары Jotai колдонулду. Айрым учурда Next.js колдонуп сервердик рендеринг (SSR) үчүн долбоорлорду да иштеп чыктым. Бул долбоорлордо авторизация жана сессияларды башкаруу, ошондой эле Google, Facebook, GitHub жана башка кызматтар менен интеграциялоо үчүн NextAuth\'ты колдондук, ал абдан ыңгайлуу.',
        tags:['React', 'Next',  'Jotai', 'NextAuth', 'Ant Design'],
        period_en: 'July 2024 - Present',
        period_ru: 'Июль 2024 - По настоящее',
        period_ky: 'Теке 2024 - Бүгүнкү күнгө чейин',
        link:'https://www.facebook.com/p/%D0%A6%D0%B5%D0%BD%D1%82%D1%80-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%9C%D0%9E%D0%9D-%D0%9A%D0%A0-61557189320409/?_rdr'
    },
]