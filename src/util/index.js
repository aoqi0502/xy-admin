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

