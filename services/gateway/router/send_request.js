const axios = require('axios');

module.exports.get = (_url, res) => {
    return axios.request({
            method: 'get',
            url: _url,
        })
        .then(response => {
            res.send(response.data)
        })
        .catch(err => {
            throw err;
        });

};
module.exports.post = (_url, body, res) => {
    axios.request({
            method: 'post',
            url: _url,
            data: body
        })
        .then(response => {
            res.send(response.data)
        })
        .catch(err => {
            throw err;
        });
};

module.exports.patch = (_url, body, res) => {
    axios.request({
        method: 'patch',
        url: _url,
        data: body
    }).then(response => {
        res.send(response.data);
    }).catch(err => {
        throw err

    });
}