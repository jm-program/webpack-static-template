# Webpack Static Site Starter Kit

## Features
- Babel
- SCSS
- Font loading
- Autoprefixer
- Sourcemaps

## Требования
- [Node](https://nodejs.org/)
- [NVM/MacOC](https://tecadmin.net/install-nvm-macos-with-homebrew/)
- [NVM/Windows](https://github.com/coreybutler/nvm-windows)

## Использование
##### Клонировать репозиторий, удалить историю
```
git clone https://github.com/alex-karo/webpack-static-template block7
cd block7
rm -fr .git
```
#### Проверка версии ноды
```
node -v
```
Если нода выше чем 15, то нужно сделать
```
nvm install lts/fermium
```
##### Установить npm зависимости
```
npm install
```
##### Разработка

Для запуска веб-сервера с лайврелоадом
```
npm start
```
Для создания билда
```
npm run build
```

## Загрузка на Github Pages

Ваш репозиторий должен быть связан с github репозиторием, после этого выполняем
```
npm run deploy
```

Основано на [этой статье](https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e)