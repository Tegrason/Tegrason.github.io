let addLayout = function () {

    //添加诗句容器载体
    let container = "<div class='container'>${content}</div>";
    let sentenceDiv = "<p class='sentence'><span class='sentence-content'>三十年众生牛马，六十年诸佛龙象</span></p>";
    container = container.replace("${content}",sentenceDiv);
    $("body").append(container);

    //计算容器位置
    let targetContainer = $("body");
    let selfContainer = $(".container");
    let y = $(targetContainer).height();
    let x = $(targetContainer).width();
    //x = (x - selfContainer) / 2;
    console.log(x);
    $(selfContainer).css("left",x);
}
$(function(){
    addLayout();
})
