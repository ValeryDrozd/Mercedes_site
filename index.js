
let Engines = [["a160.jpg","A 160","26.946,80 EUR","Gasoline A98","6 gear manual","109 HP","Euro 6","122 g/km","5,6 l/100km","None"],
				["a180d.jpg","A 180d","30.020,80 EUR","Diesel","6 gear manual","116 HP","Euro 6","123 g/km","4,7 l/100km","None"],
				["a220d4matic.jpg","A 220d 4MATIC","39.318,20 EUR","Diesel","8G-DKT","224 HP","Euro 6","116 g/km","4,6 l/100km","None"],
				["a250e.jpg","A 250e","36.812,60 EUR","Gasoline A98","8G-DKT","160 HP + 102 HP","Euro 6","32 g/km","1,4 l/100km","53 Wh/km(max way:77km)"],
				["a45s.jpg","A 45 S AMG 4MATIC+","61.103,00 EUR","Gasoline A98","AMG SPEEDSHIFT DCT 8G","421 HP","Euro 6","32 g/km","8,4 l/100km","None"]
				];

let contIds = ["firstEngine","secondEngine","thirdEngine"];
let nameRows = ["Price","Petrol","Power","Gearbox","Eco","Co2","Cons","Elec"];
let FullNameRows = ["Base price:","Petrol type","Engine power:","Gearbox type:","Eco standart:","Co2 emission:","Fuel consumption:","Electricity consumption: "];

let l = 1,r = 3;
function change(side){
	if(side=='L'){
		l-=1;
		r-=1;
		if(l==-1)l=4;
		if(r==-1)r=4;
	}else{
		l+=1;
		r+=1;
		if(r==5)r=0;
		if(l==5)l=0;
	}
	let nc = l;
	for(let j=0;j<=2;j++){
		document.getElementById(contIds[j]+"Name").innerText = Engines[nc][1];
		document.getElementById(contIds[j]+"Img").src = Engines[nc][0];
		for(let k=2;k<=9;k++){
			document.getElementById(contIds[j]+nameRows[k-2]).innerText = FullNameRows[k-2]+" "+Engines[nc][k];
		}
		nc+=1;
		if(nc==-1)nc=4;
		if(nc==5)nc=0;
	}
		
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('upBtn').hidden = false;
 //   console.log("Scroll");
  } else {
    document.getElementById('upBtn').hidden = true;
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}