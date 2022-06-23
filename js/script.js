const container = document.getElementById("contenitore");

function newElementSquare (){
    const newElement = document.createElement("div");
    newElement.classList.add("square");
    return newElement;
};




const play = document.getElementById("button");

play.addEventListener('click', function(){
    container.innerHTML = null

    for (let i = 1; i <= 100; i++){
        let newSquare = newElementSquare ();
    
        newSquare.addEventListener('click', function(){
            newSquare.classList.add("active")
            console.log(`hai cliccato ${i}`)
        });
    
        newSquare.innerHTML = i
    
        container.append(newSquare);
    };
})




