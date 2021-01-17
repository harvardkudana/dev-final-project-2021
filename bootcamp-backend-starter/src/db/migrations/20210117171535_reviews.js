exports.up = knex => knex.schema.createTable(knex, 'reviews', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('password').notNullable()

  table.int('rating').notNullable()

  table.string('review').notNullable()

  table.uuid('itemId').references('items.id')

  table.uuid('buyerId').references('users.id')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('reviews')
