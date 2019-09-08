

var productData = require("../data/productData");
var cartData = require("../data/cartData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------



  app.get("/api/cart", function(req, res) {
    res.json(cartData);
  });


  app.post("/api/clear", function(req, res) {

    cartData.length = 0;


    res.json({ ok: true });
  });
};
