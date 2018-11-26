var img = document.getElementById('img');
var ctx = img.getContext('2d');

img.width="600";
img.height="300";
//птица
//тело
ctx.beginPath();
ctx.fillStyle="#ffffff";
ctx.ellipse(150, 140, 80, 50, Math.PI/180, 0, 2 * Math.PI);
ctx.lineWidth = 3;
ctx.closePath();
ctx.stroke();
ctx.fill();

//голова
ctx.beginPath();
ctx.ellipse(80, 85, 30, 25, Math.PI/180, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();
ctx.fill();

//крыло верхнее
ctx.beginPath();
ctx.lineWidth = 1.5;

ctx.moveTo(195,150);
ctx.lineTo(195,115);

ctx.moveTo(195,115);
ctx.lineTo(260,115);

ctx.moveTo(260,115);
ctx.lineTo(195,150);

//крыло нижнее
ctx.moveTo(130,160);
ctx.lineTo(185,220);

ctx.moveTo(185,160);
ctx.lineTo(130,160);

ctx.moveTo(185,220);
ctx.lineTo(185,160);

//клюв
ctx.moveTo(55,75);
ctx.lineTo(55,90);

ctx.moveTo(55,90);
ctx.lineTo(30,90);

ctx.moveTo(30,90);
ctx.lineTo(55,75);

//крыло ноги
ctx.moveTo(150,190);
ctx.lineTo(165,230);

ctx.moveTo(125,187);
ctx.lineTo(110,230);

ctx.closePath();
ctx.stroke();
ctx.fill();

//флаг
ctx.beginPath();
ctx.fillStyle="#a9a9a9";
ctx.fillRect(300,0,300,300);
ctx.stroke();
ctx.fill();

ctx.fillStyle="#2b3eda";
ctx.fillRect(350,80,200,100);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 30;
ctx.strokeStyle="#ffdd21";

ctx.moveTo(350,130);
ctx.lineTo(550,130);

ctx.moveTo(425,80);
ctx.lineTo(425,180);
ctx.stroke();
ctx.fill();

ctx.lineWidth = 13;
ctx.strokeStyle="#d8243a";

ctx.moveTo(350,130);
ctx.lineTo(550,130);

ctx.moveTo(425,80);
ctx.lineTo(425,180);

ctx.closePath();
ctx.stroke();
ctx.fill();
