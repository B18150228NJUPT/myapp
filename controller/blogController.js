var BlogModel = require('../models/blog')
var formidable = require('formidable')

class BlogController {
    async getBlogs(req, res, next) {
        const { category, limit = 20, offset = 0 } = req.query;
        try {
            console.log(req.query)
            const blogs = await BlogModel.find({"category":category}).limit(Number(limit)).skip(Number(offset))
            res.send(blogs)
        } catch (err) {
            console.log(err);
            res.send({
                status: 0,
                msg: err
            })
        }

    }

    async insertBlogs(req, res, next) {
        const from = new formidable.IncomingForm()
        from.parse(req, async (err, fields, files) => {
            if (err) {
                res.send({
                    status: 0,
                    msg: err
                })
                return
            }
            try {
                // console.log(fields);
                // fields.for
                // console.log(fields.data.length);
                fields.data.forEach(item => { BlogModel.create(item) })
                res.send({
                    status: 1,
                    msg: 'insert blog sucess'
                })
                return
            } catch (err) {
                console.log(err);
                res.send({
                    status: 0,
                    msg: err
                })
            }
        })
    }
}

module.exports = new BlogController()