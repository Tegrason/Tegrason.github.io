let data = {
    sentenceArray: [],
    index: 0,
    uriResource: "https://mrlsongzz.github.io/sentence.json"
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
    $(".sentence-content").addClass("sentence-content-flash");
    $(".sentence-content").removeClass("sentence-content-flash");
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

let acquireResource = function () {
    $.get(
        data.uriResource,
        null,
        function(res){
            console.log((data.sentenceArray = res.array));
        },
        "json"
    )
}

$(function(){
    //初始化根容器并添加布局
    addLayout();

    //
    acquireResource();

    //计算容器X位置
    resize();

    cyclicTitleSentence(data.sentenceArray);

    //轮播诗句
    setInterval(function () {
        cyclicTitleSentence(data.sentenceArray);
    },6000)

    //监听窗口变化
    listensWindowsResize();
})
