'use strict';
var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            // return success(request.responseText);
            
            console.log(request.responseText);
            var json = JSON.parse(request.responseText); 
            console.log(json)          
            // var img = document.getElementsByTagName("img")[0];
            // img.setAttribute("src",json[1].imgURL);
            var img = document.getElementsByTagName("img")[1];
            json[0].imgURL = encodeURI(json[0].imgURL); 
            json[0].imgURL = encodeURI(json[0].imgURL);
            img.setAttribute("src",json[0].imgURL);
            
            var title = document.querySelector('.title');
            title.innerHTML = json[0].title;
            var description = document.querySelector('.description');
            description.innerHTML = json[0].description;
       
            
    
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

// alert('请求已发送，请等待响应...');
