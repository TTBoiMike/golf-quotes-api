export class ApiClient {

    status(response) {
        if(response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    getQuote(tag, limit) {
        if(tag === "random") {
           return this.getRequest(`https://golf-quotes-api.herokuapp.com/quotes/random`)
        } else {
            return this.getRequest(`https://golf-quotes-api.herokuapp.com/quotes/random/tag/${tag}?limit=${limit}`)
        }
    }

    getRequest(url) {
        return (fetch(url))
        .then(this.status)
        .catch(err => {
            console.log(err)
        })
    }

}
