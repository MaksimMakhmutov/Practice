Области хранения данных

- база данных на json-server
- BFF
- redux store

Сущности приложения:

- пользователь: БД (список пользователей), BFF (сессия пользователя), стор (отображение в браузере)
- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), стор (использование на клиенте)
- категория товара: БД (список категорий), BFF (список категорий, которые передаются пользователю), стор (отображение в браузере)
- товар: БД (список товаров), стор (отображение в праузере)
- корзина: БД (товары, выбранные пользователем), стор (отображение в браузере)
- админ-панель: БД (информация о товарах)

  Таблицы БД:
- пользователь - users: id / login / password / role_id
- роль - roles: id / name
- товар - product: id / title / image_url / price / quantity / category
- категория - category: id / title
- админ-панель - admin-panel: product_name / product_id / product_url / product_quantity

Схема состояния на BFFЖ

- сессия текущего пользователя: login / password / role

Схема для редакс стора (на клиенте):

- user: id / login / role
- kategory: id / title 
- products: массив product: id / title / imageUrl / quantity / category
- product: id / title / imageUrl / price / quantity / category
