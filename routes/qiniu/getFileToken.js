const util = require('../../utils/util')
const qiniu = require("qiniu");
const accessKey = 'vn1xl6NavdXX6J1cG5MaeayKmyAl2hEDmY3-3luB'
const secretKey = 'Lovc5vbYybR0YsXD7M_Hvrmn4TdNOVpKF1hNqSpS'
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

module.exports = (req, res) => {
    var options = {
        scope: 'datavislab-file',
    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken = putPolicy.uploadToken(mac);
    util.responseClient(res, 200, 0, '成功', {uploadToken: uploadToken})
}