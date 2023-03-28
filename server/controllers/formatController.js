const { Format } = require('../models/models.js')

class FormatController {

    async get(req, res) {
        const formats = await Format.findAll()
        return res.json(formats)
    }
}

module.exports = new FormatController()