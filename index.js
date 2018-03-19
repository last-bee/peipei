!function(r){function e(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return r[a].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var t={};e.m=r,e.c=t,e.d=function(r,t,a){e.o(r,t)||Object.defineProperty(r,t,{configurable:!1,enumerable:!0,get:a})},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},e.p="",e(e.s=11)}({11:function(r,e){function t(r){I.deleteFramebuffer(r.frameBuffer),I.deleteRenderbuffer(r.renderBuffer),I.deleteTexture(r.texture)}function a(r,e){var t={width:r,height:e,sizeArray:new Float32Array([r,e,r/e]),dtxArray:new Float32Array([1/r,1/e])};return t.frameBuffer=I.createFramebuffer(),t.renderBuffer=I.createRenderbuffer(),t.texture=I.createTexture(),I.bindTexture(I.TEXTURE_2D,t.texture),I.texImage2D(I.TEXTURE_2D,0,I.RGBA,r,e,0,I.RGBA,I.UNSIGNED_BYTE,null),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_WRAP_S,I.CLAMP_TO_EDGE),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_WRAP_T,I.CLAMP_TO_EDGE),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MAG_FILTER,I.LINEAR),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MIN_FILTER,I.LINEAR),I.bindFramebuffer(I.FRAMEBUFFER,t.frameBuffer),I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.texture,0),I.bindRenderbuffer(I.RENDERBUFFER,t.renderBuffer),I.renderbufferStorage(I.RENDERBUFFER,I.DEPTH_COMPONENT16,r,e),I.framebufferRenderbuffer(I.FRAMEBUFFER,I.DEPTH_ATTACHMENT,I.RENDERBUFFER,t.renderBuffer),I.bindTexture(I.TEXTURE_2D,null),I.bindRenderbuffer(I.RENDERBUFFER,null),I.bindFramebuffer(I.FRAMEBUFFER,null),t}function n(r,e){var t=I.createShader(r);if(I.shaderSource(t,e),I.compileShader(t),!I.getShaderParameter(t,I.COMPILE_STATUS)){var a=I.getShaderInfoLog(t);return I.deleteShader(t),console.error(a),null}return t}function i(r,e,t,a){var i=n(I.VERTEX_SHADER,r),o=n(I.FRAGMENT_SHADER,e);if(null==i||null==o)return null;var f=I.createProgram();if(I.attachShader(f,i),I.attachShader(f,o),I.deleteShader(i),I.deleteShader(o),I.linkProgram(f),!I.getProgramParameter(f,I.LINK_STATUS)){var u=I.getProgramInfoLog(f);return console.error(u),null}if(t){f.uniforms={};for(var l=0;l<t.length;l++)f.uniforms[t[l]]=I.getUniformLocation(f,t[l])}if(a){f.attributes={};for(var l=0;l<a.length;l++){var s=a[l];f.attributes[s]=I.getAttribLocation(f,s)}}return f}function o(r){I.useProgram(r);for(var e in r.attributes)I.enableVertexAttribArray(r.attributes[e])}function f(r){for(var e in r.attributes)I.disableVertexAttribArray(r.attributes[e]);I.useProgram(null)}function u(){var r=I.getParameter(I.ALIASED_POINT_SIZE_RANGE);U.pointSize={min:r[0],max:r[1]};var e=document.getElementById("sakura_point_vsh").textContent,t=document.getElementById("sakura_point_fsh").textContent;H.program=i(e,t,["uProjection","uModelview","uResolution","uOffset","uDOF","uFade"],["aPosition","aEuler","aMisc"]),o(H.program),H.offset=new Float32Array([0,0,0]),H.fader=z.create(0,10,0),H.numFlowers=1600,H.particles=new Array(H.numFlowers),H.dataArray=new Float32Array(8*H.numFlowers),H.positionArrayOffset=0,H.eulerArrayOffset=3*H.numFlowers,H.miscArrayOffset=6*H.numFlowers,H.buffer=I.createBuffer(),I.bindBuffer(I.ARRAY_BUFFER,H.buffer),I.bufferData(I.ARRAY_BUFFER,H.dataArray,I.DYNAMIC_DRAW),I.bindBuffer(I.ARRAY_BUFFER,null),f(H.program);for(var a=0;a<H.numFlowers;a++)H.particles[a]=new C}function l(){H.area=z.create(20,20,20),H.area.x=H.area.y*U.aspect,H.fader.x=10,H.fader.y=H.area.z,H.fader.z=.1;for(var r=2*Math.PI,e=z.create(0,0,0),t=0,a=function(){return 2*Math.random()-1},n=0;n<H.numFlowers;n++){var i=H.particles[n];e.x=.3*a()+.8,e.y=.2*a()-1,e.z=.3*a()+.5,z.normalize(e),t=2+1*Math.random(),i.setVelocity(e.x*t,e.y*t,e.z*t),i.setRotation(a()*r*.5,a()*r*.5,a()*r*.5),i.setPosition(a()*H.area.x,a()*H.area.y,a()*H.area.z),i.setEulerAngles(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),i.setSize(.9+.1*Math.random())}}function s(){for(var r=2*Math.PI,e=(H.area.x,H.area.y,H.area.z,function(r,e,t){Math.abs(r.position[e])-.5*r.size>t&&(r.position[e]>0?r.position[e]-=2*t:r.position[e]+=2*t)}),t=function(e,t){e.euler[t]=e.euler[t]%r,e.euler[t]<0&&(e.euler[t]+=r)},a=0;a<H.numFlowers;a++){var n=H.particles[a];n.update(M.delta,M.elapsed),e(n,0,H.area.x),e(n,1,H.area.y),e(n,2,H.area.z),t(n,0),t(n,1),t(n,2),n.alpha=1,n.zkey=S.matrix[2]*n.position[0]+S.matrix[6]*n.position[1]+S.matrix[10]*n.position[2]+S.matrix[14]}H.particles.sort(function(r,e){return r.zkey-e.zkey});for(var i=H.positionArrayOffset,u=H.eulerArrayOffset,l=H.miscArrayOffset,a=0;a<H.numFlowers;a++){var n=H.particles[a];H.dataArray[i]=n.position[0],H.dataArray[i+1]=n.position[1],H.dataArray[i+2]=n.position[2],i+=3,H.dataArray[u]=n.euler[0],H.dataArray[u+1]=n.euler[1],H.dataArray[u+2]=n.euler[2],u+=3,H.dataArray[l]=n.size,H.dataArray[l+1]=n.alpha,l+=2}I.enable(I.BLEND),I.blendFunc(I.SRC_ALPHA,I.ONE_MINUS_SRC_ALPHA);var s=H.program;o(s),I.uniformMatrix4fv(s.uniforms.uProjection,!1,O.matrix),I.uniformMatrix4fv(s.uniforms.uModelview,!1,S.matrix),I.uniform3fv(s.uniforms.uResolution,U.array),I.uniform3fv(s.uniforms.uDOF,z.arrayForm(S.dof)),I.uniform3fv(s.uniforms.uFade,z.arrayForm(H.fader)),I.bindBuffer(I.ARRAY_BUFFER,H.buffer),I.bufferData(I.ARRAY_BUFFER,H.dataArray,I.DYNAMIC_DRAW),I.vertexAttribPointer(s.attributes.aPosition,3,I.FLOAT,!1,0,H.positionArrayOffset*Float32Array.BYTES_PER_ELEMENT),I.vertexAttribPointer(s.attributes.aEuler,3,I.FLOAT,!1,0,H.eulerArrayOffset*Float32Array.BYTES_PER_ELEMENT),I.vertexAttribPointer(s.attributes.aMisc,2,I.FLOAT,!1,0,H.miscArrayOffset*Float32Array.BYTES_PER_ELEMENT);for(var a=1;a<2;a++){var m=-2*a;H.offset[0]=-1*H.area.x,H.offset[1]=-1*H.area.y,H.offset[2]=H.area.z*m,I.uniform3fv(s.uniforms.uOffset,H.offset),I.drawArrays(I.POINT,0,H.numFlowers),H.offset[0]=-1*H.area.x,H.offset[1]=1*H.area.y,H.offset[2]=H.area.z*m,I.uniform3fv(s.uniforms.uOffset,H.offset),I.drawArrays(I.POINT,0,H.numFlowers),H.offset[0]=1*H.area.x,H.offset[1]=-1*H.area.y,H.offset[2]=H.area.z*m,I.uniform3fv(s.uniforms.uOffset,H.offset),I.drawArrays(I.POINT,0,H.numFlowers),H.offset[0]=1*H.area.x,H.offset[1]=1*H.area.y,H.offset[2]=H.area.z*m,I.uniform3fv(s.uniforms.uOffset,H.offset),I.drawArrays(I.POINT,0,H.numFlowers)}H.offset[0]=0,H.offset[1]=0,H.offset[2]=0,I.uniform3fv(s.uniforms.uOffset,H.offset),I.drawArrays(I.POINT,0,H.numFlowers),I.bindBuffer(I.ARRAY_BUFFER,null),f(s),I.enable(I.DEPTH_TEST),I.disable(I.BLEND)}function m(r,e,t,a){var n={},u=["uResolution","uSrc","uDelta"];t&&(u=u.concat(t));var l=["aPosition"];return a&&(l=l.concat(a)),n.program=i(r,e,u,l),o(n.program),n.dataArray=new Float32Array([-1,-1,1,-1,-1,1,1,1]),n.buffer=I.createBuffer(),I.bindBuffer(I.ARRAY_BUFFER,n.buffer),I.bufferData(I.ARRAY_BUFFER,n.dataArray,I.STATIC_DRAW),I.bindBuffer(I.ARRAY_BUFFER,null),f(n.program),n}function d(r,e){var t=r.program;o(t),I.uniform3fv(t.uniforms.uResolution,U.array),null!=e&&(I.uniform2fv(t.uniforms.uDelta,e.dtxArray),I.uniform1i(t.uniforms.uSrc,0),I.activeTexture(I.TEXTURE0),I.bindTexture(I.TEXTURE_2D,e.texture))}function c(r){I.bindBuffer(I.ARRAY_BUFFER,r.buffer),I.vertexAttribPointer(r.program.attributes.aPosition,2,I.FLOAT,!1,0,0),I.drawArrays(I.TRIANGLE_STRIP,0,4)}function h(r){f(r.program)}function E(){var r,e,t=document.getElementById("fx_common_vsh").textContent;e=document.getElementById("bg_fsh").textContent,N.sceneBg=m(t,e,["uTimes"],null),e=document.getElementById("fx_brightbuf_fsh").textContent,N.mkBrightBuf=m(t,e,null,null),e=document.getElementById("fx_dirblur_r4_fsh").textContent,N.dirBlur=m(t,e,["uBlurDir"],null),r=document.getElementById("pp_final_vsh").textContent,e=document.getElementById("pp_final_fsh").textContent,N.finalComp=m(r,e,["uBloom"],null)}function y(){}function R(){}function A(){I.disable(I.DEPTH_TEST),d(N.sceneBg,null),I.uniform2f(N.sceneBg.program.uniforms.uTimes,M.elapsed,M.delta),c(N.sceneBg),h(N.sceneBg),I.enable(I.DEPTH_TEST)}function T(){}function F(){}function p(){I.enable(I.TEXTURE_2D),I.disable(I.DEPTH_TEST);var r=function(r,e){I.bindFramebuffer(I.FRAMEBUFFER,r.frameBuffer),I.viewport(0,0,r.width,r.height),e&&(I.clearColor(0,0,0,0),I.clear(I.COLOR_BUFFER_BIT|I.DEPTH_BUFFER_BIT))};r(U.wHalfRT0,!0),d(N.mkBrightBuf,U.mainRT),c(N.mkBrightBuf),h(N.mkBrightBuf);for(var e=0;e<2;e++){var t=1.5+1*e,a=2+1*e;r(U.wHalfRT1,!0),d(N.dirBlur,U.wHalfRT0),I.uniform4f(N.dirBlur.program.uniforms.uBlurDir,t,0,a,0),c(N.dirBlur),h(N.dirBlur),r(U.wHalfRT0,!0),d(N.dirBlur,U.wHalfRT1),I.uniform4f(N.dirBlur.program.uniforms.uBlurDir,0,t,0,a),c(N.dirBlur),h(N.dirBlur)}I.bindFramebuffer(I.FRAMEBUFFER,null),I.viewport(0,0,U.width,U.height),I.clear(I.COLOR_BUFFER_BIT|I.DEPTH_BUFFER_BIT),d(N.finalComp,U.mainRT),I.uniform1i(N.finalComp.program.uniforms.uBloom,1),I.activeTexture(I.TEXTURE1),I.bindTexture(I.TEXTURE_2D,U.wHalfRT0.texture),c(N.finalComp),h(N.finalComp),I.enable(I.DEPTH_TEST)}function B(){E(),y(),u(),T(),L=!0}function _(){R(),l(),F(),S.position.z=H.area.z+O.nearfar[0],O.angle=180*Math.atan2(H.area.y,S.position.z+H.area.z)/Math.PI*2,D.loadProjection(O.matrix,U.aspect,O.angle,O.nearfar[0],O.nearfar[1])}function x(){D.loadLookAt(S.matrix,S.position,S.lookat,S.up),I.enable(I.DEPTH_TEST),I.bindFramebuffer(I.FRAMEBUFFER,U.mainRT.frameBuffer),I.viewport(0,0,U.mainRT.width,U.mainRT.height),I.clearColor(.005,0,.05,0),I.clear(I.COLOR_BUFFER_BIT|I.DEPTH_BUFFER_BIT),A(),s(),p()}function v(r){P(document.getElementById("sakura")),g(),L&&_()}function g(){U.setSize(I.canvas.width,I.canvas.height),I.clearColor(.2,.2,.5,1),I.viewport(0,0,U.width,U.height);var r=function(r,e,n){var i=U[r];i&&t(i),U[r]=a(e,n)};r("mainRT",U.width,U.height),r("wFullRT0",U.width,U.height),r("wFullRT1",U.width,U.height),r("wHalfRT0",U.halfWidth,U.halfHeight),r("wHalfRT1",U.halfWidth,U.halfHeight)}function b(){x()}function w(){var r=new Date;M.elapsed=(r-M.start)/1e3,M.delta=(r-M.prev)/1e3,M.prev=r,k&&requestAnimationFrame(w),b()}function P(r){var e=document.body,t=document.documentElement;fullw=Math.max(e.clientWidth,e.scrollWidth,t.scrollWidth,t.clientWidth),fullh=Math.max(e.clientHeight,e.scrollHeight,t.scrollHeight,t.clientHeight),r.width=fullw,r.height=fullh}var z={},D={};z.create=function(r,e,t){return{x:r,y:e,z:t}},z.dot=function(r,e){return r.x*e.x+r.y*e.y+r.z*e.z},z.cross=function(r,e,t){r.x=e.y*t.z-e.z*t.y,r.y=e.z*t.x-e.x*t.z,r.z=e.x*t.y-e.y*t.x},z.normalize=function(r){var e=r.x*r.x+r.y*r.y+r.z*r.z;e>1e-5&&(e=1/Math.sqrt(e),r.x*=e,r.y*=e,r.z*=e)},z.arrayForm=function(r){return r.array?(r.array[0]=r.x,r.array[1]=r.y,r.array[2]=r.z):r.array=new Float32Array([r.x,r.y,r.z]),r.array},D.createIdentity=function(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])},D.loadProjection=function(r,e,t,a,n){var i=a*Math.tan(t*Math.PI/180*.5)*2,o=i*e;r[0]=2*a/o,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=2*a/i,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=-(n+a)/(n-a),r[11]=-1,r[12]=0,r[13]=0,r[14]=-2*n*a/(n-a),r[15]=0},D.loadLookAt=function(r,e,t,a){var n=z.create(e.x-t.x,e.y-t.y,e.z-t.z);z.normalize(n);var i=z.create(1,0,0);z.cross(i,a,n),z.normalize(i);var o=z.create(1,0,0);z.cross(o,n,i),z.normalize(o),r[0]=i.x,r[1]=o.x,r[2]=n.x,r[3]=0,r[4]=i.y,r[5]=o.y,r[6]=n.y,r[7]=0,r[8]=i.z,r[9]=o.z,r[10]=n.z,r[11]=0,r[12]=-(e.x*r[0]+e.y*r[4]+e.z*r[8]),r[13]=-(e.x*r[1]+e.y*r[5]+e.z*r[9]),r[14]=-(e.x*r[2]+e.y*r[6]+e.z*r[10]),r[15]=1};var I,M={start:0,prev:0,delta:0,elapsed:0},U={width:0,height:0,aspect:1,array:new Float32Array(3),halfWidth:0,halfHeight:0,halfArray:new Float32Array(3)};U.setSize=function(r,e){U.width=r,U.height=e,U.aspect=U.width/U.height,U.array[0]=U.width,U.array[1]=U.height,U.array[2]=U.aspect,U.halfWidth=Math.floor(r/2),U.halfHeight=Math.floor(e/2),U.halfArray[0]=U.halfWidth,U.halfArray[1]=U.halfHeight,U.halfArray[2]=U.halfWidth/U.halfHeight};var O={angle:60,nearfar:new Float32Array([.1,100]),matrix:D.createIdentity()},S={position:z.create(0,0,100),lookat:z.create(0,0,0),up:z.create(0,1,0),dof:z.create(10,4,8),matrix:D.createIdentity()},H={},L=!1,C=function(){this.velocity=new Array(3),this.rotation=new Array(3),this.position=new Array(3),this.euler=new Array(3),this.size=1,this.alpha=1,this.zkey=0};C.prototype.setVelocity=function(r,e,t){this.velocity[0]=r,this.velocity[1]=e,this.velocity[2]=t},C.prototype.setRotation=function(r,e,t){this.rotation[0]=r,this.rotation[1]=e,this.rotation[2]=t},C.prototype.setPosition=function(r,e,t){this.position[0]=r,this.position[1]=e,this.position[2]=t},C.prototype.setEulerAngles=function(r,e,t){this.euler[0]=r,this.euler[1]=e,this.euler[2]=t},C.prototype.setSize=function(r){this.size=r},C.prototype.update=function(r,e){this.position[0]+=this.velocity[0]*r,this.position[1]+=this.velocity[1]*r,this.position[2]+=this.velocity[2]*r,this.euler[0]+=this.rotation[0]*r,this.euler[1]+=this.rotation[1]*r,this.euler[2]+=this.rotation[2]*r};var N={},k=!0;window.addEventListener("load",function(r){var e=document.getElementById("sakura");try{P(e),I=e.getContext("experimental-webgl")}catch(r){return alert("WebGL not supported."+r),void console.error(r)}window.addEventListener("resize",v),g(),B(),_(),M.start=new Date,M.prev=M.start,w()}),function(r,e){r["r"+e]=r["r"+e]||r["webkitR"+e]||r["mozR"+e]||r["msR"+e]||r["oR"+e]||function(e){r.setTimeout(e,1e3/60)}}(window,"equestAnimationFrame")}});