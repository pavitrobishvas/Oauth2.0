// Load required packages
var Billing = require('../models/billing');

// Create endpoint /api/beers for POST
exports.postBillings = function(req, res) {
  // Create a new instance of the bill model
  var bill = new Billing();

  // Set the bill properties that came from the POST data
  bill.ItemName = req.body.ItemName;
  bill.ItemNo = req.body.ItemNo;
  bill.quantity = req.body.quantity;
  bill.Total = req.body.Total;
  bill.userId = req.user._id;


  // Save the beer and check for errors
  bill.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'Bill added to !', data: bill });
  });
};

// Create endpoint /api/beers for GET
exports.getBillings = function(req, res) {
  // Use the Beer model to find all beer
  bill.find({ userId: req.user._id }, function(err, bills) {
    if (err)
      return res.send(err);

    res.json(beers);
  });
};

// Create endpoint /api/beers/:beer_id for GET
exports.getBill = function(req, res) {
  // Use the Beer model to find a specific beer
  bill.find({ userId: req.user._id, _id: req.params.bill_id }, function(err, beer) {
    if (err)
      return res.send(err);

    res.json(beer);
  });
};

// Create endpoint /api/beers/:bill_id for PUT
exports.putBills = function(req, res) {
  // Use the Beer model to find a specific beer
  Beer.update({ userId: req.user._id, _id: req.params.bill_id }, { quantity: req.body.quantity }, function(err, num, raw) {
    if (err)
      return res.send(err);

    res.json({ message: num + ' updated' });
  });
};

// Create endpoint /api/billrs/:bill_id for DELETE
exports.deleteBills = function(req, res) {
  // Use the Beer model to find a specific beer and remove it
  Beer.remove({ userId: req.user._id, _id: req.params.bill_id }, function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'bill removed from the locker!' });
  });
};