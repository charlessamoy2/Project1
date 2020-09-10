let countOne = 0;
const navigation = document.querySelectorAll('.navigation');
navigation.forEach(navigation => navigation.addEventListener('click',handleNavigation));

function handleNavigation(x) {
    if(x.target.matches('button')) {
        const key = x.target;
        const {action} = key.dataset;
        
        if (!action) {
            const landingPage = document.getElementById("landingPage");
            const bodies = document.getElementsByClassName("mainDiv");
            const displayOne = document.getElementById('displayTextOne');
            const inputTwo = document.getElementById('nameTwo');
            const displayTwo = document.getElementById('displayTextTwo');
            const displayThree = document.getElementById('displayTextThree');
            const depressed = document.getElementsByClassName('is-depressed');

            landingPage.style.visibility="visible";
            for (i in bodies){
                if(bodies[i].style){
                    bodies[i].style.visibility="hidden";
                }
            }

            countOne=0;
            displayOne.textContent = "";
            inputTwo.value = "";
            displayTwo.textContent = "";
            name = "";
            displayThree.textContent = "";
            while(depressed.length>0){
                depressed[0].classList.remove('is-depressed');
            }
            
        } else {
            const landingPage = document.getElementById("landingPage");
            const bodies = document.getElementsByClassName("mainDiv");

            landingPage.style.visibility="hidden";
            for (i in bodies) {
                if(bodies[i].style){
                    if(bodies[i].id!=action){
                        bodies[i].style.visibility="hidden";
                    } else {
                        bodies[i].style.visibility="visible";
                    }
                }
            }
        }
    }
}

/* Level One */

function helloOne() {
    const displayOne = document.getElementById('displayTextOne');
    if (countOne<5){
        displayOne.textContent="Hello,World!";
    } else if (countOne>=5 && countOne<10){
        displayOne.textContent="Why are you still clicking me...???";
    } else if (countOne>=10 && countOne<20){
        displayOne.textContent="STOOOOOOP :((((";
    } else if (countOne>=20 && countOne<100){
        displayOne.textContent=`You've pressed me...${countOne} TIMES ALREADY!! >:(`
    } else {
        displayOne.textContent="Ok that's at least 100...JUST...HELLO, WORLD! >:("
    }
    countOne+=1;
}

/* Level Two */
function helloTwo() {
    const inputTwo = document.getElementById('nameTwo').value;
    const displayTwo = document.getElementById('displayTextTwo');
    if (inputTwo===""){
        displayTwo.textContent="Enter your name below first!!!";
    } else {
        displayTwo.textContent=`Hello, ${inputTwo}!`;
    }
}

/* Level Three */
const levelThree = document.querySelectorAll('.nameKeys');
levelThree.forEach(levelThree => levelThree.addEventListener('click',helloThree));
let name = "";
let displaySuccess=false;

function helloThree(x) {
    if(x.target.matches('button')) {
        const key = x.target;
        const {action} = key.dataset;
        const content = key.textContent;
        const displayThree = document.getElementById('displayTextThree')
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))

        if (!action) {
            name = content;
            key.classList.add('is-depressed')
        }

        if (name==="" && key.textContent!=="CE"){
            displayThree.textContent="Please pick name below!";
            return;
        }else if (key.textContent!=="CE" && !displaySuccess){
            if (action === "sayHello") {
                key.textContent="CE";
                displayThree.textContent=`Hello, ${name}!`;
                displaySuccess = true;
                return;
            }
            if (action === "sayGoodBye") {
                displayThree.textContent=`Goodbye, ${name}!`;
                key.textContent="CE";
                displaySuccess = true;
                return;
            }
        }

        

        if (key.textContent==="CE") {
            displayThree.textContent="";
            name="";
            displaySuccess = false;
            if (action === "sayHello") {
                key.textContent = "Hello!"
            } else {
                key.textContent = "Goodbye!"
            }
        }
    }
}