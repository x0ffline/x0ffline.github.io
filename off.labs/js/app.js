var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

'use strict';(function(){var title=document.title,animSeq=["/","$","\\","|","$"],animIndex=0,titleIndex=0;function doInverseSpinZeroPitch(){var loadTitle=title.substring(0,titleIndex);if(titleIndex>title.length){animIndex=0;titleIndex=0}
if(animIndex>3){titleIndex++;animIndex=0}
document.title=loadTitle+animSeq[animIndex];animIndex++}
window.setInterval(doInverseSpinZeroPitch,50);})();const qS=q=>document.querySelector(q);document.getElementsByTagName('video')[0].volume=0.1;const video=qS('video');const canvas=[qS('.top'),qS('.bot')];const ctx=canvas.map(e=>e.getContext('2d'));let audioCtx,audioAnalyser,audioSource,bufferLength=128,dataArray,width,height,initialized=false;function initAudio(){audioCtx=new(window.AudioContext||window.webkitAudioContext)();audioAnalyser=audioCtx.createAnalyser();audioAnalyser.smoothingTimeConstant=0.5;audioSource=audioCtx.createMediaElementSource(video);audioSource.connect(audioAnalyser);audioAnalyser.connect(audioCtx.destination);audioAnalyser.fftSize=512;bufferLength=audioAnalyser.frequencyBinCount/2;dataArray=new Uint8Array(bufferLength);}
function draw(){if(initialized){audioAnalyser.getByteFrequencyData(dataArray);}
ctx.forEach(c=>{c.clearRect(0,0,width,height);});let barWidth=(width/bufferLength)/2;for(let i=0;i<bufferLength;i++){let barHeight=initialized?dataArray[i]:0;ctx.forEach(c=>c.fillStyle='rgb(0, 0, 0)');ctx[0].fillRect(i*2*barWidth,barHeight/2,barWidth,height-barHeight/2);ctx[1].fillRect(width-barWidth-(i*2*barWidth),0,barWidth,height-barHeight/2);}
requestAnimationFrame(draw);}
function resize(){if(window.innerWidth/window.innerHeight>=16/9){video.style.width=window.innerWidth+'px';video.style.height=window.innerWidth*9/16+'px';}else{video.style.height=window.innerHeight+'px';video.style.width=window.innerHeight*16/9+'px';}
width=qS('img').clientWidth;height=qS('img').clientHeight;canvas.forEach(e=>{e.setAttribute('width',width);e.setAttribute('height',height);});}
resize();window.addEventListener('resize',resize);draw();document.body.addEventListener('click',_=>{if(!initialized){video.muted=false;initAudio();initialized=true;qS('.hint').style.display='none';}});

}