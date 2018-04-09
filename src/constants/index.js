const serverUrl = 'http://128.199.207.105'
// const serverUrl = 'http://127.0.0.1:8000'
const productApiUrl = serverUrl + '/ir_api/product_api'

const searchProductApiUrl = productApiUrl + '/search_product/'
const searchListProductApiUrl = productApiUrl + '/get_list_item/'
const productDetailApiUrl = productApiUrl + '/get_detail_item'
const searchMoreResultApiUrl = productApiUrl + '/get_recommended_items/'
const getItemsSemantic = productApiUrl + '/get_items_semantic/'

export {
  searchProductApiUrl,
  searchListProductApiUrl,
  productDetailApiUrl,
  searchMoreResultApiUrl,
  getItemsSemantic
}
