const { Sequelize } = require('sequelize');
const { User } = require('./models');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

(async () => {
  const t = await sequelize.transaction();

  try {
    await User.create({
      firstName: 'Foo',
      lastName: 'Baz',
      email: 'foo@email.com.br',
    });

    await t.commit();
  } catch (err) {
    await t.rollback();
    console.error(err);
  }
  
  const users = await User.findAll();
  
  console.log('>> USERS', users);
})();
