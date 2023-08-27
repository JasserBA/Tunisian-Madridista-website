const btnDropdown = document.querySelector(".btnDrop");
const menu = document.querySelector(".menu");

btnDropdown.addEventListener("click",()=>{
    menu.classList.toggle('hidden');
})

/* dropDown language */
const langElm = document.querySelector('#home .langSection');
const langOptions =  document.querySelectorAll('#home .langOptions');

langOptions.forEach((langOption) =>{
    langOption.addEventListener('click', () => {
        const selectedlangValue = langOption.innerHTML;
        langElm.innerHTML = `${selectedlangValue}`;  
    });
});

/* navbar scroll */
var navbar = document.querySelector("nav");

window.addEventListener("scroll",() =>{
navbar.classList.toggle("bg-slate-950", window.scrollY > 0);
});

// Dynamic navbar //

const navLinkEls = document.querySelectorAll(".nav-item");
const sectionEls = document.querySelectorAll("section");

const navScrolled = document.querySelector('.navbar.fixed-after');
let currentSection = 'home';

window.addEventListener('scroll',() =>{
    sectionEls.forEach(sectionEl =>{
        if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 2)){
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach((navLinkEl) =>{
        navLinkEl.classList.remove('active')
    })
    navLinkEls.forEach((navLinkEl) => {
        if (navLinkEl.getAttribute('href').includes(currentSection)) {
            navLinkEl.classList.add('active');
        } else {
            navLinkEl.classList.remove('active');
        }
    });

});

/********/
var itemNavs = document.querySelectorAll(".nav-item");

itemNavs.forEach(itemNav => {
    itemNav.addEventListener("click", () => {

        // Remove "active" class from all items
        var activeItem = document.querySelector(".nav-item.active");
        if(activeItem)
        activeItem.classList.remove("active");
        itemNavs.forEach(item => {
            item.classList.remove("active");
        });

        // Add "active" class to the clicked item
        itemNav.classList.add("active");
    });
});
var itemScrolls = document.querySelectorAll(".scroll-item");

itemScrolls.forEach(itemScroll => {
    itemScroll.addEventListener("click", () => {

        // Remove "active" class from all items
        var activeItem = document.querySelector(".scroll-item.active-player");
        if(activeItem)
        activeItem.classList.remove("active-player");
        itemScrolls.forEach(item => {
            item.classList.remove("active-player");
        });

        // Add "active" class to the clicked item
        itemScroll.classList.add("active-player");
    });
});

/* team section */
const teamMainDiv = document.querySelectorAll("#team div")[1];
const firstCol = teamMainDiv.querySelectorAll("div")[0];
const secondCol = teamMainDiv.querySelectorAll("div")[1];
const scrollItems = teamMainDiv.querySelectorAll(".scroll-item");

scrollItems.forEach(scrollItem =>{
    scrollItem.addEventListener("click",()=>{
        var altTag = scrollItem.children[0].getAttribute('alt');
        var playerTitle = scrollItem.children[1].children[0].innerText;
        var playerNum = scrollItem.children[1].children[1].children[0].innerText;
        var playerPos = scrollItem.children[1].children[1].children[1].innerText;

        console.log()
        if (altTag === 'courtois'){
            secondCol.children[1].innerText = `#${playerNum}`;
            secondCol.children[2].innerText  = `${playerTitle}`
            secondCol.children[3].innerText = `${playerPos}`;
            secondCol.children[4].innerText = `Born in 1992 in Belgium, Thibaut Courtois is a celebrated football goalkeeper. Standing tall at an impressive height, Courtois has earned a reputation for his shot-stopping abilities and consistent performances.`
            firstCol.innerHTML = `<img src="img/players/${altTag}-display1.png" class="mt-5 ml-6 lg:ml-0 lg:-mt-10 z-10 w-8/12" alt="${altTag}">`
        }
        else{
            secondCol.children[1].innerText = `#${playerNum}`;
            secondCol.children[2].innerText  = `${playerTitle}`
            secondCol.children[3].innerText = `${playerPos}`;
            secondCol.children[4].innerText = `Born in 1985 in Croatia, Luka Modrić is a celebrated football maestro, renowned for his impeccable skills and influential presence on the pitch.`
            firstCol.innerHTML = `<img src="img/players/${altTag}-display1.png" class="mt-5 ml-6 lg:ml-0 lg:-mt-10 z-10" alt="${altTag}">`
        }
    })
})



firstCol.innerHTML === `<img src="img/players/modric-display1.png" class="mt-5 ml-6 lg:ml-0 lg:-mt-10 z-10" alt="lukaModric">`

/* video part */

/* play Video */

const play= document.querySelector(".play"),
vid = document.querySelector("video"),
text1 = document.querySelector('.quote1'),
text2 = document.querySelector('.quote2'),
gradient = document.querySelector('.gradient');

play.addEventListener("click", ()=>{
    play.classList.add("hidden");
    text1.classList.add("hidden");
    text2.classList.add("hidden");
    gradient.classList.add("hidden");
    vid.setAttribute("controls",true);
    vid.play();
})
gradient.addEventListener("click", ()=>{
    play.classList.add("hidden");
    text1.classList.add("hidden");
    text2.classList.add("hidden");
    gradient.classList.add("hidden");
    vid.setAttribute("controls",true);
    vid.play();
})

vid.addEventListener("click", ()=>{
    play.classList.remove("hidden");
    gradient.classList.remove("hidden");
    vid.removeAttribute("controls");
    vid.pause();

})

/* show modal */
var modal = document.getElementById('modal'),
modalImg = document.getElementById("modal-img");

/* open img */
function showModal(src){
    modal.classList.remove('hidden');
    modal.classList.add('flex')
    modalImg.src = src;
}

/* click out of picture to close */
modal.addEventListener("click",()=>{
    modal.classList.add('hidden');
})

/* prevent click an image */
modalImg.addEventListener("click",(event)=>{
    event.stopPropagation();
})

/* close with Escape button */
document.addEventListener("keydown", (event)=>{
    if (event.key === "Escape") {
        modal.classList.add('hidden');
    }
})


/* dropdown Fans */
const mainDiv = document.querySelector("#fans main"),
dropdownFans = document.getElementById("dropdownFans"),
showFansList = document.getElementById("listFans"),
fansItems = document.querySelectorAll("#listFans li a"),
cancelItem = " ✖";



dropdownFans.addEventListener('click',()=>{
    showFansList.classList.toggle('hidden');
    dropdownFans.children[0].classList.toggle('hidden')
})
fansItems.forEach((fanItem,index)=>{
    fanItem.addEventListener('click', () =>{
        // Remove classlit from all fan items
        fansItems.forEach((item) => {
            if (item !== fanItem) {
                item.classList.remove('underline', 'font-semibold');
                item.textContent = item.textContent.replace(cancelItem, "");
            }
        });
        fanItem.classList.toggle('underline');
        fanItem.classList.toggle('font-semibold');
        if (fanItem.textContent.includes(cancelItem)){
            fanItem.textContent = fanItem.textContent.replace(cancelItem,"");
        }else{
            fanItem.textContent += cancelItem;
        }

        /* toggle show/hide Fan Merchandise */
        const merchandiseItems = document.querySelectorAll("#Fans div");
        
        for (let i = 1; i < merchandiseItems.length-3; i++) {
            const merchandiseItem = merchandiseItems[i];
            if(index === 0 && fanItem.textContent.includes(cancelItem)){
            merchandiseItem.classList.remove('hidden');
            merchandiseItem.classList.add('flex');
            mainDiv.classList.add('md:h-full','sm:grid-cols-2','md:grid-cols-3','lg:grid-cols-4','gap-y-96','sm:gap-y-72','lg:gap-y-24')
            merchandiseItems[0].classList.add('h-1')
        }else{
            merchandiseItem.classList.add('hidden');
            merchandiseItem.classList.remove('flex');
            mainDiv.classList.remove('md:h-full','sm:grid-cols-2','md:grid-cols-3','lg:grid-cols-4','gap-y-96','sm:gap-y-72','lg:gap-y-24');
            merchandiseItems[0].classList.remove('h-1');
            }
        }
        for(let i = merchandiseItems.length-3; i < merchandiseItems.length; i++){
            const merchandiseItem = merchandiseItems[i];
            if (index === 1 && fanItem.textContent.includes(cancelItem)){
                merchandiseItem.classList.remove('hidden');
            }
            else{
                merchandiseItem.classList.add('hidden');
            }
        }
    })
})


/* fans section [Quizzes] */
const questions = [
    {
        question: 'When was Real Madrid C. F. founded?',
        answers: [
            {text: '1903', correct: false},
            {text: '1902', correct: true},
            {text: '1909', correct: false},
            {text: '1918', correct: false}
        ]
    },
    {
        question: 'What is the home stadium of Real Madrid?',
        answers: [
            {text: 'Bright White Stadium', correct: false},
            {text: 'Real Madrid Stadium', correct: false},
            {text: 'Real Star Stadium', correct: false},
            {text: 'Santiago Bernabéu', correct: true}
        ]
    },
    {
        question: 'What is "El Clásico"?',
        answers: [
            {text: 'A match between Real Madrid and FC Barcelona', correct: true},
            {text: 'A match between Real Madrid and Atlético Madrid', correct: false},
            {text: 'A match between Real Madrid and Sevilla FC', correct: false},
            {text: 'A match between Real Madrid and Valencia CF', correct: false}
        ]
    },
    {
        question: 'How many "UEFA Champions League" has the Real Madrid won?',
        answers: [
            {text: '13', correct: false},
            {text: '15', correct: false},
            {text: '14', correct: true},
            {text: '10', correct: false}
        ]
    }
]

const questionElm = document.getElementById("question"),
answerBtns = document.getElementById("answer-btns"),
nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElm.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextBtn.classList.add("hidden");
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("bg-green-300");
        score++;
    }else{
        selectedBtn.classList.add("bg-red-300","hover:bg-red-300");

    }
    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("bg-green-300","hover:bg-green-300");
        }else{
            button.classList.add("hover:bg-transparent");
        }
        button.disabled = true;
    });
    nextBtn.classList.remove("hidden")
}

function showScore(){
    resetState();
    let colorResult;
    score == 4 ? colorResult = 'green' : score < 4 && score > 1 ? colorResult = 'amber' : colorResult = 'red';   
    questionElm.innerHTML = `Your score <span class="text-${colorResult}-400">${score}</span> out of ${questions.length}!`;
    nextBtn.innerHTML = 'Play Again';
    nextBtn.classList.remove("hidden");
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();


/* shop section */
//todo
const picJackets = document.querySelectorAll("#shop #pic-jacket img");

picJackets.forEach((picJacket)=>{
    picJacket.addEventListener('mouseover',()=>{
    picJacket.src = "img/shop-pic/veste11.png";
});
    picJacket.addEventListener('mouseout',()=>{
    picJacket.src = "img/shop-pic/veste1.png";
})
});

// ! cart part //
if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoade', ready)
}else{
    ready()
}
function ready(){
    var removeCartItemButtons = document.querySelectorAll('.cart-items button');
    for (var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i];
        button.addEventListener("click", removeCartItem)
    } 

    var quantityInputs = document.querySelectorAll('.cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    } 

    var addToCartButtons = document.querySelectorAll('.shop-item-button');
    for (var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked)
    } 

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
    document.getElementsByClassName('remove-all')[0].addEventListener('click',removeAllCard)
}

function removeAllCard(){
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function purchaseClicked(){
    alert('Thank you for your purchase');
    removeAllCard();
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target;
    if(isNaN(input.value) || input .value <= 0){
        input.value = 1;
    }
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}



function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('div');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartRowContents = `                        
    <div class="cart-row flex justify-around items-center py-5 border-b border-blue-200">
        <div class="flex items-center lg:space-x-12">
            <img class="cart-item-image w-32" src="${imageSrc}" alt="veste" class="w-20" >                        
            <h2 class="cart-item-title" class="font-semibold text-xl">${title}</h2>
        </div>
        <input class="cart-quantity-input w-10" type="number"class="w-10 h-8" value="1">
        <div class="w-20">
            <b class="cart-price">${price}</b>
            <button class="text-red-600 underline text-sm cursor-pointer">Remove</button>
        </div>
    </div>`
    /* var numbItem = document.getElementsByClassName('num-items');
    var num = 1 ;
    numbItem.textContents = `${num} items`;
    num++;*/
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.querySelector('button').addEventListener('click',removeCartItem);
    cartRow.querySelector('input').addEventListener('change',quantityChanged);
}

function addNumberItems(){

}

function updateCartTotal() {
    var cartItemContainer= document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for(var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quatityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$',''));
        var quantity= quatityElement.value;
        total += (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

/* Animated input */
let labels = document.querySelectorAll("#contact label");
let inputs = document.querySelectorAll("#contact input");
let textareas = document.querySelectorAll("#contact textarea");

inputs.forEach((input,index)=> {
    input.addEventListener("input",(event)=>{
        if (input.value !== ""){
            labels[index].classList.remove('text-gray-400')
            labels[index].classList.add('text-amber-400','text-sm','-top-5')
        }else{
            labels[index].classList.remove('text-amber-400','text-sm','-top-5')
            labels[index].classList.add('text-gray-400','text-sm','-top-1')
        }
    })
})
textareas.forEach((textarea,index)=> {
    textarea.addEventListener("input",()=>{
        if (textarea.value !== ""){
            labels[inputs.length + index].classList.remove('text-gray-400')
            labels[inputs.length + index].classList.add('text-amber-400','text-sm','-top-5')
        }else{
            labels[inputs.length + index].classList.remove('text-amber-400','text-sm','-top-5')
            labels[inputs.length + index].classList.add('text-gray-400','text-sm','-top-1')
        }
    })
})

/* sort Price dropdown */

const sortElm = document.querySelector('#shop .group h6');
const sortOptions =  document.querySelectorAll('#shop option');
const sortSection = document.querySelector('#shop #dropdownSort');

sortOptions.forEach((sortOption) =>{
    sortOption.addEventListener('click', () => {
        const selectedSortValue = sortOption.getAttribute('value');
        sortElm.innerHTML =  `<b>Sort:</b> ${selectedSortValue} &#709;</h6>`;
        
    })
})



/* email List sheet */
const scriptURL = 'https://script.google.com/macros/s/AKfycbzfzMTBZS-vmmzi3G8Z_bm1s7x5kBe00n6T05aO2mDWIAyNzusB9YWvzDmYfb9GN_1Q/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerText = "Message sent Successfully!";
        setTimeout(() => {
            msg.innerText = "";
        }, 2000);
        inputs.forEach((input,index) =>{
            input.value = "";
            labels[index].classList.remove('text-amber-400','text-sm','-top-5')
            labels[index].classList.add('text-gray-400','text-sm','-top-1')
        })
        textareas.forEach((textarea,index) =>{
            textarea.value = "";
            labels[inputs.length + index].classList.remove('text-amber-400','text-sm','-top-5')
            labels[inputs.length + index].classList.add('text-gray-400','text-sm','-top-1')
        })
    })
    .catch(error => {
        msg.innerText = "Message sent Unsuccessfully!";setTimeout(() => {
        msg.innerText = "";
        }, 2000);
    });
});

