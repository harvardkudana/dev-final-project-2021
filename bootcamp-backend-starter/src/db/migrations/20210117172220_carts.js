exports.up = knex => knex.schema.createTable(knex, 'carts', table => {
  table
    .uuid('itemId')
    .references('items.id')

  table
    .uuid('userId')
    .references('users.id')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('carts')
