
// each가 적용된 filter
function _filter(list, predi) {
    var new_list = [];
    _each(list, function(vla){ //each함수의 for문의 list[i]를 인자로 받아 매개변수 val의 대입
        if (predi(vla)) 
            new_list.push(vla);
    });
    return new_list;
}
//  each가 적용된 map
function _map(list, mapper) {
    var new_list = [];
    _each(list, function(val){ // each함수의 for문의 list[i]를 인자로 받아 매개변수 val의 대입
        new_list.push(mapper(val));
    });
    return new_list;
}

//for (var i = 0; i < list.length; i++)부분과 list[i]부분의 중복을 제거 해주는 함수
function _each(list, iter) {
    for (var i = 0; i < list.length; i++) {
        iter(list[i]);
    }
    return list;
}