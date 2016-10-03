$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function getInfo() {
	var birthMonth = document.getElementById("month").value
	var birthDate = document.getElementById("date").value

	if (birthMonth == "march") {
		if (birthDate <=20)
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-01.png\'><br><h1 class="animated fadeIn">Pisces</h1><p class="animated fadeIn">The Fish. A Water sign, ruled by Neptune...</p>';
		else if (birthDate <= 31)
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-02.png\'><br><h1 class="animated fadeIn">Aries</h1><p class="animated fadeIn">The Ram. A Fire sign, ruled by Mars...</p>';
		else document.getElementById("poop").innerHTML = "<h1>Invalid</h1>";
	}
	else if (birthMonth == "april") {
		if (birthDate <=19)
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-02.png\'><br><h1 class="animated fadeIn">Aries</h1><p class="animated fadeIn">The Ram. A Fire sign, ruled by Mars...</p>';
		else if (birthDate <= 30)
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-03.png\'><br><h1 class="animated fadeIn">Taurus</h1><p class="animated fadeIn">The Bull. An Earth sign, ruled by Venus...</p>';
		else document.getElementById("poop").innerHTML = "<h1>Invalid</h1>";
	}	
	else if (birthMonth == "may") {
		if (birthDate <=20)
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-03.png\'><br><h1 class="animated fadeIn">Taurus</h1><p class="animated fadeIn">The Bull. An Earth sign, ruled by Venus...</p>';
		else if (birthDate <= 31) 
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-04.png\'><br><h1 class="animated fadeIn">Gemini</h1><p class="animated fadeIn">The Twins. An Air sign, ruled by Mercury...</p>';
		else document.getElementById("poop").innerHTML = "<h1>Invalid</h1>";
	}
	else if (birthMonth == "june") {
		if (birthDate <=20)
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-04.png\'><br><h1 class="animated fadeIn">Gemini</h1><p class="animated fadeIn">The Twins. An Air sign, ruled by Mercury...</p>';
		else if (birthDate <= 30) 
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-05.png\'><br><h1 class="animated fadeIn">Cancer</h1><p class="animated fadeIn">The Crab. An Water sign, ruled by the Moon...</p>';
		else document.getElementById("poop").innerHTML = "<h1>Invalid</h1>";
	}
	else if (birthMonth == "july") {
		if (birthDate <=21)
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-05.png\'><br><h1 class="animated fadeIn">Cancer</h1><p class="animated fadeIn">The Crab. An Water sign, ruled by the Moon...</p>';
		else if (birthDate <= 31) 
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-06.png\'><br><h1 class="animated fadeIn">Leo</h1><p class="animated fadeIn">The Lion. A Fire sign, ruled by the Sun...</p>';
		else document.getElementById("poop").innerHTML = "<h1>Invalid</h1>";
	}
	else if (birthMonth == "august") {
		if (birthDate <=22)
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-06.png\'><br><h1 class="animated fadeIn">Leo</h1><p class="animated fadeIn">The Lion. A Fire sign, ruled by the Sun...</p>';
		else if (birthDate <= 31) 
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-07.png\'><br><h1 class="animated fadeIn">Virgo</h1><p class="animated fadeIn">The Maiden. An Earth sign, ruled by Mercury...</p>';
		else document.getElementById("poop").innerHTML = "<h1>Invalid</h1>";
	}
	else if (birthMonth == "september") {
		if (birthDate <=22)
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-07.png\'><br><h1 class="animated fadeIn">Virgo</h1><p class="animated fadeIn">The Maiden. An Earth sign, ruled by Mercury...</p>';
		else if (birthDate <= 30) 
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-08.png\'><br><h1 class="animated fadeIn">Libra</h1><p class="animated fadeIn">The Scales. An Air sign, ruled by Venus...</p>';
		else document.getElementById("poop").innerHTML = "<h1>Invalid</h1>";
	}
	else if (birthMonth == "october") {
		if (birthDate <=22)
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-08.png\'><br><h1 class="animated fadeIn">Libra</h1><p class="animated fadeIn">The Scales. An Air sign, ruled by Venus...</p>';
		else if (birthDate <= 31) 
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn"src=\'img/zodiac_items-09.png\'><br><h1 class="animated fadeIn">Scorpio</h1><p class="animated fadeIn">The Scorpion. A Water sign, ruled by Pluto...</p>';
		else document.getElementById("poop").innerHTML = "<h1>Invalid</h1>";
	}
	else if (birthMonth == "november") {
		if (birthDate <=19)
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-09.png\'><br><h1 class="animated fadeIn">Scorpio</h1><p class="animated fadeIn">The Scorpion. A Water sign, ruled by Pluto...</p>';
		else if (birthDate <= 30) 
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-10.png\'><br><h1 class="animated fadeIn">Sagittarius</h1><p class="animated fadeIn">The Centaur. A Fire sign, ruled by Jupiter...</p>';
		else document.getElementById("poop").innerHTML = "<h1>Invalid</h1>";
	}
	else if (birthMonth == "december") {
		if (birthDate <=20)
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-10.png\'><br><h1 class="animated fadeIn">Sagittarius</h1><p class="animated fadeIn">The Centaur. A Fire sign, ruled by Jupiter...</p>';
		else if (birthDate <= 31) 
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-11.png\'><br><h1 class="animated fadeIn">Capricorn</h1><p class="animated fadeIn">The Mountain Goat. An Earth sign, ruled by Saturn...</p>';
		else document.getElementById("poop").innerHTML = "<h1>Invalid</h1>";
	}
	else if (birthMonth == "january") {
		if (birthDate <=19)
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-11.png\'><br><h1 class="animated fadeIn">Capricorn</h1><p class="animated fadeIn">The Mountain Goat. An Earth sign, ruled by Saturn...</p>';
		else if (birthDate <= 31) 
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-12.png\'><br><h1 class="animated fadeIn">Aquarius</h1><p class="animated fadeIn">The Man who Carries Water. An Air sign, ruled by Uranus...</p>';
		else document.getElementById("poop").innerHTML = "<h1>Invalid</h1>";
	}
	else if (birthMonth == "february") {
		if (birthDate <=18)
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-12.png\'><br><h1 class="animated fadeIn">Aquarius</h1><p class="animated fadeIn">The Man who Carries Water. An Air sign, ruled by Uranus...</p>';
		else if (birthDate <= 29) 
			document.getElementById("poop").innerHTML = '<img class="animated fadeIn" src=\'img/zodiac_items-01.png\'><br><h1 class="animated fadeIn">Pisces</h1><p class="animated fadeIn">The Fish. A Water sign, ruled by Neptune...</p>';
		else document.getElementById("poop").innerHTML = "<h1>Invalid</h1>";
	}
	
}





