// =====================================================================
        // team name #start
// =====================================================================
let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let total = document.querySelector('.total')
let teamName = document.querySelector('.teamName')
let submit = document.querySelector('.submit')
let teamName1 = document.querySelector('.teamName1')
let submit1 = document.querySelector('.submit1')
let toss = document.querySelector('.toss')
let tossWin = document.querySelector('.tossWin')
let aToss = document.querySelector('.aToss')
let or = document.querySelector('.or')
let bat = document.querySelector('.bat')
let bwl = document.querySelector('.bwl')
let err1 = document.querySelector('.err1')


submit.addEventListener('click',function(){
    if(!(teamName.value)){
        err1.innerHTML= 'Empty field'
        err1.style.color= 'red'
    }else{

        team1.innerHTML = teamName.value;
        submit1.style.display = 'inline-Block'
        teamName1.style.display = 'inline-Block'
        submit.style.display = 'none'
        teamName.style.display = 'none'
        err1.style.display= 'none'
    }
    
    
})
let bwli;
bwl.addEventListener('click',function(){
    bwli= bwl.innerHTML.toLowerCase();
    aToss.innerHTML = tossW+' won the toss and elected to '+ bwli +' first.';
    bwl.style.display = 'none';
    bat.style.display = 'none';
    tro.style.display= 'flex';
    
    

})
let bati;
bat.addEventListener('click',function(){
    bati= bat.innerHTML.toLowerCase();
    aToss.innerHTML = tossW+' won the toss and elected to '+ bati +' first.'
    bwl.style.display = 'none';
    bat.style.display = 'none';
    tro.style.display= 'flex';
    
})

let tossW;
tossWin.addEventListener('click',function(){
    if((toss.value.toLowerCase() ==teamName1.value.toLowerCase()) || (toss.value.toLowerCase() ==teamName.value.toLowerCase())){

        tossW = toss.value;
        tossWin.style.display = 'none'
        toss.style.display = 'none'
        bwl.style.display ='inline-block'
        bat.style.display ='inline-block'
        err1.style.display = 'none'
    }else{
        err1.innerHTML= 'Spelling Mistake';
        err1.style.display = 'block'
        err1.style.color = 'red'
    }
    
    
})

submit1.addEventListener('click',function(){
    if(!(teamName1.value)){
        err1.innerHTML = 'Empty Field';
        err1.style.color= 'red'
        err1.style.display= 'block'
    }else{

        team2.innerHTML = teamName1.value;
        submit1.style.display = 'none'
        teamName1.style.display = 'none'
        toss.style.display = 'inline-block'
        tossWin.style.display = 'inline-block'
        err1.style.display= 'none'
    }
    
   
})
// =====================================================================
        // team name #End
// =====================================================================

// =====================================================================
        // total run and over #Start
// =====================================================================
let tro = document.querySelector('.tro')
let run= document.querySelector('.run')
let wicket= document.querySelector('.wicket')
let runPlus= document.querySelector('.runPlus')
let runMinus= document.querySelector('.runMinus')
let over= document.querySelector('.over')
let overPlus= document.querySelector('.overPlus')
let overMinus= document.querySelector('.overMinus')
let wicket1 = document.querySelector('.wicket1')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let six = document.querySelector('.six')
let ol = document.querySelector('.ol')
let overLimit = document.querySelector('.overLimit')
let totalOver = document.querySelector('.totalOver')

let runCounter=0;
let overCounter=0;
let wicketCounter = 0
let overL;

runPlus.addEventListener('click',function(){
    runCounter++;
    run.innerHTML = runCounter;
})
runMinus.addEventListener('click',function(){
    runCounter--;
    run.innerHTML = runCounter;
})
overPlus.addEventListener('click',function(){
    overCounter++;
    if(overCounter<overL){
        over.innerHTML = overCounter;
    }
    else{
        over.innerHTML = 'end'+'('+overL+')'
        overPlus.style.display ='none'
        overMinus.style.display ='none'
        runMinus.style.display ='none'
        runPlus.style.display ='none'
        three.style.display ='none'
        four.style.display ='none'
        six.style.display ='none'
        wicket.style.display= 'none'
        
    }
})
overMinus.addEventListener('click',function(){
    overCounter--;
    over.innerHTML = overCounter;
})
let batsman = document.querySelector('.batsman')
overLimit.addEventListener('click',function(){
    overL = ol.value;
    overLimit.style.display = 'none';
    ol.style.display ='none';
    totalOver.style.display = 'inline-block';
    overPlus.style.display ='inline-block';
    overMinus.style.display ='inline-block';
    batsman.style.display= 'inline-block';
})

wicket.addEventListener('click',function(){
    wicketCounter++;
    if(wicketCounter<10){
        wicket1.innerHTML = wicketCounter;
    }
    else{
        wicket1.innerHTML = 'all out'
        wicket.style.display='none'
        overPlus.style.display ='none'
        overMinus.style.display ='none'
        runMinus.style.display ='none'
        runPlus.style.display ='none'
        three.style.display ='none'
        four.style.display ='none'
        six.style.display ='none'
        wicket.style.display= 'none'
    }
})
three.addEventListener('click',function(){
    runCounter+=3;
    run.innerHTML= runCounter;
})
four.addEventListener('click',function(){
    runCounter+=4;
    run.innerHTML= runCounter;
})
six.addEventListener('click',function(){
    runCounter+=6;
    run.innerHTML= runCounter;
})


// =====================================================================
        // total run and over #End
// =====================================================================
let batterBaller = document.querySelector('.batterBaller')
let bnInput = document.querySelector('.bnInput')
let batbtn = document.querySelector('.batbtn')
// Player portion #Start
let player1 = document.querySelector('.player1')
let player2 = document.querySelector('.player2')
let player3 = document.querySelector('.player3')
let player4 = document.querySelector('.player4')
let player5 = document.querySelector('.player5')
let player6 = document.querySelector('.player6')
let player7 = document.querySelector('.player7')
let player8 = document.querySelector('.player8')
let player9 = document.querySelector('.player9')
let player10 = document.querySelector('.player10')
let player11 = document.querySelector('.player11')
// Player portion #End

// p out portion #Start
let p1Out = document.querySelector('.p1Out')

let p2Out = document.querySelector('.p2Out')
let p3Out = document.querySelector('.p3Out')
let p4Out = document.querySelector('.p4Out')
let p5Out = document.querySelector('.p5Out')
let p6Out = document.querySelector('.p6Out')
let p7Out = document.querySelector('.p7Out')
let p8Out = document.querySelector('.p8Out')
let p9Out = document.querySelector('.p9Out')
let p10Out = document.querySelector('.p10Out')
let p11Out = document.querySelector('.p11Out')
// p out portion #End


// P portion #Start
let p1 = document.querySelector('.p1')
let p2 = document.querySelector('.p2')
let p3 = document.querySelector('.p3')
let p4 = document.querySelector('.p4')
let p5 = document.querySelector('.p5')
let p6 = document.querySelector('.p6')
let p7 = document.querySelector('.p7')
let p8 = document.querySelector('.p8')
let p9 = document.querySelector('.p9')
let p10 = document.querySelector('.p10')
let p11 = document.querySelector('.p11')
// P portion #End
// b portion #Start
let b1 = document.querySelector('.b1')
let b2 = document.querySelector('.b2')
let b3 = document.querySelector('.b3')
let b4 = document.querySelector('.b4')
let b5 = document.querySelector('.b5')
let b6 = document.querySelector('.b6')
let b7 = document.querySelector('.b7')
let b8 = document.querySelector('.b8')
let b9 = document.querySelector('.b9')
let b10 = document.querySelector('.b10')
let b11 = document.querySelector('.b11')
// b portion #End
// b portion #Start
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let btn5 = document.querySelector('.btn5')
let btn6 = document.querySelector('.btn6')
let btn7 = document.querySelector('.btn7')
let btn8 = document.querySelector('.btn8')
let btn9 = document.querySelector('.btn9')
let btn10 = document.querySelector('.btn10')
let btn11 = document.querySelector('.btn11')
// b portion #End


// Out portion #tart
p1Out.addEventListener('click',function(){
    p1RunPlus.style.display = 'none'
    p1BallPlus.style.display = 'none'
    p1RunMinus.style.display = 'none'
    p1BallMinus.style.display = 'none'
    p1Out.style.display = 'none'
})
p2Out.addEventListener('click',function(){
    p2RunPlus.style.display = 'none'
    p2BallPlus.style.display = 'none'
    p2RunMinus.style.display = 'none'
    p2BallMinus.style.display = 'none'
    p2Out.style.display = 'none'
})

p3Out.addEventListener('click',function(){
    p3RunPlus.style.display = 'none'
    p3BallPlus.style.display = 'none'
    p3RunMinus.style.display = 'none'
    p3BallMinus.style.display = 'none'
    p3Out.style.display = 'none'
})
p4Out.addEventListener('click',function(){
    p4RunPlus.style.display = 'none'
    p4BallPlus.style.display = 'none'
    p4RunMinus.style.display = 'none'
    p4BallMinus.style.display = 'none'
    p4Out.style.display = 'none'
})
p11Out.addEventListener('click',function(){
    p11RunPlus.style.display = 'none'
    p11BallPlus.style.display = 'none'
    p11RunMinus.style.display = 'none'
    p11BallMinus.style.display = 'none'
    p11Out.style.display = 'none'
})
p5Out.addEventListener('click',function(){
    p5RunPlus.style.display = 'none'
    p5BallPlus.style.display = 'none'
    p5RunMinus.style.display = 'none'
    p5BallMinus.style.display = 'none'
    p5Out.style.display = 'none'
})
p6Out.addEventListener('click',function(){
    p6RunPlus.style.display = 'none'
    p6BallPlus.style.display = 'none'
    p6RunMinus.style.display = 'none'
    p6BallMinus.style.display = 'none'
    p6Out.style.display = 'none'
})
p7Out.addEventListener('click',function(){
    p7RunPlus.style.display = 'none'
    p7BallPlus.style.display = 'none'
    p7RunMinus.style.display = 'none'
    p7BallMinus.style.display = 'none'
    p7Out.style.display = 'none'
})
p8Out.addEventListener('click',function(){
    p8RunPlus.style.display = 'none'
    p8BallPlus.style.display = 'none'
    p8RunMinus.style.display = 'none'
    p8BallMinus.style.display = 'none'
    p8Out.style.display = 'none'
})
p9Out.addEventListener('click',function(){
    p9RunPlus.style.display = 'none'
    p9BallPlus.style.display = 'none'
    p9RunMinus.style.display = 'none'
    p9BallMinus.style.display = 'none'
    p9Out.style.display = 'none'
})
p10Out.addEventListener('click',function(){
    p10RunPlus.style.display = 'none'
    p10BallPlus.style.display = 'none'
    p10RunMinus.style.display = 'none'
    p10BallMinus.style.display = 'none'
    p10Out.style.display = 'none'
})
// Out portion #End
// Batter Name Protion #Start
let err2 = document.querySelector('.err2')
btn1.addEventListener('click',function(){
    if(!(b1.value)){
        err2.innerHTML = 'Write a Batter name.'
    }else{
        err2.style.display = 'none'
        p1.innerHTML = b1.value;
        player1.style.display= 'block'
        btn1.style.display = 'none'
        b1.style.display = 'none';
        btn2.style.display = 'inline-block'
        b2.style.display = 'inline-block';
    }
 
})
btn2.addEventListener('click',function(){
    if(!(b2.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p2.innerHTML = b2.value;
        player2.style.display= 'block'
        btn2.style.display = 'none'
        b2.style.display = 'none';
        btn3.style.display = 'inline-block'
        b3.style.display = 'inline-block';
    }
})
btn3.addEventListener('click',function(){
    if(!(b3.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p3.innerHTML = b3.value;
        player3.style.display= 'block'
        btn3.style.display = 'none'
        b3.style.display = 'none';
        btn4.style.display = 'inline-block'
        b4.style.display = 'inline-block';
    }
})
btn4.addEventListener('click',function(){
    if(!(b4.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p4.innerHTML = b4.value;
        player4.style.display= 'block'
        btn4.style.display = 'none'
        b4.style.display = 'none';
        btn5.style.display = 'inline-block'
        b5.style.display = 'inline-block';
    }
})
btn5.addEventListener('click',function(){
    if(!(b5.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p5.innerHTML = b5.value;
        player5.style.display= 'block'
        btn5.style.display = 'none'
        b5.style.display = 'none';
        btn6.style.display = 'inline-block'
        b6.style.display = 'inline-block';
    }
})
btn6.addEventListener('click',function(){
    if(!(b6.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p6.innerHTML = b6.value;
        player6.style.display= 'block'
        btn6.style.display = 'none'
        b6.style.display = 'none';
        btn7.style.display = 'inline-block'
        b7.style.display = 'inline-block';
    }
})
btn7.addEventListener('click',function(){
    if(!(b7.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p7.innerHTML = b7.value;
        player7.style.display= 'block'
        btn7.style.display = 'none'
        b7.style.display = 'none';
        btn8.style.display = 'inline-block'
        b8.style.display = 'inline-block';
    }
})
btn8.addEventListener('click',function(){
    if(!(b8.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p8.innerHTML = b8.value;
        player8.style.display= 'block'
        btn8.style.display = 'none'
        b8.style.display = 'none';
        btn9.style.display = 'inline-block'
        b9.style.display = 'inline-block';
    }
})
btn9.addEventListener('click',function(){
    if(!(b9.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p9.innerHTML = b9.value;
        player9.style.display= 'block'
        btn9.style.display = 'none'
        b9.style.display = 'none';
        btn10.style.display = 'inline-block'
        b10.style.display = 'inline-block';
    }
})
btn10.addEventListener('click',function(){
    if(!(b10.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p10.innerHTML = b10.value;
        player10.style.display= 'block'
        btn10.style.display = 'none'
        b10.style.display = 'none';
        btn11.style.display = 'inline-block'
        b11.style.display = 'inline-block';
    }
})
btn11.addEventListener('click',function(){
    if(!(b11.value)){
        err2.innerHTML = 'Write a Batter name.'
        err2.style.display = 'inline-block'
    }
    else{
        err2.style.display = 'none'
        p11.innerHTML = b11.value;
        player11.style.display= 'block'
        btn11.style.display = 'none'
        b11.style.display = 'none';
    }
})

// Batter Name Protion #End

// Player Run portion #start
let p1run = document.querySelector('.p1run')
let p2run = document.querySelector('.p2run')
let p3run = document.querySelector('.p3run')
let p4run = document.querySelector('.p4run')
let p5run = document.querySelector('.p5run')
let p6run = document.querySelector('.p6run')
let p7run = document.querySelector('.p7run')
let p8run = document.querySelector('.p8run')
let p9run = document.querySelector('.p9run')
let p10run = document.querySelector('.p10run')
let p11run = document.querySelector('.p11run')

// Player Run portion #End

// Player Ball face #start
let p1Ball = document.querySelector('.p1Ball')
let p2Ball = document.querySelector('.p2Ball')
let p3Ball = document.querySelector('.p3Ball')
let p4Ball = document.querySelector('.p4Ball')
let p5Ball = document.querySelector('.p5Ball')
let p6Ball = document.querySelector('.p6Ball')
let p7Ball = document.querySelector('.p7Ball')
let p8Ball = document.querySelector('.p8Ball')
let p9Ball = document.querySelector('.p9Ball')
let p10Ball = document.querySelector('.p10Ball')
let p11Ball = document.querySelector('.p11Ball')


// Player Ball face #End

// Player run+ #Start
let p1RunPlus = document.querySelector('.p1RunPlus')
let p2RunPlus = document.querySelector('.p2RunPlus')
let p3RunPlus = document.querySelector('.p3RunPlus')
let p4RunPlus = document.querySelector('.p4RunPlus')
let p5RunPlus = document.querySelector('.p5RunPlus')
let p6RunPlus = document.querySelector('.p6RunPlus')
let p7RunPlus = document.querySelector('.p7RunPlus')
let p8RunPlus = document.querySelector('.p8RunPlus')
let p9RunPlus = document.querySelector('.p9RunPlus')
let p10RunPlus = document.querySelector('.p10RunPlus')
let p11RunPlus = document.querySelector('.p11RunPlus')

// Player run+ #End

// Player run- #Start
let p1RunMinus = document.querySelector('.p1RunMinus')
let p2RunMinus = document.querySelector('.p2RunMinus')
let p3RunMinus = document.querySelector('.p3RunMinus')
let p4RunMinus = document.querySelector('.p4RunMinus')
let p5RunMinus = document.querySelector('.p5RunMinus')
let p6RunMinus = document.querySelector('.p6RunMinus')
let p7RunMinus = document.querySelector('.p7RunMinus')
let p8RunMinus = document.querySelector('.p8RunMinus')
let p9RunMinus = document.querySelector('.p9RunMinus')
let p10RunMinus = document.querySelector('.p10RunMinus')
let p11RunMinus = document.querySelector('.p11RunMinus')

// Player run- #End

// Player Ball+ #Start
let p1BallPlus = document.querySelector('.p1BallPlus')
let p2BallPlus = document.querySelector('.p2BallPlus')
let p3BallPlus = document.querySelector('.p3BallPlus')
let p4BallPlus = document.querySelector('.p4BallPlus')
let p5BallPlus = document.querySelector('.p5BallPlus')
let p6BallPlus = document.querySelector('.p6BallPlus')
let p7BallPlus = document.querySelector('.p7BallPlus')
let p8BallPlus = document.querySelector('.p8BallPlus')
let p9BallPlus = document.querySelector('.p9BallPlus')
let p10BallPlus = document.querySelector('.p10BallPlus')
let p11BallPlus = document.querySelector('.p11BallPlus')
// Player Ball+ #End

// Player Ball- #Start
let p1BallMinus = document.querySelector('.p1BallMinus')
let p2BallMinus = document.querySelector('.p2BallMinus')
let p3BallMinus = document.querySelector('.p3BallMinus')
let p4BallMinus = document.querySelector('.p4BallMinus')
let p5BallMinus = document.querySelector('.p5BallMinus')
let p6BallMinus = document.querySelector('.p6BallMinus')
let p7BallMinus = document.querySelector('.p7BallMinus')
let p8BallMinus = document.querySelector('.p8BallMinus')
let p9BallMinus = document.querySelector('.p9BallMinus')
let p10BallMinus = document.querySelector('.p10BallMinus')
let p11BallMinus = document.querySelector('.p11BallMinus')
// Player Ball- #End



// RunPlus Button #Start
let runC=0;
p1RunPlus.addEventListener('click',function(){
    runC++;
    p1run.innerHTML = runC;
})
p1RunMinus.addEventListener('click',function(){
    runC--;
    p1run.innerHTML = runC;
})
let p2RunC = 0;
p2RunPlus.addEventListener('click',function(){
    p2RunC++;
    p2run.innerHTML = p2RunC;
})
p2RunMinus.addEventListener('click',function(){
    p2RunC--;
    p2run.innerHTML = p2RunC;
})
let p3RunC = 0;
p3RunPlus.addEventListener('click',function(){
    p3RunC++;
    p3run.innerHTML = p3RunC;
})
p3RunMinus.addEventListener('click',function(){
    p3RunC--;
    p3run.innerHTML = p3RunC;
})
let p4RunC = 0;
p4RunPlus.addEventListener('click',function(){
    p4RunC++;
    p4run.innerHTML = p4RunC;
})
p4RunMinus.addEventListener('click',function(){
    p4RunC--;
    p4run.innerHTML = p4RunC;
})
let p5RunC = 0;
p5RunPlus.addEventListener('click',function(){
    p5RunC++;
    p5run.innerHTML = p5RunC;
})
p5RunMinus.addEventListener('click',function(){
    p5RunC--;
    p5run.innerHTML = p5RunC;
})
let p6RunC = 0;
p6RunPlus.addEventListener('click',function(){
    p6RunC++;
    p6run.innerHTML = p6RunC;
})
p6RunMinus.addEventListener('click',function(){
    p6RunC--;
    p6run.innerHTML = p6RunC;
})
let p7RunC = 0;
p7RunPlus.addEventListener('click',function(){
    p7RunC++;
    p7run.innerHTML = p7RunC;
})
p7RunMinus.addEventListener('click',function(){
    p7RunC--;
    p7run.innerHTML = p7RunC;
})
let p8RunC = 0;
p8RunPlus.addEventListener('click',function(){
    p8RunC++;
    p8run.innerHTML = p8RunC;
})
p8RunMinus.addEventListener('click',function(){
    p8RunC--;
    p8run.innerHTML = p8RunC;
})
let p9RunC = 0;
p9RunPlus.addEventListener('click',function(){
    p9RunC++;
    p9run.innerHTML = p9RunC;
})
p9RunMinus.addEventListener('click',function(){
    p9RunC--;
    p9run.innerHTML = p9RunC;
})
let p10RunC = 0;
p10RunPlus.addEventListener('click',function(){
    p10RunC++;
    p10run.innerHTML = p10RunC;
})
p10RunMinus.addEventListener('click',function(){
    p10RunC--;
    p10run.innerHTML = p10RunC;
})
let p11RunC = 0;
p11RunPlus.addEventListener('click',function(){
    p11RunC++;
    p11run.innerHTML = p11RunC;
})
p11RunMinus.addEventListener('click',function(){
    p11RunC--;
    p11run.innerHTML = p11RunC;
})

// RunPlus Minus Button #End
// BallPlus Minus Button #start
let p1ballC=0;
p1BallPlus.addEventListener('click',function(){
    p1ballC++;
    p1Ball.innerHTML = p1ballC;
})
p1BallMinus.addEventListener('click',function(){
    p1ballC--;
    p1Ball.innerHTML = p1ballC;
})
let p2ballC=0;
p2BallPlus.addEventListener('click',function(){
    p2ballC++;
    p2Ball.innerHTML = p2ballC;
})
p2BallMinus.addEventListener('click',function(){
    p2ballC--;
    p2Ball.innerHTML = p2ballC;
})
let p3ballC=0;
p3BallPlus.addEventListener('click',function(){
    p3ballC++;
    p3Ball.innerHTML = p3ballC;
})
p3BallMinus.addEventListener('click',function(){
    p3ballC--;
    p3Ball.innerHTML = p3ballC;
})
let p4ballC=0;
p4BallPlus.addEventListener('click',function(){
    p4ballC++;
    p4Ball.innerHTML = p4ballC;
})
p4BallMinus.addEventListener('click',function(){
    p4ballC--;
    p4Ball.innerHTML = p4ballC;
})
let p5ballC=0;
p5BallPlus.addEventListener('click',function(){
    p5ballC++;
    p5Ball.innerHTML = p5ballC;
})
p5BallMinus.addEventListener('click',function(){
    p5ballC--;
    p5Ball.innerHTML = p5ballC;
})
let p6ballC=0;
p6BallPlus.addEventListener('click',function(){
    p6ballC++;
    p6Ball.innerHTML = p6ballC;
})
p6BallMinus.addEventListener('click',function(){
    p6ballC--;
    p6Ball.innerHTML = p6ballC;
})
let p7ballC=0;
p7BallPlus.addEventListener('click',function(){
    p7ballC++;
    p7Ball.innerHTML = p7ballC;
})
p7BallMinus.addEventListener('click',function(){
    p7ballC--;
    p7Ball.innerHTML = p7ballC;
})
let p8ballC=0;
p8BallPlus.addEventListener('click',function(){
    p8ballC++;
    p8Ball.innerHTML = p8ballC;
})
p8BallMinus.addEventListener('click',function(){
    p8ballC--;
    p8Ball.innerHTML = p8ballC;
})
let p9ballC=0;
p9BallPlus.addEventListener('click',function(){
    p9ballC++;
    p9Ball.innerHTML = p9ballC;
})
p9BallMinus.addEventListener('click',function(){
    p9ballC--;
    p9Ball.innerHTML = p9ballC;
})
let p10ballC=0;
p10BallPlus.addEventListener('click',function(){
    p10ballC++;
    p10Ball.innerHTML = p10ballC;
})
p10BallMinus.addEventListener('click',function(){
    p10ballC--;
    p10Ball.innerHTML = p10ballC;
})
let p11ballC=0;
p11BallPlus.addEventListener('click',function(){
    p11ballC++;
    p11Ball.innerHTML = p11ballC;
})
p11BallMinus.addEventListener('click',function(){
    p11ballC--;
    p11Ball.innerHTML = p11ballC;
})

// BallPlus Minus Button #End

// Batter namae portion #Start

// Batter namae portion #End

// =====================================================================q
        // baller #Start
// =====================================================================
// #Input
let bl1 = document.querySelector('.bl1')
let bl2 = document.querySelector('.bl2')
let bl3 = document.querySelector('.bl3')
let bl4 = document.querySelector('.bl4')
let bl5 = document.querySelector('.bl5')
let bl6 = document.querySelector('.bl6')
let bl7 = document.querySelector('.bl7')
let bl8 = document.querySelector('.bl8')
let bl9 = document.querySelector('.bl9')
let bl10 = document.querySelector('.bl10')
let bl11 = document.querySelector('.bl11')

// Button#
let btnbl1 = document.querySelector('.btnbl1')
let btnbl2 = document.querySelector('.btnbl2')
let btnbl3 = document.querySelector('.btnbl3')
let btnbl4 = document.querySelector('.btnbl4')
let btnbl5 = document.querySelector('.btnbl5')
let btnbl6 = document.querySelector('.btnbl6')
let btnbl7 = document.querySelector('.btnbl7')
let btnbl8 = document.querySelector('.btnbl8')
let btnbl9 = document.querySelector('.btnbl9')
let btnbl10 = document.querySelector('.btnbl10')
let btnbl11 = document.querySelector('.btnbl11')



// =====================================================================q
        // baller #End
// =====================================================================

