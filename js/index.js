'use strict';
var request = new XMLHttpRequest(); 
request.onreadystatechange = function () { 
    if (request.readyState === 4) { 
        if (request.status === 200) {
            //console.log(request.responseText);
            var json = JSON.parse(request.responseText); 
            //console.log(json);       
            var img = document.getElementsByTagName("img")[1];
            json[0].imgURL = encodeURI(json[0].imgURL); 
            json[0].imgURL = encodeURI(json[0].imgURL);
            img.setAttribute("src",json[0].imgURL);
            var title = document.querySelector('.title');
            title.innerHTML = json[0].title;
            document.querySelector('.word-com').innerHTML = json[0].title;
            var description = document.querySelector('.description');
            description.innerHTML = json[0].description;
            var special = document.querySelector('.special');
            var gentie = document.querySelector('.gentie');
            if (json[0].type === null) {
                special.style.display = 'none';
                gentie.style.right = 60 + 'px';

            }else {
                special.innerHTML = json[0].type;
                special.style.backgroundColor = json[0].typeColor;
            }
            
            if (isNaN('json[0].post')) {
                var num = json[0].post/10000;
                num=parseFloat(num).toFixed(1);//保留一位小数
                if (num > 1) {
                    gentie.innerHTML = num + '万跟帖';
                } else {
                    gentie.innerHTML = num*10000 + '跟帖';
                }
                
            }
            
    
        } else {
            console.log("fail");
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
request.open('GET', '/news?num=1');
request.send();




var xmr = new XMLHttpRequest(); 

xmr.onreadystatechange = function () { 
    if (xmr.readyState === 4) { 
       
        if (xmr.status === 200) {
            
            var json2 = JSON.parse(xmr.responseText);
            console.log(json2);
            json2[0].imgURL = encodeURI(json2[0].imgURL); 
            json2[0].imgURL = encodeURI(json2[0].imgURL);
            var img2 = document.getElementsByTagName("img")[0];
            img2.setAttribute("src",json2[0].imgURL);
            document.getElementsByTagName("a")[0].href = json2[0].link;



           
        } else {
           
            console.log(fail);
        }
    } else {
     
    }
}


xmr.open('GET', '/sliders');
xmr.send();

var button = document.querySelector('.button');
button.addEventListener('click',function() {
    document.querySelector('.er').classList.add('af2');
})