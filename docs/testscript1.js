function testScriptOne() {
	// creates a number between 1 and 10 000, used as RNG maker?
	var result = Math.round(Math.random() * 10 000);
	return result;
}

function testScriptTwo()  {
	// returns the drop rates for Ivan cards?
	// very common - 40.00 %
	// common - 25.00 %
	// uncommon - 15.00 %
	// rare - 12.00 %
	// very rare - 5.00 %
	// purple - 2.50 %
	// gold - 0.50 %
}

function testScriptThree()	{
	// operates the gacha
	var gachaResult = this.testScriptOne();
	var rarityResult;
	if(gachaResult < 4 000)
	{
		rarityResult = "very common";
	}
	else if(gachaResult >= 4 000 && gachaResult < 6 500)
	{
		rarityResult = "common";
	}
	else if(gachaResult >= 6 500 && gachaResult < 8 000)
	{
		rarityResult = "uncommon";
	}
	else if(gachaResult >= 8 000 && gachaResult < 9 200)
	{
		rarityResult = "rare";
	}
	else if(gachaResult >= 9 200 && gachaResult < 9 700)
	{
		rarityResult = "very rare";
	}
	else if(gachaResult >= 9 700 && gachaResult < 9 950)
	{
		rarityResult = "purple";
	}
	else
	{
		rarityResult = "gold";
	}
	
}
