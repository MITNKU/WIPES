import{x as zc,o as Hc,k as kc,i as ji,g as gs,j as mr,f as Vc,m as er,H as Ca}from"./index-Tw9ngM3G.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="171",li={ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gc=0,Ta=1,Wc=2,Ql=1,Xc=2,vn=3,fn=0,Ot=1,jt=2,zn=0,Hn=1,ba=2,wa=3,Ra=4,Yl=5,$n=100,qc=101,Qc=102,Yc=103,Kc=104,jc=200,Zc=201,Jc=202,$c=203,ls=204,cs=205,eu=206,tu=207,nu=208,iu=209,su=210,ru=211,ou=212,au=213,lu=214,to=0,no=1,io=2,Ni=3,so=4,ro=5,oo=6,ao=7,Kl=0,cu=1,uu=2,kn=0,du=1,hu=2,fu=3,pu=4,mu=5,gu=6,Au=7,jl=300,Oi=301,zi=302,lo=303,co=304,lr=306,uo=1e3,ti=1001,ho=1002,Vt=1003,xu=1004,As=1005,un=1006,gr=1007,ni=1008,pn=1009,Zl=1010,Jl=1011,us=1012,Wo=1013,Zt=1014,an=1015,qi=1016,Xo=1017,qo=1018,Hi=1020,$l=35902,ec=1021,tc=1022,Lt=1023,nc=1024,ic=1025,si=1026,ki=1027,sc=1028,cr=1029,Qo=1030,Yo=1031,Pi=1033,qs=33776,Qs=33777,Ys=33778,Ks=33779,fo=35840,po=35841,mo=35842,go=35843,Ao=36196,xo=37492,_o=37496,So=37808,vo=37809,yo=37810,Mo=37811,Eo=37812,Co=37813,To=37814,bo=37815,wo=37816,Ro=37817,Io=37818,Do=37819,Po=37820,Fo=37821,js=36492,Lo=36494,Bo=36495,rc=36283,Uo=36284,No=36285,Oo=36286,_u=3200,Su=3201,vu=0,yu=1,Nn="",Yt="srgb",Vi="srgb-linear",tr="linear",rt="srgb",ui=7680,Ia=519,Mu=512,Eu=513,Cu=514,oc=515,Tu=516,bu=517,wu=518,Ru=519,Da=35044,Iu=35048,Pa="300 es",Cn=2e3,nr=2001;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zs=Math.PI/180,zo=180/Math.PI;function fs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Qe(r,e,t){return Math.max(e,Math.min(t,r))}function Du(r,e){return(r%e+e)%e}function Ar(r,e,t){return(1-t)*r+t*e}function Zi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ac={DEG2RAD:Zs};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,i,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],A=i[0],m=i[3],f=i[6],y=i[1],S=i[4],x=i[7],T=i[2],E=i[5],v=i[8];return s[0]=o*A+a*y+l*T,s[3]=o*m+a*S+l*E,s[6]=o*f+a*x+l*v,s[1]=c*A+u*y+d*T,s[4]=c*m+u*S+d*E,s[7]=c*f+u*x+d*v,s[2]=h*A+p*y+g*T,s[5]=h*m+p*S+g*E,s[8]=h*f+p*x+g*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*d+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/g;return e[0]=d*A,e[1]=(i*c-u*n)*A,e[2]=(a*n-i*o)*A,e[3]=h*A,e[4]=(u*t-i*l)*A,e[5]=(i*s-a*t)*A,e[6]=p*A,e[7]=(n*l-c*t)*A,e[8]=(o*t-n*s)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xr.makeScale(e,t)),this}rotate(e){return this.premultiply(xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new Fe;function lc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Pu(){const r=ir("canvas");return r.style.display="block",r}const Fa={};function wi(r){r in Fa||(Fa[r]=!0,console.warn(r))}function Fu(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Lu(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bu(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const La=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ba=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uu(){const r={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(i.r=Tn(i.r),i.g=Tn(i.g),i.b=Tn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?tr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Vi]:{primaries:e,whitePoint:n,transfer:tr,toXYZ:La,fromXYZ:Ba,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:La,fromXYZ:Ba,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),r}const Je=Uu();function Tn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let di;class Nu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{di===void 0&&(di=ir("canvas")),di.width=e.width,di.height=e.height;const n=di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Tn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ou=0;class cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(_r(i[o].image)):s.push(_r(i[o]))}else s=_r(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function _r(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Nu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zu=0;class Bt extends oi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=ti,i=ti,s=un,o=ni,a=Lt,l=pn,c=Bt.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=fs(),this.name="",this.source=new cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=jl;Bt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],A=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-A)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+A)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(p+1)/2,T=(f+1)/2,E=(u+h)/4,v=(d+A)/4,w=(g+m)/4;return S>x&&S>T?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=E/n,s=v/n):x>T?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=w/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=v/s,i=w/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-A)*(d-A)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-A)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hu extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Hu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uc extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ku extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ht{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[o+0],p=s[o+1],g=s[o+2],A=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=A;return}if(d!==A||l!==h||c!==p||u!==g){let m=1-a;const f=l*h+c*p+u*g+d*A,y=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const T=Math.sqrt(S),E=Math.atan2(T,f*y);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}const x=a*y;if(l=l*m+h*x,c=c*m+p*x,u=u*m+g*x,d=d*m+A*x,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-a*p,e[t+2]=c*g+u*p+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ua.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ua.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sr.copy(this).projectOnVector(e),this.sub(Sr)}reflect(e){return this.sub(Sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sr=new D,Ua=new ht;class dn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,nn):nn.fromBufferAttribute(s,o),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),_s.subVectors(this.max,Ji),hi.subVectors(e.a,Ji),fi.subVectors(e.b,Ji),pi.subVectors(e.c,Ji),wn.subVectors(fi,hi),Rn.subVectors(pi,fi),qn.subVectors(hi,pi);let t=[0,-wn.z,wn.y,0,-Rn.z,Rn.y,0,-qn.z,qn.y,wn.z,0,-wn.x,Rn.z,0,-Rn.x,qn.z,0,-qn.x,-wn.y,wn.x,0,-Rn.y,Rn.x,0,-qn.y,qn.x,0];return!vr(t,hi,fi,pi,_s)||(t=[1,0,0,0,1,0,0,0,1],!vr(t,hi,fi,pi,_s))?!1:(Ss.crossVectors(wn,Rn),t=[Ss.x,Ss.y,Ss.z],vr(t,hi,fi,pi,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new D,new D,new D,new D,new D,new D,new D,new D],nn=new D,xs=new dn,hi=new D,fi=new D,pi=new D,wn=new D,Rn=new D,qn=new D,Ji=new D,_s=new D,Ss=new D,Qn=new D;function vr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Qn.fromArray(r,s);const a=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=e.dot(Qn),c=t.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Vu=new dn,$i=new D,yr=new D;class Ko{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);const t=$i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($i,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(yr)),this.expandByPoint($i.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new D,Mr=new D,vs=new D,In=new D,Er=new D,ys=new D,Cr=new D;let dc=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Mr.copy(e).add(t).multiplyScalar(.5),vs.copy(t).sub(e).normalize(),In.copy(this.origin).sub(Mr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(vs),a=In.dot(this.direction),l=-In.dot(vs),c=In.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const A=1/u;d*=A,h*=A,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Mr).addScaledVector(vs,h),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,i,s){Er.subVectors(t,e),ys.subVectors(n,e),Cr.crossVectors(Er,ys);let o=this.direction.dot(Cr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,e);const l=a*this.direction.dot(ys.crossVectors(In,ys));if(l<0)return null;const c=a*this.direction.dot(Er.cross(In));if(c<0||l+c>o)return null;const u=-a*In.dot(Cr);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Le{constructor(e,t,n,i,s,o,a,l,c,u,d,h,p,g,A,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,d,h,p,g,A,m)}set(e,t,n,i,s,o,a,l,c,u,d,h,p,g,A,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=A,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),o=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,A=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-A*c,t[9]=-a*l,t[2]=A-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,A=c*d;t[0]=h+A*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=A+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,A=c*d;t[0]=h-A*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=A-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,A=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+A,t[1]=l*d,t[5]=A*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,A=a*c;t[0]=l*u,t[4]=A-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-A*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,A=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+A,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=A*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gu,e,Wu)}lookAt(e,t,n){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Dn.crossVectors(n,Ht),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Dn.crossVectors(n,Ht)),Dn.normalize(),Ms.crossVectors(Ht,Dn),i[0]=Dn.x,i[4]=Ms.x,i[8]=Ht.x,i[1]=Dn.y,i[5]=Ms.y,i[9]=Ht.y,i[2]=Dn.z,i[6]=Ms.z,i[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],A=n[6],m=n[10],f=n[14],y=n[3],S=n[7],x=n[11],T=n[15],E=i[0],v=i[4],w=i[8],M=i[12],_=i[1],R=i[5],B=i[9],F=i[13],L=i[2],z=i[6],N=i[10],X=i[14],k=i[3],$=i[7],ne=i[11],ue=i[15];return s[0]=o*E+a*_+l*L+c*k,s[4]=o*v+a*R+l*z+c*$,s[8]=o*w+a*B+l*N+c*ne,s[12]=o*M+a*F+l*X+c*ue,s[1]=u*E+d*_+h*L+p*k,s[5]=u*v+d*R+h*z+p*$,s[9]=u*w+d*B+h*N+p*ne,s[13]=u*M+d*F+h*X+p*ue,s[2]=g*E+A*_+m*L+f*k,s[6]=g*v+A*R+m*z+f*$,s[10]=g*w+A*B+m*N+f*ne,s[14]=g*M+A*F+m*X+f*ue,s[3]=y*E+S*_+x*L+T*k,s[7]=y*v+S*R+x*z+T*$,s[11]=y*w+S*B+x*N+T*ne,s[15]=y*M+S*F+x*X+T*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],A=e[7],m=e[11],f=e[15];return g*(+s*l*d-i*c*d-s*a*h+n*c*h+i*a*p-n*l*p)+A*(+t*l*p-t*c*h+s*o*h-i*o*p+i*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+n*o*p+s*a*u-n*c*u)+f*(-i*a*u-t*l*d+t*a*h+i*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],A=e[13],m=e[14],f=e[15],y=d*m*c-A*h*c+A*l*p-a*m*p-d*l*f+a*h*f,S=g*h*c-u*m*c-g*l*p+o*m*p+u*l*f-o*h*f,x=u*A*c-g*d*c+g*a*p-o*A*p-u*a*f+o*d*f,T=g*d*l-u*A*l-g*a*h+o*A*h+u*a*m-o*d*m,E=t*y+n*S+i*x+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/E;return e[0]=y*v,e[1]=(A*h*s-d*m*s-A*i*p+n*m*p+d*i*f-n*h*f)*v,e[2]=(a*m*s-A*l*s+A*i*c-n*m*c-a*i*f+n*l*f)*v,e[3]=(d*l*s-a*h*s-d*i*c+n*h*c+a*i*p-n*l*p)*v,e[4]=S*v,e[5]=(u*m*s-g*h*s+g*i*p-t*m*p-u*i*f+t*h*f)*v,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*f-t*l*f)*v,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*p+t*l*p)*v,e[8]=x*v,e[9]=(g*d*s-u*A*s-g*n*p+t*A*p+u*n*f-t*d*f)*v,e[10]=(o*A*s-g*a*s+g*n*c-t*A*c-o*n*f+t*a*f)*v,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*p-t*a*p)*v,e[12]=T*v,e[13]=(u*A*i-g*d*i+g*n*h-t*A*h-u*n*m+t*d*m)*v,e[14]=(g*a*i-o*A*i-g*n*l+t*A*l+o*n*m-t*a*m)*v,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*h+t*a*h)*v,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,g=s*d,A=o*u,m=o*d,f=a*d,y=l*c,S=l*u,x=l*d,T=n.x,E=n.y,v=n.z;return i[0]=(1-(A+f))*T,i[1]=(p+x)*T,i[2]=(g-S)*T,i[3]=0,i[4]=(p-x)*E,i[5]=(1-(h+f))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(g+S)*v,i[9]=(m-y)*v,i[10]=(1-(h+A))*v,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=mi.set(i[0],i[1],i[2]).length();const o=mi.set(i[4],i[5],i[6]).length(),a=mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],sn.copy(this);const c=1/s,u=1/o,d=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,t.setFromRotationMatrix(sn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Cn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let p,g;if(a===Cn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===nr)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Cn){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(o-s),h=(t+e)*c,p=(n+i)*u;let g,A;if(a===Cn)g=(o+s)*d,A=-2*d;else if(a===nr)g=s*d,A=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=A,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mi=new D,sn=new Le,Gu=new D(0,0,0),Wu=new D(1,1,1),Dn=new D,Ms=new D,Ht=new D,Na=new Le,Oa=new ht;class bn{constructor(e=0,t=0,n=0,i=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Na.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Na,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oa.setFromEuler(this),this.setFromQuaternion(Oa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xu=0;const za=new D,gi=new ht,xn=new Le,Es=new D,es=new D,qu=new D,Qu=new ht,Ha=new D(1,0,0),ka=new D(0,1,0),Va=new D(0,0,1),Ga={type:"added"},Yu={type:"removed"},Ai={type:"childadded",child:null},Tr={type:"childremoved",child:null};class vt extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new D,t=new bn,n=new ht,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new Fe}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(Ha,e)}rotateY(e){return this.rotateOnAxis(ka,e)}rotateZ(e){return this.rotateOnAxis(Va,e)}translateOnAxis(e,t){return za.copy(e).applyQuaternion(this.quaternion),this.position.add(za.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ha,e)}translateY(e){return this.translateOnAxis(ka,e)}translateZ(e){return this.translateOnAxis(Va,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Es.copy(e):Es.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(es,Es,this.up):xn.lookAt(Es,es,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(xn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ga),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yu),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ga),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,qu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Qu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new D(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new D,_n=new D,br=new D,Sn=new D,xi=new D,_i=new D,Wa=new D,wr=new D,Rr=new D,Ir=new D,Dr=new dt,Pr=new dt,Fr=new dt;class on{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){rn.subVectors(i,t),_n.subVectors(n,t),br.subVectors(e,t);const o=rn.dot(rn),a=rn.dot(_n),l=rn.dot(br),c=_n.dot(_n),u=_n.dot(br),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Dr.setScalar(0),Pr.setScalar(0),Fr.setScalar(0),Dr.fromBufferAttribute(e,t),Pr.fromBufferAttribute(e,n),Fr.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Dr,s.x),o.addScaledVector(Pr,s.y),o.addScaledVector(Fr,s.z),o}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),_n.subVectors(e,t),rn.cross(_n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),rn.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return on.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;xi.subVectors(i,n),_i.subVectors(s,n),wr.subVectors(e,n);const l=xi.dot(wr),c=_i.dot(wr);if(l<=0&&c<=0)return t.copy(n);Rr.subVectors(e,i);const u=xi.dot(Rr),d=_i.dot(Rr);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(xi,o);Ir.subVectors(e,s);const p=xi.dot(Ir),g=_i.dot(Ir);if(g>=0&&p<=g)return t.copy(s);const A=p*c-l*g;if(A<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(_i,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Wa.subVectors(s,i),a=(d-u)/(d-u+(p-g)),t.copy(i).addScaledVector(Wa,a);const f=1/(m+A+h);return o=A*f,a=h*f,t.copy(n).addScaledVector(xi,o).addScaledVector(_i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Lr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=Du(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Lr(o,s,e+1/3),this.g=Lr(o,s,e),this.b=Lr(o,s,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=fc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Je.fromWorkingColorSpace(It.copy(this),e),Math.round(Qe(It.r*255,0,255))*65536+Math.round(Qe(It.g*255,0,255))*256+Math.round(Qe(It.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,s=It.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Yt){Je.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Cs);const n=Ar(Pn.h,Cs.h,t),i=Ar(Pn.s,Cs.s,t),s=Ar(Pn.l,Cs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new $e;$e.NAMES=fc;let Ku=0;class ur extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Hn,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ls,this.blendDst=cs,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ia,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hn&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ls&&(n.blendSrc=this.blendSrc),this.blendDst!==cs&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ia&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ri extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const En=ju();function ju(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Zu(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Qe(r,-65504,65504),En.floatView[0]=r;const e=En.uint32View[0],t=e>>23&511;return En.baseTable[t]+((e&8388607)>>En.shiftTable[t])}function Ju(r){const e=r>>10;return En.uint32View[0]=En.mantissaTable[En.offsetTable[e]+(r&1023)]+En.exponentTable[e],En.floatView[0]}const ds={toHalfFloat:Zu,fromHalfFloat:Ju},At=new D,Ts=new Ce;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Da,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Da&&(e.usage=this.usage),e}}class pc extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mc extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $u=0;const Qt=new Le,Br=new vt,Si=new D,kt=new dn,ts=new dn,Et=new D;class $t extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lc(e)?mc:pc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Br.lookAt(e),Br.updateMatrix(),this.applyMatrix4(Br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(kt.min,ts.min),kt.expandByPoint(Et),Et.addVectors(kt.max,ts.max),kt.expandByPoint(Et)):(kt.expandByPoint(ts.min),kt.expandByPoint(ts.max))}kt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Et.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(e,c),Et.add(Si)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new D,l[w]=new D;const c=new D,u=new D,d=new D,h=new Ce,p=new Ce,g=new Ce,A=new D,m=new D;function f(w,M,_){c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,_),h.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,_),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(A.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[w].add(A),a[M].add(A),a[_].add(A),l[w].add(m),l[M].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let w=0,M=y.length;w<M;++w){const _=y[w],R=_.start,B=_.count;for(let F=R,L=R+B;F<L;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const S=new D,x=new D,T=new D,E=new D;function v(w){T.fromBufferAttribute(i,w),E.copy(T);const M=a[w];S.copy(M),S.sub(T.multiplyScalar(T.dot(M))).normalize(),x.crossVectors(E,M);const R=x.dot(l[w])<0?-1:1;o.setXYZW(w,S.x,S.y,S.z,R)}for(let w=0,M=y.length;w<M;++w){const _=y[w],R=_.start,B=_.count;for(let F=R,L=R+B;F<L;F+=3)v(e.getX(F+0)),v(e.getX(F+1)),v(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),A=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,A),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let A=0,m=l.length;A<m;A++){a.isInterleavedBufferAttribute?p=l[A]*a.data.stride+a.offset:p=l[A]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new Jt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xa=new Le,Yn=new dc,bs=new Ko,qa=new D,ws=new D,Rs=new D,Is=new D,Ur=new D,Ds=new D,Qa=new D,Ps=new D;class mt extends vt{constructor(e=new $t,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ds.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Ur.fromBufferAttribute(d,e),o?Ds.addScaledVector(Ur,u):Ds.addScaledVector(Ur.sub(t),u))}t.add(Ds)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(s),Yn.copy(e.ray).recast(e.near),!(bs.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(bs,qa)===null||Yn.origin.distanceToSquared(qa)>(e.far-e.near)**2))&&(Xa.copy(s).invert(),Yn.copy(e.ray).applyMatrix4(Xa),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,A=h.length;g<A;g++){const m=h[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,T=S;x<T;x+=3){const E=a.getX(x),v=a.getX(x+1),w=a.getX(x+2);i=Fs(this,f,e,n,c,u,d,E,v,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),A=Math.min(a.count,p.start+p.count);for(let m=g,f=A;m<f;m+=3){const y=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=Fs(this,o,e,n,c,u,d,y,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,A=h.length;g<A;g++){const m=h[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,T=S;x<T;x+=3){const E=x,v=x+1,w=x+2;i=Fs(this,f,e,n,c,u,d,E,v,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),A=Math.min(l.count,p.start+p.count);for(let m=g,f=A;m<f;m+=3){const y=m,S=m+1,x=m+2;i=Fs(this,o,e,n,c,u,d,y,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ed(r,e,t,n,i,s,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===fn,a),l===null)return null;Ps.copy(a),Ps.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ps);return c<t.near||c>t.far?null:{distance:c,point:Ps.clone(),object:r}}function Fs(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ws),r.getVertexPosition(l,Rs),r.getVertexPosition(c,Is);const u=ed(r,e,t,n,ws,Rs,Is,Qa);if(u){const d=new D;on.getBarycoord(Qa,ws,Rs,Is,d),i&&(u.uv=on.getInterpolatedAttribute(i,a,l,c,d,new Ce)),s&&(u.uv1=on.getInterpolatedAttribute(s,a,l,c,d,new Ce)),o&&(u.normal=on.getInterpolatedAttribute(o,a,l,c,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};on.getNormal(ws,Rs,Is,h.normal),u.face=h,u.barycoord=d}return u}class Qi extends $t{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(d,2));function g(A,m,f,y,S,x,T,E,v,w,M){const _=x/v,R=T/w,B=x/2,F=T/2,L=E/2,z=v+1,N=w+1;let X=0,k=0;const $=new D;for(let ne=0;ne<N;ne++){const ue=ne*R-F;for(let ve=0;ve<z;ve++){const ye=ve*_-B;$[A]=ye*y,$[m]=ue*S,$[f]=L,c.push($.x,$.y,$.z),$[A]=0,$[m]=0,$[f]=E>0?1:-1,u.push($.x,$.y,$.z),d.push(ve/v),d.push(1-ne/w),X+=1}}for(let ne=0;ne<w;ne++)for(let ue=0;ue<v;ue++){const ve=h+ue+z*ne,ye=h+ue+z*(ne+1),Q=h+(ue+1)+z*(ne+1),J=h+(ue+1)+z*ne;l.push(ve,ye,J),l.push(ye,Q,J),k+=6}a.addGroup(p,k,M),p+=k,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(r){const e={};for(let t=0;t<r.length;t++){const n=Gi(r[t]);for(const i in n)e[i]=n[i]}return e}function td(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function gc(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const nd={clone:Gi,merge:Ft};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ac extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new D,Ya=new Ce,Ka=new Ce;class Kt extends Ac{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,Ya,Ka),t.subVectors(Ka,Ya)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,yi=1;class rd extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(vi,yi,e,t);i.layers=this.layers,this.add(i);const s=new Kt(vi,yi,e,t);s.layers=this.layers,this.add(s);const o=new Kt(vi,yi,e,t);o.layers=this.layers,this.add(o);const a=new Kt(vi,yi,e,t);a.layers=this.layers,this.add(a);const l=new Kt(vi,yi,e,t);l.layers=this.layers,this.add(l);const c=new Kt(vi,yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xc extends Bt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class od extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qi(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:zn});s.uniforms.tEquirect.value=t;const o=new mt(i,s),a=t.minFilter;return t.minFilter===ni&&(t.minFilter=un),new rd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class ad extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ln extends Bt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Vt,u=Vt,d,h){super(null,o,a,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ld extends Jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Nr=new D,cd=new D,ud=new Fe;class Un{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Nr.subVectors(n,t).cross(cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Nr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ud.getNormalMatrix(e),i=this.coplanarPoint(Nr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new Ko,Ls=new D;class _c{constructor(e=new Un,t=new Un,n=new Un,i=new Un,s=new Un,o=new Un){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],p=i[8],g=i[9],A=i[10],m=i[11],f=i[12],y=i[13],S=i[14],x=i[15];if(n[0].setComponents(l-s,h-c,m-p,x-f).normalize(),n[1].setComponents(l+s,h+c,m+p,x+f).normalize(),n[2].setComponents(l+o,h+u,m+g,x+y).normalize(),n[3].setComponents(l-o,h-u,m-g,x-y).normalize(),n[4].setComponents(l-a,h-d,m-A,x-S).normalize(),t===Cn)n[5].setComponents(l+a,h+d,m+A,x+S).normalize();else if(t===nr)n[5].setComponents(a,d,A,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ls.x=i.normal.x>0?e.max.x:e.min.x,Ls.y=i.normal.y>0?e.max.y:e.min.y,Ls.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bs extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class jo extends Bt{constructor(e,t,n,i,s,o,a,l,c,u=si){if(u!==si&&u!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===si&&(n=Zt),n===void 0&&u===ki&&(n=Hi),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hs extends $t{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],p=[];let g=0;const A=[],m=n/2;let f=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(p,2));function y(){const x=new D,T=new D;let E=0;const v=(t-e)/n;for(let w=0;w<=s;w++){const M=[],_=w/s,R=_*(t-e)+e;for(let B=0;B<=i;B++){const F=B/i,L=F*l+a,z=Math.sin(L),N=Math.cos(L);T.x=R*z,T.y=-_*n+m,T.z=R*N,d.push(T.x,T.y,T.z),x.set(z,v,N).normalize(),h.push(x.x,x.y,x.z),p.push(F,1-_),M.push(g++)}A.push(M)}for(let w=0;w<i;w++)for(let M=0;M<s;M++){const _=A[M][w],R=A[M+1][w],B=A[M+1][w+1],F=A[M][w+1];(e>0||M!==0)&&(u.push(_,R,F),E+=3),(t>0||M!==s-1)&&(u.push(R,B,F),E+=3)}c.addGroup(f,E,0),f+=E}function S(x){const T=g,E=new Ce,v=new D;let w=0;const M=x===!0?e:t,_=x===!0?1:-1;for(let B=1;B<=i;B++)d.push(0,m*_,0),h.push(0,_,0),p.push(.5,.5),g++;const R=g;for(let B=0;B<=i;B++){const L=B/i*l+a,z=Math.cos(L),N=Math.sin(L);v.x=M*N,v.y=m*_,v.z=M*z,d.push(v.x,v.y,v.z),h.push(0,_,0),E.x=z*.5+.5,E.y=N*.5*_+.5,p.push(E.x,E.y),g++}for(let B=0;B<i;B++){const F=T+B,L=R+B;x===!0?u.push(L,L+1,F):u.push(L+1,L,F),w+=3}c.addGroup(f,w,x===!0?1:2),f+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zo extends hs{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Zo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wi extends $t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,p=[],g=[],A=[],m=[];for(let f=0;f<u;f++){const y=f*h-o;for(let S=0;S<c;S++){const x=S*d-s;g.push(x,-y,0),A.push(0,0,1),m.push(S/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const S=y+c*f,x=y+c*(f+1),T=y+1+c*(f+1),E=y+1+c*f;p.push(S,x,E),p.push(x,T,E)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(A,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.widthSegments,e.heightSegments)}}class sr extends $t{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new D,h=new D,p=[],g=[],A=[],m=[];for(let f=0;f<=n;f++){const y=[],S=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const E=T/t;d.x=-e*Math.cos(i+E*s)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(i+E*s)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),A.push(h.x,h.y,h.z),m.push(E+x,1-S),y.push(c++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const S=u[f][y+1],x=u[f][y],T=u[f+1][y],E=u[f+1][y+1];(f!==0||o>0)&&p.push(S,x,E),(f!==n-1||l<Math.PI)&&p.push(x,T,E)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(A,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dd extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hd extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Jo extends Ac{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fd extends $t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class pd extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ja{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Za(r,e,t,n){const i=md(n);switch(t){case ec:return r*e;case nc:return r*e;case ic:return r*e*2;case sc:return r*e/i.components*i.byteLength;case cr:return r*e/i.components*i.byteLength;case Qo:return r*e*2/i.components*i.byteLength;case Yo:return r*e*2/i.components*i.byteLength;case tc:return r*e*3/i.components*i.byteLength;case Lt:return r*e*4/i.components*i.byteLength;case Pi:return r*e*4/i.components*i.byteLength;case qs:case Qs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ys:case Ks:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case po:case go:return Math.max(r,16)*Math.max(e,8)/4;case fo:case mo:return Math.max(r,8)*Math.max(e,8)/2;case Ao:case xo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case yo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Co:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case To:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case bo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case wo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Io:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Do:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Po:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case js:case Lo:case Bo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case rc:case Uo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case No:case Oo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function md(r){switch(r){case pn:case Zl:return{byteLength:1,components:1};case us:case Jl:case qi:return{byteLength:2,components:1};case Xo:case qo:return{byteLength:2,components:4};case Zt:case Wo:case an:return{byteLength:4,components:1};case $l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sc(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function gd(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],A=d[p];A.start<=g.start+g.count+1?g.count=Math.max(g.count,A.start+A.count-g.start):(++h,d[h]=A)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const A=d[p];r.bufferSubData(c,A.start*u.BYTES_PER_ELEMENT,u,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xd=`#ifdef USE_ALPHAHASH
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
#endif`,_d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Md=`#ifdef USE_AOMAP
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
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd=`#ifdef USE_BATCHING
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
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Id=`#ifdef USE_IRIDESCENCE
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
#endif`,Dd=`#ifdef USE_BUMPMAP
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hd=`#define PI 3.141592653589793
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
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,eh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ih=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sh=`#ifdef USE_GRADIENTMAP
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
#endif`,oh=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lh=`uniform bool receiveShadow;
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
#endif`,ch=`#ifdef USE_ENVMAP
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
#endif`,uh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ph=`PhysicalMaterial material;
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
#endif`,mh=`struct PhysicalMaterial {
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
}`,gh=`
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
#endif`,Ah=`#if defined( RE_IndirectDiffuse )
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
#endif`,xh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_h=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ch=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Th=`#if defined( USE_POINTS_UV )
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
#endif`,Ih=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ph=`#ifdef USE_MORPHTARGETS
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
#endif`,Fh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nh=`#ifndef FLAT_SHADED
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
#endif`,zh=`#ifdef USE_NORMALMAP
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
#endif`,Hh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qh=`vec4 mvPosition = vec4( transformed, 1.0 );
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
#endif`,jh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$h=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ef=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sf=`#ifdef USE_SKINNING
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
#endif`,of=`#ifdef USE_SKINNING
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
#endif`,lf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,df=`#ifdef USE_TRANSMISSION
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Af=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xf=`uniform sampler2D t2D;
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`#include <common>
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
}`,Ef=`#if DEPTH_PACKING == 3200
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
}`,Cf=`#define DISTANCE
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
}`,Tf=`#define DISTANCE
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
}`,If=`uniform vec3 diffuse;
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
}`,Df=`#include <common>
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Ff=`#define LAMBERT
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
}`,Lf=`#define LAMBERT
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
}`,Bf=`#define MATCAP
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
}`,Uf=`#define MATCAP
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
}`,Nf=`#define NORMAL
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
}`,zf=`#define PHONG
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
}`,Hf=`#define PHONG
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
}`,kf=`#define STANDARD
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
}`,Vf=`#define STANDARD
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
}`,Gf=`#define TOON
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
}`,Wf=`#define TOON
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
}`,Xf=`uniform float size;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Qf=`#include <common>
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
}`,jf=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Ad,alphahash_pars_fragment:xd,alphamap_fragment:_d,alphamap_pars_fragment:Sd,alphatest_fragment:vd,alphatest_pars_fragment:yd,aomap_fragment:Md,aomap_pars_fragment:Ed,batching_pars_vertex:Cd,batching_vertex:Td,begin_vertex:bd,beginnormal_vertex:wd,bsdfs:Rd,iridescence_fragment:Id,bumpmap_pars_fragment:Dd,clipping_planes_fragment:Pd,clipping_planes_pars_fragment:Fd,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Bd,color_fragment:Ud,color_pars_fragment:Nd,color_pars_vertex:Od,color_vertex:zd,common:Hd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Gd,displacementmap_vertex:Wd,emissivemap_fragment:Xd,emissivemap_pars_fragment:qd,colorspace_fragment:Qd,colorspace_pars_fragment:Yd,envmap_fragment:Kd,envmap_common_pars_fragment:jd,envmap_pars_fragment:Zd,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:ch,envmap_vertex:$d,fog_vertex:eh,fog_pars_vertex:th,fog_fragment:nh,fog_pars_fragment:ih,gradientmap_pars_fragment:sh,lightmap_pars_fragment:rh,lights_lambert_fragment:oh,lights_lambert_pars_fragment:ah,lights_pars_begin:lh,lights_toon_fragment:uh,lights_toon_pars_fragment:dh,lights_phong_fragment:hh,lights_phong_pars_fragment:fh,lights_physical_fragment:ph,lights_physical_pars_fragment:mh,lights_fragment_begin:gh,lights_fragment_maps:Ah,lights_fragment_end:xh,logdepthbuf_fragment:_h,logdepthbuf_pars_fragment:Sh,logdepthbuf_pars_vertex:vh,logdepthbuf_vertex:yh,map_fragment:Mh,map_pars_fragment:Eh,map_particle_fragment:Ch,map_particle_pars_fragment:Th,metalnessmap_fragment:bh,metalnessmap_pars_fragment:wh,morphinstance_vertex:Rh,morphcolor_vertex:Ih,morphnormal_vertex:Dh,morphtarget_pars_vertex:Ph,morphtarget_vertex:Fh,normal_fragment_begin:Lh,normal_fragment_maps:Bh,normal_pars_fragment:Uh,normal_pars_vertex:Nh,normal_vertex:Oh,normalmap_pars_fragment:zh,clearcoat_normal_fragment_begin:Hh,clearcoat_normal_fragment_maps:kh,clearcoat_pars_fragment:Vh,iridescence_pars_fragment:Gh,opaque_fragment:Wh,packing:Xh,premultiplied_alpha_fragment:qh,project_vertex:Qh,dithering_fragment:Yh,dithering_pars_fragment:Kh,roughnessmap_fragment:jh,roughnessmap_pars_fragment:Zh,shadowmap_pars_fragment:Jh,shadowmap_pars_vertex:$h,shadowmap_vertex:ef,shadowmask_pars_fragment:tf,skinbase_vertex:nf,skinning_pars_vertex:sf,skinning_vertex:rf,skinnormal_vertex:of,specularmap_fragment:af,specularmap_pars_fragment:lf,tonemapping_fragment:cf,tonemapping_pars_fragment:uf,transmission_fragment:df,transmission_pars_fragment:hf,uv_pars_fragment:ff,uv_pars_vertex:pf,uv_vertex:mf,worldpos_vertex:gf,background_vert:Af,background_frag:xf,backgroundCube_vert:_f,backgroundCube_frag:Sf,cube_vert:vf,cube_frag:yf,depth_vert:Mf,depth_frag:Ef,distanceRGBA_vert:Cf,distanceRGBA_frag:Tf,equirect_vert:bf,equirect_frag:wf,linedashed_vert:Rf,linedashed_frag:If,meshbasic_vert:Df,meshbasic_frag:Pf,meshlambert_vert:Ff,meshlambert_frag:Lf,meshmatcap_vert:Bf,meshmatcap_frag:Uf,meshnormal_vert:Nf,meshnormal_frag:Of,meshphong_vert:zf,meshphong_frag:Hf,meshphysical_vert:kf,meshphysical_frag:Vf,meshtoon_vert:Gf,meshtoon_frag:Wf,points_vert:Xf,points_frag:qf,shadow_vert:Qf,shadow_frag:Yf,sprite_vert:Kf,sprite_frag:jf},he={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},cn={basic:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new $e(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ft([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ft([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new $e(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ft([he.points,he.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ft([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ft([he.common,he.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ft([he.sprite,he.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ft([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ft([he.lights,he.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};cn.physical={uniforms:Ft([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Us={r:0,b:0,g:0},jn=new bn,Zf=new Le;function Jf(r,e,t,n,i,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function A(S){let x=!1;const T=g(S);T===null?f(a,l):T&&T.isColor&&(f(T,1),x=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===lr)?(u===void 0&&(u=new mt(new Qi(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:Gi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,v,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),jn.copy(x.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zf.makeRotationFromEuler(jn)),u.material.toneMapped=Je.getTransfer(T.colorSpace)!==rt,(d!==T||h!==T.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,d=T,h=T.version,p=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new mt(new Wi(2,2),new Wt({name:"BackgroundMaterial",uniforms:Gi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Je.getTransfer(T.colorSpace)!==rt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||h!==T.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=T,h=T.version,p=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,x){S.getRGB(Us,gc(r)),n.buffers.color.setClear(Us.r,Us.g,Us.b,x,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:A,addToRenderList:m,dispose:y}}function $f(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(_,R,B,F,L){let z=!1;const N=d(F,B,R);s!==N&&(s=N,c(s.object)),z=p(_,F,B,L),z&&g(_,F,B,L),L!==null&&e.update(L,r.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(_,R,B,F),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return r.createVertexArray()}function c(_){return r.bindVertexArray(_)}function u(_){return r.deleteVertexArray(_)}function d(_,R,B){const F=B.wireframe===!0;let L=n[_.id];L===void 0&&(L={},n[_.id]=L);let z=L[R.id];z===void 0&&(z={},L[R.id]=z);let N=z[F];return N===void 0&&(N=h(l()),z[F]=N),N}function h(_){const R=[],B=[],F=[];for(let L=0;L<t;L++)R[L]=0,B[L]=0,F[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:F,object:_,attributes:{},index:null}}function p(_,R,B,F){const L=s.attributes,z=R.attributes;let N=0;const X=B.getAttributes();for(const k in X)if(X[k].location>=0){const ne=L[k];let ue=z[k];if(ue===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(ue=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(ue=_.instanceColor)),ne===void 0||ne.attribute!==ue||ue&&ne.data!==ue.data)return!0;N++}return s.attributesNum!==N||s.index!==F}function g(_,R,B,F){const L={},z=R.attributes;let N=0;const X=B.getAttributes();for(const k in X)if(X[k].location>=0){let ne=z[k];ne===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(ne=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(ne=_.instanceColor));const ue={};ue.attribute=ne,ne&&ne.data&&(ue.data=ne.data),L[k]=ue,N++}s.attributes=L,s.attributesNum=N,s.index=F}function A(){const _=s.newAttributes;for(let R=0,B=_.length;R<B;R++)_[R]=0}function m(_){f(_,0)}function f(_,R){const B=s.newAttributes,F=s.enabledAttributes,L=s.attributeDivisors;B[_]=1,F[_]===0&&(r.enableVertexAttribArray(_),F[_]=1),L[_]!==R&&(r.vertexAttribDivisor(_,R),L[_]=R)}function y(){const _=s.newAttributes,R=s.enabledAttributes;for(let B=0,F=R.length;B<F;B++)R[B]!==_[B]&&(r.disableVertexAttribArray(B),R[B]=0)}function S(_,R,B,F,L,z,N){N===!0?r.vertexAttribIPointer(_,R,B,L,z):r.vertexAttribPointer(_,R,B,F,L,z)}function x(_,R,B,F){A();const L=F.attributes,z=B.getAttributes(),N=R.defaultAttributeValues;for(const X in z){const k=z[X];if(k.location>=0){let $=L[X];if($===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&($=_.instanceColor)),$!==void 0){const ne=$.normalized,ue=$.itemSize,ve=e.get($);if(ve===void 0)continue;const ye=ve.buffer,Q=ve.type,J=ve.bytesPerElement,ae=Q===r.INT||Q===r.UNSIGNED_INT||$.gpuType===Wo;if($.isInterleavedBufferAttribute){const se=$.data,ge=se.stride,Me=$.offset;if(se.isInstancedInterleavedBuffer){for(let Ee=0;Ee<k.locationSize;Ee++)f(k.location+Ee,se.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ee=0;Ee<k.locationSize;Ee++)m(k.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Ee=0;Ee<k.locationSize;Ee++)S(k.location+Ee,ue/k.locationSize,Q,ne,ge*J,(Me+ue/k.locationSize*Ee)*J,ae)}else{if($.isInstancedBufferAttribute){for(let se=0;se<k.locationSize;se++)f(k.location+se,$.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let se=0;se<k.locationSize;se++)m(k.location+se);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let se=0;se<k.locationSize;se++)S(k.location+se,ue/k.locationSize,Q,ne,ue*J,ue/k.locationSize*se*J,ae)}}else if(N!==void 0){const ne=N[X];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(k.location,ne);break;case 3:r.vertexAttrib3fv(k.location,ne);break;case 4:r.vertexAttrib4fv(k.location,ne);break;default:r.vertexAttrib1fv(k.location,ne)}}}}y()}function T(){w();for(const _ in n){const R=n[_];for(const B in R){const F=R[B];for(const L in F)u(F[L].object),delete F[L];delete R[B]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const R=n[_.id];for(const B in R){const F=R[B];for(const L in F)u(F[L].object),delete F[L];delete R[B]}delete n[_.id]}function v(_){for(const R in n){const B=n[R];if(B[_.id]===void 0)continue;const F=B[_.id];for(const L in F)u(F[L].object),delete F[L];delete B[_.id]}}function w(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:v,initAttributes:A,enableAttribute:m,disableUnusedAttributes:y}}function ep(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,n,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let A=0;A<d;A++)g+=u[A]*h[A];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tp(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(v){return!(v!==Lt&&n.convert(v)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){const w=v===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==pn&&n.convert(v)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==an&&!w)}function l(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:A,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:T,maxSamples:E}}function np(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Un,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||i;return i=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,A=d.clipIntersection,m=d.clipShadows,f=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,S=y*4;let x=f.clippingState||null;l.value=x,x=u(g,h,S,p);for(let T=0;T!==S;++T)x[T]=t[T];f.clippingState=x,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){const A=d!==null?d.length:0;let m=null;if(A!==0){if(m=l.value,g!==!0||m===null){const f=p+A*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,x=p;S!==A;++S,x+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,m}}function ip(r){let e=new WeakMap;function t(o,a){return a===lo?o.mapping=Oi:a===co&&(o.mapping=zi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===lo||a===co)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new od(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ii=4,Ja=[.125,.215,.35,.446,.526,.582],ei=20,Or=new Jo,$a=new $e;let zr=null,Hr=0,kr=0,Vr=!1;const Jn=(1+Math.sqrt(5))/2,Mi=1/Jn,el=[new D(-Jn,Mi,0),new D(Jn,Mi,0),new D(-Mi,0,Jn),new D(Mi,0,Jn),new D(0,Jn,-Mi),new D(0,Jn,Mi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){zr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zr,Hr,kr),this._renderer.xr.enabled=Vr,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:qi,format:Lt,colorSpace:Vi,depthBuffer:!1},i=nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sp(s)),this._blurMaterial=rp(s,e,t)}return i}_compileMaterial(e){const t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,Or)}_sceneToCubeUV(e,t,n,i){const a=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor($a),u.toneMapping=kn,u.autoClear=!1;const p=new ri({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new mt(new Qi,p);let A=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,A=!0):(p.color.copy($a),A=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const S=this._cubeSize;Ns(i,y*S,f>2?S:0,S,S),u.setRenderTarget(i),A&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Oi||e.mapping===zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ns(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Or)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=el[(i-s-1)%el.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new mt(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ei-1),A=s/g,m=isFinite(s)?1+Math.floor(u*A):ei;m>ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ei}`);const f=[];let y=0;for(let v=0;v<ei;++v){const w=v/A,M=Math.exp(-w*w/2);f.push(M),v===0?y+=M:v<m&&(y+=2*M)}for(let v=0;v<f.length;v++)f[v]=f[v]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const x=this._sizeLods[i],T=3*x*(i>S-Ii?i-S+Ii:0),E=4*(this._cubeSize-x);Ns(t,T,E,3*x,2*x),l.setRenderTarget(t),l.render(d,Or)}}function sp(r){const e=[],t=[],n=[];let i=r;const s=r-Ii+1+Ja.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Ii?l=Ja[o-r+Ii-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,A=3,m=2,f=1,y=new Float32Array(A*g*p),S=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let E=0;E<p;E++){const v=E%3*2/3-1,w=E>2?0:-1,M=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];y.set(M,A*g*E),S.set(h,m*g*E);const _=[E,E,E,E,E,E];x.set(_,f*g*E)}const T=new $t;T.setAttribute("position",new Jt(y,A)),T.setAttribute("uv",new Jt(S,m)),T.setAttribute("faceIndex",new Jt(x,f)),e.push(T),i>Ii&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nl(r,e,t){const n=new Gn(r,e,t);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function rp(r,e,t){const n=new Float32Array(ei),i=new D(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$o(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function il(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function sl(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function $o(){return`

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
	`}function op(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===lo||l===co,u=l===Oi||l===zi;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new tl(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new tl(r)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ap(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&wi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lp(r,e,t,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],r.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,g=d.attributes.position;let A=0;if(p!==null){const y=p.array;A=p.version;for(let S=0,x=y.length;S<x;S+=3){const T=y[S+0],E=y[S+1],v=y[S+2];h.push(T,E,E,v,v,T)}}else if(g!==void 0){const y=g.array;A=g.version;for(let S=0,x=y.length/3-1;S<x;S+=3){const T=S+0,E=S+1,v=S+2;h.push(T,E,E,v,v,T)}}else return;const m=new(lc(h)?mc:pc)(h,1);m.version=A;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function cp(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){r.drawElements(n,p,s,h*o),t.update(p,n,1)}function c(h,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,h*o,g),t.update(p,n,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function d(h,p,g,A){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],A[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,A,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*A[y];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function up(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dp(r,e,t){const n=new WeakMap,i=new dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let M=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,A=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),g===!0&&(S=2),A===!0&&(S=3);let x=a.attributes.position.count*S,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const E=new Float32Array(x*T*4*d),v=new uc(E,x,T,d);v.type=an,v.needsUpdate=!0;const w=S*4;for(let _=0;_<d;_++){const R=m[_],B=f[_],F=y[_],L=x*T*4*_;for(let z=0;z<R.count;z++){const N=z*w;p===!0&&(i.fromBufferAttribute(R,z),E[L+N+0]=i.x,E[L+N+1]=i.y,E[L+N+2]=i.z,E[L+N+3]=0),g===!0&&(i.fromBufferAttribute(B,z),E[L+N+4]=i.x,E[L+N+5]=i.y,E[L+N+6]=i.z,E[L+N+7]=0),A===!0&&(i.fromBufferAttribute(F,z),E[L+N+8]=i.x,E[L+N+9]=i.y,E[L+N+10]=i.z,E[L+N+11]=F.itemSize===4?i.w:1)}}h={count:d,texture:v,size:new Ce(x,T)},n.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let p=0;for(let A=0;A<c.length;A++)p+=c[A];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function hp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const vc=new Bt,rl=new jo(1,1),yc=new uc,Mc=new ku,Ec=new xc,ol=[],al=[],ll=new Float32Array(16),cl=new Float32Array(9),ul=new Float32Array(4);function Yi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ol[i];if(s===void 0&&(s=new Float32Array(i),ol[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Mt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function dr(r,e){let t=al[e];t===void 0&&(t=new Int32Array(e),al[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function fp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function pp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),Mt(t,e)}}function mp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),Mt(t,e)}}function gp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),Mt(t,e)}}function Ap(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;ul.set(n),r.uniformMatrix2fv(this.addr,!1,ul),Mt(t,n)}}function xp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;cl.set(n),r.uniformMatrix3fv(this.addr,!1,cl),Mt(t,n)}}function _p(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;ll.set(n),r.uniformMatrix4fv(this.addr,!1,ll),Mt(t,n)}}function Sp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2iv(this.addr,e),Mt(t,e)}}function yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3iv(this.addr,e),Mt(t,e)}}function Mp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4iv(this.addr,e),Mt(t,e)}}function Ep(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Cp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2uiv(this.addr,e),Mt(t,e)}}function Tp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3uiv(this.addr,e),Mt(t,e)}}function bp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4uiv(this.addr,e),Mt(t,e)}}function wp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(rl.compareFunction=oc,s=rl):s=vc,t.setTexture2D(e||s,i)}function Rp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mc,i)}function Ip(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ec,i)}function Dp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yc,i)}function Pp(r){switch(r){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return Ap;case 35675:return xp;case 35676:return _p;case 5124:case 35670:return Sp;case 35667:case 35671:return vp;case 35668:case 35672:return yp;case 35669:case 35673:return Mp;case 5125:return Ep;case 36294:return Cp;case 36295:return Tp;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Dp}}function Fp(r,e){r.uniform1fv(this.addr,e)}function Lp(r,e){const t=Yi(e,this.size,2);r.uniform2fv(this.addr,t)}function Bp(r,e){const t=Yi(e,this.size,3);r.uniform3fv(this.addr,t)}function Up(r,e){const t=Yi(e,this.size,4);r.uniform4fv(this.addr,t)}function Np(r,e){const t=Yi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Op(r,e){const t=Yi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function zp(r,e){const t=Yi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Hp(r,e){r.uniform1iv(this.addr,e)}function kp(r,e){r.uniform2iv(this.addr,e)}function Vp(r,e){r.uniform3iv(this.addr,e)}function Gp(r,e){r.uniform4iv(this.addr,e)}function Wp(r,e){r.uniform1uiv(this.addr,e)}function Xp(r,e){r.uniform2uiv(this.addr,e)}function qp(r,e){r.uniform3uiv(this.addr,e)}function Qp(r,e){r.uniform4uiv(this.addr,e)}function Yp(r,e,t){const n=this.cache,i=e.length,s=dr(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||vc,s[o])}function Kp(r,e,t){const n=this.cache,i=e.length,s=dr(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Mc,s[o])}function jp(r,e,t){const n=this.cache,i=e.length,s=dr(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ec,s[o])}function Zp(r,e,t){const n=this.cache,i=e.length,s=dr(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||yc,s[o])}function Jp(r){switch(r){case 5126:return Fp;case 35664:return Lp;case 35665:return Bp;case 35666:return Up;case 35674:return Np;case 35675:return Op;case 35676:return zp;case 5124:case 35670:return Hp;case 35667:case 35671:return kp;case 35668:case 35672:return Vp;case 35669:case 35673:return Gp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Zp}}class $p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pp(t.type)}}class em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jp(t.type)}}class tm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Gr=/(\w+)(\])?(\[|\.)?/g;function dl(r,e){r.seq.push(e),r.map[e.id]=e}function nm(r,e,t){const n=r.name,i=n.length;for(Gr.lastIndex=0;;){const s=Gr.exec(n),o=Gr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){dl(t,c===void 0?new $p(a,r,e):new em(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new tm(a),dl(t,d)),t=d}}}class Js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);nm(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function hl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const im=37297;let sm=0;function rm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const fl=new Fe;function om(r){Je._getMatrix(fl,Je.workingColorSpace,r);const e=`mat3( ${fl.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(r)){case tr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function pl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+rm(r.getShaderSource(e),o)}else return i}function am(r,e){const t=om(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lm(r,e){let t;switch(e){case du:t="Linear";break;case hu:t="Reinhard";break;case fu:t="Cineon";break;case pu:t="ACESFilmic";break;case gu:t="AgX";break;case Au:t="Neutral";break;case mu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Os=new D;function cm(){Je.getLuminanceCoefficients(Os);const r=Os.x.toFixed(4),e=Os.y.toFixed(4),t=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function um(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function dm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hm(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ns(r){return r!==""}function ml(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(r){return r.replace(fm,mm)}const pm=new Map;function mm(r,e){let t=Xe[e];if(t===void 0){const n=pm.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ho(t)}const gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Al(r){return r.replace(gm,Am)}function Am(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function _m(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Oi:case zi:e="ENVMAP_TYPE_CUBE";break;case lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function vm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Kl:e="ENVMAP_BLENDING_MULTIPLY";break;case cu:e="ENVMAP_BLENDING_MIX";break;case uu:e="ENVMAP_BLENDING_ADD";break}return e}function ym(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Mm(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xm(t),c=_m(t),u=Sm(t),d=vm(t),h=ym(t),p=um(t),g=dm(s),A=i.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ns).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ns).join(`
`),f.length>0&&(f+=`
`)):(m=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),f=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==kn?lm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,am("linearToOutputTexel",t.outputColorSpace),cm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),o=Ho(o),o=ml(o,t),o=gl(o,t),a=Ho(a),a=ml(a,t),a=gl(a,t),o=Al(o),a=Al(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=y+m+o,x=y+f+a,T=hl(i,i.VERTEX_SHADER,S),E=hl(i,i.FRAGMENT_SHADER,x);i.attachShader(A,T),i.attachShader(A,E),t.index0AttributeName!==void 0?i.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(A,0,"position"),i.linkProgram(A);function v(R){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(A).trim(),F=i.getShaderInfoLog(T).trim(),L=i.getShaderInfoLog(E).trim();let z=!0,N=!0;if(i.getProgramParameter(A,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,A,T,E);else{const X=pl(i,T,"vertex"),k=pl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(A,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+X+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||L==="")&&(N=!1);N&&(R.diagnostics={runnable:z,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:L,prefix:f}})}i.deleteShader(T),i.deleteShader(E),w=new Js(i,A),M=hm(i,A)}let w;this.getUniforms=function(){return w===void 0&&v(this),w};let M;this.getAttributes=function(){return M===void 0&&v(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(A,im)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sm++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=T,this.fragmentShader=E,this}let Em=0;class Cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tm(e),t.set(e,n)),n}}class Tm{constructor(e){this.id=Em++,this.code=e,this.usedTimes=0}}function bm(r,e,t,n,i,s,o){const a=new hc,l=new Cm,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,R,B,F){const L=B.fog,z=F.geometry,N=M.isMeshStandardMaterial?B.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||N),k=X&&X.mapping===lr?X.image.height:null,$=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ne=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=ne!==void 0?ne.length:0;let ve=0;z.morphAttributes.position!==void 0&&(ve=1),z.morphAttributes.normal!==void 0&&(ve=2),z.morphAttributes.color!==void 0&&(ve=3);let ye,Q,J,ae;if($){const it=cn[$];ye=it.vertexShader,Q=it.fragmentShader}else ye=M.vertexShader,Q=M.fragmentShader,l.update(M),J=l.getVertexShaderID(M),ae=l.getFragmentShaderID(M);const se=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),Me=F.isInstancedMesh===!0,Ee=F.isBatchedMesh===!0,Ge=!!M.map,Oe=!!M.matcap,Be=!!X,U=!!M.aoMap,We=!!M.lightMap,He=!!M.bumpMap,Ve=!!M.normalMap,Ae=!!M.displacementMap,qe=!!M.emissiveMap,we=!!M.metalnessMap,I=!!M.roughnessMap,C=M.anisotropy>0,G=M.clearcoat>0,ee=M.dispersion>0,ie=M.iridescence>0,Z=M.sheen>0,Re=M.transmission>0,pe=C&&!!M.anisotropyMap,_e=G&&!!M.clearcoatMap,Ye=G&&!!M.clearcoatNormalMap,oe=G&&!!M.clearcoatRoughnessMap,P=ie&&!!M.iridescenceMap,te=ie&&!!M.iridescenceThicknessMap,xe=Z&&!!M.sheenColorMap,le=Z&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,Ue=!!M.specularColorMap,Ke=!!M.specularIntensityMap,O=Re&&!!M.transmissionMap,de=Re&&!!M.thicknessMap,K=!!M.gradientMap,j=!!M.alphaMap,fe=M.alphaTest>0,ce=!!M.alphaHash,Ne=!!M.extensions;let at=kn;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(at=r.toneMapping);const wt={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:ye,fragmentShader:Q,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&F._colorsTexture!==null,instancing:Me,instancingColor:Me&&F.instanceColor!==null,instancingMorph:Me&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Vi,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:Oe,envMap:Be,envMapMode:Be&&X.mapping,envMapCubeUVHeight:k,aoMap:U,lightMap:We,bumpMap:He,normalMap:Ve,displacementMap:h&&Ae,emissiveMap:qe,normalMapObjectSpace:Ve&&M.normalMapType===yu,normalMapTangentSpace:Ve&&M.normalMapType===vu,metalnessMap:we,roughnessMap:I,anisotropy:C,anisotropyMap:pe,clearcoat:G,clearcoatMap:_e,clearcoatNormalMap:Ye,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:ie,iridescenceMap:P,iridescenceThicknessMap:te,sheen:Z,sheenColorMap:xe,sheenRoughnessMap:le,specularMap:Pe,specularColorMap:Ue,specularIntensityMap:Ke,transmission:Re,transmissionMap:O,thicknessMap:de,gradientMap:K,opaque:M.transparent===!1&&M.blending===Hn&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:fe,alphaHash:ce,combine:M.combine,mapUv:Ge&&A(M.map.channel),aoMapUv:U&&A(M.aoMap.channel),lightMapUv:We&&A(M.lightMap.channel),bumpMapUv:He&&A(M.bumpMap.channel),normalMapUv:Ve&&A(M.normalMap.channel),displacementMapUv:Ae&&A(M.displacementMap.channel),emissiveMapUv:qe&&A(M.emissiveMap.channel),metalnessMapUv:we&&A(M.metalnessMap.channel),roughnessMapUv:I&&A(M.roughnessMap.channel),anisotropyMapUv:pe&&A(M.anisotropyMap.channel),clearcoatMapUv:_e&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:P&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:le&&A(M.sheenRoughnessMap.channel),specularMapUv:Pe&&A(M.specularMap.channel),specularColorMapUv:Ue&&A(M.specularColorMap.channel),specularIntensityMapUv:Ke&&A(M.specularIntensityMap.channel),transmissionMapUv:O&&A(M.transmissionMap.channel),thicknessMapUv:de&&A(M.thicknessMap.channel),alphaMapUv:j&&A(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ve||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Ge||j),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ge,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ve,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===rt,decodeVideoTextureEmissive:qe&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===jt,flipSided:M.side===Ot,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ne&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&M.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function f(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)_.push(R),_.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(y(_,M),S(_,M),_.push(r.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function y(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function S(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const _=g[M.type];let R;if(_){const B=cn[_];R=nd.clone(B.uniforms)}else R=M.uniforms;return R}function T(M,_){let R;for(let B=0,F=u.length;B<F;B++){const L=u[B];if(L.cacheKey===_){R=L,++R.usedTimes;break}}return R===void 0&&(R=new Mm(r,_,M,s),u.push(R)),R}function E(M){if(--M.usedTimes===0){const _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function v(M){l.remove(M)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:T,releaseProgram:E,releaseShaderCache:v,programs:u,dispose:w}}function wm(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Rm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function _l(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Sl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,h,p,g,A,m){let f=r[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:A,group:m},r[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=A,f.group=m),e++,f}function a(d,h,p,g,A,m){const f=o(d,h,p,g,A,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(d,h,p,g,A,m){const f=o(d,h,p,g,A,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||Rm),n.length>1&&n.sort(h||_l),i.length>1&&i.sort(h||_l)}function u(){for(let d=e,h=r.length;d<h;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Im(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Sl,r.set(n,[o])):i>=s.length?(o=new Sl,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Dm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new $e};break;case"SpotLight":t={position:new D,direction:new D,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function Pm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Fm=0;function Lm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Bm(r){const e=new Dm,t=Pm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,s=new Le,o=new Le;function a(c){let u=0,d=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,A=0,m=0,f=0,y=0,S=0,x=0,T=0,E=0,v=0;c.sort(Lm);for(let M=0,_=c.length;M<_;M++){const R=c[M],B=R.color,F=R.intensity,L=R.distance,z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=B.r*F,d+=B.g*F,h+=B.b*F;else if(R.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(R.sh.coefficients[N],F);v++}else if(R.isDirectionalLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,k=t.get(R);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=R.shadow.matrix,y++}n.directional[p]=N,p++}else if(R.isSpotLight){const N=e.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(B).multiplyScalar(F),N.distance=L,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,n.spot[A]=N;const X=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,X.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[A]=X.matrix,R.castShadow){const k=t.get(R);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,n.spotShadow[A]=k,n.spotShadowMap[A]=z,x++}A++}else if(R.isRectAreaLight){const N=e.get(R);N.color.copy(B).multiplyScalar(F),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=N,m++}else if(R.isPointLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){const X=R.shadow,k=t.get(R);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=N,g++}else if(R.isHemisphereLight){const N=e.get(R);N.skyColor.copy(R.color).multiplyScalar(F),N.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[f]=N,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const w=n.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==A||w.rectAreaLength!==m||w.hemiLength!==f||w.numDirectionalShadows!==y||w.numPointShadows!==S||w.numSpotShadows!==x||w.numSpotMaps!==T||w.numLightProbes!==v)&&(n.directional.length=p,n.spot.length=A,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=v,w.directionalLength=p,w.pointLength=g,w.spotLength=A,w.rectAreaLength=m,w.hemiLength=f,w.numDirectionalShadows=y,w.numPointShadows=S,w.numSpotShadows=x,w.numSpotMaps=T,w.numLightProbes=v,n.version=Fm++)}function l(c,u){let d=0,h=0,p=0,g=0,A=0;const m=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const S=c[f];if(S.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(S.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const x=n.hemi[A];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),A++}}}return{setup:a,setupView:l,state:n}}function vl(r){const e=new Bm(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Um(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new vl(r),e.set(i,[a])):s>=o.length?(a=new vl(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Om=`uniform sampler2D shadow_pass;
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
}`;function zm(r,e,t){let n=new _c;const i=new Ce,s=new Ce,o=new dt,a=new dd({depthPacking:Su}),l=new hd,c={},u=t.maxTextureSize,d={[fn]:Ot,[Ot]:fn,[jt]:jt},h=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Nm,fragmentShader:Om}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new $t;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new mt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let f=this.type;this.render=function(E,v,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=r.getRenderTarget(),_=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),B=r.state;B.setBlending(zn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=f!==vn&&this.type===vn,L=f===vn&&this.type!==vn;for(let z=0,N=E.length;z<N;z++){const X=E[z],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const $=k.getFrameExtents();if(i.multiply($),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,k.mapSize.y=s.y)),k.map===null||F===!0||L===!0){const ue=this.type!==vn?{minFilter:Vt,magFilter:Vt}:{};k.map!==null&&k.map.dispose(),k.map=new Gn(i.x,i.y,ue),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const ne=k.getViewportCount();for(let ue=0;ue<ne;ue++){const ve=k.getViewport(ue);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),B.viewport(o),k.updateMatrices(X,ue),n=k.getFrustum(),x(v,w,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===vn&&y(k,w),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(M,_,R)};function y(E,v){const w=e.update(A);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Gn(i.x,i.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(v,null,w,h,A,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(v,null,w,p,A,null)}function S(E,v,w,M){let _=null;const R=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)_=R;else if(_=w.isPointLight===!0?l:a,r.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const B=_.uuid,F=v.uuid;let L=c[B];L===void 0&&(L={},c[B]=L);let z=L[F];z===void 0&&(z=_.clone(),L[F]=z,v.addEventListener("dispose",T)),_=z}if(_.visible=v.visible,_.wireframe=v.wireframe,M===vn?_.side=v.shadowSide!==null?v.shadowSide:v.side:_.side=v.shadowSide!==null?v.shadowSide:d[v.side],_.alphaMap=v.alphaMap,_.alphaTest=v.alphaTest,_.map=v.map,_.clipShadows=v.clipShadows,_.clippingPlanes=v.clippingPlanes,_.clipIntersection=v.clipIntersection,_.displacementMap=v.displacementMap,_.displacementScale=v.displacementScale,_.displacementBias=v.displacementBias,_.wireframeLinewidth=v.wireframeLinewidth,_.linewidth=v.linewidth,w.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const B=r.properties.get(_);B.light=w}return _}function x(E,v,w,M,_){if(E.visible===!1)return;if(E.layers.test(v.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===vn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const F=e.update(E),L=E.material;if(Array.isArray(L)){const z=F.groups;for(let N=0,X=z.length;N<X;N++){const k=z[N],$=L[k.materialIndex];if($&&$.visible){const ne=S(E,$,M,_);E.onBeforeShadow(r,E,v,w,F,ne,k),r.renderBufferDirect(w,null,F,ne,E,k),E.onAfterShadow(r,E,v,w,F,ne,k)}}}else if(L.visible){const z=S(E,L,M,_);E.onBeforeShadow(r,E,v,w,F,z,null),r.renderBufferDirect(w,null,F,z,E,null),E.onAfterShadow(r,E,v,w,F,z,null)}}const B=E.children;for(let F=0,L=B.length;F<L;F++)x(B[F],v,w,M,_)}function T(E){E.target.removeEventListener("dispose",T);for(const w in c){const M=c[w],_=E.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const Hm={[to]:no,[io]:oo,[so]:ao,[Ni]:ro,[no]:to,[oo]:io,[ao]:so,[ro]:Ni};function km(r,e){function t(){let O=!1;const de=new dt;let K=null;const j=new dt(0,0,0,0);return{setMask:function(fe){K!==fe&&!O&&(r.colorMask(fe,fe,fe,fe),K=fe)},setLocked:function(fe){O=fe},setClear:function(fe,ce,Ne,at,wt){wt===!0&&(fe*=at,ce*=at,Ne*=at),de.set(fe,ce,Ne,at),j.equals(de)===!1&&(r.clearColor(fe,ce,Ne,at),j.copy(de))},reset:function(){O=!1,K=null,j.set(-1,0,0,0)}}}function n(){let O=!1,de=!1,K=null,j=null,fe=null;return{setReversed:function(ce){if(de!==ce){const Ne=e.get("EXT_clip_control");de?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const at=fe;fe=null,this.setClear(at)}de=ce},getReversed:function(){return de},setTest:function(ce){ce?se(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(ce){K!==ce&&!O&&(r.depthMask(ce),K=ce)},setFunc:function(ce){if(de&&(ce=Hm[ce]),j!==ce){switch(ce){case to:r.depthFunc(r.NEVER);break;case no:r.depthFunc(r.ALWAYS);break;case io:r.depthFunc(r.LESS);break;case Ni:r.depthFunc(r.LEQUAL);break;case so:r.depthFunc(r.EQUAL);break;case ro:r.depthFunc(r.GEQUAL);break;case oo:r.depthFunc(r.GREATER);break;case ao:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=ce}},setLocked:function(ce){O=ce},setClear:function(ce){fe!==ce&&(de&&(ce=1-ce),r.clearDepth(ce),fe=ce)},reset:function(){O=!1,K=null,j=null,fe=null,de=!1}}}function i(){let O=!1,de=null,K=null,j=null,fe=null,ce=null,Ne=null,at=null,wt=null;return{setTest:function(it){O||(it?se(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(it){de!==it&&!O&&(r.stencilMask(it),de=it)},setFunc:function(it,en,mn){(K!==it||j!==en||fe!==mn)&&(r.stencilFunc(it,en,mn),K=it,j=en,fe=mn)},setOp:function(it,en,mn){(ce!==it||Ne!==en||at!==mn)&&(r.stencilOp(it,en,mn),ce=it,Ne=en,at=mn)},setLocked:function(it){O=it},setClear:function(it){wt!==it&&(r.clearStencil(it),wt=it)},reset:function(){O=!1,de=null,K=null,j=null,fe=null,ce=null,Ne=null,at=null,wt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,A=!1,m=null,f=null,y=null,S=null,x=null,T=null,E=null,v=new $e(0,0,0),w=0,M=!1,_=null,R=null,B=null,F=null,L=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=X>=2);let $=null,ne={};const ue=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),ye=new dt().fromArray(ue),Q=new dt().fromArray(ve);function J(O,de,K,j){const fe=new Uint8Array(4),ce=r.createTexture();r.bindTexture(O,ce),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ne=0;Ne<K;Ne++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(de,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(de+Ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return ce}const ae={};ae[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(r.DEPTH_TEST),o.setFunc(Ni),He(!1),Ve(Ta),se(r.CULL_FACE),U(zn);function se(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function ge(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function Me(O,de){return d[O]!==de?(r.bindFramebuffer(O,de),d[O]=de,O===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=de),O===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=de),!0):!1}function Ee(O,de){let K=p,j=!1;if(O){K=h.get(de),K===void 0&&(K=[],h.set(de,K));const fe=O.textures;if(K.length!==fe.length||K[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,Ne=fe.length;ce<Ne;ce++)K[ce]=r.COLOR_ATTACHMENT0+ce;K.length=fe.length,j=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,j=!0);j&&r.drawBuffers(K)}function Ge(O){return g!==O?(r.useProgram(O),g=O,!0):!1}const Oe={[$n]:r.FUNC_ADD,[qc]:r.FUNC_SUBTRACT,[Qc]:r.FUNC_REVERSE_SUBTRACT};Oe[Yc]=r.MIN,Oe[Kc]=r.MAX;const Be={[jc]:r.ZERO,[Zc]:r.ONE,[Jc]:r.SRC_COLOR,[ls]:r.SRC_ALPHA,[su]:r.SRC_ALPHA_SATURATE,[nu]:r.DST_COLOR,[eu]:r.DST_ALPHA,[$c]:r.ONE_MINUS_SRC_COLOR,[cs]:r.ONE_MINUS_SRC_ALPHA,[iu]:r.ONE_MINUS_DST_COLOR,[tu]:r.ONE_MINUS_DST_ALPHA,[ru]:r.CONSTANT_COLOR,[ou]:r.ONE_MINUS_CONSTANT_COLOR,[au]:r.CONSTANT_ALPHA,[lu]:r.ONE_MINUS_CONSTANT_ALPHA};function U(O,de,K,j,fe,ce,Ne,at,wt,it){if(O===zn){A===!0&&(ge(r.BLEND),A=!1);return}if(A===!1&&(se(r.BLEND),A=!0),O!==Yl){if(O!==m||it!==M){if((f!==$n||x!==$n)&&(r.blendEquation(r.FUNC_ADD),f=$n,x=$n),it)switch(O){case Hn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ba:r.blendFunc(r.ONE,r.ONE);break;case wa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ra:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Hn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ba:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case wa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ra:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,S=null,T=null,E=null,v.set(0,0,0),w=0,m=O,M=it}return}fe=fe||de,ce=ce||K,Ne=Ne||j,(de!==f||fe!==x)&&(r.blendEquationSeparate(Oe[de],Oe[fe]),f=de,x=fe),(K!==y||j!==S||ce!==T||Ne!==E)&&(r.blendFuncSeparate(Be[K],Be[j],Be[ce],Be[Ne]),y=K,S=j,T=ce,E=Ne),(at.equals(v)===!1||wt!==w)&&(r.blendColor(at.r,at.g,at.b,wt),v.copy(at),w=wt),m=O,M=!1}function We(O,de){O.side===jt?ge(r.CULL_FACE):se(r.CULL_FACE);let K=O.side===Ot;de&&(K=!K),He(K),O.blending===Hn&&O.transparent===!1?U(zn):U(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const j=O.stencilWrite;a.setTest(j),j&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),qe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function He(O){_!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),_=O)}function Ve(O){O!==Gc?(se(r.CULL_FACE),O!==R&&(O===Ta?r.cullFace(r.BACK):O===Wc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),R=O}function Ae(O){O!==B&&(N&&r.lineWidth(O),B=O)}function qe(O,de,K){O?(se(r.POLYGON_OFFSET_FILL),(F!==de||L!==K)&&(r.polygonOffset(de,K),F=de,L=K)):ge(r.POLYGON_OFFSET_FILL)}function we(O){O?se(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)}function I(O){O===void 0&&(O=r.TEXTURE0+z-1),$!==O&&(r.activeTexture(O),$=O)}function C(O,de,K){K===void 0&&($===null?K=r.TEXTURE0+z-1:K=$);let j=ne[K];j===void 0&&(j={type:void 0,texture:void 0},ne[K]=j),(j.type!==O||j.texture!==de)&&($!==K&&(r.activeTexture(K),$=K),r.bindTexture(O,de||ae[O]),j.type=O,j.texture=de)}function G(){const O=ne[$];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ee(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ye(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function P(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(O){ye.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),ye.copy(O))}function le(O){Q.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Q.copy(O))}function Pe(O,de){let K=c.get(de);K===void 0&&(K=new WeakMap,c.set(de,K));let j=K.get(O);j===void 0&&(j=r.getUniformBlockIndex(de,O.name),K.set(O,j))}function Ue(O,de){const j=c.get(de).get(O);l.get(de)!==j&&(r.uniformBlockBinding(de,j,O.__bindingPointIndex),l.set(de,j))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},$=null,ne={},d={},h=new WeakMap,p=[],g=null,A=!1,m=null,f=null,y=null,S=null,x=null,T=null,E=null,v=new $e(0,0,0),w=0,M=!1,_=null,R=null,B=null,F=null,L=null,ye.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:ge,bindFramebuffer:Me,drawBuffers:Ee,useProgram:Ge,setBlending:U,setMaterial:We,setFlipSided:He,setCullFace:Ve,setLineWidth:Ae,setPolygonOffset:qe,setScissorTest:we,activeTexture:I,bindTexture:C,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:P,texImage3D:te,updateUBOMapping:Pe,uniformBlockBinding:Ue,texStorage2D:Ye,texStorage3D:oe,texSubImage2D:Z,texSubImage3D:Re,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:xe,viewport:le,reset:Ke}}function Vm(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,C){return p?new OffscreenCanvas(I,C):ir("canvas")}function A(I,C,G){let ee=1;const ie=we(I);if((ie.width>G||ie.height>G)&&(ee=G/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Z=Math.floor(ee*ie.width),Re=Math.floor(ee*ie.height);d===void 0&&(d=g(Z,Re));const pe=C?g(Z,Re):d;return pe.width=Z,pe.height=Re,pe.getContext("2d").drawImage(I,0,0,Z,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Z+"x"+Re+")."),pe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),I;return I}function m(I){return I.generateMipmaps}function f(I){r.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(I,C,G,ee,ie=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Z=C;if(C===r.RED&&(G===r.FLOAT&&(Z=r.R32F),G===r.HALF_FLOAT&&(Z=r.R16F),G===r.UNSIGNED_BYTE&&(Z=r.R8)),C===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.R8UI),G===r.UNSIGNED_SHORT&&(Z=r.R16UI),G===r.UNSIGNED_INT&&(Z=r.R32UI),G===r.BYTE&&(Z=r.R8I),G===r.SHORT&&(Z=r.R16I),G===r.INT&&(Z=r.R32I)),C===r.RG&&(G===r.FLOAT&&(Z=r.RG32F),G===r.HALF_FLOAT&&(Z=r.RG16F),G===r.UNSIGNED_BYTE&&(Z=r.RG8)),C===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RG8UI),G===r.UNSIGNED_SHORT&&(Z=r.RG16UI),G===r.UNSIGNED_INT&&(Z=r.RG32UI),G===r.BYTE&&(Z=r.RG8I),G===r.SHORT&&(Z=r.RG16I),G===r.INT&&(Z=r.RG32I)),C===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),G===r.UNSIGNED_INT&&(Z=r.RGB32UI),G===r.BYTE&&(Z=r.RGB8I),G===r.SHORT&&(Z=r.RGB16I),G===r.INT&&(Z=r.RGB32I)),C===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),G===r.UNSIGNED_INT&&(Z=r.RGBA32UI),G===r.BYTE&&(Z=r.RGBA8I),G===r.SHORT&&(Z=r.RGBA16I),G===r.INT&&(Z=r.RGBA32I)),C===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),C===r.RGBA){const Re=ie?tr:Je.getTransfer(ee);G===r.FLOAT&&(Z=r.RGBA32F),G===r.HALF_FLOAT&&(Z=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Z=Re===rt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(I,C){let G;return I?C===null||C===Zt||C===Hi?G=r.DEPTH24_STENCIL8:C===an?G=r.DEPTH32F_STENCIL8:C===us&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Zt||C===Hi?G=r.DEPTH_COMPONENT24:C===an?G=r.DEPTH_COMPONENT32F:C===us&&(G=r.DEPTH_COMPONENT16),G}function T(I,C){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Vt&&I.minFilter!==un?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function E(I){const C=I.target;C.removeEventListener("dispose",E),w(C),C.isVideoTexture&&u.delete(C)}function v(I){const C=I.target;C.removeEventListener("dispose",v),_(C)}function w(I){const C=n.get(I);if(C.__webglInit===void 0)return;const G=I.source,ee=h.get(G);if(ee){const ie=ee[C.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(I),Object.keys(ee).length===0&&h.delete(G)}n.remove(I)}function M(I){const C=n.get(I);r.deleteTexture(C.__webglTexture);const G=I.source,ee=h.get(G);delete ee[C.__cacheKey],o.memory.textures--}function _(I){const C=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(C.__webglFramebuffer[ee]))for(let ie=0;ie<C.__webglFramebuffer[ee].length;ie++)r.deleteFramebuffer(C.__webglFramebuffer[ee][ie]);else r.deleteFramebuffer(C.__webglFramebuffer[ee]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[ee])}else{if(Array.isArray(C.__webglFramebuffer))for(let ee=0;ee<C.__webglFramebuffer.length;ee++)r.deleteFramebuffer(C.__webglFramebuffer[ee]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ee=0;ee<C.__webglColorRenderbuffer.length;ee++)C.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[ee]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const G=I.textures;for(let ee=0,ie=G.length;ee<ie;ee++){const Z=n.get(G[ee]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(G[ee])}n.remove(I)}let R=0;function B(){R=0}function F(){const I=R;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),R+=1,I}function L(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function z(I,C){const G=n.get(I);if(I.isVideoTexture&&Ae(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){const ee=I.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,I,C);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+C)}function N(I,C){const G=n.get(I);if(I.version>0&&G.__version!==I.version){Q(G,I,C);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+C)}function X(I,C){const G=n.get(I);if(I.version>0&&G.__version!==I.version){Q(G,I,C);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+C)}function k(I,C){const G=n.get(I);if(I.version>0&&G.__version!==I.version){J(G,I,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+C)}const $={[uo]:r.REPEAT,[ti]:r.CLAMP_TO_EDGE,[ho]:r.MIRRORED_REPEAT},ne={[Vt]:r.NEAREST,[xu]:r.NEAREST_MIPMAP_NEAREST,[As]:r.NEAREST_MIPMAP_LINEAR,[un]:r.LINEAR,[gr]:r.LINEAR_MIPMAP_NEAREST,[ni]:r.LINEAR_MIPMAP_LINEAR},ue={[Mu]:r.NEVER,[Ru]:r.ALWAYS,[Eu]:r.LESS,[oc]:r.LEQUAL,[Cu]:r.EQUAL,[wu]:r.GEQUAL,[Tu]:r.GREATER,[bu]:r.NOTEQUAL};function ve(I,C){if(C.type===an&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===un||C.magFilter===gr||C.magFilter===As||C.magFilter===ni||C.minFilter===un||C.minFilter===gr||C.minFilter===As||C.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,$[C.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,$[C.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,$[C.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,ne[C.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,ne[C.minFilter]),C.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,ue[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Vt||C.minFilter!==As&&C.minFilter!==ni||C.type===an&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function ye(I,C){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",E));const ee=C.source;let ie=h.get(ee);ie===void 0&&(ie={},h.set(ee,ie));const Z=L(C);if(Z!==I.__cacheKey){ie[Z]===void 0&&(ie[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[Z].usedTimes++;const Re=ie[I.__cacheKey];Re!==void 0&&(ie[I.__cacheKey].usedTimes--,Re.usedTimes===0&&M(C)),I.__cacheKey=Z,I.__webglTexture=ie[Z].texture}return G}function Q(I,C,G){let ee=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ee=r.TEXTURE_3D);const ie=ye(I,C),Z=C.source;t.bindTexture(ee,I.__webglTexture,r.TEXTURE0+G);const Re=n.get(Z);if(Z.version!==Re.__version||ie===!0){t.activeTexture(r.TEXTURE0+G);const pe=Je.getPrimaries(Je.workingColorSpace),_e=C.colorSpace===Nn?null:Je.getPrimaries(C.colorSpace),Ye=C.colorSpace===Nn||pe===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let oe=A(C.image,!1,i.maxTextureSize);oe=qe(C,oe);const P=s.convert(C.format,C.colorSpace),te=s.convert(C.type);let xe=S(C.internalFormat,P,te,C.colorSpace,C.isVideoTexture);ve(ee,C);let le;const Pe=C.mipmaps,Ue=C.isVideoTexture!==!0,Ke=Re.__version===void 0||ie===!0,O=Z.dataReady,de=T(C,oe);if(C.isDepthTexture)xe=x(C.format===ki,C.type),Ke&&(Ue?t.texStorage2D(r.TEXTURE_2D,1,xe,oe.width,oe.height):t.texImage2D(r.TEXTURE_2D,0,xe,oe.width,oe.height,0,P,te,null));else if(C.isDataTexture)if(Pe.length>0){Ue&&Ke&&t.texStorage2D(r.TEXTURE_2D,de,xe,Pe[0].width,Pe[0].height);for(let K=0,j=Pe.length;K<j;K++)le=Pe[K],Ue?O&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,le.width,le.height,P,te,le.data):t.texImage2D(r.TEXTURE_2D,K,xe,le.width,le.height,0,P,te,le.data);C.generateMipmaps=!1}else Ue?(Ke&&t.texStorage2D(r.TEXTURE_2D,de,xe,oe.width,oe.height),O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe.width,oe.height,P,te,oe.data)):t.texImage2D(r.TEXTURE_2D,0,xe,oe.width,oe.height,0,P,te,oe.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ue&&Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,xe,Pe[0].width,Pe[0].height,oe.depth);for(let K=0,j=Pe.length;K<j;K++)if(le=Pe[K],C.format!==Lt)if(P!==null)if(Ue){if(O)if(C.layerUpdates.size>0){const fe=Za(le.width,le.height,C.format,C.type);for(const ce of C.layerUpdates){const Ne=le.data.subarray(ce*fe/le.data.BYTES_PER_ELEMENT,(ce+1)*fe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,ce,le.width,le.height,1,P,Ne)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,le.width,le.height,oe.depth,P,le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,xe,le.width,le.height,oe.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?O&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,le.width,le.height,oe.depth,P,te,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,xe,le.width,le.height,oe.depth,0,P,te,le.data)}else{Ue&&Ke&&t.texStorage2D(r.TEXTURE_2D,de,xe,Pe[0].width,Pe[0].height);for(let K=0,j=Pe.length;K<j;K++)le=Pe[K],C.format!==Lt?P!==null?Ue?O&&t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,le.width,le.height,P,le.data):t.compressedTexImage2D(r.TEXTURE_2D,K,xe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?O&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,le.width,le.height,P,te,le.data):t.texImage2D(r.TEXTURE_2D,K,xe,le.width,le.height,0,P,te,le.data)}else if(C.isDataArrayTexture)if(Ue){if(Ke&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,xe,oe.width,oe.height,oe.depth),O)if(C.layerUpdates.size>0){const K=Za(oe.width,oe.height,C.format,C.type);for(const j of C.layerUpdates){const fe=oe.data.subarray(j*K/oe.data.BYTES_PER_ELEMENT,(j+1)*K/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,oe.width,oe.height,1,P,te,fe)}C.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,P,te,oe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,oe.width,oe.height,oe.depth,0,P,te,oe.data);else if(C.isData3DTexture)Ue?(Ke&&t.texStorage3D(r.TEXTURE_3D,de,xe,oe.width,oe.height,oe.depth),O&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,P,te,oe.data)):t.texImage3D(r.TEXTURE_3D,0,xe,oe.width,oe.height,oe.depth,0,P,te,oe.data);else if(C.isFramebufferTexture){if(Ke)if(Ue)t.texStorage2D(r.TEXTURE_2D,de,xe,oe.width,oe.height);else{let K=oe.width,j=oe.height;for(let fe=0;fe<de;fe++)t.texImage2D(r.TEXTURE_2D,fe,xe,K,j,0,P,te,null),K>>=1,j>>=1}}else if(Pe.length>0){if(Ue&&Ke){const K=we(Pe[0]);t.texStorage2D(r.TEXTURE_2D,de,xe,K.width,K.height)}for(let K=0,j=Pe.length;K<j;K++)le=Pe[K],Ue?O&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,P,te,le):t.texImage2D(r.TEXTURE_2D,K,xe,P,te,le);C.generateMipmaps=!1}else if(Ue){if(Ke){const K=we(oe);t.texStorage2D(r.TEXTURE_2D,de,xe,K.width,K.height)}O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,P,te,oe)}else t.texImage2D(r.TEXTURE_2D,0,xe,P,te,oe);m(C)&&f(ee),Re.__version=Z.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function J(I,C,G){if(C.image.length!==6)return;const ee=ye(I,C),ie=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+G);const Z=n.get(ie);if(ie.version!==Z.__version||ee===!0){t.activeTexture(r.TEXTURE0+G);const Re=Je.getPrimaries(Je.workingColorSpace),pe=C.colorSpace===Nn?null:Je.getPrimaries(C.colorSpace),_e=C.colorSpace===Nn||Re===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ye=C.isCompressedTexture||C.image[0].isCompressedTexture,oe=C.image[0]&&C.image[0].isDataTexture,P=[];for(let j=0;j<6;j++)!Ye&&!oe?P[j]=A(C.image[j],!0,i.maxCubemapSize):P[j]=oe?C.image[j].image:C.image[j],P[j]=qe(C,P[j]);const te=P[0],xe=s.convert(C.format,C.colorSpace),le=s.convert(C.type),Pe=S(C.internalFormat,xe,le,C.colorSpace),Ue=C.isVideoTexture!==!0,Ke=Z.__version===void 0||ee===!0,O=ie.dataReady;let de=T(C,te);ve(r.TEXTURE_CUBE_MAP,C);let K;if(Ye){Ue&&Ke&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Pe,te.width,te.height);for(let j=0;j<6;j++){K=P[j].mipmaps;for(let fe=0;fe<K.length;fe++){const ce=K[fe];C.format!==Lt?xe!==null?Ue?O&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,ce.width,ce.height,xe,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Pe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,ce.width,ce.height,xe,le,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Pe,ce.width,ce.height,0,xe,le,ce.data)}}}else{if(K=C.mipmaps,Ue&&Ke){K.length>0&&de++;const j=we(P[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Pe,j.width,j.height)}for(let j=0;j<6;j++)if(oe){Ue?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,P[j].width,P[j].height,xe,le,P[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Pe,P[j].width,P[j].height,0,xe,le,P[j].data);for(let fe=0;fe<K.length;fe++){const Ne=K[fe].image[j].image;Ue?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,Ne.width,Ne.height,xe,le,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Pe,Ne.width,Ne.height,0,xe,le,Ne.data)}}else{Ue?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xe,le,P[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Pe,xe,le,P[j]);for(let fe=0;fe<K.length;fe++){const ce=K[fe];Ue?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,xe,le,ce.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Pe,xe,le,ce.image[j])}}}m(C)&&f(r.TEXTURE_CUBE_MAP),Z.__version=ie.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function ae(I,C,G,ee,ie,Z){const Re=s.convert(G.format,G.colorSpace),pe=s.convert(G.type),_e=S(G.internalFormat,Re,pe,G.colorSpace),Ye=n.get(C),oe=n.get(G);if(oe.__renderTarget=C,!Ye.__hasExternalTextures){const P=Math.max(1,C.width>>Z),te=Math.max(1,C.height>>Z);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,Z,_e,P,te,C.depth,0,Re,pe,null):t.texImage2D(ie,Z,_e,P,te,0,Re,pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),Ve(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,ie,oe.__webglTexture,0,He(C)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,ie,oe.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(I,C,G){if(r.bindRenderbuffer(r.RENDERBUFFER,I),C.depthBuffer){const ee=C.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,Z=x(C.stencilBuffer,ie),Re=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=He(C);Ve(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe,Z,C.width,C.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,Z,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Z,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Re,r.RENDERBUFFER,I)}else{const ee=C.textures;for(let ie=0;ie<ee.length;ie++){const Z=ee[ie],Re=s.convert(Z.format,Z.colorSpace),pe=s.convert(Z.type),_e=S(Z.internalFormat,Re,pe,Z.colorSpace),Ye=He(C);G&&Ve(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,_e,C.width,C.height):Ve(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye,_e,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,_e,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ge(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(C.depthTexture);ee.__renderTarget=C,(!ee.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),z(C.depthTexture,0);const ie=ee.__webglTexture,Z=He(C);if(C.depthTexture.format===si)Ve(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(C.depthTexture.format===ki)Ve(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Me(I){const C=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const ee=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ee){const ie=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),C.__depthDisposeCallback=ie}C.__boundDepthTexture=ee}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ge(C.__webglFramebuffer,I)}else if(G){C.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[ee]),C.__webglDepthbuffer[ee]===void 0)C.__webglDepthbuffer[ee]=r.createRenderbuffer(),se(C.__webglDepthbuffer[ee],I,!1);else{const ie=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=C.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),se(C.__webglDepthbuffer,I,!1);else{const ee=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,ie)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(I,C,G){const ee=n.get(I);C!==void 0&&ae(ee.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Me(I)}function Ge(I){const C=I.texture,G=n.get(I),ee=n.get(C);I.addEventListener("dispose",v);const ie=I.textures,Z=I.isWebGLCubeRenderTarget===!0,Re=ie.length>1;if(Re||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=C.version,o.memory.textures++),Z){G.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer[pe]=[];for(let _e=0;_e<C.mipmaps.length;_e++)G.__webglFramebuffer[pe][_e]=r.createFramebuffer()}else G.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer=[];for(let pe=0;pe<C.mipmaps.length;pe++)G.__webglFramebuffer[pe]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Re)for(let pe=0,_e=ie.length;pe<_e;pe++){const Ye=n.get(ie[pe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&Ve(I)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pe=0;pe<ie.length;pe++){const _e=ie[pe];G.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[pe]);const Ye=s.convert(_e.format,_e.colorSpace),oe=s.convert(_e.type),P=S(_e.internalFormat,Ye,oe,_e.colorSpace,I.isXRRenderTarget===!0),te=He(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,te,P,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,G.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),se(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),ve(r.TEXTURE_CUBE_MAP,C);for(let pe=0;pe<6;pe++)if(C.mipmaps&&C.mipmaps.length>0)for(let _e=0;_e<C.mipmaps.length;_e++)ae(G.__webglFramebuffer[pe][_e],I,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else ae(G.__webglFramebuffer[pe],I,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(C)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let pe=0,_e=ie.length;pe<_e;pe++){const Ye=ie[pe],oe=n.get(Ye);t.bindTexture(r.TEXTURE_2D,oe.__webglTexture),ve(r.TEXTURE_2D,Ye),ae(G.__webglFramebuffer,I,Ye,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,0),m(Ye)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let pe=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,ee.__webglTexture),ve(pe,C),C.mipmaps&&C.mipmaps.length>0)for(let _e=0;_e<C.mipmaps.length;_e++)ae(G.__webglFramebuffer[_e],I,C,r.COLOR_ATTACHMENT0,pe,_e);else ae(G.__webglFramebuffer,I,C,r.COLOR_ATTACHMENT0,pe,0);m(C)&&f(pe),t.unbindTexture()}I.depthBuffer&&Me(I)}function Oe(I){const C=I.textures;for(let G=0,ee=C.length;G<ee;G++){const ie=C[G];if(m(ie)){const Z=y(I),Re=n.get(ie).__webglTexture;t.bindTexture(Z,Re),f(Z),t.unbindTexture()}}}const Be=[],U=[];function We(I){if(I.samples>0){if(Ve(I)===!1){const C=I.textures,G=I.width,ee=I.height;let ie=r.COLOR_BUFFER_BIT;const Z=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=n.get(I),pe=C.length>1;if(pe)for(let _e=0;_e<C.length;_e++)t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let _e=0;_e<C.length;_e++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Re.__webglColorRenderbuffer[_e]);const Ye=n.get(C[_e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ye,0)}r.blitFramebuffer(0,0,G,ee,0,0,G,ee,ie,r.NEAREST),l===!0&&(Be.length=0,U.length=0,Be.push(r.COLOR_ATTACHMENT0+_e),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Be.push(Z),U.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<C.length;_e++){t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,Re.__webglColorRenderbuffer[_e]);const Ye=n.get(C[_e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,Ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const C=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function He(I){return Math.min(i.maxSamples,I.samples)}function Ve(I){const C=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ae(I){const C=o.render.frame;u.get(I)!==C&&(u.set(I,C),I.update())}function qe(I,C){const G=I.colorSpace,ee=I.format,ie=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Vi&&G!==Nn&&(Je.getTransfer(G)===rt?(ee!==Lt||ie!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),C}function we(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=Ee,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ve}function Cc(r,e){function t(n,i=Nn){let s;const o=Je.getTransfer(i);if(n===pn)return r.UNSIGNED_BYTE;if(n===Xo)return r.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===$l)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Zl)return r.BYTE;if(n===Jl)return r.SHORT;if(n===us)return r.UNSIGNED_SHORT;if(n===Wo)return r.INT;if(n===Zt)return r.UNSIGNED_INT;if(n===an)return r.FLOAT;if(n===qi)return r.HALF_FLOAT;if(n===ec)return r.ALPHA;if(n===tc)return r.RGB;if(n===Lt)return r.RGBA;if(n===nc)return r.LUMINANCE;if(n===ic)return r.LUMINANCE_ALPHA;if(n===si)return r.DEPTH_COMPONENT;if(n===ki)return r.DEPTH_STENCIL;if(n===sc)return r.RED;if(n===cr)return r.RED_INTEGER;if(n===Qo)return r.RG;if(n===Yo)return r.RG_INTEGER;if(n===Pi)return r.RGBA_INTEGER;if(n===qs||n===Qs||n===Ys||n===Ks)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fo||n===po||n===mo||n===go)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===go)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ao||n===xo||n===_o)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ao||n===xo)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===_o)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===So||n===vo||n===yo||n===Mo||n===Eo||n===Co||n===To||n===bo||n===wo||n===Ro||n===Io||n===Do||n===Po||n===Fo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===So)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Co)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===To)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ro)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===js||n===Lo||n===Bo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===js)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===Uo||n===No||n===Oo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===js)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Gm={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const A of e.hand.values()){const m=t.getJointPose(A,n),f=this._getHandJoint(c,A);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xm=`
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

}`;class qm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Bt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wt({vertexShader:Wm,fragmentShader:Xm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qm extends oi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const A=new qm,m=t.getContextAttributes();let f=null,y=null;const S=[],x=[],T=new Ce;let E=null;const v=new Kt;v.viewport=new dt;const w=new Kt;w.viewport=new dt;const M=[v,w],_=new pd;let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let J=S[Q];return J===void 0&&(J=new Wr,S[Q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Q){let J=S[Q];return J===void 0&&(J=new Wr,S[Q]=J),J.getGripSpace()},this.getHand=function(Q){let J=S[Q];return J===void 0&&(J=new Wr,S[Q]=J),J.getHandSpace()};function F(Q){const J=x.indexOf(Q.inputSource);if(J===-1)return;const ae=S[J];ae!==void 0&&(ae.update(Q.inputSource,Q.frame,c||o),ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function L(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",z);for(let Q=0;Q<S.length;Q++){const J=x[Q];J!==null&&(x[Q]=null,S[Q].disconnect(J))}R=null,B=null,A.reset(),e.setRenderTarget(f),p=null,h=null,d=null,i=null,y=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",L),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Gn(p.framebufferWidth,p.framebufferHeight,{format:Lt,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ae=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?ki:si,ae=m.stencil?Hi:Zt);const ge={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(ge),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Gn(h.textureWidth,h.textureHeight,{format:Lt,type:pn,depthTexture:new jo(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ye.setContext(i),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function z(Q){for(let J=0;J<Q.removed.length;J++){const ae=Q.removed[J],se=x.indexOf(ae);se>=0&&(x[se]=null,S[se].disconnect(ae))}for(let J=0;J<Q.added.length;J++){const ae=Q.added[J];let se=x.indexOf(ae);if(se===-1){for(let Me=0;Me<S.length;Me++)if(Me>=x.length){x.push(ae),se=Me;break}else if(x[Me]===null){x[Me]=ae,se=Me;break}if(se===-1)break}const ge=S[se];ge&&ge.connect(ae)}}const N=new D,X=new D;function k(Q,J,ae){N.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(ae.matrixWorld);const se=N.distanceTo(X),ge=J.projectionMatrix.elements,Me=ae.projectionMatrix.elements,Ee=ge[14]/(ge[10]-1),Ge=ge[14]/(ge[10]+1),Oe=(ge[9]+1)/ge[5],Be=(ge[9]-1)/ge[5],U=(ge[8]-1)/ge[0],We=(Me[8]+1)/Me[0],He=Ee*U,Ve=Ee*We,Ae=se/(-U+We),qe=Ae*-U;if(J.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(qe),Q.translateZ(Ae),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ge[10]===-1)Q.projectionMatrix.copy(J.projectionMatrix),Q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const we=Ee+Ae,I=Ge+Ae,C=He-qe,G=Ve+(se-qe),ee=Oe*Ge/I*we,ie=Be*Ge/I*we;Q.projectionMatrix.makePerspective(C,G,ee,ie,we,I),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function $(Q,J){J===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(J.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let J=Q.near,ae=Q.far;A.texture!==null&&(A.depthNear>0&&(J=A.depthNear),A.depthFar>0&&(ae=A.depthFar)),_.near=w.near=v.near=J,_.far=w.far=v.far=ae,(R!==_.near||B!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),R=_.near,B=_.far),v.layers.mask=Q.layers.mask|2,w.layers.mask=Q.layers.mask|4,_.layers.mask=v.layers.mask|w.layers.mask;const se=Q.parent,ge=_.cameras;$(_,se);for(let Me=0;Me<ge.length;Me++)$(ge[Me],se);ge.length===2?k(_,v,w):_.projectionMatrix.copy(v.projectionMatrix),ne(Q,_,se)};function ne(Q,J,ae){ae===null?Q.matrix.copy(J.matrixWorld):(Q.matrix.copy(ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(J.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(J.projectionMatrix),Q.projectionMatrixInverse.copy(J.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=zo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(_)};let ue=null;function ve(Q,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let se=!1;ae.length!==_.cameras.length&&(_.cameras.length=0,se=!0);for(let Me=0;Me<ae.length;Me++){const Ee=ae[Me];let Ge=null;if(p!==null)Ge=p.getViewport(Ee);else{const Be=d.getViewSubImage(h,Ee);Ge=Be.viewport,Me===0&&(e.setRenderTargetTextures(y,Be.colorTexture,h.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(y))}let Oe=M[Me];Oe===void 0&&(Oe=new Kt,Oe.layers.enable(Me),Oe.viewport=new dt,M[Me]=Oe),Oe.matrix.fromArray(Ee.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ee.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Me===0&&(_.matrix.copy(Oe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),se===!0&&_.cameras.push(Oe)}const ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const Me=d.getDepthInformation(ae[0]);Me&&Me.isValid&&Me.texture&&A.init(e,Me,i.renderState)}}for(let ae=0;ae<S.length;ae++){const se=x[ae],ge=S[ae];se!==null&&ge!==void 0&&ge.update(se,J,c||o)}ue&&ue(Q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ye=new Sc;ye.setAnimationLoop(ve),this.setAnimationLoop=function(Q){ue=Q},this.dispose=function(){}}}const Zn=new bn,Ym=new Le;function Km(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,gc(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),A(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ot&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ot&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),S=y.envMap,x=y.envMapRotation;S&&(m.envMap.value=S,Zn.copy(x),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),m.envMapRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(Zn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ot&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function A(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jm(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const x=S.program;n.uniformBlockBinding(y,x)}function c(y,S){let x=i[y.id];x===void 0&&(g(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",m));const T=S.program;n.updateUBOMapping(y,T);const E=e.render.frame;s[y.id]!==E&&(h(y),s[y.id]=E)}function u(y){const S=d();y.__bindingPointIndex=S;const x=r.createBuffer(),T=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,T,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,x),x}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const S=i[y.id],x=y.uniforms,T=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let E=0,v=x.length;E<v;E++){const w=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,_=w.length;M<_;M++){const R=w[M];if(p(R,E,M,T)===!0){const B=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let L=0;for(let z=0;z<F.length;z++){const N=F[z],X=A(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,B+L,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(y,S,x,T){const E=y.value,v=S+"_"+x;if(T[v]===void 0)return typeof E=="number"||typeof E=="boolean"?T[v]=E:T[v]=E.clone(),!0;{const w=T[v];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return T[v]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function g(y){const S=y.uniforms;let x=0;const T=16;for(let v=0,w=S.length;v<w;v++){const M=Array.isArray(S[v])?S[v]:[S[v]];for(let _=0,R=M.length;_<R;_++){const B=M[_],F=Array.isArray(B.value)?B.value:[B.value];for(let L=0,z=F.length;L<z;L++){const N=F[L],X=A(N),k=x%T,$=k%X.boundary,ne=k+$;x+=$,ne!==0&&T-ne<X.storage&&(x+=T-ne),B.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=X.storage}}}const E=x%T;return E>0&&(x+=T-E),y.__size=x,y.__cache={},this}function A(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function f(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}class Zm{constructor(e={}){const{canvas:t=Pu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),A=new Int32Array(4);let m=null,f=null;const y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=kn,this.toneMappingExposure=1;const x=this;let T=!1,E=0,v=0,w=null,M=-1,_=null;const R=new dt,B=new dt;let F=null;const L=new $e(0);let z=0,N=t.width,X=t.height,k=1,$=null,ne=null;const ue=new dt(0,0,N,X),ve=new dt(0,0,N,X);let ye=!1;const Q=new _c;let J=!1,ae=!1;const se=new Le,ge=new Le,Me=new D,Ee=new dt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function Be(){return w===null?k:1}let U=n;function We(b,H){return t.getContext(b,H)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ce,!1),U===null){const H="webgl2";if(U=We(H,b),U===null)throw We(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let He,Ve,Ae,qe,we,I,C,G,ee,ie,Z,Re,pe,_e,Ye,oe,P,te,xe,le,Pe,Ue,Ke,O;function de(){He=new ap(U),He.init(),Ue=new Cc(U,He),Ve=new tp(U,He,e,Ue),Ae=new km(U,He),Ve.reverseDepthBuffer&&h&&Ae.buffers.depth.setReversed(!0),qe=new up(U),we=new wm,I=new Vm(U,He,Ae,we,Ve,Ue,qe),C=new ip(x),G=new op(x),ee=new gd(U),Ke=new $f(U,ee),ie=new lp(U,ee,qe,Ke),Z=new hp(U,ie,ee,qe),xe=new dp(U,Ve,I),oe=new np(we),Re=new bm(x,C,G,He,Ve,Ke,oe),pe=new Km(x,we),_e=new Im,Ye=new Um(He),te=new Jf(x,C,G,Ae,Z,p,l),P=new zm(x,Z,Ve),O=new jm(U,qe,Ve,Ae),le=new ep(U,He,qe),Pe=new cp(U,He,qe),qe.programs=Re.programs,x.capabilities=Ve,x.extensions=He,x.properties=we,x.renderLists=_e,x.shadowMap=P,x.state=Ae,x.info=qe}de();const K=new Qm(x,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=He.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=He.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(N,X,!1))},this.getSize=function(b){return b.set(N,X)},this.setSize=function(b,H,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,X=H,t.width=Math.floor(b*k),t.height=Math.floor(H*k),q===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(N*k,X*k).floor()},this.setDrawingBufferSize=function(b,H,q){N=b,X=H,k=q,t.width=Math.floor(b*q),t.height=Math.floor(H*q),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(ue)},this.setViewport=function(b,H,q,Y){b.isVector4?ue.set(b.x,b.y,b.z,b.w):ue.set(b,H,q,Y),Ae.viewport(R.copy(ue).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(ve)},this.setScissor=function(b,H,q,Y){b.isVector4?ve.set(b.x,b.y,b.z,b.w):ve.set(b,H,q,Y),Ae.scissor(B.copy(ve).multiplyScalar(k).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(b){Ae.setScissorTest(ye=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){ne=b},this.getClearColor=function(b){return b.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(b=!0,H=!0,q=!0){let Y=0;if(b){let V=!1;if(w!==null){const re=w.texture.format;V=re===Pi||re===Yo||re===cr}if(V){const re=w.texture.type,me=re===pn||re===Zt||re===us||re===Hi||re===Xo||re===qo,Se=te.getClearColor(),Te=te.getClearAlpha(),ze=Se.r,ke=Se.g,Ie=Se.b;me?(g[0]=ze,g[1]=ke,g[2]=Ie,g[3]=Te,U.clearBufferuiv(U.COLOR,0,g)):(A[0]=ze,A[1]=ke,A[2]=Ie,A[3]=Te,U.clearBufferiv(U.COLOR,0,A))}else Y|=U.COLOR_BUFFER_BIT}H&&(Y|=U.DEPTH_BUFFER_BIT),q&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),te.dispose(),_e.dispose(),Ye.dispose(),we.dispose(),C.dispose(),G.dispose(),Z.dispose(),Ke.dispose(),O.dispose(),Re.dispose(),K.dispose(),K.removeEventListener("sessionstart",xa),K.removeEventListener("sessionend",_a),Wn.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=qe.autoReset,H=P.enabled,q=P.autoUpdate,Y=P.needsUpdate,V=P.type;de(),qe.autoReset=b,P.enabled=H,P.autoUpdate=q,P.needsUpdate=Y,P.type=V}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ne(b){const H=b.target;H.removeEventListener("dispose",Ne),at(H)}function at(b){wt(b),we.remove(b)}function wt(b){const H=we.get(b).programs;H!==void 0&&(H.forEach(function(q){Re.releaseProgram(q)}),b.isShaderMaterial&&Re.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,q,Y,V,re){H===null&&(H=Ge);const me=V.isMesh&&V.matrixWorld.determinant()<0,Se=Lc(b,H,q,Y,V);Ae.setMaterial(Y,me);let Te=q.index,ze=1;if(Y.wireframe===!0){if(Te=ie.getWireframeAttribute(q),Te===void 0)return;ze=2}const ke=q.drawRange,Ie=q.attributes.position;let je=ke.start*ze,et=(ke.start+ke.count)*ze;re!==null&&(je=Math.max(je,re.start*ze),et=Math.min(et,(re.start+re.count)*ze)),Te!==null?(je=Math.max(je,0),et=Math.min(et,Te.count)):Ie!=null&&(je=Math.max(je,0),et=Math.min(et,Ie.count));const gt=et-je;if(gt<0||gt===1/0)return;Ke.setup(V,Y,Se,q,Te);let ft,Ze=le;if(Te!==null&&(ft=ee.get(Te),Ze=Pe,Ze.setIndex(ft)),V.isMesh)Y.wireframe===!0?(Ae.setLineWidth(Y.wireframeLinewidth*Be()),Ze.setMode(U.LINES)):Ze.setMode(U.TRIANGLES);else if(V.isLine){let De=Y.linewidth;De===void 0&&(De=1),Ae.setLineWidth(De*Be()),V.isLineSegments?Ze.setMode(U.LINES):V.isLineLoop?Ze.setMode(U.LINE_LOOP):Ze.setMode(U.LINE_STRIP)}else V.isPoints?Ze.setMode(U.POINTS):V.isSprite&&Ze.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ze.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ze.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const De=V._multiDrawStarts,Ct=V._multiDrawCounts,tt=V._multiDrawCount,tn=Te?ee.get(Te).bytesPerElement:1,ai=we.get(Y).currentProgram.getUniforms();for(let zt=0;zt<tt;zt++)ai.setValue(U,"_gl_DrawID",zt),Ze.render(De[zt]/tn,Ct[zt])}else if(V.isInstancedMesh)Ze.renderInstances(je,gt,V.count);else if(q.isInstancedBufferGeometry){const De=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ct=Math.min(q.instanceCount,De);Ze.renderInstances(je,gt,Ct)}else Ze.render(je,gt)};function it(b,H,q){b.transparent===!0&&b.side===jt&&b.forceSinglePass===!1?(b.side=Ot,b.needsUpdate=!0,ms(b,H,q),b.side=fn,b.needsUpdate=!0,ms(b,H,q),b.side=jt):ms(b,H,q)}this.compile=function(b,H,q=null){q===null&&(q=b),f=Ye.get(q),f.init(H),S.push(f),q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),b!==q&&b.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const Y=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const re=V.material;if(re)if(Array.isArray(re))for(let me=0;me<re.length;me++){const Se=re[me];it(Se,q,V),Y.add(Se)}else it(re,q,V),Y.add(re)}),S.pop(),f=null,Y},this.compileAsync=function(b,H,q=null){const Y=this.compile(b,H,q);return new Promise(V=>{function re(){if(Y.forEach(function(me){we.get(me).currentProgram.isReady()&&Y.delete(me)}),Y.size===0){V(b);return}setTimeout(re,10)}He.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let en=null;function mn(b){en&&en(b)}function xa(){Wn.stop()}function _a(){Wn.start()}const Wn=new Sc;Wn.setAnimationLoop(mn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(b){en=b,K.setAnimationLoop(b),b===null?Wn.stop():Wn.start()},K.addEventListener("sessionstart",xa),K.addEventListener("sessionend",_a),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(H),H=K.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,H,w),f=Ye.get(b,S.length),f.init(H),S.push(f),ge.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Q.setFromProjectionMatrix(ge),ae=this.localClippingEnabled,J=oe.init(this.clippingPlanes,ae),m=_e.get(b,y.length),m.init(),y.push(m),K.enabled===!0&&K.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&fr(re,H,-1/0,x.sortObjects)}fr(b,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort($,ne),Oe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Oe&&te.addToRenderList(m,b),this.info.render.frame++,J===!0&&oe.beginShadows();const q=f.state.shadowsArray;P.render(q,b,H),J===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,V=m.transmissive;if(f.setupLights(),H.isArrayCamera){const re=H.cameras;if(V.length>0)for(let me=0,Se=re.length;me<Se;me++){const Te=re[me];va(Y,V,b,Te)}Oe&&te.render(b);for(let me=0,Se=re.length;me<Se;me++){const Te=re[me];Sa(m,b,Te,Te.viewport)}}else V.length>0&&va(Y,V,b,H),Oe&&te.render(b),Sa(m,b,H);w!==null&&(I.updateMultisampleRenderTarget(w),I.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(x,b,H),Ke.resetDefaultState(),M=-1,_=null,S.pop(),S.length>0?(f=S[S.length-1],J===!0&&oe.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function fr(b,H,q,Y){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){Y&&Ee.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ge);const me=Z.update(b),Se=b.material;Se.visible&&m.push(b,me,Se,q,Ee.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const me=Z.update(b),Se=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ee.copy(b.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ee.copy(me.boundingSphere.center)),Ee.applyMatrix4(b.matrixWorld).applyMatrix4(ge)),Array.isArray(Se)){const Te=me.groups;for(let ze=0,ke=Te.length;ze<ke;ze++){const Ie=Te[ze],je=Se[Ie.materialIndex];je&&je.visible&&m.push(b,me,je,q,Ee.z,Ie)}}else Se.visible&&m.push(b,me,Se,q,Ee.z,null)}}const re=b.children;for(let me=0,Se=re.length;me<Se;me++)fr(re[me],H,q,Y)}function Sa(b,H,q,Y){const V=b.opaque,re=b.transmissive,me=b.transparent;f.setupLightsView(q),J===!0&&oe.setGlobalState(x.clippingPlanes,q),Y&&Ae.viewport(R.copy(Y)),V.length>0&&ps(V,H,q),re.length>0&&ps(re,H,q),me.length>0&&ps(me,H,q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function va(b,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new Gn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?qi:pn,minFilter:ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const re=f.state.transmissionRenderTarget[Y.id],me=Y.viewport||R;re.setSize(me.z,me.w);const Se=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(L),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),Oe&&te.render(q);const Te=x.toneMapping;x.toneMapping=kn;const ze=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),J===!0&&oe.setGlobalState(x.clippingPlanes,Y),ps(b,q,Y),I.updateMultisampleRenderTarget(re),I.updateRenderTargetMipmap(re),He.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ie=0,je=H.length;Ie<je;Ie++){const et=H[Ie],gt=et.object,ft=et.geometry,Ze=et.material,De=et.group;if(Ze.side===jt&&gt.layers.test(Y.layers)){const Ct=Ze.side;Ze.side=Ot,Ze.needsUpdate=!0,ya(gt,q,Y,ft,Ze,De),Ze.side=Ct,Ze.needsUpdate=!0,ke=!0}}ke===!0&&(I.updateMultisampleRenderTarget(re),I.updateRenderTargetMipmap(re))}x.setRenderTarget(Se),x.setClearColor(L,z),ze!==void 0&&(Y.viewport=ze),x.toneMapping=Te}function ps(b,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let V=0,re=b.length;V<re;V++){const me=b[V],Se=me.object,Te=me.geometry,ze=Y===null?me.material:Y,ke=me.group;Se.layers.test(q.layers)&&ya(Se,H,q,Te,ze,ke)}}function ya(b,H,q,Y,V,re){b.onBeforeRender(x,H,q,Y,V,re),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(x,H,q,Y,b,re),V.transparent===!0&&V.side===jt&&V.forceSinglePass===!1?(V.side=Ot,V.needsUpdate=!0,x.renderBufferDirect(q,H,Y,V,b,re),V.side=fn,V.needsUpdate=!0,x.renderBufferDirect(q,H,Y,V,b,re),V.side=jt):x.renderBufferDirect(q,H,Y,V,b,re),b.onAfterRender(x,H,q,Y,V,re)}function ms(b,H,q){H.isScene!==!0&&(H=Ge);const Y=we.get(b),V=f.state.lights,re=f.state.shadowsArray,me=V.state.version,Se=Re.getParameters(b,V.state,re,H,q),Te=Re.getProgramCacheKey(Se);let ze=Y.programs;Y.environment=b.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(b.isMeshStandardMaterial?G:C).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,ze===void 0&&(b.addEventListener("dispose",Ne),ze=new Map,Y.programs=ze);let ke=ze.get(Te);if(ke!==void 0){if(Y.currentProgram===ke&&Y.lightsStateVersion===me)return Ea(b,Se),ke}else Se.uniforms=Re.getUniforms(b),b.onBeforeCompile(Se,x),ke=Re.acquireProgram(Se,Te),ze.set(Te,ke),Y.uniforms=Se.uniforms;const Ie=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=oe.uniform),Ea(b,Se),Y.needsLights=Uc(b),Y.lightsStateVersion=me,Y.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.directionalShadowMap.value=V.state.directionalShadowMap,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotShadowMap.value=V.state.spotShadowMap,Ie.spotLightMatrix.value=V.state.spotLightMatrix,Ie.spotLightMap.value=V.state.spotLightMap,Ie.pointShadowMap.value=V.state.pointShadowMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=ke,Y.uniformsList=null,ke}function Ma(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Js.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Ea(b,H){const q=we.get(b);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Lc(b,H,q,Y,V){H.isScene!==!0&&(H=Ge),I.resetTextureUnits();const re=H.fog,me=Y.isMeshStandardMaterial?H.environment:null,Se=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Vi,Te=(Y.isMeshStandardMaterial?G:C).get(Y.envMap||me),ze=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ke=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ie=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,et=!!q.morphAttributes.color;let gt=kn;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(gt=x.toneMapping);const ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ze=ft!==void 0?ft.length:0,De=we.get(Y),Ct=f.state.lights;if(J===!0&&(ae===!0||b!==_)){const Pt=b===_&&Y.id===M;oe.setState(Y,b,Pt)}let tt=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ct.state.version||De.outputColorSpace!==Se||V.isBatchedMesh&&De.batching===!1||!V.isBatchedMesh&&De.batching===!0||V.isBatchedMesh&&De.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&De.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&De.instancing===!1||!V.isInstancedMesh&&De.instancing===!0||V.isSkinnedMesh&&De.skinning===!1||!V.isSkinnedMesh&&De.skinning===!0||V.isInstancedMesh&&De.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&De.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&De.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&De.instancingMorph===!1&&V.morphTexture!==null||De.envMap!==Te||Y.fog===!0&&De.fog!==re||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==oe.numPlanes||De.numIntersection!==oe.numIntersection)||De.vertexAlphas!==ze||De.vertexTangents!==ke||De.morphTargets!==Ie||De.morphNormals!==je||De.morphColors!==et||De.toneMapping!==gt||De.morphTargetsCount!==Ze)&&(tt=!0):(tt=!0,De.__version=Y.version);let tn=De.currentProgram;tt===!0&&(tn=ms(Y,H,V));let ai=!1,zt=!1,Ki=!1;const ct=tn.getUniforms(),Xt=De.uniforms;if(Ae.useProgram(tn.program)&&(ai=!0,zt=!0,Ki=!0),Y.id!==M&&(M=Y.id,zt=!0),ai||_!==b){Ae.buffers.depth.getReversed()?(se.copy(b.projectionMatrix),Lu(se),Bu(se),ct.setValue(U,"projectionMatrix",se)):ct.setValue(U,"projectionMatrix",b.projectionMatrix),ct.setValue(U,"viewMatrix",b.matrixWorldInverse);const Ut=ct.map.cameraPosition;Ut!==void 0&&Ut.setValue(U,Me.setFromMatrixPosition(b.matrixWorld)),Ve.logarithmicDepthBuffer&&ct.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ct.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),_!==b&&(_=b,zt=!0,Ki=!0)}if(V.isSkinnedMesh){ct.setOptional(U,V,"bindMatrix"),ct.setOptional(U,V,"bindMatrixInverse");const Pt=V.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ct.setValue(U,"boneTexture",Pt.boneTexture,I))}V.isBatchedMesh&&(ct.setOptional(U,V,"batchingTexture"),ct.setValue(U,"batchingTexture",V._matricesTexture,I),ct.setOptional(U,V,"batchingIdTexture"),ct.setValue(U,"batchingIdTexture",V._indirectTexture,I),ct.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&ct.setValue(U,"batchingColorTexture",V._colorsTexture,I));const qt=q.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&xe.update(V,q,tn),(zt||De.receiveShadow!==V.receiveShadow)&&(De.receiveShadow=V.receiveShadow,ct.setValue(U,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Xt.envMap.value=Te,Xt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(Xt.envMapIntensity.value=H.environmentIntensity),zt&&(ct.setValue(U,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&Bc(Xt,Ki),re&&Y.fog===!0&&pe.refreshFogUniforms(Xt,re),pe.refreshMaterialUniforms(Xt,Y,k,X,f.state.transmissionRenderTarget[b.id]),Js.upload(U,Ma(De),Xt,I)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Js.upload(U,Ma(De),Xt,I),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ct.setValue(U,"center",V.center),ct.setValue(U,"modelViewMatrix",V.modelViewMatrix),ct.setValue(U,"normalMatrix",V.normalMatrix),ct.setValue(U,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Pt=Y.uniformsGroups;for(let Ut=0,pr=Pt.length;Ut<pr;Ut++){const Xn=Pt[Ut];O.update(Xn,tn),O.bind(Xn,tn)}}return tn}function Bc(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Uc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,H,q){we.get(b.texture).__webglTexture=H,we.get(b.depthTexture).__webglTexture=q;const Y=we.get(b);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,H){const q=we.get(b);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,q=0){w=b,E=H,v=q;let Y=!0,V=null,re=!1,me=!1;if(b){const Te=we.get(b);if(Te.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(Te.__webglFramebuffer===void 0)I.setupRenderTarget(b);else if(Te.__hasExternalTextures)I.rebindTextures(b,we.get(b.texture).__webglTexture,we.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ie=b.depthTexture;if(Te.__boundDepthTexture!==Ie){if(Ie!==null&&we.has(Ie)&&(b.width!==Ie.image.width||b.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(b)}}const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(me=!0);const ke=we.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[H])?V=ke[H][q]:V=ke[H],re=!0):b.samples>0&&I.useMultisampledRTT(b)===!1?V=we.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?V=ke[q]:V=ke,R.copy(b.viewport),B.copy(b.scissor),F=b.scissorTest}else R.copy(ue).multiplyScalar(k).floor(),B.copy(ve).multiplyScalar(k).floor(),F=ye;if(Ae.bindFramebuffer(U.FRAMEBUFFER,V)&&Y&&Ae.drawBuffers(b,V),Ae.viewport(R),Ae.scissor(B),Ae.setScissorTest(F),re){const Te=we.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,Te.__webglTexture,q)}else if(me){const Te=we.get(b.texture),ze=H||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.__webglTexture,q||0,ze)}M=-1},this.readRenderTargetPixels=function(b,H,q,Y,V,re,me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){Ae.bindFramebuffer(U.FRAMEBUFFER,Se);try{const Te=b.texture,ze=Te.format,ke=Te.type;if(!Ve.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-Y&&q>=0&&q<=b.height-V&&U.readPixels(H,q,Y,V,Ue.convert(ze),Ue.convert(ke),re)}finally{const Te=w!==null?we.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(b,H,q,Y,V,re,me){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){const Te=b.texture,ze=Te.format,ke=Te.type;if(!Ve.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=b.width-Y&&q>=0&&q<=b.height-V){Ae.bindFramebuffer(U.FRAMEBUFFER,Se);const Ie=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(H,q,Y,V,Ue.convert(ze),Ue.convert(ke),0);const je=w!==null?we.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,je);const et=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Fu(U,et,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(Ie),U.deleteSync(et),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,H=null,q=0){b.isTexture!==!0&&(wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1]);const Y=Math.pow(2,-q),V=Math.floor(b.image.width*Y),re=Math.floor(b.image.height*Y),me=H!==null?H.x:0,Se=H!==null?H.y:0;I.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,me,Se,V,re),Ae.unbindTexture()};const Nc=U.createFramebuffer(),Oc=U.createFramebuffer();this.copyTextureToTexture=function(b,H,q=null,Y=null,V=0,re=null){b.isTexture!==!0&&(wi("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1],H=arguments[2],re=arguments[3]||0,q=null),re===null&&(V!==0?(wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=V,V=0):re=0);let me,Se,Te,ze,ke,Ie,je,et,gt;const ft=b.isCompressedTexture?b.mipmaps[re]:b.image;if(q!==null)me=q.max.x-q.min.x,Se=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,ze=q.min.x,ke=q.min.y,Ie=q.isBox3?q.min.z:0;else{const qt=Math.pow(2,-V);me=Math.floor(ft.width*qt),Se=Math.floor(ft.height*qt),b.isDataArrayTexture?Te=ft.depth:b.isData3DTexture?Te=Math.floor(ft.depth*qt):Te=1,ze=0,ke=0,Ie=0}Y!==null?(je=Y.x,et=Y.y,gt=Y.z):(je=0,et=0,gt=0);const Ze=Ue.convert(H.format),De=Ue.convert(H.type);let Ct;H.isData3DTexture?(I.setTexture3D(H,0),Ct=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(I.setTexture2DArray(H,0),Ct=U.TEXTURE_2D_ARRAY):(I.setTexture2D(H,0),Ct=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const tt=U.getParameter(U.UNPACK_ROW_LENGTH),tn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ai=U.getParameter(U.UNPACK_SKIP_PIXELS),zt=U.getParameter(U.UNPACK_SKIP_ROWS),Ki=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ft.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ze),U.pixelStorei(U.UNPACK_SKIP_ROWS,ke),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie);const ct=b.isDataArrayTexture||b.isData3DTexture,Xt=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const qt=we.get(b),Pt=we.get(H),Ut=we.get(qt.__renderTarget),pr=we.get(Pt.__renderTarget);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,pr.__webglFramebuffer);for(let Xn=0;Xn<Te;Xn++)ct&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.get(b).__webglTexture,V,Ie+Xn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.get(H).__webglTexture,re,gt+Xn)),U.blitFramebuffer(ze,ke,me,Se,je,et,me,Se,U.DEPTH_BUFFER_BIT,U.NEAREST);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||we.has(b)){const qt=we.get(b),Pt=we.get(H);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,Nc),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,Oc);for(let Ut=0;Ut<Te;Ut++)ct?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qt.__webglTexture,V,Ie+Ut):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qt.__webglTexture,V),Xt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,re,gt+Ut):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,re),V!==0?U.blitFramebuffer(ze,ke,me,Se,je,et,me,Se,U.COLOR_BUFFER_BIT,U.NEAREST):Xt?U.copyTexSubImage3D(Ct,re,je,et,gt+Ut,ze,ke,me,Se):U.copyTexSubImage2D(Ct,re,je,et,ze,ke,me,Se);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Xt?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Ct,re,je,et,gt,me,Se,Te,Ze,De,ft.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(Ct,re,je,et,gt,me,Se,Te,Ze,ft.data):U.texSubImage3D(Ct,re,je,et,gt,me,Se,Te,Ze,De,ft):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,re,je,et,me,Se,Ze,De,ft.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,re,je,et,ft.width,ft.height,Ze,ft.data):U.texSubImage2D(U.TEXTURE_2D,re,je,et,me,Se,Ze,De,ft);U.pixelStorei(U.UNPACK_ROW_LENGTH,tt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ai),U.pixelStorei(U.UNPACK_SKIP_ROWS,zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ki),re===0&&H.generateMipmaps&&U.generateMipmap(Ct),Ae.unbindTexture()},this.copyTextureToTexture3D=function(b,H,q=null,Y=null,V=0){return b.isTexture!==!0&&(wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,b=arguments[2],H=arguments[3],V=arguments[4]||0),wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,H,q,Y,V)},this.initRenderTarget=function(b){we.get(b).__webglFramebuffer===void 0&&I.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?I.setTextureCube(b,0):b.isData3DTexture?I.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?I.setTexture2DArray(b,0):I.setTexture2D(b,0),Ae.unbindTexture()},this.resetState=function(){E=0,v=0,w=null,Ae.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class On{static idGen=0;constructor(e,t){let n,i;this.promise=new Promise((c,u)=>{n=c,i=u});const s=n.bind(this),o=i.bind(this),a=(...c)=>{s(...c)},l=c=>{o(c)};e(a.bind(this),l.bind(this)),this.abortHandler=t,this.id=On.idGen++}then(e){return new On((t,n)=>{this.promise=this.promise.then((...i)=>{const s=e(...i);s instanceof Promise||s instanceof On?s.then((...o)=>{t(...o)}):t(s)}).catch(i=>{n(i)})},this.abortHandler)}catch(e){return new On(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}}class $s extends Error{constructor(e){super(e)}}(function(){const r=new Float32Array(1),e=new Int32Array(r.buffer);return function(t){r[0]=t;const n=e[0];let i=n>>16&32768,s=n>>12&2047;const o=n>>23&255;return o<103?i:o>142?(i|=31744,i|=(o==255?0:1)&&n&8388607,i):o<113?(s|=2048,i|=(s>>114-o)+(s>>113-o&1),i):(i|=o-112<<10|s>>1,i+=s&1,i)}})();const Xr=(function(){const r=new Float32Array(1),e=new Int32Array(r.buffer);return function(t){return r[0]=t,e[0]}})(),Jm=function(r,e){return r[e]+(r[e+1]<<8)+(r[e+2]<<16)+(r[e+3]<<24)},ea=function(r,e,t=!0,n){const i=new AbortController,s=i.signal;let o=!1;const a=l=>{i.abort(l),o=!0};return new On((l,c)=>{const u={signal:s};n&&(u.headers=n),fetch(r,u).then(async d=>{if(!d.ok){const f=await d.text();c(new Error(`Fetch failed: ${d.status} ${d.statusText} ${f}`));return}const h=d.body.getReader();let p=0,g=d.headers.get("Content-Length"),A=g?parseInt(g):void 0;const m=[];for(;!o;)try{const{value:f,done:y}=await h.read();if(y){if(e&&e(100,"100%",f,A),t){const T=new Blob(m).arrayBuffer();l(T)}else l();break}p+=f.length;let S,x;A!==void 0&&(S=p/A*100,x=`${S.toFixed(2)}%`),t&&m.push(f),e&&e(S,x,f,A)}catch(f){c(f);return}}).catch(d=>{c(new $s(d))})},a)},bt=function(r,e,t){return Math.max(Math.min(r,t),e)},Ei=function(){return performance.now()/1e3},Ri=r=>{if(r.geometry&&(r.geometry.dispose(),r.geometry=null),r.material&&(r.material.dispose(),r.material=null),r.children)for(let e of r.children)Ri(e)},ln=(r,e)=>new Promise(t=>{window.setTimeout(()=>{t(r())},e?1:50)}),Li=(r=0)=>{switch(r){case 1:return 9;case 2:return 24}return 0},ta=()=>{let r,e;return{promise:new Promise((n,i)=>{r=n,e=i}),resolve:r,reject:e}},qr=r=>{let e,t;return r||(r=()=>{}),{promise:new On((i,s)=>{e=i,t=s},r),resolve:e,reject:t}};class $m{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function na(){const r=navigator.userAgent;return r.indexOf("iPhone")>0||r.indexOf("iPad")>0}function Tc(){if(na()){const r=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new $m(parseInt(r[1]||0,10),parseInt(r[2]||0,10),parseInt(r[3]||0,10))}else return null}const eg=14;class be{static OFFSET={X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37};constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=Li(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+eg,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=Li(e);for(let i=0;i<n;i++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=be.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,i,s,o,a,l,c,u,d,h,p,g,...A){const m=[e,t,n,i,s,o,a,l,c,u,d,h,p,g,...this.defaultSphericalHarmonics];for(let f=0;f<A.length&&f<this.sphericalHarmonicsCount;f++)m[f]=A[f];return this.addSplat(m),m}addSplatFromArray(e,t){const n=e.splats[t],i=be.createSplat(this.sphericalHarmonicsDegree);for(let s=0;s<this.componentCount&&s<n.length;s++)i[s]=n[s];this.addSplat(i)}}class ot{static DefaultSplatSortDistanceMapPrecision=16;static MemoryPageSize=65536;static BytesPerFloat=4;static BytesPerInt=4;static MaxScenes=32;static ProgressiveLoadSectionSize=262144;static ProgressiveLoadSectionDelayDuration=15;static SphericalHarmonics8BitCompressionRange=3}const tg=ot.SphericalHarmonics8BitCompressionRange,Bn=tg/2,xt=ds.toHalfFloat.bind(ds),ia=ds.fromHalfFloat.bind(ds),ut=(r,e,t=!1,n,i)=>{if(e===0)return r;if(e===1||e===2&&!t)return ds.fromHalfFloat(r);if(e===2)return sa(r,n,i)},is=(r,e,t)=>{r=bt(r,e,t);const n=t-e;return bt(Math.floor((r-e)/n*255),0,255)},sa=(r,e,t)=>{const n=t-e;return r/255*n+e},bc=(r,e,t)=>is(ia(r,e,t)),ng=(r,e,t)=>xt(sa(r,e,t)),nt=(r,e,t,n=!1)=>t===0?r.getFloat32(e*4,!0):t===1||t===2&&!n?r.getUint16(e*2,!0):r.getUint8(e,!0),ig=(function(){const r=e=>e;return function(e,t,n,i=!1){if(t===n)return e;let s=r;return t===2&&i?n===1?s=ng:n==0&&(s=sa):t===2||t===1?n===0?s=ia:n==2&&(i?s=bc:s=r):t===0&&(n===1?s=xt:n==2&&(i?s=is:s=xt)),s(e)}})(),Ci=(r,e,t,n,i=0)=>{const s=new Uint8Array(r,e),o=new Uint8Array(t,n);for(let a=0;a<i;a++)o[a]=s[a]};class W{static CurrentMajorVersion=0;static CurrentMinorVersion=1;static CenterComponentCount=3;static ScaleComponentCount=3;static RotationComponentCount=4;static ColorComponentCount=4;static CovarianceComponentCount=6;static SplatScaleOffsetFloat=3;static SplatRotationOffsetFloat=6;static CompressionLevels={0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}};static CovarianceSizeFloats=6;static HeaderSizeBytes=4096;static SectionHeaderSizeBytes=1024;static BucketStorageSizeBytes=12;static BucketStorageSizeFloats=3;static BucketBlockSize=5;static BucketSize=256;constructor(e,t=!0){this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const i=e.fullBucketCount*e.bucketSize;if(t<i)n=Math.floor(t/e.bucketSize);else{let s=i;n=e.fullBucketCount;let o=0;for(;s<e.splatCount;){let a=e.partiallyFilledBucketLengths[o];if(t>=s&&t<s+a)break;s+=a,n++,o++}}return n}getSplatCenter(e,t,n){const i=this.globalSplatIndexToSectionMap[e],s=this.sections[i],o=e-s.splatCountOffset,a=s.bytesPerSplat*o,l=new DataView(this.bufferData,s.dataBase+a),c=nt(l,0,this.compressionLevel),u=nt(l,1,this.compressionLevel),d=nt(l,2,this.compressionLevel);if(this.compressionLevel>=1){const p=this.getBucketIndex(s,o)*W.BucketStorageSizeFloats,g=s.compressionScaleFactor,A=s.compressionScaleRange;t.x=(c-A)*g+s.bucketArray[p],t.y=(u-A)*g+s.bucketArray[p+1],t.z=(d-A)*g+s.bucketArray[p+2]}else t.x=c,t.y=u,t.z=d;n&&t.applyMatrix4(n)}getSplatScaleAndRotation=(function(){const e=new Le,t=new Le,n=new Le,i=new D,s=new D,o=new ht;return function(a,l,c,u,d){const h=this.globalSplatIndexToSectionMap[a],p=this.sections[h],g=a-p.splatCountOffset,A=p.bytesPerSplat*g+W.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,p.dataBase+A);s.set(ut(nt(m,0,this.compressionLevel),this.compressionLevel),ut(nt(m,1,this.compressionLevel),this.compressionLevel),ut(nt(m,2,this.compressionLevel),this.compressionLevel)),d&&(d.x!==void 0&&(s.x=d.x),d.y!==void 0&&(s.y=d.y),d.z!==void 0&&(s.z=d.z)),o.set(ut(nt(m,4,this.compressionLevel),this.compressionLevel),ut(nt(m,5,this.compressionLevel),this.compressionLevel),ut(nt(m,6,this.compressionLevel),this.compressionLevel),ut(nt(m,3,this.compressionLevel),this.compressionLevel)),u?(e.makeScale(s.x,s.y,s.z),t.makeRotationFromQuaternion(o),n.copy(e).multiply(t).multiply(u),n.decompose(i,c,l)):(l.copy(s),c.copy(o))}})();getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],i=this.sections[n],s=e-i.splatCountOffset,o=i.bytesPerSplat*s+W.CompressionLevels[this.compressionLevel].ColorOffsetBytes,a=new Uint8Array(this.bufferData,i.dataBase+o,4);t.set(a[0],a[1],a[2],a[3])}fillSplatCenterArray(e,t,n,i,s){const o=this.splatCount;n=n||0,i=i||o-1,s===void 0&&(s=n);const a=new D;for(let l=n;l<=i;l++){const c=this.globalSplatIndexToSectionMap[l],u=this.sections[c],d=l-u.splatCountOffset,h=(l-n+s)*W.CenterComponentCount,p=u.bytesPerSplat*d,g=new DataView(this.bufferData,u.dataBase+p),A=nt(g,0,this.compressionLevel),m=nt(g,1,this.compressionLevel),f=nt(g,2,this.compressionLevel);if(this.compressionLevel>=1){const S=this.getBucketIndex(u,d)*W.BucketStorageSizeFloats,x=u.compressionScaleFactor,T=u.compressionScaleRange;a.x=(A-T)*x+u.bucketArray[S],a.y=(m-T)*x+u.bucketArray[S+1],a.z=(f-T)*x+u.bucketArray[S+2]}else a.x=A,a.y=m,a.z=f;t&&a.applyMatrix4(t),e[h]=a.x,e[h+1]=a.y,e[h+2]=a.z}}fillSplatScaleRotationArray=(function(){const e=new Le,t=new Le,n=new Le,i=new D,s=new ht,o=new D,a=l=>{const c=l.w<0?-1:1;l.x*=c,l.y*=c,l.z*=c,l.w*=c};return function(l,c,u,d,h,p,g,A){const m=this.splatCount;d=d||0,h=h||m-1,p===void 0&&(p=d);const f=(y,S)=>ig(y,S,g);for(let y=d;y<=h;y++){const S=this.globalSplatIndexToSectionMap[y],x=this.sections[S],T=y-x.splatCountOffset,E=x.bytesPerSplat*T+W.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,v=(y-d+p)*W.ScaleComponentCount,w=(y-d+p)*W.RotationComponentCount,M=new DataView(this.bufferData,x.dataBase+E),_=A&&A.x!==void 0?A.x:nt(M,0,this.compressionLevel),R=A&&A.y!==void 0?A.y:nt(M,1,this.compressionLevel),B=A&&A.z!==void 0?A.z:nt(M,2,this.compressionLevel),F=nt(M,3,this.compressionLevel),L=nt(M,4,this.compressionLevel),z=nt(M,5,this.compressionLevel),N=nt(M,6,this.compressionLevel);i.set(ut(_,this.compressionLevel),ut(R,this.compressionLevel),ut(B,this.compressionLevel)),s.set(ut(L,this.compressionLevel),ut(z,this.compressionLevel),ut(N,this.compressionLevel),ut(F,this.compressionLevel)).normalize(),u&&(o.set(0,0,0),e.makeScale(i.x,i.y,i.z),t.makeRotationFromQuaternion(s),n.identity().premultiply(e).premultiply(t),n.premultiply(u),n.decompose(o,s,i),s.normalize()),a(s),l&&(l[v]=f(i.x,0),l[v+1]=f(i.y,0),l[v+2]=f(i.z,0)),c&&(c[w]=f(s.x,0),c[w+1]=f(s.y,0),c[w+2]=f(s.z,0),c[w+3]=f(s.w,0))}}})();static computeCovariance=(function(){const e=new Le,t=new Fe,n=new Fe,i=new Fe,s=new Fe,o=new Fe,a=new Fe;return function(l,c,u,d,h=0,p){e.makeScale(l.x,l.y,l.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(c),n.setFromMatrix4(e),i.copy(n).multiply(t),s.copy(i).transpose().premultiply(i),u&&(o.setFromMatrix4(u),a.copy(o).transpose(),s.multiply(a),s.premultiply(o)),p>=1?(d[h]=xt(s.elements[0]),d[h+1]=xt(s.elements[3]),d[h+2]=xt(s.elements[6]),d[h+3]=xt(s.elements[4]),d[h+4]=xt(s.elements[7]),d[h+5]=xt(s.elements[8])):(d[h]=s.elements[0],d[h+1]=s.elements[3],d[h+2]=s.elements[6],d[h+3]=s.elements[4],d[h+4]=s.elements[7],d[h+5]=s.elements[8])}})();fillSplatCovarianceArray(e,t,n,i,s,o){const a=this.splatCount,l=new D,c=new ht;n=n||0,i=i||a-1,s===void 0&&(s=n);for(let u=n;u<=i;u++){const d=this.globalSplatIndexToSectionMap[u],h=this.sections[d],p=u-h.splatCountOffset,g=(u-n+s)*W.CovarianceComponentCount,A=h.bytesPerSplat*p+W.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,h.dataBase+A);l.set(ut(nt(m,0,this.compressionLevel),this.compressionLevel),ut(nt(m,1,this.compressionLevel),this.compressionLevel),ut(nt(m,2,this.compressionLevel),this.compressionLevel)),c.set(ut(nt(m,4,this.compressionLevel),this.compressionLevel),ut(nt(m,5,this.compressionLevel),this.compressionLevel),ut(nt(m,6,this.compressionLevel),this.compressionLevel),ut(nt(m,3,this.compressionLevel),this.compressionLevel)),W.computeCovariance(l,c,t,e,g,o)}}fillSplatColorArray(e,t,n,i,s){const o=this.splatCount;n=n||0,i=i||o-1,s===void 0&&(s=n);for(let a=n;a<=i;a++){const l=this.globalSplatIndexToSectionMap[a],c=this.sections[l],u=a-c.splatCountOffset,d=(a-n+s)*W.ColorComponentCount,h=c.bytesPerSplat*u+W.CompressionLevels[this.compressionLevel].ColorOffsetBytes,p=new Uint8Array(this.bufferData,c.dataBase+h);let g=p[3];g=g>=t?g:0,e[d]=p[0],e[d+1]=p[1],e[d+2]=p[2],e[d+3]=g}}fillSphericalHarmonicsArray=(function(){for(let L=0;L<15;L++)new D;const e=new Fe,t=new Le,n=new D,i=new D,s=new ht,o=[],a=[],l=[],c=[],u=[],d=[],h=[],p=[],g=[],A=[],m=[],f=[],y=[],S=[],x=[],T=[],E=[],v=[],w=L=>L,M=(L,z,N,X)=>{L[0]=z,L[1]=N,L[2]=X},_=(L,z,N,X,k)=>{L[0]=nt(z,X,k,!0),L[1]=nt(z,X+N,k,!0),L[2]=nt(z,X+N+N,k,!0)},R=(L,z)=>{z[0]=L[0],z[1]=L[1],z[2]=L[2]},B=(L,z,N,X)=>{z[N]=X(L[0]),z[N+1]=X(L[1]),z[N+2]=X(L[2])},F=(L,z,N,X,k)=>(z[0]=ut(L[0],N,!0,X,k),z[1]=ut(L[1],N,!0,X,k),z[2]=ut(L[2],N,!0,X,k),z);return function(L,z,N,X,k,$,ne){const ue=this.splatCount;X=X||0,k=k||ue-1,$===void 0&&($=X),N&&z>=1&&(t.copy(N),t.decompose(n,s,i),s.normalize(),t.makeRotationFromQuaternion(s),e.setFromMatrix4(t),M(o,e.elements[4],-e.elements[7],e.elements[1]),M(a,-e.elements[5],e.elements[8],-e.elements[2]),M(l,e.elements[3],-e.elements[6],e.elements[0]));const ve=Q=>bc(Q,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),ye=Q=>is(Q,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let Q=X;Q<=k;Q++){const J=this.globalSplatIndexToSectionMap[Q],ae=this.sections[J];z=Math.min(z,ae.sphericalHarmonicsDegree);const se=Li(z),ge=Q-ae.splatCountOffset,Me=ae.bytesPerSplat*ge+W.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,Ee=new DataView(this.bufferData,ae.dataBase+Me),Ge=(Q-X+$)*se;let Oe=N?0:this.compressionLevel,Be=w;Oe!==ne&&(Oe===1?ne===0?Be=ia:ne==2&&(Be=ve):Oe===0&&(ne===1?Be=xt:ne==2&&(Be=ye)));const U=this.minSphericalHarmonicsCoeff,We=this.maxSphericalHarmonicsCoeff;z>=1&&(_(g,Ee,3,0,this.compressionLevel),_(A,Ee,3,1,this.compressionLevel),_(m,Ee,3,2,this.compressionLevel),N?(F(g,g,this.compressionLevel,U,We),F(A,A,this.compressionLevel,U,We),F(m,m,this.compressionLevel,U,We),W.rotateSphericalHarmonics3(g,A,m,o,a,l,S,x,T)):(R(g,S),R(A,x),R(m,T)),B(S,L,Ge,Be),B(x,L,Ge+3,Be),B(T,L,Ge+6,Be),z>=2&&(_(g,Ee,5,9,this.compressionLevel),_(A,Ee,5,10,this.compressionLevel),_(m,Ee,5,11,this.compressionLevel),_(f,Ee,5,12,this.compressionLevel),_(y,Ee,5,13,this.compressionLevel),N?(F(g,g,this.compressionLevel,U,We),F(A,A,this.compressionLevel,U,We),F(m,m,this.compressionLevel,U,We),F(f,f,this.compressionLevel,U,We),F(y,y,this.compressionLevel,U,We),W.rotateSphericalHarmonics5(g,A,m,f,y,o,a,l,c,u,d,h,p,S,x,T,E,v)):(R(g,S),R(A,x),R(m,T),R(f,E),R(y,v)),B(S,L,Ge+9,Be),B(x,L,Ge+12,Be),B(T,L,Ge+15,Be),B(E,L,Ge+18,Be),B(v,L,Ge+21,Be)))}}})();static dot3=(e,t,n,i,s)=>{s[0]=s[1]=s[2]=0;const o=i[0],a=i[1],l=i[2];W.addInto3(e[0]*o,e[1]*o,e[2]*o,s),W.addInto3(t[0]*a,t[1]*a,t[2]*a,s),W.addInto3(n[0]*l,n[1]*l,n[2]*l,s)};static addInto3=(e,t,n,i)=>{i[0]=i[0]+e,i[1]=i[1]+t,i[2]=i[2]+n};static dot5=(e,t,n,i,s,o,a)=>{a[0]=a[1]=a[2]=0;const l=o[0],c=o[1],u=o[2],d=o[3],h=o[4];W.addInto3(e[0]*l,e[1]*l,e[2]*l,a),W.addInto3(t[0]*c,t[1]*c,t[2]*c,a),W.addInto3(n[0]*u,n[1]*u,n[2]*u,a),W.addInto3(i[0]*d,i[1]*d,i[2]*d,a),W.addInto3(s[0]*h,s[1]*h,s[2]*h,a)};static rotateSphericalHarmonics3=(e,t,n,i,s,o,a,l,c)=>{W.dot3(e,t,n,i,a),W.dot3(e,t,n,s,l),W.dot3(e,t,n,o,c)};static rotateSphericalHarmonics5=(e,t,n,i,s,o,a,l,c,u,d,h,p,g,A,m,f,y)=>{const S=Math.sqrt(.25),x=Math.sqrt(3/4),T=Math.sqrt(1/3),E=Math.sqrt(4/3),v=Math.sqrt(1/12);c[0]=S*(l[2]*o[0]+l[0]*o[2]+(o[2]*l[0]+o[0]*l[2])),c[1]=l[1]*o[0]+o[1]*l[0],c[2]=x*(l[1]*o[1]+o[1]*l[1]),c[3]=l[1]*o[2]+o[1]*l[2],c[4]=S*(l[2]*o[2]-l[0]*o[0]+(o[2]*l[2]-o[0]*l[0])),W.dot5(e,t,n,i,s,c,g),u[0]=S*(a[2]*o[0]+a[0]*o[2]+(o[2]*a[0]+o[0]*a[2])),u[1]=a[1]*o[0]+o[1]*a[0],u[2]=x*(a[1]*o[1]+o[1]*a[1]),u[3]=a[1]*o[2]+o[1]*a[2],u[4]=S*(a[2]*o[2]-a[0]*o[0]+(o[2]*a[2]-o[0]*a[0])),W.dot5(e,t,n,i,s,u,A),d[0]=T*(a[2]*a[0]+a[0]*a[2])+-v*(l[2]*l[0]+l[0]*l[2]+(o[2]*o[0]+o[0]*o[2])),d[1]=E*a[1]*a[0]+-T*(l[1]*l[0]+o[1]*o[0]),d[2]=a[1]*a[1]+-S*(l[1]*l[1]+o[1]*o[1]),d[3]=E*a[1]*a[2]+-T*(l[1]*l[2]+o[1]*o[2]),d[4]=T*(a[2]*a[2]-a[0]*a[0])+-v*(l[2]*l[2]-l[0]*l[0]+(o[2]*o[2]-o[0]*o[0])),W.dot5(e,t,n,i,s,d,m),h[0]=S*(a[2]*l[0]+a[0]*l[2]+(l[2]*a[0]+l[0]*a[2])),h[1]=a[1]*l[0]+l[1]*a[0],h[2]=x*(a[1]*l[1]+l[1]*a[1]),h[3]=a[1]*l[2]+l[1]*a[2],h[4]=S*(a[2]*l[2]-a[0]*l[0]+(l[2]*a[2]-l[0]*a[0])),W.dot5(e,t,n,i,s,h,f),p[0]=S*(l[2]*l[0]+l[0]*l[2]-(o[2]*o[0]+o[0]*o[2])),p[1]=l[1]*l[0]-o[1]*o[0],p[2]=x*(l[1]*l[1]-o[1]*o[1]),p[3]=l[1]*l[2]-o[1]*o[2],p[4]=S*(l[2]*l[2]-l[0]*l[0]-(o[2]*o[2]-o[0]*o[0])),W.dot5(e,t,n,i,s,p,y)};static parseHeader(e){const t=new Uint8Array(e,0,W.HeaderSizeBytes),n=new Uint16Array(e,0,W.HeaderSizeBytes/2),i=new Uint32Array(e,0,W.HeaderSizeBytes/4),s=new Float32Array(e,0,W.HeaderSizeBytes/4),o=t[0],a=t[1],l=i[1],c=i[2],u=i[3],d=i[4],h=n[10],p=new D(s[6],s[7],s[8]),g=s[9]||-Bn,A=s[10]||Bn;return{versionMajor:o,versionMinor:a,maxSectionCount:l,sectionCount:c,maxSplatCount:u,splatCount:d,compressionLevel:h,sceneCenter:p,minSphericalHarmonicsCoeff:g,maxSphericalHarmonicsCoeff:A}}static writeHeaderCountsToBuffer(e,t,n){const i=new Uint32Array(n,0,W.HeaderSizeBytes/4);i[2]=e,i[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,W.HeaderSizeBytes),i=new Uint16Array(t,0,W.HeaderSizeBytes/2),s=new Uint32Array(t,0,W.HeaderSizeBytes/4),o=new Float32Array(t,0,W.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,s[1]=e.maxSectionCount,s[2]=e.sectionCount,s[3]=e.maxSplatCount,s[4]=e.splatCount,i[10]=e.compressionLevel,o[6]=e.sceneCenter.x,o[7]=e.sceneCenter.y,o[8]=e.sceneCenter.z,o[9]=e.minSphericalHarmonicsCoeff||-Bn,o[10]=e.maxSphericalHarmonicsCoeff||Bn}static parseSectionHeaders(e,t,n=0,i){const s=e.compressionLevel,o=e.maxSectionCount,a=new Uint16Array(t,n,o*W.SectionHeaderSizeBytes/2),l=new Uint32Array(t,n,o*W.SectionHeaderSizeBytes/4),c=new Float32Array(t,n,o*W.SectionHeaderSizeBytes/4),u=[];let d=0,h=d/2,p=d/4,g=W.HeaderSizeBytes+e.maxSectionCount*W.SectionHeaderSizeBytes,A=0;for(let m=0;m<o;m++){const f=l[p+1],y=l[p+2],S=l[p+3],x=c[p+4],T=x/2,E=a[h+10],v=l[p+6]||W.CompressionLevels[s].ScaleRange,w=l[p+8],M=l[p+9],_=M*4,R=E*S+_,B=a[h+20],{bytesPerSplat:F}=W.calculateComponentStorage(s,B),L=F*f,z=L+R,N={bytesPerSplat:F,splatCountOffset:A,splatCount:i?f:0,maxSplatCount:f,bucketSize:y,bucketCount:S,bucketBlockSize:x,halfBucketBlockSize:T,bucketStorageSizeBytes:E,bucketsStorageSizeBytes:R,splatDataStorageSizeBytes:L,storageSizeBytes:z,compressionScaleRange:v,compressionScaleFactor:T/v,base:g,bucketsBase:g+_,dataBase:g+R,fullBucketCount:w,partiallyFilledBucketCount:M,sphericalHarmonicsDegree:B};u[m]=N,g+=z,d+=W.SectionHeaderSizeBytes,h=d/2,p=d/4,A+=f}return u}static writeSectionHeaderToBuffer(e,t,n,i=0){const s=new Uint16Array(n,i,W.SectionHeaderSizeBytes/2),o=new Uint32Array(n,i,W.SectionHeaderSizeBytes/4),a=new Float32Array(n,i,W.SectionHeaderSizeBytes/4);o[0]=e.splatCount,o[1]=e.maxSplatCount,o[2]=t>=1?e.bucketSize:0,o[3]=t>=1?e.bucketCount:0,a[4]=t>=1?e.bucketBlockSize:0,s[10]=t>=1?W.BucketStorageSizeBytes:0,o[6]=t>=1?e.compressionScaleRange:0,o[7]=e.storageSizeBytes,o[8]=t>=1?e.fullBucketCount:0,o[9]=t>=1?e.partiallyFilledBucketCount:0,s[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){const i=new Uint32Array(t,n,W.SectionHeaderSizeBytes/4);i[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=W.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new D().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=W.parseSectionHeaders(n,this.bufferData,W.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=W.CompressionLevels[e].BytesPerCenter,i=W.CompressionLevels[e].BytesPerScale,s=W.CompressionLevels[e].BytesPerRotation,o=W.CompressionLevels[e].BytesPerColor,a=Li(t),l=W.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*a,c=n+i+s+o+l;return{bytesPerCenter:n,bytesPerScale:i,bytesPerRotation:s,bytesPerColor:o,sphericalHarmonicsComponentsPerSplat:a,sphericalHarmonicsBytesPerSplat:l,bytesPerSplat:c}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*W.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let i=0;i<n.maxSplatCount;i++){const s=e+i;this.globalSplatIndexToLocalSplatIndexMap[s]=i,this.globalSplatIndexToSectionMap[s]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){W.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=W.HeaderSizeBytes+W.SectionHeaderSizeBytes*e;W.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static writeSplatDataToSectionBuffer=(function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),i=new ArrayBuffer(4),s=new ArrayBuffer(256),o=new ht,a=new D,l=new D,{X:c,Y:u,Z:d,SCALE0:h,SCALE1:p,SCALE2:g,ROTATION0:A,ROTATION1:m,ROTATION2:f,ROTATION3:y,FDC0:S,FDC1:x,FDC2:T,OPACITY:E,FRC0:v,FRC9:w}=be.OFFSET,M=(_,R,B)=>{const F=B*2+1;return _=Math.round(_*R)+B,bt(_,0,F)};return function(_,R,B,F,L,z,N,X,k=-Bn,$=Bn){const ne=Li(L),ue=W.CompressionLevels[F].BytesPerCenter,ve=W.CompressionLevels[F].BytesPerScale,ye=W.CompressionLevels[F].BytesPerRotation,Q=W.CompressionLevels[F].BytesPerColor,J=B,ae=J+ue,se=ae+ve,ge=se+ye,Me=ge+Q;if(_[A]!==void 0?(o.set(_[A],_[m],_[f],_[y]),o.normalize()):o.set(1,0,0,0),_[h]!==void 0?a.set(_[h]||0,_[p]||0,_[g]||0):a.set(0,0,0),F===0){const Ge=new Float32Array(R,J,W.CenterComponentCount),Oe=new Float32Array(R,se,W.RotationComponentCount),Be=new Float32Array(R,ae,W.ScaleComponentCount);if(Oe.set([o.x,o.y,o.z,o.w]),Be.set([a.x,a.y,a.z]),Ge.set([_[c],_[u],_[d]]),L>0){const U=new Float32Array(R,Me,ne);if(L>=1){for(let We=0;We<9;We++)U[We]=_[v+We]||0;if(L>=2)for(let We=0;We<15;We++)U[We+9]=_[w+We]||0}}}else{const Ge=new Uint16Array(e,0,W.CenterComponentCount),Oe=new Uint16Array(n,0,W.RotationComponentCount),Be=new Uint16Array(t,0,W.ScaleComponentCount);if(Oe.set([xt(o.x),xt(o.y),xt(o.z),xt(o.w)]),Be.set([xt(a.x),xt(a.y),xt(a.z)]),l.set(_[c],_[u],_[d]).sub(z),l.x=M(l.x,N,X),l.y=M(l.y,N,X),l.z=M(l.z,N,X),Ge.set([l.x,l.y,l.z]),L>0){const U=F===1?Uint16Array:Uint8Array,We=F===1?2:1,He=new U(s,0,ne);if(L>=1){for(let Ae=0;Ae<9;Ae++){const qe=_[v+Ae]||0;He[Ae]=F===1?xt(qe):is(qe,k,$)}const Ve=9*We;if(Ci(He.buffer,0,R,Me,Ve),L>=2){for(let Ae=0;Ae<15;Ae++){const qe=_[w+Ae]||0;He[Ae+9]=F===1?xt(qe):is(qe,k,$)}Ci(He.buffer,Ve,R,Me+Ve,15*We)}}}Ci(Ge.buffer,0,R,J,6),Ci(Be.buffer,0,R,ae,6),Ci(Oe.buffer,0,R,se,8)}const Ee=new Uint8ClampedArray(i,0,4);Ee.set([_[S]||0,_[x]||0,_[T]||0]),Ee[3]=_[E]||0,Ci(Ee.buffer,0,R,ge,4)}})();static generateFromUncompressedSplatArrays(e,t,n,i,s,o,a=[]){let l=0;for(let T=0;T<e.length;T++){const E=e[T];l=Math.max(E.sphericalHarmonicsDegree,l)}let c,u;for(let T=0;T<e.length;T++){const E=e[T];for(let v=0;v<E.splats.length;v++){const w=E.splats[v];for(let M=be.OFFSET.FRC0;M<be.OFFSET.FRC23&&M<w.length;M++)(!c||w[M]<c)&&(c=w[M]),(!u||w[M]>u)&&(u=w[M])}}c=c||-Bn,u=u||Bn;const{bytesPerSplat:d}=W.calculateComponentStorage(n,l),h=W.CompressionLevels[n].ScaleRange,p=[],g=[];let A=0;for(let T=0;T<e.length;T++){const E=e[T],v=new be(l);for(let J=0;J<E.splatCount;J++){const ae=E.splats[J];(ae[be.OFFSET.OPACITY]||0)>=t&&v.addSplat(ae)}const w=a[T]||{},M=(w.blockSizeFactor||1)*(s||W.BucketBlockSize),_=Math.ceil((w.bucketSizeFactor||1)*(o||W.BucketSize)),R=W.computeBucketsForUncompressedSplatArray(v,M,_),B=R.fullBuckets.length,F=R.partiallyFullBuckets.map(J=>J.splats.length),L=F.length,z=[...R.fullBuckets,...R.partiallyFullBuckets],N=v.splats.length*d,X=L*4,k=n>=1?z.length*W.BucketStorageSizeBytes+X:0,$=N+k,ne=new ArrayBuffer($),ue=h/(M*.5),ve=new D;let ye=0;for(let J=0;J<z.length;J++){const ae=z[J];ve.fromArray(ae.center);for(let se=0;se<ae.splats.length;se++){let ge=ae.splats[se];const Me=v.splats[ge],Ee=k+ye*d;W.writeSplatDataToSectionBuffer(Me,ne,Ee,n,l,ve,ue,h,c,u),ye++}}if(A+=ye,n>=1){const J=new Uint32Array(ne,0,F.length*4);for(let se=0;se<F.length;se++)J[se]=F[se];const ae=new Float32Array(ne,X,z.length*W.BucketStorageSizeFloats);for(let se=0;se<z.length;se++){const ge=z[se],Me=se*3;ae[Me]=ge.center[0],ae[Me+1]=ge.center[1],ae[Me+2]=ge.center[2]}}p.push(ne);const Q=new ArrayBuffer(W.SectionHeaderSizeBytes);W.writeSectionHeaderToBuffer({maxSplatCount:ye,splatCount:ye,bucketSize:_,bucketCount:z.length,bucketBlockSize:M,compressionScaleRange:h,storageSizeBytes:$,fullBucketCount:B,partiallyFilledBucketCount:L,sphericalHarmonicsDegree:l},n,Q,0),g.push(Q)}let m=0;for(let T of p)m+=T.byteLength;const f=W.HeaderSizeBytes+W.SectionHeaderSizeBytes*p.length+m,y=new ArrayBuffer(f);W.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:p.length,sectionCount:p.length,maxSplatCount:A,splatCount:A,compressionLevel:n,sceneCenter:i,minSphericalHarmonicsCoeff:c,maxSphericalHarmonicsCoeff:u},y);let S=W.HeaderSizeBytes;for(let T of g)new Uint8Array(y,S,W.SectionHeaderSizeBytes).set(new Uint8Array(T)),S+=W.SectionHeaderSizeBytes;for(let T of p)new Uint8Array(y,S,T.byteLength).set(new Uint8Array(T)),S+=T.byteLength;return new W(y)}static computeBucketsForUncompressedSplatArray(e,t,n){let i=e.splatCount;const s=t/2,o=new D,a=new D;for(let A=0;A<i;A++){const m=e.splats[A],f=[m[be.OFFSET.X],m[be.OFFSET.Y],m[be.OFFSET.Z]];(A===0||f[0]<o.x)&&(o.x=f[0]),(A===0||f[0]>a.x)&&(a.x=f[0]),(A===0||f[1]<o.y)&&(o.y=f[1]),(A===0||f[1]>a.y)&&(a.y=f[1]),(A===0||f[2]<o.z)&&(o.z=f[2]),(A===0||f[2]>a.z)&&(a.z=f[2])}const l=new D().copy(a).sub(o),c=Math.ceil(l.y/t),u=Math.ceil(l.z/t),d=new D,h=[],p={};for(let A=0;A<i;A++){const m=e.splats[A],f=[m[be.OFFSET.X],m[be.OFFSET.Y],m[be.OFFSET.Z]],y=Math.floor((f[0]-o.x)/t),S=Math.floor((f[1]-o.y)/t),x=Math.floor((f[2]-o.z)/t);d.x=y*t+o.x+s,d.y=S*t+o.y+s,d.z=x*t+o.z+s;const T=y*(c*u)+S*u+x;let E=p[T];E||(p[T]=E={splats:[],center:d.toArray()}),E.splats.push(A),E.splats.length>=n&&(h.push(E),p[T]=null)}const g=[];for(let A in p)if(p.hasOwnProperty(A)){const m=p[A];m&&g.push(m)}return{fullBuckets:h,partiallyFullBuckets:g}}}const yl=new Uint8Array([112,108,121,10]),Ml=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),Qr="end_header",Yr=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),hn=(r,e)=>{const t=(1<<e)-1;return(r&t)/t},El=(r,e)=>{r.x=hn(e>>>21,11),r.y=hn(e>>>11,10),r.z=hn(e,11)},sg=(r,e)=>{r.x=hn(e>>>24,8),r.y=hn(e>>>16,8),r.z=hn(e>>>8,8),r.w=hn(e,8)},rg=(r,e)=>{const t=1/(Math.sqrt(2)*.5),n=(hn(e>>>20,10)-.5)*t,i=(hn(e>>>10,10)-.5)*t,s=(hn(e,10)-.5)*t,o=Math.sqrt(1-(n*n+i*i+s*s));switch(e>>>30){case 0:r.set(o,n,i,s);break;case 1:r.set(n,o,i,s);break;case 2:r.set(n,i,o,s);break;case 3:r.set(n,i,s,o);break}},Ti=(r,e,t)=>r*(1-t)+e*t,Dt=(r,e)=>r.properties.find(t=>t.name===e&&t.storage)?.storage;class _t{static decodeHeaderText(e){let t,n,i;const s=e.split(`
`).filter(l=>!l.startsWith("comment "));let o=0,a=!1;for(let l=1;l<s.length;++l){const c=s[l].split(" ");switch(c[0]){case"format":if(c[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:c[1],count:parseInt(c[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"&&(i=t);break;case"property":{if(!Yr.has(c[1]))throw new Error(`Unrecognized property data type '${c[1]}' in ply header`);const u=Yr.get(c[1]),d=u.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(o+=u.BYTES_PER_ELEMENT),t.properties.push({type:c[1],name:c[2],storage:null,byteSize:u.BYTES_PER_ELEMENT,storageSizeByes:d}),t.storageSizeBytes+=d;break}case Qr:a=!0;break;default:throw new Error(`Unrecognized header value '${c[0]}' in ply header`)}if(a)break}return{chunkElement:n,vertexElement:i,bytesPerSplat:o,headerSizeBytes:e.indexOf(Qr)+Qr.length+1,sphericalHarmonicsDegree:0}}static decodeHeader(e){const t=(u,d)=>{const h=u.length-d.length;let p,g;for(p=0;p<=h;++p){for(g=0;g<d.length&&u[p+g]===d[g];++g);if(g===d.length)return p}return-1},n=(u,d)=>{if(u.length<d.length)return!1;for(let h=0;h<d.length;++h)if(u[h]!==d[h])return!1;return!0};let i=new Uint8Array(e),s;if(i.length>=yl.length&&!n(i,yl))throw new Error("Invalid PLY header");if(s=t(i,Ml),s===-1)throw new Error("End of PLY header not found");const o=new TextDecoder("ascii").decode(i.slice(0,s)),{chunkElement:a,vertexElement:l,bytesPerSplat:c}=_t.decodeHeaderText(o);return{headerSizeBytes:s+Ml.length,bytesPerSplat:c,chunkElement:a,vertexElement:l}}static readElementData(e,t,n,i,s,o=null){let a=t instanceof DataView?t:new DataView(t);i=i||0,s=s||e.count-1;for(let l=i;l<=s;++l)for(let c=0;c<e.properties.length;++c){const u=e.properties[c],d=Yr.get(u.type),h=d.BYTES_PER_ELEMENT*e.count;if((!u.storage||u.storage.byteLength<h)&&(!o||o(u.name))&&(u.storage=new d(e.count)),u.storage)switch(u.type){case"char":u.storage[l]=a.getInt8(n);break;case"uchar":u.storage[l]=a.getUint8(n);break;case"short":u.storage[l]=a.getInt16(n,!0);break;case"ushort":u.storage[l]=a.getUint16(n,!0);break;case"int":u.storage[l]=a.getInt32(n,!0);break;case"uint":u.storage[l]=a.getUint32(n,!0);break;case"float":u.storage[l]=a.getFloat32(n,!0);break;case"double":u.storage[l]=a.getFloat64(n,!0);break}n+=u.byteSize}return n}static readPly(e,t=null){const n=_t.decodeHeader(e);let i=_t.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return _t.readElementData(n.vertexElement,e,i,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement}}static getElementStorageArrays(e,t){const n=Dt(e,"min_x"),i=Dt(e,"min_y"),s=Dt(e,"min_z"),o=Dt(e,"max_x"),a=Dt(e,"max_y"),l=Dt(e,"max_z"),c=Dt(e,"min_scale_x"),u=Dt(e,"min_scale_y"),d=Dt(e,"min_scale_z"),h=Dt(e,"max_scale_x"),p=Dt(e,"max_scale_y"),g=Dt(e,"max_scale_z"),A=Dt(t,"packed_position"),m=Dt(t,"packed_rotation"),f=Dt(t,"packed_scale"),y=Dt(t,"packed_color");return{positionExtremes:{minX:n,maxX:o,minY:i,maxY:a,minZ:s,maxZ:l},scaleExtremes:{minScaleX:c,maxScaleX:h,minScaleY:u,maxScaleY:p,minScaleZ:d,maxScaleZ:g},position:A,rotation:m,scale:f,color:y}}static decompressSplat=(function(){const e=new D,t=new ht,n=new D,i=new dt,s=be.OFFSET;return function(o,a,l,c,u,d,h,p,g){g=g||be.createSplat();const A=Math.floor((a+o)/256);return El(e,l[o]),rg(t,h[o]),El(n,u[o]),sg(i,p[o]),g[s.X]=Ti(c.minX[A],c.maxX[A],e.x),g[s.Y]=Ti(c.minY[A],c.maxY[A],e.y),g[s.Z]=Ti(c.minZ[A],c.maxZ[A],e.z),g[s.ROTATION0]=t.x,g[s.ROTATION1]=t.y,g[s.ROTATION2]=t.z,g[s.ROTATION3]=t.w,g[s.SCALE0]=Math.exp(Ti(d.minScaleX[A],d.maxScaleX[A],n.x)),g[s.SCALE1]=Math.exp(Ti(d.minScaleY[A],d.maxScaleY[A],n.y)),g[s.SCALE2]=Math.exp(Ti(d.minScaleZ[A],d.maxScaleZ[A],n.z)),g[s.FDC0]=bt(Math.floor(i.x*255),0,255),g[s.FDC1]=bt(Math.floor(i.y*255),0,255),g[s.FDC2]=bt(Math.floor(i.z*255),0,255),g[s.OPACITY]=bt(Math.floor(i.w*255),0,255),g}})();static parseToUncompressedSplatBufferSection(e,t,n,i,s,o,a,l,c,u=null){_t.readElementData(t,o,a,n,i,u);const d=W.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:h,scaleExtremes:p,position:g,rotation:A,scale:m,color:f}=_t.getElementStorageArrays(e,t),y=be.createSplat();for(let S=n;S<=i;++S){_t.decompressSplat(S,s,g,h,m,p,A,f,y);const x=S*d+c;W.writeSplatDataToSectionBuffer(y,l,x,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,i,s,o,a,l,c=null){_t.readElementData(t,o,a,n,i,c);const{positionExtremes:u,scaleExtremes:d,position:h,rotation:p,scale:g,color:A}=_t.getElementStorageArrays(e,t);for(let m=n;m<=i;++m){const f=be.createSplat();_t.decompressSplat(m,s,h,u,g,d,p,A,f),l.addSplat(f)}}static parseToUncompressedSplatArray(e){const{chunkElement:t,vertexElement:n}=_t.readPly(e),i=new be,{positionExtremes:s,scaleExtremes:o,position:a,rotation:l,scale:c,color:u}=_t.getElementStorageArrays(t,n);for(let h=0;h<n.count;++h){i.addDefaultSplat();const p=i.getSplat(i.splatCount-1);_t.decompressSplat(h,0,a,s,c,o,l,u,p)}return new Le().identity(),i}}const Vn={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[wc,ra,oa,aa,la,ca,ua]=[0,1,2,3,4,5,6],Cl={double:wc,int:ra,uint:oa,float:aa,short:la,ushort:ca,uchar:ua},og={[wc]:8,[ra]:4,[oa]:4,[aa]:4,[la]:2,[ca]:2,[ua]:1};class lt{static HeaderEndToken="end_header";constructor(){}decodeSectionHeader(e,t,n=0){const i=[];let s=!1,o=-1,a=0,l=!1,c=null;const u=[],d=[],h=[],p={};for(let f=n;f<e.length;f++){const y=e[f].trim();if(y.startsWith("element"))if(s){o--;break}else{s=!0,n=f,o=f;const S=y.split(" ");let x=0;for(let T of S){const E=T.trim();E.length>0&&(x++,x===2?c=E:x===3&&(a=parseInt(E)))}}else if(y.startsWith("property")){const S=y.match(/(\w+)\s+(\w+)\s+(\w+)/);if(S){const x=S[2],T=S[3];h.push(T);const E=t[T];p[T]=x;const v=Cl[x];E!==void 0&&(u.push(E),d[E]=v)}}if(y===lt.HeaderEndToken){l=!0;break}s&&(i.push(y),o++)}const g=[];let A=0;for(let f of h){const y=p[f];if(p.hasOwnProperty(f)){const S=t[f];S!==void 0&&(g[S]=A)}A+=og[Cl[y]]}const m=this.decodeSphericalHarmonicsFromSectionHeader(h,t);return{headerLines:i,headerStartLine:n,headerEndLine:o,fieldTypes:d,fieldIds:u,fieldOffsets:g,bytesPerVertex:A,vertexCount:a,dataSizeBytes:A*a,endOfHeader:l,sectionName:c,sphericalHarmonicsDegree:m.degree,sphericalHarmonicsCoefficientsPerChannel:m.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:m.degree1Fields,sphericalHarmonicsDegree2Fields:m.degree2Fields}}decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,i=0;for(let l of e)l.startsWith("f_rest")&&n++;i=n/3;let s=0;i>=3&&(s=1),i>=8&&(s=2);let o=[],a=[];for(let l=0;l<3;l++){if(s>=1)for(let c=0;c<3;c++)o.push(t["f_rest_"+(c+i*l)]);if(s>=2)for(let c=0;c<5;c++)a.push(t["f_rest_"+(c+i*l+3)])}return{degree:s,coefficientsPerChannel:i,degree1Fields:o,degree2Fields:a}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const i=n.split(" ");let s=0;for(let o of i){const a=o.trim();a.length>0&&(s++,s===2&&t.push(a))}}return t}static checkTextForEndHeader(e){return!!e.includes(lt.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,i){const s=new Uint8Array(e,Math.max(0,t-n),n),o=i.decode(s);return lt.checkTextForEndHeader(o)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,i="";const s=100;for(;;){if(n+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,s);if(i+=t.decode(o),n+=s,lt.checkBufferForEndHeader(e,n,s*2,t))break}return i}readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,i="";const s=100;for(;;){if(n+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const o=new Uint8Array(e,n,s);if(i+=t.decode(o),n+=s,lt.checkBufferForEndHeader(e,n,s*2,t))break}return i}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let i=0;i<t.length;i++){const s=t[i].trim();if(n.push(s),s===lt.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=lt.convertHeaderTextToLines(e);let n=Vn.INRIAV1;for(let i=0;i<t.length;i++){const s=t[i].trim();if(s.startsWith("element chunk")||s.match(/[A-Za-z]*packed_[A-Za-z]*/))n=Vn.PlayCanvasCompressed;else if(s.startsWith("element codebook_centers"))n=Vn.INRIAV2;else if(s===lt.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=lt.extractHeaderFromBufferToText(e);return lt.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,i,s,o,a=!0){const l=n*t.bytesPerVertex+i,c=t.fieldOffsets,u=t.fieldTypes;for(let d of s){const h=u[d];h===aa?o[d]=e.getFloat32(l+c[d],!0):h===la?o[d]=e.getInt16(l+c[d],!0):h===ca?o[d]=e.getUint16(l+c[d],!0):h===ra?o[d]=e.getInt32(l+c[d],!0):h===oa?o[d]=e.getUint32(l+c[d],!0):h===ua&&(a?o[d]=e.getUint8(l+c[d])/255:o[d]=e.getUint8(l+c[d]))}}}const Rc=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],ag=Rc.map((r,e)=>e),[Tl,lg,cg,ug,dg,hg,fg,pg,mg,gg,bl,Ag,xg,wl,Rl,_g,Sg,vg]=ag;class ii{constructor(){this.plyParserutils=new lt}decodeHeaderLines(e){let t=0;e.forEach(u=>{u.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let s=Array.from(Array(Math.max(n-1,0))).map((u,d)=>`f_rest_${d+1}`);const o=[...Rc,...s],a=o.map((u,d)=>d),l=a.reduce((u,d)=>(u[o[d]]=d,u),{}),c=this.plyParserutils.decodeSectionHeader(e,l,0);return c.splatCount=c.vertexCount,c.bytesPerSplat=c.bytesPerVertex,c.fieldsToReadIndexes=a,c}decodeHeaderText(e){const t=lt.convertHeaderTextToLines(e),n=this.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(lt.HeaderEndToken)+lt.HeaderEndToken.length+1,n}decodeHeaderFromBuffer(e){const t=this.plyParserutils.readHeaderFromBuffer(e);return this.decodeHeaderText(t)}findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}parseToUncompressedSplatBufferSection(e,t,n,i,s,o,a,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);const c=W.CompressionLevels[0].SphericalHarmonicsDegrees[l].BytesPerSplat;for(let u=t;u<=n;u++){const d=ii.parseToUncompressedSplat(i,u,e,s,l),h=u*c+a;W.writeSplatDataToSectionBuffer(d,o,h,0,l)}}parseToUncompressedSplatArraySection(e,t,n,i,s,o,a=0){a=Math.min(a,e.sphericalHarmonicsDegree);for(let l=t;l<=n;l++){const c=ii.parseToUncompressedSplat(i,l,e,s,a);o.addSplat(c)}}decodeSectionSplatData(e,t,n,i){i=Math.min(i,n.sphericalHarmonicsDegree);const s=new be(i);for(let o=0;o<t;o++){const a=ii.parseToUncompressedSplat(e,o,n,0,i);s.addSplat(a)}return s}static parseToUncompressedSplat=(function(){let e=[];const t=new ht,n=be.OFFSET.X,i=be.OFFSET.Y,s=be.OFFSET.Z,o=be.OFFSET.SCALE0,a=be.OFFSET.SCALE1,l=be.OFFSET.SCALE2,c=be.OFFSET.ROTATION0,u=be.OFFSET.ROTATION1,d=be.OFFSET.ROTATION2,h=be.OFFSET.ROTATION3,p=be.OFFSET.FDC0,g=be.OFFSET.FDC1,A=be.OFFSET.FDC2,m=be.OFFSET.OPACITY,f=[];for(let y=0;y<45;y++)f[y]=be.OFFSET.FRC0+y;return function(y,S,x,T=0,E=0){E=Math.min(E,x.sphericalHarmonicsDegree),ii.readSplat(y,x,S,T,e);const v=be.createSplat(E);if(e[Tl]!==void 0?(v[o]=Math.exp(e[Tl]),v[a]=Math.exp(e[lg]),v[l]=Math.exp(e[cg])):(v[o]=.01,v[a]=.01,v[l]=.01),e[bl]!==void 0){const w=.28209479177387814;v[p]=(.5+w*e[bl])*255,v[g]=(.5+w*e[Ag])*255,v[A]=(.5+w*e[xg])*255}else e[Rl]!==void 0?(v[p]=e[Rl]*255,v[g]=e[_g]*255,v[A]=e[Sg]*255):(v[p]=0,v[g]=0,v[A]=0);if(e[wl]!==void 0&&(v[m]=1/(1+Math.exp(-e[wl]))*255),v[p]=bt(Math.floor(v[p]),0,255),v[g]=bt(Math.floor(v[g]),0,255),v[A]=bt(Math.floor(v[A]),0,255),v[m]=bt(Math.floor(v[m]),0,255),E>=1&&e[vg]!==void 0){for(let w=0;w<9;w++)v[f[w]]=e[x.sphericalHarmonicsDegree1Fields[w]];if(E>=2)for(let w=0;w<15;w++)v[f[9+w]]=e[x.sphericalHarmonicsDegree2Fields[w]]}return t.set(e[ug],e[dg],e[hg],e[fg]),t.normalize(),v[c]=t.x,v[u]=t.y,v[d]=t.z,v[h]=t.w,v[n]=e[pg],v[i]=e[mg],v[s]=e[gg],v}})();static readSplat(e,t,n,i,s){return lt.readVertex(e,t,n,i,t.fieldsToReadIndexes,s,!0)}parseToUncompressedSplatArray(e,t=0){const n=this.decodeHeaderFromBuffer(e),i=n.splatCount,s=this.findSplatData(e,n);return this.decodeSectionSplatData(s,i,n,t)}}const Ic=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],zs=Ic.map((r,e)=>e),[Hs,yg,Mg,Il,ks,Eg,Kr]=[0,1,4,16,17,18,19],Dc=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],ko=Dc.map((r,e)=>e),[Dl,Cg,Tg,bg,wg,Rg,Ig,Dg,Pg,Fg,Vo,Pc,Fc,Pl]=ko,Fl=Vo,Lg=Pc,Bg=Fc,Vs=r=>{const e=(31744&r)>>10,t=1023&r;return(r>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)};class rr{constructor(){this.plyParserutils=new lt}decodeSectionHeadersFromHeaderLines(e){const t=ko.reduce((u,d)=>(u[Dc[d]]=d,u),{}),n=zs.reduce((u,d)=>(u[Ic[d]]=d,u),{}),i=lt.getHeaderSectionNames(e);let s;for(let u=0;u<i.length;u++)i[u]==="codebook_centers"&&(s=u);let o=0,a=!1;const l=[];let c=0;for(;!a;){let u;c===s?u=this.plyParserutils.decodeSectionHeader(e,n,o):u=this.plyParserutils.decodeSectionHeader(e,t,o),a=u.endOfHeader,o=u.headerEndLine+1,a||(u.splatCount=u.vertexCount,u.bytesPerSplat=u.bytesPerVertex),l.push(u),c++}return l}decodeSectionHeadersFromHeaderText(e){const t=lt.convertHeaderTextToLines(e);return this.decodeSectionHeadersFromHeaderLines(t)}getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}decodeHeaderFromHeaderText(e){const t=e.indexOf(lt.HeaderEndToken)+lt.HeaderEndToken.length+1,n=this.decodeSectionHeadersFromHeaderText(e),i=this.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:i}}decodeHeaderFromBuffer(e){const t=this.plyParserutils.readHeaderFromBuffer(e);return this.decodeHeaderFromHeaderText(t)}findVertexData(e,t,n){let i=t.headerSizeBytes;for(let s=0;s<n&&s<t.sectionHeaders.length;s++){const o=t.sectionHeaders[s];i+=o.dataSizeBytes}return new DataView(e,i,t.sectionHeaders[n].dataSizeBytes)}decodeCodeBook(e,t){const n=[],i=[];for(let s=0;s<t.vertexCount;s++){lt.readVertex(e,t,s,0,zs,n);for(let o of zs){const a=zs[o];let l=i[a];l||(i[a]=l=[]),l.push(n[o])}}for(let s=0;s<i.length;s++){const o=i[s],a=.28209479177387814;for(let l=0;l<o.length;l++){const c=Vs(o[l]);s===Il?o[l]=Math.round(1/(1+Math.exp(-c))*255):s===Hs?o[l]=Math.round((.5+a*c)*255):s===ks?o[l]=Math.exp(c):o[l]=c}}return i}decodeSectionSplatData(e,t,n,i,s){s=Math.min(s,n.sphericalHarmonicsDegree);const o=new be(s);for(let a=0;a<t;a++){const l=rr.parseToUncompressedSplat(e,a,n,i,0,s);o.addSplat(l)}return o}static parseToUncompressedSplat=(function(){let e=[];const t=new ht,n=be.OFFSET.X,i=be.OFFSET.Y,s=be.OFFSET.Z,o=be.OFFSET.SCALE0,a=be.OFFSET.SCALE1,l=be.OFFSET.SCALE2,c=be.OFFSET.ROTATION0,u=be.OFFSET.ROTATION1,d=be.OFFSET.ROTATION2,h=be.OFFSET.ROTATION3,p=be.OFFSET.FDC0,g=be.OFFSET.FDC1,A=be.OFFSET.FDC2,m=be.OFFSET.OPACITY,f=[];for(let y=0;y<45;y++)f[y]=be.OFFSET.FRC0+y;return function(y,S,x,T,E=0,v=0){v=Math.min(v,x.sphericalHarmonicsDegree),rr.readSplat(y,x,S,E,e);const w=be.createSplat(v);if(e[Dl]!==void 0?(w[o]=T[ks][e[Dl]],w[a]=T[ks][e[Cg]],w[l]=T[ks][e[Tg]]):(w[o]=.01,w[a]=.01,w[l]=.01),e[Vo]!==void 0?(w[p]=T[Hs][e[Vo]],w[g]=T[Hs][e[Pc]],w[A]=T[Hs][e[Fc]]):e[Fl]!==void 0?(w[p]=e[Fl]*255,w[g]=e[Lg]*255,w[A]=e[Bg]*255):(w[p]=0,w[g]=0,w[A]=0),e[Pl]!==void 0&&(w[m]=T[Il][e[Pl]]),w[p]=bt(Math.floor(w[p]),0,255),w[g]=bt(Math.floor(w[g]),0,255),w[A]=bt(Math.floor(w[A]),0,255),w[m]=bt(Math.floor(w[m]),0,255),v>=1&&x.sphericalHarmonicsDegree>=1){for(let F=0;F<9;F++){const L=T[yg+F%3];w[f[F]]=L[e[x.sphericalHarmonicsDegree1Fields[F]]]}if(v>=2&&x.sphericalHarmonicsDegree>=2)for(let F=0;F<15;F++){const L=T[Mg+F%5];w[f[9+F]]=L[e[x.sphericalHarmonicsDegree2Fields[F]]]}}const M=T[Eg][e[bg]],_=T[Kr][e[wg]],R=T[Kr][e[Rg]],B=T[Kr][e[Ig]];return t.set(M,_,R,B),t.normalize(),w[c]=t.x,w[u]=t.y,w[d]=t.z,w[h]=t.w,w[n]=Vs(e[Dg]),w[i]=Vs(e[Pg]),w[s]=Vs(e[Fg]),w}})();static readSplat(e,t,n,i,s){return lt.readVertex(e,t,n,i,ko,s,!1)}parseToUncompressedSplatArray(e,t=0){const n=[],i=this.decodeHeaderFromBuffer(e,t);let s;for(let a=0;a<i.sectionHeaders.length;a++){const l=i.sectionHeaders[a];if(l.sectionName==="codebook_centers"){const c=this.findVertexData(e,i,a);s=this.decodeCodeBook(c,l)}}for(let a=0;a<i.sectionHeaders.length;a++){const l=i.sectionHeaders[a];if(l.sectionName!=="codebook_centers"){const c=l.vertexCount,u=this.findVertexData(e,i,a),d=this.decodeSectionSplatData(u,c,l,s,t);n.push(d)}}const o=new be(t);for(let a of n)for(let l of a.splats)o.addSplat(l);return o}}class Ug{static parseToUncompressedSplatArray(e,t=0){const n=lt.determineHeaderFormatFromPlyBuffer(e);if(n===Vn.PlayCanvasCompressed)return _t.parseToUncompressedSplatArray(e);if(n===Vn.INRIAV1)return new ii().parseToUncompressedSplatArray(e,t);if(n===Vn.INRIAV2)return new rr().parseToUncompressedSplatArray(e,t)}}class da{constructor(e,t,n,i){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=i}partitionUncompressedSplatArray(e){let t,n,i;if(this.partitionGenerator){const o=this.partitionGenerator(e);t=o.groupingParameters,n=o.sectionCount,i=o.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,i=this.sectionFilters;const s=[];for(let o=0;o<n;o++){const a=new be(e.sphericalHarmonicsDegree),l=i[o];for(let c=0;c<e.splatCount;c++)l(c)&&a.addSplat(e.splats[c]);s.push(a)}return{splatArrays:s,parameters:t}}static getStandardPartitioner(e=0,t=new D,n=W.BucketBlockSize,i=W.BucketSize){const s=o=>{const a=be.OFFSET.X,l=be.OFFSET.Y,c=be.OFFSET.Z;e<=0&&(e=o.splatCount);const u=new D,d=.5,h=f=>{f.x=Math.floor(f.x/d)*d,f.y=Math.floor(f.y/d)*d,f.z=Math.floor(f.z/d)*d};o.splats.forEach(f=>{u.set(f[a],f[l],f[c]).sub(t),h(u),f.centerDist=u.lengthSq()}),o.splats.sort((f,y)=>{let S=f.centerDist,x=y.centerDist;return S>x?1:-1});const p=[],g=[];e=Math.min(o.splatCount,e);const A=Math.ceil(o.splatCount/e);let m=0;for(let f=0;f<A;f++){let y=m;p.push(S=>S>=y&&S<y+e),g.push({blocksSize:n,bucketSize:i}),m+=e}return{sectionCount:p.length,sectionFilters:p,groupingParameters:g}};return new da(void 0,void 0,void 0,s)}}class hr{constructor(e,t,n,i,s,o,a){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=i,this.sceneCenter=s?new D().copy(s):void 0,this.blockSize=o,this.bucketSize=a}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return W.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,i=new D,s=W.BucketBlockSize,o=W.BucketSize){const a=da.getStandardPartitioner(n,i,s,o);return new hr(a,e,t,n,i,s,o)}}const St={Downloading:0,Processing:1,Done:2};class ha extends Error{constructor(e){super(e)}}const pt={DirectToSplatBuffer:0,DirectToSplatArray:1,DownloadBeforeProcessing:2};function Ll(r,e){let t=0;for(let i of r)t+=i.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let i of r)new Uint8Array(e,n,i.sizeBytes).set(i.data),n+=i.sizeBytes;return e}function Bl(r,e,t,n,i,s,o,a){return e?hr.getStandardGenerator(t,n,i,s,o,a).generateFromUncompressedSplatArray(r):W.generateFromUncompressedSplatArrays([r],t,0,new D)}class fa{static loadFromURL(e,t,n,i,s,o,a=!0,l=0,c,u,d,h,p){let g=n?pt.DirectToSplatBuffer:pt.DirectToSplatArray;a&&(g=pt.DirectToSplatArray);const A=ot.ProgressiveLoadSectionSize,m=W.HeaderSizeBytes+W.SectionHeaderSizeBytes,f=1;let y,S,x,T,E=0,v=0,w=!1,M=!1,_=!1;const R=ta();let B=0,F=0,L=0,z="",N=null,X=[],k;const $=new TextDecoder,ne=new ii,ue=(ve,ye,Q)=>{const J=ve>=100;if(Q&&(X.push({data:Q,sizeBytes:Q.byteLength,startBytes:L,endBytes:L+Q.byteLength}),L+=Q.byteLength),g===pt.DownloadBeforeProcessing)J&&R.resolve(X);else{if(w){if(_&&!M){const ae=N.headerSizeBytes+N.chunkElement.storageSizeBytes;T=Ll(X,T),T.byteLength>=ae&&(_t.readElementData(N.chunkElement,T,N.headerSizeBytes),B=ae,F=ae,M=!0)}}else if(z+=$.decode(Q),lt.checkTextForEndHeader(z)){const ae=lt.determineHeaderFormatFromHeaderText(z);if(ae===Vn.INRIAV1)N=ne.decodeHeaderText(z),E=N.splatCount,M=!0,_=!1;else if(ae===Vn.PlayCanvasCompressed)N=_t.decodeHeaderText(z),E=N.vertexElement.count,_=!0;else{if(n)throw new ha("PlyLoader.loadFromURL() -> Selected Ply format cannot be directly loaded.");g=pt.DownloadBeforeProcessing;return}l=Math.min(l,N.sphericalHarmonicsDegree);const se=W.CompressionLevels[0].SphericalHarmonicsDegrees[l],ge=m+se.BytesPerSplat*E;g===pt.DirectToSplatBuffer?(S=new ArrayBuffer(ge),W.writeHeaderToBuffer({versionMajor:W.CurrentMajorVersion,versionMinor:W.CurrentMinorVersion,maxSectionCount:f,sectionCount:f,maxSplatCount:E,splatCount:v,compressionLevel:0,sceneCenter:new D},S)):k=new be(l),B=N.headerSizeBytes,F=N.headerSizeBytes,w=!0}if(w&&M){if(X.length>0&&(y=Ll(X,y),L-B>A||J)){const se=L-F,ge=Math.floor(se/N.bytesPerSplat),Me=ge*N.bytesPerSplat,Ee=se-Me,Ge=v+ge,Oe=F-X[0].startBytes,Be=new DataView(y,Oe,Me),U=W.CompressionLevels[0].SphericalHarmonicsDegrees[l],We=v*U.BytesPerSplat+m;if(g===pt.DirectToSplatBuffer?_?_t.parseToUncompressedSplatBufferSection(N.chunkElement,N.vertexElement,0,ge-1,v,Be,0,S,We):ne.parseToUncompressedSplatBufferSection(N,0,ge-1,Be,0,S,We,l):_?_t.parseToUncompressedSplatArraySection(N.chunkElement,N.vertexElement,0,ge-1,v,Be,0,k):ne.parseToUncompressedSplatArraySection(N,0,ge-1,Be,0,k,l),v=Ge,g===pt.DirectToSplatBuffer&&(x||(W.writeSectionHeaderToBuffer({maxSplatCount:E,splatCount:v,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:l},0,S,W.HeaderSizeBytes),x=new W(S,!1)),x.updateLoadedCounts(1,v),i&&i(x,J)),B+=A,F+=Me,Ee===0)X=[];else{let He=[],Ve=0;for(let Ae=X.length-1;Ae>=0;Ae--){const qe=X[Ae];if(Ve+=qe.sizeBytes,He.unshift(qe),Ve>=Ee)break}X=He}}J&&(g===pt.DirectToSplatBuffer?R.resolve(x):R.resolve(k))}}t&&t(ve,ye,St.Downloading)};return t&&t(0,"0%",St.Downloading),ea(e,ue,!1,c).then(()=>(t&&t(0,"0%",St.Processing),R.promise.then(ve=>{if(t&&t(100,"100%",St.Done),g===pt.DownloadBeforeProcessing){const ye=X.map(Q=>Q.data);return new Blob(ye).arrayBuffer().then(Q=>fa.loadFromFileData(Q,s,o,a,l,u,d,h,p))}else return g===pt.DirectToSplatBuffer?ve:ln(()=>Bl(ve,a,s,o,u,d,h,p))})))}static loadFromFileData(e,t,n,i,s=0,o,a,l,c){return ln(()=>Ug.parseToUncompressedSplatArray(e,s)).then(u=>Bl(u,i,t,n,o,a,l,c))}}class st{static RowSizeBytes=32;static CenterSizeBytes=12;static ScaleSizeBytes=12;static RotationSizeBytes=4;static ColorSizeBytes=4;static parseToUncompressedSplatBufferSection(e,t,n,i,s,o){const a=W.CompressionLevels[0].BytesPerCenter,l=W.CompressionLevels[0].BytesPerScale,c=W.CompressionLevels[0].BytesPerRotation,u=W.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let d=e;d<=t;d++){const h=d*st.RowSizeBytes+i,p=new Float32Array(n,h,3),g=new Float32Array(n,h+st.CenterSizeBytes,3),A=new Uint8Array(n,h+st.CenterSizeBytes+st.ScaleSizeBytes,4),m=new Uint8Array(n,h+st.CenterSizeBytes+st.ScaleSizeBytes+st.RotationSizeBytes,4),f=new ht((m[1]-128)/128,(m[2]-128)/128,(m[3]-128)/128,(m[0]-128)/128);f.normalize();const y=d*u+o,S=new Float32Array(s,y,3),x=new Float32Array(s,y+a,3),T=new Float32Array(s,y+a+l,4),E=new Uint8Array(s,y+a+l+c,4);S[0]=p[0],S[1]=p[1],S[2]=p[2],x[0]=g[0],x[1]=g[1],x[2]=g[2],T[0]=f.w,T[1]=f.x,T[2]=f.y,T[3]=f.z,E[0]=A[0],E[1]=A[1],E[2]=A[2],E[3]=A[3]}}static parseToUncompressedSplatArraySection(e,t,n,i,s){for(let o=e;o<=t;o++){const a=o*st.RowSizeBytes+i,l=new Float32Array(n,a,3),c=new Float32Array(n,a+st.CenterSizeBytes,3),u=new Uint8Array(n,a+st.CenterSizeBytes+st.ScaleSizeBytes,4),d=new Uint8Array(n,a+st.CenterSizeBytes+st.ScaleSizeBytes+st.RotationSizeBytes,4),h=new ht((d[1]-128)/128,(d[2]-128)/128,(d[3]-128)/128,(d[0]-128)/128);h.normalize(),s.addSplatFromComonents(l[0],l[1],l[2],c[0],c[1],c[2],h.w,h.x,h.y,h.z,u[0],u[1],u[2],u[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/st.RowSizeBytes,n=new be;for(let i=0;i<t;i++){const s=i*st.RowSizeBytes,o=new Float32Array(e,s,3),a=new Float32Array(e,s+st.CenterSizeBytes,3),l=new Uint8Array(e,s+st.CenterSizeBytes+st.ScaleSizeBytes,4),c=new Uint8Array(e,s+st.CenterSizeBytes+st.ScaleSizeBytes+st.ColorSizeBytes,4),u=new ht((c[1]-128)/128,(c[2]-128)/128,(c[3]-128)/128,(c[0]-128)/128);u.normalize(),n.addSplatFromComonents(o[0],o[1],o[2],a[0],a[1],a[2],u.w,u.x,u.y,u.z,l[0],l[1],l[2],l[3])}return n}}function Ul(r,e,t,n,i,s,o,a){return e?hr.getStandardGenerator(t,n,i,s,o,a).generateFromUncompressedSplatArray(r):W.generateFromUncompressedSplatArrays([r],t,0,new D)}class pa{static loadFromURL(e,t,n,i,s,o,a=!0,l,c,u,d,h){let p=n?pt.DirectToSplatBuffer:pt.DirectToSplatArray;a&&(p=pt.DirectToSplatArray);const g=W.HeaderSizeBytes+W.SectionHeaderSizeBytes,A=ot.ProgressiveLoadSectionSize,m=1;let f,y,S,x=0,T=0,E;const v=ta();let w=0,M=0,_=[];const R=(B,F,L,z)=>{const N=B>=100;if(L&&_.push(L),p===pt.DownloadBeforeProcessing){N&&v.resolve(_);return}if(!z){if(n)throw new ha("Cannon directly load .splat because no file size info is available.");p=pt.DownloadBeforeProcessing;return}if(!f){x=z/st.RowSizeBytes,f=new ArrayBuffer(z);const X=W.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,k=g+X*x;p===pt.DirectToSplatBuffer?(y=new ArrayBuffer(k),W.writeHeaderToBuffer({versionMajor:W.CurrentMajorVersion,versionMinor:W.CurrentMinorVersion,maxSectionCount:m,sectionCount:m,maxSplatCount:x,splatCount:T,compressionLevel:0,sceneCenter:new D},y)):E=new be(0)}if(L){new Uint8Array(f,M,L.byteLength).set(new Uint8Array(L)),M+=L.byteLength;const X=M-w;if(X>A||N){const $=(N?X:A)/st.RowSizeBytes,ne=T+$;p===pt.DirectToSplatBuffer?st.parseToUncompressedSplatBufferSection(T,ne-1,f,0,y,g):st.parseToUncompressedSplatArraySection(T,ne-1,f,0,E),T=ne,p===pt.DirectToSplatBuffer&&(S||(W.writeSectionHeaderToBuffer({maxSplatCount:x,splatCount:T,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,y,W.HeaderSizeBytes),S=new W(y,!1)),S.updateLoadedCounts(1,T),i&&i(S,N)),w+=A}}N&&(p===pt.DirectToSplatBuffer?v.resolve(S):v.resolve(E)),t&&t(B,F,St.Downloading)};return t&&t(0,"0%",St.Downloading),ea(e,R,!1,l).then(()=>(t&&t(0,"0%",St.Processing),v.promise.then(B=>(t&&t(100,"100%",St.Done),p===pt.DownloadBeforeProcessing?new Blob(_).arrayBuffer().then(F=>pa.loadFromFileData(F,s,o,a,c,u,d,h)):p===pt.DirectToSplatBuffer?B:ln(()=>Ul(B,a,s,o,c,u,d,h))))))}static loadFromFileData(e,t,n,i,s,o,a,l){return ln(()=>{const c=st.parseStandardSplatToUncompressedSplatArray(e);return Ul(c,i,t,n,s,o,a,l)})}}class ss{static checkVersion(e){const t=W.CurrentMajorVersion,n=W.CurrentMinorVersion,i=W.parseHeader(e);if(i.versionMajor===t&&i.versionMinor>=n||i.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${i.versionMajor}.${i.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,i,s){let o,a,l,c,u=!1,d=!1,h,p=[],g=!1,A=!1,m=0,f=0,y=0,S=!1,x=!1,T=!1,E=[];const v=ta(),w=()=>{!u&&!d&&m>=W.HeaderSizeBytes&&(d=!0,new Blob(E).arrayBuffer().then(z=>{l=new ArrayBuffer(W.HeaderSizeBytes),new Uint8Array(l).set(new Uint8Array(z,0,W.HeaderSizeBytes)),ss.checkVersion(l),d=!1,u=!0,c=W.parseHeader(l),window.setTimeout(()=>{R()},1)}))};let M=0;const _=()=>{M===0&&(M++,window.setTimeout(()=>{M--,B()},1))},R=()=>{const L=()=>{A=!0,new Blob(E).arrayBuffer().then(N=>{A=!1,g=!0,h=new ArrayBuffer(c.maxSectionCount*W.SectionHeaderSizeBytes),new Uint8Array(h).set(new Uint8Array(N,W.HeaderSizeBytes,c.maxSectionCount*W.SectionHeaderSizeBytes)),p=W.parseSectionHeaders(c,h,0,!1);let X=0;for(let $=0;$<c.maxSectionCount;$++)X+=p[$].storageSizeBytes;const k=W.HeaderSizeBytes+c.maxSectionCount*W.SectionHeaderSizeBytes+X;if(!o){o=new ArrayBuffer(k);let $=0;for(let ne=0;ne<E.length;ne++){const ue=E[ne];new Uint8Array(o,$,ue.byteLength).set(new Uint8Array(ue)),$+=ue.byteLength}}y=W.HeaderSizeBytes+W.SectionHeaderSizeBytes*c.maxSectionCount;for(let $=0;$<=p.length&&$<c.maxSectionCount;$++)y+=p[$].storageSizeBytes;_()})};!A&&!g&&u&&m>=W.HeaderSizeBytes+W.SectionHeaderSizeBytes*c.maxSectionCount&&L()},B=()=>{if(T)return;T=!0;const L=()=>{if(T=!1,g){if(x)return;if(S=m>=y,m-f>ot.ProgressiveLoadSectionSize||S){f+=ot.ProgressiveLoadSectionSize,x=f>=y,a||(a=new W(o,!1));const N=W.HeaderSizeBytes+W.SectionHeaderSizeBytes*c.maxSectionCount;let X=0,k=0,$=0;for(let ve=0;ve<c.maxSectionCount;ve++){const ye=p[ve],Q=X+ye.partiallyFilledBucketCount*4+ye.bucketStorageSizeBytes*ye.bucketCount,J=N+Q;if(f>=J){k++;const ae=f-J,Me=W.CompressionLevels[c.compressionLevel].SphericalHarmonicsDegrees[ye.sphericalHarmonicsDegree].BytesPerSplat;let Ee=Math.floor(ae/Me);Ee=Math.min(Ee,ye.maxSplatCount),$+=Ee,a.updateLoadedCounts(k,$),a.updateSectionLoadedCounts(ve,Ee)}else break;X+=ye.storageSizeBytes}i(a,x);const ne=f/y*100,ue=ne.toFixed(2)+"%";t&&t(ne,ue,St.Downloading),x?v.resolve(a):B()}}};window.setTimeout(L,ot.ProgressiveLoadSectionDelayDuration)};return ea(e,(L,z,N)=>{N&&(E.push(N),o&&new Uint8Array(o,m,N.byteLength).set(new Uint8Array(N)),m+=N.byteLength),n?(w(),R(),B()):t&&t(L,z,St.Downloading)},!n,s).then(L=>(t&&t(0,"0%",St.Processing),(n?v.promise:ss.loadFromFileData(L)).then(N=>(t&&t(100,"100%",St.Done),N))))}static loadFromFileData(e){return ln(()=>(ss.checkVersion(e),new W(e)))}static downloadFile=(function(){let e;return function(t,n){const i=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(i),e.click()}})()}const yn={Splat:0,KSplat:1,Ply:2},Nl=r=>r.endsWith(".ply")?yn.Ply:r.endsWith(".splat")?yn.Splat:r.endsWith(".ksplat")?yn.KSplat:null,Ol={type:"change"},jr={type:"start"},zl={type:"end"},Gs=new dc,Hl=new Un,Ng=Math.cos(70*ac.DEG2RAD);class Ws extends oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",ee),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(Ol),n.update(),s=i.NONE},this.clearDampedRotation=function(){l.theta=0,l.phi=0},this.clearDampedPan=function(){u.set(0,0,0)},this.update=(function(){const P=new D,te=new ht().setFromUnitVectors(e.up,new D(0,1,0)),xe=te.clone().invert(),le=new D,Pe=new ht,Ue=new D,Ke=2*Math.PI;return function(){te.setFromUnitVectors(e.up,new D(0,1,0)),xe.copy(te).invert();const de=n.object.position;P.copy(de).sub(n.target),P.applyQuaternion(te),a.setFromVector3(P),n.autoRotate&&s===i.NONE&&R(M()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let K=n.minAzimuthAngle,j=n.maxAzimuthAngle;isFinite(K)&&isFinite(j)&&(K<-Math.PI?K+=Ke:K>Math.PI&&(K-=Ke),j<-Math.PI?j+=Ke:j>Math.PI&&(j-=Ke),K<=j?a.theta=Math.max(K,Math.min(j,a.theta)):a.theta=a.theta>(K+j)/2?Math.max(K,a.theta):Math.min(j,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&E||n.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(xe),de.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let fe=!1;if(n.zoomToCursor&&E){let ce=null;if(n.object.isPerspectiveCamera){const Ne=P.length();ce=$(Ne*c);const at=Ne-ce;n.object.position.addScaledVector(x,at),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ne=new D(T.x,T.y,0);Ne.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),fe=!0;const at=new D(T.x,T.y,0);at.unproject(n.object),n.object.position.sub(at).add(Ne),n.object.updateMatrixWorld(),ce=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ce!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ce).add(n.object.position):(Gs.origin.copy(n.object.position),Gs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Gs.direction))<Ng?e.lookAt(n.target):(Hl.setFromNormalAndCoplanarPoint(n.object.up,n.target),Gs.intersectPlane(Hl,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),fe=!0);return c=1,E=!1,fe||le.distanceToSquared(n.object.position)>o||8*(1-Pe.dot(n.object.quaternion))>o||Ue.distanceToSquared(n.target)>0?(n.dispatchEvent(Ol),le.copy(n.object.position),Pe.copy(n.object.quaternion),Ue.copy(n.target),fe=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Re),n.domElement.removeEventListener("pointerdown",Ae),n.domElement.removeEventListener("pointercancel",we),n.domElement.removeEventListener("wheel",G),n.domElement.removeEventListener("pointermove",qe),n.domElement.removeEventListener("pointerup",we),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ee),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new ja,l=new ja;let c=1;const u=new D,d=new Ce,h=new Ce,p=new Ce,g=new Ce,A=new Ce,m=new Ce,f=new Ce,y=new Ce,S=new Ce,x=new D,T=new Ce;let E=!1;const v=[],w={};function M(){return 2*Math.PI/60/60*n.autoRotateSpeed}function _(){return Math.pow(.95,n.zoomSpeed)}function R(P){l.theta-=P}function B(P){l.phi-=P}const F=(function(){const P=new D;return function(xe,le){P.setFromMatrixColumn(le,0),P.multiplyScalar(-xe),u.add(P)}})(),L=(function(){const P=new D;return function(xe,le){n.screenSpacePanning===!0?P.setFromMatrixColumn(le,1):(P.setFromMatrixColumn(le,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(xe),u.add(P)}})(),z=(function(){const P=new D;return function(xe,le){const Pe=n.domElement;if(n.object.isPerspectiveCamera){const Ue=n.object.position;P.copy(Ue).sub(n.target);let Ke=P.length();Ke*=Math.tan(n.object.fov/2*Math.PI/180),F(2*xe*Ke/Pe.clientHeight,n.object.matrix),L(2*le*Ke/Pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(xe*(n.object.right-n.object.left)/n.object.zoom/Pe.clientWidth,n.object.matrix),L(le*(n.object.top-n.object.bottom)/n.object.zoom/Pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function N(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(P){if(!n.zoomToCursor)return;E=!0;const te=n.domElement.getBoundingClientRect(),xe=P.clientX-te.left,le=P.clientY-te.top,Pe=te.width,Ue=te.height;T.x=xe/Pe*2-1,T.y=-(le/Ue)*2+1,x.set(T.x,T.y,1).unproject(e).sub(e.position).normalize()}function $(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function ne(P){d.set(P.clientX,P.clientY)}function ue(P){k(P),f.set(P.clientX,P.clientY)}function ve(P){g.set(P.clientX,P.clientY)}function ye(P){h.set(P.clientX,P.clientY),p.subVectors(h,d).multiplyScalar(n.rotateSpeed);const te=n.domElement;R(2*Math.PI*p.x/te.clientHeight),B(2*Math.PI*p.y/te.clientHeight),d.copy(h),n.update()}function Q(P){y.set(P.clientX,P.clientY),S.subVectors(y,f),S.y>0?N(_()):S.y<0&&X(_()),f.copy(y),n.update()}function J(P){A.set(P.clientX,P.clientY),m.subVectors(A,g).multiplyScalar(n.panSpeed),z(m.x,m.y),g.copy(A),n.update()}function ae(P){k(P),P.deltaY<0?X(_()):P.deltaY>0&&N(_()),n.update()}function se(P){let te=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),te=!0;break}te&&(P.preventDefault(),n.update())}function ge(){if(v.length===1)d.set(v[0].pageX,v[0].pageY);else{const P=.5*(v[0].pageX+v[1].pageX),te=.5*(v[0].pageY+v[1].pageY);d.set(P,te)}}function Me(){if(v.length===1)g.set(v[0].pageX,v[0].pageY);else{const P=.5*(v[0].pageX+v[1].pageX),te=.5*(v[0].pageY+v[1].pageY);g.set(P,te)}}function Ee(){const P=v[0].pageX-v[1].pageX,te=v[0].pageY-v[1].pageY,xe=Math.sqrt(P*P+te*te);f.set(0,xe)}function Ge(){n.enableZoom&&Ee(),n.enablePan&&Me()}function Oe(){n.enableZoom&&Ee(),n.enableRotate&&ge()}function Be(P){if(v.length==1)h.set(P.pageX,P.pageY);else{const xe=oe(P),le=.5*(P.pageX+xe.x),Pe=.5*(P.pageY+xe.y);h.set(le,Pe)}p.subVectors(h,d).multiplyScalar(n.rotateSpeed);const te=n.domElement;R(2*Math.PI*p.x/te.clientHeight),B(2*Math.PI*p.y/te.clientHeight),d.copy(h)}function U(P){if(v.length===1)A.set(P.pageX,P.pageY);else{const te=oe(P),xe=.5*(P.pageX+te.x),le=.5*(P.pageY+te.y);A.set(xe,le)}m.subVectors(A,g).multiplyScalar(n.panSpeed),z(m.x,m.y),g.copy(A)}function We(P){const te=oe(P),xe=P.pageX-te.x,le=P.pageY-te.y,Pe=Math.sqrt(xe*xe+le*le);y.set(0,Pe),S.set(0,Math.pow(y.y/f.y,n.zoomSpeed)),N(S.y),f.copy(y)}function He(P){n.enableZoom&&We(P),n.enablePan&&U(P)}function Ve(P){n.enableZoom&&We(P),n.enableRotate&&Be(P)}function Ae(P){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",qe),n.domElement.addEventListener("pointerup",we)),pe(P),P.pointerType==="touch"?ie(P):I(P))}function qe(P){n.enabled!==!1&&(P.pointerType==="touch"?Z(P):C(P))}function we(P){_e(P),v.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",qe),n.domElement.removeEventListener("pointerup",we)),n.dispatchEvent(zl),s=i.NONE}function I(P){let te;switch(P.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case li.DOLLY:if(n.enableZoom===!1)return;ue(P),s=i.DOLLY;break;case li.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;ve(P),s=i.PAN}else{if(n.enableRotate===!1)return;ne(P),s=i.ROTATE}break;case li.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;ne(P),s=i.ROTATE}else{if(n.enablePan===!1)return;ve(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(jr)}function C(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ye(P);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(P);break;case i.PAN:if(n.enablePan===!1)return;J(P);break}}function G(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(jr),ae(P),n.dispatchEvent(zl))}function ee(P){n.enabled===!1||n.enablePan===!1||se(P)}function ie(P){switch(Ye(P),v.length){case 1:switch(n.touches.ONE){case ci.ROTATE:if(n.enableRotate===!1)return;ge(),s=i.TOUCH_ROTATE;break;case ci.PAN:if(n.enablePan===!1)return;Me(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ge(),s=i.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Oe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(jr)}function Z(P){switch(Ye(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Be(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;U(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;He(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ve(P),n.update();break;default:s=i.NONE}}function Re(P){n.enabled!==!1&&P.preventDefault()}function pe(P){v.push(P)}function _e(P){delete w[P.pointerId];for(let te=0;te<v.length;te++)if(v[te].pointerId==P.pointerId){v.splice(te,1);return}}function Ye(P){let te=w[P.pointerId];te===void 0&&(te=new Ce,w[P.pointerId]=te),te.set(P.pageX,P.pageY)}function oe(P){const te=P.pointerId===v[0].pointerId?v[1]:v[0];return w[te.pointerId]}n.domElement.addEventListener("contextmenu",Re),n.domElement.addEventListener("pointerdown",Ae),n.domElement.addEventListener("pointercancel",we),n.domElement.addEventListener("wheel",G,{passive:!1}),this.update()}}const Og=(r,e,t,n,i)=>{const s=performance.now();let o=r.style.display==="none"?0:parseFloat(r.style.opacity);isNaN(o)&&(o=1);const a=window.setInterval(()=>{const c=performance.now()-s;let u=Math.min(c/n,1);u>.999&&(u=1);let d;e?(d=(1-u)*o,d<1e-4&&(d=0)):d=(1-o)*u+o,d>0?(r.style.display=t,r.style.opacity=d):r.style.display="none",u>=1&&(i&&i(),window.clearInterval(a))},16);return a},zg=500;class ma{static elementIDGen=0;constructor(e,t){this.taskIDGen=0,this.elementID=ma.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const n=document.createElement("style");n.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const n=(i,s,o,a,l)=>{o?i.style.display=s?a:"none":this.fadeTransitions[l]=Og(i,!s,a,zg,()=>{this.fadeTransitions[l]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}}class Hg{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class kg{constructor(e){this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const i=document.createElement("div");i.style.display="table";for(let s of t){const o=document.createElement("div");o.style.display="table-row",o.className="info-panel-row";const a=document.createElement("div");a.style.display="table-cell",a.innerHTML=`${s[0]}: `,a.classList.add("info-panel-cell","label-cell");const l=document.createElement("div");l.style.display="table-cell",l.style.width="10px",l.innerHTML=" ",l.className="info-panel-cell";const c=document.createElement("div");c.style.display="table-cell",c.innerHTML="",c.className="info-panel-cell",this.infoCells[s[1]]=c,o.appendChild(a),o.appendChild(l),o.appendChild(c),i.appendChild(o)}this.infoPanel.appendChild(i),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}update=function(e,t,n,i,s,o,a,l,c,u,d,h,p,g){const A=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==A&&(this.infoCells.cameraPosition.innerHTML=A),n){const f=n,y=`${f.x.toFixed(5)}, ${f.y.toFixed(5)}, ${f.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==y&&(this.infoCells.cameraLookAt.innerHTML=y)}const m=`${i.x.toFixed(5)}, ${i.y.toFixed(5)}, ${i.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==m&&(this.infoCells.cameraUp.innerHTML=m),this.infoCells.orthographicCamera.innerHTML=s?"Orthographic":"Perspective",o){const f=o,y=`${f.x.toFixed(5)}, ${f.y.toFixed(5)}, ${f.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=y}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=a,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${c} splats out of ${l} (${u.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${d.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${h.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${p.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${g}`};setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const kl=new D;class Vg extends vt{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,i=.1,s=16776960,o=n*.2,a=o*.2){super(),this.type="ArrowHelper";const l=new hs(i,i,n,32);l.translate(0,n/2,0);const c=new hs(0,a,o,32);c.translate(0,n,0),this.position.copy(t),this.line=new mt(l,new ri({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new mt(c,new ri({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{kl.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(kl,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class rs{constructor(e){this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new Gn(e,t,{format:Lt,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new jo(e,t),this.splatRenderTarget.depthTexture.format=si,this.splatRenderTarget.depthTexture.type=Zt}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new Wt({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:Yl,blendSrc:ls,blendSrcAlpha:ls,blendDst:cs,blendDstAlpha:cs});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new mt(new Wi(2,2),t),this.renderTargetCopyCamera=new Jo(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(Ri(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new Zo(.5,1.5,32),t=new ri({color:16777215}),n=new mt(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const i=new mt(e,t);i.position.set(0,-1,0);const s=new mt(e,t);s.rotation.set(0,0,Math.PI/2),s.position.set(1,0,0);const o=new mt(e,t);o.rotation.set(0,0,-Math.PI/2),o.position.set(-1,0,0),this.meshCursor=new vt,this.meshCursor.add(n),this.meshCursor.add(i),this.meshCursor.add(s),this.meshCursor.add(o),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(Ri(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new sr(.5,32,32),t=rs.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new mt(e,t)}}destroyFocusMarker(){this.focusMarker&&(Ri(this.focusMarker),this.focusMarker=null)}updateFocusMarker=(function(){const e=new D,t=new Le,n=new D;return function(i,s,o){t.copy(s.matrixWorld).invert(),e.copy(i).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(s.matrixWorld),n.copy(s.position).sub(i);const a=n.length();this.focusMarker.position.copy(i),this.focusMarker.scale.set(a,a,a),this.focusMarker.material.uniforms.realFocusPosition.value.copy(i),this.focusMarker.material.uniforms.viewport.value.copy(o),this.focusMarker.material.uniformsNeedUpdate=!0}})();setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new Wi(1,1);e.rotateX(-Math.PI/2);const t=new ri({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=jt;const n=new mt(e,t),i=new D(0,1,0);i.normalize();const s=new D(0,0,0),o=.5,a=.01,l=56576,c=new Vg(i,s,o,a,l,.1,.03);this.controlPlane=new vt,this.controlPlane.add(n),this.controlPlane.add(c)}}destroyControlPlane(){this.controlPlane&&(Ri(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}positionAndOrientControlPlane=(function(){const e=new ht,t=new D(0,1,0);return function(n,i){e.setFromUnitVectors(t,i),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}})();addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(Ri(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new sr(1,32,32),n=new vt,i=(s,o)=>{let a=new mt(t,rs.buildDebugMaterial(s));a.renderOrder=e,n.add(a),a.position.fromArray(o)};return i(16711680,[-50,0,0]),i(16711680,[50,0,0]),i(65280,[0,0,-50]),i(65280,[0,0,50]),i(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new Qi(3,3,3),n=new vt;let i=12303291;const s=a=>{let l=new mt(t,rs.buildDebugMaterial(i));l.renderOrder=e,n.add(l),l.position.fromArray(a)};let o=10;return s([-o,0,-o]),s([-o,0,o]),s([o,0,-o]),s([o,0,o]),n}static buildDebugMaterial(e){const t=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,n=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,i={color:{type:"v3",value:new $e(e)}},s=new Wt({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:fn});return s.extensions.fragDepth=!0,s}static buildFocusMarkerMaterial(e){const t=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,n=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,i={color:{type:"v3",value:new $e(e)},realFocusPosition:{type:"v3",value:new D},viewport:{type:"v2",value:new Ce},opacity:{value:0}};return new Wt({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:fn})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const Gg=new D(1,0,0),Wg=new D(0,1,0),Xg=new D(0,0,1);class Zr{constructor(e=new D,t=new D){this.origin=new D,this.direction=new D,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}intersectBox=(function(){const e=new D,t=[],n=[],i=[];return function(s,o){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,i[0]=this.direction.x,i[1]=this.direction.y,i[2]=this.direction.z,this.boxContainsPoint(s,this.origin,1e-4))return o&&(o.origin.copy(this.origin),o.normal.set(0,0,0),o.distance=-1),!0;for(let a=0;a<3;a++){if(i[a]==0)continue;const l=a==0?Gg:a==1?Wg:Xg,c=i[a]<0?s.max:s.min;let u=-Math.sign(i[a]);t[0]=a==0?c.x:a==1?c.y:c.z;let d=t[0]-n[a];if(d*u<0){const h=(a+1)%3,p=(a+2)%3;if(t[2]=i[h]/i[a]*d+n[h],t[1]=i[p]/i[a]*d+n[p],e.set(t[a],t[p],t[h]),this.boxContainsPoint(s,e,1e-4))return o&&(o.origin.copy(e),o.normal.copy(l).multiplyScalar(u),o.distance=e.sub(this.origin).length()),!0}}return!1}})();intersectSphere=(function(){const e=new D;return function(t,n,i){e.copy(t).sub(this.origin);const s=e.dot(this.direction),o=s*s,l=e.dot(e)-o,c=n*n;if(l>c)return!1;const u=Math.sqrt(c-l),d=s-u,h=s+u;if(h<0)return!1;let p=d<0?h:d;return i&&(i.origin.copy(this.origin).addScaledVector(this.direction,p),i.normal.copy(i.origin).sub(t).normalize(),i.distance=p),!0}})()}class ga{constructor(){this.origin=new D,this.normal=new D,this.distance=0,this.splatIndex=0}set(e,t,n,i){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=i}clone(){const e=new ga;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const Mn={ThreeD:0,TwoD:1};class qg{constructor(e,t,n=!1){this.ray=new Zr(e,t),this.raycastAgainstTrueSplatEllipsoid=n}setFromCameraAndScreenPosition=(function(){const e=new Ce;return function(t,n,i){if(e.x=n.x/i.x*2-1,e.y=(i.y-n.y)/i.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}})();intersectSplatMesh=(function(){const e=new Le,t=new Le,n=new Le,i=new Zr,s=new D;return function(o,a=[]){const l=o.getSplatTree();if(l){for(let c=0;c<l.subTrees.length;c++){const u=l.subTrees[c];t.copy(o.matrixWorld),o.dynamicMode&&(o.getSceneTransform(c,n),t.multiply(n)),e.copy(t).invert(),i.origin.copy(this.ray.origin).applyMatrix4(e),i.direction.copy(this.ray.origin).add(this.ray.direction),i.direction.applyMatrix4(e).sub(i.origin).normalize();const d=[];u.rootNode&&this.castRayAtSplatTreeNode(i,l,u.rootNode,d),d.forEach(h=>{h.origin.applyMatrix4(t),h.normal.applyMatrix4(t).normalize(),h.distance=s.copy(h.origin).sub(this.ray.origin).length()}),a.push(...d)}return a.sort((c,u)=>c.distance>u.distance?1:-1),a}}})();castRayAtSplatTreeNode=(function(){const e=new dt,t=new D,n=new D,i=new ht,s=new ga,o=1e-7,a=new D(0,0,0),l=new Le,c=new Le,u=new Le,d=new Le,h=new Le,p=new Zr;return function(g,A,m,f=[]){if(g.intersectBox(m.boundingBox)){if(m.data&&m.data.indexes&&m.data.indexes.length>0)for(let y=0;y<m.data.indexes.length;y++){const S=m.data.indexes[y],x=A.splatMesh.getSceneIndexForSplat(S);if(A.splatMesh.getScene(x).visible&&(A.splatMesh.getSplatColor(S,e),A.splatMesh.getSplatCenter(S,t),A.splatMesh.getSplatScaleAndRotation(S,n,i),!(n.x<=o||n.y<=o||A.splatMesh.splatRenderMode===Mn.ThreeD&&n.z<=o)))if(this.raycastAgainstTrueSplatEllipsoid){c.makeScale(n.x,n.y,n.z),u.makeRotationFromQuaternion(i);const E=Math.log10(e.w)*2;if(l.makeScale(E,E,E),h.copy(l).multiply(u).multiply(c),d.copy(h).invert(),p.origin.copy(g.origin).sub(t).applyMatrix4(d),p.direction.copy(g.origin).add(g.direction).sub(t),p.direction.applyMatrix4(d).sub(p.origin).normalize(),p.intersectSphere(a,1,s)){const v=s.clone();v.splatIndex=S,v.origin.applyMatrix4(h).add(t),f.push(v)}}else{let E=n.x+n.y,v=2;if(A.splatMesh.splatRenderMode===Mn.ThreeD&&(E+=n.z,v=3),E=E/v,g.intersectSphere(t,E,s)){const w=s.clone();w.splatIndex=S,f.push(w)}}}if(m.children&&m.children.length>0)for(let y of m.children)this.castRayAtSplatTreeNode(g,A,y,f);return f}}})()}class Bi{static buildVertexShaderBase(e=!1,t=!1,n=0,i=""){let s=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(s+=`
            uniform float sceneOpacity[${ot.MaxScenes}];
            uniform int sceneVisibility[${ot.MaxScenes}];
        `),e&&(s+=`
            uniform highp mat4 transforms[${ot.MaxScenes}];
        `),s+=`
        ${i}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${ot.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${ot.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(s+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?s+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:s+="mat4 transformModelViewMatrix = modelViewMatrix;",s+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,n>=1&&(s+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?s+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:s+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,s+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(s+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?s+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:n===2&&(s+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),s+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(s+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(s+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),s+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),s+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),s}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,n=0,i=1,s=!1){const o={sceneCenter:{type:"v3",value:new D},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new Ce},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new Ce},basisViewport:{type:"v2",value:new Ce},debugColor:{type:"v3",value:new $e},centersColorsTextureSize:{type:"v2",value:new Ce(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new Ce(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:i},pointCloudModeEnabled:{type:"i",value:s?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new Ce(1024,1024)},sceneCount:{type:"i",value:1}};for(let a=0;a<ot.MaxScenes;a++)o.sphericalHarmonics8BitCompressionRangeMin.value.push(-3/2),o.sphericalHarmonics8BitCompressionRangeMax.value.push(ot.SphericalHarmonics8BitCompressionRange/2);if(t){const a=[];for(let c=0;c<ot.MaxScenes;c++)a.push(1);o.sceneOpacity={type:"f",value:a};const l=[];for(let c=0;c<ot.MaxScenes;c++)l.push(1);o.sceneVisibility={type:"i",value:l}}if(e){const a=[];for(let l=0;l<ot.MaxScenes;l++)a.push(new Le);o.transforms={type:"mat4",value:a}}return o}}class or{static build(e=!1,t=!1,n=!1,i=2048,s=1,o=!1,a=0,l=.3){let u=Bi.buildVertexShaderBase(e,t,a,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);u+=or.buildVertexShaderProjection(n,t,i,l);const d=or.buildFragmentShader(),h=Bi.getUniforms(e,t,a,s,o);return h.covariancesTextureSize={type:"v2",value:new Ce(1024,1024)},h.covariancesTexture={type:"t",value:null},h.covariancesTextureHalfFloat={type:"t",value:null},h.covariancesAreHalfFloat={type:"i",value:0},new Wt({uniforms:h,vertexShader:u,fragmentShader:d,transparent:!0,alphaTest:1,blending:Hn,depthTest:!0,depthWrite:!1,side:jt})}static buildVertexShaderProjection(e,t,n,i){let s=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?s+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:s+=`
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
            `,s+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `,t&&(s+=`
                vColor.a *= splatOpacityFromScene;
            `),s+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,s+=Bi.getVertexShaderFadeIn(),s+="}",s}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}}class ar{static build(e=!1,t=!1,n=1,i=!1,s=0){let a=Bi.buildVertexShaderBase(e,t,s,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);a+=ar.buildVertexShaderProjection();const l=ar.buildFragmentShader(),c=Bi.getUniforms(e,t,s,n,i);return c.scaleRotationsTexture={type:"t",value:null},c.scaleRotationsTextureSize={type:"v2",value:new Ce(1024,1024)},new Wt({uniforms:c,vertexShader:a,fragmentShader:l,transparent:!0,alphaTest:1,blending:Hn,depthTest:!0,depthWrite:!1,side:jt})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=Bi.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}}class Qg{static build(e){const t=new $t;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(12),i=new Jt(n,3);t.setAttribute("position",i),i.setXYZ(0,-1,-1,0),i.setXYZ(1,-1,1,0),i.setXYZ(2,1,1,0),i.setXYZ(3,1,-1,0),i.needsUpdate=!0;const s=new fd().copy(t),o=new Uint32Array(e),a=new ld(o,1,!1);return a.setUsage(Iu),s.setAttribute("splatIndex",a),s.instanceCount=0,s}}class Yg extends vt{constructor(e,t=new D,n=new ht,i=new D(1,1,1),s=1,o=1,a=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(i),this.transform=new Le,this.minimumAlpha=s,this.opacity=o,this.visible=a}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}class Aa{static idGen=0;constructor(e,t,n,i){this.min=new D().copy(e),this.max=new D().copy(t),this.boundingBox=new dn(this.min,this.max),this.center=new D().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=i||Aa.idGen++}}class os{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new D,this.sceneMin=new D,this.sceneMax=new D,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new D().fromArray(e.min),n=new D().fromArray(e.max),i=new Aa(t,n,e.depth,e.id);if(e.data.indexes){i.data={indexes:[]};for(let s of e.data.indexes)i.data.indexes.push(s)}if(e.children)for(let s of e.children)i.children.push(os.convertWorkerSubTreeNode(s));return i}static convertWorkerSubTree(e,t){const n=new os(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new D().fromArray(e.sceneMin),n.sceneMax=new D().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=os.convertWorkerSubTreeNode(e.rootNode);const i=(s,o)=>{s.children.length===0&&o(s);for(let a of s.children)i(a,o)};return n.nodesWithIndexes=[],i(n.rootNode,s=>{s.data&&s.data.indexes&&s.data.indexes.length>0&&n.nodesWithIndexes.push(s)}),n}}function Kg(r){let e=0;class t{constructor(l,c){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]]}containsPoint(l){return l[0]>=this.min[0]&&l[0]<=this.max[0]&&l[1]>=this.min[1]&&l[1]<=this.max[1]&&l[2]>=this.min[2]&&l[2]<=this.max[2]}}class n{constructor(l,c){this.maxDepth=l,this.maxCentersPerNode=c,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class i{constructor(l,c,u,d){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]],this.center=[(c[0]-l[0])*.5+l[0],(c[1]-l[1])*.5+l[1],(c[2]-l[2])*.5+l[2]],this.depth=u,this.children=[],this.data=null,this.id=d||e++}}processSplatTreeNode=function(a,l,c,u){const d=l.data.indexes.length;if(d<a.maxCentersPerNode||l.depth>a.maxDepth){const y=[];for(let S=0;S<l.data.indexes.length;S++)a.addedIndexes[l.data.indexes[S]]||(y.push(l.data.indexes[S]),a.addedIndexes[l.data.indexes[S]]=!0);l.data.indexes=y,l.data.indexes.sort((S,x)=>S>x?1:-1),a.nodesWithIndexes.push(l);return}const h=[l.max[0]-l.min[0],l.max[1]-l.min[1],l.max[2]-l.min[2]],p=[h[0]*.5,h[1]*.5,h[2]*.5],g=[l.min[0]+p[0],l.min[1]+p[1],l.min[2]+p[2]],A=[new t([g[0]-p[0],g[1],g[2]-p[2]],[g[0],g[1]+p[1],g[2]]),new t([g[0],g[1],g[2]-p[2]],[g[0]+p[0],g[1]+p[1],g[2]]),new t([g[0],g[1],g[2]],[g[0]+p[0],g[1]+p[1],g[2]+p[2]]),new t([g[0]-p[0],g[1],g[2]],[g[0],g[1]+p[1],g[2]+p[2]]),new t([g[0]-p[0],g[1]-p[1],g[2]-p[2]],[g[0],g[1],g[2]]),new t([g[0],g[1]-p[1],g[2]-p[2]],[g[0]+p[0],g[1],g[2]]),new t([g[0],g[1]-p[1],g[2]],[g[0]+p[0],g[1],g[2]+p[2]]),new t([g[0]-p[0],g[1]-p[1],g[2]],[g[0],g[1],g[2]+p[2]])],m=[];for(let y=0;y<A.length;y++)m[y]=[];const f=[0,0,0];for(let y=0;y<d;y++){const S=l.data.indexes[y],x=c[S];f[0]=u[x],f[1]=u[x+1],f[2]=u[x+2];for(let T=0;T<A.length;T++)A[T].containsPoint(f)&&m[T].push(S)}for(let y=0;y<A.length;y++){const S=new i(A[y].min,A[y].max,l.depth+1);S.data={indexes:m[y]},l.children.push(S)}l.data={};for(let y of l.children)processSplatTreeNode(a,y,c,u)};const s=(a,l,c)=>{const u=[0,0,0],d=[0,0,0],h=[],p=Math.floor(a.length/4);for(let A=0;A<p;A++){const m=A*4,f=a[m],y=a[m+1],S=a[m+2],x=Math.round(a[m+3]);(A===0||f<u[0])&&(u[0]=f),(A===0||f>d[0])&&(d[0]=f),(A===0||y<u[1])&&(u[1]=y),(A===0||y>d[1])&&(d[1]=y),(A===0||S<u[2])&&(u[2]=S),(A===0||S>d[2])&&(d[2]=S),h.push(x)}const g=new n(l,c);return g.sceneMin=u,g.sceneMax=d,g.rootNode=new i(g.sceneMin,g.sceneMax,0),g.rootNode.data={indexes:h},g};function o(a,l,c){const u=[];for(let h of a){const p=Math.floor(h.length/4);for(let g=0;g<p;g++){const A=g*4,m=Math.round(h[A+3]);u[m]=A}}const d=[];for(let h of a){const p=s(h,l,c);d.push(p),processSplatTreeNode(p,p.rootNode,u,h)}r.postMessage({subTrees:d})}r.onmessage=a=>{a.data.process&&o(a.data.process.centers,a.data.process.maxDepth,a.data.process.maxCentersPerNode)}}function jg(r,e,t,n,i){r.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:i}},t)}function Zg(){return new Worker(URL.createObjectURL(new Blob(["(",Kg.toString(),")(self)"],{type:"application/javascript"})))}class Jg{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}processSplatMesh=function(e,t=()=>!0,n,i){this.splatTreeWorker||(this.splatTreeWorker=Zg()),this.splatMesh=e,this.subTrees=[];const s=new D,o=(a,l)=>{const c=new Float32Array(l*4);let u=0;for(let d=0;d<l;d++){const h=d+a;if(t(h)){e.getSplatCenter(h,s);const p=u*4;c[p]=s.x,c[p+1]=s.y,c[p+2]=s.z,c[p+3]=h,u++}}return c};return new Promise(a=>{const l=()=>this.disposed?(this.diposeSplatTreeWorker(),a(),!0):!1;n&&n(!1),ln(()=>{if(l())return;const c=[];if(e.dynamicMode){let u=0;for(let d=0;d<e.scenes.length;d++){const p=e.getScene(d).splatBuffer.getSplatCount(),g=o(u,p);c.push(g),u+=p}}else{const u=o(0,e.getSplatCount());c.push(u)}this.splatTreeWorker.onmessage=u=>{l()||u.data.subTrees&&(i&&i(!1),ln(()=>{if(!l()){for(let d of u.data.subTrees){const h=os.convertWorkerSubTree(d,e);this.subTrees.push(h)}this.diposeSplatTreeWorker(),i&&i(!0),ln(()=>{a()})}}))},ln(()=>{if(l())return;n&&n(!0);const u=c.map(d=>d.buffer);jg(this.splatTreeWorker,c,u,this.maxDepth,this.maxCentersPerNode)})})})};countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,i)=>{n.children.length===0&&i(n);for(let s of n.children)t(s,i)};for(let n of this.subTrees)t(n.rootNode,e)}}function $g(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function e0(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),A=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,x=o||e.has("OES_texture_float"),T=S&&x,E=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:A,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:x,floatVertexTextures:T,maxSamples:E}}const as={Default:0,Instant:2},Ui={None:0,Info:3},Vl=new $t,t0=new ri,Xs=6,n0=4,i0=4,s0=4,r0=6,o0=8,Jr=4,$r=4,Gl=1,a0=.012,l0=.003,Wl=1,Xl=16777216;class Tt extends mt{constructor(e=Mn.ThreeD,t=!1,n=!1,i=!1,s=1,o=!0,a=!1,l=!1,c=1024,u=Ui.None,d=0,h=1,p=.3){super(Vl,t0),this.renderer=void 0,this.splatRenderMode=e,this.dynamicMode=t,this.enableOptionalEffects=n,this.halfPrecisionCovariancesOnGPU=i,this.devicePixelRatio=s,this.enableDistancesComputationOnGPU=o,this.integerBasedDistancesComputation=a,this.antialiased=l,this.kernel2DSize=p,this.maxScreenSpaceSplatSize=c,this.logLevel=u,this.sphericalHarmonicsDegree=d,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=h,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new dn,this.calculatedSceneCenter=new D,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(e,t,n){const i=[];i.length=t.length;for(let s=0;s<t.length;s++){const o=t[s],a=n[s]||{};let l=a.position||[0,0,0],c=a.rotation||[0,0,0,1],u=a.scale||[1,1,1];const d=new D().fromArray(l),h=new ht().fromArray(c),p=new D().fromArray(u),g=Tt.createScene(o,d,h,p,a.splatAlphaRemovalThreshold||1,a.opacity,a.visible);e.add(g),i[s]=g}return i}static createScene(e,t,n,i,s,o=1,a=!0){return new Yg(e,t,n,i,s,o,a)}static buildSplatIndexMaps(e){const t=[],n=[];let i=0;for(let s=0;s<e.length;s++){const a=e[s].getMaxSplatCount();for(let l=0;l<a;l++)t[i]=l,n[i]=s,i++}return{localSplatIndexMap:t,sceneIndexMap:n}}buildSplatTree=function(e=[],t,n){return new Promise(i=>{this.disposeSplatTree(),this.baseSplatTree=new Jg(8,1e3);const s=performance.now(),o=new dt;this.baseSplatTree.processSplatMesh(this,a=>{this.getSplatColor(a,o);const l=this.getSceneIndexForSplat(a),c=e[l]||1;return o.w>=c},t,n).then(()=>{const a=performance.now()-s;if(this.logLevel>=Ui.Info&&console.log("SplatTree build: "+a+" ms"),this.disposed)i();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let l=0,c=0,u=0;this.splatTree.visitLeaves(d=>{const h=d.data.indexes.length;h>0&&(c+=h,u++,l++)}),this.logLevel>=Ui.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${l}`),c=c/u,console.log(`Avg splat count per node: ${c}`),console.log(`Total splat count: ${this.getSplatCount()}`)),i()}})})};build(e,t,n=!0,i=!1,s,o,a=!0){this.sceneOptions=t,this.finalBuild=i;const l=Tt.getTotalMaxSplatCountForSplatBuffers(e),c=Tt.buildScenes(this,e,t);if(n)for(let A=0;A<this.scenes.length&&A<c.length;A++){const m=c[A],f=this.getScene(A);m.copyTransformData(f)}this.scenes=c;let u=3;for(let A of e){const m=A.getMinSphericalHarmonicsDegree();m<u&&(u=m)}this.minSphericalHarmonicsDegree=Math.min(u,this.sphericalHarmonicsDegree);let d=!1;if(e.length!==this.lastBuildScenes.length)d=!0;else for(let A=0;A<e.length;A++)if(e[A]!==this.lastBuildScenes[A].splatBuffer){d=!0;break}let h=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==l||d)&&(h=!1),!h){this.boundingBox=new dn,a||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=Qg.build(l),this.splatRenderMode===Mn.ThreeD?this.material=or.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=ar.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const A=Tt.buildSplatIndexMaps(e);this.globalSplatIndexToLocalSplatIndexMap=A.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=A.sceneIndexMap}const p=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const g=this.refreshGPUDataFromSplatBuffers(h);for(let A=0;A<this.scenes.length;A++)this.lastBuildScenes[A]=this.scenes[A];return this.lastBuildSplatCount=p,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,i&&this.scenes.length>0&&this.buildSplatTree(t.map(A=>A.splatAlphaRemovalThreshold||1),s,o).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,g}freeIntermediateSplatData(){const e=t=>{delete t.source.data,delete t.image,t.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{e(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{e(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{e(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(t=>{t.needsUpdate=!0,t.onUpdate=()=>{e(t)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{e(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new dn,this.calculatedSceneCenter=new D,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==Vl&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let e in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(e)){const t=this.splatDataTextures[e];t.texture&&(t.texture.dispose(),t.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(e){this.onSplatTreeReadyCallback=e}getDataForDistancesComputation(e,t){const n=this.integerBasedDistancesComputation?this.getIntegerCenters(e,t,!0):this.getFloatCenters(e,t,!0),i=this.getSceneIndexes(e,t);return{centers:n,sceneIndexes:i}}refreshGPUDataFromSplatBuffers(e){const t=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(e);const n=e?this.lastBuildSplatCount:0,{centers:i,sceneIndexes:s}=this.getDataForDistancesComputation(n,t-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(i,s,e),{from:n,to:t-1,count:t-n,centers:i,sceneIndexes:s}}refreshGPUBuffersForDistancesComputation(e,t,n=!1){const i=n?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(n,e,i),this.updateGPUTransformIndexesBufferForDistancesComputation(n,t,i)}refreshDataTexturesFromSplatBuffers(e){const t=this.getSplatCount(!0),n=this.lastBuildSplatCount,i=t-1;e?this.updateBaseDataFromSplatBuffers(n,i):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(n,i),this.updateVisibleRegion(e)}setupDataTextures(){const e=this.getMaxSplatCount(),t=this.getSplatCount(!0);this.disposeTextures();const n=(v,w)=>{const M=new Ce(4096,1024);for(;M.x*M.y*v<e*w;)M.y*=2;return M},i=v=>v>=1?r0:i0,s=v=>{const w=i(v),M=n(w,6);return{elementsPerTexelStored:w,texSize:M}};let o=this.getTargetCovarianceCompressionLevel();const a=0,l=this.getTargetSphericalHarmonicsCompressionLevel();let c,u,d;if(this.splatRenderMode===Mn.ThreeD){const v=s(o);v.texSize.x*v.texSize.y>Xl&&o===0&&(o=1),c=new Float32Array(e*Xs)}else u=new Float32Array(e*3),d=new Float32Array(e*4);const h=new Float32Array(e*3),p=new Uint8Array(e*4);let g=Float32Array;l===1?g=Uint16Array:l===2&&(g=Uint8Array);const A=Li(this.minSphericalHarmonicsDegree),m=this.minSphericalHarmonicsDegree?new g(e*A):void 0,f=n($r,4),y=new Uint32Array(f.x*f.y*$r);Tt.updateCenterColorsPaddedData(0,t-1,h,p,y);const S=new Ln(y,f.x,f.y,Pi,Zt);if(S.internalFormat="RGBA32UI",S.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=S,this.material.uniforms.centersColorsTextureSize.value.copy(f),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:c,scales:u,rotations:d,centers:h,colors:p,sphericalHarmonics:m},centerColors:{data:y,texture:S,size:f}},this.splatRenderMode===Mn.ThreeD){const v=s(o),w=v.elementsPerTexelStored,M=v.texSize;let _=o>=1?Uint32Array:Float32Array;const R=o>=1?o0:s0,B=new _(M.x*M.y*R);o===0?B.set(c):Tt.updatePaddedCompressedCovariancesTextureData(c,B,0,0,c.length);let F;if(o>=1)F=new Ln(B,M.x,M.y,Pi,Zt),F.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=F;else{F=new Ln(B,M.x,M.y,Lt,an),this.material.uniforms.covariancesTexture.value=F;const L=new Ln(new Uint32Array(32),2,2,Pi,Zt);L.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=L,L.needsUpdate=!0}F.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=o>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(M),this.splatDataTextures.covariances={data:B,texture:F,size:M,compressionLevel:o,elementsPerTexelStored:w,elementsPerTexelAllocated:R}}else{const w=n(Jr,6);let M=Float32Array,_=an;const R=new M(w.x*w.y*Jr);Tt.updateScaleRotationsPaddedData(0,t-1,u,d,R);const B=new Ln(R,w.x,w.y,Lt,_);B.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=B,this.material.uniforms.scaleRotationsTextureSize.value.copy(w),this.splatDataTextures.scaleRotations={data:R,texture:B,size:w,compressionLevel:a}}if(m){const v=l===2?pn:qi;let w=A;w%2!==0&&w++;const M=this.minSphericalHarmonicsDegree===2?4:2,_=M===4?Lt:Qo;let R=n(M,w);if(R.x*R.y<=Xl){const B=R.x*R.y*M,F=new g(B);for(let z=0;z<t;z++){const N=A*z,X=w*z;for(let k=0;k<A;k++)F[X+k]=m[N+k]}const L=new Ln(F,R.x,R.y,_,v);L.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=L,this.splatDataTextures.sphericalHarmonics={componentCount:A,paddedComponentCount:w,data:F,textureCount:1,texture:L,size:R,compressionLevel:l,elementsPerTexel:M}}else{const B=A/3;w=B,w%2!==0&&w++,R=n(M,w);const F=R.x*R.y*M,L=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],z=[],N=[];for(let X=0;X<3;X++){const k=new g(F);z.push(k);for(let ne=0;ne<t;ne++){const ue=A*ne,ve=w*ne;if(B>=3){for(let ye=0;ye<3;ye++)k[ve+ye]=m[ue+X*3+ye];if(B>=8)for(let ye=0;ye<5;ye++)k[ve+3+ye]=m[ue+9+X*5+ye]}}const $=new Ln(k,R.x,R.y,_,v);N.push($),$.needsUpdate=!0,L[X].value=$}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:A,componentCountPerChannel:B,paddedComponentCount:w,data:z,textureCount:3,textures:N,size:R,compressionLevel:l,elementsPerTexel:M}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(R),this.material.uniforms.sphericalHarmonics8BitMode.value=l===2?1:0;for(let B=0;B<this.scenes.length;B++){const F=this.scenes[B].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[B]=F.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[B]=F.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const x=n(Gl,4),T=new Uint32Array(x.x*x.y*Gl);for(let v=0;v<t;v++)T[v]=this.globalSplatIndexToSceneIndexMap[v];const E=new Ln(T,x.x,x.y,cr,Zt);E.internalFormat="R32UI",E.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=E,this.material.uniforms.sceneIndexesTextureSize.value.copy(x),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:T,texture:E,size:x},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(e,t){const n=this.splatDataTextures.covariances,i=n?n.compressionLevel:void 0,s=this.splatDataTextures.scaleRotations,o=s?s.compressionLevel:void 0,a=this.splatDataTextures.sphericalHarmonics,l=a?a.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,i,o,l,e,t,e)}updateDataTexturesFromBaseData(e,t){const n=this.splatDataTextures.covariances,i=n?n.compressionLevel:void 0,s=this.splatDataTextures.scaleRotations,o=s?s.compressionLevel:void 0,a=this.splatDataTextures.sphericalHarmonics,l=a?a.compressionLevel:0,c=this.splatDataTextures.centerColors,u=c.data,d=c.texture;Tt.updateCenterColorsPaddedData(e,t,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,u);const h=this.renderer?this.renderer.properties.get(d):null;if(!h||!h.__webglTexture?d.needsUpdate=!0:this.updateDataTexture(u,c.texture,c.size,h,$r,n0,4,e,t),n){const y=n.texture,S=e*Xs,x=t*Xs;if(i===0)for(let E=S;E<=x;E++){const v=this.splatDataTextures.baseData.covariances[E];n.data[E]=v}else Tt.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,n.data,e*n.elementsPerTexelAllocated,S,x);const T=this.renderer?this.renderer.properties.get(y):null;!T||!T.__webglTexture?y.needsUpdate=!0:i===0?this.updateDataTexture(n.data,n.texture,n.size,T,n.elementsPerTexelStored,Xs,4,e,t):this.updateDataTexture(n.data,n.texture,n.size,T,n.elementsPerTexelAllocated,n.elementsPerTexelAllocated,2,e,t)}if(s){const y=s.data,S=s.texture,x=6,T=o===0?4:2;Tt.updateScaleRotationsPaddedData(e,t,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,y);const E=this.renderer?this.renderer.properties.get(S):null;!E||!E.__webglTexture?S.needsUpdate=!0:this.updateDataTexture(y,s.texture,s.size,E,Jr,x,T,e,t)}const p=this.splatDataTextures.baseData.sphericalHarmonics;if(p){let y=4;l===1?y=2:l===2&&(y=1);const S=(E,v,w,M,_)=>{const R=this.renderer?this.renderer.properties.get(E):null;!R||!R.__webglTexture?E.needsUpdate=!0:this.updateDataTexture(M,E,v,R,w,_,y,e,t)},x=a.componentCount,T=a.paddedComponentCount;if(a.textureCount===1){const E=a.data;for(let v=e;v<=t;v++){const w=x*v,M=T*v;for(let _=0;_<x;_++)E[M+_]=p[w+_]}S(a.texture,a.size,a.elementsPerTexel,E,T)}else{const E=a.componentCountPerChannel;for(let v=0;v<3;v++){const w=a.data[v];for(let M=e;M<=t;M++){const _=x*M,R=T*M;if(E>=3){for(let B=0;B<3;B++)w[R+B]=p[_+v*3+B];if(E>=8)for(let B=0;B<5;B++)w[R+3+B]=p[_+9+v*5+B]}}S(a.textures[v],a.size,a.elementsPerTexel,w,T)}}}const g=this.splatDataTextures.sceneIndexes,A=g.data;for(let y=this.lastBuildSplatCount;y<=t;y++)A[y]=this.globalSplatIndexToSceneIndexMap[y];const m=g.texture,f=this.renderer?this.renderer.properties.get(m):null;!f||!f.__webglTexture?m.needsUpdate=!0:this.updateDataTexture(A,g.texture,g.size,f,1,1,1,this.lastBuildSplatCount,t)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let e;for(let t=0;t<this.scenes.length;t++){const i=this.getScene(t).splatBuffer;(t===0||i.compressionLevel>e)&&(e=i.compressionLevel)}return e}getMinimumSplatBufferCompressionLevel(){let e;for(let t=0;t<this.scenes.length;t++){const i=this.getScene(t).splatBuffer;(t===0||i.compressionLevel<e)&&(e=i.compressionLevel)}return e}static computeTextureUpdateRegion(e,t,n,i,s){const o=s/i,a=e*o,l=Math.floor(a/n),c=l*n*i,u=t*o,d=Math.floor(u/n),h=d*n*i+n*i;return{dataStart:c,dataEnd:h,startRow:l,endRow:d}}updateDataTexture(e,t,n,i,s,o,a,l,c){const u=this.renderer.getContext(),d=Tt.computeTextureUpdateRegion(l,c,n.x,s,o),h=d.dataEnd-d.dataStart,p=new e.constructor(e.buffer,d.dataStart*a,h),g=d.endRow-d.startRow+1,A=this.webGLUtils.convert(t.type),m=this.webGLUtils.convert(t.format,t.colorSpace),f=u.getParameter(u.TEXTURE_BINDING_2D);u.bindTexture(u.TEXTURE_2D,i.__webglTexture),u.texSubImage2D(u.TEXTURE_2D,0,0,d.startRow,n.x,g,m,A,p),u.bindTexture(u.TEXTURE_2D,f)}static updatePaddedCompressedCovariancesTextureData(e,t,n,i,s){let o=new DataView(t.buffer),a=n,l=0;for(let c=i;c<=s;c+=2)o.setUint16(a*2,e[c],!0),o.setUint16(a*2+2,e[c+1],!0),a+=2,l++,l>=3&&(a+=2,l=0)}static updateCenterColorsPaddedData(e,t,n,i,s){for(let o=e;o<=t;o++){const a=o*4,l=o*3,c=o*4;s[c]=Jm(i,a),s[c+1]=Xr(n[l]),s[c+2]=Xr(n[l+1]),s[c+3]=Xr(n[l+2])}}static updateScaleRotationsPaddedData(e,t,n,i,s){for(let a=e;a<=t;a++){const l=a*3,c=a*4,u=a*6;s[u]=n[l],s[u+1]=n[l+1],s[u+2]=n[l+2],s[u+3]=i[c],s[u+4]=i[c+1],s[u+5]=i[c+2]}}updateVisibleRegion(e){const t=this.getSplatCount(!0),n=new D;if(!e){const s=new D;this.scenes.forEach(o=>{s.add(o.splatBuffer.sceneCenter)}),s.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(s),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const i=e?this.lastBuildSplatCount:0;for(let s=i;s<t;s++){this.getSplatCenter(s,n,!0);const o=n.sub(this.calculatedSceneCenter).length();o>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=o)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>Wl&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-Wl,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(e=as.Default){const t=a0*this.sceneFadeInRateMultiplier,n=l0*this.sceneFadeInRateMultiplier,i=this.finalBuild?t:n,s=e===as.Default?i:n;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*s+this.visibleRegionFadeStartRadius;const a=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,l=a||e===as.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=l,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!a}updateRenderIndexes(e,t){const n=this.geometry;n.attributes.splatIndex.set(e),n.attributes.splatIndex.needsUpdate=!0,t>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),n.instanceCount=t,n.setDrawRange(0,t)}updateTransforms(){for(let e=0;e<this.scenes.length;e++)this.getScene(e).updateTransform(this.dynamicMode)}updateUniforms=(function(){const e=new Ce;return function(t,n,i,s,o,a){if(this.getSplatCount()>0){if(e.set(t.x*this.devicePixelRatio,t.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(e),this.material.uniforms.basisViewport.value.set(1/e.x,1/e.y),this.material.uniforms.focal.value.set(n,i),this.material.uniforms.orthographicMode.value=s?1:0,this.material.uniforms.orthoZoom.value=o,this.material.uniforms.inverseFocalAdjustment.value=a,this.dynamicMode)for(let c=0;c<this.scenes.length;c++)this.material.uniforms.transforms.value[c].copy(this.getScene(c).transform);if(this.enableOptionalEffects)for(let c=0;c<this.scenes.length;c++)this.material.uniforms.sceneOpacity.value[c]=bt(this.getScene(c).opacity,0,1),this.material.uniforms.sceneVisibility.value[c]=this.getScene(c).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}})();setSplatScale(e=1){this.splatScale=e,this.material.uniforms.splatScale.value=e,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(e){this.pointCloudModeEnabled=e,this.material.uniforms.pointCloudModeEnabled.value=e?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(e=!1){return e?Tt.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(e){let t=0;for(let n of e)n&&n.splatBuffer&&(t+=n.splatBuffer.getSplatCount());return t}static getTotalSplatCountForSplatBuffers(e){let t=0;for(let n of e)t+=n.getSplatCount();return t}getMaxSplatCount(){return Tt.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(e){let t=0;for(let n of e)n&&n.splatBuffer&&(t+=n.splatBuffer.getMaxSplatCount());return t}static getTotalMaxSplatCountForSplatBuffers(e){let t=0;for(let n of e)t+=n.getMaxSplatCount();return t}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const e=this.renderer.getContext();this.distancesTransformFeedback.vao&&(e.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(e.deleteProgram(this.distancesTransformFeedback.program),e.deleteShader(this.distancesTransformFeedback.vertexShader),e.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(e.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const e=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,e.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(e.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(e){if(e!==this.renderer){this.renderer=e;const t=this.renderer.getContext(),n=new $g(t),i=new e0(t,n,{});if(n.init(i),this.webGLUtils=new Cc(t,n),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:s,sceneIndexes:o}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(s,o)}}}setupDistancesComputationTransformFeedback=(function(){let e;return function(){const t=this.getMaxSplatCount();if(!this.renderer)return;const n=this.lastRenderer!==this.renderer,i=e!==t;if(!n&&!i)return;n?this.disposeDistancesComputationGPUResources():i&&this.disposeDistancesComputationGPUBufferResources();const s=this.renderer.getContext(),o=(h,p,g)=>{const A=h.createShader(p);if(!A)return console.error("Fatal error: gl could not create a shader object."),null;if(h.shaderSource(A,g),h.compileShader(A),!h.getShaderParameter(A,h.COMPILE_STATUS)){let f="unknown";p===h.VERTEX_SHADER?f="vertex shader":p===h.FRAGMENT_SHADER&&(f="fragement shader");const y=h.getShaderInfoLog(A);return console.error("Failed to compile "+f+" with these errors:"+y),h.deleteShader(A),null}return A};let a;this.integerBasedDistancesComputation?(a=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?a+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${ot.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:a+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(a=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?a+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${ot.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:a+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);const l=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,c=s.getParameter(s.VERTEX_ARRAY_BINDING),u=s.getParameter(s.CURRENT_PROGRAM),d=u?s.getProgramParameter(u,s.DELETE_STATUS):!1;if(n&&(this.distancesTransformFeedback.vao=s.createVertexArray()),s.bindVertexArray(this.distancesTransformFeedback.vao),n){const h=s.createProgram(),p=o(s,s.VERTEX_SHADER,a),g=o(s,s.FRAGMENT_SHADER,l);if(!p||!g)throw new Error("Could not compile shaders for distances computation on GPU.");if(s.attachShader(h,p),s.attachShader(h,g),s.transformFeedbackVaryings(h,["distance"],s.SEPARATE_ATTRIBS),s.linkProgram(h),!s.getProgramParameter(h,s.LINK_STATUS)){const m=s.getProgramInfoLog(h);throw console.error("Fatal error: Failed to link program: "+m),s.deleteProgram(h),s.deleteShader(g),s.deleteShader(p),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=h,this.distancesTransformFeedback.vertexShader=p,this.distancesTransformFeedback.vertexShader=g}if(s.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=s.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=s.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let h=0;h<this.scenes.length;h++)this.distancesTransformFeedback.transformsLocs[h]=s.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${h}]`)}else this.distancesTransformFeedback.modelViewProjLoc=s.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(n||i)&&(this.distancesTransformFeedback.centersBuffer=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?s.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,s.INT,0,0):s.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,s.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),s.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,s.UNSIGNED_INT,0,0))),(n||i)&&(this.distancesTransformFeedback.outDistancesBuffer=s.createBuffer()),s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),s.bufferData(s.ARRAY_BUFFER,t*4,s.STATIC_READ),n&&(this.distancesTransformFeedback.id=s.createTransformFeedback()),s.bindTransformFeedback(s.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),u&&d!==!0&&s.useProgram(u),c&&s.bindVertexArray(c),this.lastRenderer=this.renderer,e=t}})();updateGPUCentersBufferForDistancesComputation(e,t,n){if(!this.renderer)return;const i=this.renderer.getContext(),s=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao);const o=this.integerBasedDistancesComputation?Uint32Array:Float32Array,a=16,l=n*a;if(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),e)i.bufferSubData(i.ARRAY_BUFFER,l,t);else{const c=new o(this.getMaxSplatCount()*a);c.set(t),i.bufferData(i.ARRAY_BUFFER,c,i.STATIC_DRAW)}i.bindBuffer(i.ARRAY_BUFFER,null),s&&i.bindVertexArray(s)}updateGPUTransformIndexesBufferForDistancesComputation(e,t,n){if(!this.renderer||!this.dynamicMode)return;const i=this.renderer.getContext(),s=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao);const o=n*4;if(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),e)i.bufferSubData(i.ARRAY_BUFFER,o,t);else{const a=new Uint32Array(this.getMaxSplatCount()*4);a.set(t),i.bufferData(i.ARRAY_BUFFER,a,i.STATIC_DRAW)}i.bindBuffer(i.ARRAY_BUFFER,null),s&&i.bindVertexArray(s)}getSceneIndexes(e,t){let n;const i=t-e+1;n=new Uint32Array(i);for(let s=e;s<=t;s++)n[s]=this.globalSplatIndexToSceneIndexMap[s];return n}fillTransformsArray=(function(){const e=[];return function(t){e.length!==t.length&&(e.length=t.length);for(let n=0;n<this.scenes.length;n++){const s=this.getScene(n).transform.elements;for(let o=0;o<16;o++)e[n*16+o]=s[o]}t.set(e)}})();computeDistancesOnGPU=(function(){const e=new Le;return function(t,n){if(!this.renderer)return;const i=this.renderer.getContext(),s=i.getParameter(i.VERTEX_ARRAY_BINDING),o=i.getParameter(i.CURRENT_PROGRAM),a=o?i.getProgramParameter(o,i.DELETE_STATUS):!1;if(i.bindVertexArray(this.distancesTransformFeedback.vao),i.useProgram(this.distancesTransformFeedback.program),i.enable(i.RASTERIZER_DISCARD),this.dynamicMode)for(let u=0;u<this.scenes.length;u++)if(e.copy(this.getScene(u).transform),e.premultiply(t),this.integerBasedDistancesComputation){const d=Tt.getIntegerMatrixArray(e),h=[d[2],d[6],d[10],d[14]];i.uniform4i(this.distancesTransformFeedback.transformsLocs[u],h[0],h[1],h[2],h[3])}else i.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[u],!1,e.elements);else if(this.integerBasedDistancesComputation){const u=Tt.getIntegerMatrixArray(t),d=[u[2],u[6],u[10]];i.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,d[0],d[1],d[2])}else{const u=[t.elements[2],t.elements[6],t.elements[10]];i.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,u[0],u[1],u[2])}i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),i.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?i.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,i.INT,0,0):i.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,i.FLOAT,!1,0,0),this.dynamicMode&&(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),i.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),i.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,i.UNSIGNED_INT,0,0)),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),i.beginTransformFeedback(i.POINTS),i.drawArrays(i.POINTS,0,this.getSplatCount()),i.endTransformFeedback(),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,null),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,null),i.disable(i.RASTERIZER_DISCARD);const l=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);i.flush();const c=new Promise(u=>{const d=()=>{if(this.disposed)u();else switch(i.clientWaitSync(l,0,0)){case i.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(d),this.computeDistancesOnGPUSyncTimeout;case i.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,i.deleteSync(l);const A=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao),i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),i.getBufferSubData(i.ARRAY_BUFFER,0,n),i.bindBuffer(i.ARRAY_BUFFER,null),A&&i.bindVertexArray(A),u()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(d)});return o&&a!==!0&&i.useProgram(o),s&&i.bindVertexArray(s),c}})();getLocalSplatParameters(e,t,n){n==null&&(n=!this.dynamicMode),t.splatBuffer=this.getSplatBufferForSplat(e),t.localIndex=this.getSplatLocalIndex(e),t.sceneTransform=n?this.getSceneTransformForSplat(e):null}fillSplatDataArrays(e,t,n,i,s,o,a,l=0,c=0,u=1,d,h,p=0,g){const A=new D;A.x=void 0,A.y=void 0,this.splatRenderMode===Mn.ThreeD?A.z=void 0:A.z=1;const m=new Le;let f=0,y=this.scenes.length-1;g!=null&&g>=0&&g<=this.scenes.length&&(f=g,y=g);for(let S=f;S<=y;S++){a==null&&(a=!this.dynamicMode);const x=this.getScene(S),T=x.splatBuffer;let E;if(a&&(this.getSceneTransform(S,m),E=m),e&&T.fillSplatCovarianceArray(e,E,d,h,p,l),t||n){if(!t||!n)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');T.fillSplatScaleRotationArray(t,n,E,d,h,p,c,A)}i&&T.fillSplatCenterArray(i,E,d,h,p),s&&T.fillSplatColorArray(s,x.minimumAlpha,d,h,p),o&&T.fillSphericalHarmonicsArray(o,this.minSphericalHarmonicsDegree,E,d,h,p,u),p+=T.getSplatCount()}}getIntegerCenters(e,t,n=!1){const i=t-e+1,s=new Float32Array(i*3);this.fillSplatDataArrays(null,null,null,s,null,null,void 0,void 0,void 0,void 0,e);let o,a=n?4:3;o=new Int32Array(i*a);for(let l=0;l<i;l++){for(let c=0;c<3;c++)o[l*a+c]=Math.round(s[l*3+c]*1e3);n&&(o[l*a+3]=1e3)}return o}getFloatCenters(e,t,n=!1){const i=t-e+1,s=new Float32Array(i*3);if(this.fillSplatDataArrays(null,null,null,s,null,null,void 0,void 0,void 0,void 0,e),!n)return s;let o=new Float32Array(i*4);for(let a=0;a<i;a++){for(let l=0;l<3;l++)o[a*4+l]=s[a*3+l];o[a*4+3]=1}return o}getSplatCenter=(function(){const e={};return function(t,n,i){this.getLocalSplatParameters(t,e,i),e.splatBuffer.getSplatCenter(e.localIndex,n,e.sceneTransform)}})();getSplatScaleAndRotation=(function(){const e={},t=new D;return function(n,i,s,o){this.getLocalSplatParameters(n,e,o),t.x=void 0,t.y=void 0,t.z=void 0,this.splatRenderMode===Mn.TwoD&&(t.z=0),e.splatBuffer.getSplatScaleAndRotation(e.localIndex,i,s,e.sceneTransform,t)}})();getSplatColor=(function(){const e={};return function(t,n){this.getLocalSplatParameters(t,e),e.splatBuffer.getSplatColor(e.localIndex,n)}})();getSceneTransform(e,t){const n=this.getScene(e);n.updateTransform(this.dynamicMode),t.copy(n.transform)}getScene(e){if(e<0||e>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[e]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).splatBuffer}getSceneIndexForSplat(e){return this.globalSplatIndexToSceneIndexMap[e]}getSceneTransformForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).transform}getSplatLocalIndex(e){return this.globalSplatIndexToLocalSplatIndexMap[e]}static getIntegerMatrixArray(e){const t=e.elements,n=[];for(let i=0;i<16;i++)n[i]=Math.round(t[i]*1e3);return n}computeBoundingBox(e=!1,t){let n=this.getSplatCount();if(t!=null){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");n=this.scenes[t].splatBuffer.getSplatCount()}const i=new Float32Array(n*3);this.fillSplatDataArrays(null,null,null,i,null,null,e,void 0,void 0,void 0,void 0,t);const s=new D,o=new D;for(let a=0;a<n;a++){const l=a*3,c=i[l],u=i[l+1],d=i[l+2];(a===0||c<s.x)&&(s.x=c),(a===0||u<s.y)&&(s.y=u),(a===0||d<s.z)&&(s.z=d),(a===0||c>o.x)&&(o.x=c),(a===0||u>o.y)&&(o.y=u),(a===0||d>o.z)&&(o.z=d)}return new dn(s,o)}}var c0="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",ql="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",u0="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",d0="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function h0(r){let e,t,n,i,s,o,a,l,c,u,d,h,p,g,A,m,f,y,S,x;function T(E,v,w,M,_,R,B){const F=performance.now();if(!n&&(new Uint32Array(t,a,_.byteLength/x.BytesPerInt).set(_),new Float32Array(t,u,B.byteLength/x.BytesPerFloat).set(B),M)){let k;i?k=new Int32Array(t,d,R.byteLength/x.BytesPerInt):k=new Float32Array(t,d,R.byteLength/x.BytesPerFloat),k.set(R)}m||(m=new Uint32Array(y)),new Float32Array(t,A,16).set(w),new Uint32Array(t,p,y).set(m),e.exports.sortIndexes(a,g,d,h,p,A,l,c,u,y,E,v,o,M,i,s);const L={sortDone:!0,splatSortCount:E,splatRenderCount:v,sortTime:0};if(!n){const N=new Uint32Array(t,l,v);(!f||f.length<v)&&(f=new Uint32Array(v)),f.set(N),L.sortedIndexes=f}const z=performance.now();L.sortTime=z-F,r.postMessage(L)}r.onmessage=E=>{if(E.data.centers)centers=E.data.centers,sceneIndexes=E.data.sceneIndexes,i?new Int32Array(t,g+E.data.range.from*x.BytesPerInt*4,E.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,g+E.data.range.from*x.BytesPerFloat*4,E.data.range.count*4).set(new Float32Array(centers)),s&&new Uint32Array(t,c+E.data.range.from*4,E.data.range.count).set(new Uint32Array(sceneIndexes)),S=E.data.range.from+E.data.range.count;else if(E.data.sort){const v=Math.min(E.data.sort.splatRenderCount||0,S),w=Math.min(E.data.sort.splatSortCount||0,S),M=E.data.sort.usePrecomputedDistances;let _,R,B;n||(_=E.data.sort.indexesToSort,B=E.data.sort.transforms,M&&(R=E.data.sort.precomputedDistances)),T(w,v,E.data.sort.modelViewProj,M,_,R,B)}else if(E.data.init){x=E.data.init.Constants,o=E.data.init.splatCount,n=E.data.init.useSharedMemory,i=E.data.init.integerBasedSort,s=E.data.init.dynamicMode,y=E.data.init.distanceMapRange,S=0;const v=i?x.BytesPerInt*4:x.BytesPerFloat*4,w=new Uint8Array(E.data.init.sorterWasmBytes),M=16*x.BytesPerFloat,_=o*x.BytesPerInt,R=o*v,B=M,F=i?o*x.BytesPerInt:o*x.BytesPerFloat,L=o*x.BytesPerInt,z=o*x.BytesPerInt,N=i?y*x.BytesPerInt*2:y*x.BytesPerFloat*2,X=s?o*x.BytesPerInt:0,k=s?x.MaxScenes*M:0,$=x.MemoryPageSize*32,ne=_+R+B+F+L+N+z+X+k+$,ue=Math.floor(ne/x.MemoryPageSize)+1,ve={module:{},env:{memory:new WebAssembly.Memory({initial:ue,maximum:ue,shared:!0})}};WebAssembly.compile(w).then(ye=>WebAssembly.instantiate(ye,ve)).then(ye=>{e=ye,a=0,g=a+_,A=g+R,d=A+B,h=d+F,p=h+L,l=p+N,c=l+z,u=c+X,t=ve.env.memory.buffer,n?r.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:a,sortedIndexesBuffer:t,sortedIndexesOffset:l,precomputedDistancesBuffer:t,precomputedDistancesOffset:d,transformsBuffer:t,transformsOffset:u}):r.postMessage({sortSetupPhase1Complete:!0})})}}}function f0(r,e,t,n,i,s=ot.DefaultSplatSortDistanceMapPrecision){const o=new Worker(URL.createObjectURL(new Blob(["(",h0.toString(),")(self)"],{type:"application/javascript"})));let a=c0;const l=na()?Tc():null;!t&&!e?(a=ql,l&&l.major<=16&&l.minor<4&&(a=d0)):t?e||l&&l.major<=16&&l.minor<4&&(a=u0):a=ql;const c=atob(a),u=new Uint8Array(c.length);for(let d=0;d<c.length;d++)u[d]=c.charCodeAt(d);return o.postMessage({init:{sorterWasmBytes:u.buffer,splatCount:r,useSharedMemory:e,integerBasedSort:n,dynamicMode:i,distanceMapRange:1<<s,Constants:{BytesPerFloat:ot.BytesPerFloat,BytesPerInt:ot.BytesPerInt,MemoryPageSize:ot.MemoryPageSize,MaxScenes:ot.MaxScenes}}}),o}const bi={None:0,VR:1,AR:2};class Xi{static createButton(e,t={}){const n=document.createElement("button");function i(){let c=null;async function u(p){p.addEventListener("end",d),await e.xr.setSession(p),n.textContent="EXIT VR",c=p}function d(){c.removeEventListener("end",d),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const h={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",h).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(u).catch(p=>{console.warn(p)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(u).catch(p=>{console.warn(p)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="VR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():o(),c&&Xi.xrSessionIsGranted&&n.click()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Xi.xrSessionIsGranted=!0})}}}Xi.xrSessionIsGranted=!1;Xi.registerSessionGrantedListener();class p0{static createButton(e,t={}){const n=document.createElement("button");function i(){if(t.domOverlay===void 0){const h=document.createElement("div");h.style.display="none",document.body.appendChild(h);const p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.setAttribute("width",38),p.setAttribute("height",38),p.style.position="absolute",p.style.right="20px",p.style.top="20px",p.addEventListener("click",function(){c.end()}),h.appendChild(p);const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width",2),p.appendChild(g),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:h}}let c=null;async function u(h){h.addEventListener("end",d),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(h),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=h}function d(){c.removeEventListener("end",d),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(h=>{console.warn(h)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(h=>{console.warn(h)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="AR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?i():o()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const eo={Always:0,Never:2},m0=50,g0=.75,A0=15e5,x0=10,_0=2.5,S0=60;class Di{constructor(e={}){if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new D().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new D().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new D().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||bi.None,this.webXRMode!==bi.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||eo.Always,this.sceneRevealMode=e.sceneRevealMode||as.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||Ui.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,na()){const n=Tc();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=Mn.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||ot.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=bt(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new qg,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new D,this.nextCameraTarget=new D,this.mousePosition=new Ce,this.mouseDownPosition=new Ce,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new ma(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new Hg(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new kg(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new Tt(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new ad,this.sceneHelper=new rs(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new Ce;this.getRenderDimensions(e),this.perspectiveCamera=new Kt(m0,e.x/e.y,.1,1e3),this.orthographicCamera=new Jo(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new Ce;this.getRenderDimensions(e),this.renderer=new Zm({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new $e(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===bi.VR?this.rootElement.appendChild(Xi.createButton(this.renderer,e)):this.webXRMode===bi.AR&&this.rootElement.appendChild(p0.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===bi.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new Ws(this.camera,this.renderer.domElement):this.perspectiveControls=new Ws(this.camera,this.renderer.domElement):(this.perspectiveControls=new Ws(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new Ws(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===bi.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onKeyDown=(function(){const e=new D,t=new Le,n=new Le;return function(i){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),i.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}})();onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=Ei()}onMouseUp=(function(){const e=new Ce;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),Ei()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}})();onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}checkForFocalPointChange=(function(){const e=new Ce,t=new D,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const s=n[0].origin;t.copy(s).sub(this.camera.position),t.length()>g0&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(s),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=Ei())}}})();getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const i=a=>{a.saveState(),a.reset()},s=this.controls,o=e?this.orthographicControls:this.perspectiveControls;i(o),i(s),o.target.copy(s.target),e?Di.setCameraZoomFromPosition(n,t,s):Di.setCameraPositionFromZoom(n,t,o),this.controls=o,this.camera.lookAt(this.controls.target)}}static setCameraPositionFromZoom=(function(){const e=new D;return function(t,n,i){const s=1/(n.zoom*.001);e.copy(i.target).sub(t.position).normalize().multiplyScalar(s).negate(),t.position.copy(i.target).add(e)}})();static setCameraZoomFromPosition=(function(){const e=new D;return function(t,n,i){const s=e.copy(i.target).sub(n.position).length();t.zoom=1/(s*.001)}})();updateSplatMesh=(function(){const e=new Ce;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,i=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,s=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,o=this.focalAdjustment*s,a=1/o;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*o,i*o,this.camera.isOrthographicCamera,this.camera.zoom||1,a)}}})();adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const n=this.renderer.xr.getCamera().projectionMatrix.elements[0],i=this.camera.projectionMatrix.elements[0];e.x*=i/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:Nl(e),i=Di.isProgressivelyLoadable(n)&&t.progressiveLoad,s=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let o=null;s&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},l=(A,m,f)=>{if(s)if(f===St.Downloading)if(A==100)this.loadingSpinner.setMessageForTask(o,"Download complete!");else if(i)this.loadingSpinner.setMessageForTask(o,"Downloading splats...");else{const y=m?`: ${m}`:"...";this.loadingSpinner.setMessageForTask(o,`Downloading${y}`)}else f===St.Processing&&this.loadingSpinner.setMessageForTask(o,"Processing splats...")};let c=!1,u=0;const d=(A,m)=>{s&&((A&&i||m&&!i)&&(this.loadingSpinner.removeTask(o),!m&&!c&&this.loadingProgressBar.show()),i&&(m?(c=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(u)))},h=(A,m,f)=>{u=A,l(A,m,f),t.onProgress&&t.onProgress(A,m,f)},p=(A,m,f)=>{!i&&t.onProgress&&t.onProgress(0,"0%",St.Processing);const y={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([A],[y],f,m&&s,s,i,i).then(()=>{!i&&t.onProgress&&t.onProgress(100,"100%",St.Processing),d(m,f)})};return(i?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,p.bind(this),h,a.bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,i,s,o,a){const l=this.downloadSplatSceneToSplatBuffer(e,n,s,!1,void 0,t,a),c=qr(l.abortHandler);return l.then(u=>(this.removeSplatSceneDownloadPromise(l),i(u,!0,!0).then(()=>{c.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(u=>{o&&o(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(l);const d=u instanceof $s?u:new Error(`Viewer::addSplatScene -> Could not load file ${e}`);c.reject(d)}),this.addSplatSceneDownloadPromise(l),this.setSplatSceneDownloadAndBuildPromise(c.promise),c.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,i,s,o,a){let l=0,c=!1;const u=[],d=()=>{if(u.length>0&&!c&&!this.isDisposingOrDisposed()){c=!0;const m=u.shift();i(m.splatBuffer,m.firstBuild,m.finalBuild).then(()=>{c=!1,m.firstBuild?g.resolve():m.finalBuild&&(A.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),u.length>0&&ln(()=>d())})}},h=(m,f)=>{this.isDisposingOrDisposed()||(f||u.length===0||m.getSplatCount()>u[0].splatBuffer.getSplatCount())&&(u.push({splatBuffer:m,firstBuild:l===0,finalBuild:f}),l++,d())},p=this.downloadSplatSceneToSplatBuffer(e,n,s,!0,h,t,a),g=qr(p.abortHandler),A=qr();return this.addSplatSceneDownloadPromise(p),this.setSplatSceneDownloadAndBuildPromise(A.promise),p.then(()=>{this.removeSplatSceneDownloadPromise(p)}).catch(m=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(p);const f=m instanceof $s?m:new Error("Viewer::addSplatScene -> Could not load one or more scenes");g.reject(f),o&&o(f)}),g.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const i=e.length,s=[];let o;t&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));const a=(d,h,p,g)=>{s[d]=h;let A=0;for(let m=0;m<i;m++)A+=s[m]||0;A=A/i,p=`${A.toFixed(2)}%`,t&&g===St.Downloading&&this.loadingSpinner.setMessageForTask(o,A==100?"Download complete!":`Downloading: ${p}`),n&&n(A,p,g)},l=[],c=[];for(let d=0;d<e.length;d++){const h=e[d],p=h.format!==void 0&&h.format!==null?h.format:Nl(h.path),g=this.downloadSplatSceneToSplatBuffer(h.path,h.splatAlphaRemovalThreshold,a.bind(this,d),!1,void 0,p,h.headers);l.push(g),c.push(g.promise)}const u=new On((d,h)=>{Promise.all(c).then(p=>{t&&this.loadingSpinner.removeTask(o),n&&n(0,"0%",St.Processing),this.addSplatBuffers(p,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",St.Processing),this.clearSplatSceneDownloadAndBuildPromise(),d()})}).catch(p=>{t&&this.loadingSpinner.removeTask(o),this.clearSplatSceneDownloadAndBuildPromise();const g=p instanceof $s?p:new Error("Viewer::addSplatScenes -> Could not load one or more splat scenes.");h(g)}).finally(()=>{this.removeSplatSceneDownloadPromise(u)})},d=>{for(let h of l)h.abort(d)});return this.addSplatSceneDownloadPromise(u),this.setSplatSceneDownloadAndBuildPromise(u),u}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,i=!1,s=void 0,o,a){const l=i?!1:this.optimizeSplatData;try{if(o===yn.Splat)return pa.loadFromURL(e,n,i,s,t,this.inMemoryCompressionLevel,l,a);if(o===yn.KSplat)return ss.loadFromURL(e,n,i,s,a);if(o===yn.Ply)return fa.loadFromURL(e,n,i,s,t,this.inMemoryCompressionLevel,l,this.sphericalHarmonicsDegree,a)}catch(c){throw c instanceof ha?new Error("File type or server does not support progressive loading."):c}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===yn.Splat||e===yn.KSplat||e===yn.Ply}addSplatBuffers=(function(){return function(e,t=[],n=!0,i=!0,s=!0,o=!1,a=!1,l=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let c=null;const u=()=>{c!==null&&(this.loadingSpinner.removeTask(c),c=null)};return this.splatRenderReady=!1,new Promise(d=>{i&&(c=this.loadingSpinner.addTask("Processing splats...")),ln(()=>{if(this.isDisposingOrDisposed())d();else{const h=this.addSplatBuffersToMesh(e,t,n,s,o,l),p=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==p&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:h.centers.buffer,sceneIndexes:h.sceneIndexes.buffer,range:{from:h.from,to:h.to,count:h.count}}),(!this.sortWorker&&p>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(A=>{!this.sortWorker||!A?(this.splatRenderReady=!0,u(),d()):(a?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{u(),d()}))})})}},!0)})}})();addSplatBuffersToMesh=(function(){let e;return function(t,n,i=!0,s=!1,o=!1,a=!0){if(this.isDisposingOrDisposed())return;let l=[],c=[];o||(l=this.splatMesh.scenes.map(p=>p.splatBuffer)||[],c=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(p=>p):[]),l.push(...t),c.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const u=p=>{if(this.isDisposingOrDisposed())return;const g=this.splatMesh.getSplatCount();s&&g>=A0&&!p&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},d=p=>{this.isDisposingOrDisposed()||p&&e&&(this.loadingSpinner.removeTask(e),e=null)},h=this.splatMesh.build(l,c,!0,i,u,d,a);return i&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),h}})();setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,i=e.getSplatCount(),s=e.getMaxSplatCount();this.sortWorker=f0(s,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=o=>{if(o.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,o.data.splatRenderCount);else{const a=new Uint32Array(o.data.sortedIndexes.buffer,0,o.data.splatRenderCount);this.splatMesh.updateRenderIndexes(a,o.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=o.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(a=>{a()}),this.runAfterNextSort.length=0)}else if(o.data.sortCanceled)this.sortRunning=!1;else if(o.data.sortSetupPhase1Complete){this.logLevel>=Ui.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(o.data.sortedIndexesBuffer,o.data.sortedIndexesOffset,s),this.sortWorkerIndexesToSort=new Uint32Array(o.data.indexesToSortBuffer,o.data.indexesToSortOffset,s),this.sortWorkerPrecomputedDistances=new n(o.data.precomputedDistancesBuffer,o.data.precomputedDistancesOffset,s),this.sortWorkerTransforms=new Float32Array(o.data.transformsBuffer,o.data.transformsOffset,ot.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(s),this.sortWorkerPrecomputedDistances=new n(s),this.sortWorkerTransforms=new Float32Array(ot.MaxScenes*16));for(let a=0;a<i;a++)this.sortWorkerIndexesToSort[a]=a;if(this.sortWorker.maxSplatCount=s,this.logLevel>=Ui.Info){console.log("Sorting web worker ready.");const a=this.splatMesh.getSplatDataTextures(),l=a.covariances.size,c=a.centerColors.size;console.log("Covariances texture size: "+l.x+" x "+l.y),console.log("Centers/colors texture size: "+c.x+" x "+c.y)}t()}}})}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((i,s)=>{let o;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),o=this.loadingSpinner.addTask("Removing splat scene..."));const a=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(o))},l=u=>{a(),this.splatSceneRemovalPromise=null,u?s(u):i()},c=()=>this.isDisposingOrDisposed()?(l(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(c())return;const u=[],d=[],h=[];for(let p=0;p<this.splatMesh.scenes.length;p++){let g=!1;for(let A of e)if(A===p){g=!0;break}if(!g){const A=this.splatMesh.scenes[p];u.push(A.splatBuffer),d.push(this.splatMesh.sceneOptions[p]),h.push({position:A.position.clone(),quaternion:A.quaternion.clone(),scale:A.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=as.Instant,this.createSplatMesh(),this.addSplatBuffers(u,d,!0,!1,!0).then(()=>{c()||(a(),this.splatMesh.scenes.forEach((p,g)=>{p.position.copy(h[g].position),p.quaternion.copy(h[g].quaternion),p.scale.copy(h[g].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(c()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,l()})}))}).catch(p=>{l(p)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const i=this.splatSceneDownloadPromises[n];t.push(i),e.push(i.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}shouldRender=(function(){let e=0;const t=new D,n=new ht,i=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let s=!1,o=!1;if(this.camera){const a=this.camera.position,l=this.camera.quaternion;o=Math.abs(a.x-t.x)>i||Math.abs(a.y-t.y)>i||Math.abs(a.z-t.z)>i||Math.abs(l.x-n.x)>i||Math.abs(l.y-n.y)>i||Math.abs(l.z-n.z)>i||Math.abs(l.w-n.w)>i}return s=this.renderMode!==eo.Never&&(e===0||this.splatMesh.visibleRegionChanging||o||this.renderMode===eo.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,s}})();render=(function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=n=>{for(let i of n.children)if(i.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}})();update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&Di.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateFPS=(function(){let e=Ei(),t=0;return function(){if(this.consecutiveRenderFrames>S0){const n=Ei();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}})();updateForRendererSizeChanges=(function(){const e=new Ce,t=new Ce;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}})();timingSensitiveUpdates=(function(){let e;return function(){const t=Ei();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}})();updateCameraTransition=(function(){let e=new D,t=new D,n=new D;return function(i){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const s=Math.acos(t.dot(n)),a=(s/(Math.PI/3)*.65+.3)/s*(i-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,a),this.camera.lookAt(e),this.controls.target.copy(e),a>=1&&(this.transitioningCameraTarget=!1)}}})();updateFocusMarker=(function(){const e=new Ce;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const i=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let s=Math.min(i+x0*n,1);this.sceneHelper.setFocusMarkerOpacity(s),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let i;if(t?i=1:i=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),i>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let s=Math.max(i-_0*n,0);this.sceneHelper.setFocusMarkerOpacity(s),s===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}i>0&&this.forceRenderNextFrame(),t=!1}}})();updateMeshCursor=(function(){const e=[],t=new Ce;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}})();updateInfoPanel=(function(){const e=new Ce;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,i=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,s=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,i,this.currentFPS||"N/A",t,this.splatRenderCount,s,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}})();updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}runSplatSort=(function(){const e=new Le,t=[],n=new D(0,0,-1),i=new D(0,0,-1),s=new D,o=new D,a=[],l=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(c=!1,u=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let d=0,h=0,p=!1,g=!1;if(i.set(0,0,-1).applyQuaternion(this.camera.quaternion),d=i.dot(n),h=o.copy(this.camera.position).sub(s).length(),!c&&!this.splatMesh.dynamicMode&&a.length===0&&(d<=.99&&(p=!0),h>=1&&(g=!0),!p&&!g))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:A,shouldSortAll:m}=this.gatherSceneNodesForSort();m=m||u,this.splatRenderCount=A,e.copy(this.camera.matrixWorld).invert();const f=this.perspectiveCamera||this.camera;e.premultiply(f.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let y=Promise.resolve(!0);return this.gpuAcceleratedSort&&(a.length<=1||a.length%2===0)&&(y=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),y.then(()=>{if(a.length===0)if(this.splatMesh.dynamicMode||m)a.push(this.splatRenderCount);else{for(let T of l)if(d<T.angleThreshold){for(let E of T.sortFractions)a.push(Math.floor(this.splatRenderCount*E));break}a.push(this.splatRenderCount)}let S=Math.min(a.shift(),this.splatRenderCount);this.splatSortCount=S,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const x={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:S,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(x.indexesToSort=this.sortWorkerIndexesToSort,x.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(x.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(T=>{this.sortPromiseResolver=T}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(T=>{this.sortWorker.postMessage(T)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:x}),a.length===0&&(s.copy(this.camera.position),n.copy(i)),!0}),y}})();gatherSceneNodesForSort=(function(){const e=[];let t=null;const n=new D,i=new D,s=new D,o=new Le,a=new Le,l=new Le,c=new D,u=new D(0,0,-1),d=new D,h=p=>d.copy(p.max).sub(p.min).length();return function(p=!1){this.getRenderDimensions(c);const g=c.y/2/Math.tan(this.camera.fov/2*ac.DEG2RAD),A=Math.atan(c.x/2/g),m=Math.atan(c.y/2/g),f=Math.cos(A),y=Math.cos(m),S=this.splatMesh.getSplatTree();if(S){a.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||a.multiply(this.splatMesh.matrixWorld);let x=0,T=0;for(let v=0;v<S.subTrees.length;v++){const w=S.subTrees[v];o.copy(a),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(v,l),o.multiply(l));const M=w.nodesWithIndexes.length;for(let _=0;_<M;_++){const R=w.nodesWithIndexes[_];if(!R.data||!R.data.indexes||R.data.indexes.length===0)continue;s.copy(R.center).applyMatrix4(o);const B=s.length();s.normalize(),n.copy(s).setX(0).normalize(),i.copy(s).setY(0).normalize();const F=u.dot(i),L=u.dot(n),z=h(R),N=L<y-.6,X=F<f-.6;!p&&(X||N)&&B>z||(T+=R.data.indexes.length,e[x]=R,R.data.distanceToNode=B,x++)}}e.length=x,e.sort((v,w)=>v.data.distanceToNode<w.data.distanceToNode?-1:1);let E=T*ot.BytesPerInt;for(let v=0;v<x;v++){const w=e[v],M=w.data.indexes.length,_=M*ot.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,E-_,M).set(w.data.indexes),E-=_}return{splatRenderCount:T,shouldSortAll:!1}}else{const x=this.splatMesh.getSplatCount();if(!t||t.length!==x){t=new Uint32Array(x);for(let T=0;T<x;T++)t[T]=T}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:x,shouldSortAll:!0}}}})();getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}}const v0=er("h1",{class:"section-title"},"3DGS Model",-1),y0=er("p",null,[Ca(" Thanks to "),er("a",{href:"https://github.com/mkkellogg/GaussianSplats3D",target:"_blank"},"GaussianSplats3D"),Ca(", we can visualize 3DGS models here. ")],-1),M0=er("div",{id:"gs",class:"gs-container"},null,-1),T0=zc({__name:"GaussianSplats3D",setup(r){return Hc(()=>{const e=document.getElementById("gs");if(e){const t=new Di({rootElement:e,cameraUp:[0,-1,0],initialCameraPosition:[-2.13,-.5,-4.63],initialCameraLookAt:[-.08,.89,-1.36],sharedMemoryForWorkers:!1});t.addSplatScene("./3dgs/cotton-mirror.splat",{splatAlphaRemovalThreshold:5,showLoadingUI:!0,position:[0,1,-1],rotation:[0,0,0,1],scale:[.18,.18,.18]}).then(()=>{t.start(),t.perspectiveControls.stopListenToKeyEvents(),t.orthographicControls.stopListenToKeyEvents()})}}),(e,t)=>{const n=mr("el-divider"),i=mr("el-row"),s=mr("el-col");return Vc(),kc("div",null,[ji(n),ji(i,{justify:"center"},{default:gs(()=>[v0]),_:1}),ji(i,{justify:"center"},{default:gs(()=>[ji(s,{xs:24,sm:20,md:16,lg:12,xl:12},{default:gs(()=>[y0,ji(s,{xs:16,sm:21,style:{margin:"0px auto"}},{default:gs(()=>[M0]),_:1})]),_:1})]),_:1})])}}});export{T0 as default};
