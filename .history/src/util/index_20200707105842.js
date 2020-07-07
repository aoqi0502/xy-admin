let img = require('@/assets/logo.png')
/**
* 判断是否处于全屏状态
* */
export const isFull = function () {
    var isFullscreen =  document.mozFullScreen||
        document.fullScreen ||
        //谷歌浏览器及Webkit内核浏览器
        document.webkitIsFullScreen ||
        document.webkitRequestFullScreen ||
        document.mozRequestFullScreen ||
        document.msFullscreenEnabled

    if(isFullscreen === undefined) {
        isFullscreen = false
    }
    return  isFullscreen
}
/**
 * chrome Notification方法，消息通知，可允许最小化浏览器时进行消息通知
 * 但仅支持 localhost以及https服务
 * */
export const Message = function () {
    if (window.Notification) {
        if (window.Notification.permission == "granted") {
            new Notification('XY-Admin', {
                body: '学计算机什么都好，就是容易头秃',
                icon: img
            })
        }
        if(window.Notification.permission == "denied") {
            alert('暂不支持Notification')
        }
        else if (window.Notification.permission != "denied") {
            window.Notification.requestPermission(function (permission) {
                if (permission === 'granted') {
                    new Notification('XY-Admin', {
                        body: '学计算机什么都好，就是容易头秃',
                        icon: img
                    })
                }
            })
        }
    } else {
        alert('暂不支持Notification')
    }
}

export const geti8ln = function('title') {
    console.log(title)
}
