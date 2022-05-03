const _sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
async function typingAnimation(arg){
    for (let i=0; i< arg.length; i++){
        $('h1').text(arg.slice(0,i+1));
        await _sleep(30);
    }
}
async function loopTypingAnimation(array){
    for (let j of array){
        typingAnimation(j);
        await _sleep(30*j.length+1000);
    }
}