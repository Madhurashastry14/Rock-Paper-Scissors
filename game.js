let playernow, computernow, computerscore=0, playerscore=0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("playerscore").innerHTML="Score:" + playerscore;
document.getElementById("computerscore").innerHTML="Score:" + computerscore;

document.getElementById("Rock").addEventListener("click" ,(event) => {
    document.getElementById("result").innerHTML="";
    playernow="Rock";
    document.getElementById("playermove").innerHTML=playernow;
    computermove();
})

document.getElementById("Paper").addEventListener("click" ,(event) => {
    document.getElementById("result").innerHTML="";
    playernow="Paper";
    document.getElementById("playermove").innerHTML=playernow;
    computermove();
})

document.getElementById("Scissors").addEventListener("click" ,(event) => {
    document.getElementById("result").innerHTML="";
    playernow="Scissors";
    document.getElementById("playermove").innerHTML=playernow;
    computermove();
})

async function computermove() {
    let computerchoice=["Rock","Paper","Scissors"];
    computernow = computerchoice[Math.floor(Math.random() * computerchoice.length)];
    document.getElementById("computermove").innerHTML="Let me think...";
    await sleep(1500);
    document.getElementById("computermove").innerHTML=computernow;
    winner();
}

function winner() {
    if(playernow=="Rock") {
        if(computernow=="Rock") {
            document.getElementById("result").innerHTML="It's a Draw!";
            document.getElementById("computerscore").innerHTML="Score:" + computerscore;
            document.getElementById("playerscore").innerHTML="Score:" + playerscore;
        }
        else if(computernow=="Paper") {
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


    if(playernow=="Paper") {
        if(computernow=="Paper") {
            document.getElementById("result").innerHTML="It's a Draw!";
            document.getElementById("computerscore").innerHTML="Score:" + computerscore;
            document.getElementById("playerscore").innerHTML="Score:" + playerscore;
        }
        else if(computernow=="Rock") {
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


    if(playernow=="Scissors") {
        if(computernow=="Scissors") {
            document.getElementById("result").innerHTML="It's a Draw!";
            document.getElementById("playerscore").innerHTML="Score:" + playerscore;
            document.getElementById("computerscore").innerHTML="Score:" + computerscore;
        }
        else if(computernow=="Paper") {
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