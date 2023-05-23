# vue-test

> A test Vue.js project

- при нажатии на "Имя" в шапке элементы сортируются в алфавитном порядке, так же сортируются их вложенные элементы
- открытие модального окна нажатием на кнопку "Добавить"
- поля имеют валидацию на количество символов, стоит авто форматирование на имена и телефон
- кнопка "Сохранить" имеет disable состояние зависящее от валидации
- выпадающий список "Начальник" имеет в себе только верхнеуровневые имена из таблицы
- сохранение данных таблицы происходит в locale storage

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
