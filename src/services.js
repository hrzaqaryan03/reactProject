export const servicesData = [
  {
    id: 1,
    title: "Индивидуальная терапия",
    text: "Индивидуальные консультации:",
    desc: "Обычно от 50 минут до 1,5 часов.",
    price: "$100",
  },
  {
    id: 2,
    title: "Групповая терапия",
    text: "Групповые консультации:",
    desc: "Обычно от 1 до 2 часов.",
    price: "$80",
  },
  {
    id: 3,
    title: "Терапия для пар",
    text: "Консультации для пар:",
    desc: "Обычно от 1 до 1,5 часов.",
    price: "$90",
  },
  {
    id: 4,
    title: "Кризисное консультирование",
    text: "Кризисное консультирование",
    desc: "Обычно от 1 до 2 часов.",
    price: "$70",
  },
];

export const therapyData = [
  {
    id: 1,
    title: "Индивидуальная терапия",
    desc: "работа над личными проблемами, стрессом, самооценкой",
    price: "60 минут — $100",
  },
  {
    id: 2,
    title: "Групповая терапия",
    desc: "поддержка и развитие навыков в группе",
    price: "60 минут — $80",
  },
  {
    id: 3,
    title: "Терапия для пар",
    desc: "помощь в разрешении конфликтов, улучшение отношений",
    price: "60 минут — $90",
  },
  {
    id: 4,
    title: "Кризисное консультирование",
    desc: "экстренная помощь в трудных ситуациях",
    price: "60 минут — $70",
  },
];

export const singleTherapyData = [
  {
    id: 1,
    title: "Индивидуальная терапия",
    description: "Индивидуальная терапия — это личная встреча, где мы будем работать над вашими конкретными проблемами и целями. Это пространство для того, чтобы обсудить ваши переживания, получить поддержку и найти пути решения сложных вопросов, с которыми вы сталкиваетесь.",
    processTitle: "Как проходит терапия?",
    processDetails: [
      {
        stepTitle: "Первичная оценка:",
        stepDescription: "На первой встрече мы обсудим ваши основные проблемы, цели и ожидания. Это поможет мне лучше понять вашу ситуацию и определить подходящий метод работы."
      },
      {
        stepTitle: "Работа над проблемами:",
        stepDescription: "В дальнейшем мы будем работать над теми вопросами, которые для вас наиболее актуальны. Это может включать в себя обсуждение событий, эмоций и практические упражнения."
      },
      {
        stepTitle: "Подведение итогов:",
        stepDescription: "В конце каждой консультации мы будем подводить итоги и планировать дальнейшие шаги."
      }
    ],
    helpTitle: "Чем я могу вам помочь?",
    helpList: [
      "Психологическая поддержка в трудные моменты.",
      "Преодоление стресса и тревожности.",
      "Работа над межличностными отношениями и личностным развитием.",
      "Помощь в решении проблем, связанных с самооценкой и внутренними конфликтами."
    ],
    bookingTitle: "Как записаться на терапию?",
    bookingInfo: "Вы можете записаться на индивидуальную консультацию, связавшись со мной через контактную форму на сайте или по телефону. Доступны как очные встречи, так и онлайн-консультации.",
    pricingTitle: "Стоимость консультаций",
    pricingDetails: [
      "Первичная консультация: 60 минут — $100",
      "Последующие сессии: [укажите стоимость]"
    ],
  }, 
  {
    id: 2,
    title: "Терапия для пар",
    description: "Терапия для пар — это специальная форма психотерапии, предназначенная для работы над отношениями между партнерами. Эта форма терапии помогает парам разобраться в их проблемах, улучшить коммуникацию и укрепить связь.",
    processTitle: "Как проходит терапия для пар?",
    processDetails: [
      {
        stepTitle: "Первичная оценка:",
        stepDescription: "На первой встрече мы обсудим основные проблемы и цели вашей пары. Это поможет мне понять динамику ваших отношений и выявить ключевые проблемы."
      },
      {
        stepTitle: "Работа над проблемами:",
        stepDescription: "В последующих сессиях мы будем работать над конкретными вопросами, такими как конфликты, недопонимания или эмоциональная дистанция. Мы будем использовать различные методы и техники для улучшения взаимодействия и решения проблем."
      },
      {
        stepTitle: "Подведение итогов:",
        stepDescription: "В конце каждой сессии мы будем подводить итоги и планировать дальнейшие шаги. Мы также будем оценивать прогресс и вносить необходимые коррективы в план работы."
      }
    ],
    helpTitle: "Чем терапия для пар может помочь?",
    helpList: [
      "Улучшение коммуникации и понимания между партнерами.",
      "Решение конфликтов и снижение уровня стресса в отношениях.",
      "Повышение эмоциональной близости и удовлетворенности в паре.",
      "Работа над восстановлением доверия и укреплением связи."
    ],
    bookingTitle: "Как записаться на терапию для пар?",
    bookingInfo: "Записаться на терапию можно через контактную форму на сайте или по телефону. Доступны как очные встречи, так и онлайн-сессии.",
    pricingTitle: "Стоимость консультаций",
    pricingDetails: [
      "Первичная консультация: 60 минут — $90",
      "Последующие сессии: [укажите стоимость]"
    ],
  },
  {
    id: 3,
    title: "Групповая терапия",
    description: "Description coming soon.",
    processTitle: "Therapy Process",
    processDetails: [{ stepTitle: "Step", stepDescription: "Details coming soon." }],
   
    helpTitle: "How Group Therapy Can Help",
    helpList: ["Benefits coming soon."],
    bookingTitle: "How to Book Group Therapy",
    bookingInfo: "Booking info coming soon.",
    pricingTitle: "Pricing",
    pricingDetails: ["Contact for pricing details."],
  },
  {
    id: 4,
    title: "Кризисное консультирование",
    description: "Description coming soon.",
    processTitle: "Therapy Process",
    processDetails: [{ stepTitle: "Step", stepDescription: "Details coming soon." }],
    helpTitle: "How Crisis Counseling Can Help",
    helpList: ["Benefits coming soon."],
    bookingTitle: "How to Book Crisis Counseling",
    bookingInfo: "Booking info coming soon.",
    pricingTitle: "Pricing",
    pricingDetails: ["Contact for pricing details."],
  },
];
