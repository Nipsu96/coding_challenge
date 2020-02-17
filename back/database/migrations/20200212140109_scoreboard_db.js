exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('highscore', t => {
      t.increments('score_id').primary()
      t.string('username').notNullable()
      t.integer('score').notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('highscore')
};
