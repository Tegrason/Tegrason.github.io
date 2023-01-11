let addLayout = function () {
    let contianer = "<div class='contianer'>${content}</div>";
    let sentenceDiv = "<p class='sentence'><span class='sentence-content'>三十年众生牛马，六十年诸佛龙象</span></p>";
    contianer = contianer.replace("${content}",sentenceDiv);
    $("#blog_panel").append(contianer);
    console.log(1111);
}
$(function(){
    addLayout();
})
