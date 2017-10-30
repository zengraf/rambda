(function(c,d){typeof exports==='object'&&typeof module!=='undefined'?d(exports):typeof define==='function'&&define.amd?define(['exports'],d):d(c.R={});})(this,function(e){'use strict';function add(x,y){if(y===void 0){return g=>add(x,g);}return x+y;}function addIndex(h){return function(j,...rest){let k=0;const newFn=(...args)=>j.apply(null,[...args,k++]);return h.apply(null,[newFn,...rest]);};}function adjust(l,m,n){if(m===void 0){return(q,r)=>adjust(l,q,r);}else if(n===void 0){return s=>adjust(l,m,s);}const t=n.concat();return t.map((u,v)=>{if(v===m){return l(n[m]);}return u;});}function filterObject(w,z){const A={};for(const B in z){if(w(z[B])){A[B]=z[B];}}return A;}function filter(C,D){if(D===void 0){return E=>filter(C,E);}if(D.length===void 0){return filterObject(C,D);}let G=-1,H=0;const I=D.length,J=[];while(++G<I){const K=D[G];if(C(K)){J[H++]=K;}}return J;}function all(L,M){if(M===void 0){return N=>all(L,N);}return filter(L,M).length===M.length;}function any(O,P){if(P===void 0){return Q=>any(O,Q);}let R=0;while(R<P.length){if(O(P[R])){return!0;}R++;}return!1;}function allPass(S,x){if(arguments.length===1){return U=>allPass(S,U);}return!any(V=>!V(x),S);}function anyPass(W,x){if(arguments.length===1){return X=>anyPass(W,X);}return any(Y=>Y(x))(W);}function append(x,Z){if(Z===void 0){return a1=>append(x,a1);}if(typeof Z==='string'){return`${Z}${x}`;}const b1=Z.concat();b1.push(x);return b1;}function both(x,y){if(y===void 0){return c1=>both(x,c1);}return d1=>x(d1)&&y(d1);}function compose(...fns){return e1=>{const f1=fns.slice();while(f1.length>0){e1=f1.pop()(e1);}return e1;};}function concat(x,y){if(y===void 0){return g1=>concat(x,g1);}return typeof x==='string'?`${x}${y}`:[...x,...y];}function type(a){const h1=typeof a;if(a===null){return'Null';}else if(a===void 0){return'Undefined';}else if(h1==='boolean'){return'Boolean';}else if(h1==='number'){return'Number';}else if(h1==='string'){return'String';}else if(Array.isArray(a)){return'Array';}else if(a instanceof RegExp){return'RegExp';}const i1=a.toString();if(i1.startsWith('async')){return'Async';}else if(i1==='[object Promise]'){return'Promise';}else if(i1.includes('function')||i1.includes('=>')){return'Function';}return'Object';}function equals(a,b){if(arguments.length===1){return j1=>equals(a,j1);}if(a===b){return!0;}const k1=type(a);if(k1!==type(b)){return!1;}if(k1==='Array'){const l1=Array.from(a),m1=Array.from(b);return l1.sort().toString()===m1.sort().toString();}if(k1==='Object'){const n1=Object.keys(a);if(n1.length===Object.keys(b).length){if(n1.length===0){return!0;}let o1=!0;n1.map(p1=>{if(o1){const q1=type(a[p1]),r1=type(b[p1]);if(q1===r1){if(q1==='Object'){if(Object.keys(a[p1]).length===Object.keys(b[p1]).length){if(Object.keys(a[p1]).length!==0){if(!equals(a[p1],b[p1])){o1=!1;}}}else{o1=!1;}}else if(!equals(a[p1],b[p1])){o1=!1;}}else{o1=!1;}}});return o1;}}return!1;}function contains(x,s1){if(s1===void 0){return t1=>contains(x,t1);}let u1=-1,v1=!1;while(++u1<s1.length&&!v1){if(equals(s1[u1],x)){v1=!0;}}return v1;}function curry(f,a=[]){return(...p)=>(o=>o.length>=f.length?f(...o):curry(f,o))([...a,...p]);}var dec=x=>x-1;function defaultTo(w1,x1){if(arguments.length===1){return y1=>defaultTo(w1,y1);}return x1===void 0||x1===null||Number.isNaN(x1)===!0?w1:x1;}function divide(x,y){if(y===void 0){return z1=>divide(x,z1);}return x/y;}function drop(A1,x){if(x===void 0){return B1=>drop(A1,B1);}return x.slice(A1);}function dropLast(C1,x){if(x===void 0){return D1=>dropLast(C1,D1);}return x.slice(0,-C1);}function either(x,y){if(y===void 0){return E1=>either(x,E1);}return F1=>x(F1)||y(F1);}function endsWith(x,y){if(y===void 0){return G1=>endsWith(x,G1);}return y.endsWith(x);}var inc=x=>x+1;function find(fn,I1){if(I1===void 0){return J1=>find(fn,J1);}return I1.find(fn);}function findIndex(fn,L1){if(L1===void 0){return M1=>findIndex(fn,M1);}const N1=L1.length;let O1=-1;while(++O1<N1){if(fn(L1[O1])){return O1;}}return-1;}function flatten(P1,Q1){Q1=Q1===void 0?[]:Q1;for(let i=0;i<P1.length;i++){if(Array.isArray(P1[i])){flatten(P1[i],Q1);}else{Q1.push(P1[i]);}}return Q1;}function flipExport(fn){return(...input)=>{if(input.length===1){return S1=>fn(S1,input[0]);}else if(input.length===2){return fn(input[1],input[0]);}return void 0;};}function flip(fn,...input){return flipExport(fn);}function tap(fn,x){if(x===void 0){return V1=>tap(fn,V1);}fn(x);return x;}function mapObject(fn,X1){const Y1={};for(const Z1 in X1){Y1[Z1]=fn(X1[Z1]);}return Y1;}function map(fn,b2){if(b2===void 0){return c2=>map(fn,c2);}if(b2.length===void 0){return mapObject(fn,b2);}let d2=-1;const e2=b2.length,f2=Array(e2);while(++d2<e2){f2[d2]=fn(b2[d2]);}return f2;}function forEach(fn,h2){if(h2===void 0){return i2=>forEach(fn,i2);}return map(tap(fn),h2);}function has(j2,k2){if(k2===void 0){return l2=>has(j2,l2);}return k2[j2]!==void 0;}function head(a){if(typeof a==='string'){return a[0]||'';}return a[0];}function ifElse(m2,n2,o2){if(n2===void 0){return(p2,q2)=>ifElse(m2,p2,q2);}else if(o2===void 0){return r2=>ifElse(m2,n2,r2);}return s2=>{const t2=typeof m2==='boolean'?m2:m2(s2);if(t2===!0){return n2(s2);}return o2(s2);};}function is(u2,x){if(x===void 0){return v2=>is(u2,v2);}return x instanceof u2||x.constructor===u2;}function isNil(x){return x===void 0||x===null;}function includes(x,y){if(y===void 0){return w2=>includes(x,w2);}return y.includes(x);}function indexOf(x,x2){if(x2===void 0){return y2=>indexOf(x,y2);}let z2=-1;const A2=x2.length;while(++z2<A2){if(x2[z2]===x){return z2;}}return-1;}function baseSlice(B2,C2,D2){let E2=-1,F2=B2.length;D2=D2>F2?F2:D2;if(D2<0){D2+=F2;}F2=C2>D2?0:D2-C2>>>0;C2>>>=0;const G2=Array(F2);while(++E2<F2){G2[E2]=B2[E2+C2];}return G2;}function init(a){if(typeof a==='string'){return a.slice(0,-1);}return a.length?baseSlice(a,0,-1):[];}function join(H2,I2){if(I2===void 0){return J2=>join(H2,J2);}return I2.join(H2);}function lastIndexOf(x,K2){if(K2===void 0){return L2=>lastIndexOf(x,L2);}let M2=-1;K2.map((N2,O2)=>{if(equals(N2,x)){M2=O2;}});return M2;}function last(a){if(typeof a==='string'){return a[a.length-1]||'';}return a[a.length-1];}function length(x){return x.length;}function match(P2,x){if(x===void 0){return Q2=>match(P2,Q2);}const R2=x.match(P2);return R2===null?[]:R2;}function merge(S2,T2){if(T2===void 0){return U2=>merge(S2,U2);}return Object.assign({},S2,T2);}function modulo(x,y){if(y===void 0){return V2=>modulo(x,V2);}return x%y;}function multiply(x,y){if(y===void 0){return W2=>multiply(x,W2);}return x*y;}function none(fn,Y2){if(Y2===void 0){return Z2=>none(fn,Y2);}return Y2.filter(fn).length===0;}function omit(a3,b3){if(arguments.length===1){return c3=>omit(a3,c3);}if(b3===null||b3===void 0){return void 0;}const d3=typeof a3==='string'?a3=a3.split(','):a3,e3={};for(const f3 in b3){if(!d3.includes(f3)){e3[f3]=b3[f3];}}return e3;}function partialCurry(fn,h3={}){return i3=>{if(type(fn)==='Async'||type(fn)==='Promise'){return new Promise((j3,k3)=>{fn(merge(i3,h3)).then(j3).catch(k3);});}return fn(merge(i3,h3));};}function path(l3,m3){if(arguments.length===1){return n3=>path(l3,n3);}if(m3===null||m3===void 0){return void 0;}let o3=m3,p3=0;const q3=typeof l3==='string'?l3=l3.split('.'):l3;while(p3<q3.length){if(o3===null||o3===void 0){return void 0;}o3=o3[q3[p3]];p3++;}return o3;}function pathOr(r3,s3,t3){return defaultTo(r3,path(s3,t3));}var u3=curry(pathOr);function pick(v3,w3){if(arguments.length===1){return x3=>pick(v3,x3);}if(w3===null||w3===void 0){return void 0;}const y3=typeof v3==='string'?v3.split(','):v3,z3={};let A3=0;while(A3<y3.length){if(y3[A3]in w3){z3[y3[A3]]=w3[y3[A3]];}A3++;}return z3;}function pickAll(B3,C3){if(arguments.length===1){return D3=>pickAll(B3,D3);}if(C3===null||C3===void 0){return void 0;}const E3=typeof B3==='string'?B3.split(','):B3,F3={};let G3=0;while(G3<E3.length){if(E3[G3]in C3){F3[E3[G3]]=C3[E3[G3]];}else{F3[E3[G3]]=void 0;}G3++;}return F3;}function pipe(...fns){return compose(...fns.reverse());}function pluck(H3,I3){if(I3===void 0){return J3=>pluck(H3,J3);}const K3=[];map(L3=>{if(!(L3[H3]===void 0)){K3.push(L3[H3]);}},I3);return K3;}function prepend(x,M3){if(M3===void 0){return N3=>prepend(x,N3);}if(typeof M3==='string'){return`${x}${M3}`;}const O3=M3.concat();O3.unshift(x);return O3;}function prop(P3,Q3){if(Q3===void 0){return R3=>prop(P3,R3);}return Q3[P3];}function propEq(S3,x,T3){if(x===void 0){return(U3,V3)=>propEq(S3,U3,V3);}else if(T3===void 0){return W3=>propEq(S3,x,W3);}return T3[S3]===x;}function range(X3,Y3){if(Y3===void 0){return Z3=>range(X3,Z3);}const a4=[];for(let i=X3;i<Y3;i++){a4.push(i);}return a4;}function reduce(fn,c4,d4){if(c4===void 0){return(e4,f4)=>reduce(fn,e4,f4);}else if(d4===void 0){return g4=>reduce(fn,c4,g4);}return d4.reduce(fn,c4);}function reject(fn,i4){if(i4===void 0){return j4=>reject(fn,j4);}return filter(x=>!fn(x),i4);}function repeat(x,k4){if(k4===void 0){return l4=>repeat(x,l4);}const m4=Array(k4);return m4.fill(x);}function replace(n4,o4,p4){if(o4===void 0){return(q4,r4)=>replace(n4,q4,r4);}else if(p4===void 0){return s4=>replace(n4,o4,s4);}return p4.replace(n4,o4);}function reverse(t4){const u4=t4.concat();return u4.reverse();}function sort(fn,w4){if(w4===void 0){return x4=>sort(fn,x4);}const y4=w4.concat();return y4.sort(fn);}function sortBy(fn,A4){if(A4===void 0){return B4=>sortBy(fn,B4);}const C4=A4.concat();return C4.sort((a,b)=>{const D4=fn(a),E4=fn(b);return D4<E4?-1:D4>E4?1:0;});}function split(F4,G4){if(G4===void 0){return H4=>split(F4,H4);}return G4.split(F4);}function splitEvery(I4,x){if(x===void 0){return J4=>splitEvery(I4,J4);}const K4=I4>1?I4:1,L4=[];let M4=0;while(M4<x.length){L4.push(x.slice(M4,M4+=K4));}return L4;}function startsWith(x,y){if(y===void 0){return N4=>startsWith(x,N4);}return y.startsWith(x);}function subtract(x,y){if(y===void 0){return O4=>subtract(x,O4);}return x-y;}function tail(P4){return drop(1,P4);}function take(Q4,x){if(x===void 0){return R4=>take(Q4,R4);}if(typeof x==='string'){return x.slice(0,Q4);}return baseSlice(x,0,Q4);}function takeLast(S4,x){if(x===void 0){return T4=>takeLast(S4,T4);}const U4=x.length;let V4=S4>U4?U4:S4;if(typeof x==='string'){return x.slice(U4-V4);}V4=U4-V4;return baseSlice(x,V4,U4);}function test(W4,X4){if(X4===void 0){return Y4=>test(W4,Y4);}return X4.search(W4)!==-1;}function times(fn,a5){if(a5===void 0){return b5=>times(fn,b5);}return map(fn,range(0,a5));}function toLower(x){return x.toLowerCase();}function toUpper(x){return x.toUpperCase();}function toString(x){return x.toString();}function uniq(c5){let d5=-1;const e5=[];while(++d5<c5.length){const f5=c5[d5];if(!contains(f5,e5)){e5.push(f5);}}return e5;}function update(g5,h5,i5){if(h5===void 0){return(j5,k5)=>update(g5,j5,k5);}else if(i5===void 0){return l5=>update(g5,h5,l5);}const m5=i5.concat();return m5.fill(h5,g5,g5+1);}function values(n5){const o5=[];for(const p5 in n5){o5.push(n5[p5]);}return o5;}function without(q5,r5){return reduce((s5,t5)=>!contains(t5,q5)?s5.concat(t5):s5,[],r5);}const always=x=>()=>x,complement=fn=>v5=>!fn(v5),F=()=>!1,identity=x=>x,not=x=>!x,T=()=>!0,trim=x=>x.trim();e.always=always;e.complement=complement;e.F=F;e.identity=identity;e.not=not;e.T=T;e.trim=trim;e.add=add;e.addIndex=addIndex;e.adjust=adjust;e.all=all;e.allPass=allPass;e.anyPass=anyPass;e.any=any;e.append=append;e.both=both;e.compose=compose;e.concat=concat;e.contains=contains;e.curry=curry;e.dec=dec;e.defaultTo=defaultTo;e.divide=divide;e.drop=drop;e.dropLast=dropLast;e.either=either;e.endsWith=endsWith;e.inc=inc;e.equals=equals;e.filter=filter;e.find=find;e.findIndex=findIndex;e.flatten=flatten;e.flip=flip;e.forEach=forEach;e.has=has;e.head=head;e.ifElse=ifElse;e.is=is;e.isNil=isNil;e.includes=includes;e.indexOf=indexOf;e.init=init;e.join=join;e.lastIndexOf=lastIndexOf;e.last=last;e.length=length;e.map=map;e.match=match;e.merge=merge;e.modulo=modulo;e.multiply=multiply;e.none=none;e.omit=omit;e.partialCurry=partialCurry;e.path=path;e.pathOr=u3;e.pick=pick;e.pickAll=pickAll;e.pipe=pipe;e.pluck=pluck;e.prepend=prepend;e.prop=prop;e.propEq=propEq;e.range=range;e.reduce=reduce;e.reject=reject;e.repeat=repeat;e.replace=replace;e.reverse=reverse;e.sort=sort;e.sortBy=sortBy;e.split=split;e.splitEvery=splitEvery;e.startsWith=startsWith;e.subtract=subtract;e.tap=tap;e.tail=tail;e.take=take;e.takeLast=takeLast;e.test=test;e.times=times;e.toLower=toLower;e.toUpper=toUpper;e.toString=toString;e.type=type;e.uniq=uniq;e.update=update;e.values=values;e.without=without;Object.defineProperty(e,'__esModule',{value:!0});});