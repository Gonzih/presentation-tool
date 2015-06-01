// Compiled by ClojureScript 0.0-3153 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t13687 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13687 = (function (f,fn_handler,meta13688){
this.f = f;
this.fn_handler = fn_handler;
this.meta13688 = meta13688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13687.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t13687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t13687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13689){
var self__ = this;
var _13689__$1 = this;
return self__.meta13688;
});

cljs.core.async.t13687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13689,meta13688__$1){
var self__ = this;
var _13689__$1 = this;
return (new cljs.core.async.t13687(self__.f,self__.fn_handler,meta13688__$1));
});

cljs.core.async.t13687.cljs$lang$type = true;

cljs.core.async.t13687.cljs$lang$ctorStr = "cljs.core.async/t13687";

cljs.core.async.t13687.cljs$lang$ctorPrWriter = (function (this__4895__auto__,writer__4896__auto__,opt__4897__auto__){
return cljs.core._write.call(null,writer__4896__auto__,"cljs.core.async/t13687");
});

cljs.core.async.__GT_t13687 = (function cljs$core$async$fn_handler_$___GT_t13687(f__$1,fn_handler__$1,meta13688){
return (new cljs.core.async.t13687(f__$1,fn_handler__$1,meta13688));
});

}

return (new cljs.core.async.t13687(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13691 = buff;
if(G__13691){
var bit__4990__auto__ = null;
if(cljs.core.truth_((function (){var or__4316__auto__ = bit__4990__auto__;
if(cljs.core.truth_(or__4316__auto__)){
return or__4316__auto__;
} else {
return G__13691.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__13691.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13691);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13691);
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
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
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
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
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
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13692 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13692);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13692,ret){
return (function (){
return fn1.call(null,val_13692);
});})(val_13692,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
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
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5201__auto___13693 = n;
var x_13694 = (0);
while(true){
if((x_13694 < n__5201__auto___13693)){
(a[x_13694] = (0));

var G__13695 = (x_13694 + (1));
x_13694 = G__13695;
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

var G__13696 = (i + (1));
i = G__13696;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t13700 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13700 = (function (flag,alt_flag,meta13701){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13701 = meta13701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13700.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13700.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t13700.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t13700.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13702){
var self__ = this;
var _13702__$1 = this;
return self__.meta13701;
});})(flag))
;

cljs.core.async.t13700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13702,meta13701__$1){
var self__ = this;
var _13702__$1 = this;
return (new cljs.core.async.t13700(self__.flag,self__.alt_flag,meta13701__$1));
});})(flag))
;

cljs.core.async.t13700.cljs$lang$type = true;

cljs.core.async.t13700.cljs$lang$ctorStr = "cljs.core.async/t13700";

cljs.core.async.t13700.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4895__auto__,writer__4896__auto__,opt__4897__auto__){
return cljs.core._write.call(null,writer__4896__auto__,"cljs.core.async/t13700");
});})(flag))
;

cljs.core.async.__GT_t13700 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t13700(flag__$1,alt_flag__$1,meta13701){
return (new cljs.core.async.t13700(flag__$1,alt_flag__$1,meta13701));
});})(flag))
;

}

return (new cljs.core.async.t13700(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t13706 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13706 = (function (cb,flag,alt_handler,meta13707){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13707 = meta13707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13706.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13706.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t13706.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t13706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13708){
var self__ = this;
var _13708__$1 = this;
return self__.meta13707;
});

cljs.core.async.t13706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13708,meta13707__$1){
var self__ = this;
var _13708__$1 = this;
return (new cljs.core.async.t13706(self__.cb,self__.flag,self__.alt_handler,meta13707__$1));
});

cljs.core.async.t13706.cljs$lang$type = true;

cljs.core.async.t13706.cljs$lang$ctorStr = "cljs.core.async/t13706";

cljs.core.async.t13706.cljs$lang$ctorPrWriter = (function (this__4895__auto__,writer__4896__auto__,opt__4897__auto__){
return cljs.core._write.call(null,writer__4896__auto__,"cljs.core.async/t13706");
});

cljs.core.async.__GT_t13706 = (function cljs$core$async$alt_handler_$___GT_t13706(cb__$1,flag__$1,alt_handler__$1,meta13707){
return (new cljs.core.async.t13706(cb__$1,flag__$1,alt_handler__$1,meta13707));
});

}

return (new cljs.core.async.t13706(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13709_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13709_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13710_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13710_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4316__auto__ = wport;
if(cljs.core.truth_(or__4316__auto__)){
return or__4316__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13711 = (i + (1));
i = G__13711;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4316__auto__ = ret;
if(cljs.core.truth_(or__4316__auto__)){
return or__4316__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__4304__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4304__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4304__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
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
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__13712){
var map__13714 = p__13712;
var map__13714__$1 = ((cljs.core.seq_QMARK_.call(null,map__13714))?cljs.core.apply.call(null,cljs.core.hash_map,map__13714):map__13714);
var opts = map__13714__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__13712 = null;
if (arguments.length > 1) {
var G__13715__i = 0, G__13715__a = new Array(arguments.length -  1);
while (G__13715__i < G__13715__a.length) {G__13715__a[G__13715__i] = arguments[G__13715__i + 1]; ++G__13715__i;}
  p__13712 = new cljs.core.IndexedSeq(G__13715__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__13712);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__13716){
var ports = cljs.core.first(arglist__13716);
var p__13712 = cljs.core.rest(arglist__13716);
return cljs$core$async$alts_BANG___delegate(ports,p__13712);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__6821__auto___13811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___13811){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___13811){
return (function (state_13787){
var state_val_13788 = (state_13787[(1)]);
if((state_val_13788 === (7))){
var inst_13783 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
var statearr_13789_13812 = state_13787__$1;
(statearr_13789_13812[(2)] = inst_13783);

(statearr_13789_13812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (1))){
var state_13787__$1 = state_13787;
var statearr_13790_13813 = state_13787__$1;
(statearr_13790_13813[(2)] = null);

(statearr_13790_13813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (4))){
var inst_13766 = (state_13787[(7)]);
var inst_13766__$1 = (state_13787[(2)]);
var inst_13767 = (inst_13766__$1 == null);
var state_13787__$1 = (function (){var statearr_13791 = state_13787;
(statearr_13791[(7)] = inst_13766__$1);

return statearr_13791;
})();
if(cljs.core.truth_(inst_13767)){
var statearr_13792_13814 = state_13787__$1;
(statearr_13792_13814[(1)] = (5));

} else {
var statearr_13793_13815 = state_13787__$1;
(statearr_13793_13815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (13))){
var state_13787__$1 = state_13787;
var statearr_13794_13816 = state_13787__$1;
(statearr_13794_13816[(2)] = null);

(statearr_13794_13816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (6))){
var inst_13766 = (state_13787[(7)]);
var state_13787__$1 = state_13787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13787__$1,(11),to,inst_13766);
} else {
if((state_val_13788 === (3))){
var inst_13785 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13787__$1,inst_13785);
} else {
if((state_val_13788 === (12))){
var state_13787__$1 = state_13787;
var statearr_13795_13817 = state_13787__$1;
(statearr_13795_13817[(2)] = null);

(statearr_13795_13817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (2))){
var state_13787__$1 = state_13787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13787__$1,(4),from);
} else {
if((state_val_13788 === (11))){
var inst_13776 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
if(cljs.core.truth_(inst_13776)){
var statearr_13796_13818 = state_13787__$1;
(statearr_13796_13818[(1)] = (12));

} else {
var statearr_13797_13819 = state_13787__$1;
(statearr_13797_13819[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (9))){
var state_13787__$1 = state_13787;
var statearr_13798_13820 = state_13787__$1;
(statearr_13798_13820[(2)] = null);

(statearr_13798_13820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (5))){
var state_13787__$1 = state_13787;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13799_13821 = state_13787__$1;
(statearr_13799_13821[(1)] = (8));

} else {
var statearr_13800_13822 = state_13787__$1;
(statearr_13800_13822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (14))){
var inst_13781 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
var statearr_13801_13823 = state_13787__$1;
(statearr_13801_13823[(2)] = inst_13781);

(statearr_13801_13823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (10))){
var inst_13773 = (state_13787[(2)]);
var state_13787__$1 = state_13787;
var statearr_13802_13824 = state_13787__$1;
(statearr_13802_13824[(2)] = inst_13773);

(statearr_13802_13824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13788 === (8))){
var inst_13770 = cljs.core.async.close_BANG_.call(null,to);
var state_13787__$1 = state_13787;
var statearr_13803_13825 = state_13787__$1;
(statearr_13803_13825[(2)] = inst_13770);

(statearr_13803_13825[(1)] = (10));


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
});})(c__6821__auto___13811))
;
return ((function (switch__6765__auto__,c__6821__auto___13811){
return (function() {
var cljs$core$async$pipe_$_state_machine__6766__auto__ = null;
var cljs$core$async$pipe_$_state_machine__6766__auto____0 = (function (){
var statearr_13807 = [null,null,null,null,null,null,null,null];
(statearr_13807[(0)] = cljs$core$async$pipe_$_state_machine__6766__auto__);

(statearr_13807[(1)] = (1));

return statearr_13807;
});
var cljs$core$async$pipe_$_state_machine__6766__auto____1 = (function (state_13787){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_13787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e13808){if((e13808 instanceof Object)){
var ex__6769__auto__ = e13808;
var statearr_13809_13826 = state_13787;
(statearr_13809_13826[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13827 = state_13787;
state_13787 = G__13827;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__6766__auto__ = function(state_13787){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__6766__auto____1.call(this,state_13787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__6766__auto____0;
cljs$core$async$pipe_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__6766__auto____1;
return cljs$core$async$pipe_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___13811))
})();
var state__6823__auto__ = (function (){var statearr_13810 = f__6822__auto__.call(null);
(statearr_13810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___13811);

return statearr_13810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___13811))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14011){
var vec__14012 = p__14011;
var v = cljs.core.nth.call(null,vec__14012,(0),null);
var p = cljs.core.nth.call(null,vec__14012,(1),null);
var job = vec__14012;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6821__auto___14194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___14194,res,vec__14012,v,p,job,jobs,results){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___14194,res,vec__14012,v,p,job,jobs,results){
return (function (state_14017){
var state_val_14018 = (state_14017[(1)]);
if((state_val_14018 === (2))){
var inst_14014 = (state_14017[(2)]);
var inst_14015 = cljs.core.async.close_BANG_.call(null,res);
var state_14017__$1 = (function (){var statearr_14019 = state_14017;
(statearr_14019[(7)] = inst_14014);

return statearr_14019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14017__$1,inst_14015);
} else {
if((state_val_14018 === (1))){
var state_14017__$1 = state_14017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14017__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6821__auto___14194,res,vec__14012,v,p,job,jobs,results))
;
return ((function (switch__6765__auto__,c__6821__auto___14194,res,vec__14012,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0 = (function (){
var statearr_14023 = [null,null,null,null,null,null,null,null];
(statearr_14023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__);

(statearr_14023[(1)] = (1));

return statearr_14023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1 = (function (state_14017){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_14017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e14024){if((e14024 instanceof Object)){
var ex__6769__auto__ = e14024;
var statearr_14025_14195 = state_14017;
(statearr_14025_14195[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14196 = state_14017;
state_14017 = G__14196;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__ = function(state_14017){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1.call(this,state_14017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___14194,res,vec__14012,v,p,job,jobs,results))
})();
var state__6823__auto__ = (function (){var statearr_14026 = f__6822__auto__.call(null);
(statearr_14026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___14194);

return statearr_14026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___14194,res,vec__14012,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14027){
var vec__14028 = p__14027;
var v = cljs.core.nth.call(null,vec__14028,(0),null);
var p = cljs.core.nth.call(null,vec__14028,(1),null);
var job = vec__14028;
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
var n__5201__auto___14197 = n;
var __14198 = (0);
while(true){
if((__14198 < n__5201__auto___14197)){
var G__14029_14199 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14029_14199) {
case "async":
var c__6821__auto___14201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14198,c__6821__auto___14201,G__14029_14199,n__5201__auto___14197,jobs,results,process,async){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (__14198,c__6821__auto___14201,G__14029_14199,n__5201__auto___14197,jobs,results,process,async){
return (function (state_14042){
var state_val_14043 = (state_14042[(1)]);
if((state_val_14043 === (7))){
var inst_14038 = (state_14042[(2)]);
var state_14042__$1 = state_14042;
var statearr_14044_14202 = state_14042__$1;
(statearr_14044_14202[(2)] = inst_14038);

(statearr_14044_14202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (6))){
var state_14042__$1 = state_14042;
var statearr_14045_14203 = state_14042__$1;
(statearr_14045_14203[(2)] = null);

(statearr_14045_14203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (5))){
var state_14042__$1 = state_14042;
var statearr_14046_14204 = state_14042__$1;
(statearr_14046_14204[(2)] = null);

(statearr_14046_14204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (4))){
var inst_14032 = (state_14042[(2)]);
var inst_14033 = async.call(null,inst_14032);
var state_14042__$1 = state_14042;
if(cljs.core.truth_(inst_14033)){
var statearr_14047_14205 = state_14042__$1;
(statearr_14047_14205[(1)] = (5));

} else {
var statearr_14048_14206 = state_14042__$1;
(statearr_14048_14206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14043 === (3))){
var inst_14040 = (state_14042[(2)]);
var state_14042__$1 = state_14042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14042__$1,inst_14040);
} else {
if((state_val_14043 === (2))){
var state_14042__$1 = state_14042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14042__$1,(4),jobs);
} else {
if((state_val_14043 === (1))){
var state_14042__$1 = state_14042;
var statearr_14049_14207 = state_14042__$1;
(statearr_14049_14207[(2)] = null);

(statearr_14049_14207[(1)] = (2));


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
});})(__14198,c__6821__auto___14201,G__14029_14199,n__5201__auto___14197,jobs,results,process,async))
;
return ((function (__14198,switch__6765__auto__,c__6821__auto___14201,G__14029_14199,n__5201__auto___14197,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0 = (function (){
var statearr_14053 = [null,null,null,null,null,null,null];
(statearr_14053[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__);

(statearr_14053[(1)] = (1));

return statearr_14053;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1 = (function (state_14042){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_14042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e14054){if((e14054 instanceof Object)){
var ex__6769__auto__ = e14054;
var statearr_14055_14208 = state_14042;
(statearr_14055_14208[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14209 = state_14042;
state_14042 = G__14209;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__ = function(state_14042){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1.call(this,state_14042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__;
})()
;})(__14198,switch__6765__auto__,c__6821__auto___14201,G__14029_14199,n__5201__auto___14197,jobs,results,process,async))
})();
var state__6823__auto__ = (function (){var statearr_14056 = f__6822__auto__.call(null);
(statearr_14056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___14201);

return statearr_14056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(__14198,c__6821__auto___14201,G__14029_14199,n__5201__auto___14197,jobs,results,process,async))
);


break;
case "compute":
var c__6821__auto___14210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14198,c__6821__auto___14210,G__14029_14199,n__5201__auto___14197,jobs,results,process,async){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (__14198,c__6821__auto___14210,G__14029_14199,n__5201__auto___14197,jobs,results,process,async){
return (function (state_14069){
var state_val_14070 = (state_14069[(1)]);
if((state_val_14070 === (7))){
var inst_14065 = (state_14069[(2)]);
var state_14069__$1 = state_14069;
var statearr_14071_14211 = state_14069__$1;
(statearr_14071_14211[(2)] = inst_14065);

(statearr_14071_14211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14070 === (6))){
var state_14069__$1 = state_14069;
var statearr_14072_14212 = state_14069__$1;
(statearr_14072_14212[(2)] = null);

(statearr_14072_14212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14070 === (5))){
var state_14069__$1 = state_14069;
var statearr_14073_14213 = state_14069__$1;
(statearr_14073_14213[(2)] = null);

(statearr_14073_14213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14070 === (4))){
var inst_14059 = (state_14069[(2)]);
var inst_14060 = process.call(null,inst_14059);
var state_14069__$1 = state_14069;
if(cljs.core.truth_(inst_14060)){
var statearr_14074_14214 = state_14069__$1;
(statearr_14074_14214[(1)] = (5));

} else {
var statearr_14075_14215 = state_14069__$1;
(statearr_14075_14215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14070 === (3))){
var inst_14067 = (state_14069[(2)]);
var state_14069__$1 = state_14069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14069__$1,inst_14067);
} else {
if((state_val_14070 === (2))){
var state_14069__$1 = state_14069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14069__$1,(4),jobs);
} else {
if((state_val_14070 === (1))){
var state_14069__$1 = state_14069;
var statearr_14076_14216 = state_14069__$1;
(statearr_14076_14216[(2)] = null);

(statearr_14076_14216[(1)] = (2));


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
});})(__14198,c__6821__auto___14210,G__14029_14199,n__5201__auto___14197,jobs,results,process,async))
;
return ((function (__14198,switch__6765__auto__,c__6821__auto___14210,G__14029_14199,n__5201__auto___14197,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0 = (function (){
var statearr_14080 = [null,null,null,null,null,null,null];
(statearr_14080[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__);

(statearr_14080[(1)] = (1));

return statearr_14080;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1 = (function (state_14069){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_14069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e14081){if((e14081 instanceof Object)){
var ex__6769__auto__ = e14081;
var statearr_14082_14217 = state_14069;
(statearr_14082_14217[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14218 = state_14069;
state_14069 = G__14218;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__ = function(state_14069){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1.call(this,state_14069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__;
})()
;})(__14198,switch__6765__auto__,c__6821__auto___14210,G__14029_14199,n__5201__auto___14197,jobs,results,process,async))
})();
var state__6823__auto__ = (function (){var statearr_14083 = f__6822__auto__.call(null);
(statearr_14083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___14210);

return statearr_14083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(__14198,c__6821__auto___14210,G__14029_14199,n__5201__auto___14197,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14219 = (__14198 + (1));
__14198 = G__14219;
continue;
} else {
}
break;
}

var c__6821__auto___14220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___14220,jobs,results,process,async){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___14220,jobs,results,process,async){
return (function (state_14105){
var state_val_14106 = (state_14105[(1)]);
if((state_val_14106 === (9))){
var inst_14098 = (state_14105[(2)]);
var state_14105__$1 = (function (){var statearr_14107 = state_14105;
(statearr_14107[(7)] = inst_14098);

return statearr_14107;
})();
var statearr_14108_14221 = state_14105__$1;
(statearr_14108_14221[(2)] = null);

(statearr_14108_14221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (8))){
var inst_14091 = (state_14105[(8)]);
var inst_14096 = (state_14105[(2)]);
var state_14105__$1 = (function (){var statearr_14109 = state_14105;
(statearr_14109[(9)] = inst_14096);

return statearr_14109;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14105__$1,(9),results,inst_14091);
} else {
if((state_val_14106 === (7))){
var inst_14101 = (state_14105[(2)]);
var state_14105__$1 = state_14105;
var statearr_14110_14222 = state_14105__$1;
(statearr_14110_14222[(2)] = inst_14101);

(statearr_14110_14222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (6))){
var inst_14086 = (state_14105[(10)]);
var inst_14091 = (state_14105[(8)]);
var inst_14091__$1 = cljs.core.async.chan.call(null,(1));
var inst_14092 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14093 = [inst_14086,inst_14091__$1];
var inst_14094 = (new cljs.core.PersistentVector(null,2,(5),inst_14092,inst_14093,null));
var state_14105__$1 = (function (){var statearr_14111 = state_14105;
(statearr_14111[(8)] = inst_14091__$1);

return statearr_14111;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14105__$1,(8),jobs,inst_14094);
} else {
if((state_val_14106 === (5))){
var inst_14089 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14105__$1 = state_14105;
var statearr_14112_14223 = state_14105__$1;
(statearr_14112_14223[(2)] = inst_14089);

(statearr_14112_14223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (4))){
var inst_14086 = (state_14105[(10)]);
var inst_14086__$1 = (state_14105[(2)]);
var inst_14087 = (inst_14086__$1 == null);
var state_14105__$1 = (function (){var statearr_14113 = state_14105;
(statearr_14113[(10)] = inst_14086__$1);

return statearr_14113;
})();
if(cljs.core.truth_(inst_14087)){
var statearr_14114_14224 = state_14105__$1;
(statearr_14114_14224[(1)] = (5));

} else {
var statearr_14115_14225 = state_14105__$1;
(statearr_14115_14225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (3))){
var inst_14103 = (state_14105[(2)]);
var state_14105__$1 = state_14105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14105__$1,inst_14103);
} else {
if((state_val_14106 === (2))){
var state_14105__$1 = state_14105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14105__$1,(4),from);
} else {
if((state_val_14106 === (1))){
var state_14105__$1 = state_14105;
var statearr_14116_14226 = state_14105__$1;
(statearr_14116_14226[(2)] = null);

(statearr_14116_14226[(1)] = (2));


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
});})(c__6821__auto___14220,jobs,results,process,async))
;
return ((function (switch__6765__auto__,c__6821__auto___14220,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0 = (function (){
var statearr_14120 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14120[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__);

(statearr_14120[(1)] = (1));

return statearr_14120;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1 = (function (state_14105){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_14105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e14121){if((e14121 instanceof Object)){
var ex__6769__auto__ = e14121;
var statearr_14122_14227 = state_14105;
(statearr_14122_14227[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14228 = state_14105;
state_14105 = G__14228;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__ = function(state_14105){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1.call(this,state_14105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___14220,jobs,results,process,async))
})();
var state__6823__auto__ = (function (){var statearr_14123 = f__6822__auto__.call(null);
(statearr_14123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___14220);

return statearr_14123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___14220,jobs,results,process,async))
);


var c__6821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto__,jobs,results,process,async){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto__,jobs,results,process,async){
return (function (state_14161){
var state_val_14162 = (state_14161[(1)]);
if((state_val_14162 === (7))){
var inst_14157 = (state_14161[(2)]);
var state_14161__$1 = state_14161;
var statearr_14163_14229 = state_14161__$1;
(statearr_14163_14229[(2)] = inst_14157);

(statearr_14163_14229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (20))){
var state_14161__$1 = state_14161;
var statearr_14164_14230 = state_14161__$1;
(statearr_14164_14230[(2)] = null);

(statearr_14164_14230[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (1))){
var state_14161__$1 = state_14161;
var statearr_14165_14231 = state_14161__$1;
(statearr_14165_14231[(2)] = null);

(statearr_14165_14231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (4))){
var inst_14126 = (state_14161[(7)]);
var inst_14126__$1 = (state_14161[(2)]);
var inst_14127 = (inst_14126__$1 == null);
var state_14161__$1 = (function (){var statearr_14166 = state_14161;
(statearr_14166[(7)] = inst_14126__$1);

return statearr_14166;
})();
if(cljs.core.truth_(inst_14127)){
var statearr_14167_14232 = state_14161__$1;
(statearr_14167_14232[(1)] = (5));

} else {
var statearr_14168_14233 = state_14161__$1;
(statearr_14168_14233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (15))){
var inst_14139 = (state_14161[(8)]);
var state_14161__$1 = state_14161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14161__$1,(18),to,inst_14139);
} else {
if((state_val_14162 === (21))){
var inst_14152 = (state_14161[(2)]);
var state_14161__$1 = state_14161;
var statearr_14169_14234 = state_14161__$1;
(statearr_14169_14234[(2)] = inst_14152);

(statearr_14169_14234[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (13))){
var inst_14154 = (state_14161[(2)]);
var state_14161__$1 = (function (){var statearr_14170 = state_14161;
(statearr_14170[(9)] = inst_14154);

return statearr_14170;
})();
var statearr_14171_14235 = state_14161__$1;
(statearr_14171_14235[(2)] = null);

(statearr_14171_14235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (6))){
var inst_14126 = (state_14161[(7)]);
var state_14161__$1 = state_14161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14161__$1,(11),inst_14126);
} else {
if((state_val_14162 === (17))){
var inst_14147 = (state_14161[(2)]);
var state_14161__$1 = state_14161;
if(cljs.core.truth_(inst_14147)){
var statearr_14172_14236 = state_14161__$1;
(statearr_14172_14236[(1)] = (19));

} else {
var statearr_14173_14237 = state_14161__$1;
(statearr_14173_14237[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (3))){
var inst_14159 = (state_14161[(2)]);
var state_14161__$1 = state_14161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14161__$1,inst_14159);
} else {
if((state_val_14162 === (12))){
var inst_14136 = (state_14161[(10)]);
var state_14161__$1 = state_14161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14161__$1,(14),inst_14136);
} else {
if((state_val_14162 === (2))){
var state_14161__$1 = state_14161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14161__$1,(4),results);
} else {
if((state_val_14162 === (19))){
var state_14161__$1 = state_14161;
var statearr_14174_14238 = state_14161__$1;
(statearr_14174_14238[(2)] = null);

(statearr_14174_14238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (11))){
var inst_14136 = (state_14161[(2)]);
var state_14161__$1 = (function (){var statearr_14175 = state_14161;
(statearr_14175[(10)] = inst_14136);

return statearr_14175;
})();
var statearr_14176_14239 = state_14161__$1;
(statearr_14176_14239[(2)] = null);

(statearr_14176_14239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (9))){
var state_14161__$1 = state_14161;
var statearr_14177_14240 = state_14161__$1;
(statearr_14177_14240[(2)] = null);

(statearr_14177_14240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (5))){
var state_14161__$1 = state_14161;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14178_14241 = state_14161__$1;
(statearr_14178_14241[(1)] = (8));

} else {
var statearr_14179_14242 = state_14161__$1;
(statearr_14179_14242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (14))){
var inst_14141 = (state_14161[(11)]);
var inst_14139 = (state_14161[(8)]);
var inst_14139__$1 = (state_14161[(2)]);
var inst_14140 = (inst_14139__$1 == null);
var inst_14141__$1 = cljs.core.not.call(null,inst_14140);
var state_14161__$1 = (function (){var statearr_14180 = state_14161;
(statearr_14180[(11)] = inst_14141__$1);

(statearr_14180[(8)] = inst_14139__$1);

return statearr_14180;
})();
if(inst_14141__$1){
var statearr_14181_14243 = state_14161__$1;
(statearr_14181_14243[(1)] = (15));

} else {
var statearr_14182_14244 = state_14161__$1;
(statearr_14182_14244[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (16))){
var inst_14141 = (state_14161[(11)]);
var state_14161__$1 = state_14161;
var statearr_14183_14245 = state_14161__$1;
(statearr_14183_14245[(2)] = inst_14141);

(statearr_14183_14245[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (10))){
var inst_14133 = (state_14161[(2)]);
var state_14161__$1 = state_14161;
var statearr_14184_14246 = state_14161__$1;
(statearr_14184_14246[(2)] = inst_14133);

(statearr_14184_14246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (18))){
var inst_14144 = (state_14161[(2)]);
var state_14161__$1 = state_14161;
var statearr_14185_14247 = state_14161__$1;
(statearr_14185_14247[(2)] = inst_14144);

(statearr_14185_14247[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14162 === (8))){
var inst_14130 = cljs.core.async.close_BANG_.call(null,to);
var state_14161__$1 = state_14161;
var statearr_14186_14248 = state_14161__$1;
(statearr_14186_14248[(2)] = inst_14130);

(statearr_14186_14248[(1)] = (10));


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
});})(c__6821__auto__,jobs,results,process,async))
;
return ((function (switch__6765__auto__,c__6821__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0 = (function (){
var statearr_14190 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14190[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__);

(statearr_14190[(1)] = (1));

return statearr_14190;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1 = (function (state_14161){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_14161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e14191){if((e14191 instanceof Object)){
var ex__6769__auto__ = e14191;
var statearr_14192_14249 = state_14161;
(statearr_14192_14249[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14250 = state_14161;
state_14161 = G__14250;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__ = function(state_14161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1.call(this,state_14161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto__,jobs,results,process,async))
})();
var state__6823__auto__ = (function (){var statearr_14193 = f__6822__auto__.call(null);
(statearr_14193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto__);

return statearr_14193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto__,jobs,results,process,async))
);

return c__6821__auto__;
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
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
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
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
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
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6821__auto___14351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___14351,tc,fc){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___14351,tc,fc){
return (function (state_14326){
var state_val_14327 = (state_14326[(1)]);
if((state_val_14327 === (7))){
var inst_14322 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
var statearr_14328_14352 = state_14326__$1;
(statearr_14328_14352[(2)] = inst_14322);

(statearr_14328_14352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (1))){
var state_14326__$1 = state_14326;
var statearr_14329_14353 = state_14326__$1;
(statearr_14329_14353[(2)] = null);

(statearr_14329_14353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (4))){
var inst_14303 = (state_14326[(7)]);
var inst_14303__$1 = (state_14326[(2)]);
var inst_14304 = (inst_14303__$1 == null);
var state_14326__$1 = (function (){var statearr_14330 = state_14326;
(statearr_14330[(7)] = inst_14303__$1);

return statearr_14330;
})();
if(cljs.core.truth_(inst_14304)){
var statearr_14331_14354 = state_14326__$1;
(statearr_14331_14354[(1)] = (5));

} else {
var statearr_14332_14355 = state_14326__$1;
(statearr_14332_14355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (13))){
var state_14326__$1 = state_14326;
var statearr_14333_14356 = state_14326__$1;
(statearr_14333_14356[(2)] = null);

(statearr_14333_14356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (6))){
var inst_14303 = (state_14326[(7)]);
var inst_14309 = p.call(null,inst_14303);
var state_14326__$1 = state_14326;
if(cljs.core.truth_(inst_14309)){
var statearr_14334_14357 = state_14326__$1;
(statearr_14334_14357[(1)] = (9));

} else {
var statearr_14335_14358 = state_14326__$1;
(statearr_14335_14358[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (3))){
var inst_14324 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14326__$1,inst_14324);
} else {
if((state_val_14327 === (12))){
var state_14326__$1 = state_14326;
var statearr_14336_14359 = state_14326__$1;
(statearr_14336_14359[(2)] = null);

(statearr_14336_14359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (2))){
var state_14326__$1 = state_14326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14326__$1,(4),ch);
} else {
if((state_val_14327 === (11))){
var inst_14303 = (state_14326[(7)]);
var inst_14313 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14326__$1,(8),inst_14313,inst_14303);
} else {
if((state_val_14327 === (9))){
var state_14326__$1 = state_14326;
var statearr_14337_14360 = state_14326__$1;
(statearr_14337_14360[(2)] = tc);

(statearr_14337_14360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (5))){
var inst_14306 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14307 = cljs.core.async.close_BANG_.call(null,fc);
var state_14326__$1 = (function (){var statearr_14338 = state_14326;
(statearr_14338[(8)] = inst_14306);

return statearr_14338;
})();
var statearr_14339_14361 = state_14326__$1;
(statearr_14339_14361[(2)] = inst_14307);

(statearr_14339_14361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (14))){
var inst_14320 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
var statearr_14340_14362 = state_14326__$1;
(statearr_14340_14362[(2)] = inst_14320);

(statearr_14340_14362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (10))){
var state_14326__$1 = state_14326;
var statearr_14341_14363 = state_14326__$1;
(statearr_14341_14363[(2)] = fc);

(statearr_14341_14363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (8))){
var inst_14315 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
if(cljs.core.truth_(inst_14315)){
var statearr_14342_14364 = state_14326__$1;
(statearr_14342_14364[(1)] = (12));

} else {
var statearr_14343_14365 = state_14326__$1;
(statearr_14343_14365[(1)] = (13));

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
});})(c__6821__auto___14351,tc,fc))
;
return ((function (switch__6765__auto__,c__6821__auto___14351,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__6766__auto__ = null;
var cljs$core$async$split_$_state_machine__6766__auto____0 = (function (){
var statearr_14347 = [null,null,null,null,null,null,null,null,null];
(statearr_14347[(0)] = cljs$core$async$split_$_state_machine__6766__auto__);

(statearr_14347[(1)] = (1));

return statearr_14347;
});
var cljs$core$async$split_$_state_machine__6766__auto____1 = (function (state_14326){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_14326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e14348){if((e14348 instanceof Object)){
var ex__6769__auto__ = e14348;
var statearr_14349_14366 = state_14326;
(statearr_14349_14366[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14367 = state_14326;
state_14326 = G__14367;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__6766__auto__ = function(state_14326){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__6766__auto____1.call(this,state_14326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__6766__auto____0;
cljs$core$async$split_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__6766__auto____1;
return cljs$core$async$split_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___14351,tc,fc))
})();
var state__6823__auto__ = (function (){var statearr_14350 = f__6822__auto__.call(null);
(statearr_14350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___14351);

return statearr_14350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___14351,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto__){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto__){
return (function (state_14414){
var state_val_14415 = (state_14414[(1)]);
if((state_val_14415 === (7))){
var inst_14410 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
var statearr_14416_14432 = state_14414__$1;
(statearr_14416_14432[(2)] = inst_14410);

(statearr_14416_14432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (6))){
var inst_14403 = (state_14414[(7)]);
var inst_14400 = (state_14414[(8)]);
var inst_14407 = f.call(null,inst_14400,inst_14403);
var inst_14400__$1 = inst_14407;
var state_14414__$1 = (function (){var statearr_14417 = state_14414;
(statearr_14417[(8)] = inst_14400__$1);

return statearr_14417;
})();
var statearr_14418_14433 = state_14414__$1;
(statearr_14418_14433[(2)] = null);

(statearr_14418_14433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (5))){
var inst_14400 = (state_14414[(8)]);
var state_14414__$1 = state_14414;
var statearr_14419_14434 = state_14414__$1;
(statearr_14419_14434[(2)] = inst_14400);

(statearr_14419_14434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (4))){
var inst_14403 = (state_14414[(7)]);
var inst_14403__$1 = (state_14414[(2)]);
var inst_14404 = (inst_14403__$1 == null);
var state_14414__$1 = (function (){var statearr_14420 = state_14414;
(statearr_14420[(7)] = inst_14403__$1);

return statearr_14420;
})();
if(cljs.core.truth_(inst_14404)){
var statearr_14421_14435 = state_14414__$1;
(statearr_14421_14435[(1)] = (5));

} else {
var statearr_14422_14436 = state_14414__$1;
(statearr_14422_14436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (3))){
var inst_14412 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14414__$1,inst_14412);
} else {
if((state_val_14415 === (2))){
var state_14414__$1 = state_14414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14414__$1,(4),ch);
} else {
if((state_val_14415 === (1))){
var inst_14400 = init;
var state_14414__$1 = (function (){var statearr_14423 = state_14414;
(statearr_14423[(8)] = inst_14400);

return statearr_14423;
})();
var statearr_14424_14437 = state_14414__$1;
(statearr_14424_14437[(2)] = null);

(statearr_14424_14437[(1)] = (2));


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
});})(c__6821__auto__))
;
return ((function (switch__6765__auto__,c__6821__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6766__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6766__auto____0 = (function (){
var statearr_14428 = [null,null,null,null,null,null,null,null,null];
(statearr_14428[(0)] = cljs$core$async$reduce_$_state_machine__6766__auto__);

(statearr_14428[(1)] = (1));

return statearr_14428;
});
var cljs$core$async$reduce_$_state_machine__6766__auto____1 = (function (state_14414){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_14414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e14429){if((e14429 instanceof Object)){
var ex__6769__auto__ = e14429;
var statearr_14430_14438 = state_14414;
(statearr_14430_14438[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14439 = state_14414;
state_14414 = G__14439;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6766__auto__ = function(state_14414){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6766__auto____1.call(this,state_14414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6766__auto____0;
cljs$core$async$reduce_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6766__auto____1;
return cljs$core$async$reduce_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto__))
})();
var state__6823__auto__ = (function (){var statearr_14431 = f__6822__auto__.call(null);
(statearr_14431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto__);

return statearr_14431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto__))
);

return c__6821__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto__){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto__){
return (function (state_14513){
var state_val_14514 = (state_14513[(1)]);
if((state_val_14514 === (7))){
var inst_14495 = (state_14513[(2)]);
var state_14513__$1 = state_14513;
var statearr_14515_14538 = state_14513__$1;
(statearr_14515_14538[(2)] = inst_14495);

(statearr_14515_14538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (1))){
var inst_14489 = cljs.core.seq.call(null,coll);
var inst_14490 = inst_14489;
var state_14513__$1 = (function (){var statearr_14516 = state_14513;
(statearr_14516[(7)] = inst_14490);

return statearr_14516;
})();
var statearr_14517_14539 = state_14513__$1;
(statearr_14517_14539[(2)] = null);

(statearr_14517_14539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (4))){
var inst_14490 = (state_14513[(7)]);
var inst_14493 = cljs.core.first.call(null,inst_14490);
var state_14513__$1 = state_14513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14513__$1,(7),ch,inst_14493);
} else {
if((state_val_14514 === (13))){
var inst_14507 = (state_14513[(2)]);
var state_14513__$1 = state_14513;
var statearr_14518_14540 = state_14513__$1;
(statearr_14518_14540[(2)] = inst_14507);

(statearr_14518_14540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (6))){
var inst_14498 = (state_14513[(2)]);
var state_14513__$1 = state_14513;
if(cljs.core.truth_(inst_14498)){
var statearr_14519_14541 = state_14513__$1;
(statearr_14519_14541[(1)] = (8));

} else {
var statearr_14520_14542 = state_14513__$1;
(statearr_14520_14542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (3))){
var inst_14511 = (state_14513[(2)]);
var state_14513__$1 = state_14513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14513__$1,inst_14511);
} else {
if((state_val_14514 === (12))){
var state_14513__$1 = state_14513;
var statearr_14521_14543 = state_14513__$1;
(statearr_14521_14543[(2)] = null);

(statearr_14521_14543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (2))){
var inst_14490 = (state_14513[(7)]);
var state_14513__$1 = state_14513;
if(cljs.core.truth_(inst_14490)){
var statearr_14522_14544 = state_14513__$1;
(statearr_14522_14544[(1)] = (4));

} else {
var statearr_14523_14545 = state_14513__$1;
(statearr_14523_14545[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (11))){
var inst_14504 = cljs.core.async.close_BANG_.call(null,ch);
var state_14513__$1 = state_14513;
var statearr_14524_14546 = state_14513__$1;
(statearr_14524_14546[(2)] = inst_14504);

(statearr_14524_14546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (9))){
var state_14513__$1 = state_14513;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14525_14547 = state_14513__$1;
(statearr_14525_14547[(1)] = (11));

} else {
var statearr_14526_14548 = state_14513__$1;
(statearr_14526_14548[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (5))){
var inst_14490 = (state_14513[(7)]);
var state_14513__$1 = state_14513;
var statearr_14527_14549 = state_14513__$1;
(statearr_14527_14549[(2)] = inst_14490);

(statearr_14527_14549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (10))){
var inst_14509 = (state_14513[(2)]);
var state_14513__$1 = state_14513;
var statearr_14528_14550 = state_14513__$1;
(statearr_14528_14550[(2)] = inst_14509);

(statearr_14528_14550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (8))){
var inst_14490 = (state_14513[(7)]);
var inst_14500 = cljs.core.next.call(null,inst_14490);
var inst_14490__$1 = inst_14500;
var state_14513__$1 = (function (){var statearr_14529 = state_14513;
(statearr_14529[(7)] = inst_14490__$1);

return statearr_14529;
})();
var statearr_14530_14551 = state_14513__$1;
(statearr_14530_14551[(2)] = null);

(statearr_14530_14551[(1)] = (2));


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
});})(c__6821__auto__))
;
return ((function (switch__6765__auto__,c__6821__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__6766__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__6766__auto____0 = (function (){
var statearr_14534 = [null,null,null,null,null,null,null,null];
(statearr_14534[(0)] = cljs$core$async$onto_chan_$_state_machine__6766__auto__);

(statearr_14534[(1)] = (1));

return statearr_14534;
});
var cljs$core$async$onto_chan_$_state_machine__6766__auto____1 = (function (state_14513){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_14513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e14535){if((e14535 instanceof Object)){
var ex__6769__auto__ = e14535;
var statearr_14536_14552 = state_14513;
(statearr_14536_14552[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14553 = state_14513;
state_14513 = G__14553;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__6766__auto__ = function(state_14513){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__6766__auto____1.call(this,state_14513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__6766__auto____0;
cljs$core$async$onto_chan_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__6766__auto____1;
return cljs$core$async$onto_chan_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto__))
})();
var state__6823__auto__ = (function (){var statearr_14537 = f__6822__auto__.call(null);
(statearr_14537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto__);

return statearr_14537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto__))
);

return c__6821__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj14555 = {};
return obj14555;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4304__auto__ = _;
if(and__4304__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4304__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4952__auto__ = (((_ == null))?null:_);
return (function (){var or__4316__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj14557 = {};
return obj14557;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4304__auto__ = m;
if(and__4304__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4304__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4952__auto__ = (((m == null))?null:m);
return (function (){var or__4316__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4304__auto__ = m;
if(and__4304__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4304__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4952__auto__ = (((m == null))?null:m);
return (function (){var or__4316__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4304__auto__ = m;
if(and__4304__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4304__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4952__auto__ = (((m == null))?null:m);
return (function (){var or__4316__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
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
if(typeof cljs.core.async.t14779 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14779 = (function (cs,ch,mult,meta14780){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14780 = meta14780;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14779.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t14779.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t14779.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t14779.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t14779.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14779.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t14779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14781){
var self__ = this;
var _14781__$1 = this;
return self__.meta14780;
});})(cs))
;

cljs.core.async.t14779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14781,meta14780__$1){
var self__ = this;
var _14781__$1 = this;
return (new cljs.core.async.t14779(self__.cs,self__.ch,self__.mult,meta14780__$1));
});})(cs))
;

cljs.core.async.t14779.cljs$lang$type = true;

cljs.core.async.t14779.cljs$lang$ctorStr = "cljs.core.async/t14779";

cljs.core.async.t14779.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4895__auto__,writer__4896__auto__,opt__4897__auto__){
return cljs.core._write.call(null,writer__4896__auto__,"cljs.core.async/t14779");
});})(cs))
;

cljs.core.async.__GT_t14779 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t14779(cs__$1,ch__$1,mult__$1,meta14780){
return (new cljs.core.async.t14779(cs__$1,ch__$1,mult__$1,meta14780));
});})(cs))
;

}

return (new cljs.core.async.t14779(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6821__auto___15000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___15000,cs,m,dchan,dctr,done){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___15000,cs,m,dchan,dctr,done){
return (function (state_14912){
var state_val_14913 = (state_14912[(1)]);
if((state_val_14913 === (7))){
var inst_14908 = (state_14912[(2)]);
var state_14912__$1 = state_14912;
var statearr_14914_15001 = state_14912__$1;
(statearr_14914_15001[(2)] = inst_14908);

(statearr_14914_15001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (20))){
var inst_14813 = (state_14912[(7)]);
var inst_14823 = cljs.core.first.call(null,inst_14813);
var inst_14824 = cljs.core.nth.call(null,inst_14823,(0),null);
var inst_14825 = cljs.core.nth.call(null,inst_14823,(1),null);
var state_14912__$1 = (function (){var statearr_14915 = state_14912;
(statearr_14915[(8)] = inst_14824);

return statearr_14915;
})();
if(cljs.core.truth_(inst_14825)){
var statearr_14916_15002 = state_14912__$1;
(statearr_14916_15002[(1)] = (22));

} else {
var statearr_14917_15003 = state_14912__$1;
(statearr_14917_15003[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (27))){
var inst_14855 = (state_14912[(9)]);
var inst_14853 = (state_14912[(10)]);
var inst_14860 = (state_14912[(11)]);
var inst_14784 = (state_14912[(12)]);
var inst_14860__$1 = cljs.core._nth.call(null,inst_14853,inst_14855);
var inst_14861 = cljs.core.async.put_BANG_.call(null,inst_14860__$1,inst_14784,done);
var state_14912__$1 = (function (){var statearr_14918 = state_14912;
(statearr_14918[(11)] = inst_14860__$1);

return statearr_14918;
})();
if(cljs.core.truth_(inst_14861)){
var statearr_14919_15004 = state_14912__$1;
(statearr_14919_15004[(1)] = (30));

} else {
var statearr_14920_15005 = state_14912__$1;
(statearr_14920_15005[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (1))){
var state_14912__$1 = state_14912;
var statearr_14921_15006 = state_14912__$1;
(statearr_14921_15006[(2)] = null);

(statearr_14921_15006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (24))){
var inst_14813 = (state_14912[(7)]);
var inst_14830 = (state_14912[(2)]);
var inst_14831 = cljs.core.next.call(null,inst_14813);
var inst_14793 = inst_14831;
var inst_14794 = null;
var inst_14795 = (0);
var inst_14796 = (0);
var state_14912__$1 = (function (){var statearr_14922 = state_14912;
(statearr_14922[(13)] = inst_14830);

(statearr_14922[(14)] = inst_14796);

(statearr_14922[(15)] = inst_14793);

(statearr_14922[(16)] = inst_14795);

(statearr_14922[(17)] = inst_14794);

return statearr_14922;
})();
var statearr_14923_15007 = state_14912__$1;
(statearr_14923_15007[(2)] = null);

(statearr_14923_15007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (39))){
var state_14912__$1 = state_14912;
var statearr_14927_15008 = state_14912__$1;
(statearr_14927_15008[(2)] = null);

(statearr_14927_15008[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (4))){
var inst_14784 = (state_14912[(12)]);
var inst_14784__$1 = (state_14912[(2)]);
var inst_14785 = (inst_14784__$1 == null);
var state_14912__$1 = (function (){var statearr_14928 = state_14912;
(statearr_14928[(12)] = inst_14784__$1);

return statearr_14928;
})();
if(cljs.core.truth_(inst_14785)){
var statearr_14929_15009 = state_14912__$1;
(statearr_14929_15009[(1)] = (5));

} else {
var statearr_14930_15010 = state_14912__$1;
(statearr_14930_15010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (15))){
var inst_14796 = (state_14912[(14)]);
var inst_14793 = (state_14912[(15)]);
var inst_14795 = (state_14912[(16)]);
var inst_14794 = (state_14912[(17)]);
var inst_14809 = (state_14912[(2)]);
var inst_14810 = (inst_14796 + (1));
var tmp14924 = inst_14793;
var tmp14925 = inst_14795;
var tmp14926 = inst_14794;
var inst_14793__$1 = tmp14924;
var inst_14794__$1 = tmp14926;
var inst_14795__$1 = tmp14925;
var inst_14796__$1 = inst_14810;
var state_14912__$1 = (function (){var statearr_14931 = state_14912;
(statearr_14931[(18)] = inst_14809);

(statearr_14931[(14)] = inst_14796__$1);

(statearr_14931[(15)] = inst_14793__$1);

(statearr_14931[(16)] = inst_14795__$1);

(statearr_14931[(17)] = inst_14794__$1);

return statearr_14931;
})();
var statearr_14932_15011 = state_14912__$1;
(statearr_14932_15011[(2)] = null);

(statearr_14932_15011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (21))){
var inst_14834 = (state_14912[(2)]);
var state_14912__$1 = state_14912;
var statearr_14936_15012 = state_14912__$1;
(statearr_14936_15012[(2)] = inst_14834);

(statearr_14936_15012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (31))){
var inst_14860 = (state_14912[(11)]);
var inst_14864 = done.call(null,null);
var inst_14865 = cljs.core.async.untap_STAR_.call(null,m,inst_14860);
var state_14912__$1 = (function (){var statearr_14937 = state_14912;
(statearr_14937[(19)] = inst_14864);

return statearr_14937;
})();
var statearr_14938_15013 = state_14912__$1;
(statearr_14938_15013[(2)] = inst_14865);

(statearr_14938_15013[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (32))){
var inst_14855 = (state_14912[(9)]);
var inst_14853 = (state_14912[(10)]);
var inst_14854 = (state_14912[(20)]);
var inst_14852 = (state_14912[(21)]);
var inst_14867 = (state_14912[(2)]);
var inst_14868 = (inst_14855 + (1));
var tmp14933 = inst_14853;
var tmp14934 = inst_14854;
var tmp14935 = inst_14852;
var inst_14852__$1 = tmp14935;
var inst_14853__$1 = tmp14933;
var inst_14854__$1 = tmp14934;
var inst_14855__$1 = inst_14868;
var state_14912__$1 = (function (){var statearr_14939 = state_14912;
(statearr_14939[(9)] = inst_14855__$1);

(statearr_14939[(22)] = inst_14867);

(statearr_14939[(10)] = inst_14853__$1);

(statearr_14939[(20)] = inst_14854__$1);

(statearr_14939[(21)] = inst_14852__$1);

return statearr_14939;
})();
var statearr_14940_15014 = state_14912__$1;
(statearr_14940_15014[(2)] = null);

(statearr_14940_15014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (40))){
var inst_14880 = (state_14912[(23)]);
var inst_14884 = done.call(null,null);
var inst_14885 = cljs.core.async.untap_STAR_.call(null,m,inst_14880);
var state_14912__$1 = (function (){var statearr_14941 = state_14912;
(statearr_14941[(24)] = inst_14884);

return statearr_14941;
})();
var statearr_14942_15015 = state_14912__$1;
(statearr_14942_15015[(2)] = inst_14885);

(statearr_14942_15015[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (33))){
var inst_14871 = (state_14912[(25)]);
var inst_14873 = cljs.core.chunked_seq_QMARK_.call(null,inst_14871);
var state_14912__$1 = state_14912;
if(inst_14873){
var statearr_14943_15016 = state_14912__$1;
(statearr_14943_15016[(1)] = (36));

} else {
var statearr_14944_15017 = state_14912__$1;
(statearr_14944_15017[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (13))){
var inst_14803 = (state_14912[(26)]);
var inst_14806 = cljs.core.async.close_BANG_.call(null,inst_14803);
var state_14912__$1 = state_14912;
var statearr_14945_15018 = state_14912__$1;
(statearr_14945_15018[(2)] = inst_14806);

(statearr_14945_15018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (22))){
var inst_14824 = (state_14912[(8)]);
var inst_14827 = cljs.core.async.close_BANG_.call(null,inst_14824);
var state_14912__$1 = state_14912;
var statearr_14946_15019 = state_14912__$1;
(statearr_14946_15019[(2)] = inst_14827);

(statearr_14946_15019[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (36))){
var inst_14871 = (state_14912[(25)]);
var inst_14875 = cljs.core.chunk_first.call(null,inst_14871);
var inst_14876 = cljs.core.chunk_rest.call(null,inst_14871);
var inst_14877 = cljs.core.count.call(null,inst_14875);
var inst_14852 = inst_14876;
var inst_14853 = inst_14875;
var inst_14854 = inst_14877;
var inst_14855 = (0);
var state_14912__$1 = (function (){var statearr_14947 = state_14912;
(statearr_14947[(9)] = inst_14855);

(statearr_14947[(10)] = inst_14853);

(statearr_14947[(20)] = inst_14854);

(statearr_14947[(21)] = inst_14852);

return statearr_14947;
})();
var statearr_14948_15020 = state_14912__$1;
(statearr_14948_15020[(2)] = null);

(statearr_14948_15020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (41))){
var inst_14871 = (state_14912[(25)]);
var inst_14887 = (state_14912[(2)]);
var inst_14888 = cljs.core.next.call(null,inst_14871);
var inst_14852 = inst_14888;
var inst_14853 = null;
var inst_14854 = (0);
var inst_14855 = (0);
var state_14912__$1 = (function (){var statearr_14949 = state_14912;
(statearr_14949[(9)] = inst_14855);

(statearr_14949[(10)] = inst_14853);

(statearr_14949[(27)] = inst_14887);

(statearr_14949[(20)] = inst_14854);

(statearr_14949[(21)] = inst_14852);

return statearr_14949;
})();
var statearr_14950_15021 = state_14912__$1;
(statearr_14950_15021[(2)] = null);

(statearr_14950_15021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (43))){
var state_14912__$1 = state_14912;
var statearr_14951_15022 = state_14912__$1;
(statearr_14951_15022[(2)] = null);

(statearr_14951_15022[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (29))){
var inst_14896 = (state_14912[(2)]);
var state_14912__$1 = state_14912;
var statearr_14952_15023 = state_14912__$1;
(statearr_14952_15023[(2)] = inst_14896);

(statearr_14952_15023[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (44))){
var inst_14905 = (state_14912[(2)]);
var state_14912__$1 = (function (){var statearr_14953 = state_14912;
(statearr_14953[(28)] = inst_14905);

return statearr_14953;
})();
var statearr_14954_15024 = state_14912__$1;
(statearr_14954_15024[(2)] = null);

(statearr_14954_15024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (6))){
var inst_14844 = (state_14912[(29)]);
var inst_14843 = cljs.core.deref.call(null,cs);
var inst_14844__$1 = cljs.core.keys.call(null,inst_14843);
var inst_14845 = cljs.core.count.call(null,inst_14844__$1);
var inst_14846 = cljs.core.reset_BANG_.call(null,dctr,inst_14845);
var inst_14851 = cljs.core.seq.call(null,inst_14844__$1);
var inst_14852 = inst_14851;
var inst_14853 = null;
var inst_14854 = (0);
var inst_14855 = (0);
var state_14912__$1 = (function (){var statearr_14955 = state_14912;
(statearr_14955[(9)] = inst_14855);

(statearr_14955[(29)] = inst_14844__$1);

(statearr_14955[(30)] = inst_14846);

(statearr_14955[(10)] = inst_14853);

(statearr_14955[(20)] = inst_14854);

(statearr_14955[(21)] = inst_14852);

return statearr_14955;
})();
var statearr_14956_15025 = state_14912__$1;
(statearr_14956_15025[(2)] = null);

(statearr_14956_15025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (28))){
var inst_14852 = (state_14912[(21)]);
var inst_14871 = (state_14912[(25)]);
var inst_14871__$1 = cljs.core.seq.call(null,inst_14852);
var state_14912__$1 = (function (){var statearr_14957 = state_14912;
(statearr_14957[(25)] = inst_14871__$1);

return statearr_14957;
})();
if(inst_14871__$1){
var statearr_14958_15026 = state_14912__$1;
(statearr_14958_15026[(1)] = (33));

} else {
var statearr_14959_15027 = state_14912__$1;
(statearr_14959_15027[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (25))){
var inst_14855 = (state_14912[(9)]);
var inst_14854 = (state_14912[(20)]);
var inst_14857 = (inst_14855 < inst_14854);
var inst_14858 = inst_14857;
var state_14912__$1 = state_14912;
if(cljs.core.truth_(inst_14858)){
var statearr_14960_15028 = state_14912__$1;
(statearr_14960_15028[(1)] = (27));

} else {
var statearr_14961_15029 = state_14912__$1;
(statearr_14961_15029[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (34))){
var state_14912__$1 = state_14912;
var statearr_14962_15030 = state_14912__$1;
(statearr_14962_15030[(2)] = null);

(statearr_14962_15030[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (17))){
var state_14912__$1 = state_14912;
var statearr_14963_15031 = state_14912__$1;
(statearr_14963_15031[(2)] = null);

(statearr_14963_15031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (3))){
var inst_14910 = (state_14912[(2)]);
var state_14912__$1 = state_14912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14912__$1,inst_14910);
} else {
if((state_val_14913 === (12))){
var inst_14839 = (state_14912[(2)]);
var state_14912__$1 = state_14912;
var statearr_14964_15032 = state_14912__$1;
(statearr_14964_15032[(2)] = inst_14839);

(statearr_14964_15032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (2))){
var state_14912__$1 = state_14912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14912__$1,(4),ch);
} else {
if((state_val_14913 === (23))){
var state_14912__$1 = state_14912;
var statearr_14965_15033 = state_14912__$1;
(statearr_14965_15033[(2)] = null);

(statearr_14965_15033[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (35))){
var inst_14894 = (state_14912[(2)]);
var state_14912__$1 = state_14912;
var statearr_14966_15034 = state_14912__$1;
(statearr_14966_15034[(2)] = inst_14894);

(statearr_14966_15034[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (19))){
var inst_14813 = (state_14912[(7)]);
var inst_14817 = cljs.core.chunk_first.call(null,inst_14813);
var inst_14818 = cljs.core.chunk_rest.call(null,inst_14813);
var inst_14819 = cljs.core.count.call(null,inst_14817);
var inst_14793 = inst_14818;
var inst_14794 = inst_14817;
var inst_14795 = inst_14819;
var inst_14796 = (0);
var state_14912__$1 = (function (){var statearr_14967 = state_14912;
(statearr_14967[(14)] = inst_14796);

(statearr_14967[(15)] = inst_14793);

(statearr_14967[(16)] = inst_14795);

(statearr_14967[(17)] = inst_14794);

return statearr_14967;
})();
var statearr_14968_15035 = state_14912__$1;
(statearr_14968_15035[(2)] = null);

(statearr_14968_15035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (11))){
var inst_14813 = (state_14912[(7)]);
var inst_14793 = (state_14912[(15)]);
var inst_14813__$1 = cljs.core.seq.call(null,inst_14793);
var state_14912__$1 = (function (){var statearr_14969 = state_14912;
(statearr_14969[(7)] = inst_14813__$1);

return statearr_14969;
})();
if(inst_14813__$1){
var statearr_14970_15036 = state_14912__$1;
(statearr_14970_15036[(1)] = (16));

} else {
var statearr_14971_15037 = state_14912__$1;
(statearr_14971_15037[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (9))){
var inst_14841 = (state_14912[(2)]);
var state_14912__$1 = state_14912;
var statearr_14972_15038 = state_14912__$1;
(statearr_14972_15038[(2)] = inst_14841);

(statearr_14972_15038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (5))){
var inst_14791 = cljs.core.deref.call(null,cs);
var inst_14792 = cljs.core.seq.call(null,inst_14791);
var inst_14793 = inst_14792;
var inst_14794 = null;
var inst_14795 = (0);
var inst_14796 = (0);
var state_14912__$1 = (function (){var statearr_14973 = state_14912;
(statearr_14973[(14)] = inst_14796);

(statearr_14973[(15)] = inst_14793);

(statearr_14973[(16)] = inst_14795);

(statearr_14973[(17)] = inst_14794);

return statearr_14973;
})();
var statearr_14974_15039 = state_14912__$1;
(statearr_14974_15039[(2)] = null);

(statearr_14974_15039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (14))){
var state_14912__$1 = state_14912;
var statearr_14975_15040 = state_14912__$1;
(statearr_14975_15040[(2)] = null);

(statearr_14975_15040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (45))){
var inst_14902 = (state_14912[(2)]);
var state_14912__$1 = state_14912;
var statearr_14976_15041 = state_14912__$1;
(statearr_14976_15041[(2)] = inst_14902);

(statearr_14976_15041[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (26))){
var inst_14844 = (state_14912[(29)]);
var inst_14898 = (state_14912[(2)]);
var inst_14899 = cljs.core.seq.call(null,inst_14844);
var state_14912__$1 = (function (){var statearr_14977 = state_14912;
(statearr_14977[(31)] = inst_14898);

return statearr_14977;
})();
if(inst_14899){
var statearr_14978_15042 = state_14912__$1;
(statearr_14978_15042[(1)] = (42));

} else {
var statearr_14979_15043 = state_14912__$1;
(statearr_14979_15043[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (16))){
var inst_14813 = (state_14912[(7)]);
var inst_14815 = cljs.core.chunked_seq_QMARK_.call(null,inst_14813);
var state_14912__$1 = state_14912;
if(inst_14815){
var statearr_14980_15044 = state_14912__$1;
(statearr_14980_15044[(1)] = (19));

} else {
var statearr_14981_15045 = state_14912__$1;
(statearr_14981_15045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (38))){
var inst_14891 = (state_14912[(2)]);
var state_14912__$1 = state_14912;
var statearr_14982_15046 = state_14912__$1;
(statearr_14982_15046[(2)] = inst_14891);

(statearr_14982_15046[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (30))){
var state_14912__$1 = state_14912;
var statearr_14983_15047 = state_14912__$1;
(statearr_14983_15047[(2)] = null);

(statearr_14983_15047[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (10))){
var inst_14796 = (state_14912[(14)]);
var inst_14794 = (state_14912[(17)]);
var inst_14802 = cljs.core._nth.call(null,inst_14794,inst_14796);
var inst_14803 = cljs.core.nth.call(null,inst_14802,(0),null);
var inst_14804 = cljs.core.nth.call(null,inst_14802,(1),null);
var state_14912__$1 = (function (){var statearr_14984 = state_14912;
(statearr_14984[(26)] = inst_14803);

return statearr_14984;
})();
if(cljs.core.truth_(inst_14804)){
var statearr_14985_15048 = state_14912__$1;
(statearr_14985_15048[(1)] = (13));

} else {
var statearr_14986_15049 = state_14912__$1;
(statearr_14986_15049[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (18))){
var inst_14837 = (state_14912[(2)]);
var state_14912__$1 = state_14912;
var statearr_14987_15050 = state_14912__$1;
(statearr_14987_15050[(2)] = inst_14837);

(statearr_14987_15050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (42))){
var state_14912__$1 = state_14912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14912__$1,(45),dchan);
} else {
if((state_val_14913 === (37))){
var inst_14880 = (state_14912[(23)]);
var inst_14871 = (state_14912[(25)]);
var inst_14784 = (state_14912[(12)]);
var inst_14880__$1 = cljs.core.first.call(null,inst_14871);
var inst_14881 = cljs.core.async.put_BANG_.call(null,inst_14880__$1,inst_14784,done);
var state_14912__$1 = (function (){var statearr_14988 = state_14912;
(statearr_14988[(23)] = inst_14880__$1);

return statearr_14988;
})();
if(cljs.core.truth_(inst_14881)){
var statearr_14989_15051 = state_14912__$1;
(statearr_14989_15051[(1)] = (39));

} else {
var statearr_14990_15052 = state_14912__$1;
(statearr_14990_15052[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14913 === (8))){
var inst_14796 = (state_14912[(14)]);
var inst_14795 = (state_14912[(16)]);
var inst_14798 = (inst_14796 < inst_14795);
var inst_14799 = inst_14798;
var state_14912__$1 = state_14912;
if(cljs.core.truth_(inst_14799)){
var statearr_14991_15053 = state_14912__$1;
(statearr_14991_15053[(1)] = (10));

} else {
var statearr_14992_15054 = state_14912__$1;
(statearr_14992_15054[(1)] = (11));

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
});})(c__6821__auto___15000,cs,m,dchan,dctr,done))
;
return ((function (switch__6765__auto__,c__6821__auto___15000,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6766__auto__ = null;
var cljs$core$async$mult_$_state_machine__6766__auto____0 = (function (){
var statearr_14996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14996[(0)] = cljs$core$async$mult_$_state_machine__6766__auto__);

(statearr_14996[(1)] = (1));

return statearr_14996;
});
var cljs$core$async$mult_$_state_machine__6766__auto____1 = (function (state_14912){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_14912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e14997){if((e14997 instanceof Object)){
var ex__6769__auto__ = e14997;
var statearr_14998_15055 = state_14912;
(statearr_14998_15055[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15056 = state_14912;
state_14912 = G__15056;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6766__auto__ = function(state_14912){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6766__auto____1.call(this,state_14912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6766__auto____0;
cljs$core$async$mult_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6766__auto____1;
return cljs$core$async$mult_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___15000,cs,m,dchan,dctr,done))
})();
var state__6823__auto__ = (function (){var statearr_14999 = f__6822__auto__.call(null);
(statearr_14999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___15000);

return statearr_14999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___15000,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
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

cljs.core.async.Mix = (function (){var obj15058 = {};
return obj15058;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4304__auto__ = m;
if(and__4304__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4304__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4952__auto__ = (((m == null))?null:m);
return (function (){var or__4316__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4304__auto__ = m;
if(and__4304__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4304__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4952__auto__ = (((m == null))?null:m);
return (function (){var or__4316__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4304__auto__ = m;
if(and__4304__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4304__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4952__auto__ = (((m == null))?null:m);
return (function (){var or__4316__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4304__auto__ = m;
if(and__4304__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4304__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4952__auto__ = (((m == null))?null:m);
return (function (){var or__4316__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4304__auto__ = m;
if(and__4304__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4304__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4952__auto__ = (((m == null))?null:m);
return (function (){var or__4316__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__15059){
var map__15064 = p__15059;
var map__15064__$1 = ((cljs.core.seq_QMARK_.call(null,map__15064))?cljs.core.apply.call(null,cljs.core.hash_map,map__15064):map__15064);
var opts = map__15064__$1;
var statearr_15065_15068 = state;
(statearr_15065_15068[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__15064,map__15064__$1,opts){
return (function (val){
var statearr_15066_15069 = state;
(statearr_15066_15069[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15064,map__15064__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_15067_15070 = state;
(statearr_15067_15070[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__15059 = null;
if (arguments.length > 3) {
var G__15071__i = 0, G__15071__a = new Array(arguments.length -  3);
while (G__15071__i < G__15071__a.length) {G__15071__a[G__15071__i] = arguments[G__15071__i + 3]; ++G__15071__i;}
  p__15059 = new cljs.core.IndexedSeq(G__15071__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__15059);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__15072){
var state = cljs.core.first(arglist__15072);
arglist__15072 = cljs.core.next(arglist__15072);
var cont_block = cljs.core.first(arglist__15072);
arglist__15072 = cljs.core.next(arglist__15072);
var ports = cljs.core.first(arglist__15072);
var p__15059 = cljs.core.rest(arglist__15072);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__15059);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
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
if(typeof cljs.core.async.t15192 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15192 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15193){
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
this.meta15193 = meta15193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15192.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t15192.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15192.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15192.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15192.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15192.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t15192.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15192.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15192.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15194){
var self__ = this;
var _15194__$1 = this;
return self__.meta15193;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15194,meta15193__$1){
var self__ = this;
var _15194__$1 = this;
return (new cljs.core.async.t15192(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15193__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t15192.cljs$lang$type = true;

cljs.core.async.t15192.cljs$lang$ctorStr = "cljs.core.async/t15192";

cljs.core.async.t15192.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4895__auto__,writer__4896__auto__,opt__4897__auto__){
return cljs.core._write.call(null,writer__4896__auto__,"cljs.core.async/t15192");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t15192 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t15192(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15193){
return (new cljs.core.async.t15192(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15193));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t15192(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6821__auto___15311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___15311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___15311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15264){
var state_val_15265 = (state_15264[(1)]);
if((state_val_15265 === (7))){
var inst_15208 = (state_15264[(7)]);
var inst_15213 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15208);
var state_15264__$1 = state_15264;
var statearr_15266_15312 = state_15264__$1;
(statearr_15266_15312[(2)] = inst_15213);

(statearr_15266_15312[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (20))){
var inst_15223 = (state_15264[(8)]);
var state_15264__$1 = state_15264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15264__$1,(23),out,inst_15223);
} else {
if((state_val_15265 === (1))){
var inst_15198 = (state_15264[(9)]);
var inst_15198__$1 = calc_state.call(null);
var inst_15199 = cljs.core.seq_QMARK_.call(null,inst_15198__$1);
var state_15264__$1 = (function (){var statearr_15267 = state_15264;
(statearr_15267[(9)] = inst_15198__$1);

return statearr_15267;
})();
if(inst_15199){
var statearr_15268_15313 = state_15264__$1;
(statearr_15268_15313[(1)] = (2));

} else {
var statearr_15269_15314 = state_15264__$1;
(statearr_15269_15314[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (24))){
var inst_15216 = (state_15264[(10)]);
var inst_15208 = inst_15216;
var state_15264__$1 = (function (){var statearr_15270 = state_15264;
(statearr_15270[(7)] = inst_15208);

return statearr_15270;
})();
var statearr_15271_15315 = state_15264__$1;
(statearr_15271_15315[(2)] = null);

(statearr_15271_15315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (4))){
var inst_15198 = (state_15264[(9)]);
var inst_15204 = (state_15264[(2)]);
var inst_15205 = cljs.core.get.call(null,inst_15204,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15206 = cljs.core.get.call(null,inst_15204,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15207 = cljs.core.get.call(null,inst_15204,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15208 = inst_15198;
var state_15264__$1 = (function (){var statearr_15272 = state_15264;
(statearr_15272[(11)] = inst_15205);

(statearr_15272[(7)] = inst_15208);

(statearr_15272[(12)] = inst_15207);

(statearr_15272[(13)] = inst_15206);

return statearr_15272;
})();
var statearr_15273_15316 = state_15264__$1;
(statearr_15273_15316[(2)] = null);

(statearr_15273_15316[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (15))){
var state_15264__$1 = state_15264;
var statearr_15274_15317 = state_15264__$1;
(statearr_15274_15317[(2)] = null);

(statearr_15274_15317[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (21))){
var inst_15216 = (state_15264[(10)]);
var inst_15208 = inst_15216;
var state_15264__$1 = (function (){var statearr_15275 = state_15264;
(statearr_15275[(7)] = inst_15208);

return statearr_15275;
})();
var statearr_15276_15318 = state_15264__$1;
(statearr_15276_15318[(2)] = null);

(statearr_15276_15318[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (13))){
var inst_15260 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
var statearr_15277_15319 = state_15264__$1;
(statearr_15277_15319[(2)] = inst_15260);

(statearr_15277_15319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (22))){
var inst_15258 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
var statearr_15278_15320 = state_15264__$1;
(statearr_15278_15320[(2)] = inst_15258);

(statearr_15278_15320[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (6))){
var inst_15262 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15264__$1,inst_15262);
} else {
if((state_val_15265 === (25))){
var state_15264__$1 = state_15264;
var statearr_15279_15321 = state_15264__$1;
(statearr_15279_15321[(2)] = null);

(statearr_15279_15321[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (17))){
var inst_15238 = (state_15264[(14)]);
var state_15264__$1 = state_15264;
var statearr_15280_15322 = state_15264__$1;
(statearr_15280_15322[(2)] = inst_15238);

(statearr_15280_15322[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (3))){
var inst_15198 = (state_15264[(9)]);
var state_15264__$1 = state_15264;
var statearr_15281_15323 = state_15264__$1;
(statearr_15281_15323[(2)] = inst_15198);

(statearr_15281_15323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (12))){
var inst_15238 = (state_15264[(14)]);
var inst_15219 = (state_15264[(15)]);
var inst_15224 = (state_15264[(16)]);
var inst_15238__$1 = inst_15219.call(null,inst_15224);
var state_15264__$1 = (function (){var statearr_15282 = state_15264;
(statearr_15282[(14)] = inst_15238__$1);

return statearr_15282;
})();
if(cljs.core.truth_(inst_15238__$1)){
var statearr_15283_15324 = state_15264__$1;
(statearr_15283_15324[(1)] = (17));

} else {
var statearr_15284_15325 = state_15264__$1;
(statearr_15284_15325[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (2))){
var inst_15198 = (state_15264[(9)]);
var inst_15201 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15198);
var state_15264__$1 = state_15264;
var statearr_15285_15326 = state_15264__$1;
(statearr_15285_15326[(2)] = inst_15201);

(statearr_15285_15326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (23))){
var inst_15249 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
if(cljs.core.truth_(inst_15249)){
var statearr_15286_15327 = state_15264__$1;
(statearr_15286_15327[(1)] = (24));

} else {
var statearr_15287_15328 = state_15264__$1;
(statearr_15287_15328[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (19))){
var inst_15246 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
if(cljs.core.truth_(inst_15246)){
var statearr_15288_15329 = state_15264__$1;
(statearr_15288_15329[(1)] = (20));

} else {
var statearr_15289_15330 = state_15264__$1;
(statearr_15289_15330[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (11))){
var inst_15223 = (state_15264[(8)]);
var inst_15229 = (inst_15223 == null);
var state_15264__$1 = state_15264;
if(cljs.core.truth_(inst_15229)){
var statearr_15290_15331 = state_15264__$1;
(statearr_15290_15331[(1)] = (14));

} else {
var statearr_15291_15332 = state_15264__$1;
(statearr_15291_15332[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (9))){
var inst_15216 = (state_15264[(10)]);
var inst_15216__$1 = (state_15264[(2)]);
var inst_15217 = cljs.core.get.call(null,inst_15216__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15218 = cljs.core.get.call(null,inst_15216__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15219 = cljs.core.get.call(null,inst_15216__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_15264__$1 = (function (){var statearr_15292 = state_15264;
(statearr_15292[(15)] = inst_15219);

(statearr_15292[(10)] = inst_15216__$1);

(statearr_15292[(17)] = inst_15218);

return statearr_15292;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15264__$1,(10),inst_15217);
} else {
if((state_val_15265 === (5))){
var inst_15208 = (state_15264[(7)]);
var inst_15211 = cljs.core.seq_QMARK_.call(null,inst_15208);
var state_15264__$1 = state_15264;
if(inst_15211){
var statearr_15293_15333 = state_15264__$1;
(statearr_15293_15333[(1)] = (7));

} else {
var statearr_15294_15334 = state_15264__$1;
(statearr_15294_15334[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (14))){
var inst_15224 = (state_15264[(16)]);
var inst_15231 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15224);
var state_15264__$1 = state_15264;
var statearr_15295_15335 = state_15264__$1;
(statearr_15295_15335[(2)] = inst_15231);

(statearr_15295_15335[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (26))){
var inst_15254 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
var statearr_15296_15336 = state_15264__$1;
(statearr_15296_15336[(2)] = inst_15254);

(statearr_15296_15336[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (16))){
var inst_15234 = (state_15264[(2)]);
var inst_15235 = calc_state.call(null);
var inst_15208 = inst_15235;
var state_15264__$1 = (function (){var statearr_15297 = state_15264;
(statearr_15297[(7)] = inst_15208);

(statearr_15297[(18)] = inst_15234);

return statearr_15297;
})();
var statearr_15298_15337 = state_15264__$1;
(statearr_15298_15337[(2)] = null);

(statearr_15298_15337[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (10))){
var inst_15224 = (state_15264[(16)]);
var inst_15223 = (state_15264[(8)]);
var inst_15222 = (state_15264[(2)]);
var inst_15223__$1 = cljs.core.nth.call(null,inst_15222,(0),null);
var inst_15224__$1 = cljs.core.nth.call(null,inst_15222,(1),null);
var inst_15225 = (inst_15223__$1 == null);
var inst_15226 = cljs.core._EQ_.call(null,inst_15224__$1,change);
var inst_15227 = (inst_15225) || (inst_15226);
var state_15264__$1 = (function (){var statearr_15299 = state_15264;
(statearr_15299[(16)] = inst_15224__$1);

(statearr_15299[(8)] = inst_15223__$1);

return statearr_15299;
})();
if(cljs.core.truth_(inst_15227)){
var statearr_15300_15338 = state_15264__$1;
(statearr_15300_15338[(1)] = (11));

} else {
var statearr_15301_15339 = state_15264__$1;
(statearr_15301_15339[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (18))){
var inst_15219 = (state_15264[(15)]);
var inst_15224 = (state_15264[(16)]);
var inst_15218 = (state_15264[(17)]);
var inst_15241 = cljs.core.empty_QMARK_.call(null,inst_15219);
var inst_15242 = inst_15218.call(null,inst_15224);
var inst_15243 = cljs.core.not.call(null,inst_15242);
var inst_15244 = (inst_15241) && (inst_15243);
var state_15264__$1 = state_15264;
var statearr_15302_15340 = state_15264__$1;
(statearr_15302_15340[(2)] = inst_15244);

(statearr_15302_15340[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (8))){
var inst_15208 = (state_15264[(7)]);
var state_15264__$1 = state_15264;
var statearr_15303_15341 = state_15264__$1;
(statearr_15303_15341[(2)] = inst_15208);

(statearr_15303_15341[(1)] = (9));


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
});})(c__6821__auto___15311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6765__auto__,c__6821__auto___15311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6766__auto__ = null;
var cljs$core$async$mix_$_state_machine__6766__auto____0 = (function (){
var statearr_15307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15307[(0)] = cljs$core$async$mix_$_state_machine__6766__auto__);

(statearr_15307[(1)] = (1));

return statearr_15307;
});
var cljs$core$async$mix_$_state_machine__6766__auto____1 = (function (state_15264){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_15264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e15308){if((e15308 instanceof Object)){
var ex__6769__auto__ = e15308;
var statearr_15309_15342 = state_15264;
(statearr_15309_15342[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15343 = state_15264;
state_15264 = G__15343;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6766__auto__ = function(state_15264){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6766__auto____1.call(this,state_15264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6766__auto____0;
cljs$core$async$mix_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6766__auto____1;
return cljs$core$async$mix_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___15311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6823__auto__ = (function (){var statearr_15310 = f__6822__auto__.call(null);
(statearr_15310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___15311);

return statearr_15310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___15311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj15345 = {};
return obj15345;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4304__auto__ = p;
if(and__4304__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4304__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4952__auto__ = (((p == null))?null:p);
return (function (){var or__4316__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4304__auto__ = p;
if(and__4304__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4304__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4952__auto__ = (((p == null))?null:p);
return (function (){var or__4316__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__4304__auto__ = p;
if(and__4304__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4304__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4952__auto__ = (((p == null))?null:p);
return (function (){var or__4316__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__4304__auto__ = p;
if(and__4304__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4304__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4952__auto__ = (((p == null))?null:p);
return (function (){var or__4316__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

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
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4316__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4316__auto__)){
return or__4316__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4316__auto__,mults){
return (function (p1__15346_SHARP_){
if(cljs.core.truth_(p1__15346_SHARP_.call(null,topic))){
return p1__15346_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15346_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4316__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t15469 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15469 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15470){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15470 = meta15470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15469.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t15469.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t15469.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t15469.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t15469.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t15469.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15469.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t15469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15471){
var self__ = this;
var _15471__$1 = this;
return self__.meta15470;
});})(mults,ensure_mult))
;

cljs.core.async.t15469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15471,meta15470__$1){
var self__ = this;
var _15471__$1 = this;
return (new cljs.core.async.t15469(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15470__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t15469.cljs$lang$type = true;

cljs.core.async.t15469.cljs$lang$ctorStr = "cljs.core.async/t15469";

cljs.core.async.t15469.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4895__auto__,writer__4896__auto__,opt__4897__auto__){
return cljs.core._write.call(null,writer__4896__auto__,"cljs.core.async/t15469");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t15469 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t15469(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15470){
return (new cljs.core.async.t15469(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15470));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t15469(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6821__auto___15591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___15591,mults,ensure_mult,p){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___15591,mults,ensure_mult,p){
return (function (state_15543){
var state_val_15544 = (state_15543[(1)]);
if((state_val_15544 === (7))){
var inst_15539 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
var statearr_15545_15592 = state_15543__$1;
(statearr_15545_15592[(2)] = inst_15539);

(statearr_15545_15592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (20))){
var state_15543__$1 = state_15543;
var statearr_15546_15593 = state_15543__$1;
(statearr_15546_15593[(2)] = null);

(statearr_15546_15593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (1))){
var state_15543__$1 = state_15543;
var statearr_15547_15594 = state_15543__$1;
(statearr_15547_15594[(2)] = null);

(statearr_15547_15594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (24))){
var inst_15522 = (state_15543[(7)]);
var inst_15531 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15522);
var state_15543__$1 = state_15543;
var statearr_15548_15595 = state_15543__$1;
(statearr_15548_15595[(2)] = inst_15531);

(statearr_15548_15595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (4))){
var inst_15474 = (state_15543[(8)]);
var inst_15474__$1 = (state_15543[(2)]);
var inst_15475 = (inst_15474__$1 == null);
var state_15543__$1 = (function (){var statearr_15549 = state_15543;
(statearr_15549[(8)] = inst_15474__$1);

return statearr_15549;
})();
if(cljs.core.truth_(inst_15475)){
var statearr_15550_15596 = state_15543__$1;
(statearr_15550_15596[(1)] = (5));

} else {
var statearr_15551_15597 = state_15543__$1;
(statearr_15551_15597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (15))){
var inst_15516 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
var statearr_15552_15598 = state_15543__$1;
(statearr_15552_15598[(2)] = inst_15516);

(statearr_15552_15598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (21))){
var inst_15536 = (state_15543[(2)]);
var state_15543__$1 = (function (){var statearr_15553 = state_15543;
(statearr_15553[(9)] = inst_15536);

return statearr_15553;
})();
var statearr_15554_15599 = state_15543__$1;
(statearr_15554_15599[(2)] = null);

(statearr_15554_15599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (13))){
var inst_15498 = (state_15543[(10)]);
var inst_15500 = cljs.core.chunked_seq_QMARK_.call(null,inst_15498);
var state_15543__$1 = state_15543;
if(inst_15500){
var statearr_15555_15600 = state_15543__$1;
(statearr_15555_15600[(1)] = (16));

} else {
var statearr_15556_15601 = state_15543__$1;
(statearr_15556_15601[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (22))){
var inst_15528 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
if(cljs.core.truth_(inst_15528)){
var statearr_15557_15602 = state_15543__$1;
(statearr_15557_15602[(1)] = (23));

} else {
var statearr_15558_15603 = state_15543__$1;
(statearr_15558_15603[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (6))){
var inst_15522 = (state_15543[(7)]);
var inst_15524 = (state_15543[(11)]);
var inst_15474 = (state_15543[(8)]);
var inst_15522__$1 = topic_fn.call(null,inst_15474);
var inst_15523 = cljs.core.deref.call(null,mults);
var inst_15524__$1 = cljs.core.get.call(null,inst_15523,inst_15522__$1);
var state_15543__$1 = (function (){var statearr_15559 = state_15543;
(statearr_15559[(7)] = inst_15522__$1);

(statearr_15559[(11)] = inst_15524__$1);

return statearr_15559;
})();
if(cljs.core.truth_(inst_15524__$1)){
var statearr_15560_15604 = state_15543__$1;
(statearr_15560_15604[(1)] = (19));

} else {
var statearr_15561_15605 = state_15543__$1;
(statearr_15561_15605[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (25))){
var inst_15533 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
var statearr_15562_15606 = state_15543__$1;
(statearr_15562_15606[(2)] = inst_15533);

(statearr_15562_15606[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (17))){
var inst_15498 = (state_15543[(10)]);
var inst_15507 = cljs.core.first.call(null,inst_15498);
var inst_15508 = cljs.core.async.muxch_STAR_.call(null,inst_15507);
var inst_15509 = cljs.core.async.close_BANG_.call(null,inst_15508);
var inst_15510 = cljs.core.next.call(null,inst_15498);
var inst_15484 = inst_15510;
var inst_15485 = null;
var inst_15486 = (0);
var inst_15487 = (0);
var state_15543__$1 = (function (){var statearr_15563 = state_15543;
(statearr_15563[(12)] = inst_15486);

(statearr_15563[(13)] = inst_15509);

(statearr_15563[(14)] = inst_15484);

(statearr_15563[(15)] = inst_15485);

(statearr_15563[(16)] = inst_15487);

return statearr_15563;
})();
var statearr_15564_15607 = state_15543__$1;
(statearr_15564_15607[(2)] = null);

(statearr_15564_15607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (3))){
var inst_15541 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15543__$1,inst_15541);
} else {
if((state_val_15544 === (12))){
var inst_15518 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
var statearr_15565_15608 = state_15543__$1;
(statearr_15565_15608[(2)] = inst_15518);

(statearr_15565_15608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (2))){
var state_15543__$1 = state_15543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15543__$1,(4),ch);
} else {
if((state_val_15544 === (23))){
var state_15543__$1 = state_15543;
var statearr_15566_15609 = state_15543__$1;
(statearr_15566_15609[(2)] = null);

(statearr_15566_15609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (19))){
var inst_15524 = (state_15543[(11)]);
var inst_15474 = (state_15543[(8)]);
var inst_15526 = cljs.core.async.muxch_STAR_.call(null,inst_15524);
var state_15543__$1 = state_15543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15543__$1,(22),inst_15526,inst_15474);
} else {
if((state_val_15544 === (11))){
var inst_15484 = (state_15543[(14)]);
var inst_15498 = (state_15543[(10)]);
var inst_15498__$1 = cljs.core.seq.call(null,inst_15484);
var state_15543__$1 = (function (){var statearr_15567 = state_15543;
(statearr_15567[(10)] = inst_15498__$1);

return statearr_15567;
})();
if(inst_15498__$1){
var statearr_15568_15610 = state_15543__$1;
(statearr_15568_15610[(1)] = (13));

} else {
var statearr_15569_15611 = state_15543__$1;
(statearr_15569_15611[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (9))){
var inst_15520 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
var statearr_15570_15612 = state_15543__$1;
(statearr_15570_15612[(2)] = inst_15520);

(statearr_15570_15612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (5))){
var inst_15481 = cljs.core.deref.call(null,mults);
var inst_15482 = cljs.core.vals.call(null,inst_15481);
var inst_15483 = cljs.core.seq.call(null,inst_15482);
var inst_15484 = inst_15483;
var inst_15485 = null;
var inst_15486 = (0);
var inst_15487 = (0);
var state_15543__$1 = (function (){var statearr_15571 = state_15543;
(statearr_15571[(12)] = inst_15486);

(statearr_15571[(14)] = inst_15484);

(statearr_15571[(15)] = inst_15485);

(statearr_15571[(16)] = inst_15487);

return statearr_15571;
})();
var statearr_15572_15613 = state_15543__$1;
(statearr_15572_15613[(2)] = null);

(statearr_15572_15613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (14))){
var state_15543__$1 = state_15543;
var statearr_15576_15614 = state_15543__$1;
(statearr_15576_15614[(2)] = null);

(statearr_15576_15614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (16))){
var inst_15498 = (state_15543[(10)]);
var inst_15502 = cljs.core.chunk_first.call(null,inst_15498);
var inst_15503 = cljs.core.chunk_rest.call(null,inst_15498);
var inst_15504 = cljs.core.count.call(null,inst_15502);
var inst_15484 = inst_15503;
var inst_15485 = inst_15502;
var inst_15486 = inst_15504;
var inst_15487 = (0);
var state_15543__$1 = (function (){var statearr_15577 = state_15543;
(statearr_15577[(12)] = inst_15486);

(statearr_15577[(14)] = inst_15484);

(statearr_15577[(15)] = inst_15485);

(statearr_15577[(16)] = inst_15487);

return statearr_15577;
})();
var statearr_15578_15615 = state_15543__$1;
(statearr_15578_15615[(2)] = null);

(statearr_15578_15615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (10))){
var inst_15486 = (state_15543[(12)]);
var inst_15484 = (state_15543[(14)]);
var inst_15485 = (state_15543[(15)]);
var inst_15487 = (state_15543[(16)]);
var inst_15492 = cljs.core._nth.call(null,inst_15485,inst_15487);
var inst_15493 = cljs.core.async.muxch_STAR_.call(null,inst_15492);
var inst_15494 = cljs.core.async.close_BANG_.call(null,inst_15493);
var inst_15495 = (inst_15487 + (1));
var tmp15573 = inst_15486;
var tmp15574 = inst_15484;
var tmp15575 = inst_15485;
var inst_15484__$1 = tmp15574;
var inst_15485__$1 = tmp15575;
var inst_15486__$1 = tmp15573;
var inst_15487__$1 = inst_15495;
var state_15543__$1 = (function (){var statearr_15579 = state_15543;
(statearr_15579[(12)] = inst_15486__$1);

(statearr_15579[(14)] = inst_15484__$1);

(statearr_15579[(15)] = inst_15485__$1);

(statearr_15579[(17)] = inst_15494);

(statearr_15579[(16)] = inst_15487__$1);

return statearr_15579;
})();
var statearr_15580_15616 = state_15543__$1;
(statearr_15580_15616[(2)] = null);

(statearr_15580_15616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (18))){
var inst_15513 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
var statearr_15581_15617 = state_15543__$1;
(statearr_15581_15617[(2)] = inst_15513);

(statearr_15581_15617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (8))){
var inst_15486 = (state_15543[(12)]);
var inst_15487 = (state_15543[(16)]);
var inst_15489 = (inst_15487 < inst_15486);
var inst_15490 = inst_15489;
var state_15543__$1 = state_15543;
if(cljs.core.truth_(inst_15490)){
var statearr_15582_15618 = state_15543__$1;
(statearr_15582_15618[(1)] = (10));

} else {
var statearr_15583_15619 = state_15543__$1;
(statearr_15583_15619[(1)] = (11));

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
});})(c__6821__auto___15591,mults,ensure_mult,p))
;
return ((function (switch__6765__auto__,c__6821__auto___15591,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__6766__auto__ = null;
var cljs$core$async$pub_$_state_machine__6766__auto____0 = (function (){
var statearr_15587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15587[(0)] = cljs$core$async$pub_$_state_machine__6766__auto__);

(statearr_15587[(1)] = (1));

return statearr_15587;
});
var cljs$core$async$pub_$_state_machine__6766__auto____1 = (function (state_15543){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_15543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e15588){if((e15588 instanceof Object)){
var ex__6769__auto__ = e15588;
var statearr_15589_15620 = state_15543;
(statearr_15589_15620[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15621 = state_15543;
state_15543 = G__15621;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__6766__auto__ = function(state_15543){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__6766__auto____1.call(this,state_15543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__6766__auto____0;
cljs$core$async$pub_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__6766__auto____1;
return cljs$core$async$pub_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___15591,mults,ensure_mult,p))
})();
var state__6823__auto__ = (function (){var statearr_15590 = f__6822__auto__.call(null);
(statearr_15590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___15591);

return statearr_15590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___15591,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
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
var c__6821__auto___15758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___15758,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___15758,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15728){
var state_val_15729 = (state_15728[(1)]);
if((state_val_15729 === (7))){
var state_15728__$1 = state_15728;
var statearr_15730_15759 = state_15728__$1;
(statearr_15730_15759[(2)] = null);

(statearr_15730_15759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (1))){
var state_15728__$1 = state_15728;
var statearr_15731_15760 = state_15728__$1;
(statearr_15731_15760[(2)] = null);

(statearr_15731_15760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (4))){
var inst_15692 = (state_15728[(7)]);
var inst_15694 = (inst_15692 < cnt);
var state_15728__$1 = state_15728;
if(cljs.core.truth_(inst_15694)){
var statearr_15732_15761 = state_15728__$1;
(statearr_15732_15761[(1)] = (6));

} else {
var statearr_15733_15762 = state_15728__$1;
(statearr_15733_15762[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (15))){
var inst_15724 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
var statearr_15734_15763 = state_15728__$1;
(statearr_15734_15763[(2)] = inst_15724);

(statearr_15734_15763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (13))){
var inst_15717 = cljs.core.async.close_BANG_.call(null,out);
var state_15728__$1 = state_15728;
var statearr_15735_15764 = state_15728__$1;
(statearr_15735_15764[(2)] = inst_15717);

(statearr_15735_15764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (6))){
var state_15728__$1 = state_15728;
var statearr_15736_15765 = state_15728__$1;
(statearr_15736_15765[(2)] = null);

(statearr_15736_15765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (3))){
var inst_15726 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15728__$1,inst_15726);
} else {
if((state_val_15729 === (12))){
var inst_15714 = (state_15728[(8)]);
var inst_15714__$1 = (state_15728[(2)]);
var inst_15715 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15714__$1);
var state_15728__$1 = (function (){var statearr_15737 = state_15728;
(statearr_15737[(8)] = inst_15714__$1);

return statearr_15737;
})();
if(cljs.core.truth_(inst_15715)){
var statearr_15738_15766 = state_15728__$1;
(statearr_15738_15766[(1)] = (13));

} else {
var statearr_15739_15767 = state_15728__$1;
(statearr_15739_15767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (2))){
var inst_15691 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15692 = (0);
var state_15728__$1 = (function (){var statearr_15740 = state_15728;
(statearr_15740[(9)] = inst_15691);

(statearr_15740[(7)] = inst_15692);

return statearr_15740;
})();
var statearr_15741_15768 = state_15728__$1;
(statearr_15741_15768[(2)] = null);

(statearr_15741_15768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (11))){
var inst_15692 = (state_15728[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15728,(10),Object,null,(9));
var inst_15701 = chs__$1.call(null,inst_15692);
var inst_15702 = done.call(null,inst_15692);
var inst_15703 = cljs.core.async.take_BANG_.call(null,inst_15701,inst_15702);
var state_15728__$1 = state_15728;
var statearr_15742_15769 = state_15728__$1;
(statearr_15742_15769[(2)] = inst_15703);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15728__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (9))){
var inst_15692 = (state_15728[(7)]);
var inst_15705 = (state_15728[(2)]);
var inst_15706 = (inst_15692 + (1));
var inst_15692__$1 = inst_15706;
var state_15728__$1 = (function (){var statearr_15743 = state_15728;
(statearr_15743[(7)] = inst_15692__$1);

(statearr_15743[(10)] = inst_15705);

return statearr_15743;
})();
var statearr_15744_15770 = state_15728__$1;
(statearr_15744_15770[(2)] = null);

(statearr_15744_15770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (5))){
var inst_15712 = (state_15728[(2)]);
var state_15728__$1 = (function (){var statearr_15745 = state_15728;
(statearr_15745[(11)] = inst_15712);

return statearr_15745;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15728__$1,(12),dchan);
} else {
if((state_val_15729 === (14))){
var inst_15714 = (state_15728[(8)]);
var inst_15719 = cljs.core.apply.call(null,f,inst_15714);
var state_15728__$1 = state_15728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15728__$1,(16),out,inst_15719);
} else {
if((state_val_15729 === (16))){
var inst_15721 = (state_15728[(2)]);
var state_15728__$1 = (function (){var statearr_15746 = state_15728;
(statearr_15746[(12)] = inst_15721);

return statearr_15746;
})();
var statearr_15747_15771 = state_15728__$1;
(statearr_15747_15771[(2)] = null);

(statearr_15747_15771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (10))){
var inst_15696 = (state_15728[(2)]);
var inst_15697 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15728__$1 = (function (){var statearr_15748 = state_15728;
(statearr_15748[(13)] = inst_15696);

return statearr_15748;
})();
var statearr_15749_15772 = state_15728__$1;
(statearr_15749_15772[(2)] = inst_15697);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15728__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15729 === (8))){
var inst_15710 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
var statearr_15750_15773 = state_15728__$1;
(statearr_15750_15773[(2)] = inst_15710);

(statearr_15750_15773[(1)] = (5));


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
});})(c__6821__auto___15758,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6765__auto__,c__6821__auto___15758,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__6766__auto__ = null;
var cljs$core$async$map_$_state_machine__6766__auto____0 = (function (){
var statearr_15754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15754[(0)] = cljs$core$async$map_$_state_machine__6766__auto__);

(statearr_15754[(1)] = (1));

return statearr_15754;
});
var cljs$core$async$map_$_state_machine__6766__auto____1 = (function (state_15728){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_15728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e15755){if((e15755 instanceof Object)){
var ex__6769__auto__ = e15755;
var statearr_15756_15774 = state_15728;
(statearr_15756_15774[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15775 = state_15728;
state_15728 = G__15775;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__6766__auto__ = function(state_15728){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__6766__auto____1.call(this,state_15728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__6766__auto____0;
cljs$core$async$map_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__6766__auto____1;
return cljs$core$async$map_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___15758,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6823__auto__ = (function (){var statearr_15757 = f__6822__auto__.call(null);
(statearr_15757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___15758);

return statearr_15757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___15758,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6821__auto___15883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___15883,out){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___15883,out){
return (function (state_15859){
var state_val_15860 = (state_15859[(1)]);
if((state_val_15860 === (7))){
var inst_15838 = (state_15859[(7)]);
var inst_15839 = (state_15859[(8)]);
var inst_15838__$1 = (state_15859[(2)]);
var inst_15839__$1 = cljs.core.nth.call(null,inst_15838__$1,(0),null);
var inst_15840 = cljs.core.nth.call(null,inst_15838__$1,(1),null);
var inst_15841 = (inst_15839__$1 == null);
var state_15859__$1 = (function (){var statearr_15861 = state_15859;
(statearr_15861[(7)] = inst_15838__$1);

(statearr_15861[(8)] = inst_15839__$1);

(statearr_15861[(9)] = inst_15840);

return statearr_15861;
})();
if(cljs.core.truth_(inst_15841)){
var statearr_15862_15884 = state_15859__$1;
(statearr_15862_15884[(1)] = (8));

} else {
var statearr_15863_15885 = state_15859__$1;
(statearr_15863_15885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (1))){
var inst_15830 = cljs.core.vec.call(null,chs);
var inst_15831 = inst_15830;
var state_15859__$1 = (function (){var statearr_15864 = state_15859;
(statearr_15864[(10)] = inst_15831);

return statearr_15864;
})();
var statearr_15865_15886 = state_15859__$1;
(statearr_15865_15886[(2)] = null);

(statearr_15865_15886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (4))){
var inst_15831 = (state_15859[(10)]);
var state_15859__$1 = state_15859;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15859__$1,(7),inst_15831);
} else {
if((state_val_15860 === (6))){
var inst_15855 = (state_15859[(2)]);
var state_15859__$1 = state_15859;
var statearr_15866_15887 = state_15859__$1;
(statearr_15866_15887[(2)] = inst_15855);

(statearr_15866_15887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (3))){
var inst_15857 = (state_15859[(2)]);
var state_15859__$1 = state_15859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15859__$1,inst_15857);
} else {
if((state_val_15860 === (2))){
var inst_15831 = (state_15859[(10)]);
var inst_15833 = cljs.core.count.call(null,inst_15831);
var inst_15834 = (inst_15833 > (0));
var state_15859__$1 = state_15859;
if(cljs.core.truth_(inst_15834)){
var statearr_15868_15888 = state_15859__$1;
(statearr_15868_15888[(1)] = (4));

} else {
var statearr_15869_15889 = state_15859__$1;
(statearr_15869_15889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (11))){
var inst_15831 = (state_15859[(10)]);
var inst_15848 = (state_15859[(2)]);
var tmp15867 = inst_15831;
var inst_15831__$1 = tmp15867;
var state_15859__$1 = (function (){var statearr_15870 = state_15859;
(statearr_15870[(10)] = inst_15831__$1);

(statearr_15870[(11)] = inst_15848);

return statearr_15870;
})();
var statearr_15871_15890 = state_15859__$1;
(statearr_15871_15890[(2)] = null);

(statearr_15871_15890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (9))){
var inst_15839 = (state_15859[(8)]);
var state_15859__$1 = state_15859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15859__$1,(11),out,inst_15839);
} else {
if((state_val_15860 === (5))){
var inst_15853 = cljs.core.async.close_BANG_.call(null,out);
var state_15859__$1 = state_15859;
var statearr_15872_15891 = state_15859__$1;
(statearr_15872_15891[(2)] = inst_15853);

(statearr_15872_15891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (10))){
var inst_15851 = (state_15859[(2)]);
var state_15859__$1 = state_15859;
var statearr_15873_15892 = state_15859__$1;
(statearr_15873_15892[(2)] = inst_15851);

(statearr_15873_15892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15860 === (8))){
var inst_15831 = (state_15859[(10)]);
var inst_15838 = (state_15859[(7)]);
var inst_15839 = (state_15859[(8)]);
var inst_15840 = (state_15859[(9)]);
var inst_15843 = (function (){var c = inst_15840;
var v = inst_15839;
var vec__15836 = inst_15838;
var cs = inst_15831;
return ((function (c,v,vec__15836,cs,inst_15831,inst_15838,inst_15839,inst_15840,state_val_15860,c__6821__auto___15883,out){
return (function (p1__15776_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15776_SHARP_);
});
;})(c,v,vec__15836,cs,inst_15831,inst_15838,inst_15839,inst_15840,state_val_15860,c__6821__auto___15883,out))
})();
var inst_15844 = cljs.core.filterv.call(null,inst_15843,inst_15831);
var inst_15831__$1 = inst_15844;
var state_15859__$1 = (function (){var statearr_15874 = state_15859;
(statearr_15874[(10)] = inst_15831__$1);

return statearr_15874;
})();
var statearr_15875_15893 = state_15859__$1;
(statearr_15875_15893[(2)] = null);

(statearr_15875_15893[(1)] = (2));


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
});})(c__6821__auto___15883,out))
;
return ((function (switch__6765__auto__,c__6821__auto___15883,out){
return (function() {
var cljs$core$async$merge_$_state_machine__6766__auto__ = null;
var cljs$core$async$merge_$_state_machine__6766__auto____0 = (function (){
var statearr_15879 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15879[(0)] = cljs$core$async$merge_$_state_machine__6766__auto__);

(statearr_15879[(1)] = (1));

return statearr_15879;
});
var cljs$core$async$merge_$_state_machine__6766__auto____1 = (function (state_15859){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_15859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e15880){if((e15880 instanceof Object)){
var ex__6769__auto__ = e15880;
var statearr_15881_15894 = state_15859;
(statearr_15881_15894[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15895 = state_15859;
state_15859 = G__15895;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__6766__auto__ = function(state_15859){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__6766__auto____1.call(this,state_15859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__6766__auto____0;
cljs$core$async$merge_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__6766__auto____1;
return cljs$core$async$merge_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___15883,out))
})();
var state__6823__auto__ = (function (){var statearr_15882 = f__6822__auto__.call(null);
(statearr_15882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___15883);

return statearr_15882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___15883,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
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
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6821__auto___15988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___15988,out){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___15988,out){
return (function (state_15965){
var state_val_15966 = (state_15965[(1)]);
if((state_val_15966 === (7))){
var inst_15947 = (state_15965[(7)]);
var inst_15947__$1 = (state_15965[(2)]);
var inst_15948 = (inst_15947__$1 == null);
var inst_15949 = cljs.core.not.call(null,inst_15948);
var state_15965__$1 = (function (){var statearr_15967 = state_15965;
(statearr_15967[(7)] = inst_15947__$1);

return statearr_15967;
})();
if(inst_15949){
var statearr_15968_15989 = state_15965__$1;
(statearr_15968_15989[(1)] = (8));

} else {
var statearr_15969_15990 = state_15965__$1;
(statearr_15969_15990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (1))){
var inst_15942 = (0);
var state_15965__$1 = (function (){var statearr_15970 = state_15965;
(statearr_15970[(8)] = inst_15942);

return statearr_15970;
})();
var statearr_15971_15991 = state_15965__$1;
(statearr_15971_15991[(2)] = null);

(statearr_15971_15991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (4))){
var state_15965__$1 = state_15965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15965__$1,(7),ch);
} else {
if((state_val_15966 === (6))){
var inst_15960 = (state_15965[(2)]);
var state_15965__$1 = state_15965;
var statearr_15972_15992 = state_15965__$1;
(statearr_15972_15992[(2)] = inst_15960);

(statearr_15972_15992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (3))){
var inst_15962 = (state_15965[(2)]);
var inst_15963 = cljs.core.async.close_BANG_.call(null,out);
var state_15965__$1 = (function (){var statearr_15973 = state_15965;
(statearr_15973[(9)] = inst_15962);

return statearr_15973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15965__$1,inst_15963);
} else {
if((state_val_15966 === (2))){
var inst_15942 = (state_15965[(8)]);
var inst_15944 = (inst_15942 < n);
var state_15965__$1 = state_15965;
if(cljs.core.truth_(inst_15944)){
var statearr_15974_15993 = state_15965__$1;
(statearr_15974_15993[(1)] = (4));

} else {
var statearr_15975_15994 = state_15965__$1;
(statearr_15975_15994[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (11))){
var inst_15942 = (state_15965[(8)]);
var inst_15952 = (state_15965[(2)]);
var inst_15953 = (inst_15942 + (1));
var inst_15942__$1 = inst_15953;
var state_15965__$1 = (function (){var statearr_15976 = state_15965;
(statearr_15976[(10)] = inst_15952);

(statearr_15976[(8)] = inst_15942__$1);

return statearr_15976;
})();
var statearr_15977_15995 = state_15965__$1;
(statearr_15977_15995[(2)] = null);

(statearr_15977_15995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (9))){
var state_15965__$1 = state_15965;
var statearr_15978_15996 = state_15965__$1;
(statearr_15978_15996[(2)] = null);

(statearr_15978_15996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (5))){
var state_15965__$1 = state_15965;
var statearr_15979_15997 = state_15965__$1;
(statearr_15979_15997[(2)] = null);

(statearr_15979_15997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (10))){
var inst_15957 = (state_15965[(2)]);
var state_15965__$1 = state_15965;
var statearr_15980_15998 = state_15965__$1;
(statearr_15980_15998[(2)] = inst_15957);

(statearr_15980_15998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (8))){
var inst_15947 = (state_15965[(7)]);
var state_15965__$1 = state_15965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15965__$1,(11),out,inst_15947);
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
});})(c__6821__auto___15988,out))
;
return ((function (switch__6765__auto__,c__6821__auto___15988,out){
return (function() {
var cljs$core$async$take_$_state_machine__6766__auto__ = null;
var cljs$core$async$take_$_state_machine__6766__auto____0 = (function (){
var statearr_15984 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15984[(0)] = cljs$core$async$take_$_state_machine__6766__auto__);

(statearr_15984[(1)] = (1));

return statearr_15984;
});
var cljs$core$async$take_$_state_machine__6766__auto____1 = (function (state_15965){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_15965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e15985){if((e15985 instanceof Object)){
var ex__6769__auto__ = e15985;
var statearr_15986_15999 = state_15965;
(statearr_15986_15999[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16000 = state_15965;
state_15965 = G__16000;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__6766__auto__ = function(state_15965){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__6766__auto____1.call(this,state_15965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__6766__auto____0;
cljs$core$async$take_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__6766__auto____1;
return cljs$core$async$take_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___15988,out))
})();
var state__6823__auto__ = (function (){var statearr_15987 = f__6822__auto__.call(null);
(statearr_15987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___15988);

return statearr_15987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___15988,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t16008 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16008 = (function (ch,f,map_LT_,meta16009){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16009 = meta16009;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16008.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16008.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t16008.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16008.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t16011 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16011 = (function (fn1,_,meta16009,map_LT_,f,ch,meta16012){
this.fn1 = fn1;
this._ = _;
this.meta16009 = meta16009;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16012 = meta16012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16011.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t16011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16001_SHARP_){
return f1.call(null,(((p1__16001_SHARP_ == null))?null:self__.f.call(null,p1__16001_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t16011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16013){
var self__ = this;
var _16013__$1 = this;
return self__.meta16012;
});})(___$1))
;

cljs.core.async.t16011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16013,meta16012__$1){
var self__ = this;
var _16013__$1 = this;
return (new cljs.core.async.t16011(self__.fn1,self__._,self__.meta16009,self__.map_LT_,self__.f,self__.ch,meta16012__$1));
});})(___$1))
;

cljs.core.async.t16011.cljs$lang$type = true;

cljs.core.async.t16011.cljs$lang$ctorStr = "cljs.core.async/t16011";

cljs.core.async.t16011.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4895__auto__,writer__4896__auto__,opt__4897__auto__){
return cljs.core._write.call(null,writer__4896__auto__,"cljs.core.async/t16011");
});})(___$1))
;

cljs.core.async.__GT_t16011 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t16011(fn1__$1,___$2,meta16009__$1,map_LT___$1,f__$1,ch__$1,meta16012){
return (new cljs.core.async.t16011(fn1__$1,___$2,meta16009__$1,map_LT___$1,f__$1,ch__$1,meta16012));
});})(___$1))
;

}

return (new cljs.core.async.t16011(fn1,___$1,self__.meta16009,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4304__auto__ = ret;
if(cljs.core.truth_(and__4304__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4304__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t16008.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16008.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16008.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16010){
var self__ = this;
var _16010__$1 = this;
return self__.meta16009;
});

cljs.core.async.t16008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16010,meta16009__$1){
var self__ = this;
var _16010__$1 = this;
return (new cljs.core.async.t16008(self__.ch,self__.f,self__.map_LT_,meta16009__$1));
});

cljs.core.async.t16008.cljs$lang$type = true;

cljs.core.async.t16008.cljs$lang$ctorStr = "cljs.core.async/t16008";

cljs.core.async.t16008.cljs$lang$ctorPrWriter = (function (this__4895__auto__,writer__4896__auto__,opt__4897__auto__){
return cljs.core._write.call(null,writer__4896__auto__,"cljs.core.async/t16008");
});

cljs.core.async.__GT_t16008 = (function cljs$core$async$map_LT__$___GT_t16008(ch__$1,f__$1,map_LT___$1,meta16009){
return (new cljs.core.async.t16008(ch__$1,f__$1,map_LT___$1,meta16009));
});

}

return (new cljs.core.async.t16008(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t16017 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16017 = (function (ch,f,map_GT_,meta16018){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16018 = meta16018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16017.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16017.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t16017.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16017.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16017.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16017.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16019){
var self__ = this;
var _16019__$1 = this;
return self__.meta16018;
});

cljs.core.async.t16017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16019,meta16018__$1){
var self__ = this;
var _16019__$1 = this;
return (new cljs.core.async.t16017(self__.ch,self__.f,self__.map_GT_,meta16018__$1));
});

cljs.core.async.t16017.cljs$lang$type = true;

cljs.core.async.t16017.cljs$lang$ctorStr = "cljs.core.async/t16017";

cljs.core.async.t16017.cljs$lang$ctorPrWriter = (function (this__4895__auto__,writer__4896__auto__,opt__4897__auto__){
return cljs.core._write.call(null,writer__4896__auto__,"cljs.core.async/t16017");
});

cljs.core.async.__GT_t16017 = (function cljs$core$async$map_GT__$___GT_t16017(ch__$1,f__$1,map_GT___$1,meta16018){
return (new cljs.core.async.t16017(ch__$1,f__$1,map_GT___$1,meta16018));
});

}

return (new cljs.core.async.t16017(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t16023 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16023 = (function (ch,p,filter_GT_,meta16024){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16024 = meta16024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16023.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t16023.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16023.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16023.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16025){
var self__ = this;
var _16025__$1 = this;
return self__.meta16024;
});

cljs.core.async.t16023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16025,meta16024__$1){
var self__ = this;
var _16025__$1 = this;
return (new cljs.core.async.t16023(self__.ch,self__.p,self__.filter_GT_,meta16024__$1));
});

cljs.core.async.t16023.cljs$lang$type = true;

cljs.core.async.t16023.cljs$lang$ctorStr = "cljs.core.async/t16023";

cljs.core.async.t16023.cljs$lang$ctorPrWriter = (function (this__4895__auto__,writer__4896__auto__,opt__4897__auto__){
return cljs.core._write.call(null,writer__4896__auto__,"cljs.core.async/t16023");
});

cljs.core.async.__GT_t16023 = (function cljs$core$async$filter_GT__$___GT_t16023(ch__$1,p__$1,filter_GT___$1,meta16024){
return (new cljs.core.async.t16023(ch__$1,p__$1,filter_GT___$1,meta16024));
});

}

return (new cljs.core.async.t16023(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6821__auto___16108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___16108,out){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___16108,out){
return (function (state_16087){
var state_val_16088 = (state_16087[(1)]);
if((state_val_16088 === (7))){
var inst_16083 = (state_16087[(2)]);
var state_16087__$1 = state_16087;
var statearr_16089_16109 = state_16087__$1;
(statearr_16089_16109[(2)] = inst_16083);

(statearr_16089_16109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (1))){
var state_16087__$1 = state_16087;
var statearr_16090_16110 = state_16087__$1;
(statearr_16090_16110[(2)] = null);

(statearr_16090_16110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (4))){
var inst_16069 = (state_16087[(7)]);
var inst_16069__$1 = (state_16087[(2)]);
var inst_16070 = (inst_16069__$1 == null);
var state_16087__$1 = (function (){var statearr_16091 = state_16087;
(statearr_16091[(7)] = inst_16069__$1);

return statearr_16091;
})();
if(cljs.core.truth_(inst_16070)){
var statearr_16092_16111 = state_16087__$1;
(statearr_16092_16111[(1)] = (5));

} else {
var statearr_16093_16112 = state_16087__$1;
(statearr_16093_16112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (6))){
var inst_16069 = (state_16087[(7)]);
var inst_16074 = p.call(null,inst_16069);
var state_16087__$1 = state_16087;
if(cljs.core.truth_(inst_16074)){
var statearr_16094_16113 = state_16087__$1;
(statearr_16094_16113[(1)] = (8));

} else {
var statearr_16095_16114 = state_16087__$1;
(statearr_16095_16114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (3))){
var inst_16085 = (state_16087[(2)]);
var state_16087__$1 = state_16087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16087__$1,inst_16085);
} else {
if((state_val_16088 === (2))){
var state_16087__$1 = state_16087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16087__$1,(4),ch);
} else {
if((state_val_16088 === (11))){
var inst_16077 = (state_16087[(2)]);
var state_16087__$1 = state_16087;
var statearr_16096_16115 = state_16087__$1;
(statearr_16096_16115[(2)] = inst_16077);

(statearr_16096_16115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (9))){
var state_16087__$1 = state_16087;
var statearr_16097_16116 = state_16087__$1;
(statearr_16097_16116[(2)] = null);

(statearr_16097_16116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (5))){
var inst_16072 = cljs.core.async.close_BANG_.call(null,out);
var state_16087__$1 = state_16087;
var statearr_16098_16117 = state_16087__$1;
(statearr_16098_16117[(2)] = inst_16072);

(statearr_16098_16117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (10))){
var inst_16080 = (state_16087[(2)]);
var state_16087__$1 = (function (){var statearr_16099 = state_16087;
(statearr_16099[(8)] = inst_16080);

return statearr_16099;
})();
var statearr_16100_16118 = state_16087__$1;
(statearr_16100_16118[(2)] = null);

(statearr_16100_16118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16088 === (8))){
var inst_16069 = (state_16087[(7)]);
var state_16087__$1 = state_16087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16087__$1,(11),out,inst_16069);
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
});})(c__6821__auto___16108,out))
;
return ((function (switch__6765__auto__,c__6821__auto___16108,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__6766__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__6766__auto____0 = (function (){
var statearr_16104 = [null,null,null,null,null,null,null,null,null];
(statearr_16104[(0)] = cljs$core$async$filter_LT__$_state_machine__6766__auto__);

(statearr_16104[(1)] = (1));

return statearr_16104;
});
var cljs$core$async$filter_LT__$_state_machine__6766__auto____1 = (function (state_16087){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_16087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e16105){if((e16105 instanceof Object)){
var ex__6769__auto__ = e16105;
var statearr_16106_16119 = state_16087;
(statearr_16106_16119[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16120 = state_16087;
state_16087 = G__16120;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__6766__auto__ = function(state_16087){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__6766__auto____1.call(this,state_16087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__6766__auto____0;
cljs$core$async$filter_LT__$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__6766__auto____1;
return cljs$core$async$filter_LT__$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___16108,out))
})();
var state__6823__auto__ = (function (){var statearr_16107 = f__6822__auto__.call(null);
(statearr_16107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___16108);

return statearr_16107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___16108,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto__){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto__){
return (function (state_16286){
var state_val_16287 = (state_16286[(1)]);
if((state_val_16287 === (7))){
var inst_16282 = (state_16286[(2)]);
var state_16286__$1 = state_16286;
var statearr_16288_16329 = state_16286__$1;
(statearr_16288_16329[(2)] = inst_16282);

(statearr_16288_16329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (20))){
var inst_16252 = (state_16286[(7)]);
var inst_16263 = (state_16286[(2)]);
var inst_16264 = cljs.core.next.call(null,inst_16252);
var inst_16238 = inst_16264;
var inst_16239 = null;
var inst_16240 = (0);
var inst_16241 = (0);
var state_16286__$1 = (function (){var statearr_16289 = state_16286;
(statearr_16289[(8)] = inst_16240);

(statearr_16289[(9)] = inst_16239);

(statearr_16289[(10)] = inst_16263);

(statearr_16289[(11)] = inst_16238);

(statearr_16289[(12)] = inst_16241);

return statearr_16289;
})();
var statearr_16290_16330 = state_16286__$1;
(statearr_16290_16330[(2)] = null);

(statearr_16290_16330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (1))){
var state_16286__$1 = state_16286;
var statearr_16291_16331 = state_16286__$1;
(statearr_16291_16331[(2)] = null);

(statearr_16291_16331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (4))){
var inst_16227 = (state_16286[(13)]);
var inst_16227__$1 = (state_16286[(2)]);
var inst_16228 = (inst_16227__$1 == null);
var state_16286__$1 = (function (){var statearr_16292 = state_16286;
(statearr_16292[(13)] = inst_16227__$1);

return statearr_16292;
})();
if(cljs.core.truth_(inst_16228)){
var statearr_16293_16332 = state_16286__$1;
(statearr_16293_16332[(1)] = (5));

} else {
var statearr_16294_16333 = state_16286__$1;
(statearr_16294_16333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (15))){
var state_16286__$1 = state_16286;
var statearr_16298_16334 = state_16286__$1;
(statearr_16298_16334[(2)] = null);

(statearr_16298_16334[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (21))){
var state_16286__$1 = state_16286;
var statearr_16299_16335 = state_16286__$1;
(statearr_16299_16335[(2)] = null);

(statearr_16299_16335[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (13))){
var inst_16240 = (state_16286[(8)]);
var inst_16239 = (state_16286[(9)]);
var inst_16238 = (state_16286[(11)]);
var inst_16241 = (state_16286[(12)]);
var inst_16248 = (state_16286[(2)]);
var inst_16249 = (inst_16241 + (1));
var tmp16295 = inst_16240;
var tmp16296 = inst_16239;
var tmp16297 = inst_16238;
var inst_16238__$1 = tmp16297;
var inst_16239__$1 = tmp16296;
var inst_16240__$1 = tmp16295;
var inst_16241__$1 = inst_16249;
var state_16286__$1 = (function (){var statearr_16300 = state_16286;
(statearr_16300[(8)] = inst_16240__$1);

(statearr_16300[(9)] = inst_16239__$1);

(statearr_16300[(11)] = inst_16238__$1);

(statearr_16300[(14)] = inst_16248);

(statearr_16300[(12)] = inst_16241__$1);

return statearr_16300;
})();
var statearr_16301_16336 = state_16286__$1;
(statearr_16301_16336[(2)] = null);

(statearr_16301_16336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (22))){
var state_16286__$1 = state_16286;
var statearr_16302_16337 = state_16286__$1;
(statearr_16302_16337[(2)] = null);

(statearr_16302_16337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (6))){
var inst_16227 = (state_16286[(13)]);
var inst_16236 = f.call(null,inst_16227);
var inst_16237 = cljs.core.seq.call(null,inst_16236);
var inst_16238 = inst_16237;
var inst_16239 = null;
var inst_16240 = (0);
var inst_16241 = (0);
var state_16286__$1 = (function (){var statearr_16303 = state_16286;
(statearr_16303[(8)] = inst_16240);

(statearr_16303[(9)] = inst_16239);

(statearr_16303[(11)] = inst_16238);

(statearr_16303[(12)] = inst_16241);

return statearr_16303;
})();
var statearr_16304_16338 = state_16286__$1;
(statearr_16304_16338[(2)] = null);

(statearr_16304_16338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (17))){
var inst_16252 = (state_16286[(7)]);
var inst_16256 = cljs.core.chunk_first.call(null,inst_16252);
var inst_16257 = cljs.core.chunk_rest.call(null,inst_16252);
var inst_16258 = cljs.core.count.call(null,inst_16256);
var inst_16238 = inst_16257;
var inst_16239 = inst_16256;
var inst_16240 = inst_16258;
var inst_16241 = (0);
var state_16286__$1 = (function (){var statearr_16305 = state_16286;
(statearr_16305[(8)] = inst_16240);

(statearr_16305[(9)] = inst_16239);

(statearr_16305[(11)] = inst_16238);

(statearr_16305[(12)] = inst_16241);

return statearr_16305;
})();
var statearr_16306_16339 = state_16286__$1;
(statearr_16306_16339[(2)] = null);

(statearr_16306_16339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (3))){
var inst_16284 = (state_16286[(2)]);
var state_16286__$1 = state_16286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16286__$1,inst_16284);
} else {
if((state_val_16287 === (12))){
var inst_16272 = (state_16286[(2)]);
var state_16286__$1 = state_16286;
var statearr_16307_16340 = state_16286__$1;
(statearr_16307_16340[(2)] = inst_16272);

(statearr_16307_16340[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (2))){
var state_16286__$1 = state_16286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16286__$1,(4),in$);
} else {
if((state_val_16287 === (23))){
var inst_16280 = (state_16286[(2)]);
var state_16286__$1 = state_16286;
var statearr_16308_16341 = state_16286__$1;
(statearr_16308_16341[(2)] = inst_16280);

(statearr_16308_16341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (19))){
var inst_16267 = (state_16286[(2)]);
var state_16286__$1 = state_16286;
var statearr_16309_16342 = state_16286__$1;
(statearr_16309_16342[(2)] = inst_16267);

(statearr_16309_16342[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (11))){
var inst_16252 = (state_16286[(7)]);
var inst_16238 = (state_16286[(11)]);
var inst_16252__$1 = cljs.core.seq.call(null,inst_16238);
var state_16286__$1 = (function (){var statearr_16310 = state_16286;
(statearr_16310[(7)] = inst_16252__$1);

return statearr_16310;
})();
if(inst_16252__$1){
var statearr_16311_16343 = state_16286__$1;
(statearr_16311_16343[(1)] = (14));

} else {
var statearr_16312_16344 = state_16286__$1;
(statearr_16312_16344[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (9))){
var inst_16274 = (state_16286[(2)]);
var inst_16275 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16286__$1 = (function (){var statearr_16313 = state_16286;
(statearr_16313[(15)] = inst_16274);

return statearr_16313;
})();
if(cljs.core.truth_(inst_16275)){
var statearr_16314_16345 = state_16286__$1;
(statearr_16314_16345[(1)] = (21));

} else {
var statearr_16315_16346 = state_16286__$1;
(statearr_16315_16346[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (5))){
var inst_16230 = cljs.core.async.close_BANG_.call(null,out);
var state_16286__$1 = state_16286;
var statearr_16316_16347 = state_16286__$1;
(statearr_16316_16347[(2)] = inst_16230);

(statearr_16316_16347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (14))){
var inst_16252 = (state_16286[(7)]);
var inst_16254 = cljs.core.chunked_seq_QMARK_.call(null,inst_16252);
var state_16286__$1 = state_16286;
if(inst_16254){
var statearr_16317_16348 = state_16286__$1;
(statearr_16317_16348[(1)] = (17));

} else {
var statearr_16318_16349 = state_16286__$1;
(statearr_16318_16349[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (16))){
var inst_16270 = (state_16286[(2)]);
var state_16286__$1 = state_16286;
var statearr_16319_16350 = state_16286__$1;
(statearr_16319_16350[(2)] = inst_16270);

(statearr_16319_16350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16287 === (10))){
var inst_16239 = (state_16286[(9)]);
var inst_16241 = (state_16286[(12)]);
var inst_16246 = cljs.core._nth.call(null,inst_16239,inst_16241);
var state_16286__$1 = state_16286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16286__$1,(13),out,inst_16246);
} else {
if((state_val_16287 === (18))){
var inst_16252 = (state_16286[(7)]);
var inst_16261 = cljs.core.first.call(null,inst_16252);
var state_16286__$1 = state_16286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16286__$1,(20),out,inst_16261);
} else {
if((state_val_16287 === (8))){
var inst_16240 = (state_16286[(8)]);
var inst_16241 = (state_16286[(12)]);
var inst_16243 = (inst_16241 < inst_16240);
var inst_16244 = inst_16243;
var state_16286__$1 = state_16286;
if(cljs.core.truth_(inst_16244)){
var statearr_16320_16351 = state_16286__$1;
(statearr_16320_16351[(1)] = (10));

} else {
var statearr_16321_16352 = state_16286__$1;
(statearr_16321_16352[(1)] = (11));

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
});})(c__6821__auto__))
;
return ((function (switch__6765__auto__,c__6821__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6766__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6766__auto____0 = (function (){
var statearr_16325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16325[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6766__auto__);

(statearr_16325[(1)] = (1));

return statearr_16325;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6766__auto____1 = (function (state_16286){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_16286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e16326){if((e16326 instanceof Object)){
var ex__6769__auto__ = e16326;
var statearr_16327_16353 = state_16286;
(statearr_16327_16353[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16354 = state_16286;
state_16286 = G__16354;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6766__auto__ = function(state_16286){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6766__auto____1.call(this,state_16286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6766__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6766__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto__))
})();
var state__6823__auto__ = (function (){var statearr_16328 = f__6822__auto__.call(null);
(statearr_16328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto__);

return statearr_16328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto__))
);

return c__6821__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6821__auto___16451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___16451,out){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___16451,out){
return (function (state_16426){
var state_val_16427 = (state_16426[(1)]);
if((state_val_16427 === (7))){
var inst_16421 = (state_16426[(2)]);
var state_16426__$1 = state_16426;
var statearr_16428_16452 = state_16426__$1;
(statearr_16428_16452[(2)] = inst_16421);

(statearr_16428_16452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (1))){
var inst_16403 = null;
var state_16426__$1 = (function (){var statearr_16429 = state_16426;
(statearr_16429[(7)] = inst_16403);

return statearr_16429;
})();
var statearr_16430_16453 = state_16426__$1;
(statearr_16430_16453[(2)] = null);

(statearr_16430_16453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (4))){
var inst_16406 = (state_16426[(8)]);
var inst_16406__$1 = (state_16426[(2)]);
var inst_16407 = (inst_16406__$1 == null);
var inst_16408 = cljs.core.not.call(null,inst_16407);
var state_16426__$1 = (function (){var statearr_16431 = state_16426;
(statearr_16431[(8)] = inst_16406__$1);

return statearr_16431;
})();
if(inst_16408){
var statearr_16432_16454 = state_16426__$1;
(statearr_16432_16454[(1)] = (5));

} else {
var statearr_16433_16455 = state_16426__$1;
(statearr_16433_16455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (6))){
var state_16426__$1 = state_16426;
var statearr_16434_16456 = state_16426__$1;
(statearr_16434_16456[(2)] = null);

(statearr_16434_16456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (3))){
var inst_16423 = (state_16426[(2)]);
var inst_16424 = cljs.core.async.close_BANG_.call(null,out);
var state_16426__$1 = (function (){var statearr_16435 = state_16426;
(statearr_16435[(9)] = inst_16423);

return statearr_16435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16426__$1,inst_16424);
} else {
if((state_val_16427 === (2))){
var state_16426__$1 = state_16426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16426__$1,(4),ch);
} else {
if((state_val_16427 === (11))){
var inst_16406 = (state_16426[(8)]);
var inst_16415 = (state_16426[(2)]);
var inst_16403 = inst_16406;
var state_16426__$1 = (function (){var statearr_16436 = state_16426;
(statearr_16436[(10)] = inst_16415);

(statearr_16436[(7)] = inst_16403);

return statearr_16436;
})();
var statearr_16437_16457 = state_16426__$1;
(statearr_16437_16457[(2)] = null);

(statearr_16437_16457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (9))){
var inst_16406 = (state_16426[(8)]);
var state_16426__$1 = state_16426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16426__$1,(11),out,inst_16406);
} else {
if((state_val_16427 === (5))){
var inst_16406 = (state_16426[(8)]);
var inst_16403 = (state_16426[(7)]);
var inst_16410 = cljs.core._EQ_.call(null,inst_16406,inst_16403);
var state_16426__$1 = state_16426;
if(inst_16410){
var statearr_16439_16458 = state_16426__$1;
(statearr_16439_16458[(1)] = (8));

} else {
var statearr_16440_16459 = state_16426__$1;
(statearr_16440_16459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (10))){
var inst_16418 = (state_16426[(2)]);
var state_16426__$1 = state_16426;
var statearr_16441_16460 = state_16426__$1;
(statearr_16441_16460[(2)] = inst_16418);

(statearr_16441_16460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (8))){
var inst_16403 = (state_16426[(7)]);
var tmp16438 = inst_16403;
var inst_16403__$1 = tmp16438;
var state_16426__$1 = (function (){var statearr_16442 = state_16426;
(statearr_16442[(7)] = inst_16403__$1);

return statearr_16442;
})();
var statearr_16443_16461 = state_16426__$1;
(statearr_16443_16461[(2)] = null);

(statearr_16443_16461[(1)] = (2));


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
});})(c__6821__auto___16451,out))
;
return ((function (switch__6765__auto__,c__6821__auto___16451,out){
return (function() {
var cljs$core$async$unique_$_state_machine__6766__auto__ = null;
var cljs$core$async$unique_$_state_machine__6766__auto____0 = (function (){
var statearr_16447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16447[(0)] = cljs$core$async$unique_$_state_machine__6766__auto__);

(statearr_16447[(1)] = (1));

return statearr_16447;
});
var cljs$core$async$unique_$_state_machine__6766__auto____1 = (function (state_16426){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_16426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e16448){if((e16448 instanceof Object)){
var ex__6769__auto__ = e16448;
var statearr_16449_16462 = state_16426;
(statearr_16449_16462[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16463 = state_16426;
state_16426 = G__16463;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__6766__auto__ = function(state_16426){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__6766__auto____1.call(this,state_16426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__6766__auto____0;
cljs$core$async$unique_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__6766__auto____1;
return cljs$core$async$unique_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___16451,out))
})();
var state__6823__auto__ = (function (){var statearr_16450 = f__6822__auto__.call(null);
(statearr_16450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___16451);

return statearr_16450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___16451,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6821__auto___16598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___16598,out){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___16598,out){
return (function (state_16568){
var state_val_16569 = (state_16568[(1)]);
if((state_val_16569 === (7))){
var inst_16564 = (state_16568[(2)]);
var state_16568__$1 = state_16568;
var statearr_16570_16599 = state_16568__$1;
(statearr_16570_16599[(2)] = inst_16564);

(statearr_16570_16599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (1))){
var inst_16531 = (new Array(n));
var inst_16532 = inst_16531;
var inst_16533 = (0);
var state_16568__$1 = (function (){var statearr_16571 = state_16568;
(statearr_16571[(7)] = inst_16533);

(statearr_16571[(8)] = inst_16532);

return statearr_16571;
})();
var statearr_16572_16600 = state_16568__$1;
(statearr_16572_16600[(2)] = null);

(statearr_16572_16600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (4))){
var inst_16536 = (state_16568[(9)]);
var inst_16536__$1 = (state_16568[(2)]);
var inst_16537 = (inst_16536__$1 == null);
var inst_16538 = cljs.core.not.call(null,inst_16537);
var state_16568__$1 = (function (){var statearr_16573 = state_16568;
(statearr_16573[(9)] = inst_16536__$1);

return statearr_16573;
})();
if(inst_16538){
var statearr_16574_16601 = state_16568__$1;
(statearr_16574_16601[(1)] = (5));

} else {
var statearr_16575_16602 = state_16568__$1;
(statearr_16575_16602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (15))){
var inst_16558 = (state_16568[(2)]);
var state_16568__$1 = state_16568;
var statearr_16576_16603 = state_16568__$1;
(statearr_16576_16603[(2)] = inst_16558);

(statearr_16576_16603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (13))){
var state_16568__$1 = state_16568;
var statearr_16577_16604 = state_16568__$1;
(statearr_16577_16604[(2)] = null);

(statearr_16577_16604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (6))){
var inst_16533 = (state_16568[(7)]);
var inst_16554 = (inst_16533 > (0));
var state_16568__$1 = state_16568;
if(cljs.core.truth_(inst_16554)){
var statearr_16578_16605 = state_16568__$1;
(statearr_16578_16605[(1)] = (12));

} else {
var statearr_16579_16606 = state_16568__$1;
(statearr_16579_16606[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (3))){
var inst_16566 = (state_16568[(2)]);
var state_16568__$1 = state_16568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16568__$1,inst_16566);
} else {
if((state_val_16569 === (12))){
var inst_16532 = (state_16568[(8)]);
var inst_16556 = cljs.core.vec.call(null,inst_16532);
var state_16568__$1 = state_16568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16568__$1,(15),out,inst_16556);
} else {
if((state_val_16569 === (2))){
var state_16568__$1 = state_16568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16568__$1,(4),ch);
} else {
if((state_val_16569 === (11))){
var inst_16548 = (state_16568[(2)]);
var inst_16549 = (new Array(n));
var inst_16532 = inst_16549;
var inst_16533 = (0);
var state_16568__$1 = (function (){var statearr_16580 = state_16568;
(statearr_16580[(10)] = inst_16548);

(statearr_16580[(7)] = inst_16533);

(statearr_16580[(8)] = inst_16532);

return statearr_16580;
})();
var statearr_16581_16607 = state_16568__$1;
(statearr_16581_16607[(2)] = null);

(statearr_16581_16607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (9))){
var inst_16532 = (state_16568[(8)]);
var inst_16546 = cljs.core.vec.call(null,inst_16532);
var state_16568__$1 = state_16568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16568__$1,(11),out,inst_16546);
} else {
if((state_val_16569 === (5))){
var inst_16533 = (state_16568[(7)]);
var inst_16532 = (state_16568[(8)]);
var inst_16541 = (state_16568[(11)]);
var inst_16536 = (state_16568[(9)]);
var inst_16540 = (inst_16532[inst_16533] = inst_16536);
var inst_16541__$1 = (inst_16533 + (1));
var inst_16542 = (inst_16541__$1 < n);
var state_16568__$1 = (function (){var statearr_16582 = state_16568;
(statearr_16582[(11)] = inst_16541__$1);

(statearr_16582[(12)] = inst_16540);

return statearr_16582;
})();
if(cljs.core.truth_(inst_16542)){
var statearr_16583_16608 = state_16568__$1;
(statearr_16583_16608[(1)] = (8));

} else {
var statearr_16584_16609 = state_16568__$1;
(statearr_16584_16609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (14))){
var inst_16561 = (state_16568[(2)]);
var inst_16562 = cljs.core.async.close_BANG_.call(null,out);
var state_16568__$1 = (function (){var statearr_16586 = state_16568;
(statearr_16586[(13)] = inst_16561);

return statearr_16586;
})();
var statearr_16587_16610 = state_16568__$1;
(statearr_16587_16610[(2)] = inst_16562);

(statearr_16587_16610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (10))){
var inst_16552 = (state_16568[(2)]);
var state_16568__$1 = state_16568;
var statearr_16588_16611 = state_16568__$1;
(statearr_16588_16611[(2)] = inst_16552);

(statearr_16588_16611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (8))){
var inst_16532 = (state_16568[(8)]);
var inst_16541 = (state_16568[(11)]);
var tmp16585 = inst_16532;
var inst_16532__$1 = tmp16585;
var inst_16533 = inst_16541;
var state_16568__$1 = (function (){var statearr_16589 = state_16568;
(statearr_16589[(7)] = inst_16533);

(statearr_16589[(8)] = inst_16532__$1);

return statearr_16589;
})();
var statearr_16590_16612 = state_16568__$1;
(statearr_16590_16612[(2)] = null);

(statearr_16590_16612[(1)] = (2));


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
});})(c__6821__auto___16598,out))
;
return ((function (switch__6765__auto__,c__6821__auto___16598,out){
return (function() {
var cljs$core$async$partition_$_state_machine__6766__auto__ = null;
var cljs$core$async$partition_$_state_machine__6766__auto____0 = (function (){
var statearr_16594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16594[(0)] = cljs$core$async$partition_$_state_machine__6766__auto__);

(statearr_16594[(1)] = (1));

return statearr_16594;
});
var cljs$core$async$partition_$_state_machine__6766__auto____1 = (function (state_16568){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_16568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e16595){if((e16595 instanceof Object)){
var ex__6769__auto__ = e16595;
var statearr_16596_16613 = state_16568;
(statearr_16596_16613[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16614 = state_16568;
state_16568 = G__16614;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__6766__auto__ = function(state_16568){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__6766__auto____1.call(this,state_16568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__6766__auto____0;
cljs$core$async$partition_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__6766__auto____1;
return cljs$core$async$partition_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___16598,out))
})();
var state__6823__auto__ = (function (){var statearr_16597 = f__6822__auto__.call(null);
(statearr_16597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___16598);

return statearr_16597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___16598,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6821__auto___16757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___16757,out){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___16757,out){
return (function (state_16727){
var state_val_16728 = (state_16727[(1)]);
if((state_val_16728 === (7))){
var inst_16723 = (state_16727[(2)]);
var state_16727__$1 = state_16727;
var statearr_16729_16758 = state_16727__$1;
(statearr_16729_16758[(2)] = inst_16723);

(statearr_16729_16758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16728 === (1))){
var inst_16686 = [];
var inst_16687 = inst_16686;
var inst_16688 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16727__$1 = (function (){var statearr_16730 = state_16727;
(statearr_16730[(7)] = inst_16688);

(statearr_16730[(8)] = inst_16687);

return statearr_16730;
})();
var statearr_16731_16759 = state_16727__$1;
(statearr_16731_16759[(2)] = null);

(statearr_16731_16759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16728 === (4))){
var inst_16691 = (state_16727[(9)]);
var inst_16691__$1 = (state_16727[(2)]);
var inst_16692 = (inst_16691__$1 == null);
var inst_16693 = cljs.core.not.call(null,inst_16692);
var state_16727__$1 = (function (){var statearr_16732 = state_16727;
(statearr_16732[(9)] = inst_16691__$1);

return statearr_16732;
})();
if(inst_16693){
var statearr_16733_16760 = state_16727__$1;
(statearr_16733_16760[(1)] = (5));

} else {
var statearr_16734_16761 = state_16727__$1;
(statearr_16734_16761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16728 === (15))){
var inst_16717 = (state_16727[(2)]);
var state_16727__$1 = state_16727;
var statearr_16735_16762 = state_16727__$1;
(statearr_16735_16762[(2)] = inst_16717);

(statearr_16735_16762[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16728 === (13))){
var state_16727__$1 = state_16727;
var statearr_16736_16763 = state_16727__$1;
(statearr_16736_16763[(2)] = null);

(statearr_16736_16763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16728 === (6))){
var inst_16687 = (state_16727[(8)]);
var inst_16712 = inst_16687.length;
var inst_16713 = (inst_16712 > (0));
var state_16727__$1 = state_16727;
if(cljs.core.truth_(inst_16713)){
var statearr_16737_16764 = state_16727__$1;
(statearr_16737_16764[(1)] = (12));

} else {
var statearr_16738_16765 = state_16727__$1;
(statearr_16738_16765[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16728 === (3))){
var inst_16725 = (state_16727[(2)]);
var state_16727__$1 = state_16727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16727__$1,inst_16725);
} else {
if((state_val_16728 === (12))){
var inst_16687 = (state_16727[(8)]);
var inst_16715 = cljs.core.vec.call(null,inst_16687);
var state_16727__$1 = state_16727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16727__$1,(15),out,inst_16715);
} else {
if((state_val_16728 === (2))){
var state_16727__$1 = state_16727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16727__$1,(4),ch);
} else {
if((state_val_16728 === (11))){
var inst_16691 = (state_16727[(9)]);
var inst_16695 = (state_16727[(10)]);
var inst_16705 = (state_16727[(2)]);
var inst_16706 = [];
var inst_16707 = inst_16706.push(inst_16691);
var inst_16687 = inst_16706;
var inst_16688 = inst_16695;
var state_16727__$1 = (function (){var statearr_16739 = state_16727;
(statearr_16739[(7)] = inst_16688);

(statearr_16739[(8)] = inst_16687);

(statearr_16739[(11)] = inst_16705);

(statearr_16739[(12)] = inst_16707);

return statearr_16739;
})();
var statearr_16740_16766 = state_16727__$1;
(statearr_16740_16766[(2)] = null);

(statearr_16740_16766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16728 === (9))){
var inst_16687 = (state_16727[(8)]);
var inst_16703 = cljs.core.vec.call(null,inst_16687);
var state_16727__$1 = state_16727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16727__$1,(11),out,inst_16703);
} else {
if((state_val_16728 === (5))){
var inst_16688 = (state_16727[(7)]);
var inst_16691 = (state_16727[(9)]);
var inst_16695 = (state_16727[(10)]);
var inst_16695__$1 = f.call(null,inst_16691);
var inst_16696 = cljs.core._EQ_.call(null,inst_16695__$1,inst_16688);
var inst_16697 = cljs.core.keyword_identical_QMARK_.call(null,inst_16688,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16698 = (inst_16696) || (inst_16697);
var state_16727__$1 = (function (){var statearr_16741 = state_16727;
(statearr_16741[(10)] = inst_16695__$1);

return statearr_16741;
})();
if(cljs.core.truth_(inst_16698)){
var statearr_16742_16767 = state_16727__$1;
(statearr_16742_16767[(1)] = (8));

} else {
var statearr_16743_16768 = state_16727__$1;
(statearr_16743_16768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16728 === (14))){
var inst_16720 = (state_16727[(2)]);
var inst_16721 = cljs.core.async.close_BANG_.call(null,out);
var state_16727__$1 = (function (){var statearr_16745 = state_16727;
(statearr_16745[(13)] = inst_16720);

return statearr_16745;
})();
var statearr_16746_16769 = state_16727__$1;
(statearr_16746_16769[(2)] = inst_16721);

(statearr_16746_16769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16728 === (10))){
var inst_16710 = (state_16727[(2)]);
var state_16727__$1 = state_16727;
var statearr_16747_16770 = state_16727__$1;
(statearr_16747_16770[(2)] = inst_16710);

(statearr_16747_16770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16728 === (8))){
var inst_16687 = (state_16727[(8)]);
var inst_16691 = (state_16727[(9)]);
var inst_16695 = (state_16727[(10)]);
var inst_16700 = inst_16687.push(inst_16691);
var tmp16744 = inst_16687;
var inst_16687__$1 = tmp16744;
var inst_16688 = inst_16695;
var state_16727__$1 = (function (){var statearr_16748 = state_16727;
(statearr_16748[(7)] = inst_16688);

(statearr_16748[(8)] = inst_16687__$1);

(statearr_16748[(14)] = inst_16700);

return statearr_16748;
})();
var statearr_16749_16771 = state_16727__$1;
(statearr_16749_16771[(2)] = null);

(statearr_16749_16771[(1)] = (2));


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
});})(c__6821__auto___16757,out))
;
return ((function (switch__6765__auto__,c__6821__auto___16757,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__6766__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__6766__auto____0 = (function (){
var statearr_16753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16753[(0)] = cljs$core$async$partition_by_$_state_machine__6766__auto__);

(statearr_16753[(1)] = (1));

return statearr_16753;
});
var cljs$core$async$partition_by_$_state_machine__6766__auto____1 = (function (state_16727){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_16727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e16754){if((e16754 instanceof Object)){
var ex__6769__auto__ = e16754;
var statearr_16755_16772 = state_16727;
(statearr_16755_16772[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16773 = state_16727;
state_16727 = G__16773;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__6766__auto__ = function(state_16727){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__6766__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__6766__auto____1.call(this,state_16727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__6766__auto____0;
cljs$core$async$partition_by_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__6766__auto____1;
return cljs$core$async$partition_by_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___16757,out))
})();
var state__6823__auto__ = (function (){var statearr_16756 = f__6822__auto__.call(null);
(statearr_16756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___16757);

return statearr_16756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___16757,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1433160872050