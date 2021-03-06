/** A base class to send queries to the backend. */
export class ApiClient {

    HOST = 'http://192.168.100.2:9090/auto-ml-creator/v1/';

    get(url) {
        console.log('Sending GET request ' + this.HOST + url);
        return fetch(this.HOST + url)
            .then(response => {
                return response.json();
            })
            .catch((error) => {
                console.log('Problems with GET method: ' + error.message)
            });
    }

    post(url, body) {
        console.log('Sending POST request ' + this.HOST + url);
        return fetch(this.HOST + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .catch((error) => {
                console.log('Problems with POST method: ' + error.message)
            });
    }

    postFile(url, body) {
        console.log('Sending POST request ' + this.HOST + url);
        return fetch(this.HOST + url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: body,
        })
            .then(response => response.json())
            .catch((error) => {
                console.log('Problems with POST method: ' + error.message)
            });
    }

    postWithoutBody(url) {
        console.log('Sending POST request without body' + this.HOST + url);
        return fetch(this.HOST + url, {
            method: 'POST',
        })
            .then(response => response.json())
            .catch((error) => {
                console.log('Problems with POST method: ' + error.message)
            });
    }

    delete(url) {
        console.log('Sending DELETE request ' + this.HOST + url);
        return fetch(this.HOST + url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(response => JSON.stringify(response))
            .catch((error) => {
                console.log('Problems with DELETE method: ' + error.message)
            });
    }

    put(url) {
        console.log('Sending PUT request ' + this.HOST + url);
        return fetch(this.HOST + url, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                return response.status;
            })
            .catch((error) => {
                console.log('Problems with PUT method: ' + error.message)
            });
    }
}
