function testScriptOne() {
	// creates a number between 1 and 10 000, used as RNG maker?
	var result = Math.round(Math.random() * 10 000);
	return result;
}

function testScriptTwo()  {
	// returns the drop rates for Ivan cards?
	// very common - 50.00 %
	// common - 25.00 %
	// uncommon - 15.00 %
	// rare - 5.00 %
	// very rare - 3.00 %
	// purple - 1.50 %
	// gold - 0.50 %
}

function testScriptThree()	{
	// operates the gacha
	var gachaResult = this.testScriptOne();
	var rarityResult;
	if(gachaResult < 5 000)
	{
		rarityResult = "very common";
	}
	else if(gachaResult >= 5 000 && gachaResult < 7 500)
	{
		rarityResult = "common";
	}
	else if(gachaResult >= 7 500 && gachaResult < 9 000)
	{
		rarityResult = "uncommon";
	}
	else if(gachaResult >= 9 000 && gachaResult < 9 500)
	{
		rarityResult = "rare";
	}
	else if(gachaResult >= 9 500 && gachaResult < 9 800)
	{
		rarityResult = "very rare";
	}
	else if(gachaResult >= 9 800 && gachaResult < 9 950)
	{
		rarityResult = "purple";
	}
	else
	{
		rarityResult = "gold";
	}
	
}
