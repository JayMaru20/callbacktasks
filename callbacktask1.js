let url = "";

function independence(imagedisplay)
{
    timer(10);
    function timer(count){
        displaycount(count);
        let counter = setInterval(() => {
            count = count -1;
            if(count<=0)
            {
                clearInterval(counter);
                return;
            }
        displaycount(count);
        }, 1000);
    }

    setTimeout(() => {
        url = "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/08/independence-day-1565757101.jpg";
        imagedisplay();
    }, 10000);
   
}

function displayimage(){
    let img = document.createElement("img");
    img.src=url;
    img.alt="no image";
    document.body.append(img);
};

function displaycount(count){
    var disp = document.createElement("div");
    disp.innerHTML=count;
    document.body.append(disp);
}

independence(displayimage);
