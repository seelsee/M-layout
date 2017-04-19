var xmr = new XMLHttpRequest(); // 新建XMLHttpxmr对象

xmr.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (xmr.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (xmr.status === 200) {
            // 成功，通过responseText拿到响应的文本:
           
        } else {
            // 失败，根据响应码判断失败原因:
            console.log(fail);
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
xmr.open('GET', '/sliders');
xmr.send();

