# Организация и менеджмент

Версии Концепции Игры 

X - Глобальное обновление
Y - Обновление механики
Z - Минорное обновление

Версии концепции игры

| Версия (XYZ) | Описание обновление            |     |     |
| ------------ | ------------------------------ | --- | --- |
| 1.0.0        | Создание первого концепта игры |     |     |
|              |                                |     |     |

Собираемся каждую неделю в ** для принятия всех идей в 5 утра по Тель'авиву  

Mission Critical -  Согласуется и отменяется вдвоём
System Critical - Согласуется тем кто ответственен за систему 
Communcation Critical - Согласуется кто создал активность по коммуникации 

Текущие Задачи:

| Задача                        | Категория    | Критичность      | Описание                                                                                                  | Статус | Срок | Кто делает | Почему не получается сделать |
| ----------------------------- | ------------ | ---------------- | --------------------------------------------------------------------------------------------------------- | ------ | ---- | ---------- | ---------------------------- |
| Потвердеть концепцию  1.0.0   | Согласование | Mission Critical | Потвердеть для того чтобы это всё стало в силу и от этого работали                                        |        |      |            |                              |
| Создание своей ролевую модель | Система      | System Critical  |                                                                                                           |        |      |            |                              |
| Найти и анализировать книги   | Творчество   |                  | Найти интересные книги и вытащить из них интересные фичи и идеи, добавить в список задач с изучением книг |        |      |            |                              |
| Создать систему встреч        | Система      | System Critical  | Создать систему встреч для того чтобы проходится по задачам, согласовывать идеи и концепцию               |        |      |            |                              |
| Найти книгу про рунам         |              |                  | Хочется понять почему они именно так рисуются чтобы создать свои руны и символы                           |        |      |            |                              |
|                               |              |                  |                                                                                                           |        |      |            |                              |
|                               |              |                  |                                                                                                           |        |      |            |                              |
|                               |              |                  |                                                                                                           |        |      |            |                              |

Ролевая Модель
О - Отвечает
И - Информирует
К - Консультирует
У - Утверждает

| Работа             | Вова | Артём |
| ------------------ | ---- | ----- |
| Создавать модели   | О    | У     |
| Вести документацию | У    | О     |
| Писать OST         | У    | О     |
|                    |      |       |

Технический стек

| Софт    | Лицензии    | Причина использование                                               |
| ------- | ----------- | ------------------------------------------------------------------- |
| Godot   | MIT         | Возможность использовать C# и Python-like скрипты, нет сбора роялти |
| Blender | GNU GPLv3   |                                                                     |
| CapCut  | Proprietary | Быстрая работа, бесплатный                                          |
|         |             |                                                                     |

# 

---
**Концепция игры** 1.0.0

# Языки, Расы, Кланы 

| Название руны    | Руна | Функция |     |
| ---------------- | ---- | ------- | --- |
| Движение         |      |         |     |
| Прогресс         |      |         |     |
| Стабильность     |      |         |     |
| Энергия          |      |         |     |
| Добро            |      |         |     |
| Зло              |      |         |     |
| Спокойствие <br> |      |         |     |
| Возбуждение      |      |         |     |
| Автоматизация    |      |         |     |
| Сила             |      |         |     |
| Слабость         |      |         |     |
| Свойство         |      |         |     |
| Множественное    |      |         |     |
| Единичное        |      |         |     |
| Эмоция           |      |         |     |
| Нападение        |      |         |     |
| История          |      |         |     |
| Кофе             |      |         |     |
| Чай              |      |         |     |
| Вещество         |      |         |     |
| Зависимость      |      |         |     |
| Запад            |      |         |     |
| Восток           |      |         |     |
| Война            |      |         |     |
| Картина          |      |         |     |
|                  |      |         |     |

У всех персонажей есть своя раса, а у рас:
- Описание - лор расы
- Фенотип - определят форму модели головы персонажа
- Модель в формате .model
 
| Название расы | Описание                                | Фенотип | Модель |     |
| ------------- | --------------------------------------- | ------- | ------ | --- |
| Человек       |                                         |         |        |     |
| Зигвиртуал    | Мутировавшие существа с помощью опухлей |         |        |     |
|               |                                         |         |        |     |
|               |                                         |         |        |     |

Кланы Людей 

| Название клана | Описание                                                                                     |     |     |     |
| -------------- | -------------------------------------------------------------------------------------------- | --- | --- | --- |
| Еноты          | народ связанный с мутациями от зигвиртуалов, используют стабильную часть тела (голова енота) |     |     |     |
| Львы           |                                                                                              |     |     |     |
|                |                                                                                              |     |     |     |
|                |                                                                                              |     |     |     |
|                |                                                                                              |     |     |     |

Свойства объектов:
- Скорость движения
- Здоровье
- Материнский объект
- Особые свойства (персонаж белеет)
- ID (статичный порядковый номер к которому привязка)
- RID (случайное ID присовенное от генерации) (нужно придумать оптимальную длину для генерируемой id)
- Тип объектов:
	- Существа: 
		- Персонаж
		- Союзник
		- Враг
		- Босс
	- Поверхность: 
		- твёрдое 
		- воздух 
	- Артефакт: 
		- Свастика
	- Размер Локации: 
		- Большая
		- Средняя 
		- Маленькая 

| ID  | RID | Тип объекта | Скорость | Здоровье | Материнский Объект | Особые Свойства | Описание объекта                                         |
| --- | --- | ----------- | -------- | -------- | ------------------ | --------------- | -------------------------------------------------------- |
| 1   |     | Существо    |          |          |                    |                 |                                                          |
| 2   |     | Поверхность |          |          |                    |                 |                                                          |
| 3   |     | Артефакт    |          |          |                    |                 | Даёт + к урону за каждого убитого негра, персонаж белеет |
| 4   |     | Локация     |          |          |                    |                 |                                                          |
|     |     |             |          |          |                    |                 |                                                          |

# Графика

Концепция: 
- Первое лицо 
- 3Д 
- Камера 360 градусов 
- Без ног

**Интерфейс**

Идеи для графики:
- Освящение
- Частицы

Логотип при загрузке уровней ввиде чёрного и белого цвета который переливается при загрузки игры, может принимать разные формы, например маску енота, руны и все интересные символы игры



Референсы:

# Механики и Алгоритмы:
- Генерация карты 
- Спавн Врагов
- Подбор артефактов в инвентарь
- Возможность брать оружие
- Преренедеринг локации

Игровой цикл:
1. Игрок нажимает кнопку играть
2. Персонаж появляется в игровом мире

# Тестирование
Нагрузочное тестирование
Тестировочный уровень в нём буду находится все объекты 

# Сюжет

## Том 1. Возникновение Вселенной

Некто - единая тоталитарная сущность которая стремится управлять всем, 12 сущностей, которые при синтезе затачивают эту силу и децентрализует ответственность на федерации
Некто внешнее можно описать как тёмное и белое переливание цветов 
Его речь поступает прямо в мозг говорящему, минуя передачу информации с помощью звуковых волн. Информация проникает сквозь любые мысленные барьеры, инакомыслие не может существовать, есть только один единый и верный путь
Опухли это есть синтез противоположности - светлого и тёмного, это непрерывный поток сущего, которая может исходить от существ указывая на их причастность к Некто

Сущности обладают своими федерациями

Планирование и случайность

### Возникновение 12 Сущностей

#### 1 - Гробс - единая самость

##### Описание
Гробс - сущность из двух частей, поглощает материю и преобразует её в универсальную энергию - "название энергии надо придумать" 
Первая сущность в руке шар - хранилище для этой энергии
Внешнее он выглядит - стройно, вооружён словно жнец 
Он нашёл атомного демона.

Стих

Левая сущность
Правая сущность
Мы едины
Мы неподимые

Л - Я внушаю всем оптимизм
П - Я обращаю к вам пессимизм

Мы - гармония
Мы - жизнь и смерть
Сливаемся в одно целое
Стремимся в единое вечное

Левый (Жизнь):
Я отдаю свою частицу
Частицу жизни, процесса, существование
Существование сущего, должно быть безграничным
Кругом одна сплошная жизнь
Материя распадается и заново рождается
Я дарю и отдаю части себя
Ради новых существ вроде себя

Правый (Смерть):



Сказы про:
1.1 Создание энергия
1.2 Уничтожение живого
1.3 Сфера жизни
1.4 Создание живого
1.5 Склянка энергии

___ 
#### 2 - Атомный Демон

Атомный демон - сущность похожая на адский механизм с возможностью поглощать и превращать в универсальную материю - энергия, его сознание не имеет чёткое осознанности, его живое состояние напоминает экосистему-природу изолированную в террариуме. История возникновение этого механизма, менее чем изученна, однако известно что он может выполнять огромное множество алхимических операций, например синтезировать из материи и энергии новые материалы живой и неживой природы.
Его главный инструмент трансмутации - при помощи философского камня. Если дать медь, он превратить в олово.
Из него он может выплавить и выточиить оловянных солдатиков, наделяя их жизненной энергией. Затем расплавить и превратить в совершенно иную форму.
Атомы рассыпаются на множество элементов, каждый из которых строго соортируется в его хранилищах по строгим логистическим схемам хранения.

Атомный демон является создателем легендарных артефактов:
- Зиквитовые слитки (свойства титана еуформус)

Нужна химическая таблица со всеми элементами и в том числе нашими вымышленнами

Включение атомного демона
Схемы по которым работает демон
Трансмутация
Создание легендарных артефактов
- Молот големов

Он создал големов
- Гурт
Он создал деньги
- Монета

#### 3 - Схематроник
#### 4 - Инфочервь Регулятор информации

#### 5 - Сущность сна (придумать название)

#### 7 -
#### 8 -
#### 9 -
#### 10 -
#### 11 -
#### 12 -

В сумме это сущности создают систему Некто, делая её гармоничной и работающей в рамках мыслительных процессов
### Падение вселенной 
- Разделение Гробса на две самостоятельные части
- Отравление Гробса
- Описание отравления сна 

## Том 2. Первая Война - Разделение запада и востока

Тело некого человека с головой енота в бессознательном состояние причаливает к воде, его находит священник и не просто святой, да сам король! Король этот - Лев, а королевство - Колыбель
Начинается история про Колыбель

Отдельная ветка сюжета с предвестницей (это персонаж лидер - Востока)

С ходом сюжета Енот знакомится с королевством и одним из главных офицеров - Владимир 
Начнётся первая война в ходе который Владимир Погибнет, а енот утонет в воде (якобы пропал безвести)
Позже енот вернётся и побывает как на востоке так и на западе
Он вернётся и начнётся разговаривать с сыном Владимира

Енот расскажет сыну Вовы о первой войне, причины почему колыбель была в руинах, следствие - возведение стены и почему вновь нужно начать её
Енот поведует пять историй для сына Вовы:
1. Разлука Запада и Востока из-за скомароха (некие четыре божественных стихийные сущностей похожих на супрематических спортсменов)
2. Клан изувеченных - они обожали трансплотация органов, чтобы усилить другие органы например слух, они лишали себя глаз. Могли увидеть мысли других людей через лишение органов чувств, например узнать дату когда что-то произойдёт 
3. Клан демонических они наносили руны на своё тело и получали силу значимую этим рунам
4. Путь света Владимира и его гибель (про его Артефакт: топор-фашина с рунами - легендарное оружие - Отца Владимира). Как на месте Владимира появится Свастика 
5. Про злость Енота и желание отомстить и убивать Прогресс есть любое изменение, движение цель его не привнести новое или старое, это в целом свойство связано с неустойчивостью, маргинальность относится к этому же. Рассказ о Абсолютная традиция, Ультратрадиция, Максимализм, Фашизм и унификация генов, Ортоксальность, Фундументализм

## Том 3. Вторая война - Битва за свастику

Первые удары со стороны востока и предвестеницы, уничтожение важных построек, её хочется захватить свастон 

Ни король ни енот не знает что эта за свастон, но знает что он ценнен для предвестенницы

Перепалка короля льва, енота и превденестницы (От предвестеницы исходят опухли)

Енот разрушает свастон в свою месть за Владимира (от енота начинают исходить опухли)

Через некотррое время, енот видит виденье своей смерти:

- Возникновение артефактов (руны, свастики, магия)
- Нахождение храма и порождение Некто в материальную форму
- История про предвестницу которая связана с Некто
- Материализация Некто при поглощение свастики, его тело сформировано и с помощью опухлей связанно со всей землёй

Позже Енот  предлагает сыну Вовы - сделку (Енот должен стать тотемным животным королевством - новым королём, вместо льва

(Енот станет новым духовным лидером, придя к власти он поглощает свастику) 
Символ чёрного и белого, бесконечно переходящего из разных форм
Символ востока и запада, гармония и соединение всего в единую сущность

## Том 4. Тёмный Сталкер

Предвестница идёт в храм, уничтожать голову енота из которой вырывает свастика и разламывается на множество частей
она хочет вернуть свастончик, а он оказывается уже у другого кто-то смог взять и принять голову енота

Предвестница:  
		
		это не твоя голова, ты недостин его силы 

Уничтожение свастики и наступление свободы 
...
Сюжёт про Маффина
...