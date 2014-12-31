/**
* 	@author: Vehbi AKDOGÂAN
* 	@mail: mf.leqelyy@gmail.com || info@vehbiakdogan.com
* 	@website: vehbiakdogan.com
*/
(function($){
	$.fn.akdoganTab = function(ayarlar) {
		
		var conf = $.extend({
			aktifIndis : 0,
			tabDivAktif: "aktif",
			tabIcerik :$(".icerik"),
			tabEffect: null
		},ayarlar);
		
		return this.each(function(){
			var tabLi = $(this).find("li"),
				tabIcerik = conf.tabIcerik;
			tabLi.eq(conf.aktifIndis).addClass(conf.tabDivAktif);
			tabIcerik.hide();
			tabIcerik.eq(conf.aktifIndis).show();
			
			tabLi.click(function(){
				
				var indis = $(this).index();
				tabLi.removeClass("aktif");
				$(this).addClass("aktif");
				tabIcerik.hide();
				if(conf.tabEffect == "slide") {
					tabIcerik.eq(indis).slideDown();
				}else if(conf.tabEffect == "fade") {
					tabIcerik.eq(indis).fadeIn();
				}else if(conf.tabEffect == "ease") {
					tabIcerik.eq(indis).show("ease");
				}else if(conf.tabEffect == "slow") {
					tabIcerik.eq(indis).show("slow");
				}
				else {
					tabIcerik.eq(indis).show();
				}
				
			});
			
			
			
			
			
			
			
		});
		
	}
	
	
	
	
	
	
	
	
	
})(jQuery);
