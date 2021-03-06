const util = require('../../utils/util')
const paperModel = require('../../models/paper')

module.exports = async (req, res) => {
    try {
        const result = await paperModel.find({}).sort({'id': -1})
        if (!result[0]) {
            util.responseClient(res, 500, 1, '数据库出错', {})
            console.log('e:', '数据库出错')
        } else {
            util.responseClient(res, 200, 0, '成功', {
                papers: result
            })
        }
    } catch (e) {
        console.log('e:', e)
    }
}