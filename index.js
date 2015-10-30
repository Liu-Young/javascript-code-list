/**
 * Created by young on 15/10/30.
 */

//跨浏览器添加事件
function addEvent(obj, type, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn, false);
    } else if (obj.attachEvent) {//IE
        obj.attchEvent('on' + type, fn);
    }
}

//跨浏览器移除事件
function removeEvent(obj, type, fn) {
    if (obj.removeEventListener) {
        obj.removeEventListener(type, fn, false);
    } else if (obj.detachEvent) {//兼容IE
        obj.detachEvent('on' + type, fn);
    }
}

//跨浏览器阻止默认行为
function preDef(ev) {
    var e = ev || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

//跨浏览器获取目标对象
function getTarget(ev) {
    if (ev.target) {//w3c
        return ev.target;
    } else if (window.event.srcElement) {//IE
        return window.event.srcElement;
    }
}


//跨浏览器获取滚动条位置，sp == scroll position
function getSP() {
    return {
        top: document.documentElement.scrollTop || document.body.scrollTop,
        left: document.documentElement.scrollLeft || document.body.scrollLeft
    }
}

//跨浏览器获取可视窗口大小
function  getWindow () {
    if(typeof window.innerWidth !='undefined') {
        return{
            width : window.innerWidth,
            height : window.innerHeight
        }

    } else{
        return {
            width : document.documentElement.clientWidth,
            height : document.documentElement.clientHeight
        }
    }
}

/**
 * js 异步加载和同步加载
 * 异步加载也叫非阻塞模式加载，浏览器在下载js的同时，同时还会执行后续的页面处理。
 * 在script标签内，用js创建一个script元素并插入到document中，这种就是异步加载js文件了：
 */

(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'http://yourdomain.com/script.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
})();

// js获取屏幕坐标
function mousePosition(ev){
    if(ev.pageX || ev.pageY){
        return {x:ev.pageX, y:ev.pageY};
    }
    return {
        x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
        y:ev.clientY + document.body.scrollTop - document.body.clientTop
    };
}