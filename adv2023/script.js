{/* <a href="javascript:(function(){title=document.title;href=document.location.href;a:{links=document.getElementsByTagName(&quot;link&quot;);for(i in links)if(links[i].rel&&&quot;canonical&quot;==links[i].rel.toLowerCase()){canonical=links[i].href;break a}canonical=&quot;&quot;}a=console.log(&quot;title=%s \n href=%s \n cano=%s&quot;,title,href,canonical);console.log(a);alert(title+&quot;\n&quot;+href+&quot;\n&quot;+canonical)})();">ブックマークレットのリンク</a>

&quot;"""""

function(){
  const NAME = 'Boing';
  const uttr = new SpeechSynthesisUtterance("If you don't mind, please follow me on Qiita! ")
  const voice = speechSynthesis.getVoices().find(function(voice) { return voice.name == NAME; });
  if (voice) uttr.voice = voice;
  speechSynthesis.speak(uttr);
}(); */}
