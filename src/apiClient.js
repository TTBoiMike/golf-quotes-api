export class ApiClient {

    status(response) {
        if(response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    getQuote(url) {
        return this.getRequest(url)
    }

    getRequest(url) {
        return (fetch(url))
        .then(this.status)
        .catch(err => {
            console.log(err)
        })
    }

}
