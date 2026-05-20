let playernow, computernow, computerscore=0, playerscore=0;
document.getElementById("playerscore").innerHTML="Score:" + playerscore;
document.getElementById("computerscore").innerHTML="Score:" + computerscore;

document.getElementById("Rock").addEventListener("click" ,(event) => {
    document.getElementById("result").innerHTML="";
    playernow="👊";
    document.getElementById("playermove").innerHTML=playernow;
    computermove();
})

document.getElementById("Paper").addEventListener("click" ,(event) => {
    document.getElementById("result").innerHTML="";
    playernow="✋";
    document.getElementById("playermove").innerHTML=playernow;
    computermove();
})

document.getElementById("Scissors").addEventListener("click" ,(event) => {
    document.getElementById("result").innerHTML="";
    playernow="✌️";
    document.getElementById("playermove").innerHTML=playernow;
    computermove();
})

async function computermove() {
    let computerchoice=["👊","✋","✌️"];
    computernow = computerchoice[Math.floor(Math.random() * computerchoice.length)];
    document.getElementById("computermove").innerHTML=computernow;
    winner();
}

function winner() {
    if(playernow=="👊") {
        if(computernow=="👊") {
            document.getElementById("result").innerHTML="It's a Draw!";
            document.getElementById("computerscore").innerHTML="Score:" + computerscore;
            document.getElementById("playerscore").innerHTML="Score:" + playerscore;
        }
        else if(computernow=="✋") {
            document.getElementById("result").innerHTML="Computer Won!";
            computerscore+=1;
            document.getElementById("computerscore").innerHTML="Score:" + computerscore;
            document.getElementById("playerscore").innerHTML="Score:" + playerscore;
        }
        else {
            document.getElementById("result").innerHTML="You Won!";
            playerscore+=1;
            document.getElementById("playerscore").innerHTML="Score:" + playerscore;
            document.getElementById("computerscore").innerHTML="Score:" + computerscore;
        }
    }


    if(playernow=="✋") {
        if(computernow=="✋") {
            document.getElementById("result").innerHTML="It's a Draw!";
            document.getElementById("computerscore").innerHTML="Score:" + computerscore;
            document.getElementById("playerscore").innerHTML="Score:" + playerscore;
        }
        else if(computernow=="👊") {
            document.getElementById("result").innerHTML="You Won!";
            playerscore+=1;
            document.getElementById("playerscore").innerHTML="Score:" + playerscore;
            document.getElementById("computerscore").innerHTML="Score:" + computerscore;
        }
        else {
            document.getElementById("result").innerHTML="Computer Won!";
            computerscore+=1;
            document.getElementById("computerscore").innerHTML="Score:" + computerscore;
            document.getElementById("playerscore").innerHTML="Score:" + playerscore;
        }
    }


    if(playernow=="✌️") {
        if(computernow=="✌️") {
            document.getElementById("result").innerHTML="It's a Draw!";
            document.getElementById("playerscore").innerHTML="Score:" + playerscore;
            document.getElementById("computerscore").innerHTML="Score:" + computerscore;
        }
        else if(computernow=="✋") {
            document.getElementById("result").innerHTML="You Won!";
            playerscore+=1;
            document.getElementById("playerscore").innerHTML="Score:" + playerscore;
            document.getElementById("computerscore").innerHTML="Score:" + computerscore;
        }
        else {
            document.getElementById("result").innerHTML="Computer Won!";
            computerscore+=1;
            document.getElementById("computerscore").innerHTML="Score:" + computerscore;
            document.getElementById("playerscore").innerHTML="Score:" + playerscore;
        }
    }
}

document.getElementById("reset").addEventListener("click",(event) => {
    playerscore=0;
    computerscore=0;
    document.getElementById("computermove").innerHTML="";
    document.getElementById("playermove").innerHTML="";
    document.getElementById("computerscore").innerHTML="";
    document.getElementById("playerscore").innerHTML="";
    document.getElementById("result").innerHTML="";
})