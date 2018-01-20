# sails-api-playing

A only API project for learning to write API with Sails.js (v0.12.4)

## Todo

- [ ] Generate with CLI.
- [ ] Play with the types of associations.
- [ ] Play with Datatype defined in models [ORM/ODM docs](https://sailsjs.com/documentation/concepts/models-and-orm).
- [ ] Master route.
- [ ] Master policies.
- [ ] Master controller.

## Note (need to remember)

- Use rawSQL [https://sailsjs.com/documentation/reference/waterline-orm/models/query](https://sailsjs.com/documentation/reference/waterline-orm/models/query)
- Use MySQL Connection steps by steps
  - 1. Create new MySQL DB.
  - 2. Install `sails-mysql` package.
  - 3. Edit connection to MySQL in `config/connections.js`.
  - 4. Point to new connection and use in Models at `config/models.js`
  - 5. Define models file with attributes then run `sails lift`, the new tables will be created in MySQL DB.
- Use [sails-seed](https://github.com/frostme/sails-seed) to seed data.
- Fix gitignore is [not working](http://blog.jonathanchannon.com/2012/11/18/gitignore-not-working-fixed/)
```bash
git rm -r --cached .
git add .
git commit -m ".gitignore is now working"
```
