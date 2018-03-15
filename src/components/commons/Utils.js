/* eslint-disable */
export let getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "))
}

export let checkURL = (url) => {
  return (url.match(/\.(jpeg|jpg|gif|png)$/) != null)
}

export let filterProductName = (productName) => {

  const limit = 10;

  let listWord = productName.split(" ");
  let wordReturn = "";

  for(let i = 0 ; i < listWord.length; i++){
    wordReturn += listWord[i] + " ";
    if(i === limit) break;
  }

  return wordReturn;
}
