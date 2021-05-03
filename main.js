let timecount = document.createElement("div");
document.body.append(timecount);
timecount.innerHTML=10;

setTimeout(() =>{
    timecount.innerHTML=9;
    setTimeout(() =>{
        timecount.innerHTML=8;
        setTimeout(() =>{
            timecount.innerHTML=7;
            setTimeout(() =>{
                timecount.innerHTML=6;
                setTimeout(() =>{
                    timecount.innerHTML=5;
                    setTimeout(() =>{
                        timecount.innerHTML=4;
                        setTimeout(() =>{
                            timecount.innerHTML=3;
                            setTimeout(() =>{
                                timecount.innerHTML=2;
                                setTimeout(() =>{
                                    timecount.innerHTML=1;
                                    setTimeout(() =>{
                                        timecount.innerHTML="HAPPY INDEPENDENCE DAY "
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);

