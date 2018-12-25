const logger = require("./Logger");
const shopper = require("./Shopper");
const store = require("./Store");

logger.log("starting app...");

var alex = new shopper("alex", 500);

var ski_Shop = new store("Steep and Deep Supplies", [
  {
    item: "Downhill Skis",
    qty: 5,
    price: 750
  },
  {
    item: "Knit Hat",
    qty: 20,
    price: 5
  }
]);


logger.log('finished config');

console.log(`${logger.count} logs total`);

logger.logs.map(log => console.log(`  ${log.message}`));
