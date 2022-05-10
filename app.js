const counters = document.querySelectorAll(".counter")

counters.forEach((counter, ind)=>{

    counter.innerHTML = 0; 

    const updateCounter = ()=>{
        const targetCounter = +counter.getAttribute('data-target');
        const startingNumber = Number( counter.innerHTML);

        const incr = targetCounter/ 100;
         if (startingNumber < targetCounter) {
             counter.innerHTML = `${startingNumber + incr}`
             setTimeout(updateCounter, 100)
         }

    }


    updateCounter();

})