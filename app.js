const counterEl = document.querySelectorAll('div p');


counterEl.forEach(counter => {
    console.log(counter);
    counter.innerHTML = '0';

    function updateCounter (){
        const target = +counter.getAttribute('data-target');
        // console.log(typeof target, target);

        const currentValue = +counter.innerHTML
        console.log(currentValue);

        const increment = target / 200

        if(currentValue < target){
            counter.innerHTML = `${Math.ceil(currentValue + increment)}`;

            setTimeout(updateCounter, 1)

        }else{
            counter.innerHTML = target;  

        }

    };

    updateCounter();
})