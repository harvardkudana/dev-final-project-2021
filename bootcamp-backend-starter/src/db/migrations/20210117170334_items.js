exports.up = knex => knex.schema.createTable(knex, 'items', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('sellerId')
    .references('users.id')

  table
    .string('name')
    .notNullable()

  table
    .string('description')
    .notNullable()

  table.string('tags')

  table
    .decimal('price')
    .defaultTo(0)

  table
    .boolean('soldOut')
    .defaultTo(false)

  table
    .int('stock')
    .notNullable()

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('items')
