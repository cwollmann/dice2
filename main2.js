

//preload the six images first
        var face0=new Image()
        face0.src="d1.gif"
        var face1=new Image()
        face1.src="d2.gif"
        var face2=new Image()
        face2.src="d3.gif"
        var face3=new Image()
        face3.src="d4.gif"
        var face4=new Image()
        face4.src="d5.gif"
        var face5=new Image()
        face5.src="d6.gif"

function throwdice(){
//create a random integer between 0 and 5
var randomdice=Math.round(Math.random()*5)
document.images["mydice"].src=eval("face"+randomdice+".src")
}
