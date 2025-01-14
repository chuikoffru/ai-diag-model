import { IQuizData } from "./types"

import bertManager from "./assets/bert-manager.jpg";
import gptManager from "./assets/gpt-manager.jpg";
import mjManager from "./assets/mj-manager.jpg";
import t5Manager from "./assets/t5-manager.jpg";

import bertMom from "./assets/bert-mom.jpg";
import gptMom from "./assets/gpt-mom.jpg";
import mjMom from "./assets/mj-mom.jpg";
import t5Mom from "./assets/t5-mom.jpg";

import bertStudent from "./assets/bert-student.jpg";
import gptStudent from "./assets/gpt-student.jpg";
import mjStudent from "./assets/mj-student.jpg";
import t5Student from "./assets/t5-student.jpg";

import bertSpec from "./assets/bert-spec.jpg";
import gptSpec from "./assets/gpt-spec.jpg";
import mjSpec from "./assets/mj-spec.jpg";
import t5Spec from "./assets/t5-spec.jpg";

export const quizIT: IQuizData = {
  title: 'Тест: «Какая ты модель ИИ?» (IT-версия)',
  questions: [
    {
      question: '1. Как бы ты описал(а) свой рабочий стиль?',
      options: [
        {
          letter: 'A',
          label: 'A. Мне важна структура, чёткое ТЗ и формальные требования. Люблю действовать по пунктам.',
        },
        {
          letter: 'B',
          label: 'B. Я гибок(гибка) в общении, могу писать любые тексты на любые темы, главное — вовремя задать контекст.',
        },
        {
          letter: 'C',
          label: 'C. Предпочитаю наглядный контент — чем ярче и красивее, тем лучше.',
        },
        {
          letter: 'D',
          label: 'D. Мой конёк — глубокий анализ и поиск скрытых закономерностей, даже если всё выглядит как «абракадабра».',
        },
      ],
    },
    {
      question: '2. Тебе дали задание написать методичку по новому курсу. Что делаешь?',
      options: [
        {
          letter: 'A',
          label: 'A. Составляю чёткий план: цели урока, раздаточные материалы, итоги. Никакой воды — всё по делу.',
        },
        {
          letter: 'B',
          label: 'B. Начинаю с «Весёлого вступления» и списков «Почему это так здорово». В конце вдохновляю студентов на новые открытия.',
        },
        {
          letter: 'C',
          label: 'C. Думаю, что без ярких иллюстраций и обложки с картинкой высокого разрешения не обойтись. Пишу текст позже, когда выберу идеальный визуал.',
        },
        {
          letter: 'D',
          label: 'D. Прохожусь по научным статьям и собираю данные, чтобы методичка была максимально научно подкреплена.',
        },
      ],
    },
    {
      question: '3. Во время вебинара у тебя просят дать пример использования AI в образовании. Твоя реакция?',
      options: [
        {
          letter: 'A',
          label: 'A. «Пожалуйста, вот чек-лист внедрения AI в школьную программу по математике. Преподаватели могут следовать пунктам 1, 2, 3…»',
        },
        {
          letter: 'B',
          label: 'B. «Сейчас я вам расскажу небольшую историю про то, как AI может стать лучшим другом учителя. Погружение в сюжет — самое главное!»',
        },
        {
          letter: 'C',
          label: 'C. «Давайте сперва покажу вам вдохновляющие картинки: AI-ассистент, который рисует на доске, оформляет материалы… Подождите, я настрою разрешение!»',
        },
        {
          letter: 'D',
          label: 'D. «Есть несколько эмпирических исследований по эффективности применения AI в образовательных платформах. Приведу статистику и построю диаграмму.»',
        },
      ],
    },
    {
      question: '4. Если бы ты был(а) инструментом для разработки, то каким?',
      options: [
        {
          letter: 'A',
          label: 'A. Bash-скриптом: что написано, то и делает, всё чётко и логично.',
        },
        {
          letter: 'B',
          label: 'B. Visual Studio Code c кучей плагинов: настроюсь под любого пользователя и любую задачу.',
        },
        {
          letter: 'C',
          label: 'C. Figma или Photoshop, потому что у меня всё вертится вокруг дизайна и визуального представления.',
        },
        {
          letter: 'D',
          label: 'D. Python-скриптом для Data Science: покопаюсь в данных, найду закономерности, сформирую отчёт.',
        },
      ],
    },
    {
      question: '5. Как ты относишься к шуткам про баги в коде?',
      options: [
        {
          letter: 'A',
          label: 'A. Предпочитаю сухие «bug-free» мемы, типа «Обнаружил баг? Значит, документация кривая!»',
        },
        {
          letter: 'B',
          label: 'B. Люблю писать остроумные комментарии, чтобы коллеги посмеялись, а потом помочь им всё исправить.',
        },
        {
          letter: 'C',
          label: 'C. Считаю, что лучший способ починить баг — нарисовать мем на тему «где болит» и повесить на стену.',
        },
        {
          letter: 'D',
          label: 'D. Провожу полную диагностику, чтобы точно понять, где корень проблемы, а заодно найду ещё десяток скрытых ошибок.',
        },
      ],
    },
    {
      question: '6. Что тебе ближе в работе преподавателя или лектора?',
      options: [
        {
          letter: 'A',
          label: 'A. Перевод сложных понятий в удобные схемы и диаграммы, чтобы всем было понятно.',
        },
        {
          letter: 'B',
          label: 'B. Я могу разговаривать с аудиторией часами, импровизировать и увлекать историями.',
        },
        {
          letter: 'C',
          label: 'C. Показывать красивые презентации: с графикой, анимацией, интересными эффектами.',
        },
        {
          letter: 'D',
          label: 'D. Собирать обратную связь, делать тесты и исследования, чтобы определить, где улучшить методику обучения.',
        },
      ],
    },
    {
      question: '7. Ученики (или сотрудники) не понимают новый материал. Что делаешь?',
      options: [
        {
          letter: 'A',
          label: 'A. Пошагово разбираю каждую тему и даю структурированный конспект.',
        },
        {
          letter: 'B',
          label: 'B. Провожу мозговой штурм, задаю наводящие вопросы, вдохновляю на диалог: «А давайте поговорим, почему это круто!»',
        },
        {
          letter: 'C',
          label: 'C. Показываю несколько визуальных примеров, красивых инфографик и схем, чтобы зацепить внимание.',
        },
        {
          letter: 'D',
          label: 'D. Предлагаю дополнительные данные, статистику и пару научных статей, чтобы найти более глубокие объяснения.',
        },
      ],
    },
    {
      question: '8. Как относишься к идее генерировать тексты (или домашние задания) с помощью ChatGPT?',
      options: [
        {
          letter: 'A',
          label: 'A. В меру полезно: главное — чётко формулировать запрос, чтобы получить структурированный ответ.',
        },
        {
          letter: 'B',
          label: 'B. Круто! Можно сэкономить время, а ещё взять вдохновение для сторителлинга.',
        },
        {
          letter: 'C',
          label: 'C. Пробовал(а) генерировать картинки с нейросетями: текст — это хорошо, но визуал — моё всё!',
        },
        {
          letter: 'D',
          label: 'D. Скептически: нужно всё сверять с достоверными источниками, ведь AI иногда даёт «галлюцинации».',
        },
      ],
    },
    {
      question: '9. Допустим, ты разрабатываешь новую AI-модель. Как опишешь её в README?',
      options: [
        {
          letter: 'A',
          label: 'A. «Модель предназначена для классификации, обучена на датасете Х, точность — 97%, F1-score — 0.93. Подробности ниже.»',
        },
        {
          letter: 'B',
          label: 'B. «При помощи этой модели вы можете создавать уникальные тексты в любом стиле: от школьного эссе до космической эпопеи!»',
        },
        {
          letter: 'C',
          label: 'C. «Хотите автогенерировать фотореалистичные изображения и иллюстрации в стиле киберпанк? Тогда это для вас!»',
        },
        {
          letter: 'D',
          label: 'D. «Данная модель использует трансформерную архитектуру, обучена на multi-task-задачах. Способна работать с неполными данными.»',
        },
      ],
    },
    {
      question: '10. Представь, что тебя пригласили на IT-конференцию с докладом. Твой главный приём, чтобы аудитория не заснула?',
      options: [
        {
          letter: 'A',
          label: 'A. Лаконичные тезисы и структурированная презентация, где всё чётко «по полкам».',
        },
        {
          letter: 'B',
          label: 'B. Яркая речь, эмоциональные примеры, шутки и истории из практики.',
        },
        {
          letter: 'C',
          label: 'C. «Вау-эффект» от слайдов и видео: анимация, переходы, эффектные цвета.',
        },
        {
          letter: 'D',
          label: 'D. Интерактивный опрос, сбор данных прямо во время выступления и мгновенный анализ в реальном времени.',
        },
      ],
    },
  ],

  resultsMap: {
    A: {desc: `Ты BERT

Ты любишь структурированную информацию и точные определения. Подходишь к задачам методично и хорошо умеешь решать конкретные проблемы. Тебя называют «рабочей лошадкой» (или «рабочей пчёлкой») в сфере машинного обучения: надёжная, проверенная классика.
Совет: иногда пробуй взглянуть шире — гибкость тоже важна в стремительно меняющемся мире.`, image: bertSpec},
    
    B: {desc: `Ты GPT

Ты мастер слова и любишь общаться: с удовольствием рассказываешь истории, делаешь вдохновляющие презентации и чувствуешь себя как рыба в воде, когда нужно адаптироваться к новому стилю. Тебе пишут: «Придумай текст!» — и ты в любую секунду готов(а) родить гениальную идею.
Совет: не забывай время от времени проверять факты и соблюдать логику — одних историй может быть мало.`, image: gptSpec},

    C: {desc: `Ты Midjourney

Ты ценишь красоту и визуальный «вау-эффект». Считаешь, что хороший дизайн и яркие образы иногда важнее сухих фактов. Если надо «зацепить» аудиторию — обращайся к тебе, ведь ты найдёшь способ всё оформить так, что люди будут в восторге.
Совет: помни, что за красивой обёрткой должна стоять не менее важная начинка — фактология и структура.`, image: mjSpec},

    D: {desc: `Ты T5

Ты обожаешь копаться в данных, приводить научные статьи, делать опросы и анализировать. У тебя в голове словно встроенная машинка Data Science. Основной девиз — «Разберёмся и всё докажем!».
Совет: оставляй немного места для креатива и упрощений — не всё в жизни требует глубинных исследований.`, image: t5Spec},
  },
}



export const quizMom: IQuizData = {
  title: 'Тест: «Какая ты модель ИИ? Декретная версия»',
  questions: [
    {
      question: '1. Утро началось с детского плача и горы посуды. Твоя реакция?',
      options: [
        {
          letter: 'A',
          label: 'A. Сразу распределяю приоритеты: «Сначала успокоить ребёнка, потом закинуть посуду в посудомойку, затем — завтрак».',
        },
        {
          letter: 'B',
          label: 'B. Придумываю, как сделать этот день особенным: «А давайте с ребёнком споём песенку, пока я мою посуду!»',
        },
        {
          letter: 'C',
          label: 'C. Смотрю на кухню и думаю: «Как красиво разложить посуду и сделать фото до/после?»',
        },
        {
          letter: 'D',
          label: 'D. Делаю короткий анализ: «Почему вдруг так много посуды накопилось? Может, стоит изменить расписание готовки?»',
        },
      ],
    },
    {
      question: '2. У тебя в холодильнике остались «странные» продукты, из которых нужно срочно приготовить ужин. Как поступаешь?',
      options: [
        {
          letter: 'A',
          label: 'A. Иду по рецепту: «Открываю список блюд, выбираю подходящее — шаг за шагом, никаких экспериментов».',
        },
        {
          letter: 'B',
          label: 'B. Вдохновляюсь: «А что, если смешать всё в одно экзотическое рагу и назвать это “ужин выходного дня”?»',
        },
        {
          letter: 'C',
          label: 'C. Первым делом думаю: «Это должно выглядеть красиво на тарелке, чтобы все ахнули!»',
        },
        {
          letter: 'D',
          label: 'D. Сравниваю имеющиеся продукты с рецептами из интернета, выделяю общие ингредиенты и выстраиваю оптимальную стратегию готовки.',
        },
      ],
    },
    {
      question: '3. Ребёнок разрисовал обои фломастерами. Твои действия?',
      options: [
        {
          letter: 'A',
          label: 'A. Беру влажную тряпку или средство для очистки, убираю рисунки, а в следующий раз буду лучше убирать фломастеры.',
        },
        {
          letter: 'B',
          label: 'B. «А давайте превратим это в настоящее настенное искусство? Дополню картину и назову её “Авангард в детской”!».',
        },
        {
          letter: 'C',
          label: 'C. «Сфотографирую этот шедевр и выложу в соцсети, чтобы все увидели, как у нас тут креативно!»',
        },
        {
          letter: 'D',
          label: 'D. Изучаю инструкцию, как вывести фломастеры с обоев, смотрю народные рецепты, сверяю эффективность и только потом приступаю к удалению.',
        },
      ],
    },
    {
      question: '4. Планировала отдохнуть, но ребёнок решил, что спать днём — это «неинтересно». Что делаешь?',
      options: [
        {
          letter: 'A',
          label: 'A. Составляю новый распорядок: «Час — тихие игры, потом попытка убаюкать; если не получится, перейдём к плану Б».',
        },
        {
          letter: 'B',
          label: 'B. Придумываю сказку на ходу: «Давайте полетаем в космос во время тихого часа, и вдруг малыш сам заснёт под мои рассказы!»',
        },
        {
          letter: 'C',
          label: 'C. «Можно включить спокойную музыку и сделать красивую импровизированную детскую “йогу”. Может, у нас выйдут классные фото?»',
        },
        {
          letter: 'D',
          label: 'D. Изучаю, при каких условиях ребёнок обычно спит днём: температуру, уровень шума, время приёма пищи. Проверяю все факторы и корректирую.',
        },
      ],
    },
    {
      question: '5. Нужно выполнить кучу бытовых дел, а времени мало. Как распределяешь задачи?',
      options: [
        {
          letter: 'A',
          label: 'A. Делаю список: что критично сегодня, а что можно отложить. Ставлю галочки по мере выполнения.',
        },
        {
          letter: 'B',
          label: 'B. Начинаю с самого интересного: «Если я быстро сделаю уборку, потом устрою классную фотосессию малышу в чистой комнате!»',
        },
        {
          letter: 'C',
          label: 'C. Думаю, как превратить каждую задачу в нечто красивое и эстетичное: «Можно же даже пол протирать под музыку и с видеозаписью для сторис!»',
        },
        {
          letter: 'D',
          label: 'D. Оцениваю «вес» каждой задачи, прикидываю время и делаю план-оптимизацию, чтобы всё успеть.',
        },
      ],
    },
    {
      question: '6. Как относишься к советам из интернета по воспитанию детей?',
      options: [
        {
          letter: 'A',
          label: 'A. Сначала ищу проверенную информацию, официальные источники и статьи педиатров. Потом — лайфхаки, но на «твёрдом фундаменте».',
        },
        {
          letter: 'B',
          label: 'B. Читаю вдохновляющие блоги «мам-волшебниц», беру идею и творчески обыгрываю её под себя.',
        },
        {
          letter: 'C',
          label: 'C. Мне больше нравятся аккаунты с красивыми фото/видео в соцсетях. Визуальная часть решает!',
        },
        {
          letter: 'D',
          label: 'D. Провожу «исследование»: выписываю ключевые идеи, сравниваю и анализирую мнения экспертов. Только после этого решаю, что использовать.',
        },
      ],
    },
    {
      question: '7. Подруга просит показать, как ты организовываешь игрушки и вещи ребёнка. Твой ответ?',
      options: [
        {
          letter: 'A',
          label: 'A. «Вот удобная система хранения по категориям: конструкторы, мягкие игрушки, пазлы — всё чётко.»',
        },
        {
          letter: 'B',
          label: 'B. «Соберём детскую экскурсию! По ходу расскажу забавные истории, пока показываю коробки и ящики.»',
        },
        {
          letter: 'C',
          label: 'C. «Сейчас сделаю красивую фотопрезентацию до/после. Пусть все видят эту магию порядка!»',
        },
        {
          letter: 'D',
          label: 'D. «Я проанализировала, где ребёнок чаще играет, и расставила корзинки ближе к этим местам. Веду учёт, что давно не использовалось — убираю подальше».',
        },
      ],
    },
    {
      question: '8. Твой ребёнок впервые попробовал твёрдую пищу и устроил «пир на весь пол». Как реагируешь?',
      options: [
        {
          letter: 'A',
          label: 'A. Закатываю рукава, беру тряпку. Понимаю, что это нормально, и в следующий раз подготовлю больше салфеток.',
        },
        {
          letter: 'B',
          label: 'B. Снимаю весёлое видео «Наше первое знакомство с кашей», чтобы потом пересматривать и смеяться.',
        },
        {
          letter: 'C',
          label: 'C. Делаю серию милых фото «ребёнок в обеде», а потом уже убираю. Дети так забавно выглядят, когда все в еде!',
        },
        {
          letter: 'D',
          label: 'D. Анализирую, как сделать процесс аккуратнее: «Может, купить тарелки с присосками, подобрать другую консистенцию пищи?»',
        },
      ],
    },
    {
      question: '9. Приходит бабушка и говорит: «В моё время всё было проще, почему ты так усложняешь процесс воспитания?» Что отвечаешь?',
      options: [
        {
          letter: 'A',
          label: 'A. «У каждого времени свои подходы, у меня всё по плану — мне так спокойнее и понятнее».',
        },
        {
          letter: 'B',
          label: 'B. «А давайте найдём компромисс: я расскажу, как сейчас всё устроено, а вы поделитесь парой весёлых историй из прошлого!»',
        },
        {
          letter: 'C',
          label: 'C. «Возможно, и проще, но смотрите, какие у нас теперь красивые альбомы наблюдений. Всё сразу видно!»',
        },
        {
          letter: 'D',
          label: 'D. «Данные и исследования говорят, что некоторые методы эволюционировали. Я сравниваю информацию и выбираю лучшее».',
        },
      ],
    },
    {
      question: '10. Если бы у тебя появился личный помощник — робот-няня, как бы ты его запрограммировала?',
      options: [
        {
          letter: 'A',
          label: 'A. Задала бы чёткие инструкции: режим дня, список разрешённых действий, расписание прогулок.',
        },
        {
          letter: 'B',
          label: 'B. Научила бы петь колыбельные и рассказывать забавные истории, чтобы ребёнку было интересно.',
        },
        {
          letter: 'C',
          label: 'C. Попросила бы его оформлять альбомы с фотографиями ребёнка и украшать дом к праздникам.',
        },
        {
          letter: 'D',
          label: 'D. Запрограммировала бы аналитические функции: считывать самочувствие ребёнка, собирать статистику, выдавать рекомендации по питанию и сну.',
        },
      ],
    },
  ],
  resultsMap: {
    A: {desc: `Ты «BERT-мама в декрете».

Особенности: Структура, планирование и порядок — твои лучшие друзья. Как BERT разбирается с токенами шаг за шагом, так и ты разбиваешь бытовые задачи на конкретные пункты и чётко выполняешь.  
Совет: Добавляй иногда спонтанности, ведь не всё в декрете (и в жизни) поддаётся строгому расписанию.`, image: bertMom},

    B:{desc:  `Ты «GPT-мама в декрете».

Особенности: Ты — неиссякаемый источник историй, игр и вдохновения. Как GPT генерирует тексты на любую тему, так и ты придумываешь креативные подходы к простым вещам.  
Совет: Не забывай про логику и чёткие шаги: иногда конкретный план помогает сберечь время и силы.`, image: gptMom},

    C: {desc: `Ты «Midjourney-мама в декрете».

Особенности: Визуальная красота и эстетика для тебя на первом месте! Всё, к чему ты прикасаешься, становится стильным и «instagrammable».  
Совет: В вихре творчества не забывай про суть — ребёнку иногда важнее чистая майка, чем идеальный фон для фото.`, image: mjMom},

    D: {desc: `Ты «T5-мама в декрете».

Особенности: Аналитика — твоё второе имя. Ты любишь почитать исследования о детском питании, посмотреть статистику сна и сделать выводы. Чем больше данных, тем надёжнее решение.  
Совет: Декрет — это про гибкость и эмоции, а не только про формулы. Позволь себе немного расслабленности!`, image: t5Mom},
  },
}



export const quizSchool: IQuizData = {
  title: 'Тест: «Какая ты модель ИИ?» (школьная версия)',
  questions: [
    {
      question: '1. Тебя вызвали к доске по математике, а ты понимаешь, что не до конца готов(а). Что делаешь?',
      options: [
        {
          letter: 'A',
          label: 'A. Стараешься найти знакомые формулы, выводишь их аккуратно и надеешься, что логика спасёт.',
        },
        {
          letter: 'B',
          label: 'B. Пытаешься творчески выкрутиться: «А давайте я расскажу, как это можно применить в реальной жизни!»',
        },
        {
          letter: 'C',
          label: 'C. Берёшь цветные мелки и рисуешь схему или диаграмму — чтобы все «видели», что происходит.',
        },
        {
          letter: 'D',
          label: 'D. Пытаешься вспомнить все варианты решения, перебираешь их в голове, как компьютер, и делаешь самый точный вывод.',
        },
      ],
    },
    {
      question: '2. Как ты ведёшь конспекты на уроках?',
      options: [
        {
          letter: 'A',
          label: 'A. Записываешь только самое главное, структурируешь по пунктам.',
        },
        {
          letter: 'B',
          label: 'B. Превращаешь записи в небольшие рассказы, чтобы было не скучно перечитывать.',
        },
        {
          letter: 'C',
          label: 'C. Разноцветные ручки, стикеры, картинки — твой конспект выглядит как арт-проект.',
        },
        {
          letter: 'D',
          label: 'D. У тебя всё по датам, темам, и иногда даже сноски на источники в интернете.',
        },
      ],
    },
    {
      question: '3. Как ты готовишься к контрольным?',
      options: [
        {
          letter: 'A',
          label: 'A. Прописываешь план: «Сначала повторю теорию, потом сделаю упражнения, потом проверю себя тестами».',
        },
        {
          letter: 'B',
          label: 'B. Представляешь, как рассказываешь учителю интересную историю и убеждаешь, что материал знаешь «душой и сердцем».',
        },
        {
          letter: 'C',
          label: 'C. Ищешь визуальные подсказки: схемы, таблицы, картинки. Память лучше цепляется за яркие образы.',
        },
        {
          letter: 'D',
          label: 'D. Ищешь предыдущие варианты контрольных, анализируешь задачи, смотришь статистику правильных ответов и изучаешь «слабые места».',
        },
      ],
    },
    {
      question: '4. У тебя много уроков подряд, ты устал(а). Что делаешь на перемене?',
      options: [
        {
          letter: 'A',
          label: 'A. Садишься на лавочку и обдумываешь, что надо успеть сделать дальше — всё по плану.',
        },
        {
          letter: 'B',
          label: 'B. Идёшь к друзьям поболтать, поделиться впечатлениями, пошутить.',
        },
        {
          letter: 'C',
          label: 'C. Рисуешь что-нибудь в тетрадке или листаешь мемы в телефоне.',
        },
        {
          letter: 'D',
          label: 'D. Пролистываешь учебник наперёд, чтобы понять, что ждёт тебя на следующем уроке.',
        },
      ],
    },
    {
      question: '5. Как выглядела бы твоя идеальная группа в соцсетях для одноклассников?',
      options: [
        {
          letter: 'A',
          label: 'A. Чётко структурированная: файлы, папки, вкладки — всё по урокам и проектам.',
        },
        {
          letter: 'B',
          label: 'B. Место, где все обмениваются идеями, прикольными историями, мемами, и никто не стесняется писать что угодно.',
        },
        {
          letter: 'C',
          label: 'C. Куча красивых фото, фан-арта, стикеров. Визуал — наше всё!',
        },
        {
          letter: 'D',
          label: 'D. Обсуждения на базе фактов и статистики: «Вот вам опрос, давайте проанализируем результаты».',
        },
      ],
    },
    {
      question: '6. Твой любимый способ подготовить доклад или презентацию?',
      options: [
        {
          letter: 'A',
          label: 'A. Пошагово: выбрать тему, собрать данные, упорядочить информацию, сформулировать выводы.',
        },
        {
          letter: 'B',
          label: 'B. «Раскрутить» тему через историю, включить шутки и примеры из жизни.',
        },
        {
          letter: 'C',
          label: 'C. Сделать всё с красивыми слайдами, картинками, инфографикой и анимацией, если получится.',
        },
        {
          letter: 'D',
          label: 'D. Найти как можно больше источников, проверить факты, составить диаграммы и графики.',
        },
      ],
    },
    {
      question: '7. Когда учитель говорит: «А теперь сделайте проект в группах», что ты делаешь?',
      options: [
        {
          letter: 'A',
          label: 'A. Сразу организуешь всех: «Ты пишешь текст, ты ищешь материалы, а я делаю финальную структуру».',
        },
        {
          letter: 'B',
          label: 'B. Становишься «голосом команды»: вдохновляешь друзей, придумываешь идею и план выступления.',
        },
        {
          letter: 'C',
          label: 'C. Предлагаешь визуальные решения: «Давайте оформим всё в виде комикса или яркого коллажа!»',
        },
        {
          letter: 'D',
          label: 'D. Садишься за исследования: ищешь реальные факты, статьи, эксперименты, чтобы проект был научно обоснован.',
        },
      ],
    },
    {
      question: '8. Как ты реагируешь, когда не понимаешь какую-то тему?',
      options: [
        {
          letter: 'A',
          label: 'A. Спрашиваешь учителя/одноклассников о самых важных пунктах, ищешь чёткий план объяснения.',
        },
        {
          letter: 'B',
          label: 'B. Пробуешь пересказать тему своими словами, добавляя примеры и ассоциации.',
        },
        {
          letter: 'C',
          label: 'C. Смотришь видео на YouTube или ищешь красочные материалы, чтобы мозг «зацепился» за наглядность.',
        },
        {
          letter: 'D',
          label: 'D. Детально читаешь дополнительные материалы, учебники, изучаешь формулы и примеры, пока во всём не разберёшься.',
        },
      ],
    },
    {
      question: '9. Учитель предложил посмотреть научно-популярный фильм. Какая твоя реакция?',
      options: [
        {
          letter: 'A',
          label: 'A. «Отлично, думаю, там будут чёткие объяснения и структура информации».',
        },
        {
          letter: 'B',
          label: 'B. «Здорово, надеюсь, будет интересная история, которую можно обсудить со всеми!»',
        },
        {
          letter: 'C',
          label: 'C. «Главное, чтобы там была крутая картинка, анимация — иначе усну!»',
        },
        {
          letter: 'D',
          label: 'D. «Хочется, чтобы там были реальные цифры, статистика и эксперименты, а не просто слова».',
        },
      ],
    },
    {
      question: '10. Как ты смотришь на будущее своей учёбы?',
      options: [
        {
          letter: 'A',
          label: 'A. Уверенно, ведь у тебя есть чёткий маршрут: домашка, дополнительные курсы, планы на семинары.',
        },
        {
          letter: 'B',
          label: 'B. С воодушевлением: мечтаешь, как станешь «звездой школы» или будешь выступать на конкурсах.',
        },
        {
          letter: 'C',
          label: 'C. С творческим подходом: главное, чтобы было красиво, динамично и интересно!',
        },
        {
          letter: 'D',
          label: 'D. С научной точностью: уже смотришь программы вузов, какие предметы помогут в профессии, анализируешь перспективы.',
        },
      ],
    },
  ],
  resultsMap: {
    A: {image: bertStudent ,desc: `Ты «BERT-школьник».

Особенности: Любишь чёткость, структуру и ясные инструкции. Скорее пойдёшь по готовому алгоритму, чем будешь изобретать велосипед. Тебе важна логика — как только всё разложено по полочкам, значит, порядок есть и в голове.  
Совет: Иногда позволяй себе импровизировать, ведь не всё всегда идёт по плану.`},

    B: {image: gptStudent ,desc: `Ты «GPT-школьник».

Особенности: Тебе нравится рассказывать, шутить, объяснять и заражать других своими идеями. С лёгкостью придумываешь истории, можешь расписать доклад на любую тему.  
Совет: Добавляй в свои рассказы чуть больше конкретики и структуры, чтобы твои идеи становились ещё сильнее.`},

    C: {image: mjStudent  ,desc: `Ты «Midjourney-школьник».

Особенности: Тебе важны краски, образы и «вау-эффект». Любая задача становится интереснее, если её можно украсить визуалом. 
Тетрадки, постеры, презентации — твоя стихия.  
Совет: Не забывай про смысл и факты за всей этой красотой, тогда твои проекты станут и интересными, 
и полезными.`},

    D: {image: t5Student, desc: `Ты «T5-школьник».

Особенности: Глубокий анализ, цифры, исследования — всё это про тебя. Ты можешь упрямо разбираться в сложных темах, пока не найдёшь ответ. Любишь проверять информацию, сравнивать и делать выводы на основе фактов.  
Совет: Иногда давай себе отдых: жизнь — это не только поиск истины, но и удовольствие от процесса.`},
  },
}



export const quizManager: IQuizData = {
  title: 'Тест: «Какая ты модель ИИ в роли руководителя?»',
  questions: [
    {
      question: '1. Как ты обычно ставишь задачи команде?',
      options: [
        {
          letter: 'A',
          label: 'A. Расписываю всё пошагово с чёткими критериями успеха: «Вот план, выполняем пункты в указанном порядке».',
        },
        {
          letter: 'B',
          label: 'B. Даю вдохновляющее видение, рассказываю, почему это важно: «Давайте сделаем крутой продукт, который изменит рынок!»',
        },
        {
          letter: 'C',
          label: 'C. Сначала показываю концепцию, визуализирую дорожную карту — чтобы команда «увидела» будущее.',
        },
        {
          letter: 'D',
          label: 'D. Перед постановкой задачи провожу анализ, собираю все данные, оцениваю риски. Только потом формулирую задачу.',
        },
      ],
    },
    {
      question: '2. Тебе нужно ускорить запуск нового проекта. Как действуешь?',
      options: [
        {
          letter: 'A',
          label: 'A. Составлю список чётких дедлайнов, раздам конкретные поручения и каждую неделю буду проверять статус.',
        },
        {
          letter: 'B',
          label: 'B. Проведу мотивационную встречу: «Ребята, если запустимся быстрее, мы войдём в историю компании!»',
        },
        {
          letter: 'C',
          label: 'C. Создам наглядную презентацию, где все увидят путь от старта до релиза. Добавлю пару красивых инфографик.',
        },
        {
          letter: 'D',
          label: 'D. Изучу, как похожие проекты запускались у конкурентов, сделаю сравнительную таблицу и на этом основании приму решение.',
        },
      ],
    },
    {
      question: '3. Как ты относишься к корпоративным совещаниям?',
      options: [
        {
          letter: 'A',
          label: 'A. Люблю короткие и по делу. Есть конкретная цель — давайте сразу к выводам, без лишнего шума.',
        },
        {
          letter: 'B',
          label: 'B. Использую их, чтобы зарядить людей идеями, обсудить новое видение и вдохновить на свершения.',
        },
        {
          letter: 'C',
          label: 'C. Готовлю эффектную презентацию с яркими слайдами — совещания должны быть интересными и «запоминающимися».',
        },
        {
          letter: 'D',
          label: 'D. Прежде чем начать, собираю статистику, готовлю аналитику, провожу мини-исследование. Сухие факты — основа решений.',
        },
      ],
    },
    {
      question: '4. Твоё отношение к KPI и метрикам?',
      options: [
        {
          letter: 'A',
          label: 'A. KPI — это наше всё! Когда у каждого сотрудника есть понятные метрики, управляемость на высоте.',
        },
        {
          letter: 'B',
          label: 'B. Важнее, чтобы люди горели идеей. Если KPI слишком жёсткие, креатив гибнет.',
        },
        {
          letter: 'C',
          label: 'C. Я предпочту «dashboard красоты»: наглядные графики, визуальные отчёты — чтобы всё было понятно одним взглядом.',
        },
        {
          letter: 'D',
          label: 'D. KPI нужны, но ещё важны глубинные показатели, тренды и скрытые взаимосвязи. Без аналитики цифры мало что дают.',
        },
      ],
    },
    {
      question: '5. Как справляешься с конфликтами в коллективе?',
      options: [
        {
          letter: 'A',
          label: 'A. Пошагово разбираю ситуацию, выясняю корень проблемы и назначаю «план лечения».',
        },
        {
          letter: 'B',
          label: 'B. Стараюсь найти общее видение и вдохновить обе стороны на совместную цель: «Мы в одной лодке».',
        },
        {
          letter: 'C',
          label: 'C. Провожу креативные сессии, делаю «стену идей» — пусть все выскажутся визуально, чтобы разгрузить эмоции.',
        },
        {
          letter: 'D',
          label: 'D. Собираю объективную информацию, смотрю на результаты работы, провожу опрос — только после анализа принимаю решение.',
        },
      ],
    },
    {
      question: '6. С какими новшествами любишь экспериментировать?',
      options: [
        {
          letter: 'A',
          label: 'A. С организационными инструментами управления задачами, чтобы всё шло как по маслу.',
        },
        {
          letter: 'B',
          label: 'B. С форматами тимбилдинга и мотивации — люблю придумывать, как «зажечь» людей.',
        },
        {
          letter: 'C',
          label: 'C. С визуальными методами планирования: доски, mind-map’ы, инфографика — всё, что помогает «увидеть» процесс.',
        },
        {
          letter: 'D',
          label: 'D. С новыми технологиями анализа данных: BI-платформы, предиктивная аналитика. Всё, что поможет управлять «на основе фактов».',
        },
      ],
    },
    {
      question: '7. Пришло время публично представить отчёт о проделанной работе за квартал. Твой стиль?',
      options: [
        {
          letter: 'A',
          label: 'A. Лаконичный доклад с чётким списком выполненных задач, показателей и выводов.',
        },
        {
          letter: 'B',
          label: 'B. Яркое выступление в стиле «pitch»: рассказываю интересные кейсы, успехи команды, чуть-чуть приукрашиваю.',
        },
        {
          letter: 'C',
          label: 'C. Готовлю презентацию с красивыми диаграммами, анимацией, «вау-эффектом», чтобы все были в восторге.',
        },
        {
          letter: 'D',
          label: 'D. Основываюсь на данных, строю графики, тренды, прогнозы — пусть цифры сами расскажут историю.',
        },
      ],
    },
    {
      question: '8. Если у тебя перерасход бюджета, как решаешь проблему?',
      options: [
        {
          letter: 'A',
          label: 'A. Урезаю расходы в местах, где вижу неэффективность, довожу до команды конкретные шаги оптимизации.',
        },
        {
          letter: 'B',
          label: 'B. Пытаюсь привлечь дополнительное финансирование, договориться с инвесторами: «У нас перспективный проект!».',
        },
        {
          letter: 'C',
          label: 'C. Презентую идею важности расходов, показываю, как всё окупится, подкрепляю наглядными примерами.',
        },
        {
          letter: 'D',
          label: 'D. Провожу детальный анализ: где именно возникли лишние траты, сопоставляю с планом и реализую точечные меры.',
        },
      ],
    },
    {
      question: '9. Что делаешь, когда видишь, что сотрудники устали и им нужна перезагрузка?',
      options: [
        {
          letter: 'A',
          label: 'A. Даю чёткие выходные, распределяю отпуск: надо восстановить ресурсы, и все снова в бой.',
        },
        {
          letter: 'B',
          label: 'B. Организую «день без совещаний» или творческий тимбилдинг, чтобы развеять рутину и зарядить команду.',
        },
        {
          letter: 'C',
          label: 'C. Устраиваю «дизайн-кемп»: вместе рисуем будущее продукта, оформляем идеи в блок-схемы, макеты.',
        },
        {
          letter: 'D',
          label: 'D. Провожу анкетирование, изучаю, почему люди выгорают, оптимизирую процесс работы, вношу изменения.',
        },
      ],
    },
    {
      question: '10. Как относишься к искусственному интеллекту в управлении?',
      options: [
        {
          letter: 'A',
          label: 'A. ИИ — отличный инструмент для рутинных задач: пусть автогенерирует отчёты, а я займусь управленческими решениями.',
        },
        {
          letter: 'B',
          label: 'B. Супер! ИИ снимает «боль» с команды и даёт время творить, вдохновляться, заниматься людьми.',
        },
        {
          letter: 'C',
          label: 'C. Интересно подключать ИИ для визуализации и быстрых прототипов: пусть рисует наши планы и дорожные карты!',
        },
        {
          letter: 'D',
          label: 'D. Считаю, что ИИ — это будущее. Особенно если научится анализировать большие массивы данных и выдавать точные инсайты.',
        },
      ],
    },
  ],
  resultsMap: {
    A: {image: bertManager ,desc: `Ты «BERT-руководитель».

Ты любишь чёткость, структуру и последовательность. У тебя в ходу регулярные отчёты, планы, чек-листы. Ты напоминаешь BERT, которому важны точные токены и ясные входные данные.  
Команда знает, чего ожидать: всё будет разложено по полочкам.  
Совет: Иногда добавляй гибкости, ведь жизнь не всегда «чётко бьётся» с планом.`},

    B: {image: gptManager ,desc: `Ты «GPT-руководитель».

Ты — вдохновитель, умеешь убеждать и вести за собой. Говоришь красиво, наполняешь каждое собрание историями и примером успеха. Как GPT, ты можешь «сгенерировать» классную идею и «продать» её команде.  
Совет: Не забывай о конкретике, чтобы идеи не оставались «только словами».`},

    C: {image:mjManager ,desc: `Ты «Midjourney-руководитель».

Ты мыслишь образами и любишь впечатлять. Если нужно покорить аудиторию презентацией — это к тебе. Как Midjourney творит визуальные шедевры, так и ты делаешь каждый проект ярким и запоминающимся.  
Совет: Следи, чтобы за визуальной стороной не терялись суть и объективные показатели.`},

    D: {image: t5Manager ,desc: `Ты «T5-руководитель».

Ты стремишься к глубине, анализу, научному подходу. Сотни таблиц и графиков для тебя — способ увидеть всю картину. Как T5 решает сложные задачи, так и ты копаешься во всех нюансах.  
Совет: Помни, что скорость и гибкость тоже важны: иногда лучше выпустить решение «на 80%», 
чем бесконечно шлифовать.`},
  },
}


export const quizzes: Record<string, IQuizData> = {
  it: quizIT,
  mom: quizMom,
  school: quizSchool,
  manager: quizManager,
}