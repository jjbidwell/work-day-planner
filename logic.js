var currentDate = moment().format('dddd MMMM Do, YYYY');
var currentHour = parseInt(moment().format('H'));
var savedEvent = ["", "", "", "", "", "", "", "", "" ];

$('#currentDay').text(currentDate);

for (var i = 9; i < 18; i++){
    if (i > currentHour){
        $('#hour-'+ i).css("background-color", "#77dd77");
    } else if(i === currentHour){
        $('#hour-'+ i).css("background-color", "#ff6961");
    } else if(i < currentHour){
        $('#hour-'+ i).css("background-color", "#d3d3d3");
    }
}

$('.saveBtn').on('click', function(){
    var targetedText = $(this).siblings()[1].value;
    var whereToGo = parseInt($(this).parent().attr('id')[5] + $(this).parent().attr('id')[6]);
    savedEvent[whereToGo - 9] = targetedText;
    console.log(savedEvent);
})