class requestService {

    // async function
    async getRequest(url){
      let dataGet = await fetch(url)
        .then(res => {
          return  res.json()
        })
        .catch(err => {
          console.log('Error: ', err)
        })
      
      return dataGet
    }
    async postRequest(url,data){
      let dataPost = await fetch(url,
        {
          method : "POST",
          headers : {'Content-Type': 'application/json'},
          body : JSON.stringify(data)
        })
      .then(res => {
        return  res.json()
      })
      .catch(err => {
        console.log('Error: ', err)
      })
    
    return dataPost
  }
}
    
export default new requestService()