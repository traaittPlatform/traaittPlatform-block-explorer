var api = 'https://eu-east.traaittnode.com';
	var donationAddress = "iETRXwx1cXGUXdnyri3NWV35m3FzoECC16J2acW5DuWCccD641N9tPXP43W5sEXvkrD4X8iUmnwqf9F1hfjZpgCbF86wGW3Txzc3r";
	var blockTargetInterval = 644; // enter the block interval in seconds
	var coinUnits = 100000000;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
	var totalSupply =  888888800000000; // enter the total supply in atomic units
	var symbol = 'ETRX'; // enter the coin's ticker
	var refreshDelay = 30000;
	
	// pools stats by MainCoins
	var networkStat = {
	 "ETRX": [
		["https://webetrx.semipool.com"]
	 ]
	};
	
	var networkStat2 = {
	    "ETRX": [
		[""]
	 ]
	};
