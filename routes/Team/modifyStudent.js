const util = require('../../utils/util')
const studentModel = require('../../models/student')

module.exports = async (req, res) => {
    const data = req.body.student
    try {
        const result = await studentModel.updateOne({
            id: data.id
        }, {
            name: data.name,
            cover: data.cover,
            graduate: data.graduate,
            research: data.research,
            email: data.email,
            introduction: data.introduction
        })
        if (result.matchedCount === 0) {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        } else {
            util.responseClient(res, 200, 0, '成功', {})
        }
    } catch (e) {
        console.log('e:', e)
    }
}