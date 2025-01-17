Game.NSF_1B_G6level1 = function () { };

Game.NSF_1B_G6level1.prototype = {

    init: function (minutes, seconds, counterForTimer) {
        console.log("started init fn");
        _this = this;
        // telInitializer.gameIdInit("NSF2_4",gradeSelected);
        _this.languageSelected = localStorage.getItem("language");

        if (_this.languageSelected == null
            || _this.languageSelected == " "
            || _this.languageSelected == "") {
            _this.languageSelected = "ENG";
        }
        else console.log("Language selected: " + _this.languageSelected);


        // _this.seconds = sessionStorage.getItem('seconds');
        // _this.minutes = sessionStorage.getItem('minutes');
        // _this.counterForTimer = sessionStorage.getItem('counterForTimer');
        _this.minutes = minutes;
        _this.seconds = seconds;
        _this.counterForTimer = counterForTimer;
        console.log(_this.minutes);
        console.log(_this.seconds);
        console.log(_this.counterForTimer);

//        telInitializer.gameIdInit("NSF_1A_G6", gradeSelected);
    },

    preload: function () {
        console.log("start preload fn");
        if (!window.grade4NSF2_4) {

            window.grade4NSF2_4 = true;

            var preloadGrp = _this.add.group();
            _this.preloadBarOutline = _this.add.sprite(_this.world.centerX, _this.world.centerY, 'prgressbarOutLine');
            //_this.preloadBarOutline.anchor.setTo(0.5,0.5);
            _this.preloadBars = _this.add.sprite(_this.world.centerX, _this.world.centerY, 'preloadBar');

            //_this.preloadBar.anchor.setTo(0.5,0.5);
            _this.time.advanceTiming = true;
            _this.load.setPreloadSprite(_this.preloadBars);

            preloadGrp.add(_this.preloadBarOutline);
            preloadGrp.add(_this.preloadBars);

            preloadGrp.x -= 105;

            //GAME Sound effect
            this.load.audio('waudio', window.baseUrl + 'sounds/WrongCelebrationSound.mp3');
            this.load.audio('ClickSound', window.baseUrl + 'sounds/ClickSound.mp3');
            this.load.audio('celebr', window.baseUrl + 'sounds/celebration.mp3');
            this.load.audio('snapSound', window.baseUrl + 'sounds/snapSound.mp3');

            //GAME ASSETS  

            this.load.image('Level42C_Topbar', window.baseUrl + 'assets/commonAssets/topbar.png');
            this.load.image('Level42C_timer', window.baseUrl + 'assets/commonAssets/timerbg.png');
            this.load.atlas('starAnim1', window.baseUrl + 'assets/commonAssets/starAnim.png', window.baseUrl + 'assets/commonAssets/starAnim.json');
            this.load.atlas('newCommonBackBtnForAll', window.baseUrl + 'assets/commonAssets/backbtn.png', window.baseUrl + 'assets/commonAssets/backbtn.json');
            this.load.atlas('grade11_speaker', window.baseUrl + 'assets/commonAssets/speaker.png', window.baseUrl + 'assets/commonAssets/speaker.json');
            this.load.image('prgressbarOutLine', window.baseUrl + 'assets/commonAssets/prgressbarOutLine.png');
            this.load.image('preloadBar', window.baseUrl + 'assets/commonAssets/prgressbar.png');

            //this.load.image('nsf1_4_bgA', 'assets/gradeAssets/nsf1.4/bg1.png');   
            this.load.atlas('nsf2_4_erase', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/erase.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/erase.json');
            this.load.atlas('nsf2_4_rightmark', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/rightmark.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/rightmark.json');
            this.load.image('nsf2_4_numBG', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/b2.png');

            this.load.atlas('nsf2_4_hand', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/hand.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/hand.json');
            this.load.atlas('nsf2_4tick', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/clickbtn.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/clickbtn.json');
            this.load.atlas('nsf2_4box', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/box 1.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/box 1.json');
            this.load.atlas('nsf2_4numberpad', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/numbers.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/numbers.json');
            this.load.image('nsf2_4girl', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/girl.png');

            this.load.image('nsf2_4cloud', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/cloud.png');
            this.load.image('nsf2_4plate', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/plate.png');
            //this.load.image('nsf2_4knife',  'assets/gradeAssets/NSF-1B-G6/knife.png');
            this.load.image('nsf2_4fraction', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/fraction.png');

            //large cake slices
            this.load.image('nsf2_4cake', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/B1.png');
            //this.load.image('nsf2_4cakesliced',  'assets/gradeAssets/NSF-1B-G6/B2.png');
            this.load.image('nsf2_4slice1', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/B3.png');
            this.load.image('nsf2_4slice2', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/B4.png');
            this.load.image('nsf2_4slice3', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/B5.png');
            this.load.image('nsf2_4slice4', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/B6.png');
            this.load.image('nsf2_4slice5', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/B7.png');
            this.load.image('nsf2_4slice6', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/B8.png');
            this.load.image('nsf2_4slice7', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/B9.png');
            this.load.image('nsf2_4slice8', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/B10.png');
            //large cake slices 16
            this.load.image('nsf2_4largeslice1', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/1.png');
            this.load.image('nsf2_4largeslice2', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/2.png');
            this.load.image('nsf2_4largeslice3', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/3.png');
            this.load.image('nsf2_4largeslice4', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/4.png');
            this.load.image('nsf2_4largeslice5', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/5.png');
            this.load.image('nsf2_4largeslice6', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/6.png');
            this.load.image('nsf2_4largeslice7', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/7.png');
            this.load.image('nsf2_4largeslice8', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/8.png');
            this.load.image('nsf2_4largeslice9', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/9.png');
            this.load.image('nsf2_4largeslice10', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/10.png');
            this.load.image('nsf2_4largeslice11', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/11.png');
            this.load.image('nsf2_4largeslice12', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/12.png');
            this.load.image('nsf2_4largeslice13', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/13.png');
            this.load.image('nsf2_4largeslice14', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/14.png');
            this.load.image('nsf2_4largeslice15', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/15.png');
            this.load.image('nsf2_4largeslice16', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/16.png');

            //small cake slices
            //this.load.image('nsf2_4cakesmall',  'assets/gradeAssets/NSF-1B-G6/C1.png');
            //this.load.image('nsf2_4cakeslicedsmall',  'assets/gradeAssets/NSF-1B-G6/C2.png');
            this.load.atlas('nsf2_4smallslice1', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q1.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q1.json');
            this.load.atlas('nsf2_4smallslice2', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q2.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q2.json');
            this.load.atlas('nsf2_4smallslice3', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q3.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q3.json');
            this.load.atlas('nsf2_4smallslice4', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q4.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q4.json');
            this.load.atlas('nsf2_4smallslice5', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q5.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q5.json');
            this.load.atlas('nsf2_4smallslice6', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q6.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q6.json');
            this.load.atlas('nsf2_4smallslice7', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q7.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q7.json');
            this.load.atlas('nsf2_4smallslice8', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q8.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q8.json');
            this.load.atlas('nsf2_4smallslice9', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q9.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q9.json');
            this.load.atlas('nsf2_4smallslice10', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q10.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q10.json');
            this.load.atlas('nsf2_4smallslice11', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q11.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q11.json');
            this.load.atlas('nsf2_4smallslice12', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q12.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q12.json');
            this.load.atlas('nsf2_4smallslice13', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q13.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q13.json');
            this.load.atlas('nsf2_4smallslice14', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q14.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q14.json');
            this.load.atlas('nsf2_4smallslice15', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q15.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q15.json');
            this.load.atlas('nsf2_4smallslice16', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q16.png', window.baseUrl + 'assets/gradeAssets/NSF-1B-G6/q16.json');
            this.load.atlas('nsf1_4_eraser', window.baseUrl + 'assets/gradeAssets/nsf1.4/2.png', window.baseUrl + 'assets/gradeAssets/nsf1.4/2.json');

            console.log(" preload inside if statement");
        }
        console.log("end preload fn");
    },

    create: function (game) {

        console.log("start create fn");
        _this.amplify = null;
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;

        //_this.correct;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
         _this.sceneCount = 3;
        _this.questionid = null;

        _this.selectedAns = "";
        //_this.selectedAns1 = "";
        //_this.selectedAns2 = "";

        _this.opt = new Array();
        _this.correctans = 0;
        _this.questionNo = 0;
        _this.count2 = 0;

        _this.background;
        _this.click3;

        _this.click4;
        _this.rightCount;

        _this.wmusic;
        _this.wrong = true;

        _this.clickSound;
        _this.change = 0;

        _this.starsGroup;

        // _this.seconds = 0;
        // _this.minutes = 0
        // _this.counterForTimer = 0;

        //  //* this is  for BBplus app 
        //  _this.userHasPlayed = 0;
        //  _this.timeinMinutes;
        //  _this.timeinSeconds;
        //  _this.game_id;
        //  _this.grade;
        //  _this.gradeTopics;
         _this.microConcepts; 
         gameID = gameID;
        //  _this.score = 3;

        //  _this.userHasPlayed = 1;
        //  _this.timeinMinutes = _this.minutes;
        //  _this.timeinSeconds = _this.seconds;
        //  _this.game_id = "NSF_1A_G6";
        //  _this.grade = "6";
        //  _this.gradeTopics = 'Fractions';
        //  _this.microConcepts = 'Number Systems';
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.rightCount = 0;
        _this.no11 = 3;
        //_this.no22 = 0;
        _this.count = 0;
        _this.count1 = 3;
        _this.celebration = false;
        _this.check = 0;

        _this.soundPlayed = false;
        _this.showHand = false;

        _this.qArrays = new Array();

        _this.qArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        _this.qArrays = _this.shuffle(_this.qArrays);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        _this.bg1 = _this.add.tileSprite(0, -2, _this.world.width, _this.world.height, 'nsf1_4_bgA');
        //_this.bg1.scale.setTo(1.05,1.12);

        _this.TopBar = this.add.sprite(0, 0, 'Level42C_Topbar');
        _this.TopBar.name = "nsf2_4navBar";
        _this.TopBar.scale.setTo(1, 1.1);

        _this.backbtn = this.add.button(-3, 3, 'newCommonBackBtnForAll', function () { console.log("here"); }, _this, 0, 1, 2);
        //_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.input.useHandCursor = true;

        //        _this.backbtn.events.onInputDown.add(function()
        //        {
        //            //_this.cache.destroy();
        //            console.log("back");
        //            _this.backbtn.events.onInputDown.removeAll();
        //            _this.stopvoice();
        //            
        //            _this.clickSound = _this.add.audio('ClickSound');
        //            _this.clickSound.play();
        //            // if(grade2Selected == false)
        //            //     _this.state.start('grade1levelSelectionScreen',true,false); 
        //            // else
        //            //     _this.state.start('grade2levelSelectionScreen',true,false); 
        //            _this.time.events.add(450,function()
        //            {
        //                document.getElementById("first").style.display = "block";
        //                
        //            }); 
        //            
        //            //* use javascript timeout to destroy the game since phaser time object
        //            //* will not exist after game destroy and hence give time related error.
        //            setTimeout(function() 
        //            {
        //              _this.game.destroy();
        //            }, 500);
        //        },_this);


        _this.backbtn.events.onInputDown.add(function () {
            _this.stopVoice();

            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.time.events.removeAll();
            _this.backbtn.events.onInputDown.removeAll();

            _this.time.events.add(50, function () {
                _this.state.start('grade6NumberSystems', true, false);
            });
        });

        _this.speakerbtn = this.add.button(600, 5, 'grade11_speaker', function () { }, this, 1, 0, 2);
        //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
        // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function () {

            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();

            _this.getVoice();

        }, _this);

        _this.timebg = this.add.sprite(305, 9, 'Level42C_timer');
        _this.timebg.name = "common_timebg";
        _this.timebg.scale.setTo(1, 1);


        _this.timeDisplay = this.add.text(332, 25, _this.minutes + ' : ' + _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'myfont';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);
        //* display the stars from oe nfs1.4 game.
        _this.NSF_1_4stars1 = _this.add.sprite(397, 15, 'starAnim1');//_this.world.centerX-20
        _this.NSF_1_4stars1.frame = 35;
        _this.NSF_1_4stars2 = _this.add.sprite(427, 15, 'starAnim1');//_this.world.centerX-20
        _this.NSF_1_4stars2.frame = 35;
        _this.NSF_1_4stars3 = _this.add.sprite(457, 15, 'starAnim1');//_this.world.centerX-20
        _this.NSF_1_4stars3.frame = 35;
        _this.getQuestion();
        console.log(_this.minutes + ' : ' + _this.seconds);
    },

    updateTimer: function () {
        _this.counterForTimer++;
        //console.log("lololil"+counterForTimer);
        //console.log("inside update timer fn");
        if (_this.counterForTimer > 59) {
            //console.log("inside counterForTimer fn");
            _this.counterForTimer = 0;
            if (_this.minutes < 10) {
                _this.minutes = _this.minutes + 1;
                _this.seconds = 00;
            }
            else {
                _this.minutes = _this.minutes + 1;

            }
        }
        else {
            //console.log("inside counterForTimer else fn");
            if (_this.counterForTimer < 10)
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
            //console.log(_this.seconds);
        }
        _this.timeDisplay.setText(_this.minutes + ':' + _this.seconds);

        //timer.setText(minutes + ':'+ seconds );
        //console.log("end of update timer fn",_this.seconds);
    },

    shuffle: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },

    getQuestion: function (target) {
        _this.stopvoice();
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;


        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function () {
            _this.AnsTimerCount++;
        }, _this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function () {
            _this.updateTimer();
        }, _this);
        _this.timer1.start();
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.

        console.log("get" + _this.no11);
        _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.input.useHandCursor = true;
        //_this.questionid =1;
        //no11 = 0;

        console.log(_this.qArrays[_this.no11]);
        switch (_this.qArrays[_this.no11]) {
            case 1: _this.gotoFirstQuestion();
                break;
            case 2: _this.gotoSecondQuestion();
                break;
            case 3: _this.gotoThirdQuestion();
                break;
            case 4: _this.gotoFourthQuestion();
                break;
            case 5: _this.gotoFifthQuestion();
                break;
            case 6: _this.gotoSixthQuestion();
                break;
            case 7: _this.gotoSeventhQuestion();
                break;
            case 8: _this.gotoEighthQuestion();
                break;
            case 9: _this.gotoNinthQuestion();
                break;
        }
    },

    generateStarsForTheScene: function (count) {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++) {

            _this.starsGroup.create(_this.world.centerX, 15, 'starAnim1');
            for (var j = 0; j < i; j++) {
                if (_this.starsGroup.getChildAt(j)) {
                    _this.starsGroup.getChildAt(j).x -= 15;
                    _this.starsGroup.getChildAt(i).x += 15;
                }
            }
        }
    },

    gotoFirstQuestion: function () {
        console.log("gotoFirstQuestion");

        _this.questionNo = 1;
        _this.rightAns = 8;

        if (_this.soundPlayed == false) {
            _this.getVoice();
            _this.soundPlayed = true;
        }

        if (_this.showHand == false) {
            _this.hand = _this.add.sprite(385, 220, 'nsf2_4_hand');
            _this.hand.anchor.setTo(0.5);
            _this.hand.scale.setTo(0.6, 0.6);

            _this.anim1 = this.hand.animations.add('box');
            _this.anim1.play(3, true);
            _this.showHand = true;
        }

        _this.girl1 = _this.add.sprite(180, 468, 'nsf2_4girl');
        _this.girl1.anchor.setTo(0.5);
        _this.girl1.scale.setTo(0.9, 0.9);

        _this.cloud1 = _this.add.sprite(225, 375, 'nsf2_4cloud');
        _this.c1 = 0;
        _this.cloud1.anchor.setTo(0.5);
        _this.cloud1.scale.setTo(0.8, 0.8);
        _this.cloud1.canAdd = 2;

        _this.fraction1 = _this.add.sprite(245, 430, 'nsf2_4fraction');
        _this.fraction1.anchor.setTo(0.5);
        _this.fraction1.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "2");
        _this.text.font = "myfont";//Arial Black
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);

        _this.text = this.add.text(0, 15, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);
        /***************************************************/

        _this.girl2 = _this.add.sprite(310, 468, 'nsf2_4girl');
        _this.girl2.anchor.setTo(0.5);
        _this.girl2.scale.setTo(0.9, 0.9);

        _this.cloud2 = _this.add.sprite(355, 375, 'nsf2_4cloud');
        _this.c2 = 0;
        _this.cloud2.anchor.setTo(0.5);
        _this.cloud2.scale.setTo(0.8, 0.8);
        _this.cloud2.canAdd = 2;

        _this.fraction2 = _this.add.sprite(375, 430, 'nsf2_4fraction');
        _this.fraction2.anchor.setTo(0.5);
        _this.fraction2.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);

        _this.text = this.add.text(0, 15, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);
        /*********************************************************/

        _this.girl3 = _this.add.sprite(440, 468, 'nsf2_4girl');
        _this.girl3.anchor.setTo(0.5);
        _this.girl3.scale.setTo(0.9, 0.9);

        _this.cloud3 = _this.add.sprite(485, 375, 'nsf2_4cloud');
        _this.cloud3.anchor.setTo(0.5);
        _this.c3 = 0;
        _this.cloud3.scale.setTo(0.8, 0.8);
        _this.cloud3.canAdd = 1;

        _this.fraction3 = _this.add.sprite(505, 430, 'nsf2_4fraction');
        _this.fraction3.anchor.setTo(0.5);
        _this.fraction3.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);

        _this.text = this.add.text(0, 15, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);
        /**************************************************************/

        _this.girl4 = _this.add.sprite(570, 468, 'nsf2_4girl');
        _this.girl4.anchor.setTo(0.5);
        _this.girl4.scale.setTo(0.9, 0.9);

        _this.cloud4 = _this.add.sprite(615, 375, 'nsf2_4cloud');
        _this.c4 = 0;
        _this.cloud4.anchor.setTo(0.5);
        _this.cloud4.scale.setTo(0.8, 0.8);
        _this.cloud4.canAdd = 3;

        _this.fraction4 = _this.add.sprite(635, 430, 'nsf2_4fraction');
        _this.fraction4.anchor.setTo(0.5);
        _this.fraction4.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction4.addChild(_this.text);

        _this.text = this.add.text(0, 15, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction4.addChild(_this.text);
        /******************************************************************/

        _this.numBox = _this.add.sprite(320, 180, 'nsf2_4box');
        _this.numBox.anchor.setTo(0.5);
        _this.numBox.inputEnabled = true;
        _this.numBox.input.useHandCursor = true;
        _this.numBox.events.onInputDown.add(_this.addNumberPad, _this);

        _this.numBox.frame = 1;

        _this.plate = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate.anchor.setTo(0.5);
        _this.plate.scale.setTo(0.7, 0.7);

        _this.cake = _this.add.sprite(530, 185, 'nsf2_4cake');
        _this.cake.anchor.setTo(0.5);
        _this.cake.scale.setTo(1.2, 1.2);
        //_this.cake.inputEnabled = true;
        //  _this.cake.input.useHandCursor = true;
        /***********************************************************/
        _this.plate2 = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate2.anchor.setTo(0.5);
        _this.plate2.scale.setTo(0.7, 0.7);

        _this.cake5 = _this.add.sprite(535, 153, 'nsf2_4slice5'); _this.cake5.name = 'l5';
        _this.cake5.anchor.setTo(0.5);
        _this.cake6 = _this.add.sprite(495, 155, 'nsf2_4slice6'); _this.cake6.name = 'l6';
        _this.cake6.anchor.setTo(0.5);

        _this.cake7 = _this.add.sprite(485, 180, 'nsf2_4slice7'); _this.cake7.name = 'l7';
        _this.cake7.anchor.setTo(0.5);
        _this.cake8 = _this.add.sprite(489, 210, 'nsf2_4slice8'); _this.cake8.name = 'l8';
        _this.cake8.anchor.setTo(0.5);

        _this.cake4 = _this.add.sprite(567, 164, 'nsf2_4slice4'); _this.cake4.name = 'l4';
        _this.cake4.anchor.setTo(0.5);
        _this.cake3 = _this.add.sprite(570, 195, 'nsf2_4slice3'); _this.cake3.name = 'l3';
        _this.cake3.anchor.setTo(0.5);

        _this.cake2 = _this.add.sprite(557, 217, 'nsf2_4slice2'); _this.cake2.name = 'l2';
        _this.cake2.anchor.setTo(0.5);
        _this.cake1 = _this.add.sprite(520, 220, 'nsf2_4slice1'); _this.cake1.name = 'l1';
        _this.cake1.anchor.setTo(0.5);

        _this.cake7X = _this.cake7.x;
        _this.cake7Y = _this.cake7.y;
        _this.cake8X = _this.cake8.x;
        _this.cake8Y = _this.cake8.y;
        _this.cake6X = _this.cake6.x;
        _this.cake6Y = _this.cake6.y;
        _this.cake5X = _this.cake5.x;
        _this.cake5Y = _this.cake5.y;
        _this.cake4X = _this.cake4.x;
        _this.cake4Y = _this.cake4.y;
        _this.cake3X = _this.cake3.x;
        _this.cake3Y = _this.cake3.y;
        _this.cake2X = _this.cake2.x;
        _this.cake2Y = _this.cake2.y;
        _this.cake1X = _this.cake1.x;
        _this.cake1Y = _this.cake1.y;

        _this.cake7.events.onInputDown.add(_this.checkAns, _this);
        _this.cake8.events.onInputDown.add(_this.checkAns, _this);
        _this.cake6.events.onInputDown.add(_this.checkAns, _this);
        _this.cake5.events.onInputDown.add(_this.checkAns, _this);
        _this.cake4.events.onInputDown.add(_this.checkAns, _this);
        _this.cake3.events.onInputDown.add(_this.checkAns, _this);
        _this.cake1.events.onInputDown.add(_this.checkAns, _this);
        _this.cake2.events.onInputDown.add(_this.checkAns, _this);

        /******************************************************/

        _this.mcake3 = this.add.sprite(240, 360, 'nsf2_4smallslice1'); _this.mcake3.visible = false;
        _this.mcake3.anchor.setTo(0.5);
        _this.mcake3.inputEnabled = false;
        _this.mcake3X = _this.mcake3.x;
        _this.mcake3Y = _this.mcake3.y;
        _this.mcakes4 = this.add.sprite(210, 355, 'nsf2_4smallslice2'); _this.mcakes4.visible = false;
        _this.mcakes4.anchor.setTo(0.5);
        _this.mcakes4.inputEnabled = false;
        _this.mcakes4X = _this.mcakes4.x;
        _this.mcakes4Y = _this.mcakes4.y;

        _this.mcake23 = this.add.sprite(370, 360, 'nsf2_4smallslice3'); _this.mcake23.visible = false;
        _this.mcake23.anchor.setTo(0.5);
        _this.mcake23.inputEnabled = false;
        _this.mcake23X = _this.mcake23.x;
        _this.mcake23Y = _this.mcake23.y;
        _this.mcakes24 = this.add.sprite(340, 355, 'nsf2_4smallslice4'); _this.mcakes24.visible = false;
        _this.mcakes24.anchor.setTo(0.5);
        _this.mcakes24.inputEnabled = false;
        _this.mcakes24X = _this.mcakes24.x;
        _this.mcakes24Y = _this.mcakes24.y;

        _this.mcake33 = this.add.sprite(480, 360, 'nsf2_4smallslice5'); _this.mcake33.visible = false;
        _this.mcake33.anchor.setTo(0.5);
        _this.mcake33.inputEnabled = false;
        _this.mcake33X = _this.mcake33.x;
        _this.mcake33Y = _this.mcake33.y;


        _this.mcakes34 = this.add.sprite(585, 370, 'nsf2_4smallslice6'); _this.mcakes34.visible = false;
        _this.mcakes34.anchor.setTo(0.5);
        _this.mcakes34.inputEnabled = false;
        _this.mcakes34X = _this.mcakes34.x;
        _this.mcakes34Y = _this.mcakes34.y;

        _this.mcake43 = this.add.sprite(610, 355, 'nsf2_4smallslice7'); _this.mcake43.visible = false;
        _this.mcake43.anchor.setTo(0.5);
        _this.mcake43.inputEnabled = false;
        _this.mcake43X = _this.mcake43.x;
        _this.mcake43Y = _this.mcake43.y;
        _this.mcakes44 = this.add.sprite(640, 370, 'nsf2_4smallslice8'); _this.mcakes44.visible = false;
        _this.mcakes44.anchor.setTo(0.5);
        _this.mcakes44.inputEnabled = false;
        _this.mcakes44X = _this.mcakes44.x;
        _this.mcakes44Y = _this.mcakes44.y;


        /*************************************************************/

        _this.rightmark = _this.add.sprite(895, 310, 'nsf2_4tick');
        _this.rightmark.anchor.setTo(0.5);
        //_this.rightmark.scale.setTo(1.2,1.2);
        _this.rightmark.inputEnabled = true;
        _this.rightmark.input.useHandCursor = true;

        flagGroup1 = _this.add.group();

        flagGroup1.add(_this.girl1);
        flagGroup1.add(_this.cloud1);
        flagGroup1.add(_this.fraction1);

        flagGroup1.add(_this.girl2);
        flagGroup1.add(_this.cloud2);
        flagGroup1.add(_this.fraction2);

        flagGroup1.add(_this.girl3);
        flagGroup1.add(_this.cloud3);
        flagGroup1.add(_this.fraction3);

        flagGroup1.add(_this.girl4);
        flagGroup1.add(_this.cloud4);
        flagGroup1.add(_this.fraction4);

        flagGroup1.add(_this.numBox);

        flagGroup1.x = -600;
        _this.tween = _this.add.tween(flagGroup1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        flagGroup2 = _this.add.group();
        flagGroup2.add(_this.plate);
        flagGroup2.add(_this.cake);
        flagGroup2.add(_this.hand);

        flagGroup2.x = -600;
        _this.tween = _this.add.tween(flagGroup2);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        cakeGroup = _this.add.group();
        cakeGroup.add(_this.plate2);
        cakeGroup.add(_this.cake5);
        cakeGroup.add(_this.cake6);
        cakeGroup.add(_this.cake7);
        cakeGroup.add(_this.cake8);
        cakeGroup.add(_this.cake4);
        cakeGroup.add(_this.cake3);
        cakeGroup.add(_this.cake2);
        cakeGroup.add(_this.cake1);

        cakeGroup.alpha = 0;

        cakeGroup.x = -600;
        _this.tween = _this.add.tween(cakeGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        smallCakeGroup = _this.add.group();
        smallCakeGroup.add(_this.mcake3);
        smallCakeGroup.add(_this.mcakes4);
        smallCakeGroup.add(_this.mcake23);
        smallCakeGroup.add(_this.mcakes24);
        smallCakeGroup.add(_this.mcake33);
        smallCakeGroup.add(_this.mcakes34);
        smallCakeGroup.add(_this.mcake43);
        smallCakeGroup.add(_this.mcakes44);

    },

    gotoSecondQuestion: function () {
        console.log("gotoSecondQuestion");
        _this.questionNo = 2;
        _this.rightAns = 6;

        if (_this.soundPlayed == false) {
            _this.getVoice();
            _this.soundPlayed = true;
        }

        if (_this.showHand == false) {
            _this.hand = _this.add.sprite(385, 220, 'nsf2_4_hand');
            _this.hand.anchor.setTo(0.5);
            _this.hand.scale.setTo(0.6, 0.6);

            _this.anim1 = this.hand.animations.add('box');
            _this.anim1.play(3, true);
            _this.showHand = true;
        }

        _this.mcake3 = _this.add.sprite(305, 360, 'nsf2_4smallslice1'); _this.mcake3.visible = false;
        _this.mcake3.anchor.setTo(0.5);
        _this.mcake3.inputEnabled = false;
        _this.mcake3X = _this.mcake3.x;
        _this.mcake3Y = _this.mcake3.y;

        _this.mcakes4 = _this.add.sprite(275, 355, 'nsf2_4smallslice2'); _this.mcakes4.visible = false;
        _this.mcakes4.anchor.setTo(0.5);
        _this.mcakes4.inputEnabled = false;
        _this.mcakes4X = _this.mcakes4.x;
        _this.mcakes4Y = _this.mcakes4.y;

        _this.mcake23 = _this.add.sprite(452, 370, 'nsf2_4smallslice3'); _this.mcake23.visible = false;
        _this.mcake23.anchor.setTo(0.5);
        _this.mcake23.inputEnabled = false;
        _this.mcake23X = _this.mcake23.x;
        _this.mcake23Y = _this.mcake23.y;

        _this.mcakes24 = _this.add.sprite(430, 355, 'nsf2_4smallslice4'); _this.mcakes24.visible = false;
        _this.mcakes24.anchor.setTo(0.5);
        _this.mcakes24.inputEnabled = false;
        _this.mcakes24X = _this.mcakes24.x;
        _this.mcakes24Y = _this.mcakes24.y;

        _this.mcake33 = _this.add.sprite(480, 360, 'nsf2_4smallslice5'); _this.mcake33.visible = false;
        _this.mcake33.anchor.setTo(0.5);
        _this.mcake33.inputEnabled = false;
        _this.mcake33X = _this.mcake33.x;
        _this.mcake33Y = _this.mcake33.y;

        _this.mcakes34 = _this.add.sprite(615, 360, 'nsf2_4smallslice6'); _this.mcakes34.visible = false;
        _this.mcakes34.anchor.setTo(0.5);
        _this.mcakes34.inputEnabled = false;
        _this.mcakes34X = _this.mcakes34.x;
        _this.mcakes34Y = _this.mcakes34.y;

        /*************************************************************/

        _this.girl1 = _this.add.sprite(250, 468, 'nsf2_4girl');
        _this.girl1.anchor.setTo(0.5);
        _this.girl1.scale.setTo(0.9, 0.9);

        _this.cloud1 = _this.add.sprite(295, 375, 'nsf2_4cloud');
        _this.c1 = 0;
        _this.cloud1.anchor.setTo(0.5);
        _this.cloud1.scale.setTo(0.8, 0.8);
        _this.cloud1.canAdd = 2;

        _this.fraction1 = _this.add.sprite(315, 430, 'nsf2_4fraction');
        _this.fraction1.anchor.setTo(0.5);
        _this.fraction1.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);

        _this.text = this.add.text(0, 15, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);
        /***************************************************/

        _this.girl2 = _this.add.sprite(410, 468, 'nsf2_4girl');
        _this.girl2.anchor.setTo(0.5);
        _this.girl2.scale.setTo(0.9, 0.9);

        _this.cloud2 = _this.add.sprite(455, 375, 'nsf2_4cloud');
        _this.c2 = 0;
        _this.cloud2.anchor.setTo(0.5);
        _this.cloud2.scale.setTo(0.8, 0.8);
        _this.cloud2.canAdd = 3;

        _this.fraction2 = _this.add.sprite(475, 430, 'nsf2_4fraction');
        _this.fraction2.anchor.setTo(0.5);
        _this.fraction2.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);

        _this.text = this.add.text(0, 15, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);
        /*********************************************************/

        _this.girl3 = _this.add.sprite(570, 468, 'nsf2_4girl');
        _this.girl3.anchor.setTo(0.5);
        _this.girl3.scale.setTo(0.9, 0.9);

        _this.cloud3 = _this.add.sprite(615, 375, 'nsf2_4cloud');
        _this.cloud3.anchor.setTo(0.5);
        _this.c3 = 0;
        _this.cloud3.scale.setTo(0.8, 0.8);
        _this.cloud3.canAdd = 1;

        _this.fraction3 = _this.add.sprite(635, 430, 'nsf2_4fraction');
        _this.fraction3.anchor.setTo(0.5);
        _this.fraction3.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);

        _this.text = this.add.text(0, 15, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);
        /**************************************************************/

        _this.numBox = _this.add.sprite(320, 180, 'nsf2_4box');
        _this.numBox.anchor.setTo(0.5);
        _this.numBox.inputEnabled = true;
        _this.numBox.input.useHandCursor = true;
        _this.numBox.events.onInputDown.add(_this.addNumberPad, _this);

        _this.numBox.frame = 1;

        _this.plate = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate.anchor.setTo(0.5);
        _this.plate.scale.setTo(0.7, 0.7);

        _this.cake = _this.add.sprite(530, 185, 'nsf2_4cake');
        _this.cake.anchor.setTo(0.5);
        _this.cake.scale.setTo(1.2, 1.2);
        //_this.cake.inputEnabled = true;
        //  _this.cake.input.useHandCursor = true;
        /***********************************************************/
        _this.plate2 = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate2.anchor.setTo(0.5);
        _this.plate2.scale.setTo(0.7, 0.7);

        _this.cake5 = _this.add.sprite(530, 163, 'nsf2_4slice5'); _this.cake5.name = 'l5';
        _this.cake5.anchor.setTo(0.5);

        _this.cake6 = _this.add.sprite(490, 165, 'nsf2_4slice6'); _this.cake6.name = 'l6';
        _this.cake6.anchor.setTo(0.5);

        _this.cake3 = _this.add.sprite(490, 205, 'nsf2_4slice8'); _this.cake3.name = 'l8';
        _this.cake3.anchor.setTo(0.5);

        _this.cake4 = _this.add.sprite(561, 174, 'nsf2_4slice4'); _this.cake4.name = 'l4';
        _this.cake4.anchor.setTo(0.5);

        _this.cake2 = _this.add.sprite(560, 208, 'nsf2_4slice2'); _this.cake2.name = 'l2';
        _this.cake2.anchor.setTo(0.5);

        _this.cake1 = _this.add.sprite(520, 215, 'nsf2_4slice1'); _this.cake1.name = 'l1';
        _this.cake1.anchor.setTo(0.5);

        _this.cake3X = _this.cake3.x;
        _this.cake3Y = _this.cake3.y;
        _this.cake6X = _this.cake6.x;
        _this.cake6Y = _this.cake6.y;
        _this.cake5X = _this.cake5.x;
        _this.cake5Y = _this.cake5.y;
        _this.cake4X = _this.cake4.x;
        _this.cake4Y = _this.cake4.y;
        _this.cake2X = _this.cake2.x;
        _this.cake2Y = _this.cake2.y;
        _this.cake1X = _this.cake1.x;
        _this.cake1Y = _this.cake1.y;

        _this.cake3.events.onInputDown.add(_this.checkAns, _this);
        _this.cake6.events.onInputDown.add(_this.checkAns, _this);
        _this.cake5.events.onInputDown.add(_this.checkAns, _this);
        _this.cake4.events.onInputDown.add(_this.checkAns, _this);
        _this.cake1.events.onInputDown.add(_this.checkAns, _this);
        _this.cake2.events.onInputDown.add(_this.checkAns, _this);

        /******************************************************/

        _this.rightmark = _this.add.sprite(895, 310, 'nsf2_4tick');
        _this.rightmark.anchor.setTo(0.5);
        //_this.rightmark.scale.setTo(1.2,1.2);
        _this.rightmark.inputEnabled = true;
        _this.rightmark.input.useHandCursor = true;


        flagGroup1 = _this.add.group();

        flagGroup1.add(_this.girl1);
        flagGroup1.add(_this.cloud1);
        flagGroup1.add(_this.fraction1);

        flagGroup1.add(_this.girl2);
        flagGroup1.add(_this.cloud2);
        flagGroup1.add(_this.fraction2);

        flagGroup1.add(_this.girl3);
        flagGroup1.add(_this.cloud3);
        flagGroup1.add(_this.fraction3);

        flagGroup1.add(_this.numBox);

        flagGroup1.x = -600;
        _this.tween = _this.add.tween(flagGroup1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        flagGroup2 = _this.add.group();
        flagGroup2.add(_this.plate);
        flagGroup2.add(_this.cake);
        flagGroup2.add(_this.hand);

        flagGroup2.x = -600;
        _this.tween = _this.add.tween(flagGroup2);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        cakeGroup = _this.add.group();
        cakeGroup.add(_this.plate2);
        cakeGroup.add(_this.cake5);
        cakeGroup.add(_this.cake6);
        cakeGroup.add(_this.cake3);
        cakeGroup.add(_this.cake4);
        cakeGroup.add(_this.cake2);
        cakeGroup.add(_this.cake1);

        cakeGroup.alpha = 0;

        cakeGroup.x = -600;
        _this.tween = _this.add.tween(cakeGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        smallCakeGroup = _this.add.group();
        smallCakeGroup.add(_this.mcake3);
        smallCakeGroup.add(_this.mcakes4);
        smallCakeGroup.add(_this.mcake23);
        smallCakeGroup.add(_this.mcakes24);
        smallCakeGroup.add(_this.mcake33);
        smallCakeGroup.add(_this.mcakes34);
        console.log("end");
    },

    gotoThirdQuestion: function () {
        console.log("gotoThirdQuestion");
        _this.questionNo = 3;
        _this.rightAns = 7;

        if (_this.soundPlayed == false) {
            _this.getVoice();
            _this.soundPlayed = true;
        }

        if (_this.showHand == false) {
            _this.hand = _this.add.sprite(385, 220, 'nsf2_4_hand');
            _this.hand.anchor.setTo(0.5);
            _this.hand.scale.setTo(0.6, 0.6);

            _this.anim1 = this.hand.animations.add('box');
            _this.anim1.play(3, true);
            _this.showHand = true;
        }

        _this.mcake3 = _this.add.sprite(150, 360, 'nsf2_4smallslice1'); _this.mcake3.visible = false;
        _this.mcake3.anchor.setTo(0.5);
        _this.mcake3.inputEnabled = false;
        _this.mcake3X = _this.mcake3.x;
        _this.mcake3Y = _this.mcake3.y;

        _this.mcakes4 = _this.add.sprite(180, 360, 'nsf2_4smallslice2'); _this.mcakes4.visible = false;
        _this.mcakes4.anchor.setTo(0.5);
        _this.mcakes4.inputEnabled = false;
        _this.mcakes4X = _this.mcakes4.x;
        _this.mcakes4Y = _this.mcakes4.y;

        _this.mcake23 = _this.add.sprite(295, 365, 'nsf2_4smallslice3'); _this.mcake23.visible = false;
        _this.mcake23.anchor.setTo(0.5);
        _this.mcake23.inputEnabled = false;
        _this.mcake23X = _this.mcake23.x;
        _this.mcake23Y = _this.mcake23.y;

        _this.mcake33 = this.add.sprite(425, 365, 'nsf2_4smallslice4'); _this.mcake33.visible = false;
        _this.mcake33.anchor.setTo(0.5);
        _this.mcake33.inputEnabled = false;
        _this.mcake33X = _this.mcake33.x;
        _this.mcake33Y = _this.mcake33.y;

        _this.mcake43 = this.add.sprite(555, 365, 'nsf2_4smallslice5'); _this.mcake43.visible = false;
        _this.mcake43.anchor.setTo(0.5);
        _this.mcake43.inputEnabled = false;
        _this.mcake43X = _this.mcake43.x;
        _this.mcake43Y = _this.mcake43.y;

        _this.mcake53 = this.add.sprite(670, 365, 'nsf2_4smallslice6'); _this.mcake53.visible = false;
        _this.mcake53.anchor.setTo(0.5);
        _this.mcake53.inputEnabled = false;
        _this.mcake53X = _this.mcake53.x;
        _this.mcake53Y = _this.mcake53.y;

        _this.mcakes54 = this.add.sprite(705, 365, 'nsf2_4smallslice7'); _this.mcakes54.visible = false;
        _this.mcakes54.anchor.setTo(0.5);
        _this.mcakes54.inputEnabled = false;
        _this.mcakes54X = _this.mcakes54.x;
        _this.mcakes54Y = _this.mcakes54.y;

        /*************************************************************/

        _this.girl1 = _this.add.sprite(120, 468, 'nsf2_4girl');
        _this.girl1.anchor.setTo(0.5);
        _this.girl1.scale.setTo(0.9, 0.9);

        _this.cloud1 = _this.add.sprite(165, 375, 'nsf2_4cloud');
        _this.c1 = 0;
        _this.cloud1.anchor.setTo(0.5);
        _this.cloud1.scale.setTo(0.8, 0.8);
        _this.cloud1.canAdd = 2;

        _this.fraction1 = _this.add.sprite(185, 430, 'nsf2_4fraction');
        _this.fraction1.anchor.setTo(0.5);
        _this.fraction1.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);

        _this.text = this.add.text(0, 15, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);
        /***************************************************/

        _this.girl2 = _this.add.sprite(250, 468, 'nsf2_4girl');
        _this.girl2.anchor.setTo(0.5);
        _this.girl2.scale.setTo(0.9, 0.9);

        _this.cloud2 = _this.add.sprite(295, 375, 'nsf2_4cloud');
        _this.c2 = 0;
        _this.cloud2.anchor.setTo(0.5);
        _this.cloud2.scale.setTo(0.8, 0.8);
        _this.cloud2.canAdd = 1;

        _this.fraction2 = _this.add.sprite(315, 430, 'nsf2_4fraction');
        _this.fraction2.anchor.setTo(0.5);
        _this.fraction2.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);

        _this.text = this.add.text(0, 15, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);
        /*********************************************************/

        _this.girl3 = _this.add.sprite(380, 468, 'nsf2_4girl');
        _this.girl3.anchor.setTo(0.5);
        _this.girl3.scale.setTo(0.9, 0.9);

        _this.cloud3 = _this.add.sprite(425, 375, 'nsf2_4cloud');
        _this.cloud3.anchor.setTo(0.5);
        _this.c3 = 0;
        _this.cloud3.scale.setTo(0.8, 0.8);
        _this.cloud3.canAdd = 1;

        _this.fraction3 = _this.add.sprite(445, 430, 'nsf2_4fraction');
        _this.fraction3.anchor.setTo(0.5);
        _this.fraction3.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);

        _this.text = this.add.text(0, 15, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);
        /**************************************************************/

        _this.girl4 = _this.add.sprite(510, 468, 'nsf2_4girl');
        _this.girl4.anchor.setTo(0.5);
        _this.girl4.scale.setTo(0.9, 0.9);

        _this.cloud4 = _this.add.sprite(555, 375, 'nsf2_4cloud');
        _this.c4 = 0;
        _this.cloud4.anchor.setTo(0.5);
        _this.cloud4.scale.setTo(0.8, 0.8);
        _this.cloud4.canAdd = 1;

        _this.fraction4 = _this.add.sprite(575, 430, 'nsf2_4fraction');
        _this.fraction4.anchor.setTo(0.5);
        _this.fraction4.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction4.addChild(_this.text);

        _this.text = this.add.text(0, 15, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction4.addChild(_this.text);
        /******************************************************************/

        _this.girl5 = _this.add.sprite(640, 468, 'nsf2_4girl');
        _this.girl5.anchor.setTo(0.5);
        _this.girl5.scale.setTo(0.9, 0.9);

        _this.cloud5 = _this.add.sprite(685, 375, 'nsf2_4cloud');
        _this.c5 = 0;
        _this.cloud5.anchor.setTo(0.5);
        _this.cloud5.scale.setTo(0.8, 0.8);
        _this.cloud5.canAdd = 2;

        _this.fraction5 = _this.add.sprite(705, 430, 'nsf2_4fraction');
        _this.fraction5.anchor.setTo(0.5);
        _this.fraction5.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction5.addChild(_this.text);

        _this.text = this.add.text(0, 15, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction5.addChild(_this.text);
        /******************************************************************/

        _this.numBox = _this.add.sprite(320, 180, 'nsf2_4box');
        _this.numBox.anchor.setTo(0.5);
        _this.numBox.inputEnabled = true;
        _this.numBox.input.useHandCursor = true;
        _this.numBox.events.onInputDown.add(_this.addNumberPad, _this);

        _this.numBox.frame = 1;

        _this.plate = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate.anchor.setTo(0.5);
        _this.plate.scale.setTo(0.7, 0.7);

        _this.cake = _this.add.sprite(530, 185, 'nsf2_4cake');
        _this.cake.anchor.setTo(0.5);
        _this.cake.scale.setTo(1.2, 1.2);
        //_this.cake.inputEnabled = true;
        //  _this.cake.input.useHandCursor = true;
        /***********************************************************/
        _this.plate2 = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate2.anchor.setTo(0.5);
        _this.plate2.scale.setTo(0.7, 0.7);

        _this.cake5 = _this.add.sprite(538, 153, 'nsf2_4slice5'); _this.cake5.name = 'l5';
        _this.cake5.anchor.setTo(0.5);

        _this.cake6 = _this.add.sprite(498, 155, 'nsf2_4slice6'); _this.cake6.name = 'l6';
        _this.cake6.anchor.setTo(0.5);

        _this.cake7 = _this.add.sprite(491, 180, 'nsf2_4slice7'); _this.cake7.name = 'l7';
        _this.cake7.anchor.setTo(0.5);

        _this.cake3 = _this.add.sprite(495, 210, 'nsf2_4slice8'); _this.cake3.name = 'l8';
        _this.cake3.anchor.setTo(0.5);

        _this.cake4 = _this.add.sprite(575, 170, 'nsf2_4slice4'); _this.cake4.name = 'l4';
        _this.cake4.anchor.setTo(0.5);

        _this.cake2 = _this.add.sprite(568, 202, 'nsf2_4slice2'); _this.cake2.name = 'l2';
        _this.cake2.anchor.setTo(0.5);

        _this.cake1 = _this.add.sprite(530, 213, 'nsf2_4slice1'); _this.cake1.name = 'l1';
        _this.cake1.anchor.setTo(0.5);

        _this.cake7X = _this.cake7.x;
        _this.cake7Y = _this.cake7.y;
        _this.cake3X = _this.cake3.x;
        _this.cake3Y = _this.cake3.y;
        _this.cake6X = _this.cake6.x;
        _this.cake6Y = _this.cake6.y;
        _this.cake5X = _this.cake5.x;
        _this.cake5Y = _this.cake5.y;
        _this.cake4X = _this.cake4.x;
        _this.cake4Y = _this.cake4.y;
        _this.cake2X = _this.cake2.x;
        _this.cake2Y = _this.cake2.y;
        _this.cake1X = _this.cake1.x;
        _this.cake1Y = _this.cake1.y;

        _this.cake7.events.onInputDown.add(_this.checkAns, _this);
        _this.cake3.events.onInputDown.add(_this.checkAns, _this);
        _this.cake6.events.onInputDown.add(_this.checkAns, _this);
        _this.cake5.events.onInputDown.add(_this.checkAns, _this);
        _this.cake4.events.onInputDown.add(_this.checkAns, _this);
        _this.cake1.events.onInputDown.add(_this.checkAns, _this);
        _this.cake2.events.onInputDown.add(_this.checkAns, _this);

        /******************************************************/

        _this.rightmark = _this.add.sprite(895, 310, 'nsf2_4tick');
        _this.rightmark.anchor.setTo(0.5);
        //_this.rightmark.scale.setTo(1.2,1.2);
        _this.rightmark.inputEnabled = true;
        _this.rightmark.input.useHandCursor = true;


        flagGroup1 = _this.add.group();

        flagGroup1.add(_this.girl1);
        flagGroup1.add(_this.cloud1);
        flagGroup1.add(_this.fraction1);

        flagGroup1.add(_this.girl2);
        flagGroup1.add(_this.cloud2);
        flagGroup1.add(_this.fraction2);

        flagGroup1.add(_this.girl3);
        flagGroup1.add(_this.cloud3);
        flagGroup1.add(_this.fraction3);

        flagGroup1.add(_this.girl4);
        flagGroup1.add(_this.cloud4);
        flagGroup1.add(_this.fraction4);

        flagGroup1.add(_this.girl5);
        flagGroup1.add(_this.cloud5);
        flagGroup1.add(_this.fraction5);

        flagGroup1.add(_this.numBox);

        flagGroup1.x = -600;
        _this.tween = _this.add.tween(flagGroup1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        flagGroup2 = _this.add.group();
        flagGroup2.add(_this.plate);
        flagGroup2.add(_this.cake);
        flagGroup2.add(_this.hand);

        flagGroup2.x = -600;
        _this.tween = _this.add.tween(flagGroup2);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        cakeGroup = _this.add.group();
        cakeGroup.add(_this.plate2);
        cakeGroup.add(_this.cake5);
        cakeGroup.add(_this.cake6);
        cakeGroup.add(_this.cake7);
        cakeGroup.add(_this.cake3);
        cakeGroup.add(_this.cake4);
        cakeGroup.add(_this.cake2);
        cakeGroup.add(_this.cake1);

        cakeGroup.alpha = 0;

        cakeGroup.x = -600;
        _this.tween = _this.add.tween(cakeGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        smallCakeGroup = _this.add.group();
        smallCakeGroup.add(_this.mcake3);
        smallCakeGroup.add(_this.mcakes4);
        smallCakeGroup.add(_this.mcake23);
        smallCakeGroup.add(_this.mcake33);
        smallCakeGroup.add(_this.mcake43);
        smallCakeGroup.add(_this.mcake53);
        smallCakeGroup.add(_this.mcakes54);

    },

    gotoFourthQuestion: function () {
        _this.questionNo = 4;
        _this.rightAns = 9;

        if (_this.soundPlayed == false) {
            _this.getVoice();
            _this.soundPlayed = true;
        }

        if (_this.showHand == false) {
            _this.hand = _this.add.sprite(385, 220, 'nsf2_4_hand');
            _this.hand.anchor.setTo(0.5);
            _this.hand.scale.setTo(0.6, 0.6);

            _this.anim1 = this.hand.animations.add('box');
            _this.anim1.play(3, true);
            _this.showHand = true;
        }

        _this.girl1 = _this.add.sprite(150, 468, 'nsf2_4girl');
        _this.girl1.anchor.setTo(0.5);
        _this.girl1.scale.setTo(0.9, 0.9);

        _this.cloud1 = _this.add.sprite(195, 375, 'nsf2_4cloud');
        _this.c1 = 0;
        _this.cloud1.anchor.setTo(0.5);
        _this.cloud1.scale.setTo(0.8, 0.8);
        _this.cloud1.canAdd = 2;

        _this.fraction1 = _this.add.sprite(215, 430, 'nsf2_4fraction');
        _this.fraction1.anchor.setTo(0.5);
        _this.fraction1.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);

        _this.text = this.add.text(0, 15, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);
        /***************************************************/

        _this.girl2 = _this.add.sprite(310, 468, 'nsf2_4girl');
        _this.girl2.anchor.setTo(0.5);
        _this.girl2.scale.setTo(0.9, 0.9);

        _this.cloud2 = _this.add.sprite(355, 375, 'nsf2_4cloud');
        _this.c2 = 0;
        _this.cloud2.anchor.setTo(0.5);
        _this.cloud2.scale.setTo(0.8, 0.8);
        _this.cloud2.canAdd = 3;

        _this.fraction2 = _this.add.sprite(375, 430, 'nsf2_4fraction');
        _this.fraction2.anchor.setTo(0.5);
        _this.fraction2.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);

        _this.text = this.add.text(0, 15, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);
        /*********************************************************/

        _this.girl3 = _this.add.sprite(470, 468, 'nsf2_4girl');
        _this.girl3.anchor.setTo(0.5);
        _this.girl3.scale.setTo(0.9, 0.9);

        _this.cloud3 = _this.add.sprite(515, 375, 'nsf2_4cloud');
        _this.cloud3.anchor.setTo(0.5);
        _this.c3 = 0;
        _this.cloud3.scale.setTo(0.8, 0.8);
        _this.cloud3.canAdd = 1;

        _this.fraction3 = _this.add.sprite(535, 430, 'nsf2_4fraction');
        _this.fraction3.anchor.setTo(0.5);
        _this.fraction3.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);

        _this.text = this.add.text(0, 15, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);
        /**************************************************************/

        _this.girl4 = _this.add.sprite(630, 468, 'nsf2_4girl');
        _this.girl4.anchor.setTo(0.5);
        _this.girl4.scale.setTo(0.9, 0.9);

        _this.cloud4 = _this.add.sprite(675, 375, 'nsf2_4cloud');
        _this.c4 = 0;
        _this.cloud4.anchor.setTo(0.5);
        _this.cloud4.scale.setTo(0.8, 0.8);
        _this.cloud4.canAdd = 3;

        _this.fraction4 = _this.add.sprite(695, 430, 'nsf2_4fraction');
        _this.fraction4.anchor.setTo(0.5);
        _this.fraction4.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction4.addChild(_this.text);

        _this.text = this.add.text(0, 15, "9");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction4.addChild(_this.text);
        /******************************************************************/

        _this.numBox = _this.add.sprite(320, 180, 'nsf2_4box');
        _this.numBox.anchor.setTo(0.5);
        _this.numBox.inputEnabled = true;
        _this.numBox.input.useHandCursor = true;
        _this.numBox.events.onInputDown.add(_this.addNumberPad, _this);

        _this.numBox.frame = 1;

        _this.plate = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate.anchor.setTo(0.5);
        _this.plate.scale.setTo(0.7, 0.7);

        _this.cake = _this.add.sprite(530, 185, 'nsf2_4cake');
        _this.cake.anchor.setTo(0.5);
        _this.cake.scale.setTo(1.2, 1.2);
        //_this.cake.inputEnabled = true;
        //  _this.cake.input.useHandCursor = true;
        /***********************************************************/
        _this.plate2 = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate2.anchor.setTo(0.5);
        _this.plate2.scale.setTo(0.7, 0.7);

        _this.largecake9 = _this.add.sprite(539, 159, 'nsf2_4largeslice10'); _this.largecake9.name = 'l10';
        _this.largecake9.anchor.setTo(0.5);
        _this.largecake9.scale.setTo(0.8, 0.8);

        _this.largecake7 = _this.add.sprite(562, 170, 'nsf2_4largeslice7'); _this.largecake7.name = 'l7';
        _this.largecake7.anchor.setTo(0.5);
        _this.largecake7.scale.setTo(0.8, 0.8);

        _this.largecake8 = _this.add.sprite(568, 188, 'nsf2_4largeslice8'); _this.largecake8.name = 'l8';
        _this.largecake8.anchor.setTo(0.5);
        _this.largecake8.scale.setTo(0.8, 0.8);

        _this.largecake5 = _this.add.sprite(559, 210, 'nsf2_4largeslice5'); _this.largecake5.name = 'l5';
        _this.largecake5.anchor.setTo(0.5);
        _this.largecake5.scale.setTo(0.8, 0.8);

        _this.largecake4 = _this.add.sprite(510, 157, 'nsf2_4largeslice12'); _this.largecake4.name = 'l12';
        _this.largecake4.anchor.setTo(0.5);
        _this.largecake4.scale.setTo(0.8, 0.8);

        _this.largecake3 = _this.add.sprite(493, 177, 'nsf2_4largeslice13'); _this.largecake3.name = 'l13';
        _this.largecake3.anchor.setTo(0.5);
        _this.largecake3.scale.setTo(0.8, 0.8);

        _this.largecake6 = _this.add.sprite(495, 207, 'nsf2_4largeslice15'); _this.largecake6.name = 'l15';
        _this.largecake6.anchor.setTo(0.5);
        _this.largecake6.scale.setTo(0.8, 0.8);

        _this.largecake1 = _this.add.sprite(509, 214, 'nsf2_4largeslice1'); _this.largecake1.name = 'l1';
        _this.largecake1.anchor.setTo(0.5);
        _this.largecake1.scale.setTo(0.8, 0.8);

        _this.largecake2 = _this.add.sprite(537, 214, 'nsf2_4largeslice2'); _this.largecake2.name = 'l2';
        _this.largecake2.anchor.setTo(0.5);
        _this.largecake2.scale.setTo(0.8, 0.8);

        _this.largecake7X = _this.largecake7.x;
        _this.largecake7Y = _this.largecake7.y;
        _this.largecake4X = _this.largecake4.x;
        _this.largecake4Y = _this.largecake4.y;
        _this.largecake3X = _this.largecake3.x;
        _this.largecake3Y = _this.largecake3.y;
        _this.largecake6X = _this.largecake6.x;
        _this.largecake6Y = _this.largecake6.y;
        _this.largecake8X = _this.largecake8.x;
        _this.largecake8Y = _this.largecake8.y;
        _this.largecake9X = _this.largecake9.x;
        _this.largecake9Y = _this.largecake9.y;
        _this.largecake5X = _this.largecake5.x;
        _this.largecake5Y = _this.largecake5.y;
        _this.largecake2X = _this.largecake2.x;
        _this.largecake2Y = _this.largecake2.y;
        _this.largecake1X = _this.largecake1.x;
        _this.largecake1Y = _this.largecake1.y;

        _this.largecake7.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake8.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake9.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake5.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake1.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake2.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake4.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake3.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake6.events.onInputDown.add(_this.checkAns, _this);

        /******************************************************/

        _this.rightmark = _this.add.sprite(895, 310, 'nsf2_4tick');
        _this.rightmark.anchor.setTo(0.5);
        //_this.rightmark.scale.setTo(1.2,1.2);
        _this.rightmark.inputEnabled = true;
        _this.rightmark.input.useHandCursor = true;


        flagGroup1 = _this.add.group();

        flagGroup1.add(_this.girl1);
        flagGroup1.add(_this.cloud1);
        flagGroup1.add(_this.fraction1);

        flagGroup1.add(_this.girl2);
        flagGroup1.add(_this.cloud2);
        flagGroup1.add(_this.fraction2);

        flagGroup1.add(_this.girl3);
        flagGroup1.add(_this.cloud3);
        flagGroup1.add(_this.fraction3);

        flagGroup1.add(_this.girl4);
        flagGroup1.add(_this.cloud4);
        flagGroup1.add(_this.fraction4);

        flagGroup1.add(_this.numBox);

        flagGroup1.x = -600;
        _this.tween = _this.add.tween(flagGroup1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        flagGroup2 = _this.add.group();
        flagGroup2.add(_this.plate);
        flagGroup2.add(_this.cake);
        flagGroup2.add(_this.hand);

        flagGroup2.x = -600;
        _this.tween = _this.add.tween(flagGroup2);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        cakeGroup = _this.add.group();
        cakeGroup.add(_this.plate2);
        cakeGroup.add(_this.largecake9);
        cakeGroup.add(_this.largecake7);
        cakeGroup.add(_this.largecake8);
        cakeGroup.add(_this.largecake5);
        cakeGroup.add(_this.largecake4);
        cakeGroup.add(_this.largecake3);
        cakeGroup.add(_this.largecake6);
        cakeGroup.add(_this.largecake1);
        cakeGroup.add(_this.largecake2);

        cakeGroup.alpha = 0;

        cakeGroup.x = -600;
        _this.tween = _this.add.tween(cakeGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        /*************************************************************/

        _this.mcake3 = this.add.sprite(180, 360, 'nsf2_4smallslice1'); _this.mcake3.visible = false;
        _this.mcake3.anchor.setTo(0.5);
        _this.mcake3.inputEnabled = false;
        _this.mcake3X = _this.mcake3.x;
        _this.mcake3Y = _this.mcake3.y;

        _this.mcakes4 = this.add.sprite(210, 360, 'nsf2_4smallslice2'); _this.mcakes4.visible = false;
        _this.mcakes4.anchor.setTo(0.5);
        _this.mcakes4.inputEnabled = false;
        _this.mcakes4X = _this.mcakes4.x;
        _this.mcakes4Y = _this.mcakes4.y;

        _this.mcake23 = this.add.sprite(325, 360, 'nsf2_4smallslice3'); _this.mcake23.visible = false;
        _this.mcake23.anchor.setTo(0.5);
        _this.mcake23.inputEnabled = false;
        _this.mcake23X = _this.mcake23.x;
        _this.mcake23Y = _this.mcake23.y;

        _this.mcakes24 = this.add.sprite(352, 375, 'nsf2_4smallslice4'); _this.mcakes24.visible = false;
        _this.mcakes24.anchor.setTo(0.5);
        _this.mcakes24.inputEnabled = false;
        _this.mcakes24X = _this.mcakes24.x;
        _this.mcakes24Y = _this.mcakes24.y;

        _this.mcake33 = this.add.sprite(380, 360, 'nsf2_4smallslice5'); _this.mcake33.visible = false;
        _this.mcake33.anchor.setTo(0.5);
        _this.mcake33.inputEnabled = false;
        _this.mcake33X = _this.mcake33.x;
        _this.mcake33Y = _this.mcake33.y;

        _this.mcakes34 = this.add.sprite(515, 365, 'nsf2_4smallslice6'); _this.mcakes34.visible = false;
        _this.mcakes34.anchor.setTo(0.5);
        _this.mcakes34.inputEnabled = false;
        _this.mcakes34X = _this.mcakes34.x;
        _this.mcakes34Y = _this.mcakes34.y;

        _this.mcake43 = this.add.sprite(647, 360, 'nsf2_4smallslice7'); _this.mcake43.visible = false;
        _this.mcake43.anchor.setTo(0.5);
        _this.mcake43.inputEnabled = false;
        _this.mcake43X = _this.mcake43.x;
        _this.mcake43Y = _this.mcake43.y;

        _this.mcakes44 = this.add.sprite(675, 370, 'nsf2_4smallslice8'); _this.mcakes44.visible = false;
        _this.mcakes44.anchor.setTo(0.5);
        _this.mcakes44.inputEnabled = false;
        _this.mcakes44X = _this.mcakes44.x;
        _this.mcakes44Y = _this.mcakes44.y;

        _this.mcake53 = this.add.sprite(700, 360, 'nsf2_4smallslice9'); _this.mcake53.visible = false;
        _this.mcake53.anchor.setTo(0.5);
        _this.mcake53.inputEnabled = false;
        _this.mcake53X = _this.mcake53.x;
        _this.mcake53Y = _this.mcake53.y;

        smallCakeGroup = _this.add.group();
        smallCakeGroup.add(_this.mcake3);
        smallCakeGroup.add(_this.mcakes4);
        smallCakeGroup.add(_this.mcake23);
        smallCakeGroup.add(_this.mcakes24);
        smallCakeGroup.add(_this.mcake33);
        smallCakeGroup.add(_this.mcakes34);
        smallCakeGroup.add(_this.mcake43);
        smallCakeGroup.add(_this.mcakes44);
        smallCakeGroup.add(_this.mcake53);
    },

    gotoFifthQuestion: function () {
        _this.questionNo = 5;
        _this.rightAns = 5;

        if (_this.soundPlayed == false) {
            _this.getVoice();
            _this.soundPlayed = true;
        }

        if (_this.showHand == false) {
            _this.hand = _this.add.sprite(385, 220, 'nsf2_4_hand');
            _this.hand.anchor.setTo(0.5);
            _this.hand.scale.setTo(0.6, 0.6);

            _this.anim1 = this.hand.animations.add('box');
            _this.anim1.play(3, true);
            _this.showHand = true;
        }

        _this.girl1 = _this.add.sprite(310, 468, 'nsf2_4girl');
        _this.girl1.anchor.setTo(0.5);
        _this.girl1.scale.setTo(0.9, 0.9);

        _this.cloud1 = _this.add.sprite(355, 375, 'nsf2_4cloud');
        _this.c1 = 0;
        _this.cloud1.anchor.setTo(0.5);
        _this.cloud1.scale.setTo(0.8, 0.8);
        _this.cloud1.canAdd = 3;

        _this.fraction1 = _this.add.sprite(375, 430, 'nsf2_4fraction');
        _this.fraction1.anchor.setTo(0.5);
        _this.fraction1.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);

        _this.text = this.add.text(0, 15, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);
        /***************************************************/

        _this.girl2 = _this.add.sprite(470, 468, 'nsf2_4girl');
        _this.girl2.anchor.setTo(0.5);
        _this.girl2.scale.setTo(0.9, 0.9);

        _this.cloud2 = _this.add.sprite(515, 375, 'nsf2_4cloud');
        _this.c2 = 0;
        _this.cloud2.anchor.setTo(0.5);
        _this.cloud2.scale.setTo(0.8, 0.8);
        _this.cloud2.canAdd = 2;

        _this.fraction2 = _this.add.sprite(535, 430, 'nsf2_4fraction');
        _this.fraction2.anchor.setTo(0.5);
        _this.fraction2.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);

        _this.text = this.add.text(0, 15, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);
        /*********************************************************/

        _this.numBox = _this.add.sprite(320, 180, 'nsf2_4box');
        _this.numBox.anchor.setTo(0.5);
        _this.numBox.inputEnabled = true;
        _this.numBox.input.useHandCursor = true;
        _this.numBox.events.onInputDown.add(_this.addNumberPad, _this);

        _this.numBox.frame = 1;

        _this.plate = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate.anchor.setTo(0.5);
        _this.plate.scale.setTo(0.7, 0.7);

        _this.cake = _this.add.sprite(530, 185, 'nsf2_4cake');
        _this.cake.anchor.setTo(0.5);
        _this.cake.scale.setTo(1.2, 1.2);
        //_this.cake.inputEnabled = true;
        //  _this.cake.input.useHandCursor = true;
        /***********************************************************/
        _this.plate2 = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate2.anchor.setTo(0.5);
        _this.plate2.scale.setTo(0.7, 0.7);

        _this.cake5 = _this.add.sprite(507, 158, 'nsf2_4slice6'); _this.cake5.name = 'l6';
        _this.cake5.anchor.setTo(0.5);

        _this.cake3 = _this.add.sprite(493, 200, 'nsf2_4slice8'); _this.cake5.name = 'l8';
        _this.cake3.anchor.setTo(0.5);

        _this.cake4 = _this.add.sprite(556, 167, 'nsf2_4slice4'); _this.cake4.name = 'l4';
        _this.cake4.anchor.setTo(0.5);

        _this.cake2 = _this.add.sprite(559, 205, 'nsf2_4slice2'); _this.cake2.name = 'l2';
        _this.cake2.anchor.setTo(0.5);

        _this.cake1 = _this.add.sprite(519, 211, 'nsf2_4slice1'); _this.cake1.name = 'l1';
        _this.cake1.anchor.setTo(0.5);

        _this.cake5X = _this.cake5.x;
        _this.cake5Y = _this.cake5.y;
        _this.cake3X = _this.cake3.x;
        _this.cake3Y = _this.cake3.y;
        _this.cake4X = _this.cake4.x;
        _this.cake4Y = _this.cake4.y;
        _this.cake2X = _this.cake2.x;
        _this.cake2Y = _this.cake2.y;
        _this.cake1X = _this.cake1.x;
        _this.cake1Y = _this.cake1.y;

        _this.cake5.events.onInputDown.add(_this.checkAns, _this);
        _this.cake3.events.onInputDown.add(_this.checkAns, _this);
        _this.cake4.events.onInputDown.add(_this.checkAns, _this);
        _this.cake2.events.onInputDown.add(_this.checkAns, _this);
        _this.cake1.events.onInputDown.add(_this.checkAns, _this);

        /******************************************************/

        _this.rightmark = _this.add.sprite(895, 310, 'nsf2_4tick');
        _this.rightmark.anchor.setTo(0.5);
        //_this.rightmark.scale.setTo(1.2,1.2);
        _this.rightmark.inputEnabled = true;
        _this.rightmark.input.useHandCursor = true;


        flagGroup1 = _this.add.group();

        flagGroup1.add(_this.girl1);
        flagGroup1.add(_this.cloud1);
        flagGroup1.add(_this.fraction1);

        flagGroup1.add(_this.girl2);
        flagGroup1.add(_this.cloud2);
        flagGroup1.add(_this.fraction2);

        flagGroup1.add(_this.numBox);

        flagGroup1.x = -600;
        _this.tween = _this.add.tween(flagGroup1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        flagGroup2 = _this.add.group();
        flagGroup2.add(_this.plate);
        flagGroup2.add(_this.cake);
        flagGroup2.add(_this.hand);

        flagGroup2.x = -600;
        _this.tween = _this.add.tween(flagGroup2);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        cakeGroup = _this.add.group();
        cakeGroup.add(_this.plate2);
        cakeGroup.add(_this.cake5);
        cakeGroup.add(_this.cake3);
        cakeGroup.add(_this.cake4);
        cakeGroup.add(_this.cake2);
        cakeGroup.add(_this.cake1);

        cakeGroup.alpha = 0;

        cakeGroup.x = -600;
        _this.tween = _this.add.tween(cakeGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        /*************************************************************/

        _this.mcake3 = this.add.sprite(327, 360, 'nsf2_4smallslice1'); _this.mcake3.visible = false;
        _this.mcake3.anchor.setTo(0.5);
        _this.mcake3.inputEnabled = false;
        _this.mcake3X = _this.mcake3.x;
        _this.mcake3Y = _this.mcake3.y;

        _this.mcakes4 = this.add.sprite(352, 375, 'nsf2_4smallslice2'); _this.mcakes4.visible = false;
        _this.mcakes4.anchor.setTo(0.5);
        _this.mcakes4.inputEnabled = false;
        _this.mcakes4X = _this.mcakes4.x;
        _this.mcakes4Y = _this.mcakes4.y;

        _this.mcake23 = this.add.sprite(378, 360, 'nsf2_4smallslice3'); _this.mcake23.visible = false;
        _this.mcake23.anchor.setTo(0.5);
        _this.mcake23.inputEnabled = false;
        _this.mcake23X = _this.mcake23.x;
        _this.mcake23Y = _this.mcake23.y;

        _this.mcakes24 = this.add.sprite(500, 370, 'nsf2_4smallslice4'); _this.mcakes24.visible = false;
        _this.mcakes24.anchor.setTo(0.5);
        _this.mcakes24.inputEnabled = false;
        _this.mcakes24X = _this.mcakes24.x;
        _this.mcakes24Y = _this.mcakes24.y;

        _this.mcake33 = this.add.sprite(530, 360, 'nsf2_4smallslice5'); _this.mcake33.visible = false;
        _this.mcake33.anchor.setTo(0.5);
        _this.mcake33.inputEnabled = false;
        _this.mcake33X = _this.mcake33.x;
        _this.mcake33Y = _this.mcake33.y;

        smallCakeGroup = _this.add.group();
        smallCakeGroup.add(_this.mcake3);
        smallCakeGroup.add(_this.mcakes4);
        smallCakeGroup.add(_this.mcake23);
        smallCakeGroup.add(_this.mcakes24);
        smallCakeGroup.add(_this.mcake33);

    },

    gotoSixthQuestion: function () {
        _this.questionNo = 6;
        _this.rightAns = 10;

        if (_this.soundPlayed == false) {
            _this.getVoice();
            _this.soundPlayed = true;
        }

        if (_this.showHand == false) {
            _this.hand = _this.add.sprite(385, 220, 'nsf2_4_hand');
            _this.hand.anchor.setTo(0.5);
            _this.hand.scale.setTo(0.6, 0.6);

            _this.anim1 = this.hand.animations.add('box');
            _this.anim1.play(3, true);
            _this.showHand = true;
        }

        _this.mcake3 = this.add.sprite(150, 360, 'nsf2_4smallslice1'); _this.mcake3.visible = false;
        _this.mcake3.anchor.setTo(0.5);
        _this.mcake3.inputEnabled = false;
        _this.mcake3X = _this.mcake3.x;
        _this.mcake3Y = _this.mcake3.y;

        _this.mcakes4 = this.add.sprite(180, 360, 'nsf2_4smallslice2'); _this.mcakes4.visible = false;
        _this.mcakes4.anchor.setTo(0.5);
        _this.mcakes4.inputEnabled = false;
        _this.mcakes4X = _this.mcakes4.x;
        _this.mcakes4Y = _this.mcakes4.y;

        _this.mcake23 = this.add.sprite(295, 365, 'nsf2_4smallslice3'); _this.mcake23.visible = false;
        _this.mcake23.anchor.setTo(0.5);
        _this.mcake23.inputEnabled = false;
        _this.mcake23X = _this.mcake23.x;
        _this.mcake23Y = _this.mcake23.y;

        _this.mcakes24 = this.add.sprite(405, 365, 'nsf2_4smallslice4'); _this.mcakes24.visible = false;
        _this.mcakes24.anchor.setTo(0.5);
        _this.mcakes24.inputEnabled = false;
        _this.mcakes24X = _this.mcakes24.x;
        _this.mcakes24Y = _this.mcakes24.y;

        _this.mcake33 = this.add.sprite(440, 365, 'nsf2_4smallslice5'); _this.mcake33.visible = false;
        _this.mcake33.anchor.setTo(0.5);
        _this.mcake33.inputEnabled = false;
        _this.mcake33X = _this.mcake33.x;
        _this.mcake33Y = _this.mcake33.y;

        _this.mcakes34 = this.add.sprite(585, 365, 'nsf2_4smallslice6'); _this.mcakes34.visible = false;
        _this.mcakes34.anchor.setTo(0.5);
        _this.mcakes34.inputEnabled = false;
        _this.mcakes34X = _this.mcakes34.x;
        _this.mcakes34Y = _this.mcakes34.y;

        _this.mcake43 = this.add.sprite(550, 385, 'nsf2_4smallslice7'); _this.mcake43.visible = false;
        _this.mcake43.anchor.setTo(0.5);
        _this.mcake43.inputEnabled = false;
        _this.mcake43X = _this.mcake43.x;
        _this.mcake43Y = _this.mcake43.y;

        _this.mcakes44 = this.add.sprite(525, 360, 'nsf2_4smallslice8'); _this.mcakes44.visible = false;
        _this.mcakes44.anchor.setTo(0.5);
        _this.mcakes44.inputEnabled = false;
        _this.mcakes44X = _this.mcakes44.x;
        _this.mcakes44Y = _this.mcakes44.y;

        _this.mcake53 = this.add.sprite(556, 350, 'nsf2_4smallslice9'); _this.mcake53.visible = false;
        _this.mcake53.anchor.setTo(0.5);
        _this.mcake53.inputEnabled = false;
        _this.mcake53X = _this.mcake53.x;
        _this.mcake53Y = _this.mcake53.y;

        _this.mcakes54 = this.add.sprite(685, 365, 'nsf2_4smallslice10'); _this.mcakes54.visible = false;
        _this.mcakes54.anchor.setTo(0.5);
        _this.mcakes54.inputEnabled = false;
        _this.mcakes54X = _this.mcakes54.x;
        _this.mcakes54Y = _this.mcakes54.y;

        /*************************************************************/

        _this.girl1 = _this.add.sprite(120, 468, 'nsf2_4girl');
        _this.girl1.anchor.setTo(0.5);
        _this.girl1.scale.setTo(0.9, 0.9);

        _this.cloud1 = _this.add.sprite(165, 375, 'nsf2_4cloud');
        _this.c1 = 0;
        _this.cloud1.anchor.setTo(0.5);
        _this.cloud1.scale.setTo(0.8, 0.8);
        _this.cloud1.canAdd = 2;

        _this.fraction1 = _this.add.sprite(185, 430, 'nsf2_4fraction');
        _this.fraction1.anchor.setTo(0.5);
        _this.fraction1.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);

        _this.text = this.add.text(0, 15, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);
        /***************************************************/

        _this.girl2 = _this.add.sprite(250, 468, 'nsf2_4girl');
        _this.girl2.anchor.setTo(0.5);
        _this.girl2.scale.setTo(0.9, 0.9);

        _this.cloud2 = _this.add.sprite(295, 375, 'nsf2_4cloud');
        _this.c2 = 0;
        _this.cloud2.anchor.setTo(0.5);
        _this.cloud2.scale.setTo(0.8, 0.8);
        _this.cloud2.canAdd = 1;

        _this.fraction2 = _this.add.sprite(315, 430, 'nsf2_4fraction');
        _this.fraction2.anchor.setTo(0.5);
        _this.fraction2.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);

        _this.text = this.add.text(0, 15, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);
        /*********************************************************/

        _this.girl3 = _this.add.sprite(380, 468, 'nsf2_4girl');
        _this.girl3.anchor.setTo(0.5);
        _this.girl3.scale.setTo(0.9, 0.9);

        _this.cloud3 = _this.add.sprite(425, 375, 'nsf2_4cloud');
        _this.cloud3.anchor.setTo(0.5);
        _this.c3 = 0;
        _this.cloud3.scale.setTo(0.8, 0.8);
        _this.cloud3.canAdd = 2;

        _this.fraction3 = _this.add.sprite(445, 430, 'nsf2_4fraction');
        _this.fraction3.anchor.setTo(0.5);
        _this.fraction3.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);

        _this.text = this.add.text(0, 15, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);
        /**************************************************************/

        _this.girl4 = _this.add.sprite(510, 468, 'nsf2_4girl');
        _this.girl4.anchor.setTo(0.5);
        _this.girl4.scale.setTo(0.9, 0.9);

        _this.cloud4 = _this.add.sprite(555, 375, 'nsf2_4cloud');
        _this.c4 = 0;
        _this.cloud4.anchor.setTo(0.5);
        _this.cloud4.scale.setTo(0.8, 0.8);
        _this.cloud4.canAdd = 4;

        _this.fraction4 = _this.add.sprite(575, 430, 'nsf2_4fraction');
        _this.fraction4.anchor.setTo(0.5);
        _this.fraction4.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction4.addChild(_this.text);

        _this.text = this.add.text(0, 15, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction4.addChild(_this.text);
        /******************************************************************/

        _this.girl5 = _this.add.sprite(640, 468, 'nsf2_4girl');
        _this.girl5.anchor.setTo(0.5);
        _this.girl5.scale.setTo(0.9, 0.9);

        _this.cloud5 = _this.add.sprite(685, 375, 'nsf2_4cloud');
        _this.c5 = 0;
        _this.cloud5.anchor.setTo(0.5);
        _this.cloud5.scale.setTo(0.8, 0.8);
        _this.cloud5.canAdd = 1;

        _this.fraction5 = _this.add.sprite(705, 430, 'nsf2_4fraction');
        _this.fraction5.anchor.setTo(0.5);
        _this.fraction5.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction5.addChild(_this.text);

        _this.text = this.add.text(0, 15, "10");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction5.addChild(_this.text);
        /******************************************************************/

        _this.numBox = _this.add.sprite(320, 180, 'nsf2_4box');
        _this.numBox.anchor.setTo(0.5);
        _this.numBox.inputEnabled = true;
        _this.numBox.input.useHandCursor = true;
        _this.numBox.events.onInputDown.add(_this.addNumberPad, _this);

        _this.numBox.frame = 1;

        _this.plate = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate.anchor.setTo(0.5);
        _this.plate.scale.setTo(0.7, 0.7);

        _this.cake = _this.add.sprite(530, 185, 'nsf2_4cake');
        _this.cake.anchor.setTo(0.5);
        _this.cake.scale.setTo(1.2, 1.2);
        //_this.cake.inputEnabled = true;
        //  _this.cake.input.useHandCursor = true;
        /***********************************************************/
        _this.plate2 = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate2.anchor.setTo(0.5);
        _this.plate2.scale.setTo(0.7, 0.7);

        _this.largecake10 = _this.add.sprite(536, 156, 'nsf2_4largeslice10'); _this.largecake10.name = 'l10';
        _this.largecake10.anchor.setTo(0.5);
        _this.largecake10.scale.setTo(0.8, 0.8);

        _this.largecake7 = _this.add.sprite(558, 168, 'nsf2_4largeslice7'); _this.largecake7.name = 'l7';
        _this.largecake7.anchor.setTo(0.5);
        _this.largecake7.scale.setTo(0.8, 0.8);

        _this.largecake6 = _this.add.sprite(565, 190, 'nsf2_4largeslice6'); _this.largecake6.name = 'l6';
        _this.largecake6.anchor.setTo(0.5);
        _this.largecake6.scale.setTo(0.8, 0.8);

        _this.largecake5 = _this.add.sprite(560, 210, 'nsf2_4largeslice5'); _this.largecake5.name = 'l5';
        _this.largecake5.anchor.setTo(0.5);
        _this.largecake5.scale.setTo(0.8, 0.8);

        _this.largecake3 = _this.add.sprite(545, 217, 'nsf2_4largeslice3'); _this.largecake3.name = 'l3';
        _this.largecake3.anchor.setTo(0.5);
        _this.largecake3.scale.setTo(0.8, 0.8);

        _this.largecake2 = _this.add.sprite(510, 154, 'nsf2_4largeslice12'); _this.largecake2.name = 'l12';
        _this.largecake2.anchor.setTo(0.5);
        _this.largecake2.scale.setTo(0.8, 0.8);

        _this.largecake4 = _this.add.sprite(495, 165, 'nsf2_4largeslice14'); _this.largecake4.name = 'l14';
        _this.largecake4.anchor.setTo(0.5);
        _this.largecake4.scale.setTo(0.8, 0.8);

        _this.largecake8 = _this.add.sprite(490, 190, 'nsf2_4largeslice13'); _this.largecake8.name = 'l13';
        _this.largecake8.anchor.setTo(0.5);
        _this.largecake8.scale.setTo(0.8, 0.8);

        _this.largecake9 = _this.add.sprite(496, 213, 'nsf2_4largeslice16'); _this.largecake9.name = 'l16';
        _this.largecake9.anchor.setTo(0.5);
        _this.largecake9.scale.setTo(0.8, 0.8);

        _this.largecake1 = _this.add.sprite(516, 217, 'nsf2_4largeslice1'); _this.largecake1.name = 'l1';
        _this.largecake1.anchor.setTo(0.5);
        _this.largecake1.scale.setTo(0.8, 0.8);

        _this.largecake10X = _this.largecake10.x;
        _this.largecake10Y = _this.largecake10.y;
        _this.largecake7X = _this.largecake7.x;
        _this.largecake7Y = _this.largecake7.y;
        _this.largecake6X = _this.largecake6.x;
        _this.largecake6Y = _this.largecake6.y;
        _this.largecake5X = _this.largecake5.x;
        _this.largecake5Y = _this.largecake5.y;
        _this.largecake3X = _this.largecake3.x;
        _this.largecake3Y = _this.largecake3.y;
        _this.largecake2X = _this.largecake2.x;
        _this.largecake2Y = _this.largecake2.y;
        _this.largecake4X = _this.largecake4.x;
        _this.largecake4Y = _this.largecake4.y;
        _this.largecake8X = _this.largecake8.x;
        _this.largecake8Y = _this.largecake8.y;
        _this.largecake9X = _this.largecake9.x;
        _this.largecake9Y = _this.largecake9.y;
        _this.largecake1X = _this.largecake1.x;
        _this.largecake1Y = _this.largecake1.y;

        _this.largecake10.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake7.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake6.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake5.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake3.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake2.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake4.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake8.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake9.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake1.events.onInputDown.add(_this.checkAns, _this);

        /******************************************************/

        _this.rightmark = _this.add.sprite(895, 310, 'nsf2_4tick');
        _this.rightmark.anchor.setTo(0.5);
        //_this.rightmark.scale.setTo(1.2,1.2);
        _this.rightmark.inputEnabled = true;
        _this.rightmark.input.useHandCursor = true;


        flagGroup1 = _this.add.group();

        flagGroup1.add(_this.girl1);
        flagGroup1.add(_this.cloud1);
        flagGroup1.add(_this.fraction1);

        flagGroup1.add(_this.girl2);
        flagGroup1.add(_this.cloud2);
        flagGroup1.add(_this.fraction2);

        flagGroup1.add(_this.girl3);
        flagGroup1.add(_this.cloud3);
        flagGroup1.add(_this.fraction3);

        flagGroup1.add(_this.girl4);
        flagGroup1.add(_this.cloud4);
        flagGroup1.add(_this.fraction4);

        flagGroup1.add(_this.girl5);
        flagGroup1.add(_this.cloud5);
        flagGroup1.add(_this.fraction5);

        flagGroup1.add(_this.numBox);

        flagGroup1.x = -600;
        _this.tween = _this.add.tween(flagGroup1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        flagGroup2 = _this.add.group();
        flagGroup2.add(_this.plate);
        flagGroup2.add(_this.cake);
        flagGroup2.add(_this.hand);

        flagGroup2.x = -600;
        _this.tween = _this.add.tween(flagGroup2);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        cakeGroup = _this.add.group();
        cakeGroup.add(_this.plate2);
        cakeGroup.add(_this.largecake10);
        cakeGroup.add(_this.largecake7);
        cakeGroup.add(_this.largecake6);
        cakeGroup.add(_this.largecake5);
        cakeGroup.add(_this.largecake3);
        cakeGroup.add(_this.largecake2);
        cakeGroup.add(_this.largecake4);
        cakeGroup.add(_this.largecake8);
        cakeGroup.add(_this.largecake9);
        cakeGroup.add(_this.largecake1);

        cakeGroup.alpha = 0;

        cakeGroup.x = -600;
        _this.tween = _this.add.tween(cakeGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        smallCakeGroup = _this.add.group();
        smallCakeGroup.add(_this.mcake3);
        smallCakeGroup.add(_this.mcakes4);
        smallCakeGroup.add(_this.mcake23);
        smallCakeGroup.add(_this.mcakes24);
        smallCakeGroup.add(_this.mcake33);
        smallCakeGroup.add(_this.mcakes34);
        smallCakeGroup.add(_this.mcake43);
        smallCakeGroup.add(_this.mcakes44);
        smallCakeGroup.add(_this.mcake53);
        smallCakeGroup.add(_this.mcakes54);
    },

    gotoSeventhQuestion: function () {
        _this.questionNo = 7;
        _this.rightAns = 6;

        if (_this.soundPlayed == false) {
            _this.getVoice();
            _this.soundPlayed = true;
        }

        if (_this.showHand == false) {
            _this.hand = _this.add.sprite(385, 220, 'nsf2_4_hand');
            _this.hand.anchor.setTo(0.5);
            _this.hand.scale.setTo(0.6, 0.6);

            _this.anim1 = this.hand.animations.add('box');
            _this.anim1.play(3, true);
            _this.showHand = true;
        }

        _this.mcake3 = this.add.sprite(185, 360, 'nsf2_4smallslice1'); _this.mcake3.visible = false;
        _this.mcake3.anchor.setTo(0.5);
        _this.mcake3.inputEnabled = false;
        _this.mcake3X = _this.mcake3.x;
        _this.mcake3Y = _this.mcake3.y;

        _this.mcakes4 = this.add.sprite(320, 365, 'nsf2_4smallslice2'); _this.mcakes4.visible = false;
        _this.mcakes4.anchor.setTo(0.5);
        _this.mcakes4.inputEnabled = false;
        _this.mcakes4X = _this.mcakes4.x;
        _this.mcakes4Y = _this.mcakes4.y;

        _this.mcake23 = this.add.sprite(340, 353, 'nsf2_4smallslice3'); _this.mcake23.visible = false;
        _this.mcake23.anchor.setTo(0.5);
        _this.mcake23.inputEnabled = false;
        _this.mcake23X = _this.mcake23.x;
        _this.mcake23Y = _this.mcake23.y;

        _this.mcakes24 = this.add.sprite(370, 370, 'nsf2_4smallslice4'); _this.mcakes24.visible = false;
        _this.mcakes24.anchor.setTo(0.5);
        _this.mcakes24.inputEnabled = false;
        _this.mcakes24X = _this.mcakes24.x;
        _this.mcakes24Y = _this.mcakes24.y;

        _this.mcake33 = this.add.sprite(505, 365, 'nsf2_4smallslice5'); _this.mcake33.visible = false;
        _this.mcake33.anchor.setTo(0.5);
        _this.mcake33.inputEnabled = false;
        _this.mcake33X = _this.mcake33.x;
        _this.mcake33Y = _this.mcake33.y;

        _this.mcakes34 = this.add.sprite(665, 365, 'nsf2_4smallslice6'); _this.mcakes34.visible = false;
        _this.mcakes34.anchor.setTo(0.5);
        _this.mcakes34.inputEnabled = false;
        _this.mcakes34X = _this.mcakes34.x;
        _this.mcakes34Y = _this.mcakes34.y;

        /*************************************************************/

        _this.girl1 = _this.add.sprite(140, 468, 'nsf2_4girl');
        _this.girl1.anchor.setTo(0.5);
        _this.girl1.scale.setTo(0.9, 0.9);

        _this.cloud1 = _this.add.sprite(185, 375, 'nsf2_4cloud');
        _this.c1 = 0;
        _this.cloud1.anchor.setTo(0.5);
        _this.cloud1.scale.setTo(0.8, 0.8);
        _this.cloud1.canAdd = 1;

        _this.fraction1 = _this.add.sprite(205, 430, 'nsf2_4fraction');
        _this.fraction1.anchor.setTo(0.5);
        _this.fraction1.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);

        _this.text = this.add.text(0, 15, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);
        /***************************************************/

        _this.girl2 = _this.add.sprite(300, 468, 'nsf2_4girl');
        _this.girl2.anchor.setTo(0.5);
        _this.girl2.scale.setTo(0.9, 0.9);

        _this.cloud2 = _this.add.sprite(345, 375, 'nsf2_4cloud');
        _this.c2 = 0;
        _this.cloud2.anchor.setTo(0.5);
        _this.cloud2.scale.setTo(0.8, 0.8);
        _this.cloud2.canAdd = 3;

        _this.fraction2 = _this.add.sprite(365, 430, 'nsf2_4fraction');
        _this.fraction2.anchor.setTo(0.5);
        _this.fraction2.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);

        _this.text = this.add.text(0, 15, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);
        /*********************************************************/

        _this.girl3 = _this.add.sprite(460, 468, 'nsf2_4girl');
        _this.girl3.anchor.setTo(0.5);
        _this.girl3.scale.setTo(0.9, 0.9);

        _this.cloud3 = _this.add.sprite(505, 375, 'nsf2_4cloud');
        _this.cloud3.anchor.setTo(0.5);
        _this.c3 = 0;
        _this.cloud3.scale.setTo(0.8, 0.8);
        _this.cloud3.canAdd = 1;

        _this.fraction3 = _this.add.sprite(525, 430, 'nsf2_4fraction');
        _this.fraction3.anchor.setTo(0.5);
        _this.fraction3.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);

        _this.text = this.add.text(0, 15, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);
        /**************************************************************/

        _this.girl4 = _this.add.sprite(620, 468, 'nsf2_4girl');
        _this.girl4.anchor.setTo(0.5);
        _this.girl4.scale.setTo(0.9, 0.9);

        _this.cloud4 = _this.add.sprite(665, 375, 'nsf2_4cloud');
        _this.c4 = 0;
        _this.cloud4.anchor.setTo(0.5);
        _this.cloud4.scale.setTo(0.8, 0.8);
        _this.cloud4.canAdd = 1;

        _this.fraction4 = _this.add.sprite(685, 430, 'nsf2_4fraction');
        _this.fraction4.anchor.setTo(0.5);
        _this.fraction4.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction4.addChild(_this.text);

        _this.text = this.add.text(0, 15, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction4.addChild(_this.text);
        /******************************************************************/

        _this.numBox = _this.add.sprite(320, 180, 'nsf2_4box');
        _this.numBox.anchor.setTo(0.5);
        _this.numBox.inputEnabled = true;
        _this.numBox.input.useHandCursor = true;
        _this.numBox.events.onInputDown.add(_this.addNumberPad, _this);

        _this.numBox.frame = 1;

        _this.plate = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate.anchor.setTo(0.5);
        _this.plate.scale.setTo(0.7, 0.7);

        _this.cake = _this.add.sprite(530, 185, 'nsf2_4cake');
        _this.cake.anchor.setTo(0.5);
        _this.cake.scale.setTo(1.2, 1.2);
        //_this.cake.inputEnabled = true;
        //  _this.cake.input.useHandCursor = true;
        /***********************************************************/
        _this.plate2 = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate2.anchor.setTo(0.5);
        _this.plate2.scale.setTo(0.7, 0.7);

        _this.cake5 = _this.add.sprite(530, 163, 'nsf2_4slice5'); _this.cake5.name = 'l5';
        _this.cake5.anchor.setTo(0.5);

        _this.cake6 = _this.add.sprite(490, 165, 'nsf2_4slice6'); _this.cake6.name = 'l6';
        _this.cake6.anchor.setTo(0.5);

        _this.cake3 = _this.add.sprite(490, 205, 'nsf2_4slice8'); _this.cake3.name = 'l7';
        _this.cake3.anchor.setTo(0.5);

        _this.cake4 = _this.add.sprite(561, 174, 'nsf2_4slice4'); _this.cake4.name = 'l4';
        _this.cake4.anchor.setTo(0.5);

        _this.cake2 = _this.add.sprite(560, 208, 'nsf2_4slice2'); _this.cake2.name = 'l2';
        _this.cake2.anchor.setTo(0.5);

        _this.cake1 = _this.add.sprite(520, 215, 'nsf2_4slice1'); _this.cake1.name = 'l1';
        _this.cake1.anchor.setTo(0.5);

        _this.cake5X = _this.cake5.x;
        _this.cake5Y = _this.cake5.y;
        _this.cake6X = _this.cake6.x;
        _this.cake6Y = _this.cake6.y;
        _this.cake3X = _this.cake3.x;
        _this.cake3Y = _this.cake3.y;
        _this.cake4X = _this.cake4.x;
        _this.cake4Y = _this.cake4.y;
        _this.cake2X = _this.cake2.x;
        _this.cake2Y = _this.cake2.y;
        _this.cake1X = _this.cake1.x;
        _this.cake1Y = _this.cake1.y;

        _this.cake5.events.onInputDown.add(_this.checkAns, _this);
        _this.cake6.events.onInputDown.add(_this.checkAns, _this);
        _this.cake3.events.onInputDown.add(_this.checkAns, _this);
        _this.cake4.events.onInputDown.add(_this.checkAns, _this);
        _this.cake2.events.onInputDown.add(_this.checkAns, _this);
        _this.cake1.events.onInputDown.add(_this.checkAns, _this);

        /******************************************************/

        _this.rightmark = _this.add.sprite(895, 310, 'nsf2_4tick');
        _this.rightmark.anchor.setTo(0.5);
        //_this.rightmark.scale.setTo(1.2,1.2);
        _this.rightmark.inputEnabled = true;
        _this.rightmark.input.useHandCursor = true;


        flagGroup1 = _this.add.group();

        flagGroup1.add(_this.girl1);
        flagGroup1.add(_this.cloud1);
        flagGroup1.add(_this.fraction1);

        flagGroup1.add(_this.girl2);
        flagGroup1.add(_this.cloud2);
        flagGroup1.add(_this.fraction2);

        flagGroup1.add(_this.girl3);
        flagGroup1.add(_this.cloud3);
        flagGroup1.add(_this.fraction3);

        flagGroup1.add(_this.girl4);
        flagGroup1.add(_this.cloud4);
        flagGroup1.add(_this.fraction4);

        flagGroup1.add(_this.numBox);

        flagGroup1.x = -600;
        _this.tween = _this.add.tween(flagGroup1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        flagGroup2 = _this.add.group();
        flagGroup2.add(_this.plate);
        flagGroup2.add(_this.cake);
        flagGroup2.add(_this.hand);

        flagGroup2.x = -600;
        _this.tween = _this.add.tween(flagGroup2);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        cakeGroup = _this.add.group();
        cakeGroup.add(_this.plate2);
        cakeGroup.add(_this.cake5);
        cakeGroup.add(_this.cake6);
        cakeGroup.add(_this.cake3);
        cakeGroup.add(_this.cake4);
        cakeGroup.add(_this.cake2);
        cakeGroup.add(_this.cake1);

        cakeGroup.alpha = 0;

        cakeGroup.x = -600;
        _this.tween = _this.add.tween(cakeGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        smallCakeGroup = _this.add.group();
        smallCakeGroup.add(_this.mcake3);
        smallCakeGroup.add(_this.mcakes4);
        smallCakeGroup.add(_this.mcake23);
        smallCakeGroup.add(_this.mcakes24);
        smallCakeGroup.add(_this.mcake33);
        smallCakeGroup.add(_this.mcakes34);

    },

    gotoEighthQuestion: function () {
        _this.questionNo = 8;
        _this.rightAns = 12;

        if (_this.soundPlayed == false) {
            _this.getVoice();
            _this.soundPlayed = true;
        }

        if (_this.showHand == false) {
            _this.hand = _this.add.sprite(385, 220, 'nsf2_4_hand');
            _this.hand.anchor.setTo(0.5);
            _this.hand.scale.setTo(0.6, 0.6);

            _this.anim1 = this.hand.animations.add('box');
            _this.anim1.play(3, true);
            _this.showHand = true;
        }

        _this.mcake3 = this.add.sprite(270, 340, 'nsf2_4smallslice1'); _this.mcake3.visible = false;
        _this.mcake3.anchor.setTo(0.5);
        _this.mcake3.inputEnabled = false;
        _this.mcake3X = _this.mcake3.x;
        _this.mcake3Y = _this.mcake3.y;

        _this.mcakes4 = this.add.sprite(230, 345, 'nsf2_4smallslice2'); _this.mcakes4.visible = false;
        _this.mcakes4.anchor.setTo(0.5);
        _this.mcakes4.inputEnabled = false;
        _this.mcakes4X = _this.mcakes4.x;
        _this.mcakes4Y = _this.mcakes4.y;

        _this.mcake23 = this.add.sprite(255, 380, 'nsf2_4smallslice3'); _this.mcake23.visible = false;
        _this.mcake23.anchor.setTo(0.5);
        _this.mcake23.inputEnabled = false;
        _this.mcake23X = _this.mcake23.x;
        _this.mcake23Y = _this.mcake23.y;

        _this.mcakes24 = this.add.sprite(300, 372, 'nsf2_4smallslice4'); _this.mcakes24.visible = false;
        _this.mcakes24.anchor.setTo(0.5);
        _this.mcakes24.inputEnabled = false;
        _this.mcakes24X = _this.mcakes24.x;
        _this.mcakes24Y = _this.mcakes24.y;

        _this.mcake33 = this.add.sprite(415, 360, 'nsf2_4smallslice5'); _this.mcake33.visible = false;
        _this.mcake33.anchor.setTo(0.5);
        _this.mcake33.inputEnabled = false;
        _this.mcake33X = _this.mcake33.x;
        _this.mcake33Y = _this.mcake33.y;

        _this.mcakes34 = this.add.sprite(450, 380, 'nsf2_4smallslice6'); _this.mcakes34.visible = false;
        _this.mcakes34.anchor.setTo(0.5);
        _this.mcakes34.inputEnabled = false;
        _this.mcakes34X = _this.mcakes34.x;
        _this.mcakes34Y = _this.mcakes34.y;

        _this.mcake43 = this.add.sprite(480, 340, 'nsf2_4smallslice7'); _this.mcake43.visible = false;
        _this.mcake43.anchor.setTo(0.5);
        _this.mcake43.inputEnabled = false;
        _this.mcake43X = _this.mcake43.x;
        _this.mcake43Y = _this.mcake43.y;

        _this.mcakes44 = this.add.sprite(445, 335, 'nsf2_4smallslice8'); _this.mcakes44.visible = false;
        _this.mcakes44.anchor.setTo(0.5);
        _this.mcakes44.inputEnabled = false;
        _this.mcakes44X = _this.mcakes44.x;
        _this.mcakes44Y = _this.mcakes44.y;

        _this.mcake53 = this.add.sprite(490, 377, 'nsf2_4smallslice9'); _this.mcake53.visible = false;
        _this.mcake53.anchor.setTo(0.5);
        _this.mcake53.inputEnabled = false;
        _this.mcake53X = _this.mcake53.x;
        _this.mcake53Y = _this.mcake53.y;

        _this.mcakes54 = this.add.sprite(615, 365, 'nsf2_4smallslice10'); _this.mcakes54.visible = false;
        _this.mcakes54.anchor.setTo(0.5);
        _this.mcakes54.inputEnabled = false;
        _this.mcakes54X = _this.mcakes54.x;
        _this.mcakes54Y = _this.mcakes54.y;

        _this.mcake63 = this.add.sprite(640, 340, 'nsf2_4smallslice11'); _this.mcake63.visible = false;
        _this.mcake63.anchor.setTo(0.5);
        _this.mcake63.inputEnabled = false;
        _this.mcake63X = _this.mcake63.x;
        _this.mcake63Y = _this.mcake63.y;

        _this.mcakes64 = this.add.sprite(670, 365, 'nsf2_4smallslice12'); _this.mcakes64.visible = false;
        _this.mcakes64.anchor.setTo(0.5);
        _this.mcakes64.inputEnabled = false;
        _this.mcakes64X = _this.mcakes64.x;
        _this.mcakes64Y = _this.mcakes64.y;

        /*************************************************************/

        _this.girl1 = _this.add.sprite(220, 468, 'nsf2_4girl');
        _this.girl1.anchor.setTo(0.5);
        _this.girl1.scale.setTo(0.9, 0.9);

        _this.cloud1 = _this.add.sprite(265, 370, 'nsf2_4cloud');
        _this.c1 = 0;
        _this.cloud1.anchor.setTo(0.5);
        _this.cloud1.scale.setTo(1, 1);
        _this.cloud1.canAdd = 4;

        _this.fraction1 = _this.add.sprite(285, 430, 'nsf2_4fraction');
        _this.fraction1.anchor.setTo(0.5);
        _this.fraction1.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);

        _this.text = this.add.text(0, 15, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);
        /***************************************************/

        _this.girl2 = _this.add.sprite(410, 468, 'nsf2_4girl');
        _this.girl2.anchor.setTo(0.5);
        _this.girl2.scale.setTo(0.9, 0.9);

        _this.cloud2 = _this.add.sprite(455, 370, 'nsf2_4cloud');
        _this.c2 = 0;
        _this.cloud2.anchor.setTo(0.5);
        _this.cloud2.scale.setTo(1, 1);
        _this.cloud2.canAdd = 5;

        _this.fraction2 = _this.add.sprite(475, 430, 'nsf2_4fraction');
        _this.fraction2.anchor.setTo(0.5);
        _this.fraction2.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);

        _this.text = this.add.text(0, 15, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);
        /*********************************************************/

        _this.girl3 = _this.add.sprite(600, 468, 'nsf2_4girl');
        _this.girl3.anchor.setTo(0.5);
        _this.girl3.scale.setTo(0.9, 0.9);

        _this.cloud3 = _this.add.sprite(645, 370, 'nsf2_4cloud');
        _this.cloud3.anchor.setTo(0.5);
        _this.c3 = 0;
        _this.cloud3.scale.setTo(1, 1);
        _this.cloud3.canAdd = 3;

        _this.fraction3 = _this.add.sprite(665, 430, 'nsf2_4fraction');
        _this.fraction3.anchor.setTo(0.5);
        _this.fraction3.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);

        _this.text = this.add.text(0, 15, "12");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);
        /**************************************************************/

        _this.numBox = _this.add.sprite(320, 180, 'nsf2_4box');
        _this.numBox.anchor.setTo(0.5);
        _this.numBox.inputEnabled = true;
        _this.numBox.input.useHandCursor = true;
        _this.numBox.events.onInputDown.add(_this.addNumberPad, _this);

        _this.numBox.frame = 1;

        _this.plate = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate.anchor.setTo(0.5);
        _this.plate.scale.setTo(0.7, 0.7);

        _this.cake = _this.add.sprite(530, 185, 'nsf2_4cake');
        _this.cake.anchor.setTo(0.5);
        _this.cake.scale.setTo(1.2, 1.2);
        //_this.cake.inputEnabled = true;
        //  _this.cake.input.useHandCursor = true;
        /***********************************************************/
        _this.plate2 = _this.add.sprite(528, 200, 'nsf2_4plate');
        _this.plate2.anchor.setTo(0.5);
        _this.plate2.scale.setTo(0.7, 0.7);

        _this.largecake9 = _this.add.sprite(524, 158, 'nsf2_4largeslice9'); _this.largecake9.name = 'l9';
        _this.largecake9.anchor.setTo(0.5);
        _this.largecake9.scale.setTo(0.7, 0.7);

        _this.largecake10 = _this.add.sprite(546, 159, 'nsf2_4largeslice10'); _this.largecake10.name = 'l10';
        _this.largecake10.anchor.setTo(0.5);
        _this.largecake10.scale.setTo(0.7, 0.7);

        _this.largecake8 = _this.add.sprite(557, 174, 'nsf2_4largeslice8'); _this.largecake8.name = 'l8';
        _this.largecake8.anchor.setTo(0.5);
        _this.largecake8.scale.setTo(0.7, 0.7);

        _this.largecake6 = _this.add.sprite(560, 193, 'nsf2_4largeslice6'); _this.largecake6.name = 'l6';
        _this.largecake6.anchor.setTo(0.5);
        _this.largecake6.scale.setTo(0.7, 0.7);

        _this.largecake4 = _this.add.sprite(556, 210, 'nsf2_4largeslice4'); _this.largecake4.name = 'l4';
        _this.largecake4.anchor.setTo(0.5);
        _this.largecake4.scale.setTo(0.7, 0.7);

        _this.largecake3 = _this.add.sprite(540, 218, 'nsf2_4largeslice3'); _this.largecake3.name = 'l3';
        _this.largecake3.anchor.setTo(0.5);
        _this.largecake3.scale.setTo(0.7, 0.7);

        _this.largecake12 = _this.add.sprite(504, 157, 'nsf2_4largeslice12'); _this.largecake12.name = 'l12';
        _this.largecake12.anchor.setTo(0.5);
        _this.largecake12.scale.setTo(0.7, 0.7);

        _this.largecake7 = _this.add.sprite(496, 164, 'nsf2_4largeslice14'); _this.largecake7.name = 'l14';
        _this.largecake7.anchor.setTo(0.5);
        _this.largecake7.scale.setTo(0.7, 0.7);

        _this.largecake1 = _this.add.sprite(492, 184, 'nsf2_4largeslice13'); _this.largecake1.name = 'l13';
        _this.largecake1.anchor.setTo(0.5);
        _this.largecake1.scale.setTo(0.7, 0.7);

        _this.largecake5 = _this.add.sprite(492, 205, 'nsf2_4largeslice15'); _this.largecake5.name = 'l15';
        _this.largecake5.anchor.setTo(0.5);
        _this.largecake5.scale.setTo(0.7, 0.7);

        _this.largecake11 = _this.add.sprite(502, 217, 'nsf2_4largeslice16'); _this.largecake11.name = 'l16';
        _this.largecake11.anchor.setTo(0.5);
        _this.largecake11.scale.setTo(0.7, 0.7);

        _this.largecake2 = _this.add.sprite(520, 218, 'nsf2_4largeslice2'); _this.largecake2.name = 'l2';
        _this.largecake2.anchor.setTo(0.5);
        _this.largecake2.scale.setTo(0.7, 0.7);

        _this.largecake9X = _this.largecake9.x;
        _this.largecake9Y = _this.largecake9.y;
        _this.largecake10X = _this.largecake10.x;
        _this.largecake10Y = _this.largecake10.y;
        _this.largecake8X = _this.largecake8.x;
        _this.largecake8Y = _this.largecake8.y;
        _this.largecake6X = _this.largecake6.x;
        _this.largecake6Y = _this.largecake6.y;
        _this.largecake4X = _this.largecake4.x;
        _this.largecake4Y = _this.largecake4.y;
        _this.largecake3X = _this.largecake3.x;
        _this.largecake3Y = _this.largecake3.y;
        _this.largecake12X = _this.largecake12.x;
        _this.largecake12Y = _this.largecake12.y;
        _this.largecake7X = _this.largecake7.x;
        _this.largecake7Y = _this.largecake7.y;
        _this.largecake1X = _this.largecake1.x;
        _this.largecake1Y = _this.largecake1.y;
        _this.largecake5X = _this.largecake5.x;
        _this.largecake5Y = _this.largecake5.y;
        _this.largecake11X = _this.largecake11.x;
        _this.largecake11Y = _this.largecake11.y;
        _this.largecake2X = _this.largecake2.x;
        _this.largecake2Y = _this.largecake2.y;

        _this.largecake9.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake10.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake8.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake6.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake4.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake3.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake12.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake7.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake1.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake5.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake11.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake2.events.onInputDown.add(_this.checkAns, _this);

        /******************************************************/

        _this.rightmark = _this.add.sprite(895, 310, 'nsf2_4tick');
        _this.rightmark.anchor.setTo(0.5);
        //_this.rightmark.scale.setTo(1.2,1.2);
        _this.rightmark.inputEnabled = true;
        _this.rightmark.input.useHandCursor = true;


        flagGroup1 = _this.add.group();

        flagGroup1.add(_this.girl1);
        flagGroup1.add(_this.cloud1);
        flagGroup1.add(_this.fraction1);

        flagGroup1.add(_this.girl2);
        flagGroup1.add(_this.cloud2);
        flagGroup1.add(_this.fraction2);

        flagGroup1.add(_this.girl3);
        flagGroup1.add(_this.cloud3);
        flagGroup1.add(_this.fraction3);

        flagGroup1.add(_this.numBox);

        flagGroup1.x = -600;
        _this.tween = _this.add.tween(flagGroup1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        flagGroup2 = _this.add.group();
        flagGroup2.add(_this.plate);
        flagGroup2.add(_this.cake);
        flagGroup2.add(_this.hand);

        flagGroup2.x = -600;
        _this.tween = _this.add.tween(flagGroup2);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        cakeGroup = _this.add.group();
        cakeGroup.add(_this.plate2);
        cakeGroup.add(_this.largecake9);
        cakeGroup.add(_this.largecake10);
        cakeGroup.add(_this.largecake8);
        cakeGroup.add(_this.largecake6);
        cakeGroup.add(_this.largecake4);
        cakeGroup.add(_this.largecake3);
        cakeGroup.add(_this.largecake12);
        cakeGroup.add(_this.largecake7);
        cakeGroup.add(_this.largecake1);
        cakeGroup.add(_this.largecake5);
        cakeGroup.add(_this.largecake11);
        cakeGroup.add(_this.largecake2);

        cakeGroup.alpha = 0;

        cakeGroup.x = -600;
        _this.tween = _this.add.tween(cakeGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        smallCakeGroup = _this.add.group();
        smallCakeGroup.add(_this.mcake3);
        smallCakeGroup.add(_this.mcakes4);
        smallCakeGroup.add(_this.mcake23);
        smallCakeGroup.add(_this.mcakes24);
        smallCakeGroup.add(_this.mcake33);
        smallCakeGroup.add(_this.mcakes34);
        smallCakeGroup.add(_this.mcake43);
        smallCakeGroup.add(_this.mcakes44);
        smallCakeGroup.add(_this.mcake53);
        smallCakeGroup.add(_this.mcakes54);
        smallCakeGroup.add(_this.mcake63);
        smallCakeGroup.add(_this.mcakes64);

    },

    gotoNinthQuestion: function () {
        _this.questionNo = 9;
        _this.rightAns = 16;

        if (_this.soundPlayed == false) {
            _this.getVoice();
            _this.soundPlayed = true;
        }

        if (_this.showHand == false) {
            _this.hand = _this.add.sprite(385, 220, 'nsf2_4_hand');
            _this.hand.anchor.setTo(0.5);
            _this.hand.scale.setTo(0.6, 0.6);

            _this.anim1 = this.hand.animations.add('box');
            _this.anim1.play(3, true);
            _this.showHand = true;
        }

        _this.mcake3 = this.add.sprite(80, 350, 'nsf2_4smallslice1'); _this.mcake3.visible = false;
        _this.mcake3.anchor.setTo(0.5);
        _this.mcake3.inputEnabled = false;
        _this.mcake3X = _this.mcake3.x;
        _this.mcake3Y = _this.mcake3.y;

        _this.mcakes4 = this.add.sprite(110, 345, 'nsf2_4smallslice2'); _this.mcakes4.visible = false;
        _this.mcakes4.anchor.setTo(0.5);
        _this.mcakes4.inputEnabled = false;
        _this.mcakes4X = _this.mcakes4.x;
        _this.mcakes4Y = _this.mcakes4.y;

        _this.mcake23 = this.add.sprite(100, 380, 'nsf2_4smallslice3'); _this.mcake23.visible = false;
        _this.mcake23.anchor.setTo(0.5);
        _this.mcake23.inputEnabled = false;
        _this.mcake23X = _this.mcake23.x;
        _this.mcake23Y = _this.mcake23.y;

        _this.mcakes24 = this.add.sprite(135, 372, 'nsf2_4smallslice4'); _this.mcakes24.visible = false;
        _this.mcakes24.anchor.setTo(0.5);
        _this.mcakes24.inputEnabled = false;
        _this.mcakes24X = _this.mcakes24.x;
        _this.mcakes24Y = _this.mcakes24.y;

        _this.mcake33 = this.add.sprite(205, 375, 'nsf2_4smallslice5'); _this.mcake33.visible = false;
        _this.mcake33.anchor.setTo(0.5);
        _this.mcake33.inputEnabled = false;
        _this.mcake33X = _this.mcake33.x;
        _this.mcake33Y = _this.mcake33.y;

        _this.mcakes34 = this.add.sprite(235, 385, 'nsf2_4smallslice6'); _this.mcakes34.visible = false;
        _this.mcakes34.anchor.setTo(0.5);
        _this.mcakes34.inputEnabled = false;
        _this.mcakes34X = _this.mcakes34.x;
        _this.mcakes34Y = _this.mcakes34.y;

        _this.mcake43 = this.add.sprite(270, 370, 'nsf2_4smallslice7'); _this.mcake43.visible = false;
        _this.mcake43.anchor.setTo(0.5);
        _this.mcake43.inputEnabled = false;
        _this.mcake43X = _this.mcake43.x;
        _this.mcake43Y = _this.mcake43.y;

        _this.mcakes44 = this.add.sprite(240, 350, 'nsf2_4smallslice8'); _this.mcakes44.visible = false;
        _this.mcakes44.anchor.setTo(0.5);
        _this.mcakes44.inputEnabled = false;
        _this.mcakes44X = _this.mcakes44.x;
        _this.mcakes44Y = _this.mcakes44.y;

        _this.mcake53 = this.add.sprite(210, 345, 'nsf2_4smallslice9'); _this.mcake53.visible = false;
        _this.mcake53.anchor.setTo(0.5);
        _this.mcake53.inputEnabled = false;
        _this.mcake53X = _this.mcake53.x;
        _this.mcake53Y = _this.mcake53.y;

        _this.mcakes54 = this.add.sprite(365, 365, 'nsf2_4smallslice10'); _this.mcakes54.visible = false;
        _this.mcakes54.anchor.setTo(0.5);
        _this.mcakes54.inputEnabled = false;
        _this.mcakes54X = _this.mcakes54.x;
        _this.mcakes54Y = _this.mcakes54.y;

        _this.mcake63 = this.add.sprite(480, 365, 'nsf2_4smallslice11'); _this.mcake63.visible = false;
        _this.mcake63.anchor.setTo(0.5);
        _this.mcake63.inputEnabled = false;
        _this.mcake63X = _this.mcake63.x;
        _this.mcake63Y = _this.mcake63.y;

        _this.mcakes64 = this.add.sprite(510, 365, 'nsf2_4smallslice12'); _this.mcakes64.visible = false;
        _this.mcakes64.anchor.setTo(0.5);
        _this.mcakes64.inputEnabled = false;
        _this.mcakes64X = _this.mcakes64.x;
        _this.mcakes64Y = _this.mcakes64.y;

        _this.mcake73 = this.add.sprite(610, 362, 'nsf2_4smallslice13'); _this.mcake73.visible = false;
        _this.mcake73.anchor.setTo(0.5);
        _this.mcake73.inputEnabled = false;
        _this.mcake73X = _this.mcake73.x;
        _this.mcake73Y = _this.mcake73.y;

        _this.mcakes74 = this.add.sprite(645, 365, 'nsf2_4smallslice14'); _this.mcakes74.visible = false;
        _this.mcakes74.anchor.setTo(0.5);
        _this.mcakes74.inputEnabled = false;
        _this.mcakes74X = _this.mcakes74.x;
        _this.mcakes74Y = _this.mcakes74.y;

        _this.mcake83 = this.add.sprite(740, 360, 'nsf2_4smallslice15'); _this.mcake83.visible = false;
        _this.mcake83.anchor.setTo(0.5);
        _this.mcake83.inputEnabled = false;
        _this.mcake83X = _this.mcake83.x;
        _this.mcake83Y = _this.mcake83.y;

        _this.mcakes84 = this.add.sprite(775, 365, 'nsf2_4smallslice16'); _this.mcakes84.visible = false;
        _this.mcakes84.anchor.setTo(0.5);
        _this.mcakes84.inputEnabled = false;
        _this.mcakes84X = _this.mcakes84.x;
        _this.mcakes84Y = _this.mcakes84.y;

        /*************************************************************/

        _this.girl1 = _this.add.sprite(60, 468, 'nsf2_4girl');
        _this.girl1.anchor.setTo(0.5);
        _this.girl1.scale.setTo(0.9, 0.9);

        _this.cloud1 = _this.add.sprite(105, 375, 'nsf2_4cloud');
        _this.c1 = 0;
        _this.cloud1.anchor.setTo(0.5);
        _this.cloud1.scale.setTo(0.8, 0.8);
        _this.cloud1.canAdd = 4;

        _this.fraction1 = _this.add.sprite(125, 430, 'nsf2_4fraction');
        _this.fraction1.anchor.setTo(0.5);
        _this.fraction1.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);

        _this.text = this.add.text(0, 15, "16");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction1.addChild(_this.text);
        /***************************************************/

        _this.girl2 = _this.add.sprite(190, 468, 'nsf2_4girl');
        _this.girl2.anchor.setTo(0.5);
        _this.girl2.scale.setTo(0.9, 0.9);

        _this.cloud2 = _this.add.sprite(235, 375, 'nsf2_4cloud');
        _this.c2 = 0;
        _this.cloud2.anchor.setTo(0.5);
        _this.cloud2.scale.setTo(0.8, 0.8);
        _this.cloud2.canAdd = 5;

        _this.fraction2 = _this.add.sprite(255, 430, 'nsf2_4fraction');
        _this.fraction2.anchor.setTo(0.5);
        _this.fraction2.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "5");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);

        _this.text = this.add.text(0, 15, "16");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction2.addChild(_this.text);
        /*********************************************************/

        _this.girl3 = _this.add.sprite(320, 468, 'nsf2_4girl');
        _this.girl3.anchor.setTo(0.5);
        _this.girl3.scale.setTo(0.9, 0.9);

        _this.cloud3 = _this.add.sprite(365, 375, 'nsf2_4cloud');
        _this.cloud3.anchor.setTo(0.5);
        _this.c3 = 0;
        _this.cloud3.scale.setTo(0.8, 0.8);
        _this.cloud3.canAdd = 1;

        _this.fraction3 = _this.add.sprite(385, 430, 'nsf2_4fraction');
        _this.fraction3.anchor.setTo(0.5);
        _this.fraction3.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);

        _this.text = this.add.text(0, 15, "16");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction3.addChild(_this.text);
        /**************************************************************/

        _this.girl4 = _this.add.sprite(450, 468, 'nsf2_4girl');
        _this.girl4.anchor.setTo(0.5);
        _this.girl4.scale.setTo(0.9, 0.9);

        _this.cloud4 = _this.add.sprite(495, 375, 'nsf2_4cloud');
        _this.c4 = 0;
        _this.cloud4.anchor.setTo(0.5);
        _this.cloud4.scale.setTo(0.8, 0.8);
        _this.cloud4.canAdd = 2;

        _this.fraction4 = _this.add.sprite(515, 430, 'nsf2_4fraction');
        _this.fraction4.anchor.setTo(0.5);
        _this.fraction4.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction4.addChild(_this.text);

        _this.text = this.add.text(0, 15, "16");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction4.addChild(_this.text);
        /******************************************************************/

        _this.girl5 = _this.add.sprite(580, 468, 'nsf2_4girl');
        _this.girl5.anchor.setTo(0.5);
        _this.girl5.scale.setTo(0.9, 0.9);

        _this.cloud5 = _this.add.sprite(625, 375, 'nsf2_4cloud');
        _this.c5 = 0;
        _this.cloud5.anchor.setTo(0.5);
        _this.cloud5.scale.setTo(0.8, 0.8);
        _this.cloud5.canAdd = 2;

        _this.fraction5 = _this.add.sprite(645, 430, 'nsf2_4fraction');
        _this.fraction5.anchor.setTo(0.5);
        _this.fraction5.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction5.addChild(_this.text);

        _this.text = this.add.text(0, 15, "16");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction5.addChild(_this.text);
        /******************************************************************/

        _this.girl6 = _this.add.sprite(710, 468, 'nsf2_4girl');
        _this.girl6.anchor.setTo(0.5);
        _this.girl6.scale.setTo(0.9, 0.9);

        _this.cloud6 = _this.add.sprite(755, 375, 'nsf2_4cloud');
        _this.c6 = 0;
        _this.cloud6.anchor.setTo(0.5);
        _this.cloud6.scale.setTo(0.8, 0.8);
        _this.cloud6.canAdd = 2;

        _this.fraction6 = _this.add.sprite(775, 430, 'nsf2_4fraction');
        _this.fraction6.anchor.setTo(0.5);
        _this.fraction6.scale.setTo(1, 1);

        _this.text = this.add.text(0, -8, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction6.addChild(_this.text);

        _this.text = this.add.text(0, 15, "16");
        _this.text.font = "myfont";
        _this.text.fill = "#ffffff";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 20;
        _this.fraction6.addChild(_this.text);
        /******************************************************************/

        _this.numBox = _this.add.sprite(320, 180, 'nsf2_4box');
        _this.numBox.anchor.setTo(0.5);
        _this.numBox.inputEnabled = true;
        _this.numBox.input.useHandCursor = true;
        _this.numBox.events.onInputDown.add(_this.addNumberPad, _this);

        _this.numBox.frame = 1;

        _this.plate = _this.add.sprite(530, 200, 'nsf2_4plate');
        _this.plate.anchor.setTo(0.5);
        _this.plate.scale.setTo(0.7, 0.7);

        _this.cake = _this.add.sprite(530, 185, 'nsf2_4cake');
        _this.cake.anchor.setTo(0.5);
        _this.cake.scale.setTo(1.2, 1.2);
        //_this.cake.inputEnabled = true;
        //  _this.cake.input.useHandCursor = true;
        /***********************************************************/
        _this.plate2 = _this.add.sprite(528, 200, 'nsf2_4plate');
        _this.plate2.anchor.setTo(0.5);
        _this.plate2.scale.setTo(0.7, 0.7);

        _this.largecake9 = _this.add.sprite(524, 154, 'nsf2_4largeslice9'); _this.largecake9.name = 'l9';
        _this.largecake9.anchor.setTo(0.5);
        _this.largecake9.scale.setTo(0.7, 0.7);

        _this.largecake10 = _this.add.sprite(543, 154, 'nsf2_4largeslice10'); _this.largecake10.name = 'l10';
        _this.largecake10.anchor.setTo(0.5);
        _this.largecake10.scale.setTo(0.7, 0.7);

        _this.largecake7 = _this.add.sprite(558, 160, 'nsf2_4largeslice7'); _this.largecake7.name = 'l7';
        _this.largecake7.anchor.setTo(0.5);
        _this.largecake7.scale.setTo(0.7, 0.7);

        _this.largecake8 = _this.add.sprite(567, 170, 'nsf2_4largeslice8'); _this.largecake8.name = 'l8';
        _this.largecake8.anchor.setTo(0.5);
        _this.largecake8.scale.setTo(0.7, 0.7);

        _this.largecake6 = _this.add.sprite(571, 185, 'nsf2_4largeslice6'); _this.largecake6.name = 'l6';
        _this.largecake6.anchor.setTo(0.5);
        _this.largecake6.scale.setTo(0.7, 0.7);

        _this.largecake5 = _this.add.sprite(568, 199, 'nsf2_4largeslice5'); _this.largecake5.name = 'l5';
        _this.largecake5.anchor.setTo(0.5);
        _this.largecake5.scale.setTo(0.7, 0.7);

        _this.largecake4 = _this.add.sprite(560, 210, 'nsf2_4largeslice4'); _this.largecake4.name = 'l4';
        _this.largecake4.anchor.setTo(0.5);
        _this.largecake4.scale.setTo(0.7, 0.7);

        _this.largecake3 = _this.add.sprite(548, 219, 'nsf2_4largeslice3'); _this.largecake3.name = 'l3';
        _this.largecake3.anchor.setTo(0.5);
        _this.largecake3.scale.setTo(0.7, 0.7);

        _this.largecake12 = _this.add.sprite(508, 152, 'nsf2_4largeslice12'); _this.largecake12.name = 'l12';
        _this.largecake12.anchor.setTo(0.5);
        _this.largecake12.scale.setTo(0.7, 0.7);

        _this.largecake11 = _this.add.sprite(495, 157, 'nsf2_4largeslice11'); _this.largecake11.name = 'l11';
        _this.largecake11.anchor.setTo(0.5);
        _this.largecake11.scale.setTo(0.7, 0.7);

        _this.largecake14 = _this.add.sprite(487, 168, 'nsf2_4largeslice14'); _this.largecake14.name = 'l14';
        _this.largecake14.anchor.setTo(0.5);
        _this.largecake14.scale.setTo(0.7, 0.7);

        _this.largecake13 = _this.add.sprite(486, 185, 'nsf2_4largeslice13'); _this.largecake13.name = 'l13';
        _this.largecake13.anchor.setTo(0.5);
        _this.largecake13.scale.setTo(0.7, 0.7);

        _this.largecake15 = _this.add.sprite(487, 201, 'nsf2_4largeslice15'); _this.largecake15.name = 'l15';
        _this.largecake15.anchor.setTo(0.5);
        _this.largecake15.scale.setTo(0.7, 0.7);

        _this.largecake16 = _this.add.sprite(496, 213, 'nsf2_4largeslice16'); _this.largecake16.name = 'l16';
        _this.largecake16.anchor.setTo(0.5);
        _this.largecake16.scale.setTo(0.7, 0.7);

        _this.largecake1 = _this.add.sprite(510, 220, 'nsf2_4largeslice1'); _this.largecake1.name = 'l1';
        _this.largecake1.anchor.setTo(0.5);
        _this.largecake1.scale.setTo(0.7, 0.7);

        _this.largecake2 = _this.add.sprite(530, 220, 'nsf2_4largeslice2'); _this.largecake2.name = 'l2';
        _this.largecake2.anchor.setTo(0.5);
        _this.largecake2.scale.setTo(0.7, 0.7);

        _this.largecake9X = _this.largecake9.x;
        _this.largecake9Y = _this.largecake9.y;
        _this.largecake10X = _this.largecake10.x;
        _this.largecake10Y = _this.largecake10.y;
        _this.largecake7X = _this.largecake7.x;
        _this.largecake7Y = _this.largecake7.y;
        _this.largecake8X = _this.largecake8.x;
        _this.largecake8Y = _this.largecake8.y;
        _this.largecake6X = _this.largecake6.x;
        _this.largecake6Y = _this.largecake6.y;
        _this.largecake5X = _this.largecake5.x;
        _this.largecake5Y = _this.largecake5.y;
        _this.largecake4X = _this.largecake4.x;
        _this.largecake4Y = _this.largecake4.y;
        _this.largecake3X = _this.largecake3.x;
        _this.largecake3Y = _this.largecake3.y;
        _this.largecake12X = _this.largecake12.x;
        _this.largecake12Y = _this.largecake12.y;
        _this.largecake11X = _this.largecake11.x;
        _this.largecake11Y = _this.largecake11.y;
        _this.largecake14X = _this.largecake14.x;
        _this.largecake14Y = _this.largecake14.y;
        _this.largecake13X = _this.largecake13.x;
        _this.largecake13Y = _this.largecake13.y;
        _this.largecake15X = _this.largecake15.x;
        _this.largecake15Y = _this.largecake15.y;
        _this.largecake16X = _this.largecake16.x;
        _this.largecake16Y = _this.largecake16.y;
        _this.largecake1X = _this.largecake1.x;
        _this.largecake1Y = _this.largecake1.y;
        _this.largecake2X = _this.largecake2.x;
        _this.largecake2Y = _this.largecake2.y;

        _this.largecake9.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake10.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake7.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake8.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake6.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake5.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake4.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake3.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake12.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake11.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake14.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake13.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake15.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake16.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake1.events.onInputDown.add(_this.checkAns, _this);
        _this.largecake2.events.onInputDown.add(_this.checkAns, _this);

        /******************************************************/

        _this.rightmark = _this.add.sprite(895, 310, 'nsf2_4tick');
        _this.rightmark.anchor.setTo(0.5);
        //_this.rightmark.scale.setTo(1.2,1.2);
        _this.rightmark.inputEnabled = true;
        _this.rightmark.input.useHandCursor = true;


        flagGroup1 = _this.add.group();

        flagGroup1.add(_this.girl1);
        flagGroup1.add(_this.cloud1);
        flagGroup1.add(_this.fraction1);

        flagGroup1.add(_this.girl2);
        flagGroup1.add(_this.cloud2);
        flagGroup1.add(_this.fraction2);

        flagGroup1.add(_this.girl3);
        flagGroup1.add(_this.cloud3);
        flagGroup1.add(_this.fraction3);

        flagGroup1.add(_this.girl4);
        flagGroup1.add(_this.cloud4);
        flagGroup1.add(_this.fraction4);

        flagGroup1.add(_this.girl5);
        flagGroup1.add(_this.cloud5);
        flagGroup1.add(_this.fraction5);

        flagGroup1.add(_this.girl6);
        flagGroup1.add(_this.cloud6);
        flagGroup1.add(_this.fraction6);

        flagGroup1.add(_this.numBox);

        flagGroup1.x = -600;
        _this.tween = _this.add.tween(flagGroup1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        flagGroup2 = _this.add.group();
        flagGroup2.add(_this.plate);
        flagGroup2.add(_this.cake);
        flagGroup2.add(_this.hand);

        flagGroup2.x = -600;
        _this.tween = _this.add.tween(flagGroup2);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        cakeGroup = _this.add.group();
        cakeGroup.add(_this.plate2);
        cakeGroup.add(_this.largecake9);
        cakeGroup.add(_this.largecake10);
        cakeGroup.add(_this.largecake7);
        cakeGroup.add(_this.largecake8);
        cakeGroup.add(_this.largecake6);
        cakeGroup.add(_this.largecake5);
        cakeGroup.add(_this.largecake4);
        cakeGroup.add(_this.largecake3);
        cakeGroup.add(_this.largecake12);
        cakeGroup.add(_this.largecake11);
        cakeGroup.add(_this.largecake14);
        cakeGroup.add(_this.largecake13);
        cakeGroup.add(_this.largecake15);
        cakeGroup.add(_this.largecake16);
        cakeGroup.add(_this.largecake1);
        cakeGroup.add(_this.largecake2);

        cakeGroup.alpha = 0;

        cakeGroup.x = -600;
        _this.tween = _this.add.tween(cakeGroup);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        smallCakeGroup = _this.add.group();
        smallCakeGroup.add(_this.mcake3);
        smallCakeGroup.add(_this.mcakes4);
        smallCakeGroup.add(_this.mcake23);
        smallCakeGroup.add(_this.mcakes24);
        smallCakeGroup.add(_this.mcake33);
        smallCakeGroup.add(_this.mcakes34);
        smallCakeGroup.add(_this.mcake43);
        smallCakeGroup.add(_this.mcakes44);
        smallCakeGroup.add(_this.mcake53);
        smallCakeGroup.add(_this.mcakes54);
        smallCakeGroup.add(_this.mcake63);
        smallCakeGroup.add(_this.mcakes64);
        smallCakeGroup.add(_this.mcake73);
        smallCakeGroup.add(_this.mcakes74);
        smallCakeGroup.add(_this.mcake83);
        smallCakeGroup.add(_this.mcakes84);
    },

    addNumberPad: function () {

        _this.numBox.inputEnabled = false;
        _this.numBackground = this.add.sprite(480, 505, 'nsf2_4_numBG');
        _this.numBackground.anchor.setTo(0.5);
        _this.numBackground.scale.setTo(1, 0.9);
        _this.numGroup = _this.add.group();
        _this.numGroup.add(_this.numBackground);

        _this.numBoxPressed = true;

        //_this.anim1 = this.numBox.animations.add('box');
        //_this.anim1.play(3,true);

        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();

        _this.x = 80;
        for (var i = 0; i < 10; i++) {
            _this.numbg = _this.numGroup.create(_this.x, 505, 'nsf2_4numberpad');
            _this.numbg.scale.setTo(0.5, 0.5);
            _this.numbg.anchor.setTo(0.5);
            if (i < 9)
                _this.numbg.name = i + 1;
            else
                _this.numbg.name = 0;
            _this.numbg.frame = i;

            _this.numTxt = this.add.text(-1, 0, '');
            //titletext.scale.setTo(1.5);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'myfont';
            _this.numTxt.fontWeight = 'normal';
            _this.numTxt.fontSize = 40;
            //text.fontWeight = 'bold';
            _this.numTxt.fill = '#65B4C3';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);

            _this.numBox.addChild(_this.numTxt);

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked, _this);

            _this.x += 70;
        }

        _this.eraser = _this.numGroup.create(_this.x + 30, 508, 'nsf2_4_erase', 'Symbol 14 copy 5 instance 10000');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.scale.setTo(1.20, 1.20);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;


        _this.rightbtn = _this.numGroup.create(_this.x + 95, 508, 'nsf2_4_rightmark', 'Symbol 14 copy instance 10000');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1.20, 1.20);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;

        _this.eraser.events.onInputDown.add(function () {
            _this.eraserclicked = 1;
            _this.eraser.frame = 1;
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.numTxt.setText("");
            _this.selectedAns = "";

            this.time.events.add(500, function () {
                _this.eraser.frame = 0;
            }, this);
            // _this.toCheckNumberPad = false;
        }, this);

        _this.numGroup.y = 100;

        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y: 0 }, 0, 'Linear', true, 0);

        /* if(_this.displayNopad){
            // //console.log("llllllllllllllllllllllll");
             _this.numGroup.y = 50;
             _this.displayNopad = false;
             _this.tween = _this.add.tween(_this.numGroup);
             _this.tween.to({ y: 0 }, 0, 'Linear', true, 0); 
         }*/

    },

    numClicked: function (target) {
        _this.num = target.name;
        console.log(_this.num);

        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();

        if (_this.selectedAns.length < 2) {
            _this.selectedAns += target.name;
            console.log("third one");
            _this.numTxt.setText(_this.selectedAns);
        }

        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.rightbtn.events.onInputDown.add(function (target) {
            _this.rightbtn.frame = 1;
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();

            //_this.noofAttempts++;
            if (_this.glow)
                _this.glow.destroy();

            this.time.events.add(500, function () {
                _this.rightbtn.frame = 0;
            }, this);

            // //console.log("selected Answer "+ _this.selectedAns);
            if (_this.selectedAns == _this.rightAns) {
                ////console.log("correct");
                _this.eraserclicked = 0;
                flagGroup2.alpha = 0;
                cakeGroup.alpha = 1;
                _this.numBox.frame = 0;

                _this.numGroup.y = 0;
                _this.Maintween = _this.add.tween(_this.numGroup);
                _this.Maintween.to({ y: 100 }, 0, 'Linear', true, 0);

                if (_this.questionNo == 1) {
                    _this.cake7.inputEnabled = true;
                    _this.cake8.inputEnabled = true;
                    _this.cake6.inputEnabled = true;
                    _this.cake5.inputEnabled = true;
                    _this.cake4.inputEnabled = true;
                    _this.cake3.inputEnabled = true;
                    _this.cake1.inputEnabled = true;
                    _this.cake2.inputEnabled = true;

                }
                if (_this.questionNo == 2) {
                    _this.cake6.inputEnabled = true;
                    _this.cake5.inputEnabled = true;
                    _this.cake4.inputEnabled = true;
                    _this.cake3.inputEnabled = true;
                    _this.cake1.inputEnabled = true;
                    _this.cake2.inputEnabled = true;
                }
                if (_this.questionNo == 3) {
                    _this.cake7.inputEnabled = true;
                    _this.cake6.inputEnabled = true;
                    _this.cake5.inputEnabled = true;
                    _this.cake4.inputEnabled = true;
                    _this.cake3.inputEnabled = true;
                    _this.cake1.inputEnabled = true;
                    _this.cake2.inputEnabled = true;
                }
                if (_this.questionNo == 4) {
                    _this.largecake7.inputEnabled = true;
                    _this.largecake8.inputEnabled = true;
                    _this.largecake9.inputEnabled = true;
                    _this.largecake5.inputEnabled = true;
                    _this.largecake1.inputEnabled = true;
                    _this.largecake2.inputEnabled = true;
                    _this.largecake4.inputEnabled = true;
                    _this.largecake3.inputEnabled = true;
                    _this.largecake6.inputEnabled = true;
                }
                if (_this.questionNo == 5) {
                    _this.cake5.inputEnabled = true;
                    _this.cake4.inputEnabled = true;
                    _this.cake3.inputEnabled = true;
                    _this.cake1.inputEnabled = true;
                    _this.cake2.inputEnabled = true;
                }
                if (_this.questionNo == 6) {
                    _this.largecake10.inputEnabled = true;
                    _this.largecake7.inputEnabled = true;
                    _this.largecake8.inputEnabled = true;
                    _this.largecake9.inputEnabled = true;
                    _this.largecake5.inputEnabled = true;
                    _this.largecake1.inputEnabled = true;
                    _this.largecake2.inputEnabled = true;
                    _this.largecake4.inputEnabled = true;
                    _this.largecake3.inputEnabled = true;
                    _this.largecake6.inputEnabled = true;
                }
                if (_this.questionNo == 7) {
                    _this.cake6.inputEnabled = true;
                    _this.cake5.inputEnabled = true;
                    _this.cake4.inputEnabled = true;
                    _this.cake3.inputEnabled = true;
                    _this.cake1.inputEnabled = true;
                    _this.cake2.inputEnabled = true;
                }
                if (_this.questionNo == 8) {
                    _this.largecake12.inputEnabled = true;
                    _this.largecake11.inputEnabled = true;
                    _this.largecake10.inputEnabled = true;
                    _this.largecake7.inputEnabled = true;
                    _this.largecake8.inputEnabled = true;
                    _this.largecake9.inputEnabled = true;
                    _this.largecake5.inputEnabled = true;
                    _this.largecake1.inputEnabled = true;
                    _this.largecake2.inputEnabled = true;
                    _this.largecake4.inputEnabled = true;
                    _this.largecake3.inputEnabled = true;
                    _this.largecake6.inputEnabled = true;
                }
                if (_this.questionNo == 9) {
                    _this.largecake12.inputEnabled = true;
                    _this.largecake11.inputEnabled = true;
                    _this.largecake10.inputEnabled = true;
                    _this.largecake7.inputEnabled = true;
                    _this.largecake8.inputEnabled = true;
                    _this.largecake9.inputEnabled = true;
                    _this.largecake5.inputEnabled = true;
                    _this.largecake1.inputEnabled = true;
                    _this.largecake2.inputEnabled = true;
                    _this.largecake4.inputEnabled = true;
                    _this.largecake3.inputEnabled = true;
                    _this.largecake6.inputEnabled = true;
                    _this.largecake14.inputEnabled = true;
                    _this.largecake13.inputEnabled = true;
                    _this.largecake15.inputEnabled = true;
                    _this.largecake16.inputEnabled = true;
                }
                target.events.onInputDown.removeAll();
            }
            else {
                _this.shake.shake(10, _this.numBox);
                _this.wmusic = _this.add.audio('waudio');
                _this.wmusic.play();

                _this.numTxt.setText("");
                _this.selectedAns = "";
            }
        }, _this);

    },

    checkOverlap: function (spriteA, spriteB) {
        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },

    checkAns: function (target) {
        target.input.enableDrag(true);
        _this.clickSound.play();
        console.log("count" + _this.count2);
        if (_this.questionNo == 1) {
            _this.cake1.events.onDragStop.add(_this.match1, this);
            _this.cake2.events.onDragStop.add(_this.match2, this);
            _this.cake3.events.onDragStop.add(_this.match3, this);
            _this.cake4.events.onDragStop.add(_this.match4, this);
            _this.cake5.events.onDragStop.add(_this.match5, this);
            _this.cake6.events.onDragStop.add(_this.match6, this);
            _this.cake7.events.onDragStop.add(_this.match7, this);
            _this.cake8.events.onDragStop.add(_this.match8, this);

            _this.mcake3.events.onDragStop.add(_this.small1, this);
            _this.mcakes4.events.onDragStop.add(_this.small1, this);
            _this.mcake23.events.onDragStop.add(_this.small2, this);
            _this.mcakes24.events.onDragStop.add(_this.small2, this);
            _this.mcake33.events.onDragStop.add(_this.small3, this);
            _this.mcakes34.events.onDragStop.add(_this.small4, this);
            _this.mcake43.events.onDragStop.add(_this.small4, this);
            _this.mcakes44.events.onDragStop.add(_this.small4, this);

        }
        if (_this.questionNo == 2) {
            _this.cake1.events.onDragStop.add(_this.match1, this);
            _this.cake2.events.onDragStop.add(_this.match2, this);
            _this.cake3.events.onDragStop.add(_this.match3, this);
            _this.cake4.events.onDragStop.add(_this.match4, this);
            _this.cake5.events.onDragStop.add(_this.match5, this);
            _this.cake6.events.onDragStop.add(_this.match6, this);

            _this.mcake3.events.onDragStop.add(_this.small1, this);
            _this.mcakes4.events.onDragStop.add(_this.small1, this);
            _this.mcake23.events.onDragStop.add(_this.small2, this);
            _this.mcakes24.events.onDragStop.add(_this.small2, this);
            _this.mcake33.events.onDragStop.add(_this.small2, this);
            _this.mcakes34.events.onDragStop.add(_this.small3, this);

        }
        if (_this.questionNo == 3) {
            _this.cake1.events.onDragStop.add(_this.match1, this);
            _this.cake2.events.onDragStop.add(_this.match2, this);
            _this.cake3.events.onDragStop.add(_this.match3, this);
            _this.cake4.events.onDragStop.add(_this.match4, this);
            _this.cake5.events.onDragStop.add(_this.match5, this);
            _this.cake6.events.onDragStop.add(_this.match6, this);
            _this.cake7.events.onDragStop.add(_this.match7, this);

            _this.mcake3.events.onDragStop.add(_this.small1, this);
            _this.mcakes4.events.onDragStop.add(_this.small1, this);
            _this.mcake23.events.onDragStop.add(_this.small2, this);
            _this.mcake33.events.onDragStop.add(_this.small3, this);
            _this.mcake43.events.onDragStop.add(_this.small4, this);
            _this.mcake53.events.onDragStop.add(_this.small5, this);
            _this.mcakes54.events.onDragStop.add(_this.small5, this);
        }
        if (_this.questionNo == 4) {
            _this.largecake1.events.onDragStop.add(_this.match1, this);
            _this.largecake2.events.onDragStop.add(_this.match2, this);
            _this.largecake3.events.onDragStop.add(_this.match3, this);
            _this.largecake4.events.onDragStop.add(_this.match4, this);
            _this.largecake5.events.onDragStop.add(_this.match5, this);
            _this.largecake6.events.onDragStop.add(_this.match6, this);
            _this.largecake7.events.onDragStop.add(_this.match7, this);
            _this.largecake8.events.onDragStop.add(_this.match8, this);
            _this.largecake9.events.onDragStop.add(_this.match9, this);

            _this.mcake3.events.onDragStop.add(_this.small1, this);
            _this.mcakes4.events.onDragStop.add(_this.small1, this);
            _this.mcake23.events.onDragStop.add(_this.small2, this);
            _this.mcakes24.events.onDragStop.add(_this.small2, this);
            _this.mcake33.events.onDragStop.add(_this.small2, this);
            _this.mcakes34.events.onDragStop.add(_this.small3, this);
            _this.mcake43.events.onDragStop.add(_this.small4, this);
            _this.mcakes44.events.onDragStop.add(_this.small4, this);
            _this.mcake53.events.onDragStop.add(_this.small4, this);

        }
        if (_this.questionNo == 5) {
            _this.cake1.events.onDragStop.add(_this.match1, this);
            _this.cake2.events.onDragStop.add(_this.match2, this);
            _this.cake3.events.onDragStop.add(_this.match3, this);
            _this.cake4.events.onDragStop.add(_this.match4, this);
            _this.cake5.events.onDragStop.add(_this.match5, this);

            _this.mcake3.events.onDragStop.add(_this.small1, this);
            _this.mcakes4.events.onDragStop.add(_this.small1, this);
            _this.mcake23.events.onDragStop.add(_this.small1, this);
            _this.mcakes24.events.onDragStop.add(_this.small2, this);
            _this.mcake33.events.onDragStop.add(_this.small2, this);

        }
        if (_this.questionNo == 6) {
            _this.largecake1.events.onDragStop.add(_this.match1, this);
            _this.largecake2.events.onDragStop.add(_this.match2, this);
            _this.largecake3.events.onDragStop.add(_this.match3, this);
            _this.largecake4.events.onDragStop.add(_this.match4, this);
            _this.largecake5.events.onDragStop.add(_this.match5, this);
            _this.largecake6.events.onDragStop.add(_this.match6, this);
            _this.largecake7.events.onDragStop.add(_this.match7, this);
            _this.largecake8.events.onDragStop.add(_this.match8, this);
            _this.largecake9.events.onDragStop.add(_this.match9, this);
            _this.largecake10.events.onDragStop.add(_this.match10, this);

            _this.mcake3.events.onDragStop.add(_this.small1, this);
            _this.mcakes4.events.onDragStop.add(_this.small1, this);
            _this.mcake23.events.onDragStop.add(_this.small2, this);
            _this.mcakes24.events.onDragStop.add(_this.small3, this);
            _this.mcake33.events.onDragStop.add(_this.small3, this);
            _this.mcakes34.events.onDragStop.add(_this.small4, this);
            _this.mcake43.events.onDragStop.add(_this.small4, this);
            _this.mcakes44.events.onDragStop.add(_this.small4, this);
            _this.mcake53.events.onDragStop.add(_this.small4, this);
            _this.mcakes54.events.onDragStop.add(_this.small5, this);
        }
        if (_this.questionNo == 7) {
            _this.cake1.events.onDragStop.add(_this.match1, this);
            _this.cake2.events.onDragStop.add(_this.match2, this);
            _this.cake3.events.onDragStop.add(_this.match3, this);
            _this.cake4.events.onDragStop.add(_this.match4, this);
            _this.cake5.events.onDragStop.add(_this.match5, this);
            _this.cake6.events.onDragStop.add(_this.match6, this);

            _this.mcake3.events.onDragStop.add(_this.small1, this);
            _this.mcakes4.events.onDragStop.add(_this.small2, this);
            _this.mcake23.events.onDragStop.add(_this.small2, this);
            _this.mcakes24.events.onDragStop.add(_this.small2, this);
            _this.mcake33.events.onDragStop.add(_this.small3, this);
            _this.mcakes34.events.onDragStop.add(_this.small4, this);
        }
        if (_this.questionNo == 8) {
            _this.largecake1.events.onDragStop.add(_this.match1, this);
            _this.largecake2.events.onDragStop.add(_this.match2, this);
            _this.largecake3.events.onDragStop.add(_this.match3, this);
            _this.largecake4.events.onDragStop.add(_this.match4, this);
            _this.largecake5.events.onDragStop.add(_this.match5, this);
            _this.largecake6.events.onDragStop.add(_this.match6, this);
            _this.largecake7.events.onDragStop.add(_this.match7, this);
            _this.largecake8.events.onDragStop.add(_this.match8, this);
            _this.largecake9.events.onDragStop.add(_this.match9, this);
            _this.largecake10.events.onDragStop.add(_this.match10, this);
            _this.largecake11.events.onDragStop.add(_this.match11, this);
            _this.largecake12.events.onDragStop.add(_this.match12, this);

            _this.mcake3.events.onDragStop.add(_this.small1, this);
            _this.mcakes4.events.onDragStop.add(_this.small1, this);
            _this.mcake23.events.onDragStop.add(_this.small1, this);
            _this.mcakes24.events.onDragStop.add(_this.small1, this);
            _this.mcake33.events.onDragStop.add(_this.small2, this);
            _this.mcakes34.events.onDragStop.add(_this.small2, this);
            _this.mcake43.events.onDragStop.add(_this.small2, this);
            _this.mcakes44.events.onDragStop.add(_this.small2, this);
            _this.mcake53.events.onDragStop.add(_this.small2, this);
            _this.mcakes54.events.onDragStop.add(_this.small3, this);
            _this.mcake63.events.onDragStop.add(_this.small3, this);
            _this.mcakes64.events.onDragStop.add(_this.small3, this);
        }
        if (_this.questionNo == 9) {
            _this.largecake1.events.onDragStop.add(_this.match1, this);
            _this.largecake2.events.onDragStop.add(_this.match2, this);
            _this.largecake3.events.onDragStop.add(_this.match3, this);
            _this.largecake4.events.onDragStop.add(_this.match4, this);
            _this.largecake5.events.onDragStop.add(_this.match5, this);
            _this.largecake6.events.onDragStop.add(_this.match6, this);
            _this.largecake7.events.onDragStop.add(_this.match7, this);
            _this.largecake8.events.onDragStop.add(_this.match8, this);
            _this.largecake9.events.onDragStop.add(_this.match9, this);
            _this.largecake10.events.onDragStop.add(_this.match10, this);
            _this.largecake11.events.onDragStop.add(_this.match11, this);
            _this.largecake12.events.onDragStop.add(_this.match12, this);
            _this.largecake13.events.onDragStop.add(_this.match13, this);
            _this.largecake14.events.onDragStop.add(_this.match14, this);
            _this.largecake15.events.onDragStop.add(_this.match15, this);
            _this.largecake16.events.onDragStop.add(_this.match16, this);

            _this.mcake3.events.onDragStop.add(_this.small1, this);
            _this.mcakes4.events.onDragStop.add(_this.small1, this);
            _this.mcake23.events.onDragStop.add(_this.small1, this);
            _this.mcakes24.events.onDragStop.add(_this.small1, this);
            _this.mcake33.events.onDragStop.add(_this.small2, this);
            _this.mcakes34.events.onDragStop.add(_this.small2, this);
            _this.mcake43.events.onDragStop.add(_this.small2, this);
            _this.mcakes44.events.onDragStop.add(_this.small2, this);
            _this.mcake53.events.onDragStop.add(_this.small2, this);
            _this.mcakes54.events.onDragStop.add(_this.small3, this);
            _this.mcake63.events.onDragStop.add(_this.small4, this);
            _this.mcakes64.events.onDragStop.add(_this.small4, this);
            _this.mcake73.events.onDragStop.add(_this.small5, this);
            _this.mcakes74.events.onDragStop.add(_this.small5, this);
            _this.mcake83.events.onDragStop.add(_this.small6, this);
            _this.mcakes84.events.onDragStop.add(_this.small6, this);
        }
    },
    /*********************smallcake drag function***************/
    small1: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 1) {
            //alert("here");
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 8; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud1.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                else {
                    if (_this.mcake23.visible == false) {
                        _this.mcake23.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.input.useHandCursor = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else {
                    target.x = _this.mcake3X;
                    target.y = _this.mcake3Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        //_this.count2+=1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud1.canAdd++;
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.input.useHandCursor = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
            }
            _this.mcake3.x = _this.mcake3X;
            _this.mcake3.y = _this.mcake3Y;
            _this.mcakes4.x = _this.mcakes4X;
            _this.mcakes4.y = _this.mcakes4Y;
        }
        if (_this.questionNo == 2) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 6; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud1.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.input.useHandCursor = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.input.useHandCursor = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud1.canAdd++;
                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.input.useHandCursor = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else {
                    target.x = _this.mcake3X;
                    target.y = _this.mcake3Y;
                }
            }
            _this.mcake3.x = _this.mcake3X;
            _this.mcake3.y = _this.mcake3Y;
            _this.mcakes4.x = _this.mcakes4X;
            _this.mcakes4.y = _this.mcakes4Y;
        }
        if (_this.questionNo == 3) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 7; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud1.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else {
                    target.x = _this.mcake3X;
                    target.y = _this.mcake3Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.input.useHandCursor = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else {
                    target.x = _this.mcake3X;
                    target.y = _this.mcake3Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else {
                    target.x = _this.mcake3X;
                    target.y = _this.mcake3Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud5, target)) {
                if (_this.mcake53.visible == true) {
                    if (_this.mcakes54.visible == false) {
                        _this.mcakes54.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.input.useHandCursor = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                else {
                    if (_this.mcake53.visible == false) {
                        _this.mcake53.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
            }
            _this.mcake3.x = _this.mcake3X;
            _this.mcake3.y = _this.mcake3Y;
            _this.mcakes4.x = _this.mcakes4X;
            _this.mcakes4.y = _this.mcakes4Y;
        }
        if (_this.questionNo == 4) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 9; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud1.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.input.useHandCursor = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.input.useHandCursor = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud1.canAdd++;
                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.input.useHandCursor = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else {
                    target.x = _this.mcake3X;
                    target.y = _this.mcake3Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcake43.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.input.useHandCursor = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud1.canAdd++;
                }

                else {
                    if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.input.useHandCursor = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
            }
            _this.mcake3.x = _this.mcake3X;
            _this.mcake3.y = _this.mcake3Y;
            _this.mcakes4.x = _this.mcakes4X;
            _this.mcakes4.y = _this.mcakes4Y;
        }
        if (_this.questionNo == 5) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 5; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud1.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.input.useHandCursor = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
            }

            _this.mcake3.x = _this.mcake3X;
            _this.mcake3.y = _this.mcake3Y;
            _this.mcakes4.x = _this.mcakes4X;
            _this.mcakes4.y = _this.mcakes4Y;
            _this.mcake23.x = _this.mcake23X;
            _this.mcake23.y = _this.mcake23Y;
        }
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 10; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud1.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else {
                    target.x = _this.mcake3X;
                    target.y = _this.mcake3Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.input.useHandCursor = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud3.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud3.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.input.useHandCursor = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.input.useHandCursor = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud1.canAdd++;
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.input.useHandCursor = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target)) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.input.useHandCursor = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud5.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else {
                    target.x = _this.mcake3X;
                    target.y = _this.mcake3Y;
                }
            }
            _this.mcake3.x = _this.mcake3X;
            _this.mcake3.y = _this.mcake3Y;
            _this.mcakes4.x = _this.mcakes4X;
            _this.mcakes4.y = _this.mcakes4Y;
        }
        if (_this.questionNo == 7) {
            //alert("here");
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 6; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud1.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcakes4.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud1.canAdd++;
                }

                else {
                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;

            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.input.useHandCursor = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else {
                    target.x = _this.mcake3X;
                    target.y = _this.mcake3Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.input.useHandCursor = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else {
                    target.x = _this.mcake3X;
                    target.y = _this.mcake3Y;
                }
            }
            _this.mcake3.x = _this.mcake3X;
            _this.mcake3.y = _this.mcake3Y;
        }
        if (_this.questionNo == 8) {
            //alert("here");
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 12; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud1.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.input.useHandCursor = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.input.useHandCursor = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.input.useHandCursor = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud1.canAdd++;
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.input.useHandCursor = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.input.useHandCursor = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
                _this.mcake23.x = _this.mcake23X;
                _this.mcake23.y = _this.mcake23Y;
                _this.mcakes24.x = _this.mcakes24X;
                _this.mcakes24.y = _this.mcakes24Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes54.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.visible = true;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.input.useHandCursor = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud3.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                    else if (_this.mcake63.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.visible = true;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.input.useHandCursor = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake63.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake63.visible = true;
                    _this.mcake63.inputEnabled = true;
                    _this.mcake63.input.useHandCursor = true;
                    _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud1.canAdd++;
                }

                else {
                    if (_this.mcakes54.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.visible = true;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.input.useHandCursor = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud3.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
                _this.mcake23.x = _this.mcake23X;
                _this.mcake23.y = _this.mcake23Y;
            }
            _this.mcake3.x = _this.mcake3X;
            _this.mcake3.y = _this.mcake3Y;
            _this.mcakes4.x = _this.mcakes4X;
            _this.mcakes4.y = _this.mcakes4Y;
            _this.mcake23.x = _this.mcake23X;
            _this.mcake23.y = _this.mcake23Y;
            _this.mcakes24.x = _this.mcakes24X;
            _this.mcakes24.y = _this.mcakes24Y;
        }
        if (_this.questionNo == 9) {
            //alert("here");
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 16; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud1.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.input.useHandCursor = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.input.useHandCursor = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.input.useHandCursor = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud1.canAdd++;
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.input.useHandCursor = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.input.useHandCursor = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
                _this.mcake23.x = _this.mcake23X;
                _this.mcake23.y = _this.mcake23Y;
                _this.mcakes24.x = _this.mcakes24X;
                _this.mcakes24.y = _this.mcakes24Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.input.useHandCursor = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud1.canAdd++;
                }
                else {
                    target.x = _this.mcake3X;
                    target.y = _this.mcake3Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.input.useHandCursor = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.input.useHandCursor = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target)) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.input.useHandCursor = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.input.useHandCursor = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target)) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.input.useHandCursor = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud6.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.input.useHandCursor = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud6.canAdd--;
                        _this.cloud1.canAdd++;
                    }
                }
                target.x = _this.mcake3X;
                target.y = _this.mcake3Y;
                _this.mcakes4.x = _this.mcakes4X;
                _this.mcakes4.y = _this.mcakes4Y;
            }

            _this.mcake3.x = _this.mcake3X;
            _this.mcake3.y = _this.mcake3Y;
            _this.mcakes4.x = _this.mcakes4X;
            _this.mcakes4.y = _this.mcakes4Y;
            _this.mcake23.x = _this.mcake23X;
            _this.mcake23.y = _this.mcake23Y;
            _this.mcakes24.x = _this.mcakes24X;
            _this.mcakes24.y = _this.mcakes24Y;
        }

    },
    small2: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 1) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 8; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud2.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {

                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                else {

                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }

                target.x = _this.mcake23X;
                target.y = _this.mcake23Y;
                _this.mcakes24.x = _this.mcakes24X;
                _this.mcakes24.y = _this.mcakes24Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.input.useHandCursor = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud2.canAdd++;
                }
                else {
                    target.x = _this.mcake23X;
                    target.y = _this.mcake23Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        //_this.count2+=1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud2.canAdd++;
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.input.useHandCursor = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake23X;
                target.y = _this.mcake23Y;
                _this.mcakes24.x = _this.mcakes24X;
                _this.mcakes24.y = _this.mcakes24Y;
            }

            _this.mcake23.x = _this.mcake23X;
            _this.mcake23.y = _this.mcake23Y;
            _this.mcakes24.x = _this.mcakes24X;
            _this.mcakes24.y = _this.mcakes24Y;
        }
        if (_this.questionNo == 2) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 6; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud2.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake23X;
                target.y = _this.mcake23Y;
                _this.mcakes24.x = _this.mcakes24X;
                _this.mcakes24.y = _this.mcakes24Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.input.useHandCursor = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud2.canAdd++;
                }
                else {
                    target.x = _this.mcake23X;
                    target.y = _this.mcake23Y;
                }
            }
            _this.mcake23.x = _this.mcake23X;
            _this.mcake23.y = _this.mcake23Y;
            _this.mcakes24.x = _this.mcakes24X;
            _this.mcakes24.y = _this.mcakes24Y;
            _this.mcake33.x = _this.mcake33X;
            _this.mcake33.y = _this.mcake33Y;
        }
        if (_this.questionNo == 3) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 7; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud2.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake23X;
                target.y = _this.mcake23Y;

            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.input.useHandCursor = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud2.canAdd++;
                }
                else {
                    target.x = _this.mcake23X;
                    target.y = _this.mcake23Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud2.canAdd++;
                }
                else {
                    target.x = _this.mcake23X;
                    target.y = _this.mcake23Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud5, target)) {
                if (_this.mcake53.visible == true) {
                    if (_this.mcakes54.visible == false) {
                        _this.mcakes54.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.input.useHandCursor = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                else {
                    if (_this.mcake53.visible == false) {
                        _this.mcake53.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake23X;
                target.y = _this.mcake23Y;

            }
            _this.mcake23.x = _this.mcake23X;
            _this.mcake23.y = _this.mcake23Y;

        }
        if (_this.questionNo == 4) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 9; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud2.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake23X;
                target.y = _this.mcake23Y;
                _this.mcakes24.x = _this.mcakes24X;
                _this.mcakes24.y = _this.mcakes24Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.input.useHandCursor = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud2.canAdd++;
                }
                else {
                    target.x = _this.mcake23X;
                    target.y = _this.mcake23Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcake43.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.input.useHandCursor = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud2.canAdd++;
                }

                else {
                    if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.input.useHandCursor = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake23X;
                target.y = _this.mcake23Y;
                _this.mcakes24.x = _this.mcakes24X;
                _this.mcakes24.y = _this.mcakes24Y;
                _this.mcake33.x = _this.mcake33X;
                _this.mcake33.y = _this.mcake33Y;
            }
            _this.mcake23.x = _this.mcake23X;
            _this.mcake23.y = _this.mcake23Y;
            _this.mcakes24.x = _this.mcakes24X;
            _this.mcakes24.y = _this.mcakes24Y;
            _this.mcake33.x = _this.mcake33X;
            _this.mcake33.y = _this.mcake33Y;
        }
        if (_this.questionNo == 5) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 5; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud2.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.input.useHandCursor = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud2.canAdd++;
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }

                target.x = _this.mcakes24X;
                target.y = _this.mcakes24Y;
                _this.mcake33.x = _this.mcake33X;
                _this.mcake33.y = _this.mcake33Y;
            }
            _this.mcakes24.x = _this.mcakes24X;
            _this.mcakes24.y = _this.mcakes24Y;
            _this.mcake33.x = _this.mcake33X;
            _this.mcake33.y = _this.mcake33Y;

        }
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 10; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud2.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake23X;
                target.y = _this.mcake23Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.input.useHandCursor = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud3.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud3.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake23X;
                target.y = _this.mcake23Y;

            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.input.useHandCursor = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.input.useHandCursor = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud2.canAdd++;
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud2.canAdd++;
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.input.useHandCursor = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake23X;
                target.y = _this.mcake23Y;

            }
            else if (_this.checkOverlap(_this.cloud5, target)) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.input.useHandCursor = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud5.canAdd--;
                    _this.cloud2.canAdd++;
                }
                else {
                    target.x = _this.mcake23X;
                    target.y = _this.mcake23Y;
                }
            }
            _this.mcake23.x = _this.mcake23X;
            _this.mcake23.y = _this.mcake23Y;

        }
        if (_this.questionNo == 7) {
            //alert("here");
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 6; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud2.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake3.visible = true;
                    _this.mcake3.inputEnabled = true;
                    _this.mcake3.input.useHandCursor = true;
                    _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud2.canAdd++;
                }
                else {
                    target.x = _this.mcakes4X;
                    target.y = _this.mcakes4Y;
                }

            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.input.useHandCursor = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud2.canAdd++;
                }
                else {
                    target.x = _this.mcakes4X;
                    target.y = _this.mcakes4Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.input.useHandCursor = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud2.canAdd++;
                }
                else {
                    target.x = _this.mcakes4X;
                    target.y = _this.mcakes4Y;
                }
            }
            _this.mcakes4.x = _this.mcakes4X;
            _this.mcakes4.y = _this.mcakes4Y;
            _this.mcake23.x = _this.mcake23X;
            _this.mcake23.y = _this.mcake23Y;
            _this.mcakes24.x = _this.mcakes24X;
            _this.mcakes24.y = _this.mcakes24Y;
        }
        if (_this.questionNo == 8) {
            //alert("here");
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 12; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud2.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud2.canAdd++;
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.input.useHandCursor = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud2.canAdd++;
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake33X;
                target.y = _this.mcake33Y;
                _this.mcakes34.x = _this.mcakes34X;
                _this.mcakes34.y = _this.mcakes34Y;
                _this.mcake43.x = _this.mcake43X;
                _this.mcake43.y = _this.mcake43Y;
                _this.mcakes44.x = _this.mcakes44X;
                _this.mcakes44.y = _this.mcakes44Y;

            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes54.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.visible = true;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.input.useHandCursor = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud3.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                    else if (_this.mcake63.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.visible = true;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.input.useHandCursor = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake63.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake63.visible = true;
                    _this.mcake63.inputEnabled = true;
                    _this.mcake63.input.useHandCursor = true;
                    _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud2.canAdd++;
                }

                else {
                    if (_this.mcakes54.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.visible = true;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.input.useHandCursor = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud3.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake33X;
                target.y = _this.mcake33Y;
                _this.mcakes34.x = _this.mcakes34X;
                _this.mcakes34.y = _this.mcakes34Y;
                _this.mcake43.x = _this.mcake43X;
                _this.mcake43.y = _this.mcake43Y;
            }
            _this.mcake33.x = _this.mcake33X;
            _this.mcake33.y = _this.mcake33Y;
            _this.mcakes34.x = _this.mcakes34X;
            _this.mcakes34.y = _this.mcakes34Y;
            _this.mcake43.x = _this.mcake43X;
            _this.mcake43.y = _this.mcake43Y;
            _this.mcakes44.x = _this.mcakes44X;
            _this.mcakes44.y = _this.mcakes44Y;
            _this.mcake53.x = _this.mcake53X;
            _this.mcake53.y = _this.mcake53Y;
        }
        if (_this.questionNo == 9) {
            //alert("here");
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 16; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud2.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud2.canAdd++;
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.input.useHandCursor = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud2.canAdd++;
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake33X;
                target.y = _this.mcake33Y;
                _this.mcakes34.x = _this.mcakes34X;
                _this.mcakes34.y = _this.mcakes34Y;
                _this.mcake43.x = _this.mcake43X;
                _this.mcake43.y = _this.mcake43Y;
                _this.mcakes44.x = _this.mcakes44X;
                _this.mcakes44.y = _this.mcakes44Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.input.useHandCursor = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud2.canAdd++;
                }
                else {
                    target.x = _this.mcake33X;
                    target.y = _this.mcake33Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.input.useHandCursor = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.input.useHandCursor = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake33X;
                target.y = _this.mcake33Y;
                _this.mcakes34.x = _this.mcakes34X;
                _this.mcakes34.y = _this.mcakes34Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target)) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.input.useHandCursor = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.input.useHandCursor = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake33X;
                target.y = _this.mcake33Y;
                _this.mcakes34.x = _this.mcakes34X;
                _this.mcakes34.y = _this.mcakes34Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target)) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.input.useHandCursor = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud6.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.input.useHandCursor = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud6.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcake33X;
                target.y = _this.mcake33Y;
                _this.mcakes4.x = _this.mcakes34X;
                _this.mcakes4.y = _this.mcakes34Y;
            }

            _this.mcake33.x = _this.mcake33X;
            _this.mcake33.y = _this.mcake33Y;
            _this.mcakes34.x = _this.mcakes34X;
            _this.mcakes34.y = _this.mcakes34Y;
            _this.mcake43.x = _this.mcake43X;
            _this.mcake43.y = _this.mcake43Y;
            _this.mcakes44.x = _this.mcakes44X;
            _this.mcakes44.y = _this.mcakes44Y;
            _this.mcake53.x = _this.mcake53X;
            _this.mcake53.y = _this.mcake53Y;
        }

    },
    small3: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 1) {
            if (_this.checkOverlap(_this.plate, target)) {
                //alert("here");
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 8; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud3.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                else {
                    if (_this.mcake23.visible == false) {
                        _this.mcake23.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcake33X;
                target.y = _this.mcake33Y;

            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {

                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                else {

                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }

                target.x = _this.mcake33X;
                target.y = _this.mcake33Y;

            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        //_this.count2+=1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud3.canAdd++;
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.input.useHandCursor = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcake33X;
                target.y = _this.mcake33Y;

            }
            target.x = _this.mcake33X;
            target.y = _this.mcake33Y;
        }
        if (_this.questionNo == 2) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 6; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud3.canAdd++;

            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.input.useHandCursor = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.input.useHandCursor = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud3.canAdd++;
                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcakes34X;
                target.y = _this.mcakes34Y;

            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcakes34X;
                target.y = _this.mcakes34Y;

            }
            _this.mcakes34.x = _this.mcakes34X;
            _this.mcakes34.y = _this.mcakes34Y;
        }
        if (_this.questionNo == 3) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 7; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud3.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcake33X;
                target.y = _this.mcake33Y;

            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud3.canAdd++;
                }
                else {
                    target.x = _this.mcake33X;
                    target.y = _this.mcake33Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud3.canAdd++;
                }
                else {
                    target.x = _this.mcake33X;
                    target.y = _this.mcake33Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud5, target)) {
                if (_this.mcake53.visible == true) {
                    if (_this.mcakes54.visible == false) {
                        _this.mcakes54.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.input.useHandCursor = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                else {
                    if (_this.mcake53.visible == false) {
                        _this.mcake53.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcake33X;
                target.y = _this.mcake33Y;

            }
            _this.mcake33.x = _this.mcake33X;
            _this.mcake33.y = _this.mcake33Y;

        }
        if (_this.questionNo == 4) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 9; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud3.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.input.useHandCursor = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.input.useHandCursor = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud3.canAdd++;
                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcakes34X;
                target.y = _this.mcakes34Y;

            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcakes34X;
                target.y = _this.mcakes34Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcake43.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.input.useHandCursor = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud3.canAdd++;
                }

                else {
                    if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.input.useHandCursor = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcakes34X;
                target.y = _this.mcakes34Y;
            }
            _this.mcakes34.x = _this.mcakes34X;
            _this.mcakes34.y = _this.mcakes34Y;
        }
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 10; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud3.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcakes24X;
                target.y = _this.mcakes24Y;
                _this.mcake33.x = _this.mcake33X;
                _this.mcake33.y = _this.mcake33Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud3.canAdd++;
                }
                else {
                    target.x = _this.mcakes24X;
                    target.y = _this.mcakes24Y;
                }

            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.input.useHandCursor = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.input.useHandCursor = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud3.canAdd++;
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud3.canAdd++;
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.input.useHandCursor = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcakes24X;
                target.y = _this.mcakes24Y;
                _this.mcake33.x = _this.mcake33X;
                _this.mcake33.y = _this.mcake33Y;

            }
            else if (_this.checkOverlap(_this.cloud5, target)) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.input.useHandCursor = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud5.canAdd--;
                    _this.cloud3.canAdd++;
                }
                else {
                    target.x = _this.mcakes24X;
                    target.y = _this.mcakes24Y;

                }
            }
            _this.mcakes24.x = _this.mcakes24X;
            _this.mcakes24.y = _this.mcakes24Y;
            _this.mcake33.x = _this.mcake33X;
            _this.mcake33.y = _this.mcake33Y;

        }
        if (_this.questionNo == 7) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 6; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud3.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake3.visible = true;
                    _this.mcake3.inputEnabled = true;
                    _this.mcake3.input.useHandCursor = true;
                    _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud3.canAdd++;
                }
                else {
                    target.x = _this.mcake33X;
                    target.y = _this.mcake33Y;
                }

            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcakes4.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud3.canAdd++;
                }

                else {
                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcake33X;
                target.y = _this.mcake33Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.input.useHandCursor = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud3.canAdd++;
                }
                else {
                    target.x = _this.mcake33X;
                    target.y = _this.mcake33Y;
                }
            }
            _this.mcake33.x = _this.mcake33X;
            _this.mcake33.y = _this.mcake33Y;
        }
        if (_this.questionNo == 8) {
            //alert("here");
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 12; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud3.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud2.canAdd++;
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.input.useHandCursor = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud2.canAdd++;
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud2.canAdd++;
                    }
                }
                target.x = _this.mcakes54X;
                target.y = _this.mcakes54Y;
                _this.mcake63.x = _this.mcake63X;
                _this.mcake63.y = _this.mcake63Y;
                _this.mcakes64.x = _this.mcakes64X;
                _this.mcakes64.y = _this.mcakes64Y;

            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.input.useHandCursor = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.input.useHandCursor = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.input.useHandCursor = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud3.canAdd++;
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud3.canAdd++;
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.input.useHandCursor = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud3.canAdd++;
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.input.useHandCursor = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcakes54X;
                target.y = _this.mcakes54Y;
                _this.mcake63.x = _this.mcake63X;
                _this.mcake63.y = _this.mcake63Y;
                _this.mcakes64.x = _this.mcakes64X;
                _this.mcakes64.y = _this.mcakes64Y;
            }
            _this.mcakes54.x = _this.mcakes54X;
            _this.mcakes54.y = _this.mcakes54Y;
            _this.mcake63.x = _this.mcake63X;
            _this.mcake63.y = _this.mcake63Y;
            _this.mcakes64.x = _this.mcakes64X;
            _this.mcakes64.y = _this.mcakes64Y;
        }
        if (_this.questionNo == 9) {
            //alert("here");
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 16; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud3.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud3.canAdd++;
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.input.useHandCursor = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud3.canAdd++;
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcakes54X;
                target.y = _this.mcakes54Y;

            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.input.useHandCursor = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.input.useHandCursor = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.input.useHandCursor = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud3.canAdd++;
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud3.canAdd++;
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.input.useHandCursor = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud3.canAdd++;
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.input.useHandCursor = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcakes54X;
                target.y = _this.mcakes54Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.input.useHandCursor = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.input.useHandCursor = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcakes54X;
                target.y = _this.mcakes54Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target)) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.input.useHandCursor = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.input.useHandCursor = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcakes54X;
                target.y = _this.mcakes54Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target)) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.input.useHandCursor = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud6.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.input.useHandCursor = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud6.canAdd--;
                        _this.cloud3.canAdd++;
                    }
                }
                target.x = _this.mcakes54X;
                target.y = _this.mcakes54Y;
            }

            _this.mcakes54.x = _this.mcakes54X;
            _this.mcakes54.y = _this.mcakes54Y;
        }
    },
    small4: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 1) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 8; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                //alert(_this.cloud4.canAdd);
                _this.cloud4.canAdd++;
                //alert(_this.cloud4.canAdd);
            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                else {
                    if (_this.mcake23.visible == false) {
                        _this.mcake23.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                target.x = _this.mcakes34X;
                target.y = _this.mcakes34Y;
                _this.mcake43.x = _this.mcake43X;
                _this.mcake43.y = _this.mcake43Y;

            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.input.useHandCursor = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud4.canAdd++;
                }
                else {
                    target.x = _this.mcakes34X;
                    target.y = _this.mcakes34Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {

                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                else {

                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }

                target.x = _this.mcakes34X;
                target.y = _this.mcakes34Y;
                _this.mcake43.x = _this.mcake43X;
                _this.mcake43.y = _this.mcake43Y;
            }

            target.x = _this.mcakes34X;
            target.y = _this.mcakes34Y;
            _this.mcake43.x = _this.mcake43X;
            _this.mcake43.y = _this.mcake43Y;
            _this.mcakes44.x = _this.mcakes44X;
            _this.mcakes44.y = _this.mcakes44Y;
        }
        if (_this.questionNo == 3) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 7; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud4.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                target.x = _this.mcake43X;
                target.y = _this.mcake43Y;

            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud4.canAdd++;
                }
                else {
                    target.x = _this.mcake43X;
                    target.y = _this.mcake43Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.input.useHandCursor = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud4.canAdd++;
                }
                else {
                    target.x = _this.mcake43X;
                    target.y = _this.mcake43Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud5, target)) {
                if (_this.mcake53.visible == true) {
                    if (_this.mcakes54.visible == false) {
                        _this.mcakes54.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.input.useHandCursor = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                else {
                    if (_this.mcake53.visible == false) {
                        _this.mcake53.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                target.x = _this.mcake43X;
                target.y = _this.mcake43Y;

            }
            _this.mcake43.x = _this.mcake43X;
            _this.mcake43.y = _this.mcake43Y;

        }
        if (_this.questionNo == 4) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 9; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud4.canAdd++;

            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                target.x = _this.mcake43X;
                target.y = _this.mcake43Y;
                _this.mcakes44.x = _this.mcakes44X;
                _this.mcakes44.y = _this.mcakes44Y;

            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.input.useHandCursor = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.input.useHandCursor = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud4.canAdd++;
                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                target.x = _this.mcake43X;
                target.y = _this.mcake43Y;
                _this.mcakes44.x = _this.mcakes44X;
                _this.mcakes44.y = _this.mcakes44Y;
                _this.mcake53.x = _this.mcake53X;
                _this.mcake53.y = _this.mcake53Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.input.useHandCursor = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud4.canAdd++;
                }
                else {
                    target.x = _this.mcake43X;
                    target.y = _this.mcake43Y;
                }
            }
            _this.mcake43.x = _this.mcake43X;
            _this.mcake43.y = _this.mcake43Y;
            _this.mcakes44.x = _this.mcakes44X;
            _this.mcakes44.y = _this.mcakes44Y;
            _this.mcake53.x = _this.mcake53X;
            _this.mcake53.y = _this.mcake53Y;
        }
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 10; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud4.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                target.x = _this.mcakes34X;
                target.y = _this.mcakes34Y;
                _this.mcake43.x = _this.mcake43X;
                _this.mcake43.y = _this.mcake43Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud4.canAdd++;
                }
                else {
                    target.x = _this.mcakes34X;
                    target.y = _this.mcakes34Y;
                }

            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.input.useHandCursor = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud3.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud3.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                target.x = _this.mcakes34X;
                target.y = _this.mcakes34Y;
                _this.mcake43.x = _this.mcake43X;
                _this.mcake43.y = _this.mcake43Y;

            }
            else if (_this.checkOverlap(_this.cloud5, target)) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.input.useHandCursor = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud5.canAdd--;
                    _this.cloud4.canAdd++;
                }
                else {
                    target.x = _this.mcakes34X;
                    target.y = _this.mcakes34Y;
                }
            }
            _this.mcakes34.x = _this.mcakes34X;
            _this.mcakes34.y = _this.mcakes34Y;
            _this.mcake43.x = _this.mcake43X;
            _this.mcake43.y = _this.mcake43Y;
            _this.mcakes44.x = _this.mcakes44X;
            _this.mcakes44.y = _this.mcakes44Y;
            _this.mcake53.x = _this.mcake53X;
            _this.mcake53.y = _this.mcake53Y;
        }
        if (_this.questionNo == 7) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 6; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud4.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake3.visible = true;
                    _this.mcake3.inputEnabled = true;
                    _this.mcake3.input.useHandCursor = true;
                    _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud4.canAdd++;
                }
                else {
                    target.x = _this.mcakes34X;
                    target.y = _this.mcakes34Y;
                }

            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcakes4.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud4.canAdd++;
                }

                else {
                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                target.x = _this.mcakes34X;
                target.y = _this.mcakes34Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.input.useHandCursor = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud4.canAdd++;
                }
                else {
                    target.x = _this.mcakes34X;
                    target.y = _this.mcakes34Y;
                }
            }
            _this.mcakes34.x = _this.mcakes34X;
            _this.mcakes34.y = _this.mcakes34Y;
        }
        if (_this.questionNo == 9) {
            //alert("here");
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 16; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud4.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.input.useHandCursor = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.input.useHandCursor = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud4.canAdd++;
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.input.useHandCursor = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud4.canAdd++;
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                target.x = _this.mcake63X;
                target.y = _this.mcake63Y;
                _this.mcakes64.x = _this.mcakes64X;
                _this.mcakes64.y = _this.mcakes64Y;

            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.input.useHandCursor = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.input.useHandCursor = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.input.useHandCursor = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.input.useHandCursor = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud4.canAdd++;
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud4.canAdd++;
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.input.useHandCursor = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud4.canAdd++;
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.input.useHandCursor = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                target.x = _this.mcake63X;
                target.y = _this.mcake63Y;
                _this.mcakes64.x = _this.mcakes64X;
                _this.mcakes64.y = _this.mcakes64Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.input.useHandCursor = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud4.canAdd++;
                }
                else {
                    target.x = _this.mcake63X;
                    target.y = _this.mcake63Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud5, target)) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.input.useHandCursor = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.input.useHandCursor = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                target.x = _this.mcake63X;
                target.y = _this.mcake63Y;
                _this.mcakes64.x = _this.mcakes64X;
                _this.mcakes64.y = _this.mcakes64Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target)) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.input.useHandCursor = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud6.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.input.useHandCursor = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud6.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                target.x = _this.mcake63X;
                target.y = _this.mcake63Y;
                _this.mcakes64.x = _this.mcakes64X;
                _this.mcakes64.y = _this.mcakes64Y;
            }

            _this.mcake63.x = _this.mcake63X;
            _this.mcake63.y = _this.mcake63Y;
            _this.mcakes64.x = _this.mcakes64X;
            _this.mcakes64.y = _this.mcakes64Y;
        }
    },
    small5: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 3) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 7; i++) {
                    if (_this["cake" + (i + 1)].visible == false) {
                        _this["cake" + (i + 1)].visible = true;
                        _this["cake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud5.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.input.useHandCursor = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                }
                target.x = _this.mcake53X;
                target.y = _this.mcake53Y;
                _this.mcakes54.x = _this.mcakes54X;
                _this.mcakes54.y = _this.mcakes54Y;

            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.input.useHandCursor = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud5.canAdd++;
                }
                else {
                    target.x = _this.mcake53X;
                    target.y = _this.mcake53Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.input.useHandCursor = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud5.canAdd++;
                }
                else {
                    target.x = _this.mcake53X;
                    target.y = _this.mcake53Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.input.useHandCursor = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud5.canAdd++;
                }
                else {
                    target.x = _this.mcake53X;
                    target.y = _this.mcake53Y;
                }
            }
            _this.mcake53.x = _this.mcake53X;
            _this.mcake53.y = _this.mcake53Y;
            _this.mcakes54.x = _this.mcakes54X;
            _this.mcakes54.y = _this.mcakes54Y;
        }
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 10; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud5.canAdd++;

            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.input.useHandCursor = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud4.canAdd++;
                    }
                }
                target.x = _this.mcakes54X;
                target.y = _this.mcakes54Y;

            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud5.canAdd++;
                }
                else {
                    target.x = _this.mcakes54X;
                    target.y = _this.mcakes54Y;
                }

            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud3.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud3.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                }
                target.x = _this.mcakes54X;
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.input.useHandCursor = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.input.useHandCursor = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud5.canAdd++;
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud4.canAdd--;
                    _this.cloud5.canAdd++;
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                }
                target.x = _this.mcakes54X;
                target.y = _this.mcakes54Y;
            }
            _this.mcakes54.x = _this.mcakes54X;
            _this.mcakes54.y = _this.mcakes54Y;
        }
        if (_this.questionNo == 9) {
            //alert("here");
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 16; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud5.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud5.canAdd++;
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud5.canAdd++;
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                }
                target.x = _this.mcake73X;
                target.y = _this.mcake73Y;
                _this.mcakes74.x = _this.mcakes74X;
                _this.mcakes74.y = _this.mcakes74Y;

            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud5.canAdd++;
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud5.canAdd++;
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud5.canAdd++;
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                }
                target.x = _this.mcake73X;
                target.y = _this.mcake73Y;
                _this.mcakes74.x = _this.mcakes74X;
                _this.mcakes74.y = _this.mcakes74Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud5.canAdd++;
                }
                else {
                    target.x = _this.mcake73X;
                    target.y = _this.mcake73Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                }
                target.x = _this.mcake73X;
                target.y = _this.mcake73Y;
                _this.mcakes74.x = _this.mcakes74X;
                _this.mcakes74.y = _this.mcakes74Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target)) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud6.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud6.canAdd--;
                        _this.cloud5.canAdd++;
                    }
                }
                target.x = _this.mcake73X;
                target.y = _this.mcake73Y;
                _this.mcakes74.x = _this.mcakes74X;
                _this.mcakes74.y = _this.mcakes74Y;
            }

            _this.mcake73.x = _this.mcake73X;
            _this.mcake73.y = _this.mcake73Y;
            _this.mcakes74.x = _this.mcakes74X;
            _this.mcakes74.y = _this.mcakes74Y;
        }
    },
    small6: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();
        if (_this.questionNo == 9) {
            //alert("here");
            if (_this.checkOverlap(_this.plate, target)) {
                target.visible = false;
                target.inputEnabled = false;

                for (var i = 0; i < 16; i++) {
                    if (_this["largecake" + (i + 1)].visible == false) {
                        _this["largecake" + (i + 1)].visible = true;
                        _this["largecake" + (i + 1)].inputEnabled = true;
                        break;
                    }

                }
                _this.count2--;
                _this.cloud6.canAdd++;
            }
            else if (_this.checkOverlap(_this.cloud1, target)) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud6.canAdd++;
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud6.canAdd++;
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud1.canAdd--;
                    _this.cloud6.canAdd++;
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud1.canAdd--;
                        _this.cloud6.canAdd++;
                    }
                }
                target.x = _this.mcake83X;
                target.y = _this.mcake83Y;
                _this.mcakes84.x = _this.mcakes84X;
                _this.mcakes84.y = _this.mcakes84Y;

            }
            else if (_this.checkOverlap(_this.cloud2, target)) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud6.canAdd++;
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud6.canAdd++;
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud6.canAdd++;
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud2.canAdd--;
                    _this.cloud6.canAdd++;
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud2.canAdd--;
                        _this.cloud6.canAdd++;
                    }
                }
                target.x = _this.mcake83X;
                target.y = _this.mcake83Y;
                _this.mcakes84.x = _this.mcakes84X;
                _this.mcakes84.y = _this.mcakes84Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target)) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    _this.cloud3.canAdd--;
                    _this.cloud6.canAdd++;
                }
                else {
                    target.x = _this.mcake83X;
                    target.y = _this.mcake83Y;
                }
            }
            else if (_this.checkOverlap(_this.cloud4, target)) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud6.canAdd++;
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud4.canAdd--;
                        _this.cloud6.canAdd++;
                    }
                }
                target.x = _this.mcake83X;
                target.y = _this.mcake83Y;
                _this.mcakes84.x = _this.mcakes84X;
                _this.mcakes84.y = _this.mcakes84Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target)) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud6.canAdd++;
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                        _this.cloud5.canAdd--;
                        _this.cloud6.canAdd++;
                    }
                }
                target.x = _this.mcake83X;
                target.y = _this.mcake83Y;
                _this.mcakes84.x = _this.mcakes84X;
                _this.mcakes84.y = _this.mcakes84Y;
            }

            _this.mcake83.x = _this.mcake83X;
            _this.mcake83.y = _this.mcake83Y;
            _this.mcakes84.x = _this.mcakes84X;
            _this.mcakes84.y = _this.mcakes84Y;
        }
    },
    /**************************cloudmatch************************/
    match1: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 1) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {

                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }
                }
                else {

                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }
                }
                else {
                    if (_this.mcake23.visible == false) {
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                        // _this.cloud1.canAdd--;
                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    //_this.cloud1.canAdd--;
                }

                //_this.cloud3.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {


                if (_this.mcakes34.visible == true) {
                    if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }

                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    //_this.cloud1.canAdd--;
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }

            if (_this.count2 == 8)//&& _this.addOnce
            {
                console.log("nssssssssffffffffff");
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake1X;
            target.y = _this.cake1Y;
        }
        if (_this.questionNo == 2) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }

                //_this.cloud3.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }



            if (_this.count2 == 6) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake1X;
            target.y = _this.cake1Y;
        }
        if (_this.questionNo == 3) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                _this.cloud2.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                _this.cloud3.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }
                _this.cloud4.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake53.visible == true) {
                    if (_this.mcakes54.visible == false) {
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake53.visible == false) {
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud5.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }

            if (_this.count2 == 7) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake1X;
            target.y = _this.cake1Y;
        }
        if (_this.questionNo == 4) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            if (_this.count2 == 9) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake1X;
            target.y = _this.largecake1Y;
        }
        if (_this.questionNo == 5) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }

            if (_this.count2 == 5) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake1X;
            target.y = _this.cake1Y;
        }
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            if (_this.count2 == 10) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake1X;
            target.y = _this.largecake1Y;
        }
        if (_this.questionNo == 7) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake3.visible = true;
                    _this.count2 += 1;
                    _this.mcake3.inputEnabled = true;
                    _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcakes4.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud4.canAdd--;
                target.x = _this.cake1X;
                target.y = _this.cake1Y;
            }

            if (_this.count2 == 6) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake1X;
            target.y = _this.cake1Y;
        }
        if (_this.questionNo == 8) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake63.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake63.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake63.visible = true;
                    _this.count2 += 1;
                    _this.mcake63.inputEnabled = true;
                    _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes54.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            if (_this.count2 == 12) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake1X;
            target.y = _this.largecake1Y;
        }
        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake1X;
                target.y = _this.largecake1Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake1X;
            target.y = _this.largecake1Y;
        }
    },
    match2: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 1) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {

                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {

                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake23.visible == false) {
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }

                //_this.cloud3.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }

            if (_this.count2 == 8) {
                console.log("nssssssssffffffffff2");
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake2X;
            target.y = _this.cake2Y;
        }
        if (_this.questionNo == 2) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }
                //_this.cloud3.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }

            if (_this.count2 == 6) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake2X;
            target.y = _this.cake2Y;
        }
        if (_this.questionNo == 3) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                _this.cloud2.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                _this.cloud3.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }
                _this.cloud4.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake53.visible == true) {
                    if (_this.mcakes54.visible == false) {
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake53.visible == false) {
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud5.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            if (_this.count2 == 7) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake2X;
            target.y = _this.cake2Y;
        }
        if (_this.questionNo == 4) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                // _this.cloud1.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            if (_this.count2 == 9) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake2X;
            target.y = _this.largecake2Y;
        }
        if (_this.questionNo == 5) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }

            if (_this.count2 == 5) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake2X;
            target.y = _this.cake2Y;
        }
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            if (_this.count2 == 10) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake2X;
            target.y = _this.largecake2Y;
        }
        if (_this.questionNo == 7) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake3.visible = true;
                    _this.count2 += 1;
                    _this.mcake3.inputEnabled = true;
                    _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcakes4.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud4.canAdd--;
                target.x = _this.cake2X;
                target.y = _this.cake2Y;
            }
            if (_this.count2 == 6) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake2X;
            target.y = _this.cake2Y;
        }
        if (_this.questionNo == 8) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake63.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake63.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake63.visible = true;
                    _this.count2 += 1;
                    _this.mcake63.inputEnabled = true;
                    _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes54.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            if (_this.count2 == 12) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake2X;
            target.y = _this.largecake2Y;
        }

        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake2X;
                target.y = _this.largecake2Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake2X;
            target.y = _this.largecake2Y;
        }
    },
    match3: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 1) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {

                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {

                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake23.visible == false) {
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }

            if (_this.count2 == 8) {
                console.log("nssssssssffffffffff3");
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake3X;
            target.y = _this.cake3Y;
        }
        if (_this.questionNo == 2) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }

                //_this.cloud3.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            if (_this.count2 == 6) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake3X;
            target.y = _this.cake3Y;
        }
        if (_this.questionNo == 3) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                _this.cloud2.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                _this.cloud3.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }
                _this.cloud4.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake53.visible == true) {
                    if (_this.mcakes54.visible == false) {
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake53.visible == false) {
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud5.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            if (_this.count2 == 7) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake3X;
            target.y = _this.cake3Y;
        }
        if (_this.questionNo == 4) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            if (_this.count2 == 9) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake3X;
            target.y = _this.largecake3Y;
        }
        if (_this.questionNo == 5) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            if (_this.count2 == 5) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake3X;
            target.y = _this.cake3Y;
        }
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            if (_this.count2 == 10) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake3X;
            target.y = _this.largecake3Y;
        }
        if (_this.questionNo == 7) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake3.visible = true;
                    _this.count2 += 1;
                    _this.mcake3.inputEnabled = true;
                    _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcakes4.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud4.canAdd--;
                target.x = _this.cake3X;
                target.y = _this.cake3Y;
            }
            if (_this.count2 == 6) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake3X;
            target.y = _this.cake3Y;
        }
        if (_this.questionNo == 8) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake63.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake63.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake63.visible = true;
                    _this.count2 += 1;
                    _this.mcake63.inputEnabled = true;
                    _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes54.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            if (_this.count2 == 12) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake3X;
            target.y = _this.largecake3Y;
        }
        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake3X;
                target.y = _this.largecake3Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake3X;
            target.y = _this.largecake3Y;
        }
    },
    match4: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 1) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {

                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {

                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake23.visible == false) {
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                // _this.cloud3.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                // _this.cloud4.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }

            if (_this.count2 == 8) {
                console.log("nssssssssffffffffff5");
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake4X;
            target.y = _this.cake4Y;
        }
        if (_this.questionNo == 2) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }

                //_this.cloud3.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            if (_this.count2 == 6) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake4X;
            target.y = _this.cake4Y;
        }
        if (_this.questionNo == 3) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                _this.cloud2.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                _this.cloud3.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }
                _this.cloud4.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake53.visible == true) {
                    if (_this.mcakes54.visible == false) {
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake53.visible == false) {
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud5.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            if (_this.count2 == 7) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake4X;
            target.y = _this.cake4Y;
        }
        if (_this.questionNo == 4) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            if (_this.count2 == 9) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake4X;
            target.y = _this.largecake4Y;
        }
        if (_this.questionNo == 5) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            if (_this.count2 == 5) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake4X;
            target.y = _this.cake4Y;
        }
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            if (_this.count2 == 10) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake4X;
            target.y = _this.largecake4Y;
        }
        if (_this.questionNo == 7) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake3.visible = true;
                    _this.count2 += 1;
                    _this.mcake3.inputEnabled = true;
                    _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcakes4.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud4.canAdd--;
                target.x = _this.cake4X;
                target.y = _this.cake4Y;
            }
            if (_this.count2 == 6) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake4X;
            target.y = _this.cake4Y;
        }
        if (_this.questionNo == 8) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake63.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake63.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake63.visible = true;
                    _this.count2 += 1;
                    _this.mcake63.inputEnabled = true;
                    _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes54.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            if (_this.count2 == 12) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake4X;
            target.y = _this.largecake4Y;
        }
        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake4X;
                target.y = _this.largecake4Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake4X;
            target.y = _this.largecake4Y;
        }
    },
    match5: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 1) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {

                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {

                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake23.visible == false) {
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }

            if (_this.count2 == 8) {
                console.log("nssssssssffffffffff5");
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake5X;
            target.y = _this.cake5Y;
        }
        if (_this.questionNo == 2) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }

                //_this.cloud3.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            if (_this.count2 == 6) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake5X;
            target.y = _this.cake5Y;
        }
        if (_this.questionNo == 3) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                _this.cloud2.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                _this.cloud3.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }
                _this.cloud4.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake53.visible == true) {
                    if (_this.mcakes54.visible == false) {
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake53.visible == false) {
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud5.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            if (_this.count2 == 7) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake5X;
            target.y = _this.cake5Y;
        }
        if (_this.questionNo == 4) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            if (_this.count2 == 9) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake5X;
            target.y = _this.largecake5Y;
        }
        if (_this.questionNo == 5) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            if (_this.count2 == 5) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake5X;
            target.y = _this.cake5Y;
        }
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            if (_this.count2 == 10) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake5X;
            target.y = _this.largecake5Y;
        }
        if (_this.questionNo == 7) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake3.visible = true;
                    _this.count2 += 1;
                    _this.mcake3.inputEnabled = true;
                    _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcakes4.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud4.canAdd--;
                target.x = _this.cake5X;
                target.y = _this.cake5Y;
            }
            if (_this.count2 == 6) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake5X;
            target.y = _this.cake5Y;
        }
        if (_this.questionNo == 8) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake63.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake63.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake63.visible = true;
                    _this.count2 += 1;
                    _this.mcake63.inputEnabled = true;
                    _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes54.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            if (_this.count2 == 12) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake5X;
            target.y = _this.largecake5Y;
        }
        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake5X;
                target.y = _this.largecake5Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake5X;
            target.y = _this.largecake5Y;
        }
    },
    match6: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 1) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {

                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake23.visible == false) {
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            if (_this.count2 == 8) {
                console.log("nssssssssffffffffff6");
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake6X;
            target.y = _this.cake6Y;
        }
        if (_this.questionNo == 2) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }

                //_this.cloud3.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            if (_this.count2 == 6) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake6X;
            target.y = _this.cake6Y;
        }
        if (_this.questionNo == 3) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                _this.cloud2.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                _this.cloud3.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }
                _this.cloud4.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake53.visible == true) {
                    if (_this.mcakes54.visible == false) {
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake53.visible == false) {
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud5.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            if (_this.count2 == 7) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake6X;
            target.y = _this.cake6Y;
        }
        if (_this.questionNo == 4) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            if (_this.count2 == 9) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake6X;
            target.y = _this.largecake6Y;
        }
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            if (_this.count2 == 10) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake6X;
            target.y = _this.largecake6Y;
        }
        if (_this.questionNo == 7) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake3.visible = true;
                    _this.count2 += 1;
                    _this.mcake3.inputEnabled = true;
                    _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcakes4.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud4.canAdd--;
                target.x = _this.cake6X;
                target.y = _this.cake6Y;
            }
            if (_this.count2 == 6) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake6X;
            target.y = _this.cake6Y;
        }
        if (_this.questionNo == 8) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake63.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake63.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake63.visible = true;
                    _this.count2 += 1;
                    _this.mcake63.inputEnabled = true;
                    _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes54.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            if (_this.count2 == 12) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake6X;
            target.y = _this.largecake6Y;
        }
        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake6X;
                target.y = _this.largecake6Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake6X;
            target.y = _this.largecake6Y;
        }
    },
    match7: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 1) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {

                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {

                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake7X;
                target.y = _this.cake7Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake23.visible == false) {
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake7X;
                target.y = _this.cake7Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.cake7X;
                target.y = _this.cake7Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.cake7X;
                target.y = _this.cake7Y;
            }

            if (_this.count2 == 8) {
                console.log("nssssssssffffffffff7");
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake7X;
            target.y = _this.cake7Y;
        }
        if (_this.questionNo == 3) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.cake7X;
                target.y = _this.cake7Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                _this.cloud2.canAdd--;
                target.x = _this.cake7X;
                target.y = _this.cake7Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                _this.cloud3.canAdd--;
                target.x = _this.cake7X;
                target.y = _this.cake7Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }
                _this.cloud4.canAdd--;
                target.x = _this.cake7X;
                target.y = _this.cake7Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake53.visible == true) {
                    if (_this.mcakes54.visible == false) {
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake53.visible == false) {
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud5.canAdd--;
                target.x = _this.cake7X;
                target.y = _this.cake7Y;
            }
            if (_this.count2 == 7) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake7X;
            target.y = _this.cake7Y;
        }
        if (_this.questionNo == 4) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            if (_this.count2 == 9) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake7X;
            target.y = _this.largecake7Y;
        }
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            if (_this.count2 == 10) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake7X;
            target.y = _this.largecake7Y;
        }
        if (_this.questionNo == 8) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake63.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake63.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake63.visible = true;
                    _this.count2 += 1;
                    _this.mcake63.inputEnabled = true;
                    _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes54.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            if (_this.count2 == 12) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake7X;
            target.y = _this.largecake7Y;
        }
        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake7X;
                target.y = _this.largecake7Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake7X;
            target.y = _this.largecake7Y;
        }
    },
    match8: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 1) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {

                    if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {

                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.cake8X;
                target.y = _this.cake8Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake23.visible == false) {
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.cake8X;
                target.y = _this.cake8Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcake33.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake33.visible = true;
                    _this.count2 += 1;
                    _this.mcake33.inputEnabled = true;
                    _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.cake8X;
                target.y = _this.cake8Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                        //_this.cloud1.canAdd--;
                    }
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.cake8X;
                target.y = _this.cake8Y;
            }

            if (_this.count2 == 8) {
                console.log("nssssssssffffffffff8");
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.cake8X;
            target.y = _this.cake8Y;
        }
        if (_this.questionNo == 4) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            if (_this.count2 == 9) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake8X;
            target.y = _this.largecake8Y;
        }
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            if (_this.count2 == 10) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake8X;
            target.y = _this.largecake8Y;
        }
        if (_this.questionNo == 8) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake63.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake63.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake63.visible = true;
                    _this.count2 += 1;
                    _this.mcake63.inputEnabled = true;
                    _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes54.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            if (_this.count2 == 12) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake8X;
            target.y = _this.largecake8Y;
        }
        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake8X;
                target.y = _this.largecake8Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake8X;
            target.y = _this.largecake8Y;
        }
    },
    match9: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();
        if (_this.questionNo == 4) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == true) {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes24.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes24.visible = true;
                    _this.count2 += 1;
                    _this.mcakes24.inputEnabled = true;
                    _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);

                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake43.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            if (_this.count2 == 9) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake9X;
            target.y = _this.largecake9Y;
        }
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            if (_this.count2 == 10) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake9X;
            target.y = _this.largecake9Y;
        }
        if (_this.questionNo == 8) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake63.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake63.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake63.visible = true;
                    _this.count2 += 1;
                    _this.mcake63.inputEnabled = true;
                    _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes54.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            if (_this.count2 == 12) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake9X;
            target.y = _this.largecake9Y;
        }
        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake9X;
                target.y = _this.largecake9Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake9X;
            target.y = _this.largecake9Y;
        }
    },
    match10: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();
        if (_this.questionNo == 6) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes4.visible == false) {
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake3.visible == false) {
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake10X;
                target.y = _this.largecake10Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake10X;
                target.y = _this.largecake10Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes24.visible == true) {
                    if (_this.mcake33.visible == false) {
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcakes24.visible == false) {
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake10X;
                target.y = _this.largecake10Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcakes34.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud4.canAdd--;
                target.x = _this.largecake10X;
                target.y = _this.largecake10Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake10X;
                target.y = _this.largecake10Y;
            }
            if (_this.count2 == 10) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake10X;
            target.y = _this.largecake10Y;
        }
        if (_this.questionNo == 8) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake10X;
                target.y = _this.largecake10Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake10X;
                target.y = _this.largecake10Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake63.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake63.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake63.visible = true;
                    _this.count2 += 1;
                    _this.mcake63.inputEnabled = true;
                    _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes54.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake10X;
                target.y = _this.largecake10Y;
            }
            if (_this.count2 == 12) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake10X;
            target.y = _this.largecake10Y;
        }
        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake10X;
                target.y = _this.largecake10Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake10X;
                target.y = _this.largecake10Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake10X;
                target.y = _this.largecake10Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake10X;
                target.y = _this.largecake10Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake10X;
                target.y = _this.largecake10Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake10X;
                target.y = _this.largecake10Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake10X;
            target.y = _this.largecake10Y;
        }
    },
    match11: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 8) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake11X;
                target.y = _this.largecake11Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake11X;
                target.y = _this.largecake11Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake63.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake63.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake63.visible = true;
                    _this.count2 += 1;
                    _this.mcake63.inputEnabled = true;
                    _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes54.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake11X;
                target.y = _this.largecake11Y;
            }
            if (_this.count2 == 12) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake11X;
            target.y = _this.largecake11Y;
        }

        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake11X;
                target.y = _this.largecake11Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake11X;
                target.y = _this.largecake11Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake11X;
                target.y = _this.largecake11Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake11X;
                target.y = _this.largecake11Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake11X;
                target.y = _this.largecake11Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake11X;
                target.y = _this.largecake11Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake11X;
            target.y = _this.largecake11Y;
        }
    },
    match12: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();

        if (_this.questionNo == 8) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);

                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);

                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);

                    }
                }
                //_this.cloud1.canAdd--;
                target.x = _this.largecake12X;
                target.y = _this.largecake12Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud2.canAdd--;
                target.x = _this.largecake12X;
                target.y = _this.largecake12Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake63.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake63.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake63.visible = true;
                    _this.count2 += 1;
                    _this.mcake63.inputEnabled = true;
                    _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcakes54.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes54.visible = true;
                        _this.count2 += 1;
                        _this.mcakes54.inputEnabled = true;
                        _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake12X;
                target.y = _this.largecake12Y;
            }
            if (_this.count2 == 12) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake12X;
            target.y = _this.largecake12Y;
        }

        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake12X;
                target.y = _this.largecake12Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake12X;
                target.y = _this.largecake12Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake12X;
                target.y = _this.largecake12Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake12X;
                target.y = _this.largecake12Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake12X;
                target.y = _this.largecake12Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake12X;
                target.y = _this.largecake12Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake12X;
            target.y = _this.largecake12Y;
        }
    },
    match13: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();
        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake13X;
                target.y = _this.largecake13Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake13X;
                target.y = _this.largecake13Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake13X;
                target.y = _this.largecake13Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake13X;
                target.y = _this.largecake13Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake13X;
                target.y = _this.largecake13Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake13X;
                target.y = _this.largecake13Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake13X;
            target.y = _this.largecake13Y;
        }

    },
    match14: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();
        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake14X;
                target.y = _this.largecake14Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake14X;
                target.y = _this.largecake14Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake14X;
                target.y = _this.largecake14Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake14X;
                target.y = _this.largecake14Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake14X;
                target.y = _this.largecake14Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake14X;
                target.y = _this.largecake14Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake14X;
            target.y = _this.largecake14Y;
        }
    },
    match15: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();
        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake15X;
                target.y = _this.largecake15Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake15X;
                target.y = _this.largecake15Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake15X;
                target.y = _this.largecake15Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake15X;
                target.y = _this.largecake15Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake15X;
                target.y = _this.largecake15Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake15X;
                target.y = _this.largecake15Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake15X;
            target.y = _this.largecake15Y;
        }
    },
    match16: function (target) {
        _this.snapSound = _this.add.audio('snapSound');
        _this.snapSound.play();
        if (_this.questionNo == 9) {
            if (_this.checkOverlap(_this.cloud1, target) && _this.cloud1.canAdd > 0) {
                if (_this.mcake3.visible == true) {
                    if (_this.mcakes24.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes24.visible = true;
                        _this.count2 += 1;
                        _this.mcakes24.inputEnabled = true;
                        _this.mcakes24.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake23.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake23.visible = true;
                        _this.count2 += 1;
                        _this.mcake23.inputEnabled = true;
                        _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes4.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes4.visible = true;
                        _this.count2 += 1;
                        _this.mcakes4.inputEnabled = true;
                        _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcake23.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake23.visible = true;
                    _this.count2 += 1;
                    _this.mcake23.inputEnabled = true;
                    _this.mcake23.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcakes4.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes4.visible = true;
                    _this.count2 += 1;
                    _this.mcakes4.inputEnabled = true;
                    _this.mcakes4.events.onInputDown.add(_this.checkAns, _this);
                }

                else {
                    if (_this.mcake3.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake3.visible = true;
                        _this.count2 += 1;
                        _this.mcake3.inputEnabled = true;
                        _this.mcake3.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud1.canAdd--;
                target.x = _this.largecake16X;
                target.y = _this.largecake16Y;
            }
            else if (_this.checkOverlap(_this.cloud2, target) && _this.cloud2.canAdd > 0) {
                if (_this.mcake33.visible == true) {
                    if (_this.mcake53.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake53.visible = true;
                        _this.count2 += 1;
                        _this.mcake53.inputEnabled = true;
                        _this.mcake53.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcakes44.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes44.visible = true;
                        _this.count2 += 1;
                        _this.mcakes44.inputEnabled = true;
                        _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                    }
                    else if (_this.mcake43.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake43.visible = true;
                        _this.count2 += 1;
                        _this.mcake43.inputEnabled = true;
                        _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                    }

                    else if (_this.mcakes34.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes34.visible = true;
                        _this.count2 += 1;
                        _this.mcakes34.inputEnabled = true;
                        _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else if (_this.mcakes44.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes44.visible = true;
                    _this.count2 += 1;
                    _this.mcakes44.inputEnabled = true;
                    _this.mcakes44.events.onInputDown.add(_this.checkAns, _this);
                }
                else if (_this.mcake43.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcake43.visible = true;
                    _this.count2 += 1;
                    _this.mcake43.inputEnabled = true;
                    _this.mcake43.events.onInputDown.add(_this.checkAns, _this);
                }

                else if (_this.mcakes34.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes34.visible = true;
                    _this.count2 += 1;
                    _this.mcakes34.inputEnabled = true;
                    _this.mcakes34.events.onInputDown.add(_this.checkAns, _this);
                }
                else {
                    if (_this.mcake33.visible == false) {
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake33.visible = true;
                        _this.count2 += 1;
                        _this.mcake33.inputEnabled = true;
                        _this.mcake33.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                _this.cloud2.canAdd--;
                target.x = _this.largecake16X;
                target.y = _this.largecake16Y;
            }
            else if (_this.checkOverlap(_this.cloud3, target) && _this.cloud3.canAdd > 0) {
                if (_this.mcakes54.visible == false) {
                    target.visible = false;
                    target.inputEnabled = false;
                    _this.mcakes54.visible = true;
                    _this.count2 += 1;
                    _this.mcakes54.inputEnabled = true;
                    _this.mcakes54.events.onInputDown.add(_this.checkAns, _this);
                }
                //_this.cloud3.canAdd--;
                target.x = _this.largecake16X;
                target.y = _this.largecake16Y;
            }
            else if (_this.checkOverlap(_this.cloud4, target) && _this.cloud4.canAdd > 0) {
                if (_this.mcake63.visible == true) {
                    if (_this.mcakes64.visible == false) {
                        _this.mcakes64.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes64.inputEnabled = true;
                        _this.mcakes64.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake63.visible == false) {
                        _this.mcake63.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake63.inputEnabled = true;
                        _this.mcake63.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud4.canAdd--;
                target.x = _this.largecake16X;
                target.y = _this.largecake16Y;
            }
            else if (_this.checkOverlap(_this.cloud5, target) && _this.cloud5.canAdd > 0) {
                if (_this.mcake73.visible == true) {
                    if (_this.mcakes74.visible == false) {
                        _this.mcakes74.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes74.inputEnabled = true;
                        _this.mcakes74.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake73.visible == false) {
                        _this.mcake73.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake73.inputEnabled = true;
                        _this.mcake73.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud5.canAdd--;
                target.x = _this.largecake16X;
                target.y = _this.largecake16Y;
            }
            else if (_this.checkOverlap(_this.cloud6, target) && _this.cloud6.canAdd > 0) {
                if (_this.mcake83.visible == true) {
                    if (_this.mcakes84.visible == false) {
                        _this.mcakes84.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcakes84.inputEnabled = true;
                        _this.mcakes84.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                else {
                    if (_this.mcake83.visible == false) {
                        _this.mcake83.visible = true;
                        _this.count2 += 1;
                        target.visible = false;
                        target.inputEnabled = false;
                        _this.mcake83.inputEnabled = true;
                        _this.mcake83.events.onInputDown.add(_this.checkAns, _this);
                    }
                }
                //_this.cloud6.canAdd--;
                target.x = _this.largecake16X;
                target.y = _this.largecake16Y;
            }
            if (_this.count2 == 16) {
                _this.rightmark.frame = 1;
                _this.checkAns2();
                _this.addOnce = false;
            }
            target.x = _this.largecake16X;
            target.y = _this.largecake16Y;
        }
    },

    checkAns2: function (target) {
        console.log("checkkkkkkkkkkkkkkkkkkkkk");
        _this.rightmark.events.onInputDown.add(function (target) {
            _this.rightmark.frame = 2;
            target.events.onInputDown.removeAll();
            this.time.events.add(2000, function () {
                _this.rightmark.frame = 0;
            }, this);

            if (_this.questionNo == 1) {
                if (_this.count2 == _this.rightAns) {
                    _this.correctAns();
                    _this.anim1 = _this.mcake3.animations.add('cake');
                    _this.anim1.play(3, true);
                    _this.anim2 = _this.mcakes4.animations.add('cake');
                    _this.anim2.play(3, true);
                    _this.anim3 = _this.mcake23.animations.add('cake');
                    _this.anim3.play(3, true);
                    _this.anim4 = _this.mcakes24.animations.add('cake');
                    _this.anim4.play(3, true);
                    _this.anim5 = _this.mcake33.animations.add('cake');
                    _this.anim5.play(3, true);
                    _this.anim6 = _this.mcakes34.animations.add('cake');
                    _this.anim6.play(3, true);
                    _this.anim7 = _this.mcake43.animations.add('cake');
                    _this.anim7.play(3, true);
                    _this.anim8 = _this.mcakes44.animations.add('cake');
                    _this.anim8.play(3, true);
                }
                else {
                    _this.rightmark.frame = 0;
                    _this.wrongAns();
                }
            }


            else if (_this.questionNo == 2) {
                if (_this.count2 == _this.rightAns) {
                    _this.correctAns();
                    _this.anim1 = _this.mcake3.animations.add('cake');
                    _this.anim1.play(3, true);
                    _this.anim2 = _this.mcakes4.animations.add('cake');
                    _this.anim2.play(3, true);
                    _this.anim3 = _this.mcake23.animations.add('cake');
                    _this.anim3.play(3, true);
                    _this.anim4 = _this.mcakes24.animations.add('cake');
                    _this.anim4.play(3, true);
                    _this.anim5 = _this.mcake33.animations.add('cake');
                    _this.anim5.play(3, true);
                    _this.anim6 = _this.mcakes34.animations.add('cake');
                    _this.anim6.play(3, true);
                }
                else {
                    _this.wrongAns();
                    _this.rightmark.frame = 0;
                }
            }

            else if (_this.questionNo == 3) {
                if (_this.count2 == _this.rightAns) {
                    _this.correctAns();
                    _this.anim1 = _this.mcake3.animations.add('cake');
                    _this.anim1.play(3, true);
                    _this.anim2 = _this.mcakes4.animations.add('cake');
                    _this.anim2.play(3, true);
                    _this.anim3 = _this.mcake23.animations.add('cake');
                    _this.anim3.play(3, true);
                    _this.anim4 = _this.mcake33.animations.add('cake');
                    _this.anim4.play(3, true);
                    _this.anim5 = _this.mcake43.animations.add('cake');
                    _this.anim5.play(3, true);
                    _this.anim6 = _this.mcake53.animations.add('cake');
                    _this.anim6.play(3, true);
                    _this.anim7 = _this.mcakes54.animations.add('cake');
                    _this.anim7.play(3, true);

                }
                else {
                    _this.wrongAns();
                    _this.rightmark.frame = 0;
                }
            }

            else if (_this.questionNo == 4) {
                if (_this.count2 == _this.rightAns) {
                    _this.correctAns();
                    _this.anim1 = _this.mcake3.animations.add('cake');
                    _this.anim1.play(3, true);
                    _this.anim2 = _this.mcakes4.animations.add('cake');
                    _this.anim2.play(3, true);
                    _this.anim3 = _this.mcake23.animations.add('cake');
                    _this.anim3.play(3, true);
                    _this.anim4 = _this.mcakes24.animations.add('cake');
                    _this.anim4.play(3, true);
                    _this.anim5 = _this.mcake33.animations.add('cake');
                    _this.anim5.play(3, true);
                    _this.anim6 = _this.mcakes34.animations.add('cake');
                    _this.anim6.play(3, true);
                    _this.anim7 = _this.mcake43.animations.add('cake');
                    _this.anim7.play(3, true);
                    _this.anim8 = _this.mcakes44.animations.add('cake');
                    _this.anim8.play(3, true);
                    _this.anim9 = _this.mcake53.animations.add('cake');
                    _this.anim9.play(3, true);
                }
                else {
                    _this.wrongAns();
                    _this.rightmark.frame = 0;
                }
            }

            else if (_this.questionNo == 5) {
                if (_this.count2 == _this.rightAns) {
                    _this.correctAns();
                    _this.anim1 = _this.mcake3.animations.add('cake');
                    _this.anim1.play(3, true);
                    _this.anim2 = _this.mcakes4.animations.add('cake');
                    _this.anim2.play(3, true);
                    _this.anim3 = _this.mcake23.animations.add('cake');
                    _this.anim3.play(3, true);
                    _this.anim4 = _this.mcakes24.animations.add('cake');
                    _this.anim4.play(3, true);
                    _this.anim5 = _this.mcake33.animations.add('cake');
                    _this.anim5.play(3, true);
                }
                else {
                    _this.wrongAns();
                    _this.rightmark.frame = 0;
                }
            }

            else if (_this.questionNo == 6) {
                if (_this.count2 == _this.rightAns) {
                    _this.correctAns();
                    _this.anim1 = _this.mcake3.animations.add('cake');
                    _this.anim1.play(3, true);
                    _this.anim2 = _this.mcakes4.animations.add('cake');
                    _this.anim2.play(3, true);
                    _this.anim3 = _this.mcake23.animations.add('cake');
                    _this.anim3.play(3, true);
                    _this.anim4 = _this.mcakes24.animations.add('cake');
                    _this.anim4.play(3, true);
                    _this.anim5 = _this.mcake33.animations.add('cake');
                    _this.anim5.play(3, true);
                    _this.anim6 = _this.mcakes34.animations.add('cake');
                    _this.anim6.play(3, true);
                    _this.anim7 = _this.mcake43.animations.add('cake');
                    _this.anim7.play(3, true);
                    _this.anim8 = _this.mcakes44.animations.add('cake');
                    _this.anim8.play(3, true);
                    _this.anim9 = _this.mcake53.animations.add('cake');
                    _this.anim9.play(3, true);
                    _this.anim10 = _this.mcakes54.animations.add('cake');
                    _this.anim10.play(3, true);
                }
                else {
                    _this.wrongAns();
                    _this.rightmark.frame = 0;
                }
            }

            else if (_this.questionNo == 7) {
                if (_this.count2 == _this.rightAns) {
                    _this.correctAns();
                    _this.anim1 = _this.mcake3.animations.add('cake');
                    _this.anim1.play(3, true);
                    _this.anim2 = _this.mcakes4.animations.add('cake');
                    _this.anim2.play(3, true);
                    _this.anim3 = _this.mcake23.animations.add('cake');
                    _this.anim3.play(3, true);
                    _this.anim4 = _this.mcakes24.animations.add('cake');
                    _this.anim4.play(3, true);
                    _this.anim5 = _this.mcake33.animations.add('cake');
                    _this.anim5.play(3, true);
                    _this.anim6 = _this.mcakes34.animations.add('cake');
                    _this.anim6.play(3, true);
                }
                else {
                    _this.wrongAns();
                    _this.rightmark.frame = 0;
                }
            }

            else if (_this.questionNo == 8) {
                if (_this.count2 == _this.rightAns) {
                    _this.correctAns();
                    _this.anim1 = _this.mcake3.animations.add('cake');
                    _this.anim1.play(3, true);
                    _this.anim2 = _this.mcakes4.animations.add('cake');
                    _this.anim2.play(3, true);
                    _this.anim3 = _this.mcake23.animations.add('cake');
                    _this.anim3.play(3, true);
                    _this.anim4 = _this.mcakes24.animations.add('cake');
                    _this.anim4.play(3, true);
                    _this.anim5 = _this.mcake33.animations.add('cake');
                    _this.anim5.play(3, true);
                    _this.anim6 = _this.mcakes34.animations.add('cake');
                    _this.anim6.play(3, true);
                    _this.anim7 = _this.mcake43.animations.add('cake');
                    _this.anim7.play(3, true);
                    _this.anim8 = _this.mcakes44.animations.add('cake');
                    _this.anim8.play(3, true);
                    _this.anim9 = _this.mcake53.animations.add('cake');
                    _this.anim9.play(3, true);
                    _this.anim10 = _this.mcakes54.animations.add('cake');
                    _this.anim10.play(3, true);
                    _this.anim11 = _this.mcake63.animations.add('cake');
                    _this.anim11.play(3, true);
                    _this.anim12 = _this.mcakes64.animations.add('cake');
                    _this.anim12.play(3, true);
                }
                else {
                    _this.wrongAns();
                    _this.rightmark.frame = 0;
                }
            }

            else if (_this.questionNo == 9) {
                if (_this.count2 == _this.rightAns) {
                    _this.correctAns();
                    _this.anim1 = _this.mcake3.animations.add('cake');
                    _this.anim1.play(3, true);
                    _this.anim2 = _this.mcakes4.animations.add('cake');
                    _this.anim2.play(3, true);
                    _this.anim3 = _this.mcake23.animations.add('cake');
                    _this.anim3.play(3, true);
                    _this.anim4 = _this.mcakes24.animations.add('cake');
                    _this.anim4.play(3, true);
                    _this.anim5 = _this.mcake33.animations.add('cake');
                    _this.anim5.play(3, true);
                    _this.anim6 = _this.mcakes34.animations.add('cake');
                    _this.anim6.play(3, true);
                    _this.anim7 = _this.mcake43.animations.add('cake');
                    _this.anim7.play(3, true);
                    _this.anim8 = _this.mcakes44.animations.add('cake');
                    _this.anim8.play(3, true);
                    _this.anim9 = _this.mcake53.animations.add('cake');
                    _this.anim9.play(3, true);
                    _this.anim10 = _this.mcakes54.animations.add('cake');
                    _this.anim10.play(3, true);
                    _this.anim11 = _this.mcake63.animations.add('cake');
                    _this.anim11.play(3, true);
                    _this.anim12 = _this.mcakes64.animations.add('cake');
                    _this.anim12.play(3, true);
                    _this.anim13 = _this.mcake73.animations.add('cake');
                    _this.anim13.play(3, true);
                    _this.anim14 = _this.mcakes74.animations.add('cake');
                    _this.anim14.play(3, true);
                    _this.anim15 = _this.mcake83.animations.add('cake');
                    _this.anim15.play(3, true);
                    _this.anim16 = _this.mcakes84.animations.add('cake');
                    _this.anim16.play(3, true);
                }
                else {
                    _this.wrongAns();
                    _this.rightmark.frame = 0;
                }
            }

        }, _this);
    },

    removeEverthing: function () {
        console.log("removeEverthing");
        _this.celebration = false;
        console.log("no" + _this.no11);
        _this.count2 = 0;
        _this.no11++;
        console.log(_this.no11);
        if (_this.no11 < 6) {
            _this.numGroup.destroy();
            flagGroup1.destroy();
            flagGroup2.destroy();
            cakeGroup.destroy();
            smallCakeGroup.destroy();
            _this.numTxt.setText("");
            _this.selectedAns = "";
            _this.getQuestion();
            //_this.starsGroup.getChildAt(_this.count1).frame = 2;            
        }
        else {
            _this.stopvoice();
            _this.counterForTimer = null;
            _this.timer1 = null;

            //* transition to score. Score App version will show score menu - home/replay/next.
            //* Score Diksha version will end the session and show the score.
            //* appropriate version of the score should be present in commonjsfiles folder.
            _this.time.events.add(50, function () {
                // _this.state.start('score');
                _this.state.start('score', true, false,gameID,_this.microConcepts);
            });
        }
    },

    correctAns: function (target) {
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);

        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        // _this.interactEvent = 
        // { 
        //     id_game_play: _this.savedVar, 
        //     id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
        //     date_time_event: _this.currentTime, 
        //     event_type: "click", 
        //     res_id: "level1_"+target, 
        //     access_token: window.acctkn 
        // } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

        if (_this.timer) {
            _this.timer.stop();
            _this.timer = null;
        }
        if (_this.timer1) {
            _this.timer1.stop();
            _this.timer1 = null;
        }
        // _this.currentTime = window.timeSaveFunc();

        // _this.saveAsment = 
        // { 
        //     id_game_play: _this.savedVar,
        //     id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
        //     pass: "yes",
        //     time2answer: _this.AnsTimerCount,
        //     attempts: _this.noofAttempts,
        //     date_time_submission: _this.currentTime, 
        //     access_token: window.acctkn 
        // }
        _this.score++;

        // _this.userHasPlayed = 1;
        // _this.game_id='NSF_1A_G6';
        // _this.timeinMinutes = _this.minutes;
        // _this.timeinSeconds = _this.seconds;
        // _this.grade = "6";
        // _this.gradeTopics = "Fractions";
        _this.microConcepts = "Number Systems";

        //_this.wrong = true;
        _this.speakerbtn.inputEnabled = false;
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        console.log(_this.starAnim);

        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play();
        console.log("correct11");
        // _this.speaker.inputEnabled=false;
        _this.count1++;

        _this.celebration = true;

        _this.click3 = _this.add.audio('ClickSound');
        _this.click3.play();

        _this.cmusic = _this.add.audio('celebr');
        _this.cmusic.play();

        _this.time.events.add(2000, _this.removeEverthing, _this);

        _this.questionid = 1;
        telInitializer.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);
    },

    wrongAns: function (target) {
        //_this.timer1.stop();
        _this.stopvoice();
        _this.noofAttempts++;
        //_this.currentTime = window.timeSaveFunc();
        //    _this.interactEvent = 
        //            { 
        //                 id_game_play: _this.savedVar, 
        //                 id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
        //                 date_time_event: _this.currentTime, 
        //                 event_type: "click", 
        //                 res_id: "level1_", 
        //                 access_token: window.acctkn 
        //            } 
        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        // this.timer= this.time.create(false);
        _this.wrongAnswer = true;

        _this.shake.shake(10, smallCakeGroup);
        _this.wmusic = _this.add.audio('waudio');
        _this.wmusic.play();


        /* _this.time.events.add(1000, function(){
         _this.numGroup.destroy();
         flagGroup1.destroy();
         flagGroup2.destroy();
         cakeGroup.destroy();
         smallCakeGroup.destroy();
         _this.rightmark.destroy();
         _this.getQuestion();
             
         },_this);*/


        // target.events.onInputDown.removeAll();
    },

    amplifyMedia: function (mediaElem, multiplier) {
        var context = new (window.AudioContext || window.webkitAudioContext),
            result = {
                context: context,
                source: context.createMediaElementSource(mediaElem),
                gain: context.createGain(),
                media: mediaElem,
                amplify: function (multiplier) { result.gain.gain.value = multiplier; },
                getAmpLevel: function () { return result.gain.gain.value; }
            };
        result.source.connect(result.gain);
        result.gain.connect(context.destination);
        result.amplify(multiplier);

        return result;
    },

    getVoice: function () {
        _this.stopvoice();
        //console.log("fffffff"+_this.qArrays[_this.no11]);

        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch (_this.qArrays[_this.no11]) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9: if (_this.languageSelected == "ENG") {
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/NSF-1B-G6/ENG/NSF-1-G6-b.mp3");
            }
            else if (_this.languageSelected == "HIN") {
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/NSF-1B-G6/HIN/NSF-1-G6-b.mp3");
            }
            else if (_this.languageSelected == "KAN") {
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/NSF-1B-G6/KAN/NSF-1-G6-b.mp3");
            }
            else if (_this.languageSelected == "GUJ") {
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/NSF-1B-G6/GUJ/NSF-1-G6-b.mp3");
            }
            else if (_this.languageSelected == "MAR") {
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/NSF-1B-G6/MAR/NSF-1-G6-b.mp3");
            }
            else if (window.languageSelected == "TEL") {
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/NSF-1B-G6/TEL/NSF-1-G6-b.mp3");
            }
            else if (_this.languageSelected == "TAM") {
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/NSF-1B-G6/TAM/NSF-1-G6-b.mp3");
            }
            else if (_this.languageSelected == "URD") {
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/NSF-1B-G6/URD/NSF-1-G6-b.mp3");
            }
            else if (_this.languageSelected == "ODI") {
                _this.src.setAttribute("src", window.baseUrl + "questionSounds/NSF-1B-G6/ODI/NSF-1-G6-b.mp3");
                //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            }
        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },

    stopvoice: function () {

        if (_this.playQuestionSound) {
            if (_this.playQuestionSound.contains(_this.src)) {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            if (!_this.playQuestionSound.paused) {
                console.log("here");
                _this.playQuestionSound.pause();
                _this.playQuestionSound.currentTime = 0.0;
            }
            _this.playQuestionSound = null;
            _this.src = null;
        }

        if (_this.celebrationSound) {
            if (_this.celebrationSound.isPlaying) {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }
    },

};