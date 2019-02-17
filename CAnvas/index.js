var canvas=document.querySelector('canvas')
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d')
//rectange/square
c.fillStyle='rgba(200,20,10,0.3';
c.fillRect(100,200,300,300);
c.fillRect(200,100,200,200);
c.fillRect(350,200,100,100);
//line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle="#faahb6";
c.stroke();
for( i=0;i<200;i++)
{
var x=Math.random()*window.innerHeight;
var y=Math.random()*window.innerWidth;
c.beginPath();
c.arc(y,x,40,Math.PI*2,false);
c.strokeStyle=getRndColor(); 
c.stroke();


}

function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

console.log('canvas');