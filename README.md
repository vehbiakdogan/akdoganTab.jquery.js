akdoganTab.jquery.js
====================

Vehbi Akdoğan Kolay tab Eklentisi 


<h2> KULLANIMI </h2> 

Öncelikle jQuery Kütüphanesini Ve Eklenti Kütüphanesini ekleyelim. 

```js 
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="akdoganTab.jquery.js"></script>

```

Daha Sonra Eklentimizi Çalıştıralım. <br/>

```js

<script type="text/javascript">
		$(function(){
			$("ul.tab").akdoganTab({
				aktifIndis: 0, // default değer 0
				tabDivAktif: "aktif", // default değer aktif 
				tabIcerik :$(".icerik"), // default değer $(".icerik")
				tabEffect: "fade" // default değer null 
			});
			
		});
	</script>


```
Html Yapısı: 
```html
<ul class="tab">
	<li>Tab1</li>
	<li>Tab2</li>
	<li>Tab3</li>
</ul>
<div class="icerik">Tab1 içeriği</div>
<div class="icerik">Tab2 içeriği</div>
<div class="icerik">Tab3 içeriği</div>

```

<h2> Parametreler </h2>
<ul class="anlatim">
	<li> <b>aktifIndis :</b> Tab Eklentisinin açılışta hangi Tab içeriğinin görünür olacağını belirler.<br/> Default Değeri 0 dır. Yani 1. Tab Görünür Olacaktır.</li>
	<li> <b>tabDivAktif :</b> Aktif Olan Tab ın classıdır. default değeri "<b>aktif</b>" dir.</li>
	<li> <b>tabIcerik :</b> Tab İçeriklerine Ait Nesneyi Gösterir. Default Değeri " <b> $(".icerik")</b>" tir.</li>
	<li> <b>tabEffect :</b> Tab Geçişi Arasındaki Effekti Gösterir. Default değeri null dur. yani effekt yoktur. <br/>
		<span style="border-bottom:1px solid #333;"> Alabileceği Değerler:</span> <br/>
		<ul>
			<li> <b>slide: </b> slideDown effecti ile değişir.</li>
			<li> <b>fade: </b> fadeIn effecti ile değişir.</li>
			<li> <b>slow: </b> slow effecti ile değişir.</li>
			<li> <b>ease: </b> easeIn effecti ile değişir.</li>
			<li> <b>null: </b> effect olmadan değişir.</li>
		</ul>
	</li>
</ul>
			

 
<a href="http://vehbiakdogan.com/demolar/akdoganTab/" target="_blank">Demo</a>    


