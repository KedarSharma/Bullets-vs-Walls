function EnterName() {
	var name = document.getElementById("gunName");
	var n = name.options[name.selectedIndex].value;
	textSize(25);
	fill("yellow");
	stroke("reD");
	strokeWeight(3);
	text("Gun's name: ", 20, 100);
	fill("white");
	stroke("red");
	return n;
}