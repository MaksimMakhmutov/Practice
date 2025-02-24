Области хранения данных

- база данных на json-server
- BFF
- redux store

Сущности приложения:

- пользователь: БД (список пользователей), BFF (сессия пользователя), стор (отображение в браузере)
- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), стор (использование на клиенте)
- статья: БД (список статей), стор (отображение в браузере)
- комментарии: БД (список комментариев), стор (отображение в браузере)

  Таблицы БД:
- пользователь - users: id / login / password / registed_at / role_id
- роли - roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- комментарии -  comments: id / author_id / post_id / content

Схема состояния на BFFЖ

- сессия текущего пользователя: login / password / role

Схема для редакс стора (на клиенте):

- user: id / login / role
- posts: массив post: id / title / imageUrl / puplishedAt / commentsCount 
- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / outhor / content / publishedAt
- users: массив user: id / login / registeredAt / role
