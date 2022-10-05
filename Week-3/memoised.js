function memoized(fun){
    const cache={};
    return function(...args){
        var argsCached = JSON.stringify(args);
        if(!cache[argsCached]){
            cache[argsCached]=fun.call(this,...args)
        }else{
            return cache[argsCached]
        }
    }
    
}