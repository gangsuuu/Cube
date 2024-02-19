(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uc="147",Lp=0,bh=1,Rp=2,Ef=1,Dp=2,Bs=3,fs=0,Gi=1,Sn=2,Vn=0,ns=1,ec=2,Sh=3,Mh=4,zp=5,$r=100,Ip=101,Op=102,wh=103,Th=104,Np=200,Fp=201,Bp=202,Up=203,Af=204,Pf=205,kp=206,Gp=207,Vp=208,Hp=209,Wp=210,Xp=0,qp=1,Yp=2,ic=3,$p=4,Zp=5,jp=6,Jp=7,Lf=0,Kp=1,Qp=2,Tn=0,tm=1,em=2,im=3,nm=4,rm=5,Rf=300,ds=301,ps=302,nc=303,rc=304,Ga=306,sc=1e3,ji=1001,oc=1002,hi=1003,Ch=1004,Eh=1005,Ii=1006,sm=1007,Va=1008,Mr=1009,om=1010,am=1011,Df=1012,lm=1013,hr=1014,ur=1015,ro=1016,cm=1017,hm=1018,rs=1020,um=1021,fm=1022,Ji=1023,dm=1024,pm=1025,pr=1026,ms=1027,mm=1028,gm=1029,_m=1030,xm=1031,vm=1033,il=33776,nl=33777,rl=33778,sl=33779,Ah=35840,Ph=35841,Lh=35842,Rh=35843,ym=36196,Dh=37492,zh=37496,Ih=37808,Oh=37809,Nh=37810,Fh=37811,Bh=37812,Uh=37813,kh=37814,Gh=37815,Vh=37816,Hh=37817,Wh=37818,Xh=37819,qh=37820,Yh=37821,$h=36492,wr=3e3,ue=3001,bm=3200,Sm=3201,zf=0,Mm=1,tn="srgb",so="srgb-linear",ol=7680,wm=519,Zh=35044,jh="300 es",ac=1035;class ws{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,Jh=180/Math.PI;function Ts(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[s&255]+He[s>>8&255]+He[s>>16&255]+He[s>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function Xe(s,t,e){return Math.max(t,Math.min(e,s))}function Tm(s,t){return(s%t+t)%t}function al(s,t,e){return(1-e)*s+e*t}function Kh(s){return(s&s-1)===0&&s!==0}function lc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wo(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xi(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ei{constructor(){Ei.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,n,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],p=n[0],d=n[3],_=n[6],S=n[1],y=n[4],v=n[7],b=n[2],A=n[5],C=n[8];return r[0]=o*p+a*S+l*b,r[3]=o*d+a*y+l*A,r[6]=o*_+a*v+l*C,r[1]=c*p+h*S+u*b,r[4]=c*d+h*y+u*A,r[7]=c*_+h*v+u*C,r[2]=f*p+m*S+g*b,r[5]=f*d+m*y+g*A,r[8]=f*_+m*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=e*u+i*f+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=u*p,t[1]=(n*c-h*i)*p,t[2]=(a*i-n*o)*p,t[3]=f*p,t[4]=(h*e-n*l)*p,t[5]=(n*r-a*e)*p,t[6]=m*p,t[7]=(i*l-c*e)*p,t[8]=(o*e-i*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ll.makeScale(t,e)),this}rotate(t){return this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new Ei;function If(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function oo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const cl={[tn]:{[so]:mr},[so]:{[tn]:fa}},Je={legacyMode:!0,get workingColorSpace(){return so},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.legacyMode||t===e||!t||!e)return s;if(cl[t]&&cl[t][e]!==void 0){const i=cl[t][e];return s.r=i(s.r),s.g=i(s.g),s.b=i(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Te={r:0,g:0,b:0},Xi={h:0,s:0,l:0},To={h:0,s:0,l:0};function hl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function Co(s,t){return t.r=s.r,t.g=s.g,t.b=s.b,t}class jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Je.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Je.workingColorSpace){return this.r=t,this.g=e,this.b=i,Je.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Je.workingColorSpace){if(t=Tm(t,1),e=Xe(e,0,1),i=Xe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=hl(o,r,t+1/3),this.g=hl(o,r,t),this.b=hl(o,r,t-1/3)}return Je.toWorkingColorSpace(this,n),this}setStyle(t,e=tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Je.toWorkingColorSpace(this,e),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Je.toWorkingColorSpace(this,e),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return i(r[4]),this.setHSL(l,c,h,e)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Je.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Je.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=tn){const i=Of[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}copyLinearToSRGB(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Je.fromWorkingColorSpace(Co(this,Te),t),Xe(Te.r*255,0,255)<<16^Xe(Te.g*255,0,255)<<8^Xe(Te.b*255,0,255)<<0}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Je.workingColorSpace){Je.fromWorkingColorSpace(Co(this,Te),e);const i=Te.r,n=Te.g,r=Te.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Je.workingColorSpace){return Je.fromWorkingColorSpace(Co(this,Te),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=tn){return Je.fromWorkingColorSpace(Co(this,Te),t),t!==tn?`color(${t} ${Te.r} ${Te.g} ${Te.b})`:`rgb(${Te.r*255|0},${Te.g*255|0},${Te.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(Xi),Xi.h+=t,Xi.s+=e,Xi.l+=i,this.setHSL(Xi.h,Xi.s,Xi.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(To);const i=al(Xi.h,To.h,e),n=al(Xi.s,To.s,e),r=al(Xi.l,To.l,e);return this.setHSL(i,n,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}jt.NAMES=Of;let Rr;class Nf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rr===void 0&&(Rr=oo("canvas")),Rr.width=t.width,Rr.height=t.height;const i=Rr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Rr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=mr(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mr(e[i]/255)*255):e[i]=mr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Ff{constructor(t=null){this.isSource=!0,this.uuid=Ts(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(ul(n[o].image)):r.push(ul(n[o]))}else r=ul(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function ul(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cm=0;class fi extends ws{constructor(t=fi.DEFAULT_IMAGE,e=fi.DEFAULT_MAPPING,i=ji,n=ji,r=Ii,o=Va,a=Ji,l=Mr,c=fi.DEFAULT_ANISOTROPY,h=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Ts(),this.name="",this.source=new Ff(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ei,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sc:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sc:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=Rf;fi.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,e=0,i=0,n=1){Oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(m+1)/2,b=(_+1)/2,A=(h+f)/4,C=(u+p)/4,x=(g+d)/4;return y>v&&y>b?y<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(y),n=A/i,r=C/i):v>b?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=A/n,r=x/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=C/r,n=x/r),this.set(i,n,r,e),this}let S=Math.sqrt((d-g)*(d-g)+(u-p)*(u-p)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(u-p)/S,this.z=(f-h)/S,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ki extends ws{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);const n={width:t,height:e,depth:1};this.texture=new fi(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ii,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ff(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bf extends fi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=hi,this.minFilter=hi,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Em extends fi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=hi,this.minFilter=hi,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vo{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const f=r[o+0],m=r[o+1],g=r[o+2],p=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(u!==p||l!==f||c!==m||h!==g){let d=1-a;const _=l*f+c*m+h*g+u*p,S=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const b=Math.sqrt(y),A=Math.atan2(b,_*S);d=Math.sin(d*A)/b,a=Math.sin(a*A)/b}const v=a*S;if(l=l*d+f*v,c=c*d+m*v,h=h*d+g*v,u=u*d+p*v,d===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-a*m,t[e+2]=c*g+h*m+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),f=l(i/2),m=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-n)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-n)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(r),i*Math.cos(r),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*n-a*i,h=l*i+a*e-r*n,u=l*n+r*i-o*e,f=-r*e-o*i-a*n;return this.x=c*l+f*-r+h*-a-u*-o,this.y=h*l+f*-o+u*-r-c*-a,this.z=u*l+f*-a+c*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fl.copy(this).projectOnVector(t),this.sub(fl)}reflect(t){return this.sub(fl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fl=new I,Qh=new vo;class yo{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,n=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],f=t[l+2];h<e&&(e=h),u<i&&(i=u),f<n&&(n=f),h>r&&(r=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(e,i,n),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,i=1/0,n=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),f=t.getZ(l);h<e&&(e=h),u<i&&(i=u),f<n&&(n=f),h>r&&(r=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(e,i,n),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Kn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Kn)}else i.boundingBox===null&&i.computeBoundingBox(),dl.copy(i.boundingBox),dl.applyMatrix4(t.matrixWorld),this.union(dl);const n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),Eo.subVectors(this.max,Ps),Dr.subVectors(t.a,Ps),zr.subVectors(t.b,Ps),Ir.subVectors(t.c,Ps),Pn.subVectors(zr,Dr),Ln.subVectors(Ir,zr),Qn.subVectors(Dr,Ir);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Qn.z,Qn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Qn.z,0,-Qn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Qn.y,Qn.x,0];return!pl(e,Dr,zr,Ir,Eo)||(e=[1,0,0,0,1,0,0,0,1],!pl(e,Dr,zr,Ir,Eo))?!1:(Ao.crossVectors(Pn,Ln),e=[Ao.x,Ao.y,Ao.z],pl(e,Dr,zr,Ir,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Kn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new I,new I,new I,new I,new I,new I,new I,new I],Kn=new I,dl=new yo,Dr=new I,zr=new I,Ir=new I,Pn=new I,Ln=new I,Qn=new I,Ps=new I,Eo=new I,Ao=new I,tr=new I;function pl(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){tr.fromArray(s,r);const a=n.x*Math.abs(tr.x)+n.y*Math.abs(tr.y)+n.z*Math.abs(tr.z),l=t.dot(tr),c=e.dot(tr),h=i.dot(tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Am=new yo,Ls=new I,ml=new I;class Ha{constructor(t=new I,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Am.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ls,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(ml)),this.expandByPoint(Ls.copy(t.center).sub(ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new I,gl=new I,Po=new I,Rn=new I,_l=new I,Lo=new I,xl=new I;class kc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.direction).multiplyScalar(e).add(this.origin),pn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){gl.copy(t).add(e).multiplyScalar(.5),Po.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(gl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Po),a=Rn.dot(this.direction),l=-Rn.dot(Po),c=Rn.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const p=1/h;u*=p,f*=p,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),n&&n.copy(Po).multiplyScalar(f).add(gl),m}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const i=pn.dot(this.direction),n=pn.dot(pn)-i*i,r=t.radius*t.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,i,n,r){_l.subVectors(e,t),Lo.subVectors(i,t),xl.crossVectors(_l,Lo);let o=this.direction.dot(xl),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rn.subVectors(this.origin,t);const l=a*this.direction.dot(Lo.crossVectors(Rn,Lo));if(l<0)return null;const c=a*this.direction.dot(_l.cross(Rn));if(c<0||l+c>o)return null;const h=-a*Rn.dot(xl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,n,r,o,a,l,c,h,u,f,m,g,p,d){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=n,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=f,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Or.setFromMatrixColumn(t,0).length(),r=1/Or.setFromMatrixColumn(t,1).length(),o=1/Or.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*u,g=a*h,p=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-p*c,e[9]=-a*l,e[2]=p-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,p=c*u;e[0]=f+p*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=p+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,p=c*u;e[0]=f-p*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=p-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*u,g=a*h,p=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+p,e[1]=l*u,e[5]=p*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,p=a*c;e[0]=l*h,e[4]=p-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-p*u}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,p=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+p,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=p*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pm,t,Lm)}lookAt(t,e,i){const n=this.elements;return vi.subVectors(t,e),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),Dn.crossVectors(i,vi),Dn.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),Dn.crossVectors(i,vi)),Dn.normalize(),Ro.crossVectors(vi,Dn),n[0]=Dn.x,n[4]=Ro.x,n[8]=vi.x,n[1]=Dn.y,n[5]=Ro.y,n[9]=vi.y,n[2]=Dn.z,n[6]=Ro.z,n[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],p=i[6],d=i[10],_=i[14],S=i[3],y=i[7],v=i[11],b=i[15],A=n[0],C=n[4],x=n[8],M=n[12],L=n[1],B=n[5],et=n[9],F=n[13],D=n[2],N=n[6],X=n[10],E=n[14],k=n[3],it=n[7],rt=n[11],G=n[15];return r[0]=o*A+a*L+l*D+c*k,r[4]=o*C+a*B+l*N+c*it,r[8]=o*x+a*et+l*X+c*rt,r[12]=o*M+a*F+l*E+c*G,r[1]=h*A+u*L+f*D+m*k,r[5]=h*C+u*B+f*N+m*it,r[9]=h*x+u*et+f*X+m*rt,r[13]=h*M+u*F+f*E+m*G,r[2]=g*A+p*L+d*D+_*k,r[6]=g*C+p*B+d*N+_*it,r[10]=g*x+p*et+d*X+_*rt,r[14]=g*M+p*F+d*E+_*G,r[3]=S*A+y*L+v*D+b*k,r[7]=S*C+y*B+v*N+b*it,r[11]=S*x+y*et+v*X+b*rt,r[15]=S*M+y*F+v*E+b*G,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],p=t[7],d=t[11],_=t[15];return g*(+r*l*u-n*c*u-r*a*f+i*c*f+n*a*m-i*l*m)+p*(+e*l*m-e*c*f+r*o*f-n*o*m+n*c*h-r*l*h)+d*(+e*c*u-e*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+_*(-n*a*h-e*l*u+e*a*f+n*o*u-i*o*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],p=t[13],d=t[14],_=t[15],S=u*d*c-p*f*c+p*l*m-a*d*m-u*l*_+a*f*_,y=g*f*c-h*d*c-g*l*m+o*d*m+h*l*_-o*f*_,v=h*p*c-g*u*c+g*a*m-o*p*m-h*a*_+o*u*_,b=g*u*l-h*p*l-g*a*f+o*p*f+h*a*d-o*u*d,A=e*S+i*y+n*v+r*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=S*C,t[1]=(p*f*r-u*d*r-p*n*m+i*d*m+u*n*_-i*f*_)*C,t[2]=(a*d*r-p*l*r+p*n*c-i*d*c-a*n*_+i*l*_)*C,t[3]=(u*l*r-a*f*r-u*n*c+i*f*c+a*n*m-i*l*m)*C,t[4]=y*C,t[5]=(h*d*r-g*f*r+g*n*m-e*d*m-h*n*_+e*f*_)*C,t[6]=(g*l*r-o*d*r-g*n*c+e*d*c+o*n*_-e*l*_)*C,t[7]=(o*f*r-h*l*r+h*n*c-e*f*c-o*n*m+e*l*m)*C,t[8]=v*C,t[9]=(g*u*r-h*p*r-g*i*m+e*p*m+h*i*_-e*u*_)*C,t[10]=(o*p*r-g*a*r+g*i*c-e*p*c-o*i*_+e*a*_)*C,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*m-e*a*m)*C,t[12]=b*C,t[13]=(h*p*n-g*u*n+g*i*f-e*p*f-h*i*d+e*u*d)*C,t[14]=(g*a*n-o*p*n-g*i*l+e*p*l+o*i*d-e*a*d)*C,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*f+e*a*f)*C,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,p=o*h,d=o*u,_=a*u,S=l*c,y=l*h,v=l*u,b=i.x,A=i.y,C=i.z;return n[0]=(1-(p+_))*b,n[1]=(m+v)*b,n[2]=(g-y)*b,n[3]=0,n[4]=(m-v)*A,n[5]=(1-(f+_))*A,n[6]=(d+S)*A,n[7]=0,n[8]=(g+y)*C,n[9]=(d-S)*C,n[10]=(1-(f+p))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=Or.set(n[0],n[1],n[2]).length();const o=Or.set(n[4],n[5],n[6]).length(),a=Or.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],qi.copy(this);const c=1/r,h=1/o,u=1/a;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=h,qi.elements[5]*=h,qi.elements[6]*=h,qi.elements[8]*=u,qi.elements[9]*=u,qi.elements[10]*=u,e.setFromRotationMatrix(qi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o){const a=this.elements,l=2*r/(e-t),c=2*r/(i-n),h=(e+t)/(e-t),u=(i+n)/(i-n),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,n,r,o){const a=this.elements,l=1/(e-t),c=1/(i-n),h=1/(o-r),u=(e+t)*l,f=(i+n)*c,m=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Or=new I,qi=new ye,Pm=new I(0,0,0),Lm=new I(1,1,1),Dn=new I,Ro=new I,vi=new I,tu=new ye,eu=new vo;class bo{constructor(t=0,e=0,i=0,n=bo.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eu.setFromEuler(this),this.setFromQuaternion(eu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}bo.DefaultOrder="XYZ";bo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Wa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rm=0;const iu=new I,Nr=new vo,mn=new ye,Do=new I,Rs=new I,Dm=new I,zm=new vo,nu=new I(1,0,0),ru=new I(0,1,0),su=new I(0,0,1),Im={type:"added"},ou={type:"removed"};class ke extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DefaultUp.clone();const t=new I,e=new bo,i=new vo,n=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ye},normalMatrix:{value:new Ei}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=ke.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ke.DefaultMatrixWorldAutoUpdate,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Nr.setFromAxisAngle(t,e),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,e){return Nr.setFromAxisAngle(t,e),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(ru,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return iu.copy(t).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(ru,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Do.copy(t):Do.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Rs,Do,this.up):mn.lookAt(Do,Rs,this.up),this.quaternion.setFromRotationMatrix(mn),n&&(mn.extractRotation(n.matrixWorld),Nr.setFromRotationMatrix(mn),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Im)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ou)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ou)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,zm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++){const a=n[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}ke.DefaultUp=new I(0,1,0);ke.DefaultMatrixAutoUpdate=!0;ke.DefaultMatrixWorldAutoUpdate=!0;const Yi=new I,gn=new I,vl=new I,_n=new I,Fr=new I,Br=new I,au=new I,yl=new I,bl=new I,Sl=new I;class rn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Yi.subVectors(t,e),n.cross(Yi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Yi.subVectors(n,e),gn.subVectors(i,e),vl.subVectors(t,e);const o=Yi.dot(Yi),a=Yi.dot(gn),l=Yi.dot(vl),c=gn.dot(gn),h=gn.dot(vl),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,_n),l.set(0,0),l.addScaledVector(r,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l}static isFrontFacing(t,e,i,n){return Yi.subVectors(i,e),gn.subVectors(t,e),Yi.cross(gn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yi.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Yi.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,r){return rn.getUV(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let o,a;Fr.subVectors(n,i),Br.subVectors(r,i),yl.subVectors(t,i);const l=Fr.dot(yl),c=Br.dot(yl);if(l<=0&&c<=0)return e.copy(i);bl.subVectors(t,n);const h=Fr.dot(bl),u=Br.dot(bl);if(h>=0&&u<=h)return e.copy(n);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Fr,o);Sl.subVectors(t,r);const m=Fr.dot(Sl),g=Br.dot(Sl);if(g>=0&&m<=g)return e.copy(r);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Br,a);const d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return au.subVectors(r,n),a=(u-h)/(u-h+(m-g)),e.copy(n).addScaledVector(au,a);const _=1/(d+p+f);return o=p*_,a=f*_,e.copy(i).addScaledVector(Fr,o).addScaledVector(Br,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Om=0;class Cs extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=ns,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Af,this.blendDst=Pf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ol,this.stencilZFail=ol,this.stencilZPass=ol,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==fs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ss extends Cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new I,zo=new vt;class an{constructor(t,e,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i===!0,this.usage=Zh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zo.fromBufferAttribute(this,e),zo.applyMatrix3(t),this.setXY(e,zo.x,zo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wo(e,this.array)),e}setX(t,e){return this.normalized&&(e=xi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wo(e,this.array)),e}setY(t,e){return this.normalized&&(e=xi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wo(e,this.array)),e}setW(t,e){return this.normalized&&(e=xi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=xi(e,this.array),i=xi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=xi(e,this.array),i=xi(i,this.array),n=xi(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=xi(e,this.array),i=xi(i,this.array),n=xi(n,this.array),r=xi(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zh&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uf extends an{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class kf extends an{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ge extends an{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Nm=0;const Ri=new ye,Ml=new ke,Ur=new I,yi=new yo,Ds=new yo,De=new I;class Wi extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(If(t)?kf:Uf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ei().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,e,i){return Ri.makeTranslation(t,e,i),this.applyMatrix4(Ri),this}scale(t,e,i){return Ri.makeScale(t,e,i),this.applyMatrix4(Ri),this}lookAt(t){return Ml.lookAt(t),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];yi.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ha);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(yi.min,Ds.min),yi.expandByPoint(De),De.addVectors(yi.max,Ds.max),yi.expandByPoint(De)):(yi.expandByPoint(Ds.min),yi.expandByPoint(Ds.max))}yi.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(Ur.fromBufferAttribute(t,c),De.add(Ur)),n=Math.max(n,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,r=e.normal.array,o=e.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let L=0;L<a;L++)c[L]=new I,h[L]=new I;const u=new I,f=new I,m=new I,g=new vt,p=new vt,d=new vt,_=new I,S=new I;function y(L,B,et){u.fromArray(n,L*3),f.fromArray(n,B*3),m.fromArray(n,et*3),g.fromArray(o,L*2),p.fromArray(o,B*2),d.fromArray(o,et*2),f.sub(u),m.sub(u),p.sub(g),d.sub(g);const F=1/(p.x*d.y-d.x*p.y);isFinite(F)&&(_.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(F),S.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(F),c[L].add(_),c[B].add(_),c[et].add(_),h[L].add(S),h[B].add(S),h[et].add(S))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let L=0,B=v.length;L<B;++L){const et=v[L],F=et.start,D=et.count;for(let N=F,X=F+D;N<X;N+=3)y(i[N+0],i[N+1],i[N+2])}const b=new I,A=new I,C=new I,x=new I;function M(L){C.fromArray(r,L*3),x.copy(C);const B=c[L];b.copy(B),b.sub(C.multiplyScalar(C.dot(B))).normalize(),A.crossVectors(x,B);const F=A.dot(h[L])<0?-1:1;l[L*4]=b.x,l[L*4+1]=b.y,l[L*4+2]=b.z,l[L*4+3]=F}for(let L=0,B=v.length;L<B;++L){const et=v[L],F=et.start,D=et.count;for(let N=F,X=F+D;N<X;N+=3)M(i[N+0]),M(i[N+1]),M(i[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const n=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),p=t.getX(f+1),d=t.getX(f+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,d),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*h;for(let _=0;_<h;_++)f[g++]=c[m++]}return new an(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Wi,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const lu=new ye,kr=new kc,wl=new Ha,zn=new I,In=new I,On=new I,Tl=new I,Cl=new I,El=new I,Io=new I,Oo=new I,No=new I,Fo=new vt,Bo=new vt,Uo=new vt,Al=new I,ko=new I;class ui extends ke{constructor(t=new Wi,e=new ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),t.ray.intersectsSphere(wl)===!1)||(lu.copy(r).invert(),kr.copy(t.ray).applyMatrix4(lu),i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,h=i.morphTargetsRelative,u=i.attributes.uv,f=i.attributes.uv2,m=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(n))for(let p=0,d=m.length;p<d;p++){const _=m[p],S=n[_.materialIndex],y=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let b=y,A=v;b<A;b+=3){const C=a.getX(b),x=a.getX(b+1),M=a.getX(b+2);o=Go(this,S,t,kr,l,c,h,u,f,C,x,M),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=p,S=d;_<S;_+=3){const y=a.getX(_),v=a.getX(_+1),b=a.getX(_+2);o=Go(this,n,t,kr,l,c,h,u,f,y,v,b),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(n))for(let p=0,d=m.length;p<d;p++){const _=m[p],S=n[_.materialIndex],y=Math.max(_.start,g.start),v=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let b=y,A=v;b<A;b+=3){const C=b,x=b+1,M=b+2;o=Go(this,S,t,kr,l,c,h,u,f,C,x,M),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,S=d;_<S;_+=3){const y=_,v=_+1,b=_+2;o=Go(this,n,t,kr,l,c,h,u,f,y,v,b),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}}function Fm(s,t,e,i,n,r,o,a){let l;if(t.side===Gi?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side!==Sn,a),l===null)return null;ko.copy(a),ko.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ko);return c<e.near||c>e.far?null:{distance:c,point:ko.clone(),object:s}}function Go(s,t,e,i,n,r,o,a,l,c,h,u){zn.fromBufferAttribute(n,c),In.fromBufferAttribute(n,h),On.fromBufferAttribute(n,u);const f=s.morphTargetInfluences;if(r&&f){Io.set(0,0,0),Oo.set(0,0,0),No.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const d=f[g],_=r[g];d!==0&&(Tl.fromBufferAttribute(_,c),Cl.fromBufferAttribute(_,h),El.fromBufferAttribute(_,u),o?(Io.addScaledVector(Tl,d),Oo.addScaledVector(Cl,d),No.addScaledVector(El,d)):(Io.addScaledVector(Tl.sub(zn),d),Oo.addScaledVector(Cl.sub(In),d),No.addScaledVector(El.sub(On),d)))}zn.add(Io),In.add(Oo),On.add(No)}s.isSkinnedMesh&&(s.boneTransform(c,zn),s.boneTransform(h,In),s.boneTransform(u,On));const m=Fm(s,t,e,i,zn,In,On,Al);if(m){a&&(Fo.fromBufferAttribute(a,c),Bo.fromBufferAttribute(a,h),Uo.fromBufferAttribute(a,u),m.uv=rn.getUV(Al,zn,In,On,Fo,Bo,Uo,new vt)),l&&(Fo.fromBufferAttribute(l,c),Bo.fromBufferAttribute(l,h),Uo.fromBufferAttribute(l,u),m.uv2=rn.getUV(Al,zn,In,On,Fo,Bo,Uo,new vt));const g={a:c,b:h,c:u,normal:new I,materialIndex:0};rn.getNormal(zn,In,On,g.normal),m.face=g}return m}class li extends Wi{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2));function g(p,d,_,S,y,v,b,A,C,x,M){const L=v/C,B=b/x,et=v/2,F=b/2,D=A/2,N=C+1,X=x+1;let E=0,k=0;const it=new I;for(let rt=0;rt<X;rt++){const G=rt*B-F;for(let H=0;H<N;H++){const K=H*L-et;it[p]=K*S,it[d]=G*y,it[_]=D,c.push(it.x,it.y,it.z),it[p]=0,it[d]=0,it[_]=A>0?1:-1,h.push(it.x,it.y,it.z),u.push(H/C),u.push(1-rt/x),E+=1}}for(let rt=0;rt<x;rt++)for(let G=0;G<C;G++){const H=f+G+N*rt,K=f+G+N*(rt+1),j=f+(G+1)+N*(rt+1),lt=f+(G+1)+N*rt;l.push(H,K,lt),l.push(K,j,lt),k+=6}a.addGroup(m,k,M),m+=k,f+=E}}static fromJSON(t){return new li(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Qe(s){const t={};for(let e=0;e<s.length;e++){const i=gs(s[e]);for(const n in i)t[n]=i[n]}return t}function Bm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Gf(s){return s.getRenderTarget()===null&&s.outputEncoding===ue?tn:so}const Ca={clone:gs,merge:Qe};var Um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Um,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=Bm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Vf extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Oi extends Vf{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jh*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ua*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gr=-90,Vr=1;class Gm extends ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new Oi(Gr,Vr,t,e);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const r=new Oi(Gr,Vr,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Oi(Gr,Vr,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Oi(Gr,Vr,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Oi(Gr,Vr,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Oi(Gr,Vr,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,r,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,f=t.xr.enabled;t.toneMapping=Tn,t.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,n),t.setRenderTarget(i,1),t.render(e,r),t.setRenderTarget(i,2),t.render(e,o),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=m,t.setRenderTarget(i,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Hf extends fi{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vm extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Hf(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new li(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gi,blending:Vn});r.uniforms.tEquirect.value=e;const o=new ui(n,r),a=e.minFilter;return e.minFilter===Va&&(e.minFilter=Ii),new Gm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}}const Pl=new I,Hm=new I,Wm=new Ei;class nr{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Pl.subVectors(i,e).cross(Hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(Pl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(i).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Wm.getNormalMatrix(t),n=this.coplanarPoint(Pl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Ha,Vo=new I;class Gc{constructor(t=new nr,e=new nr,i=new nr,n=new nr,r=new nr,o=new nr){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,n=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],f=i[8],m=i[9],g=i[10],p=i[11],d=i[12],_=i[13],S=i[14],y=i[15];return e[0].setComponents(a-n,u-l,p-f,y-d).normalize(),e[1].setComponents(a+n,u+l,p+f,y+d).normalize(),e[2].setComponents(a+r,u+c,p+m,y+_).normalize(),e[3].setComponents(a-r,u-c,p-m,y-_).normalize(),e[4].setComponents(a-o,u-h,p-g,y-S).normalize(),e[5].setComponents(a+o,u+h,p+g,y+S).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Hr)}intersectsSprite(t){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Vo.x=n.normal.x>0?t.max.x:t.min.x,Vo.y=n.normal.y>0?t.max.y:t.min.y,Vo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wf(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Xm(s,t){const e=t.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,f=c.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const f=h.array,m=h.updateRange;s.bindBuffer(u,c),m.count===-1?s.bufferSubData(u,0,f):(e?s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(s.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Vc extends Wi{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,f=e/l,m=[],g=[],p=[],d=[];for(let _=0;_<h;_++){const S=_*f-o;for(let y=0;y<c;y++){const v=y*u-r;g.push(v,-S,0),p.push(0,0,1),d.push(y/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<a;S++){const y=S+c*_,v=S+c*(_+1),b=S+1+c*(_+1),A=S+1+c*_;m.push(y,v,A),m.push(v,b,A)}this.setIndex(m),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(p,3)),this.setAttribute("uv",new Ge(d,2))}static fromJSON(t){return new Vc(t.width,t.height,t.widthSegments,t.heightSegments)}}var qm=`#ifdef USE_ALPHAMAP
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
}`,Ht={alphamap_fragment:qm,alphamap_pars_fragment:Ym,alphatest_fragment:$m,alphatest_pars_fragment:Zm,aomap_fragment:jm,aomap_pars_fragment:Jm,begin_vertex:Km,beginnormal_vertex:Qm,bsdfs:tg,iridescence_fragment:eg,bumpmap_pars_fragment:ig,clipping_planes_fragment:ng,clipping_planes_pars_fragment:rg,clipping_planes_pars_vertex:sg,clipping_planes_vertex:og,color_fragment:ag,color_pars_fragment:lg,color_pars_vertex:cg,color_vertex:hg,common:ug,cube_uv_reflection_fragment:fg,defaultnormal_vertex:dg,displacementmap_pars_vertex:pg,displacementmap_vertex:mg,emissivemap_fragment:gg,emissivemap_pars_fragment:_g,encodings_fragment:xg,encodings_pars_fragment:vg,envmap_fragment:yg,envmap_common_pars_fragment:bg,envmap_pars_fragment:Sg,envmap_pars_vertex:Mg,envmap_physical_pars_fragment:Og,envmap_vertex:wg,fog_vertex:Tg,fog_pars_vertex:Cg,fog_fragment:Eg,fog_pars_fragment:Ag,gradientmap_pars_fragment:Pg,lightmap_fragment:Lg,lightmap_pars_fragment:Rg,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:zg,lights_pars_begin:Ig,lights_toon_fragment:Ng,lights_toon_pars_fragment:Fg,lights_phong_fragment:Bg,lights_phong_pars_fragment:Ug,lights_physical_fragment:kg,lights_physical_pars_fragment:Gg,lights_fragment_begin:Vg,lights_fragment_maps:Hg,lights_fragment_end:Wg,logdepthbuf_fragment:Xg,logdepthbuf_pars_fragment:qg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:$g,map_fragment:Zg,map_pars_fragment:jg,map_particle_fragment:Jg,map_particle_pars_fragment:Kg,metalnessmap_fragment:Qg,metalnessmap_pars_fragment:t0,morphcolor_vertex:e0,morphnormal_vertex:i0,morphtarget_pars_vertex:n0,morphtarget_vertex:r0,normal_fragment_begin:s0,normal_fragment_maps:o0,normal_pars_fragment:a0,normal_pars_vertex:l0,normal_vertex:c0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:p0,output_fragment:m0,packing:g0,premultiplied_alpha_fragment:_0,project_vertex:x0,dithering_fragment:v0,dithering_pars_fragment:y0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:w0,shadowmap_vertex:T0,shadowmask_pars_fragment:C0,skinbase_vertex:E0,skinning_pars_vertex:A0,skinning_vertex:P0,skinnormal_vertex:L0,specularmap_fragment:R0,specularmap_pars_fragment:D0,tonemapping_fragment:z0,tonemapping_pars_fragment:I0,transmission_fragment:O0,transmission_pars_fragment:N0,uv_pars_fragment:F0,uv_pars_vertex:B0,uv_vertex:U0,uv2_pars_fragment:k0,uv2_pars_vertex:G0,uv2_vertex:V0,worldpos_vertex:H0,background_vert:W0,background_frag:X0,backgroundCube_vert:q0,backgroundCube_frag:Y0,cube_vert:$0,cube_frag:Z0,depth_vert:j0,depth_frag:J0,distanceRGBA_vert:K0,distanceRGBA_frag:Q0,equirect_vert:t_,equirect_frag:e_,linedashed_vert:i_,linedashed_frag:n_,meshbasic_vert:r_,meshbasic_frag:s_,meshlambert_vert:o_,meshlambert_frag:a_,meshmatcap_vert:l_,meshmatcap_frag:c_,meshnormal_vert:h_,meshnormal_frag:u_,meshphong_vert:f_,meshphong_frag:d_,meshphysical_vert:p_,meshphysical_frag:m_,meshtoon_vert:g_,meshtoon_frag:__,points_vert:x_,points_frag:v_,shadow_vert:y_,shadow_frag:b_,sprite_vert:S_,sprite_frag:M_},pt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ei},uv2Transform:{value:new Ei},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ei}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ei}}},nn={basic:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Qe([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Qe([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Qe([pt.points,pt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Qe([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Qe([pt.common,pt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Qe([pt.sprite,pt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ei},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Qe([pt.common,pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Qe([pt.lights,pt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};nn.physical={uniforms:Qe([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new vt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Ho={r:0,b:0,g:0};function w_(s,t,e,i,n,r,o){const a=new jt(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(d,_){let S=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y));const v=s.xr,b=v.getSession&&v.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?p(a,l):y&&y.isColor&&(p(y,1),S=!0),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ga)?(h===void 0&&(h=new ui(new li(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:gs(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(u!==y||f!==y.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,m=s.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ui(new Vc(2,2),new Ai({name:"BackgroundMaterial",uniforms:gs(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,m=s.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,_){d.getRGB(Ho,Gf(s)),i.buffers.color.setClear(Ho.r,Ho.g,Ho.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(d,_=1){a.set(d),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(a,l)},render:g}}function T_(s,t,e,i){const n=s.getParameter(34921),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=d(null);let c=l,h=!1;function u(D,N,X,E,k){let it=!1;if(o){const rt=p(E,X,N);c!==rt&&(c=rt,m(c.object)),it=_(D,E,X,k),it&&S(D,E,X,k)}else{const rt=N.wireframe===!0;(c.geometry!==E.id||c.program!==X.id||c.wireframe!==rt)&&(c.geometry=E.id,c.program=X.id,c.wireframe=rt,it=!0)}k!==null&&e.update(k,34963),(it||h)&&(h=!1,x(D,N,X,E),k!==null&&s.bindBuffer(34963,e.get(k).buffer))}function f(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(D){return i.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function p(D,N,X){const E=X.wireframe===!0;let k=a[D.id];k===void 0&&(k={},a[D.id]=k);let it=k[N.id];it===void 0&&(it={},k[N.id]=it);let rt=it[E];return rt===void 0&&(rt=d(f()),it[E]=rt),rt}function d(D){const N=[],X=[],E=[];for(let k=0;k<n;k++)N[k]=0,X[k]=0,E[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:X,attributeDivisors:E,object:D,attributes:{},index:null}}function _(D,N,X,E){const k=c.attributes,it=N.attributes;let rt=0;const G=X.getAttributes();for(const H in G)if(G[H].location>=0){const j=k[H];let lt=it[H];if(lt===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor)),j===void 0||j.attribute!==lt||lt&&j.data!==lt.data)return!0;rt++}return c.attributesNum!==rt||c.index!==E}function S(D,N,X,E){const k={},it=N.attributes;let rt=0;const G=X.getAttributes();for(const H in G)if(G[H].location>=0){let j=it[H];j===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const lt={};lt.attribute=j,j&&j.data&&(lt.data=j.data),k[H]=lt,rt++}c.attributes=k,c.attributesNum=rt,c.index=E}function y(){const D=c.newAttributes;for(let N=0,X=D.length;N<X;N++)D[N]=0}function v(D){b(D,0)}function b(D,N){const X=c.newAttributes,E=c.enabledAttributes,k=c.attributeDivisors;X[D]=1,E[D]===0&&(s.enableVertexAttribArray(D),E[D]=1),k[D]!==N&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,N),k[D]=N)}function A(){const D=c.newAttributes,N=c.enabledAttributes;for(let X=0,E=N.length;X<E;X++)N[X]!==D[X]&&(s.disableVertexAttribArray(X),N[X]=0)}function C(D,N,X,E,k,it){i.isWebGL2===!0&&(X===5124||X===5125)?s.vertexAttribIPointer(D,N,X,k,it):s.vertexAttribPointer(D,N,X,E,k,it)}function x(D,N,X,E){if(i.isWebGL2===!1&&(D.isInstancedMesh||E.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const k=E.attributes,it=X.getAttributes(),rt=N.defaultAttributeValues;for(const G in it){const H=it[G];if(H.location>=0){let K=k[G];if(K===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const j=K.normalized,lt=K.itemSize,$=e.get(K);if($===void 0)continue;const Nt=$.buffer,gt=$.type,Pt=$.bytesPerElement;if(K.isInterleavedBufferAttribute){const ot=K.data,Dt=ot.stride,wt=K.offset;if(ot.isInstancedInterleavedBuffer){for(let Lt=0;Lt<H.locationSize;Lt++)b(H.location+Lt,ot.meshPerAttribute);D.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Lt=0;Lt<H.locationSize;Lt++)v(H.location+Lt);s.bindBuffer(34962,Nt);for(let Lt=0;Lt<H.locationSize;Lt++)C(H.location+Lt,lt/H.locationSize,gt,j,Dt*Pt,(wt+lt/H.locationSize*Lt)*Pt)}else{if(K.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)b(H.location+ot,K.meshPerAttribute);D.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ot=0;ot<H.locationSize;ot++)v(H.location+ot);s.bindBuffer(34962,Nt);for(let ot=0;ot<H.locationSize;ot++)C(H.location+ot,lt/H.locationSize,gt,j,lt*Pt,lt/H.locationSize*ot*Pt)}}else if(rt!==void 0){const j=rt[G];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(H.location,j);break;case 3:s.vertexAttrib3fv(H.location,j);break;case 4:s.vertexAttrib4fv(H.location,j);break;default:s.vertexAttrib1fv(H.location,j)}}}}A()}function M(){et();for(const D in a){const N=a[D];for(const X in N){const E=N[X];for(const k in E)g(E[k].object),delete E[k];delete N[X]}delete a[D]}}function L(D){if(a[D.id]===void 0)return;const N=a[D.id];for(const X in N){const E=N[X];for(const k in E)g(E[k].object),delete E[k];delete N[X]}delete a[D.id]}function B(D){for(const N in a){const X=a[N];if(X[D.id]===void 0)continue;const E=X[D.id];for(const k in E)g(E[k].object),delete E[k];delete X[D.id]}}function et(){F(),h=!0,c!==l&&(c=l,m(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:et,resetDefaultState:F,dispose:M,releaseStatesOfGeometry:L,releaseStatesOfProgram:B,initAttributes:y,enableAttribute:v,disableUnusedAttributes:A}}function C_(s,t,e,i){const n=i.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,u){if(u===0)return;let f,m;if(n)f=s,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,h,u),e.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function E_(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),d=s.getParameter(36347),_=s.getParameter(36348),S=s.getParameter(36349),y=f>0,v=o||t.has("OES_texture_float"),b=y&&v,A=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:A}}function A_(s){const t=this;let e=null,i=0,n=!1,r=!1;const o=new nr,a=new Ei,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,m){const g=u.length!==0||f||i!==0||n;return n=f,e=h(u,m,0),i=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,f,m){const g=u.clippingPlanes,p=u.clipIntersection,d=u.clipShadows,_=s.get(u);if(!n||g===null||g.length===0||r&&!d)r?h(null):c();else{const S=r?0:i,y=S*4;let v=_.clippingState||null;l.value=v,v=h(g,f,y,m);for(let b=0;b!==y;++b)v[b]=e[b];_.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,m,g){const p=u!==null?u.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<_)&&(d=new Float32Array(_));for(let y=0,v=m;y!==p;++y,v+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(d,v),d[v+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,d}}function P_(s){let t=new WeakMap;function e(o,a){return a===nc?o.mapping=ds:a===rc&&(o.mapping=ps),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===nc||a===rc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vm(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Xa extends Vf{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Jr=4,cu=[.125,.215,.35,.446,.526,.582],cr=20,Ll=new Xa,hu=new jt;let Rl=null;const rr=(1+Math.sqrt(5))/2,Wr=1/rr,uu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,rr,Wr),new I(0,rr,-Wr),new I(Wr,0,rr),new I(-Wr,0,rr),new I(rr,Wr,0),new I(-rr,Wr,0)];class fu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Rl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rl),t.scissorTest=!1,Wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rl=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:ro,format:Ji,encoding:wr,depthBuffer:!1},n=du(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L_(r)),this._blurMaterial=R_(r,t,e)}return n}_compileMaterial(t){const e=new ui(this._lodPlanes[0],t);this._renderer.compile(e,Ll)}_sceneToCubeUV(t,e,i,n){const a=new Oi(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(hu),h.toneMapping=Tn,h.autoClear=!1;const m=new ss({name:"PMREM.Background",side:Gi,depthWrite:!1,depthTest:!1}),g=new ui(new li,m);let p=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,p=!0):(m.color.copy(hu),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):S===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const y=this._cubeSize;Wo(n,S*y,_>2?y:0,y,y),h.setRenderTarget(n),p&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===ds||t.mapping===ps;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new ui(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Wo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ll)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=uu[(n-1)%uu.length];this._blur(t,n-1,n,r,o)}e.autoClear=i}_blur(t,e,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ui(this._lodPlanes[n],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*cr-1),p=r/g,d=isFinite(r)?1+Math.floor(h*p):cr;d>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${cr}`);const _=[];let S=0;for(let C=0;C<cr;++C){const x=C/p,M=Math.exp(-x*x/2);_.push(M),C===0?S+=M:C<d&&(S+=2*M)}for(let C=0;C<_.length;C++)_[C]=_[C]/S;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const v=this._sizeLods[n],b=3*v*(n>y-Jr?n-y+Jr:0),A=4*(this._cubeSize-v);Wo(e,b,A,3*v,2*v),l.setRenderTarget(e),l.render(u,Ll)}}function L_(s){const t=[],e=[],i=[];let n=s;const r=s-Jr+1+cu.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);e.push(a);let l=1/a;o>s-Jr?l=cu[o-s+Jr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,p=3,d=2,_=1,S=new Float32Array(p*g*m),y=new Float32Array(d*g*m),v=new Float32Array(_*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,x=A>2?0:-1,M=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];S.set(M,p*g*A),y.set(f,d*g*A);const L=[A,A,A,A,A,A];v.set(L,_*g*A)}const b=new Wi;b.setAttribute("position",new an(S,p)),b.setAttribute("uv",new an(y,d)),b.setAttribute("faceIndex",new an(v,_)),t.push(b),n>Jr&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function du(s,t,e){const i=new Ki(s,t,e);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function R_(s,t,e){const i=new Float32Array(cr),n=new I(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Hc(),fragmentShader:`

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
	`}function D_(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===nc||l===rc,h=l===ds||l===ps;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new fu(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&n(u)){e===null&&(e=new fu(s));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function z_(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function I_(s,t,e,i){const n={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete n[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],34962);const m=u.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)t.update(p[d],34962)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let y=0,v=S.length;y<v;y+=3){const b=S[y+0],A=S[y+1],C=S[y+2];f.push(b,A,A,C,C,b)}}else{const S=g.array;p=g.version;for(let y=0,v=S.length/3-1;y<v;y+=3){const b=y+0,A=y+1,C=y+2;f.push(b,A,A,C,C,b)}}const d=new(If(f)?kf:Uf)(f,1);d.version=p;const _=r.get(u);_&&t.remove(_),r.set(u,d)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function O_(s,t,e,i){const n=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,m){s.drawElements(r,m,a,f*l),e.update(m,r,1)}function u(f,m,g){if(g===0)return;let p,d;if(n)p=s,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,a,f*l,g),e.update(m,r,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function N_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function F_(s,t){return s[0]-t[0]}function B_(s,t){return Math.abs(t[1])-Math.abs(s[1])}function U_(s,t,e){const i={},n=new Float32Array(8),r=new WeakMap,o=new Oe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,f){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=p!==void 0?p.length:0;let _=r.get(h);if(_===void 0||_.count!==d){let X=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",X)};var g=X;_!==void 0&&_.texture.dispose();const v=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],M=h.morphAttributes.color||[];let L=0;v===!0&&(L=1),b===!0&&(L=2),A===!0&&(L=3);let B=h.attributes.position.count*L,et=1;B>t.maxTextureSize&&(et=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const F=new Float32Array(B*et*4*d),D=new Bf(F,B,et,d);D.type=ur,D.needsUpdate=!0;const N=L*4;for(let E=0;E<d;E++){const k=C[E],it=x[E],rt=M[E],G=B*et*4*E;for(let H=0;H<k.count;H++){const K=H*N;v===!0&&(o.fromBufferAttribute(k,H),F[G+K+0]=o.x,F[G+K+1]=o.y,F[G+K+2]=o.z,F[G+K+3]=0),b===!0&&(o.fromBufferAttribute(it,H),F[G+K+4]=o.x,F[G+K+5]=o.y,F[G+K+6]=o.z,F[G+K+7]=0),A===!0&&(o.fromBufferAttribute(rt,H),F[G+K+8]=o.x,F[G+K+9]=o.y,F[G+K+10]=o.z,F[G+K+11]=rt.itemSize===4?o.w:1)}}_={count:d,texture:D,size:new vt(B,et)},r.set(h,_),h.addEventListener("dispose",X)}let S=0;for(let v=0;v<m.length;v++)S+=m[v];const y=h.morphTargetsRelative?1:1-S;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=i[h.id];if(d===void 0||d.length!==p){d=[];for(let b=0;b<p;b++)d[b]=[b,0];i[h.id]=d}for(let b=0;b<p;b++){const A=d[b];A[0]=b,A[1]=m[b]}d.sort(B_);for(let b=0;b<8;b++)b<p&&d[b][1]?(a[b][0]=d[b][0],a[b][1]=d[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(F_);const _=h.morphAttributes.position,S=h.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const A=a[b],C=A[0],x=A[1];C!==Number.MAX_SAFE_INTEGER&&x?(_&&h.getAttribute("morphTarget"+b)!==_[C]&&h.setAttribute("morphTarget"+b,_[C]),S&&h.getAttribute("morphNormal"+b)!==S[C]&&h.setAttribute("morphNormal"+b,S[C]),n[b]=x,y+=x):(_&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),S&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),n[b]=0)}const v=h.morphTargetsRelative?1:1-y;f.getUniforms().setValue(s,"morphTargetBaseInfluence",v),f.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function k_(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);return n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Xf=new fi,qf=new Bf,Yf=new Em,$f=new Hf,gu=[],_u=[],xu=new Float32Array(16),vu=new Float32Array(9),yu=new Float32Array(4);function Es(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=gu[n];if(r===void 0&&(r=new Float32Array(n),gu[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ae(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function qa(s,t){let e=_u[t];e===void 0&&(e=new Int32Array(t),_u[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function G_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function V_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),Ae(e,t)}}function H_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),Ae(e,t)}}function W_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),Ae(e,t)}}function X_(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,i))return;yu.set(i),s.uniformMatrix2fv(this.addr,!1,yu),Ae(e,i)}}function q_(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,i))return;vu.set(i),s.uniformMatrix3fv(this.addr,!1,vu),Ae(e,i)}}function Y_(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,i))return;xu.set(i),s.uniformMatrix4fv(this.addr,!1,xu),Ae(e,i)}}function $_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Z_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),Ae(e,t)}}function j_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),Ae(e,t)}}function J_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),Ae(e,t)}}function K_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Q_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),Ae(e,t)}}function tx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),Ae(e,t)}}function ex(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),Ae(e,t)}}function ix(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2D(t||Xf,n)}function nx(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Yf,n)}function rx(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||$f,n)}function sx(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||qf,n)}function ox(s){switch(s){case 5126:return G_;case 35664:return V_;case 35665:return H_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return $_;case 35667:case 35671:return Z_;case 35668:case 35672:return j_;case 35669:case 35673:return J_;case 5125:return K_;case 36294:return Q_;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return sx}}function ax(s,t){s.uniform1fv(this.addr,t)}function lx(s,t){const e=Es(t,this.size,2);s.uniform2fv(this.addr,e)}function cx(s,t){const e=Es(t,this.size,3);s.uniform3fv(this.addr,e)}function hx(s,t){const e=Es(t,this.size,4);s.uniform4fv(this.addr,e)}function ux(s,t){const e=Es(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function fx(s,t){const e=Es(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function dx(s,t){const e=Es(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function px(s,t){s.uniform1iv(this.addr,t)}function mx(s,t){s.uniform2iv(this.addr,t)}function gx(s,t){s.uniform3iv(this.addr,t)}function _x(s,t){s.uniform4iv(this.addr,t)}function xx(s,t){s.uniform1uiv(this.addr,t)}function vx(s,t){s.uniform2uiv(this.addr,t)}function yx(s,t){s.uniform3uiv(this.addr,t)}function bx(s,t){s.uniform4uiv(this.addr,t)}function Sx(s,t,e){const i=this.cache,n=t.length,r=qa(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Xf,r[o])}function Mx(s,t,e){const i=this.cache,n=t.length,r=qa(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Yf,r[o])}function wx(s,t,e){const i=this.cache,n=t.length,r=qa(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||$f,r[o])}function Tx(s,t,e){const i=this.cache,n=t.length,r=qa(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||qf,r[o])}function Cx(s){switch(s){case 5126:return ax;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return ux;case 35675:return fx;case 35676:return dx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return xx;case 36294:return vx;case 36295:return yx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Tx}}class Ex{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=ox(e.type)}}class Ax{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Cx(e.type)}}class Px{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(t,e[a.id],i)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function bu(s,t){s.seq.push(t),s.map[t.id]=t}function Lx(s,t,e){const i=s.name,n=i.length;for(Dl.lastIndex=0;;){const r=Dl.exec(i),o=Dl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){bu(e,c===void 0?new Ex(a,s,t):new Ax(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Px(a),bu(e,u)),e=u}}}class da{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);Lx(r,o,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function Su(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}let Rx=0;function Dx(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function zx(s){switch(s){case wr:return["Linear","( value )"];case ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Mu(s,t,e){const i=s.getShaderParameter(t,35713),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Dx(s.getShaderSource(t),o)}else return n}function Ix(s,t){const e=zx(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Ox(s,t){let e;switch(t){case tm:e="Linear";break;case em:e="Reinhard";break;case im:e="OptimizedCineon";break;case nm:e="ACESFilmic";break;case rm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Nx(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function Fx(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Bx(s,t){const e={},i=s.getProgramParameter(t,35721);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Us(s){return s!==""}function wu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(s){return s.replace(Ux,kx)}function kx(s,t){const e=Ht[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return cc(e)}const Gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(s){return s.replace(Gx,Vx)}function Vx(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Eu(s){let t="precision "+s.precision+` float;
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
`),_=[m,Eu(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Ox("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.encodings_pars_fragment,Ix("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),o=cc(o),o=wu(o,e),o=Tu(o,e),a=cc(a),a=wu(a,e),a=Tu(a,e),o=Cu(o),a=Cu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",e.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=S+d+o,v=S+_+a,b=Su(n,35633,y),A=Su(n,35632,v);if(n.attachShader(p,b),n.attachShader(p,A),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p),s.debug.checkShaderErrors){const M=n.getProgramInfoLog(p).trim(),L=n.getShaderInfoLog(b).trim(),B=n.getShaderInfoLog(A).trim();let et=!0,F=!0;if(n.getProgramParameter(p,35714)===!1){et=!1;const D=Mu(n,b,"vertex"),N=Mu(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,35715)+`

Program Info Log: `+M+`
`+D+`
`+N)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(L===""||B==="")&&(F=!1);F&&(this.diagnostics={runnable:et,programLog:M,vertexShader:{log:L,prefix:d},fragmentShader:{log:B,prefix:_}})}n.deleteShader(b),n.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new da(n,p)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=Bx(n,p)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Rx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=A,this}let Zx=0;class jx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Jx(t),e.set(t,i)),i}}class Jx{constructor(t){this.id=Zx++,this.code=t,this.usedTimes=0}}function Kx(s,t,e,i,n,r,o){const a=new Wa,l=new jx,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,f=n.vertexTextures;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,M,L,B,et){const F=B.fog,D=et.geometry,N=x.isMeshStandardMaterial?B.environment:null,X=(x.isMeshStandardMaterial?e:t).get(x.envMap||N),E=X&&X.mapping===Ga?X.image.height:null,k=g[x.type];x.precision!==null&&(m=n.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const it=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,rt=it!==void 0?it.length:0;let G=0;D.morphAttributes.position!==void 0&&(G=1),D.morphAttributes.normal!==void 0&&(G=2),D.morphAttributes.color!==void 0&&(G=3);let H,K,j,lt;if(k){const Dt=nn[k];H=Dt.vertexShader,K=Dt.fragmentShader}else H=x.vertexShader,K=x.fragmentShader,l.update(x),j=l.getVertexShaderID(x),lt=l.getFragmentShaderID(x);const $=s.getRenderTarget(),Nt=x.alphaTest>0,gt=x.clearcoat>0,Pt=x.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:x.type,vertexShader:H,fragmentShader:K,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:et.isInstancedMesh===!0,instancingColor:et.isInstancedMesh===!0&&et.instanceColor!==null,supportsVertexTextures:f,outputEncoding:$===null?s.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:wr,map:!!x.map,matcap:!!x.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:E,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Mm,tangentSpaceNormalMap:x.normalMapType===zf,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===ue,clearcoat:gt,clearcoatMap:gt&&!!x.clearcoatMap,clearcoatRoughnessMap:gt&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:gt&&!!x.clearcoatNormalMap,iridescence:Pt,iridescenceMap:Pt&&!!x.iridescenceMap,iridescenceThicknessMap:Pt&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===ns,alphaMap:!!x.alphaMap,alphaTest:Nt,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:et.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:G,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:Tn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Sn,flipSided:x.side===Gi,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)M.push(L),M.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(M,x),S(M,x),M.push(s.outputEncoding)),M.push(x.customProgramCacheKey),M.join()}function _(x,M){x.push(M.precision),x.push(M.outputEncoding),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.combine),x.push(M.vertexUvs),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function S(x,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.map&&a.enable(4),M.matcap&&a.enable(5),M.envMap&&a.enable(6),M.lightMap&&a.enable(7),M.aoMap&&a.enable(8),M.emissiveMap&&a.enable(9),M.bumpMap&&a.enable(10),M.normalMap&&a.enable(11),M.objectSpaceNormalMap&&a.enable(12),M.tangentSpaceNormalMap&&a.enable(13),M.clearcoat&&a.enable(14),M.clearcoatMap&&a.enable(15),M.clearcoatRoughnessMap&&a.enable(16),M.clearcoatNormalMap&&a.enable(17),M.iridescence&&a.enable(18),M.iridescenceMap&&a.enable(19),M.iridescenceThicknessMap&&a.enable(20),M.displacementMap&&a.enable(21),M.specularMap&&a.enable(22),M.roughnessMap&&a.enable(23),M.metalnessMap&&a.enable(24),M.gradientMap&&a.enable(25),M.alphaMap&&a.enable(26),M.alphaTest&&a.enable(27),M.vertexColors&&a.enable(28),M.vertexAlphas&&a.enable(29),M.vertexUvs&&a.enable(30),M.vertexTangents&&a.enable(31),M.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.physicallyCorrectLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.specularIntensityMap&&a.enable(15),M.specularColorMap&&a.enable(16),M.transmission&&a.enable(17),M.transmissionMap&&a.enable(18),M.thicknessMap&&a.enable(19),M.sheen&&a.enable(20),M.sheenColorMap&&a.enable(21),M.sheenRoughnessMap&&a.enable(22),M.decodeVideoTexture&&a.enable(23),M.opaque&&a.enable(24),x.push(a.mask)}function y(x){const M=g[x.type];let L;if(M){const B=nn[M];L=Ca.clone(B.uniforms)}else L=x.uniforms;return L}function v(x,M){let L;for(let B=0,et=c.length;B<et;B++){const F=c[B];if(F.cacheKey===M){L=F,++L.usedTimes;break}}return L===void 0&&(L=new $x(s,M,x,r),c.push(L)),L}function b(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:v,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:C}}function Qx(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function i(r,o,a){s.get(r)[o]=a}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function tv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Au(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Pu(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,f,m,g,p,d){let _=s[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:p,group:d},s[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=p,_.group=d),t++,_}function a(u,f,m,g,p,d){const _=o(u,f,m,g,p,d);m.transmission>0?i.push(_):m.transparent===!0?n.push(_):e.push(_)}function l(u,f,m,g,p,d){const _=o(u,f,m,g,p,d);m.transmission>0?i.unshift(_):m.transparent===!0?n.unshift(_):e.unshift(_)}function c(u,f){e.length>1&&e.sort(u||tv),i.length>1&&i.sort(f||Au),n.length>1&&n.sort(f||Au)}function h(){for(let u=t,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function ev(){let s=new WeakMap;function t(i,n){const r=s.get(i);let o;return r===void 0?(o=new Pu,s.set(i,[o])):n>=r.length?(o=new Pu,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function iv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new jt};break;case"SpotLight":e={position:new I,direction:new I,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function nv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let rv=0;function sv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ov(s,t){const e=new iv,i=nv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new I);const r=new I,o=new ye,a=new ye;function l(h,u){let f=0,m=0,g=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let p=0,d=0,_=0,S=0,y=0,v=0,b=0,A=0,C=0,x=0;h.sort(sv);const M=u!==!0?Math.PI:1;for(let B=0,et=h.length;B<et;B++){const F=h[B],D=F.color,N=F.intensity,X=F.distance,E=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=D.r*N*M,m+=D.g*N*M,g+=D.b*N*M;else if(F.isLightProbe)for(let k=0;k<9;k++)n.probe[k].addScaledVector(F.sh.coefficients[k],N);else if(F.isDirectionalLight){const k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const it=F.shadow,rt=i.get(F);rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,n.directionalShadow[p]=rt,n.directionalShadowMap[p]=E,n.directionalShadowMatrix[p]=F.shadow.matrix,v++}n.directional[p]=k,p++}else if(F.isSpotLight){const k=e.get(F);k.position.setFromMatrixPosition(F.matrixWorld),k.color.copy(D).multiplyScalar(N*M),k.distance=X,k.coneCos=Math.cos(F.angle),k.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),k.decay=F.decay,n.spot[_]=k;const it=F.shadow;if(F.map&&(n.spotLightMap[C]=F.map,C++,it.updateMatrices(F),F.castShadow&&x++),n.spotLightMatrix[_]=it.matrix,F.castShadow){const rt=i.get(F);rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,n.spotShadow[_]=rt,n.spotShadowMap[_]=E,A++}_++}else if(F.isRectAreaLight){const k=e.get(F);k.color.copy(D).multiplyScalar(N),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),n.rectArea[S]=k,S++}else if(F.isPointLight){const k=e.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity*M),k.distance=F.distance,k.decay=F.decay,F.castShadow){const it=F.shadow,rt=i.get(F);rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,rt.shadowCameraNear=it.camera.near,rt.shadowCameraFar=it.camera.far,n.pointShadow[d]=rt,n.pointShadowMap[d]=E,n.pointShadowMatrix[d]=F.shadow.matrix,b++}n.point[d]=k,d++}else if(F.isHemisphereLight){const k=e.get(F);k.skyColor.copy(F.color).multiplyScalar(N*M),k.groundColor.copy(F.groundColor).multiplyScalar(N*M),n.hemi[y]=k,y++}}S>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=g;const L=n.hash;(L.directionalLength!==p||L.pointLength!==d||L.spotLength!==_||L.rectAreaLength!==S||L.hemiLength!==y||L.numDirectionalShadows!==v||L.numPointShadows!==b||L.numSpotShadows!==A||L.numSpotMaps!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=S,n.point.length=d,n.hemi.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=A+C-x,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=x,L.directionalLength=p,L.pointLength=d,L.spotLength=_,L.rectAreaLength=S,L.hemiLength=y,L.numDirectionalShadows=v,L.numPointShadows=b,L.numSpotShadows=A,L.numSpotMaps=C,n.version=rv++)}function c(h,u){let f=0,m=0,g=0,p=0,d=0;const _=u.matrixWorldInverse;for(let S=0,y=h.length;S<y;S++){const v=h[S];if(v.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),f++}else if(v.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const b=n.rectArea[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),m++}else if(v.isHemisphereLight){const b=n.hemi[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:n}}function Lu(s,t){const e=new ov(s,t),i=[],n=[];function r(){i.length=0,n.length=0}function o(u){i.push(u)}function a(u){n.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function av(s,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Lu(s,t),e.set(r,[l])):o>=a.length?(l=new Lu(s,t),a.push(l)):l=a[o],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class lv extends Cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cv extends Cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hv=`void main() {
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
}`;function fv(s,t,e){let i=new Gc;const n=new vt,r=new vt,o=new Oe,a=new lv({depthPacking:Sm}),l=new cv,c={},h=e.maxTextureSize,u={0:Gi,1:fs,2:Sn},f=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:hv,fragmentShader:uv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Wi;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ui(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ef,this.render=function(v,b,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||v.length===0)return;const C=s.getRenderTarget(),x=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Vn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let B=0,et=v.length;B<et;B++){const F=v[B],D=F.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;n.copy(D.mapSize);const N=D.getFrameExtents();if(n.multiply(N),r.copy(D.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/N.x),n.x=r.x*N.x,D.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/N.y),n.y=r.y*N.y,D.mapSize.y=r.y)),D.map===null){const E=this.type!==Bs?{minFilter:hi,magFilter:hi}:{};D.map=new Ki(n.x,n.y,E),D.map.texture.name=F.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const X=D.getViewportCount();for(let E=0;E<X;E++){const k=D.getViewport(E);o.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),L.viewport(o),D.updateMatrices(F,E),i=D.getFrustum(),y(b,A,D.camera,F,this.type)}D.isPointLightShadow!==!0&&this.type===Bs&&_(D,A),D.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(C,x,M)};function _(v,b){const A=t.update(p);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Ki(n.x,n.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(b,null,A,f,p,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(b,null,A,m,p,null)}function S(v,b,A,C,x,M){let L=null;const B=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(B!==void 0?L=B:L=A.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const et=L.uuid,F=b.uuid;let D=c[et];D===void 0&&(D={},c[et]=D);let N=D[F];N===void 0&&(N=L.clone(),D[F]=N),L=N}return L.visible=b.visible,L.wireframe=b.wireframe,M===Bs?L.side=b.shadowSide!==null?b.shadowSide:b.side:L.side=b.shadowSide!==null?b.shadowSide:u[b.side],L.alphaMap=b.alphaMap,L.alphaTest=b.alphaTest,L.map=b.map,L.clipShadows=b.clipShadows,L.clippingPlanes=b.clippingPlanes,L.clipIntersection=b.clipIntersection,L.displacementMap=b.displacementMap,L.displacementScale=b.displacementScale,L.displacementBias=b.displacementBias,L.wireframeLinewidth=b.wireframeLinewidth,L.linewidth=b.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(A.matrixWorld),L.nearDistance=C,L.farDistance=x),L}function y(v,b,A,C,x){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===Bs)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);const B=t.update(v),et=v.material;if(Array.isArray(et)){const F=B.groups;for(let D=0,N=F.length;D<N;D++){const X=F[D],E=et[X.materialIndex];if(E&&E.visible){const k=S(v,E,C,A.near,A.far,x);s.renderBufferDirect(A,null,B,k,v,X)}}}else if(et.visible){const F=S(v,et,C,A.near,A.far,x);s.renderBufferDirect(A,null,B,F,v,null)}}const L=v.children;for(let B=0,et=L.length;B<et;B++)y(L[B],b,A,C,x)}}function dv(s,t,e){const i=e.isWebGL2;function n(){let R=!1;const q=new Oe;let st=null;const mt=new Oe(0,0,0,0);return{setMask:function(bt){st!==bt&&!R&&(s.colorMask(bt,bt,bt,bt),st=bt)},setLocked:function(bt){R=bt},setClear:function(bt,at,Z,ft,nt){nt===!0&&(bt*=ft,at*=ft,Z*=ft),q.set(bt,at,Z,ft),mt.equals(q)===!1&&(s.clearColor(bt,at,Z,ft),mt.copy(q))},reset:function(){R=!1,st=null,mt.set(-1,0,0,0)}}}function r(){let R=!1,q=null,st=null,mt=null;return{setTest:function(bt){bt?Nt(2929):gt(2929)},setMask:function(bt){q!==bt&&!R&&(s.depthMask(bt),q=bt)},setFunc:function(bt){if(st!==bt){switch(bt){case Xp:s.depthFunc(512);break;case qp:s.depthFunc(519);break;case Yp:s.depthFunc(513);break;case ic:s.depthFunc(515);break;case $p:s.depthFunc(514);break;case Zp:s.depthFunc(518);break;case jp:s.depthFunc(516);break;case Jp:s.depthFunc(517);break;default:s.depthFunc(515)}st=bt}},setLocked:function(bt){R=bt},setClear:function(bt){mt!==bt&&(s.clearDepth(bt),mt=bt)},reset:function(){R=!1,q=null,st=null,mt=null}}}function o(){let R=!1,q=null,st=null,mt=null,bt=null,at=null,Z=null,ft=null,nt=null;return{setTest:function(tt){R||(tt?Nt(2960):gt(2960))},setMask:function(tt){q!==tt&&!R&&(s.stencilMask(tt),q=tt)},setFunc:function(tt,ut,At){(st!==tt||mt!==ut||bt!==At)&&(s.stencilFunc(tt,ut,At),st=tt,mt=ut,bt=At)},setOp:function(tt,ut,At){(at!==tt||Z!==ut||ft!==At)&&(s.stencilOp(tt,ut,At),at=tt,Z=ut,ft=At)},setLocked:function(tt){R=tt},setClear:function(tt){nt!==tt&&(s.clearStencil(tt),nt=tt)},reset:function(){R=!1,q=null,st=null,mt=null,bt=null,at=null,Z=null,ft=null,nt=null}}}const a=new n,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,p=[],d=null,_=!1,S=null,y=null,v=null,b=null,A=null,C=null,x=null,M=!1,L=null,B=null,et=null,F=null,D=null;const N=s.getParameter(35661);let X=!1,E=0;const k=s.getParameter(7938);k.indexOf("WebGL")!==-1?(E=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=E>=1):k.indexOf("OpenGL ES")!==-1&&(E=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=E>=2);let it=null,rt={};const G=s.getParameter(3088),H=s.getParameter(2978),K=new Oe().fromArray(G),j=new Oe().fromArray(H);function lt(R,q,st){const mt=new Uint8Array(4),bt=s.createTexture();s.bindTexture(R,bt),s.texParameteri(R,10241,9728),s.texParameteri(R,10240,9728);for(let at=0;at<st;at++)s.texImage2D(q+at,0,6408,1,1,0,6408,5121,mt);return bt}const $={};$[3553]=lt(3553,3553,1),$[34067]=lt(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Nt(2929),l.setFunc(ic),ee(!1),le(bh),Nt(2884),qt(Vn);function Nt(R){f[R]!==!0&&(s.enable(R),f[R]=!0)}function gt(R){f[R]!==!1&&(s.disable(R),f[R]=!1)}function Pt(R,q){return m[R]!==q?(s.bindFramebuffer(R,q),m[R]=q,i&&(R===36009&&(m[36160]=q),R===36160&&(m[36009]=q)),!0):!1}function ot(R,q){let st=p,mt=!1;if(R)if(st=g.get(q),st===void 0&&(st=[],g.set(q,st)),R.isWebGLMultipleRenderTargets){const bt=R.texture;if(st.length!==bt.length||st[0]!==36064){for(let at=0,Z=bt.length;at<Z;at++)st[at]=36064+at;st.length=bt.length,mt=!0}}else st[0]!==36064&&(st[0]=36064,mt=!0);else st[0]!==1029&&(st[0]=1029,mt=!0);mt&&(e.isWebGL2?s.drawBuffers(st):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(st))}function Dt(R){return d!==R?(s.useProgram(R),d=R,!0):!1}const wt={[$r]:32774,[Ip]:32778,[Op]:32779};if(i)wt[wh]=32775,wt[Th]=32776;else{const R=t.get("EXT_blend_minmax");R!==null&&(wt[wh]=R.MIN_EXT,wt[Th]=R.MAX_EXT)}const Lt={[Np]:0,[Fp]:1,[Bp]:768,[Af]:770,[Wp]:776,[Vp]:774,[kp]:772,[Up]:769,[Pf]:771,[Hp]:775,[Gp]:773};function qt(R,q,st,mt,bt,at,Z,ft){if(R===Vn){_===!0&&(gt(3042),_=!1);return}if(_===!1&&(Nt(3042),_=!0),R!==zp){if(R!==S||ft!==M){if((y!==$r||A!==$r)&&(s.blendEquation(32774),y=$r,A=$r),ft)switch(R){case ns:s.blendFuncSeparate(1,771,1,771);break;case ec:s.blendFunc(1,1);break;case Sh:s.blendFuncSeparate(0,769,0,1);break;case Mh:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ns:s.blendFuncSeparate(770,771,1,771);break;case ec:s.blendFunc(770,1);break;case Sh:s.blendFuncSeparate(0,769,0,1);break;case Mh:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}v=null,b=null,C=null,x=null,S=R,M=ft}return}bt=bt||q,at=at||st,Z=Z||mt,(q!==y||bt!==A)&&(s.blendEquationSeparate(wt[q],wt[bt]),y=q,A=bt),(st!==v||mt!==b||at!==C||Z!==x)&&(s.blendFuncSeparate(Lt[st],Lt[mt],Lt[at],Lt[Z]),v=st,b=mt,C=at,x=Z),S=R,M=!1}function V(R,q){R.side===Sn?gt(2884):Nt(2884);let st=R.side===Gi;q&&(st=!st),ee(st),R.blending===ns&&R.transparent===!1?qt(Vn):qt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const mt=R.stencilWrite;c.setTest(mt),mt&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Wt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Nt(32926):gt(32926)}function ee(R){L!==R&&(R?s.frontFace(2304):s.frontFace(2305),L=R)}function le(R){R!==Lp?(Nt(2884),R!==B&&(R===bh?s.cullFace(1029):R===Rp?s.cullFace(1028):s.cullFace(1032))):gt(2884),B=R}function Ft(R){R!==et&&(X&&s.lineWidth(R),et=R)}function Wt(R,q,st){R?(Nt(32823),(F!==q||D!==st)&&(s.polygonOffset(q,st),F=q,D=st)):gt(32823)}function Pe(R){R?Nt(3089):gt(3089)}function ie(R){R===void 0&&(R=33984+N-1),it!==R&&(s.activeTexture(R),it=R)}function P(R,q,st){st===void 0&&(it===null?st=33984+N-1:st=it);let mt=rt[st];mt===void 0&&(mt={type:void 0,texture:void 0},rt[st]=mt),(mt.type!==R||mt.texture!==q)&&(it!==st&&(s.activeTexture(st),it=st),s.bindTexture(R,q||$[R]),mt.type=R,mt.texture=q)}function w(){const R=rt[it];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function U(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ct(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function zt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ct(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function yt(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Et(R){K.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),K.copy(R))}function Tt(R){j.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),j.copy(R))}function _t(R,q){let st=u.get(q);st===void 0&&(st=new WeakMap,u.set(q,st));let mt=st.get(R);mt===void 0&&(mt=s.getUniformBlockIndex(q,R.name),st.set(R,mt))}function Zt(R,q){const mt=u.get(q).get(R);h.get(R)!==mt&&(s.uniformBlockBinding(q,mt,R.__bindingPointIndex),h.set(R,mt))}function Kt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),i===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},it=null,rt={},m={},g=new WeakMap,p=[],d=null,_=!1,S=null,y=null,v=null,b=null,A=null,C=null,x=null,M=!1,L=null,B=null,et=null,F=null,D=null,K.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Nt,disable:gt,bindFramebuffer:Pt,drawBuffers:ot,useProgram:Dt,setBlending:qt,setMaterial:V,setFlipSided:ee,setCullFace:le,setLineWidth:Ft,setPolygonOffset:Wt,setScissorTest:Pe,activeTexture:ie,bindTexture:P,unbindTexture:w,compressedTexImage2D:U,compressedTexImage3D:Q,texImage2D:St,texImage3D:yt,updateUBOMapping:_t,uniformBlockBinding:Zt,texStorage2D:J,texStorage3D:Ct,texSubImage2D:ct,texSubImage3D:dt,compressedTexSubImage2D:zt,compressedTexSubImage3D:ht,scissor:Et,viewport:Tt,reset:Kt}}function pv(s,t,e,i,n,r,o){const a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,w){return _?new OffscreenCanvas(P,w):oo("canvas")}function y(P,w,U,Q){let ct=1;if((P.width>Q||P.height>Q)&&(ct=Q/Math.max(P.width,P.height)),ct<1||w===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const dt=w?lc:Math.floor,zt=dt(ct*P.width),ht=dt(ct*P.height);p===void 0&&(p=S(zt,ht));const J=U?S(zt,ht):p;return J.width=zt,J.height=ht,J.getContext("2d").drawImage(P,0,0,zt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+zt+"x"+ht+")."),J}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function v(P){return Kh(P.width)&&Kh(P.height)}function b(P){return a?!1:P.wrapS!==ji||P.wrapT!==ji||P.minFilter!==hi&&P.minFilter!==Ii}function A(P,w){return P.generateMipmaps&&w&&P.minFilter!==hi&&P.minFilter!==Ii}function C(P){s.generateMipmap(P)}function x(P,w,U,Q,ct=!1){if(a===!1)return w;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let dt=w;return w===6403&&(U===5126&&(dt=33326),U===5131&&(dt=33325),U===5121&&(dt=33321)),w===33319&&(U===5126&&(dt=33328),U===5131&&(dt=33327),U===5121&&(dt=33323)),w===6408&&(U===5126&&(dt=34836),U===5131&&(dt=34842),U===5121&&(dt=Q===ue&&ct===!1?35907:32856),U===32819&&(dt=32854),U===32820&&(dt=32855)),(dt===33325||dt===33326||dt===33327||dt===33328||dt===34842||dt===34836)&&t.get("EXT_color_buffer_float"),dt}function M(P,w,U){return A(P,U)===!0||P.isFramebufferTexture&&P.minFilter!==hi&&P.minFilter!==Ii?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function L(P){return P===hi||P===Ch||P===Eh?9728:9729}function B(P){const w=P.target;w.removeEventListener("dispose",B),F(w),w.isVideoTexture&&g.delete(w)}function et(P){const w=P.target;w.removeEventListener("dispose",et),N(w)}function F(P){const w=i.get(P);if(w.__webglInit===void 0)return;const U=P.source,Q=d.get(U);if(Q){const ct=Q[w.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&D(P),Object.keys(Q).length===0&&d.delete(U)}i.remove(P)}function D(P){const w=i.get(P);s.deleteTexture(w.__webglTexture);const U=P.source,Q=d.get(U);delete Q[w.__cacheKey],o.memory.textures--}function N(P){const w=P.texture,U=i.get(P),Q=i.get(w);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++)s.deleteFramebuffer(U.__webglFramebuffer[ct]),U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[ct]);else{if(s.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ct=0;ct<U.__webglColorRenderbuffer.length;ct++)U.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[ct]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ct=0,dt=w.length;ct<dt;ct++){const zt=i.get(w[ct]);zt.__webglTexture&&(s.deleteTexture(zt.__webglTexture),o.memory.textures--),i.remove(w[ct])}i.remove(w),i.remove(P)}let X=0;function E(){X=0}function k(){const P=X;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),X+=1,P}function it(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.encoding),w.join()}function rt(P,w){const U=i.get(P);if(P.isVideoTexture&&Pe(P),P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(U,P,w);return}}e.bindTexture(3553,U.__webglTexture,33984+w)}function G(P,w){const U=i.get(P);if(P.version>0&&U.__version!==P.version){gt(U,P,w);return}e.bindTexture(35866,U.__webglTexture,33984+w)}function H(P,w){const U=i.get(P);if(P.version>0&&U.__version!==P.version){gt(U,P,w);return}e.bindTexture(32879,U.__webglTexture,33984+w)}function K(P,w){const U=i.get(P);if(P.version>0&&U.__version!==P.version){Pt(U,P,w);return}e.bindTexture(34067,U.__webglTexture,33984+w)}const j={[sc]:10497,[ji]:33071,[oc]:33648},lt={[hi]:9728,[Ch]:9984,[Eh]:9986,[Ii]:9729,[sm]:9985,[Va]:9987};function $(P,w,U){if(U?(s.texParameteri(P,10242,j[w.wrapS]),s.texParameteri(P,10243,j[w.wrapT]),(P===32879||P===35866)&&s.texParameteri(P,32882,j[w.wrapR]),s.texParameteri(P,10240,lt[w.magFilter]),s.texParameteri(P,10241,lt[w.minFilter])):(s.texParameteri(P,10242,33071),s.texParameteri(P,10243,33071),(P===32879||P===35866)&&s.texParameteri(P,32882,33071),(w.wrapS!==ji||w.wrapT!==ji)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,10240,L(w.magFilter)),s.texParameteri(P,10241,L(w.minFilter)),w.minFilter!==hi&&w.minFilter!==Ii&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(w.type===ur&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===ro&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(s.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Nt(P,w){let U=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",B));const Q=w.source;let ct=d.get(Q);ct===void 0&&(ct={},d.set(Q,ct));const dt=it(w);if(dt!==P.__cacheKey){ct[dt]===void 0&&(ct[dt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ct[dt].usedTimes++;const zt=ct[P.__cacheKey];zt!==void 0&&(ct[P.__cacheKey].usedTimes--,zt.usedTimes===0&&D(w)),P.__cacheKey=dt,P.__webglTexture=ct[dt].texture}return U}function gt(P,w,U){let Q=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=35866),w.isData3DTexture&&(Q=32879);const ct=Nt(P,w),dt=w.source;e.bindTexture(Q,P.__webglTexture,33984+U);const zt=i.get(dt);if(dt.version!==zt.__version||ct===!0){e.activeTexture(33984+U),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const ht=b(w)&&v(w.image)===!1;let J=y(w.image,ht,!1,h);J=ie(w,J);const Ct=v(J)||a,St=r.convert(w.format,w.encoding);let yt=r.convert(w.type),Et=x(w.internalFormat,St,yt,w.encoding,w.isVideoTexture);$(Q,w,Ct);let Tt;const _t=w.mipmaps,Zt=a&&w.isVideoTexture!==!0,Kt=zt.__version===void 0||ct===!0,R=M(w,J,Ct);if(w.isDepthTexture)Et=6402,a?w.type===ur?Et=36012:w.type===hr?Et=33190:w.type===rs?Et=35056:Et=33189:w.type===ur&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===pr&&Et===6402&&w.type!==Df&&w.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=hr,yt=r.convert(w.type)),w.format===ms&&Et===6402&&(Et=34041,w.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=rs,yt=r.convert(w.type))),Kt&&(Zt?e.texStorage2D(3553,1,Et,J.width,J.height):e.texImage2D(3553,0,Et,J.width,J.height,0,St,yt,null));else if(w.isDataTexture)if(_t.length>0&&Ct){Zt&&Kt&&e.texStorage2D(3553,R,Et,_t[0].width,_t[0].height);for(let q=0,st=_t.length;q<st;q++)Tt=_t[q],Zt?e.texSubImage2D(3553,q,0,0,Tt.width,Tt.height,St,yt,Tt.data):e.texImage2D(3553,q,Et,Tt.width,Tt.height,0,St,yt,Tt.data);w.generateMipmaps=!1}else Zt?(Kt&&e.texStorage2D(3553,R,Et,J.width,J.height),e.texSubImage2D(3553,0,0,0,J.width,J.height,St,yt,J.data)):e.texImage2D(3553,0,Et,J.width,J.height,0,St,yt,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Zt&&Kt&&e.texStorage3D(35866,R,Et,_t[0].width,_t[0].height,J.depth);for(let q=0,st=_t.length;q<st;q++)Tt=_t[q],w.format!==Ji?St!==null?Zt?e.compressedTexSubImage3D(35866,q,0,0,0,Tt.width,Tt.height,J.depth,St,Tt.data,0,0):e.compressedTexImage3D(35866,q,Et,Tt.width,Tt.height,J.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(35866,q,0,0,0,Tt.width,Tt.height,J.depth,St,yt,Tt.data):e.texImage3D(35866,q,Et,Tt.width,Tt.height,J.depth,0,St,yt,Tt.data)}else{Zt&&Kt&&e.texStorage2D(3553,R,Et,_t[0].width,_t[0].height);for(let q=0,st=_t.length;q<st;q++)Tt=_t[q],w.format!==Ji?St!==null?Zt?e.compressedTexSubImage2D(3553,q,0,0,Tt.width,Tt.height,St,Tt.data):e.compressedTexImage2D(3553,q,Et,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(3553,q,0,0,Tt.width,Tt.height,St,yt,Tt.data):e.texImage2D(3553,q,Et,Tt.width,Tt.height,0,St,yt,Tt.data)}else if(w.isDataArrayTexture)Zt?(Kt&&e.texStorage3D(35866,R,Et,J.width,J.height,J.depth),e.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,St,yt,J.data)):e.texImage3D(35866,0,Et,J.width,J.height,J.depth,0,St,yt,J.data);else if(w.isData3DTexture)Zt?(Kt&&e.texStorage3D(32879,R,Et,J.width,J.height,J.depth),e.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,St,yt,J.data)):e.texImage3D(32879,0,Et,J.width,J.height,J.depth,0,St,yt,J.data);else if(w.isFramebufferTexture){if(Kt)if(Zt)e.texStorage2D(3553,R,Et,J.width,J.height);else{let q=J.width,st=J.height;for(let mt=0;mt<R;mt++)e.texImage2D(3553,mt,Et,q,st,0,St,yt,null),q>>=1,st>>=1}}else if(_t.length>0&&Ct){Zt&&Kt&&e.texStorage2D(3553,R,Et,_t[0].width,_t[0].height);for(let q=0,st=_t.length;q<st;q++)Tt=_t[q],Zt?e.texSubImage2D(3553,q,0,0,St,yt,Tt):e.texImage2D(3553,q,Et,St,yt,Tt);w.generateMipmaps=!1}else Zt?(Kt&&e.texStorage2D(3553,R,Et,J.width,J.height),e.texSubImage2D(3553,0,0,0,St,yt,J)):e.texImage2D(3553,0,Et,St,yt,J);A(w,Ct)&&C(Q),zt.__version=dt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Pt(P,w,U){if(w.image.length!==6)return;const Q=Nt(P,w),ct=w.source;e.bindTexture(34067,P.__webglTexture,33984+U);const dt=i.get(ct);if(ct.version!==dt.__version||Q===!0){e.activeTexture(33984+U),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const zt=w.isCompressedTexture||w.image[0].isCompressedTexture,ht=w.image[0]&&w.image[0].isDataTexture,J=[];for(let q=0;q<6;q++)!zt&&!ht?J[q]=y(w.image[q],!1,!0,c):J[q]=ht?w.image[q].image:w.image[q],J[q]=ie(w,J[q]);const Ct=J[0],St=v(Ct)||a,yt=r.convert(w.format,w.encoding),Et=r.convert(w.type),Tt=x(w.internalFormat,yt,Et,w.encoding),_t=a&&w.isVideoTexture!==!0,Zt=dt.__version===void 0||Q===!0;let Kt=M(w,Ct,St);$(34067,w,St);let R;if(zt){_t&&Zt&&e.texStorage2D(34067,Kt,Tt,Ct.width,Ct.height);for(let q=0;q<6;q++){R=J[q].mipmaps;for(let st=0;st<R.length;st++){const mt=R[st];w.format!==Ji?yt!==null?_t?e.compressedTexSubImage2D(34069+q,st,0,0,mt.width,mt.height,yt,mt.data):e.compressedTexImage2D(34069+q,st,Tt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?e.texSubImage2D(34069+q,st,0,0,mt.width,mt.height,yt,Et,mt.data):e.texImage2D(34069+q,st,Tt,mt.width,mt.height,0,yt,Et,mt.data)}}}else{R=w.mipmaps,_t&&Zt&&(R.length>0&&Kt++,e.texStorage2D(34067,Kt,Tt,J[0].width,J[0].height));for(let q=0;q<6;q++)if(ht){_t?e.texSubImage2D(34069+q,0,0,0,J[q].width,J[q].height,yt,Et,J[q].data):e.texImage2D(34069+q,0,Tt,J[q].width,J[q].height,0,yt,Et,J[q].data);for(let st=0;st<R.length;st++){const bt=R[st].image[q].image;_t?e.texSubImage2D(34069+q,st+1,0,0,bt.width,bt.height,yt,Et,bt.data):e.texImage2D(34069+q,st+1,Tt,bt.width,bt.height,0,yt,Et,bt.data)}}else{_t?e.texSubImage2D(34069+q,0,0,0,yt,Et,J[q]):e.texImage2D(34069+q,0,Tt,yt,Et,J[q]);for(let st=0;st<R.length;st++){const mt=R[st];_t?e.texSubImage2D(34069+q,st+1,0,0,yt,Et,mt.image[q]):e.texImage2D(34069+q,st+1,Tt,yt,Et,mt.image[q])}}}A(w,St)&&C(34067),dt.__version=ct.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ot(P,w,U,Q,ct){const dt=r.convert(U.format,U.encoding),zt=r.convert(U.type),ht=x(U.internalFormat,dt,zt,U.encoding);i.get(w).__hasExternalTextures||(ct===32879||ct===35866?e.texImage3D(ct,0,ht,w.width,w.height,w.depth,0,dt,zt,null):e.texImage2D(ct,0,ht,w.width,w.height,0,dt,zt,null)),e.bindFramebuffer(36160,P),Wt(w)?f.framebufferTexture2DMultisampleEXT(36160,Q,ct,i.get(U).__webglTexture,0,Ft(w)):(ct===3553||ct>=34069&&ct<=34074)&&s.framebufferTexture2D(36160,Q,ct,i.get(U).__webglTexture,0),e.bindFramebuffer(36160,null)}function Dt(P,w,U){if(s.bindRenderbuffer(36161,P),w.depthBuffer&&!w.stencilBuffer){let Q=33189;if(U||Wt(w)){const ct=w.depthTexture;ct&&ct.isDepthTexture&&(ct.type===ur?Q=36012:ct.type===hr&&(Q=33190));const dt=Ft(w);Wt(w)?f.renderbufferStorageMultisampleEXT(36161,dt,Q,w.width,w.height):s.renderbufferStorageMultisample(36161,dt,Q,w.width,w.height)}else s.renderbufferStorage(36161,Q,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,P)}else if(w.depthBuffer&&w.stencilBuffer){const Q=Ft(w);U&&Wt(w)===!1?s.renderbufferStorageMultisample(36161,Q,35056,w.width,w.height):Wt(w)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,w.width,w.height):s.renderbufferStorage(36161,34041,w.width,w.height),s.framebufferRenderbuffer(36160,33306,36161,P)}else{const Q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ct=0;ct<Q.length;ct++){const dt=Q[ct],zt=r.convert(dt.format,dt.encoding),ht=r.convert(dt.type),J=x(dt.internalFormat,zt,ht,dt.encoding),Ct=Ft(w);U&&Wt(w)===!1?s.renderbufferStorageMultisample(36161,Ct,J,w.width,w.height):Wt(w)?f.renderbufferStorageMultisampleEXT(36161,Ct,J,w.width,w.height):s.renderbufferStorage(36161,J,w.width,w.height)}}s.bindRenderbuffer(36161,null)}function wt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),rt(w.depthTexture,0);const Q=i.get(w.depthTexture).__webglTexture,ct=Ft(w);if(w.depthTexture.format===pr)Wt(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ct):s.framebufferTexture2D(36160,36096,3553,Q,0);else if(w.depthTexture.format===ms)Wt(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ct):s.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function Lt(P){const w=i.get(P),U=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");wt(w.__webglFramebuffer,P)}else if(U){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(36160,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=s.createRenderbuffer(),Dt(w.__webglDepthbuffer[Q],P,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),Dt(w.__webglDepthbuffer,P,!1);e.bindFramebuffer(36160,null)}function qt(P,w,U){const Q=i.get(P);w!==void 0&&ot(Q.__webglFramebuffer,P,P.texture,36064,3553),U!==void 0&&Lt(P)}function V(P){const w=P.texture,U=i.get(P),Q=i.get(w);P.addEventListener("dispose",et),P.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=w.version,o.memory.textures++);const ct=P.isWebGLCubeRenderTarget===!0,dt=P.isWebGLMultipleRenderTargets===!0,zt=v(P)||a;if(ct){U.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)U.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(U.__webglFramebuffer=s.createFramebuffer(),dt)if(n.drawBuffers){const ht=P.texture;for(let J=0,Ct=ht.length;J<Ct;J++){const St=i.get(ht[J]);St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Wt(P)===!1){const ht=dt?w:[w];U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let J=0;J<ht.length;J++){const Ct=ht[J];U.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(36161,U.__webglColorRenderbuffer[J]);const St=r.convert(Ct.format,Ct.encoding),yt=r.convert(Ct.type),Et=x(Ct.internalFormat,St,yt,Ct.encoding,P.isXRRenderTarget===!0),Tt=Ft(P);s.renderbufferStorageMultisample(36161,Tt,Et,P.width,P.height),s.framebufferRenderbuffer(36160,36064+J,36161,U.__webglColorRenderbuffer[J])}s.bindRenderbuffer(36161,null),P.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Dt(U.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(36160,null)}}if(ct){e.bindTexture(34067,Q.__webglTexture),$(34067,w,zt);for(let ht=0;ht<6;ht++)ot(U.__webglFramebuffer[ht],P,w,36064,34069+ht);A(w,zt)&&C(34067),e.unbindTexture()}else if(dt){const ht=P.texture;for(let J=0,Ct=ht.length;J<Ct;J++){const St=ht[J],yt=i.get(St);e.bindTexture(3553,yt.__webglTexture),$(3553,St,zt),ot(U.__webglFramebuffer,P,St,36064+J,3553),A(St,zt)&&C(3553)}e.unbindTexture()}else{let ht=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ht=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,Q.__webglTexture),$(ht,w,zt),ot(U.__webglFramebuffer,P,w,36064,ht),A(w,zt)&&C(ht),e.unbindTexture()}P.depthBuffer&&Lt(P)}function ee(P){const w=v(P)||a,U=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let Q=0,ct=U.length;Q<ct;Q++){const dt=U[Q];if(A(dt,w)){const zt=P.isWebGLCubeRenderTarget?34067:3553,ht=i.get(dt).__webglTexture;e.bindTexture(zt,ht),C(zt),e.unbindTexture()}}}function le(P){if(a&&P.samples>0&&Wt(P)===!1){const w=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],U=P.width,Q=P.height;let ct=16384;const dt=[],zt=P.stencilBuffer?33306:36096,ht=i.get(P),J=P.isWebGLMultipleRenderTargets===!0;if(J)for(let Ct=0;Ct<w.length;Ct++)e.bindFramebuffer(36160,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Ct,36161,null),e.bindFramebuffer(36160,ht.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Ct,3553,null,0);e.bindFramebuffer(36008,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,ht.__webglFramebuffer);for(let Ct=0;Ct<w.length;Ct++){dt.push(36064+Ct),P.depthBuffer&&dt.push(zt);const St=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(St===!1&&(P.depthBuffer&&(ct|=256),P.stencilBuffer&&(ct|=1024)),J&&s.framebufferRenderbuffer(36008,36064,36161,ht.__webglColorRenderbuffer[Ct]),St===!0&&(s.invalidateFramebuffer(36008,[zt]),s.invalidateFramebuffer(36009,[zt])),J){const yt=i.get(w[Ct]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,yt,0)}s.blitFramebuffer(0,0,U,Q,0,0,U,Q,ct,9728),m&&s.invalidateFramebuffer(36008,dt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),J)for(let Ct=0;Ct<w.length;Ct++){e.bindFramebuffer(36160,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Ct,36161,ht.__webglColorRenderbuffer[Ct]);const St=i.get(w[Ct]).__webglTexture;e.bindFramebuffer(36160,ht.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Ct,3553,St,0)}e.bindFramebuffer(36009,ht.__webglMultisampledFramebuffer)}}function Ft(P){return Math.min(u,P.samples)}function Wt(P){const w=i.get(P);return a&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pe(P){const w=o.render.frame;g.get(P)!==w&&(g.set(P,w),P.update())}function ie(P,w){const U=P.encoding,Q=P.format,ct=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===ac||U!==wr&&(U===ue?a===!1?t.has("EXT_sRGB")===!0&&Q===Ji?(P.format=ac,P.minFilter=Ii,P.generateMipmaps=!1):w=Nf.sRGBToLinear(w):(Q!==Ji||ct!==Mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),w}this.allocateTextureUnit=k,this.resetTextureUnits=E,this.setTexture2D=rt,this.setTexture2DArray=G,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=qt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Wt}function mv(s,t,e){const i=e.isWebGL2;function n(r,o=null){let a;if(r===Mr)return 5121;if(r===cm)return 32819;if(r===hm)return 32820;if(r===om)return 5120;if(r===am)return 5122;if(r===Df)return 5123;if(r===lm)return 5124;if(r===hr)return 5125;if(r===ur)return 5126;if(r===ro)return i?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===um)return 6406;if(r===Ji)return 6408;if(r===dm)return 6409;if(r===pm)return 6410;if(r===pr)return 6402;if(r===ms)return 34041;if(r===fm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ac)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===mm)return 6403;if(r===gm)return 36244;if(r===_m)return 33319;if(r===xm)return 33320;if(r===vm)return 36249;if(r===il||r===nl||r===rl||r===sl)if(o===ue)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===il)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===rl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===il)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===rl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===sl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ah||r===Ph||r===Lh||r===Rh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ah)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ph)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ym)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Dh||r===zh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Dh)return o===ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===zh)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ih||r===Oh||r===Nh||r===Fh||r===Bh||r===Uh||r===kh||r===Gh||r===Vh||r===Hh||r===Wh||r===Xh||r===qh||r===Yh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ih)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Oh)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nh)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fh)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bh)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uh)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===kh)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gh)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vh)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hh)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wh)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xh)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qh)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yh)return o===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$h)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===$h)return o===ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===rs?i?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}class gv extends Oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xe extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _v={type:"move"};class zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const p of t.hand.values()){const d=e.getJointPose(p,i),_=this._getHandJoint(c,p);d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class xv extends fi{constructor(t,e,i,n,r,o,a,l,c,h){if(h=h!==void 0?h:pr,h!==pr&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===pr&&(i=hr),i===void 0&&h===ms&&(i=rs),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hi,this.minFilter=l!==void 0?l:hi,this.flipY=!1,this.generateMipmaps=!1}}class vv extends ws{constructor(t,e){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,f=null,m=null;const g=e.getContextAttributes();let p=null,d=null;const _=[],S=[],y=new Set,v=new Map,b=new Oi;b.layers.enable(1),b.viewport=new Oe;const A=new Oi;A.layers.enable(2),A.viewport=new Oe;const C=[b,A],x=new gv;x.layers.enable(1),x.layers.enable(2);let M=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let H=_[G];return H===void 0&&(H=new zl,_[G]=H),H.getTargetRaySpace()},this.getControllerGrip=function(G){let H=_[G];return H===void 0&&(H=new zl,_[G]=H),H.getGripSpace()},this.getHand=function(G){let H=_[G];return H===void 0&&(H=new zl,_[G]=H),H.getHandSpace()};function B(G){const H=S.indexOf(G.inputSource);if(H===-1)return;const K=_[H];K!==void 0&&K.dispatchEvent({type:G.type,data:G.inputSource})}function et(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",et),n.removeEventListener("inputsourceschange",F);for(let G=0;G<_.length;G++){const H=S[G];H!==null&&(S[G]=null,_[G].disconnect(H))}M=null,L=null,t.setRenderTarget(p),f=null,u=null,h=null,n=null,d=null,rt.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",et),n.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await e.makeXRCompatible(),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const H={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,H),n.updateRenderState({baseLayer:f}),d=new Ki(f.framebufferWidth,f.framebufferHeight,{format:Ji,type:Mr,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let H=null,K=null,j=null;g.depth&&(j=g.stencil?35056:33190,H=g.stencil?ms:pr,K=g.stencil?rs:hr);const lt={colorFormat:32856,depthFormat:j,scaleFactor:r};h=new XRWebGLBinding(n,e),u=h.createProjectionLayer(lt),n.updateRenderState({layers:[u]}),d=new Ki(u.textureWidth,u.textureHeight,{format:Ji,type:Mr,depthTexture:new xv(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const $=t.properties.get(d);$.__ignoreDepthValues=u.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await n.requestReferenceSpace(a),rt.setContext(n),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(G){for(let H=0;H<G.removed.length;H++){const K=G.removed[H],j=S.indexOf(K);j>=0&&(S[j]=null,_[j].disconnect(K))}for(let H=0;H<G.added.length;H++){const K=G.added[H];let j=S.indexOf(K);if(j===-1){for(let $=0;$<_.length;$++)if($>=S.length){S.push(K),j=$;break}else if(S[$]===null){S[$]=K,j=$;break}if(j===-1)break}const lt=_[j];lt&&lt.connect(K)}}const D=new I,N=new I;function X(G,H,K){D.setFromMatrixPosition(H.matrixWorld),N.setFromMatrixPosition(K.matrixWorld);const j=D.distanceTo(N),lt=H.projectionMatrix.elements,$=K.projectionMatrix.elements,Nt=lt[14]/(lt[10]-1),gt=lt[14]/(lt[10]+1),Pt=(lt[9]+1)/lt[5],ot=(lt[9]-1)/lt[5],Dt=(lt[8]-1)/lt[0],wt=($[8]+1)/$[0],Lt=Nt*Dt,qt=Nt*wt,V=j/(-Dt+wt),ee=V*-Dt;H.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ee),G.translateZ(V),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const le=Nt+V,Ft=gt+V,Wt=Lt-ee,Pe=qt+(j-ee),ie=Pt*gt/Ft*le,P=ot*gt/Ft*le;G.projectionMatrix.makePerspective(Wt,Pe,ie,P,le,Ft)}function E(G,H){H===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(H.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;x.near=A.near=b.near=G.near,x.far=A.far=b.far=G.far,(M!==x.near||L!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),M=x.near,L=x.far);const H=G.parent,K=x.cameras;E(x,H);for(let lt=0;lt<K.length;lt++)E(K[lt],H);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),G.matrix.copy(x.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const j=G.children;for(let lt=0,$=j.length;lt<$;lt++)j[lt].updateMatrixWorld(!0);K.length===2?X(x,b,A):x.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(G){u!==null&&(u.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.getPlanes=function(){return y};let k=null;function it(G,H){if(c=H.getViewerPose(l||o),m=H,c!==null){const K=c.views;f!==null&&(t.setRenderTargetFramebuffer(d,f.framebuffer),t.setRenderTarget(d));let j=!1;K.length!==x.cameras.length&&(x.cameras.length=0,j=!0);for(let lt=0;lt<K.length;lt++){const $=K[lt];let Nt=null;if(f!==null)Nt=f.getViewport($);else{const Pt=h.getViewSubImage(u,$);Nt=Pt.viewport,lt===0&&(t.setRenderTargetTextures(d,Pt.colorTexture,u.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(d))}let gt=C[lt];gt===void 0&&(gt=new Oi,gt.layers.enable(lt),gt.viewport=new Oe,C[lt]=gt),gt.matrix.fromArray($.transform.matrix),gt.projectionMatrix.fromArray($.projectionMatrix),gt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),lt===0&&x.matrix.copy(gt.matrix),j===!0&&x.cameras.push(gt)}}for(let K=0;K<_.length;K++){const j=S[K],lt=_[K];j!==null&&lt!==void 0&&lt.update(j,H,l||o)}if(k&&k(G,H),H.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:H.detectedPlanes});let K=null;for(const j of y)H.detectedPlanes.has(j)||(K===null&&(K=[]),K.push(j));if(K!==null)for(const j of K)y.delete(j),v.delete(j),i.dispatchEvent({type:"planeremoved",data:j});for(const j of H.detectedPlanes)if(!y.has(j))y.add(j),v.set(j,H.lastChangedTime),i.dispatchEvent({type:"planeadded",data:j});else{const lt=v.get(j);j.lastChangedTime>lt&&(v.set(j,j.lastChangedTime),i.dispatchEvent({type:"planechanged",data:j}))}}m=null}const rt=new Wf;rt.setAnimationLoop(it),this.setAnimationLoop=function(G){k=G},this.dispose=function(){}}}function yv(s,t){function e(p,d){d.color.getRGB(p.fogColor.value,Gf(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,_,S,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?n(p,d):d.isMeshToonMaterial?(n(p,d),h(p,d)):d.isMeshPhongMaterial?(n(p,d),c(p,d)):d.isMeshStandardMaterial?(n(p,d),u(p,d),d.isMeshPhysicalMaterial&&f(p,d,y)):d.isMeshMatcapMaterial?(n(p,d),m(p,d)):d.isMeshDepthMaterial?n(p,d):d.isMeshDistanceMaterial?(n(p,d),g(p,d)):d.isMeshNormalMaterial?n(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,_,S):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Gi&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Gi&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=t.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const v=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let y;d.aoMap?y=d.aoMap:d.lightMap&&(y=d.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,_,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Gi&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function bv(s,t,e,i){let n={},r={},o=[];const a=e.isWebGL2?s.getParameter(35375):0;function l(S,y){const v=y.program;i.uniformBlockBinding(S,v)}function c(S,y){let v=n[S.id];v===void 0&&(g(S),v=h(S),n[S.id]=v,S.addEventListener("dispose",d));const b=y.program;i.updateUBOMapping(S,b);const A=t.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function h(S){const y=u();S.__bindingPointIndex=y;const v=s.createBuffer(),b=S.__size,A=S.usage;return s.bindBuffer(35345,v),s.bufferData(35345,b,A),s.bindBuffer(35345,null),s.bindBufferBase(35345,y,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=n[S.id],v=S.uniforms,b=S.__cache;s.bindBuffer(35345,y);for(let A=0,C=v.length;A<C;A++){const x=v[A];if(m(x,A,b)===!0){const M=x.value,L=x.__offset;typeof M=="number"?(x.__data[0]=M,s.bufferSubData(35345,L,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):M.toArray(x.__data),s.bufferSubData(35345,L,x.__data))}}s.bindBuffer(35345,null)}function m(S,y,v){const b=S.value;if(v[y]===void 0)return typeof b=="number"?v[y]=b:v[y]=b.clone(),!0;if(typeof b=="number"){if(v[y]!==b)return v[y]=b,!0}else{const A=v[y];if(A.equals(b)===!1)return A.copy(b),!0}return!1}function g(S){const y=S.uniforms;let v=0;const b=16;let A=0;for(let C=0,x=y.length;C<x;C++){const M=y[C],L=p(M);if(M.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,C>0){A=v%b;const B=b-A;A!==0&&B-L.boundary<0&&(v+=b-A,M.__offset=v)}v+=L.storage}return A=v%b,A>0&&(v+=b-A),S.__size=v,S.__cache={},this}function p(S){const y=S.value,v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function d(S){const y=S.target;y.removeEventListener("dispose",d);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(n[y.id]),delete n[y.id],delete r[y.id]}function _(){for(const S in n)s.deleteBuffer(n[S]);o=[],n={},r={}}return{bind:l,update:c,dispose:_}}function Sv(){const s=oo("canvas");return s.style.display="block",s}function Zf(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:Sv(),e=s.context!==void 0?s.context:null,i=s.depth!==void 0?s.depth:!0,n=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let u=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=wr,this.physicallyCorrectLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const p=this;let d=!1,_=0,S=0,y=null,v=-1,b=null;const A=new Oe,C=new Oe;let x=null,M=t.width,L=t.height,B=1,et=null,F=null;const D=new Oe(0,0,M,L),N=new Oe(0,0,M,L);let X=!1;const E=new Gc;let k=!1,it=!1,rt=null;const G=new ye,H=new vt,K=new I,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return y===null?B:1}let $=e;function Nt(T,z){for(let Y=0;Y<T.length;Y++){const O=T[Y],W=t.getContext(O,z);if(W!==null)return W}return null}try{const T={alpha:!0,depth:i,stencil:n,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uc}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",_t,!1),$===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),$=Nt(z,T),$===null)throw Nt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let gt,Pt,ot,Dt,wt,Lt,qt,V,ee,le,Ft,Wt,Pe,ie,P,w,U,Q,ct,dt,zt,ht,J,Ct;function St(){gt=new z_($),Pt=new E_($,gt,s),gt.init(Pt),ht=new mv($,gt,Pt),ot=new dv($,gt,Pt),Dt=new N_,wt=new Qx,Lt=new pv($,gt,ot,wt,Pt,ht,Dt),qt=new P_(p),V=new D_(p),ee=new Xm($,Pt),J=new T_($,gt,ee,Pt),le=new I_($,ee,Dt,J),Ft=new k_($,le,ee,Dt),ct=new U_($,Pt,Lt),w=new A_(wt),Wt=new Kx(p,qt,V,gt,Pt,J,w),Pe=new yv(p,wt),ie=new ev,P=new av(gt,Pt),Q=new w_(p,qt,V,ot,Ft,h,o),U=new fv(p,Ft,Pt),Ct=new bv($,Dt,Pt,ot),dt=new C_($,gt,Dt,Pt),zt=new O_($,gt,Dt,Pt),Dt.programs=Wt.programs,p.capabilities=Pt,p.extensions=gt,p.properties=wt,p.renderLists=ie,p.shadowMap=U,p.state=ot,p.info=Dt}St();const yt=new vv(p,$);this.xr=yt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const T=gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(M,L,!1))},this.getSize=function(T){return T.set(M,L)},this.setSize=function(T,z,Y){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=T,L=z,t.width=Math.floor(T*B),t.height=Math.floor(z*B),Y!==!1&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(M*B,L*B).floor()},this.setDrawingBufferSize=function(T,z,Y){M=T,L=z,B=Y,t.width=Math.floor(T*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,z,Y,O){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,z,Y,O),ot.viewport(A.copy(D).multiplyScalar(B).floor())},this.getScissor=function(T){return T.copy(N)},this.setScissor=function(T,z,Y,O){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,z,Y,O),ot.scissor(C.copy(N).multiplyScalar(B).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(T){ot.setScissorTest(X=T)},this.setOpaqueSort=function(T){et=T},this.setTransparentSort=function(T){F=T},this.getClearColor=function(T){return T.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(T=!0,z=!0,Y=!0){let O=0;T&&(O|=16384),z&&(O|=256),Y&&(O|=1024),$.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),ie.dispose(),P.dispose(),wt.dispose(),qt.dispose(),V.dispose(),Ft.dispose(),J.dispose(),Ct.dispose(),Wt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",mt),yt.removeEventListener("sessionend",bt),rt&&(rt.dispose(),rt=null),at.stop()};function Et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=Dt.autoReset,z=U.enabled,Y=U.autoUpdate,O=U.needsUpdate,W=U.type;St(),Dt.autoReset=T,U.enabled=z,U.autoUpdate=Y,U.needsUpdate=O,U.type=W}function _t(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Zt(T){const z=T.target;z.removeEventListener("dispose",Zt),Kt(z)}function Kt(T){R(T),wt.remove(T)}function R(T){const z=wt.get(T).programs;z!==void 0&&(z.forEach(function(Y){Wt.releaseProgram(Y)}),T.isShaderMaterial&&Wt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Y,O,W,xt){z===null&&(z=j);const Rt=W.isMesh&&W.matrixWorld.determinant()<0,kt=ne(T,z,Y,O,W);ot.setMaterial(O,Rt);let Gt=Y.index,Ot=1;O.wireframe===!0&&(Gt=le.getWireframeAttribute(Y),Ot=2);const It=Y.drawRange,Ut=Y.attributes.position;let ce=It.start*Ot,Ve=(It.start+It.count)*Ot;xt!==null&&(ce=Math.max(ce,xt.start*Ot),Ve=Math.min(Ve,(xt.start+xt.count)*Ot)),Gt!==null?(ce=Math.max(ce,0),Ve=Math.min(Ve,Gt.count)):Ut!=null&&(ce=Math.max(ce,0),Ve=Math.min(Ve,Ut.count));const Ze=Ve-ce;if(Ze<0||Ze===1/0)return;J.setup(W,O,kt,Y,Gt);let Le,ae=dt;if(Gt!==null&&(Le=ee.get(Gt),ae=zt,ae.setIndex(Le)),W.isMesh)O.wireframe===!0?(ot.setLineWidth(O.wireframeLinewidth*lt()),ae.setMode(1)):ae.setMode(4);else if(W.isLine){let Vt=O.linewidth;Vt===void 0&&(Vt=1),ot.setLineWidth(Vt*lt()),W.isLineSegments?ae.setMode(1):W.isLineLoop?ae.setMode(2):ae.setMode(3)}else W.isPoints?ae.setMode(0):W.isSprite&&ae.setMode(4);if(W.isInstancedMesh)ae.renderInstances(ce,Ze,W.count);else if(Y.isInstancedBufferGeometry){const Vt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,fn=Math.min(Y.instanceCount,Vt);ae.renderInstances(ce,Ze,fn)}else ae.render(ce,Ze)},this.compile=function(T,z){function Y(O,W,xt){O.transparent===!0&&O.side===Sn?(O.side=Gi,O.needsUpdate=!0,At(O,W,xt),O.side=fs,O.needsUpdate=!0,At(O,W,xt),O.side=Sn):At(O,W,xt)}f=P.get(T),f.init(),g.push(f),T.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(p.physicallyCorrectLights),T.traverse(function(O){const W=O.material;if(W)if(Array.isArray(W))for(let xt=0;xt<W.length;xt++){const Rt=W[xt];Y(Rt,T,O)}else Y(W,T,O)}),g.pop(),f=null};let q=null;function st(T){q&&q(T)}function mt(){at.stop()}function bt(){at.start()}const at=new Wf;at.setAnimationLoop(st),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(T){q=T,yt.setAnimationLoop(T),T===null?at.stop():at.start()},yt.addEventListener("sessionstart",mt),yt.addEventListener("sessionend",bt),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(z),z=yt.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,z,y),f=P.get(T,g.length),f.init(),g.push(f),G.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),E.setFromProjectionMatrix(G),it=this.localClippingEnabled,k=w.init(this.clippingPlanes,it,z),u=ie.get(T,m.length),u.init(),m.push(u),Z(T,z,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(et,F),k===!0&&w.beginShadows();const Y=f.state.shadowsArray;if(U.render(Y,T,z),k===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(u,T),f.setupLights(p.physicallyCorrectLights),z.isArrayCamera){const O=z.cameras;for(let W=0,xt=O.length;W<xt;W++){const Rt=O[W];ft(u,T,Rt,Rt.viewport)}}else ft(u,T,z);y!==null&&(Lt.updateMultisampleRenderTarget(y),Lt.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(p,T,z),J.resetDefaultState(),v=-1,b=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function Z(T,z,Y,O){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||E.intersectsSprite(T)){O&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(G);const Rt=Ft.update(T),kt=T.material;kt.visible&&u.push(T,Rt,kt,Y,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Dt.render.frame&&(T.skeleton.update(),T.skeleton.frame=Dt.render.frame),!T.frustumCulled||E.intersectsObject(T))){O&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(G);const Rt=Ft.update(T),kt=T.material;if(Array.isArray(kt)){const Gt=Rt.groups;for(let Ot=0,It=Gt.length;Ot<It;Ot++){const Ut=Gt[Ot],ce=kt[Ut.materialIndex];ce&&ce.visible&&u.push(T,Rt,ce,Y,K.z,Ut)}}else kt.visible&&u.push(T,Rt,kt,Y,K.z,null)}}const xt=T.children;for(let Rt=0,kt=xt.length;Rt<kt;Rt++)Z(xt[Rt],z,Y,O)}function ft(T,z,Y,O){const W=T.opaque,xt=T.transmissive,Rt=T.transparent;f.setupLightsView(Y),xt.length>0&&nt(W,z,Y),O&&ot.viewport(A.copy(O)),W.length>0&&tt(W,z,Y),xt.length>0&&tt(xt,z,Y),Rt.length>0&&tt(Rt,z,Y),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function nt(T,z,Y){const O=Pt.isWebGL2;rt===null&&(rt=new Ki(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")?ro:Mr,minFilter:Va,samples:O&&r===!0?4:0})),p.getDrawingBufferSize(H),O?rt.setSize(H.x,H.y):rt.setSize(lc(H.x),lc(H.y));const W=p.getRenderTarget();p.setRenderTarget(rt),p.clear();const xt=p.toneMapping;p.toneMapping=Tn,tt(T,z,Y),p.toneMapping=xt,Lt.updateMultisampleRenderTarget(rt),Lt.updateRenderTargetMipmap(rt),p.setRenderTarget(W)}function tt(T,z,Y){const O=z.isScene===!0?z.overrideMaterial:null;for(let W=0,xt=T.length;W<xt;W++){const Rt=T[W],kt=Rt.object,Gt=Rt.geometry,Ot=O===null?Rt.material:O,It=Rt.group;kt.layers.test(Y.layers)&&ut(kt,z,Y,Gt,Ot,It)}}function ut(T,z,Y,O,W,xt){T.onBeforeRender(p,z,Y,O,W,xt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(p,z,Y,O,T,xt),W.transparent===!0&&W.side===Sn?(W.side=Gi,W.needsUpdate=!0,p.renderBufferDirect(Y,z,O,W,T,xt),W.side=fs,W.needsUpdate=!0,p.renderBufferDirect(Y,z,O,W,T,xt),W.side=Sn):p.renderBufferDirect(Y,z,O,W,T,xt),T.onAfterRender(p,z,Y,O,W,xt)}function At(T,z,Y){z.isScene!==!0&&(z=j);const O=wt.get(T),W=f.state.lights,xt=f.state.shadowsArray,Rt=W.state.version,kt=Wt.getParameters(T,W.state,xt,z,Y),Gt=Wt.getProgramCacheKey(kt);let Ot=O.programs;O.environment=T.isMeshStandardMaterial?z.environment:null,O.fog=z.fog,O.envMap=(T.isMeshStandardMaterial?V:qt).get(T.envMap||O.environment),Ot===void 0&&(T.addEventListener("dispose",Zt),Ot=new Map,O.programs=Ot);let It=Ot.get(Gt);if(It!==void 0){if(O.currentProgram===It&&O.lightsStateVersion===Rt)return Qt(T,kt),It}else kt.uniforms=Wt.getUniforms(T),T.onBuild(Y,kt,p),T.onBeforeCompile(kt,p),It=Wt.acquireProgram(kt,Gt),Ot.set(Gt,It),O.uniforms=kt.uniforms;const Ut=O.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=w.uniform),Qt(T,kt),O.needsLights=te(T),O.lightsStateVersion=Rt,O.needsLights&&(Ut.ambientLightColor.value=W.state.ambient,Ut.lightProbe.value=W.state.probe,Ut.directionalLights.value=W.state.directional,Ut.directionalLightShadows.value=W.state.directionalShadow,Ut.spotLights.value=W.state.spot,Ut.spotLightShadows.value=W.state.spotShadow,Ut.rectAreaLights.value=W.state.rectArea,Ut.ltc_1.value=W.state.rectAreaLTC1,Ut.ltc_2.value=W.state.rectAreaLTC2,Ut.pointLights.value=W.state.point,Ut.pointLightShadows.value=W.state.pointShadow,Ut.hemisphereLights.value=W.state.hemi,Ut.directionalShadowMap.value=W.state.directionalShadowMap,Ut.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ut.spotShadowMap.value=W.state.spotShadowMap,Ut.spotLightMatrix.value=W.state.spotLightMatrix,Ut.spotLightMap.value=W.state.spotLightMap,Ut.pointShadowMap.value=W.state.pointShadowMap,Ut.pointShadowMatrix.value=W.state.pointShadowMatrix);const ce=It.getUniforms(),Ve=da.seqWithValue(ce.seq,Ut);return O.currentProgram=It,O.uniformsList=Ve,It}function Qt(T,z){const Y=wt.get(T);Y.outputEncoding=z.outputEncoding,Y.instancing=z.instancing,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function ne(T,z,Y,O,W){z.isScene!==!0&&(z=j),Lt.resetTextureUnits();const xt=z.fog,Rt=O.isMeshStandardMaterial?z.environment:null,kt=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:wr,Gt=(O.isMeshStandardMaterial?V:qt).get(O.envMap||Rt),Ot=O.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,It=!!O.normalMap&&!!Y.attributes.tangent,Ut=!!Y.morphAttributes.position,ce=!!Y.morphAttributes.normal,Ve=!!Y.morphAttributes.color,Ze=O.toneMapped?p.toneMapping:Tn,Le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ae=Le!==void 0?Le.length:0,Vt=wt.get(O),fn=f.state.lights;if(k===!0&&(it===!0||T!==b)){const _i=T===b&&O.id===v;w.setState(O,T,_i)}let Re=!1;O.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==fn.state.version||Vt.outputEncoding!==kt||W.isInstancedMesh&&Vt.instancing===!1||!W.isInstancedMesh&&Vt.instancing===!0||W.isSkinnedMesh&&Vt.skinning===!1||!W.isSkinnedMesh&&Vt.skinning===!0||Vt.envMap!==Gt||O.fog===!0&&Vt.fog!==xt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==w.numPlanes||Vt.numIntersection!==w.numIntersection)||Vt.vertexAlphas!==Ot||Vt.vertexTangents!==It||Vt.morphTargets!==Ut||Vt.morphNormals!==ce||Vt.morphColors!==Ve||Vt.toneMapping!==Ze||Pt.isWebGL2===!0&&Vt.morphTargetsCount!==ae)&&(Re=!0):(Re=!0,Vt.__version=O.version);let jn=Vt.currentProgram;Re===!0&&(jn=At(O,z,W));let vh=!1,As=!1,Qa=!1;const je=jn.getUniforms(),Jn=Vt.uniforms;if(ot.useProgram(jn.program)&&(vh=!0,As=!0,Qa=!0),O.id!==v&&(v=O.id,As=!0),vh||b!==T){if(je.setValue($,"projectionMatrix",T.projectionMatrix),Pt.logarithmicDepthBuffer&&je.setValue($,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,As=!0,Qa=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const _i=je.map.cameraPosition;_i!==void 0&&_i.setValue($,K.setFromMatrixPosition(T.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&je.setValue($,"isOrthographic",T.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||W.isSkinnedMesh)&&je.setValue($,"viewMatrix",T.matrixWorldInverse)}if(W.isSkinnedMesh){je.setOptional($,W,"bindMatrix"),je.setOptional($,W,"bindMatrixInverse");const _i=W.skeleton;_i&&(Pt.floatVertexTextures?(_i.boneTexture===null&&_i.computeBoneTexture(),je.setValue($,"boneTexture",_i.boneTexture,Lt),je.setValue($,"boneTextureSize",_i.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const tl=Y.morphAttributes;if((tl.position!==void 0||tl.normal!==void 0||tl.color!==void 0&&Pt.isWebGL2===!0)&&ct.update(W,Y,O,jn),(As||Vt.receiveShadow!==W.receiveShadow)&&(Vt.receiveShadow=W.receiveShadow,je.setValue($,"receiveShadow",W.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Jn.envMap.value=Gt,Jn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),As&&(je.setValue($,"toneMappingExposure",p.toneMappingExposure),Vt.needsLights&&re(Jn,Qa),xt&&O.fog===!0&&Pe.refreshFogUniforms(Jn,xt),Pe.refreshMaterialUniforms(Jn,O,B,L,rt),da.upload($,Vt.uniformsList,Jn,Lt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(da.upload($,Vt.uniformsList,Jn,Lt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&je.setValue($,"center",W.center),je.setValue($,"modelViewMatrix",W.modelViewMatrix),je.setValue($,"normalMatrix",W.normalMatrix),je.setValue($,"modelMatrix",W.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const _i=O.uniformsGroups;for(let el=0,Pp=_i.length;el<Pp;el++)if(Pt.isWebGL2){const yh=_i[el];Ct.update(yh,jn),Ct.bind(yh,jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jn}function re(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function te(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,z,Y){wt.get(T.texture).__webglTexture=z,wt.get(T.depthTexture).__webglTexture=Y;const O=wt.get(T);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=Y===void 0,O.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const Y=wt.get(T);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,Y=0){y=T,_=z,S=Y;let O=!0,W=null,xt=!1,Rt=!1;if(T){const Gt=wt.get(T);Gt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(36160,null),O=!1):Gt.__webglFramebuffer===void 0?Lt.setupRenderTarget(T):Gt.__hasExternalTextures&&Lt.rebindTextures(T,wt.get(T.texture).__webglTexture,wt.get(T.depthTexture).__webglTexture);const Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Rt=!0);const It=wt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(W=It[z],xt=!0):Pt.isWebGL2&&T.samples>0&&Lt.useMultisampledRTT(T)===!1?W=wt.get(T).__webglMultisampledFramebuffer:W=It,A.copy(T.viewport),C.copy(T.scissor),x=T.scissorTest}else A.copy(D).multiplyScalar(B).floor(),C.copy(N).multiplyScalar(B).floor(),x=X;if(ot.bindFramebuffer(36160,W)&&Pt.drawBuffers&&O&&ot.drawBuffers(T,W),ot.viewport(A),ot.scissor(C),ot.setScissorTest(x),xt){const Gt=wt.get(T.texture);$.framebufferTexture2D(36160,36064,34069+z,Gt.__webglTexture,Y)}else if(Rt){const Gt=wt.get(T.texture),Ot=z||0;$.framebufferTextureLayer(36160,36064,Gt.__webglTexture,Y||0,Ot)}v=-1},this.readRenderTargetPixels=function(T,z,Y,O,W,xt,Rt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(kt=kt[Rt]),kt){ot.bindFramebuffer(36160,kt);try{const Gt=T.texture,Ot=Gt.format,It=Gt.type;if(Ot!==Ji&&ht.convert(Ot)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ut=It===ro&&(gt.has("EXT_color_buffer_half_float")||Pt.isWebGL2&&gt.has("EXT_color_buffer_float"));if(It!==Mr&&ht.convert(It)!==$.getParameter(35738)&&!(It===ur&&(Pt.isWebGL2||gt.has("OES_texture_float")||gt.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-O&&Y>=0&&Y<=T.height-W&&$.readPixels(z,Y,O,W,ht.convert(Ot),ht.convert(It),xt)}finally{const Gt=y!==null?wt.get(y).__webglFramebuffer:null;ot.bindFramebuffer(36160,Gt)}}},this.copyFramebufferToTexture=function(T,z,Y=0){const O=Math.pow(2,-Y),W=Math.floor(z.image.width*O),xt=Math.floor(z.image.height*O);Lt.setTexture2D(z,0),$.copyTexSubImage2D(3553,Y,0,0,T.x,T.y,W,xt),ot.unbindTexture()},this.copyTextureToTexture=function(T,z,Y,O=0){const W=z.image.width,xt=z.image.height,Rt=ht.convert(Y.format),kt=ht.convert(Y.type);Lt.setTexture2D(Y,0),$.pixelStorei(37440,Y.flipY),$.pixelStorei(37441,Y.premultiplyAlpha),$.pixelStorei(3317,Y.unpackAlignment),z.isDataTexture?$.texSubImage2D(3553,O,T.x,T.y,W,xt,Rt,kt,z.image.data):z.isCompressedTexture?$.compressedTexSubImage2D(3553,O,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Rt,z.mipmaps[0].data):$.texSubImage2D(3553,O,T.x,T.y,Rt,kt,z.image),O===0&&Y.generateMipmaps&&$.generateMipmap(3553),ot.unbindTexture()},this.copyTextureToTexture3D=function(T,z,Y,O,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=T.max.x-T.min.x+1,Rt=T.max.y-T.min.y+1,kt=T.max.z-T.min.z+1,Gt=ht.convert(O.format),Ot=ht.convert(O.type);let It;if(O.isData3DTexture)Lt.setTexture3D(O,0),It=32879;else if(O.isDataArrayTexture)Lt.setTexture2DArray(O,0),It=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,O.flipY),$.pixelStorei(37441,O.premultiplyAlpha),$.pixelStorei(3317,O.unpackAlignment);const Ut=$.getParameter(3314),ce=$.getParameter(32878),Ve=$.getParameter(3316),Ze=$.getParameter(3315),Le=$.getParameter(32877),ae=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;$.pixelStorei(3314,ae.width),$.pixelStorei(32878,ae.height),$.pixelStorei(3316,T.min.x),$.pixelStorei(3315,T.min.y),$.pixelStorei(32877,T.min.z),Y.isDataTexture||Y.isData3DTexture?$.texSubImage3D(It,W,z.x,z.y,z.z,xt,Rt,kt,Gt,Ot,ae.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(It,W,z.x,z.y,z.z,xt,Rt,kt,Gt,ae.data)):$.texSubImage3D(It,W,z.x,z.y,z.z,xt,Rt,kt,Gt,Ot,ae),$.pixelStorei(3314,Ut),$.pixelStorei(32878,ce),$.pixelStorei(3316,Ve),$.pixelStorei(3315,Ze),$.pixelStorei(32877,Le),W===0&&O.generateMipmaps&&$.generateMipmap(It),ot.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Lt.setTextureCube(T,0):T.isData3DTexture?Lt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Lt.setTexture2DArray(T,0):Lt.setTexture2D(T,0),ot.unbindTexture()},this.resetState=function(){_=0,S=0,y=null,ot.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Mv extends Zf{}Mv.prototype.isWebGL1Renderer=!0;class wv extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class sr extends Cs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ru=new I,Du=new I,zu=new ye,Il=new kc,Xo=new Ha;class Tv extends ke{constructor(t=new Wi,e=new sr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Ru.fromBufferAttribute(e,n-1),Du.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Ru.distanceTo(Du);t.setAttribute("lineDistance",new Ge(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(n),Xo.radius+=r,t.ray.intersectsSphere(Xo)===!1)return;zu.copy(n).invert(),Il.copy(t.ray).applyMatrix4(zu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,h=new I,u=new I,f=new I,m=this.isLineSegments?2:1,g=i.index,d=i.attributes.position;if(g!==null){const _=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let y=_,v=S-1;y<v;y+=m){const b=g.getX(y),A=g.getX(y+1);if(c.fromBufferAttribute(d,b),h.fromBufferAttribute(d,A),Il.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const x=t.ray.origin.distanceTo(f);x<t.near||x>t.far||e.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),S=Math.min(d.count,o.start+o.count);for(let y=_,v=S-1;y<v;y+=m){if(c.fromBufferAttribute(d,y),h.fromBufferAttribute(d,y+1),Il.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Iu=new I,Ou=new I;class zs extends Tv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Iu.fromBufferAttribute(e,n),Ou.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Iu.distanceTo(Ou);t.setAttribute("lineDistance",new Ge(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);const h=i[n],f=i[n+1]-h,m=(o-h)/f;return(n+m)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new vt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new I,n=[],r=[],o=[],a=new I,l=new ye;for(let m=0;m<=t;m++){const g=m/t;n[m]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(n[m-1],n[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xe(n[m-1].dot(n[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(n[m],r[m])}if(e===!0){let m=Math.acos(Xe(r[0].dot(r[t]),-1,1));m/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],m*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wc extends un{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const i=e||new vt,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cv extends Wc{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Xc(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,n(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+i*a}}}const qo=new I,Ol=new Xc,Nl=new Xc,Fl=new Xc;class Ev extends un{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new I){const i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(qo.subVectors(n[0],n[1]).add(n[0]),c=qo);const u=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(qo.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=qo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(h),m);p<1e-4&&(p=1),g<1e-4&&(g=p),d<1e-4&&(d=p),Ol.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,p,d),Nl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,p,d),Fl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,p,d)}else this.curveType==="catmullrom"&&(Ol.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Nl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Fl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Ol.calc(l),Nl.calc(l),Fl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new I().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Nu(s,t,e,i,n){const r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function Av(s,t){const e=1-s;return e*e*t}function Pv(s,t){return 2*(1-s)*s*t}function Lv(s,t){return s*s*t}function Xs(s,t,e,i){return Av(s,t)+Pv(s,e)+Lv(s,i)}function Rv(s,t){const e=1-s;return e*e*e*t}function Dv(s,t){const e=1-s;return 3*e*e*s*t}function zv(s,t){return 3*(1-s)*s*s*t}function Iv(s,t){return s*s*s*t}function qs(s,t,e,i,n){return Rv(s,t)+Dv(s,e)+zv(s,i)+Iv(s,n)}class jf extends un{constructor(t=new vt,e=new vt,i=new vt,n=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new vt){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(qs(t,n.x,r.x,o.x,a.x),qs(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ov extends un{constructor(t=new I,e=new I,i=new I,n=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new I){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(qs(t,n.x,r.x,o.x,a.x),qs(t,n.y,r.y,o.y,a.y),qs(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qc extends un{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const i=e||new vt;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nv extends un{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jf extends un{constructor(t=new vt,e=new vt,i=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new vt){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Xs(t,n.x,r.x,o.x),Xs(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fv extends un{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Xs(t,n.x,r.x,o.x),Xs(t,n.y,r.y,o.y),Xs(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kf extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(Nu(a,l.x,c.x,h.x,u.x),Nu(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new vt().fromArray(n))}return this}}var Bv=Object.freeze({__proto__:null,ArcCurve:Cv,CatmullRomCurve3:Ev,CubicBezierCurve:jf,CubicBezierCurve3:Ov,EllipseCurve:Wc,LineCurve:qc,LineCurve3:Nv,QuadraticBezierCurve:Jf,QuadraticBezierCurve3:Fv,SplineCurve:Kf});class Uv extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new qc(e,t))}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Bv[n.type]().fromJSON(n))}return this}}class hc extends Uv{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new qc(this.currentPoint.clone(),new vt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const r=new Jf(this.currentPoint.clone(),new vt(t,e),new vt(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){const a=new jf(this.currentPoint.clone(),new vt(t,e),new vt(i,n),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Kf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){const c=new Wc(t,e,i,n,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}const Yo=new I,$o=new I,Bl=new I,Zo=new rn;class Is extends Wi{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const n=Math.pow(10,4),r=Math.cos(ua*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},m=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:p,b:d,c:_}=Zo;if(p.fromBufferAttribute(a,c[0]),d.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),Zo.getNormal(Bl),u[0]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,u[1]=`${Math.round(d.x*n)},${Math.round(d.y*n)},${Math.round(d.z*n)}`,u[2]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const y=(S+1)%3,v=u[S],b=u[y],A=Zo[h[S]],C=Zo[h[y]],x=`${v}_${b}`,M=`${b}_${v}`;M in f&&f[M]?(Bl.dot(f[M].normal)<=r&&(m.push(A.x,A.y,A.z),m.push(C.x,C.y,C.z)),f[M]=null):x in f||(f[x]={index0:c[S],index1:c[y],normal:Bl.clone()})}}for(const g in f)if(f[g]){const{index0:p,index1:d}=f[g];Yo.fromBufferAttribute(a,p),$o.fromBufferAttribute(a,d),m.push(Yo.x,Yo.y,Yo.z),m.push($o.x,$o.y,$o.z)}this.setAttribute("position",new Ge(m,3))}}}class pa extends hc{constructor(t){super(t),this.uuid=Ts(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new hc().fromJSON(n))}return this}}const kv={triangulate:function(s,t,e=2){const i=t&&t.length,n=i?t[0]*e:s.length;let r=Qf(s,0,n,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,m;if(i&&(r=Xv(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<n;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return ao(r,o,e,a,l,m,0),o}};function Qf(s,t,e,i,n){let r,o;if(n===iy(s,t,e,i)>0)for(r=t;r<e;r+=i)o=Fu(r,s[r],s[r+1],o);else for(r=e-i;r>=t;r-=i)o=Fu(r,s[r],s[r+1],o);return o&&Ya(o,o.next)&&(co(o),o=o.next),o}function Tr(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(Ya(e,e.next)||pe(e.prev,e,e.next)===0)){if(co(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ao(s,t,e,i,n,r,o){if(!s)return;!o&&r&&jv(s,i,n,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Vv(s,i,n,r):Gv(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),co(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Hv(Tr(s),t,e),ao(s,t,e,i,n,r,2)):o===2&&Wv(s,t,e,i,n,r):ao(Tr(s),t,e,i,n,r,1);break}}}function Gv(s){const t=s.prev,e=s,i=s.next;if(pe(t,e,i)>=0)return!1;const n=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=n<r?n<o?n:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=n>r?n>o?n:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&Kr(n,a,r,l,o,c,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vv(s,t,e,i){const n=s.prev,r=s,o=s.next;if(pe(n,r,o)>=0)return!1;const a=n.x,l=r.x,c=o.x,h=n.y,u=r.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,p=a>l?a>c?a:c:l>c?l:c,d=h>u?h>f?h:f:u>f?u:f,_=uc(m,g,t,e,i),S=uc(p,d,t,e,i);let y=s.prevZ,v=s.nextZ;for(;y&&y.z>=_&&v&&v.z<=S;){if(y.x>=m&&y.x<=p&&y.y>=g&&y.y<=d&&y!==n&&y!==o&&Kr(a,h,l,u,c,f,y.x,y.y)&&pe(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=m&&v.x<=p&&v.y>=g&&v.y<=d&&v!==n&&v!==o&&Kr(a,h,l,u,c,f,v.x,v.y)&&pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=_;){if(y.x>=m&&y.x<=p&&y.y>=g&&y.y<=d&&y!==n&&y!==o&&Kr(a,h,l,u,c,f,y.x,y.y)&&pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=S;){if(v.x>=m&&v.x<=p&&v.y>=g&&v.y<=d&&v!==n&&v!==o&&Kr(a,h,l,u,c,f,v.x,v.y)&&pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Hv(s,t,e){let i=s;do{const n=i.prev,r=i.next.next;!Ya(n,r)&&td(n,i,i.next,r)&&lo(n,r)&&lo(r,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),co(i),co(i.next),i=s=r),i=i.next}while(i!==s);return Tr(i)}function Wv(s,t,e,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qv(o,a)){let l=ed(o,a);o=Tr(o,o.next),l=Tr(l,l.next),ao(o,t,e,i,n,r,0),ao(l,t,e,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function Xv(s,t,e,i){const n=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:s.length,c=Qf(s,a,l,i,!1),c===c.next&&(c.steiner=!0),n.push(Kv(c));for(n.sort(qv),r=0;r<n.length;r++)e=Yv(n[r],e);return e}function qv(s,t){return s.x-t.x}function Yv(s,t){const e=$v(s,t);if(!e)return t;const i=ed(e,s);return Tr(i,i.next),Tr(e,e.next)}function $v(s,t){let e=t,i=-1/0,n;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,n=e.x<e.next.x?e:e.next,f===r))return n}e=e.next}while(e!==t);if(!n)return null;const a=n,l=n.x,c=n.y;let h=1/0,u;e=n;do r>=e.x&&e.x>=l&&r!==e.x&&Kr(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),lo(e,s)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&Zv(n,e)))&&(n=e,h=u)),e=e.next;while(e!==a);return n}function Zv(s,t){return pe(s.prev,s,t.prev)<0&&pe(t.next,s,s.next)<0}function jv(s,t,e,i){let n=s;do n.z===0&&(n.z=uc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Jv(n)}function Jv(s){let t,e,i,n,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,a--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;e=i}r.nextZ=null,c*=2}while(o>1);return s}function uc(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Kv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Kr(s,t,e,i,n,r,o,a){return(n-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(n-o)*(i-a)}function Qv(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ty(s,t)&&(lo(s,t)&&lo(t,s)&&ey(s,t)&&(pe(s.prev,s,t.prev)||pe(s,t.prev,t))||Ya(s,t)&&pe(s.prev,s,s.next)>0&&pe(t.prev,t,t.next)>0)}function pe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ya(s,t){return s.x===t.x&&s.y===t.y}function td(s,t,e,i){const n=Jo(pe(s,t,e)),r=Jo(pe(s,t,i)),o=Jo(pe(e,i,s)),a=Jo(pe(e,i,t));return!!(n!==r&&o!==a||n===0&&jo(s,e,t)||r===0&&jo(s,i,t)||o===0&&jo(e,s,i)||a===0&&jo(e,t,i))}function jo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Jo(s){return s>0?1:s<0?-1:0}function ty(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&td(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function lo(s,t){return pe(s.prev,s,s.next)<0?pe(s,t,s.next)>=0&&pe(s,s.prev,t)>=0:pe(s,t,s.prev)<0||pe(s,s.next,t)<0}function ey(s,t){let e=s,i=!1;const n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function ed(s,t){const e=new fc(s.i,s.x,s.y),i=new fc(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Fu(s,t,e,i){const n=new fc(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function co(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function iy(s,t,e,i){let n=0;for(let r=t,o=e-i;r<e;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}class os{static area(t){const e=t.length;let i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return os.area(t)<0}static triangulateShape(t,e){const i=[],n=[],r=[];Bu(t),Uu(i,t);let o=t.length;e.forEach(Bu);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,Uu(i,e[l]);const a=kv.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Bu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Uu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Yc extends Wi{constructor(t=new pa([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ge(n,3)),this.setAttribute("normal",new Ge(r,3)),this.setAttribute("uv",new Ge(o,2));function c(h){const u=n.length/3,f=h.extractPoints(e);let m=f.shape;const g=f.holes;os.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,_=g.length;d<_;d++){const S=g[d];os.isClockWise(S)===!0&&(g[d]=S.reverse())}const p=os.triangulateShape(m,g);for(let d=0,_=g.length;d<_;d++){const S=g[d];m=m.concat(S)}for(let d=0,_=m.length;d<_;d++){const S=m[d];n.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let d=0,_=p.length;d<_;d++){const S=p[d],y=S[0]+u,v=S[1]+u,b=S[2]+u;i.push(y,v,b),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ny(e,t)}static fromJSON(t,e){const i=[];for(let n=0,r=t.shapes.length;n<r;n++){const o=e[t.shapes[n]];i.push(o)}return new Yc(i,t.curveSegments)}}function ny(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){const n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}class ry extends Cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sy extends ry{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Ea={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class oy{constructor(t,e,i){const n=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const ay=new oy;class $a{constructor(t){this.manager=t!==void 0?t:ay,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const xn={};class ly extends Error{constructor(t,e){super(t),this.response=e}}class cy extends $a{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ea.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(xn[t]!==void 0){xn[t].push({onLoad:e,onProgress:i,onError:n});return}xn[t]=[],xn[t].push({onLoad:e,onProgress:i,onError:n});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=xn[t],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let p=0;const d=new ReadableStream({start(_){S();function S(){u.read().then(({done:y,value:v})=>{if(y)_.close();else{p+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let A=0,C=h.length;A<C;A++){const x=h[A];x.onProgress&&x.onProgress(b)}_.enqueue(v),S()}})}}});return new Response(d)}else throw new ly(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Ea.add(t,c);const h=xn[t];delete xn[t];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=xn[t];if(h===void 0)throw this.manager.itemError(t),c;delete xn[t];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class hy extends $a{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ea.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=oo("img");function l(){h(),Ea.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),n&&n(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class uy extends $a{constructor(t){super(t)}load(t,e,i,n){const r=new fi,o=new hy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}}class fy extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ul=new ye,ku=new I,Gu=new I;class dy{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(ku),Gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gu),e.updateMatrixWorld(),Ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class py extends dy{constructor(){super(new Xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class my extends fy{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.target=new ke,this.shadow=new py}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class id{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vu(){return(typeof performance>"u"?Date:performance).now()}class gy{constructor(t,e,i=0,n=1/0){this.ray=new kc(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return dc(t,this,i,e),i.sort(Hu),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)dc(t[n],this,i,e);return i.sort(Hu),i}}function Hu(s,t){return s.distance-t.distance}function dc(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const n=s.children;for(let r=0,o=n.length;r<o;r++)dc(n[r],t,e,!0)}}class _y{constructor(){this.type="ShapePath",this.color=new jt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new hc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,n){return this.currentPath.quadraticCurveTo(t,e,i,n),this}bezierCurveTo(t,e,i,n,r,o){return this.currentPath.bezierCurveTo(t,e,i,n,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(_){const S=[];for(let y=0,v=_.length;y<v;y++){const b=_[y],A=new pa;A.curves=b.curves,S.push(A)}return S}function i(_,S){const y=S.length;let v=!1;for(let b=y-1,A=0;A<y;b=A++){let C=S[b],x=S[A],M=x.x-C.x,L=x.y-C.y;if(Math.abs(L)>Number.EPSILON){if(L<0&&(C=S[A],M=-M,x=S[b],L=-L),_.y<C.y||_.y>x.y)continue;if(_.y===C.y){if(_.x===C.x)return!0}else{const B=L*(_.x-C.x)-M*(_.y-C.y);if(B===0)return!0;if(B<0)continue;v=!v}}else{if(_.y!==C.y)continue;if(x.x<=_.x&&_.x<=C.x||C.x<=_.x&&_.x<=x.x)return!0}}return v}const n=os.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new pa,l.curves=a.curves,c.push(l),c;let h=!n(r[0].getPoints());h=t?!h:h;const u=[],f=[];let m=[],g=0,p;f[g]=void 0,m[g]=[];for(let _=0,S=r.length;_<S;_++)a=r[_],p=a.getPoints(),o=n(p),o=t?!o:o,o?(!h&&f[g]&&g++,f[g]={s:new pa,p},f[g].s.curves=a.curves,h&&g++,m[g]=[]):m[g].push({h:a,p:p[0]});if(!f[0])return e(r);if(f.length>1){let _=!1,S=0;for(let y=0,v=f.length;y<v;y++)u[y]=[];for(let y=0,v=f.length;y<v;y++){const b=m[y];for(let A=0;A<b.length;A++){const C=b[A];let x=!0;for(let M=0;M<f.length;M++)i(C.p,f[M].p)&&(y!==M&&S++,x?(x=!1,u[M].push(C)):_=!0);x&&u[y].push(C)}}S>0&&_===!1&&(m=u)}let d;for(let _=0,S=f.length;_<S;_++){l=f[_].s,c.push(l),d=m[_];for(let y=0,v=d.length;y<v;y++)l.holes.push(d[y].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);const Aa={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class So{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xy=new Xa(-1,1,1,-1,0,1),$c=new Wi;$c.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3));$c.setAttribute("uv",new Ge([0,2,0,0,2,0],2));class nd{constructor(t){this._mesh=new ui($c,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,xy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Wu extends So{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ai?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ca.clone(t.uniforms),this.material=new Ai({defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new nd(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xu extends So{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class vy extends So{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class yy{constructor(t,e){if(this.renderer=t,e===void 0){const i=t.getSize(new vt);this._pixelRatio=t.getPixelRatio(),this._width=i.width,this._height=i.height,e=new Ki(this._width*this._pixelRatio,this._height*this._pixelRatio),e.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Aa===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Wu===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Wu(Aa),this.clock=new id}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xu!==void 0&&(o instanceof Xu?i=!0:o instanceof vy&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Xa(-1,1,1,-1,0,1);const rd=new Wi;rd.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3));rd.setAttribute("uv",new Ge([0,2,0,0,2,0],2));class by extends So{constructor(t,e,i,n,r){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new jt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(t.getClearColor(this._oldClearColor),r=t.getClearAlpha(),t.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor&&t.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),t.autoClear=n}}const qu={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new jt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class _s extends So{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new vt(t.x,t.y):new vt(256,256),this.clearColor=new jt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ki(r,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Ki(r,o);f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new Ki(r,o);m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}qu===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const a=qu;this.highPassUniforms=Ca.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ai({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.texSize.value=new vt(r,o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Aa===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const h=Aa;this.copyUniforms=Ca.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Ai({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ec,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new jt,this.oldClearAlpha=1,this.basic=new ss,this.fsQuad=new nd(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.texSize.value=new vt(i,n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=_s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=_s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){return new Ai({defines:{KERNEL_RADIUS:t,SIGMA:t},uniforms:{colorTexture:{value:null},texSize:{value:new vt(.5,.5)},direction:{value:new vt(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}}_s.BlurDirectionX=new vt(1,0);_s.BlurDirectionY=new vt(0,1);class Sy extends $a{constructor(t){super(t)}load(t,e,i,n){const r=this,o=new cy(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=r.parse(JSON.parse(a));e&&e(l)},i,n)}parse(t){return new My(t)}}class My{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const i=[],n=wy(t,e,this.data);for(let r=0,o=n.length;r<o;r++)i.push(...n[r].toShapes());return i}}function wy(s,t,e){const i=Array.from(s),n=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*n,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)a=0,l-=r;else{const u=Ty(h,n,a,l,e);a+=u.offsetX,o.push(u.path)}}return o}function Ty(s,t,e,i,n){const r=n.glyphs[s]||n.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+n.familyName+".");return}const o=new _y;let a,l,c,h,u,f,m,g;if(r.o){const p=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let d=0,_=p.length;d<_;)switch(p[d++]){case"m":a=p[d++]*t+e,l=p[d++]*t+i,o.moveTo(a,l);break;case"l":a=p[d++]*t+e,l=p[d++]*t+i,o.lineTo(a,l);break;case"q":c=p[d++]*t+e,h=p[d++]*t+i,u=p[d++]*t+e,f=p[d++]*t+i,o.quadraticCurveTo(u,f,c,h);break;case"b":c=p[d++]*t+e,h=p[d++]*t+i,u=p[d++]*t+e,f=p[d++]*t+i,m=p[d++]*t+e,g=p[d++]*t+i,o.bezierCurveTo(u,f,m,g,c,h);break}}return{offsetX:r.ha*t,path:o}}/*!
 * Observer 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Ue,pc,Ti,Fn,Bn,as,sd,or,Ys,od,Mn,$i,ad,ld=()=>Ue||typeof window<"u"&&(Ue=window.gsap)&&Ue.registerPlugin&&Ue,cd=1,Qr=[],Yt=[],ln=[],$s=Date.now,mc=(s,t)=>t,Cy=()=>{let s=Ys.core,t=s.bridge||{},e=s._scrollers,i=s._proxies;e.push(...Yt),i.push(...ln),Yt=e,ln=i,mc=(n,r)=>t[n](r)},Hn=(s,t)=>~ln.indexOf(s)&&ln[ln.indexOf(s)+1][t],Zs=s=>!!~od.indexOf(s),oi=(s,t,e,i,n)=>s.addEventListener(t,e,{passive:!i,capture:!!n}),Ke=(s,t,e,i)=>s.removeEventListener(t,e,!!i),Ko="scrollLeft",Qo="scrollTop",gc=()=>Mn&&Mn.isPressed||Yt.cache++,Pa=(s,t)=>{let e=i=>{if(i||i===0){cd&&(Ti.history.scrollRestoration="manual");let n=Mn&&Mn.isPressed;i=e.v=Math.round(i)||(Mn&&Mn.iOS?1:0),s(i),e.cacheID=Yt.cache,n&&mc("ss",i)}else(t||Yt.cache!==e.cacheID||mc("ref"))&&(e.cacheID=Yt.cache,e.v=s());return e.v+e.offset};return e.offset=0,s&&e},ni={s:Ko,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Pa(function(s){return arguments.length?Ti.scrollTo(s,Ce.sc()):Ti.pageXOffset||Fn[Ko]||Bn[Ko]||as[Ko]||0})},Ce={s:Qo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ni,sc:Pa(function(s){return arguments.length?Ti.scrollTo(ni.sc(),s):Ti.pageYOffset||Fn[Qo]||Bn[Qo]||as[Qo]||0})},ci=(s,t)=>(t&&t._ctx&&t._ctx.selector||Ue.utils.toArray)(s)[0]||(typeof s=="string"&&Ue.config().nullTargetWarn!==!1?console.warn("Element not found:",s):null),qn=(s,{s:t,sc:e})=>{Zs(s)&&(s=Fn.scrollingElement||Bn);let i=Yt.indexOf(s),n=e===Ce.sc?1:2;!~i&&(i=Yt.push(s)-1),Yt[i+n]||s.addEventListener("scroll",gc);let r=Yt[i+n],o=r||(Yt[i+n]=Pa(Hn(s,t),!0)||(Zs(s)?e:Pa(function(a){return arguments.length?s[t]=a:s[t]})));return o.target=s,r||(o.smooth=Ue.getProperty(s,"scrollBehavior")==="smooth"),o},_c=(s,t,e)=>{let i=s,n=s,r=$s(),o=r,a=t||50,l=Math.max(500,a*3),c=(f,m)=>{let g=$s();m||g-r>a?(n=i,i=f,o=r,r=g):e?i+=f:i=n+(f-n)/(g-o)*(r-o)};return{update:c,reset:()=>{n=i=e?0:i,o=r=0},getVelocity:f=>{let m=o,g=n,p=$s();return(f||f===0)&&f!==i&&c(f),r===o||p-o>l?0:(i+(e?g:-g))/((e?p:r)-m)*1e3}}},Os=(s,t)=>(t&&!s._gsapAllow&&s.preventDefault(),s.changedTouches?s.changedTouches[0]:s),Yu=s=>{let t=Math.max(...s),e=Math.min(...s);return Math.abs(t)>=Math.abs(e)?t:e},hd=()=>{Ys=Ue.core.globals().ScrollTrigger,Ys&&Ys.core&&Cy()},ud=s=>(Ue=s||ld(),Ue&&typeof document<"u"&&document.body&&(Ti=window,Fn=document,Bn=Fn.documentElement,as=Fn.body,od=[Ti,Fn,Bn,as],Ue.utils.clamp,ad=Ue.core.context||function(){},or="onpointerenter"in as?"pointer":"mouse",sd=we.isTouch=Ti.matchMedia&&Ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,$i=we.eventTypes=("ontouchstart"in Bn?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Bn?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(()=>cd=0,500),hd(),pc=1),pc);ni.op=Ce;Yt.cache=0;class we{constructor(t){this.init(t)}init(t){pc||ud(Ue)||console.warn("Please gsap.registerPlugin(Observer)"),Ys||hd();let{tolerance:e,dragMinimum:i,type:n,target:r,lineHeight:o,debounce:a,preventDefault:l,onStop:c,onStopDelay:h,ignore:u,wheelSpeed:f,event:m,onDragStart:g,onDragEnd:p,onDrag:d,onPress:_,onRelease:S,onRight:y,onLeft:v,onUp:b,onDown:A,onChangeX:C,onChangeY:x,onChange:M,onToggleX:L,onToggleY:B,onHover:et,onHoverEnd:F,onMove:D,ignoreCheck:N,isNormalizer:X,onGestureStart:E,onGestureEnd:k,onWheel:it,onEnable:rt,onDisable:G,onClick:H,scrollSpeed:K,capture:j,allowClicks:lt,lockAxis:$,onLockAxis:Nt}=t;this.target=r=ci(r)||Bn,this.vars=t,u&&(u=Ue.utils.toArray(u)),e=e||1e-9,i=i||0,f=f||1,K=K||1,n=n||"wheel,touch,pointer",a=a!==!1,o||(o=parseFloat(Ti.getComputedStyle(as).lineHeight)||22);let gt,Pt,ot,Dt,wt,Lt,qt,V=this,ee=0,le=0,Ft=qn(r,ni),Wt=qn(r,Ce),Pe=Ft(),ie=Wt(),P=~n.indexOf("touch")&&!~n.indexOf("pointer")&&$i[0]==="pointerdown",w=Zs(r),U=r.ownerDocument||Fn,Q=[0,0,0],ct=[0,0,0],dt=0,zt=()=>dt=$s(),ht=(Z,ft)=>(V.event=Z)&&u&&~u.indexOf(Z.target)||ft&&P&&Z.pointerType!=="touch"||N&&N(Z,ft),J=()=>{V._vx.reset(),V._vy.reset(),Pt.pause(),c&&c(V)},Ct=()=>{let Z=V.deltaX=Yu(Q),ft=V.deltaY=Yu(ct),nt=Math.abs(Z)>=e,tt=Math.abs(ft)>=e;M&&(nt||tt)&&M(V,Z,ft,Q,ct),nt&&(y&&V.deltaX>0&&y(V),v&&V.deltaX<0&&v(V),C&&C(V),L&&V.deltaX<0!=ee<0&&L(V),ee=V.deltaX,Q[0]=Q[1]=Q[2]=0),tt&&(A&&V.deltaY>0&&A(V),b&&V.deltaY<0&&b(V),x&&x(V),B&&V.deltaY<0!=le<0&&B(V),le=V.deltaY,ct[0]=ct[1]=ct[2]=0),(Dt||ot)&&(D&&D(V),ot&&(d(V),ot=!1),Dt=!1),Lt&&!(Lt=!1)&&Nt&&Nt(V),wt&&(it(V),wt=!1),gt=0},St=(Z,ft,nt)=>{Q[nt]+=Z,ct[nt]+=ft,V._vx.update(Z),V._vy.update(ft),a?gt||(gt=requestAnimationFrame(Ct)):Ct()},yt=(Z,ft)=>{$&&!qt&&(V.axis=qt=Math.abs(Z)>Math.abs(ft)?"x":"y",Lt=!0),qt!=="y"&&(Q[2]+=Z,V._vx.update(Z,!0)),qt!=="x"&&(ct[2]+=ft,V._vy.update(ft,!0)),a?gt||(gt=requestAnimationFrame(Ct)):Ct()},Et=Z=>{if(ht(Z,1))return;Z=Os(Z,l);let ft=Z.clientX,nt=Z.clientY,tt=ft-V.x,ut=nt-V.y,At=V.isDragging;V.x=ft,V.y=nt,(At||Math.abs(V.startX-ft)>=i||Math.abs(V.startY-nt)>=i)&&(d&&(ot=!0),At||(V.isDragging=!0),yt(tt,ut),At||g&&g(V))},Tt=V.onPress=Z=>{ht(Z,1)||Z&&Z.button||(V.axis=qt=null,Pt.pause(),V.isPressed=!0,Z=Os(Z),ee=le=0,V.startX=V.x=Z.clientX,V.startY=V.y=Z.clientY,V._vx.reset(),V._vy.reset(),oi(X?r:U,$i[1],Et,l,!0),V.deltaX=V.deltaY=0,_&&_(V))},_t=V.onRelease=Z=>{if(ht(Z,1))return;Ke(X?r:U,$i[1],Et,!0);let ft=!isNaN(V.y-V.startY),nt=V.isDragging&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),tt=Os(Z);!nt&&ft&&(V._vx.reset(),V._vy.reset(),l&&lt&&Ue.delayedCall(.08,()=>{if($s()-dt>300&&!Z.defaultPrevented){if(Z.target.click)Z.target.click();else if(U.createEvent){let ut=U.createEvent("MouseEvents");ut.initMouseEvent("click",!0,!0,Ti,1,tt.screenX,tt.screenY,tt.clientX,tt.clientY,!1,!1,!1,!1,0,null),Z.target.dispatchEvent(ut)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,c&&!X&&Pt.restart(!0),p&&nt&&p(V),S&&S(V,nt)},Zt=Z=>Z.touches&&Z.touches.length>1&&(V.isGesturing=!0)&&E(Z,V.isDragging),Kt=()=>(V.isGesturing=!1)||k(V),R=Z=>{if(ht(Z))return;let ft=Ft(),nt=Wt();St((ft-Pe)*K,(nt-ie)*K,1),Pe=ft,ie=nt,c&&Pt.restart(!0)},q=Z=>{if(ht(Z))return;Z=Os(Z,l),it&&(wt=!0);let ft=(Z.deltaMode===1?o:Z.deltaMode===2?Ti.innerHeight:1)*f;St(Z.deltaX*ft,Z.deltaY*ft,0),c&&!X&&Pt.restart(!0)},st=Z=>{if(ht(Z))return;let ft=Z.clientX,nt=Z.clientY,tt=ft-V.x,ut=nt-V.y;V.x=ft,V.y=nt,Dt=!0,(tt||ut)&&yt(tt,ut)},mt=Z=>{V.event=Z,et(V)},bt=Z=>{V.event=Z,F(V)},at=Z=>ht(Z)||Os(Z,l)&&H(V);Pt=V._dc=Ue.delayedCall(h||.25,J).pause(),V.deltaX=V.deltaY=0,V._vx=_c(0,50,!0),V._vy=_c(0,50,!0),V.scrollX=Ft,V.scrollY=Wt,V.isDragging=V.isGesturing=V.isPressed=!1,ad(this),V.enable=Z=>(V.isEnabled||(oi(w?U:r,"scroll",gc),n.indexOf("scroll")>=0&&oi(w?U:r,"scroll",R,l,j),n.indexOf("wheel")>=0&&oi(r,"wheel",q,l,j),(n.indexOf("touch")>=0&&sd||n.indexOf("pointer")>=0)&&(oi(r,$i[0],Tt,l,j),oi(U,$i[2],_t),oi(U,$i[3],_t),lt&&oi(r,"click",zt,!1,!0),H&&oi(r,"click",at),E&&oi(U,"gesturestart",Zt),k&&oi(U,"gestureend",Kt),et&&oi(r,or+"enter",mt),F&&oi(r,or+"leave",bt),D&&oi(r,or+"move",st)),V.isEnabled=!0,Z&&Z.type&&Tt(Z),rt&&rt(V)),V),V.disable=()=>{V.isEnabled&&(Qr.filter(Z=>Z!==V&&Zs(Z.target)).length||Ke(w?U:r,"scroll",gc),V.isPressed&&(V._vx.reset(),V._vy.reset(),Ke(X?r:U,$i[1],Et,!0)),Ke(w?U:r,"scroll",R,j),Ke(r,"wheel",q,j),Ke(r,$i[0],Tt,j),Ke(U,$i[2],_t),Ke(U,$i[3],_t),Ke(r,"click",zt,!0),Ke(r,"click",at),Ke(U,"gesturestart",Zt),Ke(U,"gestureend",Kt),Ke(r,or+"enter",mt),Ke(r,or+"leave",bt),Ke(r,or+"move",st),V.isEnabled=V.isPressed=V.isDragging=!1,G&&G(V))},V.kill=V.revert=()=>{V.disable();let Z=Qr.indexOf(V);Z>=0&&Qr.splice(Z,1),Mn===V&&(Mn=0)},Qr.push(V),X&&Zs(r)&&(Mn=V),V.enable(m)}get velocityX(){return this._vx.getVelocity()}get velocityY(){return this._vy.getVelocity()}}we.version="3.12.1";we.create=s=>new we(s);we.register=ud;we.getAll=()=>Qr.slice();we.getById=s=>Qr.filter(t=>t.vars.id===s)[0];ld()&&Ue.registerPlugin(we);/*!
 * ScrollTrigger 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Mt,Zr,$t,he,Zi,fe,fd,La,Ra,ts,ma,ta,We,Za,xc,ti,$u,Zu,jr,dd,kl,pd,bi,md,gd,_d,Nn,vc,Zc,Gl,ea=1,ii=Date.now,Vl=ii(),Vi=0,ks=0,ju=(s,t,e)=>{let i=Mi(s)&&(s.substr(0,6)==="clamp("||s.indexOf("max")>-1);return e["_"+t+"Clamp"]=i,i?s.substr(6,s.length-7):s},Ju=(s,t)=>t&&(!Mi(s)||s.substr(0,6)!=="clamp(")?"clamp("+s+")":s,xd=()=>ks&&requestAnimationFrame(xd),Ku=()=>Za=1,Qu=()=>Za=0,en=s=>s,Gs=s=>Math.round(s*1e5)/1e5||0,vd=()=>typeof window<"u",yd=()=>Mt||vd()&&(Mt=window.gsap)&&Mt.registerPlugin&&Mt,Cr=s=>!!~fd.indexOf(s),bd=s=>Hn(s,"getBoundingClientRect")||(Cr(s)?()=>(ba.width=$t.innerWidth,ba.height=$t.innerHeight,ba):()=>bn(s)),Ey=(s,t,{d:e,d2:i,a:n})=>(n=Hn(s,"getBoundingClientRect"))?()=>n()[e]:()=>(t?$t["inner"+i]:s["client"+i])||0,Ay=(s,t)=>!t||~ln.indexOf(s)?bd(s):()=>ba,wn=(s,{s:t,d2:e,d:i,a:n})=>Math.max(0,(t="scroll"+e)&&(n=Hn(s,t))?n()-bd(s)()[i]:Cr(s)?(Zi[t]||fe[t])-($t["inner"+e]||Zi["client"+e]||fe["client"+e]):s[t]-s["offset"+e]),ia=(s,t)=>{for(let e=0;e<jr.length;e+=3)(!t||~t.indexOf(jr[e+1]))&&s(jr[e],jr[e+1],jr[e+2])},Mi=s=>typeof s=="string",ri=s=>typeof s=="function",ga=s=>typeof s=="number",ar=s=>typeof s=="object",Ns=(s,t,e)=>s&&s.progress(t?0:1)&&e&&s.pause(),Hl=(s,t)=>{if(s.enabled){let e=t(s);e&&e.totalTime&&(s.callbackAnimation=e)}},Xr=Math.abs,Sd="left",Md="top",jc="right",Jc="bottom",gr="width",_r="height",js="Right",Js="Left",Ks="Top",Qs="Bottom",Se="padding",Ni="margin",xs="Width",Kc="Height",Fe="px",Fi=s=>$t.getComputedStyle(s),Py=s=>{let t=Fi(s).position;s.style.position=t==="absolute"||t==="fixed"?t:"relative"},tf=(s,t)=>{for(let e in t)e in s||(s[e]=t[e]);return s},bn=(s,t)=>{let e=t&&Fi(s)[xc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Mt.to(s,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=s.getBoundingClientRect();return e&&e.progress(0).kill(),i},yc=(s,{d2:t})=>s["offset"+t]||s["client"+t]||0,wd=s=>{let t=[],e=s.labels,i=s.duration(),n;for(n in e)t.push(e[n]/i);return t},Ly=s=>t=>Mt.utils.snap(wd(s),t),Qc=s=>{let t=Mt.utils.snap(s),e=Array.isArray(s)&&s.slice(0).sort((i,n)=>i-n);return e?(i,n,r=.001)=>{let o;if(!n)return t(i);if(n>0){for(i-=r,o=0;o<e.length;o++)if(e[o]>=i)return e[o];return e[o-1]}else for(o=e.length,i+=r;o--;)if(e[o]<=i)return e[o];return e[0]}:(i,n,r=.001)=>{let o=t(i);return!n||Math.abs(o-i)<r||o-i<0==n<0?o:t(n<0?i-s:i+s)}},Ry=s=>(t,e)=>Qc(wd(s))(t,e.direction),na=(s,t,e,i)=>e.split(",").forEach(n=>s(t,n,i)),Ie=(s,t,e,i,n)=>s.addEventListener(t,e,{passive:!i,capture:!!n}),ze=(s,t,e,i)=>s.removeEventListener(t,e,!!i),ra=(s,t,e)=>{e=e&&e.wheelHandler,e&&(s(t,"wheel",e),s(t,"touchmove",e))},ef={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},sa={toggleActions:"play",anticipatePin:0},Da={top:0,left:0,center:.5,bottom:1,right:1},_a=(s,t)=>{if(Mi(s)){let e=s.indexOf("="),i=~e?+(s.charAt(e-1)+1)*parseFloat(s.substr(e+1)):0;~e&&(s.indexOf("%")>e&&(i*=t/100),s=s.substr(0,e-1)),s=i+(s in Da?Da[s]*t:~s.indexOf("%")?parseFloat(s)*t/100:parseFloat(s)||0)}return s},oa=(s,t,e,i,{startColor:n,endColor:r,fontSize:o,indent:a,fontWeight:l},c,h,u)=>{let f=he.createElement("div"),m=Cr(e)||Hn(e,"pinType")==="fixed",g=s.indexOf("scroller")!==-1,p=m?fe:e,d=s.indexOf("start")!==-1,_=d?n:r,S="border-color:"+_+";font-size:"+o+";color:"+_+";font-weight:"+l+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((g||u)&&m?"fixed;":"absolute;"),(g||u||!m)&&(S+=(i===Ce?jc:Jc)+":"+(c+parseFloat(a))+"px;"),h&&(S+="box-sizing:border-box;text-align:left;width:"+h.offsetWidth+"px;"),f._isStart=d,f.setAttribute("class","gsap-marker-"+s+(t?" marker-"+t:"")),f.style.cssText=S,f.innerText=t||t===0?s+"-"+t:s,p.children[0]?p.insertBefore(f,p.children[0]):p.appendChild(f),f._offset=f["offset"+i.op.d2],xa(f,0,i,d),f},xa=(s,t,e,i)=>{let n={display:"block"},r=e[i?"os2":"p2"],o=e[i?"p2":"os2"];s._isFlipped=i,n[e.a+"Percent"]=i?-100:0,n[e.a]=i?"1px":0,n["border"+r+xs]=1,n["border"+o+xs]=0,n[e.p]=t+"px",Mt.set(s,n)},Xt=[],bc={},ho,nf=()=>ii()-Vi>34&&(ho||(ho=requestAnimationFrame(Cn))),qr=()=>{(!bi||!bi.isPressed||bi.startX>fe.clientWidth)&&(Yt.cache++,bi?ho||(ho=requestAnimationFrame(Cn)):Cn(),Vi||Ar("scrollStart"),Vi=ii())},Wl=()=>{_d=$t.innerWidth,gd=$t.innerHeight},Vs=()=>{Yt.cache++,!We&&!pd&&!he.fullscreenElement&&!he.webkitFullscreenElement&&(!md||_d!==$t.innerWidth||Math.abs($t.innerHeight-gd)>$t.innerHeight*.25)&&La.restart(!0)},Er={},Dy=[],th=()=>ze(Bt,"scrollEnd",th)||fr(!0),Ar=s=>Er[s]&&Er[s].map(t=>t())||Dy,Si=[],Td=s=>{for(let t=0;t<Si.length;t+=5)(!s||Si[t+4]&&Si[t+4].query===s)&&(Si[t].style.cssText=Si[t+1],Si[t].getBBox&&Si[t].setAttribute("transform",Si[t+2]||""),Si[t+3].uncache=1)},eh=(s,t)=>{let e;for(ti=0;ti<Xt.length;ti++)e=Xt[ti],e&&(!t||e._ctx===t)&&(s?e.kill(1):e.revert(!0,!0));t&&Td(t),t||Ar("revert")},Cd=(s,t)=>{Yt.cache++,(t||!ei)&&Yt.forEach(e=>ri(e)&&e.cacheID++&&(e.rec=0)),Mi(s)&&($t.history.scrollRestoration=Zc=s)},ei,xr=0,rf,zy=()=>{if(rf!==xr){let s=rf=xr;requestAnimationFrame(()=>s===xr&&fr(!0))}},fr=(s,t)=>{if(Vi&&!s){Ie(Bt,"scrollEnd",th);return}ei=Bt.isRefreshing=!0,Yt.forEach(i=>ri(i)&&++i.cacheID&&(i.rec=i()));let e=Ar("refreshInit");dd&&Bt.sort(),t||eh(),Yt.forEach(i=>{ri(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Xt.slice(0).forEach(i=>i.refresh()),Xt.forEach((i,n)=>{if(i._subPinOffset&&i.pin){let r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Xt.forEach(i=>{let n=wn(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>n)&&i.setPositions(i.start,Math.max(i.start+1,n),!0)}),e.forEach(i=>i&&i.render&&i.render(-1)),Yt.forEach(i=>{ri(i)&&(i.smooth&&requestAnimationFrame(()=>i.target.style.scrollBehavior="smooth"),i.rec&&i(i.rec))}),Cd(Zc,1),La.pause(),xr++,ei=2,Cn(2),Xt.forEach(i=>ri(i.vars.onRefresh)&&i.vars.onRefresh(i)),ei=Bt.isRefreshing=!1,Ar("refresh")},Sc=0,va=1,to,Cn=s=>{if(!ei||s===2){Bt.isUpdating=!0,to&&to.update(0);let t=Xt.length,e=ii(),i=e-Vl>=50,n=t&&Xt[0].scroll();if(va=Sc>n?-1:1,ei||(Sc=n),i&&(Vi&&!Za&&e-Vi>200&&(Vi=0,Ar("scrollEnd")),ma=Vl,Vl=e),va<0){for(ti=t;ti-- >0;)Xt[ti]&&Xt[ti].update(0,i);va=1}else for(ti=0;ti<t;ti++)Xt[ti]&&Xt[ti].update(0,i);Bt.isUpdating=!1}ho=0},Mc=[Sd,Md,Jc,jc,Ni+Qs,Ni+js,Ni+Ks,Ni+Js,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ya=Mc.concat([gr,_r,"boxSizing","max"+xs,"max"+Kc,"position",Ni,Se,Se+Ks,Se+js,Se+Qs,Se+Js]),Iy=(s,t,e)=>{ls(e);let i=s._gsap;if(i.spacerIsNative)ls(i.spacerState);else if(s._gsap.swappedIn){let n=t.parentNode;n&&(n.insertBefore(s,t),n.removeChild(t))}s._gsap.swappedIn=!1},Xl=(s,t,e,i)=>{if(!s._gsap.swappedIn){let n=Mc.length,r=t.style,o=s.style,a;for(;n--;)a=Mc[n],r[a]=e[a];r.position=e.position==="absolute"?"absolute":"relative",e.display==="inline"&&(r.display="inline-block"),o[Jc]=o[jc]="auto",r.flexBasis=e.flexBasis||"auto",r.overflow="visible",r.boxSizing="border-box",r[gr]=yc(s,ni)+Fe,r[_r]=yc(s,Ce)+Fe,r[Se]=o[Ni]=o[Md]=o[Sd]="0",ls(i),o[gr]=o["max"+xs]=e[gr],o[_r]=o["max"+Kc]=e[_r],o[Se]=e[Se],s.parentNode!==t&&(s.parentNode.insertBefore(t,s),t.appendChild(s)),s._gsap.swappedIn=!0}},Oy=/([A-Z])/g,ls=s=>{if(s){let t=s.t.style,e=s.length,i=0,n,r;for((s.t._gsap||Mt.core.getCache(s.t)).uncache=1;i<e;i+=2)r=s[i+1],n=s[i],r?t[n]=r:t[n]&&t.removeProperty(n.replace(Oy,"-$1").toLowerCase())}},aa=s=>{let t=ya.length,e=s.style,i=[],n=0;for(;n<t;n++)i.push(ya[n],e[ya[n]]);return i.t=s,i},Ny=(s,t,e)=>{let i=[],n=s.length,r=e?8:0,o;for(;r<n;r+=2)o=s[r],i.push(o,o in t?t[o]:s[r+1]);return i.t=s.t,i},ba={left:0,top:0},sf=(s,t,e,i,n,r,o,a,l,c,h,u,f,m)=>{ri(s)&&(s=s(a)),Mi(s)&&s.substr(0,3)==="max"&&(s=u+(s.charAt(4)==="="?_a("0"+s.substr(3),e):0));let g=f?f.time():0,p,d,_;if(f&&f.seek(0),isNaN(s)||(s=+s),ga(s))f&&(s=Mt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,s)),o&&xa(o,e,i,!0);else{ri(t)&&(t=t(a));let S=(s||"0").split(" "),y,v,b,A;_=ci(t,a)||fe,y=bn(_)||{},(!y||!y.left&&!y.top)&&Fi(_).display==="none"&&(A=_.style.display,_.style.display="block",y=bn(_),A?_.style.display=A:_.style.removeProperty("display")),v=_a(S[0],y[i.d]),b=_a(S[1]||"0",e),s=y[i.p]-l[i.p]-c+v+n-b,o&&xa(o,b,i,e-b<20||o._isStart&&b>20),e-=e-b}if(m&&(a[m]=s||-.001,s<0&&(s=0)),r){let S=s+e,y=r._isStart;p="scroll"+i.d2,xa(r,S,i,y&&S>20||!y&&(h?Math.max(fe[p],Zi[p]):r.parentNode[p])<=S+1),h&&(l=bn(o),h&&(r.style[i.op.p]=l[i.op.p]-i.op.m-r._offset+Fe))}return f&&_&&(p=bn(_),f.seek(u),d=bn(_),f._caScrollDist=p[i.p]-d[i.p],s=s/f._caScrollDist*u),f&&f.seek(g),f?s:Math.round(s)},Fy=/(webkit|moz|length|cssText|inset)/i,of=(s,t,e,i)=>{if(s.parentNode!==t){let n=s.style,r,o;if(t===fe){s._stOrig=n.cssText,o=Fi(s);for(r in o)!+r&&!Fy.test(r)&&o[r]&&typeof n[r]=="string"&&r!=="0"&&(n[r]=o[r]);n.top=e,n.left=i}else n.cssText=s._stOrig;Mt.core.getCache(s).uncache=1,t.appendChild(s)}},Ed=(s,t,e)=>{let i=t,n=i;return r=>{let o=Math.round(s());return o!==i&&o!==n&&Math.abs(o-i)>3&&Math.abs(o-n)>3&&(r=o,e&&e()),n=i,i=r,r}},la=(s,t,e)=>{let i={};i[t.p]="+="+e,Mt.set(s,i)},af=(s,t)=>{let e=qn(s,t),i="_scroll"+t.p2,n=(r,o,a,l,c)=>{let h=n.tween,u=o.onComplete,f={};a=a||e();let m=Ed(e,a,()=>{h.kill(),n.tween=0});return c=l&&c||0,l=l||r-a,h&&h.kill(),o[i]=r,o.modifiers=f,f[i]=()=>m(a+l*h.ratio+c*h.ratio*h.ratio),o.onUpdate=()=>{Yt.cache++,Cn()},o.onComplete=()=>{n.tween=0,u&&u.call(h)},h=n.tween=Mt.to(s,o),h};return s[i]=e,e.wheelHandler=()=>n.tween&&n.tween.kill()&&(n.tween=0),Ie(s,"wheel",e.wheelHandler),Bt.isTouch&&Ie(s,"touchmove",e.wheelHandler),n};class Bt{constructor(t,e){Zr||Bt.register(Mt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vc(this),this.init(t,e)}init(t,e){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ks){this.update=this.refresh=this.kill=en;return}t=tf(Mi(t)||ga(t)||t.nodeType?{trigger:t}:t,sa);let{onUpdate:i,toggleClass:n,id:r,onToggle:o,onRefresh:a,scrub:l,trigger:c,pin:h,pinSpacing:u,invalidateOnRefresh:f,anticipatePin:m,onScrubComplete:g,onSnapComplete:p,once:d,snap:_,pinReparent:S,pinSpacer:y,containerAnimation:v,fastScrollEnd:b,preventOverlaps:A}=t,C=t.horizontal||t.containerAnimation&&t.horizontal!==!1?ni:Ce,x=!l&&l!==0,M=ci(t.scroller||$t),L=Mt.core.getCache(M),B=Cr(M),et=("pinType"in t?t.pinType:Hn(M,"pinType")||B&&"fixed")==="fixed",F=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],D=x&&t.toggleActions.split(" "),N="markers"in t?t.markers:sa.markers,X=B?0:parseFloat(Fi(M)["border"+C.p2+xs])||0,E=this,k=t.onRefreshInit&&(()=>t.onRefreshInit(E)),it=Ey(M,B,C),rt=Ay(M,B),G=0,H=0,K=0,j=qn(M,C),lt,$,Nt,gt,Pt,ot,Dt,wt,Lt,qt,V,ee,le,Ft,Wt,Pe,ie,P,w,U,Q,ct,dt,zt,ht,J,Ct,St,yt,Et,Tt,_t,Zt,Kt,R,q,st,mt,bt;if(E._startClamp=E._endClamp=!1,E._dir=C,m*=45,E.scroller=M,E.scroll=v?v.time.bind(v):j,gt=j(),E.vars=t,e=e||t.animation,"refreshPriority"in t&&(dd=1,t.refreshPriority===-9999&&(to=E)),L.tweenScroll=L.tweenScroll||{top:af(M,Ce),left:af(M,ni)},E.tweenTo=lt=L.tweenScroll[C.p],E.scrubDuration=at=>{Zt=ga(at)&&at,Zt?_t?_t.duration(at):_t=Mt.to(e,{ease:"expo",totalProgress:"+=0",duration:Zt,paused:!0,onComplete:()=>g&&g(E)}):(_t&&_t.progress(1).kill(),_t=0)},e&&(e.vars.lazy=!1,e._initted&&!E.isReverted||e.vars.immediateRender!==!1&&t.immediateRender!==!1&&e.duration()&&e.render(0,!0,!0),E.animation=e.pause(),e.scrollTrigger=E,E.scrubDuration(l),Et=0,r||(r=e.vars.id)),_&&((!ar(_)||_.push)&&(_={snapTo:_}),"scrollBehavior"in fe.style&&Mt.set(B?[fe,Zi]:M,{scrollBehavior:"auto"}),Yt.forEach(at=>ri(at)&&at.target===(B?he.scrollingElement||Zi:M)&&(at.smooth=!1)),Nt=ri(_.snapTo)?_.snapTo:_.snapTo==="labels"?Ly(e):_.snapTo==="labelsDirectional"?Ry(e):_.directional!==!1?(at,Z)=>Qc(_.snapTo)(at,ii()-H<500?0:Z.direction):Mt.utils.snap(_.snapTo),Kt=_.duration||{min:.1,max:2},Kt=ar(Kt)?ts(Kt.min,Kt.max):ts(Kt,Kt),R=Mt.delayedCall(_.delay||Zt/2||.1,()=>{let at=j(),Z=ii()-H<500,ft=lt.tween;if((Z||Math.abs(E.getVelocity())<10)&&!ft&&!Za&&G!==at){let nt=(at-ot)/Ft,tt=e&&!x?e.totalProgress():nt,ut=Z?0:(tt-Tt)/(ii()-ma)*1e3||0,At=Mt.utils.clamp(-nt,1-nt,Xr(ut/2)*ut/.185),Qt=nt+(_.inertia===!1?0:At),ne=ts(0,1,Nt(Qt,E)),re=Math.round(ot+ne*Ft),{onStart:te,onInterrupt:T,onComplete:z}=_;if(at<=Dt&&at>=ot&&re!==at){if(ft&&!ft._initted&&ft.data<=Xr(re-at))return;_.inertia===!1&&(At=ne-nt),lt(re,{duration:Kt(Xr(Math.max(Xr(Qt-tt),Xr(ne-tt))*.185/ut/.05||0)),ease:_.ease||"power3",data:Xr(re-at),onInterrupt:()=>R.restart(!0)&&T&&T(E),onComplete:()=>{E.update(),G=j(),Et=Tt=e&&!x?e.totalProgress():E.progress,p&&p(E),z&&z(E)}},at,At*Ft,re-at-At*Ft),te&&te(E,lt.tween)}}else E.isActive&&G!==at&&R.restart(!0)}).pause()),r&&(bc[r]=E),c=E.trigger=ci(c||h!==!0&&h),bt=c&&c._gsap&&c._gsap.stRevert,bt&&(bt=bt(E)),h=h===!0?c:ci(h),Mi(n)&&(n={targets:c,className:n}),h&&(u===!1||u===Ni||(u=!u&&h.parentNode&&h.parentNode.style&&Fi(h.parentNode).display==="flex"?!1:Se),E.pin=h,$=Mt.core.getCache(h),$.spacer?Wt=$.pinState:(y&&(y=ci(y),y&&!y.nodeType&&(y=y.current||y.nativeElement),$.spacerIsNative=!!y,y&&($.spacerState=aa(y))),$.spacer=P=y||he.createElement("div"),P.classList.add("pin-spacer"),r&&P.classList.add("pin-spacer-"+r),$.pinState=Wt=aa(h)),t.force3D!==!1&&Mt.set(h,{force3D:!0}),E.spacer=P=$.spacer,yt=Fi(h),zt=yt[u+C.os2],U=Mt.getProperty(h),Q=Mt.quickSetter(h,C.a,Fe),Xl(h,P,yt),ie=aa(h)),N){ee=ar(N)?tf(N,ef):ef,qt=oa("scroller-start",r,M,C,ee,0),V=oa("scroller-end",r,M,C,ee,0,qt),w=qt["offset"+C.op.d2];let at=ci(Hn(M,"content")||M);wt=this.markerStart=oa("start",r,at,C,ee,w,0,v),Lt=this.markerEnd=oa("end",r,at,C,ee,w,0,v),v&&(mt=Mt.quickSetter([wt,Lt],C.a,Fe)),!et&&!(ln.length&&Hn(M,"fixedMarkers")===!0)&&(Py(B?fe:M),Mt.set([qt,V],{force3D:!0}),J=Mt.quickSetter(qt,C.a,Fe),St=Mt.quickSetter(V,C.a,Fe))}if(v){let at=v.vars.onUpdate,Z=v.vars.onUpdateParams;v.eventCallback("onUpdate",()=>{E.update(0,0,1),at&&at.apply(v,Z||[])})}if(E.previous=()=>Xt[Xt.indexOf(E)-1],E.next=()=>Xt[Xt.indexOf(E)+1],E.revert=(at,Z)=>{if(!Z)return E.kill(!0);let ft=at!==!1||!E.enabled,nt=We;ft!==E.isReverted&&(ft&&(q=Math.max(j(),E.scroll.rec||0),K=E.progress,st=e&&e.progress()),wt&&[wt,Lt,qt,V].forEach(tt=>tt.style.display=ft?"none":"block"),ft&&(We=E,E.update(ft)),h&&(!S||!E.isActive)&&(ft?Iy(h,P,Wt):Xl(h,P,Fi(h),ht)),ft||E.update(ft),We=nt,E.isReverted=ft)},E.refresh=(at,Z,ft,nt)=>{if((We||!E.enabled)&&!Z)return;if(h&&at&&Vi){Ie(Bt,"scrollEnd",th);return}!ei&&k&&k(E),We=E,lt.tween&&(lt.tween.kill(),lt.tween=0),_t&&_t.pause(),f&&e&&e.revert({kill:!1}).invalidate(),E.isReverted||E.revert(!0,!0),E._subPinOffset=!1;let tt=it(),ut=rt(),At=v?v.duration():wn(M,C),Qt=Ft<=.01,ne=0,re=nt||0,te=ar(ft)?ft.end:t.end,T=t.endTrigger||c,z=ar(ft)?ft.start:t.start||(t.start===0||!c?0:h?"0 0":"0 100%"),Y=E.pinnedContainer=t.pinnedContainer&&ci(t.pinnedContainer,E),O=c&&Math.max(0,Xt.indexOf(E))||0,W=O,xt,Rt,kt,Gt,Ot,It,Ut,ce,Ve,Ze,Le,ae,Vt;for(N&&ar(ft)&&(ae=Mt.getProperty(qt,C.p),Vt=Mt.getProperty(V,C.p));W--;)It=Xt[W],It.end||It.refresh(0,1)||(We=E),Ut=It.pin,Ut&&(Ut===c||Ut===h||Ut===Y)&&!It.isReverted&&(Ze||(Ze=[]),Ze.unshift(It),It.revert(!0,!0)),It!==Xt[W]&&(O--,W--);for(ri(z)&&(z=z(E)),z=ju(z,"start",E),ot=sf(z,c,tt,C,j(),wt,qt,E,ut,X,et,At,v,E._startClamp&&"_startClamp")||(h?-.001:0),ri(te)&&(te=te(E)),Mi(te)&&!te.indexOf("+=")&&(~te.indexOf(" ")?te=(Mi(z)?z.split(" ")[0]:"")+te:(ne=_a(te.substr(2),tt),te=Mi(z)?z:(v?Mt.utils.mapRange(0,v.duration(),v.scrollTrigger.start,v.scrollTrigger.end,ot):ot)+ne,T=c)),te=ju(te,"end",E),Dt=Math.max(ot,sf(te||(T?"100% 0":At),T,tt,C,j()+ne,Lt,V,E,ut,X,et,At,v,E._endClamp&&"_endClamp"))||-.001,ne=0,W=O;W--;)It=Xt[W],Ut=It.pin,Ut&&It.start-It._pinPush<=ot&&!v&&It.end>0&&(xt=It.end-(E._startClamp?Math.max(0,It.start):It.start),(Ut===c&&It.start-It._pinPush<ot||Ut===Y)&&isNaN(z)&&(ne+=xt*(1-It.progress)),Ut===h&&(re+=xt));if(ot+=ne,Dt+=ne,E._startClamp&&(E._startClamp+=ne),E._endClamp&&!ei&&(E._endClamp=Dt||-.001,Dt=Math.min(Dt,wn(M,C))),Ft=Dt-ot||(ot-=.01)&&.001,Qt&&(K=Mt.utils.clamp(0,1,Mt.utils.normalize(ot,Dt,q))),E._pinPush=re,wt&&ne&&(xt={},xt[C.a]="+="+ne,Y&&(xt[C.p]="-="+j()),Mt.set([wt,Lt],xt)),h)xt=Fi(h),Gt=C===Ce,kt=j(),ct=parseFloat(U(C.a))+re,!At&&Dt>1&&(Le=(B?he.scrollingElement||Zi:M).style,Le={style:Le,value:Le["overflow"+C.a.toUpperCase()]},B&&Fi(fe)["overflow"+C.a.toUpperCase()]!=="scroll"&&(Le.style["overflow"+C.a.toUpperCase()]="scroll")),Xl(h,P,xt),ie=aa(h),Rt=bn(h,!0),ce=et&&qn(M,Gt?ni:Ce)(),u&&(ht=[u+C.os2,Ft+re+Fe],ht.t=P,W=u===Se?yc(h,C)+Ft+re:0,W&&ht.push(C.d,W+Fe),ls(ht),Y&&Xt.forEach(fn=>{fn.pin===Y&&fn.vars.pinSpacing!==!1&&(fn._subPinOffset=!0)}),et&&j(q)),et&&(Ot={top:Rt.top+(Gt?kt-ot:ce)+Fe,left:Rt.left+(Gt?ce:kt-ot)+Fe,boxSizing:"border-box",position:"fixed"},Ot[gr]=Ot["max"+xs]=Math.ceil(Rt.width)+Fe,Ot[_r]=Ot["max"+Kc]=Math.ceil(Rt.height)+Fe,Ot[Ni]=Ot[Ni+Ks]=Ot[Ni+js]=Ot[Ni+Qs]=Ot[Ni+Js]="0",Ot[Se]=xt[Se],Ot[Se+Ks]=xt[Se+Ks],Ot[Se+js]=xt[Se+js],Ot[Se+Qs]=xt[Se+Qs],Ot[Se+Js]=xt[Se+Js],Pe=Ny(Wt,Ot,S),ei&&j(0)),e?(Ve=e._initted,kl(1),e.render(e.duration(),!0,!0),dt=U(C.a)-ct+Ft+re,Ct=Math.abs(Ft-dt)>1,et&&Ct&&Pe.splice(Pe.length-2,2),e.render(0,!0,!0),Ve||e.invalidate(!0),e.parent||e.totalTime(e.totalTime()),kl(0)):dt=Ft,Le&&(Le.value?Le.style["overflow"+C.a.toUpperCase()]=Le.value:Le.style.removeProperty("overflow-"+C.a));else if(c&&j()&&!v)for(Rt=c.parentNode;Rt&&Rt!==fe;)Rt._pinOffset&&(ot-=Rt._pinOffset,Dt-=Rt._pinOffset),Rt=Rt.parentNode;Ze&&Ze.forEach(fn=>fn.revert(!1,!0)),E.start=ot,E.end=Dt,gt=Pt=ei?q:j(),!v&&!ei&&(gt<q&&j(q),E.scroll.rec=0),E.revert(!1,!0),H=ii(),R&&(G=-1,E.isActive&&j(ot+Ft*K),R.restart(!0)),We=0,e&&x&&(e._initted||st)&&e.progress()!==st&&e.progress(st||0,!0).render(e.time(),!0,!0),(Qt||K!==E.progress||v)&&(e&&!x&&e.totalProgress(v&&ot<-.001&&!K?Mt.utils.normalize(ot,Dt,0):K,!0),E.progress=Qt||(gt-ot)/Ft===K?0:K),h&&u&&(P._pinOffset=Math.round(E.progress*dt)),_t&&_t.invalidate(),isNaN(ae)||(ae-=Mt.getProperty(qt,C.p),Vt-=Mt.getProperty(V,C.p),la(qt,C,ae),la(wt,C,ae-(nt||0)),la(V,C,Vt),la(Lt,C,Vt-(nt||0))),Qt&&!ei&&E.update(),a&&!ei&&!le&&(le=!0,a(E),le=!1)},E.getVelocity=()=>(j()-Pt)/(ii()-ma)*1e3||0,E.endAnimation=()=>{Ns(E.callbackAnimation),e&&(_t?_t.progress(1):e.paused()?x||Ns(e,E.direction<0,1):Ns(e,e.reversed()))},E.labelToScroll=at=>e&&e.labels&&(ot||E.refresh()||ot)+e.labels[at]/e.duration()*Ft||0,E.getTrailing=at=>{let Z=Xt.indexOf(E),ft=E.direction>0?Xt.slice(0,Z).reverse():Xt.slice(Z+1);return(Mi(at)?ft.filter(nt=>nt.vars.preventOverlaps===at):ft).filter(nt=>E.direction>0?nt.end<=ot:nt.start>=Dt)},E.update=(at,Z,ft)=>{if(v&&!ft&&!at)return;let nt=ei===!0?q:E.scroll(),tt=at?0:(nt-ot)/Ft,ut=tt<0?0:tt>1?1:tt||0,At=E.progress,Qt,ne,re,te,T,z,Y,O;if(Z&&(Pt=gt,gt=v?j():nt,_&&(Tt=Et,Et=e&&!x?e.totalProgress():ut)),m&&!ut&&h&&!We&&!ea&&Vi&&ot<nt+(nt-Pt)/(ii()-ma)*m&&(ut=1e-4),ut!==At&&E.enabled){if(Qt=E.isActive=!!ut&&ut<1,ne=!!At&&At<1,z=Qt!==ne,T=z||!!ut!=!!At,E.direction=ut>At?1:-1,E.progress=ut,T&&!We&&(re=ut&&!At?0:ut===1?1:At===1?2:3,x&&(te=!z&&D[re+1]!=="none"&&D[re+1]||D[re],O=e&&(te==="complete"||te==="reset"||te in e))),A&&(z||O)&&(O||l||!e)&&(ri(A)?A(E):E.getTrailing(A).forEach(W=>W.endAnimation())),x||(_t&&!We&&!ea?(_t._dp._time-_t._start!==_t._time&&_t.render(_t._dp._time-_t._start),_t.resetTo?_t.resetTo("totalProgress",ut,e._tTime/e._tDur):(_t.vars.totalProgress=ut,_t.invalidate().restart())):e&&e.totalProgress(ut,!!(We&&(H||at)))),h){if(at&&u&&(P.style[u+C.os2]=zt),!et)Q(Gs(ct+dt*ut));else if(T){if(Y=!at&&ut>At&&Dt+1>nt&&nt+1>=wn(M,C),S)if(!at&&(Qt||Y)){let W=bn(h,!0),xt=nt-ot;of(h,fe,W.top+(C===Ce?xt:0)+Fe,W.left+(C===Ce?0:xt)+Fe)}else of(h,P);ls(Qt||Y?Pe:ie),Ct&&ut<1&&Qt||Q(ct+(ut===1&&!Y?dt:0))}}_&&!lt.tween&&!We&&!ea&&R.restart(!0),n&&(z||d&&ut&&(ut<1||!Gl))&&Ra(n.targets).forEach(W=>W.classList[Qt||d?"add":"remove"](n.className)),i&&!x&&!at&&i(E),T&&!We?(x&&(O&&(te==="complete"?e.pause().totalProgress(1):te==="reset"?e.restart(!0).pause():te==="restart"?e.restart(!0):e[te]()),i&&i(E)),(z||!Gl)&&(o&&z&&Hl(E,o),F[re]&&Hl(E,F[re]),d&&(ut===1?E.kill(!1,1):F[re]=0),z||(re=ut===1?1:3,F[re]&&Hl(E,F[re]))),b&&!Qt&&Math.abs(E.getVelocity())>(ga(b)?b:2500)&&(Ns(E.callbackAnimation),_t?_t.progress(1):Ns(e,te==="reverse"?1:!ut,1))):x&&i&&!We&&i(E)}if(St){let W=v?nt/v.duration()*(v._caScrollDist||0):nt;J(W+(qt._isFlipped?1:0)),St(W)}mt&&mt(-nt/v.duration()*(v._caScrollDist||0))},E.enable=(at,Z)=>{E.enabled||(E.enabled=!0,Ie(M,"resize",Vs),Ie(B?he:M,"scroll",qr),k&&Ie(Bt,"refreshInit",k),at!==!1&&(E.progress=K=0,gt=Pt=G=j()),Z!==!1&&E.refresh())},E.getTween=at=>at&&lt?lt.tween:_t,E.setPositions=(at,Z,ft,nt)=>{if(v){let tt=v.scrollTrigger,ut=v.duration(),At=tt.end-tt.start;at=tt.start+At*at/ut,Z=tt.start+At*Z/ut}E.refresh(!1,!1,{start:Ju(at,ft&&!!E._startClamp),end:Ju(Z,ft&&!!E._endClamp)},nt),E.update()},E.adjustPinSpacing=at=>{if(ht&&at){let Z=ht.indexOf(C.d)+1;ht[Z]=parseFloat(ht[Z])+at+Fe,ht[1]=parseFloat(ht[1])+at+Fe,ls(ht)}},E.disable=(at,Z)=>{if(E.enabled&&(at!==!1&&E.revert(!0,!0),E.enabled=E.isActive=!1,Z||_t&&_t.pause(),q=0,$&&($.uncache=1),k&&ze(Bt,"refreshInit",k),R&&(R.pause(),lt.tween&&lt.tween.kill()&&(lt.tween=0)),!B)){let ft=Xt.length;for(;ft--;)if(Xt[ft].scroller===M&&Xt[ft]!==E)return;ze(M,"resize",Vs),ze(M,"scroll",qr)}},E.kill=(at,Z)=>{E.disable(at,Z),_t&&!Z&&_t.kill(),r&&delete bc[r];let ft=Xt.indexOf(E);ft>=0&&Xt.splice(ft,1),ft===ti&&va>0&&ti--,ft=0,Xt.forEach(nt=>nt.scroller===E.scroller&&(ft=1)),ft||ei||(E.scroll.rec=0),e&&(e.scrollTrigger=null,at&&e.revert({kill:!1}),Z||e.kill()),wt&&[wt,Lt,qt,V].forEach(nt=>nt.parentNode&&nt.parentNode.removeChild(nt)),to===E&&(to=0),h&&($&&($.uncache=1),ft=0,Xt.forEach(nt=>nt.pin===h&&ft++),ft||($.spacer=0)),t.onKill&&t.onKill(E)},Xt.push(E),E.enable(!1,!1),bt&&bt(E),e&&e.add&&!Ft){let at=E.update;E.update=()=>{E.update=at,ot||Dt||E.refresh()},Mt.delayedCall(.01,E.update),Ft=.01,ot=Dt=0}else E.refresh();h&&zy()}static register(t){return Zr||(Mt=t||yd(),vd()&&window.document&&Bt.enable(),Zr=ks),Zr}static defaults(t){if(t)for(let e in t)sa[e]=t[e];return sa}static disable(t,e){ks=0,Xt.forEach(i=>i[e?"kill":"disable"](t)),ze($t,"wheel",qr),ze(he,"scroll",qr),clearInterval(ta),ze(he,"touchcancel",en),ze(fe,"touchstart",en),na(ze,he,"pointerdown,touchstart,mousedown",Ku),na(ze,he,"pointerup,touchend,mouseup",Qu),La.kill(),ia(ze);for(let i=0;i<Yt.length;i+=3)ra(ze,Yt[i],Yt[i+1]),ra(ze,Yt[i],Yt[i+2])}static enable(){if($t=window,he=document,Zi=he.documentElement,fe=he.body,Mt&&(Ra=Mt.utils.toArray,ts=Mt.utils.clamp,vc=Mt.core.context||en,kl=Mt.core.suppressOverwrites||en,Zc=$t.history.scrollRestoration||"auto",Sc=$t.pageYOffset,Mt.core.globals("ScrollTrigger",Bt),fe)){ks=1,xd(),we.register(Mt),Bt.isTouch=we.isTouch,Nn=we.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ie($t,"wheel",qr),fd=[$t,he,Zi,fe],Mt.matchMedia?(Bt.matchMedia=o=>{let a=Mt.matchMedia(),l;for(l in o)a.add(l,o[l]);return a},Mt.addEventListener("matchMediaInit",()=>eh()),Mt.addEventListener("matchMediaRevert",()=>Td()),Mt.addEventListener("matchMedia",()=>{fr(0,1),Ar("matchMedia")}),Mt.matchMedia("(orientation: portrait)",()=>(Wl(),Wl))):console.warn("Requires GSAP 3.11.0 or later"),Wl(),Ie(he,"scroll",qr);let t=fe.style,e=t.borderTopStyle,i=Mt.core.Animation.prototype,n,r;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),t.borderTopStyle="solid",n=bn(fe),Ce.m=Math.round(n.top+Ce.sc())||0,ni.m=Math.round(n.left+ni.sc())||0,e?t.borderTopStyle=e:t.removeProperty("border-top-style"),ta=setInterval(nf,250),Mt.delayedCall(.5,()=>ea=0),Ie(he,"touchcancel",en),Ie(fe,"touchstart",en),na(Ie,he,"pointerdown,touchstart,mousedown",Ku),na(Ie,he,"pointerup,touchend,mouseup",Qu),xc=Mt.utils.checkPrefix("transform"),ya.push(xc),Zr=ii(),La=Mt.delayedCall(.2,fr).pause(),jr=[he,"visibilitychange",()=>{let o=$t.innerWidth,a=$t.innerHeight;he.hidden?($u=o,Zu=a):($u!==o||Zu!==a)&&Vs()},he,"DOMContentLoaded",fr,$t,"load",fr,$t,"resize",Vs],ia(Ie),Xt.forEach(o=>o.enable(0,1)),r=0;r<Yt.length;r+=3)ra(ze,Yt[r],Yt[r+1]),ra(ze,Yt[r],Yt[r+2])}}static config(t){"limitCallbacks"in t&&(Gl=!!t.limitCallbacks);let e=t.syncInterval;e&&clearInterval(ta)||(ta=e)&&setInterval(nf,e),"ignoreMobileResize"in t&&(md=Bt.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(ia(ze)||ia(Ie,t.autoRefreshEvents||"none"),pd=(t.autoRefreshEvents+"").indexOf("resize")===-1)}static scrollerProxy(t,e){let i=ci(t),n=Yt.indexOf(i),r=Cr(i);~n&&Yt.splice(n,r?6:2),e&&(r?ln.unshift($t,e,fe,e,Zi,e):ln.unshift(i,e))}static clearMatchMedia(t){Xt.forEach(e=>e._ctx&&e._ctx.query===t&&e._ctx.kill(!0,!0))}static isInViewport(t,e,i){let n=(Mi(t)?ci(t):t).getBoundingClientRect(),r=n[i?gr:_r]*e||0;return i?n.right-r>0&&n.left+r<$t.innerWidth:n.bottom-r>0&&n.top+r<$t.innerHeight}static positionInViewport(t,e,i){Mi(t)&&(t=ci(t));let n=t.getBoundingClientRect(),r=n[i?gr:_r],o=e==null?r/2:e in Da?Da[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0;return i?(n.left+o)/$t.innerWidth:(n.top+o)/$t.innerHeight}static killAll(t){if(Xt.slice(0).forEach(e=>e.vars.id!=="ScrollSmoother"&&e.kill()),t!==!0){let e=Er.killAll||[];Er={},e.forEach(i=>i())}}}Bt.version="3.12.1";Bt.saveStyles=s=>s?Ra(s).forEach(t=>{if(t&&t.style){let e=Si.indexOf(t);e>=0&&Si.splice(e,5),Si.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Mt.core.getCache(t),vc())}}):Si;Bt.revert=(s,t)=>eh(!s,t);Bt.create=(s,t)=>new Bt(s,t);Bt.refresh=s=>s?Vs():(Zr||Bt.register())&&fr(!0);Bt.update=s=>++Yt.cache&&Cn(s===!0?2:0);Bt.clearScrollMemory=Cd;Bt.maxScroll=(s,t)=>wn(s,t?ni:Ce);Bt.getScrollFunc=(s,t)=>qn(ci(s),t?ni:Ce);Bt.getById=s=>bc[s];Bt.getAll=()=>Xt.filter(s=>s.vars.id!=="ScrollSmoother");Bt.isScrolling=()=>!!Vi;Bt.snapDirectional=Qc;Bt.addEventListener=(s,t)=>{let e=Er[s]||(Er[s]=[]);~e.indexOf(t)||e.push(t)};Bt.removeEventListener=(s,t)=>{let e=Er[s],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};Bt.batch=(s,t)=>{let e=[],i={},n=t.interval||.016,r=t.batchMax||1e9,o=(l,c)=>{let h=[],u=[],f=Mt.delayedCall(n,()=>{c(h,u),h=[],u=[]}).pause();return m=>{h.length||f.restart(!0),h.push(m.trigger),u.push(m),r<=h.length&&f.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&ri(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return ri(r)&&(r=r(),Ie(Bt,"refresh",()=>r=t.batchMax())),Ra(s).forEach(l=>{let c={};for(a in i)c[a]=i[a];c.trigger=l,e.push(Bt.create(c))}),e};let lf=(s,t,e,i)=>(t>i?s(i):t<0&&s(0),e>i?(i-t)/(e-t):e<0?t/(t-e):1),Sa=(s,t)=>{t===!0?s.style.removeProperty("touch-action"):s.style.touchAction=t===!0?"auto":t?"pan-"+t+(we.isTouch?" pinch-zoom":""):"none",s===Zi&&Sa(fe,t)},ca={auto:1,scroll:1},By=({event:s,target:t,axis:e})=>{let i=(s.changedTouches?s.changedTouches[0]:s).target,n=i._gsap||Mt.core.getCache(i),r=ii(),o;if(!n._isScrollT||r-n._isScrollT>2e3){for(;i&&i!==fe&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(ca[(o=Fi(i)).overflowY]||ca[o.overflowX]));)i=i.parentNode;n._isScroll=i&&i!==t&&!Cr(i)&&(ca[(o=Fi(i)).overflowY]||ca[o.overflowX]),n._isScrollT=r}(n._isScroll||e==="x")&&(s.stopPropagation(),s._gsapAllow=!0)},Ad=(s,t,e,i)=>we.create({target:s,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&By,onPress:i,onDrag:i,onScroll:i,onEnable:()=>e&&Ie(he,we.eventTypes[0],hf,!1,!0),onDisable:()=>ze(he,we.eventTypes[0],hf,!0)}),Uy=/(input|label|select|textarea)/i,cf,hf=s=>{let t=Uy.test(s.target.tagName);(t||cf)&&(s._gsapAllow=!0,cf=t)},ky=s=>{ar(s)||(s={}),s.preventDefault=s.isNormalizer=s.allowClicks=!0,s.type||(s.type="wheel,touch"),s.debounce=!!s.debounce,s.id=s.id||"normalizer";let{normalizeScrollX:t,momentum:e,allowNestedScroll:i,onRelease:n}=s,r,o,a=ci(s.target)||Zi,l=Mt.core.globals().ScrollSmoother,c=l&&l.get(),h=Nn&&(s.content&&ci(s.content)||c&&s.content!==!1&&!c.smooth()&&c.content()),u=qn(a,Ce),f=qn(a,ni),m=1,g=(we.isTouch&&$t.visualViewport?$t.visualViewport.scale*$t.visualViewport.width:$t.outerWidth)/$t.innerWidth,p=0,d=ri(e)?()=>e(r):()=>e||2.8,_,S,y=Ad(a,s.type,!0,i),v=()=>S=!1,b=en,A=en,C=()=>{o=wn(a,Ce),A=ts(Nn?1:0,o),t&&(b=ts(0,wn(a,ni))),_=xr},x=()=>{h._gsap.y=Gs(parseFloat(h._gsap.y)+u.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},M=()=>{if(S){requestAnimationFrame(v);let N=Gs(r.deltaY/2),X=A(u.v-N);if(h&&X!==u.v+u.offset){u.offset=X-u.v;let E=Gs((parseFloat(h&&h._gsap.y)||0)-u.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+E+", 0, 1)",h._gsap.y=E+"px",u.cacheID=Yt.cache,Cn()}return!0}u.offset&&x(),S=!0},L,B,et,F,D=()=>{C(),L.isActive()&&L.vars.scrollY>o&&(u()>o?L.progress(1)&&u(o):L.resetTo("scrollY",o))};return h&&Mt.set(h,{y:"+=0"}),s.ignoreCheck=N=>Nn&&N.type==="touchmove"&&M()||m>1.05&&N.type!=="touchstart"||r.isGesturing||N.touches&&N.touches.length>1,s.onPress=()=>{S=!1;let N=m;m=Gs(($t.visualViewport&&$t.visualViewport.scale||1)/g),L.pause(),N!==m&&Sa(a,m>1.01?!0:t?!1:"x"),B=f(),et=u(),C(),_=xr},s.onRelease=s.onGestureStart=(N,X)=>{if(u.offset&&x(),!X)F.restart(!0);else{Yt.cache++;let E=d(),k,it;t&&(k=f(),it=k+E*.05*-N.velocityX/.227,E*=lf(f,k,it,wn(a,ni)),L.vars.scrollX=b(it)),k=u(),it=k+E*.05*-N.velocityY/.227,E*=lf(u,k,it,wn(a,Ce)),L.vars.scrollY=A(it),L.invalidate().duration(E).play(.01),(Nn&&L.vars.scrollY>=o||k>=o-1)&&Mt.to({},{onUpdate:D,duration:E})}n&&n(N)},s.onWheel=()=>{L._ts&&L.pause(),ii()-p>1e3&&(_=0,p=ii())},s.onChange=(N,X,E,k,it)=>{if(xr!==_&&C(),X&&t&&f(b(k[2]===X?B+(N.startX-N.x):f()+X-k[1])),E){u.offset&&x();let rt=it[2]===E,G=rt?et+N.startY-N.y:u()+E-it[1],H=A(G);rt&&G!==H&&(et+=H-G),u(H)}(E||X)&&Cn()},s.onEnable=()=>{Sa(a,t?!1:"x"),Bt.addEventListener("refresh",D),Ie($t,"resize",D),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=f.smooth=!1),y.enable()},s.onDisable=()=>{Sa(a,!0),ze($t,"resize",D),Bt.removeEventListener("refresh",D),y.kill()},s.lockAxis=s.lockAxis!==!1,r=new we(s),r.iOS=Nn,Nn&&!u()&&u(1),Nn&&Mt.ticker.add(en),F=r._dc,L=Mt.to(r,{ease:"power4",paused:!0,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ed(u,u(),()=>L.pause())},onUpdate:Cn,onComplete:F.vars.onComplete}),r};Bt.sort=s=>Xt.sort(s||((t,e)=>(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)));Bt.observe=s=>new we(s);Bt.normalizeScroll=s=>{if(typeof s>"u")return bi;if(s===!0&&bi)return bi.enable();if(s===!1)return bi&&bi.kill();let t=s instanceof we?s:ky(s);return bi&&bi.target===t.target&&bi.kill(),Cr(t.target)&&(bi=t),t};Bt.core={_getVelocityProp:_c,_inputObserver:Ad,_scrollers:Yt,_proxies:ln,bridge:{ss:()=>{Vi||Ar("scrollStart"),Vi=ii()},ref:()=>We}};yd()&&Mt.registerPlugin(Bt);function vn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Pd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vs={duration:.5,overwrite:!1,delay:0},ih,Ye,ge,Bi=1e8,oe=1/Bi,wc=Math.PI*2,Gy=wc/4,Vy=0,Ld=Math.sqrt,Hy=Math.cos,Wy=Math.sin,Ne=function(t){return typeof t=="string"},_e=function(t){return typeof t=="function"},En=function(t){return typeof t=="number"},nh=function(t){return typeof t>"u"},hn=function(t){return typeof t=="object"},di=function(t){return t!==!1},rh=function(){return typeof window<"u"},ha=function(t){return _e(t)||Ne(t)},Rd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$e=Array.isArray,Tc=/(?:-?\.?\d|\.)+/gi,Dd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zd=/[+-]=-?[.\d]+/,Id=/[^,'"\[\]\s]+/gi,Xy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,de,zi,Cc,sh,Li={},za={},Od,Nd=function(t){return(za=Pr(t,Li))&&gi},oh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ia=function(t,e){return!e&&console.warn(t)},Fd=function(t,e){return t&&(Li[t]=e)&&za&&(za[t]=e)||Li},uo=function(){return 0},qy={suppressEvents:!0,isStart:!0,kill:!1},Ma={suppressEvents:!0,kill:!1},Yy={suppressEvents:!0},ah={},Wn=[],Ec={},Bd,wi={},Yl={},uf=30,wa=[],lh="",ch=function(t){var e=t[0],i,n;if(hn(e)||_e(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=wa.length;n--&&!wa[n].targetTest(e););i=wa[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new lp(t[n],i)))||t.splice(n,1);return t},vr=function(t){return t._gsap||ch(Ui(t))[0]._gsap},Ud=function(t,e,i){return(i=t[e])&&_e(i)?t[e]():nh(i)&&t.getAttribute&&t.getAttribute(e)||i},pi=function(t,e){return(t=t.split(",")).forEach(e)||t},ve=function(t){return Math.round(t*1e5)/1e5||0},Be=function(t){return Math.round(t*1e7)/1e7||0},cs=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},$y=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},Oa=function(){var t=Wn.length,e=Wn.slice(0),i,n;for(Ec={},Wn.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},kd=function(t,e,i,n){Wn.length&&!Ye&&Oa(),t.render(e,i,n||Ye&&e<0&&(t._initted||t._startAt)),Wn.length&&!Ye&&Oa()},Gd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Id).length<2?e:Ne(t)?t.trim():t},Vd=function(t){return t},Hi=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Zy=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},Pr=function(t,e){for(var i in e)t[i]=e[i];return t},ff=function s(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=hn(e[i])?s(t[i]||(t[i]={}),e[i]):e[i]);return t},Na=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},eo=function(t){var e=t.parent||de,i=t.keyframes?Zy($e(t.keyframes)):Hi;if(di(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},jy=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Hd=function(t,e,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},ja=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=e._prev,o=e._next;r?r._next=o:t[i]===e&&(t[i]=o),o?o._prev=r:t[n]===e&&(t[n]=r),e._next=e._prev=e.parent=null},Yn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},yr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Jy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ac=function(t,e,i,n){return t._startAt&&(Ye?t._startAt.revert(Ma):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},Ky=function s(t){return!t||t._ts&&s(t.parent)},df=function(t){return t._repeat?ys(t._tTime,t=t.duration()+t._rDelay)*t:0},ys=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},Fa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ja=function(t){return t._end=Be(t._start+(t._tDur/Math.abs(t._ts||t._rts||oe)||0))},Ka=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Be(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ja(t),i._dirty||yr(i,t)),t},Wd=function(t,e){var i;if((e._time||e._initted&&!e._dur)&&(i=Fa(t.rawTime(),e),(!e._dur||Mo(0,e.totalDuration(),i)-e._tTime>oe)&&e.render(i,!0)),yr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-oe}},sn=function(t,e,i,n){return e.parent&&Yn(e),e._start=Be((En(i)?i:i||t!==de?Di(t,i,e):t._time)+e._delay),e._end=Be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Hd(t,e,"_first","_last",t._sort?"_start":0),Pc(e)||(t._recent=e),n||Wd(t,e),t._ts<0&&Ka(t,t._tTime),t},Xd=function(t,e){return(Li.ScrollTrigger||oh("scrollTrigger",e))&&Li.ScrollTrigger.create(e,t)},qd=function(t,e,i,n,r){if(uh(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!Ye&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Bd!==Ci.frame)return Wn.push(t),t._lazy=[r,n],1},Qy=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Pc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},tb=function(t,e,i,n){var r=t.ratio,o=e<0||!e&&(!t._start&&Qy(t)&&!(!t._initted&&Pc(t))||(t._ts<0||t._dp._ts<0)&&!Pc(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Mo(0,t._tDur,e),h=ys(l,a),t._yoyo&&h&1&&(o=1-o),h!==ys(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Ye||n||t._zTime===oe||!e&&t._zTime){if(!t._initted&&qd(t,e,n,i,l))return;for(u=t._zTime,t._zTime=e||(i?oe:0),i||(i=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Ac(t,e,i,!0),t._onUpdate&&!i&&ki(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&ki(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Yn(t,1),!i&&!Ye&&(ki(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},eb=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},bs=function(t,e,i,n){var r=t._repeat,o=Be(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Be(o*(r+1)+t._rDelay*r):o,a>0&&!n&&Ka(t,t._tTime=t._tDur*a),t.parent&&Ja(t),i||yr(t.parent,t),t},pf=function(t){return t instanceof si?yr(t):bs(t,t._dur)},ib={_start:0,endTime:uo,totalDuration:uo},Di=function s(t,e,i){var n=t.labels,r=t._recent||ib,o=t.duration()>=Bi?r.endTime(!1):t._dur,a,l,c;return Ne(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:i).totalDuration()/100:1)):a<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*($e(i)?i[0]:i).totalDuration()),a>1?s(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},io=function(t,e,i){var n=En(e[1]),r=(n?2:1)+(t<2?0:1),o=e[r],a,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=di(l.vars.inherit)&&l.parent;o.immediateRender=di(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Me(e[0],o,e[r+1])},Zn=function(t,e){return t||t===0?e(t):e},Mo=function(t,e,i){return i<t?t:i>e?e:i},qe=function(t,e){return!Ne(t)||!(e=Xy.exec(t))?"":e[1]},nb=function(t,e,i){return Zn(i,function(n){return Mo(t,e,n)})},Lc=[].slice,Yd=function(t,e){return t&&hn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&hn(t[0]))&&!t.nodeType&&t!==zi},rb=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var r;return Ne(n)&&!e||Yd(n,1)?(r=i).push.apply(r,Ui(n)):i.push(n)})||i},Ui=function(t,e,i){return ge&&!e&&ge.selector?ge.selector(t):Ne(t)&&!i&&(Cc||!Ss())?Lc.call((e||sh).querySelectorAll(t),0):$e(t)?rb(t,i):Yd(t)?Lc.call(t,0):t?[t]:[]},Rc=function(t){return t=Ui(t)[0]||Ia("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Ui(e,i.querySelectorAll?i:i===t?Ia("Invalid scope")||sh.createElement("div"):t)}},$d=function(t){return t.sort(function(){return .5-Math.random()})},Zd=function(t){if(_e(t))return t;var e=hn(t)?t:{each:t},i=br(e.ease),n=e.from||0,r=parseFloat(e.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=e.axis,h=n,u=n;return Ne(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],u=n[1]),function(f,m,g){var p=(g||e).length,d=o[p],_,S,y,v,b,A,C,x,M;if(!d){if(M=e.grid==="auto"?0:(e.grid||[1,Bi])[1],!M){for(C=-Bi;C<(C=g[M++].getBoundingClientRect().left)&&M<p;);M--}for(d=o[p]=[],_=l?Math.min(M,p)*h-.5:n%M,S=M===Bi?0:l?p*u/M-.5:n/M|0,C=0,x=Bi,A=0;A<p;A++)y=A%M-_,v=S-(A/M|0),d[A]=b=c?Math.abs(c==="y"?v:y):Ld(y*y+v*v),b>C&&(C=b),b<x&&(x=b);n==="random"&&$d(d),d.max=C-x,d.min=x,d.v=p=(parseFloat(e.amount)||parseFloat(e.each)*(M>p?p-1:c?c==="y"?p/M:M:Math.max(M,p/M))||0)*(n==="edges"?-1:1),d.b=p<0?r-p:r,d.u=qe(e.amount||e.each)||0,i=i&&p<0?sp(i):i}return p=(d[f]-d.min)/d.max||0,Be(d.b+(i?i(p):p)*d.v)+d.u}},Dc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=Be(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(En(i)?0:qe(i))}},jd=function(t,e){var i=$e(t),n,r;return!i&&hn(t)&&(n=i=t.radius||Bi,t.values?(t=Ui(t.values),(r=!En(t[0]))&&(n*=n)):t=Dc(t.increment)),Zn(e,i?_e(t)?function(o){return r=t(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Bi,h=0,u=t.length,f,m;u--;)r?(f=t[u].x-a,m=t[u].y-l,f=f*f+m*m):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!n||c<=n?t[h]:o,r||h===o||En(o)?h:h+qe(o)}:Dc(t))},Jd=function(t,e,i,n){return Zn($e(t)?!e:i===!0?!!(i=0):!n,function(){return $e(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},sb=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(r,o){return o(r)},n)}},ob=function(t,e){return function(i){return t(parseFloat(i))+(e||qe(i))}},ab=function(t,e,i){return Qd(t,e,0,1,i)},Kd=function(t,e,i){return Zn(i,function(n){return t[~~e(n)]})},lb=function s(t,e,i){var n=e-t;return $e(t)?Kd(t,s(0,t.length),e):Zn(i,function(r){return(n+(r-t)%n)%n+t})},cb=function s(t,e,i){var n=e-t,r=n*2;return $e(t)?Kd(t,s(0,t.length-1),e):Zn(i,function(o){return o=(r+(o-t)%r)%r||0,t+(o>n?r-o:o)})},fo=function(t){for(var e=0,i="",n,r,o,a;~(n=t.indexOf("random(",e));)o=t.indexOf(")",n),a=t.charAt(n+7)==="[",r=t.substr(n+7,o-n-7).match(a?Id:Tc),i+=t.substr(e,n-e)+Jd(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return i+t.substr(e,t.length-e)},Qd=function(t,e,i,n,r){var o=e-t,a=n-i;return Zn(r,function(l){return i+((l-t)/o*a||0)})},hb=function s(t,e,i,n){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var o=Ne(t),a={},l,c,h,u,f;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if($e(t)&&!$e(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(g){g*=u;var p=Math.min(f,~~g);return h[p](g-p)},i=e}else n||(t=Pr($e(t)?[]:{},t));if(!h){for(l in e)hh.call(a,t,l,"get",e[l]);r=function(g){return ph(g,a)||(o?t.p:t)}}}return Zn(i,r)},mf=function(t,e,i){var n=t.labels,r=Bi,o,a,l;for(o in n)a=n[o]-e,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ki=function(t,e,i){var n=t.vars,r=n[e],o=ge,a=t._ctx,l,c,h;if(r)return l=n[e+"Params"],c=n.callbackScope||t,i&&Wn.length&&Oa(),a&&(ge=a),h=l?r.apply(c,l):r.call(c),ge=o,h},Hs=function(t){return Yn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ye),t.progress()<1&&ki(t,"onInterrupt"),t},is,tp=[],ep=function(t){if(rh()&&t){t=!t.name&&t.default||t;var e=t.name,i=_e(t),n=e&&!i&&t.init?function(){this._props=[]}:t,r={init:uo,render:ph,add:hh,kill:Cb,modifier:Tb,rawVars:0},o={targetTest:0,get:0,getSetter:dh,aliases:{},register:0};if(Ss(),t!==n){if(wi[e])return;Hi(n,Hi(Na(t,r),o)),Pr(n.prototype,Pr(r,Na(t,o))),wi[n.prop=e]=n,t.targetTest&&(wa.push(n),ah[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Fd(e,n),t.register&&t.register(gi,n,mi)}else t&&tp.push(t)},se=255,Ws={aqua:[0,se,se],lime:[0,se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,se],navy:[0,0,128],white:[se,se,se],olive:[128,128,0],yellow:[se,se,0],orange:[se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[se,0,0],pink:[se,192,203],cyan:[0,se,se],transparent:[se,se,se,0]},$l=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*se+.5|0},ip=function(t,e,i){var n=t?En(t)?[t>>16,t>>8&se,t&se]:0:Ws.black,r,o,a,l,c,h,u,f,m,g;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ws[t])n=Ws[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&se,n&se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&se,t&se]}else if(t.substr(0,3)==="hsl"){if(n=g=t.match(Tc),!e)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,n.length>3&&(n[3]*=1),n[0]=$l(l+1/3,r,o),n[1]=$l(l,r,o),n[2]=$l(l-1/3,r,o);else if(~t.indexOf("="))return n=t.match(Dd),i&&n.length<4&&(n[3]=1),n}else n=t.match(Tc)||Ws.transparent;n=n.map(Number)}return e&&!g&&(r=n[0]/se,o=n[1]/se,a=n[2]/se,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?l=c=0:(m=u-f,c=h>.5?m/(2-u-f):m/(u+f),l=u===r?(o-a)/m+(o<a?6:0):u===o?(a-r)/m+2:(r-o)/m+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},np=function(t){var e=[],i=[],n=-1;return t.split(Xn).forEach(function(r){var o=r.match(es)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},gf=function(t,e,i){var n="",r=(t+n).match(Xn),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(f){return(f=ip(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=np(t),l=i.c,l.join(n)!==h.c.join(n)))for(c=t.replace(Xn,"1").split(es),u=c.length-1;a<u;a++)n+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=t.split(Xn),u=c.length-1;a<u;a++)n+=c[a]+r[a];return n+c[u]},Xn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ws)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),ub=/hsl[a]?\(/,rp=function(t){var e=t.join(" "),i;if(Xn.lastIndex=0,Xn.test(e))return i=ub.test(e),t[1]=gf(t[1],i),t[0]=gf(t[0],i,np(t[1])),!0},po,Ci=function(){var s=Date.now,t=500,e=33,i=s(),n=i,r=1e3/240,o=r,a=[],l,c,h,u,f,m,g=function p(d){var _=s()-n,S=d===!0,y,v,b,A;if(_>t&&(i+=_-e),n+=_,b=n-i,y=b-o,(y>0||S)&&(A=++u.frame,f=b-u.time*1e3,u.time=b=b/1e3,o+=y+(y>=r?4:r-y),v=1),S||(l=c(p)),v)for(m=0;m<a.length;m++)a[m](b,f,A,d)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(d){return f/(1e3/(d||60))},wake:function(){Od&&(!Cc&&rh()&&(zi=Cc=window,sh=zi.document||{},Li.gsap=gi,(zi.gsapVersions||(zi.gsapVersions=[])).push(gi.version),Nd(za||zi.GreenSockGlobals||!zi.gsap&&zi||{}),h=zi.requestAnimationFrame,tp.forEach(ep)),l&&u.sleep(),c=h||function(d){return setTimeout(d,o-u.time*1e3+1|0)},po=1,g(2))},sleep:function(){(h?zi.cancelAnimationFrame:clearTimeout)(l),po=0,c=uo},lagSmoothing:function(d,_){t=d||1/0,e=Math.min(_||33,t)},fps:function(d){r=1e3/(d||240),o=u.time*1e3+r},add:function(d,_,S){var y=_?function(v,b,A,C){d(v,b,A,C),u.remove(y)}:d;return u.remove(d),a[S?"unshift":"push"](y),Ss(),y},remove:function(d,_){~(_=a.indexOf(d))&&a.splice(_,1)&&m>=_&&m--},_listeners:a},u}(),Ss=function(){return!po&&Ci.wake()},Jt={},fb=/^[\d.\-M][\d.\-,\s]/,db=/["']/g,pb=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],r=1,o=i.length,a,l,c;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[n]=isNaN(c)?c.replace(db,"").trim():+c,n=l.substr(a+1).trim();return e},mb=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},gb=function(t){var e=(t+"").split("("),i=Jt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[pb(e[1])]:mb(t).split(",").map(Gd)):Jt._CE&&fb.test(t)?Jt._CE("",t):i},sp=function(t){return function(e){return 1-t(1-e)}},op=function s(t,e){for(var i=t._first,n;i;)i instanceof si?s(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?s(i.timeline,e):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=e)),i=i._next},br=function(t,e){return t&&(_e(t)?t:Jt[t]||gb(t))||e},Lr=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:n},o;return pi(t,function(a){Jt[a]=Li[a]=r,Jt[o=a.toLowerCase()]=i;for(var l in r)Jt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Jt[a+"."+l]=r[l]}),r},ap=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Zl=function s(t,e,i){var n=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),o=r/wc*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*Wy((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:ap(a);return r=wc/r,l.config=function(c,h){return s(t,c,h)},l},jl=function s(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:ap(i);return n.config=function(r){return s(t,r)},n};pi("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Lr(s+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Jt.Linear.easeNone=Jt.none=Jt.Linear.easeIn;Lr("Elastic",Zl("in"),Zl("out"),Zl());(function(s,t){var e=1/t,i=2*e,n=2.5*e,r=function(a){return a<e?s*a*a:a<i?s*Math.pow(a-1.5/t,2)+.75:a<n?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Lr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Lr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Lr("Circ",function(s){return-(Ld(1-s*s)-1)});Lr("Sine",function(s){return s===1?1:-Hy(s*Gy)+1});Lr("Back",jl("in"),jl("out"),jl());Jt.SteppedEase=Jt.steps=Li.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),r=e?1:0,o=1-oe;return function(a){return((n*Mo(0,o,a)|0)+r)*i}}};vs.ease=Jt["quad.out"];pi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return lh+=s+","+s+"Params,"});var lp=function(t,e){this.id=Vy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ud,this.set=e?e.getSetter:dh},mo=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,bs(this,+e.duration,1,1),this.data=e.data,ge&&(this._ctx=ge,ge.data.push(this)),po||Ci.wake()}var t=s.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(Ss(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ka(this,i),!r._dp||r.parent||Wd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&sn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===oe||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),kd(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+df(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+df(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?ys(this._tTime,r)+1:1},t.timeScale=function(i){if(!arguments.length)return this._rts===-oe?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?Fa(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-oe?0:this._rts,this.totalTime(Mo(-Math.abs(this._delay),this._tDur,n),!0),Ja(this),Jy(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ss(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==oe&&(this._tTime-=oe)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&sn(n,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(di(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fa(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=Yy);var n=Ye;return Ye=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ye=n,this},t.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(n._ts||1),n=n._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,pf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,pf(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(Di(this,i),di(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,di(n))},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-oe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-oe,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-oe)},t.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this;return new Promise(function(r){var o=_e(i)?i:Vd,a=function(){var c=n.then;n.then=null,_e(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=c),r(o),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},t.kill=function(){Hs(this)},s}();Hi(mo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-oe,_prom:0,_ps:!1,_rts:1});var si=function(s){Pd(t,s);function t(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=di(i.sortChildren),de&&sn(i.parent||de,vn(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Xd(vn(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(n,r,o){return io(0,arguments,this),this},e.from=function(n,r,o){return io(1,arguments,this),this},e.fromTo=function(n,r,o,a){return io(2,arguments,this),this},e.set=function(n,r,o){return r.duration=0,r.parent=this,eo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Me(n,r,Di(this,o),1),this},e.call=function(n,r,o){return sn(this,Me.delayedCall(0,n,r),o)},e.staggerTo=function(n,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Me(n,o,Di(this,l)),this},e.staggerFrom=function(n,r,o,a,l,c,h){return o.runBackwards=1,eo(o).immediateRender=di(o.immediateRender),this.staggerTo(n,r,o,a,l,c,h)},e.staggerFromTo=function(n,r,o,a,l,c,h,u){return a.startAt=o,eo(a).immediateRender=di(a.immediateRender),this.staggerTo(n,r,a,l,c,h,u)},e.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:Be(n),u=this._zTime<0!=n<0&&(this._initted||!c),f,m,g,p,d,_,S,y,v,b,A,C;if(this!==de&&h>l&&n>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),f=h,v=this._start,y=this._ts,_=!y,u&&(c||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(A=this._yoyo,d=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(d*100+n,r,o);if(f=Be(h%d),h===l?(p=this._repeat,f=c):(p=~~(h/d),p&&p===h/d&&(f=c,p--),f>c&&(f=c)),b=ys(this._tTime,d),!a&&this._tTime&&b!==p&&this._tTime-b*d-this._dur<=0&&(b=p),A&&p&1&&(f=c-f,C=1),p!==b&&!this._lock){var x=A&&b&1,M=x===(A&&p&1);if(p<b&&(x=!x),a=x?0:c,this._lock=1,this.render(a||(C?0:Be(p*d)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ki(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;op(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=eb(this,Be(a),Be(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&f&&!r&&!p&&(ki(this,"onStart"),this._tTime!==h))return this;if(f>=a&&n>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(n,r,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,o),f!==this._time||!this._ts&&!_){S=0,g&&(h+=this._zTime=-oe);break}}m=g}else{m=this._last;for(var L=n<0?n:f;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(n,r,o);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,o||Ye&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!_){S=0,g&&(h+=this._zTime=L?-oe:oe);break}}m=g}}if(S&&!r&&(this.pause(),S.render(f>=a?0:-oe)._zTime=f>=a?1:-1,this._ts))return this._start=v,Ja(this),this.render(n,r,o);this._onUpdate&&!r&&ki(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Yn(this,1),!r&&!(n<0&&!a)&&(h||a||!l)&&(ki(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,r){var o=this;if(En(r)||(r=Di(this,r,n)),!(n instanceof mo)){if($e(n))return n.forEach(function(a){return o.add(a,r)}),this;if(Ne(n))return this.addLabel(n,r);if(_e(n))n=Me.delayedCall(0,n);else return this}return this!==n?sn(this,n,r):this},e.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Bi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Me?r&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},e.remove=function(n){return Ne(n)?this.removeLabel(n):_e(n)?this.killTweensOf(n):(ja(this,n),n===this._recent&&(this._recent=this._last),yr(this))},e.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Be(Ci.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},e.addLabel=function(n,r){return this.labels[n]=Di(this,r),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,r,o){var a=Me.delayedCall(0,r||uo,o);return a.data="isPause",this._hasPause=1,sn(this,a,Di(this,n))},e.removePause=function(n){var r=this._first;for(n=Di(this,n);r;)r._start===n&&r.data==="isPause"&&Yn(r),r=r._next},e.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Un!==a[l]&&a[l].kill(n,r);return this},e.getTweensOf=function(n,r){for(var o=[],a=Ui(n),l=this._first,c=En(r),h;l;)l instanceof Me?$y(l._targets,a)&&(c?(!Un||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(n,r){r=r||{};var o=this,a=Di(o,n),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,m,g=Me.to(o,Hi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||oe,onStart:function(){if(o.pause(),!m){var d=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==d&&bs(g,d,0,1).render(g._time,!0,!0),m=1}h&&h.apply(g,u||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(n,r,o){return this.tweenTo(r,Hi({startAt:{time:Di(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),mf(this,Di(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),mf(this,Di(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+oe)},e.shiftChildren=function(n,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=n);return yr(this)},e.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),yr(this)},e.totalDuration=function(n){var r=0,o=this,a=o._last,l=Bi,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,sn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;bs(o,o===de&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(de._ts&&(kd(de,Fa(n,de)),Bd=Ci.frame),Ci.frame>=uf){uf+=Pi.autoSleep||120;var r=de._first;if((!r||!r._ts)&&Pi.autoSleep&&Ci._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ci.sleep()}}},t}(mo);Hi(si.prototype,{_lock:0,_hasPause:0,_forcing:0});var _b=function(t,e,i,n,r,o,a){var l=new mi(this._pt,t,e,0,1,pp,null,r),c=0,h=0,u,f,m,g,p,d,_,S;for(l.b=i,l.e=n,i+="",n+="",(_=~n.indexOf("random("))&&(n=fo(n)),o&&(S=[i,n],o(S,t,e),i=S[0],n=S[1]),f=i.match(ql)||[];u=ql.exec(n);)g=u[0],p=n.substring(c,u.index),m?m=(m+1)%5:p.substr(-5)==="rgba("&&(m=1),g!==f[h++]&&(d=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:p||h===1?p:",",s:d,c:g.charAt(1)==="="?cs(d,g)-d:parseFloat(g)-d,m:m&&m<4?Math.round:0},c=ql.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(zd.test(n)||_)&&(l.e=0),this._pt=l,l},hh=function(t,e,i,n,r,o,a,l,c,h){_e(n)&&(n=n(r||0,t,o));var u=t[e],f=i!=="get"?i:_e(u)?c?t[e.indexOf("set")||!_e(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,m=_e(u)?c?Sb:fp:fh,g;if(Ne(n)&&(~n.indexOf("random(")&&(n=fo(n)),n.charAt(1)==="="&&(g=cs(f,n)+(qe(f)||0),(g||g===0)&&(n=g))),!h||f!==n||zc)return!isNaN(f*n)&&n!==""?(g=new mi(this._pt,t,e,+f||0,n-(f||0),typeof u=="boolean"?wb:dp,0,m),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&oh(e,n),_b.call(this,t,e,f,n,m,l||Pi.stringFilter,c))},xb=function(t,e,i,n,r){if(_e(t)&&(t=no(t,r,e,i,n)),!hn(t)||t.style&&t.nodeType||$e(t)||Rd(t))return Ne(t)?no(t,r,e,i,n):t;var o={},a;for(a in t)o[a]=no(t[a],r,e,i,n);return o},cp=function(t,e,i,n,r,o){var a,l,c,h;if(wi[t]&&(a=new wi[t]).init(r,a.rawVars?e[t]:xb(e[t],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new mi(i._pt,r,t,0,1,a.render,a,0,a.priority),i!==is))for(c=i._ptLookup[i._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Un,zc,uh=function s(t,e,i){var n=t.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.onUpdateParams,u=n.callbackScope,f=n.runBackwards,m=n.yoyoEase,g=n.keyframes,p=n.autoRevert,d=t._dur,_=t._startAt,S=t._targets,y=t.parent,v=y&&y.data==="nested"?y.vars.targets:S,b=t._overwrite==="auto"&&!ih,A=t.timeline,C,x,M,L,B,et,F,D,N,X,E,k,it;if(A&&(!g||!r)&&(r="none"),t._ease=br(r,vs.ease),t._yEase=m?sp(br(m===!0?r:m,vs.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!A&&!!n.runBackwards,!A||g&&!n.stagger){if(D=S[0]?vr(S[0]).harness:0,k=D&&n[D.prop],C=Na(n,ah),_&&(_._zTime<0&&_.progress(1),e<0&&f&&a&&!p?_.render(-1,!0):_.revert(f&&d?Ma:qy),_._lazy=0),o){if(Yn(t._startAt=Me.set(S,Hi({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!_&&di(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:u,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ye||!a&&!p)&&t._startAt.revert(Ma),a&&d&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(f&&d&&!_){if(e&&(a=!1),M=Hi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&di(l),immediateRender:a,stagger:0,parent:y},C),k&&(M[D.prop]=k),Yn(t._startAt=Me.set(S,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ye?t._startAt.revert(Ma):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,oe,oe);else if(!e)return}for(t._pt=t._ptCache=0,l=d&&di(l)||l&&!d,x=0;x<S.length;x++){if(B=S[x],F=B._gsap||ch(S)[x]._gsap,t._ptLookup[x]=X={},Ec[F.id]&&Wn.length&&Oa(),E=v===S?x:v.indexOf(B),D&&(N=new D).init(B,k||C,t,E,v)!==!1&&(t._pt=L=new mi(t._pt,B,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(rt){X[rt]=L}),N.priority&&(et=1)),!D||k)for(M in C)wi[M]&&(N=cp(M,C,t,E,B,v))?N.priority&&(et=1):X[M]=L=hh.call(t,B,M,"get",C[M],E,v,0,n.stringFilter);t._op&&t._op[x]&&t.kill(B,t._op[x]),b&&t._pt&&(Un=t,de.killTweensOf(B,X,t.globalTime(e)),it=!t.parent,Un=0),t._pt&&l&&(Ec[F.id]=1)}et&&mp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!it,g&&e<=0&&A.render(Bi,!0,!0)},vb=function(t,e,i,n,r,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,u,f;if(!l)for(l=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(c=u[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return zc=1,t.vars[e]="+=0",uh(t,a),zc=0,1;l.push(c)}for(f=l.length;f--;)h=l[f],c=h._pt||h,c.s=(n||n===0)&&!r?n:c.s+(n||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=ve(i)+qe(h.e)),h.b&&(h.b=c.s+qe(h.b))},yb=function(t,e){var i=t[0]?vr(t[0]).harness:0,n=i&&i.aliases,r,o,a,l;if(!n)return e;r=Pr({},e);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},bb=function(t,e,i,n){var r=e.ease||n||"power1.inOut",o,a;if($e(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},no=function(t,e,i,n,r){return _e(t)?t.call(e,i,n,r):Ne(t)&&~t.indexOf("random(")?fo(t):t},hp=lh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",up={};pi(hp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return up[s]=1});var Me=function(s){Pd(t,s);function t(i,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=s.call(this,o?n:eo(n))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,p=l.defaults,d=l.scrollTrigger,_=l.yoyoEase,S=n.parent||de,y=($e(i)||Rd(i)?En(i[0]):"length"in n)?[i]:Ui(i),v,b,A,C,x,M,L,B;if(a._targets=y.length?ch(y):Ia("GSAP target "+i+" not found. https://greensock.com",!Pi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||f||ha(c)||ha(h)){if(n=a.vars,v=a.timeline=new si({data:"nested",defaults:p||{},targets:S&&S.data==="nested"?S.vars.targets:y}),v.kill(),v.parent=v._dp=vn(a),v._start=0,f||ha(c)||ha(h)){if(C=y.length,L=f&&Zd(f),hn(f))for(x in f)~hp.indexOf(x)&&(B||(B={}),B[x]=f[x]);for(b=0;b<C;b++)A=Na(n,up),A.stagger=0,_&&(A.yoyoEase=_),B&&Pr(A,B),M=y[b],A.duration=+no(c,vn(a),b,M,y),A.delay=(+no(h,vn(a),b,M,y)||0)-a._delay,!f&&C===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),v.to(M,A,L?L(b,M,y):0),v._ease=Jt.none;v.duration()?c=h=0:a.timeline=0}else if(g){eo(Hi(v.vars.defaults,{ease:"none"})),v._ease=br(g.ease||n.ease||"none");var et=0,F,D,N;if($e(g))g.forEach(function(X){return v.to(y,X,">")}),v.duration();else{A={};for(x in g)x==="ease"||x==="easeEach"||bb(x,g[x],A,g.easeEach);for(x in A)for(F=A[x].sort(function(X,E){return X.t-E.t}),et=0,b=0;b<F.length;b++)D=F[b],N={ease:D.e,duration:(D.t-(b?F[b-1].t:0))/100*c},N[x]=D.v,v.to(y,N,et),et+=N.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return m===!0&&!ih&&(Un=vn(a),de.killTweensOf(y),Un=0),sn(S,vn(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(u||!c&&!g&&a._start===Be(S._time)&&di(u)&&Ky(vn(a))&&S.data!=="nested")&&(a._tTime=-oe,a.render(Math.max(0,-h)||0)),d&&Xd(vn(a),d),a}var e=t.prototype;return e.render=function(n,r,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-oe&&!h?l:n<oe?0:n,f,m,g,p,d,_,S,y,v;if(!c)tb(this,n,r,o);else if(u!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,y=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+n,r,o);if(f=Be(u%p),u===l?(g=this._repeat,f=c):(g=~~(u/p),g&&g===u/p&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(v=this._yEase,f=c-f),d=ys(this._tTime,p),f===a&&!o&&this._initted)return this._tTime=u,this;g!==d&&(y&&this._yEase&&op(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(Be(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(qd(this,h?n:f,o,r,u))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(n,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!a&&!r&&!g&&(ki(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;y&&y.render(n<0?n:!f&&_?-oe:y._dur*y._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&Ac(this,n,r,o),ki(this,"onUpdate")),this._repeat&&g!==d&&this.vars.onRepeat&&!r&&this.parent&&ki(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Ac(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Yn(this,1),!r&&!(h&&!a)&&(u||a||_)&&(ki(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},e.resetTo=function(n,r,o,a){po||Ci.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||uh(this,l),c=this._ease(l/this._dur),vb(this,n,r,o,a,c,l)?this.resetTo(n,r,o,a):(Ka(this,0),this.parent||Hd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Hs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Un&&Un.vars.overwrite!==!0)._first||Hs(this),this.parent&&o!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Ui(n):a,c=this._ptLookup,h=this._pt,u,f,m,g,p,d,_;if((!r||r==="all")&&jy(a,l))return r==="all"&&(this._pt=0),Hs(this);for(u=this._op=this._op||[],r!=="all"&&(Ne(r)&&(p={},pi(r,function(S){return p[S]=1}),r=p),r=yb(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],r==="all"?(u[_]=r,g=f,m={}):(m=u[_]=u[_]||{},g=r);for(p in g)d=f&&f[p],d&&((!("kill"in d.d)||d.d.kill(p)===!0)&&ja(this,d,"_pt"),delete f[p]),m!=="all"&&(m[p]=1)}return this._initted&&!this._pt&&h&&Hs(this),this},t.to=function(n,r){return new t(n,r,arguments[2])},t.from=function(n,r){return io(1,arguments)},t.delayedCall=function(n,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,r,o){return io(2,arguments)},t.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(n,r)},t.killTweensOf=function(n,r,o){return de.killTweensOf(n,r,o)},t}(mo);Hi(Me.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});pi("staggerTo,staggerFrom,staggerFromTo",function(s){Me[s]=function(){var t=new si,e=Lc.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var fh=function(t,e,i){return t[e]=i},fp=function(t,e,i){return t[e](i)},Sb=function(t,e,i,n){return t[e](n.fp,i)},Mb=function(t,e,i){return t.setAttribute(e,i)},dh=function(t,e){return _e(t[e])?fp:nh(t[e])&&t.setAttribute?Mb:fh},dp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},wb=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},pp=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},ph=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Tb=function(t,e,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(t,e,i),r=o},Cb=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?ja(this,e,"_pt"):e.dep||(i=1),e=n;return!i},Eb=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},mp=function(t){for(var e=t._pt,i,n,r,o;e;){for(i=e._next,n=r;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:r=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=r},mi=function(){function s(e,i,n,r,o,a,l,c,h){this.t=i,this.s=r,this.c=o,this.p=n,this.r=a||dp,this.d=l||this,this.set=c||fh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=Eb,this.m=i,this.mt=r,this.tween=n},s}();pi(lh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return ah[s]=1});Li.TweenMax=Li.TweenLite=Me;Li.TimelineLite=Li.TimelineMax=si;de=new si({sortChildren:!1,defaults:vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pi.stringFilter=rp;var Sr=[],Ta={},Ab=[],_f=0,Pb=0,Jl=function(t){return(Ta[t]||Ab).map(function(e){return e()})},Ic=function(){var t=Date.now(),e=[];t-_f>2&&(Jl("matchMediaInit"),Sr.forEach(function(i){var n=i.queries,r=i.conditions,o,a,l,c;for(a in n)o=zi.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),Jl("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i)}),_f=t,Jl("matchMedia"))},gp=function(){function s(e,i){this.selector=i&&Rc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Pb++,e&&this.add(e)}var t=s.prototype;return t.add=function(i,n,r){_e(i)&&(r=n,n=i,i=_e);var o=this,a=function(){var c=ge,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=Rc(r)),ge=o,u=n.apply(o,arguments),_e(u)&&o._r.push(u),ge=c,o.selector=h,o.isReverted=!1,u};return o.last=a,i===_e?a(o):i?o[i]=a:a},t.ignore=function(i){var n=ge;ge=null,i(this),ge=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof Me&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var r=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return l instanceof si?l.data!=="nested"&&l.kill():!(l instanceof Me)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),n)for(var a=Sr.length;a--;)Sr[a].id===this.id&&Sr.splice(a,1)},t.revert=function(i){this.kill(i||{})},s}(),Lb=function(){function s(e){this.contexts=[],this.scope=e}var t=s.prototype;return t.add=function(i,n,r){hn(i)||(i={matches:i});var o=new gp(0,r||this.scope),a=o.conditions={},l,c,h;ge&&!o.selector&&(o.selector=ge.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=zi.matchMedia(i[c]),l&&(Sr.indexOf(o)<0&&Sr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ic):l.addEventListener("change",Ic)));return h&&n(o),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s}(),Ba={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return ep(n)})},timeline:function(t){return new si(t)},getTweensOf:function(t,e){return de.getTweensOf(t,e)},getProperty:function(t,e,i,n){Ne(t)&&(t=Ui(t)[0]);var r=vr(t||{}).get,o=i?Vd:Gd;return i==="native"&&(i=""),t&&(e?o((wi[e]&&wi[e].get||r)(t,e,i,n)):function(a,l,c){return o((wi[a]&&wi[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=Ui(t),t.length>1){var n=t.map(function(h){return gi.quickSetter(h,e,i)}),r=n.length;return function(h){for(var u=r;u--;)n[u](h)}}t=t[0]||{};var o=wi[e],a=vr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;is._pt=0,u.init(t,i?h+i:h,is,0,[t]),u.render(1,u),is._pt&&ph(1,is)}:a.set(t,l);return o?c:function(h){return c(t,l,i?h+i:h,a,1)}},quickTo:function(t,e,i){var n,r=gi.to(t,Pr((n={},n[e]="+=0.1",n.paused=!0,n),i||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return de.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=br(t.ease,vs.ease)),ff(vs,t||{})},config:function(t){return ff(Pi,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,r=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!wi[a]&&!Li[a]&&Ia(e+" effect requires "+a+" plugin.")}),Yl[e]=function(a,l,c){return i(Ui(a),Hi(l||{},r),c)},o&&(si.prototype[e]=function(a,l,c){return this.add(Yl[e](a,hn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Jt[t]=br(e)},parseEase:function(t,e){return arguments.length?br(t,e):Jt},getById:function(t){return de.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new si(t),n,r;for(i.smoothChildTiming=di(t.smoothChildTiming),de.remove(i),i._dp=0,i._time=i._tTime=de._time,n=de._first;n;)r=n._next,(e||!(!n._dur&&n instanceof Me&&n.vars.onComplete===n._targets[0]))&&sn(i,n,n._start-n._delay),n=r;return sn(de,i,0),i},context:function(t,e){return t?new gp(t,e):ge},matchMedia:function(t){return new Lb(t)},matchMediaRefresh:function(){return Sr.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||Ic()},addEventListener:function(t,e){var i=Ta[t]||(Ta[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Ta[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:lb,wrapYoyo:cb,distribute:Zd,random:Jd,snap:jd,normalize:ab,getUnit:qe,clamp:nb,splitColor:ip,toArray:Ui,selector:Rc,mapRange:Qd,pipe:sb,unitize:ob,interpolate:hb,shuffle:$d},install:Nd,effects:Yl,ticker:Ci,updateRoot:si.updateRoot,plugins:wi,globalTimeline:de,core:{PropTween:mi,globals:Fd,Tween:Me,Timeline:si,Animation:mo,getCache:vr,_removeLinkedListItem:ja,reverting:function(){return Ye},context:function(t){return t&&ge&&(ge.data.push(t),t._ctx=ge),ge},suppressOverwrites:function(t){return ih=t}}};pi("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ba[s]=Me[s]});Ci.add(si.updateRoot);is=Ba.to({},{duration:0});var Rb=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},Db=function(t,e){var i=t._targets,n,r,o;for(n in e)for(r=i.length;r--;)o=t._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=Rb(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[r],n))},Kl=function(t,e){return{name:t,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,c;if(Ne(r)&&(l={},pi(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Db(a,r)}}}},gi=Ba.registerPlugin({name:"attr",init:function(t,e,i,n,r){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Ye?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Kl("roundProps",Dc),Kl("modifiers"),Kl("snap",jd))||Ba;Me.version=si.version=gi.version="3.12.1";Od=1;rh()&&Ss();Jt.Power0;Jt.Power1;Jt.Power2;Jt.Power3;Jt.Power4;Jt.Linear;Jt.Quad;Jt.Cubic;Jt.Quart;Jt.Quint;Jt.Strong;Jt.Elastic;Jt.Back;Jt.SteppedEase;Jt.Bounce;Jt.Sine;Jt.Expo;Jt.Circ;/*!
 * CSSPlugin 3.12.1
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xf,kn,hs,mh,dr,vf,gh,zb=function(){return typeof window<"u"},An={},lr=180/Math.PI,us=Math.PI/180,Yr=Math.atan2,yf=1e8,_h=/([A-Z])/g,Ib=/(left|right|width|margin|padding|x)/i,Ob=/[\s,\(]\S/,on={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Oc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Nb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Fb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Bb=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},_p=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},xp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Ub=function(t,e,i){return t.style[e]=i},kb=function(t,e,i){return t.style.setProperty(e,i)},Gb=function(t,e,i){return t._gsap[e]=i},Vb=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Hb=function(t,e,i,n,r){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},Wb=function(t,e,i,n,r){var o=t._gsap;o[e]=i,o.renderTransform(r,o)},me="transform",Qi=me+"Origin",Xb=function s(t,e){var i=this,n=this.target,r=n.style;if(t in An&&r){if(this.tfm=this.tfm||{},t!=="transform")t=on[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=yn(n,o)}):this.tfm[t]=n._gsap.x?n._gsap[t]:yn(n,t);else return on.transform.split(",").forEach(function(o){return s.call(i,o,e)});if(this.props.indexOf(me)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Qi,e,"")),t=me}(r||e)&&this.props.push(t,e,r[t])},vp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},qb=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(_h,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=gh(),(!r||!r.isStart)&&!i[me]&&(vp(i),n.uncache=1)}},yp=function(t,e){var i={target:t,props:[],revert:qb,save:Xb};return t._gsap||gi.core.getCache(t),e&&e.split(",").forEach(function(n){return i.save(n)}),i},bp,Nc=function(t,e){var i=kn.createElementNS?kn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):kn.createElement(t);return i.style?i:kn.createElement(t)},cn=function s(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(_h,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&s(t,Ms(e)||e,1)||""},bf="O,Moz,ms,Ms,Webkit".split(","),Ms=function(t,e,i){var n=e||dr,r=n.style,o=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(bf[o]+t in r););return o<0?null:(o===3?"ms":o>=0?bf[o]:"")+t},Fc=function(){zb()&&window.document&&(xf=window,kn=xf.document,hs=kn.documentElement,dr=Nc("div")||{style:{}},Nc("div"),me=Ms(me),Qi=me+"Origin",dr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bp=!!Ms("perspective"),gh=gi.core.reverting,mh=1)},Ql=function s(t){var e=Nc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,r=this.style.cssText,o;if(hs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),hs.removeChild(e),this.style.cssText=r,o},Sf=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Sp=function(t){var e;try{e=t.getBBox()}catch{e=Ql.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ql||(e=Ql.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Sf(t,["x","cx","x1"])||0,y:+Sf(t,["y","cy","y1"])||0,width:0,height:0}:e},Mp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Sp(t))},go=function(t,e){if(e){var i=t.style;e in An&&e!==Qi&&(e=me),i.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(e.replace(_h,"-$1").toLowerCase())):i.removeAttribute(e)}},Gn=function(t,e,i,n,r,o){var a=new mi(t._pt,e,i,0,1,o?xp:_p);return t._pt=a,a.b=n,a.e=r,t._props.push(i),a},Mf={deg:1,rad:1,turn:1},Yb={grid:1,flex:1},$n=function s(t,e,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=dr.style,l=Ib.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=n==="px",m=n==="%",g,p,d,_;return n===o||!r||Mf[n]||Mf[o]?r:(o!=="px"&&!f&&(r=s(t,e,i,"px")),_=t.getCTM&&Mp(t),(m||o==="%")&&(An[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[l?"width":"height"]:t[h],ve(m?r/g*u:r/100*g)):(a[l?"width":"height"]=u+(f?o:n),p=~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(p=(t.ownerSVGElement||{}).parentNode),(!p||p===kn||!p.appendChild)&&(p=kn.body),d=p._gsap,d&&m&&d.width&&l&&d.time===Ci.time&&!d.uncache?ve(r/d.width*u):((m||o==="%")&&!Yb[cn(p,"display")]&&(a.position=cn(t,"position")),p===t&&(a.position="static"),p.appendChild(dr),g=dr[h],p.removeChild(dr),a.position="absolute",l&&m&&(d=vr(p),d.time=Ci.time,d.width=p[h]),ve(f?g*r/u:g&&r?u/g*r:0))))},yn=function(t,e,i,n){var r;return mh||Fc(),e in on&&e!=="transform"&&(e=on[e],~e.indexOf(",")&&(e=e.split(",")[0])),An[e]&&e!=="transform"?(r=xo(t,n),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ka(cn(t,Qi))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Ua[e]&&Ua[e](t,e,i)||cn(t,e)||Ud(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?$n(t,e,r,i)+i:r},$b=function(t,e,i,n){if(!i||i==="none"){var r=Ms(e,t,1),o=r&&cn(t,r,1);o&&o!==i?(e=r,i=o):e==="borderColor"&&(i=cn(t,"borderTopColor"))}var a=new mi(this._pt,t.style,e,0,1,pp),l=0,c=0,h,u,f,m,g,p,d,_,S,y,v,b;if(a.b=i,a.e=n,i+="",n+="",n==="auto"&&(t.style[e]=n,n=cn(t,e)||n,t.style[e]=i),h=[i,n],rp(h),i=h[0],n=h[1],f=i.match(es)||[],b=n.match(es)||[],b.length){for(;u=es.exec(n);)d=u[0],S=n.substring(l,u.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),d!==(p=f[c++]||"")&&(m=parseFloat(p)||0,v=p.substr((m+"").length),d.charAt(1)==="="&&(d=cs(m,d)+v),_=parseFloat(d),y=d.substr((_+"").length),l=es.lastIndex-y.length,y||(y=y||Pi.units[e]||v,l===n.length&&(n+=y,a.e+=y)),v!==y&&(m=$n(t,e,p,y)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=e==="display"&&n==="none"?xp:_p;return zd.test(n)&&(a.e=0),this._pt=a,a},wf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zb=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=wf[i]||i,e[1]=wf[n]||n,e.join(" ")},jb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,r=e.u,o=i._gsap,a,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],An[a]&&(l=1,a=a==="transformOrigin"?Qi:me),go(i,a);l&&(go(i,me),o&&(o.svg&&i.removeAttribute("transform"),xo(i,1),o.uncache=1,vp(n)))}},Ua={clearProps:function(t,e,i,n,r){if(r.data!=="isFromStart"){var o=t._pt=new mi(t._pt,e,i,0,0,jb);return o.u=n,o.pr=-10,o.tween=r,t._props.push(i),1}}},_o=[1,0,0,1,0,0],wp={},Tp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Tf=function(t){var e=cn(t,me);return Tp(e)?_o:e.substr(7).match(Dd).map(ve)},xh=function(t,e){var i=t._gsap||vr(t),n=t.style,r=Tf(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?_o:r):(r===_o&&!t.offsetParent&&t!==hs&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,hs.appendChild(t)),r=Tf(t),l?n.display=l:go(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):hs.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Bc=function(t,e,i,n,r,o){var a=t._gsap,l=r||xh(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,m=l[0],g=l[1],p=l[2],d=l[3],_=l[4],S=l[5],y=e.split(" "),v=parseFloat(y[0])||0,b=parseFloat(y[1])||0,A,C,x,M;i?l!==_o&&(C=m*d-g*p)&&(x=v*(d/C)+b*(-p/C)+(p*S-d*_)/C,M=v*(-g/C)+b*(m/C)-(m*S-g*_)/C,v=x,b=M):(A=Sp(t),v=A.x+(~y[0].indexOf("%")?v/100*A.width:v),b=A.y+(~(y[1]||y[0]).indexOf("%")?b/100*A.height:b)),n||n!==!1&&a.smooth?(_=v-c,S=b-h,a.xOffset=u+(_*m+S*p)-_,a.yOffset=f+(_*g+S*d)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!n,a.origin=e,a.originIsAbsolute=!!i,t.style[Qi]="0px 0px",o&&(Gn(o,a,"xOrigin",c,v),Gn(o,a,"yOrigin",h,b),Gn(o,a,"xOffset",u,a.xOffset),Gn(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},xo=function(t,e){var i=t._gsap||new lp(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=cn(t,Qi)||"0",h,u,f,m,g,p,d,_,S,y,v,b,A,C,x,M,L,B,et,F,D,N,X,E,k,it,rt,G,H,K,j,lt;return h=u=f=p=d=_=S=y=v=0,m=g=1,i.svg=!!(t.getCTM&&Mp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[me]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[me]!=="none"?l[me]:"")),n.scale=n.rotate=n.translate="none"),C=xh(t,i.svg),i.svg&&(i.uncache?(k=t.getBBox(),c=i.xOrigin-k.x+"px "+(i.yOrigin-k.y)+"px",E=""):E=!e&&t.getAttribute("data-svg-origin"),Bc(t,E||c,!!E||i.originIsAbsolute,i.smooth!==!1,C)),b=i.xOrigin||0,A=i.yOrigin||0,C!==_o&&(B=C[0],et=C[1],F=C[2],D=C[3],h=N=C[4],u=X=C[5],C.length===6?(m=Math.sqrt(B*B+et*et),g=Math.sqrt(D*D+F*F),p=B||et?Yr(et,B)*lr:0,S=F||D?Yr(F,D)*lr+p:0,S&&(g*=Math.abs(Math.cos(S*us))),i.svg&&(h-=b-(b*B+A*F),u-=A-(b*et+A*D))):(lt=C[6],K=C[7],rt=C[8],G=C[9],H=C[10],j=C[11],h=C[12],u=C[13],f=C[14],x=Yr(lt,H),d=x*lr,x&&(M=Math.cos(-x),L=Math.sin(-x),E=N*M+rt*L,k=X*M+G*L,it=lt*M+H*L,rt=N*-L+rt*M,G=X*-L+G*M,H=lt*-L+H*M,j=K*-L+j*M,N=E,X=k,lt=it),x=Yr(-F,H),_=x*lr,x&&(M=Math.cos(-x),L=Math.sin(-x),E=B*M-rt*L,k=et*M-G*L,it=F*M-H*L,j=D*L+j*M,B=E,et=k,F=it),x=Yr(et,B),p=x*lr,x&&(M=Math.cos(x),L=Math.sin(x),E=B*M+et*L,k=N*M+X*L,et=et*M-B*L,X=X*M-N*L,B=E,N=k),d&&Math.abs(d)+Math.abs(p)>359.9&&(d=p=0,_=180-_),m=ve(Math.sqrt(B*B+et*et+F*F)),g=ve(Math.sqrt(X*X+lt*lt)),x=Yr(N,X),S=Math.abs(x)>2e-4?x*lr:0,v=j?1/(j<0?-j:j):0),i.svg&&(E=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Tp(cn(t,me)),E&&t.setAttribute("transform",E))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(m*=-1,S+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=u-((i.yPercent=u&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=ve(m),i.scaleY=ve(g),i.rotation=ve(p)+a,i.rotationX=ve(d)+a,i.rotationY=ve(_)+a,i.skewX=S+a,i.skewY=y+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(c.split(" ")[2])||0)&&(n[Qi]=ka(c)),i.xOffset=i.yOffset=0,i.force3D=Pi.force3D,i.renderTransform=i.svg?Kb:bp?Cp:Jb,i.uncache=0,i},ka=function(t){return(t=t.split(" "))[0]+" "+t[1]},tc=function(t,e,i){var n=qe(e);return ve(parseFloat(e)+parseFloat($n(t,"x",i+"px",n)))+n},Jb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Cp(t,e)},er="0deg",Fs="0px",ir=") ",Cp=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,f=i.skewX,m=i.skewY,g=i.scaleX,p=i.scaleY,d=i.transformPerspective,_=i.force3D,S=i.target,y=i.zOrigin,v="",b=_==="auto"&&t&&t!==1||_===!0;if(y&&(u!==er||h!==er)){var A=parseFloat(h)*us,C=Math.sin(A),x=Math.cos(A),M;A=parseFloat(u)*us,M=Math.cos(A),o=tc(S,o,C*M*-y),a=tc(S,a,-Math.sin(A)*-y),l=tc(S,l,x*M*-y+y)}d!==Fs&&(v+="perspective("+d+ir),(n||r)&&(v+="translate("+n+"%, "+r+"%) "),(b||o!==Fs||a!==Fs||l!==Fs)&&(v+=l!==Fs||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ir),c!==er&&(v+="rotate("+c+ir),h!==er&&(v+="rotateY("+h+ir),u!==er&&(v+="rotateX("+u+ir),(f!==er||m!==er)&&(v+="skew("+f+", "+m+ir),(g!==1||p!==1)&&(v+="scale("+g+", "+p+ir),S.style[me]=v||"translate(0, 0)"},Kb=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,f=i.scaleY,m=i.target,g=i.xOrigin,p=i.yOrigin,d=i.xOffset,_=i.yOffset,S=i.forceCSS,y=parseFloat(o),v=parseFloat(a),b,A,C,x,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=us,c*=us,b=Math.cos(l)*u,A=Math.sin(l)*u,C=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(h*=us,M=Math.tan(c-h),M=Math.sqrt(1+M*M),C*=M,x*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),b*=M,A*=M)),b=ve(b),A=ve(A),C=ve(C),x=ve(x)):(b=u,x=f,A=C=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=$n(m,"x",o,"px"),v=$n(m,"y",a,"px")),(g||p||d||_)&&(y=ve(y+g-(g*b+p*C)+d),v=ve(v+p-(g*A+p*x)+_)),(n||r)&&(M=m.getBBox(),y=ve(y+n/100*M.width),v=ve(v+r/100*M.height)),M="matrix("+b+","+A+","+C+","+x+","+y+","+v+")",m.setAttribute("transform",M),S&&(m.style[me]=M)},Qb=function(t,e,i,n,r){var o=360,a=Ne(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?lr:1),c=l-n,h=n+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*yf)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*yf)%o-~~(c/o)*o)),t._pt=f=new mi(t._pt,e,i,n,c,Nb),f.e=h,f.u="deg",t._props.push(i),f},Cf=function(t,e){for(var i in e)t[i]=e[i];return t},tS=function(t,e,i){var n=Cf({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,u,f,m,g;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[me]=e,a=xo(i,1),go(i,me),i.setAttribute("transform",c)):(c=getComputedStyle(i)[me],o[me]=e,a=xo(i,1),o[me]=c);for(l in An)c=n[l],h=a[l],c!==h&&r.indexOf(l)<0&&(m=qe(c),g=qe(h),u=m!==g?$n(i,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new mi(t._pt,a,l,u,f-u,Oc),t._pt.u=g||0,t._props.push(l));Cf(a,n)};pi("padding,margin,Width,Radius",function(s,t){var e="Top",i="Right",n="Bottom",r="Left",o=(t<3?[e,i,n,r]:[e+r,e+i,n+i,n+r]).map(function(a){return t<2?s+a:"border"+a+s});Ua[t>1?"border"+s:s]=function(a,l,c,h,u){var f,m;if(arguments.length<4)return f=o.map(function(g){return yn(a,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(h+"").split(" "),m={},o.forEach(function(g,p){return m[g]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,m,u)}});var Ep={name:"css",register:Fc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,r){var o=this._props,a=t.style,l=i.vars.startAt,c,h,u,f,m,g,p,d,_,S,y,v,b,A,C,x;mh||Fc(),this.styles=this.styles||yp(t),x=this.styles.props,this.tween=i;for(p in e)if(p!=="autoRound"&&(h=e[p],!(wi[p]&&cp(p,e,i,n,t,r)))){if(m=typeof h,g=Ua[p],m==="function"&&(h=h.call(i,n,t,r),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=fo(h)),g)g(this,t,p,h,i)&&(C=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(p)+"").trim(),h+="",Xn.lastIndex=0,Xn.test(c)||(d=qe(c),_=qe(h)),_?d!==_&&(c=$n(t,p,c,_)+_):d&&(h+=d),this.add(a,"setProperty",c,h,n,r,0,0,p),o.push(p),x.push(p,0,a[p]);else if(m!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,n,t,r):l[p],Ne(c)&&~c.indexOf("random(")&&(c=fo(c)),qe(c+"")||(c+=Pi.units[p]||qe(yn(t,p))||""),(c+"").charAt(1)==="="&&(c=yn(t,p))):c=yn(t,p),f=parseFloat(c),S=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),p in on&&(p==="autoAlpha"&&(f===1&&yn(t,"visibility")==="hidden"&&u&&(f=0),x.push("visibility",0,a.visibility),Gn(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),p!=="scale"&&p!=="transform"&&(p=on[p],~p.indexOf(",")&&(p=p.split(",")[0]))),y=p in An,y){if(this.styles.save(p),v||(b=t._gsap,b.renderTransform&&!e.parseTransform||xo(t,e.parseTransform),A=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new mi(this._pt,a,me,0,1,b.renderTransform,b,0,-1),v.dep=1),p==="scale")this._pt=new mi(this._pt,b,"scaleY",b.scaleY,(S?cs(b.scaleY,S+u):u)-b.scaleY||0,Oc),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){x.push(Qi,0,a[Qi]),h=Zb(h),b.svg?Bc(t,h,0,A,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==b.zOrigin&&Gn(this,b,"zOrigin",b.zOrigin,_),Gn(this,a,p,ka(c),ka(h)));continue}else if(p==="svgOrigin"){Bc(t,h,1,A,0,this);continue}else if(p in wp){Qb(this,b,p,f,S?cs(f,S+h):h);continue}else if(p==="smoothOrigin"){Gn(this,b,"smooth",b.smooth,h);continue}else if(p==="force3D"){b[p]=h;continue}else if(p==="transform"){tS(this,h,t);continue}}else p in a||(p=Ms(p)||p);if(y||(u||u===0)&&(f||f===0)&&!Ob.test(h)&&p in a)d=(c+"").substr((f+"").length),u||(u=0),_=qe(h)||(p in Pi.units?Pi.units[p]:d),d!==_&&(f=$n(t,p,c,_)),this._pt=new mi(this._pt,y?b:a,p,f,(S?cs(f,S+u):u)-f,!y&&(_==="px"||p==="zIndex")&&e.autoRound!==!1?Bb:Oc),this._pt.u=_||0,d!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Fb);else if(p in a)$b.call(this,t,p,c,S?S+h:h);else if(p in t)this.add(t,p,c||t[p],S?S+h:h,n,r);else if(p!=="parseTransform"){oh(p,h);continue}y||(p in a?x.push(p,0,a[p]):x.push(p,1,c||t[p])),o.push(p)}}C&&mp(this)},render:function(t,e){if(e.tween._time||!gh())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:yn,aliases:on,getSetter:function(t,e,i){var n=on[e];return n&&n.indexOf(",")<0&&(e=n),e in An&&e!==Qi&&(t._gsap.x||yn(t,"x"))?i&&vf===i?e==="scale"?Vb:Gb:(vf=i||{})&&(e==="scale"?Hb:Wb):t.style&&!nh(t.style[e])?Ub:~e.indexOf("-")?kb:dh(t,e)},core:{_removeProperty:go,_getMatrix:xh}};gi.utils.checkPrefix=Ms;gi.core.getStyleSaver=yp;(function(s,t,e,i){var n=pi(s+","+t+","+e,function(r){An[r]=1});pi(t,function(r){Pi.units[r]="deg",wp[r]=1}),on[n[13]]=s+","+t,pi(i,function(r){var o=r.split(":");on[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");pi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Pi.units[s]="px"});gi.registerPlugin(Ep);var ai=gi.registerPlugin(Ep)||gi;ai.core.Tween;class eS{constructor(t,e){this.gsap=t,this.tl=this.gsap.timeline(),this.gui=e,this.group01=[],this.group02=[],this.group03=[],this.fristScroll=!0,this.aboutGroup01,this.aboutGroup03,this.scene,this.camera,this.currentGroup,this.animation=!1,this.fristHeight,this.fristMargin,this.secondHeight,this.secondClientHeight,this.secondMargin,this.thirdHeight,this.thirdTrigger,this.trigger=document.querySelector(".animationtrigger"),this.about=document.querySelector(".about"),this.aboutFirstWrapper=document.querySelector(".aboutFirstWrapper"),this.aboutSecondWrapper=document.querySelector(".aboutSecondWrapper"),this.secondSubjects=document.querySelectorAll(".aboutSecondSubject"),this.aboutThridWrapper=document.querySelector(".aboutThridWrapper"),this.aboutThirdContentTittle=document.querySelector(".aboutThirdContentTittle"),this.aboutThirdContentTittles=document.querySelectorAll(".aboutThirdContentTittle"),this.aboutThirdStickWrappers=document.querySelectorAll(".aboutThirdStickWrapper"),this.aboutThirdStickWrapper=document.querySelector(".aboutThirdStickWrapper"),this.aboutThirdContentWrapper=document.querySelector(".aboutThirdContentWrapper")}createMesh(t,e,i,n,r){this.aboutGroup01=t,this.aboutGroup03=e,this.scene=i,this.camera=n,this.currentGroup=r,this.tl.to(this.trigger,{opacity:0}).to(this.trigger,{opacity:1,onComplte:()=>{this.resize(),this.createBox1(),this.createBox3(),this.scrollTrigger()}})}createBox1(){for(let i=0;i<this.aboutGroup01.box1Count;i++){let n=this.aboutGroup01.box1.clone();this.group01.push(n),this.currentGroup.add(n);let r=Math.PI/180*(360/this.aboutGroup01.box1Count*i),o=Math.cos(r)*this.aboutGroup01.radius,a=Math.sin(r)*this.aboutGroup01.radius;n.rotation.z=r,n.position.set(o,a,0),i%2==0?this.aboutGroup01.group3.add(n):this.aboutGroup01.group1.add(n)}this.aboutGroup01.group1.add(this.aboutGroup01.group3);for(let i=0;i<this.aboutGroup01.box2Count;i++){let n=this.aboutGroup01.box1.clone();this.group01.push(n),this.currentGroup.add(n);let r=Math.PI/180*(360/this.aboutGroup01.box1Count*i),o=Math.cos(r)*this.aboutGroup01.radius,a=Math.sin(r)*this.aboutGroup01.radius;n.rotation.z=r,n.position.set(o,a,0),i%2==1?this.aboutGroup01.group4.add(n):this.aboutGroup01.group2.add(n)}this.aboutGroup01.group2.add(this.aboutGroup01.group4);let t=3,e=t+this.aboutGroup01.radius;this.aboutGroup01.group1.position.set(t,0,0),this.aboutGroup01.group1.rotation.x=Math.PI/180*-40,this.aboutGroup01.group2.position.set(e,0,0),this.aboutGroup01.group2.rotation.x=Math.PI/180*40,this.scene.add(this.aboutGroup01.group1,this.aboutGroup01.group2),this.interval=setInterval(()=>{let i=this.aboutGroup01.group1.rotation.z,n=this.aboutGroup01.group2.rotation.z;this.gsap.to(this.aboutGroup01.group1.rotation,{z:i+10,duration:1.4,ease:"power4.out"}),this.gsap.to(this.aboutGroup01.group2.rotation,{z:n-10,duration:1.4,ease:"power4.out"})},3e3),this.resize()}createBox3(){let t=0;for(let e=0;e<this.aboutGroup03.box2xGrid;e++)for(let i=0;i<this.aboutGroup03.box2yGrid;i++){let n=this.aboutGroup03.box2[t];n.layers.set(1),n.position.set(-5,0,0),n.material.opacity=0,this.group03.push(n),this.currentGroup.add(n),t++,this.scene.add(n);let r=Math.random();r<=.25?this.aboutGroup03.group1.add(n):r>.25&&r<=.5?this.aboutGroup03.group2.add(n):r>.5&&r<=.75?this.aboutGroup03.group3.add(n):r>.75&&r<=1&&this.aboutGroup03.group4.add(n)}this.scene.add(this.aboutGroup03.group1,this.aboutGroup03.group2,this.aboutGroup03.group3,this.aboutGroup03.group4),this.resize()}scrollTrigger(){this.boxImageSwich(0)}objectScrollAnimation(){if(this.fristScroll==!0&&this.resize(),this.fristScroll=!1,this.scroll=window.scrollY,this.scroll<=this.fristHeight){let t=this.scroll/this.fristHeight*8,e=this.scroll/this.fristHeight*7,i=this.scroll/this.fristHeight*3,n=this.scroll/this.fristHeight*2;this.gsap.to(this.aboutGroup01.group1.position,{y:t,duration:.23}),this.gsap.to(this.aboutGroup01.group2.position,{y:e,duration:.4}),this.gsap.to(this.aboutGroup01.group3.position,{z:i,duration:.5}),this.gsap.to(this.aboutGroup01.group4.position,{z:n,duration:.66}),this.group03.forEach(r=>{r.position.set(-5,0,0)});for(let r=0;r<this.aboutGroup03.group1.children.length;r++)this.aboutGroup03.group1.children[r].material.opacity=0;for(let r=0;r<this.aboutGroup03.group2.children.length;r++)this.aboutGroup03.group2.children[r].material.opacity=0;for(let r=0;r<this.aboutGroup03.group2.children.length;r++)this.aboutGroup03.group2.children[r].material.opacity=0;for(let r=0;r<this.aboutGroup03.group3.children.length;r++)this.aboutGroup03.group3.children[r].material.opacity=0;for(let r=0;r<this.aboutGroup03.group4.children.length;r++)this.aboutGroup03.group4.children[r].material.opacity=0}if(this.scroll>this.fristHeight&&this.scroll<=this.secondHeight+this.secondClientHeight){if(this.meshPosition(),this.scroll>=this.fristHeight&&this.scroll<this.fristHeight+this.fristMargin/4){for(let e=0;e<this.aboutGroup03.group1.children.length;e++)this.gsap.to(this.aboutGroup03.group1.children[e].material,{opacity:0,duration:.4}),this.gsap.to(this.secondSubjects[0],{opacity:0,duration:.3});let t=0;for(let e=0;e<this.aboutGroup03.box2xGrid;e++)for(let i=0;i<this.aboutGroup03.box2yGrid;i++){let n=e*this.aboutGroup03.xSize-this.aboutGroup03.box2xGrid*this.aboutGroup03.xSize/2+this.aboutGroup03.xSize/2+2,r=i*this.aboutGroup03.ySize-this.aboutGroup03.box2yGrid*this.aboutGroup03.ySize/2+this.aboutGroup03.ySize/2;this.group03[t].position.set(n,r,0),t++}}if(this.scroll>=this.fristHeight+this.fristMargin/4&&this.scroll<=this.fristHeight+this.fristMargin/2){for(let t=0;t<this.aboutGroup03.group1.children.length;t++)this.gsap.to(this.aboutGroup03.group1.children[t].material,{opacity:0,duration:.4});this.gsap.to(this.secondSubjects[0],{opacity:0,duration:.3})}if(this.scroll>=this.fristHeight+this.fristMargin-this.secondGsapTrigger&&this.scroll<this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*15){for(let e=0;e<this.aboutGroup03.group1.children.length;e++)this.gsap.to(this.aboutGroup03.group1.children[e].material,{opacity:1,duration:.3});for(let e=0;e<this.aboutGroup03.group2.children.length;e++)this.gsap.to(this.aboutGroup03.group2.children[e].material,{opacity:0,duration:.3});this.gsap.to(this.secondSubjects[0],{opacity:1,duration:.3}),this.gsap.to(this.secondSubjects[1],{opacity:0,duration:.3});let t=0;for(let e=0;e<this.aboutGroup03.box2xGrid;e++)for(let i=0;i<this.aboutGroup03.box2yGrid;i++){let n=e*this.aboutGroup03.xSize-this.aboutGroup03.box2xGrid*this.aboutGroup03.xSize/2+this.aboutGroup03.xSize/2+2,r=i*this.aboutGroup03.ySize-this.aboutGroup03.box2yGrid*this.aboutGroup03.ySize/2+this.aboutGroup03.ySize/2;this.group03[t].position.set(n,r,0),t++}}if(this.scroll>=this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*15&&this.scroll<this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*30){for(let t=0;t<this.aboutGroup03.group1.children.length;t++)this.aboutGroup03.group1.children[t].material.opacity=1;for(let t=0;t<this.aboutGroup03.group2.children.length;t++)this.gsap.to(this.aboutGroup03.group2.children[t].material,{opacity:1,duration:.3});for(let t=0;t<this.aboutGroup03.group3.children.length;t++)this.gsap.to(this.aboutGroup03.group3.children[t].material,{opacity:0,duration:.3});this.gsap.to(this.secondSubjects[1],{opacity:1,duration:.3}),this.gsap.to(this.secondSubjects[2],{opacity:0,duration:.3}),this.meshPosition()}if(this.scroll>=this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*30&&this.scroll<this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*45){for(let t=0;t<this.aboutGroup03.group2.children.length;t++)this.aboutGroup03.group2.children[t].material.opacity=1;for(let t=0;t<this.aboutGroup03.group3.children.length;t++)this.gsap.to(this.aboutGroup03.group3.children[t].material,{opacity:1,duration:.3});for(let t=0;t<this.aboutGroup03.group4.children.length;t++)this.gsap.to(this.aboutGroup03.group4.children[t].material,{opacity:0,duration:.3});this.gsap.to(this.secondSubjects[2],{opacity:1,duration:.3}),this.gsap.to(this.secondSubjects[3],{opacity:0,duration:.3})}if(this.scroll>=this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*45&&this.scroll<this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*60){for(let t=0;t<this.aboutGroup03.group3.children.length;t++)this.aboutGroup03.group3.children[t].material.opacity=1;for(let t=0;t<this.aboutGroup03.group4.children.length;t++)this.gsap.to(this.aboutGroup03.group4.children[t].material,{opacity:1,duration:.3});this.gsap.to(this.secondSubjects[3],{opacity:1,duration:.3})}}if(this.scroll<=this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2&&this.scroll>this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*60&&(this.meshOpacity(),this.gsap.to(this.aboutThirdStickWrappers[0],{opacity:0,duration:.4})),this.scroll>=this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2&&this.scroll<this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight){this.meshOpacity(),this.boxImageSwich(0);for(let t=0;t<this.aboutGroup03.group4.children.length;t++)this.aboutGroup03.group4.children[t].material.opacity=1;this.gsap.to(this.aboutThirdStickWrappers[0],{opacity:1,duration:.4}),this.gsap.to(this.aboutThirdStickWrappers[1],{opacity:0,duration:.4})}this.scroll>=this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight&&this.scroll<this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*2&&(this.meshOpacity(),this.boxImageSwich(1),this.gsap.to(this.aboutThirdStickWrappers[0],{opacity:1,duration:.4}),this.gsap.to(this.aboutThirdStickWrappers[1],{opacity:1,duration:.4}),this.gsap.to(this.aboutThirdStickWrappers[2],{opacity:0,duration:.4})),this.scroll>=this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*2&&this.scroll<this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*3&&(this.meshOpacity(),this.boxImageSwich(2),this.gsap.to(this.aboutThirdStickWrappers[1],{opacity:0,duration:.4}),this.gsap.to(this.aboutThirdStickWrappers[2],{opacity:1,duration:.4}),this.gsap.to(this.aboutThirdStickWrappers[3],{opacity:0,duration:.4})),this.scroll>=this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*3&&this.scroll<this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*4&&(this.meshOpacity(),this.boxImageSwich(3),this.gsap.to(this.aboutThirdStickWrappers[2],{opacity:0,duration:.4}),this.gsap.to(this.aboutThirdStickWrappers[3],{opacity:1,duration:.4}))}resize(){if(this.width=window.innerWidth,this.height=window.innerHeight,this.secondGsapTrigger=this.height/100*15,this.fristHeight=this.aboutFirstWrapper.scrollHeight,this.fristMargin=this.height/2,this.secondHeight=this.aboutSecondWrapper.scrollHeight,this.secondClientHeight=this.aboutSecondWrapper.clientHeight,this.secondMargin=this.height,this.thirdHeight=this.aboutThridWrapper.scrollHeight,this.thirdTrigger=this.aboutThirdContentWrapper.clientHeight/100*15,this.width<480){for(let t=0;t<this.group01.length;t++)this.group01[t].material.opacity=0;this.aboutGroup03.group1.scale.set(.5,.5,.5),this.aboutGroup03.group2.scale.set(.5,.5,.5),this.aboutGroup03.group3.scale.set(.5,.5,.5),this.aboutGroup03.group4.scale.set(.5,.5,.5)}else if(this.width>=480&&this.width<=1023){for(let t=0;t<this.group01.length;t++)this.group01[t].material.opacity=0;this.aboutGroup03.group1.scale.set(.5,.5,.5),this.aboutGroup03.group2.scale.set(.5,.5,.5),this.aboutGroup03.group3.scale.set(.5,.5,.5),this.aboutGroup03.group4.scale.set(.5,.5,.5),this.aboutGroup03.group1.position.set(-1,0,0),this.aboutGroup03.group2.position.set(-1,0,0),this.aboutGroup03.group3.position.set(-1,0,0),this.aboutGroup03.group4.position.set(-1,0,0)}else if(this.width>1023){for(let t=0;t<this.group01.length;t++)this.group01[t].material.opacity=1;this.aboutGroup03.group1.scale.set(1,1,1),this.aboutGroup03.group2.scale.set(1,1,1),this.aboutGroup03.group3.scale.set(1,1,1),this.aboutGroup03.group4.scale.set(1,1,1),this.aboutGroup03.group1.position.set(0,0,0),this.aboutGroup03.group2.position.set(0,0,0),this.aboutGroup03.group3.position.set(0,0,0),this.aboutGroup03.group4.position.set(0,0,0)}this.fristScroll=!0}meshOpacity(){for(let t=0;t<this.aboutGroup03.group1.children.length;t++)this.aboutGroup03.group1.children[t].material.opacity=1;for(let t=0;t<this.aboutGroup03.group2.children.length;t++)this.aboutGroup03.group2.children[t].material.opacity=1;for(let t=0;t<this.aboutGroup03.group2.children.length;t++)this.aboutGroup03.group2.children[t].material.opacity=1;for(let t=0;t<this.aboutGroup03.group3.children.length;t++)this.aboutGroup03.group3.children[t].material.opacity=1;for(let t=0;t<this.aboutGroup03.group4.children.length;t++)this.aboutGroup03.group4.children[t].material.opacity=1}meshPosition(){let t=0,e;window.innerWidth<480&&(e=2);for(let i=0;i<this.aboutGroup03.box2xGrid;i++)for(let n=0;n<this.aboutGroup03.box2yGrid;n++){let r=i*this.aboutGroup03.xSize-this.aboutGroup03.box2xGrid*this.aboutGroup03.xSize/2+this.aboutGroup03.xSize/2+2-e,o=n*this.aboutGroup03.ySize-this.aboutGroup03.box2yGrid*this.aboutGroup03.ySize/2+this.aboutGroup03.ySize/2;this.group03[t].position.set(r,o,0),t++}}boxImageSwich(t){let e=Math.PI/180*180*t;for(let o=0;o<this.group03.length;o++)this.gsap.to(this.group03[o].rotation,{y:e,duration:.3,delay:o*.001});const i=1/this.aboutGroup03.box2xGrid,n=1/this.aboutGroup03.box2yGrid;let r=0;for(let o=0;o<this.aboutGroup03.box2xGrid;o++)for(let a=0;a<this.aboutGroup03.box2yGrid;a++){const l=this.group03[r].geometry.attributes.uv.array;for(let c=0;c<l.length;c+=2)l[c]=(l[c]+o)*i,l[c+1]=(l[c+1]+a)*n;this.group03[r].material.map=this.aboutGroup03.imges[t],r++}}movePage(){for(let t=0;t<this.group01.length;t++)this.gsap.to(this.group01[t].material,{opacity:0,duration:1.2});for(let t=0;t<this.group03.length;t++)this.gsap.to(this.group03[t].material,{opacity:0,duration:1.2});this.scene.remove(this.aboutGroup01.group1,this.aboutGroup01.group2,this.aboutGroup03.group1,this.aboutGroup03.group2,this.aboutGroup03.group3,this.aboutGroup03.group4);for(let t=0;t<this.aboutGroup01.group1.children.length;t++)this.aboutGroup01.group1.remove(this.aboutGroup01.group1.children[0]);for(let t=0;t<this.aboutGroup01.group2.children.length;t++)this.aboutGroup01.group1.remove(this.aboutGroup01.group2.children[0]);for(let t=0;t<this.aboutGroup03.group1.children.length;t++)this.aboutGroup01.group1.remove(this.aboutGroup01.group1.children[0]);for(let t=0;t<this.aboutGroup03.group2.children.length;t++)this.aboutGroup01.group1.remove(this.aboutGroup01.group2.children[0]);for(let t=0;t<this.aboutGroup03.group3.children.length;t++)this.aboutGroup01.group1.remove(this.aboutGroup01.group3.children[0]);for(let t=0;t<this.aboutGroup03.group4.children.length;t++)this.aboutGroup01.group1.remove(this.aboutGroup01.group4.children[0]);this.group01=[],this.group02=[],this.group03=[]}}class iS{constructor(t){this.gsap=t,this.tl=t.timeline(),this.scene,this.contactState,this.contactBox,this.halfX,this.halfY,this.scaleX=1,this.scaleY=1,this.seletedNum,this.seleted=!1,this.animating=!0,this.trigger=document.querySelector(".animationtrigger"),this.closeBtn=document.querySelector(".contactClose"),this.contact=document.querySelector(".contact"),this.contactLists=document.querySelectorAll(".contactList")}createMesh(t,e,i){this.contactBox=t,this.scene=e,this.contactState=i,this.meshs=[],this.tl.to(this.trigger,{opacity:0,duration:7.5}).to(this.trigger,{opacity:1,onComplte:()=>{this.createCube(),this.resize(),this.animating=!1}})}createCube(){for(let t=0;t<this.contactBox.number;t++){const e=this.contactBox.box[t],i=this.contactBox.trigger[t];this.contactBox.group[t].add(e),this.contactBox.group[t].add(i),e.name=this.contactBox.json[t][0],i.name=this.contactBox.json[t][0],e.updateMatrixWorld();let n=Math.random()*(.5- -.5)-.5,r=Math.random()*(7- -7)-7,o=Math.random()*(3.5- -3.5)-3.5,a=Math.random()<.5?-1:1,l=Math.random()<.5?-1:1,c=Math.random()<.5?-1:1;this.contactState[t].x=r,this.contactState[t].y=o,this.contactState[t].z=n,this.contactState[t].dx=Math.random()/1e3*3*a,this.contactState[t].dy=Math.random()/1e3*2*l,this.contactState[t].dz=Math.random()/1e3*2*c,this.contactState[t].rx=Math.random(),this.contactState[t].ry=Math.random(),this.contactState[t].rz=Math.random(),this.contactState[t].rdx=Math.random()/1e3*l*3,this.contactState[t].rdy=Math.random()/1e3*c*3,this.contactState[t].rdz=Math.random()/1e3*a*3,this.meshs.push(e)}this.resize()}createText(t,e){this.gsap.timeline().to(this.trigger,{opacity:0,duration:7.5}).to(this.trigger,{opacity:1,onComplte:()=>{this.contactBox.group[t].add(e),this.scene.add(this.contactBox.group[t])}})}selectMesh(t,e){if(this.seletedNum==e)return;let i=.7;this.seleted==!0&&this.changeContent(),this.gsap.timeline().to(this.contactLists[e],{display:"block",duration:0}).to(this.contactLists[e],{opacity:1,duration:.1}),this.gsap.to(this.closeBtn,{display:"block",opacity:1,duration:.1}),this.gsap.to(this.contactBox.group[e].position,{x:0,y:0,z:0,duration:i}),this.gsap.to(this.contactBox.group[e].children[0].rotation,{x:0,y:0,z:0,duration:i}),this.gsap.to(this.contactBox.group[e].children[1].rotation,{x:0,y:0,z:0,duration:i}),this.contactBox.group[e].children[2]&&this.gsap.to(this.contactBox.group[e].children[2].rotation,{x:0,y:0,z:0,duration:i});for(let r=0;r<this.contactBox.number;r++)r==e?this.gsap.to(this.contactBox.group[r].scale,{x:2.3,y:2.3,z:2.3,duration:i}):this.gsap.to(this.contactBox.group[r].scale,{x:.6,y:.6,z:.6,duration:i});this.seletedNum=e,this.seleted=!0}changeContent(){this.gsap.timeline().to(this.contactLists[this.seletedNum],{opacity:0,duration:.3}).to(this.contactLists[this.seletedNum],{display:"none"})}closeContent(){this.changeContent(),this.gsap.timeline().to(this.closeBtn,{opacity:0,duration:.3}).to(this.closeBtn,{display:"none"});for(let e=0;e<this.contactLists.length;e++)e==this.seletedNum&&(this.gsap.timeline(),this.tl.to(this.contactBox.group[e].position,{x:this.contactState[e].x,y:this.contactState[e].y,z:this.contactState[e].z,duration:.7}).to(this.trigger,{opacity:0,duration:.2,delay:.2,onComplte:()=>{this.seleted=!1,this.seletedNum=100}}),this.gsap.to(this.contactBox.group[e].children[0].rotation,{x:this.contactState[e].rx,y:this.contactState[e].ry,z:this.contactState[e].rz,duration:.7}),this.gsap.to(this.contactBox.group[e].children[1].rotation,{x:this.contactState[e].rx,y:this.contactState[e].ry,z:this.contactState[e].rz,duration:.7}),this.contactBox.group[e].children[2]&&this.gsap.to(this.contactBox.group[e].children[2].rotation,{x:this.contactState[e].rx,y:this.contactState[e].ry,z:this.contactState[e].rz,duration:.7})),this.gsap.to(this.contactBox.group[e].scale,{x:1,y:1,z:1,duration:.7})}resize(t,e){if(this.scaleX=window.innerWidth/1920,this.scaleY=window.innerHeight/953,this.halfX=this.contactBox.limiteX/2*this.scaleX,this.halfY=this.contactBox.limiteY/2*this.scaleY,window.innerWidth<480){this.halfX=1.5,this.halfY=2.5;for(let i=0;i<this.contactBox.number;i++)this.contactState[i].x=Math.random()*(1- -1)-.5,this.contactState[i].y=Math.random()*(1.2- -1.2)-.5,this.contactState[i].z=Math.random()*(.2- -.2)-.2,this.contactBox.group[i].scale.set(.65,.65,.65)}}update(){if(!this.animating){if(window.innerWidth>=480)for(let t=0;t<this.contactBox.number;t++)this.seletedNum!=t&&(this.contactState[t].x+=this.contactState[t].dx,this.contactState[t].y+=this.contactState[t].dy,this.contactState[t].z+=this.contactState[t].dz,this.contactState[t].x>this.halfX-this.contactBox.boxSize/2?this.contactState[t].dx*=-1:this.contactState[t].x<-this.halfX+this.contactBox.boxSize/2&&(this.contactState[t].dx*=-1),this.contactState[t].y<-this.halfY+this.contactBox.boxSize/2?this.contactState[t].dy*=-1:this.contactState[t].y>this.halfY-this.contactBox.boxSize/2&&(this.contactState[t].dy*=-1),this.contactState[t].z<-3.2?this.contactState[t].dz*=-1:this.contactState[t].z>.2&&(this.contactState[t].dz*=-1),this.contactBox.group[t].position.set(this.contactState[t].x,this.contactState[t].y,this.contactState[t].z),this.contactBox.group[t].children[0].rotation.set(this.contactState[t].rx,this.contactState[t].ry,this.contactState[t].rz),this.contactBox.group[t].children[1].rotation.set(this.contactState[t].rx,this.contactState[t].ry,this.contactState[t].rz),this.contactBox.group[t].children[2]&&this.contactBox.group[t].children[2].rotation.set(this.contactState[t].rx,this.contactState[t].ry,this.contactState[t].rz));else if(window.innerWidth<480)for(let t=0;t<this.contactBox.number;t++)this.seletedNum!=t&&(this.contactState[t].x+=this.contactState[t].dx,this.contactState[t].y+=this.contactState[t].dy,this.contactState[t].z+=this.contactState[t].dz,this.contactState[t].x>this.halfX-this.contactBox.boxSize/2?this.contactState[t].dx*=-1:this.contactState[t].x<-this.halfX+this.contactBox.boxSize/2&&(this.contactState[t].dx*=-1),this.contactState[t].y<-this.halfY+this.contactBox.boxSize/2?this.contactState[t].dy*=-1:this.contactState[t].y>this.halfY-this.contactBox.boxSize/2&&(this.contactState[t].dy*=-1),this.contactState[t].z<-3.2?this.contactState[t].dz*=-1:this.contactState[t].z>.2&&(this.contactState[t].dz*=-1),this.contactState[t].rx+=this.contactState[t].rdx,this.contactState[t].ry+=this.contactState[t].rdy,this.contactState[t].rz+=this.contactState[t].rdz,this.contactBox.group[t].position.set(this.contactState[t].x,this.contactState[t].y,this.contactState[t].z),this.contactBox.group[t].children[0].rotation.set(this.contactState[t].rx,this.contactState[t].ry,this.contactState[t].rz),this.contactBox.group[t].children[1].rotation.set(this.contactState[t].rx,this.contactState[t].ry,this.contactState[t].rz),this.contactBox.group[t].children[2]&&this.contactBox.group[t].children[2].rotation.set(this.contactState[t].rx,this.contactState[t].ry,this.contactState[t].rz))}}movePage(){this.changeContent(),this.gsap.timeline().to(this.closeBtn,{opacity:0,duration:.3}).to(this.closeBtn,{display:"none"}),this.seletedNum=100;for(let e=0;e<this.contactBox.number;e++)this.scene.remove(this.contactBox.group[e]);for(let e=0;e<this.contactBox.number;e++)this.contactBox.group[e].remove(this.contactBox.group[e].children[2]),this.contactBox.group[e].remove(this.contactBox.group[e].children[1]),this.contactBox.group[e].remove(this.contactBox.group[e].children[0]);this.animating=!0}}class nS{constructor(t){this.gsap=t,this.contentBox,this.contentTexture,this.scenc,this.camera,this.url=["https://gangsuuu.github.io/ForFave/","https://gangsuuu.github.io/rainAnimation/","https://gangsuuu.github.io/ballLight/","https://gangsuuu.github.io/mirrorBall/","https://gangsuuu.github.io/CameraShow/"],this.animation,this.startWidth,this.content=document.querySelector(".content"),this.contentTitles=document.querySelectorAll(".contentTitle"),this.contentView=document.querySelector(".contentView a"),this.trigger=document.querySelector(".animationtrigger")}createMesh(t,e,i,n,r){this.contentBox=t,this.contentTexture=e,this.scenc=i,this.camera=n,this.startWidth=r,this.gsap.timeline().to(this.trigger,{opacity:0,duration:7.5}).to(this.trigger,{opacity:1,onComplte:()=>{this.meshAdd(),this.resize(),this.boxChange()}})}boxChange(t){if(this.animation)return;this.animation=!0,t?t=="up"?(this.currentNum+=1,this.currentNum>=this.contentTitles.length&&(this.currentNum=0)):t=="down"&&(this.currentNum-=1,this.currentNum<0&&(this.currentNum=this.contentTitles.length-1)):this.currentNum=0;let e=this.gsap.timeline();this.contentBox.mesh.material.map=this.contentTexture[this.currentNum],t&&e.to(this.contentTitles[this.prveNum],{opacity:0,duration:.2}).to(this.contentTitles[this.prveNum],{display:"none",duration:.1}),e.to(this.contentTitles[this.currentNum],{display:"block",duration:.1}).to(this.contentTitles[this.currentNum],{opacity:1,duration:.2}).to(this.trigger,{opacity:0,onComplte:()=>{this.animation=!1}}),this.contentBox.mesh.rotation.x=0,this.gsap.to(this.contentBox.mesh.rotation,{x:Math.PI*2,duration:.6}),this.prveNum=this.currentNum,this.contentView.href=this.url[this.currentNum]}MeshMove(){}meshAdd(){let t=this.contentBox.meshSizeX/2+.7;this.contentBox.mesh.position.set(t,0,0),this.contentBox.mesh.rotation.set(0,-.4,0),this.scenc.add(this.contentBox.group)}resize(){this.scale=window.innerWidth/1920;let t=(1-this.scale)*2.5;if(window.innerWidth>=1023){let e=this.contentBox.meshSizeX/2+.7-t;this.contentBox.mesh.position.set(e,0,0),this.contentBox.mesh.rotation.set(0,-.4,0)}else window.innerWidth<1023&&window.innerWidth>479?(this.contentBox.mesh.position.set(0,0,0),this.contentBox.mesh.rotation.set(0,0,0)):window.innerWidth<=479&&(this.contentBox.group.scale.set(.7,.7,.7),this.contentBox.mesh.position.set(0,0,0),this.contentBox.mesh.rotation.set(0,0,0))}movePage(){this.scenc.remove(this.contentBox.group),this.contentBox.box="",this.gsap.timeline().to(this.contentTitles[this.prveNum],{opacity:0,duration:.2}).to(this.contentTitles[this.prveNum],{display:"none",duration:.1}),this.contentBox.group.remove(this.contentBox.group.children[0])}}class Ap{constructor(t,e,i,n,r){this.gsap=t,this.tl=this.gsap.timeline(),this.currentPage=e,this.camera=n,this.loadingMesh=i,this.clone,this.loadingMesh,this.prevPage,this.scene=r,this.isLoaded=!1,this.PI=Math.PI,this.count=1,this.header=document.querySelector(".headerNav"),this.index=document.querySelector(".index"),this.about=document.querySelector(".about"),this.navWrappers=document.querySelectorAll(".navWrapper a"),this.content=document.querySelector(".content"),this.contact=document.querySelector(".contact"),this.trigger=document.querySelector(".animationtrigger"),this.headerBtn=document.querySelector(".headerBtn")}boxRotation(){this.isLoaded||(this.tl.to(this.clone.rotation,{y:this.PI,duration:1.2,delay:.8,repeat:1}),this.tl.to(this.clone.rotation,{x:this.PI,duration:1.2,delay:.8,onComplte:()=>{this.intro(),this.count++}}))}setURL(){}loading(){this.clone=this.loadingMesh.clone(),this.clone.material.opacity=1,this.scene.add(this.clone),this.boxRotation()}intro(){this.tl.to(this.camera.position,{z:-.09,duration:1.2,ease:"power1.inOut"},"<=").to(this.camera.position,{z:5,duration:0,onComplte:()=>{this.showContent(),this.scene.remove(this.clone)}}),this.gsap.to(this.clone.material,{opacity:0,duration:.6,delay:.6})}showContent(){switch(this.currentPage){case"index":this.index.style.display="block",this.index.style.opacity=0,this.header.style.display="flex",this.header.style.opacity=0,this.gsap.to(this.index,{opacity:1,duration:.7,delay:1.7,ease:"power2.in"});break;case"about":this.about.style.display="block",this.about.style.opacity=0,this.gsap.to(this.about,{opacity:1,duration:.5});break;case"contact":this.contact.style.display="block",this.contact.style.opacity=0,this.gsap.to(this.contact,{opacity:1,duration:.5});break;case"content":this.content.style.display="flex",this.content.style.opacity=0,this.gsap.to(this.content,{opacity:1,duration:.3});break}if(this.currentPage!="index"){let t=this.gsap.timeline();this.gsap.to(this.header,{opacity:1,duration:.5}),t.to(this.headerBtn,{display:"block",duration:.2}).to(this.headerBtn,{opacity:1,duration:.4})}}outro(t,e){let i=t.target.dataset.link;switch(this.currentPage=String(i),e){case"index":this.prevPage=this.index;break;case"about":this.prevPage=this.about;break;case"contact":this.prevPage=this.content;break;case"content":this.prevPage=this.content;break}return this.tl.to(this.prevPage,{opacity:0,duration:1.2}),this.tl.to(this.prevPage,{display:"none",duration:0,onComplte:()=>{this.currentPage=="index"&&this.navWrappers.forEach(n=>{this.gsap.to(n,{y:0,opacity:1,duration:.3})})}}).to(this.trigger,{opacity:1,duration:1.2,onComplte:()=>{this.loading()}}),this.currentPage}}class rS{constructor(){this.Text={A:[[1,0],[2,0],[3,0],[4,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[1,4],[2,4],[3,4],[4,4],[0,5],[4,5],[0,6],[4,6]],B:[[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3],[0,4],[4,4],[0,5],[4,5],[0,6],[1,6],[2,6],[3,6]],C:[[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[0,3],[0,4],[0,5],[4,5],[1,6],[2,6],[3,6]],E:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[0,2],[0,3],[1,3],[2,3],[3,3],[0,4],[0,5],[0,6],[1,6],[2,6],[3,6],[4,6]],L:[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,6],[2,6],[3,6],[4,6]],N:[[0,0],[4,0],[0,1],[4,1],[0,2],[1,2],[4,2],[0,3],[2,3],[4,3],[0,4],[3,4],[4,4],[0,5],[4,5],[0,6],[4,6]],O:[[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[4,4],[0,5],[4,5],[1,6],[2,6],[3,6]],R:[[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3],[0,4],[4,4],[0,5],[4,5],[0,6],[4,6]],T:[[0,0],[1,0],[2,0],[3,0],[4,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6]],U:[[0,0],[4,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[4,4],[0,5],[4,5],[1,6],[2,6],[3,6]]}}moveText(t){switch(this.text=[],t){case 2:this.a=this.moveA(),this.b=this.moveB(),this.o=this.moveO(),this.u=this.moveU(),this.t=this.moveT(),this.text.push(this.a,this.b,this.o,this.u,this.t);break;case 3:this.c=this.moveC(),this.o=this.moveO(),this.n=this.moveN(),this.t=this.moveT(),this.e=this.moveE(),this.n=this.moveN(),this.t=this.moveT(),this.text.push(this.c,this.o,this.n,this.t,this.e,this.n,this.t);break;case 4:this.c=this.moveC(),this.o=this.moveO(),this.n=this.moveN(),this.t=this.moveT(),this.a=this.moveA(),this.c=this.moveC(),this.t=this.moveT(),this.text.push(this.c,this.o,this.n,this.t,this.a,this.c,this.t);break}return this.text}moveA(){return this.Text.A}moveB(){return this.Text.B}moveC(){return this.Text.C}moveE(){return this.Text.E}moveL(){return this.Text.L}moveN(){return this.Text.N}moveO(){return this.Text.O}moveR(){return this.Text.R}moveT(){return this.Text.T}moveU(){return this.Text.U}}class sS{constructor(t){this.boxPosition=new rS,this.loading=new Ap(t),this.gsap=t,this.tl=this.gsap.timeline(),this.scene,this.mesh,this.camera,this.total,this.meshs=[],this.navAs=document.querySelectorAll(".navWrapper a"),this.navWrapper=document.querySelector(".navWrapper"),this.trigger=document.querySelector(".animationtrigger"),this.cubeXSize,this.cubeYSize,this.cubeZSize,this.creatType,this.isAnimaiting=!0,this.isHold=!1,this.move=0}createMesh(t,e,i,n){this.mesh=t,this.scene=e,this.camera=i,this.group=n,this.total=this.mesh.xNum*this.mesh.yNum*this.mesh.zNum,this.cubeXSize=this.mesh.xNum*this.mesh.xSize+(this.mesh.xNum-1)*this.mesh.space/2,this.cubeYSize=this.mesh.yNum*this.mesh.ySize+(this.mesh.yNum-1)*this.mesh.space/2,this.cubeZSize=this.mesh.zNum*this.mesh.zSize+(this.mesh.zNum-1)*this.mesh.space/2;for(let o=0;o<this.mesh.xNum;o++)for(let a=0;a<this.mesh.yNum;a++)for(let l=0;l<this.mesh.zNum;l++){var r=this.mesh.mesh.clone();r.layers.set(0),r.updateMatrix(),r.matrixWorldAutoUpdate=!0,r.matrixWorldNeedsUpdate=!0,this.group.add(r),this.meshs.push(r),r.scale.set(0,0,0),this.gsap.to(r.scale,{x:1,y:1,z:1,duration:.5,delay:5.15+.004*o*a*l+this.move})}return this.tl.to(this.trigger,{opacity:0,duration:5.9+this.move}).to(this.trigger,{duration:.5,onComplte:()=>{this.move=2.3,this.moveToSquare(),this.setMouseAera(),this.resize()}}).to(this.trigger,{opacity:1,duration:1.1,onComplte:()=>{}}).to(this.trigger,{opacity:0,onComplte:()=>{this.isAnimaiting=!1}}),e.add(this.group),this.meshs}moveToSquare(t){let e,i=window.innerWidth/this.mesh.startWidth;window.innerWidth>=479?i<=.7&&(i=.7):i=1,t!=0?(t="back.inOut(4)",e=1.1):(t="power3.in",e=.77);let n=0,r=0,o=0;for(let a=0;a<this.total;a++){let l=n*(this.mesh.xSize*i)+n*(this.mesh.space*i)-this.mesh.xNum*(this.mesh.xSize*i)/2+this.mesh.space*i/2,c=r*(this.mesh.ySize*i)+r*(this.mesh.space*i)-this.mesh.yNum*(this.mesh.ySize*i)/2+this.mesh.space*i/2,h=o*(this.mesh.zSize*i)+o*(this.mesh.space*i)-this.mesh.zNum*(this.mesh.zSize*i)/2+this.mesh.space*i/2;this.gsap.to(this.meshs[a].position,{x:l,y:c,z:h,duration:e,ease:t}),o++,o>=this.mesh.zNum&&(o=0,r++,r>=this.mesh.yNum&&(r=0,n++))}}hoverAnimation(t){if(!this.isAnimaiting){if(t===0)this.moveToSquare(t),this.isHold=!1;else if(t===1){for(let e=0;e<this.meshs.length;e++){let i=(Math.random()*this.cubeXSize-this.cubeXSize/2)*(Math.random()*6.4),n=(Math.random()*this.cubeYSize-this.cubeYSize/2)*(Math.random()*6.4),r=Math.random()*8-4;this.gsap.to(this.meshs[e].position,{x:i,y:n,z:r,duration:.64,ease:"elastic.out(0.2,0.1)"})}this.isHold=!1}else if(t===2||t===3||t===4||t===5){let e=[],i=0,n=0,r=1;e=this.boxPosition.moveText(t),i=e.length;let o=7*this.mesh.ySize+6*this.mesh.space,a=5*this.mesh.xSize+4*this.mesh.space;e.forEach((l,c)=>{for(let h=0;h<l.length;h++){let u=l[h][0]*this.mesh.xSize+l[h][0]*this.mesh.space+c*a+c*r-(i*a+(i-1)*r)/2,f=l[h][1]*this.mesh.ySize+l[h][1]*this.mesh.space-o/2;this.gsap.to(this.meshs[n].position,{x:u,y:-f,z:-7,duration:.77,ease:"power4.out"}),n++}});for(let l=n;l<this.total;l++){let c=Math.random();c<.5?c=-4:c=4,this.gsap.to(this.meshs[l].position,{x:l-n-(this.total-n)/2+.5,y:c,z:Math.random()*13-12,duration:.78,ease:"power4.out"})}this.isHold=!0,this.boxRotation()}}}pageMove(t){t(),this.isHold=!0,this.isAnimaiting=!0,this.boxRotation();for(let e=0;e<this.meshs.length;e++)this.gsap.to(this.meshs[e].position,{x:0,y:0,z:0,duration:1.2,ease:"back.in(3)"});this.tl.to(this.trigger,{opacity:1,duration:1.2}).to(this.trigger,{opacity:0,onComplte:()=>{this.scene.remove(this.group),this.remove()}})}remove(){for(let t=0;t<this.group.children.length;t++)this.group.remove(this.group.children[0]),this.group.children.length!=0&&this.remove();this.meshs=[]}resize(){if(this.isAnimaiting==!0)return;let t=window.innerWidth/this.mesh.startWidth;window.innerWidth>=479?t<=.7&&(t=.7):t=1;let e=0,i=0,n=0;for(let r=0;r<this.total;r++){let o=e*(this.mesh.xSize*t)+e*(this.mesh.space*t)-this.mesh.xNum*(this.mesh.xSize*t)/2+this.mesh.space/2,a=i*(this.mesh.ySize*t)+i*(this.mesh.space*t)-this.mesh.yNum*(this.mesh.ySize*t)/2+this.mesh.space/2,l=n*(this.mesh.zSize*t)+n*(this.mesh.space*t)-this.mesh.zNum*(this.mesh.zSize*t)/2+this.mesh.space/2;this.meshs[r].position.set(o,a,l),this.meshs[r].scale.set(t,t,t),n++,n>=this.mesh.zNum&&(n=0,i++,i>=this.mesh.yNum&&(i=0,e++))}}boxRotation(t,e){if(this.isHold){this.gsap.to(this.group.rotation,{x:0,y:0,duration:.2});return}else this.group.rotation.x=-e/7,this.group.rotation.y=t/7}setMouseAera(){let t=0;for(let e=0;e<this.navAs.length;e++){let i=this.navAs[e].offsetWidth;t<i&&(t=i)}this.navWrapper.style.width=t+20+"px"}}function oS(){const s=document.querySelector("body"),t=document.querySelectorAll(".navWrapper a"),e=document.querySelector(".navWrapper"),i=document.querySelector(".navTitle span"),n=document.querySelector(".navTitle"),r=document.querySelector(".headerNav"),o=r.querySelectorAll(".headerLink"),a=r.querySelectorAll(".headerSlash"),l=r.querySelector(".headerBtn"),c=document.querySelector(".contactClose"),h=document.querySelector(".animationtrigger"),u=document.querySelector(".headerBg");ai.registerPlugin(Bt);let f,m,g,p,d,_=new id,S=new xe,y=new vt,v="index",b=0,A=!1,C,x=[],M=6,L=6,B=6,et=window.innerWidth,F=window.innerWidth,D=window.innerHeight;et<=1344&&(et=1344);let N=window.innerWidth/1920,X=window.innerWidth/1920;window.innerWidth>=479?(N<=.7&&(N=.7),X<=.7&&(X=.7)):(N=.5,X=.5);let E=.5*N,k=.5*N,it=.5*N;X<=.8&&(X=.8);let rt=.05*X,G=.5,H=.5,K=.5;const j={threshold:.23,strength:.4,radius:1,exposure:1},lt={mesh:new zs(new Is(new li(E,k,it)),new sr({color:"white",transparent:!0,opacity:1})),xNum:M,yNum:L,zNum:B,xSize:E,ySize:k,zSize:it,space:rt,startWidth:et},$={box1:new zs(new Is(new li(G,H,K)),new sr({color:"white",transparent:!0,opacity:1})),box2:new ui(new li(G,H,K),new sr({color:"white",transparent:!0})),xSize:G,ySize:H,zSize:K,box1Count:5,box2Count:5,startWidth:et,radius:1.3,group1:new xe,group2:new xe,group3:new xe,group4:new xe},Nt={box1:new zs(new Is(new li(G,H,K)),new sr({color:"white",transparent:!0,opacity:1})),box2:[],xSize:G,ySize:H,zSize:K,box2xGrid:16,box2yGrid:10,group1:new xe,group2:new xe,group3:new xe,group4:new xe,imges:[]},gt=1,Pt=1,ot=1;let Dt=[];const wt={box:[],trigger:[],text:[],text2:[],content:[],limiteX:15.4,limiteY:7.2,boxSize:gt,number:7,json:[["Recruitment","happy1995virus@naver.com"],["Business","happy1995virus@naver.com"],["Phone","+82 10-5400-6870"],["Address","Suwon-si Gyeonggi-do Republic of Korea"],["Instagram",""],["comment","Thank you for Look"],["comment2","Get in touch"]],group:[new xe,new xe,new xe,new xe,new xe,new xe,new xe],textloader:new Sy},Lt=[{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0},{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0},{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0},{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0},{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0},{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0},{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0},{X:0,y:0,z:0,dx:0,dy:0,dz:0,rx:0,ry:0,rz:0,rdx:0,rdy:0,rdz:0}];let qt=4,V=2.7,ee=2.7;const le={mesh:"",meshSizeX:qt,meshSizeY:V,meshSizeZ:ee,group:new xe},Ft=[],Wt=0;new Wa().set(Wt);const ie=new Zf({alpha:!0});ie.setClearColor(2631720,1),ie.autoClear=!1,document.querySelector("#container").appendChild(ie.domElement);const w={width:window.innerWidth,height:window.innerHeight},U=new wv,Q=new Oi(75,w.width/w.height,.1,1e3);let ct;const dt=new yy(ie);let zt;const ht=()=>{const nt=new by(U,Q);zt=new _s(new vt(w.width/w.height)),zt.strength=j.strength,zt.threshold=j.threshold,zt.radius=j.radius,zt.filter=!1,dt.addPass(nt),dt.addPass(zt)},J=new my("white",10,100);J.position.set(1,1,1),U.add(J);const Ct=J.clone();Ct.layers.set(1),Ct.intensity=2,U.add(Ct),Q.position.set(0,0,5);const St=new uy;St.load(),Nt.imges.push(St.load("./assets/imges/about_img_02.jpeg")),Nt.imges.push(St.load("./assets/imges/about_img_03.jpg")),Nt.imges.push(St.load("./assets/imges/about_img_04.jpg")),Nt.imges.push(St.load("./assets/imges/about_img_05.jpg")),Ft.push(St.load("./assets/imges/content_img_00.png")),Ft.push(St.load("./assets/imges/content_img_01.png")),Ft.push(St.load("./assets/imges/content_img_02.png")),Ft.push(St.load("./assets/imges/content_img_03.png")),Ft.push(St.load("./assets/imges/content_img_04.png"));const yt=new gy;yt.layers.set(1);const Et=()=>{switch(v){case"index":x=d.createMesh(lt,U,Q,S);for(let tt=0;tt<x.length;tt++)S.add(x[tt]);break;case"about":let nt=Nt.box2xGrid*Nt.box2yGrid;for(let tt=0;tt<nt;tt++){let ut=new ui(new li(G,H,K),new ss({color:"white",transparent:!0,opacity:1}));Nt.box2.push(ut)}m.createMesh($,Nt,U,Q,S);break;case"contact":for(let tt=0;tt<wt.number;tt++){const ut=new zs(new Is(new li(gt,Pt,ot)),new sr({color:"white",transparent:!0,opacity:1})),At=new ui(new li(gt,Pt,ot),new sy({color:"white",transparent:!0,opacity:0,roughness:0,transmission:.1,thickness:.2,envMapIntensity:1.7}));wt.textloader.load("./assets/fonts/NanumGothic_Bold.json",function(Qt){const re=new ss({color:26265,transparent:!0,opacity:1,side:Sn});let te=wt.json[tt][0];const T=Qt.generateShapes(te,.15),z=new Yc(T);z.computeBoundingBox();const Y=-.5*(z.boundingBox.max.x-z.boundingBox.min.x);z.translate(Y,0,0);const O=new ui(z,re);wt.text.push(O),g.createText(tt,O)}),At.layers.set(1),Dt.push(At),wt.box.push(ut),wt.trigger.push(At)}g.createMesh(wt,U,Lt);break;case"content":le.mesh=new ui(new li(qt,V,ee),new ss({color:"white"})),le.group.add(le.mesh),p.createMesh(le,Ft,U,Q,F);break}},Tt=()=>{switch(w.width=window.innerWidth,w.height=window.innerHeight,Q.aspect=w.width/w.height,Q.updateProjectionMatrix(),d.resize(),v){case"index":d.resize();break;case"about":m.resize();break;case"contact":g.resize(F,D);break;case"content":p.resize();break}ie.setSize(w.width,w.height),ie.setPixelRatio(Math.min(window.devicePixelRatio,2)),dt.setSize(w.width,w.height),d.setMouseAera();const nt=window.innerWidth/1980;s.style.fontSize=`${nt}rem`},_t=()=>{window.addEventListener("resize",Tt),window.addEventListener("mousemove",nt=>{switch(q(nt),st(),v){case"index":d.boxRotation(y.x,y.y);break}}),window.addEventListener("wheel",nt=>{switch(v){case"index":break;case"about":if(window.scrollY<=0)return;m.objectScrollAnimation();break;case"content":let tt;nt.deltaY>0?tt="up":tt="down",p.boxChange(tt)}}),window.addEventListener("click",nt=>{v=="contact"&&st("click")}),Kt(),R()},Zt=()=>{t.forEach((nt,tt)=>{ai.to(nt,{y:35,duration:.25,opacity:0})})},Kt=()=>{e.addEventListener("mouseenter",nt=>{t.forEach(tt=>{tt.style.color="var(--textColor01in)"}),b=1,d.hoverAnimation(b)}),e.addEventListener("mouseleave",nt=>{t.forEach(tt=>{tt.style.color="var(--textColor01Out)"}),b=0,d.hoverAnimation(b)}),e.addEventListener("mouseenter",nt=>{nt.target==e&&(b=1,d.hoverAnimation(b))}),t.forEach((nt,tt)=>{nt.addEventListener("mouseenter",ut=>{ut.target===nt&&(ut.target.style.color="var(--textColor01hover)"),b=tt+2,d.hoverAnimation(b)}),nt.addEventListener("mouseleave",ut=>{ut.target===nt&&(ut.target.style.color="var(--textColor01in)"),b=1,d.hoverAnimation(b)})}),t.forEach(nt=>{nt.addEventListener("click",tt=>{d.pageMove(Zt),v=f.outro(tt,v),Et()})}),n.addEventListener("mouseenter",()=>{b=1,d.hoverAnimation(b)}),n.addEventListener("mouseleave",()=>{b=0,d.hoverAnimation(b)}),i.addEventListener("click",Zt),i.addEventListener("mouseenter",nt=>{nt.target.style.color="var(--textColor01hover)"}),i.addEventListener("mouseleave",nt=>{nt.target.style.color="var(--textColorTitle)"}),o.forEach(nt=>{nt.addEventListener("click",tt=>{if(tt.target.dataset.link!=v){switch(o.forEach((ut,At)=>{let Qt=ai.timeline();Qt.to(ut,{opacity:0,duration:.3}),Qt.to(a[At],{opacity:0,duration:.3}).to(l,{opacity:0,duration:.3},"+>0").to(ut,{display:"none"}).to(a[At],{display:"none"}).to(l,{rotation:0})}),v){case"index":break;case"about":m.movePage();break;case"contact":g.movePage();break;case"content":p.movePage();break}if(window.innerWidth<480){u.style.display="none",r.style.pointerEvents="none";for(let ut=0;ut<o.length;ut++)o[ut].style.opacity=0;for(let ut=0;ut<a.length;ut++)o[ut].style.opacity=0}v=f.outro(tt,v),l.classList.remove(".show"),Et()}})}),l.addEventListener("click",nt=>{if(A!=!0){if(A=!0,l.classList.toggle(".show"),window.innerWidth>=480)l.classList.contains(".show")?(ai.to(l,{rotation:90,duration:.3}),o.forEach((ut,At)=>{ai.timeline().to(ut,{display:"block",duration:.1}).to(a[At],{display:"block",duration:.1}).to(ut,{opacity:1,duration:.3,delay:.04*At}).to(a[At],{opacity:1,duration:.3,delay:4*.02})})):(ai.to(l,{rotation:0,duration:.3}),o.forEach((ut,At)=>{let Qt=ai.timeline();Qt.to(ut,{opacity:0,duration:.3,delay:.03*At}),Qt.to(a[o.length-1-At],{opacity:0,duration:.3,delay:.03*At+4*.02}).to(h,{opacity:0,duration:4*.02+.03*4}).to(ut,{display:"none",duration:.1}).to(a[o.length-1-At],{display:"none",duration:.1})})),ai.timeline().to(h,{opacity:0,duration:.7}).to(h,{opacity:0,onComplete:()=>{A=!1}});else if(window.innerWidth<480)if(l.classList.contains(".show")){u.style.display="block",r.style.pointerEvents="auto";for(let tt=0;tt<o.length;tt++)o[tt].style.display="block",o[tt].style.opacity=1;for(let tt=0;tt<a.length;tt++)a[tt].style.display="block",a[tt].style.opacity=1;A=!1}else{console.log("test"),u.style.display="none",r.style.pointerEvents="none";for(let tt=0;tt<o.length;tt++)o[tt].style.opacity=0;for(let tt=0;tt<a.length;tt++)a[tt].style.opacity=0;A=!1,l.classList.remove(".show")}}})},R=()=>{c.addEventListener("click",()=>{g.closeContent()})},q=nt=>{y.x=nt.clientX/w.width*2-1,y.y=-(nt.clientY/w.height)*2+1},st=nt=>{const tt=yt.intersectObjects(Dt);if(yt.setFromCamera(y,Q),nt=="click"&&tt.length>0){let ut,At;tt.forEach(Qt=>{for(let ne=0;ne<Dt.length;ne++)Qt.object===Dt[ne]&&(ut?ut.distance>Qt.distance&&(ut=wt.box[ne],At=ne):(ut=wt.box[ne],At=ne))}),g.selectMesh(ut,At)}for(let ut=0;ut<wt.box.length;ut++);tt.length>0&&tt.forEach(ut=>{for(let At=0;At<Dt.length;At++)ut.object,Dt[At]})},mt=()=>{const nt=_.getElapsedTime();ie.clear(),Q.layers.set(0),dt.render(),ie.clearDepth(),Q.layers.set(1),ie.render(U,Q),v=="contact"&&g.update(nt),requestAnimationFrame(()=>{mt()})},bt=()=>{d=new sS(ai),m=new eS(ai,ct),g=new iS(ai),p=new nS(ai)},at=()=>{localStorage.getItem("prevlink")&&(v=localStorage.getItem("prevlink"),localStorage.removeItem("prevlink"))},Z=()=>{const nt=new li(E,k,it),tt=new Is(nt);return new zs(tt,new sr({color:"white",transparent:!0}))};(()=>{bt(),at(),C=Z(),x=Et(),f=new Ap(ai,v,C,Q,U),f.loading(),ht(),_t(),Tt(),mt()})()}oS();
