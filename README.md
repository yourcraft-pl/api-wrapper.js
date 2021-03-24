# YourCraft API wrapper
## Example
```js
const api = require("yourcraft-api")
// Get all players and their statistics
api.getPlayers((response) => {
console.log(response)
});
// Get player statistics
api.getPlayer('nickname', (response) => {
console.log(response)
});
```