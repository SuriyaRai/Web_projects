var timer = null;
var danger;
var exp
        
function init(){
    var car = document.getElementById('car');
    car.style.position='relative'
    car.style.left='2px';
    danger = document.getElementById('danger');
    exp = document.getElementById('exp')
}

function move(){
    car.style.left = parseInt(car.style.left)+2+'px';
    timer = setTimeout(move,1);
    if (parseInt(car.style.left)>='800'){
        clearTimeout(timer)
        // danger.style.display='block';
        
        exp.style.display = 'block';
    }
    }
        
function pause(){
    clearTimeout(timer);
}
        
function reset(){
    clearTimeout(timer)
    car.style.left = '0px';
    exp.style.display = 'none';
    danger.style.display='none';

}