const axios = require("axios")
const config = require("./config.json")
const url = config.apiBaseURL
exports.getPlayers = function(callback) {
  axios.get(url + "/users")
  .then(response => {
    callback(response.data) 
  }).catch(err => {
    console.error("YcApi Error: " + err)
    callback(err) 
  });
}
exports.getPlayer = function(nickname, callback) {
  axios.get(url + "/user/" + nickname)
  .then(response => {
    callback(response.data)
  }).catch(err => {
    console.error("YcApi Error: " + err)
    callback(err) 
  });
}