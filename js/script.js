$(function () {
    $('.highcharts-container svg text:contains(Highcharts.com)').css("display","none");
});
function realtimeData(arr){
    var container = "";
    var i;
    for(i=0; i<arr.length; i++){
        container +='<div class="col-lg-3 col-sm-6"><div class="panel panel-default"><div class="panel-heading"><div class="title-small">' + arr[i].status + '</div></div><div class="panel-body"><h3>' + arr[i].count + '</h3><div class="under-lbl">' + arr[i].events+ '</div></div></div></div></div>';

    }
    setInterval(function() {
        document.getElementById('firstRow').innerHTML = container;
    }, 3000);
    
}


