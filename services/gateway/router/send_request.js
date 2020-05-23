const axios = require('axios');

module.exports.get = (_url, res) => {
    return axios.request({
            method: 'get',
            url: _url,
        })
        .then(response => {
            res.send(response.data)
        })
        .catch(error => {
            if (error.response) {
                // Request made and server responded
                res.json({
                    Status: error.response.status,
                    Data: error.response.data
                });

            } else if (error.request) {
                // The request was made but no response was received
                res.send(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                res.status(500).send('Internal error');
            }

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
        .catch(error => {
            if (error.response) {
                // Request made and server responded
                res.json({
                    Status: error.response.status,
                    Data: error.response.data
                });

            } else if (error.request) {
                // The request was made but no response was received
                res.send(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                res.status(500).send('Internal error');
            }

        });
}

module.exports.patch = (_url, body, res) => {
    axios.request({
            method: 'patch',
            url: _url,
            data: body
        })
        .then(response => res.send(response.data))
        .catch(error => {
            if (error.response) {
                // Request made and server responded
                res.json({
                    Status: error.response.status,
                    Data: error.response.data
                });

            } else if (error.request) {
                // The request was made but no response was received
                res.send(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                res.status(500).send('Internal error');
            }

        });
}

module.exports.delete = (_url, body, res) => {
    axios.request({
            method: 'delete',
            url: _url,
            data: body
        })
        .then(response => res.send(response.data))
        .catch(error => {
            if (error.response) {
                // Request made and server responded
                res.json({
                    Status: error.response.status,
                    Data: error.response.data
                });

            } else if (error.request) {
                // The request was made but no response was received
                res.send(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                res.status(500).send('Internal error');
            }

        });
}