(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sa="169",tc=0,Ga=1,ec=2,cl=1,nc=2,Qe=3,gn=0,pe=1,qe=2,mn=0,oi=1,Ha=2,Va=3,ka=4,ul=5,tn=100,ic=101,rc=102,sc=103,ac=104,oc=200,Di=201,lc=202,cc=203,Ds=204,Us=205,uc=206,hc=207,fc=208,dc=209,pc=210,mc=211,_c=212,gc=213,vc=214,Is=0,Ns=1,Fs=2,ui=3,Os=4,Bs=5,zs=6,Gs=7,hl=0,xc=1,Mc=2,_n=0,Sc=1,Ec=2,yc=3,Tc=4,Ac=5,bc=6,wc=7,fl=300,hi=301,fi=302,Hs=303,Vs=304,Fr=306,ks=1e3,Un=1001,Ws=1002,Fe=1003,Rc=1004,ki=1005,Ce=1006,qr=1007,In=1008,sn=1009,dl=1010,pl=1011,Fi=1012,Ea=1013,On=1014,en=1015,vi=1016,ya=1017,Ta=1018,di=1020,ml=35902,_l=1021,gl=1022,Oe=1023,vl=1024,xl=1025,li=1026,pi=1027,Ml=1028,Aa=1029,Sl=1030,ba=1031,wa=1033,gr=33776,vr=33777,xr=33778,Mr=33779,Xs=35840,qs=35841,Ys=35842,Ks=35843,$s=36196,Zs=37492,js=37496,Js=37808,Qs=37809,ta=37810,ea=37811,na=37812,ia=37813,ra=37814,sa=37815,aa=37816,oa=37817,la=37818,ca=37819,ua=37820,ha=37821,Sr=36492,fa=36494,da=36495,El=36283,pa=36284,ma=36285,_a=36286,Cc=3200,Pc=3201,Lc=0,Dc=1,pn="",Ve="srgb",Mn="srgb-linear",Ra="display-p3",Or="display-p3-linear",wr="linear",jt="srgb",Rr="rec709",Cr="p3",Hn=7680,Wa=519,Uc=512,Ic=513,Nc=514,yl=515,Fc=516,Oc=517,Bc=518,zc=519,Xa=35044,qa="300 es",nn=2e3,Pr=2001;class xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yr=Math.PI/180,ga=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ce[i&255]+ce[i>>8&255]+ce[i>>16&255]+ce[i>>24&255]+"-"+ce[t&255]+ce[t>>8&255]+"-"+ce[t>>16&15|64]+ce[t>>24&255]+"-"+ce[e&63|128]+ce[e>>8&255]+"-"+ce[e>>16&255]+ce[e>>24&255]+ce[n&255]+ce[n>>8&255]+ce[n>>16&255]+ce[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function Gc(i,t){return(i%t+t)%t}function Kr(i,t,e){return(1-e)*i+e*t}function yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,r,s,a,o,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],m=n[5],g=n[8],x=r[0],f=r[3],h=r[6],y=r[1],E=r[4],A=r[7],C=r[2],w=r[5],b=r[8];return s[0]=a*x+o*y+l*C,s[3]=a*f+o*E+l*w,s[6]=a*h+o*A+l*b,s[1]=c*x+u*y+d*C,s[4]=c*f+u*E+d*w,s[7]=c*h+u*A+d*b,s[2]=p*x+m*y+g*C,s[5]=p*f+m*E+g*w,s[8]=p*h+m*A+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,p=o*l-u*s,m=c*s-a*l,g=e*d+n*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(r*c-u*n)*x,t[2]=(o*n-r*a)*x,t[3]=p*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-o*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($r.makeScale(t,e)),this}rotate(t){return this.premultiply($r.makeRotation(-t)),this}translate(t,e){return this.premultiply($r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $r=new Pt;function Tl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hc(){const i=Lr("canvas");return i.style.display="block",i}const Ya={};function Er(i){i in Ya||(Ya[i]=!0,console.warn(i))}function Vc(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function kc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ka=new Pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$a=new Pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ti={[Mn]:{transfer:wr,primaries:Rr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ve]:{transfer:jt,primaries:Rr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Or]:{transfer:wr,primaries:Cr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3($a),fromReference:i=>i.applyMatrix3(Ka)},[Ra]:{transfer:jt,primaries:Cr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3($a),fromReference:i=>i.applyMatrix3(Ka).convertLinearToSRGB()}},Xc=new Set([Mn,Or]),kt={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Xc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ti[t].toReference,r=Ti[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ti[i].primaries},getTransfer:function(i){return i===pn?wr:Ti[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ti[t].luminanceCoefficients)}};function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vn;class qc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vn===void 0&&(Vn=Lr("canvas")),Vn.width=t.width,Vn.height=t.height;const n=Vn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ci(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yc=0;class Al{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(jr(r[a].image)):s.push(jr(r[a]))}else s=jr(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kc=0;class me extends xi{constructor(t=me.DEFAULT_IMAGE,e=me.DEFAULT_MAPPING,n=Un,r=Un,s=Ce,a=In,o=Oe,l=sn,c=me.DEFAULT_ANISOTROPY,u=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=Oi(),this.name="",this.source=new Al(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ks:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case Ws:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ks:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case Ws:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}me.DEFAULT_IMAGE=null;me.DEFAULT_MAPPING=fl;me.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,r=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],d=l[8],p=l[1],m=l[5],g=l[9],x=l[2],f=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+x)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,A=(m+1)/2,C=(h+1)/2,w=(u+p)/4,b=(d+x)/4,U=(g+f)/4;return E>A&&E>C?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=w/n,s=b/n):A>C?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=w/r,s=U/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=b/s,r=U/s),this.set(n,r,s,e),this}let y=Math.sqrt((f-g)*(f-g)+(d-x)*(d-x)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(d-x)/y,this.z=(p-u)/y,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $c extends xi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new me(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Al(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends $c{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class bl extends me{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zc extends me{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const p=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==p||c!==m||u!==g){let f=1-o;const h=l*p+c*m+u*g+d*x,y=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const C=Math.sqrt(E),w=Math.atan2(C,h*y);f=Math.sin(f*w)/C,o=Math.sin(o*w)/C}const A=o*y;if(l=l*f+p*A,c=c*f+m*A,u=u*f+g*A,d=d*f+x*A,f===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],p=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+u*d+l*m-c*p,t[e+1]=l*g+u*p+c*d-o*m,t[e+2]=c*g+u*m+o*p-l*d,t[e+3]=u*g-o*d-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),p=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=p*u*d+c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d-p*m*g;break;case"YXZ":this._x=p*u*d+c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d+p*m*g;break;case"ZXY":this._x=p*u*d-c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d-p*m*g;break;case"ZYX":this._x=p*u*d-c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d+p*m*g;break;case"YZX":this._x=p*u*d+c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d-p*m*g;break;case"XZY":this._x=p*u*d-c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],p=n+o+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Za.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Za.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jr.copy(this).projectOnVector(t),this.sub(Jr)}reflect(t){return this.sub(Jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new I,Za=new Mi;class Bi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ze):ze.fromBufferAttribute(s,a),ze.applyMatrix4(t.matrixWorld),this.expandByPoint(ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wi.copy(n.boundingBox)),Wi.applyMatrix4(t.matrixWorld),this.union(Wi)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ze),ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ai),Xi.subVectors(this.max,Ai),kn.subVectors(t.a,Ai),Wn.subVectors(t.b,Ai),Xn.subVectors(t.c,Ai),ln.subVectors(Wn,kn),cn.subVectors(Xn,Wn),En.subVectors(kn,Xn);let e=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-En.z,En.y,ln.z,0,-ln.x,cn.z,0,-cn.x,En.z,0,-En.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-En.y,En.x,0];return!Qr(e,kn,Wn,Xn,Xi)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,kn,Wn,Xn,Xi))?!1:(qi.crossVectors(ln,cn),e=[qi.x,qi.y,qi.z],Qr(e,kn,Wn,Xn,Xi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ke=[new I,new I,new I,new I,new I,new I,new I,new I],ze=new I,Wi=new Bi,kn=new I,Wn=new I,Xn=new I,ln=new I,cn=new I,En=new I,Ai=new I,Xi=new I,qi=new I,yn=new I;function Qr(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){yn.fromArray(i,s);const o=r.x*Math.abs(yn.x)+r.y*Math.abs(yn.y)+r.z*Math.abs(yn.z),l=t.dot(yn),c=e.dot(yn),u=n.dot(yn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const jc=new Bi,bi=new I,ts=new I;class zi{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jc.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bi.subVectors(t,this.center);const e=bi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(bi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ts.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bi.copy(t.center).add(ts)),this.expandByPoint(bi.copy(t.center).sub(ts))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $e=new I,es=new I,Yi=new I,un=new I,ns=new I,Ki=new I,is=new I;class Ca{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$e)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$e.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($e.copy(this.origin).addScaledVector(this.direction,e),$e.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){es.copy(t).add(e).multiplyScalar(.5),Yi.copy(e).sub(t).normalize(),un.copy(this.origin).sub(es);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Yi),o=un.dot(this.direction),l=-un.dot(Yi),c=un.lengthSq(),u=Math.abs(1-a*a);let d,p,m,g;if(u>0)if(d=a*l-o,p=a*o-l,g=s*u,d>=0)if(p>=-g)if(p<=g){const x=1/u;d*=x,p*=x,m=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+p*(p+2*l)+c);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(es).addScaledVector(Yi,p),m}intersectSphere(t,e){$e.subVectors(t.center,this.origin);const n=$e.dot(this.direction),r=$e.dot($e)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,r=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,r=(t.min.x-p.x)*c),u>=0?(s=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(s=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,$e)!==null}intersectTriangle(t,e,n,r,s){ns.subVectors(e,t),Ki.subVectors(n,t),is.crossVectors(ns,Ki);let a=this.direction.dot(is),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;un.subVectors(this.origin,t);const l=o*this.direction.dot(Ki.crossVectors(un,Ki));if(l<0)return null;const c=o*this.direction.dot(ns.cross(un));if(c<0||l+c>a)return null;const u=-o*un.dot(is);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,r,s,a,o,l,c,u,d,p,m,g,x,f){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,d,p,m,g,x,f)}set(t,e,n,r,s,a,o,l,c,u,d,p,m,g,x,f){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=m,h[7]=g,h[11]=x,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/qn.setFromMatrixColumn(t,0).length(),s=1/qn.setFromMatrixColumn(t,1).length(),a=1/qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const p=a*u,m=a*d,g=o*u,x=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=p-x*c,e[9]=-o*l,e[2]=x-p*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*u,m=l*d,g=c*u,x=c*d;e[0]=p+x*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=x+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*u,m=l*d,g=c*u,x=c*d;e[0]=p-x*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=x-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*u,m=a*d,g=o*u,x=o*d;e[0]=l*u,e[4]=g*c-m,e[8]=p*c+x,e[1]=l*d,e[5]=x*c+p,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,m=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=x-p*d,e[8]=g*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+g,e[10]=p-x*d}else if(t.order==="XZY"){const p=a*l,m=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=p*d+x,e[5]=a*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*u,e[10]=x*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jc,t,Qc)}lookAt(t,e,n){const r=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),hn.crossVectors(n,be),hn.lengthSq()===0&&(Math.abs(n.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),hn.crossVectors(n,be)),hn.normalize(),$i.crossVectors(be,hn),r[0]=hn.x,r[4]=$i.x,r[8]=be.x,r[1]=hn.y,r[5]=$i.y,r[9]=be.y,r[2]=hn.z,r[6]=$i.z,r[10]=be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],m=n[13],g=n[2],x=n[6],f=n[10],h=n[14],y=n[3],E=n[7],A=n[11],C=n[15],w=r[0],b=r[4],U=r[8],j=r[12],_=r[1],S=r[5],G=r[9],B=r[13],q=r[2],K=r[6],V=r[10],$=r[14],H=r[3],ot=r[7],lt=r[11],_t=r[15];return s[0]=a*w+o*_+l*q+c*H,s[4]=a*b+o*S+l*K+c*ot,s[8]=a*U+o*G+l*V+c*lt,s[12]=a*j+o*B+l*$+c*_t,s[1]=u*w+d*_+p*q+m*H,s[5]=u*b+d*S+p*K+m*ot,s[9]=u*U+d*G+p*V+m*lt,s[13]=u*j+d*B+p*$+m*_t,s[2]=g*w+x*_+f*q+h*H,s[6]=g*b+x*S+f*K+h*ot,s[10]=g*U+x*G+f*V+h*lt,s[14]=g*j+x*B+f*$+h*_t,s[3]=y*w+E*_+A*q+C*H,s[7]=y*b+E*S+A*K+C*ot,s[11]=y*U+E*G+A*V+C*lt,s[15]=y*j+E*B+A*$+C*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],p=t[10],m=t[14],g=t[3],x=t[7],f=t[11],h=t[15];return g*(+s*l*d-r*c*d-s*o*p+n*c*p+r*o*m-n*l*m)+x*(+e*l*m-e*c*p+s*a*p-r*a*m+r*c*u-s*l*u)+f*(+e*c*d-e*o*m-s*a*d+n*a*m+s*o*u-n*c*u)+h*(-r*o*u-e*l*d+e*o*p+r*a*d-n*a*p+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],p=t[10],m=t[11],g=t[12],x=t[13],f=t[14],h=t[15],y=d*f*c-x*p*c+x*l*m-o*f*m-d*l*h+o*p*h,E=g*p*c-u*f*c-g*l*m+a*f*m+u*l*h-a*p*h,A=u*x*c-g*d*c+g*o*m-a*x*m-u*o*h+a*d*h,C=g*d*l-u*x*l-g*o*p+a*x*p+u*o*f-a*d*f,w=e*y+n*E+r*A+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=y*b,t[1]=(x*p*s-d*f*s-x*r*m+n*f*m+d*r*h-n*p*h)*b,t[2]=(o*f*s-x*l*s+x*r*c-n*f*c-o*r*h+n*l*h)*b,t[3]=(d*l*s-o*p*s-d*r*c+n*p*c+o*r*m-n*l*m)*b,t[4]=E*b,t[5]=(u*f*s-g*p*s+g*r*m-e*f*m-u*r*h+e*p*h)*b,t[6]=(g*l*s-a*f*s-g*r*c+e*f*c+a*r*h-e*l*h)*b,t[7]=(a*p*s-u*l*s+u*r*c-e*p*c-a*r*m+e*l*m)*b,t[8]=A*b,t[9]=(g*d*s-u*x*s-g*n*m+e*x*m+u*n*h-e*d*h)*b,t[10]=(a*x*s-g*o*s+g*n*c-e*x*c-a*n*h+e*o*h)*b,t[11]=(u*o*s-a*d*s-u*n*c+e*d*c+a*n*m-e*o*m)*b,t[12]=C*b,t[13]=(u*x*r-g*d*r+g*n*p-e*x*p-u*n*f+e*d*f)*b,t[14]=(g*o*r-a*x*r-g*n*l+e*x*l+a*n*f-e*o*f)*b,t[15]=(a*d*r-u*o*r+u*n*l-e*d*l-a*n*p+e*o*p)*b,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,d=o+o,p=s*c,m=s*u,g=s*d,x=a*u,f=a*d,h=o*d,y=l*c,E=l*u,A=l*d,C=n.x,w=n.y,b=n.z;return r[0]=(1-(x+h))*C,r[1]=(m+A)*C,r[2]=(g-E)*C,r[3]=0,r[4]=(m-A)*w,r[5]=(1-(p+h))*w,r[6]=(f+y)*w,r[7]=0,r[8]=(g+E)*b,r[9]=(f-y)*b,r[10]=(1-(p+x))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=qn.set(r[0],r[1],r[2]).length();const a=qn.set(r[4],r[5],r[6]).length(),o=qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ge.copy(this);const c=1/s,u=1/a,d=1/o;return Ge.elements[0]*=c,Ge.elements[1]*=c,Ge.elements[2]*=c,Ge.elements[4]*=u,Ge.elements[5]*=u,Ge.elements[6]*=u,Ge.elements[8]*=d,Ge.elements[9]*=d,Ge.elements[10]*=d,e.setFromRotationMatrix(Ge),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=nn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),d=(e+t)/(e-t),p=(n+r)/(n-r);let m,g;if(o===nn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Pr)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=nn){const l=this.elements,c=1/(e-t),u=1/(n-r),d=1/(a-s),p=(e+t)*c,m=(n+r)*u;let g,x;if(o===nn)g=(a+s)*d,x=-2*d;else if(o===Pr)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qn=new I,Ge=new Jt,Jc=new I(0,0,0),Qc=new I(1,1,1),hn=new I,$i=new I,be=new I,ja=new Jt,Ja=new Mi;class an{constructor(t=0,e=0,n=0,r=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ja.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ja,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ja.setFromEuler(this),this.setFromQuaternion(Ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class wl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tu=0;const Qa=new I,Yn=new Mi,Ze=new Jt,Zi=new I,wi=new I,eu=new I,nu=new Mi,to=new I(1,0,0),eo=new I(0,1,0),no=new I(0,0,1),io={type:"added"},iu={type:"removed"},Kn={type:"childadded",child:null},rs={type:"childremoved",child:null};class _e extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new I,e=new an,n=new Mi,r=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Pt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.premultiply(Yn),this}rotateX(t){return this.rotateOnAxis(to,t)}rotateY(t){return this.rotateOnAxis(eo,t)}rotateZ(t){return this.rotateOnAxis(no,t)}translateOnAxis(t,e){return Qa.copy(t).applyQuaternion(this.quaternion),this.position.add(Qa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(to,t)}translateY(t){return this.translateOnAxis(eo,t)}translateZ(t){return this.translateOnAxis(no,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ze.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zi.copy(t):Zi.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ze.lookAt(wi,Zi,this.up):Ze.lookAt(Zi,wi,this.up),this.quaternion.setFromRotationMatrix(Ze),r&&(Ze.extractRotation(r.matrixWorld),Yn.setFromRotationMatrix(Ze),this.quaternion.premultiply(Yn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(io),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(iu),rs.child=t,this.dispatchEvent(rs),rs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ze.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ze.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ze),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(io),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,t,eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,nu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),p=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}_e.DEFAULT_UP=new I(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new I,je=new I,ss=new I,Je=new I,$n=new I,Zn=new I,ro=new I,as=new I,os=new I,ls=new I,cs=new te,us=new te,hs=new te;class ke{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),He.subVectors(t,e),r.cross(He);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){He.subVectors(r,e),je.subVectors(n,e),ss.subVectors(t,e);const a=He.dot(He),o=He.dot(je),l=He.dot(ss),c=je.dot(je),u=je.dot(ss),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,m=(c*l-o*u)*p,g=(a*u-o*l)*p;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Je)===null?!1:Je.x>=0&&Je.y>=0&&Je.x+Je.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Je)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Je.x),l.addScaledVector(a,Je.y),l.addScaledVector(o,Je.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return cs.setScalar(0),us.setScalar(0),hs.setScalar(0),cs.fromBufferAttribute(t,e),us.fromBufferAttribute(t,n),hs.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(cs,s.x),a.addScaledVector(us,s.y),a.addScaledVector(hs,s.z),a}static isFrontFacing(t,e,n,r){return He.subVectors(n,e),je.subVectors(t,e),He.cross(je).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),je.subVectors(this.a,this.b),He.cross(je).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return ke.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;$n.subVectors(r,n),Zn.subVectors(s,n),as.subVectors(t,n);const l=$n.dot(as),c=Zn.dot(as);if(l<=0&&c<=0)return e.copy(n);os.subVectors(t,r);const u=$n.dot(os),d=Zn.dot(os);if(u>=0&&d<=u)return e.copy(r);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector($n,a);ls.subVectors(t,s);const m=$n.dot(ls),g=Zn.dot(ls);if(g>=0&&m<=g)return e.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Zn,o);const f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return ro.subVectors(s,r),o=(d-u)/(d-u+(m-g)),e.copy(r).addScaledVector(ro,o);const h=1/(f+x+p);return a=x*h,o=p*h,e.copy(n).addScaledVector($n,a).addScaledVector(Zn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},ji={h:0,s:0,l:0};function fs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=kt.workingColorSpace){if(t=Gc(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=fs(a,s,t+1/3),this.g=fs(a,s,t),this.b=fs(a,s,t-1/3)}return kt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ve){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=Rl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return kt.fromWorkingColorSpace(ue.copy(this),t),Math.round(Me(ue.r*255,0,255))*65536+Math.round(Me(ue.g*255,0,255))*256+Math.round(Me(ue.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.fromWorkingColorSpace(ue.copy(this),e);const n=ue.r,r=ue.g,s=ue.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=kt.workingColorSpace){return kt.fromWorkingColorSpace(ue.copy(this),e),t.r=ue.r,t.g=ue.g,t.b=ue.b,t}getStyle(t=Ve){kt.fromWorkingColorSpace(ue.copy(this),t);const e=ue.r,n=ue.g,r=ue.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(fn),this.setHSL(fn.h+t,fn.s+e,fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fn),t.getHSL(ji);const n=Kr(fn.h,ji.h,e),r=Kr(fn.s,ji.s,e),s=Kr(fn.l,ji.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ue=new Lt;Lt.NAMES=Rl;let ru=0;class Si extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=oi,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ds,this.blendDst=Us,this.blendEquation=tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ds&&(n.blendSrc=this.blendSrc),this.blendDst!==Us&&(n.blendDst=this.blendDst),this.blendEquation!==tn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Br extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ie=new I,Ji=new Yt;class le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xa,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ji.fromBufferAttribute(this,e),Ji.applyMatrix3(t),this.setXY(e,Ji.x,Ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix3(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix4(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyNormalMatrix(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.transformDirection(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xa&&(t.usage=this.usage),t}}class Cl extends le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pl extends le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ee extends le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let su=0;const Ue=new Jt,ds=new _e,jn=new I,we=new Bi,Ri=new Bi,ae=new I;class Le extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tl(t)?Pl:Cl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return ds.lookAt(t),ds.updateMatrix(),this.applyMatrix4(ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];we.setFromBufferAttribute(s),this.morphTargetsRelative?(ae.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(ae),ae.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(ae)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ri.setFromBufferAttribute(o),this.morphTargetsRelative?(ae.addVectors(we.min,Ri.min),we.expandByPoint(ae),ae.addVectors(we.max,Ri.max),we.expandByPoint(ae)):(we.expandByPoint(Ri.min),we.expandByPoint(Ri.max))}we.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)ae.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ae));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ae.fromBufferAttribute(o,c),l&&(jn.fromBufferAttribute(t,c),ae.add(jn)),r=Math.max(r,n.distanceToSquared(ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new I,l[U]=new I;const c=new I,u=new I,d=new I,p=new Yt,m=new Yt,g=new Yt,x=new I,f=new I;function h(U,j,_){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,j),d.fromBufferAttribute(n,_),p.fromBufferAttribute(s,U),m.fromBufferAttribute(s,j),g.fromBufferAttribute(s,_),u.sub(c),d.sub(c),m.sub(p),g.sub(p);const S=1/(m.x*g.y-g.x*m.y);isFinite(S)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(S),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(S),o[U].add(x),o[j].add(x),o[_].add(x),l[U].add(f),l[j].add(f),l[_].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let U=0,j=y.length;U<j;++U){const _=y[U],S=_.start,G=_.count;for(let B=S,q=S+G;B<q;B+=3)h(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const E=new I,A=new I,C=new I,w=new I;function b(U){C.fromBufferAttribute(r,U),w.copy(C);const j=o[U];E.copy(j),E.sub(C.multiplyScalar(C.dot(j))).normalize(),A.crossVectors(w,j);const S=A.dot(l[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,S)}for(let U=0,j=y.length;U<j;++U){const _=y[U],S=_.start,G=_.count;for(let B=S,q=S+G;B<q;B+=3)b(t.getX(B+0)),b(t.getX(B+1)),b(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(t)for(let p=0,m=t.count;p<m;p+=3){const g=t.getX(p+0),x=t.getX(p+1),f=t.getX(p+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,f),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ae.fromBufferAttribute(t,e),ae.normalize(),t.setXYZ(e,ae.x,ae.y,ae.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u);let m=0,g=0;for(let x=0,f=l.length;x<f;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*u;for(let h=0;h<u;h++)p[g++]=c[m++]}return new le(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],m=t(p,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const so=new Jt,Tn=new Ca,Qi=new zi,ao=new I,tr=new I,er=new I,nr=new I,ps=new I,ir=new I,oo=new I,rr=new I;class de extends _e{constructor(t=new Le,e=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ir.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ps.fromBufferAttribute(d,t),a?ir.addScaledVector(ps,u):ir.addScaledVector(ps.sub(e),u))}e.add(ir)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(s),Tn.copy(t.ray).recast(t.near),!(Qi.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(Qi,ao)===null||Tn.origin.distanceToSquared(ao)>(t.far-t.near)**2))&&(so.copy(s).invert(),Tn.copy(t.ray).applyMatrix4(so),!(n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Tn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){const f=p[g],h=a[f.materialIndex],y=Math.max(f.start,m.start),E=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let A=y,C=E;A<C;A+=3){const w=o.getX(A),b=o.getX(A+1),U=o.getX(A+2);r=sr(this,h,t,n,c,u,d,w,b,U),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let f=g,h=x;f<h;f+=3){const y=o.getX(f),E=o.getX(f+1),A=o.getX(f+2);r=sr(this,a,t,n,c,u,d,y,E,A),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){const f=p[g],h=a[f.materialIndex],y=Math.max(f.start,m.start),E=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let A=y,C=E;A<C;A+=3){const w=A,b=A+1,U=A+2;r=sr(this,h,t,n,c,u,d,w,b,U),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=g,h=x;f<h;f+=3){const y=f,E=f+1,A=f+2;r=sr(this,a,t,n,c,u,d,y,E,A),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function au(i,t,e,n,r,s,a,o){let l;if(t.side===pe?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===gn,o),l===null)return null;rr.copy(o),rr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(rr);return c<e.near||c>e.far?null:{distance:c,point:rr.clone(),object:i}}function sr(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,tr),i.getVertexPosition(l,er),i.getVertexPosition(c,nr);const u=au(i,t,e,n,tr,er,nr,oo);if(u){const d=new I;ke.getBarycoord(oo,tr,er,nr,d),r&&(u.uv=ke.getInterpolatedAttribute(r,o,l,c,d,new Yt)),s&&(u.uv1=ke.getInterpolatedAttribute(s,o,l,c,d,new Yt)),a&&(u.normal=ke.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new I,materialIndex:0};ke.getNormal(tr,er,nr,p.normal),u.face=p,u.barycoord=d}return u}class Gi extends Le{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let p=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(d,2));function g(x,f,h,y,E,A,C,w,b,U,j){const _=A/b,S=C/U,G=A/2,B=C/2,q=w/2,K=b+1,V=U+1;let $=0,H=0;const ot=new I;for(let lt=0;lt<V;lt++){const _t=lt*S-B;for(let zt=0;zt<K;zt++){const Wt=zt*_-G;ot[x]=Wt*y,ot[f]=_t*E,ot[h]=q,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[f]=0,ot[h]=w>0?1:-1,u.push(ot.x,ot.y,ot.z),d.push(zt/b),d.push(1-lt/U),$+=1}}for(let lt=0;lt<U;lt++)for(let _t=0;_t<b;_t++){const zt=p+_t+K*lt,Wt=p+_t+K*(lt+1),k=p+(_t+1)+K*(lt+1),J=p+(_t+1)+K*lt;l.push(zt,Wt,J),l.push(Wt,k,J),H+=6}o.addGroup(m,H,j),m+=H,p+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function fe(i){const t={};for(let e=0;e<i.length;e++){const n=mi(i[e]);for(const r in n)t[r]=n[r]}return t}function ou(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ll(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}const lu={clone:mi,merge:fe};var cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pe extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cu,this.fragmentShader=uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mi(t.uniforms),this.uniformsGroups=ou(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dl extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dn=new I,lo=new Yt,co=new Yt;class Ne extends Dl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dn.x,dn.y).multiplyScalar(-t/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dn.x,dn.y).multiplyScalar(-t/dn.z)}getViewSize(t,e){return this.getViewBounds(t,lo,co),e.subVectors(co,lo)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Jn=-90,Qn=1;class hu extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ne(Jn,Qn,t,e);r.layers=this.layers,this.add(r);const s=new Ne(Jn,Qn,t,e);s.layers=this.layers,this.add(s);const a=new Ne(Jn,Qn,t,e);a.layers=this.layers,this.add(a);const o=new Ne(Jn,Qn,t,e);o.layers=this.layers,this.add(o);const l=new Ne(Jn,Qn,t,e);l.layers=this.layers,this.add(l);const c=new Ne(Jn,Qn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(d,p,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ul extends me{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:hi,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fu extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ul(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ce}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gi(5,5,5),s=new Pe({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pe,blending:mn});s.uniforms.tEquirect.value=e;const a=new de(r,s),o=e.minFilter;return e.minFilter===In&&(e.minFilter=Ce),new hu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const ms=new I,du=new I,pu=new Pt;class Rn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ms.subVectors(n,e).cross(du.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ms),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pu.getNormalMatrix(t),r=this.coplanarPoint(ms).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new zi,ar=new I;class Il{constructor(t=new Rn,e=new Rn,n=new Rn,r=new Rn,s=new Rn,a=new Rn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=nn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],p=r[7],m=r[8],g=r[9],x=r[10],f=r[11],h=r[12],y=r[13],E=r[14],A=r[15];if(n[0].setComponents(l-s,p-c,f-m,A-h).normalize(),n[1].setComponents(l+s,p+c,f+m,A+h).normalize(),n[2].setComponents(l+a,p+u,f+g,A+y).normalize(),n[3].setComponents(l-a,p-u,f-g,A-y).normalize(),n[4].setComponents(l-o,p-d,f-x,A-E).normalize(),e===nn)n[5].setComponents(l+o,p+d,f+x,A+E).normalize();else if(e===Pr)n[5].setComponents(o,d,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(t){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(t.matrixWorld),this.intersectsSphere(An)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ar.x=r.normal.x>0?t.max.x:t.min.x,ar.y=r.normal.y>0?t.max.y:t.min.y,ar.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nl(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function mu(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<d.length;m++){const g=d[p],x=d[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,d[p]=x)}d.length=p+1;for(let m=0,g=d.length;m<g;m++){const x=d[m];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Bn extends Le{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=t/o,p=e/l,m=[],g=[],x=[],f=[];for(let h=0;h<u;h++){const y=h*p-a;for(let E=0;E<c;E++){const A=E*d-s;g.push(A,-y,0),x.push(0,0,1),f.push(E/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){const E=y+c*h,A=y+c*(h+1),C=y+1+c*(h+1),w=y+1+c*h;m.push(E,A,w),m.push(A,C,w)}this.setIndex(m),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(x,3)),this.setAttribute("uv",new Ee(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.widthSegments,t.heightSegments)}}var _u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cu=`#ifdef USE_IRIDESCENCE
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
#endif`,Pu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zu=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Hu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ku=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,$u=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zu=`#ifdef USE_ENVMAP
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
#endif`,ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ih=`#ifdef USE_GRADIENTMAP
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
}`,rh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ah=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,lh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ch=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ph=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,mh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_h=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Th=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ah=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ch=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ph=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ih=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$h=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sf=`#ifdef USE_SKINNING
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
#endif`,af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hf=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gf=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,yf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Af=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Uf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Nf=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Of=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,zf=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Hf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ct={alphahash_fragment:_u,alphahash_pars_fragment:gu,alphamap_fragment:vu,alphamap_pars_fragment:xu,alphatest_fragment:Mu,alphatest_pars_fragment:Su,aomap_fragment:Eu,aomap_pars_fragment:yu,batching_pars_vertex:Tu,batching_vertex:Au,begin_vertex:bu,beginnormal_vertex:wu,bsdfs:Ru,iridescence_fragment:Cu,bumpmap_pars_fragment:Pu,clipping_planes_fragment:Lu,clipping_planes_pars_fragment:Du,clipping_planes_pars_vertex:Uu,clipping_planes_vertex:Iu,color_fragment:Nu,color_pars_fragment:Fu,color_pars_vertex:Ou,color_vertex:Bu,common:zu,cube_uv_reflection_fragment:Gu,defaultnormal_vertex:Hu,displacementmap_pars_vertex:Vu,displacementmap_vertex:ku,emissivemap_fragment:Wu,emissivemap_pars_fragment:Xu,colorspace_fragment:qu,colorspace_pars_fragment:Yu,envmap_fragment:Ku,envmap_common_pars_fragment:$u,envmap_pars_fragment:Zu,envmap_pars_vertex:ju,envmap_physical_pars_fragment:lh,envmap_vertex:Ju,fog_vertex:Qu,fog_pars_vertex:th,fog_fragment:eh,fog_pars_fragment:nh,gradientmap_pars_fragment:ih,lightmap_pars_fragment:rh,lights_lambert_fragment:sh,lights_lambert_pars_fragment:ah,lights_pars_begin:oh,lights_toon_fragment:ch,lights_toon_pars_fragment:uh,lights_phong_fragment:hh,lights_phong_pars_fragment:fh,lights_physical_fragment:dh,lights_physical_pars_fragment:ph,lights_fragment_begin:mh,lights_fragment_maps:_h,lights_fragment_end:gh,logdepthbuf_fragment:vh,logdepthbuf_pars_fragment:xh,logdepthbuf_pars_vertex:Mh,logdepthbuf_vertex:Sh,map_fragment:Eh,map_pars_fragment:yh,map_particle_fragment:Th,map_particle_pars_fragment:Ah,metalnessmap_fragment:bh,metalnessmap_pars_fragment:wh,morphinstance_vertex:Rh,morphcolor_vertex:Ch,morphnormal_vertex:Ph,morphtarget_pars_vertex:Lh,morphtarget_vertex:Dh,normal_fragment_begin:Uh,normal_fragment_maps:Ih,normal_pars_fragment:Nh,normal_pars_vertex:Fh,normal_vertex:Oh,normalmap_pars_fragment:Bh,clearcoat_normal_fragment_begin:zh,clearcoat_normal_fragment_maps:Gh,clearcoat_pars_fragment:Hh,iridescence_pars_fragment:Vh,opaque_fragment:kh,packing:Wh,premultiplied_alpha_fragment:Xh,project_vertex:qh,dithering_fragment:Yh,dithering_pars_fragment:Kh,roughnessmap_fragment:$h,roughnessmap_pars_fragment:Zh,shadowmap_pars_fragment:jh,shadowmap_pars_vertex:Jh,shadowmap_vertex:Qh,shadowmask_pars_fragment:tf,skinbase_vertex:ef,skinning_pars_vertex:nf,skinning_vertex:rf,skinnormal_vertex:sf,specularmap_fragment:af,specularmap_pars_fragment:of,tonemapping_fragment:lf,tonemapping_pars_fragment:cf,transmission_fragment:uf,transmission_pars_fragment:hf,uv_pars_fragment:ff,uv_pars_vertex:df,uv_vertex:pf,worldpos_vertex:mf,background_vert:_f,background_frag:gf,backgroundCube_vert:vf,backgroundCube_frag:xf,cube_vert:Mf,cube_frag:Sf,depth_vert:Ef,depth_frag:yf,distanceRGBA_vert:Tf,distanceRGBA_frag:Af,equirect_vert:bf,equirect_frag:wf,linedashed_vert:Rf,linedashed_frag:Cf,meshbasic_vert:Pf,meshbasic_frag:Lf,meshlambert_vert:Df,meshlambert_frag:Uf,meshmatcap_vert:If,meshmatcap_frag:Nf,meshnormal_vert:Ff,meshnormal_frag:Of,meshphong_vert:Bf,meshphong_frag:zf,meshphysical_vert:Gf,meshphysical_frag:Hf,meshtoon_vert:Vf,meshtoon_frag:kf,points_vert:Wf,points_frag:Xf,shadow_vert:qf,shadow_frag:Yf,sprite_vert:Kf,sprite_frag:$f},et={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Xe={basic:{uniforms:fe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:fe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:fe([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:fe([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:fe([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:fe([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:fe([et.points,et.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:fe([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:fe([et.common,et.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:fe([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:fe([et.sprite,et.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:fe([et.common,et.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:fe([et.lights,et.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Xe.physical={uniforms:fe([Xe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const or={r:0,b:0,g:0},bn=new an,Zf=new Jt;function jf(i,t,e,n,r,s,a){const o=new Lt(0);let l=s===!0?0:1,c,u,d=null,p=0,m=null;function g(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?e:t).get(E)),E}function x(y){let E=!1;const A=g(y);A===null?h(o,l):A&&A.isColor&&(h(A,1),E=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(y,E){const A=g(E);A&&(A.isCubeTexture||A.mapping===Fr)?(u===void 0&&(u=new de(new Gi(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:mi(Xe.backgroundCube.uniforms),vertexShader:Xe.backgroundCube.vertexShader,fragmentShader:Xe.backgroundCube.fragmentShader,side:pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),bn.copy(E.backgroundRotation),bn.x*=-1,bn.y*=-1,bn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zf.makeRotationFromEuler(bn)),u.material.toneMapped=kt.getTransfer(A.colorSpace)!==jt,(d!==A||p!==A.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=A,p=A.version,m=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new de(new Bn(2,2),new Pe({name:"BackgroundMaterial",uniforms:mi(Xe.background.uniforms),vertexShader:Xe.background.vertexShader,fragmentShader:Xe.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=kt.getTransfer(A.colorSpace)!==jt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||p!==A.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=A,p=A.version,m=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function h(y,E){y.getRGB(or,Ll(i)),n.buffers.color.setClear(or.r,or.g,or.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),l=E,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,h(o,l)},render:x,addToRenderList:f}}function Jf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,a=!1;function o(_,S,G,B,q){let K=!1;const V=d(B,G,S);s!==V&&(s=V,c(s.object)),K=m(_,B,G,q),K&&g(_,B,G,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,A(_,S,G,B),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function d(_,S,G){const B=G.wireframe===!0;let q=n[_.id];q===void 0&&(q={},n[_.id]=q);let K=q[S.id];K===void 0&&(K={},q[S.id]=K);let V=K[B];return V===void 0&&(V=p(l()),K[B]=V),V}function p(_){const S=[],G=[],B=[];for(let q=0;q<e;q++)S[q]=0,G[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:G,attributeDivisors:B,object:_,attributes:{},index:null}}function m(_,S,G,B){const q=s.attributes,K=S.attributes;let V=0;const $=G.getAttributes();for(const H in $)if($[H].location>=0){const lt=q[H];let _t=K[H];if(_t===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor)),lt===void 0||lt.attribute!==_t||_t&&lt.data!==_t.data)return!0;V++}return s.attributesNum!==V||s.index!==B}function g(_,S,G,B){const q={},K=S.attributes;let V=0;const $=G.getAttributes();for(const H in $)if($[H].location>=0){let lt=K[H];lt===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(lt=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(lt=_.instanceColor));const _t={};_t.attribute=lt,lt&&lt.data&&(_t.data=lt.data),q[H]=_t,V++}s.attributes=q,s.attributesNum=V,s.index=B}function x(){const _=s.newAttributes;for(let S=0,G=_.length;S<G;S++)_[S]=0}function f(_){h(_,0)}function h(_,S){const G=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;G[_]=1,B[_]===0&&(i.enableVertexAttribArray(_),B[_]=1),q[_]!==S&&(i.vertexAttribDivisor(_,S),q[_]=S)}function y(){const _=s.newAttributes,S=s.enabledAttributes;for(let G=0,B=S.length;G<B;G++)S[G]!==_[G]&&(i.disableVertexAttribArray(G),S[G]=0)}function E(_,S,G,B,q,K,V){V===!0?i.vertexAttribIPointer(_,S,G,q,K):i.vertexAttribPointer(_,S,G,B,q,K)}function A(_,S,G,B){x();const q=B.attributes,K=G.getAttributes(),V=S.defaultAttributeValues;for(const $ in K){const H=K[$];if(H.location>=0){let ot=q[$];if(ot===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor)),ot!==void 0){const lt=ot.normalized,_t=ot.itemSize,zt=t.get(ot);if(zt===void 0)continue;const Wt=zt.buffer,k=zt.type,J=zt.bytesPerElement,pt=k===i.INT||k===i.UNSIGNED_INT||ot.gpuType===Ea;if(ot.isInterleavedBufferAttribute){const ct=ot.data,wt=ct.stride,St=ot.offset;if(ct.isInstancedInterleavedBuffer){for(let It=0;It<H.locationSize;It++)h(H.location+It,ct.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let It=0;It<H.locationSize;It++)f(H.location+It);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let It=0;It<H.locationSize;It++)E(H.location+It,_t/H.locationSize,k,lt,wt*J,(St+_t/H.locationSize*It)*J,pt)}else{if(ot.isInstancedBufferAttribute){for(let ct=0;ct<H.locationSize;ct++)h(H.location+ct,ot.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ct=0;ct<H.locationSize;ct++)f(H.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let ct=0;ct<H.locationSize;ct++)E(H.location+ct,_t/H.locationSize,k,lt,_t*J,_t/H.locationSize*ct*J,pt)}}else if(V!==void 0){const lt=V[$];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(H.location,lt);break;case 3:i.vertexAttrib3fv(H.location,lt);break;case 4:i.vertexAttrib4fv(H.location,lt);break;default:i.vertexAttrib1fv(H.location,lt)}}}}y()}function C(){U();for(const _ in n){const S=n[_];for(const G in S){const B=S[G];for(const q in B)u(B[q].object),delete B[q];delete S[G]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;const S=n[_.id];for(const G in S){const B=S[G];for(const q in B)u(B[q].object),delete B[q];delete S[G]}delete n[_.id]}function b(_){for(const S in n){const G=n[S];if(G[_.id]===void 0)continue;const B=G[_.id];for(const q in B)u(B[q].object),delete B[q];delete G[_.id]}}function U(){j(),a=!0,s!==r&&(s=r,c(s.object))}function j(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:j,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:f,disableUnusedAttributes:y}}function Qf(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];e.update(m,n,1)}function l(c,u,d,p){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];for(let x=0;x<p.length;x++)e.update(g,n,p[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function td(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Oe&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const U=b===vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==sn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==en&&!U)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){const b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:A,vertexTextures:C,maxSamples:w}}function ed(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Rn,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||n!==0||r;return r=p,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,m){const g=d.clippingPlanes,x=d.clipIntersection,f=d.clipShadows,h=i.get(d);if(!r||g===null||g.length===0||s&&!f)s?u(null):c();else{const y=s?0:n,E=y*4;let A=h.clippingState||null;l.value=A,A=u(g,p,E,m);for(let C=0;C!==E;++C)A[C]=e[C];h.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,p,m,g){const x=d!==null?d.length:0;let f=null;if(x!==0){if(f=l.value,g!==!0||f===null){const h=m+x*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<h)&&(f=new Float32Array(h));for(let E=0,A=m;E!==x;++E,A+=4)a.copy(d[E]).applyMatrix4(y,o),a.normal.toArray(f,A),f[A+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function nd(i){let t=new WeakMap;function e(a,o){return o===Hs?a.mapping=hi:o===Vs&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Hs||o===Vs)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new fu(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Fl extends Dl{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const si=4,uo=[.125,.215,.35,.446,.526,.582],Pn=20,_s=new Fl,ho=new Lt;let gs=null,vs=0,xs=0,Ms=!1;const Cn=(1+Math.sqrt(5))/2,ti=1/Cn,fo=[new I(-Cn,ti,0),new I(Cn,ti,0),new I(-ti,0,Cn),new I(ti,0,Cn),new I(0,Cn,-ti),new I(0,Cn,ti),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class po{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){gs=this._renderer.getRenderTarget(),vs=this._renderer.getActiveCubeFace(),xs=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gs,vs,xs),this._renderer.xr.enabled=Ms,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gs=this._renderer.getRenderTarget(),vs=this._renderer.getActiveCubeFace(),xs=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:vi,format:Oe,colorSpace:Mn,depthBuffer:!1},r=mo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=id(s)),this._blurMaterial=rd(s,t,e)}return r}_compileMaterial(t){const e=new de(this._lodPlanes[0],t);this._renderer.compile(e,_s)}_sceneToCubeUV(t,e,n,r){const o=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(ho),u.toneMapping=_n,u.autoClear=!1;const m=new Br({name:"PMREM.Background",side:pe,depthWrite:!1,depthTest:!1}),g=new de(new Gi,m);let x=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,x=!0):(m.color.copy(ho),x=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):y===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const E=this._cubeSize;lr(r,y*E,h>2?E:0,E,E),u.setRenderTarget(r),x&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===hi||t.mapping===fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=go()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_o());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,_s)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fo[(r-s-1)%fo.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new de(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pn-1),x=s/g,f=isFinite(s)?1+Math.floor(u*x):Pn;f>Pn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Pn}`);const h=[];let y=0;for(let b=0;b<Pn;++b){const U=b/x,j=Math.exp(-U*U/2);h.push(j),b===0?y+=j:b<f&&(y+=2*j)}for(let b=0;b<h.length;b++)h[b]=h[b]/y;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:E}=this;p.dTheta.value=g,p.mipInt.value=E-n;const A=this._sizeLods[r],C=3*A*(r>E-si?r-E+si:0),w=4*(this._cubeSize-A);lr(e,C,w,3*A,2*A),l.setRenderTarget(e),l.render(d,_s)}}function id(i){const t=[],e=[],n=[];let r=i;const s=i-si+1+uo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-si?l=uo[a-i+si-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,x=3,f=2,h=1,y=new Float32Array(x*g*m),E=new Float32Array(f*g*m),A=new Float32Array(h*g*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,U=w>2?0:-1,j=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];y.set(j,x*g*w),E.set(p,f*g*w);const _=[w,w,w,w,w,w];A.set(_,h*g*w)}const C=new Le;C.setAttribute("position",new le(y,x)),C.setAttribute("uv",new le(E,f)),C.setAttribute("faceIndex",new le(A,h)),t.push(C),r>si&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function mo(i,t,e){const n=new vn(i,t,e);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function rd(i,t,e){const n=new Float32Array(Pn),r=new I(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function _o(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function go(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Pa(){return`

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
	`}function sd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Hs||l===Vs,u=l===hi||l===fi;if(c||u){let d=t.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new po(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new po(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ad(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Er("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function od(i,t,e,n){const r={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const x=p.morphAttributes[g];for(let f=0,h=x.length;f<h;f++)t.remove(x[f])}p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,e.memory.geometries++),p}function l(d){const p=d.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const x=m[g];for(let f=0,h=x.length;f<h;f++)t.update(x[f],i.ARRAY_BUFFER)}}function c(d){const p=[],m=d.index,g=d.attributes.position;let x=0;if(m!==null){const y=m.array;x=m.version;for(let E=0,A=y.length;E<A;E+=3){const C=y[E+0],w=y[E+1],b=y[E+2];p.push(C,w,w,b,b,C)}}else if(g!==void 0){const y=g.array;x=g.version;for(let E=0,A=y.length/3-1;E<A;E+=3){const C=E+0,w=E+1,b=E+2;p.push(C,w,w,b,b,C)}}else return;const f=new(Tl(p)?Pl:Cl)(p,1);f.version=x;const h=s.get(d);h&&t.remove(h),s.set(d,f)}function u(d){const p=s.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ld(i,t,e){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,m){i.drawElements(n,m,s,p*a),e.update(m,n,1)}function c(p,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,p*a,g),e.update(m,n,g))}function u(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,p,0,g);let f=0;for(let h=0;h<g;h++)f+=m[h];e.update(f,n,1)}function d(p,m,g,x){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<p.length;h++)c(p[h]/a,m[h],x[h]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,p,0,x,0,g);let h=0;for(let y=0;y<g;y++)h+=m[y];for(let y=0;y<x.length;y++)e.update(h,n,x[y])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function cd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ud(i,t,e){const n=new WeakMap,r=new te;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let _=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var m=_;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let A=0;g===!0&&(A=1),x===!0&&(A=2),f===!0&&(A=3);let C=o.attributes.position.count*A,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const b=new Float32Array(C*w*4*d),U=new bl(b,C,w,d);U.type=en,U.needsUpdate=!0;const j=A*4;for(let S=0;S<d;S++){const G=h[S],B=y[S],q=E[S],K=C*w*4*S;for(let V=0;V<G.count;V++){const $=V*j;g===!0&&(r.fromBufferAttribute(G,V),b[K+$+0]=r.x,b[K+$+1]=r.y,b[K+$+2]=r.z,b[K+$+3]=0),x===!0&&(r.fromBufferAttribute(B,V),b[K+$+4]=r.x,b[K+$+5]=r.y,b[K+$+6]=r.z,b[K+$+7]=0),f===!0&&(r.fromBufferAttribute(q,V),b[K+$+8]=r.x,b[K+$+9]=r.y,b[K+$+10]=r.z,b[K+$+11]=q.itemSize===4?r.w:1)}}p={count:d,texture:U,size:new Yt(C,w)},n.set(o,p),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function hd(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Ol extends me{constructor(t,e,n,r,s,a,o,l,c,u=li){if(u!==li&&u!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===li&&(n=On),n===void 0&&u===pi&&(n=di),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Fe,this.minFilter=l!==void 0?l:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bl=new me,vo=new Ol(1,1),zl=new bl,Gl=new Zc,Hl=new Ul,xo=[],Mo=[],So=new Float32Array(16),Eo=new Float32Array(9),yo=new Float32Array(4);function Ei(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=xo[r];if(s===void 0&&(s=new Float32Array(r),xo[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zr(i,t){let e=Mo[t];e===void 0&&(e=new Int32Array(t),Mo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2fv(this.addr,t),se(e,t)}}function pd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(re(e,t))return;i.uniform3fv(this.addr,t),se(e,t)}}function md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4fv(this.addr,t),se(e,t)}}function _d(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;yo.set(n),i.uniformMatrix2fv(this.addr,!1,yo),se(e,n)}}function gd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;Eo.set(n),i.uniformMatrix3fv(this.addr,!1,Eo),se(e,n)}}function vd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;So.set(n),i.uniformMatrix4fv(this.addr,!1,So),se(e,n)}}function xd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Md(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2iv(this.addr,t),se(e,t)}}function Sd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;i.uniform3iv(this.addr,t),se(e,t)}}function Ed(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4iv(this.addr,t),se(e,t)}}function yd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Td(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2uiv(this.addr,t),se(e,t)}}function Ad(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;i.uniform3uiv(this.addr,t),se(e,t)}}function bd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4uiv(this.addr,t),se(e,t)}}function wd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(vo.compareFunction=yl,s=vo):s=Bl,e.setTexture2D(t||s,r)}function Rd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Gl,r)}function Cd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Hl,r)}function Pd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||zl,r)}function Ld(i){switch(i){case 5126:return fd;case 35664:return dd;case 35665:return pd;case 35666:return md;case 35674:return _d;case 35675:return gd;case 35676:return vd;case 5124:case 35670:return xd;case 35667:case 35671:return Md;case 35668:case 35672:return Sd;case 35669:case 35673:return Ed;case 5125:return yd;case 36294:return Td;case 36295:return Ad;case 36296:return bd;case 35678:case 36198:case 36298:case 36306:case 35682:return wd;case 35679:case 36299:case 36307:return Rd;case 35680:case 36300:case 36308:case 36293:return Cd;case 36289:case 36303:case 36311:case 36292:return Pd}}function Dd(i,t){i.uniform1fv(this.addr,t)}function Ud(i,t){const e=Ei(t,this.size,2);i.uniform2fv(this.addr,e)}function Id(i,t){const e=Ei(t,this.size,3);i.uniform3fv(this.addr,e)}function Nd(i,t){const e=Ei(t,this.size,4);i.uniform4fv(this.addr,e)}function Fd(i,t){const e=Ei(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Od(i,t){const e=Ei(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bd(i,t){const e=Ei(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zd(i,t){i.uniform1iv(this.addr,t)}function Gd(i,t){i.uniform2iv(this.addr,t)}function Hd(i,t){i.uniform3iv(this.addr,t)}function Vd(i,t){i.uniform4iv(this.addr,t)}function kd(i,t){i.uniform1uiv(this.addr,t)}function Wd(i,t){i.uniform2uiv(this.addr,t)}function Xd(i,t){i.uniform3uiv(this.addr,t)}function qd(i,t){i.uniform4uiv(this.addr,t)}function Yd(i,t,e){const n=this.cache,r=t.length,s=zr(e,r);re(n,s)||(i.uniform1iv(this.addr,s),se(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Bl,s[a])}function Kd(i,t,e){const n=this.cache,r=t.length,s=zr(e,r);re(n,s)||(i.uniform1iv(this.addr,s),se(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Gl,s[a])}function $d(i,t,e){const n=this.cache,r=t.length,s=zr(e,r);re(n,s)||(i.uniform1iv(this.addr,s),se(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Hl,s[a])}function Zd(i,t,e){const n=this.cache,r=t.length,s=zr(e,r);re(n,s)||(i.uniform1iv(this.addr,s),se(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||zl,s[a])}function jd(i){switch(i){case 5126:return Dd;case 35664:return Ud;case 35665:return Id;case 35666:return Nd;case 35674:return Fd;case 35675:return Od;case 35676:return Bd;case 5124:case 35670:return zd;case 35667:case 35671:return Gd;case 35668:case 35672:return Hd;case 35669:case 35673:return Vd;case 5125:return kd;case 36294:return Wd;case 36295:return Xd;case 36296:return qd;case 35678:case 36198:case 36298:case 36306:case 35682:return Yd;case 35679:case 36299:case 36307:return Kd;case 35680:case 36300:case 36308:case 36293:return $d;case 36289:case 36303:case 36311:case 36292:return Zd}}class Jd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ld(e.type)}}class Qd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jd(e.type)}}class tp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Ss=/(\w+)(\])?(\[|\.)?/g;function To(i,t){i.seq.push(t),i.map[t.id]=t}function ep(i,t,e){const n=i.name,r=n.length;for(Ss.lastIndex=0;;){const s=Ss.exec(n),a=Ss.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){To(e,c===void 0?new Jd(o,i,t):new Qd(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new tp(o),To(e,d)),e=d}}}class yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);ep(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Ao(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const np=37297;let ip=0;function rp(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function sp(i){const t=kt.getPrimaries(kt.workingColorSpace),e=kt.getPrimaries(i);let n;switch(t===e?n="":t===Cr&&e===Rr?n="LinearDisplayP3ToLinearSRGB":t===Rr&&e===Cr&&(n="LinearSRGBToLinearDisplayP3"),i){case Mn:case Or:return[n,"LinearTransferOETF"];case Ve:case Ra:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+rp(i.getShaderSource(t),a)}else return r}function ap(i,t){const e=sp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function op(i,t){let e;switch(t){case Sc:e="Linear";break;case Ec:e="Reinhard";break;case yc:e="Cineon";break;case Tc:e="ACESFilmic";break;case bc:e="AgX";break;case wc:e="Neutral";break;case Ac:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const cr=new I;function lp(){kt.getLuminanceCoefficients(cr);const i=cr.x.toFixed(4),t=cr.y.toFixed(4),e=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ui).join(`
`)}function up(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ui(i){return i!==""}function wo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ro(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(i){return i.replace(fp,pp)}const dp=new Map;function pp(i,t){let e=Ct[t];if(e===void 0){const n=dp.get(t);if(n!==void 0)e=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return va(e)}const mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Co(i){return i.replace(mp,_p)}function _p(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Po(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qe&&(t="SHADOWMAP_TYPE_VSM"),t}function vp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hi:case fi:t="ENVMAP_TYPE_CUBE";break;case Fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:t="ENVMAP_MODE_REFRACTION";break}return t}function Mp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hl:t="ENVMAP_BLENDING_MULTIPLY";break;case xc:t="ENVMAP_BLENDING_MIX";break;case Mc:t="ENVMAP_BLENDING_ADD";break}return t}function Sp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ep(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=gp(e),c=vp(e),u=xp(e),d=Mp(e),p=Sp(e),m=cp(e),g=up(s),x=r.createProgram();let f,h,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ui).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ui).join(`
`),h.length>0&&(h+=`
`)):(f=[Po(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),h=[Po(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_n?"#define TONE_MAPPING":"",e.toneMapping!==_n?Ct.tonemapping_pars_fragment:"",e.toneMapping!==_n?op("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,ap("linearToOutputTexel",e.outputColorSpace),lp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ui).join(`
`)),a=va(a),a=wo(a,e),a=Ro(a,e),o=va(o),o=wo(o,e),o=Ro(o,e),a=Co(a),o=Co(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",e.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=y+f+a,A=y+h+o,C=Ao(r,r.VERTEX_SHADER,E),w=Ao(r,r.FRAGMENT_SHADER,A);r.attachShader(x,C),r.attachShader(x,w),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(S){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(C).trim(),q=r.getShaderInfoLog(w).trim();let K=!0,V=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,C,w);else{const $=bo(r,C,"vertex"),H=bo(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+G+`
`+$+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||q==="")&&(V=!1);V&&(S.diagnostics={runnable:K,programLog:G,vertexShader:{log:B,prefix:f},fragmentShader:{log:q,prefix:h}})}r.deleteShader(C),r.deleteShader(w),U=new yr(r,x),j=hp(r,x)}let U;this.getUniforms=function(){return U===void 0&&b(this),U};let j;this.getAttributes=function(){return j===void 0&&b(this),j};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,np)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ip++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=w,this}let yp=0;class Tp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ap(t),e.set(t,n)),n}}class Ap{constructor(t){this.id=yp++,this.code=t,this.usedTimes=0}}function bp(i,t,e,n,r,s,a){const o=new wl,l=new Tp,c=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function h(_,S,G,B,q){const K=B.fog,V=q.geometry,$=_.isMeshStandardMaterial?B.environment:null,H=(_.isMeshStandardMaterial?e:t).get(_.envMap||$),ot=H&&H.mapping===Fr?H.image.height:null,lt=x[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const _t=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,zt=_t!==void 0?_t.length:0;let Wt=0;V.morphAttributes.position!==void 0&&(Wt=1),V.morphAttributes.normal!==void 0&&(Wt=2),V.morphAttributes.color!==void 0&&(Wt=3);let k,J,pt,ct;if(lt){const ve=Xe[lt];k=ve.vertexShader,J=ve.fragmentShader}else k=_.vertexShader,J=_.fragmentShader,l.update(_),pt=l.getVertexShaderID(_),ct=l.getFragmentShaderID(_);const wt=i.getRenderTarget(),St=q.isInstancedMesh===!0,It=q.isBatchedMesh===!0,qt=!!_.map,Nt=!!_.matcap,R=!!H,ye=!!_.aoMap,Dt=!!_.lightMap,Ot=!!_.bumpMap,yt=!!_.normalMap,$t=!!_.displacementMap,bt=!!_.emissiveMap,T=!!_.metalnessMap,v=!!_.roughnessMap,N=_.anisotropy>0,X=_.clearcoat>0,Z=_.dispersion>0,W=_.iridescence>0,gt=_.sheen>0,nt=_.transmission>0,ut=N&&!!_.anisotropyMap,Bt=X&&!!_.clearcoatMap,Q=X&&!!_.clearcoatNormalMap,ht=X&&!!_.clearcoatRoughnessMap,Tt=W&&!!_.iridescenceMap,At=W&&!!_.iridescenceThicknessMap,ft=gt&&!!_.sheenColorMap,Ut=gt&&!!_.sheenRoughnessMap,Rt=!!_.specularMap,Kt=!!_.specularColorMap,P=!!_.specularIntensityMap,st=nt&&!!_.transmissionMap,z=nt&&!!_.thicknessMap,Y=!!_.gradientMap,it=!!_.alphaMap,at=_.alphaTest>0,Ft=!!_.alphaHash,ne=!!_.extensions;let ge=_n;_.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(ge=i.toneMapping);const Gt={shaderID:lt,shaderType:_.type,shaderName:_.name,vertexShader:k,fragmentShader:J,defines:_.defines,customVertexShaderID:pt,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:It,batchingColor:It&&q._colorsTexture!==null,instancing:St,instancingColor:St&&q.instanceColor!==null,instancingMorph:St&&q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:wt===null?i.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Mn,alphaToCoverage:!!_.alphaToCoverage,map:qt,matcap:Nt,envMap:R,envMapMode:R&&H.mapping,envMapCubeUVHeight:ot,aoMap:ye,lightMap:Dt,bumpMap:Ot,normalMap:yt,displacementMap:m&&$t,emissiveMap:bt,normalMapObjectSpace:yt&&_.normalMapType===Dc,normalMapTangentSpace:yt&&_.normalMapType===Lc,metalnessMap:T,roughnessMap:v,anisotropy:N,anisotropyMap:ut,clearcoat:X,clearcoatMap:Bt,clearcoatNormalMap:Q,clearcoatRoughnessMap:ht,dispersion:Z,iridescence:W,iridescenceMap:Tt,iridescenceThicknessMap:At,sheen:gt,sheenColorMap:ft,sheenRoughnessMap:Ut,specularMap:Rt,specularColorMap:Kt,specularIntensityMap:P,transmission:nt,transmissionMap:st,thicknessMap:z,gradientMap:Y,opaque:_.transparent===!1&&_.blending===oi&&_.alphaToCoverage===!1,alphaMap:it,alphaTest:at,alphaHash:Ft,combine:_.combine,mapUv:qt&&f(_.map.channel),aoMapUv:ye&&f(_.aoMap.channel),lightMapUv:Dt&&f(_.lightMap.channel),bumpMapUv:Ot&&f(_.bumpMap.channel),normalMapUv:yt&&f(_.normalMap.channel),displacementMapUv:$t&&f(_.displacementMap.channel),emissiveMapUv:bt&&f(_.emissiveMap.channel),metalnessMapUv:T&&f(_.metalnessMap.channel),roughnessMapUv:v&&f(_.roughnessMap.channel),anisotropyMapUv:ut&&f(_.anisotropyMap.channel),clearcoatMapUv:Bt&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:Q&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:At&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&f(_.sheenRoughnessMap.channel),specularMapUv:Rt&&f(_.specularMap.channel),specularColorMapUv:Kt&&f(_.specularColorMap.channel),specularIntensityMapUv:P&&f(_.specularIntensityMap.channel),transmissionMapUv:st&&f(_.transmissionMap.channel),thicknessMapUv:z&&f(_.thicknessMap.channel),alphaMapUv:it&&f(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(yt||N),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!V.attributes.uv&&(qt||it),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:p,skinning:q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Wt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:qt&&_.map.isVideoTexture===!0&&kt.getTransfer(_.map.colorSpace)===jt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qe,flipSided:_.side===pe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function y(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const G in _.defines)S.push(G),S.push(_.defines[G]);return _.isRawShaderMaterial===!1&&(E(S,_),A(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function E(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function A(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),_.push(o.mask)}function C(_){const S=x[_.type];let G;if(S){const B=Xe[S];G=lu.clone(B.uniforms)}else G=_.uniforms;return G}function w(_,S){let G;for(let B=0,q=u.length;B<q;B++){const K=u[B];if(K.cacheKey===S){G=K,++G.usedTimes;break}}return G===void 0&&(G=new Ep(i,S,_,s),u.push(G)),G}function b(_){if(--_.usedTimes===0){const S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),_.destroy()}}function U(_){l.remove(_)}function j(){l.dispose()}return{getParameters:h,getProgramCacheKey:y,getUniforms:C,acquireProgram:w,releaseProgram:b,releaseShaderCache:U,programs:u,dispose:j}}function wp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Rp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Lo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Do(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,p,m,g,x,f){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:f},i[t]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=x,h.group=f),t++,h}function o(d,p,m,g,x,f){const h=a(d,p,m,g,x,f);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):e.push(h)}function l(d,p,m,g,x,f){const h=a(d,p,m,g,x,f);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function c(d,p){e.length>1&&e.sort(d||Rp),n.length>1&&n.sort(p||Lo),r.length>1&&r.sort(p||Lo)}function u(){for(let d=t,p=i.length;d<p;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Cp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Do,i.set(n,[a])):r>=s.length?(a=new Do,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Pp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Lt};break;case"SpotLight":e={position:new I,direction:new I,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Lp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Dp=0;function Up(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ip(i){const t=new Pp,e=Lp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new Jt,a=new Jt;function o(c){let u=0,d=0,p=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let m=0,g=0,x=0,f=0,h=0,y=0,E=0,A=0,C=0,w=0,b=0;c.sort(Up);for(let j=0,_=c.length;j<_;j++){const S=c[j],G=S.color,B=S.intensity,q=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=G.r*B,d+=G.g*B,p+=G.b*B;else if(S.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(S.sh.coefficients[V],B);b++}else if(S.isDirectionalLight){const V=t.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const $=S.shadow,H=e.get(S);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=S.shadow.matrix,y++}n.directional[m]=V,m++}else if(S.isSpotLight){const V=t.get(S);V.position.setFromMatrixPosition(S.matrixWorld),V.color.copy(G).multiplyScalar(B),V.distance=q,V.coneCos=Math.cos(S.angle),V.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),V.decay=S.decay,n.spot[x]=V;const $=S.shadow;if(S.map&&(n.spotLightMap[C]=S.map,C++,$.updateMatrices(S),S.castShadow&&w++),n.spotLightMatrix[x]=$.matrix,S.castShadow){const H=e.get(S);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=K,A++}x++}else if(S.isRectAreaLight){const V=t.get(S);V.color.copy(G).multiplyScalar(B),V.halfWidth.set(S.width*.5,0,0),V.halfHeight.set(0,S.height*.5,0),n.rectArea[f]=V,f++}else if(S.isPointLight){const V=t.get(S);if(V.color.copy(S.color).multiplyScalar(S.intensity),V.distance=S.distance,V.decay=S.decay,S.castShadow){const $=S.shadow,H=e.get(S);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=S.shadow.matrix,E++}n.point[g]=V,g++}else if(S.isHemisphereLight){const V=t.get(S);V.skyColor.copy(S.color).multiplyScalar(B),V.groundColor.copy(S.groundColor).multiplyScalar(B),n.hemi[h]=V,h++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;const U=n.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==f||U.hemiLength!==h||U.numDirectionalShadows!==y||U.numPointShadows!==E||U.numSpotShadows!==A||U.numSpotMaps!==C||U.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=f,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=A+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,U.directionalLength=m,U.pointLength=g,U.spotLength=x,U.rectAreaLength=f,U.hemiLength=h,U.numDirectionalShadows=y,U.numPointShadows=E,U.numSpotShadows=A,U.numSpotMaps=C,U.numLightProbes=b,n.version=Dp++)}function l(c,u){let d=0,p=0,m=0,g=0,x=0;const f=u.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const E=c[h];if(E.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),d++}else if(E.isSpotLight){const A=n.spot[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),m++}else if(E.isRectAreaLight){const A=n.rectArea[g];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),a.identity(),s.copy(E.matrixWorld),s.premultiply(f),a.extractRotation(s),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const A=n.point[p];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){const A=n.hemi[x];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(f),x++}}}return{setup:o,setupView:l,state:n}}function Uo(i){const t=new Ip(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Np(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Uo(i),t.set(r,[o])):s>=a.length?(o=new Uo(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Fp extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Op extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zp=`uniform sampler2D shadow_pass;
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
}`;function Gp(i,t,e){let n=new Il;const r=new Yt,s=new Yt,a=new te,o=new Fp({depthPacking:Pc}),l=new Op,c={},u=e.maxTextureSize,d={[gn]:pe,[pe]:gn,[qe]:qe},p=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:Bp,fragmentShader:zp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new de(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let h=this.type;this.render=function(w,b,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const j=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),G=i.state;G.setBlending(mn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=h!==Qe&&this.type===Qe,q=h===Qe&&this.type!==Qe;for(let K=0,V=w.length;K<V;K++){const $=w[K],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ot=H.getFrameExtents();if(r.multiply(ot),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ot.x),r.x=s.x*ot.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ot.y),r.y=s.y*ot.y,H.mapSize.y=s.y)),H.map===null||B===!0||q===!0){const _t=this.type!==Qe?{minFilter:Fe,magFilter:Fe}:{};H.map!==null&&H.map.dispose(),H.map=new vn(r.x,r.y,_t),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const lt=H.getViewportCount();for(let _t=0;_t<lt;_t++){const zt=H.getViewport(_t);a.set(s.x*zt.x,s.y*zt.y,s.x*zt.z,s.y*zt.w),G.viewport(a),H.updateMatrices($,_t),n=H.getFrustum(),A(b,U,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===Qe&&y(H,U),H.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(j,_,S)};function y(w,b){const U=t.update(x);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new vn(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,U,p,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,U,m,x,null)}function E(w,b,U,j){let _=null;const S=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)_=S;else if(_=U.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const G=_.uuid,B=b.uuid;let q=c[G];q===void 0&&(q={},c[G]=q);let K=q[B];K===void 0&&(K=_.clone(),q[B]=K,b.addEventListener("dispose",C)),_=K}if(_.visible=b.visible,_.wireframe=b.wireframe,j===Qe?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:d[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=i.properties.get(_);G.light=U}return _}function A(w,b,U,j,_){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===Qe)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const B=t.update(w),q=w.material;if(Array.isArray(q)){const K=B.groups;for(let V=0,$=K.length;V<$;V++){const H=K[V],ot=q[H.materialIndex];if(ot&&ot.visible){const lt=E(w,ot,j,_);w.onBeforeShadow(i,w,b,U,B,lt,H),i.renderBufferDirect(U,null,B,lt,w,H),w.onAfterShadow(i,w,b,U,B,lt,H)}}}else if(q.visible){const K=E(w,q,j,_);w.onBeforeShadow(i,w,b,U,B,K,null),i.renderBufferDirect(U,null,B,K,w,null),w.onAfterShadow(i,w,b,U,B,K,null)}}const G=w.children;for(let B=0,q=G.length;B<q;B++)A(G[B],b,U,j,_)}function C(w){w.target.removeEventListener("dispose",C);for(const U in c){const j=c[U],_=w.target.uuid;_ in j&&(j[_].dispose(),delete j[_])}}}const Hp={[Is]:Ns,[Fs]:zs,[Os]:Gs,[ui]:Bs,[Ns]:Is,[zs]:Fs,[Gs]:Os,[Bs]:ui};function Vp(i){function t(){let P=!1;const st=new te;let z=null;const Y=new te(0,0,0,0);return{setMask:function(it){z!==it&&!P&&(i.colorMask(it,it,it,it),z=it)},setLocked:function(it){P=it},setClear:function(it,at,Ft,ne,ge){ge===!0&&(it*=ne,at*=ne,Ft*=ne),st.set(it,at,Ft,ne),Y.equals(st)===!1&&(i.clearColor(it,at,Ft,ne),Y.copy(st))},reset:function(){P=!1,z=null,Y.set(-1,0,0,0)}}}function e(){let P=!1,st=!1,z=null,Y=null,it=null;return{setReversed:function(at){st=at},setTest:function(at){at?pt(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(at){z!==at&&!P&&(i.depthMask(at),z=at)},setFunc:function(at){if(st&&(at=Hp[at]),Y!==at){switch(at){case Is:i.depthFunc(i.NEVER);break;case Ns:i.depthFunc(i.ALWAYS);break;case Fs:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case Os:i.depthFunc(i.EQUAL);break;case Bs:i.depthFunc(i.GEQUAL);break;case zs:i.depthFunc(i.GREATER);break;case Gs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=at}},setLocked:function(at){P=at},setClear:function(at){it!==at&&(i.clearDepth(at),it=at)},reset:function(){P=!1,z=null,Y=null,it=null}}}function n(){let P=!1,st=null,z=null,Y=null,it=null,at=null,Ft=null,ne=null,ge=null;return{setTest:function(Gt){P||(Gt?pt(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(Gt){st!==Gt&&!P&&(i.stencilMask(Gt),st=Gt)},setFunc:function(Gt,ve,Ye){(z!==Gt||Y!==ve||it!==Ye)&&(i.stencilFunc(Gt,ve,Ye),z=Gt,Y=ve,it=Ye)},setOp:function(Gt,ve,Ye){(at!==Gt||Ft!==ve||ne!==Ye)&&(i.stencilOp(Gt,ve,Ye),at=Gt,Ft=ve,ne=Ye)},setLocked:function(Gt){P=Gt},setClear:function(Gt){ge!==Gt&&(i.clearStencil(Gt),ge=Gt)},reset:function(){P=!1,st=null,z=null,Y=null,it=null,at=null,Ft=null,ne=null,ge=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,p=[],m=null,g=!1,x=null,f=null,h=null,y=null,E=null,A=null,C=null,w=new Lt(0,0,0),b=0,U=!1,j=null,_=null,S=null,G=null,B=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),K=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=V>=2);let H=null,ot={};const lt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),zt=new te().fromArray(lt),Wt=new te().fromArray(_t);function k(P,st,z,Y){const it=new Uint8Array(4),at=i.createTexture();i.bindTexture(P,at),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<z;Ft++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(st+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return at}const J={};J[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),s.setFunc(ui),Dt(!1),Ot(Ga),pt(i.CULL_FACE),R(mn);function pt(P){c[P]!==!0&&(i.enable(P),c[P]=!0)}function ct(P){c[P]!==!1&&(i.disable(P),c[P]=!1)}function wt(P,st){return u[P]!==st?(i.bindFramebuffer(P,st),u[P]=st,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function St(P,st){let z=p,Y=!1;if(P){z=d.get(st),z===void 0&&(z=[],d.set(st,z));const it=P.textures;if(z.length!==it.length||z[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ft=it.length;at<Ft;at++)z[at]=i.COLOR_ATTACHMENT0+at;z.length=it.length,Y=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,Y=!0);Y&&i.drawBuffers(z)}function It(P){return m!==P?(i.useProgram(P),m=P,!0):!1}const qt={[tn]:i.FUNC_ADD,[ic]:i.FUNC_SUBTRACT,[rc]:i.FUNC_REVERSE_SUBTRACT};qt[sc]=i.MIN,qt[ac]=i.MAX;const Nt={[oc]:i.ZERO,[Di]:i.ONE,[lc]:i.SRC_COLOR,[Ds]:i.SRC_ALPHA,[pc]:i.SRC_ALPHA_SATURATE,[fc]:i.DST_COLOR,[uc]:i.DST_ALPHA,[cc]:i.ONE_MINUS_SRC_COLOR,[Us]:i.ONE_MINUS_SRC_ALPHA,[dc]:i.ONE_MINUS_DST_COLOR,[hc]:i.ONE_MINUS_DST_ALPHA,[mc]:i.CONSTANT_COLOR,[_c]:i.ONE_MINUS_CONSTANT_COLOR,[gc]:i.CONSTANT_ALPHA,[vc]:i.ONE_MINUS_CONSTANT_ALPHA};function R(P,st,z,Y,it,at,Ft,ne,ge,Gt){if(P===mn){g===!0&&(ct(i.BLEND),g=!1);return}if(g===!1&&(pt(i.BLEND),g=!0),P!==ul){if(P!==x||Gt!==U){if((f!==tn||E!==tn)&&(i.blendEquation(i.FUNC_ADD),f=tn,E=tn),Gt)switch(P){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ha:i.blendFunc(i.ONE,i.ONE);break;case Va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ka:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ha:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ka:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}h=null,y=null,A=null,C=null,w.set(0,0,0),b=0,x=P,U=Gt}return}it=it||st,at=at||z,Ft=Ft||Y,(st!==f||it!==E)&&(i.blendEquationSeparate(qt[st],qt[it]),f=st,E=it),(z!==h||Y!==y||at!==A||Ft!==C)&&(i.blendFuncSeparate(Nt[z],Nt[Y],Nt[at],Nt[Ft]),h=z,y=Y,A=at,C=Ft),(ne.equals(w)===!1||ge!==b)&&(i.blendColor(ne.r,ne.g,ne.b,ge),w.copy(ne),b=ge),x=P,U=!1}function ye(P,st){P.side===qe?ct(i.CULL_FACE):pt(i.CULL_FACE);let z=P.side===pe;st&&(z=!z),Dt(z),P.blending===oi&&P.transparent===!1?R(mn):R(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const Y=P.stencilWrite;a.setTest(Y),Y&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),$t(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(P){j!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),j=P)}function Ot(P){P!==tc?(pt(i.CULL_FACE),P!==_&&(P===Ga?i.cullFace(i.BACK):P===ec?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),_=P}function yt(P){P!==S&&(K&&i.lineWidth(P),S=P)}function $t(P,st,z){P?(pt(i.POLYGON_OFFSET_FILL),(G!==st||B!==z)&&(i.polygonOffset(st,z),G=st,B=z)):ct(i.POLYGON_OFFSET_FILL)}function bt(P){P?pt(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function T(P){P===void 0&&(P=i.TEXTURE0+q-1),H!==P&&(i.activeTexture(P),H=P)}function v(P,st,z){z===void 0&&(H===null?z=i.TEXTURE0+q-1:z=H);let Y=ot[z];Y===void 0&&(Y={type:void 0,texture:void 0},ot[z]=Y),(Y.type!==P||Y.texture!==st)&&(H!==z&&(i.activeTexture(z),H=z),i.bindTexture(P,st||J[P]),Y.type=P,Y.texture=st)}function N(){const P=ot[H];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Bt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(P){zt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),zt.copy(P))}function ft(P){Wt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Wt.copy(P))}function Ut(P,st){let z=l.get(st);z===void 0&&(z=new WeakMap,l.set(st,z));let Y=z.get(P);Y===void 0&&(Y=i.getUniformBlockIndex(st,P.name),z.set(P,Y))}function Rt(P,st){const Y=l.get(st).get(P);o.get(st)!==Y&&(i.uniformBlockBinding(st,Y,P.__bindingPointIndex),o.set(st,Y))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,ot={},u={},d=new WeakMap,p=[],m=null,g=!1,x=null,f=null,h=null,y=null,E=null,A=null,C=null,w=new Lt(0,0,0),b=0,U=!1,j=null,_=null,S=null,G=null,B=null,zt.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:pt,disable:ct,bindFramebuffer:wt,drawBuffers:St,useProgram:It,setBlending:R,setMaterial:ye,setFlipSided:Dt,setCullFace:Ot,setLineWidth:yt,setPolygonOffset:$t,setScissorTest:bt,activeTexture:T,bindTexture:v,unbindTexture:N,compressedTexImage2D:X,compressedTexImage3D:Z,texImage2D:ht,texImage3D:Tt,updateUBOMapping:Ut,uniformBlockBinding:Rt,texStorage2D:Bt,texStorage3D:Q,texSubImage2D:W,texSubImage3D:gt,compressedTexSubImage2D:nt,compressedTexSubImage3D:ut,scissor:At,viewport:ft,reset:Kt}}function Io(i,t,e,n){const r=kp(n);switch(e){case _l:return i*t;case vl:return i*t;case xl:return i*t*2;case Ml:return i*t/r.components*r.byteLength;case Aa:return i*t/r.components*r.byteLength;case Sl:return i*t*2/r.components*r.byteLength;case ba:return i*t*2/r.components*r.byteLength;case gl:return i*t*3/r.components*r.byteLength;case Oe:return i*t*4/r.components*r.byteLength;case wa:return i*t*4/r.components*r.byteLength;case gr:case vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qs:case Ks:return Math.max(i,16)*Math.max(t,8)/4;case Xs:case Ys:return Math.max(i,8)*Math.max(t,8)/2;case $s:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ta:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Sr:case fa:case da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case El:case pa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ma:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kp(i){switch(i){case sn:case dl:return{byteLength:1,components:1};case Fi:case pl:case vi:return{byteLength:2,components:1};case ya:case Ta:return{byteLength:2,components:4};case On:case Ea:case en:return{byteLength:4,components:1};case ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Wp(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return m?new OffscreenCanvas(T,v):Lr("canvas")}function x(T,v,N){let X=1;const Z=bt(T);if((Z.width>N||Z.height>N)&&(X=N/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(X*Z.width),gt=Math.floor(X*Z.height);d===void 0&&(d=g(W,gt));const nt=v?g(W,gt):d;return nt.width=W,nt.height=gt,nt.getContext("2d").drawImage(T,0,0,W,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+gt+")."),nt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function f(T){return T.generateMipmaps&&T.minFilter!==Fe&&T.minFilter!==Ce}function h(T){i.generateMipmap(T)}function y(T,v,N,X,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=v;if(v===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),v===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),v===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),v===i.RGBA){const gt=Z?wr:kt.getTransfer(X);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=gt===jt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function E(T,v){let N;return T?v===null||v===On||v===di?N=i.DEPTH24_STENCIL8:v===en?N=i.DEPTH32F_STENCIL8:v===Fi&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===On||v===di?N=i.DEPTH_COMPONENT24:v===en?N=i.DEPTH_COMPONENT32F:v===Fi&&(N=i.DEPTH_COMPONENT16),N}function A(T,v){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Fe&&T.minFilter!==Ce?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function C(T){const v=T.target;v.removeEventListener("dispose",C),b(v),v.isVideoTexture&&u.delete(v)}function w(T){const v=T.target;v.removeEventListener("dispose",w),j(v)}function b(T){const v=n.get(T);if(v.__webglInit===void 0)return;const N=T.source,X=p.get(N);if(X){const Z=X[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&U(T),Object.keys(X).length===0&&p.delete(N)}n.remove(T)}function U(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const N=T.source,X=p.get(N);delete X[v.__cacheKey],a.memory.textures--}function j(T){const v=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let Z=0;Z<v.__webglFramebuffer[X].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[X][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=T.textures;for(let X=0,Z=N.length;X<Z;X++){const W=n.get(N[X]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(N[X])}n.remove(T)}let _=0;function S(){_=0}function G(){const T=_;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),_+=1,T}function B(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function q(T,v){const N=n.get(T);if(T.isVideoTexture&&yt(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(N,T,v);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function K(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){Wt(N,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function V(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){Wt(N,T,v);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function $(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){k(N,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}const H={[ks]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[Ws]:i.MIRRORED_REPEAT},ot={[Fe]:i.NEAREST,[Rc]:i.NEAREST_MIPMAP_NEAREST,[ki]:i.NEAREST_MIPMAP_LINEAR,[Ce]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[In]:i.LINEAR_MIPMAP_LINEAR},lt={[Uc]:i.NEVER,[zc]:i.ALWAYS,[Ic]:i.LESS,[yl]:i.LEQUAL,[Nc]:i.EQUAL,[Bc]:i.GEQUAL,[Fc]:i.GREATER,[Oc]:i.NOTEQUAL};function _t(T,v){if(v.type===en&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ce||v.magFilter===qr||v.magFilter===ki||v.magFilter===In||v.minFilter===Ce||v.minFilter===qr||v.minFilter===ki||v.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,H[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,H[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,H[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ot[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ot[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,lt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Fe||v.minFilter!==ki&&v.minFilter!==In||v.type===en&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function zt(T,v){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",C));const X=v.source;let Z=p.get(X);Z===void 0&&(Z={},p.set(X,Z));const W=B(v);if(W!==T.__cacheKey){Z[W]===void 0&&(Z[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[W].usedTimes++;const gt=Z[T.__cacheKey];gt!==void 0&&(Z[T.__cacheKey].usedTimes--,gt.usedTimes===0&&U(v)),T.__cacheKey=W,T.__webglTexture=Z[W].texture}return N}function Wt(T,v,N){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);const Z=zt(T,v),W=v.source;e.bindTexture(X,T.__webglTexture,i.TEXTURE0+N);const gt=n.get(W);if(W.version!==gt.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);const nt=kt.getPrimaries(kt.workingColorSpace),ut=v.colorSpace===pn?null:kt.getPrimaries(v.colorSpace),Bt=v.colorSpace===pn||nt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let Q=x(v.image,!1,r.maxTextureSize);Q=$t(v,Q);const ht=s.convert(v.format,v.colorSpace),Tt=s.convert(v.type);let At=y(v.internalFormat,ht,Tt,v.colorSpace,v.isVideoTexture);_t(X,v);let ft;const Ut=v.mipmaps,Rt=v.isVideoTexture!==!0,Kt=gt.__version===void 0||Z===!0,P=W.dataReady,st=A(v,Q);if(v.isDepthTexture)At=E(v.format===pi,v.type),Kt&&(Rt?e.texStorage2D(i.TEXTURE_2D,1,At,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,At,Q.width,Q.height,0,ht,Tt,null));else if(v.isDataTexture)if(Ut.length>0){Rt&&Kt&&e.texStorage2D(i.TEXTURE_2D,st,At,Ut[0].width,Ut[0].height);for(let z=0,Y=Ut.length;z<Y;z++)ft=Ut[z],Rt?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ft.width,ft.height,ht,Tt,ft.data):e.texImage2D(i.TEXTURE_2D,z,At,ft.width,ft.height,0,ht,Tt,ft.data);v.generateMipmaps=!1}else Rt?(Kt&&e.texStorage2D(i.TEXTURE_2D,st,At,Q.width,Q.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ht,Tt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,At,Q.width,Q.height,0,ht,Tt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Rt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,At,Ut[0].width,Ut[0].height,Q.depth);for(let z=0,Y=Ut.length;z<Y;z++)if(ft=Ut[z],v.format!==Oe)if(ht!==null)if(Rt){if(P)if(v.layerUpdates.size>0){const it=Io(ft.width,ft.height,v.format,v.type);for(const at of v.layerUpdates){const Ft=ft.data.subarray(at*it/ft.data.BYTES_PER_ELEMENT,(at+1)*it/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,at,ft.width,ft.height,1,ht,Ft,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,ft.width,ft.height,Q.depth,ht,ft.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,At,ft.width,ft.height,Q.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,ft.width,ft.height,Q.depth,ht,Tt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,At,ft.width,ft.height,Q.depth,0,ht,Tt,ft.data)}else{Rt&&Kt&&e.texStorage2D(i.TEXTURE_2D,st,At,Ut[0].width,Ut[0].height);for(let z=0,Y=Ut.length;z<Y;z++)ft=Ut[z],v.format!==Oe?ht!==null?Rt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,ft.width,ft.height,ht,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,z,At,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ft.width,ft.height,ht,Tt,ft.data):e.texImage2D(i.TEXTURE_2D,z,At,ft.width,ft.height,0,ht,Tt,ft.data)}else if(v.isDataArrayTexture)if(Rt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,At,Q.width,Q.height,Q.depth),P)if(v.layerUpdates.size>0){const z=Io(Q.width,Q.height,v.format,v.type);for(const Y of v.layerUpdates){const it=Q.data.subarray(Y*z/Q.data.BYTES_PER_ELEMENT,(Y+1)*z/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,ht,Tt,it)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ht,Tt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,Q.width,Q.height,Q.depth,0,ht,Tt,Q.data);else if(v.isData3DTexture)Rt?(Kt&&e.texStorage3D(i.TEXTURE_3D,st,At,Q.width,Q.height,Q.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ht,Tt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,At,Q.width,Q.height,Q.depth,0,ht,Tt,Q.data);else if(v.isFramebufferTexture){if(Kt)if(Rt)e.texStorage2D(i.TEXTURE_2D,st,At,Q.width,Q.height);else{let z=Q.width,Y=Q.height;for(let it=0;it<st;it++)e.texImage2D(i.TEXTURE_2D,it,At,z,Y,0,ht,Tt,null),z>>=1,Y>>=1}}else if(Ut.length>0){if(Rt&&Kt){const z=bt(Ut[0]);e.texStorage2D(i.TEXTURE_2D,st,At,z.width,z.height)}for(let z=0,Y=Ut.length;z<Y;z++)ft=Ut[z],Rt?P&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ht,Tt,ft):e.texImage2D(i.TEXTURE_2D,z,At,ht,Tt,ft);v.generateMipmaps=!1}else if(Rt){if(Kt){const z=bt(Q);e.texStorage2D(i.TEXTURE_2D,st,At,z.width,z.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Tt,Q)}else e.texImage2D(i.TEXTURE_2D,0,At,ht,Tt,Q);f(v)&&h(X),gt.__version=W.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function k(T,v,N){if(v.image.length!==6)return;const X=zt(T,v),Z=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);const W=n.get(Z);if(Z.version!==W.__version||X===!0){e.activeTexture(i.TEXTURE0+N);const gt=kt.getPrimaries(kt.workingColorSpace),nt=v.colorSpace===pn?null:kt.getPrimaries(v.colorSpace),ut=v.colorSpace===pn||gt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Bt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ht=[];for(let Y=0;Y<6;Y++)!Bt&&!Q?ht[Y]=x(v.image[Y],!0,r.maxCubemapSize):ht[Y]=Q?v.image[Y].image:v.image[Y],ht[Y]=$t(v,ht[Y]);const Tt=ht[0],At=s.convert(v.format,v.colorSpace),ft=s.convert(v.type),Ut=y(v.internalFormat,At,ft,v.colorSpace),Rt=v.isVideoTexture!==!0,Kt=W.__version===void 0||X===!0,P=Z.dataReady;let st=A(v,Tt);_t(i.TEXTURE_CUBE_MAP,v);let z;if(Bt){Rt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Ut,Tt.width,Tt.height);for(let Y=0;Y<6;Y++){z=ht[Y].mipmaps;for(let it=0;it<z.length;it++){const at=z[it];v.format!==Oe?At!==null?Rt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,at.width,at.height,At,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,Ut,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,at.width,at.height,At,ft,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,Ut,at.width,at.height,0,At,ft,at.data)}}}else{if(z=v.mipmaps,Rt&&Kt){z.length>0&&st++;const Y=bt(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Ut,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){Rt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ht[Y].width,ht[Y].height,At,ft,ht[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ut,ht[Y].width,ht[Y].height,0,At,ft,ht[Y].data);for(let it=0;it<z.length;it++){const Ft=z[it].image[Y].image;Rt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,Ft.width,Ft.height,At,ft,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,Ut,Ft.width,Ft.height,0,At,ft,Ft.data)}}else{Rt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,At,ft,ht[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ut,At,ft,ht[Y]);for(let it=0;it<z.length;it++){const at=z[it];Rt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,At,ft,at.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,Ut,At,ft,at.image[Y])}}}f(v)&&h(i.TEXTURE_CUBE_MAP),W.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function J(T,v,N,X,Z,W){const gt=s.convert(N.format,N.colorSpace),nt=s.convert(N.type),ut=y(N.internalFormat,gt,nt,N.colorSpace);if(!n.get(v).__hasExternalTextures){const Q=Math.max(1,v.width>>W),ht=Math.max(1,v.height>>W);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,W,ut,Q,ht,v.depth,0,gt,nt,null):e.texImage2D(Z,W,ut,Q,ht,0,gt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Z,n.get(N).__webglTexture,0,Dt(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Z,n.get(N).__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(T,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const X=v.depthTexture,Z=X&&X.isDepthTexture?X.type:null,W=E(v.stencilBuffer,Z),gt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=Dt(v);Ot(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,W,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,W,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,W,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,T)}else{const X=v.textures;for(let Z=0;Z<X.length;Z++){const W=X[Z],gt=s.convert(W.format,W.colorSpace),nt=s.convert(W.type),ut=y(W.internalFormat,gt,nt,W.colorSpace),Bt=Dt(v);N&&Ot(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,ut,v.width,v.height):Ot(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt,ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const X=n.get(v.depthTexture).__webglTexture,Z=Dt(v);if(v.depthTexture.format===li)Ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(v.depthTexture.format===pi)Ot(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function wt(T){const v=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=X}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ct(v.__webglFramebuffer,T)}else if(N){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),pt(v.__webglDepthbuffer[X],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),pt(v.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(T,v,N){const X=n.get(T);v!==void 0&&J(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&wt(T)}function It(T){const v=T.texture,N=n.get(T),X=n.get(v);T.addEventListener("dispose",w);const Z=T.textures,W=T.isWebGLCubeRenderTarget===!0,gt=Z.length>1;if(gt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,a.memory.textures++),W){N.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[nt]=[];for(let ut=0;ut<v.mipmaps.length;ut++)N.__webglFramebuffer[nt][ut]=i.createFramebuffer()}else N.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let nt=0;nt<v.mipmaps.length;nt++)N.__webglFramebuffer[nt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(gt)for(let nt=0,ut=Z.length;nt<ut;nt++){const Bt=n.get(Z[nt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ot(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let nt=0;nt<Z.length;nt++){const ut=Z[nt];N.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[nt]);const Bt=s.convert(ut.format,ut.colorSpace),Q=s.convert(ut.type),ht=y(ut.internalFormat,Bt,Q,ut.colorSpace,T.isXRRenderTarget===!0),Tt=Dt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ht,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,N.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),_t(i.TEXTURE_CUBE_MAP,v);for(let nt=0;nt<6;nt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)J(N.__webglFramebuffer[nt][ut],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ut);else J(N.__webglFramebuffer[nt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);f(v)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let nt=0,ut=Z.length;nt<ut;nt++){const Bt=Z[nt],Q=n.get(Bt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),_t(i.TEXTURE_2D,Bt),J(N.__webglFramebuffer,T,Bt,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,0),f(Bt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(nt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,X.__webglTexture),_t(nt,v),v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)J(N.__webglFramebuffer[ut],T,v,i.COLOR_ATTACHMENT0,nt,ut);else J(N.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,nt,0);f(v)&&h(nt),e.unbindTexture()}T.depthBuffer&&wt(T)}function qt(T){const v=T.textures;for(let N=0,X=v.length;N<X;N++){const Z=v[N];if(f(Z)){const W=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,gt=n.get(Z).__webglTexture;e.bindTexture(W,gt),h(W),e.unbindTexture()}}}const Nt=[],R=[];function ye(T){if(T.samples>0){if(Ot(T)===!1){const v=T.textures,N=T.width,X=T.height;let Z=i.COLOR_BUFFER_BIT;const W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(T),nt=v.length>1;if(nt)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);const Bt=n.get(v[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Bt,0)}i.blitFramebuffer(0,0,N,X,0,0,N,X,Z,i.NEAREST),l===!0&&(Nt.length=0,R.length=0,Nt.push(i.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Nt.push(W),R.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);const Bt=n.get(v[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Dt(T){return Math.min(r.maxSamples,T.samples)}function Ot(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function yt(T){const v=a.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function $t(T,v){const N=T.colorSpace,X=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Mn&&N!==pn&&(kt.getTransfer(N)===jt?(X!==Oe||Z!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function bt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=S,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=St,this.setupRenderTarget=It,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ot}function Xp(i,t){function e(n,r=pn){let s;const a=kt.getTransfer(r);if(n===sn)return i.UNSIGNED_BYTE;if(n===ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dl)return i.BYTE;if(n===pl)return i.SHORT;if(n===Fi)return i.UNSIGNED_SHORT;if(n===Ea)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===vi)return i.HALF_FLOAT;if(n===_l)return i.ALPHA;if(n===gl)return i.RGB;if(n===Oe)return i.RGBA;if(n===vl)return i.LUMINANCE;if(n===xl)return i.LUMINANCE_ALPHA;if(n===li)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===Aa)return i.RED_INTEGER;if(n===Sl)return i.RG;if(n===ba)return i.RG_INTEGER;if(n===wa)return i.RGBA_INTEGER;if(n===gr||n===vr||n===xr||n===Mr)if(a===jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xs||n===qs||n===Ys||n===Ks)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ys)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ks)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$s||n===Zs||n===js)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===$s||n===Zs)return a===jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===js)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Js||n===Qs||n===ta||n===ea||n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===la||n===ca||n===ua||n===ha)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Js)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qs)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ta)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ea)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===na)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ia)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ra)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sa)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===aa)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oa)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===la)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ca)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ua)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ha)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sr||n===fa||n===da)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Sr)return a===jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===da)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===El||n===pa||n===ma||n===_a)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===pa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ma)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_a)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class qp extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ii extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yp={type:"move"};class Es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const f=e.getJointPose(x,n),h=this._getHandJoint(c,x);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ii;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$p=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new me,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pe({vertexShader:Kp,fragmentShader:$p,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jp extends xi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,m=null,g=null;const x=new Zp,f=e.getContextAttributes();let h=null,y=null;const E=[],A=[],C=new Yt;let w=null;const b=new Ne;b.layers.enable(1),b.viewport=new te;const U=new Ne;U.layers.enable(2),U.viewport=new te;const j=[b,U],_=new qp;_.layers.enable(1),_.layers.enable(2);let S=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=E[k];return J===void 0&&(J=new Es,E[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=E[k];return J===void 0&&(J=new Es,E[k]=J),J.getGripSpace()},this.getHand=function(k){let J=E[k];return J===void 0&&(J=new Es,E[k]=J),J.getHandSpace()};function B(k){const J=A.indexOf(k.inputSource);if(J===-1)return;const pt=E[J];pt!==void 0&&(pt.update(k.inputSource,k.frame,c||a),pt.dispatchEvent({type:k.type,data:k.inputSource}))}function q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",K);for(let k=0;k<E.length;k++){const J=A[k];J!==null&&(A[k]=null,E[k].disconnect(J))}S=null,G=null,x.reset(),t.setRenderTarget(h),m=null,p=null,d=null,r=null,y=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",q),r.addEventListener("inputsourceschange",K),f.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),r.renderState.layers===void 0){const J={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,J),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new vn(m.framebufferWidth,m.framebufferHeight,{format:Oe,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let J=null,pt=null,ct=null;f.depth&&(ct=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=f.stencil?pi:li,pt=f.stencil?di:On);const wt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};d=new XRWebGLBinding(r,e),p=d.createProjectionLayer(wt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new vn(p.textureWidth,p.textureHeight,{format:Oe,type:sn,depthTexture:new Ol(p.textureWidth,p.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Wt.setContext(r),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(k){for(let J=0;J<k.removed.length;J++){const pt=k.removed[J],ct=A.indexOf(pt);ct>=0&&(A[ct]=null,E[ct].disconnect(pt))}for(let J=0;J<k.added.length;J++){const pt=k.added[J];let ct=A.indexOf(pt);if(ct===-1){for(let St=0;St<E.length;St++)if(St>=A.length){A.push(pt),ct=St;break}else if(A[St]===null){A[St]=pt,ct=St;break}if(ct===-1)break}const wt=E[ct];wt&&wt.connect(pt)}}const V=new I,$=new I;function H(k,J,pt){V.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(pt.matrixWorld);const ct=V.distanceTo($),wt=J.projectionMatrix.elements,St=pt.projectionMatrix.elements,It=wt[14]/(wt[10]-1),qt=wt[14]/(wt[10]+1),Nt=(wt[9]+1)/wt[5],R=(wt[9]-1)/wt[5],ye=(wt[8]-1)/wt[0],Dt=(St[8]+1)/St[0],Ot=It*ye,yt=It*Dt,$t=ct/(-ye+Dt),bt=$t*-ye;if(J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(bt),k.translateZ($t),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),wt[10]===-1)k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const T=It+$t,v=qt+$t,N=Ot-bt,X=yt+(ct-bt),Z=Nt*qt/v*T,W=R*qt/v*T;k.projectionMatrix.makePerspective(N,X,Z,W,T,v),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function ot(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let J=k.near,pt=k.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(pt=x.depthFar)),_.near=U.near=b.near=J,_.far=U.far=b.far=pt,(S!==_.near||G!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,G=_.far);const ct=k.parent,wt=_.cameras;ot(_,ct);for(let St=0;St<wt.length;St++)ot(wt[St],ct);wt.length===2?H(_,b,U):_.projectionMatrix.copy(b.projectionMatrix),lt(k,_,ct)};function lt(k,J,pt){pt===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(pt.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ga*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(k){l=k,p!==null&&(p.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let _t=null;function zt(k,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const pt=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let ct=!1;pt.length!==_.cameras.length&&(_.cameras.length=0,ct=!0);for(let St=0;St<pt.length;St++){const It=pt[St];let qt=null;if(m!==null)qt=m.getViewport(It);else{const R=d.getViewSubImage(p,It);qt=R.viewport,St===0&&(t.setRenderTargetTextures(y,R.colorTexture,p.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(y))}let Nt=j[St];Nt===void 0&&(Nt=new Ne,Nt.layers.enable(St),Nt.viewport=new te,j[St]=Nt),Nt.matrix.fromArray(It.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(It.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(qt.x,qt.y,qt.width,qt.height),St===0&&(_.matrix.copy(Nt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ct===!0&&_.cameras.push(Nt)}const wt=r.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const St=d.getDepthInformation(pt[0]);St&&St.isValid&&St.texture&&x.init(t,St,r.renderState)}}for(let pt=0;pt<E.length;pt++){const ct=A[pt],wt=E[pt];ct!==null&&wt!==void 0&&wt.update(ct,J,c||a)}_t&&_t(k,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Wt=new Nl;Wt.setAnimationLoop(zt),this.setAnimationLoop=function(k){_t=k},this.dispose=function(){}}}const wn=new an,Jp=new Jt;function Qp(i,t){function e(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,Ll(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function r(f,h,y,E,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(f,h):h.isMeshToonMaterial?(s(f,h),d(f,h)):h.isMeshPhongMaterial?(s(f,h),u(f,h)):h.isMeshStandardMaterial?(s(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,A)):h.isMeshMatcapMaterial?(s(f,h),g(f,h)):h.isMeshDepthMaterial?s(f,h):h.isMeshDistanceMaterial?(s(f,h),x(f,h)):h.isMeshNormalMaterial?s(f,h):h.isLineBasicMaterial?(a(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,y,E):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,e(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===pe&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,e(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===pe&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,e(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,e(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const y=t.get(h),E=y.envMap,A=y.envMapRotation;E&&(f.envMap.value=E,wn.copy(A),wn.x*=-1,wn.y*=-1,wn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(wn.y*=-1,wn.z*=-1),f.envMapRotation.value.setFromMatrix4(Jp.makeRotationFromEuler(wn)),f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,f.aoMapTransform))}function a(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,y,E){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*y,f.scale.value=E*.5,h.map&&(f.map.value=h.map,e(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,y){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===pe&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function x(f,h){const y=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function tm(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const A=E.program;n.uniformBlockBinding(y,A)}function c(y,E){let A=r[y.id];A===void 0&&(g(y),A=u(y),r[y.id]=A,y.addEventListener("dispose",f));const C=E.program;n.updateUBOMapping(y,C);const w=t.render.frame;s[y.id]!==w&&(p(y),s[y.id]=w)}function u(y){const E=d();y.__bindingPointIndex=E;const A=i.createBuffer(),C=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const E=r[y.id],A=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,b=A.length;w<b;w++){const U=Array.isArray(A[w])?A[w]:[A[w]];for(let j=0,_=U.length;j<_;j++){const S=U[j];if(m(S,w,j,C)===!0){const G=S.__offset,B=Array.isArray(S.value)?S.value:[S.value];let q=0;for(let K=0;K<B.length;K++){const V=B[K],$=x(V);typeof V=="number"||typeof V=="boolean"?(S.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,G+q,S.__data)):V.isMatrix3?(S.__data[0]=V.elements[0],S.__data[1]=V.elements[1],S.__data[2]=V.elements[2],S.__data[3]=0,S.__data[4]=V.elements[3],S.__data[5]=V.elements[4],S.__data[6]=V.elements[5],S.__data[7]=0,S.__data[8]=V.elements[6],S.__data[9]=V.elements[7],S.__data[10]=V.elements[8],S.__data[11]=0):(V.toArray(S.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,E,A,C){const w=y.value,b=E+"_"+A;if(C[b]===void 0)return typeof w=="number"||typeof w=="boolean"?C[b]=w:C[b]=w.clone(),!0;{const U=C[b];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return C[b]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(y){const E=y.uniforms;let A=0;const C=16;for(let b=0,U=E.length;b<U;b++){const j=Array.isArray(E[b])?E[b]:[E[b]];for(let _=0,S=j.length;_<S;_++){const G=j[_],B=Array.isArray(G.value)?G.value:[G.value];for(let q=0,K=B.length;q<K;q++){const V=B[q],$=x(V),H=A%C,ot=H%$.boundary,lt=H+ot;A+=ot,lt!==0&&C-lt<$.storage&&(A+=C-lt),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=A,A+=$.storage}}}const w=A%C;return w>0&&(A+=C-w),y.__size=A,y.__cache={},this}function x(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function f(y){const E=y.target;E.removeEventListener("dispose",f);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class em{constructor(t={}){const{canvas:e=Hc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,f=null;const h=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=_n,this.toneMappingExposure=1;const E=this;let A=!1,C=0,w=0,b=null,U=-1,j=null;const _=new te,S=new te;let G=null;const B=new Lt(0);let q=0,K=e.width,V=e.height,$=1,H=null,ot=null;const lt=new te(0,0,K,V),_t=new te(0,0,K,V);let zt=!1;const Wt=new Il;let k=!1,J=!1;const pt=new Jt,ct=new Jt,wt=new I,St=new te,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Nt(){return b===null?$:1}let R=n;function ye(M,L){return e.getContext(M,L)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sa}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",at,!1),R===null){const L="webgl2";if(R=ye(L,M),R===null)throw ye(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Dt,Ot,yt,$t,bt,T,v,N,X,Z,W,gt,nt,ut,Bt,Q,ht,Tt,At,ft,Ut,Rt,Kt,P;function st(){Dt=new ad(R),Dt.init(),Rt=new Xp(R,Dt),Ot=new td(R,Dt,t,Rt),yt=new Vp(R),Ot.reverseDepthBuffer&&yt.buffers.depth.setReversed(!0),$t=new cd(R),bt=new wp,T=new Wp(R,Dt,yt,bt,Ot,Rt,$t),v=new nd(E),N=new sd(E),X=new mu(R),Kt=new Jf(R,X),Z=new od(R,X,$t,Kt),W=new hd(R,Z,X,$t),At=new ud(R,Ot,T),Q=new ed(bt),gt=new bp(E,v,N,Dt,Ot,Kt,Q),nt=new Qp(E,bt),ut=new Cp,Bt=new Np(Dt),Tt=new jf(E,v,N,yt,W,p,l),ht=new Gp(E,W,Ot),P=new tm(R,$t,Ot,yt),ft=new Qf(R,Dt,$t),Ut=new ld(R,Dt,$t),$t.programs=gt.programs,E.capabilities=Ot,E.extensions=Dt,E.properties=bt,E.renderLists=ut,E.shadowMap=ht,E.state=yt,E.info=$t}st();const z=new jp(E,R);this.xr=z,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Dt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Dt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(K,V,!1))},this.getSize=function(M){return M.set(K,V)},this.setSize=function(M,L,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,V=L,e.width=Math.floor(M*$),e.height=Math.floor(L*$),F===!0&&(e.style.width=M+"px",e.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(K*$,V*$).floor()},this.setDrawingBufferSize=function(M,L,F){K=M,V=L,$=F,e.width=Math.floor(M*F),e.height=Math.floor(L*F),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(_)},this.getViewport=function(M){return M.copy(lt)},this.setViewport=function(M,L,F,O){M.isVector4?lt.set(M.x,M.y,M.z,M.w):lt.set(M,L,F,O),yt.viewport(_.copy(lt).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(_t)},this.setScissor=function(M,L,F,O){M.isVector4?_t.set(M.x,M.y,M.z,M.w):_t.set(M,L,F,O),yt.scissor(S.copy(_t).multiplyScalar($).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(M){yt.setScissorTest(zt=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){ot=M},this.getClearColor=function(M){return M.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(M=!0,L=!0,F=!0){let O=0;if(M){let D=!1;if(b!==null){const tt=b.texture.format;D=tt===wa||tt===ba||tt===Aa}if(D){const tt=b.texture.type,rt=tt===sn||tt===On||tt===Fi||tt===di||tt===ya||tt===Ta,dt=Tt.getClearColor(),mt=Tt.getClearAlpha(),Mt=dt.r,Et=dt.g,vt=dt.b;rt?(m[0]=Mt,m[1]=Et,m[2]=vt,m[3]=mt,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=Mt,g[1]=Et,g[2]=vt,g[3]=mt,R.clearBufferiv(R.COLOR,0,g))}else O|=R.COLOR_BUFFER_BIT}L&&(O|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(O|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),Bt.dispose(),bt.dispose(),v.dispose(),N.dispose(),W.dispose(),Kt.dispose(),P.dispose(),gt.dispose(),z.dispose(),z.removeEventListener("sessionstart",Da),z.removeEventListener("sessionend",Ua),Sn.stop()};function Y(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=$t.autoReset,L=ht.enabled,F=ht.autoUpdate,O=ht.needsUpdate,D=ht.type;st(),$t.autoReset=M,ht.enabled=L,ht.autoUpdate=F,ht.needsUpdate=O,ht.type=D}function at(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ft(M){const L=M.target;L.removeEventListener("dispose",Ft),ne(L)}function ne(M){ge(M),bt.remove(M)}function ge(M){const L=bt.get(M).programs;L!==void 0&&(L.forEach(function(F){gt.releaseProgram(F)}),M.isShaderMaterial&&gt.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,F,O,D,tt){L===null&&(L=It);const rt=D.isMesh&&D.matrixWorld.determinant()<0,dt=Zl(M,L,F,O,D);yt.setMaterial(O,rt);let mt=F.index,Mt=1;if(O.wireframe===!0){if(mt=Z.getWireframeAttribute(F),mt===void 0)return;Mt=2}const Et=F.drawRange,vt=F.attributes.position;let Xt=Et.start*Mt,Zt=(Et.start+Et.count)*Mt;tt!==null&&(Xt=Math.max(Xt,tt.start*Mt),Zt=Math.min(Zt,(tt.start+tt.count)*Mt)),mt!==null?(Xt=Math.max(Xt,0),Zt=Math.min(Zt,mt.count)):vt!=null&&(Xt=Math.max(Xt,0),Zt=Math.min(Zt,vt.count));const Qt=Zt-Xt;if(Qt<0||Qt===1/0)return;Kt.setup(D,O,dt,F,mt);let Te,Ht=ft;if(mt!==null&&(Te=X.get(mt),Ht=Ut,Ht.setIndex(Te)),D.isMesh)O.wireframe===!0?(yt.setLineWidth(O.wireframeLinewidth*Nt()),Ht.setMode(R.LINES)):Ht.setMode(R.TRIANGLES);else if(D.isLine){let xt=O.linewidth;xt===void 0&&(xt=1),yt.setLineWidth(xt*Nt()),D.isLineSegments?Ht.setMode(R.LINES):D.isLineLoop?Ht.setMode(R.LINE_LOOP):Ht.setMode(R.LINE_STRIP)}else D.isPoints?Ht.setMode(R.POINTS):D.isSprite&&Ht.setMode(R.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Ht.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const xt=D._multiDrawStarts,oe=D._multiDrawCounts,Vt=D._multiDrawCount,Be=mt?X.get(mt).bytesPerElement:1,Gn=bt.get(O).currentProgram.getUniforms();for(let Ae=0;Ae<Vt;Ae++)Gn.setValue(R,"_gl_DrawID",Ae),Ht.render(xt[Ae]/Be,oe[Ae])}else if(D.isInstancedMesh)Ht.renderInstances(Xt,Qt,D.count);else if(F.isInstancedBufferGeometry){const xt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,oe=Math.min(F.instanceCount,xt);Ht.renderInstances(Xt,Qt,oe)}else Ht.render(Xt,Qt)};function Gt(M,L,F){M.transparent===!0&&M.side===qe&&M.forceSinglePass===!1?(M.side=pe,M.needsUpdate=!0,Vi(M,L,F),M.side=gn,M.needsUpdate=!0,Vi(M,L,F),M.side=qe):Vi(M,L,F)}this.compile=function(M,L,F=null){F===null&&(F=M),f=Bt.get(F),f.init(L),y.push(f),F.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),M!==F&&M.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();const O=new Set;return M.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const tt=D.material;if(tt)if(Array.isArray(tt))for(let rt=0;rt<tt.length;rt++){const dt=tt[rt];Gt(dt,F,D),O.add(dt)}else Gt(tt,F,D),O.add(tt)}),y.pop(),f=null,O},this.compileAsync=function(M,L,F=null){const O=this.compile(M,L,F);return new Promise(D=>{function tt(){if(O.forEach(function(rt){bt.get(rt).currentProgram.isReady()&&O.delete(rt)}),O.size===0){D(M);return}setTimeout(tt,10)}Dt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let ve=null;function Ye(M){ve&&ve(M)}function Da(){Sn.stop()}function Ua(){Sn.start()}const Sn=new Nl;Sn.setAnimationLoop(Ye),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(M){ve=M,z.setAnimationLoop(M),M===null?Sn.stop():Sn.start()},z.addEventListener("sessionstart",Da),z.addEventListener("sessionend",Ua),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(L),L=z.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,L,b),f=Bt.get(M,y.length),f.init(L),y.push(f),ct.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Wt.setFromProjectionMatrix(ct),J=this.localClippingEnabled,k=Q.init(this.clippingPlanes,J),x=ut.get(M,h.length),x.init(),h.push(x),z.enabled===!0&&z.isPresenting===!0){const tt=E.xr.getDepthSensingMesh();tt!==null&&Vr(tt,L,-1/0,E.sortObjects)}Vr(M,L,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(H,ot),qt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,qt&&Tt.addToRenderList(x,M),this.info.render.frame++,k===!0&&Q.beginShadows();const F=f.state.shadowsArray;ht.render(F,M,L),k===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=x.opaque,D=x.transmissive;if(f.setupLights(),L.isArrayCamera){const tt=L.cameras;if(D.length>0)for(let rt=0,dt=tt.length;rt<dt;rt++){const mt=tt[rt];Na(O,D,M,mt)}qt&&Tt.render(M);for(let rt=0,dt=tt.length;rt<dt;rt++){const mt=tt[rt];Ia(x,M,mt,mt.viewport)}}else D.length>0&&Na(O,D,M,L),qt&&Tt.render(M),Ia(x,M,L);b!==null&&(T.updateMultisampleRenderTarget(b),T.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(E,M,L),Kt.resetDefaultState(),U=-1,j=null,y.pop(),y.length>0?(f=y[y.length-1],k===!0&&Q.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Vr(M,L,F,O){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Wt.intersectsSprite(M)){O&&St.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ct);const rt=W.update(M),dt=M.material;dt.visible&&x.push(M,rt,dt,F,St.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Wt.intersectsObject(M))){const rt=W.update(M),dt=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),St.copy(M.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),St.copy(rt.boundingSphere.center)),St.applyMatrix4(M.matrixWorld).applyMatrix4(ct)),Array.isArray(dt)){const mt=rt.groups;for(let Mt=0,Et=mt.length;Mt<Et;Mt++){const vt=mt[Mt],Xt=dt[vt.materialIndex];Xt&&Xt.visible&&x.push(M,rt,Xt,F,St.z,vt)}}else dt.visible&&x.push(M,rt,dt,F,St.z,null)}}const tt=M.children;for(let rt=0,dt=tt.length;rt<dt;rt++)Vr(tt[rt],L,F,O)}function Ia(M,L,F,O){const D=M.opaque,tt=M.transmissive,rt=M.transparent;f.setupLightsView(F),k===!0&&Q.setGlobalState(E.clippingPlanes,F),O&&yt.viewport(_.copy(O)),D.length>0&&Hi(D,L,F),tt.length>0&&Hi(tt,L,F),rt.length>0&&Hi(rt,L,F),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Na(M,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[O.id]===void 0&&(f.state.transmissionRenderTarget[O.id]=new vn(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?vi:sn,minFilter:In,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));const tt=f.state.transmissionRenderTarget[O.id],rt=O.viewport||_;tt.setSize(rt.z,rt.w);const dt=E.getRenderTarget();E.setRenderTarget(tt),E.getClearColor(B),q=E.getClearAlpha(),q<1&&E.setClearColor(16777215,.5),E.clear(),qt&&Tt.render(F);const mt=E.toneMapping;E.toneMapping=_n;const Mt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),f.setupLightsView(O),k===!0&&Q.setGlobalState(E.clippingPlanes,O),Hi(M,F,O),T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let vt=0,Xt=L.length;vt<Xt;vt++){const Zt=L[vt],Qt=Zt.object,Te=Zt.geometry,Ht=Zt.material,xt=Zt.group;if(Ht.side===qe&&Qt.layers.test(O.layers)){const oe=Ht.side;Ht.side=pe,Ht.needsUpdate=!0,Fa(Qt,F,O,Te,Ht,xt),Ht.side=oe,Ht.needsUpdate=!0,Et=!0}}Et===!0&&(T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt))}E.setRenderTarget(dt),E.setClearColor(B,q),Mt!==void 0&&(O.viewport=Mt),E.toneMapping=mt}function Hi(M,L,F){const O=L.isScene===!0?L.overrideMaterial:null;for(let D=0,tt=M.length;D<tt;D++){const rt=M[D],dt=rt.object,mt=rt.geometry,Mt=O===null?rt.material:O,Et=rt.group;dt.layers.test(F.layers)&&Fa(dt,L,F,mt,Mt,Et)}}function Fa(M,L,F,O,D,tt){M.onBeforeRender(E,L,F,O,D,tt),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(E,L,F,O,M,tt),D.transparent===!0&&D.side===qe&&D.forceSinglePass===!1?(D.side=pe,D.needsUpdate=!0,E.renderBufferDirect(F,L,O,D,M,tt),D.side=gn,D.needsUpdate=!0,E.renderBufferDirect(F,L,O,D,M,tt),D.side=qe):E.renderBufferDirect(F,L,O,D,M,tt),M.onAfterRender(E,L,F,O,D,tt)}function Vi(M,L,F){L.isScene!==!0&&(L=It);const O=bt.get(M),D=f.state.lights,tt=f.state.shadowsArray,rt=D.state.version,dt=gt.getParameters(M,D.state,tt,L,F),mt=gt.getProgramCacheKey(dt);let Mt=O.programs;O.environment=M.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(M.isMeshStandardMaterial?N:v).get(M.envMap||O.environment),O.envMapRotation=O.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Mt===void 0&&(M.addEventListener("dispose",Ft),Mt=new Map,O.programs=Mt);let Et=Mt.get(mt);if(Et!==void 0){if(O.currentProgram===Et&&O.lightsStateVersion===rt)return Ba(M,dt),Et}else dt.uniforms=gt.getUniforms(M),M.onBeforeCompile(dt,E),Et=gt.acquireProgram(dt,mt),Mt.set(mt,Et),O.uniforms=dt.uniforms;const vt=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(vt.clippingPlanes=Q.uniform),Ba(M,dt),O.needsLights=Jl(M),O.lightsStateVersion=rt,O.needsLights&&(vt.ambientLightColor.value=D.state.ambient,vt.lightProbe.value=D.state.probe,vt.directionalLights.value=D.state.directional,vt.directionalLightShadows.value=D.state.directionalShadow,vt.spotLights.value=D.state.spot,vt.spotLightShadows.value=D.state.spotShadow,vt.rectAreaLights.value=D.state.rectArea,vt.ltc_1.value=D.state.rectAreaLTC1,vt.ltc_2.value=D.state.rectAreaLTC2,vt.pointLights.value=D.state.point,vt.pointLightShadows.value=D.state.pointShadow,vt.hemisphereLights.value=D.state.hemi,vt.directionalShadowMap.value=D.state.directionalShadowMap,vt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,vt.spotShadowMap.value=D.state.spotShadowMap,vt.spotLightMatrix.value=D.state.spotLightMatrix,vt.spotLightMap.value=D.state.spotLightMap,vt.pointShadowMap.value=D.state.pointShadowMap,vt.pointShadowMatrix.value=D.state.pointShadowMatrix),O.currentProgram=Et,O.uniformsList=null,Et}function Oa(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=yr.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Ba(M,L){const F=bt.get(M);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function Zl(M,L,F,O,D){L.isScene!==!0&&(L=It),T.resetTextureUnits();const tt=L.fog,rt=O.isMeshStandardMaterial?L.environment:null,dt=b===null?E.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Mn,mt=(O.isMeshStandardMaterial?N:v).get(O.envMap||rt),Mt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Et=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),vt=!!F.morphAttributes.position,Xt=!!F.morphAttributes.normal,Zt=!!F.morphAttributes.color;let Qt=_n;O.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Qt=E.toneMapping);const Te=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ht=Te!==void 0?Te.length:0,xt=bt.get(O),oe=f.state.lights;if(k===!0&&(J===!0||M!==j)){const De=M===j&&O.id===U;Q.setState(O,M,De)}let Vt=!1;O.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==oe.state.version||xt.outputColorSpace!==dt||D.isBatchedMesh&&xt.batching===!1||!D.isBatchedMesh&&xt.batching===!0||D.isBatchedMesh&&xt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&xt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&xt.instancing===!1||!D.isInstancedMesh&&xt.instancing===!0||D.isSkinnedMesh&&xt.skinning===!1||!D.isSkinnedMesh&&xt.skinning===!0||D.isInstancedMesh&&xt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&xt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&xt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&xt.instancingMorph===!1&&D.morphTexture!==null||xt.envMap!==mt||O.fog===!0&&xt.fog!==tt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Q.numPlanes||xt.numIntersection!==Q.numIntersection)||xt.vertexAlphas!==Mt||xt.vertexTangents!==Et||xt.morphTargets!==vt||xt.morphNormals!==Xt||xt.morphColors!==Zt||xt.toneMapping!==Qt||xt.morphTargetsCount!==Ht)&&(Vt=!0):(Vt=!0,xt.__version=O.version);let Be=xt.currentProgram;Vt===!0&&(Be=Vi(O,L,D));let Gn=!1,Ae=!1,kr=!1;const ee=Be.getUniforms(),on=xt.uniforms;if(yt.useProgram(Be.program)&&(Gn=!0,Ae=!0,kr=!0),O.id!==U&&(U=O.id,Ae=!0),Gn||j!==M){Ot.reverseDepthBuffer?(pt.copy(M.projectionMatrix),kc(pt),Wc(pt),ee.setValue(R,"projectionMatrix",pt)):ee.setValue(R,"projectionMatrix",M.projectionMatrix),ee.setValue(R,"viewMatrix",M.matrixWorldInverse);const De=ee.map.cameraPosition;De!==void 0&&De.setValue(R,wt.setFromMatrixPosition(M.matrixWorld)),Ot.logarithmicDepthBuffer&&ee.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ee.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Ae=!0,kr=!0)}if(D.isSkinnedMesh){ee.setOptional(R,D,"bindMatrix"),ee.setOptional(R,D,"bindMatrixInverse");const De=D.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),ee.setValue(R,"boneTexture",De.boneTexture,T))}D.isBatchedMesh&&(ee.setOptional(R,D,"batchingTexture"),ee.setValue(R,"batchingTexture",D._matricesTexture,T),ee.setOptional(R,D,"batchingIdTexture"),ee.setValue(R,"batchingIdTexture",D._indirectTexture,T),ee.setOptional(R,D,"batchingColorTexture"),D._colorsTexture!==null&&ee.setValue(R,"batchingColorTexture",D._colorsTexture,T));const Wr=F.morphAttributes;if((Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0)&&At.update(D,F,Be),(Ae||xt.receiveShadow!==D.receiveShadow)&&(xt.receiveShadow=D.receiveShadow,ee.setValue(R,"receiveShadow",D.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(on.envMap.value=mt,on.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(on.envMapIntensity.value=L.environmentIntensity),Ae&&(ee.setValue(R,"toneMappingExposure",E.toneMappingExposure),xt.needsLights&&jl(on,kr),tt&&O.fog===!0&&nt.refreshFogUniforms(on,tt),nt.refreshMaterialUniforms(on,O,$,V,f.state.transmissionRenderTarget[M.id]),yr.upload(R,Oa(xt),on,T)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(yr.upload(R,Oa(xt),on,T),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ee.setValue(R,"center",D.center),ee.setValue(R,"modelViewMatrix",D.modelViewMatrix),ee.setValue(R,"normalMatrix",D.normalMatrix),ee.setValue(R,"modelMatrix",D.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const De=O.uniformsGroups;for(let Xr=0,Ql=De.length;Xr<Ql;Xr++){const za=De[Xr];P.update(za,Be),P.bind(za,Be)}}return Be}function jl(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Jl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,L,F){bt.get(M.texture).__webglTexture=L,bt.get(M.depthTexture).__webglTexture=F;const O=bt.get(M);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){const F=bt.get(M);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,F=0){b=M,C=L,w=F;let O=!0,D=null,tt=!1,rt=!1;if(M){const mt=bt.get(M);if(mt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(R.FRAMEBUFFER,null),O=!1;else if(mt.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(mt.__hasExternalTextures)T.rebindTextures(M,bt.get(M.texture).__webglTexture,bt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const vt=M.depthTexture;if(mt.__boundDepthTexture!==vt){if(vt!==null&&bt.has(vt)&&(M.width!==vt.image.width||M.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Mt=M.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(rt=!0);const Et=bt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Et[L])?D=Et[L][F]:D=Et[L],tt=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?D=bt.get(M).__webglMultisampledFramebuffer:Array.isArray(Et)?D=Et[F]:D=Et,_.copy(M.viewport),S.copy(M.scissor),G=M.scissorTest}else _.copy(lt).multiplyScalar($).floor(),S.copy(_t).multiplyScalar($).floor(),G=zt;if(yt.bindFramebuffer(R.FRAMEBUFFER,D)&&O&&yt.drawBuffers(M,D),yt.viewport(_),yt.scissor(S),yt.setScissorTest(G),tt){const mt=bt.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,mt.__webglTexture,F)}else if(rt){const mt=bt.get(M.texture),Mt=L||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,mt.__webglTexture,F||0,Mt)}U=-1},this.readRenderTargetPixels=function(M,L,F,O,D,tt,rt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=bt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt){yt.bindFramebuffer(R.FRAMEBUFFER,dt);try{const mt=M.texture,Mt=mt.format,Et=mt.type;if(!Ot.textureFormatReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-O&&F>=0&&F<=M.height-D&&R.readPixels(L,F,O,D,Rt.convert(Mt),Rt.convert(Et),tt)}finally{const mt=b!==null?bt.get(b).__webglFramebuffer:null;yt.bindFramebuffer(R.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(M,L,F,O,D,tt,rt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=bt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt){const mt=M.texture,Mt=mt.format,Et=mt.type;if(!Ot.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=M.width-O&&F>=0&&F<=M.height-D){yt.bindFramebuffer(R.FRAMEBUFFER,dt);const vt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,vt),R.bufferData(R.PIXEL_PACK_BUFFER,tt.byteLength,R.STREAM_READ),R.readPixels(L,F,O,D,Rt.convert(Mt),Rt.convert(Et),0);const Xt=b!==null?bt.get(b).__webglFramebuffer:null;yt.bindFramebuffer(R.FRAMEBUFFER,Xt);const Zt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Vc(R,Zt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,vt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,tt),R.deleteBuffer(vt),R.deleteSync(Zt),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,L=null,F=0){M.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,M=arguments[1]);const O=Math.pow(2,-F),D=Math.floor(M.image.width*O),tt=Math.floor(M.image.height*O),rt=L!==null?L.x:0,dt=L!==null?L.y:0;T.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,F,0,0,rt,dt,D,tt),yt.unbindTexture()},this.copyTextureToTexture=function(M,L,F=null,O=null,D=0){M.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1],L=arguments[2],D=arguments[3]||0,F=null);let tt,rt,dt,mt,Mt,Et;F!==null?(tt=F.max.x-F.min.x,rt=F.max.y-F.min.y,dt=F.min.x,mt=F.min.y):(tt=M.image.width,rt=M.image.height,dt=0,mt=0),O!==null?(Mt=O.x,Et=O.y):(Mt=0,Et=0);const vt=Rt.convert(L.format),Xt=Rt.convert(L.type);T.setTexture2D(L,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const Zt=R.getParameter(R.UNPACK_ROW_LENGTH),Qt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Te=R.getParameter(R.UNPACK_SKIP_PIXELS),Ht=R.getParameter(R.UNPACK_SKIP_ROWS),xt=R.getParameter(R.UNPACK_SKIP_IMAGES),oe=M.isCompressedTexture?M.mipmaps[D]:M.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,oe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,oe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,dt),R.pixelStorei(R.UNPACK_SKIP_ROWS,mt),M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,D,Mt,Et,tt,rt,vt,Xt,oe.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,D,Mt,Et,oe.width,oe.height,vt,oe.data):R.texSubImage2D(R.TEXTURE_2D,D,Mt,Et,tt,rt,vt,Xt,oe),R.pixelStorei(R.UNPACK_ROW_LENGTH,Zt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Te),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,xt),D===0&&L.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(M,L,F=null,O=null,D=0){M.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,M=arguments[2],L=arguments[3],D=arguments[4]||0);let tt,rt,dt,mt,Mt,Et,vt,Xt,Zt;const Qt=M.isCompressedTexture?M.mipmaps[D]:M.image;F!==null?(tt=F.max.x-F.min.x,rt=F.max.y-F.min.y,dt=F.max.z-F.min.z,mt=F.min.x,Mt=F.min.y,Et=F.min.z):(tt=Qt.width,rt=Qt.height,dt=Qt.depth,mt=0,Mt=0,Et=0),O!==null?(vt=O.x,Xt=O.y,Zt=O.z):(vt=0,Xt=0,Zt=0);const Te=Rt.convert(L.format),Ht=Rt.convert(L.type);let xt;if(L.isData3DTexture)T.setTexture3D(L,0),xt=R.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)T.setTexture2DArray(L,0),xt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const oe=R.getParameter(R.UNPACK_ROW_LENGTH),Vt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Be=R.getParameter(R.UNPACK_SKIP_PIXELS),Gn=R.getParameter(R.UNPACK_SKIP_ROWS),Ae=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Qt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Qt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,mt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Mt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Et),M.isDataTexture||M.isData3DTexture?R.texSubImage3D(xt,D,vt,Xt,Zt,tt,rt,dt,Te,Ht,Qt.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(xt,D,vt,Xt,Zt,tt,rt,dt,Te,Qt.data):R.texSubImage3D(xt,D,vt,Xt,Zt,tt,rt,dt,Te,Ht,Qt),R.pixelStorei(R.UNPACK_ROW_LENGTH,oe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Vt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Be),R.pixelStorei(R.UNPACK_SKIP_ROWS,Gn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ae),D===0&&L.generateMipmaps&&R.generateMipmap(xt),yt.unbindTexture()},this.initRenderTarget=function(M){bt.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),yt.unbindTexture()},this.resetState=function(){C=0,w=0,b=null,yt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ra?"display-p3":"srgb",e.unpackColorSpace=kt.workingColorSpace===Or?"display-p3":"srgb"}}class Vl extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class kl extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Dr=new I,Ur=new I,No=new Jt,Ci=new Ca,ur=new zi,ys=new I,Fo=new I;class nm extends _e{constructor(t=new Le,e=new kl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Dr.fromBufferAttribute(e,r-1),Ur.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Dr.distanceTo(Ur);t.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),ur.radius+=s,t.ray.intersectsSphere(ur)===!1)return;No.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(No);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=m,f=g-1;x<f;x+=c){const h=u.getX(x),y=u.getX(x+1),E=hr(this,t,Ci,l,h,y);E&&e.push(E)}if(this.isLineLoop){const x=u.getX(g-1),f=u.getX(m),h=hr(this,t,Ci,l,x,f);h&&e.push(h)}}else{const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let x=m,f=g-1;x<f;x+=c){const h=hr(this,t,Ci,l,x,x+1);h&&e.push(h)}if(this.isLineLoop){const x=hr(this,t,Ci,l,g-1,m);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hr(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(Dr.fromBufferAttribute(a,r),Ur.fromBufferAttribute(a,s),e.distanceSqToSegment(Dr,Ur,ys,Fo)>n)return;ys.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ys);if(!(l<t.near||l>t.far))return{distance:l,point:Fo.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Oo=new I,Bo=new I;class im extends nm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Oo.fromBufferAttribute(e,r),Bo.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Oo.distanceTo(Bo);t.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rm extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zo=new Jt,xa=new Ca,fr=new zi,dr=new I;class sm extends _e{constructor(t=new Le,e=new rm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),fr.radius+=s,t.ray.intersectsSphere(fr)===!1)return;zo.copy(r).invert(),xa.copy(t.ray).applyMatrix4(zo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=p,x=m;g<x;g++){const f=c.getX(g);dr.fromBufferAttribute(d,f),Go(dr,f,l,r,t,e,this)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=p,x=m;g<x;g++)dr.fromBufferAttribute(d,g),Go(dr,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Go(i,t,e,n,r,s,a){const o=xa.distanceSqToPoint(i);if(o<e){const l=new I;xa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class am extends me{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class La extends Le{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new I,p=new I,m=[],g=[],x=[],f=[];for(let h=0;h<=n;h++){const y=[],E=h/n;let A=0;h===0&&a===0?A=.5/e:h===n&&l===Math.PI&&(A=-.5/e);for(let C=0;C<=e;C++){const w=C/e;d.x=-t*Math.cos(r+w*s)*Math.sin(a+E*o),d.y=t*Math.cos(a+E*o),d.z=t*Math.sin(r+w*s)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),f.push(w+A,1-E),y.push(c++)}u.push(y)}for(let h=0;h<n;h++)for(let y=0;y<e;y++){const E=u[h][y+1],A=u[h][y],C=u[h+1][y],w=u[h+1][y+1];(h!==0||a>0)&&m.push(E,A,w),(h!==n-1||l<Math.PI)&&m.push(A,C,w)}this.setIndex(m),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(x,3)),this.setAttribute("uv",new Ee(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class om extends im{constructor(t=10,e=10,n=4473924,r=8947848){n=new Lt(n),r=new Lt(r);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let p=0,m=0,g=-o;p<=e;p++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const x=p===s?n:r;x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3}const u=new Le;u.setAttribute("position",new Ee(l,3)),u.setAttribute("color",new Ee(c,3));const d=new kl({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);const lm=["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"],cm=[0,1,2,3,4,6,7,8,9,11,12,13,14,16,17,18,19,21,22,23,24];function Ho(){return{present:!1,joints:new Float32Array(25*4)}}function um(i,t,e){e[0].present=!1,e[1].present=!1;for(const n of i.session.inputSources){const r=n.hand;if(!r)continue;const s=n.handedness==="left"?0:n.handedness==="right"?1:-1;if(s<0)continue;const a=e[s];let o=!0;for(let l=0;l<25;l++){const c=r.get(lm[l]),u=c?i.getJointPose(c,t):null;if(!u){o=!1;break}const d=u.transform.position;a.joints[l*4]=d.x,a.joints[l*4+1]=d.y,a.joints[l*4+2]=d.z,a.joints[l*4+3]=u.radius??.008}a.present=o}}function hm(i,t){for(let e=0;e<21;e++){const n=cm[e];t[e*3]=i.joints[n*4],t[e*3+1]=i.joints[n*4+1],t[e*3+2]=i.joints[n*4+2]}}const fm=[{lat:.032,fwd:.085,len:[.045,.026,.022],ph:0},{lat:.011,fwd:.092,len:[.05,.03,.024],ph:.25},{lat:-.01,fwd:.087,len:[.047,.028,.023],ph:.5},{lat:-.03,fwd:.076,len:[.036,.021,.02],ph:.75}];function Vo(i,t,e,n=.8){const r=i===0?-1:1,s=-r,a=r*.13+.03*Math.sin(t*.5+i),o=-.22+.04*Math.sin(t*.37+i*2),l=n+.045+.01*Math.sin(t*.8),c=t<2.5?0:.5+.5*Math.sin((t-2.5)*1.6+i*.6),u=(f,h,y,E)=>{e.joints[f*4]=h,e.joints[f*4+1]=y,e.joints[f*4+2]=E,e.joints[f*4+3]=.008};u(0,a,l,o);const d=[a+s*.02,l-.005,o-.02];u(1,d[0],d[1],d[2]);const p=.6+.6*c;let m=[d[0]+s*.025,d[1]-.004,d[2]-.03];u(2,m[0],m[1],m[2]);const g=[.032,.028,.024];let x=[s*Math.cos(p)*.7,-.15*c,-Math.cos(p)*.7-.3];for(let f=0;f<3;f++){const h=Math.hypot(x[0],x[1],x[2]);m=[m[0]+x[0]/h*g[f],m[1]+x[1]/h*g[f],m[2]+x[2]/h*g[f]],u(3+f,m[0],m[1],m[2]),x=[x[0]-s*.25*c,x[1]-.2*c,x[2]]}fm.forEach((f,h)=>{const y=5+h*5,E=a+s*f.lat;u(y,a+s*f.lat*.5,l,o-.02);let A=[E,l,o-f.fwd];u(y+1,A[0],A[1],A[2]);const C=Math.min(1,Math.max(0,c+.1*Math.sin(t*3+f.ph*6))),w=[70*C,95*C,60*C].map(U=>U*Math.PI/180);let b=0;for(let U=0;U<3;U++)b+=w[U],A=[A[0],A[1]-Math.sin(b)*f.len[U],A[2]-Math.cos(b)*f.len[U]],u(y+2+U,A[0],A[1],A[2])}),e.present=!0}const pr=101,ko=252,Wo=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],ei=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,1,2,2,2,2,3,3,3,3,5,5,6,6,6,6,7,7,7,7,9,9,10,10,10,10,11,11,11,11,13,13,14,14,14,14,15,15,15,15,17,17,18,18,18,18,19,19,19,19,0,0,0,17,0,1,0,0,0,0,5,5,9,9,13,13,0,0,0,0,0,0,0,0,1,0,5,9,2,2],ni=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,2,2,3,3,3,3,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,10,11,11,11,11,12,12,12,12,14,14,15,15,15,15,16,16,16,16,18,18,19,19,19,19,20,20,20,20,17,17,17,18,1,2,9,9,9,9,9,9,13,13,17,17,5,5,9,13,5,9,13,1,2,5,9,13,5,3],Ts=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,2,2,3,3,3,3,4,4,4,4,6,6,7,7,7,7,8,8,8,8,10,10,11,11,11,11,12,12,12,12,14,14,15,15,15,15,16,16,16,16,18,18,19,19,19,19,20,20,20,20,17,17,17,18,1,2,9,9,9,9,0,0,0,0,0,0,17,9,13,17,9,13,17,5,5,17,13,17,1,5],As=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,.5,.5,1,1,.5,.5,1,1,.5,.5,.5,.5,1,1,.5,.5,1,1,.5,.5,.5,.5,1,1,.5,.5,1,1,.5,.5,.5,.5,1,1,.5,.5,1,1,.5,.5,.7,.4,.12,1,.45,.65,1.06,1.06,1.1,1.1,.5,.45872,.5,.45872,.5,.45872,.33333,.5,.5,.5,.2,.2,.2,.33333,.33333,.6,.33333,.33333,.33333,.33333],bs=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.5,.5,0,0,.5,.5,0,0,.5,.5,.5,.5,0,0,.5,.5,0,0,.5,.5,.5,.5,0,0,.5,.5,0,0,.5,.5,.5,.5,0,0,.5,.5,0,0,.5,.5,.5,.5,0,0,.5,.5,0,0,.5,.5,.3,.6,.88,0,.55,.35,-.06,-.06,-.1,-.1,.5,.45872,.5,.45872,.5,.45872,.33333,.25,.25,.25,.4,.4,.4,.33333,.33333,.2,.33333,.33333,.33333,.33333],ws=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.08257,0,.08257,0,.08257,.33333,.25,.25,.25,.4,.4,.4,.33333,.33333,.2,.33333,.33333,.33333,.33333],dm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.15,-.15,.1395,-.1395,.129,-.129,.1185,-.1185,.108,-.108,.115,-.115,.10695,-.10695,.0989,-.0989,.09085,-.09085,.0828,-.0828,.115,-.115,.10695,-.10695,.0989,-.0989,.09085,-.09085,.0828,-.0828,.115,-.115,.10695,-.10695,.0989,-.0989,.09085,-.09085,.0828,-.0828,.115,-.115,.10695,-.10695,.0989,-.0989,.09085,-.09085,.0828,-.0828,.14,.15,.13,.16,.1,.12,.16,-.16,.3,-.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],pm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],mm=[0,0,1,1,1,0,2,2,2,0,3,3,3,0,4,4,4,0,5,5,5,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,0,0,0,5,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],Xo=[0,.1765,.3408,.4781,.6013,.4998,.7039,.8309,.948,.5052,.7324,.8737,1,.487,.6995,.8311,.9425,.4678,.6245,.7285,.8215,.2731,.2726,.3605,.3496,.4217,.4183,.4912,.4863,.5494,.548,.6087,.6087,.7118,.7098,.7754,.7733,.8386,.8372,.8956,.8956,.625,.625,.7382,.7391,.8089,.8099,.8795,.8807,.9426,.9426,.5999,.5999,.7063,.706,.7722,.7718,.8385,.8372,.8932,.893,.5549,.5549,.6328,.6339,.6848,.6859,.7361,.7388,.7825,.7825,.1478,.2882,.4194,.4841,.1026,.2465,.0611,.0611,.1118,.1118,.5592,.5419,.5439,.5102,.5057,.4666,.3611,.3443,.3249,.2687,.4833,.4524,.4109,.2712,.3497,.2624,.5221,.496,.3497,.4501],qo=[1,5,9,13,17,71,75,77,78,2,22,1,76,94,3,2,2,23,24,25,26,4,3,3,27,28,29,30,4,4,6,31,32,81,82,5,7,6,6,33,34,35,36,8,7,7,37,38,39,40,8,8,10,32,41,42,51,81,83,97,11,10,10,43,44,45,46,12,11,11,47,48,49,50,12,12,14,51,52,61,83,85,98,15,14,14,53,54,55,56,16,15,15,57,58,59,60,16,16,18,61,62,17,74,85,17,19,18,18,63,64,65,66,20,19,19,67,68,69,70,20,20,21,23,21,24,22,22,95,99,25,27,26,95,99,25,27,28,26,100,29,30,28,29,30,31,33,34,32,35,36,35,37,38,39,40,39,41,43,44,45,46,46,47,48,49,50,49,51,53,51,54,55,56,55,57,58,59,60,59,61,63,61,64,62,65,66,64,66,67,68,69,70,69,72,71,71,90,96,73,72,93,74,86,73,76,75,79,94,77,79,80,80,81,81,82,82,82,83,83,83,84,84,97,84,85,85,86,86,98,87,87,87,91,92,93,88,91,88,95,88,89,89,93,90,91,92,98,95,94,95,100],Yo=[0,0,0,0,0,0,0,0,0,1,1,75,1,1,2,21,22,2,2,2,2,3,25,26,3,3,3,3,29,30,5,5,5,5,5,91,6,31,32,6,6,6,6,7,35,36,7,7,7,7,39,40,9,9,9,9,9,9,9,9,10,41,42,10,10,10,10,11,45,46,11,11,11,11,49,50,13,13,13,13,13,13,13,14,51,52,14,14,14,14,15,55,56,15,15,15,15,59,60,17,17,17,73,17,17,86,18,61,62,18,18,18,18,19,65,66,19,19,19,19,69,70,22,21,76,22,76,94,22,22,23,23,24,24,24,26,25,26,95,26,27,28,100,30,100,32,31,32,81,33,34,36,35,36,37,38,40,42,41,42,43,44,45,45,46,47,48,50,52,51,83,52,53,54,56,55,56,57,58,60,62,61,85,62,74,63,64,74,65,65,66,67,68,70,71,78,80,71,71,72,90,72,73,73,93,75,77,75,75,78,77,77,78,82,97,84,91,97,84,97,98,91,92,84,98,86,98,92,93,86,88,89,90,87,87,87,89,88,94,88,96,90,96,90,96,92,93,92,94,96,99,95],_m=[.0162,.0075,.0325,.0036,.0268,.0183,.0029,.0254,.0019,.0217,.0035,.0045,.0212,.0413,.0062,.0112,.0314,.0474,.0289,.0198,.0488,.0023,.0429,.0145,.0072,.0059,.0154,.0408,.009,.0291,.0319,.0186,.0274,.0031,.003,.0103,.034,.0214,.0157,.0293,.0227,.015,.0397,.0349,.0122,.0287,.0263,.0438,.0365,.0144,.049,.0059,.0209,.0379,.0076,.0244,.002,.0334,.0382,.0287,.0438,.0157,.0348,.0297,.029,.0228,.042,.0472,.0237,.0332,.003,.0351,.0324,.0497,.0411,.0142,.0193,.0334,.0011,.0231,.0084,.0059,.0029,.0384,.0065,.0124,.0195,.0436,.004,.0225,.0275,.0442,.041,.0432,.0139,.0208,.0179,.0442,.0479,.0075,.0088,.0116,.0117,.0242,.0295,.0131,2e-4,.0209,.0185,.0283,.0477,.0345,.0258,.0309,.0338,.0027,.045,.039,.0437,.0399,.0196,.0199,.0052,.0317,.0031,.0034,.0104,.0081,.017,.0026,0,.0076,.0051,.0182,.0013,.0437,.0307,.0074,.0126,.0174,.0182,.0061,.0424,.0497,.0233,.0242,.0043,.0051,.0171,.0132,.0414,.0081,.0012,.0475,.0264,.0073,.0272,.0014,.0264,.0489,.0432,.0348,.0131,.0183,.0084,.0386,.0266,.039,.0165,.0112,.0406,.0492,.0426,.0403,.0409,.037,.0113,.0259,.0178,.0014,.0014,.014,.013,.0346,.0478,.0224,.0469,.0494,.0478,.0182,.011,.0113,.0098,.0102,.0312,.045,.042,.024,.0326,.04,.0042,.033,.0455,.0391,.0375,.0239,.0089,.0395,.0166,.04,.0486,.0198,.0201,.0473,.0362,.0085,.0064,.0076,.0452,.0403,.0073,.0413,.049,.0329,.0175,.0274,.0065,7e-4,.0485,.0325,.0263,.0467,.0217,.0436,.0413,.0106,.0126,.0146,.012,.0293,.013,.021,.0066,.0455,.0177,.0229,.0292,.0452,.021,.0459,.0251,.0266],gm=.15,vm=.9,xm=.12,Mm=.45,Sm=.08,Em=.6,ym=.25,Tm=1.1,Ko=.7,$o=.35,Am=.2,bm=[[108,158],[92,174],[92,174],[92,174],[92,172]],wm=[[2,3,4],[5,6,7],[9,10,11],[13,14,15],[17,18,19]],Rm=[4,8,12,16,20],Rs=3,Pi=24,ii=.32,Zo=.006,Cm=(i,t,e)=>{const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function Pm(i,t,e,n){const r=i[t*3]-i[e*3],s=i[t*3+1]-i[e*3+1],a=i[t*3+2]-i[e*3+2],o=i[n*3]-i[e*3],l=i[n*3+1]-i[e*3+1],c=i[n*3+2]-i[e*3+2],u=Math.hypot(r,s,a)*Math.hypot(o,l,c);return u<1e-12?180:Math.acos(Math.max(-1,Math.min(1,(r*o+s*l+a*c)/u)))*180/Math.PI}const Li={skin:new Lt("#E9B48F"),skinHi:new Lt("#FFE3CC"),sig:new Lt("#38E1FF"),axon:new Lt("#9FD8E6")},jo=`
attribute vec3 aA; attribute vec3 aB; attribute float aEnd; attribute float aSide;
attribute float aG0; attribute float aG1; attribute float aOff;
uniform float uHalfW;
varying float vSide; varying float vG; varying float vOff; varying float vU;
void main(){
  vec4 a = modelViewMatrix * vec4(aA, 1.0);
  vec4 b = modelViewMatrix * vec4(aB, 1.0);
  vec3 dir = b.xyz - a.xyz;
  vec3 view = normalize(mix(a.xyz, b.xyz, aEnd));
  vec3 perp = cross(dir, view);
  float pl = length(perp);
  perp = pl > 1e-9 ? perp / pl : vec3(0.0, 1.0, 0.0);
  vec4 p = mix(a, b, aEnd);
  p.xyz += perp * aSide * uHalfW;
  vSide = aSide; vG = mix(aG0, aG1, aEnd); vOff = aOff; vU = aEnd;
  gl_Position = projectionMatrix * p;
}`,Jo=`
uniform vec3 uLine; uniform vec3 uSig; uniform float uLineA; uniform float uVis; uniform float uPh; uniform float uAmp; uniform float uFire; uniform float uFade;
varying float vSide; varying float vG; varying float vOff; varying float vU;
const float SIG_DENS = 2.5, SIG_TAIL = 0.10, SIG_HEAD = 0.025, SIG_A = 1.6;
float pulse(float g, float ph, float off){ float q = fract(g*SIG_DENS + ph + off); return exp(-q/SIG_TAIL) * smoothstep(0.0, SIG_HEAD, q); }
void main(){
  float d = abs(vSide);
  float core = 1.0 - smoothstep(0.18, 0.42, d);
  float glow = exp(-d * 3.2) * (1.0 - smoothstep(0.75, 1.0, d));
  float fade = 1.0 - uFade * vU;
  vec3 col = uLine * (core * uLineA + glow * 0.18) * (1.0 + uFire * 0.6);
  col += uSig * pulse(vG, uPh, vOff) * (core * 1.1 + glow * 0.6) * uAmp * SIG_A;
  col *= uVis * fade;
  float a = clamp(max(col.r, max(col.g, col.b)), 0.0, 1.0);
  gl_FragColor = vec4(col, a);
}`,Lm=`
attribute float aSize; attribute float aAlpha;
uniform float uScale;
varying float vAlpha;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / max(-mv.z, 0.05);
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * mv;
}`,Dm=`
uniform vec3 uCol; uniform float uVis;
varying float vAlpha;
void main(){
  vec2 c = gl_PointCoord - 0.5; float r = length(c) * 2.0;
  float core = 1.0 - smoothstep(0.25, 0.45, r);
  float halo = exp(-r * 3.0) * 0.35 * (1.0 - smoothstep(0.8, 1.0, r));
  vec3 col = uCol * (core + halo) * vAlpha * uVis;
  gl_FragColor = vec4(col, clamp(max(col.r, max(col.g, col.b)), 0.0, 1.0));
}`,Tr={side:qe,transparent:!0,depthWrite:!1,depthTest:!1,blending:ul,blendEquation:tn,blendSrc:Di,blendDst:Di,blendEquationAlpha:tn,blendSrcAlpha:Di,blendDstAlpha:Di};function Qo(i){const t=new Le,e=i*4,n=o=>new le(new Float32Array(e*o),o);t.setAttribute("aA",n(3)),t.setAttribute("aB",n(3)),t.setAttribute("aG0",n(1)),t.setAttribute("aG1",n(1)),t.setAttribute("aOff",n(1));const r=new Float32Array(e),s=new Float32Array(e),a=[];for(let o=0;o<i;o++){r.set([0,0,1,1],o*4),s.set([-1,1,-1,1],o*4);const l=o*4;a.push(l,l+1,l+2,l+1,l+3,l+2)}return t.setAttribute("aEnd",new le(r,1)),t.setAttribute("aSide",new le(s,1)),t.setAttribute("position",new le(new Float32Array(e*3),3)),t.setIndex(a),t}function tl(i,t,e,n,r,s,a,o,l,c,u){const d=i.getAttribute("aA").array,p=i.getAttribute("aB").array,m=i.getAttribute("aG0").array,g=i.getAttribute("aG1").array,x=i.getAttribute("aOff").array;for(let f=0;f<4;f++){const h=t*4+f;d[h*3]=e,d[h*3+1]=n,d[h*3+2]=r,p[h*3]=s,p[h*3+1]=a,p[h*3+2]=o,m[h]=l,g[h]=c,x[h]=u}}function el(i){["aA","aB","aG0","aG1","aOff"].forEach(t=>i.getAttribute(t).needsUpdate=!0)}class nl{constructor(){this.group=new Ii,this.vis=0,this.en=0,this.ph=0,this.fire=0,this.sp=[0,0,0,0,0,0],this.ext=[0,0,0,0,0],this.speed=0,this.reps=0,this.rep={state:0,hold:0},this.L=new Float32Array(63),this.prev=null,this.P=new Float32Array(pr*3),this.edgeMat=new Pe({vertexShader:jo,fragmentShader:Jo,...Tr,uniforms:{uHalfW:{value:.0016},uLine:{value:Li.skin},uSig:{value:Li.sig},uLineA:{value:.55},uVis:{value:0},uPh:{value:0},uAmp:{value:0},uFire:{value:0},uFade:{value:0}}}),this.axonMat=new Pe({vertexShader:jo,fragmentShader:Jo,...Tr,uniforms:{uHalfW:{value:.0012},uLine:{value:Li.axon},uSig:{value:Li.sig},uLineA:{value:.35},uVis:{value:0},uPh:{value:0},uAmp:{value:0},uFire:{value:0},uFade:{value:.85}}}),this.edges=new de(Qo(ko),this.edgeMat),this.axon=new de(Qo(Rs*Pi),this.axonMat);const t=new Le;t.setAttribute("position",new le(this.P,3)),t.setAttribute("aSize",new le(new Float32Array(pr).map((e,n)=>Rm.includes(n)?1.8:n<21?1:.7),1)),t.setAttribute("aAlpha",new le(new Float32Array(pr).map((e,n)=>n<21?1:.75),1)),this.nodeMat=new Pe({vertexShader:Lm,fragmentShader:Dm,...Tr,uniforms:{uCol:{value:Li.skinHi},uVis:{value:0},uScale:{value:9}}}),this.nodes=new sm(t,this.nodeMat);for(const e of[this.edges,this.axon,this.nodes])e.frustumCulled=!1,this.group.add(e);this.edges.renderOrder=10,this.axon.renderOrder=10,this.nodes.renderOrder=11}smooth(t,e,n,r,s){const a=r===null||e>t?n:r;return t+(e-t)*(1-Math.exp(-s/Math.max(a,1e-4)))}update(t,e){t=Math.min(Math.max(t,1/240),.1),this.vis=e?Math.min(1,this.vis+t/.15):Math.max(0,this.vis-t/.4);const n=this.L;if(e&&n.set(e),this.vis<=.001){this.prev=null,this.group.visible=!1;return}if(this.group.visible=!0,e){this.ext=wm.map(([b,U,j],_)=>{const[S,G]=bm[_];return Math.max(0,Math.min(1,(Pm(n,b,U,j)-S)/(G-S)))});const C=this.ext.reduce((b,U)=>b+U,0)/5,w=this.rep;w.state<=1?C>Ko?(w.state=2,w.hold=0):C>$o&&(w.state=1):w.state===2?(w.hold+=t,C<Ko-.08&&(w.state=w.hold>=Am?3:1)):w.state===3&&C<$o&&(w.state=0,this.fire=1,this.reps++)}this.fire=Math.max(0,this.fire-t);const r=[this.ext.reduce((C,w)=>C+w,0)/5,...this.ext];this.sp=r.map((C,w)=>this.smooth(this.sp[w],Cm(gm,vm,C),xm,null,t));let s=0;if(e&&this.prev){for(let C=0;C<21;C++)s+=Math.hypot(n[C*3]-this.prev[C*3],n[C*3+1]-this.prev[C*3+1],n[C*3+2]-this.prev[C*3+2]);s=s/21/t}this.speed=s,e&&(this.prev=n.slice()),this.en=this.smooth(this.en,Math.min(1,s/Mm),Sm,Em,t),this.ph=(this.ph+t*(ym+Tm*this.en))%1,this.place();const a=this.P,o=this.edges.geometry;for(let C=0;C<ko;C++){const w=qo[C]*3,b=Yo[C]*3;tl(o,C,a[w],a[w+1],a[w+2],a[b],a[b+1],a[b+2],Xo[qo[C]],Xo[Yo[C]],_m[C])}el(o),this.nodes.geometry.getAttribute("position").needsUpdate=!0;const l=n[0],c=n[1],u=n[2];let d=l-n[27],p=c-n[28],m=u-n[29];const g=Math.hypot(d,p,m)+1e-9;d/=g,p/=g,m/=g;let x=n[15]-n[51],f=n[16]-n[52],h=n[17]-n[53];const y=Math.hypot(x,f,h)+1e-9;x/=y,f/=y,h/=y;const E=this.axon.geometry;for(let C=0;C<Rs;C++){const w=C-(Rs-1)/2;for(let b=0;b<Pi;b++){const U=b/Pi,j=(b+1)/Pi,_=w*Zo*(.2+U*2.5),S=w*Zo*(.2+j*2.5);tl(E,C*Pi+b,l+d*U*ii+x*_,c+p*U*ii+f*_,u+m*U*ii+h*_,l+d*j*ii+x*S,c+p*j*ii+f*S,u+m*j*ii+h*S,-U*1.4,-j*1.4,0)}}el(E);const A=.1+1.2*this.en+1.5*this.fire;for(const C of[this.edgeMat,this.axonMat])C.uniforms.uVis.value=this.vis,C.uniforms.uPh.value=this.ph,C.uniforms.uAmp.value=A,C.uniforms.uFire.value=this.fire;this.nodeMat.uniforms.uVis.value=this.vis}place(){const t=this.L,e=this.P,n=this.sp,r=Math.hypot(t[15]-t[51],t[16]-t[52],t[17]-t[53])+1e-6;let s=0,a=0,o=0;[0,5,9,13,17].forEach(y=>{s+=t[y*3]/5,a+=t[y*3+1]/5,o+=t[y*3+2]/5});const l=t[15]-t[0],c=t[16]-t[1],u=t[17]-t[2],d=t[51]-t[0],p=t[52]-t[1],m=t[53]-t[2];let g=c*m-u*p,x=u*d-l*m,f=l*p-c*d;const h=Math.hypot(g,x,f)+1e-12;g/=h,x/=h,f/=h;for(let y=0;y<pr;y++){let E=As[y]*t[ei[y]*3]+bs[y]*t[ni[y]*3]+ws[y]*t[Ts[y]*3],A=As[y]*t[ei[y]*3+1]+bs[y]*t[ni[y]*3+1]+ws[y]*t[Ts[y]*3+1],C=As[y]*t[ei[y]*3+2]+bs[y]*t[ni[y]*3+2]+ws[y]*t[Ts[y]*3+2];const w=n[mm[y]];if(Wo[y]===1){const b=t[ni[y]*3]-t[ei[y]*3],U=t[ni[y]*3+1]-t[ei[y]*3+1],j=t[ni[y]*3+2]-t[ei[y]*3+2];let _=x*j-f*U,S=f*b-g*j,G=g*U-x*b;const B=Math.hypot(_,S,G)+1e-12;_/=B,S/=B,G/=B;const q=pm[y]===1&&_*(E-s)+S*(A-a)+G*(C-o)<0?-1:1,K=dm[y]*q*r*w;E+=_*K,A+=S*K,C+=G*K}else if(Wo[y]===2){const b=.12+.88*w;E=s+(E-s)*b,A=a+(A-a)*b,C=o+(C-o)*b}e[y*3]=E,e[y*3+1]=A,e[y*3+2]=C}}wake(t){const e=this.L;[4,8,12,16,20,9].forEach((n,r)=>{t[r].x=e[n*3],t[r].y=e[n*3+1],t[r].z=e[n*3+2]})}}const Ir=.9,Nr=.6,il=288,rl=192,ai=12,Um="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Im=`
uniform sampler2D uPrev; uniform vec2 uTexel; uniform vec4 uSrc[${ai}];
varying vec2 vUv;
const float WAVE_C2 = 0.30, DAMP = 0.988, SMOOTH = 0.02, SRC_R = 0.012, SRC_AMP = 0.006, EDGE = 0.05;
void main(){
  vec2 st = texture2D(uPrev, vUv).rg;
  float h = st.r, hp = st.g;
  float n = texture2D(uPrev, vUv + vec2(0.0, uTexel.y)).r, s = texture2D(uPrev, vUv - vec2(0.0, uTexel.y)).r;
  float e = texture2D(uPrev, vUv + vec2(uTexel.x, 0.0)).r, w = texture2D(uPrev, vUv - vec2(uTexel.x, 0.0)).r;
  float hn = 2.0*h - hp + WAVE_C2*(n+s+e+w-4.0*h);
  hn = mix(hn, 0.25*(n+s+e+w), SMOOTH);
  hn *= DAMP;
  vec2 p = vUv * vec2(${Ir.toFixed(2)}, ${Nr.toFixed(2)});
  for (int k = 0; k < ${ai}; k++){
    vec4 S = uSrc[k];
    if (S.z <= 0.0) continue;
    vec2 d = p - S.xy;
    hn += SRC_AMP * S.z * exp(-dot(d, d) / (SRC_R*SRC_R));
  }
  float edge = smoothstep(0.0, EDGE, vUv.x) * smoothstep(0.0, EDGE, 1.0-vUv.x) * smoothstep(0.0, EDGE, vUv.y) * smoothstep(0.0, EDGE, 1.0-vUv.y);
  hn *= mix(0.9, 1.0, edge);
  gl_FragColor = vec4(hn, h, 0.0, 1.0);
}`,Nm="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Fm=`
uniform sampler2D uWater; uniform float uT; uniform float uVis; uniform vec3 uTopo; uniform vec3 uStir;
varying vec2 vUv;
const float TOPO_LEVELS = 14.0, TOPO_SCALE = 3.2, TOPO_DRIFT = 0.008, TOPO_W = 0.45, TOPO_W_MAJ = 0.75, TOPO_A = 0.30, TOPO_A_MAJ = 0.50;
const float WATER_GAIN = 1.6, STIR_GAIN = 8.0, STIR_A = 0.75;
float lhash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(lhash(i), lhash(i+vec2(1,0)), f.x), mix(lhash(i+vec2(0,1)), lhash(i+vec2(1,1)), f.x), f.y); }
float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = p*2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
void main(){
  vec2 p = (vUv - 0.5) * vec2(${Ir.toFixed(2)}, ${Nr.toFixed(2)});
  float terrain = fbm(p * TOPO_SCALE + vec2(uT*TOPO_DRIFT, -uT*TOPO_DRIFT*0.6));
  float wh = texture2D(uWater, vUv).r;
  float f = (terrain + WATER_GAIN*wh) * TOPO_LEVELS;
  float fw = max(fwidth(f), 1e-5);
  float dl = abs(fract(f - 0.5) - 0.5) / fw;
  float idx = floor(f + 0.5);
  bool maj = abs(mod(idx, 5.0)) < 0.5;
  float lt = clamp((maj ? TOPO_W_MAJ : TOPO_W) + 0.5 - dl, 0.0, 1.0);
  float stir = clamp(abs(wh) * STIR_GAIN, 0.0, 1.0);
  float br = (maj ? TOPO_A_MAJ : TOPO_A) + STIR_A * stir;
  vec2 q = abs(vUv - 0.5) * 2.0;
  float vig = (1.0 - smoothstep(0.7, 1.0, q.x)) * (1.0 - smoothstep(0.65, 1.0, q.y));
  vec3 col = mix(uTopo, uStir, stir) * lt * br * vig * uVis;
  gl_FragColor = vec4(col, clamp(max(col.r, max(col.g, col.b)), 0.0, 1.0));
}`;class Om{constructor(t){this.vis=0,this.placed=!1,this.rt=[],this.cur=0,this.simScene=new Vl,this.simCam=new Fl(-1,1,1,-1,0,1),this.simMat=null,this.src=Array.from({length:ai},()=>new te),this.prev=Array.from({length:ai},()=>null),this.sm=new Float32Array(ai),this.inv=new Jt,this.tmp=new I,this.T=0;const e=t.getContext();if(this.simOK=!!e.getExtension("EXT_color_buffer_float")||!!e.getExtension("EXT_color_buffer_half_float"),this.simOK){for(let n=0;n<2;n++)this.rt.push(new vn(il,rl,{type:vi,format:Oe,minFilter:Ce,magFilter:Ce,depthBuffer:!1}));this.simMat=new Pe({vertexShader:Um,fragmentShader:Im,uniforms:{uPrev:{value:null},uTexel:{value:new Yt(1/il,1/rl)},uSrc:{value:this.src}}}),this.simScene.add(new de(new Bn(2,2),this.simMat))}this.surfMat=new Pe({vertexShader:Nm,fragmentShader:Fm,...Tr,uniforms:{uWater:{value:this.simOK?this.rt[0].texture:null},uT:{value:0},uVis:{value:0},uTopo:{value:new Lt("#7E9AAE")},uStir:{value:new Lt("#BFE6F2")}}}),this.mesh=new de(new Bn(Ir,Nr),this.surfMat),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=5,this.mesh.visible=!1}place(t,e,n,r){this.mesh.position.set(t,e,n),this.mesh.rotation.set(-Math.PI/2,r,0,"YXZ"),this.mesh.updateMatrixWorld(!0),this.inv.copy(this.mesh.matrixWorld).invert(),this.mesh.visible=!0,this.placed=!0}update(t,e,n){if(this.T=(this.T+t)%1e4,!this.placed)return;this.vis=Math.min(1,this.vis+t/1.2),this.surfMat.uniforms.uT.value=this.T,this.surfMat.uniforms.uVis.value=this.vis;for(let l=0;l<ai;l++){const c=e[l],u=this.src[l];if(!c){this.prev[l]=null,this.sm[l]=0,u.set(0,0,0,0);continue}const d=this.prev[l]?c.distanceTo(this.prev[l])/Math.max(t,.001):0;this.prev[l]=(this.prev[l]??new I).copy(c),this.sm[l]+=(d-this.sm[l])*(1-Math.exp(-t/(d>this.sm[l]?.03:.15))),this.tmp.copy(c).applyMatrix4(this.inv);const p=this.tmp.x+Ir/2,m=this.tmp.y+Nr/2,g=this.tmp.z,x=Math.exp(-Math.max(0,g)/.07),f=Math.max(0,Math.min(this.sm[l],1.5)-.04)*x;u.set(p,m,f,0)}if(!this.simOK||!this.simMat)return;const r=n.getRenderTarget(),s=n.xr.enabled;n.xr.enabled=!1;const a=this.rt[this.cur],o=this.rt[1-this.cur];this.simMat.uniforms.uPrev.value=a.texture,n.setRenderTarget(o),n.render(this.simScene,this.simCam),n.xr.enabled=s,n.setRenderTarget(r),this.cur=1-this.cur,this.surfMat.uniforms.uWater.value=o.texture}}class Bm{constructor(){this.pos=new I,this.init=!1;const t=document.createElement("canvas");t.width=768,t.height=288,this.ctx=t.getContext("2d"),this.tex=new am(t),this.tex.colorSpace=Ve,this.mesh=new de(new Bn(.3,.1125),new Br({map:this.tex,transparent:!0,depthTest:!1,depthWrite:!1})),this.mesh.renderOrder=30}draw(t,e="#38E1FF"){const n=this.ctx;n.clearRect(0,0,768,288),n.fillStyle="rgba(10,14,17,0.72)",n.beginPath(),n.roundRect(4,4,760,280,22),n.fill(),n.strokeStyle=e,n.lineWidth=2,n.stroke(),n.font="600 30px system-ui, sans-serif",n.fillStyle=e,n.fillText(t[0]??"",30,56),n.font="400 32px system-ui, sans-serif",n.fillStyle="#E9EEF0",t.slice(1).forEach((r,s)=>n.fillText(r,30,112+s*52)),this.tex.needsUpdate=!0}follow(t,e,n){const r=new I(0,0,-1).applyQuaternion(e);r.y=0,r.lengthSq()<1e-6&&r.set(0,0,-1),r.normalize();const s=new I(r.z,0,-r.x),a=t.clone().addScaledVector(r,.6).addScaledVector(s,.2);a.y-=.06,this.init||(this.pos.copy(a),this.init=!0),this.pos.lerp(a,1-Math.exp(-n/.6)),this.mesh.position.copy(this.pos),this.mesh.lookAt(t.x,this.pos.y+.12,t.z)}}const zm="https://bhngzxgnxwxwwxwimkzr.supabase.co",sl="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJobmd6eGdueHd4d3d4d2lta3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMwMTU0MjUsImV4cCI6MjEwODU5MTQyNX0.Av8hHxsXYdf7Pn1ntwx6D4uF1tNyUSuQFDCnMOBNwF0",Wl=.62,Gr="2026-10-26 13:22",Re=160,al=120*200;class Xl{constructor(){this.buf=new Float32Array(al*Re),this.n=0,this.t0=-1}push(t,e,n){if(this.n>=al)return;this.t0<0&&(this.t0=t);const r=this.n*Re,s=this.buf;s[r]=t-this.t0,s.set(e.p,r+1),s.set(e.q,r+4),s[r+8]=n[0].present?1:0,s[r+9]=n[1].present?1:0;for(let a=0;a<2;a++)if(n[a].present)for(let o=0;o<25;o++)s[r+10+a*75+o*3]=n[a].joints[o*4],s[r+10+a*75+o*3+1]=n[a].joints[o*4+1],s[r+10+a*75+o*3+2]=n[a].joints[o*4+2];this.n++}summary(t){const e=this.n,n=this.buf;if(e<2)return{frames:e};const r=[];let s=0,a=0;for(let d=0;d<e;d++)s+=n[d*Re+8],a+=n[d*Re+9],d&&r.push(n[d*Re]-n[(d-1)*Re]);const o=[...r].sort((d,p)=>d-p),l=d=>o[Math.min(o.length-1,Math.floor(d*o.length))],c=n[(e-1)*Re]/1e3,u=1e3/t;return{frames:e,duration_s:+c.toFixed(1),fps_mean:+((e-1)/c).toFixed(1),target_fps:t,frame_ms_median:+l(.5).toFixed(2),frame_ms_p95:+l(.95).toFixed(2),frame_ms_max:+o[o.length-1].toFixed(1),frames_late_pct:+(100*r.filter(d=>d>u*1.5).length/r.length).toFixed(2),left_present_pct:+(100*s/e).toFixed(1),right_present_pct:+(100*a/e).toFixed(1)}}payload(){const t=this.n,e=this.buf,n=[];for(let a=1;a<t;a++)n.push(Math.round((e[a*Re]-e[(a-1)*Re])*100));const r=[];let s=0;for(let a=0;a<t;a++){const o=e[a*Re];if(o>12e4)break;if(o<s)continue;s=o+50;const l=a*Re,c=[Math.round(o)];for(let u=1;u<4;u++)c.push(Math.round(e[l+u]*1e4));for(let u=4;u<8;u++)c.push(Math.round(e[l+u]*1e4));c.push(e[l+8],e[l+9]);for(let u=0;u<2;u++)for(let d=0;d<75;d++)c.push(e[l+8+u]?Math.round(e[l+10+u*75+d]*1e4):0);r.push(c)}return{units:"positions in 0.1 mm, quaternion x1e4, dt in 0.01 ms",layout:"t_ms, head xyz, head quat xyzw, presentL, presentR, left 25 joints xyz, right 25 joints xyz (WebXR joint order)",dt:n,rows:r}}full(){return{per:Re,frames:this.n,data:Array.from(this.buf.subarray(0,this.n*Re),t=>+t.toFixed(5))}}}async function Gm(i,t,e){try{const n=await fetch(`${zm}/rest/v1/vr_logs`,{method:"POST",headers:{apikey:sl,Authorization:`Bearer ${sl}`,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify({kind:i,meta:t,data:e})});return n.ok?"uploaded":`upload failed (${n.status}) ${(await n.text()).slice(0,200)}`}catch(n){return`upload failed: ${n.message}`}}const ri=i=>document.getElementById(i),Se={enter:ri("enter"),preview:ri("preview"),status:ri("status"),result:ri("result"),dl:ri("download")};ri("build").textContent=Gr;const he=new em({antialias:!0,alpha:!0});he.setPixelRatio(Math.min(window.devicePixelRatio,2));he.setSize(window.innerWidth,window.innerHeight);he.setClearColor(0,0);he.xr.enabled=!0;he.domElement.id="gl";document.body.appendChild(he.domElement);const xn=new Vl,Fn=new Ne(60,window.innerWidth/window.innerHeight,.01,30);Fn.position.set(0,1.12,.12);Fn.lookAt(0,.84,-.24);const Hm=new Br({color:0,transparent:!0,opacity:Wl,side:pe,depthWrite:!1,depthTest:!1}),Hr=new de(new La(8,24,16),Hm);Hr.renderOrder=0;xn.add(Hr);const rn=[new nl,new nl];rn.forEach(i=>xn.add(i.group));const We=new Om(he);xn.add(We.mesh);const Ma=new Bm;xn.add(Ma.mesh);let zn=new Xl;const Ie=[Ho(),Ho()],Ln=[new Float32Array(63),new Float32Array(63)],ol=Array.from({length:12},()=>null),Vm=Array.from({length:12},()=>new I),mr=new I,Ni=new Mi;let _i="idle",Ar=-1,br=0,Cs=0,Nn=0,gi=72,_r=0,Ps=0,Ls=0,Dn=null;function ll(i){const t=i[15]-i[0],e=i[16]-i[1],n=i[17]-i[2],r=i[51]-i[0],s=i[52]-i[1],a=i[53]-i[2],o=e*a-n*s,l=n*r-t*a,c=t*s-e*r,u=l/(Math.hypot(o,l,c)+1e-12);let d=0,p=0,m=0,g=1e9;return[0,5,9,13,17].forEach(x=>{d+=i[x*3]/5,p+=i[x*3+1]/5,m+=i[x*3+2]/5,g=Math.min(g,i[x*3+1])}),{flat:Math.abs(u),cx:d,cy:p,cz:m,minY:g}}function km(i){if(We.placed)return;if(!Ie[0].present||!Ie[1].present){Nn=0;return}const t=ll(Ln[0]),e=ll(Ln[1]),n=rn[0].speed<.06&&rn[1].speed<.06;if(t.flat>.75&&e.flat>.75&&n?Nn+=i:Nn=0,Nn>=1.5){const r=new I(0,0,-1).applyQuaternion(Ni),s=Math.atan2(-r.x,-r.z);We.place((t.cx+e.cx)/2,Math.min(t.minY,e.minY)-.012,(t.cz+e.cz)/2-.05,s)}}function ql(i,t){const e=Ar<0?.013888888888888888:Math.min(.1,(i-Ar)/1e3);if(Ar=i,br+=e,t){const n=he.xr.getReferenceSpace();um(t,n,Ie);const r=t.getViewerPose(n);if(r){const s=r.transform.position,a=r.transform.orientation;mr.set(s.x,s.y,s.z),Ni.set(a.x,a.y,a.z,a.w)}}else Vo(0,br,Ie[0]),Vo(1,br,Ie[1]),mr.copy(Fn.position),Ni.copy(Fn.quaternion);for(let n=0;n<2;n++){Ie[n].present&&hm(Ie[n],Ln[n]),rn[n].update(e,Ie[n].present?Ln[n]:null);for(let r=0;r<6;r++){const s=[4,8,12,16,20,9][r];ol[n*6+r]=Ie[n].present?Vm[n*6+r].set(Ln[n][s*3],Ln[n][s*3+1],Ln[n][s*3+2]):null}}if(km(e),We.update(e,ol,he),zn.push(i,{p:mr.toArray(),q:Ni.toArray()},Ie),_r+=e,Ps++,_r>=.5&&(Ls=Ps/_r,_r=0,Ps=0),Ma.follow(mr,Ni,e),Cs+=e,Cs>.25){Cs=0;const n=Ie[0].present?"seen":"—",r=Ie[1].present?"seen":"—";Ma.draw([`MIRA · VR test  ${Gr}`,`${Ls.toFixed(0)} fps (target ${gi})   left ${n}   right ${r}`,We.placed?`reps L ${rn[0].reps} · R ${rn[1].reps}   log ${(zn.n/Math.max(Ls,1)).toFixed(0)} s`:Nn>0?`hold still… ${Math.min(100,Nn/1.5*100).toFixed(0)}%`:"Place both hands flat on the desk, hold still",We.placed?"Press the Meta button to finish and save":""],We.placed?"#38E1FF":"#FFC27A")}he.render(xn,Fn)}async function Yl(){he.setAnimationLoop(null);const i=_i==="xr";_i="idle",document.body.classList.remove("previewing");const t={...zn.summary(gi),desk_placed:We.placed,reps_left:rn[0].reps,reps_right:rn[1].reps};if(Se.result.textContent=JSON.stringify(t,null,2),Se.dl.hidden=!1,i){Se.status.textContent="Saving the test log…";const e={build:Gr,ua:navigator.userAgent,dim:Wl,summary:t,at:new Date().toISOString()};Se.status.textContent=`Test finished — log ${await Gm("spike",e,zn.payload())}.`}else Se.status.textContent="Preview stopped."}Se.dl.onclick=()=>{const i=new Blob([JSON.stringify({build:Gr,summary:zn.summary(gi),...zn.full()})],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=`mira_vr_test_${Date.now()}.json`,t.click()};function Kl(){zn=new Xl,Ar=-1,br=0,Nn=0,We.placed=!1,We.vis=0,We.mesh.visible=!1,rn.forEach(i=>i.reps=0),Se.result.textContent="",Se.dl.hidden=!0}Se.enter.onclick=async()=>{try{Kl();const i=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hand-tracking"],optionalFeatures:["local-floor"]});he.xr.setReferenceSpaceType("local-floor"),await he.xr.setSession(i),gi=72;const t=i.supportedFrameRates;if(t&&Array.from(t).includes(90)&&i.updateTargetFrameRate)try{await i.updateTargetFrameRate(90),gi=90}catch{}Dn&&(Dn.visible=!1),xn.background=null,Hr.visible=!0,_i="xr",i.addEventListener("end",Yl),he.setAnimationLoop(ql)}catch(i){Se.status.textContent=`Could not start VR: ${i.message}`}};function $l(){Kl(),_i="preview",gi=60,xn.background=new Lt("#1B2024"),Hr.visible=!1,Dn||(Dn=new om(3,60,3818828,2765367),Dn.position.y=.8,xn.add(Dn)),Dn.visible=!0,document.body.classList.add("previewing"),Se.status.textContent="Desktop preview with simulated hands. Press Esc to stop.",he.setAnimationLoop(ql)}Se.preview.onclick=$l;window.addEventListener("keydown",i=>{i.key==="Escape"&&_i==="preview"&&Yl()});window.addEventListener("resize",()=>{Fn.aspect=window.innerWidth/window.innerHeight,Fn.updateProjectionMatrix(),_i!=="xr"&&he.setSize(window.innerWidth,window.innerHeight)});(async()=>{const i=!!navigator.xr&&await navigator.xr.isSessionSupported("immersive-ar").catch(()=>!1);Se.enter.disabled=!i,Se.status.textContent=i?"Ready. Sit at a desk, then press Enter Mira.":"Mixed reality is not available in this browser. Open this page in the Meta Quest Browser, or use the desktop preview.",new URLSearchParams(location.search).has("preview")&&$l()})();
