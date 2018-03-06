const serverUrl = 'http://128.199.207.105'
// const serverUrl = 'http://127.0.0.1:8000'
const productApiUrl = serverUrl + '/ir_api/product_api'
const resultApiUrl = ''

const searchProductApiUrl = productApiUrl + '/search_product/'
const searchListProductApiUrl = productApiUrl + '/get_list_item/'

export {
  searchProductApiUrl,
  resultApiUrl,
  searchListProductApiUrl
}
