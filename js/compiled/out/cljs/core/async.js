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
if(typeof cljs.core.async.t11449 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11449 = (function (fn_handler,f,meta11450){
this.fn_handler = fn_handler;
this.f = f;
this.meta11450 = meta11450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11451,meta11450__$1){
var self__ = this;
var _11451__$1 = this;
return (new cljs.core.async.t11449(self__.fn_handler,self__.f,meta11450__$1));
});

cljs.core.async.t11449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11451){
var self__ = this;
var _11451__$1 = this;
return self__.meta11450;
});

cljs.core.async.t11449.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11449.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t11449.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t11449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta11450","meta11450",1343530909,null)], null);
});

cljs.core.async.t11449.cljs$lang$type = true;

cljs.core.async.t11449.cljs$lang$ctorStr = "cljs.core.async/t11449";

cljs.core.async.t11449.cljs$lang$ctorPrWriter = (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t11449");
});

cljs.core.async.__GT_t11449 = (function cljs$core$async$fn_handler_$___GT_t11449(fn_handler__$1,f__$1,meta11450){
return (new cljs.core.async.t11449(fn_handler__$1,f__$1,meta11450));
});

}

return (new cljs.core.async.t11449(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11453 = buff;
if(G__11453){
var bit__5205__auto__ = null;
if(cljs.core.truth_((function (){var or__4531__auto__ = bit__5205__auto__;
if(cljs.core.truth_(or__4531__auto__)){
return or__4531__auto__;
} else {
return G__11453.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__11453.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11453);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11453);
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
var G__11455 = arguments.length;
switch (G__11455) {
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
var G__11458 = arguments.length;
switch (G__11458) {
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
var val_11460 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11460);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11460,ret){
return (function (){
return fn1.call(null,val_11460);
});})(val_11460,ret))
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
var G__11462 = arguments.length;
switch (G__11462) {
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
var n__5416__auto___11464 = n;
var x_11465 = (0);
while(true){
if((x_11465 < n__5416__auto___11464)){
(a[x_11465] = (0));

var G__11466 = (x_11465 + (1));
x_11465 = G__11466;
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

var G__11467 = (i + (1));
i = G__11467;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t11471 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11471 = (function (alt_flag,flag,meta11472){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11472 = meta11472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11473,meta11472__$1){
var self__ = this;
var _11473__$1 = this;
return (new cljs.core.async.t11471(self__.alt_flag,self__.flag,meta11472__$1));
});})(flag))
;

cljs.core.async.t11471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11473){
var self__ = this;
var _11473__$1 = this;
return self__.meta11472;
});})(flag))
;

cljs.core.async.t11471.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t11471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t11471.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11472","meta11472",528224002,null)], null);
});})(flag))
;

cljs.core.async.t11471.cljs$lang$type = true;

cljs.core.async.t11471.cljs$lang$ctorStr = "cljs.core.async/t11471";

cljs.core.async.t11471.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t11471");
});})(flag))
;

cljs.core.async.__GT_t11471 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t11471(alt_flag__$1,flag__$1,meta11472){
return (new cljs.core.async.t11471(alt_flag__$1,flag__$1,meta11472));
});})(flag))
;

}

return (new cljs.core.async.t11471(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t11477 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11477 = (function (alt_handler,flag,cb,meta11478){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11478 = meta11478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11479,meta11478__$1){
var self__ = this;
var _11479__$1 = this;
return (new cljs.core.async.t11477(self__.alt_handler,self__.flag,self__.cb,meta11478__$1));
});

cljs.core.async.t11477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11479){
var self__ = this;
var _11479__$1 = this;
return self__.meta11478;
});

cljs.core.async.t11477.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t11477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t11477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11478","meta11478",404865831,null)], null);
});

cljs.core.async.t11477.cljs$lang$type = true;

cljs.core.async.t11477.cljs$lang$ctorStr = "cljs.core.async/t11477";

cljs.core.async.t11477.cljs$lang$ctorPrWriter = (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t11477");
});

cljs.core.async.__GT_t11477 = (function cljs$core$async$alt_handler_$___GT_t11477(alt_handler__$1,flag__$1,cb__$1,meta11478){
return (new cljs.core.async.t11477(alt_handler__$1,flag__$1,cb__$1,meta11478));
});

}

return (new cljs.core.async.t11477(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11480_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11480_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11481_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11481_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4531__auto__ = wport;
if(cljs.core.truth_(or__4531__auto__)){
return or__4531__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11482 = (i + (1));
i = G__11482;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4531__auto__ = ret;
if(cljs.core.truth_(or__4531__auto__)){
return or__4531__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__4519__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4519__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4519__auto__;
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
var argseq__5571__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5571__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11485){
var map__11486 = p__11485;
var map__11486__$1 = ((cljs.core.seq_QMARK_.call(null,map__11486))?cljs.core.apply.call(null,cljs.core.hash_map,map__11486):map__11486);
var opts = map__11486__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11483){
var G__11484 = cljs.core.first.call(null,seq11483);
var seq11483__$1 = cljs.core.next.call(null,seq11483);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11484,seq11483__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__11488 = arguments.length;
switch (G__11488) {
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
var c__7402__auto___11537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___11537){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___11537){
return (function (state_11512){
var state_val_11513 = (state_11512[(1)]);
if((state_val_11513 === (7))){
var inst_11508 = (state_11512[(2)]);
var state_11512__$1 = state_11512;
var statearr_11514_11538 = state_11512__$1;
(statearr_11514_11538[(2)] = inst_11508);

(statearr_11514_11538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11513 === (1))){
var state_11512__$1 = state_11512;
var statearr_11515_11539 = state_11512__$1;
(statearr_11515_11539[(2)] = null);

(statearr_11515_11539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11513 === (4))){
var inst_11491 = (state_11512[(7)]);
var inst_11491__$1 = (state_11512[(2)]);
var inst_11492 = (inst_11491__$1 == null);
var state_11512__$1 = (function (){var statearr_11516 = state_11512;
(statearr_11516[(7)] = inst_11491__$1);

return statearr_11516;
})();
if(cljs.core.truth_(inst_11492)){
var statearr_11517_11540 = state_11512__$1;
(statearr_11517_11540[(1)] = (5));

} else {
var statearr_11518_11541 = state_11512__$1;
(statearr_11518_11541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11513 === (13))){
var state_11512__$1 = state_11512;
var statearr_11519_11542 = state_11512__$1;
(statearr_11519_11542[(2)] = null);

(statearr_11519_11542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11513 === (6))){
var inst_11491 = (state_11512[(7)]);
var state_11512__$1 = state_11512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11512__$1,(11),to,inst_11491);
} else {
if((state_val_11513 === (3))){
var inst_11510 = (state_11512[(2)]);
var state_11512__$1 = state_11512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11512__$1,inst_11510);
} else {
if((state_val_11513 === (12))){
var state_11512__$1 = state_11512;
var statearr_11520_11543 = state_11512__$1;
(statearr_11520_11543[(2)] = null);

(statearr_11520_11543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11513 === (2))){
var state_11512__$1 = state_11512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11512__$1,(4),from);
} else {
if((state_val_11513 === (11))){
var inst_11501 = (state_11512[(2)]);
var state_11512__$1 = state_11512;
if(cljs.core.truth_(inst_11501)){
var statearr_11521_11544 = state_11512__$1;
(statearr_11521_11544[(1)] = (12));

} else {
var statearr_11522_11545 = state_11512__$1;
(statearr_11522_11545[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11513 === (9))){
var state_11512__$1 = state_11512;
var statearr_11523_11546 = state_11512__$1;
(statearr_11523_11546[(2)] = null);

(statearr_11523_11546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11513 === (5))){
var state_11512__$1 = state_11512;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11524_11547 = state_11512__$1;
(statearr_11524_11547[(1)] = (8));

} else {
var statearr_11525_11548 = state_11512__$1;
(statearr_11525_11548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11513 === (14))){
var inst_11506 = (state_11512[(2)]);
var state_11512__$1 = state_11512;
var statearr_11526_11549 = state_11512__$1;
(statearr_11526_11549[(2)] = inst_11506);

(statearr_11526_11549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11513 === (10))){
var inst_11498 = (state_11512[(2)]);
var state_11512__$1 = state_11512;
var statearr_11527_11550 = state_11512__$1;
(statearr_11527_11550[(2)] = inst_11498);

(statearr_11527_11550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11513 === (8))){
var inst_11495 = cljs.core.async.close_BANG_.call(null,to);
var state_11512__$1 = state_11512;
var statearr_11528_11551 = state_11512__$1;
(statearr_11528_11551[(2)] = inst_11495);

(statearr_11528_11551[(1)] = (10));


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
});})(c__7402__auto___11537))
;
return ((function (switch__7340__auto__,c__7402__auto___11537){
return (function() {
var cljs$core$async$state_machine__7341__auto__ = null;
var cljs$core$async$state_machine__7341__auto____0 = (function (){
var statearr_11532 = [null,null,null,null,null,null,null,null];
(statearr_11532[(0)] = cljs$core$async$state_machine__7341__auto__);

(statearr_11532[(1)] = (1));

return statearr_11532;
});
var cljs$core$async$state_machine__7341__auto____1 = (function (state_11512){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_11512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e11533){if((e11533 instanceof Object)){
var ex__7344__auto__ = e11533;
var statearr_11534_11552 = state_11512;
(statearr_11534_11552[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11553 = state_11512;
state_11512 = G__11553;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$state_machine__7341__auto__ = function(state_11512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7341__auto____1.call(this,state_11512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7341__auto____0;
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7341__auto____1;
return cljs$core$async$state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___11537))
})();
var state__7404__auto__ = (function (){var statearr_11535 = f__7403__auto__.call(null);
(statearr_11535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___11537);

return statearr_11535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___11537))
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
return (function (p__11737){
var vec__11738 = p__11737;
var v = cljs.core.nth.call(null,vec__11738,(0),null);
var p = cljs.core.nth.call(null,vec__11738,(1),null);
var job = vec__11738;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7402__auto___11920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___11920,res,vec__11738,v,p,job,jobs,results){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___11920,res,vec__11738,v,p,job,jobs,results){
return (function (state_11743){
var state_val_11744 = (state_11743[(1)]);
if((state_val_11744 === (1))){
var state_11743__$1 = state_11743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11743__$1,(2),res,v);
} else {
if((state_val_11744 === (2))){
var inst_11740 = (state_11743[(2)]);
var inst_11741 = cljs.core.async.close_BANG_.call(null,res);
var state_11743__$1 = (function (){var statearr_11745 = state_11743;
(statearr_11745[(7)] = inst_11740);

return statearr_11745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11743__$1,inst_11741);
} else {
return null;
}
}
});})(c__7402__auto___11920,res,vec__11738,v,p,job,jobs,results))
;
return ((function (switch__7340__auto__,c__7402__auto___11920,res,vec__11738,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0 = (function (){
var statearr_11749 = [null,null,null,null,null,null,null,null];
(statearr_11749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__);

(statearr_11749[(1)] = (1));

return statearr_11749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1 = (function (state_11743){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_11743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e11750){if((e11750 instanceof Object)){
var ex__7344__auto__ = e11750;
var statearr_11751_11921 = state_11743;
(statearr_11751_11921[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11922 = state_11743;
state_11743 = G__11922;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__ = function(state_11743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1.call(this,state_11743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___11920,res,vec__11738,v,p,job,jobs,results))
})();
var state__7404__auto__ = (function (){var statearr_11752 = f__7403__auto__.call(null);
(statearr_11752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___11920);

return statearr_11752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___11920,res,vec__11738,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11753){
var vec__11754 = p__11753;
var v = cljs.core.nth.call(null,vec__11754,(0),null);
var p = cljs.core.nth.call(null,vec__11754,(1),null);
var job = vec__11754;
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
var n__5416__auto___11923 = n;
var __11924 = (0);
while(true){
if((__11924 < n__5416__auto___11923)){
var G__11755_11925 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11755_11925) {
case "compute":
var c__7402__auto___11927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11924,c__7402__auto___11927,G__11755_11925,n__5416__auto___11923,jobs,results,process,async){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (__11924,c__7402__auto___11927,G__11755_11925,n__5416__auto___11923,jobs,results,process,async){
return (function (state_11768){
var state_val_11769 = (state_11768[(1)]);
if((state_val_11769 === (1))){
var state_11768__$1 = state_11768;
var statearr_11770_11928 = state_11768__$1;
(statearr_11770_11928[(2)] = null);

(statearr_11770_11928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11769 === (2))){
var state_11768__$1 = state_11768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11768__$1,(4),jobs);
} else {
if((state_val_11769 === (3))){
var inst_11766 = (state_11768[(2)]);
var state_11768__$1 = state_11768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11768__$1,inst_11766);
} else {
if((state_val_11769 === (4))){
var inst_11758 = (state_11768[(2)]);
var inst_11759 = process.call(null,inst_11758);
var state_11768__$1 = state_11768;
if(cljs.core.truth_(inst_11759)){
var statearr_11771_11929 = state_11768__$1;
(statearr_11771_11929[(1)] = (5));

} else {
var statearr_11772_11930 = state_11768__$1;
(statearr_11772_11930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11769 === (5))){
var state_11768__$1 = state_11768;
var statearr_11773_11931 = state_11768__$1;
(statearr_11773_11931[(2)] = null);

(statearr_11773_11931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11769 === (6))){
var state_11768__$1 = state_11768;
var statearr_11774_11932 = state_11768__$1;
(statearr_11774_11932[(2)] = null);

(statearr_11774_11932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11769 === (7))){
var inst_11764 = (state_11768[(2)]);
var state_11768__$1 = state_11768;
var statearr_11775_11933 = state_11768__$1;
(statearr_11775_11933[(2)] = inst_11764);

(statearr_11775_11933[(1)] = (3));


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
});})(__11924,c__7402__auto___11927,G__11755_11925,n__5416__auto___11923,jobs,results,process,async))
;
return ((function (__11924,switch__7340__auto__,c__7402__auto___11927,G__11755_11925,n__5416__auto___11923,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0 = (function (){
var statearr_11779 = [null,null,null,null,null,null,null];
(statearr_11779[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__);

(statearr_11779[(1)] = (1));

return statearr_11779;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1 = (function (state_11768){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_11768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e11780){if((e11780 instanceof Object)){
var ex__7344__auto__ = e11780;
var statearr_11781_11934 = state_11768;
(statearr_11781_11934[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11935 = state_11768;
state_11768 = G__11935;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__ = function(state_11768){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1.call(this,state_11768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__;
})()
;})(__11924,switch__7340__auto__,c__7402__auto___11927,G__11755_11925,n__5416__auto___11923,jobs,results,process,async))
})();
var state__7404__auto__ = (function (){var statearr_11782 = f__7403__auto__.call(null);
(statearr_11782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___11927);

return statearr_11782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(__11924,c__7402__auto___11927,G__11755_11925,n__5416__auto___11923,jobs,results,process,async))
);


break;
case "async":
var c__7402__auto___11936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11924,c__7402__auto___11936,G__11755_11925,n__5416__auto___11923,jobs,results,process,async){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (__11924,c__7402__auto___11936,G__11755_11925,n__5416__auto___11923,jobs,results,process,async){
return (function (state_11795){
var state_val_11796 = (state_11795[(1)]);
if((state_val_11796 === (1))){
var state_11795__$1 = state_11795;
var statearr_11797_11937 = state_11795__$1;
(statearr_11797_11937[(2)] = null);

(statearr_11797_11937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11796 === (2))){
var state_11795__$1 = state_11795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11795__$1,(4),jobs);
} else {
if((state_val_11796 === (3))){
var inst_11793 = (state_11795[(2)]);
var state_11795__$1 = state_11795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11795__$1,inst_11793);
} else {
if((state_val_11796 === (4))){
var inst_11785 = (state_11795[(2)]);
var inst_11786 = async.call(null,inst_11785);
var state_11795__$1 = state_11795;
if(cljs.core.truth_(inst_11786)){
var statearr_11798_11938 = state_11795__$1;
(statearr_11798_11938[(1)] = (5));

} else {
var statearr_11799_11939 = state_11795__$1;
(statearr_11799_11939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11796 === (5))){
var state_11795__$1 = state_11795;
var statearr_11800_11940 = state_11795__$1;
(statearr_11800_11940[(2)] = null);

(statearr_11800_11940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11796 === (6))){
var state_11795__$1 = state_11795;
var statearr_11801_11941 = state_11795__$1;
(statearr_11801_11941[(2)] = null);

(statearr_11801_11941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11796 === (7))){
var inst_11791 = (state_11795[(2)]);
var state_11795__$1 = state_11795;
var statearr_11802_11942 = state_11795__$1;
(statearr_11802_11942[(2)] = inst_11791);

(statearr_11802_11942[(1)] = (3));


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
});})(__11924,c__7402__auto___11936,G__11755_11925,n__5416__auto___11923,jobs,results,process,async))
;
return ((function (__11924,switch__7340__auto__,c__7402__auto___11936,G__11755_11925,n__5416__auto___11923,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0 = (function (){
var statearr_11806 = [null,null,null,null,null,null,null];
(statearr_11806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__);

(statearr_11806[(1)] = (1));

return statearr_11806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1 = (function (state_11795){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_11795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e11807){if((e11807 instanceof Object)){
var ex__7344__auto__ = e11807;
var statearr_11808_11943 = state_11795;
(statearr_11808_11943[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11944 = state_11795;
state_11795 = G__11944;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__ = function(state_11795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1.call(this,state_11795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__;
})()
;})(__11924,switch__7340__auto__,c__7402__auto___11936,G__11755_11925,n__5416__auto___11923,jobs,results,process,async))
})();
var state__7404__auto__ = (function (){var statearr_11809 = f__7403__auto__.call(null);
(statearr_11809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___11936);

return statearr_11809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(__11924,c__7402__auto___11936,G__11755_11925,n__5416__auto___11923,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11945 = (__11924 + (1));
__11924 = G__11945;
continue;
} else {
}
break;
}

var c__7402__auto___11946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___11946,jobs,results,process,async){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___11946,jobs,results,process,async){
return (function (state_11831){
var state_val_11832 = (state_11831[(1)]);
if((state_val_11832 === (1))){
var state_11831__$1 = state_11831;
var statearr_11833_11947 = state_11831__$1;
(statearr_11833_11947[(2)] = null);

(statearr_11833_11947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11832 === (2))){
var state_11831__$1 = state_11831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11831__$1,(4),from);
} else {
if((state_val_11832 === (3))){
var inst_11829 = (state_11831[(2)]);
var state_11831__$1 = state_11831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11831__$1,inst_11829);
} else {
if((state_val_11832 === (4))){
var inst_11812 = (state_11831[(7)]);
var inst_11812__$1 = (state_11831[(2)]);
var inst_11813 = (inst_11812__$1 == null);
var state_11831__$1 = (function (){var statearr_11834 = state_11831;
(statearr_11834[(7)] = inst_11812__$1);

return statearr_11834;
})();
if(cljs.core.truth_(inst_11813)){
var statearr_11835_11948 = state_11831__$1;
(statearr_11835_11948[(1)] = (5));

} else {
var statearr_11836_11949 = state_11831__$1;
(statearr_11836_11949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11832 === (5))){
var inst_11815 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11831__$1 = state_11831;
var statearr_11837_11950 = state_11831__$1;
(statearr_11837_11950[(2)] = inst_11815);

(statearr_11837_11950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11832 === (6))){
var inst_11812 = (state_11831[(7)]);
var inst_11817 = (state_11831[(8)]);
var inst_11817__$1 = cljs.core.async.chan.call(null,(1));
var inst_11818 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11819 = [inst_11812,inst_11817__$1];
var inst_11820 = (new cljs.core.PersistentVector(null,2,(5),inst_11818,inst_11819,null));
var state_11831__$1 = (function (){var statearr_11838 = state_11831;
(statearr_11838[(8)] = inst_11817__$1);

return statearr_11838;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11831__$1,(8),jobs,inst_11820);
} else {
if((state_val_11832 === (7))){
var inst_11827 = (state_11831[(2)]);
var state_11831__$1 = state_11831;
var statearr_11839_11951 = state_11831__$1;
(statearr_11839_11951[(2)] = inst_11827);

(statearr_11839_11951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11832 === (8))){
var inst_11817 = (state_11831[(8)]);
var inst_11822 = (state_11831[(2)]);
var state_11831__$1 = (function (){var statearr_11840 = state_11831;
(statearr_11840[(9)] = inst_11822);

return statearr_11840;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11831__$1,(9),results,inst_11817);
} else {
if((state_val_11832 === (9))){
var inst_11824 = (state_11831[(2)]);
var state_11831__$1 = (function (){var statearr_11841 = state_11831;
(statearr_11841[(10)] = inst_11824);

return statearr_11841;
})();
var statearr_11842_11952 = state_11831__$1;
(statearr_11842_11952[(2)] = null);

(statearr_11842_11952[(1)] = (2));


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
});})(c__7402__auto___11946,jobs,results,process,async))
;
return ((function (switch__7340__auto__,c__7402__auto___11946,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0 = (function (){
var statearr_11846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11846[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__);

(statearr_11846[(1)] = (1));

return statearr_11846;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1 = (function (state_11831){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_11831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e11847){if((e11847 instanceof Object)){
var ex__7344__auto__ = e11847;
var statearr_11848_11953 = state_11831;
(statearr_11848_11953[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11954 = state_11831;
state_11831 = G__11954;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__ = function(state_11831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1.call(this,state_11831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___11946,jobs,results,process,async))
})();
var state__7404__auto__ = (function (){var statearr_11849 = f__7403__auto__.call(null);
(statearr_11849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___11946);

return statearr_11849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___11946,jobs,results,process,async))
);


var c__7402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto__,jobs,results,process,async){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto__,jobs,results,process,async){
return (function (state_11887){
var state_val_11888 = (state_11887[(1)]);
if((state_val_11888 === (7))){
var inst_11883 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11889_11955 = state_11887__$1;
(statearr_11889_11955[(2)] = inst_11883);

(statearr_11889_11955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (20))){
var state_11887__$1 = state_11887;
var statearr_11890_11956 = state_11887__$1;
(statearr_11890_11956[(2)] = null);

(statearr_11890_11956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (1))){
var state_11887__$1 = state_11887;
var statearr_11891_11957 = state_11887__$1;
(statearr_11891_11957[(2)] = null);

(statearr_11891_11957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (4))){
var inst_11852 = (state_11887[(7)]);
var inst_11852__$1 = (state_11887[(2)]);
var inst_11853 = (inst_11852__$1 == null);
var state_11887__$1 = (function (){var statearr_11892 = state_11887;
(statearr_11892[(7)] = inst_11852__$1);

return statearr_11892;
})();
if(cljs.core.truth_(inst_11853)){
var statearr_11893_11958 = state_11887__$1;
(statearr_11893_11958[(1)] = (5));

} else {
var statearr_11894_11959 = state_11887__$1;
(statearr_11894_11959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (15))){
var inst_11865 = (state_11887[(8)]);
var state_11887__$1 = state_11887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11887__$1,(18),to,inst_11865);
} else {
if((state_val_11888 === (21))){
var inst_11878 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11895_11960 = state_11887__$1;
(statearr_11895_11960[(2)] = inst_11878);

(statearr_11895_11960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (13))){
var inst_11880 = (state_11887[(2)]);
var state_11887__$1 = (function (){var statearr_11896 = state_11887;
(statearr_11896[(9)] = inst_11880);

return statearr_11896;
})();
var statearr_11897_11961 = state_11887__$1;
(statearr_11897_11961[(2)] = null);

(statearr_11897_11961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (6))){
var inst_11852 = (state_11887[(7)]);
var state_11887__$1 = state_11887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11887__$1,(11),inst_11852);
} else {
if((state_val_11888 === (17))){
var inst_11873 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
if(cljs.core.truth_(inst_11873)){
var statearr_11898_11962 = state_11887__$1;
(statearr_11898_11962[(1)] = (19));

} else {
var statearr_11899_11963 = state_11887__$1;
(statearr_11899_11963[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (3))){
var inst_11885 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11887__$1,inst_11885);
} else {
if((state_val_11888 === (12))){
var inst_11862 = (state_11887[(10)]);
var state_11887__$1 = state_11887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11887__$1,(14),inst_11862);
} else {
if((state_val_11888 === (2))){
var state_11887__$1 = state_11887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11887__$1,(4),results);
} else {
if((state_val_11888 === (19))){
var state_11887__$1 = state_11887;
var statearr_11900_11964 = state_11887__$1;
(statearr_11900_11964[(2)] = null);

(statearr_11900_11964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (11))){
var inst_11862 = (state_11887[(2)]);
var state_11887__$1 = (function (){var statearr_11901 = state_11887;
(statearr_11901[(10)] = inst_11862);

return statearr_11901;
})();
var statearr_11902_11965 = state_11887__$1;
(statearr_11902_11965[(2)] = null);

(statearr_11902_11965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (9))){
var state_11887__$1 = state_11887;
var statearr_11903_11966 = state_11887__$1;
(statearr_11903_11966[(2)] = null);

(statearr_11903_11966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (5))){
var state_11887__$1 = state_11887;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11904_11967 = state_11887__$1;
(statearr_11904_11967[(1)] = (8));

} else {
var statearr_11905_11968 = state_11887__$1;
(statearr_11905_11968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (14))){
var inst_11865 = (state_11887[(8)]);
var inst_11867 = (state_11887[(11)]);
var inst_11865__$1 = (state_11887[(2)]);
var inst_11866 = (inst_11865__$1 == null);
var inst_11867__$1 = cljs.core.not.call(null,inst_11866);
var state_11887__$1 = (function (){var statearr_11906 = state_11887;
(statearr_11906[(8)] = inst_11865__$1);

(statearr_11906[(11)] = inst_11867__$1);

return statearr_11906;
})();
if(inst_11867__$1){
var statearr_11907_11969 = state_11887__$1;
(statearr_11907_11969[(1)] = (15));

} else {
var statearr_11908_11970 = state_11887__$1;
(statearr_11908_11970[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (16))){
var inst_11867 = (state_11887[(11)]);
var state_11887__$1 = state_11887;
var statearr_11909_11971 = state_11887__$1;
(statearr_11909_11971[(2)] = inst_11867);

(statearr_11909_11971[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (10))){
var inst_11859 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11910_11972 = state_11887__$1;
(statearr_11910_11972[(2)] = inst_11859);

(statearr_11910_11972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (18))){
var inst_11870 = (state_11887[(2)]);
var state_11887__$1 = state_11887;
var statearr_11911_11973 = state_11887__$1;
(statearr_11911_11973[(2)] = inst_11870);

(statearr_11911_11973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11888 === (8))){
var inst_11856 = cljs.core.async.close_BANG_.call(null,to);
var state_11887__$1 = state_11887;
var statearr_11912_11974 = state_11887__$1;
(statearr_11912_11974[(2)] = inst_11856);

(statearr_11912_11974[(1)] = (10));


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
});})(c__7402__auto__,jobs,results,process,async))
;
return ((function (switch__7340__auto__,c__7402__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0 = (function (){
var statearr_11916 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__);

(statearr_11916[(1)] = (1));

return statearr_11916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1 = (function (state_11887){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_11887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e11917){if((e11917 instanceof Object)){
var ex__7344__auto__ = e11917;
var statearr_11918_11975 = state_11887;
(statearr_11918_11975[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11976 = state_11887;
state_11887 = G__11976;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__ = function(state_11887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1.call(this,state_11887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7341__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto__,jobs,results,process,async))
})();
var state__7404__auto__ = (function (){var statearr_11919 = f__7403__auto__.call(null);
(statearr_11919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto__);

return statearr_11919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto__,jobs,results,process,async))
);

return c__7402__auto__;
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
var G__11978 = arguments.length;
switch (G__11978) {
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
var G__11981 = arguments.length;
switch (G__11981) {
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
var G__11984 = arguments.length;
switch (G__11984) {
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
var c__7402__auto___12036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___12036,tc,fc){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___12036,tc,fc){
return (function (state_12010){
var state_val_12011 = (state_12010[(1)]);
if((state_val_12011 === (7))){
var inst_12006 = (state_12010[(2)]);
var state_12010__$1 = state_12010;
var statearr_12012_12037 = state_12010__$1;
(statearr_12012_12037[(2)] = inst_12006);

(statearr_12012_12037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12011 === (1))){
var state_12010__$1 = state_12010;
var statearr_12013_12038 = state_12010__$1;
(statearr_12013_12038[(2)] = null);

(statearr_12013_12038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12011 === (4))){
var inst_11987 = (state_12010[(7)]);
var inst_11987__$1 = (state_12010[(2)]);
var inst_11988 = (inst_11987__$1 == null);
var state_12010__$1 = (function (){var statearr_12014 = state_12010;
(statearr_12014[(7)] = inst_11987__$1);

return statearr_12014;
})();
if(cljs.core.truth_(inst_11988)){
var statearr_12015_12039 = state_12010__$1;
(statearr_12015_12039[(1)] = (5));

} else {
var statearr_12016_12040 = state_12010__$1;
(statearr_12016_12040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12011 === (13))){
var state_12010__$1 = state_12010;
var statearr_12017_12041 = state_12010__$1;
(statearr_12017_12041[(2)] = null);

(statearr_12017_12041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12011 === (6))){
var inst_11987 = (state_12010[(7)]);
var inst_11993 = p.call(null,inst_11987);
var state_12010__$1 = state_12010;
if(cljs.core.truth_(inst_11993)){
var statearr_12018_12042 = state_12010__$1;
(statearr_12018_12042[(1)] = (9));

} else {
var statearr_12019_12043 = state_12010__$1;
(statearr_12019_12043[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12011 === (3))){
var inst_12008 = (state_12010[(2)]);
var state_12010__$1 = state_12010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12010__$1,inst_12008);
} else {
if((state_val_12011 === (12))){
var state_12010__$1 = state_12010;
var statearr_12020_12044 = state_12010__$1;
(statearr_12020_12044[(2)] = null);

(statearr_12020_12044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12011 === (2))){
var state_12010__$1 = state_12010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12010__$1,(4),ch);
} else {
if((state_val_12011 === (11))){
var inst_11987 = (state_12010[(7)]);
var inst_11997 = (state_12010[(2)]);
var state_12010__$1 = state_12010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12010__$1,(8),inst_11997,inst_11987);
} else {
if((state_val_12011 === (9))){
var state_12010__$1 = state_12010;
var statearr_12021_12045 = state_12010__$1;
(statearr_12021_12045[(2)] = tc);

(statearr_12021_12045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12011 === (5))){
var inst_11990 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11991 = cljs.core.async.close_BANG_.call(null,fc);
var state_12010__$1 = (function (){var statearr_12022 = state_12010;
(statearr_12022[(8)] = inst_11990);

return statearr_12022;
})();
var statearr_12023_12046 = state_12010__$1;
(statearr_12023_12046[(2)] = inst_11991);

(statearr_12023_12046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12011 === (14))){
var inst_12004 = (state_12010[(2)]);
var state_12010__$1 = state_12010;
var statearr_12024_12047 = state_12010__$1;
(statearr_12024_12047[(2)] = inst_12004);

(statearr_12024_12047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12011 === (10))){
var state_12010__$1 = state_12010;
var statearr_12025_12048 = state_12010__$1;
(statearr_12025_12048[(2)] = fc);

(statearr_12025_12048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12011 === (8))){
var inst_11999 = (state_12010[(2)]);
var state_12010__$1 = state_12010;
if(cljs.core.truth_(inst_11999)){
var statearr_12026_12049 = state_12010__$1;
(statearr_12026_12049[(1)] = (12));

} else {
var statearr_12027_12050 = state_12010__$1;
(statearr_12027_12050[(1)] = (13));

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
});})(c__7402__auto___12036,tc,fc))
;
return ((function (switch__7340__auto__,c__7402__auto___12036,tc,fc){
return (function() {
var cljs$core$async$state_machine__7341__auto__ = null;
var cljs$core$async$state_machine__7341__auto____0 = (function (){
var statearr_12031 = [null,null,null,null,null,null,null,null,null];
(statearr_12031[(0)] = cljs$core$async$state_machine__7341__auto__);

(statearr_12031[(1)] = (1));

return statearr_12031;
});
var cljs$core$async$state_machine__7341__auto____1 = (function (state_12010){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_12010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e12032){if((e12032 instanceof Object)){
var ex__7344__auto__ = e12032;
var statearr_12033_12051 = state_12010;
(statearr_12033_12051[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12052 = state_12010;
state_12010 = G__12052;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$state_machine__7341__auto__ = function(state_12010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7341__auto____1.call(this,state_12010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7341__auto____0;
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7341__auto____1;
return cljs$core$async$state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___12036,tc,fc))
})();
var state__7404__auto__ = (function (){var statearr_12034 = f__7403__auto__.call(null);
(statearr_12034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___12036);

return statearr_12034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___12036,tc,fc))
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
var c__7402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto__){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto__){
return (function (state_12099){
var state_val_12100 = (state_12099[(1)]);
if((state_val_12100 === (1))){
var inst_12085 = init;
var state_12099__$1 = (function (){var statearr_12101 = state_12099;
(statearr_12101[(7)] = inst_12085);

return statearr_12101;
})();
var statearr_12102_12117 = state_12099__$1;
(statearr_12102_12117[(2)] = null);

(statearr_12102_12117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (2))){
var state_12099__$1 = state_12099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12099__$1,(4),ch);
} else {
if((state_val_12100 === (3))){
var inst_12097 = (state_12099[(2)]);
var state_12099__$1 = state_12099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12099__$1,inst_12097);
} else {
if((state_val_12100 === (4))){
var inst_12088 = (state_12099[(8)]);
var inst_12088__$1 = (state_12099[(2)]);
var inst_12089 = (inst_12088__$1 == null);
var state_12099__$1 = (function (){var statearr_12103 = state_12099;
(statearr_12103[(8)] = inst_12088__$1);

return statearr_12103;
})();
if(cljs.core.truth_(inst_12089)){
var statearr_12104_12118 = state_12099__$1;
(statearr_12104_12118[(1)] = (5));

} else {
var statearr_12105_12119 = state_12099__$1;
(statearr_12105_12119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (5))){
var inst_12085 = (state_12099[(7)]);
var state_12099__$1 = state_12099;
var statearr_12106_12120 = state_12099__$1;
(statearr_12106_12120[(2)] = inst_12085);

(statearr_12106_12120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (6))){
var inst_12085 = (state_12099[(7)]);
var inst_12088 = (state_12099[(8)]);
var inst_12092 = f.call(null,inst_12085,inst_12088);
var inst_12085__$1 = inst_12092;
var state_12099__$1 = (function (){var statearr_12107 = state_12099;
(statearr_12107[(7)] = inst_12085__$1);

return statearr_12107;
})();
var statearr_12108_12121 = state_12099__$1;
(statearr_12108_12121[(2)] = null);

(statearr_12108_12121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12100 === (7))){
var inst_12095 = (state_12099[(2)]);
var state_12099__$1 = state_12099;
var statearr_12109_12122 = state_12099__$1;
(statearr_12109_12122[(2)] = inst_12095);

(statearr_12109_12122[(1)] = (3));


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
});})(c__7402__auto__))
;
return ((function (switch__7340__auto__,c__7402__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7341__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7341__auto____0 = (function (){
var statearr_12113 = [null,null,null,null,null,null,null,null,null];
(statearr_12113[(0)] = cljs$core$async$reduce_$_state_machine__7341__auto__);

(statearr_12113[(1)] = (1));

return statearr_12113;
});
var cljs$core$async$reduce_$_state_machine__7341__auto____1 = (function (state_12099){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_12099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e12114){if((e12114 instanceof Object)){
var ex__7344__auto__ = e12114;
var statearr_12115_12123 = state_12099;
(statearr_12115_12123[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12124 = state_12099;
state_12099 = G__12124;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7341__auto__ = function(state_12099){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7341__auto____1.call(this,state_12099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7341__auto____0;
cljs$core$async$reduce_$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7341__auto____1;
return cljs$core$async$reduce_$_state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto__))
})();
var state__7404__auto__ = (function (){var statearr_12116 = f__7403__auto__.call(null);
(statearr_12116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto__);

return statearr_12116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto__))
);

return c__7402__auto__;
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
var G__12126 = arguments.length;
switch (G__12126) {
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
var c__7402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto__){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto__){
return (function (state_12151){
var state_val_12152 = (state_12151[(1)]);
if((state_val_12152 === (7))){
var inst_12133 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
var statearr_12153_12177 = state_12151__$1;
(statearr_12153_12177[(2)] = inst_12133);

(statearr_12153_12177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (1))){
var inst_12127 = cljs.core.seq.call(null,coll);
var inst_12128 = inst_12127;
var state_12151__$1 = (function (){var statearr_12154 = state_12151;
(statearr_12154[(7)] = inst_12128);

return statearr_12154;
})();
var statearr_12155_12178 = state_12151__$1;
(statearr_12155_12178[(2)] = null);

(statearr_12155_12178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (4))){
var inst_12128 = (state_12151[(7)]);
var inst_12131 = cljs.core.first.call(null,inst_12128);
var state_12151__$1 = state_12151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12151__$1,(7),ch,inst_12131);
} else {
if((state_val_12152 === (13))){
var inst_12145 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
var statearr_12156_12179 = state_12151__$1;
(statearr_12156_12179[(2)] = inst_12145);

(statearr_12156_12179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (6))){
var inst_12136 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
if(cljs.core.truth_(inst_12136)){
var statearr_12157_12180 = state_12151__$1;
(statearr_12157_12180[(1)] = (8));

} else {
var statearr_12158_12181 = state_12151__$1;
(statearr_12158_12181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (3))){
var inst_12149 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12151__$1,inst_12149);
} else {
if((state_val_12152 === (12))){
var state_12151__$1 = state_12151;
var statearr_12159_12182 = state_12151__$1;
(statearr_12159_12182[(2)] = null);

(statearr_12159_12182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (2))){
var inst_12128 = (state_12151[(7)]);
var state_12151__$1 = state_12151;
if(cljs.core.truth_(inst_12128)){
var statearr_12160_12183 = state_12151__$1;
(statearr_12160_12183[(1)] = (4));

} else {
var statearr_12161_12184 = state_12151__$1;
(statearr_12161_12184[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (11))){
var inst_12142 = cljs.core.async.close_BANG_.call(null,ch);
var state_12151__$1 = state_12151;
var statearr_12162_12185 = state_12151__$1;
(statearr_12162_12185[(2)] = inst_12142);

(statearr_12162_12185[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (9))){
var state_12151__$1 = state_12151;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12163_12186 = state_12151__$1;
(statearr_12163_12186[(1)] = (11));

} else {
var statearr_12164_12187 = state_12151__$1;
(statearr_12164_12187[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (5))){
var inst_12128 = (state_12151[(7)]);
var state_12151__$1 = state_12151;
var statearr_12165_12188 = state_12151__$1;
(statearr_12165_12188[(2)] = inst_12128);

(statearr_12165_12188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (10))){
var inst_12147 = (state_12151[(2)]);
var state_12151__$1 = state_12151;
var statearr_12166_12189 = state_12151__$1;
(statearr_12166_12189[(2)] = inst_12147);

(statearr_12166_12189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12152 === (8))){
var inst_12128 = (state_12151[(7)]);
var inst_12138 = cljs.core.next.call(null,inst_12128);
var inst_12128__$1 = inst_12138;
var state_12151__$1 = (function (){var statearr_12167 = state_12151;
(statearr_12167[(7)] = inst_12128__$1);

return statearr_12167;
})();
var statearr_12168_12190 = state_12151__$1;
(statearr_12168_12190[(2)] = null);

(statearr_12168_12190[(1)] = (2));


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
});})(c__7402__auto__))
;
return ((function (switch__7340__auto__,c__7402__auto__){
return (function() {
var cljs$core$async$state_machine__7341__auto__ = null;
var cljs$core$async$state_machine__7341__auto____0 = (function (){
var statearr_12172 = [null,null,null,null,null,null,null,null];
(statearr_12172[(0)] = cljs$core$async$state_machine__7341__auto__);

(statearr_12172[(1)] = (1));

return statearr_12172;
});
var cljs$core$async$state_machine__7341__auto____1 = (function (state_12151){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_12151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e12173){if((e12173 instanceof Object)){
var ex__7344__auto__ = e12173;
var statearr_12174_12191 = state_12151;
(statearr_12174_12191[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12192 = state_12151;
state_12151 = G__12192;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$state_machine__7341__auto__ = function(state_12151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7341__auto____1.call(this,state_12151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7341__auto____0;
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7341__auto____1;
return cljs$core$async$state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto__))
})();
var state__7404__auto__ = (function (){var statearr_12175 = f__7403__auto__.call(null);
(statearr_12175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto__);

return statearr_12175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto__))
);

return c__7402__auto__;
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

cljs.core.async.Mux = (function (){var obj12194 = {};
return obj12194;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4519__auto__ = _;
if(and__4519__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4519__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5167__auto__ = (((_ == null))?null:_);
return (function (){var or__4531__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5167__auto__)]);
if(or__4531__auto__){
return or__4531__auto__;
} else {
var or__4531__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4531__auto____$1){
return or__4531__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj12196 = {};
return obj12196;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4519__auto__ = m;
if(and__4519__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4519__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5167__auto__ = (((m == null))?null:m);
return (function (){var or__4531__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5167__auto__)]);
if(or__4531__auto__){
return or__4531__auto__;
} else {
var or__4531__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4531__auto____$1){
return or__4531__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4519__auto__ = m;
if(and__4519__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4519__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5167__auto__ = (((m == null))?null:m);
return (function (){var or__4531__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5167__auto__)]);
if(or__4531__auto__){
return or__4531__auto__;
} else {
var or__4531__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4531__auto____$1){
return or__4531__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4519__auto__ = m;
if(and__4519__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4519__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5167__auto__ = (((m == null))?null:m);
return (function (){var or__4531__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5167__auto__)]);
if(or__4531__auto__){
return or__4531__auto__;
} else {
var or__4531__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4531__auto____$1){
return or__4531__auto____$1;
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
if(typeof cljs.core.async.t12418 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12418 = (function (mult,ch,cs,meta12419){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta12419 = meta12419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12420,meta12419__$1){
var self__ = this;
var _12420__$1 = this;
return (new cljs.core.async.t12418(self__.mult,self__.ch,self__.cs,meta12419__$1));
});})(cs))
;

cljs.core.async.t12418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12420){
var self__ = this;
var _12420__$1 = this;
return self__.meta12419;
});})(cs))
;

cljs.core.async.t12418.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t12418.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t12418.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t12418.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t12418.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t12418.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12419","meta12419",1074972391,null)], null);
});})(cs))
;

cljs.core.async.t12418.cljs$lang$type = true;

cljs.core.async.t12418.cljs$lang$ctorStr = "cljs.core.async/t12418";

cljs.core.async.t12418.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t12418");
});})(cs))
;

cljs.core.async.__GT_t12418 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t12418(mult__$1,ch__$1,cs__$1,meta12419){
return (new cljs.core.async.t12418(mult__$1,ch__$1,cs__$1,meta12419));
});})(cs))
;

}

return (new cljs.core.async.t12418(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7402__auto___12639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___12639,cs,m,dchan,dctr,done){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___12639,cs,m,dchan,dctr,done){
return (function (state_12551){
var state_val_12552 = (state_12551[(1)]);
if((state_val_12552 === (7))){
var inst_12547 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12553_12640 = state_12551__$1;
(statearr_12553_12640[(2)] = inst_12547);

(statearr_12553_12640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (20))){
var inst_12452 = (state_12551[(7)]);
var inst_12462 = cljs.core.first.call(null,inst_12452);
var inst_12463 = cljs.core.nth.call(null,inst_12462,(0),null);
var inst_12464 = cljs.core.nth.call(null,inst_12462,(1),null);
var state_12551__$1 = (function (){var statearr_12554 = state_12551;
(statearr_12554[(8)] = inst_12463);

return statearr_12554;
})();
if(cljs.core.truth_(inst_12464)){
var statearr_12555_12641 = state_12551__$1;
(statearr_12555_12641[(1)] = (22));

} else {
var statearr_12556_12642 = state_12551__$1;
(statearr_12556_12642[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (27))){
var inst_12423 = (state_12551[(9)]);
var inst_12494 = (state_12551[(10)]);
var inst_12499 = (state_12551[(11)]);
var inst_12492 = (state_12551[(12)]);
var inst_12499__$1 = cljs.core._nth.call(null,inst_12492,inst_12494);
var inst_12500 = cljs.core.async.put_BANG_.call(null,inst_12499__$1,inst_12423,done);
var state_12551__$1 = (function (){var statearr_12557 = state_12551;
(statearr_12557[(11)] = inst_12499__$1);

return statearr_12557;
})();
if(cljs.core.truth_(inst_12500)){
var statearr_12558_12643 = state_12551__$1;
(statearr_12558_12643[(1)] = (30));

} else {
var statearr_12559_12644 = state_12551__$1;
(statearr_12559_12644[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (1))){
var state_12551__$1 = state_12551;
var statearr_12560_12645 = state_12551__$1;
(statearr_12560_12645[(2)] = null);

(statearr_12560_12645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (24))){
var inst_12452 = (state_12551[(7)]);
var inst_12469 = (state_12551[(2)]);
var inst_12470 = cljs.core.next.call(null,inst_12452);
var inst_12432 = inst_12470;
var inst_12433 = null;
var inst_12434 = (0);
var inst_12435 = (0);
var state_12551__$1 = (function (){var statearr_12561 = state_12551;
(statearr_12561[(13)] = inst_12432);

(statearr_12561[(14)] = inst_12433);

(statearr_12561[(15)] = inst_12434);

(statearr_12561[(16)] = inst_12469);

(statearr_12561[(17)] = inst_12435);

return statearr_12561;
})();
var statearr_12562_12646 = state_12551__$1;
(statearr_12562_12646[(2)] = null);

(statearr_12562_12646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (39))){
var state_12551__$1 = state_12551;
var statearr_12566_12647 = state_12551__$1;
(statearr_12566_12647[(2)] = null);

(statearr_12566_12647[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (4))){
var inst_12423 = (state_12551[(9)]);
var inst_12423__$1 = (state_12551[(2)]);
var inst_12424 = (inst_12423__$1 == null);
var state_12551__$1 = (function (){var statearr_12567 = state_12551;
(statearr_12567[(9)] = inst_12423__$1);

return statearr_12567;
})();
if(cljs.core.truth_(inst_12424)){
var statearr_12568_12648 = state_12551__$1;
(statearr_12568_12648[(1)] = (5));

} else {
var statearr_12569_12649 = state_12551__$1;
(statearr_12569_12649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (15))){
var inst_12432 = (state_12551[(13)]);
var inst_12433 = (state_12551[(14)]);
var inst_12434 = (state_12551[(15)]);
var inst_12435 = (state_12551[(17)]);
var inst_12448 = (state_12551[(2)]);
var inst_12449 = (inst_12435 + (1));
var tmp12563 = inst_12432;
var tmp12564 = inst_12433;
var tmp12565 = inst_12434;
var inst_12432__$1 = tmp12563;
var inst_12433__$1 = tmp12564;
var inst_12434__$1 = tmp12565;
var inst_12435__$1 = inst_12449;
var state_12551__$1 = (function (){var statearr_12570 = state_12551;
(statearr_12570[(13)] = inst_12432__$1);

(statearr_12570[(14)] = inst_12433__$1);

(statearr_12570[(15)] = inst_12434__$1);

(statearr_12570[(17)] = inst_12435__$1);

(statearr_12570[(18)] = inst_12448);

return statearr_12570;
})();
var statearr_12571_12650 = state_12551__$1;
(statearr_12571_12650[(2)] = null);

(statearr_12571_12650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (21))){
var inst_12473 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12575_12651 = state_12551__$1;
(statearr_12575_12651[(2)] = inst_12473);

(statearr_12575_12651[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (31))){
var inst_12499 = (state_12551[(11)]);
var inst_12503 = done.call(null,null);
var inst_12504 = cljs.core.async.untap_STAR_.call(null,m,inst_12499);
var state_12551__$1 = (function (){var statearr_12576 = state_12551;
(statearr_12576[(19)] = inst_12503);

return statearr_12576;
})();
var statearr_12577_12652 = state_12551__$1;
(statearr_12577_12652[(2)] = inst_12504);

(statearr_12577_12652[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (32))){
var inst_12494 = (state_12551[(10)]);
var inst_12491 = (state_12551[(20)]);
var inst_12493 = (state_12551[(21)]);
var inst_12492 = (state_12551[(12)]);
var inst_12506 = (state_12551[(2)]);
var inst_12507 = (inst_12494 + (1));
var tmp12572 = inst_12491;
var tmp12573 = inst_12493;
var tmp12574 = inst_12492;
var inst_12491__$1 = tmp12572;
var inst_12492__$1 = tmp12574;
var inst_12493__$1 = tmp12573;
var inst_12494__$1 = inst_12507;
var state_12551__$1 = (function (){var statearr_12578 = state_12551;
(statearr_12578[(10)] = inst_12494__$1);

(statearr_12578[(22)] = inst_12506);

(statearr_12578[(20)] = inst_12491__$1);

(statearr_12578[(21)] = inst_12493__$1);

(statearr_12578[(12)] = inst_12492__$1);

return statearr_12578;
})();
var statearr_12579_12653 = state_12551__$1;
(statearr_12579_12653[(2)] = null);

(statearr_12579_12653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (40))){
var inst_12519 = (state_12551[(23)]);
var inst_12523 = done.call(null,null);
var inst_12524 = cljs.core.async.untap_STAR_.call(null,m,inst_12519);
var state_12551__$1 = (function (){var statearr_12580 = state_12551;
(statearr_12580[(24)] = inst_12523);

return statearr_12580;
})();
var statearr_12581_12654 = state_12551__$1;
(statearr_12581_12654[(2)] = inst_12524);

(statearr_12581_12654[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (33))){
var inst_12510 = (state_12551[(25)]);
var inst_12512 = cljs.core.chunked_seq_QMARK_.call(null,inst_12510);
var state_12551__$1 = state_12551;
if(inst_12512){
var statearr_12582_12655 = state_12551__$1;
(statearr_12582_12655[(1)] = (36));

} else {
var statearr_12583_12656 = state_12551__$1;
(statearr_12583_12656[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (13))){
var inst_12442 = (state_12551[(26)]);
var inst_12445 = cljs.core.async.close_BANG_.call(null,inst_12442);
var state_12551__$1 = state_12551;
var statearr_12584_12657 = state_12551__$1;
(statearr_12584_12657[(2)] = inst_12445);

(statearr_12584_12657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (22))){
var inst_12463 = (state_12551[(8)]);
var inst_12466 = cljs.core.async.close_BANG_.call(null,inst_12463);
var state_12551__$1 = state_12551;
var statearr_12585_12658 = state_12551__$1;
(statearr_12585_12658[(2)] = inst_12466);

(statearr_12585_12658[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (36))){
var inst_12510 = (state_12551[(25)]);
var inst_12514 = cljs.core.chunk_first.call(null,inst_12510);
var inst_12515 = cljs.core.chunk_rest.call(null,inst_12510);
var inst_12516 = cljs.core.count.call(null,inst_12514);
var inst_12491 = inst_12515;
var inst_12492 = inst_12514;
var inst_12493 = inst_12516;
var inst_12494 = (0);
var state_12551__$1 = (function (){var statearr_12586 = state_12551;
(statearr_12586[(10)] = inst_12494);

(statearr_12586[(20)] = inst_12491);

(statearr_12586[(21)] = inst_12493);

(statearr_12586[(12)] = inst_12492);

return statearr_12586;
})();
var statearr_12587_12659 = state_12551__$1;
(statearr_12587_12659[(2)] = null);

(statearr_12587_12659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (41))){
var inst_12510 = (state_12551[(25)]);
var inst_12526 = (state_12551[(2)]);
var inst_12527 = cljs.core.next.call(null,inst_12510);
var inst_12491 = inst_12527;
var inst_12492 = null;
var inst_12493 = (0);
var inst_12494 = (0);
var state_12551__$1 = (function (){var statearr_12588 = state_12551;
(statearr_12588[(10)] = inst_12494);

(statearr_12588[(20)] = inst_12491);

(statearr_12588[(27)] = inst_12526);

(statearr_12588[(21)] = inst_12493);

(statearr_12588[(12)] = inst_12492);

return statearr_12588;
})();
var statearr_12589_12660 = state_12551__$1;
(statearr_12589_12660[(2)] = null);

(statearr_12589_12660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (43))){
var state_12551__$1 = state_12551;
var statearr_12590_12661 = state_12551__$1;
(statearr_12590_12661[(2)] = null);

(statearr_12590_12661[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (29))){
var inst_12535 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12591_12662 = state_12551__$1;
(statearr_12591_12662[(2)] = inst_12535);

(statearr_12591_12662[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (44))){
var inst_12544 = (state_12551[(2)]);
var state_12551__$1 = (function (){var statearr_12592 = state_12551;
(statearr_12592[(28)] = inst_12544);

return statearr_12592;
})();
var statearr_12593_12663 = state_12551__$1;
(statearr_12593_12663[(2)] = null);

(statearr_12593_12663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (6))){
var inst_12483 = (state_12551[(29)]);
var inst_12482 = cljs.core.deref.call(null,cs);
var inst_12483__$1 = cljs.core.keys.call(null,inst_12482);
var inst_12484 = cljs.core.count.call(null,inst_12483__$1);
var inst_12485 = cljs.core.reset_BANG_.call(null,dctr,inst_12484);
var inst_12490 = cljs.core.seq.call(null,inst_12483__$1);
var inst_12491 = inst_12490;
var inst_12492 = null;
var inst_12493 = (0);
var inst_12494 = (0);
var state_12551__$1 = (function (){var statearr_12594 = state_12551;
(statearr_12594[(10)] = inst_12494);

(statearr_12594[(30)] = inst_12485);

(statearr_12594[(20)] = inst_12491);

(statearr_12594[(21)] = inst_12493);

(statearr_12594[(12)] = inst_12492);

(statearr_12594[(29)] = inst_12483__$1);

return statearr_12594;
})();
var statearr_12595_12664 = state_12551__$1;
(statearr_12595_12664[(2)] = null);

(statearr_12595_12664[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (28))){
var inst_12510 = (state_12551[(25)]);
var inst_12491 = (state_12551[(20)]);
var inst_12510__$1 = cljs.core.seq.call(null,inst_12491);
var state_12551__$1 = (function (){var statearr_12596 = state_12551;
(statearr_12596[(25)] = inst_12510__$1);

return statearr_12596;
})();
if(inst_12510__$1){
var statearr_12597_12665 = state_12551__$1;
(statearr_12597_12665[(1)] = (33));

} else {
var statearr_12598_12666 = state_12551__$1;
(statearr_12598_12666[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (25))){
var inst_12494 = (state_12551[(10)]);
var inst_12493 = (state_12551[(21)]);
var inst_12496 = (inst_12494 < inst_12493);
var inst_12497 = inst_12496;
var state_12551__$1 = state_12551;
if(cljs.core.truth_(inst_12497)){
var statearr_12599_12667 = state_12551__$1;
(statearr_12599_12667[(1)] = (27));

} else {
var statearr_12600_12668 = state_12551__$1;
(statearr_12600_12668[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (34))){
var state_12551__$1 = state_12551;
var statearr_12601_12669 = state_12551__$1;
(statearr_12601_12669[(2)] = null);

(statearr_12601_12669[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (17))){
var state_12551__$1 = state_12551;
var statearr_12602_12670 = state_12551__$1;
(statearr_12602_12670[(2)] = null);

(statearr_12602_12670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (3))){
var inst_12549 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12551__$1,inst_12549);
} else {
if((state_val_12552 === (12))){
var inst_12478 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12603_12671 = state_12551__$1;
(statearr_12603_12671[(2)] = inst_12478);

(statearr_12603_12671[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (2))){
var state_12551__$1 = state_12551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12551__$1,(4),ch);
} else {
if((state_val_12552 === (23))){
var state_12551__$1 = state_12551;
var statearr_12604_12672 = state_12551__$1;
(statearr_12604_12672[(2)] = null);

(statearr_12604_12672[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (35))){
var inst_12533 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12605_12673 = state_12551__$1;
(statearr_12605_12673[(2)] = inst_12533);

(statearr_12605_12673[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (19))){
var inst_12452 = (state_12551[(7)]);
var inst_12456 = cljs.core.chunk_first.call(null,inst_12452);
var inst_12457 = cljs.core.chunk_rest.call(null,inst_12452);
var inst_12458 = cljs.core.count.call(null,inst_12456);
var inst_12432 = inst_12457;
var inst_12433 = inst_12456;
var inst_12434 = inst_12458;
var inst_12435 = (0);
var state_12551__$1 = (function (){var statearr_12606 = state_12551;
(statearr_12606[(13)] = inst_12432);

(statearr_12606[(14)] = inst_12433);

(statearr_12606[(15)] = inst_12434);

(statearr_12606[(17)] = inst_12435);

return statearr_12606;
})();
var statearr_12607_12674 = state_12551__$1;
(statearr_12607_12674[(2)] = null);

(statearr_12607_12674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (11))){
var inst_12432 = (state_12551[(13)]);
var inst_12452 = (state_12551[(7)]);
var inst_12452__$1 = cljs.core.seq.call(null,inst_12432);
var state_12551__$1 = (function (){var statearr_12608 = state_12551;
(statearr_12608[(7)] = inst_12452__$1);

return statearr_12608;
})();
if(inst_12452__$1){
var statearr_12609_12675 = state_12551__$1;
(statearr_12609_12675[(1)] = (16));

} else {
var statearr_12610_12676 = state_12551__$1;
(statearr_12610_12676[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (9))){
var inst_12480 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12611_12677 = state_12551__$1;
(statearr_12611_12677[(2)] = inst_12480);

(statearr_12611_12677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (5))){
var inst_12430 = cljs.core.deref.call(null,cs);
var inst_12431 = cljs.core.seq.call(null,inst_12430);
var inst_12432 = inst_12431;
var inst_12433 = null;
var inst_12434 = (0);
var inst_12435 = (0);
var state_12551__$1 = (function (){var statearr_12612 = state_12551;
(statearr_12612[(13)] = inst_12432);

(statearr_12612[(14)] = inst_12433);

(statearr_12612[(15)] = inst_12434);

(statearr_12612[(17)] = inst_12435);

return statearr_12612;
})();
var statearr_12613_12678 = state_12551__$1;
(statearr_12613_12678[(2)] = null);

(statearr_12613_12678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (14))){
var state_12551__$1 = state_12551;
var statearr_12614_12679 = state_12551__$1;
(statearr_12614_12679[(2)] = null);

(statearr_12614_12679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (45))){
var inst_12541 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12615_12680 = state_12551__$1;
(statearr_12615_12680[(2)] = inst_12541);

(statearr_12615_12680[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (26))){
var inst_12483 = (state_12551[(29)]);
var inst_12537 = (state_12551[(2)]);
var inst_12538 = cljs.core.seq.call(null,inst_12483);
var state_12551__$1 = (function (){var statearr_12616 = state_12551;
(statearr_12616[(31)] = inst_12537);

return statearr_12616;
})();
if(inst_12538){
var statearr_12617_12681 = state_12551__$1;
(statearr_12617_12681[(1)] = (42));

} else {
var statearr_12618_12682 = state_12551__$1;
(statearr_12618_12682[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (16))){
var inst_12452 = (state_12551[(7)]);
var inst_12454 = cljs.core.chunked_seq_QMARK_.call(null,inst_12452);
var state_12551__$1 = state_12551;
if(inst_12454){
var statearr_12619_12683 = state_12551__$1;
(statearr_12619_12683[(1)] = (19));

} else {
var statearr_12620_12684 = state_12551__$1;
(statearr_12620_12684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (38))){
var inst_12530 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12621_12685 = state_12551__$1;
(statearr_12621_12685[(2)] = inst_12530);

(statearr_12621_12685[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (30))){
var state_12551__$1 = state_12551;
var statearr_12622_12686 = state_12551__$1;
(statearr_12622_12686[(2)] = null);

(statearr_12622_12686[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (10))){
var inst_12433 = (state_12551[(14)]);
var inst_12435 = (state_12551[(17)]);
var inst_12441 = cljs.core._nth.call(null,inst_12433,inst_12435);
var inst_12442 = cljs.core.nth.call(null,inst_12441,(0),null);
var inst_12443 = cljs.core.nth.call(null,inst_12441,(1),null);
var state_12551__$1 = (function (){var statearr_12623 = state_12551;
(statearr_12623[(26)] = inst_12442);

return statearr_12623;
})();
if(cljs.core.truth_(inst_12443)){
var statearr_12624_12687 = state_12551__$1;
(statearr_12624_12687[(1)] = (13));

} else {
var statearr_12625_12688 = state_12551__$1;
(statearr_12625_12688[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (18))){
var inst_12476 = (state_12551[(2)]);
var state_12551__$1 = state_12551;
var statearr_12626_12689 = state_12551__$1;
(statearr_12626_12689[(2)] = inst_12476);

(statearr_12626_12689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (42))){
var state_12551__$1 = state_12551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12551__$1,(45),dchan);
} else {
if((state_val_12552 === (37))){
var inst_12510 = (state_12551[(25)]);
var inst_12423 = (state_12551[(9)]);
var inst_12519 = (state_12551[(23)]);
var inst_12519__$1 = cljs.core.first.call(null,inst_12510);
var inst_12520 = cljs.core.async.put_BANG_.call(null,inst_12519__$1,inst_12423,done);
var state_12551__$1 = (function (){var statearr_12627 = state_12551;
(statearr_12627[(23)] = inst_12519__$1);

return statearr_12627;
})();
if(cljs.core.truth_(inst_12520)){
var statearr_12628_12690 = state_12551__$1;
(statearr_12628_12690[(1)] = (39));

} else {
var statearr_12629_12691 = state_12551__$1;
(statearr_12629_12691[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12552 === (8))){
var inst_12434 = (state_12551[(15)]);
var inst_12435 = (state_12551[(17)]);
var inst_12437 = (inst_12435 < inst_12434);
var inst_12438 = inst_12437;
var state_12551__$1 = state_12551;
if(cljs.core.truth_(inst_12438)){
var statearr_12630_12692 = state_12551__$1;
(statearr_12630_12692[(1)] = (10));

} else {
var statearr_12631_12693 = state_12551__$1;
(statearr_12631_12693[(1)] = (11));

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
});})(c__7402__auto___12639,cs,m,dchan,dctr,done))
;
return ((function (switch__7340__auto__,c__7402__auto___12639,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7341__auto__ = null;
var cljs$core$async$mult_$_state_machine__7341__auto____0 = (function (){
var statearr_12635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12635[(0)] = cljs$core$async$mult_$_state_machine__7341__auto__);

(statearr_12635[(1)] = (1));

return statearr_12635;
});
var cljs$core$async$mult_$_state_machine__7341__auto____1 = (function (state_12551){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_12551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e12636){if((e12636 instanceof Object)){
var ex__7344__auto__ = e12636;
var statearr_12637_12694 = state_12551;
(statearr_12637_12694[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12695 = state_12551;
state_12551 = G__12695;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7341__auto__ = function(state_12551){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7341__auto____1.call(this,state_12551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7341__auto____0;
cljs$core$async$mult_$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7341__auto____1;
return cljs$core$async$mult_$_state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___12639,cs,m,dchan,dctr,done))
})();
var state__7404__auto__ = (function (){var statearr_12638 = f__7403__auto__.call(null);
(statearr_12638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___12639);

return statearr_12638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___12639,cs,m,dchan,dctr,done))
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
var G__12697 = arguments.length;
switch (G__12697) {
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

cljs.core.async.Mix = (function (){var obj12700 = {};
return obj12700;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4519__auto__ = m;
if(and__4519__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4519__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5167__auto__ = (((m == null))?null:m);
return (function (){var or__4531__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5167__auto__)]);
if(or__4531__auto__){
return or__4531__auto__;
} else {
var or__4531__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4531__auto____$1){
return or__4531__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4519__auto__ = m;
if(and__4519__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4519__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5167__auto__ = (((m == null))?null:m);
return (function (){var or__4531__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5167__auto__)]);
if(or__4531__auto__){
return or__4531__auto__;
} else {
var or__4531__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4531__auto____$1){
return or__4531__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4519__auto__ = m;
if(and__4519__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4519__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5167__auto__ = (((m == null))?null:m);
return (function (){var or__4531__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5167__auto__)]);
if(or__4531__auto__){
return or__4531__auto__;
} else {
var or__4531__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4531__auto____$1){
return or__4531__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4519__auto__ = m;
if(and__4519__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4519__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5167__auto__ = (((m == null))?null:m);
return (function (){var or__4531__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5167__auto__)]);
if(or__4531__auto__){
return or__4531__auto__;
} else {
var or__4531__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4531__auto____$1){
return or__4531__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4519__auto__ = m;
if(and__4519__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4519__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5167__auto__ = (((m == null))?null:m);
return (function (){var or__4531__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5167__auto__)]);
if(or__4531__auto__){
return or__4531__auto__;
} else {
var or__4531__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4531__auto____$1){
return or__4531__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5571__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5571__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12705){
var map__12706 = p__12705;
var map__12706__$1 = ((cljs.core.seq_QMARK_.call(null,map__12706))?cljs.core.apply.call(null,cljs.core.hash_map,map__12706):map__12706);
var opts = map__12706__$1;
var statearr_12707_12710 = state;
(statearr_12707_12710[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__12706,map__12706__$1,opts){
return (function (val){
var statearr_12708_12711 = state;
(statearr_12708_12711[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12706,map__12706__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_12709_12712 = state;
(statearr_12709_12712[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12701){
var G__12702 = cljs.core.first.call(null,seq12701);
var seq12701__$1 = cljs.core.next.call(null,seq12701);
var G__12703 = cljs.core.first.call(null,seq12701__$1);
var seq12701__$2 = cljs.core.next.call(null,seq12701__$1);
var G__12704 = cljs.core.first.call(null,seq12701__$2);
var seq12701__$3 = cljs.core.next.call(null,seq12701__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12702,G__12703,G__12704,seq12701__$3);
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
if(typeof cljs.core.async.t12832 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12832 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12833){
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
this.meta12833 = meta12833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12834,meta12833__$1){
var self__ = this;
var _12834__$1 = this;
return (new cljs.core.async.t12832(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12833__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12832.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12834){
var self__ = this;
var _12834__$1 = this;
return self__.meta12833;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12832.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12832.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12832.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t12832.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12832.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12832.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12832.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12832.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t12832.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12833","meta12833",-351547114,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12832.cljs$lang$type = true;

cljs.core.async.t12832.cljs$lang$ctorStr = "cljs.core.async/t12832";

cljs.core.async.t12832.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t12832");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t12832 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t12832(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12833){
return (new cljs.core.async.t12832(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12833));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t12832(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7402__auto___12951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___12951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___12951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12904){
var state_val_12905 = (state_12904[(1)]);
if((state_val_12905 === (7))){
var inst_12848 = (state_12904[(7)]);
var inst_12853 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12848);
var state_12904__$1 = state_12904;
var statearr_12906_12952 = state_12904__$1;
(statearr_12906_12952[(2)] = inst_12853);

(statearr_12906_12952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (20))){
var inst_12863 = (state_12904[(8)]);
var state_12904__$1 = state_12904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12904__$1,(23),out,inst_12863);
} else {
if((state_val_12905 === (1))){
var inst_12838 = (state_12904[(9)]);
var inst_12838__$1 = calc_state.call(null);
var inst_12839 = cljs.core.seq_QMARK_.call(null,inst_12838__$1);
var state_12904__$1 = (function (){var statearr_12907 = state_12904;
(statearr_12907[(9)] = inst_12838__$1);

return statearr_12907;
})();
if(inst_12839){
var statearr_12908_12953 = state_12904__$1;
(statearr_12908_12953[(1)] = (2));

} else {
var statearr_12909_12954 = state_12904__$1;
(statearr_12909_12954[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (24))){
var inst_12856 = (state_12904[(10)]);
var inst_12848 = inst_12856;
var state_12904__$1 = (function (){var statearr_12910 = state_12904;
(statearr_12910[(7)] = inst_12848);

return statearr_12910;
})();
var statearr_12911_12955 = state_12904__$1;
(statearr_12911_12955[(2)] = null);

(statearr_12911_12955[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (4))){
var inst_12838 = (state_12904[(9)]);
var inst_12844 = (state_12904[(2)]);
var inst_12845 = cljs.core.get.call(null,inst_12844,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12846 = cljs.core.get.call(null,inst_12844,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12847 = cljs.core.get.call(null,inst_12844,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12848 = inst_12838;
var state_12904__$1 = (function (){var statearr_12912 = state_12904;
(statearr_12912[(11)] = inst_12845);

(statearr_12912[(7)] = inst_12848);

(statearr_12912[(12)] = inst_12847);

(statearr_12912[(13)] = inst_12846);

return statearr_12912;
})();
var statearr_12913_12956 = state_12904__$1;
(statearr_12913_12956[(2)] = null);

(statearr_12913_12956[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (15))){
var state_12904__$1 = state_12904;
var statearr_12914_12957 = state_12904__$1;
(statearr_12914_12957[(2)] = null);

(statearr_12914_12957[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (21))){
var inst_12856 = (state_12904[(10)]);
var inst_12848 = inst_12856;
var state_12904__$1 = (function (){var statearr_12915 = state_12904;
(statearr_12915[(7)] = inst_12848);

return statearr_12915;
})();
var statearr_12916_12958 = state_12904__$1;
(statearr_12916_12958[(2)] = null);

(statearr_12916_12958[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (13))){
var inst_12900 = (state_12904[(2)]);
var state_12904__$1 = state_12904;
var statearr_12917_12959 = state_12904__$1;
(statearr_12917_12959[(2)] = inst_12900);

(statearr_12917_12959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (22))){
var inst_12898 = (state_12904[(2)]);
var state_12904__$1 = state_12904;
var statearr_12918_12960 = state_12904__$1;
(statearr_12918_12960[(2)] = inst_12898);

(statearr_12918_12960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (6))){
var inst_12902 = (state_12904[(2)]);
var state_12904__$1 = state_12904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12904__$1,inst_12902);
} else {
if((state_val_12905 === (25))){
var state_12904__$1 = state_12904;
var statearr_12919_12961 = state_12904__$1;
(statearr_12919_12961[(2)] = null);

(statearr_12919_12961[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (17))){
var inst_12878 = (state_12904[(14)]);
var state_12904__$1 = state_12904;
var statearr_12920_12962 = state_12904__$1;
(statearr_12920_12962[(2)] = inst_12878);

(statearr_12920_12962[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (3))){
var inst_12838 = (state_12904[(9)]);
var state_12904__$1 = state_12904;
var statearr_12921_12963 = state_12904__$1;
(statearr_12921_12963[(2)] = inst_12838);

(statearr_12921_12963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (12))){
var inst_12864 = (state_12904[(15)]);
var inst_12857 = (state_12904[(16)]);
var inst_12878 = (state_12904[(14)]);
var inst_12878__$1 = inst_12857.call(null,inst_12864);
var state_12904__$1 = (function (){var statearr_12922 = state_12904;
(statearr_12922[(14)] = inst_12878__$1);

return statearr_12922;
})();
if(cljs.core.truth_(inst_12878__$1)){
var statearr_12923_12964 = state_12904__$1;
(statearr_12923_12964[(1)] = (17));

} else {
var statearr_12924_12965 = state_12904__$1;
(statearr_12924_12965[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (2))){
var inst_12838 = (state_12904[(9)]);
var inst_12841 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12838);
var state_12904__$1 = state_12904;
var statearr_12925_12966 = state_12904__$1;
(statearr_12925_12966[(2)] = inst_12841);

(statearr_12925_12966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (23))){
var inst_12889 = (state_12904[(2)]);
var state_12904__$1 = state_12904;
if(cljs.core.truth_(inst_12889)){
var statearr_12926_12967 = state_12904__$1;
(statearr_12926_12967[(1)] = (24));

} else {
var statearr_12927_12968 = state_12904__$1;
(statearr_12927_12968[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (19))){
var inst_12886 = (state_12904[(2)]);
var state_12904__$1 = state_12904;
if(cljs.core.truth_(inst_12886)){
var statearr_12928_12969 = state_12904__$1;
(statearr_12928_12969[(1)] = (20));

} else {
var statearr_12929_12970 = state_12904__$1;
(statearr_12929_12970[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (11))){
var inst_12863 = (state_12904[(8)]);
var inst_12869 = (inst_12863 == null);
var state_12904__$1 = state_12904;
if(cljs.core.truth_(inst_12869)){
var statearr_12930_12971 = state_12904__$1;
(statearr_12930_12971[(1)] = (14));

} else {
var statearr_12931_12972 = state_12904__$1;
(statearr_12931_12972[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (9))){
var inst_12856 = (state_12904[(10)]);
var inst_12856__$1 = (state_12904[(2)]);
var inst_12857 = cljs.core.get.call(null,inst_12856__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12858 = cljs.core.get.call(null,inst_12856__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12859 = cljs.core.get.call(null,inst_12856__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12904__$1 = (function (){var statearr_12932 = state_12904;
(statearr_12932[(10)] = inst_12856__$1);

(statearr_12932[(16)] = inst_12857);

(statearr_12932[(17)] = inst_12858);

return statearr_12932;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12904__$1,(10),inst_12859);
} else {
if((state_val_12905 === (5))){
var inst_12848 = (state_12904[(7)]);
var inst_12851 = cljs.core.seq_QMARK_.call(null,inst_12848);
var state_12904__$1 = state_12904;
if(inst_12851){
var statearr_12933_12973 = state_12904__$1;
(statearr_12933_12973[(1)] = (7));

} else {
var statearr_12934_12974 = state_12904__$1;
(statearr_12934_12974[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (14))){
var inst_12864 = (state_12904[(15)]);
var inst_12871 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12864);
var state_12904__$1 = state_12904;
var statearr_12935_12975 = state_12904__$1;
(statearr_12935_12975[(2)] = inst_12871);

(statearr_12935_12975[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (26))){
var inst_12894 = (state_12904[(2)]);
var state_12904__$1 = state_12904;
var statearr_12936_12976 = state_12904__$1;
(statearr_12936_12976[(2)] = inst_12894);

(statearr_12936_12976[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (16))){
var inst_12874 = (state_12904[(2)]);
var inst_12875 = calc_state.call(null);
var inst_12848 = inst_12875;
var state_12904__$1 = (function (){var statearr_12937 = state_12904;
(statearr_12937[(7)] = inst_12848);

(statearr_12937[(18)] = inst_12874);

return statearr_12937;
})();
var statearr_12938_12977 = state_12904__$1;
(statearr_12938_12977[(2)] = null);

(statearr_12938_12977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (10))){
var inst_12864 = (state_12904[(15)]);
var inst_12863 = (state_12904[(8)]);
var inst_12862 = (state_12904[(2)]);
var inst_12863__$1 = cljs.core.nth.call(null,inst_12862,(0),null);
var inst_12864__$1 = cljs.core.nth.call(null,inst_12862,(1),null);
var inst_12865 = (inst_12863__$1 == null);
var inst_12866 = cljs.core._EQ_.call(null,inst_12864__$1,change);
var inst_12867 = (inst_12865) || (inst_12866);
var state_12904__$1 = (function (){var statearr_12939 = state_12904;
(statearr_12939[(15)] = inst_12864__$1);

(statearr_12939[(8)] = inst_12863__$1);

return statearr_12939;
})();
if(cljs.core.truth_(inst_12867)){
var statearr_12940_12978 = state_12904__$1;
(statearr_12940_12978[(1)] = (11));

} else {
var statearr_12941_12979 = state_12904__$1;
(statearr_12941_12979[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (18))){
var inst_12864 = (state_12904[(15)]);
var inst_12857 = (state_12904[(16)]);
var inst_12858 = (state_12904[(17)]);
var inst_12881 = cljs.core.empty_QMARK_.call(null,inst_12857);
var inst_12882 = inst_12858.call(null,inst_12864);
var inst_12883 = cljs.core.not.call(null,inst_12882);
var inst_12884 = (inst_12881) && (inst_12883);
var state_12904__$1 = state_12904;
var statearr_12942_12980 = state_12904__$1;
(statearr_12942_12980[(2)] = inst_12884);

(statearr_12942_12980[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12905 === (8))){
var inst_12848 = (state_12904[(7)]);
var state_12904__$1 = state_12904;
var statearr_12943_12981 = state_12904__$1;
(statearr_12943_12981[(2)] = inst_12848);

(statearr_12943_12981[(1)] = (9));


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
});})(c__7402__auto___12951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7340__auto__,c__7402__auto___12951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7341__auto__ = null;
var cljs$core$async$mix_$_state_machine__7341__auto____0 = (function (){
var statearr_12947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12947[(0)] = cljs$core$async$mix_$_state_machine__7341__auto__);

(statearr_12947[(1)] = (1));

return statearr_12947;
});
var cljs$core$async$mix_$_state_machine__7341__auto____1 = (function (state_12904){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_12904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e12948){if((e12948 instanceof Object)){
var ex__7344__auto__ = e12948;
var statearr_12949_12982 = state_12904;
(statearr_12949_12982[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12983 = state_12904;
state_12904 = G__12983;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7341__auto__ = function(state_12904){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7341__auto____1.call(this,state_12904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7341__auto____0;
cljs$core$async$mix_$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7341__auto____1;
return cljs$core$async$mix_$_state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___12951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7404__auto__ = (function (){var statearr_12950 = f__7403__auto__.call(null);
(statearr_12950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___12951);

return statearr_12950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___12951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj12985 = {};
return obj12985;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4519__auto__ = p;
if(and__4519__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4519__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5167__auto__ = (((p == null))?null:p);
return (function (){var or__4531__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5167__auto__)]);
if(or__4531__auto__){
return or__4531__auto__;
} else {
var or__4531__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4531__auto____$1){
return or__4531__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4519__auto__ = p;
if(and__4519__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4519__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5167__auto__ = (((p == null))?null:p);
return (function (){var or__4531__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5167__auto__)]);
if(or__4531__auto__){
return or__4531__auto__;
} else {
var or__4531__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4531__auto____$1){
return or__4531__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__12987 = arguments.length;
switch (G__12987) {
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
if((function (){var and__4519__auto__ = p;
if(and__4519__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4519__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5167__auto__ = (((p == null))?null:p);
return (function (){var or__4531__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5167__auto__)]);
if(or__4531__auto__){
return or__4531__auto__;
} else {
var or__4531__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4531__auto____$1){
return or__4531__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4519__auto__ = p;
if(and__4519__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4519__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5167__auto__ = (((p == null))?null:p);
return (function (){var or__4531__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5167__auto__)]);
if(or__4531__auto__){
return or__4531__auto__;
} else {
var or__4531__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4531__auto____$1){
return or__4531__auto____$1;
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
var G__12991 = arguments.length;
switch (G__12991) {
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
var or__4531__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4531__auto__)){
return or__4531__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4531__auto__,mults){
return (function (p1__12989_SHARP_){
if(cljs.core.truth_(p1__12989_SHARP_.call(null,topic))){
return p1__12989_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12989_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4531__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t12992 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12992 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12993){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12993 = meta12993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12994,meta12993__$1){
var self__ = this;
var _12994__$1 = this;
return (new cljs.core.async.t12992(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12993__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t12992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12994){
var self__ = this;
var _12994__$1 = this;
return self__.meta12993;
});})(mults,ensure_mult))
;

cljs.core.async.t12992.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12992.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t12992.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t12992.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t12992.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t12992.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t12992.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t12992.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12993","meta12993",2064521037,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t12992.cljs$lang$type = true;

cljs.core.async.t12992.cljs$lang$ctorStr = "cljs.core.async/t12992";

cljs.core.async.t12992.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t12992");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t12992 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t12992(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12993){
return (new cljs.core.async.t12992(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12993));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t12992(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7402__auto___13115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___13115,mults,ensure_mult,p){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___13115,mults,ensure_mult,p){
return (function (state_13066){
var state_val_13067 = (state_13066[(1)]);
if((state_val_13067 === (7))){
var inst_13062 = (state_13066[(2)]);
var state_13066__$1 = state_13066;
var statearr_13068_13116 = state_13066__$1;
(statearr_13068_13116[(2)] = inst_13062);

(statearr_13068_13116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (20))){
var state_13066__$1 = state_13066;
var statearr_13069_13117 = state_13066__$1;
(statearr_13069_13117[(2)] = null);

(statearr_13069_13117[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (1))){
var state_13066__$1 = state_13066;
var statearr_13070_13118 = state_13066__$1;
(statearr_13070_13118[(2)] = null);

(statearr_13070_13118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (24))){
var inst_13045 = (state_13066[(7)]);
var inst_13054 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13045);
var state_13066__$1 = state_13066;
var statearr_13071_13119 = state_13066__$1;
(statearr_13071_13119[(2)] = inst_13054);

(statearr_13071_13119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (4))){
var inst_12997 = (state_13066[(8)]);
var inst_12997__$1 = (state_13066[(2)]);
var inst_12998 = (inst_12997__$1 == null);
var state_13066__$1 = (function (){var statearr_13072 = state_13066;
(statearr_13072[(8)] = inst_12997__$1);

return statearr_13072;
})();
if(cljs.core.truth_(inst_12998)){
var statearr_13073_13120 = state_13066__$1;
(statearr_13073_13120[(1)] = (5));

} else {
var statearr_13074_13121 = state_13066__$1;
(statearr_13074_13121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (15))){
var inst_13039 = (state_13066[(2)]);
var state_13066__$1 = state_13066;
var statearr_13075_13122 = state_13066__$1;
(statearr_13075_13122[(2)] = inst_13039);

(statearr_13075_13122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (21))){
var inst_13059 = (state_13066[(2)]);
var state_13066__$1 = (function (){var statearr_13076 = state_13066;
(statearr_13076[(9)] = inst_13059);

return statearr_13076;
})();
var statearr_13077_13123 = state_13066__$1;
(statearr_13077_13123[(2)] = null);

(statearr_13077_13123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (13))){
var inst_13021 = (state_13066[(10)]);
var inst_13023 = cljs.core.chunked_seq_QMARK_.call(null,inst_13021);
var state_13066__$1 = state_13066;
if(inst_13023){
var statearr_13078_13124 = state_13066__$1;
(statearr_13078_13124[(1)] = (16));

} else {
var statearr_13079_13125 = state_13066__$1;
(statearr_13079_13125[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (22))){
var inst_13051 = (state_13066[(2)]);
var state_13066__$1 = state_13066;
if(cljs.core.truth_(inst_13051)){
var statearr_13080_13126 = state_13066__$1;
(statearr_13080_13126[(1)] = (23));

} else {
var statearr_13081_13127 = state_13066__$1;
(statearr_13081_13127[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (6))){
var inst_13047 = (state_13066[(11)]);
var inst_13045 = (state_13066[(7)]);
var inst_12997 = (state_13066[(8)]);
var inst_13045__$1 = topic_fn.call(null,inst_12997);
var inst_13046 = cljs.core.deref.call(null,mults);
var inst_13047__$1 = cljs.core.get.call(null,inst_13046,inst_13045__$1);
var state_13066__$1 = (function (){var statearr_13082 = state_13066;
(statearr_13082[(11)] = inst_13047__$1);

(statearr_13082[(7)] = inst_13045__$1);

return statearr_13082;
})();
if(cljs.core.truth_(inst_13047__$1)){
var statearr_13083_13128 = state_13066__$1;
(statearr_13083_13128[(1)] = (19));

} else {
var statearr_13084_13129 = state_13066__$1;
(statearr_13084_13129[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (25))){
var inst_13056 = (state_13066[(2)]);
var state_13066__$1 = state_13066;
var statearr_13085_13130 = state_13066__$1;
(statearr_13085_13130[(2)] = inst_13056);

(statearr_13085_13130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (17))){
var inst_13021 = (state_13066[(10)]);
var inst_13030 = cljs.core.first.call(null,inst_13021);
var inst_13031 = cljs.core.async.muxch_STAR_.call(null,inst_13030);
var inst_13032 = cljs.core.async.close_BANG_.call(null,inst_13031);
var inst_13033 = cljs.core.next.call(null,inst_13021);
var inst_13007 = inst_13033;
var inst_13008 = null;
var inst_13009 = (0);
var inst_13010 = (0);
var state_13066__$1 = (function (){var statearr_13086 = state_13066;
(statearr_13086[(12)] = inst_13007);

(statearr_13086[(13)] = inst_13009);

(statearr_13086[(14)] = inst_13008);

(statearr_13086[(15)] = inst_13032);

(statearr_13086[(16)] = inst_13010);

return statearr_13086;
})();
var statearr_13087_13131 = state_13066__$1;
(statearr_13087_13131[(2)] = null);

(statearr_13087_13131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (3))){
var inst_13064 = (state_13066[(2)]);
var state_13066__$1 = state_13066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13066__$1,inst_13064);
} else {
if((state_val_13067 === (12))){
var inst_13041 = (state_13066[(2)]);
var state_13066__$1 = state_13066;
var statearr_13088_13132 = state_13066__$1;
(statearr_13088_13132[(2)] = inst_13041);

(statearr_13088_13132[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (2))){
var state_13066__$1 = state_13066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13066__$1,(4),ch);
} else {
if((state_val_13067 === (23))){
var state_13066__$1 = state_13066;
var statearr_13089_13133 = state_13066__$1;
(statearr_13089_13133[(2)] = null);

(statearr_13089_13133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (19))){
var inst_13047 = (state_13066[(11)]);
var inst_12997 = (state_13066[(8)]);
var inst_13049 = cljs.core.async.muxch_STAR_.call(null,inst_13047);
var state_13066__$1 = state_13066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13066__$1,(22),inst_13049,inst_12997);
} else {
if((state_val_13067 === (11))){
var inst_13007 = (state_13066[(12)]);
var inst_13021 = (state_13066[(10)]);
var inst_13021__$1 = cljs.core.seq.call(null,inst_13007);
var state_13066__$1 = (function (){var statearr_13090 = state_13066;
(statearr_13090[(10)] = inst_13021__$1);

return statearr_13090;
})();
if(inst_13021__$1){
var statearr_13091_13134 = state_13066__$1;
(statearr_13091_13134[(1)] = (13));

} else {
var statearr_13092_13135 = state_13066__$1;
(statearr_13092_13135[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (9))){
var inst_13043 = (state_13066[(2)]);
var state_13066__$1 = state_13066;
var statearr_13093_13136 = state_13066__$1;
(statearr_13093_13136[(2)] = inst_13043);

(statearr_13093_13136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (5))){
var inst_13004 = cljs.core.deref.call(null,mults);
var inst_13005 = cljs.core.vals.call(null,inst_13004);
var inst_13006 = cljs.core.seq.call(null,inst_13005);
var inst_13007 = inst_13006;
var inst_13008 = null;
var inst_13009 = (0);
var inst_13010 = (0);
var state_13066__$1 = (function (){var statearr_13094 = state_13066;
(statearr_13094[(12)] = inst_13007);

(statearr_13094[(13)] = inst_13009);

(statearr_13094[(14)] = inst_13008);

(statearr_13094[(16)] = inst_13010);

return statearr_13094;
})();
var statearr_13095_13137 = state_13066__$1;
(statearr_13095_13137[(2)] = null);

(statearr_13095_13137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (14))){
var state_13066__$1 = state_13066;
var statearr_13099_13138 = state_13066__$1;
(statearr_13099_13138[(2)] = null);

(statearr_13099_13138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (16))){
var inst_13021 = (state_13066[(10)]);
var inst_13025 = cljs.core.chunk_first.call(null,inst_13021);
var inst_13026 = cljs.core.chunk_rest.call(null,inst_13021);
var inst_13027 = cljs.core.count.call(null,inst_13025);
var inst_13007 = inst_13026;
var inst_13008 = inst_13025;
var inst_13009 = inst_13027;
var inst_13010 = (0);
var state_13066__$1 = (function (){var statearr_13100 = state_13066;
(statearr_13100[(12)] = inst_13007);

(statearr_13100[(13)] = inst_13009);

(statearr_13100[(14)] = inst_13008);

(statearr_13100[(16)] = inst_13010);

return statearr_13100;
})();
var statearr_13101_13139 = state_13066__$1;
(statearr_13101_13139[(2)] = null);

(statearr_13101_13139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (10))){
var inst_13007 = (state_13066[(12)]);
var inst_13009 = (state_13066[(13)]);
var inst_13008 = (state_13066[(14)]);
var inst_13010 = (state_13066[(16)]);
var inst_13015 = cljs.core._nth.call(null,inst_13008,inst_13010);
var inst_13016 = cljs.core.async.muxch_STAR_.call(null,inst_13015);
var inst_13017 = cljs.core.async.close_BANG_.call(null,inst_13016);
var inst_13018 = (inst_13010 + (1));
var tmp13096 = inst_13007;
var tmp13097 = inst_13009;
var tmp13098 = inst_13008;
var inst_13007__$1 = tmp13096;
var inst_13008__$1 = tmp13098;
var inst_13009__$1 = tmp13097;
var inst_13010__$1 = inst_13018;
var state_13066__$1 = (function (){var statearr_13102 = state_13066;
(statearr_13102[(12)] = inst_13007__$1);

(statearr_13102[(13)] = inst_13009__$1);

(statearr_13102[(14)] = inst_13008__$1);

(statearr_13102[(17)] = inst_13017);

(statearr_13102[(16)] = inst_13010__$1);

return statearr_13102;
})();
var statearr_13103_13140 = state_13066__$1;
(statearr_13103_13140[(2)] = null);

(statearr_13103_13140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (18))){
var inst_13036 = (state_13066[(2)]);
var state_13066__$1 = state_13066;
var statearr_13104_13141 = state_13066__$1;
(statearr_13104_13141[(2)] = inst_13036);

(statearr_13104_13141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13067 === (8))){
var inst_13009 = (state_13066[(13)]);
var inst_13010 = (state_13066[(16)]);
var inst_13012 = (inst_13010 < inst_13009);
var inst_13013 = inst_13012;
var state_13066__$1 = state_13066;
if(cljs.core.truth_(inst_13013)){
var statearr_13105_13142 = state_13066__$1;
(statearr_13105_13142[(1)] = (10));

} else {
var statearr_13106_13143 = state_13066__$1;
(statearr_13106_13143[(1)] = (11));

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
});})(c__7402__auto___13115,mults,ensure_mult,p))
;
return ((function (switch__7340__auto__,c__7402__auto___13115,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7341__auto__ = null;
var cljs$core$async$state_machine__7341__auto____0 = (function (){
var statearr_13110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13110[(0)] = cljs$core$async$state_machine__7341__auto__);

(statearr_13110[(1)] = (1));

return statearr_13110;
});
var cljs$core$async$state_machine__7341__auto____1 = (function (state_13066){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_13066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e13111){if((e13111 instanceof Object)){
var ex__7344__auto__ = e13111;
var statearr_13112_13144 = state_13066;
(statearr_13112_13144[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13145 = state_13066;
state_13066 = G__13145;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$state_machine__7341__auto__ = function(state_13066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7341__auto____1.call(this,state_13066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7341__auto____0;
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7341__auto____1;
return cljs$core$async$state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___13115,mults,ensure_mult,p))
})();
var state__7404__auto__ = (function (){var statearr_13113 = f__7403__auto__.call(null);
(statearr_13113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___13115);

return statearr_13113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___13115,mults,ensure_mult,p))
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
var G__13147 = arguments.length;
switch (G__13147) {
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
var G__13150 = arguments.length;
switch (G__13150) {
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
var G__13153 = arguments.length;
switch (G__13153) {
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
var c__7402__auto___13223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___13223,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___13223,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13192){
var state_val_13193 = (state_13192[(1)]);
if((state_val_13193 === (7))){
var state_13192__$1 = state_13192;
var statearr_13194_13224 = state_13192__$1;
(statearr_13194_13224[(2)] = null);

(statearr_13194_13224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13193 === (1))){
var state_13192__$1 = state_13192;
var statearr_13195_13225 = state_13192__$1;
(statearr_13195_13225[(2)] = null);

(statearr_13195_13225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13193 === (4))){
var inst_13156 = (state_13192[(7)]);
var inst_13158 = (inst_13156 < cnt);
var state_13192__$1 = state_13192;
if(cljs.core.truth_(inst_13158)){
var statearr_13196_13226 = state_13192__$1;
(statearr_13196_13226[(1)] = (6));

} else {
var statearr_13197_13227 = state_13192__$1;
(statearr_13197_13227[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13193 === (15))){
var inst_13188 = (state_13192[(2)]);
var state_13192__$1 = state_13192;
var statearr_13198_13228 = state_13192__$1;
(statearr_13198_13228[(2)] = inst_13188);

(statearr_13198_13228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13193 === (13))){
var inst_13181 = cljs.core.async.close_BANG_.call(null,out);
var state_13192__$1 = state_13192;
var statearr_13199_13229 = state_13192__$1;
(statearr_13199_13229[(2)] = inst_13181);

(statearr_13199_13229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13193 === (6))){
var state_13192__$1 = state_13192;
var statearr_13200_13230 = state_13192__$1;
(statearr_13200_13230[(2)] = null);

(statearr_13200_13230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13193 === (3))){
var inst_13190 = (state_13192[(2)]);
var state_13192__$1 = state_13192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13192__$1,inst_13190);
} else {
if((state_val_13193 === (12))){
var inst_13178 = (state_13192[(8)]);
var inst_13178__$1 = (state_13192[(2)]);
var inst_13179 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13178__$1);
var state_13192__$1 = (function (){var statearr_13201 = state_13192;
(statearr_13201[(8)] = inst_13178__$1);

return statearr_13201;
})();
if(cljs.core.truth_(inst_13179)){
var statearr_13202_13231 = state_13192__$1;
(statearr_13202_13231[(1)] = (13));

} else {
var statearr_13203_13232 = state_13192__$1;
(statearr_13203_13232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13193 === (2))){
var inst_13155 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13156 = (0);
var state_13192__$1 = (function (){var statearr_13204 = state_13192;
(statearr_13204[(7)] = inst_13156);

(statearr_13204[(9)] = inst_13155);

return statearr_13204;
})();
var statearr_13205_13233 = state_13192__$1;
(statearr_13205_13233[(2)] = null);

(statearr_13205_13233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13193 === (11))){
var inst_13156 = (state_13192[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13192,(10),Object,null,(9));
var inst_13165 = chs__$1.call(null,inst_13156);
var inst_13166 = done.call(null,inst_13156);
var inst_13167 = cljs.core.async.take_BANG_.call(null,inst_13165,inst_13166);
var state_13192__$1 = state_13192;
var statearr_13206_13234 = state_13192__$1;
(statearr_13206_13234[(2)] = inst_13167);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13192__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13193 === (9))){
var inst_13156 = (state_13192[(7)]);
var inst_13169 = (state_13192[(2)]);
var inst_13170 = (inst_13156 + (1));
var inst_13156__$1 = inst_13170;
var state_13192__$1 = (function (){var statearr_13207 = state_13192;
(statearr_13207[(7)] = inst_13156__$1);

(statearr_13207[(10)] = inst_13169);

return statearr_13207;
})();
var statearr_13208_13235 = state_13192__$1;
(statearr_13208_13235[(2)] = null);

(statearr_13208_13235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13193 === (5))){
var inst_13176 = (state_13192[(2)]);
var state_13192__$1 = (function (){var statearr_13209 = state_13192;
(statearr_13209[(11)] = inst_13176);

return statearr_13209;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13192__$1,(12),dchan);
} else {
if((state_val_13193 === (14))){
var inst_13178 = (state_13192[(8)]);
var inst_13183 = cljs.core.apply.call(null,f,inst_13178);
var state_13192__$1 = state_13192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13192__$1,(16),out,inst_13183);
} else {
if((state_val_13193 === (16))){
var inst_13185 = (state_13192[(2)]);
var state_13192__$1 = (function (){var statearr_13210 = state_13192;
(statearr_13210[(12)] = inst_13185);

return statearr_13210;
})();
var statearr_13211_13236 = state_13192__$1;
(statearr_13211_13236[(2)] = null);

(statearr_13211_13236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13193 === (10))){
var inst_13160 = (state_13192[(2)]);
var inst_13161 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13192__$1 = (function (){var statearr_13212 = state_13192;
(statearr_13212[(13)] = inst_13160);

return statearr_13212;
})();
var statearr_13213_13237 = state_13192__$1;
(statearr_13213_13237[(2)] = inst_13161);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13192__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13193 === (8))){
var inst_13174 = (state_13192[(2)]);
var state_13192__$1 = state_13192;
var statearr_13214_13238 = state_13192__$1;
(statearr_13214_13238[(2)] = inst_13174);

(statearr_13214_13238[(1)] = (5));


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
});})(c__7402__auto___13223,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7340__auto__,c__7402__auto___13223,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7341__auto__ = null;
var cljs$core$async$state_machine__7341__auto____0 = (function (){
var statearr_13218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13218[(0)] = cljs$core$async$state_machine__7341__auto__);

(statearr_13218[(1)] = (1));

return statearr_13218;
});
var cljs$core$async$state_machine__7341__auto____1 = (function (state_13192){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_13192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e13219){if((e13219 instanceof Object)){
var ex__7344__auto__ = e13219;
var statearr_13220_13239 = state_13192;
(statearr_13220_13239[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13240 = state_13192;
state_13192 = G__13240;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$state_machine__7341__auto__ = function(state_13192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7341__auto____1.call(this,state_13192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7341__auto____0;
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7341__auto____1;
return cljs$core$async$state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___13223,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7404__auto__ = (function (){var statearr_13221 = f__7403__auto__.call(null);
(statearr_13221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___13223);

return statearr_13221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___13223,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__13243 = arguments.length;
switch (G__13243) {
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
var c__7402__auto___13298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___13298,out){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___13298,out){
return (function (state_13273){
var state_val_13274 = (state_13273[(1)]);
if((state_val_13274 === (7))){
var inst_13252 = (state_13273[(7)]);
var inst_13253 = (state_13273[(8)]);
var inst_13252__$1 = (state_13273[(2)]);
var inst_13253__$1 = cljs.core.nth.call(null,inst_13252__$1,(0),null);
var inst_13254 = cljs.core.nth.call(null,inst_13252__$1,(1),null);
var inst_13255 = (inst_13253__$1 == null);
var state_13273__$1 = (function (){var statearr_13275 = state_13273;
(statearr_13275[(7)] = inst_13252__$1);

(statearr_13275[(8)] = inst_13253__$1);

(statearr_13275[(9)] = inst_13254);

return statearr_13275;
})();
if(cljs.core.truth_(inst_13255)){
var statearr_13276_13299 = state_13273__$1;
(statearr_13276_13299[(1)] = (8));

} else {
var statearr_13277_13300 = state_13273__$1;
(statearr_13277_13300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13274 === (1))){
var inst_13244 = cljs.core.vec.call(null,chs);
var inst_13245 = inst_13244;
var state_13273__$1 = (function (){var statearr_13278 = state_13273;
(statearr_13278[(10)] = inst_13245);

return statearr_13278;
})();
var statearr_13279_13301 = state_13273__$1;
(statearr_13279_13301[(2)] = null);

(statearr_13279_13301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13274 === (4))){
var inst_13245 = (state_13273[(10)]);
var state_13273__$1 = state_13273;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13273__$1,(7),inst_13245);
} else {
if((state_val_13274 === (6))){
var inst_13269 = (state_13273[(2)]);
var state_13273__$1 = state_13273;
var statearr_13280_13302 = state_13273__$1;
(statearr_13280_13302[(2)] = inst_13269);

(statearr_13280_13302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13274 === (3))){
var inst_13271 = (state_13273[(2)]);
var state_13273__$1 = state_13273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13273__$1,inst_13271);
} else {
if((state_val_13274 === (2))){
var inst_13245 = (state_13273[(10)]);
var inst_13247 = cljs.core.count.call(null,inst_13245);
var inst_13248 = (inst_13247 > (0));
var state_13273__$1 = state_13273;
if(cljs.core.truth_(inst_13248)){
var statearr_13282_13303 = state_13273__$1;
(statearr_13282_13303[(1)] = (4));

} else {
var statearr_13283_13304 = state_13273__$1;
(statearr_13283_13304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13274 === (11))){
var inst_13245 = (state_13273[(10)]);
var inst_13262 = (state_13273[(2)]);
var tmp13281 = inst_13245;
var inst_13245__$1 = tmp13281;
var state_13273__$1 = (function (){var statearr_13284 = state_13273;
(statearr_13284[(11)] = inst_13262);

(statearr_13284[(10)] = inst_13245__$1);

return statearr_13284;
})();
var statearr_13285_13305 = state_13273__$1;
(statearr_13285_13305[(2)] = null);

(statearr_13285_13305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13274 === (9))){
var inst_13253 = (state_13273[(8)]);
var state_13273__$1 = state_13273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13273__$1,(11),out,inst_13253);
} else {
if((state_val_13274 === (5))){
var inst_13267 = cljs.core.async.close_BANG_.call(null,out);
var state_13273__$1 = state_13273;
var statearr_13286_13306 = state_13273__$1;
(statearr_13286_13306[(2)] = inst_13267);

(statearr_13286_13306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13274 === (10))){
var inst_13265 = (state_13273[(2)]);
var state_13273__$1 = state_13273;
var statearr_13287_13307 = state_13273__$1;
(statearr_13287_13307[(2)] = inst_13265);

(statearr_13287_13307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13274 === (8))){
var inst_13252 = (state_13273[(7)]);
var inst_13253 = (state_13273[(8)]);
var inst_13254 = (state_13273[(9)]);
var inst_13245 = (state_13273[(10)]);
var inst_13257 = (function (){var cs = inst_13245;
var vec__13250 = inst_13252;
var v = inst_13253;
var c = inst_13254;
return ((function (cs,vec__13250,v,c,inst_13252,inst_13253,inst_13254,inst_13245,state_val_13274,c__7402__auto___13298,out){
return (function (p1__13241_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13241_SHARP_);
});
;})(cs,vec__13250,v,c,inst_13252,inst_13253,inst_13254,inst_13245,state_val_13274,c__7402__auto___13298,out))
})();
var inst_13258 = cljs.core.filterv.call(null,inst_13257,inst_13245);
var inst_13245__$1 = inst_13258;
var state_13273__$1 = (function (){var statearr_13288 = state_13273;
(statearr_13288[(10)] = inst_13245__$1);

return statearr_13288;
})();
var statearr_13289_13308 = state_13273__$1;
(statearr_13289_13308[(2)] = null);

(statearr_13289_13308[(1)] = (2));


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
});})(c__7402__auto___13298,out))
;
return ((function (switch__7340__auto__,c__7402__auto___13298,out){
return (function() {
var cljs$core$async$state_machine__7341__auto__ = null;
var cljs$core$async$state_machine__7341__auto____0 = (function (){
var statearr_13293 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13293[(0)] = cljs$core$async$state_machine__7341__auto__);

(statearr_13293[(1)] = (1));

return statearr_13293;
});
var cljs$core$async$state_machine__7341__auto____1 = (function (state_13273){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_13273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e13294){if((e13294 instanceof Object)){
var ex__7344__auto__ = e13294;
var statearr_13295_13309 = state_13273;
(statearr_13295_13309[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13310 = state_13273;
state_13273 = G__13310;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$state_machine__7341__auto__ = function(state_13273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7341__auto____1.call(this,state_13273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7341__auto____0;
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7341__auto____1;
return cljs$core$async$state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___13298,out))
})();
var state__7404__auto__ = (function (){var statearr_13296 = f__7403__auto__.call(null);
(statearr_13296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___13298);

return statearr_13296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___13298,out))
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
var G__13312 = arguments.length;
switch (G__13312) {
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
var c__7402__auto___13360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___13360,out){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___13360,out){
return (function (state_13336){
var state_val_13337 = (state_13336[(1)]);
if((state_val_13337 === (7))){
var inst_13318 = (state_13336[(7)]);
var inst_13318__$1 = (state_13336[(2)]);
var inst_13319 = (inst_13318__$1 == null);
var inst_13320 = cljs.core.not.call(null,inst_13319);
var state_13336__$1 = (function (){var statearr_13338 = state_13336;
(statearr_13338[(7)] = inst_13318__$1);

return statearr_13338;
})();
if(inst_13320){
var statearr_13339_13361 = state_13336__$1;
(statearr_13339_13361[(1)] = (8));

} else {
var statearr_13340_13362 = state_13336__$1;
(statearr_13340_13362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13337 === (1))){
var inst_13313 = (0);
var state_13336__$1 = (function (){var statearr_13341 = state_13336;
(statearr_13341[(8)] = inst_13313);

return statearr_13341;
})();
var statearr_13342_13363 = state_13336__$1;
(statearr_13342_13363[(2)] = null);

(statearr_13342_13363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13337 === (4))){
var state_13336__$1 = state_13336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13336__$1,(7),ch);
} else {
if((state_val_13337 === (6))){
var inst_13331 = (state_13336[(2)]);
var state_13336__$1 = state_13336;
var statearr_13343_13364 = state_13336__$1;
(statearr_13343_13364[(2)] = inst_13331);

(statearr_13343_13364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13337 === (3))){
var inst_13333 = (state_13336[(2)]);
var inst_13334 = cljs.core.async.close_BANG_.call(null,out);
var state_13336__$1 = (function (){var statearr_13344 = state_13336;
(statearr_13344[(9)] = inst_13333);

return statearr_13344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13336__$1,inst_13334);
} else {
if((state_val_13337 === (2))){
var inst_13313 = (state_13336[(8)]);
var inst_13315 = (inst_13313 < n);
var state_13336__$1 = state_13336;
if(cljs.core.truth_(inst_13315)){
var statearr_13345_13365 = state_13336__$1;
(statearr_13345_13365[(1)] = (4));

} else {
var statearr_13346_13366 = state_13336__$1;
(statearr_13346_13366[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13337 === (11))){
var inst_13313 = (state_13336[(8)]);
var inst_13323 = (state_13336[(2)]);
var inst_13324 = (inst_13313 + (1));
var inst_13313__$1 = inst_13324;
var state_13336__$1 = (function (){var statearr_13347 = state_13336;
(statearr_13347[(8)] = inst_13313__$1);

(statearr_13347[(10)] = inst_13323);

return statearr_13347;
})();
var statearr_13348_13367 = state_13336__$1;
(statearr_13348_13367[(2)] = null);

(statearr_13348_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13337 === (9))){
var state_13336__$1 = state_13336;
var statearr_13349_13368 = state_13336__$1;
(statearr_13349_13368[(2)] = null);

(statearr_13349_13368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13337 === (5))){
var state_13336__$1 = state_13336;
var statearr_13350_13369 = state_13336__$1;
(statearr_13350_13369[(2)] = null);

(statearr_13350_13369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13337 === (10))){
var inst_13328 = (state_13336[(2)]);
var state_13336__$1 = state_13336;
var statearr_13351_13370 = state_13336__$1;
(statearr_13351_13370[(2)] = inst_13328);

(statearr_13351_13370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13337 === (8))){
var inst_13318 = (state_13336[(7)]);
var state_13336__$1 = state_13336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13336__$1,(11),out,inst_13318);
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
});})(c__7402__auto___13360,out))
;
return ((function (switch__7340__auto__,c__7402__auto___13360,out){
return (function() {
var cljs$core$async$state_machine__7341__auto__ = null;
var cljs$core$async$state_machine__7341__auto____0 = (function (){
var statearr_13355 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13355[(0)] = cljs$core$async$state_machine__7341__auto__);

(statearr_13355[(1)] = (1));

return statearr_13355;
});
var cljs$core$async$state_machine__7341__auto____1 = (function (state_13336){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_13336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e13356){if((e13356 instanceof Object)){
var ex__7344__auto__ = e13356;
var statearr_13357_13371 = state_13336;
(statearr_13357_13371[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13372 = state_13336;
state_13336 = G__13372;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$state_machine__7341__auto__ = function(state_13336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7341__auto____1.call(this,state_13336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7341__auto____0;
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7341__auto____1;
return cljs$core$async$state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___13360,out))
})();
var state__7404__auto__ = (function (){var statearr_13358 = f__7403__auto__.call(null);
(statearr_13358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___13360);

return statearr_13358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___13360,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t13380 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13380 = (function (map_LT_,f,ch,meta13381){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13381 = meta13381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13382,meta13381__$1){
var self__ = this;
var _13382__$1 = this;
return (new cljs.core.async.t13380(self__.map_LT_,self__.f,self__.ch,meta13381__$1));
});

cljs.core.async.t13380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13382){
var self__ = this;
var _13382__$1 = this;
return self__.meta13381;
});

cljs.core.async.t13380.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13380.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13380.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t13383 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13383 = (function (map_LT_,f,ch,meta13381,_,fn1,meta13384){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13381 = meta13381;
this._ = _;
this.fn1 = fn1;
this.meta13384 = meta13384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13385,meta13384__$1){
var self__ = this;
var _13385__$1 = this;
return (new cljs.core.async.t13383(self__.map_LT_,self__.f,self__.ch,self__.meta13381,self__._,self__.fn1,meta13384__$1));
});})(___$1))
;

cljs.core.async.t13383.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13385){
var self__ = this;
var _13385__$1 = this;
return self__.meta13384;
});})(___$1))
;

cljs.core.async.t13383.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13383.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t13383.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13373_SHARP_){
return f1.call(null,(((p1__13373_SHARP_ == null))?null:self__.f.call(null,p1__13373_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t13383.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13381","meta13381",1876241020,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13384","meta13384",1734047985,null)], null);
});})(___$1))
;

cljs.core.async.t13383.cljs$lang$type = true;

cljs.core.async.t13383.cljs$lang$ctorStr = "cljs.core.async/t13383";

cljs.core.async.t13383.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t13383");
});})(___$1))
;

cljs.core.async.__GT_t13383 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t13383(map_LT___$1,f__$1,ch__$1,meta13381__$1,___$2,fn1__$1,meta13384){
return (new cljs.core.async.t13383(map_LT___$1,f__$1,ch__$1,meta13381__$1,___$2,fn1__$1,meta13384));
});})(___$1))
;

}

return (new cljs.core.async.t13383(self__.map_LT_,self__.f,self__.ch,self__.meta13381,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4519__auto__ = ret;
if(cljs.core.truth_(and__4519__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4519__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t13380.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t13380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13381","meta13381",1876241020,null)], null);
});

cljs.core.async.t13380.cljs$lang$type = true;

cljs.core.async.t13380.cljs$lang$ctorStr = "cljs.core.async/t13380";

cljs.core.async.t13380.cljs$lang$ctorPrWriter = (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t13380");
});

cljs.core.async.__GT_t13380 = (function cljs$core$async$map_LT__$___GT_t13380(map_LT___$1,f__$1,ch__$1,meta13381){
return (new cljs.core.async.t13380(map_LT___$1,f__$1,ch__$1,meta13381));
});

}

return (new cljs.core.async.t13380(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t13389 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13389 = (function (map_GT_,f,ch,meta13390){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta13390 = meta13390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13391,meta13390__$1){
var self__ = this;
var _13391__$1 = this;
return (new cljs.core.async.t13389(self__.map_GT_,self__.f,self__.ch,meta13390__$1));
});

cljs.core.async.t13389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13391){
var self__ = this;
var _13391__$1 = this;
return self__.meta13390;
});

cljs.core.async.t13389.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13389.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13389.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13389.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13389.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13389.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t13389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13390","meta13390",1029313090,null)], null);
});

cljs.core.async.t13389.cljs$lang$type = true;

cljs.core.async.t13389.cljs$lang$ctorStr = "cljs.core.async/t13389";

cljs.core.async.t13389.cljs$lang$ctorPrWriter = (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t13389");
});

cljs.core.async.__GT_t13389 = (function cljs$core$async$map_GT__$___GT_t13389(map_GT___$1,f__$1,ch__$1,meta13390){
return (new cljs.core.async.t13389(map_GT___$1,f__$1,ch__$1,meta13390));
});

}

return (new cljs.core.async.t13389(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t13395 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13395 = (function (filter_GT_,p,ch,meta13396){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta13396 = meta13396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13397,meta13396__$1){
var self__ = this;
var _13397__$1 = this;
return (new cljs.core.async.t13395(self__.filter_GT_,self__.p,self__.ch,meta13396__$1));
});

cljs.core.async.t13395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13397){
var self__ = this;
var _13397__$1 = this;
return self__.meta13396;
});

cljs.core.async.t13395.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13395.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13395.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13395.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13395.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13395.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13395.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t13395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13396","meta13396",27818995,null)], null);
});

cljs.core.async.t13395.cljs$lang$type = true;

cljs.core.async.t13395.cljs$lang$ctorStr = "cljs.core.async/t13395";

cljs.core.async.t13395.cljs$lang$ctorPrWriter = (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t13395");
});

cljs.core.async.__GT_t13395 = (function cljs$core$async$filter_GT__$___GT_t13395(filter_GT___$1,p__$1,ch__$1,meta13396){
return (new cljs.core.async.t13395(filter_GT___$1,p__$1,ch__$1,meta13396));
});

}

return (new cljs.core.async.t13395(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13399 = arguments.length;
switch (G__13399) {
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
var c__7402__auto___13442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___13442,out){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___13442,out){
return (function (state_13420){
var state_val_13421 = (state_13420[(1)]);
if((state_val_13421 === (7))){
var inst_13416 = (state_13420[(2)]);
var state_13420__$1 = state_13420;
var statearr_13422_13443 = state_13420__$1;
(statearr_13422_13443[(2)] = inst_13416);

(statearr_13422_13443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (1))){
var state_13420__$1 = state_13420;
var statearr_13423_13444 = state_13420__$1;
(statearr_13423_13444[(2)] = null);

(statearr_13423_13444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (4))){
var inst_13402 = (state_13420[(7)]);
var inst_13402__$1 = (state_13420[(2)]);
var inst_13403 = (inst_13402__$1 == null);
var state_13420__$1 = (function (){var statearr_13424 = state_13420;
(statearr_13424[(7)] = inst_13402__$1);

return statearr_13424;
})();
if(cljs.core.truth_(inst_13403)){
var statearr_13425_13445 = state_13420__$1;
(statearr_13425_13445[(1)] = (5));

} else {
var statearr_13426_13446 = state_13420__$1;
(statearr_13426_13446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (6))){
var inst_13402 = (state_13420[(7)]);
var inst_13407 = p.call(null,inst_13402);
var state_13420__$1 = state_13420;
if(cljs.core.truth_(inst_13407)){
var statearr_13427_13447 = state_13420__$1;
(statearr_13427_13447[(1)] = (8));

} else {
var statearr_13428_13448 = state_13420__$1;
(statearr_13428_13448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (3))){
var inst_13418 = (state_13420[(2)]);
var state_13420__$1 = state_13420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13420__$1,inst_13418);
} else {
if((state_val_13421 === (2))){
var state_13420__$1 = state_13420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13420__$1,(4),ch);
} else {
if((state_val_13421 === (11))){
var inst_13410 = (state_13420[(2)]);
var state_13420__$1 = state_13420;
var statearr_13429_13449 = state_13420__$1;
(statearr_13429_13449[(2)] = inst_13410);

(statearr_13429_13449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (9))){
var state_13420__$1 = state_13420;
var statearr_13430_13450 = state_13420__$1;
(statearr_13430_13450[(2)] = null);

(statearr_13430_13450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (5))){
var inst_13405 = cljs.core.async.close_BANG_.call(null,out);
var state_13420__$1 = state_13420;
var statearr_13431_13451 = state_13420__$1;
(statearr_13431_13451[(2)] = inst_13405);

(statearr_13431_13451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (10))){
var inst_13413 = (state_13420[(2)]);
var state_13420__$1 = (function (){var statearr_13432 = state_13420;
(statearr_13432[(8)] = inst_13413);

return statearr_13432;
})();
var statearr_13433_13452 = state_13420__$1;
(statearr_13433_13452[(2)] = null);

(statearr_13433_13452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (8))){
var inst_13402 = (state_13420[(7)]);
var state_13420__$1 = state_13420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13420__$1,(11),out,inst_13402);
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
});})(c__7402__auto___13442,out))
;
return ((function (switch__7340__auto__,c__7402__auto___13442,out){
return (function() {
var cljs$core$async$state_machine__7341__auto__ = null;
var cljs$core$async$state_machine__7341__auto____0 = (function (){
var statearr_13437 = [null,null,null,null,null,null,null,null,null];
(statearr_13437[(0)] = cljs$core$async$state_machine__7341__auto__);

(statearr_13437[(1)] = (1));

return statearr_13437;
});
var cljs$core$async$state_machine__7341__auto____1 = (function (state_13420){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_13420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e13438){if((e13438 instanceof Object)){
var ex__7344__auto__ = e13438;
var statearr_13439_13453 = state_13420;
(statearr_13439_13453[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13454 = state_13420;
state_13420 = G__13454;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$state_machine__7341__auto__ = function(state_13420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7341__auto____1.call(this,state_13420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7341__auto____0;
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7341__auto____1;
return cljs$core$async$state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___13442,out))
})();
var state__7404__auto__ = (function (){var statearr_13440 = f__7403__auto__.call(null);
(statearr_13440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___13442);

return statearr_13440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___13442,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__13456 = arguments.length;
switch (G__13456) {
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
var c__7402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto__){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto__){
return (function (state_13623){
var state_val_13624 = (state_13623[(1)]);
if((state_val_13624 === (7))){
var inst_13619 = (state_13623[(2)]);
var state_13623__$1 = state_13623;
var statearr_13625_13666 = state_13623__$1;
(statearr_13625_13666[(2)] = inst_13619);

(statearr_13625_13666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (20))){
var inst_13589 = (state_13623[(7)]);
var inst_13600 = (state_13623[(2)]);
var inst_13601 = cljs.core.next.call(null,inst_13589);
var inst_13575 = inst_13601;
var inst_13576 = null;
var inst_13577 = (0);
var inst_13578 = (0);
var state_13623__$1 = (function (){var statearr_13626 = state_13623;
(statearr_13626[(8)] = inst_13577);

(statearr_13626[(9)] = inst_13576);

(statearr_13626[(10)] = inst_13575);

(statearr_13626[(11)] = inst_13600);

(statearr_13626[(12)] = inst_13578);

return statearr_13626;
})();
var statearr_13627_13667 = state_13623__$1;
(statearr_13627_13667[(2)] = null);

(statearr_13627_13667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (1))){
var state_13623__$1 = state_13623;
var statearr_13628_13668 = state_13623__$1;
(statearr_13628_13668[(2)] = null);

(statearr_13628_13668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (4))){
var inst_13564 = (state_13623[(13)]);
var inst_13564__$1 = (state_13623[(2)]);
var inst_13565 = (inst_13564__$1 == null);
var state_13623__$1 = (function (){var statearr_13629 = state_13623;
(statearr_13629[(13)] = inst_13564__$1);

return statearr_13629;
})();
if(cljs.core.truth_(inst_13565)){
var statearr_13630_13669 = state_13623__$1;
(statearr_13630_13669[(1)] = (5));

} else {
var statearr_13631_13670 = state_13623__$1;
(statearr_13631_13670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (15))){
var state_13623__$1 = state_13623;
var statearr_13635_13671 = state_13623__$1;
(statearr_13635_13671[(2)] = null);

(statearr_13635_13671[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (21))){
var state_13623__$1 = state_13623;
var statearr_13636_13672 = state_13623__$1;
(statearr_13636_13672[(2)] = null);

(statearr_13636_13672[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (13))){
var inst_13577 = (state_13623[(8)]);
var inst_13576 = (state_13623[(9)]);
var inst_13575 = (state_13623[(10)]);
var inst_13578 = (state_13623[(12)]);
var inst_13585 = (state_13623[(2)]);
var inst_13586 = (inst_13578 + (1));
var tmp13632 = inst_13577;
var tmp13633 = inst_13576;
var tmp13634 = inst_13575;
var inst_13575__$1 = tmp13634;
var inst_13576__$1 = tmp13633;
var inst_13577__$1 = tmp13632;
var inst_13578__$1 = inst_13586;
var state_13623__$1 = (function (){var statearr_13637 = state_13623;
(statearr_13637[(8)] = inst_13577__$1);

(statearr_13637[(14)] = inst_13585);

(statearr_13637[(9)] = inst_13576__$1);

(statearr_13637[(10)] = inst_13575__$1);

(statearr_13637[(12)] = inst_13578__$1);

return statearr_13637;
})();
var statearr_13638_13673 = state_13623__$1;
(statearr_13638_13673[(2)] = null);

(statearr_13638_13673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (22))){
var state_13623__$1 = state_13623;
var statearr_13639_13674 = state_13623__$1;
(statearr_13639_13674[(2)] = null);

(statearr_13639_13674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (6))){
var inst_13564 = (state_13623[(13)]);
var inst_13573 = f.call(null,inst_13564);
var inst_13574 = cljs.core.seq.call(null,inst_13573);
var inst_13575 = inst_13574;
var inst_13576 = null;
var inst_13577 = (0);
var inst_13578 = (0);
var state_13623__$1 = (function (){var statearr_13640 = state_13623;
(statearr_13640[(8)] = inst_13577);

(statearr_13640[(9)] = inst_13576);

(statearr_13640[(10)] = inst_13575);

(statearr_13640[(12)] = inst_13578);

return statearr_13640;
})();
var statearr_13641_13675 = state_13623__$1;
(statearr_13641_13675[(2)] = null);

(statearr_13641_13675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (17))){
var inst_13589 = (state_13623[(7)]);
var inst_13593 = cljs.core.chunk_first.call(null,inst_13589);
var inst_13594 = cljs.core.chunk_rest.call(null,inst_13589);
var inst_13595 = cljs.core.count.call(null,inst_13593);
var inst_13575 = inst_13594;
var inst_13576 = inst_13593;
var inst_13577 = inst_13595;
var inst_13578 = (0);
var state_13623__$1 = (function (){var statearr_13642 = state_13623;
(statearr_13642[(8)] = inst_13577);

(statearr_13642[(9)] = inst_13576);

(statearr_13642[(10)] = inst_13575);

(statearr_13642[(12)] = inst_13578);

return statearr_13642;
})();
var statearr_13643_13676 = state_13623__$1;
(statearr_13643_13676[(2)] = null);

(statearr_13643_13676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (3))){
var inst_13621 = (state_13623[(2)]);
var state_13623__$1 = state_13623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13623__$1,inst_13621);
} else {
if((state_val_13624 === (12))){
var inst_13609 = (state_13623[(2)]);
var state_13623__$1 = state_13623;
var statearr_13644_13677 = state_13623__$1;
(statearr_13644_13677[(2)] = inst_13609);

(statearr_13644_13677[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (2))){
var state_13623__$1 = state_13623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13623__$1,(4),in$);
} else {
if((state_val_13624 === (23))){
var inst_13617 = (state_13623[(2)]);
var state_13623__$1 = state_13623;
var statearr_13645_13678 = state_13623__$1;
(statearr_13645_13678[(2)] = inst_13617);

(statearr_13645_13678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (19))){
var inst_13604 = (state_13623[(2)]);
var state_13623__$1 = state_13623;
var statearr_13646_13679 = state_13623__$1;
(statearr_13646_13679[(2)] = inst_13604);

(statearr_13646_13679[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (11))){
var inst_13589 = (state_13623[(7)]);
var inst_13575 = (state_13623[(10)]);
var inst_13589__$1 = cljs.core.seq.call(null,inst_13575);
var state_13623__$1 = (function (){var statearr_13647 = state_13623;
(statearr_13647[(7)] = inst_13589__$1);

return statearr_13647;
})();
if(inst_13589__$1){
var statearr_13648_13680 = state_13623__$1;
(statearr_13648_13680[(1)] = (14));

} else {
var statearr_13649_13681 = state_13623__$1;
(statearr_13649_13681[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (9))){
var inst_13611 = (state_13623[(2)]);
var inst_13612 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13623__$1 = (function (){var statearr_13650 = state_13623;
(statearr_13650[(15)] = inst_13611);

return statearr_13650;
})();
if(cljs.core.truth_(inst_13612)){
var statearr_13651_13682 = state_13623__$1;
(statearr_13651_13682[(1)] = (21));

} else {
var statearr_13652_13683 = state_13623__$1;
(statearr_13652_13683[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (5))){
var inst_13567 = cljs.core.async.close_BANG_.call(null,out);
var state_13623__$1 = state_13623;
var statearr_13653_13684 = state_13623__$1;
(statearr_13653_13684[(2)] = inst_13567);

(statearr_13653_13684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (14))){
var inst_13589 = (state_13623[(7)]);
var inst_13591 = cljs.core.chunked_seq_QMARK_.call(null,inst_13589);
var state_13623__$1 = state_13623;
if(inst_13591){
var statearr_13654_13685 = state_13623__$1;
(statearr_13654_13685[(1)] = (17));

} else {
var statearr_13655_13686 = state_13623__$1;
(statearr_13655_13686[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (16))){
var inst_13607 = (state_13623[(2)]);
var state_13623__$1 = state_13623;
var statearr_13656_13687 = state_13623__$1;
(statearr_13656_13687[(2)] = inst_13607);

(statearr_13656_13687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13624 === (10))){
var inst_13576 = (state_13623[(9)]);
var inst_13578 = (state_13623[(12)]);
var inst_13583 = cljs.core._nth.call(null,inst_13576,inst_13578);
var state_13623__$1 = state_13623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13623__$1,(13),out,inst_13583);
} else {
if((state_val_13624 === (18))){
var inst_13589 = (state_13623[(7)]);
var inst_13598 = cljs.core.first.call(null,inst_13589);
var state_13623__$1 = state_13623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13623__$1,(20),out,inst_13598);
} else {
if((state_val_13624 === (8))){
var inst_13577 = (state_13623[(8)]);
var inst_13578 = (state_13623[(12)]);
var inst_13580 = (inst_13578 < inst_13577);
var inst_13581 = inst_13580;
var state_13623__$1 = state_13623;
if(cljs.core.truth_(inst_13581)){
var statearr_13657_13688 = state_13623__$1;
(statearr_13657_13688[(1)] = (10));

} else {
var statearr_13658_13689 = state_13623__$1;
(statearr_13658_13689[(1)] = (11));

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
});})(c__7402__auto__))
;
return ((function (switch__7340__auto__,c__7402__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7341__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7341__auto____0 = (function (){
var statearr_13662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13662[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7341__auto__);

(statearr_13662[(1)] = (1));

return statearr_13662;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7341__auto____1 = (function (state_13623){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_13623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e13663){if((e13663 instanceof Object)){
var ex__7344__auto__ = e13663;
var statearr_13664_13690 = state_13623;
(statearr_13664_13690[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13691 = state_13623;
state_13623 = G__13691;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7341__auto__ = function(state_13623){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7341__auto____1.call(this,state_13623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7341__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7341__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto__))
})();
var state__7404__auto__ = (function (){var statearr_13665 = f__7403__auto__.call(null);
(statearr_13665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto__);

return statearr_13665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto__))
);

return c__7402__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__13693 = arguments.length;
switch (G__13693) {
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
var G__13696 = arguments.length;
switch (G__13696) {
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
var G__13699 = arguments.length;
switch (G__13699) {
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
var c__7402__auto___13749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___13749,out){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___13749,out){
return (function (state_13723){
var state_val_13724 = (state_13723[(1)]);
if((state_val_13724 === (7))){
var inst_13718 = (state_13723[(2)]);
var state_13723__$1 = state_13723;
var statearr_13725_13750 = state_13723__$1;
(statearr_13725_13750[(2)] = inst_13718);

(statearr_13725_13750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (1))){
var inst_13700 = null;
var state_13723__$1 = (function (){var statearr_13726 = state_13723;
(statearr_13726[(7)] = inst_13700);

return statearr_13726;
})();
var statearr_13727_13751 = state_13723__$1;
(statearr_13727_13751[(2)] = null);

(statearr_13727_13751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (4))){
var inst_13703 = (state_13723[(8)]);
var inst_13703__$1 = (state_13723[(2)]);
var inst_13704 = (inst_13703__$1 == null);
var inst_13705 = cljs.core.not.call(null,inst_13704);
var state_13723__$1 = (function (){var statearr_13728 = state_13723;
(statearr_13728[(8)] = inst_13703__$1);

return statearr_13728;
})();
if(inst_13705){
var statearr_13729_13752 = state_13723__$1;
(statearr_13729_13752[(1)] = (5));

} else {
var statearr_13730_13753 = state_13723__$1;
(statearr_13730_13753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (6))){
var state_13723__$1 = state_13723;
var statearr_13731_13754 = state_13723__$1;
(statearr_13731_13754[(2)] = null);

(statearr_13731_13754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (3))){
var inst_13720 = (state_13723[(2)]);
var inst_13721 = cljs.core.async.close_BANG_.call(null,out);
var state_13723__$1 = (function (){var statearr_13732 = state_13723;
(statearr_13732[(9)] = inst_13720);

return statearr_13732;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13723__$1,inst_13721);
} else {
if((state_val_13724 === (2))){
var state_13723__$1 = state_13723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13723__$1,(4),ch);
} else {
if((state_val_13724 === (11))){
var inst_13703 = (state_13723[(8)]);
var inst_13712 = (state_13723[(2)]);
var inst_13700 = inst_13703;
var state_13723__$1 = (function (){var statearr_13733 = state_13723;
(statearr_13733[(7)] = inst_13700);

(statearr_13733[(10)] = inst_13712);

return statearr_13733;
})();
var statearr_13734_13755 = state_13723__$1;
(statearr_13734_13755[(2)] = null);

(statearr_13734_13755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (9))){
var inst_13703 = (state_13723[(8)]);
var state_13723__$1 = state_13723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13723__$1,(11),out,inst_13703);
} else {
if((state_val_13724 === (5))){
var inst_13700 = (state_13723[(7)]);
var inst_13703 = (state_13723[(8)]);
var inst_13707 = cljs.core._EQ_.call(null,inst_13703,inst_13700);
var state_13723__$1 = state_13723;
if(inst_13707){
var statearr_13736_13756 = state_13723__$1;
(statearr_13736_13756[(1)] = (8));

} else {
var statearr_13737_13757 = state_13723__$1;
(statearr_13737_13757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (10))){
var inst_13715 = (state_13723[(2)]);
var state_13723__$1 = state_13723;
var statearr_13738_13758 = state_13723__$1;
(statearr_13738_13758[(2)] = inst_13715);

(statearr_13738_13758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13724 === (8))){
var inst_13700 = (state_13723[(7)]);
var tmp13735 = inst_13700;
var inst_13700__$1 = tmp13735;
var state_13723__$1 = (function (){var statearr_13739 = state_13723;
(statearr_13739[(7)] = inst_13700__$1);

return statearr_13739;
})();
var statearr_13740_13759 = state_13723__$1;
(statearr_13740_13759[(2)] = null);

(statearr_13740_13759[(1)] = (2));


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
});})(c__7402__auto___13749,out))
;
return ((function (switch__7340__auto__,c__7402__auto___13749,out){
return (function() {
var cljs$core$async$state_machine__7341__auto__ = null;
var cljs$core$async$state_machine__7341__auto____0 = (function (){
var statearr_13744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13744[(0)] = cljs$core$async$state_machine__7341__auto__);

(statearr_13744[(1)] = (1));

return statearr_13744;
});
var cljs$core$async$state_machine__7341__auto____1 = (function (state_13723){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_13723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e13745){if((e13745 instanceof Object)){
var ex__7344__auto__ = e13745;
var statearr_13746_13760 = state_13723;
(statearr_13746_13760[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13761 = state_13723;
state_13723 = G__13761;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$state_machine__7341__auto__ = function(state_13723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7341__auto____1.call(this,state_13723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7341__auto____0;
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7341__auto____1;
return cljs$core$async$state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___13749,out))
})();
var state__7404__auto__ = (function (){var statearr_13747 = f__7403__auto__.call(null);
(statearr_13747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___13749);

return statearr_13747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___13749,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__13763 = arguments.length;
switch (G__13763) {
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
var c__7402__auto___13832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___13832,out){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___13832,out){
return (function (state_13801){
var state_val_13802 = (state_13801[(1)]);
if((state_val_13802 === (7))){
var inst_13797 = (state_13801[(2)]);
var state_13801__$1 = state_13801;
var statearr_13803_13833 = state_13801__$1;
(statearr_13803_13833[(2)] = inst_13797);

(statearr_13803_13833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (1))){
var inst_13764 = (new Array(n));
var inst_13765 = inst_13764;
var inst_13766 = (0);
var state_13801__$1 = (function (){var statearr_13804 = state_13801;
(statearr_13804[(7)] = inst_13765);

(statearr_13804[(8)] = inst_13766);

return statearr_13804;
})();
var statearr_13805_13834 = state_13801__$1;
(statearr_13805_13834[(2)] = null);

(statearr_13805_13834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (4))){
var inst_13769 = (state_13801[(9)]);
var inst_13769__$1 = (state_13801[(2)]);
var inst_13770 = (inst_13769__$1 == null);
var inst_13771 = cljs.core.not.call(null,inst_13770);
var state_13801__$1 = (function (){var statearr_13806 = state_13801;
(statearr_13806[(9)] = inst_13769__$1);

return statearr_13806;
})();
if(inst_13771){
var statearr_13807_13835 = state_13801__$1;
(statearr_13807_13835[(1)] = (5));

} else {
var statearr_13808_13836 = state_13801__$1;
(statearr_13808_13836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (15))){
var inst_13791 = (state_13801[(2)]);
var state_13801__$1 = state_13801;
var statearr_13809_13837 = state_13801__$1;
(statearr_13809_13837[(2)] = inst_13791);

(statearr_13809_13837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (13))){
var state_13801__$1 = state_13801;
var statearr_13810_13838 = state_13801__$1;
(statearr_13810_13838[(2)] = null);

(statearr_13810_13838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (6))){
var inst_13766 = (state_13801[(8)]);
var inst_13787 = (inst_13766 > (0));
var state_13801__$1 = state_13801;
if(cljs.core.truth_(inst_13787)){
var statearr_13811_13839 = state_13801__$1;
(statearr_13811_13839[(1)] = (12));

} else {
var statearr_13812_13840 = state_13801__$1;
(statearr_13812_13840[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (3))){
var inst_13799 = (state_13801[(2)]);
var state_13801__$1 = state_13801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13801__$1,inst_13799);
} else {
if((state_val_13802 === (12))){
var inst_13765 = (state_13801[(7)]);
var inst_13789 = cljs.core.vec.call(null,inst_13765);
var state_13801__$1 = state_13801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13801__$1,(15),out,inst_13789);
} else {
if((state_val_13802 === (2))){
var state_13801__$1 = state_13801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13801__$1,(4),ch);
} else {
if((state_val_13802 === (11))){
var inst_13781 = (state_13801[(2)]);
var inst_13782 = (new Array(n));
var inst_13765 = inst_13782;
var inst_13766 = (0);
var state_13801__$1 = (function (){var statearr_13813 = state_13801;
(statearr_13813[(7)] = inst_13765);

(statearr_13813[(10)] = inst_13781);

(statearr_13813[(8)] = inst_13766);

return statearr_13813;
})();
var statearr_13814_13841 = state_13801__$1;
(statearr_13814_13841[(2)] = null);

(statearr_13814_13841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (9))){
var inst_13765 = (state_13801[(7)]);
var inst_13779 = cljs.core.vec.call(null,inst_13765);
var state_13801__$1 = state_13801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13801__$1,(11),out,inst_13779);
} else {
if((state_val_13802 === (5))){
var inst_13765 = (state_13801[(7)]);
var inst_13769 = (state_13801[(9)]);
var inst_13774 = (state_13801[(11)]);
var inst_13766 = (state_13801[(8)]);
var inst_13773 = (inst_13765[inst_13766] = inst_13769);
var inst_13774__$1 = (inst_13766 + (1));
var inst_13775 = (inst_13774__$1 < n);
var state_13801__$1 = (function (){var statearr_13815 = state_13801;
(statearr_13815[(12)] = inst_13773);

(statearr_13815[(11)] = inst_13774__$1);

return statearr_13815;
})();
if(cljs.core.truth_(inst_13775)){
var statearr_13816_13842 = state_13801__$1;
(statearr_13816_13842[(1)] = (8));

} else {
var statearr_13817_13843 = state_13801__$1;
(statearr_13817_13843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (14))){
var inst_13794 = (state_13801[(2)]);
var inst_13795 = cljs.core.async.close_BANG_.call(null,out);
var state_13801__$1 = (function (){var statearr_13819 = state_13801;
(statearr_13819[(13)] = inst_13794);

return statearr_13819;
})();
var statearr_13820_13844 = state_13801__$1;
(statearr_13820_13844[(2)] = inst_13795);

(statearr_13820_13844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (10))){
var inst_13785 = (state_13801[(2)]);
var state_13801__$1 = state_13801;
var statearr_13821_13845 = state_13801__$1;
(statearr_13821_13845[(2)] = inst_13785);

(statearr_13821_13845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (8))){
var inst_13765 = (state_13801[(7)]);
var inst_13774 = (state_13801[(11)]);
var tmp13818 = inst_13765;
var inst_13765__$1 = tmp13818;
var inst_13766 = inst_13774;
var state_13801__$1 = (function (){var statearr_13822 = state_13801;
(statearr_13822[(7)] = inst_13765__$1);

(statearr_13822[(8)] = inst_13766);

return statearr_13822;
})();
var statearr_13823_13846 = state_13801__$1;
(statearr_13823_13846[(2)] = null);

(statearr_13823_13846[(1)] = (2));


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
});})(c__7402__auto___13832,out))
;
return ((function (switch__7340__auto__,c__7402__auto___13832,out){
return (function() {
var cljs$core$async$state_machine__7341__auto__ = null;
var cljs$core$async$state_machine__7341__auto____0 = (function (){
var statearr_13827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13827[(0)] = cljs$core$async$state_machine__7341__auto__);

(statearr_13827[(1)] = (1));

return statearr_13827;
});
var cljs$core$async$state_machine__7341__auto____1 = (function (state_13801){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_13801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e13828){if((e13828 instanceof Object)){
var ex__7344__auto__ = e13828;
var statearr_13829_13847 = state_13801;
(statearr_13829_13847[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13848 = state_13801;
state_13801 = G__13848;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$state_machine__7341__auto__ = function(state_13801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7341__auto____1.call(this,state_13801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7341__auto____0;
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7341__auto____1;
return cljs$core$async$state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___13832,out))
})();
var state__7404__auto__ = (function (){var statearr_13830 = f__7403__auto__.call(null);
(statearr_13830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___13832);

return statearr_13830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___13832,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__13850 = arguments.length;
switch (G__13850) {
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
var c__7402__auto___13923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___13923,out){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___13923,out){
return (function (state_13892){
var state_val_13893 = (state_13892[(1)]);
if((state_val_13893 === (7))){
var inst_13888 = (state_13892[(2)]);
var state_13892__$1 = state_13892;
var statearr_13894_13924 = state_13892__$1;
(statearr_13894_13924[(2)] = inst_13888);

(statearr_13894_13924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13893 === (1))){
var inst_13851 = [];
var inst_13852 = inst_13851;
var inst_13853 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13892__$1 = (function (){var statearr_13895 = state_13892;
(statearr_13895[(7)] = inst_13853);

(statearr_13895[(8)] = inst_13852);

return statearr_13895;
})();
var statearr_13896_13925 = state_13892__$1;
(statearr_13896_13925[(2)] = null);

(statearr_13896_13925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13893 === (4))){
var inst_13856 = (state_13892[(9)]);
var inst_13856__$1 = (state_13892[(2)]);
var inst_13857 = (inst_13856__$1 == null);
var inst_13858 = cljs.core.not.call(null,inst_13857);
var state_13892__$1 = (function (){var statearr_13897 = state_13892;
(statearr_13897[(9)] = inst_13856__$1);

return statearr_13897;
})();
if(inst_13858){
var statearr_13898_13926 = state_13892__$1;
(statearr_13898_13926[(1)] = (5));

} else {
var statearr_13899_13927 = state_13892__$1;
(statearr_13899_13927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13893 === (15))){
var inst_13882 = (state_13892[(2)]);
var state_13892__$1 = state_13892;
var statearr_13900_13928 = state_13892__$1;
(statearr_13900_13928[(2)] = inst_13882);

(statearr_13900_13928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13893 === (13))){
var state_13892__$1 = state_13892;
var statearr_13901_13929 = state_13892__$1;
(statearr_13901_13929[(2)] = null);

(statearr_13901_13929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13893 === (6))){
var inst_13852 = (state_13892[(8)]);
var inst_13877 = inst_13852.length;
var inst_13878 = (inst_13877 > (0));
var state_13892__$1 = state_13892;
if(cljs.core.truth_(inst_13878)){
var statearr_13902_13930 = state_13892__$1;
(statearr_13902_13930[(1)] = (12));

} else {
var statearr_13903_13931 = state_13892__$1;
(statearr_13903_13931[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13893 === (3))){
var inst_13890 = (state_13892[(2)]);
var state_13892__$1 = state_13892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13892__$1,inst_13890);
} else {
if((state_val_13893 === (12))){
var inst_13852 = (state_13892[(8)]);
var inst_13880 = cljs.core.vec.call(null,inst_13852);
var state_13892__$1 = state_13892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13892__$1,(15),out,inst_13880);
} else {
if((state_val_13893 === (2))){
var state_13892__$1 = state_13892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13892__$1,(4),ch);
} else {
if((state_val_13893 === (11))){
var inst_13860 = (state_13892[(10)]);
var inst_13856 = (state_13892[(9)]);
var inst_13870 = (state_13892[(2)]);
var inst_13871 = [];
var inst_13872 = inst_13871.push(inst_13856);
var inst_13852 = inst_13871;
var inst_13853 = inst_13860;
var state_13892__$1 = (function (){var statearr_13904 = state_13892;
(statearr_13904[(7)] = inst_13853);

(statearr_13904[(11)] = inst_13872);

(statearr_13904[(8)] = inst_13852);

(statearr_13904[(12)] = inst_13870);

return statearr_13904;
})();
var statearr_13905_13932 = state_13892__$1;
(statearr_13905_13932[(2)] = null);

(statearr_13905_13932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13893 === (9))){
var inst_13852 = (state_13892[(8)]);
var inst_13868 = cljs.core.vec.call(null,inst_13852);
var state_13892__$1 = state_13892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13892__$1,(11),out,inst_13868);
} else {
if((state_val_13893 === (5))){
var inst_13853 = (state_13892[(7)]);
var inst_13860 = (state_13892[(10)]);
var inst_13856 = (state_13892[(9)]);
var inst_13860__$1 = f.call(null,inst_13856);
var inst_13861 = cljs.core._EQ_.call(null,inst_13860__$1,inst_13853);
var inst_13862 = cljs.core.keyword_identical_QMARK_.call(null,inst_13853,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13863 = (inst_13861) || (inst_13862);
var state_13892__$1 = (function (){var statearr_13906 = state_13892;
(statearr_13906[(10)] = inst_13860__$1);

return statearr_13906;
})();
if(cljs.core.truth_(inst_13863)){
var statearr_13907_13933 = state_13892__$1;
(statearr_13907_13933[(1)] = (8));

} else {
var statearr_13908_13934 = state_13892__$1;
(statearr_13908_13934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13893 === (14))){
var inst_13885 = (state_13892[(2)]);
var inst_13886 = cljs.core.async.close_BANG_.call(null,out);
var state_13892__$1 = (function (){var statearr_13910 = state_13892;
(statearr_13910[(13)] = inst_13885);

return statearr_13910;
})();
var statearr_13911_13935 = state_13892__$1;
(statearr_13911_13935[(2)] = inst_13886);

(statearr_13911_13935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13893 === (10))){
var inst_13875 = (state_13892[(2)]);
var state_13892__$1 = state_13892;
var statearr_13912_13936 = state_13892__$1;
(statearr_13912_13936[(2)] = inst_13875);

(statearr_13912_13936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13893 === (8))){
var inst_13860 = (state_13892[(10)]);
var inst_13852 = (state_13892[(8)]);
var inst_13856 = (state_13892[(9)]);
var inst_13865 = inst_13852.push(inst_13856);
var tmp13909 = inst_13852;
var inst_13852__$1 = tmp13909;
var inst_13853 = inst_13860;
var state_13892__$1 = (function (){var statearr_13913 = state_13892;
(statearr_13913[(7)] = inst_13853);

(statearr_13913[(8)] = inst_13852__$1);

(statearr_13913[(14)] = inst_13865);

return statearr_13913;
})();
var statearr_13914_13937 = state_13892__$1;
(statearr_13914_13937[(2)] = null);

(statearr_13914_13937[(1)] = (2));


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
});})(c__7402__auto___13923,out))
;
return ((function (switch__7340__auto__,c__7402__auto___13923,out){
return (function() {
var cljs$core$async$state_machine__7341__auto__ = null;
var cljs$core$async$state_machine__7341__auto____0 = (function (){
var statearr_13918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13918[(0)] = cljs$core$async$state_machine__7341__auto__);

(statearr_13918[(1)] = (1));

return statearr_13918;
});
var cljs$core$async$state_machine__7341__auto____1 = (function (state_13892){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_13892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e13919){if((e13919 instanceof Object)){
var ex__7344__auto__ = e13919;
var statearr_13920_13938 = state_13892;
(statearr_13920_13938[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13939 = state_13892;
state_13892 = G__13939;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
cljs$core$async$state_machine__7341__auto__ = function(state_13892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7341__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7341__auto____1.call(this,state_13892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7341__auto____0;
cljs$core$async$state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7341__auto____1;
return cljs$core$async$state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___13923,out))
})();
var state__7404__auto__ = (function (){var statearr_13921 = f__7403__auto__.call(null);
(statearr_13921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___13923);

return statearr_13921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___13923,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=143386373520752__auto____1.call(this,state_25050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20352__auto____0;
cljs$core$async$state_machine__20352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20352__auto____1;
return cljs$core$async$state_machine__20352__auto__;
})()
;})(switch__20351__auto__,c__20372__auto___25081,out))
})();
var state__20374__auto__ = (function (){var statearr_25079 = f__20373__auto__.call(null);
(statearr_25079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___25081);

return statearr_25079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto___25081,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1433863734780