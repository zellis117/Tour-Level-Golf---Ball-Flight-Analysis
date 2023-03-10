var question = document.querySelector('#question');
var image = document.querySelector('#image');
var start = document.querySelector('#start');
var mainField = document.querySelector('#mainField');
var list = document.querySelector('#list');

var questionNumber = 0;
//Choice variable to pick the next image
var choiceA = 0; var strike = ""; //values for strike on the club face
var choiceB = 0; var initialStartLine = ""; //values for start line
var choiceC = 0; var curvature = ""; //values for curvature
var choiceD = 0; var peakHeight = ""; //values for height
var choiceE = 0; var divotPattern = ""; //values for divot

//Removed old / unused elements
var removeOld = function(x1,x2,x3,x4) {
    x1.remove();
    x2.remove();
    x3.remove();
    x4.remove();
}

//Starts asking questions to diagnose the ball flight
var startQuestions = function() {
    //change image
    image.src = "./images/club0.jpg";
    //Change buttons for answers
    start.remove();
    var a1 = document.createElement('button');
    var a2 = document.createElement('button');
    var a3 = document.createElement('button');
    var a4 = document.createElement('button');
    a1.textContent = "1. Toe";
    a2.textContent = "2. Center";
    a3.textContent = "3. Thin / Low";
    a4.textContent = "4. Heel";
    a1.className += 'blue';
    a2.className += 'green';
    a3.className += 'yellow';
    a4.className += 'red';
    list.appendChild(a1);
    list.appendChild(a2);
    list.appendChild(a3);
    list.appendChild(a4);

    question.textContent = "Where did the ball strike the club face?";
    questionNumber++;

    //Button listeners for newly generated buttons
    a1.addEventListener("click", function(){
        choiceA = 1;
        strike = 'Toe';
        startLine();
        removeOld(a1,a2,a3,a4);
    } );
    a2.addEventListener("click", function(){
        choiceA = 2;
        strike = 'Center';
        startLine();
        removeOld(a1,a2,a3,a4);
    } );
    a3.addEventListener("click", function(){
        choiceA = 3;
        strike = 'Thin';
        startLine();
        removeOld(a1,a2,a3,a4);
    } );
    a4.addEventListener("click", function(){
        choiceA = 4;
        strike = 'Heel';
        startLine();
        removeOld(a1,a2,a3,a4);
    } );
}

//Asked user about start line of their ball flight
var startLine = function() {
    //change image
    if(choiceA == 1){image.src = "./images/StartLines/FairwayStartToe.jpg";}
    if(choiceA == 2){image.src = "./images/StartLines/FairwayStartCenter.jpg";}
    if(choiceA == 3){image.src = "./images/StartLines/FairwayStartThin.jpg";}
    if(choiceA == 4){image.src = "./images/StartLines/FairwayStartHeel.jpg";}
    //Change button tags
    var b1 = document.createElement('button');
    var b2 = document.createElement('button');
    var b3 = document.createElement('button');
    var b4 = document.createElement('button');
    b1.textContent = "Left";
    b2.textContent = "Slightly Left or Straight";
    b3.textContent = "Slightly Right or Straight";
    b4.textContent = "Right";
    b1.className += 'blue';
    b2.className += 'green';
    b3.className += 'yellow';
    b4.className += 'red';
    list.appendChild(b1);
    list.appendChild(b2);
    list.appendChild(b3);
    list.appendChild(b4);

    question.textContent = "Where does your ball start?";
    questionNumber++;

    //Button listeners for newly generated buttons
    b1.addEventListener("click", function(){
        choiceB = 1;
        initialStartLine = 'left';
        curve();
        removeOld(b1,b2,b3,b4);
    } );
    b2.addEventListener("click", function(){
        choiceB = 2;
        initialStartLine = 'Slightly left / straight';
        curve();
        removeOld(b1,b2,b3,b4);
    } );
    b3.addEventListener("click", function(){
        choiceB = 3;
        initialStartLine = 'Slightly right / straight';
        curve();
        removeOld(b1,b2,b3,b4);
    } );
    b4.addEventListener("click", function(){
        choiceB = 4;
        initialStartLine = 'Right';
        curve();
        removeOld(b1,b2,b3,b4);
    } );
}

//Asks user about curvature of their shot
var curve = function() {
    //change image
    if(choiceB == 1){image.src = "./images/Curve/" + strike + "Curve" + choiceB + ".jpg";}
    if(choiceB == 2){image.src = "./images/Curve/" + strike + "Curve" + choiceB + ".jpg";}
    if(choiceB == 3){image.src = "./images/Curve/" + strike + "Curve" + choiceB + ".jpg";}
    if(choiceB == 4){image.src = "./images/Curve/" + strike + "Curve" + choiceB + ".jpg";}
    //Change button tags
    var c1 = document.createElement('button');
    var c2 = document.createElement('button');
    var c3 = document.createElement('button');
    var c4 = document.createElement('button');
    c1.textContent = "Big Curve Left";
    c2.textContent = "Little Left Curve or Stays Straight";
    c3.textContent = "Little Right Curve";
    c4.textContent = "Big Curve Right";
    c1.className += 'blue';
    c2.className += 'green';
    c3.className += 'yellow';
    c4.className += 'red';
    list.appendChild(c1);
    list.appendChild(c2);
    list.appendChild(c3);
    list.appendChild(c4);

    question.textContent = "How does the ball curve?";
    questionNumber++;

    //Button listeners for newly generated buttons
    c1.addEventListener("click", function(){
        choiceC = 1;
        curvature = 'Big curve left';
        height();
        removeOld(c1,c2,c3,c4);
    } );
    c2.addEventListener("click", function(){
        choiceC = 2;
        curvature = 'Little curve left';
        height();
        removeOld(c1,c2,c3,c4);
    } );
    c3.addEventListener("click", function(){
        choiceC = 3;
        curvature = 'Little curve right';
        height();
        removeOld(c1,c2,c3,c4);
    } );
    c4.addEventListener("click", function(){
        choiceC = 4;
        curvature = 'Big curve right';
        height();
        removeOld(c1,c2,c3,c4);
    } );
}

//Asks about peak height
var height = function() {
    //change image
    image.src = "./images/height.jpg";
    //Change button tags
    var d1 = document.createElement('button');
    var d2 = document.createElement('button');
    var d3 = document.createElement('button');
    var d4 = document.createElement('button');
    d1.textContent = "Low";
    d2.textContent = "Slightly Low or Sometimes Good Height";
    d3.textContent = "Slightly High or Sometimes Good Height";
    d4.textContent = "High";
    d1.className += 'blue';
    d2.className += 'green';
    d3.className += 'yellow';
    d4.className += 'red';
    list.appendChild(d1);
    list.appendChild(d2);
    list.appendChild(d3);
    list.appendChild(d4);

    question.textContent = "How high does your ball typically fly?";
    questionNumber++;

    //Button listeners for newly generated buttons
    d1.addEventListener("click", function(){
        choiceD = 1;
        peakHeight = 'Low';
        divot();
        removeOld(d1,d2,d3,d4);
    } );
    d2.addEventListener("click", function(){
        choiceD = 2;
        peakHeight = 'Kinda low';
        divot();
        removeOld(d1,d2,d3,d4);
    } );
    d3.addEventListener("click", function(){
        choiceD = 3;
        peakHeight = 'Kinda high';
        divot();
        removeOld(d1,d2,d3,d4);
    } );
    d4.addEventListener("click", function(){
        choiceD = 4;
        peakHeight = 'High';
        divot();
        removeOld(d1,d2,d3,d4);
    } );
}

//Asks about divot in the ground
var divot = function() {
    //change image
    image.src = "./images/divots.JPG";
    //Change button tags
    var e1 = document.createElement('button');
    var e2 = document.createElement('button');
    var e3 = document.createElement('button');
    var e4 = document.createElement('button');
    e1.textContent = "Deep and ahead of the ball";
    e2.textContent = "No divot";
    e3.textContent = "Behind the ball";
    e4.textContent = "Shallow and ahead of the ball";
    e1.className += 'blue';
    e2.className += 'green';
    e3.className += 'yellow';
    e4.className += 'red';
    list.appendChild(e1);
    list.appendChild(e2);
    list.appendChild(e3);
    list.appendChild(e4);

    question.textContent = "What does your divot look like?";
    questionNumber++;

    //Button listeners for newly generated buttons
    e1.addEventListener("click", function(){
        choiceE = 1;
        divotPattern = "Deep and ahead of the ball";
        end();
        removeOld(e1,e2,e3,e4);
    } );
    e2.addEventListener("click", function(){
        choiceE = 2;
        divotPattern = "No divot";
        end();
        removeOld(e1,e2,e3,e4);
    } );
    e3.addEventListener("click", function(){
        choiceE = 3;
        divotPattern = "Behind the ball";
        end();
        removeOld(e1,e2,e3,e4);
    } );
    e4.addEventListener("click", function(){
        choiceE = 4;
        divotPattern = "Shallow and ahead of the ball";
        end();
        removeOld(e1,e2,e3,e4);
    } );
}

//Determines what videos should be reccomended
var reccomendDrills = function() {
    if(choiceA == 1 || choiceA == 4){
        //display gate drill
        var link1 = document.createElement('a');
        var photo1 = document.createElement('img');
        list.appendChild(link1);
        link1.appendChild(photo1);
        photo1.setAttribute("src","./images/DrillPhotos/gate.jpg");
        link1.setAttribute("href","https://drive.google.com/file/d/1yC8trO_O9VbKWLxYIkmfPtM2qPyvT1un/view?usp=sharing");
        link1.setAttribute("target","_blank");
    }

    if(choiceC == 3 ||  choiceC == 4){
        //display P2 drill and downswing drill
        var link2 = document.createElement('a');
        var photo2 = document.createElement('img');
        list.appendChild(link2);
        link2.appendChild(photo2);
        photo2.setAttribute("src","./images/DrillPhotos/takaway.jpg");
        link2.setAttribute("href","https://drive.google.com/file/d/1IhGEi-JbQttUpkTRVMi7_3yBjgyqTiIZ/view?usp=share_link");
        link2.setAttribute("target","_blank");

        var link3 = document.createElement('a');
        var photo3 = document.createElement('img');
        list.appendChild(link3);
        link3.appendChild(photo3);
        photo3.setAttribute("src","./images/DrillPhotos/downPath.jpg");
        link3.setAttribute("href","https://drive.google.com/file/d/1geD2teBNGGC_mcSC7zrawtJseO7cUh-r/view?usp=share_link");
        link3.setAttribute("target","_blank");
    }

    if(choiceD == 1 || choiceD == 4){
        //display towel drill
        var link4 = document.createElement('a');
        var photo4 = document.createElement('img');
        list.appendChild(link4);
        link4.appendChild(photo4);
        photo4.setAttribute("src","./images/DrillPhotos/towel.jpg");
        link4.setAttribute("href","https://drive.google.com/file/d/114YYNRqCROQZUk796Sf2XYpXu6ix4oq5/view?usp=sharing");
        link4.setAttribute("target","_blank");
    } else{
        if(choiceE == 2 || choiceE == 3){
            //display towel drill
            var link5 = document.createElement('a');
            var photo5 = document.createElement('img');
            list.appendChild(link5);
            link5.appendChild(photo5);
            photo5.setAttribute("src","./images/DrillPhotos/towel.jpg");
            link5.setAttribute("href","https://drive.google.com/file/d/114YYNRqCROQZUk796Sf2XYpXu6ix4oq5/view?usp=sharing");
            link5.setAttribute("target","_blank");
         }
    }
}

//Outlines problems and displays recommended drills
var end = function() {
    var yourStrike = document.createElement('h4');
    var yourStartLine = document.createElement('h4');
    var yourCurve = document.createElement('h4');
    var yourHeight = document.createElement('h4');
    var yourDivot = document.createElement('h4');
    list.appendChild(yourStrike);
    list.appendChild(yourStartLine);
    list.appendChild(yourCurve);
    list.appendChild(yourHeight);
    list.appendChild(yourDivot);
    yourStrike.textContent = "Strike: " + strike;
    yourStartLine.textContent = "Start Direction: " + initialStartLine;
    yourCurve.textContent = "Curvature: " + curvature;
    yourHeight.textContent = "Height: " + peakHeight;
    yourDivot.textContent = "Divot: " + divotPattern;

    var rec = document.createElement('h1');
    list.appendChild(rec);
    rec.textContent = 'Reccomended Drills:';

    reccomendDrills();

    question.textContent = "Results:";
    image.remove();
}

//Listens for the start button click to start the diagnosis
start.addEventListener("click", startQuestions);
