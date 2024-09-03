document.addEventListener('DOMContentLoaded', () =>{
    const emojiArray = ['😂','😂','😹','😹','🦜','🦜','🐟','🐟','🚀','🚀','🚖','🚖','🧠','🧠','🎲','🎲','❤️','❤️','🔥','🔥','💀','💀','😎','😎','🌤️','🌤️','🌈','🌈','👮','👮'];

    const player1 = document.getElementById('p1');
    const player2 = document.getElementById('p2');

    const swapArrayElements = (array) =>{
        let swap;
        let random = Math.floor(Math.random()*1000 % array.length);
        let n = array.length-1;
        let m = n;
        for (let i = n; i>=0; i--){
            swap = array[random];
            array[random] = array[i];;
            array[i] = swap;
            random = Math.floor(Math.random()*1000 % m);
            m--;
        }
    }
    swapArrayElements(emojiArray);
    let save='';
    let counter=0;
    let currentPlayer = 1;
    Array.from(document.querySelectorAll('div')).forEach((element) =>{
        
        element.addEventListener('click', ()=>{
            element.textContent = emojiArray[element.id];
            element.classList.remove('text-7xl');
            element.classList.add('text-5xl');
            element.classList.remove('p-8');
            element.classList.add('p-4');
            setTimeout(()=>{
                if (counter >= 1){
                    if (save.textContent !== element.textContent){
                        save.textContent = '?';
                        element.textContent = '?';
                        element.classList.remove('text-5xl');
                        element.classList.add('text-7xl');
                        element.classList.remove('p-4');
                        element.classList.add('p-8');
                        save.classList.remove('text-5xl');
                        save.classList.add('text-7xl');
                        save.classList.remove('p-4');
                        save.classList.add('p-8');
                        if (currentPlayer === 1){
                            currentPlayer = 2;
                        }
                        else{
                            currentPlayer = 1;
                        }
                    }
                    else{
                        if (currentPlayer === 1){
                            player1.textContent++
                        }
                        else{
                            player2.textContent++;
                        }
                    }

                    counter = 0;
                    save='';
                }
                else{
                    counter++;
                    save = element;
                }
                
            },700);
            
        })
    })

    


})