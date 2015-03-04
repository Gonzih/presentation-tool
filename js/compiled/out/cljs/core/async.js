// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t19295 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19295 = (function (f,fn_handler,meta19296){
this.f = f;
this.fn_handler = fn_handler;
this.meta19296 = meta19296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19295.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19295.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19295.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19297){
var self__ = this;
var _19297__$1 = this;
return self__.meta19296;
});

cljs.core.async.t19295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19297,meta19296__$1){
var self__ = this;
var _19297__$1 = this;
return (new cljs.core.async.t19295(self__.f,self__.fn_handler,meta19296__$1));
});

cljs.core.async.t19295.cljs$lang$type = true;

cljs.core.async.t19295.cljs$lang$ctorStr = "cljs.core.async/t19295";

cljs.core.async.t19295.cljs$lang$ctorPrWriter = (function (this__4588__auto__,writer__4589__auto__,opt__4590__auto__){
return cljs.core._write.call(null,writer__4589__auto__,"cljs.core.async/t19295");
});

cljs.core.async.__GT_t19295 = (function __GT_t19295(f__$1,fn_handler__$1,meta19296){
return (new cljs.core.async.t19295(f__$1,fn_handler__$1,meta19296));
});

}

return (new cljs.core.async.t19295(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/gnzh/mydev/presentation-tool/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__19299 = buff;
if(G__19299){
var bit__4682__auto__ = null;
if(cljs.core.truth_((function (){var or__4001__auto__ = bit__4682__auto__;
if(cljs.core.truth_(or__4001__auto__)){
return or__4001__auto__;
} else {
return G__19299.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19299.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19299);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19299);
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
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
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
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19300 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19300);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19300,ret){
return (function (){
return fn1.call(null,val_19300);
});})(val_19300,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
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
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4888__auto___19301 = n;
var x_19302 = (0);
while(true){
if((x_19302 < n__4888__auto___19301)){
(a[x_19302] = (0));

var G__19303 = (x_19302 + (1));
x_19302 = G__19303;
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

var G__19304 = (i + (1));
i = G__19304;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t19308 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19308 = (function (flag,alt_flag,meta19309){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19309 = meta19309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19308.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19308.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t19308.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t19308.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19310){
var self__ = this;
var _19310__$1 = this;
return self__.meta19309;
});})(flag))
;

cljs.core.async.t19308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19310,meta19309__$1){
var self__ = this;
var _19310__$1 = this;
return (new cljs.core.async.t19308(self__.flag,self__.alt_flag,meta19309__$1));
});})(flag))
;

cljs.core.async.t19308.cljs$lang$type = true;

cljs.core.async.t19308.cljs$lang$ctorStr = "cljs.core.async/t19308";

cljs.core.async.t19308.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4588__auto__,writer__4589__auto__,opt__4590__auto__){
return cljs.core._write.call(null,writer__4589__auto__,"cljs.core.async/t19308");
});})(flag))
;

cljs.core.async.__GT_t19308 = ((function (flag){
return (function __GT_t19308(flag__$1,alt_flag__$1,meta19309){
return (new cljs.core.async.t19308(flag__$1,alt_flag__$1,meta19309));
});})(flag))
;

}

return (new cljs.core.async.t19308(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/gnzh/mydev/presentation-tool/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t19314 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19314 = (function (cb,flag,alt_handler,meta19315){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19315 = meta19315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19314.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19314.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t19314.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t19314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19316){
var self__ = this;
var _19316__$1 = this;
return self__.meta19315;
});

cljs.core.async.t19314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19316,meta19315__$1){
var self__ = this;
var _19316__$1 = this;
return (new cljs.core.async.t19314(self__.cb,self__.flag,self__.alt_handler,meta19315__$1));
});

cljs.core.async.t19314.cljs$lang$type = true;

cljs.core.async.t19314.cljs$lang$ctorStr = "cljs.core.async/t19314";

cljs.core.async.t19314.cljs$lang$ctorPrWriter = (function (this__4588__auto__,writer__4589__auto__,opt__4590__auto__){
return cljs.core._write.call(null,writer__4589__auto__,"cljs.core.async/t19314");
});

cljs.core.async.__GT_t19314 = (function __GT_t19314(cb__$1,flag__$1,alt_handler__$1,meta19315){
return (new cljs.core.async.t19314(cb__$1,flag__$1,alt_handler__$1,meta19315));
});

}

return (new cljs.core.async.t19314(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/gnzh/mydev/presentation-tool/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
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
return (function (p1__19317_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19317_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19318_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19318_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4001__auto__ = wport;
if(cljs.core.truth_(or__4001__auto__)){
return or__4001__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19319 = (i + (1));
i = G__19319;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4001__auto__ = ret;
if(cljs.core.truth_(or__4001__auto__)){
return or__4001__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3989__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3989__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3989__auto__;
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
var alts_BANG___delegate = function (ports,p__19320){
var map__19322 = p__19320;
var map__19322__$1 = ((cljs.core.seq_QMARK_.call(null,map__19322))?cljs.core.apply.call(null,cljs.core.hash_map,map__19322):map__19322);
var opts = map__19322__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__19320 = null;
if (arguments.length > 1) {
var G__19323__i = 0, G__19323__a = new Array(arguments.length -  1);
while (G__19323__i < G__19323__a.length) {G__19323__a[G__19323__i] = arguments[G__19323__i + 1]; ++G__19323__i;}
  p__19320 = new cljs.core.IndexedSeq(G__19323__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__19320);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19324){
var ports = cljs.core.first(arglist__19324);
var p__19320 = cljs.core.rest(arglist__19324);
return alts_BANG___delegate(ports,p__19320);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6999__auto___19419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___19419){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___19419){
return (function (state_19395){
var state_val_19396 = (state_19395[(1)]);
if((state_val_19396 === (7))){
var inst_19391 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
var statearr_19397_19420 = state_19395__$1;
(statearr_19397_19420[(2)] = inst_19391);

(statearr_19397_19420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (1))){
var state_19395__$1 = state_19395;
var statearr_19398_19421 = state_19395__$1;
(statearr_19398_19421[(2)] = null);

(statearr_19398_19421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (4))){
var inst_19374 = (state_19395[(7)]);
var inst_19374__$1 = (state_19395[(2)]);
var inst_19375 = (inst_19374__$1 == null);
var state_19395__$1 = (function (){var statearr_19399 = state_19395;
(statearr_19399[(7)] = inst_19374__$1);

return statearr_19399;
})();
if(cljs.core.truth_(inst_19375)){
var statearr_19400_19422 = state_19395__$1;
(statearr_19400_19422[(1)] = (5));

} else {
var statearr_19401_19423 = state_19395__$1;
(statearr_19401_19423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (13))){
var state_19395__$1 = state_19395;
var statearr_19402_19424 = state_19395__$1;
(statearr_19402_19424[(2)] = null);

(statearr_19402_19424[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (6))){
var inst_19374 = (state_19395[(7)]);
var state_19395__$1 = state_19395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19395__$1,(11),to,inst_19374);
} else {
if((state_val_19396 === (3))){
var inst_19393 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19395__$1,inst_19393);
} else {
if((state_val_19396 === (12))){
var state_19395__$1 = state_19395;
var statearr_19403_19425 = state_19395__$1;
(statearr_19403_19425[(2)] = null);

(statearr_19403_19425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (2))){
var state_19395__$1 = state_19395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19395__$1,(4),from);
} else {
if((state_val_19396 === (11))){
var inst_19384 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
if(cljs.core.truth_(inst_19384)){
var statearr_19404_19426 = state_19395__$1;
(statearr_19404_19426[(1)] = (12));

} else {
var statearr_19405_19427 = state_19395__$1;
(statearr_19405_19427[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (9))){
var state_19395__$1 = state_19395;
var statearr_19406_19428 = state_19395__$1;
(statearr_19406_19428[(2)] = null);

(statearr_19406_19428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (5))){
var state_19395__$1 = state_19395;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19407_19429 = state_19395__$1;
(statearr_19407_19429[(1)] = (8));

} else {
var statearr_19408_19430 = state_19395__$1;
(statearr_19408_19430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (14))){
var inst_19389 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
var statearr_19409_19431 = state_19395__$1;
(statearr_19409_19431[(2)] = inst_19389);

(statearr_19409_19431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (10))){
var inst_19381 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
var statearr_19410_19432 = state_19395__$1;
(statearr_19410_19432[(2)] = inst_19381);

(statearr_19410_19432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (8))){
var inst_19378 = cljs.core.async.close_BANG_.call(null,to);
var state_19395__$1 = state_19395;
var statearr_19411_19433 = state_19395__$1;
(statearr_19411_19433[(2)] = inst_19378);

(statearr_19411_19433[(1)] = (10));


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
});})(c__6999__auto___19419))
;
return ((function (switch__6943__auto__,c__6999__auto___19419){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_19415 = [null,null,null,null,null,null,null,null];
(statearr_19415[(0)] = state_machine__6944__auto__);

(statearr_19415[(1)] = (1));

return statearr_19415;
});
var state_machine__6944__auto____1 = (function (state_19395){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_19395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e19416){if((e19416 instanceof Object)){
var ex__6947__auto__ = e19416;
var statearr_19417_19434 = state_19395;
(statearr_19417_19434[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19435 = state_19395;
state_19395 = G__19435;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_19395){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_19395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___19419))
})();
var state__7001__auto__ = (function (){var statearr_19418 = f__7000__auto__.call(null);
(statearr_19418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___19419);

return statearr_19418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___19419))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19619){
var vec__19620 = p__19619;
var v = cljs.core.nth.call(null,vec__19620,(0),null);
var p = cljs.core.nth.call(null,vec__19620,(1),null);
var job = vec__19620;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6999__auto___19802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___19802,res,vec__19620,v,p,job,jobs,results){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___19802,res,vec__19620,v,p,job,jobs,results){
return (function (state_19625){
var state_val_19626 = (state_19625[(1)]);
if((state_val_19626 === (2))){
var inst_19622 = (state_19625[(2)]);
var inst_19623 = cljs.core.async.close_BANG_.call(null,res);
var state_19625__$1 = (function (){var statearr_19627 = state_19625;
(statearr_19627[(7)] = inst_19622);

return statearr_19627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19625__$1,inst_19623);
} else {
if((state_val_19626 === (1))){
var state_19625__$1 = state_19625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19625__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6999__auto___19802,res,vec__19620,v,p,job,jobs,results))
;
return ((function (switch__6943__auto__,c__6999__auto___19802,res,vec__19620,v,p,job,jobs,results){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_19631 = [null,null,null,null,null,null,null,null];
(statearr_19631[(0)] = state_machine__6944__auto__);

(statearr_19631[(1)] = (1));

return statearr_19631;
});
var state_machine__6944__auto____1 = (function (state_19625){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_19625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e19632){if((e19632 instanceof Object)){
var ex__6947__auto__ = e19632;
var statearr_19633_19803 = state_19625;
(statearr_19633_19803[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19804 = state_19625;
state_19625 = G__19804;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_19625){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_19625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___19802,res,vec__19620,v,p,job,jobs,results))
})();
var state__7001__auto__ = (function (){var statearr_19634 = f__7000__auto__.call(null);
(statearr_19634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___19802);

return statearr_19634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___19802,res,vec__19620,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19635){
var vec__19636 = p__19635;
var v = cljs.core.nth.call(null,vec__19636,(0),null);
var p = cljs.core.nth.call(null,vec__19636,(1),null);
var job = vec__19636;
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
var n__4888__auto___19805 = n;
var __19806 = (0);
while(true){
if((__19806 < n__4888__auto___19805)){
var G__19637_19807 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19637_19807) {
case "async":
var c__6999__auto___19809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19806,c__6999__auto___19809,G__19637_19807,n__4888__auto___19805,jobs,results,process,async){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (__19806,c__6999__auto___19809,G__19637_19807,n__4888__auto___19805,jobs,results,process,async){
return (function (state_19650){
var state_val_19651 = (state_19650[(1)]);
if((state_val_19651 === (7))){
var inst_19646 = (state_19650[(2)]);
var state_19650__$1 = state_19650;
var statearr_19652_19810 = state_19650__$1;
(statearr_19652_19810[(2)] = inst_19646);

(statearr_19652_19810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (6))){
var state_19650__$1 = state_19650;
var statearr_19653_19811 = state_19650__$1;
(statearr_19653_19811[(2)] = null);

(statearr_19653_19811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (5))){
var state_19650__$1 = state_19650;
var statearr_19654_19812 = state_19650__$1;
(statearr_19654_19812[(2)] = null);

(statearr_19654_19812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (4))){
var inst_19640 = (state_19650[(2)]);
var inst_19641 = async.call(null,inst_19640);
var state_19650__$1 = state_19650;
if(cljs.core.truth_(inst_19641)){
var statearr_19655_19813 = state_19650__$1;
(statearr_19655_19813[(1)] = (5));

} else {
var statearr_19656_19814 = state_19650__$1;
(statearr_19656_19814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19651 === (3))){
var inst_19648 = (state_19650[(2)]);
var state_19650__$1 = state_19650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19650__$1,inst_19648);
} else {
if((state_val_19651 === (2))){
var state_19650__$1 = state_19650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19650__$1,(4),jobs);
} else {
if((state_val_19651 === (1))){
var state_19650__$1 = state_19650;
var statearr_19657_19815 = state_19650__$1;
(statearr_19657_19815[(2)] = null);

(statearr_19657_19815[(1)] = (2));


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
});})(__19806,c__6999__auto___19809,G__19637_19807,n__4888__auto___19805,jobs,results,process,async))
;
return ((function (__19806,switch__6943__auto__,c__6999__auto___19809,G__19637_19807,n__4888__auto___19805,jobs,results,process,async){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_19661 = [null,null,null,null,null,null,null];
(statearr_19661[(0)] = state_machine__6944__auto__);

(statearr_19661[(1)] = (1));

return statearr_19661;
});
var state_machine__6944__auto____1 = (function (state_19650){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_19650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e19662){if((e19662 instanceof Object)){
var ex__6947__auto__ = e19662;
var statearr_19663_19816 = state_19650;
(statearr_19663_19816[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19817 = state_19650;
state_19650 = G__19817;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_19650){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_19650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(__19806,switch__6943__auto__,c__6999__auto___19809,G__19637_19807,n__4888__auto___19805,jobs,results,process,async))
})();
var state__7001__auto__ = (function (){var statearr_19664 = f__7000__auto__.call(null);
(statearr_19664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___19809);

return statearr_19664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(__19806,c__6999__auto___19809,G__19637_19807,n__4888__auto___19805,jobs,results,process,async))
);


break;
case "compute":
var c__6999__auto___19818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19806,c__6999__auto___19818,G__19637_19807,n__4888__auto___19805,jobs,results,process,async){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (__19806,c__6999__auto___19818,G__19637_19807,n__4888__auto___19805,jobs,results,process,async){
return (function (state_19677){
var state_val_19678 = (state_19677[(1)]);
if((state_val_19678 === (7))){
var inst_19673 = (state_19677[(2)]);
var state_19677__$1 = state_19677;
var statearr_19679_19819 = state_19677__$1;
(statearr_19679_19819[(2)] = inst_19673);

(statearr_19679_19819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19678 === (6))){
var state_19677__$1 = state_19677;
var statearr_19680_19820 = state_19677__$1;
(statearr_19680_19820[(2)] = null);

(statearr_19680_19820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19678 === (5))){
var state_19677__$1 = state_19677;
var statearr_19681_19821 = state_19677__$1;
(statearr_19681_19821[(2)] = null);

(statearr_19681_19821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19678 === (4))){
var inst_19667 = (state_19677[(2)]);
var inst_19668 = process.call(null,inst_19667);
var state_19677__$1 = state_19677;
if(cljs.core.truth_(inst_19668)){
var statearr_19682_19822 = state_19677__$1;
(statearr_19682_19822[(1)] = (5));

} else {
var statearr_19683_19823 = state_19677__$1;
(statearr_19683_19823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19678 === (3))){
var inst_19675 = (state_19677[(2)]);
var state_19677__$1 = state_19677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19677__$1,inst_19675);
} else {
if((state_val_19678 === (2))){
var state_19677__$1 = state_19677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19677__$1,(4),jobs);
} else {
if((state_val_19678 === (1))){
var state_19677__$1 = state_19677;
var statearr_19684_19824 = state_19677__$1;
(statearr_19684_19824[(2)] = null);

(statearr_19684_19824[(1)] = (2));


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
});})(__19806,c__6999__auto___19818,G__19637_19807,n__4888__auto___19805,jobs,results,process,async))
;
return ((function (__19806,switch__6943__auto__,c__6999__auto___19818,G__19637_19807,n__4888__auto___19805,jobs,results,process,async){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_19688 = [null,null,null,null,null,null,null];
(statearr_19688[(0)] = state_machine__6944__auto__);

(statearr_19688[(1)] = (1));

return statearr_19688;
});
var state_machine__6944__auto____1 = (function (state_19677){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_19677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e19689){if((e19689 instanceof Object)){
var ex__6947__auto__ = e19689;
var statearr_19690_19825 = state_19677;
(statearr_19690_19825[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19826 = state_19677;
state_19677 = G__19826;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_19677){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_19677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(__19806,switch__6943__auto__,c__6999__auto___19818,G__19637_19807,n__4888__auto___19805,jobs,results,process,async))
})();
var state__7001__auto__ = (function (){var statearr_19691 = f__7000__auto__.call(null);
(statearr_19691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___19818);

return statearr_19691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(__19806,c__6999__auto___19818,G__19637_19807,n__4888__auto___19805,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19827 = (__19806 + (1));
__19806 = G__19827;
continue;
} else {
}
break;
}

var c__6999__auto___19828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___19828,jobs,results,process,async){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___19828,jobs,results,process,async){
return (function (state_19713){
var state_val_19714 = (state_19713[(1)]);
if((state_val_19714 === (9))){
var inst_19706 = (state_19713[(2)]);
var state_19713__$1 = (function (){var statearr_19715 = state_19713;
(statearr_19715[(7)] = inst_19706);

return statearr_19715;
})();
var statearr_19716_19829 = state_19713__$1;
(statearr_19716_19829[(2)] = null);

(statearr_19716_19829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19714 === (8))){
var inst_19699 = (state_19713[(8)]);
var inst_19704 = (state_19713[(2)]);
var state_19713__$1 = (function (){var statearr_19717 = state_19713;
(statearr_19717[(9)] = inst_19704);

return statearr_19717;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19713__$1,(9),results,inst_19699);
} else {
if((state_val_19714 === (7))){
var inst_19709 = (state_19713[(2)]);
var state_19713__$1 = state_19713;
var statearr_19718_19830 = state_19713__$1;
(statearr_19718_19830[(2)] = inst_19709);

(statearr_19718_19830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19714 === (6))){
var inst_19699 = (state_19713[(8)]);
var inst_19694 = (state_19713[(10)]);
var inst_19699__$1 = cljs.core.async.chan.call(null,(1));
var inst_19700 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19701 = [inst_19694,inst_19699__$1];
var inst_19702 = (new cljs.core.PersistentVector(null,2,(5),inst_19700,inst_19701,null));
var state_19713__$1 = (function (){var statearr_19719 = state_19713;
(statearr_19719[(8)] = inst_19699__$1);

return statearr_19719;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19713__$1,(8),jobs,inst_19702);
} else {
if((state_val_19714 === (5))){
var inst_19697 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19713__$1 = state_19713;
var statearr_19720_19831 = state_19713__$1;
(statearr_19720_19831[(2)] = inst_19697);

(statearr_19720_19831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19714 === (4))){
var inst_19694 = (state_19713[(10)]);
var inst_19694__$1 = (state_19713[(2)]);
var inst_19695 = (inst_19694__$1 == null);
var state_19713__$1 = (function (){var statearr_19721 = state_19713;
(statearr_19721[(10)] = inst_19694__$1);

return statearr_19721;
})();
if(cljs.core.truth_(inst_19695)){
var statearr_19722_19832 = state_19713__$1;
(statearr_19722_19832[(1)] = (5));

} else {
var statearr_19723_19833 = state_19713__$1;
(statearr_19723_19833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19714 === (3))){
var inst_19711 = (state_19713[(2)]);
var state_19713__$1 = state_19713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19713__$1,inst_19711);
} else {
if((state_val_19714 === (2))){
var state_19713__$1 = state_19713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19713__$1,(4),from);
} else {
if((state_val_19714 === (1))){
var state_19713__$1 = state_19713;
var statearr_19724_19834 = state_19713__$1;
(statearr_19724_19834[(2)] = null);

(statearr_19724_19834[(1)] = (2));


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
});})(c__6999__auto___19828,jobs,results,process,async))
;
return ((function (switch__6943__auto__,c__6999__auto___19828,jobs,results,process,async){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_19728 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19728[(0)] = state_machine__6944__auto__);

(statearr_19728[(1)] = (1));

return statearr_19728;
});
var state_machine__6944__auto____1 = (function (state_19713){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_19713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e19729){if((e19729 instanceof Object)){
var ex__6947__auto__ = e19729;
var statearr_19730_19835 = state_19713;
(statearr_19730_19835[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19836 = state_19713;
state_19713 = G__19836;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_19713){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_19713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___19828,jobs,results,process,async))
})();
var state__7001__auto__ = (function (){var statearr_19731 = f__7000__auto__.call(null);
(statearr_19731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___19828);

return statearr_19731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___19828,jobs,results,process,async))
);


var c__6999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto__,jobs,results,process,async){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto__,jobs,results,process,async){
return (function (state_19769){
var state_val_19770 = (state_19769[(1)]);
if((state_val_19770 === (7))){
var inst_19765 = (state_19769[(2)]);
var state_19769__$1 = state_19769;
var statearr_19771_19837 = state_19769__$1;
(statearr_19771_19837[(2)] = inst_19765);

(statearr_19771_19837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (20))){
var state_19769__$1 = state_19769;
var statearr_19772_19838 = state_19769__$1;
(statearr_19772_19838[(2)] = null);

(statearr_19772_19838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (1))){
var state_19769__$1 = state_19769;
var statearr_19773_19839 = state_19769__$1;
(statearr_19773_19839[(2)] = null);

(statearr_19773_19839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (4))){
var inst_19734 = (state_19769[(7)]);
var inst_19734__$1 = (state_19769[(2)]);
var inst_19735 = (inst_19734__$1 == null);
var state_19769__$1 = (function (){var statearr_19774 = state_19769;
(statearr_19774[(7)] = inst_19734__$1);

return statearr_19774;
})();
if(cljs.core.truth_(inst_19735)){
var statearr_19775_19840 = state_19769__$1;
(statearr_19775_19840[(1)] = (5));

} else {
var statearr_19776_19841 = state_19769__$1;
(statearr_19776_19841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (15))){
var inst_19747 = (state_19769[(8)]);
var state_19769__$1 = state_19769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19769__$1,(18),to,inst_19747);
} else {
if((state_val_19770 === (21))){
var inst_19760 = (state_19769[(2)]);
var state_19769__$1 = state_19769;
var statearr_19777_19842 = state_19769__$1;
(statearr_19777_19842[(2)] = inst_19760);

(statearr_19777_19842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (13))){
var inst_19762 = (state_19769[(2)]);
var state_19769__$1 = (function (){var statearr_19778 = state_19769;
(statearr_19778[(9)] = inst_19762);

return statearr_19778;
})();
var statearr_19779_19843 = state_19769__$1;
(statearr_19779_19843[(2)] = null);

(statearr_19779_19843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (6))){
var inst_19734 = (state_19769[(7)]);
var state_19769__$1 = state_19769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19769__$1,(11),inst_19734);
} else {
if((state_val_19770 === (17))){
var inst_19755 = (state_19769[(2)]);
var state_19769__$1 = state_19769;
if(cljs.core.truth_(inst_19755)){
var statearr_19780_19844 = state_19769__$1;
(statearr_19780_19844[(1)] = (19));

} else {
var statearr_19781_19845 = state_19769__$1;
(statearr_19781_19845[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (3))){
var inst_19767 = (state_19769[(2)]);
var state_19769__$1 = state_19769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19769__$1,inst_19767);
} else {
if((state_val_19770 === (12))){
var inst_19744 = (state_19769[(10)]);
var state_19769__$1 = state_19769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19769__$1,(14),inst_19744);
} else {
if((state_val_19770 === (2))){
var state_19769__$1 = state_19769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19769__$1,(4),results);
} else {
if((state_val_19770 === (19))){
var state_19769__$1 = state_19769;
var statearr_19782_19846 = state_19769__$1;
(statearr_19782_19846[(2)] = null);

(statearr_19782_19846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (11))){
var inst_19744 = (state_19769[(2)]);
var state_19769__$1 = (function (){var statearr_19783 = state_19769;
(statearr_19783[(10)] = inst_19744);

return statearr_19783;
})();
var statearr_19784_19847 = state_19769__$1;
(statearr_19784_19847[(2)] = null);

(statearr_19784_19847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (9))){
var state_19769__$1 = state_19769;
var statearr_19785_19848 = state_19769__$1;
(statearr_19785_19848[(2)] = null);

(statearr_19785_19848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (5))){
var state_19769__$1 = state_19769;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19786_19849 = state_19769__$1;
(statearr_19786_19849[(1)] = (8));

} else {
var statearr_19787_19850 = state_19769__$1;
(statearr_19787_19850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (14))){
var inst_19749 = (state_19769[(11)]);
var inst_19747 = (state_19769[(8)]);
var inst_19747__$1 = (state_19769[(2)]);
var inst_19748 = (inst_19747__$1 == null);
var inst_19749__$1 = cljs.core.not.call(null,inst_19748);
var state_19769__$1 = (function (){var statearr_19788 = state_19769;
(statearr_19788[(11)] = inst_19749__$1);

(statearr_19788[(8)] = inst_19747__$1);

return statearr_19788;
})();
if(inst_19749__$1){
var statearr_19789_19851 = state_19769__$1;
(statearr_19789_19851[(1)] = (15));

} else {
var statearr_19790_19852 = state_19769__$1;
(statearr_19790_19852[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (16))){
var inst_19749 = (state_19769[(11)]);
var state_19769__$1 = state_19769;
var statearr_19791_19853 = state_19769__$1;
(statearr_19791_19853[(2)] = inst_19749);

(statearr_19791_19853[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (10))){
var inst_19741 = (state_19769[(2)]);
var state_19769__$1 = state_19769;
var statearr_19792_19854 = state_19769__$1;
(statearr_19792_19854[(2)] = inst_19741);

(statearr_19792_19854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (18))){
var inst_19752 = (state_19769[(2)]);
var state_19769__$1 = state_19769;
var statearr_19793_19855 = state_19769__$1;
(statearr_19793_19855[(2)] = inst_19752);

(statearr_19793_19855[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19770 === (8))){
var inst_19738 = cljs.core.async.close_BANG_.call(null,to);
var state_19769__$1 = state_19769;
var statearr_19794_19856 = state_19769__$1;
(statearr_19794_19856[(2)] = inst_19738);

(statearr_19794_19856[(1)] = (10));


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
});})(c__6999__auto__,jobs,results,process,async))
;
return ((function (switch__6943__auto__,c__6999__auto__,jobs,results,process,async){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_19798 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19798[(0)] = state_machine__6944__auto__);

(statearr_19798[(1)] = (1));

return statearr_19798;
});
var state_machine__6944__auto____1 = (function (state_19769){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_19769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e19799){if((e19799 instanceof Object)){
var ex__6947__auto__ = e19799;
var statearr_19800_19857 = state_19769;
(statearr_19800_19857[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19858 = state_19769;
state_19769 = G__19858;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_19769){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_19769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto__,jobs,results,process,async))
})();
var state__7001__auto__ = (function (){var statearr_19801 = f__7000__auto__.call(null);
(statearr_19801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto__);

return statearr_19801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto__,jobs,results,process,async))
);

return c__6999__auto__;
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
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
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
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
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
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6999__auto___19959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___19959,tc,fc){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___19959,tc,fc){
return (function (state_19934){
var state_val_19935 = (state_19934[(1)]);
if((state_val_19935 === (7))){
var inst_19930 = (state_19934[(2)]);
var state_19934__$1 = state_19934;
var statearr_19936_19960 = state_19934__$1;
(statearr_19936_19960[(2)] = inst_19930);

(statearr_19936_19960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (1))){
var state_19934__$1 = state_19934;
var statearr_19937_19961 = state_19934__$1;
(statearr_19937_19961[(2)] = null);

(statearr_19937_19961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (4))){
var inst_19911 = (state_19934[(7)]);
var inst_19911__$1 = (state_19934[(2)]);
var inst_19912 = (inst_19911__$1 == null);
var state_19934__$1 = (function (){var statearr_19938 = state_19934;
(statearr_19938[(7)] = inst_19911__$1);

return statearr_19938;
})();
if(cljs.core.truth_(inst_19912)){
var statearr_19939_19962 = state_19934__$1;
(statearr_19939_19962[(1)] = (5));

} else {
var statearr_19940_19963 = state_19934__$1;
(statearr_19940_19963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (13))){
var state_19934__$1 = state_19934;
var statearr_19941_19964 = state_19934__$1;
(statearr_19941_19964[(2)] = null);

(statearr_19941_19964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (6))){
var inst_19911 = (state_19934[(7)]);
var inst_19917 = p.call(null,inst_19911);
var state_19934__$1 = state_19934;
if(cljs.core.truth_(inst_19917)){
var statearr_19942_19965 = state_19934__$1;
(statearr_19942_19965[(1)] = (9));

} else {
var statearr_19943_19966 = state_19934__$1;
(statearr_19943_19966[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (3))){
var inst_19932 = (state_19934[(2)]);
var state_19934__$1 = state_19934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19934__$1,inst_19932);
} else {
if((state_val_19935 === (12))){
var state_19934__$1 = state_19934;
var statearr_19944_19967 = state_19934__$1;
(statearr_19944_19967[(2)] = null);

(statearr_19944_19967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (2))){
var state_19934__$1 = state_19934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19934__$1,(4),ch);
} else {
if((state_val_19935 === (11))){
var inst_19911 = (state_19934[(7)]);
var inst_19921 = (state_19934[(2)]);
var state_19934__$1 = state_19934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19934__$1,(8),inst_19921,inst_19911);
} else {
if((state_val_19935 === (9))){
var state_19934__$1 = state_19934;
var statearr_19945_19968 = state_19934__$1;
(statearr_19945_19968[(2)] = tc);

(statearr_19945_19968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (5))){
var inst_19914 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19915 = cljs.core.async.close_BANG_.call(null,fc);
var state_19934__$1 = (function (){var statearr_19946 = state_19934;
(statearr_19946[(8)] = inst_19914);

return statearr_19946;
})();
var statearr_19947_19969 = state_19934__$1;
(statearr_19947_19969[(2)] = inst_19915);

(statearr_19947_19969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (14))){
var inst_19928 = (state_19934[(2)]);
var state_19934__$1 = state_19934;
var statearr_19948_19970 = state_19934__$1;
(statearr_19948_19970[(2)] = inst_19928);

(statearr_19948_19970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (10))){
var state_19934__$1 = state_19934;
var statearr_19949_19971 = state_19934__$1;
(statearr_19949_19971[(2)] = fc);

(statearr_19949_19971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19935 === (8))){
var inst_19923 = (state_19934[(2)]);
var state_19934__$1 = state_19934;
if(cljs.core.truth_(inst_19923)){
var statearr_19950_19972 = state_19934__$1;
(statearr_19950_19972[(1)] = (12));

} else {
var statearr_19951_19973 = state_19934__$1;
(statearr_19951_19973[(1)] = (13));

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
});})(c__6999__auto___19959,tc,fc))
;
return ((function (switch__6943__auto__,c__6999__auto___19959,tc,fc){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_19955 = [null,null,null,null,null,null,null,null,null];
(statearr_19955[(0)] = state_machine__6944__auto__);

(statearr_19955[(1)] = (1));

return statearr_19955;
});
var state_machine__6944__auto____1 = (function (state_19934){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_19934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e19956){if((e19956 instanceof Object)){
var ex__6947__auto__ = e19956;
var statearr_19957_19974 = state_19934;
(statearr_19957_19974[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19975 = state_19934;
state_19934 = G__19975;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_19934){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_19934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___19959,tc,fc))
})();
var state__7001__auto__ = (function (){var statearr_19958 = f__7000__auto__.call(null);
(statearr_19958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___19959);

return statearr_19958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___19959,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto__){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto__){
return (function (state_20022){
var state_val_20023 = (state_20022[(1)]);
if((state_val_20023 === (7))){
var inst_20018 = (state_20022[(2)]);
var state_20022__$1 = state_20022;
var statearr_20024_20040 = state_20022__$1;
(statearr_20024_20040[(2)] = inst_20018);

(statearr_20024_20040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20023 === (6))){
var inst_20011 = (state_20022[(7)]);
var inst_20008 = (state_20022[(8)]);
var inst_20015 = f.call(null,inst_20008,inst_20011);
var inst_20008__$1 = inst_20015;
var state_20022__$1 = (function (){var statearr_20025 = state_20022;
(statearr_20025[(8)] = inst_20008__$1);

return statearr_20025;
})();
var statearr_20026_20041 = state_20022__$1;
(statearr_20026_20041[(2)] = null);

(statearr_20026_20041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20023 === (5))){
var inst_20008 = (state_20022[(8)]);
var state_20022__$1 = state_20022;
var statearr_20027_20042 = state_20022__$1;
(statearr_20027_20042[(2)] = inst_20008);

(statearr_20027_20042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20023 === (4))){
var inst_20011 = (state_20022[(7)]);
var inst_20011__$1 = (state_20022[(2)]);
var inst_20012 = (inst_20011__$1 == null);
var state_20022__$1 = (function (){var statearr_20028 = state_20022;
(statearr_20028[(7)] = inst_20011__$1);

return statearr_20028;
})();
if(cljs.core.truth_(inst_20012)){
var statearr_20029_20043 = state_20022__$1;
(statearr_20029_20043[(1)] = (5));

} else {
var statearr_20030_20044 = state_20022__$1;
(statearr_20030_20044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20023 === (3))){
var inst_20020 = (state_20022[(2)]);
var state_20022__$1 = state_20022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20022__$1,inst_20020);
} else {
if((state_val_20023 === (2))){
var state_20022__$1 = state_20022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20022__$1,(4),ch);
} else {
if((state_val_20023 === (1))){
var inst_20008 = init;
var state_20022__$1 = (function (){var statearr_20031 = state_20022;
(statearr_20031[(8)] = inst_20008);

return statearr_20031;
})();
var statearr_20032_20045 = state_20022__$1;
(statearr_20032_20045[(2)] = null);

(statearr_20032_20045[(1)] = (2));


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
});})(c__6999__auto__))
;
return ((function (switch__6943__auto__,c__6999__auto__){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_20036 = [null,null,null,null,null,null,null,null,null];
(statearr_20036[(0)] = state_machine__6944__auto__);

(statearr_20036[(1)] = (1));

return statearr_20036;
});
var state_machine__6944__auto____1 = (function (state_20022){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_20022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e20037){if((e20037 instanceof Object)){
var ex__6947__auto__ = e20037;
var statearr_20038_20046 = state_20022;
(statearr_20038_20046[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20047 = state_20022;
state_20022 = G__20047;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_20022){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_20022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto__))
})();
var state__7001__auto__ = (function (){var statearr_20039 = f__7000__auto__.call(null);
(statearr_20039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto__);

return statearr_20039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto__))
);

return c__6999__auto__;
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
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto__){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto__){
return (function (state_20121){
var state_val_20122 = (state_20121[(1)]);
if((state_val_20122 === (7))){
var inst_20103 = (state_20121[(2)]);
var state_20121__$1 = state_20121;
var statearr_20123_20146 = state_20121__$1;
(statearr_20123_20146[(2)] = inst_20103);

(statearr_20123_20146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (1))){
var inst_20097 = cljs.core.seq.call(null,coll);
var inst_20098 = inst_20097;
var state_20121__$1 = (function (){var statearr_20124 = state_20121;
(statearr_20124[(7)] = inst_20098);

return statearr_20124;
})();
var statearr_20125_20147 = state_20121__$1;
(statearr_20125_20147[(2)] = null);

(statearr_20125_20147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (4))){
var inst_20098 = (state_20121[(7)]);
var inst_20101 = cljs.core.first.call(null,inst_20098);
var state_20121__$1 = state_20121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20121__$1,(7),ch,inst_20101);
} else {
if((state_val_20122 === (13))){
var inst_20115 = (state_20121[(2)]);
var state_20121__$1 = state_20121;
var statearr_20126_20148 = state_20121__$1;
(statearr_20126_20148[(2)] = inst_20115);

(statearr_20126_20148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (6))){
var inst_20106 = (state_20121[(2)]);
var state_20121__$1 = state_20121;
if(cljs.core.truth_(inst_20106)){
var statearr_20127_20149 = state_20121__$1;
(statearr_20127_20149[(1)] = (8));

} else {
var statearr_20128_20150 = state_20121__$1;
(statearr_20128_20150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (3))){
var inst_20119 = (state_20121[(2)]);
var state_20121__$1 = state_20121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20121__$1,inst_20119);
} else {
if((state_val_20122 === (12))){
var state_20121__$1 = state_20121;
var statearr_20129_20151 = state_20121__$1;
(statearr_20129_20151[(2)] = null);

(statearr_20129_20151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (2))){
var inst_20098 = (state_20121[(7)]);
var state_20121__$1 = state_20121;
if(cljs.core.truth_(inst_20098)){
var statearr_20130_20152 = state_20121__$1;
(statearr_20130_20152[(1)] = (4));

} else {
var statearr_20131_20153 = state_20121__$1;
(statearr_20131_20153[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (11))){
var inst_20112 = cljs.core.async.close_BANG_.call(null,ch);
var state_20121__$1 = state_20121;
var statearr_20132_20154 = state_20121__$1;
(statearr_20132_20154[(2)] = inst_20112);

(statearr_20132_20154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (9))){
var state_20121__$1 = state_20121;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20133_20155 = state_20121__$1;
(statearr_20133_20155[(1)] = (11));

} else {
var statearr_20134_20156 = state_20121__$1;
(statearr_20134_20156[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (5))){
var inst_20098 = (state_20121[(7)]);
var state_20121__$1 = state_20121;
var statearr_20135_20157 = state_20121__$1;
(statearr_20135_20157[(2)] = inst_20098);

(statearr_20135_20157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (10))){
var inst_20117 = (state_20121[(2)]);
var state_20121__$1 = state_20121;
var statearr_20136_20158 = state_20121__$1;
(statearr_20136_20158[(2)] = inst_20117);

(statearr_20136_20158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20122 === (8))){
var inst_20098 = (state_20121[(7)]);
var inst_20108 = cljs.core.next.call(null,inst_20098);
var inst_20098__$1 = inst_20108;
var state_20121__$1 = (function (){var statearr_20137 = state_20121;
(statearr_20137[(7)] = inst_20098__$1);

return statearr_20137;
})();
var statearr_20138_20159 = state_20121__$1;
(statearr_20138_20159[(2)] = null);

(statearr_20138_20159[(1)] = (2));


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
});})(c__6999__auto__))
;
return ((function (switch__6943__auto__,c__6999__auto__){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_20142 = [null,null,null,null,null,null,null,null];
(statearr_20142[(0)] = state_machine__6944__auto__);

(statearr_20142[(1)] = (1));

return statearr_20142;
});
var state_machine__6944__auto____1 = (function (state_20121){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_20121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e20143){if((e20143 instanceof Object)){
var ex__6947__auto__ = e20143;
var statearr_20144_20160 = state_20121;
(statearr_20144_20160[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20161 = state_20121;
state_20121 = G__20161;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_20121){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_20121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto__))
})();
var state__7001__auto__ = (function (){var statearr_20145 = f__7000__auto__.call(null);
(statearr_20145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto__);

return statearr_20145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto__))
);

return c__6999__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj20163 = {};
return obj20163;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3989__auto__ = _;
if(and__3989__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3989__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4645__auto__ = (((_ == null))?null:_);
return (function (){var or__4001__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4645__auto__)]);
if(or__4001__auto__){
return or__4001__auto__;
} else {
var or__4001__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4001__auto____$1){
return or__4001__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj20165 = {};
return obj20165;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3989__auto__ = m;
if(and__3989__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3989__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4645__auto__ = (((m == null))?null:m);
return (function (){var or__4001__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4645__auto__)]);
if(or__4001__auto__){
return or__4001__auto__;
} else {
var or__4001__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4001__auto____$1){
return or__4001__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3989__auto__ = m;
if(and__3989__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3989__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4645__auto__ = (((m == null))?null:m);
return (function (){var or__4001__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4645__auto__)]);
if(or__4001__auto__){
return or__4001__auto__;
} else {
var or__4001__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4001__auto____$1){
return or__4001__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3989__auto__ = m;
if(and__3989__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3989__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4645__auto__ = (((m == null))?null:m);
return (function (){var or__4001__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4645__auto__)]);
if(or__4001__auto__){
return or__4001__auto__;
} else {
var or__4001__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4001__auto____$1){
return or__4001__auto____$1;
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
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t20387 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20387 = (function (cs,ch,mult,meta20388){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20388 = meta20388;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20387.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20387.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20387.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20387.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t20387.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20387.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20389){
var self__ = this;
var _20389__$1 = this;
return self__.meta20388;
});})(cs))
;

cljs.core.async.t20387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20389,meta20388__$1){
var self__ = this;
var _20389__$1 = this;
return (new cljs.core.async.t20387(self__.cs,self__.ch,self__.mult,meta20388__$1));
});})(cs))
;

cljs.core.async.t20387.cljs$lang$type = true;

cljs.core.async.t20387.cljs$lang$ctorStr = "cljs.core.async/t20387";

cljs.core.async.t20387.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4588__auto__,writer__4589__auto__,opt__4590__auto__){
return cljs.core._write.call(null,writer__4589__auto__,"cljs.core.async/t20387");
});})(cs))
;

cljs.core.async.__GT_t20387 = ((function (cs){
return (function __GT_t20387(cs__$1,ch__$1,mult__$1,meta20388){
return (new cljs.core.async.t20387(cs__$1,ch__$1,mult__$1,meta20388));
});})(cs))
;

}

return (new cljs.core.async.t20387(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/gnzh/mydev/presentation-tool/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
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
var c__6999__auto___20608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___20608,cs,m,dchan,dctr,done){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___20608,cs,m,dchan,dctr,done){
return (function (state_20520){
var state_val_20521 = (state_20520[(1)]);
if((state_val_20521 === (7))){
var inst_20516 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20522_20609 = state_20520__$1;
(statearr_20522_20609[(2)] = inst_20516);

(statearr_20522_20609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (20))){
var inst_20421 = (state_20520[(7)]);
var inst_20431 = cljs.core.first.call(null,inst_20421);
var inst_20432 = cljs.core.nth.call(null,inst_20431,(0),null);
var inst_20433 = cljs.core.nth.call(null,inst_20431,(1),null);
var state_20520__$1 = (function (){var statearr_20523 = state_20520;
(statearr_20523[(8)] = inst_20432);

return statearr_20523;
})();
if(cljs.core.truth_(inst_20433)){
var statearr_20524_20610 = state_20520__$1;
(statearr_20524_20610[(1)] = (22));

} else {
var statearr_20525_20611 = state_20520__$1;
(statearr_20525_20611[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (27))){
var inst_20468 = (state_20520[(9)]);
var inst_20392 = (state_20520[(10)]);
var inst_20461 = (state_20520[(11)]);
var inst_20463 = (state_20520[(12)]);
var inst_20468__$1 = cljs.core._nth.call(null,inst_20461,inst_20463);
var inst_20469 = cljs.core.async.put_BANG_.call(null,inst_20468__$1,inst_20392,done);
var state_20520__$1 = (function (){var statearr_20526 = state_20520;
(statearr_20526[(9)] = inst_20468__$1);

return statearr_20526;
})();
if(cljs.core.truth_(inst_20469)){
var statearr_20527_20612 = state_20520__$1;
(statearr_20527_20612[(1)] = (30));

} else {
var statearr_20528_20613 = state_20520__$1;
(statearr_20528_20613[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (1))){
var state_20520__$1 = state_20520;
var statearr_20529_20614 = state_20520__$1;
(statearr_20529_20614[(2)] = null);

(statearr_20529_20614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (24))){
var inst_20421 = (state_20520[(7)]);
var inst_20438 = (state_20520[(2)]);
var inst_20439 = cljs.core.next.call(null,inst_20421);
var inst_20401 = inst_20439;
var inst_20402 = null;
var inst_20403 = (0);
var inst_20404 = (0);
var state_20520__$1 = (function (){var statearr_20530 = state_20520;
(statearr_20530[(13)] = inst_20402);

(statearr_20530[(14)] = inst_20404);

(statearr_20530[(15)] = inst_20438);

(statearr_20530[(16)] = inst_20403);

(statearr_20530[(17)] = inst_20401);

return statearr_20530;
})();
var statearr_20531_20615 = state_20520__$1;
(statearr_20531_20615[(2)] = null);

(statearr_20531_20615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (39))){
var state_20520__$1 = state_20520;
var statearr_20535_20616 = state_20520__$1;
(statearr_20535_20616[(2)] = null);

(statearr_20535_20616[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (4))){
var inst_20392 = (state_20520[(10)]);
var inst_20392__$1 = (state_20520[(2)]);
var inst_20393 = (inst_20392__$1 == null);
var state_20520__$1 = (function (){var statearr_20536 = state_20520;
(statearr_20536[(10)] = inst_20392__$1);

return statearr_20536;
})();
if(cljs.core.truth_(inst_20393)){
var statearr_20537_20617 = state_20520__$1;
(statearr_20537_20617[(1)] = (5));

} else {
var statearr_20538_20618 = state_20520__$1;
(statearr_20538_20618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (15))){
var inst_20402 = (state_20520[(13)]);
var inst_20404 = (state_20520[(14)]);
var inst_20403 = (state_20520[(16)]);
var inst_20401 = (state_20520[(17)]);
var inst_20417 = (state_20520[(2)]);
var inst_20418 = (inst_20404 + (1));
var tmp20532 = inst_20402;
var tmp20533 = inst_20403;
var tmp20534 = inst_20401;
var inst_20401__$1 = tmp20534;
var inst_20402__$1 = tmp20532;
var inst_20403__$1 = tmp20533;
var inst_20404__$1 = inst_20418;
var state_20520__$1 = (function (){var statearr_20539 = state_20520;
(statearr_20539[(13)] = inst_20402__$1);

(statearr_20539[(14)] = inst_20404__$1);

(statearr_20539[(18)] = inst_20417);

(statearr_20539[(16)] = inst_20403__$1);

(statearr_20539[(17)] = inst_20401__$1);

return statearr_20539;
})();
var statearr_20540_20619 = state_20520__$1;
(statearr_20540_20619[(2)] = null);

(statearr_20540_20619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (21))){
var inst_20442 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20544_20620 = state_20520__$1;
(statearr_20544_20620[(2)] = inst_20442);

(statearr_20544_20620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (31))){
var inst_20468 = (state_20520[(9)]);
var inst_20472 = done.call(null,null);
var inst_20473 = cljs.core.async.untap_STAR_.call(null,m,inst_20468);
var state_20520__$1 = (function (){var statearr_20545 = state_20520;
(statearr_20545[(19)] = inst_20472);

return statearr_20545;
})();
var statearr_20546_20621 = state_20520__$1;
(statearr_20546_20621[(2)] = inst_20473);

(statearr_20546_20621[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (32))){
var inst_20462 = (state_20520[(20)]);
var inst_20461 = (state_20520[(11)]);
var inst_20463 = (state_20520[(12)]);
var inst_20460 = (state_20520[(21)]);
var inst_20475 = (state_20520[(2)]);
var inst_20476 = (inst_20463 + (1));
var tmp20541 = inst_20462;
var tmp20542 = inst_20461;
var tmp20543 = inst_20460;
var inst_20460__$1 = tmp20543;
var inst_20461__$1 = tmp20542;
var inst_20462__$1 = tmp20541;
var inst_20463__$1 = inst_20476;
var state_20520__$1 = (function (){var statearr_20547 = state_20520;
(statearr_20547[(20)] = inst_20462__$1);

(statearr_20547[(11)] = inst_20461__$1);

(statearr_20547[(12)] = inst_20463__$1);

(statearr_20547[(21)] = inst_20460__$1);

(statearr_20547[(22)] = inst_20475);

return statearr_20547;
})();
var statearr_20548_20622 = state_20520__$1;
(statearr_20548_20622[(2)] = null);

(statearr_20548_20622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (40))){
var inst_20488 = (state_20520[(23)]);
var inst_20492 = done.call(null,null);
var inst_20493 = cljs.core.async.untap_STAR_.call(null,m,inst_20488);
var state_20520__$1 = (function (){var statearr_20549 = state_20520;
(statearr_20549[(24)] = inst_20492);

return statearr_20549;
})();
var statearr_20550_20623 = state_20520__$1;
(statearr_20550_20623[(2)] = inst_20493);

(statearr_20550_20623[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (33))){
var inst_20479 = (state_20520[(25)]);
var inst_20481 = cljs.core.chunked_seq_QMARK_.call(null,inst_20479);
var state_20520__$1 = state_20520;
if(inst_20481){
var statearr_20551_20624 = state_20520__$1;
(statearr_20551_20624[(1)] = (36));

} else {
var statearr_20552_20625 = state_20520__$1;
(statearr_20552_20625[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (13))){
var inst_20411 = (state_20520[(26)]);
var inst_20414 = cljs.core.async.close_BANG_.call(null,inst_20411);
var state_20520__$1 = state_20520;
var statearr_20553_20626 = state_20520__$1;
(statearr_20553_20626[(2)] = inst_20414);

(statearr_20553_20626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (22))){
var inst_20432 = (state_20520[(8)]);
var inst_20435 = cljs.core.async.close_BANG_.call(null,inst_20432);
var state_20520__$1 = state_20520;
var statearr_20554_20627 = state_20520__$1;
(statearr_20554_20627[(2)] = inst_20435);

(statearr_20554_20627[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (36))){
var inst_20479 = (state_20520[(25)]);
var inst_20483 = cljs.core.chunk_first.call(null,inst_20479);
var inst_20484 = cljs.core.chunk_rest.call(null,inst_20479);
var inst_20485 = cljs.core.count.call(null,inst_20483);
var inst_20460 = inst_20484;
var inst_20461 = inst_20483;
var inst_20462 = inst_20485;
var inst_20463 = (0);
var state_20520__$1 = (function (){var statearr_20555 = state_20520;
(statearr_20555[(20)] = inst_20462);

(statearr_20555[(11)] = inst_20461);

(statearr_20555[(12)] = inst_20463);

(statearr_20555[(21)] = inst_20460);

return statearr_20555;
})();
var statearr_20556_20628 = state_20520__$1;
(statearr_20556_20628[(2)] = null);

(statearr_20556_20628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (41))){
var inst_20479 = (state_20520[(25)]);
var inst_20495 = (state_20520[(2)]);
var inst_20496 = cljs.core.next.call(null,inst_20479);
var inst_20460 = inst_20496;
var inst_20461 = null;
var inst_20462 = (0);
var inst_20463 = (0);
var state_20520__$1 = (function (){var statearr_20557 = state_20520;
(statearr_20557[(20)] = inst_20462);

(statearr_20557[(11)] = inst_20461);

(statearr_20557[(12)] = inst_20463);

(statearr_20557[(21)] = inst_20460);

(statearr_20557[(27)] = inst_20495);

return statearr_20557;
})();
var statearr_20558_20629 = state_20520__$1;
(statearr_20558_20629[(2)] = null);

(statearr_20558_20629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (43))){
var state_20520__$1 = state_20520;
var statearr_20559_20630 = state_20520__$1;
(statearr_20559_20630[(2)] = null);

(statearr_20559_20630[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (29))){
var inst_20504 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20560_20631 = state_20520__$1;
(statearr_20560_20631[(2)] = inst_20504);

(statearr_20560_20631[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (44))){
var inst_20513 = (state_20520[(2)]);
var state_20520__$1 = (function (){var statearr_20561 = state_20520;
(statearr_20561[(28)] = inst_20513);

return statearr_20561;
})();
var statearr_20562_20632 = state_20520__$1;
(statearr_20562_20632[(2)] = null);

(statearr_20562_20632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (6))){
var inst_20452 = (state_20520[(29)]);
var inst_20451 = cljs.core.deref.call(null,cs);
var inst_20452__$1 = cljs.core.keys.call(null,inst_20451);
var inst_20453 = cljs.core.count.call(null,inst_20452__$1);
var inst_20454 = cljs.core.reset_BANG_.call(null,dctr,inst_20453);
var inst_20459 = cljs.core.seq.call(null,inst_20452__$1);
var inst_20460 = inst_20459;
var inst_20461 = null;
var inst_20462 = (0);
var inst_20463 = (0);
var state_20520__$1 = (function (){var statearr_20563 = state_20520;
(statearr_20563[(20)] = inst_20462);

(statearr_20563[(11)] = inst_20461);

(statearr_20563[(12)] = inst_20463);

(statearr_20563[(21)] = inst_20460);

(statearr_20563[(29)] = inst_20452__$1);

(statearr_20563[(30)] = inst_20454);

return statearr_20563;
})();
var statearr_20564_20633 = state_20520__$1;
(statearr_20564_20633[(2)] = null);

(statearr_20564_20633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (28))){
var inst_20479 = (state_20520[(25)]);
var inst_20460 = (state_20520[(21)]);
var inst_20479__$1 = cljs.core.seq.call(null,inst_20460);
var state_20520__$1 = (function (){var statearr_20565 = state_20520;
(statearr_20565[(25)] = inst_20479__$1);

return statearr_20565;
})();
if(inst_20479__$1){
var statearr_20566_20634 = state_20520__$1;
(statearr_20566_20634[(1)] = (33));

} else {
var statearr_20567_20635 = state_20520__$1;
(statearr_20567_20635[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (25))){
var inst_20462 = (state_20520[(20)]);
var inst_20463 = (state_20520[(12)]);
var inst_20465 = (inst_20463 < inst_20462);
var inst_20466 = inst_20465;
var state_20520__$1 = state_20520;
if(cljs.core.truth_(inst_20466)){
var statearr_20568_20636 = state_20520__$1;
(statearr_20568_20636[(1)] = (27));

} else {
var statearr_20569_20637 = state_20520__$1;
(statearr_20569_20637[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (34))){
var state_20520__$1 = state_20520;
var statearr_20570_20638 = state_20520__$1;
(statearr_20570_20638[(2)] = null);

(statearr_20570_20638[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (17))){
var state_20520__$1 = state_20520;
var statearr_20571_20639 = state_20520__$1;
(statearr_20571_20639[(2)] = null);

(statearr_20571_20639[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (3))){
var inst_20518 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20520__$1,inst_20518);
} else {
if((state_val_20521 === (12))){
var inst_20447 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20572_20640 = state_20520__$1;
(statearr_20572_20640[(2)] = inst_20447);

(statearr_20572_20640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (2))){
var state_20520__$1 = state_20520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20520__$1,(4),ch);
} else {
if((state_val_20521 === (23))){
var state_20520__$1 = state_20520;
var statearr_20573_20641 = state_20520__$1;
(statearr_20573_20641[(2)] = null);

(statearr_20573_20641[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (35))){
var inst_20502 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20574_20642 = state_20520__$1;
(statearr_20574_20642[(2)] = inst_20502);

(statearr_20574_20642[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (19))){
var inst_20421 = (state_20520[(7)]);
var inst_20425 = cljs.core.chunk_first.call(null,inst_20421);
var inst_20426 = cljs.core.chunk_rest.call(null,inst_20421);
var inst_20427 = cljs.core.count.call(null,inst_20425);
var inst_20401 = inst_20426;
var inst_20402 = inst_20425;
var inst_20403 = inst_20427;
var inst_20404 = (0);
var state_20520__$1 = (function (){var statearr_20575 = state_20520;
(statearr_20575[(13)] = inst_20402);

(statearr_20575[(14)] = inst_20404);

(statearr_20575[(16)] = inst_20403);

(statearr_20575[(17)] = inst_20401);

return statearr_20575;
})();
var statearr_20576_20643 = state_20520__$1;
(statearr_20576_20643[(2)] = null);

(statearr_20576_20643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (11))){
var inst_20421 = (state_20520[(7)]);
var inst_20401 = (state_20520[(17)]);
var inst_20421__$1 = cljs.core.seq.call(null,inst_20401);
var state_20520__$1 = (function (){var statearr_20577 = state_20520;
(statearr_20577[(7)] = inst_20421__$1);

return statearr_20577;
})();
if(inst_20421__$1){
var statearr_20578_20644 = state_20520__$1;
(statearr_20578_20644[(1)] = (16));

} else {
var statearr_20579_20645 = state_20520__$1;
(statearr_20579_20645[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (9))){
var inst_20449 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20580_20646 = state_20520__$1;
(statearr_20580_20646[(2)] = inst_20449);

(statearr_20580_20646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (5))){
var inst_20399 = cljs.core.deref.call(null,cs);
var inst_20400 = cljs.core.seq.call(null,inst_20399);
var inst_20401 = inst_20400;
var inst_20402 = null;
var inst_20403 = (0);
var inst_20404 = (0);
var state_20520__$1 = (function (){var statearr_20581 = state_20520;
(statearr_20581[(13)] = inst_20402);

(statearr_20581[(14)] = inst_20404);

(statearr_20581[(16)] = inst_20403);

(statearr_20581[(17)] = inst_20401);

return statearr_20581;
})();
var statearr_20582_20647 = state_20520__$1;
(statearr_20582_20647[(2)] = null);

(statearr_20582_20647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (14))){
var state_20520__$1 = state_20520;
var statearr_20583_20648 = state_20520__$1;
(statearr_20583_20648[(2)] = null);

(statearr_20583_20648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (45))){
var inst_20510 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20584_20649 = state_20520__$1;
(statearr_20584_20649[(2)] = inst_20510);

(statearr_20584_20649[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (26))){
var inst_20452 = (state_20520[(29)]);
var inst_20506 = (state_20520[(2)]);
var inst_20507 = cljs.core.seq.call(null,inst_20452);
var state_20520__$1 = (function (){var statearr_20585 = state_20520;
(statearr_20585[(31)] = inst_20506);

return statearr_20585;
})();
if(inst_20507){
var statearr_20586_20650 = state_20520__$1;
(statearr_20586_20650[(1)] = (42));

} else {
var statearr_20587_20651 = state_20520__$1;
(statearr_20587_20651[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (16))){
var inst_20421 = (state_20520[(7)]);
var inst_20423 = cljs.core.chunked_seq_QMARK_.call(null,inst_20421);
var state_20520__$1 = state_20520;
if(inst_20423){
var statearr_20588_20652 = state_20520__$1;
(statearr_20588_20652[(1)] = (19));

} else {
var statearr_20589_20653 = state_20520__$1;
(statearr_20589_20653[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (38))){
var inst_20499 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20590_20654 = state_20520__$1;
(statearr_20590_20654[(2)] = inst_20499);

(statearr_20590_20654[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (30))){
var state_20520__$1 = state_20520;
var statearr_20591_20655 = state_20520__$1;
(statearr_20591_20655[(2)] = null);

(statearr_20591_20655[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (10))){
var inst_20402 = (state_20520[(13)]);
var inst_20404 = (state_20520[(14)]);
var inst_20410 = cljs.core._nth.call(null,inst_20402,inst_20404);
var inst_20411 = cljs.core.nth.call(null,inst_20410,(0),null);
var inst_20412 = cljs.core.nth.call(null,inst_20410,(1),null);
var state_20520__$1 = (function (){var statearr_20592 = state_20520;
(statearr_20592[(26)] = inst_20411);

return statearr_20592;
})();
if(cljs.core.truth_(inst_20412)){
var statearr_20593_20656 = state_20520__$1;
(statearr_20593_20656[(1)] = (13));

} else {
var statearr_20594_20657 = state_20520__$1;
(statearr_20594_20657[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (18))){
var inst_20445 = (state_20520[(2)]);
var state_20520__$1 = state_20520;
var statearr_20595_20658 = state_20520__$1;
(statearr_20595_20658[(2)] = inst_20445);

(statearr_20595_20658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (42))){
var state_20520__$1 = state_20520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20520__$1,(45),dchan);
} else {
if((state_val_20521 === (37))){
var inst_20479 = (state_20520[(25)]);
var inst_20488 = (state_20520[(23)]);
var inst_20392 = (state_20520[(10)]);
var inst_20488__$1 = cljs.core.first.call(null,inst_20479);
var inst_20489 = cljs.core.async.put_BANG_.call(null,inst_20488__$1,inst_20392,done);
var state_20520__$1 = (function (){var statearr_20596 = state_20520;
(statearr_20596[(23)] = inst_20488__$1);

return statearr_20596;
})();
if(cljs.core.truth_(inst_20489)){
var statearr_20597_20659 = state_20520__$1;
(statearr_20597_20659[(1)] = (39));

} else {
var statearr_20598_20660 = state_20520__$1;
(statearr_20598_20660[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20521 === (8))){
var inst_20404 = (state_20520[(14)]);
var inst_20403 = (state_20520[(16)]);
var inst_20406 = (inst_20404 < inst_20403);
var inst_20407 = inst_20406;
var state_20520__$1 = state_20520;
if(cljs.core.truth_(inst_20407)){
var statearr_20599_20661 = state_20520__$1;
(statearr_20599_20661[(1)] = (10));

} else {
var statearr_20600_20662 = state_20520__$1;
(statearr_20600_20662[(1)] = (11));

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
});})(c__6999__auto___20608,cs,m,dchan,dctr,done))
;
return ((function (switch__6943__auto__,c__6999__auto___20608,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_20604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20604[(0)] = state_machine__6944__auto__);

(statearr_20604[(1)] = (1));

return statearr_20604;
});
var state_machine__6944__auto____1 = (function (state_20520){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_20520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e20605){if((e20605 instanceof Object)){
var ex__6947__auto__ = e20605;
var statearr_20606_20663 = state_20520;
(statearr_20606_20663[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20664 = state_20520;
state_20520 = G__20664;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_20520){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_20520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___20608,cs,m,dchan,dctr,done))
})();
var state__7001__auto__ = (function (){var statearr_20607 = f__7000__auto__.call(null);
(statearr_20607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___20608);

return statearr_20607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___20608,cs,m,dchan,dctr,done))
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
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj20666 = {};
return obj20666;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3989__auto__ = m;
if(and__3989__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3989__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4645__auto__ = (((m == null))?null:m);
return (function (){var or__4001__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4645__auto__)]);
if(or__4001__auto__){
return or__4001__auto__;
} else {
var or__4001__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4001__auto____$1){
return or__4001__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3989__auto__ = m;
if(and__3989__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3989__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4645__auto__ = (((m == null))?null:m);
return (function (){var or__4001__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4645__auto__)]);
if(or__4001__auto__){
return or__4001__auto__;
} else {
var or__4001__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4001__auto____$1){
return or__4001__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3989__auto__ = m;
if(and__3989__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3989__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4645__auto__ = (((m == null))?null:m);
return (function (){var or__4001__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4645__auto__)]);
if(or__4001__auto__){
return or__4001__auto__;
} else {
var or__4001__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4001__auto____$1){
return or__4001__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3989__auto__ = m;
if(and__3989__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3989__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4645__auto__ = (((m == null))?null:m);
return (function (){var or__4001__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4645__auto__)]);
if(or__4001__auto__){
return or__4001__auto__;
} else {
var or__4001__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4001__auto____$1){
return or__4001__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3989__auto__ = m;
if(and__3989__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3989__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4645__auto__ = (((m == null))?null:m);
return (function (){var or__4001__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4645__auto__)]);
if(or__4001__auto__){
return or__4001__auto__;
} else {
var or__4001__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4001__auto____$1){
return or__4001__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20667){
var map__20672 = p__20667;
var map__20672__$1 = ((cljs.core.seq_QMARK_.call(null,map__20672))?cljs.core.apply.call(null,cljs.core.hash_map,map__20672):map__20672);
var opts = map__20672__$1;
var statearr_20673_20676 = state;
(statearr_20673_20676[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20672,map__20672__$1,opts){
return (function (val){
var statearr_20674_20677 = state;
(statearr_20674_20677[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20672,map__20672__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_20675_20678 = state;
(statearr_20675_20678[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20667 = null;
if (arguments.length > 3) {
var G__20679__i = 0, G__20679__a = new Array(arguments.length -  3);
while (G__20679__i < G__20679__a.length) {G__20679__a[G__20679__i] = arguments[G__20679__i + 3]; ++G__20679__i;}
  p__20667 = new cljs.core.IndexedSeq(G__20679__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20667);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20680){
var state = cljs.core.first(arglist__20680);
arglist__20680 = cljs.core.next(arglist__20680);
var cont_block = cljs.core.first(arglist__20680);
arglist__20680 = cljs.core.next(arglist__20680);
var ports = cljs.core.first(arglist__20680);
var p__20667 = cljs.core.rest(arglist__20680);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20667);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
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
cljs.core.async.mix = (function mix(out){
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
if(typeof cljs.core.async.t20800 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20800 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20801){
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
this.meta20801 = meta20801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20800.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20800.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20800.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20800.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20800.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20800.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t20800.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20800.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20802){
var self__ = this;
var _20802__$1 = this;
return self__.meta20801;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20802,meta20801__$1){
var self__ = this;
var _20802__$1 = this;
return (new cljs.core.async.t20800(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20801__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20800.cljs$lang$type = true;

cljs.core.async.t20800.cljs$lang$ctorStr = "cljs.core.async/t20800";

cljs.core.async.t20800.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4588__auto__,writer__4589__auto__,opt__4590__auto__){
return cljs.core._write.call(null,writer__4589__auto__,"cljs.core.async/t20800");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20800 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20800(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20801){
return (new cljs.core.async.t20800(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20801));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20800(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/gnzh/mydev/presentation-tool/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__6999__auto___20919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___20919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___20919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20872){
var state_val_20873 = (state_20872[(1)]);
if((state_val_20873 === (7))){
var inst_20816 = (state_20872[(7)]);
var inst_20821 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20816);
var state_20872__$1 = state_20872;
var statearr_20874_20920 = state_20872__$1;
(statearr_20874_20920[(2)] = inst_20821);

(statearr_20874_20920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (20))){
var inst_20831 = (state_20872[(8)]);
var state_20872__$1 = state_20872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20872__$1,(23),out,inst_20831);
} else {
if((state_val_20873 === (1))){
var inst_20806 = (state_20872[(9)]);
var inst_20806__$1 = calc_state.call(null);
var inst_20807 = cljs.core.seq_QMARK_.call(null,inst_20806__$1);
var state_20872__$1 = (function (){var statearr_20875 = state_20872;
(statearr_20875[(9)] = inst_20806__$1);

return statearr_20875;
})();
if(inst_20807){
var statearr_20876_20921 = state_20872__$1;
(statearr_20876_20921[(1)] = (2));

} else {
var statearr_20877_20922 = state_20872__$1;
(statearr_20877_20922[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (24))){
var inst_20824 = (state_20872[(10)]);
var inst_20816 = inst_20824;
var state_20872__$1 = (function (){var statearr_20878 = state_20872;
(statearr_20878[(7)] = inst_20816);

return statearr_20878;
})();
var statearr_20879_20923 = state_20872__$1;
(statearr_20879_20923[(2)] = null);

(statearr_20879_20923[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (4))){
var inst_20806 = (state_20872[(9)]);
var inst_20812 = (state_20872[(2)]);
var inst_20813 = cljs.core.get.call(null,inst_20812,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20814 = cljs.core.get.call(null,inst_20812,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20815 = cljs.core.get.call(null,inst_20812,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20816 = inst_20806;
var state_20872__$1 = (function (){var statearr_20880 = state_20872;
(statearr_20880[(11)] = inst_20813);

(statearr_20880[(7)] = inst_20816);

(statearr_20880[(12)] = inst_20815);

(statearr_20880[(13)] = inst_20814);

return statearr_20880;
})();
var statearr_20881_20924 = state_20872__$1;
(statearr_20881_20924[(2)] = null);

(statearr_20881_20924[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (15))){
var state_20872__$1 = state_20872;
var statearr_20882_20925 = state_20872__$1;
(statearr_20882_20925[(2)] = null);

(statearr_20882_20925[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (21))){
var inst_20824 = (state_20872[(10)]);
var inst_20816 = inst_20824;
var state_20872__$1 = (function (){var statearr_20883 = state_20872;
(statearr_20883[(7)] = inst_20816);

return statearr_20883;
})();
var statearr_20884_20926 = state_20872__$1;
(statearr_20884_20926[(2)] = null);

(statearr_20884_20926[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (13))){
var inst_20868 = (state_20872[(2)]);
var state_20872__$1 = state_20872;
var statearr_20885_20927 = state_20872__$1;
(statearr_20885_20927[(2)] = inst_20868);

(statearr_20885_20927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (22))){
var inst_20866 = (state_20872[(2)]);
var state_20872__$1 = state_20872;
var statearr_20886_20928 = state_20872__$1;
(statearr_20886_20928[(2)] = inst_20866);

(statearr_20886_20928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (6))){
var inst_20870 = (state_20872[(2)]);
var state_20872__$1 = state_20872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20872__$1,inst_20870);
} else {
if((state_val_20873 === (25))){
var state_20872__$1 = state_20872;
var statearr_20887_20929 = state_20872__$1;
(statearr_20887_20929[(2)] = null);

(statearr_20887_20929[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (17))){
var inst_20846 = (state_20872[(14)]);
var state_20872__$1 = state_20872;
var statearr_20888_20930 = state_20872__$1;
(statearr_20888_20930[(2)] = inst_20846);

(statearr_20888_20930[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (3))){
var inst_20806 = (state_20872[(9)]);
var state_20872__$1 = state_20872;
var statearr_20889_20931 = state_20872__$1;
(statearr_20889_20931[(2)] = inst_20806);

(statearr_20889_20931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (12))){
var inst_20846 = (state_20872[(14)]);
var inst_20832 = (state_20872[(15)]);
var inst_20827 = (state_20872[(16)]);
var inst_20846__$1 = inst_20827.call(null,inst_20832);
var state_20872__$1 = (function (){var statearr_20890 = state_20872;
(statearr_20890[(14)] = inst_20846__$1);

return statearr_20890;
})();
if(cljs.core.truth_(inst_20846__$1)){
var statearr_20891_20932 = state_20872__$1;
(statearr_20891_20932[(1)] = (17));

} else {
var statearr_20892_20933 = state_20872__$1;
(statearr_20892_20933[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (2))){
var inst_20806 = (state_20872[(9)]);
var inst_20809 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20806);
var state_20872__$1 = state_20872;
var statearr_20893_20934 = state_20872__$1;
(statearr_20893_20934[(2)] = inst_20809);

(statearr_20893_20934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (23))){
var inst_20857 = (state_20872[(2)]);
var state_20872__$1 = state_20872;
if(cljs.core.truth_(inst_20857)){
var statearr_20894_20935 = state_20872__$1;
(statearr_20894_20935[(1)] = (24));

} else {
var statearr_20895_20936 = state_20872__$1;
(statearr_20895_20936[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (19))){
var inst_20854 = (state_20872[(2)]);
var state_20872__$1 = state_20872;
if(cljs.core.truth_(inst_20854)){
var statearr_20896_20937 = state_20872__$1;
(statearr_20896_20937[(1)] = (20));

} else {
var statearr_20897_20938 = state_20872__$1;
(statearr_20897_20938[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (11))){
var inst_20831 = (state_20872[(8)]);
var inst_20837 = (inst_20831 == null);
var state_20872__$1 = state_20872;
if(cljs.core.truth_(inst_20837)){
var statearr_20898_20939 = state_20872__$1;
(statearr_20898_20939[(1)] = (14));

} else {
var statearr_20899_20940 = state_20872__$1;
(statearr_20899_20940[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (9))){
var inst_20824 = (state_20872[(10)]);
var inst_20824__$1 = (state_20872[(2)]);
var inst_20825 = cljs.core.get.call(null,inst_20824__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20826 = cljs.core.get.call(null,inst_20824__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20827 = cljs.core.get.call(null,inst_20824__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20872__$1 = (function (){var statearr_20900 = state_20872;
(statearr_20900[(10)] = inst_20824__$1);

(statearr_20900[(17)] = inst_20826);

(statearr_20900[(16)] = inst_20827);

return statearr_20900;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20872__$1,(10),inst_20825);
} else {
if((state_val_20873 === (5))){
var inst_20816 = (state_20872[(7)]);
var inst_20819 = cljs.core.seq_QMARK_.call(null,inst_20816);
var state_20872__$1 = state_20872;
if(inst_20819){
var statearr_20901_20941 = state_20872__$1;
(statearr_20901_20941[(1)] = (7));

} else {
var statearr_20902_20942 = state_20872__$1;
(statearr_20902_20942[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (14))){
var inst_20832 = (state_20872[(15)]);
var inst_20839 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20832);
var state_20872__$1 = state_20872;
var statearr_20903_20943 = state_20872__$1;
(statearr_20903_20943[(2)] = inst_20839);

(statearr_20903_20943[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (26))){
var inst_20862 = (state_20872[(2)]);
var state_20872__$1 = state_20872;
var statearr_20904_20944 = state_20872__$1;
(statearr_20904_20944[(2)] = inst_20862);

(statearr_20904_20944[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (16))){
var inst_20842 = (state_20872[(2)]);
var inst_20843 = calc_state.call(null);
var inst_20816 = inst_20843;
var state_20872__$1 = (function (){var statearr_20905 = state_20872;
(statearr_20905[(7)] = inst_20816);

(statearr_20905[(18)] = inst_20842);

return statearr_20905;
})();
var statearr_20906_20945 = state_20872__$1;
(statearr_20906_20945[(2)] = null);

(statearr_20906_20945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (10))){
var inst_20832 = (state_20872[(15)]);
var inst_20831 = (state_20872[(8)]);
var inst_20830 = (state_20872[(2)]);
var inst_20831__$1 = cljs.core.nth.call(null,inst_20830,(0),null);
var inst_20832__$1 = cljs.core.nth.call(null,inst_20830,(1),null);
var inst_20833 = (inst_20831__$1 == null);
var inst_20834 = cljs.core._EQ_.call(null,inst_20832__$1,change);
var inst_20835 = (inst_20833) || (inst_20834);
var state_20872__$1 = (function (){var statearr_20907 = state_20872;
(statearr_20907[(15)] = inst_20832__$1);

(statearr_20907[(8)] = inst_20831__$1);

return statearr_20907;
})();
if(cljs.core.truth_(inst_20835)){
var statearr_20908_20946 = state_20872__$1;
(statearr_20908_20946[(1)] = (11));

} else {
var statearr_20909_20947 = state_20872__$1;
(statearr_20909_20947[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (18))){
var inst_20832 = (state_20872[(15)]);
var inst_20826 = (state_20872[(17)]);
var inst_20827 = (state_20872[(16)]);
var inst_20849 = cljs.core.empty_QMARK_.call(null,inst_20827);
var inst_20850 = inst_20826.call(null,inst_20832);
var inst_20851 = cljs.core.not.call(null,inst_20850);
var inst_20852 = (inst_20849) && (inst_20851);
var state_20872__$1 = state_20872;
var statearr_20910_20948 = state_20872__$1;
(statearr_20910_20948[(2)] = inst_20852);

(statearr_20910_20948[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (8))){
var inst_20816 = (state_20872[(7)]);
var state_20872__$1 = state_20872;
var statearr_20911_20949 = state_20872__$1;
(statearr_20911_20949[(2)] = inst_20816);

(statearr_20911_20949[(1)] = (9));


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
});})(c__6999__auto___20919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6943__auto__,c__6999__auto___20919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_20915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20915[(0)] = state_machine__6944__auto__);

(statearr_20915[(1)] = (1));

return statearr_20915;
});
var state_machine__6944__auto____1 = (function (state_20872){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_20872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e20916){if((e20916 instanceof Object)){
var ex__6947__auto__ = e20916;
var statearr_20917_20950 = state_20872;
(statearr_20917_20950[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20951 = state_20872;
state_20872 = G__20951;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_20872){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_20872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___20919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7001__auto__ = (function (){var statearr_20918 = f__7000__auto__.call(null);
(statearr_20918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___20919);

return statearr_20918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___20919,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
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
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj20953 = {};
return obj20953;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3989__auto__ = p;
if(and__3989__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3989__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4645__auto__ = (((p == null))?null:p);
return (function (){var or__4001__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4645__auto__)]);
if(or__4001__auto__){
return or__4001__auto__;
} else {
var or__4001__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4001__auto____$1){
return or__4001__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3989__auto__ = p;
if(and__3989__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3989__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4645__auto__ = (((p == null))?null:p);
return (function (){var or__4001__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4645__auto__)]);
if(or__4001__auto__){
return or__4001__auto__;
} else {
var or__4001__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4001__auto____$1){
return or__4001__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3989__auto__ = p;
if(and__3989__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3989__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4645__auto__ = (((p == null))?null:p);
return (function (){var or__4001__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4645__auto__)]);
if(or__4001__auto__){
return or__4001__auto__;
} else {
var or__4001__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4001__auto____$1){
return or__4001__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3989__auto__ = p;
if(and__3989__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3989__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4645__auto__ = (((p == null))?null:p);
return (function (){var or__4001__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4645__auto__)]);
if(or__4001__auto__){
return or__4001__auto__;
} else {
var or__4001__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4001__auto____$1){
return or__4001__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
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
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4001__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4001__auto__)){
return or__4001__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4001__auto__,mults){
return (function (p1__20954_SHARP_){
if(cljs.core.truth_(p1__20954_SHARP_.call(null,topic))){
return p1__20954_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20954_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4001__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t21077 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21077 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21078){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21078 = meta21078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21077.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t21077.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t21077.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t21077.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t21077.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t21077.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t21077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21079){
var self__ = this;
var _21079__$1 = this;
return self__.meta21078;
});})(mults,ensure_mult))
;

cljs.core.async.t21077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21079,meta21078__$1){
var self__ = this;
var _21079__$1 = this;
return (new cljs.core.async.t21077(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21078__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t21077.cljs$lang$type = true;

cljs.core.async.t21077.cljs$lang$ctorStr = "cljs.core.async/t21077";

cljs.core.async.t21077.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4588__auto__,writer__4589__auto__,opt__4590__auto__){
return cljs.core._write.call(null,writer__4589__auto__,"cljs.core.async/t21077");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t21077 = ((function (mults,ensure_mult){
return (function __GT_t21077(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21078){
return (new cljs.core.async.t21077(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21078));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t21077(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/gnzh/mydev/presentation-tool/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
;
var c__6999__auto___21199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___21199,mults,ensure_mult,p){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___21199,mults,ensure_mult,p){
return (function (state_21151){
var state_val_21152 = (state_21151[(1)]);
if((state_val_21152 === (7))){
var inst_21147 = (state_21151[(2)]);
var state_21151__$1 = state_21151;
var statearr_21153_21200 = state_21151__$1;
(statearr_21153_21200[(2)] = inst_21147);

(statearr_21153_21200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (20))){
var state_21151__$1 = state_21151;
var statearr_21154_21201 = state_21151__$1;
(statearr_21154_21201[(2)] = null);

(statearr_21154_21201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (1))){
var state_21151__$1 = state_21151;
var statearr_21155_21202 = state_21151__$1;
(statearr_21155_21202[(2)] = null);

(statearr_21155_21202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (24))){
var inst_21130 = (state_21151[(7)]);
var inst_21139 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21130);
var state_21151__$1 = state_21151;
var statearr_21156_21203 = state_21151__$1;
(statearr_21156_21203[(2)] = inst_21139);

(statearr_21156_21203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (4))){
var inst_21082 = (state_21151[(8)]);
var inst_21082__$1 = (state_21151[(2)]);
var inst_21083 = (inst_21082__$1 == null);
var state_21151__$1 = (function (){var statearr_21157 = state_21151;
(statearr_21157[(8)] = inst_21082__$1);

return statearr_21157;
})();
if(cljs.core.truth_(inst_21083)){
var statearr_21158_21204 = state_21151__$1;
(statearr_21158_21204[(1)] = (5));

} else {
var statearr_21159_21205 = state_21151__$1;
(statearr_21159_21205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (15))){
var inst_21124 = (state_21151[(2)]);
var state_21151__$1 = state_21151;
var statearr_21160_21206 = state_21151__$1;
(statearr_21160_21206[(2)] = inst_21124);

(statearr_21160_21206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (21))){
var inst_21144 = (state_21151[(2)]);
var state_21151__$1 = (function (){var statearr_21161 = state_21151;
(statearr_21161[(9)] = inst_21144);

return statearr_21161;
})();
var statearr_21162_21207 = state_21151__$1;
(statearr_21162_21207[(2)] = null);

(statearr_21162_21207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (13))){
var inst_21106 = (state_21151[(10)]);
var inst_21108 = cljs.core.chunked_seq_QMARK_.call(null,inst_21106);
var state_21151__$1 = state_21151;
if(inst_21108){
var statearr_21163_21208 = state_21151__$1;
(statearr_21163_21208[(1)] = (16));

} else {
var statearr_21164_21209 = state_21151__$1;
(statearr_21164_21209[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (22))){
var inst_21136 = (state_21151[(2)]);
var state_21151__$1 = state_21151;
if(cljs.core.truth_(inst_21136)){
var statearr_21165_21210 = state_21151__$1;
(statearr_21165_21210[(1)] = (23));

} else {
var statearr_21166_21211 = state_21151__$1;
(statearr_21166_21211[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (6))){
var inst_21082 = (state_21151[(8)]);
var inst_21132 = (state_21151[(11)]);
var inst_21130 = (state_21151[(7)]);
var inst_21130__$1 = topic_fn.call(null,inst_21082);
var inst_21131 = cljs.core.deref.call(null,mults);
var inst_21132__$1 = cljs.core.get.call(null,inst_21131,inst_21130__$1);
var state_21151__$1 = (function (){var statearr_21167 = state_21151;
(statearr_21167[(11)] = inst_21132__$1);

(statearr_21167[(7)] = inst_21130__$1);

return statearr_21167;
})();
if(cljs.core.truth_(inst_21132__$1)){
var statearr_21168_21212 = state_21151__$1;
(statearr_21168_21212[(1)] = (19));

} else {
var statearr_21169_21213 = state_21151__$1;
(statearr_21169_21213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (25))){
var inst_21141 = (state_21151[(2)]);
var state_21151__$1 = state_21151;
var statearr_21170_21214 = state_21151__$1;
(statearr_21170_21214[(2)] = inst_21141);

(statearr_21170_21214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (17))){
var inst_21106 = (state_21151[(10)]);
var inst_21115 = cljs.core.first.call(null,inst_21106);
var inst_21116 = cljs.core.async.muxch_STAR_.call(null,inst_21115);
var inst_21117 = cljs.core.async.close_BANG_.call(null,inst_21116);
var inst_21118 = cljs.core.next.call(null,inst_21106);
var inst_21092 = inst_21118;
var inst_21093 = null;
var inst_21094 = (0);
var inst_21095 = (0);
var state_21151__$1 = (function (){var statearr_21171 = state_21151;
(statearr_21171[(12)] = inst_21094);

(statearr_21171[(13)] = inst_21095);

(statearr_21171[(14)] = inst_21092);

(statearr_21171[(15)] = inst_21093);

(statearr_21171[(16)] = inst_21117);

return statearr_21171;
})();
var statearr_21172_21215 = state_21151__$1;
(statearr_21172_21215[(2)] = null);

(statearr_21172_21215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (3))){
var inst_21149 = (state_21151[(2)]);
var state_21151__$1 = state_21151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21151__$1,inst_21149);
} else {
if((state_val_21152 === (12))){
var inst_21126 = (state_21151[(2)]);
var state_21151__$1 = state_21151;
var statearr_21173_21216 = state_21151__$1;
(statearr_21173_21216[(2)] = inst_21126);

(statearr_21173_21216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (2))){
var state_21151__$1 = state_21151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21151__$1,(4),ch);
} else {
if((state_val_21152 === (23))){
var state_21151__$1 = state_21151;
var statearr_21174_21217 = state_21151__$1;
(statearr_21174_21217[(2)] = null);

(statearr_21174_21217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (19))){
var inst_21082 = (state_21151[(8)]);
var inst_21132 = (state_21151[(11)]);
var inst_21134 = cljs.core.async.muxch_STAR_.call(null,inst_21132);
var state_21151__$1 = state_21151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21151__$1,(22),inst_21134,inst_21082);
} else {
if((state_val_21152 === (11))){
var inst_21092 = (state_21151[(14)]);
var inst_21106 = (state_21151[(10)]);
var inst_21106__$1 = cljs.core.seq.call(null,inst_21092);
var state_21151__$1 = (function (){var statearr_21175 = state_21151;
(statearr_21175[(10)] = inst_21106__$1);

return statearr_21175;
})();
if(inst_21106__$1){
var statearr_21176_21218 = state_21151__$1;
(statearr_21176_21218[(1)] = (13));

} else {
var statearr_21177_21219 = state_21151__$1;
(statearr_21177_21219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (9))){
var inst_21128 = (state_21151[(2)]);
var state_21151__$1 = state_21151;
var statearr_21178_21220 = state_21151__$1;
(statearr_21178_21220[(2)] = inst_21128);

(statearr_21178_21220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (5))){
var inst_21089 = cljs.core.deref.call(null,mults);
var inst_21090 = cljs.core.vals.call(null,inst_21089);
var inst_21091 = cljs.core.seq.call(null,inst_21090);
var inst_21092 = inst_21091;
var inst_21093 = null;
var inst_21094 = (0);
var inst_21095 = (0);
var state_21151__$1 = (function (){var statearr_21179 = state_21151;
(statearr_21179[(12)] = inst_21094);

(statearr_21179[(13)] = inst_21095);

(statearr_21179[(14)] = inst_21092);

(statearr_21179[(15)] = inst_21093);

return statearr_21179;
})();
var statearr_21180_21221 = state_21151__$1;
(statearr_21180_21221[(2)] = null);

(statearr_21180_21221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (14))){
var state_21151__$1 = state_21151;
var statearr_21184_21222 = state_21151__$1;
(statearr_21184_21222[(2)] = null);

(statearr_21184_21222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (16))){
var inst_21106 = (state_21151[(10)]);
var inst_21110 = cljs.core.chunk_first.call(null,inst_21106);
var inst_21111 = cljs.core.chunk_rest.call(null,inst_21106);
var inst_21112 = cljs.core.count.call(null,inst_21110);
var inst_21092 = inst_21111;
var inst_21093 = inst_21110;
var inst_21094 = inst_21112;
var inst_21095 = (0);
var state_21151__$1 = (function (){var statearr_21185 = state_21151;
(statearr_21185[(12)] = inst_21094);

(statearr_21185[(13)] = inst_21095);

(statearr_21185[(14)] = inst_21092);

(statearr_21185[(15)] = inst_21093);

return statearr_21185;
})();
var statearr_21186_21223 = state_21151__$1;
(statearr_21186_21223[(2)] = null);

(statearr_21186_21223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (10))){
var inst_21094 = (state_21151[(12)]);
var inst_21095 = (state_21151[(13)]);
var inst_21092 = (state_21151[(14)]);
var inst_21093 = (state_21151[(15)]);
var inst_21100 = cljs.core._nth.call(null,inst_21093,inst_21095);
var inst_21101 = cljs.core.async.muxch_STAR_.call(null,inst_21100);
var inst_21102 = cljs.core.async.close_BANG_.call(null,inst_21101);
var inst_21103 = (inst_21095 + (1));
var tmp21181 = inst_21094;
var tmp21182 = inst_21092;
var tmp21183 = inst_21093;
var inst_21092__$1 = tmp21182;
var inst_21093__$1 = tmp21183;
var inst_21094__$1 = tmp21181;
var inst_21095__$1 = inst_21103;
var state_21151__$1 = (function (){var statearr_21187 = state_21151;
(statearr_21187[(17)] = inst_21102);

(statearr_21187[(12)] = inst_21094__$1);

(statearr_21187[(13)] = inst_21095__$1);

(statearr_21187[(14)] = inst_21092__$1);

(statearr_21187[(15)] = inst_21093__$1);

return statearr_21187;
})();
var statearr_21188_21224 = state_21151__$1;
(statearr_21188_21224[(2)] = null);

(statearr_21188_21224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (18))){
var inst_21121 = (state_21151[(2)]);
var state_21151__$1 = state_21151;
var statearr_21189_21225 = state_21151__$1;
(statearr_21189_21225[(2)] = inst_21121);

(statearr_21189_21225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21152 === (8))){
var inst_21094 = (state_21151[(12)]);
var inst_21095 = (state_21151[(13)]);
var inst_21097 = (inst_21095 < inst_21094);
var inst_21098 = inst_21097;
var state_21151__$1 = state_21151;
if(cljs.core.truth_(inst_21098)){
var statearr_21190_21226 = state_21151__$1;
(statearr_21190_21226[(1)] = (10));

} else {
var statearr_21191_21227 = state_21151__$1;
(statearr_21191_21227[(1)] = (11));

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
});})(c__6999__auto___21199,mults,ensure_mult,p))
;
return ((function (switch__6943__auto__,c__6999__auto___21199,mults,ensure_mult,p){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_21195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21195[(0)] = state_machine__6944__auto__);

(statearr_21195[(1)] = (1));

return statearr_21195;
});
var state_machine__6944__auto____1 = (function (state_21151){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_21151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e21196){if((e21196 instanceof Object)){
var ex__6947__auto__ = e21196;
var statearr_21197_21228 = state_21151;
(statearr_21197_21228[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21229 = state_21151;
state_21151 = G__21229;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_21151){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_21151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___21199,mults,ensure_mult,p))
})();
var state__7001__auto__ = (function (){var statearr_21198 = f__7000__auto__.call(null);
(statearr_21198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___21199);

return statearr_21198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___21199,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
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
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
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
var c__6999__auto___21366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___21366,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___21366,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21336){
var state_val_21337 = (state_21336[(1)]);
if((state_val_21337 === (7))){
var state_21336__$1 = state_21336;
var statearr_21338_21367 = state_21336__$1;
(statearr_21338_21367[(2)] = null);

(statearr_21338_21367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (1))){
var state_21336__$1 = state_21336;
var statearr_21339_21368 = state_21336__$1;
(statearr_21339_21368[(2)] = null);

(statearr_21339_21368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (4))){
var inst_21300 = (state_21336[(7)]);
var inst_21302 = (inst_21300 < cnt);
var state_21336__$1 = state_21336;
if(cljs.core.truth_(inst_21302)){
var statearr_21340_21369 = state_21336__$1;
(statearr_21340_21369[(1)] = (6));

} else {
var statearr_21341_21370 = state_21336__$1;
(statearr_21341_21370[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (15))){
var inst_21332 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21342_21371 = state_21336__$1;
(statearr_21342_21371[(2)] = inst_21332);

(statearr_21342_21371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (13))){
var inst_21325 = cljs.core.async.close_BANG_.call(null,out);
var state_21336__$1 = state_21336;
var statearr_21343_21372 = state_21336__$1;
(statearr_21343_21372[(2)] = inst_21325);

(statearr_21343_21372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (6))){
var state_21336__$1 = state_21336;
var statearr_21344_21373 = state_21336__$1;
(statearr_21344_21373[(2)] = null);

(statearr_21344_21373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (3))){
var inst_21334 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21336__$1,inst_21334);
} else {
if((state_val_21337 === (12))){
var inst_21322 = (state_21336[(8)]);
var inst_21322__$1 = (state_21336[(2)]);
var inst_21323 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21322__$1);
var state_21336__$1 = (function (){var statearr_21345 = state_21336;
(statearr_21345[(8)] = inst_21322__$1);

return statearr_21345;
})();
if(cljs.core.truth_(inst_21323)){
var statearr_21346_21374 = state_21336__$1;
(statearr_21346_21374[(1)] = (13));

} else {
var statearr_21347_21375 = state_21336__$1;
(statearr_21347_21375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (2))){
var inst_21299 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21300 = (0);
var state_21336__$1 = (function (){var statearr_21348 = state_21336;
(statearr_21348[(7)] = inst_21300);

(statearr_21348[(9)] = inst_21299);

return statearr_21348;
})();
var statearr_21349_21376 = state_21336__$1;
(statearr_21349_21376[(2)] = null);

(statearr_21349_21376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (11))){
var inst_21300 = (state_21336[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21336,(10),Object,null,(9));
var inst_21309 = chs__$1.call(null,inst_21300);
var inst_21310 = done.call(null,inst_21300);
var inst_21311 = cljs.core.async.take_BANG_.call(null,inst_21309,inst_21310);
var state_21336__$1 = state_21336;
var statearr_21350_21377 = state_21336__$1;
(statearr_21350_21377[(2)] = inst_21311);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21336__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (9))){
var inst_21300 = (state_21336[(7)]);
var inst_21313 = (state_21336[(2)]);
var inst_21314 = (inst_21300 + (1));
var inst_21300__$1 = inst_21314;
var state_21336__$1 = (function (){var statearr_21351 = state_21336;
(statearr_21351[(10)] = inst_21313);

(statearr_21351[(7)] = inst_21300__$1);

return statearr_21351;
})();
var statearr_21352_21378 = state_21336__$1;
(statearr_21352_21378[(2)] = null);

(statearr_21352_21378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (5))){
var inst_21320 = (state_21336[(2)]);
var state_21336__$1 = (function (){var statearr_21353 = state_21336;
(statearr_21353[(11)] = inst_21320);

return statearr_21353;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21336__$1,(12),dchan);
} else {
if((state_val_21337 === (14))){
var inst_21322 = (state_21336[(8)]);
var inst_21327 = cljs.core.apply.call(null,f,inst_21322);
var state_21336__$1 = state_21336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21336__$1,(16),out,inst_21327);
} else {
if((state_val_21337 === (16))){
var inst_21329 = (state_21336[(2)]);
var state_21336__$1 = (function (){var statearr_21354 = state_21336;
(statearr_21354[(12)] = inst_21329);

return statearr_21354;
})();
var statearr_21355_21379 = state_21336__$1;
(statearr_21355_21379[(2)] = null);

(statearr_21355_21379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (10))){
var inst_21304 = (state_21336[(2)]);
var inst_21305 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21336__$1 = (function (){var statearr_21356 = state_21336;
(statearr_21356[(13)] = inst_21304);

return statearr_21356;
})();
var statearr_21357_21380 = state_21336__$1;
(statearr_21357_21380[(2)] = inst_21305);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21336__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21337 === (8))){
var inst_21318 = (state_21336[(2)]);
var state_21336__$1 = state_21336;
var statearr_21358_21381 = state_21336__$1;
(statearr_21358_21381[(2)] = inst_21318);

(statearr_21358_21381[(1)] = (5));


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
});})(c__6999__auto___21366,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6943__auto__,c__6999__auto___21366,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_21362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21362[(0)] = state_machine__6944__auto__);

(statearr_21362[(1)] = (1));

return statearr_21362;
});
var state_machine__6944__auto____1 = (function (state_21336){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_21336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e21363){if((e21363 instanceof Object)){
var ex__6947__auto__ = e21363;
var statearr_21364_21382 = state_21336;
(statearr_21364_21382[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21383 = state_21336;
state_21336 = G__21383;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_21336){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_21336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___21366,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7001__auto__ = (function (){var statearr_21365 = f__7000__auto__.call(null);
(statearr_21365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___21366);

return statearr_21365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___21366,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6999__auto___21491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___21491,out){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___21491,out){
return (function (state_21467){
var state_val_21468 = (state_21467[(1)]);
if((state_val_21468 === (7))){
var inst_21446 = (state_21467[(7)]);
var inst_21447 = (state_21467[(8)]);
var inst_21446__$1 = (state_21467[(2)]);
var inst_21447__$1 = cljs.core.nth.call(null,inst_21446__$1,(0),null);
var inst_21448 = cljs.core.nth.call(null,inst_21446__$1,(1),null);
var inst_21449 = (inst_21447__$1 == null);
var state_21467__$1 = (function (){var statearr_21469 = state_21467;
(statearr_21469[(7)] = inst_21446__$1);

(statearr_21469[(8)] = inst_21447__$1);

(statearr_21469[(9)] = inst_21448);

return statearr_21469;
})();
if(cljs.core.truth_(inst_21449)){
var statearr_21470_21492 = state_21467__$1;
(statearr_21470_21492[(1)] = (8));

} else {
var statearr_21471_21493 = state_21467__$1;
(statearr_21471_21493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (1))){
var inst_21438 = cljs.core.vec.call(null,chs);
var inst_21439 = inst_21438;
var state_21467__$1 = (function (){var statearr_21472 = state_21467;
(statearr_21472[(10)] = inst_21439);

return statearr_21472;
})();
var statearr_21473_21494 = state_21467__$1;
(statearr_21473_21494[(2)] = null);

(statearr_21473_21494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (4))){
var inst_21439 = (state_21467[(10)]);
var state_21467__$1 = state_21467;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21467__$1,(7),inst_21439);
} else {
if((state_val_21468 === (6))){
var inst_21463 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
var statearr_21474_21495 = state_21467__$1;
(statearr_21474_21495[(2)] = inst_21463);

(statearr_21474_21495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (3))){
var inst_21465 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21467__$1,inst_21465);
} else {
if((state_val_21468 === (2))){
var inst_21439 = (state_21467[(10)]);
var inst_21441 = cljs.core.count.call(null,inst_21439);
var inst_21442 = (inst_21441 > (0));
var state_21467__$1 = state_21467;
if(cljs.core.truth_(inst_21442)){
var statearr_21476_21496 = state_21467__$1;
(statearr_21476_21496[(1)] = (4));

} else {
var statearr_21477_21497 = state_21467__$1;
(statearr_21477_21497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (11))){
var inst_21439 = (state_21467[(10)]);
var inst_21456 = (state_21467[(2)]);
var tmp21475 = inst_21439;
var inst_21439__$1 = tmp21475;
var state_21467__$1 = (function (){var statearr_21478 = state_21467;
(statearr_21478[(10)] = inst_21439__$1);

(statearr_21478[(11)] = inst_21456);

return statearr_21478;
})();
var statearr_21479_21498 = state_21467__$1;
(statearr_21479_21498[(2)] = null);

(statearr_21479_21498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (9))){
var inst_21447 = (state_21467[(8)]);
var state_21467__$1 = state_21467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21467__$1,(11),out,inst_21447);
} else {
if((state_val_21468 === (5))){
var inst_21461 = cljs.core.async.close_BANG_.call(null,out);
var state_21467__$1 = state_21467;
var statearr_21480_21499 = state_21467__$1;
(statearr_21480_21499[(2)] = inst_21461);

(statearr_21480_21499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (10))){
var inst_21459 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
var statearr_21481_21500 = state_21467__$1;
(statearr_21481_21500[(2)] = inst_21459);

(statearr_21481_21500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (8))){
var inst_21439 = (state_21467[(10)]);
var inst_21446 = (state_21467[(7)]);
var inst_21447 = (state_21467[(8)]);
var inst_21448 = (state_21467[(9)]);
var inst_21451 = (function (){var c = inst_21448;
var v = inst_21447;
var vec__21444 = inst_21446;
var cs = inst_21439;
return ((function (c,v,vec__21444,cs,inst_21439,inst_21446,inst_21447,inst_21448,state_val_21468,c__6999__auto___21491,out){
return (function (p1__21384_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21384_SHARP_);
});
;})(c,v,vec__21444,cs,inst_21439,inst_21446,inst_21447,inst_21448,state_val_21468,c__6999__auto___21491,out))
})();
var inst_21452 = cljs.core.filterv.call(null,inst_21451,inst_21439);
var inst_21439__$1 = inst_21452;
var state_21467__$1 = (function (){var statearr_21482 = state_21467;
(statearr_21482[(10)] = inst_21439__$1);

return statearr_21482;
})();
var statearr_21483_21501 = state_21467__$1;
(statearr_21483_21501[(2)] = null);

(statearr_21483_21501[(1)] = (2));


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
});})(c__6999__auto___21491,out))
;
return ((function (switch__6943__auto__,c__6999__auto___21491,out){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_21487 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21487[(0)] = state_machine__6944__auto__);

(statearr_21487[(1)] = (1));

return statearr_21487;
});
var state_machine__6944__auto____1 = (function (state_21467){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_21467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e21488){if((e21488 instanceof Object)){
var ex__6947__auto__ = e21488;
var statearr_21489_21502 = state_21467;
(statearr_21489_21502[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21503 = state_21467;
state_21467 = G__21503;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_21467){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_21467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___21491,out))
})();
var state__7001__auto__ = (function (){var statearr_21490 = f__7000__auto__.call(null);
(statearr_21490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___21491);

return statearr_21490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___21491,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6999__auto___21596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___21596,out){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___21596,out){
return (function (state_21573){
var state_val_21574 = (state_21573[(1)]);
if((state_val_21574 === (7))){
var inst_21555 = (state_21573[(7)]);
var inst_21555__$1 = (state_21573[(2)]);
var inst_21556 = (inst_21555__$1 == null);
var inst_21557 = cljs.core.not.call(null,inst_21556);
var state_21573__$1 = (function (){var statearr_21575 = state_21573;
(statearr_21575[(7)] = inst_21555__$1);

return statearr_21575;
})();
if(inst_21557){
var statearr_21576_21597 = state_21573__$1;
(statearr_21576_21597[(1)] = (8));

} else {
var statearr_21577_21598 = state_21573__$1;
(statearr_21577_21598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (1))){
var inst_21550 = (0);
var state_21573__$1 = (function (){var statearr_21578 = state_21573;
(statearr_21578[(8)] = inst_21550);

return statearr_21578;
})();
var statearr_21579_21599 = state_21573__$1;
(statearr_21579_21599[(2)] = null);

(statearr_21579_21599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (4))){
var state_21573__$1 = state_21573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21573__$1,(7),ch);
} else {
if((state_val_21574 === (6))){
var inst_21568 = (state_21573[(2)]);
var state_21573__$1 = state_21573;
var statearr_21580_21600 = state_21573__$1;
(statearr_21580_21600[(2)] = inst_21568);

(statearr_21580_21600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (3))){
var inst_21570 = (state_21573[(2)]);
var inst_21571 = cljs.core.async.close_BANG_.call(null,out);
var state_21573__$1 = (function (){var statearr_21581 = state_21573;
(statearr_21581[(9)] = inst_21570);

return statearr_21581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21573__$1,inst_21571);
} else {
if((state_val_21574 === (2))){
var inst_21550 = (state_21573[(8)]);
var inst_21552 = (inst_21550 < n);
var state_21573__$1 = state_21573;
if(cljs.core.truth_(inst_21552)){
var statearr_21582_21601 = state_21573__$1;
(statearr_21582_21601[(1)] = (4));

} else {
var statearr_21583_21602 = state_21573__$1;
(statearr_21583_21602[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (11))){
var inst_21550 = (state_21573[(8)]);
var inst_21560 = (state_21573[(2)]);
var inst_21561 = (inst_21550 + (1));
var inst_21550__$1 = inst_21561;
var state_21573__$1 = (function (){var statearr_21584 = state_21573;
(statearr_21584[(10)] = inst_21560);

(statearr_21584[(8)] = inst_21550__$1);

return statearr_21584;
})();
var statearr_21585_21603 = state_21573__$1;
(statearr_21585_21603[(2)] = null);

(statearr_21585_21603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (9))){
var state_21573__$1 = state_21573;
var statearr_21586_21604 = state_21573__$1;
(statearr_21586_21604[(2)] = null);

(statearr_21586_21604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (5))){
var state_21573__$1 = state_21573;
var statearr_21587_21605 = state_21573__$1;
(statearr_21587_21605[(2)] = null);

(statearr_21587_21605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (10))){
var inst_21565 = (state_21573[(2)]);
var state_21573__$1 = state_21573;
var statearr_21588_21606 = state_21573__$1;
(statearr_21588_21606[(2)] = inst_21565);

(statearr_21588_21606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21574 === (8))){
var inst_21555 = (state_21573[(7)]);
var state_21573__$1 = state_21573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21573__$1,(11),out,inst_21555);
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
});})(c__6999__auto___21596,out))
;
return ((function (switch__6943__auto__,c__6999__auto___21596,out){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_21592 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21592[(0)] = state_machine__6944__auto__);

(statearr_21592[(1)] = (1));

return statearr_21592;
});
var state_machine__6944__auto____1 = (function (state_21573){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_21573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e21593){if((e21593 instanceof Object)){
var ex__6947__auto__ = e21593;
var statearr_21594_21607 = state_21573;
(statearr_21594_21607[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21608 = state_21573;
state_21573 = G__21608;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_21573){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_21573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___21596,out))
})();
var state__7001__auto__ = (function (){var statearr_21595 = f__7000__auto__.call(null);
(statearr_21595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___21596);

return statearr_21595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___21596,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t21616 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21616 = (function (ch,f,map_LT_,meta21617){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21617 = meta21617;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21616.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21616.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t21616.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21616.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t21619 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21619 = (function (fn1,_,meta21617,map_LT_,f,ch,meta21620){
this.fn1 = fn1;
this._ = _;
this.meta21617 = meta21617;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21620 = meta21620;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21619.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21619.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t21619.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21609_SHARP_){
return f1.call(null,(((p1__21609_SHARP_ == null))?null:self__.f.call(null,p1__21609_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21619.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21621){
var self__ = this;
var _21621__$1 = this;
return self__.meta21620;
});})(___$1))
;

cljs.core.async.t21619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21621,meta21620__$1){
var self__ = this;
var _21621__$1 = this;
return (new cljs.core.async.t21619(self__.fn1,self__._,self__.meta21617,self__.map_LT_,self__.f,self__.ch,meta21620__$1));
});})(___$1))
;

cljs.core.async.t21619.cljs$lang$type = true;

cljs.core.async.t21619.cljs$lang$ctorStr = "cljs.core.async/t21619";

cljs.core.async.t21619.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4588__auto__,writer__4589__auto__,opt__4590__auto__){
return cljs.core._write.call(null,writer__4589__auto__,"cljs.core.async/t21619");
});})(___$1))
;

cljs.core.async.__GT_t21619 = ((function (___$1){
return (function __GT_t21619(fn1__$1,___$2,meta21617__$1,map_LT___$1,f__$1,ch__$1,meta21620){
return (new cljs.core.async.t21619(fn1__$1,___$2,meta21617__$1,map_LT___$1,f__$1,ch__$1,meta21620));
});})(___$1))
;

}

return (new cljs.core.async.t21619(fn1,___$1,self__.meta21617,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/gnzh/mydev/presentation-tool/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3989__auto__ = ret;
if(cljs.core.truth_(and__3989__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3989__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t21616.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21616.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21616.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21618){
var self__ = this;
var _21618__$1 = this;
return self__.meta21617;
});

cljs.core.async.t21616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21618,meta21617__$1){
var self__ = this;
var _21618__$1 = this;
return (new cljs.core.async.t21616(self__.ch,self__.f,self__.map_LT_,meta21617__$1));
});

cljs.core.async.t21616.cljs$lang$type = true;

cljs.core.async.t21616.cljs$lang$ctorStr = "cljs.core.async/t21616";

cljs.core.async.t21616.cljs$lang$ctorPrWriter = (function (this__4588__auto__,writer__4589__auto__,opt__4590__auto__){
return cljs.core._write.call(null,writer__4589__auto__,"cljs.core.async/t21616");
});

cljs.core.async.__GT_t21616 = (function __GT_t21616(ch__$1,f__$1,map_LT___$1,meta21617){
return (new cljs.core.async.t21616(ch__$1,f__$1,map_LT___$1,meta21617));
});

}

return (new cljs.core.async.t21616(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/gnzh/mydev/presentation-tool/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t21625 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21625 = (function (ch,f,map_GT_,meta21626){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21626 = meta21626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21625.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21625.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t21625.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21625.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21625.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21625.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21627){
var self__ = this;
var _21627__$1 = this;
return self__.meta21626;
});

cljs.core.async.t21625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21627,meta21626__$1){
var self__ = this;
var _21627__$1 = this;
return (new cljs.core.async.t21625(self__.ch,self__.f,self__.map_GT_,meta21626__$1));
});

cljs.core.async.t21625.cljs$lang$type = true;

cljs.core.async.t21625.cljs$lang$ctorStr = "cljs.core.async/t21625";

cljs.core.async.t21625.cljs$lang$ctorPrWriter = (function (this__4588__auto__,writer__4589__auto__,opt__4590__auto__){
return cljs.core._write.call(null,writer__4589__auto__,"cljs.core.async/t21625");
});

cljs.core.async.__GT_t21625 = (function __GT_t21625(ch__$1,f__$1,map_GT___$1,meta21626){
return (new cljs.core.async.t21625(ch__$1,f__$1,map_GT___$1,meta21626));
});

}

return (new cljs.core.async.t21625(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/gnzh/mydev/presentation-tool/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t21631 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21631 = (function (ch,p,filter_GT_,meta21632){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21632 = meta21632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21631.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21631.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t21631.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21631.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21631.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21631.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21631.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21633){
var self__ = this;
var _21633__$1 = this;
return self__.meta21632;
});

cljs.core.async.t21631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21633,meta21632__$1){
var self__ = this;
var _21633__$1 = this;
return (new cljs.core.async.t21631(self__.ch,self__.p,self__.filter_GT_,meta21632__$1));
});

cljs.core.async.t21631.cljs$lang$type = true;

cljs.core.async.t21631.cljs$lang$ctorStr = "cljs.core.async/t21631";

cljs.core.async.t21631.cljs$lang$ctorPrWriter = (function (this__4588__auto__,writer__4589__auto__,opt__4590__auto__){
return cljs.core._write.call(null,writer__4589__auto__,"cljs.core.async/t21631");
});

cljs.core.async.__GT_t21631 = (function __GT_t21631(ch__$1,p__$1,filter_GT___$1,meta21632){
return (new cljs.core.async.t21631(ch__$1,p__$1,filter_GT___$1,meta21632));
});

}

return (new cljs.core.async.t21631(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/gnzh/mydev/presentation-tool/resources/public/js/compiled/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6999__auto___21716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___21716,out){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___21716,out){
return (function (state_21695){
var state_val_21696 = (state_21695[(1)]);
if((state_val_21696 === (7))){
var inst_21691 = (state_21695[(2)]);
var state_21695__$1 = state_21695;
var statearr_21697_21717 = state_21695__$1;
(statearr_21697_21717[(2)] = inst_21691);

(statearr_21697_21717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (1))){
var state_21695__$1 = state_21695;
var statearr_21698_21718 = state_21695__$1;
(statearr_21698_21718[(2)] = null);

(statearr_21698_21718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (4))){
var inst_21677 = (state_21695[(7)]);
var inst_21677__$1 = (state_21695[(2)]);
var inst_21678 = (inst_21677__$1 == null);
var state_21695__$1 = (function (){var statearr_21699 = state_21695;
(statearr_21699[(7)] = inst_21677__$1);

return statearr_21699;
})();
if(cljs.core.truth_(inst_21678)){
var statearr_21700_21719 = state_21695__$1;
(statearr_21700_21719[(1)] = (5));

} else {
var statearr_21701_21720 = state_21695__$1;
(statearr_21701_21720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (6))){
var inst_21677 = (state_21695[(7)]);
var inst_21682 = p.call(null,inst_21677);
var state_21695__$1 = state_21695;
if(cljs.core.truth_(inst_21682)){
var statearr_21702_21721 = state_21695__$1;
(statearr_21702_21721[(1)] = (8));

} else {
var statearr_21703_21722 = state_21695__$1;
(statearr_21703_21722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (3))){
var inst_21693 = (state_21695[(2)]);
var state_21695__$1 = state_21695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21695__$1,inst_21693);
} else {
if((state_val_21696 === (2))){
var state_21695__$1 = state_21695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21695__$1,(4),ch);
} else {
if((state_val_21696 === (11))){
var inst_21685 = (state_21695[(2)]);
var state_21695__$1 = state_21695;
var statearr_21704_21723 = state_21695__$1;
(statearr_21704_21723[(2)] = inst_21685);

(statearr_21704_21723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (9))){
var state_21695__$1 = state_21695;
var statearr_21705_21724 = state_21695__$1;
(statearr_21705_21724[(2)] = null);

(statearr_21705_21724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (5))){
var inst_21680 = cljs.core.async.close_BANG_.call(null,out);
var state_21695__$1 = state_21695;
var statearr_21706_21725 = state_21695__$1;
(statearr_21706_21725[(2)] = inst_21680);

(statearr_21706_21725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (10))){
var inst_21688 = (state_21695[(2)]);
var state_21695__$1 = (function (){var statearr_21707 = state_21695;
(statearr_21707[(8)] = inst_21688);

return statearr_21707;
})();
var statearr_21708_21726 = state_21695__$1;
(statearr_21708_21726[(2)] = null);

(statearr_21708_21726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21696 === (8))){
var inst_21677 = (state_21695[(7)]);
var state_21695__$1 = state_21695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21695__$1,(11),out,inst_21677);
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
});})(c__6999__auto___21716,out))
;
return ((function (switch__6943__auto__,c__6999__auto___21716,out){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_21712 = [null,null,null,null,null,null,null,null,null];
(statearr_21712[(0)] = state_machine__6944__auto__);

(statearr_21712[(1)] = (1));

return statearr_21712;
});
var state_machine__6944__auto____1 = (function (state_21695){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_21695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e21713){if((e21713 instanceof Object)){
var ex__6947__auto__ = e21713;
var statearr_21714_21727 = state_21695;
(statearr_21714_21727[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21728 = state_21695;
state_21695 = G__21728;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_21695){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_21695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___21716,out))
})();
var state__7001__auto__ = (function (){var statearr_21715 = f__7000__auto__.call(null);
(statearr_21715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___21716);

return statearr_21715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___21716,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto__){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto__){
return (function (state_21894){
var state_val_21895 = (state_21894[(1)]);
if((state_val_21895 === (7))){
var inst_21890 = (state_21894[(2)]);
var state_21894__$1 = state_21894;
var statearr_21896_21937 = state_21894__$1;
(statearr_21896_21937[(2)] = inst_21890);

(statearr_21896_21937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (20))){
var inst_21860 = (state_21894[(7)]);
var inst_21871 = (state_21894[(2)]);
var inst_21872 = cljs.core.next.call(null,inst_21860);
var inst_21846 = inst_21872;
var inst_21847 = null;
var inst_21848 = (0);
var inst_21849 = (0);
var state_21894__$1 = (function (){var statearr_21897 = state_21894;
(statearr_21897[(8)] = inst_21846);

(statearr_21897[(9)] = inst_21847);

(statearr_21897[(10)] = inst_21871);

(statearr_21897[(11)] = inst_21848);

(statearr_21897[(12)] = inst_21849);

return statearr_21897;
})();
var statearr_21898_21938 = state_21894__$1;
(statearr_21898_21938[(2)] = null);

(statearr_21898_21938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (1))){
var state_21894__$1 = state_21894;
var statearr_21899_21939 = state_21894__$1;
(statearr_21899_21939[(2)] = null);

(statearr_21899_21939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (4))){
var inst_21835 = (state_21894[(13)]);
var inst_21835__$1 = (state_21894[(2)]);
var inst_21836 = (inst_21835__$1 == null);
var state_21894__$1 = (function (){var statearr_21900 = state_21894;
(statearr_21900[(13)] = inst_21835__$1);

return statearr_21900;
})();
if(cljs.core.truth_(inst_21836)){
var statearr_21901_21940 = state_21894__$1;
(statearr_21901_21940[(1)] = (5));

} else {
var statearr_21902_21941 = state_21894__$1;
(statearr_21902_21941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (15))){
var state_21894__$1 = state_21894;
var statearr_21906_21942 = state_21894__$1;
(statearr_21906_21942[(2)] = null);

(statearr_21906_21942[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (21))){
var state_21894__$1 = state_21894;
var statearr_21907_21943 = state_21894__$1;
(statearr_21907_21943[(2)] = null);

(statearr_21907_21943[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (13))){
var inst_21846 = (state_21894[(8)]);
var inst_21847 = (state_21894[(9)]);
var inst_21848 = (state_21894[(11)]);
var inst_21849 = (state_21894[(12)]);
var inst_21856 = (state_21894[(2)]);
var inst_21857 = (inst_21849 + (1));
var tmp21903 = inst_21846;
var tmp21904 = inst_21847;
var tmp21905 = inst_21848;
var inst_21846__$1 = tmp21903;
var inst_21847__$1 = tmp21904;
var inst_21848__$1 = tmp21905;
var inst_21849__$1 = inst_21857;
var state_21894__$1 = (function (){var statearr_21908 = state_21894;
(statearr_21908[(14)] = inst_21856);

(statearr_21908[(8)] = inst_21846__$1);

(statearr_21908[(9)] = inst_21847__$1);

(statearr_21908[(11)] = inst_21848__$1);

(statearr_21908[(12)] = inst_21849__$1);

return statearr_21908;
})();
var statearr_21909_21944 = state_21894__$1;
(statearr_21909_21944[(2)] = null);

(statearr_21909_21944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (22))){
var state_21894__$1 = state_21894;
var statearr_21910_21945 = state_21894__$1;
(statearr_21910_21945[(2)] = null);

(statearr_21910_21945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (6))){
var inst_21835 = (state_21894[(13)]);
var inst_21844 = f.call(null,inst_21835);
var inst_21845 = cljs.core.seq.call(null,inst_21844);
var inst_21846 = inst_21845;
var inst_21847 = null;
var inst_21848 = (0);
var inst_21849 = (0);
var state_21894__$1 = (function (){var statearr_21911 = state_21894;
(statearr_21911[(8)] = inst_21846);

(statearr_21911[(9)] = inst_21847);

(statearr_21911[(11)] = inst_21848);

(statearr_21911[(12)] = inst_21849);

return statearr_21911;
})();
var statearr_21912_21946 = state_21894__$1;
(statearr_21912_21946[(2)] = null);

(statearr_21912_21946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (17))){
var inst_21860 = (state_21894[(7)]);
var inst_21864 = cljs.core.chunk_first.call(null,inst_21860);
var inst_21865 = cljs.core.chunk_rest.call(null,inst_21860);
var inst_21866 = cljs.core.count.call(null,inst_21864);
var inst_21846 = inst_21865;
var inst_21847 = inst_21864;
var inst_21848 = inst_21866;
var inst_21849 = (0);
var state_21894__$1 = (function (){var statearr_21913 = state_21894;
(statearr_21913[(8)] = inst_21846);

(statearr_21913[(9)] = inst_21847);

(statearr_21913[(11)] = inst_21848);

(statearr_21913[(12)] = inst_21849);

return statearr_21913;
})();
var statearr_21914_21947 = state_21894__$1;
(statearr_21914_21947[(2)] = null);

(statearr_21914_21947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (3))){
var inst_21892 = (state_21894[(2)]);
var state_21894__$1 = state_21894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21894__$1,inst_21892);
} else {
if((state_val_21895 === (12))){
var inst_21880 = (state_21894[(2)]);
var state_21894__$1 = state_21894;
var statearr_21915_21948 = state_21894__$1;
(statearr_21915_21948[(2)] = inst_21880);

(statearr_21915_21948[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (2))){
var state_21894__$1 = state_21894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21894__$1,(4),in$);
} else {
if((state_val_21895 === (23))){
var inst_21888 = (state_21894[(2)]);
var state_21894__$1 = state_21894;
var statearr_21916_21949 = state_21894__$1;
(statearr_21916_21949[(2)] = inst_21888);

(statearr_21916_21949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (19))){
var inst_21875 = (state_21894[(2)]);
var state_21894__$1 = state_21894;
var statearr_21917_21950 = state_21894__$1;
(statearr_21917_21950[(2)] = inst_21875);

(statearr_21917_21950[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (11))){
var inst_21846 = (state_21894[(8)]);
var inst_21860 = (state_21894[(7)]);
var inst_21860__$1 = cljs.core.seq.call(null,inst_21846);
var state_21894__$1 = (function (){var statearr_21918 = state_21894;
(statearr_21918[(7)] = inst_21860__$1);

return statearr_21918;
})();
if(inst_21860__$1){
var statearr_21919_21951 = state_21894__$1;
(statearr_21919_21951[(1)] = (14));

} else {
var statearr_21920_21952 = state_21894__$1;
(statearr_21920_21952[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (9))){
var inst_21882 = (state_21894[(2)]);
var inst_21883 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21894__$1 = (function (){var statearr_21921 = state_21894;
(statearr_21921[(15)] = inst_21882);

return statearr_21921;
})();
if(cljs.core.truth_(inst_21883)){
var statearr_21922_21953 = state_21894__$1;
(statearr_21922_21953[(1)] = (21));

} else {
var statearr_21923_21954 = state_21894__$1;
(statearr_21923_21954[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (5))){
var inst_21838 = cljs.core.async.close_BANG_.call(null,out);
var state_21894__$1 = state_21894;
var statearr_21924_21955 = state_21894__$1;
(statearr_21924_21955[(2)] = inst_21838);

(statearr_21924_21955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (14))){
var inst_21860 = (state_21894[(7)]);
var inst_21862 = cljs.core.chunked_seq_QMARK_.call(null,inst_21860);
var state_21894__$1 = state_21894;
if(inst_21862){
var statearr_21925_21956 = state_21894__$1;
(statearr_21925_21956[(1)] = (17));

} else {
var statearr_21926_21957 = state_21894__$1;
(statearr_21926_21957[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (16))){
var inst_21878 = (state_21894[(2)]);
var state_21894__$1 = state_21894;
var statearr_21927_21958 = state_21894__$1;
(statearr_21927_21958[(2)] = inst_21878);

(statearr_21927_21958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21895 === (10))){
var inst_21847 = (state_21894[(9)]);
var inst_21849 = (state_21894[(12)]);
var inst_21854 = cljs.core._nth.call(null,inst_21847,inst_21849);
var state_21894__$1 = state_21894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21894__$1,(13),out,inst_21854);
} else {
if((state_val_21895 === (18))){
var inst_21860 = (state_21894[(7)]);
var inst_21869 = cljs.core.first.call(null,inst_21860);
var state_21894__$1 = state_21894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21894__$1,(20),out,inst_21869);
} else {
if((state_val_21895 === (8))){
var inst_21848 = (state_21894[(11)]);
var inst_21849 = (state_21894[(12)]);
var inst_21851 = (inst_21849 < inst_21848);
var inst_21852 = inst_21851;
var state_21894__$1 = state_21894;
if(cljs.core.truth_(inst_21852)){
var statearr_21928_21959 = state_21894__$1;
(statearr_21928_21959[(1)] = (10));

} else {
var statearr_21929_21960 = state_21894__$1;
(statearr_21929_21960[(1)] = (11));

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
});})(c__6999__auto__))
;
return ((function (switch__6943__auto__,c__6999__auto__){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_21933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21933[(0)] = state_machine__6944__auto__);

(statearr_21933[(1)] = (1));

return statearr_21933;
});
var state_machine__6944__auto____1 = (function (state_21894){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_21894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e21934){if((e21934 instanceof Object)){
var ex__6947__auto__ = e21934;
var statearr_21935_21961 = state_21894;
(statearr_21935_21961[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21962 = state_21894;
state_21894 = G__21962;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_21894){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_21894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto__))
})();
var state__7001__auto__ = (function (){var statearr_21936 = f__7000__auto__.call(null);
(statearr_21936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto__);

return statearr_21936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto__))
);

return c__6999__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6999__auto___22059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___22059,out){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___22059,out){
return (function (state_22034){
var state_val_22035 = (state_22034[(1)]);
if((state_val_22035 === (7))){
var inst_22029 = (state_22034[(2)]);
var state_22034__$1 = state_22034;
var statearr_22036_22060 = state_22034__$1;
(statearr_22036_22060[(2)] = inst_22029);

(statearr_22036_22060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (1))){
var inst_22011 = null;
var state_22034__$1 = (function (){var statearr_22037 = state_22034;
(statearr_22037[(7)] = inst_22011);

return statearr_22037;
})();
var statearr_22038_22061 = state_22034__$1;
(statearr_22038_22061[(2)] = null);

(statearr_22038_22061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (4))){
var inst_22014 = (state_22034[(8)]);
var inst_22014__$1 = (state_22034[(2)]);
var inst_22015 = (inst_22014__$1 == null);
var inst_22016 = cljs.core.not.call(null,inst_22015);
var state_22034__$1 = (function (){var statearr_22039 = state_22034;
(statearr_22039[(8)] = inst_22014__$1);

return statearr_22039;
})();
if(inst_22016){
var statearr_22040_22062 = state_22034__$1;
(statearr_22040_22062[(1)] = (5));

} else {
var statearr_22041_22063 = state_22034__$1;
(statearr_22041_22063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (6))){
var state_22034__$1 = state_22034;
var statearr_22042_22064 = state_22034__$1;
(statearr_22042_22064[(2)] = null);

(statearr_22042_22064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (3))){
var inst_22031 = (state_22034[(2)]);
var inst_22032 = cljs.core.async.close_BANG_.call(null,out);
var state_22034__$1 = (function (){var statearr_22043 = state_22034;
(statearr_22043[(9)] = inst_22031);

return statearr_22043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22034__$1,inst_22032);
} else {
if((state_val_22035 === (2))){
var state_22034__$1 = state_22034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22034__$1,(4),ch);
} else {
if((state_val_22035 === (11))){
var inst_22014 = (state_22034[(8)]);
var inst_22023 = (state_22034[(2)]);
var inst_22011 = inst_22014;
var state_22034__$1 = (function (){var statearr_22044 = state_22034;
(statearr_22044[(10)] = inst_22023);

(statearr_22044[(7)] = inst_22011);

return statearr_22044;
})();
var statearr_22045_22065 = state_22034__$1;
(statearr_22045_22065[(2)] = null);

(statearr_22045_22065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (9))){
var inst_22014 = (state_22034[(8)]);
var state_22034__$1 = state_22034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22034__$1,(11),out,inst_22014);
} else {
if((state_val_22035 === (5))){
var inst_22011 = (state_22034[(7)]);
var inst_22014 = (state_22034[(8)]);
var inst_22018 = cljs.core._EQ_.call(null,inst_22014,inst_22011);
var state_22034__$1 = state_22034;
if(inst_22018){
var statearr_22047_22066 = state_22034__$1;
(statearr_22047_22066[(1)] = (8));

} else {
var statearr_22048_22067 = state_22034__$1;
(statearr_22048_22067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (10))){
var inst_22026 = (state_22034[(2)]);
var state_22034__$1 = state_22034;
var statearr_22049_22068 = state_22034__$1;
(statearr_22049_22068[(2)] = inst_22026);

(statearr_22049_22068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22035 === (8))){
var inst_22011 = (state_22034[(7)]);
var tmp22046 = inst_22011;
var inst_22011__$1 = tmp22046;
var state_22034__$1 = (function (){var statearr_22050 = state_22034;
(statearr_22050[(7)] = inst_22011__$1);

return statearr_22050;
})();
var statearr_22051_22069 = state_22034__$1;
(statearr_22051_22069[(2)] = null);

(statearr_22051_22069[(1)] = (2));


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
});})(c__6999__auto___22059,out))
;
return ((function (switch__6943__auto__,c__6999__auto___22059,out){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_22055 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22055[(0)] = state_machine__6944__auto__);

(statearr_22055[(1)] = (1));

return statearr_22055;
});
var state_machine__6944__auto____1 = (function (state_22034){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_22034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e22056){if((e22056 instanceof Object)){
var ex__6947__auto__ = e22056;
var statearr_22057_22070 = state_22034;
(statearr_22057_22070[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22071 = state_22034;
state_22034 = G__22071;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_22034){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_22034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___22059,out))
})();
var state__7001__auto__ = (function (){var statearr_22058 = f__7000__auto__.call(null);
(statearr_22058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___22059);

return statearr_22058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___22059,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6999__auto___22206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___22206,out){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___22206,out){
return (function (state_22176){
var state_val_22177 = (state_22176[(1)]);
if((state_val_22177 === (7))){
var inst_22172 = (state_22176[(2)]);
var state_22176__$1 = state_22176;
var statearr_22178_22207 = state_22176__$1;
(statearr_22178_22207[(2)] = inst_22172);

(statearr_22178_22207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22177 === (1))){
var inst_22139 = (new Array(n));
var inst_22140 = inst_22139;
var inst_22141 = (0);
var state_22176__$1 = (function (){var statearr_22179 = state_22176;
(statearr_22179[(7)] = inst_22140);

(statearr_22179[(8)] = inst_22141);

return statearr_22179;
})();
var statearr_22180_22208 = state_22176__$1;
(statearr_22180_22208[(2)] = null);

(statearr_22180_22208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22177 === (4))){
var inst_22144 = (state_22176[(9)]);
var inst_22144__$1 = (state_22176[(2)]);
var inst_22145 = (inst_22144__$1 == null);
var inst_22146 = cljs.core.not.call(null,inst_22145);
var state_22176__$1 = (function (){var statearr_22181 = state_22176;
(statearr_22181[(9)] = inst_22144__$1);

return statearr_22181;
})();
if(inst_22146){
var statearr_22182_22209 = state_22176__$1;
(statearr_22182_22209[(1)] = (5));

} else {
var statearr_22183_22210 = state_22176__$1;
(statearr_22183_22210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22177 === (15))){
var inst_22166 = (state_22176[(2)]);
var state_22176__$1 = state_22176;
var statearr_22184_22211 = state_22176__$1;
(statearr_22184_22211[(2)] = inst_22166);

(statearr_22184_22211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22177 === (13))){
var state_22176__$1 = state_22176;
var statearr_22185_22212 = state_22176__$1;
(statearr_22185_22212[(2)] = null);

(statearr_22185_22212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22177 === (6))){
var inst_22141 = (state_22176[(8)]);
var inst_22162 = (inst_22141 > (0));
var state_22176__$1 = state_22176;
if(cljs.core.truth_(inst_22162)){
var statearr_22186_22213 = state_22176__$1;
(statearr_22186_22213[(1)] = (12));

} else {
var statearr_22187_22214 = state_22176__$1;
(statearr_22187_22214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22177 === (3))){
var inst_22174 = (state_22176[(2)]);
var state_22176__$1 = state_22176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22176__$1,inst_22174);
} else {
if((state_val_22177 === (12))){
var inst_22140 = (state_22176[(7)]);
var inst_22164 = cljs.core.vec.call(null,inst_22140);
var state_22176__$1 = state_22176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22176__$1,(15),out,inst_22164);
} else {
if((state_val_22177 === (2))){
var state_22176__$1 = state_22176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22176__$1,(4),ch);
} else {
if((state_val_22177 === (11))){
var inst_22156 = (state_22176[(2)]);
var inst_22157 = (new Array(n));
var inst_22140 = inst_22157;
var inst_22141 = (0);
var state_22176__$1 = (function (){var statearr_22188 = state_22176;
(statearr_22188[(10)] = inst_22156);

(statearr_22188[(7)] = inst_22140);

(statearr_22188[(8)] = inst_22141);

return statearr_22188;
})();
var statearr_22189_22215 = state_22176__$1;
(statearr_22189_22215[(2)] = null);

(statearr_22189_22215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22177 === (9))){
var inst_22140 = (state_22176[(7)]);
var inst_22154 = cljs.core.vec.call(null,inst_22140);
var state_22176__$1 = state_22176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22176__$1,(11),out,inst_22154);
} else {
if((state_val_22177 === (5))){
var inst_22140 = (state_22176[(7)]);
var inst_22149 = (state_22176[(11)]);
var inst_22144 = (state_22176[(9)]);
var inst_22141 = (state_22176[(8)]);
var inst_22148 = (inst_22140[inst_22141] = inst_22144);
var inst_22149__$1 = (inst_22141 + (1));
var inst_22150 = (inst_22149__$1 < n);
var state_22176__$1 = (function (){var statearr_22190 = state_22176;
(statearr_22190[(12)] = inst_22148);

(statearr_22190[(11)] = inst_22149__$1);

return statearr_22190;
})();
if(cljs.core.truth_(inst_22150)){
var statearr_22191_22216 = state_22176__$1;
(statearr_22191_22216[(1)] = (8));

} else {
var statearr_22192_22217 = state_22176__$1;
(statearr_22192_22217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22177 === (14))){
var inst_22169 = (state_22176[(2)]);
var inst_22170 = cljs.core.async.close_BANG_.call(null,out);
var state_22176__$1 = (function (){var statearr_22194 = state_22176;
(statearr_22194[(13)] = inst_22169);

return statearr_22194;
})();
var statearr_22195_22218 = state_22176__$1;
(statearr_22195_22218[(2)] = inst_22170);

(statearr_22195_22218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22177 === (10))){
var inst_22160 = (state_22176[(2)]);
var state_22176__$1 = state_22176;
var statearr_22196_22219 = state_22176__$1;
(statearr_22196_22219[(2)] = inst_22160);

(statearr_22196_22219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22177 === (8))){
var inst_22140 = (state_22176[(7)]);
var inst_22149 = (state_22176[(11)]);
var tmp22193 = inst_22140;
var inst_22140__$1 = tmp22193;
var inst_22141 = inst_22149;
var state_22176__$1 = (function (){var statearr_22197 = state_22176;
(statearr_22197[(7)] = inst_22140__$1);

(statearr_22197[(8)] = inst_22141);

return statearr_22197;
})();
var statearr_22198_22220 = state_22176__$1;
(statearr_22198_22220[(2)] = null);

(statearr_22198_22220[(1)] = (2));


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
});})(c__6999__auto___22206,out))
;
return ((function (switch__6943__auto__,c__6999__auto___22206,out){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_22202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22202[(0)] = state_machine__6944__auto__);

(statearr_22202[(1)] = (1));

return statearr_22202;
});
var state_machine__6944__auto____1 = (function (state_22176){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_22176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e22203){if((e22203 instanceof Object)){
var ex__6947__auto__ = e22203;
var statearr_22204_22221 = state_22176;
(statearr_22204_22221[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22222 = state_22176;
state_22176 = G__22222;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_22176){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_22176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___22206,out))
})();
var state__7001__auto__ = (function (){var statearr_22205 = f__7000__auto__.call(null);
(statearr_22205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___22206);

return statearr_22205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___22206,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6999__auto___22365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___22365,out){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___22365,out){
return (function (state_22335){
var state_val_22336 = (state_22335[(1)]);
if((state_val_22336 === (7))){
var inst_22331 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
var statearr_22337_22366 = state_22335__$1;
(statearr_22337_22366[(2)] = inst_22331);

(statearr_22337_22366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (1))){
var inst_22294 = [];
var inst_22295 = inst_22294;
var inst_22296 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22335__$1 = (function (){var statearr_22338 = state_22335;
(statearr_22338[(7)] = inst_22296);

(statearr_22338[(8)] = inst_22295);

return statearr_22338;
})();
var statearr_22339_22367 = state_22335__$1;
(statearr_22339_22367[(2)] = null);

(statearr_22339_22367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (4))){
var inst_22299 = (state_22335[(9)]);
var inst_22299__$1 = (state_22335[(2)]);
var inst_22300 = (inst_22299__$1 == null);
var inst_22301 = cljs.core.not.call(null,inst_22300);
var state_22335__$1 = (function (){var statearr_22340 = state_22335;
(statearr_22340[(9)] = inst_22299__$1);

return statearr_22340;
})();
if(inst_22301){
var statearr_22341_22368 = state_22335__$1;
(statearr_22341_22368[(1)] = (5));

} else {
var statearr_22342_22369 = state_22335__$1;
(statearr_22342_22369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (15))){
var inst_22325 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
var statearr_22343_22370 = state_22335__$1;
(statearr_22343_22370[(2)] = inst_22325);

(statearr_22343_22370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (13))){
var state_22335__$1 = state_22335;
var statearr_22344_22371 = state_22335__$1;
(statearr_22344_22371[(2)] = null);

(statearr_22344_22371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (6))){
var inst_22295 = (state_22335[(8)]);
var inst_22320 = inst_22295.length;
var inst_22321 = (inst_22320 > (0));
var state_22335__$1 = state_22335;
if(cljs.core.truth_(inst_22321)){
var statearr_22345_22372 = state_22335__$1;
(statearr_22345_22372[(1)] = (12));

} else {
var statearr_22346_22373 = state_22335__$1;
(statearr_22346_22373[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (3))){
var inst_22333 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22335__$1,inst_22333);
} else {
if((state_val_22336 === (12))){
var inst_22295 = (state_22335[(8)]);
var inst_22323 = cljs.core.vec.call(null,inst_22295);
var state_22335__$1 = state_22335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22335__$1,(15),out,inst_22323);
} else {
if((state_val_22336 === (2))){
var state_22335__$1 = state_22335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22335__$1,(4),ch);
} else {
if((state_val_22336 === (11))){
var inst_22303 = (state_22335[(10)]);
var inst_22299 = (state_22335[(9)]);
var inst_22313 = (state_22335[(2)]);
var inst_22314 = [];
var inst_22315 = inst_22314.push(inst_22299);
var inst_22295 = inst_22314;
var inst_22296 = inst_22303;
var state_22335__$1 = (function (){var statearr_22347 = state_22335;
(statearr_22347[(7)] = inst_22296);

(statearr_22347[(11)] = inst_22313);

(statearr_22347[(12)] = inst_22315);

(statearr_22347[(8)] = inst_22295);

return statearr_22347;
})();
var statearr_22348_22374 = state_22335__$1;
(statearr_22348_22374[(2)] = null);

(statearr_22348_22374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (9))){
var inst_22295 = (state_22335[(8)]);
var inst_22311 = cljs.core.vec.call(null,inst_22295);
var state_22335__$1 = state_22335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22335__$1,(11),out,inst_22311);
} else {
if((state_val_22336 === (5))){
var inst_22303 = (state_22335[(10)]);
var inst_22296 = (state_22335[(7)]);
var inst_22299 = (state_22335[(9)]);
var inst_22303__$1 = f.call(null,inst_22299);
var inst_22304 = cljs.core._EQ_.call(null,inst_22303__$1,inst_22296);
var inst_22305 = cljs.core.keyword_identical_QMARK_.call(null,inst_22296,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22306 = (inst_22304) || (inst_22305);
var state_22335__$1 = (function (){var statearr_22349 = state_22335;
(statearr_22349[(10)] = inst_22303__$1);

return statearr_22349;
})();
if(cljs.core.truth_(inst_22306)){
var statearr_22350_22375 = state_22335__$1;
(statearr_22350_22375[(1)] = (8));

} else {
var statearr_22351_22376 = state_22335__$1;
(statearr_22351_22376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (14))){
var inst_22328 = (state_22335[(2)]);
var inst_22329 = cljs.core.async.close_BANG_.call(null,out);
var state_22335__$1 = (function (){var statearr_22353 = state_22335;
(statearr_22353[(13)] = inst_22328);

return statearr_22353;
})();
var statearr_22354_22377 = state_22335__$1;
(statearr_22354_22377[(2)] = inst_22329);

(statearr_22354_22377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (10))){
var inst_22318 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
var statearr_22355_22378 = state_22335__$1;
(statearr_22355_22378[(2)] = inst_22318);

(statearr_22355_22378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (8))){
var inst_22303 = (state_22335[(10)]);
var inst_22299 = (state_22335[(9)]);
var inst_22295 = (state_22335[(8)]);
var inst_22308 = inst_22295.push(inst_22299);
var tmp22352 = inst_22295;
var inst_22295__$1 = tmp22352;
var inst_22296 = inst_22303;
var state_22335__$1 = (function (){var statearr_22356 = state_22335;
(statearr_22356[(14)] = inst_22308);

(statearr_22356[(7)] = inst_22296);

(statearr_22356[(8)] = inst_22295__$1);

return statearr_22356;
})();
var statearr_22357_22379 = state_22335__$1;
(statearr_22357_22379[(2)] = null);

(statearr_22357_22379[(1)] = (2));


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
});})(c__6999__auto___22365,out))
;
return ((function (switch__6943__auto__,c__6999__auto___22365,out){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_22361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22361[(0)] = state_machine__6944__auto__);

(statearr_22361[(1)] = (1));

return statearr_22361;
});
var state_machine__6944__auto____1 = (function (state_22335){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_22335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e22362){if((e22362 instanceof Object)){
var ex__6947__auto__ = e22362;
var statearr_22363_22380 = state_22335;
(statearr_22363_22380[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22381 = state_22335;
state_22335 = G__22381;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_22335){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_22335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___22365,out))
})();
var state__7001__auto__ = (function (){var statearr_22364 = f__7000__auto__.call(null);
(statearr_22364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___22365);

return statearr_22364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___22365,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1425470436932