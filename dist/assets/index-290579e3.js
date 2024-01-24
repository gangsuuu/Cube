(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="147",Qf=0,Jc=1,ep=2,id=1,tp=2,As=3,ss=0,zi=1,Rn=2,Un=0,Jr=1,Nl=2,Qc=3,eh=4,ip=5,Vr=100,np=101,rp=102,th=103,ih=104,sp=200,ap=201,op=202,lp=203,nd=204,rd=205,cp=206,hp=207,up=208,dp=209,fp=210,pp=0,mp=1,gp=2,Ul=3,_p=4,xp=5,vp=6,yp=7,sd=0,bp=1,Mp=2,yn=0,Sp=1,wp=2,Tp=3,Ep=4,Ap=5,ad=300,as=301,os=302,kl=303,Bl=304,Eo=306,Gl=1e3,Xi=1001,Vl=1002,ri=1003,nh=1004,rh=1005,Li=1006,Cp=1007,Ao=1008,xr=1009,Lp=1010,Pp=1011,od=1012,Dp=1013,sr=1014,ar=1015,$s=1016,Rp=1017,Ip=1018,Qr=1020,Fp=1021,Op=1022,$i=1023,zp=1024,Np=1025,cr=1026,ls=1027,Up=1028,kp=1029,Bp=1030,Gp=1031,Vp=1033,Bo=33776,Go=33777,Vo=33778,Ho=33779,sh=35840,ah=35841,oh=35842,lh=35843,Hp=36196,ch=37492,hh=37496,uh=37808,dh=37809,fh=37810,ph=37811,mh=37812,gh=37813,_h=37814,xh=37815,vh=37816,yh=37817,bh=37818,Mh=37819,Sh=37820,wh=37821,Th=36492,vr=3e3,ct=3001,Wp=3200,Xp=3201,$p=0,qp=1,Ki="srgb",qs="srgb-linear",Wo=7680,Yp=519,Eh=35044,Ah="300 es",Hl=1035;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ka=Math.PI/180,Ch=180/Math.PI;function ra(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[s&255]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function vi(s,e,t){return Math.max(e,Math.min(t,s))}function jp(s,e){return(s%e+e)%e}function Xo(s,e,t){return(1-t)*s+t*e}function Lh(s){return(s&s-1)===0&&s!==0}function Wl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ua(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function di(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mi{constructor(){Mi.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],_=i[8],f=n[0],p=n[3],g=n[6],M=n[1],v=n[4],y=n[7],b=n[2],L=n[5],A=n[8];return r[0]=a*f+o*M+c*b,r[3]=a*p+o*v+c*L,r[6]=a*g+o*y+c*A,r[1]=l*f+h*M+u*b,r[4]=l*p+h*v+u*L,r[7]=l*g+h*y+u*A,r[2]=d*f+m*M+_*b,r[5]=d*p+m*v+_*L,r[8]=d*g+m*y+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+n*r*l-n*a*c}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,m=l*r-a*c,_=t*u+i*d+n*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/_;return e[0]=u*f,e[1]=(n*l-h*i)*f,e[2]=(o*i-n*a)*f,e[3]=d*f,e[4]=(h*t-n*c)*f,e[5]=(n*r-o*t)*f,e[6]=m*f,e[7]=(i*c-l*t)*f,e[8]=(a*t-i*r)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($o.makeScale(e,t)),this}rotate(e){return this.premultiply($o.makeRotation(-e)),this}translate(e,t){return this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new Mi;function ld(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ys(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ja(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const qo={[Ki]:{[qs]:hr},[qs]:{[Ki]:Ja}},qt={legacyMode:!0,get workingColorSpace(){return qs},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(qo[e]&&qo[e][t]!==void 0){const i=qo[e][t];return s.r=i(s.r),s.g=i(s.g),s.b=i(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},St={r:0,g:0,b:0},ki={h:0,s:0,l:0},da={h:0,s:0,l:0};function Yo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function fa(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ki){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=qt.workingColorSpace){return this.r=e,this.g=t,this.b=i,qt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=qt.workingColorSpace){if(e=jp(e,1),t=vi(t,0,1),i=vi(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Yo(a,r,e+1/3),this.g=Yo(a,r,e),this.b=Yo(a,r,e-1/3)}return qt.toWorkingColorSpace(this,n),this}setStyle(e,t=Ki){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,qt.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,qt.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return i(r[4]),this.setHSL(c,l,h,t)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,qt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,qt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ki){const i=cd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=Ja(e.r),this.g=Ja(e.g),this.b=Ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ki){return qt.fromWorkingColorSpace(fa(this,St),e),vi(St.r*255,0,255)<<16^vi(St.g*255,0,255)<<8^vi(St.b*255,0,255)<<0}getHexString(e=Ki){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(fa(this,St),t);const i=St.r,n=St.g,r=St.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(n-r)/u+(n<r?6:0);break;case n:c=(r-i)/u+2;break;case r:c=(i-n)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(fa(this,St),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Ki){return qt.fromWorkingColorSpace(fa(this,St),e),e!==Ki?`color(${e} ${St.r} ${St.g} ${St.b})`:`rgb(${St.r*255|0},${St.g*255|0},${St.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(ki),ki.h+=e,ki.s+=t,ki.l+=i,this.setHSL(ki.h,ki.s,ki.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(da);const i=Xo(ki.h,da.h,t),n=Xo(ki.s,da.s,t),r=Xo(ki.l,da.l,t);return this.setHSL(i,n,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}et.NAMES=cd;let Tr;class hd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tr===void 0&&(Tr=Ys("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=hr(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hr(t[i]/255)*255):t[i]=hr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ud{constructor(e=null){this.isSource=!0,this.uuid=ra(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(jo(n[a].image)):r.push(jo(n[a]))}else r=jo(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function jo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zp=0;class si extends _s{constructor(e=si.DEFAULT_IMAGE,t=si.DEFAULT_MAPPING,i=Xi,n=Xi,r=Li,a=Ao,o=$i,c=xr,l=si.DEFAULT_ANISOTROPY,h=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=ra(),this.name="",this.source=new ud(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gl:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gl:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=ad;si.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,n=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],_=c[9],f=c[2],p=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-f)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+f)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(m+1)/2,b=(g+1)/2,L=(h+d)/4,A=(u+f)/4,x=(_+p)/4;return v>y&&v>b?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=L/i,r=A/i):y>b?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=L/n,r=x/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=A/r,n=x/r),this.set(i,n,r,t),this}let M=Math.sqrt((p-_)*(p-_)+(u-f)*(u-f)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(u-f)/M,this.z=(d-h)/M,this.w=Math.acos((l+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yi extends _s{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const n={width:e,height:t,depth:1};this.texture=new si(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Li,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ud(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dd extends si{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ri,this.minFilter=ri,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kp extends si{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ri,this.minFilter=ri,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3];const d=r[a+0],m=r[a+1],_=r[a+2],f=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=f;return}if(u!==f||c!==d||l!==m||h!==_){let p=1-o;const g=c*d+l*m+h*_+u*f,M=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const b=Math.sqrt(v),L=Math.atan2(b,g*M);p=Math.sin(p*L)/b,o=Math.sin(o*L)/b}const y=o*M;if(c=c*p+d*y,l=l*p+m*y,h=h*p+_*y,u=u*p+f*y,p===1-o){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){const o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+h*u+c*m-l*d,e[t+1]=c*_+h*d+l*u-o*m,e[t+2]=l*_+h*m+o*d-c*u,e[t+3]=h*_-o*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),u=o(r/2),d=c(i/2),m=c(n/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u+d*m*_;break;case"YZX":this._x=d*h*u+l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u-d*m*_;break;case"XZY":this._x=d*h*u-l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-n)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(n+a)/m,this._z=(r+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(r-l)/m,this._x=(n+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-n)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vi(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+n*l-r*c,this._y=n*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ph.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*n-o*i,h=c*i+o*t-r*n,u=c*n+r*i-a*t,d=-r*t-a*i-o*n;return this.x=l*c+d*-r+h*-o-u*-a,this.y=h*c+d*-a+u*-r-l*-o,this.z=u*c+d*-o+l*-a-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-r*o,this.y=r*a-i*c,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vi(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new N,Ph=new sa;class aa{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],u=e[c+1],d=e[c+2];h<t&&(t=h),u<i&&(i=u),d<n&&(n=d),h>r&&(r=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,i,n),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),u=e.getY(c),d=e.getZ(c);h<t&&(t=h),u<i&&(i=u),d<n&&(n=d),h>r&&(r=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,i,n),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)Yn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Yn)}else i.boundingBox===null&&i.computeBoundingBox(),Ko.copy(i.boundingBox),Ko.applyMatrix4(e.matrixWorld),this.union(Ko);const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),pa.subVectors(this.max,ys),Er.subVectors(e.a,ys),Ar.subVectors(e.b,ys),Cr.subVectors(e.c,ys),wn.subVectors(Ar,Er),Tn.subVectors(Cr,Ar),jn.subVectors(Er,Cr);let t=[0,-wn.z,wn.y,0,-Tn.z,Tn.y,0,-jn.z,jn.y,wn.z,0,-wn.x,Tn.z,0,-Tn.x,jn.z,0,-jn.x,-wn.y,wn.x,0,-Tn.y,Tn.x,0,-jn.y,jn.x,0];return!Jo(t,Er,Ar,Cr,pa)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,Er,Ar,Cr,pa))?!1:(ma.crossVectors(wn,Tn),t=[ma.x,ma.y,ma.z],Jo(t,Er,Ar,Cr,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Yn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new N,new N,new N,new N,new N,new N,new N,new N],Yn=new N,Ko=new aa,Er=new N,Ar=new N,Cr=new N,wn=new N,Tn=new N,jn=new N,ys=new N,pa=new N,ma=new N,Zn=new N;function Jo(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Zn.fromArray(s,r);const o=n.x*Math.abs(Zn.x)+n.y*Math.abs(Zn.y)+n.z*Math.abs(Zn.z),c=e.dot(Zn),l=t.dot(Zn),h=i.dot(Zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Jp=new aa,bs=new N,Qo=new N;class Co{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Jp.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const t=bs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(bs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(Qo)),this.expandByPoint(bs.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new N,el=new N,ga=new N,En=new N,tl=new N,_a=new N,il=new N;class yc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.direction).multiplyScalar(t).add(this.origin),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){el.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),En.copy(this.origin).sub(el);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ga),o=En.dot(this.direction),c=-En.dot(ga),l=En.lengthSq(),h=Math.abs(1-a*a);let u,d,m,_;if(h>0)if(u=a*c-o,d=a*o-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const f=1/h;u*=f,d*=f,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),n&&n.copy(ga).multiplyScalar(d).add(el),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const i=un.dot(this.direction),n=un.dot(un)-i*i,r=e.radius*e.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,c=i+a;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,n,r){tl.subVectors(t,e),_a.subVectors(i,e),il.crossVectors(tl,_a);let a=this.direction.dot(il),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const c=o*this.direction.dot(_a.crossVectors(En,_a));if(c<0)return null;const l=o*this.direction.dot(tl.cross(En));if(l<0||c+l>a)return null;const h=-o*En.dot(il);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,r,a,o,c,l,h,u,d,m,_,f,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=m,g[7]=_,g[11]=f,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Lr.setFromMatrixColumn(e,0).length(),r=1/Lr.setFromMatrixColumn(e,1).length(),a=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,m=a*u,_=o*h,f=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+_*l,t[5]=d-f*l,t[9]=-o*c,t[2]=f-d*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,m=c*u,_=l*h,f=l*u;t[0]=d+f*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=f+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,m=c*u,_=l*h,f=l*u;t[0]=d-f*o,t[4]=-a*u,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=f-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,m=a*u,_=o*h,f=o*u;t[0]=c*h,t[4]=_*l-m,t[8]=d*l+f,t[1]=c*u,t[5]=f*l+d,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,_=o*c,f=o*l;t[0]=c*h,t[4]=f-d*u,t[8]=_*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+_,t[10]=d-f*u}else if(e.order==="XZY"){const d=a*c,m=a*l,_=o*c,f=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+f,t[5]=a*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=o*h,t[10]=f*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qp,e,em)}lookAt(e,t,i){const n=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),An.crossVectors(i,fi),An.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),An.crossVectors(i,fi)),An.normalize(),xa.crossVectors(fi,An),n[0]=An.x,n[4]=xa.x,n[8]=fi.x,n[1]=An.y,n[5]=xa.y,n[9]=fi.y,n[2]=An.z,n[6]=xa.z,n[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],_=i[2],f=i[6],p=i[10],g=i[14],M=i[3],v=i[7],y=i[11],b=i[15],L=n[0],A=n[4],x=n[8],S=n[12],P=n[1],k=n[5],Q=n[9],z=n[13],R=n[2],O=n[6],Y=n[10],T=n[14],U=n[3],J=n[7],te=n[11],B=n[15];return r[0]=a*L+o*P+c*R+l*U,r[4]=a*A+o*k+c*O+l*J,r[8]=a*x+o*Q+c*Y+l*te,r[12]=a*S+o*z+c*T+l*B,r[1]=h*L+u*P+d*R+m*U,r[5]=h*A+u*k+d*O+m*J,r[9]=h*x+u*Q+d*Y+m*te,r[13]=h*S+u*z+d*T+m*B,r[2]=_*L+f*P+p*R+g*U,r[6]=_*A+f*k+p*O+g*J,r[10]=_*x+f*Q+p*Y+g*te,r[14]=_*S+f*z+p*T+g*B,r[3]=M*L+v*P+y*R+b*U,r[7]=M*A+v*k+y*O+b*J,r[11]=M*x+v*Q+y*Y+b*te,r[15]=M*S+v*z+y*T+b*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],_=e[3],f=e[7],p=e[11],g=e[15];return _*(+r*c*u-n*l*u-r*o*d+i*l*d+n*o*m-i*c*m)+f*(+t*c*m-t*l*d+r*a*d-n*a*m+n*l*h-r*c*h)+p*(+t*l*u-t*o*m-r*a*u+i*a*m+r*o*h-i*l*h)+g*(-n*o*h-t*c*u+t*o*d+n*a*u-i*a*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],_=e[12],f=e[13],p=e[14],g=e[15],M=u*p*l-f*d*l+f*c*m-o*p*m-u*c*g+o*d*g,v=_*d*l-h*p*l-_*c*m+a*p*m+h*c*g-a*d*g,y=h*f*l-_*u*l+_*o*m-a*f*m-h*o*g+a*u*g,b=_*u*c-h*f*c-_*o*d+a*f*d+h*o*p-a*u*p,L=t*M+i*v+n*y+r*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/L;return e[0]=M*A,e[1]=(f*d*r-u*p*r-f*n*m+i*p*m+u*n*g-i*d*g)*A,e[2]=(o*p*r-f*c*r+f*n*l-i*p*l-o*n*g+i*c*g)*A,e[3]=(u*c*r-o*d*r-u*n*l+i*d*l+o*n*m-i*c*m)*A,e[4]=v*A,e[5]=(h*p*r-_*d*r+_*n*m-t*p*m-h*n*g+t*d*g)*A,e[6]=(_*c*r-a*p*r-_*n*l+t*p*l+a*n*g-t*c*g)*A,e[7]=(a*d*r-h*c*r+h*n*l-t*d*l-a*n*m+t*c*m)*A,e[8]=y*A,e[9]=(_*u*r-h*f*r-_*i*m+t*f*m+h*i*g-t*u*g)*A,e[10]=(a*f*r-_*o*r+_*i*l-t*f*l-a*i*g+t*o*g)*A,e[11]=(h*o*r-a*u*r-h*i*l+t*u*l+a*i*m-t*o*m)*A,e[12]=b*A,e[13]=(h*f*n-_*u*n+_*i*d-t*f*d-h*i*p+t*u*p)*A,e[14]=(_*o*n-a*f*n-_*i*c+t*f*c+a*i*p-t*o*p)*A,e[15]=(a*u*n-h*o*n+h*i*c-t*u*c-a*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,m=r*h,_=r*u,f=a*h,p=a*u,g=o*u,M=c*l,v=c*h,y=c*u,b=i.x,L=i.y,A=i.z;return n[0]=(1-(f+g))*b,n[1]=(m+y)*b,n[2]=(_-v)*b,n[3]=0,n[4]=(m-y)*L,n[5]=(1-(d+g))*L,n[6]=(p+M)*L,n[7]=0,n[8]=(_+v)*A,n[9]=(p-M)*A,n[10]=(1-(d+f))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=Lr.set(n[0],n[1],n[2]).length();const a=Lr.set(n[4],n[5],n[6]).length(),o=Lr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],Bi.copy(this);const l=1/r,h=1/a,u=1/o;return Bi.elements[0]*=l,Bi.elements[1]*=l,Bi.elements[2]*=l,Bi.elements[4]*=h,Bi.elements[5]*=h,Bi.elements[6]*=h,Bi.elements[8]*=u,Bi.elements[9]*=u,Bi.elements[10]*=u,t.setFromRotationMatrix(Bi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a){const o=this.elements,c=2*r/(t-e),l=2*r/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),d=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,n,r,a){const o=this.elements,c=1/(t-e),l=1/(i-n),h=1/(a-r),u=(t+e)*c,d=(i+n)*l,m=(a+r)*h;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Lr=new N,Bi=new yt,Qp=new N(0,0,0),em=new N(1,1,1),An=new N,xa=new N,fi=new N,Dh=new yt,Rh=new sa;class oa{constructor(e=0,t=0,i=0,n=oa.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],u=n[2],d=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(vi(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vi(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(vi(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-vi(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(vi(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-vi(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}oa.DefaultOrder="XYZ";oa.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Lo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tm=0;const Ih=new N,Pr=new sa,dn=new yt,va=new N,Ms=new N,im=new N,nm=new sa,Fh=new N(1,0,0),Oh=new N(0,1,0),zh=new N(0,0,1),rm={type:"added"},Nh={type:"removed"};class Ut extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DefaultUp.clone();const e=new N,t=new oa,i=new sa,n=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new yt},normalMatrix:{value:new Mi}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ut.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ut.DefaultMatrixWorldAutoUpdate,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(Fh,e)}rotateY(e){return this.rotateOnAxis(Oh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fh,e)}translateY(e){return this.translateOnAxis(Oh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?va.copy(e):va.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Ms,va,this.up):dn.lookAt(va,Ms,this.up),this.quaternion.setFromRotationMatrix(dn),n&&(dn.extractRotation(n.matrixWorld),Pr.setFromRotationMatrix(dn),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Nh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++){const o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=n,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Ut.DefaultUp=new N(0,1,0);Ut.DefaultMatrixAutoUpdate=!0;Ut.DefaultMatrixWorldAutoUpdate=!0;const Gi=new N,fn=new N,nl=new N,pn=new N,Dr=new N,Rr=new N,Uh=new N,rl=new N,sl=new N,al=new N;class en{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Gi.subVectors(e,t),n.cross(Gi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Gi.subVectors(n,t),fn.subVectors(i,t),nl.subVectors(e,t);const a=Gi.dot(Gi),o=Gi.dot(fn),c=Gi.dot(nl),l=fn.dot(fn),h=fn.dot(nl),u=a*l-o*o;if(u===0)return r.set(-2,-1,-1);const d=1/u,m=(l*c-o*h)*d,_=(a*h-o*c)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,pn),pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,i,n,r,a,o,c){return this.getBarycoord(e,t,i,n,pn),c.set(0,0),c.addScaledVector(r,pn.x),c.addScaledVector(a,pn.y),c.addScaledVector(o,pn.z),c}static isFrontFacing(e,t,i,n){return Gi.subVectors(i,t),fn.subVectors(e,t),Gi.cross(fn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Gi.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return en.getUV(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,o;Dr.subVectors(n,i),Rr.subVectors(r,i),rl.subVectors(e,i);const c=Dr.dot(rl),l=Rr.dot(rl);if(c<=0&&l<=0)return t.copy(i);sl.subVectors(e,n);const h=Dr.dot(sl),u=Rr.dot(sl);if(h>=0&&u<=h)return t.copy(n);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Dr,a);al.subVectors(e,r);const m=Dr.dot(al),_=Rr.dot(al);if(_>=0&&m<=_)return t.copy(r);const f=m*l-c*_;if(f<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(Rr,o);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return Uh.subVectors(r,n),o=(u-h)/(u-h+(m-_)),t.copy(n).addScaledVector(Uh,o);const g=1/(p+f+d);return a=f*g,o=d*g,t.copy(i).addScaledVector(Dr,a).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let sm=0;class la extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=ra(),this.name="",this.type="Material",this.blending=Jr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=nd,this.blendDst=rd,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==ss&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Po extends la{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new N,ya=new Ge;class rn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Eh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),i=di(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),i=di(i,this.array),n=di(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),i=di(i,this.array),n=di(n,this.array),r=di(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class fd extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pd extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ai extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let am=0;const Ei=new yt,ol=new Ut,Ir=new N,pi=new aa,Ss=new aa,Pt=new N;class Zi extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ld(e)?pd:fd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Mi().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,i){return Ei.makeTranslation(e,t,i),this.applyMatrix4(Ei),this}scale(e,t,i){return Ei.makeScale(e,t,i),this.applyMatrix4(Ei),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ai(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];pi.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(pi.min,Ss.min),pi.expandByPoint(Pt),Pt.addVectors(pi.max,Ss.max),pi.expandByPoint(Pt)):(pi.expandByPoint(Ss.min),pi.expandByPoint(Ss.max))}pi.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pt.fromBufferAttribute(o,l),c&&(Ir.fromBufferAttribute(e,l),Pt.add(Ir)),n=Math.max(n,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,r=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let P=0;P<o;P++)l[P]=new N,h[P]=new N;const u=new N,d=new N,m=new N,_=new Ge,f=new Ge,p=new Ge,g=new N,M=new N;function v(P,k,Q){u.fromArray(n,P*3),d.fromArray(n,k*3),m.fromArray(n,Q*3),_.fromArray(a,P*2),f.fromArray(a,k*2),p.fromArray(a,Q*2),d.sub(u),m.sub(u),f.sub(_),p.sub(_);const z=1/(f.x*p.y-p.x*f.y);isFinite(z)&&(g.copy(d).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(z),M.copy(m).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(z),l[P].add(g),l[k].add(g),l[Q].add(g),h[P].add(M),h[k].add(M),h[Q].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let P=0,k=y.length;P<k;++P){const Q=y[P],z=Q.start,R=Q.count;for(let O=z,Y=z+R;O<Y;O+=3)v(i[O+0],i[O+1],i[O+2])}const b=new N,L=new N,A=new N,x=new N;function S(P){A.fromArray(r,P*3),x.copy(A);const k=l[P];b.copy(k),b.sub(A.multiplyScalar(A.dot(k))).normalize(),L.crossVectors(x,k);const z=L.dot(h[P])<0?-1:1;c[P*4]=b.x,c[P*4+1]=b.y,c[P*4+2]=b.z,c[P*4+3]=z}for(let P=0,k=y.length;P<k;++P){const Q=y[P],z=Q.start,R=Q.count;for(let O=z,Y=z+R;O<Y;O+=3)S(i[O+0]),S(i[O+1]),S(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const n=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),f=e.getX(d+1),p=e.getX(d+2);n.fromBufferAttribute(t,_),r.fromBufferAttribute(t,f),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,f),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(f,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let m=0,_=0;for(let f=0,p=c.length;f<p;f++){o.isInterleavedBufferAttribute?m=c[f]*o.data.stride+o.offset:m=c[f]*h;for(let g=0;g<h;g++)d[_++]=l[m++]}return new rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zi,i=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=e(d,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const n={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(n[c]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const l in n){const h=n[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new yt,Fr=new yc,ll=new Co,Cn=new N,Ln=new N,Pn=new N,cl=new N,hl=new N,ul=new N,ba=new N,Ma=new N,Sa=new N,wa=new Ge,Ta=new Ge,Ea=new Ge,dl=new N,Aa=new N;class qi extends Ut{constructor(e=new Zi,t=new Po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(r),e.ray.intersectsSphere(ll)===!1)||(kh.copy(r).invert(),Fr.copy(e.ray).applyMatrix4(kh),i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,c=i.attributes.position,l=i.morphAttributes.position,h=i.morphTargetsRelative,u=i.attributes.uv,d=i.attributes.uv2,m=i.groups,_=i.drawRange;if(o!==null)if(Array.isArray(n))for(let f=0,p=m.length;f<p;f++){const g=m[f],M=n[g.materialIndex],v=Math.max(g.start,_.start),y=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let b=v,L=y;b<L;b+=3){const A=o.getX(b),x=o.getX(b+1),S=o.getX(b+2);a=Ca(this,M,e,Fr,c,l,h,u,d,A,x,S),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const f=Math.max(0,_.start),p=Math.min(o.count,_.start+_.count);for(let g=f,M=p;g<M;g+=3){const v=o.getX(g),y=o.getX(g+1),b=o.getX(g+2);a=Ca(this,n,e,Fr,c,l,h,u,d,v,y,b),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(n))for(let f=0,p=m.length;f<p;f++){const g=m[f],M=n[g.materialIndex],v=Math.max(g.start,_.start),y=Math.min(c.count,Math.min(g.start+g.count,_.start+_.count));for(let b=v,L=y;b<L;b+=3){const A=b,x=b+1,S=b+2;a=Ca(this,M,e,Fr,c,l,h,u,d,A,x,S),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const f=Math.max(0,_.start),p=Math.min(c.count,_.start+_.count);for(let g=f,M=p;g<M;g+=3){const v=g,y=g+1,b=g+2;a=Ca(this,n,e,Fr,c,l,h,u,d,v,y,b),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function om(s,e,t,i,n,r,a,o){let c;if(e.side===zi?c=i.intersectTriangle(a,r,n,!0,o):c=i.intersectTriangle(n,r,a,e.side!==Rn,o),c===null)return null;Aa.copy(o),Aa.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Aa);return l<t.near||l>t.far?null:{distance:l,point:Aa.clone(),object:s}}function Ca(s,e,t,i,n,r,a,o,c,l,h,u){Cn.fromBufferAttribute(n,l),Ln.fromBufferAttribute(n,h),Pn.fromBufferAttribute(n,u);const d=s.morphTargetInfluences;if(r&&d){ba.set(0,0,0),Ma.set(0,0,0),Sa.set(0,0,0);for(let _=0,f=r.length;_<f;_++){const p=d[_],g=r[_];p!==0&&(cl.fromBufferAttribute(g,l),hl.fromBufferAttribute(g,h),ul.fromBufferAttribute(g,u),a?(ba.addScaledVector(cl,p),Ma.addScaledVector(hl,p),Sa.addScaledVector(ul,p)):(ba.addScaledVector(cl.sub(Cn),p),Ma.addScaledVector(hl.sub(Ln),p),Sa.addScaledVector(ul.sub(Pn),p)))}Cn.add(ba),Ln.add(Ma),Pn.add(Sa)}s.isSkinnedMesh&&(s.boneTransform(l,Cn),s.boneTransform(h,Ln),s.boneTransform(u,Pn));const m=om(s,e,t,i,Cn,Ln,Pn,dl);if(m){o&&(wa.fromBufferAttribute(o,l),Ta.fromBufferAttribute(o,h),Ea.fromBufferAttribute(o,u),m.uv=en.getUV(dl,Cn,Ln,Pn,wa,Ta,Ea,new Ge)),c&&(wa.fromBufferAttribute(c,l),Ta.fromBufferAttribute(c,h),Ea.fromBufferAttribute(c,u),m.uv2=en.getUV(dl,Cn,Ln,Pn,wa,Ta,Ea,new Ge));const _={a:l,b:h,c:u,normal:new N,materialIndex:0};en.getNormal(Cn,Ln,Pn,_.normal),m.face=_}return m}class Hi extends Zi{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,n,a,2),_("x","z","y",1,-1,e,i,-t,n,a,3),_("x","y","z",1,-1,e,t,i,n,r,4),_("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(c),this.setAttribute("position",new ai(l,3)),this.setAttribute("normal",new ai(h,3)),this.setAttribute("uv",new ai(u,2));function _(f,p,g,M,v,y,b,L,A,x,S){const P=y/A,k=b/x,Q=y/2,z=b/2,R=L/2,O=A+1,Y=x+1;let T=0,U=0;const J=new N;for(let te=0;te<Y;te++){const B=te*k-z;for(let V=0;V<O;V++){const ee=V*P-Q;J[f]=ee*M,J[p]=B*v,J[g]=R,l.push(J.x,J.y,J.z),J[f]=0,J[p]=0,J[g]=L>0?1:-1,h.push(J.x,J.y,J.z),u.push(V/A),u.push(1-te/x),T+=1}}for(let te=0;te<x;te++)for(let B=0;B<A;B++){const V=d+B+O*te,ee=d+B+O*(te+1),j=d+(B+1)+O*(te+1),ie=d+(B+1)+O*te;c.push(V,ee,ie),c.push(ee,j,ie),U+=6}o.addGroup(m,U,S),m+=U,d+=T}}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function jt(s){const e={};for(let t=0;t<s.length;t++){const i=cs(s[t]);for(const n in i)e[n]=i[n]}return e}function lm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function md(s){return s.getRenderTarget()===null&&s.outputEncoding===ct?Ki:qs}const uo={clone:cs,merge:jt};var cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends la{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=lm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gd extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pi extends gd{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ch*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ch*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ka*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*n/c,t-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Or=-90,zr=1;class um extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new Pi(Or,zr,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const r=new Pi(Or,zr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Pi(Or,zr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Pi(Or,zr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new Pi(Or,zr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Pi(Or,zr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,r,a,o,c,l]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=yn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class _d extends si{constructor(e,t,i,n,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:as,super(e,t,i,n,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dm extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new _d(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Hi(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zi,blending:Un});r.uniforms.tEquirect.value=t;const a=new qi(n,r),o=t.minFilter;return t.minFilter===Ao&&(t.minFilter=Li),new um(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}const fl=new N,fm=new N,pm=new Mi;class Qn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=fl.subVectors(i,t).cross(fm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(fl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(i).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pm.getNormalMatrix(e),n=this.coplanarPoint(fl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Co,La=new N;class bc{constructor(e=new Qn,t=new Qn,i=new Qn,n=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],r=i[1],a=i[2],o=i[3],c=i[4],l=i[5],h=i[6],u=i[7],d=i[8],m=i[9],_=i[10],f=i[11],p=i[12],g=i[13],M=i[14],v=i[15];return t[0].setComponents(o-n,u-c,f-d,v-p).normalize(),t[1].setComponents(o+n,u+c,f+d,v+p).normalize(),t[2].setComponents(o+r,u+l,f+m,v+g).normalize(),t[3].setComponents(o-r,u-l,f-m,v-g).normalize(),t[4].setComponents(o-a,u-h,f-_,v-M).normalize(),t[5].setComponents(o+a,u+h,f+_,v+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(La.x=n.normal.x>0?e.max.x:e.min.x,La.y=n.normal.y>0?e.max.y:e.min.y,La.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xd(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function mm(s,e){const t=e.isWebGL2,i=new WeakMap;function n(l,h){const u=l.array,d=l.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(u instanceof Int16Array)_=5122;else if(u instanceof Uint32Array)_=5125;else if(u instanceof Int32Array)_=5124;else if(u instanceof Int8Array)_=5120;else if(u instanceof Uint8Array)_=5121;else if(u instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const d=h.array,m=h.updateRange;s.bindBuffer(u,l),m.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(s.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u===void 0?i.set(l,n(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:a,remove:o,update:c}}class Mc extends Zi{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,u=e/o,d=t/c,m=[],_=[],f=[],p=[];for(let g=0;g<h;g++){const M=g*d-a;for(let v=0;v<l;v++){const y=v*u-r;_.push(y,-M,0),f.push(0,0,1),p.push(v/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<o;M++){const v=M+l*g,y=M+l*(g+1),b=M+1+l*(g+1),L=M+1+l*g;m.push(v,y,L),m.push(y,b,L)}this.setIndex(m),this.setAttribute("position",new ai(_,3)),this.setAttribute("normal",new ai(f,3)),this.setAttribute("uv",new ai(p,2))}static fromJSON(e){return new Mc(e.width,e.height,e.widthSegments,e.heightSegments)}}var gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ym=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm="vec3 transformed = vec3( position );",Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Tm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Em=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Om=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,zm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ug=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,mg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Pg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jg=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Zg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,a_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,o_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,l_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,c_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,h_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,u_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,d_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,f_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,y_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,b_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,M_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,S_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,E_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,k_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,$_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,We={alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:xm,alphatest_pars_fragment:vm,aomap_fragment:ym,aomap_pars_fragment:bm,begin_vertex:Mm,beginnormal_vertex:Sm,bsdfs:wm,iridescence_fragment:Tm,bumpmap_pars_fragment:Em,clipping_planes_fragment:Am,clipping_planes_pars_fragment:Cm,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Pm,color_fragment:Dm,color_pars_fragment:Rm,color_pars_vertex:Im,color_vertex:Fm,common:Om,cube_uv_reflection_fragment:zm,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Um,displacementmap_vertex:km,emissivemap_fragment:Bm,emissivemap_pars_fragment:Gm,encodings_fragment:Vm,encodings_pars_fragment:Hm,envmap_fragment:Wm,envmap_common_pars_fragment:Xm,envmap_pars_fragment:$m,envmap_pars_vertex:qm,envmap_physical_pars_fragment:sg,envmap_vertex:Ym,fog_vertex:jm,fog_pars_vertex:Zm,fog_fragment:Km,fog_pars_fragment:Jm,gradientmap_pars_fragment:Qm,lightmap_fragment:eg,lightmap_pars_fragment:tg,lights_lambert_fragment:ig,lights_lambert_pars_fragment:ng,lights_pars_begin:rg,lights_toon_fragment:ag,lights_toon_pars_fragment:og,lights_phong_fragment:lg,lights_phong_pars_fragment:cg,lights_physical_fragment:hg,lights_physical_pars_fragment:ug,lights_fragment_begin:dg,lights_fragment_maps:fg,lights_fragment_end:pg,logdepthbuf_fragment:mg,logdepthbuf_pars_fragment:gg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:xg,map_fragment:vg,map_pars_fragment:yg,map_particle_fragment:bg,map_particle_pars_fragment:Mg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:wg,morphcolor_vertex:Tg,morphnormal_vertex:Eg,morphtarget_pars_vertex:Ag,morphtarget_vertex:Cg,normal_fragment_begin:Lg,normal_fragment_maps:Pg,normal_pars_fragment:Dg,normal_pars_vertex:Rg,normal_vertex:Ig,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Og,clearcoat_normal_fragment_maps:zg,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Ug,output_fragment:kg,packing:Bg,premultiplied_alpha_fragment:Gg,project_vertex:Vg,dithering_fragment:Hg,dithering_pars_fragment:Wg,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:$g,shadowmap_pars_fragment:qg,shadowmap_pars_vertex:Yg,shadowmap_vertex:jg,shadowmask_pars_fragment:Zg,skinbase_vertex:Kg,skinning_pars_vertex:Jg,skinning_vertex:Qg,skinnormal_vertex:e_,specularmap_fragment:t_,specularmap_pars_fragment:i_,tonemapping_fragment:n_,tonemapping_pars_fragment:r_,transmission_fragment:s_,transmission_pars_fragment:a_,uv_pars_fragment:o_,uv_pars_vertex:l_,uv_vertex:c_,uv2_pars_fragment:h_,uv2_pars_vertex:u_,uv2_vertex:d_,worldpos_vertex:f_,background_vert:p_,background_frag:m_,backgroundCube_vert:g_,backgroundCube_frag:__,cube_vert:x_,cube_frag:v_,depth_vert:y_,depth_frag:b_,distanceRGBA_vert:M_,distanceRGBA_frag:S_,equirect_vert:w_,equirect_frag:T_,linedashed_vert:E_,linedashed_frag:A_,meshbasic_vert:C_,meshbasic_frag:L_,meshlambert_vert:P_,meshlambert_frag:D_,meshmatcap_vert:R_,meshmatcap_frag:I_,meshnormal_vert:F_,meshnormal_frag:O_,meshphong_vert:z_,meshphong_frag:N_,meshphysical_vert:U_,meshphysical_frag:k_,meshtoon_vert:B_,meshtoon_frag:G_,points_vert:V_,points_frag:H_,shadow_vert:W_,shadow_frag:X_,sprite_vert:$_,sprite_frag:q_},ue={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Mi},uv2Transform:{value:new Mi},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Mi}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Mi}}},Qi={basic:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:jt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:jt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:jt([ue.points,ue.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:jt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:jt([ue.common,ue.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:jt([ue.sprite,ue.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Mi},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:jt([ue.common,ue.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:jt([ue.lights,ue.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Qi.physical={uniforms:jt([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Pa={r:0,b:0,g:0};function Y_(s,e,t,i,n,r,a){const o=new et(0);let c=r===!0?0:1,l,h,u=null,d=0,m=null;function _(p,g){let M=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));const y=s.xr,b=y.getSession&&y.getSession();b&&b.environmentBlendMode==="additive"&&(v=null),v===null?f(o,c):v&&v.isColor&&(f(v,1),M=!0),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Eo)?(h===void 0&&(h=new qi(new Hi(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:cs(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,(u!==v||d!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new qi(new Mc(2,2),new Si({name:"BackgroundMaterial",uniforms:cs(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function f(p,g){p.getRGB(Pa,md(s)),i.buffers.color.setClear(Pa.r,Pa.g,Pa.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(p,g=1){o.set(p),c=g,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,f(o,c)},render:_}}function j_(s,e,t,i){const n=s.getParameter(34921),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=p(null);let l=c,h=!1;function u(R,O,Y,T,U){let J=!1;if(a){const te=f(T,Y,O);l!==te&&(l=te,m(l.object)),J=g(R,T,Y,U),J&&M(R,T,Y,U)}else{const te=O.wireframe===!0;(l.geometry!==T.id||l.program!==Y.id||l.wireframe!==te)&&(l.geometry=T.id,l.program=Y.id,l.wireframe=te,J=!0)}U!==null&&t.update(U,34963),(J||h)&&(h=!1,x(R,O,Y,T),U!==null&&s.bindBuffer(34963,t.get(U).buffer))}function d(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return i.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function _(R){return i.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function f(R,O,Y){const T=Y.wireframe===!0;let U=o[R.id];U===void 0&&(U={},o[R.id]=U);let J=U[O.id];J===void 0&&(J={},U[O.id]=J);let te=J[T];return te===void 0&&(te=p(d()),J[T]=te),te}function p(R){const O=[],Y=[],T=[];for(let U=0;U<n;U++)O[U]=0,Y[U]=0,T[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:T,object:R,attributes:{},index:null}}function g(R,O,Y,T){const U=l.attributes,J=O.attributes;let te=0;const B=Y.getAttributes();for(const V in B)if(B[V].location>=0){const j=U[V];let ie=J[V];if(ie===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),j===void 0||j.attribute!==ie||ie&&j.data!==ie.data)return!0;te++}return l.attributesNum!==te||l.index!==T}function M(R,O,Y,T){const U={},J=O.attributes;let te=0;const B=Y.getAttributes();for(const V in B)if(B[V].location>=0){let j=J[V];j===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(j=R.instanceColor));const ie={};ie.attribute=j,j&&j.data&&(ie.data=j.data),U[V]=ie,te++}l.attributes=U,l.attributesNum=te,l.index=T}function v(){const R=l.newAttributes;for(let O=0,Y=R.length;O<Y;O++)R[O]=0}function y(R){b(R,0)}function b(R,O){const Y=l.newAttributes,T=l.enabledAttributes,U=l.attributeDivisors;Y[R]=1,T[R]===0&&(s.enableVertexAttribArray(R),T[R]=1),U[R]!==O&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,O),U[R]=O)}function L(){const R=l.newAttributes,O=l.enabledAttributes;for(let Y=0,T=O.length;Y<T;Y++)O[Y]!==R[Y]&&(s.disableVertexAttribArray(Y),O[Y]=0)}function A(R,O,Y,T,U,J){i.isWebGL2===!0&&(Y===5124||Y===5125)?s.vertexAttribIPointer(R,O,Y,U,J):s.vertexAttribPointer(R,O,Y,T,U,J)}function x(R,O,Y,T){if(i.isWebGL2===!1&&(R.isInstancedMesh||T.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const U=T.attributes,J=Y.getAttributes(),te=O.defaultAttributeValues;for(const B in J){const V=J[B];if(V.location>=0){let ee=U[B];if(ee===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor)),ee!==void 0){const j=ee.normalized,ie=ee.itemSize,q=t.get(ee);if(q===void 0)continue;const Ue=q.buffer,de=q.type,ye=q.bytesPerElement;if(ee.isInterleavedBufferAttribute){const se=ee.data,Pe=se.stride,Ae=ee.offset;if(se.isInstancedInterleavedBuffer){for(let Me=0;Me<V.locationSize;Me++)b(V.location+Me,se.meshPerAttribute);R.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Me=0;Me<V.locationSize;Me++)y(V.location+Me);s.bindBuffer(34962,Ue);for(let Me=0;Me<V.locationSize;Me++)A(V.location+Me,ie/V.locationSize,de,j,Pe*ye,(Ae+ie/V.locationSize*Me)*ye)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)b(V.location+se,ee.meshPerAttribute);R.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<V.locationSize;se++)y(V.location+se);s.bindBuffer(34962,Ue);for(let se=0;se<V.locationSize;se++)A(V.location+se,ie/V.locationSize,de,j,ie*ye,ie/V.locationSize*se*ye)}}else if(te!==void 0){const j=te[B];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(V.location,j);break;case 3:s.vertexAttrib3fv(V.location,j);break;case 4:s.vertexAttrib4fv(V.location,j);break;default:s.vertexAttrib1fv(V.location,j)}}}}L()}function S(){Q();for(const R in o){const O=o[R];for(const Y in O){const T=O[Y];for(const U in T)_(T[U].object),delete T[U];delete O[Y]}delete o[R]}}function P(R){if(o[R.id]===void 0)return;const O=o[R.id];for(const Y in O){const T=O[Y];for(const U in T)_(T[U].object),delete T[U];delete O[Y]}delete o[R.id]}function k(R){for(const O in o){const Y=o[O];if(Y[R.id]===void 0)continue;const T=Y[R.id];for(const U in T)_(T[U].object),delete T[U];delete Y[R.id]}}function Q(){z(),h=!0,l!==c&&(l=c,m(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Q,resetDefaultState:z,dispose:S,releaseStatesOfGeometry:P,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:y,disableUnusedAttributes:L}}function Z_(s,e,t,i){const n=i.isWebGL2;let r;function a(l){r=l}function o(l,h){s.drawArrays(r,l,h),t.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,m;if(n)d=s,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,l,h,u),t.update(h,r,u)}this.setMode=a,this.render=o,this.renderInstances=c}function K_(s,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),m=s.getParameter(3379),_=s.getParameter(34076),f=s.getParameter(34921),p=s.getParameter(36347),g=s.getParameter(36348),M=s.getParameter(36349),v=d>0,y=a||e.has("OES_texture_float"),b=v&&y,L=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:L}}function J_(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new Qn,o=new Mi,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,m){const _=u.length!==0||d||i!==0||n;return n=d,t=h(u,m,0),i=u.length,_},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,l()},this.setState=function(u,d,m){const _=u.clippingPlanes,f=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!n||_===null||_.length===0||r&&!p)r?h(null):l();else{const M=r?0:i,v=M*4;let y=g.clippingState||null;c.value=y,y=h(_,d,v,m);for(let b=0;b!==v;++b)y[b]=t[b];g.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,_){const f=u!==null?u.length:0;let p=null;if(f!==0){if(p=c.value,_!==!0||p===null){const g=m+f*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,y=m;v!==f;++v,y+=4)a.copy(u[v]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,p}}function Q_(s){let e=new WeakMap;function t(a,o){return o===kl?a.mapping=as:o===Bl&&(a.mapping=os),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===kl||o===Bl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new dm(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",n),t(l.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Do extends gd{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qr=4,Bh=[.125,.215,.35,.446,.526,.582],rr=20,pl=new Do,Gh=new et;let ml=null;const er=(1+Math.sqrt(5))/2,Ur=1/er,Vh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,er,Ur),new N(0,er,-Ur),new N(Ur,0,er),new N(-Ur,0,er),new N(er,Ur,0),new N(-er,Ur,0)];class Hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){ml=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ml),e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ml=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:$s,format:$i,encoding:vr,depthBuffer:!1},n=Wh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(r)),this._blurMaterial=t0(r,e,t)}return n}_compileMaterial(e){const t=new qi(this._lodPlanes[0],e);this._renderer.compile(t,pl)}_sceneToCubeUV(e,t,i,n){const o=new Pi(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gh),h.toneMapping=yn,h.autoClear=!1;const m=new Po({name:"PMREM.Background",side:zi,depthWrite:!1,depthTest:!1}),_=new qi(new Hi,m);let f=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,f=!0):(m.color.copy(Gh),f=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(o.up.set(0,c[g],0),o.lookAt(l[g],0,0)):M===1?(o.up.set(0,0,c[g]),o.lookAt(0,l[g],0)):(o.up.set(0,c[g],0),o.lookAt(0,0,l[g]));const v=this._cubeSize;Da(n,M*v,g>2?v:0,v,v),h.setRenderTarget(n),f&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===as||e.mapping===os;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=$h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new qi(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Da(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,pl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Vh[(n-1)%Vh.length];this._blur(e,n-1,n,r,a)}t.autoClear=i}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new qi(this._lodPlanes[n],l),d=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*rr-1),f=r/_,p=isFinite(r)?1+Math.floor(h*f):rr;p>rr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rr}`);const g=[];let M=0;for(let A=0;A<rr;++A){const x=A/f,S=Math.exp(-x*x/2);g.push(S),A===0?M+=S:A<p&&(M+=2*S)}for(let A=0;A<g.length;A++)g[A]=g[A]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const y=this._sizeLods[n],b=3*y*(n>v-qr?n-v+qr:0),L=4*(this._cubeSize-y);Da(t,b,L,3*y,2*y),c.setRenderTarget(t),c.render(u,pl)}}function e0(s){const e=[],t=[],i=[];let n=s;const r=s-qr+1+Bh.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);t.push(o);let c=1/o;a>s-qr?c=Bh[a-s+qr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,f=3,p=2,g=1,M=new Float32Array(f*_*m),v=new Float32Array(p*_*m),y=new Float32Array(g*_*m);for(let L=0;L<m;L++){const A=L%3*2/3-1,x=L>2?0:-1,S=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];M.set(S,f*_*L),v.set(d,p*_*L);const P=[L,L,L,L,L,L];y.set(P,g*_*L)}const b=new Zi;b.setAttribute("position",new rn(M,f)),b.setAttribute("uv",new rn(v,p)),b.setAttribute("faceIndex",new rn(y,g)),e.push(b),n>qr&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wh(s,e,t){const i=new Yi(s,e,t);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Da(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function t0(s,e,t){const i=new Float32Array(rr),n=new N(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Xh(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function $h(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function i0(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===kl||c===Bl,h=c===as||c===os;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Hh(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new Hh(s));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function n(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function n0(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function r0(s,e,t,i){const n={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete n[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)e.update(d[_],34962);const m=u.morphAttributes;for(const _ in m){const f=m[_];for(let p=0,g=f.length;p<g;p++)e.update(f[p],34962)}}function l(u){const d=[],m=u.index,_=u.attributes.position;let f=0;if(m!==null){const M=m.array;f=m.version;for(let v=0,y=M.length;v<y;v+=3){const b=M[v+0],L=M[v+1],A=M[v+2];d.push(b,L,L,A,A,b)}}else{const M=_.array;f=_.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const b=v+0,L=v+1,A=v+2;d.push(b,L,L,A,A,b)}}const p=new(ld(d)?pd:fd)(d,1);p.version=f;const g=r.get(u);g&&e.remove(g),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function s0(s,e,t,i){const n=i.isWebGL2;let r;function a(d){r=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,m){s.drawElements(r,m,o,d*c),t.update(m,r,1)}function u(d,m,_){if(_===0)return;let f,p;if(n)f=s,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,m,o,d*c,_),t.update(m,r,_)}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u}function a0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function o0(s,e){return s[0]-e[0]}function l0(s,e){return Math.abs(e[1])-Math.abs(s[1])}function c0(s,e,t){const i={},n=new Float32Array(8),r=new WeakMap,a=new It,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u,d){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=f!==void 0?f.length:0;let g=r.get(h);if(g===void 0||g.count!==p){let Y=function(){R.dispose(),r.delete(h),h.removeEventListener("dispose",Y)};var _=Y;g!==void 0&&g.texture.dispose();const y=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],S=h.morphAttributes.color||[];let P=0;y===!0&&(P=1),b===!0&&(P=2),L===!0&&(P=3);let k=h.attributes.position.count*P,Q=1;k>e.maxTextureSize&&(Q=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const z=new Float32Array(k*Q*4*p),R=new dd(z,k,Q,p);R.type=ar,R.needsUpdate=!0;const O=P*4;for(let T=0;T<p;T++){const U=A[T],J=x[T],te=S[T],B=k*Q*4*T;for(let V=0;V<U.count;V++){const ee=V*O;y===!0&&(a.fromBufferAttribute(U,V),z[B+ee+0]=a.x,z[B+ee+1]=a.y,z[B+ee+2]=a.z,z[B+ee+3]=0),b===!0&&(a.fromBufferAttribute(J,V),z[B+ee+4]=a.x,z[B+ee+5]=a.y,z[B+ee+6]=a.z,z[B+ee+7]=0),L===!0&&(a.fromBufferAttribute(te,V),z[B+ee+8]=a.x,z[B+ee+9]=a.y,z[B+ee+10]=a.z,z[B+ee+11]=te.itemSize===4?a.w:1)}}g={count:p,texture:R,size:new Ge(k,Q)},r.set(h,g),h.addEventListener("dispose",Y)}let M=0;for(let y=0;y<m.length;y++)M+=m[y];const v=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",m),d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const f=m===void 0?0:m.length;let p=i[h.id];if(p===void 0||p.length!==f){p=[];for(let b=0;b<f;b++)p[b]=[b,0];i[h.id]=p}for(let b=0;b<f;b++){const L=p[b];L[0]=b,L[1]=m[b]}p.sort(l0);for(let b=0;b<8;b++)b<f&&p[b][1]?(o[b][0]=p[b][0],o[b][1]=p[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(o0);const g=h.morphAttributes.position,M=h.morphAttributes.normal;let v=0;for(let b=0;b<8;b++){const L=o[b],A=L[0],x=L[1];A!==Number.MAX_SAFE_INTEGER&&x?(g&&h.getAttribute("morphTarget"+b)!==g[A]&&h.setAttribute("morphTarget"+b,g[A]),M&&h.getAttribute("morphNormal"+b)!==M[A]&&h.setAttribute("morphNormal"+b,M[A]),n[b]=x,v+=x):(g&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),M&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),n[b]=0)}const y=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(s,"morphTargetBaseInfluence",y),d.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:c}}function h0(s,e,t,i){let n=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);return n.get(u)!==l&&(e.update(u),n.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function a(){n=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const vd=new si,yd=new dd,bd=new Kp,Md=new _d,qh=[],Yh=[],jh=new Float32Array(16),Zh=new Float32Array(9),Kh=new Float32Array(4);function xs(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=qh[n];if(r===void 0&&(r=new Float32Array(n),qh[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Tt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Et(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Ro(s,e){let t=Yh[e];t===void 0&&(t=new Int32Array(e),Yh[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function u0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function d0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2fv(this.addr,e),Et(t,e)}}function f0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;s.uniform3fv(this.addr,e),Et(t,e)}}function p0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4fv(this.addr,e),Et(t,e)}}function m0(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;Kh.set(i),s.uniformMatrix2fv(this.addr,!1,Kh),Et(t,i)}}function g0(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;Zh.set(i),s.uniformMatrix3fv(this.addr,!1,Zh),Et(t,i)}}function _0(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;jh.set(i),s.uniformMatrix4fv(this.addr,!1,jh),Et(t,i)}}function x0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function v0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2iv(this.addr,e),Et(t,e)}}function y0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3iv(this.addr,e),Et(t,e)}}function b0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4iv(this.addr,e),Et(t,e)}}function M0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function S0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2uiv(this.addr,e),Et(t,e)}}function w0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3uiv(this.addr,e),Et(t,e)}}function T0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4uiv(this.addr,e),Et(t,e)}}function E0(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||vd,n)}function A0(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||bd,n)}function C0(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Md,n)}function L0(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||yd,n)}function P0(s){switch(s){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return v0;case 35668:case 35672:return y0;case 35669:case 35673:return b0;case 5125:return M0;case 36294:return S0;case 36295:return w0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return L0}}function D0(s,e){s.uniform1fv(this.addr,e)}function R0(s,e){const t=xs(e,this.size,2);s.uniform2fv(this.addr,t)}function I0(s,e){const t=xs(e,this.size,3);s.uniform3fv(this.addr,t)}function F0(s,e){const t=xs(e,this.size,4);s.uniform4fv(this.addr,t)}function O0(s,e){const t=xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function z0(s,e){const t=xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function N0(s,e){const t=xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function U0(s,e){s.uniform1iv(this.addr,e)}function k0(s,e){s.uniform2iv(this.addr,e)}function B0(s,e){s.uniform3iv(this.addr,e)}function G0(s,e){s.uniform4iv(this.addr,e)}function V0(s,e){s.uniform1uiv(this.addr,e)}function H0(s,e){s.uniform2uiv(this.addr,e)}function W0(s,e){s.uniform3uiv(this.addr,e)}function X0(s,e){s.uniform4uiv(this.addr,e)}function $0(s,e,t){const i=this.cache,n=e.length,r=Ro(t,n);Tt(i,r)||(s.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||vd,r[a])}function q0(s,e,t){const i=this.cache,n=e.length,r=Ro(t,n);Tt(i,r)||(s.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||bd,r[a])}function Y0(s,e,t){const i=this.cache,n=e.length,r=Ro(t,n);Tt(i,r)||(s.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Md,r[a])}function j0(s,e,t){const i=this.cache,n=e.length,r=Ro(t,n);Tt(i,r)||(s.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||yd,r[a])}function Z0(s){switch(s){case 5126:return D0;case 35664:return R0;case 35665:return I0;case 35666:return F0;case 35674:return O0;case 35675:return z0;case 35676:return N0;case 5124:case 35670:return U0;case 35667:case 35671:return k0;case 35668:case 35672:return B0;case 35669:case 35673:return G0;case 5125:return V0;case 36294:return H0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return j0}}class K0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=P0(t.type)}}class J0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Z0(t.type)}}class Q0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const gl=/(\w+)(\])?(\[|\.)?/g;function Jh(s,e){s.seq.push(e),s.map[e.id]=e}function ex(s,e,t){const i=s.name,n=i.length;for(gl.lastIndex=0;;){const r=gl.exec(i),a=gl.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){Jh(t,l===void 0?new K0(o,s,e):new J0(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Q0(o),Jh(t,u)),t=u}}}class Qa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);ex(r,a,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Qh(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}let tx=0;function ix(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function nx(s){switch(s){case vr:return["Linear","( value )"];case ct:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function eu(s,e,t){const i=s.getShaderParameter(e,35713),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+ix(s.getShaderSource(e),a)}else return n}function rx(s,e){const t=nx(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function sx(s,e){let t;switch(e){case Sp:t="Linear";break;case wp:t="Reinhard";break;case Tp:t="OptimizedCineon";break;case Ep:t="ACESFilmic";break;case Ap:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ax(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function ox(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lx(s,e){const t={},i=s.getProgramParameter(e,35721);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Cs(s){return s!==""}function tu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(s){return s.replace(cx,hx)}function hx(s,e){const t=We[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Xl(t)}const ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(s){return s.replace(ux,dx)}function dx(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function ru(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===id?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===tp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===As&&(e="SHADOWMAP_TYPE_VSM"),e}function px(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case as:case os:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function gx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sd:e="ENVMAP_BLENDING_MULTIPLY";break;case bp:e="ENVMAP_BLENDING_MIX";break;case Mp:e="ENVMAP_BLENDING_ADD";break}return e}function _x(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xx(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=fx(t),l=px(t),h=mx(t),u=gx(t),d=_x(t),m=t.isWebGL2?"":ax(t),_=ox(r),f=n.createProgram();let p,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(Cs).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(Cs).join(`
`),g.length>0&&(g+=`
`)):(p=[ru(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),g=[m,ru(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?We.tonemapping_pars_fragment:"",t.toneMapping!==yn?sx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.encodings_pars_fragment,rx("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Xl(a),a=tu(a,t),a=iu(a,t),o=Xl(o),o=tu(o,t),o=iu(o,t),a=nu(a),o=nu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=M+p+a,y=M+g+o,b=Qh(n,35633,v),L=Qh(n,35632,y);if(n.attachShader(f,b),n.attachShader(f,L),t.index0AttributeName!==void 0?n.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f),s.debug.checkShaderErrors){const S=n.getProgramInfoLog(f).trim(),P=n.getShaderInfoLog(b).trim(),k=n.getShaderInfoLog(L).trim();let Q=!0,z=!0;if(n.getProgramParameter(f,35714)===!1){Q=!1;const R=eu(n,b,"vertex"),O=eu(n,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,35715)+`

Program Info Log: `+S+`
`+R+`
`+O)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(P===""||k==="")&&(z=!1);z&&(this.diagnostics={runnable:Q,programLog:S,vertexShader:{log:P,prefix:p},fragmentShader:{log:k,prefix:g}})}n.deleteShader(b),n.deleteShader(L);let A;this.getUniforms=function(){return A===void 0&&(A=new Qa(n,f)),A};let x;return this.getAttributes=function(){return x===void 0&&(x=lx(n,f)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=tx++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=L,this}let vx=0;class yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bx(e),t.set(e,i)),i}}class bx{constructor(e){this.id=vx++,this.code=e,this.usedTimes=0}}function Mx(s,e,t,i,n,r,a){const o=new Lo,c=new yx,l=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x,S,P,k,Q){const z=k.fog,R=Q.geometry,O=x.isMeshStandardMaterial?k.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||O),T=Y&&Y.mapping===Eo?Y.image.height:null,U=_[x.type];x.precision!==null&&(m=n.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const J=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,te=J!==void 0?J.length:0;let B=0;R.morphAttributes.position!==void 0&&(B=1),R.morphAttributes.normal!==void 0&&(B=2),R.morphAttributes.color!==void 0&&(B=3);let V,ee,j,ie;if(U){const Pe=Qi[U];V=Pe.vertexShader,ee=Pe.fragmentShader}else V=x.vertexShader,ee=x.fragmentShader,c.update(x),j=c.getVertexShaderID(x),ie=c.getFragmentShaderID(x);const q=s.getRenderTarget(),Ue=x.alphaTest>0,de=x.clearcoat>0,ye=x.iridescence>0;return{isWebGL2:h,shaderID:U,shaderName:x.type,vertexShader:V,fragmentShader:ee,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:d,outputEncoding:q===null?s.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:vr,map:!!x.map,matcap:!!x.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:T,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===qp,tangentSpaceNormalMap:x.normalMapType===$p,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===ct,clearcoat:de,clearcoatMap:de&&!!x.clearcoatMap,clearcoatRoughnessMap:de&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!x.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!x.iridescenceMap,iridescenceThicknessMap:ye&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Jr,alphaMap:!!x.alphaMap,alphaTest:Ue,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:B,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:yn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Rn,flipSided:x.side===zi,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(g(S,x),M(S,x),S.push(s.outputEncoding)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputEncoding),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.combine),x.push(S.vertexUvs),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.map&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.lightMap&&o.enable(7),S.aoMap&&o.enable(8),S.emissiveMap&&o.enable(9),S.bumpMap&&o.enable(10),S.normalMap&&o.enable(11),S.objectSpaceNormalMap&&o.enable(12),S.tangentSpaceNormalMap&&o.enable(13),S.clearcoat&&o.enable(14),S.clearcoatMap&&o.enable(15),S.clearcoatRoughnessMap&&o.enable(16),S.clearcoatNormalMap&&o.enable(17),S.iridescence&&o.enable(18),S.iridescenceMap&&o.enable(19),S.iridescenceThicknessMap&&o.enable(20),S.displacementMap&&o.enable(21),S.specularMap&&o.enable(22),S.roughnessMap&&o.enable(23),S.metalnessMap&&o.enable(24),S.gradientMap&&o.enable(25),S.alphaMap&&o.enable(26),S.alphaTest&&o.enable(27),S.vertexColors&&o.enable(28),S.vertexAlphas&&o.enable(29),S.vertexUvs&&o.enable(30),S.vertexTangents&&o.enable(31),S.uvsVertexOnly&&o.enable(32),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.physicallyCorrectLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.specularIntensityMap&&o.enable(15),S.specularColorMap&&o.enable(16),S.transmission&&o.enable(17),S.transmissionMap&&o.enable(18),S.thicknessMap&&o.enable(19),S.sheen&&o.enable(20),S.sheenColorMap&&o.enable(21),S.sheenRoughnessMap&&o.enable(22),S.decodeVideoTexture&&o.enable(23),S.opaque&&o.enable(24),x.push(o.mask)}function v(x){const S=_[x.type];let P;if(S){const k=Qi[S];P=uo.clone(k.uniforms)}else P=x.uniforms;return P}function y(x,S){let P;for(let k=0,Q=l.length;k<Q;k++){const z=l[k];if(z.cacheKey===S){P=z,++P.usedTimes;break}}return P===void 0&&(P=new xx(s,S,x,r),l.push(P)),P}function b(x){if(--x.usedTimes===0){const S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),x.destroy()}}function L(x){c.remove(x)}function A(){c.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:L,programs:l,dispose:A}}function Sx(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function i(r,a,o){s.get(r)[a]=o}function n(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function wx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function su(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function au(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(u,d,m,_,f,p){let g=s[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:f,group:p},s[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=m,g.groupOrder=_,g.renderOrder=u.renderOrder,g.z=f,g.group=p),e++,g}function o(u,d,m,_,f,p){const g=a(u,d,m,_,f,p);m.transmission>0?i.push(g):m.transparent===!0?n.push(g):t.push(g)}function c(u,d,m,_,f,p){const g=a(u,d,m,_,f,p);m.transmission>0?i.unshift(g):m.transparent===!0?n.unshift(g):t.unshift(g)}function l(u,d){t.length>1&&t.sort(u||wx),i.length>1&&i.sort(d||su),n.length>1&&n.sort(d||su)}function h(){for(let u=e,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:c,finish:h,sort:l}}function Tx(){let s=new WeakMap;function e(i,n){const r=s.get(i);let a;return r===void 0?(a=new au,s.set(i,[a])):n>=r.length?(a=new au,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ex(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new et};break;case"SpotLight":t={position:new N,direction:new N,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function Ax(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Cx=0;function Lx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Px(s,e){const t=new Ex,i=Ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new N);const r=new N,a=new yt,o=new yt;function c(h,u){let d=0,m=0,_=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,p=0,g=0,M=0,v=0,y=0,b=0,L=0,A=0,x=0;h.sort(Lx);const S=u!==!0?Math.PI:1;for(let k=0,Q=h.length;k<Q;k++){const z=h[k],R=z.color,O=z.intensity,Y=z.distance,T=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=R.r*O*S,m+=R.g*O*S,_+=R.b*O*S;else if(z.isLightProbe)for(let U=0;U<9;U++)n.probe[U].addScaledVector(z.sh.coefficients[U],O);else if(z.isDirectionalLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity*S),z.castShadow){const J=z.shadow,te=i.get(z);te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,n.directionalShadow[f]=te,n.directionalShadowMap[f]=T,n.directionalShadowMatrix[f]=z.shadow.matrix,y++}n.directional[f]=U,f++}else if(z.isSpotLight){const U=t.get(z);U.position.setFromMatrixPosition(z.matrixWorld),U.color.copy(R).multiplyScalar(O*S),U.distance=Y,U.coneCos=Math.cos(z.angle),U.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),U.decay=z.decay,n.spot[g]=U;const J=z.shadow;if(z.map&&(n.spotLightMap[A]=z.map,A++,J.updateMatrices(z),z.castShadow&&x++),n.spotLightMatrix[g]=J.matrix,z.castShadow){const te=i.get(z);te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,n.spotShadow[g]=te,n.spotShadowMap[g]=T,L++}g++}else if(z.isRectAreaLight){const U=t.get(z);U.color.copy(R).multiplyScalar(O),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),n.rectArea[M]=U,M++}else if(z.isPointLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity*S),U.distance=z.distance,U.decay=z.decay,z.castShadow){const J=z.shadow,te=i.get(z);te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,te.shadowCameraNear=J.camera.near,te.shadowCameraFar=J.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=T,n.pointShadowMatrix[p]=z.shadow.matrix,b++}n.point[p]=U,p++}else if(z.isHemisphereLight){const U=t.get(z);U.skyColor.copy(z.color).multiplyScalar(O*S),U.groundColor.copy(z.groundColor).multiplyScalar(O*S),n.hemi[v]=U,v++}}M>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=_;const P=n.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==g||P.rectAreaLength!==M||P.hemiLength!==v||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==L||P.numSpotMaps!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=M,n.point.length=p,n.hemi.length=v,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=L+A-x,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=x,P.directionalLength=f,P.pointLength=p,P.spotLength=g,P.rectAreaLength=M,P.hemiLength=v,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=L,P.numSpotMaps=A,n.version=Cx++)}function l(h,u){let d=0,m=0,_=0,f=0,p=0;const g=u.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){const y=h[M];if(y.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),d++}else if(y.isSpotLight){const b=n.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),_++}else if(y.isRectAreaLight){const b=n.rectArea[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),a.copy(y.matrixWorld),a.premultiply(g),o.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),f++}else if(y.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),m++}else if(y.isHemisphereLight){const b=n.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:c,setupView:l,state:n}}function ou(s,e){const t=new Px(s,e),i=[],n=[];function r(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Dx(s,e){let t=new WeakMap;function i(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new ou(s,e),t.set(r,[c])):a>=o.length?(c=new ou(s,e),o.push(c)):c=o[a],c}function n(){t=new WeakMap}return{get:i,dispose:n}}class Rx extends la{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ix extends la{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zx(s,e,t){let i=new bc;const n=new Ge,r=new Ge,a=new It,o=new Rx({depthPacking:Xp}),c=new Ix,l={},h=t.maxTextureSize,u={0:zi,1:ss,2:Rn},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Fx,fragmentShader:Ox}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Zi;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new qi(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=id,this.render=function(y,b,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const A=s.getRenderTarget(),x=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Un),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let k=0,Q=y.length;k<Q;k++){const z=y[k],R=z.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;n.copy(R.mapSize);const O=R.getFrameExtents();if(n.multiply(O),r.copy(R.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/O.x),n.x=r.x*O.x,R.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/O.y),n.y=r.y*O.y,R.mapSize.y=r.y)),R.map===null){const T=this.type!==As?{minFilter:ri,magFilter:ri}:{};R.map=new Yi(n.x,n.y,T),R.map.texture.name=z.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();const Y=R.getViewportCount();for(let T=0;T<Y;T++){const U=R.getViewport(T);a.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),P.viewport(a),R.updateMatrices(z,T),i=R.getFrustum(),v(b,L,R.camera,z,this.type)}R.isPointLightShadow!==!0&&this.type===As&&g(R,L),R.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(A,x,S)};function g(y,b){const L=e.update(f);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Yi(n.x,n.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(b,null,L,d,f,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(b,null,L,m,f,null)}function M(y,b,L,A,x,S){let P=null;const k=L.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(k!==void 0?P=k:P=L.isPointLight===!0?c:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const Q=P.uuid,z=b.uuid;let R=l[Q];R===void 0&&(R={},l[Q]=R);let O=R[z];O===void 0&&(O=P.clone(),R[z]=O),P=O}return P.visible=b.visible,P.wireframe=b.wireframe,S===As?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:u[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,L.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(L.matrixWorld),P.nearDistance=A,P.farDistance=x),P}function v(y,b,L,A,x){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===As)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);const k=e.update(y),Q=y.material;if(Array.isArray(Q)){const z=k.groups;for(let R=0,O=z.length;R<O;R++){const Y=z[R],T=Q[Y.materialIndex];if(T&&T.visible){const U=M(y,T,A,L.near,L.far,x);s.renderBufferDirect(L,null,k,U,y,Y)}}}else if(Q.visible){const z=M(y,Q,A,L.near,L.far,x);s.renderBufferDirect(L,null,k,z,y,null)}}const P=y.children;for(let k=0,Q=P.length;k<Q;k++)v(P[k],b,L,A,x)}}function Nx(s,e,t){const i=t.isWebGL2;function n(){let D=!1;const X=new It;let re=null;const fe=new It(0,0,0,0);return{setMask:function(ge){re!==ge&&!D&&(s.colorMask(ge,ge,ge,ge),re=ge)},setLocked:function(ge){D=ge},setClear:function(ge,ae,Z,ce,_e){_e===!0&&(ge*=ce,ae*=ce,Z*=ce),X.set(ge,ae,Z,ce),fe.equals(X)===!1&&(s.clearColor(ge,ae,Z,ce),fe.copy(X))},reset:function(){D=!1,re=null,fe.set(-1,0,0,0)}}}function r(){let D=!1,X=null,re=null,fe=null;return{setTest:function(ge){ge?Ue(2929):de(2929)},setMask:function(ge){X!==ge&&!D&&(s.depthMask(ge),X=ge)},setFunc:function(ge){if(re!==ge){switch(ge){case pp:s.depthFunc(512);break;case mp:s.depthFunc(519);break;case gp:s.depthFunc(513);break;case Ul:s.depthFunc(515);break;case _p:s.depthFunc(514);break;case xp:s.depthFunc(518);break;case vp:s.depthFunc(516);break;case yp:s.depthFunc(517);break;default:s.depthFunc(515)}re=ge}},setLocked:function(ge){D=ge},setClear:function(ge){fe!==ge&&(s.clearDepth(ge),fe=ge)},reset:function(){D=!1,X=null,re=null,fe=null}}}function a(){let D=!1,X=null,re=null,fe=null,ge=null,ae=null,Z=null,ce=null,_e=null;return{setTest:function(Ee){D||(Ee?Ue(2960):de(2960))},setMask:function(Ee){X!==Ee&&!D&&(s.stencilMask(Ee),X=Ee)},setFunc:function(Ee,De,Xe){(re!==Ee||fe!==De||ge!==Xe)&&(s.stencilFunc(Ee,De,Xe),re=Ee,fe=De,ge=Xe)},setOp:function(Ee,De,Xe){(ae!==Ee||Z!==De||ce!==Xe)&&(s.stencilOp(Ee,De,Xe),ae=Ee,Z=De,ce=Xe)},setLocked:function(Ee){D=Ee},setClear:function(Ee){_e!==Ee&&(s.clearStencil(Ee),_e=Ee)},reset:function(){D=!1,X=null,re=null,fe=null,ge=null,ae=null,Z=null,ce=null,_e=null}}}const o=new n,c=new r,l=new a,h=new WeakMap,u=new WeakMap;let d={},m={},_=new WeakMap,f=[],p=null,g=!1,M=null,v=null,y=null,b=null,L=null,A=null,x=null,S=!1,P=null,k=null,Q=null,z=null,R=null;const O=s.getParameter(35661);let Y=!1,T=0;const U=s.getParameter(7938);U.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(U)[1]),Y=T>=1):U.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),Y=T>=2);let J=null,te={};const B=s.getParameter(3088),V=s.getParameter(2978),ee=new It().fromArray(B),j=new It().fromArray(V);function ie(D,X,re){const fe=new Uint8Array(4),ge=s.createTexture();s.bindTexture(D,ge),s.texParameteri(D,10241,9728),s.texParameteri(D,10240,9728);for(let ae=0;ae<re;ae++)s.texImage2D(X+ae,0,6408,1,1,0,6408,5121,fe);return ge}const q={};q[3553]=ie(3553,3553,1),q[34067]=ie(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ue(2929),c.setFunc(Ul),it(!1),ft(Jc),Ue(2884),je(Un);function Ue(D){d[D]!==!0&&(s.enable(D),d[D]=!0)}function de(D){d[D]!==!1&&(s.disable(D),d[D]=!1)}function ye(D,X){return m[D]!==X?(s.bindFramebuffer(D,X),m[D]=X,i&&(D===36009&&(m[36160]=X),D===36160&&(m[36009]=X)),!0):!1}function se(D,X){let re=f,fe=!1;if(D)if(re=_.get(X),re===void 0&&(re=[],_.set(X,re)),D.isWebGLMultipleRenderTargets){const ge=D.texture;if(re.length!==ge.length||re[0]!==36064){for(let ae=0,Z=ge.length;ae<Z;ae++)re[ae]=36064+ae;re.length=ge.length,fe=!0}}else re[0]!==36064&&(re[0]=36064,fe=!0);else re[0]!==1029&&(re[0]=1029,fe=!0);fe&&(t.isWebGL2?s.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Pe(D){return p!==D?(s.useProgram(D),p=D,!0):!1}const Ae={[Vr]:32774,[np]:32778,[rp]:32779};if(i)Ae[th]=32775,Ae[ih]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ae[th]=D.MIN_EXT,Ae[ih]=D.MAX_EXT)}const Me={[sp]:0,[ap]:1,[op]:768,[nd]:770,[fp]:776,[up]:774,[cp]:772,[lp]:769,[rd]:771,[dp]:775,[hp]:773};function je(D,X,re,fe,ge,ae,Z,ce){if(D===Un){g===!0&&(de(3042),g=!1);return}if(g===!1&&(Ue(3042),g=!0),D!==ip){if(D!==M||ce!==S){if((v!==Vr||L!==Vr)&&(s.blendEquation(32774),v=Vr,L=Vr),ce)switch(D){case Jr:s.blendFuncSeparate(1,771,1,771);break;case Nl:s.blendFunc(1,1);break;case Qc:s.blendFuncSeparate(0,769,0,1);break;case eh:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Jr:s.blendFuncSeparate(770,771,1,771);break;case Nl:s.blendFunc(770,1);break;case Qc:s.blendFuncSeparate(0,769,0,1);break;case eh:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,b=null,A=null,x=null,M=D,S=ce}return}ge=ge||X,ae=ae||re,Z=Z||fe,(X!==v||ge!==L)&&(s.blendEquationSeparate(Ae[X],Ae[ge]),v=X,L=ge),(re!==y||fe!==b||ae!==A||Z!==x)&&(s.blendFuncSeparate(Me[re],Me[fe],Me[ae],Me[Z]),y=re,b=fe,A=ae,x=Z),M=D,S=!1}function G(D,X){D.side===Rn?de(2884):Ue(2884);let re=D.side===zi;X&&(re=!re),it(re),D.blending===Jr&&D.transparent===!1?je(Un):je(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);const fe=D.stencilWrite;l.setTest(fe),fe&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),qe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ue(32926):de(32926)}function it(D){P!==D&&(D?s.frontFace(2304):s.frontFace(2305),P=D)}function ft(D){D!==Qf?(Ue(2884),D!==k&&(D===Jc?s.cullFace(1029):D===ep?s.cullFace(1028):s.cullFace(1032))):de(2884),k=D}function Ne(D){D!==Q&&(Y&&s.lineWidth(D),Q=D)}function qe(D,X,re){D?(Ue(32823),(z!==X||R!==re)&&(s.polygonOffset(X,re),z=X,R=re)):de(32823)}function Re(D){D?Ue(3089):de(3089)}function Ve(D){D===void 0&&(D=33984+O-1),J!==D&&(s.activeTexture(D),J=D)}function C(D,X,re){re===void 0&&(J===null?re=33984+O-1:re=J);let fe=te[re];fe===void 0&&(fe={type:void 0,texture:void 0},te[re]=fe),(fe.type!==D||fe.texture!==X)&&(J!==re&&(s.activeTexture(re),J=re),s.bindTexture(D,X||q[D]),fe.type=D,fe.texture=X)}function w(){const D=te[J];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function H(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(D){ee.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function be(D){j.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),j.copy(D))}function me(D,X){let re=u.get(X);re===void 0&&(re=new WeakMap,u.set(X,re));let fe=re.get(D);fe===void 0&&(fe=s.getUniformBlockIndex(X,D.name),re.set(D,fe))}function Je(D,X){const fe=u.get(X).get(D);h.get(D)!==fe&&(s.uniformBlockBinding(X,fe,D.__bindingPointIndex),h.set(D,fe))}function Qe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),i===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},J=null,te={},m={},_=new WeakMap,f=[],p=null,g=!1,M=null,v=null,y=null,b=null,L=null,A=null,x=null,S=!1,P=null,k=null,Q=null,z=null,R=null,ee.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ue,disable:de,bindFramebuffer:ye,drawBuffers:se,useProgram:Pe,setBlending:je,setMaterial:G,setFlipSided:it,setCullFace:ft,setLineWidth:Ne,setPolygonOffset:qe,setScissorTest:Re,activeTexture:Ve,bindTexture:C,unbindTexture:w,compressedTexImage2D:H,compressedTexImage3D:ne,texImage2D:Ce,texImage3D:ve,updateUBOMapping:me,uniformBlockBinding:Je,texStorage2D:K,texStorage3D:Se,texSubImage2D:oe,texSubImage3D:he,compressedTexSubImage2D:Ie,compressedTexSubImage3D:le,scissor:we,viewport:be,reset:Qe}}function Ux(s,e,t,i,n,r,a){const o=n.isWebGL2,c=n.maxTextures,l=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,w){return g?new OffscreenCanvas(C,w):Ys("canvas")}function v(C,w,H,ne){let oe=1;if((C.width>ne||C.height>ne)&&(oe=ne/Math.max(C.width,C.height)),oe<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const he=w?Wl:Math.floor,Ie=he(oe*C.width),le=he(oe*C.height);f===void 0&&(f=M(Ie,le));const K=H?M(Ie,le):f;return K.width=Ie,K.height=le,K.getContext("2d").drawImage(C,0,0,Ie,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ie+"x"+le+")."),K}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return Lh(C.width)&&Lh(C.height)}function b(C){return o?!1:C.wrapS!==Xi||C.wrapT!==Xi||C.minFilter!==ri&&C.minFilter!==Li}function L(C,w){return C.generateMipmaps&&w&&C.minFilter!==ri&&C.minFilter!==Li}function A(C){s.generateMipmap(C)}function x(C,w,H,ne,oe=!1){if(o===!1)return w;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he=w;return w===6403&&(H===5126&&(he=33326),H===5131&&(he=33325),H===5121&&(he=33321)),w===33319&&(H===5126&&(he=33328),H===5131&&(he=33327),H===5121&&(he=33323)),w===6408&&(H===5126&&(he=34836),H===5131&&(he=34842),H===5121&&(he=ne===ct&&oe===!1?35907:32856),H===32819&&(he=32854),H===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function S(C,w,H){return L(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==ri&&C.minFilter!==Li?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function P(C){return C===ri||C===nh||C===rh?9728:9729}function k(C){const w=C.target;w.removeEventListener("dispose",k),z(w),w.isVideoTexture&&_.delete(w)}function Q(C){const w=C.target;w.removeEventListener("dispose",Q),O(w)}function z(C){const w=i.get(C);if(w.__webglInit===void 0)return;const H=C.source,ne=p.get(H);if(ne){const oe=ne[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&R(C),Object.keys(ne).length===0&&p.delete(H)}i.remove(C)}function R(C){const w=i.get(C);s.deleteTexture(w.__webglTexture);const H=C.source,ne=p.get(H);delete ne[w.__cacheKey],a.memory.textures--}function O(C){const w=C.texture,H=i.get(C),ne=i.get(w);if(ne.__webglTexture!==void 0&&(s.deleteTexture(ne.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)s.deleteFramebuffer(H.__webglFramebuffer[oe]),H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer[oe]);else{if(s.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&s.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let oe=0;oe<H.__webglColorRenderbuffer.length;oe++)H.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(H.__webglColorRenderbuffer[oe]);H.__webglDepthRenderbuffer&&s.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let oe=0,he=w.length;oe<he;oe++){const Ie=i.get(w[oe]);Ie.__webglTexture&&(s.deleteTexture(Ie.__webglTexture),a.memory.textures--),i.remove(w[oe])}i.remove(w),i.remove(C)}let Y=0;function T(){Y=0}function U(){const C=Y;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),Y+=1,C}function J(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function te(C,w){const H=i.get(C);if(C.isVideoTexture&&Re(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(H,C,w);return}}t.bindTexture(3553,H.__webglTexture,33984+w)}function B(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){de(H,C,w);return}t.bindTexture(35866,H.__webglTexture,33984+w)}function V(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){de(H,C,w);return}t.bindTexture(32879,H.__webglTexture,33984+w)}function ee(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){ye(H,C,w);return}t.bindTexture(34067,H.__webglTexture,33984+w)}const j={[Gl]:10497,[Xi]:33071,[Vl]:33648},ie={[ri]:9728,[nh]:9984,[rh]:9986,[Li]:9729,[Cp]:9985,[Ao]:9987};function q(C,w,H){if(H?(s.texParameteri(C,10242,j[w.wrapS]),s.texParameteri(C,10243,j[w.wrapT]),(C===32879||C===35866)&&s.texParameteri(C,32882,j[w.wrapR]),s.texParameteri(C,10240,ie[w.magFilter]),s.texParameteri(C,10241,ie[w.minFilter])):(s.texParameteri(C,10242,33071),s.texParameteri(C,10243,33071),(C===32879||C===35866)&&s.texParameteri(C,32882,33071),(w.wrapS!==Xi||w.wrapT!==Xi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,10240,P(w.magFilter)),s.texParameteri(C,10241,P(w.minFilter)),w.minFilter!==ri&&w.minFilter!==Li&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.type===ar&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===$s&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(s.texParameterf(C,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Ue(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",k));const ne=w.source;let oe=p.get(ne);oe===void 0&&(oe={},p.set(ne,oe));const he=J(w);if(he!==C.__cacheKey){oe[he]===void 0&&(oe[he]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),oe[he].usedTimes++;const Ie=oe[C.__cacheKey];Ie!==void 0&&(oe[C.__cacheKey].usedTimes--,Ie.usedTimes===0&&R(w)),C.__cacheKey=he,C.__webglTexture=oe[he].texture}return H}function de(C,w,H){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const oe=Ue(C,w),he=w.source;t.bindTexture(ne,C.__webglTexture,33984+H);const Ie=i.get(he);if(he.version!==Ie.__version||oe===!0){t.activeTexture(33984+H),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const le=b(w)&&y(w.image)===!1;let K=v(w.image,le,!1,h);K=Ve(w,K);const Se=y(K)||o,Ce=r.convert(w.format,w.encoding);let ve=r.convert(w.type),we=x(w.internalFormat,Ce,ve,w.encoding,w.isVideoTexture);q(ne,w,Se);let be;const me=w.mipmaps,Je=o&&w.isVideoTexture!==!0,Qe=Ie.__version===void 0||oe===!0,D=S(w,K,Se);if(w.isDepthTexture)we=6402,o?w.type===ar?we=36012:w.type===sr?we=33190:w.type===Qr?we=35056:we=33189:w.type===ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===cr&&we===6402&&w.type!==od&&w.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=sr,ve=r.convert(w.type)),w.format===ls&&we===6402&&(we=34041,w.type!==Qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Qr,ve=r.convert(w.type))),Qe&&(Je?t.texStorage2D(3553,1,we,K.width,K.height):t.texImage2D(3553,0,we,K.width,K.height,0,Ce,ve,null));else if(w.isDataTexture)if(me.length>0&&Se){Je&&Qe&&t.texStorage2D(3553,D,we,me[0].width,me[0].height);for(let X=0,re=me.length;X<re;X++)be=me[X],Je?t.texSubImage2D(3553,X,0,0,be.width,be.height,Ce,ve,be.data):t.texImage2D(3553,X,we,be.width,be.height,0,Ce,ve,be.data);w.generateMipmaps=!1}else Je?(Qe&&t.texStorage2D(3553,D,we,K.width,K.height),t.texSubImage2D(3553,0,0,0,K.width,K.height,Ce,ve,K.data)):t.texImage2D(3553,0,we,K.width,K.height,0,Ce,ve,K.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Je&&Qe&&t.texStorage3D(35866,D,we,me[0].width,me[0].height,K.depth);for(let X=0,re=me.length;X<re;X++)be=me[X],w.format!==$i?Ce!==null?Je?t.compressedTexSubImage3D(35866,X,0,0,0,be.width,be.height,K.depth,Ce,be.data,0,0):t.compressedTexImage3D(35866,X,we,be.width,be.height,K.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(35866,X,0,0,0,be.width,be.height,K.depth,Ce,ve,be.data):t.texImage3D(35866,X,we,be.width,be.height,K.depth,0,Ce,ve,be.data)}else{Je&&Qe&&t.texStorage2D(3553,D,we,me[0].width,me[0].height);for(let X=0,re=me.length;X<re;X++)be=me[X],w.format!==$i?Ce!==null?Je?t.compressedTexSubImage2D(3553,X,0,0,be.width,be.height,Ce,be.data):t.compressedTexImage2D(3553,X,we,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(3553,X,0,0,be.width,be.height,Ce,ve,be.data):t.texImage2D(3553,X,we,be.width,be.height,0,Ce,ve,be.data)}else if(w.isDataArrayTexture)Je?(Qe&&t.texStorage3D(35866,D,we,K.width,K.height,K.depth),t.texSubImage3D(35866,0,0,0,0,K.width,K.height,K.depth,Ce,ve,K.data)):t.texImage3D(35866,0,we,K.width,K.height,K.depth,0,Ce,ve,K.data);else if(w.isData3DTexture)Je?(Qe&&t.texStorage3D(32879,D,we,K.width,K.height,K.depth),t.texSubImage3D(32879,0,0,0,0,K.width,K.height,K.depth,Ce,ve,K.data)):t.texImage3D(32879,0,we,K.width,K.height,K.depth,0,Ce,ve,K.data);else if(w.isFramebufferTexture){if(Qe)if(Je)t.texStorage2D(3553,D,we,K.width,K.height);else{let X=K.width,re=K.height;for(let fe=0;fe<D;fe++)t.texImage2D(3553,fe,we,X,re,0,Ce,ve,null),X>>=1,re>>=1}}else if(me.length>0&&Se){Je&&Qe&&t.texStorage2D(3553,D,we,me[0].width,me[0].height);for(let X=0,re=me.length;X<re;X++)be=me[X],Je?t.texSubImage2D(3553,X,0,0,Ce,ve,be):t.texImage2D(3553,X,we,Ce,ve,be);w.generateMipmaps=!1}else Je?(Qe&&t.texStorage2D(3553,D,we,K.width,K.height),t.texSubImage2D(3553,0,0,0,Ce,ve,K)):t.texImage2D(3553,0,we,Ce,ve,K);L(w,Se)&&A(ne),Ie.__version=he.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ye(C,w,H){if(w.image.length!==6)return;const ne=Ue(C,w),oe=w.source;t.bindTexture(34067,C.__webglTexture,33984+H);const he=i.get(oe);if(oe.version!==he.__version||ne===!0){t.activeTexture(33984+H),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const Ie=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,K=[];for(let X=0;X<6;X++)!Ie&&!le?K[X]=v(w.image[X],!1,!0,l):K[X]=le?w.image[X].image:w.image[X],K[X]=Ve(w,K[X]);const Se=K[0],Ce=y(Se)||o,ve=r.convert(w.format,w.encoding),we=r.convert(w.type),be=x(w.internalFormat,ve,we,w.encoding),me=o&&w.isVideoTexture!==!0,Je=he.__version===void 0||ne===!0;let Qe=S(w,Se,Ce);q(34067,w,Ce);let D;if(Ie){me&&Je&&t.texStorage2D(34067,Qe,be,Se.width,Se.height);for(let X=0;X<6;X++){D=K[X].mipmaps;for(let re=0;re<D.length;re++){const fe=D[re];w.format!==$i?ve!==null?me?t.compressedTexSubImage2D(34069+X,re,0,0,fe.width,fe.height,ve,fe.data):t.compressedTexImage2D(34069+X,re,be,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?t.texSubImage2D(34069+X,re,0,0,fe.width,fe.height,ve,we,fe.data):t.texImage2D(34069+X,re,be,fe.width,fe.height,0,ve,we,fe.data)}}}else{D=w.mipmaps,me&&Je&&(D.length>0&&Qe++,t.texStorage2D(34067,Qe,be,K[0].width,K[0].height));for(let X=0;X<6;X++)if(le){me?t.texSubImage2D(34069+X,0,0,0,K[X].width,K[X].height,ve,we,K[X].data):t.texImage2D(34069+X,0,be,K[X].width,K[X].height,0,ve,we,K[X].data);for(let re=0;re<D.length;re++){const ge=D[re].image[X].image;me?t.texSubImage2D(34069+X,re+1,0,0,ge.width,ge.height,ve,we,ge.data):t.texImage2D(34069+X,re+1,be,ge.width,ge.height,0,ve,we,ge.data)}}else{me?t.texSubImage2D(34069+X,0,0,0,ve,we,K[X]):t.texImage2D(34069+X,0,be,ve,we,K[X]);for(let re=0;re<D.length;re++){const fe=D[re];me?t.texSubImage2D(34069+X,re+1,0,0,ve,we,fe.image[X]):t.texImage2D(34069+X,re+1,be,ve,we,fe.image[X])}}}L(w,Ce)&&A(34067),he.__version=oe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function se(C,w,H,ne,oe){const he=r.convert(H.format,H.encoding),Ie=r.convert(H.type),le=x(H.internalFormat,he,Ie,H.encoding);i.get(w).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,le,w.width,w.height,w.depth,0,he,Ie,null):t.texImage2D(oe,0,le,w.width,w.height,0,he,Ie,null)),t.bindFramebuffer(36160,C),qe(w)?d.framebufferTexture2DMultisampleEXT(36160,ne,oe,i.get(H).__webglTexture,0,Ne(w)):(oe===3553||oe>=34069&&oe<=34074)&&s.framebufferTexture2D(36160,ne,oe,i.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Pe(C,w,H){if(s.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(H||qe(w)){const oe=w.depthTexture;oe&&oe.isDepthTexture&&(oe.type===ar?ne=36012:oe.type===sr&&(ne=33190));const he=Ne(w);qe(w)?d.renderbufferStorageMultisampleEXT(36161,he,ne,w.width,w.height):s.renderbufferStorageMultisample(36161,he,ne,w.width,w.height)}else s.renderbufferStorage(36161,ne,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const ne=Ne(w);H&&qe(w)===!1?s.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):qe(w)?d.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):s.renderbufferStorage(36161,34041,w.width,w.height),s.framebufferRenderbuffer(36160,33306,36161,C)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let oe=0;oe<ne.length;oe++){const he=ne[oe],Ie=r.convert(he.format,he.encoding),le=r.convert(he.type),K=x(he.internalFormat,Ie,le,he.encoding),Se=Ne(w);H&&qe(w)===!1?s.renderbufferStorageMultisample(36161,Se,K,w.width,w.height):qe(w)?d.renderbufferStorageMultisampleEXT(36161,Se,K,w.width,w.height):s.renderbufferStorage(36161,K,w.width,w.height)}}s.bindRenderbuffer(36161,null)}function Ae(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),te(w.depthTexture,0);const ne=i.get(w.depthTexture).__webglTexture,oe=Ne(w);if(w.depthTexture.format===cr)qe(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,oe):s.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===ls)qe(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,oe):s.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function Me(C){const w=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=s.createRenderbuffer(),Pe(w.__webglDepthbuffer[ne],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),Pe(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function je(C,w,H){const ne=i.get(C);w!==void 0&&se(ne.__webglFramebuffer,C,C.texture,36064,3553),H!==void 0&&Me(C)}function G(C){const w=C.texture,H=i.get(C),ne=i.get(w);C.addEventListener("dispose",Q),C.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=w.version,a.memory.textures++);const oe=C.isWebGLCubeRenderTarget===!0,he=C.isWebGLMultipleRenderTargets===!0,Ie=y(C)||o;if(oe){H.__webglFramebuffer=[];for(let le=0;le<6;le++)H.__webglFramebuffer[le]=s.createFramebuffer()}else{if(H.__webglFramebuffer=s.createFramebuffer(),he)if(n.drawBuffers){const le=C.texture;for(let K=0,Se=le.length;K<Se;K++){const Ce=i.get(le[K]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&qe(C)===!1){const le=he?w:[w];H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let K=0;K<le.length;K++){const Se=le[K];H.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(36161,H.__webglColorRenderbuffer[K]);const Ce=r.convert(Se.format,Se.encoding),ve=r.convert(Se.type),we=x(Se.internalFormat,Ce,ve,Se.encoding,C.isXRRenderTarget===!0),be=Ne(C);s.renderbufferStorageMultisample(36161,be,we,C.width,C.height),s.framebufferRenderbuffer(36160,36064+K,36161,H.__webglColorRenderbuffer[K])}s.bindRenderbuffer(36161,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(oe){t.bindTexture(34067,ne.__webglTexture),q(34067,w,Ie);for(let le=0;le<6;le++)se(H.__webglFramebuffer[le],C,w,36064,34069+le);L(w,Ie)&&A(34067),t.unbindTexture()}else if(he){const le=C.texture;for(let K=0,Se=le.length;K<Se;K++){const Ce=le[K],ve=i.get(Ce);t.bindTexture(3553,ve.__webglTexture),q(3553,Ce,Ie),se(H.__webglFramebuffer,C,Ce,36064+K,3553),L(Ce,Ie)&&A(3553)}t.unbindTexture()}else{let le=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?le=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ne.__webglTexture),q(le,w,Ie),se(H.__webglFramebuffer,C,w,36064,le),L(w,Ie)&&A(le),t.unbindTexture()}C.depthBuffer&&Me(C)}function it(C){const w=y(C)||o,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0,oe=H.length;ne<oe;ne++){const he=H[ne];if(L(he,w)){const Ie=C.isWebGLCubeRenderTarget?34067:3553,le=i.get(he).__webglTexture;t.bindTexture(Ie,le),A(Ie),t.unbindTexture()}}}function ft(C){if(o&&C.samples>0&&qe(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,ne=C.height;let oe=16384;const he=[],Ie=C.stencilBuffer?33306:36096,le=i.get(C),K=C.isWebGLMultipleRenderTargets===!0;if(K)for(let Se=0;Se<w.length;Se++)t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,le.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,le.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,le.__webglFramebuffer);for(let Se=0;Se<w.length;Se++){he.push(36064+Se),C.depthBuffer&&he.push(Ie);const Ce=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ce===!1&&(C.depthBuffer&&(oe|=256),C.stencilBuffer&&(oe|=1024)),K&&s.framebufferRenderbuffer(36008,36064,36161,le.__webglColorRenderbuffer[Se]),Ce===!0&&(s.invalidateFramebuffer(36008,[Ie]),s.invalidateFramebuffer(36009,[Ie])),K){const ve=i.get(w[Se]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,ve,0)}s.blitFramebuffer(0,0,H,ne,0,0,H,ne,oe,9728),m&&s.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),K)for(let Se=0;Se<w.length;Se++){t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Se,36161,le.__webglColorRenderbuffer[Se]);const Ce=i.get(w[Se]).__webglTexture;t.bindFramebuffer(36160,le.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Se,3553,Ce,0)}t.bindFramebuffer(36009,le.__webglMultisampledFramebuffer)}}function Ne(C){return Math.min(u,C.samples)}function qe(C){const w=i.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Re(C){const w=a.render.frame;_.get(C)!==w&&(_.set(C,w),C.update())}function Ve(C,w){const H=C.encoding,ne=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Hl||H!==vr&&(H===ct?o===!1?e.has("EXT_sRGB")===!0&&ne===$i?(C.format=Hl,C.minFilter=Li,C.generateMipmaps=!1):w=hd.sRGBToLinear(w):(ne!==$i||oe!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),w}this.allocateTextureUnit=U,this.resetTextureUnits=T,this.setTexture2D=te,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=ee,this.rebindTextures=je,this.setupRenderTarget=G,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=se,this.useMultisampledRTT=qe}function kx(s,e,t){const i=t.isWebGL2;function n(r,a=null){let o;if(r===xr)return 5121;if(r===Rp)return 32819;if(r===Ip)return 32820;if(r===Lp)return 5120;if(r===Pp)return 5122;if(r===od)return 5123;if(r===Dp)return 5124;if(r===sr)return 5125;if(r===ar)return 5126;if(r===$s)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Fp)return 6406;if(r===$i)return 6408;if(r===zp)return 6409;if(r===Np)return 6410;if(r===cr)return 6402;if(r===ls)return 34041;if(r===Op)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Hl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Up)return 6403;if(r===kp)return 36244;if(r===Bp)return 33319;if(r===Gp)return 33320;if(r===Vp)return 36249;if(r===Bo||r===Go||r===Vo||r===Ho)if(a===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Bo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Bo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Go)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ho)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sh||r===ah||r===oh||r===lh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===sh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ah)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ch||r===hh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ch)return a===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===hh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uh||r===dh||r===fh||r===ph||r===mh||r===gh||r===_h||r===xh||r===vh||r===yh||r===bh||r===Mh||r===Sh||r===wh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===uh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ph)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_h)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Th)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Th)return a===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Qr?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}class Bx extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ls extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gx={type:"move"};class _l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const f of e.hand.values()){const p=t.getJointPose(f,i),g=this._getHandJoint(l,f);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Vx extends si{constructor(e,t,i,n,r,a,o,c,l,h){if(h=h!==void 0?h:cr,h!==cr&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===cr&&(i=sr),i===void 0&&h===ls&&(i=Qr),super(null,n,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ri,this.minFilter=c!==void 0?c:ri,this.flipY=!1,this.generateMipmaps=!1}}class Hx extends _s{constructor(e,t){super();const i=this;let n=null,r=1,a=null,o="local-floor",c=null,l=null,h=null,u=null,d=null,m=null;const _=t.getContextAttributes();let f=null,p=null;const g=[],M=[],v=new Set,y=new Map,b=new Pi;b.layers.enable(1),b.viewport=new It;const L=new Pi;L.layers.enable(2),L.viewport=new It;const A=[b,L],x=new Bx;x.layers.enable(1),x.layers.enable(2);let S=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let V=g[B];return V===void 0&&(V=new _l,g[B]=V),V.getTargetRaySpace()},this.getControllerGrip=function(B){let V=g[B];return V===void 0&&(V=new _l,g[B]=V),V.getGripSpace()},this.getHand=function(B){let V=g[B];return V===void 0&&(V=new _l,g[B]=V),V.getHandSpace()};function k(B){const V=M.indexOf(B.inputSource);if(V===-1)return;const ee=g[V];ee!==void 0&&ee.dispatchEvent({type:B.type,data:B.inputSource})}function Q(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",Q),n.removeEventListener("inputsourceschange",z);for(let B=0;B<g.length;B++){const V=M[B];V!==null&&(M[B]=null,g[B].disconnect(V))}S=null,P=null,e.setRenderTarget(f),d=null,u=null,h=null,n=null,p=null,te.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",Q),n.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,V),n.updateRenderState({baseLayer:d}),p=new Yi(d.framebufferWidth,d.framebufferHeight,{format:$i,type:xr,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let V=null,ee=null,j=null;_.depth&&(j=_.stencil?35056:33190,V=_.stencil?ls:cr,ee=_.stencil?Qr:sr);const ie={colorFormat:32856,depthFormat:j,scaleFactor:r};h=new XRWebGLBinding(n,t),u=h.createProjectionLayer(ie),n.updateRenderState({layers:[u]}),p=new Yi(u.textureWidth,u.textureHeight,{format:$i,type:xr,depthTexture:new Vx(u.textureWidth,u.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const q=e.properties.get(p);q.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await n.requestReferenceSpace(o),te.setContext(n),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function z(B){for(let V=0;V<B.removed.length;V++){const ee=B.removed[V],j=M.indexOf(ee);j>=0&&(M[j]=null,g[j].disconnect(ee))}for(let V=0;V<B.added.length;V++){const ee=B.added[V];let j=M.indexOf(ee);if(j===-1){for(let q=0;q<g.length;q++)if(q>=M.length){M.push(ee),j=q;break}else if(M[q]===null){M[q]=ee,j=q;break}if(j===-1)break}const ie=g[j];ie&&ie.connect(ee)}}const R=new N,O=new N;function Y(B,V,ee){R.setFromMatrixPosition(V.matrixWorld),O.setFromMatrixPosition(ee.matrixWorld);const j=R.distanceTo(O),ie=V.projectionMatrix.elements,q=ee.projectionMatrix.elements,Ue=ie[14]/(ie[10]-1),de=ie[14]/(ie[10]+1),ye=(ie[9]+1)/ie[5],se=(ie[9]-1)/ie[5],Pe=(ie[8]-1)/ie[0],Ae=(q[8]+1)/q[0],Me=Ue*Pe,je=Ue*Ae,G=j/(-Pe+Ae),it=G*-Pe;V.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(it),B.translateZ(G),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ft=Ue+G,Ne=de+G,qe=Me-it,Re=je+(j-it),Ve=ye*de/Ne*ft,C=se*de/Ne*ft;B.projectionMatrix.makePerspective(qe,Re,Ve,C,ft,Ne)}function T(B,V){V===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(V.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;x.near=L.near=b.near=B.near,x.far=L.far=b.far=B.far,(S!==x.near||P!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,P=x.far);const V=B.parent,ee=x.cameras;T(x,V);for(let ie=0;ie<ee.length;ie++)T(ee[ie],V);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),B.matrix.copy(x.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const j=B.children;for(let ie=0,q=j.length;ie<q;ie++)j[ie].updateMatrixWorld(!0);ee.length===2?Y(x,b,L):x.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(B){u!==null&&(u.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.getPlanes=function(){return v};let U=null;function J(B,V){if(l=V.getViewerPose(c||a),m=V,l!==null){const ee=l.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let j=!1;ee.length!==x.cameras.length&&(x.cameras.length=0,j=!0);for(let ie=0;ie<ee.length;ie++){const q=ee[ie];let Ue=null;if(d!==null)Ue=d.getViewport(q);else{const ye=h.getViewSubImage(u,q);Ue=ye.viewport,ie===0&&(e.setRenderTargetTextures(p,ye.colorTexture,u.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(p))}let de=A[ie];de===void 0&&(de=new Pi,de.layers.enable(ie),de.viewport=new It,A[ie]=de),de.matrix.fromArray(q.transform.matrix),de.projectionMatrix.fromArray(q.projectionMatrix),de.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ie===0&&x.matrix.copy(de.matrix),j===!0&&x.cameras.push(de)}}for(let ee=0;ee<g.length;ee++){const j=M[ee],ie=g[ee];j!==null&&ie!==void 0&&ie.update(j,V,c||a)}if(U&&U(B,V),V.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let ee=null;for(const j of v)V.detectedPlanes.has(j)||(ee===null&&(ee=[]),ee.push(j));if(ee!==null)for(const j of ee)v.delete(j),y.delete(j),i.dispatchEvent({type:"planeremoved",data:j});for(const j of V.detectedPlanes)if(!v.has(j))v.add(j),y.set(j,V.lastChangedTime),i.dispatchEvent({type:"planeadded",data:j});else{const ie=y.get(j);j.lastChangedTime>ie&&(y.set(j,j.lastChangedTime),i.dispatchEvent({type:"planechanged",data:j}))}}m=null}const te=new xd;te.setAnimationLoop(J),this.setAnimationLoop=function(B){U=B},this.dispose=function(){}}}function Wx(s,e){function t(f,p){p.color.getRGB(f.fogColor.value,md(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,g,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(f,p):p.isMeshToonMaterial?(n(f,p),h(f,p)):p.isMeshPhongMaterial?(n(f,p),l(f,p)):p.isMeshStandardMaterial?(n(f,p),u(f,p),p.isMeshPhysicalMaterial&&d(f,p,v)):p.isMeshMatcapMaterial?(n(f,p),m(f,p)):p.isMeshDepthMaterial?n(f,p):p.isMeshDistanceMaterial?(n(f,p),_(f,p)):p.isMeshNormalMaterial?n(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?o(f,p,g,M):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===zi&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===zi&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(f.envMap.value=g,f.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const y=s.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uvTransform.value.copy(M.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uv2Transform.value.copy(v.matrix))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function o(f,p,g,M){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*g,f.scale.value=M*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix))}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),f.uvTransform.value.copy(g.matrix))}function l(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,g){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===zi&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Xx(s,e,t,i){let n={},r={},a=[];const o=t.isWebGL2?s.getParameter(35375):0;function c(M,v){const y=v.program;i.uniformBlockBinding(M,y)}function l(M,v){let y=n[M.id];y===void 0&&(_(M),y=h(M),n[M.id]=y,M.addEventListener("dispose",p));const b=v.program;i.updateUBOMapping(M,b);const L=e.render.frame;r[M.id]!==L&&(d(M),r[M.id]=L)}function h(M){const v=u();M.__bindingPointIndex=v;const y=s.createBuffer(),b=M.__size,L=M.usage;return s.bindBuffer(35345,y),s.bufferData(35345,b,L),s.bindBuffer(35345,null),s.bindBufferBase(35345,v,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=n[M.id],y=M.uniforms,b=M.__cache;s.bindBuffer(35345,v);for(let L=0,A=y.length;L<A;L++){const x=y[L];if(m(x,L,b)===!0){const S=x.value,P=x.__offset;typeof S=="number"?(x.__data[0]=S,s.bufferSubData(35345,P,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):S.toArray(x.__data),s.bufferSubData(35345,P,x.__data))}}s.bindBuffer(35345,null)}function m(M,v,y){const b=M.value;if(y[v]===void 0)return typeof b=="number"?y[v]=b:y[v]=b.clone(),!0;if(typeof b=="number"){if(y[v]!==b)return y[v]=b,!0}else{const L=y[v];if(L.equals(b)===!1)return L.copy(b),!0}return!1}function _(M){const v=M.uniforms;let y=0;const b=16;let L=0;for(let A=0,x=v.length;A<x;A++){const S=v[A],P=f(S);if(S.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,A>0){L=y%b;const k=b-L;L!==0&&k-P.boundary<0&&(y+=b-L,S.__offset=y)}y+=P.storage}return L=y%b,L>0&&(y+=b-L),M.__size=y,M.__cache={},this}function f(M){const v=M.value,y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function p(M){const v=M.target;v.removeEventListener("dispose",p);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function g(){for(const M in n)s.deleteBuffer(n[M]);a=[],n={},r={}}return{bind:c,update:l,dispose:g}}function $x(){const s=Ys("canvas");return s.style.display="block",s}function Sd(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:$x(),t=s.context!==void 0?s.context:null,i=s.depth!==void 0?s.depth:!0,n=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let u=null,d=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vr,this.physicallyCorrectLights=!1,this.toneMapping=yn,this.toneMappingExposure=1;const f=this;let p=!1,g=0,M=0,v=null,y=-1,b=null;const L=new It,A=new It;let x=null,S=e.width,P=e.height,k=1,Q=null,z=null;const R=new It(0,0,S,P),O=new It(0,0,S,P);let Y=!1;const T=new bc;let U=!1,J=!1,te=null;const B=new yt,V=new Ge,ee=new N,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return v===null?k:1}let q=t;function Ue(E,I){for(let $=0;$<E.length;$++){const F=E[$],W=e.getContext(F,I);if(W!==null)return W}return null}try{const E={alpha:!0,depth:i,stencil:n,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",me,!1),q===null){const I=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&I.shift(),q=Ue(I,E),q===null)throw Ue(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let de,ye,se,Pe,Ae,Me,je,G,it,ft,Ne,qe,Re,Ve,C,w,H,ne,oe,he,Ie,le,K,Se;function Ce(){de=new n0(q),ye=new K_(q,de,s),de.init(ye),le=new kx(q,de,ye),se=new Nx(q,de,ye),Pe=new a0,Ae=new Sx,Me=new Ux(q,de,se,Ae,ye,le,Pe),je=new Q_(f),G=new i0(f),it=new mm(q,ye),K=new j_(q,de,it,ye),ft=new r0(q,it,Pe,K),Ne=new h0(q,ft,it,Pe),oe=new c0(q,ye,Me),w=new J_(Ae),qe=new Mx(f,je,G,de,ye,K,w),Re=new Wx(f,Ae),Ve=new Tx,C=new Dx(de,ye),ne=new Y_(f,je,G,se,Ne,h,a),H=new zx(f,Ne,ye),Se=new Xx(q,Pe,ye,se),he=new Z_(q,de,Pe,ye),Ie=new s0(q,de,Pe,ye),Pe.programs=qe.programs,f.capabilities=ye,f.extensions=de,f.properties=Ae,f.renderLists=Ve,f.shadowMap=H,f.state=se,f.info=Pe}Ce();const ve=new Hx(f,q);this.xr=ve,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const E=de.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=de.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(S,P,!1))},this.getSize=function(E){return E.set(S,P)},this.setSize=function(E,I,$){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=E,P=I,e.width=Math.floor(E*k),e.height=Math.floor(I*k),$!==!1&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(S*k,P*k).floor()},this.setDrawingBufferSize=function(E,I,$){S=E,P=I,k=$,e.width=Math.floor(E*$),e.height=Math.floor(I*$),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,I,$,F){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,I,$,F),se.viewport(L.copy(R).multiplyScalar(k).floor())},this.getScissor=function(E){return E.copy(O)},this.setScissor=function(E,I,$,F){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,I,$,F),se.scissor(A.copy(O).multiplyScalar(k).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){se.setScissorTest(Y=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(E=!0,I=!0,$=!0){let F=0;E&&(F|=16384),I&&(F|=256),$&&(F|=1024),q.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",me,!1),Ve.dispose(),C.dispose(),Ae.dispose(),je.dispose(),G.dispose(),Ne.dispose(),K.dispose(),Se.dispose(),qe.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",fe),ve.removeEventListener("sessionend",ge),te&&(te.dispose(),te=null),ae.stop()};function we(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Pe.autoReset,I=H.enabled,$=H.autoUpdate,F=H.needsUpdate,W=H.type;Ce(),Pe.autoReset=E,H.enabled=I,H.autoUpdate=$,H.needsUpdate=F,H.type=W}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Je(E){const I=E.target;I.removeEventListener("dispose",Je),Qe(I)}function Qe(E){D(E),Ae.remove(E)}function D(E){const I=Ae.get(E).programs;I!==void 0&&(I.forEach(function($){qe.releaseProgram($)}),E.isShaderMaterial&&qe.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,$,F,W,pe){I===null&&(I=j);const Te=W.isMesh&&W.matrixWorld.determinant()<0,ke=Mt(E,I,$,F,W);se.setMaterial(F,Te);let Be=$.index,Fe=1;F.wireframe===!0&&(Be=ft.getWireframeAttribute($),Fe=2);const Le=$.drawRange,ze=$.attributes.position;let ot=Le.start*Fe,kt=(Le.start+Le.count)*Fe;pe!==null&&(ot=Math.max(ot,pe.start*Fe),kt=Math.min(kt,(pe.start+pe.count)*Fe)),Be!==null?(ot=Math.max(ot,0),kt=Math.min(kt,Be.count)):ze!=null&&(ot=Math.max(ot,0),kt=Math.min(kt,ze.count));const Xt=kt-ot;if(Xt<0||Xt===1/0)return;K.setup(W,F,ke,$,Be);let Ct,st=he;if(Be!==null&&(Ct=it.get(Be),st=Ie,st.setIndex(Ct)),W.isMesh)F.wireframe===!0?(se.setLineWidth(F.wireframeLinewidth*ie()),st.setMode(1)):st.setMode(4);else if(W.isLine){let He=F.linewidth;He===void 0&&(He=1),se.setLineWidth(He*ie()),W.isLineSegments?st.setMode(1):W.isLineLoop?st.setMode(2):st.setMode(3)}else W.isPoints?st.setMode(0):W.isSprite&&st.setMode(4);if(W.isInstancedMesh)st.renderInstances(ot,Xt,W.count);else if($.isInstancedBufferGeometry){const He=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,cn=Math.min($.instanceCount,He);st.renderInstances(ot,Xt,cn)}else st.render(ot,Xt)},this.compile=function(E,I){function $(F,W,pe){F.transparent===!0&&F.side===Rn?(F.side=zi,F.needsUpdate=!0,Xe(F,W,pe),F.side=ss,F.needsUpdate=!0,Xe(F,W,pe),F.side=Rn):Xe(F,W,pe)}d=C.get(E),d.init(),_.push(d),E.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights(f.physicallyCorrectLights),E.traverse(function(F){const W=F.material;if(W)if(Array.isArray(W))for(let pe=0;pe<W.length;pe++){const Te=W[pe];$(Te,E,F)}else $(W,E,F)}),_.pop(),d=null};let X=null;function re(E){X&&X(E)}function fe(){ae.stop()}function ge(){ae.start()}const ae=new xd;ae.setAnimationLoop(re),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(E){X=E,ve.setAnimationLoop(E),E===null?ae.stop():ae.start()},ve.addEventListener("sessionstart",fe),ve.addEventListener("sessionend",ge),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(I),I=ve.getCamera()),E.isScene===!0&&E.onBeforeRender(f,E,I,v),d=C.get(E,_.length),d.init(),_.push(d),B.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),T.setFromProjectionMatrix(B),J=this.localClippingEnabled,U=w.init(this.clippingPlanes,J,I),u=Ve.get(E,m.length),u.init(),m.push(u),Z(E,I,0,f.sortObjects),u.finish(),f.sortObjects===!0&&u.sort(Q,z),U===!0&&w.beginShadows();const $=d.state.shadowsArray;if(H.render($,E,I),U===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(u,E),d.setupLights(f.physicallyCorrectLights),I.isArrayCamera){const F=I.cameras;for(let W=0,pe=F.length;W<pe;W++){const Te=F[W];ce(u,E,Te,Te.viewport)}}else ce(u,E,I);v!==null&&(Me.updateMultisampleRenderTarget(v),Me.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(f,E,I),K.resetDefaultState(),y=-1,b=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function Z(E,I,$,F){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||T.intersectsSprite(E)){F&&ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(B);const Te=Ne.update(E),ke=E.material;ke.visible&&u.push(E,Te,ke,$,ee.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Pe.render.frame&&(E.skeleton.update(),E.skeleton.frame=Pe.render.frame),!E.frustumCulled||T.intersectsObject(E))){F&&ee.setFromMatrixPosition(E.matrixWorld).applyMatrix4(B);const Te=Ne.update(E),ke=E.material;if(Array.isArray(ke)){const Be=Te.groups;for(let Fe=0,Le=Be.length;Fe<Le;Fe++){const ze=Be[Fe],ot=ke[ze.materialIndex];ot&&ot.visible&&u.push(E,Te,ot,$,ee.z,ze)}}else ke.visible&&u.push(E,Te,ke,$,ee.z,null)}}const pe=E.children;for(let Te=0,ke=pe.length;Te<ke;Te++)Z(pe[Te],I,$,F)}function ce(E,I,$,F){const W=E.opaque,pe=E.transmissive,Te=E.transparent;d.setupLightsView($),pe.length>0&&_e(W,I,$),F&&se.viewport(L.copy(F)),W.length>0&&Ee(W,I,$),pe.length>0&&Ee(pe,I,$),Te.length>0&&Ee(Te,I,$),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function _e(E,I,$){const F=ye.isWebGL2;te===null&&(te=new Yi(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?$s:xr,minFilter:Ao,samples:F&&r===!0?4:0})),f.getDrawingBufferSize(V),F?te.setSize(V.x,V.y):te.setSize(Wl(V.x),Wl(V.y));const W=f.getRenderTarget();f.setRenderTarget(te),f.clear();const pe=f.toneMapping;f.toneMapping=yn,Ee(E,I,$),f.toneMapping=pe,Me.updateMultisampleRenderTarget(te),Me.updateRenderTargetMipmap(te),f.setRenderTarget(W)}function Ee(E,I,$){const F=I.isScene===!0?I.overrideMaterial:null;for(let W=0,pe=E.length;W<pe;W++){const Te=E[W],ke=Te.object,Be=Te.geometry,Fe=F===null?Te.material:F,Le=Te.group;ke.layers.test($.layers)&&De(ke,I,$,Be,Fe,Le)}}function De(E,I,$,F,W,pe){E.onBeforeRender(f,I,$,F,W,pe),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(f,I,$,F,E,pe),W.transparent===!0&&W.side===Rn?(W.side=zi,W.needsUpdate=!0,f.renderBufferDirect($,I,F,W,E,pe),W.side=ss,W.needsUpdate=!0,f.renderBufferDirect($,I,F,W,E,pe),W.side=Rn):f.renderBufferDirect($,I,F,W,E,pe),E.onAfterRender(f,I,$,F,W,pe)}function Xe(E,I,$){I.isScene!==!0&&(I=j);const F=Ae.get(E),W=d.state.lights,pe=d.state.shadowsArray,Te=W.state.version,ke=qe.getParameters(E,W.state,pe,I,$),Be=qe.getProgramCacheKey(ke);let Fe=F.programs;F.environment=E.isMeshStandardMaterial?I.environment:null,F.fog=I.fog,F.envMap=(E.isMeshStandardMaterial?G:je).get(E.envMap||F.environment),Fe===void 0&&(E.addEventListener("dispose",Je),Fe=new Map,F.programs=Fe);let Le=Fe.get(Be);if(Le!==void 0){if(F.currentProgram===Le&&F.lightsStateVersion===Te)return At(E,ke),Le}else ke.uniforms=qe.getUniforms(E),E.onBuild($,ke,f),E.onBeforeCompile(ke,f),Le=qe.acquireProgram(ke,Be),Fe.set(Be,Le),F.uniforms=ke.uniforms;const ze=F.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=w.uniform),At(E,ke),F.needsLights=tt(E),F.lightsStateVersion=Te,F.needsLights&&(ze.ambientLightColor.value=W.state.ambient,ze.lightProbe.value=W.state.probe,ze.directionalLights.value=W.state.directional,ze.directionalLightShadows.value=W.state.directionalShadow,ze.spotLights.value=W.state.spot,ze.spotLightShadows.value=W.state.spotShadow,ze.rectAreaLights.value=W.state.rectArea,ze.ltc_1.value=W.state.rectAreaLTC1,ze.ltc_2.value=W.state.rectAreaLTC2,ze.pointLights.value=W.state.point,ze.pointLightShadows.value=W.state.pointShadow,ze.hemisphereLights.value=W.state.hemi,ze.directionalShadowMap.value=W.state.directionalShadowMap,ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ze.spotShadowMap.value=W.state.spotShadowMap,ze.spotLightMatrix.value=W.state.spotLightMatrix,ze.spotLightMap.value=W.state.spotLightMap,ze.pointShadowMap.value=W.state.pointShadowMap,ze.pointShadowMatrix.value=W.state.pointShadowMatrix);const ot=Le.getUniforms(),kt=Qa.seqWithValue(ot.seq,ze);return F.currentProgram=Le,F.uniformsList=kt,Le}function At(E,I){const $=Ae.get(E);$.outputEncoding=I.outputEncoding,$.instancing=I.instancing,$.skinning=I.skinning,$.morphTargets=I.morphTargets,$.morphNormals=I.morphNormals,$.morphColors=I.morphColors,$.morphTargetsCount=I.morphTargetsCount,$.numClippingPlanes=I.numClippingPlanes,$.numIntersection=I.numClipIntersection,$.vertexAlphas=I.vertexAlphas,$.vertexTangents=I.vertexTangents,$.toneMapping=I.toneMapping}function Mt(E,I,$,F,W){I.isScene!==!0&&(I=j),Me.resetTextureUnits();const pe=I.fog,Te=F.isMeshStandardMaterial?I.environment:null,ke=v===null?f.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:vr,Be=(F.isMeshStandardMaterial?G:je).get(F.envMap||Te),Fe=F.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Le=!!F.normalMap&&!!$.attributes.tangent,ze=!!$.morphAttributes.position,ot=!!$.morphAttributes.normal,kt=!!$.morphAttributes.color,Xt=F.toneMapped?f.toneMapping:yn,Ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,st=Ct!==void 0?Ct.length:0,He=Ae.get(F),cn=d.state.lights;if(U===!0&&(J===!0||E!==b)){const ui=E===b&&F.id===y;w.setState(F,E,ui)}let Lt=!1;F.version===He.__version?(He.needsLights&&He.lightsStateVersion!==cn.state.version||He.outputEncoding!==ke||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||He.envMap!==Be||F.fog===!0&&He.fog!==pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==w.numPlanes||He.numIntersection!==w.numIntersection)||He.vertexAlphas!==Fe||He.vertexTangents!==Le||He.morphTargets!==ze||He.morphNormals!==ot||He.morphColors!==kt||He.toneMapping!==Xt||ye.isWebGL2===!0&&He.morphTargetsCount!==st)&&(Lt=!0):(Lt=!0,He.__version=F.version);let $n=He.currentProgram;Lt===!0&&($n=Xe(F,I,W));let Zc=!1,vs=!1,No=!1;const $t=$n.getUniforms(),qn=He.uniforms;if(se.useProgram($n.program)&&(Zc=!0,vs=!0,No=!0),F.id!==y&&(y=F.id,vs=!0),Zc||b!==E){if($t.setValue(q,"projectionMatrix",E.projectionMatrix),ye.logarithmicDepthBuffer&&$t.setValue(q,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),b!==E&&(b=E,vs=!0,No=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const ui=$t.map.cameraPosition;ui!==void 0&&ui.setValue(q,ee.setFromMatrixPosition(E.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&$t.setValue(q,"isOrthographic",E.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||W.isSkinnedMesh)&&$t.setValue(q,"viewMatrix",E.matrixWorldInverse)}if(W.isSkinnedMesh){$t.setOptional(q,W,"bindMatrix"),$t.setOptional(q,W,"bindMatrixInverse");const ui=W.skeleton;ui&&(ye.floatVertexTextures?(ui.boneTexture===null&&ui.computeBoneTexture(),$t.setValue(q,"boneTexture",ui.boneTexture,Me),$t.setValue(q,"boneTextureSize",ui.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Uo=$.morphAttributes;if((Uo.position!==void 0||Uo.normal!==void 0||Uo.color!==void 0&&ye.isWebGL2===!0)&&oe.update(W,$,F,$n),(vs||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,$t.setValue(q,"receiveShadow",W.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(qn.envMap.value=Be,qn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),vs&&($t.setValue(q,"toneMappingExposure",f.toneMappingExposure),He.needsLights&&at(qn,No),pe&&F.fog===!0&&Re.refreshFogUniforms(qn,pe),Re.refreshMaterialUniforms(qn,F,k,P,te),Qa.upload(q,He.uniformsList,qn,Me)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Qa.upload(q,He.uniformsList,qn,Me),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&$t.setValue(q,"center",W.center),$t.setValue(q,"modelViewMatrix",W.modelViewMatrix),$t.setValue(q,"normalMatrix",W.normalMatrix),$t.setValue(q,"modelMatrix",W.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const ui=F.uniformsGroups;for(let ko=0,Jf=ui.length;ko<Jf;ko++)if(ye.isWebGL2){const Kc=ui[ko];Se.update(Kc,$n),Se.bind(Kc,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function at(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function tt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,I,$){Ae.get(E.texture).__webglTexture=I,Ae.get(E.depthTexture).__webglTexture=$;const F=Ae.get(E);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=$===void 0,F.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,I){const $=Ae.get(E);$.__webglFramebuffer=I,$.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,$=0){v=E,g=I,M=$;let F=!0,W=null,pe=!1,Te=!1;if(E){const Be=Ae.get(E);Be.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),F=!1):Be.__webglFramebuffer===void 0?Me.setupRenderTarget(E):Be.__hasExternalTextures&&Me.rebindTextures(E,Ae.get(E.texture).__webglTexture,Ae.get(E.depthTexture).__webglTexture);const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Te=!0);const Le=Ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(W=Le[I],pe=!0):ye.isWebGL2&&E.samples>0&&Me.useMultisampledRTT(E)===!1?W=Ae.get(E).__webglMultisampledFramebuffer:W=Le,L.copy(E.viewport),A.copy(E.scissor),x=E.scissorTest}else L.copy(R).multiplyScalar(k).floor(),A.copy(O).multiplyScalar(k).floor(),x=Y;if(se.bindFramebuffer(36160,W)&&ye.drawBuffers&&F&&se.drawBuffers(E,W),se.viewport(L),se.scissor(A),se.setScissorTest(x),pe){const Be=Ae.get(E.texture);q.framebufferTexture2D(36160,36064,34069+I,Be.__webglTexture,$)}else if(Te){const Be=Ae.get(E.texture),Fe=I||0;q.framebufferTextureLayer(36160,36064,Be.__webglTexture,$||0,Fe)}y=-1},this.readRenderTargetPixels=function(E,I,$,F,W,pe,Te){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(ke=ke[Te]),ke){se.bindFramebuffer(36160,ke);try{const Be=E.texture,Fe=Be.format,Le=Be.type;if(Fe!==$i&&le.convert(Fe)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Le===$s&&(de.has("EXT_color_buffer_half_float")||ye.isWebGL2&&de.has("EXT_color_buffer_float"));if(Le!==xr&&le.convert(Le)!==q.getParameter(35738)&&!(Le===ar&&(ye.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-F&&$>=0&&$<=E.height-W&&q.readPixels(I,$,F,W,le.convert(Fe),le.convert(Le),pe)}finally{const Be=v!==null?Ae.get(v).__webglFramebuffer:null;se.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(E,I,$=0){const F=Math.pow(2,-$),W=Math.floor(I.image.width*F),pe=Math.floor(I.image.height*F);Me.setTexture2D(I,0),q.copyTexSubImage2D(3553,$,0,0,E.x,E.y,W,pe),se.unbindTexture()},this.copyTextureToTexture=function(E,I,$,F=0){const W=I.image.width,pe=I.image.height,Te=le.convert($.format),ke=le.convert($.type);Me.setTexture2D($,0),q.pixelStorei(37440,$.flipY),q.pixelStorei(37441,$.premultiplyAlpha),q.pixelStorei(3317,$.unpackAlignment),I.isDataTexture?q.texSubImage2D(3553,F,E.x,E.y,W,pe,Te,ke,I.image.data):I.isCompressedTexture?q.compressedTexSubImage2D(3553,F,E.x,E.y,I.mipmaps[0].width,I.mipmaps[0].height,Te,I.mipmaps[0].data):q.texSubImage2D(3553,F,E.x,E.y,Te,ke,I.image),F===0&&$.generateMipmaps&&q.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(E,I,$,F,W=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=E.max.x-E.min.x+1,Te=E.max.y-E.min.y+1,ke=E.max.z-E.min.z+1,Be=le.convert(F.format),Fe=le.convert(F.type);let Le;if(F.isData3DTexture)Me.setTexture3D(F,0),Le=32879;else if(F.isDataArrayTexture)Me.setTexture2DArray(F,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,F.flipY),q.pixelStorei(37441,F.premultiplyAlpha),q.pixelStorei(3317,F.unpackAlignment);const ze=q.getParameter(3314),ot=q.getParameter(32878),kt=q.getParameter(3316),Xt=q.getParameter(3315),Ct=q.getParameter(32877),st=$.isCompressedTexture?$.mipmaps[0]:$.image;q.pixelStorei(3314,st.width),q.pixelStorei(32878,st.height),q.pixelStorei(3316,E.min.x),q.pixelStorei(3315,E.min.y),q.pixelStorei(32877,E.min.z),$.isDataTexture||$.isData3DTexture?q.texSubImage3D(Le,W,I.x,I.y,I.z,pe,Te,ke,Be,Fe,st.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Le,W,I.x,I.y,I.z,pe,Te,ke,Be,st.data)):q.texSubImage3D(Le,W,I.x,I.y,I.z,pe,Te,ke,Be,Fe,st),q.pixelStorei(3314,ze),q.pixelStorei(32878,ot),q.pixelStorei(3316,kt),q.pixelStorei(3315,Xt),q.pixelStorei(32877,Ct),W===0&&F.generateMipmaps&&q.generateMipmap(Le),se.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Me.setTextureCube(E,0):E.isData3DTexture?Me.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Me.setTexture2DArray(E,0):Me.setTexture2D(E,0),se.unbindTexture()},this.resetState=function(){g=0,M=0,v=null,se.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class qx extends Sd{}qx.prototype.isWebGL1Renderer=!0;class Yx extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Hr extends la{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lu=new N,cu=new N,hu=new yt,xl=new yc,Ra=new Co;class jx extends Ut{constructor(e=new Zi,t=new Hr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)lu.fromBufferAttribute(t,n-1),cu.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=lu.distanceTo(cu);e.setAttribute("lineDistance",new ai(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(n),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;hu.copy(n).invert(),xl.copy(e.ray).applyMatrix4(hu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new N,h=new N,u=new N,d=new N,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const g=Math.max(0,a.start),M=Math.min(_.count,a.start+a.count);for(let v=g,y=M-1;v<y;v+=m){const b=_.getX(v),L=_.getX(v+1);if(l.fromBufferAttribute(p,b),h.fromBufferAttribute(p,L),xl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let v=g,y=M-1;v<y;v+=m){if(l.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),xl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const uu=new N,du=new N;class Ia extends jx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)uu.fromBufferAttribute(t,n),du.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+uu.distanceTo(du);e.setAttribute("lineDistance",new ai(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Fa=new N,Oa=new N,vl=new N,za=new en;class Na extends Zi{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),r=Math.cos(Ka*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let _=0;_<c;_+=3){a?(l[0]=a.getX(_),l[1]=a.getX(_+1),l[2]=a.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:f,b:p,c:g}=za;if(f.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),za.getNormal(vl),u[0]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,u[1]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,u[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){const v=(M+1)%3,y=u[M],b=u[v],L=za[h[M]],A=za[h[v]],x=`${y}_${b}`,S=`${b}_${y}`;S in d&&d[S]?(vl.dot(d[S].normal)<=r&&(m.push(L.x,L.y,L.z),m.push(A.x,A.y,A.z)),d[S]=null):x in d||(d[x]={index0:l[M],index1:l[v],normal:vl.clone()})}}for(const _ in d)if(d[_]){const{index0:f,index1:p}=d[_];Fa.fromBufferAttribute(o,f),Oa.fromBufferAttribute(o,p),m.push(Fa.x,Fa.y,Fa.z),m.push(Oa.x,Oa.y,Oa.z)}this.setAttribute("position",new ai(m,3))}}}const fu={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Zx{constructor(e,t,i){const n=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const m=l[u],_=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const Kx=new Zx;class wd{constructor(e){this.manager=e!==void 0?e:Kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Jx extends wd{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=fu.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ys("img");function c(){h(),fu.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),n&&n(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Qx extends wd{constructor(e){super(e)}load(e,t,i,n){const r=new si,a=new Jx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class ev extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const yl=new yt,pu=new N,mu=new N;class tv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bc,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(pu),mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mu),t.updateMatrixWorld(),yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iv extends tv{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nv extends ev{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DefaultUp),this.updateMatrix(),this.target=new Ut,this.shadow=new iv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gu(){return(typeof performance>"u"?Date:performance).now()}class sv{constructor(e,t,i=0,n=1/0){this.ray=new yc(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return $l(e,this,i,t),i.sort(_u),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)$l(e[n],this,i,t);return i.sort(_u),i}}function _u(s,e){return s.distance-e.distance}function $l(s,e,t,i){if(s.layers.test(e.layers)&&s.raycast(e,t),i===!0){const n=s.children;for(let r=0,a=n.length;r<a;r++)$l(n[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);const fo={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class ca{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const av=new Do(-1,1,1,-1,0,1),wc=new Zi;wc.setAttribute("position",new ai([-1,3,0,-1,-1,0,3,-1,0],3));wc.setAttribute("uv",new ai([0,2,0,0,2,0],2));class Td{constructor(e){this._mesh=new qi(wc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,av)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class xu extends ca{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Si?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=uo.clone(e.uniforms),this.material=new Si({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Td(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vu extends ca{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class ov extends ca{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class lv{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new Ge);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new Yi(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],fo===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),xu===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new xu(fo),this.clock=new rv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vu!==void 0&&(a instanceof vu?i=!0:a instanceof ov&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Do(-1,1,1,-1,0,1);const Ed=new Zi;Ed.setAttribute("position",new ai([-1,3,0,-1,-1,0,3,-1,0],3));Ed.setAttribute("uv",new ai([0,2,0,0,2,0],2));class cv extends ca{constructor(e,t,i,n,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new et}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=n}}const yu={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new et(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class hs extends ca{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Ge(e.x,e.y):new Ge(256,256),this.clearColor=new et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Yi(r,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Yi(r,a);d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new Yi(r,a);m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}yu===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const o=yu;this.highPassUniforms=uo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Si({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.texSize.value=new Ge(r,a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,fo===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const h=fo;this.copyUniforms=uo.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Si({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Nl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new et,this.oldClearAlpha=1,this.basic=new Po,this.fsQuad=new Td(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.texSize.value=new Ge(i,n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=hs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=hs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new Si({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ge(.5,.5)},direction:{value:new Ge(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Si({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}hs.BlurDirectionX=new Ge(1,0);hs.BlurDirectionY=new Ge(0,1);function mn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ad(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},us={duration:.5,overwrite:!1,delay:0},Tc,Ht,pt,Ii=1e8,rt=1/Ii,ql=Math.PI*2,hv=ql/4,uv=0,Cd=Math.sqrt,dv=Math.cos,fv=Math.sin,Ft=function(e){return typeof e=="string"},mt=function(e){return typeof e=="function"},Mn=function(e){return typeof e=="number"},Ec=function(e){return typeof e>"u"},ln=function(e){return typeof e=="object"},oi=function(e){return e!==!1},Ac=function(){return typeof window<"u"},Ua=function(e){return mt(e)||Ft(e)},Ld=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,Yl=/(?:-?\.?\d|\.)+/gi,Pd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Yr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Dd=/[+-]=-?[.\d]+/,Rd=/[^,'"\[\]\s]+/gi,pv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,Ci,jl,Cc,Ti={},po={},Id,Fd=function(e){return(po=yr(e,Ti))&&hi},Lc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},mo=function(e,t){return!t&&console.warn(e)},Od=function(e,t){return e&&(Ti[e]=t)&&po&&(po[e]=t)||Ti},js=function(){return 0},mv={suppressEvents:!0,isStart:!0,kill:!1},eo={suppressEvents:!0,kill:!1},gv={suppressEvents:!0},Pc={},kn=[],Zl={},zd,xi={},Ml={},bu=30,to=[],Dc="",Rc=function(e){var t=e[0],i,n;if(ln(t)||mt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=to.length;n--&&!to[n].targetTest(t););i=to[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new of(e[n],i)))||e.splice(n,1);return e},ur=function(e){return e._gsap||Rc(Fi(e))[0]._gsap},Nd=function(e,t,i){return(i=e[t])&&mt(i)?e[t]():Ec(i)&&e.getAttribute&&e.getAttribute(t)||i},li=function(e,t){return(e=e.split(",")).forEach(t)||e},gt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},es=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},_v=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},go=function(){var e=kn.length,t=kn.slice(0),i,n;for(Zl={},kn.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Ud=function(e,t,i,n){kn.length&&!Ht&&go(),e.render(t,i,n||Ht&&t<0&&(e._initted||e._startAt)),kn.length&&!Ht&&go()},kd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Rd).length<2?t:Ft(e)?e.trim():e},Bd=function(e){return e},Ui=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},xv=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},yr=function(e,t){for(var i in t)e[i]=t[i];return e},Mu=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ln(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},_o=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Os=function(e){var t=e.parent||ut,i=e.keyframes?xv(Wt(e.keyframes)):Ui;if(oi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},vv=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Gd=function(e,t,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},Io=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,a=t._next;r?r._next=a:e[i]===t&&(e[i]=a),a?a._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Vn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},dr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},yv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Kl=function(e,t,i,n){return e._startAt&&(Ht?e._startAt.revert(eo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},bv=function s(e){return!e||e._ts&&s(e.parent)},Su=function(e){return e._repeat?ds(e._tTime,e=e.duration()+e._rDelay)*e:0},ds=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},xo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fo=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||rt)||0))},Oo=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=zt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fo(e),i._dirty||dr(i,e)),e},Vd=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=xo(e.rawTime(),t),(!t._dur||ha(0,t.totalDuration(),i)-t._tTime>rt)&&t.render(i,!0)),dr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-rt}},tn=function(e,t,i,n){return t.parent&&Vn(t),t._start=zt((Mn(i)?i:i||e!==ut?Ai(e,i,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Gd(e,t,"_first","_last",e._sort?"_start":0),Jl(t)||(e._recent=t),n||Vd(e,t),e._ts<0&&Oo(e,e._tTime),e},Hd=function(e,t){return(Ti.ScrollTrigger||Lc("scrollTrigger",t))&&Ti.ScrollTrigger.create(t,e)},Wd=function(e,t,i,n,r){if(Fc(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Ht&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&zd!==yi.frame)return kn.push(e),e._lazy=[r,n],1},Mv=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Jl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Sv=function(e,t,i,n){var r=e.ratio,a=t<0||!t&&(!e._start&&Mv(e)&&!(!e._initted&&Jl(e))||(e._ts<0||e._dp._ts<0)&&!Jl(e))?0:1,o=e._rDelay,c=0,l,h,u;if(o&&e._repeat&&(c=ha(0,e._tDur,t),h=ds(c,o),e._yoyo&&h&1&&(a=1-a),h!==ds(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Ht||n||e._zTime===rt||!t&&e._zTime){if(!e._initted&&Wd(e,t,n,i,c))return;for(u=e._zTime,e._zTime=t||(i?rt:0),i||(i=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&Kl(e,t,i,!0),e._onUpdate&&!i&&Oi(e,"onUpdate"),c&&e._repeat&&!i&&e.parent&&Oi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Vn(e,1),!i&&!Ht&&(Oi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},wv=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},fs=function(e,t,i,n){var r=e._repeat,a=zt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:zt(a*(r+1)+e._rDelay*r):a,o>0&&!n&&Oo(e,e._tTime=e._tDur*o),e.parent&&Fo(e),i||dr(e.parent,e),e},wu=function(e){return e instanceof Qt?dr(e):fs(e,e._dur)},Tv={_start:0,endTime:js,totalDuration:js},Ai=function s(e,t,i){var n=e.labels,r=e._recent||Tv,a=e.duration()>=Ii?r.endTime(!1):e._dur,o,c,l;return Ft(t)&&(isNaN(t)||t in n)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?r:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&i&&(c=c/100*(Wt(i)?i[0]:i).totalDuration()),o>1?s(e,t.substr(0,o-1),i)+c:a+c)):t==null?a:+t},zs=function(e,t,i){var n=Mn(t[1]),r=(n?2:1)+(e<2?0:1),a=t[r],o,c;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,c=i;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=oi(c.vars.inherit)&&c.parent;a.immediateRender=oi(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new vt(t[0],a,t[r+1])},Xn=function(e,t){return e||e===0?t(e):t},ha=function(e,t,i){return i<e?e:i>t?t:i},Vt=function(e,t){return!Ft(e)||!(t=pv.exec(e))?"":t[1]},Ev=function(e,t,i){return Xn(i,function(n){return ha(e,t,n)})},Ql=[].slice,Xd=function(e,t){return e&&ln(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ln(e[0]))&&!e.nodeType&&e!==Ci},Av=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Ft(n)&&!t||Xd(n,1)?(r=i).push.apply(r,Fi(n)):i.push(n)})||i},Fi=function(e,t,i){return pt&&!t&&pt.selector?pt.selector(e):Ft(e)&&!i&&(jl||!ps())?Ql.call((t||Cc).querySelectorAll(e),0):Wt(e)?Av(e,i):Xd(e)?Ql.call(e,0):e?[e]:[]},ec=function(e){return e=Fi(e)[0]||mo("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Fi(t,i.querySelectorAll?i:i===e?mo("Invalid scope")||Cc.createElement("div"):e)}},$d=function(e){return e.sort(function(){return .5-Math.random()})},qd=function(e){if(mt(e))return e;var t=ln(e)?e:{each:e},i=fr(t.ease),n=t.from||0,r=parseFloat(t.base)||0,a={},o=n>0&&n<1,c=isNaN(n)||o,l=t.axis,h=n,u=n;return Ft(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!o&&c&&(h=n[0],u=n[1]),function(d,m,_){var f=(_||t).length,p=a[f],g,M,v,y,b,L,A,x,S;if(!p){if(S=t.grid==="auto"?0:(t.grid||[1,Ii])[1],!S){for(A=-Ii;A<(A=_[S++].getBoundingClientRect().left)&&S<f;);S--}for(p=a[f]=[],g=c?Math.min(S,f)*h-.5:n%S,M=S===Ii?0:c?f*u/S-.5:n/S|0,A=0,x=Ii,L=0;L<f;L++)v=L%S-g,y=M-(L/S|0),p[L]=b=l?Math.abs(l==="y"?y:v):Cd(v*v+y*y),b>A&&(A=b),b<x&&(x=b);n==="random"&&$d(p),p.max=A-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:l?l==="y"?f/S:S:Math.max(S,f/S))||0)*(n==="edges"?-1:1),p.b=f<0?r-f:r,p.u=Vt(t.amount||t.each)||0,i=i&&f<0?rf(i):i}return f=(p[d]-p.min)/p.max||0,zt(p.b+(i?i(f):f)*p.v)+p.u}},tc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=zt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Mn(i)?0:Vt(i))}},Yd=function(e,t){var i=Wt(e),n,r;return!i&&ln(e)&&(n=i=e.radius||Ii,e.values?(e=Fi(e.values),(r=!Mn(e[0]))&&(n*=n)):e=tc(e.increment)),Xn(t,i?mt(e)?function(a){return r=e(a),Math.abs(r-a)<=n?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=Ii,h=0,u=e.length,d,m;u--;)r?(d=e[u].x-o,m=e[u].y-c,d=d*d+m*m):d=Math.abs(e[u]-o),d<l&&(l=d,h=u);return h=!n||l<=n?e[h]:a,r||h===a||Mn(a)?h:h+Vt(a)}:tc(e))},jd=function(e,t,i,n){return Xn(Wt(e)?!t:i===!0?!!(i=0):!n,function(){return Wt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},Cv=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,a){return a(r)},n)}},Lv=function(e,t){return function(i){return e(parseFloat(i))+(t||Vt(i))}},Pv=function(e,t,i){return Kd(e,t,0,1,i)},Zd=function(e,t,i){return Xn(i,function(n){return e[~~t(n)]})},Dv=function s(e,t,i){var n=t-e;return Wt(e)?Zd(e,s(0,e.length),t):Xn(i,function(r){return(n+(r-e)%n)%n+e})},Rv=function s(e,t,i){var n=t-e,r=n*2;return Wt(e)?Zd(e,s(0,e.length-1),t):Xn(i,function(a){return a=(r+(a-e)%r)%r||0,e+(a>n?r-a:a)})},Zs=function(e){for(var t=0,i="",n,r,a,o;~(n=e.indexOf("random(",t));)a=e.indexOf(")",n),o=e.charAt(n+7)==="[",r=e.substr(n+7,a-n-7).match(o?Rd:Yl),i+=e.substr(t,n-t)+jd(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},Kd=function(e,t,i,n,r){var a=t-e,o=n-i;return Xn(r,function(c){return i+((c-e)/a*o||0)})},Iv=function s(e,t,i,n){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=Ft(e),o={},c,l,h,u,d;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(Wt(e)&&!Wt(t)){for(h=[],u=e.length,d=u-2,l=1;l<u;l++)h.push(s(e[l-1],e[l]));u--,r=function(_){_*=u;var f=Math.min(d,~~_);return h[f](_-f)},i=t}else n||(e=yr(Wt(e)?[]:{},e));if(!h){for(c in t)Ic.call(o,e,c,"get",t[c]);r=function(_){return Nc(_,o)||(a?e.p:e)}}}return Xn(i,r)},Tu=function(e,t,i){var n=e.labels,r=Ii,a,o,c;for(a in n)o=n[a]-t,o<0==!!i&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},Oi=function(e,t,i){var n=e.vars,r=n[t],a=pt,o=e._ctx,c,l,h;if(r)return c=n[t+"Params"],l=n.callbackScope||e,i&&kn.length&&go(),o&&(pt=o),h=c?r.apply(l,c):r.call(l),pt=a,h},Ps=function(e){return Vn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ht),e.progress()<1&&Oi(e,"onInterrupt"),e},jr,Jd=[],Qd=function(e){if(Ac()&&e){e=!e.name&&e.default||e;var t=e.name,i=mt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:js,render:Nc,add:Ic,kill:jv,modifier:Yv,rawVars:0},a={targetTest:0,get:0,getSetter:zc,aliases:{},register:0};if(ps(),e!==n){if(xi[t])return;Ui(n,Ui(_o(e,r),a)),yr(n.prototype,yr(r,_o(e,a))),xi[n.prop=t]=n,e.targetTest&&(to.push(n),Pc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Od(t,n),e.register&&e.register(hi,n,ci)}else e&&Jd.push(e)},nt=255,Ds={aqua:[0,nt,nt],lime:[0,nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,nt],navy:[0,0,128],white:[nt,nt,nt],olive:[128,128,0],yellow:[nt,nt,0],orange:[nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[nt,0,0],pink:[nt,192,203],cyan:[0,nt,nt],transparent:[nt,nt,nt,0]},Sl=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*nt+.5|0},ef=function(e,t,i){var n=e?Mn(e)?[e>>16,e>>8&nt,e&nt]:0:Ds.black,r,a,o,c,l,h,u,d,m,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ds[e])n=Ds[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&nt,n&nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&nt,e&nt]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(Yl),!t)c=+n[0]%360/360,l=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(l+1):h+l-h*l,r=h*2-a,n.length>3&&(n[3]*=1),n[0]=Sl(c+1/3,r,a),n[1]=Sl(c,r,a),n[2]=Sl(c-1/3,r,a);else if(~e.indexOf("="))return n=e.match(Pd),i&&n.length<4&&(n[3]=1),n}else n=e.match(Yl)||Ds.transparent;n=n.map(Number)}return t&&!_&&(r=n[0]/nt,a=n[1]/nt,o=n[2]/nt,u=Math.max(r,a,o),d=Math.min(r,a,o),h=(u+d)/2,u===d?c=l=0:(m=u-d,l=h>.5?m/(2-u-d):m/(u+d),c=u===r?(a-o)/m+(a<o?6:0):u===a?(o-r)/m+2:(r-a)/m+4,c*=60),n[0]=~~(c+.5),n[1]=~~(l*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},tf=function(e){var t=[],i=[],n=-1;return e.split(Bn).forEach(function(r){var a=r.match(Yr)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},Eu=function(e,t,i){var n="",r=(e+n).match(Bn),a=t?"hsla(":"rgba(",o=0,c,l,h,u;if(!r)return e;if(r=r.map(function(d){return(d=ef(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=tf(e),c=i.c,c.join(n)!==h.c.join(n)))for(l=e.replace(Bn,"1").split(Yr),u=l.length-1;o<u;o++)n+=l[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!l)for(l=e.split(Bn),u=l.length-1;o<u;o++)n+=l[o]+r[o];return n+l[u]},Bn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ds)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Fv=/hsl[a]?\(/,nf=function(e){var t=e.join(" "),i;if(Bn.lastIndex=0,Bn.test(t))return i=Fv.test(t),e[1]=Eu(e[1],i),e[0]=Eu(e[0],i,tf(e[1])),!0},Ks,yi=function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,a=r,o=[],c,l,h,u,d,m,_=function f(p){var g=s()-n,M=p===!0,v,y,b,L;if(g>e&&(i+=g-t),n+=g,b=n-i,v=b-a,(v>0||M)&&(L=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,a+=v+(v>=r?4:r-v),y=1),M||(c=l(f)),y)for(m=0;m<o.length;m++)o[m](b,d,L,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Id&&(!jl&&Ac()&&(Ci=jl=window,Cc=Ci.document||{},Ti.gsap=hi,(Ci.gsapVersions||(Ci.gsapVersions=[])).push(hi.version),Fd(po||Ci.GreenSockGlobals||!Ci.gsap&&Ci||{}),h=Ci.requestAnimationFrame,Jd.forEach(Qd)),c&&u.sleep(),l=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},Ks=1,_(2))},sleep:function(){(h?Ci.cancelAnimationFrame:clearTimeout)(c),Ks=0,l=js},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){r=1e3/(p||240),a=u.time*1e3+r},add:function(p,g,M){var v=g?function(y,b,L,A){p(y,b,L,A),u.remove(v)}:p;return u.remove(p),o[M?"unshift":"push"](v),ps(),v},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&m>=g&&m--},_listeners:o},u}(),ps=function(){return!Ks&&yi.wake()},Ke={},Ov=/^[\d.\-M][\d.\-,\s]/,zv=/["']/g,Nv=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,a=i.length,o,c,l;r<a;r++)c=i[r],o=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[n]=isNaN(l)?l.replace(zv,"").trim():+l,n=c.substr(o+1).trim();return t},Uv=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},kv=function(e){var t=(e+"").split("("),i=Ke[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Nv(t[1])]:Uv(e).split(",").map(kd)):Ke._CE&&Ov.test(e)?Ke._CE("",e):i},rf=function(e){return function(t){return 1-e(1-t)}},sf=function s(e,t){for(var i=e._first,n;i;)i instanceof Qt?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},fr=function(e,t){return e&&(mt(e)?e:Ke[e]||kv(e))||t},wr=function(e,t,i,n){i===void 0&&(i=function(c){return 1-t(1-c)}),n===void 0&&(n=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},a;return li(e,function(o){Ke[o]=Ti[o]=r,Ke[a=o.toLowerCase()]=i;for(var c in r)Ke[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ke[o+"."+c]=r[c]}),r},af=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},wl=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),a=r/ql*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*fv((h-a)*r)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:af(o);return r=ql/r,c.config=function(l,h){return s(e,l,h)},c},Tl=function s(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:af(i);return n.config=function(r){return s(e,r)},n};li("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;wr(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;wr("Elastic",wl("in"),wl("out"),wl());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(o){return o<t?s*o*o:o<i?s*Math.pow(o-1.5/e,2)+.75:o<n?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};wr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);wr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});wr("Circ",function(s){return-(Cd(1-s*s)-1)});wr("Sine",function(s){return s===1?1:-dv(s*hv)+1});wr("Back",Tl("in"),Tl("out"),Tl());Ke.SteppedEase=Ke.steps=Ti.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,a=1-rt;return function(o){return((n*ha(0,a,o)|0)+r)*i}}};us.ease=Ke["quad.out"];li("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Dc+=s+","+s+"Params,"});var of=function(e,t){this.id=uv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Nd,this.set=t?t.getSetter:zc},Js=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,fs(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),Ks||yi.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,fs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(ps(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Oo(this,i),!r._dp||r.parent||Vd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&tn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===rt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Ud(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Su(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Su(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?ds(this._tTime,r)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-rt?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?xo(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-rt?0:this._rts,this.totalTime(ha(-Math.abs(this._delay),this._tDur,n),!0),Fo(this),yv(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ps(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==rt&&(this._tTime-=rt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&tn(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(oi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xo(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=gv);var n=Ht;return Ht=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ht=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(n._ts||1),n=n._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,wu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,wu(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Ai(this,i),oi(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,oi(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-rt,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-rt)},e.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this;return new Promise(function(r){var a=mt(i)?i:Bd,o=function(){var l=n.then;n.then=null,mt(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=l),r(a),n.then=l};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},e.kill=function(){Ps(this)},s}();Ui(Js.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-rt,_prom:0,_ps:!1,_rts:1});var Qt=function(s){Ad(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=oi(i.sortChildren),ut&&tn(i.parent||ut,mn(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Hd(mn(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,a){return zs(0,arguments,this),this},t.from=function(n,r,a){return zs(1,arguments,this),this},t.fromTo=function(n,r,a,o){return zs(2,arguments,this),this},t.set=function(n,r,a){return r.duration=0,r.parent=this,Os(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new vt(n,r,Ai(this,a),1),this},t.call=function(n,r,a){return tn(this,vt.delayedCall(0,n,r),a)},t.staggerTo=function(n,r,a,o,c,l,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new vt(n,a,Ai(this,c)),this},t.staggerFrom=function(n,r,a,o,c,l,h){return a.runBackwards=1,Os(a).immediateRender=oi(a.immediateRender),this.staggerTo(n,r,a,o,c,l,h)},t.staggerFromTo=function(n,r,a,o,c,l,h,u){return o.startAt=a,Os(o).immediateRender=oi(o.immediateRender),this.staggerTo(n,r,o,c,l,h,u)},t.render=function(n,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=n<=0?0:zt(n),u=this._zTime<0!=n<0&&(this._initted||!l),d,m,_,f,p,g,M,v,y,b,L,A;if(this!==ut&&h>c&&n>=0&&(h=c),h!==this._tTime||a||u){if(o!==this._time&&l&&(h+=this._time-o,n+=this._time-o),d=h,y=this._start,v=this._ts,g=!v,u&&(l||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(L=this._yoyo,p=l+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,r,a);if(d=zt(h%p),h===c?(f=this._repeat,d=l):(f=~~(h/p),f&&f===h/p&&(d=l,f--),d>l&&(d=l)),b=ds(this._tTime,p),!o&&this._tTime&&b!==f&&this._tTime-b*p-this._dur<=0&&(b=f),L&&f&1&&(d=l-d,A=1),f!==b&&!this._lock){var x=L&&b&1,S=x===(L&&f&1);if(f<b&&(x=!x),o=x?0:l,this._lock=1,this.render(o||(A?0:zt(f*p)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&Oi(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,S&&(this._lock=2,o=x?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;sf(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=wv(this,zt(o),zt(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&d&&!r&&!f&&(Oi(this,"onStart"),this._tTime!==h))return this;if(d>=o&&n>=0)for(m=this._first;m;){if(_=m._next,(m._act||d>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(n,r,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,a),d!==this._time||!this._ts&&!g){M=0,_&&(h+=this._zTime=-rt);break}}m=_}else{m=this._last;for(var P=n<0?n:d;m;){if(_=m._prev,(m._act||P<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(n,r,a);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,r,a||Ht&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!g){M=0,_&&(h+=this._zTime=P?-rt:rt);break}}m=_}}if(M&&!r&&(this.pause(),M.render(d>=o?0:-rt)._zTime=d>=o?1:-1,this._ts))return this._start=y,Fo(this),this.render(n,r,a);this._onUpdate&&!r&&Oi(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((n||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Vn(this,1),!r&&!(n<0&&!o)&&(h||o||!c)&&(Oi(this,h===c&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var a=this;if(Mn(r)||(r=Ai(this,r,n)),!(n instanceof Js)){if(Wt(n))return n.forEach(function(o){return a.add(o,r)}),this;if(Ft(n))return this.addLabel(n,r);if(mt(n))n=vt.delayedCall(0,n);else return this}return this!==n?tn(this,n,r):this},t.getChildren=function(n,r,a,o){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ii);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof vt?r&&c.push(l):(a&&c.push(l),n&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},t.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},t.remove=function(n){return Ft(n)?this.removeLabel(n):mt(n)?this.killTweensOf(n):(Io(this,n),n===this._recent&&(this._recent=this._last),dr(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(yi.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Ai(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,a){var o=vt.delayedCall(0,r||js,a);return o.data="isPause",this._hasPause=1,tn(this,o,Ai(this,n))},t.removePause=function(n){var r=this._first;for(n=Ai(this,n);r;)r._start===n&&r.data==="isPause"&&Vn(r),r=r._next},t.killTweensOf=function(n,r,a){for(var o=this.getTweensOf(n,a),c=o.length;c--;)In!==o[c]&&o[c].kill(n,r);return this},t.getTweensOf=function(n,r){for(var a=[],o=Fi(n),c=this._first,l=Mn(r),h;c;)c instanceof vt?_v(c._targets,o)&&(l?(!In||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(h=c.getTweensOf(o,r)).length&&a.push.apply(a,h),c=c._next;return a},t.tweenTo=function(n,r){r=r||{};var a=this,o=Ai(a,n),c=r,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,m,_=vt.to(a,Ui({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||rt,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());_._dur!==p&&fs(_,p,0,1).render(_._time,!0,!0),m=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(n,r,a){return this.tweenTo(r,Ui({startAt:{time:Ai(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Tu(this,Ai(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Tu(this,Ai(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+rt)},t.shiftChildren=function(n,r,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(r)for(l in c)c[l]>=a&&(c[l]+=n);return dr(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),dr(this)},t.totalDuration=function(n){var r=0,a=this,o=a._last,c=Ii,l,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(u=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,tn(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;fs(a,a===ut&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(ut._ts&&(Ud(ut,xo(n,ut)),zd=yi.frame),yi.frame>=bu){bu+=wi.autoSleep||120;var r=ut._first;if((!r||!r._ts)&&wi.autoSleep&&yi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||yi.sleep()}}},e}(Js);Ui(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Bv=function(e,t,i,n,r,a,o){var c=new ci(this._pt,e,t,0,1,ff,null,r),l=0,h=0,u,d,m,_,f,p,g,M;for(c.b=i,c.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=Zs(n)),a&&(M=[i,n],a(M,e,t),i=M[0],n=M[1]),d=i.match(bl)||[];u=bl.exec(n);)_=u[0],f=n.substring(l,u.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),_!==d[h++]&&(p=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:f||h===1?f:",",s:p,c:_.charAt(1)==="="?es(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},l=bl.lastIndex);return c.c=l<n.length?n.substring(l,n.length):"",c.fp=o,(Dd.test(n)||g)&&(c.e=0),this._pt=c,c},Ic=function(e,t,i,n,r,a,o,c,l,h){mt(n)&&(n=n(r||0,e,a));var u=e[t],d=i!=="get"?i:mt(u)?l?e[t.indexOf("set")||!mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():u,m=mt(u)?l?Xv:uf:Oc,_;if(Ft(n)&&(~n.indexOf("random(")&&(n=Zs(n)),n.charAt(1)==="="&&(_=es(d,n)+(Vt(d)||0),(_||_===0)&&(n=_))),!h||d!==n||ic)return!isNaN(d*n)&&n!==""?(_=new ci(this._pt,e,t,+d||0,n-(d||0),typeof u=="boolean"?qv:df,0,m),l&&(_.fp=l),o&&_.modifier(o,this,e),this._pt=_):(!u&&!(t in e)&&Lc(t,n),Bv.call(this,e,t,d,n,m,c||wi.stringFilter,l))},Gv=function(e,t,i,n,r){if(mt(e)&&(e=Ns(e,r,t,i,n)),!ln(e)||e.style&&e.nodeType||Wt(e)||Ld(e))return Ft(e)?Ns(e,r,t,i,n):e;var a={},o;for(o in e)a[o]=Ns(e[o],r,t,i,n);return a},lf=function(e,t,i,n,r,a){var o,c,l,h;if(xi[e]&&(o=new xi[e]).init(r,o.rawVars?t[e]:Gv(t[e],n,r,a,i),i,n,a)!==!1&&(i._pt=c=new ci(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==jr))for(l=i._ptLookup[i._targets.indexOf(r)],h=o._props.length;h--;)l[o._props[h]]=c;return o},In,ic,Fc=function s(e,t,i){var n=e.vars,r=n.ease,a=n.startAt,o=n.immediateRender,c=n.lazy,l=n.onUpdate,h=n.onUpdateParams,u=n.callbackScope,d=n.runBackwards,m=n.yoyoEase,_=n.keyframes,f=n.autoRevert,p=e._dur,g=e._startAt,M=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:M,b=e._overwrite==="auto"&&!Tc,L=e.timeline,A,x,S,P,k,Q,z,R,O,Y,T,U,J;if(L&&(!_||!r)&&(r="none"),e._ease=fr(r,us.ease),e._yEase=m?rf(fr(m===!0?r:m,us.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!L&&!!n.runBackwards,!L||_&&!n.stagger){if(R=M[0]?ur(M[0]).harness:0,U=R&&n[R.prop],A=_o(n,Pc),g&&(g._zTime<0&&g.progress(1),t<0&&d&&o&&!f?g.render(-1,!0):g.revert(d&&p?eo:mv),g._lazy=0),a){if(Vn(e._startAt=vt.set(M,Ui({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!g&&oi(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:h,callbackScope:u,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ht||!o&&!f)&&e._startAt.revert(eo),o&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(d&&p&&!g){if(t&&(o=!1),S=Ui({overwrite:!1,data:"isFromStart",lazy:o&&!g&&oi(c),immediateRender:o,stagger:0,parent:v},A),U&&(S[R.prop]=U),Vn(e._startAt=vt.set(M,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ht?e._startAt.revert(eo):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,rt,rt);else if(!t)return}for(e._pt=e._ptCache=0,c=p&&oi(c)||c&&!p,x=0;x<M.length;x++){if(k=M[x],z=k._gsap||Rc(M)[x]._gsap,e._ptLookup[x]=Y={},Zl[z.id]&&kn.length&&go(),T=y===M?x:y.indexOf(k),R&&(O=new R).init(k,U||A,e,T,y)!==!1&&(e._pt=P=new ci(e._pt,k,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(te){Y[te]=P}),O.priority&&(Q=1)),!R||U)for(S in A)xi[S]&&(O=lf(S,A,e,T,k,y))?O.priority&&(Q=1):Y[S]=P=Ic.call(e,k,S,"get",A[S],T,y,0,n.stringFilter);e._op&&e._op[x]&&e.kill(k,e._op[x]),b&&e._pt&&(In=e,ut.killTweensOf(k,Y,e.globalTime(t)),J=!e.parent,In=0),e._pt&&c&&(Zl[z.id]=1)}Q&&pf(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!J,_&&t<=0&&L.render(Ii,!0,!0)},Vv=function(e,t,i,n,r,a,o){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,h,u,d;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,d=e._targets.length;d--;){if(l=u[d][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return ic=1,e.vars[t]="+=0",Fc(e,o),ic=0,1;c.push(l)}for(d=c.length;d--;)h=c[d],l=h._pt||h,l.s=(n||n===0)&&!r?n:l.s+(n||0)+a*l.c,l.c=i-l.s,h.e&&(h.e=gt(i)+Vt(h.e)),h.b&&(h.b=l.s+Vt(h.b))},Hv=function(e,t){var i=e[0]?ur(e[0]).harness:0,n=i&&i.aliases,r,a,o,c;if(!n)return t;r=yr({},t);for(a in n)if(a in r)for(c=n[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},Wv=function(e,t,i,n){var r=t.ease||n||"power1.inOut",a,o;if(Wt(t))o=i[e]||(i[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:r})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Ns=function(e,t,i,n,r){return mt(e)?e.call(t,i,n,r):Ft(e)&&~e.indexOf("random(")?Zs(e):e},cf=Dc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",hf={};li(cf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return hf[s]=1});var vt=function(s){Ad(e,s);function e(i,n,r,a){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=s.call(this,a?n:Os(n))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,m=c.overwrite,_=c.keyframes,f=c.defaults,p=c.scrollTrigger,g=c.yoyoEase,M=n.parent||ut,v=(Wt(i)||Ld(i)?Mn(i[0]):"length"in n)?[i]:Fi(i),y,b,L,A,x,S,P,k;if(o._targets=v.length?Rc(v):mo("GSAP target "+i+" not found. https://greensock.com",!wi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||d||Ua(l)||Ua(h)){if(n=o.vars,y=o.timeline=new Qt({data:"nested",defaults:f||{},targets:M&&M.data==="nested"?M.vars.targets:v}),y.kill(),y.parent=y._dp=mn(o),y._start=0,d||Ua(l)||Ua(h)){if(A=v.length,P=d&&qd(d),ln(d))for(x in d)~cf.indexOf(x)&&(k||(k={}),k[x]=d[x]);for(b=0;b<A;b++)L=_o(n,hf),L.stagger=0,g&&(L.yoyoEase=g),k&&yr(L,k),S=v[b],L.duration=+Ns(l,mn(o),b,S,v),L.delay=(+Ns(h,mn(o),b,S,v)||0)-o._delay,!d&&A===1&&L.delay&&(o._delay=h=L.delay,o._start+=h,L.delay=0),y.to(S,L,P?P(b,S,v):0),y._ease=Ke.none;y.duration()?l=h=0:o.timeline=0}else if(_){Os(Ui(y.vars.defaults,{ease:"none"})),y._ease=fr(_.ease||n.ease||"none");var Q=0,z,R,O;if(Wt(_))_.forEach(function(Y){return y.to(v,Y,">")}),y.duration();else{L={};for(x in _)x==="ease"||x==="easeEach"||Wv(x,_[x],L,_.easeEach);for(x in L)for(z=L[x].sort(function(Y,T){return Y.t-T.t}),Q=0,b=0;b<z.length;b++)R=z[b],O={ease:R.e,duration:(R.t-(b?z[b-1].t:0))/100*l},O[x]=R.v,y.to(v,O,Q),Q+=O.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||o.duration(l=y.duration())}else o.timeline=0;return m===!0&&!Tc&&(In=mn(o),ut.killTweensOf(v),In=0),tn(M,mn(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(u||!l&&!_&&o._start===zt(M._time)&&oi(u)&&bv(mn(o))&&M.data!=="nested")&&(o._tTime=-rt,o.render(Math.max(0,-h)||0)),p&&Hd(mn(o),p),o}var t=e.prototype;return t.render=function(n,r,a){var o=this._time,c=this._tDur,l=this._dur,h=n<0,u=n>c-rt&&!h?c:n<rt?0:n,d,m,_,f,p,g,M,v,y;if(!l)Sv(this,n,r,a);else if(u!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,v=this.timeline,this._repeat){if(f=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(f*100+n,r,a);if(d=zt(u%f),u===c?(_=this._repeat,d=l):(_=~~(u/f),_&&_===u/f&&(d=l,_--),d>l&&(d=l)),g=this._yoyo&&_&1,g&&(y=this._yEase,d=l-d),p=ds(this._tTime,f),d===o&&!a&&this._initted)return this._tTime=u,this;_!==p&&(v&&this._yEase&&sf(v,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=a=1,this.render(zt(f*_),!0).invalidate()._lock=0))}if(!this._initted){if(Wd(this,h?n:d,a,r,u))return this._tTime=0,this;if(o!==this._time)return this;if(l!==this._dur)return this.render(n,r,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(d/l),this._from&&(this.ratio=M=1-M),d&&!o&&!r&&!_&&(Oi(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;v&&v.render(n<0?n:!d&&g?-rt:v._dur*v._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&Kl(this,n,r,a),Oi(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Oi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Kl(this,n,!0,!0),(n||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Vn(this,1),!r&&!(h&&!o)&&(u||o||g)&&(Oi(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,a,o){Ks||yi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||Fc(this,c),l=this._ease(c/this._dur),Vv(this,n,r,a,o,l,c)?this.resetTo(n,r,a,o):(Oo(this,0),this.parent||Gd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ps(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,In&&In.vars.overwrite!==!0)._first||Ps(this),this.parent&&a!==this.timeline.totalDuration()&&fs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=n?Fi(n):o,l=this._ptLookup,h=this._pt,u,d,m,_,f,p,g;if((!r||r==="all")&&vv(o,c))return r==="all"&&(this._pt=0),Ps(this);for(u=this._op=this._op||[],r!=="all"&&(Ft(r)&&(f={},li(r,function(M){return f[M]=1}),r=f),r=Hv(o,r)),g=o.length;g--;)if(~c.indexOf(o[g])){d=l[g],r==="all"?(u[g]=r,_=d,m={}):(m=u[g]=u[g]||{},_=r);for(f in _)p=d&&d[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&Io(this,p,"_pt"),delete d[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&h&&Ps(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return zs(1,arguments)},e.delayedCall=function(n,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,r,a){return zs(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,a){return ut.killTweensOf(n,r,a)},e}(Js);Ui(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});li("staggerTo,staggerFrom,staggerFromTo",function(s){vt[s]=function(){var e=new Qt,t=Ql.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Oc=function(e,t,i){return e[t]=i},uf=function(e,t,i){return e[t](i)},Xv=function(e,t,i,n){return e[t](n.fp,i)},$v=function(e,t,i){return e.setAttribute(t,i)},zc=function(e,t){return mt(e[t])?uf:Ec(e[t])&&e.setAttribute?$v:Oc},df=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},qv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ff=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Nc=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Yv=function(e,t,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(e,t,i),r=a},jv=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Io(this,t,"_pt"):t.dep||(i=1),t=n;return!i},Zv=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},pf=function(e){for(var t=e._pt,i,n,r,a;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=r},ci=function(){function s(t,i,n,r,a,o,c,l,h){this.t=i,this.s=r,this.c=a,this.p=n,this.r=o||df,this.d=c||this,this.set=l||Oc,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=Zv,this.m=i,this.mt=r,this.tween=n},s}();li(Dc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Pc[s]=1});Ti.TweenMax=Ti.TweenLite=vt;Ti.TimelineLite=Ti.TimelineMax=Qt;ut=new Qt({sortChildren:!1,defaults:us,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wi.stringFilter=nf;var pr=[],io={},Kv=[],Au=0,Jv=0,El=function(e){return(io[e]||Kv).map(function(t){return t()})},nc=function(){var e=Date.now(),t=[];e-Au>2&&(El("matchMediaInit"),pr.forEach(function(i){var n=i.queries,r=i.conditions,a,o,c,l;for(o in n)a=Ci.matchMedia(n[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,l=1);l&&(i.revert(),c&&t.push(i))}),El("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),Au=e,El("matchMedia"))},mf=function(){function s(t,i){this.selector=i&&ec(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Jv++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){mt(i)&&(r=n,n=i,i=mt);var a=this,o=function(){var l=pt,h=a.selector,u;return l&&l!==a&&l.data.push(a),r&&(a.selector=ec(r)),pt=a,u=n.apply(a,arguments),mt(u)&&a._r.push(u),pt=l,a.selector=h,a.isReverted=!1,u};return a.last=o,i===mt?o(a):i?a[i]=o:o},e.ignore=function(i){var n=pt;pt=null,i(this),pt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof vt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i){var a=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return a.splice(a.indexOf(l),1)}))}),a.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1}).forEach(function(c){return c.t.revert(i)}),this.data.forEach(function(c){return c instanceof Qt?c.data!=="nested"&&c.kill():!(c instanceof vt)&&c.revert&&c.revert(i)}),this._r.forEach(function(c){return c(i,r)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),n)for(var o=pr.length;o--;)pr[o].id===this.id&&pr.splice(o,1)},e.revert=function(i){this.kill(i||{})},s}(),Qv=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(i,n,r){ln(i)||(i={matches:i});var a=new mf(0,r||this.scope),o=a.conditions={},c,l,h;pt&&!a.selector&&(a.selector=pt.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(l in i)l==="all"?h=1:(c=Ci.matchMedia(i[l]),c&&(pr.indexOf(a)<0&&pr.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(nc):c.addEventListener("change",nc)));return h&&n(a),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s}(),vo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Qd(n)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,t){return ut.getTweensOf(e,t)},getProperty:function(e,t,i,n){Ft(e)&&(e=Fi(e)[0]);var r=ur(e||{}).get,a=i?Bd:kd;return i==="native"&&(i=""),e&&(t?a((xi[t]&&xi[t].get||r)(e,t,i,n)):function(o,c,l){return a((xi[o]&&xi[o].get||r)(e,o,c,l))})},quickSetter:function(e,t,i){if(e=Fi(e),e.length>1){var n=e.map(function(h){return hi.quickSetter(h,t,i)}),r=n.length;return function(h){for(var u=r;u--;)n[u](h)}}e=e[0]||{};var a=xi[t],o=ur(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(h){var u=new a;jr._pt=0,u.init(e,i?h+i:h,jr,0,[e]),u.render(1,u),jr._pt&&Nc(1,jr)}:o.set(e,c);return a?l:function(h){return l(e,c,i?h+i:h,o,1)}},quickTo:function(e,t,i){var n,r=hi.to(e,yr((n={},n[t]="+=0.1",n.paused=!0,n),i||{})),a=function(c,l,h){return r.resetTo(t,c,l,h)};return a.tween=r,a},isTweening:function(e){return ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=fr(e.ease,us.ease)),Mu(us,e||{})},config:function(e){return Mu(wi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!xi[o]&&!Ti[o]&&mo(t+" effect requires "+o+" plugin.")}),Ml[t]=function(o,c,l){return i(Fi(o),Ui(c||{},r),l)},a&&(Qt.prototype[t]=function(o,c,l){return this.add(Ml[t](o,ln(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Ke[e]=fr(t)},parseEase:function(e,t){return arguments.length?fr(e,t):Ke},getById:function(e){return ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Qt(e),n,r;for(i.smoothChildTiming=oi(e.smoothChildTiming),ut.remove(i),i._dp=0,i._time=i._tTime=ut._time,n=ut._first;n;)r=n._next,(t||!(!n._dur&&n instanceof vt&&n.vars.onComplete===n._targets[0]))&&tn(i,n,n._start-n._delay),n=r;return tn(ut,i,0),i},context:function(e,t){return e?new mf(e,t):pt},matchMedia:function(e){return new Qv(e)},matchMediaRefresh:function(){return pr.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||nc()},addEventListener:function(e,t){var i=io[e]||(io[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=io[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Dv,wrapYoyo:Rv,distribute:qd,random:jd,snap:Yd,normalize:Pv,getUnit:Vt,clamp:Ev,splitColor:ef,toArray:Fi,selector:ec,mapRange:Kd,pipe:Cv,unitize:Lv,interpolate:Iv,shuffle:$d},install:Fd,effects:Ml,ticker:yi,updateRoot:Qt.updateRoot,plugins:xi,globalTimeline:ut,core:{PropTween:ci,globals:Od,Tween:vt,Timeline:Qt,Animation:Js,getCache:ur,_removeLinkedListItem:Io,reverting:function(){return Ht},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return Tc=e}}};li("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return vo[s]=vt[s]});yi.add(Qt.updateRoot);jr=vo.to({},{duration:0});var ey=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},ty=function(e,t){var i=e._targets,n,r,a;for(n in t)for(r=i.length;r--;)a=e._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=ey(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[r],n))},Al=function(e,t){return{name:e,rawVars:1,init:function(n,r,a){a._onInit=function(o){var c,l;if(Ft(r)&&(c={},li(r,function(h){return c[h]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}ty(o,r)}}}},hi=vo.registerPlugin({name:"attr",init:function(e,t,i,n,r){var a,o,c;this.tween=i;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],n,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Ht?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Al("roundProps",tc),Al("modifiers"),Al("snap",Yd))||vo;vt.version=Qt.version=hi.version="3.12.1";Id=1;Ac()&&ps();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.12.1
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Cu,Fn,ts,Uc,or,Lu,kc,iy=function(){return typeof window<"u"},Sn={},tr=180/Math.PI,is=Math.PI/180,kr=Math.atan2,Pu=1e8,Bc=/([A-Z])/g,ny=/(left|right|width|margin|padding|x)/i,ry=/[\s,\(]\S/,nn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ay=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},oy=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},gf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_f=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ly=function(e,t,i){return e.style[t]=i},cy=function(e,t,i){return e.style.setProperty(t,i)},hy=function(e,t,i){return e._gsap[t]=i},uy=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},dy=function(e,t,i,n,r){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},fy=function(e,t,i,n,r){var a=e._gsap;a[t]=i,a.renderTransform(r,a)},dt="transform",ji=dt+"Origin",py=function s(e,t){var i=this,n=this.target,r=n.style;if(e in Sn&&r){if(this.tfm=this.tfm||{},e!=="transform")e=nn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=gn(n,a)}):this.tfm[e]=n._gsap.x?n._gsap[e]:gn(n,e);else return nn.transform.split(",").forEach(function(a){return s.call(i,a,t)});if(this.props.indexOf(dt)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(ji,t,"")),e=dt}(r||t)&&this.props.push(e,t,r[e])},xf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},my=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Bc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=kc(),(!r||!r.isStart)&&!i[dt]&&(xf(i),n.uncache=1)}},vf=function(e,t){var i={target:e,props:[],revert:my,save:py};return e._gsap||hi.core.getCache(e),t&&t.split(",").forEach(function(n){return i.save(n)}),i},yf,sc=function(e,t){var i=Fn.createElementNS?Fn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Fn.createElement(e);return i.style?i:Fn.createElement(e)},sn=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Bc,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,ms(t)||t,1)||""},Du="O,Moz,ms,Ms,Webkit".split(","),ms=function(e,t,i){var n=t||or,r=n.style,a=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Du[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Du[a]:"")+e},ac=function(){iy()&&window.document&&(Cu=window,Fn=Cu.document,ts=Fn.documentElement,or=sc("div")||{style:{}},sc("div"),dt=ms(dt),ji=dt+"Origin",or.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yf=!!ms("perspective"),kc=hi.core.reverting,Uc=1)},Cl=function s(e){var t=sc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,r=this.style.cssText,a;if(ts.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ts.removeChild(t),this.style.cssText=r,a},Ru=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},bf=function(e){var t;try{t=e.getBBox()}catch{t=Cl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Cl||(t=Cl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ru(e,["x","cx","x1"])||0,y:+Ru(e,["y","cy","y1"])||0,width:0,height:0}:t},Mf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&bf(e))},Qs=function(e,t){if(t){var i=e.style;t in Sn&&t!==ji&&(t=dt),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(Bc,"-$1").toLowerCase())):i.removeAttribute(t)}},On=function(e,t,i,n,r,a){var o=new ci(e._pt,t,i,0,1,a?_f:gf);return e._pt=o,o.b=n,o.e=r,e._props.push(i),o},Iu={deg:1,rad:1,turn:1},gy={grid:1,flex:1},Hn=function s(e,t,i,n){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=or.style,c=ny.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=n==="px",m=n==="%",_,f,p,g;return n===a||!r||Iu[n]||Iu[a]?r:(a!=="px"&&!d&&(r=s(e,t,i,"px")),g=e.getCTM&&Mf(e),(m||a==="%")&&(Sn[t]||~t.indexOf("adius"))?(_=g?e.getBBox()[c?"width":"height"]:e[h],gt(m?r/_*u:r/100*_)):(o[c?"width":"height"]=u+(d?a:n),f=~t.indexOf("adius")||n==="em"&&e.appendChild&&!l?e:e.parentNode,g&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===Fn||!f.appendChild)&&(f=Fn.body),p=f._gsap,p&&m&&p.width&&c&&p.time===yi.time&&!p.uncache?gt(r/p.width*u):((m||a==="%")&&!gy[sn(f,"display")]&&(o.position=sn(e,"position")),f===e&&(o.position="static"),f.appendChild(or),_=or[h],f.removeChild(or),o.position="absolute",c&&m&&(p=ur(f),p.time=yi.time,p.width=f[h]),gt(d?_*r/u:_&&r?u/_*r:0))))},gn=function(e,t,i,n){var r;return Uc||ac(),t in nn&&t!=="transform"&&(t=nn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Sn[t]&&t!=="transform"?(r=ta(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:bo(sn(e,ji))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=yo[t]&&yo[t](e,t,i)||sn(e,t)||Nd(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Hn(e,t,r,i)+i:r},_y=function(e,t,i,n){if(!i||i==="none"){var r=ms(t,e,1),a=r&&sn(e,r,1);a&&a!==i?(t=r,i=a):t==="borderColor"&&(i=sn(e,"borderTopColor"))}var o=new ci(this._pt,e.style,t,0,1,ff),c=0,l=0,h,u,d,m,_,f,p,g,M,v,y,b;if(o.b=i,o.e=n,i+="",n+="",n==="auto"&&(e.style[t]=n,n=sn(e,t)||n,e.style[t]=i),h=[i,n],nf(h),i=h[0],n=h[1],d=i.match(Yr)||[],b=n.match(Yr)||[],b.length){for(;u=Yr.exec(n);)p=u[0],M=n.substring(c,u.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(f=d[l++]||"")&&(m=parseFloat(f)||0,y=f.substr((m+"").length),p.charAt(1)==="="&&(p=es(m,p)+y),g=parseFloat(p),v=p.substr((g+"").length),c=Yr.lastIndex-v.length,v||(v=v||wi.units[t]||y,c===n.length&&(n+=v,o.e+=v)),y!==v&&(m=Hn(e,t,f,v)||0),o._pt={_next:o._pt,p:M||l===1?M:",",s:m,c:g-m,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=c<n.length?n.substring(c,n.length):""}else o.r=t==="display"&&n==="none"?_f:gf;return Dd.test(n)&&(o.e=0),this._pt=o,o},Fu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xy=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Fu[i]||i,t[1]=Fu[n]||n,t.join(" ")},vy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,a=i._gsap,o,c,l;if(r==="all"||r===!0)n.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],Sn[o]&&(c=1,o=o==="transformOrigin"?ji:dt),Qs(i,o);c&&(Qs(i,dt),a&&(a.svg&&i.removeAttribute("transform"),ta(i,1),a.uncache=1,xf(n)))}},yo={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var a=e._pt=new ci(e._pt,t,i,0,0,vy);return a.u=n,a.pr=-10,a.tween=r,e._props.push(i),1}}},ea=[1,0,0,1,0,0],Sf={},wf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ou=function(e){var t=sn(e,dt);return wf(t)?ea:t.substr(7).match(Pd).map(gt)},Gc=function(e,t){var i=e._gsap||ur(e),n=e.style,r=Ou(e),a,o,c,l;return i.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?ea:r):(r===ea&&!e.offsetParent&&e!==ts&&!i.svg&&(c=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(l=1,o=e.nextElementSibling,ts.appendChild(e)),r=Ou(e),c?n.display=c:Qs(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):ts.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},oc=function(e,t,i,n,r,a){var o=e._gsap,c=r||Gc(e,!0),l=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,m=c[0],_=c[1],f=c[2],p=c[3],g=c[4],M=c[5],v=t.split(" "),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,L,A,x,S;i?c!==ea&&(A=m*p-_*f)&&(x=y*(p/A)+b*(-f/A)+(f*M-p*g)/A,S=y*(-_/A)+b*(m/A)-(m*M-_*g)/A,y=x,b=S):(L=bf(e),y=L.x+(~v[0].indexOf("%")?y/100*L.width:y),b=L.y+(~(v[1]||v[0]).indexOf("%")?b/100*L.height:b)),n||n!==!1&&o.smooth?(g=y-l,M=b-h,o.xOffset=u+(g*m+M*f)-g,o.yOffset=d+(g*_+M*p)-M):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[ji]="0px 0px",a&&(On(a,o,"xOrigin",l,y),On(a,o,"yOrigin",h,b),On(a,o,"xOffset",u,o.xOffset),On(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},ta=function(e,t){var i=e._gsap||new of(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=sn(e,ji)||"0",h,u,d,m,_,f,p,g,M,v,y,b,L,A,x,S,P,k,Q,z,R,O,Y,T,U,J,te,B,V,ee,j,ie;return h=u=d=f=p=g=M=v=y=0,m=_=1,i.svg=!!(e.getCTM&&Mf(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(n[dt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[dt]!=="none"?c[dt]:"")),n.scale=n.rotate=n.translate="none"),A=Gc(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),l=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",T=""):T=!t&&e.getAttribute("data-svg-origin"),oc(e,T||l,!!T||i.originIsAbsolute,i.smooth!==!1,A)),b=i.xOrigin||0,L=i.yOrigin||0,A!==ea&&(k=A[0],Q=A[1],z=A[2],R=A[3],h=O=A[4],u=Y=A[5],A.length===6?(m=Math.sqrt(k*k+Q*Q),_=Math.sqrt(R*R+z*z),f=k||Q?kr(Q,k)*tr:0,M=z||R?kr(z,R)*tr+f:0,M&&(_*=Math.abs(Math.cos(M*is))),i.svg&&(h-=b-(b*k+L*z),u-=L-(b*Q+L*R))):(ie=A[6],ee=A[7],te=A[8],B=A[9],V=A[10],j=A[11],h=A[12],u=A[13],d=A[14],x=kr(ie,V),p=x*tr,x&&(S=Math.cos(-x),P=Math.sin(-x),T=O*S+te*P,U=Y*S+B*P,J=ie*S+V*P,te=O*-P+te*S,B=Y*-P+B*S,V=ie*-P+V*S,j=ee*-P+j*S,O=T,Y=U,ie=J),x=kr(-z,V),g=x*tr,x&&(S=Math.cos(-x),P=Math.sin(-x),T=k*S-te*P,U=Q*S-B*P,J=z*S-V*P,j=R*P+j*S,k=T,Q=U,z=J),x=kr(Q,k),f=x*tr,x&&(S=Math.cos(x),P=Math.sin(x),T=k*S+Q*P,U=O*S+Y*P,Q=Q*S-k*P,Y=Y*S-O*P,k=T,O=U),p&&Math.abs(p)+Math.abs(f)>359.9&&(p=f=0,g=180-g),m=gt(Math.sqrt(k*k+Q*Q+z*z)),_=gt(Math.sqrt(Y*Y+ie*ie)),x=kr(O,Y),M=Math.abs(x)>2e-4?x*tr:0,y=j?1/(j<0?-j:j):0),i.svg&&(T=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!wf(sn(e,dt)),T&&e.setAttribute("transform",T))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(m*=-1,M+=f<=0?180:-180,f+=f<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=gt(m),i.scaleY=gt(_),i.rotation=gt(f)+o,i.rotationX=gt(p)+o,i.rotationY=gt(g)+o,i.skewX=M+o,i.skewY=v+o,i.transformPerspective=y+a,(i.zOrigin=parseFloat(l.split(" ")[2])||0)&&(n[ji]=bo(l)),i.xOffset=i.yOffset=0,i.force3D=wi.force3D,i.renderTransform=i.svg?by:yf?Tf:yy,i.uncache=0,i},bo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ll=function(e,t,i){var n=Vt(t);return gt(parseFloat(t)+parseFloat(Hn(e,"x",i+"px",n)))+n},yy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tf(e,t)},Kn="0deg",ws="0px",Jn=") ",Tf=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,c=i.z,l=i.rotation,h=i.rotationY,u=i.rotationX,d=i.skewX,m=i.skewY,_=i.scaleX,f=i.scaleY,p=i.transformPerspective,g=i.force3D,M=i.target,v=i.zOrigin,y="",b=g==="auto"&&e&&e!==1||g===!0;if(v&&(u!==Kn||h!==Kn)){var L=parseFloat(h)*is,A=Math.sin(L),x=Math.cos(L),S;L=parseFloat(u)*is,S=Math.cos(L),a=Ll(M,a,A*S*-v),o=Ll(M,o,-Math.sin(L)*-v),c=Ll(M,c,x*S*-v+v)}p!==ws&&(y+="perspective("+p+Jn),(n||r)&&(y+="translate("+n+"%, "+r+"%) "),(b||a!==ws||o!==ws||c!==ws)&&(y+=c!==ws||b?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Jn),l!==Kn&&(y+="rotate("+l+Jn),h!==Kn&&(y+="rotateY("+h+Jn),u!==Kn&&(y+="rotateX("+u+Jn),(d!==Kn||m!==Kn)&&(y+="skew("+d+", "+m+Jn),(_!==1||f!==1)&&(y+="scale("+_+", "+f+Jn),M.style[dt]=y||"translate(0, 0)"},by=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,c=i.rotation,l=i.skewX,h=i.skewY,u=i.scaleX,d=i.scaleY,m=i.target,_=i.xOrigin,f=i.yOrigin,p=i.xOffset,g=i.yOffset,M=i.forceCSS,v=parseFloat(a),y=parseFloat(o),b,L,A,x,S;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=is,l*=is,b=Math.cos(c)*u,L=Math.sin(c)*u,A=Math.sin(c-l)*-d,x=Math.cos(c-l)*d,l&&(h*=is,S=Math.tan(l-h),S=Math.sqrt(1+S*S),A*=S,x*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),b*=S,L*=S)),b=gt(b),L=gt(L),A=gt(A),x=gt(x)):(b=u,x=d,L=A=0),(v&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(v=Hn(m,"x",a,"px"),y=Hn(m,"y",o,"px")),(_||f||p||g)&&(v=gt(v+_-(_*b+f*A)+p),y=gt(y+f-(_*L+f*x)+g)),(n||r)&&(S=m.getBBox(),v=gt(v+n/100*S.width),y=gt(y+r/100*S.height)),S="matrix("+b+","+L+","+A+","+x+","+v+","+y+")",m.setAttribute("transform",S),M&&(m.style[dt]=S)},My=function(e,t,i,n,r){var a=360,o=Ft(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?tr:1),l=c-n,h=n+l+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*Pu)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*Pu)%a-~~(l/a)*a)),e._pt=d=new ci(e._pt,t,i,n,l,sy),d.e=h,d.u="deg",e._props.push(i),d},zu=function(e,t){for(var i in t)e[i]=t[i];return e},Sy=function(e,t,i){var n=zu({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,c,l,h,u,d,m,_;n.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),a[dt]=t,o=ta(i,1),Qs(i,dt),i.setAttribute("transform",l)):(l=getComputedStyle(i)[dt],a[dt]=t,o=ta(i,1),a[dt]=l);for(c in Sn)l=n[c],h=o[c],l!==h&&r.indexOf(c)<0&&(m=Vt(l),_=Vt(h),u=m!==_?Hn(i,c,l,_):parseFloat(l),d=parseFloat(h),e._pt=new ci(e._pt,o,c,u,d-u,rc),e._pt.u=_||0,e._props.push(c));zu(o,n)};li("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",a=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(o){return e<2?s+o:"border"+o+s});yo[e>1?"border"+s:s]=function(o,c,l,h,u){var d,m;if(arguments.length<4)return d=a.map(function(_){return gn(o,_,l)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(h+"").split(" "),m={},a.forEach(function(_,f){return m[_]=d[f]=d[f]||d[(f-1)/2|0]}),o.init(c,m,u)}});var Ef={name:"css",register:ac,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var a=this._props,o=e.style,c=i.vars.startAt,l,h,u,d,m,_,f,p,g,M,v,y,b,L,A,x;Uc||ac(),this.styles=this.styles||vf(e),x=this.styles.props,this.tween=i;for(f in t)if(f!=="autoRound"&&(h=t[f],!(xi[f]&&lf(f,t,i,n,e,r)))){if(m=typeof h,_=yo[f],m==="function"&&(h=h.call(i,n,e,r),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=Zs(h)),_)_(this,e,f,h,i)&&(A=1);else if(f.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(f)+"").trim(),h+="",Bn.lastIndex=0,Bn.test(l)||(p=Vt(l),g=Vt(h)),g?p!==g&&(l=Hn(e,f,l,g)+g):p&&(h+=p),this.add(o,"setProperty",l,h,n,r,0,0,f),a.push(f),x.push(f,0,o[f]);else if(m!=="undefined"){if(c&&f in c?(l=typeof c[f]=="function"?c[f].call(i,n,e,r):c[f],Ft(l)&&~l.indexOf("random(")&&(l=Zs(l)),Vt(l+"")||(l+=wi.units[f]||Vt(gn(e,f))||""),(l+"").charAt(1)==="="&&(l=gn(e,f))):l=gn(e,f),d=parseFloat(l),M=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),f in nn&&(f==="autoAlpha"&&(d===1&&gn(e,"visibility")==="hidden"&&u&&(d=0),x.push("visibility",0,o.visibility),On(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),f!=="scale"&&f!=="transform"&&(f=nn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),v=f in Sn,v){if(this.styles.save(f),y||(b=e._gsap,b.renderTransform&&!t.parseTransform||ta(e,t.parseTransform),L=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new ci(this._pt,o,dt,0,1,b.renderTransform,b,0,-1),y.dep=1),f==="scale")this._pt=new ci(this._pt,b,"scaleY",b.scaleY,(M?es(b.scaleY,M+u):u)-b.scaleY||0,rc),this._pt.u=0,a.push("scaleY",f),f+="X";else if(f==="transformOrigin"){x.push(ji,0,o[ji]),h=xy(h),b.svg?oc(e,h,0,L,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==b.zOrigin&&On(this,b,"zOrigin",b.zOrigin,g),On(this,o,f,bo(l),bo(h)));continue}else if(f==="svgOrigin"){oc(e,h,1,L,0,this);continue}else if(f in Sf){My(this,b,f,d,M?es(d,M+h):h);continue}else if(f==="smoothOrigin"){On(this,b,"smooth",b.smooth,h);continue}else if(f==="force3D"){b[f]=h;continue}else if(f==="transform"){Sy(this,h,e);continue}}else f in o||(f=ms(f)||f);if(v||(u||u===0)&&(d||d===0)&&!ry.test(h)&&f in o)p=(l+"").substr((d+"").length),u||(u=0),g=Vt(h)||(f in wi.units?wi.units[f]:p),p!==g&&(d=Hn(e,f,l,g)),this._pt=new ci(this._pt,v?b:o,f,d,(M?es(d,M+u):u)-d,!v&&(g==="px"||f==="zIndex")&&t.autoRound!==!1?oy:rc),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=ay);else if(f in o)_y.call(this,e,f,l,M?M+h:h);else if(f in e)this.add(e,f,l||e[f],M?M+h:h,n,r);else if(f!=="parseTransform"){Lc(f,h);continue}v||(f in o?x.push(f,0,o[f]):x.push(f,1,l||e[f])),a.push(f)}}A&&pf(this)},render:function(e,t){if(t.tween._time||!kc())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:gn,aliases:nn,getSetter:function(e,t,i){var n=nn[t];return n&&n.indexOf(",")<0&&(t=n),t in Sn&&t!==ji&&(e._gsap.x||gn(e,"x"))?i&&Lu===i?t==="scale"?uy:hy:(Lu=i||{})&&(t==="scale"?dy:fy):e.style&&!Ec(e.style[t])?ly:~t.indexOf("-")?cy:zc(e,t)},core:{_removeProperty:Qs,_getMatrix:Gc}};hi.utils.checkPrefix=ms;hi.core.getStyleSaver=vf;(function(s,e,t,i){var n=li(s+","+e+","+t,function(r){Sn[r]=1});li(e,function(r){wi.units[r]="deg",Sf[r]=1}),nn[n[13]]=s+","+e,li(i,function(r){var a=r.split(":");nn[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");li("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){wi.units[s]="px"});hi.registerPlugin(Ef);var Wr=hi.registerPlugin(Ef)||hi;Wr.core.Tween;/*!
 * Observer 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Nt,lc,bi,zn,Nn,ns,Af,ir,Us,Cf,xn,Vi,Lf,Pf=()=>Nt||typeof window<"u"&&(Nt=window.gsap)&&Nt.registerPlugin&&Nt,Df=1,Zr=[],Ye=[],an=[],ks=Date.now,cc=(s,e)=>e,wy=()=>{let s=Us.core,e=s.bridge||{},t=s._scrollers,i=s._proxies;t.push(...Ye),i.push(...an),Ye=t,an=i,cc=(n,r)=>e[n](r)},Gn=(s,e)=>~an.indexOf(s)&&an[an.indexOf(s)+1][e],Bs=s=>!!~Cf.indexOf(s),ii=(s,e,t,i,n)=>s.addEventListener(e,t,{passive:!i,capture:!!n}),Yt=(s,e,t,i)=>s.removeEventListener(e,t,!!i),ka="scrollLeft",Ba="scrollTop",hc=()=>xn&&xn.isPressed||Ye.cache++,Mo=(s,e)=>{let t=i=>{if(i||i===0){Df&&(bi.history.scrollRestoration="manual");let n=xn&&xn.isPressed;i=t.v=Math.round(i)||(xn&&xn.iOS?1:0),s(i),t.cacheID=Ye.cache,n&&cc("ss",i)}else(e||Ye.cache!==t.cacheID||cc("ref"))&&(t.cacheID=Ye.cache,t.v=s());return t.v+t.offset};return t.offset=0,s&&t},ei={s:ka,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Mo(function(s){return arguments.length?bi.scrollTo(s,wt.sc()):bi.pageXOffset||zn[ka]||Nn[ka]||ns[ka]||0})},wt={s:Ba,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ei,sc:Mo(function(s){return arguments.length?bi.scrollTo(ei.sc(),s):bi.pageYOffset||zn[Ba]||Nn[Ba]||ns[Ba]||0})},ni=(s,e)=>(e&&e._ctx&&e._ctx.selector||Nt.utils.toArray)(s)[0]||(typeof s=="string"&&Nt.config().nullTargetWarn!==!1?console.warn("Element not found:",s):null),Wn=(s,{s:e,sc:t})=>{Bs(s)&&(s=zn.scrollingElement||Nn);let i=Ye.indexOf(s),n=t===wt.sc?1:2;!~i&&(i=Ye.push(s)-1),Ye[i+n]||s.addEventListener("scroll",hc);let r=Ye[i+n],a=r||(Ye[i+n]=Mo(Gn(s,e),!0)||(Bs(s)?t:Mo(function(o){return arguments.length?s[e]=o:s[e]})));return a.target=s,r||(a.smooth=Nt.getProperty(s,"scrollBehavior")==="smooth"),a},uc=(s,e,t)=>{let i=s,n=s,r=ks(),a=r,o=e||50,c=Math.max(500,o*3),l=(d,m)=>{let _=ks();m||_-r>o?(n=i,i=d,a=r,r=_):t?i+=d:i=n+(d-n)/(_-a)*(r-a)};return{update:l,reset:()=>{n=i=t?0:i,a=r=0},getVelocity:d=>{let m=a,_=n,f=ks();return(d||d===0)&&d!==i&&l(d),r===a||f-a>c?0:(i+(t?_:-_))/((t?f:r)-m)*1e3}}},Ts=(s,e)=>(e&&!s._gsapAllow&&s.preventDefault(),s.changedTouches?s.changedTouches[0]:s),Nu=s=>{let e=Math.max(...s),t=Math.min(...s);return Math.abs(e)>=Math.abs(t)?e:t},Rf=()=>{Us=Nt.core.globals().ScrollTrigger,Us&&Us.core&&wy()},If=s=>(Nt=s||Pf(),Nt&&typeof document<"u"&&document.body&&(bi=window,zn=document,Nn=zn.documentElement,ns=zn.body,Cf=[bi,zn,Nn,ns],Nt.utils.clamp,Lf=Nt.core.context||function(){},ir="onpointerenter"in ns?"pointer":"mouse",Af=bt.isTouch=bi.matchMedia&&bi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in bi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Vi=bt.eventTypes=("ontouchstart"in Nn?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Nn?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(()=>Df=0,500),Rf(),lc=1),lc);ei.op=wt;Ye.cache=0;class bt{constructor(e){this.init(e)}init(e){lc||If(Nt)||console.warn("Please gsap.registerPlugin(Observer)"),Us||Rf();let{tolerance:t,dragMinimum:i,type:n,target:r,lineHeight:a,debounce:o,preventDefault:c,onStop:l,onStopDelay:h,ignore:u,wheelSpeed:d,event:m,onDragStart:_,onDragEnd:f,onDrag:p,onPress:g,onRelease:M,onRight:v,onLeft:y,onUp:b,onDown:L,onChangeX:A,onChangeY:x,onChange:S,onToggleX:P,onToggleY:k,onHover:Q,onHoverEnd:z,onMove:R,ignoreCheck:O,isNormalizer:Y,onGestureStart:T,onGestureEnd:U,onWheel:J,onEnable:te,onDisable:B,onClick:V,scrollSpeed:ee,capture:j,allowClicks:ie,lockAxis:q,onLockAxis:Ue}=e;this.target=r=ni(r)||Nn,this.vars=e,u&&(u=Nt.utils.toArray(u)),t=t||1e-9,i=i||0,d=d||1,ee=ee||1,n=n||"wheel,touch,pointer",o=o!==!1,a||(a=parseFloat(bi.getComputedStyle(ns).lineHeight)||22);let de,ye,se,Pe,Ae,Me,je,G=this,it=0,ft=0,Ne=Wn(r,ei),qe=Wn(r,wt),Re=Ne(),Ve=qe(),C=~n.indexOf("touch")&&!~n.indexOf("pointer")&&Vi[0]==="pointerdown",w=Bs(r),H=r.ownerDocument||zn,ne=[0,0,0],oe=[0,0,0],he=0,Ie=()=>he=ks(),le=(Z,ce)=>(G.event=Z)&&u&&~u.indexOf(Z.target)||ce&&C&&Z.pointerType!=="touch"||O&&O(Z,ce),K=()=>{G._vx.reset(),G._vy.reset(),ye.pause(),l&&l(G)},Se=()=>{let Z=G.deltaX=Nu(ne),ce=G.deltaY=Nu(oe),_e=Math.abs(Z)>=t,Ee=Math.abs(ce)>=t;S&&(_e||Ee)&&S(G,Z,ce,ne,oe),_e&&(v&&G.deltaX>0&&v(G),y&&G.deltaX<0&&y(G),A&&A(G),P&&G.deltaX<0!=it<0&&P(G),it=G.deltaX,ne[0]=ne[1]=ne[2]=0),Ee&&(L&&G.deltaY>0&&L(G),b&&G.deltaY<0&&b(G),x&&x(G),k&&G.deltaY<0!=ft<0&&k(G),ft=G.deltaY,oe[0]=oe[1]=oe[2]=0),(Pe||se)&&(R&&R(G),se&&(p(G),se=!1),Pe=!1),Me&&!(Me=!1)&&Ue&&Ue(G),Ae&&(J(G),Ae=!1),de=0},Ce=(Z,ce,_e)=>{ne[_e]+=Z,oe[_e]+=ce,G._vx.update(Z),G._vy.update(ce),o?de||(de=requestAnimationFrame(Se)):Se()},ve=(Z,ce)=>{q&&!je&&(G.axis=je=Math.abs(Z)>Math.abs(ce)?"x":"y",Me=!0),je!=="y"&&(ne[2]+=Z,G._vx.update(Z,!0)),je!=="x"&&(oe[2]+=ce,G._vy.update(ce,!0)),o?de||(de=requestAnimationFrame(Se)):Se()},we=Z=>{if(le(Z,1))return;Z=Ts(Z,c);let ce=Z.clientX,_e=Z.clientY,Ee=ce-G.x,De=_e-G.y,Xe=G.isDragging;G.x=ce,G.y=_e,(Xe||Math.abs(G.startX-ce)>=i||Math.abs(G.startY-_e)>=i)&&(p&&(se=!0),Xe||(G.isDragging=!0),ve(Ee,De),Xe||_&&_(G))},be=G.onPress=Z=>{le(Z,1)||Z&&Z.button||(G.axis=je=null,ye.pause(),G.isPressed=!0,Z=Ts(Z),it=ft=0,G.startX=G.x=Z.clientX,G.startY=G.y=Z.clientY,G._vx.reset(),G._vy.reset(),ii(Y?r:H,Vi[1],we,c,!0),G.deltaX=G.deltaY=0,g&&g(G))},me=G.onRelease=Z=>{if(le(Z,1))return;Yt(Y?r:H,Vi[1],we,!0);let ce=!isNaN(G.y-G.startY),_e=G.isDragging&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ee=Ts(Z);!_e&&ce&&(G._vx.reset(),G._vy.reset(),c&&ie&&Nt.delayedCall(.08,()=>{if(ks()-he>300&&!Z.defaultPrevented){if(Z.target.click)Z.target.click();else if(H.createEvent){let De=H.createEvent("MouseEvents");De.initMouseEvent("click",!0,!0,bi,1,Ee.screenX,Ee.screenY,Ee.clientX,Ee.clientY,!1,!1,!1,!1,0,null),Z.target.dispatchEvent(De)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,l&&!Y&&ye.restart(!0),f&&_e&&f(G),M&&M(G,_e)},Je=Z=>Z.touches&&Z.touches.length>1&&(G.isGesturing=!0)&&T(Z,G.isDragging),Qe=()=>(G.isGesturing=!1)||U(G),D=Z=>{if(le(Z))return;let ce=Ne(),_e=qe();Ce((ce-Re)*ee,(_e-Ve)*ee,1),Re=ce,Ve=_e,l&&ye.restart(!0)},X=Z=>{if(le(Z))return;Z=Ts(Z,c),J&&(Ae=!0);let ce=(Z.deltaMode===1?a:Z.deltaMode===2?bi.innerHeight:1)*d;Ce(Z.deltaX*ce,Z.deltaY*ce,0),l&&!Y&&ye.restart(!0)},re=Z=>{if(le(Z))return;let ce=Z.clientX,_e=Z.clientY,Ee=ce-G.x,De=_e-G.y;G.x=ce,G.y=_e,Pe=!0,(Ee||De)&&ve(Ee,De)},fe=Z=>{G.event=Z,Q(G)},ge=Z=>{G.event=Z,z(G)},ae=Z=>le(Z)||Ts(Z,c)&&V(G);ye=G._dc=Nt.delayedCall(h||.25,K).pause(),G.deltaX=G.deltaY=0,G._vx=uc(0,50,!0),G._vy=uc(0,50,!0),G.scrollX=Ne,G.scrollY=qe,G.isDragging=G.isGesturing=G.isPressed=!1,Lf(this),G.enable=Z=>(G.isEnabled||(ii(w?H:r,"scroll",hc),n.indexOf("scroll")>=0&&ii(w?H:r,"scroll",D,c,j),n.indexOf("wheel")>=0&&ii(r,"wheel",X,c,j),(n.indexOf("touch")>=0&&Af||n.indexOf("pointer")>=0)&&(ii(r,Vi[0],be,c,j),ii(H,Vi[2],me),ii(H,Vi[3],me),ie&&ii(r,"click",Ie,!1,!0),V&&ii(r,"click",ae),T&&ii(H,"gesturestart",Je),U&&ii(H,"gestureend",Qe),Q&&ii(r,ir+"enter",fe),z&&ii(r,ir+"leave",ge),R&&ii(r,ir+"move",re)),G.isEnabled=!0,Z&&Z.type&&be(Z),te&&te(G)),G),G.disable=()=>{G.isEnabled&&(Zr.filter(Z=>Z!==G&&Bs(Z.target)).length||Yt(w?H:r,"scroll",hc),G.isPressed&&(G._vx.reset(),G._vy.reset(),Yt(Y?r:H,Vi[1],we,!0)),Yt(w?H:r,"scroll",D,j),Yt(r,"wheel",X,j),Yt(r,Vi[0],be,j),Yt(H,Vi[2],me),Yt(H,Vi[3],me),Yt(r,"click",Ie,!0),Yt(r,"click",ae),Yt(H,"gesturestart",Je),Yt(H,"gestureend",Qe),Yt(r,ir+"enter",fe),Yt(r,ir+"leave",ge),Yt(r,ir+"move",re),G.isEnabled=G.isPressed=G.isDragging=!1,B&&B(G))},G.kill=G.revert=()=>{G.disable();let Z=Zr.indexOf(G);Z>=0&&Zr.splice(Z,1),xn===G&&(xn=0)},Zr.push(G),Y&&Bs(r)&&(xn=G),G.enable(m)}get velocityX(){return this._vx.getVelocity()}get velocityY(){return this._vy.getVelocity()}}bt.version="3.12.1";bt.create=s=>new bt(s);bt.register=If;bt.getAll=()=>Zr.slice();bt.getById=s=>Zr.filter(e=>e.vars.id===s)[0];Pf()&&Nt.registerPlugin(bt);/*!
 * ScrollTrigger 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let xe,Xr,Ze,lt,Wi,ht,Ff,So,wo,Kr,no,Ga,Gt,zo,dc,Zt,Uu,ku,$r,Of,Pl,zf,mi,Nf,Uf,kf,Dn,fc,Vc,Dl,Va=1,Jt=Date.now,Rl=Jt(),Ni=0,Rs=0,Bu=(s,e,t)=>{let i=_i(s)&&(s.substr(0,6)==="clamp("||s.indexOf("max")>-1);return t["_"+e+"Clamp"]=i,i?s.substr(6,s.length-7):s},Gu=(s,e)=>e&&(!_i(s)||s.substr(0,6)!=="clamp(")?"clamp("+s+")":s,Bf=()=>Rs&&requestAnimationFrame(Bf),Vu=()=>zo=1,Hu=()=>zo=0,Ji=s=>s,Is=s=>Math.round(s*1e5)/1e5||0,Gf=()=>typeof window<"u",Vf=()=>xe||Gf()&&(xe=window.gsap)&&xe.registerPlugin&&xe,br=s=>!!~Ff.indexOf(s),Hf=s=>Gn(s,"getBoundingClientRect")||(br(s)?()=>(co.width=Ze.innerWidth,co.height=Ze.innerHeight,co):()=>_n(s)),Ty=(s,e,{d:t,d2:i,a:n})=>(n=Gn(s,"getBoundingClientRect"))?()=>n()[t]:()=>(e?Ze["inner"+i]:s["client"+i])||0,Ey=(s,e)=>!e||~an.indexOf(s)?Hf(s):()=>co,vn=(s,{s:e,d2:t,d:i,a:n})=>Math.max(0,(e="scroll"+t)&&(n=Gn(s,e))?n()-Hf(s)()[i]:br(s)?(Wi[e]||ht[e])-(Ze["inner"+t]||Wi["client"+t]||ht["client"+t]):s[e]-s["offset"+t]),Ha=(s,e)=>{for(let t=0;t<$r.length;t+=3)(!e||~e.indexOf($r[t+1]))&&s($r[t],$r[t+1],$r[t+2])},_i=s=>typeof s=="string",ti=s=>typeof s=="function",ro=s=>typeof s=="number",nr=s=>typeof s=="object",Es=(s,e,t)=>s&&s.progress(e?0:1)&&t&&s.pause(),Il=(s,e)=>{if(s.enabled){let t=e(s);t&&t.totalTime&&(s.callbackAnimation=t)}},Br=Math.abs,Wf="left",Xf="top",Hc="right",Wc="bottom",mr="width",gr="height",Gs="Right",Vs="Left",Hs="Top",Ws="Bottom",xt="padding",Di="margin",gs="Width",Xc="Height",Ot="px",Ri=s=>Ze.getComputedStyle(s),Ay=s=>{let e=Ri(s).position;s.style.position=e==="absolute"||e==="fixed"?e:"relative"},Wu=(s,e)=>{for(let t in e)t in s||(s[t]=e[t]);return s},_n=(s,e)=>{let t=e&&Ri(s)[dc]!=="matrix(1, 0, 0, 1, 0, 0)"&&xe.to(s,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=s.getBoundingClientRect();return t&&t.progress(0).kill(),i},pc=(s,{d2:e})=>s["offset"+e]||s["client"+e]||0,$f=s=>{let e=[],t=s.labels,i=s.duration(),n;for(n in t)e.push(t[n]/i);return e},Cy=s=>e=>xe.utils.snap($f(s),e),$c=s=>{let e=xe.utils.snap(s),t=Array.isArray(s)&&s.slice(0).sort((i,n)=>i-n);return t?(i,n,r=.001)=>{let a;if(!n)return e(i);if(n>0){for(i-=r,a=0;a<t.length;a++)if(t[a]>=i)return t[a];return t[a-1]}else for(a=t.length,i+=r;a--;)if(t[a]<=i)return t[a];return t[0]}:(i,n,r=.001)=>{let a=e(i);return!n||Math.abs(a-i)<r||a-i<0==n<0?a:e(n<0?i-s:i+s)}},Ly=s=>(e,t)=>$c($f(s))(e,t.direction),Wa=(s,e,t,i)=>t.split(",").forEach(n=>s(e,n,i)),Rt=(s,e,t,i,n)=>s.addEventListener(e,t,{passive:!i,capture:!!n}),Dt=(s,e,t,i)=>s.removeEventListener(e,t,!!i),Xa=(s,e,t)=>{t=t&&t.wheelHandler,t&&(s(e,"wheel",t),s(e,"touchmove",t))},Xu={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},$a={toggleActions:"play",anticipatePin:0},To={top:0,left:0,center:.5,bottom:1,right:1},so=(s,e)=>{if(_i(s)){let t=s.indexOf("="),i=~t?+(s.charAt(t-1)+1)*parseFloat(s.substr(t+1)):0;~t&&(s.indexOf("%")>t&&(i*=e/100),s=s.substr(0,t-1)),s=i+(s in To?To[s]*e:~s.indexOf("%")?parseFloat(s)*e/100:parseFloat(s)||0)}return s},qa=(s,e,t,i,{startColor:n,endColor:r,fontSize:a,indent:o,fontWeight:c},l,h,u)=>{let d=lt.createElement("div"),m=br(t)||Gn(t,"pinType")==="fixed",_=s.indexOf("scroller")!==-1,f=m?ht:t,p=s.indexOf("start")!==-1,g=p?n:r,M="border-color:"+g+";font-size:"+a+";color:"+g+";font-weight:"+c+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((_||u)&&m?"fixed;":"absolute;"),(_||u||!m)&&(M+=(i===wt?Hc:Wc)+":"+(l+parseFloat(o))+"px;"),h&&(M+="box-sizing:border-box;text-align:left;width:"+h.offsetWidth+"px;"),d._isStart=p,d.setAttribute("class","gsap-marker-"+s+(e?" marker-"+e:"")),d.style.cssText=M,d.innerText=e||e===0?s+"-"+e:s,f.children[0]?f.insertBefore(d,f.children[0]):f.appendChild(d),d._offset=d["offset"+i.op.d2],ao(d,0,i,p),d},ao=(s,e,t,i)=>{let n={display:"block"},r=t[i?"os2":"p2"],a=t[i?"p2":"os2"];s._isFlipped=i,n[t.a+"Percent"]=i?-100:0,n[t.a]=i?"1px":0,n["border"+r+gs]=1,n["border"+a+gs]=0,n[t.p]=e+"px",xe.set(s,n)},$e=[],mc={},ia,$u=()=>Jt()-Ni>34&&(ia||(ia=requestAnimationFrame(bn))),Gr=()=>{(!mi||!mi.isPressed||mi.startX>ht.clientWidth)&&(Ye.cache++,mi?ia||(ia=requestAnimationFrame(bn)):bn(),Ni||Sr("scrollStart"),Ni=Jt())},Fl=()=>{kf=Ze.innerWidth,Uf=Ze.innerHeight},Fs=()=>{Ye.cache++,!Gt&&!zf&&!lt.fullscreenElement&&!lt.webkitFullscreenElement&&(!Nf||kf!==Ze.innerWidth||Math.abs(Ze.innerHeight-Uf)>Ze.innerHeight*.25)&&So.restart(!0)},Mr={},Py=[],qc=()=>Dt(Oe,"scrollEnd",qc)||lr(!0),Sr=s=>Mr[s]&&Mr[s].map(e=>e())||Py,gi=[],qf=s=>{for(let e=0;e<gi.length;e+=5)(!s||gi[e+4]&&gi[e+4].query===s)&&(gi[e].style.cssText=gi[e+1],gi[e].getBBox&&gi[e].setAttribute("transform",gi[e+2]||""),gi[e+3].uncache=1)},Yc=(s,e)=>{let t;for(Zt=0;Zt<$e.length;Zt++)t=$e[Zt],t&&(!e||t._ctx===e)&&(s?t.kill(1):t.revert(!0,!0));e&&qf(e),e||Sr("revert")},Yf=(s,e)=>{Ye.cache++,(e||!Kt)&&Ye.forEach(t=>ti(t)&&t.cacheID++&&(t.rec=0)),_i(s)&&(Ze.history.scrollRestoration=Vc=s)},Kt,_r=0,qu,Dy=()=>{if(qu!==_r){let s=qu=_r;requestAnimationFrame(()=>s===_r&&lr(!0))}},lr=(s,e)=>{if(Ni&&!s){Rt(Oe,"scrollEnd",qc);return}Kt=Oe.isRefreshing=!0,Ye.forEach(i=>ti(i)&&++i.cacheID&&(i.rec=i()));let t=Sr("refreshInit");Of&&Oe.sort(),e||Yc(),Ye.forEach(i=>{ti(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$e.slice(0).forEach(i=>i.refresh()),$e.forEach((i,n)=>{if(i._subPinOffset&&i.pin){let r=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-a),i.refresh()}}),$e.forEach(i=>{let n=vn(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>n)&&i.setPositions(i.start,Math.max(i.start+1,n),!0)}),t.forEach(i=>i&&i.render&&i.render(-1)),Ye.forEach(i=>{ti(i)&&(i.smooth&&requestAnimationFrame(()=>i.target.style.scrollBehavior="smooth"),i.rec&&i(i.rec))}),Yf(Vc,1),So.pause(),_r++,Kt=2,bn(2),$e.forEach(i=>ti(i.vars.onRefresh)&&i.vars.onRefresh(i)),Kt=Oe.isRefreshing=!1,Sr("refresh")},gc=0,oo=1,Xs,bn=s=>{if(!Kt||s===2){Oe.isUpdating=!0,Xs&&Xs.update(0);let e=$e.length,t=Jt(),i=t-Rl>=50,n=e&&$e[0].scroll();if(oo=gc>n?-1:1,Kt||(gc=n),i&&(Ni&&!zo&&t-Ni>200&&(Ni=0,Sr("scrollEnd")),no=Rl,Rl=t),oo<0){for(Zt=e;Zt-- >0;)$e[Zt]&&$e[Zt].update(0,i);oo=1}else for(Zt=0;Zt<e;Zt++)$e[Zt]&&$e[Zt].update(0,i);Oe.isUpdating=!1}ia=0},_c=[Wf,Xf,Wc,Hc,Di+Ws,Di+Gs,Di+Hs,Di+Vs,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],lo=_c.concat([mr,gr,"boxSizing","max"+gs,"max"+Xc,"position",Di,xt,xt+Hs,xt+Gs,xt+Ws,xt+Vs]),Ry=(s,e,t)=>{rs(t);let i=s._gsap;if(i.spacerIsNative)rs(i.spacerState);else if(s._gsap.swappedIn){let n=e.parentNode;n&&(n.insertBefore(s,e),n.removeChild(e))}s._gsap.swappedIn=!1},Ol=(s,e,t,i)=>{if(!s._gsap.swappedIn){let n=_c.length,r=e.style,a=s.style,o;for(;n--;)o=_c[n],r[o]=t[o];r.position=t.position==="absolute"?"absolute":"relative",t.display==="inline"&&(r.display="inline-block"),a[Wc]=a[Hc]="auto",r.flexBasis=t.flexBasis||"auto",r.overflow="visible",r.boxSizing="border-box",r[mr]=pc(s,ei)+Ot,r[gr]=pc(s,wt)+Ot,r[xt]=a[Di]=a[Xf]=a[Wf]="0",rs(i),a[mr]=a["max"+gs]=t[mr],a[gr]=a["max"+Xc]=t[gr],a[xt]=t[xt],s.parentNode!==e&&(s.parentNode.insertBefore(e,s),e.appendChild(s)),s._gsap.swappedIn=!0}},Iy=/([A-Z])/g,rs=s=>{if(s){let e=s.t.style,t=s.length,i=0,n,r;for((s.t._gsap||xe.core.getCache(s.t)).uncache=1;i<t;i+=2)r=s[i+1],n=s[i],r?e[n]=r:e[n]&&e.removeProperty(n.replace(Iy,"-$1").toLowerCase())}},Ya=s=>{let e=lo.length,t=s.style,i=[],n=0;for(;n<e;n++)i.push(lo[n],t[lo[n]]);return i.t=s,i},Fy=(s,e,t)=>{let i=[],n=s.length,r=t?8:0,a;for(;r<n;r+=2)a=s[r],i.push(a,a in e?e[a]:s[r+1]);return i.t=s.t,i},co={left:0,top:0},Yu=(s,e,t,i,n,r,a,o,c,l,h,u,d,m)=>{ti(s)&&(s=s(o)),_i(s)&&s.substr(0,3)==="max"&&(s=u+(s.charAt(4)==="="?so("0"+s.substr(3),t):0));let _=d?d.time():0,f,p,g;if(d&&d.seek(0),isNaN(s)||(s=+s),ro(s))d&&(s=xe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,s)),a&&ao(a,t,i,!0);else{ti(e)&&(e=e(o));let M=(s||"0").split(" "),v,y,b,L;g=ni(e,o)||ht,v=_n(g)||{},(!v||!v.left&&!v.top)&&Ri(g).display==="none"&&(L=g.style.display,g.style.display="block",v=_n(g),L?g.style.display=L:g.style.removeProperty("display")),y=so(M[0],v[i.d]),b=so(M[1]||"0",t),s=v[i.p]-c[i.p]-l+y+n-b,a&&ao(a,b,i,t-b<20||a._isStart&&b>20),t-=t-b}if(m&&(o[m]=s||-.001,s<0&&(s=0)),r){let M=s+t,v=r._isStart;f="scroll"+i.d2,ao(r,M,i,v&&M>20||!v&&(h?Math.max(ht[f],Wi[f]):r.parentNode[f])<=M+1),h&&(c=_n(a),h&&(r.style[i.op.p]=c[i.op.p]-i.op.m-r._offset+Ot))}return d&&g&&(f=_n(g),d.seek(u),p=_n(g),d._caScrollDist=f[i.p]-p[i.p],s=s/d._caScrollDist*u),d&&d.seek(_),d?s:Math.round(s)},Oy=/(webkit|moz|length|cssText|inset)/i,ju=(s,e,t,i)=>{if(s.parentNode!==e){let n=s.style,r,a;if(e===ht){s._stOrig=n.cssText,a=Ri(s);for(r in a)!+r&&!Oy.test(r)&&a[r]&&typeof n[r]=="string"&&r!=="0"&&(n[r]=a[r]);n.top=t,n.left=i}else n.cssText=s._stOrig;xe.core.getCache(s).uncache=1,e.appendChild(s)}},jf=(s,e,t)=>{let i=e,n=i;return r=>{let a=Math.round(s());return a!==i&&a!==n&&Math.abs(a-i)>3&&Math.abs(a-n)>3&&(r=a,t&&t()),n=i,i=r,r}},ja=(s,e,t)=>{let i={};i[e.p]="+="+t,xe.set(s,i)},Zu=(s,e)=>{let t=Wn(s,e),i="_scroll"+e.p2,n=(r,a,o,c,l)=>{let h=n.tween,u=a.onComplete,d={};o=o||t();let m=jf(t,o,()=>{h.kill(),n.tween=0});return l=c&&l||0,c=c||r-o,h&&h.kill(),a[i]=r,a.modifiers=d,d[i]=()=>m(o+c*h.ratio+l*h.ratio*h.ratio),a.onUpdate=()=>{Ye.cache++,bn()},a.onComplete=()=>{n.tween=0,u&&u.call(h)},h=n.tween=xe.to(s,a),h};return s[i]=t,t.wheelHandler=()=>n.tween&&n.tween.kill()&&(n.tween=0),Rt(s,"wheel",t.wheelHandler),Oe.isTouch&&Rt(s,"touchmove",t.wheelHandler),n};class Oe{constructor(e,t){Xr||Oe.register(xe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),fc(this),this.init(e,t)}init(e,t){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Rs){this.update=this.refresh=this.kill=Ji;return}e=Wu(_i(e)||ro(e)||e.nodeType?{trigger:e}:e,$a);let{onUpdate:i,toggleClass:n,id:r,onToggle:a,onRefresh:o,scrub:c,trigger:l,pin:h,pinSpacing:u,invalidateOnRefresh:d,anticipatePin:m,onScrubComplete:_,onSnapComplete:f,once:p,snap:g,pinReparent:M,pinSpacer:v,containerAnimation:y,fastScrollEnd:b,preventOverlaps:L}=e,A=e.horizontal||e.containerAnimation&&e.horizontal!==!1?ei:wt,x=!c&&c!==0,S=ni(e.scroller||Ze),P=xe.core.getCache(S),k=br(S),Q=("pinType"in e?e.pinType:Gn(S,"pinType")||k&&"fixed")==="fixed",z=[e.onEnter,e.onLeave,e.onEnterBack,e.onLeaveBack],R=x&&e.toggleActions.split(" "),O="markers"in e?e.markers:$a.markers,Y=k?0:parseFloat(Ri(S)["border"+A.p2+gs])||0,T=this,U=e.onRefreshInit&&(()=>e.onRefreshInit(T)),J=Ty(S,k,A),te=Ey(S,k),B=0,V=0,ee=0,j=Wn(S,A),ie,q,Ue,de,ye,se,Pe,Ae,Me,je,G,it,ft,Ne,qe,Re,Ve,C,w,H,ne,oe,he,Ie,le,K,Se,Ce,ve,we,be,me,Je,Qe,D,X,re,fe,ge;if(T._startClamp=T._endClamp=!1,T._dir=A,m*=45,T.scroller=S,T.scroll=y?y.time.bind(y):j,de=j(),T.vars=e,t=t||e.animation,"refreshPriority"in e&&(Of=1,e.refreshPriority===-9999&&(Xs=T)),P.tweenScroll=P.tweenScroll||{top:Zu(S,wt),left:Zu(S,ei)},T.tweenTo=ie=P.tweenScroll[A.p],T.scrubDuration=ae=>{Je=ro(ae)&&ae,Je?me?me.duration(ae):me=xe.to(t,{ease:"expo",totalProgress:"+=0",duration:Je,paused:!0,onComplete:()=>_&&_(T)}):(me&&me.progress(1).kill(),me=0)},t&&(t.vars.lazy=!1,t._initted&&!T.isReverted||t.vars.immediateRender!==!1&&e.immediateRender!==!1&&t.duration()&&t.render(0,!0,!0),T.animation=t.pause(),t.scrollTrigger=T,T.scrubDuration(c),we=0,r||(r=t.vars.id)),g&&((!nr(g)||g.push)&&(g={snapTo:g}),"scrollBehavior"in ht.style&&xe.set(k?[ht,Wi]:S,{scrollBehavior:"auto"}),Ye.forEach(ae=>ti(ae)&&ae.target===(k?lt.scrollingElement||Wi:S)&&(ae.smooth=!1)),Ue=ti(g.snapTo)?g.snapTo:g.snapTo==="labels"?Cy(t):g.snapTo==="labelsDirectional"?Ly(t):g.directional!==!1?(ae,Z)=>$c(g.snapTo)(ae,Jt()-V<500?0:Z.direction):xe.utils.snap(g.snapTo),Qe=g.duration||{min:.1,max:2},Qe=nr(Qe)?Kr(Qe.min,Qe.max):Kr(Qe,Qe),D=xe.delayedCall(g.delay||Je/2||.1,()=>{let ae=j(),Z=Jt()-V<500,ce=ie.tween;if((Z||Math.abs(T.getVelocity())<10)&&!ce&&!zo&&B!==ae){let _e=(ae-se)/Ne,Ee=t&&!x?t.totalProgress():_e,De=Z?0:(Ee-be)/(Jt()-no)*1e3||0,Xe=xe.utils.clamp(-_e,1-_e,Br(De/2)*De/.185),At=_e+(g.inertia===!1?0:Xe),Mt=Kr(0,1,Ue(At,T)),at=Math.round(se+Mt*Ne),{onStart:tt,onInterrupt:E,onComplete:I}=g;if(ae<=Pe&&ae>=se&&at!==ae){if(ce&&!ce._initted&&ce.data<=Br(at-ae))return;g.inertia===!1&&(Xe=Mt-_e),ie(at,{duration:Qe(Br(Math.max(Br(At-Ee),Br(Mt-Ee))*.185/De/.05||0)),ease:g.ease||"power3",data:Br(at-ae),onInterrupt:()=>D.restart(!0)&&E&&E(T),onComplete:()=>{T.update(),B=j(),we=be=t&&!x?t.totalProgress():T.progress,f&&f(T),I&&I(T)}},ae,Xe*Ne,at-ae-Xe*Ne),tt&&tt(T,ie.tween)}}else T.isActive&&B!==ae&&D.restart(!0)}).pause()),r&&(mc[r]=T),l=T.trigger=ni(l||h!==!0&&h),ge=l&&l._gsap&&l._gsap.stRevert,ge&&(ge=ge(T)),h=h===!0?l:ni(h),_i(n)&&(n={targets:l,className:n}),h&&(u===!1||u===Di||(u=!u&&h.parentNode&&h.parentNode.style&&Ri(h.parentNode).display==="flex"?!1:xt),T.pin=h,q=xe.core.getCache(h),q.spacer?qe=q.pinState:(v&&(v=ni(v),v&&!v.nodeType&&(v=v.current||v.nativeElement),q.spacerIsNative=!!v,v&&(q.spacerState=Ya(v))),q.spacer=C=v||lt.createElement("div"),C.classList.add("pin-spacer"),r&&C.classList.add("pin-spacer-"+r),q.pinState=qe=Ya(h)),e.force3D!==!1&&xe.set(h,{force3D:!0}),T.spacer=C=q.spacer,ve=Ri(h),Ie=ve[u+A.os2],H=xe.getProperty(h),ne=xe.quickSetter(h,A.a,Ot),Ol(h,C,ve),Ve=Ya(h)),O){it=nr(O)?Wu(O,Xu):Xu,je=qa("scroller-start",r,S,A,it,0),G=qa("scroller-end",r,S,A,it,0,je),w=je["offset"+A.op.d2];let ae=ni(Gn(S,"content")||S);Ae=this.markerStart=qa("start",r,ae,A,it,w,0,y),Me=this.markerEnd=qa("end",r,ae,A,it,w,0,y),y&&(fe=xe.quickSetter([Ae,Me],A.a,Ot)),!Q&&!(an.length&&Gn(S,"fixedMarkers")===!0)&&(Ay(k?ht:S),xe.set([je,G],{force3D:!0}),K=xe.quickSetter(je,A.a,Ot),Ce=xe.quickSetter(G,A.a,Ot))}if(y){let ae=y.vars.onUpdate,Z=y.vars.onUpdateParams;y.eventCallback("onUpdate",()=>{T.update(0,0,1),ae&&ae.apply(y,Z||[])})}if(T.previous=()=>$e[$e.indexOf(T)-1],T.next=()=>$e[$e.indexOf(T)+1],T.revert=(ae,Z)=>{if(!Z)return T.kill(!0);let ce=ae!==!1||!T.enabled,_e=Gt;ce!==T.isReverted&&(ce&&(X=Math.max(j(),T.scroll.rec||0),ee=T.progress,re=t&&t.progress()),Ae&&[Ae,Me,je,G].forEach(Ee=>Ee.style.display=ce?"none":"block"),ce&&(Gt=T,T.update(ce)),h&&(!M||!T.isActive)&&(ce?Ry(h,C,qe):Ol(h,C,Ri(h),le)),ce||T.update(ce),Gt=_e,T.isReverted=ce)},T.refresh=(ae,Z,ce,_e)=>{if((Gt||!T.enabled)&&!Z)return;if(h&&ae&&Ni){Rt(Oe,"scrollEnd",qc);return}!Kt&&U&&U(T),Gt=T,ie.tween&&(ie.tween.kill(),ie.tween=0),me&&me.pause(),d&&t&&t.revert({kill:!1}).invalidate(),T.isReverted||T.revert(!0,!0),T._subPinOffset=!1;let Ee=J(),De=te(),Xe=y?y.duration():vn(S,A),At=Ne<=.01,Mt=0,at=_e||0,tt=nr(ce)?ce.end:e.end,E=e.endTrigger||l,I=nr(ce)?ce.start:e.start||(e.start===0||!l?0:h?"0 0":"0 100%"),$=T.pinnedContainer=e.pinnedContainer&&ni(e.pinnedContainer,T),F=l&&Math.max(0,$e.indexOf(T))||0,W=F,pe,Te,ke,Be,Fe,Le,ze,ot,kt,Xt,Ct,st,He;for(O&&nr(ce)&&(st=xe.getProperty(je,A.p),He=xe.getProperty(G,A.p));W--;)Le=$e[W],Le.end||Le.refresh(0,1)||(Gt=T),ze=Le.pin,ze&&(ze===l||ze===h||ze===$)&&!Le.isReverted&&(Xt||(Xt=[]),Xt.unshift(Le),Le.revert(!0,!0)),Le!==$e[W]&&(F--,W--);for(ti(I)&&(I=I(T)),I=Bu(I,"start",T),se=Yu(I,l,Ee,A,j(),Ae,je,T,De,Y,Q,Xe,y,T._startClamp&&"_startClamp")||(h?-.001:0),ti(tt)&&(tt=tt(T)),_i(tt)&&!tt.indexOf("+=")&&(~tt.indexOf(" ")?tt=(_i(I)?I.split(" ")[0]:"")+tt:(Mt=so(tt.substr(2),Ee),tt=_i(I)?I:(y?xe.utils.mapRange(0,y.duration(),y.scrollTrigger.start,y.scrollTrigger.end,se):se)+Mt,E=l)),tt=Bu(tt,"end",T),Pe=Math.max(se,Yu(tt||(E?"100% 0":Xe),E,Ee,A,j()+Mt,Me,G,T,De,Y,Q,Xe,y,T._endClamp&&"_endClamp"))||-.001,Mt=0,W=F;W--;)Le=$e[W],ze=Le.pin,ze&&Le.start-Le._pinPush<=se&&!y&&Le.end>0&&(pe=Le.end-(T._startClamp?Math.max(0,Le.start):Le.start),(ze===l&&Le.start-Le._pinPush<se||ze===$)&&isNaN(I)&&(Mt+=pe*(1-Le.progress)),ze===h&&(at+=pe));if(se+=Mt,Pe+=Mt,T._startClamp&&(T._startClamp+=Mt),T._endClamp&&!Kt&&(T._endClamp=Pe||-.001,Pe=Math.min(Pe,vn(S,A))),Ne=Pe-se||(se-=.01)&&.001,At&&(ee=xe.utils.clamp(0,1,xe.utils.normalize(se,Pe,X))),T._pinPush=at,Ae&&Mt&&(pe={},pe[A.a]="+="+Mt,$&&(pe[A.p]="-="+j()),xe.set([Ae,Me],pe)),h)pe=Ri(h),Be=A===wt,ke=j(),oe=parseFloat(H(A.a))+at,!Xe&&Pe>1&&(Ct=(k?lt.scrollingElement||Wi:S).style,Ct={style:Ct,value:Ct["overflow"+A.a.toUpperCase()]},k&&Ri(ht)["overflow"+A.a.toUpperCase()]!=="scroll"&&(Ct.style["overflow"+A.a.toUpperCase()]="scroll")),Ol(h,C,pe),Ve=Ya(h),Te=_n(h,!0),ot=Q&&Wn(S,Be?ei:wt)(),u&&(le=[u+A.os2,Ne+at+Ot],le.t=C,W=u===xt?pc(h,A)+Ne+at:0,W&&le.push(A.d,W+Ot),rs(le),$&&$e.forEach(cn=>{cn.pin===$&&cn.vars.pinSpacing!==!1&&(cn._subPinOffset=!0)}),Q&&j(X)),Q&&(Fe={top:Te.top+(Be?ke-se:ot)+Ot,left:Te.left+(Be?ot:ke-se)+Ot,boxSizing:"border-box",position:"fixed"},Fe[mr]=Fe["max"+gs]=Math.ceil(Te.width)+Ot,Fe[gr]=Fe["max"+Xc]=Math.ceil(Te.height)+Ot,Fe[Di]=Fe[Di+Hs]=Fe[Di+Gs]=Fe[Di+Ws]=Fe[Di+Vs]="0",Fe[xt]=pe[xt],Fe[xt+Hs]=pe[xt+Hs],Fe[xt+Gs]=pe[xt+Gs],Fe[xt+Ws]=pe[xt+Ws],Fe[xt+Vs]=pe[xt+Vs],Re=Fy(qe,Fe,M),Kt&&j(0)),t?(kt=t._initted,Pl(1),t.render(t.duration(),!0,!0),he=H(A.a)-oe+Ne+at,Se=Math.abs(Ne-he)>1,Q&&Se&&Re.splice(Re.length-2,2),t.render(0,!0,!0),kt||t.invalidate(!0),t.parent||t.totalTime(t.totalTime()),Pl(0)):he=Ne,Ct&&(Ct.value?Ct.style["overflow"+A.a.toUpperCase()]=Ct.value:Ct.style.removeProperty("overflow-"+A.a));else if(l&&j()&&!y)for(Te=l.parentNode;Te&&Te!==ht;)Te._pinOffset&&(se-=Te._pinOffset,Pe-=Te._pinOffset),Te=Te.parentNode;Xt&&Xt.forEach(cn=>cn.revert(!1,!0)),T.start=se,T.end=Pe,de=ye=Kt?X:j(),!y&&!Kt&&(de<X&&j(X),T.scroll.rec=0),T.revert(!1,!0),V=Jt(),D&&(B=-1,T.isActive&&j(se+Ne*ee),D.restart(!0)),Gt=0,t&&x&&(t._initted||re)&&t.progress()!==re&&t.progress(re||0,!0).render(t.time(),!0,!0),(At||ee!==T.progress||y)&&(t&&!x&&t.totalProgress(y&&se<-.001&&!ee?xe.utils.normalize(se,Pe,0):ee,!0),T.progress=At||(de-se)/Ne===ee?0:ee),h&&u&&(C._pinOffset=Math.round(T.progress*he)),me&&me.invalidate(),isNaN(st)||(st-=xe.getProperty(je,A.p),He-=xe.getProperty(G,A.p),ja(je,A,st),ja(Ae,A,st-(_e||0)),ja(G,A,He),ja(Me,A,He-(_e||0))),At&&!Kt&&T.update(),o&&!Kt&&!ft&&(ft=!0,o(T),ft=!1)},T.getVelocity=()=>(j()-ye)/(Jt()-no)*1e3||0,T.endAnimation=()=>{Es(T.callbackAnimation),t&&(me?me.progress(1):t.paused()?x||Es(t,T.direction<0,1):Es(t,t.reversed()))},T.labelToScroll=ae=>t&&t.labels&&(se||T.refresh()||se)+t.labels[ae]/t.duration()*Ne||0,T.getTrailing=ae=>{let Z=$e.indexOf(T),ce=T.direction>0?$e.slice(0,Z).reverse():$e.slice(Z+1);return(_i(ae)?ce.filter(_e=>_e.vars.preventOverlaps===ae):ce).filter(_e=>T.direction>0?_e.end<=se:_e.start>=Pe)},T.update=(ae,Z,ce)=>{if(y&&!ce&&!ae)return;let _e=Kt===!0?X:T.scroll(),Ee=ae?0:(_e-se)/Ne,De=Ee<0?0:Ee>1?1:Ee||0,Xe=T.progress,At,Mt,at,tt,E,I,$,F;if(Z&&(ye=de,de=y?j():_e,g&&(be=we,we=t&&!x?t.totalProgress():De)),m&&!De&&h&&!Gt&&!Va&&Ni&&se<_e+(_e-ye)/(Jt()-no)*m&&(De=1e-4),De!==Xe&&T.enabled){if(At=T.isActive=!!De&&De<1,Mt=!!Xe&&Xe<1,I=At!==Mt,E=I||!!De!=!!Xe,T.direction=De>Xe?1:-1,T.progress=De,E&&!Gt&&(at=De&&!Xe?0:De===1?1:Xe===1?2:3,x&&(tt=!I&&R[at+1]!=="none"&&R[at+1]||R[at],F=t&&(tt==="complete"||tt==="reset"||tt in t))),L&&(I||F)&&(F||c||!t)&&(ti(L)?L(T):T.getTrailing(L).forEach(W=>W.endAnimation())),x||(me&&!Gt&&!Va?(me._dp._time-me._start!==me._time&&me.render(me._dp._time-me._start),me.resetTo?me.resetTo("totalProgress",De,t._tTime/t._tDur):(me.vars.totalProgress=De,me.invalidate().restart())):t&&t.totalProgress(De,!!(Gt&&(V||ae)))),h){if(ae&&u&&(C.style[u+A.os2]=Ie),!Q)ne(Is(oe+he*De));else if(E){if($=!ae&&De>Xe&&Pe+1>_e&&_e+1>=vn(S,A),M)if(!ae&&(At||$)){let W=_n(h,!0),pe=_e-se;ju(h,ht,W.top+(A===wt?pe:0)+Ot,W.left+(A===wt?0:pe)+Ot)}else ju(h,C);rs(At||$?Re:Ve),Se&&De<1&&At||ne(oe+(De===1&&!$?he:0))}}g&&!ie.tween&&!Gt&&!Va&&D.restart(!0),n&&(I||p&&De&&(De<1||!Dl))&&wo(n.targets).forEach(W=>W.classList[At||p?"add":"remove"](n.className)),i&&!x&&!ae&&i(T),E&&!Gt?(x&&(F&&(tt==="complete"?t.pause().totalProgress(1):tt==="reset"?t.restart(!0).pause():tt==="restart"?t.restart(!0):t[tt]()),i&&i(T)),(I||!Dl)&&(a&&I&&Il(T,a),z[at]&&Il(T,z[at]),p&&(De===1?T.kill(!1,1):z[at]=0),I||(at=De===1?1:3,z[at]&&Il(T,z[at]))),b&&!At&&Math.abs(T.getVelocity())>(ro(b)?b:2500)&&(Es(T.callbackAnimation),me?me.progress(1):Es(t,tt==="reverse"?1:!De,1))):x&&i&&!Gt&&i(T)}if(Ce){let W=y?_e/y.duration()*(y._caScrollDist||0):_e;K(W+(je._isFlipped?1:0)),Ce(W)}fe&&fe(-_e/y.duration()*(y._caScrollDist||0))},T.enable=(ae,Z)=>{T.enabled||(T.enabled=!0,Rt(S,"resize",Fs),Rt(k?lt:S,"scroll",Gr),U&&Rt(Oe,"refreshInit",U),ae!==!1&&(T.progress=ee=0,de=ye=B=j()),Z!==!1&&T.refresh())},T.getTween=ae=>ae&&ie?ie.tween:me,T.setPositions=(ae,Z,ce,_e)=>{if(y){let Ee=y.scrollTrigger,De=y.duration(),Xe=Ee.end-Ee.start;ae=Ee.start+Xe*ae/De,Z=Ee.start+Xe*Z/De}T.refresh(!1,!1,{start:Gu(ae,ce&&!!T._startClamp),end:Gu(Z,ce&&!!T._endClamp)},_e),T.update()},T.adjustPinSpacing=ae=>{if(le&&ae){let Z=le.indexOf(A.d)+1;le[Z]=parseFloat(le[Z])+ae+Ot,le[1]=parseFloat(le[1])+ae+Ot,rs(le)}},T.disable=(ae,Z)=>{if(T.enabled&&(ae!==!1&&T.revert(!0,!0),T.enabled=T.isActive=!1,Z||me&&me.pause(),X=0,q&&(q.uncache=1),U&&Dt(Oe,"refreshInit",U),D&&(D.pause(),ie.tween&&ie.tween.kill()&&(ie.tween=0)),!k)){let ce=$e.length;for(;ce--;)if($e[ce].scroller===S&&$e[ce]!==T)return;Dt(S,"resize",Fs),Dt(S,"scroll",Gr)}},T.kill=(ae,Z)=>{T.disable(ae,Z),me&&!Z&&me.kill(),r&&delete mc[r];let ce=$e.indexOf(T);ce>=0&&$e.splice(ce,1),ce===Zt&&oo>0&&Zt--,ce=0,$e.forEach(_e=>_e.scroller===T.scroller&&(ce=1)),ce||Kt||(T.scroll.rec=0),t&&(t.scrollTrigger=null,ae&&t.revert({kill:!1}),Z||t.kill()),Ae&&[Ae,Me,je,G].forEach(_e=>_e.parentNode&&_e.parentNode.removeChild(_e)),Xs===T&&(Xs=0),h&&(q&&(q.uncache=1),ce=0,$e.forEach(_e=>_e.pin===h&&ce++),ce||(q.spacer=0)),e.onKill&&e.onKill(T)},$e.push(T),T.enable(!1,!1),ge&&ge(T),t&&t.add&&!Ne){let ae=T.update;T.update=()=>{T.update=ae,se||Pe||T.refresh()},xe.delayedCall(.01,T.update),Ne=.01,se=Pe=0}else T.refresh();h&&Dy()}static register(e){return Xr||(xe=e||Vf(),Gf()&&window.document&&Oe.enable(),Xr=Rs),Xr}static defaults(e){if(e)for(let t in e)$a[t]=e[t];return $a}static disable(e,t){Rs=0,$e.forEach(i=>i[t?"kill":"disable"](e)),Dt(Ze,"wheel",Gr),Dt(lt,"scroll",Gr),clearInterval(Ga),Dt(lt,"touchcancel",Ji),Dt(ht,"touchstart",Ji),Wa(Dt,lt,"pointerdown,touchstart,mousedown",Vu),Wa(Dt,lt,"pointerup,touchend,mouseup",Hu),So.kill(),Ha(Dt);for(let i=0;i<Ye.length;i+=3)Xa(Dt,Ye[i],Ye[i+1]),Xa(Dt,Ye[i],Ye[i+2])}static enable(){if(Ze=window,lt=document,Wi=lt.documentElement,ht=lt.body,xe&&(wo=xe.utils.toArray,Kr=xe.utils.clamp,fc=xe.core.context||Ji,Pl=xe.core.suppressOverwrites||Ji,Vc=Ze.history.scrollRestoration||"auto",gc=Ze.pageYOffset,xe.core.globals("ScrollTrigger",Oe),ht)){Rs=1,Bf(),bt.register(xe),Oe.isTouch=bt.isTouch,Dn=bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Rt(Ze,"wheel",Gr),Ff=[Ze,lt,Wi,ht],xe.matchMedia?(Oe.matchMedia=a=>{let o=xe.matchMedia(),c;for(c in a)o.add(c,a[c]);return o},xe.addEventListener("matchMediaInit",()=>Yc()),xe.addEventListener("matchMediaRevert",()=>qf()),xe.addEventListener("matchMedia",()=>{lr(0,1),Sr("matchMedia")}),xe.matchMedia("(orientation: portrait)",()=>(Fl(),Fl))):console.warn("Requires GSAP 3.11.0 or later"),Fl(),Rt(lt,"scroll",Gr);let e=ht.style,t=e.borderTopStyle,i=xe.core.Animation.prototype,n,r;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),e.borderTopStyle="solid",n=_n(ht),wt.m=Math.round(n.top+wt.sc())||0,ei.m=Math.round(n.left+ei.sc())||0,t?e.borderTopStyle=t:e.removeProperty("border-top-style"),Ga=setInterval($u,250),xe.delayedCall(.5,()=>Va=0),Rt(lt,"touchcancel",Ji),Rt(ht,"touchstart",Ji),Wa(Rt,lt,"pointerdown,touchstart,mousedown",Vu),Wa(Rt,lt,"pointerup,touchend,mouseup",Hu),dc=xe.utils.checkPrefix("transform"),lo.push(dc),Xr=Jt(),So=xe.delayedCall(.2,lr).pause(),$r=[lt,"visibilitychange",()=>{let a=Ze.innerWidth,o=Ze.innerHeight;lt.hidden?(Uu=a,ku=o):(Uu!==a||ku!==o)&&Fs()},lt,"DOMContentLoaded",lr,Ze,"load",lr,Ze,"resize",Fs],Ha(Rt),$e.forEach(a=>a.enable(0,1)),r=0;r<Ye.length;r+=3)Xa(Dt,Ye[r],Ye[r+1]),Xa(Dt,Ye[r],Ye[r+2])}}static config(e){"limitCallbacks"in e&&(Dl=!!e.limitCallbacks);let t=e.syncInterval;t&&clearInterval(Ga)||(Ga=t)&&setInterval($u,t),"ignoreMobileResize"in e&&(Nf=Oe.isTouch===1&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(Ha(Dt)||Ha(Rt,e.autoRefreshEvents||"none"),zf=(e.autoRefreshEvents+"").indexOf("resize")===-1)}static scrollerProxy(e,t){let i=ni(e),n=Ye.indexOf(i),r=br(i);~n&&Ye.splice(n,r?6:2),t&&(r?an.unshift(Ze,t,ht,t,Wi,t):an.unshift(i,t))}static clearMatchMedia(e){$e.forEach(t=>t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0))}static isInViewport(e,t,i){let n=(_i(e)?ni(e):e).getBoundingClientRect(),r=n[i?mr:gr]*t||0;return i?n.right-r>0&&n.left+r<Ze.innerWidth:n.bottom-r>0&&n.top+r<Ze.innerHeight}static positionInViewport(e,t,i){_i(e)&&(e=ni(e));let n=e.getBoundingClientRect(),r=n[i?mr:gr],a=t==null?r/2:t in To?To[t]*r:~t.indexOf("%")?parseFloat(t)*r/100:parseFloat(t)||0;return i?(n.left+a)/Ze.innerWidth:(n.top+a)/Ze.innerHeight}static killAll(e){if($e.slice(0).forEach(t=>t.vars.id!=="ScrollSmoother"&&t.kill()),e!==!0){let t=Mr.killAll||[];Mr={},t.forEach(i=>i())}}}Oe.version="3.12.1";Oe.saveStyles=s=>s?wo(s).forEach(e=>{if(e&&e.style){let t=gi.indexOf(e);t>=0&&gi.splice(t,5),gi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),xe.core.getCache(e),fc())}}):gi;Oe.revert=(s,e)=>Yc(!s,e);Oe.create=(s,e)=>new Oe(s,e);Oe.refresh=s=>s?Fs():(Xr||Oe.register())&&lr(!0);Oe.update=s=>++Ye.cache&&bn(s===!0?2:0);Oe.clearScrollMemory=Yf;Oe.maxScroll=(s,e)=>vn(s,e?ei:wt);Oe.getScrollFunc=(s,e)=>Wn(ni(s),e?ei:wt);Oe.getById=s=>mc[s];Oe.getAll=()=>$e.filter(s=>s.vars.id!=="ScrollSmoother");Oe.isScrolling=()=>!!Ni;Oe.snapDirectional=$c;Oe.addEventListener=(s,e)=>{let t=Mr[s]||(Mr[s]=[]);~t.indexOf(e)||t.push(e)};Oe.removeEventListener=(s,e)=>{let t=Mr[s],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Oe.batch=(s,e)=>{let t=[],i={},n=e.interval||.016,r=e.batchMax||1e9,a=(c,l)=>{let h=[],u=[],d=xe.delayedCall(n,()=>{l(h,u),h=[],u=[]}).pause();return m=>{h.length||d.restart(!0),h.push(m.trigger),u.push(m),r<=h.length&&d.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&ti(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return ti(r)&&(r=r(),Rt(Oe,"refresh",()=>r=e.batchMax())),wo(s).forEach(c=>{let l={};for(o in i)l[o]=i[o];l.trigger=c,t.push(Oe.create(l))}),t};let Ku=(s,e,t,i)=>(e>i?s(i):e<0&&s(0),t>i?(i-e)/(t-e):t<0?e/(e-t):1),ho=(s,e)=>{e===!0?s.style.removeProperty("touch-action"):s.style.touchAction=e===!0?"auto":e?"pan-"+e+(bt.isTouch?" pinch-zoom":""):"none",s===Wi&&ho(ht,e)},Za={auto:1,scroll:1},zy=({event:s,target:e,axis:t})=>{let i=(s.changedTouches?s.changedTouches[0]:s).target,n=i._gsap||xe.core.getCache(i),r=Jt(),a;if(!n._isScrollT||r-n._isScrollT>2e3){for(;i&&i!==ht&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Za[(a=Ri(i)).overflowY]||Za[a.overflowX]));)i=i.parentNode;n._isScroll=i&&i!==e&&!br(i)&&(Za[(a=Ri(i)).overflowY]||Za[a.overflowX]),n._isScrollT=r}(n._isScroll||t==="x")&&(s.stopPropagation(),s._gsapAllow=!0)},Zf=(s,e,t,i)=>bt.create({target:s,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&zy,onPress:i,onDrag:i,onScroll:i,onEnable:()=>t&&Rt(lt,bt.eventTypes[0],Qu,!1,!0),onDisable:()=>Dt(lt,bt.eventTypes[0],Qu,!0)}),Ny=/(input|label|select|textarea)/i,Ju,Qu=s=>{let e=Ny.test(s.target.tagName);(e||Ju)&&(s._gsapAllow=!0,Ju=e)},Uy=s=>{nr(s)||(s={}),s.preventDefault=s.isNormalizer=s.allowClicks=!0,s.type||(s.type="wheel,touch"),s.debounce=!!s.debounce,s.id=s.id||"normalizer";let{normalizeScrollX:e,momentum:t,allowNestedScroll:i,onRelease:n}=s,r,a,o=ni(s.target)||Wi,c=xe.core.globals().ScrollSmoother,l=c&&c.get(),h=Dn&&(s.content&&ni(s.content)||l&&s.content!==!1&&!l.smooth()&&l.content()),u=Wn(o,wt),d=Wn(o,ei),m=1,_=(bt.isTouch&&Ze.visualViewport?Ze.visualViewport.scale*Ze.visualViewport.width:Ze.outerWidth)/Ze.innerWidth,f=0,p=ti(t)?()=>t(r):()=>t||2.8,g,M,v=Zf(o,s.type,!0,i),y=()=>M=!1,b=Ji,L=Ji,A=()=>{a=vn(o,wt),L=Kr(Dn?1:0,a),e&&(b=Kr(0,vn(o,ei))),g=_r},x=()=>{h._gsap.y=Is(parseFloat(h._gsap.y)+u.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},S=()=>{if(M){requestAnimationFrame(y);let O=Is(r.deltaY/2),Y=L(u.v-O);if(h&&Y!==u.v+u.offset){u.offset=Y-u.v;let T=Is((parseFloat(h&&h._gsap.y)||0)-u.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+T+", 0, 1)",h._gsap.y=T+"px",u.cacheID=Ye.cache,bn()}return!0}u.offset&&x(),M=!0},P,k,Q,z,R=()=>{A(),P.isActive()&&P.vars.scrollY>a&&(u()>a?P.progress(1)&&u(a):P.resetTo("scrollY",a))};return h&&xe.set(h,{y:"+=0"}),s.ignoreCheck=O=>Dn&&O.type==="touchmove"&&S()||m>1.05&&O.type!=="touchstart"||r.isGesturing||O.touches&&O.touches.length>1,s.onPress=()=>{M=!1;let O=m;m=Is((Ze.visualViewport&&Ze.visualViewport.scale||1)/_),P.pause(),O!==m&&ho(o,m>1.01?!0:e?!1:"x"),k=d(),Q=u(),A(),g=_r},s.onRelease=s.onGestureStart=(O,Y)=>{if(u.offset&&x(),!Y)z.restart(!0);else{Ye.cache++;let T=p(),U,J;e&&(U=d(),J=U+T*.05*-O.velocityX/.227,T*=Ku(d,U,J,vn(o,ei)),P.vars.scrollX=b(J)),U=u(),J=U+T*.05*-O.velocityY/.227,T*=Ku(u,U,J,vn(o,wt)),P.vars.scrollY=L(J),P.invalidate().duration(T).play(.01),(Dn&&P.vars.scrollY>=a||U>=a-1)&&xe.to({},{onUpdate:R,duration:T})}n&&n(O)},s.onWheel=()=>{P._ts&&P.pause(),Jt()-f>1e3&&(g=0,f=Jt())},s.onChange=(O,Y,T,U,J)=>{if(_r!==g&&A(),Y&&e&&d(b(U[2]===Y?k+(O.startX-O.x):d()+Y-U[1])),T){u.offset&&x();let te=J[2]===T,B=te?Q+O.startY-O.y:u()+T-J[1],V=L(B);te&&B!==V&&(Q+=V-B),u(V)}(T||Y)&&bn()},s.onEnable=()=>{ho(o,e?!1:"x"),Oe.addEventListener("refresh",R),Rt(Ze,"resize",R),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=d.smooth=!1),v.enable()},s.onDisable=()=>{ho(o,!0),Dt(Ze,"resize",R),Oe.removeEventListener("refresh",R),v.kill()},s.lockAxis=s.lockAxis!==!1,r=new bt(s),r.iOS=Dn,Dn&&!u()&&u(1),Dn&&xe.ticker.add(Ji),z=r._dc,P=xe.to(r,{ease:"power4",paused:!0,scrollX:e?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:jf(u,u(),()=>P.pause())},onUpdate:bn,onComplete:z.vars.onComplete}),r};Oe.sort=s=>$e.sort(s||((e,t)=>(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)));Oe.observe=s=>new bt(s);Oe.normalizeScroll=s=>{if(typeof s>"u")return mi;if(s===!0&&mi)return mi.enable();if(s===!1)return mi&&mi.kill();let e=s instanceof bt?s:Uy(s);return mi&&mi.target===e.target&&mi.kill(),br(e.target)&&(mi=e),e};Oe.core={_getVelocityProp:uc,_inputObserver:Zf,_scrollers:Ye,_proxies:an,bridge:{ss:()=>{Ni||Sr("scrollStart"),Ni=Jt()},ref:()=>Gt}};Vf()&&xe.registerPlugin(Oe);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class on{constructor(e,t,i,n,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),on.nextNameID=on.nextNameID||0,this.$name.id=`lil-gui-name-${++on.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class ky extends on{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function xc(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const By={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:xc,toHexString:xc},na={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},Gy={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){const i=na.fromHexString(s);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([s,e,t],i=1){i=255/i;const n=s*i<<16^e*i<<8^t*i<<0;return na.toHexString(n)}},Vy={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const i=na.fromHexString(s);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:s,g:e,b:t},i=1){i=255/i;const n=s*i<<16^e*i<<8^t*i<<0;return na.toHexString(n)}},Hy=[By,na,Gy,Vy];function Wy(s){return Hy.find(e=>e.match(s))}class Xy extends on{constructor(e,t,i,n){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Wy(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=xc(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class zl extends on{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class $y extends on{constructor(e,t,i,n,r,a){super(e,t,i,"number"),this._initInput(),this.min(n),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},t=g=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+g),this.$input.value=this.getValue())},i=g=>{g.code==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),t(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),t(this._step*this._arrowKeyMultiplier(g)*-1))},n=g=>{this._inputFocused&&(g.preventDefault(),t(this._step*this._normalizeMouseWheel(g)))};let r=!1,a,o,c,l,h;const u=5,d=g=>{a=g.clientX,o=c=g.clientY,r=!0,l=this.getValue(),h=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)},m=g=>{if(r){const M=g.clientX-a,v=g.clientY-o;Math.abs(v)>u?(g.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>u&&_()}if(!r){const M=g.clientY-c;h-=M*this._step*this._arrowKeyMultiplier(g),l+h>this._max?h=this._max-l:l+h<this._min&&(h=this._min-l),this._snapClampSetValue(l+h)}c=g.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)},f=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",n,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(g,M,v,y,b)=>(g-M)/(v-M)*(b-y)+y,t=g=>{const M=this.$slider.getBoundingClientRect();let v=e(g,M.left,M.right,this._min,this._max);this._snapClampSetValue(v)},i=g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",r)},n=g=>{t(g.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",r)};let a=!1,o,c;const l=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),a=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(o=g.touches[0].clientX,c=g.touches[0].clientY,a=!0):l(g),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=g=>{if(a){const M=g.touches[0].clientX-o,v=g.touches[0].clientY-c;Math.abs(M)>Math.abs(v)?l(g):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else g.preventDefault(),t(g.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},m=this._callOnFinishChange.bind(this),_=400;let f;const p=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const v=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(f),f=setTimeout(m,_)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class qy extends on{constructor(e,t,i,n){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(n)?n:Object.values(n),this._names=Array.isArray(n)?n:Object.keys(n),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Yy extends on{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const jy=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Zy(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let ed=!1;class jc{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:n,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),c&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!ed&&o&&(Zy(jy),ed=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=a,this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,i,n,r){if(Object(i)===i)return new qy(this,e,t,i);const a=e[t];switch(typeof a){case"number":return new $y(this,e,t,i,n,r);case"boolean":return new ky(this,e,t);case"string":return new Yy(this,e,t);case"function":return new zl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,i=1){return new Xy(this,e,t,i)}addFolder(e){const t=new jc({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof zl||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof zl)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const Ky=jc;class Jy{constructor(e,t){this.gsap=e,this.tl=this.gsap.timeline(),this.gui=t,this.group01=[],this.group02=[],this.group03=[],this.aboutGroup01,this.aboutGroup03,this.scene,this.camera,this.currentGroup,this.trigger=document.querySelector(".animationtrigger"),this.about=document.querySelector(".about"),this.aboutSeondWrapper=document.querySelector(".aboutSeondWrapper"),this.aboutThirdContentTittle=document.querySelector(".aboutThirdContentTittle"),console.log(this.aboutSeondWrapper)}createMesh(e,t,i,n,r){this.aboutGroup01=e,this.aboutGroup03=t,this.scene=i,this.camera=n,this.currentGroup=r,this.tl.to(this.trigger,{opacity:0}).to(this.trigger,{opacity:1,onComplte:()=>{this.createBox1(),this.createBox3(),this.scrollTrigger()}})}createBox1(){for(let e=0;e<this.aboutGroup01.box1Count;e++){let t=this.aboutGroup01.box1.clone();this.group01.push(t),this.currentGroup.add(t)}this.scene.add(this.currentGroup),this.guiCheck()}createBox3(){let e=0;for(let t=0;t<this.aboutGroup03.box2xGrid;t++)for(let i=0;i<this.aboutGroup03.box2yGrid;i++){let n=this.aboutGroup03.box2[e],r=t*this.aboutGroup03.xSize-this.aboutGroup03.box2xGrid*this.aboutGroup03.xSize/2+2.3,a=-(i*this.aboutGroup03.ySize-this.aboutGroup03.box2yGrid*this.aboutGroup03.ySize/2)-.3;n.position.set(r,a,0),this.group03.push(n),this.currentGroup.add(n),e++}this.gsap.to(this.group03[14].material,{duration:.5}),this.guiCheck()}scrollTrigger(){this.tl.to(this.trigger,{scrollTrigger:{trigger:this.aboutSeondWrapper,start:"top 20%",end:"top 40%",scrub:1,ontoggle:()=>{console.log("test")}}})}guiCheck(){}}class Qy{constructor(e,t,i,n,r){this.gsap=e,this.tl=this.gsap.timeline(),this.currentPage=t,this.camera=n,this.loadingMesh=i,this.clone,this.loadingMesh,this.prevPage,this.scene=r,this.isLoaded=!1,this.PI=Math.PI,this.count=1,this.index=document.querySelector(".index"),this.about=document.querySelector(".about"),this.trigger=document.querySelector(".animationtrigger")}boxRotation(){this.isLoaded||(this.tl.to(this.clone.rotation,{y:this.PI,duration:1.2,delay:.8,repeat:1}),this.tl.to(this.clone.rotation,{x:this.PI,duration:1.2,delay:.8,onComplte:()=>{this.intro(),this.count++}}))}setURL(){history.pushState(null,null,this.currentPage)}loading(){this.clone=this.loadingMesh.clone(),this.clone.material.opacity=1,this.scene.add(this.clone),this.boxRotation(),this.setURL()}intro(){this.tl.to(this.camera.position,{duration:1.2,ease:"power1.inOut"},"<=").to(this.camera.position,{z:5,duration:0,onComplte:()=>{this.showContent(),this.scene.remove(this.clone)}}),this.gsap.to(this.clone.material,{opacity:0,duration:.6,delay:.6})}showContent(){switch(this.currentPage){case"index":this.index.style.display="block",this.index.style.opacity=0,this.gsap.to(this.index,{opacity:1,duration:.7,delay:1.7,ease:"power2.in"});break;case"about":this.about.style.display="block",this.about.style.opacity=0,this.gsap.to(this.about,{opacity:1,duration:.5});break}}outro(e,t){let i=e.target.dataset.link;switch(this.currentPage=String(i),t){case"index":this.prevPage=this.index;break;case"about":this.prevPage=this.about;break}return this.tl.to(this.prevPage,{opacity:0,duration:1.2}).to(this.trigger,{opacity:1,duration:1.2,onComplte:()=>{this.loading()}}),this.currentPage}}class Kf{constructor(){this.Text={A:[[1,0],[2,0],[3,0],[4,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[1,4],[2,4],[3,4],[4,4],[0,5],[4,5],[0,6],[4,6]],B:[[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3],[0,4],[4,4],[0,5],[4,5],[0,6],[1,6],[2,6],[3,6]],C:[[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[0,3],[0,4],[0,5],[4,5],[1,6],[2,6],[3,6]],E:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[0,2],[0,3],[1,3],[2,3],[3,3],[0,4],[0,5],[0,6],[1,6],[2,6],[3,6],[4,6]],L:[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,6],[2,6],[3,6],[4,6]],N:[[0,0],[4,0],[0,1],[4,1],[0,2],[1,2],[4,2],[0,3],[2,3],[4,3],[0,4],[3,4],[4,4],[0,5],[4,5],[0,6],[4,6]],O:[[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[4,4],[0,5],[4,5],[1,6],[2,6],[3,6]],R:[[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3],[0,4],[4,4],[0,5],[4,5],[0,6],[4,6]],T:[[0,0],[1,0],[2,0],[3,0],[4,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6]],U:[[0,0],[4,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[4,4],[0,5],[4,5],[1,6],[2,6],[3,6]]}}moveText(e){switch(this.text=[],e){case 2:this.a=this.moveA(),this.b=this.moveB(),this.o=this.moveO(),this.u=this.moveU(),this.t=this.moveT(),this.text.push(this.a,this.b,this.o,this.u,this.t);break;case 3:this.c=this.moveC(),this.o=this.moveO(),this.n=this.moveN(),this.t=this.moveT(),this.e=this.moveE(),this.n=this.moveN(),this.t=this.moveT(),this.text.push(this.c,this.o,this.n,this.t,this.e,this.n,this.t);break;case 4:this.c=this.moveC(),this.o=this.moveO(),this.n=this.moveN(),this.t=this.moveT(),this.r=this.moveR(),this.o=this.moveO(),this.l=this.moveL(),this.l=this.moveL(),this.text.push(this.c,this.o,this.n,this.t,this.r,this.o,this.l,this.l);break;case 5:this.c=this.moveC(),this.o=this.moveO(),this.n=this.moveN(),this.t=this.moveT(),this.a=this.moveA(),this.c=this.moveC(),this.t=this.moveT(),this.text.push(this.c,this.o,this.n,this.t,this.a,this.c,this.t);break}return this.text}moveA(){return this.Text.A}moveB(){return this.Text.B}moveC(){return this.Text.C}moveE(){return this.Text.E}moveL(){return this.Text.L}moveN(){return this.Text.N}moveO(){return this.Text.O}moveR(){return this.Text.R}moveT(){return this.Text.T}moveU(){return this.Text.U}}class eb{constructor(e){this.boxPosition=new Kf,this.loading=new Qy(e),this.gsap=e,this.tl=this.gsap.timeline(),this.scene,this.mesh,this.camera,this.total,this.meshs=[],this.navAs=document.querySelectorAll(".navWrapper a"),this.navWrapper=document.querySelector(".navWrapper"),this.trigger=document.querySelector(".animationtrigger"),this.cubeXSize,this.cubeYSize,this.cubeZSize,this.creatType,this.isAnimaiting=!0,this.isHold=!1}createMesh(e,t,i,n){this.mesh=e,this.scene=t,this.camera=i,this.group=n,this.total=this.mesh.xNum*this.mesh.yNum*this.mesh.zNum,this.cubeXSize=this.mesh.xNum*this.mesh.xSize+(this.mesh.xNum-1)*this.mesh.space/2,this.cubeYSize=this.mesh.yNum*this.mesh.ySize+(this.mesh.yNum-1)*this.mesh.space/2,this.cubeZSize=this.mesh.zNum*this.mesh.zSize+(this.mesh.zNum-1)*this.mesh.space/2;for(let a=0;a<this.mesh.xNum;a++)for(let o=0;o<this.mesh.yNum;o++)for(let c=0;c<this.mesh.zNum;c++){var r=this.mesh.mesh.clone();r.layers.set(0),r.updateMatrix(),r.matrixWorldAutoUpdate=!0,r.matrixWorldNeedsUpdate=!0,this.scene.add(r),this.group.add(r),this.meshs.push(r),r.scale.set(0,0,0),this.gsap.to(r.scale,{x:1,y:1,z:1,duration:.5,delay:5.15+.004*a*o*c})}return this.tl.to(this.trigger,{opacity:0,duration:5.9}).to(this.trigger,{duration:.5,onComplte:()=>{this.moveToSquare(),this.setMouseAera()}}).to(this.trigger,{opacity:1,duration:1.1,onComplte:()=>{}}).to(this.trigger,{opacity:0,onComplte:()=>{this.isAnimaiting=!1}}),t.add(this.group),this.meshs}moveToSquare(e){let t;e!=0?(e="back.inOut(4)",t=1.1):(e="power3.in",t=.77);let i=0,n=0,r=0;for(let a=0;a<this.total;a++){let o=i*this.mesh.xSize+i*this.mesh.space-this.mesh.xNum*this.mesh.xSize/2+this.mesh.space/2,c=n*this.mesh.ySize+n*this.mesh.space-this.mesh.yNum*this.mesh.ySize/2+this.mesh.space/2,l=r*this.mesh.zSize+r*this.mesh.space-this.mesh.zNum*this.mesh.zSize/2+this.mesh.space/2;this.gsap.to(this.meshs[a].position,{x:o,y:c,z:l,duration:t,ease:e}),r++,r>=this.mesh.zNum&&(r=0,n++,n>=this.mesh.yNum&&(n=0,i++))}}hoverAnimation(e){if(!this.isAnimaiting){if(e===0)this.moveToSquare(e),this.isHold=!1;else if(e===1){for(let t=0;t<this.meshs.length;t++){let i=(Math.random()*this.cubeXSize-this.cubeXSize/2)*(Math.random()*6.4),n=(Math.random()*this.cubeYSize-this.cubeYSize/2)*(Math.random()*6.4),r=Math.random()*8-4;this.gsap.to(this.meshs[t].position,{x:i,y:n,z:r,duration:.64,ease:"elastic.out(0.2,0.1)"})}this.isHold=!1}else if(e===2||e===3||e===4||e===5){let t=[],i=0,n=0,r=1;t=this.boxPosition.moveText(e),i=t.length;let a=7*this.mesh.ySize+6*this.mesh.space,o=5*this.mesh.xSize+4*this.mesh.space;t.forEach((c,l)=>{for(let h=0;h<c.length;h++){let u=c[h][0]*this.mesh.xSize+c[h][0]*this.mesh.space+l*o+l*r-(i*o+(i-1)*r)/2,d=c[h][1]*this.mesh.ySize+c[h][1]*this.mesh.space-a/2;this.gsap.to(this.meshs[n].position,{x:u,y:-d,z:-7,duration:.77,ease:"power4.out"}),n++}});for(let c=n;c<this.total;c++){let l=Math.random();l<.5?l=-4:l=4,this.gsap.to(this.meshs[c].position,{x:c-n-(this.total-n)/2+.5,y:l,z:Math.random()*13-12,duration:.78,ease:"power4.out"})}this.isHold=!0,this.boxRotation()}}}pageMove(e){e(),this.isHold=!0,this.isAnimaiting=!0,this.boxRotation();for(let t=0;t<this.meshs.length;t++)this.gsap.to(this.meshs[t].position,{x:0,y:0,z:0,duration:1.2,ease:"back.in(3)"});this.tl.to(this.trigger,{opacity:1,duration:1.2}).to(this.trigger,{opacity:0,onComplte:()=>{for(let t=0;t<this.meshs.length;t++)this.scene.remove(this.group);console.log(this.scene)}})}boxRotation(e,t){if(this.isHold){this.gsap.to(this.group.rotation,{x:0,y:0,duration:.2});return}else this.group.rotation.x=-t/7,this.group.rotation.y=e/7}setMouseAera(){let e=0;for(let t=0;t<this.navAs.length;t++){let i=this.navAs[t].offsetWidth;e<i&&(e=i)}this.navWrapper.style.width=e+20+"px"}}function tb(){const s=document.querySelector("body"),e=document.querySelectorAll(".navWrapper a"),t=document.querySelector(".navWrapper"),i=document.querySelector(".navTitle span"),n=document.querySelector(".navTitle"),r=document.querySelector(".aboutSeondWrapper"),a=r.querySelectorAll(".aboutSecondSubject");Wr.registerPlugin(Oe),new Kf;let o,c,l,h=new Ls,u=new Ge,d="about",m=0,_=[],f=6,p=6,g=6,M=.5,v=.5,y=.5,b=.05,L=.5,A=.5,x=.5;const S={threshold:.55,strength:.1,radius:0,exposure:1},P={mesh:new Ia(new Na(new Hi(M,v,y)),new Hr({color:"0xffffff",transparent:!0,opacity:1})),xNum:f,yNum:p,zNum:g,xSize:M,ySize:v,zSize:y,space:b},k={box1:new Ia(new Na(new Hi(L,A,x)),new Hr({color:"0xffffff",transparent:!0,opacity:1})),box2:new qi(new Hi(L,A,x),new Hr({color:"0xffffff",transparent:!0})),xSize:L,ySize:A,zSize:x,box1Count:5,box2Count:5},Q={box1:new Ia(new Na(new Hi(L,A,x)),new Hr({color:"0xffffff",transparent:!0,opacity:1})),box2:[],xSize:L,ySize:A,zSize:x,box2xGrid:17,box2yGrid:10},z=0;new Lo().set(z);const O=new Sd({alpha:!0});O.setClearColor(2631720,1),O.autoClear=!1,document.querySelector("#container").appendChild(O.domElement);const T={width:window.innerWidth,height:window.innerHeight},U=new Yx,J=new Pi(75,T.width/T.height,.1,100),te=new Ky,B=new lv(O);let V;const ee=()=>{const Re=new cv(U,J);V=new hs(new Ge(T.width/T.height)),V.strength=S.strength,V.threshold=S.threshold,V.radius=S.radius,V.filter=!1,B.addPass(Re),B.addPass(V)},j=new nv("0#000000",10,100);j.position.set(1,1,1),U.add(j);const ie=j.clone();ie.layers.set(1),ie.intensity=2,U.add(ie),J.position.set(0,0,5),new Qx().load();const Ue=new sv;a.forEach((Re,Ve)=>{let C=Ve*5+32+"%";Wr.to(Re,{scrollTrigger:{trigger:r,start:`${C} 0%`,end:"+=0%",markers:!0,scrub:1},opacity:1,duration:1,top:Ve*20+10+"%"})});const de=()=>{switch(d){case"index":_=l.createMesh(P,U,J,h);for(let Ve=0;Ve<_.length;Ve++)h.add(_[Ve]);break;case"about":let Re=Q.box2xGrid*Q.box2yGrid;for(let Ve=0;Ve<Re;Ve++){let C=new qi(new Hi(L,A,x),new Po({color:"white",transparent:!0,opacity:1}));Q.box2.push(C)}c.createMesh(k,Q,U,J,h);break}},ye=()=>{T.width=window.innerWidth,T.height=window.innerHeight,J.aspect=T.width/T.height,J.updateProjectionMatrix(),O.setSize(T.width,T.height),O.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.setSize(T.width,T.height),l.setMouseAera();const Re=window.innerWidth/1980;s.style.fontSize=`${Re}rem`},se=()=>{window.addEventListener("resize",ye),window.addEventListener("mousemove",Re=>{switch(Me(Re),je(),d){case"index":l.boxRotation(u.x,u.y);break}}),Ae()},Pe=()=>{e.forEach((Re,Ve)=>{Wr.to(Re,{y:35,duration:.25,opacity:0})})},Ae=()=>{t.addEventListener("mouseenter",Re=>{e.forEach(Ve=>{Ve.style.color="var(--textColor01in)"}),m=1,l.hoverAnimation(m)}),t.addEventListener("mouseleave",Re=>{e.forEach(Ve=>{Ve.style.color="var(--textColor01Out)"}),m=0,l.hoverAnimation(m)}),t.addEventListener("mouseenter",Re=>{Re.target==t&&(m=1,l.hoverAnimation(m))}),e.forEach((Re,Ve)=>{Re.addEventListener("mouseenter",C=>{C.target===Re&&(C.target.style.color="var(--textColor01hover)"),m=Ve+2,l.hoverAnimation(m)}),Re.addEventListener("mouseleave",C=>{C.target===Re&&(C.target.style.color="var(--textColor01in)"),m=1,l.hoverAnimation(m)})}),e.forEach(Re=>{Re.addEventListener("click",Ve=>{l.pageMove(Pe),d=o.outro(Ve,d)})}),n.addEventListener("mouseenter",()=>{m=1,l.hoverAnimation(m)}),n.addEventListener("mouseleave",()=>{m=0,l.hoverAnimation(m)}),i.addEventListener("click",Pe),i.addEventListener("mouseenter",Re=>{Re.target.style.color="var(--textColor01hover)"}),i.addEventListener("mouseleave",Re=>{Re.target.style.color="var(--textColorTitle)"})},Me=Re=>{u.x=Re.clientX/T.width*2-1,u.y=-(Re.clientY/T.height)*2+1},je=()=>{Ue.intersectObjects(U.children),Ue.setFromCamera(u,J)},G=()=>{O.clear(),J.layers.set(0),B.render(),O.clearDepth(),J.layers.set(1),O.render(U,J),requestAnimationFrame(()=>{G()})},it=()=>{l=new eb(Wr),c=new Jy(Wr,te)},ft=()=>{localStorage.getItem("prevlink")&&(d=localStorage.getItem("prevlink"),localStorage.removeItem("prevlink"))},Ne=()=>{const Re=new Hi(M,v,y),Ve=new Na(Re);return new Ia(Ve,new Hr({color:"white",transparent:!0}))};(()=>{it(),ft(),Ne(),_=de(),ee(),se(),ye(),G()})()}const td=document.querySelector(".wrongpage");if(td){let s=td.dataset.link;localStorage.setItem("prevlink",s),location.href="/index.html"}tb();
