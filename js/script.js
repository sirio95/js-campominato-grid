let start = document.getElementById('start');



start.addEventListener('click', 
    function(){
        let difficulty= document.getElementById('difficulty').value;
        const campo= document.getElementById('campo');

        // creazione campo

        if(difficulty === 'beginner'){
            for (let i=1; i<101; i++){
                const classe= "per10";
                creazioneDiv(i, campo, classe);
            }


        }else if(difficulty === 'intermediate'){
            for(let i=1; i<82; i++){
                const classe= "per9";
                creazioneDiv(i, campo, classe);
            }
        }else if(difficulty === 'hard'){
            for(let i=1; i<50; i++){
                const classe= "per7";
                creazioneDiv(i, campo, classe);
            }
        }








    }
)

