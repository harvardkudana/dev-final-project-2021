const casual = require('casual')
const userData = require('./user')

casual.define('item', sellerId => ({
  id: casual.uuid,
  sellerId,
  name: casual.word,
  tags: `${casual.word};${casual.word};${casual.word}`,
  price: Math.round(casual.double(from = 0, to = 1000) * 100) / 100,
  description: casual.sentence,
  soldOut: false,
  stock: casual.integer(from = 1, to = 100),
  createdAt: casual.moment,
  updatedAt: casual.moment,
}))

const itemData = []

for (let i = 0; i < 20; ++i) {
  const userId = casual.random_element(userData).id
  itemData.push(casual.item(userId))
}

module.exports = itemData