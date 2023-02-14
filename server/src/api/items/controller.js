const helper = require('./helper')

const getItems = async (req, res) => {
  try {
    const { search, limit = 4 } = req.query

    if (!search) {
      return res.send({})
    }
    const items = await helper.getItems({ search, limit })
    return res.send(items)
  } catch (error) {
    return res.status(500).send({
      status: error.message
    })
  }
}

const getItem = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.send({})
    }
    const item = await helper.getItemWithDescription({ id })
    return res.send(item)
  } catch (error) {
    return res.status(500).send({
      status: error.message
    })
  }
}

module.exports = {
  getItems,
  getItem
}
