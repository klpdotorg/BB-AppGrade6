Game.userprogress=function(game){
	
};

var pie;
var _this;

Game.userprogress.prototype={

	init:function()
	{
		//window.avatarName = user;
		
	},
	preload:function(game){
		game.load.image('scrollWhite','assets/scrollWhite.png');
		game.load.image('scrollBlack','assets/scrollBlack.png');

	},

	create:function(game){

		this.dataloaded = false;
		console.log("inside userProgress");
		this.microconceptsArray =['Number Systems','Algebra','Geometry'];
		this.numberSystemsTotal = 53;
		this.geometryTotal = 7;
	//	this.decimalsTotal = 14;
		this.algebraTotal = 11;
		//this.ratioandProportionTotal = 3; 

		this.hours = 0; 
		this.minutes = 0;
		this.seconds = 0;

		this.cnumberSystemsPlayedFromServer = 0; 
		this.cgeometryPlayedFromServer = 0;
		this.calgebraPlayedFromServer = 0;
		this.cdecimalsPlayedFromServer = 0;
		this.cratioandProportionPlayedFromServer = 0;

		this.executerequiredQueries(game);
	},

	afterDataFetched:function(game){

		console.log("inside userProgress......Show");
		this.numbersystemPercent = Math.round((this.cnumberSystemsPlayedFromServer/this.numberSystemsTotal)*100);
		this.geometryPercent = Math.round((this.cgeometryPlayedFromServer/this.geometryTotal)*100);
		this.algebraPercent = Math.round((this.calgebraPlayedFromServer/this.algebraTotal)*100);
		console.log(this.cnumberSystemsPlayedFromServer, "Number sys");
		console.log(this.cgeometryPlayedFromServer, "Geomet");
		console.log(this.calgebraPlayedFromServer, "Algebra");
		// this.decimalsPercent = Math.round((this.cdecimalsPlayedFromServer/this.decimalsTotal)*100);
		// this.ratioandProportionPercent = Math.round((this.cratioandProportionPlayedFromServer/this.ratioandProportionTotal)*100);

		this.gameModeBg = game.add.image(0,0,'gameModeBg');
		this.gameModeNavBar = game.add.image(0,0,'gameModeNavBar');
		this.gameModeBackBtn = game.add.image(30,21,'gameModeBackBtn');
		this.gameModeBackBtn.anchor.setTo(0.5);
		this.gameModeBackBtn.inputEnabled = true;
		this.gameModeBackBtn.input.useHandCursor = true;
		this.gameModeBackBtn.events.onInputDown.add(function()
		{
			this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
			this.state.start('practiceModegradeSelectionScreen',true,false);	
		},this);

		this.gameModeShareBtn = game.add.image(920,21,'shareIcon');
		this.gameModeShareBtn.anchor.setTo(0.5);
		this.gameModeShareBtn.scale.setTo(0.8);
		this.gameModeShareBtn.inputEnabled = true;
		this.gameModeShareBtn.input.useHandCursor = true;
		this.gameModeShareBtn.events.onInputDown.add(function()
		{
			this.clickSound = this.add.audio('ClickSound');
			this.clickSound.play();
			nativeApp.ShareApp();
		},this);
	
		var practiceText = "Practice";
		var TotalLearningText = "Total learning time";
		var completedText = "Completed";
	
		if(window.languageSelected == "Kannada")
		{
			practiceText = "ಪ್ರಾಕ್ಟೀಸ್";
			TotalLearningText = "ಒಟ್ಟು ಕಲಿಕೆಯ ಸಮಯ :";
			completedText = "ಪೂರ್ಣ";
		}
		else if(window.languageSelected == "Hindi")
		{
			practiceText = "प्रैक्टिस";
			TotalLearningText = "कुल सीखने का समय :";
			completedText = "पूर्ण";
		}
		else if(window.languageSelected == "Odiya")
		{
			practiceText = "ପ୍ରାକ୍ଟିସ";
			TotalLearningText = "ଟୋଟାଲ  ଲେଆର୍ନିଙ୍ଗ  ର୍ଟମେ :";
			completedText = "ସମ୍ପୂର୍ଣ୍ଣ";
		}
		else if(window.languageSelected == "Gujarati")
		{
			practiceText = "અભ્યાસ";
			TotalLearningText = "કુલ ભણવાનો સમય :";
			completedText = "પૂર્ણ";
		}
		else
		{
			practiceText = "Practice";
			TotalLearningText = "Total learning time :";
			completedText = "Completed";
		}

		this.graphics = game.add.graphics(10, 50);
		this.graphics.lineStyle(2, 0x000000, 1);
		this.graphics.beginFill(0xFFFF0B,0.5);
    	this.graphics.drawRect(50, 10, 400, 40);

    	this.graphics2 = game.add.graphics(10, 90);
		this.graphics2.lineStyle(2, 0x000000, 1);
		this.graphics2.beginFill(0xFFFFFF,1);
    	this.graphics2.drawRect(50, 10, 400, 430);

		this.practicemodeTxt = this.add.text(140, 80,practiceText);
		this.practicemodeTxt.anchor.setTo(0.5);
		this.practicemodeTxt.align = 'center';
		this.practicemodeTxt.fontSize = 32;
		this.practicemodeTxt.fontWeight = 'normal';
		this.practicemodeTxt.fill = '#000000';
		this.practicemodeTxt.wordWrap = true;
		this.practicemodeTxt.wordWrapWidth = 500;

		this.practicemodeTotalLearningTimeTxt = this.add.text(180, 118,TotalLearningText);
		this.practicemodeTotalLearningTimeTxt.anchor.setTo(0.5);
		this.practicemodeTotalLearningTimeTxt.align = 'center';
		this.practicemodeTotalLearningTimeTxt.fontSize = 24;
		this.practicemodeTotalLearningTimeTxt.fontWeight = 'normal';
		this.practicemodeTotalLearningTimeTxt.fill = '#000000';
		this.practicemodeTotalLearningTimeTxt.wordWrap = true;
		this.practicemodeTotalLearningTimeTxt.wordWrapWidth = 500;

		this.timeIcon = game.add.sprite(320,116,'timeIcon');
    	this.timeIcon.frame = 0;
    	this.timeIcon.anchor.setTo(0.5);
    	this.timeIcon.scale.setTo(1.2);

    	//alert(this.practiceModeTime);
    	this.practicemodeTimeTxt = this.add.text(400, 118,this.hours+" hr, "+this.minutes+" mins");
		this.practicemodeTimeTxt.anchor.setTo(0.5);
		this.practicemodeTimeTxt.align = 'center';
		this.practicemodeTimeTxt.fontSize = 18;
		this.practicemodeTimeTxt.fontWeight = 'normal';
		this.practicemodeTimeTxt.fill = '#000000';
		this.practicemodeTimeTxt.wordWrap = true;
		this.practicemodeTimeTxt.wordWrapWidth = 500;

    	this.addScrollingtouserprogress(game, completedText);
	},

	addScrollingtouserprogress:function(game, completedText)
	{
		_this.groupScroll = _this.add.group();

		this.numberSystemsTree = game.add.sprite(160,190,'MicroConceptTree');
    	this.numberSystemsTree.frame = 0;
    	this.numberSystemsTree.anchor.setTo(0.5);
    	this.numberSystemsTree.scale.setTo(0.85,0.42);
    	this.numberSystemsTree.inputEnabled = true;
    	this.numberSystemsTree.events.onInputDown.add(function(){
    		this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
    		this.state.start('userprogress2',true,false,"Number Systems");
    	},this);

    	this.numberSystemsTreeTxt = this.add.text(160, 180, window.selctedLang.McTopicText1);
		this.numberSystemsTreeTxt.anchor.setTo(0.5);
		this.numberSystemsTreeTxt.align = 'center';
		this.numberSystemsTreeTxt.fontSize = 12;
		this.numberSystemsTreeTxt.fontWeight = 'normal';
		this.numberSystemsTreeTxt.fill = '#FFFFFF';
		this.numberSystemsTreeTxt.wordWrap = true;
		this.numberSystemsTreeTxt.wordWrapWidth = 500;

    	this.algebraTree = game.add.sprite(160,285,'MicroConceptTree');
    	this.algebraTree.frame = 1;
    	this.algebraTree.anchor.setTo(0.5);
    	this.algebraTree.scale.setTo(0.85,0.42);
    	this.algebraTree.inputEnabled = true;
    	this.algebraTree.events.onInputDown.add(function(){
    		this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
    		this.state.start('userprogress2',true,false,"Algebra");
    	},this);

    	this.algebraTreeTxt = this.add.text(160, 275, window.selctedLang.McTopicText2);
		this.algebraTreeTxt.anchor.setTo(0.5);
		this.algebraTreeTxt.align = 'center';
		this.algebraTreeTxt.fontSize = 12;
		this.algebraTreeTxt.fontWeight = 'normal';
		this.algebraTreeTxt.fill = '#FFFFFF';
		this.algebraTreeTxt.wordWrap = true;
		this.algebraTreeTxt.wordWrapWidth = 500;

    	this.geometryTree = game.add.sprite(160,380,'MicroConceptTree');// 475 -y
    	this.geometryTree.frame = 3;
    	this.geometryTree.anchor.setTo(0.5);
    	this.geometryTree.scale.setTo(0.85,0.42);
		this.geometryTree.inputEnabled = true;
    	this.geometryTree.events.onInputDown.add(function(){
    		this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
    		this.state.start('userprogress2',true,false,"Geometry");
    	},this);

    	this.geometryTreeTxt = this.add.text(160, 370, window.selctedLang.McTopicText4);//465-y
		this.geometryTreeTxt.anchor.setTo(0.5);
		this.geometryTreeTxt.align = 'center';
		this.geometryTreeTxt.fontSize = 12;
		this.geometryTreeTxt.fontWeight = 'normal';
		this.geometryTreeTxt.fill = '#FFFFFF';
		this.geometryTreeTxt.wordWrap = true;
		this.geometryTreeTxt.wordWrapWidth = 500;

		this.completedTxt = this.add.text(320, 140,completedText);
		this.completedTxt.anchor.setTo(0.5);
		this.completedTxt.align = 'center';
		this.completedTxt.fontSize = 14;
		this.completedTxt.fontWeight = 'normal';
		this.completedTxt.fill = '#000000';
		this.completedTxt.wordWrap = true;
		this.completedTxt.wordWrapWidth = 500;

		this.numbersystemsPrgress = game.add.sprite(320,180,'progressCircle');
    	this.numbersystemsPrgress.frame = this.numbersystemPercent-1;
    	this.numbersystemsPrgress.anchor.setTo(0.5);
    	this.numbersystemsPrgress.scale.setTo(1.5);


    	this.numbersystemsPrgress.inputEnabled = true;
    	this.numbersystemsPrgress.events.onInputDown.add(function(){
    		this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
    		this.state.start('userprogress2',true,false,"Number Systems");
    	},this);

    	this.numbersystemsPrgressTxt = this.add.text(320, 180, this.numbersystemPercent+'%');
		this.numbersystemsPrgressTxt.anchor.setTo(0.5);
		this.numbersystemsPrgressTxt.align = 'center';
		this.numbersystemsPrgressTxt.fontSize = 20;
		this.numbersystemsPrgressTxt.fontWeight = 'normal';
		this.numbersystemsPrgressTxt.fill = '#000000';
		this.numbersystemsPrgressTxt.wordWrap = true;
		this.numbersystemsPrgressTxt.wordWrapWidth = 500;

		this.numbersystemsPrgressTotalTxt = this.add.text(390, 180, this.cnumberSystemsPlayedFromServer+'/'+this.numberSystemsTotal);
		this.numbersystemsPrgressTotalTxt.anchor.setTo(0.5);
		this.numbersystemsPrgressTotalTxt.align = 'center';
		this.numbersystemsPrgressTotalTxt.fontSize = 20;
		this.numbersystemsPrgressTotalTxt.fontWeight = 'normal';
		this.numbersystemsPrgressTotalTxt.fill = '#000000';
		this.numbersystemsPrgressTotalTxt.wordWrap = true;
		this.numbersystemsPrgressTotalTxt.wordWrapWidth = 500;

    	this.algebraPrgress = game.add.sprite(320,280,'progressCircle');
    	this.algebraPrgress.frame = this.algebraPercent-1;
    	this.algebraPrgress.anchor.setTo(0.5);
    	this.algebraPrgress.scale.setTo(1.5);
    	this.algebraPrgress.inputEnabled = true;
    	this.algebraPrgress.events.onInputDown.add(function(){
    		this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
    		this.state.start('userprogress2',true,false,"Algebra");
    	},this);

    	this.algebraPrgressTxt = this.add.text(320, 280, this.algebraPercent+'%');
		this.algebraPrgressTxt.anchor.setTo(0.5);
		this.algebraPrgressTxt.align = 'center'; 
		this.algebraPrgressTxt.fontSize = 20;
		this.algebraPrgressTxt.fontWeight = 'normal';
		this.algebraPrgressTxt.fill = '#000000';
		this.algebraPrgressTxt.wordWrap = true;
		this.algebraPrgressTxt.wordWrapWidth = 500;

		this.algebraPrgressTotalTxt = this.add.text(390, 280, this.calgebraPlayedFromServer+'/'+this.algebraTotal);
		this.algebraPrgressTotalTxt.anchor.setTo(0.5);
		this.algebraPrgressTotalTxt.align = 'center';
		this.algebraPrgressTotalTxt.fontSize = 20;
		this.algebraPrgressTotalTxt.fontWeight = 'normal';
		this.algebraPrgressTotalTxt.fill = '#000000';
		this.algebraPrgressTotalTxt.wordWrap = true;
		this.algebraPrgressTotalTxt.wordWrapWidth = 500;

    	this.geometryPrgress = game.add.sprite(320,380,'progressCircle');//480-y
    	this.geometryPrgress.frame = this.geometryPercent-1;
    	this.geometryPrgress.anchor.setTo(0.5);
    	this.geometryPrgress.scale.setTo(1.5);
		this.geometryTree.inputEnabled = true;
    	this.geometryTree.events.onInputDown.add(function(){
    		this.clickSound = this.add.audio('ClickSound');
        	this.clickSound.play();
    		this.state.start('userprogress2',true,false,"Geometry");
    	},this);

    	this.geometryPrgressTxt = this.add.text(320, 380, this.geometryPercent+'%');
		this.geometryPrgressTxt.anchor.setTo(0.5);
		this.geometryPrgressTxt.align = 'center';
		this.geometryPrgressTxt.fontSize = 20;
		this.geometryPrgressTxt.fontWeight = 'normal';
		this.geometryPrgressTxt.fill = '#000000';
		this.geometryPrgressTxt.wordWrap = true;
		this.geometryPrgressTxt.wordWrapWidth = 500;

		this.geometryPrgressTotalTxt = this.add.text(390, 380, this.cgeometryPlayedFromServer+'/'+this.geometryTotal);
		this.geometryPrgressTotalTxt.anchor.setTo(0.5);
		this.geometryPrgressTotalTxt.align = 'center';
		this.geometryPrgressTotalTxt.fontSize = 20;
		this.geometryPrgressTotalTxt.fontWeight = 'normal';
		this.geometryPrgressTotalTxt.fill = '#000000';
		this.geometryPrgressTotalTxt.wordWrap = true;
		this.geometryPrgressTotalTxt.wordWrapWidth = 500;

		_this.swipeUpFlag = true;
		_this.swipeDownFlag = false;

		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xA24098, 0);
		_this.graphicsBg.drawRect(70, 10, 350, 800);
		_this.graphicsBg.boundsPadding = 0;

		_this.mask = _this.add.graphics(10, 135);
		_this.mask.lineStyle(0, 0xFFFFFF, 0);
		_this.mask.beginFill(0xA24098, 1);
		_this.mask.drawRect(70, 10, 360, 375);
		_this.mask.boundsPadding = 0;

		_this.graphicsBg.mask = _this.mask;
		_this.graphicsBg.addChild(this.numberSystemsTree);
		_this.graphicsBg.addChild(this.numberSystemsTreeTxt);
		_this.graphicsBg.addChild(this.algebraTree);
		_this.graphicsBg.addChild(this.algebraTreeTxt);
		_this.graphicsBg.addChild(this.geometryTree);
		_this.graphicsBg.addChild(this.geometryTreeTxt);
		_this.graphicsBg.addChild(this.numbersystemsPrgress);
		_this.graphicsBg.addChild(this.numbersystemsPrgressTxt);
		_this.graphicsBg.addChild(this.numbersystemsPrgressTotalTxt);
		_this.graphicsBg.addChild(this.algebraPrgress);
		_this.graphicsBg.addChild(this.algebraPrgressTxt);
		_this.graphicsBg.addChild(this.algebraPrgressTotalTxt);
		_this.graphicsBg.addChild(this.geometryPrgress);
		_this.graphicsBg.addChild(this.geometryPrgressTxt);
		_this.graphicsBg.addChild(this.geometryPrgressTotalTxt);
	
		_this.scrollWhite = _this.add.sprite(425,130,'scrollWhite');
		_this.scrollBlack = _this.add.sprite(428,135,'scrollBlack');

		_this.graphicsBg.inputEnabled = true;
		_this.graphicsBg.input.enableDrag();
		_this.graphicsBg.input.allowHorizontalDrag = false;
		_this.graphicsBg.events.onDragUpdate.add(function(target){
			console.log(_this.graphicsBg.y);

			if(_this.graphicsBg.y>0)
				_this.graphicsBg.y = 0;
			if(_this.graphicsBg.y<-95)
				_this.graphicsBg.y = -95;

			/*if(_this.scrollBlack.y>-47){
				_this.scrollBlack.y = 210;
				_this.graphicsBg.y = -95;
			}
			else if(_this.scrollBlack.y<-47){
				_this.scrollBlack.y = 135;
				_this.graphicsBg.y = 0;
			}*/

		},true);

		_this.scrollBlack.inputEnabled = true;

    	_this.scrollBlack.input.enableDrag();
		_this.scrollBlack.input.allowHorizontalDrag = false;
		_this.scrollBlack.events.onDragUpdate.add(function(target){
			console.log(_this.scrollBlack.y);
			
			
			if(_this.scrollBlack.y<135)
				_this.scrollBlack.y = 135;

			if(_this.scrollBlack.y>210)
				_this.scrollBlack.y = 210;

			if(_this.scrollBlack.y>172){
				_this.scrollBlack.y = 210;
				_this.graphicsBg.y = -95;
			}
			else if(_this.scrollBlack.y<172){
				_this.scrollBlack.y = 135;
				_this.graphicsBg.y = 0;
			}


		},true);
		
	},

	executerequiredQueries : function(game)
	{
		for(let i=0;i<this.microconceptsArray.length;i++)
		{
			console.log("inside query function",this.microconceptsArray[i]);
			//Total count of games under each microconcept
			BBplusplusdbDetails.bbplusplusdbhandler.executeSql('SELECT COUNT(*) AS totalCount FROM UserProgress WHERE microConcept ="'+this.microconceptsArray[i]+'"', [], 
			(result)=>
			{
				console.log("inside result of each count");
				if(this.microconceptsArray[i] == 'Number Systems')
				{
					this.cnumberSystemsPlayedFromServer = result.rows.item(0).totalCount;
					console.log(this.cnumberSystemsPlayedFromServer);
				}
				else if(this.microconceptsArray[i] == 'Algebra')
				{
					this.calgebraPlayedFromServer = result.rows.item(0).totalCount;
					console.log(this.calgebraPlayedFromServer);
				}
				else if(this.microconceptsArray[i] == 'Geometry')
				{
					this.cgeometryPlayedFromServer = result.rows.item(0).totalCount;
					console.log(this.cgeometryPlayedFromServer);
				}
			}
			, this.localdatafailed);
		}

		//Total learning time of all games
		BBplusplusdbDetails.bbplusplusdbhandler.executeSql('SELECT totalLearingTimeinHrs, totalLearingTimeinMins, totalLearingTimeinSecs FROM UserProgress',[],
		(result) =>
		{
			if(result.rows.length>0)
			{
				var hours =0 , minutes=0 ,seconds = 0;
	
				for(var i=0;i<result.rows.length;i++)
				{
					console.log("getTotalLearningTime",result.rows.item(i));
					hours = hours + parseInt(result.rows.item(i).totalLearingTimeinHrs);
					minutes = minutes + parseInt(result.rows.item(i).totalLearingTimeinMins);
					seconds = seconds + parseInt(result.rows.item(i).totalLearingTimeinSecs);
				}
	
				console.log("hours",hours);
				console.log("minutes",minutes);
				console.log("seconds",seconds);
	
				const newSeconds = seconds % 60;
				const totalminutes = Math.floor(parseInt(seconds)/60)+ minutes % 60;
				const newHours = Math.floor(parseInt(totalminutes)/60);
				const newMinutes = totalminutes % 60;
	
				this.hours = newHours;
				this.minutes = newMinutes;
				console.log("newSeconds",newSeconds);
				console.log("newHours",newHours);
				console.log("newMinutes",newMinutes);
			}
			else {
				this.hours = 0;
				this.minutes = 0;
			}
	
			this.dataloaded = true;
			this.afterDataFetched(game);
		}
		,this.localdatafailed);
	},

	localdatafailed : function(error){
		console.log(error);
	},
}
