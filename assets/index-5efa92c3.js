(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uc="147",Lp=0,bh=1,Rp=2,Ef=1,Dp=2,Bs=3,fs=0,Gi=1,Sn=2,Vn=0,ns=1,ec=2,Sh=3,Mh=4,zp=5,$r=100,Ip=101,Op=102,wh=103,Th=104,Np=200,Fp=201,Bp=202,Up=203,Af=204,Pf=205,kp=206,Gp=207,Vp=208,Hp=209,Wp=210,Xp=0,qp=1,Yp=2,ic=3,$p=4,Zp=5,jp=6,Jp=7,Lf=0,Kp=1,Qp=2,Tn=0,tm=1,em=2,im=3,nm=4,rm=5,Rf=300,ds=301,ps=302,nc=303,rc=304,Ga=306,sc=1e3,ji=1001,oc=1002,hi=1003,Ch=1004,Eh=1005,Ii=1006,sm=1007,Va=1008,Mr=1009,om=1010,am=1011,Df=1012,lm=1013,hr=1014,ur=1015,ro=1016,cm=1017,hm=1018,rs=1020,um=1021,fm=1022,Ji=1023,dm=1024,pm=1025,pr=1026,ms=1027,mm=1028,gm=1029,_m=1030,xm=1031,vm=1033,il=33776,nl=33777,rl=33778,sl=33779,Ah=35840,Ph=35841,Lh=35842,Rh=35843,ym=36196,Dh=37492,zh=37496,Ih=37808,Oh=37809,Nh=37810,Fh=37811,Bh=37812,Uh=37813,kh=37814,Gh=37815,Vh=37816,Hh=37817,Wh=37818,Xh=37819,qh=37820,Yh=37821,$h=36492,wr=3e3,he=3001,bm=3200,Sm=3201,zf=0,Mm=1,tn="srgb",so="srgb-linear",ol=7680,wm=519,Zh=35044,jh="300 es",ac=1035;class ws{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,Jh=180/Math.PI;function Ts(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[s&255]+He[s>>8&255]+He[s>>16&255]+He[s>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function Xe(s,t,e){return Math.max(t,Math.min(e,s))}function Tm(s,t){return(s%t+t)%t}function al(s,t,e){return(1-e)*s+e*t}function Kh(s){return(s&s-1)===0&&s!==0}function lc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wo(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xi(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ei{constructor(){Ei.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,n,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],p=n[0],d=n[3],_=n[6],S=n[1],y=n[4],x=n[7],b=n[2],A=n[5],C=n[8];return r[0]=o*p+a*S+l*b,r[3]=o*d+a*y+l*A,r[6]=o*_+a*x+l*C,r[1]=c*p+h*S+u*b,r[4]=c*d+h*y+u*A,r[7]=c*_+h*x+u*C,r[2]=f*p+m*S+g*b,r[5]=f*d+m*y+g*A,r[8]=f*_+m*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=e*u+i*f+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=u*p,t[1]=(n*c-h*i)*p,t[2]=(a*i-n*o)*p,t[3]=f*p,t[4]=(h*e-n*l)*p,t[5]=(n*r-a*e)*p,t[6]=m*p,t[7]=(i*l-c*e)*p,t[8]=(o*e-i*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ll.makeScale(t,e)),this}rotate(t){return this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new Ei;function If(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function oo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const cl={[tn]:{[so]:mr},[so]:{[tn]:fa}},Je={legacyMode:!0,get workingColorSpace(){return so},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.legacyMode||t===e||!t||!e)return s;if(cl[t]&&cl[t][e]!==void 0){const i=cl[t][e];return s.r=i(s.r),s.g=i(s.g),s.b=i(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ce={r:0,g:0,b:0},Xi={h:0,s:0,l:0},To={h:0,s:0,l:0};function hl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function Co(s,t){return t.r=s.r,t.g=s.g,t.b=s.b,t}class jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Je.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Je.workingColorSpace){return this.r=t,this.g=e,this.b=i,Je.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Je.workingColorSpace){if(t=Tm(t,1),e=Xe(e,0,1),i=Xe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=hl(o,r,t+1/3),this.g=hl(o,r,t),this.b=hl(o,r,t-1/3)}return Je.toWorkingColorSpace(this,n),this}setStyle(t,e=tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Je.toWorkingColorSpace(this,e),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Je.toWorkingColorSpace(this,e),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return i(r[4]),this.setHSL(l,c,h,e)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Je.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Je.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=tn){const i=Of[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}copyLinearToSRGB(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Je.fromWorkingColorSpace(Co(this,Ce),t),Xe(Ce.r*255,0,255)<<16^Xe(Ce.g*255,0,255)<<8^Xe(Ce.b*255,0,255)<<0}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Je.workingColorSpace){Je.fromWorkingColorSpace(Co(this,Ce),e);const i=Ce.r,n=Ce.g,r=Ce.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Je.workingColorSpace){return Je.fromWorkingColorSpace(Co(this,Ce),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=tn){return Je.fromWorkingColorSpace(Co(this,Ce),t),t!==tn?`color(${t} ${Ce.r} ${Ce.g} ${Ce.b})`:`rgb(${Ce.r*255|0},${Ce.g*255|0},${Ce.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(Xi),Xi.h+=t,Xi.s+=e,Xi.l+=i,this.setHSL(Xi.h,Xi.s,Xi.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(To);const i=al(Xi.h,To.h,e),n=al(Xi.s,To.s,e),r=al(Xi.l,To.l,e);return this.setHSL(i,n,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}jt.NAMES=Of;let Rr;class Nf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rr===void 0&&(Rr=oo("canvas")),Rr.width=t.width,Rr.height=t.height;const i=Rr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Rr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=mr(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mr(e[i]/255)*255):e[i]=mr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Ff{constructor(t=null){this.isSource=!0,this.uuid=Ts(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(ul(n[o].image)):r.push(ul(n[o]))}else r=ul(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function ul(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cm=0;class fi extends ws{constructor(t=fi.DEFAULT_IMAGE,e=fi.DEFAULT_MAPPING,i=ji,n=ji,r=Ii,o=Va,a=Ji,l=Mr,c=fi.DEFAULT_ANISOTROPY,h=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Ts(),this.name="",this.source=new Ff(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ei,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sc:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sc:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=Rf;fi.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,e=0,i=0,n=1){Oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(m+1)/2,b=(_+1)/2,A=(h+f)/4,C=(u+p)/4,v=(g+d)/4;return y>x&&y>b?y<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(y),n=A/i,r=C/i):x>b?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=A/n,r=v/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=C/r,n=v/r),this.set(i,n,r,e),this}let S=Math.sqrt((d-g)*(d-g)+(u-p)*(u-p)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(u-p)/S,this.z=(f-h)/S,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ki extends ws{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);const n={width:t,height:e,depth:1};this.texture=new fi(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ii,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ff(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bf extends fi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=hi,this.minFilter=hi,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Em extends fi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=hi,this.minFilter=hi,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vo{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const f=r[o+0],m=r[o+1],g=r[o+2],p=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(u!==p||l!==f||c!==m||h!==g){let d=1-a;const _=l*f+c*m+h*g+u*p,S=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const b=Math.sqrt(y),A=Math.atan2(b,_*S);d=Math.sin(d*A)/b,a=Math.sin(a*A)/b}const x=a*S;if(l=l*d+f*x,c=c*d+m*x,h=h*d+g*x,u=u*d+p*x,d===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-a*m,t[e+2]=c*g+h*m+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),f=l(i/2),m=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-n)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-n)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(r),i*Math.cos(r),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*n-a*i,h=l*i+a*e-r*n,u=l*n+r*i-o*e,f=-r*e-o*i-a*n;return this.x=c*l+f*-r+h*-a-u*-o,this.y=h*l+f*-o+u*-r-c*-a,this.z=u*l+f*-a+c*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fl.copy(this).projectOnVector(t),this.sub(fl)}reflect(t){return this.sub(fl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fl=new z,Qh=new vo;class yo{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,n=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],f=t[l+2];h<e&&(e=h),u<i&&(i=u),f<n&&(n=f),h>r&&(r=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(e,i,n),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,i=1/0,n=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),f=t.getZ(l);h<e&&(e=h),u<i&&(i=u),f<n&&(n=f),h>r&&(r=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(e,i,n),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Kn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Kn)}else i.boundingBox===null&&i.computeBoundingBox(),dl.copy(i.boundingBox),dl.applyMatrix4(t.matrixWorld),this.union(dl);const n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),Eo.subVectors(this.max,Ps),Dr.subVectors(t.a,Ps),zr.subVectors(t.b,Ps),Ir.subVectors(t.c,Ps),Pn.subVectors(zr,Dr),Ln.subVectors(Ir,zr),Qn.subVectors(Dr,Ir);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Qn.z,Qn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Qn.z,0,-Qn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Qn.y,Qn.x,0];return!pl(e,Dr,zr,Ir,Eo)||(e=[1,0,0,0,1,0,0,0,1],!pl(e,Dr,zr,Ir,Eo))?!1:(Ao.crossVectors(Pn,Ln),e=[Ao.x,Ao.y,Ao.z],pl(e,Dr,zr,Ir,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Kn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new z,new z,new z,new z,new z,new z,new z,new z],Kn=new z,dl=new yo,Dr=new z,zr=new z,Ir=new z,Pn=new z,Ln=new z,Qn=new z,Ps=new z,Eo=new z,Ao=new z,tr=new z;function pl(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){tr.fromArray(s,r);const a=n.x*Math.abs(tr.x)+n.y*Math.abs(tr.y)+n.z*Math.abs(tr.z),l=t.dot(tr),c=e.dot(tr),h=i.dot(tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Am=new yo,Ls=new z,ml=new z;class Ha{constructor(t=new z,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Am.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ls,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(ml)),this.expandByPoint(Ls.copy(t.center).sub(ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new z,gl=new z,Po=new z,Rn=new z,_l=new z,Lo=new z,xl=new z;class kc{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.direction).multiplyScalar(e).add(this.origin),pn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){gl.copy(t).add(e).multiplyScalar(.5),Po.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(gl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Po),a=Rn.dot(this.direction),l=-Rn.dot(Po),c=Rn.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const p=1/h;u*=p,f*=p,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),n&&n.copy(Po).multiplyScalar(f).add(gl),m}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const i=pn.dot(this.direction),n=pn.dot(pn)-i*i,r=t.radius*t.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,i,n,r){_l.subVectors(e,t),Lo.subVectors(i,t),xl.crossVectors(_l,Lo);let o=this.direction.dot(xl),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rn.subVectors(this.origin,t);const l=a*this.direction.dot(Lo.crossVectors(Rn,Lo));if(l<0)return null;const c=a*this.direction.dot(_l.cross(Rn));if(c<0||l+c>o)return null;const h=-a*Rn.dot(xl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,n,r,o,a,l,c,h,u,f,m,g,p,d){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=n,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=f,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Or.setFromMatrixColumn(t,0).length(),r=1/Or.setFromMatrixColumn(t,1).length(),o=1/Or.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*u,g=a*h,p=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-p*c,e[9]=-a*l,e[2]=p-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,p=c*u;e[0]=f+p*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=p+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,p=c*u;e[0]=f-p*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=p-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*u,g=a*h,p=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+p,e[1]=l*u,e[5]=p*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,p=a*c;e[0]=l*h,e[4]=p-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-p*u}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,p=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+p,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=p*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pm,t,Lm)}lookAt(t,e,i){const n=this.elements;return vi.subVectors(t,e),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),Dn.crossVectors(i,vi),Dn.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),Dn.crossVectors(i,vi)),Dn.normalize(),Ro.crossVectors(vi,Dn),n[0]=Dn.x,n[4]=Ro.x,n[8]=vi.x,n[1]=Dn.y,n[5]=Ro.y,n[9]=vi.y,n[2]=Dn.z,n[6]=Ro.z,n[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],p=i[6],d=i[10],_=i[14],S=i[3],y=i[7],x=i[11],b=i[15],A=n[0],C=n[4],v=n[8],M=n[12],L=n[1],U=n[5],it=n[9],N=n[13],D=n[2],F=n[6],q=n[10],E=n[14],k=n[3],et=n[7],nt=n[11],V=n[15];return r[0]=o*A+a*L+l*D+c*k,r[4]=o*C+a*U+l*F+c*et,r[8]=o*v+a*it+l*q+c*nt,r[12]=o*M+a*N+l*E+c*V,r[1]=h*A+u*L+f*D+m*k,r[5]=h*C+u*U+f*F+m*et,r[9]=h*v+u*it+f*q+m*nt,r[13]=h*M+u*N+f*E+m*V,r[2]=g*A+p*L+d*D+_*k,r[6]=g*C+p*U+d*F+_*et,r[10]=g*v+p*it+d*q+_*nt,r[14]=g*M+p*N+d*E+_*V,r[3]=S*A+y*L+x*D+b*k,r[7]=S*C+y*U+x*F+b*et,r[11]=S*v+y*it+x*q+b*nt,r[15]=S*M+y*N+x*E+b*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],p=t[7],d=t[11],_=t[15];return g*(+r*l*u-n*c*u-r*a*f+i*c*f+n*a*m-i*l*m)+p*(+e*l*m-e*c*f+r*o*f-n*o*m+n*c*h-r*l*h)+d*(+e*c*u-e*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+_*(-n*a*h-e*l*u+e*a*f+n*o*u-i*o*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],p=t[13],d=t[14],_=t[15],S=u*d*c-p*f*c+p*l*m-a*d*m-u*l*_+a*f*_,y=g*f*c-h*d*c-g*l*m+o*d*m+h*l*_-o*f*_,x=h*p*c-g*u*c+g*a*m-o*p*m-h*a*_+o*u*_,b=g*u*l-h*p*l-g*a*f+o*p*f+h*a*d-o*u*d,A=e*S+i*y+n*x+r*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=S*C,t[1]=(p*f*r-u*d*r-p*n*m+i*d*m+u*n*_-i*f*_)*C,t[2]=(a*d*r-p*l*r+p*n*c-i*d*c-a*n*_+i*l*_)*C,t[3]=(u*l*r-a*f*r-u*n*c+i*f*c+a*n*m-i*l*m)*C,t[4]=y*C,t[5]=(h*d*r-g*f*r+g*n*m-e*d*m-h*n*_+e*f*_)*C,t[6]=(g*l*r-o*d*r-g*n*c+e*d*c+o*n*_-e*l*_)*C,t[7]=(o*f*r-h*l*r+h*n*c-e*f*c-o*n*m+e*l*m)*C,t[8]=x*C,t[9]=(g*u*r-h*p*r-g*i*m+e*p*m+h*i*_-e*u*_)*C,t[10]=(o*p*r-g*a*r+g*i*c-e*p*c-o*i*_+e*a*_)*C,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*m-e*a*m)*C,t[12]=b*C,t[13]=(h*p*n-g*u*n+g*i*f-e*p*f-h*i*d+e*u*d)*C,t[14]=(g*a*n-o*p*n-g*i*l+e*p*l+o*i*d-e*a*d)*C,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*f+e*a*f)*C,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,p=o*h,d=o*u,_=a*u,S=l*c,y=l*h,x=l*u,b=i.x,A=i.y,C=i.z;return n[0]=(1-(p+_))*b,n[1]=(m+x)*b,n[2]=(g-y)*b,n[3]=0,n[4]=(m-x)*A,n[5]=(1-(f+_))*A,n[6]=(d+S)*A,n[7]=0,n[8]=(g+y)*C,n[9]=(d-S)*C,n[10]=(1-(f+p))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=Or.set(n[0],n[1],n[2]).length();const o=Or.set(n[4],n[5],n[6]).length(),a=Or.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],qi.copy(this);const c=1/r,h=1/o,u=1/a;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=h,qi.elements[5]*=h,qi.elements[6]*=h,qi.elements[8]*=u,qi.elements[9]*=u,qi.elements[10]*=u,e.setFromRotationMatrix(qi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o){const a=this.elements,l=2*r/(e-t),c=2*r/(i-n),h=(e+t)/(e-t),u=(i+n)/(i-n),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,n,r,o){const a=this.elements,l=1/(e-t),c=1/(i-n),h=1/(o-r),u=(e+t)*l,f=(i+n)*c,m=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Or=new z,qi=new ve,Pm=new z(0,0,0),Lm=new z(1,1,1),Dn=new z,Ro=new z,vi=new z,tu=new ve,eu=new vo;class bo{constructor(t=0,e=0,i=0,n=bo.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eu.setFromEuler(this),this.setFromQuaternion(eu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}bo.DefaultOrder="XYZ";bo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Wa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rm=0;const iu=new z,Nr=new vo,mn=new ve,Do=new z,Rs=new z,Dm=new z,zm=new vo,nu=new z(1,0,0),ru=new z(0,1,0),su=new z(0,0,1),Im={type:"added"},ou={type:"removed"};class ke extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DefaultUp.clone();const t=new z,e=new bo,i=new vo,n=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ve},normalMatrix:{value:new Ei}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=ke.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ke.DefaultMatrixWorldAutoUpdate,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Nr.setFromAxisAngle(t,e),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,e){return Nr.setFromAxisAngle(t,e),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(ru,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return iu.copy(t).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(ru,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Do.copy(t):Do.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Rs,Do,this.up):mn.lookAt(Do,Rs,this.up),this.quaternion.setFromRotationMatrix(mn),n&&(mn.extractRotation(n.matrixWorld),Nr.setFromRotationMatrix(mn),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Im)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ou)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ou)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,zm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++){const a=n[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}ke.DefaultUp=new z(0,1,0);ke.DefaultMatrixAutoUpdate=!0;ke.DefaultMatrixWorldAutoUpdate=!0;const Yi=new z,gn=new z,vl=new z,_n=new z,Fr=new z,Br=new z,au=new z,yl=new z,bl=new z,Sl=new z;class rn{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Yi.subVectors(t,e),n.cross(Yi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Yi.subVectors(n,e),gn.subVectors(i,e),vl.subVectors(t,e);const o=Yi.dot(Yi),a=Yi.dot(gn),l=Yi.dot(vl),c=gn.dot(gn),h=gn.dot(vl),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,_n),l.set(0,0),l.addScaledVector(r,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l}static isFrontFacing(t,e,i,n){return Yi.subVectors(i,e),gn.subVectors(t,e),Yi.cross(gn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yi.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Yi.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,r){return rn.getUV(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let o,a;Fr.subVectors(n,i),Br.subVectors(r,i),yl.subVectors(t,i);const l=Fr.dot(yl),c=Br.dot(yl);if(l<=0&&c<=0)return e.copy(i);bl.subVectors(t,n);const h=Fr.dot(bl),u=Br.dot(bl);if(h>=0&&u<=h)return e.copy(n);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Fr,o);Sl.subVectors(t,r);const m=Fr.dot(Sl),g=Br.dot(Sl);if(g>=0&&m<=g)return e.copy(r);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Br,a);const d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return au.subVectors(r,n),a=(u-h)/(u-h+(m-g)),e.copy(n).addScaledVector(au,a);const _=1/(d+p+f);return o=p*_,a=f*_,e.copy(i).addScaledVector(Fr,o).addScaledVector(Br,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Om=0;class Cs extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=ns,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Af,this.blendDst=Pf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ol,this.stencilZFail=ol,this.stencilZPass=ol,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==fs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ss extends Cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new z,zo=new yt;class an{constructor(t,e,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i===!0,this.usage=Zh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zo.fromBufferAttribute(this,e),zo.applyMatrix3(t),this.setXY(e,zo.x,zo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wo(e,this.array)),e}setX(t,e){return this.normalized&&(e=xi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wo(e,this.array)),e}setY(t,e){return this.normalized&&(e=xi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wo(e,this.array)),e}setW(t,e){return this.normalized&&(e=xi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=xi(e,this.array),i=xi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=xi(e,this.array),i=xi(i,this.array),n=xi(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=xi(e,this.array),i=xi(i,this.array),n=xi(n,this.array),r=xi(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zh&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uf extends an{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class kf extends an{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ge extends an{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Nm=0;const Ri=new ve,Ml=new ke,Ur=new z,yi=new yo,Ds=new yo,De=new z;class Wi extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(If(t)?kf:Uf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ei().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,e,i){return Ri.makeTranslation(t,e,i),this.applyMatrix4(Ri),this}scale(t,e,i){return Ri.makeScale(t,e,i),this.applyMatrix4(Ri),this}lookAt(t){return Ml.lookAt(t),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];yi.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ha);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(yi.min,Ds.min),yi.expandByPoint(De),De.addVectors(yi.max,Ds.max),yi.expandByPoint(De)):(yi.expandByPoint(Ds.min),yi.expandByPoint(Ds.max))}yi.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(Ur.fromBufferAttribute(t,c),De.add(Ur)),n=Math.max(n,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,r=e.normal.array,o=e.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let L=0;L<a;L++)c[L]=new z,h[L]=new z;const u=new z,f=new z,m=new z,g=new yt,p=new yt,d=new yt,_=new z,S=new z;function y(L,U,it){u.fromArray(n,L*3),f.fromArray(n,U*3),m.fromArray(n,it*3),g.fromArray(o,L*2),p.fromArray(o,U*2),d.fromArray(o,it*2),f.sub(u),m.sub(u),p.sub(g),d.sub(g);const N=1/(p.x*d.y-d.x*p.y);isFinite(N)&&(_.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(N),S.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(N),c[L].add(_),c[U].add(_),c[it].add(_),h[L].add(S),h[U].add(S),h[it].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let L=0,U=x.length;L<U;++L){const it=x[L],N=it.start,D=it.count;for(let F=N,q=N+D;F<q;F+=3)y(i[F+0],i[F+1],i[F+2])}const b=new z,A=new z,C=new z,v=new z;function M(L){C.fromArray(r,L*3),v.copy(C);const U=c[L];b.copy(U),b.sub(C.multiplyScalar(C.dot(U))).normalize(),A.crossVectors(v,U);const N=A.dot(h[L])<0?-1:1;l[L*4]=b.x,l[L*4+1]=b.y,l[L*4+2]=b.z,l[L*4+3]=N}for(let L=0,U=x.length;L<U;++L){const it=x[L],N=it.start,D=it.count;for(let F=N,q=N+D;F<q;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const n=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),p=t.getX(f+1),d=t.getX(f+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,d),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*h;for(let _=0;_<h;_++)f[g++]=c[m++]}return new an(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Wi,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const lu=new ve,kr=new kc,wl=new Ha,zn=new z,In=new z,On=new z,Tl=new z,Cl=new z,El=new z,Io=new z,Oo=new z,No=new z,Fo=new yt,Bo=new yt,Uo=new yt,Al=new z,ko=new z;class ui extends ke{constructor(t=new Wi,e=new ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),t.ray.intersectsSphere(wl)===!1)||(lu.copy(r).invert(),kr.copy(t.ray).applyMatrix4(lu),i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,h=i.morphTargetsRelative,u=i.attributes.uv,f=i.attributes.uv2,m=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(n))for(let p=0,d=m.length;p<d;p++){const _=m[p],S=n[_.materialIndex],y=Math.max(_.start,g.start),x=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let b=y,A=x;b<A;b+=3){const C=a.getX(b),v=a.getX(b+1),M=a.getX(b+2);o=Go(this,S,t,kr,l,c,h,u,f,C,v,M),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=p,S=d;_<S;_+=3){const y=a.getX(_),x=a.getX(_+1),b=a.getX(_+2);o=Go(this,n,t,kr,l,c,h,u,f,y,x,b),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(n))for(let p=0,d=m.length;p<d;p++){const _=m[p],S=n[_.materialIndex],y=Math.max(_.start,g.start),x=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let b=y,A=x;b<A;b+=3){const C=b,v=b+1,M=b+2;o=Go(this,S,t,kr,l,c,h,u,f,C,v,M),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,S=d;_<S;_+=3){const y=_,x=_+1,b=_+2;o=Go(this,n,t,kr,l,c,h,u,f,y,x,b),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}}function Fm(s,t,e,i,n,r,o,a){let l;if(t.side===Gi?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side!==Sn,a),l===null)return null;ko.copy(a),ko.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ko);return c<e.near||c>e.far?null:{distance:c,point:ko.clone(),object:s}}function Go(s,t,e,i,n,r,o,a,l,c,h,u){zn.fromBufferAttribute(n,c),In.fromBufferAttribute(n,h),On.fromBufferAttribute(n,u);const f=s.morphTargetInfluences;if(r&&f){Io.set(0,0,0),Oo.set(0,0,0),No.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const d=f[g],_=r[g];d!==0&&(Tl.fromBufferAttribute(_,c),Cl.fromBufferAttribute(_,h),El.fromBufferAttribute(_,u),o?(Io.addScaledVector(Tl,d),Oo.addScaledVector(Cl,d),No.addScaledVector(El,d)):(Io.addScaledVector(Tl.sub(zn),d),Oo.addScaledVector(Cl.sub(In),d),No.addScaledVector(El.sub(On),d)))}zn.add(Io),In.add(Oo),On.add(No)}s.isSkinnedMesh&&(s.boneTransform(c,zn),s.boneTransform(h,In),s.boneTransform(u,On));const m=Fm(s,t,e,i,zn,In,On,Al);if(m){a&&(Fo.fromBufferAttribute(a,c),Bo.fromBufferAttribute(a,h),Uo.fromBufferAttribute(a,u),m.uv=rn.getUV(Al,zn,In,On,Fo,Bo,Uo,new yt)),l&&(Fo.fromBufferAttribute(l,c),Bo.fromBufferAttribute(l,h),Uo.fromBufferAttribute(l,u),m.uv2=rn.getUV(Al,zn,In,On,Fo,Bo,Uo,new yt));const g={a:c,b:h,c:u,normal:new z,materialIndex:0};rn.getNormal(zn,In,On,g.normal),m.face=g}return m}class li extends Wi{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2));function g(p,d,_,S,y,x,b,A,C,v,M){const L=x/C,U=b/v,it=x/2,N=b/2,D=A/2,F=C+1,q=v+1;let E=0,k=0;const et=new z;for(let nt=0;nt<q;nt++){const V=nt*U-N;for(let H=0;H<F;H++){const K=H*L-it;et[p]=K*S,et[d]=V*y,et[_]=D,c.push(et.x,et.y,et.z),et[p]=0,et[d]=0,et[_]=A>0?1:-1,h.push(et.x,et.y,et.z),u.push(H/C),u.push(1-nt/v),E+=1}}for(let nt=0;nt<v;nt++)for(let V=0;V<C;V++){const H=f+V+F*nt,K=f+V+F*(nt+1),Z=f+(V+1)+F*(nt+1),at=f+(V+1)+F*nt;l.push(H,K,at),l.push(K,Z,at),k+=6}a.addGroup(m,k,M),m+=k,f+=E}}static fromJSON(t){return new li(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Qe(s){const t={};for(let e=0;e<s.length;e++){const i=gs(s[e]);for(const n in i)t[n]=i[n]}return t}function Bm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Gf(s){return s.getRenderTarget()===null&&s.outputEncoding===he?tn:so}const Ca={clone:gs,merge:Qe};var Um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Um,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=Bm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Vf extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Oi extends Vf{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jh*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ua*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gr=-90,Vr=1;class Gm extends ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new Oi(Gr,Vr,t,e);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const r=new Oi(Gr,Vr,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Oi(Gr,Vr,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Oi(Gr,Vr,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Oi(Gr,Vr,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Oi(Gr,Vr,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,r,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,f=t.xr.enabled;t.toneMapping=Tn,t.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,n),t.setRenderTarget(i,1),t.render(e,r),t.setRenderTarget(i,2),t.render(e,o),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=m,t.setRenderTarget(i,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Hf extends fi{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vm extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Hf(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new li(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gi,blending:Vn});r.uniforms.tEquirect.value=e;const o=new ui(n,r),a=e.minFilter;return e.minFilter===Va&&(e.minFilter=Ii),new Gm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}}const Pl=new z,Hm=new z,Wm=new Ei;class nr{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Pl.subVectors(i,e).cross(Hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(Pl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(i).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Wm.getNormalMatrix(t),n=this.coplanarPoint(Pl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Ha,Vo=new z;class Gc{constructor(t=new nr,e=new nr,i=new nr,n=new nr,r=new nr,o=new nr){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,n=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],f=i[8],m=i[9],g=i[10],p=i[11],d=i[12],_=i[13],S=i[14],y=i[15];return e[0].setComponents(a-n,u-l,p-f,y-d).normalize(),e[1].setComponents(a+n,u+l,p+f,y+d).normalize(),e[2].setComponents(a+r,u+c,p+m,y+_).normalize(),e[3].setComponents(a-r,u-c,p-m,y-_).normalize(),e[4].setComponents(a-o,u-h,p-g,y-S).normalize(),e[5].setComponents(a+o,u+h,p+g,y+S).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Hr)}intersectsSprite(t){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Vo.x=n.normal.x>0?t.max.x:t.min.x,Vo.y=n.normal.y>0?t.max.y:t.min.y,Vo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wf(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Xm(s,t){const e=t.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,f=c.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const f=h.array,m=h.updateRange;s.bindBuffer(u,c),m.count===-1?s.bufferSubData(u,0,f):(e?s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(s.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Vc extends Wi{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,f=e/l,m=[],g=[],p=[],d=[];for(let _=0;_<h;_++){const S=_*f-o;for(let y=0;y<c;y++){const x=y*u-r;g.push(x,-S,0),p.push(0,0,1),d.push(y/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<a;S++){const y=S+c*_,x=S+c*(_+1),b=S+1+c*(_+1),A=S+1+c*_;m.push(y,x,A),m.push(x,b,A)}this.setIndex(m),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(p,3)),this.setAttribute("uv",new Ge(d,2))}static fromJSON(t){return new Vc(t.width,t.height,t.widthSegments,t.heightSegments)}}var qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km="vec3 transformed = vec3( position );",Qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,eg=`#ifdef USE_IRIDESCENCE
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
#endif`,ig=`#ifdef USE_BUMPMAP
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
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ug=`#define PI 3.141592653589793
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
}`,fg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dg=`vec3 transformedNormal = objectNormal;
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
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",vg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
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
}`,Lg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ig=`uniform bool receiveShadow;
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
#endif`,Og=`#if defined( USE_ENVMAP )
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
#endif`,Ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kg=`PhysicalMaterial material;
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
#endif`,Gg=`struct PhysicalMaterial {
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
}`,Vg=`
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
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
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
#endif`,n0=`#ifdef USE_MORPHTARGETS
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
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,o0=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
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
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,E0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,R0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,B0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,U0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,k0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,G0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,V0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,j0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,K0=`#define DISTANCE
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
}`,Q0=`#define DISTANCE
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,i_=`uniform float scale;
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
}`,n_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,s_=`uniform vec3 diffuse;
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
}`,o_=`#define LAMBERT
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
}`,a_=`#define LAMBERT
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
}`,l_=`#define MATCAP
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
}`,c_=`#define MATCAP
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
}`,h_=`#define NORMAL
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
}`,u_=`#define NORMAL
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
}`,f_=`#define PHONG
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
}`,d_=`#define PHONG
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
}`,p_=`#define STANDARD
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
}`,m_=`#define STANDARD
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
}`,g_=`#define TOON
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
}`,__=`#define TOON
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
}`,x_=`uniform float size;
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
}`,v_=`uniform vec3 diffuse;
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
}`,y_=`#include <common>
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
}`,b_=`uniform vec3 color;
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
}`,S_=`uniform float rotation;
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
}`,M_=`uniform vec3 diffuse;
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
}`,Xt={alphamap_fragment:qm,alphamap_pars_fragment:Ym,alphatest_fragment:$m,alphatest_pars_fragment:Zm,aomap_fragment:jm,aomap_pars_fragment:Jm,begin_vertex:Km,beginnormal_vertex:Qm,bsdfs:tg,iridescence_fragment:eg,bumpmap_pars_fragment:ig,clipping_planes_fragment:ng,clipping_planes_pars_fragment:rg,clipping_planes_pars_vertex:sg,clipping_planes_vertex:og,color_fragment:ag,color_pars_fragment:lg,color_pars_vertex:cg,color_vertex:hg,common:ug,cube_uv_reflection_fragment:fg,defaultnormal_vertex:dg,displacementmap_pars_vertex:pg,displacementmap_vertex:mg,emissivemap_fragment:gg,emissivemap_pars_fragment:_g,encodings_fragment:xg,encodings_pars_fragment:vg,envmap_fragment:yg,envmap_common_pars_fragment:bg,envmap_pars_fragment:Sg,envmap_pars_vertex:Mg,envmap_physical_pars_fragment:Og,envmap_vertex:wg,fog_vertex:Tg,fog_pars_vertex:Cg,fog_fragment:Eg,fog_pars_fragment:Ag,gradientmap_pars_fragment:Pg,lightmap_fragment:Lg,lightmap_pars_fragment:Rg,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:zg,lights_pars_begin:Ig,lights_toon_fragment:Ng,lights_toon_pars_fragment:Fg,lights_phong_fragment:Bg,lights_phong_pars_fragment:Ug,lights_physical_fragment:kg,lights_physical_pars_fragment:Gg,lights_fragment_begin:Vg,lights_fragment_maps:Hg,lights_fragment_end:Wg,logdepthbuf_fragment:Xg,logdepthbuf_pars_fragment:qg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:$g,map_fragment:Zg,map_pars_fragment:jg,map_particle_fragment:Jg,map_particle_pars_fragment:Kg,metalnessmap_fragment:Qg,metalnessmap_pars_fragment:t0,morphcolor_vertex:e0,morphnormal_vertex:i0,morphtarget_pars_vertex:n0,morphtarget_vertex:r0,normal_fragment_begin:s0,normal_fragment_maps:o0,normal_pars_fragment:a0,normal_pars_vertex:l0,normal_vertex:c0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:p0,output_fragment:m0,packing:g0,premultiplied_alpha_fragment:_0,project_vertex:x0,dithering_fragment:v0,dithering_pars_fragment:y0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:w0,shadowmap_vertex:T0,shadowmask_pars_fragment:C0,skinbase_vertex:E0,skinning_pars_vertex:A0,skinning_vertex:P0,skinnormal_vertex:L0,specularmap_fragment:R0,specularmap_pars_fragment:D0,tonemapping_fragment:z0,tonemapping_pars_fragment:I0,transmission_fragment:O0,transmission_pars_fragment:N0,uv_pars_fragment:F0,uv_pars_vertex:B0,uv_vertex:U0,uv2_pars_fragment:k0,uv2_pars_vertex:G0,uv2_vertex:V0,worldpos_vertex:H0,background_vert:W0,background_frag:X0,backgroundCube_vert:q0,backgroundCube_frag:Y0,cube_vert:$0,cube_frag:Z0,depth_vert:j0,depth_frag:J0,distanceRGBA_vert:K0,distanceRGBA_frag:Q0,equirect_vert:t_,equirect_frag:e_,linedashed_vert:i_,linedashed_frag:n_,meshbasic_vert:r_,meshbasic_frag:s_,meshlambert_vert:o_,meshlambert_frag:a_,meshmatcap_vert:l_,meshmatcap_frag:c_,meshnormal_vert:h_,meshnormal_frag:u_,meshphong_vert:f_,meshphong_frag:d_,meshphysical_vert:p_,meshphysical_frag:m_,meshtoon_vert:g_,meshtoon_frag:__,points_vert:x_,points_frag:v_,shadow_vert:y_,shadow_frag:b_,sprite_vert:S_,sprite_frag:M_},mt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ei},uv2Transform:{value:new Ei},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ei}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ei}}},nn={basic:{uniforms:Qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Qe([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Qe([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Qe([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Qe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Qe([mt.points,mt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Qe([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Qe([mt.common,mt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Qe([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Qe([mt.sprite,mt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ei},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Qe([mt.common,mt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Qe([mt.lights,mt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};nn.physical={uniforms:Qe([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new yt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Ho={r:0,b:0,g:0};function w_(s,t,e,i,n,r,o){const a=new jt(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(d,_){let S=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y));const x=s.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?p(a,l):y&&y.isColor&&(p(y,1),S=!0),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ga)?(h===void 0&&(h=new ui(new li(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:gs(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(u!==y||f!==y.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,m=s.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ui(new Vc(2,2),new Ai({name:"BackgroundMaterial",uniforms:gs(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,m=s.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,_){d.getRGB(Ho,Gf(s)),i.buffers.color.setClear(Ho.r,Ho.g,Ho.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(d,_=1){a.set(d),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(a,l)},render:g}}function T_(s,t,e,i){const n=s.getParameter(34921),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=d(null);let c=l,h=!1;function u(D,F,q,E,k){let et=!1;if(o){const nt=p(E,q,F);c!==nt&&(c=nt,m(c.object)),et=_(D,E,q,k),et&&S(D,E,q,k)}else{const nt=F.wireframe===!0;(c.geometry!==E.id||c.program!==q.id||c.wireframe!==nt)&&(c.geometry=E.id,c.program=q.id,c.wireframe=nt,et=!0)}k!==null&&e.update(k,34963),(et||h)&&(h=!1,v(D,F,q,E),k!==null&&s.bindBuffer(34963,e.get(k).buffer))}function f(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(D){return i.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function p(D,F,q){const E=q.wireframe===!0;let k=a[D.id];k===void 0&&(k={},a[D.id]=k);let et=k[F.id];et===void 0&&(et={},k[F.id]=et);let nt=et[E];return nt===void 0&&(nt=d(f()),et[E]=nt),nt}function d(D){const F=[],q=[],E=[];for(let k=0;k<n;k++)F[k]=0,q[k]=0,E[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:E,object:D,attributes:{},index:null}}function _(D,F,q,E){const k=c.attributes,et=F.attributes;let nt=0;const V=q.getAttributes();for(const H in V)if(V[H].location>=0){const Z=k[H];let at=et[H];if(at===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(at=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(at=D.instanceColor)),Z===void 0||Z.attribute!==at||at&&Z.data!==at.data)return!0;nt++}return c.attributesNum!==nt||c.index!==E}function S(D,F,q,E){const k={},et=F.attributes;let nt=0;const V=q.getAttributes();for(const H in V)if(V[H].location>=0){let Z=et[H];Z===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const at={};at.attribute=Z,Z&&Z.data&&(at.data=Z.data),k[H]=at,nt++}c.attributes=k,c.attributesNum=nt,c.index=E}function y(){const D=c.newAttributes;for(let F=0,q=D.length;F<q;F++)D[F]=0}function x(D){b(D,0)}function b(D,F){const q=c.newAttributes,E=c.enabledAttributes,k=c.attributeDivisors;q[D]=1,E[D]===0&&(s.enableVertexAttribArray(D),E[D]=1),k[D]!==F&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),k[D]=F)}function A(){const D=c.newAttributes,F=c.enabledAttributes;for(let q=0,E=F.length;q<E;q++)F[q]!==D[q]&&(s.disableVertexAttribArray(q),F[q]=0)}function C(D,F,q,E,k,et){i.isWebGL2===!0&&(q===5124||q===5125)?s.vertexAttribIPointer(D,F,q,k,et):s.vertexAttribPointer(D,F,q,E,k,et)}function v(D,F,q,E){if(i.isWebGL2===!1&&(D.isInstancedMesh||E.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const k=E.attributes,et=q.getAttributes(),nt=F.defaultAttributeValues;for(const V in et){const H=et[V];if(H.location>=0){let K=k[V];if(K===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const Z=K.normalized,at=K.itemSize,$=e.get(K);if($===void 0)continue;const Ht=$.buffer,ft=$.type,At=$.bytesPerElement;if(K.isInterleavedBufferAttribute){const lt=K.data,It=lt.stride,Pt=K.offset;if(lt.isInstancedInterleavedBuffer){for(let bt=0;bt<H.locationSize;bt++)b(H.location+bt,lt.meshPerAttribute);D.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let bt=0;bt<H.locationSize;bt++)x(H.location+bt);s.bindBuffer(34962,Ht);for(let bt=0;bt<H.locationSize;bt++)C(H.location+bt,at/H.locationSize,ft,Z,It*At,(Pt+at/H.locationSize*bt)*At)}else{if(K.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)b(H.location+lt,K.meshPerAttribute);D.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let lt=0;lt<H.locationSize;lt++)x(H.location+lt);s.bindBuffer(34962,Ht);for(let lt=0;lt<H.locationSize;lt++)C(H.location+lt,at/H.locationSize,ft,Z,at*At,at/H.locationSize*lt*At)}}else if(nt!==void 0){const Z=nt[V];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(H.location,Z);break;case 3:s.vertexAttrib3fv(H.location,Z);break;case 4:s.vertexAttrib4fv(H.location,Z);break;default:s.vertexAttrib1fv(H.location,Z)}}}}A()}function M(){it();for(const D in a){const F=a[D];for(const q in F){const E=F[q];for(const k in E)g(E[k].object),delete E[k];delete F[q]}delete a[D]}}function L(D){if(a[D.id]===void 0)return;const F=a[D.id];for(const q in F){const E=F[q];for(const k in E)g(E[k].object),delete E[k];delete F[q]}delete a[D.id]}function U(D){for(const F in a){const q=a[F];if(q[D.id]===void 0)continue;const E=q[D.id];for(const k in E)g(E[k].object),delete E[k];delete q[D.id]}}function it(){N(),h=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:it,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:x,disableUnusedAttributes:A}}function C_(s,t,e,i){const n=i.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,u){if(u===0)return;let f,m;if(n)f=s,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,h,u),e.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function E_(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),d=s.getParameter(36347),_=s.getParameter(36348),S=s.getParameter(36349),y=f>0,x=o||t.has("OES_texture_float"),b=y&&x,A=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:A}}function A_(s){const t=this;let e=null,i=0,n=!1,r=!1;const o=new nr,a=new Ei,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,m){const g=u.length!==0||f||i!==0||n;return n=f,e=h(u,m,0),i=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,f,m){const g=u.clippingPlanes,p=u.clipIntersection,d=u.clipShadows,_=s.get(u);if(!n||g===null||g.length===0||r&&!d)r?h(null):c();else{const S=r?0:i,y=S*4;let x=_.clippingState||null;l.value=x,x=h(g,f,y,m);for(let b=0;b!==y;++b)x[b]=e[b];_.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,m,g){const p=u!==null?u.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<_)&&(d=new Float32Array(_));for(let y=0,x=m;y!==p;++y,x+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(d,x),d[x+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,d}}function P_(s){let t=new WeakMap;function e(o,a){return a===nc?o.mapping=ds:a===rc&&(o.mapping=ps),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===nc||a===rc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vm(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Xa extends Vf{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Jr=4,cu=[.125,.215,.35,.446,.526,.582],cr=20,Ll=new Xa,hu=new jt;let Rl=null;const rr=(1+Math.sqrt(5))/2,Wr=1/rr,uu=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,rr,Wr),new z(0,rr,-Wr),new z(Wr,0,rr),new z(-Wr,0,rr),new z(rr,Wr,0),new z(-rr,Wr,0)];class fu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Rl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rl),t.scissorTest=!1,Wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rl=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:ro,format:Ji,encoding:wr,depthBuffer:!1},n=du(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L_(r)),this._blurMaterial=R_(r,t,e)}return n}_compileMaterial(t){const e=new ui(this._lodPlanes[0],t);this._renderer.compile(e,Ll)}_sceneToCubeUV(t,e,i,n){const a=new Oi(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(hu),h.toneMapping=Tn,h.autoClear=!1;const m=new ss({name:"PMREM.Background",side:Gi,depthWrite:!1,depthTest:!1}),g=new ui(new li,m);let p=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,p=!0):(m.color.copy(hu),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):S===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const y=this._cubeSize;Wo(n,S*y,_>2?y:0,y,y),h.setRenderTarget(n),p&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===ds||t.mapping===ps;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new ui(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Wo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ll)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=uu[(n-1)%uu.length];this._blur(t,n-1,n,r,o)}e.autoClear=i}_blur(t,e,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ui(this._lodPlanes[n],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*cr-1),p=r/g,d=isFinite(r)?1+Math.floor(h*p):cr;d>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${cr}`);const _=[];let S=0;for(let C=0;C<cr;++C){const v=C/p,M=Math.exp(-v*v/2);_.push(M),C===0?S+=M:C<d&&(S+=2*M)}for(let C=0;C<_.length;C++)_[C]=_[C]/S;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const x=this._sizeLods[n],b=3*x*(n>y-Jr?n-y+Jr:0),A=4*(this._cubeSize-x);Wo(e,b,A,3*x,2*x),l.setRenderTarget(e),l.render(u,Ll)}}function L_(s){const t=[],e=[],i=[];let n=s;const r=s-Jr+1+cu.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);e.push(a);let l=1/a;o>s-Jr?l=cu[o-s+Jr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,p=3,d=2,_=1,S=new Float32Array(p*g*m),y=new Float32Array(d*g*m),x=new Float32Array(_*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,v=A>2?0:-1,M=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];S.set(M,p*g*A),y.set(f,d*g*A);const L=[A,A,A,A,A,A];x.set(L,_*g*A)}const b=new Wi;b.setAttribute("position",new an(S,p)),b.setAttribute("uv",new an(y,d)),b.setAttribute("faceIndex",new an(x,_)),t.push(b),n>Jr&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function du(s,t,e){const i=new Ki(s,t,e);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function R_(s,t,e){const i=new Float32Array(cr),n=new z(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function pu(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function mu(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Hc(){return`

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
	`}function D_(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===nc||l===rc,h=l===ds||l===ps;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new fu(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&n(u)){e===null&&(e=new fu(s));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function z_(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function I_(s,t,e,i){const n={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete n[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],34962);const m=u.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)t.update(p[d],34962)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let y=0,x=S.length;y<x;y+=3){const b=S[y+0],A=S[y+1],C=S[y+2];f.push(b,A,A,C,C,b)}}else{const S=g.array;p=g.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const b=y+0,A=y+1,C=y+2;f.push(b,A,A,C,C,b)}}const d=new(If(f)?kf:Uf)(f,1);d.version=p;const _=r.get(u);_&&t.remove(_),r.set(u,d)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function O_(s,t,e,i){const n=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,m){s.drawElements(r,m,a,f*l),e.update(m,r,1)}function u(f,m,g){if(g===0)return;let p,d;if(n)p=s,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,a,f*l,g),e.update(m,r,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function N_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function F_(s,t){return s[0]-t[0]}function B_(s,t){return Math.abs(t[1])-Math.abs(s[1])}function U_(s,t,e){const i={},n=new Float32Array(8),r=new WeakMap,o=new Oe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,f){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=p!==void 0?p.length:0;let _=r.get(h);if(_===void 0||_.count!==d){let q=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",q)};var g=q;_!==void 0&&_.texture.dispose();const x=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],M=h.morphAttributes.color||[];let L=0;x===!0&&(L=1),b===!0&&(L=2),A===!0&&(L=3);let U=h.attributes.position.count*L,it=1;U>t.maxTextureSize&&(it=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const N=new Float32Array(U*it*4*d),D=new Bf(N,U,it,d);D.type=ur,D.needsUpdate=!0;const F=L*4;for(let E=0;E<d;E++){const k=C[E],et=v[E],nt=M[E],V=U*it*4*E;for(let H=0;H<k.count;H++){const K=H*F;x===!0&&(o.fromBufferAttribute(k,H),N[V+K+0]=o.x,N[V+K+1]=o.y,N[V+K+2]=o.z,N[V+K+3]=0),b===!0&&(o.fromBufferAttribute(et,H),N[V+K+4]=o.x,N[V+K+5]=o.y,N[V+K+6]=o.z,N[V+K+7]=0),A===!0&&(o.fromBufferAttribute(nt,H),N[V+K+8]=o.x,N[V+K+9]=o.y,N[V+K+10]=o.z,N[V+K+11]=nt.itemSize===4?o.w:1)}}_={count:d,texture:D,size:new yt(U,it)},r.set(h,_),h.addEventListener("dispose",q)}let S=0;for(let x=0;x<m.length;x++)S+=m[x];const y=h.morphTargetsRelative?1:1-S;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=i[h.id];if(d===void 0||d.length!==p){d=[];for(let b=0;b<p;b++)d[b]=[b,0];i[h.id]=d}for(let b=0;b<p;b++){const A=d[b];A[0]=b,A[1]=m[b]}d.sort(B_);for(let b=0;b<8;b++)b<p&&d[b][1]?(a[b][0]=d[b][0],a[b][1]=d[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(F_);const _=h.morphAttributes.position,S=h.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const A=a[b],C=A[0],v=A[1];C!==Number.MAX_SAFE_INTEGER&&v?(_&&h.getAttribute("morphTarget"+b)!==_[C]&&h.setAttribute("morphTarget"+b,_[C]),S&&h.getAttribute("morphNormal"+b)!==S[C]&&h.setAttribute("morphNormal"+b,S[C]),n[b]=v,y+=v):(_&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),S&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),n[b]=0)}const x=h.morphTargetsRelative?1:1-y;f.getUniforms().setValue(s,"morphTargetBaseInfluence",x),f.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function k_(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);return n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Xf=new fi,qf=new Bf,Yf=new Em,$f=new Hf,gu=[],_u=[],xu=new Float32Array(16),vu=new Float32Array(9),yu=new Float32Array(4);function Es(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=gu[n];if(r===void 0&&(r=new Float32Array(n),gu[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function qa(s,t){let e=_u[t];e===void 0&&(e=new Int32Array(t),_u[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function G_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function V_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function H_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function W_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function X_(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ae(e,i))return;yu.set(i),s.uniformMatrix2fv(this.addr,!1,yu),Pe(e,i)}}function q_(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ae(e,i))return;vu.set(i),s.uniformMatrix3fv(this.addr,!1,vu),Pe(e,i)}}function Y_(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ae(e,i))return;xu.set(i),s.uniformMatrix4fv(this.addr,!1,xu),Pe(e,i)}}function $_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Z_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function j_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function J_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function K_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Q_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function tx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function ex(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function ix(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2D(t||Xf,n)}function nx(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Yf,n)}function rx(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||$f,n)}function sx(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||qf,n)}function ox(s){switch(s){case 5126:return G_;case 35664:return V_;case 35665:return H_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return $_;case 35667:case 35671:return Z_;case 35668:case 35672:return j_;case 35669:case 35673:return J_;case 5125:return K_;case 36294:return Q_;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return sx}}function ax(s,t){s.uniform1fv(this.addr,t)}function lx(s,t){const e=Es(t,this.size,2);s.uniform2fv(this.addr,e)}function cx(s,t){const e=Es(t,this.size,3);s.uniform3fv(this.addr,e)}function hx(s,t){const e=Es(t,this.size,4);s.uniform4fv(this.addr,e)}function ux(s,t){const e=Es(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function fx(s,t){const e=Es(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function dx(s,t){const e=Es(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function px(s,t){s.uniform1iv(this.addr,t)}function mx(s,t){s.uniform2iv(this.addr,t)}function gx(s,t){s.uniform3iv(this.addr,t)}function _x(s,t){s.uniform4iv(this.addr,t)}function xx(s,t){s.uniform1uiv(this.addr,t)}function vx(s,t){s.uniform2uiv(this.addr,t)}function yx(s,t){s.uniform3uiv(this.addr,t)}function bx(s,t){s.uniform4uiv(this.addr,t)}function Sx(s,t,e){const i=this.cache,n=t.length,r=qa(e,n);Ae(i,r)||(s.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Xf,r[o])}function Mx(s,t,e){const i=this.cache,n=t.length,r=qa(e,n);Ae(i,r)||(s.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Yf,r[o])}function wx(s,t,e){const i=this.cache,n=t.length,r=qa(e,n);Ae(i,r)||(s.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||$f,r[o])}function Tx(s,t,e){const i=this.cache,n=t.length,r=qa(e,n);Ae(i,r)||(s.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||qf,r[o])}function Cx(s){switch(s){case 5126:return ax;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return ux;case 35675:return fx;case 35676:return dx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return xx;case 36294:return vx;case 36295:return yx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Tx}}class Ex{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=ox(e.type)}}class Ax{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Cx(e.type)}}class Px{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(t,e[a.id],i)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function bu(s,t){s.seq.push(t),s.map[t.id]=t}function Lx(s,t,e){const i=s.name,n=i.length;for(Dl.lastIndex=0;;){const r=Dl.exec(i),o=Dl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){bu(e,c===void 0?new Ex(a,s,t):new Ax(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Px(a),bu(e,u)),e=u}}}class da{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);Lx(r,o,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function Su(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}let Rx=0;function Dx(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function zx(s){switch(s){case wr:return["Linear","( value )"];case he:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Mu(s,t,e){const i=s.getShaderParameter(t,35713),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Dx(s.getShaderSource(t),o)}else return n}function Ix(s,t){const e=zx(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Ox(s,t){let e;switch(t){case tm:e="Linear";break;case em:e="Reinhard";break;case im:e="OptimizedCineon";break;case nm:e="ACESFilmic";break;case rm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Nx(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function Fx(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Bx(s,t){const e={},i=s.getProgramParameter(t,35721);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Us(s){return s!==""}function wu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(s){return s.replace(Ux,kx)}function kx(s,t){const e=Xt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return cc(e)}const Gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(s){return s.replace(Gx,Vx)}function Vx(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Eu(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ef?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Dp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Bs&&(t="SHADOWMAP_TYPE_VSM"),t}function Wx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ds:case ps:t="ENVMAP_TYPE_CUBE";break;case Ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ps:t="ENVMAP_MODE_REFRACTION";break}return t}function qx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lf:t="ENVMAP_BLENDING_MULTIPLY";break;case Kp:t="ENVMAP_BLENDING_MIX";break;case Qp:t="ENVMAP_BLENDING_ADD";break}return t}function Yx(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function $x(s,t,e,i){const n=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Hx(e),c=Wx(e),h=Xx(e),u=qx(e),f=Yx(e),m=e.isWebGL2?"":Nx(e),g=Fx(r),p=n.createProgram();let d,_,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[g].filter(Us).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(Us).join(`
`),_.length>0&&(_+=`
`)):(d=[Eu(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),_=[m,Eu(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Ox("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.encodings_pars_fragment,Ix("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),o=cc(o),o=wu(o,e),o=Tu(o,e),a=cc(a),a=wu(a,e),a=Tu(a,e),o=Cu(o),a=Cu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",e.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=S+d+o,x=S+_+a,b=Su(n,35633,y),A=Su(n,35632,x);if(n.attachShader(p,b),n.attachShader(p,A),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p),s.debug.checkShaderErrors){const M=n.getProgramInfoLog(p).trim(),L=n.getShaderInfoLog(b).trim(),U=n.getShaderInfoLog(A).trim();let it=!0,N=!0;if(n.getProgramParameter(p,35714)===!1){it=!1;const D=Mu(n,b,"vertex"),F=Mu(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,35715)+`

Program Info Log: `+M+`
`+D+`
`+F)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(L===""||U==="")&&(N=!1);N&&(this.diagnostics={runnable:it,programLog:M,vertexShader:{log:L,prefix:d},fragmentShader:{log:U,prefix:_}})}n.deleteShader(b),n.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new da(n,p)),C};let v;return this.getAttributes=function(){return v===void 0&&(v=Bx(n,p)),v},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Rx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=A,this}let Zx=0;class jx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Jx(t),e.set(t,i)),i}}class Jx{constructor(t){this.id=Zx++,this.code=t,this.usedTimes=0}}function Kx(s,t,e,i,n,r,o){const a=new Wa,l=new jx,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,f=n.vertexTextures;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,M,L,U,it){const N=U.fog,D=it.geometry,F=v.isMeshStandardMaterial?U.environment:null,q=(v.isMeshStandardMaterial?e:t).get(v.envMap||F),E=q&&q.mapping===Ga?q.image.height:null,k=g[v.type];v.precision!==null&&(m=n.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const et=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,nt=et!==void 0?et.length:0;let V=0;D.morphAttributes.position!==void 0&&(V=1),D.morphAttributes.normal!==void 0&&(V=2),D.morphAttributes.color!==void 0&&(V=3);let H,K,Z,at;if(k){const It=nn[k];H=It.vertexShader,K=It.fragmentShader}else H=v.vertexShader,K=v.fragmentShader,l.update(v),Z=l.getVertexShaderID(v),at=l.getFragmentShaderID(v);const $=s.getRenderTarget(),Ht=v.alphaTest>0,ft=v.clearcoat>0,At=v.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:v.type,vertexShader:H,fragmentShader:K,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:it.isInstancedMesh===!0,instancingColor:it.isInstancedMesh===!0&&it.instanceColor!==null,supportsVertexTextures:f,outputEncoding:$===null?s.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:wr,map:!!v.map,matcap:!!v.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:E,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Mm,tangentSpaceNormalMap:v.normalMapType===zf,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===he,clearcoat:ft,clearcoatMap:ft&&!!v.clearcoatMap,clearcoatRoughnessMap:ft&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ft&&!!v.clearcoatNormalMap,iridescence:At,iridescenceMap:At&&!!v.iridescenceMap,iridescenceThicknessMap:At&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===ns,alphaMap:!!v.alphaMap,alphaTest:Ht,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:it.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:V,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:Tn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Sn,flipSided:v.side===Gi,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)M.push(L),M.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(_(M,v),S(M,v),M.push(s.outputEncoding)),M.push(v.customProgramCacheKey),M.join()}function _(v,M){v.push(M.precision),v.push(M.outputEncoding),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.combine),v.push(M.vertexUvs),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function S(v,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.map&&a.enable(4),M.matcap&&a.enable(5),M.envMap&&a.enable(6),M.lightMap&&a.enable(7),M.aoMap&&a.enable(8),M.emissiveMap&&a.enable(9),M.bumpMap&&a.enable(10),M.normalMap&&a.enable(11),M.objectSpaceNormalMap&&a.enable(12),M.tangentSpaceNormalMap&&a.enable(13),M.clearcoat&&a.enable(14),M.clearcoatMap&&a.enable(15),M.clearcoatRoughnessMap&&a.enable(16),M.clearcoatNormalMap&&a.enable(17),M.iridescence&&a.enable(18),M.iridescenceMap&&a.enable(19),M.iridescenceThicknessMap&&a.enable(20),M.displacementMap&&a.enable(21),M.specularMap&&a.enable(22),M.roughnessMap&&a.enable(23),M.metalnessMap&&a.enable(24),M.gradientMap&&a.enable(25),M.alphaMap&&a.enable(26),M.alphaTest&&a.enable(27),M.vertexColors&&a.enable(28),M.vertexAlphas&&a.enable(29),M.vertexUvs&&a.enable(30),M.vertexTangents&&a.enable(31),M.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.physicallyCorrectLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.specularIntensityMap&&a.enable(15),M.specularColorMap&&a.enable(16),M.transmission&&a.enable(17),M.transmissionMap&&a.enable(18),M.thicknessMap&&a.enable(19),M.sheen&&a.enable(20),M.sheenColorMap&&a.enable(21),M.sheenRoughnessMap&&a.enable(22),M.decodeVideoTexture&&a.enable(23),M.opaque&&a.enable(24),v.push(a.mask)}function y(v){const M=g[v.type];let L;if(M){const U=nn[M];L=Ca.clone(U.uniforms)}else L=v.uniforms;return L}function x(v,M){let L;for(let U=0,it=c.length;U<it;U++){const N=c[U];if(N.cacheKey===M){L=N,++L.usedTimes;break}}return L===void 0&&(L=new $x(s,M,v,r),c.push(L)),L}function b(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:x,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:C}}function Qx(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function i(r,o,a){s.get(r)[o]=a}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function tv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Au(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Pu(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,f,m,g,p,d){let _=s[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:p,group:d},s[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=p,_.group=d),t++,_}function a(u,f,m,g,p,d){const _=o(u,f,m,g,p,d);m.transmission>0?i.push(_):m.transparent===!0?n.push(_):e.push(_)}function l(u,f,m,g,p,d){const _=o(u,f,m,g,p,d);m.transmission>0?i.unshift(_):m.transparent===!0?n.unshift(_):e.unshift(_)}function c(u,f){e.length>1&&e.sort(u||tv),i.length>1&&i.sort(f||Au),n.length>1&&n.sort(f||Au)}function h(){for(let u=t,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function ev(){let s=new WeakMap;function t(i,n){const r=s.get(i);let o;return r===void 0?(o=new Pu,s.set(i,[o])):n>=r.length?(o=new Pu,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function iv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new jt};break;case"SpotLight":e={position:new z,direction:new z,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new z,halfWidth:new z,halfHeight:new z};break}return s[t.id]=e,e}}}function nv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let rv=0;function sv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ov(s,t){const e=new iv,i=nv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new z);const r=new z,o=new ve,a=new ve;function l(h,u){let f=0,m=0,g=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,d=0,_=0,S=0,y=0,x=0,b=0,A=0,C=0,v=0;h.sort(sv);const M=u!==!0?Math.PI:1;for(let U=0,it=h.length;U<it;U++){const N=h[U],D=N.color,F=N.intensity,q=N.distance,E=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=D.r*F*M,m+=D.g*F*M,g+=D.b*F*M;else if(N.isLightProbe)for(let k=0;k<9;k++)n.probe[k].addScaledVector(N.sh.coefficients[k],F);else if(N.isDirectionalLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const et=N.shadow,nt=i.get(N);nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,n.directionalShadow[p]=nt,n.directionalShadowMap[p]=E,n.directionalShadowMatrix[p]=N.shadow.matrix,x++}n.directional[p]=k,p++}else if(N.isSpotLight){const k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(D).multiplyScalar(F*M),k.distance=q,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,n.spot[_]=k;const et=N.shadow;if(N.map&&(n.spotLightMap[C]=N.map,C++,et.updateMatrices(N),N.castShadow&&v++),n.spotLightMatrix[_]=et.matrix,N.castShadow){const nt=i.get(N);nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,n.spotShadow[_]=nt,n.spotShadowMap[_]=E,A++}_++}else if(N.isRectAreaLight){const k=e.get(N);k.color.copy(D).multiplyScalar(F),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),n.rectArea[S]=k,S++}else if(N.isPointLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*M),k.distance=N.distance,k.decay=N.decay,N.castShadow){const et=N.shadow,nt=i.get(N);nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,nt.shadowCameraNear=et.camera.near,nt.shadowCameraFar=et.camera.far,n.pointShadow[d]=nt,n.pointShadowMap[d]=E,n.pointShadowMatrix[d]=N.shadow.matrix,b++}n.point[d]=k,d++}else if(N.isHemisphereLight){const k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(F*M),k.groundColor.copy(N.groundColor).multiplyScalar(F*M),n.hemi[y]=k,y++}}S>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=g;const L=n.hash;(L.directionalLength!==p||L.pointLength!==d||L.spotLength!==_||L.rectAreaLength!==S||L.hemiLength!==y||L.numDirectionalShadows!==x||L.numPointShadows!==b||L.numSpotShadows!==A||L.numSpotMaps!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=S,n.point.length=d,n.hemi.length=y,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=A+C-v,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=v,L.directionalLength=p,L.pointLength=d,L.spotLength=_,L.rectAreaLength=S,L.hemiLength=y,L.numDirectionalShadows=x,L.numPointShadows=b,L.numSpotShadows=A,L.numSpotMaps=C,n.version=rv++)}function c(h,u){let f=0,m=0,g=0,p=0,d=0;const _=u.matrixWorldInverse;for(let S=0,y=h.length;S<y;S++){const x=h[S];if(x.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),f++}else if(x.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const b=n.rectArea[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),a.identity(),o.copy(x.matrixWorld),o.premultiply(_),a.extractRotation(o),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),m++}else if(x.isHemisphereLight){const b=n.hemi[d];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:n}}function Lu(s,t){const e=new ov(s,t),i=[],n=[];function r(){i.length=0,n.length=0}function o(u){i.push(u)}function a(u){n.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function av(s,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Lu(s,t),e.set(r,[l])):o>=a.length?(l=new Lu(s,t),a.push(l)):l=a[o],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class lv extends Cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cv extends Cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
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
}`;function fv(s,t,e){let i=new Gc;const n=new yt,r=new yt,o=new Oe,a=new lv({depthPacking:Sm}),l=new cv,c={},h=e.maxTextureSize,u={0:Gi,1:fs,2:Sn},f=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:hv,fragmentShader:uv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Wi;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ui(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ef,this.render=function(x,b,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||x.length===0)return;const C=s.getRenderTarget(),v=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Vn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let U=0,it=x.length;U<it;U++){const N=x[U],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;n.copy(D.mapSize);const F=D.getFrameExtents();if(n.multiply(F),r.copy(D.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/F.x),n.x=r.x*F.x,D.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/F.y),n.y=r.y*F.y,D.mapSize.y=r.y)),D.map===null){const E=this.type!==Bs?{minFilter:hi,magFilter:hi}:{};D.map=new Ki(n.x,n.y,E),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const q=D.getViewportCount();for(let E=0;E<q;E++){const k=D.getViewport(E);o.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),L.viewport(o),D.updateMatrices(N,E),i=D.getFrustum(),y(b,A,D.camera,N,this.type)}D.isPointLightShadow!==!0&&this.type===Bs&&_(D,A),D.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(C,v,M)};function _(x,b){const A=t.update(p);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Ki(n.x,n.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,s.setRenderTarget(x.mapPass),s.clear(),s.renderBufferDirect(b,null,A,f,p,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,s.setRenderTarget(x.map),s.clear(),s.renderBufferDirect(b,null,A,m,p,null)}function S(x,b,A,C,v,M){let L=null;const U=A.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(U!==void 0?L=U:L=A.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const it=L.uuid,N=b.uuid;let D=c[it];D===void 0&&(D={},c[it]=D);let F=D[N];F===void 0&&(F=L.clone(),D[N]=F),L=F}return L.visible=b.visible,L.wireframe=b.wireframe,M===Bs?L.side=b.shadowSide!==null?b.shadowSide:b.side:L.side=b.shadowSide!==null?b.shadowSide:u[b.side],L.alphaMap=b.alphaMap,L.alphaTest=b.alphaTest,L.map=b.map,L.clipShadows=b.clipShadows,L.clippingPlanes=b.clippingPlanes,L.clipIntersection=b.clipIntersection,L.displacementMap=b.displacementMap,L.displacementScale=b.displacementScale,L.displacementBias=b.displacementBias,L.wireframeLinewidth=b.wireframeLinewidth,L.linewidth=b.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(A.matrixWorld),L.nearDistance=C,L.farDistance=v),L}function y(x,b,A,C,v){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&v===Bs)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);const U=t.update(x),it=x.material;if(Array.isArray(it)){const N=U.groups;for(let D=0,F=N.length;D<F;D++){const q=N[D],E=it[q.materialIndex];if(E&&E.visible){const k=S(x,E,C,A.near,A.far,v);s.renderBufferDirect(A,null,U,k,x,q)}}}else if(it.visible){const N=S(x,it,C,A.near,A.far,v);s.renderBufferDirect(A,null,U,N,x,null)}}const L=x.children;for(let U=0,it=L.length;U<it;U++)y(L[U],b,A,C,v)}}function dv(s,t,e){const i=e.isWebGL2;function n(){let R=!1;const Y=new Oe;let ot=null;const gt=new Oe(0,0,0,0);return{setMask:function(St){ot!==St&&!R&&(s.colorMask(St,St,St,St),ot=St)},setLocked:function(St){R=St},setClear:function(St,ct,j,ut,Mt){Mt===!0&&(St*=ut,ct*=ut,j*=ut),Y.set(St,ct,j,ut),gt.equals(Y)===!1&&(s.clearColor(St,ct,j,ut),gt.copy(Y))},reset:function(){R=!1,ot=null,gt.set(-1,0,0,0)}}}function r(){let R=!1,Y=null,ot=null,gt=null;return{setTest:function(St){St?Ht(2929):ft(2929)},setMask:function(St){Y!==St&&!R&&(s.depthMask(St),Y=St)},setFunc:function(St){if(ot!==St){switch(St){case Xp:s.depthFunc(512);break;case qp:s.depthFunc(519);break;case Yp:s.depthFunc(513);break;case ic:s.depthFunc(515);break;case $p:s.depthFunc(514);break;case Zp:s.depthFunc(518);break;case jp:s.depthFunc(516);break;case Jp:s.depthFunc(517);break;default:s.depthFunc(515)}ot=St}},setLocked:function(St){R=St},setClear:function(St){gt!==St&&(s.clearDepth(St),gt=St)},reset:function(){R=!1,Y=null,ot=null,gt=null}}}function o(){let R=!1,Y=null,ot=null,gt=null,St=null,ct=null,j=null,ut=null,Mt=null;return{setTest:function(st){R||(st?Ht(2960):ft(2960))},setMask:function(st){Y!==st&&!R&&(s.stencilMask(st),Y=st)},setFunc:function(st,Q,pt){(ot!==st||gt!==Q||St!==pt)&&(s.stencilFunc(st,Q,pt),ot=st,gt=Q,St=pt)},setOp:function(st,Q,pt){(ct!==st||j!==Q||ut!==pt)&&(s.stencilOp(st,Q,pt),ct=st,j=Q,ut=pt)},setLocked:function(st){R=st},setClear:function(st){Mt!==st&&(s.clearStencil(st),Mt=st)},reset:function(){R=!1,Y=null,ot=null,gt=null,St=null,ct=null,j=null,ut=null,Mt=null}}}const a=new n,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,p=[],d=null,_=!1,S=null,y=null,x=null,b=null,A=null,C=null,v=null,M=!1,L=null,U=null,it=null,N=null,D=null;const F=s.getParameter(35661);let q=!1,E=0;const k=s.getParameter(7938);k.indexOf("WebGL")!==-1?(E=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=E>=1):k.indexOf("OpenGL ES")!==-1&&(E=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=E>=2);let et=null,nt={};const V=s.getParameter(3088),H=s.getParameter(2978),K=new Oe().fromArray(V),Z=new Oe().fromArray(H);function at(R,Y,ot){const gt=new Uint8Array(4),St=s.createTexture();s.bindTexture(R,St),s.texParameteri(R,10241,9728),s.texParameteri(R,10240,9728);for(let ct=0;ct<ot;ct++)s.texImage2D(Y+ct,0,6408,1,1,0,6408,5121,gt);return St}const $={};$[3553]=at(3553,3553,1),$[34067]=at(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ht(2929),l.setFunc(ic),ne(!1),ce(bh),Ht(2884),$t(Vn);function Ht(R){f[R]!==!0&&(s.enable(R),f[R]=!0)}function ft(R){f[R]!==!1&&(s.disable(R),f[R]=!1)}function At(R,Y){return m[R]!==Y?(s.bindFramebuffer(R,Y),m[R]=Y,i&&(R===36009&&(m[36160]=Y),R===36160&&(m[36009]=Y)),!0):!1}function lt(R,Y){let ot=p,gt=!1;if(R)if(ot=g.get(Y),ot===void 0&&(ot=[],g.set(Y,ot)),R.isWebGLMultipleRenderTargets){const St=R.texture;if(ot.length!==St.length||ot[0]!==36064){for(let ct=0,j=St.length;ct<j;ct++)ot[ct]=36064+ct;ot.length=St.length,gt=!0}}else ot[0]!==36064&&(ot[0]=36064,gt=!0);else ot[0]!==1029&&(ot[0]=1029,gt=!0);gt&&(e.isWebGL2?s.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function It(R){return d!==R?(s.useProgram(R),d=R,!0):!1}const Pt={[$r]:32774,[Ip]:32778,[Op]:32779};if(i)Pt[wh]=32775,Pt[Th]=32776;else{const R=t.get("EXT_blend_minmax");R!==null&&(Pt[wh]=R.MIN_EXT,Pt[Th]=R.MAX_EXT)}const bt={[Np]:0,[Fp]:1,[Bp]:768,[Af]:770,[Wp]:776,[Vp]:774,[kp]:772,[Up]:769,[Pf]:771,[Hp]:775,[Gp]:773};function $t(R,Y,ot,gt,St,ct,j,ut){if(R===Vn){_===!0&&(ft(3042),_=!1);return}if(_===!1&&(Ht(3042),_=!0),R!==zp){if(R!==S||ut!==M){if((y!==$r||A!==$r)&&(s.blendEquation(32774),y=$r,A=$r),ut)switch(R){case ns:s.blendFuncSeparate(1,771,1,771);break;case ec:s.blendFunc(1,1);break;case Sh:s.blendFuncSeparate(0,769,0,1);break;case Mh:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ns:s.blendFuncSeparate(770,771,1,771);break;case ec:s.blendFunc(770,1);break;case Sh:s.blendFuncSeparate(0,769,0,1);break;case Mh:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}x=null,b=null,C=null,v=null,S=R,M=ut}return}St=St||Y,ct=ct||ot,j=j||gt,(Y!==y||St!==A)&&(s.blendEquationSeparate(Pt[Y],Pt[St]),y=Y,A=St),(ot!==x||gt!==b||ct!==C||j!==v)&&(s.blendFuncSeparate(bt[ot],bt[gt],bt[ct],bt[j]),x=ot,b=gt,C=ct,v=j),S=R,M=!1}function G(R,Y){R.side===Sn?ft(2884):Ht(2884);let ot=R.side===Gi;Y&&(ot=!ot),ne(ot),R.blending===ns&&R.transparent===!1?$t(Vn):$t(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const gt=R.stencilWrite;c.setTest(gt),gt&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ut(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ht(32926):ft(32926)}function ne(R){L!==R&&(R?s.frontFace(2304):s.frontFace(2305),L=R)}function ce(R){R!==Lp?(Ht(2884),R!==U&&(R===bh?s.cullFace(1029):R===Rp?s.cullFace(1028):s.cullFace(1032))):ft(2884),U=R}function Nt(R){R!==it&&(q&&s.lineWidth(R),it=R)}function Ut(R,Y,ot){R?(Ht(32823),(N!==Y||D!==ot)&&(s.polygonOffset(Y,ot),N=Y,D=ot)):ft(32823)}function we(R){R?Ht(3089):ft(3089)}function Te(R){R===void 0&&(R=33984+F-1),et!==R&&(s.activeTexture(R),et=R)}function P(R,Y,ot){ot===void 0&&(et===null?ot=33984+F-1:ot=et);let gt=nt[ot];gt===void 0&&(gt={type:void 0,texture:void 0},nt[ot]=gt),(gt.type!==R||gt.texture!==Y)&&(et!==ot&&(s.activeTexture(ot),et=ot),s.bindTexture(R,Y||$[R]),gt.type=R,gt.texture=Y)}function w(){const R=nt[et];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function B(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function rt(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ct(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Lt(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Et(R){K.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),K.copy(R))}function Tt(R){Z.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),Z.copy(R))}function xt(R,Y){let ot=u.get(Y);ot===void 0&&(ot=new WeakMap,u.set(Y,ot));let gt=ot.get(R);gt===void 0&&(gt=s.getUniformBlockIndex(Y,R.name),ot.set(R,gt))}function Kt(R,Y){const gt=u.get(Y).get(R);h.get(R)!==gt&&(s.uniformBlockBinding(Y,gt,R.__bindingPointIndex),h.set(R,gt))}function te(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),i===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},et=null,nt={},m={},g=new WeakMap,p=[],d=null,_=!1,S=null,y=null,x=null,b=null,A=null,C=null,v=null,M=!1,L=null,U=null,it=null,N=null,D=null,K.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ht,disable:ft,bindFramebuffer:At,drawBuffers:lt,useProgram:It,setBlending:$t,setMaterial:G,setFlipSided:ne,setCullFace:ce,setLineWidth:Nt,setPolygonOffset:Ut,setScissorTest:we,activeTexture:Te,bindTexture:P,unbindTexture:w,compressedTexImage2D:B,compressedTexImage3D:tt,texImage2D:Lt,texImage3D:_t,updateUBOMapping:xt,uniformBlockBinding:Kt,texStorage2D:J,texStorage3D:Ct,texSubImage2D:rt,texSubImage3D:dt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:ht,scissor:Et,viewport:Tt,reset:te}}function pv(s,t,e,i,n,r,o){const a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,w){return _?new OffscreenCanvas(P,w):oo("canvas")}function y(P,w,B,tt){let rt=1;if((P.width>tt||P.height>tt)&&(rt=tt/Math.max(P.width,P.height)),rt<1||w===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const dt=w?lc:Math.floor,Dt=dt(rt*P.width),ht=dt(rt*P.height);p===void 0&&(p=S(Dt,ht));const J=B?S(Dt,ht):p;return J.width=Dt,J.height=ht,J.getContext("2d").drawImage(P,0,0,Dt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Dt+"x"+ht+")."),J}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return Kh(P.width)&&Kh(P.height)}function b(P){return a?!1:P.wrapS!==ji||P.wrapT!==ji||P.minFilter!==hi&&P.minFilter!==Ii}function A(P,w){return P.generateMipmaps&&w&&P.minFilter!==hi&&P.minFilter!==Ii}function C(P){s.generateMipmap(P)}function v(P,w,B,tt,rt=!1){if(a===!1)return w;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let dt=w;return w===6403&&(B===5126&&(dt=33326),B===5131&&(dt=33325),B===5121&&(dt=33321)),w===33319&&(B===5126&&(dt=33328),B===5131&&(dt=33327),B===5121&&(dt=33323)),w===6408&&(B===5126&&(dt=34836),B===5131&&(dt=34842),B===5121&&(dt=tt===he&&rt===!1?35907:32856),B===32819&&(dt=32854),B===32820&&(dt=32855)),(dt===33325||dt===33326||dt===33327||dt===33328||dt===34842||dt===34836)&&t.get("EXT_color_buffer_float"),dt}function M(P,w,B){return A(P,B)===!0||P.isFramebufferTexture&&P.minFilter!==hi&&P.minFilter!==Ii?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function L(P){return P===hi||P===Ch||P===Eh?9728:9729}function U(P){const w=P.target;w.removeEventListener("dispose",U),N(w),w.isVideoTexture&&g.delete(w)}function it(P){const w=P.target;w.removeEventListener("dispose",it),F(w)}function N(P){const w=i.get(P);if(w.__webglInit===void 0)return;const B=P.source,tt=d.get(B);if(tt){const rt=tt[w.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&D(P),Object.keys(tt).length===0&&d.delete(B)}i.remove(P)}function D(P){const w=i.get(P);s.deleteTexture(w.__webglTexture);const B=P.source,tt=d.get(B);delete tt[w.__cacheKey],o.memory.textures--}function F(P){const w=P.texture,B=i.get(P),tt=i.get(w);if(tt.__webglTexture!==void 0&&(s.deleteTexture(tt.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)s.deleteFramebuffer(B.__webglFramebuffer[rt]),B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[rt]);else{if(s.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let rt=0;rt<B.__webglColorRenderbuffer.length;rt++)B.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[rt]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let rt=0,dt=w.length;rt<dt;rt++){const Dt=i.get(w[rt]);Dt.__webglTexture&&(s.deleteTexture(Dt.__webglTexture),o.memory.textures--),i.remove(w[rt])}i.remove(w),i.remove(P)}let q=0;function E(){q=0}function k(){const P=q;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),q+=1,P}function et(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.encoding),w.join()}function nt(P,w){const B=i.get(P);if(P.isVideoTexture&&we(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){const tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(B,P,w);return}}e.bindTexture(3553,B.__webglTexture,33984+w)}function V(P,w){const B=i.get(P);if(P.version>0&&B.__version!==P.version){ft(B,P,w);return}e.bindTexture(35866,B.__webglTexture,33984+w)}function H(P,w){const B=i.get(P);if(P.version>0&&B.__version!==P.version){ft(B,P,w);return}e.bindTexture(32879,B.__webglTexture,33984+w)}function K(P,w){const B=i.get(P);if(P.version>0&&B.__version!==P.version){At(B,P,w);return}e.bindTexture(34067,B.__webglTexture,33984+w)}const Z={[sc]:10497,[ji]:33071,[oc]:33648},at={[hi]:9728,[Ch]:9984,[Eh]:9986,[Ii]:9729,[sm]:9985,[Va]:9987};function $(P,w,B){if(B?(s.texParameteri(P,10242,Z[w.wrapS]),s.texParameteri(P,10243,Z[w.wrapT]),(P===32879||P===35866)&&s.texParameteri(P,32882,Z[w.wrapR]),s.texParameteri(P,10240,at[w.magFilter]),s.texParameteri(P,10241,at[w.minFilter])):(s.texParameteri(P,10242,33071),s.texParameteri(P,10243,33071),(P===32879||P===35866)&&s.texParameteri(P,32882,33071),(w.wrapS!==ji||w.wrapT!==ji)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,10240,L(w.magFilter)),s.texParameteri(P,10241,L(w.minFilter)),w.minFilter!==hi&&w.minFilter!==Ii&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(w.type===ur&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===ro&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(s.texParameterf(P,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Ht(P,w){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",U));const tt=w.source;let rt=d.get(tt);rt===void 0&&(rt={},d.set(tt,rt));const dt=et(w);if(dt!==P.__cacheKey){rt[dt]===void 0&&(rt[dt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),rt[dt].usedTimes++;const Dt=rt[P.__cacheKey];Dt!==void 0&&(rt[P.__cacheKey].usedTimes--,Dt.usedTimes===0&&D(w)),P.__cacheKey=dt,P.__webglTexture=rt[dt].texture}return B}function ft(P,w,B){let tt=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(tt=35866),w.isData3DTexture&&(tt=32879);const rt=Ht(P,w),dt=w.source;e.bindTexture(tt,P.__webglTexture,33984+B);const Dt=i.get(dt);if(dt.version!==Dt.__version||rt===!0){e.activeTexture(33984+B),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const ht=b(w)&&x(w.image)===!1;let J=y(w.image,ht,!1,h);J=Te(w,J);const Ct=x(J)||a,Lt=r.convert(w.format,w.encoding);let _t=r.convert(w.type),Et=v(w.internalFormat,Lt,_t,w.encoding,w.isVideoTexture);$(tt,w,Ct);let Tt;const xt=w.mipmaps,Kt=a&&w.isVideoTexture!==!0,te=Dt.__version===void 0||rt===!0,R=M(w,J,Ct);if(w.isDepthTexture)Et=6402,a?w.type===ur?Et=36012:w.type===hr?Et=33190:w.type===rs?Et=35056:Et=33189:w.type===ur&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===pr&&Et===6402&&w.type!==Df&&w.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=hr,_t=r.convert(w.type)),w.format===ms&&Et===6402&&(Et=34041,w.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=rs,_t=r.convert(w.type))),te&&(Kt?e.texStorage2D(3553,1,Et,J.width,J.height):e.texImage2D(3553,0,Et,J.width,J.height,0,Lt,_t,null));else if(w.isDataTexture)if(xt.length>0&&Ct){Kt&&te&&e.texStorage2D(3553,R,Et,xt[0].width,xt[0].height);for(let Y=0,ot=xt.length;Y<ot;Y++)Tt=xt[Y],Kt?e.texSubImage2D(3553,Y,0,0,Tt.width,Tt.height,Lt,_t,Tt.data):e.texImage2D(3553,Y,Et,Tt.width,Tt.height,0,Lt,_t,Tt.data);w.generateMipmaps=!1}else Kt?(te&&e.texStorage2D(3553,R,Et,J.width,J.height),e.texSubImage2D(3553,0,0,0,J.width,J.height,Lt,_t,J.data)):e.texImage2D(3553,0,Et,J.width,J.height,0,Lt,_t,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Kt&&te&&e.texStorage3D(35866,R,Et,xt[0].width,xt[0].height,J.depth);for(let Y=0,ot=xt.length;Y<ot;Y++)Tt=xt[Y],w.format!==Ji?Lt!==null?Kt?e.compressedTexSubImage3D(35866,Y,0,0,0,Tt.width,Tt.height,J.depth,Lt,Tt.data,0,0):e.compressedTexImage3D(35866,Y,Et,Tt.width,Tt.height,J.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage3D(35866,Y,0,0,0,Tt.width,Tt.height,J.depth,Lt,_t,Tt.data):e.texImage3D(35866,Y,Et,Tt.width,Tt.height,J.depth,0,Lt,_t,Tt.data)}else{Kt&&te&&e.texStorage2D(3553,R,Et,xt[0].width,xt[0].height);for(let Y=0,ot=xt.length;Y<ot;Y++)Tt=xt[Y],w.format!==Ji?Lt!==null?Kt?e.compressedTexSubImage2D(3553,Y,0,0,Tt.width,Tt.height,Lt,Tt.data):e.compressedTexImage2D(3553,Y,Et,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage2D(3553,Y,0,0,Tt.width,Tt.height,Lt,_t,Tt.data):e.texImage2D(3553,Y,Et,Tt.width,Tt.height,0,Lt,_t,Tt.data)}else if(w.isDataArrayTexture)Kt?(te&&e.texStorage3D(35866,R,Et,J.width,J.height,J.depth),e.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,Lt,_t,J.data)):e.texImage3D(35866,0,Et,J.width,J.height,J.depth,0,Lt,_t,J.data);else if(w.isData3DTexture)Kt?(te&&e.texStorage3D(32879,R,Et,J.width,J.height,J.depth),e.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,Lt,_t,J.data)):e.texImage3D(32879,0,Et,J.width,J.height,J.depth,0,Lt,_t,J.data);else if(w.isFramebufferTexture){if(te)if(Kt)e.texStorage2D(3553,R,Et,J.width,J.height);else{let Y=J.width,ot=J.height;for(let gt=0;gt<R;gt++)e.texImage2D(3553,gt,Et,Y,ot,0,Lt,_t,null),Y>>=1,ot>>=1}}else if(xt.length>0&&Ct){Kt&&te&&e.texStorage2D(3553,R,Et,xt[0].width,xt[0].height);for(let Y=0,ot=xt.length;Y<ot;Y++)Tt=xt[Y],Kt?e.texSubImage2D(3553,Y,0,0,Lt,_t,Tt):e.texImage2D(3553,Y,Et,Lt,_t,Tt);w.generateMipmaps=!1}else Kt?(te&&e.texStorage2D(3553,R,Et,J.width,J.height),e.texSubImage2D(3553,0,0,0,Lt,_t,J)):e.texImage2D(3553,0,Et,Lt,_t,J);A(w,Ct)&&C(tt),Dt.__version=dt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function At(P,w,B){if(w.image.length!==6)return;const tt=Ht(P,w),rt=w.source;e.bindTexture(34067,P.__webglTexture,33984+B);const dt=i.get(rt);if(rt.version!==dt.__version||tt===!0){e.activeTexture(33984+B),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const Dt=w.isCompressedTexture||w.image[0].isCompressedTexture,ht=w.image[0]&&w.image[0].isDataTexture,J=[];for(let Y=0;Y<6;Y++)!Dt&&!ht?J[Y]=y(w.image[Y],!1,!0,c):J[Y]=ht?w.image[Y].image:w.image[Y],J[Y]=Te(w,J[Y]);const Ct=J[0],Lt=x(Ct)||a,_t=r.convert(w.format,w.encoding),Et=r.convert(w.type),Tt=v(w.internalFormat,_t,Et,w.encoding),xt=a&&w.isVideoTexture!==!0,Kt=dt.__version===void 0||tt===!0;let te=M(w,Ct,Lt);$(34067,w,Lt);let R;if(Dt){xt&&Kt&&e.texStorage2D(34067,te,Tt,Ct.width,Ct.height);for(let Y=0;Y<6;Y++){R=J[Y].mipmaps;for(let ot=0;ot<R.length;ot++){const gt=R[ot];w.format!==Ji?_t!==null?xt?e.compressedTexSubImage2D(34069+Y,ot,0,0,gt.width,gt.height,_t,gt.data):e.compressedTexImage2D(34069+Y,ot,Tt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xt?e.texSubImage2D(34069+Y,ot,0,0,gt.width,gt.height,_t,Et,gt.data):e.texImage2D(34069+Y,ot,Tt,gt.width,gt.height,0,_t,Et,gt.data)}}}else{R=w.mipmaps,xt&&Kt&&(R.length>0&&te++,e.texStorage2D(34067,te,Tt,J[0].width,J[0].height));for(let Y=0;Y<6;Y++)if(ht){xt?e.texSubImage2D(34069+Y,0,0,0,J[Y].width,J[Y].height,_t,Et,J[Y].data):e.texImage2D(34069+Y,0,Tt,J[Y].width,J[Y].height,0,_t,Et,J[Y].data);for(let ot=0;ot<R.length;ot++){const St=R[ot].image[Y].image;xt?e.texSubImage2D(34069+Y,ot+1,0,0,St.width,St.height,_t,Et,St.data):e.texImage2D(34069+Y,ot+1,Tt,St.width,St.height,0,_t,Et,St.data)}}else{xt?e.texSubImage2D(34069+Y,0,0,0,_t,Et,J[Y]):e.texImage2D(34069+Y,0,Tt,_t,Et,J[Y]);for(let ot=0;ot<R.length;ot++){const gt=R[ot];xt?e.texSubImage2D(34069+Y,ot+1,0,0,_t,Et,gt.image[Y]):e.texImage2D(34069+Y,ot+1,Tt,_t,Et,gt.image[Y])}}}A(w,Lt)&&C(34067),dt.__version=rt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function lt(P,w,B,tt,rt){const dt=r.convert(B.format,B.encoding),Dt=r.convert(B.type),ht=v(B.internalFormat,dt,Dt,B.encoding);i.get(w).__hasExternalTextures||(rt===32879||rt===35866?e.texImage3D(rt,0,ht,w.width,w.height,w.depth,0,dt,Dt,null):e.texImage2D(rt,0,ht,w.width,w.height,0,dt,Dt,null)),e.bindFramebuffer(36160,P),Ut(w)?f.framebufferTexture2DMultisampleEXT(36160,tt,rt,i.get(B).__webglTexture,0,Nt(w)):(rt===3553||rt>=34069&&rt<=34074)&&s.framebufferTexture2D(36160,tt,rt,i.get(B).__webglTexture,0),e.bindFramebuffer(36160,null)}function It(P,w,B){if(s.bindRenderbuffer(36161,P),w.depthBuffer&&!w.stencilBuffer){let tt=33189;if(B||Ut(w)){const rt=w.depthTexture;rt&&rt.isDepthTexture&&(rt.type===ur?tt=36012:rt.type===hr&&(tt=33190));const dt=Nt(w);Ut(w)?f.renderbufferStorageMultisampleEXT(36161,dt,tt,w.width,w.height):s.renderbufferStorageMultisample(36161,dt,tt,w.width,w.height)}else s.renderbufferStorage(36161,tt,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,P)}else if(w.depthBuffer&&w.stencilBuffer){const tt=Nt(w);B&&Ut(w)===!1?s.renderbufferStorageMultisample(36161,tt,35056,w.width,w.height):Ut(w)?f.renderbufferStorageMultisampleEXT(36161,tt,35056,w.width,w.height):s.renderbufferStorage(36161,34041,w.width,w.height),s.framebufferRenderbuffer(36160,33306,36161,P)}else{const tt=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let rt=0;rt<tt.length;rt++){const dt=tt[rt],Dt=r.convert(dt.format,dt.encoding),ht=r.convert(dt.type),J=v(dt.internalFormat,Dt,ht,dt.encoding),Ct=Nt(w);B&&Ut(w)===!1?s.renderbufferStorageMultisample(36161,Ct,J,w.width,w.height):Ut(w)?f.renderbufferStorageMultisampleEXT(36161,Ct,J,w.width,w.height):s.renderbufferStorage(36161,J,w.width,w.height)}}s.bindRenderbuffer(36161,null)}function Pt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),nt(w.depthTexture,0);const tt=i.get(w.depthTexture).__webglTexture,rt=Nt(w);if(w.depthTexture.format===pr)Ut(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,rt):s.framebufferTexture2D(36160,36096,3553,tt,0);else if(w.depthTexture.format===ms)Ut(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,rt):s.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function bt(P){const w=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Pt(w.__webglFramebuffer,P)}else if(B){w.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,w.__webglFramebuffer[tt]),w.__webglDepthbuffer[tt]=s.createRenderbuffer(),It(w.__webglDepthbuffer[tt],P,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),It(w.__webglDepthbuffer,P,!1);e.bindFramebuffer(36160,null)}function $t(P,w,B){const tt=i.get(P);w!==void 0&&lt(tt.__webglFramebuffer,P,P.texture,36064,3553),B!==void 0&&bt(P)}function G(P){const w=P.texture,B=i.get(P),tt=i.get(w);P.addEventListener("dispose",it),P.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=w.version,o.memory.textures++);const rt=P.isWebGLCubeRenderTarget===!0,dt=P.isWebGLMultipleRenderTargets===!0,Dt=x(P)||a;if(rt){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)B.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(B.__webglFramebuffer=s.createFramebuffer(),dt)if(n.drawBuffers){const ht=P.texture;for(let J=0,Ct=ht.length;J<Ct;J++){const Lt=i.get(ht[J]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ut(P)===!1){const ht=dt?w:[w];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let J=0;J<ht.length;J++){const Ct=ht[J];B.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(36161,B.__webglColorRenderbuffer[J]);const Lt=r.convert(Ct.format,Ct.encoding),_t=r.convert(Ct.type),Et=v(Ct.internalFormat,Lt,_t,Ct.encoding,P.isXRRenderTarget===!0),Tt=Nt(P);s.renderbufferStorageMultisample(36161,Tt,Et,P.width,P.height),s.framebufferRenderbuffer(36160,36064+J,36161,B.__webglColorRenderbuffer[J])}s.bindRenderbuffer(36161,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),It(B.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(36160,null)}}if(rt){e.bindTexture(34067,tt.__webglTexture),$(34067,w,Dt);for(let ht=0;ht<6;ht++)lt(B.__webglFramebuffer[ht],P,w,36064,34069+ht);A(w,Dt)&&C(34067),e.unbindTexture()}else if(dt){const ht=P.texture;for(let J=0,Ct=ht.length;J<Ct;J++){const Lt=ht[J],_t=i.get(Lt);e.bindTexture(3553,_t.__webglTexture),$(3553,Lt,Dt),lt(B.__webglFramebuffer,P,Lt,36064+J,3553),A(Lt,Dt)&&C(3553)}e.unbindTexture()}else{let ht=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ht=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,tt.__webglTexture),$(ht,w,Dt),lt(B.__webglFramebuffer,P,w,36064,ht),A(w,Dt)&&C(ht),e.unbindTexture()}P.depthBuffer&&bt(P)}function ne(P){const w=x(P)||a,B=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let tt=0,rt=B.length;tt<rt;tt++){const dt=B[tt];if(A(dt,w)){const Dt=P.isWebGLCubeRenderTarget?34067:3553,ht=i.get(dt).__webglTexture;e.bindTexture(Dt,ht),C(Dt),e.unbindTexture()}}}function ce(P){if(a&&P.samples>0&&Ut(P)===!1){const w=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],B=P.width,tt=P.height;let rt=16384;const dt=[],Dt=P.stencilBuffer?33306:36096,ht=i.get(P),J=P.isWebGLMultipleRenderTargets===!0;if(J)for(let Ct=0;Ct<w.length;Ct++)e.bindFramebuffer(36160,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Ct,36161,null),e.bindFramebuffer(36160,ht.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Ct,3553,null,0);e.bindFramebuffer(36008,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,ht.__webglFramebuffer);for(let Ct=0;Ct<w.length;Ct++){dt.push(36064+Ct),P.depthBuffer&&dt.push(Dt);const Lt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Lt===!1&&(P.depthBuffer&&(rt|=256),P.stencilBuffer&&(rt|=1024)),J&&s.framebufferRenderbuffer(36008,36064,36161,ht.__webglColorRenderbuffer[Ct]),Lt===!0&&(s.invalidateFramebuffer(36008,[Dt]),s.invalidateFramebuffer(36009,[Dt])),J){const _t=i.get(w[Ct]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,_t,0)}s.blitFramebuffer(0,0,B,tt,0,0,B,tt,rt,9728),m&&s.invalidateFramebuffer(36008,dt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),J)for(let Ct=0;Ct<w.length;Ct++){e.bindFramebuffer(36160,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Ct,36161,ht.__webglColorRenderbuffer[Ct]);const Lt=i.get(w[Ct]).__webglTexture;e.bindFramebuffer(36160,ht.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Ct,3553,Lt,0)}e.bindFramebuffer(36009,ht.__webglMultisampledFramebuffer)}}function Nt(P){return Math.min(u,P.samples)}function Ut(P){const w=i.get(P);return a&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function we(P){const w=o.render.frame;g.get(P)!==w&&(g.set(P,w),P.update())}function Te(P,w){const B=P.encoding,tt=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ac||B!==wr&&(B===he?a===!1?t.has("EXT_sRGB")===!0&&tt===Ji?(P.format=ac,P.minFilter=Ii,P.generateMipmaps=!1):w=Nf.sRGBToLinear(w):(tt!==Ji||rt!==Mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),w}this.allocateTextureUnit=k,this.resetTextureUnits=E,this.setTexture2D=nt,this.setTexture2DArray=V,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=$t,this.setupRenderTarget=G,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Ut}function mv(s,t,e){const i=e.isWebGL2;function n(r,o=null){let a;if(r===Mr)return 5121;if(r===cm)return 32819;if(r===hm)return 32820;if(r===om)return 5120;if(r===am)return 5122;if(r===Df)return 5123;if(r===lm)return 5124;if(r===hr)return 5125;if(r===ur)return 5126;if(r===ro)return i?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===um)return 6406;if(r===Ji)return 6408;if(r===dm)return 6409;if(r===pm)return 6410;if(r===pr)return 6402;if(r===ms)return 34041;if(r===fm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ac)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===mm)return 6403;if(r===gm)return 36244;if(r===_m)return 33319;if(r===xm)return 33320;if(r===vm)return 36249;if(r===il||r===nl||r===rl||r===sl)if(o===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===il)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===rl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===il)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===rl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===sl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ah||r===Ph||r===Lh||r===Rh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ah)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ph)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ym)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Dh||r===zh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Dh)return o===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===zh)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ih||r===Oh||r===Nh||r===Fh||r===Bh||r===Uh||r===kh||r===Gh||r===Vh||r===Hh||r===Wh||r===Xh||r===qh||r===Yh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ih)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Oh)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nh)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fh)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bh)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uh)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gh)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vh)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hh)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wh)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xh)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qh)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yh)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$h)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===$h)return o===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===rs?i?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}class gv extends Oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _e extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _v={type:"move"};class zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const p of t.hand.values()){const d=e.getJointPose(p,i),_=this._getHandJoint(c,p);d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new _e;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class xv extends fi{constructor(t,e,i,n,r,o,a,l,c,h){if(h=h!==void 0?h:pr,h!==pr&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===pr&&(i=hr),i===void 0&&h===ms&&(i=rs),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hi,this.minFilter=l!==void 0?l:hi,this.flipY=!1,this.generateMipmaps=!1}}class vv extends ws{constructor(t,e){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,f=null,m=null;const g=e.getContextAttributes();let p=null,d=null;const _=[],S=[],y=new Set,x=new Map,b=new Oi;b.layers.enable(1),b.viewport=new Oe;const A=new Oi;A.layers.enable(2),A.viewport=new Oe;const C=[b,A],v=new gv;v.layers.enable(1),v.layers.enable(2);let M=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let H=_[V];return H===void 0&&(H=new zl,_[V]=H),H.getTargetRaySpace()},this.getControllerGrip=function(V){let H=_[V];return H===void 0&&(H=new zl,_[V]=H),H.getGripSpace()},this.getHand=function(V){let H=_[V];return H===void 0&&(H=new zl,_[V]=H),H.getHandSpace()};function U(V){const H=S.indexOf(V.inputSource);if(H===-1)return;const K=_[H];K!==void 0&&K.dispatchEvent({type:V.type,data:V.inputSource})}function it(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",it),n.removeEventListener("inputsourceschange",N);for(let V=0;V<_.length;V++){const H=S[V];H!==null&&(S[V]=null,_[V].disconnect(H))}M=null,L=null,t.setRenderTarget(p),f=null,u=null,h=null,n=null,d=null,nt.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(V){if(n=V,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",it),n.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await e.makeXRCompatible(),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const H={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,H),n.updateRenderState({baseLayer:f}),d=new Ki(f.framebufferWidth,f.framebufferHeight,{format:Ji,type:Mr,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let H=null,K=null,Z=null;g.depth&&(Z=g.stencil?35056:33190,H=g.stencil?ms:pr,K=g.stencil?rs:hr);const at={colorFormat:32856,depthFormat:Z,scaleFactor:r};h=new XRWebGLBinding(n,e),u=h.createProjectionLayer(at),n.updateRenderState({layers:[u]}),d=new Ki(u.textureWidth,u.textureHeight,{format:Ji,type:Mr,depthTexture:new xv(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const $=t.properties.get(d);$.__ignoreDepthValues=u.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await n.requestReferenceSpace(a),nt.setContext(n),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function N(V){for(let H=0;H<V.removed.length;H++){const K=V.removed[H],Z=S.indexOf(K);Z>=0&&(S[Z]=null,_[Z].disconnect(K))}for(let H=0;H<V.added.length;H++){const K=V.added[H];let Z=S.indexOf(K);if(Z===-1){for(let $=0;$<_.length;$++)if($>=S.length){S.push(K),Z=$;break}else if(S[$]===null){S[$]=K,Z=$;break}if(Z===-1)break}const at=_[Z];at&&at.connect(K)}}const D=new z,F=new z;function q(V,H,K){D.setFromMatrixPosition(H.matrixWorld),F.setFromMatrixPosition(K.matrixWorld);const Z=D.distanceTo(F),at=H.projectionMatrix.elements,$=K.projectionMatrix.elements,Ht=at[14]/(at[10]-1),ft=at[14]/(at[10]+1),At=(at[9]+1)/at[5],lt=(at[9]-1)/at[5],It=(at[8]-1)/at[0],Pt=($[8]+1)/$[0],bt=Ht*It,$t=Ht*Pt,G=Z/(-It+Pt),ne=G*-It;H.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ne),V.translateZ(G),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const ce=Ht+G,Nt=ft+G,Ut=bt-ne,we=$t+(Z-ne),Te=At*ft/Nt*ce,P=lt*ft/Nt*ce;V.projectionMatrix.makePerspective(Ut,we,Te,P,ce,Nt)}function E(V,H){H===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(H.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(n===null)return;v.near=A.near=b.near=V.near,v.far=A.far=b.far=V.far,(M!==v.near||L!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),M=v.near,L=v.far);const H=V.parent,K=v.cameras;E(v,H);for(let at=0;at<K.length;at++)E(K[at],H);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),V.matrix.copy(v.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const Z=V.children;for(let at=0,$=Z.length;at<$;at++)Z[at].updateMatrixWorld(!0);K.length===2?q(v,b,A):v.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(V){u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.getPlanes=function(){return y};let k=null;function et(V,H){if(c=H.getViewerPose(l||o),m=H,c!==null){const K=c.views;f!==null&&(t.setRenderTargetFramebuffer(d,f.framebuffer),t.setRenderTarget(d));let Z=!1;K.length!==v.cameras.length&&(v.cameras.length=0,Z=!0);for(let at=0;at<K.length;at++){const $=K[at];let Ht=null;if(f!==null)Ht=f.getViewport($);else{const At=h.getViewSubImage(u,$);Ht=At.viewport,at===0&&(t.setRenderTargetTextures(d,At.colorTexture,u.ignoreDepthValues?void 0:At.depthStencilTexture),t.setRenderTarget(d))}let ft=C[at];ft===void 0&&(ft=new Oi,ft.layers.enable(at),ft.viewport=new Oe,C[at]=ft),ft.matrix.fromArray($.transform.matrix),ft.projectionMatrix.fromArray($.projectionMatrix),ft.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),at===0&&v.matrix.copy(ft.matrix),Z===!0&&v.cameras.push(ft)}}for(let K=0;K<_.length;K++){const Z=S[K],at=_[K];Z!==null&&at!==void 0&&at.update(Z,H,l||o)}if(k&&k(V,H),H.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:H.detectedPlanes});let K=null;for(const Z of y)H.detectedPlanes.has(Z)||(K===null&&(K=[]),K.push(Z));if(K!==null)for(const Z of K)y.delete(Z),x.delete(Z),i.dispatchEvent({type:"planeremoved",data:Z});for(const Z of H.detectedPlanes)if(!y.has(Z))y.add(Z),x.set(Z,H.lastChangedTime),i.dispatchEvent({type:"planeadded",data:Z});else{const at=x.get(Z);Z.lastChangedTime>at&&(x.set(Z,Z.lastChangedTime),i.dispatchEvent({type:"planechanged",data:Z}))}}m=null}const nt=new Wf;nt.setAnimationLoop(et),this.setAnimationLoop=function(V){k=V},this.dispose=function(){}}}function yv(s,t){function e(p,d){d.color.getRGB(p.fogColor.value,Gf(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,_,S,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?n(p,d):d.isMeshToonMaterial?(n(p,d),h(p,d)):d.isMeshPhongMaterial?(n(p,d),c(p,d)):d.isMeshStandardMaterial?(n(p,d),u(p,d),d.isMeshPhysicalMaterial&&f(p,d,y)):d.isMeshMatcapMaterial?(n(p,d),m(p,d)):d.isMeshDepthMaterial?n(p,d):d.isMeshDistanceMaterial?(n(p,d),g(p,d)):d.isMeshNormalMaterial?n(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,_,S):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Gi&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Gi&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=t.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let y;d.aoMap?y=d.aoMap:d.lightMap&&(y=d.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,_,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Gi&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function bv(s,t,e,i){let n={},r={},o=[];const a=e.isWebGL2?s.getParameter(35375):0;function l(S,y){const x=y.program;i.uniformBlockBinding(S,x)}function c(S,y){let x=n[S.id];x===void 0&&(g(S),x=h(S),n[S.id]=x,S.addEventListener("dispose",d));const b=y.program;i.updateUBOMapping(S,b);const A=t.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function h(S){const y=u();S.__bindingPointIndex=y;const x=s.createBuffer(),b=S.__size,A=S.usage;return s.bindBuffer(35345,x),s.bufferData(35345,b,A),s.bindBuffer(35345,null),s.bindBufferBase(35345,y,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=n[S.id],x=S.uniforms,b=S.__cache;s.bindBuffer(35345,y);for(let A=0,C=x.length;A<C;A++){const v=x[A];if(m(v,A,b)===!0){const M=v.value,L=v.__offset;typeof M=="number"?(v.__data[0]=M,s.bufferSubData(35345,L,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):M.toArray(v.__data),s.bufferSubData(35345,L,v.__data))}}s.bindBuffer(35345,null)}function m(S,y,x){const b=S.value;if(x[y]===void 0)return typeof b=="number"?x[y]=b:x[y]=b.clone(),!0;if(typeof b=="number"){if(x[y]!==b)return x[y]=b,!0}else{const A=x[y];if(A.equals(b)===!1)return A.copy(b),!0}return!1}function g(S){const y=S.uniforms;let x=0;const b=16;let A=0;for(let C=0,v=y.length;C<v;C++){const M=y[C],L=p(M);if(M.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,C>0){A=x%b;const U=b-A;A!==0&&U-L.boundary<0&&(x+=b-A,M.__offset=x)}x+=L.storage}return A=x%b,A>0&&(x+=b-A),S.__size=x,S.__cache={},this}function p(S){const y=S.value,x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function d(S){const y=S.target;y.removeEventListener("dispose",d);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(n[y.id]),delete n[y.id],delete r[y.id]}function _(){for(const S in n)s.deleteBuffer(n[S]);o=[],n={},r={}}return{bind:l,update:c,dispose:_}}function Sv(){const s=oo("canvas");return s.style.display="block",s}function Zf(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:Sv(),e=s.context!==void 0?s.context:null,i=s.depth!==void 0?s.depth:!0,n=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let u=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=wr,this.physicallyCorrectLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const p=this;let d=!1,_=0,S=0,y=null,x=-1,b=null;const A=new Oe,C=new Oe;let v=null,M=t.width,L=t.height,U=1,it=null,N=null;const D=new Oe(0,0,M,L),F=new Oe(0,0,M,L);let q=!1;const E=new Gc;let k=!1,et=!1,nt=null;const V=new ve,H=new yt,K=new z,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function at(){return y===null?U:1}let $=e;function Ht(T,I){for(let X=0;X<T.length;X++){const O=T[X],W=t.getContext(O,I);if(W!==null)return W}return null}try{const T={alpha:!0,depth:i,stencil:n,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uc}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",xt,!1),$===null){const I=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&I.shift(),$=Ht(I,T),$===null)throw Ht(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ft,At,lt,It,Pt,bt,$t,G,ne,ce,Nt,Ut,we,Te,P,w,B,tt,rt,dt,Dt,ht,J,Ct;function Lt(){ft=new z_($),At=new E_($,ft,s),ft.init(At),ht=new mv($,ft,At),lt=new dv($,ft,At),It=new N_,Pt=new Qx,bt=new pv($,ft,lt,Pt,At,ht,It),$t=new P_(p),G=new D_(p),ne=new Xm($,At),J=new T_($,ft,ne,At),ce=new I_($,ne,It,J),Nt=new k_($,ce,ne,It),rt=new U_($,At,bt),w=new A_(Pt),Ut=new Kx(p,$t,G,ft,At,J,w),we=new yv(p,Pt),Te=new ev,P=new av(ft,At),tt=new w_(p,$t,G,lt,Nt,h,o),B=new fv(p,Nt,At),Ct=new bv($,It,At,lt),dt=new C_($,ft,It,At),Dt=new O_($,ft,It,At),It.programs=Ut.programs,p.capabilities=At,p.extensions=ft,p.properties=Pt,p.renderLists=Te,p.shadowMap=B,p.state=lt,p.info=It}Lt();const _t=new vv(p,$);this.xr=_t,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const T=ft.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ft.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(M,L,!1))},this.getSize=function(T){return T.set(M,L)},this.setSize=function(T,I,X){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=T,L=I,t.width=Math.floor(T*U),t.height=Math.floor(I*U),X!==!1&&(t.style.width=T+"px",t.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(M*U,L*U).floor()},this.setDrawingBufferSize=function(T,I,X){M=T,L=I,U=X,t.width=Math.floor(T*X),t.height=Math.floor(I*X),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,I,X,O){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,I,X,O),lt.viewport(A.copy(D).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(F)},this.setScissor=function(T,I,X,O){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,I,X,O),lt.scissor(C.copy(F).multiplyScalar(U).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(T){lt.setScissorTest(q=T)},this.setOpaqueSort=function(T){it=T},this.setTransparentSort=function(T){N=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(T=!0,I=!0,X=!0){let O=0;T&&(O|=16384),I&&(O|=256),X&&(O|=1024),$.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),Te.dispose(),P.dispose(),Pt.dispose(),$t.dispose(),G.dispose(),Nt.dispose(),J.dispose(),Ct.dispose(),Ut.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",gt),_t.removeEventListener("sessionend",St),nt&&(nt.dispose(),nt=null),ct.stop()};function Et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=It.autoReset,I=B.enabled,X=B.autoUpdate,O=B.needsUpdate,W=B.type;Lt(),It.autoReset=T,B.enabled=I,B.autoUpdate=X,B.needsUpdate=O,B.type=W}function xt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Kt(T){const I=T.target;I.removeEventListener("dispose",Kt),te(I)}function te(T){R(T),Pt.remove(T)}function R(T){const I=Pt.get(T).programs;I!==void 0&&(I.forEach(function(X){Ut.releaseProgram(X)}),T.isShaderMaterial&&Ut.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,X,O,W,vt){I===null&&(I=Z);const Rt=W.isMesh&&W.matrixWorld.determinant()<0,Gt=ee(T,I,X,O,W);lt.setMaterial(O,Rt);let Vt=X.index,Ot=1;O.wireframe===!0&&(Vt=ce.getWireframeAttribute(X),Ot=2);const zt=X.drawRange,Bt=X.attributes.position;let ae=zt.start*Ot,Ve=(zt.start+zt.count)*Ot;vt!==null&&(ae=Math.max(ae,vt.start*Ot),Ve=Math.min(Ve,(vt.start+vt.count)*Ot)),Vt!==null?(ae=Math.max(ae,0),Ve=Math.min(Ve,Vt.count)):Bt!=null&&(ae=Math.max(ae,0),Ve=Math.min(Ve,Bt.count));const Ze=Ve-ae;if(Ze<0||Ze===1/0)return;J.setup(W,O,Gt,X,Vt);let Le,oe=dt;if(Vt!==null&&(Le=ne.get(Vt),oe=Dt,oe.setIndex(Le)),W.isMesh)O.wireframe===!0?(lt.setLineWidth(O.wireframeLinewidth*at()),oe.setMode(1)):oe.setMode(4);else if(W.isLine){let Wt=O.linewidth;Wt===void 0&&(Wt=1),lt.setLineWidth(Wt*at()),W.isLineSegments?oe.setMode(1):W.isLineLoop?oe.setMode(2):oe.setMode(3)}else W.isPoints?oe.setMode(0):W.isSprite&&oe.setMode(4);if(W.isInstancedMesh)oe.renderInstances(ae,Ze,W.count);else if(X.isInstancedBufferGeometry){const Wt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,fn=Math.min(X.instanceCount,Wt);oe.renderInstances(ae,Ze,fn)}else oe.render(ae,Ze)},this.compile=function(T,I){function X(O,W,vt){O.transparent===!0&&O.side===Sn?(O.side=Gi,O.needsUpdate=!0,pt(O,W,vt),O.side=fs,O.needsUpdate=!0,pt(O,W,vt),O.side=Sn):pt(O,W,vt)}f=P.get(T),f.init(),g.push(f),T.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(p.physicallyCorrectLights),T.traverse(function(O){const W=O.material;if(W)if(Array.isArray(W))for(let vt=0;vt<W.length;vt++){const Rt=W[vt];X(Rt,T,O)}else X(W,T,O)}),g.pop(),f=null};let Y=null;function ot(T){Y&&Y(T)}function gt(){ct.stop()}function St(){ct.start()}const ct=new Wf;ct.setAnimationLoop(ot),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(T){Y=T,_t.setAnimationLoop(T),T===null?ct.stop():ct.start()},_t.addEventListener("sessionstart",gt),_t.addEventListener("sessionend",St),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(I),I=_t.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,I,y),f=P.get(T,g.length),f.init(),g.push(f),V.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),E.setFromProjectionMatrix(V),et=this.localClippingEnabled,k=w.init(this.clippingPlanes,et,I),u=Te.get(T,m.length),u.init(),m.push(u),j(T,I,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(it,N),k===!0&&w.beginShadows();const X=f.state.shadowsArray;if(B.render(X,T,I),k===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(u,T),f.setupLights(p.physicallyCorrectLights),I.isArrayCamera){const O=I.cameras;for(let W=0,vt=O.length;W<vt;W++){const Rt=O[W];ut(u,T,Rt,Rt.viewport)}}else ut(u,T,I);y!==null&&(bt.updateMultisampleRenderTarget(y),bt.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(p,T,I),J.resetDefaultState(),x=-1,b=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function j(T,I,X,O){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||E.intersectsSprite(T)){O&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const Rt=Nt.update(T),Gt=T.material;Gt.visible&&u.push(T,Rt,Gt,X,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==It.render.frame&&(T.skeleton.update(),T.skeleton.frame=It.render.frame),!T.frustumCulled||E.intersectsObject(T))){O&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const Rt=Nt.update(T),Gt=T.material;if(Array.isArray(Gt)){const Vt=Rt.groups;for(let Ot=0,zt=Vt.length;Ot<zt;Ot++){const Bt=Vt[Ot],ae=Gt[Bt.materialIndex];ae&&ae.visible&&u.push(T,Rt,ae,X,K.z,Bt)}}else Gt.visible&&u.push(T,Rt,Gt,X,K.z,null)}}const vt=T.children;for(let Rt=0,Gt=vt.length;Rt<Gt;Rt++)j(vt[Rt],I,X,O)}function ut(T,I,X,O){const W=T.opaque,vt=T.transmissive,Rt=T.transparent;f.setupLightsView(X),vt.length>0&&Mt(W,I,X),O&&lt.viewport(A.copy(O)),W.length>0&&st(W,I,X),vt.length>0&&st(vt,I,X),Rt.length>0&&st(Rt,I,X),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Mt(T,I,X){const O=At.isWebGL2;nt===null&&(nt=new Ki(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")?ro:Mr,minFilter:Va,samples:O&&r===!0?4:0})),p.getDrawingBufferSize(H),O?nt.setSize(H.x,H.y):nt.setSize(lc(H.x),lc(H.y));const W=p.getRenderTarget();p.setRenderTarget(nt),p.clear();const vt=p.toneMapping;p.toneMapping=Tn,st(T,I,X),p.toneMapping=vt,bt.updateMultisampleRenderTarget(nt),bt.updateRenderTargetMipmap(nt),p.setRenderTarget(W)}function st(T,I,X){const O=I.isScene===!0?I.overrideMaterial:null;for(let W=0,vt=T.length;W<vt;W++){const Rt=T[W],Gt=Rt.object,Vt=Rt.geometry,Ot=O===null?Rt.material:O,zt=Rt.group;Gt.layers.test(X.layers)&&Q(Gt,I,X,Vt,Ot,zt)}}function Q(T,I,X,O,W,vt){T.onBeforeRender(p,I,X,O,W,vt),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(p,I,X,O,T,vt),W.transparent===!0&&W.side===Sn?(W.side=Gi,W.needsUpdate=!0,p.renderBufferDirect(X,I,O,W,T,vt),W.side=fs,W.needsUpdate=!0,p.renderBufferDirect(X,I,O,W,T,vt),W.side=Sn):p.renderBufferDirect(X,I,O,W,T,vt),T.onAfterRender(p,I,X,O,W,vt)}function pt(T,I,X){I.isScene!==!0&&(I=Z);const O=Pt.get(T),W=f.state.lights,vt=f.state.shadowsArray,Rt=W.state.version,Gt=Ut.getParameters(T,W.state,vt,I,X),Vt=Ut.getProgramCacheKey(Gt);let Ot=O.programs;O.environment=T.isMeshStandardMaterial?I.environment:null,O.fog=I.fog,O.envMap=(T.isMeshStandardMaterial?G:$t).get(T.envMap||O.environment),Ot===void 0&&(T.addEventListener("dispose",Kt),Ot=new Map,O.programs=Ot);let zt=Ot.get(Vt);if(zt!==void 0){if(O.currentProgram===zt&&O.lightsStateVersion===Rt)return kt(T,Gt),zt}else Gt.uniforms=Ut.getUniforms(T),T.onBuild(X,Gt,p),T.onBeforeCompile(Gt,p),zt=Ut.acquireProgram(Gt,Vt),Ot.set(Vt,zt),O.uniforms=Gt.uniforms;const Bt=O.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Bt.clippingPlanes=w.uniform),kt(T,Gt),O.needsLights=ie(T),O.lightsStateVersion=Rt,O.needsLights&&(Bt.ambientLightColor.value=W.state.ambient,Bt.lightProbe.value=W.state.probe,Bt.directionalLights.value=W.state.directional,Bt.directionalLightShadows.value=W.state.directionalShadow,Bt.spotLights.value=W.state.spot,Bt.spotLightShadows.value=W.state.spotShadow,Bt.rectAreaLights.value=W.state.rectArea,Bt.ltc_1.value=W.state.rectAreaLTC1,Bt.ltc_2.value=W.state.rectAreaLTC2,Bt.pointLights.value=W.state.point,Bt.pointLightShadows.value=W.state.pointShadow,Bt.hemisphereLights.value=W.state.hemi,Bt.directionalShadowMap.value=W.state.directionalShadowMap,Bt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Bt.spotShadowMap.value=W.state.spotShadowMap,Bt.spotLightMatrix.value=W.state.spotLightMatrix,Bt.spotLightMap.value=W.state.spotLightMap,Bt.pointShadowMap.value=W.state.pointShadowMap,Bt.pointShadowMatrix.value=W.state.pointShadowMatrix);const ae=zt.getUniforms(),Ve=da.seqWithValue(ae.seq,Bt);return O.currentProgram=zt,O.uniformsList=Ve,zt}function kt(T,I){const X=Pt.get(T);X.outputEncoding=I.outputEncoding,X.instancing=I.instancing,X.skinning=I.skinning,X.morphTargets=I.morphTargets,X.morphNormals=I.morphNormals,X.morphColors=I.morphColors,X.morphTargetsCount=I.morphTargetsCount,X.numClippingPlanes=I.numClippingPlanes,X.numIntersection=I.numClipIntersection,X.vertexAlphas=I.vertexAlphas,X.vertexTangents=I.vertexTangents,X.toneMapping=I.toneMapping}function ee(T,I,X,O,W){I.isScene!==!0&&(I=Z),bt.resetTextureUnits();const vt=I.fog,Rt=O.isMeshStandardMaterial?I.environment:null,Gt=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:wr,Vt=(O.isMeshStandardMaterial?G:$t).get(O.envMap||Rt),Ot=O.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,zt=!!O.normalMap&&!!X.attributes.tangent,Bt=!!X.morphAttributes.position,ae=!!X.morphAttributes.normal,Ve=!!X.morphAttributes.color,Ze=O.toneMapped?p.toneMapping:Tn,Le=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=Le!==void 0?Le.length:0,Wt=Pt.get(O),fn=f.state.lights;if(k===!0&&(et===!0||T!==b)){const _i=T===b&&O.id===x;w.setState(O,T,_i)}let Re=!1;O.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==fn.state.version||Wt.outputEncoding!==Gt||W.isInstancedMesh&&Wt.instancing===!1||!W.isInstancedMesh&&Wt.instancing===!0||W.isSkinnedMesh&&Wt.skinning===!1||!W.isSkinnedMesh&&Wt.skinning===!0||Wt.envMap!==Vt||O.fog===!0&&Wt.fog!==vt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==w.numPlanes||Wt.numIntersection!==w.numIntersection)||Wt.vertexAlphas!==Ot||Wt.vertexTangents!==zt||Wt.morphTargets!==Bt||Wt.morphNormals!==ae||Wt.morphColors!==Ve||Wt.toneMapping!==Ze||At.isWebGL2===!0&&Wt.morphTargetsCount!==oe)&&(Re=!0):(Re=!0,Wt.__version=O.version);let jn=Wt.currentProgram;Re===!0&&(jn=pt(O,I,W));let vh=!1,As=!1,Qa=!1;const je=jn.getUniforms(),Jn=Wt.uniforms;if(lt.useProgram(jn.program)&&(vh=!0,As=!0,Qa=!0),O.id!==x&&(x=O.id,As=!0),vh||b!==T){if(je.setValue($,"projectionMatrix",T.projectionMatrix),At.logarithmicDepthBuffer&&je.setValue($,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,As=!0,Qa=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const _i=je.map.cameraPosition;_i!==void 0&&_i.setValue($,K.setFromMatrixPosition(T.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&je.setValue($,"isOrthographic",T.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||W.isSkinnedMesh)&&je.setValue($,"viewMatrix",T.matrixWorldInverse)}if(W.isSkinnedMesh){je.setOptional($,W,"bindMatrix"),je.setOptional($,W,"bindMatrixInverse");const _i=W.skeleton;_i&&(At.floatVertexTextures?(_i.boneTexture===null&&_i.computeBoneTexture(),je.setValue($,"boneTexture",_i.boneTexture,bt),je.setValue($,"boneTextureSize",_i.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const tl=X.morphAttributes;if((tl.position!==void 0||tl.normal!==void 0||tl.color!==void 0&&At.isWebGL2===!0)&&rt.update(W,X,O,jn),(As||Wt.receiveShadow!==W.receiveShadow)&&(Wt.receiveShadow=W.receiveShadow,je.setValue($,"receiveShadow",W.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Jn.envMap.value=Vt,Jn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),As&&(je.setValue($,"toneMappingExposure",p.toneMappingExposure),Wt.needsLights&&Qt(Jn,Qa),vt&&O.fog===!0&&we.refreshFogUniforms(Jn,vt),we.refreshMaterialUniforms(Jn,O,U,L,nt),da.upload($,Wt.uniformsList,Jn,bt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(da.upload($,Wt.uniformsList,Jn,bt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&je.setValue($,"center",W.center),je.setValue($,"modelViewMatrix",W.modelViewMatrix),je.setValue($,"normalMatrix",W.normalMatrix),je.setValue($,"modelMatrix",W.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const _i=O.uniformsGroups;for(let el=0,Pp=_i.length;el<Pp;el++)if(At.isWebGL2){const yh=_i[el];Ct.update(yh,jn),Ct.bind(yh,jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jn}function Qt(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function ie(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,I,X){Pt.get(T.texture).__webglTexture=I,Pt.get(T.depthTexture).__webglTexture=X;const O=Pt.get(T);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=X===void 0,O.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,I){const X=Pt.get(T);X.__webglFramebuffer=I,X.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,X=0){y=T,_=I,S=X;let O=!0,W=null,vt=!1,Rt=!1;if(T){const Vt=Pt.get(T);Vt.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(36160,null),O=!1):Vt.__webglFramebuffer===void 0?bt.setupRenderTarget(T):Vt.__hasExternalTextures&&bt.rebindTextures(T,Pt.get(T.texture).__webglTexture,Pt.get(T.depthTexture).__webglTexture);const Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Rt=!0);const zt=Pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(W=zt[I],vt=!0):At.isWebGL2&&T.samples>0&&bt.useMultisampledRTT(T)===!1?W=Pt.get(T).__webglMultisampledFramebuffer:W=zt,A.copy(T.viewport),C.copy(T.scissor),v=T.scissorTest}else A.copy(D).multiplyScalar(U).floor(),C.copy(F).multiplyScalar(U).floor(),v=q;if(lt.bindFramebuffer(36160,W)&&At.drawBuffers&&O&&lt.drawBuffers(T,W),lt.viewport(A),lt.scissor(C),lt.setScissorTest(v),vt){const Vt=Pt.get(T.texture);$.framebufferTexture2D(36160,36064,34069+I,Vt.__webglTexture,X)}else if(Rt){const Vt=Pt.get(T.texture),Ot=I||0;$.framebufferTextureLayer(36160,36064,Vt.__webglTexture,X||0,Ot)}x=-1},this.readRenderTargetPixels=function(T,I,X,O,W,vt,Rt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Gt=Gt[Rt]),Gt){lt.bindFramebuffer(36160,Gt);try{const Vt=T.texture,Ot=Vt.format,zt=Vt.type;if(Ot!==Ji&&ht.convert(Ot)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=zt===ro&&(ft.has("EXT_color_buffer_half_float")||At.isWebGL2&&ft.has("EXT_color_buffer_float"));if(zt!==Mr&&ht.convert(zt)!==$.getParameter(35738)&&!(zt===ur&&(At.isWebGL2||ft.has("OES_texture_float")||ft.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-O&&X>=0&&X<=T.height-W&&$.readPixels(I,X,O,W,ht.convert(Ot),ht.convert(zt),vt)}finally{const Vt=y!==null?Pt.get(y).__webglFramebuffer:null;lt.bindFramebuffer(36160,Vt)}}},this.copyFramebufferToTexture=function(T,I,X=0){const O=Math.pow(2,-X),W=Math.floor(I.image.width*O),vt=Math.floor(I.image.height*O);bt.setTexture2D(I,0),$.copyTexSubImage2D(3553,X,0,0,T.x,T.y,W,vt),lt.unbindTexture()},this.copyTextureToTexture=function(T,I,X,O=0){const W=I.image.width,vt=I.image.height,Rt=ht.convert(X.format),Gt=ht.convert(X.type);bt.setTexture2D(X,0),$.pixelStorei(37440,X.flipY),$.pixelStorei(37441,X.premultiplyAlpha),$.pixelStorei(3317,X.unpackAlignment),I.isDataTexture?$.texSubImage2D(3553,O,T.x,T.y,W,vt,Rt,Gt,I.image.data):I.isCompressedTexture?$.compressedTexSubImage2D(3553,O,T.x,T.y,I.mipmaps[0].width,I.mipmaps[0].height,Rt,I.mipmaps[0].data):$.texSubImage2D(3553,O,T.x,T.y,Rt,Gt,I.image),O===0&&X.generateMipmaps&&$.generateMipmap(3553),lt.unbindTexture()},this.copyTextureToTexture3D=function(T,I,X,O,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const vt=T.max.x-T.min.x+1,Rt=T.max.y-T.min.y+1,Gt=T.max.z-T.min.z+1,Vt=ht.convert(O.format),Ot=ht.convert(O.type);let zt;if(O.isData3DTexture)bt.setTexture3D(O,0),zt=32879;else if(O.isDataArrayTexture)bt.setTexture2DArray(O,0),zt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,O.flipY),$.pixelStorei(37441,O.premultiplyAlpha),$.pixelStorei(3317,O.unpackAlignment);const Bt=$.getParameter(3314),ae=$.getParameter(32878),Ve=$.getParameter(3316),Ze=$.getParameter(3315),Le=$.getParameter(32877),oe=X.isCompressedTexture?X.mipmaps[0]:X.image;$.pixelStorei(3314,oe.width),$.pixelStorei(32878,oe.height),$.pixelStorei(3316,T.min.x),$.pixelStorei(3315,T.min.y),$.pixelStorei(32877,T.min.z),X.isDataTexture||X.isData3DTexture?$.texSubImage3D(zt,W,I.x,I.y,I.z,vt,Rt,Gt,Vt,Ot,oe.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(zt,W,I.x,I.y,I.z,vt,Rt,Gt,Vt,oe.data)):$.texSubImage3D(zt,W,I.x,I.y,I.z,vt,Rt,Gt,Vt,Ot,oe),$.pixelStorei(3314,Bt),$.pixelStorei(32878,ae),$.pixelStorei(3316,Ve),$.pixelStorei(3315,Ze),$.pixelStorei(32877,Le),W===0&&O.generateMipmaps&&$.generateMipmap(zt),lt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?bt.setTextureCube(T,0):T.isData3DTexture?bt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?bt.setTexture2DArray(T,0):bt.setTexture2D(T,0),lt.unbindTexture()},this.resetState=function(){_=0,S=0,y=null,lt.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Mv extends Zf{}Mv.prototype.isWebGL1Renderer=!0;class wv extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class sr extends Cs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ru=new z,Du=new z,zu=new ve,Il=new kc,Xo=new Ha;class Tv extends ke{constructor(t=new Wi,e=new sr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Ru.fromBufferAttribute(e,n-1),Du.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Ru.distanceTo(Du);t.setAttribute("lineDistance",new Ge(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(n),Xo.radius+=r,t.ray.intersectsSphere(Xo)===!1)return;zu.copy(n).invert(),Il.copy(t.ray).applyMatrix4(zu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,h=new z,u=new z,f=new z,m=this.isLineSegments?2:1,g=i.index,d=i.attributes.position;if(g!==null){const _=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let y=_,x=S-1;y<x;y+=m){const b=g.getX(y),A=g.getX(y+1);if(c.fromBufferAttribute(d,b),h.fromBufferAttribute(d,A),Il.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(f);v<t.near||v>t.far||e.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),S=Math.min(d.count,o.start+o.count);for(let y=_,x=S-1;y<x;y+=m){if(c.fromBufferAttribute(d,y),h.fromBufferAttribute(d,y+1),Il.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Iu=new z,Ou=new z;class zs extends Tv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Iu.fromBufferAttribute(e,n),Ou.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Iu.distanceTo(Ou);t.setAttribute("lineDistance",new Ge(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);const h=i[n],f=i[n+1]-h,m=(o-h)/f;return(n+m)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new yt:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new z,n=[],r=[],o=[],a=new z,l=new ve;for(let m=0;m<=t;m++){const g=m/t;n[m]=this.getTangentAt(g,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(n[m-1],n[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xe(n[m-1].dot(n[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(n[m],r[m])}if(e===!0){let m=Math.acos(Xe(r[0].dot(r[t]),-1,1));m/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],m*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wc extends un{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const i=e||new yt,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cv extends Wc{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Xc(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,n(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+i*a}}}const qo=new z,Ol=new Xc,Nl=new Xc,Fl=new Xc;class Ev extends un{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new z){const i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(qo.subVectors(n[0],n[1]).add(n[0]),c=qo);const u=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(qo.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=qo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(h),m);p<1e-4&&(p=1),g<1e-4&&(g=p),d<1e-4&&(d=p),Ol.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,p,d),Nl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,p,d),Fl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,p,d)}else this.curveType==="catmullrom"&&(Ol.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Nl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Fl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Ol.calc(l),Nl.calc(l),Fl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new z().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Nu(s,t,e,i,n){const r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function Av(s,t){const e=1-s;return e*e*t}function Pv(s,t){return 2*(1-s)*s*t}function Lv(s,t){return s*s*t}function Xs(s,t,e,i){return Av(s,t)+Pv(s,e)+Lv(s,i)}function Rv(s,t){const e=1-s;return e*e*e*t}function Dv(s,t){const e=1-s;return 3*e*e*s*t}function zv(s,t){return 3*(1-s)*s*s*t}function Iv(s,t){return s*s*s*t}function qs(s,t,e,i,n){return Rv(s,t)+Dv(s,e)+zv(s,i)+Iv(s,n)}class jf extends un{constructor(t=new yt,e=new yt,i=new yt,n=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new yt){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(qs(t,n.x,r.x,o.x,a.x),qs(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ov extends un{constructor(t=new z,e=new z,i=new z,n=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new z){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(qs(t,n.x,r.x,o.x,a.x),qs(t,n.y,r.y,o.y,a.y),qs(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qc extends un{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const i=e||new yt;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nv extends un{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jf extends un{constructor(t=new yt,e=new yt,i=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new yt){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Xs(t,n.x,r.x,o.x),Xs(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fv extends un{constructor(t=new z,e=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new z){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Xs(t,n.x,r.x,o.x),Xs(t,n.y,r.y,o.y),Xs(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kf extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){const i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(Nu(a,l.x,c.x,h.x,u.x),Nu(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new yt().fromArray(n))}return this}}var Bv=Object.freeze({__proto__:null,ArcCurve:Cv,CatmullRomCurve3:Ev,CubicBezierCurve:jf,CubicBezierCurve3:Ov,EllipseCurve:Wc,LineCurve:qc,LineCurve3:Nv,QuadraticBezierCurve:Jf,QuadraticBezierCurve3:Fv,SplineCurve:Kf});class Uv extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new qc(e,t))}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Bv[n.type]().fromJSON(n))}return this}}class hc extends Uv{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new qc(this.currentPoint.clone(),new yt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const r=new Jf(this.currentPoint.clone(),new yt(t,e),new yt(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){const a=new jf(this.currentPoint.clone(),new yt(t,e),new yt(i,n),new yt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Kf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){const c=new Wc(t,e,i,n,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}const Yo=new z,$o=new z,Bl=new z,Zo=new rn;class Is extends Wi{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const n=Math.pow(10,4),r=Math.cos(ua*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},m=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:p,b:d,c:_}=Zo;if(p.fromBufferAttribute(a,c[0]),d.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),Zo.getNormal(Bl),u[0]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,u[1]=`${Math.round(d.x*n)},${Math.round(d.y*n)},${Math.round(d.z*n)}`,u[2]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const y=(S+1)%3,x=u[S],b=u[y],A=Zo[h[S]],C=Zo[h[y]],v=`${x}_${b}`,M=`${b}_${x}`;M in f&&f[M]?(Bl.dot(f[M].normal)<=r&&(m.push(A.x,A.y,A.z),m.push(C.x,C.y,C.z)),f[M]=null):v in f||(f[v]={index0:c[S],index1:c[y],normal:Bl.clone()})}}for(const g in f)if(f[g]){const{index0:p,index1:d}=f[g];Yo.fromBufferAttribute(a,p),$o.fromBufferAttribute(a,d),m.push(Yo.x,Yo.y,Yo.z),m.push($o.x,$o.y,$o.z)}this.setAttribute("position",new Ge(m,3))}}}class pa extends hc{constructor(t){super(t),this.uuid=Ts(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new hc().fromJSON(n))}return this}}const kv={triangulate:function(s,t,e=2){const i=t&&t.length,n=i?t[0]*e:s.length;let r=Qf(s,0,n,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,m;if(i&&(r=Xv(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<n;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return ao(r,o,e,a,l,m,0),o}};function Qf(s,t,e,i,n){let r,o;if(n===iy(s,t,e,i)>0)for(r=t;r<e;r+=i)o=Fu(r,s[r],s[r+1],o);else for(r=e-i;r>=t;r-=i)o=Fu(r,s[r],s[r+1],o);return o&&Ya(o,o.next)&&(co(o),o=o.next),o}function Tr(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(Ya(e,e.next)||de(e.prev,e,e.next)===0)){if(co(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ao(s,t,e,i,n,r,o){if(!s)return;!o&&r&&jv(s,i,n,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Vv(s,i,n,r):Gv(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),co(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Hv(Tr(s),t,e),ao(s,t,e,i,n,r,2)):o===2&&Wv(s,t,e,i,n,r):ao(Tr(s),t,e,i,n,r,1);break}}}function Gv(s){const t=s.prev,e=s,i=s.next;if(de(t,e,i)>=0)return!1;const n=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=n<r?n<o?n:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=n>r?n>o?n:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&Kr(n,a,r,l,o,c,g.x,g.y)&&de(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vv(s,t,e,i){const n=s.prev,r=s,o=s.next;if(de(n,r,o)>=0)return!1;const a=n.x,l=r.x,c=o.x,h=n.y,u=r.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,p=a>l?a>c?a:c:l>c?l:c,d=h>u?h>f?h:f:u>f?u:f,_=uc(m,g,t,e,i),S=uc(p,d,t,e,i);let y=s.prevZ,x=s.nextZ;for(;y&&y.z>=_&&x&&x.z<=S;){if(y.x>=m&&y.x<=p&&y.y>=g&&y.y<=d&&y!==n&&y!==o&&Kr(a,h,l,u,c,f,y.x,y.y)&&de(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=m&&x.x<=p&&x.y>=g&&x.y<=d&&x!==n&&x!==o&&Kr(a,h,l,u,c,f,x.x,x.y)&&de(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=_;){if(y.x>=m&&y.x<=p&&y.y>=g&&y.y<=d&&y!==n&&y!==o&&Kr(a,h,l,u,c,f,y.x,y.y)&&de(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=S;){if(x.x>=m&&x.x<=p&&x.y>=g&&x.y<=d&&x!==n&&x!==o&&Kr(a,h,l,u,c,f,x.x,x.y)&&de(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Hv(s,t,e){let i=s;do{const n=i.prev,r=i.next.next;!Ya(n,r)&&td(n,i,i.next,r)&&lo(n,r)&&lo(r,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),co(i),co(i.next),i=s=r),i=i.next}while(i!==s);return Tr(i)}function Wv(s,t,e,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qv(o,a)){let l=ed(o,a);o=Tr(o,o.next),l=Tr(l,l.next),ao(o,t,e,i,n,r,0),ao(l,t,e,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function Xv(s,t,e,i){const n=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:s.length,c=Qf(s,a,l,i,!1),c===c.next&&(c.steiner=!0),n.push(Kv(c));for(n.sort(qv),r=0;r<n.length;r++)e=Yv(n[r],e);return e}function qv(s,t){return s.x-t.x}function Yv(s,t){const e=$v(s,t);if(!e)return t;const i=ed(e,s);return Tr(i,i.next),Tr(e,e.next)}function $v(s,t){let e=t,i=-1/0,n;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,n=e.x<e.next.x?e:e.next,f===r))return n}e=e.next}while(e!==t);if(!n)return null;const a=n,l=n.x,c=n.y;let h=1/0,u;e=n;do r>=e.x&&e.x>=l&&r!==e.x&&Kr(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),lo(e,s)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&Zv(n,e)))&&(n=e,h=u)),e=e.next;while(e!==a);return n}function Zv(s,t){return de(s.prev,s,t.prev)<0&&de(t.next,s,s.next)<0}function jv(s,t,e,i){let n=s;do n.z===0&&(n.z=uc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Jv(n)}function Jv(s){let t,e,i,n,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,a--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;e=i}r.nextZ=null,c*=2}while(o>1);return s}function uc(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Kv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Kr(s,t,e,i,n,r,o,a){return(n-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(n-o)*(i-a)}function Qv(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ty(s,t)&&(lo(s,t)&&lo(t,s)&&ey(s,t)&&(de(s.prev,s,t.prev)||de(s,t.prev,t))||Ya(s,t)&&de(s.prev,s,s.next)>0&&de(t.prev,t,t.next)>0)}function de(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ya(s,t){return s.x===t.x&&s.y===t.y}function td(s,t,e,i){const n=Jo(de(s,t,e)),r=Jo(de(s,t,i)),o=Jo(de(e,i,s)),a=Jo(de(e,i,t));return!!(n!==r&&o!==a||n===0&&jo(s,e,t)||r===0&&jo(s,i,t)||o===0&&jo(e,s,i)||a===0&&jo(e,t,i))}function jo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Jo(s){return s>0?1:s<0?-1:0}function ty(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&td(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function lo(s,t){return de(s.prev,s,s.next)<0?de(s,t,s.next)>=0&&de(s,s.prev,t)>=0:de(s,t,s.prev)<0||de(s,s.next,t)<0}function ey(s,t){let e=s,i=!1;const n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function ed(s,t){const e=new fc(s.i,s.x,s.y),i=new fc(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Fu(s,t,e,i){const n=new fc(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function co(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function iy(s,t,e,i){let n=0;for(let r=t,o=e-i;r<e;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}class os{static area(t){const e=t.length;let i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return os.area(t)<0}static triangulateShape(t,e){const i=[],n=[],r=[];Bu(t),Uu(i,t);let o=t.length;e.forEach(Bu);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,Uu(i,e[l]);const a=kv.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Bu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Uu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Yc extends Wi{constructor(t=new pa([new yt(0,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ge(n,3)),this.setAttribute("normal",new Ge(r,3)),this.setAttribute("uv",new Ge(o,2));function c(h){const u=n.length/3,f=h.extractPoints(e);let m=f.shape;const g=f.holes;os.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,_=g.length;d<_;d++){const S=g[d];os.isClockWise(S)===!0&&(g[d]=S.reverse())}const p=os.triangulateShape(m,g);for(let d=0,_=g.length;d<_;d++){const S=g[d];m=m.concat(S)}for(let d=0,_=m.length;d<_;d++){const S=m[d];n.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let d=0,_=p.length;d<_;d++){const S=p[d],y=S[0]+u,x=S[1]+u,b=S[2]+u;i.push(y,x,b),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ny(e,t)}static fromJSON(t,e){const i=[];for(let n=0,r=t.shapes.length;n<r;n++){const o=e[t.shapes[n]];i.push(o)}return new Yc(i,t.curveSegments)}}function ny(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){const n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}class ry extends Cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sy extends ry{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Ea={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class oy{constructor(t,e,i){const n=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const ay=new oy;class $a{constructor(t){this.manager=t!==void 0?t:ay,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const xn={};class ly extends Error{constructor(t,e){super(t),this.response=e}}class cy extends $a{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ea.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(xn[t]!==void 0){xn[t].push({onLoad:e,onProgress:i,onError:n});return}xn[t]=[],xn[t].push({onLoad:e,onProgress:i,onError:n});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=xn[t],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let p=0;const d=new ReadableStream({start(_){S();function S(){u.read().then(({done:y,value:x})=>{if(y)_.close();else{p+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let A=0,C=h.length;A<C;A++){const v=h[A];v.onProgress&&v.onProgress(b)}_.enqueue(x),S()}})}}});return new Response(d)}else throw new ly(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Ea.add(t,c);const h=xn[t];delete xn[t];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=xn[t];if(h===void 0)throw this.manager.itemError(t),c;delete xn[t];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class hy extends $a{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ea.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=oo("img");function l(){h(),Ea.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),n&&n(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class uy extends $a{constructor(t){super(t)}load(t,e,i,n){const r=new fi,o=new hy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}}class fy extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ul=new ve,ku=new z,Gu=new z;class dy{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(ku),Gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gu),e.updateMatrixWorld(),Ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class py extends dy{constructor(){super(new Xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class my extends fy{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.target=new ke,this.shadow=new py}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class id{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vu(){return(typeof performance>"u"?Date:performance).now()}class gy{constructor(t,e,i=0,n=1/0){this.ray=new kc(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return dc(t,this,i,e),i.sort(Hu),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)dc(t[n],this,i,e);return i.sort(Hu),i}}function Hu(s,t){return s.distance-t.distance}function dc(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const n=s.children;for(let r=0,o=n.length;r<o;r++)dc(n[r],t,e,!0)}}class _y{constructor(){this.type="ShapePath",this.color=new jt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new hc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,n){return this.currentPath.quadraticCurveTo(t,e,i,n),this}bezierCurveTo(t,e,i,n,r,o){return this.currentPath.bezierCurveTo(t,e,i,n,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(_){const S=[];for(let y=0,x=_.length;y<x;y++){const b=_[y],A=new pa;A.curves=b.curves,S.push(A)}return S}function i(_,S){const y=S.length;let x=!1;for(let b=y-1,A=0;A<y;b=A++){let C=S[b],v=S[A],M=v.x-C.x,L=v.y-C.y;if(Math.abs(L)>Number.EPSILON){if(L<0&&(C=S[A],M=-M,v=S[b],L=-L),_.y<C.y||_.y>v.y)continue;if(_.y===C.y){if(_.x===C.x)return!0}else{const U=L*(_.x-C.x)-M*(_.y-C.y);if(U===0)return!0;if(U<0)continue;x=!x}}else{if(_.y!==C.y)continue;if(v.x<=_.x&&_.x<=C.x||C.x<=_.x&&_.x<=v.x)return!0}}return x}const n=os.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new pa,l.curves=a.curves,c.push(l),c;let h=!n(r[0].getPoints());h=t?!h:h;const u=[],f=[];let m=[],g=0,p;f[g]=void 0,m[g]=[];for(let _=0,S=r.length;_<S;_++)a=r[_],p=a.getPoints(),o=n(p),o=t?!o:o,o?(!h&&f[g]&&g++,f[g]={s:new pa,p},f[g].s.curves=a.curves,h&&g++,m[g]=[]):m[g].push({h:a,p:p[0]});if(!f[0])return e(r);if(f.length>1){let _=!1,S=0;for(let y=0,x=f.length;y<x;y++)u[y]=[];for(let y=0,x=f.length;y<x;y++){const b=m[y];for(let A=0;A<b.length;A++){const C=b[A];let v=!0;for(let M=0;M<f.length;M++)i(C.p,f[M].p)&&(y!==M&&S++,v?(v=!1,u[M].push(C)):_=!0);v&&u[y].push(C)}}S>0&&_===!1&&(m=u)}let d;for(let _=0,S=f.length;_<S;_++){l=f[_].s,c.push(l),d=m[_];for(let y=0,x=d.length;y<x;y++)l.holes.push(d[y].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);const Aa={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class So{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xy=new Xa(-1,1,1,-1,0,1),$c=new Wi;$c.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3));$c.setAttribute("uv",new Ge([0,2,0,0,2,0],2));class nd{constructor(t){this._mesh=new ui($c,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,xy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Wu extends So{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ai?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ca.clone(t.uniforms),this.material=new Ai({defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new nd(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xu extends So{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class vy extends So{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class yy{constructor(t,e){if(this.renderer=t,e===void 0){const i=t.getSize(new yt);this._pixelRatio=t.getPixelRatio(),this._width=i.width,this._height=i.height,e=new Ki(this._width*this._pixelRatio,this._height*this._pixelRatio),e.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Aa===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Wu===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Wu(Aa),this.clock=new id}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xu!==void 0&&(o instanceof Xu?i=!0:o instanceof vy&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Xa(-1,1,1,-1,0,1);const rd=new Wi;rd.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3));rd.setAttribute("uv",new Ge([0,2,0,0,2,0],2));class by extends So{constructor(t,e,i,n,r){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new jt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(t.getClearColor(this._oldClearColor),r=t.getClearAlpha(),t.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor&&t.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),t.autoClear=n}}const qu={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new jt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class _s extends So{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new yt(t.x,t.y):new yt(256,256),this.clearColor=new jt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ki(r,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Ki(r,o);f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new Ki(r,o);m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}qu===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const a=qu;this.highPassUniforms=Ca.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ai({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.texSize.value=new yt(r,o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Aa===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const h=Aa;this.copyUniforms=Ca.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Ai({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ec,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new jt,this.oldClearAlpha=1,this.basic=new ss,this.fsQuad=new nd(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.texSize.value=new yt(i,n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=_s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=_s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){return new Ai({defines:{KERNEL_RADIUS:t,SIGMA:t},uniforms:{colorTexture:{value:null},texSize:{value:new yt(.5,.5)},direction:{value:new yt(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ai({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}_s.BlurDirectionX=new yt(1,0);_s.BlurDirectionY=new yt(0,1);class Sy extends $a{constructor(t){super(t)}load(t,e,i,n){const r=this,o=new cy(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=r.parse(JSON.parse(a));e&&e(l)},i,n)}parse(t){return new My(t)}}class My{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],n=wy(t,e,this.data);for(let r=0,o=n.length;r<o;r++)i.push(...n[r].toShapes());return i}}function wy(s,t,e){const i=Array.from(s),n=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*n,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)a=0,l-=r;else{const u=Ty(h,n,a,l,e);a+=u.offsetX,o.push(u.path)}}return o}function Ty(s,t,e,i,n){const r=n.glyphs[s]||n.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+n.familyName+".");return}const o=new _y;let a,l,c,h,u,f,m,g;if(r.o){const p=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let d=0,_=p.length;d<_;)switch(p[d++]){case"m":a=p[d++]*t+e,l=p[d++]*t+i,o.moveTo(a,l);break;case"l":a=p[d++]*t+e,l=p[d++]*t+i,o.lineTo(a,l);break;case"q":c=p[d++]*t+e,h=p[d++]*t+i,u=p[d++]*t+e,f=p[d++]*t+i,o.quadraticCurveTo(u,f,c,h);break;case"b":c=p[d++]*t+e,h=p[d++]*t+i,u=p[d++]*t+e,f=p[d++]*t+i,m=p[d++]*t+e,g=p[d++]*t+i,o.bezierCurveTo(u,f,m,g,c,h);break}}return{offsetX:r.ha*t,path:o}}/*!
 * Observer 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Ue,pc,Ti,Fn,Bn,as,sd,or,Ys,od,Mn,$i,ad,ld=()=>Ue||typeof window<"u"&&(Ue=window.gsap)&&Ue.registerPlugin&&Ue,cd=1,Qr=[],Yt=[],ln=[],$s=Date.now,mc=(s,t)=>t,Cy=()=>{let s=Ys.core,t=s.bridge||{},e=s._scrollers,i=s._proxies;e.push(...Yt),i.push(...ln),Yt=e,ln=i,mc=(n,r)=>t[n](r)},Hn=(s,t)=>~ln.indexOf(s)&&ln[ln.indexOf(s)+1][t],Zs=s=>!!~od.indexOf(s),oi=(s,t,e,i,n)=>s.addEventListener(t,e,{passive:!i,capture:!!n}),Ke=(s,t,e,i)=>s.removeEventListener(t,e,!!i),Ko="scrollLeft",Qo="scrollTop",gc=()=>Mn&&Mn.isPressed||Yt.cache++,Pa=(s,t)=>{let e=i=>{if(i||i===0){cd&&(Ti.history.scrollRestoration="manual");let n=Mn&&Mn.isPressed;i=e.v=Math.round(i)||(Mn&&Mn.iOS?1:0),s(i),e.cacheID=Yt.cache,n&&mc("ss",i)}else(t||Yt.cache!==e.cacheID||mc("ref"))&&(e.cacheID=Yt.cache,e.v=s());return e.v+e.offset};return e.offset=0,s&&e},ni={s:Ko,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Pa(function(s){return arguments.length?Ti.scrollTo(s,Ee.sc()):Ti.pageXOffset||Fn[Ko]||Bn[Ko]||as[Ko]||0})},Ee={s:Qo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ni,sc:Pa(function(s){return arguments.length?Ti.scrollTo(ni.sc(),s):Ti.pageYOffset||Fn[Qo]||Bn[Qo]||as[Qo]||0})},ci=(s,t)=>(t&&t._ctx&&t._ctx.selector||Ue.utils.toArray)(s)[0]||(typeof s=="string"&&Ue.config().nullTargetWarn!==!1?console.warn("Element not found:",s):null),qn=(s,{s:t,sc:e})=>{Zs(s)&&(s=Fn.scrollingElement||Bn);let i=Yt.indexOf(s),n=e===Ee.sc?1:2;!~i&&(i=Yt.push(s)-1),Yt[i+n]||s.addEventListener("scroll",gc);let r=Yt[i+n],o=r||(Yt[i+n]=Pa(Hn(s,t),!0)||(Zs(s)?e:Pa(function(a){return arguments.length?s[t]=a:s[t]})));return o.target=s,r||(o.smooth=Ue.getProperty(s,"scrollBehavior")==="smooth"),o},_c=(s,t,e)=>{let i=s,n=s,r=$s(),o=r,a=t||50,l=Math.max(500,a*3),c=(f,m)=>{let g=$s();m||g-r>a?(n=i,i=f,o=r,r=g):e?i+=f:i=n+(f-n)/(g-o)*(r-o)};return{update:c,reset:()=>{n=i=e?0:i,o=r=0},getVelocity:f=>{let m=o,g=n,p=$s();return(f||f===0)&&f!==i&&c(f),r===o||p-o>l?0:(i+(e?g:-g))/((e?p:r)-m)*1e3}}},Os=(s,t)=>(t&&!s._gsapAllow&&s.preventDefault(),s.changedTouches?s.changedTouches[0]:s),Yu=s=>{let t=Math.max(...s),e=Math.min(...s);return Math.abs(t)>=Math.abs(e)?t:e},hd=()=>{Ys=Ue.core.globals().ScrollTrigger,Ys&&Ys.core&&Cy()},ud=s=>(Ue=s||ld(),Ue&&typeof document<"u"&&document.body&&(Ti=window,Fn=document,Bn=Fn.documentElement,as=Fn.body,od=[Ti,Fn,Bn,as],Ue.utils.clamp,ad=Ue.core.context||function(){},or="onpointerenter"in as?"pointer":"mouse",sd=Me.isTouch=Ti.matchMedia&&Ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,$i=Me.eventTypes=("ontouchstart"in Bn?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Bn?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(()=>cd=0,500),hd(),pc=1),pc);ni.op=Ee;Yt.cache=0;class Me{constructor(t){this.init(t)}init(t){pc||ud(Ue)||console.warn("Please gsap.registerPlugin(Observer)"),Ys||hd();let{tolerance:e,dragMinimum:i,type:n,target:r,lineHeight:o,debounce:a,preventDefault:l,onStop:c,onStopDelay:h,ignore:u,wheelSpeed:f,event:m,onDragStart:g,onDragEnd:p,onDrag:d,onPress:_,onRelease:S,onRight:y,onLeft:x,onUp:b,onDown:A,onChangeX:C,onChangeY:v,onChange:M,onToggleX:L,onToggleY:U,onHover:it,onHoverEnd:N,onMove:D,ignoreCheck:F,isNormalizer:q,onGestureStart:E,onGestureEnd:k,onWheel:et,onEnable:nt,onDisable:V,onClick:H,scrollSpeed:K,capture:Z,allowClicks:at,lockAxis:$,onLockAxis:Ht}=t;this.target=r=ci(r)||Bn,this.vars=t,u&&(u=Ue.utils.toArray(u)),e=e||1e-9,i=i||0,f=f||1,K=K||1,n=n||"wheel,touch,pointer",a=a!==!1,o||(o=parseFloat(Ti.getComputedStyle(as).lineHeight)||22);let ft,At,lt,It,Pt,bt,$t,G=this,ne=0,ce=0,Nt=qn(r,ni),Ut=qn(r,Ee),we=Nt(),Te=Ut(),P=~n.indexOf("touch")&&!~n.indexOf("pointer")&&$i[0]==="pointerdown",w=Zs(r),B=r.ownerDocument||Fn,tt=[0,0,0],rt=[0,0,0],dt=0,Dt=()=>dt=$s(),ht=(j,ut)=>(G.event=j)&&u&&~u.indexOf(j.target)||ut&&P&&j.pointerType!=="touch"||F&&F(j,ut),J=()=>{G._vx.reset(),G._vy.reset(),At.pause(),c&&c(G)},Ct=()=>{let j=G.deltaX=Yu(tt),ut=G.deltaY=Yu(rt),Mt=Math.abs(j)>=e,st=Math.abs(ut)>=e;M&&(Mt||st)&&M(G,j,ut,tt,rt),Mt&&(y&&G.deltaX>0&&y(G),x&&G.deltaX<0&&x(G),C&&C(G),L&&G.deltaX<0!=ne<0&&L(G),ne=G.deltaX,tt[0]=tt[1]=tt[2]=0),st&&(A&&G.deltaY>0&&A(G),b&&G.deltaY<0&&b(G),v&&v(G),U&&G.deltaY<0!=ce<0&&U(G),ce=G.deltaY,rt[0]=rt[1]=rt[2]=0),(It||lt)&&(D&&D(G),lt&&(d(G),lt=!1),It=!1),bt&&!(bt=!1)&&Ht&&Ht(G),Pt&&(et(G),Pt=!1),ft=0},Lt=(j,ut,Mt)=>{tt[Mt]+=j,rt[Mt]+=ut,G._vx.update(j),G._vy.update(ut),a?ft||(ft=requestAnimationFrame(Ct)):Ct()},_t=(j,ut)=>{$&&!$t&&(G.axis=$t=Math.abs(j)>Math.abs(ut)?"x":"y",bt=!0),$t!=="y"&&(tt[2]+=j,G._vx.update(j,!0)),$t!=="x"&&(rt[2]+=ut,G._vy.update(ut,!0)),a?ft||(ft=requestAnimationFrame(Ct)):Ct()},Et=j=>{if(ht(j,1))return;j=Os(j,l);let ut=j.clientX,Mt=j.clientY,st=ut-G.x,Q=Mt-G.y,pt=G.isDragging;G.x=ut,G.y=Mt,(pt||Math.abs(G.startX-ut)>=i||Math.abs(G.startY-Mt)>=i)&&(d&&(lt=!0),pt||(G.isDragging=!0),_t(st,Q),pt||g&&g(G))},Tt=G.onPress=j=>{ht(j,1)||j&&j.button||(G.axis=$t=null,At.pause(),G.isPressed=!0,j=Os(j),ne=ce=0,G.startX=G.x=j.clientX,G.startY=G.y=j.clientY,G._vx.reset(),G._vy.reset(),oi(q?r:B,$i[1],Et,l,!0),G.deltaX=G.deltaY=0,_&&_(G))},xt=G.onRelease=j=>{if(ht(j,1))return;Ke(q?r:B,$i[1],Et,!0);let ut=!isNaN(G.y-G.startY),Mt=G.isDragging&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),st=Os(j);!Mt&&ut&&(G._vx.reset(),G._vy.reset(),l&&at&&Ue.delayedCall(.08,()=>{if($s()-dt>300&&!j.defaultPrevented){if(j.target.click)j.target.click();else if(B.createEvent){let Q=B.createEvent("MouseEvents");Q.initMouseEvent("click",!0,!0,Ti,1,st.screenX,st.screenY,st.clientX,st.clientY,!1,!1,!1,!1,0,null),j.target.dispatchEvent(Q)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,c&&!q&&At.restart(!0),p&&Mt&&p(G),S&&S(G,Mt)},Kt=j=>j.touches&&j.touches.length>1&&(G.isGesturing=!0)&&E(j,G.isDragging),te=()=>(G.isGesturing=!1)||k(G),R=j=>{if(ht(j))return;let ut=Nt(),Mt=Ut();Lt((ut-we)*K,(Mt-Te)*K,1),we=ut,Te=Mt,c&&At.restart(!0)},Y=j=>{if(ht(j))return;j=Os(j,l),et&&(Pt=!0);let ut=(j.deltaMode===1?o:j.deltaMode===2?Ti.innerHeight:1)*f;Lt(j.deltaX*ut,j.deltaY*ut,0),c&&!q&&At.restart(!0)},ot=j=>{if(ht(j))return;let ut=j.clientX,Mt=j.clientY,st=ut-G.x,Q=Mt-G.y;G.x=ut,G.y=Mt,It=!0,(st||Q)&&_t(st,Q)},gt=j=>{G.event=j,it(G)},St=j=>{G.event=j,N(G)},ct=j=>ht(j)||Os(j,l)&&H(G);At=G._dc=Ue.delayedCall(h||.25,J).pause(),G.deltaX=G.deltaY=0,G._vx=_c(0,50,!0),G._vy=_c(0,50,!0),G.scrollX=Nt,G.scrollY=Ut,G.isDragging=G.isGesturing=G.isPressed=!1,ad(this),G.enable=j=>(G.isEnabled||(oi(w?B:r,"scroll",gc),n.indexOf("scroll")>=0&&oi(w?B:r,"scroll",R,l,Z),n.indexOf("wheel")>=0&&oi(r,"wheel",Y,l,Z),(n.indexOf("touch")>=0&&sd||n.indexOf("pointer")>=0)&&(oi(r,$i[0],Tt,l,Z),oi(B,$i[2],xt),oi(B,$i[3],xt),at&&oi(r,"click",Dt,!1,!0),H&&oi(r,"click",ct),E&&oi(B,"gesturestart",Kt),k&&oi(B,"gestureend",te),it&&oi(r,or+"enter",gt),N&&oi(r,or+"leave",St),D&&oi(r,or+"move",ot)),G.isEnabled=!0,j&&j.type&&Tt(j),nt&&nt(G)),G),G.disable=()=>{G.isEnabled&&(Qr.filter(j=>j!==G&&Zs(j.target)).length||Ke(w?B:r,"scroll",gc),G.isPressed&&(G._vx.reset(),G._vy.reset(),Ke(q?r:B,$i[1],Et,!0)),Ke(w?B:r,"scroll",R,Z),Ke(r,"wheel",Y,Z),Ke(r,$i[0],Tt,Z),Ke(B,$i[2],xt),Ke(B,$i[3],xt),Ke(r,"click",Dt,!0),Ke(r,"click",ct),Ke(B,"gesturestart",Kt),Ke(B,"gestureend",te),Ke(r,or+"enter",gt),Ke(r,or+"leave",St),Ke(r,or+"move",ot),G.isEnabled=G.isPressed=G.isDragging=!1,V&&V(G))},G.kill=G.revert=()=>{G.disable();let j=Qr.indexOf(G);j>=0&&Qr.splice(j,1),Mn===G&&(Mn=0)},Qr.push(G),q&&Zs(r)&&(Mn=G),G.enable(m)}get velocityX(){return this._vx.getVelocity()}get velocityY(){return this._vy.getVelocity()}}Me.version="3.12.1";Me.create=s=>new Me(s);Me.register=ud;Me.getAll=()=>Qr.slice();Me.getById=s=>Qr.filter(t=>t.vars.id===s)[0];ld()&&Ue.registerPlugin(Me);/*!
 * ScrollTrigger 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let wt,Zr,Zt,le,Zi,ue,fd,La,Ra,ts,ma,ta,We,Za,xc,ti,$u,Zu,jr,dd,kl,pd,bi,md,gd,_d,Nn,vc,Zc,Gl,ea=1,ii=Date.now,Vl=ii(),Vi=0,ks=0,ju=(s,t,e)=>{let i=Mi(s)&&(s.substr(0,6)==="clamp("||s.indexOf("max")>-1);return e["_"+t+"Clamp"]=i,i?s.substr(6,s.length-7):s},Ju=(s,t)=>t&&(!Mi(s)||s.substr(0,6)!=="clamp(")?"clamp("+s+")":s,xd=()=>ks&&requestAnimationFrame(xd),Ku=()=>Za=1,Qu=()=>Za=0,en=s=>s,Gs=s=>Math.round(s*1e5)/1e5||0,vd=()=>typeof window<"u",yd=()=>wt||vd()&&(wt=window.gsap)&&wt.registerPlugin&&wt,Cr=s=>!!~fd.indexOf(s),bd=s=>Hn(s,"getBoundingClientRect")||(Cr(s)?()=>(ba.width=Zt.innerWidth,ba.height=Zt.innerHeight,ba):()=>bn(s)),Ey=(s,t,{d:e,d2:i,a:n})=>(n=Hn(s,"getBoundingClientRect"))?()=>n()[e]:()=>(t?Zt["inner"+i]:s["client"+i])||0,Ay=(s,t)=>!t||~ln.indexOf(s)?bd(s):()=>ba,wn=(s,{s:t,d2:e,d:i,a:n})=>Math.max(0,(t="scroll"+e)&&(n=Hn(s,t))?n()-bd(s)()[i]:Cr(s)?(Zi[t]||ue[t])-(Zt["inner"+e]||Zi["client"+e]||ue["client"+e]):s[t]-s["offset"+e]),ia=(s,t)=>{for(let e=0;e<jr.length;e+=3)(!t||~t.indexOf(jr[e+1]))&&s(jr[e],jr[e+1],jr[e+2])},Mi=s=>typeof s=="string",ri=s=>typeof s=="function",ga=s=>typeof s=="number",ar=s=>typeof s=="object",Ns=(s,t,e)=>s&&s.progress(t?0:1)&&e&&s.pause(),Hl=(s,t)=>{if(s.enabled){let e=t(s);e&&e.totalTime&&(s.callbackAnimation=e)}},Xr=Math.abs,Sd="left",Md="top",jc="right",Jc="bottom",gr="width",_r="height",js="Right",Js="Left",Ks="Top",Qs="Bottom",be="padding",Ni="margin",xs="Width",Kc="Height",Fe="px",Fi=s=>Zt.getComputedStyle(s),Py=s=>{let t=Fi(s).position;s.style.position=t==="absolute"||t==="fixed"?t:"relative"},tf=(s,t)=>{for(let e in t)e in s||(s[e]=t[e]);return s},bn=(s,t)=>{let e=t&&Fi(s)[xc]!=="matrix(1, 0, 0, 1, 0, 0)"&&wt.to(s,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=s.getBoundingClientRect();return e&&e.progress(0).kill(),i},yc=(s,{d2:t})=>s["offset"+t]||s["client"+t]||0,wd=s=>{let t=[],e=s.labels,i=s.duration(),n;for(n in e)t.push(e[n]/i);return t},Ly=s=>t=>wt.utils.snap(wd(s),t),Qc=s=>{let t=wt.utils.snap(s),e=Array.isArray(s)&&s.slice(0).sort((i,n)=>i-n);return e?(i,n,r=.001)=>{let o;if(!n)return t(i);if(n>0){for(i-=r,o=0;o<e.length;o++)if(e[o]>=i)return e[o];return e[o-1]}else for(o=e.length,i+=r;o--;)if(e[o]<=i)return e[o];return e[0]}:(i,n,r=.001)=>{let o=t(i);return!n||Math.abs(o-i)<r||o-i<0==n<0?o:t(n<0?i-s:i+s)}},Ry=s=>(t,e)=>Qc(wd(s))(t,e.direction),na=(s,t,e,i)=>e.split(",").forEach(n=>s(t,n,i)),Ie=(s,t,e,i,n)=>s.addEventListener(t,e,{passive:!i,capture:!!n}),ze=(s,t,e,i)=>s.removeEventListener(t,e,!!i),ra=(s,t,e)=>{e=e&&e.wheelHandler,e&&(s(t,"wheel",e),s(t,"touchmove",e))},ef={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},sa={toggleActions:"play",anticipatePin:0},Da={top:0,left:0,center:.5,bottom:1,right:1},_a=(s,t)=>{if(Mi(s)){let e=s.indexOf("="),i=~e?+(s.charAt(e-1)+1)*parseFloat(s.substr(e+1)):0;~e&&(s.indexOf("%")>e&&(i*=t/100),s=s.substr(0,e-1)),s=i+(s in Da?Da[s]*t:~s.indexOf("%")?parseFloat(s)*t/100:parseFloat(s)||0)}return s},oa=(s,t,e,i,{startColor:n,endColor:r,fontSize:o,indent:a,fontWeight:l},c,h,u)=>{let f=le.createElement("div"),m=Cr(e)||Hn(e,"pinType")==="fixed",g=s.indexOf("scroller")!==-1,p=m?ue:e,d=s.indexOf("start")!==-1,_=d?n:r,S="border-color:"+_+";font-size:"+o+";color:"+_+";font-weight:"+l+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((g||u)&&m?"fixed;":"absolute;"),(g||u||!m)&&(S+=(i===Ee?jc:Jc)+":"+(c+parseFloat(a))+"px;"),h&&(S+="box-sizing:border-box;text-align:left;width:"+h.offsetWidth+"px;"),f._isStart=d,f.setAttribute("class","gsap-marker-"+s+(t?" marker-"+t:"")),f.style.cssText=S,f.innerText=t||t===0?s+"-"+t:s,p.children[0]?p.insertBefore(f,p.children[0]):p.appendChild(f),f._offset=f["offset"+i.op.d2],xa(f,0,i,d),f},xa=(s,t,e,i)=>{let n={display:"block"},r=e[i?"os2":"p2"],o=e[i?"p2":"os2"];s._isFlipped=i,n[e.a+"Percent"]=i?-100:0,n[e.a]=i?"1px":0,n["border"+r+xs]=1,n["border"+o+xs]=0,n[e.p]=t+"px",wt.set(s,n)},qt=[],bc={},ho,nf=()=>ii()-Vi>34&&(ho||(ho=requestAnimationFrame(Cn))),qr=()=>{(!bi||!bi.isPressed||bi.startX>ue.clientWidth)&&(Yt.cache++,bi?ho||(ho=requestAnimationFrame(Cn)):Cn(),Vi||Ar("scrollStart"),Vi=ii())},Wl=()=>{_d=Zt.innerWidth,gd=Zt.innerHeight},Vs=()=>{Yt.cache++,!We&&!pd&&!le.fullscreenElement&&!le.webkitFullscreenElement&&(!md||_d!==Zt.innerWidth||Math.abs(Zt.innerHeight-gd)>Zt.innerHeight*.25)&&La.restart(!0)},Er={},Dy=[],th=()=>ze(Ft,"scrollEnd",th)||fr(!0),Ar=s=>Er[s]&&Er[s].map(t=>t())||Dy,Si=[],Td=s=>{for(let t=0;t<Si.length;t+=5)(!s||Si[t+4]&&Si[t+4].query===s)&&(Si[t].style.cssText=Si[t+1],Si[t].getBBox&&Si[t].setAttribute("transform",Si[t+2]||""),Si[t+3].uncache=1)},eh=(s,t)=>{let e;for(ti=0;ti<qt.length;ti++)e=qt[ti],e&&(!t||e._ctx===t)&&(s?e.kill(1):e.revert(!0,!0));t&&Td(t),t||Ar("revert")},Cd=(s,t)=>{Yt.cache++,(t||!ei)&&Yt.forEach(e=>ri(e)&&e.cacheID++&&(e.rec=0)),Mi(s)&&(Zt.history.scrollRestoration=Zc=s)},ei,xr=0,rf,zy=()=>{if(rf!==xr){let s=rf=xr;requestAnimationFrame(()=>s===xr&&fr(!0))}},fr=(s,t)=>{if(Vi&&!s){Ie(Ft,"scrollEnd",th);return}ei=Ft.isRefreshing=!0,Yt.forEach(i=>ri(i)&&++i.cacheID&&(i.rec=i()));let e=Ar("refreshInit");dd&&Ft.sort(),t||eh(),Yt.forEach(i=>{ri(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),qt.slice(0).forEach(i=>i.refresh()),qt.forEach((i,n)=>{if(i._subPinOffset&&i.pin){let r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),qt.forEach(i=>{let n=wn(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>n)&&i.setPositions(i.start,Math.max(i.start+1,n),!0)}),e.forEach(i=>i&&i.render&&i.render(-1)),Yt.forEach(i=>{ri(i)&&(i.smooth&&requestAnimationFrame(()=>i.target.style.scrollBehavior="smooth"),i.rec&&i(i.rec))}),Cd(Zc,1),La.pause(),xr++,ei=2,Cn(2),qt.forEach(i=>ri(i.vars.onRefresh)&&i.vars.onRefresh(i)),ei=Ft.isRefreshing=!1,Ar("refresh")},Sc=0,va=1,to,Cn=s=>{if(!ei||s===2){Ft.isUpdating=!0,to&&to.update(0);let t=qt.length,e=ii(),i=e-Vl>=50,n=t&&qt[0].scroll();if(va=Sc>n?-1:1,ei||(Sc=n),i&&(Vi&&!Za&&e-Vi>200&&(Vi=0,Ar("scrollEnd")),ma=Vl,Vl=e),va<0){for(ti=t;ti-- >0;)qt[ti]&&qt[ti].update(0,i);va=1}else for(ti=0;ti<t;ti++)qt[ti]&&qt[ti].update(0,i);Ft.isUpdating=!1}ho=0},Mc=[Sd,Md,Jc,jc,Ni+Qs,Ni+js,Ni+Ks,Ni+Js,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ya=Mc.concat([gr,_r,"boxSizing","max"+xs,"max"+Kc,"position",Ni,be,be+Ks,be+js,be+Qs,be+Js]),Iy=(s,t,e)=>{ls(e);let i=s._gsap;if(i.spacerIsNative)ls(i.spacerState);else if(s._gsap.swappedIn){let n=t.parentNode;n&&(n.insertBefore(s,t),n.removeChild(t))}s._gsap.swappedIn=!1},Xl=(s,t,e,i)=>{if(!s._gsap.swappedIn){let n=Mc.length,r=t.style,o=s.style,a;for(;n--;)a=Mc[n],r[a]=e[a];r.position=e.position==="absolute"?"absolute":"relative",e.display==="inline"&&(r.display="inline-block"),o[Jc]=o[jc]="auto",r.flexBasis=e.flexBasis||"auto",r.overflow="visible",r.boxSizing="border-box",r[gr]=yc(s,ni)+Fe,r[_r]=yc(s,Ee)+Fe,r[be]=o[Ni]=o[Md]=o[Sd]="0",ls(i),o[gr]=o["max"+xs]=e[gr],o[_r]=o["max"+Kc]=e[_r],o[be]=e[be],s.parentNode!==t&&(s.parentNode.insertBefore(t,s),t.appendChild(s)),s._gsap.swappedIn=!0}},Oy=/([A-Z])/g,ls=s=>{if(s){let t=s.t.style,e=s.length,i=0,n,r;for((s.t._gsap||wt.core.getCache(s.t)).uncache=1;i<e;i+=2)r=s[i+1],n=s[i],r?t[n]=r:t[n]&&t.removeProperty(n.replace(Oy,"-$1").toLowerCase())}},aa=s=>{let t=ya.length,e=s.style,i=[],n=0;for(;n<t;n++)i.push(ya[n],e[ya[n]]);return i.t=s,i},Ny=(s,t,e)=>{let i=[],n=s.length,r=e?8:0,o;for(;r<n;r+=2)o=s[r],i.push(o,o in t?t[o]:s[r+1]);return i.t=s.t,i},ba={left:0,top:0},sf=(s,t,e,i,n,r,o,a,l,c,h,u,f,m)=>{ri(s)&&(s=s(a)),Mi(s)&&s.substr(0,3)==="max"&&(s=u+(s.charAt(4)==="="?_a("0"+s.substr(3),e):0));let g=f?f.time():0,p,d,_;if(f&&f.seek(0),isNaN(s)||(s=+s),ga(s))f&&(s=wt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,s)),o&&xa(o,e,i,!0);else{ri(t)&&(t=t(a));let S=(s||"0").split(" "),y,x,b,A;_=ci(t,a)||ue,y=bn(_)||{},(!y||!y.left&&!y.top)&&Fi(_).display==="none"&&(A=_.style.display,_.style.display="block",y=bn(_),A?_.style.display=A:_.style.removeProperty("display")),x=_a(S[0],y[i.d]),b=_a(S[1]||"0",e),s=y[i.p]-l[i.p]-c+x+n-b,o&&xa(o,b,i,e-b<20||o._isStart&&b>20),e-=e-b}if(m&&(a[m]=s||-.001,s<0&&(s=0)),r){let S=s+e,y=r._isStart;p="scroll"+i.d2,xa(r,S,i,y&&S>20||!y&&(h?Math.max(ue[p],Zi[p]):r.parentNode[p])<=S+1),h&&(l=bn(o),h&&(r.style[i.op.p]=l[i.op.p]-i.op.m-r._offset+Fe))}return f&&_&&(p=bn(_),f.seek(u),d=bn(_),f._caScrollDist=p[i.p]-d[i.p],s=s/f._caScrollDist*u),f&&f.seek(g),f?s:Math.round(s)},Fy=/(webkit|moz|length|cssText|inset)/i,of=(s,t,e,i)=>{if(s.parentNode!==t){let n=s.style,r,o;if(t===ue){s._stOrig=n.cssText,o=Fi(s);for(r in o)!+r&&!Fy.test(r)&&o[r]&&typeof n[r]=="string"&&r!=="0"&&(n[r]=o[r]);n.top=e,n.left=i}else n.cssText=s._stOrig;wt.core.getCache(s).uncache=1,t.appendChild(s)}},Ed=(s,t,e)=>{let i=t,n=i;return r=>{let o=Math.round(s());return o!==i&&o!==n&&Math.abs(o-i)>3&&Math.abs(o-n)>3&&(r=o,e&&e()),n=i,i=r,r}},la=(s,t,e)=>{let i={};i[t.p]="+="+e,wt.set(s,i)},af=(s,t)=>{let e=qn(s,t),i="_scroll"+t.p2,n=(r,o,a,l,c)=>{let h=n.tween,u=o.onComplete,f={};a=a||e();let m=Ed(e,a,()=>{h.kill(),n.tween=0});return c=l&&c||0,l=l||r-a,h&&h.kill(),o[i]=r,o.modifiers=f,f[i]=()=>m(a+l*h.ratio+c*h.ratio*h.ratio),o.onUpdate=()=>{Yt.cache++,Cn()},o.onComplete=()=>{n.tween=0,u&&u.call(h)},h=n.tween=wt.to(s,o),h};return s[i]=e,e.wheelHandler=()=>n.tween&&n.tween.kill()&&(n.tween=0),Ie(s,"wheel",e.wheelHandler),Ft.isTouch&&Ie(s,"touchmove",e.wheelHandler),n};class Ft{constructor(t,e){Zr||Ft.register(wt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vc(this),this.init(t,e)}init(t,e){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ks){this.update=this.refresh=this.kill=en;return}t=tf(Mi(t)||ga(t)||t.nodeType?{trigger:t}:t,sa);let{onUpdate:i,toggleClass:n,id:r,onToggle:o,onRefresh:a,scrub:l,trigger:c,pin:h,pinSpacing:u,invalidateOnRefresh:f,anticipatePin:m,onScrubComplete:g,onSnapComplete:p,once:d,snap:_,pinReparent:S,pinSpacer:y,containerAnimation:x,fastScrollEnd:b,preventOverlaps:A}=t,C=t.horizontal||t.containerAnimation&&t.horizontal!==!1?ni:Ee,v=!l&&l!==0,M=ci(t.scroller||Zt),L=wt.core.getCache(M),U=Cr(M),it=("pinType"in t?t.pinType:Hn(M,"pinType")||U&&"fixed")==="fixed",N=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],D=v&&t.toggleActions.split(" "),F="markers"in t?t.markers:sa.markers,q=U?0:parseFloat(Fi(M)["border"+C.p2+xs])||0,E=this,k=t.onRefreshInit&&(()=>t.onRefreshInit(E)),et=Ey(M,U,C),nt=Ay(M,U),V=0,H=0,K=0,Z=qn(M,C),at,$,Ht,ft,At,lt,It,Pt,bt,$t,G,ne,ce,Nt,Ut,we,Te,P,w,B,tt,rt,dt,Dt,ht,J,Ct,Lt,_t,Et,Tt,xt,Kt,te,R,Y,ot,gt,St;if(E._startClamp=E._endClamp=!1,E._dir=C,m*=45,E.scroller=M,E.scroll=x?x.time.bind(x):Z,ft=Z(),E.vars=t,e=e||t.animation,"refreshPriority"in t&&(dd=1,t.refreshPriority===-9999&&(to=E)),L.tweenScroll=L.tweenScroll||{top:af(M,Ee),left:af(M,ni)},E.tweenTo=at=L.tweenScroll[C.p],E.scrubDuration=ct=>{Kt=ga(ct)&&ct,Kt?xt?xt.duration(ct):xt=wt.to(e,{ease:"expo",totalProgress:"+=0",duration:Kt,paused:!0,onComplete:()=>g&&g(E)}):(xt&&xt.progress(1).kill(),xt=0)},e&&(e.vars.lazy=!1,e._initted&&!E.isReverted||e.vars.immediateRender!==!1&&t.immediateRender!==!1&&e.duration()&&e.render(0,!0,!0),E.animation=e.pause(),e.scrollTrigger=E,E.scrubDuration(l),Et=0,r||(r=e.vars.id)),_&&((!ar(_)||_.push)&&(_={snapTo:_}),"scrollBehavior"in ue.style&&wt.set(U?[ue,Zi]:M,{scrollBehavior:"auto"}),Yt.forEach(ct=>ri(ct)&&ct.target===(U?le.scrollingElement||Zi:M)&&(ct.smooth=!1)),Ht=ri(_.snapTo)?_.snapTo:_.snapTo==="labels"?Ly(e):_.snapTo==="labelsDirectional"?Ry(e):_.directional!==!1?(ct,j)=>Qc(_.snapTo)(ct,ii()-H<500?0:j.direction):wt.utils.snap(_.snapTo),te=_.duration||{min:.1,max:2},te=ar(te)?ts(te.min,te.max):ts(te,te),R=wt.delayedCall(_.delay||Kt/2||.1,()=>{let ct=Z(),j=ii()-H<500,ut=at.tween;if((j||Math.abs(E.getVelocity())<10)&&!ut&&!Za&&V!==ct){let Mt=(ct-lt)/Nt,st=e&&!v?e.totalProgress():Mt,Q=j?0:(st-Tt)/(ii()-ma)*1e3||0,pt=wt.utils.clamp(-Mt,1-Mt,Xr(Q/2)*Q/.185),kt=Mt+(_.inertia===!1?0:pt),ee=ts(0,1,Ht(kt,E)),Qt=Math.round(lt+ee*Nt),{onStart:ie,onInterrupt:T,onComplete:I}=_;if(ct<=It&&ct>=lt&&Qt!==ct){if(ut&&!ut._initted&&ut.data<=Xr(Qt-ct))return;_.inertia===!1&&(pt=ee-Mt),at(Qt,{duration:te(Xr(Math.max(Xr(kt-st),Xr(ee-st))*.185/Q/.05||0)),ease:_.ease||"power3",data:Xr(Qt-ct),onInterrupt:()=>R.restart(!0)&&T&&T(E),onComplete:()=>{E.update(),V=Z(),Et=Tt=e&&!v?e.totalProgress():E.progress,p&&p(E),I&&I(E)}},ct,pt*Nt,Qt-ct-pt*Nt),ie&&ie(E,at.tween)}}else E.isActive&&V!==ct&&R.restart(!0)}).pause()),r&&(bc[r]=E),c=E.trigger=ci(c||h!==!0&&h),St=c&&c._gsap&&c._gsap.stRevert,St&&(St=St(E)),h=h===!0?c:ci(h),Mi(n)&&(n={targets:c,className:n}),h&&(u===!1||u===Ni||(u=!u&&h.parentNode&&h.parentNode.style&&Fi(h.parentNode).display==="flex"?!1:be),E.pin=h,$=wt.core.getCache(h),$.spacer?Ut=$.pinState:(y&&(y=ci(y),y&&!y.nodeType&&(y=y.current||y.nativeElement),$.spacerIsNative=!!y,y&&($.spacerState=aa(y))),$.spacer=P=y||le.createElement("div"),P.classList.add("pin-spacer"),r&&P.classList.add("pin-spacer-"+r),$.pinState=Ut=aa(h)),t.force3D!==!1&&wt.set(h,{force3D:!0}),E.spacer=P=$.spacer,_t=Fi(h),Dt=_t[u+C.os2],B=wt.getProperty(h),tt=wt.quickSetter(h,C.a,Fe),Xl(h,P,_t),Te=aa(h)),F){ne=ar(F)?tf(F,ef):ef,$t=oa("scroller-start",r,M,C,ne,0),G=oa("scroller-end",r,M,C,ne,0,$t),w=$t["offset"+C.op.d2];let ct=ci(Hn(M,"content")||M);Pt=this.markerStart=oa("start",r,ct,C,ne,w,0,x),bt=this.markerEnd=oa("end",r,ct,C,ne,w,0,x),x&&(gt=wt.quickSetter([Pt,bt],C.a,Fe)),!it&&!(ln.length&&Hn(M,"fixedMarkers")===!0)&&(Py(U?ue:M),wt.set([$t,G],{force3D:!0}),J=wt.quickSetter($t,C.a,Fe),Lt=wt.quickSetter(G,C.a,Fe))}if(x){let ct=x.vars.onUpdate,j=x.vars.onUpdateParams;x.eventCallback("onUpdate",()=>{E.update(0,0,1),ct&&ct.apply(x,j||[])})}if(E.previous=()=>qt[qt.indexOf(E)-1],E.next=()=>qt[qt.indexOf(E)+1],E.revert=(ct,j)=>{if(!j)return E.kill(!0);let ut=ct!==!1||!E.enabled,Mt=We;ut!==E.isReverted&&(ut&&(Y=Math.max(Z(),E.scroll.rec||0),K=E.progress,ot=e&&e.progress()),Pt&&[Pt,bt,$t,G].forEach(st=>st.style.display=ut?"none":"block"),ut&&(We=E,E.update(ut)),h&&(!S||!E.isActive)&&(ut?Iy(h,P,Ut):Xl(h,P,Fi(h),ht)),ut||E.update(ut),We=Mt,E.isReverted=ut)},E.refresh=(ct,j,ut,Mt)=>{if((We||!E.enabled)&&!j)return;if(h&&ct&&Vi){Ie(Ft,"scrollEnd",th);return}!ei&&k&&k(E),We=E,at.tween&&(at.tween.kill(),at.tween=0),xt&&xt.pause(),f&&e&&e.revert({kill:!1}).invalidate(),E.isReverted||E.revert(!0,!0),E._subPinOffset=!1;let st=et(),Q=nt(),pt=x?x.duration():wn(M,C),kt=Nt<=.01,ee=0,Qt=Mt||0,ie=ar(ut)?ut.end:t.end,T=t.endTrigger||c,I=ar(ut)?ut.start:t.start||(t.start===0||!c?0:h?"0 0":"0 100%"),X=E.pinnedContainer=t.pinnedContainer&&ci(t.pinnedContainer,E),O=c&&Math.max(0,qt.indexOf(E))||0,W=O,vt,Rt,Gt,Vt,Ot,zt,Bt,ae,Ve,Ze,Le,oe,Wt;for(F&&ar(ut)&&(oe=wt.getProperty($t,C.p),Wt=wt.getProperty(G,C.p));W--;)zt=qt[W],zt.end||zt.refresh(0,1)||(We=E),Bt=zt.pin,Bt&&(Bt===c||Bt===h||Bt===X)&&!zt.isReverted&&(Ze||(Ze=[]),Ze.unshift(zt),zt.revert(!0,!0)),zt!==qt[W]&&(O--,W--);for(ri(I)&&(I=I(E)),I=ju(I,"start",E),lt=sf(I,c,st,C,Z(),Pt,$t,E,Q,q,it,pt,x,E._startClamp&&"_startClamp")||(h?-.001:0),ri(ie)&&(ie=ie(E)),Mi(ie)&&!ie.indexOf("+=")&&(~ie.indexOf(" ")?ie=(Mi(I)?I.split(" ")[0]:"")+ie:(ee=_a(ie.substr(2),st),ie=Mi(I)?I:(x?wt.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,lt):lt)+ee,T=c)),ie=ju(ie,"end",E),It=Math.max(lt,sf(ie||(T?"100% 0":pt),T,st,C,Z()+ee,bt,G,E,Q,q,it,pt,x,E._endClamp&&"_endClamp"))||-.001,ee=0,W=O;W--;)zt=qt[W],Bt=zt.pin,Bt&&zt.start-zt._pinPush<=lt&&!x&&zt.end>0&&(vt=zt.end-(E._startClamp?Math.max(0,zt.start):zt.start),(Bt===c&&zt.start-zt._pinPush<lt||Bt===X)&&isNaN(I)&&(ee+=vt*(1-zt.progress)),Bt===h&&(Qt+=vt));if(lt+=ee,It+=ee,E._startClamp&&(E._startClamp+=ee),E._endClamp&&!ei&&(E._endClamp=It||-.001,It=Math.min(It,wn(M,C))),Nt=It-lt||(lt-=.01)&&.001,kt&&(K=wt.utils.clamp(0,1,wt.utils.normalize(lt,It,Y))),E._pinPush=Qt,Pt&&ee&&(vt={},vt[C.a]="+="+ee,X&&(vt[C.p]="-="+Z()),wt.set([Pt,bt],vt)),h)vt=Fi(h),Vt=C===Ee,Gt=Z(),rt=parseFloat(B(C.a))+Qt,!pt&&It>1&&(Le=(U?le.scrollingElement||Zi:M).style,Le={style:Le,value:Le["overflow"+C.a.toUpperCase()]},U&&Fi(ue)["overflow"+C.a.toUpperCase()]!=="scroll"&&(Le.style["overflow"+C.a.toUpperCase()]="scroll")),Xl(h,P,vt),Te=aa(h),Rt=bn(h,!0),ae=it&&qn(M,Vt?ni:Ee)(),u&&(ht=[u+C.os2,Nt+Qt+Fe],ht.t=P,W=u===be?yc(h,C)+Nt+Qt:0,W&&ht.push(C.d,W+Fe),ls(ht),X&&qt.forEach(fn=>{fn.pin===X&&fn.vars.pinSpacing!==!1&&(fn._subPinOffset=!0)}),it&&Z(Y)),it&&(Ot={top:Rt.top+(Vt?Gt-lt:ae)+Fe,left:Rt.left+(Vt?ae:Gt-lt)+Fe,boxSizing:"border-box",position:"fixed"},Ot[gr]=Ot["max"+xs]=Math.ceil(Rt.width)+Fe,Ot[_r]=Ot["max"+Kc]=Math.ceil(Rt.height)+Fe,Ot[Ni]=Ot[Ni+Ks]=Ot[Ni+js]=Ot[Ni+Qs]=Ot[Ni+Js]="0",Ot[be]=vt[be],Ot[be+Ks]=vt[be+Ks],Ot[be+js]=vt[be+js],Ot[be+Qs]=vt[be+Qs],Ot[be+Js]=vt[be+Js],we=Ny(Ut,Ot,S),ei&&Z(0)),e?(Ve=e._initted,kl(1),e.render(e.duration(),!0,!0),dt=B(C.a)-rt+Nt+Qt,Ct=Math.abs(Nt-dt)>1,it&&Ct&&we.splice(we.length-2,2),e.render(0,!0,!0),Ve||e.invalidate(!0),e.parent||e.totalTime(e.totalTime()),kl(0)):dt=Nt,Le&&(Le.value?Le.style["overflow"+C.a.toUpperCase()]=Le.value:Le.style.removeProperty("overflow-"+C.a));else if(c&&Z()&&!x)for(Rt=c.parentNode;Rt&&Rt!==ue;)Rt._pinOffset&&(lt-=Rt._pinOffset,It-=Rt._pinOffset),Rt=Rt.parentNode;Ze&&Ze.forEach(fn=>fn.revert(!1,!0)),E.start=lt,E.end=It,ft=At=ei?Y:Z(),!x&&!ei&&(ft<Y&&Z(Y),E.scroll.rec=0),E.revert(!1,!0),H=ii(),R&&(V=-1,E.isActive&&Z(lt+Nt*K),R.restart(!0)),We=0,e&&v&&(e._initted||ot)&&e.progress()!==ot&&e.progress(ot||0,!0).render(e.time(),!0,!0),(kt||K!==E.progress||x)&&(e&&!v&&e.totalProgress(x&&lt<-.001&&!K?wt.utils.normalize(lt,It,0):K,!0),E.progress=kt||(ft-lt)/Nt===K?0:K),h&&u&&(P._pinOffset=Math.round(E.progress*dt)),xt&&xt.invalidate(),isNaN(oe)||(oe-=wt.getProperty($t,C.p),Wt-=wt.getProperty(G,C.p),la($t,C,oe),la(Pt,C,oe-(Mt||0)),la(G,C,Wt),la(bt,C,Wt-(Mt||0))),kt&&!ei&&E.update(),a&&!ei&&!ce&&(ce=!0,a(E),ce=!1)},E.getVelocity=()=>(Z()-At)/(ii()-ma)*1e3||0,E.endAnimation=()=>{Ns(E.callbackAnimation),e&&(xt?xt.progress(1):e.paused()?v||Ns(e,E.direction<0,1):Ns(e,e.reversed()))},E.labelToScroll=ct=>e&&e.labels&&(lt||E.refresh()||lt)+e.labels[ct]/e.duration()*Nt||0,E.getTrailing=ct=>{let j=qt.indexOf(E),ut=E.direction>0?qt.slice(0,j).reverse():qt.slice(j+1);return(Mi(ct)?ut.filter(Mt=>Mt.vars.preventOverlaps===ct):ut).filter(Mt=>E.direction>0?Mt.end<=lt:Mt.start>=It)},E.update=(ct,j,ut)=>{if(x&&!ut&&!ct)return;let Mt=ei===!0?Y:E.scroll(),st=ct?0:(Mt-lt)/Nt,Q=st<0?0:st>1?1:st||0,pt=E.progress,kt,ee,Qt,ie,T,I,X,O;if(j&&(At=ft,ft=x?Z():Mt,_&&(Tt=Et,Et=e&&!v?e.totalProgress():Q)),m&&!Q&&h&&!We&&!ea&&Vi&&lt<Mt+(Mt-At)/(ii()-ma)*m&&(Q=1e-4),Q!==pt&&E.enabled){if(kt=E.isActive=!!Q&&Q<1,ee=!!pt&&pt<1,I=kt!==ee,T=I||!!Q!=!!pt,E.direction=Q>pt?1:-1,E.progress=Q,T&&!We&&(Qt=Q&&!pt?0:Q===1?1:pt===1?2:3,v&&(ie=!I&&D[Qt+1]!=="none"&&D[Qt+1]||D[Qt],O=e&&(ie==="complete"||ie==="reset"||ie in e))),A&&(I||O)&&(O||l||!e)&&(ri(A)?A(E):E.getTrailing(A).forEach(W=>W.endAnimation())),v||(xt&&!We&&!ea?(xt._dp._time-xt._start!==xt._time&&xt.render(xt._dp._time-xt._start),xt.resetTo?xt.resetTo("totalProgress",Q,e._tTime/e._tDur):(xt.vars.totalProgress=Q,xt.invalidate().restart())):e&&e.totalProgress(Q,!!(We&&(H||ct)))),h){if(ct&&u&&(P.style[u+C.os2]=Dt),!it)tt(Gs(rt+dt*Q));else if(T){if(X=!ct&&Q>pt&&It+1>Mt&&Mt+1>=wn(M,C),S)if(!ct&&(kt||X)){let W=bn(h,!0),vt=Mt-lt;of(h,ue,W.top+(C===Ee?vt:0)+Fe,W.left+(C===Ee?0:vt)+Fe)}else of(h,P);ls(kt||X?we:Te),Ct&&Q<1&&kt||tt(rt+(Q===1&&!X?dt:0))}}_&&!at.tween&&!We&&!ea&&R.restart(!0),n&&(I||d&&Q&&(Q<1||!Gl))&&Ra(n.targets).forEach(W=>W.classList[kt||d?"add":"remove"](n.className)),i&&!v&&!ct&&i(E),T&&!We?(v&&(O&&(ie==="complete"?e.pause().totalProgress(1):ie==="reset"?e.restart(!0).pause():ie==="restart"?e.restart(!0):e[ie]()),i&&i(E)),(I||!Gl)&&(o&&I&&Hl(E,o),N[Qt]&&Hl(E,N[Qt]),d&&(Q===1?E.kill(!1,1):N[Qt]=0),I||(Qt=Q===1?1:3,N[Qt]&&Hl(E,N[Qt]))),b&&!kt&&Math.abs(E.getVelocity())>(ga(b)?b:2500)&&(Ns(E.callbackAnimation),xt?xt.progress(1):Ns(e,ie==="reverse"?1:!Q,1))):v&&i&&!We&&i(E)}if(Lt){let W=x?Mt/x.duration()*(x._caScrollDist||0):Mt;J(W+($t._isFlipped?1:0)),Lt(W)}gt&&gt(-Mt/x.duration()*(x._caScrollDist||0))},E.enable=(ct,j)=>{E.enabled||(E.enabled=!0,Ie(M,"resize",Vs),Ie(U?le:M,"scroll",qr),k&&Ie(Ft,"refreshInit",k),ct!==!1&&(E.progress=K=0,ft=At=V=Z()),j!==!1&&E.refresh())},E.getTween=ct=>ct&&at?at.tween:xt,E.setPositions=(ct,j,ut,Mt)=>{if(x){let st=x.scrollTrigger,Q=x.duration(),pt=st.end-st.start;ct=st.start+pt*ct/Q,j=st.start+pt*j/Q}E.refresh(!1,!1,{start:Ju(ct,ut&&!!E._startClamp),end:Ju(j,ut&&!!E._endClamp)},Mt),E.update()},E.adjustPinSpacing=ct=>{if(ht&&ct){let j=ht.indexOf(C.d)+1;ht[j]=parseFloat(ht[j])+ct+Fe,ht[1]=parseFloat(ht[1])+ct+Fe,ls(ht)}},E.disable=(ct,j)=>{if(E.enabled&&(ct!==!1&&E.revert(!0,!0),E.enabled=E.isActive=!1,j||xt&&xt.pause(),Y=0,$&&($.uncache=1),k&&ze(Ft,"refreshInit",k),R&&(R.pause(),at.tween&&at.tween.kill()&&(at.tween=0)),!U)){let ut=qt.length;for(;ut--;)if(qt[ut].scroller===M&&qt[ut]!==E)return;ze(M,"resize",Vs),ze(M,"scroll",qr)}},E.kill=(ct,j)=>{E.disable(ct,j),xt&&!j&&xt.kill(),r&&delete bc[r];let ut=qt.indexOf(E);ut>=0&&qt.splice(ut,1),ut===ti&&va>0&&ti--,ut=0,qt.forEach(Mt=>Mt.scroller===E.scroller&&(ut=1)),ut||ei||(E.scroll.rec=0),e&&(e.scrollTrigger=null,ct&&e.revert({kill:!1}),j||e.kill()),Pt&&[Pt,bt,$t,G].forEach(Mt=>Mt.parentNode&&Mt.parentNode.removeChild(Mt)),to===E&&(to=0),h&&($&&($.uncache=1),ut=0,qt.forEach(Mt=>Mt.pin===h&&ut++),ut||($.spacer=0)),t.onKill&&t.onKill(E)},qt.push(E),E.enable(!1,!1),St&&St(E),e&&e.add&&!Nt){let ct=E.update;E.update=()=>{E.update=ct,lt||It||E.refresh()},wt.delayedCall(.01,E.update),Nt=.01,lt=It=0}else E.refresh();h&&zy()}static register(t){return Zr||(wt=t||yd(),vd()&&window.document&&Ft.enable(),Zr=ks),Zr}static defaults(t){if(t)for(let e in t)sa[e]=t[e];return sa}static disable(t,e){ks=0,qt.forEach(i=>i[e?"kill":"disable"](t)),ze(Zt,"wheel",qr),ze(le,"scroll",qr),clearInterval(ta),ze(le,"touchcancel",en),ze(ue,"touchstart",en),na(ze,le,"pointerdown,touchstart,mousedown",Ku),na(ze,le,"pointerup,touchend,mouseup",Qu),La.kill(),ia(ze);for(let i=0;i<Yt.length;i+=3)ra(ze,Yt[i],Yt[i+1]),ra(ze,Yt[i],Yt[i+2])}static enable(){if(Zt=window,le=document,Zi=le.documentElement,ue=le.body,wt&&(Ra=wt.utils.toArray,ts=wt.utils.clamp,vc=wt.core.context||en,kl=wt.core.suppressOverwrites||en,Zc=Zt.history.scrollRestoration||"auto",Sc=Zt.pageYOffset,wt.core.globals("ScrollTrigger",Ft),ue)){ks=1,xd(),Me.register(wt),Ft.isTouch=Me.isTouch,Nn=Me.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ie(Zt,"wheel",qr),fd=[Zt,le,Zi,ue],wt.matchMedia?(Ft.matchMedia=o=>{let a=wt.matchMedia(),l;for(l in o)a.add(l,o[l]);return a},wt.addEventListener("matchMediaInit",()=>eh()),wt.addEventListener("matchMediaRevert",()=>Td()),wt.addEventListener("matchMedia",()=>{fr(0,1),Ar("matchMedia")}),wt.matchMedia("(orientation: portrait)",()=>(Wl(),Wl))):console.warn("Requires GSAP 3.11.0 or later"),Wl(),Ie(le,"scroll",qr);let t=ue.style,e=t.borderTopStyle,i=wt.core.Animation.prototype,n,r;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),t.borderTopStyle="solid",n=bn(ue),Ee.m=Math.round(n.top+Ee.sc())||0,ni.m=Math.round(n.left+ni.sc())||0,e?t.borderTopStyle=e:t.removeProperty("border-top-style"),ta=setInterval(nf,250),wt.delayedCall(.5,()=>ea=0),Ie(le,"touchcancel",en),Ie(ue,"touchstart",en),na(Ie,le,"pointerdown,touchstart,mousedown",Ku),na(Ie,le,"pointerup,touchend,mouseup",Qu),xc=wt.utils.checkPrefix("transform"),ya.push(xc),Zr=ii(),La=wt.delayedCall(.2,fr).pause(),jr=[le,"visibilitychange",()=>{let o=Zt.innerWidth,a=Zt.innerHeight;le.hidden?($u=o,Zu=a):($u!==o||Zu!==a)&&Vs()},le,"DOMContentLoaded",fr,Zt,"load",fr,Zt,"resize",Vs],ia(Ie),qt.forEach(o=>o.enable(0,1)),r=0;r<Yt.length;r+=3)ra(ze,Yt[r],Yt[r+1]),ra(ze,Yt[r],Yt[r+2])}}static config(t){"limitCallbacks"in t&&(Gl=!!t.limitCallbacks);let e=t.syncInterval;e&&clearInterval(ta)||(ta=e)&&setInterval(nf,e),"ignoreMobileResize"in t&&(md=Ft.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(ia(ze)||ia(Ie,t.autoRefreshEvents||"none"),pd=(t.autoRefreshEvents+"").indexOf("resize")===-1)}static scrollerProxy(t,e){let i=ci(t),n=Yt.indexOf(i),r=Cr(i);~n&&Yt.splice(n,r?6:2),e&&(r?ln.unshift(Zt,e,ue,e,Zi,e):ln.unshift(i,e))}static clearMatchMedia(t){qt.forEach(e=>e._ctx&&e._ctx.query===t&&e._ctx.kill(!0,!0))}static isInViewport(t,e,i){let n=(Mi(t)?ci(t):t).getBoundingClientRect(),r=n[i?gr:_r]*e||0;return i?n.right-r>0&&n.left+r<Zt.innerWidth:n.bottom-r>0&&n.top+r<Zt.innerHeight}static positionInViewport(t,e,i){Mi(t)&&(t=ci(t));let n=t.getBoundingClientRect(),r=n[i?gr:_r],o=e==null?r/2:e in Da?Da[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0;return i?(n.left+o)/Zt.innerWidth:(n.top+o)/Zt.innerHeight}static killAll(t){if(qt.slice(0).forEach(e=>e.vars.id!=="ScrollSmoother"&&e.kill()),t!==!0){let e=Er.killAll||[];Er={},e.forEach(i=>i())}}}Ft.version="3.12.1";Ft.saveStyles=s=>s?Ra(s).forEach(t=>{if(t&&t.style){let e=Si.indexOf(t);e>=0&&Si.splice(e,5),Si.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),wt.core.getCache(t),vc())}}):Si;Ft.revert=(s,t)=>eh(!s,t);Ft.create=(s,t)=>new Ft(s,t);Ft.refresh=s=>s?Vs():(Zr||Ft.register())&&fr(!0);Ft.update=s=>++Yt.cache&&Cn(s===!0?2:0);Ft.clearScrollMemory=Cd;Ft.maxScroll=(s,t)=>wn(s,t?ni:Ee);Ft.getScrollFunc=(s,t)=>qn(ci(s),t?ni:Ee);Ft.getById=s=>bc[s];Ft.getAll=()=>qt.filter(s=>s.vars.id!=="ScrollSmoother");Ft.isScrolling=()=>!!Vi;Ft.snapDirectional=Qc;Ft.addEventListener=(s,t)=>{let e=Er[s]||(Er[s]=[]);~e.indexOf(t)||e.push(t)};Ft.removeEventListener=(s,t)=>{let e=Er[s],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};Ft.batch=(s,t)=>{let e=[],i={},n=t.interval||.016,r=t.batchMax||1e9,o=(l,c)=>{let h=[],u=[],f=wt.delayedCall(n,()=>{c(h,u),h=[],u=[]}).pause();return m=>{h.length||f.restart(!0),h.push(m.trigger),u.push(m),r<=h.length&&f.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&ri(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return ri(r)&&(r=r(),Ie(Ft,"refresh",()=>r=t.batchMax())),Ra(s).forEach(l=>{let c={};for(a in i)c[a]=i[a];c.trigger=l,e.push(Ft.create(c))}),e};let lf=(s,t,e,i)=>(t>i?s(i):t<0&&s(0),e>i?(i-t)/(e-t):e<0?t/(t-e):1),Sa=(s,t)=>{t===!0?s.style.removeProperty("touch-action"):s.style.touchAction=t===!0?"auto":t?"pan-"+t+(Me.isTouch?" pinch-zoom":""):"none",s===Zi&&Sa(ue,t)},ca={auto:1,scroll:1},By=({event:s,target:t,axis:e})=>{let i=(s.changedTouches?s.changedTouches[0]:s).target,n=i._gsap||wt.core.getCache(i),r=ii(),o;if(!n._isScrollT||r-n._isScrollT>2e3){for(;i&&i!==ue&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(ca[(o=Fi(i)).overflowY]||ca[o.overflowX]));)i=i.parentNode;n._isScroll=i&&i!==t&&!Cr(i)&&(ca[(o=Fi(i)).overflowY]||ca[o.overflowX]),n._isScrollT=r}(n._isScroll||e==="x")&&(s.stopPropagation(),s._gsapAllow=!0)},Ad=(s,t,e,i)=>Me.create({target:s,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&By,onPress:i,onDrag:i,onScroll:i,onEnable:()=>e&&Ie(le,Me.eventTypes[0],hf,!1,!0),onDisable:()=>ze(le,Me.eventTypes[0],hf,!0)}),Uy=/(input|label|select|textarea)/i,cf,hf=s=>{let t=Uy.test(s.target.tagName);(t||cf)&&(s._gsapAllow=!0,cf=t)},ky=s=>{ar(s)||(s={}),s.preventDefault=s.isNormalizer=s.allowClicks=!0,s.type||(s.type="wheel,touch"),s.debounce=!!s.debounce,s.id=s.id||"normalizer";let{normalizeScrollX:t,momentum:e,allowNestedScroll:i,onRelease:n}=s,r,o,a=ci(s.target)||Zi,l=wt.core.globals().ScrollSmoother,c=l&&l.get(),h=Nn&&(s.content&&ci(s.content)||c&&s.content!==!1&&!c.smooth()&&c.content()),u=qn(a,Ee),f=qn(a,ni),m=1,g=(Me.isTouch&&Zt.visualViewport?Zt.visualViewport.scale*Zt.visualViewport.width:Zt.outerWidth)/Zt.innerWidth,p=0,d=ri(e)?()=>e(r):()=>e||2.8,_,S,y=Ad(a,s.type,!0,i),x=()=>S=!1,b=en,A=en,C=()=>{o=wn(a,Ee),A=ts(Nn?1:0,o),t&&(b=ts(0,wn(a,ni))),_=xr},v=()=>{h._gsap.y=Gs(parseFloat(h._gsap.y)+u.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},M=()=>{if(S){requestAnimationFrame(x);let F=Gs(r.deltaY/2),q=A(u.v-F);if(h&&q!==u.v+u.offset){u.offset=q-u.v;let E=Gs((parseFloat(h&&h._gsap.y)||0)-u.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+E+", 0, 1)",h._gsap.y=E+"px",u.cacheID=Yt.cache,Cn()}return!0}u.offset&&v(),S=!0},L,U,it,N,D=()=>{C(),L.isActive()&&L.vars.scrollY>o&&(u()>o?L.progress(1)&&u(o):L.resetTo("scrollY",o))};return h&&wt.set(h,{y:"+=0"}),s.ignoreCheck=F=>Nn&&F.type==="touchmove"&&M()||m>1.05&&F.type!=="touchstart"||r.isGesturing||F.touches&&F.touches.length>1,s.onPress=()=>{S=!1;let F=m;m=Gs((Zt.visualViewport&&Zt.visualViewport.scale||1)/g),L.pause(),F!==m&&Sa(a,m>1.01?!0:t?!1:"x"),U=f(),it=u(),C(),_=xr},s.onRelease=s.onGestureStart=(F,q)=>{if(u.offset&&v(),!q)N.restart(!0);else{Yt.cache++;let E=d(),k,et;t&&(k=f(),et=k+E*.05*-F.velocityX/.227,E*=lf(f,k,et,wn(a,ni)),L.vars.scrollX=b(et)),k=u(),et=k+E*.05*-F.velocityY/.227,E*=lf(u,k,et,wn(a,Ee)),L.vars.scrollY=A(et),L.invalidate().duration(E).play(.01),(Nn&&L.vars.scrollY>=o||k>=o-1)&&wt.to({},{onUpdate:D,duration:E})}n&&n(F)},s.onWheel=()=>{L._ts&&L.pause(),ii()-p>1e3&&(_=0,p=ii())},s.onChange=(F,q,E,k,et)=>{if(xr!==_&&C(),q&&t&&f(b(k[2]===q?U+(F.startX-F.x):f()+q-k[1])),E){u.offset&&v();let nt=et[2]===E,V=nt?it+F.startY-F.y:u()+E-et[1],H=A(V);nt&&V!==H&&(it+=H-V),u(H)}(E||q)&&Cn()},s.onEnable=()=>{Sa(a,t?!1:"x"),Ft.addEventListener("refresh",D),Ie(Zt,"resize",D),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=f.smooth=!1),y.enable()},s.onDisable=()=>{Sa(a,!0),ze(Zt,"resize",D),Ft.removeEventListener("refresh",D),y.kill()},s.lockAxis=s.lockAxis!==!1,r=new Me(s),r.iOS=Nn,Nn&&!u()&&u(1),Nn&&wt.ticker.add(en),N=r._dc,L=wt.to(r,{ease:"power4",paused:!0,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ed(u,u(),()=>L.pause())},onUpdate:Cn,onComplete:N.vars.onComplete}),r};Ft.sort=s=>qt.sort(s||((t,e)=>(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)));Ft.observe=s=>new Me(s);Ft.normalizeScroll=s=>{if(typeof s>"u")return bi;if(s===!0&&bi)return bi.enable();if(s===!1)return bi&&bi.kill();let t=s instanceof Me?s:ky(s);return bi&&bi.target===t.target&&bi.kill(),Cr(t.target)&&(bi=t),t};Ft.core={_getVelocityProp:_c,_inputObserver:Ad,_scrollers:Yt,_proxies:ln,bridge:{ss:()=>{Vi||Ar("scrollStart"),Vi=ii()},ref:()=>We}};yd()&&wt.registerPlugin(Ft);function vn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Pd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vs={duration:.5,overwrite:!1,delay:0},ih,Ye,me,Bi=1e8,se=1/Bi,wc=Math.PI*2,Gy=wc/4,Vy=0,Ld=Math.sqrt,Hy=Math.cos,Wy=Math.sin,Ne=function(t){return typeof t=="string"},ge=function(t){return typeof t=="function"},En=function(t){return typeof t=="number"},nh=function(t){return typeof t>"u"},hn=function(t){return typeof t=="object"},di=function(t){return t!==!1},rh=function(){return typeof window<"u"},ha=function(t){return ge(t)||Ne(t)},Rd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$e=Array.isArray,Tc=/(?:-?\.?\d|\.)+/gi,Dd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zd=/[+-]=-?[.\d]+/,Id=/[^,'"\[\]\s]+/gi,Xy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,fe,zi,Cc,sh,Li={},za={},Od,Nd=function(t){return(za=Pr(t,Li))&&gi},oh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ia=function(t,e){return!e&&console.warn(t)},Fd=function(t,e){return t&&(Li[t]=e)&&za&&(za[t]=e)||Li},uo=function(){return 0},qy={suppressEvents:!0,isStart:!0,kill:!1},Ma={suppressEvents:!0,kill:!1},Yy={suppressEvents:!0},ah={},Wn=[],Ec={},Bd,wi={},Yl={},uf=30,wa=[],lh="",ch=function(t){var e=t[0],i,n;if(hn(e)||ge(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=wa.length;n--&&!wa[n].targetTest(e););i=wa[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new lp(t[n],i)))||t.splice(n,1);return t},vr=function(t){return t._gsap||ch(Ui(t))[0]._gsap},Ud=function(t,e,i){return(i=t[e])&&ge(i)?t[e]():nh(i)&&t.getAttribute&&t.getAttribute(e)||i},pi=function(t,e){return(t=t.split(",")).forEach(e)||t},xe=function(t){return Math.round(t*1e5)/1e5||0},Be=function(t){return Math.round(t*1e7)/1e7||0},cs=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},$y=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},Oa=function(){var t=Wn.length,e=Wn.slice(0),i,n;for(Ec={},Wn.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},kd=function(t,e,i,n){Wn.length&&!Ye&&Oa(),t.render(e,i,n||Ye&&e<0&&(t._initted||t._startAt)),Wn.length&&!Ye&&Oa()},Gd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Id).length<2?e:Ne(t)?t.trim():t},Vd=function(t){return t},Hi=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Zy=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},Pr=function(t,e){for(var i in e)t[i]=e[i];return t},ff=function s(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=hn(e[i])?s(t[i]||(t[i]={}),e[i]):e[i]);return t},Na=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},eo=function(t){var e=t.parent||fe,i=t.keyframes?Zy($e(t.keyframes)):Hi;if(di(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},jy=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Hd=function(t,e,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},ja=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=e._prev,o=e._next;r?r._next=o:t[i]===e&&(t[i]=o),o?o._prev=r:t[n]===e&&(t[n]=r),e._next=e._prev=e.parent=null},Yn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},yr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Jy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ac=function(t,e,i,n){return t._startAt&&(Ye?t._startAt.revert(Ma):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},Ky=function s(t){return!t||t._ts&&s(t.parent)},df=function(t){return t._repeat?ys(t._tTime,t=t.duration()+t._rDelay)*t:0},ys=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},Fa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ja=function(t){return t._end=Be(t._start+(t._tDur/Math.abs(t._ts||t._rts||se)||0))},Ka=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Be(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ja(t),i._dirty||yr(i,t)),t},Wd=function(t,e){var i;if((e._time||e._initted&&!e._dur)&&(i=Fa(t.rawTime(),e),(!e._dur||Mo(0,e.totalDuration(),i)-e._tTime>se)&&e.render(i,!0)),yr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-se}},sn=function(t,e,i,n){return e.parent&&Yn(e),e._start=Be((En(i)?i:i||t!==fe?Di(t,i,e):t._time)+e._delay),e._end=Be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Hd(t,e,"_first","_last",t._sort?"_start":0),Pc(e)||(t._recent=e),n||Wd(t,e),t._ts<0&&Ka(t,t._tTime),t},Xd=function(t,e){return(Li.ScrollTrigger||oh("scrollTrigger",e))&&Li.ScrollTrigger.create(e,t)},qd=function(t,e,i,n,r){if(uh(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!Ye&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Bd!==Ci.frame)return Wn.push(t),t._lazy=[r,n],1},Qy=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Pc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},tb=function(t,e,i,n){var r=t.ratio,o=e<0||!e&&(!t._start&&Qy(t)&&!(!t._initted&&Pc(t))||(t._ts<0||t._dp._ts<0)&&!Pc(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Mo(0,t._tDur,e),h=ys(l,a),t._yoyo&&h&1&&(o=1-o),h!==ys(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Ye||n||t._zTime===se||!e&&t._zTime){if(!t._initted&&qd(t,e,n,i,l))return;for(u=t._zTime,t._zTime=e||(i?se:0),i||(i=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Ac(t,e,i,!0),t._onUpdate&&!i&&ki(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&ki(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Yn(t,1),!i&&!Ye&&(ki(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},eb=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},bs=function(t,e,i,n){var r=t._repeat,o=Be(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Be(o*(r+1)+t._rDelay*r):o,a>0&&!n&&Ka(t,t._tTime=t._tDur*a),t.parent&&Ja(t),i||yr(t.parent,t),t},pf=function(t){return t instanceof si?yr(t):bs(t,t._dur)},ib={_start:0,endTime:uo,totalDuration:uo},Di=function s(t,e,i){var n=t.labels,r=t._recent||ib,o=t.duration()>=Bi?r.endTime(!1):t._dur,a,l,c;return Ne(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:i).totalDuration()/100:1)):a<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*($e(i)?i[0]:i).totalDuration()),a>1?s(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},io=function(t,e,i){var n=En(e[1]),r=(n?2:1)+(t<2?0:1),o=e[r],a,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=di(l.vars.inherit)&&l.parent;o.immediateRender=di(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Se(e[0],o,e[r+1])},Zn=function(t,e){return t||t===0?e(t):e},Mo=function(t,e,i){return i<t?t:i>e?e:i},qe=function(t,e){return!Ne(t)||!(e=Xy.exec(t))?"":e[1]},nb=function(t,e,i){return Zn(i,function(n){return Mo(t,e,n)})},Lc=[].slice,Yd=function(t,e){return t&&hn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&hn(t[0]))&&!t.nodeType&&t!==zi},rb=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var r;return Ne(n)&&!e||Yd(n,1)?(r=i).push.apply(r,Ui(n)):i.push(n)})||i},Ui=function(t,e,i){return me&&!e&&me.selector?me.selector(t):Ne(t)&&!i&&(Cc||!Ss())?Lc.call((e||sh).querySelectorAll(t),0):$e(t)?rb(t,i):Yd(t)?Lc.call(t,0):t?[t]:[]},Rc=function(t){return t=Ui(t)[0]||Ia("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Ui(e,i.querySelectorAll?i:i===t?Ia("Invalid scope")||sh.createElement("div"):t)}},$d=function(t){return t.sort(function(){return .5-Math.random()})},Zd=function(t){if(ge(t))return t;var e=hn(t)?t:{each:t},i=br(e.ease),n=e.from||0,r=parseFloat(e.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=e.axis,h=n,u=n;return Ne(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],u=n[1]),function(f,m,g){var p=(g||e).length,d=o[p],_,S,y,x,b,A,C,v,M;if(!d){if(M=e.grid==="auto"?0:(e.grid||[1,Bi])[1],!M){for(C=-Bi;C<(C=g[M++].getBoundingClientRect().left)&&M<p;);M--}for(d=o[p]=[],_=l?Math.min(M,p)*h-.5:n%M,S=M===Bi?0:l?p*u/M-.5:n/M|0,C=0,v=Bi,A=0;A<p;A++)y=A%M-_,x=S-(A/M|0),d[A]=b=c?Math.abs(c==="y"?x:y):Ld(y*y+x*x),b>C&&(C=b),b<v&&(v=b);n==="random"&&$d(d),d.max=C-v,d.min=v,d.v=p=(parseFloat(e.amount)||parseFloat(e.each)*(M>p?p-1:c?c==="y"?p/M:M:Math.max(M,p/M))||0)*(n==="edges"?-1:1),d.b=p<0?r-p:r,d.u=qe(e.amount||e.each)||0,i=i&&p<0?sp(i):i}return p=(d[f]-d.min)/d.max||0,Be(d.b+(i?i(p):p)*d.v)+d.u}},Dc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=Be(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(En(i)?0:qe(i))}},jd=function(t,e){var i=$e(t),n,r;return!i&&hn(t)&&(n=i=t.radius||Bi,t.values?(t=Ui(t.values),(r=!En(t[0]))&&(n*=n)):t=Dc(t.increment)),Zn(e,i?ge(t)?function(o){return r=t(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Bi,h=0,u=t.length,f,m;u--;)r?(f=t[u].x-a,m=t[u].y-l,f=f*f+m*m):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!n||c<=n?t[h]:o,r||h===o||En(o)?h:h+qe(o)}:Dc(t))},Jd=function(t,e,i,n){return Zn($e(t)?!e:i===!0?!!(i=0):!n,function(){return $e(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},sb=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(r,o){return o(r)},n)}},ob=function(t,e){return function(i){return t(parseFloat(i))+(e||qe(i))}},ab=function(t,e,i){return Qd(t,e,0,1,i)},Kd=function(t,e,i){return Zn(i,function(n){return t[~~e(n)]})},lb=function s(t,e,i){var n=e-t;return $e(t)?Kd(t,s(0,t.length),e):Zn(i,function(r){return(n+(r-t)%n)%n+t})},cb=function s(t,e,i){var n=e-t,r=n*2;return $e(t)?Kd(t,s(0,t.length-1),e):Zn(i,function(o){return o=(r+(o-t)%r)%r||0,t+(o>n?r-o:o)})},fo=function(t){for(var e=0,i="",n,r,o,a;~(n=t.indexOf("random(",e));)o=t.indexOf(")",n),a=t.charAt(n+7)==="[",r=t.substr(n+7,o-n-7).match(a?Id:Tc),i+=t.substr(e,n-e)+Jd(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return i+t.substr(e,t.length-e)},Qd=function(t,e,i,n,r){var o=e-t,a=n-i;return Zn(r,function(l){return i+((l-t)/o*a||0)})},hb=function s(t,e,i,n){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var o=Ne(t),a={},l,c,h,u,f;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if($e(t)&&!$e(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(g){g*=u;var p=Math.min(f,~~g);return h[p](g-p)},i=e}else n||(t=Pr($e(t)?[]:{},t));if(!h){for(l in e)hh.call(a,t,l,"get",e[l]);r=function(g){return ph(g,a)||(o?t.p:t)}}}return Zn(i,r)},mf=function(t,e,i){var n=t.labels,r=Bi,o,a,l;for(o in n)a=n[o]-e,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ki=function(t,e,i){var n=t.vars,r=n[e],o=me,a=t._ctx,l,c,h;if(r)return l=n[e+"Params"],c=n.callbackScope||t,i&&Wn.length&&Oa(),a&&(me=a),h=l?r.apply(c,l):r.call(c),me=o,h},Hs=function(t){return Yn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ye),t.progress()<1&&ki(t,"onInterrupt"),t},is,tp=[],ep=function(t){if(rh()&&t){t=!t.name&&t.default||t;var e=t.name,i=ge(t),n=e&&!i&&t.init?function(){this._props=[]}:t,r={init:uo,render:ph,add:hh,kill:Cb,modifier:Tb,rawVars:0},o={targetTest:0,get:0,getSetter:dh,aliases:{},register:0};if(Ss(),t!==n){if(wi[e])return;Hi(n,Hi(Na(t,r),o)),Pr(n.prototype,Pr(r,Na(t,o))),wi[n.prop=e]=n,t.targetTest&&(wa.push(n),ah[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Fd(e,n),t.register&&t.register(gi,n,mi)}else t&&tp.push(t)},re=255,Ws={aqua:[0,re,re],lime:[0,re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,re],navy:[0,0,128],white:[re,re,re],olive:[128,128,0],yellow:[re,re,0],orange:[re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[re,0,0],pink:[re,192,203],cyan:[0,re,re],transparent:[re,re,re,0]},$l=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*re+.5|0},ip=function(t,e,i){var n=t?En(t)?[t>>16,t>>8&re,t&re]:0:Ws.black,r,o,a,l,c,h,u,f,m,g;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ws[t])n=Ws[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&re,n&re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&re,t&re]}else if(t.substr(0,3)==="hsl"){if(n=g=t.match(Tc),!e)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,n.length>3&&(n[3]*=1),n[0]=$l(l+1/3,r,o),n[1]=$l(l,r,o),n[2]=$l(l-1/3,r,o);else if(~t.indexOf("="))return n=t.match(Dd),i&&n.length<4&&(n[3]=1),n}else n=t.match(Tc)||Ws.transparent;n=n.map(Number)}return e&&!g&&(r=n[0]/re,o=n[1]/re,a=n[2]/re,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?l=c=0:(m=u-f,c=h>.5?m/(2-u-f):m/(u+f),l=u===r?(o-a)/m+(o<a?6:0):u===o?(a-r)/m+2:(r-o)/m+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},np=function(t){var e=[],i=[],n=-1;return t.split(Xn).forEach(function(r){var o=r.match(es)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},gf=function(t,e,i){var n="",r=(t+n).match(Xn),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(f){return(f=ip(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=np(t),l=i.c,l.join(n)!==h.c.join(n)))for(c=t.replace(Xn,"1").split(es),u=c.length-1;a<u;a++)n+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=t.split(Xn),u=c.length-1;a<u;a++)n+=c[a]+r[a];return n+c[u]},Xn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ws)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),ub=/hsl[a]?\(/,rp=function(t){var e=t.join(" "),i;if(Xn.lastIndex=0,Xn.test(e))return i=ub.test(e),t[1]=gf(t[1],i),t[0]=gf(t[0],i,np(t[1])),!0},po,Ci=function(){var s=Date.now,t=500,e=33,i=s(),n=i,r=1e3/240,o=r,a=[],l,c,h,u,f,m,g=function p(d){var _=s()-n,S=d===!0,y,x,b,A;if(_>t&&(i+=_-e),n+=_,b=n-i,y=b-o,(y>0||S)&&(A=++u.frame,f=b-u.time*1e3,u.time=b=b/1e3,o+=y+(y>=r?4:r-y),x=1),S||(l=c(p)),x)for(m=0;m<a.length;m++)a[m](b,f,A,d)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(d){return f/(1e3/(d||60))},wake:function(){Od&&(!Cc&&rh()&&(zi=Cc=window,sh=zi.document||{},Li.gsap=gi,(zi.gsapVersions||(zi.gsapVersions=[])).push(gi.version),Nd(za||zi.GreenSockGlobals||!zi.gsap&&zi||{}),h=zi.requestAnimationFrame,tp.forEach(ep)),l&&u.sleep(),c=h||function(d){return setTimeout(d,o-u.time*1e3+1|0)},po=1,g(2))},sleep:function(){(h?zi.cancelAnimationFrame:clearTimeout)(l),po=0,c=uo},lagSmoothing:function(d,_){t=d||1/0,e=Math.min(_||33,t)},fps:function(d){r=1e3/(d||240),o=u.time*1e3+r},add:function(d,_,S){var y=_?function(x,b,A,C){d(x,b,A,C),u.remove(y)}:d;return u.remove(d),a[S?"unshift":"push"](y),Ss(),y},remove:function(d,_){~(_=a.indexOf(d))&&a.splice(_,1)&&m>=_&&m--},_listeners:a},u}(),Ss=function(){return!po&&Ci.wake()},Jt={},fb=/^[\d.\-M][\d.\-,\s]/,db=/["']/g,pb=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],r=1,o=i.length,a,l,c;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[n]=isNaN(c)?c.replace(db,"").trim():+c,n=l.substr(a+1).trim();return e},mb=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},gb=function(t){var e=(t+"").split("("),i=Jt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[pb(e[1])]:mb(t).split(",").map(Gd)):Jt._CE&&fb.test(t)?Jt._CE("",t):i},sp=function(t){return function(e){return 1-t(1-e)}},op=function s(t,e){for(var i=t._first,n;i;)i instanceof si?s(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?s(i.timeline,e):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=e)),i=i._next},br=function(t,e){return t&&(ge(t)?t:Jt[t]||gb(t))||e},Lr=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:n},o;return pi(t,function(a){Jt[a]=Li[a]=r,Jt[o=a.toLowerCase()]=i;for(var l in r)Jt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Jt[a+"."+l]=r[l]}),r},ap=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Zl=function s(t,e,i){var n=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),o=r/wc*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*Wy((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:ap(a);return r=wc/r,l.config=function(c,h){return s(t,c,h)},l},jl=function s(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:ap(i);return n.config=function(r){return s(t,r)},n};pi("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Lr(s+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Jt.Linear.easeNone=Jt.none=Jt.Linear.easeIn;Lr("Elastic",Zl("in"),Zl("out"),Zl());(function(s,t){var e=1/t,i=2*e,n=2.5*e,r=function(a){return a<e?s*a*a:a<i?s*Math.pow(a-1.5/t,2)+.75:a<n?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Lr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Lr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Lr("Circ",function(s){return-(Ld(1-s*s)-1)});Lr("Sine",function(s){return s===1?1:-Hy(s*Gy)+1});Lr("Back",jl("in"),jl("out"),jl());Jt.SteppedEase=Jt.steps=Li.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),r=e?1:0,o=1-se;return function(a){return((n*Mo(0,o,a)|0)+r)*i}}};vs.ease=Jt["quad.out"];pi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return lh+=s+","+s+"Params,"});var lp=function(t,e){this.id=Vy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ud,this.set=e?e.getSetter:dh},mo=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,bs(this,+e.duration,1,1),this.data=e.data,me&&(this._ctx=me,me.data.push(this)),po||Ci.wake()}var t=s.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(Ss(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ka(this,i),!r._dp||r.parent||Wd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&sn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===se||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),kd(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+df(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+df(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?ys(this._tTime,r)+1:1},t.timeScale=function(i){if(!arguments.length)return this._rts===-se?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?Fa(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-se?0:this._rts,this.totalTime(Mo(-Math.abs(this._delay),this._tDur,n),!0),Ja(this),Jy(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ss(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==se&&(this._tTime-=se)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&sn(n,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(di(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fa(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=Yy);var n=Ye;return Ye=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ye=n,this},t.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(n._ts||1),n=n._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,pf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,pf(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(Di(this,i),di(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,di(n))},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-se,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-se)},t.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this;return new Promise(function(r){var o=ge(i)?i:Vd,a=function(){var c=n.then;n.then=null,ge(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=c),r(o),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},t.kill=function(){Hs(this)},s}();Hi(mo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-se,_prom:0,_ps:!1,_rts:1});var si=function(s){Pd(t,s);function t(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=di(i.sortChildren),fe&&sn(i.parent||fe,vn(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Xd(vn(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(n,r,o){return io(0,arguments,this),this},e.from=function(n,r,o){return io(1,arguments,this),this},e.fromTo=function(n,r,o,a){return io(2,arguments,this),this},e.set=function(n,r,o){return r.duration=0,r.parent=this,eo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Se(n,r,Di(this,o),1),this},e.call=function(n,r,o){return sn(this,Se.delayedCall(0,n,r),o)},e.staggerTo=function(n,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Se(n,o,Di(this,l)),this},e.staggerFrom=function(n,r,o,a,l,c,h){return o.runBackwards=1,eo(o).immediateRender=di(o.immediateRender),this.staggerTo(n,r,o,a,l,c,h)},e.staggerFromTo=function(n,r,o,a,l,c,h,u){return a.startAt=o,eo(a).immediateRender=di(a.immediateRender),this.staggerTo(n,r,a,l,c,h,u)},e.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:Be(n),u=this._zTime<0!=n<0&&(this._initted||!c),f,m,g,p,d,_,S,y,x,b,A,C;if(this!==fe&&h>l&&n>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),f=h,x=this._start,y=this._ts,_=!y,u&&(c||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(A=this._yoyo,d=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(d*100+n,r,o);if(f=Be(h%d),h===l?(p=this._repeat,f=c):(p=~~(h/d),p&&p===h/d&&(f=c,p--),f>c&&(f=c)),b=ys(this._tTime,d),!a&&this._tTime&&b!==p&&this._tTime-b*d-this._dur<=0&&(b=p),A&&p&1&&(f=c-f,C=1),p!==b&&!this._lock){var v=A&&b&1,M=v===(A&&p&1);if(p<b&&(v=!v),a=v?0:c,this._lock=1,this.render(a||(C?0:Be(p*d)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ki(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;op(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=eb(this,Be(a),Be(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&f&&!r&&!p&&(ki(this,"onStart"),this._tTime!==h))return this;if(f>=a&&n>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(n,r,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,o),f!==this._time||!this._ts&&!_){S=0,g&&(h+=this._zTime=-se);break}}m=g}else{m=this._last;for(var L=n<0?n:f;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(n,r,o);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,o||Ye&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!_){S=0,g&&(h+=this._zTime=L?-se:se);break}}m=g}}if(S&&!r&&(this.pause(),S.render(f>=a?0:-se)._zTime=f>=a?1:-1,this._ts))return this._start=x,Ja(this),this.render(n,r,o);this._onUpdate&&!r&&ki(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Yn(this,1),!r&&!(n<0&&!a)&&(h||a||!l)&&(ki(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,r){var o=this;if(En(r)||(r=Di(this,r,n)),!(n instanceof mo)){if($e(n))return n.forEach(function(a){return o.add(a,r)}),this;if(Ne(n))return this.addLabel(n,r);if(ge(n))n=Se.delayedCall(0,n);else return this}return this!==n?sn(this,n,r):this},e.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Bi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Se?r&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},e.remove=function(n){return Ne(n)?this.removeLabel(n):ge(n)?this.killTweensOf(n):(ja(this,n),n===this._recent&&(this._recent=this._last),yr(this))},e.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Be(Ci.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},e.addLabel=function(n,r){return this.labels[n]=Di(this,r),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,r,o){var a=Se.delayedCall(0,r||uo,o);return a.data="isPause",this._hasPause=1,sn(this,a,Di(this,n))},e.removePause=function(n){var r=this._first;for(n=Di(this,n);r;)r._start===n&&r.data==="isPause"&&Yn(r),r=r._next},e.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Un!==a[l]&&a[l].kill(n,r);return this},e.getTweensOf=function(n,r){for(var o=[],a=Ui(n),l=this._first,c=En(r),h;l;)l instanceof Se?$y(l._targets,a)&&(c?(!Un||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(n,r){r=r||{};var o=this,a=Di(o,n),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,m,g=Se.to(o,Hi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||se,onStart:function(){if(o.pause(),!m){var d=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==d&&bs(g,d,0,1).render(g._time,!0,!0),m=1}h&&h.apply(g,u||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(n,r,o){return this.tweenTo(r,Hi({startAt:{time:Di(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),mf(this,Di(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),mf(this,Di(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+se)},e.shiftChildren=function(n,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=n);return yr(this)},e.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),yr(this)},e.totalDuration=function(n){var r=0,o=this,a=o._last,l=Bi,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,sn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;bs(o,o===fe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(fe._ts&&(kd(fe,Fa(n,fe)),Bd=Ci.frame),Ci.frame>=uf){uf+=Pi.autoSleep||120;var r=fe._first;if((!r||!r._ts)&&Pi.autoSleep&&Ci._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ci.sleep()}}},t}(mo);Hi(si.prototype,{_lock:0,_hasPause:0,_forcing:0});var _b=function(t,e,i,n,r,o,a){var l=new mi(this._pt,t,e,0,1,pp,null,r),c=0,h=0,u,f,m,g,p,d,_,S;for(l.b=i,l.e=n,i+="",n+="",(_=~n.indexOf("random("))&&(n=fo(n)),o&&(S=[i,n],o(S,t,e),i=S[0],n=S[1]),f=i.match(ql)||[];u=ql.exec(n);)g=u[0],p=n.substring(c,u.index),m?m=(m+1)%5:p.substr(-5)==="rgba("&&(m=1),g!==f[h++]&&(d=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:p||h===1?p:",",s:d,c:g.charAt(1)==="="?cs(d,g)-d:parseFloat(g)-d,m:m&&m<4?Math.round:0},c=ql.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(zd.test(n)||_)&&(l.e=0),this._pt=l,l},hh=function(t,e,i,n,r,o,a,l,c,h){ge(n)&&(n=n(r||0,t,o));var u=t[e],f=i!=="get"?i:ge(u)?c?t[e.indexOf("set")||!ge(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,m=ge(u)?c?Sb:fp:fh,g;if(Ne(n)&&(~n.indexOf("random(")&&(n=fo(n)),n.charAt(1)==="="&&(g=cs(f,n)+(qe(f)||0),(g||g===0)&&(n=g))),!h||f!==n||zc)return!isNaN(f*n)&&n!==""?(g=new mi(this._pt,t,e,+f||0,n-(f||0),typeof u=="boolean"?wb:dp,0,m),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&oh(e,n),_b.call(this,t,e,f,n,m,l||Pi.stringFilter,c))},xb=function(t,e,i,n,r){if(ge(t)&&(t=no(t,r,e,i,n)),!hn(t)||t.style&&t.nodeType||$e(t)||Rd(t))return Ne(t)?no(t,r,e,i,n):t;var o={},a;for(a in t)o[a]=no(t[a],r,e,i,n);return o},cp=function(t,e,i,n,r,o){var a,l,c,h;if(wi[t]&&(a=new wi[t]).init(r,a.rawVars?e[t]:xb(e[t],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new mi(i._pt,r,t,0,1,a.render,a,0,a.priority),i!==is))for(c=i._ptLookup[i._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Un,zc,uh=function s(t,e,i){var n=t.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.onUpdateParams,u=n.callbackScope,f=n.runBackwards,m=n.yoyoEase,g=n.keyframes,p=n.autoRevert,d=t._dur,_=t._startAt,S=t._targets,y=t.parent,x=y&&y.data==="nested"?y.vars.targets:S,b=t._overwrite==="auto"&&!ih,A=t.timeline,C,v,M,L,U,it,N,D,F,q,E,k,et;if(A&&(!g||!r)&&(r="none"),t._ease=br(r,vs.ease),t._yEase=m?sp(br(m===!0?r:m,vs.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!A&&!!n.runBackwards,!A||g&&!n.stagger){if(D=S[0]?vr(S[0]).harness:0,k=D&&n[D.prop],C=Na(n,ah),_&&(_._zTime<0&&_.progress(1),e<0&&f&&a&&!p?_.render(-1,!0):_.revert(f&&d?Ma:qy),_._lazy=0),o){if(Yn(t._startAt=Se.set(S,Hi({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!_&&di(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:u,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ye||!a&&!p)&&t._startAt.revert(Ma),a&&d&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(f&&d&&!_){if(e&&(a=!1),M=Hi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&di(l),immediateRender:a,stagger:0,parent:y},C),k&&(M[D.prop]=k),Yn(t._startAt=Se.set(S,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ye?t._startAt.revert(Ma):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,se,se);else if(!e)return}for(t._pt=t._ptCache=0,l=d&&di(l)||l&&!d,v=0;v<S.length;v++){if(U=S[v],N=U._gsap||ch(S)[v]._gsap,t._ptLookup[v]=q={},Ec[N.id]&&Wn.length&&Oa(),E=x===S?v:x.indexOf(U),D&&(F=new D).init(U,k||C,t,E,x)!==!1&&(t._pt=L=new mi(t._pt,U,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(nt){q[nt]=L}),F.priority&&(it=1)),!D||k)for(M in C)wi[M]&&(F=cp(M,C,t,E,U,x))?F.priority&&(it=1):q[M]=L=hh.call(t,U,M,"get",C[M],E,x,0,n.stringFilter);t._op&&t._op[v]&&t.kill(U,t._op[v]),b&&t._pt&&(Un=t,fe.killTweensOf(U,q,t.globalTime(e)),et=!t.parent,Un=0),t._pt&&l&&(Ec[N.id]=1)}it&&mp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!et,g&&e<=0&&A.render(Bi,!0,!0)},vb=function(t,e,i,n,r,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,u,f;if(!l)for(l=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(c=u[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return zc=1,t.vars[e]="+=0",uh(t,a),zc=0,1;l.push(c)}for(f=l.length;f--;)h=l[f],c=h._pt||h,c.s=(n||n===0)&&!r?n:c.s+(n||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=xe(i)+qe(h.e)),h.b&&(h.b=c.s+qe(h.b))},yb=function(t,e){var i=t[0]?vr(t[0]).harness:0,n=i&&i.aliases,r,o,a,l;if(!n)return e;r=Pr({},e);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},bb=function(t,e,i,n){var r=e.ease||n||"power1.inOut",o,a;if($e(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},no=function(t,e,i,n,r){return ge(t)?t.call(e,i,n,r):Ne(t)&&~t.indexOf("random(")?fo(t):t},hp=lh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",up={};pi(hp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return up[s]=1});var Se=function(s){Pd(t,s);function t(i,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=s.call(this,o?n:eo(n))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,p=l.defaults,d=l.scrollTrigger,_=l.yoyoEase,S=n.parent||fe,y=($e(i)||Rd(i)?En(i[0]):"length"in n)?[i]:Ui(i),x,b,A,C,v,M,L,U;if(a._targets=y.length?ch(y):Ia("GSAP target "+i+" not found. https://greensock.com",!Pi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||f||ha(c)||ha(h)){if(n=a.vars,x=a.timeline=new si({data:"nested",defaults:p||{},targets:S&&S.data==="nested"?S.vars.targets:y}),x.kill(),x.parent=x._dp=vn(a),x._start=0,f||ha(c)||ha(h)){if(C=y.length,L=f&&Zd(f),hn(f))for(v in f)~hp.indexOf(v)&&(U||(U={}),U[v]=f[v]);for(b=0;b<C;b++)A=Na(n,up),A.stagger=0,_&&(A.yoyoEase=_),U&&Pr(A,U),M=y[b],A.duration=+no(c,vn(a),b,M,y),A.delay=(+no(h,vn(a),b,M,y)||0)-a._delay,!f&&C===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),x.to(M,A,L?L(b,M,y):0),x._ease=Jt.none;x.duration()?c=h=0:a.timeline=0}else if(g){eo(Hi(x.vars.defaults,{ease:"none"})),x._ease=br(g.ease||n.ease||"none");var it=0,N,D,F;if($e(g))g.forEach(function(q){return x.to(y,q,">")}),x.duration();else{A={};for(v in g)v==="ease"||v==="easeEach"||bb(v,g[v],A,g.easeEach);for(v in A)for(N=A[v].sort(function(q,E){return q.t-E.t}),it=0,b=0;b<N.length;b++)D=N[b],F={ease:D.e,duration:(D.t-(b?N[b-1].t:0))/100*c},F[v]=D.v,x.to(y,F,it),it+=F.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return m===!0&&!ih&&(Un=vn(a),fe.killTweensOf(y),Un=0),sn(S,vn(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(u||!c&&!g&&a._start===Be(S._time)&&di(u)&&Ky(vn(a))&&S.data!=="nested")&&(a._tTime=-se,a.render(Math.max(0,-h)||0)),d&&Xd(vn(a),d),a}var e=t.prototype;return e.render=function(n,r,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-se&&!h?l:n<se?0:n,f,m,g,p,d,_,S,y,x;if(!c)tb(this,n,r,o);else if(u!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,y=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+n,r,o);if(f=Be(u%p),u===l?(g=this._repeat,f=c):(g=~~(u/p),g&&g===u/p&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(x=this._yEase,f=c-f),d=ys(this._tTime,p),f===a&&!o&&this._initted)return this._tTime=u,this;g!==d&&(y&&this._yEase&&op(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(Be(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(qd(this,h?n:f,o,r,u))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(n,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(x||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!a&&!r&&!g&&(ki(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;y&&y.render(n<0?n:!f&&_?-se:y._dur*y._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&Ac(this,n,r,o),ki(this,"onUpdate")),this._repeat&&g!==d&&this.vars.onRepeat&&!r&&this.parent&&ki(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Ac(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Yn(this,1),!r&&!(h&&!a)&&(u||a||_)&&(ki(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},e.resetTo=function(n,r,o,a){po||Ci.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||uh(this,l),c=this._ease(l/this._dur),vb(this,n,r,o,a,c,l)?this.resetTo(n,r,o,a):(Ka(this,0),this.parent||Hd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Hs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Un&&Un.vars.overwrite!==!0)._first||Hs(this),this.parent&&o!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Ui(n):a,c=this._ptLookup,h=this._pt,u,f,m,g,p,d,_;if((!r||r==="all")&&jy(a,l))return r==="all"&&(this._pt=0),Hs(this);for(u=this._op=this._op||[],r!=="all"&&(Ne(r)&&(p={},pi(r,function(S){return p[S]=1}),r=p),r=yb(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],r==="all"?(u[_]=r,g=f,m={}):(m=u[_]=u[_]||{},g=r);for(p in g)d=f&&f[p],d&&((!("kill"in d.d)||d.d.kill(p)===!0)&&ja(this,d,"_pt"),delete f[p]),m!=="all"&&(m[p]=1)}return this._initted&&!this._pt&&h&&Hs(this),this},t.to=function(n,r){return new t(n,r,arguments[2])},t.from=function(n,r){return io(1,arguments)},t.delayedCall=function(n,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,r,o){return io(2,arguments)},t.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(n,r)},t.killTweensOf=function(n,r,o){return fe.killTweensOf(n,r,o)},t}(mo);Hi(Se.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});pi("staggerTo,staggerFrom,staggerFromTo",function(s){Se[s]=function(){var t=new si,e=Lc.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var fh=function(t,e,i){return t[e]=i},fp=function(t,e,i){return t[e](i)},Sb=function(t,e,i,n){return t[e](n.fp,i)},Mb=function(t,e,i){return t.setAttribute(e,i)},dh=function(t,e){return ge(t[e])?fp:nh(t[e])&&t.setAttribute?Mb:fh},dp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},wb=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},pp=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},ph=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Tb=function(t,e,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(t,e,i),r=o},Cb=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?ja(this,e,"_pt"):e.dep||(i=1),e=n;return!i},Eb=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},mp=function(t){for(var e=t._pt,i,n,r,o;e;){for(i=e._next,n=r;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:r=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=r},mi=function(){function s(e,i,n,r,o,a,l,c,h){this.t=i,this.s=r,this.c=o,this.p=n,this.r=a||dp,this.d=l||this,this.set=c||fh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=Eb,this.m=i,this.mt=r,this.tween=n},s}();pi(lh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return ah[s]=1});Li.TweenMax=Li.TweenLite=Se;Li.TimelineLite=Li.TimelineMax=si;fe=new si({sortChildren:!1,defaults:vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pi.stringFilter=rp;var Sr=[],Ta={},Ab=[],_f=0,Pb=0,Jl=function(t){return(Ta[t]||Ab).map(function(e){return e()})},Ic=function(){var t=Date.now(),e=[];t-_f>2&&(Jl("matchMediaInit"),Sr.forEach(function(i){var n=i.queries,r=i.conditions,o,a,l,c;for(a in n)o=zi.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),Jl("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i)}),_f=t,Jl("matchMedia"))},gp=function(){function s(e,i){this.selector=i&&Rc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Pb++,e&&this.add(e)}var t=s.prototype;return t.add=function(i,n,r){ge(i)&&(r=n,n=i,i=ge);var o=this,a=function(){var c=me,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=Rc(r)),me=o,u=n.apply(o,arguments),ge(u)&&o._r.push(u),me=c,o.selector=h,o.isReverted=!1,u};return o.last=a,i===ge?a(o):i?o[i]=a:a},t.ignore=function(i){var n=me;me=null,i(this),me=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof Se&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var r=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return l instanceof si?l.data!=="nested"&&l.kill():!(l instanceof Se)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),n)for(var a=Sr.length;a--;)Sr[a].id===this.id&&Sr.splice(a,1)},t.revert=function(i){this.kill(i||{})},s}(),Lb=function(){function s(e){this.contexts=[],this.scope=e}var t=s.prototype;return t.add=function(i,n,r){hn(i)||(i={matches:i});var o=new gp(0,r||this.scope),a=o.conditions={},l,c,h;me&&!o.selector&&(o.selector=me.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=zi.matchMedia(i[c]),l&&(Sr.indexOf(o)<0&&Sr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ic):l.addEventListener("change",Ic)));return h&&n(o),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s}(),Ba={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return ep(n)})},timeline:function(t){return new si(t)},getTweensOf:function(t,e){return fe.getTweensOf(t,e)},getProperty:function(t,e,i,n){Ne(t)&&(t=Ui(t)[0]);var r=vr(t||{}).get,o=i?Vd:Gd;return i==="native"&&(i=""),t&&(e?o((wi[e]&&wi[e].get||r)(t,e,i,n)):function(a,l,c){return o((wi[a]&&wi[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=Ui(t),t.length>1){var n=t.map(function(h){return gi.quickSetter(h,e,i)}),r=n.length;return function(h){for(var u=r;u--;)n[u](h)}}t=t[0]||{};var o=wi[e],a=vr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;is._pt=0,u.init(t,i?h+i:h,is,0,[t]),u.render(1,u),is._pt&&ph(1,is)}:a.set(t,l);return o?c:function(h){return c(t,l,i?h+i:h,a,1)}},quickTo:function(t,e,i){var n,r=gi.to(t,Pr((n={},n[e]="+=0.1",n.paused=!0,n),i||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=br(t.ease,vs.ease)),ff(vs,t||{})},config:function(t){return ff(Pi,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,r=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!wi[a]&&!Li[a]&&Ia(e+" effect requires "+a+" plugin.")}),Yl[e]=function(a,l,c){return i(Ui(a),Hi(l||{},r),c)},o&&(si.prototype[e]=function(a,l,c){return this.add(Yl[e](a,hn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Jt[t]=br(e)},parseEase:function(t,e){return arguments.length?br(t,e):Jt},getById:function(t){return fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new si(t),n,r;for(i.smoothChildTiming=di(t.smoothChildTiming),fe.remove(i),i._dp=0,i._time=i._tTime=fe._time,n=fe._first;n;)r=n._next,(e||!(!n._dur&&n instanceof Se&&n.vars.onComplete===n._targets[0]))&&sn(i,n,n._start-n._delay),n=r;return sn(fe,i,0),i},context:function(t,e){return t?new gp(t,e):me},matchMedia:function(t){return new Lb(t)},matchMediaRefresh:function(){return Sr.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||Ic()},addEventListener:function(t,e){var i=Ta[t]||(Ta[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Ta[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:lb,wrapYoyo:cb,distribute:Zd,random:Jd,snap:jd,normalize:ab,getUnit:qe,clamp:nb,splitColor:ip,toArray:Ui,selector:Rc,mapRange:Qd,pipe:sb,unitize:ob,interpolate:hb,shuffle:$d},install:Nd,effects:Yl,ticker:Ci,updateRoot:si.updateRoot,plugins:wi,globalTimeline:fe,core:{PropTween:mi,globals:Fd,Tween:Se,Timeline:si,Animation:mo,getCache:vr,_removeLinkedListItem:ja,reverting:function(){return Ye},context:function(t){return t&&me&&(me.data.push(t),t._ctx=me),me},suppressOverwrites:function(t){return ih=t}}};pi("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ba[s]=Se[s]});Ci.add(si.updateRoot);is=Ba.to({},{duration:0});var Rb=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},Db=function(t,e){var i=t._targets,n,r,o;for(n in e)for(r=i.length;r--;)o=t._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=Rb(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[r],n))},Kl=function(t,e){return{name:t,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,c;if(Ne(r)&&(l={},pi(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Db(a,r)}}}},gi=Ba.registerPlugin({name:"attr",init:function(t,e,i,n,r){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Ye?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Kl("roundProps",Dc),Kl("modifiers"),Kl("snap",jd))||Ba;Se.version=si.version=gi.version="3.12.1";Od=1;rh()&&Ss();Jt.Power0;Jt.Power1;Jt.Power2;Jt.Power3;Jt.Power4;Jt.Linear;Jt.Quad;Jt.Cubic;Jt.Quart;Jt.Quint;Jt.Strong;Jt.Elastic;Jt.Back;Jt.SteppedEase;Jt.Bounce;Jt.Sine;Jt.Expo;Jt.Circ;/*!
 * CSSPlugin 3.12.1
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xf,kn,hs,mh,dr,vf,gh,zb=function(){return typeof window<"u"},An={},lr=180/Math.PI,us=Math.PI/180,Yr=Math.atan2,yf=1e8,_h=/([A-Z])/g,Ib=/(left|right|width|margin|padding|x)/i,Ob=/[\s,\(]\S/,on={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Oc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Nb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Fb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Bb=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},_p=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},xp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Ub=function(t,e,i){return t.style[e]=i},kb=function(t,e,i){return t.style.setProperty(e,i)},Gb=function(t,e,i){return t._gsap[e]=i},Vb=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Hb=function(t,e,i,n,r){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},Wb=function(t,e,i,n,r){var o=t._gsap;o[e]=i,o.renderTransform(r,o)},pe="transform",Qi=pe+"Origin",Xb=function s(t,e){var i=this,n=this.target,r=n.style;if(t in An&&r){if(this.tfm=this.tfm||{},t!=="transform")t=on[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=yn(n,o)}):this.tfm[t]=n._gsap.x?n._gsap[t]:yn(n,t);else return on.transform.split(",").forEach(function(o){return s.call(i,o,e)});if(this.props.indexOf(pe)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Qi,e,"")),t=pe}(r||e)&&this.props.push(t,e,r[t])},vp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},qb=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(_h,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=gh(),(!r||!r.isStart)&&!i[pe]&&(vp(i),n.uncache=1)}},yp=function(t,e){var i={target:t,props:[],revert:qb,save:Xb};return t._gsap||gi.core.getCache(t),e&&e.split(",").forEach(function(n){return i.save(n)}),i},bp,Nc=function(t,e){var i=kn.createElementNS?kn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):kn.createElement(t);return i.style?i:kn.createElement(t)},cn=function s(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(_h,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&s(t,Ms(e)||e,1)||""},bf="O,Moz,ms,Ms,Webkit".split(","),Ms=function(t,e,i){var n=e||dr,r=n.style,o=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(bf[o]+t in r););return o<0?null:(o===3?"ms":o>=0?bf[o]:"")+t},Fc=function(){zb()&&window.document&&(xf=window,kn=xf.document,hs=kn.documentElement,dr=Nc("div")||{style:{}},Nc("div"),pe=Ms(pe),Qi=pe+"Origin",dr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bp=!!Ms("perspective"),gh=gi.core.reverting,mh=1)},Ql=function s(t){var e=Nc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,r=this.style.cssText,o;if(hs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),hs.removeChild(e),this.style.cssText=r,o},Sf=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Sp=function(t){var e;try{e=t.getBBox()}catch{e=Ql.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ql||(e=Ql.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Sf(t,["x","cx","x1"])||0,y:+Sf(t,["y","cy","y1"])||0,width:0,height:0}:e},Mp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Sp(t))},go=function(t,e){if(e){var i=t.style;e in An&&e!==Qi&&(e=pe),i.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(e.replace(_h,"-$1").toLowerCase())):i.removeAttribute(e)}},Gn=function(t,e,i,n,r,o){var a=new mi(t._pt,e,i,0,1,o?xp:_p);return t._pt=a,a.b=n,a.e=r,t._props.push(i),a},Mf={deg:1,rad:1,turn:1},Yb={grid:1,flex:1},$n=function s(t,e,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=dr.style,l=Ib.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=n==="px",m=n==="%",g,p,d,_;return n===o||!r||Mf[n]||Mf[o]?r:(o!=="px"&&!f&&(r=s(t,e,i,"px")),_=t.getCTM&&Mp(t),(m||o==="%")&&(An[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[l?"width":"height"]:t[h],xe(m?r/g*u:r/100*g)):(a[l?"width":"height"]=u+(f?o:n),p=~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(p=(t.ownerSVGElement||{}).parentNode),(!p||p===kn||!p.appendChild)&&(p=kn.body),d=p._gsap,d&&m&&d.width&&l&&d.time===Ci.time&&!d.uncache?xe(r/d.width*u):((m||o==="%")&&!Yb[cn(p,"display")]&&(a.position=cn(t,"position")),p===t&&(a.position="static"),p.appendChild(dr),g=dr[h],p.removeChild(dr),a.position="absolute",l&&m&&(d=vr(p),d.time=Ci.time,d.width=p[h]),xe(f?g*r/u:g&&r?u/g*r:0))))},yn=function(t,e,i,n){var r;return mh||Fc(),e in on&&e!=="transform"&&(e=on[e],~e.indexOf(",")&&(e=e.split(",")[0])),An[e]&&e!=="transform"?(r=xo(t,n),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ka(cn(t,Qi))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Ua[e]&&Ua[e](t,e,i)||cn(t,e)||Ud(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?$n(t,e,r,i)+i:r},$b=function(t,e,i,n){if(!i||i==="none"){var r=Ms(e,t,1),o=r&&cn(t,r,1);o&&o!==i?(e=r,i=o):e==="borderColor"&&(i=cn(t,"borderTopColor"))}var a=new mi(this._pt,t.style,e,0,1,pp),l=0,c=0,h,u,f,m,g,p,d,_,S,y,x,b;if(a.b=i,a.e=n,i+="",n+="",n==="auto"&&(t.style[e]=n,n=cn(t,e)||n,t.style[e]=i),h=[i,n],rp(h),i=h[0],n=h[1],f=i.match(es)||[],b=n.match(es)||[],b.length){for(;u=es.exec(n);)d=u[0],S=n.substring(l,u.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),d!==(p=f[c++]||"")&&(m=parseFloat(p)||0,x=p.substr((m+"").length),d.charAt(1)==="="&&(d=cs(m,d)+x),_=parseFloat(d),y=d.substr((_+"").length),l=es.lastIndex-y.length,y||(y=y||Pi.units[e]||x,l===n.length&&(n+=y,a.e+=y)),x!==y&&(m=$n(t,e,p,y)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=e==="display"&&n==="none"?xp:_p;return zd.test(n)&&(a.e=0),this._pt=a,a},wf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zb=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=wf[i]||i,e[1]=wf[n]||n,e.join(" ")},jb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,r=e.u,o=i._gsap,a,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],An[a]&&(l=1,a=a==="transformOrigin"?Qi:pe),go(i,a);l&&(go(i,pe),o&&(o.svg&&i.removeAttribute("transform"),xo(i,1),o.uncache=1,vp(n)))}},Ua={clearProps:function(t,e,i,n,r){if(r.data!=="isFromStart"){var o=t._pt=new mi(t._pt,e,i,0,0,jb);return o.u=n,o.pr=-10,o.tween=r,t._props.push(i),1}}},_o=[1,0,0,1,0,0],wp={},Tp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Tf=function(t){var e=cn(t,pe);return Tp(e)?_o:e.substr(7).match(Dd).map(xe)},xh=function(t,e){var i=t._gsap||vr(t),n=t.style,r=Tf(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?_o:r):(r===_o&&!t.offsetParent&&t!==hs&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,hs.appendChild(t)),r=Tf(t),l?n.display=l:go(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):hs.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Bc=function(t,e,i,n,r,o){var a=t._gsap,l=r||xh(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,m=l[0],g=l[1],p=l[2],d=l[3],_=l[4],S=l[5],y=e.split(" "),x=parseFloat(y[0])||0,b=parseFloat(y[1])||0,A,C,v,M;i?l!==_o&&(C=m*d-g*p)&&(v=x*(d/C)+b*(-p/C)+(p*S-d*_)/C,M=x*(-g/C)+b*(m/C)-(m*S-g*_)/C,x=v,b=M):(A=Sp(t),x=A.x+(~y[0].indexOf("%")?x/100*A.width:x),b=A.y+(~(y[1]||y[0]).indexOf("%")?b/100*A.height:b)),n||n!==!1&&a.smooth?(_=x-c,S=b-h,a.xOffset=u+(_*m+S*p)-_,a.yOffset=f+(_*g+S*d)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=b,a.smooth=!!n,a.origin=e,a.originIsAbsolute=!!i,t.style[Qi]="0px 0px",o&&(Gn(o,a,"xOrigin",c,x),Gn(o,a,"yOrigin",h,b),Gn(o,a,"xOffset",u,a.xOffset),Gn(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+b)},xo=function(t,e){var i=t._gsap||new lp(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=cn(t,Qi)||"0",h,u,f,m,g,p,d,_,S,y,x,b,A,C,v,M,L,U,it,N,D,F,q,E,k,et,nt,V,H,K,Z,at;return h=u=f=p=d=_=S=y=x=0,m=g=1,i.svg=!!(t.getCTM&&Mp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[pe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[pe]!=="none"?l[pe]:"")),n.scale=n.rotate=n.translate="none"),C=xh(t,i.svg),i.svg&&(i.uncache?(k=t.getBBox(),c=i.xOrigin-k.x+"px "+(i.yOrigin-k.y)+"px",E=""):E=!e&&t.getAttribute("data-svg-origin"),Bc(t,E||c,!!E||i.originIsAbsolute,i.smooth!==!1,C)),b=i.xOrigin||0,A=i.yOrigin||0,C!==_o&&(U=C[0],it=C[1],N=C[2],D=C[3],h=F=C[4],u=q=C[5],C.length===6?(m=Math.sqrt(U*U+it*it),g=Math.sqrt(D*D+N*N),p=U||it?Yr(it,U)*lr:0,S=N||D?Yr(N,D)*lr+p:0,S&&(g*=Math.abs(Math.cos(S*us))),i.svg&&(h-=b-(b*U+A*N),u-=A-(b*it+A*D))):(at=C[6],K=C[7],nt=C[8],V=C[9],H=C[10],Z=C[11],h=C[12],u=C[13],f=C[14],v=Yr(at,H),d=v*lr,v&&(M=Math.cos(-v),L=Math.sin(-v),E=F*M+nt*L,k=q*M+V*L,et=at*M+H*L,nt=F*-L+nt*M,V=q*-L+V*M,H=at*-L+H*M,Z=K*-L+Z*M,F=E,q=k,at=et),v=Yr(-N,H),_=v*lr,v&&(M=Math.cos(-v),L=Math.sin(-v),E=U*M-nt*L,k=it*M-V*L,et=N*M-H*L,Z=D*L+Z*M,U=E,it=k,N=et),v=Yr(it,U),p=v*lr,v&&(M=Math.cos(v),L=Math.sin(v),E=U*M+it*L,k=F*M+q*L,it=it*M-U*L,q=q*M-F*L,U=E,F=k),d&&Math.abs(d)+Math.abs(p)>359.9&&(d=p=0,_=180-_),m=xe(Math.sqrt(U*U+it*it+N*N)),g=xe(Math.sqrt(q*q+at*at)),v=Yr(F,q),S=Math.abs(v)>2e-4?v*lr:0,x=Z?1/(Z<0?-Z:Z):0),i.svg&&(E=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Tp(cn(t,pe)),E&&t.setAttribute("transform",E))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(m*=-1,S+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=u-((i.yPercent=u&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=xe(m),i.scaleY=xe(g),i.rotation=xe(p)+a,i.rotationX=xe(d)+a,i.rotationY=xe(_)+a,i.skewX=S+a,i.skewY=y+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(c.split(" ")[2])||0)&&(n[Qi]=ka(c)),i.xOffset=i.yOffset=0,i.force3D=Pi.force3D,i.renderTransform=i.svg?Kb:bp?Cp:Jb,i.uncache=0,i},ka=function(t){return(t=t.split(" "))[0]+" "+t[1]},tc=function(t,e,i){var n=qe(e);return xe(parseFloat(e)+parseFloat($n(t,"x",i+"px",n)))+n},Jb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Cp(t,e)},er="0deg",Fs="0px",ir=") ",Cp=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,f=i.skewX,m=i.skewY,g=i.scaleX,p=i.scaleY,d=i.transformPerspective,_=i.force3D,S=i.target,y=i.zOrigin,x="",b=_==="auto"&&t&&t!==1||_===!0;if(y&&(u!==er||h!==er)){var A=parseFloat(h)*us,C=Math.sin(A),v=Math.cos(A),M;A=parseFloat(u)*us,M=Math.cos(A),o=tc(S,o,C*M*-y),a=tc(S,a,-Math.sin(A)*-y),l=tc(S,l,v*M*-y+y)}d!==Fs&&(x+="perspective("+d+ir),(n||r)&&(x+="translate("+n+"%, "+r+"%) "),(b||o!==Fs||a!==Fs||l!==Fs)&&(x+=l!==Fs||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ir),c!==er&&(x+="rotate("+c+ir),h!==er&&(x+="rotateY("+h+ir),u!==er&&(x+="rotateX("+u+ir),(f!==er||m!==er)&&(x+="skew("+f+", "+m+ir),(g!==1||p!==1)&&(x+="scale("+g+", "+p+ir),S.style[pe]=x||"translate(0, 0)"},Kb=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,f=i.scaleY,m=i.target,g=i.xOrigin,p=i.yOrigin,d=i.xOffset,_=i.yOffset,S=i.forceCSS,y=parseFloat(o),x=parseFloat(a),b,A,C,v,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=us,c*=us,b=Math.cos(l)*u,A=Math.sin(l)*u,C=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(h*=us,M=Math.tan(c-h),M=Math.sqrt(1+M*M),C*=M,v*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),b*=M,A*=M)),b=xe(b),A=xe(A),C=xe(C),v=xe(v)):(b=u,v=f,A=C=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=$n(m,"x",o,"px"),x=$n(m,"y",a,"px")),(g||p||d||_)&&(y=xe(y+g-(g*b+p*C)+d),x=xe(x+p-(g*A+p*v)+_)),(n||r)&&(M=m.getBBox(),y=xe(y+n/100*M.width),x=xe(x+r/100*M.height)),M="matrix("+b+","+A+","+C+","+v+","+y+","+x+")",m.setAttribute("transform",M),S&&(m.style[pe]=M)},Qb=function(t,e,i,n,r){var o=360,a=Ne(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?lr:1),c=l-n,h=n+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*yf)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*yf)%o-~~(c/o)*o)),t._pt=f=new mi(t._pt,e,i,n,c,Nb),f.e=h,f.u="deg",t._props.push(i),f},Cf=function(t,e){for(var i in e)t[i]=e[i];return t},tS=function(t,e,i){var n=Cf({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,u,f,m,g;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[pe]=e,a=xo(i,1),go(i,pe),i.setAttribute("transform",c)):(c=getComputedStyle(i)[pe],o[pe]=e,a=xo(i,1),o[pe]=c);for(l in An)c=n[l],h=a[l],c!==h&&r.indexOf(l)<0&&(m=qe(c),g=qe(h),u=m!==g?$n(i,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new mi(t._pt,a,l,u,f-u,Oc),t._pt.u=g||0,t._props.push(l));Cf(a,n)};pi("padding,margin,Width,Radius",function(s,t){var e="Top",i="Right",n="Bottom",r="Left",o=(t<3?[e,i,n,r]:[e+r,e+i,n+i,n+r]).map(function(a){return t<2?s+a:"border"+a+s});Ua[t>1?"border"+s:s]=function(a,l,c,h,u){var f,m;if(arguments.length<4)return f=o.map(function(g){return yn(a,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(h+"").split(" "),m={},o.forEach(function(g,p){return m[g]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,m,u)}});var Ep={name:"css",register:Fc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,r){var o=this._props,a=t.style,l=i.vars.startAt,c,h,u,f,m,g,p,d,_,S,y,x,b,A,C,v;mh||Fc(),this.styles=this.styles||yp(t),v=this.styles.props,this.tween=i;for(p in e)if(p!=="autoRound"&&(h=e[p],!(wi[p]&&cp(p,e,i,n,t,r)))){if(m=typeof h,g=Ua[p],m==="function"&&(h=h.call(i,n,t,r),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=fo(h)),g)g(this,t,p,h,i)&&(C=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(p)+"").trim(),h+="",Xn.lastIndex=0,Xn.test(c)||(d=qe(c),_=qe(h)),_?d!==_&&(c=$n(t,p,c,_)+_):d&&(h+=d),this.add(a,"setProperty",c,h,n,r,0,0,p),o.push(p),v.push(p,0,a[p]);else if(m!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,n,t,r):l[p],Ne(c)&&~c.indexOf("random(")&&(c=fo(c)),qe(c+"")||(c+=Pi.units[p]||qe(yn(t,p))||""),(c+"").charAt(1)==="="&&(c=yn(t,p))):c=yn(t,p),f=parseFloat(c),S=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),p in on&&(p==="autoAlpha"&&(f===1&&yn(t,"visibility")==="hidden"&&u&&(f=0),v.push("visibility",0,a.visibility),Gn(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),p!=="scale"&&p!=="transform"&&(p=on[p],~p.indexOf(",")&&(p=p.split(",")[0]))),y=p in An,y){if(this.styles.save(p),x||(b=t._gsap,b.renderTransform&&!e.parseTransform||xo(t,e.parseTransform),A=e.smoothOrigin!==!1&&b.smooth,x=this._pt=new mi(this._pt,a,pe,0,1,b.renderTransform,b,0,-1),x.dep=1),p==="scale")this._pt=new mi(this._pt,b,"scaleY",b.scaleY,(S?cs(b.scaleY,S+u):u)-b.scaleY||0,Oc),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){v.push(Qi,0,a[Qi]),h=Zb(h),b.svg?Bc(t,h,0,A,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==b.zOrigin&&Gn(this,b,"zOrigin",b.zOrigin,_),Gn(this,a,p,ka(c),ka(h)));continue}else if(p==="svgOrigin"){Bc(t,h,1,A,0,this);continue}else if(p in wp){Qb(this,b,p,f,S?cs(f,S+h):h);continue}else if(p==="smoothOrigin"){Gn(this,b,"smooth",b.smooth,h);continue}else if(p==="force3D"){b[p]=h;continue}else if(p==="transform"){tS(this,h,t);continue}}else p in a||(p=Ms(p)||p);if(y||(u||u===0)&&(f||f===0)&&!Ob.test(h)&&p in a)d=(c+"").substr((f+"").length),u||(u=0),_=qe(h)||(p in Pi.units?Pi.units[p]:d),d!==_&&(f=$n(t,p,c,_)),this._pt=new mi(this._pt,y?b:a,p,f,(S?cs(f,S+u):u)-f,!y&&(_==="px"||p==="zIndex")&&e.autoRound!==!1?Bb:Oc),this._pt.u=_||0,d!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Fb);else if(p in a)$b.call(this,t,p,c,S?S+h:h);else if(p in t)this.add(t,p,c||t[p],S?S+h:h,n,r);else if(p!=="parseTransform"){oh(p,h);continue}y||(p in a?v.push(p,0,a[p]):v.push(p,1,c||t[p])),o.push(p)}}C&&mp(this)},render:function(t,e){if(e.tween._time||!gh())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:yn,aliases:on,getSetter:function(t,e,i){var n=on[e];return n&&n.indexOf(",")<0&&(e=n),e in An&&e!==Qi&&(t._gsap.x||yn(t,"x"))?i&&vf===i?e==="scale"?Vb:Gb:(vf=i||{})&&(e==="scale"?Hb:Wb):t.style&&!nh(t.style[e])?Ub:~e.indexOf("-")?kb:dh(t,e)},core:{_removeProperty:go,_getMatrix:xh}};gi.utils.checkPrefix=Ms;gi.core.getStyleSaver=yp;(function(s,t,e,i){var n=pi(s+","+t+","+e,function(r){An[r]=1});pi(t,function(r){Pi.units[r]="deg",wp[r]=1}),on[n[13]]=s+","+t,pi(i,function(r){var o=r.split(":");on[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");pi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Pi.units[s]="px"});gi.registerPlugin(Ep);var ai=gi.registerPlugin(Ep)||gi;ai.core.Tween;class eS{constructor(t,e){this.gsap=t,this.tl=this.gsap.timeline(),this.gui=e,this.group01=[],this.group02=[],this.group03=[],this.fristScroll=!0,this.aboutGroup01,this.aboutGroup03,this.scene,this.camera,this.currentGroup,this.animation=!1,this.fristHeight,this.fristMargin,this.secondHeight,this.secondClientHeight,this.secondMargin,this.thirdHeight,this.thirdTrigger,this.trigger=document.querySelector(".animationtrigger"),this.about=document.querySelector(".about"),this.aboutFirstWrapper=document.querySelector(".aboutFirstWrapper"),this.aboutSecondWrapper=document.querySelector(".aboutSecondWrapper"),this.secondSubjects=document.querySelectorAll(".aboutSecondSubject"),this.aboutThridWrapper=document.querySelector(".aboutThridWrapper"),this.aboutThirdContentTittle=document.querySelector(".aboutThirdContentTittle"),this.aboutThirdContentTittles=document.querySelectorAll(".aboutThirdContentTittle"),this.aboutThirdStickWrappers=document.querySelectorAll(".aboutThirdStickWrapper"),this.aboutThirdStickWrapper=document.querySelector(".aboutThirdStickWrapper"),this.aboutThirdContentWrapper=document.querySelector(".aboutThirdContentWrapper")}createMesh(t,e,i,n,r){this.aboutGroup01=t,this.aboutGroup03=e,this.scene=i,this.camera=n,this.currentGroup=r,this.tl.to(this.trigger,{opacity:0}).to(this.trigger,{opacity:1,onComplte:()=>{this.resize(),this.createBox1(),this.createBox3(),this.scrollTrigger()}})}createBox1(){for(let i=0;i<this.aboutGroup01.box1Count;i++){let n=this.aboutGroup01.box1.clone();this.group01.push(n),this.currentGroup.add(n);let r=Math.PI/180*(360/this.aboutGroup01.box1Count*i),o=Math.cos(r)*this.aboutGroup01.radius,a=Math.sin(r)*this.aboutGroup01.radius;n.rotation.z=r,n.position.set(o,a,0),i%2==0?this.aboutGroup01.group3.add(n):this.aboutGroup01.group1.add(n)}this.aboutGroup01.group1.add(this.aboutGroup01.group3);for(let i=0;i<this.aboutGroup01.box2Count;i++){let n=this.aboutGroup01.box1.clone();this.group01.push(n),this.currentGroup.add(n);let r=Math.PI/180*(360/this.aboutGroup01.box1Count*i),o=Math.cos(r)*this.aboutGroup01.radius,a=Math.sin(r)*this.aboutGroup01.radius;n.rotation.z=r,n.position.set(o,a,0),i%2==1?this.aboutGroup01.group4.add(n):this.aboutGroup01.group2.add(n)}this.aboutGroup01.group2.add(this.aboutGroup01.group4);let t=3,e=t+this.aboutGroup01.radius;this.aboutGroup01.group1.position.set(t,0,0),this.aboutGroup01.group1.rotation.x=Math.PI/180*-40,this.aboutGroup01.group2.position.set(e,0,0),this.aboutGroup01.group2.rotation.x=Math.PI/180*40,this.scene.add(this.aboutGroup01.group1,this.aboutGroup01.group2),this.interval=setInterval(()=>{let i=this.aboutGroup01.group1.rotation.z,n=this.aboutGroup01.group2.rotation.z;this.gsap.to(this.aboutGroup01.group1.rotation,{z:i+10,duration:1.4,ease:"power4.out"}),this.gsap.to(this.aboutGroup01.group2.rotation,{z:n-10,duration:1.4,ease:"power4.out"})},3e3),this.resize()}createBox3(){let t=0;for(let e=0;e<this.aboutGroup03.box2xGrid;e++)for(let i=0;i<this.aboutGroup03.box2yGrid;i++){let n=this.aboutGroup03.box2[t];n.layers.set(1),n.position.set(-5,0,0),n.material.opacity=0,this.group03.push(n),this.currentGroup.add(n),t++,this.scene.add(n);let r=Math.random();r<=.25?this.aboutGroup03.group1.add(n):r>.25&&r<=.5?this.aboutGroup03.group2.add(n):r>.5&&r<=.75?this.aboutGroup03.group3.add(n):r>.75&&r<=1&&this.aboutGroup03.group4.add(n)}this.scene.add(this.aboutGroup03.group1,this.aboutGroup03.group2,this.aboutGroup03.group3,this.aboutGroup03.group4),this.resize()}scrollTrigger(){this.boxImageSwich(0)}objectScrollAnimation(){if(this.fristScroll==!0&&this.resize(),this.fristScroll=!1,this.scroll=window.scrollY,this.scroll<=this.fristHeight){let t=this.scroll/this.fristHeight*8,e=this.scroll/this.fristHeight*7,i=this.scroll/this.fristHeight*3,n=this.scroll/this.fristHeight*2;this.gsap.to(this.aboutGroup01.group1.position,{y:t,duration:.23}),this.gsap.to(this.aboutGroup01.group2.position,{y:e,duration:.4}),this.gsap.to(this.aboutGroup01.group3.position,{z:i,duration:.5}),this.gsap.to(this.aboutGroup01.group4.position,{z:n,duration:.66}),this.group03.forEach(r=>{r.position.set(-5,0,0)});for(let r=0;r<this.aboutGroup03.group1.children.length;r++)this.aboutGroup03.group1.children[r].material.opacity=0;for(let r=0;r<this.aboutGroup03.group2.children.length;r++)this.aboutGroup03.group2.children[r].material.opacity=0;for(let r=0;r<this.aboutGroup03.group2.children.length;r++)this.aboutGroup03.group2.children[r].material.opacity=0;for(let r=0;r<this.aboutGroup03.group3.children.length;r++)this.aboutGroup03.group3.children[r].material.opacity=0;for(let r=0;r<this.aboutGroup03.group4.children.length;r++)this.aboutGroup03.group4.children[r].material.opacity=0}if(this.scroll>this.fristHeight&&this.scroll<=this.secondHeight+this.secondClientHeight){if(this.meshPosition(),this.scroll>=this.fristHeight&&this.scroll<this.fristHeight+this.fristMargin/4){for(let e=0;e<this.aboutGroup03.group1.children.length;e++)this.gsap.to(this.aboutGroup03.group1.children[e].material,{opacity:0,duration:.4}),this.gsap.to(this.secondSubjects[0],{opacity:0,duration:.3});let t=0;for(let e=0;e<this.aboutGroup03.box2xGrid;e++)for(let i=0;i<this.aboutGroup03.box2yGrid;i++){let n=e*this.aboutGroup03.xSize-this.aboutGroup03.box2xGrid*this.aboutGroup03.xSize/2+this.aboutGroup03.xSize/2+2,r=i*this.aboutGroup03.ySize-this.aboutGroup03.box2yGrid*this.aboutGroup03.ySize/2+this.aboutGroup03.ySize/2;this.group03[t].position.set(n,r,0),t++}}if(this.scroll>=this.fristHeight+this.fristMargin/4&&this.scroll<=this.fristHeight+this.fristMargin/2){for(let t=0;t<this.aboutGroup03.group1.children.length;t++)this.gsap.to(this.aboutGroup03.group1.children[t].material,{opacity:0,duration:.4});this.gsap.to(this.secondSubjects[0],{opacity:0,duration:.3})}if(this.scroll>=this.fristHeight+this.fristMargin-this.secondGsapTrigger&&this.scroll<this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*15){for(let e=0;e<this.aboutGroup03.group1.children.length;e++)this.gsap.to(this.aboutGroup03.group1.children[e].material,{opacity:1,duration:.3});for(let e=0;e<this.aboutGroup03.group2.children.length;e++)this.gsap.to(this.aboutGroup03.group2.children[e].material,{opacity:0,duration:.3});this.gsap.to(this.secondSubjects[0],{opacity:1,duration:.3}),this.gsap.to(this.secondSubjects[1],{opacity:0,duration:.3});let t=0;for(let e=0;e<this.aboutGroup03.box2xGrid;e++)for(let i=0;i<this.aboutGroup03.box2yGrid;i++){let n=e*this.aboutGroup03.xSize-this.aboutGroup03.box2xGrid*this.aboutGroup03.xSize/2+this.aboutGroup03.xSize/2+2,r=i*this.aboutGroup03.ySize-this.aboutGroup03.box2yGrid*this.aboutGroup03.ySize/2+this.aboutGroup03.ySize/2;this.group03[t].position.set(n,r,0),t++}}if(this.scroll>=this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*15&&this.scroll<this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*30){for(let t=0;t<this.aboutGroup03.group1.children.length;t++)this.aboutGroup03.group1.children[t].material.opacity=1;for(let t=0;t<this.aboutGroup03.group2.children.length;t++)this.gsap.to(this.aboutGroup03.group2.children[t].material,{opacity:1,duration:.3});for(let t=0;t<this.aboutGroup03.group3.children.length;t++)this.gsap.to(this.aboutGroup03.group3.children[t].material,{opacity:0,duration:.3});this.gsap.to(this.secondSubjects[1],{opacity:1,duration:.3}),this.gsap.to(this.secondSubjects[2],{opacity:0,duration:.3}),this.meshPosition()}if(this.scroll>=this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*30&&this.scroll<this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*45){for(let t=0;t<this.aboutGroup03.group2.children.length;t++)this.aboutGroup03.group2.children[t].material.opacity=1;for(let t=0;t<this.aboutGroup03.group3.children.length;t++)this.gsap.to(this.aboutGroup03.group3.children[t].material,{opacity:1,duration:.3});for(let t=0;t<this.aboutGroup03.group4.children.length;t++)this.gsap.to(this.aboutGroup03.group4.children[t].material,{opacity:0,duration:.3});this.gsap.to(this.secondSubjects[2],{opacity:1,duration:.3}),this.gsap.to(this.secondSubjects[3],{opacity:0,duration:.3})}if(this.scroll>=this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*45&&this.scroll<this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*60){for(let t=0;t<this.aboutGroup03.group3.children.length;t++)this.aboutGroup03.group3.children[t].material.opacity=1;for(let t=0;t<this.aboutGroup03.group4.children.length;t++)this.gsap.to(this.aboutGroup03.group4.children[t].material,{opacity:1,duration:.3});this.gsap.to(this.secondSubjects[3],{opacity:1,duration:.3})}}if(this.scroll<=this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2&&this.scroll>this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*60&&(this.meshOpacity(),this.gsap.to(this.aboutThirdStickWrappers[0],{opacity:0,duration:.4})),this.scroll>=this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2&&this.scroll<this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight){this.meshOpacity(),this.boxImageSwich(0);for(let t=0;t<this.aboutGroup03.group4.children.length;t++)this.aboutGroup03.group4.children[t].material.opacity=1;this.gsap.to(this.aboutThirdStickWrappers[0],{opacity:1,duration:.4}),this.gsap.to(this.aboutThirdStickWrappers[1],{opacity:0,duration:.4})}this.scroll>=this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight&&this.scroll<this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*2&&(this.meshOpacity(),this.boxImageSwich(1),this.gsap.to(this.aboutThirdStickWrappers[0],{opacity:1,duration:.4}),this.gsap.to(this.aboutThirdStickWrappers[1],{opacity:1,duration:.4}),this.gsap.to(this.aboutThirdStickWrappers[2],{opacity:0,duration:.4})),this.scroll>=this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*2&&this.scroll<this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*3&&(this.meshOpacity(),this.boxImageSwich(2),this.gsap.to(this.aboutThirdStickWrappers[1],{opacity:0,duration:.4}),this.gsap.to(this.aboutThirdStickWrappers[2],{opacity:1,duration:.4}),this.gsap.to(this.aboutThirdStickWrappers[3],{opacity:0,duration:.4})),this.scroll>=this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*3&&this.scroll<this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*4&&(this.meshOpacity(),this.boxImageSwich(3),this.gsap.to(this.aboutThirdStickWrappers[2],{opacity:0,duration:.4}),this.gsap.to(this.aboutThirdStickWrappers[3],{opacity:1,duration:.4}))}resize(){if(this.width=window.innerWidth,this.height=window.innerHeight,this.secondGsapTrigger=this.height/100*15,this.fristHeight=this.aboutFirstWrapper.scrollHeight,this.fristMargin=this.height/2,this.secondHeight=this.aboutSecondWrapper.scrollHeight,this.secondClientHeight=this.aboutSecondWrapper.clientHeight,this.secondMargin=this.height,this.thirdHeight=this.aboutThridWrapper.scrollHeight,this.thirdTrigger=this.aboutThirdContentWrapper.clientHeight/100*15,this.width<480){for(let t=0;t<this.group01.length;t++)this.group01[t].material.opacity=0;this.aboutGroup03.group1.scale.set(.5,.5,.5),this.aboutGroup03.group2.scale.set(.5,.5,.5),this.aboutGroup03.group3.scale.set(.5,.5,.5),this.aboutGroup03.group4.scale.set(.5,.5,.5)}else if(this.width>=480&&this.width<=1023){for(let t=0;t<this.group01.length;t++)this.group01[t].material.opacity=0;this.aboutGroup03.group1.scale.set(.5,.5,.5),this.aboutGroup03.group2.scale.set(.5,.5,.5),this.aboutGroup03.group3.scale.set(.5,.5,.5),this.aboutGroup03.group4.scale.set(.5,.5,.5),this.aboutGroup03.group1.position.set(-1,0,0),this.aboutGroup03.group2.position.set(-1,0,0),this.aboutGroup03.group3.position.set(-1,0,0),this.aboutGroup03.group4.position.set(-1,0,0)}else if(this.width>1023){for(let t=0;t<this.group01.length;t++)this.group01[t].material.opacity=1;this.aboutGroup03.group1.scale.set(1,1,1),this.aboutGroup03.group2.scale.set(1,1,1),this.aboutGroup03.group3.scale.set(1,1,1),this.aboutGroup03.group4.scale.set(1,1,1),this.aboutGroup03.group1.position.set(0,0,0),this.aboutGroup03.group2.position.set(0,0,0),this.aboutGroup03.group3.position.set(0,0,0),this.aboutGroup03.group4.position.set(0,0,0)}this.fristScroll=!0}meshOpacity(){for(let t=0;t<this.aboutGroup03.group1.children.length;t++)this.aboutGroup03.group1.children[t].material.opacity=1;for(let t=0;t<this.aboutGroup03.group2.children.length;t++)this.aboutGroup03.group2.children[t].material.opacity=1;for(let t=0;t<this.aboutGroup03.group2.children.length;t++)this.aboutGroup03.group2.children[t].material.opacity=1;for(let t=0;t<this.aboutGroup03.group3.children.length;t++)this.aboutGroup03.group3.children[t].material.opacity=1;for(let t=0;t<this.aboutGroup03.group4.children.length;t++)this.aboutGroup03.group4.children[t].material.opacity=1}meshPosition(){let t=0,e;window.innerWidth<480&&(e=2);for(let i=0;i<this.aboutGroup03.box2xGrid;i++)for(let n=0;n<this.aboutGroup03.box2yGrid;n++){let r=i*this.aboutGroup03.xSize-this.aboutGroup03.box2xGrid*this.aboutGroup03.xSize/2+this.aboutGroup03.xSize/2+2-e,o=n*this.aboutGroup03.ySize-this.aboutGroup03.box2yGrid*this.aboutGroup03.ySize/2+this.aboutGroup03.ySize/2;this.group03[t].position.set(r,o,0),t++}}boxImageSwich(t){let e=Math.PI/180*180*t;for(let o=0;o<this.group03.length;o++)this.gsap.to(this.group03[o].rotation,{y:e,duration:.3,delay:o*.001});const i=1/this.aboutGroup03.box2xGrid,n=1/this.aboutGroup03.box2yGrid;let r=0;for(let o=0;o<this.aboutGroup03.box2xGrid;o++)for(let a=0;a<this.aboutGroup03.box2yGrid;a++){const l=this.group03[r].geometry.attributes.uv.array;for(let c=0;c<l.length;c+=2)l[c]=(l[c]+o)*i,l[c+1]=(l[c+1]+a)*n;this.group03[r].material.map=this.aboutGroup03.imges[t],r++}}movePage(){for(let t=0;t<this.group01.length;t++)this.gsap.to(this.group01[t].material,{opacity:0,duration:1.2});for(let t=0;t<this.group03.length;t++)this.gsap.to(this.group03[t].material,{opacity:0,duration:1.2});this.scene.remove(this.aboutGroup01.group1,this.aboutGroup01.group2,this.aboutGroup03.group1,this.aboutGroup03.group2,this.aboutGroup03.group3,this.aboutGroup03.group4);for(let t=0;t<this.aboutGroup01.group1.children.length;t++)this.aboutGroup01.group1.remove(this.aboutGroup01.group1.children[0]);for(let t=0;t<this.aboutGroup01.group2.children.length;t++)this.aboutGroup01.group1.remove(this.aboutGroup01.group2.children[0]);for(let t=0;t<this.aboutGroup03.group1.children.length;t++)this.aboutGroup01.group1.remove(this.aboutGroup01.group1.children[0]);for(let t=0;t<this.aboutGroup03.group2.children.length;t++)this.aboutGroup01.group1.remove(this.aboutGroup01.group2.children[0]);for(let t=0;t<this.aboutGroup03.group3.children.length;t++)this.aboutGroup01.group1.remove(this.aboutGroup01.group3.children[0]);for(let t=0;t<this.aboutGroup03.group4.children.length;t++)this.aboutGroup01.group1.remove(this.aboutGroup01.group4.children[0]);this.group01=[],this.group02=[],this.group03=[]}}class iS{constructor(t){this.gsap=t,this.tl=t.timeline(),this.scene,this.contactState,this.contactBox,this.halfX,this.halfY,this.scaleX=1,this.scaleY=1,this.seletedNum,this.seleted=!1,this.animating=!0,this.trigger=document.querySelector(".animationtrigger"),this.closeBtn=document.querySelector(".contactClose"),this.contact=document.querySelector(".contact"),this.contactLists=document.querySelectorAll(".contactList")}createMesh(t,e,i){this.contactBox=t,this.scene=e,this.contactState=i,this.meshs=[],this.tl.to(this.trigger,{opacity:0,duration:7.5}).to(this.trigger,{opacity:1,onComplte:()=>{this.createCube(),this.resize(),this.animating=!1}})}createCube(){for(let t=0;t<this.contactBox.number;t++){const e=this.contactBox.box[t],i=this.contactBox.trigger[t];this.contactBox.group[t].add(e),this.contactBox.group[t].add(i),e.name=this.contactBox.json[t][0],i.name=this.contactBox.json[t][0],e.updateMatrixWorld();let n=Math.random()*(.5- -.5)-.5,r=Math.random()*(7- -7)-7,o=Math.random()*(3.5- -3.5)-3.5,a=Math.random()<.5?-1:1,l=Math.random()<.5?-1:1,c=Math.random()<.5?-1:1;this.contactState[t].x=r,this.contactState[t].y=o,this.contactState[t].z=n,this.contactState[t].dx=Math.random()/1e3*3*a,this.contactState[t].dy=Math.random()/1e3*2*l,this.contactState[t].dz=Math.random()/1e3*2*c,this.contactState[t].rx=Math.random(),this.contactState[t].ry=Math.random(),this.contactState[t].rz=Math.random(),this.contactState[t].rdx=Math.random()/1e3*l*3,this.contactState[t].rdy=Math.random()/1e3*c*3,this.contactState[t].rdz=Math.random()/1e3*a*3,this.meshs.push(e)}this.resize()}createText(t,e){this.gsap.timeline().to(this.trigger,{opacity:0,duration:7.5}).to(this.trigger,{opacity:1,onComplte:()=>{this.contactBox.group[t].add(e),this.scene.add(this.contactBox.group[t])}})}selectMesh(t,e){if(this.seletedNum==e)return;let i=.7;this.seleted==!0&&this.changeContent(),this.gsap.timeline().to(this.contactLists[e],{display:"block",duration:0}).to(this.contactLists[e],{opacity:1,duration:.1}),this.gsap.to(this.closeBtn,{display:"block",opacity:1,duration:.1}),this.gsap.to(this.contactBox.group[e].position,{x:0,y:0,z:0,duration:i}),this.gsap.to(this.contactBox.group[e].children[0].rotation,{x:0,y:0,z:0,duration:i}),this.gsap.to(this.contactBox.group[e].children[1].rotation,{x:0,y:0,z:0,duration:i}),this.contactBox.group[e].children[2]&&this.gsap.to(this.contactBox.group[e].children[2].rotation,{x:0,y:0,z:0,duration:i});for(let r=0;r<this.contactBox.number;r++)r==e?this.gsap.to(this.contactBox.group[r].scale,{x:2.3,y:2.3,z:2.3,duration:i}):this.gsap.to(this.contactBox.group[r].scale,{x:.6,y:.6,z:.6,duration:i});this.seletedNum=e,this.seleted=!0}changeContent(){this.gsap.timeline().to(this.contactLists[this.seletedNum],{opacity:0,duration:.3}).to(this.contactLists[this.seletedNum],{display:"none"})}closeContent(){this.changeContent(),this.gsap.timeline().to(this.closeBtn,{opacity:0,duration:.3}).to(this.closeBtn,{display:"none"});for(let e=0;e<this.contactLists.length;e++)e==this.seletedNum&&(this.gsap.timeline(),this.tl.to(this.contactBox.group[e].position,{x:this.contactState[e].x,y:this.contactState[e].y,z:this.contactState[e].z,duration:.7}).to(this.trigger,{opacity:0,duration:.2,delay:.2,onComplte:()=>{this.seleted=!1,this.seletedNum=100}}),this.gsap.to(this.contactBox.group[e].children[0].rotation,{x:this.contactState[e].rx,y:this.contactState[e].ry,z:this.contactState[e].rz,duration:.7}),this.gsap.to(this.contactBox.group[e].children[1].rotation,{x:this.contactState[e].rx,y:this.contactState[e].ry,z:this.contactState[e].rz,duration:.7}),this.contactBox.group[e].children[2]&&this.gsap.to(this.contactBox.group[e].children[2].rotation,{x:this.contactState[e].rx,y:this.contactState[e].ry,z:this.contactState[e].rz,duration:.7})),this.gsap.to(this.contactBox.group[e].scale,{x:1,y:1,z:1,duration:.7})}resize(t,e){if(this.scaleX=window.innerWidth/1920,this.scaleY=window.innerHeight/953,this.halfX=this.contactBox.limiteX/2*this.scaleX,this.halfY=this.contactBox.limiteY/2*this.scaleY,window.innerWidth<480){this.halfX=1.5,this.halfY=2.5;for(let i=0;i<this.contactBox.number;i++)this.contactState[i].x=Math.random()*(1- -1)-.5,this.contactState[i].y=Math.random()*(1.2- -1.2)-.5,this.contactState[i].z=Math.random()*(.2- -.2)-.2,this.contactBox.group[i].scale.set(.65,.65,.65)}}update(){if(!this.animating){if(window.innerWidth>=480)for(let t=0;t<this.contactBox.number;t++)this.seletedNum!=t&&(this.contactState[t].x+=this.contactState[t].dx,this.contactState[t].y+=this.contactState[t].dy,this.contactState[t].z+=this.contactState[t].dz,this.contactState[t].x>this.halfX-this.contactBox.boxSize/2?this.contactState[t].dx*=-1:this.contactState[t].x<-this.halfX+this.contactBox.boxSize/2&&(this.contactState[t].dx*=-1),this.contactState[t].y<-this.halfY+this.contactBox.boxSize/2?this.contactState[t].dy*=-1:this.contactState[t].y>this.halfY-this.contactBox.boxSize/2&&(this.contactState[t].dy*=-1),this.contactState[t].z<-3.2?this.contactState[t].dz*=-1:this.contactState[t].z>.2&&(this.contactState[t].dz*=-1),this.contactBox.group[t].position.set(this.contactState[t].x,this.contactState[t].y,this.contactState[t].z),this.contactBox.group[t].children[0].rotation.set(this.contactState[t].rx,this.contactState[t].ry,this.contactState[t].rz),this.contactBox.group[t].children[1].rotation.set(this.contactState[t].rx,this.contactState[t].ry,this.contactState[t].rz),this.contactBox.group[t].children[2]&&this.contactBox.group[t].children[2].rotation.set(this.contactState[t].rx,this.contactState[t].ry,this.contactState[t].rz));else if(window.innerWidth<480)for(let t=0;t<this.contactBox.number;t++)this.seletedNum!=t&&(this.contactState[t].x+=this.contactState[t].dx,this.contactState[t].y+=this.contactState[t].dy,this.contactState[t].z+=this.contactState[t].dz,this.contactState[t].x>this.halfX-this.contactBox.boxSize/2?this.contactState[t].dx*=-1:this.contactState[t].x<-this.halfX+this.contactBox.boxSize/2&&(this.contactState[t].dx*=-1),this.contactState[t].y<-this.halfY+this.contactBox.boxSize/2?this.contactState[t].dy*=-1:this.contactState[t].y>this.halfY-this.contactBox.boxSize/2&&(this.contactState[t].dy*=-1),this.contactState[t].z<-3.2?this.contactState[t].dz*=-1:this.contactState[t].z>.2&&(this.contactState[t].dz*=-1),this.contactState[t].rx+=this.contactState[t].rdx,this.contactState[t].ry+=this.contactState[t].rdy,this.contactState[t].rz+=this.contactState[t].rdz,this.contactBox.group[t].position.set(this.contactState[t].x,this.contactState[t].y,this.contactState[t].z),this.contactBox.group[t].children[0].rotation.set(this.contactState[t].rx,this.contactState[t].ry,this.contactState[t].rz),this.contactBox.group[t].children[1].rotation.set(this.contactState[t].rx,this.contactState[t].ry,this.contactState[t].rz),this.contactBox.group[t].children[2]&&this.contactBox.group[t].children[2].rotation.set(this.contactState[t].rx,this.contactState[t].ry,this.contactState[t].rz))}}movePage(){this.changeContent(),this.gsap.timeline().to(this.closeBtn,{opacity:0,duration:.3}).to(this.closeBtn,{display:"none"}),this.seletedNum=100;for(let e=0;e<this.contactBox.number;e++)this.scene.remove(this.contactBox.group[e]);for(let e=0;e<this.contactBox.number;e++)this.contactBox.group[e].remove(this.contactBox.group[e].children[2]),this.contactBox.group[e].remove(this.contactBox.group[e].children[1]),this.contactBox.group[e].remove(this.contactBox.group[e].children[0]);this.animating=!0}}class nS{constructor(t){this.gsap=t,this.contentBox,this.contentTexture,this.scenc,this.camera,this.url=["https://gangsuuu.github.io/ForFave/","https://gangsuuu.github.io/rainAnimation/","https://gangsuuu.github.io/ballLight/","https://gangsuuu.github.io/mirrorBall/","https://gangsuuu.github.io/CameraShow/"],this.animation,this.startWidth,this.content=document.querySelector(".content"),this.contentTitles=document.querySelectorAll(".contentTitle"),this.contentView=document.querySelector(".contentView a"),this.trigger=document.querySelector(".animationtrigger")}createMesh(t,e,i,n,r){this.contentBox=t,this.contentTexture=e,this.scenc=i,this.camera=n,this.startWidth=r,this.gsap.timeline().to(this.trigger,{opacity:0,duration:7.5}).to(this.trigger,{opacity:1,onComplte:()=>{this.meshAdd(),this.resize(),this.boxChange()}})}boxChange(t){if(this.animation)return;this.animation=!0,t?t=="up"?(this.currentNum+=1,this.currentNum>=this.contentTitles.length&&(this.currentNum=0)):t=="down"&&(this.currentNum-=1,this.currentNum<0&&(this.currentNum=this.contentTitles.length-1)):this.currentNum=0;let e=this.gsap.timeline();this.contentBox.mesh.material.map=this.contentTexture[this.currentNum],t&&e.to(this.contentTitles[this.prveNum],{opacity:0,duration:.2}).to(this.contentTitles[this.prveNum],{display:"none",duration:.1}),e.to(this.contentTitles[this.currentNum],{display:"block",duration:.1}).to(this.contentTitles[this.currentNum],{opacity:1,duration:.2}).to(this.trigger,{opacity:0,onComplte:()=>{this.animation=!1}}),this.contentBox.mesh.rotation.x=0,this.gsap.to(this.contentBox.mesh.rotation,{x:Math.PI*2,duration:.6}),this.prveNum=this.currentNum,this.contentView.href=this.url[this.currentNum]}MeshMove(){}meshAdd(){let t=this.contentBox.meshSizeX/2+.7;this.contentBox.mesh.position.set(t,0,0),this.contentBox.mesh.rotation.set(0,-.4,0),this.scenc.add(this.contentBox.group)}resize(){this.scale=window.innerWidth/1920;let t=(1-this.scale)*2.5;if(window.innerWidth>=1023){let e=this.contentBox.meshSizeX/2+.7-t;this.contentBox.mesh.position.set(e,0,0),this.contentBox.mesh.rotation.set(0,-.4,0)}else window.innerWidth<1023&&window.innerWidth>479?(this.contentBox.mesh.position.set(0,0,0),this.contentBox.mesh.rotation.set(0,0,0)):window.innerWidth<=479&&(this.contentBox.group.scale.set(.7,.7,.7),this.contentBox.mesh.position.set(0,0,0),this.contentBox.mesh.rotation.set(0,0,0))}movePage(){this.scenc.remove(this.contentBox.group),this.contentBox.box="",this.gsap.timeline().to(this.contentTitles[this.prveNum],{opacity:0,duration:.2}).to(this.contentTitles[this.prveNum],{display:"none",duration:.1}),this.contentBox.group.remove(this.contentBox.group.children[0])}}class Ap{constructor(t,e,i,n,r){this.gsap=t,this.tl=this.gsap.timeline(),this.currentPage=e,this.camera=n,this.loadingMesh=i,this.clone,this.loadingMesh,this.prevPage,this.scene=r,this.isLoaded=!1,this.PI=Math.PI,this.count=1,this.header=document.querySelector(".headerNav"),this.index=document.querySelector(".index"),this.about=document.querySelector(".about"),this.navWrappers=document.querySelectorAll(".navWrapper a"),this.content=document.querySelector(".content"),this.contact=document.querySelector(".contact"),this.trigger=document.querySelector(".animationtrigger"),this.headerBtn=document.querySelector(".headerBtn")}boxRotation(){this.isLoaded||(this.tl.to(this.clone.rotation,{y:this.PI,duration:1.2,delay:.8,repeat:1}),this.tl.to(this.clone.rotation,{x:this.PI,duration:1.2,delay:.8,onComplte:()=>{this.intro(),this.count++}}))}setURL(){}loading(){this.clone=this.loadingMesh.clone(),this.clone.material.opacity=1,this.scene.add(this.clone),this.boxRotation()}intro(){this.tl.to(this.camera.position,{z:-.09,duration:1.2,ease:"power1.inOut"},"<=").to(this.camera.position,{z:5,duration:0,onComplte:()=>{this.showContent(),this.scene.remove(this.clone)}}),this.gsap.to(this.clone.material,{opacity:0,duration:.6,delay:.6})}showContent(){switch(this.currentPage){case"index":this.index.style.display="block",this.index.style.opacity=0,this.header.style.display="flex",this.header.style.opacity=0,this.gsap.to(this.index,{opacity:1,duration:.7,delay:1.7,ease:"power2.in"});break;case"about":this.about.style.display="block",this.about.style.opacity=0,this.gsap.to(this.about,{opacity:1,duration:.5});break;case"contact":this.contact.style.display="block",this.contact.style.opacity=0,this.gsap.to(this.contact,{opacity:1,duration:.5});break;case"content":this.content.style.display="flex",this.content.style.opacity=0,this.gsap.to(this.content,{opacity:1,duration:.3});break}if(this.currentPage!="index"){let t=this.gsap.timeline();this.gsap.to(this.header,{opacity:1,duration:.5}),t.to(this.headerBtn,{display:"block",duration:.2}).to(this.headerBtn,{opacity:1,duration:.4})}}outro(t,e){let i=t.target.dataset.link;switch(this.currentPage=String(i),e){case"index":this.prevPage=this.index;break;case"about":this.prevPage=this.about;break;case"contact":this.prevPage=this.content;break;case"content":this.prevPage=this.content;break}return this.tl.to(this.prevPage,{opacity:0,duration:1.2}),this.tl.to(this.prevPage,{display:"none",duration:0,onComplte:()=>{this.currentPage=="index"&&this.navWrappers.forEach(n=>{this.gsap.to(n,{y:0,opacity:1,duration:.3})})}}).to(this.trigger,{opacity:1,duration:1.2,onComplte:()=>{this.loading()}}),this.currentPage}}class rS{constructor(){this.Text={A:[[1,0],[2,0],[3,0],[4,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[1,4],[2,4],[3,4],[4,4],[0,5],[4,5],[0,6],[4,6]],B:[[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3],[0,4],[4,4],[0,5],[4,5],[0,6],[1,6],[2,6],[3,6]],C:[[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[0,3],[0,4],[0,5],[4,5],[1,6],[2,6],[3,6]],E:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[0,2],[0,3],[1,3],[2,3],[3,3],[0,4],[0,5],[0,6],[1,6],[2,6],[3,6],[4,6]],L:[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,6],[2,6],[3,6],[4,6]],N:[[0,0],[4,0],[0,1],[4,1],[0,2],[1,2],[4,2],[0,3],[2,3],[4,3],[0,4],[3,4],[4,4],[0,5],[4,5],[0,6],[4,6]],O:[[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[4,4],[0,5],[4,5],[1,6],[2,6],[3,6]],R:[[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3],[0,4],[4,4],[0,5],[4,5],[0,6],[4,6]],T:[[0,0],[1,0],[2,0],[3,0],[4,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6]],U:[[0,0],[4,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[4,4],[0,5],[4,5],[1,6],[2,6],[3,6]]}}moveText(t){switch(this.text=[],t){case 2:this.a=this.moveA(),this.b=this.moveB(),this.o=this.moveO(),this.u=this.moveU(),this.t=this.moveT(),this.text.push(this.a,this.b,this.o,this.u,this.t);break;case 3:this.c=this.moveC(),this.o=this.moveO(),this.n=this.moveN(),this.t=this.moveT(),this.e=this.moveE(),this.n=this.moveN(),this.t=this.moveT(),this.text.push(this.c,this.o,this.n,this.t,this.e,this.n,this.t);break;case 4:this.c=this.moveC(),this.o=this.moveO(),this.n=this.moveN(),this.t=this.moveT(),this.a=this.moveA(),this.c=this.moveC(),this.t=this.moveT(),this.text.push(this.c,this.o,this.n,this.t,this.a,this.c,this.t);break}return this.text}moveA(){return this.Text.A}moveB(){return this.Text.B}moveC(){return this.Text.C}moveE(){return this.Text.E}moveL(){return this.Text.L}moveN(){return this.Text.N}moveO(){return this.Text.O}moveR(){return this.Text.R}moveT(){return this.Text.T}moveU(){return this.Text.U}}class sS{constructor(t){this.boxPosition=new rS,this.loading=new Ap(t),this.gsap=t,this.tl=this.gsap.timeline(),this.scene,this.mesh,this.camera,this.total,this.meshs=[],this.navAs=document.querySelectorAll(".navWrapper a"),this.navWrapper=document.querySelector(".navWrapper"),this.trigger=document.querySelector(".animationtrigger"),this.cubeXSize,this.cubeYSize,this.cubeZSize,this.creatType,this.isAnimaiting=!0,this.isHold=!1,this.move=0}createMesh(t,e,i,n){this.mesh=t,this.scene=e,this.camera=i,this.group=n,this.total=this.mesh.xNum*this.mesh.yNum*this.mesh.zNum,this.cubeXSize=this.mesh.xNum*this.mesh.xSize+(this.mesh.xNum-1)*this.mesh.space/2,this.cubeYSize=this.mesh.yNum*this.mesh.ySize+(this.mesh.yNum-1)*this.mesh.space/2,this.cubeZSize=this.mesh.zNum*this.mesh.zSize+(this.mesh.zNum-1)*this.mesh.space/2;for(let o=0;o<this.mesh.xNum;o++)for(let a=0;a<this.mesh.yNum;a++)for(let l=0;l<this.mesh.zNum;l++){var r=this.mesh.mesh.clone();r.layers.set(0),r.updateMatrix(),r.matrixWorldAutoUpdate=!0,r.matrixWorldNeedsUpdate=!0,this.group.add(r),this.meshs.push(r),r.scale.set(0,0,0),this.gsap.to(r.scale,{x:1,y:1,z:1,duration:.5,delay:5.15+.004*o*a*l+this.move})}return this.tl.to(this.trigger,{opacity:0,duration:5.9+this.move}).to(this.trigger,{duration:.5,onComplte:()=>{this.move=2.3,this.moveToSquare(),this.setMouseAera(),this.resize()}}).to(this.trigger,{opacity:1,duration:1.1,onComplte:()=>{}}).to(this.trigger,{opacity:0,onComplte:()=>{this.isAnimaiting=!1}}),e.add(this.group),this.meshs}moveToSquare(t){let e,i=window.innerWidth/this.mesh.startWidth;window.innerWidth>=479?i<=.7&&(i=.7):i=1,t!=0?(t="back.inOut(4)",e=1.1):(t="power3.in",e=.77);let n=0,r=0,o=0;for(let a=0;a<this.total;a++){let l=n*(this.mesh.xSize*i)+n*(this.mesh.space*i)-this.mesh.xNum*(this.mesh.xSize*i)/2+this.mesh.space*i/2,c=r*(this.mesh.ySize*i)+r*(this.mesh.space*i)-this.mesh.yNum*(this.mesh.ySize*i)/2+this.mesh.space*i/2,h=o*(this.mesh.zSize*i)+o*(this.mesh.space*i)-this.mesh.zNum*(this.mesh.zSize*i)/2+this.mesh.space*i/2;this.gsap.to(this.meshs[a].position,{x:l,y:c,z:h,duration:e,ease:t}),o++,o>=this.mesh.zNum&&(o=0,r++,r>=this.mesh.yNum&&(r=0,n++))}}hoverAnimation(t){if(!this.isAnimaiting){if(t===0)this.moveToSquare(t),this.isHold=!1;else if(t===1){for(let e=0;e<this.meshs.length;e++){let i=(Math.random()*this.cubeXSize-this.cubeXSize/2)*(Math.random()*6.4),n=(Math.random()*this.cubeYSize-this.cubeYSize/2)*(Math.random()*6.4),r=Math.random()*8-4;this.gsap.to(this.meshs[e].position,{x:i,y:n,z:r,duration:.64,ease:"elastic.out(0.2,0.1)"})}this.isHold=!1}else if(t===2||t===3||t===4||t===5){let e=[],i=0,n=0,r=1;e=this.boxPosition.moveText(t),i=e.length;let o=7*this.mesh.ySize+6*this.mesh.space,a=5*this.mesh.xSize+4*this.mesh.space;e.forEach((l,c)=>{for(let h=0;h<l.length;h++){let u=l[h][0]*this.mesh.xSize+l[h][0]*this.mesh.space+c*a+c*r-(i*a+(i-1)*r)/2,f=l[h][1]*this.mesh.ySize+l[h][1]*this.mesh.space-o/2;this.gsap.to(this.meshs[n].position,{x:u,y:-f,z:-7,duration:.77,ease:"power4.out"}),n++}});for(let l=n;l<this.total;l++){let c=Math.random();c<.5?c=-4:c=4,this.gsap.to(this.meshs[l].position,{x:l-n-(this.total-n)/2+.5,y:c,z:Math.random()*13-12,duration:.78,ease:"power4.out"})}this.isHold=!0,this.boxRotation()}}}pageMove(t){t(),this.isHold=!0,this.isAnimaiting=!0,this.boxRotation();for(let e=0;e<this.meshs.length;e++)this.gsap.to(this.meshs[e].position,{x:0,y:0,z:0,duration:1.2,ease:"back.in(3)"});this.tl.to(this.trigger,{opacity:1,duration:1.2}).to(this.trigger,{opacity:0,onComplte:()=>{this.scene.remove(this.group),this.remove()}})}remove(){for(let t=0;t<this.group.children.length;t++)this.group.remove(this.group.children[0]),this.group.children.length!=0&&this.remove();this.meshs=[]}resize(){if(this.isAnimaiting==!0)return;let t=window.innerWidth/this.mesh.startWidth;window.innerWidth>=479?t<=.7&&(t=.7):t=1;let e=0,i=0,n=0;for(let r=0;r<this.total;r++){let o=e*(this.mesh.xSize*t)+e*(this.mesh.space*t)-this.mesh.xNum*(this.mesh.xSize*t)/2+this.mesh.space/2,a=i*(this.mesh.ySize*t)+i*(this.mesh.space*t)-this.mesh.yNum*(this.mesh.ySize*t)/2+this.mesh.space/2,l=n*(this.mesh.zSize*t)+n*(this.mesh.space*t)-this.mesh.zNum*(this.mesh.zSize*t)/2+this.mesh.space/2;this.meshs[r].position.set(o,a,l),this.meshs[r].scale.set(t,t,t),n++,n>=this.mesh.zNum&&(n=0,i++,i>=this.mesh.yNum&&(i=0,e++))}}boxRotation(t,e){if(this.isHold){this.gsap.to(this.group.rotation,{x:0,y:0,duration:.2});return}else this.group.rotation.x=-e/7,this.group.rotation.y=t/7}setMouseAera(){let t=0;for(let e=0;e<this.navAs.length;e++){let i=this.navAs[e].offsetWidth;t<i&&(t=i)}this.navWrapper.style.width=t+20+"px"}}function oS(){const s=document.querySelector("body"),t=document.querySelectorAll(".navWrapper a"),e=document.querySelector(".navWrapper"),i=document.querySelector(".navTitle span"),n=document.querySelector(".navTitle"),r=document.querySelector(".headerNav"),o=r.querySelectorAll(".headerLink"),a=r.querySelectorAll(".headerSlash"),l=r.querySelector(".headerBtn"),c=document.querySelector(".contactClose"),h=document.querySelector(".animationtrigger"),u=document.querySelector(".headerBg");ai.registerPlugin(Ft);let f,m,g,p,d,_=new id,S=new _e,y=new yt,x="index",b=0,A=!1,C,v=[],M,L=6,U=6,it=6,N=window.innerWidth,D=window.innerWidth,F=window.innerHeight;N<=1344&&(N=1344);let q=window.innerWidth/1920,E=window.innerWidth/1920;window.innerWidth>=479?(q<=.7&&(q=.7),E<=.7&&(E=.7)):(q=.5,E=.5);let k=.5*q,et=.5*q,nt=.5*q;E<=.8&&(E=.8);let V=.05*E,H=.5,K=.5,Z=.5;const at={threshold:.23,strength:.4,radius:1,exposure:1},$={mesh:new zs(new Is(new li(k,et,nt)),new sr({color:"white",transparent:!0,opacity:1})),xNum:L,yNum:U,zNum:it,xSize:k,ySize:et,zSize:nt,space:V,startWidth:N},Ht={box1:new zs(new Is(new li(H,K,Z)),new sr({color:"white",transparent:!0,opacity:1})),box2:new ui(new li(H,K,Z),new sr({color:"white",transparent:!0})),xSize:H,ySize:K,zSize:Z,box1Count:5,box2Count:5,startWidth:N,radius:1.3,group1:new _e,group2:new _e,group3:new _e,group4:new _e},ft={box1:new zs(new Is(new li(H,K,Z)),new sr({color:"white",transparent:!0,opacity:1})),box2:[],xSize:H,ySize:K,zSize:Z,box2xGrid:16,box2yGrid:10,group1:new _e,group2:new _e,group3:new _e,group4:new _e,imges:[]},At=1,lt=1,It=1;let Pt=[];const bt={box:[],trigger:[],text:[],text2:[],content:[],limiteX:15.4,limiteY:7.2,boxSize:At,number:7,json:[["Recruitment","happy1995virus@naver.com"],["Business","happy1995virus@naver.com"],["Phone","+82 10-5400-6870"],["Address","Suwon-si Gyeonggi-do Republic of Korea"],["Instagram",""],["comment","Thank you for Look"],["comment2","Get in touch"]],group:[new _e,new _e,new _e,new _e,new _e,new _e,new _e],textloader:new Sy},$t=[{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0},{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0},{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0},{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0},{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0},{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0},{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0},{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0}];let G=4,ne=2.7,ce=2.7;const Nt={mesh:"",meshSizeX:G,meshSizeY:ne,meshSizeZ:ce,group:new _e},Ut=[],we=0;new Wa().set(we);const P=new Zf({alpha:!0});P.setClearColor(2631720,1),P.autoClear=!1,document.querySelector("#container").appendChild(P.domElement);const B={width:window.innerWidth,height:window.innerHeight},tt=new wv,rt=new Oi(75,B.width/B.height,.1,1e3);let dt;const Dt=new yy(P);let ht;const J=()=>{const st=new by(tt,rt);ht=new _s(new yt(B.width/B.height)),ht.strength=at.strength,ht.threshold=at.threshold,ht.radius=at.radius,ht.filter=!1,Dt.addPass(st),Dt.addPass(ht)},Ct=new my("white",10,100);Ct.position.set(1,1,1),tt.add(Ct);const Lt=Ct.clone();Lt.layers.set(1),Lt.intensity=2,tt.add(Lt),rt.position.set(0,0,5);const _t=new uy;_t.load(),ft.imges.push(_t.load("./assets/imges/about_img_02.jpeg")),ft.imges.push(_t.load("./assets/imges/about_img_03.jpg")),ft.imges.push(_t.load("./assets/imges/about_img_04.jpg")),ft.imges.push(_t.load("./assets/imges/about_img_05.jpg")),Ut.push(_t.load("./assets/imges/content_img_00.png")),Ut.push(_t.load("./assets/imges/content_img_01.png")),Ut.push(_t.load("./assets/imges/content_img_02.png")),Ut.push(_t.load("./assets/imges/content_img_03.png")),Ut.push(_t.load("./assets/imges/content_img_04.png"));const Et=new gy;Et.layers.set(1);const Tt=()=>{switch(x){case"index":v=d.createMesh($,tt,rt,S);for(let Q=0;Q<v.length;Q++)S.add(v[Q]);break;case"about":let st=ft.box2xGrid*ft.box2yGrid;for(let Q=0;Q<st;Q++){let pt=new ui(new li(H,K,Z),new ss({color:"white",transparent:!0,opacity:1}));ft.box2.push(pt)}m.createMesh(Ht,ft,tt,rt,S);break;case"contact":for(let Q=0;Q<bt.number;Q++){const pt=new zs(new Is(new li(At,lt,It)),new sr({color:"white",transparent:!0,opacity:1})),kt=new ui(new li(At,lt,It),new sy({color:"white",transparent:!0,opacity:0,roughness:0,transmission:.1,thickness:.2,envMapIntensity:1.7}));bt.textloader.load("./assets/fonts/NanumGothic_Bold.json",function(ee){const ie=new ss({color:26265,transparent:!0,opacity:1,side:Sn});let T=bt.json[Q][0];const I=ee.generateShapes(T,.15),X=new Yc(I);X.computeBoundingBox();const O=-.5*(X.boundingBox.max.x-X.boundingBox.min.x);X.translate(O,0,0);const W=new ui(X,ie);bt.text.push(W),g.createText(Q,W)}),kt.layers.set(1),Pt.push(kt),bt.box.push(pt),bt.trigger.push(kt)}g.createMesh(bt,tt,$t);break;case"content":Nt.mesh=new ui(new li(G,ne,ce),new ss({color:"white"})),Nt.group.add(Nt.mesh),p.createMesh(Nt,Ut,tt,rt,D);break}},xt=()=>{switch(B.width=window.innerWidth,B.height=window.innerHeight,rt.aspect=B.width/B.height,rt.updateProjectionMatrix(),d.resize(),x){case"index":d.resize();break;case"about":m.resize();break;case"contact":g.resize(D,F);break;case"content":p.resize();break}P.setSize(B.width,B.height),P.setPixelRatio(Math.min(window.devicePixelRatio,2)),Dt.setSize(B.width,B.height),d.setMouseAera();const st=window.innerWidth/1980;s.style.fontSize=`${st}rem`},Kt=()=>{window.addEventListener("resize",xt),window.addEventListener("mousemove",st=>{switch(ot(st),gt(),x){case"index":d.boxRotation(y.x,y.y);break}}),window.addEventListener("wheel",st=>{switch(x){case"index":break;case"about":if(window.scrollY<=0)return;m.objectScrollAnimation();break;case"content":let Q;st.deltaY>0?Q="up":Q="down",p.boxChange(Q)}}),window.addEventListener("touchstart",st=>{M=st.changedTouches[0].clientY}),window.addEventListener("touchend",st=>{switch(x){case"content":let Q;M>st.changedTouches[0].clientY?Q="down":M<st.changedTouches[0].clientY&&(Q="up"),p.boxChange(Q)}}),window.addEventListener("click",st=>{x=="contact"&&gt("click")}),R(),Y()},te=()=>{t.forEach((st,Q)=>{ai.to(st,{y:35,duration:.25,opacity:0})})},R=()=>{e.addEventListener("mouseenter",st=>{t.forEach(Q=>{Q.style.color="var(--textColor01in)"}),b=1,d.hoverAnimation(b)}),e.addEventListener("mouseleave",st=>{t.forEach(Q=>{Q.style.color="var(--textColor01Out)"}),b=0,d.hoverAnimation(b)}),e.addEventListener("mouseenter",st=>{st.target==e&&(b=1,d.hoverAnimation(b))}),t.forEach((st,Q)=>{st.addEventListener("mouseenter",pt=>{pt.target===st&&(pt.target.style.color="var(--textColor01hover)"),b=Q+2,d.hoverAnimation(b)}),st.addEventListener("mouseleave",pt=>{pt.target===st&&(pt.target.style.color="var(--textColor01in)"),b=1,d.hoverAnimation(b)})}),t.forEach(st=>{st.addEventListener("click",Q=>{d.pageMove(te),x=f.outro(Q,x),Tt()})}),n.addEventListener("mouseenter",()=>{b=1,d.hoverAnimation(b)}),n.addEventListener("mouseleave",()=>{b=0,d.hoverAnimation(b)}),i.addEventListener("click",te),i.addEventListener("mouseenter",st=>{st.target.style.color="var(--textColor01hover)"}),i.addEventListener("mouseleave",st=>{st.target.style.color="var(--textColorTitle)"}),o.forEach(st=>{st.addEventListener("click",Q=>{if(Q.target.dataset.link!=x){switch(o.forEach((pt,kt)=>{let ee=ai.timeline();ee.to(pt,{opacity:0,duration:.3}),ee.to(a[kt],{opacity:0,duration:.3}).to(l,{opacity:0,duration:.3},"+>0").to(pt,{display:"none"}).to(a[kt],{display:"none"}).to(l,{rotation:0})}),x){case"index":break;case"about":m.movePage();break;case"contact":g.movePage();break;case"content":p.movePage();break}if(window.innerWidth<480){u.style.display="none",r.style.pointerEvents="none";for(let pt=0;pt<o.length;pt++)o[pt].style.opacity=0;for(let pt=0;pt<a.length;pt++)o[pt].style.opacity=0}x=f.outro(Q,x),l.classList.remove(".show"),Tt()}})}),l.addEventListener("click",st=>{if(A!=!0){if(A=!0,l.classList.toggle(".show"),window.innerWidth>=480)l.classList.contains(".show")?(ai.to(l,{rotation:90,duration:.3}),o.forEach((pt,kt)=>{ai.timeline().to(pt,{display:"block",duration:.1}).to(a[kt],{display:"block",duration:.1}).to(pt,{opacity:1,duration:.3,delay:.04*kt}).to(a[kt],{opacity:1,duration:.3,delay:4*.02})})):(ai.to(l,{rotation:0,duration:.3}),o.forEach((pt,kt)=>{let ee=ai.timeline();ee.to(pt,{opacity:0,duration:.3,delay:.03*kt}),ee.to(a[o.length-1-kt],{opacity:0,duration:.3,delay:.03*kt+4*.02}).to(h,{opacity:0,duration:4*.02+.03*4}).to(pt,{display:"none",duration:.1}).to(a[o.length-1-kt],{display:"none",duration:.1})})),ai.timeline().to(h,{opacity:0,duration:.7}).to(h,{opacity:0,onComplete:()=>{A=!1}});else if(window.innerWidth<480)if(l.classList.contains(".show")){u.style.display="block",r.style.pointerEvents="auto";for(let Q=0;Q<o.length;Q++)o[Q].style.display="block",o[Q].style.opacity=1;for(let Q=0;Q<a.length;Q++)a[Q].style.display="block",a[Q].style.opacity=1;A=!1}else{console.log("test"),u.style.display="none",r.style.pointerEvents="none";for(let Q=0;Q<o.length;Q++)o[Q].style.opacity=0;for(let Q=0;Q<a.length;Q++)a[Q].style.opacity=0;A=!1,l.classList.remove(".show")}}})},Y=()=>{c.addEventListener("click",()=>{g.closeContent()})},ot=st=>{y.x=st.clientX/B.width*2-1,y.y=-(st.clientY/B.height)*2+1},gt=st=>{const Q=Et.intersectObjects(Pt);if(Et.setFromCamera(y,rt),st=="click"&&Q.length>0){let pt,kt;Q.forEach(ee=>{for(let Qt=0;Qt<Pt.length;Qt++)ee.object===Pt[Qt]&&(pt?pt.distance>ee.distance&&(pt=bt.box[Qt],kt=Qt):(pt=bt.box[Qt],kt=Qt))}),g.selectMesh(pt,kt)}for(let pt=0;pt<bt.box.length;pt++);Q.length>0&&Q.forEach(pt=>{for(let kt=0;kt<Pt.length;kt++)pt.object,Pt[kt]})},St=()=>{const st=_.getElapsedTime();P.clear(),rt.layers.set(0),Dt.render(),P.clearDepth(),rt.layers.set(1),P.render(tt,rt),x=="contact"&&g.update(st),requestAnimationFrame(()=>{St()})},ct=()=>{d=new sS(ai),m=new eS(ai,dt),g=new iS(ai),p=new nS(ai)},j=()=>{localStorage.getItem("prevlink")&&(x=localStorage.getItem("prevlink"),localStorage.removeItem("prevlink"))},ut=()=>{const st=new li(k,et,nt),Q=new Is(st);return new zs(Q,new sr({color:"white",transparent:!0}))};(()=>{ct(),j(),C=ut(),v=Tt(),f=new Ap(ai,x,C,rt,tt),f.loading(),J(),Kt(),xt(),St()})()}oS();
