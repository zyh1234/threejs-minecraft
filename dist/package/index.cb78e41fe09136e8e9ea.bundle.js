(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{tjUo:function(t,e,i){"use strict";i.r(e);var s=i("Womt"),o=i("ET6W");const n={TextureLoader:s.v,NearestFilter:s.l,Mesh:s.j,MeshLambertMaterial:s.k,CubeGeometry:s.d};class h{constructor(t,e){this.cubeType=t,this.customCubeImages=e,this._images=[],this._materials=[],this._cubeSize=1,h.customCubeImages=[],h.DefaultCubeInfo={GrassDirt:{images:["./assets/img/blocks/grass_side.png","./assets/img/blocks/grass_side.png","./assets/img/blocks/grass_top_green.png","./assets/img/blocks/dirt.png","./assets/img/blocks/grass_side.png","./assets/img/blocks/grass_side.png"],material:{}},Cloud:{images:["./assets/img/blocks/grass_side.png","./assets/img/blocks/grass_side.png","./assets/img/blocks/grass_top_green.png","./assets/img/blocks/dirt.png","./assets/img/blocks/grass_side.png","./assets/img/blocks/grass_side.png"],material:{transparent:!0,opacity:.2}}}}initImages(){if(!this._images||0===this._images.length)if("Custom"===this.cubeType)this._images=this.customCubeImages;else{if(!h.DefaultCubeInfo[this.cubeType])throw"unknown cubeType";this._images=h.DefaultCubeInfo[this.cubeType].images}}initMaterials(){if(this._materials&&0!==this._materials.length)return;let t=new n.TextureLoader;for(let e=0;e<6;++e){let i=t.load(this._images[e]);i.generateMipmaps=!1,i.magFilter=n.NearestFilter,i.minFilter=n.NearestFilter;let s={};h.DefaultCubeInfo[this.cubeType]&&(s=h.DefaultCubeInfo[this.cubeType].material),this._materials.push(new n.MeshLambertMaterial({map:i,fog:!0,...s}))}}buildCube(t,e,i){t=t||0,e=e||0,i=i||0;let s=new n.Mesh(new n.CubeGeometry(this._cubeSize,this._cubeSize,this._cubeSize),this._materials);return s.position.x=t+this._cubeSize/2,s.position.y=e+this._cubeSize/2,s.position.z=i+this._cubeSize/2,s.name="GrassCube("+t+","+e+","+i+")",s}create(t,e,i){return this.initImages(),this.initMaterials(),this.buildCube(t,e,i)}}var r=i("XFRQ"),a=i.n(r);class c{constructor(t){return c._instance,this.stats,c._instance?c._instance:(this.stats=new a.a,this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="0px",this.stats.domElement.style.top="0px",document.getElementById(t).appendChild(this.stats.domElement),c._instance=this,this)}}i("RyHr");s.p,s.w;var l=i("sxfH");const p={Vector3:s.x,Raycaster:s.p,Vector2:s.w};class g{constructor(t,e,i,s){return this.camera=t,this.objects=i,this.scene=s,g._instance?g._instance:(this.checkRay={X0:[],X1:[],Z0:[],Z1:[],Y0:[],Y1:[]},this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.preRuning=void 0,this.isRunning=!1,this.canJump=!1,this.velocity=new p.Vector3,this.direction=new p.Vector3,this.worldOption={g:9},this.personOption={height:1.8,sightHeight:1.5,jumpHeight:1.4,speedWalk:5.7,speedRun:10,accelerateRateStart:.3,accelerateRateStop:.8,thickness:.6},this.init(t,e),g._instance=this,g._instance)}init(t,e){this.controls=new l.a(t,e);{let t=document.createElement("div");t.style.position="absolute",t.style.zIndex="100",t.style.width="100%",t.style.height="100%",t.style.top="0",t.style.left="0",t.id="blocker",document.body.append(t),t.addEventListener("click",()=>{this.controls.lock()},!1),this.controls.addEventListener("lock",(function(){t.style.display="none"})),this.controls.addEventListener("unlock",(function(){t.style.display="block"}))}{let t=document.createElement("div");t.style.height="2px",t.style.width="20px",y(t),document.body.append(t);let e=document.createElement("div");e.style.height="20px",e.style.width="2px",y(e),document.body.append(e)}document.addEventListener("keydown",t=>{switch(t.keyCode){case 38:case 87:if(this.moveForward)break;this.preRuning?(this.isRunning=performance.now()-this.preRuning<=200,this.preRuning=performance.now()):this.preRuning=performance.now(),this.moveForward=!0;break;case 37:case 65:if(this.moveLeft)break;this.moveLeft=!0;break;case 40:case 83:if(this.moveBackward)break;this.moveBackward=!0;break;case 39:case 68:if(this.moveRight)break;this.moveRight=!0;break;case 32:this.canJump&&(this.velocity.y+=Math.sqrt(2*this.worldOption.g*7.74*this.personOption.jumpHeight)),this.canJump=!1}},!1),document.addEventListener("keyup",t=>{switch(t.keyCode){case 38:case 87:this.isRunning=!1,this.moveForward=!1;break;case 37:case 65:this.moveLeft=!1;break;case 40:case 83:this.moveBackward=!1;break;case 39:case 68:this.moveRight=!1}},!1);for(let t=0;t<6;t++)this.checkRay.X0.push(new p.Raycaster(new p.Vector3,new p.Vector3(-1,0,0),0,0));for(let t=0;t<6;t++)this.checkRay.X1.push(new p.Raycaster(new p.Vector3,new p.Vector3(1,0,0),0,0));for(let t=0;t<6;t++)this.checkRay.Z0.push(new p.Raycaster(new p.Vector3,new p.Vector3(0,0,-1),0,0));for(let t=0;t<6;t++)this.checkRay.Z1.push(new p.Raycaster(new p.Vector3,new p.Vector3(0,0,1),0,0));for(let t=0;t<4;t++)this.checkRay.Y0.push(new p.Raycaster(new p.Vector3,new p.Vector3(0,-1,0),0,0));for(let t=0;t<4;t++)this.checkRay.Y1.push(new p.Raycaster(new p.Vector3,new p.Vector3(0,1,0),0,0));this.initClickFunction()}update(t){t=t||.016,this.controls.isLocked||(this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1);{this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize();let e=this.isRunning?this.personOption.speedRun:this.personOption.speedWalk;if(this.moveForward||this.moveBackward){let t=this.velocity.z+this.direction.z*e*this.personOption.accelerateRateStart;Math.abs(t)<e?this.velocity.z=t:this.velocity.z=this.direction.z*e}else this.velocity.z=Math.abs(this.velocity.z)>1?this.velocity.z*this.personOption.accelerateRateStop:0;if(this.moveLeft||this.moveRight){let t=this.velocity.x+this.direction.x*e*this.personOption.accelerateRateStart;Math.abs(t)<e?this.velocity.x=t:this.velocity.x=this.direction.x*e}else this.velocity.x=Math.abs(this.velocity.x)>1?this.velocity.x*this.personOption.accelerateRateStop:0;let i=this.controls.getObject().position.x,s=this.controls.getObject().position.z;this.controls.moveForward(this.velocity.z*t),this.controls.moveRight(this.velocity.x*t);{let t=void 0;{for(let t=0;t<6;t++)this.checkRay.Z0[t].ray.origin.copy(this.controls.getObject().position),this.checkRay.Z0[t].ray.origin.x=i;let e=this.personOption.thickness/2;this.checkRay.Z0[0].ray.origin.x+=e,this.checkRay.Z0[0].ray.origin.y-=this.personOption.sightHeight-.05,this.checkRay.Z0[1].ray.origin.x-=e,this.checkRay.Z0[1].ray.origin.y-=this.personOption.sightHeight-.05,this.checkRay.Z0[2].ray.origin.x+=e,this.checkRay.Z0[2].ray.origin.y-=this.personOption.sightHeight-this.personOption.height/2,this.checkRay.Z0[3].ray.origin.x-=e,this.checkRay.Z0[3].ray.origin.y-=this.personOption.sightHeight-this.personOption.height/2,this.checkRay.Z0[4].ray.origin.x+=e,this.checkRay.Z0[4].ray.origin.y+=this.personOption.height-this.personOption.sightHeight-.05,this.checkRay.Z0[5].ray.origin.x-=e,this.checkRay.Z0[5].ray.origin.y+=this.personOption.height-this.personOption.sightHeight-.05;for(let e=0;e<6;e++){let i=this.checkRay.Z0[e].intersectObjects(this.scene.children);if(i.length>0){let e=i[0].point.z;t=Math.max(void 0===t?e:t,e)}}}let e=void 0;{for(let t=0;t<6;t++)this.checkRay.Z1[t].ray.origin.copy(this.controls.getObject().position),this.checkRay.Z1[t].ray.origin.x=i;let t=this.personOption.thickness/2;this.checkRay.Z1[0].ray.origin.x+=t,this.checkRay.Z1[0].ray.origin.y-=this.personOption.sightHeight-.05,this.checkRay.Z1[1].ray.origin.x-=t,this.checkRay.Z1[1].ray.origin.y-=this.personOption.sightHeight-.05,this.checkRay.Z1[2].ray.origin.x+=t,this.checkRay.Z1[2].ray.origin.y-=this.personOption.sightHeight-this.personOption.height/2,this.checkRay.Z1[3].ray.origin.x-=t,this.checkRay.Z1[3].ray.origin.y-=this.personOption.sightHeight-this.personOption.height/2,this.checkRay.Z1[4].ray.origin.x+=t,this.checkRay.Z1[4].ray.origin.y+=this.personOption.height-this.personOption.sightHeight-.05,this.checkRay.Z1[5].ray.origin.x-=t,this.checkRay.Z1[5].ray.origin.y+=this.personOption.height-this.personOption.sightHeight-.05;for(let t=0;t<6;t++){let i=this.checkRay.Z1[t].intersectObjects(this.scene.children);if(i.length>0){let t=i[0].point.z;e=Math.min(void 0===e?t:e,t)}}}let s=this.controls.getObject().position.z;s=Math.max(void 0===t?s:t+this.personOption.thickness/2+.001,s),s=Math.min(void 0===e?s:e-this.personOption.thickness/2-.001,s),this.controls.getObject().position.z=s}{let t=void 0;{for(let t=0;t<6;t++)this.checkRay.X0[t].ray.origin.copy(this.controls.getObject().position),this.checkRay.X0[t].ray.origin.z=s;let e=this.personOption.thickness/2;this.checkRay.X0[0].ray.origin.z+=e,this.checkRay.X0[0].ray.origin.y-=this.personOption.sightHeight-.05,this.checkRay.X0[1].ray.origin.z-=e,this.checkRay.X0[1].ray.origin.y-=this.personOption.sightHeight-.05,this.checkRay.X0[2].ray.origin.z+=e,this.checkRay.X0[2].ray.origin.y-=this.personOption.sightHeight-this.personOption.height/2,this.checkRay.X0[3].ray.origin.z-=e,this.checkRay.X0[3].ray.origin.y-=this.personOption.sightHeight-this.personOption.height/2,this.checkRay.X0[4].ray.origin.z+=e,this.checkRay.X0[4].ray.origin.y+=this.personOption.height-this.personOption.sightHeight-.051,this.checkRay.X0[5].ray.origin.z-=e,this.checkRay.X0[5].ray.origin.y+=this.personOption.height-this.personOption.sightHeight-.051;for(let e=0;e<6;e++){let i=this.checkRay.X0[e].intersectObjects(this.scene.children);if(i.length>0){let e=i[0].point.x;t=Math.max(void 0===t?e:t,e)}}}let e=void 0;{for(let t=0;t<6;t++)this.checkRay.X1[t].ray.origin.copy(this.controls.getObject().position),this.checkRay.X1[t].ray.origin.z=s;let t=this.personOption.thickness/2;this.checkRay.X1[0].ray.origin.z+=t,this.checkRay.X1[0].ray.origin.y-=this.personOption.sightHeight-.05,this.checkRay.X1[1].ray.origin.z-=t,this.checkRay.X1[1].ray.origin.y-=this.personOption.sightHeight-.05,this.checkRay.X1[2].ray.origin.z+=t,this.checkRay.X1[2].ray.origin.y-=this.personOption.sightHeight-this.personOption.height/2,this.checkRay.X1[3].ray.origin.z-=t,this.checkRay.X1[3].ray.origin.y-=this.personOption.sightHeight-this.personOption.height/2,this.checkRay.X1[4].ray.origin.z+=t,this.checkRay.X1[4].ray.origin.y+=this.personOption.height-this.personOption.sightHeight-.05,this.checkRay.X1[5].ray.origin.z-=t,this.checkRay.X1[5].ray.origin.y+=this.personOption.height-this.personOption.sightHeight-.05;for(let t=0;t<6;t++){let i=this.checkRay.X1[t].intersectObjects(this.scene.children);if(i.length>0){let t=i[0].point.x;e=Math.min(void 0===e?t:e,t)}}}let i=this.controls.getObject().position.x;i=Math.max(void 0===t?i:t+this.personOption.thickness/2+.001,i),i=Math.min(void 0===e?i:e-this.personOption.thickness/2-.001,i),this.controls.getObject().position.x=i}}{let e=void 0;{for(let t=0;t<4;t++)this.checkRay.Y0[t].ray.origin.copy(this.controls.getObject().position);let t=this.personOption.thickness/2;this.checkRay.Y0[0].ray.origin.x+=t,this.checkRay.Y0[0].ray.origin.z-=t,this.checkRay.Y0[1].ray.origin.x+=t,this.checkRay.Y0[1].ray.origin.z+=t,this.checkRay.Y0[2].ray.origin.x-=t,this.checkRay.Y0[2].ray.origin.z+=t,this.checkRay.Y0[3].ray.origin.x-=t,this.checkRay.Y0[3].ray.origin.z-=t;for(let t=0;t<4;t++){let i=this.checkRay.Y0[t].intersectObjects(this.scene.children);if(i.length>0){let t=i[0].point.y;e=Math.max(void 0===e?t:e,t)}}}let i=void 0;{for(let t=0;t<4;t++)this.checkRay.Y1[t].ray.origin.copy(this.controls.getObject().position);let t=this.personOption.thickness/2-.01;this.checkRay.Y1[0].ray.origin.x+=t,this.checkRay.Y1[0].ray.origin.z-=t,this.checkRay.Y1[1].ray.origin.x+=t,this.checkRay.Y1[1].ray.origin.z+=t,this.checkRay.Y1[2].ray.origin.x-=t,this.checkRay.Y1[2].ray.origin.z+=t,this.checkRay.Y1[3].ray.origin.x-=t,this.checkRay.Y1[3].ray.origin.z-=t;for(let t=0;t<4;t++){let e=this.checkRay.Y1[t].intersectObjects(this.objects);if(e.length>0){let t=e[0].point.y;i=Math.min(void 0===i?t:i,t)}}}let s=this.controls.getObject().position.y+this.velocity.y*t;void 0!==i&&s>i-(this.personOption.height-this.personOption.sightHeight)&&(s=i-(this.personOption.height-this.personOption.sightHeight),this.velocity.y=0),void 0!==e?(this.controls.getObject().position.y=Math.max(e+this.personOption.sightHeight,s),s>e+this.personOption.sightHeight?this.velocity.y-=this.worldOption.g*Math.sqrt(t):(this.velocity.y=0,this.canJump=!0)):(this.controls.getObject().position.y=s,this.velocity.y-=this.worldOption.g*Math.sqrt(t))}this.controls.getObject().position.y<-2e3&&(this.controls.getObject().position.y=2e3,this.controls.getObject().position.x=0,this.controls.getObject().position.z=0)}initClickFunction(){window.addEventListener("mouseup",t=>{t.button}),window.addEventListener("mousedown",t=>{let e=function(t,e){let i=new p.Raycaster,s=new p.Vector2;return s.x=0,s.y=0,i.setFromCamera(s,e),i.intersectObjects(t)}(this.scene.children,this.camera);if(e.length>0&&(console.log("点击对象【"+e[0].object.name+"】",e[0]),e[0]&&e[0].distance<=10&&e[0].face&&e[0].face.normal&&e[0].object&&e[0].object.position)){let i=e[0].face.normal,s=e[0].object.position,o={x:i.x+s.x-.5,y:i.y+s.y-.5,z:i.z+s.z-.5};if(2===t.button){let t=new h("GrassDirt").create(o.x,o.y,o.z);this.scene.add(t),this.objects.push(t)}else 0===t.button&&(console.log(e[0].object,this.scene.getObjectByName(e[0].object.name)),this.scene.remove(this.scene.getObjectById(e[0].object.id)))}},!1)}}function y(t){t.style.position="fixed",t.style.left="50%",t.style.top="50%",t.style.transform="translate(-50%,-50%)",t.style.zIndex="1",t.style.fontSize="100%",t.style.fontWeight="bold",t.style.textAlign="center",t.style.verticalAlign="middle",t.style.lineHeight="10px",t.style.fontFamily='"Times New Roman",serif',t.style.backgroundColor="#E0E0E0"}const d={Scene:s.q,FogExp2:s.h,CubeTextureLoader:s.e,Color:s.c,ShaderLib:s.r,ShaderMaterial:s.s,BackSide:s.b,CubeGeometry:s.d,AmbientLight:s.a,PerspectiveCamera:s.n,WebGLRenderer:s.y,PCFSoftShadowMap:s.m};!1===o.a.isWebGLAvailable()&&document.body.appendChild(o.a.getWebGLErrorMessage());let m,u,k,b,R=document.getElementById("canvas-frame"),f=R.offsetWidth,v=R.offsetHeight,w=8900331,O=function(){let t=new d.Scene;return t.name="SCENE",t.fog=new d.FogExp2(w,.001),function(e){e=e||1;let i=(new d.CubeTextureLoader).load(["./assets/img/1.png","./assets/img/2.png","./assets/img/3.png","./assets/img/4.png","./assets/img/5.png","./assets/img/6.png"]);if(1===e)t.background=new d.Color(w);else if(2===e)t.background=i;else{let e=d.ShaderLib.cube;e.uniforms.tCube.value=i;let s=new d.ShaderMaterial({fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:e.uniforms,depthWrite:!1,side:d.BackSide}),o=new d.Mesh(new d.CubeGeometry(1e6,1e6,1e6),s);t.add(o)}}(1),t}(),x=1,z=!0,j=1,C=.4;function M(){return Math.min(Math.max(C,x),j)}m=new d.AmbientLight(16777215,M()),O.add(m),u=new d.PerspectiveCamera(45,f/v,.01,1e5),u.name="CAMERA",u.position.x=0,u.position.y=10,u.position.z=0,k=new d.WebGLRenderer({antialias:!0}),k.name="RENDERER",k.shadowMap.enabled=!1,k.shadowMap.type=d.PCFSoftShadowMap,k.setSize(f,v),document.getElementById("canvas-frame").appendChild(k.domElement),k.setClearColor(16777215,1);let _=[];!function(){{let t=new g(u,k.domElement,_,O);b=t}}(),function(){let t=new h("GrassDirt");{let e=[],i=10;for(let t=-i;t<i;t++)for(let s=-i;s<i;s++)e.push([t,-1,s]);for(let t=0;t<5;t++)for(let i=0;i<5;i++)for(let s=0;s<5;s++)s>=t&&e.push([t-7,s-t,i-7]);let s=4;for(let t=0;t<s;t++)for(let i=t;i<2*s-t;i++)for(let o=t;o<2*s-t;o++)e.push([i-5,t,o+1]);for(let t=0;t<5;t++)for(let i=0;i<5;i++)2===t&&2===i||e.push([t,0,i-5]);e.push([0,1,-5]),e.push([3,3,-5]),e.push([2,3,-5]),e.push([3,3,-4]),e.push([2,3,-4]),e.push([3,3,-6]),e.push([2,3,-6]),e.push([3,3,-7]),e.push([2,3,-7]),e.push([3,2,-8]),e.push([2,2,-8]),e.push([5,2,-4]),e.push([4,2,-4]),e.push([0,1,-5]);for(let i of e){let e=t.create(i[0],i[1],i[2]);O.add(e),_.push(e)}}}();let H,E=performance.now();!function t(){requestAnimationFrame(t);let e=performance.now(),i=(e-E)/1e3;E=e,b.update(i),k.render(O,u),new c("canvas-frame").stats.update(i),m.intensity=M(),z?x>=C-(j-C)?x-=.002:z=!1:x<=j+(j-C)?x+=.002:x>1.5&&(z=!0)}(),window.onresize=function(){f=R.offsetWidth,v=R.offsetHeight,u.aspect=f/v,u.updateProjectionMatrix(),k.setSize(f,v)},window.onload=()=>{!function(){let t=0,e=["./assets/sound/calm1.ogg","./assets/sound/calm2.ogg","./assets/sound/calm3.ogg","./assets/sound/hal1.ogg","./assets/sound/hal2.ogg","./assets/sound/hal3.ogg","./assets/sound/hal4.ogg"];H=new Audio,H.preload="true",H.controls=!0,H.autoplay=!0,H.hidden=!0,H.style.display="none",H.style.position="fixed",H.style.top="0",H.style.right="0",H.style.zIndex="101",H.loop=!1,H.src=e[t],H.addEventListener("ended",(function(){t++,t>=e.length&&(t=0),H.src=e[t],H.play()}),!1),document.addEventListener("click",(function t(){H.play(),document.removeEventListener("click",t,!1)}),!1),document.body.appendChild(H)}()}}},[["tjUo",1,2]]]);
//# sourceMappingURL=index.cb78e41fe09136e8e9ea.bundle.js.map