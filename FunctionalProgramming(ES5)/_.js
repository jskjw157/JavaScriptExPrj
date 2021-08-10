
function _curryr(fn) {
    return function(a,b) {
        return arguments.length == 2 ?  fn(a,b) : function(b){return fn(b,a);};
    } 
}

var _get = _curryr( function(obj, key) {
    return obj == null ? undefined : obj[key] ;
});

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

function _rest(list, num) {
    return slice.call(list, num || 1); // array가 아닌 array_like이여도 call함수로 사용할 수 있게 해줌
  } // 인자로 받은 num값의 수만큼 배열의 값을 제거 후 새로운 배열로 리턴
  
  
  
function _reduce(list, iter, memo) {
    if (arguments.length == 2) {// 받은 인자가 2개 일 경우  초기값(memo)에 값을 대입해주고, 그값을 배열에서 제거
        memo = list[0];
        list = _rest(list);
    }
    _each(list, function (val) {
        memo = iter(memo, val);
    });
    return memo;
}

function _pipe() {
    var fns = arguments;
    return function (arg) {
        return _reduce(fns, function (arg, fn) {
            return fn(arg);
        }, arg)
    }
}

function _go(arg) {
    var fns = _rest(arguments);
    return _pipe.apply(null, fns)(arg);
}

// map과 filter에 curryr함수 적용
var _map = _curryr(_map),
    _filter = _curryr(_filter);
