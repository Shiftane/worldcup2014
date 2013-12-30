var dirty = require("dirty");

exports.rounds = function(req, res){
		roundsDb = dirty('./db/rounds.db');
		roundsDb.on('load', function() {
			res.write("[");
			roundsDb.forEach(function(key, val){
				res.write(JSON.stringify(val) + ",");
			});
			res.write("]");
			res.send();
		});
}
