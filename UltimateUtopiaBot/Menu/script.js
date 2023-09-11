window.addEventListener("DOMContentLoaded", async () => {
    
    const chatLink = document.querySelector('.chat-link');
    const swipeLink = document.querySelector('.swipe-link');
    const swipingHoursLink = document.querySelector('.swiping-hours-link');
    const scrapingLink = document.querySelector('.scraping-link');

    const chattingMenuContent = document.querySelector('.chatting-menu-content');
    const swipingMenuContent = document.querySelector('.swiping-menu-content');
    const swipingHoursMenuContent = document.querySelector('.swiping-hours-menu-content');
    const scrapingMenuContent = document.querySelector('.scraping-menu-content');

    // Click on nav link - Chatting menu
    chatLink.addEventListener('click', function(){
        chatLink.style.border = 'solid blue 2px';
        swipeLink.style.border = 'solid black 2px';
        swipingHoursLink.style.border = 'solid black 2px';
        scrapingLink.style.border = 'solid black 2px';

        chattingMenuContent.style.display = 'flex';
        swipingMenuContent.style.display = 'none';
        swipingHoursMenuContent.style.display = 'none';
        scrapingMenuContent.style.display = 'none';
    });

    // Click on nav link - Swiping menu
    swipeLink.addEventListener('click', function(){
        chatLink.style.border = 'solid black 2px';
        swipingHoursLink.style.border = 'solid black 2px';
        scrapingLink.style.border = 'solid black 2px';
        swipeLink.style.border = 'solid blue 2px';

        chattingMenuContent.style.display = 'none';
        swipingHoursMenuContent.style.display = 'none';
        scrapingMenuContent.style.display = 'none';
        swipingMenuContent.style.display = 'block';
    });

    // Click on nav link - Swiping hours menu
    swipingHoursLink.addEventListener('click', function(){
        chatLink.style.border = 'solid black 2px';
        swipingHoursLink.style.border = 'solid blue 2px';
        scrapingLink.style.border = 'solid black 2px';
        swipeLink.style.border = 'solid black 2px';

        chattingMenuContent.style.display = 'none';
        swipingHoursMenuContent.style.display = 'block';
        scrapingMenuContent.style.display = 'none';
        swipingMenuContent.style.display = 'none';
    });

    // Click on nav link - Scraping menu
    scrapingLink.addEventListener('click', function(){
        chatLink.style.border = 'solid black 2px';
        swipingHoursLink.style.border = 'solid black 2px';
        scrapingLink.style.border = 'solid blue 2px';
        swipeLink.style.border = 'solid black 2px';

        chattingMenuContent.style.display = 'none';
        swipingHoursMenuContent.style.display = 'none';
        scrapingMenuContent.style.display = 'block';
        swipingMenuContent.style.display = 'none';
    });

    // Toggle button
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(toggleButton => {
        toggleButton.addEventListener('click', function(){

            const computedStyle = getComputedStyle(toggleButton);
            const justifyContent = computedStyle.getPropertyValue('justify-content');
    
            if(justifyContent == 'flex-start'){
                toggleButton.style.justifyContent = 'flex-end';
                toggleButton.style.background = '#61AF56';
            } else {
                toggleButton.style.justifyContent = 'flex-start';
                toggleButton.style.background = 'grey';
            }
                
        });
    })
    

    // Dropdown
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');

        select.addEventListener('click', () => {
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');

                options.forEach(option => {
                    option.classList.remove('active');
                });

                option.classList.add('active');
            });
        });
    });

    // Gender buttons
    const femaleButton = document.getElementById('female-button');
    const maleButton = document.getElementById('male-button');
    const transButton = document.getElementById('trans-button');

    femaleButton.addEventListener('click', () => {
        femaleButton.style.backgroundColor = '#676767';
        maleButton.style.backgroundColor = '#f5f5f5';
        transButton.style.backgroundColor = '#f5f5f5';

        femaleButton.style.boxShadow = '0 0.2em 0.7em rgba(255, 255, 255, 0.4)';
        maleButton.style.boxShadow = 'none';
        transButton.style.boxShadow = 'none';
    });

    maleButton.addEventListener('click', () => {
        maleButton.style.backgroundColor = '#676767';
        femaleButton.style.backgroundColor = '#f5f5f5';
        transButton.style.backgroundColor = '#f5f5f5';

        maleButton.style.boxShadow = '0 0.2em 0.7em rgba(255, 255, 255, 0.4)';
        femaleButton.style.boxShadow = 'none';
        transButton.style.boxShadow = 'none';
    });

    transButton.addEventListener('click', () => {
        transButton.style.backgroundColor = '#676767';
        maleButton.style.backgroundColor = '#f5f5f5';
        femaleButton.style.backgroundColor = '#f5f5f5';

        transButton.style.boxShadow = '0 0.2em 0.7em rgba(255, 255, 255, 0.4)';
        maleButton.style.boxShadow = 'none';
        femaleButton.style.boxShadow = 'none';
    });

    // Photo buttons 
    const ugliestButton = document.getElementById('ugliest-button');
    const hottestButton = document.getElementById('hottest-button');
    const averageButton = document.getElementById('average-button');

    ugliestButton.addEventListener('click', () => {
        ugliestButton.style.backgroundColor = '#676767';
        hottestButton.style.backgroundColor = '#f5f5f5';
        averageButton.style.backgroundColor = '#f5f5f5';

        ugliestButton.style.boxShadow = '0 0.2em 0.7em rgba(255, 255, 255, 0.4)';
        hottestButton.style.boxShadow = 'none';
        averageButton.style.boxShadow = 'none';
    });

    hottestButton.addEventListener('click', () => {
        hottestButton.style.backgroundColor = '#676767';
        ugliestButton.style.backgroundColor = '#f5f5f5';
        averageButton.style.backgroundColor = '#f5f5f5';

        hottestButton.style.boxShadow = '0 0.2em 0.7em rgba(255, 255, 255, 0.4)';
        ugliestButton.style.boxShadow = 'none';
        averageButton.style.boxShadow = 'none';
    });

    averageButton.addEventListener('click', () => {
        averageButton.style.backgroundColor = '#676767';
        hottestButton.style.backgroundColor = '#f5f5f5';
        ugliestButton.style.backgroundColor = '#f5f5f5';

        averageButton.style.boxShadow = '0 0.2em 0.7em rgba(255, 255, 255, 0.4)';
        ugliestButton.style.boxShadow = 'none';
        hottestButton.style.boxShadow = 'none';
    });

    // Weight buttons 
    const thinButton = document.getElementById('thin-button');
    const chubbyButton = document.getElementById('chubby-button');
    const fatButton = document.getElementById('fat-button');

    thinButton.addEventListener('click', () => {
        thinButton.style.backgroundColor = '#676767';
        chubbyButton.style.backgroundColor = '#f5f5f5';
        fatButton.style.backgroundColor = '#f5f5f5';

        thinButton.style.boxShadow = '0 0.2em 0.7em rgba(255, 255, 255, 0.4)';
        chubbyButton.style.boxShadow = 'none';
        fatButton.style.boxShadow = 'none';
    });

    chubbyButton.addEventListener('click', () => {
        chubbyButton.style.backgroundColor = '#676767';
        thinButton.style.backgroundColor = '#f5f5f5';
        fatButton.style.backgroundColor = '#f5f5f5';

        chubbyButton.style.boxShadow = '0 0.2em 0.7em rgba(255, 255, 255, 0.4)';
        thinButton.style.boxShadow = 'none';
        fatButton.style.boxShadow = 'none';
    });

    fatButton.addEventListener('click', () => {
        fatButton.style.backgroundColor = '#676767';
        thinButton.style.backgroundColor = '#f5f5f5';
        chubbyButton.style.backgroundColor = '#f5f5f5';

        fatButton.style.boxShadow = '0 0.2em 0.7em rgba(255, 255, 255, 0.4)';
        thinButton.style.boxShadow = 'none';
        chubbyButton.style.boxShadow = 'none';
    });

    // Swipe buttons 
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');
    const randomButton = document.getElementById('random-button');

    leftButton.addEventListener('click', () => {
        leftButton.style.backgroundColor = '#676767';
        rightButton.style.backgroundColor = '#f5f5f5';
        randomButton.style.backgroundColor = '#f5f5f5';

        leftButton.style.boxShadow = '0 0.2em 0.7em rgba(255, 255, 255, 0.4)';
        rightButton.style.boxShadow = 'none';
        randomButton.style.boxShadow = 'none';
    });

    rightButton.addEventListener('click', () => {
        rightButton.style.backgroundColor = '#676767';
        leftButton.style.backgroundColor = '#f5f5f5';
        randomButton.style.backgroundColor = '#f5f5f5';

        rightButton.style.boxShadow = '0 0.2em 0.7em rgba(255, 255, 255, 0.4)';
        leftButton.style.boxShadow = 'none';
        randomButton.style.boxShadow = 'none';
    });

    randomButton.addEventListener('click', () => {
        randomButton.style.backgroundColor = '#676767';
        leftButton.style.backgroundColor = '#f5f5f5';
        rightButton.style.backgroundColor = '#f5f5f5';

        randomButton.style.boxShadow = '0 0.2em 0.7em rgba(255, 255, 255, 0.4)';
        rightButton.style.boxShadow = 'none';
        leftButton.style.boxShadow = 'none';
    });

    
});

// Range slider 1
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

// Range slider 2
const rangeInput2 = document.querySelectorAll(".range-input2 input"),
priceInput2 = document.querySelectorAll(".price-input2 input"),
range2 = document.querySelector(".slider2 .progress2");
priceInput2.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput2[0].value),
        maxPrice = parseInt(priceInput2[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput2[1].max){
            if(e.target.className === "input-min"){
                rangeInput2[0].value = minPrice;
                range2.style.left = ((minPrice / rangeInput2[0].max) * 100) + "%";
            }else{
                rangeInput2[1].value = maxPrice;
                range2.style.right = 100 - (maxPrice / rangeInput2[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput2.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput2[0].value),
        maxVal = parseInt(rangeInput2[1].value);
        if(minVal < 18){
            minVal += (18 - minVal);
        }
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput2[0].value = maxVal - priceGap
            }else{
                rangeInput2[1].value = minVal + priceGap;
            }
        }else{
            priceInput2[0].value = minVal;
            priceInput2[1].value = maxVal;
            range2.style.left = (minVal) + "%";
            range2.style.right = 100 - (maxVal) + "%";
        }
    });
});
