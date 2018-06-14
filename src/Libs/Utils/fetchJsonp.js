import fetchjsonp from "fetch-jsonp";

const fetchJsonp = async url =>
    new Promise((resolve, reject) => {
        fetchjsonp(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                let data = {
                    success: true,
                    data: response
                };
                resolve(data);
            })
            .catch(function(ex) {
                resolve({
                    success: false,
                    message: ex.message
                });
            });
    });

export default fetchJsonp;
