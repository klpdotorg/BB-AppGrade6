Game.userprogress2=function(game){
	
};

var pie;

Game.userprogress2.prototype={

    init:function(selectMC){
        this.selectedMc = selectMC; 
        
    },

	create:function(game){
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
			this.state.start('userprogress',true,false);
			
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

        this.completedTxt = this.add.text(320, 140,completedText);
        this.completedTxt.anchor.setTo(0.5);
        this.completedTxt.align = 'center';
        this.completedTxt.fontSize = 14;
        this.completedTxt.fontWeight = 'normal';
        this.completedTxt.fill = '#000000';
        this.completedTxt.wordWrap = true;
        this.completedTxt.wordWrapWidth = 500;

        this.gradeTopicsArray = ["Numbers","Integers","Fractions","Decimals","Ratio and Proportion","Variable and Equation","Shapes","Mensuration"];
       // this.gradeTopicsArray = ["Numbers","Integers","Fractions","Operations","Patterns","Shapes","Mensuration","Operation","Conversion"];
        this.hours1 = 0;this.minutes1 = 0;this.seconds1 = 0;
        this.hours2 = 0;this.minutes2 = 0;this.seconds2 = 0;
        this.hours3 = 0;this.minutes3 = 0;this.seconds3 = 0;
        this.hours4 = 0;this.minutes4 = 0;this.seconds4 = 0;

        this.practiceModeTime = '0 hr, 0 mins';
        this.cnumbersTotal = 7;
		this.cintegersTotal = 14;
		this.cfractionsTotal = 15;
        this.cdecimalsTotal = 14;
        this.cratioandproportionTotal = 3;

		this.calgebraTotal = 11;
		//this.cpatternsTotal = 11;

		this.cshapesTotal = 6;
		this.cmensurationTotal = 1;

        this.cnumbersPlayedFromServer = 0;
		this.cintegersPlayedFromServer = 0;
		this.cfractionsPlayedFromServer = 0;
        this.cdecimalPlayedFromServer = 0;
        this.crationandproportionPlayedFromServer = 0;
		
		this.calgebraPlayedFromServer = 0;
	
		this.cshapesPlayedFromServer = 0;
		this.cmensurationPlayedFromServer = 0;

        this.executerequiredQueries(game);
	},

    gotoAddNSMCTopics:function(game){
        this.numbersPercent = Math.round((this.cnumbersPlayedFromServer/this.cnumbersTotal)*100);
		this.integersPercent = Math.round((this.cintegersPlayedFromServer/this.cintegersTotal)*100);
		this.fractionsPercent = Math.round((this.cfractionsPlayedFromServer/this.cfractionsTotal)*100);
        this.decimalsPercent = Math.round((this.cdecimalPlayedFromServer/this.cdecimalsTotal)*100);
        this.ratioandproportionPercent = Math.round((this.crationandproportionPlayedFromServer/this.cratioandproportionTotal)*100);

        this.practicemodeTimeTxt = this.add.text(400, 118,this.practiceModeTime);
        this.practicemodeTimeTxt.anchor.setTo(0.5);
        this.practicemodeTimeTxt.align = 'center';
        this.practicemodeTimeTxt.fontSize = 18;
        this.practicemodeTimeTxt.fontWeight = 'normal';
        this.practicemodeTimeTxt.fill = '#000000';
        this.practicemodeTimeTxt.wordWrap = true;
        this.practicemodeTimeTxt.wordWrapWidth = 500;

        this.numbersTree = game.add.sprite(140,160,'mcIconNumber');
        //this.operationsTree.frame = 0;
        this.numbersTree.anchor.setTo(0.5);
        this.numbersTree.scale.setTo(1.5);

        this.numbersTreeTxt = this.add.text(140, 200, window.selctedLang.numbersTitle);
        this.numbersTreeTxt.anchor.setTo(0.5);
        this.numbersTreeTxt.align = 'center';
        this.numbersTreeTxt.fontSize = 16;
        this.numbersTreeTxt.fontWeight = 'normal';
        this.numbersTreeTxt.fill = '#000000';
        this.numbersTreeTxt.wordWrap = true;
        this.numbersTreeTxt.wordWrapWidth = 500;

        this.integersTree = game.add.sprite(140,240,'mcIconInteger');
        //this.patternsTree.frame = 1;
        this.integersTree.anchor.setTo(0.5);
        this.integersTree.scale.setTo(1.5);

        this.integersTreeTxt = this.add.text(140, 280, window.selctedLang.integersTitle);
        this.integersTreeTxt.anchor.setTo(0.5);
        this.integersTreeTxt.align = 'center';
        this.integersTreeTxt.fontSize = 16;
        this.integersTreeTxt.fontWeight = 'normal';
        this.integersTreeTxt.fill = '#000000';
        this.integersTreeTxt.wordWrap = true;
        this.integersTreeTxt.wordWrapWidth = 500;

        this.fractionsTree = game.add.sprite(140,320,'mcIconFraction');
        //this.fractionsTree.frame = 2;
        this.fractionsTree.anchor.setTo(0.5);
        this.fractionsTree.scale.setTo(1.5);

        this.fractionsTreeTxt = this.add.text(140, 360, window.selctedLang.fractionTitle);
        this.fractionsTreeTxt.anchor.setTo(0.5);
        this.fractionsTreeTxt.align = 'center';
        this.fractionsTreeTxt.fontSize = 16;
        this.fractionsTreeTxt.fontWeight = 'normal';
        this.fractionsTreeTxt.fill = '#000000';
        this.fractionsTreeTxt.wordWrap = true;
        this.fractionsTreeTxt.wordWrapWidth = 500;

        this.decimalsTreeTree = game.add.sprite(140,400,'mcIconDecimal');
        //this.decimalsTreeTree.frame = 2;
        this.decimalsTreeTree.anchor.setTo(0.5);
        this.decimalsTreeTree.scale.setTo(1.5);

        this.decimalsTreeTreeTxt = this.add.text(140, 440, window.selctedLang.decimalTitle);
        this.decimalsTreeTreeTxt.anchor.setTo(0.5);
        this.decimalsTreeTreeTxt.align = 'center';
        this.decimalsTreeTreeTxt.fontSize = 16;
        this.decimalsTreeTreeTxt.fontWeight = 'normal';
        this.decimalsTreeTreeTxt.fill = '#000000';
        this.decimalsTreeTreeTxt.wordWrap = true;
        this.decimalsTreeTreeTxt.wordWrapWidth = 500;

        this.ratioandproportionTree = game.add.sprite(140,480,'mcIconRatioProportion');
        //this.decimalsTreeTree.frame = 2;
        this.ratioandproportionTree.anchor.setTo(0.5);
        this.ratioandproportionTree.scale.setTo(1.5);

        this.ratioandproportionTreeTxt = this.add.text(178, 520, "RATIO & PROPORTION"); // window.selctedLang.ratioandproportionTitle
        this.ratioandproportionTreeTxt.anchor.setTo(0.5);
        this.ratioandproportionTreeTxt.align = 'center';
        this.ratioandproportionTreeTxt.fontSize = 16;
        this.ratioandproportionTreeTxt.fontWeight = 'normal';
        this.ratioandproportionTreeTxt.fill = '#000000';
        this.ratioandproportionTreeTxt.wordWrap = true;
        this.ratioandproportionTreeTxt.wordWrapWidth = 500;


        this.numbersPrgress = game.add.sprite(320,170,'progressCircle');
        this.numbersPrgress.frame = this.numbersPercent-1;
        this.numbersPrgress.anchor.setTo(0.5);
        this.numbersPrgress.scale.setTo(1.2);

        this.numbersPrgressTxt = this.add.text(320, 170, this.numbersPercent+'%');
        this.numbersPrgressTxt.anchor.setTo(0.5);
        this.numbersPrgressTxt.align = 'center';
        this.numbersPrgressTxt.fontSize = 20;
        this.numbersPrgressTxt.fontWeight = 'normal';
        this.numbersPrgressTxt.fill = '#000000';
        this.numbersPrgressTxt.wordWrap = true;
        this.numbersPrgressTxt.wordWrapWidth = 500;

        this.numbersPrgressTotalTxt = this.add.text(390, 170, this.cnumbersPlayedFromServer+'/'+this.cnumbersTotal);
        this.numbersPrgressTotalTxt.anchor.setTo(0.5);
        this.numbersPrgressTotalTxt.align = 'center';
        this.numbersPrgressTotalTxt.fontSize = 20;
        this.numbersPrgressTotalTxt.fontWeight = 'normal';
        this.numbersPrgressTotalTxt.fill = '#000000';
        this.numbersPrgressTotalTxt.wordWrap = true;
        this.numbersPrgressTotalTxt.wordWrapWidth = 500;

        this.integersPrgress = game.add.sprite(320,250,'progressCircle');
        this.integersPrgress.frame = this.integersPercent-1;
        this.integersPrgress.anchor.setTo(0.5);
        this.integersPrgress.scale.setTo(1.2);

        this.integersPrgressTxt = this.add.text(320, 250, this.integersPercent+'%');
        this.integersPrgressTxt.anchor.setTo(0.5);
        this.integersPrgressTxt.align = 'center';
        this.integersPrgressTxt.fontSize = 20;
        this.integersPrgressTxt.fontWeight = 'normal';
        this.integersPrgressTxt.fill = '#000000';
        this.integersPrgressTxt.wordWrap = true;
        this.integersPrgressTxt.wordWrapWidth = 500;

        this.integersPrgressTotalTxt = this.add.text(390, 250, this.cintegersPlayedFromServer+'/'+this.cintegersTotal);
        this.integersPrgressTotalTxt.anchor.setTo(0.5);
        this.integersPrgressTotalTxt.align = 'center';
        this.integersPrgressTotalTxt.fontSize = 20;
        this.integersPrgressTotalTxt.fontWeight = 'normal';
        this.integersPrgressTotalTxt.fill = '#000000';
        this.integersPrgressTotalTxt.wordWrap = true;
        this.integersPrgressTotalTxt.wordWrapWidth = 500;

        this.fractionsPrgress = game.add.sprite(320,330,'progressCircle');
        this.fractionsPrgress.frame = this.fractionsPercent-1;
        this.fractionsPrgress.anchor.setTo(0.5);
        this.fractionsPrgress.scale.setTo(1.2);

        this.fractionsPrgressTxt = this.add.text(320, 330, this.fractionsPercent+'%');
        this.fractionsPrgressTxt.anchor.setTo(0.5);
        this.fractionsPrgressTxt.align = 'center';
        this.fractionsPrgressTxt.fontSize = 20;
        this.fractionsPrgressTxt.fontWeight = 'normal';
        this.fractionsPrgressTxt.fill = '#000000';
        this.fractionsPrgressTxt.wordWrap = true;
        this.fractionsPrgressTxt.wordWrapWidth = 500;

        this.fractionsPrgressTotalTxt = this.add.text(390, 330, this.cfractionsPlayedFromServer+'/'+this.cfractionsTotal);
        this.fractionsPrgressTotalTxt.anchor.setTo(0.5);
        this.fractionsPrgressTotalTxt.align = 'center';
        this.fractionsPrgressTotalTxt.fontSize = 20;
        this.fractionsPrgressTotalTxt.fontWeight = 'normal';
        this.fractionsPrgressTotalTxt.fill = '#000000';
        this.fractionsPrgressTotalTxt.wordWrap = true;
        this.fractionsPrgressTotalTxt.wordWrapWidth = 500;
        //Decimals
        this.decimalPrgress = game.add.sprite(320,410,'progressCircle');
        this.decimalPrgress.frame = this.decimalsPercent-1;
        this.decimalPrgress.anchor.setTo(0.5);
        this.decimalPrgress.scale.setTo(1.2);

        this.decimalPrgressTxt = this.add.text(320, 410, this.decimalsPercent+'%');
        this.decimalPrgressTxt.anchor.setTo(0.5);
        this.decimalPrgressTxt.align = 'center';
        this.decimalPrgressTxt.fontSize = 20;
        this.decimalPrgressTxt.fontWeight = 'normal';
        this.decimalPrgressTxt.fill = '#000000';
        this.decimalPrgressTxt.wordWrap = true;
        this.decimalPrgressTxt.wordWrapWidth = 500;

        this.decimalPrgressTotalTxt = this.add.text(390, 410, this.cdecimalPlayedFromServer+'/'+this.cdecimalsTotal);
        this.decimalPrgressTotalTxt.anchor.setTo(0.5);
        this.decimalPrgressTotalTxt.align = 'center';
        this.decimalPrgressTotalTxt.fontSize = 20;
        this.decimalPrgressTotalTxt.fontWeight = 'normal';
        this.decimalPrgressTotalTxt.fill = '#000000';
        this.decimalPrgressTotalTxt.wordWrap = true;
        this.decimalPrgressTotalTxt.wordWrapWidth = 500;
        //Ratio n proprtion
          
        this.ratioPrgress = game.add.sprite(320,490,'progressCircle');
        this.ratioPrgress.frame = this.ratioandproportionPercent-1;
        this.ratioPrgress.anchor.setTo(0.5);
        this.ratioPrgress.scale.setTo(1.2);

        this.ratioPrgressTxt = this.add.text(320, 490, this.ratioandproportionPercent+'%');
        this.ratioPrgressTxt.anchor.setTo(0.5);
        this.ratioPrgressTxt.align = 'center';
        this.ratioPrgressTxt.fontSize = 20;
        this.ratioPrgressTxt.fontWeight = 'normal';
        this.ratioPrgressTxt.fill = '#000000';
        this.ratioPrgressTxt.wordWrap = true;
        this.ratioPrgressTxt.wordWrapWidth = 500;

        this.ratioPrgressTotalTxt = this.add.text(390, 490, this.crationandproportionPlayedFromServer+'/'+this.cratioandproportionTotal);
        this.ratioPrgressTotalTxt.anchor.setTo(0.5);
        this.ratioPrgressTotalTxt.align = 'center';
        this.ratioPrgressTotalTxt.fontSize = 20;
        this.ratioPrgressTotalTxt.fontWeight = 'normal';
        this.ratioPrgressTotalTxt.fill = '#000000';
        this.ratioPrgressTotalTxt.wordWrap = true;
        this.ratioPrgressTotalTxt.wordWrapWidth = 500;

    },

    gotoAddALMCTopics:function(game){
		this.algebraPercent = Math.round((this.calgebraPlayedFromServer/this.calgebraTotal)*100);
		//this.patternsPercent = Math.round((this.cpatternsPlayedFromServer/this.cpatternsTotal)*100);
        
        this.practicemodeTimeTxt = this.add.text(400, 118,this.practiceModeTime);
        this.practicemodeTimeTxt.anchor.setTo(0.5);
        this.practicemodeTimeTxt.align = 'center';
        this.practicemodeTimeTxt.fontSize = 18;
        this.practicemodeTimeTxt.fontWeight = 'normal';
        this.practicemodeTimeTxt.fill = '#000000';
        this.practicemodeTimeTxt.wordWrap = true;
        this.practicemodeTimeTxt.wordWrapWidth = 500;

        this.operationsTree = game.add.sprite(140,160,'mcIconAlgebra');
        //this.operationsTree.frame = 0;
        this.operationsTree.anchor.setTo(0.5);
        this.operationsTree.scale.setTo(1.5);

        this.operationsTreeTxt = this.add.text(178, 200, "VARIABLE & EQUATION");//window.selctedLang.algebraTitle
        this.operationsTreeTxt.anchor.setTo(0.5);
        this.operationsTreeTxt.align = 'center';
        this.operationsTreeTxt.fontSize = 16;
        this.operationsTreeTxt.fontWeight = 'normal';
        this.operationsTreeTxt.fill = '#000000';
        this.operationsTreeTxt.wordWrap = true;
        this.operationsTreeTxt.wordWrapWidth = 500;

        this.operationsPrgress = game.add.sprite(320,170,'progressCircle');
        this.operationsPrgress.frame = this.algebraPercent-1;
        this.operationsPrgress.anchor.setTo(0.5);
        this.operationsPrgress.scale.setTo(1.2);

        this.operationsPrgressTxt = this.add.text(320, 170, this.algebraPercent+'%');
        this.operationsPrgressTxt.anchor.setTo(0.5);
        this.operationsPrgressTxt.align = 'center';
        this.operationsPrgressTxt.fontSize = 20;
        this.operationsPrgressTxt.fontWeight = 'normal';
        this.operationsPrgressTxt.fill = '#000000';
        this.operationsPrgressTxt.wordWrap = true;
        this.operationsPrgressTxt.wordWrapWidth = 500;

        this.operationsPrgressTotalTxt = this.add.text(390, 170, this.calgebraPlayedFromServer+'/'+this.calgebraTotal);
        this.operationsPrgressTotalTxt.anchor.setTo(0.5);
        this.operationsPrgressTotalTxt.align = 'center';
        this.operationsPrgressTotalTxt.fontSize = 20;
        this.operationsPrgressTotalTxt.fontWeight = 'normal';
        this.operationsPrgressTotalTxt.fill = '#000000';
        this.operationsPrgressTotalTxt.wordWrap = true;
        this.operationsPrgressTotalTxt.wordWrapWidth = 500;

    },

    gotoAddGEMCTopics:function(game){
        this.shapesPercent = Math.round((this.cshapesPlayedFromServer/this.cshapesTotal)*100);
		this.mensurationPercent = Math.round((this.cmensurationPlayedFromServer/this.cmensurationTotal)*100);
		
        this.practicemodeTimeTxt = this.add.text(400, 118,this.practiceModeTime);
        this.practicemodeTimeTxt.anchor.setTo(0.5);
        this.practicemodeTimeTxt.align = 'center';
        this.practicemodeTimeTxt.fontSize = 18;
        this.practicemodeTimeTxt.fontWeight = 'normal';
        this.practicemodeTimeTxt.fill = '#000000';
        this.practicemodeTimeTxt.wordWrap = true;
        this.practicemodeTimeTxt.wordWrapWidth = 500;

        this.shapesTree = game.add.sprite(140,160,'mcIconShapes');
        //this.operationsTree.frame = 0;
        this.shapesTree.anchor.setTo(0.5);
        this.shapesTree.scale.setTo(1.5);

        this.shapesTreeTxt = this.add.text(140, 200, window.selctedLang.shapesTitle);
        this.shapesTreeTxt.anchor.setTo(0.5);
        this.shapesTreeTxt.align = 'center';
        this.shapesTreeTxt.fontSize = 16;
        this.shapesTreeTxt.fontWeight = 'normal';
        this.shapesTreeTxt.fill = '#000000';
        this.shapesTreeTxt.wordWrap = true;
        this.shapesTreeTxt.wordWrapWidth = 500;

        this.mensurationTree = game.add.sprite(140,240,'mcIconMensuration');
        //this.patternsTree.frame = 1;
        this.mensurationTree.anchor.setTo(0.5);
        this.mensurationTree.scale.setTo(1.5);

        this.mensurationTreeTxt = this.add.text(140, 280, window.selctedLang.mensurationTitle);
        this.mensurationTreeTxt.anchor.setTo(0.5);
        this.mensurationTreeTxt.align = 'center';
        this.mensurationTreeTxt.fontSize = 16;
        this.mensurationTreeTxt.fontWeight = 'normal';
        this.mensurationTreeTxt.fill = '#000000';
        this.mensurationTreeTxt.wordWrap = true;
        this.mensurationTreeTxt.wordWrapWidth = 500;

        this.shapesPrgress = game.add.sprite(320,170,'progressCircle');
        this.shapesPrgress.frame = this.shapesPercent-1;
        this.shapesPrgress.anchor.setTo(0.5);
        this.shapesPrgress.scale.setTo(1.2);

        this.shapesPrgressTxt = this.add.text(320, 170, this.shapesPercent+'%');
        this.shapesPrgressTxt.anchor.setTo(0.5);
        this.shapesPrgressTxt.align = 'center';
        this.shapesPrgressTxt.fontSize = 20;
        this.shapesPrgressTxt.fontWeight = 'normal';
        this.shapesPrgressTxt.fill = '#000000';
        this.shapesPrgressTxt.wordWrap = true;
        this.shapesPrgressTxt.wordWrapWidth = 500;

        this.shapesPrgressTotalTxt = this.add.text(390, 170, this.cshapesPlayedFromServer+'/'+this.cshapesTotal);
        this.shapesPrgressTotalTxt.anchor.setTo(0.5);
        this.shapesPrgressTotalTxt.align = 'center';
        this.shapesPrgressTotalTxt.fontSize = 20;
        this.shapesPrgressTotalTxt.fontWeight = 'normal';
        this.shapesPrgressTotalTxt.fill = '#000000';
        this.shapesPrgressTotalTxt.wordWrap = true;
        this.shapesPrgressTotalTxt.wordWrapWidth = 500;

        this.mensurationPrgress = game.add.sprite(320,250,'progressCircle');
        this.mensurationPrgress.frame = this.mensurationPercent-1;
        this.mensurationPrgress.anchor.setTo(0.5);
        this.mensurationPrgress.scale.setTo(1.2);

        this.mensurationPrgressTxt = this.add.text(320, 250, this.mensurationPercent+'%');
        this.mensurationPrgressTxt.anchor.setTo(0.5);
        this.mensurationPrgressTxt.align = 'center';
        this.mensurationPrgressTxt.fontSize = 20;
        this.mensurationPrgressTxt.fontWeight = 'normal';
        this.mensurationPrgressTxt.fill = '#000000';
        this.mensurationPrgressTxt.wordWrap = true;
        this.mensurationPrgressTxt.wordWrapWidth = 500;

        this.mensurationPrgressTotalTxt = this.add.text(390, 250, this.cmensurationPlayedFromServer+'/'+this.cmensurationTotal);
        this.mensurationPrgressTotalTxt.anchor.setTo(0.5);
        this.mensurationPrgressTotalTxt.align = 'center';
        this.mensurationPrgressTotalTxt.fontSize = 20;
        this.mensurationPrgressTotalTxt.fontWeight = 'normal';
        this.mensurationPrgressTotalTxt.fill = '#000000';
        this.mensurationPrgressTotalTxt.wordWrap = true;
        this.mensurationPrgressTotalTxt.wordWrapWidth = 500;
   
    },
	
    executerequiredQueries : function(game)
    {
        for(let i=0;i<this.gradeTopicsArray.length;i++)
		{
			
			console.log("inside query function",this.gradeTopicsArray[i]);
			//Total count of games under each gradetopic
			BBplusplusdbDetails.bbplusplusdbhandler.executeSql('SELECT COUNT(*) AS totalCount FROM UserProgress WHERE gradeTopics ="'+this.gradeTopicsArray[i]+'"', [], 
			(result)=> {
				console.log("inside result of each count");
				if(this.gradeTopicsArray[i] == 'Numbers')
				{
					this.cnumbersPlayedFromServer = result.rows.item(0).totalCount;
					console.log(this.cnumbersPlayedFromServer);
				}
				else if(this.gradeTopicsArray[i] == 'Integers')
				{
					this.cintegersPlayedFromServer = result.rows.item(0).totalCount;
					console.log(this.cintegersPlayedFromServer);
				}
				else if(this.gradeTopicsArray[i] == 'Fractions')
				{
					this.cfractionsPlayedFromServer = result.rows.item(0).totalCount;
					console.log(this.cfractionsPlayedFromServer);
				}
				else if(this.gradeTopicsArray[i] == 'Ratio and Proportion')
				{
					this.crationandproportionPlayedFromServer = result.rows.item(0).totalCount;
					console.log(this.crationandproportionPlayedFromServer);
				}
				else if(this.gradeTopicsArray[i] == 'Shapes')
				{
					this.cshapesPlayedFromServer = result.rows.item(0).totalCount;
					console.log(this.cshapesPlayedFromServer);
				}
				else if(this.gradeTopicsArray[i] == 'Mensuration')
				{
					this.cmensurationPlayedFromServer = result.rows.item(0).totalCount;
					console.log(this.cmensurationPlayedFromServer);
				}
				else if(this.gradeTopicsArray[i] == 'Decimals')
				{
					this.cdecimalPlayedFromServer = result.rows.item(0).totalCount;
					console.log(this.cdecimalPlayedFromServer);
				}
                else if(this.gradeTopicsArray[i] == 'Variable and Equation')
				{
					this.calgebraPlayedFromServer = result.rows.item(0).totalCount;
					console.log(this.calgebraPlayedFromServer);
				}
			}, this.localdatafailed);
		}
        if(this.selectedMc=="Number Systems")
        {
            //Total learning time of each microconcept
			BBplusplusdbDetails.bbplusplusdbhandler.executeSql('SELECT totalLearingTimeinHrs, totalLearingTimeinMins, totalLearingTimeinSecs FROM UserProgress WHERE microConcept = "Number Systems"', [], 
            (result) =>
            {
                if(result.rows.length>0)
                {
                    var hours1 =0 , minutes1=0 ,seconds1 = 0;
        
                    for(var i=0;i<result.rows.length;i++)
                    {
                        console.log("getTotalLearningTime",result.rows.item(i));
                        hours1 = hours1 + parseInt(result.rows.item(i).totalLearingTimeinHrs);
                        minutes1 = minutes1 + parseInt(result.rows.item(i).totalLearingTimeinMins);
                        seconds1 = seconds1 + parseInt(result.rows.item(i).totalLearingTimeinSecs);
                    }
        
                    console.log("hours",hours1);
                    console.log("minutes",minutes1);
                    console.log("seconds",seconds1);
        
                    const newSeconds1 = seconds1 % 60;
                    const totalminutes1 = Math.floor(parseInt(seconds1)/60)+ minutes1 % 60;
                    const newHours1 = Math.floor(parseInt(totalminutes1)/60);
                    const newMinutes1 = totalminutes1 % 60;
        
                    this.hours1 = newHours1;
                    this.minutes1 = newMinutes1;
                    console.log("newSeconds",newSeconds1);
                    console.log("newHours",newHours1);
                    console.log("newMinutes",newMinutes1);
                    this.practiceModeTime = this.hours1+" hr, "+this.minutes1+" mins";
                }
                else {
                    this.hours1 = 0;
                    this.minutes1 = 0;
                    this.practiceModeTime = this.hours1+" hr, "+this.minutes1+" mins";
                }
                this.gotoAddNSMCTopics(game);
            }
            , this.localdatafailed);
            
        }
        else if(this.selectedMc=="Algebra")
        {   
            //Total learning time of each microconcept
			BBplusplusdbDetails.bbplusplusdbhandler.executeSql('SELECT totalLearingTimeinHrs, totalLearingTimeinMins, totalLearingTimeinSecs FROM UserProgress WHERE microConcept = "Algebra"', [], 
            (result) =>
            {
                if(result.rows.length>0)
                {
                    var hours2 = 0 , minutes2 = 0 ,seconds2 = 0;

                    for(var i=0;i<result.rows.length;i++)
                    {
                        console.log("getTotalLearningTime",result.rows.item(i));
                        hours2 = hours2 + parseInt(result.rows.item(i).totalLearingTimeinHrs);
                        minutes2 = minutes2 + parseInt(result.rows.item(i).totalLearingTimeinMins);
                        seconds2 = seconds2 + parseInt(result.rows.item(i).totalLearingTimeinSecs);
                    }

                    console.log("hours",hours2);
                    console.log("minutes",minutes2);
                    console.log("seconds",seconds2);

                    const newSeconds2 = seconds2 % 60;
                    const totalminutes2 = Math.floor(parseInt(seconds2)/60)+ minutes2 % 60;
                    const newHours2 = Math.floor(parseInt(totalminutes2)/60);
                    const newMinutes2 = totalminutes2 % 60;

                    this.hours2 = newHours2;
                    this.minutes2 = newMinutes2;
                    console.log("newSeconds",newSeconds2);
                    console.log("newHours",newHours2);
                    console.log("newMinutes",newMinutes2);
                    this.practiceModeTime = this.hours2+" hr, "+this.minutes2+" mins";
                    }
                else {
                    this.hours2 = 0;
                    this.minutes2 = 0;
                    this.practiceModeTime = this.hours2+" hr, "+this.minutes2+" mins";
                }
                this.gotoAddALMCTopics(game);
            }
            , this.localdatafailed);
        }
        else if(this.selectedMc=="Geometry")
        {   
            //Total learning time of each microconcept
			BBplusplusdbDetails.bbplusplusdbhandler.executeSql('SELECT totalLearingTimeinHrs, totalLearingTimeinMins, totalLearingTimeinSecs FROM UserProgress WHERE microConcept = "Geometry"', [], 
            (result) =>
            {
                if(result.rows.length>0)
                {
                    var hours3 = 0 , minutes3 = 0 ,seconds3 = 0;

                    for(var i=0;i<result.rows.length;i++)
                    {
                        console.log("getTotalLearningTime",result.rows.item(i));
                        hours3 = hours3 + parseInt(result.rows.item(i).totalLearingTimeinHrs);
                        minutes3 = minutes3 + parseInt(result.rows.item(i).totalLearingTimeinMins);
                        seconds3 = seconds3 + parseInt(result.rows.item(i).totalLearingTimeinSecs);
                    }

                    console.log("hours",hours3);
                    console.log("minutes",minutes3);
                    console.log("seconds",seconds3);

                    const newSeconds3 = seconds3 % 60;
                    const totalminutes3 = Math.floor(parseInt(seconds3)/60)+ minutes3 % 60;
                    const newHours3 = Math.floor(parseInt(totalminutes3)/60);
                    const newMinutes3 = totalminutes3 % 60;

                    this.hours3 = newHours3;
                    this.minutes3 = newMinutes3;
                    console.log("newSeconds",newSeconds3);
                    console.log("newHours",newHours3);
                    console.log("newMinutes",newMinutes3);
                    this.practiceModeTime = this.hours3+" hr, "+this.minutes3+" mins";
                }
                else {
                    this.hours3 = 0;
                    this.minutes3 = 0;
                    this.practiceModeTime = this.hours3+" hr, "+this.minutes3+" mins";
                }
                this.gotoAddGEMCTopics(game);
            }
            , this.localdatafailed);
        }
    },

    localdatafailed : function(error){
		console.log(error);
	},
}
