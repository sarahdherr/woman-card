'use strict'

const {STRING, TEXT, ARRAY} = require('sequelize')

module.exports = db => db.define('women', {
  first_name: STRING,
  last_name: STRING,
  industry: STRING,
  where: STRING,
  when: STRING,
  bio: TEXT,
  obstacles: TEXT,
  headline: STRING,
  tags: ARRAY(STRING),
  img: STRING,
  links: ARRAY(STRING)
})

// No need to have associations for today, but maybe have associations later if needed.
// (Will keep this here for reference)
// module.exports.associations = (Thing, {User, Favorite}) => {
  // Thing.belongsToMany(User, {as: 'lovers', through: Favorite})
// }
