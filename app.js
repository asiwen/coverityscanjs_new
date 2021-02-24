(function(window){
    var exports = {};
    window.app = exports;

    exports.run = function(){
        console.log('yahhh!');
    };

    function renderData(data) {
        $('#img').attr('src', data);
      }
    
      $.ajax({type: 'GET', url: '/api/getdata', dataType: 'text', success: renderData});

})(window);