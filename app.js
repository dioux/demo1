
var p = document.querySelector('.paragraph')
console.log(p)
window.setInterval(function(){
    try{
        p.classList.toggle('blue')
    }
   catch(e){
       console.log(e)
   }
},1000)

//factory function
function createCircle(radius){
    return{
        radius ,
        draw : function (){
            console.log("draw");
        }
    };    
}

const circle = createCircle(1);
circle.draw();