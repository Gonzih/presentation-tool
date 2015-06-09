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
if(typeof cljs.core.async.t13431 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13431 = (function (fn_handler,f,meta13432){
this.fn_handler = fn_handler;
this.f = f;
this.meta13432 = meta13432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13433,meta13432__$1){
var self__ = this;
var _13433__$1 = this;
return (new cljs.core.async.t13431(self__.fn_handler,self__.f,meta13432__$1));
});

cljs.core.async.t13431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13433){
var self__ = this;
var _13433__$1 = this;
return self__.meta13432;
});

cljs.core.async.t13431.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t13431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t13431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta13432","meta13432",-1786197612,null)], null);
});

cljs.core.async.t13431.cljs$lang$type = true;

cljs.core.async.t13431.cljs$lang$ctorStr = "cljs.core.async/t13431";

cljs.core.async.t13431.cljs$lang$ctorPrWriter = (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t13431");
});

cljs.core.async.__GT_t13431 = (function cljs$core$async$fn_handler_$___GT_t13431(fn_handler__$1,f__$1,meta13432){
return (new cljs.core.async.t13431(fn_handler__$1,f__$1,meta13432));
});

}

return (new cljs.core.async.t13431(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13435 = buff;
if(G__13435){
var bit__5205__auto__ = null;
if(cljs.core.truth_((function (){var or__4531__auto__ = bit__5205__auto__;
if(cljs.core.truth_(or__4531__auto__)){
return or__4531__auto__;
} else {
return G__13435.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__13435.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13435);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13435);
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
var G__13437 = arguments.length;
switch (G__13437) {
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
var G__13440 = arguments.length;
switch (G__13440) {
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
var val_13442 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13442);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13442,ret){
return (function (){
return fn1.call(null,val_13442);
});})(val_13442,ret))
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
var G__13444 = arguments.length;
switch (G__13444) {
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
var n__5416__auto___13446 = n;
var x_13447 = (0);
while(true){
if((x_13447 < n__5416__auto___13446)){
(a[x_13447] = (0));

var G__13448 = (x_13447 + (1));
x_13447 = G__13448;
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

var G__13449 = (i + (1));
i = G__13449;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t13453 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13453 = (function (alt_flag,flag,meta13454){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13454 = meta13454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13455,meta13454__$1){
var self__ = this;
var _13455__$1 = this;
return (new cljs.core.async.t13453(self__.alt_flag,self__.flag,meta13454__$1));
});})(flag))
;

cljs.core.async.t13453.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13455){
var self__ = this;
var _13455__$1 = this;
return self__.meta13454;
});})(flag))
;

cljs.core.async.t13453.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t13453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t13453.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13454","meta13454",22263890,null)], null);
});})(flag))
;

cljs.core.async.t13453.cljs$lang$type = true;

cljs.core.async.t13453.cljs$lang$ctorStr = "cljs.core.async/t13453";

cljs.core.async.t13453.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t13453");
});})(flag))
;

cljs.core.async.__GT_t13453 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t13453(alt_flag__$1,flag__$1,meta13454){
return (new cljs.core.async.t13453(alt_flag__$1,flag__$1,meta13454));
});})(flag))
;

}

return (new cljs.core.async.t13453(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t13459 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13459 = (function (alt_handler,flag,cb,meta13460){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13460 = meta13460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t13459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13461,meta13460__$1){
var self__ = this;
var _13461__$1 = this;
return (new cljs.core.async.t13459(self__.alt_handler,self__.flag,self__.cb,meta13460__$1));
});

cljs.core.async.t13459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13461){
var self__ = this;
var _13461__$1 = this;
return self__.meta13460;
});

cljs.core.async.t13459.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t13459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t13459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13460","meta13460",-331233321,null)], null);
});

cljs.core.async.t13459.cljs$lang$type = true;

cljs.core.async.t13459.cljs$lang$ctorStr = "cljs.core.async/t13459";

cljs.core.async.t13459.cljs$lang$ctorPrWriter = (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t13459");
});

cljs.core.async.__GT_t13459 = (function cljs$core$async$alt_handler_$___GT_t13459(alt_handler__$1,flag__$1,cb__$1,meta13460){
return (new cljs.core.async.t13459(alt_handler__$1,flag__$1,cb__$1,meta13460));
});

}

return (new cljs.core.async.t13459(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13462_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13462_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13463_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13463_SHARP_,port], null));
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
var G__13464 = (i + (1));
i = G__13464;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13467){
var map__13468 = p__13467;
var map__13468__$1 = ((cljs.core.seq_QMARK_.call(null,map__13468))?cljs.core.apply.call(null,cljs.core.hash_map,map__13468):map__13468);
var opts = map__13468__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13465){
var G__13466 = cljs.core.first.call(null,seq13465);
var seq13465__$1 = cljs.core.next.call(null,seq13465);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13466,seq13465__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__13470 = arguments.length;
switch (G__13470) {
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
var c__7136__auto___13519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___13519){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___13519){
return (function (state_13494){
var state_val_13495 = (state_13494[(1)]);
if((state_val_13495 === (7))){
var inst_13490 = (state_13494[(2)]);
var state_13494__$1 = state_13494;
var statearr_13496_13520 = state_13494__$1;
(statearr_13496_13520[(2)] = inst_13490);

(statearr_13496_13520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (1))){
var state_13494__$1 = state_13494;
var statearr_13497_13521 = state_13494__$1;
(statearr_13497_13521[(2)] = null);

(statearr_13497_13521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (4))){
var inst_13473 = (state_13494[(7)]);
var inst_13473__$1 = (state_13494[(2)]);
var inst_13474 = (inst_13473__$1 == null);
var state_13494__$1 = (function (){var statearr_13498 = state_13494;
(statearr_13498[(7)] = inst_13473__$1);

return statearr_13498;
})();
if(cljs.core.truth_(inst_13474)){
var statearr_13499_13522 = state_13494__$1;
(statearr_13499_13522[(1)] = (5));

} else {
var statearr_13500_13523 = state_13494__$1;
(statearr_13500_13523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (13))){
var state_13494__$1 = state_13494;
var statearr_13501_13524 = state_13494__$1;
(statearr_13501_13524[(2)] = null);

(statearr_13501_13524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (6))){
var inst_13473 = (state_13494[(7)]);
var state_13494__$1 = state_13494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13494__$1,(11),to,inst_13473);
} else {
if((state_val_13495 === (3))){
var inst_13492 = (state_13494[(2)]);
var state_13494__$1 = state_13494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13494__$1,inst_13492);
} else {
if((state_val_13495 === (12))){
var state_13494__$1 = state_13494;
var statearr_13502_13525 = state_13494__$1;
(statearr_13502_13525[(2)] = null);

(statearr_13502_13525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (2))){
var state_13494__$1 = state_13494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13494__$1,(4),from);
} else {
if((state_val_13495 === (11))){
var inst_13483 = (state_13494[(2)]);
var state_13494__$1 = state_13494;
if(cljs.core.truth_(inst_13483)){
var statearr_13503_13526 = state_13494__$1;
(statearr_13503_13526[(1)] = (12));

} else {
var statearr_13504_13527 = state_13494__$1;
(statearr_13504_13527[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (9))){
var state_13494__$1 = state_13494;
var statearr_13505_13528 = state_13494__$1;
(statearr_13505_13528[(2)] = null);

(statearr_13505_13528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (5))){
var state_13494__$1 = state_13494;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13506_13529 = state_13494__$1;
(statearr_13506_13529[(1)] = (8));

} else {
var statearr_13507_13530 = state_13494__$1;
(statearr_13507_13530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (14))){
var inst_13488 = (state_13494[(2)]);
var state_13494__$1 = state_13494;
var statearr_13508_13531 = state_13494__$1;
(statearr_13508_13531[(2)] = inst_13488);

(statearr_13508_13531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (10))){
var inst_13480 = (state_13494[(2)]);
var state_13494__$1 = state_13494;
var statearr_13509_13532 = state_13494__$1;
(statearr_13509_13532[(2)] = inst_13480);

(statearr_13509_13532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13495 === (8))){
var inst_13477 = cljs.core.async.close_BANG_.call(null,to);
var state_13494__$1 = state_13494;
var statearr_13510_13533 = state_13494__$1;
(statearr_13510_13533[(2)] = inst_13477);

(statearr_13510_13533[(1)] = (10));


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
});})(c__7136__auto___13519))
;
return ((function (switch__7074__auto__,c__7136__auto___13519){
return (function() {
var cljs$core$async$state_machine__7075__auto__ = null;
var cljs$core$async$state_machine__7075__auto____0 = (function (){
var statearr_13514 = [null,null,null,null,null,null,null,null];
(statearr_13514[(0)] = cljs$core$async$state_machine__7075__auto__);

(statearr_13514[(1)] = (1));

return statearr_13514;
});
var cljs$core$async$state_machine__7075__auto____1 = (function (state_13494){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_13494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e13515){if((e13515 instanceof Object)){
var ex__7078__auto__ = e13515;
var statearr_13516_13534 = state_13494;
(statearr_13516_13534[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13535 = state_13494;
state_13494 = G__13535;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$state_machine__7075__auto__ = function(state_13494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7075__auto____1.call(this,state_13494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7075__auto____0;
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7075__auto____1;
return cljs$core$async$state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___13519))
})();
var state__7138__auto__ = (function (){var statearr_13517 = f__7137__auto__.call(null);
(statearr_13517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___13519);

return statearr_13517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___13519))
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
return (function (p__13719){
var vec__13720 = p__13719;
var v = cljs.core.nth.call(null,vec__13720,(0),null);
var p = cljs.core.nth.call(null,vec__13720,(1),null);
var job = vec__13720;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7136__auto___13902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___13902,res,vec__13720,v,p,job,jobs,results){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___13902,res,vec__13720,v,p,job,jobs,results){
return (function (state_13725){
var state_val_13726 = (state_13725[(1)]);
if((state_val_13726 === (1))){
var state_13725__$1 = state_13725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13725__$1,(2),res,v);
} else {
if((state_val_13726 === (2))){
var inst_13722 = (state_13725[(2)]);
var inst_13723 = cljs.core.async.close_BANG_.call(null,res);
var state_13725__$1 = (function (){var statearr_13727 = state_13725;
(statearr_13727[(7)] = inst_13722);

return statearr_13727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13725__$1,inst_13723);
} else {
return null;
}
}
});})(c__7136__auto___13902,res,vec__13720,v,p,job,jobs,results))
;
return ((function (switch__7074__auto__,c__7136__auto___13902,res,vec__13720,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0 = (function (){
var statearr_13731 = [null,null,null,null,null,null,null,null];
(statearr_13731[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__);

(statearr_13731[(1)] = (1));

return statearr_13731;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1 = (function (state_13725){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_13725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e13732){if((e13732 instanceof Object)){
var ex__7078__auto__ = e13732;
var statearr_13733_13903 = state_13725;
(statearr_13733_13903[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13904 = state_13725;
state_13725 = G__13904;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__ = function(state_13725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1.call(this,state_13725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___13902,res,vec__13720,v,p,job,jobs,results))
})();
var state__7138__auto__ = (function (){var statearr_13734 = f__7137__auto__.call(null);
(statearr_13734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___13902);

return statearr_13734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___13902,res,vec__13720,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13735){
var vec__13736 = p__13735;
var v = cljs.core.nth.call(null,vec__13736,(0),null);
var p = cljs.core.nth.call(null,vec__13736,(1),null);
var job = vec__13736;
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
var n__5416__auto___13905 = n;
var __13906 = (0);
while(true){
if((__13906 < n__5416__auto___13905)){
var G__13737_13907 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13737_13907) {
case "compute":
var c__7136__auto___13909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13906,c__7136__auto___13909,G__13737_13907,n__5416__auto___13905,jobs,results,process,async){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (__13906,c__7136__auto___13909,G__13737_13907,n__5416__auto___13905,jobs,results,process,async){
return (function (state_13750){
var state_val_13751 = (state_13750[(1)]);
if((state_val_13751 === (1))){
var state_13750__$1 = state_13750;
var statearr_13752_13910 = state_13750__$1;
(statearr_13752_13910[(2)] = null);

(statearr_13752_13910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (2))){
var state_13750__$1 = state_13750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13750__$1,(4),jobs);
} else {
if((state_val_13751 === (3))){
var inst_13748 = (state_13750[(2)]);
var state_13750__$1 = state_13750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13750__$1,inst_13748);
} else {
if((state_val_13751 === (4))){
var inst_13740 = (state_13750[(2)]);
var inst_13741 = process.call(null,inst_13740);
var state_13750__$1 = state_13750;
if(cljs.core.truth_(inst_13741)){
var statearr_13753_13911 = state_13750__$1;
(statearr_13753_13911[(1)] = (5));

} else {
var statearr_13754_13912 = state_13750__$1;
(statearr_13754_13912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (5))){
var state_13750__$1 = state_13750;
var statearr_13755_13913 = state_13750__$1;
(statearr_13755_13913[(2)] = null);

(statearr_13755_13913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (6))){
var state_13750__$1 = state_13750;
var statearr_13756_13914 = state_13750__$1;
(statearr_13756_13914[(2)] = null);

(statearr_13756_13914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (7))){
var inst_13746 = (state_13750[(2)]);
var state_13750__$1 = state_13750;
var statearr_13757_13915 = state_13750__$1;
(statearr_13757_13915[(2)] = inst_13746);

(statearr_13757_13915[(1)] = (3));


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
});})(__13906,c__7136__auto___13909,G__13737_13907,n__5416__auto___13905,jobs,results,process,async))
;
return ((function (__13906,switch__7074__auto__,c__7136__auto___13909,G__13737_13907,n__5416__auto___13905,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0 = (function (){
var statearr_13761 = [null,null,null,null,null,null,null];
(statearr_13761[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__);

(statearr_13761[(1)] = (1));

return statearr_13761;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1 = (function (state_13750){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_13750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e13762){if((e13762 instanceof Object)){
var ex__7078__auto__ = e13762;
var statearr_13763_13916 = state_13750;
(statearr_13763_13916[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13917 = state_13750;
state_13750 = G__13917;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__ = function(state_13750){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1.call(this,state_13750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__;
})()
;})(__13906,switch__7074__auto__,c__7136__auto___13909,G__13737_13907,n__5416__auto___13905,jobs,results,process,async))
})();
var state__7138__auto__ = (function (){var statearr_13764 = f__7137__auto__.call(null);
(statearr_13764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___13909);

return statearr_13764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(__13906,c__7136__auto___13909,G__13737_13907,n__5416__auto___13905,jobs,results,process,async))
);


break;
case "async":
var c__7136__auto___13918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13906,c__7136__auto___13918,G__13737_13907,n__5416__auto___13905,jobs,results,process,async){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (__13906,c__7136__auto___13918,G__13737_13907,n__5416__auto___13905,jobs,results,process,async){
return (function (state_13777){
var state_val_13778 = (state_13777[(1)]);
if((state_val_13778 === (1))){
var state_13777__$1 = state_13777;
var statearr_13779_13919 = state_13777__$1;
(statearr_13779_13919[(2)] = null);

(statearr_13779_13919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13778 === (2))){
var state_13777__$1 = state_13777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13777__$1,(4),jobs);
} else {
if((state_val_13778 === (3))){
var inst_13775 = (state_13777[(2)]);
var state_13777__$1 = state_13777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13777__$1,inst_13775);
} else {
if((state_val_13778 === (4))){
var inst_13767 = (state_13777[(2)]);
var inst_13768 = async.call(null,inst_13767);
var state_13777__$1 = state_13777;
if(cljs.core.truth_(inst_13768)){
var statearr_13780_13920 = state_13777__$1;
(statearr_13780_13920[(1)] = (5));

} else {
var statearr_13781_13921 = state_13777__$1;
(statearr_13781_13921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13778 === (5))){
var state_13777__$1 = state_13777;
var statearr_13782_13922 = state_13777__$1;
(statearr_13782_13922[(2)] = null);

(statearr_13782_13922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13778 === (6))){
var state_13777__$1 = state_13777;
var statearr_13783_13923 = state_13777__$1;
(statearr_13783_13923[(2)] = null);

(statearr_13783_13923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13778 === (7))){
var inst_13773 = (state_13777[(2)]);
var state_13777__$1 = state_13777;
var statearr_13784_13924 = state_13777__$1;
(statearr_13784_13924[(2)] = inst_13773);

(statearr_13784_13924[(1)] = (3));


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
});})(__13906,c__7136__auto___13918,G__13737_13907,n__5416__auto___13905,jobs,results,process,async))
;
return ((function (__13906,switch__7074__auto__,c__7136__auto___13918,G__13737_13907,n__5416__auto___13905,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0 = (function (){
var statearr_13788 = [null,null,null,null,null,null,null];
(statearr_13788[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__);

(statearr_13788[(1)] = (1));

return statearr_13788;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1 = (function (state_13777){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_13777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e13789){if((e13789 instanceof Object)){
var ex__7078__auto__ = e13789;
var statearr_13790_13925 = state_13777;
(statearr_13790_13925[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13926 = state_13777;
state_13777 = G__13926;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__ = function(state_13777){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1.call(this,state_13777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__;
})()
;})(__13906,switch__7074__auto__,c__7136__auto___13918,G__13737_13907,n__5416__auto___13905,jobs,results,process,async))
})();
var state__7138__auto__ = (function (){var statearr_13791 = f__7137__auto__.call(null);
(statearr_13791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___13918);

return statearr_13791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(__13906,c__7136__auto___13918,G__13737_13907,n__5416__auto___13905,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13927 = (__13906 + (1));
__13906 = G__13927;
continue;
} else {
}
break;
}

var c__7136__auto___13928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___13928,jobs,results,process,async){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___13928,jobs,results,process,async){
return (function (state_13813){
var state_val_13814 = (state_13813[(1)]);
if((state_val_13814 === (1))){
var state_13813__$1 = state_13813;
var statearr_13815_13929 = state_13813__$1;
(statearr_13815_13929[(2)] = null);

(statearr_13815_13929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13814 === (2))){
var state_13813__$1 = state_13813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13813__$1,(4),from);
} else {
if((state_val_13814 === (3))){
var inst_13811 = (state_13813[(2)]);
var state_13813__$1 = state_13813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13813__$1,inst_13811);
} else {
if((state_val_13814 === (4))){
var inst_13794 = (state_13813[(7)]);
var inst_13794__$1 = (state_13813[(2)]);
var inst_13795 = (inst_13794__$1 == null);
var state_13813__$1 = (function (){var statearr_13816 = state_13813;
(statearr_13816[(7)] = inst_13794__$1);

return statearr_13816;
})();
if(cljs.core.truth_(inst_13795)){
var statearr_13817_13930 = state_13813__$1;
(statearr_13817_13930[(1)] = (5));

} else {
var statearr_13818_13931 = state_13813__$1;
(statearr_13818_13931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13814 === (5))){
var inst_13797 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13813__$1 = state_13813;
var statearr_13819_13932 = state_13813__$1;
(statearr_13819_13932[(2)] = inst_13797);

(statearr_13819_13932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13814 === (6))){
var inst_13794 = (state_13813[(7)]);
var inst_13799 = (state_13813[(8)]);
var inst_13799__$1 = cljs.core.async.chan.call(null,(1));
var inst_13800 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13801 = [inst_13794,inst_13799__$1];
var inst_13802 = (new cljs.core.PersistentVector(null,2,(5),inst_13800,inst_13801,null));
var state_13813__$1 = (function (){var statearr_13820 = state_13813;
(statearr_13820[(8)] = inst_13799__$1);

return statearr_13820;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13813__$1,(8),jobs,inst_13802);
} else {
if((state_val_13814 === (7))){
var inst_13809 = (state_13813[(2)]);
var state_13813__$1 = state_13813;
var statearr_13821_13933 = state_13813__$1;
(statearr_13821_13933[(2)] = inst_13809);

(statearr_13821_13933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13814 === (8))){
var inst_13799 = (state_13813[(8)]);
var inst_13804 = (state_13813[(2)]);
var state_13813__$1 = (function (){var statearr_13822 = state_13813;
(statearr_13822[(9)] = inst_13804);

return statearr_13822;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13813__$1,(9),results,inst_13799);
} else {
if((state_val_13814 === (9))){
var inst_13806 = (state_13813[(2)]);
var state_13813__$1 = (function (){var statearr_13823 = state_13813;
(statearr_13823[(10)] = inst_13806);

return statearr_13823;
})();
var statearr_13824_13934 = state_13813__$1;
(statearr_13824_13934[(2)] = null);

(statearr_13824_13934[(1)] = (2));


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
});})(c__7136__auto___13928,jobs,results,process,async))
;
return ((function (switch__7074__auto__,c__7136__auto___13928,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0 = (function (){
var statearr_13828 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13828[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__);

(statearr_13828[(1)] = (1));

return statearr_13828;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1 = (function (state_13813){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_13813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e13829){if((e13829 instanceof Object)){
var ex__7078__auto__ = e13829;
var statearr_13830_13935 = state_13813;
(statearr_13830_13935[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13936 = state_13813;
state_13813 = G__13936;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__ = function(state_13813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1.call(this,state_13813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___13928,jobs,results,process,async))
})();
var state__7138__auto__ = (function (){var statearr_13831 = f__7137__auto__.call(null);
(statearr_13831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___13928);

return statearr_13831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___13928,jobs,results,process,async))
);


var c__7136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__,jobs,results,process,async){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto__,jobs,results,process,async){
return (function (state_13869){
var state_val_13870 = (state_13869[(1)]);
if((state_val_13870 === (7))){
var inst_13865 = (state_13869[(2)]);
var state_13869__$1 = state_13869;
var statearr_13871_13937 = state_13869__$1;
(statearr_13871_13937[(2)] = inst_13865);

(statearr_13871_13937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (20))){
var state_13869__$1 = state_13869;
var statearr_13872_13938 = state_13869__$1;
(statearr_13872_13938[(2)] = null);

(statearr_13872_13938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (1))){
var state_13869__$1 = state_13869;
var statearr_13873_13939 = state_13869__$1;
(statearr_13873_13939[(2)] = null);

(statearr_13873_13939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (4))){
var inst_13834 = (state_13869[(7)]);
var inst_13834__$1 = (state_13869[(2)]);
var inst_13835 = (inst_13834__$1 == null);
var state_13869__$1 = (function (){var statearr_13874 = state_13869;
(statearr_13874[(7)] = inst_13834__$1);

return statearr_13874;
})();
if(cljs.core.truth_(inst_13835)){
var statearr_13875_13940 = state_13869__$1;
(statearr_13875_13940[(1)] = (5));

} else {
var statearr_13876_13941 = state_13869__$1;
(statearr_13876_13941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (15))){
var inst_13847 = (state_13869[(8)]);
var state_13869__$1 = state_13869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13869__$1,(18),to,inst_13847);
} else {
if((state_val_13870 === (21))){
var inst_13860 = (state_13869[(2)]);
var state_13869__$1 = state_13869;
var statearr_13877_13942 = state_13869__$1;
(statearr_13877_13942[(2)] = inst_13860);

(statearr_13877_13942[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (13))){
var inst_13862 = (state_13869[(2)]);
var state_13869__$1 = (function (){var statearr_13878 = state_13869;
(statearr_13878[(9)] = inst_13862);

return statearr_13878;
})();
var statearr_13879_13943 = state_13869__$1;
(statearr_13879_13943[(2)] = null);

(statearr_13879_13943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (6))){
var inst_13834 = (state_13869[(7)]);
var state_13869__$1 = state_13869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13869__$1,(11),inst_13834);
} else {
if((state_val_13870 === (17))){
var inst_13855 = (state_13869[(2)]);
var state_13869__$1 = state_13869;
if(cljs.core.truth_(inst_13855)){
var statearr_13880_13944 = state_13869__$1;
(statearr_13880_13944[(1)] = (19));

} else {
var statearr_13881_13945 = state_13869__$1;
(statearr_13881_13945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (3))){
var inst_13867 = (state_13869[(2)]);
var state_13869__$1 = state_13869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13869__$1,inst_13867);
} else {
if((state_val_13870 === (12))){
var inst_13844 = (state_13869[(10)]);
var state_13869__$1 = state_13869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13869__$1,(14),inst_13844);
} else {
if((state_val_13870 === (2))){
var state_13869__$1 = state_13869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13869__$1,(4),results);
} else {
if((state_val_13870 === (19))){
var state_13869__$1 = state_13869;
var statearr_13882_13946 = state_13869__$1;
(statearr_13882_13946[(2)] = null);

(statearr_13882_13946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (11))){
var inst_13844 = (state_13869[(2)]);
var state_13869__$1 = (function (){var statearr_13883 = state_13869;
(statearr_13883[(10)] = inst_13844);

return statearr_13883;
})();
var statearr_13884_13947 = state_13869__$1;
(statearr_13884_13947[(2)] = null);

(statearr_13884_13947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (9))){
var state_13869__$1 = state_13869;
var statearr_13885_13948 = state_13869__$1;
(statearr_13885_13948[(2)] = null);

(statearr_13885_13948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (5))){
var state_13869__$1 = state_13869;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13886_13949 = state_13869__$1;
(statearr_13886_13949[(1)] = (8));

} else {
var statearr_13887_13950 = state_13869__$1;
(statearr_13887_13950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (14))){
var inst_13847 = (state_13869[(8)]);
var inst_13849 = (state_13869[(11)]);
var inst_13847__$1 = (state_13869[(2)]);
var inst_13848 = (inst_13847__$1 == null);
var inst_13849__$1 = cljs.core.not.call(null,inst_13848);
var state_13869__$1 = (function (){var statearr_13888 = state_13869;
(statearr_13888[(8)] = inst_13847__$1);

(statearr_13888[(11)] = inst_13849__$1);

return statearr_13888;
})();
if(inst_13849__$1){
var statearr_13889_13951 = state_13869__$1;
(statearr_13889_13951[(1)] = (15));

} else {
var statearr_13890_13952 = state_13869__$1;
(statearr_13890_13952[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (16))){
var inst_13849 = (state_13869[(11)]);
var state_13869__$1 = state_13869;
var statearr_13891_13953 = state_13869__$1;
(statearr_13891_13953[(2)] = inst_13849);

(statearr_13891_13953[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (10))){
var inst_13841 = (state_13869[(2)]);
var state_13869__$1 = state_13869;
var statearr_13892_13954 = state_13869__$1;
(statearr_13892_13954[(2)] = inst_13841);

(statearr_13892_13954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (18))){
var inst_13852 = (state_13869[(2)]);
var state_13869__$1 = state_13869;
var statearr_13893_13955 = state_13869__$1;
(statearr_13893_13955[(2)] = inst_13852);

(statearr_13893_13955[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (8))){
var inst_13838 = cljs.core.async.close_BANG_.call(null,to);
var state_13869__$1 = state_13869;
var statearr_13894_13956 = state_13869__$1;
(statearr_13894_13956[(2)] = inst_13838);

(statearr_13894_13956[(1)] = (10));


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
});})(c__7136__auto__,jobs,results,process,async))
;
return ((function (switch__7074__auto__,c__7136__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0 = (function (){
var statearr_13898 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__);

(statearr_13898[(1)] = (1));

return statearr_13898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1 = (function (state_13869){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_13869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e13899){if((e13899 instanceof Object)){
var ex__7078__auto__ = e13899;
var statearr_13900_13957 = state_13869;
(statearr_13900_13957[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13958 = state_13869;
state_13869 = G__13958;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__ = function(state_13869){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1.call(this,state_13869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7075__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto__,jobs,results,process,async))
})();
var state__7138__auto__ = (function (){var statearr_13901 = f__7137__auto__.call(null);
(statearr_13901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);

return statearr_13901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__,jobs,results,process,async))
);

return c__7136__auto__;
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
var G__13960 = arguments.length;
switch (G__13960) {
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
var G__13963 = arguments.length;
switch (G__13963) {
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
var G__13966 = arguments.length;
switch (G__13966) {
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
var c__7136__auto___14018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___14018,tc,fc){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___14018,tc,fc){
return (function (state_13992){
var state_val_13993 = (state_13992[(1)]);
if((state_val_13993 === (7))){
var inst_13988 = (state_13992[(2)]);
var state_13992__$1 = state_13992;
var statearr_13994_14019 = state_13992__$1;
(statearr_13994_14019[(2)] = inst_13988);

(statearr_13994_14019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (1))){
var state_13992__$1 = state_13992;
var statearr_13995_14020 = state_13992__$1;
(statearr_13995_14020[(2)] = null);

(statearr_13995_14020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (4))){
var inst_13969 = (state_13992[(7)]);
var inst_13969__$1 = (state_13992[(2)]);
var inst_13970 = (inst_13969__$1 == null);
var state_13992__$1 = (function (){var statearr_13996 = state_13992;
(statearr_13996[(7)] = inst_13969__$1);

return statearr_13996;
})();
if(cljs.core.truth_(inst_13970)){
var statearr_13997_14021 = state_13992__$1;
(statearr_13997_14021[(1)] = (5));

} else {
var statearr_13998_14022 = state_13992__$1;
(statearr_13998_14022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (13))){
var state_13992__$1 = state_13992;
var statearr_13999_14023 = state_13992__$1;
(statearr_13999_14023[(2)] = null);

(statearr_13999_14023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (6))){
var inst_13969 = (state_13992[(7)]);
var inst_13975 = p.call(null,inst_13969);
var state_13992__$1 = state_13992;
if(cljs.core.truth_(inst_13975)){
var statearr_14000_14024 = state_13992__$1;
(statearr_14000_14024[(1)] = (9));

} else {
var statearr_14001_14025 = state_13992__$1;
(statearr_14001_14025[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (3))){
var inst_13990 = (state_13992[(2)]);
var state_13992__$1 = state_13992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13992__$1,inst_13990);
} else {
if((state_val_13993 === (12))){
var state_13992__$1 = state_13992;
var statearr_14002_14026 = state_13992__$1;
(statearr_14002_14026[(2)] = null);

(statearr_14002_14026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (2))){
var state_13992__$1 = state_13992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13992__$1,(4),ch);
} else {
if((state_val_13993 === (11))){
var inst_13969 = (state_13992[(7)]);
var inst_13979 = (state_13992[(2)]);
var state_13992__$1 = state_13992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13992__$1,(8),inst_13979,inst_13969);
} else {
if((state_val_13993 === (9))){
var state_13992__$1 = state_13992;
var statearr_14003_14027 = state_13992__$1;
(statearr_14003_14027[(2)] = tc);

(statearr_14003_14027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (5))){
var inst_13972 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13973 = cljs.core.async.close_BANG_.call(null,fc);
var state_13992__$1 = (function (){var statearr_14004 = state_13992;
(statearr_14004[(8)] = inst_13972);

return statearr_14004;
})();
var statearr_14005_14028 = state_13992__$1;
(statearr_14005_14028[(2)] = inst_13973);

(statearr_14005_14028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (14))){
var inst_13986 = (state_13992[(2)]);
var state_13992__$1 = state_13992;
var statearr_14006_14029 = state_13992__$1;
(statearr_14006_14029[(2)] = inst_13986);

(statearr_14006_14029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (10))){
var state_13992__$1 = state_13992;
var statearr_14007_14030 = state_13992__$1;
(statearr_14007_14030[(2)] = fc);

(statearr_14007_14030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13993 === (8))){
var inst_13981 = (state_13992[(2)]);
var state_13992__$1 = state_13992;
if(cljs.core.truth_(inst_13981)){
var statearr_14008_14031 = state_13992__$1;
(statearr_14008_14031[(1)] = (12));

} else {
var statearr_14009_14032 = state_13992__$1;
(statearr_14009_14032[(1)] = (13));

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
});})(c__7136__auto___14018,tc,fc))
;
return ((function (switch__7074__auto__,c__7136__auto___14018,tc,fc){
return (function() {
var cljs$core$async$state_machine__7075__auto__ = null;
var cljs$core$async$state_machine__7075__auto____0 = (function (){
var statearr_14013 = [null,null,null,null,null,null,null,null,null];
(statearr_14013[(0)] = cljs$core$async$state_machine__7075__auto__);

(statearr_14013[(1)] = (1));

return statearr_14013;
});
var cljs$core$async$state_machine__7075__auto____1 = (function (state_13992){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_13992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e14014){if((e14014 instanceof Object)){
var ex__7078__auto__ = e14014;
var statearr_14015_14033 = state_13992;
(statearr_14015_14033[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14034 = state_13992;
state_13992 = G__14034;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$state_machine__7075__auto__ = function(state_13992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7075__auto____1.call(this,state_13992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7075__auto____0;
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7075__auto____1;
return cljs$core$async$state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___14018,tc,fc))
})();
var state__7138__auto__ = (function (){var statearr_14016 = f__7137__auto__.call(null);
(statearr_14016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___14018);

return statearr_14016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___14018,tc,fc))
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
var c__7136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto__){
return (function (state_14081){
var state_val_14082 = (state_14081[(1)]);
if((state_val_14082 === (1))){
var inst_14067 = init;
var state_14081__$1 = (function (){var statearr_14083 = state_14081;
(statearr_14083[(7)] = inst_14067);

return statearr_14083;
})();
var statearr_14084_14099 = state_14081__$1;
(statearr_14084_14099[(2)] = null);

(statearr_14084_14099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (2))){
var state_14081__$1 = state_14081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14081__$1,(4),ch);
} else {
if((state_val_14082 === (3))){
var inst_14079 = (state_14081[(2)]);
var state_14081__$1 = state_14081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14081__$1,inst_14079);
} else {
if((state_val_14082 === (4))){
var inst_14070 = (state_14081[(8)]);
var inst_14070__$1 = (state_14081[(2)]);
var inst_14071 = (inst_14070__$1 == null);
var state_14081__$1 = (function (){var statearr_14085 = state_14081;
(statearr_14085[(8)] = inst_14070__$1);

return statearr_14085;
})();
if(cljs.core.truth_(inst_14071)){
var statearr_14086_14100 = state_14081__$1;
(statearr_14086_14100[(1)] = (5));

} else {
var statearr_14087_14101 = state_14081__$1;
(statearr_14087_14101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (5))){
var inst_14067 = (state_14081[(7)]);
var state_14081__$1 = state_14081;
var statearr_14088_14102 = state_14081__$1;
(statearr_14088_14102[(2)] = inst_14067);

(statearr_14088_14102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (6))){
var inst_14067 = (state_14081[(7)]);
var inst_14070 = (state_14081[(8)]);
var inst_14074 = f.call(null,inst_14067,inst_14070);
var inst_14067__$1 = inst_14074;
var state_14081__$1 = (function (){var statearr_14089 = state_14081;
(statearr_14089[(7)] = inst_14067__$1);

return statearr_14089;
})();
var statearr_14090_14103 = state_14081__$1;
(statearr_14090_14103[(2)] = null);

(statearr_14090_14103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14082 === (7))){
var inst_14077 = (state_14081[(2)]);
var state_14081__$1 = state_14081;
var statearr_14091_14104 = state_14081__$1;
(statearr_14091_14104[(2)] = inst_14077);

(statearr_14091_14104[(1)] = (3));


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
});})(c__7136__auto__))
;
return ((function (switch__7074__auto__,c__7136__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7075__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7075__auto____0 = (function (){
var statearr_14095 = [null,null,null,null,null,null,null,null,null];
(statearr_14095[(0)] = cljs$core$async$reduce_$_state_machine__7075__auto__);

(statearr_14095[(1)] = (1));

return statearr_14095;
});
var cljs$core$async$reduce_$_state_machine__7075__auto____1 = (function (state_14081){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_14081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e14096){if((e14096 instanceof Object)){
var ex__7078__auto__ = e14096;
var statearr_14097_14105 = state_14081;
(statearr_14097_14105[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14106 = state_14081;
state_14081 = G__14106;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7075__auto__ = function(state_14081){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7075__auto____1.call(this,state_14081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7075__auto____0;
cljs$core$async$reduce_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7075__auto____1;
return cljs$core$async$reduce_$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto__))
})();
var state__7138__auto__ = (function (){var statearr_14098 = f__7137__auto__.call(null);
(statearr_14098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);

return statearr_14098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__))
);

return c__7136__auto__;
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
var G__14108 = arguments.length;
switch (G__14108) {
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
var c__7136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto__){
return (function (state_14133){
var state_val_14134 = (state_14133[(1)]);
if((state_val_14134 === (7))){
var inst_14115 = (state_14133[(2)]);
var state_14133__$1 = state_14133;
var statearr_14135_14159 = state_14133__$1;
(statearr_14135_14159[(2)] = inst_14115);

(statearr_14135_14159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14134 === (1))){
var inst_14109 = cljs.core.seq.call(null,coll);
var inst_14110 = inst_14109;
var state_14133__$1 = (function (){var statearr_14136 = state_14133;
(statearr_14136[(7)] = inst_14110);

return statearr_14136;
})();
var statearr_14137_14160 = state_14133__$1;
(statearr_14137_14160[(2)] = null);

(statearr_14137_14160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14134 === (4))){
var inst_14110 = (state_14133[(7)]);
var inst_14113 = cljs.core.first.call(null,inst_14110);
var state_14133__$1 = state_14133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14133__$1,(7),ch,inst_14113);
} else {
if((state_val_14134 === (13))){
var inst_14127 = (state_14133[(2)]);
var state_14133__$1 = state_14133;
var statearr_14138_14161 = state_14133__$1;
(statearr_14138_14161[(2)] = inst_14127);

(statearr_14138_14161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14134 === (6))){
var inst_14118 = (state_14133[(2)]);
var state_14133__$1 = state_14133;
if(cljs.core.truth_(inst_14118)){
var statearr_14139_14162 = state_14133__$1;
(statearr_14139_14162[(1)] = (8));

} else {
var statearr_14140_14163 = state_14133__$1;
(statearr_14140_14163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14134 === (3))){
var inst_14131 = (state_14133[(2)]);
var state_14133__$1 = state_14133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14133__$1,inst_14131);
} else {
if((state_val_14134 === (12))){
var state_14133__$1 = state_14133;
var statearr_14141_14164 = state_14133__$1;
(statearr_14141_14164[(2)] = null);

(statearr_14141_14164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14134 === (2))){
var inst_14110 = (state_14133[(7)]);
var state_14133__$1 = state_14133;
if(cljs.core.truth_(inst_14110)){
var statearr_14142_14165 = state_14133__$1;
(statearr_14142_14165[(1)] = (4));

} else {
var statearr_14143_14166 = state_14133__$1;
(statearr_14143_14166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14134 === (11))){
var inst_14124 = cljs.core.async.close_BANG_.call(null,ch);
var state_14133__$1 = state_14133;
var statearr_14144_14167 = state_14133__$1;
(statearr_14144_14167[(2)] = inst_14124);

(statearr_14144_14167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14134 === (9))){
var state_14133__$1 = state_14133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14145_14168 = state_14133__$1;
(statearr_14145_14168[(1)] = (11));

} else {
var statearr_14146_14169 = state_14133__$1;
(statearr_14146_14169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14134 === (5))){
var inst_14110 = (state_14133[(7)]);
var state_14133__$1 = state_14133;
var statearr_14147_14170 = state_14133__$1;
(statearr_14147_14170[(2)] = inst_14110);

(statearr_14147_14170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14134 === (10))){
var inst_14129 = (state_14133[(2)]);
var state_14133__$1 = state_14133;
var statearr_14148_14171 = state_14133__$1;
(statearr_14148_14171[(2)] = inst_14129);

(statearr_14148_14171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14134 === (8))){
var inst_14110 = (state_14133[(7)]);
var inst_14120 = cljs.core.next.call(null,inst_14110);
var inst_14110__$1 = inst_14120;
var state_14133__$1 = (function (){var statearr_14149 = state_14133;
(statearr_14149[(7)] = inst_14110__$1);

return statearr_14149;
})();
var statearr_14150_14172 = state_14133__$1;
(statearr_14150_14172[(2)] = null);

(statearr_14150_14172[(1)] = (2));


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
});})(c__7136__auto__))
;
return ((function (switch__7074__auto__,c__7136__auto__){
return (function() {
var cljs$core$async$state_machine__7075__auto__ = null;
var cljs$core$async$state_machine__7075__auto____0 = (function (){
var statearr_14154 = [null,null,null,null,null,null,null,null];
(statearr_14154[(0)] = cljs$core$async$state_machine__7075__auto__);

(statearr_14154[(1)] = (1));

return statearr_14154;
});
var cljs$core$async$state_machine__7075__auto____1 = (function (state_14133){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_14133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e14155){if((e14155 instanceof Object)){
var ex__7078__auto__ = e14155;
var statearr_14156_14173 = state_14133;
(statearr_14156_14173[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14174 = state_14133;
state_14133 = G__14174;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$state_machine__7075__auto__ = function(state_14133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7075__auto____1.call(this,state_14133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7075__auto____0;
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7075__auto____1;
return cljs$core$async$state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto__))
})();
var state__7138__auto__ = (function (){var statearr_14157 = f__7137__auto__.call(null);
(statearr_14157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);

return statearr_14157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__))
);

return c__7136__auto__;
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

cljs.core.async.Mux = (function (){var obj14176 = {};
return obj14176;
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


cljs.core.async.Mult = (function (){var obj14178 = {};
return obj14178;
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
if(typeof cljs.core.async.t14400 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14400 = (function (mult,ch,cs,meta14401){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14401 = meta14401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14402,meta14401__$1){
var self__ = this;
var _14402__$1 = this;
return (new cljs.core.async.t14400(self__.mult,self__.ch,self__.cs,meta14401__$1));
});})(cs))
;

cljs.core.async.t14400.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14402){
var self__ = this;
var _14402__$1 = this;
return self__.meta14401;
});})(cs))
;

cljs.core.async.t14400.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14400.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t14400.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t14400.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t14400.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t14400.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t14400.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14401","meta14401",-1465594056,null)], null);
});})(cs))
;

cljs.core.async.t14400.cljs$lang$type = true;

cljs.core.async.t14400.cljs$lang$ctorStr = "cljs.core.async/t14400";

cljs.core.async.t14400.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t14400");
});})(cs))
;

cljs.core.async.__GT_t14400 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t14400(mult__$1,ch__$1,cs__$1,meta14401){
return (new cljs.core.async.t14400(mult__$1,ch__$1,cs__$1,meta14401));
});})(cs))
;

}

return (new cljs.core.async.t14400(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7136__auto___14621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___14621,cs,m,dchan,dctr,done){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___14621,cs,m,dchan,dctr,done){
return (function (state_14533){
var state_val_14534 = (state_14533[(1)]);
if((state_val_14534 === (7))){
var inst_14529 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
var statearr_14535_14622 = state_14533__$1;
(statearr_14535_14622[(2)] = inst_14529);

(statearr_14535_14622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (20))){
var inst_14434 = (state_14533[(7)]);
var inst_14444 = cljs.core.first.call(null,inst_14434);
var inst_14445 = cljs.core.nth.call(null,inst_14444,(0),null);
var inst_14446 = cljs.core.nth.call(null,inst_14444,(1),null);
var state_14533__$1 = (function (){var statearr_14536 = state_14533;
(statearr_14536[(8)] = inst_14445);

return statearr_14536;
})();
if(cljs.core.truth_(inst_14446)){
var statearr_14537_14623 = state_14533__$1;
(statearr_14537_14623[(1)] = (22));

} else {
var statearr_14538_14624 = state_14533__$1;
(statearr_14538_14624[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (27))){
var inst_14476 = (state_14533[(9)]);
var inst_14481 = (state_14533[(10)]);
var inst_14474 = (state_14533[(11)]);
var inst_14405 = (state_14533[(12)]);
var inst_14481__$1 = cljs.core._nth.call(null,inst_14474,inst_14476);
var inst_14482 = cljs.core.async.put_BANG_.call(null,inst_14481__$1,inst_14405,done);
var state_14533__$1 = (function (){var statearr_14539 = state_14533;
(statearr_14539[(10)] = inst_14481__$1);

return statearr_14539;
})();
if(cljs.core.truth_(inst_14482)){
var statearr_14540_14625 = state_14533__$1;
(statearr_14540_14625[(1)] = (30));

} else {
var statearr_14541_14626 = state_14533__$1;
(statearr_14541_14626[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (1))){
var state_14533__$1 = state_14533;
var statearr_14542_14627 = state_14533__$1;
(statearr_14542_14627[(2)] = null);

(statearr_14542_14627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (24))){
var inst_14434 = (state_14533[(7)]);
var inst_14451 = (state_14533[(2)]);
var inst_14452 = cljs.core.next.call(null,inst_14434);
var inst_14414 = inst_14452;
var inst_14415 = null;
var inst_14416 = (0);
var inst_14417 = (0);
var state_14533__$1 = (function (){var statearr_14543 = state_14533;
(statearr_14543[(13)] = inst_14414);

(statearr_14543[(14)] = inst_14451);

(statearr_14543[(15)] = inst_14416);

(statearr_14543[(16)] = inst_14415);

(statearr_14543[(17)] = inst_14417);

return statearr_14543;
})();
var statearr_14544_14628 = state_14533__$1;
(statearr_14544_14628[(2)] = null);

(statearr_14544_14628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (39))){
var state_14533__$1 = state_14533;
var statearr_14548_14629 = state_14533__$1;
(statearr_14548_14629[(2)] = null);

(statearr_14548_14629[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (4))){
var inst_14405 = (state_14533[(12)]);
var inst_14405__$1 = (state_14533[(2)]);
var inst_14406 = (inst_14405__$1 == null);
var state_14533__$1 = (function (){var statearr_14549 = state_14533;
(statearr_14549[(12)] = inst_14405__$1);

return statearr_14549;
})();
if(cljs.core.truth_(inst_14406)){
var statearr_14550_14630 = state_14533__$1;
(statearr_14550_14630[(1)] = (5));

} else {
var statearr_14551_14631 = state_14533__$1;
(statearr_14551_14631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (15))){
var inst_14414 = (state_14533[(13)]);
var inst_14416 = (state_14533[(15)]);
var inst_14415 = (state_14533[(16)]);
var inst_14417 = (state_14533[(17)]);
var inst_14430 = (state_14533[(2)]);
var inst_14431 = (inst_14417 + (1));
var tmp14545 = inst_14414;
var tmp14546 = inst_14416;
var tmp14547 = inst_14415;
var inst_14414__$1 = tmp14545;
var inst_14415__$1 = tmp14547;
var inst_14416__$1 = tmp14546;
var inst_14417__$1 = inst_14431;
var state_14533__$1 = (function (){var statearr_14552 = state_14533;
(statearr_14552[(18)] = inst_14430);

(statearr_14552[(13)] = inst_14414__$1);

(statearr_14552[(15)] = inst_14416__$1);

(statearr_14552[(16)] = inst_14415__$1);

(statearr_14552[(17)] = inst_14417__$1);

return statearr_14552;
})();
var statearr_14553_14632 = state_14533__$1;
(statearr_14553_14632[(2)] = null);

(statearr_14553_14632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (21))){
var inst_14455 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
var statearr_14557_14633 = state_14533__$1;
(statearr_14557_14633[(2)] = inst_14455);

(statearr_14557_14633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (31))){
var inst_14481 = (state_14533[(10)]);
var inst_14485 = done.call(null,null);
var inst_14486 = cljs.core.async.untap_STAR_.call(null,m,inst_14481);
var state_14533__$1 = (function (){var statearr_14558 = state_14533;
(statearr_14558[(19)] = inst_14485);

return statearr_14558;
})();
var statearr_14559_14634 = state_14533__$1;
(statearr_14559_14634[(2)] = inst_14486);

(statearr_14559_14634[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (32))){
var inst_14473 = (state_14533[(20)]);
var inst_14475 = (state_14533[(21)]);
var inst_14476 = (state_14533[(9)]);
var inst_14474 = (state_14533[(11)]);
var inst_14488 = (state_14533[(2)]);
var inst_14489 = (inst_14476 + (1));
var tmp14554 = inst_14473;
var tmp14555 = inst_14475;
var tmp14556 = inst_14474;
var inst_14473__$1 = tmp14554;
var inst_14474__$1 = tmp14556;
var inst_14475__$1 = tmp14555;
var inst_14476__$1 = inst_14489;
var state_14533__$1 = (function (){var statearr_14560 = state_14533;
(statearr_14560[(20)] = inst_14473__$1);

(statearr_14560[(21)] = inst_14475__$1);

(statearr_14560[(9)] = inst_14476__$1);

(statearr_14560[(11)] = inst_14474__$1);

(statearr_14560[(22)] = inst_14488);

return statearr_14560;
})();
var statearr_14561_14635 = state_14533__$1;
(statearr_14561_14635[(2)] = null);

(statearr_14561_14635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (40))){
var inst_14501 = (state_14533[(23)]);
var inst_14505 = done.call(null,null);
var inst_14506 = cljs.core.async.untap_STAR_.call(null,m,inst_14501);
var state_14533__$1 = (function (){var statearr_14562 = state_14533;
(statearr_14562[(24)] = inst_14505);

return statearr_14562;
})();
var statearr_14563_14636 = state_14533__$1;
(statearr_14563_14636[(2)] = inst_14506);

(statearr_14563_14636[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (33))){
var inst_14492 = (state_14533[(25)]);
var inst_14494 = cljs.core.chunked_seq_QMARK_.call(null,inst_14492);
var state_14533__$1 = state_14533;
if(inst_14494){
var statearr_14564_14637 = state_14533__$1;
(statearr_14564_14637[(1)] = (36));

} else {
var statearr_14565_14638 = state_14533__$1;
(statearr_14565_14638[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (13))){
var inst_14424 = (state_14533[(26)]);
var inst_14427 = cljs.core.async.close_BANG_.call(null,inst_14424);
var state_14533__$1 = state_14533;
var statearr_14566_14639 = state_14533__$1;
(statearr_14566_14639[(2)] = inst_14427);

(statearr_14566_14639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (22))){
var inst_14445 = (state_14533[(8)]);
var inst_14448 = cljs.core.async.close_BANG_.call(null,inst_14445);
var state_14533__$1 = state_14533;
var statearr_14567_14640 = state_14533__$1;
(statearr_14567_14640[(2)] = inst_14448);

(statearr_14567_14640[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (36))){
var inst_14492 = (state_14533[(25)]);
var inst_14496 = cljs.core.chunk_first.call(null,inst_14492);
var inst_14497 = cljs.core.chunk_rest.call(null,inst_14492);
var inst_14498 = cljs.core.count.call(null,inst_14496);
var inst_14473 = inst_14497;
var inst_14474 = inst_14496;
var inst_14475 = inst_14498;
var inst_14476 = (0);
var state_14533__$1 = (function (){var statearr_14568 = state_14533;
(statearr_14568[(20)] = inst_14473);

(statearr_14568[(21)] = inst_14475);

(statearr_14568[(9)] = inst_14476);

(statearr_14568[(11)] = inst_14474);

return statearr_14568;
})();
var statearr_14569_14641 = state_14533__$1;
(statearr_14569_14641[(2)] = null);

(statearr_14569_14641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (41))){
var inst_14492 = (state_14533[(25)]);
var inst_14508 = (state_14533[(2)]);
var inst_14509 = cljs.core.next.call(null,inst_14492);
var inst_14473 = inst_14509;
var inst_14474 = null;
var inst_14475 = (0);
var inst_14476 = (0);
var state_14533__$1 = (function (){var statearr_14570 = state_14533;
(statearr_14570[(20)] = inst_14473);

(statearr_14570[(27)] = inst_14508);

(statearr_14570[(21)] = inst_14475);

(statearr_14570[(9)] = inst_14476);

(statearr_14570[(11)] = inst_14474);

return statearr_14570;
})();
var statearr_14571_14642 = state_14533__$1;
(statearr_14571_14642[(2)] = null);

(statearr_14571_14642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (43))){
var state_14533__$1 = state_14533;
var statearr_14572_14643 = state_14533__$1;
(statearr_14572_14643[(2)] = null);

(statearr_14572_14643[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (29))){
var inst_14517 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
var statearr_14573_14644 = state_14533__$1;
(statearr_14573_14644[(2)] = inst_14517);

(statearr_14573_14644[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (44))){
var inst_14526 = (state_14533[(2)]);
var state_14533__$1 = (function (){var statearr_14574 = state_14533;
(statearr_14574[(28)] = inst_14526);

return statearr_14574;
})();
var statearr_14575_14645 = state_14533__$1;
(statearr_14575_14645[(2)] = null);

(statearr_14575_14645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (6))){
var inst_14465 = (state_14533[(29)]);
var inst_14464 = cljs.core.deref.call(null,cs);
var inst_14465__$1 = cljs.core.keys.call(null,inst_14464);
var inst_14466 = cljs.core.count.call(null,inst_14465__$1);
var inst_14467 = cljs.core.reset_BANG_.call(null,dctr,inst_14466);
var inst_14472 = cljs.core.seq.call(null,inst_14465__$1);
var inst_14473 = inst_14472;
var inst_14474 = null;
var inst_14475 = (0);
var inst_14476 = (0);
var state_14533__$1 = (function (){var statearr_14576 = state_14533;
(statearr_14576[(20)] = inst_14473);

(statearr_14576[(30)] = inst_14467);

(statearr_14576[(21)] = inst_14475);

(statearr_14576[(9)] = inst_14476);

(statearr_14576[(11)] = inst_14474);

(statearr_14576[(29)] = inst_14465__$1);

return statearr_14576;
})();
var statearr_14577_14646 = state_14533__$1;
(statearr_14577_14646[(2)] = null);

(statearr_14577_14646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (28))){
var inst_14473 = (state_14533[(20)]);
var inst_14492 = (state_14533[(25)]);
var inst_14492__$1 = cljs.core.seq.call(null,inst_14473);
var state_14533__$1 = (function (){var statearr_14578 = state_14533;
(statearr_14578[(25)] = inst_14492__$1);

return statearr_14578;
})();
if(inst_14492__$1){
var statearr_14579_14647 = state_14533__$1;
(statearr_14579_14647[(1)] = (33));

} else {
var statearr_14580_14648 = state_14533__$1;
(statearr_14580_14648[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (25))){
var inst_14475 = (state_14533[(21)]);
var inst_14476 = (state_14533[(9)]);
var inst_14478 = (inst_14476 < inst_14475);
var inst_14479 = inst_14478;
var state_14533__$1 = state_14533;
if(cljs.core.truth_(inst_14479)){
var statearr_14581_14649 = state_14533__$1;
(statearr_14581_14649[(1)] = (27));

} else {
var statearr_14582_14650 = state_14533__$1;
(statearr_14582_14650[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (34))){
var state_14533__$1 = state_14533;
var statearr_14583_14651 = state_14533__$1;
(statearr_14583_14651[(2)] = null);

(statearr_14583_14651[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (17))){
var state_14533__$1 = state_14533;
var statearr_14584_14652 = state_14533__$1;
(statearr_14584_14652[(2)] = null);

(statearr_14584_14652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (3))){
var inst_14531 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14533__$1,inst_14531);
} else {
if((state_val_14534 === (12))){
var inst_14460 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
var statearr_14585_14653 = state_14533__$1;
(statearr_14585_14653[(2)] = inst_14460);

(statearr_14585_14653[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (2))){
var state_14533__$1 = state_14533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14533__$1,(4),ch);
} else {
if((state_val_14534 === (23))){
var state_14533__$1 = state_14533;
var statearr_14586_14654 = state_14533__$1;
(statearr_14586_14654[(2)] = null);

(statearr_14586_14654[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (35))){
var inst_14515 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
var statearr_14587_14655 = state_14533__$1;
(statearr_14587_14655[(2)] = inst_14515);

(statearr_14587_14655[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (19))){
var inst_14434 = (state_14533[(7)]);
var inst_14438 = cljs.core.chunk_first.call(null,inst_14434);
var inst_14439 = cljs.core.chunk_rest.call(null,inst_14434);
var inst_14440 = cljs.core.count.call(null,inst_14438);
var inst_14414 = inst_14439;
var inst_14415 = inst_14438;
var inst_14416 = inst_14440;
var inst_14417 = (0);
var state_14533__$1 = (function (){var statearr_14588 = state_14533;
(statearr_14588[(13)] = inst_14414);

(statearr_14588[(15)] = inst_14416);

(statearr_14588[(16)] = inst_14415);

(statearr_14588[(17)] = inst_14417);

return statearr_14588;
})();
var statearr_14589_14656 = state_14533__$1;
(statearr_14589_14656[(2)] = null);

(statearr_14589_14656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (11))){
var inst_14434 = (state_14533[(7)]);
var inst_14414 = (state_14533[(13)]);
var inst_14434__$1 = cljs.core.seq.call(null,inst_14414);
var state_14533__$1 = (function (){var statearr_14590 = state_14533;
(statearr_14590[(7)] = inst_14434__$1);

return statearr_14590;
})();
if(inst_14434__$1){
var statearr_14591_14657 = state_14533__$1;
(statearr_14591_14657[(1)] = (16));

} else {
var statearr_14592_14658 = state_14533__$1;
(statearr_14592_14658[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (9))){
var inst_14462 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
var statearr_14593_14659 = state_14533__$1;
(statearr_14593_14659[(2)] = inst_14462);

(statearr_14593_14659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (5))){
var inst_14412 = cljs.core.deref.call(null,cs);
var inst_14413 = cljs.core.seq.call(null,inst_14412);
var inst_14414 = inst_14413;
var inst_14415 = null;
var inst_14416 = (0);
var inst_14417 = (0);
var state_14533__$1 = (function (){var statearr_14594 = state_14533;
(statearr_14594[(13)] = inst_14414);

(statearr_14594[(15)] = inst_14416);

(statearr_14594[(16)] = inst_14415);

(statearr_14594[(17)] = inst_14417);

return statearr_14594;
})();
var statearr_14595_14660 = state_14533__$1;
(statearr_14595_14660[(2)] = null);

(statearr_14595_14660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (14))){
var state_14533__$1 = state_14533;
var statearr_14596_14661 = state_14533__$1;
(statearr_14596_14661[(2)] = null);

(statearr_14596_14661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (45))){
var inst_14523 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
var statearr_14597_14662 = state_14533__$1;
(statearr_14597_14662[(2)] = inst_14523);

(statearr_14597_14662[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (26))){
var inst_14465 = (state_14533[(29)]);
var inst_14519 = (state_14533[(2)]);
var inst_14520 = cljs.core.seq.call(null,inst_14465);
var state_14533__$1 = (function (){var statearr_14598 = state_14533;
(statearr_14598[(31)] = inst_14519);

return statearr_14598;
})();
if(inst_14520){
var statearr_14599_14663 = state_14533__$1;
(statearr_14599_14663[(1)] = (42));

} else {
var statearr_14600_14664 = state_14533__$1;
(statearr_14600_14664[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (16))){
var inst_14434 = (state_14533[(7)]);
var inst_14436 = cljs.core.chunked_seq_QMARK_.call(null,inst_14434);
var state_14533__$1 = state_14533;
if(inst_14436){
var statearr_14601_14665 = state_14533__$1;
(statearr_14601_14665[(1)] = (19));

} else {
var statearr_14602_14666 = state_14533__$1;
(statearr_14602_14666[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (38))){
var inst_14512 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
var statearr_14603_14667 = state_14533__$1;
(statearr_14603_14667[(2)] = inst_14512);

(statearr_14603_14667[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (30))){
var state_14533__$1 = state_14533;
var statearr_14604_14668 = state_14533__$1;
(statearr_14604_14668[(2)] = null);

(statearr_14604_14668[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (10))){
var inst_14415 = (state_14533[(16)]);
var inst_14417 = (state_14533[(17)]);
var inst_14423 = cljs.core._nth.call(null,inst_14415,inst_14417);
var inst_14424 = cljs.core.nth.call(null,inst_14423,(0),null);
var inst_14425 = cljs.core.nth.call(null,inst_14423,(1),null);
var state_14533__$1 = (function (){var statearr_14605 = state_14533;
(statearr_14605[(26)] = inst_14424);

return statearr_14605;
})();
if(cljs.core.truth_(inst_14425)){
var statearr_14606_14669 = state_14533__$1;
(statearr_14606_14669[(1)] = (13));

} else {
var statearr_14607_14670 = state_14533__$1;
(statearr_14607_14670[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (18))){
var inst_14458 = (state_14533[(2)]);
var state_14533__$1 = state_14533;
var statearr_14608_14671 = state_14533__$1;
(statearr_14608_14671[(2)] = inst_14458);

(statearr_14608_14671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (42))){
var state_14533__$1 = state_14533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14533__$1,(45),dchan);
} else {
if((state_val_14534 === (37))){
var inst_14492 = (state_14533[(25)]);
var inst_14501 = (state_14533[(23)]);
var inst_14405 = (state_14533[(12)]);
var inst_14501__$1 = cljs.core.first.call(null,inst_14492);
var inst_14502 = cljs.core.async.put_BANG_.call(null,inst_14501__$1,inst_14405,done);
var state_14533__$1 = (function (){var statearr_14609 = state_14533;
(statearr_14609[(23)] = inst_14501__$1);

return statearr_14609;
})();
if(cljs.core.truth_(inst_14502)){
var statearr_14610_14672 = state_14533__$1;
(statearr_14610_14672[(1)] = (39));

} else {
var statearr_14611_14673 = state_14533__$1;
(statearr_14611_14673[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14534 === (8))){
var inst_14416 = (state_14533[(15)]);
var inst_14417 = (state_14533[(17)]);
var inst_14419 = (inst_14417 < inst_14416);
var inst_14420 = inst_14419;
var state_14533__$1 = state_14533;
if(cljs.core.truth_(inst_14420)){
var statearr_14612_14674 = state_14533__$1;
(statearr_14612_14674[(1)] = (10));

} else {
var statearr_14613_14675 = state_14533__$1;
(statearr_14613_14675[(1)] = (11));

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
});})(c__7136__auto___14621,cs,m,dchan,dctr,done))
;
return ((function (switch__7074__auto__,c__7136__auto___14621,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7075__auto__ = null;
var cljs$core$async$mult_$_state_machine__7075__auto____0 = (function (){
var statearr_14617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14617[(0)] = cljs$core$async$mult_$_state_machine__7075__auto__);

(statearr_14617[(1)] = (1));

return statearr_14617;
});
var cljs$core$async$mult_$_state_machine__7075__auto____1 = (function (state_14533){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_14533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e14618){if((e14618 instanceof Object)){
var ex__7078__auto__ = e14618;
var statearr_14619_14676 = state_14533;
(statearr_14619_14676[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14677 = state_14533;
state_14533 = G__14677;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7075__auto__ = function(state_14533){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7075__auto____1.call(this,state_14533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7075__auto____0;
cljs$core$async$mult_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7075__auto____1;
return cljs$core$async$mult_$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___14621,cs,m,dchan,dctr,done))
})();
var state__7138__auto__ = (function (){var statearr_14620 = f__7137__auto__.call(null);
(statearr_14620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___14621);

return statearr_14620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___14621,cs,m,dchan,dctr,done))
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
var G__14679 = arguments.length;
switch (G__14679) {
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

cljs.core.async.Mix = (function (){var obj14682 = {};
return obj14682;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14687){
var map__14688 = p__14687;
var map__14688__$1 = ((cljs.core.seq_QMARK_.call(null,map__14688))?cljs.core.apply.call(null,cljs.core.hash_map,map__14688):map__14688);
var opts = map__14688__$1;
var statearr_14689_14692 = state;
(statearr_14689_14692[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__14688,map__14688__$1,opts){
return (function (val){
var statearr_14690_14693 = state;
(statearr_14690_14693[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14688,map__14688__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_14691_14694 = state;
(statearr_14691_14694[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14683){
var G__14684 = cljs.core.first.call(null,seq14683);
var seq14683__$1 = cljs.core.next.call(null,seq14683);
var G__14685 = cljs.core.first.call(null,seq14683__$1);
var seq14683__$2 = cljs.core.next.call(null,seq14683__$1);
var G__14686 = cljs.core.first.call(null,seq14683__$2);
var seq14683__$3 = cljs.core.next.call(null,seq14683__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14684,G__14685,G__14686,seq14683__$3);
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
if(typeof cljs.core.async.t14814 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14814 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14815){
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
this.meta14815 = meta14815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14816,meta14815__$1){
var self__ = this;
var _14816__$1 = this;
return (new cljs.core.async.t14814(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14815__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14814.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14816){
var self__ = this;
var _14816__$1 = this;
return self__.meta14815;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14814.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14814.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14814.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t14814.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14814.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14814.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14814.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14814.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t14814.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14815","meta14815",-1100571250,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14814.cljs$lang$type = true;

cljs.core.async.t14814.cljs$lang$ctorStr = "cljs.core.async/t14814";

cljs.core.async.t14814.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t14814");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t14814 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t14814(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14815){
return (new cljs.core.async.t14814(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14815));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t14814(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7136__auto___14933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___14933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___14933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14886){
var state_val_14887 = (state_14886[(1)]);
if((state_val_14887 === (7))){
var inst_14830 = (state_14886[(7)]);
var inst_14835 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14830);
var state_14886__$1 = state_14886;
var statearr_14888_14934 = state_14886__$1;
(statearr_14888_14934[(2)] = inst_14835);

(statearr_14888_14934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (20))){
var inst_14845 = (state_14886[(8)]);
var state_14886__$1 = state_14886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14886__$1,(23),out,inst_14845);
} else {
if((state_val_14887 === (1))){
var inst_14820 = (state_14886[(9)]);
var inst_14820__$1 = calc_state.call(null);
var inst_14821 = cljs.core.seq_QMARK_.call(null,inst_14820__$1);
var state_14886__$1 = (function (){var statearr_14889 = state_14886;
(statearr_14889[(9)] = inst_14820__$1);

return statearr_14889;
})();
if(inst_14821){
var statearr_14890_14935 = state_14886__$1;
(statearr_14890_14935[(1)] = (2));

} else {
var statearr_14891_14936 = state_14886__$1;
(statearr_14891_14936[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (24))){
var inst_14838 = (state_14886[(10)]);
var inst_14830 = inst_14838;
var state_14886__$1 = (function (){var statearr_14892 = state_14886;
(statearr_14892[(7)] = inst_14830);

return statearr_14892;
})();
var statearr_14893_14937 = state_14886__$1;
(statearr_14893_14937[(2)] = null);

(statearr_14893_14937[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (4))){
var inst_14820 = (state_14886[(9)]);
var inst_14826 = (state_14886[(2)]);
var inst_14827 = cljs.core.get.call(null,inst_14826,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14828 = cljs.core.get.call(null,inst_14826,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14829 = cljs.core.get.call(null,inst_14826,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14830 = inst_14820;
var state_14886__$1 = (function (){var statearr_14894 = state_14886;
(statearr_14894[(11)] = inst_14827);

(statearr_14894[(7)] = inst_14830);

(statearr_14894[(12)] = inst_14828);

(statearr_14894[(13)] = inst_14829);

return statearr_14894;
})();
var statearr_14895_14938 = state_14886__$1;
(statearr_14895_14938[(2)] = null);

(statearr_14895_14938[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (15))){
var state_14886__$1 = state_14886;
var statearr_14896_14939 = state_14886__$1;
(statearr_14896_14939[(2)] = null);

(statearr_14896_14939[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (21))){
var inst_14838 = (state_14886[(10)]);
var inst_14830 = inst_14838;
var state_14886__$1 = (function (){var statearr_14897 = state_14886;
(statearr_14897[(7)] = inst_14830);

return statearr_14897;
})();
var statearr_14898_14940 = state_14886__$1;
(statearr_14898_14940[(2)] = null);

(statearr_14898_14940[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (13))){
var inst_14882 = (state_14886[(2)]);
var state_14886__$1 = state_14886;
var statearr_14899_14941 = state_14886__$1;
(statearr_14899_14941[(2)] = inst_14882);

(statearr_14899_14941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (22))){
var inst_14880 = (state_14886[(2)]);
var state_14886__$1 = state_14886;
var statearr_14900_14942 = state_14886__$1;
(statearr_14900_14942[(2)] = inst_14880);

(statearr_14900_14942[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (6))){
var inst_14884 = (state_14886[(2)]);
var state_14886__$1 = state_14886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14886__$1,inst_14884);
} else {
if((state_val_14887 === (25))){
var state_14886__$1 = state_14886;
var statearr_14901_14943 = state_14886__$1;
(statearr_14901_14943[(2)] = null);

(statearr_14901_14943[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (17))){
var inst_14860 = (state_14886[(14)]);
var state_14886__$1 = state_14886;
var statearr_14902_14944 = state_14886__$1;
(statearr_14902_14944[(2)] = inst_14860);

(statearr_14902_14944[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (3))){
var inst_14820 = (state_14886[(9)]);
var state_14886__$1 = state_14886;
var statearr_14903_14945 = state_14886__$1;
(statearr_14903_14945[(2)] = inst_14820);

(statearr_14903_14945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (12))){
var inst_14839 = (state_14886[(15)]);
var inst_14846 = (state_14886[(16)]);
var inst_14860 = (state_14886[(14)]);
var inst_14860__$1 = inst_14839.call(null,inst_14846);
var state_14886__$1 = (function (){var statearr_14904 = state_14886;
(statearr_14904[(14)] = inst_14860__$1);

return statearr_14904;
})();
if(cljs.core.truth_(inst_14860__$1)){
var statearr_14905_14946 = state_14886__$1;
(statearr_14905_14946[(1)] = (17));

} else {
var statearr_14906_14947 = state_14886__$1;
(statearr_14906_14947[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (2))){
var inst_14820 = (state_14886[(9)]);
var inst_14823 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14820);
var state_14886__$1 = state_14886;
var statearr_14907_14948 = state_14886__$1;
(statearr_14907_14948[(2)] = inst_14823);

(statearr_14907_14948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (23))){
var inst_14871 = (state_14886[(2)]);
var state_14886__$1 = state_14886;
if(cljs.core.truth_(inst_14871)){
var statearr_14908_14949 = state_14886__$1;
(statearr_14908_14949[(1)] = (24));

} else {
var statearr_14909_14950 = state_14886__$1;
(statearr_14909_14950[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (19))){
var inst_14868 = (state_14886[(2)]);
var state_14886__$1 = state_14886;
if(cljs.core.truth_(inst_14868)){
var statearr_14910_14951 = state_14886__$1;
(statearr_14910_14951[(1)] = (20));

} else {
var statearr_14911_14952 = state_14886__$1;
(statearr_14911_14952[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (11))){
var inst_14845 = (state_14886[(8)]);
var inst_14851 = (inst_14845 == null);
var state_14886__$1 = state_14886;
if(cljs.core.truth_(inst_14851)){
var statearr_14912_14953 = state_14886__$1;
(statearr_14912_14953[(1)] = (14));

} else {
var statearr_14913_14954 = state_14886__$1;
(statearr_14913_14954[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (9))){
var inst_14838 = (state_14886[(10)]);
var inst_14838__$1 = (state_14886[(2)]);
var inst_14839 = cljs.core.get.call(null,inst_14838__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14840 = cljs.core.get.call(null,inst_14838__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14841 = cljs.core.get.call(null,inst_14838__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14886__$1 = (function (){var statearr_14914 = state_14886;
(statearr_14914[(15)] = inst_14839);

(statearr_14914[(17)] = inst_14840);

(statearr_14914[(10)] = inst_14838__$1);

return statearr_14914;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14886__$1,(10),inst_14841);
} else {
if((state_val_14887 === (5))){
var inst_14830 = (state_14886[(7)]);
var inst_14833 = cljs.core.seq_QMARK_.call(null,inst_14830);
var state_14886__$1 = state_14886;
if(inst_14833){
var statearr_14915_14955 = state_14886__$1;
(statearr_14915_14955[(1)] = (7));

} else {
var statearr_14916_14956 = state_14886__$1;
(statearr_14916_14956[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (14))){
var inst_14846 = (state_14886[(16)]);
var inst_14853 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14846);
var state_14886__$1 = state_14886;
var statearr_14917_14957 = state_14886__$1;
(statearr_14917_14957[(2)] = inst_14853);

(statearr_14917_14957[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (26))){
var inst_14876 = (state_14886[(2)]);
var state_14886__$1 = state_14886;
var statearr_14918_14958 = state_14886__$1;
(statearr_14918_14958[(2)] = inst_14876);

(statearr_14918_14958[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (16))){
var inst_14856 = (state_14886[(2)]);
var inst_14857 = calc_state.call(null);
var inst_14830 = inst_14857;
var state_14886__$1 = (function (){var statearr_14919 = state_14886;
(statearr_14919[(7)] = inst_14830);

(statearr_14919[(18)] = inst_14856);

return statearr_14919;
})();
var statearr_14920_14959 = state_14886__$1;
(statearr_14920_14959[(2)] = null);

(statearr_14920_14959[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (10))){
var inst_14846 = (state_14886[(16)]);
var inst_14845 = (state_14886[(8)]);
var inst_14844 = (state_14886[(2)]);
var inst_14845__$1 = cljs.core.nth.call(null,inst_14844,(0),null);
var inst_14846__$1 = cljs.core.nth.call(null,inst_14844,(1),null);
var inst_14847 = (inst_14845__$1 == null);
var inst_14848 = cljs.core._EQ_.call(null,inst_14846__$1,change);
var inst_14849 = (inst_14847) || (inst_14848);
var state_14886__$1 = (function (){var statearr_14921 = state_14886;
(statearr_14921[(16)] = inst_14846__$1);

(statearr_14921[(8)] = inst_14845__$1);

return statearr_14921;
})();
if(cljs.core.truth_(inst_14849)){
var statearr_14922_14960 = state_14886__$1;
(statearr_14922_14960[(1)] = (11));

} else {
var statearr_14923_14961 = state_14886__$1;
(statearr_14923_14961[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (18))){
var inst_14839 = (state_14886[(15)]);
var inst_14840 = (state_14886[(17)]);
var inst_14846 = (state_14886[(16)]);
var inst_14863 = cljs.core.empty_QMARK_.call(null,inst_14839);
var inst_14864 = inst_14840.call(null,inst_14846);
var inst_14865 = cljs.core.not.call(null,inst_14864);
var inst_14866 = (inst_14863) && (inst_14865);
var state_14886__$1 = state_14886;
var statearr_14924_14962 = state_14886__$1;
(statearr_14924_14962[(2)] = inst_14866);

(statearr_14924_14962[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14887 === (8))){
var inst_14830 = (state_14886[(7)]);
var state_14886__$1 = state_14886;
var statearr_14925_14963 = state_14886__$1;
(statearr_14925_14963[(2)] = inst_14830);

(statearr_14925_14963[(1)] = (9));


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
});})(c__7136__auto___14933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7074__auto__,c__7136__auto___14933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7075__auto__ = null;
var cljs$core$async$mix_$_state_machine__7075__auto____0 = (function (){
var statearr_14929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14929[(0)] = cljs$core$async$mix_$_state_machine__7075__auto__);

(statearr_14929[(1)] = (1));

return statearr_14929;
});
var cljs$core$async$mix_$_state_machine__7075__auto____1 = (function (state_14886){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_14886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e14930){if((e14930 instanceof Object)){
var ex__7078__auto__ = e14930;
var statearr_14931_14964 = state_14886;
(statearr_14931_14964[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14965 = state_14886;
state_14886 = G__14965;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7075__auto__ = function(state_14886){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7075__auto____1.call(this,state_14886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7075__auto____0;
cljs$core$async$mix_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7075__auto____1;
return cljs$core$async$mix_$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___14933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7138__auto__ = (function (){var statearr_14932 = f__7137__auto__.call(null);
(statearr_14932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___14933);

return statearr_14932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___14933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj14967 = {};
return obj14967;
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
var G__14969 = arguments.length;
switch (G__14969) {
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
var G__14973 = arguments.length;
switch (G__14973) {
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
return (function (p1__14971_SHARP_){
if(cljs.core.truth_(p1__14971_SHARP_.call(null,topic))){
return p1__14971_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14971_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4531__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t14974 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14974 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14975){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14975 = meta14975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t14974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14976,meta14975__$1){
var self__ = this;
var _14976__$1 = this;
return (new cljs.core.async.t14974(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14975__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t14974.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14976){
var self__ = this;
var _14976__$1 = this;
return self__.meta14975;
});})(mults,ensure_mult))
;

cljs.core.async.t14974.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14974.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t14974.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t14974.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t14974.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t14974.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t14974.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t14974.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14975","meta14975",-1374137771,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t14974.cljs$lang$type = true;

cljs.core.async.t14974.cljs$lang$ctorStr = "cljs.core.async/t14974";

cljs.core.async.t14974.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t14974");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t14974 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t14974(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14975){
return (new cljs.core.async.t14974(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14975));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t14974(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7136__auto___15097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___15097,mults,ensure_mult,p){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___15097,mults,ensure_mult,p){
return (function (state_15048){
var state_val_15049 = (state_15048[(1)]);
if((state_val_15049 === (7))){
var inst_15044 = (state_15048[(2)]);
var state_15048__$1 = state_15048;
var statearr_15050_15098 = state_15048__$1;
(statearr_15050_15098[(2)] = inst_15044);

(statearr_15050_15098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (20))){
var state_15048__$1 = state_15048;
var statearr_15051_15099 = state_15048__$1;
(statearr_15051_15099[(2)] = null);

(statearr_15051_15099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (1))){
var state_15048__$1 = state_15048;
var statearr_15052_15100 = state_15048__$1;
(statearr_15052_15100[(2)] = null);

(statearr_15052_15100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (24))){
var inst_15027 = (state_15048[(7)]);
var inst_15036 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15027);
var state_15048__$1 = state_15048;
var statearr_15053_15101 = state_15048__$1;
(statearr_15053_15101[(2)] = inst_15036);

(statearr_15053_15101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (4))){
var inst_14979 = (state_15048[(8)]);
var inst_14979__$1 = (state_15048[(2)]);
var inst_14980 = (inst_14979__$1 == null);
var state_15048__$1 = (function (){var statearr_15054 = state_15048;
(statearr_15054[(8)] = inst_14979__$1);

return statearr_15054;
})();
if(cljs.core.truth_(inst_14980)){
var statearr_15055_15102 = state_15048__$1;
(statearr_15055_15102[(1)] = (5));

} else {
var statearr_15056_15103 = state_15048__$1;
(statearr_15056_15103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (15))){
var inst_15021 = (state_15048[(2)]);
var state_15048__$1 = state_15048;
var statearr_15057_15104 = state_15048__$1;
(statearr_15057_15104[(2)] = inst_15021);

(statearr_15057_15104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (21))){
var inst_15041 = (state_15048[(2)]);
var state_15048__$1 = (function (){var statearr_15058 = state_15048;
(statearr_15058[(9)] = inst_15041);

return statearr_15058;
})();
var statearr_15059_15105 = state_15048__$1;
(statearr_15059_15105[(2)] = null);

(statearr_15059_15105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (13))){
var inst_15003 = (state_15048[(10)]);
var inst_15005 = cljs.core.chunked_seq_QMARK_.call(null,inst_15003);
var state_15048__$1 = state_15048;
if(inst_15005){
var statearr_15060_15106 = state_15048__$1;
(statearr_15060_15106[(1)] = (16));

} else {
var statearr_15061_15107 = state_15048__$1;
(statearr_15061_15107[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (22))){
var inst_15033 = (state_15048[(2)]);
var state_15048__$1 = state_15048;
if(cljs.core.truth_(inst_15033)){
var statearr_15062_15108 = state_15048__$1;
(statearr_15062_15108[(1)] = (23));

} else {
var statearr_15063_15109 = state_15048__$1;
(statearr_15063_15109[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (6))){
var inst_15027 = (state_15048[(7)]);
var inst_15029 = (state_15048[(11)]);
var inst_14979 = (state_15048[(8)]);
var inst_15027__$1 = topic_fn.call(null,inst_14979);
var inst_15028 = cljs.core.deref.call(null,mults);
var inst_15029__$1 = cljs.core.get.call(null,inst_15028,inst_15027__$1);
var state_15048__$1 = (function (){var statearr_15064 = state_15048;
(statearr_15064[(7)] = inst_15027__$1);

(statearr_15064[(11)] = inst_15029__$1);

return statearr_15064;
})();
if(cljs.core.truth_(inst_15029__$1)){
var statearr_15065_15110 = state_15048__$1;
(statearr_15065_15110[(1)] = (19));

} else {
var statearr_15066_15111 = state_15048__$1;
(statearr_15066_15111[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (25))){
var inst_15038 = (state_15048[(2)]);
var state_15048__$1 = state_15048;
var statearr_15067_15112 = state_15048__$1;
(statearr_15067_15112[(2)] = inst_15038);

(statearr_15067_15112[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (17))){
var inst_15003 = (state_15048[(10)]);
var inst_15012 = cljs.core.first.call(null,inst_15003);
var inst_15013 = cljs.core.async.muxch_STAR_.call(null,inst_15012);
var inst_15014 = cljs.core.async.close_BANG_.call(null,inst_15013);
var inst_15015 = cljs.core.next.call(null,inst_15003);
var inst_14989 = inst_15015;
var inst_14990 = null;
var inst_14991 = (0);
var inst_14992 = (0);
var state_15048__$1 = (function (){var statearr_15068 = state_15048;
(statearr_15068[(12)] = inst_15014);

(statearr_15068[(13)] = inst_14990);

(statearr_15068[(14)] = inst_14991);

(statearr_15068[(15)] = inst_14989);

(statearr_15068[(16)] = inst_14992);

return statearr_15068;
})();
var statearr_15069_15113 = state_15048__$1;
(statearr_15069_15113[(2)] = null);

(statearr_15069_15113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (3))){
var inst_15046 = (state_15048[(2)]);
var state_15048__$1 = state_15048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15048__$1,inst_15046);
} else {
if((state_val_15049 === (12))){
var inst_15023 = (state_15048[(2)]);
var state_15048__$1 = state_15048;
var statearr_15070_15114 = state_15048__$1;
(statearr_15070_15114[(2)] = inst_15023);

(statearr_15070_15114[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (2))){
var state_15048__$1 = state_15048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15048__$1,(4),ch);
} else {
if((state_val_15049 === (23))){
var state_15048__$1 = state_15048;
var statearr_15071_15115 = state_15048__$1;
(statearr_15071_15115[(2)] = null);

(statearr_15071_15115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (19))){
var inst_15029 = (state_15048[(11)]);
var inst_14979 = (state_15048[(8)]);
var inst_15031 = cljs.core.async.muxch_STAR_.call(null,inst_15029);
var state_15048__$1 = state_15048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15048__$1,(22),inst_15031,inst_14979);
} else {
if((state_val_15049 === (11))){
var inst_15003 = (state_15048[(10)]);
var inst_14989 = (state_15048[(15)]);
var inst_15003__$1 = cljs.core.seq.call(null,inst_14989);
var state_15048__$1 = (function (){var statearr_15072 = state_15048;
(statearr_15072[(10)] = inst_15003__$1);

return statearr_15072;
})();
if(inst_15003__$1){
var statearr_15073_15116 = state_15048__$1;
(statearr_15073_15116[(1)] = (13));

} else {
var statearr_15074_15117 = state_15048__$1;
(statearr_15074_15117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (9))){
var inst_15025 = (state_15048[(2)]);
var state_15048__$1 = state_15048;
var statearr_15075_15118 = state_15048__$1;
(statearr_15075_15118[(2)] = inst_15025);

(statearr_15075_15118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (5))){
var inst_14986 = cljs.core.deref.call(null,mults);
var inst_14987 = cljs.core.vals.call(null,inst_14986);
var inst_14988 = cljs.core.seq.call(null,inst_14987);
var inst_14989 = inst_14988;
var inst_14990 = null;
var inst_14991 = (0);
var inst_14992 = (0);
var state_15048__$1 = (function (){var statearr_15076 = state_15048;
(statearr_15076[(13)] = inst_14990);

(statearr_15076[(14)] = inst_14991);

(statearr_15076[(15)] = inst_14989);

(statearr_15076[(16)] = inst_14992);

return statearr_15076;
})();
var statearr_15077_15119 = state_15048__$1;
(statearr_15077_15119[(2)] = null);

(statearr_15077_15119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (14))){
var state_15048__$1 = state_15048;
var statearr_15081_15120 = state_15048__$1;
(statearr_15081_15120[(2)] = null);

(statearr_15081_15120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (16))){
var inst_15003 = (state_15048[(10)]);
var inst_15007 = cljs.core.chunk_first.call(null,inst_15003);
var inst_15008 = cljs.core.chunk_rest.call(null,inst_15003);
var inst_15009 = cljs.core.count.call(null,inst_15007);
var inst_14989 = inst_15008;
var inst_14990 = inst_15007;
var inst_14991 = inst_15009;
var inst_14992 = (0);
var state_15048__$1 = (function (){var statearr_15082 = state_15048;
(statearr_15082[(13)] = inst_14990);

(statearr_15082[(14)] = inst_14991);

(statearr_15082[(15)] = inst_14989);

(statearr_15082[(16)] = inst_14992);

return statearr_15082;
})();
var statearr_15083_15121 = state_15048__$1;
(statearr_15083_15121[(2)] = null);

(statearr_15083_15121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (10))){
var inst_14990 = (state_15048[(13)]);
var inst_14991 = (state_15048[(14)]);
var inst_14989 = (state_15048[(15)]);
var inst_14992 = (state_15048[(16)]);
var inst_14997 = cljs.core._nth.call(null,inst_14990,inst_14992);
var inst_14998 = cljs.core.async.muxch_STAR_.call(null,inst_14997);
var inst_14999 = cljs.core.async.close_BANG_.call(null,inst_14998);
var inst_15000 = (inst_14992 + (1));
var tmp15078 = inst_14990;
var tmp15079 = inst_14991;
var tmp15080 = inst_14989;
var inst_14989__$1 = tmp15080;
var inst_14990__$1 = tmp15078;
var inst_14991__$1 = tmp15079;
var inst_14992__$1 = inst_15000;
var state_15048__$1 = (function (){var statearr_15084 = state_15048;
(statearr_15084[(13)] = inst_14990__$1);

(statearr_15084[(14)] = inst_14991__$1);

(statearr_15084[(15)] = inst_14989__$1);

(statearr_15084[(16)] = inst_14992__$1);

(statearr_15084[(17)] = inst_14999);

return statearr_15084;
})();
var statearr_15085_15122 = state_15048__$1;
(statearr_15085_15122[(2)] = null);

(statearr_15085_15122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (18))){
var inst_15018 = (state_15048[(2)]);
var state_15048__$1 = state_15048;
var statearr_15086_15123 = state_15048__$1;
(statearr_15086_15123[(2)] = inst_15018);

(statearr_15086_15123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15049 === (8))){
var inst_14991 = (state_15048[(14)]);
var inst_14992 = (state_15048[(16)]);
var inst_14994 = (inst_14992 < inst_14991);
var inst_14995 = inst_14994;
var state_15048__$1 = state_15048;
if(cljs.core.truth_(inst_14995)){
var statearr_15087_15124 = state_15048__$1;
(statearr_15087_15124[(1)] = (10));

} else {
var statearr_15088_15125 = state_15048__$1;
(statearr_15088_15125[(1)] = (11));

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
});})(c__7136__auto___15097,mults,ensure_mult,p))
;
return ((function (switch__7074__auto__,c__7136__auto___15097,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7075__auto__ = null;
var cljs$core$async$state_machine__7075__auto____0 = (function (){
var statearr_15092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15092[(0)] = cljs$core$async$state_machine__7075__auto__);

(statearr_15092[(1)] = (1));

return statearr_15092;
});
var cljs$core$async$state_machine__7075__auto____1 = (function (state_15048){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_15048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e15093){if((e15093 instanceof Object)){
var ex__7078__auto__ = e15093;
var statearr_15094_15126 = state_15048;
(statearr_15094_15126[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15127 = state_15048;
state_15048 = G__15127;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$state_machine__7075__auto__ = function(state_15048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7075__auto____1.call(this,state_15048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7075__auto____0;
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7075__auto____1;
return cljs$core$async$state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___15097,mults,ensure_mult,p))
})();
var state__7138__auto__ = (function (){var statearr_15095 = f__7137__auto__.call(null);
(statearr_15095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___15097);

return statearr_15095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___15097,mults,ensure_mult,p))
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
var G__15129 = arguments.length;
switch (G__15129) {
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
var G__15132 = arguments.length;
switch (G__15132) {
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
var G__15135 = arguments.length;
switch (G__15135) {
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
var c__7136__auto___15205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___15205,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___15205,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15174){
var state_val_15175 = (state_15174[(1)]);
if((state_val_15175 === (7))){
var state_15174__$1 = state_15174;
var statearr_15176_15206 = state_15174__$1;
(statearr_15176_15206[(2)] = null);

(statearr_15176_15206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (1))){
var state_15174__$1 = state_15174;
var statearr_15177_15207 = state_15174__$1;
(statearr_15177_15207[(2)] = null);

(statearr_15177_15207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (4))){
var inst_15138 = (state_15174[(7)]);
var inst_15140 = (inst_15138 < cnt);
var state_15174__$1 = state_15174;
if(cljs.core.truth_(inst_15140)){
var statearr_15178_15208 = state_15174__$1;
(statearr_15178_15208[(1)] = (6));

} else {
var statearr_15179_15209 = state_15174__$1;
(statearr_15179_15209[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (15))){
var inst_15170 = (state_15174[(2)]);
var state_15174__$1 = state_15174;
var statearr_15180_15210 = state_15174__$1;
(statearr_15180_15210[(2)] = inst_15170);

(statearr_15180_15210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (13))){
var inst_15163 = cljs.core.async.close_BANG_.call(null,out);
var state_15174__$1 = state_15174;
var statearr_15181_15211 = state_15174__$1;
(statearr_15181_15211[(2)] = inst_15163);

(statearr_15181_15211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (6))){
var state_15174__$1 = state_15174;
var statearr_15182_15212 = state_15174__$1;
(statearr_15182_15212[(2)] = null);

(statearr_15182_15212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (3))){
var inst_15172 = (state_15174[(2)]);
var state_15174__$1 = state_15174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15174__$1,inst_15172);
} else {
if((state_val_15175 === (12))){
var inst_15160 = (state_15174[(8)]);
var inst_15160__$1 = (state_15174[(2)]);
var inst_15161 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15160__$1);
var state_15174__$1 = (function (){var statearr_15183 = state_15174;
(statearr_15183[(8)] = inst_15160__$1);

return statearr_15183;
})();
if(cljs.core.truth_(inst_15161)){
var statearr_15184_15213 = state_15174__$1;
(statearr_15184_15213[(1)] = (13));

} else {
var statearr_15185_15214 = state_15174__$1;
(statearr_15185_15214[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (2))){
var inst_15137 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15138 = (0);
var state_15174__$1 = (function (){var statearr_15186 = state_15174;
(statearr_15186[(9)] = inst_15137);

(statearr_15186[(7)] = inst_15138);

return statearr_15186;
})();
var statearr_15187_15215 = state_15174__$1;
(statearr_15187_15215[(2)] = null);

(statearr_15187_15215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (11))){
var inst_15138 = (state_15174[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15174,(10),Object,null,(9));
var inst_15147 = chs__$1.call(null,inst_15138);
var inst_15148 = done.call(null,inst_15138);
var inst_15149 = cljs.core.async.take_BANG_.call(null,inst_15147,inst_15148);
var state_15174__$1 = state_15174;
var statearr_15188_15216 = state_15174__$1;
(statearr_15188_15216[(2)] = inst_15149);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15174__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (9))){
var inst_15138 = (state_15174[(7)]);
var inst_15151 = (state_15174[(2)]);
var inst_15152 = (inst_15138 + (1));
var inst_15138__$1 = inst_15152;
var state_15174__$1 = (function (){var statearr_15189 = state_15174;
(statearr_15189[(10)] = inst_15151);

(statearr_15189[(7)] = inst_15138__$1);

return statearr_15189;
})();
var statearr_15190_15217 = state_15174__$1;
(statearr_15190_15217[(2)] = null);

(statearr_15190_15217[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (5))){
var inst_15158 = (state_15174[(2)]);
var state_15174__$1 = (function (){var statearr_15191 = state_15174;
(statearr_15191[(11)] = inst_15158);

return statearr_15191;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15174__$1,(12),dchan);
} else {
if((state_val_15175 === (14))){
var inst_15160 = (state_15174[(8)]);
var inst_15165 = cljs.core.apply.call(null,f,inst_15160);
var state_15174__$1 = state_15174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15174__$1,(16),out,inst_15165);
} else {
if((state_val_15175 === (16))){
var inst_15167 = (state_15174[(2)]);
var state_15174__$1 = (function (){var statearr_15192 = state_15174;
(statearr_15192[(12)] = inst_15167);

return statearr_15192;
})();
var statearr_15193_15218 = state_15174__$1;
(statearr_15193_15218[(2)] = null);

(statearr_15193_15218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (10))){
var inst_15142 = (state_15174[(2)]);
var inst_15143 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15174__$1 = (function (){var statearr_15194 = state_15174;
(statearr_15194[(13)] = inst_15142);

return statearr_15194;
})();
var statearr_15195_15219 = state_15174__$1;
(statearr_15195_15219[(2)] = inst_15143);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15174__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (8))){
var inst_15156 = (state_15174[(2)]);
var state_15174__$1 = state_15174;
var statearr_15196_15220 = state_15174__$1;
(statearr_15196_15220[(2)] = inst_15156);

(statearr_15196_15220[(1)] = (5));


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
});})(c__7136__auto___15205,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7074__auto__,c__7136__auto___15205,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7075__auto__ = null;
var cljs$core$async$state_machine__7075__auto____0 = (function (){
var statearr_15200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15200[(0)] = cljs$core$async$state_machine__7075__auto__);

(statearr_15200[(1)] = (1));

return statearr_15200;
});
var cljs$core$async$state_machine__7075__auto____1 = (function (state_15174){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_15174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e15201){if((e15201 instanceof Object)){
var ex__7078__auto__ = e15201;
var statearr_15202_15221 = state_15174;
(statearr_15202_15221[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15222 = state_15174;
state_15174 = G__15222;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$state_machine__7075__auto__ = function(state_15174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7075__auto____1.call(this,state_15174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7075__auto____0;
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7075__auto____1;
return cljs$core$async$state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___15205,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7138__auto__ = (function (){var statearr_15203 = f__7137__auto__.call(null);
(statearr_15203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___15205);

return statearr_15203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___15205,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__15225 = arguments.length;
switch (G__15225) {
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
var c__7136__auto___15280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___15280,out){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___15280,out){
return (function (state_15255){
var state_val_15256 = (state_15255[(1)]);
if((state_val_15256 === (7))){
var inst_15235 = (state_15255[(7)]);
var inst_15234 = (state_15255[(8)]);
var inst_15234__$1 = (state_15255[(2)]);
var inst_15235__$1 = cljs.core.nth.call(null,inst_15234__$1,(0),null);
var inst_15236 = cljs.core.nth.call(null,inst_15234__$1,(1),null);
var inst_15237 = (inst_15235__$1 == null);
var state_15255__$1 = (function (){var statearr_15257 = state_15255;
(statearr_15257[(9)] = inst_15236);

(statearr_15257[(7)] = inst_15235__$1);

(statearr_15257[(8)] = inst_15234__$1);

return statearr_15257;
})();
if(cljs.core.truth_(inst_15237)){
var statearr_15258_15281 = state_15255__$1;
(statearr_15258_15281[(1)] = (8));

} else {
var statearr_15259_15282 = state_15255__$1;
(statearr_15259_15282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (1))){
var inst_15226 = cljs.core.vec.call(null,chs);
var inst_15227 = inst_15226;
var state_15255__$1 = (function (){var statearr_15260 = state_15255;
(statearr_15260[(10)] = inst_15227);

return statearr_15260;
})();
var statearr_15261_15283 = state_15255__$1;
(statearr_15261_15283[(2)] = null);

(statearr_15261_15283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (4))){
var inst_15227 = (state_15255[(10)]);
var state_15255__$1 = state_15255;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15255__$1,(7),inst_15227);
} else {
if((state_val_15256 === (6))){
var inst_15251 = (state_15255[(2)]);
var state_15255__$1 = state_15255;
var statearr_15262_15284 = state_15255__$1;
(statearr_15262_15284[(2)] = inst_15251);

(statearr_15262_15284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (3))){
var inst_15253 = (state_15255[(2)]);
var state_15255__$1 = state_15255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15255__$1,inst_15253);
} else {
if((state_val_15256 === (2))){
var inst_15227 = (state_15255[(10)]);
var inst_15229 = cljs.core.count.call(null,inst_15227);
var inst_15230 = (inst_15229 > (0));
var state_15255__$1 = state_15255;
if(cljs.core.truth_(inst_15230)){
var statearr_15264_15285 = state_15255__$1;
(statearr_15264_15285[(1)] = (4));

} else {
var statearr_15265_15286 = state_15255__$1;
(statearr_15265_15286[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (11))){
var inst_15227 = (state_15255[(10)]);
var inst_15244 = (state_15255[(2)]);
var tmp15263 = inst_15227;
var inst_15227__$1 = tmp15263;
var state_15255__$1 = (function (){var statearr_15266 = state_15255;
(statearr_15266[(11)] = inst_15244);

(statearr_15266[(10)] = inst_15227__$1);

return statearr_15266;
})();
var statearr_15267_15287 = state_15255__$1;
(statearr_15267_15287[(2)] = null);

(statearr_15267_15287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (9))){
var inst_15235 = (state_15255[(7)]);
var state_15255__$1 = state_15255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15255__$1,(11),out,inst_15235);
} else {
if((state_val_15256 === (5))){
var inst_15249 = cljs.core.async.close_BANG_.call(null,out);
var state_15255__$1 = state_15255;
var statearr_15268_15288 = state_15255__$1;
(statearr_15268_15288[(2)] = inst_15249);

(statearr_15268_15288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (10))){
var inst_15247 = (state_15255[(2)]);
var state_15255__$1 = state_15255;
var statearr_15269_15289 = state_15255__$1;
(statearr_15269_15289[(2)] = inst_15247);

(statearr_15269_15289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15256 === (8))){
var inst_15227 = (state_15255[(10)]);
var inst_15236 = (state_15255[(9)]);
var inst_15235 = (state_15255[(7)]);
var inst_15234 = (state_15255[(8)]);
var inst_15239 = (function (){var cs = inst_15227;
var vec__15232 = inst_15234;
var v = inst_15235;
var c = inst_15236;
return ((function (cs,vec__15232,v,c,inst_15227,inst_15236,inst_15235,inst_15234,state_val_15256,c__7136__auto___15280,out){
return (function (p1__15223_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15223_SHARP_);
});
;})(cs,vec__15232,v,c,inst_15227,inst_15236,inst_15235,inst_15234,state_val_15256,c__7136__auto___15280,out))
})();
var inst_15240 = cljs.core.filterv.call(null,inst_15239,inst_15227);
var inst_15227__$1 = inst_15240;
var state_15255__$1 = (function (){var statearr_15270 = state_15255;
(statearr_15270[(10)] = inst_15227__$1);

return statearr_15270;
})();
var statearr_15271_15290 = state_15255__$1;
(statearr_15271_15290[(2)] = null);

(statearr_15271_15290[(1)] = (2));


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
});})(c__7136__auto___15280,out))
;
return ((function (switch__7074__auto__,c__7136__auto___15280,out){
return (function() {
var cljs$core$async$state_machine__7075__auto__ = null;
var cljs$core$async$state_machine__7075__auto____0 = (function (){
var statearr_15275 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15275[(0)] = cljs$core$async$state_machine__7075__auto__);

(statearr_15275[(1)] = (1));

return statearr_15275;
});
var cljs$core$async$state_machine__7075__auto____1 = (function (state_15255){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_15255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e15276){if((e15276 instanceof Object)){
var ex__7078__auto__ = e15276;
var statearr_15277_15291 = state_15255;
(statearr_15277_15291[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15292 = state_15255;
state_15255 = G__15292;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$state_machine__7075__auto__ = function(state_15255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7075__auto____1.call(this,state_15255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7075__auto____0;
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7075__auto____1;
return cljs$core$async$state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___15280,out))
})();
var state__7138__auto__ = (function (){var statearr_15278 = f__7137__auto__.call(null);
(statearr_15278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___15280);

return statearr_15278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___15280,out))
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
var G__15294 = arguments.length;
switch (G__15294) {
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
var c__7136__auto___15342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___15342,out){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___15342,out){
return (function (state_15318){
var state_val_15319 = (state_15318[(1)]);
if((state_val_15319 === (7))){
var inst_15300 = (state_15318[(7)]);
var inst_15300__$1 = (state_15318[(2)]);
var inst_15301 = (inst_15300__$1 == null);
var inst_15302 = cljs.core.not.call(null,inst_15301);
var state_15318__$1 = (function (){var statearr_15320 = state_15318;
(statearr_15320[(7)] = inst_15300__$1);

return statearr_15320;
})();
if(inst_15302){
var statearr_15321_15343 = state_15318__$1;
(statearr_15321_15343[(1)] = (8));

} else {
var statearr_15322_15344 = state_15318__$1;
(statearr_15322_15344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (1))){
var inst_15295 = (0);
var state_15318__$1 = (function (){var statearr_15323 = state_15318;
(statearr_15323[(8)] = inst_15295);

return statearr_15323;
})();
var statearr_15324_15345 = state_15318__$1;
(statearr_15324_15345[(2)] = null);

(statearr_15324_15345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (4))){
var state_15318__$1 = state_15318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15318__$1,(7),ch);
} else {
if((state_val_15319 === (6))){
var inst_15313 = (state_15318[(2)]);
var state_15318__$1 = state_15318;
var statearr_15325_15346 = state_15318__$1;
(statearr_15325_15346[(2)] = inst_15313);

(statearr_15325_15346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (3))){
var inst_15315 = (state_15318[(2)]);
var inst_15316 = cljs.core.async.close_BANG_.call(null,out);
var state_15318__$1 = (function (){var statearr_15326 = state_15318;
(statearr_15326[(9)] = inst_15315);

return statearr_15326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15318__$1,inst_15316);
} else {
if((state_val_15319 === (2))){
var inst_15295 = (state_15318[(8)]);
var inst_15297 = (inst_15295 < n);
var state_15318__$1 = state_15318;
if(cljs.core.truth_(inst_15297)){
var statearr_15327_15347 = state_15318__$1;
(statearr_15327_15347[(1)] = (4));

} else {
var statearr_15328_15348 = state_15318__$1;
(statearr_15328_15348[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (11))){
var inst_15295 = (state_15318[(8)]);
var inst_15305 = (state_15318[(2)]);
var inst_15306 = (inst_15295 + (1));
var inst_15295__$1 = inst_15306;
var state_15318__$1 = (function (){var statearr_15329 = state_15318;
(statearr_15329[(10)] = inst_15305);

(statearr_15329[(8)] = inst_15295__$1);

return statearr_15329;
})();
var statearr_15330_15349 = state_15318__$1;
(statearr_15330_15349[(2)] = null);

(statearr_15330_15349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (9))){
var state_15318__$1 = state_15318;
var statearr_15331_15350 = state_15318__$1;
(statearr_15331_15350[(2)] = null);

(statearr_15331_15350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (5))){
var state_15318__$1 = state_15318;
var statearr_15332_15351 = state_15318__$1;
(statearr_15332_15351[(2)] = null);

(statearr_15332_15351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (10))){
var inst_15310 = (state_15318[(2)]);
var state_15318__$1 = state_15318;
var statearr_15333_15352 = state_15318__$1;
(statearr_15333_15352[(2)] = inst_15310);

(statearr_15333_15352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (8))){
var inst_15300 = (state_15318[(7)]);
var state_15318__$1 = state_15318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15318__$1,(11),out,inst_15300);
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
});})(c__7136__auto___15342,out))
;
return ((function (switch__7074__auto__,c__7136__auto___15342,out){
return (function() {
var cljs$core$async$state_machine__7075__auto__ = null;
var cljs$core$async$state_machine__7075__auto____0 = (function (){
var statearr_15337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15337[(0)] = cljs$core$async$state_machine__7075__auto__);

(statearr_15337[(1)] = (1));

return statearr_15337;
});
var cljs$core$async$state_machine__7075__auto____1 = (function (state_15318){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_15318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e15338){if((e15338 instanceof Object)){
var ex__7078__auto__ = e15338;
var statearr_15339_15353 = state_15318;
(statearr_15339_15353[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15354 = state_15318;
state_15318 = G__15354;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$state_machine__7075__auto__ = function(state_15318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7075__auto____1.call(this,state_15318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7075__auto____0;
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7075__auto____1;
return cljs$core$async$state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___15342,out))
})();
var state__7138__auto__ = (function (){var statearr_15340 = f__7137__auto__.call(null);
(statearr_15340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___15342);

return statearr_15340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___15342,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t15362 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15362 = (function (map_LT_,f,ch,meta15363){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15363 = meta15363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15364,meta15363__$1){
var self__ = this;
var _15364__$1 = this;
return (new cljs.core.async.t15362(self__.map_LT_,self__.f,self__.ch,meta15363__$1));
});

cljs.core.async.t15362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15364){
var self__ = this;
var _15364__$1 = this;
return self__.meta15363;
});

cljs.core.async.t15362.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15362.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15362.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15362.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15362.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t15365 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15365 = (function (map_LT_,f,ch,meta15363,_,fn1,meta15366){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15363 = meta15363;
this._ = _;
this.fn1 = fn1;
this.meta15366 = meta15366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15367,meta15366__$1){
var self__ = this;
var _15367__$1 = this;
return (new cljs.core.async.t15365(self__.map_LT_,self__.f,self__.ch,self__.meta15363,self__._,self__.fn1,meta15366__$1));
});})(___$1))
;

cljs.core.async.t15365.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15367){
var self__ = this;
var _15367__$1 = this;
return self__.meta15366;
});})(___$1))
;

cljs.core.async.t15365.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15355_SHARP_){
return f1.call(null,(((p1__15355_SHARP_ == null))?null:self__.f.call(null,p1__15355_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t15365.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15363","meta15363",1550140676,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15366","meta15366",1428037675,null)], null);
});})(___$1))
;

cljs.core.async.t15365.cljs$lang$type = true;

cljs.core.async.t15365.cljs$lang$ctorStr = "cljs.core.async/t15365";

cljs.core.async.t15365.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t15365");
});})(___$1))
;

cljs.core.async.__GT_t15365 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t15365(map_LT___$1,f__$1,ch__$1,meta15363__$1,___$2,fn1__$1,meta15366){
return (new cljs.core.async.t15365(map_LT___$1,f__$1,ch__$1,meta15363__$1,___$2,fn1__$1,meta15366));
});})(___$1))
;

}

return (new cljs.core.async.t15365(self__.map_LT_,self__.f,self__.ch,self__.meta15363,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t15362.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15362.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t15362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15363","meta15363",1550140676,null)], null);
});

cljs.core.async.t15362.cljs$lang$type = true;

cljs.core.async.t15362.cljs$lang$ctorStr = "cljs.core.async/t15362";

cljs.core.async.t15362.cljs$lang$ctorPrWriter = (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t15362");
});

cljs.core.async.__GT_t15362 = (function cljs$core$async$map_LT__$___GT_t15362(map_LT___$1,f__$1,ch__$1,meta15363){
return (new cljs.core.async.t15362(map_LT___$1,f__$1,ch__$1,meta15363));
});

}

return (new cljs.core.async.t15362(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t15371 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15371 = (function (map_GT_,f,ch,meta15372){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15372 = meta15372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15373,meta15372__$1){
var self__ = this;
var _15373__$1 = this;
return (new cljs.core.async.t15371(self__.map_GT_,self__.f,self__.ch,meta15372__$1));
});

cljs.core.async.t15371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15373){
var self__ = this;
var _15373__$1 = this;
return self__.meta15372;
});

cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t15371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15372","meta15372",-510327629,null)], null);
});

cljs.core.async.t15371.cljs$lang$type = true;

cljs.core.async.t15371.cljs$lang$ctorStr = "cljs.core.async/t15371";

cljs.core.async.t15371.cljs$lang$ctorPrWriter = (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t15371");
});

cljs.core.async.__GT_t15371 = (function cljs$core$async$map_GT__$___GT_t15371(map_GT___$1,f__$1,ch__$1,meta15372){
return (new cljs.core.async.t15371(map_GT___$1,f__$1,ch__$1,meta15372));
});

}

return (new cljs.core.async.t15371(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t15377 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15377 = (function (filter_GT_,p,ch,meta15378){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15378 = meta15378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15379,meta15378__$1){
var self__ = this;
var _15379__$1 = this;
return (new cljs.core.async.t15377(self__.filter_GT_,self__.p,self__.ch,meta15378__$1));
});

cljs.core.async.t15377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15379){
var self__ = this;
var _15379__$1 = this;
return self__.meta15378;
});

cljs.core.async.t15377.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15377.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15377.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15377.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15377.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15377.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15377.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t15377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15378","meta15378",1011897466,null)], null);
});

cljs.core.async.t15377.cljs$lang$type = true;

cljs.core.async.t15377.cljs$lang$ctorStr = "cljs.core.async/t15377";

cljs.core.async.t15377.cljs$lang$ctorPrWriter = (function (this__5110__auto__,writer__5111__auto__,opt__5112__auto__){
return cljs.core._write.call(null,writer__5111__auto__,"cljs.core.async/t15377");
});

cljs.core.async.__GT_t15377 = (function cljs$core$async$filter_GT__$___GT_t15377(filter_GT___$1,p__$1,ch__$1,meta15378){
return (new cljs.core.async.t15377(filter_GT___$1,p__$1,ch__$1,meta15378));
});

}

return (new cljs.core.async.t15377(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15381 = arguments.length;
switch (G__15381) {
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
var c__7136__auto___15424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___15424,out){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___15424,out){
return (function (state_15402){
var state_val_15403 = (state_15402[(1)]);
if((state_val_15403 === (7))){
var inst_15398 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
var statearr_15404_15425 = state_15402__$1;
(statearr_15404_15425[(2)] = inst_15398);

(statearr_15404_15425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (1))){
var state_15402__$1 = state_15402;
var statearr_15405_15426 = state_15402__$1;
(statearr_15405_15426[(2)] = null);

(statearr_15405_15426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (4))){
var inst_15384 = (state_15402[(7)]);
var inst_15384__$1 = (state_15402[(2)]);
var inst_15385 = (inst_15384__$1 == null);
var state_15402__$1 = (function (){var statearr_15406 = state_15402;
(statearr_15406[(7)] = inst_15384__$1);

return statearr_15406;
})();
if(cljs.core.truth_(inst_15385)){
var statearr_15407_15427 = state_15402__$1;
(statearr_15407_15427[(1)] = (5));

} else {
var statearr_15408_15428 = state_15402__$1;
(statearr_15408_15428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (6))){
var inst_15384 = (state_15402[(7)]);
var inst_15389 = p.call(null,inst_15384);
var state_15402__$1 = state_15402;
if(cljs.core.truth_(inst_15389)){
var statearr_15409_15429 = state_15402__$1;
(statearr_15409_15429[(1)] = (8));

} else {
var statearr_15410_15430 = state_15402__$1;
(statearr_15410_15430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (3))){
var inst_15400 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15402__$1,inst_15400);
} else {
if((state_val_15403 === (2))){
var state_15402__$1 = state_15402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15402__$1,(4),ch);
} else {
if((state_val_15403 === (11))){
var inst_15392 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
var statearr_15411_15431 = state_15402__$1;
(statearr_15411_15431[(2)] = inst_15392);

(statearr_15411_15431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (9))){
var state_15402__$1 = state_15402;
var statearr_15412_15432 = state_15402__$1;
(statearr_15412_15432[(2)] = null);

(statearr_15412_15432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (5))){
var inst_15387 = cljs.core.async.close_BANG_.call(null,out);
var state_15402__$1 = state_15402;
var statearr_15413_15433 = state_15402__$1;
(statearr_15413_15433[(2)] = inst_15387);

(statearr_15413_15433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (10))){
var inst_15395 = (state_15402[(2)]);
var state_15402__$1 = (function (){var statearr_15414 = state_15402;
(statearr_15414[(8)] = inst_15395);

return statearr_15414;
})();
var statearr_15415_15434 = state_15402__$1;
(statearr_15415_15434[(2)] = null);

(statearr_15415_15434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (8))){
var inst_15384 = (state_15402[(7)]);
var state_15402__$1 = state_15402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15402__$1,(11),out,inst_15384);
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
});})(c__7136__auto___15424,out))
;
return ((function (switch__7074__auto__,c__7136__auto___15424,out){
return (function() {
var cljs$core$async$state_machine__7075__auto__ = null;
var cljs$core$async$state_machine__7075__auto____0 = (function (){
var statearr_15419 = [null,null,null,null,null,null,null,null,null];
(statearr_15419[(0)] = cljs$core$async$state_machine__7075__auto__);

(statearr_15419[(1)] = (1));

return statearr_15419;
});
var cljs$core$async$state_machine__7075__auto____1 = (function (state_15402){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_15402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e15420){if((e15420 instanceof Object)){
var ex__7078__auto__ = e15420;
var statearr_15421_15435 = state_15402;
(statearr_15421_15435[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15436 = state_15402;
state_15402 = G__15436;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$state_machine__7075__auto__ = function(state_15402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7075__auto____1.call(this,state_15402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7075__auto____0;
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7075__auto____1;
return cljs$core$async$state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___15424,out))
})();
var state__7138__auto__ = (function (){var statearr_15422 = f__7137__auto__.call(null);
(statearr_15422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___15424);

return statearr_15422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___15424,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__15438 = arguments.length;
switch (G__15438) {
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
var c__7136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto__){
return (function (state_15605){
var state_val_15606 = (state_15605[(1)]);
if((state_val_15606 === (7))){
var inst_15601 = (state_15605[(2)]);
var state_15605__$1 = state_15605;
var statearr_15607_15648 = state_15605__$1;
(statearr_15607_15648[(2)] = inst_15601);

(statearr_15607_15648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (20))){
var inst_15571 = (state_15605[(7)]);
var inst_15582 = (state_15605[(2)]);
var inst_15583 = cljs.core.next.call(null,inst_15571);
var inst_15557 = inst_15583;
var inst_15558 = null;
var inst_15559 = (0);
var inst_15560 = (0);
var state_15605__$1 = (function (){var statearr_15608 = state_15605;
(statearr_15608[(8)] = inst_15560);

(statearr_15608[(9)] = inst_15558);

(statearr_15608[(10)] = inst_15557);

(statearr_15608[(11)] = inst_15582);

(statearr_15608[(12)] = inst_15559);

return statearr_15608;
})();
var statearr_15609_15649 = state_15605__$1;
(statearr_15609_15649[(2)] = null);

(statearr_15609_15649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (1))){
var state_15605__$1 = state_15605;
var statearr_15610_15650 = state_15605__$1;
(statearr_15610_15650[(2)] = null);

(statearr_15610_15650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (4))){
var inst_15546 = (state_15605[(13)]);
var inst_15546__$1 = (state_15605[(2)]);
var inst_15547 = (inst_15546__$1 == null);
var state_15605__$1 = (function (){var statearr_15611 = state_15605;
(statearr_15611[(13)] = inst_15546__$1);

return statearr_15611;
})();
if(cljs.core.truth_(inst_15547)){
var statearr_15612_15651 = state_15605__$1;
(statearr_15612_15651[(1)] = (5));

} else {
var statearr_15613_15652 = state_15605__$1;
(statearr_15613_15652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (15))){
var state_15605__$1 = state_15605;
var statearr_15617_15653 = state_15605__$1;
(statearr_15617_15653[(2)] = null);

(statearr_15617_15653[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (21))){
var state_15605__$1 = state_15605;
var statearr_15618_15654 = state_15605__$1;
(statearr_15618_15654[(2)] = null);

(statearr_15618_15654[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (13))){
var inst_15560 = (state_15605[(8)]);
var inst_15558 = (state_15605[(9)]);
var inst_15557 = (state_15605[(10)]);
var inst_15559 = (state_15605[(12)]);
var inst_15567 = (state_15605[(2)]);
var inst_15568 = (inst_15560 + (1));
var tmp15614 = inst_15558;
var tmp15615 = inst_15557;
var tmp15616 = inst_15559;
var inst_15557__$1 = tmp15615;
var inst_15558__$1 = tmp15614;
var inst_15559__$1 = tmp15616;
var inst_15560__$1 = inst_15568;
var state_15605__$1 = (function (){var statearr_15619 = state_15605;
(statearr_15619[(8)] = inst_15560__$1);

(statearr_15619[(14)] = inst_15567);

(statearr_15619[(9)] = inst_15558__$1);

(statearr_15619[(10)] = inst_15557__$1);

(statearr_15619[(12)] = inst_15559__$1);

return statearr_15619;
})();
var statearr_15620_15655 = state_15605__$1;
(statearr_15620_15655[(2)] = null);

(statearr_15620_15655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (22))){
var state_15605__$1 = state_15605;
var statearr_15621_15656 = state_15605__$1;
(statearr_15621_15656[(2)] = null);

(statearr_15621_15656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (6))){
var inst_15546 = (state_15605[(13)]);
var inst_15555 = f.call(null,inst_15546);
var inst_15556 = cljs.core.seq.call(null,inst_15555);
var inst_15557 = inst_15556;
var inst_15558 = null;
var inst_15559 = (0);
var inst_15560 = (0);
var state_15605__$1 = (function (){var statearr_15622 = state_15605;
(statearr_15622[(8)] = inst_15560);

(statearr_15622[(9)] = inst_15558);

(statearr_15622[(10)] = inst_15557);

(statearr_15622[(12)] = inst_15559);

return statearr_15622;
})();
var statearr_15623_15657 = state_15605__$1;
(statearr_15623_15657[(2)] = null);

(statearr_15623_15657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (17))){
var inst_15571 = (state_15605[(7)]);
var inst_15575 = cljs.core.chunk_first.call(null,inst_15571);
var inst_15576 = cljs.core.chunk_rest.call(null,inst_15571);
var inst_15577 = cljs.core.count.call(null,inst_15575);
var inst_15557 = inst_15576;
var inst_15558 = inst_15575;
var inst_15559 = inst_15577;
var inst_15560 = (0);
var state_15605__$1 = (function (){var statearr_15624 = state_15605;
(statearr_15624[(8)] = inst_15560);

(statearr_15624[(9)] = inst_15558);

(statearr_15624[(10)] = inst_15557);

(statearr_15624[(12)] = inst_15559);

return statearr_15624;
})();
var statearr_15625_15658 = state_15605__$1;
(statearr_15625_15658[(2)] = null);

(statearr_15625_15658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (3))){
var inst_15603 = (state_15605[(2)]);
var state_15605__$1 = state_15605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15605__$1,inst_15603);
} else {
if((state_val_15606 === (12))){
var inst_15591 = (state_15605[(2)]);
var state_15605__$1 = state_15605;
var statearr_15626_15659 = state_15605__$1;
(statearr_15626_15659[(2)] = inst_15591);

(statearr_15626_15659[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (2))){
var state_15605__$1 = state_15605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15605__$1,(4),in$);
} else {
if((state_val_15606 === (23))){
var inst_15599 = (state_15605[(2)]);
var state_15605__$1 = state_15605;
var statearr_15627_15660 = state_15605__$1;
(statearr_15627_15660[(2)] = inst_15599);

(statearr_15627_15660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (19))){
var inst_15586 = (state_15605[(2)]);
var state_15605__$1 = state_15605;
var statearr_15628_15661 = state_15605__$1;
(statearr_15628_15661[(2)] = inst_15586);

(statearr_15628_15661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (11))){
var inst_15571 = (state_15605[(7)]);
var inst_15557 = (state_15605[(10)]);
var inst_15571__$1 = cljs.core.seq.call(null,inst_15557);
var state_15605__$1 = (function (){var statearr_15629 = state_15605;
(statearr_15629[(7)] = inst_15571__$1);

return statearr_15629;
})();
if(inst_15571__$1){
var statearr_15630_15662 = state_15605__$1;
(statearr_15630_15662[(1)] = (14));

} else {
var statearr_15631_15663 = state_15605__$1;
(statearr_15631_15663[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (9))){
var inst_15593 = (state_15605[(2)]);
var inst_15594 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15605__$1 = (function (){var statearr_15632 = state_15605;
(statearr_15632[(15)] = inst_15593);

return statearr_15632;
})();
if(cljs.core.truth_(inst_15594)){
var statearr_15633_15664 = state_15605__$1;
(statearr_15633_15664[(1)] = (21));

} else {
var statearr_15634_15665 = state_15605__$1;
(statearr_15634_15665[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (5))){
var inst_15549 = cljs.core.async.close_BANG_.call(null,out);
var state_15605__$1 = state_15605;
var statearr_15635_15666 = state_15605__$1;
(statearr_15635_15666[(2)] = inst_15549);

(statearr_15635_15666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (14))){
var inst_15571 = (state_15605[(7)]);
var inst_15573 = cljs.core.chunked_seq_QMARK_.call(null,inst_15571);
var state_15605__$1 = state_15605;
if(inst_15573){
var statearr_15636_15667 = state_15605__$1;
(statearr_15636_15667[(1)] = (17));

} else {
var statearr_15637_15668 = state_15605__$1;
(statearr_15637_15668[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (16))){
var inst_15589 = (state_15605[(2)]);
var state_15605__$1 = state_15605;
var statearr_15638_15669 = state_15605__$1;
(statearr_15638_15669[(2)] = inst_15589);

(statearr_15638_15669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15606 === (10))){
var inst_15560 = (state_15605[(8)]);
var inst_15558 = (state_15605[(9)]);
var inst_15565 = cljs.core._nth.call(null,inst_15558,inst_15560);
var state_15605__$1 = state_15605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15605__$1,(13),out,inst_15565);
} else {
if((state_val_15606 === (18))){
var inst_15571 = (state_15605[(7)]);
var inst_15580 = cljs.core.first.call(null,inst_15571);
var state_15605__$1 = state_15605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15605__$1,(20),out,inst_15580);
} else {
if((state_val_15606 === (8))){
var inst_15560 = (state_15605[(8)]);
var inst_15559 = (state_15605[(12)]);
var inst_15562 = (inst_15560 < inst_15559);
var inst_15563 = inst_15562;
var state_15605__$1 = state_15605;
if(cljs.core.truth_(inst_15563)){
var statearr_15639_15670 = state_15605__$1;
(statearr_15639_15670[(1)] = (10));

} else {
var statearr_15640_15671 = state_15605__$1;
(statearr_15640_15671[(1)] = (11));

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
});})(c__7136__auto__))
;
return ((function (switch__7074__auto__,c__7136__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7075__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7075__auto____0 = (function (){
var statearr_15644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15644[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7075__auto__);

(statearr_15644[(1)] = (1));

return statearr_15644;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7075__auto____1 = (function (state_15605){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_15605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e15645){if((e15645 instanceof Object)){
var ex__7078__auto__ = e15645;
var statearr_15646_15672 = state_15605;
(statearr_15646_15672[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15673 = state_15605;
state_15605 = G__15673;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7075__auto__ = function(state_15605){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7075__auto____1.call(this,state_15605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7075__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7075__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto__))
})();
var state__7138__auto__ = (function (){var statearr_15647 = f__7137__auto__.call(null);
(statearr_15647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);

return statearr_15647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__))
);

return c__7136__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__15675 = arguments.length;
switch (G__15675) {
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
var G__15678 = arguments.length;
switch (G__15678) {
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
var G__15681 = arguments.length;
switch (G__15681) {
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
var c__7136__auto___15731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___15731,out){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___15731,out){
return (function (state_15705){
var state_val_15706 = (state_15705[(1)]);
if((state_val_15706 === (7))){
var inst_15700 = (state_15705[(2)]);
var state_15705__$1 = state_15705;
var statearr_15707_15732 = state_15705__$1;
(statearr_15707_15732[(2)] = inst_15700);

(statearr_15707_15732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (1))){
var inst_15682 = null;
var state_15705__$1 = (function (){var statearr_15708 = state_15705;
(statearr_15708[(7)] = inst_15682);

return statearr_15708;
})();
var statearr_15709_15733 = state_15705__$1;
(statearr_15709_15733[(2)] = null);

(statearr_15709_15733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (4))){
var inst_15685 = (state_15705[(8)]);
var inst_15685__$1 = (state_15705[(2)]);
var inst_15686 = (inst_15685__$1 == null);
var inst_15687 = cljs.core.not.call(null,inst_15686);
var state_15705__$1 = (function (){var statearr_15710 = state_15705;
(statearr_15710[(8)] = inst_15685__$1);

return statearr_15710;
})();
if(inst_15687){
var statearr_15711_15734 = state_15705__$1;
(statearr_15711_15734[(1)] = (5));

} else {
var statearr_15712_15735 = state_15705__$1;
(statearr_15712_15735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (6))){
var state_15705__$1 = state_15705;
var statearr_15713_15736 = state_15705__$1;
(statearr_15713_15736[(2)] = null);

(statearr_15713_15736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (3))){
var inst_15702 = (state_15705[(2)]);
var inst_15703 = cljs.core.async.close_BANG_.call(null,out);
var state_15705__$1 = (function (){var statearr_15714 = state_15705;
(statearr_15714[(9)] = inst_15702);

return statearr_15714;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15705__$1,inst_15703);
} else {
if((state_val_15706 === (2))){
var state_15705__$1 = state_15705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15705__$1,(4),ch);
} else {
if((state_val_15706 === (11))){
var inst_15685 = (state_15705[(8)]);
var inst_15694 = (state_15705[(2)]);
var inst_15682 = inst_15685;
var state_15705__$1 = (function (){var statearr_15715 = state_15705;
(statearr_15715[(10)] = inst_15694);

(statearr_15715[(7)] = inst_15682);

return statearr_15715;
})();
var statearr_15716_15737 = state_15705__$1;
(statearr_15716_15737[(2)] = null);

(statearr_15716_15737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (9))){
var inst_15685 = (state_15705[(8)]);
var state_15705__$1 = state_15705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15705__$1,(11),out,inst_15685);
} else {
if((state_val_15706 === (5))){
var inst_15685 = (state_15705[(8)]);
var inst_15682 = (state_15705[(7)]);
var inst_15689 = cljs.core._EQ_.call(null,inst_15685,inst_15682);
var state_15705__$1 = state_15705;
if(inst_15689){
var statearr_15718_15738 = state_15705__$1;
(statearr_15718_15738[(1)] = (8));

} else {
var statearr_15719_15739 = state_15705__$1;
(statearr_15719_15739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (10))){
var inst_15697 = (state_15705[(2)]);
var state_15705__$1 = state_15705;
var statearr_15720_15740 = state_15705__$1;
(statearr_15720_15740[(2)] = inst_15697);

(statearr_15720_15740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15706 === (8))){
var inst_15682 = (state_15705[(7)]);
var tmp15717 = inst_15682;
var inst_15682__$1 = tmp15717;
var state_15705__$1 = (function (){var statearr_15721 = state_15705;
(statearr_15721[(7)] = inst_15682__$1);

return statearr_15721;
})();
var statearr_15722_15741 = state_15705__$1;
(statearr_15722_15741[(2)] = null);

(statearr_15722_15741[(1)] = (2));


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
});})(c__7136__auto___15731,out))
;
return ((function (switch__7074__auto__,c__7136__auto___15731,out){
return (function() {
var cljs$core$async$state_machine__7075__auto__ = null;
var cljs$core$async$state_machine__7075__auto____0 = (function (){
var statearr_15726 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15726[(0)] = cljs$core$async$state_machine__7075__auto__);

(statearr_15726[(1)] = (1));

return statearr_15726;
});
var cljs$core$async$state_machine__7075__auto____1 = (function (state_15705){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_15705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e15727){if((e15727 instanceof Object)){
var ex__7078__auto__ = e15727;
var statearr_15728_15742 = state_15705;
(statearr_15728_15742[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15743 = state_15705;
state_15705 = G__15743;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$state_machine__7075__auto__ = function(state_15705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7075__auto____1.call(this,state_15705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7075__auto____0;
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7075__auto____1;
return cljs$core$async$state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___15731,out))
})();
var state__7138__auto__ = (function (){var statearr_15729 = f__7137__auto__.call(null);
(statearr_15729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___15731);

return statearr_15729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___15731,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__15745 = arguments.length;
switch (G__15745) {
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
var c__7136__auto___15814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___15814,out){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___15814,out){
return (function (state_15783){
var state_val_15784 = (state_15783[(1)]);
if((state_val_15784 === (7))){
var inst_15779 = (state_15783[(2)]);
var state_15783__$1 = state_15783;
var statearr_15785_15815 = state_15783__$1;
(statearr_15785_15815[(2)] = inst_15779);

(statearr_15785_15815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (1))){
var inst_15746 = (new Array(n));
var inst_15747 = inst_15746;
var inst_15748 = (0);
var state_15783__$1 = (function (){var statearr_15786 = state_15783;
(statearr_15786[(7)] = inst_15748);

(statearr_15786[(8)] = inst_15747);

return statearr_15786;
})();
var statearr_15787_15816 = state_15783__$1;
(statearr_15787_15816[(2)] = null);

(statearr_15787_15816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (4))){
var inst_15751 = (state_15783[(9)]);
var inst_15751__$1 = (state_15783[(2)]);
var inst_15752 = (inst_15751__$1 == null);
var inst_15753 = cljs.core.not.call(null,inst_15752);
var state_15783__$1 = (function (){var statearr_15788 = state_15783;
(statearr_15788[(9)] = inst_15751__$1);

return statearr_15788;
})();
if(inst_15753){
var statearr_15789_15817 = state_15783__$1;
(statearr_15789_15817[(1)] = (5));

} else {
var statearr_15790_15818 = state_15783__$1;
(statearr_15790_15818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (15))){
var inst_15773 = (state_15783[(2)]);
var state_15783__$1 = state_15783;
var statearr_15791_15819 = state_15783__$1;
(statearr_15791_15819[(2)] = inst_15773);

(statearr_15791_15819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (13))){
var state_15783__$1 = state_15783;
var statearr_15792_15820 = state_15783__$1;
(statearr_15792_15820[(2)] = null);

(statearr_15792_15820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (6))){
var inst_15748 = (state_15783[(7)]);
var inst_15769 = (inst_15748 > (0));
var state_15783__$1 = state_15783;
if(cljs.core.truth_(inst_15769)){
var statearr_15793_15821 = state_15783__$1;
(statearr_15793_15821[(1)] = (12));

} else {
var statearr_15794_15822 = state_15783__$1;
(statearr_15794_15822[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (3))){
var inst_15781 = (state_15783[(2)]);
var state_15783__$1 = state_15783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15783__$1,inst_15781);
} else {
if((state_val_15784 === (12))){
var inst_15747 = (state_15783[(8)]);
var inst_15771 = cljs.core.vec.call(null,inst_15747);
var state_15783__$1 = state_15783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15783__$1,(15),out,inst_15771);
} else {
if((state_val_15784 === (2))){
var state_15783__$1 = state_15783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15783__$1,(4),ch);
} else {
if((state_val_15784 === (11))){
var inst_15763 = (state_15783[(2)]);
var inst_15764 = (new Array(n));
var inst_15747 = inst_15764;
var inst_15748 = (0);
var state_15783__$1 = (function (){var statearr_15795 = state_15783;
(statearr_15795[(7)] = inst_15748);

(statearr_15795[(8)] = inst_15747);

(statearr_15795[(10)] = inst_15763);

return statearr_15795;
})();
var statearr_15796_15823 = state_15783__$1;
(statearr_15796_15823[(2)] = null);

(statearr_15796_15823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (9))){
var inst_15747 = (state_15783[(8)]);
var inst_15761 = cljs.core.vec.call(null,inst_15747);
var state_15783__$1 = state_15783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15783__$1,(11),out,inst_15761);
} else {
if((state_val_15784 === (5))){
var inst_15748 = (state_15783[(7)]);
var inst_15756 = (state_15783[(11)]);
var inst_15747 = (state_15783[(8)]);
var inst_15751 = (state_15783[(9)]);
var inst_15755 = (inst_15747[inst_15748] = inst_15751);
var inst_15756__$1 = (inst_15748 + (1));
var inst_15757 = (inst_15756__$1 < n);
var state_15783__$1 = (function (){var statearr_15797 = state_15783;
(statearr_15797[(11)] = inst_15756__$1);

(statearr_15797[(12)] = inst_15755);

return statearr_15797;
})();
if(cljs.core.truth_(inst_15757)){
var statearr_15798_15824 = state_15783__$1;
(statearr_15798_15824[(1)] = (8));

} else {
var statearr_15799_15825 = state_15783__$1;
(statearr_15799_15825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (14))){
var inst_15776 = (state_15783[(2)]);
var inst_15777 = cljs.core.async.close_BANG_.call(null,out);
var state_15783__$1 = (function (){var statearr_15801 = state_15783;
(statearr_15801[(13)] = inst_15776);

return statearr_15801;
})();
var statearr_15802_15826 = state_15783__$1;
(statearr_15802_15826[(2)] = inst_15777);

(statearr_15802_15826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (10))){
var inst_15767 = (state_15783[(2)]);
var state_15783__$1 = state_15783;
var statearr_15803_15827 = state_15783__$1;
(statearr_15803_15827[(2)] = inst_15767);

(statearr_15803_15827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15784 === (8))){
var inst_15756 = (state_15783[(11)]);
var inst_15747 = (state_15783[(8)]);
var tmp15800 = inst_15747;
var inst_15747__$1 = tmp15800;
var inst_15748 = inst_15756;
var state_15783__$1 = (function (){var statearr_15804 = state_15783;
(statearr_15804[(7)] = inst_15748);

(statearr_15804[(8)] = inst_15747__$1);

return statearr_15804;
})();
var statearr_15805_15828 = state_15783__$1;
(statearr_15805_15828[(2)] = null);

(statearr_15805_15828[(1)] = (2));


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
});})(c__7136__auto___15814,out))
;
return ((function (switch__7074__auto__,c__7136__auto___15814,out){
return (function() {
var cljs$core$async$state_machine__7075__auto__ = null;
var cljs$core$async$state_machine__7075__auto____0 = (function (){
var statearr_15809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15809[(0)] = cljs$core$async$state_machine__7075__auto__);

(statearr_15809[(1)] = (1));

return statearr_15809;
});
var cljs$core$async$state_machine__7075__auto____1 = (function (state_15783){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_15783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e15810){if((e15810 instanceof Object)){
var ex__7078__auto__ = e15810;
var statearr_15811_15829 = state_15783;
(statearr_15811_15829[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15830 = state_15783;
state_15783 = G__15830;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$state_machine__7075__auto__ = function(state_15783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7075__auto____1.call(this,state_15783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7075__auto____0;
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7075__auto____1;
return cljs$core$async$state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___15814,out))
})();
var state__7138__auto__ = (function (){var statearr_15812 = f__7137__auto__.call(null);
(statearr_15812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___15814);

return statearr_15812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___15814,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__15832 = arguments.length;
switch (G__15832) {
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
var c__7136__auto___15905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___15905,out){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___15905,out){
return (function (state_15874){
var state_val_15875 = (state_15874[(1)]);
if((state_val_15875 === (7))){
var inst_15870 = (state_15874[(2)]);
var state_15874__$1 = state_15874;
var statearr_15876_15906 = state_15874__$1;
(statearr_15876_15906[(2)] = inst_15870);

(statearr_15876_15906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (1))){
var inst_15833 = [];
var inst_15834 = inst_15833;
var inst_15835 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15874__$1 = (function (){var statearr_15877 = state_15874;
(statearr_15877[(7)] = inst_15834);

(statearr_15877[(8)] = inst_15835);

return statearr_15877;
})();
var statearr_15878_15907 = state_15874__$1;
(statearr_15878_15907[(2)] = null);

(statearr_15878_15907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (4))){
var inst_15838 = (state_15874[(9)]);
var inst_15838__$1 = (state_15874[(2)]);
var inst_15839 = (inst_15838__$1 == null);
var inst_15840 = cljs.core.not.call(null,inst_15839);
var state_15874__$1 = (function (){var statearr_15879 = state_15874;
(statearr_15879[(9)] = inst_15838__$1);

return statearr_15879;
})();
if(inst_15840){
var statearr_15880_15908 = state_15874__$1;
(statearr_15880_15908[(1)] = (5));

} else {
var statearr_15881_15909 = state_15874__$1;
(statearr_15881_15909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (15))){
var inst_15864 = (state_15874[(2)]);
var state_15874__$1 = state_15874;
var statearr_15882_15910 = state_15874__$1;
(statearr_15882_15910[(2)] = inst_15864);

(statearr_15882_15910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (13))){
var state_15874__$1 = state_15874;
var statearr_15883_15911 = state_15874__$1;
(statearr_15883_15911[(2)] = null);

(statearr_15883_15911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (6))){
var inst_15834 = (state_15874[(7)]);
var inst_15859 = inst_15834.length;
var inst_15860 = (inst_15859 > (0));
var state_15874__$1 = state_15874;
if(cljs.core.truth_(inst_15860)){
var statearr_15884_15912 = state_15874__$1;
(statearr_15884_15912[(1)] = (12));

} else {
var statearr_15885_15913 = state_15874__$1;
(statearr_15885_15913[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (3))){
var inst_15872 = (state_15874[(2)]);
var state_15874__$1 = state_15874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15874__$1,inst_15872);
} else {
if((state_val_15875 === (12))){
var inst_15834 = (state_15874[(7)]);
var inst_15862 = cljs.core.vec.call(null,inst_15834);
var state_15874__$1 = state_15874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15874__$1,(15),out,inst_15862);
} else {
if((state_val_15875 === (2))){
var state_15874__$1 = state_15874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15874__$1,(4),ch);
} else {
if((state_val_15875 === (11))){
var inst_15838 = (state_15874[(9)]);
var inst_15842 = (state_15874[(10)]);
var inst_15852 = (state_15874[(2)]);
var inst_15853 = [];
var inst_15854 = inst_15853.push(inst_15838);
var inst_15834 = inst_15853;
var inst_15835 = inst_15842;
var state_15874__$1 = (function (){var statearr_15886 = state_15874;
(statearr_15886[(7)] = inst_15834);

(statearr_15886[(11)] = inst_15852);

(statearr_15886[(8)] = inst_15835);

(statearr_15886[(12)] = inst_15854);

return statearr_15886;
})();
var statearr_15887_15914 = state_15874__$1;
(statearr_15887_15914[(2)] = null);

(statearr_15887_15914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (9))){
var inst_15834 = (state_15874[(7)]);
var inst_15850 = cljs.core.vec.call(null,inst_15834);
var state_15874__$1 = state_15874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15874__$1,(11),out,inst_15850);
} else {
if((state_val_15875 === (5))){
var inst_15838 = (state_15874[(9)]);
var inst_15842 = (state_15874[(10)]);
var inst_15835 = (state_15874[(8)]);
var inst_15842__$1 = f.call(null,inst_15838);
var inst_15843 = cljs.core._EQ_.call(null,inst_15842__$1,inst_15835);
var inst_15844 = cljs.core.keyword_identical_QMARK_.call(null,inst_15835,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15845 = (inst_15843) || (inst_15844);
var state_15874__$1 = (function (){var statearr_15888 = state_15874;
(statearr_15888[(10)] = inst_15842__$1);

return statearr_15888;
})();
if(cljs.core.truth_(inst_15845)){
var statearr_15889_15915 = state_15874__$1;
(statearr_15889_15915[(1)] = (8));

} else {
var statearr_15890_15916 = state_15874__$1;
(statearr_15890_15916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (14))){
var inst_15867 = (state_15874[(2)]);
var inst_15868 = cljs.core.async.close_BANG_.call(null,out);
var state_15874__$1 = (function (){var statearr_15892 = state_15874;
(statearr_15892[(13)] = inst_15867);

return statearr_15892;
})();
var statearr_15893_15917 = state_15874__$1;
(statearr_15893_15917[(2)] = inst_15868);

(statearr_15893_15917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (10))){
var inst_15857 = (state_15874[(2)]);
var state_15874__$1 = state_15874;
var statearr_15894_15918 = state_15874__$1;
(statearr_15894_15918[(2)] = inst_15857);

(statearr_15894_15918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (8))){
var inst_15834 = (state_15874[(7)]);
var inst_15838 = (state_15874[(9)]);
var inst_15842 = (state_15874[(10)]);
var inst_15847 = inst_15834.push(inst_15838);
var tmp15891 = inst_15834;
var inst_15834__$1 = tmp15891;
var inst_15835 = inst_15842;
var state_15874__$1 = (function (){var statearr_15895 = state_15874;
(statearr_15895[(7)] = inst_15834__$1);

(statearr_15895[(14)] = inst_15847);

(statearr_15895[(8)] = inst_15835);

return statearr_15895;
})();
var statearr_15896_15919 = state_15874__$1;
(statearr_15896_15919[(2)] = null);

(statearr_15896_15919[(1)] = (2));


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
});})(c__7136__auto___15905,out))
;
return ((function (switch__7074__auto__,c__7136__auto___15905,out){
return (function() {
var cljs$core$async$state_machine__7075__auto__ = null;
var cljs$core$async$state_machine__7075__auto____0 = (function (){
var statearr_15900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15900[(0)] = cljs$core$async$state_machine__7075__auto__);

(statearr_15900[(1)] = (1));

return statearr_15900;
});
var cljs$core$async$state_machine__7075__auto____1 = (function (state_15874){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_15874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e15901){if((e15901 instanceof Object)){
var ex__7078__auto__ = e15901;
var statearr_15902_15920 = state_15874;
(statearr_15902_15920[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15921 = state_15874;
state_15874 = G__15921;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
cljs$core$async$state_machine__7075__auto__ = function(state_15874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7075__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7075__auto____1.call(this,state_15874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7075__auto____0;
cljs$core$async$state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7075__auto____1;
return cljs$core$async$state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___15905,out))
})();
var state__7138__auto__ = (function (){var statearr_15903 = f__7137__auto__.call(null);
(statearr_15903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___15905);

return statearr_15903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___15905,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1433865005006