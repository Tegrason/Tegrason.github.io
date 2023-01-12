let data = {
    sentenceArray: [
        "三十年众生牛马，六十年诸佛龙象",
        "人世铜炉，我们在红尘烈火中争渡",
        "行路难，行路难，难于上青天",
        "长风破浪会有时 ，直挂云帆济沧海 ！",
        "有朋自远方来，不亦说乎？"
    ],
    index: 0
}



let addLayout = function () {

    //添加诗句容器载体
    let container = "<div class='container'>${content}</div>";
    let sentenceDiv = "<p class='sentence'><span class='sentence-content'></span></p>";
    container = container.replace("${content}",sentenceDiv);
    $("body").append(container);
}

let cyclicTitleSentence = function(array){
    if(data.index >= array.length){
        data.index = 0;
    }
    let offset = data.index;
    let sentence = array[offset];
    $(".sentence-content").text(sentence);
    data.index++;
}

let resize = function () {
    //计算容器位置
    let targetContainer = $("body");
    let selfContainer = $(".container");
    let selfWidth = $(selfContainer).width();
    let y = $(targetContainer).height();
    let x = $(targetContainer).width();
    x = (x - selfWidth) / 2;
    $(selfContainer).css("left",x);
}

let listensWindowsResize = function () {
    $(window).resize(function () {
        resize();
    })
}
$(function(){
    //初始化根容器并添加布局
    addLayout();

    //计算容器X位置
    resize();

    //轮播诗句
    setInterval(function () {
        cyclicTitleSentence(data.sentenceArray);
    },6000)
    
    //监听窗口变化
    listensWindowsResize();
})
