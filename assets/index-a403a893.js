(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="147",Ap=0,gh=1,Pp=2,Tf=1,Lp=2,zs=3,us=0,ki=1,Fn=2,Vn=0,rs=1,jl=2,_h=3,xh=4,Dp=5,Zr=100,Rp=101,Ip=102,vh=103,yh=104,zp=200,Op=201,Fp=202,Np=203,Cf=204,Ef=205,Up=206,Bp=207,kp=208,Gp=209,Vp=210,Hp=0,Wp=1,Xp=2,Kl=3,qp=4,Yp=5,$p=6,Zp=7,Af=0,Jp=1,jp=2,Mn=0,Kp=1,Qp=2,tm=3,em=4,im=5,Pf=300,fs=301,ds=302,Ql=303,tc=304,Na=306,ec=1e3,Zi=1001,ic=1002,ai=1003,bh=1004,Sh=1005,Ii=1006,nm=1007,Ua=1008,Sr=1009,rm=1010,sm=1011,Lf=1012,om=1013,cr=1014,hr=1015,eo=1016,am=1017,lm=1018,ss=1020,cm=1021,hm=1022,Ji=1023,um=1024,fm=1025,dr=1026,ps=1027,dm=1028,pm=1029,mm=1030,gm=1031,_m=1033,Ka=33776,Qa=33777,tl=33778,el=33779,Mh=35840,wh=35841,Th=35842,Ch=35843,xm=36196,Eh=37492,Ah=37496,Ph=37808,Lh=37809,Dh=37810,Rh=37811,Ih=37812,zh=37813,Oh=37814,Fh=37815,Nh=37816,Uh=37817,Bh=37818,kh=37819,Gh=37820,Vh=37821,Hh=36492,Mr=3e3,le=3001,vm=3200,ym=3201,bm=0,Sm=1,tn="srgb",io="srgb-linear",il=7680,Mm=519,Wh=35044,Xh="300 es",nc=1035;class Ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ca=Math.PI/180,qh=180/Math.PI;function ws(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[s&255]+Ve[s>>8&255]+Ve[s>>16&255]+Ve[s>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function ei(s,t,e){return Math.max(t,Math.min(e,s))}function wm(s,t){return(s%t+t)%t}function nl(s,t,e){return(1-e)*s+e*t}function Yh(s){return(s&s-1)===0&&s!==0}function rc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function So(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pi(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wi{constructor(){wi.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,n,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],p=n[0],d=n[3],_=n[6],S=n[1],y=n[4],v=n[7],b=n[2],P=n[5],E=n[8];return r[0]=o*p+a*S+l*b,r[3]=o*d+a*y+l*P,r[6]=o*_+a*v+l*E,r[1]=c*p+h*S+u*b,r[4]=c*d+h*y+u*P,r[7]=c*_+h*v+u*E,r[2]=f*p+m*S+g*b,r[5]=f*d+m*y+g*P,r[8]=f*_+m*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=e*u+i*f+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=u*p,t[1]=(n*c-h*i)*p,t[2]=(a*i-n*o)*p,t[3]=f*p,t[4]=(h*e-n*l)*p,t[5]=(n*r-a*e)*p,t[6]=m*p,t[7]=(i*l-c*e)*p,t[8]=(o*e-i*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rl.makeScale(t,e)),this}rotate(t){return this.premultiply(rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(rl.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rl=new wi;function Df(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function no(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ha(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const sl={[tn]:{[io]:pr},[io]:{[tn]:ha}},Ze={legacyMode:!0,get workingColorSpace(){return io},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.legacyMode||t===e||!t||!e)return s;if(sl[t]&&sl[t][e]!==void 0){const i=sl[t][e];return s.r=i(s.r),s.g=i(s.g),s.b=i(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},Rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},we={r:0,g:0,b:0},Wi={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function ol(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function wo(s,t){return t.r=s.r,t.g=s.g,t.b=s.b,t}class Qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ze.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Ze.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ze.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Ze.workingColorSpace){if(t=wm(t,1),e=ei(e,0,1),i=ei(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ol(o,r,t+1/3),this.g=ol(o,r,t),this.b=ol(o,r,t-1/3)}return Ze.toWorkingColorSpace(this,n),this}setStyle(t,e=tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ze.toWorkingColorSpace(this,e),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ze.toWorkingColorSpace(this,e),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return i(r[4]),this.setHSL(l,c,h,e)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Ze.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Ze.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=tn){const i=Rf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}copyLinearToSRGB(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Ze.fromWorkingColorSpace(wo(this,we),t),ei(we.r*255,0,255)<<16^ei(we.g*255,0,255)<<8^ei(we.b*255,0,255)<<0}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ze.workingColorSpace){Ze.fromWorkingColorSpace(wo(this,we),e);const i=we.r,n=we.g,r=we.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(wo(this,we),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=tn){return Ze.fromWorkingColorSpace(wo(this,we),t),t!==tn?`color(${t} ${we.r} ${we.g} ${we.b})`:`rgb(${we.r*255|0},${we.g*255|0},${we.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(Wi),Wi.h+=t,Wi.s+=e,Wi.l+=i,this.setHSL(Wi.h,Wi.s,Wi.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(Mo);const i=nl(Wi.h,Mo.h,e),n=nl(Wi.s,Mo.s,e),r=nl(Wi.l,Mo.l,e);return this.setHSL(i,n,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Qt.NAMES=Rf;let Lr;class If{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Lr===void 0&&(Lr=no("canvas")),Lr.width=t.width,Lr.height=t.height;const i=Lr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Lr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=no("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=pr(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(pr(e[i]/255)*255):e[i]=pr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class zf{constructor(t=null){this.isSource=!0,this.uuid=ws(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(al(n[o].image)):r.push(al(n[o]))}else r=al(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function al(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?If.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tm=0;class li extends Ms{constructor(t=li.DEFAULT_IMAGE,e=li.DEFAULT_MAPPING,i=Zi,n=Zi,r=Ii,o=Ua,a=Ji,l=Sr,c=li.DEFAULT_ANISOTROPY,h=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=ws(),this.name="",this.source=new zf(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ec:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case ic:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ec:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case ic:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=Pf;li.DEFAULT_ANISOTROPY=1;class ze{constructor(t=0,e=0,i=0,n=1){ze.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(m+1)/2,b=(_+1)/2,P=(h+f)/4,E=(u+p)/4,x=(g+d)/4;return y>v&&y>b?y<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(y),n=P/i,r=E/i):v>b?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=P/n,r=x/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=E/r,n=x/r),this.set(i,n,r,e),this}let S=Math.sqrt((d-g)*(d-g)+(u-p)*(u-p)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(u-p)/S,this.z=(f-h)/S,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ki extends Ms{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e);const n={width:t,height:e,depth:1};this.texture=new li(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ii,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Of extends li{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ai,this.minFilter=ai,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cm extends li{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ai,this.minFilter=ai,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class go{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const f=r[o+0],m=r[o+1],g=r[o+2],p=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(u!==p||l!==f||c!==m||h!==g){let d=1-a;const _=l*f+c*m+h*g+u*p,S=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const b=Math.sqrt(y),P=Math.atan2(b,_*S);d=Math.sin(d*P)/b,a=Math.sin(a*P)/b}const v=a*S;if(l=l*d+f*v,c=c*d+m*v,h=h*d+g*v,u=u*d+p*v,d===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-a*m,t[e+2]=c*g+h*m+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),f=l(i/2),m=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-n)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-n)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ei(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(r),i*Math.cos(r),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($h.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*n-a*i,h=l*i+a*e-r*n,u=l*n+r*i-o*e,f=-r*e-o*i-a*n;return this.x=c*l+f*-r+h*-a-u*-o,this.y=h*l+f*-o+u*-r-c*-a,this.z=u*l+f*-a+c*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ei(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new I,$h=new go;class _o{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,n=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],f=t[l+2];h<e&&(e=h),u<i&&(i=u),f<n&&(n=f),h>r&&(r=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(e,i,n),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,i=1/0,n=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),f=t.getZ(l);h<e&&(e=h),u<i&&(i=u),f<n&&(n=f),h>r&&(r=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(e,i,n),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Kn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Kn)}else i.boundingBox===null&&i.computeBoundingBox(),cl.copy(i.boundingBox),cl.applyMatrix4(t.matrixWorld),this.union(cl);const n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),To.subVectors(this.max,Es),Dr.subVectors(t.a,Es),Rr.subVectors(t.b,Es),Ir.subVectors(t.c,Es),En.subVectors(Rr,Dr),An.subVectors(Ir,Rr),Qn.subVectors(Dr,Ir);let e=[0,-En.z,En.y,0,-An.z,An.y,0,-Qn.z,Qn.y,En.z,0,-En.x,An.z,0,-An.x,Qn.z,0,-Qn.x,-En.y,En.x,0,-An.y,An.x,0,-Qn.y,Qn.x,0];return!hl(e,Dr,Rr,Ir,To)||(e=[1,0,0,0,1,0,0,0,1],!hl(e,Dr,Rr,Ir,To))?!1:(Co.crossVectors(En,An),e=[Co.x,Co.y,Co.z],hl(e,Dr,Rr,Ir,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Kn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new I,new I,new I,new I,new I,new I,new I,new I],Kn=new I,cl=new _o,Dr=new I,Rr=new I,Ir=new I,En=new I,An=new I,Qn=new I,Es=new I,To=new I,Co=new I,tr=new I;function hl(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){tr.fromArray(s,r);const a=n.x*Math.abs(tr.x)+n.y*Math.abs(tr.y)+n.z*Math.abs(tr.z),l=t.dot(tr),c=e.dot(tr),h=i.dot(tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Em=new _o,As=new I,ul=new I;class Ba{constructor(t=new I,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Em.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);const e=As.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(As,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(ul)),this.expandByPoint(As.copy(t.center).sub(ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new I,fl=new I,Eo=new I,Pn=new I,dl=new I,Ao=new I,pl=new I;class Oc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.direction).multiplyScalar(e).add(this.origin),pn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){fl.copy(t).add(e).multiplyScalar(.5),Eo.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(fl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Eo),a=Pn.dot(this.direction),l=-Pn.dot(Eo),c=Pn.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const p=1/h;u*=p,f*=p,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),n&&n.copy(Eo).multiplyScalar(f).add(fl),m}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const i=pn.dot(this.direction),n=pn.dot(pn)-i*i,r=t.radius*t.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,i,n,r){dl.subVectors(e,t),Ao.subVectors(i,t),pl.crossVectors(dl,Ao);let o=this.direction.dot(pl),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pn.subVectors(this.origin,t);const l=a*this.direction.dot(Ao.crossVectors(Pn,Ao));if(l<0)return null;const c=a*this.direction.dot(dl.cross(Pn));if(c<0||l+c>o)return null;const h=-a*Pn.dot(pl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,n,r,o,a,l,c,h,u,f,m,g,p,d){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=n,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=f,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/zr.setFromMatrixColumn(t,0).length(),r=1/zr.setFromMatrixColumn(t,1).length(),o=1/zr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*u,g=a*h,p=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-p*c,e[9]=-a*l,e[2]=p-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,p=c*u;e[0]=f+p*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=p+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,p=c*u;e[0]=f-p*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=p-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*u,g=a*h,p=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+p,e[1]=l*u,e[5]=p*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,p=a*c;e[0]=l*h,e[4]=p-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-p*u}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,p=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+p,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=p*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Am,t,Pm)}lookAt(t,e,i){const n=this.elements;return mi.subVectors(t,e),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Ln.crossVectors(i,mi),Ln.lengthSq()===0&&(Math.abs(i.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Ln.crossVectors(i,mi)),Ln.normalize(),Po.crossVectors(mi,Ln),n[0]=Ln.x,n[4]=Po.x,n[8]=mi.x,n[1]=Ln.y,n[5]=Po.y,n[9]=mi.y,n[2]=Ln.z,n[6]=Po.z,n[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],p=i[6],d=i[10],_=i[14],S=i[3],y=i[7],v=i[11],b=i[15],P=n[0],E=n[4],x=n[8],M=n[12],D=n[1],U=n[5],it=n[9],N=n[13],R=n[2],F=n[6],Z=n[10],C=n[14],k=n[3],tt=n[7],nt=n[11],H=n[15];return r[0]=o*P+a*D+l*R+c*k,r[4]=o*E+a*U+l*F+c*tt,r[8]=o*x+a*it+l*Z+c*nt,r[12]=o*M+a*N+l*C+c*H,r[1]=h*P+u*D+f*R+m*k,r[5]=h*E+u*U+f*F+m*tt,r[9]=h*x+u*it+f*Z+m*nt,r[13]=h*M+u*N+f*C+m*H,r[2]=g*P+p*D+d*R+_*k,r[6]=g*E+p*U+d*F+_*tt,r[10]=g*x+p*it+d*Z+_*nt,r[14]=g*M+p*N+d*C+_*H,r[3]=S*P+y*D+v*R+b*k,r[7]=S*E+y*U+v*F+b*tt,r[11]=S*x+y*it+v*Z+b*nt,r[15]=S*M+y*N+v*C+b*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],p=t[7],d=t[11],_=t[15];return g*(+r*l*u-n*c*u-r*a*f+i*c*f+n*a*m-i*l*m)+p*(+e*l*m-e*c*f+r*o*f-n*o*m+n*c*h-r*l*h)+d*(+e*c*u-e*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+_*(-n*a*h-e*l*u+e*a*f+n*o*u-i*o*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],p=t[13],d=t[14],_=t[15],S=u*d*c-p*f*c+p*l*m-a*d*m-u*l*_+a*f*_,y=g*f*c-h*d*c-g*l*m+o*d*m+h*l*_-o*f*_,v=h*p*c-g*u*c+g*a*m-o*p*m-h*a*_+o*u*_,b=g*u*l-h*p*l-g*a*f+o*p*f+h*a*d-o*u*d,P=e*S+i*y+n*v+r*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/P;return t[0]=S*E,t[1]=(p*f*r-u*d*r-p*n*m+i*d*m+u*n*_-i*f*_)*E,t[2]=(a*d*r-p*l*r+p*n*c-i*d*c-a*n*_+i*l*_)*E,t[3]=(u*l*r-a*f*r-u*n*c+i*f*c+a*n*m-i*l*m)*E,t[4]=y*E,t[5]=(h*d*r-g*f*r+g*n*m-e*d*m-h*n*_+e*f*_)*E,t[6]=(g*l*r-o*d*r-g*n*c+e*d*c+o*n*_-e*l*_)*E,t[7]=(o*f*r-h*l*r+h*n*c-e*f*c-o*n*m+e*l*m)*E,t[8]=v*E,t[9]=(g*u*r-h*p*r-g*i*m+e*p*m+h*i*_-e*u*_)*E,t[10]=(o*p*r-g*a*r+g*i*c-e*p*c-o*i*_+e*a*_)*E,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*m-e*a*m)*E,t[12]=b*E,t[13]=(h*p*n-g*u*n+g*i*f-e*p*f-h*i*d+e*u*d)*E,t[14]=(g*a*n-o*p*n-g*i*l+e*p*l+o*i*d-e*a*d)*E,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*f+e*a*f)*E,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,p=o*h,d=o*u,_=a*u,S=l*c,y=l*h,v=l*u,b=i.x,P=i.y,E=i.z;return n[0]=(1-(p+_))*b,n[1]=(m+v)*b,n[2]=(g-y)*b,n[3]=0,n[4]=(m-v)*P,n[5]=(1-(f+_))*P,n[6]=(d+S)*P,n[7]=0,n[8]=(g+y)*E,n[9]=(d-S)*E,n[10]=(1-(f+p))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=zr.set(n[0],n[1],n[2]).length();const o=zr.set(n[4],n[5],n[6]).length(),a=zr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Xi.copy(this);const c=1/r,h=1/o,u=1/a;return Xi.elements[0]*=c,Xi.elements[1]*=c,Xi.elements[2]*=c,Xi.elements[4]*=h,Xi.elements[5]*=h,Xi.elements[6]*=h,Xi.elements[8]*=u,Xi.elements[9]*=u,Xi.elements[10]*=u,e.setFromRotationMatrix(Xi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o){const a=this.elements,l=2*r/(e-t),c=2*r/(i-n),h=(e+t)/(e-t),u=(i+n)/(i-n),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,n,r,o){const a=this.elements,l=1/(e-t),c=1/(i-n),h=1/(o-r),u=(e+t)*l,f=(i+n)*c,m=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const zr=new I,Xi=new ge,Am=new I(0,0,0),Pm=new I(1,1,1),Ln=new I,Po=new I,mi=new I,Zh=new ge,Jh=new go;class xo{constructor(t=0,e=0,i=0,n=xo.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(ei(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ei(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ei(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ei(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ei(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ei(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}xo.DefaultOrder="XYZ";xo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ka{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lm=0;const jh=new I,Or=new go,mn=new ge,Lo=new I,Ps=new I,Dm=new I,Rm=new go,Kh=new I(1,0,0),Qh=new I(0,1,0),tu=new I(0,0,1),Im={type:"added"},eu={type:"removed"};class Be extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DefaultUp.clone();const t=new I,e=new xo,i=new go,n=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ge},normalMatrix:{value:new wi}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Be.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Be.DefaultMatrixWorldAutoUpdate,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Or.setFromAxisAngle(t,e),this.quaternion.multiply(Or),this}rotateOnWorldAxis(t,e){return Or.setFromAxisAngle(t,e),this.quaternion.premultiply(Or),this}rotateX(t){return this.rotateOnAxis(Kh,t)}rotateY(t){return this.rotateOnAxis(Qh,t)}rotateZ(t){return this.rotateOnAxis(tu,t)}translateOnAxis(t,e){return jh.copy(t).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kh,t)}translateY(t){return this.translateOnAxis(Qh,t)}translateZ(t){return this.translateOnAxis(tu,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Lo.copy(t):Lo.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Ps,Lo,this.up):mn.lookAt(Lo,Ps,this.up),this.quaternion.setFromRotationMatrix(mn),n&&(mn.extractRotation(n.matrixWorld),Or.setFromRotationMatrix(mn),this.quaternion.premultiply(Or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Im)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(eu)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Rm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++){const a=n[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Be.DefaultUp=new I(0,1,0);Be.DefaultMatrixAutoUpdate=!0;Be.DefaultMatrixWorldAutoUpdate=!0;const qi=new I,gn=new I,ml=new I,_n=new I,Fr=new I,Nr=new I,iu=new I,gl=new I,_l=new I,xl=new I;class rn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),qi.subVectors(t,e),n.cross(qi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){qi.subVectors(n,e),gn.subVectors(i,e),ml.subVectors(t,e);const o=qi.dot(qi),a=qi.dot(gn),l=qi.dot(ml),c=gn.dot(gn),h=gn.dot(ml),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,_n),l.set(0,0),l.addScaledVector(r,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l}static isFrontFacing(t,e,i,n){return qi.subVectors(i,e),gn.subVectors(t,e),qi.cross(gn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qi.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),qi.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,r){return rn.getUV(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let o,a;Fr.subVectors(n,i),Nr.subVectors(r,i),gl.subVectors(t,i);const l=Fr.dot(gl),c=Nr.dot(gl);if(l<=0&&c<=0)return e.copy(i);_l.subVectors(t,n);const h=Fr.dot(_l),u=Nr.dot(_l);if(h>=0&&u<=h)return e.copy(n);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Fr,o);xl.subVectors(t,r);const m=Fr.dot(xl),g=Nr.dot(xl);if(g>=0&&m<=g)return e.copy(r);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Nr,a);const d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return iu.subVectors(r,n),a=(u-h)/(u-h+(m-g)),e.copy(n).addScaledVector(iu,a);const _=1/(d+p+f);return o=p*_,a=f*_,e.copy(i).addScaledVector(Fr,o).addScaledVector(Nr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let zm=0;class vo extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=rs,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Cf,this.blendDst=Ef,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=il,this.stencilZFail=il,this.stencilZPass=il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==us&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ga extends vo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new I,Do=new yt;class an{constructor(t,e,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i===!0,this.usage=Wh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=So(e,this.array)),e}setX(t,e){return this.normalized&&(e=pi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=So(e,this.array)),e}setY(t,e){return this.normalized&&(e=pi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=So(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=So(e,this.array)),e}setW(t,e){return this.normalized&&(e=pi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pi(e,this.array),i=pi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=pi(e,this.array),i=pi(i,this.array),n=pi(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=pi(e,this.array),i=pi(i,this.array),n=pi(n,this.array),r=pi(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wh&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ff extends an{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Nf extends an{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ke extends an{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Om=0;const Ai=new ge,vl=new Be,Ur=new I,gi=new _o,Ls=new _o,De=new I;class Hi extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Df(t)?Nf:Ff)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new wi().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,e,i){return Ai.makeTranslation(t,e,i),this.applyMatrix4(Ai),this}scale(t,e,i){return Ai.makeScale(t,e,i),this.applyMatrix4(Ai),this}lookAt(t){return vl.lookAt(t),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(gi.min,Ls.min),gi.expandByPoint(De),De.addVectors(gi.max,Ls.max),gi.expandByPoint(De)):(gi.expandByPoint(Ls.min),gi.expandByPoint(Ls.max))}gi.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(Ur.fromBufferAttribute(t,c),De.add(Ur)),n=Math.max(n,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,r=e.normal.array,o=e.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let D=0;D<a;D++)c[D]=new I,h[D]=new I;const u=new I,f=new I,m=new I,g=new yt,p=new yt,d=new yt,_=new I,S=new I;function y(D,U,it){u.fromArray(n,D*3),f.fromArray(n,U*3),m.fromArray(n,it*3),g.fromArray(o,D*2),p.fromArray(o,U*2),d.fromArray(o,it*2),f.sub(u),m.sub(u),p.sub(g),d.sub(g);const N=1/(p.x*d.y-d.x*p.y);isFinite(N)&&(_.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(N),S.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(N),c[D].add(_),c[U].add(_),c[it].add(_),h[D].add(S),h[U].add(S),h[it].add(S))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let D=0,U=v.length;D<U;++D){const it=v[D],N=it.start,R=it.count;for(let F=N,Z=N+R;F<Z;F+=3)y(i[F+0],i[F+1],i[F+2])}const b=new I,P=new I,E=new I,x=new I;function M(D){E.fromArray(r,D*3),x.copy(E);const U=c[D];b.copy(U),b.sub(E.multiplyScalar(E.dot(U))).normalize(),P.crossVectors(x,U);const N=P.dot(h[D])<0?-1:1;l[D*4]=b.x,l[D*4+1]=b.y,l[D*4+2]=b.z,l[D*4+3]=N}for(let D=0,U=v.length;D<U;++D){const it=v[D],N=it.start,R=it.count;for(let F=N,Z=N+R;F<Z;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const n=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),p=t.getX(f+1),d=t.getX(f+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,d),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*h;for(let _=0;_<h;_++)f[g++]=c[m++]}return new an(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Hi,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const nu=new ge,Br=new Oc,yl=new Ba,Dn=new I,Rn=new I,In=new I,bl=new I,Sl=new I,Ml=new I,Ro=new I,Io=new I,zo=new I,Oo=new yt,Fo=new yt,No=new yt,wl=new I,Uo=new I;class ji extends Be{constructor(t=new Hi,e=new Ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),t.ray.intersectsSphere(yl)===!1)||(nu.copy(r).invert(),Br.copy(t.ray).applyMatrix4(nu),i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,h=i.morphTargetsRelative,u=i.attributes.uv,f=i.attributes.uv2,m=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(n))for(let p=0,d=m.length;p<d;p++){const _=m[p],S=n[_.materialIndex],y=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let b=y,P=v;b<P;b+=3){const E=a.getX(b),x=a.getX(b+1),M=a.getX(b+2);o=Bo(this,S,t,Br,l,c,h,u,f,E,x,M),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=p,S=d;_<S;_+=3){const y=a.getX(_),v=a.getX(_+1),b=a.getX(_+2);o=Bo(this,n,t,Br,l,c,h,u,f,y,v,b),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(n))for(let p=0,d=m.length;p<d;p++){const _=m[p],S=n[_.materialIndex],y=Math.max(_.start,g.start),v=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let b=y,P=v;b<P;b+=3){const E=b,x=b+1,M=b+2;o=Bo(this,S,t,Br,l,c,h,u,f,E,x,M),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,S=d;_<S;_+=3){const y=_,v=_+1,b=_+2;o=Bo(this,n,t,Br,l,c,h,u,f,y,v,b),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}}function Fm(s,t,e,i,n,r,o,a){let l;if(t.side===ki?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side!==Fn,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Uo);return c<e.near||c>e.far?null:{distance:c,point:Uo.clone(),object:s}}function Bo(s,t,e,i,n,r,o,a,l,c,h,u){Dn.fromBufferAttribute(n,c),Rn.fromBufferAttribute(n,h),In.fromBufferAttribute(n,u);const f=s.morphTargetInfluences;if(r&&f){Ro.set(0,0,0),Io.set(0,0,0),zo.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const d=f[g],_=r[g];d!==0&&(bl.fromBufferAttribute(_,c),Sl.fromBufferAttribute(_,h),Ml.fromBufferAttribute(_,u),o?(Ro.addScaledVector(bl,d),Io.addScaledVector(Sl,d),zo.addScaledVector(Ml,d)):(Ro.addScaledVector(bl.sub(Dn),d),Io.addScaledVector(Sl.sub(Rn),d),zo.addScaledVector(Ml.sub(In),d)))}Dn.add(Ro),Rn.add(Io),In.add(zo)}s.isSkinnedMesh&&(s.boneTransform(c,Dn),s.boneTransform(h,Rn),s.boneTransform(u,In));const m=Fm(s,t,e,i,Dn,Rn,In,wl);if(m){a&&(Oo.fromBufferAttribute(a,c),Fo.fromBufferAttribute(a,h),No.fromBufferAttribute(a,u),m.uv=rn.getUV(wl,Dn,Rn,In,Oo,Fo,No,new yt)),l&&(Oo.fromBufferAttribute(l,c),Fo.fromBufferAttribute(l,h),No.fromBufferAttribute(l,u),m.uv2=rn.getUV(wl,Dn,Rn,In,Oo,Fo,No,new yt));const g={a:c,b:h,c:u,normal:new I,materialIndex:0};rn.getNormal(Dn,Rn,In,g.normal),m.face=g}return m}class Ri extends Hi{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(u,2));function g(p,d,_,S,y,v,b,P,E,x,M){const D=v/E,U=b/x,it=v/2,N=b/2,R=P/2,F=E+1,Z=x+1;let C=0,k=0;const tt=new I;for(let nt=0;nt<Z;nt++){const H=nt*U-N;for(let X=0;X<F;X++){const Q=X*D-it;tt[p]=Q*S,tt[d]=H*y,tt[_]=R,c.push(tt.x,tt.y,tt.z),tt[p]=0,tt[d]=0,tt[_]=P>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(X/E),u.push(1-nt/x),C+=1}}for(let nt=0;nt<x;nt++)for(let H=0;H<E;H++){const X=f+H+F*nt,Q=f+H+F*(nt+1),K=f+(H+1)+F*(nt+1),et=f+(H+1)+F*nt;l.push(X,Q,et),l.push(Q,K,et),k+=6}a.addGroup(m,k,M),m+=k,f+=C}}static fromJSON(t){return new Ri(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ms(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function je(s){const t={};for(let e=0;e<s.length;e++){const i=ms(s[e]);for(const n in i)t[n]=i[n]}return t}function Nm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Uf(s){return s.getRenderTarget()===null&&s.outputEncoding===le?tn:io}const Ma={clone:ms,merge:je};var Um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends vo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Um,this.fragmentShader=Bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Nm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Bf extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zi extends Bf{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ca*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const kr=-90,Gr=1;class km extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new zi(kr,Gr,t,e);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const r=new zi(kr,Gr,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new zi(kr,Gr,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new zi(kr,Gr,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new zi(kr,Gr,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new zi(kr,Gr,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,r,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,f=t.xr.enabled;t.toneMapping=Mn,t.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,n),t.setRenderTarget(i,1),t.render(e,r),t.setRenderTarget(i,2),t.render(e,o),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=m,t.setRenderTarget(i,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class kf extends li{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:fs,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gm extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new kf(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ri(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ki,blending:Vn});r.uniforms.tEquirect.value=e;const o=new ji(n,r),a=e.minFilter;return e.minFilter===Ua&&(e.minFilter=Ii),new km(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}}const Tl=new I,Vm=new I,Hm=new wi;class nr{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Tl.subVectors(i,e).cross(Vm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(Tl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(i).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Hm.getNormalMatrix(t),n=this.coplanarPoint(Tl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Ba,ko=new I;class Fc{constructor(t=new nr,e=new nr,i=new nr,n=new nr,r=new nr,o=new nr){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,n=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],f=i[8],m=i[9],g=i[10],p=i[11],d=i[12],_=i[13],S=i[14],y=i[15];return e[0].setComponents(a-n,u-l,p-f,y-d).normalize(),e[1].setComponents(a+n,u+l,p+f,y+d).normalize(),e[2].setComponents(a+r,u+c,p+m,y+_).normalize(),e[3].setComponents(a-r,u-c,p-m,y-_).normalize(),e[4].setComponents(a-o,u-h,p-g,y-S).normalize(),e[5].setComponents(a+o,u+h,p+g,y+S).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Vr)}intersectsSprite(t){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(ko.x=n.normal.x>0?t.max.x:t.min.x,ko.y=n.normal.y>0?t.max.y:t.min.y,ko.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gf(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Wm(s,t){const e=t.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,f=c.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const f=h.array,m=h.updateRange;s.bindBuffer(u,c),m.count===-1?s.bufferSubData(u,0,f):(e?s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(s.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Nc extends Hi{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,f=e/l,m=[],g=[],p=[],d=[];for(let _=0;_<h;_++){const S=_*f-o;for(let y=0;y<c;y++){const v=y*u-r;g.push(v,-S,0),p.push(0,0,1),d.push(y/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<a;S++){const y=S+c*_,v=S+c*(_+1),b=S+1+c*(_+1),P=S+1+c*_;m.push(y,v,P),m.push(v,b,P)}this.setIndex(m),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(p,3)),this.setAttribute("uv",new ke(d,2))}static fromJSON(t){return new Nc(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jm="vec3 transformed = vec3( position );",Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,tg=`#ifdef USE_IRIDESCENCE
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
#endif`,eg=`#ifdef USE_BUMPMAP
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
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hg=`#define PI 3.141592653589793
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
}`,ug=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fg=`vec3 transformedNormal = objectNormal;
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
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_g="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ag=`#ifdef USE_GRADIENTMAP
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
}`,Pg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#endif`,zg=`#if defined( USE_ENVMAP )
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
#endif`,Og=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ng=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bg=`PhysicalMaterial material;
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
#endif`,kg=`struct PhysicalMaterial {
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
}`,Gg=`
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
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e_=`#ifdef USE_MORPHNORMALS
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
#endif`,i_=`#ifdef USE_MORPHTARGETS
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
#endif`,n_=`#ifdef USE_MORPHTARGETS
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
#endif`,r_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,s_=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
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
#endif`,h_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,u_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,f_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,__=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w_=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T_=`float getShadowMask() {
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
}`,C_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,A_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P_=`#ifdef USE_SKINNING
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
#endif`,L_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z_=`#ifdef USE_TRANSMISSION
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
#endif`,O_=`#ifdef USE_TRANSMISSION
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
#endif`,F_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,N_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,U_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,B_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,k_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,G_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,V_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W_=`uniform sampler2D t2D;
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
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Z_=`#include <common>
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
}`,J_=`#if DEPTH_PACKING == 3200
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
}`,j_=`#define DISTANCE
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
}`,K_=`#define DISTANCE
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,e0=`uniform float scale;
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
}`,i0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,r0=`uniform vec3 diffuse;
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
}`,s0=`#define LAMBERT
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
}`,o0=`#define LAMBERT
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
}`,a0=`#define MATCAP
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
}`,l0=`#define MATCAP
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
}`,c0=`#define NORMAL
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
}`,h0=`#define NORMAL
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
}`,u0=`#define PHONG
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
}`,f0=`#define PHONG
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
}`,d0=`#define STANDARD
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
}`,p0=`#define STANDARD
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
}`,m0=`#define TOON
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
}`,g0=`#define TOON
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
}`,_0=`uniform float size;
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
}`,x0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,y0=`uniform vec3 color;
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
}`,b0=`uniform float rotation;
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
}`,S0=`uniform vec3 diffuse;
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
}`,Wt={alphamap_fragment:Xm,alphamap_pars_fragment:qm,alphatest_fragment:Ym,alphatest_pars_fragment:$m,aomap_fragment:Zm,aomap_pars_fragment:Jm,begin_vertex:jm,beginnormal_vertex:Km,bsdfs:Qm,iridescence_fragment:tg,bumpmap_pars_fragment:eg,clipping_planes_fragment:ig,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:rg,clipping_planes_vertex:sg,color_fragment:og,color_pars_fragment:ag,color_pars_vertex:lg,color_vertex:cg,common:hg,cube_uv_reflection_fragment:ug,defaultnormal_vertex:fg,displacementmap_pars_vertex:dg,displacementmap_vertex:pg,emissivemap_fragment:mg,emissivemap_pars_fragment:gg,encodings_fragment:_g,encodings_pars_fragment:xg,envmap_fragment:vg,envmap_common_pars_fragment:yg,envmap_pars_fragment:bg,envmap_pars_vertex:Sg,envmap_physical_pars_fragment:zg,envmap_vertex:Mg,fog_vertex:wg,fog_pars_vertex:Tg,fog_fragment:Cg,fog_pars_fragment:Eg,gradientmap_pars_fragment:Ag,lightmap_fragment:Pg,lightmap_pars_fragment:Lg,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Rg,lights_pars_begin:Ig,lights_toon_fragment:Og,lights_toon_pars_fragment:Fg,lights_phong_fragment:Ng,lights_phong_pars_fragment:Ug,lights_physical_fragment:Bg,lights_physical_pars_fragment:kg,lights_fragment_begin:Gg,lights_fragment_maps:Vg,lights_fragment_end:Hg,logdepthbuf_fragment:Wg,logdepthbuf_pars_fragment:Xg,logdepthbuf_pars_vertex:qg,logdepthbuf_vertex:Yg,map_fragment:$g,map_pars_fragment:Zg,map_particle_fragment:Jg,map_particle_pars_fragment:jg,metalnessmap_fragment:Kg,metalnessmap_pars_fragment:Qg,morphcolor_vertex:t_,morphnormal_vertex:e_,morphtarget_pars_vertex:i_,morphtarget_vertex:n_,normal_fragment_begin:r_,normal_fragment_maps:s_,normal_pars_fragment:o_,normal_pars_vertex:a_,normal_vertex:l_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:h_,clearcoat_normal_fragment_maps:u_,clearcoat_pars_fragment:f_,iridescence_pars_fragment:d_,output_fragment:p_,packing:m_,premultiplied_alpha_fragment:g_,project_vertex:__,dithering_fragment:x_,dithering_pars_fragment:v_,roughnessmap_fragment:y_,roughnessmap_pars_fragment:b_,shadowmap_pars_fragment:S_,shadowmap_pars_vertex:M_,shadowmap_vertex:w_,shadowmask_pars_fragment:T_,skinbase_vertex:C_,skinning_pars_vertex:E_,skinning_vertex:A_,skinnormal_vertex:P_,specularmap_fragment:L_,specularmap_pars_fragment:D_,tonemapping_fragment:R_,tonemapping_pars_fragment:I_,transmission_fragment:z_,transmission_pars_fragment:O_,uv_pars_fragment:F_,uv_pars_vertex:N_,uv_vertex:U_,uv2_pars_fragment:B_,uv2_pars_vertex:k_,uv2_vertex:G_,worldpos_vertex:V_,background_vert:H_,background_frag:W_,backgroundCube_vert:X_,backgroundCube_frag:q_,cube_vert:Y_,cube_frag:$_,depth_vert:Z_,depth_frag:J_,distanceRGBA_vert:j_,distanceRGBA_frag:K_,equirect_vert:Q_,equirect_frag:t0,linedashed_vert:e0,linedashed_frag:i0,meshbasic_vert:n0,meshbasic_frag:r0,meshlambert_vert:s0,meshlambert_frag:o0,meshmatcap_vert:a0,meshmatcap_frag:l0,meshnormal_vert:c0,meshnormal_frag:h0,meshphong_vert:u0,meshphong_frag:f0,meshphysical_vert:d0,meshphysical_frag:p0,meshtoon_vert:m0,meshtoon_frag:g0,points_vert:_0,points_frag:x0,shadow_vert:v0,shadow_frag:y0,sprite_vert:b0,sprite_frag:S0},ft={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new wi},uv2Transform:{value:new wi},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wi}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wi}}},nn={basic:{uniforms:je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:je([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:je([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:je([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:je([ft.points,ft.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:je([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:je([ft.common,ft.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:je([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:je([ft.sprite,ft.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new wi},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:je([ft.common,ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:je([ft.lights,ft.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};nn.physical={uniforms:je([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new yt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Go={r:0,b:0,g:0};function M0(s,t,e,i,n,r,o){const a=new Qt(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(d,_){let S=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y));const v=s.xr,b=v.getSession&&v.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?p(a,l):y&&y.isColor&&(p(y,1),S=!0),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Na)?(h===void 0&&(h=new ji(new Ri(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:ms(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(u!==y||f!==y.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,m=s.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ji(new Nc(2,2),new Ti({name:"BackgroundMaterial",uniforms:ms(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,m=s.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,_){d.getRGB(Go,Uf(s)),i.buffers.color.setClear(Go.r,Go.g,Go.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(d,_=1){a.set(d),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(a,l)},render:g}}function w0(s,t,e,i){const n=s.getParameter(34921),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=d(null);let c=l,h=!1;function u(R,F,Z,C,k){let tt=!1;if(o){const nt=p(C,Z,F);c!==nt&&(c=nt,m(c.object)),tt=_(R,C,Z,k),tt&&S(R,C,Z,k)}else{const nt=F.wireframe===!0;(c.geometry!==C.id||c.program!==Z.id||c.wireframe!==nt)&&(c.geometry=C.id,c.program=Z.id,c.wireframe=nt,tt=!0)}k!==null&&e.update(k,34963),(tt||h)&&(h=!1,x(R,F,Z,C),k!==null&&s.bindBuffer(34963,e.get(k).buffer))}function f(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return i.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function p(R,F,Z){const C=Z.wireframe===!0;let k=a[R.id];k===void 0&&(k={},a[R.id]=k);let tt=k[F.id];tt===void 0&&(tt={},k[F.id]=tt);let nt=tt[C];return nt===void 0&&(nt=d(f()),tt[C]=nt),nt}function d(R){const F=[],Z=[],C=[];for(let k=0;k<n;k++)F[k]=0,Z[k]=0,C[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:C,object:R,attributes:{},index:null}}function _(R,F,Z,C){const k=c.attributes,tt=F.attributes;let nt=0;const H=Z.getAttributes();for(const X in H)if(H[X].location>=0){const K=k[X];let et=tt[X];if(et===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(et=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(et=R.instanceColor)),K===void 0||K.attribute!==et||et&&K.data!==et.data)return!0;nt++}return c.attributesNum!==nt||c.index!==C}function S(R,F,Z,C){const k={},tt=F.attributes;let nt=0;const H=Z.getAttributes();for(const X in H)if(H[X].location>=0){let K=tt[X];K===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(K=R.instanceColor));const et={};et.attribute=K,K&&K.data&&(et.data=K.data),k[X]=et,nt++}c.attributes=k,c.attributesNum=nt,c.index=C}function y(){const R=c.newAttributes;for(let F=0,Z=R.length;F<Z;F++)R[F]=0}function v(R){b(R,0)}function b(R,F){const Z=c.newAttributes,C=c.enabledAttributes,k=c.attributeDivisors;Z[R]=1,C[R]===0&&(s.enableVertexAttribArray(R),C[R]=1),k[R]!==F&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,F),k[R]=F)}function P(){const R=c.newAttributes,F=c.enabledAttributes;for(let Z=0,C=F.length;Z<C;Z++)F[Z]!==R[Z]&&(s.disableVertexAttribArray(Z),F[Z]=0)}function E(R,F,Z,C,k,tt){i.isWebGL2===!0&&(Z===5124||Z===5125)?s.vertexAttribIPointer(R,F,Z,k,tt):s.vertexAttribPointer(R,F,Z,C,k,tt)}function x(R,F,Z,C){if(i.isWebGL2===!1&&(R.isInstancedMesh||C.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const k=C.attributes,tt=Z.getAttributes(),nt=F.defaultAttributeValues;for(const H in tt){const X=tt[H];if(X.location>=0){let Q=k[H];if(Q===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){const K=Q.normalized,et=Q.itemSize,W=e.get(Q);if(W===void 0)continue;const Rt=W.buffer,pt=W.type,Tt=W.bytesPerElement;if(Q.isInterleavedBufferAttribute){const rt=Q.data,It=rt.stride,At=Q.offset;if(rt.isInstancedInterleavedBuffer){for(let Et=0;Et<X.locationSize;Et++)b(X.location+Et,rt.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Et=0;Et<X.locationSize;Et++)v(X.location+Et);s.bindBuffer(34962,Rt);for(let Et=0;Et<X.locationSize;Et++)E(X.location+Et,et/X.locationSize,pt,K,It*Tt,(At+et/X.locationSize*Et)*Tt)}else{if(Q.isInstancedBufferAttribute){for(let rt=0;rt<X.locationSize;rt++)b(X.location+rt,Q.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let rt=0;rt<X.locationSize;rt++)v(X.location+rt);s.bindBuffer(34962,Rt);for(let rt=0;rt<X.locationSize;rt++)E(X.location+rt,et/X.locationSize,pt,K,et*Tt,et/X.locationSize*rt*Tt)}}else if(nt!==void 0){const K=nt[H];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(X.location,K);break;case 3:s.vertexAttrib3fv(X.location,K);break;case 4:s.vertexAttrib4fv(X.location,K);break;default:s.vertexAttrib1fv(X.location,K)}}}}P()}function M(){it();for(const R in a){const F=a[R];for(const Z in F){const C=F[Z];for(const k in C)g(C[k].object),delete C[k];delete F[Z]}delete a[R]}}function D(R){if(a[R.id]===void 0)return;const F=a[R.id];for(const Z in F){const C=F[Z];for(const k in C)g(C[k].object),delete C[k];delete F[Z]}delete a[R.id]}function U(R){for(const F in a){const Z=a[F];if(Z[R.id]===void 0)continue;const C=Z[R.id];for(const k in C)g(C[k].object),delete C[k];delete Z[R.id]}}function it(){N(),h=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:it,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:D,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:v,disableUnusedAttributes:P}}function T0(s,t,e,i){const n=i.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,u){if(u===0)return;let f,m;if(n)f=s,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,h,u),e.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function C0(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),d=s.getParameter(36347),_=s.getParameter(36348),S=s.getParameter(36349),y=f>0,v=o||t.has("OES_texture_float"),b=y&&v,P=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:P}}function E0(s){const t=this;let e=null,i=0,n=!1,r=!1;const o=new nr,a=new wi,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,m){const g=u.length!==0||f||i!==0||n;return n=f,e=h(u,m,0),i=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,f,m){const g=u.clippingPlanes,p=u.clipIntersection,d=u.clipShadows,_=s.get(u);if(!n||g===null||g.length===0||r&&!d)r?h(null):c();else{const S=r?0:i,y=S*4;let v=_.clippingState||null;l.value=v,v=h(g,f,y,m);for(let b=0;b!==y;++b)v[b]=e[b];_.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,m,g){const p=u!==null?u.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<_)&&(d=new Float32Array(_));for(let y=0,v=m;y!==p;++y,v+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(d,v),d[v+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,d}}function A0(s){let t=new WeakMap;function e(o,a){return a===Ql?o.mapping=fs:a===tc&&(o.mapping=ds),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ql||a===tc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Gm(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Va extends Bf{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Kr=4,ru=[.125,.215,.35,.446,.526,.582],lr=20,Cl=new Va,su=new Qt;let El=null;const rr=(1+Math.sqrt(5))/2,Hr=1/rr,ou=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,rr,Hr),new I(0,rr,-Hr),new I(Hr,0,rr),new I(-Hr,0,rr),new I(rr,Hr,0),new I(-rr,Hr,0)];class au{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){El=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(El),t.scissorTest=!1,Vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),El=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:eo,format:Ji,encoding:Mr,depthBuffer:!1},n=lu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P0(r)),this._blurMaterial=L0(r,t,e)}return n}_compileMaterial(t){const e=new ji(this._lodPlanes[0],t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,i,n){const a=new zi(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(su),h.toneMapping=Mn,h.autoClear=!1;const m=new Ga({name:"PMREM.Background",side:ki,depthWrite:!1,depthTest:!1}),g=new ji(new Ri,m);let p=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,p=!0):(m.color.copy(su),p=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):S===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const y=this._cubeSize;Vo(n,S*y,_>2?y:0,y,y),h.setRenderTarget(n),p&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===fs||t.mapping===ds;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new ji(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Vo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Cl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=ou[(n-1)%ou.length];this._blur(t,n-1,n,r,o)}e.autoClear=i}_blur(t,e,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ji(this._lodPlanes[n],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*lr-1),p=r/g,d=isFinite(r)?1+Math.floor(h*p):lr;d>lr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${lr}`);const _=[];let S=0;for(let E=0;E<lr;++E){const x=E/p,M=Math.exp(-x*x/2);_.push(M),E===0?S+=M:E<d&&(S+=2*M)}for(let E=0;E<_.length;E++)_[E]=_[E]/S;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const v=this._sizeLods[n],b=3*v*(n>y-Kr?n-y+Kr:0),P=4*(this._cubeSize-v);Vo(e,b,P,3*v,2*v),l.setRenderTarget(e),l.render(u,Cl)}}function P0(s){const t=[],e=[],i=[];let n=s;const r=s-Kr+1+ru.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);e.push(a);let l=1/a;o>s-Kr?l=ru[o-s+Kr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,p=3,d=2,_=1,S=new Float32Array(p*g*m),y=new Float32Array(d*g*m),v=new Float32Array(_*g*m);for(let P=0;P<m;P++){const E=P%3*2/3-1,x=P>2?0:-1,M=[E,x,0,E+2/3,x,0,E+2/3,x+1,0,E,x,0,E+2/3,x+1,0,E,x+1,0];S.set(M,p*g*P),y.set(f,d*g*P);const D=[P,P,P,P,P,P];v.set(D,_*g*P)}const b=new Hi;b.setAttribute("position",new an(S,p)),b.setAttribute("uv",new an(y,d)),b.setAttribute("faceIndex",new an(v,_)),t.push(b),n>Kr&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function lu(s,t,e){const i=new Ki(s,t,e);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vo(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function L0(s,t,e){const i=new Float32Array(lr),n=new I(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function cu(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function hu(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function D0(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ql||l===tc,h=l===fs||l===ds;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new au(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&n(u)){e===null&&(e=new au(s));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function R0(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function I0(s,t,e,i){const n={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete n[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],34962);const m=u.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)t.update(p[d],34962)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let y=0,v=S.length;y<v;y+=3){const b=S[y+0],P=S[y+1],E=S[y+2];f.push(b,P,P,E,E,b)}}else{const S=g.array;p=g.version;for(let y=0,v=S.length/3-1;y<v;y+=3){const b=y+0,P=y+1,E=y+2;f.push(b,P,P,E,E,b)}}const d=new(Df(f)?Nf:Ff)(f,1);d.version=p;const _=r.get(u);_&&t.remove(_),r.set(u,d)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function z0(s,t,e,i){const n=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,m){s.drawElements(r,m,a,f*l),e.update(m,r,1)}function u(f,m,g){if(g===0)return;let p,d;if(n)p=s,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,m,a,f*l,g),e.update(m,r,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function O0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function F0(s,t){return s[0]-t[0]}function N0(s,t){return Math.abs(t[1])-Math.abs(s[1])}function U0(s,t,e){const i={},n=new Float32Array(8),r=new WeakMap,o=new ze,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,f){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=p!==void 0?p.length:0;let _=r.get(h);if(_===void 0||_.count!==d){let Z=function(){R.dispose(),r.delete(h),h.removeEventListener("dispose",Z)};var g=Z;_!==void 0&&_.texture.dispose();const v=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],M=h.morphAttributes.color||[];let D=0;v===!0&&(D=1),b===!0&&(D=2),P===!0&&(D=3);let U=h.attributes.position.count*D,it=1;U>t.maxTextureSize&&(it=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const N=new Float32Array(U*it*4*d),R=new Of(N,U,it,d);R.type=hr,R.needsUpdate=!0;const F=D*4;for(let C=0;C<d;C++){const k=E[C],tt=x[C],nt=M[C],H=U*it*4*C;for(let X=0;X<k.count;X++){const Q=X*F;v===!0&&(o.fromBufferAttribute(k,X),N[H+Q+0]=o.x,N[H+Q+1]=o.y,N[H+Q+2]=o.z,N[H+Q+3]=0),b===!0&&(o.fromBufferAttribute(tt,X),N[H+Q+4]=o.x,N[H+Q+5]=o.y,N[H+Q+6]=o.z,N[H+Q+7]=0),P===!0&&(o.fromBufferAttribute(nt,X),N[H+Q+8]=o.x,N[H+Q+9]=o.y,N[H+Q+10]=o.z,N[H+Q+11]=nt.itemSize===4?o.w:1)}}_={count:d,texture:R,size:new yt(U,it)},r.set(h,_),h.addEventListener("dispose",Z)}let S=0;for(let v=0;v<m.length;v++)S+=m[v];const y=h.morphTargetsRelative?1:1-S;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=i[h.id];if(d===void 0||d.length!==p){d=[];for(let b=0;b<p;b++)d[b]=[b,0];i[h.id]=d}for(let b=0;b<p;b++){const P=d[b];P[0]=b,P[1]=m[b]}d.sort(N0);for(let b=0;b<8;b++)b<p&&d[b][1]?(a[b][0]=d[b][0],a[b][1]=d[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(F0);const _=h.morphAttributes.position,S=h.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const P=a[b],E=P[0],x=P[1];E!==Number.MAX_SAFE_INTEGER&&x?(_&&h.getAttribute("morphTarget"+b)!==_[E]&&h.setAttribute("morphTarget"+b,_[E]),S&&h.getAttribute("morphNormal"+b)!==S[E]&&h.setAttribute("morphNormal"+b,S[E]),n[b]=x,y+=x):(_&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),S&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),n[b]=0)}const v=h.morphTargetsRelative?1:1-y;f.getUniforms().setValue(s,"morphTargetBaseInfluence",v),f.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function B0(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);return n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Vf=new li,Hf=new Of,Wf=new Cm,Xf=new kf,uu=[],fu=[],du=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function Ts(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=uu[n];if(r===void 0&&(r=new Float32Array(n),uu[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ha(s,t){let e=fu[t];e===void 0&&(e=new Int32Array(t),fu[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function k0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function G0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function V0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function H0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function W0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Ce(e,i))return;mu.set(i),s.uniformMatrix2fv(this.addr,!1,mu),Ee(e,i)}}function X0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Ce(e,i))return;pu.set(i),s.uniformMatrix3fv(this.addr,!1,pu),Ee(e,i)}}function q0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Ce(e,i))return;du.set(i),s.uniformMatrix4fv(this.addr,!1,du),Ee(e,i)}}function Y0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function $0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function Z0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function J0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function j0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function K0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function Q0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function tx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function ex(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2D(t||Vf,n)}function ix(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Wf,n)}function nx(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Xf,n)}function rx(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Hf,n)}function sx(s){switch(s){case 5126:return k0;case 35664:return G0;case 35665:return V0;case 35666:return H0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return $0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return j0;case 36294:return K0;case 36295:return Q0;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return rx}}function ox(s,t){s.uniform1fv(this.addr,t)}function ax(s,t){const e=Ts(t,this.size,2);s.uniform2fv(this.addr,e)}function lx(s,t){const e=Ts(t,this.size,3);s.uniform3fv(this.addr,e)}function cx(s,t){const e=Ts(t,this.size,4);s.uniform4fv(this.addr,e)}function hx(s,t){const e=Ts(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ux(s,t){const e=Ts(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function fx(s,t){const e=Ts(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function dx(s,t){s.uniform1iv(this.addr,t)}function px(s,t){s.uniform2iv(this.addr,t)}function mx(s,t){s.uniform3iv(this.addr,t)}function gx(s,t){s.uniform4iv(this.addr,t)}function _x(s,t){s.uniform1uiv(this.addr,t)}function xx(s,t){s.uniform2uiv(this.addr,t)}function vx(s,t){s.uniform3uiv(this.addr,t)}function yx(s,t){s.uniform4uiv(this.addr,t)}function bx(s,t,e){const i=this.cache,n=t.length,r=Ha(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Vf,r[o])}function Sx(s,t,e){const i=this.cache,n=t.length,r=Ha(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Wf,r[o])}function Mx(s,t,e){const i=this.cache,n=t.length,r=Ha(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Xf,r[o])}function wx(s,t,e){const i=this.cache,n=t.length,r=Ha(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Hf,r[o])}function Tx(s){switch(s){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return fx;case 5124:case 35670:return dx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return _x;case 36294:return xx;case 36295:return vx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return wx}}class Cx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=sx(e.type)}}class Ex{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Tx(e.type)}}class Ax{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(t,e[a.id],i)}}}const Al=/(\w+)(\])?(\[|\.)?/g;function gu(s,t){s.seq.push(t),s.map[t.id]=t}function Px(s,t,e){const i=s.name,n=i.length;for(Al.lastIndex=0;;){const r=Al.exec(i),o=Al.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){gu(e,c===void 0?new Cx(a,s,t):new Ex(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ax(a),gu(e,u)),e=u}}}class ua{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);Px(r,o,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function _u(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}let Lx=0;function Dx(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Rx(s){switch(s){case Mr:return["Linear","( value )"];case le:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function xu(s,t,e){const i=s.getShaderParameter(t,35713),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Dx(s.getShaderSource(t),o)}else return n}function Ix(s,t){const e=Rx(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function zx(s,t){let e;switch(t){case Kp:e="Linear";break;case Qp:e="Reinhard";break;case tm:e="OptimizedCineon";break;case em:e="ACESFilmic";break;case im:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ox(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Os).join(`
`)}function Fx(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Nx(s,t){const e={},i=s.getProgramParameter(t,35721);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Os(s){return s!==""}function vu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(s){return s.replace(Ux,Bx)}function Bx(s,t){const e=Wt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return sc(e)}const kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(s){return s.replace(kx,Gx)}function Gx(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Su(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zs&&(t="SHADOWMAP_TYPE_VSM"),t}function Hx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fs:case ds:t="ENVMAP_TYPE_CUBE";break;case Na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ds:t="ENVMAP_MODE_REFRACTION";break}return t}function Xx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Af:t="ENVMAP_BLENDING_MULTIPLY";break;case Jp:t="ENVMAP_BLENDING_MIX";break;case jp:t="ENVMAP_BLENDING_ADD";break}return t}function qx(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Yx(s,t,e,i){const n=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Vx(e),c=Hx(e),h=Wx(e),u=Xx(e),f=qx(e),m=e.isWebGL2?"":Ox(e),g=Fx(r),p=n.createProgram();let d,_,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[g].filter(Os).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(Os).join(`
`),_.length>0&&(_+=`
`)):(d=[Su(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),_=[m,Su(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Mn?zx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.encodings_pars_fragment,Ix("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),o=sc(o),o=vu(o,e),o=yu(o,e),a=sc(a),a=vu(a,e),a=yu(a,e),o=bu(o),a=bu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",e.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=S+d+o,v=S+_+a,b=_u(n,35633,y),P=_u(n,35632,v);if(n.attachShader(p,b),n.attachShader(p,P),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p),s.debug.checkShaderErrors){const M=n.getProgramInfoLog(p).trim(),D=n.getShaderInfoLog(b).trim(),U=n.getShaderInfoLog(P).trim();let it=!0,N=!0;if(n.getProgramParameter(p,35714)===!1){it=!1;const R=xu(n,b,"vertex"),F=xu(n,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,35715)+`

Program Info Log: `+M+`
`+R+`
`+F)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(D===""||U==="")&&(N=!1);N&&(this.diagnostics={runnable:it,programLog:M,vertexShader:{log:D,prefix:d},fragmentShader:{log:U,prefix:_}})}n.deleteShader(b),n.deleteShader(P);let E;this.getUniforms=function(){return E===void 0&&(E=new ua(n,p)),E};let x;return this.getAttributes=function(){return x===void 0&&(x=Nx(n,p)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Lx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=P,this}let $x=0;class Zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Jx(t),e.set(t,i)),i}}class Jx{constructor(t){this.id=$x++,this.code=t,this.usedTimes=0}}function jx(s,t,e,i,n,r,o){const a=new ka,l=new Zx,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,f=n.vertexTextures;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,M,D,U,it){const N=U.fog,R=it.geometry,F=x.isMeshStandardMaterial?U.environment:null,Z=(x.isMeshStandardMaterial?e:t).get(x.envMap||F),C=Z&&Z.mapping===Na?Z.image.height:null,k=g[x.type];x.precision!==null&&(m=n.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const tt=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,nt=tt!==void 0?tt.length:0;let H=0;R.morphAttributes.position!==void 0&&(H=1),R.morphAttributes.normal!==void 0&&(H=2),R.morphAttributes.color!==void 0&&(H=3);let X,Q,K,et;if(k){const It=nn[k];X=It.vertexShader,Q=It.fragmentShader}else X=x.vertexShader,Q=x.fragmentShader,l.update(x),K=l.getVertexShaderID(x),et=l.getFragmentShaderID(x);const W=s.getRenderTarget(),Rt=x.alphaTest>0,pt=x.clearcoat>0,Tt=x.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:x.type,vertexShader:X,fragmentShader:Q,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:it.isInstancedMesh===!0,instancingColor:it.isInstancedMesh===!0&&it.instanceColor!==null,supportsVertexTextures:f,outputEncoding:W===null?s.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:Mr,map:!!x.map,matcap:!!x.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:C,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Sm,tangentSpaceNormalMap:x.normalMapType===bm,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===le,clearcoat:pt,clearcoatMap:pt&&!!x.clearcoatMap,clearcoatRoughnessMap:pt&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:pt&&!!x.clearcoatNormalMap,iridescence:Tt,iridescenceMap:Tt&&!!x.iridescenceMap,iridescenceThicknessMap:Tt&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===rs,alphaMap:!!x.alphaMap,alphaTest:Rt,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:it.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:H,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:Mn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Fn,flipSided:x.side===ki,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)M.push(D),M.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(_(M,x),S(M,x),M.push(s.outputEncoding)),M.push(x.customProgramCacheKey),M.join()}function _(x,M){x.push(M.precision),x.push(M.outputEncoding),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.combine),x.push(M.vertexUvs),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function S(x,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.map&&a.enable(4),M.matcap&&a.enable(5),M.envMap&&a.enable(6),M.lightMap&&a.enable(7),M.aoMap&&a.enable(8),M.emissiveMap&&a.enable(9),M.bumpMap&&a.enable(10),M.normalMap&&a.enable(11),M.objectSpaceNormalMap&&a.enable(12),M.tangentSpaceNormalMap&&a.enable(13),M.clearcoat&&a.enable(14),M.clearcoatMap&&a.enable(15),M.clearcoatRoughnessMap&&a.enable(16),M.clearcoatNormalMap&&a.enable(17),M.iridescence&&a.enable(18),M.iridescenceMap&&a.enable(19),M.iridescenceThicknessMap&&a.enable(20),M.displacementMap&&a.enable(21),M.specularMap&&a.enable(22),M.roughnessMap&&a.enable(23),M.metalnessMap&&a.enable(24),M.gradientMap&&a.enable(25),M.alphaMap&&a.enable(26),M.alphaTest&&a.enable(27),M.vertexColors&&a.enable(28),M.vertexAlphas&&a.enable(29),M.vertexUvs&&a.enable(30),M.vertexTangents&&a.enable(31),M.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.physicallyCorrectLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.specularIntensityMap&&a.enable(15),M.specularColorMap&&a.enable(16),M.transmission&&a.enable(17),M.transmissionMap&&a.enable(18),M.thicknessMap&&a.enable(19),M.sheen&&a.enable(20),M.sheenColorMap&&a.enable(21),M.sheenRoughnessMap&&a.enable(22),M.decodeVideoTexture&&a.enable(23),M.opaque&&a.enable(24),x.push(a.mask)}function y(x){const M=g[x.type];let D;if(M){const U=nn[M];D=Ma.clone(U.uniforms)}else D=x.uniforms;return D}function v(x,M){let D;for(let U=0,it=c.length;U<it;U++){const N=c[U];if(N.cacheKey===M){D=N,++D.usedTimes;break}}return D===void 0&&(D=new Yx(s,M,x,r),c.push(D)),D}function b(x){if(--x.usedTimes===0){const M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),x.destroy()}}function P(x){l.remove(x)}function E(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:v,releaseProgram:b,releaseShaderCache:P,programs:c,dispose:E}}function Kx(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function i(r,o,a){s.get(r)[o]=a}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function Qx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Mu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function wu(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,f,m,g,p,d){let _=s[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:p,group:d},s[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=p,_.group=d),t++,_}function a(u,f,m,g,p,d){const _=o(u,f,m,g,p,d);m.transmission>0?i.push(_):m.transparent===!0?n.push(_):e.push(_)}function l(u,f,m,g,p,d){const _=o(u,f,m,g,p,d);m.transmission>0?i.unshift(_):m.transparent===!0?n.unshift(_):e.unshift(_)}function c(u,f){e.length>1&&e.sort(u||Qx),i.length>1&&i.sort(f||Mu),n.length>1&&n.sort(f||Mu)}function h(){for(let u=t,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function tv(){let s=new WeakMap;function t(i,n){const r=s.get(i);let o;return r===void 0?(o=new wu,s.set(i,[o])):n>=r.length?(o=new wu,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ev(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Qt};break;case"SpotLight":e={position:new I,direction:new I,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function iv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let nv=0;function rv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function sv(s,t){const e=new ev,i=iv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new I);const r=new I,o=new ge,a=new ge;function l(h,u){let f=0,m=0,g=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,d=0,_=0,S=0,y=0,v=0,b=0,P=0,E=0,x=0;h.sort(rv);const M=u!==!0?Math.PI:1;for(let U=0,it=h.length;U<it;U++){const N=h[U],R=N.color,F=N.intensity,Z=N.distance,C=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=R.r*F*M,m+=R.g*F*M,g+=R.b*F*M;else if(N.isLightProbe)for(let k=0;k<9;k++)n.probe[k].addScaledVector(N.sh.coefficients[k],F);else if(N.isDirectionalLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const tt=N.shadow,nt=i.get(N);nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,n.directionalShadow[p]=nt,n.directionalShadowMap[p]=C,n.directionalShadowMatrix[p]=N.shadow.matrix,v++}n.directional[p]=k,p++}else if(N.isSpotLight){const k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(R).multiplyScalar(F*M),k.distance=Z,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,n.spot[_]=k;const tt=N.shadow;if(N.map&&(n.spotLightMap[E]=N.map,E++,tt.updateMatrices(N),N.castShadow&&x++),n.spotLightMatrix[_]=tt.matrix,N.castShadow){const nt=i.get(N);nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,n.spotShadow[_]=nt,n.spotShadowMap[_]=C,P++}_++}else if(N.isRectAreaLight){const k=e.get(N);k.color.copy(R).multiplyScalar(F),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),n.rectArea[S]=k,S++}else if(N.isPointLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*M),k.distance=N.distance,k.decay=N.decay,N.castShadow){const tt=N.shadow,nt=i.get(N);nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,nt.shadowCameraNear=tt.camera.near,nt.shadowCameraFar=tt.camera.far,n.pointShadow[d]=nt,n.pointShadowMap[d]=C,n.pointShadowMatrix[d]=N.shadow.matrix,b++}n.point[d]=k,d++}else if(N.isHemisphereLight){const k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(F*M),k.groundColor.copy(N.groundColor).multiplyScalar(F*M),n.hemi[y]=k,y++}}S>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=g;const D=n.hash;(D.directionalLength!==p||D.pointLength!==d||D.spotLength!==_||D.rectAreaLength!==S||D.hemiLength!==y||D.numDirectionalShadows!==v||D.numPointShadows!==b||D.numSpotShadows!==P||D.numSpotMaps!==E)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=S,n.point.length=d,n.hemi.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=P+E-x,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=x,D.directionalLength=p,D.pointLength=d,D.spotLength=_,D.rectAreaLength=S,D.hemiLength=y,D.numDirectionalShadows=v,D.numPointShadows=b,D.numSpotShadows=P,D.numSpotMaps=E,n.version=nv++)}function c(h,u){let f=0,m=0,g=0,p=0,d=0;const _=u.matrixWorldInverse;for(let S=0,y=h.length;S<y;S++){const v=h[S];if(v.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),f++}else if(v.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const b=n.rectArea[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(_),m++}else if(v.isHemisphereLight){const b=n.hemi[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:n}}function Tu(s,t){const e=new sv(s,t),i=[],n=[];function r(){i.length=0,n.length=0}function o(u){i.push(u)}function a(u){n.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ov(s,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new Tu(s,t),e.set(r,[l])):o>=a.length?(l=new Tu(s,t),a.push(l)):l=a[o],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class av extends vo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lv extends vo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
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
}`;function uv(s,t,e){let i=new Fc;const n=new yt,r=new yt,o=new ze,a=new av({depthPacking:ym}),l=new lv,c={},h=e.maxTextureSize,u={0:ki,1:us,2:Fn},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:cv,fragmentShader:hv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Hi;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ji(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tf,this.render=function(v,b,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||v.length===0)return;const E=s.getRenderTarget(),x=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Vn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let U=0,it=v.length;U<it;U++){const N=v[U],R=N.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;n.copy(R.mapSize);const F=R.getFrameExtents();if(n.multiply(F),r.copy(R.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/F.x),n.x=r.x*F.x,R.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/F.y),n.y=r.y*F.y,R.mapSize.y=r.y)),R.map===null){const C=this.type!==zs?{minFilter:ai,magFilter:ai}:{};R.map=new Ki(n.x,n.y,C),R.map.texture.name=N.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();const Z=R.getViewportCount();for(let C=0;C<Z;C++){const k=R.getViewport(C);o.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),D.viewport(o),R.updateMatrices(N,C),i=R.getFrustum(),y(b,P,R.camera,N,this.type)}R.isPointLightShadow!==!0&&this.type===zs&&_(R,P),R.needsUpdate=!1}d.needsUpdate=!1,s.setRenderTarget(E,x,M)};function _(v,b){const P=t.update(p);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Ki(n.x,n.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(b,null,P,f,p,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(b,null,P,m,p,null)}function S(v,b,P,E,x,M){let D=null;const U=P.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(U!==void 0?D=U:D=P.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const it=D.uuid,N=b.uuid;let R=c[it];R===void 0&&(R={},c[it]=R);let F=R[N];F===void 0&&(F=D.clone(),R[N]=F),D=F}return D.visible=b.visible,D.wireframe=b.wireframe,M===zs?D.side=b.shadowSide!==null?b.shadowSide:b.side:D.side=b.shadowSide!==null?b.shadowSide:u[b.side],D.alphaMap=b.alphaMap,D.alphaTest=b.alphaTest,D.map=b.map,D.clipShadows=b.clipShadows,D.clippingPlanes=b.clippingPlanes,D.clipIntersection=b.clipIntersection,D.displacementMap=b.displacementMap,D.displacementScale=b.displacementScale,D.displacementBias=b.displacementBias,D.wireframeLinewidth=b.wireframeLinewidth,D.linewidth=b.linewidth,P.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(P.matrixWorld),D.nearDistance=E,D.farDistance=x),D}function y(v,b,P,E,x){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===zs)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,v.matrixWorld);const U=t.update(v),it=v.material;if(Array.isArray(it)){const N=U.groups;for(let R=0,F=N.length;R<F;R++){const Z=N[R],C=it[Z.materialIndex];if(C&&C.visible){const k=S(v,C,E,P.near,P.far,x);s.renderBufferDirect(P,null,U,k,v,Z)}}}else if(it.visible){const N=S(v,it,E,P.near,P.far,x);s.renderBufferDirect(P,null,U,N,v,null)}}const D=v.children;for(let U=0,it=D.length;U<it;U++)y(D[U],b,P,E,x)}}function fv(s,t,e){const i=e.isWebGL2;function n(){let L=!1;const Y=new ze;let ot=null;const mt=new ze(0,0,0,0);return{setMask:function(bt){ot!==bt&&!L&&(s.colorMask(bt,bt,bt,bt),ot=bt)},setLocked:function(bt){L=bt},setClear:function(bt,at,j,ct,St){St===!0&&(bt*=ct,at*=ct,j*=ct),Y.set(bt,at,j,ct),mt.equals(Y)===!1&&(s.clearColor(bt,at,j,ct),mt.copy(Y))},reset:function(){L=!1,ot=null,mt.set(-1,0,0,0)}}}function r(){let L=!1,Y=null,ot=null,mt=null;return{setTest:function(bt){bt?Rt(2929):pt(2929)},setMask:function(bt){Y!==bt&&!L&&(s.depthMask(bt),Y=bt)},setFunc:function(bt){if(ot!==bt){switch(bt){case Hp:s.depthFunc(512);break;case Wp:s.depthFunc(519);break;case Xp:s.depthFunc(513);break;case Kl:s.depthFunc(515);break;case qp:s.depthFunc(514);break;case Yp:s.depthFunc(518);break;case $p:s.depthFunc(516);break;case Zp:s.depthFunc(517);break;default:s.depthFunc(515)}ot=bt}},setLocked:function(bt){L=bt},setClear:function(bt){mt!==bt&&(s.clearDepth(bt),mt=bt)},reset:function(){L=!1,Y=null,ot=null,mt=null}}}function o(){let L=!1,Y=null,ot=null,mt=null,bt=null,at=null,j=null,ct=null,St=null;return{setTest:function(Lt){L||(Lt?Rt(2960):pt(2960))},setMask:function(Lt){Y!==Lt&&!L&&(s.stencilMask(Lt),Y=Lt)},setFunc:function(Lt,zt,Xt){(ot!==Lt||mt!==zt||bt!==Xt)&&(s.stencilFunc(Lt,zt,Xt),ot=Lt,mt=zt,bt=Xt)},setOp:function(Lt,zt,Xt){(at!==Lt||j!==zt||ct!==Xt)&&(s.stencilOp(Lt,zt,Xt),at=Lt,j=zt,ct=Xt)},setLocked:function(Lt){L=Lt},setClear:function(Lt){St!==Lt&&(s.clearStencil(Lt),St=Lt)},reset:function(){L=!1,Y=null,ot=null,mt=null,bt=null,at=null,j=null,ct=null,St=null}}}const a=new n,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,p=[],d=null,_=!1,S=null,y=null,v=null,b=null,P=null,E=null,x=null,M=!1,D=null,U=null,it=null,N=null,R=null;const F=s.getParameter(35661);let Z=!1,C=0;const k=s.getParameter(7938);k.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(k)[1]),Z=C>=1):k.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Z=C>=2);let tt=null,nt={};const H=s.getParameter(3088),X=s.getParameter(2978),Q=new ze().fromArray(H),K=new ze().fromArray(X);function et(L,Y,ot){const mt=new Uint8Array(4),bt=s.createTexture();s.bindTexture(L,bt),s.texParameteri(L,10241,9728),s.texParameteri(L,10240,9728);for(let at=0;at<ot;at++)s.texImage2D(Y+at,0,6408,1,1,0,6408,5121,mt);return bt}const W={};W[3553]=et(3553,3553,1),W[34067]=et(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Rt(2929),l.setFunc(Kl),Kt(!1),ae(gh),Rt(2884),Gt(Vn);function Rt(L){f[L]!==!0&&(s.enable(L),f[L]=!0)}function pt(L){f[L]!==!1&&(s.disable(L),f[L]=!1)}function Tt(L,Y){return m[L]!==Y?(s.bindFramebuffer(L,Y),m[L]=Y,i&&(L===36009&&(m[36160]=Y),L===36160&&(m[36009]=Y)),!0):!1}function rt(L,Y){let ot=p,mt=!1;if(L)if(ot=g.get(Y),ot===void 0&&(ot=[],g.set(Y,ot)),L.isWebGLMultipleRenderTargets){const bt=L.texture;if(ot.length!==bt.length||ot[0]!==36064){for(let at=0,j=bt.length;at<j;at++)ot[at]=36064+at;ot.length=bt.length,mt=!0}}else ot[0]!==36064&&(ot[0]=36064,mt=!0);else ot[0]!==1029&&(ot[0]=1029,mt=!0);mt&&(e.isWebGL2?s.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function It(L){return d!==L?(s.useProgram(L),d=L,!0):!1}const At={[Zr]:32774,[Rp]:32778,[Ip]:32779};if(i)At[vh]=32775,At[yh]=32776;else{const L=t.get("EXT_blend_minmax");L!==null&&(At[vh]=L.MIN_EXT,At[yh]=L.MAX_EXT)}const Et={[zp]:0,[Op]:1,[Fp]:768,[Cf]:770,[Vp]:776,[kp]:774,[Up]:772,[Np]:769,[Ef]:771,[Gp]:775,[Bp]:773};function Gt(L,Y,ot,mt,bt,at,j,ct){if(L===Vn){_===!0&&(pt(3042),_=!1);return}if(_===!1&&(Rt(3042),_=!0),L!==Dp){if(L!==S||ct!==M){if((y!==Zr||P!==Zr)&&(s.blendEquation(32774),y=Zr,P=Zr),ct)switch(L){case rs:s.blendFuncSeparate(1,771,1,771);break;case jl:s.blendFunc(1,1);break;case _h:s.blendFuncSeparate(0,769,0,1);break;case xh:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case rs:s.blendFuncSeparate(770,771,1,771);break;case jl:s.blendFunc(770,1);break;case _h:s.blendFuncSeparate(0,769,0,1);break;case xh:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,b=null,E=null,x=null,S=L,M=ct}return}bt=bt||Y,at=at||ot,j=j||mt,(Y!==y||bt!==P)&&(s.blendEquationSeparate(At[Y],At[bt]),y=Y,P=bt),(ot!==v||mt!==b||at!==E||j!==x)&&(s.blendFuncSeparate(Et[ot],Et[mt],Et[at],Et[j]),v=ot,b=mt,E=at,x=j),S=L,M=!1}function G(L,Y){L.side===Fn?pt(2884):Rt(2884);let ot=L.side===ki;Y&&(ot=!ot),Kt(ot),L.blending===rs&&L.transparent===!1?Gt(Vn):Gt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const mt=L.stencilWrite;c.setTest(mt),mt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Rt(32926):pt(32926)}function Kt(L){D!==L&&(L?s.frontFace(2304):s.frontFace(2305),D=L)}function ae(L){L!==Ap?(Rt(2884),L!==U&&(L===gh?s.cullFace(1029):L===Pp?s.cullFace(1028):s.cullFace(1032))):pt(2884),U=L}function Ut(L){L!==it&&(Z&&s.lineWidth(L),it=L)}function Vt(L,Y,ot){L?(Rt(32823),(N!==Y||R!==ot)&&(s.polygonOffset(Y,ot),N=Y,R=ot)):pt(32823)}function Se(L){L?Rt(3089):pt(3089)}function _e(L){L===void 0&&(L=33984+F-1),tt!==L&&(s.activeTexture(L),tt=L)}function A(L,Y,ot){ot===void 0&&(tt===null?ot=33984+F-1:ot=tt);let mt=nt[ot];mt===void 0&&(mt={type:void 0,texture:void 0},nt[ot]=mt),(mt.type!==L||mt.texture!==Y)&&(tt!==ot&&(s.activeTexture(ot),tt=ot),s.bindTexture(L,Y||W[L]),mt.type=L,mt.texture=Y)}function w(){const L=nt[tt];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function V(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(L){Q.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function Ct(L){K.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function _t(L,Y){let ot=u.get(Y);ot===void 0&&(ot=new WeakMap,u.set(Y,ot));let mt=ot.get(L);mt===void 0&&(mt=s.getUniformBlockIndex(Y,L.name),ot.set(L,mt))}function Jt(L,Y){const mt=u.get(Y).get(L);h.get(L)!==mt&&(s.uniformBlockBinding(Y,mt,L.__bindingPointIndex),h.set(L,mt))}function jt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),i===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},tt=null,nt={},m={},g=new WeakMap,p=[],d=null,_=!1,S=null,y=null,v=null,b=null,P=null,E=null,x=null,M=!1,D=null,U=null,it=null,N=null,R=null,Q.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Rt,disable:pt,bindFramebuffer:Tt,drawBuffers:rt,useProgram:It,setBlending:Gt,setMaterial:G,setFlipSided:Kt,setCullFace:ae,setLineWidth:Ut,setPolygonOffset:Vt,setScissorTest:Se,activeTexture:_e,bindTexture:A,unbindTexture:w,compressedTexImage2D:V,compressedTexImage3D:st,texImage2D:wt,texImage3D:dt,updateUBOMapping:_t,uniformBlockBinding:Jt,texStorage2D:B,texStorage3D:gt,texSubImage2D:lt,texSubImage3D:ut,compressedTexSubImage2D:ht,compressedTexSubImage3D:J,scissor:xt,viewport:Ct,reset:jt}}function dv(s,t,e,i,n,r,o){const a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,w){return _?new OffscreenCanvas(A,w):no("canvas")}function y(A,w,V,st){let lt=1;if((A.width>st||A.height>st)&&(lt=st/Math.max(A.width,A.height)),lt<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ut=w?rc:Math.floor,ht=ut(lt*A.width),J=ut(lt*A.height);p===void 0&&(p=S(ht,J));const B=V?S(ht,J):p;return B.width=ht,B.height=J,B.getContext("2d").drawImage(A,0,0,ht,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ht+"x"+J+")."),B}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return Yh(A.width)&&Yh(A.height)}function b(A){return a?!1:A.wrapS!==Zi||A.wrapT!==Zi||A.minFilter!==ai&&A.minFilter!==Ii}function P(A,w){return A.generateMipmaps&&w&&A.minFilter!==ai&&A.minFilter!==Ii}function E(A){s.generateMipmap(A)}function x(A,w,V,st,lt=!1){if(a===!1)return w;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut=w;return w===6403&&(V===5126&&(ut=33326),V===5131&&(ut=33325),V===5121&&(ut=33321)),w===33319&&(V===5126&&(ut=33328),V===5131&&(ut=33327),V===5121&&(ut=33323)),w===6408&&(V===5126&&(ut=34836),V===5131&&(ut=34842),V===5121&&(ut=st===le&&lt===!1?35907:32856),V===32819&&(ut=32854),V===32820&&(ut=32855)),(ut===33325||ut===33326||ut===33327||ut===33328||ut===34842||ut===34836)&&t.get("EXT_color_buffer_float"),ut}function M(A,w,V){return P(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==ai&&A.minFilter!==Ii?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function D(A){return A===ai||A===bh||A===Sh?9728:9729}function U(A){const w=A.target;w.removeEventListener("dispose",U),N(w),w.isVideoTexture&&g.delete(w)}function it(A){const w=A.target;w.removeEventListener("dispose",it),F(w)}function N(A){const w=i.get(A);if(w.__webglInit===void 0)return;const V=A.source,st=d.get(V);if(st){const lt=st[w.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&R(A),Object.keys(st).length===0&&d.delete(V)}i.remove(A)}function R(A){const w=i.get(A);s.deleteTexture(w.__webglTexture);const V=A.source,st=d.get(V);delete st[w.__cacheKey],o.memory.textures--}function F(A){const w=A.texture,V=i.get(A),st=i.get(w);if(st.__webglTexture!==void 0&&(s.deleteTexture(st.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++)s.deleteFramebuffer(V.__webglFramebuffer[lt]),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[lt]);else{if(s.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let lt=0;lt<V.__webglColorRenderbuffer.length;lt++)V.__webglColorRenderbuffer[lt]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[lt]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let lt=0,ut=w.length;lt<ut;lt++){const ht=i.get(w[lt]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),o.memory.textures--),i.remove(w[lt])}i.remove(w),i.remove(A)}let Z=0;function C(){Z=0}function k(){const A=Z;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Z+=1,A}function tt(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function nt(A,w){const V=i.get(A);if(A.isVideoTexture&&Se(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const st=A.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(V,A,w);return}}e.bindTexture(3553,V.__webglTexture,33984+w)}function H(A,w){const V=i.get(A);if(A.version>0&&V.__version!==A.version){pt(V,A,w);return}e.bindTexture(35866,V.__webglTexture,33984+w)}function X(A,w){const V=i.get(A);if(A.version>0&&V.__version!==A.version){pt(V,A,w);return}e.bindTexture(32879,V.__webglTexture,33984+w)}function Q(A,w){const V=i.get(A);if(A.version>0&&V.__version!==A.version){Tt(V,A,w);return}e.bindTexture(34067,V.__webglTexture,33984+w)}const K={[ec]:10497,[Zi]:33071,[ic]:33648},et={[ai]:9728,[bh]:9984,[Sh]:9986,[Ii]:9729,[nm]:9985,[Ua]:9987};function W(A,w,V){if(V?(s.texParameteri(A,10242,K[w.wrapS]),s.texParameteri(A,10243,K[w.wrapT]),(A===32879||A===35866)&&s.texParameteri(A,32882,K[w.wrapR]),s.texParameteri(A,10240,et[w.magFilter]),s.texParameteri(A,10241,et[w.minFilter])):(s.texParameteri(A,10242,33071),s.texParameteri(A,10243,33071),(A===32879||A===35866)&&s.texParameteri(A,32882,33071),(w.wrapS!==Zi||w.wrapT!==Zi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,10240,D(w.magFilter)),s.texParameteri(A,10241,D(w.minFilter)),w.minFilter!==ai&&w.minFilter!==Ii&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(w.type===hr&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===eo&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(s.texParameterf(A,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Rt(A,w){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",U));const st=w.source;let lt=d.get(st);lt===void 0&&(lt={},d.set(st,lt));const ut=tt(w);if(ut!==A.__cacheKey){lt[ut]===void 0&&(lt[ut]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),lt[ut].usedTimes++;const ht=lt[A.__cacheKey];ht!==void 0&&(lt[A.__cacheKey].usedTimes--,ht.usedTimes===0&&R(w)),A.__cacheKey=ut,A.__webglTexture=lt[ut].texture}return V}function pt(A,w,V){let st=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(st=35866),w.isData3DTexture&&(st=32879);const lt=Rt(A,w),ut=w.source;e.bindTexture(st,A.__webglTexture,33984+V);const ht=i.get(ut);if(ut.version!==ht.__version||lt===!0){e.activeTexture(33984+V),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const J=b(w)&&v(w.image)===!1;let B=y(w.image,J,!1,h);B=_e(w,B);const gt=v(B)||a,wt=r.convert(w.format,w.encoding);let dt=r.convert(w.type),xt=x(w.internalFormat,wt,dt,w.encoding,w.isVideoTexture);W(st,w,gt);let Ct;const _t=w.mipmaps,Jt=a&&w.isVideoTexture!==!0,jt=ht.__version===void 0||lt===!0,L=M(w,B,gt);if(w.isDepthTexture)xt=6402,a?w.type===hr?xt=36012:w.type===cr?xt=33190:w.type===ss?xt=35056:xt=33189:w.type===hr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===dr&&xt===6402&&w.type!==Lf&&w.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=cr,dt=r.convert(w.type)),w.format===ps&&xt===6402&&(xt=34041,w.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ss,dt=r.convert(w.type))),jt&&(Jt?e.texStorage2D(3553,1,xt,B.width,B.height):e.texImage2D(3553,0,xt,B.width,B.height,0,wt,dt,null));else if(w.isDataTexture)if(_t.length>0&&gt){Jt&&jt&&e.texStorage2D(3553,L,xt,_t[0].width,_t[0].height);for(let Y=0,ot=_t.length;Y<ot;Y++)Ct=_t[Y],Jt?e.texSubImage2D(3553,Y,0,0,Ct.width,Ct.height,wt,dt,Ct.data):e.texImage2D(3553,Y,xt,Ct.width,Ct.height,0,wt,dt,Ct.data);w.generateMipmaps=!1}else Jt?(jt&&e.texStorage2D(3553,L,xt,B.width,B.height),e.texSubImage2D(3553,0,0,0,B.width,B.height,wt,dt,B.data)):e.texImage2D(3553,0,xt,B.width,B.height,0,wt,dt,B.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Jt&&jt&&e.texStorage3D(35866,L,xt,_t[0].width,_t[0].height,B.depth);for(let Y=0,ot=_t.length;Y<ot;Y++)Ct=_t[Y],w.format!==Ji?wt!==null?Jt?e.compressedTexSubImage3D(35866,Y,0,0,0,Ct.width,Ct.height,B.depth,wt,Ct.data,0,0):e.compressedTexImage3D(35866,Y,xt,Ct.width,Ct.height,B.depth,0,Ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(35866,Y,0,0,0,Ct.width,Ct.height,B.depth,wt,dt,Ct.data):e.texImage3D(35866,Y,xt,Ct.width,Ct.height,B.depth,0,wt,dt,Ct.data)}else{Jt&&jt&&e.texStorage2D(3553,L,xt,_t[0].width,_t[0].height);for(let Y=0,ot=_t.length;Y<ot;Y++)Ct=_t[Y],w.format!==Ji?wt!==null?Jt?e.compressedTexSubImage2D(3553,Y,0,0,Ct.width,Ct.height,wt,Ct.data):e.compressedTexImage2D(3553,Y,xt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(3553,Y,0,0,Ct.width,Ct.height,wt,dt,Ct.data):e.texImage2D(3553,Y,xt,Ct.width,Ct.height,0,wt,dt,Ct.data)}else if(w.isDataArrayTexture)Jt?(jt&&e.texStorage3D(35866,L,xt,B.width,B.height,B.depth),e.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,wt,dt,B.data)):e.texImage3D(35866,0,xt,B.width,B.height,B.depth,0,wt,dt,B.data);else if(w.isData3DTexture)Jt?(jt&&e.texStorage3D(32879,L,xt,B.width,B.height,B.depth),e.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,wt,dt,B.data)):e.texImage3D(32879,0,xt,B.width,B.height,B.depth,0,wt,dt,B.data);else if(w.isFramebufferTexture){if(jt)if(Jt)e.texStorage2D(3553,L,xt,B.width,B.height);else{let Y=B.width,ot=B.height;for(let mt=0;mt<L;mt++)e.texImage2D(3553,mt,xt,Y,ot,0,wt,dt,null),Y>>=1,ot>>=1}}else if(_t.length>0&&gt){Jt&&jt&&e.texStorage2D(3553,L,xt,_t[0].width,_t[0].height);for(let Y=0,ot=_t.length;Y<ot;Y++)Ct=_t[Y],Jt?e.texSubImage2D(3553,Y,0,0,wt,dt,Ct):e.texImage2D(3553,Y,xt,wt,dt,Ct);w.generateMipmaps=!1}else Jt?(jt&&e.texStorage2D(3553,L,xt,B.width,B.height),e.texSubImage2D(3553,0,0,0,wt,dt,B)):e.texImage2D(3553,0,xt,wt,dt,B);P(w,gt)&&E(st),ht.__version=ut.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Tt(A,w,V){if(w.image.length!==6)return;const st=Rt(A,w),lt=w.source;e.bindTexture(34067,A.__webglTexture,33984+V);const ut=i.get(lt);if(lt.version!==ut.__version||st===!0){e.activeTexture(33984+V),s.pixelStorei(37440,w.flipY),s.pixelStorei(37441,w.premultiplyAlpha),s.pixelStorei(3317,w.unpackAlignment),s.pixelStorei(37443,0);const ht=w.isCompressedTexture||w.image[0].isCompressedTexture,J=w.image[0]&&w.image[0].isDataTexture,B=[];for(let Y=0;Y<6;Y++)!ht&&!J?B[Y]=y(w.image[Y],!1,!0,c):B[Y]=J?w.image[Y].image:w.image[Y],B[Y]=_e(w,B[Y]);const gt=B[0],wt=v(gt)||a,dt=r.convert(w.format,w.encoding),xt=r.convert(w.type),Ct=x(w.internalFormat,dt,xt,w.encoding),_t=a&&w.isVideoTexture!==!0,Jt=ut.__version===void 0||st===!0;let jt=M(w,gt,wt);W(34067,w,wt);let L;if(ht){_t&&Jt&&e.texStorage2D(34067,jt,Ct,gt.width,gt.height);for(let Y=0;Y<6;Y++){L=B[Y].mipmaps;for(let ot=0;ot<L.length;ot++){const mt=L[ot];w.format!==Ji?dt!==null?_t?e.compressedTexSubImage2D(34069+Y,ot,0,0,mt.width,mt.height,dt,mt.data):e.compressedTexImage2D(34069+Y,ot,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?e.texSubImage2D(34069+Y,ot,0,0,mt.width,mt.height,dt,xt,mt.data):e.texImage2D(34069+Y,ot,Ct,mt.width,mt.height,0,dt,xt,mt.data)}}}else{L=w.mipmaps,_t&&Jt&&(L.length>0&&jt++,e.texStorage2D(34067,jt,Ct,B[0].width,B[0].height));for(let Y=0;Y<6;Y++)if(J){_t?e.texSubImage2D(34069+Y,0,0,0,B[Y].width,B[Y].height,dt,xt,B[Y].data):e.texImage2D(34069+Y,0,Ct,B[Y].width,B[Y].height,0,dt,xt,B[Y].data);for(let ot=0;ot<L.length;ot++){const bt=L[ot].image[Y].image;_t?e.texSubImage2D(34069+Y,ot+1,0,0,bt.width,bt.height,dt,xt,bt.data):e.texImage2D(34069+Y,ot+1,Ct,bt.width,bt.height,0,dt,xt,bt.data)}}else{_t?e.texSubImage2D(34069+Y,0,0,0,dt,xt,B[Y]):e.texImage2D(34069+Y,0,Ct,dt,xt,B[Y]);for(let ot=0;ot<L.length;ot++){const mt=L[ot];_t?e.texSubImage2D(34069+Y,ot+1,0,0,dt,xt,mt.image[Y]):e.texImage2D(34069+Y,ot+1,Ct,dt,xt,mt.image[Y])}}}P(w,wt)&&E(34067),ut.__version=lt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function rt(A,w,V,st,lt){const ut=r.convert(V.format,V.encoding),ht=r.convert(V.type),J=x(V.internalFormat,ut,ht,V.encoding);i.get(w).__hasExternalTextures||(lt===32879||lt===35866?e.texImage3D(lt,0,J,w.width,w.height,w.depth,0,ut,ht,null):e.texImage2D(lt,0,J,w.width,w.height,0,ut,ht,null)),e.bindFramebuffer(36160,A),Vt(w)?f.framebufferTexture2DMultisampleEXT(36160,st,lt,i.get(V).__webglTexture,0,Ut(w)):(lt===3553||lt>=34069&&lt<=34074)&&s.framebufferTexture2D(36160,st,lt,i.get(V).__webglTexture,0),e.bindFramebuffer(36160,null)}function It(A,w,V){if(s.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let st=33189;if(V||Vt(w)){const lt=w.depthTexture;lt&&lt.isDepthTexture&&(lt.type===hr?st=36012:lt.type===cr&&(st=33190));const ut=Ut(w);Vt(w)?f.renderbufferStorageMultisampleEXT(36161,ut,st,w.width,w.height):s.renderbufferStorageMultisample(36161,ut,st,w.width,w.height)}else s.renderbufferStorage(36161,st,w.width,w.height);s.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const st=Ut(w);V&&Vt(w)===!1?s.renderbufferStorageMultisample(36161,st,35056,w.width,w.height):Vt(w)?f.renderbufferStorageMultisampleEXT(36161,st,35056,w.width,w.height):s.renderbufferStorage(36161,34041,w.width,w.height),s.framebufferRenderbuffer(36160,33306,36161,A)}else{const st=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let lt=0;lt<st.length;lt++){const ut=st[lt],ht=r.convert(ut.format,ut.encoding),J=r.convert(ut.type),B=x(ut.internalFormat,ht,J,ut.encoding),gt=Ut(w);V&&Vt(w)===!1?s.renderbufferStorageMultisample(36161,gt,B,w.width,w.height):Vt(w)?f.renderbufferStorageMultisampleEXT(36161,gt,B,w.width,w.height):s.renderbufferStorage(36161,B,w.width,w.height)}}s.bindRenderbuffer(36161,null)}function At(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),nt(w.depthTexture,0);const st=i.get(w.depthTexture).__webglTexture,lt=Ut(w);if(w.depthTexture.format===dr)Vt(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,st,0,lt):s.framebufferTexture2D(36160,36096,3553,st,0);else if(w.depthTexture.format===ps)Vt(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,st,0,lt):s.framebufferTexture2D(36160,33306,3553,st,0);else throw new Error("Unknown depthTexture format")}function Et(A){const w=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");At(w.__webglFramebuffer,A)}else if(V){w.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(36160,w.__webglFramebuffer[st]),w.__webglDepthbuffer[st]=s.createRenderbuffer(),It(w.__webglDepthbuffer[st],A,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),It(w.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function Gt(A,w,V){const st=i.get(A);w!==void 0&&rt(st.__webglFramebuffer,A,A.texture,36064,3553),V!==void 0&&Et(A)}function G(A){const w=A.texture,V=i.get(A),st=i.get(w);A.addEventListener("dispose",it),A.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=w.version,o.memory.textures++);const lt=A.isWebGLCubeRenderTarget===!0,ut=A.isWebGLMultipleRenderTargets===!0,ht=v(A)||a;if(lt){V.__webglFramebuffer=[];for(let J=0;J<6;J++)V.__webglFramebuffer[J]=s.createFramebuffer()}else{if(V.__webglFramebuffer=s.createFramebuffer(),ut)if(n.drawBuffers){const J=A.texture;for(let B=0,gt=J.length;B<gt;B++){const wt=i.get(J[B]);wt.__webglTexture===void 0&&(wt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Vt(A)===!1){const J=ut?w:[w];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let B=0;B<J.length;B++){const gt=J[B];V.__webglColorRenderbuffer[B]=s.createRenderbuffer(),s.bindRenderbuffer(36161,V.__webglColorRenderbuffer[B]);const wt=r.convert(gt.format,gt.encoding),dt=r.convert(gt.type),xt=x(gt.internalFormat,wt,dt,gt.encoding,A.isXRRenderTarget===!0),Ct=Ut(A);s.renderbufferStorageMultisample(36161,Ct,xt,A.width,A.height),s.framebufferRenderbuffer(36160,36064+B,36161,V.__webglColorRenderbuffer[B])}s.bindRenderbuffer(36161,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),It(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(lt){e.bindTexture(34067,st.__webglTexture),W(34067,w,ht);for(let J=0;J<6;J++)rt(V.__webglFramebuffer[J],A,w,36064,34069+J);P(w,ht)&&E(34067),e.unbindTexture()}else if(ut){const J=A.texture;for(let B=0,gt=J.length;B<gt;B++){const wt=J[B],dt=i.get(wt);e.bindTexture(3553,dt.__webglTexture),W(3553,wt,ht),rt(V.__webglFramebuffer,A,wt,36064+B,3553),P(wt,ht)&&E(3553)}e.unbindTexture()}else{let J=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?J=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(J,st.__webglTexture),W(J,w,ht),rt(V.__webglFramebuffer,A,w,36064,J),P(w,ht)&&E(J),e.unbindTexture()}A.depthBuffer&&Et(A)}function Kt(A){const w=v(A)||a,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let st=0,lt=V.length;st<lt;st++){const ut=V[st];if(P(ut,w)){const ht=A.isWebGLCubeRenderTarget?34067:3553,J=i.get(ut).__webglTexture;e.bindTexture(ht,J),E(ht),e.unbindTexture()}}}function ae(A){if(a&&A.samples>0&&Vt(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,st=A.height;let lt=16384;const ut=[],ht=A.stencilBuffer?33306:36096,J=i.get(A),B=A.isWebGLMultipleRenderTargets===!0;if(B)for(let gt=0;gt<w.length;gt++)e.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+gt,36161,null),e.bindFramebuffer(36160,J.__webglFramebuffer),s.framebufferTexture2D(36009,36064+gt,3553,null,0);e.bindFramebuffer(36008,J.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,J.__webglFramebuffer);for(let gt=0;gt<w.length;gt++){ut.push(36064+gt),A.depthBuffer&&ut.push(ht);const wt=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(wt===!1&&(A.depthBuffer&&(lt|=256),A.stencilBuffer&&(lt|=1024)),B&&s.framebufferRenderbuffer(36008,36064,36161,J.__webglColorRenderbuffer[gt]),wt===!0&&(s.invalidateFramebuffer(36008,[ht]),s.invalidateFramebuffer(36009,[ht])),B){const dt=i.get(w[gt]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,dt,0)}s.blitFramebuffer(0,0,V,st,0,0,V,st,lt,9728),m&&s.invalidateFramebuffer(36008,ut)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),B)for(let gt=0;gt<w.length;gt++){e.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+gt,36161,J.__webglColorRenderbuffer[gt]);const wt=i.get(w[gt]).__webglTexture;e.bindFramebuffer(36160,J.__webglFramebuffer),s.framebufferTexture2D(36009,36064+gt,3553,wt,0)}e.bindFramebuffer(36009,J.__webglMultisampledFramebuffer)}}function Ut(A){return Math.min(u,A.samples)}function Vt(A){const w=i.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Se(A){const w=o.render.frame;g.get(A)!==w&&(g.set(A,w),A.update())}function _e(A,w){const V=A.encoding,st=A.format,lt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===nc||V!==Mr&&(V===le?a===!1?t.has("EXT_sRGB")===!0&&st===Ji?(A.format=nc,A.minFilter=Ii,A.generateMipmaps=!1):w=If.sRGBToLinear(w):(st!==Ji||lt!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),w}this.allocateTextureUnit=k,this.resetTextureUnits=C,this.setTexture2D=nt,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=Q,this.rebindTextures=Gt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Vt}function pv(s,t,e){const i=e.isWebGL2;function n(r,o=null){let a;if(r===Sr)return 5121;if(r===am)return 32819;if(r===lm)return 32820;if(r===rm)return 5120;if(r===sm)return 5122;if(r===Lf)return 5123;if(r===om)return 5124;if(r===cr)return 5125;if(r===hr)return 5126;if(r===eo)return i?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===cm)return 6406;if(r===Ji)return 6408;if(r===um)return 6409;if(r===fm)return 6410;if(r===dr)return 6402;if(r===ps)return 34041;if(r===hm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===nc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===dm)return 6403;if(r===pm)return 36244;if(r===mm)return 33319;if(r===gm)return 33320;if(r===_m)return 36249;if(r===Ka||r===Qa||r===tl||r===el)if(o===le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ka)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===el)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ka)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===el)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mh||r===wh||r===Th||r===Ch)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Mh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Th)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ch)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xm)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Eh||r===Ah)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Eh)return o===le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ah)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ph||r===Lh||r===Dh||r===Rh||r===Ih||r===zh||r===Oh||r===Fh||r===Nh||r===Uh||r===Bh||r===kh||r===Gh||r===Vh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ph)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lh)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dh)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rh)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ih)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zh)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Oh)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fh)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nh)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uh)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bh)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kh)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gh)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vh)return o===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Hh)return o===le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ss?i?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}class mv extends zi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _i extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gv={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const p of t.hand.values()){const d=e.getJointPose(p,i),_=this._getHandJoint(c,p);d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gv)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new _i;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class _v extends li{constructor(t,e,i,n,r,o,a,l,c,h){if(h=h!==void 0?h:dr,h!==dr&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===dr&&(i=cr),i===void 0&&h===ps&&(i=ss),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ai,this.minFilter=l!==void 0?l:ai,this.flipY=!1,this.generateMipmaps=!1}}class xv extends Ms{constructor(t,e){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,f=null,m=null;const g=e.getContextAttributes();let p=null,d=null;const _=[],S=[],y=new Set,v=new Map,b=new zi;b.layers.enable(1),b.viewport=new ze;const P=new zi;P.layers.enable(2),P.viewport=new ze;const E=[b,P],x=new mv;x.layers.enable(1),x.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=_[H];return X===void 0&&(X=new Pl,_[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=_[H];return X===void 0&&(X=new Pl,_[H]=X),X.getGripSpace()},this.getHand=function(H){let X=_[H];return X===void 0&&(X=new Pl,_[H]=X),X.getHandSpace()};function U(H){const X=S.indexOf(H.inputSource);if(X===-1)return;const Q=_[X];Q!==void 0&&Q.dispatchEvent({type:H.type,data:H.inputSource})}function it(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",it),n.removeEventListener("inputsourceschange",N);for(let H=0;H<_.length;H++){const X=S[H];X!==null&&(S[H]=null,_[H].disconnect(X))}M=null,D=null,t.setRenderTarget(p),f=null,u=null,h=null,n=null,d=null,nt.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",it),n.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await e.makeXRCompatible(),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const X={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,X),n.updateRenderState({baseLayer:f}),d=new Ki(f.framebufferWidth,f.framebufferHeight,{format:Ji,type:Sr,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let X=null,Q=null,K=null;g.depth&&(K=g.stencil?35056:33190,X=g.stencil?ps:dr,Q=g.stencil?ss:cr);const et={colorFormat:32856,depthFormat:K,scaleFactor:r};h=new XRWebGLBinding(n,e),u=h.createProjectionLayer(et),n.updateRenderState({layers:[u]}),d=new Ki(u.textureWidth,u.textureHeight,{format:Ji,type:Sr,depthTexture:new _v(u.textureWidth,u.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const W=t.properties.get(d);W.__ignoreDepthValues=u.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await n.requestReferenceSpace(a),nt.setContext(n),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function N(H){for(let X=0;X<H.removed.length;X++){const Q=H.removed[X],K=S.indexOf(Q);K>=0&&(S[K]=null,_[K].disconnect(Q))}for(let X=0;X<H.added.length;X++){const Q=H.added[X];let K=S.indexOf(Q);if(K===-1){for(let W=0;W<_.length;W++)if(W>=S.length){S.push(Q),K=W;break}else if(S[W]===null){S[W]=Q,K=W;break}if(K===-1)break}const et=_[K];et&&et.connect(Q)}}const R=new I,F=new I;function Z(H,X,Q){R.setFromMatrixPosition(X.matrixWorld),F.setFromMatrixPosition(Q.matrixWorld);const K=R.distanceTo(F),et=X.projectionMatrix.elements,W=Q.projectionMatrix.elements,Rt=et[14]/(et[10]-1),pt=et[14]/(et[10]+1),Tt=(et[9]+1)/et[5],rt=(et[9]-1)/et[5],It=(et[8]-1)/et[0],At=(W[8]+1)/W[0],Et=Rt*It,Gt=Rt*At,G=K/(-It+At),Kt=G*-It;X.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Kt),H.translateZ(G),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const ae=Rt+G,Ut=pt+G,Vt=Et-Kt,Se=Gt+(K-Kt),_e=Tt*pt/Ut*ae,A=rt*pt/Ut*ae;H.projectionMatrix.makePerspective(Vt,Se,_e,A,ae,Ut)}function C(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;x.near=P.near=b.near=H.near,x.far=P.far=b.far=H.far,(M!==x.near||D!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),M=x.near,D=x.far);const X=H.parent,Q=x.cameras;C(x,X);for(let et=0;et<Q.length;et++)C(Q[et],X);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),H.matrix.copy(x.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const K=H.children;for(let et=0,W=K.length;et<W;et++)K[et].updateMatrixWorld(!0);Q.length===2?Z(x,b,P):x.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(H){u!==null&&(u.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.getPlanes=function(){return y};let k=null;function tt(H,X){if(c=X.getViewerPose(l||o),m=X,c!==null){const Q=c.views;f!==null&&(t.setRenderTargetFramebuffer(d,f.framebuffer),t.setRenderTarget(d));let K=!1;Q.length!==x.cameras.length&&(x.cameras.length=0,K=!0);for(let et=0;et<Q.length;et++){const W=Q[et];let Rt=null;if(f!==null)Rt=f.getViewport(W);else{const Tt=h.getViewSubImage(u,W);Rt=Tt.viewport,et===0&&(t.setRenderTargetTextures(d,Tt.colorTexture,u.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(d))}let pt=E[et];pt===void 0&&(pt=new zi,pt.layers.enable(et),pt.viewport=new ze,E[et]=pt),pt.matrix.fromArray(W.transform.matrix),pt.projectionMatrix.fromArray(W.projectionMatrix),pt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),et===0&&x.matrix.copy(pt.matrix),K===!0&&x.cameras.push(pt)}}for(let Q=0;Q<_.length;Q++){const K=S[Q],et=_[Q];K!==null&&et!==void 0&&et.update(K,X,l||o)}if(k&&k(H,X),X.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:X.detectedPlanes});let Q=null;for(const K of y)X.detectedPlanes.has(K)||(Q===null&&(Q=[]),Q.push(K));if(Q!==null)for(const K of Q)y.delete(K),v.delete(K),i.dispatchEvent({type:"planeremoved",data:K});for(const K of X.detectedPlanes)if(!y.has(K))y.add(K),v.set(K,X.lastChangedTime),i.dispatchEvent({type:"planeadded",data:K});else{const et=v.get(K);K.lastChangedTime>et&&(v.set(K,K.lastChangedTime),i.dispatchEvent({type:"planechanged",data:K}))}}m=null}const nt=new Gf;nt.setAnimationLoop(tt),this.setAnimationLoop=function(H){k=H},this.dispose=function(){}}}function vv(s,t){function e(p,d){d.color.getRGB(p.fogColor.value,Uf(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,_,S,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?n(p,d):d.isMeshToonMaterial?(n(p,d),h(p,d)):d.isMeshPhongMaterial?(n(p,d),c(p,d)):d.isMeshStandardMaterial?(n(p,d),u(p,d),d.isMeshPhysicalMaterial&&f(p,d,y)):d.isMeshMatcapMaterial?(n(p,d),m(p,d)):d.isMeshDepthMaterial?n(p,d):d.isMeshDistanceMaterial?(n(p,d),g(p,d)):d.isMeshNormalMaterial?n(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,_,S):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===ki&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===ki&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=t.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const v=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let y;d.aoMap?y=d.aoMap:d.lightMap&&(y=d.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,_,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=S*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===ki&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function yv(s,t,e,i){let n={},r={},o=[];const a=e.isWebGL2?s.getParameter(35375):0;function l(S,y){const v=y.program;i.uniformBlockBinding(S,v)}function c(S,y){let v=n[S.id];v===void 0&&(g(S),v=h(S),n[S.id]=v,S.addEventListener("dispose",d));const b=y.program;i.updateUBOMapping(S,b);const P=t.render.frame;r[S.id]!==P&&(f(S),r[S.id]=P)}function h(S){const y=u();S.__bindingPointIndex=y;const v=s.createBuffer(),b=S.__size,P=S.usage;return s.bindBuffer(35345,v),s.bufferData(35345,b,P),s.bindBuffer(35345,null),s.bindBufferBase(35345,y,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=n[S.id],v=S.uniforms,b=S.__cache;s.bindBuffer(35345,y);for(let P=0,E=v.length;P<E;P++){const x=v[P];if(m(x,P,b)===!0){const M=x.value,D=x.__offset;typeof M=="number"?(x.__data[0]=M,s.bufferSubData(35345,D,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):M.toArray(x.__data),s.bufferSubData(35345,D,x.__data))}}s.bindBuffer(35345,null)}function m(S,y,v){const b=S.value;if(v[y]===void 0)return typeof b=="number"?v[y]=b:v[y]=b.clone(),!0;if(typeof b=="number"){if(v[y]!==b)return v[y]=b,!0}else{const P=v[y];if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(S){const y=S.uniforms;let v=0;const b=16;let P=0;for(let E=0,x=y.length;E<x;E++){const M=y[E],D=p(M);if(M.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,E>0){P=v%b;const U=b-P;P!==0&&U-D.boundary<0&&(v+=b-P,M.__offset=v)}v+=D.storage}return P=v%b,P>0&&(v+=b-P),S.__size=v,S.__cache={},this}function p(S){const y=S.value,v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function d(S){const y=S.target;y.removeEventListener("dispose",d);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(n[y.id]),delete n[y.id],delete r[y.id]}function _(){for(const S in n)s.deleteBuffer(n[S]);o=[],n={},r={}}return{bind:l,update:c,dispose:_}}function bv(){const s=no("canvas");return s.style.display="block",s}function qf(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:bv(),e=s.context!==void 0?s.context:null,i=s.depth!==void 0?s.depth:!0,n=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let u=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mr,this.physicallyCorrectLights=!1,this.toneMapping=Mn,this.toneMappingExposure=1;const p=this;let d=!1,_=0,S=0,y=null,v=-1,b=null;const P=new ze,E=new ze;let x=null,M=t.width,D=t.height,U=1,it=null,N=null;const R=new ze(0,0,M,D),F=new ze(0,0,M,D);let Z=!1;const C=new Fc;let k=!1,tt=!1,nt=null;const H=new ge,X=new yt,Q=new I,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return y===null?U:1}let W=e;function Rt(T,z){for(let $=0;$<T.length;$++){const O=T[$],q=t.getContext(O,z);if(q!==null)return q}return null}try{const T={alpha:!0,depth:i,stencil:n,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",Ct,!1),t.addEventListener("webglcontextcreationerror",_t,!1),W===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),W=Rt(z,T),W===null)throw Rt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let pt,Tt,rt,It,At,Et,Gt,G,Kt,ae,Ut,Vt,Se,_e,A,w,V,st,lt,ut,ht,J,B,gt;function wt(){pt=new R0(W),Tt=new C0(W,pt,s),pt.init(Tt),J=new pv(W,pt,Tt),rt=new fv(W,pt,Tt),It=new O0,At=new Kx,Et=new dv(W,pt,rt,At,Tt,J,It),Gt=new A0(p),G=new D0(p),Kt=new Wm(W,Tt),B=new w0(W,pt,Kt,Tt),ae=new I0(W,Kt,It,B),Ut=new B0(W,ae,Kt,It),lt=new U0(W,Tt,Et),w=new E0(At),Vt=new jx(p,Gt,G,pt,Tt,B,w),Se=new vv(p,At),_e=new tv,A=new ov(pt,Tt),st=new M0(p,Gt,G,rt,Ut,h,o),V=new uv(p,Ut,Tt),gt=new yv(W,It,Tt,rt),ut=new T0(W,pt,It,Tt),ht=new z0(W,pt,It,Tt),It.programs=Vt.programs,p.capabilities=Tt,p.extensions=pt,p.properties=At,p.renderLists=_e,p.shadowMap=V,p.state=rt,p.info=It}wt();const dt=new xv(p,W);this.xr=dt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(M,D,!1))},this.getSize=function(T){return T.set(M,D)},this.setSize=function(T,z,$){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=T,D=z,t.width=Math.floor(T*U),t.height=Math.floor(z*U),$!==!1&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(M*U,D*U).floor()},this.setDrawingBufferSize=function(T,z,$){M=T,D=z,U=$,t.width=Math.floor(T*$),t.height=Math.floor(z*$),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,z,$,O){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,z,$,O),rt.viewport(P.copy(R).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(F)},this.setScissor=function(T,z,$,O){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,z,$,O),rt.scissor(E.copy(F).multiplyScalar(U).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(T){rt.setScissorTest(Z=T)},this.setOpaqueSort=function(T){it=T},this.setTransparentSort=function(T){N=T},this.getClearColor=function(T){return T.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(T=!0,z=!0,$=!0){let O=0;T&&(O|=16384),z&&(O|=256),$&&(O|=1024),W.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",Ct,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),_e.dispose(),A.dispose(),At.dispose(),Gt.dispose(),G.dispose(),Ut.dispose(),B.dispose(),gt.dispose(),Vt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",mt),dt.removeEventListener("sessionend",bt),nt&&(nt.dispose(),nt=null),at.stop()};function xt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=It.autoReset,z=V.enabled,$=V.autoUpdate,O=V.needsUpdate,q=V.type;wt(),It.autoReset=T,V.enabled=z,V.autoUpdate=$,V.needsUpdate=O,V.type=q}function _t(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Jt(T){const z=T.target;z.removeEventListener("dispose",Jt),jt(z)}function jt(T){L(T),At.remove(T)}function L(T){const z=At.get(T).programs;z!==void 0&&(z.forEach(function($){Vt.releaseProgram($)}),T.isShaderMaterial&&Vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,$,O,q,vt){z===null&&(z=K);const Pt=q.isMesh&&q.matrixWorld.determinant()<0,Bt=Me(T,z,$,O,q);rt.setMaterial(O,Pt);let kt=$.index,Ot=1;O.wireframe===!0&&(kt=ae.getWireframeAttribute($),Ot=2);const Dt=$.drawRange,Nt=$.attributes.position;let se=Dt.start*Ot,Ge=(Dt.start+Dt.count)*Ot;vt!==null&&(se=Math.max(se,vt.start*Ot),Ge=Math.min(Ge,(vt.start+vt.count)*Ot)),kt!==null?(se=Math.max(se,0),Ge=Math.min(Ge,kt.count)):Nt!=null&&(se=Math.max(se,0),Ge=Math.min(Ge,Nt.count));const Ye=Ge-se;if(Ye<0||Ye===1/0)return;B.setup(q,O,Bt,$,kt);let Pe,ne=ut;if(kt!==null&&(Pe=Kt.get(kt),ne=ht,ne.setIndex(Pe)),q.isMesh)O.wireframe===!0?(rt.setLineWidth(O.wireframeLinewidth*et()),ne.setMode(1)):ne.setMode(4);else if(q.isLine){let Ht=O.linewidth;Ht===void 0&&(Ht=1),rt.setLineWidth(Ht*et()),q.isLineSegments?ne.setMode(1):q.isLineLoop?ne.setMode(2):ne.setMode(3)}else q.isPoints?ne.setMode(0):q.isSprite&&ne.setMode(4);if(q.isInstancedMesh)ne.renderInstances(se,Ye,q.count);else if($.isInstancedBufferGeometry){const Ht=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,fn=Math.min($.instanceCount,Ht);ne.renderInstances(se,Ye,fn)}else ne.render(se,Ye)},this.compile=function(T,z){function $(O,q,vt){O.transparent===!0&&O.side===Fn?(O.side=ki,O.needsUpdate=!0,Xt(O,q,vt),O.side=us,O.needsUpdate=!0,Xt(O,q,vt),O.side=Fn):Xt(O,q,vt)}f=A.get(T),f.init(),g.push(f),T.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(p.physicallyCorrectLights),T.traverse(function(O){const q=O.material;if(q)if(Array.isArray(q))for(let vt=0;vt<q.length;vt++){const Pt=q[vt];$(Pt,T,O)}else $(q,T,O)}),g.pop(),f=null};let Y=null;function ot(T){Y&&Y(T)}function mt(){at.stop()}function bt(){at.start()}const at=new Gf;at.setAnimationLoop(ot),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(T){Y=T,dt.setAnimationLoop(T),T===null?at.stop():at.start()},dt.addEventListener("sessionstart",mt),dt.addEventListener("sessionend",bt),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(z),z=dt.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,z,y),f=A.get(T,g.length),f.init(),g.push(f),H.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),C.setFromProjectionMatrix(H),tt=this.localClippingEnabled,k=w.init(this.clippingPlanes,tt,z),u=_e.get(T,m.length),u.init(),m.push(u),j(T,z,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(it,N),k===!0&&w.beginShadows();const $=f.state.shadowsArray;if(V.render($,T,z),k===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(u,T),f.setupLights(p.physicallyCorrectLights),z.isArrayCamera){const O=z.cameras;for(let q=0,vt=O.length;q<vt;q++){const Pt=O[q];ct(u,T,Pt,Pt.viewport)}}else ct(u,T,z);y!==null&&(Et.updateMultisampleRenderTarget(y),Et.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(p,T,z),B.resetDefaultState(),v=-1,b=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function j(T,z,$,O){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||C.intersectsSprite(T)){O&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(H);const Pt=Ut.update(T),Bt=T.material;Bt.visible&&u.push(T,Pt,Bt,$,Q.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==It.render.frame&&(T.skeleton.update(),T.skeleton.frame=It.render.frame),!T.frustumCulled||C.intersectsObject(T))){O&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(H);const Pt=Ut.update(T),Bt=T.material;if(Array.isArray(Bt)){const kt=Pt.groups;for(let Ot=0,Dt=kt.length;Ot<Dt;Ot++){const Nt=kt[Ot],se=Bt[Nt.materialIndex];se&&se.visible&&u.push(T,Pt,se,$,Q.z,Nt)}}else Bt.visible&&u.push(T,Pt,Bt,$,Q.z,null)}}const vt=T.children;for(let Pt=0,Bt=vt.length;Pt<Bt;Pt++)j(vt[Pt],z,$,O)}function ct(T,z,$,O){const q=T.opaque,vt=T.transmissive,Pt=T.transparent;f.setupLightsView($),vt.length>0&&St(q,z,$),O&&rt.viewport(P.copy(O)),q.length>0&&Lt(q,z,$),vt.length>0&&Lt(vt,z,$),Pt.length>0&&Lt(Pt,z,$),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function St(T,z,$){const O=Tt.isWebGL2;nt===null&&(nt=new Ki(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")?eo:Sr,minFilter:Ua,samples:O&&r===!0?4:0})),p.getDrawingBufferSize(X),O?nt.setSize(X.x,X.y):nt.setSize(rc(X.x),rc(X.y));const q=p.getRenderTarget();p.setRenderTarget(nt),p.clear();const vt=p.toneMapping;p.toneMapping=Mn,Lt(T,z,$),p.toneMapping=vt,Et.updateMultisampleRenderTarget(nt),Et.updateRenderTargetMipmap(nt),p.setRenderTarget(q)}function Lt(T,z,$){const O=z.isScene===!0?z.overrideMaterial:null;for(let q=0,vt=T.length;q<vt;q++){const Pt=T[q],Bt=Pt.object,kt=Pt.geometry,Ot=O===null?Pt.material:O,Dt=Pt.group;Bt.layers.test($.layers)&&zt(Bt,z,$,kt,Ot,Dt)}}function zt(T,z,$,O,q,vt){T.onBeforeRender(p,z,$,O,q,vt),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(p,z,$,O,T,vt),q.transparent===!0&&q.side===Fn?(q.side=ki,q.needsUpdate=!0,p.renderBufferDirect($,z,O,q,T,vt),q.side=us,q.needsUpdate=!0,p.renderBufferDirect($,z,O,q,T,vt),q.side=Fn):p.renderBufferDirect($,z,O,q,T,vt),T.onAfterRender(p,z,$,O,q,vt)}function Xt(T,z,$){z.isScene!==!0&&(z=K);const O=At.get(T),q=f.state.lights,vt=f.state.shadowsArray,Pt=q.state.version,Bt=Vt.getParameters(T,q.state,vt,z,$),kt=Vt.getProgramCacheKey(Bt);let Ot=O.programs;O.environment=T.isMeshStandardMaterial?z.environment:null,O.fog=z.fog,O.envMap=(T.isMeshStandardMaterial?G:Gt).get(T.envMap||O.environment),Ot===void 0&&(T.addEventListener("dispose",Jt),Ot=new Map,O.programs=Ot);let Dt=Ot.get(kt);if(Dt!==void 0){if(O.currentProgram===Dt&&O.lightsStateVersion===Pt)return Ae(T,Bt),Dt}else Bt.uniforms=Vt.getUniforms(T),T.onBuild($,Bt,p),T.onBeforeCompile(Bt,p),Dt=Vt.acquireProgram(Bt,kt),Ot.set(kt,Dt),O.uniforms=Bt.uniforms;const Nt=O.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Nt.clippingPlanes=w.uniform),Ae(T,Bt),O.needsLights=te(T),O.lightsStateVersion=Pt,O.needsLights&&(Nt.ambientLightColor.value=q.state.ambient,Nt.lightProbe.value=q.state.probe,Nt.directionalLights.value=q.state.directional,Nt.directionalLightShadows.value=q.state.directionalShadow,Nt.spotLights.value=q.state.spot,Nt.spotLightShadows.value=q.state.spotShadow,Nt.rectAreaLights.value=q.state.rectArea,Nt.ltc_1.value=q.state.rectAreaLTC1,Nt.ltc_2.value=q.state.rectAreaLTC2,Nt.pointLights.value=q.state.point,Nt.pointLightShadows.value=q.state.pointShadow,Nt.hemisphereLights.value=q.state.hemi,Nt.directionalShadowMap.value=q.state.directionalShadowMap,Nt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Nt.spotShadowMap.value=q.state.spotShadowMap,Nt.spotLightMatrix.value=q.state.spotLightMatrix,Nt.spotLightMap.value=q.state.spotLightMap,Nt.pointShadowMap.value=q.state.pointShadowMap,Nt.pointShadowMatrix.value=q.state.pointShadowMatrix);const se=Dt.getUniforms(),Ge=ua.seqWithValue(se.seq,Nt);return O.currentProgram=Dt,O.uniformsList=Ge,Dt}function Ae(T,z){const $=At.get(T);$.outputEncoding=z.outputEncoding,$.instancing=z.instancing,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function Me(T,z,$,O,q){z.isScene!==!0&&(z=K),Et.resetTextureUnits();const vt=z.fog,Pt=O.isMeshStandardMaterial?z.environment:null,Bt=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Mr,kt=(O.isMeshStandardMaterial?G:Gt).get(O.envMap||Pt),Ot=O.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Dt=!!O.normalMap&&!!$.attributes.tangent,Nt=!!$.morphAttributes.position,se=!!$.morphAttributes.normal,Ge=!!$.morphAttributes.color,Ye=O.toneMapped?p.toneMapping:Mn,Pe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ne=Pe!==void 0?Pe.length:0,Ht=At.get(O),fn=f.state.lights;if(k===!0&&(tt===!0||T!==b)){const di=T===b&&O.id===v;w.setState(O,T,di)}let Le=!1;O.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==fn.state.version||Ht.outputEncoding!==Bt||q.isInstancedMesh&&Ht.instancing===!1||!q.isInstancedMesh&&Ht.instancing===!0||q.isSkinnedMesh&&Ht.skinning===!1||!q.isSkinnedMesh&&Ht.skinning===!0||Ht.envMap!==kt||O.fog===!0&&Ht.fog!==vt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==w.numPlanes||Ht.numIntersection!==w.numIntersection)||Ht.vertexAlphas!==Ot||Ht.vertexTangents!==Dt||Ht.morphTargets!==Nt||Ht.morphNormals!==se||Ht.morphColors!==Ge||Ht.toneMapping!==Ye||Tt.isWebGL2===!0&&Ht.morphTargetsCount!==ne)&&(Le=!0):(Le=!0,Ht.__version=O.version);let Jn=Ht.currentProgram;Le===!0&&(Jn=Xt(O,z,q));let ph=!1,Cs=!1,Za=!1;const $e=Jn.getUniforms(),jn=Ht.uniforms;if(rt.useProgram(Jn.program)&&(ph=!0,Cs=!0,Za=!0),O.id!==v&&(v=O.id,Cs=!0),ph||b!==T){if($e.setValue(W,"projectionMatrix",T.projectionMatrix),Tt.logarithmicDepthBuffer&&$e.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,Cs=!0,Za=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const di=$e.map.cameraPosition;di!==void 0&&di.setValue(W,Q.setFromMatrixPosition(T.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&$e.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||q.isSkinnedMesh)&&$e.setValue(W,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){$e.setOptional(W,q,"bindMatrix"),$e.setOptional(W,q,"bindMatrixInverse");const di=q.skeleton;di&&(Tt.floatVertexTextures?(di.boneTexture===null&&di.computeBoneTexture(),$e.setValue(W,"boneTexture",di.boneTexture,Et),$e.setValue(W,"boneTextureSize",di.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ja=$.morphAttributes;if((Ja.position!==void 0||Ja.normal!==void 0||Ja.color!==void 0&&Tt.isWebGL2===!0)&&lt.update(q,$,O,Jn),(Cs||Ht.receiveShadow!==q.receiveShadow)&&(Ht.receiveShadow=q.receiveShadow,$e.setValue(W,"receiveShadow",q.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(jn.envMap.value=kt,jn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Cs&&($e.setValue(W,"toneMappingExposure",p.toneMappingExposure),Ht.needsLights&&re(jn,Za),vt&&O.fog===!0&&Se.refreshFogUniforms(jn,vt),Se.refreshMaterialUniforms(jn,O,U,D,nt),ua.upload(W,Ht.uniformsList,jn,Et)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ua.upload(W,Ht.uniformsList,jn,Et),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&$e.setValue(W,"center",q.center),$e.setValue(W,"modelViewMatrix",q.modelViewMatrix),$e.setValue(W,"normalMatrix",q.normalMatrix),$e.setValue(W,"modelMatrix",q.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const di=O.uniformsGroups;for(let ja=0,Ep=di.length;ja<Ep;ja++)if(Tt.isWebGL2){const mh=di[ja];gt.update(mh,Jn),gt.bind(mh,Jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jn}function re(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function te(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,z,$){At.get(T.texture).__webglTexture=z,At.get(T.depthTexture).__webglTexture=$;const O=At.get(T);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=$===void 0,O.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const $=At.get(T);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,$=0){y=T,_=z,S=$;let O=!0,q=null,vt=!1,Pt=!1;if(T){const kt=At.get(T);kt.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(36160,null),O=!1):kt.__webglFramebuffer===void 0?Et.setupRenderTarget(T):kt.__hasExternalTextures&&Et.rebindTextures(T,At.get(T.texture).__webglTexture,At.get(T.depthTexture).__webglTexture);const Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Pt=!0);const Dt=At.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Dt[z],vt=!0):Tt.isWebGL2&&T.samples>0&&Et.useMultisampledRTT(T)===!1?q=At.get(T).__webglMultisampledFramebuffer:q=Dt,P.copy(T.viewport),E.copy(T.scissor),x=T.scissorTest}else P.copy(R).multiplyScalar(U).floor(),E.copy(F).multiplyScalar(U).floor(),x=Z;if(rt.bindFramebuffer(36160,q)&&Tt.drawBuffers&&O&&rt.drawBuffers(T,q),rt.viewport(P),rt.scissor(E),rt.setScissorTest(x),vt){const kt=At.get(T.texture);W.framebufferTexture2D(36160,36064,34069+z,kt.__webglTexture,$)}else if(Pt){const kt=At.get(T.texture),Ot=z||0;W.framebufferTextureLayer(36160,36064,kt.__webglTexture,$||0,Ot)}v=-1},this.readRenderTargetPixels=function(T,z,$,O,q,vt,Pt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pt!==void 0&&(Bt=Bt[Pt]),Bt){rt.bindFramebuffer(36160,Bt);try{const kt=T.texture,Ot=kt.format,Dt=kt.type;if(Ot!==Ji&&J.convert(Ot)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Nt=Dt===eo&&(pt.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&pt.has("EXT_color_buffer_float"));if(Dt!==Sr&&J.convert(Dt)!==W.getParameter(35738)&&!(Dt===hr&&(Tt.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-O&&$>=0&&$<=T.height-q&&W.readPixels(z,$,O,q,J.convert(Ot),J.convert(Dt),vt)}finally{const kt=y!==null?At.get(y).__webglFramebuffer:null;rt.bindFramebuffer(36160,kt)}}},this.copyFramebufferToTexture=function(T,z,$=0){const O=Math.pow(2,-$),q=Math.floor(z.image.width*O),vt=Math.floor(z.image.height*O);Et.setTexture2D(z,0),W.copyTexSubImage2D(3553,$,0,0,T.x,T.y,q,vt),rt.unbindTexture()},this.copyTextureToTexture=function(T,z,$,O=0){const q=z.image.width,vt=z.image.height,Pt=J.convert($.format),Bt=J.convert($.type);Et.setTexture2D($,0),W.pixelStorei(37440,$.flipY),W.pixelStorei(37441,$.premultiplyAlpha),W.pixelStorei(3317,$.unpackAlignment),z.isDataTexture?W.texSubImage2D(3553,O,T.x,T.y,q,vt,Pt,Bt,z.image.data):z.isCompressedTexture?W.compressedTexSubImage2D(3553,O,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Pt,z.mipmaps[0].data):W.texSubImage2D(3553,O,T.x,T.y,Pt,Bt,z.image),O===0&&$.generateMipmaps&&W.generateMipmap(3553),rt.unbindTexture()},this.copyTextureToTexture3D=function(T,z,$,O,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const vt=T.max.x-T.min.x+1,Pt=T.max.y-T.min.y+1,Bt=T.max.z-T.min.z+1,kt=J.convert(O.format),Ot=J.convert(O.type);let Dt;if(O.isData3DTexture)Et.setTexture3D(O,0),Dt=32879;else if(O.isDataArrayTexture)Et.setTexture2DArray(O,0),Dt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,O.flipY),W.pixelStorei(37441,O.premultiplyAlpha),W.pixelStorei(3317,O.unpackAlignment);const Nt=W.getParameter(3314),se=W.getParameter(32878),Ge=W.getParameter(3316),Ye=W.getParameter(3315),Pe=W.getParameter(32877),ne=$.isCompressedTexture?$.mipmaps[0]:$.image;W.pixelStorei(3314,ne.width),W.pixelStorei(32878,ne.height),W.pixelStorei(3316,T.min.x),W.pixelStorei(3315,T.min.y),W.pixelStorei(32877,T.min.z),$.isDataTexture||$.isData3DTexture?W.texSubImage3D(Dt,q,z.x,z.y,z.z,vt,Pt,Bt,kt,Ot,ne.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Dt,q,z.x,z.y,z.z,vt,Pt,Bt,kt,ne.data)):W.texSubImage3D(Dt,q,z.x,z.y,z.z,vt,Pt,Bt,kt,Ot,ne),W.pixelStorei(3314,Nt),W.pixelStorei(32878,se),W.pixelStorei(3316,Ge),W.pixelStorei(3315,Ye),W.pixelStorei(32877,Pe),q===0&&O.generateMipmaps&&W.generateMipmap(Dt),rt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Et.setTextureCube(T,0):T.isData3DTexture?Et.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Et.setTexture2DArray(T,0):Et.setTexture2D(T,0),rt.unbindTexture()},this.resetState=function(){_=0,S=0,y=null,rt.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Sv extends qf{}Sv.prototype.isWebGL1Renderer=!0;class Mv extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class zn extends vo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Cu=new I,Eu=new I,Au=new ge,Ll=new Oc,Ho=new Ba;class wv extends Be{constructor(t=new Hi,e=new zn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Cu.fromBufferAttribute(e,n-1),Eu.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Cu.distanceTo(Eu);t.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(n),Ho.radius+=r,t.ray.intersectsSphere(Ho)===!1)return;Au.copy(n).invert(),Ll.copy(t.ray).applyMatrix4(Au);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,h=new I,u=new I,f=new I,m=this.isLineSegments?2:1,g=i.index,d=i.attributes.position;if(g!==null){const _=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let y=_,v=S-1;y<v;y+=m){const b=g.getX(y),P=g.getX(y+1);if(c.fromBufferAttribute(d,b),h.fromBufferAttribute(d,P),Ll.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const x=t.ray.origin.distanceTo(f);x<t.near||x>t.far||e.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),S=Math.min(d.count,o.start+o.count);for(let y=_,v=S-1;y<v;y+=m){if(c.fromBufferAttribute(d,y),h.fromBufferAttribute(d,y+1),Ll.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(f);P<t.near||P>t.far||e.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Pu=new I,Lu=new I;class Wr extends wv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Pu.fromBufferAttribute(e,n),Lu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Pu.distanceTo(Lu);t.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);const h=i[n],f=i[n+1]-h,m=(o-h)/f;return(n+m)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new yt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new I,n=[],r=[],o=[],a=new I,l=new ge;for(let m=0;m<=t;m++){const g=m/t;n[m]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(n[m-1],n[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ei(n[m-1].dot(n[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(n[m],r[m])}if(e===!0){let m=Math.acos(ei(r[0].dot(r[t]),-1,1));m/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],m*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bc extends un{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const i=e||new yt,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Tv extends Bc{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function kc(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,n(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+i*a}}}const Wo=new I,Dl=new kc,Rl=new kc,Il=new kc;class Cv extends un{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new I){const i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(Wo.subVectors(n[0],n[1]).add(n[0]),c=Wo);const u=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(Wo.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(h),m);p<1e-4&&(p=1),g<1e-4&&(g=p),d<1e-4&&(d=p),Dl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,p,d),Rl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,p,d),Il.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,p,d)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Rl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Il.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Dl.calc(l),Rl.calc(l),Il.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new I().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Du(s,t,e,i,n){const r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function Ev(s,t){const e=1-s;return e*e*t}function Av(s,t){return 2*(1-s)*s*t}function Pv(s,t){return s*s*t}function Gs(s,t,e,i){return Ev(s,t)+Av(s,e)+Pv(s,i)}function Lv(s,t){const e=1-s;return e*e*e*t}function Dv(s,t){const e=1-s;return 3*e*e*s*t}function Rv(s,t){return 3*(1-s)*s*s*t}function Iv(s,t){return s*s*s*t}function Vs(s,t,e,i,n){return Lv(s,t)+Dv(s,e)+Rv(s,i)+Iv(s,n)}class Yf extends un{constructor(t=new yt,e=new yt,i=new yt,n=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new yt){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Vs(t,n.x,r.x,o.x,a.x),Vs(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zv extends un{constructor(t=new I,e=new I,i=new I,n=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new I){const i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Vs(t,n.x,r.x,o.x,a.x),Vs(t,n.y,r.y,o.y,a.y),Vs(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gc extends un{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const i=e||new yt;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ov extends un{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $f extends un{constructor(t=new yt,e=new yt,i=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new yt){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Gs(t,n.x,r.x,o.x),Gs(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fv extends un{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Gs(t,n.x,r.x,o.x),Gs(t,n.y,r.y,o.y),Gs(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zf extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){const i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(Du(a,l.x,c.x,h.x,u.x),Du(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new yt().fromArray(n))}return this}}var Nv=Object.freeze({__proto__:null,ArcCurve:Tv,CatmullRomCurve3:Cv,CubicBezierCurve:Yf,CubicBezierCurve3:zv,EllipseCurve:Bc,LineCurve:Gc,LineCurve3:Ov,QuadraticBezierCurve:$f,QuadraticBezierCurve3:Fv,SplineCurve:Zf});class Uv extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Gc(e,t))}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Nv[n.type]().fromJSON(n))}return this}}class Ru extends Uv{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Gc(this.currentPoint.clone(),new yt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const r=new $f(this.currentPoint.clone(),new yt(t,e),new yt(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){const a=new Yf(this.currentPoint.clone(),new yt(t,e),new yt(i,n),new yt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Zf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){const c=new Bc(t,e,i,n,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}const Xo=new I,qo=new I,zl=new I,Yo=new rn;class Xr extends Hi{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const n=Math.pow(10,4),r=Math.cos(ca*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},m=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:p,b:d,c:_}=Yo;if(p.fromBufferAttribute(a,c[0]),d.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),Yo.getNormal(zl),u[0]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,u[1]=`${Math.round(d.x*n)},${Math.round(d.y*n)},${Math.round(d.z*n)}`,u[2]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const y=(S+1)%3,v=u[S],b=u[y],P=Yo[h[S]],E=Yo[h[y]],x=`${v}_${b}`,M=`${b}_${v}`;M in f&&f[M]?(zl.dot(f[M].normal)<=r&&(m.push(P.x,P.y,P.z),m.push(E.x,E.y,E.z)),f[M]=null):x in f||(f[x]={index0:c[S],index1:c[y],normal:zl.clone()})}}for(const g in f)if(f[g]){const{index0:p,index1:d}=f[g];Xo.fromBufferAttribute(a,p),qo.fromBufferAttribute(a,d),m.push(Xo.x,Xo.y,Xo.z),m.push(qo.x,qo.y,qo.z)}this.setAttribute("position",new ke(m,3))}}}class Jf extends Ru{constructor(t){super(t),this.uuid=ws(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new Ru().fromJSON(n))}return this}}const Bv={triangulate:function(s,t,e=2){const i=t&&t.length,n=i?t[0]*e:s.length;let r=jf(s,0,n,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,m;if(i&&(r=Wv(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<n;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return ro(r,o,e,a,l,m,0),o}};function jf(s,t,e,i,n){let r,o;if(n===ey(s,t,e,i)>0)for(r=t;r<e;r+=i)o=Iu(r,s[r],s[r+1],o);else for(r=e-i;r>=t;r-=i)o=Iu(r,s[r],s[r+1],o);return o&&Wa(o,o.next)&&(oo(o),o=o.next),o}function wr(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(Wa(e,e.next)||ue(e.prev,e,e.next)===0)){if(oo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ro(s,t,e,i,n,r,o){if(!s)return;!o&&r&&Zv(s,i,n,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Gv(s,i,n,r):kv(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),oo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Vv(wr(s),t,e),ro(s,t,e,i,n,r,2)):o===2&&Hv(s,t,e,i,n,r):ro(wr(s),t,e,i,n,r,1);break}}}function kv(s){const t=s.prev,e=s,i=s.next;if(ue(t,e,i)>=0)return!1;const n=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=n<r?n<o?n:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=n>r?n>o?n:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&Qr(n,a,r,l,o,c,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Gv(s,t,e,i){const n=s.prev,r=s,o=s.next;if(ue(n,r,o)>=0)return!1;const a=n.x,l=r.x,c=o.x,h=n.y,u=r.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,p=a>l?a>c?a:c:l>c?l:c,d=h>u?h>f?h:f:u>f?u:f,_=oc(m,g,t,e,i),S=oc(p,d,t,e,i);let y=s.prevZ,v=s.nextZ;for(;y&&y.z>=_&&v&&v.z<=S;){if(y.x>=m&&y.x<=p&&y.y>=g&&y.y<=d&&y!==n&&y!==o&&Qr(a,h,l,u,c,f,y.x,y.y)&&ue(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=m&&v.x<=p&&v.y>=g&&v.y<=d&&v!==n&&v!==o&&Qr(a,h,l,u,c,f,v.x,v.y)&&ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=_;){if(y.x>=m&&y.x<=p&&y.y>=g&&y.y<=d&&y!==n&&y!==o&&Qr(a,h,l,u,c,f,y.x,y.y)&&ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=S;){if(v.x>=m&&v.x<=p&&v.y>=g&&v.y<=d&&v!==n&&v!==o&&Qr(a,h,l,u,c,f,v.x,v.y)&&ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Vv(s,t,e){let i=s;do{const n=i.prev,r=i.next.next;!Wa(n,r)&&Kf(n,i,i.next,r)&&so(n,r)&&so(r,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),oo(i),oo(i.next),i=s=r),i=i.next}while(i!==s);return wr(i)}function Hv(s,t,e,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kv(o,a)){let l=Qf(o,a);o=wr(o,o.next),l=wr(l,l.next),ro(o,t,e,i,n,r,0),ro(l,t,e,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function Wv(s,t,e,i){const n=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:s.length,c=jf(s,a,l,i,!1),c===c.next&&(c.steiner=!0),n.push(jv(c));for(n.sort(Xv),r=0;r<n.length;r++)e=qv(n[r],e);return e}function Xv(s,t){return s.x-t.x}function qv(s,t){const e=Yv(s,t);if(!e)return t;const i=Qf(e,s);return wr(i,i.next),wr(e,e.next)}function Yv(s,t){let e=t,i=-1/0,n;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,n=e.x<e.next.x?e:e.next,f===r))return n}e=e.next}while(e!==t);if(!n)return null;const a=n,l=n.x,c=n.y;let h=1/0,u;e=n;do r>=e.x&&e.x>=l&&r!==e.x&&Qr(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),so(e,s)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&$v(n,e)))&&(n=e,h=u)),e=e.next;while(e!==a);return n}function $v(s,t){return ue(s.prev,s,t.prev)<0&&ue(t.next,s,s.next)<0}function Zv(s,t,e,i){let n=s;do n.z===0&&(n.z=oc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Jv(n)}function Jv(s){let t,e,i,n,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,a--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;e=i}r.nextZ=null,c*=2}while(o>1);return s}function oc(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function jv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Qr(s,t,e,i,n,r,o,a){return(n-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(n-o)*(i-a)}function Kv(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Qv(s,t)&&(so(s,t)&&so(t,s)&&ty(s,t)&&(ue(s.prev,s,t.prev)||ue(s,t.prev,t))||Wa(s,t)&&ue(s.prev,s,s.next)>0&&ue(t.prev,t,t.next)>0)}function ue(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Wa(s,t){return s.x===t.x&&s.y===t.y}function Kf(s,t,e,i){const n=Zo(ue(s,t,e)),r=Zo(ue(s,t,i)),o=Zo(ue(e,i,s)),a=Zo(ue(e,i,t));return!!(n!==r&&o!==a||n===0&&$o(s,e,t)||r===0&&$o(s,i,t)||o===0&&$o(e,s,i)||a===0&&$o(e,t,i))}function $o(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Zo(s){return s>0?1:s<0?-1:0}function Qv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Kf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function so(s,t){return ue(s.prev,s,s.next)<0?ue(s,t,s.next)>=0&&ue(s,s.prev,t)>=0:ue(s,t,s.prev)<0||ue(s,s.next,t)<0}function ty(s,t){let e=s,i=!1;const n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function Qf(s,t){const e=new ac(s.i,s.x,s.y),i=new ac(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Iu(s,t,e,i){const n=new ac(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function oo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ac(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ey(s,t,e,i){let n=0;for(let r=t,o=e-i;r<e;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}class Hs{static area(t){const e=t.length;let i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return Hs.area(t)<0}static triangulateShape(t,e){const i=[],n=[],r=[];zu(t),Ou(i,t);let o=t.length;e.forEach(zu);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,Ou(i,e[l]);const a=Bv.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function zu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ou(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Vc extends Hi{constructor(t=new Jf([new yt(0,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ke(n,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(o,2));function c(h){const u=n.length/3,f=h.extractPoints(e);let m=f.shape;const g=f.holes;Hs.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,_=g.length;d<_;d++){const S=g[d];Hs.isClockWise(S)===!0&&(g[d]=S.reverse())}const p=Hs.triangulateShape(m,g);for(let d=0,_=g.length;d<_;d++){const S=g[d];m=m.concat(S)}for(let d=0,_=m.length;d<_;d++){const S=m[d];n.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let d=0,_=p.length;d<_;d++){const S=p[d],y=S[0]+u,v=S[1]+u,b=S[2]+u;i.push(y,v,b),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return iy(e,t)}static fromJSON(t,e){const i=[];for(let n=0,r=t.shapes.length;n<r;n++){const o=e[t.shapes[n]];i.push(o)}return new Vc(i,t.curveSegments)}}function iy(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){const n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}const Fu={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ny{constructor(t,e,i){const n=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const ry=new ny;class td{constructor(t){this.manager=t!==void 0?t:ry,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class sy extends td{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Fu.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=no("img");function l(){h(),Fu.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),n&&n(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class oy extends td{constructor(t){super(t)}load(t,e,i,n){const r=new li,o=new sy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}}class ay extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ol=new ge,Nu=new I,Uu=new I;class ly{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fc,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nu),Uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uu),e.updateMatrixWorld(),Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class cy extends ly{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hy extends ay{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DefaultUp),this.updateMatrix(),this.target=new Be,this.shadow=new cy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bu(){return(typeof performance>"u"?Date:performance).now()}class fy{constructor(t,e,i=0,n=1/0){this.ray=new Oc(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return lc(t,this,i,e),i.sort(ku),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)lc(t[n],this,i,e);return i.sort(ku),i}}function ku(s,t){return s.distance-t.distance}function lc(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const n=s.children;for(let r=0,o=n.length;r<o;r++)lc(n[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);const wa={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class yo{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const dy=new Va(-1,1,1,-1,0,1),Hc=new Hi;Hc.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3));Hc.setAttribute("uv",new ke([0,2,0,0,2,0],2));class ed{constructor(t){this._mesh=new ji(Hc,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,dy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Gu extends yo{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ti?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ma.clone(t.uniforms),this.material=new Ti({defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ed(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vu extends yo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class py extends yo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class my{constructor(t,e){if(this.renderer=t,e===void 0){const i=t.getSize(new yt);this._pixelRatio=t.getPixelRatio(),this._width=i.width,this._height=i.height,e=new Ki(this._width*this._pixelRatio,this._height*this._pixelRatio),e.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],wa===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Gu===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Gu(wa),this.clock=new uy}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vu!==void 0&&(o instanceof Vu?i=!0:o instanceof py&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Va(-1,1,1,-1,0,1);const id=new Hi;id.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3));id.setAttribute("uv",new ke([0,2,0,0,2,0],2));class gy extends yo{constructor(t,e,i,n,r){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Qt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(t.getClearColor(this._oldClearColor),r=t.getClearAlpha(),t.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor&&t.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),t.autoClear=n}}const Hu={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class gs extends yo{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new yt(t.x,t.y):new yt(256,256),this.clearColor=new Qt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ki(r,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Ki(r,o);f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new Ki(r,o);m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}Hu===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const a=Hu;this.highPassUniforms=Ma.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ti({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.texSize.value=new yt(r,o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,wa===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const h=wa;this.copyUniforms=Ma.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Ti({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:jl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Qt,this.oldClearAlpha=1,this.basic=new Ga,this.fsQuad=new ed(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.texSize.value=new yt(i,n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=gs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=gs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){return new Ti({defines:{KERNEL_RADIUS:t,SIGMA:t},uniforms:{colorTexture:{value:null},texSize:{value:new yt(.5,.5)},direction:{value:new yt(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ti({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}gs.BlurDirectionX=new yt(1,0);gs.BlurDirectionY=new yt(0,1);function xn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function nd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_s={duration:.5,overwrite:!1,delay:0},Wc,Xe,de,Ni=1e8,ie=1/Ni,cc=Math.PI*2,_y=cc/4,xy=0,rd=Math.sqrt,vy=Math.cos,yy=Math.sin,Oe=function(t){return typeof t=="string"},pe=function(t){return typeof t=="function"},Tn=function(t){return typeof t=="number"},Xc=function(t){return typeof t>"u"},hn=function(t){return typeof t=="object"},ci=function(t){return t!==!1},qc=function(){return typeof window<"u"},Jo=function(t){return pe(t)||Oe(t)},sd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qe=Array.isArray,hc=/(?:-?\.?\d|\.)+/gi,od=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ad=/[+-]=-?[.\d]+/,ld=/[^,'"\[\]\s]+/gi,by=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,he,Di,uc,Yc,Ei={},Ta={},cd,hd=function(t){return(Ta=Tr(t,Ei))&&fi},$c=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ca=function(t,e){return!e&&console.warn(t)},ud=function(t,e){return t&&(Ei[t]=e)&&Ta&&(Ta[t]=e)||Ei},ao=function(){return 0},Sy={suppressEvents:!0,isStart:!0,kill:!1},fa={suppressEvents:!0,kill:!1},My={suppressEvents:!0},Zc={},Hn=[],fc={},fd,bi={},Nl={},Wu=30,da=[],Jc="",jc=function(t){var e=t[0],i,n;if(hn(e)||pe(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=da.length;n--&&!da[n].targetTest(e););i=da[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new Fd(t[n],i)))||t.splice(n,1);return t},mr=function(t){return t._gsap||jc(Ui(t))[0]._gsap},dd=function(t,e,i){return(i=t[e])&&pe(i)?t[e]():Xc(i)&&t.getAttribute&&t.getAttribute(e)||i},hi=function(t,e){return(t=t.split(",")).forEach(e)||t},me=function(t){return Math.round(t*1e5)/1e5||0},Ne=function(t){return Math.round(t*1e7)/1e7||0},os=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},wy=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},Ea=function(){var t=Hn.length,e=Hn.slice(0),i,n;for(fc={},Hn.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},pd=function(t,e,i,n){Hn.length&&!Xe&&Ea(),t.render(e,i,n||Xe&&e<0&&(t._initted||t._startAt)),Hn.length&&!Xe&&Ea()},md=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ld).length<2?e:Oe(t)?t.trim():t},gd=function(t){return t},Vi=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Ty=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},Tr=function(t,e){for(var i in e)t[i]=e[i];return t},Xu=function s(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=hn(e[i])?s(t[i]||(t[i]={}),e[i]):e[i]);return t},Aa=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},Ws=function(t){var e=t.parent||he,i=t.keyframes?Ty(qe(t.keyframes)):Vi;if(ci(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Cy=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},_d=function(t,e,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},Xa=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=e._prev,o=e._next;r?r._next=o:t[i]===e&&(t[i]=o),o?o._prev=r:t[n]===e&&(t[n]=r),e._next=e._prev=e.parent=null},qn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},gr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Ey=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},dc=function(t,e,i,n){return t._startAt&&(Xe?t._startAt.revert(fa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},Ay=function s(t){return!t||t._ts&&s(t.parent)},qu=function(t){return t._repeat?xs(t._tTime,t=t.duration()+t._rDelay)*t:0},xs=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},Pa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},qa=function(t){return t._end=Ne(t._start+(t._tDur/Math.abs(t._ts||t._rts||ie)||0))},Ya=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Ne(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),qa(t),i._dirty||gr(i,t)),t},xd=function(t,e){var i;if((e._time||e._initted&&!e._dur)&&(i=Pa(t.rawTime(),e),(!e._dur||bo(0,e.totalDuration(),i)-e._tTime>ie)&&e.render(i,!0)),gr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-ie}},sn=function(t,e,i,n){return e.parent&&qn(e),e._start=Ne((Tn(i)?i:i||t!==he?Li(t,i,e):t._time)+e._delay),e._end=Ne(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),_d(t,e,"_first","_last",t._sort?"_start":0),pc(e)||(t._recent=e),n||xd(t,e),t._ts<0&&Ya(t,t._tTime),t},vd=function(t,e){return(Ei.ScrollTrigger||$c("scrollTrigger",e))&&Ei.ScrollTrigger.create(e,t)},yd=function(t,e,i,n,r){if(Qc(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!Xe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&fd!==Si.frame)return Hn.push(t),t._lazy=[r,n],1},Py=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},pc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ly=function(t,e,i,n){var r=t.ratio,o=e<0||!e&&(!t._start&&Py(t)&&!(!t._initted&&pc(t))||(t._ts<0||t._dp._ts<0)&&!pc(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=bo(0,t._tDur,e),h=xs(l,a),t._yoyo&&h&1&&(o=1-o),h!==xs(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Xe||n||t._zTime===ie||!e&&t._zTime){if(!t._initted&&yd(t,e,n,i,l))return;for(u=t._zTime,t._zTime=e||(i?ie:0),i||(i=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&dc(t,e,i,!0),t._onUpdate&&!i&&Bi(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Bi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&qn(t,1),!i&&!Xe&&(Bi(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Dy=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},vs=function(t,e,i,n){var r=t._repeat,o=Ne(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ne(o*(r+1)+t._rDelay*r):o,a>0&&!n&&Ya(t,t._tTime=t._tDur*a),t.parent&&qa(t),i||gr(t.parent,t),t},Yu=function(t){return t instanceof ii?gr(t):vs(t,t._dur)},Ry={_start:0,endTime:ao,totalDuration:ao},Li=function s(t,e,i){var n=t.labels,r=t._recent||Ry,o=t.duration()>=Ni?r.endTime(!1):t._dur,a,l,c;return Oe(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:i).totalDuration()/100:1)):a<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(qe(i)?i[0]:i).totalDuration()),a>1?s(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},Xs=function(t,e,i){var n=Tn(e[1]),r=(n?2:1)+(t<2?0:1),o=e[r],a,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ci(l.vars.inherit)&&l.parent;o.immediateRender=ci(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new ye(e[0],o,e[r+1])},Zn=function(t,e){return t||t===0?e(t):e},bo=function(t,e,i){return i<t?t:i>e?e:i},We=function(t,e){return!Oe(t)||!(e=by.exec(t))?"":e[1]},Iy=function(t,e,i){return Zn(i,function(n){return bo(t,e,n)})},mc=[].slice,bd=function(t,e){return t&&hn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&hn(t[0]))&&!t.nodeType&&t!==Di},zy=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var r;return Oe(n)&&!e||bd(n,1)?(r=i).push.apply(r,Ui(n)):i.push(n)})||i},Ui=function(t,e,i){return de&&!e&&de.selector?de.selector(t):Oe(t)&&!i&&(uc||!ys())?mc.call((e||Yc).querySelectorAll(t),0):qe(t)?zy(t,i):bd(t)?mc.call(t,0):t?[t]:[]},gc=function(t){return t=Ui(t)[0]||Ca("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Ui(e,i.querySelectorAll?i:i===t?Ca("Invalid scope")||Yc.createElement("div"):t)}},Sd=function(t){return t.sort(function(){return .5-Math.random()})},Md=function(t){if(pe(t))return t;var e=hn(t)?t:{each:t},i=_r(e.ease),n=e.from||0,r=parseFloat(e.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=e.axis,h=n,u=n;return Oe(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],u=n[1]),function(f,m,g){var p=(g||e).length,d=o[p],_,S,y,v,b,P,E,x,M;if(!d){if(M=e.grid==="auto"?0:(e.grid||[1,Ni])[1],!M){for(E=-Ni;E<(E=g[M++].getBoundingClientRect().left)&&M<p;);M--}for(d=o[p]=[],_=l?Math.min(M,p)*h-.5:n%M,S=M===Ni?0:l?p*u/M-.5:n/M|0,E=0,x=Ni,P=0;P<p;P++)y=P%M-_,v=S-(P/M|0),d[P]=b=c?Math.abs(c==="y"?v:y):rd(y*y+v*v),b>E&&(E=b),b<x&&(x=b);n==="random"&&Sd(d),d.max=E-x,d.min=x,d.v=p=(parseFloat(e.amount)||parseFloat(e.each)*(M>p?p-1:c?c==="y"?p/M:M:Math.max(M,p/M))||0)*(n==="edges"?-1:1),d.b=p<0?r-p:r,d.u=We(e.amount||e.each)||0,i=i&&p<0?Id(i):i}return p=(d[f]-d.min)/d.max||0,Ne(d.b+(i?i(p):p)*d.v)+d.u}},_c=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=Ne(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(Tn(i)?0:We(i))}},wd=function(t,e){var i=qe(t),n,r;return!i&&hn(t)&&(n=i=t.radius||Ni,t.values?(t=Ui(t.values),(r=!Tn(t[0]))&&(n*=n)):t=_c(t.increment)),Zn(e,i?pe(t)?function(o){return r=t(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Ni,h=0,u=t.length,f,m;u--;)r?(f=t[u].x-a,m=t[u].y-l,f=f*f+m*m):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!n||c<=n?t[h]:o,r||h===o||Tn(o)?h:h+We(o)}:_c(t))},Td=function(t,e,i,n){return Zn(qe(t)?!e:i===!0?!!(i=0):!n,function(){return qe(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},Oy=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(r,o){return o(r)},n)}},Fy=function(t,e){return function(i){return t(parseFloat(i))+(e||We(i))}},Ny=function(t,e,i){return Ed(t,e,0,1,i)},Cd=function(t,e,i){return Zn(i,function(n){return t[~~e(n)]})},Uy=function s(t,e,i){var n=e-t;return qe(t)?Cd(t,s(0,t.length),e):Zn(i,function(r){return(n+(r-t)%n)%n+t})},By=function s(t,e,i){var n=e-t,r=n*2;return qe(t)?Cd(t,s(0,t.length-1),e):Zn(i,function(o){return o=(r+(o-t)%r)%r||0,t+(o>n?r-o:o)})},lo=function(t){for(var e=0,i="",n,r,o,a;~(n=t.indexOf("random(",e));)o=t.indexOf(")",n),a=t.charAt(n+7)==="[",r=t.substr(n+7,o-n-7).match(a?ld:hc),i+=t.substr(e,n-e)+Td(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return i+t.substr(e,t.length-e)},Ed=function(t,e,i,n,r){var o=e-t,a=n-i;return Zn(r,function(l){return i+((l-t)/o*a||0)})},ky=function s(t,e,i,n){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var o=Oe(t),a={},l,c,h,u,f;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if(qe(t)&&!qe(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(g){g*=u;var p=Math.min(f,~~g);return h[p](g-p)},i=e}else n||(t=Tr(qe(t)?[]:{},t));if(!h){for(l in e)Kc.call(a,t,l,"get",e[l]);r=function(g){return ih(g,a)||(o?t.p:t)}}}return Zn(i,r)},$u=function(t,e,i){var n=t.labels,r=Ni,o,a,l;for(o in n)a=n[o]-e,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Bi=function(t,e,i){var n=t.vars,r=n[e],o=de,a=t._ctx,l,c,h;if(r)return l=n[e+"Params"],c=n.callbackScope||t,i&&Hn.length&&Ea(),a&&(de=a),h=l?r.apply(c,l):r.call(c),de=o,h},Fs=function(t){return qn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Xe),t.progress()<1&&Bi(t,"onInterrupt"),t},es,Ad=[],Pd=function(t){if(qc()&&t){t=!t.name&&t.default||t;var e=t.name,i=pe(t),n=e&&!i&&t.init?function(){this._props=[]}:t,r={init:ao,render:ih,add:Kc,kill:ib,modifier:eb,rawVars:0},o={targetTest:0,get:0,getSetter:eh,aliases:{},register:0};if(ys(),t!==n){if(bi[e])return;Vi(n,Vi(Aa(t,r),o)),Tr(n.prototype,Tr(r,Aa(t,o))),bi[n.prop=e]=n,t.targetTest&&(da.push(n),Zc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}ud(e,n),t.register&&t.register(fi,n,ui)}else t&&Ad.push(t)},ee=255,Ns={aqua:[0,ee,ee],lime:[0,ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ee],navy:[0,0,128],white:[ee,ee,ee],olive:[128,128,0],yellow:[ee,ee,0],orange:[ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ee,0,0],pink:[ee,192,203],cyan:[0,ee,ee],transparent:[ee,ee,ee,0]},Ul=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*ee+.5|0},Ld=function(t,e,i){var n=t?Tn(t)?[t>>16,t>>8&ee,t&ee]:0:Ns.black,r,o,a,l,c,h,u,f,m,g;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ns[t])n=Ns[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&ee,n&ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&ee,t&ee]}else if(t.substr(0,3)==="hsl"){if(n=g=t.match(hc),!e)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,n.length>3&&(n[3]*=1),n[0]=Ul(l+1/3,r,o),n[1]=Ul(l,r,o),n[2]=Ul(l-1/3,r,o);else if(~t.indexOf("="))return n=t.match(od),i&&n.length<4&&(n[3]=1),n}else n=t.match(hc)||Ns.transparent;n=n.map(Number)}return e&&!g&&(r=n[0]/ee,o=n[1]/ee,a=n[2]/ee,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?l=c=0:(m=u-f,c=h>.5?m/(2-u-f):m/(u+f),l=u===r?(o-a)/m+(o<a?6:0):u===o?(a-r)/m+2:(r-o)/m+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},Dd=function(t){var e=[],i=[],n=-1;return t.split(Wn).forEach(function(r){var o=r.match(ts)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},Zu=function(t,e,i){var n="",r=(t+n).match(Wn),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(f){return(f=Ld(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=Dd(t),l=i.c,l.join(n)!==h.c.join(n)))for(c=t.replace(Wn,"1").split(ts),u=c.length-1;a<u;a++)n+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=t.split(Wn),u=c.length-1;a<u;a++)n+=c[a]+r[a];return n+c[u]},Wn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ns)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Gy=/hsl[a]?\(/,Rd=function(t){var e=t.join(" "),i;if(Wn.lastIndex=0,Wn.test(e))return i=Gy.test(e),t[1]=Zu(t[1],i),t[0]=Zu(t[0],i,Dd(t[1])),!0},co,Si=function(){var s=Date.now,t=500,e=33,i=s(),n=i,r=1e3/240,o=r,a=[],l,c,h,u,f,m,g=function p(d){var _=s()-n,S=d===!0,y,v,b,P;if(_>t&&(i+=_-e),n+=_,b=n-i,y=b-o,(y>0||S)&&(P=++u.frame,f=b-u.time*1e3,u.time=b=b/1e3,o+=y+(y>=r?4:r-y),v=1),S||(l=c(p)),v)for(m=0;m<a.length;m++)a[m](b,f,P,d)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(d){return f/(1e3/(d||60))},wake:function(){cd&&(!uc&&qc()&&(Di=uc=window,Yc=Di.document||{},Ei.gsap=fi,(Di.gsapVersions||(Di.gsapVersions=[])).push(fi.version),hd(Ta||Di.GreenSockGlobals||!Di.gsap&&Di||{}),h=Di.requestAnimationFrame,Ad.forEach(Pd)),l&&u.sleep(),c=h||function(d){return setTimeout(d,o-u.time*1e3+1|0)},co=1,g(2))},sleep:function(){(h?Di.cancelAnimationFrame:clearTimeout)(l),co=0,c=ao},lagSmoothing:function(d,_){t=d||1/0,e=Math.min(_||33,t)},fps:function(d){r=1e3/(d||240),o=u.time*1e3+r},add:function(d,_,S){var y=_?function(v,b,P,E){d(v,b,P,E),u.remove(y)}:d;return u.remove(d),a[S?"unshift":"push"](y),ys(),y},remove:function(d,_){~(_=a.indexOf(d))&&a.splice(_,1)&&m>=_&&m--},_listeners:a},u}(),ys=function(){return!co&&Si.wake()},Zt={},Vy=/^[\d.\-M][\d.\-,\s]/,Hy=/["']/g,Wy=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],r=1,o=i.length,a,l,c;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[n]=isNaN(c)?c.replace(Hy,"").trim():+c,n=l.substr(a+1).trim();return e},Xy=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},qy=function(t){var e=(t+"").split("("),i=Zt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Wy(e[1])]:Xy(t).split(",").map(md)):Zt._CE&&Vy.test(t)?Zt._CE("",t):i},Id=function(t){return function(e){return 1-t(1-e)}},zd=function s(t,e){for(var i=t._first,n;i;)i instanceof ii?s(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?s(i.timeline,e):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=e)),i=i._next},_r=function(t,e){return t&&(pe(t)?t:Zt[t]||qy(t))||e},Pr=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:n},o;return hi(t,function(a){Zt[a]=Ei[a]=r,Zt[o=a.toLowerCase()]=i;for(var l in r)Zt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Zt[a+"."+l]=r[l]}),r},Od=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Bl=function s(t,e,i){var n=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),o=r/cc*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*yy((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Od(a);return r=cc/r,l.config=function(c,h){return s(t,c,h)},l},kl=function s(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:Od(i);return n.config=function(r){return s(t,r)},n};hi("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Pr(s+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Zt.Linear.easeNone=Zt.none=Zt.Linear.easeIn;Pr("Elastic",Bl("in"),Bl("out"),Bl());(function(s,t){var e=1/t,i=2*e,n=2.5*e,r=function(a){return a<e?s*a*a:a<i?s*Math.pow(a-1.5/t,2)+.75:a<n?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Pr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Pr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Pr("Circ",function(s){return-(rd(1-s*s)-1)});Pr("Sine",function(s){return s===1?1:-vy(s*_y)+1});Pr("Back",kl("in"),kl("out"),kl());Zt.SteppedEase=Zt.steps=Ei.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),r=e?1:0,o=1-ie;return function(a){return((n*bo(0,o,a)|0)+r)*i}}};_s.ease=Zt["quad.out"];hi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Jc+=s+","+s+"Params,"});var Fd=function(t,e){this.id=xy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:dd,this.set=e?e.getSetter:eh},ho=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,vs(this,+e.duration,1,1),this.data=e.data,de&&(this._ctx=de,de.data.push(this)),co||Si.wake()}var t=s.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,vs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(ys(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ya(this,i),!r._dp||r.parent||xd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&sn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===ie||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),pd(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+qu(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+qu(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?xs(this._tTime,r)+1:1},t.timeScale=function(i){if(!arguments.length)return this._rts===-ie?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?Pa(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ie?0:this._rts,this.totalTime(bo(-Math.abs(this._delay),this._tDur,n),!0),qa(this),Ey(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ie&&(this._tTime-=ie)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&sn(n,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(ci(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pa(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=My);var n=Xe;return Xe=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Xe=n,this},t.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(n._ts||1),n=n._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Yu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Yu(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(Li(this,i),ci(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,ci(n))},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ie:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ie,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-ie)},t.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this;return new Promise(function(r){var o=pe(i)?i:gd,a=function(){var c=n.then;n.then=null,pe(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=c),r(o),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},t.kill=function(){Fs(this)},s}();Vi(ho.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ie,_prom:0,_ps:!1,_rts:1});var ii=function(s){nd(t,s);function t(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=ci(i.sortChildren),he&&sn(i.parent||he,xn(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&vd(xn(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(n,r,o){return Xs(0,arguments,this),this},e.from=function(n,r,o){return Xs(1,arguments,this),this},e.fromTo=function(n,r,o,a){return Xs(2,arguments,this),this},e.set=function(n,r,o){return r.duration=0,r.parent=this,Ws(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ye(n,r,Li(this,o),1),this},e.call=function(n,r,o){return sn(this,ye.delayedCall(0,n,r),o)},e.staggerTo=function(n,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ye(n,o,Li(this,l)),this},e.staggerFrom=function(n,r,o,a,l,c,h){return o.runBackwards=1,Ws(o).immediateRender=ci(o.immediateRender),this.staggerTo(n,r,o,a,l,c,h)},e.staggerFromTo=function(n,r,o,a,l,c,h,u){return a.startAt=o,Ws(a).immediateRender=ci(a.immediateRender),this.staggerTo(n,r,a,l,c,h,u)},e.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:Ne(n),u=this._zTime<0!=n<0&&(this._initted||!c),f,m,g,p,d,_,S,y,v,b,P,E;if(this!==he&&h>l&&n>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),f=h,v=this._start,y=this._ts,_=!y,u&&(c||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(P=this._yoyo,d=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(d*100+n,r,o);if(f=Ne(h%d),h===l?(p=this._repeat,f=c):(p=~~(h/d),p&&p===h/d&&(f=c,p--),f>c&&(f=c)),b=xs(this._tTime,d),!a&&this._tTime&&b!==p&&this._tTime-b*d-this._dur<=0&&(b=p),P&&p&1&&(f=c-f,E=1),p!==b&&!this._lock){var x=P&&b&1,M=x===(P&&p&1);if(p<b&&(x=!x),a=x?0:c,this._lock=1,this.render(a||(E?0:Ne(p*d)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Bi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;zd(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Dy(this,Ne(a),Ne(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&f&&!r&&!p&&(Bi(this,"onStart"),this._tTime!==h))return this;if(f>=a&&n>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(n,r,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,o),f!==this._time||!this._ts&&!_){S=0,g&&(h+=this._zTime=-ie);break}}m=g}else{m=this._last;for(var D=n<0?n:f;m;){if(g=m._prev,(m._act||D<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(n,r,o);if(m.render(m._ts>0?(D-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(D-m._start)*m._ts,r,o||Xe&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!_){S=0,g&&(h+=this._zTime=D?-ie:ie);break}}m=g}}if(S&&!r&&(this.pause(),S.render(f>=a?0:-ie)._zTime=f>=a?1:-1,this._ts))return this._start=v,qa(this),this.render(n,r,o);this._onUpdate&&!r&&Bi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&qn(this,1),!r&&!(n<0&&!a)&&(h||a||!l)&&(Bi(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,r){var o=this;if(Tn(r)||(r=Li(this,r,n)),!(n instanceof ho)){if(qe(n))return n.forEach(function(a){return o.add(a,r)}),this;if(Oe(n))return this.addLabel(n,r);if(pe(n))n=ye.delayedCall(0,n);else return this}return this!==n?sn(this,n,r):this},e.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ye?r&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},e.remove=function(n){return Oe(n)?this.removeLabel(n):pe(n)?this.killTweensOf(n):(Xa(this,n),n===this._recent&&(this._recent=this._last),gr(this))},e.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ne(Si.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},e.addLabel=function(n,r){return this.labels[n]=Li(this,r),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,r,o){var a=ye.delayedCall(0,r||ao,o);return a.data="isPause",this._hasPause=1,sn(this,a,Li(this,n))},e.removePause=function(n){var r=this._first;for(n=Li(this,n);r;)r._start===n&&r.data==="isPause"&&qn(r),r=r._next},e.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Nn!==a[l]&&a[l].kill(n,r);return this},e.getTweensOf=function(n,r){for(var o=[],a=Ui(n),l=this._first,c=Tn(r),h;l;)l instanceof ye?wy(l._targets,a)&&(c?(!Nn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(n,r){r=r||{};var o=this,a=Li(o,n),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,m,g=ye.to(o,Vi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ie,onStart:function(){if(o.pause(),!m){var d=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==d&&vs(g,d,0,1).render(g._time,!0,!0),m=1}h&&h.apply(g,u||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(n,r,o){return this.tweenTo(r,Vi({startAt:{time:Li(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),$u(this,Li(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),$u(this,Li(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+ie)},e.shiftChildren=function(n,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=n);return gr(this)},e.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),gr(this)},e.totalDuration=function(n){var r=0,o=this,a=o._last,l=Ni,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,sn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;vs(o,o===he&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(he._ts&&(pd(he,Pa(n,he)),fd=Si.frame),Si.frame>=Wu){Wu+=Ci.autoSleep||120;var r=he._first;if((!r||!r._ts)&&Ci.autoSleep&&Si._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Si.sleep()}}},t}(ho);Vi(ii.prototype,{_lock:0,_hasPause:0,_forcing:0});var Yy=function(t,e,i,n,r,o,a){var l=new ui(this._pt,t,e,0,1,Vd,null,r),c=0,h=0,u,f,m,g,p,d,_,S;for(l.b=i,l.e=n,i+="",n+="",(_=~n.indexOf("random("))&&(n=lo(n)),o&&(S=[i,n],o(S,t,e),i=S[0],n=S[1]),f=i.match(Fl)||[];u=Fl.exec(n);)g=u[0],p=n.substring(c,u.index),m?m=(m+1)%5:p.substr(-5)==="rgba("&&(m=1),g!==f[h++]&&(d=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:p||h===1?p:",",s:d,c:g.charAt(1)==="="?os(d,g)-d:parseFloat(g)-d,m:m&&m<4?Math.round:0},c=Fl.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(ad.test(n)||_)&&(l.e=0),this._pt=l,l},Kc=function(t,e,i,n,r,o,a,l,c,h){pe(n)&&(n=n(r||0,t,o));var u=t[e],f=i!=="get"?i:pe(u)?c?t[e.indexOf("set")||!pe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,m=pe(u)?c?Ky:kd:th,g;if(Oe(n)&&(~n.indexOf("random(")&&(n=lo(n)),n.charAt(1)==="="&&(g=os(f,n)+(We(f)||0),(g||g===0)&&(n=g))),!h||f!==n||xc)return!isNaN(f*n)&&n!==""?(g=new ui(this._pt,t,e,+f||0,n-(f||0),typeof u=="boolean"?tb:Gd,0,m),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&$c(e,n),Yy.call(this,t,e,f,n,m,l||Ci.stringFilter,c))},$y=function(t,e,i,n,r){if(pe(t)&&(t=qs(t,r,e,i,n)),!hn(t)||t.style&&t.nodeType||qe(t)||sd(t))return Oe(t)?qs(t,r,e,i,n):t;var o={},a;for(a in t)o[a]=qs(t[a],r,e,i,n);return o},Nd=function(t,e,i,n,r,o){var a,l,c,h;if(bi[t]&&(a=new bi[t]).init(r,a.rawVars?e[t]:$y(e[t],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new ui(i._pt,r,t,0,1,a.render,a,0,a.priority),i!==es))for(c=i._ptLookup[i._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Nn,xc,Qc=function s(t,e,i){var n=t.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.onUpdateParams,u=n.callbackScope,f=n.runBackwards,m=n.yoyoEase,g=n.keyframes,p=n.autoRevert,d=t._dur,_=t._startAt,S=t._targets,y=t.parent,v=y&&y.data==="nested"?y.vars.targets:S,b=t._overwrite==="auto"&&!Wc,P=t.timeline,E,x,M,D,U,it,N,R,F,Z,C,k,tt;if(P&&(!g||!r)&&(r="none"),t._ease=_r(r,_s.ease),t._yEase=m?Id(_r(m===!0?r:m,_s.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!P&&!!n.runBackwards,!P||g&&!n.stagger){if(R=S[0]?mr(S[0]).harness:0,k=R&&n[R.prop],E=Aa(n,Zc),_&&(_._zTime<0&&_.progress(1),e<0&&f&&a&&!p?_.render(-1,!0):_.revert(f&&d?fa:Sy),_._lazy=0),o){if(qn(t._startAt=ye.set(S,Vi({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!_&&ci(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:u,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Xe||!a&&!p)&&t._startAt.revert(fa),a&&d&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(f&&d&&!_){if(e&&(a=!1),M=Vi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ci(l),immediateRender:a,stagger:0,parent:y},E),k&&(M[R.prop]=k),qn(t._startAt=ye.set(S,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Xe?t._startAt.revert(fa):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,ie,ie);else if(!e)return}for(t._pt=t._ptCache=0,l=d&&ci(l)||l&&!d,x=0;x<S.length;x++){if(U=S[x],N=U._gsap||jc(S)[x]._gsap,t._ptLookup[x]=Z={},fc[N.id]&&Hn.length&&Ea(),C=v===S?x:v.indexOf(U),R&&(F=new R).init(U,k||E,t,C,v)!==!1&&(t._pt=D=new ui(t._pt,U,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(nt){Z[nt]=D}),F.priority&&(it=1)),!R||k)for(M in E)bi[M]&&(F=Nd(M,E,t,C,U,v))?F.priority&&(it=1):Z[M]=D=Kc.call(t,U,M,"get",E[M],C,v,0,n.stringFilter);t._op&&t._op[x]&&t.kill(U,t._op[x]),b&&t._pt&&(Nn=t,he.killTweensOf(U,Z,t.globalTime(e)),tt=!t.parent,Nn=0),t._pt&&l&&(fc[N.id]=1)}it&&Hd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!tt,g&&e<=0&&P.render(Ni,!0,!0)},Zy=function(t,e,i,n,r,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,u,f;if(!l)for(l=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(c=u[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return xc=1,t.vars[e]="+=0",Qc(t,a),xc=0,1;l.push(c)}for(f=l.length;f--;)h=l[f],c=h._pt||h,c.s=(n||n===0)&&!r?n:c.s+(n||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=me(i)+We(h.e)),h.b&&(h.b=c.s+We(h.b))},Jy=function(t,e){var i=t[0]?mr(t[0]).harness:0,n=i&&i.aliases,r,o,a,l;if(!n)return e;r=Tr({},e);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},jy=function(t,e,i,n){var r=e.ease||n||"power1.inOut",o,a;if(qe(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},qs=function(t,e,i,n,r){return pe(t)?t.call(e,i,n,r):Oe(t)&&~t.indexOf("random(")?lo(t):t},Ud=Jc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Bd={};hi(Ud+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Bd[s]=1});var ye=function(s){nd(t,s);function t(i,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=s.call(this,o?n:Ws(n))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,p=l.defaults,d=l.scrollTrigger,_=l.yoyoEase,S=n.parent||he,y=(qe(i)||sd(i)?Tn(i[0]):"length"in n)?[i]:Ui(i),v,b,P,E,x,M,D,U;if(a._targets=y.length?jc(y):Ca("GSAP target "+i+" not found. https://greensock.com",!Ci.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||f||Jo(c)||Jo(h)){if(n=a.vars,v=a.timeline=new ii({data:"nested",defaults:p||{},targets:S&&S.data==="nested"?S.vars.targets:y}),v.kill(),v.parent=v._dp=xn(a),v._start=0,f||Jo(c)||Jo(h)){if(E=y.length,D=f&&Md(f),hn(f))for(x in f)~Ud.indexOf(x)&&(U||(U={}),U[x]=f[x]);for(b=0;b<E;b++)P=Aa(n,Bd),P.stagger=0,_&&(P.yoyoEase=_),U&&Tr(P,U),M=y[b],P.duration=+qs(c,xn(a),b,M,y),P.delay=(+qs(h,xn(a),b,M,y)||0)-a._delay,!f&&E===1&&P.delay&&(a._delay=h=P.delay,a._start+=h,P.delay=0),v.to(M,P,D?D(b,M,y):0),v._ease=Zt.none;v.duration()?c=h=0:a.timeline=0}else if(g){Ws(Vi(v.vars.defaults,{ease:"none"})),v._ease=_r(g.ease||n.ease||"none");var it=0,N,R,F;if(qe(g))g.forEach(function(Z){return v.to(y,Z,">")}),v.duration();else{P={};for(x in g)x==="ease"||x==="easeEach"||jy(x,g[x],P,g.easeEach);for(x in P)for(N=P[x].sort(function(Z,C){return Z.t-C.t}),it=0,b=0;b<N.length;b++)R=N[b],F={ease:R.e,duration:(R.t-(b?N[b-1].t:0))/100*c},F[x]=R.v,v.to(y,F,it),it+=F.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return m===!0&&!Wc&&(Nn=xn(a),he.killTweensOf(y),Nn=0),sn(S,xn(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(u||!c&&!g&&a._start===Ne(S._time)&&ci(u)&&Ay(xn(a))&&S.data!=="nested")&&(a._tTime=-ie,a.render(Math.max(0,-h)||0)),d&&vd(xn(a),d),a}var e=t.prototype;return e.render=function(n,r,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-ie&&!h?l:n<ie?0:n,f,m,g,p,d,_,S,y,v;if(!c)Ly(this,n,r,o);else if(u!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,y=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+n,r,o);if(f=Ne(u%p),u===l?(g=this._repeat,f=c):(g=~~(u/p),g&&g===u/p&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(v=this._yEase,f=c-f),d=xs(this._tTime,p),f===a&&!o&&this._initted)return this._tTime=u,this;g!==d&&(y&&this._yEase&&zd(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(Ne(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(yd(this,h?n:f,o,r,u))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(n,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!a&&!r&&!g&&(Bi(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;y&&y.render(n<0?n:!f&&_?-ie:y._dur*y._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&dc(this,n,r,o),Bi(this,"onUpdate")),this._repeat&&g!==d&&this.vars.onRepeat&&!r&&this.parent&&Bi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&dc(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&qn(this,1),!r&&!(h&&!a)&&(u||a||_)&&(Bi(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},e.resetTo=function(n,r,o,a){co||Si.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Qc(this,l),c=this._ease(l/this._dur),Zy(this,n,r,o,a,c,l)?this.resetTo(n,r,o,a):(Ya(this,0),this.parent||_d(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Fs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Nn&&Nn.vars.overwrite!==!0)._first||Fs(this),this.parent&&o!==this.timeline.totalDuration()&&vs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Ui(n):a,c=this._ptLookup,h=this._pt,u,f,m,g,p,d,_;if((!r||r==="all")&&Cy(a,l))return r==="all"&&(this._pt=0),Fs(this);for(u=this._op=this._op||[],r!=="all"&&(Oe(r)&&(p={},hi(r,function(S){return p[S]=1}),r=p),r=Jy(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],r==="all"?(u[_]=r,g=f,m={}):(m=u[_]=u[_]||{},g=r);for(p in g)d=f&&f[p],d&&((!("kill"in d.d)||d.d.kill(p)===!0)&&Xa(this,d,"_pt"),delete f[p]),m!=="all"&&(m[p]=1)}return this._initted&&!this._pt&&h&&Fs(this),this},t.to=function(n,r){return new t(n,r,arguments[2])},t.from=function(n,r){return Xs(1,arguments)},t.delayedCall=function(n,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,r,o){return Xs(2,arguments)},t.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(n,r)},t.killTweensOf=function(n,r,o){return he.killTweensOf(n,r,o)},t}(ho);Vi(ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hi("staggerTo,staggerFrom,staggerFromTo",function(s){ye[s]=function(){var t=new ii,e=mc.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var th=function(t,e,i){return t[e]=i},kd=function(t,e,i){return t[e](i)},Ky=function(t,e,i,n){return t[e](n.fp,i)},Qy=function(t,e,i){return t.setAttribute(e,i)},eh=function(t,e){return pe(t[e])?kd:Xc(t[e])&&t.setAttribute?Qy:th},Gd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},tb=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Vd=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},ih=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},eb=function(t,e,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(t,e,i),r=o},ib=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?Xa(this,e,"_pt"):e.dep||(i=1),e=n;return!i},nb=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},Hd=function(t){for(var e=t._pt,i,n,r,o;e;){for(i=e._next,n=r;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:r=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=r},ui=function(){function s(e,i,n,r,o,a,l,c,h){this.t=i,this.s=r,this.c=o,this.p=n,this.r=a||Gd,this.d=l||this,this.set=c||th,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=nb,this.m=i,this.mt=r,this.tween=n},s}();hi(Jc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Zc[s]=1});Ei.TweenMax=Ei.TweenLite=ye;Ei.TimelineLite=Ei.TimelineMax=ii;he=new ii({sortChildren:!1,defaults:_s,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ci.stringFilter=Rd;var xr=[],pa={},rb=[],Ju=0,sb=0,Gl=function(t){return(pa[t]||rb).map(function(e){return e()})},vc=function(){var t=Date.now(),e=[];t-Ju>2&&(Gl("matchMediaInit"),xr.forEach(function(i){var n=i.queries,r=i.conditions,o,a,l,c;for(a in n)o=Di.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),Gl("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i)}),Ju=t,Gl("matchMedia"))},Wd=function(){function s(e,i){this.selector=i&&gc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=sb++,e&&this.add(e)}var t=s.prototype;return t.add=function(i,n,r){pe(i)&&(r=n,n=i,i=pe);var o=this,a=function(){var c=de,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=gc(r)),de=o,u=n.apply(o,arguments),pe(u)&&o._r.push(u),de=c,o.selector=h,o.isReverted=!1,u};return o.last=a,i===pe?a(o):i?o[i]=a:a},t.ignore=function(i){var n=de;de=null,i(this),de=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof ye&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var r=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return l instanceof ii?l.data!=="nested"&&l.kill():!(l instanceof ye)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),n)for(var a=xr.length;a--;)xr[a].id===this.id&&xr.splice(a,1)},t.revert=function(i){this.kill(i||{})},s}(),ob=function(){function s(e){this.contexts=[],this.scope=e}var t=s.prototype;return t.add=function(i,n,r){hn(i)||(i={matches:i});var o=new Wd(0,r||this.scope),a=o.conditions={},l,c,h;de&&!o.selector&&(o.selector=de.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=Di.matchMedia(i[c]),l&&(xr.indexOf(o)<0&&xr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(vc):l.addEventListener("change",vc)));return h&&n(o),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s}(),La={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return Pd(n)})},timeline:function(t){return new ii(t)},getTweensOf:function(t,e){return he.getTweensOf(t,e)},getProperty:function(t,e,i,n){Oe(t)&&(t=Ui(t)[0]);var r=mr(t||{}).get,o=i?gd:md;return i==="native"&&(i=""),t&&(e?o((bi[e]&&bi[e].get||r)(t,e,i,n)):function(a,l,c){return o((bi[a]&&bi[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=Ui(t),t.length>1){var n=t.map(function(h){return fi.quickSetter(h,e,i)}),r=n.length;return function(h){for(var u=r;u--;)n[u](h)}}t=t[0]||{};var o=bi[e],a=mr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;es._pt=0,u.init(t,i?h+i:h,es,0,[t]),u.render(1,u),es._pt&&ih(1,es)}:a.set(t,l);return o?c:function(h){return c(t,l,i?h+i:h,a,1)}},quickTo:function(t,e,i){var n,r=fi.to(t,Tr((n={},n[e]="+=0.1",n.paused=!0,n),i||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return he.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=_r(t.ease,_s.ease)),Xu(_s,t||{})},config:function(t){return Xu(Ci,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,r=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!bi[a]&&!Ei[a]&&Ca(e+" effect requires "+a+" plugin.")}),Nl[e]=function(a,l,c){return i(Ui(a),Vi(l||{},r),c)},o&&(ii.prototype[e]=function(a,l,c){return this.add(Nl[e](a,hn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Zt[t]=_r(e)},parseEase:function(t,e){return arguments.length?_r(t,e):Zt},getById:function(t){return he.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new ii(t),n,r;for(i.smoothChildTiming=ci(t.smoothChildTiming),he.remove(i),i._dp=0,i._time=i._tTime=he._time,n=he._first;n;)r=n._next,(e||!(!n._dur&&n instanceof ye&&n.vars.onComplete===n._targets[0]))&&sn(i,n,n._start-n._delay),n=r;return sn(he,i,0),i},context:function(t,e){return t?new Wd(t,e):de},matchMedia:function(t){return new ob(t)},matchMediaRefresh:function(){return xr.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||vc()},addEventListener:function(t,e){var i=pa[t]||(pa[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=pa[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:Uy,wrapYoyo:By,distribute:Md,random:Td,snap:wd,normalize:Ny,getUnit:We,clamp:Iy,splitColor:Ld,toArray:Ui,selector:gc,mapRange:Ed,pipe:Oy,unitize:Fy,interpolate:ky,shuffle:Sd},install:hd,effects:Nl,ticker:Si,updateRoot:ii.updateRoot,plugins:bi,globalTimeline:he,core:{PropTween:ui,globals:ud,Tween:ye,Timeline:ii,Animation:ho,getCache:mr,_removeLinkedListItem:Xa,reverting:function(){return Xe},context:function(t){return t&&de&&(de.data.push(t),t._ctx=de),de},suppressOverwrites:function(t){return Wc=t}}};hi("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return La[s]=ye[s]});Si.add(ii.updateRoot);es=La.to({},{duration:0});var ab=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},lb=function(t,e){var i=t._targets,n,r,o;for(n in e)for(r=i.length;r--;)o=t._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=ab(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[r],n))},Vl=function(t,e){return{name:t,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,c;if(Oe(r)&&(l={},hi(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}lb(a,r)}}}},fi=La.registerPlugin({name:"attr",init:function(t,e,i,n,r){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Xe?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Vl("roundProps",_c),Vl("modifiers"),Vl("snap",wd))||La;ye.version=ii.version=fi.version="3.12.1";cd=1;qc()&&ys();Zt.Power0;Zt.Power1;Zt.Power2;Zt.Power3;Zt.Power4;Zt.Linear;Zt.Quad;Zt.Cubic;Zt.Quart;Zt.Quint;Zt.Strong;Zt.Elastic;Zt.Back;Zt.SteppedEase;Zt.Bounce;Zt.Sine;Zt.Expo;Zt.Circ;/*!
 * CSSPlugin 3.12.1
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ju,Un,as,nh,ur,Ku,rh,cb=function(){return typeof window<"u"},Cn={},sr=180/Math.PI,ls=Math.PI/180,qr=Math.atan2,Qu=1e8,sh=/([A-Z])/g,hb=/(left|right|width|margin|padding|x)/i,ub=/[\s,\(]\S/,on={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},fb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},db=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},pb=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Xd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},qd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},mb=function(t,e,i){return t.style[e]=i},gb=function(t,e,i){return t.style.setProperty(e,i)},_b=function(t,e,i){return t._gsap[e]=i},xb=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},vb=function(t,e,i,n,r){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},yb=function(t,e,i,n,r){var o=t._gsap;o[e]=i,o.renderTransform(r,o)},fe="transform",Qi=fe+"Origin",bb=function s(t,e){var i=this,n=this.target,r=n.style;if(t in Cn&&r){if(this.tfm=this.tfm||{},t!=="transform")t=on[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=vn(n,o)}):this.tfm[t]=n._gsap.x?n._gsap[t]:vn(n,t);else return on.transform.split(",").forEach(function(o){return s.call(i,o,e)});if(this.props.indexOf(fe)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Qi,e,"")),t=fe}(r||e)&&this.props.push(t,e,r[t])},Yd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Sb=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(sh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=rh(),(!r||!r.isStart)&&!i[fe]&&(Yd(i),n.uncache=1)}},$d=function(t,e){var i={target:t,props:[],revert:Sb,save:bb};return t._gsap||fi.core.getCache(t),e&&e.split(",").forEach(function(n){return i.save(n)}),i},Zd,bc=function(t,e){var i=Un.createElementNS?Un.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Un.createElement(t);return i.style?i:Un.createElement(t)},ln=function s(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(sh,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&s(t,bs(e)||e,1)||""},tf="O,Moz,ms,Ms,Webkit".split(","),bs=function(t,e,i){var n=e||ur,r=n.style,o=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(tf[o]+t in r););return o<0?null:(o===3?"ms":o>=0?tf[o]:"")+t},Sc=function(){cb()&&window.document&&(ju=window,Un=ju.document,as=Un.documentElement,ur=bc("div")||{style:{}},bc("div"),fe=bs(fe),Qi=fe+"Origin",ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zd=!!bs("perspective"),rh=fi.core.reverting,nh=1)},Hl=function s(t){var e=bc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,r=this.style.cssText,o;if(as.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),as.removeChild(e),this.style.cssText=r,o},ef=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Jd=function(t){var e;try{e=t.getBBox()}catch{e=Hl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Hl||(e=Hl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+ef(t,["x","cx","x1"])||0,y:+ef(t,["y","cy","y1"])||0,width:0,height:0}:e},jd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Jd(t))},uo=function(t,e){if(e){var i=t.style;e in Cn&&e!==Qi&&(e=fe),i.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(e.replace(sh,"-$1").toLowerCase())):i.removeAttribute(e)}},Bn=function(t,e,i,n,r,o){var a=new ui(t._pt,e,i,0,1,o?qd:Xd);return t._pt=a,a.b=n,a.e=r,t._props.push(i),a},nf={deg:1,rad:1,turn:1},Mb={grid:1,flex:1},Yn=function s(t,e,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=ur.style,l=hb.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=n==="px",m=n==="%",g,p,d,_;return n===o||!r||nf[n]||nf[o]?r:(o!=="px"&&!f&&(r=s(t,e,i,"px")),_=t.getCTM&&jd(t),(m||o==="%")&&(Cn[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[l?"width":"height"]:t[h],me(m?r/g*u:r/100*g)):(a[l?"width":"height"]=u+(f?o:n),p=~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(p=(t.ownerSVGElement||{}).parentNode),(!p||p===Un||!p.appendChild)&&(p=Un.body),d=p._gsap,d&&m&&d.width&&l&&d.time===Si.time&&!d.uncache?me(r/d.width*u):((m||o==="%")&&!Mb[ln(p,"display")]&&(a.position=ln(t,"position")),p===t&&(a.position="static"),p.appendChild(ur),g=ur[h],p.removeChild(ur),a.position="absolute",l&&m&&(d=mr(p),d.time=Si.time,d.width=p[h]),me(f?g*r/u:g&&r?u/g*r:0))))},vn=function(t,e,i,n){var r;return nh||Sc(),e in on&&e!=="transform"&&(e=on[e],~e.indexOf(",")&&(e=e.split(",")[0])),Cn[e]&&e!=="transform"?(r=po(t,n),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ra(ln(t,Qi))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Da[e]&&Da[e](t,e,i)||ln(t,e)||dd(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Yn(t,e,r,i)+i:r},wb=function(t,e,i,n){if(!i||i==="none"){var r=bs(e,t,1),o=r&&ln(t,r,1);o&&o!==i?(e=r,i=o):e==="borderColor"&&(i=ln(t,"borderTopColor"))}var a=new ui(this._pt,t.style,e,0,1,Vd),l=0,c=0,h,u,f,m,g,p,d,_,S,y,v,b;if(a.b=i,a.e=n,i+="",n+="",n==="auto"&&(t.style[e]=n,n=ln(t,e)||n,t.style[e]=i),h=[i,n],Rd(h),i=h[0],n=h[1],f=i.match(ts)||[],b=n.match(ts)||[],b.length){for(;u=ts.exec(n);)d=u[0],S=n.substring(l,u.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),d!==(p=f[c++]||"")&&(m=parseFloat(p)||0,v=p.substr((m+"").length),d.charAt(1)==="="&&(d=os(m,d)+v),_=parseFloat(d),y=d.substr((_+"").length),l=ts.lastIndex-y.length,y||(y=y||Ci.units[e]||v,l===n.length&&(n+=y,a.e+=y)),v!==y&&(m=Yn(t,e,p,y)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=e==="display"&&n==="none"?qd:Xd;return ad.test(n)&&(a.e=0),this._pt=a,a},rf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Tb=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=rf[i]||i,e[1]=rf[n]||n,e.join(" ")},Cb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,r=e.u,o=i._gsap,a,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Cn[a]&&(l=1,a=a==="transformOrigin"?Qi:fe),uo(i,a);l&&(uo(i,fe),o&&(o.svg&&i.removeAttribute("transform"),po(i,1),o.uncache=1,Yd(n)))}},Da={clearProps:function(t,e,i,n,r){if(r.data!=="isFromStart"){var o=t._pt=new ui(t._pt,e,i,0,0,Cb);return o.u=n,o.pr=-10,o.tween=r,t._props.push(i),1}}},fo=[1,0,0,1,0,0],Kd={},Qd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},sf=function(t){var e=ln(t,fe);return Qd(e)?fo:e.substr(7).match(od).map(me)},oh=function(t,e){var i=t._gsap||mr(t),n=t.style,r=sf(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?fo:r):(r===fo&&!t.offsetParent&&t!==as&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,as.appendChild(t)),r=sf(t),l?n.display=l:uo(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):as.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Mc=function(t,e,i,n,r,o){var a=t._gsap,l=r||oh(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,m=l[0],g=l[1],p=l[2],d=l[3],_=l[4],S=l[5],y=e.split(" "),v=parseFloat(y[0])||0,b=parseFloat(y[1])||0,P,E,x,M;i?l!==fo&&(E=m*d-g*p)&&(x=v*(d/E)+b*(-p/E)+(p*S-d*_)/E,M=v*(-g/E)+b*(m/E)-(m*S-g*_)/E,v=x,b=M):(P=Jd(t),v=P.x+(~y[0].indexOf("%")?v/100*P.width:v),b=P.y+(~(y[1]||y[0]).indexOf("%")?b/100*P.height:b)),n||n!==!1&&a.smooth?(_=v-c,S=b-h,a.xOffset=u+(_*m+S*p)-_,a.yOffset=f+(_*g+S*d)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!n,a.origin=e,a.originIsAbsolute=!!i,t.style[Qi]="0px 0px",o&&(Bn(o,a,"xOrigin",c,v),Bn(o,a,"yOrigin",h,b),Bn(o,a,"xOffset",u,a.xOffset),Bn(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},po=function(t,e){var i=t._gsap||new Fd(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ln(t,Qi)||"0",h,u,f,m,g,p,d,_,S,y,v,b,P,E,x,M,D,U,it,N,R,F,Z,C,k,tt,nt,H,X,Q,K,et;return h=u=f=p=d=_=S=y=v=0,m=g=1,i.svg=!!(t.getCTM&&jd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[fe]!=="none"?l[fe]:"")),n.scale=n.rotate=n.translate="none"),E=oh(t,i.svg),i.svg&&(i.uncache?(k=t.getBBox(),c=i.xOrigin-k.x+"px "+(i.yOrigin-k.y)+"px",C=""):C=!e&&t.getAttribute("data-svg-origin"),Mc(t,C||c,!!C||i.originIsAbsolute,i.smooth!==!1,E)),b=i.xOrigin||0,P=i.yOrigin||0,E!==fo&&(U=E[0],it=E[1],N=E[2],R=E[3],h=F=E[4],u=Z=E[5],E.length===6?(m=Math.sqrt(U*U+it*it),g=Math.sqrt(R*R+N*N),p=U||it?qr(it,U)*sr:0,S=N||R?qr(N,R)*sr+p:0,S&&(g*=Math.abs(Math.cos(S*ls))),i.svg&&(h-=b-(b*U+P*N),u-=P-(b*it+P*R))):(et=E[6],Q=E[7],nt=E[8],H=E[9],X=E[10],K=E[11],h=E[12],u=E[13],f=E[14],x=qr(et,X),d=x*sr,x&&(M=Math.cos(-x),D=Math.sin(-x),C=F*M+nt*D,k=Z*M+H*D,tt=et*M+X*D,nt=F*-D+nt*M,H=Z*-D+H*M,X=et*-D+X*M,K=Q*-D+K*M,F=C,Z=k,et=tt),x=qr(-N,X),_=x*sr,x&&(M=Math.cos(-x),D=Math.sin(-x),C=U*M-nt*D,k=it*M-H*D,tt=N*M-X*D,K=R*D+K*M,U=C,it=k,N=tt),x=qr(it,U),p=x*sr,x&&(M=Math.cos(x),D=Math.sin(x),C=U*M+it*D,k=F*M+Z*D,it=it*M-U*D,Z=Z*M-F*D,U=C,F=k),d&&Math.abs(d)+Math.abs(p)>359.9&&(d=p=0,_=180-_),m=me(Math.sqrt(U*U+it*it+N*N)),g=me(Math.sqrt(Z*Z+et*et)),x=qr(F,Z),S=Math.abs(x)>2e-4?x*sr:0,v=K?1/(K<0?-K:K):0),i.svg&&(C=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Qd(ln(t,fe)),C&&t.setAttribute("transform",C))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(m*=-1,S+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=u-((i.yPercent=u&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=me(m),i.scaleY=me(g),i.rotation=me(p)+a,i.rotationX=me(d)+a,i.rotationY=me(_)+a,i.skewX=S+a,i.skewY=y+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(c.split(" ")[2])||0)&&(n[Qi]=Ra(c)),i.xOffset=i.yOffset=0,i.force3D=Ci.force3D,i.renderTransform=i.svg?Ab:Zd?tp:Eb,i.uncache=0,i},Ra=function(t){return(t=t.split(" "))[0]+" "+t[1]},Wl=function(t,e,i){var n=We(e);return me(parseFloat(e)+parseFloat(Yn(t,"x",i+"px",n)))+n},Eb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tp(t,e)},er="0deg",Ds="0px",ir=") ",tp=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,f=i.skewX,m=i.skewY,g=i.scaleX,p=i.scaleY,d=i.transformPerspective,_=i.force3D,S=i.target,y=i.zOrigin,v="",b=_==="auto"&&t&&t!==1||_===!0;if(y&&(u!==er||h!==er)){var P=parseFloat(h)*ls,E=Math.sin(P),x=Math.cos(P),M;P=parseFloat(u)*ls,M=Math.cos(P),o=Wl(S,o,E*M*-y),a=Wl(S,a,-Math.sin(P)*-y),l=Wl(S,l,x*M*-y+y)}d!==Ds&&(v+="perspective("+d+ir),(n||r)&&(v+="translate("+n+"%, "+r+"%) "),(b||o!==Ds||a!==Ds||l!==Ds)&&(v+=l!==Ds||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ir),c!==er&&(v+="rotate("+c+ir),h!==er&&(v+="rotateY("+h+ir),u!==er&&(v+="rotateX("+u+ir),(f!==er||m!==er)&&(v+="skew("+f+", "+m+ir),(g!==1||p!==1)&&(v+="scale("+g+", "+p+ir),S.style[fe]=v||"translate(0, 0)"},Ab=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,f=i.scaleY,m=i.target,g=i.xOrigin,p=i.yOrigin,d=i.xOffset,_=i.yOffset,S=i.forceCSS,y=parseFloat(o),v=parseFloat(a),b,P,E,x,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ls,c*=ls,b=Math.cos(l)*u,P=Math.sin(l)*u,E=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(h*=ls,M=Math.tan(c-h),M=Math.sqrt(1+M*M),E*=M,x*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),b*=M,P*=M)),b=me(b),P=me(P),E=me(E),x=me(x)):(b=u,x=f,P=E=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=Yn(m,"x",o,"px"),v=Yn(m,"y",a,"px")),(g||p||d||_)&&(y=me(y+g-(g*b+p*E)+d),v=me(v+p-(g*P+p*x)+_)),(n||r)&&(M=m.getBBox(),y=me(y+n/100*M.width),v=me(v+r/100*M.height)),M="matrix("+b+","+P+","+E+","+x+","+y+","+v+")",m.setAttribute("transform",M),S&&(m.style[fe]=M)},Pb=function(t,e,i,n,r){var o=360,a=Oe(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?sr:1),c=l-n,h=n+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Qu)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Qu)%o-~~(c/o)*o)),t._pt=f=new ui(t._pt,e,i,n,c,fb),f.e=h,f.u="deg",t._props.push(i),f},of=function(t,e){for(var i in e)t[i]=e[i];return t},Lb=function(t,e,i){var n=of({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,u,f,m,g;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[fe]=e,a=po(i,1),uo(i,fe),i.setAttribute("transform",c)):(c=getComputedStyle(i)[fe],o[fe]=e,a=po(i,1),o[fe]=c);for(l in Cn)c=n[l],h=a[l],c!==h&&r.indexOf(l)<0&&(m=We(c),g=We(h),u=m!==g?Yn(i,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new ui(t._pt,a,l,u,f-u,yc),t._pt.u=g||0,t._props.push(l));of(a,n)};hi("padding,margin,Width,Radius",function(s,t){var e="Top",i="Right",n="Bottom",r="Left",o=(t<3?[e,i,n,r]:[e+r,e+i,n+i,n+r]).map(function(a){return t<2?s+a:"border"+a+s});Da[t>1?"border"+s:s]=function(a,l,c,h,u){var f,m;if(arguments.length<4)return f=o.map(function(g){return vn(a,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(h+"").split(" "),m={},o.forEach(function(g,p){return m[g]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,m,u)}});var ep={name:"css",register:Sc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,r){var o=this._props,a=t.style,l=i.vars.startAt,c,h,u,f,m,g,p,d,_,S,y,v,b,P,E,x;nh||Sc(),this.styles=this.styles||$d(t),x=this.styles.props,this.tween=i;for(p in e)if(p!=="autoRound"&&(h=e[p],!(bi[p]&&Nd(p,e,i,n,t,r)))){if(m=typeof h,g=Da[p],m==="function"&&(h=h.call(i,n,t,r),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=lo(h)),g)g(this,t,p,h,i)&&(E=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(p)+"").trim(),h+="",Wn.lastIndex=0,Wn.test(c)||(d=We(c),_=We(h)),_?d!==_&&(c=Yn(t,p,c,_)+_):d&&(h+=d),this.add(a,"setProperty",c,h,n,r,0,0,p),o.push(p),x.push(p,0,a[p]);else if(m!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,n,t,r):l[p],Oe(c)&&~c.indexOf("random(")&&(c=lo(c)),We(c+"")||(c+=Ci.units[p]||We(vn(t,p))||""),(c+"").charAt(1)==="="&&(c=vn(t,p))):c=vn(t,p),f=parseFloat(c),S=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),p in on&&(p==="autoAlpha"&&(f===1&&vn(t,"visibility")==="hidden"&&u&&(f=0),x.push("visibility",0,a.visibility),Bn(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),p!=="scale"&&p!=="transform"&&(p=on[p],~p.indexOf(",")&&(p=p.split(",")[0]))),y=p in Cn,y){if(this.styles.save(p),v||(b=t._gsap,b.renderTransform&&!e.parseTransform||po(t,e.parseTransform),P=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new ui(this._pt,a,fe,0,1,b.renderTransform,b,0,-1),v.dep=1),p==="scale")this._pt=new ui(this._pt,b,"scaleY",b.scaleY,(S?os(b.scaleY,S+u):u)-b.scaleY||0,yc),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){x.push(Qi,0,a[Qi]),h=Tb(h),b.svg?Mc(t,h,0,P,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==b.zOrigin&&Bn(this,b,"zOrigin",b.zOrigin,_),Bn(this,a,p,Ra(c),Ra(h)));continue}else if(p==="svgOrigin"){Mc(t,h,1,P,0,this);continue}else if(p in Kd){Pb(this,b,p,f,S?os(f,S+h):h);continue}else if(p==="smoothOrigin"){Bn(this,b,"smooth",b.smooth,h);continue}else if(p==="force3D"){b[p]=h;continue}else if(p==="transform"){Lb(this,h,t);continue}}else p in a||(p=bs(p)||p);if(y||(u||u===0)&&(f||f===0)&&!ub.test(h)&&p in a)d=(c+"").substr((f+"").length),u||(u=0),_=We(h)||(p in Ci.units?Ci.units[p]:d),d!==_&&(f=Yn(t,p,c,_)),this._pt=new ui(this._pt,y?b:a,p,f,(S?os(f,S+u):u)-f,!y&&(_==="px"||p==="zIndex")&&e.autoRound!==!1?pb:yc),this._pt.u=_||0,d!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=db);else if(p in a)wb.call(this,t,p,c,S?S+h:h);else if(p in t)this.add(t,p,c||t[p],S?S+h:h,n,r);else if(p!=="parseTransform"){$c(p,h);continue}y||(p in a?x.push(p,0,a[p]):x.push(p,1,c||t[p])),o.push(p)}}E&&Hd(this)},render:function(t,e){if(e.tween._time||!rh())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:vn,aliases:on,getSetter:function(t,e,i){var n=on[e];return n&&n.indexOf(",")<0&&(e=n),e in Cn&&e!==Qi&&(t._gsap.x||vn(t,"x"))?i&&Ku===i?e==="scale"?xb:_b:(Ku=i||{})&&(e==="scale"?vb:yb):t.style&&!Xc(t.style[e])?mb:~e.indexOf("-")?gb:eh(t,e)},core:{_removeProperty:uo,_getMatrix:oh}};fi.utils.checkPrefix=bs;fi.core.getStyleSaver=$d;(function(s,t,e,i){var n=hi(s+","+t+","+e,function(r){Cn[r]=1});hi(t,function(r){Ci.units[r]="deg",Kd[r]=1}),on[n[13]]=s+","+t,hi(i,function(r){var o=r.split(":");on[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ci.units[s]="px"});fi.registerPlugin(ep);var Pi=fi.registerPlugin(ep)||fi;Pi.core.Tween;/*!
 * Observer 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Ue,wc,Mi,kn,Gn,cs,ip,or,Ys,np,bn,Yi,rp,sp=()=>Ue||typeof window<"u"&&(Ue=window.gsap)&&Ue.registerPlugin&&Ue,op=1,is=[],Yt=[],cn=[],$s=Date.now,Tc=(s,t)=>t,Db=()=>{let s=Ys.core,t=s.bridge||{},e=s._scrollers,i=s._proxies;e.push(...Yt),i.push(...cn),Yt=e,cn=i,Tc=(n,r)=>t[n](r)},Xn=(s,t)=>~cn.indexOf(s)&&cn[cn.indexOf(s)+1][t],Zs=s=>!!~np.indexOf(s),si=(s,t,e,i,n)=>s.addEventListener(t,e,{passive:!i,capture:!!n}),Je=(s,t,e,i)=>s.removeEventListener(t,e,!!i),jo="scrollLeft",Ko="scrollTop",Cc=()=>bn&&bn.isPressed||Yt.cache++,Ia=(s,t)=>{let e=i=>{if(i||i===0){op&&(Mi.history.scrollRestoration="manual");let n=bn&&bn.isPressed;i=e.v=Math.round(i)||(bn&&bn.iOS?1:0),s(i),e.cacheID=Yt.cache,n&&Tc("ss",i)}else(t||Yt.cache!==e.cacheID||Tc("ref"))&&(e.cacheID=Yt.cache,e.v=s());return e.v+e.offset};return e.offset=0,s&&e},ni={s:jo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ia(function(s){return arguments.length?Mi.scrollTo(s,Te.sc()):Mi.pageXOffset||kn[jo]||Gn[jo]||cs[jo]||0})},Te={s:Ko,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ni,sc:Ia(function(s){return arguments.length?Mi.scrollTo(ni.sc(),s):Mi.pageYOffset||kn[Ko]||Gn[Ko]||cs[Ko]||0})},oi=(s,t)=>(t&&t._ctx&&t._ctx.selector||Ue.utils.toArray)(s)[0]||(typeof s=="string"&&Ue.config().nullTargetWarn!==!1?console.warn("Element not found:",s):null),$n=(s,{s:t,sc:e})=>{Zs(s)&&(s=kn.scrollingElement||Gn);let i=Yt.indexOf(s),n=e===Te.sc?1:2;!~i&&(i=Yt.push(s)-1),Yt[i+n]||s.addEventListener("scroll",Cc);let r=Yt[i+n],o=r||(Yt[i+n]=Ia(Xn(s,t),!0)||(Zs(s)?e:Ia(function(a){return arguments.length?s[t]=a:s[t]})));return o.target=s,r||(o.smooth=Ue.getProperty(s,"scrollBehavior")==="smooth"),o},Ec=(s,t,e)=>{let i=s,n=s,r=$s(),o=r,a=t||50,l=Math.max(500,a*3),c=(f,m)=>{let g=$s();m||g-r>a?(n=i,i=f,o=r,r=g):e?i+=f:i=n+(f-n)/(g-o)*(r-o)};return{update:c,reset:()=>{n=i=e?0:i,o=r=0},getVelocity:f=>{let m=o,g=n,p=$s();return(f||f===0)&&f!==i&&c(f),r===o||p-o>l?0:(i+(e?g:-g))/((e?p:r)-m)*1e3}}},Rs=(s,t)=>(t&&!s._gsapAllow&&s.preventDefault(),s.changedTouches?s.changedTouches[0]:s),af=s=>{let t=Math.max(...s),e=Math.min(...s);return Math.abs(t)>=Math.abs(e)?t:e},ap=()=>{Ys=Ue.core.globals().ScrollTrigger,Ys&&Ys.core&&Db()},lp=s=>(Ue=s||sp(),Ue&&typeof document<"u"&&document.body&&(Mi=window,kn=document,Gn=kn.documentElement,cs=kn.body,np=[Mi,kn,Gn,cs],Ue.utils.clamp,rp=Ue.core.context||function(){},or="onpointerenter"in cs?"pointer":"mouse",ip=be.isTouch=Mi.matchMedia&&Mi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Mi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Yi=be.eventTypes=("ontouchstart"in Gn?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gn?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(()=>op=0,500),ap(),wc=1),wc);ni.op=Te;Yt.cache=0;class be{constructor(t){this.init(t)}init(t){wc||lp(Ue)||console.warn("Please gsap.registerPlugin(Observer)"),Ys||ap();let{tolerance:e,dragMinimum:i,type:n,target:r,lineHeight:o,debounce:a,preventDefault:l,onStop:c,onStopDelay:h,ignore:u,wheelSpeed:f,event:m,onDragStart:g,onDragEnd:p,onDrag:d,onPress:_,onRelease:S,onRight:y,onLeft:v,onUp:b,onDown:P,onChangeX:E,onChangeY:x,onChange:M,onToggleX:D,onToggleY:U,onHover:it,onHoverEnd:N,onMove:R,ignoreCheck:F,isNormalizer:Z,onGestureStart:C,onGestureEnd:k,onWheel:tt,onEnable:nt,onDisable:H,onClick:X,scrollSpeed:Q,capture:K,allowClicks:et,lockAxis:W,onLockAxis:Rt}=t;this.target=r=oi(r)||Gn,this.vars=t,u&&(u=Ue.utils.toArray(u)),e=e||1e-9,i=i||0,f=f||1,Q=Q||1,n=n||"wheel,touch,pointer",a=a!==!1,o||(o=parseFloat(Mi.getComputedStyle(cs).lineHeight)||22);let pt,Tt,rt,It,At,Et,Gt,G=this,Kt=0,ae=0,Ut=$n(r,ni),Vt=$n(r,Te),Se=Ut(),_e=Vt(),A=~n.indexOf("touch")&&!~n.indexOf("pointer")&&Yi[0]==="pointerdown",w=Zs(r),V=r.ownerDocument||kn,st=[0,0,0],lt=[0,0,0],ut=0,ht=()=>ut=$s(),J=(j,ct)=>(G.event=j)&&u&&~u.indexOf(j.target)||ct&&A&&j.pointerType!=="touch"||F&&F(j,ct),B=()=>{G._vx.reset(),G._vy.reset(),Tt.pause(),c&&c(G)},gt=()=>{let j=G.deltaX=af(st),ct=G.deltaY=af(lt),St=Math.abs(j)>=e,Lt=Math.abs(ct)>=e;M&&(St||Lt)&&M(G,j,ct,st,lt),St&&(y&&G.deltaX>0&&y(G),v&&G.deltaX<0&&v(G),E&&E(G),D&&G.deltaX<0!=Kt<0&&D(G),Kt=G.deltaX,st[0]=st[1]=st[2]=0),Lt&&(P&&G.deltaY>0&&P(G),b&&G.deltaY<0&&b(G),x&&x(G),U&&G.deltaY<0!=ae<0&&U(G),ae=G.deltaY,lt[0]=lt[1]=lt[2]=0),(It||rt)&&(R&&R(G),rt&&(d(G),rt=!1),It=!1),Et&&!(Et=!1)&&Rt&&Rt(G),At&&(tt(G),At=!1),pt=0},wt=(j,ct,St)=>{st[St]+=j,lt[St]+=ct,G._vx.update(j),G._vy.update(ct),a?pt||(pt=requestAnimationFrame(gt)):gt()},dt=(j,ct)=>{W&&!Gt&&(G.axis=Gt=Math.abs(j)>Math.abs(ct)?"x":"y",Et=!0),Gt!=="y"&&(st[2]+=j,G._vx.update(j,!0)),Gt!=="x"&&(lt[2]+=ct,G._vy.update(ct,!0)),a?pt||(pt=requestAnimationFrame(gt)):gt()},xt=j=>{if(J(j,1))return;j=Rs(j,l);let ct=j.clientX,St=j.clientY,Lt=ct-G.x,zt=St-G.y,Xt=G.isDragging;G.x=ct,G.y=St,(Xt||Math.abs(G.startX-ct)>=i||Math.abs(G.startY-St)>=i)&&(d&&(rt=!0),Xt||(G.isDragging=!0),dt(Lt,zt),Xt||g&&g(G))},Ct=G.onPress=j=>{J(j,1)||j&&j.button||(G.axis=Gt=null,Tt.pause(),G.isPressed=!0,j=Rs(j),Kt=ae=0,G.startX=G.x=j.clientX,G.startY=G.y=j.clientY,G._vx.reset(),G._vy.reset(),si(Z?r:V,Yi[1],xt,l,!0),G.deltaX=G.deltaY=0,_&&_(G))},_t=G.onRelease=j=>{if(J(j,1))return;Je(Z?r:V,Yi[1],xt,!0);let ct=!isNaN(G.y-G.startY),St=G.isDragging&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Lt=Rs(j);!St&&ct&&(G._vx.reset(),G._vy.reset(),l&&et&&Ue.delayedCall(.08,()=>{if($s()-ut>300&&!j.defaultPrevented){if(j.target.click)j.target.click();else if(V.createEvent){let zt=V.createEvent("MouseEvents");zt.initMouseEvent("click",!0,!0,Mi,1,Lt.screenX,Lt.screenY,Lt.clientX,Lt.clientY,!1,!1,!1,!1,0,null),j.target.dispatchEvent(zt)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,c&&!Z&&Tt.restart(!0),p&&St&&p(G),S&&S(G,St)},Jt=j=>j.touches&&j.touches.length>1&&(G.isGesturing=!0)&&C(j,G.isDragging),jt=()=>(G.isGesturing=!1)||k(G),L=j=>{if(J(j))return;let ct=Ut(),St=Vt();wt((ct-Se)*Q,(St-_e)*Q,1),Se=ct,_e=St,c&&Tt.restart(!0)},Y=j=>{if(J(j))return;j=Rs(j,l),tt&&(At=!0);let ct=(j.deltaMode===1?o:j.deltaMode===2?Mi.innerHeight:1)*f;wt(j.deltaX*ct,j.deltaY*ct,0),c&&!Z&&Tt.restart(!0)},ot=j=>{if(J(j))return;let ct=j.clientX,St=j.clientY,Lt=ct-G.x,zt=St-G.y;G.x=ct,G.y=St,It=!0,(Lt||zt)&&dt(Lt,zt)},mt=j=>{G.event=j,it(G)},bt=j=>{G.event=j,N(G)},at=j=>J(j)||Rs(j,l)&&X(G);Tt=G._dc=Ue.delayedCall(h||.25,B).pause(),G.deltaX=G.deltaY=0,G._vx=Ec(0,50,!0),G._vy=Ec(0,50,!0),G.scrollX=Ut,G.scrollY=Vt,G.isDragging=G.isGesturing=G.isPressed=!1,rp(this),G.enable=j=>(G.isEnabled||(si(w?V:r,"scroll",Cc),n.indexOf("scroll")>=0&&si(w?V:r,"scroll",L,l,K),n.indexOf("wheel")>=0&&si(r,"wheel",Y,l,K),(n.indexOf("touch")>=0&&ip||n.indexOf("pointer")>=0)&&(si(r,Yi[0],Ct,l,K),si(V,Yi[2],_t),si(V,Yi[3],_t),et&&si(r,"click",ht,!1,!0),X&&si(r,"click",at),C&&si(V,"gesturestart",Jt),k&&si(V,"gestureend",jt),it&&si(r,or+"enter",mt),N&&si(r,or+"leave",bt),R&&si(r,or+"move",ot)),G.isEnabled=!0,j&&j.type&&Ct(j),nt&&nt(G)),G),G.disable=()=>{G.isEnabled&&(is.filter(j=>j!==G&&Zs(j.target)).length||Je(w?V:r,"scroll",Cc),G.isPressed&&(G._vx.reset(),G._vy.reset(),Je(Z?r:V,Yi[1],xt,!0)),Je(w?V:r,"scroll",L,K),Je(r,"wheel",Y,K),Je(r,Yi[0],Ct,K),Je(V,Yi[2],_t),Je(V,Yi[3],_t),Je(r,"click",ht,!0),Je(r,"click",at),Je(V,"gesturestart",Jt),Je(V,"gestureend",jt),Je(r,or+"enter",mt),Je(r,or+"leave",bt),Je(r,or+"move",ot),G.isEnabled=G.isPressed=G.isDragging=!1,H&&H(G))},G.kill=G.revert=()=>{G.disable();let j=is.indexOf(G);j>=0&&is.splice(j,1),bn===G&&(bn=0)},is.push(G),Z&&Zs(r)&&(bn=G),G.enable(m)}get velocityX(){return this._vx.getVelocity()}get velocityY(){return this._vy.getVelocity()}}be.version="3.12.1";be.create=s=>new be(s);be.register=lp;be.getAll=()=>is.slice();be.getById=s=>is.filter(t=>t.vars.id===s)[0];sp()&&Ue.registerPlugin(be);/*!
 * ScrollTrigger 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let Mt,Jr,$t,oe,$i,ce,cp,za,Oa,ns,ma,Qo,He,$a,Ac,Ke,lf,cf,jr,hp,Xl,up,xi,fp,dp,pp,On,Pc,ah,ql,ta=1,ti=Date.now,Yl=ti(),Gi=0,Us=0,hf=(s,t,e)=>{let i=yi(s)&&(s.substr(0,6)==="clamp("||s.indexOf("max")>-1);return e["_"+t+"Clamp"]=i,i?s.substr(6,s.length-7):s},uf=(s,t)=>t&&(!yi(s)||s.substr(0,6)!=="clamp(")?"clamp("+s+")":s,mp=()=>Us&&requestAnimationFrame(mp),ff=()=>$a=1,df=()=>$a=0,en=s=>s,Bs=s=>Math.round(s*1e5)/1e5||0,gp=()=>typeof window<"u",_p=()=>Mt||gp()&&(Mt=window.gsap)&&Mt.registerPlugin&&Mt,Cr=s=>!!~cp.indexOf(s),xp=s=>Xn(s,"getBoundingClientRect")||(Cr(s)?()=>(ba.width=$t.innerWidth,ba.height=$t.innerHeight,ba):()=>yn(s)),Rb=(s,t,{d:e,d2:i,a:n})=>(n=Xn(s,"getBoundingClientRect"))?()=>n()[e]:()=>(t?$t["inner"+i]:s["client"+i])||0,Ib=(s,t)=>!t||~cn.indexOf(s)?xp(s):()=>ba,Sn=(s,{s:t,d2:e,d:i,a:n})=>Math.max(0,(t="scroll"+e)&&(n=Xn(s,t))?n()-xp(s)()[i]:Cr(s)?($i[t]||ce[t])-($t["inner"+e]||$i["client"+e]||ce["client"+e]):s[t]-s["offset"+e]),ea=(s,t)=>{for(let e=0;e<jr.length;e+=3)(!t||~t.indexOf(jr[e+1]))&&s(jr[e],jr[e+1],jr[e+2])},yi=s=>typeof s=="string",ri=s=>typeof s=="function",ga=s=>typeof s=="number",ar=s=>typeof s=="object",Is=(s,t,e)=>s&&s.progress(t?0:1)&&e&&s.pause(),$l=(s,t)=>{if(s.enabled){let e=t(s);e&&e.totalTime&&(s.callbackAnimation=e)}},Yr=Math.abs,vp="left",yp="top",lh="right",ch="bottom",vr="width",yr="height",Js="Right",js="Left",Ks="Top",Qs="Bottom",ve="padding",Oi="margin",Ss="Width",hh="Height",Fe="px",Fi=s=>$t.getComputedStyle(s),zb=s=>{let t=Fi(s).position;s.style.position=t==="absolute"||t==="fixed"?t:"relative"},pf=(s,t)=>{for(let e in t)e in s||(s[e]=t[e]);return s},yn=(s,t)=>{let e=t&&Fi(s)[Ac]!=="matrix(1, 0, 0, 1, 0, 0)"&&Mt.to(s,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=s.getBoundingClientRect();return e&&e.progress(0).kill(),i},Lc=(s,{d2:t})=>s["offset"+t]||s["client"+t]||0,bp=s=>{let t=[],e=s.labels,i=s.duration(),n;for(n in e)t.push(e[n]/i);return t},Ob=s=>t=>Mt.utils.snap(bp(s),t),uh=s=>{let t=Mt.utils.snap(s),e=Array.isArray(s)&&s.slice(0).sort((i,n)=>i-n);return e?(i,n,r=.001)=>{let o;if(!n)return t(i);if(n>0){for(i-=r,o=0;o<e.length;o++)if(e[o]>=i)return e[o];return e[o-1]}else for(o=e.length,i+=r;o--;)if(e[o]<=i)return e[o];return e[0]}:(i,n,r=.001)=>{let o=t(i);return!n||Math.abs(o-i)<r||o-i<0==n<0?o:t(n<0?i-s:i+s)}},Fb=s=>(t,e)=>uh(bp(s))(t,e.direction),ia=(s,t,e,i)=>e.split(",").forEach(n=>s(t,n,i)),Ie=(s,t,e,i,n)=>s.addEventListener(t,e,{passive:!i,capture:!!n}),Re=(s,t,e,i)=>s.removeEventListener(t,e,!!i),na=(s,t,e)=>{e=e&&e.wheelHandler,e&&(s(t,"wheel",e),s(t,"touchmove",e))},mf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ra={toggleActions:"play",anticipatePin:0},Fa={top:0,left:0,center:.5,bottom:1,right:1},_a=(s,t)=>{if(yi(s)){let e=s.indexOf("="),i=~e?+(s.charAt(e-1)+1)*parseFloat(s.substr(e+1)):0;~e&&(s.indexOf("%")>e&&(i*=t/100),s=s.substr(0,e-1)),s=i+(s in Fa?Fa[s]*t:~s.indexOf("%")?parseFloat(s)*t/100:parseFloat(s)||0)}return s},sa=(s,t,e,i,{startColor:n,endColor:r,fontSize:o,indent:a,fontWeight:l},c,h,u)=>{let f=oe.createElement("div"),m=Cr(e)||Xn(e,"pinType")==="fixed",g=s.indexOf("scroller")!==-1,p=m?ce:e,d=s.indexOf("start")!==-1,_=d?n:r,S="border-color:"+_+";font-size:"+o+";color:"+_+";font-weight:"+l+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((g||u)&&m?"fixed;":"absolute;"),(g||u||!m)&&(S+=(i===Te?lh:ch)+":"+(c+parseFloat(a))+"px;"),h&&(S+="box-sizing:border-box;text-align:left;width:"+h.offsetWidth+"px;"),f._isStart=d,f.setAttribute("class","gsap-marker-"+s+(t?" marker-"+t:"")),f.style.cssText=S,f.innerText=t||t===0?s+"-"+t:s,p.children[0]?p.insertBefore(f,p.children[0]):p.appendChild(f),f._offset=f["offset"+i.op.d2],xa(f,0,i,d),f},xa=(s,t,e,i)=>{let n={display:"block"},r=e[i?"os2":"p2"],o=e[i?"p2":"os2"];s._isFlipped=i,n[e.a+"Percent"]=i?-100:0,n[e.a]=i?"1px":0,n["border"+r+Ss]=1,n["border"+o+Ss]=0,n[e.p]=t+"px",Mt.set(s,n)},qt=[],Dc={},mo,gf=()=>ti()-Gi>34&&(mo||(mo=requestAnimationFrame(wn))),$r=()=>{(!xi||!xi.isPressed||xi.startX>ce.clientWidth)&&(Yt.cache++,xi?mo||(mo=requestAnimationFrame(wn)):wn(),Gi||Ar("scrollStart"),Gi=ti())},Zl=()=>{pp=$t.innerWidth,dp=$t.innerHeight},ks=()=>{Yt.cache++,!He&&!up&&!oe.fullscreenElement&&!oe.webkitFullscreenElement&&(!fp||pp!==$t.innerWidth||Math.abs($t.innerHeight-dp)>$t.innerHeight*.25)&&za.restart(!0)},Er={},Nb=[],fh=()=>Re(Ft,"scrollEnd",fh)||fr(!0),Ar=s=>Er[s]&&Er[s].map(t=>t())||Nb,vi=[],Sp=s=>{for(let t=0;t<vi.length;t+=5)(!s||vi[t+4]&&vi[t+4].query===s)&&(vi[t].style.cssText=vi[t+1],vi[t].getBBox&&vi[t].setAttribute("transform",vi[t+2]||""),vi[t+3].uncache=1)},dh=(s,t)=>{let e;for(Ke=0;Ke<qt.length;Ke++)e=qt[Ke],e&&(!t||e._ctx===t)&&(s?e.kill(1):e.revert(!0,!0));t&&Sp(t),t||Ar("revert")},Mp=(s,t)=>{Yt.cache++,(t||!Qe)&&Yt.forEach(e=>ri(e)&&e.cacheID++&&(e.rec=0)),yi(s)&&($t.history.scrollRestoration=ah=s)},Qe,br=0,_f,Ub=()=>{if(_f!==br){let s=_f=br;requestAnimationFrame(()=>s===br&&fr(!0))}},fr=(s,t)=>{if(Gi&&!s){Ie(Ft,"scrollEnd",fh);return}Qe=Ft.isRefreshing=!0,Yt.forEach(i=>ri(i)&&++i.cacheID&&(i.rec=i()));let e=Ar("refreshInit");hp&&Ft.sort(),t||dh(),Yt.forEach(i=>{ri(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),qt.slice(0).forEach(i=>i.refresh()),qt.forEach((i,n)=>{if(i._subPinOffset&&i.pin){let r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),qt.forEach(i=>{let n=Sn(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>n)&&i.setPositions(i.start,Math.max(i.start+1,n),!0)}),e.forEach(i=>i&&i.render&&i.render(-1)),Yt.forEach(i=>{ri(i)&&(i.smooth&&requestAnimationFrame(()=>i.target.style.scrollBehavior="smooth"),i.rec&&i(i.rec))}),Mp(ah,1),za.pause(),br++,Qe=2,wn(2),qt.forEach(i=>ri(i.vars.onRefresh)&&i.vars.onRefresh(i)),Qe=Ft.isRefreshing=!1,Ar("refresh")},Rc=0,va=1,to,wn=s=>{if(!Qe||s===2){Ft.isUpdating=!0,to&&to.update(0);let t=qt.length,e=ti(),i=e-Yl>=50,n=t&&qt[0].scroll();if(va=Rc>n?-1:1,Qe||(Rc=n),i&&(Gi&&!$a&&e-Gi>200&&(Gi=0,Ar("scrollEnd")),ma=Yl,Yl=e),va<0){for(Ke=t;Ke-- >0;)qt[Ke]&&qt[Ke].update(0,i);va=1}else for(Ke=0;Ke<t;Ke++)qt[Ke]&&qt[Ke].update(0,i);Ft.isUpdating=!1}mo=0},Ic=[vp,yp,ch,lh,Oi+Qs,Oi+Js,Oi+Ks,Oi+js,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ya=Ic.concat([vr,yr,"boxSizing","max"+Ss,"max"+hh,"position",Oi,ve,ve+Ks,ve+Js,ve+Qs,ve+js]),Bb=(s,t,e)=>{hs(e);let i=s._gsap;if(i.spacerIsNative)hs(i.spacerState);else if(s._gsap.swappedIn){let n=t.parentNode;n&&(n.insertBefore(s,t),n.removeChild(t))}s._gsap.swappedIn=!1},Jl=(s,t,e,i)=>{if(!s._gsap.swappedIn){let n=Ic.length,r=t.style,o=s.style,a;for(;n--;)a=Ic[n],r[a]=e[a];r.position=e.position==="absolute"?"absolute":"relative",e.display==="inline"&&(r.display="inline-block"),o[ch]=o[lh]="auto",r.flexBasis=e.flexBasis||"auto",r.overflow="visible",r.boxSizing="border-box",r[vr]=Lc(s,ni)+Fe,r[yr]=Lc(s,Te)+Fe,r[ve]=o[Oi]=o[yp]=o[vp]="0",hs(i),o[vr]=o["max"+Ss]=e[vr],o[yr]=o["max"+hh]=e[yr],o[ve]=e[ve],s.parentNode!==t&&(s.parentNode.insertBefore(t,s),t.appendChild(s)),s._gsap.swappedIn=!0}},kb=/([A-Z])/g,hs=s=>{if(s){let t=s.t.style,e=s.length,i=0,n,r;for((s.t._gsap||Mt.core.getCache(s.t)).uncache=1;i<e;i+=2)r=s[i+1],n=s[i],r?t[n]=r:t[n]&&t.removeProperty(n.replace(kb,"-$1").toLowerCase())}},oa=s=>{let t=ya.length,e=s.style,i=[],n=0;for(;n<t;n++)i.push(ya[n],e[ya[n]]);return i.t=s,i},Gb=(s,t,e)=>{let i=[],n=s.length,r=e?8:0,o;for(;r<n;r+=2)o=s[r],i.push(o,o in t?t[o]:s[r+1]);return i.t=s.t,i},ba={left:0,top:0},xf=(s,t,e,i,n,r,o,a,l,c,h,u,f,m)=>{ri(s)&&(s=s(a)),yi(s)&&s.substr(0,3)==="max"&&(s=u+(s.charAt(4)==="="?_a("0"+s.substr(3),e):0));let g=f?f.time():0,p,d,_;if(f&&f.seek(0),isNaN(s)||(s=+s),ga(s))f&&(s=Mt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,s)),o&&xa(o,e,i,!0);else{ri(t)&&(t=t(a));let S=(s||"0").split(" "),y,v,b,P;_=oi(t,a)||ce,y=yn(_)||{},(!y||!y.left&&!y.top)&&Fi(_).display==="none"&&(P=_.style.display,_.style.display="block",y=yn(_),P?_.style.display=P:_.style.removeProperty("display")),v=_a(S[0],y[i.d]),b=_a(S[1]||"0",e),s=y[i.p]-l[i.p]-c+v+n-b,o&&xa(o,b,i,e-b<20||o._isStart&&b>20),e-=e-b}if(m&&(a[m]=s||-.001,s<0&&(s=0)),r){let S=s+e,y=r._isStart;p="scroll"+i.d2,xa(r,S,i,y&&S>20||!y&&(h?Math.max(ce[p],$i[p]):r.parentNode[p])<=S+1),h&&(l=yn(o),h&&(r.style[i.op.p]=l[i.op.p]-i.op.m-r._offset+Fe))}return f&&_&&(p=yn(_),f.seek(u),d=yn(_),f._caScrollDist=p[i.p]-d[i.p],s=s/f._caScrollDist*u),f&&f.seek(g),f?s:Math.round(s)},Vb=/(webkit|moz|length|cssText|inset)/i,vf=(s,t,e,i)=>{if(s.parentNode!==t){let n=s.style,r,o;if(t===ce){s._stOrig=n.cssText,o=Fi(s);for(r in o)!+r&&!Vb.test(r)&&o[r]&&typeof n[r]=="string"&&r!=="0"&&(n[r]=o[r]);n.top=e,n.left=i}else n.cssText=s._stOrig;Mt.core.getCache(s).uncache=1,t.appendChild(s)}},wp=(s,t,e)=>{let i=t,n=i;return r=>{let o=Math.round(s());return o!==i&&o!==n&&Math.abs(o-i)>3&&Math.abs(o-n)>3&&(r=o,e&&e()),n=i,i=r,r}},aa=(s,t,e)=>{let i={};i[t.p]="+="+e,Mt.set(s,i)},yf=(s,t)=>{let e=$n(s,t),i="_scroll"+t.p2,n=(r,o,a,l,c)=>{let h=n.tween,u=o.onComplete,f={};a=a||e();let m=wp(e,a,()=>{h.kill(),n.tween=0});return c=l&&c||0,l=l||r-a,h&&h.kill(),o[i]=r,o.modifiers=f,f[i]=()=>m(a+l*h.ratio+c*h.ratio*h.ratio),o.onUpdate=()=>{Yt.cache++,wn()},o.onComplete=()=>{n.tween=0,u&&u.call(h)},h=n.tween=Mt.to(s,o),h};return s[i]=e,e.wheelHandler=()=>n.tween&&n.tween.kill()&&(n.tween=0),Ie(s,"wheel",e.wheelHandler),Ft.isTouch&&Ie(s,"touchmove",e.wheelHandler),n};class Ft{constructor(t,e){Jr||Ft.register(Mt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Pc(this),this.init(t,e)}init(t,e){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Us){this.update=this.refresh=this.kill=en;return}t=pf(yi(t)||ga(t)||t.nodeType?{trigger:t}:t,ra);let{onUpdate:i,toggleClass:n,id:r,onToggle:o,onRefresh:a,scrub:l,trigger:c,pin:h,pinSpacing:u,invalidateOnRefresh:f,anticipatePin:m,onScrubComplete:g,onSnapComplete:p,once:d,snap:_,pinReparent:S,pinSpacer:y,containerAnimation:v,fastScrollEnd:b,preventOverlaps:P}=t,E=t.horizontal||t.containerAnimation&&t.horizontal!==!1?ni:Te,x=!l&&l!==0,M=oi(t.scroller||$t),D=Mt.core.getCache(M),U=Cr(M),it=("pinType"in t?t.pinType:Xn(M,"pinType")||U&&"fixed")==="fixed",N=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],R=x&&t.toggleActions.split(" "),F="markers"in t?t.markers:ra.markers,Z=U?0:parseFloat(Fi(M)["border"+E.p2+Ss])||0,C=this,k=t.onRefreshInit&&(()=>t.onRefreshInit(C)),tt=Rb(M,U,E),nt=Ib(M,U),H=0,X=0,Q=0,K=$n(M,E),et,W,Rt,pt,Tt,rt,It,At,Et,Gt,G,Kt,ae,Ut,Vt,Se,_e,A,w,V,st,lt,ut,ht,J,B,gt,wt,dt,xt,Ct,_t,Jt,jt,L,Y,ot,mt,bt;if(C._startClamp=C._endClamp=!1,C._dir=E,m*=45,C.scroller=M,C.scroll=v?v.time.bind(v):K,pt=K(),C.vars=t,e=e||t.animation,"refreshPriority"in t&&(hp=1,t.refreshPriority===-9999&&(to=C)),D.tweenScroll=D.tweenScroll||{top:yf(M,Te),left:yf(M,ni)},C.tweenTo=et=D.tweenScroll[E.p],C.scrubDuration=at=>{Jt=ga(at)&&at,Jt?_t?_t.duration(at):_t=Mt.to(e,{ease:"expo",totalProgress:"+=0",duration:Jt,paused:!0,onComplete:()=>g&&g(C)}):(_t&&_t.progress(1).kill(),_t=0)},e&&(e.vars.lazy=!1,e._initted&&!C.isReverted||e.vars.immediateRender!==!1&&t.immediateRender!==!1&&e.duration()&&e.render(0,!0,!0),C.animation=e.pause(),e.scrollTrigger=C,C.scrubDuration(l),xt=0,r||(r=e.vars.id)),_&&((!ar(_)||_.push)&&(_={snapTo:_}),"scrollBehavior"in ce.style&&Mt.set(U?[ce,$i]:M,{scrollBehavior:"auto"}),Yt.forEach(at=>ri(at)&&at.target===(U?oe.scrollingElement||$i:M)&&(at.smooth=!1)),Rt=ri(_.snapTo)?_.snapTo:_.snapTo==="labels"?Ob(e):_.snapTo==="labelsDirectional"?Fb(e):_.directional!==!1?(at,j)=>uh(_.snapTo)(at,ti()-X<500?0:j.direction):Mt.utils.snap(_.snapTo),jt=_.duration||{min:.1,max:2},jt=ar(jt)?ns(jt.min,jt.max):ns(jt,jt),L=Mt.delayedCall(_.delay||Jt/2||.1,()=>{let at=K(),j=ti()-X<500,ct=et.tween;if((j||Math.abs(C.getVelocity())<10)&&!ct&&!$a&&H!==at){let St=(at-rt)/Ut,Lt=e&&!x?e.totalProgress():St,zt=j?0:(Lt-Ct)/(ti()-ma)*1e3||0,Xt=Mt.utils.clamp(-St,1-St,Yr(zt/2)*zt/.185),Ae=St+(_.inertia===!1?0:Xt),Me=ns(0,1,Rt(Ae,C)),re=Math.round(rt+Me*Ut),{onStart:te,onInterrupt:T,onComplete:z}=_;if(at<=It&&at>=rt&&re!==at){if(ct&&!ct._initted&&ct.data<=Yr(re-at))return;_.inertia===!1&&(Xt=Me-St),et(re,{duration:jt(Yr(Math.max(Yr(Ae-Lt),Yr(Me-Lt))*.185/zt/.05||0)),ease:_.ease||"power3",data:Yr(re-at),onInterrupt:()=>L.restart(!0)&&T&&T(C),onComplete:()=>{C.update(),H=K(),xt=Ct=e&&!x?e.totalProgress():C.progress,p&&p(C),z&&z(C)}},at,Xt*Ut,re-at-Xt*Ut),te&&te(C,et.tween)}}else C.isActive&&H!==at&&L.restart(!0)}).pause()),r&&(Dc[r]=C),c=C.trigger=oi(c||h!==!0&&h),bt=c&&c._gsap&&c._gsap.stRevert,bt&&(bt=bt(C)),h=h===!0?c:oi(h),yi(n)&&(n={targets:c,className:n}),h&&(u===!1||u===Oi||(u=!u&&h.parentNode&&h.parentNode.style&&Fi(h.parentNode).display==="flex"?!1:ve),C.pin=h,W=Mt.core.getCache(h),W.spacer?Vt=W.pinState:(y&&(y=oi(y),y&&!y.nodeType&&(y=y.current||y.nativeElement),W.spacerIsNative=!!y,y&&(W.spacerState=oa(y))),W.spacer=A=y||oe.createElement("div"),A.classList.add("pin-spacer"),r&&A.classList.add("pin-spacer-"+r),W.pinState=Vt=oa(h)),t.force3D!==!1&&Mt.set(h,{force3D:!0}),C.spacer=A=W.spacer,dt=Fi(h),ht=dt[u+E.os2],V=Mt.getProperty(h),st=Mt.quickSetter(h,E.a,Fe),Jl(h,A,dt),_e=oa(h)),F){Kt=ar(F)?pf(F,mf):mf,Gt=sa("scroller-start",r,M,E,Kt,0),G=sa("scroller-end",r,M,E,Kt,0,Gt),w=Gt["offset"+E.op.d2];let at=oi(Xn(M,"content")||M);At=this.markerStart=sa("start",r,at,E,Kt,w,0,v),Et=this.markerEnd=sa("end",r,at,E,Kt,w,0,v),v&&(mt=Mt.quickSetter([At,Et],E.a,Fe)),!it&&!(cn.length&&Xn(M,"fixedMarkers")===!0)&&(zb(U?ce:M),Mt.set([Gt,G],{force3D:!0}),B=Mt.quickSetter(Gt,E.a,Fe),wt=Mt.quickSetter(G,E.a,Fe))}if(v){let at=v.vars.onUpdate,j=v.vars.onUpdateParams;v.eventCallback("onUpdate",()=>{C.update(0,0,1),at&&at.apply(v,j||[])})}if(C.previous=()=>qt[qt.indexOf(C)-1],C.next=()=>qt[qt.indexOf(C)+1],C.revert=(at,j)=>{if(!j)return C.kill(!0);let ct=at!==!1||!C.enabled,St=He;ct!==C.isReverted&&(ct&&(Y=Math.max(K(),C.scroll.rec||0),Q=C.progress,ot=e&&e.progress()),At&&[At,Et,Gt,G].forEach(Lt=>Lt.style.display=ct?"none":"block"),ct&&(He=C,C.update(ct)),h&&(!S||!C.isActive)&&(ct?Bb(h,A,Vt):Jl(h,A,Fi(h),J)),ct||C.update(ct),He=St,C.isReverted=ct)},C.refresh=(at,j,ct,St)=>{if((He||!C.enabled)&&!j)return;if(h&&at&&Gi){Ie(Ft,"scrollEnd",fh);return}!Qe&&k&&k(C),He=C,et.tween&&(et.tween.kill(),et.tween=0),_t&&_t.pause(),f&&e&&e.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;let Lt=tt(),zt=nt(),Xt=v?v.duration():Sn(M,E),Ae=Ut<=.01,Me=0,re=St||0,te=ar(ct)?ct.end:t.end,T=t.endTrigger||c,z=ar(ct)?ct.start:t.start||(t.start===0||!c?0:h?"0 0":"0 100%"),$=C.pinnedContainer=t.pinnedContainer&&oi(t.pinnedContainer,C),O=c&&Math.max(0,qt.indexOf(C))||0,q=O,vt,Pt,Bt,kt,Ot,Dt,Nt,se,Ge,Ye,Pe,ne,Ht;for(F&&ar(ct)&&(ne=Mt.getProperty(Gt,E.p),Ht=Mt.getProperty(G,E.p));q--;)Dt=qt[q],Dt.end||Dt.refresh(0,1)||(He=C),Nt=Dt.pin,Nt&&(Nt===c||Nt===h||Nt===$)&&!Dt.isReverted&&(Ye||(Ye=[]),Ye.unshift(Dt),Dt.revert(!0,!0)),Dt!==qt[q]&&(O--,q--);for(ri(z)&&(z=z(C)),z=hf(z,"start",C),rt=xf(z,c,Lt,E,K(),At,Gt,C,zt,Z,it,Xt,v,C._startClamp&&"_startClamp")||(h?-.001:0),ri(te)&&(te=te(C)),yi(te)&&!te.indexOf("+=")&&(~te.indexOf(" ")?te=(yi(z)?z.split(" ")[0]:"")+te:(Me=_a(te.substr(2),Lt),te=yi(z)?z:(v?Mt.utils.mapRange(0,v.duration(),v.scrollTrigger.start,v.scrollTrigger.end,rt):rt)+Me,T=c)),te=hf(te,"end",C),It=Math.max(rt,xf(te||(T?"100% 0":Xt),T,Lt,E,K()+Me,Et,G,C,zt,Z,it,Xt,v,C._endClamp&&"_endClamp"))||-.001,Me=0,q=O;q--;)Dt=qt[q],Nt=Dt.pin,Nt&&Dt.start-Dt._pinPush<=rt&&!v&&Dt.end>0&&(vt=Dt.end-(C._startClamp?Math.max(0,Dt.start):Dt.start),(Nt===c&&Dt.start-Dt._pinPush<rt||Nt===$)&&isNaN(z)&&(Me+=vt*(1-Dt.progress)),Nt===h&&(re+=vt));if(rt+=Me,It+=Me,C._startClamp&&(C._startClamp+=Me),C._endClamp&&!Qe&&(C._endClamp=It||-.001,It=Math.min(It,Sn(M,E))),Ut=It-rt||(rt-=.01)&&.001,Ae&&(Q=Mt.utils.clamp(0,1,Mt.utils.normalize(rt,It,Y))),C._pinPush=re,At&&Me&&(vt={},vt[E.a]="+="+Me,$&&(vt[E.p]="-="+K()),Mt.set([At,Et],vt)),h)vt=Fi(h),kt=E===Te,Bt=K(),lt=parseFloat(V(E.a))+re,!Xt&&It>1&&(Pe=(U?oe.scrollingElement||$i:M).style,Pe={style:Pe,value:Pe["overflow"+E.a.toUpperCase()]},U&&Fi(ce)["overflow"+E.a.toUpperCase()]!=="scroll"&&(Pe.style["overflow"+E.a.toUpperCase()]="scroll")),Jl(h,A,vt),_e=oa(h),Pt=yn(h,!0),se=it&&$n(M,kt?ni:Te)(),u&&(J=[u+E.os2,Ut+re+Fe],J.t=A,q=u===ve?Lc(h,E)+Ut+re:0,q&&J.push(E.d,q+Fe),hs(J),$&&qt.forEach(fn=>{fn.pin===$&&fn.vars.pinSpacing!==!1&&(fn._subPinOffset=!0)}),it&&K(Y)),it&&(Ot={top:Pt.top+(kt?Bt-rt:se)+Fe,left:Pt.left+(kt?se:Bt-rt)+Fe,boxSizing:"border-box",position:"fixed"},Ot[vr]=Ot["max"+Ss]=Math.ceil(Pt.width)+Fe,Ot[yr]=Ot["max"+hh]=Math.ceil(Pt.height)+Fe,Ot[Oi]=Ot[Oi+Ks]=Ot[Oi+Js]=Ot[Oi+Qs]=Ot[Oi+js]="0",Ot[ve]=vt[ve],Ot[ve+Ks]=vt[ve+Ks],Ot[ve+Js]=vt[ve+Js],Ot[ve+Qs]=vt[ve+Qs],Ot[ve+js]=vt[ve+js],Se=Gb(Vt,Ot,S),Qe&&K(0)),e?(Ge=e._initted,Xl(1),e.render(e.duration(),!0,!0),ut=V(E.a)-lt+Ut+re,gt=Math.abs(Ut-ut)>1,it&&gt&&Se.splice(Se.length-2,2),e.render(0,!0,!0),Ge||e.invalidate(!0),e.parent||e.totalTime(e.totalTime()),Xl(0)):ut=Ut,Pe&&(Pe.value?Pe.style["overflow"+E.a.toUpperCase()]=Pe.value:Pe.style.removeProperty("overflow-"+E.a));else if(c&&K()&&!v)for(Pt=c.parentNode;Pt&&Pt!==ce;)Pt._pinOffset&&(rt-=Pt._pinOffset,It-=Pt._pinOffset),Pt=Pt.parentNode;Ye&&Ye.forEach(fn=>fn.revert(!1,!0)),C.start=rt,C.end=It,pt=Tt=Qe?Y:K(),!v&&!Qe&&(pt<Y&&K(Y),C.scroll.rec=0),C.revert(!1,!0),X=ti(),L&&(H=-1,C.isActive&&K(rt+Ut*Q),L.restart(!0)),He=0,e&&x&&(e._initted||ot)&&e.progress()!==ot&&e.progress(ot||0,!0).render(e.time(),!0,!0),(Ae||Q!==C.progress||v)&&(e&&!x&&e.totalProgress(v&&rt<-.001&&!Q?Mt.utils.normalize(rt,It,0):Q,!0),C.progress=Ae||(pt-rt)/Ut===Q?0:Q),h&&u&&(A._pinOffset=Math.round(C.progress*ut)),_t&&_t.invalidate(),isNaN(ne)||(ne-=Mt.getProperty(Gt,E.p),Ht-=Mt.getProperty(G,E.p),aa(Gt,E,ne),aa(At,E,ne-(St||0)),aa(G,E,Ht),aa(Et,E,Ht-(St||0))),Ae&&!Qe&&C.update(),a&&!Qe&&!ae&&(ae=!0,a(C),ae=!1)},C.getVelocity=()=>(K()-Tt)/(ti()-ma)*1e3||0,C.endAnimation=()=>{Is(C.callbackAnimation),e&&(_t?_t.progress(1):e.paused()?x||Is(e,C.direction<0,1):Is(e,e.reversed()))},C.labelToScroll=at=>e&&e.labels&&(rt||C.refresh()||rt)+e.labels[at]/e.duration()*Ut||0,C.getTrailing=at=>{let j=qt.indexOf(C),ct=C.direction>0?qt.slice(0,j).reverse():qt.slice(j+1);return(yi(at)?ct.filter(St=>St.vars.preventOverlaps===at):ct).filter(St=>C.direction>0?St.end<=rt:St.start>=It)},C.update=(at,j,ct)=>{if(v&&!ct&&!at)return;let St=Qe===!0?Y:C.scroll(),Lt=at?0:(St-rt)/Ut,zt=Lt<0?0:Lt>1?1:Lt||0,Xt=C.progress,Ae,Me,re,te,T,z,$,O;if(j&&(Tt=pt,pt=v?K():St,_&&(Ct=xt,xt=e&&!x?e.totalProgress():zt)),m&&!zt&&h&&!He&&!ta&&Gi&&rt<St+(St-Tt)/(ti()-ma)*m&&(zt=1e-4),zt!==Xt&&C.enabled){if(Ae=C.isActive=!!zt&&zt<1,Me=!!Xt&&Xt<1,z=Ae!==Me,T=z||!!zt!=!!Xt,C.direction=zt>Xt?1:-1,C.progress=zt,T&&!He&&(re=zt&&!Xt?0:zt===1?1:Xt===1?2:3,x&&(te=!z&&R[re+1]!=="none"&&R[re+1]||R[re],O=e&&(te==="complete"||te==="reset"||te in e))),P&&(z||O)&&(O||l||!e)&&(ri(P)?P(C):C.getTrailing(P).forEach(q=>q.endAnimation())),x||(_t&&!He&&!ta?(_t._dp._time-_t._start!==_t._time&&_t.render(_t._dp._time-_t._start),_t.resetTo?_t.resetTo("totalProgress",zt,e._tTime/e._tDur):(_t.vars.totalProgress=zt,_t.invalidate().restart())):e&&e.totalProgress(zt,!!(He&&(X||at)))),h){if(at&&u&&(A.style[u+E.os2]=ht),!it)st(Bs(lt+ut*zt));else if(T){if($=!at&&zt>Xt&&It+1>St&&St+1>=Sn(M,E),S)if(!at&&(Ae||$)){let q=yn(h,!0),vt=St-rt;vf(h,ce,q.top+(E===Te?vt:0)+Fe,q.left+(E===Te?0:vt)+Fe)}else vf(h,A);hs(Ae||$?Se:_e),gt&&zt<1&&Ae||st(lt+(zt===1&&!$?ut:0))}}_&&!et.tween&&!He&&!ta&&L.restart(!0),n&&(z||d&&zt&&(zt<1||!ql))&&Oa(n.targets).forEach(q=>q.classList[Ae||d?"add":"remove"](n.className)),i&&!x&&!at&&i(C),T&&!He?(x&&(O&&(te==="complete"?e.pause().totalProgress(1):te==="reset"?e.restart(!0).pause():te==="restart"?e.restart(!0):e[te]()),i&&i(C)),(z||!ql)&&(o&&z&&$l(C,o),N[re]&&$l(C,N[re]),d&&(zt===1?C.kill(!1,1):N[re]=0),z||(re=zt===1?1:3,N[re]&&$l(C,N[re]))),b&&!Ae&&Math.abs(C.getVelocity())>(ga(b)?b:2500)&&(Is(C.callbackAnimation),_t?_t.progress(1):Is(e,te==="reverse"?1:!zt,1))):x&&i&&!He&&i(C)}if(wt){let q=v?St/v.duration()*(v._caScrollDist||0):St;B(q+(Gt._isFlipped?1:0)),wt(q)}mt&&mt(-St/v.duration()*(v._caScrollDist||0))},C.enable=(at,j)=>{C.enabled||(C.enabled=!0,Ie(M,"resize",ks),Ie(U?oe:M,"scroll",$r),k&&Ie(Ft,"refreshInit",k),at!==!1&&(C.progress=Q=0,pt=Tt=H=K()),j!==!1&&C.refresh())},C.getTween=at=>at&&et?et.tween:_t,C.setPositions=(at,j,ct,St)=>{if(v){let Lt=v.scrollTrigger,zt=v.duration(),Xt=Lt.end-Lt.start;at=Lt.start+Xt*at/zt,j=Lt.start+Xt*j/zt}C.refresh(!1,!1,{start:uf(at,ct&&!!C._startClamp),end:uf(j,ct&&!!C._endClamp)},St),C.update()},C.adjustPinSpacing=at=>{if(J&&at){let j=J.indexOf(E.d)+1;J[j]=parseFloat(J[j])+at+Fe,J[1]=parseFloat(J[1])+at+Fe,hs(J)}},C.disable=(at,j)=>{if(C.enabled&&(at!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,j||_t&&_t.pause(),Y=0,W&&(W.uncache=1),k&&Re(Ft,"refreshInit",k),L&&(L.pause(),et.tween&&et.tween.kill()&&(et.tween=0)),!U)){let ct=qt.length;for(;ct--;)if(qt[ct].scroller===M&&qt[ct]!==C)return;Re(M,"resize",ks),Re(M,"scroll",$r)}},C.kill=(at,j)=>{C.disable(at,j),_t&&!j&&_t.kill(),r&&delete Dc[r];let ct=qt.indexOf(C);ct>=0&&qt.splice(ct,1),ct===Ke&&va>0&&Ke--,ct=0,qt.forEach(St=>St.scroller===C.scroller&&(ct=1)),ct||Qe||(C.scroll.rec=0),e&&(e.scrollTrigger=null,at&&e.revert({kill:!1}),j||e.kill()),At&&[At,Et,Gt,G].forEach(St=>St.parentNode&&St.parentNode.removeChild(St)),to===C&&(to=0),h&&(W&&(W.uncache=1),ct=0,qt.forEach(St=>St.pin===h&&ct++),ct||(W.spacer=0)),t.onKill&&t.onKill(C)},qt.push(C),C.enable(!1,!1),bt&&bt(C),e&&e.add&&!Ut){let at=C.update;C.update=()=>{C.update=at,rt||It||C.refresh()},Mt.delayedCall(.01,C.update),Ut=.01,rt=It=0}else C.refresh();h&&Ub()}static register(t){return Jr||(Mt=t||_p(),gp()&&window.document&&Ft.enable(),Jr=Us),Jr}static defaults(t){if(t)for(let e in t)ra[e]=t[e];return ra}static disable(t,e){Us=0,qt.forEach(i=>i[e?"kill":"disable"](t)),Re($t,"wheel",$r),Re(oe,"scroll",$r),clearInterval(Qo),Re(oe,"touchcancel",en),Re(ce,"touchstart",en),ia(Re,oe,"pointerdown,touchstart,mousedown",ff),ia(Re,oe,"pointerup,touchend,mouseup",df),za.kill(),ea(Re);for(let i=0;i<Yt.length;i+=3)na(Re,Yt[i],Yt[i+1]),na(Re,Yt[i],Yt[i+2])}static enable(){if($t=window,oe=document,$i=oe.documentElement,ce=oe.body,Mt&&(Oa=Mt.utils.toArray,ns=Mt.utils.clamp,Pc=Mt.core.context||en,Xl=Mt.core.suppressOverwrites||en,ah=$t.history.scrollRestoration||"auto",Rc=$t.pageYOffset,Mt.core.globals("ScrollTrigger",Ft),ce)){Us=1,mp(),be.register(Mt),Ft.isTouch=be.isTouch,On=be.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ie($t,"wheel",$r),cp=[$t,oe,$i,ce],Mt.matchMedia?(Ft.matchMedia=o=>{let a=Mt.matchMedia(),l;for(l in o)a.add(l,o[l]);return a},Mt.addEventListener("matchMediaInit",()=>dh()),Mt.addEventListener("matchMediaRevert",()=>Sp()),Mt.addEventListener("matchMedia",()=>{fr(0,1),Ar("matchMedia")}),Mt.matchMedia("(orientation: portrait)",()=>(Zl(),Zl))):console.warn("Requires GSAP 3.11.0 or later"),Zl(),Ie(oe,"scroll",$r);let t=ce.style,e=t.borderTopStyle,i=Mt.core.Animation.prototype,n,r;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),t.borderTopStyle="solid",n=yn(ce),Te.m=Math.round(n.top+Te.sc())||0,ni.m=Math.round(n.left+ni.sc())||0,e?t.borderTopStyle=e:t.removeProperty("border-top-style"),Qo=setInterval(gf,250),Mt.delayedCall(.5,()=>ta=0),Ie(oe,"touchcancel",en),Ie(ce,"touchstart",en),ia(Ie,oe,"pointerdown,touchstart,mousedown",ff),ia(Ie,oe,"pointerup,touchend,mouseup",df),Ac=Mt.utils.checkPrefix("transform"),ya.push(Ac),Jr=ti(),za=Mt.delayedCall(.2,fr).pause(),jr=[oe,"visibilitychange",()=>{let o=$t.innerWidth,a=$t.innerHeight;oe.hidden?(lf=o,cf=a):(lf!==o||cf!==a)&&ks()},oe,"DOMContentLoaded",fr,$t,"load",fr,$t,"resize",ks],ea(Ie),qt.forEach(o=>o.enable(0,1)),r=0;r<Yt.length;r+=3)na(Re,Yt[r],Yt[r+1]),na(Re,Yt[r],Yt[r+2])}}static config(t){"limitCallbacks"in t&&(ql=!!t.limitCallbacks);let e=t.syncInterval;e&&clearInterval(Qo)||(Qo=e)&&setInterval(gf,e),"ignoreMobileResize"in t&&(fp=Ft.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(ea(Re)||ea(Ie,t.autoRefreshEvents||"none"),up=(t.autoRefreshEvents+"").indexOf("resize")===-1)}static scrollerProxy(t,e){let i=oi(t),n=Yt.indexOf(i),r=Cr(i);~n&&Yt.splice(n,r?6:2),e&&(r?cn.unshift($t,e,ce,e,$i,e):cn.unshift(i,e))}static clearMatchMedia(t){qt.forEach(e=>e._ctx&&e._ctx.query===t&&e._ctx.kill(!0,!0))}static isInViewport(t,e,i){let n=(yi(t)?oi(t):t).getBoundingClientRect(),r=n[i?vr:yr]*e||0;return i?n.right-r>0&&n.left+r<$t.innerWidth:n.bottom-r>0&&n.top+r<$t.innerHeight}static positionInViewport(t,e,i){yi(t)&&(t=oi(t));let n=t.getBoundingClientRect(),r=n[i?vr:yr],o=e==null?r/2:e in Fa?Fa[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0;return i?(n.left+o)/$t.innerWidth:(n.top+o)/$t.innerHeight}static killAll(t){if(qt.slice(0).forEach(e=>e.vars.id!=="ScrollSmoother"&&e.kill()),t!==!0){let e=Er.killAll||[];Er={},e.forEach(i=>i())}}}Ft.version="3.12.1";Ft.saveStyles=s=>s?Oa(s).forEach(t=>{if(t&&t.style){let e=vi.indexOf(t);e>=0&&vi.splice(e,5),vi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Mt.core.getCache(t),Pc())}}):vi;Ft.revert=(s,t)=>dh(!s,t);Ft.create=(s,t)=>new Ft(s,t);Ft.refresh=s=>s?ks():(Jr||Ft.register())&&fr(!0);Ft.update=s=>++Yt.cache&&wn(s===!0?2:0);Ft.clearScrollMemory=Mp;Ft.maxScroll=(s,t)=>Sn(s,t?ni:Te);Ft.getScrollFunc=(s,t)=>$n(oi(s),t?ni:Te);Ft.getById=s=>Dc[s];Ft.getAll=()=>qt.filter(s=>s.vars.id!=="ScrollSmoother");Ft.isScrolling=()=>!!Gi;Ft.snapDirectional=uh;Ft.addEventListener=(s,t)=>{let e=Er[s]||(Er[s]=[]);~e.indexOf(t)||e.push(t)};Ft.removeEventListener=(s,t)=>{let e=Er[s],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};Ft.batch=(s,t)=>{let e=[],i={},n=t.interval||.016,r=t.batchMax||1e9,o=(l,c)=>{let h=[],u=[],f=Mt.delayedCall(n,()=>{c(h,u),h=[],u=[]}).pause();return m=>{h.length||f.restart(!0),h.push(m.trigger),u.push(m),r<=h.length&&f.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&ri(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return ri(r)&&(r=r(),Ie(Ft,"refresh",()=>r=t.batchMax())),Oa(s).forEach(l=>{let c={};for(a in i)c[a]=i[a];c.trigger=l,e.push(Ft.create(c))}),e};let bf=(s,t,e,i)=>(t>i?s(i):t<0&&s(0),e>i?(i-t)/(e-t):e<0?t/(t-e):1),Sa=(s,t)=>{t===!0?s.style.removeProperty("touch-action"):s.style.touchAction=t===!0?"auto":t?"pan-"+t+(be.isTouch?" pinch-zoom":""):"none",s===$i&&Sa(ce,t)},la={auto:1,scroll:1},Hb=({event:s,target:t,axis:e})=>{let i=(s.changedTouches?s.changedTouches[0]:s).target,n=i._gsap||Mt.core.getCache(i),r=ti(),o;if(!n._isScrollT||r-n._isScrollT>2e3){for(;i&&i!==ce&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(la[(o=Fi(i)).overflowY]||la[o.overflowX]));)i=i.parentNode;n._isScroll=i&&i!==t&&!Cr(i)&&(la[(o=Fi(i)).overflowY]||la[o.overflowX]),n._isScrollT=r}(n._isScroll||e==="x")&&(s.stopPropagation(),s._gsapAllow=!0)},Tp=(s,t,e,i)=>be.create({target:s,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Hb,onPress:i,onDrag:i,onScroll:i,onEnable:()=>e&&Ie(oe,be.eventTypes[0],Mf,!1,!0),onDisable:()=>Re(oe,be.eventTypes[0],Mf,!0)}),Wb=/(input|label|select|textarea)/i,Sf,Mf=s=>{let t=Wb.test(s.target.tagName);(t||Sf)&&(s._gsapAllow=!0,Sf=t)},Xb=s=>{ar(s)||(s={}),s.preventDefault=s.isNormalizer=s.allowClicks=!0,s.type||(s.type="wheel,touch"),s.debounce=!!s.debounce,s.id=s.id||"normalizer";let{normalizeScrollX:t,momentum:e,allowNestedScroll:i,onRelease:n}=s,r,o,a=oi(s.target)||$i,l=Mt.core.globals().ScrollSmoother,c=l&&l.get(),h=On&&(s.content&&oi(s.content)||c&&s.content!==!1&&!c.smooth()&&c.content()),u=$n(a,Te),f=$n(a,ni),m=1,g=(be.isTouch&&$t.visualViewport?$t.visualViewport.scale*$t.visualViewport.width:$t.outerWidth)/$t.innerWidth,p=0,d=ri(e)?()=>e(r):()=>e||2.8,_,S,y=Tp(a,s.type,!0,i),v=()=>S=!1,b=en,P=en,E=()=>{o=Sn(a,Te),P=ns(On?1:0,o),t&&(b=ns(0,Sn(a,ni))),_=br},x=()=>{h._gsap.y=Bs(parseFloat(h._gsap.y)+u.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},M=()=>{if(S){requestAnimationFrame(v);let F=Bs(r.deltaY/2),Z=P(u.v-F);if(h&&Z!==u.v+u.offset){u.offset=Z-u.v;let C=Bs((parseFloat(h&&h._gsap.y)||0)-u.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",u.cacheID=Yt.cache,wn()}return!0}u.offset&&x(),S=!0},D,U,it,N,R=()=>{E(),D.isActive()&&D.vars.scrollY>o&&(u()>o?D.progress(1)&&u(o):D.resetTo("scrollY",o))};return h&&Mt.set(h,{y:"+=0"}),s.ignoreCheck=F=>On&&F.type==="touchmove"&&M()||m>1.05&&F.type!=="touchstart"||r.isGesturing||F.touches&&F.touches.length>1,s.onPress=()=>{S=!1;let F=m;m=Bs(($t.visualViewport&&$t.visualViewport.scale||1)/g),D.pause(),F!==m&&Sa(a,m>1.01?!0:t?!1:"x"),U=f(),it=u(),E(),_=br},s.onRelease=s.onGestureStart=(F,Z)=>{if(u.offset&&x(),!Z)N.restart(!0);else{Yt.cache++;let C=d(),k,tt;t&&(k=f(),tt=k+C*.05*-F.velocityX/.227,C*=bf(f,k,tt,Sn(a,ni)),D.vars.scrollX=b(tt)),k=u(),tt=k+C*.05*-F.velocityY/.227,C*=bf(u,k,tt,Sn(a,Te)),D.vars.scrollY=P(tt),D.invalidate().duration(C).play(.01),(On&&D.vars.scrollY>=o||k>=o-1)&&Mt.to({},{onUpdate:R,duration:C})}n&&n(F)},s.onWheel=()=>{D._ts&&D.pause(),ti()-p>1e3&&(_=0,p=ti())},s.onChange=(F,Z,C,k,tt)=>{if(br!==_&&E(),Z&&t&&f(b(k[2]===Z?U+(F.startX-F.x):f()+Z-k[1])),C){u.offset&&x();let nt=tt[2]===C,H=nt?it+F.startY-F.y:u()+C-tt[1],X=P(H);nt&&H!==X&&(it+=X-H),u(X)}(C||Z)&&wn()},s.onEnable=()=>{Sa(a,t?!1:"x"),Ft.addEventListener("refresh",R),Ie($t,"resize",R),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=f.smooth=!1),y.enable()},s.onDisable=()=>{Sa(a,!0),Re($t,"resize",R),Ft.removeEventListener("refresh",R),y.kill()},s.lockAxis=s.lockAxis!==!1,r=new be(s),r.iOS=On,On&&!u()&&u(1),On&&Mt.ticker.add(en),N=r._dc,D=Mt.to(r,{ease:"power4",paused:!0,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:wp(u,u(),()=>D.pause())},onUpdate:wn,onComplete:N.vars.onComplete}),r};Ft.sort=s=>qt.sort(s||((t,e)=>(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)));Ft.observe=s=>new be(s);Ft.normalizeScroll=s=>{if(typeof s>"u")return xi;if(s===!0&&xi)return xi.enable();if(s===!1)return xi&&xi.kill();let t=s instanceof be?s:Xb(s);return xi&&xi.target===t.target&&xi.kill(),Cr(t.target)&&(xi=t),t};Ft.core={_getVelocityProp:Ec,_inputObserver:Tp,_scrollers:Yt,_proxies:cn,bridge:{ss:()=>{Gi||Ar("scrollStart"),Gi=ti()},ref:()=>He}};_p()&&Mt.registerPlugin(Ft);class qb{constructor(t,e){this.gsap=t,this.tl=this.gsap.timeline(),this.gui=e,this.group01=[],this.group02=[],this.group03=[],this.fristScroll=!0,this.aboutBackGround,this.aboutGroup01,this.aboutGroup03,this.scene,this.camera,this.currentGroup,this.animation=!1,this.fristHeight,this.fristMargin,this.secondHeight,this.secondClientHeight,this.secondMargin,this.thirdHeight,this.thirdTrigger,this.trigger=document.querySelector(".animationtrigger"),this.about=document.querySelector(".about"),this.aboutFirstWrapper=document.querySelector(".aboutFirstWrapper"),this.aboutSecondWrapper=document.querySelector(".aboutSecondWrapper"),this.secondSubjects=document.querySelectorAll(".aboutSecondSubject"),this.aboutThridWrapper=document.querySelector(".aboutThridWrapper"),this.aboutThirdContentTittle=document.querySelector(".aboutThirdContentTittle"),this.aboutThirdContentTittles=document.querySelectorAll(".aboutThirdContentTittle"),this.aboutThirdStickWrappers=document.querySelectorAll(".aboutThirdStickWrapper"),this.aboutThirdStickWrapper=document.querySelector(".aboutThirdStickWrapper"),this.aboutThirdContentWrapper=document.querySelector(".aboutThirdContentWrapper")}createMesh(t,e,i,n,r,o){this.aboutBackGround=t,this.aboutGroup01=e,this.aboutGroup03=i,this.scene=n,this.camera=r,this.currentGroup=o,this.tl.to(this.trigger,{opacity:0,duration:7.5}).to(this.trigger,{opacity:1,onComplte:()=>{this.resize(),this.createBackGround(),this.createBox1(),this.createBox3(),this.scrollTrigger()}})}createBackGround(){let t=this.aboutBackGround.bg;this.scene.add(t)}createBox1(){for(let i=0;i<this.aboutGroup01.box1Count;i++){let n=this.aboutGroup01.box1.clone();this.group01.push(n),this.currentGroup.add(n);let r=Math.PI/180*(360/this.aboutGroup01.box1Count*i),o=Math.cos(r)*this.aboutGroup01.radius,a=Math.sin(r)*this.aboutGroup01.radius;n.rotation.z=r,n.position.set(o,a,0),i%2==0?this.aboutGroup01.group3.add(n):this.aboutGroup01.group1.add(n)}this.aboutGroup01.group1.add(this.aboutGroup01.group3);for(let i=0;i<this.aboutGroup01.box2Count;i++){let n=this.aboutGroup01.box1.clone();this.group01.push(n),this.currentGroup.add(n);let r=Math.PI/180*(360/this.aboutGroup01.box1Count*i),o=Math.cos(r)*this.aboutGroup01.radius,a=Math.sin(r)*this.aboutGroup01.radius;n.rotation.z=r,n.position.set(o,a,0),i%2==1?this.aboutGroup01.group4.add(n):this.aboutGroup01.group2.add(n)}this.aboutGroup01.group2.add(this.aboutGroup01.group4);let t=3,e=t+this.aboutGroup01.radius;this.aboutGroup01.group1.position.set(t,0,0),this.aboutGroup01.group1.rotation.x=Math.PI/180*-40,this.aboutGroup01.group2.position.set(e,0,0),this.aboutGroup01.group2.rotation.x=Math.PI/180*40,this.scene.add(this.aboutGroup01.group1,this.aboutGroup01.group2),this.interval=setInterval(()=>{let i=this.aboutGroup01.group1.rotation.z,n=this.aboutGroup01.group2.rotation.z;this.gsap.to(this.aboutGroup01.group1.rotation,{z:i+10,duration:1.4,ease:"power4.out"}),this.gsap.to(this.aboutGroup01.group2.rotation,{z:n-10,duration:1.4,ease:"power4.out"})},3e3)}createBox3(){let t=0;for(let e=0;e<this.aboutGroup03.box2xGrid;e++)for(let i=0;i<this.aboutGroup03.box2yGrid;i++){let n=this.aboutGroup03.box2[t];n.position.set(-5,0,0),n.material.opacity=0,this.group03.push(n),this.currentGroup.add(n),t++,this.scene.add(n);let r=Math.random();r<=.25?this.aboutGroup03.group1.add(n):r>.25&&r<=.5?this.aboutGroup03.group2.add(n):r>.5&&r<=.75?this.aboutGroup03.group3.add(n):r>.75&&r<=1&&this.aboutGroup03.group4.add(n)}this.scene.add(this.aboutGroup03.group1,this.aboutGroup03.group2,this.aboutGroup03.group3,this.aboutGroup03.group4)}scrollTrigger(){this.group01Trigger(),this.group02Trigger(),this.group03Trigger(),this.boxImageSwich(0)}objectScrollAnimation(){if(this.fristScroll==!0&&this.resize(),this.fristScroll=!1,this.scroll=window.scrollY,this.scroll<=this.fristHeight){let t=this.scroll/this.fristHeight*8,e=this.scroll/this.fristHeight*7,i=this.scroll/this.fristHeight*3,n=this.scroll/this.fristHeight*2;this.gsap.to(this.aboutGroup01.group1.position,{y:t,duration:.23}),this.gsap.to(this.aboutGroup01.group2.position,{y:e,duration:.4}),this.gsap.to(this.aboutGroup01.group3.position,{z:i,duration:.5}),this.gsap.to(this.aboutGroup01.group4.position,{z:n,duration:.66}),this.group03.forEach(r=>{r.position.set(-5,0,0)})}if(this.scroll>this.fristHeight&&this.scroll<=this.secondHeight+this.secondClientHeight){if(this.scroll>=this.fristHeight&&this.scroll<this.fristHeight+this.fristMargin/4){for(let e=0;e<this.aboutGroup03.group1.children.length;e++)this.gsap.to(this.aboutGroup03.group1.children[e].material,{opacity:0,duration:.2});if(this.animation==!0)return;this.animation==!0;let t=0;for(let e=0;e<this.aboutGroup03.box2xGrid;e++)for(let i=0;i<this.aboutGroup03.box2yGrid;i++){let n=e*this.aboutGroup03.xSize-this.aboutGroup03.box2xGrid*this.aboutGroup03.xSize/2+this.aboutGroup03.xSize/2+2,r=i*this.aboutGroup03.ySize-this.aboutGroup03.box2yGrid*this.aboutGroup03.ySize/2+this.aboutGroup03.ySize/2;this.group03[t].position.set(n,r,0),t++}this.animation==!1}if(this.scroll>=this.fristHeight+this.fristMargin/4&&this.scroll<=this.fristHeight+this.fristMargin/2){console.log("test1");for(let t=0;t<this.aboutGroup03.group1.children.length;t++)this.gsap.to(this.aboutGroup03.group1.children[t].material,{opacity:0,duration:.2})}if(this.scroll>=this.fristHeight+this.fristMargin-this.secondGsapTrigger&&this.scroll<this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*15){for(let t=0;t<this.aboutGroup03.group1.children.length;t++)this.gsap.to(this.aboutGroup03.group1.children[t].material,{opacity:1,duration:.3});for(let t=0;t<this.aboutGroup03.group2.children.length;t++)this.gsap.to(this.aboutGroup03.group2.children[t].material,{opacity:0,duration:.3})}if(this.scroll>=this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*15&&this.scroll<this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*30){for(let t=0;t<this.aboutGroup03.group2.children.length;t++)this.gsap.to(this.aboutGroup03.group2.children[t].material,{opacity:1,duration:.3});for(let t=0;t<this.aboutGroup03.group3.children.length;t++)this.gsap.to(this.aboutGroup03.group3.children[t].material,{opacity:0,duration:.3})}if(this.scroll>=this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*30&&this.scroll<this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*45){for(let t=0;t<this.aboutGroup03.group3.children.length;t++)this.gsap.to(this.aboutGroup03.group3.children[t].material,{opacity:1,duration:.3});for(let t=0;t<this.aboutGroup03.group4.children.length;t++)this.gsap.to(this.aboutGroup03.group4.children[t].material,{opacity:0,duration:.3})}if(this.scroll>=this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*45&&this.scroll<this.fristHeight+this.fristMargin-this.secondGsapTrigger+this.secondClientHeight/100*60)for(let t=0;t<this.aboutGroup03.group4.children.length;t++)this.gsap.to(this.aboutGroup03.group4.children[t].material,{opacity:1,duration:.3})}this.scroll>=this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2&&this.scroll<this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight&&this.boxImageSwich(0),this.scroll>=this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight&&this.scroll<this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*2&&this.boxImageSwich(1),this.scroll>=this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*2&&this.scroll<this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*3&&this.boxImageSwich(2),this.scroll>=this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*3&&this.scroll<this.thirdHeight+this.fristHeight+this.fristMargin-this.secondMargin+this.thirdTrigger*2+this.aboutThirdContentWrapper.clientHeight*4&&this.boxImageSwich(3)}resize(){if(this.width=window.innerWidth,this.height=window.innerHeight,this.secondGsapTrigger=this.height/100*15,this.fristHeight=this.aboutFirstWrapper.scrollHeight,this.fristMargin=this.height/2,this.secondHeight=this.aboutSecondWrapper.scrollHeight,this.secondClientHeight=this.aboutSecondWrapper.clientHeight,this.secondMargin=this.height,this.thirdHeight=this.aboutThridWrapper.scrollHeight,this.thirdTrigger=this.aboutThirdContentWrapper.clientHeight/100*15,this.width<480){for(let t=0;t<this.group01.length;t++)this.group01[t].material.opacity=0;this.aboutGroup03.group1.scale.set(.1,.1,.1),this.aboutGroup03.group2.scale.set(.1,.1,.1),this.aboutGroup03.group3.scale.set(.1,.1,.1),this.aboutGroup03.group4.scale.set(.1,.1,.1)}else if(this.width>=480&&this.width<=1023){for(let t=0;t<this.group01.length;t++)this.group01[t].material.opacity=0;this.aboutGroup03.group1.scale.set(.5,.5,.5),this.aboutGroup03.group2.scale.set(.5,.5,.5),this.aboutGroup03.group3.scale.set(.5,.5,.5),this.aboutGroup03.group4.scale.set(.5,.5,.5),this.aboutGroup03.group1.position.set(-1,0,0),this.aboutGroup03.group2.position.set(-1,0,0),this.aboutGroup03.group3.position.set(-1,0,0),this.aboutGroup03.group4.position.set(-1,0,0)}else if(this.width>1023){for(let t=0;t<this.group01.length;t++)this.group01[t].material.opacity=1;this.aboutGroup03.group1.scale.set(1,1,1),this.aboutGroup03.group2.scale.set(1,1,1),this.aboutGroup03.group3.scale.set(1,1,1),this.aboutGroup03.group4.scale.set(1,1,1),this.aboutGroup03.group1.position.set(0,0,0),this.aboutGroup03.group2.position.set(0,0,0),this.aboutGroup03.group3.position.set(0,0,0),this.aboutGroup03.group4.position.set(0,0,0)}this.fristScroll=!0}group01Trigger(){this.aboutGroup01.group1.children.length,this.aboutGroup01.group2.children.length}boxImageSwich(t){let e=Math.PI/180*180*t;for(let o=0;o<this.group03.length;o++)this.gsap.to(this.group03[o].rotation,{y:e,duration:.3,delay:o*.001});const i=1/this.aboutGroup03.box2xGrid,n=1/this.aboutGroup03.box2yGrid;let r=0;for(let o=0;o<this.aboutGroup03.box2xGrid;o++)for(let a=0;a<this.aboutGroup03.box2yGrid;a++){const l=this.group03[r].geometry.attributes.uv.array;for(let c=0;c<l.length;c+=2)l[c]=(l[c]+o)*i,l[c+1]=(l[c+1]+a)*n;this.group03[r].material.map=this.aboutGroup03.imges[t],r++}}group02Trigger(){this.secondSubjects.forEach((t,e)=>{let i=e*15+"%";this.tl.to(t,{scrollTrigger:{trigger:this.aboutSecondWrapper,start:`${i} 20%`,end:"+=0%",scrub:1,markes:1},opacity:1,duration:.2,ease:"power1.inOut"})})}group03Trigger(){this.aboutThirdStickWrappers.forEach((t,e)=>{this.gsap.to(t,{scrollTrigger:{trigger:t,start:"85% 85%",end:"+=0%",scrub:1},opacity:1,duration:.2,ease:"power1.inOut"})})}movePage(){for(let t=0;t<this.group01.length;t++)this.gsap.to(this.group01[t].material,{opacity:0,duration:1.2});for(let t=0;t<this.group03.length;t++)this.gsap.to(this.group03[t].material,{opacity:0,duration:1.2});this.scene.remove(this.aboutGroup01.group1,this.aboutGroup01.group2,this.aboutGroup03.group1,this.aboutGroup03.group2,this.aboutGroup03.group3,this.aboutGroup03.group4),this.group01=[],this.group02=[],this.group03=[],console.log(this.scene)}}class Yb{constructor(){}createMesh(){}}class Cp{constructor(t,e,i,n,r){this.gsap=t,this.tl=this.gsap.timeline(),this.currentPage=e,this.camera=n,this.loadingMesh=i,this.clone,this.loadingMesh,this.prevPage,this.scene=r,this.isLoaded=!1,this.PI=Math.PI,this.count=1,this.header=document.querySelector(".headerNav"),this.index=document.querySelector(".index"),this.about=document.querySelector(".about"),this.navWrappers=document.querySelectorAll(".navWrapper a"),this.trigger=document.querySelector(".animationtrigger")}boxRotation(){this.isLoaded||(this.tl.to(this.clone.rotation,{y:this.PI,duration:1.2,delay:.8,repeat:1}),this.tl.to(this.clone.rotation,{x:this.PI,duration:1.2,delay:.8,onComplte:()=>{this.intro(),this.count++}}))}setURL(){history.pushState(null,null,this.currentPage)}loading(){this.clone=this.loadingMesh.clone(),this.clone.material.opacity=1,this.scene.add(this.clone),this.boxRotation(),this.setURL()}intro(){this.tl.to(this.camera.position,{z:-.09,duration:1.2,ease:"power1.inOut"},"<=").to(this.camera.position,{z:5,duration:0,onComplte:()=>{this.showContent(),this.scene.remove(this.clone)}}),this.gsap.to(this.clone.material,{opacity:0,duration:.6,delay:.6})}showContent(){switch(this.currentPage){case"index":this.index.style.display="block",this.index.style.opacity=0,this.header.style.display="flex",this.header.style.opacity=0,this.gsap.to(this.index,{opacity:1,duration:.7,delay:1.7,ease:"power2.in"});break;case"about":this.about.style.display="block",this.about.style.opacity=0,this.gsap.to(this.about,{opacity:1,duration:.5}),this.gsap.to(this.header,{opacity:1,duration:.5});break}}outro(t,e){let i=t.target.dataset.link;switch(this.currentPage=String(i),e){case"index":this.prevPage=this.index;break;case"about":this.prevPage=this.about;break}return this.tl.to(this.prevPage,{opacity:0,duration:1.2}),this.tl.to(this.prevPage,{display:"none",duration:0,onComplte:()=>{this.currentPage=="index"&&this.navWrappers.forEach(n=>{this.gsap.to(n,{y:0,opacity:1,duration:.3})})}}).to(this.trigger,{opacity:1,duration:1.2,onComplte:()=>{this.loading()}}),this.currentPage}}class $b{constructor(){this.Text={A:[[1,0],[2,0],[3,0],[4,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[1,4],[2,4],[3,4],[4,4],[0,5],[4,5],[0,6],[4,6]],B:[[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3],[0,4],[4,4],[0,5],[4,5],[0,6],[1,6],[2,6],[3,6]],C:[[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[0,3],[0,4],[0,5],[4,5],[1,6],[2,6],[3,6]],E:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[0,2],[0,3],[1,3],[2,3],[3,3],[0,4],[0,5],[0,6],[1,6],[2,6],[3,6],[4,6]],L:[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,6],[2,6],[3,6],[4,6]],N:[[0,0],[4,0],[0,1],[4,1],[0,2],[1,2],[4,2],[0,3],[2,3],[4,3],[0,4],[3,4],[4,4],[0,5],[4,5],[0,6],[4,6]],O:[[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[4,4],[0,5],[4,5],[1,6],[2,6],[3,6]],R:[[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3],[0,4],[4,4],[0,5],[4,5],[0,6],[4,6]],T:[[0,0],[1,0],[2,0],[3,0],[4,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6]],U:[[0,0],[4,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[4,4],[0,5],[4,5],[1,6],[2,6],[3,6]]}}moveText(t){switch(this.text=[],t){case 2:this.a=this.moveA(),this.b=this.moveB(),this.o=this.moveO(),this.u=this.moveU(),this.t=this.moveT(),this.text.push(this.a,this.b,this.o,this.u,this.t);break;case 3:this.c=this.moveC(),this.o=this.moveO(),this.n=this.moveN(),this.t=this.moveT(),this.e=this.moveE(),this.n=this.moveN(),this.t=this.moveT(),this.text.push(this.c,this.o,this.n,this.t,this.e,this.n,this.t);break;case 4:this.c=this.moveC(),this.o=this.moveO(),this.n=this.moveN(),this.t=this.moveT(),this.r=this.moveR(),this.o=this.moveO(),this.l=this.moveL(),this.l=this.moveL(),this.text.push(this.c,this.o,this.n,this.t,this.r,this.o,this.l,this.l);break;case 5:this.c=this.moveC(),this.o=this.moveO(),this.n=this.moveN(),this.t=this.moveT(),this.a=this.moveA(),this.c=this.moveC(),this.t=this.moveT(),this.text.push(this.c,this.o,this.n,this.t,this.a,this.c,this.t);break}return this.text}moveA(){return this.Text.A}moveB(){return this.Text.B}moveC(){return this.Text.C}moveE(){return this.Text.E}moveL(){return this.Text.L}moveN(){return this.Text.N}moveO(){return this.Text.O}moveR(){return this.Text.R}moveT(){return this.Text.T}moveU(){return this.Text.U}}class Zb{constructor(t){this.boxPosition=new $b,this.loading=new Cp(t),this.gsap=t,this.tl=this.gsap.timeline(),this.scene,this.mesh,this.camera,this.total,this.meshs=[],this.navAs=document.querySelectorAll(".navWrapper a"),this.navWrapper=document.querySelector(".navWrapper"),this.trigger=document.querySelector(".animationtrigger"),this.cubeXSize,this.cubeYSize,this.cubeZSize,this.creatType,this.isAnimaiting=!0,this.isHold=!1,this.move=0}createMesh(t,e,i,n){this.mesh=t,this.scene=e,this.camera=i,this.group=n,this.total=this.mesh.xNum*this.mesh.yNum*this.mesh.zNum,this.cubeXSize=this.mesh.xNum*this.mesh.xSize+(this.mesh.xNum-1)*this.mesh.space/2,this.cubeYSize=this.mesh.yNum*this.mesh.ySize+(this.mesh.yNum-1)*this.mesh.space/2,this.cubeZSize=this.mesh.zNum*this.mesh.zSize+(this.mesh.zNum-1)*this.mesh.space/2;for(let o=0;o<this.mesh.xNum;o++)for(let a=0;a<this.mesh.yNum;a++)for(let l=0;l<this.mesh.zNum;l++){var r=this.mesh.mesh.clone();r.layers.set(0),r.updateMatrix(),r.matrixWorldAutoUpdate=!0,r.matrixWorldNeedsUpdate=!0,this.group.add(r),this.meshs.push(r),r.scale.set(0,0,0),this.gsap.to(r.scale,{x:1,y:1,z:1,duration:.5,delay:5.15+.004*o*a*l+this.move})}return this.tl.to(this.trigger,{opacity:0,duration:5.9+this.move}).to(this.trigger,{duration:.5,onComplte:()=>{this.move=2.3,this.moveToSquare(),this.setMouseAera()}}).to(this.trigger,{opacity:1,duration:1.1,onComplte:()=>{}}).to(this.trigger,{opacity:0,onComplte:()=>{this.isAnimaiting=!1}}),e.add(this.group),this.meshs}moveToSquare(t){let e,i=window.innerWidth/this.mesh.startWidth;window.innerWidth>=479?i<=.7&&(i=.7):i=.5,t!=0?(t="back.inOut(4)",e=1.1):(t="power3.in",e=.77);let n=0,r=0,o=0;for(let a=0;a<this.total;a++){let l=n*(this.mesh.xSize*i)+n*(this.mesh.space*i)-this.mesh.xNum*(this.mesh.xSize*i)/2+this.mesh.space*i/2,c=r*(this.mesh.ySize*i)+r*(this.mesh.space*i)-this.mesh.yNum*(this.mesh.ySize*i)/2+this.mesh.space*i/2,h=o*(this.mesh.zSize*i)+o*(this.mesh.space*i)-this.mesh.zNum*(this.mesh.zSize*i)/2+this.mesh.space*i/2;this.gsap.to(this.meshs[a].position,{x:l,y:c,z:h,duration:e,ease:t}),o++,o>=this.mesh.zNum&&(o=0,r++,r>=this.mesh.yNum&&(r=0,n++))}}hoverAnimation(t){if(!this.isAnimaiting){if(t===0)this.moveToSquare(t),this.isHold=!1;else if(t===1){for(let e=0;e<this.meshs.length;e++){let i=(Math.random()*this.cubeXSize-this.cubeXSize/2)*(Math.random()*6.4),n=(Math.random()*this.cubeYSize-this.cubeYSize/2)*(Math.random()*6.4),r=Math.random()*8-4;this.gsap.to(this.meshs[e].position,{x:i,y:n,z:r,duration:.64,ease:"elastic.out(0.2,0.1)"})}this.isHold=!1}else if(t===2||t===3||t===4||t===5){let e=[],i=0,n=0,r=1;e=this.boxPosition.moveText(t),i=e.length;let o=7*this.mesh.ySize+6*this.mesh.space,a=5*this.mesh.xSize+4*this.mesh.space;e.forEach((l,c)=>{for(let h=0;h<l.length;h++){let u=l[h][0]*this.mesh.xSize+l[h][0]*this.mesh.space+c*a+c*r-(i*a+(i-1)*r)/2,f=l[h][1]*this.mesh.ySize+l[h][1]*this.mesh.space-o/2;this.gsap.to(this.meshs[n].position,{x:u,y:-f,z:-7,duration:.77,ease:"power4.out"}),n++}});for(let l=n;l<this.total;l++){let c=Math.random();c<.5?c=-4:c=4,this.gsap.to(this.meshs[l].position,{x:l-n-(this.total-n)/2+.5,y:c,z:Math.random()*13-12,duration:.78,ease:"power4.out"})}this.isHold=!0,this.boxRotation()}}}pageMove(t){t(),this.isHold=!0,this.isAnimaiting=!0,this.boxRotation();for(let e=0;e<this.meshs.length;e++)this.gsap.to(this.meshs[e].position,{x:0,y:0,z:0,duration:1.2,ease:"back.in(3)",onComplte:()=>{for(let i=0;i<this.group.children.length;i++)this.group.remove(this.group.children[0])}});this.tl.to(this.trigger,{opacity:1,duration:1.2}).to(this.trigger,{opacity:0,onComplte:()=>{this.scene.remove(this.group),this.meshs=[]}})}resize(){if(this.isAnimaiting==!0)return;let t=window.innerWidth/this.mesh.startWidth;window.innerWidth>=479?t<=.7&&(t=.7):t=.5;let e=0,i=0,n=0;for(let r=0;r<this.total;r++){let o=e*(this.mesh.xSize*t)+e*(this.mesh.space*t)-this.mesh.xNum*(this.mesh.xSize*t)/2+this.mesh.space/2,a=i*(this.mesh.ySize*t)+i*(this.mesh.space*t)-this.mesh.yNum*(this.mesh.ySize*t)/2+this.mesh.space/2,l=n*(this.mesh.zSize*t)+n*(this.mesh.space*t)-this.mesh.zNum*(this.mesh.zSize*t)/2+this.mesh.space/2;this.meshs[r].position.set(o,a,l),this.meshs[r].scale.set(t,t,t),n++,n>=this.mesh.zNum&&(n=0,i++,i>=this.mesh.yNum&&(i=0,e++))}}boxRotation(t,e){if(this.isHold){this.gsap.to(this.group.rotation,{x:0,y:0,duration:.2});return}else this.group.rotation.x=-e/7,this.group.rotation.y=t/7}setMouseAera(){let t=0;for(let e=0;e<this.navAs.length;e++){let i=this.navAs[e].offsetWidth;t<i&&(t=i)}this.navWrapper.style.width=t+20+"px"}}function Jb(){const s=document.querySelector("body"),t=document.querySelectorAll(".navWrapper a"),e=document.querySelector(".navWrapper"),i=document.querySelector(".navTitle span"),n=document.querySelector(".navTitle"),r=document.querySelector(".headerNav"),o=r.querySelectorAll(".headerLink"),a=r.querySelectorAll(".headerSlash"),l=r.querySelector(".headerBtn");Pi.registerPlugin(Ft);let c,h,u,f,m=new _i,g=new yt,p="index",d=0,_,S=[],y=6,v=6,b=6,P=window.innerWidth;P<=1344&&(P=1344);let E=window.innerWidth/1920,x=window.innerWidth/1920;window.innerWidth>=479?(E<=.7&&(E=.7),x<=.7&&(x=.7)):(E=.5,x=.5);let M=.5*E,D=.5*E,U=.5*E;x<=.8&&(x=.8);let it=.05*x,N=.5,R=.5,F=.5;const Z={threshold:.55,strength:.4,radius:.5,exposure:1},C={mesh:new Wr(new Xr(new Ri(M,D,U)),new zn({color:"0xffffff",transparent:!0,opacity:1})),xNum:y,yNum:v,zNum:b,xSize:M,ySize:D,zSize:U,space:it,startWidth:P},k={box1:new Wr(new Xr(new Ri(N,R,F)),new zn({color:"0xffffff",transparent:!0,opacity:1})),box2:new ji(new Ri(N,R,F),new zn({color:"0xffffff",transparent:!0})),xSize:N,ySize:R,zSize:F,box1Count:5,box2Count:5,startWidth:P,radius:1.3,group1:new _i,group2:new _i,group3:new _i,group4:new _i},tt={box1:new Wr(new Xr(new Ri(N,R,F)),new zn({color:"0xffffff",transparent:!0,opacity:1})),box2:[],xSize:N,ySize:R,zSize:F,box2xGrid:16,box2yGrid:10,group1:new _i,group2:new _i,group3:new _i,group4:new _i,imges:[]},nt={bg:new Wr(new Xr(new Ri(20,20,F)),new zn({color:"0xffffff",transparent:!0,opacity:1}))},H=0;new ka().set(H);const Q=new qf({alpha:!0});Q.setClearColor(2631720,1),Q.autoClear=!1,document.querySelector("#container").appendChild(Q.domElement);const et={width:window.innerWidth,height:window.innerHeight},W=new Mv,Rt=new zi(75,et.width/et.height,.1,1e3);let pt;const Tt=new my(Q);let rt;const It=()=>{const ht=new gy(W,Rt);rt=new gs(new yt(et.width/et.height)),rt.strength=Z.strength,rt.threshold=Z.threshold,rt.radius=Z.radius,rt.filter=!1,Tt.addPass(ht),Tt.addPass(rt)},At=new hy("0#000000",10,100);At.position.set(1,1,1),W.add(At);const Et=At.clone();Et.layers.set(1),Et.intensity=2,W.add(Et),Rt.position.set(0,0,5);const Gt=new oy;Gt.load(),tt.imges.push(Gt.load("./public/assets/imges/about_img_02.jpeg")),tt.imges.push(Gt.load("./public/assets/imges/about_img_03.jpg")),tt.imges.push(Gt.load("./public/assets/imges/about_img_04.jpg")),tt.imges.push(Gt.load("./public/assets/imges/about_img_05.jpg"));const G=new fy,Kt=()=>{switch(p){case"index":S=f.createMesh(C,W,Rt,m);for(let L=0;L<S.length;L++)m.add(S[L]);break;case"about":let ht=tt.box2xGrid*tt.box2yGrid;for(let L=0;L<ht;L++){let Y=new ji(new Ri(N,R,F),new Ga({color:"white",transparent:!0,opacity:1}));tt.box2.push(Y)}h.createMesh(nt,k,tt,W,Rt,m);break;case"contact":let J=-1,B=-1,gt=2,wt=2,dt=.15,xt=new Jf;xt.moveTo(J,B+dt),xt.lineTo(J,B+wt-dt),xt.quadraticCurveTo(J,B+wt,J+dt,B+wt),xt.lineTo(J+gt-dt,B+wt),xt.quadraticCurveTo(J+gt,B+wt,J+gt,B+wt-dt),xt.lineTo(J+gt,B+dt),xt.quadraticCurveTo(J+gt,B,J+gt-dt,B),xt.lineTo(J+dt,B),xt.quadraticCurveTo(J,B,J,B+dt);let Ct=new Vc(xt),_t=new Xr(Ct),Jt=new zn({color:"white"}),jt=new Wr(_t,Jt);W.add(jt),u.createMesh();break}},ae=()=>{switch(et.width=window.innerWidth,et.height=window.innerHeight,Rt.aspect=et.width/et.height,Rt.updateProjectionMatrix(),f.resize(),p){case"index":f.resize();break;case"about":h.resize();break}Q.setSize(et.width,et.height),Q.setPixelRatio(Math.min(window.devicePixelRatio,2)),Tt.setSize(et.width,et.height),f.setMouseAera();const ht=window.innerWidth/1980;s.style.fontSize=`${ht}rem`},Ut=()=>{window.addEventListener("resize",ae),window.addEventListener("mousemove",ht=>{switch(_e(ht),A(),p){case"index":f.boxRotation(g.x,g.y);break}}),window.addEventListener("scroll",ht=>{if(!(window.scrollY<=0))switch(p){case"index":break;case"about":h.objectScrollAnimation();break}}),Se()},Vt=()=>{t.forEach((ht,J)=>{Pi.to(ht,{y:35,duration:.25,opacity:0})})},Se=()=>{e.addEventListener("mouseenter",ht=>{t.forEach(J=>{J.style.color="var(--textColor01in)"}),d=1,f.hoverAnimation(d)}),e.addEventListener("mouseleave",ht=>{t.forEach(J=>{J.style.color="var(--textColor01Out)"}),d=0,f.hoverAnimation(d)}),e.addEventListener("mouseenter",ht=>{ht.target==e&&(d=1,f.hoverAnimation(d))}),t.forEach((ht,J)=>{ht.addEventListener("mouseenter",B=>{B.target===ht&&(B.target.style.color="var(--textColor01hover)"),d=J+2,f.hoverAnimation(d)}),ht.addEventListener("mouseleave",B=>{B.target===ht&&(B.target.style.color="var(--textColor01in)"),d=1,f.hoverAnimation(d)})}),t.forEach(ht=>{ht.addEventListener("click",J=>{f.pageMove(Vt),p=c.outro(J,p),Kt()})}),n.addEventListener("mouseenter",()=>{d=1,f.hoverAnimation(d)}),n.addEventListener("mouseleave",()=>{d=0,f.hoverAnimation(d)}),i.addEventListener("click",Vt),i.addEventListener("mouseenter",ht=>{ht.target.style.color="var(--textColor01hover)"}),i.addEventListener("mouseleave",ht=>{ht.target.style.color="var(--textColorTitle)"}),o.forEach(ht=>{ht.addEventListener("click",J=>{o.forEach((B,gt)=>{let wt=Pi.timeline();wt.to(B,{opacity:0,duration:.3}),wt.to(a[gt],{opacity:0,duration:.3}).to(B,{display:"none"}).to(a[gt],{display:"none"})}),h.movePage(),p=c.outro(J,p),Kt()})}),l.addEventListener("click",ht=>{l.classList.toggle(".show"),l.classList.contains(".show")?(Pi.to(l,{rotation:90,duration:.3}),o.forEach((J,B)=>{Pi.timeline().to(J,{display:"block"}).to(a[B],{display:"block"}).to(J,{opacity:1,duration:.3,delay:.08*B}).to(a[B],{opacity:1,duration:.3,delay:.03*B+4*.02})})):(Pi.to(l,{rotation:0,duration:.3}),o.forEach((J,B)=>{let gt=Pi.timeline();gt.to(J,{opacity:0,duration:.3,delay:.03*B}),gt.to(a[B],{opacity:0,duration:.3,delay:.03*B+4*.02}).to(J,{display:"none"}).to(a[B],{display:"none"})}))})},_e=ht=>{g.x=ht.clientX/et.width*2-1,g.y=-(ht.clientY/et.height)*2+1},A=()=>{G.intersectObjects(W.children),G.setFromCamera(g,Rt)},w=()=>{Q.clear(),Rt.layers.set(0),Tt.render(),Q.clearDepth(),Rt.layers.set(1),Q.render(W,Rt),requestAnimationFrame(()=>{w()})},V=()=>{f=new Zb(Pi),h=new qb(Pi,pt),u=new Yb(Pi)},st=()=>{localStorage.getItem("prevlink")&&(p=localStorage.getItem("prevlink"),localStorage.removeItem("prevlink"))},lt=()=>{const ht=new Ri(M,D,U),J=new Xr(ht);return new Wr(J,new zn({color:"white",transparent:!0}))};(()=>{V(),st(),_=lt(),S=Kt(),c=new Cp(Pi,p,_,Rt,W),c.loading(),It(),Ut(),ae(),w()})()}const wf=document.querySelector(".wrongpage");if(wf){let s=wf.dataset.link;localStorage.setItem("prevlink",s),location.href="/index.html"}Jb();
