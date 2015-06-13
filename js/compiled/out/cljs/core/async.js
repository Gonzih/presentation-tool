// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t13441 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13441 = (function (fn_handler,f,meta13442){
this.fn_handler = fn_handler;
this.f = f;
this.meta13442 = meta13442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13443,meta13442__$1){
var self__ = this;
var _13443__$1 = this;
return (new cljs.core.async.t13441(self__.fn_handler,self__.f,meta13442__$1));
});

cljs.core.async.t13441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13443){
var self__ = this;
var _13443__$1 = this;
return self__.meta13442;
});

cljs.core.async.t13441.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t13441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t13441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta13442","meta13442",1845977521,null)], null);
});

cljs.core.async.t13441.cljs$lang$type = true;

cljs.core.async.t13441.cljs$lang$ctorStr = "cljs.core.async/t13441";

cljs.core.async.t13441.cljs$lang$ctorPrWriter = (function (this__5117__auto__,writer__5118__auto__,opt__5119__auto__){
return cljs.core._write.call(null,writer__5118__auto__,"cljs.core.async/t13441");
});

cljs.core.async.__GT_t13441 = (function cljs$core$async$fn_handler_$___GT_t13441(fn_handler__$1,f__$1,meta13442){
return (new cljs.core.async.t13441(fn_handler__$1,f__$1,meta13442));
});

}

return (new cljs.core.async.t13441(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__13445 = buff;
if(G__13445){
var bit__5212__auto__ = null;
if(cljs.core.truth_((function (){var or__4538__auto__ = bit__5212__auto__;
if(cljs.core.truth_(or__4538__auto__)){
return or__4538__auto__;
} else {
return G__13445.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__13445.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13445);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13445);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__13447 = arguments.length;
switch (G__13447) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__13450 = arguments.length;
switch (G__13450) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13452 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13452);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13452,ret){
return (function (){
return fn1.call(null,val_13452);
});})(val_13452,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__13454 = arguments.length;
switch (G__13454) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5423__auto___13456 = n;
var x_13457 = (0);
while(true){
if((x_13457 < n__5423__auto___13456)){
(a[x_13457] = (0));

var G__13458 = (x_13457 + (1));
x_13457 = G__13458;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__13459 = (i + (1));
i = G__13459;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t13463 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13463 = (function (alt_flag,flag,meta13464){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13464 = meta13464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13465,meta13464__$1){
var self__ = this;
var _13465__$1 = this;
return (new cljs.core.async.t13463(self__.alt_flag,self__.flag,meta13464__$1));
});})(flag))
;

cljs.core.async.t13463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13465){
var self__ = this;
var _13465__$1 = this;
return self__.meta13464;
});})(flag))
;

cljs.core.async.t13463.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t13463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t13463.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13464","meta13464",1144023101,null)], null);
});})(flag))
;

cljs.core.async.t13463.cljs$lang$type = true;

cljs.core.async.t13463.cljs$lang$ctorStr = "cljs.core.async/t13463";

cljs.core.async.t13463.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5117__auto__,writer__5118__auto__,opt__5119__auto__){
return cljs.core._write.call(null,writer__5118__auto__,"cljs.core.async/t13463");
});})(flag))
;

cljs.core.async.__GT_t13463 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t13463(alt_flag__$1,flag__$1,meta13464){
return (new cljs.core.async.t13463(alt_flag__$1,flag__$1,meta13464));
});})(flag))
;

}

return (new cljs.core.async.t13463(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t13469 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13469 = (function (alt_handler,flag,cb,meta13470){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13470 = meta13470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13471,meta13470__$1){
var self__ = this;
var _13471__$1 = this;
return (new cljs.core.async.t13469(self__.alt_handler,self__.flag,self__.cb,meta13470__$1));
});

cljs.core.async.t13469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13471){
var self__ = this;
var _13471__$1 = this;
return self__.meta13470;
});

cljs.core.async.t13469.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13469.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t13469.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t13469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13470","meta13470",588674256,null)], null);
});

cljs.core.async.t13469.cljs$lang$type = true;

cljs.core.async.t13469.cljs$lang$ctorStr = "cljs.core.async/t13469";

cljs.core.async.t13469.cljs$lang$ctorPrWriter = (function (this__5117__auto__,writer__5118__auto__,opt__5119__auto__){
return cljs.core._write.call(null,writer__5118__auto__,"cljs.core.async/t13469");
});

cljs.core.async.__GT_t13469 = (function cljs$core$async$alt_handler_$___GT_t13469(alt_handler__$1,flag__$1,cb__$1,meta13470){
return (new cljs.core.async.t13469(alt_handler__$1,flag__$1,cb__$1,meta13470));
});

}

return (new cljs.core.async.t13469(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13472_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13472_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13473_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13473_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4538__auto__ = wport;
if(cljs.core.truth_(or__4538__auto__)){
return or__4538__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13474 = (i + (1));
i = G__13474;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4538__auto__ = ret;
if(cljs.core.truth_(or__4538__auto__)){
return or__4538__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__4526__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4526__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4526__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5578__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5578__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13477){
var map__13478 = p__13477;
var map__13478__$1 = ((cljs.core.seq_QMARK_.call(null,map__13478))?cljs.core.apply.call(null,cljs.core.hash_map,map__13478):map__13478);
var opts = map__13478__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13475){
var G__13476 = cljs.core.first.call(null,seq13475);
var seq13475__$1 = cljs.core.next.call(null,seq13475);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13476,seq13475__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__13480 = arguments.length;
switch (G__13480) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7146__auto___13529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___13529){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___13529){
return (function (state_13504){
var state_val_13505 = (state_13504[(1)]);
if((state_val_13505 === (7))){
var inst_13500 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
var statearr_13506_13530 = state_13504__$1;
(statearr_13506_13530[(2)] = inst_13500);

(statearr_13506_13530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (1))){
var state_13504__$1 = state_13504;
var statearr_13507_13531 = state_13504__$1;
(statearr_13507_13531[(2)] = null);

(statearr_13507_13531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (4))){
var inst_13483 = (state_13504[(7)]);
var inst_13483__$1 = (state_13504[(2)]);
var inst_13484 = (inst_13483__$1 == null);
var state_13504__$1 = (function (){var statearr_13508 = state_13504;
(statearr_13508[(7)] = inst_13483__$1);

return statearr_13508;
})();
if(cljs.core.truth_(inst_13484)){
var statearr_13509_13532 = state_13504__$1;
(statearr_13509_13532[(1)] = (5));

} else {
var statearr_13510_13533 = state_13504__$1;
(statearr_13510_13533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (13))){
var state_13504__$1 = state_13504;
var statearr_13511_13534 = state_13504__$1;
(statearr_13511_13534[(2)] = null);

(statearr_13511_13534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (6))){
var inst_13483 = (state_13504[(7)]);
var state_13504__$1 = state_13504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13504__$1,(11),to,inst_13483);
} else {
if((state_val_13505 === (3))){
var inst_13502 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13504__$1,inst_13502);
} else {
if((state_val_13505 === (12))){
var state_13504__$1 = state_13504;
var statearr_13512_13535 = state_13504__$1;
(statearr_13512_13535[(2)] = null);

(statearr_13512_13535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (2))){
var state_13504__$1 = state_13504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13504__$1,(4),from);
} else {
if((state_val_13505 === (11))){
var inst_13493 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
if(cljs.core.truth_(inst_13493)){
var statearr_13513_13536 = state_13504__$1;
(statearr_13513_13536[(1)] = (12));

} else {
var statearr_13514_13537 = state_13504__$1;
(statearr_13514_13537[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (9))){
var state_13504__$1 = state_13504;
var statearr_13515_13538 = state_13504__$1;
(statearr_13515_13538[(2)] = null);

(statearr_13515_13538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (5))){
var state_13504__$1 = state_13504;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13516_13539 = state_13504__$1;
(statearr_13516_13539[(1)] = (8));

} else {
var statearr_13517_13540 = state_13504__$1;
(statearr_13517_13540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (14))){
var inst_13498 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
var statearr_13518_13541 = state_13504__$1;
(statearr_13518_13541[(2)] = inst_13498);

(statearr_13518_13541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (10))){
var inst_13490 = (state_13504[(2)]);
var state_13504__$1 = state_13504;
var statearr_13519_13542 = state_13504__$1;
(statearr_13519_13542[(2)] = inst_13490);

(statearr_13519_13542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13505 === (8))){
var inst_13487 = cljs.core.async.close_BANG_.call(null,to);
var state_13504__$1 = state_13504;
var statearr_13520_13543 = state_13504__$1;
(statearr_13520_13543[(2)] = inst_13487);

(statearr_13520_13543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto___13529))
;
return ((function (switch__7084__auto__,c__7146__auto___13529){
return (function() {
var cljs$core$async$state_machine__7085__auto__ = null;
var cljs$core$async$state_machine__7085__auto____0 = (function (){
var statearr_13524 = [null,null,null,null,null,null,null,null];
(statearr_13524[(0)] = cljs$core$async$state_machine__7085__auto__);

(statearr_13524[(1)] = (1));

return statearr_13524;
});
var cljs$core$async$state_machine__7085__auto____1 = (function (state_13504){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_13504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e13525){if((e13525 instanceof Object)){
var ex__7088__auto__ = e13525;
var statearr_13526_13544 = state_13504;
(statearr_13526_13544[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13545 = state_13504;
state_13504 = G__13545;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$state_machine__7085__auto__ = function(state_13504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7085__auto____1.call(this,state_13504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7085__auto____0;
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7085__auto____1;
return cljs$core$async$state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___13529))
})();
var state__7148__auto__ = (function (){var statearr_13527 = f__7147__auto__.call(null);
(statearr_13527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___13529);

return statearr_13527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___13529))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13729){
var vec__13730 = p__13729;
var v = cljs.core.nth.call(null,vec__13730,(0),null);
var p = cljs.core.nth.call(null,vec__13730,(1),null);
var job = vec__13730;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7146__auto___13912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___13912,res,vec__13730,v,p,job,jobs,results){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___13912,res,vec__13730,v,p,job,jobs,results){
return (function (state_13735){
var state_val_13736 = (state_13735[(1)]);
if((state_val_13736 === (1))){
var state_13735__$1 = state_13735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13735__$1,(2),res,v);
} else {
if((state_val_13736 === (2))){
var inst_13732 = (state_13735[(2)]);
var inst_13733 = cljs.core.async.close_BANG_.call(null,res);
var state_13735__$1 = (function (){var statearr_13737 = state_13735;
(statearr_13737[(7)] = inst_13732);

return statearr_13737;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13735__$1,inst_13733);
} else {
return null;
}
}
});})(c__7146__auto___13912,res,vec__13730,v,p,job,jobs,results))
;
return ((function (switch__7084__auto__,c__7146__auto___13912,res,vec__13730,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0 = (function (){
var statearr_13741 = [null,null,null,null,null,null,null,null];
(statearr_13741[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__);

(statearr_13741[(1)] = (1));

return statearr_13741;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1 = (function (state_13735){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_13735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e13742){if((e13742 instanceof Object)){
var ex__7088__auto__ = e13742;
var statearr_13743_13913 = state_13735;
(statearr_13743_13913[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13914 = state_13735;
state_13735 = G__13914;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__ = function(state_13735){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1.call(this,state_13735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___13912,res,vec__13730,v,p,job,jobs,results))
})();
var state__7148__auto__ = (function (){var statearr_13744 = f__7147__auto__.call(null);
(statearr_13744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___13912);

return statearr_13744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___13912,res,vec__13730,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13745){
var vec__13746 = p__13745;
var v = cljs.core.nth.call(null,vec__13746,(0),null);
var p = cljs.core.nth.call(null,vec__13746,(1),null);
var job = vec__13746;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5423__auto___13915 = n;
var __13916 = (0);
while(true){
if((__13916 < n__5423__auto___13915)){
var G__13747_13917 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13747_13917) {
case "compute":
var c__7146__auto___13919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13916,c__7146__auto___13919,G__13747_13917,n__5423__auto___13915,jobs,results,process,async){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (__13916,c__7146__auto___13919,G__13747_13917,n__5423__auto___13915,jobs,results,process,async){
return (function (state_13760){
var state_val_13761 = (state_13760[(1)]);
if((state_val_13761 === (1))){
var state_13760__$1 = state_13760;
var statearr_13762_13920 = state_13760__$1;
(statearr_13762_13920[(2)] = null);

(statearr_13762_13920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13761 === (2))){
var state_13760__$1 = state_13760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13760__$1,(4),jobs);
} else {
if((state_val_13761 === (3))){
var inst_13758 = (state_13760[(2)]);
var state_13760__$1 = state_13760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13760__$1,inst_13758);
} else {
if((state_val_13761 === (4))){
var inst_13750 = (state_13760[(2)]);
var inst_13751 = process.call(null,inst_13750);
var state_13760__$1 = state_13760;
if(cljs.core.truth_(inst_13751)){
var statearr_13763_13921 = state_13760__$1;
(statearr_13763_13921[(1)] = (5));

} else {
var statearr_13764_13922 = state_13760__$1;
(statearr_13764_13922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13761 === (5))){
var state_13760__$1 = state_13760;
var statearr_13765_13923 = state_13760__$1;
(statearr_13765_13923[(2)] = null);

(statearr_13765_13923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13761 === (6))){
var state_13760__$1 = state_13760;
var statearr_13766_13924 = state_13760__$1;
(statearr_13766_13924[(2)] = null);

(statearr_13766_13924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13761 === (7))){
var inst_13756 = (state_13760[(2)]);
var state_13760__$1 = state_13760;
var statearr_13767_13925 = state_13760__$1;
(statearr_13767_13925[(2)] = inst_13756);

(statearr_13767_13925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13916,c__7146__auto___13919,G__13747_13917,n__5423__auto___13915,jobs,results,process,async))
;
return ((function (__13916,switch__7084__auto__,c__7146__auto___13919,G__13747_13917,n__5423__auto___13915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0 = (function (){
var statearr_13771 = [null,null,null,null,null,null,null];
(statearr_13771[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__);

(statearr_13771[(1)] = (1));

return statearr_13771;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1 = (function (state_13760){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_13760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e13772){if((e13772 instanceof Object)){
var ex__7088__auto__ = e13772;
var statearr_13773_13926 = state_13760;
(statearr_13773_13926[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13927 = state_13760;
state_13760 = G__13927;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__ = function(state_13760){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1.call(this,state_13760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__;
})()
;})(__13916,switch__7084__auto__,c__7146__auto___13919,G__13747_13917,n__5423__auto___13915,jobs,results,process,async))
})();
var state__7148__auto__ = (function (){var statearr_13774 = f__7147__auto__.call(null);
(statearr_13774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___13919);

return statearr_13774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(__13916,c__7146__auto___13919,G__13747_13917,n__5423__auto___13915,jobs,results,process,async))
);


break;
case "async":
var c__7146__auto___13928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13916,c__7146__auto___13928,G__13747_13917,n__5423__auto___13915,jobs,results,process,async){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (__13916,c__7146__auto___13928,G__13747_13917,n__5423__auto___13915,jobs,results,process,async){
return (function (state_13787){
var state_val_13788 = (state_13787[(1)]);
if((state_val_13788 === (1))){
var state_13787__$1 = state_13787;
var statearr_13789_13929 = state_13787__$1;
(statearr_13789_13929[(2)] = null);

(statearr_13789_13929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (2))){
var state_13787__$1 = state_13787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13787__$1,(4),jobs);
} else {
if((state_val_13788 === (3))){
var inst_13785 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13787__$1,inst_13785);
} else {
if((state_val_13788 === (4))){
var inst_13777 = (state_13787[(2)]);
var inst_13778 = async.call(null,inst_13777);
var state_13787__$1 = state_13787;
if(cljs.core.truth_(inst_13778)){
var statearr_13790_13930 = state_13787__$1;
(statearr_13790_13930[(1)] = (5));

} else {
var statearr_13791_13931 = state_13787__$1;
(statearr_13791_13931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (5))){
var state_13787__$1 = state_13787;
var statearr_13792_13932 = state_13787__$1;
(statearr_13792_13932[(2)] = null);

(statearr_13792_13932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (6))){
var state_13787__$1 = state_13787;
var statearr_13793_13933 = state_13787__$1;
(statearr_13793_13933[(2)] = null);

(statearr_13793_13933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (7))){
var inst_13783 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
var statearr_13794_13934 = state_13787__$1;
(statearr_13794_13934[(2)] = inst_13783);

(statearr_13794_13934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13916,c__7146__auto___13928,G__13747_13917,n__5423__auto___13915,jobs,results,process,async))
;
return ((function (__13916,switch__7084__auto__,c__7146__auto___13928,G__13747_13917,n__5423__auto___13915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0 = (function (){
var statearr_13798 = [null,null,null,null,null,null,null];
(statearr_13798[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__);

(statearr_13798[(1)] = (1));

return statearr_13798;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1 = (function (state_13787){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_13787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e13799){if((e13799 instanceof Object)){
var ex__7088__auto__ = e13799;
var statearr_13800_13935 = state_13787;
(statearr_13800_13935[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13936 = state_13787;
state_13787 = G__13936;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__ = function(state_13787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1.call(this,state_13787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__;
})()
;})(__13916,switch__7084__auto__,c__7146__auto___13928,G__13747_13917,n__5423__auto___13915,jobs,results,process,async))
})();
var state__7148__auto__ = (function (){var statearr_13801 = f__7147__auto__.call(null);
(statearr_13801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___13928);

return statearr_13801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(__13916,c__7146__auto___13928,G__13747_13917,n__5423__auto___13915,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13937 = (__13916 + (1));
__13916 = G__13937;
continue;
} else {
}
break;
}

var c__7146__auto___13938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___13938,jobs,results,process,async){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___13938,jobs,results,process,async){
return (function (state_13823){
var state_val_13824 = (state_13823[(1)]);
if((state_val_13824 === (1))){
var state_13823__$1 = state_13823;
var statearr_13825_13939 = state_13823__$1;
(statearr_13825_13939[(2)] = null);

(statearr_13825_13939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13824 === (2))){
var state_13823__$1 = state_13823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13823__$1,(4),from);
} else {
if((state_val_13824 === (3))){
var inst_13821 = (state_13823[(2)]);
var state_13823__$1 = state_13823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13823__$1,inst_13821);
} else {
if((state_val_13824 === (4))){
var inst_13804 = (state_13823[(7)]);
var inst_13804__$1 = (state_13823[(2)]);
var inst_13805 = (inst_13804__$1 == null);
var state_13823__$1 = (function (){var statearr_13826 = state_13823;
(statearr_13826[(7)] = inst_13804__$1);

return statearr_13826;
})();
if(cljs.core.truth_(inst_13805)){
var statearr_13827_13940 = state_13823__$1;
(statearr_13827_13940[(1)] = (5));

} else {
var statearr_13828_13941 = state_13823__$1;
(statearr_13828_13941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13824 === (5))){
var inst_13807 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13823__$1 = state_13823;
var statearr_13829_13942 = state_13823__$1;
(statearr_13829_13942[(2)] = inst_13807);

(statearr_13829_13942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13824 === (6))){
var inst_13809 = (state_13823[(8)]);
var inst_13804 = (state_13823[(7)]);
var inst_13809__$1 = cljs.core.async.chan.call(null,(1));
var inst_13810 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13811 = [inst_13804,inst_13809__$1];
var inst_13812 = (new cljs.core.PersistentVector(null,2,(5),inst_13810,inst_13811,null));
var state_13823__$1 = (function (){var statearr_13830 = state_13823;
(statearr_13830[(8)] = inst_13809__$1);

return statearr_13830;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13823__$1,(8),jobs,inst_13812);
} else {
if((state_val_13824 === (7))){
var inst_13819 = (state_13823[(2)]);
var state_13823__$1 = state_13823;
var statearr_13831_13943 = state_13823__$1;
(statearr_13831_13943[(2)] = inst_13819);

(statearr_13831_13943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13824 === (8))){
var inst_13809 = (state_13823[(8)]);
var inst_13814 = (state_13823[(2)]);
var state_13823__$1 = (function (){var statearr_13832 = state_13823;
(statearr_13832[(9)] = inst_13814);

return statearr_13832;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13823__$1,(9),results,inst_13809);
} else {
if((state_val_13824 === (9))){
var inst_13816 = (state_13823[(2)]);
var state_13823__$1 = (function (){var statearr_13833 = state_13823;
(statearr_13833[(10)] = inst_13816);

return statearr_13833;
})();
var statearr_13834_13944 = state_13823__$1;
(statearr_13834_13944[(2)] = null);

(statearr_13834_13944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7146__auto___13938,jobs,results,process,async))
;
return ((function (switch__7084__auto__,c__7146__auto___13938,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0 = (function (){
var statearr_13838 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__);

(statearr_13838[(1)] = (1));

return statearr_13838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1 = (function (state_13823){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_13823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e13839){if((e13839 instanceof Object)){
var ex__7088__auto__ = e13839;
var statearr_13840_13945 = state_13823;
(statearr_13840_13945[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13946 = state_13823;
state_13823 = G__13946;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__ = function(state_13823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1.call(this,state_13823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___13938,jobs,results,process,async))
})();
var state__7148__auto__ = (function (){var statearr_13841 = f__7147__auto__.call(null);
(statearr_13841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___13938);

return statearr_13841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___13938,jobs,results,process,async))
);


var c__7146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto__,jobs,results,process,async){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto__,jobs,results,process,async){
return (function (state_13879){
var state_val_13880 = (state_13879[(1)]);
if((state_val_13880 === (7))){
var inst_13875 = (state_13879[(2)]);
var state_13879__$1 = state_13879;
var statearr_13881_13947 = state_13879__$1;
(statearr_13881_13947[(2)] = inst_13875);

(statearr_13881_13947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (20))){
var state_13879__$1 = state_13879;
var statearr_13882_13948 = state_13879__$1;
(statearr_13882_13948[(2)] = null);

(statearr_13882_13948[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (1))){
var state_13879__$1 = state_13879;
var statearr_13883_13949 = state_13879__$1;
(statearr_13883_13949[(2)] = null);

(statearr_13883_13949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (4))){
var inst_13844 = (state_13879[(7)]);
var inst_13844__$1 = (state_13879[(2)]);
var inst_13845 = (inst_13844__$1 == null);
var state_13879__$1 = (function (){var statearr_13884 = state_13879;
(statearr_13884[(7)] = inst_13844__$1);

return statearr_13884;
})();
if(cljs.core.truth_(inst_13845)){
var statearr_13885_13950 = state_13879__$1;
(statearr_13885_13950[(1)] = (5));

} else {
var statearr_13886_13951 = state_13879__$1;
(statearr_13886_13951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (15))){
var inst_13857 = (state_13879[(8)]);
var state_13879__$1 = state_13879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13879__$1,(18),to,inst_13857);
} else {
if((state_val_13880 === (21))){
var inst_13870 = (state_13879[(2)]);
var state_13879__$1 = state_13879;
var statearr_13887_13952 = state_13879__$1;
(statearr_13887_13952[(2)] = inst_13870);

(statearr_13887_13952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (13))){
var inst_13872 = (state_13879[(2)]);
var state_13879__$1 = (function (){var statearr_13888 = state_13879;
(statearr_13888[(9)] = inst_13872);

return statearr_13888;
})();
var statearr_13889_13953 = state_13879__$1;
(statearr_13889_13953[(2)] = null);

(statearr_13889_13953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (6))){
var inst_13844 = (state_13879[(7)]);
var state_13879__$1 = state_13879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13879__$1,(11),inst_13844);
} else {
if((state_val_13880 === (17))){
var inst_13865 = (state_13879[(2)]);
var state_13879__$1 = state_13879;
if(cljs.core.truth_(inst_13865)){
var statearr_13890_13954 = state_13879__$1;
(statearr_13890_13954[(1)] = (19));

} else {
var statearr_13891_13955 = state_13879__$1;
(statearr_13891_13955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (3))){
var inst_13877 = (state_13879[(2)]);
var state_13879__$1 = state_13879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13879__$1,inst_13877);
} else {
if((state_val_13880 === (12))){
var inst_13854 = (state_13879[(10)]);
var state_13879__$1 = state_13879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13879__$1,(14),inst_13854);
} else {
if((state_val_13880 === (2))){
var state_13879__$1 = state_13879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13879__$1,(4),results);
} else {
if((state_val_13880 === (19))){
var state_13879__$1 = state_13879;
var statearr_13892_13956 = state_13879__$1;
(statearr_13892_13956[(2)] = null);

(statearr_13892_13956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (11))){
var inst_13854 = (state_13879[(2)]);
var state_13879__$1 = (function (){var statearr_13893 = state_13879;
(statearr_13893[(10)] = inst_13854);

return statearr_13893;
})();
var statearr_13894_13957 = state_13879__$1;
(statearr_13894_13957[(2)] = null);

(statearr_13894_13957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (9))){
var state_13879__$1 = state_13879;
var statearr_13895_13958 = state_13879__$1;
(statearr_13895_13958[(2)] = null);

(statearr_13895_13958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (5))){
var state_13879__$1 = state_13879;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13896_13959 = state_13879__$1;
(statearr_13896_13959[(1)] = (8));

} else {
var statearr_13897_13960 = state_13879__$1;
(statearr_13897_13960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (14))){
var inst_13857 = (state_13879[(8)]);
var inst_13859 = (state_13879[(11)]);
var inst_13857__$1 = (state_13879[(2)]);
var inst_13858 = (inst_13857__$1 == null);
var inst_13859__$1 = cljs.core.not.call(null,inst_13858);
var state_13879__$1 = (function (){var statearr_13898 = state_13879;
(statearr_13898[(8)] = inst_13857__$1);

(statearr_13898[(11)] = inst_13859__$1);

return statearr_13898;
})();
if(inst_13859__$1){
var statearr_13899_13961 = state_13879__$1;
(statearr_13899_13961[(1)] = (15));

} else {
var statearr_13900_13962 = state_13879__$1;
(statearr_13900_13962[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (16))){
var inst_13859 = (state_13879[(11)]);
var state_13879__$1 = state_13879;
var statearr_13901_13963 = state_13879__$1;
(statearr_13901_13963[(2)] = inst_13859);

(statearr_13901_13963[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (10))){
var inst_13851 = (state_13879[(2)]);
var state_13879__$1 = state_13879;
var statearr_13902_13964 = state_13879__$1;
(statearr_13902_13964[(2)] = inst_13851);

(statearr_13902_13964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (18))){
var inst_13862 = (state_13879[(2)]);
var state_13879__$1 = state_13879;
var statearr_13903_13965 = state_13879__$1;
(statearr_13903_13965[(2)] = inst_13862);

(statearr_13903_13965[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (8))){
var inst_13848 = cljs.core.async.close_BANG_.call(null,to);
var state_13879__$1 = state_13879;
var statearr_13904_13966 = state_13879__$1;
(statearr_13904_13966[(2)] = inst_13848);

(statearr_13904_13966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto__,jobs,results,process,async))
;
return ((function (switch__7084__auto__,c__7146__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0 = (function (){
var statearr_13908 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__);

(statearr_13908[(1)] = (1));

return statearr_13908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1 = (function (state_13879){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_13879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e13909){if((e13909 instanceof Object)){
var ex__7088__auto__ = e13909;
var statearr_13910_13967 = state_13879;
(statearr_13910_13967[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13968 = state_13879;
state_13879 = G__13968;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__ = function(state_13879){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1.call(this,state_13879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto__,jobs,results,process,async))
})();
var state__7148__auto__ = (function (){var statearr_13911 = f__7147__auto__.call(null);
(statearr_13911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto__);

return statearr_13911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto__,jobs,results,process,async))
);

return c__7146__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__13970 = arguments.length;
switch (G__13970) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__13973 = arguments.length;
switch (G__13973) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__13976 = arguments.length;
switch (G__13976) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7146__auto___14028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___14028,tc,fc){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___14028,tc,fc){
return (function (state_14002){
var state_val_14003 = (state_14002[(1)]);
if((state_val_14003 === (7))){
var inst_13998 = (state_14002[(2)]);
var state_14002__$1 = state_14002;
var statearr_14004_14029 = state_14002__$1;
(statearr_14004_14029[(2)] = inst_13998);

(statearr_14004_14029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (1))){
var state_14002__$1 = state_14002;
var statearr_14005_14030 = state_14002__$1;
(statearr_14005_14030[(2)] = null);

(statearr_14005_14030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (4))){
var inst_13979 = (state_14002[(7)]);
var inst_13979__$1 = (state_14002[(2)]);
var inst_13980 = (inst_13979__$1 == null);
var state_14002__$1 = (function (){var statearr_14006 = state_14002;
(statearr_14006[(7)] = inst_13979__$1);

return statearr_14006;
})();
if(cljs.core.truth_(inst_13980)){
var statearr_14007_14031 = state_14002__$1;
(statearr_14007_14031[(1)] = (5));

} else {
var statearr_14008_14032 = state_14002__$1;
(statearr_14008_14032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (13))){
var state_14002__$1 = state_14002;
var statearr_14009_14033 = state_14002__$1;
(statearr_14009_14033[(2)] = null);

(statearr_14009_14033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (6))){
var inst_13979 = (state_14002[(7)]);
var inst_13985 = p.call(null,inst_13979);
var state_14002__$1 = state_14002;
if(cljs.core.truth_(inst_13985)){
var statearr_14010_14034 = state_14002__$1;
(statearr_14010_14034[(1)] = (9));

} else {
var statearr_14011_14035 = state_14002__$1;
(statearr_14011_14035[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (3))){
var inst_14000 = (state_14002[(2)]);
var state_14002__$1 = state_14002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14002__$1,inst_14000);
} else {
if((state_val_14003 === (12))){
var state_14002__$1 = state_14002;
var statearr_14012_14036 = state_14002__$1;
(statearr_14012_14036[(2)] = null);

(statearr_14012_14036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (2))){
var state_14002__$1 = state_14002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14002__$1,(4),ch);
} else {
if((state_val_14003 === (11))){
var inst_13979 = (state_14002[(7)]);
var inst_13989 = (state_14002[(2)]);
var state_14002__$1 = state_14002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14002__$1,(8),inst_13989,inst_13979);
} else {
if((state_val_14003 === (9))){
var state_14002__$1 = state_14002;
var statearr_14013_14037 = state_14002__$1;
(statearr_14013_14037[(2)] = tc);

(statearr_14013_14037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (5))){
var inst_13982 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13983 = cljs.core.async.close_BANG_.call(null,fc);
var state_14002__$1 = (function (){var statearr_14014 = state_14002;
(statearr_14014[(8)] = inst_13982);

return statearr_14014;
})();
var statearr_14015_14038 = state_14002__$1;
(statearr_14015_14038[(2)] = inst_13983);

(statearr_14015_14038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (14))){
var inst_13996 = (state_14002[(2)]);
var state_14002__$1 = state_14002;
var statearr_14016_14039 = state_14002__$1;
(statearr_14016_14039[(2)] = inst_13996);

(statearr_14016_14039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (10))){
var state_14002__$1 = state_14002;
var statearr_14017_14040 = state_14002__$1;
(statearr_14017_14040[(2)] = fc);

(statearr_14017_14040[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14003 === (8))){
var inst_13991 = (state_14002[(2)]);
var state_14002__$1 = state_14002;
if(cljs.core.truth_(inst_13991)){
var statearr_14018_14041 = state_14002__$1;
(statearr_14018_14041[(1)] = (12));

} else {
var statearr_14019_14042 = state_14002__$1;
(statearr_14019_14042[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto___14028,tc,fc))
;
return ((function (switch__7084__auto__,c__7146__auto___14028,tc,fc){
return (function() {
var cljs$core$async$state_machine__7085__auto__ = null;
var cljs$core$async$state_machine__7085__auto____0 = (function (){
var statearr_14023 = [null,null,null,null,null,null,null,null,null];
(statearr_14023[(0)] = cljs$core$async$state_machine__7085__auto__);

(statearr_14023[(1)] = (1));

return statearr_14023;
});
var cljs$core$async$state_machine__7085__auto____1 = (function (state_14002){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_14002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e14024){if((e14024 instanceof Object)){
var ex__7088__auto__ = e14024;
var statearr_14025_14043 = state_14002;
(statearr_14025_14043[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14044 = state_14002;
state_14002 = G__14044;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$state_machine__7085__auto__ = function(state_14002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7085__auto____1.call(this,state_14002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7085__auto____0;
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7085__auto____1;
return cljs$core$async$state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___14028,tc,fc))
})();
var state__7148__auto__ = (function (){var statearr_14026 = f__7147__auto__.call(null);
(statearr_14026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___14028);

return statearr_14026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___14028,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto__){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto__){
return (function (state_14091){
var state_val_14092 = (state_14091[(1)]);
if((state_val_14092 === (1))){
var inst_14077 = init;
var state_14091__$1 = (function (){var statearr_14093 = state_14091;
(statearr_14093[(7)] = inst_14077);

return statearr_14093;
})();
var statearr_14094_14109 = state_14091__$1;
(statearr_14094_14109[(2)] = null);

(statearr_14094_14109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14092 === (2))){
var state_14091__$1 = state_14091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14091__$1,(4),ch);
} else {
if((state_val_14092 === (3))){
var inst_14089 = (state_14091[(2)]);
var state_14091__$1 = state_14091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14091__$1,inst_14089);
} else {
if((state_val_14092 === (4))){
var inst_14080 = (state_14091[(8)]);
var inst_14080__$1 = (state_14091[(2)]);
var inst_14081 = (inst_14080__$1 == null);
var state_14091__$1 = (function (){var statearr_14095 = state_14091;
(statearr_14095[(8)] = inst_14080__$1);

return statearr_14095;
})();
if(cljs.core.truth_(inst_14081)){
var statearr_14096_14110 = state_14091__$1;
(statearr_14096_14110[(1)] = (5));

} else {
var statearr_14097_14111 = state_14091__$1;
(statearr_14097_14111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14092 === (5))){
var inst_14077 = (state_14091[(7)]);
var state_14091__$1 = state_14091;
var statearr_14098_14112 = state_14091__$1;
(statearr_14098_14112[(2)] = inst_14077);

(statearr_14098_14112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14092 === (6))){
var inst_14080 = (state_14091[(8)]);
var inst_14077 = (state_14091[(7)]);
var inst_14084 = f.call(null,inst_14077,inst_14080);
var inst_14077__$1 = inst_14084;
var state_14091__$1 = (function (){var statearr_14099 = state_14091;
(statearr_14099[(7)] = inst_14077__$1);

return statearr_14099;
})();
var statearr_14100_14113 = state_14091__$1;
(statearr_14100_14113[(2)] = null);

(statearr_14100_14113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14092 === (7))){
var inst_14087 = (state_14091[(2)]);
var state_14091__$1 = state_14091;
var statearr_14101_14114 = state_14091__$1;
(statearr_14101_14114[(2)] = inst_14087);

(statearr_14101_14114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7146__auto__))
;
return ((function (switch__7084__auto__,c__7146__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7085__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7085__auto____0 = (function (){
var statearr_14105 = [null,null,null,null,null,null,null,null,null];
(statearr_14105[(0)] = cljs$core$async$reduce_$_state_machine__7085__auto__);

(statearr_14105[(1)] = (1));

return statearr_14105;
});
var cljs$core$async$reduce_$_state_machine__7085__auto____1 = (function (state_14091){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_14091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e14106){if((e14106 instanceof Object)){
var ex__7088__auto__ = e14106;
var statearr_14107_14115 = state_14091;
(statearr_14107_14115[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14116 = state_14091;
state_14091 = G__14116;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7085__auto__ = function(state_14091){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7085__auto____1.call(this,state_14091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7085__auto____0;
cljs$core$async$reduce_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7085__auto____1;
return cljs$core$async$reduce_$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto__))
})();
var state__7148__auto__ = (function (){var statearr_14108 = f__7147__auto__.call(null);
(statearr_14108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto__);

return statearr_14108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto__))
);

return c__7146__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__14118 = arguments.length;
switch (G__14118) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto__){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto__){
return (function (state_14143){
var state_val_14144 = (state_14143[(1)]);
if((state_val_14144 === (7))){
var inst_14125 = (state_14143[(2)]);
var state_14143__$1 = state_14143;
var statearr_14145_14169 = state_14143__$1;
(statearr_14145_14169[(2)] = inst_14125);

(statearr_14145_14169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14144 === (1))){
var inst_14119 = cljs.core.seq.call(null,coll);
var inst_14120 = inst_14119;
var state_14143__$1 = (function (){var statearr_14146 = state_14143;
(statearr_14146[(7)] = inst_14120);

return statearr_14146;
})();
var statearr_14147_14170 = state_14143__$1;
(statearr_14147_14170[(2)] = null);

(statearr_14147_14170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14144 === (4))){
var inst_14120 = (state_14143[(7)]);
var inst_14123 = cljs.core.first.call(null,inst_14120);
var state_14143__$1 = state_14143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14143__$1,(7),ch,inst_14123);
} else {
if((state_val_14144 === (13))){
var inst_14137 = (state_14143[(2)]);
var state_14143__$1 = state_14143;
var statearr_14148_14171 = state_14143__$1;
(statearr_14148_14171[(2)] = inst_14137);

(statearr_14148_14171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14144 === (6))){
var inst_14128 = (state_14143[(2)]);
var state_14143__$1 = state_14143;
if(cljs.core.truth_(inst_14128)){
var statearr_14149_14172 = state_14143__$1;
(statearr_14149_14172[(1)] = (8));

} else {
var statearr_14150_14173 = state_14143__$1;
(statearr_14150_14173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14144 === (3))){
var inst_14141 = (state_14143[(2)]);
var state_14143__$1 = state_14143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14143__$1,inst_14141);
} else {
if((state_val_14144 === (12))){
var state_14143__$1 = state_14143;
var statearr_14151_14174 = state_14143__$1;
(statearr_14151_14174[(2)] = null);

(statearr_14151_14174[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14144 === (2))){
var inst_14120 = (state_14143[(7)]);
var state_14143__$1 = state_14143;
if(cljs.core.truth_(inst_14120)){
var statearr_14152_14175 = state_14143__$1;
(statearr_14152_14175[(1)] = (4));

} else {
var statearr_14153_14176 = state_14143__$1;
(statearr_14153_14176[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14144 === (11))){
var inst_14134 = cljs.core.async.close_BANG_.call(null,ch);
var state_14143__$1 = state_14143;
var statearr_14154_14177 = state_14143__$1;
(statearr_14154_14177[(2)] = inst_14134);

(statearr_14154_14177[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14144 === (9))){
var state_14143__$1 = state_14143;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14155_14178 = state_14143__$1;
(statearr_14155_14178[(1)] = (11));

} else {
var statearr_14156_14179 = state_14143__$1;
(statearr_14156_14179[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14144 === (5))){
var inst_14120 = (state_14143[(7)]);
var state_14143__$1 = state_14143;
var statearr_14157_14180 = state_14143__$1;
(statearr_14157_14180[(2)] = inst_14120);

(statearr_14157_14180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14144 === (10))){
var inst_14139 = (state_14143[(2)]);
var state_14143__$1 = state_14143;
var statearr_14158_14181 = state_14143__$1;
(statearr_14158_14181[(2)] = inst_14139);

(statearr_14158_14181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14144 === (8))){
var inst_14120 = (state_14143[(7)]);
var inst_14130 = cljs.core.next.call(null,inst_14120);
var inst_14120__$1 = inst_14130;
var state_14143__$1 = (function (){var statearr_14159 = state_14143;
(statearr_14159[(7)] = inst_14120__$1);

return statearr_14159;
})();
var statearr_14160_14182 = state_14143__$1;
(statearr_14160_14182[(2)] = null);

(statearr_14160_14182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto__))
;
return ((function (switch__7084__auto__,c__7146__auto__){
return (function() {
var cljs$core$async$state_machine__7085__auto__ = null;
var cljs$core$async$state_machine__7085__auto____0 = (function (){
var statearr_14164 = [null,null,null,null,null,null,null,null];
(statearr_14164[(0)] = cljs$core$async$state_machine__7085__auto__);

(statearr_14164[(1)] = (1));

return statearr_14164;
});
var cljs$core$async$state_machine__7085__auto____1 = (function (state_14143){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_14143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e14165){if((e14165 instanceof Object)){
var ex__7088__auto__ = e14165;
var statearr_14166_14183 = state_14143;
(statearr_14166_14183[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14184 = state_14143;
state_14143 = G__14184;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$state_machine__7085__auto__ = function(state_14143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7085__auto____1.call(this,state_14143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7085__auto____0;
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7085__auto____1;
return cljs$core$async$state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto__))
})();
var state__7148__auto__ = (function (){var statearr_14167 = f__7147__auto__.call(null);
(statearr_14167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto__);

return statearr_14167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto__))
);

return c__7146__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj14186 = {};
return obj14186;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4526__auto__ = _;
if(and__4526__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4526__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5174__auto__ = (((_ == null))?null:_);
return (function (){var or__4538__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5174__auto__)]);
if(or__4538__auto__){
return or__4538__auto__;
} else {
var or__4538__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4538__auto____$1){
return or__4538__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj14188 = {};
return obj14188;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4526__auto__ = m;
if(and__4526__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4526__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5174__auto__ = (((m == null))?null:m);
return (function (){var or__4538__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5174__auto__)]);
if(or__4538__auto__){
return or__4538__auto__;
} else {
var or__4538__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4538__auto____$1){
return or__4538__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4526__auto__ = m;
if(and__4526__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4526__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5174__auto__ = (((m == null))?null:m);
return (function (){var or__4538__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5174__auto__)]);
if(or__4538__auto__){
return or__4538__auto__;
} else {
var or__4538__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4538__auto____$1){
return or__4538__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4526__auto__ = m;
if(and__4526__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4526__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5174__auto__ = (((m == null))?null:m);
return (function (){var or__4538__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5174__auto__)]);
if(or__4538__auto__){
return or__4538__auto__;
} else {
var or__4538__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4538__auto____$1){
return or__4538__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t14410 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14410 = (function (mult,ch,cs,meta14411){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14411 = meta14411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14412,meta14411__$1){
var self__ = this;
var _14412__$1 = this;
return (new cljs.core.async.t14410(self__.mult,self__.ch,self__.cs,meta14411__$1));
});})(cs))
;

cljs.core.async.t14410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14412){
var self__ = this;
var _14412__$1 = this;
return self__.meta14411;
});})(cs))
;

cljs.core.async.t14410.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14410.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t14410.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t14410.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t14410.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t14410.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t14410.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14411","meta14411",-1345906566,null)], null);
});})(cs))
;

cljs.core.async.t14410.cljs$lang$type = true;

cljs.core.async.t14410.cljs$lang$ctorStr = "cljs.core.async/t14410";

cljs.core.async.t14410.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5117__auto__,writer__5118__auto__,opt__5119__auto__){
return cljs.core._write.call(null,writer__5118__auto__,"cljs.core.async/t14410");
});})(cs))
;

cljs.core.async.__GT_t14410 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t14410(mult__$1,ch__$1,cs__$1,meta14411){
return (new cljs.core.async.t14410(mult__$1,ch__$1,cs__$1,meta14411));
});})(cs))
;

}

return (new cljs.core.async.t14410(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7146__auto___14631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___14631,cs,m,dchan,dctr,done){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___14631,cs,m,dchan,dctr,done){
return (function (state_14543){
var state_val_14544 = (state_14543[(1)]);
if((state_val_14544 === (7))){
var inst_14539 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14545_14632 = state_14543__$1;
(statearr_14545_14632[(2)] = inst_14539);

(statearr_14545_14632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (20))){
var inst_14444 = (state_14543[(7)]);
var inst_14454 = cljs.core.first.call(null,inst_14444);
var inst_14455 = cljs.core.nth.call(null,inst_14454,(0),null);
var inst_14456 = cljs.core.nth.call(null,inst_14454,(1),null);
var state_14543__$1 = (function (){var statearr_14546 = state_14543;
(statearr_14546[(8)] = inst_14455);

return statearr_14546;
})();
if(cljs.core.truth_(inst_14456)){
var statearr_14547_14633 = state_14543__$1;
(statearr_14547_14633[(1)] = (22));

} else {
var statearr_14548_14634 = state_14543__$1;
(statearr_14548_14634[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (27))){
var inst_14491 = (state_14543[(9)]);
var inst_14484 = (state_14543[(10)]);
var inst_14486 = (state_14543[(11)]);
var inst_14415 = (state_14543[(12)]);
var inst_14491__$1 = cljs.core._nth.call(null,inst_14484,inst_14486);
var inst_14492 = cljs.core.async.put_BANG_.call(null,inst_14491__$1,inst_14415,done);
var state_14543__$1 = (function (){var statearr_14549 = state_14543;
(statearr_14549[(9)] = inst_14491__$1);

return statearr_14549;
})();
if(cljs.core.truth_(inst_14492)){
var statearr_14550_14635 = state_14543__$1;
(statearr_14550_14635[(1)] = (30));

} else {
var statearr_14551_14636 = state_14543__$1;
(statearr_14551_14636[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (1))){
var state_14543__$1 = state_14543;
var statearr_14552_14637 = state_14543__$1;
(statearr_14552_14637[(2)] = null);

(statearr_14552_14637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (24))){
var inst_14444 = (state_14543[(7)]);
var inst_14461 = (state_14543[(2)]);
var inst_14462 = cljs.core.next.call(null,inst_14444);
var inst_14424 = inst_14462;
var inst_14425 = null;
var inst_14426 = (0);
var inst_14427 = (0);
var state_14543__$1 = (function (){var statearr_14553 = state_14543;
(statearr_14553[(13)] = inst_14426);

(statearr_14553[(14)] = inst_14427);

(statearr_14553[(15)] = inst_14461);

(statearr_14553[(16)] = inst_14424);

(statearr_14553[(17)] = inst_14425);

return statearr_14553;
})();
var statearr_14554_14638 = state_14543__$1;
(statearr_14554_14638[(2)] = null);

(statearr_14554_14638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (39))){
var state_14543__$1 = state_14543;
var statearr_14558_14639 = state_14543__$1;
(statearr_14558_14639[(2)] = null);

(statearr_14558_14639[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (4))){
var inst_14415 = (state_14543[(12)]);
var inst_14415__$1 = (state_14543[(2)]);
var inst_14416 = (inst_14415__$1 == null);
var state_14543__$1 = (function (){var statearr_14559 = state_14543;
(statearr_14559[(12)] = inst_14415__$1);

return statearr_14559;
})();
if(cljs.core.truth_(inst_14416)){
var statearr_14560_14640 = state_14543__$1;
(statearr_14560_14640[(1)] = (5));

} else {
var statearr_14561_14641 = state_14543__$1;
(statearr_14561_14641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (15))){
var inst_14426 = (state_14543[(13)]);
var inst_14427 = (state_14543[(14)]);
var inst_14424 = (state_14543[(16)]);
var inst_14425 = (state_14543[(17)]);
var inst_14440 = (state_14543[(2)]);
var inst_14441 = (inst_14427 + (1));
var tmp14555 = inst_14426;
var tmp14556 = inst_14424;
var tmp14557 = inst_14425;
var inst_14424__$1 = tmp14556;
var inst_14425__$1 = tmp14557;
var inst_14426__$1 = tmp14555;
var inst_14427__$1 = inst_14441;
var state_14543__$1 = (function (){var statearr_14562 = state_14543;
(statearr_14562[(13)] = inst_14426__$1);

(statearr_14562[(14)] = inst_14427__$1);

(statearr_14562[(16)] = inst_14424__$1);

(statearr_14562[(17)] = inst_14425__$1);

(statearr_14562[(18)] = inst_14440);

return statearr_14562;
})();
var statearr_14563_14642 = state_14543__$1;
(statearr_14563_14642[(2)] = null);

(statearr_14563_14642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (21))){
var inst_14465 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14567_14643 = state_14543__$1;
(statearr_14567_14643[(2)] = inst_14465);

(statearr_14567_14643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (31))){
var inst_14491 = (state_14543[(9)]);
var inst_14495 = done.call(null,null);
var inst_14496 = cljs.core.async.untap_STAR_.call(null,m,inst_14491);
var state_14543__$1 = (function (){var statearr_14568 = state_14543;
(statearr_14568[(19)] = inst_14495);

return statearr_14568;
})();
var statearr_14569_14644 = state_14543__$1;
(statearr_14569_14644[(2)] = inst_14496);

(statearr_14569_14644[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (32))){
var inst_14484 = (state_14543[(10)]);
var inst_14486 = (state_14543[(11)]);
var inst_14485 = (state_14543[(20)]);
var inst_14483 = (state_14543[(21)]);
var inst_14498 = (state_14543[(2)]);
var inst_14499 = (inst_14486 + (1));
var tmp14564 = inst_14484;
var tmp14565 = inst_14485;
var tmp14566 = inst_14483;
var inst_14483__$1 = tmp14566;
var inst_14484__$1 = tmp14564;
var inst_14485__$1 = tmp14565;
var inst_14486__$1 = inst_14499;
var state_14543__$1 = (function (){var statearr_14570 = state_14543;
(statearr_14570[(10)] = inst_14484__$1);

(statearr_14570[(11)] = inst_14486__$1);

(statearr_14570[(20)] = inst_14485__$1);

(statearr_14570[(21)] = inst_14483__$1);

(statearr_14570[(22)] = inst_14498);

return statearr_14570;
})();
var statearr_14571_14645 = state_14543__$1;
(statearr_14571_14645[(2)] = null);

(statearr_14571_14645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (40))){
var inst_14511 = (state_14543[(23)]);
var inst_14515 = done.call(null,null);
var inst_14516 = cljs.core.async.untap_STAR_.call(null,m,inst_14511);
var state_14543__$1 = (function (){var statearr_14572 = state_14543;
(statearr_14572[(24)] = inst_14515);

return statearr_14572;
})();
var statearr_14573_14646 = state_14543__$1;
(statearr_14573_14646[(2)] = inst_14516);

(statearr_14573_14646[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (33))){
var inst_14502 = (state_14543[(25)]);
var inst_14504 = cljs.core.chunked_seq_QMARK_.call(null,inst_14502);
var state_14543__$1 = state_14543;
if(inst_14504){
var statearr_14574_14647 = state_14543__$1;
(statearr_14574_14647[(1)] = (36));

} else {
var statearr_14575_14648 = state_14543__$1;
(statearr_14575_14648[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (13))){
var inst_14434 = (state_14543[(26)]);
var inst_14437 = cljs.core.async.close_BANG_.call(null,inst_14434);
var state_14543__$1 = state_14543;
var statearr_14576_14649 = state_14543__$1;
(statearr_14576_14649[(2)] = inst_14437);

(statearr_14576_14649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (22))){
var inst_14455 = (state_14543[(8)]);
var inst_14458 = cljs.core.async.close_BANG_.call(null,inst_14455);
var state_14543__$1 = state_14543;
var statearr_14577_14650 = state_14543__$1;
(statearr_14577_14650[(2)] = inst_14458);

(statearr_14577_14650[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (36))){
var inst_14502 = (state_14543[(25)]);
var inst_14506 = cljs.core.chunk_first.call(null,inst_14502);
var inst_14507 = cljs.core.chunk_rest.call(null,inst_14502);
var inst_14508 = cljs.core.count.call(null,inst_14506);
var inst_14483 = inst_14507;
var inst_14484 = inst_14506;
var inst_14485 = inst_14508;
var inst_14486 = (0);
var state_14543__$1 = (function (){var statearr_14578 = state_14543;
(statearr_14578[(10)] = inst_14484);

(statearr_14578[(11)] = inst_14486);

(statearr_14578[(20)] = inst_14485);

(statearr_14578[(21)] = inst_14483);

return statearr_14578;
})();
var statearr_14579_14651 = state_14543__$1;
(statearr_14579_14651[(2)] = null);

(statearr_14579_14651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (41))){
var inst_14502 = (state_14543[(25)]);
var inst_14518 = (state_14543[(2)]);
var inst_14519 = cljs.core.next.call(null,inst_14502);
var inst_14483 = inst_14519;
var inst_14484 = null;
var inst_14485 = (0);
var inst_14486 = (0);
var state_14543__$1 = (function (){var statearr_14580 = state_14543;
(statearr_14580[(27)] = inst_14518);

(statearr_14580[(10)] = inst_14484);

(statearr_14580[(11)] = inst_14486);

(statearr_14580[(20)] = inst_14485);

(statearr_14580[(21)] = inst_14483);

return statearr_14580;
})();
var statearr_14581_14652 = state_14543__$1;
(statearr_14581_14652[(2)] = null);

(statearr_14581_14652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (43))){
var state_14543__$1 = state_14543;
var statearr_14582_14653 = state_14543__$1;
(statearr_14582_14653[(2)] = null);

(statearr_14582_14653[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (29))){
var inst_14527 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14583_14654 = state_14543__$1;
(statearr_14583_14654[(2)] = inst_14527);

(statearr_14583_14654[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (44))){
var inst_14536 = (state_14543[(2)]);
var state_14543__$1 = (function (){var statearr_14584 = state_14543;
(statearr_14584[(28)] = inst_14536);

return statearr_14584;
})();
var statearr_14585_14655 = state_14543__$1;
(statearr_14585_14655[(2)] = null);

(statearr_14585_14655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (6))){
var inst_14475 = (state_14543[(29)]);
var inst_14474 = cljs.core.deref.call(null,cs);
var inst_14475__$1 = cljs.core.keys.call(null,inst_14474);
var inst_14476 = cljs.core.count.call(null,inst_14475__$1);
var inst_14477 = cljs.core.reset_BANG_.call(null,dctr,inst_14476);
var inst_14482 = cljs.core.seq.call(null,inst_14475__$1);
var inst_14483 = inst_14482;
var inst_14484 = null;
var inst_14485 = (0);
var inst_14486 = (0);
var state_14543__$1 = (function (){var statearr_14586 = state_14543;
(statearr_14586[(29)] = inst_14475__$1);

(statearr_14586[(10)] = inst_14484);

(statearr_14586[(11)] = inst_14486);

(statearr_14586[(20)] = inst_14485);

(statearr_14586[(21)] = inst_14483);

(statearr_14586[(30)] = inst_14477);

return statearr_14586;
})();
var statearr_14587_14656 = state_14543__$1;
(statearr_14587_14656[(2)] = null);

(statearr_14587_14656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (28))){
var inst_14502 = (state_14543[(25)]);
var inst_14483 = (state_14543[(21)]);
var inst_14502__$1 = cljs.core.seq.call(null,inst_14483);
var state_14543__$1 = (function (){var statearr_14588 = state_14543;
(statearr_14588[(25)] = inst_14502__$1);

return statearr_14588;
})();
if(inst_14502__$1){
var statearr_14589_14657 = state_14543__$1;
(statearr_14589_14657[(1)] = (33));

} else {
var statearr_14590_14658 = state_14543__$1;
(statearr_14590_14658[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (25))){
var inst_14486 = (state_14543[(11)]);
var inst_14485 = (state_14543[(20)]);
var inst_14488 = (inst_14486 < inst_14485);
var inst_14489 = inst_14488;
var state_14543__$1 = state_14543;
if(cljs.core.truth_(inst_14489)){
var statearr_14591_14659 = state_14543__$1;
(statearr_14591_14659[(1)] = (27));

} else {
var statearr_14592_14660 = state_14543__$1;
(statearr_14592_14660[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (34))){
var state_14543__$1 = state_14543;
var statearr_14593_14661 = state_14543__$1;
(statearr_14593_14661[(2)] = null);

(statearr_14593_14661[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (17))){
var state_14543__$1 = state_14543;
var statearr_14594_14662 = state_14543__$1;
(statearr_14594_14662[(2)] = null);

(statearr_14594_14662[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (3))){
var inst_14541 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14543__$1,inst_14541);
} else {
if((state_val_14544 === (12))){
var inst_14470 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14595_14663 = state_14543__$1;
(statearr_14595_14663[(2)] = inst_14470);

(statearr_14595_14663[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (2))){
var state_14543__$1 = state_14543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14543__$1,(4),ch);
} else {
if((state_val_14544 === (23))){
var state_14543__$1 = state_14543;
var statearr_14596_14664 = state_14543__$1;
(statearr_14596_14664[(2)] = null);

(statearr_14596_14664[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (35))){
var inst_14525 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14597_14665 = state_14543__$1;
(statearr_14597_14665[(2)] = inst_14525);

(statearr_14597_14665[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (19))){
var inst_14444 = (state_14543[(7)]);
var inst_14448 = cljs.core.chunk_first.call(null,inst_14444);
var inst_14449 = cljs.core.chunk_rest.call(null,inst_14444);
var inst_14450 = cljs.core.count.call(null,inst_14448);
var inst_14424 = inst_14449;
var inst_14425 = inst_14448;
var inst_14426 = inst_14450;
var inst_14427 = (0);
var state_14543__$1 = (function (){var statearr_14598 = state_14543;
(statearr_14598[(13)] = inst_14426);

(statearr_14598[(14)] = inst_14427);

(statearr_14598[(16)] = inst_14424);

(statearr_14598[(17)] = inst_14425);

return statearr_14598;
})();
var statearr_14599_14666 = state_14543__$1;
(statearr_14599_14666[(2)] = null);

(statearr_14599_14666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (11))){
var inst_14424 = (state_14543[(16)]);
var inst_14444 = (state_14543[(7)]);
var inst_14444__$1 = cljs.core.seq.call(null,inst_14424);
var state_14543__$1 = (function (){var statearr_14600 = state_14543;
(statearr_14600[(7)] = inst_14444__$1);

return statearr_14600;
})();
if(inst_14444__$1){
var statearr_14601_14667 = state_14543__$1;
(statearr_14601_14667[(1)] = (16));

} else {
var statearr_14602_14668 = state_14543__$1;
(statearr_14602_14668[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (9))){
var inst_14472 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14603_14669 = state_14543__$1;
(statearr_14603_14669[(2)] = inst_14472);

(statearr_14603_14669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (5))){
var inst_14422 = cljs.core.deref.call(null,cs);
var inst_14423 = cljs.core.seq.call(null,inst_14422);
var inst_14424 = inst_14423;
var inst_14425 = null;
var inst_14426 = (0);
var inst_14427 = (0);
var state_14543__$1 = (function (){var statearr_14604 = state_14543;
(statearr_14604[(13)] = inst_14426);

(statearr_14604[(14)] = inst_14427);

(statearr_14604[(16)] = inst_14424);

(statearr_14604[(17)] = inst_14425);

return statearr_14604;
})();
var statearr_14605_14670 = state_14543__$1;
(statearr_14605_14670[(2)] = null);

(statearr_14605_14670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (14))){
var state_14543__$1 = state_14543;
var statearr_14606_14671 = state_14543__$1;
(statearr_14606_14671[(2)] = null);

(statearr_14606_14671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (45))){
var inst_14533 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14607_14672 = state_14543__$1;
(statearr_14607_14672[(2)] = inst_14533);

(statearr_14607_14672[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (26))){
var inst_14475 = (state_14543[(29)]);
var inst_14529 = (state_14543[(2)]);
var inst_14530 = cljs.core.seq.call(null,inst_14475);
var state_14543__$1 = (function (){var statearr_14608 = state_14543;
(statearr_14608[(31)] = inst_14529);

return statearr_14608;
})();
if(inst_14530){
var statearr_14609_14673 = state_14543__$1;
(statearr_14609_14673[(1)] = (42));

} else {
var statearr_14610_14674 = state_14543__$1;
(statearr_14610_14674[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (16))){
var inst_14444 = (state_14543[(7)]);
var inst_14446 = cljs.core.chunked_seq_QMARK_.call(null,inst_14444);
var state_14543__$1 = state_14543;
if(inst_14446){
var statearr_14611_14675 = state_14543__$1;
(statearr_14611_14675[(1)] = (19));

} else {
var statearr_14612_14676 = state_14543__$1;
(statearr_14612_14676[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (38))){
var inst_14522 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14613_14677 = state_14543__$1;
(statearr_14613_14677[(2)] = inst_14522);

(statearr_14613_14677[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (30))){
var state_14543__$1 = state_14543;
var statearr_14614_14678 = state_14543__$1;
(statearr_14614_14678[(2)] = null);

(statearr_14614_14678[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (10))){
var inst_14427 = (state_14543[(14)]);
var inst_14425 = (state_14543[(17)]);
var inst_14433 = cljs.core._nth.call(null,inst_14425,inst_14427);
var inst_14434 = cljs.core.nth.call(null,inst_14433,(0),null);
var inst_14435 = cljs.core.nth.call(null,inst_14433,(1),null);
var state_14543__$1 = (function (){var statearr_14615 = state_14543;
(statearr_14615[(26)] = inst_14434);

return statearr_14615;
})();
if(cljs.core.truth_(inst_14435)){
var statearr_14616_14679 = state_14543__$1;
(statearr_14616_14679[(1)] = (13));

} else {
var statearr_14617_14680 = state_14543__$1;
(statearr_14617_14680[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (18))){
var inst_14468 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14618_14681 = state_14543__$1;
(statearr_14618_14681[(2)] = inst_14468);

(statearr_14618_14681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (42))){
var state_14543__$1 = state_14543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14543__$1,(45),dchan);
} else {
if((state_val_14544 === (37))){
var inst_14502 = (state_14543[(25)]);
var inst_14415 = (state_14543[(12)]);
var inst_14511 = (state_14543[(23)]);
var inst_14511__$1 = cljs.core.first.call(null,inst_14502);
var inst_14512 = cljs.core.async.put_BANG_.call(null,inst_14511__$1,inst_14415,done);
var state_14543__$1 = (function (){var statearr_14619 = state_14543;
(statearr_14619[(23)] = inst_14511__$1);

return statearr_14619;
})();
if(cljs.core.truth_(inst_14512)){
var statearr_14620_14682 = state_14543__$1;
(statearr_14620_14682[(1)] = (39));

} else {
var statearr_14621_14683 = state_14543__$1;
(statearr_14621_14683[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (8))){
var inst_14426 = (state_14543[(13)]);
var inst_14427 = (state_14543[(14)]);
var inst_14429 = (inst_14427 < inst_14426);
var inst_14430 = inst_14429;
var state_14543__$1 = state_14543;
if(cljs.core.truth_(inst_14430)){
var statearr_14622_14684 = state_14543__$1;
(statearr_14622_14684[(1)] = (10));

} else {
var statearr_14623_14685 = state_14543__$1;
(statearr_14623_14685[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto___14631,cs,m,dchan,dctr,done))
;
return ((function (switch__7084__auto__,c__7146__auto___14631,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7085__auto__ = null;
var cljs$core$async$mult_$_state_machine__7085__auto____0 = (function (){
var statearr_14627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14627[(0)] = cljs$core$async$mult_$_state_machine__7085__auto__);

(statearr_14627[(1)] = (1));

return statearr_14627;
});
var cljs$core$async$mult_$_state_machine__7085__auto____1 = (function (state_14543){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_14543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e14628){if((e14628 instanceof Object)){
var ex__7088__auto__ = e14628;
var statearr_14629_14686 = state_14543;
(statearr_14629_14686[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14687 = state_14543;
state_14543 = G__14687;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7085__auto__ = function(state_14543){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7085__auto____1.call(this,state_14543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7085__auto____0;
cljs$core$async$mult_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7085__auto____1;
return cljs$core$async$mult_$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___14631,cs,m,dchan,dctr,done))
})();
var state__7148__auto__ = (function (){var statearr_14630 = f__7147__auto__.call(null);
(statearr_14630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___14631);

return statearr_14630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___14631,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__14689 = arguments.length;
switch (G__14689) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj14692 = {};
return obj14692;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4526__auto__ = m;
if(and__4526__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4526__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5174__auto__ = (((m == null))?null:m);
return (function (){var or__4538__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5174__auto__)]);
if(or__4538__auto__){
return or__4538__auto__;
} else {
var or__4538__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4538__auto____$1){
return or__4538__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4526__auto__ = m;
if(and__4526__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4526__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5174__auto__ = (((m == null))?null:m);
return (function (){var or__4538__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5174__auto__)]);
if(or__4538__auto__){
return or__4538__auto__;
} else {
var or__4538__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4538__auto____$1){
return or__4538__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4526__auto__ = m;
if(and__4526__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4526__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5174__auto__ = (((m == null))?null:m);
return (function (){var or__4538__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5174__auto__)]);
if(or__4538__auto__){
return or__4538__auto__;
} else {
var or__4538__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4538__auto____$1){
return or__4538__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4526__auto__ = m;
if(and__4526__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4526__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5174__auto__ = (((m == null))?null:m);
return (function (){var or__4538__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5174__auto__)]);
if(or__4538__auto__){
return or__4538__auto__;
} else {
var or__4538__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4538__auto____$1){
return or__4538__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4526__auto__ = m;
if(and__4526__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4526__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5174__auto__ = (((m == null))?null:m);
return (function (){var or__4538__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5174__auto__)]);
if(or__4538__auto__){
return or__4538__auto__;
} else {
var or__4538__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4538__auto____$1){
return or__4538__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5578__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5578__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14697){
var map__14698 = p__14697;
var map__14698__$1 = ((cljs.core.seq_QMARK_.call(null,map__14698))?cljs.core.apply.call(null,cljs.core.hash_map,map__14698):map__14698);
var opts = map__14698__$1;
var statearr_14699_14702 = state;
(statearr_14699_14702[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__14698,map__14698__$1,opts){
return (function (val){
var statearr_14700_14703 = state;
(statearr_14700_14703[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14698,map__14698__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_14701_14704 = state;
(statearr_14701_14704[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14693){
var G__14694 = cljs.core.first.call(null,seq14693);
var seq14693__$1 = cljs.core.next.call(null,seq14693);
var G__14695 = cljs.core.first.call(null,seq14693__$1);
var seq14693__$2 = cljs.core.next.call(null,seq14693__$1);
var G__14696 = cljs.core.first.call(null,seq14693__$2);
var seq14693__$3 = cljs.core.next.call(null,seq14693__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14694,G__14695,G__14696,seq14693__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t14824 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14824 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14825){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14825 = meta14825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14826,meta14825__$1){
var self__ = this;
var _14826__$1 = this;
return (new cljs.core.async.t14824(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14825__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14826){
var self__ = this;
var _14826__$1 = this;
return self__.meta14825;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14824.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14824.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t14824.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14824.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14824.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14824.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14824.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14824.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14825","meta14825",-2123300715,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14824.cljs$lang$type = true;

cljs.core.async.t14824.cljs$lang$ctorStr = "cljs.core.async/t14824";

cljs.core.async.t14824.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5117__auto__,writer__5118__auto__,opt__5119__auto__){
return cljs.core._write.call(null,writer__5118__auto__,"cljs.core.async/t14824");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t14824 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t14824(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14825){
return (new cljs.core.async.t14824(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14825));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t14824(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7146__auto___14943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___14943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___14943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14896){
var state_val_14897 = (state_14896[(1)]);
if((state_val_14897 === (7))){
var inst_14840 = (state_14896[(7)]);
var inst_14845 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14840);
var state_14896__$1 = state_14896;
var statearr_14898_14944 = state_14896__$1;
(statearr_14898_14944[(2)] = inst_14845);

(statearr_14898_14944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (20))){
var inst_14855 = (state_14896[(8)]);
var state_14896__$1 = state_14896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14896__$1,(23),out,inst_14855);
} else {
if((state_val_14897 === (1))){
var inst_14830 = (state_14896[(9)]);
var inst_14830__$1 = calc_state.call(null);
var inst_14831 = cljs.core.seq_QMARK_.call(null,inst_14830__$1);
var state_14896__$1 = (function (){var statearr_14899 = state_14896;
(statearr_14899[(9)] = inst_14830__$1);

return statearr_14899;
})();
if(inst_14831){
var statearr_14900_14945 = state_14896__$1;
(statearr_14900_14945[(1)] = (2));

} else {
var statearr_14901_14946 = state_14896__$1;
(statearr_14901_14946[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (24))){
var inst_14848 = (state_14896[(10)]);
var inst_14840 = inst_14848;
var state_14896__$1 = (function (){var statearr_14902 = state_14896;
(statearr_14902[(7)] = inst_14840);

return statearr_14902;
})();
var statearr_14903_14947 = state_14896__$1;
(statearr_14903_14947[(2)] = null);

(statearr_14903_14947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (4))){
var inst_14830 = (state_14896[(9)]);
var inst_14836 = (state_14896[(2)]);
var inst_14837 = cljs.core.get.call(null,inst_14836,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14838 = cljs.core.get.call(null,inst_14836,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14839 = cljs.core.get.call(null,inst_14836,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14840 = inst_14830;
var state_14896__$1 = (function (){var statearr_14904 = state_14896;
(statearr_14904[(11)] = inst_14839);

(statearr_14904[(7)] = inst_14840);

(statearr_14904[(12)] = inst_14837);

(statearr_14904[(13)] = inst_14838);

return statearr_14904;
})();
var statearr_14905_14948 = state_14896__$1;
(statearr_14905_14948[(2)] = null);

(statearr_14905_14948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (15))){
var state_14896__$1 = state_14896;
var statearr_14906_14949 = state_14896__$1;
(statearr_14906_14949[(2)] = null);

(statearr_14906_14949[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (21))){
var inst_14848 = (state_14896[(10)]);
var inst_14840 = inst_14848;
var state_14896__$1 = (function (){var statearr_14907 = state_14896;
(statearr_14907[(7)] = inst_14840);

return statearr_14907;
})();
var statearr_14908_14950 = state_14896__$1;
(statearr_14908_14950[(2)] = null);

(statearr_14908_14950[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (13))){
var inst_14892 = (state_14896[(2)]);
var state_14896__$1 = state_14896;
var statearr_14909_14951 = state_14896__$1;
(statearr_14909_14951[(2)] = inst_14892);

(statearr_14909_14951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (22))){
var inst_14890 = (state_14896[(2)]);
var state_14896__$1 = state_14896;
var statearr_14910_14952 = state_14896__$1;
(statearr_14910_14952[(2)] = inst_14890);

(statearr_14910_14952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (6))){
var inst_14894 = (state_14896[(2)]);
var state_14896__$1 = state_14896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14896__$1,inst_14894);
} else {
if((state_val_14897 === (25))){
var state_14896__$1 = state_14896;
var statearr_14911_14953 = state_14896__$1;
(statearr_14911_14953[(2)] = null);

(statearr_14911_14953[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (17))){
var inst_14870 = (state_14896[(14)]);
var state_14896__$1 = state_14896;
var statearr_14912_14954 = state_14896__$1;
(statearr_14912_14954[(2)] = inst_14870);

(statearr_14912_14954[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (3))){
var inst_14830 = (state_14896[(9)]);
var state_14896__$1 = state_14896;
var statearr_14913_14955 = state_14896__$1;
(statearr_14913_14955[(2)] = inst_14830);

(statearr_14913_14955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (12))){
var inst_14849 = (state_14896[(15)]);
var inst_14870 = (state_14896[(14)]);
var inst_14856 = (state_14896[(16)]);
var inst_14870__$1 = inst_14849.call(null,inst_14856);
var state_14896__$1 = (function (){var statearr_14914 = state_14896;
(statearr_14914[(14)] = inst_14870__$1);

return statearr_14914;
})();
if(cljs.core.truth_(inst_14870__$1)){
var statearr_14915_14956 = state_14896__$1;
(statearr_14915_14956[(1)] = (17));

} else {
var statearr_14916_14957 = state_14896__$1;
(statearr_14916_14957[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (2))){
var inst_14830 = (state_14896[(9)]);
var inst_14833 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14830);
var state_14896__$1 = state_14896;
var statearr_14917_14958 = state_14896__$1;
(statearr_14917_14958[(2)] = inst_14833);

(statearr_14917_14958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (23))){
var inst_14881 = (state_14896[(2)]);
var state_14896__$1 = state_14896;
if(cljs.core.truth_(inst_14881)){
var statearr_14918_14959 = state_14896__$1;
(statearr_14918_14959[(1)] = (24));

} else {
var statearr_14919_14960 = state_14896__$1;
(statearr_14919_14960[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (19))){
var inst_14878 = (state_14896[(2)]);
var state_14896__$1 = state_14896;
if(cljs.core.truth_(inst_14878)){
var statearr_14920_14961 = state_14896__$1;
(statearr_14920_14961[(1)] = (20));

} else {
var statearr_14921_14962 = state_14896__$1;
(statearr_14921_14962[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (11))){
var inst_14855 = (state_14896[(8)]);
var inst_14861 = (inst_14855 == null);
var state_14896__$1 = state_14896;
if(cljs.core.truth_(inst_14861)){
var statearr_14922_14963 = state_14896__$1;
(statearr_14922_14963[(1)] = (14));

} else {
var statearr_14923_14964 = state_14896__$1;
(statearr_14923_14964[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (9))){
var inst_14848 = (state_14896[(10)]);
var inst_14848__$1 = (state_14896[(2)]);
var inst_14849 = cljs.core.get.call(null,inst_14848__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14850 = cljs.core.get.call(null,inst_14848__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14851 = cljs.core.get.call(null,inst_14848__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14896__$1 = (function (){var statearr_14924 = state_14896;
(statearr_14924[(10)] = inst_14848__$1);

(statearr_14924[(17)] = inst_14850);

(statearr_14924[(15)] = inst_14849);

return statearr_14924;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14896__$1,(10),inst_14851);
} else {
if((state_val_14897 === (5))){
var inst_14840 = (state_14896[(7)]);
var inst_14843 = cljs.core.seq_QMARK_.call(null,inst_14840);
var state_14896__$1 = state_14896;
if(inst_14843){
var statearr_14925_14965 = state_14896__$1;
(statearr_14925_14965[(1)] = (7));

} else {
var statearr_14926_14966 = state_14896__$1;
(statearr_14926_14966[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (14))){
var inst_14856 = (state_14896[(16)]);
var inst_14863 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14856);
var state_14896__$1 = state_14896;
var statearr_14927_14967 = state_14896__$1;
(statearr_14927_14967[(2)] = inst_14863);

(statearr_14927_14967[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (26))){
var inst_14886 = (state_14896[(2)]);
var state_14896__$1 = state_14896;
var statearr_14928_14968 = state_14896__$1;
(statearr_14928_14968[(2)] = inst_14886);

(statearr_14928_14968[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (16))){
var inst_14866 = (state_14896[(2)]);
var inst_14867 = calc_state.call(null);
var inst_14840 = inst_14867;
var state_14896__$1 = (function (){var statearr_14929 = state_14896;
(statearr_14929[(7)] = inst_14840);

(statearr_14929[(18)] = inst_14866);

return statearr_14929;
})();
var statearr_14930_14969 = state_14896__$1;
(statearr_14930_14969[(2)] = null);

(statearr_14930_14969[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (10))){
var inst_14855 = (state_14896[(8)]);
var inst_14856 = (state_14896[(16)]);
var inst_14854 = (state_14896[(2)]);
var inst_14855__$1 = cljs.core.nth.call(null,inst_14854,(0),null);
var inst_14856__$1 = cljs.core.nth.call(null,inst_14854,(1),null);
var inst_14857 = (inst_14855__$1 == null);
var inst_14858 = cljs.core._EQ_.call(null,inst_14856__$1,change);
var inst_14859 = (inst_14857) || (inst_14858);
var state_14896__$1 = (function (){var statearr_14931 = state_14896;
(statearr_14931[(8)] = inst_14855__$1);

(statearr_14931[(16)] = inst_14856__$1);

return statearr_14931;
})();
if(cljs.core.truth_(inst_14859)){
var statearr_14932_14970 = state_14896__$1;
(statearr_14932_14970[(1)] = (11));

} else {
var statearr_14933_14971 = state_14896__$1;
(statearr_14933_14971[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (18))){
var inst_14850 = (state_14896[(17)]);
var inst_14849 = (state_14896[(15)]);
var inst_14856 = (state_14896[(16)]);
var inst_14873 = cljs.core.empty_QMARK_.call(null,inst_14849);
var inst_14874 = inst_14850.call(null,inst_14856);
var inst_14875 = cljs.core.not.call(null,inst_14874);
var inst_14876 = (inst_14873) && (inst_14875);
var state_14896__$1 = state_14896;
var statearr_14934_14972 = state_14896__$1;
(statearr_14934_14972[(2)] = inst_14876);

(statearr_14934_14972[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14897 === (8))){
var inst_14840 = (state_14896[(7)]);
var state_14896__$1 = state_14896;
var statearr_14935_14973 = state_14896__$1;
(statearr_14935_14973[(2)] = inst_14840);

(statearr_14935_14973[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto___14943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7084__auto__,c__7146__auto___14943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7085__auto__ = null;
var cljs$core$async$mix_$_state_machine__7085__auto____0 = (function (){
var statearr_14939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14939[(0)] = cljs$core$async$mix_$_state_machine__7085__auto__);

(statearr_14939[(1)] = (1));

return statearr_14939;
});
var cljs$core$async$mix_$_state_machine__7085__auto____1 = (function (state_14896){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_14896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e14940){if((e14940 instanceof Object)){
var ex__7088__auto__ = e14940;
var statearr_14941_14974 = state_14896;
(statearr_14941_14974[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14975 = state_14896;
state_14896 = G__14975;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7085__auto__ = function(state_14896){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7085__auto____1.call(this,state_14896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7085__auto____0;
cljs$core$async$mix_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7085__auto____1;
return cljs$core$async$mix_$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___14943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7148__auto__ = (function (){var statearr_14942 = f__7147__auto__.call(null);
(statearr_14942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___14943);

return statearr_14942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___14943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj14977 = {};
return obj14977;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4526__auto__ = p;
if(and__4526__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4526__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5174__auto__ = (((p == null))?null:p);
return (function (){var or__4538__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5174__auto__)]);
if(or__4538__auto__){
return or__4538__auto__;
} else {
var or__4538__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4538__auto____$1){
return or__4538__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4526__auto__ = p;
if(and__4526__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4526__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5174__auto__ = (((p == null))?null:p);
return (function (){var or__4538__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5174__auto__)]);
if(or__4538__auto__){
return or__4538__auto__;
} else {
var or__4538__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4538__auto____$1){
return or__4538__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__14979 = arguments.length;
switch (G__14979) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4526__auto__ = p;
if(and__4526__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4526__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5174__auto__ = (((p == null))?null:p);
return (function (){var or__4538__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5174__auto__)]);
if(or__4538__auto__){
return or__4538__auto__;
} else {
var or__4538__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4538__auto____$1){
return or__4538__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4526__auto__ = p;
if(and__4526__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4526__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5174__auto__ = (((p == null))?null:p);
return (function (){var or__4538__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5174__auto__)]);
if(or__4538__auto__){
return or__4538__auto__;
} else {
var or__4538__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4538__auto____$1){
return or__4538__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__14983 = arguments.length;
switch (G__14983) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4538__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4538__auto__)){
return or__4538__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4538__auto__,mults){
return (function (p1__14981_SHARP_){
if(cljs.core.truth_(p1__14981_SHARP_.call(null,topic))){
return p1__14981_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14981_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4538__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t14984 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14984 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14985){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14985 = meta14985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14986,meta14985__$1){
var self__ = this;
var _14986__$1 = this;
return (new cljs.core.async.t14984(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14985__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t14984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14986){
var self__ = this;
var _14986__$1 = this;
return self__.meta14985;
});})(mults,ensure_mult))
;

cljs.core.async.t14984.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14984.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t14984.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t14984.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t14984.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t14984.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t14984.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t14984.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14985","meta14985",-1927509116,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t14984.cljs$lang$type = true;

cljs.core.async.t14984.cljs$lang$ctorStr = "cljs.core.async/t14984";

cljs.core.async.t14984.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5117__auto__,writer__5118__auto__,opt__5119__auto__){
return cljs.core._write.call(null,writer__5118__auto__,"cljs.core.async/t14984");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t14984 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t14984(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14985){
return (new cljs.core.async.t14984(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14985));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t14984(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7146__auto___15107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___15107,mults,ensure_mult,p){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___15107,mults,ensure_mult,p){
return (function (state_15058){
var state_val_15059 = (state_15058[(1)]);
if((state_val_15059 === (7))){
var inst_15054 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15060_15108 = state_15058__$1;
(statearr_15060_15108[(2)] = inst_15054);

(statearr_15060_15108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (20))){
var state_15058__$1 = state_15058;
var statearr_15061_15109 = state_15058__$1;
(statearr_15061_15109[(2)] = null);

(statearr_15061_15109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (1))){
var state_15058__$1 = state_15058;
var statearr_15062_15110 = state_15058__$1;
(statearr_15062_15110[(2)] = null);

(statearr_15062_15110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (24))){
var inst_15037 = (state_15058[(7)]);
var inst_15046 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15037);
var state_15058__$1 = state_15058;
var statearr_15063_15111 = state_15058__$1;
(statearr_15063_15111[(2)] = inst_15046);

(statearr_15063_15111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (4))){
var inst_14989 = (state_15058[(8)]);
var inst_14989__$1 = (state_15058[(2)]);
var inst_14990 = (inst_14989__$1 == null);
var state_15058__$1 = (function (){var statearr_15064 = state_15058;
(statearr_15064[(8)] = inst_14989__$1);

return statearr_15064;
})();
if(cljs.core.truth_(inst_14990)){
var statearr_15065_15112 = state_15058__$1;
(statearr_15065_15112[(1)] = (5));

} else {
var statearr_15066_15113 = state_15058__$1;
(statearr_15066_15113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (15))){
var inst_15031 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15067_15114 = state_15058__$1;
(statearr_15067_15114[(2)] = inst_15031);

(statearr_15067_15114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (21))){
var inst_15051 = (state_15058[(2)]);
var state_15058__$1 = (function (){var statearr_15068 = state_15058;
(statearr_15068[(9)] = inst_15051);

return statearr_15068;
})();
var statearr_15069_15115 = state_15058__$1;
(statearr_15069_15115[(2)] = null);

(statearr_15069_15115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (13))){
var inst_15013 = (state_15058[(10)]);
var inst_15015 = cljs.core.chunked_seq_QMARK_.call(null,inst_15013);
var state_15058__$1 = state_15058;
if(inst_15015){
var statearr_15070_15116 = state_15058__$1;
(statearr_15070_15116[(1)] = (16));

} else {
var statearr_15071_15117 = state_15058__$1;
(statearr_15071_15117[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (22))){
var inst_15043 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
if(cljs.core.truth_(inst_15043)){
var statearr_15072_15118 = state_15058__$1;
(statearr_15072_15118[(1)] = (23));

} else {
var statearr_15073_15119 = state_15058__$1;
(statearr_15073_15119[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (6))){
var inst_15039 = (state_15058[(11)]);
var inst_14989 = (state_15058[(8)]);
var inst_15037 = (state_15058[(7)]);
var inst_15037__$1 = topic_fn.call(null,inst_14989);
var inst_15038 = cljs.core.deref.call(null,mults);
var inst_15039__$1 = cljs.core.get.call(null,inst_15038,inst_15037__$1);
var state_15058__$1 = (function (){var statearr_15074 = state_15058;
(statearr_15074[(11)] = inst_15039__$1);

(statearr_15074[(7)] = inst_15037__$1);

return statearr_15074;
})();
if(cljs.core.truth_(inst_15039__$1)){
var statearr_15075_15120 = state_15058__$1;
(statearr_15075_15120[(1)] = (19));

} else {
var statearr_15076_15121 = state_15058__$1;
(statearr_15076_15121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (25))){
var inst_15048 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15077_15122 = state_15058__$1;
(statearr_15077_15122[(2)] = inst_15048);

(statearr_15077_15122[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (17))){
var inst_15013 = (state_15058[(10)]);
var inst_15022 = cljs.core.first.call(null,inst_15013);
var inst_15023 = cljs.core.async.muxch_STAR_.call(null,inst_15022);
var inst_15024 = cljs.core.async.close_BANG_.call(null,inst_15023);
var inst_15025 = cljs.core.next.call(null,inst_15013);
var inst_14999 = inst_15025;
var inst_15000 = null;
var inst_15001 = (0);
var inst_15002 = (0);
var state_15058__$1 = (function (){var statearr_15078 = state_15058;
(statearr_15078[(12)] = inst_15024);

(statearr_15078[(13)] = inst_15000);

(statearr_15078[(14)] = inst_15001);

(statearr_15078[(15)] = inst_15002);

(statearr_15078[(16)] = inst_14999);

return statearr_15078;
})();
var statearr_15079_15123 = state_15058__$1;
(statearr_15079_15123[(2)] = null);

(statearr_15079_15123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (3))){
var inst_15056 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15058__$1,inst_15056);
} else {
if((state_val_15059 === (12))){
var inst_15033 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15080_15124 = state_15058__$1;
(statearr_15080_15124[(2)] = inst_15033);

(statearr_15080_15124[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (2))){
var state_15058__$1 = state_15058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15058__$1,(4),ch);
} else {
if((state_val_15059 === (23))){
var state_15058__$1 = state_15058;
var statearr_15081_15125 = state_15058__$1;
(statearr_15081_15125[(2)] = null);

(statearr_15081_15125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (19))){
var inst_15039 = (state_15058[(11)]);
var inst_14989 = (state_15058[(8)]);
var inst_15041 = cljs.core.async.muxch_STAR_.call(null,inst_15039);
var state_15058__$1 = state_15058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15058__$1,(22),inst_15041,inst_14989);
} else {
if((state_val_15059 === (11))){
var inst_15013 = (state_15058[(10)]);
var inst_14999 = (state_15058[(16)]);
var inst_15013__$1 = cljs.core.seq.call(null,inst_14999);
var state_15058__$1 = (function (){var statearr_15082 = state_15058;
(statearr_15082[(10)] = inst_15013__$1);

return statearr_15082;
})();
if(inst_15013__$1){
var statearr_15083_15126 = state_15058__$1;
(statearr_15083_15126[(1)] = (13));

} else {
var statearr_15084_15127 = state_15058__$1;
(statearr_15084_15127[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (9))){
var inst_15035 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15085_15128 = state_15058__$1;
(statearr_15085_15128[(2)] = inst_15035);

(statearr_15085_15128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (5))){
var inst_14996 = cljs.core.deref.call(null,mults);
var inst_14997 = cljs.core.vals.call(null,inst_14996);
var inst_14998 = cljs.core.seq.call(null,inst_14997);
var inst_14999 = inst_14998;
var inst_15000 = null;
var inst_15001 = (0);
var inst_15002 = (0);
var state_15058__$1 = (function (){var statearr_15086 = state_15058;
(statearr_15086[(13)] = inst_15000);

(statearr_15086[(14)] = inst_15001);

(statearr_15086[(15)] = inst_15002);

(statearr_15086[(16)] = inst_14999);

return statearr_15086;
})();
var statearr_15087_15129 = state_15058__$1;
(statearr_15087_15129[(2)] = null);

(statearr_15087_15129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (14))){
var state_15058__$1 = state_15058;
var statearr_15091_15130 = state_15058__$1;
(statearr_15091_15130[(2)] = null);

(statearr_15091_15130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (16))){
var inst_15013 = (state_15058[(10)]);
var inst_15017 = cljs.core.chunk_first.call(null,inst_15013);
var inst_15018 = cljs.core.chunk_rest.call(null,inst_15013);
var inst_15019 = cljs.core.count.call(null,inst_15017);
var inst_14999 = inst_15018;
var inst_15000 = inst_15017;
var inst_15001 = inst_15019;
var inst_15002 = (0);
var state_15058__$1 = (function (){var statearr_15092 = state_15058;
(statearr_15092[(13)] = inst_15000);

(statearr_15092[(14)] = inst_15001);

(statearr_15092[(15)] = inst_15002);

(statearr_15092[(16)] = inst_14999);

return statearr_15092;
})();
var statearr_15093_15131 = state_15058__$1;
(statearr_15093_15131[(2)] = null);

(statearr_15093_15131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (10))){
var inst_15000 = (state_15058[(13)]);
var inst_15001 = (state_15058[(14)]);
var inst_15002 = (state_15058[(15)]);
var inst_14999 = (state_15058[(16)]);
var inst_15007 = cljs.core._nth.call(null,inst_15000,inst_15002);
var inst_15008 = cljs.core.async.muxch_STAR_.call(null,inst_15007);
var inst_15009 = cljs.core.async.close_BANG_.call(null,inst_15008);
var inst_15010 = (inst_15002 + (1));
var tmp15088 = inst_15000;
var tmp15089 = inst_15001;
var tmp15090 = inst_14999;
var inst_14999__$1 = tmp15090;
var inst_15000__$1 = tmp15088;
var inst_15001__$1 = tmp15089;
var inst_15002__$1 = inst_15010;
var state_15058__$1 = (function (){var statearr_15094 = state_15058;
(statearr_15094[(17)] = inst_15009);

(statearr_15094[(13)] = inst_15000__$1);

(statearr_15094[(14)] = inst_15001__$1);

(statearr_15094[(15)] = inst_15002__$1);

(statearr_15094[(16)] = inst_14999__$1);

return statearr_15094;
})();
var statearr_15095_15132 = state_15058__$1;
(statearr_15095_15132[(2)] = null);

(statearr_15095_15132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (18))){
var inst_15028 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15096_15133 = state_15058__$1;
(statearr_15096_15133[(2)] = inst_15028);

(statearr_15096_15133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15059 === (8))){
var inst_15001 = (state_15058[(14)]);
var inst_15002 = (state_15058[(15)]);
var inst_15004 = (inst_15002 < inst_15001);
var inst_15005 = inst_15004;
var state_15058__$1 = state_15058;
if(cljs.core.truth_(inst_15005)){
var statearr_15097_15134 = state_15058__$1;
(statearr_15097_15134[(1)] = (10));

} else {
var statearr_15098_15135 = state_15058__$1;
(statearr_15098_15135[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto___15107,mults,ensure_mult,p))
;
return ((function (switch__7084__auto__,c__7146__auto___15107,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7085__auto__ = null;
var cljs$core$async$state_machine__7085__auto____0 = (function (){
var statearr_15102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15102[(0)] = cljs$core$async$state_machine__7085__auto__);

(statearr_15102[(1)] = (1));

return statearr_15102;
});
var cljs$core$async$state_machine__7085__auto____1 = (function (state_15058){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_15058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e15103){if((e15103 instanceof Object)){
var ex__7088__auto__ = e15103;
var statearr_15104_15136 = state_15058;
(statearr_15104_15136[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15137 = state_15058;
state_15058 = G__15137;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$state_machine__7085__auto__ = function(state_15058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7085__auto____1.call(this,state_15058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7085__auto____0;
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7085__auto____1;
return cljs$core$async$state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___15107,mults,ensure_mult,p))
})();
var state__7148__auto__ = (function (){var statearr_15105 = f__7147__auto__.call(null);
(statearr_15105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___15107);

return statearr_15105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___15107,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__15139 = arguments.length;
switch (G__15139) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__15142 = arguments.length;
switch (G__15142) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__15145 = arguments.length;
switch (G__15145) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7146__auto___15215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___15215,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___15215,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15184){
var state_val_15185 = (state_15184[(1)]);
if((state_val_15185 === (7))){
var state_15184__$1 = state_15184;
var statearr_15186_15216 = state_15184__$1;
(statearr_15186_15216[(2)] = null);

(statearr_15186_15216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (1))){
var state_15184__$1 = state_15184;
var statearr_15187_15217 = state_15184__$1;
(statearr_15187_15217[(2)] = null);

(statearr_15187_15217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (4))){
var inst_15148 = (state_15184[(7)]);
var inst_15150 = (inst_15148 < cnt);
var state_15184__$1 = state_15184;
if(cljs.core.truth_(inst_15150)){
var statearr_15188_15218 = state_15184__$1;
(statearr_15188_15218[(1)] = (6));

} else {
var statearr_15189_15219 = state_15184__$1;
(statearr_15189_15219[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (15))){
var inst_15180 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
var statearr_15190_15220 = state_15184__$1;
(statearr_15190_15220[(2)] = inst_15180);

(statearr_15190_15220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (13))){
var inst_15173 = cljs.core.async.close_BANG_.call(null,out);
var state_15184__$1 = state_15184;
var statearr_15191_15221 = state_15184__$1;
(statearr_15191_15221[(2)] = inst_15173);

(statearr_15191_15221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (6))){
var state_15184__$1 = state_15184;
var statearr_15192_15222 = state_15184__$1;
(statearr_15192_15222[(2)] = null);

(statearr_15192_15222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (3))){
var inst_15182 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15184__$1,inst_15182);
} else {
if((state_val_15185 === (12))){
var inst_15170 = (state_15184[(8)]);
var inst_15170__$1 = (state_15184[(2)]);
var inst_15171 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15170__$1);
var state_15184__$1 = (function (){var statearr_15193 = state_15184;
(statearr_15193[(8)] = inst_15170__$1);

return statearr_15193;
})();
if(cljs.core.truth_(inst_15171)){
var statearr_15194_15223 = state_15184__$1;
(statearr_15194_15223[(1)] = (13));

} else {
var statearr_15195_15224 = state_15184__$1;
(statearr_15195_15224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (2))){
var inst_15147 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15148 = (0);
var state_15184__$1 = (function (){var statearr_15196 = state_15184;
(statearr_15196[(9)] = inst_15147);

(statearr_15196[(7)] = inst_15148);

return statearr_15196;
})();
var statearr_15197_15225 = state_15184__$1;
(statearr_15197_15225[(2)] = null);

(statearr_15197_15225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (11))){
var inst_15148 = (state_15184[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15184,(10),Object,null,(9));
var inst_15157 = chs__$1.call(null,inst_15148);
var inst_15158 = done.call(null,inst_15148);
var inst_15159 = cljs.core.async.take_BANG_.call(null,inst_15157,inst_15158);
var state_15184__$1 = state_15184;
var statearr_15198_15226 = state_15184__$1;
(statearr_15198_15226[(2)] = inst_15159);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15184__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (9))){
var inst_15148 = (state_15184[(7)]);
var inst_15161 = (state_15184[(2)]);
var inst_15162 = (inst_15148 + (1));
var inst_15148__$1 = inst_15162;
var state_15184__$1 = (function (){var statearr_15199 = state_15184;
(statearr_15199[(10)] = inst_15161);

(statearr_15199[(7)] = inst_15148__$1);

return statearr_15199;
})();
var statearr_15200_15227 = state_15184__$1;
(statearr_15200_15227[(2)] = null);

(statearr_15200_15227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (5))){
var inst_15168 = (state_15184[(2)]);
var state_15184__$1 = (function (){var statearr_15201 = state_15184;
(statearr_15201[(11)] = inst_15168);

return statearr_15201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15184__$1,(12),dchan);
} else {
if((state_val_15185 === (14))){
var inst_15170 = (state_15184[(8)]);
var inst_15175 = cljs.core.apply.call(null,f,inst_15170);
var state_15184__$1 = state_15184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15184__$1,(16),out,inst_15175);
} else {
if((state_val_15185 === (16))){
var inst_15177 = (state_15184[(2)]);
var state_15184__$1 = (function (){var statearr_15202 = state_15184;
(statearr_15202[(12)] = inst_15177);

return statearr_15202;
})();
var statearr_15203_15228 = state_15184__$1;
(statearr_15203_15228[(2)] = null);

(statearr_15203_15228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (10))){
var inst_15152 = (state_15184[(2)]);
var inst_15153 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15184__$1 = (function (){var statearr_15204 = state_15184;
(statearr_15204[(13)] = inst_15152);

return statearr_15204;
})();
var statearr_15205_15229 = state_15184__$1;
(statearr_15205_15229[(2)] = inst_15153);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15184__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (8))){
var inst_15166 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
var statearr_15206_15230 = state_15184__$1;
(statearr_15206_15230[(2)] = inst_15166);

(statearr_15206_15230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto___15215,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7084__auto__,c__7146__auto___15215,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7085__auto__ = null;
var cljs$core$async$state_machine__7085__auto____0 = (function (){
var statearr_15210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15210[(0)] = cljs$core$async$state_machine__7085__auto__);

(statearr_15210[(1)] = (1));

return statearr_15210;
});
var cljs$core$async$state_machine__7085__auto____1 = (function (state_15184){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_15184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e15211){if((e15211 instanceof Object)){
var ex__7088__auto__ = e15211;
var statearr_15212_15231 = state_15184;
(statearr_15212_15231[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15232 = state_15184;
state_15184 = G__15232;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$state_machine__7085__auto__ = function(state_15184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7085__auto____1.call(this,state_15184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7085__auto____0;
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7085__auto____1;
return cljs$core$async$state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___15215,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7148__auto__ = (function (){var statearr_15213 = f__7147__auto__.call(null);
(statearr_15213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___15215);

return statearr_15213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___15215,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__15235 = arguments.length;
switch (G__15235) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7146__auto___15290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___15290,out){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___15290,out){
return (function (state_15265){
var state_val_15266 = (state_15265[(1)]);
if((state_val_15266 === (7))){
var inst_15244 = (state_15265[(7)]);
var inst_15245 = (state_15265[(8)]);
var inst_15244__$1 = (state_15265[(2)]);
var inst_15245__$1 = cljs.core.nth.call(null,inst_15244__$1,(0),null);
var inst_15246 = cljs.core.nth.call(null,inst_15244__$1,(1),null);
var inst_15247 = (inst_15245__$1 == null);
var state_15265__$1 = (function (){var statearr_15267 = state_15265;
(statearr_15267[(7)] = inst_15244__$1);

(statearr_15267[(9)] = inst_15246);

(statearr_15267[(8)] = inst_15245__$1);

return statearr_15267;
})();
if(cljs.core.truth_(inst_15247)){
var statearr_15268_15291 = state_15265__$1;
(statearr_15268_15291[(1)] = (8));

} else {
var statearr_15269_15292 = state_15265__$1;
(statearr_15269_15292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (1))){
var inst_15236 = cljs.core.vec.call(null,chs);
var inst_15237 = inst_15236;
var state_15265__$1 = (function (){var statearr_15270 = state_15265;
(statearr_15270[(10)] = inst_15237);

return statearr_15270;
})();
var statearr_15271_15293 = state_15265__$1;
(statearr_15271_15293[(2)] = null);

(statearr_15271_15293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (4))){
var inst_15237 = (state_15265[(10)]);
var state_15265__$1 = state_15265;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15265__$1,(7),inst_15237);
} else {
if((state_val_15266 === (6))){
var inst_15261 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
var statearr_15272_15294 = state_15265__$1;
(statearr_15272_15294[(2)] = inst_15261);

(statearr_15272_15294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (3))){
var inst_15263 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15265__$1,inst_15263);
} else {
if((state_val_15266 === (2))){
var inst_15237 = (state_15265[(10)]);
var inst_15239 = cljs.core.count.call(null,inst_15237);
var inst_15240 = (inst_15239 > (0));
var state_15265__$1 = state_15265;
if(cljs.core.truth_(inst_15240)){
var statearr_15274_15295 = state_15265__$1;
(statearr_15274_15295[(1)] = (4));

} else {
var statearr_15275_15296 = state_15265__$1;
(statearr_15275_15296[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (11))){
var inst_15237 = (state_15265[(10)]);
var inst_15254 = (state_15265[(2)]);
var tmp15273 = inst_15237;
var inst_15237__$1 = tmp15273;
var state_15265__$1 = (function (){var statearr_15276 = state_15265;
(statearr_15276[(10)] = inst_15237__$1);

(statearr_15276[(11)] = inst_15254);

return statearr_15276;
})();
var statearr_15277_15297 = state_15265__$1;
(statearr_15277_15297[(2)] = null);

(statearr_15277_15297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (9))){
var inst_15245 = (state_15265[(8)]);
var state_15265__$1 = state_15265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15265__$1,(11),out,inst_15245);
} else {
if((state_val_15266 === (5))){
var inst_15259 = cljs.core.async.close_BANG_.call(null,out);
var state_15265__$1 = state_15265;
var statearr_15278_15298 = state_15265__$1;
(statearr_15278_15298[(2)] = inst_15259);

(statearr_15278_15298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (10))){
var inst_15257 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
var statearr_15279_15299 = state_15265__$1;
(statearr_15279_15299[(2)] = inst_15257);

(statearr_15279_15299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (8))){
var inst_15244 = (state_15265[(7)]);
var inst_15237 = (state_15265[(10)]);
var inst_15246 = (state_15265[(9)]);
var inst_15245 = (state_15265[(8)]);
var inst_15249 = (function (){var cs = inst_15237;
var vec__15242 = inst_15244;
var v = inst_15245;
var c = inst_15246;
return ((function (cs,vec__15242,v,c,inst_15244,inst_15237,inst_15246,inst_15245,state_val_15266,c__7146__auto___15290,out){
return (function (p1__15233_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15233_SHARP_);
});
;})(cs,vec__15242,v,c,inst_15244,inst_15237,inst_15246,inst_15245,state_val_15266,c__7146__auto___15290,out))
})();
var inst_15250 = cljs.core.filterv.call(null,inst_15249,inst_15237);
var inst_15237__$1 = inst_15250;
var state_15265__$1 = (function (){var statearr_15280 = state_15265;
(statearr_15280[(10)] = inst_15237__$1);

return statearr_15280;
})();
var statearr_15281_15300 = state_15265__$1;
(statearr_15281_15300[(2)] = null);

(statearr_15281_15300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto___15290,out))
;
return ((function (switch__7084__auto__,c__7146__auto___15290,out){
return (function() {
var cljs$core$async$state_machine__7085__auto__ = null;
var cljs$core$async$state_machine__7085__auto____0 = (function (){
var statearr_15285 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15285[(0)] = cljs$core$async$state_machine__7085__auto__);

(statearr_15285[(1)] = (1));

return statearr_15285;
});
var cljs$core$async$state_machine__7085__auto____1 = (function (state_15265){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_15265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e15286){if((e15286 instanceof Object)){
var ex__7088__auto__ = e15286;
var statearr_15287_15301 = state_15265;
(statearr_15287_15301[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15302 = state_15265;
state_15265 = G__15302;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$state_machine__7085__auto__ = function(state_15265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7085__auto____1.call(this,state_15265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7085__auto____0;
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7085__auto____1;
return cljs$core$async$state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___15290,out))
})();
var state__7148__auto__ = (function (){var statearr_15288 = f__7147__auto__.call(null);
(statearr_15288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___15290);

return statearr_15288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___15290,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__15304 = arguments.length;
switch (G__15304) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7146__auto___15352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___15352,out){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___15352,out){
return (function (state_15328){
var state_val_15329 = (state_15328[(1)]);
if((state_val_15329 === (7))){
var inst_15310 = (state_15328[(7)]);
var inst_15310__$1 = (state_15328[(2)]);
var inst_15311 = (inst_15310__$1 == null);
var inst_15312 = cljs.core.not.call(null,inst_15311);
var state_15328__$1 = (function (){var statearr_15330 = state_15328;
(statearr_15330[(7)] = inst_15310__$1);

return statearr_15330;
})();
if(inst_15312){
var statearr_15331_15353 = state_15328__$1;
(statearr_15331_15353[(1)] = (8));

} else {
var statearr_15332_15354 = state_15328__$1;
(statearr_15332_15354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (1))){
var inst_15305 = (0);
var state_15328__$1 = (function (){var statearr_15333 = state_15328;
(statearr_15333[(8)] = inst_15305);

return statearr_15333;
})();
var statearr_15334_15355 = state_15328__$1;
(statearr_15334_15355[(2)] = null);

(statearr_15334_15355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (4))){
var state_15328__$1 = state_15328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15328__$1,(7),ch);
} else {
if((state_val_15329 === (6))){
var inst_15323 = (state_15328[(2)]);
var state_15328__$1 = state_15328;
var statearr_15335_15356 = state_15328__$1;
(statearr_15335_15356[(2)] = inst_15323);

(statearr_15335_15356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (3))){
var inst_15325 = (state_15328[(2)]);
var inst_15326 = cljs.core.async.close_BANG_.call(null,out);
var state_15328__$1 = (function (){var statearr_15336 = state_15328;
(statearr_15336[(9)] = inst_15325);

return statearr_15336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15328__$1,inst_15326);
} else {
if((state_val_15329 === (2))){
var inst_15305 = (state_15328[(8)]);
var inst_15307 = (inst_15305 < n);
var state_15328__$1 = state_15328;
if(cljs.core.truth_(inst_15307)){
var statearr_15337_15357 = state_15328__$1;
(statearr_15337_15357[(1)] = (4));

} else {
var statearr_15338_15358 = state_15328__$1;
(statearr_15338_15358[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (11))){
var inst_15305 = (state_15328[(8)]);
var inst_15315 = (state_15328[(2)]);
var inst_15316 = (inst_15305 + (1));
var inst_15305__$1 = inst_15316;
var state_15328__$1 = (function (){var statearr_15339 = state_15328;
(statearr_15339[(10)] = inst_15315);

(statearr_15339[(8)] = inst_15305__$1);

return statearr_15339;
})();
var statearr_15340_15359 = state_15328__$1;
(statearr_15340_15359[(2)] = null);

(statearr_15340_15359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (9))){
var state_15328__$1 = state_15328;
var statearr_15341_15360 = state_15328__$1;
(statearr_15341_15360[(2)] = null);

(statearr_15341_15360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (5))){
var state_15328__$1 = state_15328;
var statearr_15342_15361 = state_15328__$1;
(statearr_15342_15361[(2)] = null);

(statearr_15342_15361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (10))){
var inst_15320 = (state_15328[(2)]);
var state_15328__$1 = state_15328;
var statearr_15343_15362 = state_15328__$1;
(statearr_15343_15362[(2)] = inst_15320);

(statearr_15343_15362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15329 === (8))){
var inst_15310 = (state_15328[(7)]);
var state_15328__$1 = state_15328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15328__$1,(11),out,inst_15310);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto___15352,out))
;
return ((function (switch__7084__auto__,c__7146__auto___15352,out){
return (function() {
var cljs$core$async$state_machine__7085__auto__ = null;
var cljs$core$async$state_machine__7085__auto____0 = (function (){
var statearr_15347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15347[(0)] = cljs$core$async$state_machine__7085__auto__);

(statearr_15347[(1)] = (1));

return statearr_15347;
});
var cljs$core$async$state_machine__7085__auto____1 = (function (state_15328){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_15328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e15348){if((e15348 instanceof Object)){
var ex__7088__auto__ = e15348;
var statearr_15349_15363 = state_15328;
(statearr_15349_15363[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15364 = state_15328;
state_15328 = G__15364;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$state_machine__7085__auto__ = function(state_15328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7085__auto____1.call(this,state_15328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7085__auto____0;
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7085__auto____1;
return cljs$core$async$state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___15352,out))
})();
var state__7148__auto__ = (function (){var statearr_15350 = f__7147__auto__.call(null);
(statearr_15350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___15352);

return statearr_15350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___15352,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t15372 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15372 = (function (map_LT_,f,ch,meta15373){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15373 = meta15373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15374,meta15373__$1){
var self__ = this;
var _15374__$1 = this;
return (new cljs.core.async.t15372(self__.map_LT_,self__.f,self__.ch,meta15373__$1));
});

cljs.core.async.t15372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15374){
var self__ = this;
var _15374__$1 = this;
return self__.meta15373;
});

cljs.core.async.t15372.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15372.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15372.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t15375 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15375 = (function (map_LT_,f,ch,meta15373,_,fn1,meta15376){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15373 = meta15373;
this._ = _;
this.fn1 = fn1;
this.meta15376 = meta15376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15377,meta15376__$1){
var self__ = this;
var _15377__$1 = this;
return (new cljs.core.async.t15375(self__.map_LT_,self__.f,self__.ch,self__.meta15373,self__._,self__.fn1,meta15376__$1));
});})(___$1))
;

cljs.core.async.t15375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15377){
var self__ = this;
var _15377__$1 = this;
return self__.meta15376;
});})(___$1))
;

cljs.core.async.t15375.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15365_SHARP_){
return f1.call(null,(((p1__15365_SHARP_ == null))?null:self__.f.call(null,p1__15365_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t15375.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15373","meta15373",-794374944,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15376","meta15376",1424202276,null)], null);
});})(___$1))
;

cljs.core.async.t15375.cljs$lang$type = true;

cljs.core.async.t15375.cljs$lang$ctorStr = "cljs.core.async/t15375";

cljs.core.async.t15375.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5117__auto__,writer__5118__auto__,opt__5119__auto__){
return cljs.core._write.call(null,writer__5118__auto__,"cljs.core.async/t15375");
});})(___$1))
;

cljs.core.async.__GT_t15375 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t15375(map_LT___$1,f__$1,ch__$1,meta15373__$1,___$2,fn1__$1,meta15376){
return (new cljs.core.async.t15375(map_LT___$1,f__$1,ch__$1,meta15373__$1,___$2,fn1__$1,meta15376));
});})(___$1))
;

}

return (new cljs.core.async.t15375(self__.map_LT_,self__.f,self__.ch,self__.meta15373,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4526__auto__ = ret;
if(cljs.core.truth_(and__4526__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4526__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t15372.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t15372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15373","meta15373",-794374944,null)], null);
});

cljs.core.async.t15372.cljs$lang$type = true;

cljs.core.async.t15372.cljs$lang$ctorStr = "cljs.core.async/t15372";

cljs.core.async.t15372.cljs$lang$ctorPrWriter = (function (this__5117__auto__,writer__5118__auto__,opt__5119__auto__){
return cljs.core._write.call(null,writer__5118__auto__,"cljs.core.async/t15372");
});

cljs.core.async.__GT_t15372 = (function cljs$core$async$map_LT__$___GT_t15372(map_LT___$1,f__$1,ch__$1,meta15373){
return (new cljs.core.async.t15372(map_LT___$1,f__$1,ch__$1,meta15373));
});

}

return (new cljs.core.async.t15372(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t15381 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15381 = (function (map_GT_,f,ch,meta15382){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15382 = meta15382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15383,meta15382__$1){
var self__ = this;
var _15383__$1 = this;
return (new cljs.core.async.t15381(self__.map_GT_,self__.f,self__.ch,meta15382__$1));
});

cljs.core.async.t15381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15383){
var self__ = this;
var _15383__$1 = this;
return self__.meta15382;
});

cljs.core.async.t15381.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15381.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15381.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15381.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15381.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15381.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t15381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15382","meta15382",1118494134,null)], null);
});

cljs.core.async.t15381.cljs$lang$type = true;

cljs.core.async.t15381.cljs$lang$ctorStr = "cljs.core.async/t15381";

cljs.core.async.t15381.cljs$lang$ctorPrWriter = (function (this__5117__auto__,writer__5118__auto__,opt__5119__auto__){
return cljs.core._write.call(null,writer__5118__auto__,"cljs.core.async/t15381");
});

cljs.core.async.__GT_t15381 = (function cljs$core$async$map_GT__$___GT_t15381(map_GT___$1,f__$1,ch__$1,meta15382){
return (new cljs.core.async.t15381(map_GT___$1,f__$1,ch__$1,meta15382));
});

}

return (new cljs.core.async.t15381(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t15387 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15387 = (function (filter_GT_,p,ch,meta15388){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15388 = meta15388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15389,meta15388__$1){
var self__ = this;
var _15389__$1 = this;
return (new cljs.core.async.t15387(self__.filter_GT_,self__.p,self__.ch,meta15388__$1));
});

cljs.core.async.t15387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15389){
var self__ = this;
var _15389__$1 = this;
return self__.meta15388;
});

cljs.core.async.t15387.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15387.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15387.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15387.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15387.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15387.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15387.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t15387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15388","meta15388",-723852335,null)], null);
});

cljs.core.async.t15387.cljs$lang$type = true;

cljs.core.async.t15387.cljs$lang$ctorStr = "cljs.core.async/t15387";

cljs.core.async.t15387.cljs$lang$ctorPrWriter = (function (this__5117__auto__,writer__5118__auto__,opt__5119__auto__){
return cljs.core._write.call(null,writer__5118__auto__,"cljs.core.async/t15387");
});

cljs.core.async.__GT_t15387 = (function cljs$core$async$filter_GT__$___GT_t15387(filter_GT___$1,p__$1,ch__$1,meta15388){
return (new cljs.core.async.t15387(filter_GT___$1,p__$1,ch__$1,meta15388));
});

}

return (new cljs.core.async.t15387(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__15391 = arguments.length;
switch (G__15391) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7146__auto___15434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___15434,out){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___15434,out){
return (function (state_15412){
var state_val_15413 = (state_15412[(1)]);
if((state_val_15413 === (7))){
var inst_15408 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
var statearr_15414_15435 = state_15412__$1;
(statearr_15414_15435[(2)] = inst_15408);

(statearr_15414_15435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (1))){
var state_15412__$1 = state_15412;
var statearr_15415_15436 = state_15412__$1;
(statearr_15415_15436[(2)] = null);

(statearr_15415_15436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (4))){
var inst_15394 = (state_15412[(7)]);
var inst_15394__$1 = (state_15412[(2)]);
var inst_15395 = (inst_15394__$1 == null);
var state_15412__$1 = (function (){var statearr_15416 = state_15412;
(statearr_15416[(7)] = inst_15394__$1);

return statearr_15416;
})();
if(cljs.core.truth_(inst_15395)){
var statearr_15417_15437 = state_15412__$1;
(statearr_15417_15437[(1)] = (5));

} else {
var statearr_15418_15438 = state_15412__$1;
(statearr_15418_15438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (6))){
var inst_15394 = (state_15412[(7)]);
var inst_15399 = p.call(null,inst_15394);
var state_15412__$1 = state_15412;
if(cljs.core.truth_(inst_15399)){
var statearr_15419_15439 = state_15412__$1;
(statearr_15419_15439[(1)] = (8));

} else {
var statearr_15420_15440 = state_15412__$1;
(statearr_15420_15440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (3))){
var inst_15410 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15412__$1,inst_15410);
} else {
if((state_val_15413 === (2))){
var state_15412__$1 = state_15412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15412__$1,(4),ch);
} else {
if((state_val_15413 === (11))){
var inst_15402 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
var statearr_15421_15441 = state_15412__$1;
(statearr_15421_15441[(2)] = inst_15402);

(statearr_15421_15441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (9))){
var state_15412__$1 = state_15412;
var statearr_15422_15442 = state_15412__$1;
(statearr_15422_15442[(2)] = null);

(statearr_15422_15442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (5))){
var inst_15397 = cljs.core.async.close_BANG_.call(null,out);
var state_15412__$1 = state_15412;
var statearr_15423_15443 = state_15412__$1;
(statearr_15423_15443[(2)] = inst_15397);

(statearr_15423_15443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (10))){
var inst_15405 = (state_15412[(2)]);
var state_15412__$1 = (function (){var statearr_15424 = state_15412;
(statearr_15424[(8)] = inst_15405);

return statearr_15424;
})();
var statearr_15425_15444 = state_15412__$1;
(statearr_15425_15444[(2)] = null);

(statearr_15425_15444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (8))){
var inst_15394 = (state_15412[(7)]);
var state_15412__$1 = state_15412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15412__$1,(11),out,inst_15394);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto___15434,out))
;
return ((function (switch__7084__auto__,c__7146__auto___15434,out){
return (function() {
var cljs$core$async$state_machine__7085__auto__ = null;
var cljs$core$async$state_machine__7085__auto____0 = (function (){
var statearr_15429 = [null,null,null,null,null,null,null,null,null];
(statearr_15429[(0)] = cljs$core$async$state_machine__7085__auto__);

(statearr_15429[(1)] = (1));

return statearr_15429;
});
var cljs$core$async$state_machine__7085__auto____1 = (function (state_15412){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_15412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e15430){if((e15430 instanceof Object)){
var ex__7088__auto__ = e15430;
var statearr_15431_15445 = state_15412;
(statearr_15431_15445[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15446 = state_15412;
state_15412 = G__15446;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$state_machine__7085__auto__ = function(state_15412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7085__auto____1.call(this,state_15412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7085__auto____0;
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7085__auto____1;
return cljs$core$async$state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___15434,out))
})();
var state__7148__auto__ = (function (){var statearr_15432 = f__7147__auto__.call(null);
(statearr_15432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___15434);

return statearr_15432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___15434,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__15448 = arguments.length;
switch (G__15448) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto__){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto__){
return (function (state_15615){
var state_val_15616 = (state_15615[(1)]);
if((state_val_15616 === (7))){
var inst_15611 = (state_15615[(2)]);
var state_15615__$1 = state_15615;
var statearr_15617_15658 = state_15615__$1;
(statearr_15617_15658[(2)] = inst_15611);

(statearr_15617_15658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (20))){
var inst_15581 = (state_15615[(7)]);
var inst_15592 = (state_15615[(2)]);
var inst_15593 = cljs.core.next.call(null,inst_15581);
var inst_15567 = inst_15593;
var inst_15568 = null;
var inst_15569 = (0);
var inst_15570 = (0);
var state_15615__$1 = (function (){var statearr_15618 = state_15615;
(statearr_15618[(8)] = inst_15569);

(statearr_15618[(9)] = inst_15568);

(statearr_15618[(10)] = inst_15567);

(statearr_15618[(11)] = inst_15592);

(statearr_15618[(12)] = inst_15570);

return statearr_15618;
})();
var statearr_15619_15659 = state_15615__$1;
(statearr_15619_15659[(2)] = null);

(statearr_15619_15659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (1))){
var state_15615__$1 = state_15615;
var statearr_15620_15660 = state_15615__$1;
(statearr_15620_15660[(2)] = null);

(statearr_15620_15660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (4))){
var inst_15556 = (state_15615[(13)]);
var inst_15556__$1 = (state_15615[(2)]);
var inst_15557 = (inst_15556__$1 == null);
var state_15615__$1 = (function (){var statearr_15621 = state_15615;
(statearr_15621[(13)] = inst_15556__$1);

return statearr_15621;
})();
if(cljs.core.truth_(inst_15557)){
var statearr_15622_15661 = state_15615__$1;
(statearr_15622_15661[(1)] = (5));

} else {
var statearr_15623_15662 = state_15615__$1;
(statearr_15623_15662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (15))){
var state_15615__$1 = state_15615;
var statearr_15627_15663 = state_15615__$1;
(statearr_15627_15663[(2)] = null);

(statearr_15627_15663[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (21))){
var state_15615__$1 = state_15615;
var statearr_15628_15664 = state_15615__$1;
(statearr_15628_15664[(2)] = null);

(statearr_15628_15664[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (13))){
var inst_15569 = (state_15615[(8)]);
var inst_15568 = (state_15615[(9)]);
var inst_15567 = (state_15615[(10)]);
var inst_15570 = (state_15615[(12)]);
var inst_15577 = (state_15615[(2)]);
var inst_15578 = (inst_15570 + (1));
var tmp15624 = inst_15569;
var tmp15625 = inst_15568;
var tmp15626 = inst_15567;
var inst_15567__$1 = tmp15626;
var inst_15568__$1 = tmp15625;
var inst_15569__$1 = tmp15624;
var inst_15570__$1 = inst_15578;
var state_15615__$1 = (function (){var statearr_15629 = state_15615;
(statearr_15629[(8)] = inst_15569__$1);

(statearr_15629[(9)] = inst_15568__$1);

(statearr_15629[(14)] = inst_15577);

(statearr_15629[(10)] = inst_15567__$1);

(statearr_15629[(12)] = inst_15570__$1);

return statearr_15629;
})();
var statearr_15630_15665 = state_15615__$1;
(statearr_15630_15665[(2)] = null);

(statearr_15630_15665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (22))){
var state_15615__$1 = state_15615;
var statearr_15631_15666 = state_15615__$1;
(statearr_15631_15666[(2)] = null);

(statearr_15631_15666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (6))){
var inst_15556 = (state_15615[(13)]);
var inst_15565 = f.call(null,inst_15556);
var inst_15566 = cljs.core.seq.call(null,inst_15565);
var inst_15567 = inst_15566;
var inst_15568 = null;
var inst_15569 = (0);
var inst_15570 = (0);
var state_15615__$1 = (function (){var statearr_15632 = state_15615;
(statearr_15632[(8)] = inst_15569);

(statearr_15632[(9)] = inst_15568);

(statearr_15632[(10)] = inst_15567);

(statearr_15632[(12)] = inst_15570);

return statearr_15632;
})();
var statearr_15633_15667 = state_15615__$1;
(statearr_15633_15667[(2)] = null);

(statearr_15633_15667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (17))){
var inst_15581 = (state_15615[(7)]);
var inst_15585 = cljs.core.chunk_first.call(null,inst_15581);
var inst_15586 = cljs.core.chunk_rest.call(null,inst_15581);
var inst_15587 = cljs.core.count.call(null,inst_15585);
var inst_15567 = inst_15586;
var inst_15568 = inst_15585;
var inst_15569 = inst_15587;
var inst_15570 = (0);
var state_15615__$1 = (function (){var statearr_15634 = state_15615;
(statearr_15634[(8)] = inst_15569);

(statearr_15634[(9)] = inst_15568);

(statearr_15634[(10)] = inst_15567);

(statearr_15634[(12)] = inst_15570);

return statearr_15634;
})();
var statearr_15635_15668 = state_15615__$1;
(statearr_15635_15668[(2)] = null);

(statearr_15635_15668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (3))){
var inst_15613 = (state_15615[(2)]);
var state_15615__$1 = state_15615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15615__$1,inst_15613);
} else {
if((state_val_15616 === (12))){
var inst_15601 = (state_15615[(2)]);
var state_15615__$1 = state_15615;
var statearr_15636_15669 = state_15615__$1;
(statearr_15636_15669[(2)] = inst_15601);

(statearr_15636_15669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (2))){
var state_15615__$1 = state_15615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15615__$1,(4),in$);
} else {
if((state_val_15616 === (23))){
var inst_15609 = (state_15615[(2)]);
var state_15615__$1 = state_15615;
var statearr_15637_15670 = state_15615__$1;
(statearr_15637_15670[(2)] = inst_15609);

(statearr_15637_15670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (19))){
var inst_15596 = (state_15615[(2)]);
var state_15615__$1 = state_15615;
var statearr_15638_15671 = state_15615__$1;
(statearr_15638_15671[(2)] = inst_15596);

(statearr_15638_15671[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (11))){
var inst_15567 = (state_15615[(10)]);
var inst_15581 = (state_15615[(7)]);
var inst_15581__$1 = cljs.core.seq.call(null,inst_15567);
var state_15615__$1 = (function (){var statearr_15639 = state_15615;
(statearr_15639[(7)] = inst_15581__$1);

return statearr_15639;
})();
if(inst_15581__$1){
var statearr_15640_15672 = state_15615__$1;
(statearr_15640_15672[(1)] = (14));

} else {
var statearr_15641_15673 = state_15615__$1;
(statearr_15641_15673[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (9))){
var inst_15603 = (state_15615[(2)]);
var inst_15604 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15615__$1 = (function (){var statearr_15642 = state_15615;
(statearr_15642[(15)] = inst_15603);

return statearr_15642;
})();
if(cljs.core.truth_(inst_15604)){
var statearr_15643_15674 = state_15615__$1;
(statearr_15643_15674[(1)] = (21));

} else {
var statearr_15644_15675 = state_15615__$1;
(statearr_15644_15675[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (5))){
var inst_15559 = cljs.core.async.close_BANG_.call(null,out);
var state_15615__$1 = state_15615;
var statearr_15645_15676 = state_15615__$1;
(statearr_15645_15676[(2)] = inst_15559);

(statearr_15645_15676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (14))){
var inst_15581 = (state_15615[(7)]);
var inst_15583 = cljs.core.chunked_seq_QMARK_.call(null,inst_15581);
var state_15615__$1 = state_15615;
if(inst_15583){
var statearr_15646_15677 = state_15615__$1;
(statearr_15646_15677[(1)] = (17));

} else {
var statearr_15647_15678 = state_15615__$1;
(statearr_15647_15678[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (16))){
var inst_15599 = (state_15615[(2)]);
var state_15615__$1 = state_15615;
var statearr_15648_15679 = state_15615__$1;
(statearr_15648_15679[(2)] = inst_15599);

(statearr_15648_15679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15616 === (10))){
var inst_15568 = (state_15615[(9)]);
var inst_15570 = (state_15615[(12)]);
var inst_15575 = cljs.core._nth.call(null,inst_15568,inst_15570);
var state_15615__$1 = state_15615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15615__$1,(13),out,inst_15575);
} else {
if((state_val_15616 === (18))){
var inst_15581 = (state_15615[(7)]);
var inst_15590 = cljs.core.first.call(null,inst_15581);
var state_15615__$1 = state_15615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15615__$1,(20),out,inst_15590);
} else {
if((state_val_15616 === (8))){
var inst_15569 = (state_15615[(8)]);
var inst_15570 = (state_15615[(12)]);
var inst_15572 = (inst_15570 < inst_15569);
var inst_15573 = inst_15572;
var state_15615__$1 = state_15615;
if(cljs.core.truth_(inst_15573)){
var statearr_15649_15680 = state_15615__$1;
(statearr_15649_15680[(1)] = (10));

} else {
var statearr_15650_15681 = state_15615__$1;
(statearr_15650_15681[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto__))
;
return ((function (switch__7084__auto__,c__7146__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7085__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7085__auto____0 = (function (){
var statearr_15654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15654[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7085__auto__);

(statearr_15654[(1)] = (1));

return statearr_15654;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7085__auto____1 = (function (state_15615){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_15615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e15655){if((e15655 instanceof Object)){
var ex__7088__auto__ = e15655;
var statearr_15656_15682 = state_15615;
(statearr_15656_15682[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15683 = state_15615;
state_15615 = G__15683;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7085__auto__ = function(state_15615){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7085__auto____1.call(this,state_15615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7085__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7085__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto__))
})();
var state__7148__auto__ = (function (){var statearr_15657 = f__7147__auto__.call(null);
(statearr_15657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto__);

return statearr_15657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto__))
);

return c__7146__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__15685 = arguments.length;
switch (G__15685) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__15688 = arguments.length;
switch (G__15688) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__15691 = arguments.length;
switch (G__15691) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7146__auto___15741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___15741,out){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___15741,out){
return (function (state_15715){
var state_val_15716 = (state_15715[(1)]);
if((state_val_15716 === (7))){
var inst_15710 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
var statearr_15717_15742 = state_15715__$1;
(statearr_15717_15742[(2)] = inst_15710);

(statearr_15717_15742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (1))){
var inst_15692 = null;
var state_15715__$1 = (function (){var statearr_15718 = state_15715;
(statearr_15718[(7)] = inst_15692);

return statearr_15718;
})();
var statearr_15719_15743 = state_15715__$1;
(statearr_15719_15743[(2)] = null);

(statearr_15719_15743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (4))){
var inst_15695 = (state_15715[(8)]);
var inst_15695__$1 = (state_15715[(2)]);
var inst_15696 = (inst_15695__$1 == null);
var inst_15697 = cljs.core.not.call(null,inst_15696);
var state_15715__$1 = (function (){var statearr_15720 = state_15715;
(statearr_15720[(8)] = inst_15695__$1);

return statearr_15720;
})();
if(inst_15697){
var statearr_15721_15744 = state_15715__$1;
(statearr_15721_15744[(1)] = (5));

} else {
var statearr_15722_15745 = state_15715__$1;
(statearr_15722_15745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (6))){
var state_15715__$1 = state_15715;
var statearr_15723_15746 = state_15715__$1;
(statearr_15723_15746[(2)] = null);

(statearr_15723_15746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (3))){
var inst_15712 = (state_15715[(2)]);
var inst_15713 = cljs.core.async.close_BANG_.call(null,out);
var state_15715__$1 = (function (){var statearr_15724 = state_15715;
(statearr_15724[(9)] = inst_15712);

return statearr_15724;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15715__$1,inst_15713);
} else {
if((state_val_15716 === (2))){
var state_15715__$1 = state_15715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15715__$1,(4),ch);
} else {
if((state_val_15716 === (11))){
var inst_15695 = (state_15715[(8)]);
var inst_15704 = (state_15715[(2)]);
var inst_15692 = inst_15695;
var state_15715__$1 = (function (){var statearr_15725 = state_15715;
(statearr_15725[(10)] = inst_15704);

(statearr_15725[(7)] = inst_15692);

return statearr_15725;
})();
var statearr_15726_15747 = state_15715__$1;
(statearr_15726_15747[(2)] = null);

(statearr_15726_15747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (9))){
var inst_15695 = (state_15715[(8)]);
var state_15715__$1 = state_15715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15715__$1,(11),out,inst_15695);
} else {
if((state_val_15716 === (5))){
var inst_15692 = (state_15715[(7)]);
var inst_15695 = (state_15715[(8)]);
var inst_15699 = cljs.core._EQ_.call(null,inst_15695,inst_15692);
var state_15715__$1 = state_15715;
if(inst_15699){
var statearr_15728_15748 = state_15715__$1;
(statearr_15728_15748[(1)] = (8));

} else {
var statearr_15729_15749 = state_15715__$1;
(statearr_15729_15749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (10))){
var inst_15707 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
var statearr_15730_15750 = state_15715__$1;
(statearr_15730_15750[(2)] = inst_15707);

(statearr_15730_15750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (8))){
var inst_15692 = (state_15715[(7)]);
var tmp15727 = inst_15692;
var inst_15692__$1 = tmp15727;
var state_15715__$1 = (function (){var statearr_15731 = state_15715;
(statearr_15731[(7)] = inst_15692__$1);

return statearr_15731;
})();
var statearr_15732_15751 = state_15715__$1;
(statearr_15732_15751[(2)] = null);

(statearr_15732_15751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto___15741,out))
;
return ((function (switch__7084__auto__,c__7146__auto___15741,out){
return (function() {
var cljs$core$async$state_machine__7085__auto__ = null;
var cljs$core$async$state_machine__7085__auto____0 = (function (){
var statearr_15736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15736[(0)] = cljs$core$async$state_machine__7085__auto__);

(statearr_15736[(1)] = (1));

return statearr_15736;
});
var cljs$core$async$state_machine__7085__auto____1 = (function (state_15715){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_15715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e15737){if((e15737 instanceof Object)){
var ex__7088__auto__ = e15737;
var statearr_15738_15752 = state_15715;
(statearr_15738_15752[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15753 = state_15715;
state_15715 = G__15753;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$state_machine__7085__auto__ = function(state_15715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7085__auto____1.call(this,state_15715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7085__auto____0;
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7085__auto____1;
return cljs$core$async$state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___15741,out))
})();
var state__7148__auto__ = (function (){var statearr_15739 = f__7147__auto__.call(null);
(statearr_15739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___15741);

return statearr_15739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___15741,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__15755 = arguments.length;
switch (G__15755) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7146__auto___15824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___15824,out){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___15824,out){
return (function (state_15793){
var state_val_15794 = (state_15793[(1)]);
if((state_val_15794 === (7))){
var inst_15789 = (state_15793[(2)]);
var state_15793__$1 = state_15793;
var statearr_15795_15825 = state_15793__$1;
(statearr_15795_15825[(2)] = inst_15789);

(statearr_15795_15825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (1))){
var inst_15756 = (new Array(n));
var inst_15757 = inst_15756;
var inst_15758 = (0);
var state_15793__$1 = (function (){var statearr_15796 = state_15793;
(statearr_15796[(7)] = inst_15757);

(statearr_15796[(8)] = inst_15758);

return statearr_15796;
})();
var statearr_15797_15826 = state_15793__$1;
(statearr_15797_15826[(2)] = null);

(statearr_15797_15826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (4))){
var inst_15761 = (state_15793[(9)]);
var inst_15761__$1 = (state_15793[(2)]);
var inst_15762 = (inst_15761__$1 == null);
var inst_15763 = cljs.core.not.call(null,inst_15762);
var state_15793__$1 = (function (){var statearr_15798 = state_15793;
(statearr_15798[(9)] = inst_15761__$1);

return statearr_15798;
})();
if(inst_15763){
var statearr_15799_15827 = state_15793__$1;
(statearr_15799_15827[(1)] = (5));

} else {
var statearr_15800_15828 = state_15793__$1;
(statearr_15800_15828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (15))){
var inst_15783 = (state_15793[(2)]);
var state_15793__$1 = state_15793;
var statearr_15801_15829 = state_15793__$1;
(statearr_15801_15829[(2)] = inst_15783);

(statearr_15801_15829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (13))){
var state_15793__$1 = state_15793;
var statearr_15802_15830 = state_15793__$1;
(statearr_15802_15830[(2)] = null);

(statearr_15802_15830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (6))){
var inst_15758 = (state_15793[(8)]);
var inst_15779 = (inst_15758 > (0));
var state_15793__$1 = state_15793;
if(cljs.core.truth_(inst_15779)){
var statearr_15803_15831 = state_15793__$1;
(statearr_15803_15831[(1)] = (12));

} else {
var statearr_15804_15832 = state_15793__$1;
(statearr_15804_15832[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (3))){
var inst_15791 = (state_15793[(2)]);
var state_15793__$1 = state_15793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15793__$1,inst_15791);
} else {
if((state_val_15794 === (12))){
var inst_15757 = (state_15793[(7)]);
var inst_15781 = cljs.core.vec.call(null,inst_15757);
var state_15793__$1 = state_15793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15793__$1,(15),out,inst_15781);
} else {
if((state_val_15794 === (2))){
var state_15793__$1 = state_15793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15793__$1,(4),ch);
} else {
if((state_val_15794 === (11))){
var inst_15773 = (state_15793[(2)]);
var inst_15774 = (new Array(n));
var inst_15757 = inst_15774;
var inst_15758 = (0);
var state_15793__$1 = (function (){var statearr_15805 = state_15793;
(statearr_15805[(10)] = inst_15773);

(statearr_15805[(7)] = inst_15757);

(statearr_15805[(8)] = inst_15758);

return statearr_15805;
})();
var statearr_15806_15833 = state_15793__$1;
(statearr_15806_15833[(2)] = null);

(statearr_15806_15833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (9))){
var inst_15757 = (state_15793[(7)]);
var inst_15771 = cljs.core.vec.call(null,inst_15757);
var state_15793__$1 = state_15793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15793__$1,(11),out,inst_15771);
} else {
if((state_val_15794 === (5))){
var inst_15766 = (state_15793[(11)]);
var inst_15761 = (state_15793[(9)]);
var inst_15757 = (state_15793[(7)]);
var inst_15758 = (state_15793[(8)]);
var inst_15765 = (inst_15757[inst_15758] = inst_15761);
var inst_15766__$1 = (inst_15758 + (1));
var inst_15767 = (inst_15766__$1 < n);
var state_15793__$1 = (function (){var statearr_15807 = state_15793;
(statearr_15807[(12)] = inst_15765);

(statearr_15807[(11)] = inst_15766__$1);

return statearr_15807;
})();
if(cljs.core.truth_(inst_15767)){
var statearr_15808_15834 = state_15793__$1;
(statearr_15808_15834[(1)] = (8));

} else {
var statearr_15809_15835 = state_15793__$1;
(statearr_15809_15835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (14))){
var inst_15786 = (state_15793[(2)]);
var inst_15787 = cljs.core.async.close_BANG_.call(null,out);
var state_15793__$1 = (function (){var statearr_15811 = state_15793;
(statearr_15811[(13)] = inst_15786);

return statearr_15811;
})();
var statearr_15812_15836 = state_15793__$1;
(statearr_15812_15836[(2)] = inst_15787);

(statearr_15812_15836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (10))){
var inst_15777 = (state_15793[(2)]);
var state_15793__$1 = state_15793;
var statearr_15813_15837 = state_15793__$1;
(statearr_15813_15837[(2)] = inst_15777);

(statearr_15813_15837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15794 === (8))){
var inst_15766 = (state_15793[(11)]);
var inst_15757 = (state_15793[(7)]);
var tmp15810 = inst_15757;
var inst_15757__$1 = tmp15810;
var inst_15758 = inst_15766;
var state_15793__$1 = (function (){var statearr_15814 = state_15793;
(statearr_15814[(7)] = inst_15757__$1);

(statearr_15814[(8)] = inst_15758);

return statearr_15814;
})();
var statearr_15815_15838 = state_15793__$1;
(statearr_15815_15838[(2)] = null);

(statearr_15815_15838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto___15824,out))
;
return ((function (switch__7084__auto__,c__7146__auto___15824,out){
return (function() {
var cljs$core$async$state_machine__7085__auto__ = null;
var cljs$core$async$state_machine__7085__auto____0 = (function (){
var statearr_15819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15819[(0)] = cljs$core$async$state_machine__7085__auto__);

(statearr_15819[(1)] = (1));

return statearr_15819;
});
var cljs$core$async$state_machine__7085__auto____1 = (function (state_15793){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_15793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e15820){if((e15820 instanceof Object)){
var ex__7088__auto__ = e15820;
var statearr_15821_15839 = state_15793;
(statearr_15821_15839[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15840 = state_15793;
state_15793 = G__15840;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$state_machine__7085__auto__ = function(state_15793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7085__auto____1.call(this,state_15793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7085__auto____0;
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7085__auto____1;
return cljs$core$async$state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___15824,out))
})();
var state__7148__auto__ = (function (){var statearr_15822 = f__7147__auto__.call(null);
(statearr_15822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___15824);

return statearr_15822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___15824,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__15842 = arguments.length;
switch (G__15842) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7146__auto___15915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___15915,out){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___15915,out){
return (function (state_15884){
var state_val_15885 = (state_15884[(1)]);
if((state_val_15885 === (7))){
var inst_15880 = (state_15884[(2)]);
var state_15884__$1 = state_15884;
var statearr_15886_15916 = state_15884__$1;
(statearr_15886_15916[(2)] = inst_15880);

(statearr_15886_15916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (1))){
var inst_15843 = [];
var inst_15844 = inst_15843;
var inst_15845 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15884__$1 = (function (){var statearr_15887 = state_15884;
(statearr_15887[(7)] = inst_15845);

(statearr_15887[(8)] = inst_15844);

return statearr_15887;
})();
var statearr_15888_15917 = state_15884__$1;
(statearr_15888_15917[(2)] = null);

(statearr_15888_15917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (4))){
var inst_15848 = (state_15884[(9)]);
var inst_15848__$1 = (state_15884[(2)]);
var inst_15849 = (inst_15848__$1 == null);
var inst_15850 = cljs.core.not.call(null,inst_15849);
var state_15884__$1 = (function (){var statearr_15889 = state_15884;
(statearr_15889[(9)] = inst_15848__$1);

return statearr_15889;
})();
if(inst_15850){
var statearr_15890_15918 = state_15884__$1;
(statearr_15890_15918[(1)] = (5));

} else {
var statearr_15891_15919 = state_15884__$1;
(statearr_15891_15919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (15))){
var inst_15874 = (state_15884[(2)]);
var state_15884__$1 = state_15884;
var statearr_15892_15920 = state_15884__$1;
(statearr_15892_15920[(2)] = inst_15874);

(statearr_15892_15920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (13))){
var state_15884__$1 = state_15884;
var statearr_15893_15921 = state_15884__$1;
(statearr_15893_15921[(2)] = null);

(statearr_15893_15921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (6))){
var inst_15844 = (state_15884[(8)]);
var inst_15869 = inst_15844.length;
var inst_15870 = (inst_15869 > (0));
var state_15884__$1 = state_15884;
if(cljs.core.truth_(inst_15870)){
var statearr_15894_15922 = state_15884__$1;
(statearr_15894_15922[(1)] = (12));

} else {
var statearr_15895_15923 = state_15884__$1;
(statearr_15895_15923[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (3))){
var inst_15882 = (state_15884[(2)]);
var state_15884__$1 = state_15884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15884__$1,inst_15882);
} else {
if((state_val_15885 === (12))){
var inst_15844 = (state_15884[(8)]);
var inst_15872 = cljs.core.vec.call(null,inst_15844);
var state_15884__$1 = state_15884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15884__$1,(15),out,inst_15872);
} else {
if((state_val_15885 === (2))){
var state_15884__$1 = state_15884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15884__$1,(4),ch);
} else {
if((state_val_15885 === (11))){
var inst_15852 = (state_15884[(10)]);
var inst_15848 = (state_15884[(9)]);
var inst_15862 = (state_15884[(2)]);
var inst_15863 = [];
var inst_15864 = inst_15863.push(inst_15848);
var inst_15844 = inst_15863;
var inst_15845 = inst_15852;
var state_15884__$1 = (function (){var statearr_15896 = state_15884;
(statearr_15896[(11)] = inst_15862);

(statearr_15896[(7)] = inst_15845);

(statearr_15896[(12)] = inst_15864);

(statearr_15896[(8)] = inst_15844);

return statearr_15896;
})();
var statearr_15897_15924 = state_15884__$1;
(statearr_15897_15924[(2)] = null);

(statearr_15897_15924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (9))){
var inst_15844 = (state_15884[(8)]);
var inst_15860 = cljs.core.vec.call(null,inst_15844);
var state_15884__$1 = state_15884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15884__$1,(11),out,inst_15860);
} else {
if((state_val_15885 === (5))){
var inst_15852 = (state_15884[(10)]);
var inst_15848 = (state_15884[(9)]);
var inst_15845 = (state_15884[(7)]);
var inst_15852__$1 = f.call(null,inst_15848);
var inst_15853 = cljs.core._EQ_.call(null,inst_15852__$1,inst_15845);
var inst_15854 = cljs.core.keyword_identical_QMARK_.call(null,inst_15845,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15855 = (inst_15853) || (inst_15854);
var state_15884__$1 = (function (){var statearr_15898 = state_15884;
(statearr_15898[(10)] = inst_15852__$1);

return statearr_15898;
})();
if(cljs.core.truth_(inst_15855)){
var statearr_15899_15925 = state_15884__$1;
(statearr_15899_15925[(1)] = (8));

} else {
var statearr_15900_15926 = state_15884__$1;
(statearr_15900_15926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (14))){
var inst_15877 = (state_15884[(2)]);
var inst_15878 = cljs.core.async.close_BANG_.call(null,out);
var state_15884__$1 = (function (){var statearr_15902 = state_15884;
(statearr_15902[(13)] = inst_15877);

return statearr_15902;
})();
var statearr_15903_15927 = state_15884__$1;
(statearr_15903_15927[(2)] = inst_15878);

(statearr_15903_15927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (10))){
var inst_15867 = (state_15884[(2)]);
var state_15884__$1 = state_15884;
var statearr_15904_15928 = state_15884__$1;
(statearr_15904_15928[(2)] = inst_15867);

(statearr_15904_15928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15885 === (8))){
var inst_15852 = (state_15884[(10)]);
var inst_15848 = (state_15884[(9)]);
var inst_15844 = (state_15884[(8)]);
var inst_15857 = inst_15844.push(inst_15848);
var tmp15901 = inst_15844;
var inst_15844__$1 = tmp15901;
var inst_15845 = inst_15852;
var state_15884__$1 = (function (){var statearr_15905 = state_15884;
(statearr_15905[(7)] = inst_15845);

(statearr_15905[(8)] = inst_15844__$1);

(statearr_15905[(14)] = inst_15857);

return statearr_15905;
})();
var statearr_15906_15929 = state_15884__$1;
(statearr_15906_15929[(2)] = null);

(statearr_15906_15929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7146__auto___15915,out))
;
return ((function (switch__7084__auto__,c__7146__auto___15915,out){
return (function() {
var cljs$core$async$state_machine__7085__auto__ = null;
var cljs$core$async$state_machine__7085__auto____0 = (function (){
var statearr_15910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15910[(0)] = cljs$core$async$state_machine__7085__auto__);

(statearr_15910[(1)] = (1));

return statearr_15910;
});
var cljs$core$async$state_machine__7085__auto____1 = (function (state_15884){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_15884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e15911){if((e15911 instanceof Object)){
var ex__7088__auto__ = e15911;
var statearr_15912_15930 = state_15884;
(statearr_15912_15930[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15931 = state_15884;
state_15884 = G__15931;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
cljs$core$async$state_machine__7085__auto__ = function(state_15884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7085__auto____1.call(this,state_15884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7085__auto____0;
cljs$core$async$state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7085__auto____1;
return cljs$core$async$state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___15915,out))
})();
var state__7148__auto__ = (function (){var statearr_15913 = f__7147__auto__.call(null);
(statearr_15913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___15915);

return statearr_15913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___15915,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1434226602015