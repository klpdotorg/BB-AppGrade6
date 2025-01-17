var exitOnce = false;
Game.index2=function(){

};

Game.index2.prototype={

	gamesVar:null,

    // Application Constructor
    init: function(user,flag) {
    	
    	//Fullscreen.on();
    	window.user = user;
		window.acctkn = user.uid;
		//window.avatarName = user.name;
		window.deviceId = user.deviceId;
		window.languageSelected = user.language;
		window.gradeSelected = user.grade;
		window.selctedLang = null;
		//window.baseUrl = cordova.file.externalRootDirectory+"Android/data/com.akshara.easymath/Files/Download/.gameFilesBBV5_0_5/www/";
		window.baseUrl = "./";
		window.score = 50;
		window.mcIcon = null;
		window.userProgress = flag;

		window.rateCount = 0;

		document.addEventListener('resume',function(){
			AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_FULLSCREEN, null, null);
		},false);

    },


    preload:function(game)
    {
    	//game.cache.destroy();	
    	game.load.image('exitBg','assets/exitAssets/exitBg.png');
    	game.load.image('confirmBg','assets/exitAssets/confirmBg.png');  	 
    },



    create: function(game) {
      
      window.currScreen = "practiceModegradeSelectionScreen";
       
       this.gamesVar = game;

	   BBplusplusdbDetails.initializeDB();
	  //BBplusplusdbDetails.deleteDS();
		window.timeSaveFunc = function()
		{
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;//January is 0, so always add + 1

			var yyyy = today.getFullYear();
			if(dd<10){dd='0'+dd}
			if(mm<10){mm='0'+mm}
			
			var hr = today.getHours();
			var min = today.getMinutes();
			var sec = today.getSeconds();
			
			//today = mm+'/'+dd+'/'+yyyy+' '+hr+':'+min+':'+sec;
			today = yyyy+':'+mm+':'+dd+':'+hr+':'+min+':'+sec;
			return today;
		};

		game.stage.backgroundColor = '#71c5cf';


    	document.addEventListener('backbutton', function(e) {
        
        	// if((window.prevScreen == "gameScreen") || window.currScreen == "practiceModegradeSelectionScreen")
    		// {
				e.preventDefault();
				
				if(game && !exitOnce)
				{
				    game.input.enabled = true;
					exitOnce = true;

					var exitGrp = game.add.group();

					var stageBg = game.add.graphics(0, 0);
					stageBg.lineStyle(0, 0xFFFFFF, 0.8);
					stageBg.beginFill(0xFFFFFF, 1);
					stageBg.drawRect(0,0,960,540);
					stageBg.boundsPadding = 0;
					stageBg.alpha = 0.2;


					var exitBg = game.add.sprite(game.world.centerX,game.world.centerY,'exitBg');
					exitBg.anchor.setTo(0.5);
					exitBg.inputEnabled = true;
					exitBg.input.priorityID = 2;


					var exitTxt = null;
					var okTxt = null;
					var cancelTxt = null;

					if(window.languageSelected=="Hindi")
					{
						exitTxt = "क्या गेम छोड़ना चाहते हो?";
						okTxt = "हाँ";
						cancelTxt = "नहीं";
					}
					else if(window.languageSelected=="Kannada")
					{
						exitTxt = "ನೀವು ಆಟದಿಂದ ನಿರ್ಗಮಿಸಲು \n ಬಯಸುತ್ತೀರಾ?";
						okTxt = "ಹೌದು";
						cancelTxt = "ಇಲ್ಲ";
					}
					else if(window.languageSelected=="ODI")
					{
						exitTxt = "ଆପଣ ଖେଳ ଛାଡ଼ି ଯିବାକୁ ଚାହାନ୍ତି କି?";
						okTxt = "ହଁ";
						cancelTxt = "ନା";
					}
					else if(window.languageSelected=="Gujarati")
					{
						exitTxt = "તમે છોડવા માગો છો?";
						okTxt = "હા";
						cancelTxt = "ના";
					}
					else
					{
						exitTxt = "Do you want to quit?";
						okTxt = "Yes";
						cancelTxt = "No";
					}

					var exitText = game.add.text(game.world.centerX,game.world.centerY-50,exitTxt);
		            exitText.anchor.setTo(0.5);
		            exitText.align = 'center';
		            exitText.fontSize = 26;
		            exitText.fontWeight = 'normal';
		            exitText.fill = '#FFFFFF';

					var okBtn = game.add.sprite(game.world.centerX-100,game.world.centerY+50,'confirmBg');
					okBtn.anchor.setTo(0.5);

					var okText = game.add.text(game.world.centerX-100,game.world.centerY+50,okTxt);
		            okText.anchor.setTo(0.5);
		            okText.align = 'center';
		            okText.fontSize = 20;
		            okText.fontWeight = 'normal';
		            okText.fill = '#FFFFFF';


					var cancelBtn = game.add.sprite(game.world.centerX+100,game.world.centerY+50,'confirmBg');
					cancelBtn.anchor.setTo(0.5);

					var cancelText = game.add.text(game.world.centerX+100,game.world.centerY+50,cancelTxt);
		            cancelText.anchor.setTo(0.5);
		            cancelText.align = 'center';
		            cancelText.fontSize = 20;
		            cancelText.fontWeight = 'normal';
		            cancelText.fill = '#FFFFFF';

					exitGrp.add(stageBg);
					exitGrp.add(exitBg);
					exitGrp.add(exitText);
					exitGrp.add(okBtn);
					exitGrp.add(okText);
					exitGrp.add(cancelBtn);
					exitGrp.add(cancelText);

					stageBg.inputEnabled = true;
					stageBg.events.onInputDown.add(function(){
						
					},game);

					okBtn.inputEnabled = true;
					okBtn.input.priorityID = 3;
					okBtn.events.onInputDown.add(function(){
						exitGrp.destroy();
						window.prevScreen = "";
						exitOnce = false;
						//navigator.app.exitApp();
						//nativeApp.CloseApp();
						commonNavBar.stopTimer();
		                 commonNavBar.stopVoice();
		                 commonNavBar.navBar = null;
		                 commonNavBar.backbtn = null;
		                 commonNavBar.mcIcon = null;
		                 commonNavBar.speakerbtn = null;

		                //  if(window.currScreen == "practiceModegradeSelectionScreen")//microconcept screen
		                //  {
		                navigator.app.exitApp();
		                //  }else{
		                //  	game.state.start('practiceModegradeSelectionScreen',true,false);
		                //  }

					},game);

					cancelBtn.inputEnabled = true;
					cancelBtn.input.priorityID = 4;
					cancelBtn.events.onInputDown.add(function(){

						exitGrp.destroy();
						exitOnce = false;
					},game);

					//game.add.stage(exitGrp);
		
				}
			//}
			/*else if(window.prevScreen == "gameModeSelectionScreen"&& window.currScreen == "gameModeSelectionScreen")
			{
				nativeApp.onButtonShowPopupWindowClick();
			}*/
			// else
			// {
			// 	/*if(window.mode == "practice")
			// 	{
			// 		game.state.start('practiceModegradeSelectionScreen',true,false);	
			// 	}	
			// 	else
			// 	{
			// 		game.state.start('challengeModeGgradeSelectionScreen',true,false);
			// 	}*/
			// 	if(grade1NumberSenseSelected == true)
			// 	{
			// 		grade1NumberSenseSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade1NumberOperationSelected == true)
			// 	{
			// 		grade1NumberOperationSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade1MeasurementSelected == true)
			// 	{
			// 		grade1MeasurementSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade1ShapesSenseSelected == true)
			// 	{
			// 		grade1ShapesSenseSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade2NumberSenseSelected == true)
			// 	{
			// 		grade2NumberSenseSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade2NumberOperationSelected == true)
			// 	{
			// 		grade2NumberOperationSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade2MeasurementSelected == true)
			// 	{
			// 		grade2MeasurementSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade2ShapesSenseSelected == true)
			// 	{
			// 		grade2ShapesSenseSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade3NumberSenseSelected == true)
			// 	{
			// 		grade3NumberSenseSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade3NumberOperationSelected == true)
			// 	{
			// 		grade3NumberOperationSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade3MeasurementSelected == true)
			// 	{
			// 		grade3MeasurementSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade3ShapesSenseSelected == true)
			// 	{
			// 		grade3ShapesSenseSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);				
			// 	}
			// 	else if(grade4MeasurementSelected == true)
			// 	{
			// 		grade4MeasurementSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade4ShapesSenseSelected == true)
			// 	{
			// 		grade4ShapesSenseSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade4NumberSenseSelected == true)
			// 	{
			// 		grade4NumberSenseSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade5ShapesSenseSelected == true)
			// 	{
			// 		grade5ShapesSenseSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(grade5NumberSenseSelected == true)
			// 	{
			// 		grade5NumberSenseSelected = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(selectgrade1MicroConcept == true)
			// 	{
			// 		selectgrade1MicroConcept = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(selectgrade2MicroConcept == true)
			// 	{
			// 		selectgrade2MicroConcept = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(selectgrade3MicroConcept == true)
			// 	{
			// 		selectgrade3MicroConcept = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(selectgrade4MicroConcept == true)
			// 	{
			// 		selectgrade4MicroConcept = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	else if(selectgrade5MicroConcept == true)
			// 	{
			// 		selectgrade5MicroConcept = false;
			// 		game.state.start('gradeSelectionScreen',true,false);
			// 	}
			// 	//else if(measurement1 == true)
			// 	// {
			// 	// 	measurement1 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else if(measurement2 == true)
			// 	// {
			// 	// 	measurement2 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else if(measurement3 == true)
			// 	// {
			// 	// 	measurement3 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else if(measurement4 == true)
			// 	// {
			// 	// 	measurement4 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else if(numberOpertaion1 == true)
			// 	// {
			// 	// 	numberOpertaion1 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else if(numberOpertaion2 == true)
			// 	// {
			// 	// 	numberOpertaion2 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else if(numberOpertaion3 == true)
			// 	// {
			// 	// 	numberOpertaion3 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else if(numberOpertaion4 == true)
			// 	// {
			// 	// 	numberOpertaion4 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else if(numberSense1 == true)
			// 	// {
			// 	// 	numberSense1 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else if(numberSense2 == true)
			// 	// {
			// 	// 	numberSense2 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else if(numberSense3 == true)
			// 	// {
			// 	// 	numberSense3 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else if(numberSense4 == true)
			// 	// {
			// 	// 	numberSense4 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else if(numberSense5 == true)
			// 	// {
			// 	// 	numberSense5 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else if(numberSense6 == true)
			// 	// {
			// 	// 	numberSense6 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else if(numberSense7 == true)
			// 	// {
			// 	// 	numberSense7 == false;
			// 	// 	game.state.start('gradeSelectionScreen',true,false);
			// 	// }
			// 	// else
			// 	// {
			// 	// 	game.state.start('gameModeSelectionScreen',true,false);	
			// 	// }	
			
			// }

    	}, false);

    	window.prevScreen = "";
    	game.state.start('boot');


    },
};
