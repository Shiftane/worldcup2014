var dirty = require("dirty");

exports.rounds = function(req, res){
		roundsDb = dirty('./db/rounds.db');
		roundsDb.on('load', function() {
			res.send(roundsDb.get("rounds"));
		});
}
