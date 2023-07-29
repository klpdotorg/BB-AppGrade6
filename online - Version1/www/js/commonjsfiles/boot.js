var Game={};

Game.boot=function(){
	
};

Game.boot.prototype={
	
	preload:function(){

		 window.baseUrl = "./";
		//window.baseUrl = "https://abbmath.klp.org.in/bbplusplus/assets1/";
		_this = this;
		//_this.cache.destroy();
				
		_this.languageSelected = localStorage.setItem("language","ENG");//ENG
		window.languageSelected = "English";
		_this.load.json('translations','js/lang.json');
				
		_this.load.image('prgressbarOutLine',window.baseUrl+'assets/commonAssets/prgressbarOutLine.png');
		_this.load.image('preloadBar',window.baseUrl+'assets/commonAssets/prgressbar.png');
		_this.load.image('loadingBg1',window.baseUrl+'assets/commonAssets/loadingBg1.png');
		_this.load.image('loadingBg2',window.baseUrl+'assets/commonAssets/loadingBg2.png');	
		_this.load.image('CommonBackground',window.baseUrl+'assets/commonAssets/commonBg.png');
	},

	create:function(game){
		_this.bg = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'CommonAssets','commonBg');
		_this.bg.scale.setTo(1,1.5);
		
		game.input.maxPointers = 1;
		
		screen.orientation.lock('landscape');
		AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_FULLSCREEN, null, null);
		
		_this.game.scale.setGameSize(960, 540);
		
        _this.scale.forceOrientation(false, true);
		
		
		var translations = _this.cache.getJSON('translations');
		
		if(window.languageSelected == "Hindi")
		{
			console.log("ITS hindi game...!");
			window.selctedLang = translations.hn;
		}
		else if(window.languageSelected == "Kannada")
		{
			window.selctedLang = translations.kan;
		}
		else if(window.languageSelected == "ODI")
		{
			window.selctedLang = translations.od;
		}
		else if(window.languageSelected == "GUJ")
		{
			window.selctedLang = translations.gu;
		}
		else if(window.languageSelected == "Marathi")
		{
			window.selctedLang = translations.ma;
		}
		else if(window.languageSelected == "Telugu")
		{
			window.selctedLang = translations.te;
		}
		else if(window.languageSelected == "Tamil")
		{
			window.selctedLang = translations.tm;
		}
		else if(window.languageSelected == "Urdu")
		{
			window.selctedLang = translations.ur;
		}
		else
		{
			window.selctedLang = translations.en;
		}
		

		_this.state.start('preloader',true,false);

				
	},
	
	shutdown:function()
	{
		_this = null;
	}
	
}