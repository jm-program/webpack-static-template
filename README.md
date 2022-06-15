# Webpack Static Site Starter Kit

## Требования к проекту
- [Node 14.18.3](https://nodejs.org/download/release/v14.18.3/)
- [NVM/MacOC](https://tecadmin.net/install-nvm-macos-with-homebrew/)
- [NVM/Windows](https://github.com/coreybutler/nvm-windows/releases) Если Windows то установка только от имени администратора
- [Yarn](https://yarnpkg.com/)

## Использование
##### Клонировать репозиторий
```
git clone https://github.com/alex-karo/webpack-static-template block7
```
##### В папке block7 перейти в папку проекта
```
cd block7
```
##### Удалить папку .git
```
rm -fr .git
```

## Проверка версии ноды
##### Должно вывести версию ноды 14.18.3
```
node -v
```

## Два метода установки зависимостей
##### Установка зависимостей через NPM

```
npm install
```
##### Установка зависимостей через Yarn
```
yarn
```

## Два метода запуска приложения
#### Для запуска веб-сервера с лайврелоадом через NPM
```
npm run start
```
#### Для создания билда через NPM
```
npm run build
```


#### Для запуска веб-сервера с лайврелоадом через Yarn
```
yarn start
```
#### Для создания билда через Yarn
```
yarn build
```

## Два метода загрузки на Github Pages
**Ваш репозиторий должен быть связан с github репозиторием, после этого выполняем**
#### Загрузка на Github Pages через NPM
```
npm run deploy
```
#### Загрузка на Github Pages через Yarn
```
yarn deploy
```

Основано на [этой статье](https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e)

