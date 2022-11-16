//funzioni

function creazioneDiv (x, y, z){
   const newEl= document.createElement("div");
   newEl.classList.add("box", `${z}`);
   newEl.innerHTML += x;
   y.append(newEl);
}

function cambioCol(){
    this.classList.add('col_nuovo');
    console.log(this.innerHTML);
}