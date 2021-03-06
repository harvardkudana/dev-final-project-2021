exports.up = knex => knex.schema.createTable('tags', table => {
  table
    .uuid('itemId')
    .references('items.id')

  table
    .string('tag')
    .notNullable()

  table.timestamp('createdAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('tags')
