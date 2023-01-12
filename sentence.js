let data = {
    sentenceArray: [],
    index: 0,
    uriResource: "https://mrlsongzz.github.io/sentence.json"
}


//添加诗句容器载体
let addLayout = function () {
    let container = "<div class='container'>${content}</div>";
    let sentenceDiv = "<p class='sentence'><span class='sentence-content'></span></p>";

    //替换元素
    container = container.replace("${content}",sentenceDiv);
    $("body").append(container);
}

//轮播诗句
let cyclicTitleSentence = function(array){
    if(data.index >= array.length){
        data.index = 0;
    }
    $(".sentence-content").addClass("sentence-content-flash");

    let offset = data.index;
    let sentence = array[offset];
    $(".sentence-content").css("font-size",selfAdaptiveFont(sentence)+"px");
    $(".sentence-content").text(sentence);
    $(".sentence-content").removeClass("sentence-content-flash");
    data.index++;
}

//计算容器位置
let resize = function () {
    let targetContainer = $("body");
    let selfContainer = $(".container");
    let selfWidth = $(selfContainer).width();
    let y = $(targetContainer).height();
    let x = $(targetContainer).width();
    x = (x - selfWidth) / 2;
    $(selfContainer).css("left",x+50);
}

//监听窗口改变
let listensWindowsResize = function () {
    $(window).resize(function () {
        resize();
    })
}

//获取远程资源
let acquireResource = function (callback) {
    $.get(
        data.uriResource,
        null,
        function(res){
            data.sentenceArray = res.array;
            callback();
        },
        "json"
    )
}

let selfAdaptiveFont = function(sentence){
    const count = 16;
    let fontSize = 16;
    let container = $(".container");
    let containerWidth = $(container).width();
    let sentenceLength= sentence.length;
    if(sentenceLength > count){
        fontSize = sentenceLength - ((sentenceLength - count) * 1.8);
    }
    console.log(fontSize);
    return fontSize;
}

//initialization
$(function(){
    //初始化根容器并添加布局
    addLayout();

    //获取远程资源
    acquireResource(function(){
        cyclicTitleSentence(data.sentenceArray);

        //轮播诗句
        setInterval(function () {
            cyclicTitleSentence(data.sentenceArray);
        },6000)
    });

    //计算容器X位置
    resize();

    //监听窗口变化
    listensWindowsResize();
})
