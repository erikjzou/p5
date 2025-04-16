//Datasets: https://en.wikipedia.org/wiki/List_of_largest_art_museums
//https://www.theartnewspaper.com/2022/03/28/visitor-figures-2021-top-100-most-popular-art-museums-in-the-world
//https://www.theartnewspaper.com/2023/03/27/museums-social-media-booms-thanks-to-anniversaries-and-blockbusters
//I am interested in seeing if there are "influencer" museums--that is museums that have a high number of instagram followers.
//I'm interested in museums and the ways in which they engage with the digital world, and this is one interaction.
//With social media becoming more important to marketing, and with Instagram especially as a source for "aesthetics", do museums seem to be
//engaging with or leveraging these platforms? 
//Do these museums with high numbers of followers have more visitors? It appears that the answer is no...
//it's also that when introducing physical space (sq meters) the results are even more complicated
//there is perhaps a geographic element too: russia has very little instagram presence, though the museums see a high amount of visitors
//I've highlighted what I think are the three leaders: the Moma, met, and louvre.
//the moma has the highest insta presence, but not as many actual visitors (it is quite small in comparison)
//The met is in the middle with high insta presence and visitors
//the louvre has the most visitors out of any museum, and boasts a decent but noticeably lower presence than the moma.

//The three variables I chose were: number of instagram followers, visitors, and square meters of the museum

//set up font and load in table
let myFont;

function preload() {
	table = loadTable("museums.csv", "csv", "header");
	rows = table.getRows();
	myFont = NORMAL
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	background(255, 255, 255);
	let min = 11000;
	let max = 92000;

	textFont(myFont);
	textAlign(CENTER);
	fill(150, 110, 78);
	noStroke();
	rect(width*40/250, height/2, width*40/250*2, height);

	//making painting of the mona lisa below
	fill(164, 189, 175, 200);
	rect(width*40/250, height/4, width*45/300, height/2.8);
	fill(163, 197, 214, 200);
	rect(width*40/250, height/2.7, width*45/300, height/8);
	fill(88, 138, 110, 120);
	rect(width*48/250, height/4, width*30/300, height/8);
	rect(width*36/250, height/3.6, width*39/300, height/10);

	//hair
	fill(150, 110, 78);
	circle(width*40/250 + 20, height/5.5, height/8);
	circle(width*40/250 + 5, height/5.2, height/8);
	ellipse(width*40/250 - 10, height/4.6, height/16, height/8);
	ellipse(width*40/250 - 15, height/4.1, height/14, height/15);
	
	//body
	fill(117, 89, 67);
	circle(width*40/250 + 10, height/3, height/6);
	circle(width*40/250 + 30, height/3, height/6);
	rect(width*40/250 + 20, height/2.5, width/9, height/17.5);
	ellipse(width*40/250 - 7, height/2.75, height/6, height/8);
	ellipse(width*40/250 - 15, height/2.58, height/6, height/8);
	ellipse(width*40/250 + height/12, height/2.7, height/6, height/6);

	//face
	fill(252, 217, 197);
	circle(width*40/250 + 10, height/5, height/10);
	circle(width*40/250 + 8, height/4.8, height/9.8);
	rect(width*40/250 + 20, height/4.4, width/32, height/8);
	ellipse(width*40/250 + 10, height/3.32, height/10, height/16);
		
	//hand
	ellipse(width*40/250 + 40, height/2.55, height/15, height/23);
	
	//overlapping hair
	fill(150, 110, 78);
	rect(width*41/250, height/6.4, height/12, height/41);
	fill(163, 122, 72);
	circle(width*48/250, height/5.9, height/18);
	fill(150, 110, 78);
	ellipse(width*49/250, height/4.9, height/16, height/9);
	fill(150, 110, 78);
	ellipse(width*49/250 + 7, height/4.4, height/15, height/13);
	ellipse(width*49/250 - 7, height/3.9, height/15, height/13);
	fill(163, 122, 72);
	ellipse(width*49/250 - 7, height/3.9, height/15, height/13);
	fill(150, 110, 78);
	ellipse(width*49/250 + 7, height/4.4, height/15, height/13);
	ellipse(width*49/250 + 5, height/3.4, height/15, height/13);

	//facial features
	fill(84, 54, 35)
	ellipse(width*38/250, height/5, 10, 9);
	ellipse(width*42.5/250, height/5, 10, 9);
	stroke(84, 54, 35);
	strokeWeight(1.5);
	line(width*40/250, height/5, width*39.5/250, height/4.6);
	
	noFill();
	arc(width*38/250, height/5.14, 15, 10, PI + 0.5, TWO_PI - 0.5);
	arc(width*42.5/250, height/5.14, 15, 10, PI + 0.5, TWO_PI - 0.5);
	arc(width*40/250, height/4.35, 15, 10, TWO_PI + 0.5, PI - 0.5);

	noStroke();
	fill(240, 197, 197);
	circle(width*37/250, height/4.5, 12);
	circle(width*43/250, height/4.5, 12);
	
	//frame of the painting
	stroke(84, 54, 35);
	noFill();
	strokeWeight(17);
	rect(width*40/250, height/4, width*45/300 + width/80, height/2.8 + 2*height/80);
	noStroke();
	
	//working on the text and legend
	fill(255);
	textSize(36);
	strokeWeight(0);
	text("Most Influential Museums", width*40/250, height*1.7/3);
	textSize(18);
	text("Are there influencer museums? Exploring the top 16 ranked museums based on either visitors or Instagram followers in 2023. The top 3 museums overall are distinguished.", width*4/25, height*1.9/3, 400);
	fill(255);
	text("Legend:", width*4/25, height*2.4/3);
	let color1 = color(88, 138, 110); // First color
  let color2 = color(213, 230, 214); // Second color
  drawGradientRect(width*2.2/25, height*2.5/3, width*1.8/25, color1, color2);
	noStroke();
	textSize(15);
	text(min, width*2.5/25, height*2.5/3 + 20);
	text("Sq. Meters in museum", width*4/25, height*2.5/3 + 20, 80);
	text(max, width*5.5/25, height*2.5/3 + 20);
}

function draw() {
	noStroke();
	fill(255);
	rect((width*8/25) + (width*17/25)/2, height/2, width*17/25, height);
	//draw the axes
	xaxis();
	yaxis();
	//setting minimum and maximums
	let min_visit = 0.53;
	let max_visit = 2.84;
	let min_insta = 0.34;
	let max_insta = 13.36;
	let min_ft = 11000;
	let max_ft = 92000;
	
	//setting up arrays
	let meters = [];
	let visits = [];
	let medias = [];
	let museums = [];
	let points = [];
	
	//loop through to gather data from tables
	for (let row of rows) {
		let meter = row.getNum('meters');
		let visit = row.getNum('visitors');
		let media = row.getNum('social');
		let museum = row.getString("museum");
		append(meters, meter);
		append(visits, visit);
		append(medias, media);
		append(museums, museum);
	}
	//create the circles on the plot now
	for (i = 0; i < table.getRowCount(); i++) {
		noStroke();
		//fill(0,13,77);
		fill(88, 138, 110, map(meters[i], 11000, 92000, 55, 255));
		//let posx = visits[i];
		//let posy = medias[i];
		let sizes = meters[i];
		let name = museums[i];
		let posy = map(medias[i], 0, 13.5, height * 9 / 10, height * 1 / 10);
		let posx = map(visits[i], 0, 3, width * 40 / 100, width * 95 / 100);
		noStroke();
		
	for (i = 0; i < table.getRowCount(); i++) {
    noStroke();
    fill(88, 138, 110, map(meters[i], 11000, 92000, 55, 255));
		let visiting = visits[i];
		let instagram = medias[i];
    let sizes = meters[i];
    let name = museums[i];
    let posy = map(medias[i], 0, 13.5, height * 9 / 10, height * 1 / 10);
    let posx = map(visits[i], 0, 3, width * 40 / 100, width * 95 / 100);
		//pulsate the three "leaders" in the data
    noStroke();
		if (i == 0 || i == 1 || i == 3) {
			let r = 30 +  10 * cos(posx / 100 + frameCount / 30);
			stroke(0, 0, 0);
			strokeWeight(3);
			//circle(posx, posy, 20);
			noStroke();
			circle(posx, posy, r);
		} else {
			noStroke();
    	circle(posx, posy, 20);
		}
		if (
      mouseX > posx - 20 / 3 &&
      mouseX < posx + 20 / 3 &&
      mouseY > posy - 20 / 3 &&
      mouseY < posy + 20 / 3
    ) {
      push();
			fill(88, 138, 110);
			rect(posx,posy - 50,105, 80);
      textSize(12);
      fill(255);
      textAlign(CENTER, CENTER);
      text(name, posx, posy - 70, 100);
			text(round(visiting,2), posx - 15, posy - 40, 100);
			text("visits", posx + 15, posy - 40, 100);
			text(round(instagram,2), posx - 25, posy - 25, 100);
			text("followers", posx + 15, posy - 25, 100);
      fill(255);
      pop();
    }
  }
}
	//create labels for the different quadrants
	fill(48, 77, 60, 180);
	textSize(16);
	textAlign(CENTER, CENTER);
	text("Media moguls, in-person superstars", width*90/100, height*1.5/10, 130);
	text("Influencers", width*45/100, height*1.5/10, 130);
	text("'Hidden' gems", width*45/100, height*8.5/10, 130);
	text("Physical giants", width*90/100, height*8.5/10, 130);
	stroke(88, 138, 110, 90);
	line(width*(40 + 55/2)/100, height*9/10, width*(40+55/2)/100, height*1/10);
	line(width*40/100, height*5/10, width*95/100, height*5/10);
}

//create the axes
function xaxis() {
	fill(48, 77, 60);
	noStroke();
	textSize(20);
	//strokeWeight(0);
	text("Visitors (in millions)", width*((95-40)/2+40)/100, height*9.7/10);
	strokeWeight(2);
	stroke(48, 77, 60);
	line(width*40/100, height*9/10, width*95/100, height*9/10);
	let numTicksX = 8; // Number of ticks on the X-axis
  for (let i = 0; i <= numTicksX; i++) {
		let x = map(i, 0, numTicksX, width * 40 / 100, width * 95 / 100);
		stroke(88, 138, 110, 20);
		line(x, height*9/10, x, height*1/10 - 10);
		stroke(88, 138, 110, 50);
    strokeWeight(2);
    line(x, height * 9 / 10 - 5, x, height * 9 / 10 + 5);
    textSize(15);
		noStroke();
    text(round(i * 3/8,2), x, height * 9 / 10 + 20);
  }
}

function yaxis() {
	fill(48, 77, 60)
	stroke(48, 77, 60);
	textSize(20);
	strokeWeight(0);
	text("Instagram Followers (in millions)", width*40/100, height*0.4/10, 200);
	strokeWeight(2);
	line(width*40/100, height*9/10, width*40/100, height*1/10);
	let numTicksY = 8; // Number of ticks on the Y-axis
  for (let i = 1; i <= numTicksY; i++) {
    let y = map(i, 0, numTicksY, height * 9 / 10, height * 1 / 10);
		strokeWeight(1);
		stroke(88, 138, 110, 20);
		line(width * 40 / 100, y, width * 95 / 100 + 10, y);
		strokeWeight(2);
		stroke(88, 138, 110, 50);
    line(width * 40 / 100 - 5, y, width * 40 / 100 + 5, y);
    textSize(15);
		noStroke();
    text(round(i * 13.5/8,2), width * 40 / 100 - 25, y);
  }
}

//drawing gradient, had help from chatgpt
function drawGradientRect(x, y, w, c1, c2) {
  for (let i = x; i < x + w; i++) {
    let inter = map(i, x, x + w, 0, 1);
    let c = lerpColor(c2, c1, inter);
    stroke(c);
		strokeWeight(10);
    line(i, y, i + w, y);
  }
}

	

