var test = document.getElementById("test");
var str = "str";

var c = document.getElementById("c");
var ctx = c.getContext("2d");
/** 这里控制显示的宽度和高度，且涵盖所有浏览器 */
c.width = 0.7*(window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth);
c.height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
//c.width = 300;
//c.height = 300;

//ctx.fillStyle = "1cba9c";
//ctx.fillRect(0,0,100,100);
//ctx.fillStyle = "ecb69c";
//ctx.fillText("雨滴",10,90);

//var chinese = "HTML CSS JavaScript";
//chinese = chinese.split("");
var chinese=["HTML","CSS","JS","Java","android","vue","xml","swift","ruby","hodoop","spark","Node","小程序","swiper","Angular","react","bootstrap","zepto","jquery","Kissy","php","C++",".net","人工智能","无线AllIn","sass","ExtJs","Oracle","MySql","MongDb","ajax","Python","IOS"]
var fsize = 30;
columns = c.width / fsize;

var drops=[];
for(var x=0;x<columns;x++) {
    drops[x] = 0;
}

function draw(){
    ctx.fillStyle="#F7EBBB";
    ctx.fillRect(0,0, c.width, c.height);
    ctx.fillStyle="black";
    ctx.font = fsize + "px arial";
    for(var i=0;i<drops.length;i++){
        var text = chinese[Math.floor(Math.random()*chinese.length)];
        ctx.fillText(text,i*fsize,drops[i]*fsize);
        drops[i]++;
        if(drops[i]*fsize > c.height && Math.random() > 0.9){
            drops[i] = 0;
        }
        str = drops[i]+",";
    }
}
var intervalId = setInterval(draw,100);// 这里修改控制速度
