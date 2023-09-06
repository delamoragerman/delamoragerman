$(document).ready(function () {

    
});

window.elemExist = function (id) {
    var element = document.getElementById(id);
    if (typeof (element) !== 'undefined' && element !== null) {
        return true;
    } else {
        return false;
    }
};



$("#exit").click(function () {

    $.ajax({
        cache: false,
        type: 'POST',
        url: '/multiple/session/destroy',
        success: function (resp) {
            location.reload();
        }
    });
});