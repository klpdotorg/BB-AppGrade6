Game.GMS_03_G6level1 = function () { };

Game.GMS_03_G6level1.prototype = {
  init: function (game) {
    _this = this;
    //* language is passed as parameter.
    _this.languageSelected = localStorage.getItem("language");

    if (_this.languageSelected == null
      || _this.languageSelected == " "
      || _this.languageSelected == "") {
      _this.languageSelected = "ENG";
    }
    else console.log("Language selected: " + _this.languageSelected);

    telInitializer.gameIdInit("GMS_03_G6", gradeSelected);
    console.log(gameID,"gameID...");
  },


  preload: function (game) {
    if (!window.grade5SG5) {

      window.grade5SG5 = true;
      this.load.image('commonBg2', window.baseUrl + 'assets/commonAssets/commonBg2.png');

      this.load.audio('WrongCelebrationSound', window.baseUrl + 'sounds/WrongCelebrationSound.mp3');
      this.load.audio('ClickSound', window.baseUrl + 'sounds/ClickSound.mp3');
      this.load.audio('celebration', window.baseUrl + 'sounds/celebration.mp3');
      this.load.image('Level42C_timer', window.baseUrl + 'assets/commonAssets/timerBg.png');
      this.load.image('Level42C_Topbar', window.baseUrl + 'assets/commonAssets/topbar.png');
      this.load.image('prgressbarOutLine', window.baseUrl + 'assets/commonAssets/prgressbarOutLine.png');
      this.load.image('preloadBar', window.baseUrl + 'assets/commonAssets/prgressbar.png');


      //GAME ASSETS  
      this.load.atlas('grade11_speaker', window.baseUrl + 'assets/commonAssets/grade11_speaker.png', window.baseUrl + 'assets/commonAssets/grade11_speaker.json');
      this.load.atlas('starAnim1', window.baseUrl + 'assets/commonAssets/starAnim1.png', window.baseUrl + 'assets/commonAssets/starAnim1.json');
      this.load.atlas('newCommonBackBtnForAll', window.baseUrl + 'assets/commonAssets/newBackBtn.png', window.baseUrl + 'assets/commonAssets/newBackBtn.json');

      //sg23.1.5
      this.load.atlas('SG23_1_5ball', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/ball.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/ball.json');
      this.load.atlas('SG23_1_5box', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/box.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/box.json');
      this.load.atlas('SG23_1_5carrot', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/carrot.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/carrot.json');
      this.load.atlas('SG23_1_5cone', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/cone.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/cone.json');
      this.load.atlas('SG23_1_5cone1', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/cone1.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/cone1.json');
      this.load.atlas('SG23_1_5cube', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/cube.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/cube.json');
      //  this.load.atlas('SG23_1_5cutter', window.baseUrl+ 'assets/gradeAssets/GMS-03-G6/cutter.png', window.baseUrl+ 'assets/gradeAssets/GMS-03-G6/JSON/cutter.json');
      this.load.atlas('SG23_1_5donut', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/donut.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/donut.json');
      this.load.atlas('SG23_1_5drum', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/drum.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/drum.json');
      this.load.atlas('SG23_1_5heart', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/heart.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/heart.json');
      this.load.atlas('SG23_1_5house', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/house.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/house.json');
      this.load.atlas('SG23_1_5moon', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/moon.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/moon.json');
      this.load.atlas('SG23_1_5nopark', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/nopark.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/nopark.json');
      //this.load.atlas('SG23_1_5plus',  window.baseUrl+ 'assets/gradeAssets/GMS-03-G6/plus.png',  window.baseUrl+ 'assets/gradeAssets/GMS-03-G6/JSON/plus.json');
      this.load.atlas('SG23_1_5shape1', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/shape1.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/shape1.json');
      this.load.atlas('SG23_1_5shape2', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/shape2.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/shape2.json');
      this.load.atlas('SG23_1_5shape3', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/shape3.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/shape3.json');
      this.load.atlas('SG23_1_5shape4', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/shape4.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/shape4.json');
      this.load.atlas('SG23_1_5shape5', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/shape5.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/shape5.json');
      this.load.atlas('SG23_1_5strainer', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/strainer.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/strainer.json');
      this.load.atlas('SG23_1_5suitcase', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/suitcase.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/suitcase.json');

      //sg23.2.5
      this.load.image('SG23_2_5book', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/book.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/Box.json');
      this.load.atlas('SG23_2_5Box', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/Box1 (1).png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/Box1.json');
      this.load.atlas('SG23_2_5ink1', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/ink1.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/ink1.json');
      this.load.atlas('SG23_2_5ink2', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/ink2.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/ink2.json');
      this.load.atlas('SG23_2_5ink3', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/ink3.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/ink3.json');
      this.load.atlas('SG23_2_5ink6', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/ink6.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/ink6.json');
      this.load.atlas('SG23_2_5ink7', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/ink7.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/ink7.json');
      this.load.atlas('SG23_2_5ink9', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/ink9.png', window.baseUrl + 'assets/gradeAssets/GMS-03-G6/JSON/ink9.json');
    }

  },

  create: function (game) {
    _this.noofAttempts = 0;
    _this.AnsTimerCount = 0;
    _this.sceneCount = 0;
    _this.questionid = null;

    _this.amplify = null;


    _this.wrong = true;
    _this.qArrays;
    _this.speaker;
    _this.celebration;
    _this.timerDisplay;
    _this.rightmark;
    _this.background;
    _this.click3;
    _this.anim4;
    _this.wmusic;
    _this.clickSound;
    _this.starsGroup;
    _this.snapsound;
    _this.questioNo = 0;
    _this.wrongAnswer = false;
    _this.shake = new Phaser.Plugin.Shake(game);
    game.plugins.add(_this.shake);
    _this.sceneCount = 0;
    _this.rightCount = 0;
    _this.no11 = 0;
    _this.no22 = 0;
    _this.count = 0;
    _this.count1 = 0;
    _this.minutes = 0;
    _this.seconds = 0;
    _this.counterForTimer = 0;
    _this.correct = 0;
    _this.celebration = false;
    _this.soundplayed = false;

    // //* User Progress variables for BB++ app
    // _this.userHasPlayed = 0;
    // _this.timeinMinutes;
    // _this.timeinSeconds;
    // _this.game_id;
    // _this.score = 0;
    // _this.gradeTopics;
    _this.microConcepts;
    // _this.grade;

    _this.qArrays = new Array();
    _this.qArrays1 = new Array();
    _this.qArrays2 = new Array();
    _this.qArrays3 = new Array();

    _this.qArrays1 = [1, 3, 8];
    _this.qArrays2 = [2, 7];
    _this.qArrays3 = [4, 5, 6, 9, 10];

    _this.qArrays1 = _this.shuffle(_this.qArrays1);
    _this.qArrays2 = _this.shuffle(_this.qArrays2);
    _this.qArrays3 = _this.shuffle(_this.qArrays3);

    for (var i = 0; i < 2; i++) {
      _this.qArrays.push(_this.qArrays1[i]);
    }
    for (var j = 0; j < 1; j++) {
      _this.qArrays.push(_this.qArrays2[j]);
    }
    for (var j = 0; j < 3; j++) {
      _this.qArrays.push(_this.qArrays3[j]);
    }

    console.log(_this.qArrays);

    _this.background = _this.add.tileSprite(0, 0, _this.world.width, _this.world.height, 'commonBg2');

    _this.topbar = _this.add.sprite(0, 0, 'Level42C_Topbar');
    _this.topbar.scale.setTo(1, 1.1);

    _this.backbtn = _this.add.sprite(10, 6, 'newCommonBackBtnForAll');
    _this.backbtn.inputEnabled = true;
    _this.backbtn.input.useHandCursor = true;
    _this.backbtn.events.onInputDown.add(function () {
      // _this.stopVoice();
      _this.time.events.removeAll();
      _this.backbtn.events.onInputDown.removeAll();

      _this.time.events.add(50, function () {
        _this.state.start('grade6Geometry', true, false);
      });
    });

    _this.speaker = _this.add.button(620, 9, 'grade11_speaker', function () {
      _this.clickSound = _this.add.audio('ClickSound');
      _this.clickSound.play();
      _this.getVoice();
    }, _this);

    _this.timebg = _this.add.sprite(320, 9, 'Level42C_timer');
    _this.timebg.scale.setTo(1, 1);

    _this.timeDisplay = _this.add.text(345, 25, _this.minutes + ' : ' + _this.seconds);
    _this.timeDisplay.anchor.setTo(0.5);
    _this.timeDisplay.align = 'center';
    _this.timeDisplay.font = 'myfont';
    _this.timeDisplay.fontSize = 20;
    _this.timeDisplay.fill = '#ADFF2F';


    _this.generateStarsForTheScene(6);
    _this.getQuestion();
    _this.getVoice();
  },

  updateTimer: function () {
    _this.counterForTimer++;
    // //console.log("lololil"+_this.counterForTimer);
    if (_this.counterForTimer > 59) {
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
      if (_this.counterForTimer < 10)
        _this.seconds = '0' + _this.counterForTimer;
      else
        _this.seconds = _this.counterForTimer;
    }
    _this.timeDisplay.setText(_this.minutes + ':' + _this.seconds);
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
    if (!_this.timer) {
      _this.timer = _this.time.create(false);

      //  Set a TimerEvent to occur after 2 seconds
      _this.timer.loop(1000, function () {
        _this.AnsTimerCount++;
      }, this);
      //  Start the timer running - this is important!
      //  It won't start automatically, allowing you to hook it to button events and the like.
      _this.timer.start();
    }

    /**************************************************************************/
    _this.timer1 = _this.time.create(false);
    _this.timer1.loop(1000, function () {
      _this.updateTimer();
    }, _this);
    _this.timer1.start();

    console.log("get" + _this.no11);
    _this.speaker.inputEnabled = true;
    _this.speaker.input.useHandCursor = true;
    _this.questionid = 1;
    //no11 = 0;


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
      case 10: _this.gotoTenthQuestion();
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

    _this.questioNo = 1;

    _this.getVoice();

    _this.shapeGrp = _this.add.group();

    _this.image1 = _this.add.sprite(260, 150, 'SG23_1_5shape5');
    _this.image1.anchor.setTo(0.5);
    _this.image1.scale.setTo(1, 1);
    _this.image1.name = "img1";
    _this.image1.inputEnabled = true;
    _this.image1.input.useHandCursor = true;
    _this.image1.events.onInputDown.add(_this.clicked, _this);

    _this.image2 = _this.add.sprite(620, 146, 'SG23_1_5moon');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1, 1);
    _this.image2.name = "img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked, _this);

    _this.shapeGrp.add(_this.image1);
    _this.shapeGrp.add(_this.image2);

    _this.shapeGrp1 = _this.add.group();

    _this.image3 = _this.add.sprite(265, 390, 'SG23_1_5shape1');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1, 1);
    _this.image3.name = "img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked, _this);

    _this.image4 = _this.add.sprite(620, 380, 'SG23_1_5shape3');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(1.2, 1.2);
    _this.image4.name = "img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked, _this);

    _this.shapeGrp1.add(_this.image3);
    _this.shapeGrp1.add(_this.image4);

    if (_this.wrongAnswer == false) {
      _this.image1.visible = false;
      _this.image2.visible = false;
    }

    if (_this.wrongAnswer == false) {
      _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
      tween.to({ y: 0 }, 1500, 'Linear', true, 0);
      tween.onComplete.add(function () {

        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.shapeGrp.y = -600;
        console.log("11111 " + _this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height + 70 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height - 50 - _this.shapeGrp.height }, 1000, "Linear", false);
        _this.tween3 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height - _this.shapeGrp.height }, 1500, Phaser.Easing.Bounce.Out, false);

        _this.tween1.chain(_this.tween2);
        _this.tween2.chain(_this.tween3);

      }, _this);
    }
  },

  update: function () {

    _this.physics.arcade.collide([_this.shapeGrp]);

  },

  clicked: function (target) {

    if (_this.questioNo == 1) {
      if (target.name == "img1") {
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
        target.frame = 1;
        _this.image1.inputEnabled = false;
        _this.image2.inputEnabled = false;
        _this.image3.inputEnabled = false;
        _this.image4.inputEnabled = false;
        _this.anim = _this.image1.animations.add('move');
        _this.anim.play(5);
        _this.time.events.add(1000, function () {
          _this.correctAns();
        }, _this);

      }
      else if (target.name == "img2") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image2);

      }
      else if (target.name == "img3") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image3);

      }
      else if (target.name == "img4") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image4);

      }
    }
    else if (_this.questioNo == 2) {
      if (target.name == "img1") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image1);

      }
      else if (target.name == "img2") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image2);

      }
      else if (target.name == "img3") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image3);

      }
      else if (target.name == "img4") {
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
        target.frame = 1;
        _this.image1.inputEnabled = false;
        _this.image2.inputEnabled = false;
        _this.image3.inputEnabled = false;
        _this.image4.inputEnabled = false;
        _this.time.events.add(1000, function () {
          _this.correctAns();
        }, _this);
      }
    }
    else if (_this.questioNo == 3) {
      if (target.name == "img1") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image1);

      }
      else if (target.name == "img2") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image2);

      }
      else if (target.name == "img3") {
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
        target.frame = 1;
        _this.image1.inputEnabled = false;
        _this.image2.inputEnabled = false;
        _this.image3.inputEnabled = false;
        _this.image4.inputEnabled = false;
        _this.anim = _this.image3.animations.add('move');
        _this.anim.play(5);
        _this.time.events.add(1000, function () {
          _this.correctAns();
        }, _this);
      }
      else if (target.name == "img4") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image4);

      }
    }
    else if (_this.questioNo == 7) {
      if (target.name == "img1") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image1);

      }
      else if (target.name == "img2") {
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
        target.frame = 1;
        _this.image1.inputEnabled = false;
        _this.image2.inputEnabled = false;
        _this.image3.inputEnabled = false;
        _this.image4.inputEnabled = false;
        _this.time.events.add(1000, function () {
          _this.correctAns();
        }, _this);

      }
      else if (target.name == "img3") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image3);

      }
      else if (target.name == "img4") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image4);

      }
    }
    else if (_this.questioNo == 8) {
      if (target.name == "img1") {
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
        target.frame = 1;
        _this.image1.inputEnabled = false;
        _this.image2.inputEnabled = false;
        _this.image3.inputEnabled = false;
        _this.image4.inputEnabled = false;
        _this.anim = _this.image1.animations.add('move');
        _this.anim.play(5);
        _this.time.events.add(1000, function () {
          _this.correctAns();
        }, _this);

      }
      else if (target.name == "img2") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image2);

      }
      else if (target.name == "img3") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image3);

      }
      else if (target.name == "img4") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image4);

      }
    }
  },

  selected: function (target) {

    if (_this.questioNo == 4) {
      if (target.name == "img2") {
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
        target.frame = 1;
        _this.image2.inputEnabled = false;
        _this.image3.inputEnabled = false;
        _this.image4.inputEnabled = false;
        _this.image5.inputEnabled = false;
        _this.time.events.add(800, function () {
          _this.correctAns();
        }, _this);

      }

      else if (target.name == "img3") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image3);

      }
      else if (target.name == "img4") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image4);

      }
      else if (target.name == "img5") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image5);

      }

    }
    else if (_this.questioNo == 5) {
      if (target.name == "img2") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image2);

      }
      else if (target.name == "img3") {
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
        target.frame = 1;
        _this.image2.inputEnabled = false;
        _this.image3.inputEnabled = false;
        _this.image4.inputEnabled = false;
        _this.image5.inputEnabled = false;
        _this.time.events.add(800, function () {
          _this.correctAns();
        }, _this);
      }
      else if (target.name == "img4") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image4);

      }
      else if (target.name == "img5") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image5);

      }

    }
    else if (_this.questioNo == 6) {
      if (target.name == "img2") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image2);

      }
      else if (target.name == "img3") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image3);

      }
      else if (target.name == "img4") {
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
        target.frame = 1;
        _this.image2.inputEnabled = false;
        _this.image3.inputEnabled = false;
        _this.image4.inputEnabled = false;
        _this.image5.inputEnabled = false;
        _this.time.events.add(800, function () {
          _this.correctAns();
        }, _this);
      }
      else if (target.name == "img5") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image5);

      }

    }
    else if (_this.questioNo == 9) {
      if (target.name == "img2") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image2);

      }
      else if (target.name == "img3") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image3);

      }
      else if (target.name == "img4") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image4);
      }
      else if (target.name == "img5") {
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
        target.frame = 1;
        _this.image2.inputEnabled = false;
        _this.image3.inputEnabled = false;
        _this.image4.inputEnabled = false;
        _this.image5.inputEnabled = false;
        _this.time.events.add(800, function () {
          _this.correctAns();
        }, _this);

      }

    }
    else if (_this.questioNo == 10) {
      if (target.name == "img2") {
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
        target.frame = 1;
        _this.image2.inputEnabled = false;
        _this.image3.inputEnabled = false;
        _this.image4.inputEnabled = false;
        _this.image5.inputEnabled = false;
        _this.time.events.add(800, function () {
          _this.correctAns();
        }, _this);

      }

      else if (target.name == "img3") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image3);

      }
      else if (target.name == "img4") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image4);

      }
      else if (target.name == "img5") {
        _this.noofAttempts++;
        _this.wmusic = _this.add.audio('WrongCelebrationSound');
        _this.wmusic.play();
        _this.shake.shake(10, _this.image5);

      }

    }
  },

  gotoSecondQuestion: function () {

    _this.questioNo = 2;

    _this.getVoice();

    _this.shapeGrp = _this.add.group();

    _this.image1 = _this.add.sprite(265, 170, 'SG23_1_5cube');
    _this.image1.anchor.setTo(0.5);
    _this.image1.scale.setTo(1.2, 1.2);
    _this.image1.name = "img1";
    _this.image1.inputEnabled = true;
    _this.image1.input.useHandCursor = true;
    _this.image1.events.onInputDown.add(_this.clicked, _this);

    _this.image2 = _this.add.sprite(620, 170, 'SG23_1_5suitcase');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1.1, 1.1);
    _this.image2.name = "img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked, _this);

    _this.shapeGrp.add(_this.image1);
    _this.shapeGrp.add(_this.image2);

    _this.shapeGrp1 = _this.add.group();

    _this.image3 = _this.add.sprite(265, 400, 'SG23_1_5donut');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1.2, 1.2);
    _this.image3.name = "img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked, _this);

    _this.image4 = _this.add.sprite(620, 400, 'SG23_1_5cone');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(1.2, 1.2);
    _this.image4.name = "img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked, _this);

    _this.shapeGrp1.add(_this.image3);
    _this.shapeGrp1.add(_this.image4);

    if (_this.wrongAnswer == false) {
      _this.image1.visible = false;
      _this.image2.visible = false;
    }

    if (_this.wrongAnswer == false) {
      _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
      tween.to({ y: 0 }, 1500, 'Linear', true, 0);
      tween.onComplete.add(function () {

        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.shapeGrp.y = -600;
        console.log("11111 " + _this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height + 70 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height - 40 - _this.shapeGrp.height }, 1000, "Linear", false);
        _this.tween3 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height - _this.shapeGrp.height }, 1500, Phaser.Easing.Bounce.Out, false);

        _this.tween1.chain(_this.tween2);
        _this.tween2.chain(_this.tween3);

      }, _this);
    }

  },

  gotoThirdQuestion: function () {

    _this.questioNo = 3;

    _this.getVoice();

    _this.shapeGrp = _this.add.group();

    _this.image1 = _this.add.sprite(260, 185, 'SG23_1_5shape3');
    _this.image1.anchor.setTo(0.5);
    _this.image1.scale.setTo(1, 1);
    _this.image1.name = "img1";
    _this.image1.inputEnabled = true;
    _this.image1.input.useHandCursor = true;
    _this.image1.events.onInputDown.add(_this.clicked, _this);

    _this.image2 = _this.add.sprite(620, 180, 'SG23_1_5house');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1, 1);
    _this.image2.name = "img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked, _this);

    _this.shapeGrp.add(_this.image1);
    _this.shapeGrp.add(_this.image2);

    _this.shapeGrp1 = _this.add.group();

    _this.image3 = _this.add.sprite(265, 400, 'SG23_1_5shape4');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1, 1);
    _this.image3.name = "img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked, _this);

    _this.image4 = _this.add.sprite(620, 400, 'SG23_1_5moon');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(1, 1);
    _this.image4.name = "img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked, _this);

    _this.shapeGrp1.add(_this.image3);
    _this.shapeGrp1.add(_this.image4);

    if (_this.wrongAnswer == false) {
      _this.image1.visible = false;
      _this.image2.visible = false;
    }

    if (_this.wrongAnswer == false) {
      _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
      tween.to({ y: 0 }, 1500, 'Linear', true, 0);
      tween.onComplete.add(function () {

        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.shapeGrp.y = -600;
        console.log("11111 " + _this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height + 70 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height - 50 - _this.shapeGrp.height }, 1000, "Linear", false);
        _this.tween3 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height - _this.shapeGrp.height }, 1500, Phaser.Easing.Bounce.Out, false);

        _this.tween1.chain(_this.tween2);
        _this.tween2.chain(_this.tween3);

      }, _this);
    }

  },

  gotoFourthQuestion: function () {

    _this.questioNo = 4;
    if (_this.soundplayed == false) {
      _this.getVoice();
      _this.soundplayed = true;
    }

    _this.shapesGrp = _this.add.group();
    _this.shapes = _this.add.group();

    _this.shapesGrp.x = -1000;
    var tween = _this.add.tween(_this.shapesGrp);
    tween.to({ x: 0 }, 2000, 'Linear', true, 0);

    _this.shapes.x = -1000;
    var tween = _this.add.tween(_this.shapes);
    tween.to({ x: 0 }, 2000, 'Linear', true, 0);

    _this.image1 = _this.add.sprite(250, 290, 'SG23_2_5book');
    _this.image1.anchor.setTo(0.5);
    _this.image1.scale.setTo(1, 1);
    _this.image1.name = "img1";

    _this.image2 = _this.add.sprite(600, 180, 'SG23_2_5Box');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1, 1);
    _this.image2.name = "img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.selected, _this);

    _this.image3 = _this.add.sprite(820, 180, 'SG23_2_5Box');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1, 1);
    _this.image3.name = "img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.selected, _this);

    _this.image4 = _this.add.sprite(600, 390, 'SG23_2_5Box');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(1, 1);
    _this.image4.name = "img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.selected, _this);

    _this.image5 = _this.add.sprite(820, 390, 'SG23_2_5Box');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(1, 1);
    _this.image5.name = "img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.selected, _this);

    _this.image6 = _this.add.sprite(160, 260, 'SG23_2_5ink9');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(1.1, 1.1);
    _this.image6.name = "img6";
    _this.image6.frame = 0;

    _this.image7 = _this.add.sprite(600, 180, 'SG23_2_5ink9');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(1.1, 1.1);
    _this.image7.name = "img7";
    _this.image7.frame = 1;

    _this.image8 = _this.add.sprite(820, 180, 'SG23_2_5ink9');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(1.1, 1.1);
    _this.image8.name = "img8";
    _this.image8.frame = 3;

    _this.image9 = _this.add.sprite(600, 390, 'SG23_2_5ink9');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(1.1, 1.1);
    _this.image9.name = "img9";
    _this.image9.frame = 0;

    _this.image10 = _this.add.sprite(820, 390, 'SG23_2_5ink9');
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(1.1, 1.1);
    _this.image10.name = "img10";
    _this.image10.frame = 2;

    _this.shapesGrp.add(_this.image3);
    _this.shapesGrp.add(_this.image4);
    _this.shapesGrp.add(_this.image5);
    _this.shapesGrp.add(_this.image8);
    _this.shapesGrp.add(_this.image9);
    _this.shapesGrp.add(_this.image10);

    _this.shapes.add(_this.image1);
    _this.shapes.add(_this.image2);
    _this.shapes.add(_this.image6);
    _this.shapes.add(_this.image7);


  },

  gotoFifthQuestion: function () {

    _this.questioNo = 5;

    if (_this.soundplayed == false) {
      _this.getVoice();
      _this.soundplayed = true;
    }
    _this.shapesGrp = _this.add.group();
    _this.shapes = _this.add.group();

    _this.shapesGrp.x = -1000;
    var tween = _this.add.tween(_this.shapesGrp);
    tween.to({ x: 0 }, 2000, 'Linear', true, 0);

    _this.shapes.x = -1000;
    var tween = _this.add.tween(_this.shapes);
    tween.to({ x: 0 }, 2000, 'Linear', true, 0);

    _this.image1 = _this.add.sprite(250, 290, 'SG23_2_5book');
    _this.image1.anchor.setTo(0.5);
    _this.image1.scale.setTo(1, 1);
    _this.image1.name = "img1";

    _this.image2 = _this.add.sprite(600, 180, 'SG23_2_5Box');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1, 1);
    _this.image2.name = "img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.selected, _this);

    _this.image3 = _this.add.sprite(820, 180, 'SG23_2_5Box');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1, 1);
    _this.image3.name = "img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.selected, _this);

    _this.image4 = _this.add.sprite(600, 390, 'SG23_2_5Box');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(1, 1);
    _this.image4.name = "img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.selected, _this);

    _this.image5 = _this.add.sprite(820, 390, 'SG23_2_5Box');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(1, 1);
    _this.image5.name = "img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.selected, _this);

    _this.image6 = _this.add.sprite(150, 260, 'SG23_2_5ink2');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(1, 1);
    _this.image6.name = "img6";
    _this.image6.frame = 0;

    _this.image7 = _this.add.sprite(600, 180, 'SG23_2_5ink2');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(1, 1);
    _this.image7.name = "img7";
    _this.image7.frame = 2;

    _this.image8 = _this.add.sprite(820, 180, 'SG23_2_5ink2');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(1, 1);
    _this.image8.name = "img8";
    _this.image8.frame = 1;

    _this.image9 = _this.add.sprite(600, 390, 'SG23_2_5ink2');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(1, 1);
    _this.image9.name = "img9";
    _this.image9.frame = 3;

    _this.image10 = _this.add.sprite(820, 390, 'SG23_2_5ink2');
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(1, 1);
    _this.image10.name = "img10";
    _this.image10.frame = 0;

    _this.shapesGrp.add(_this.image2);
    _this.shapesGrp.add(_this.image4);
    _this.shapesGrp.add(_this.image5);
    _this.shapesGrp.add(_this.image7);
    _this.shapesGrp.add(_this.image9);
    _this.shapesGrp.add(_this.image10);

    _this.shapes.add(_this.image1);
    _this.shapes.add(_this.image3);
    _this.shapes.add(_this.image6);
    _this.shapes.add(_this.image8);

  },

  gotoSixthQuestion: function () {

    _this.questioNo = 6;

    if (_this.soundplayed == false) {
      _this.getVoice();
      _this.soundplayed = true;
    }
    _this.shapesGrp = _this.add.group();
    _this.shapes = _this.add.group();

    _this.shapesGrp.x = -1000;
    var tween = _this.add.tween(_this.shapesGrp);
    tween.to({ x: 0 }, 2000, 'Linear', true, 0);

    _this.shapes.x = -1000;
    var tween = _this.add.tween(_this.shapes);
    tween.to({ x: 0 }, 2000, 'Linear', true, 0);

    _this.image1 = _this.add.sprite(250, 290, 'SG23_2_5book');
    _this.image1.anchor.setTo(0.5);
    _this.image1.scale.setTo(1, 1);
    _this.image1.name = "img1";

    _this.image2 = _this.add.sprite(600, 180, 'SG23_2_5Box');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1, 1);
    _this.image2.name = "img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.selected, _this);

    _this.image3 = _this.add.sprite(820, 180, 'SG23_2_5Box');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1, 1);
    _this.image3.name = "img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.selected, _this);

    _this.image4 = _this.add.sprite(600, 390, 'SG23_2_5Box');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(1, 1);
    _this.image4.name = "img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.selected, _this);

    _this.image5 = _this.add.sprite(820, 390, 'SG23_2_5Box');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(1, 1);
    _this.image5.name = "img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.selected, _this);

    _this.image6 = _this.add.sprite(160, 270, 'SG23_2_5ink3');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(1, 1);
    _this.image6.name = "img6";
    _this.image6.frame = 0;

    _this.image7 = _this.add.sprite(600, 180, 'SG23_2_5ink3');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(1, 1);
    _this.image7.name = "img7";
    _this.image7.frame = 1;

    _this.image8 = _this.add.sprite(820, 180, 'SG23_2_5ink3');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(1, 1);
    _this.image8.name = "img8";
    _this.image8.frame = 2;

    _this.image9 = _this.add.sprite(600, 390, 'SG23_2_5ink3');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(1, 1);
    _this.image9.name = "img9";
    _this.image9.frame = 3;

    _this.image10 = _this.add.sprite(820, 390, 'SG23_2_5ink3');
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(1, 1);
    _this.image10.name = "img10";
    _this.image10.frame = 0;

    _this.shapesGrp.add(_this.image2);
    _this.shapesGrp.add(_this.image3);
    _this.shapesGrp.add(_this.image5);
    _this.shapesGrp.add(_this.image7);
    _this.shapesGrp.add(_this.image8);
    _this.shapesGrp.add(_this.image10);

    _this.shapes.add(_this.image1);
    _this.shapes.add(_this.image4);
    _this.shapes.add(_this.image6);
    _this.shapes.add(_this.image9);

  },

  gotoSeventhQuestion: function () {

    _this.questioNo = 7;

    _this.getVoice();

    _this.shapeGrp = _this.add.group();

    _this.image1 = _this.add.sprite(260, 170, 'SG23_1_5shape4');
    _this.image1.anchor.setTo(0.5);
    _this.image1.scale.setTo(1, 1);
    _this.image1.name = "img1";
    _this.image1.inputEnabled = true;
    _this.image1.input.useHandCursor = true;
    _this.image1.events.onInputDown.add(_this.clicked, _this);

    _this.image2 = _this.add.sprite(620, 185, 'SG23_1_5house');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1, 1);
    _this.image2.name = "img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked, _this);

    _this.shapeGrp.add(_this.image1);
    _this.shapeGrp.add(_this.image2);

    _this.shapeGrp1 = _this.add.group();

    _this.image3 = _this.add.sprite(260, 400, 'SG23_1_5heart');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1, 1);
    _this.image3.name = "img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked, _this);

    _this.image4 = _this.add.sprite(620, 405, 'SG23_1_5shape2');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(1, 1);
    _this.image4.name = "img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked, _this);

    _this.shapeGrp1.add(_this.image3);
    _this.shapeGrp1.add(_this.image4);

    if (_this.wrongAnswer == false) {
      _this.image1.visible = false;
      _this.image2.visible = false;
    }

    if (_this.wrongAnswer == false) {
      _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
      tween.to({ y: 0 }, 1500, 'Linear', true, 0);
      tween.onComplete.add(function () {

        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.shapeGrp.y = -600;
        console.log("11111 " + _this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height + 70 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height - 40 - _this.shapeGrp.height }, 1000, "Linear", false);
        _this.tween3 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height - _this.shapeGrp.height }, 1500, Phaser.Easing.Bounce.Out, false);

        _this.tween1.chain(_this.tween2);
        _this.tween2.chain(_this.tween3);

      }, _this);
    }

  },

  gotoEighthQuestion: function () {

    _this.questioNo = 8;

    _this.getVoice();

    _this.shapeGrp = _this.add.group();

    _this.image1 = _this.add.sprite(260, 185, 'SG23_1_5cone1');
    _this.image1.anchor.setTo(0.5);
    _this.image1.scale.setTo(1.3, 1.3);
    _this.image1.name = "img1";
    _this.image1.inputEnabled = true;
    _this.image1.input.useHandCursor = true;
    _this.image1.events.onInputDown.add(_this.clicked, _this);

    _this.image2 = _this.add.sprite(620, 190, 'SG23_1_5carrot');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1, 1);
    _this.image2.name = "img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked, _this);

    _this.shapeGrp.add(_this.image1);
    _this.shapeGrp.add(_this.image2);

    _this.shapeGrp1 = _this.add.group();

    _this.image3 = _this.add.sprite(275, 400, 'SG23_1_5strainer');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1.2, 1.2);
    _this.image3.name = "img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked, _this);

    _this.image4 = _this.add.sprite(620, 410, 'SG23_1_5ball');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(1.4, 1.4);
    _this.image4.name = "img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked, _this);

    _this.shapeGrp1.add(_this.image3);
    _this.shapeGrp1.add(_this.image4);

    if (_this.wrongAnswer == false) {
      _this.image1.visible = false;
      _this.image2.visible = false;
    }

    if (_this.wrongAnswer == false) {
      _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
      tween.to({ y: 0 }, 1500, 'Linear', true, 0);
      tween.onComplete.add(function () {

        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.shapeGrp.y = -600;
        console.log("11111 " + _this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height + 70 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height - 30 - _this.shapeGrp.height }, 1000, "Linear", false);
        _this.tween3 = _this.add.tween(_this.shapeGrp).to({ y: _this.shapeGrp1.height - _this.shapeGrp.height }, 1500, Phaser.Easing.Bounce.Out, false);

        _this.tween1.chain(_this.tween2);
        _this.tween2.chain(_this.tween3);

      }, _this);
    }
  },

  gotoNinthQuestion: function () {

    _this.questioNo = 9;

    if (_this.soundplayed == false) {
      _this.getVoice();
      _this.soundplayed = true;
    }

    _this.shapesGrp = _this.add.group();
    _this.shapes = _this.add.group();

    _this.shapesGrp.x = -1000;
    var tween = _this.add.tween(_this.shapesGrp);
    tween.to({ x: 0 }, 2000, 'Linear', true, 0);

    _this.shapes.x = -1000;
    var tween = _this.add.tween(_this.shapes);
    tween.to({ x: 0 }, 2000, 'Linear', true, 0);

    _this.image1 = _this.add.sprite(250, 290, 'SG23_2_5book');
    _this.image1.anchor.setTo(0.5);
    _this.image1.scale.setTo(1, 1);
    _this.image1.name = "img1";

    _this.image2 = _this.add.sprite(600, 180, 'SG23_2_5Box');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1, 1);
    _this.image2.name = "img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.selected, _this);

    _this.image3 = _this.add.sprite(820, 180, 'SG23_2_5Box');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1, 1);
    _this.image3.name = "img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.selected, _this);

    _this.image4 = _this.add.sprite(600, 390, 'SG23_2_5Box');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(1, 1);
    _this.image4.name = "img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.selected, _this);

    _this.image5 = _this.add.sprite(820, 390, 'SG23_2_5Box');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(1, 1);
    _this.image5.name = "img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.selected, _this);

    _this.image6 = _this.add.sprite(140, 280, 'SG23_2_5ink7');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(1.1, 1.1);
    _this.image6.name = "img6";
    _this.image6.frame = 0;

    _this.image7 = _this.add.sprite(590, 200, 'SG23_2_5ink7');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(1.1, 1.1);
    _this.image7.name = "img7";
    _this.image7.frame = 0;

    _this.image8 = _this.add.sprite(810, 180, 'SG23_2_5ink7');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(1.1, 1.1);
    _this.image8.name = "img8";
    _this.image8.frame = 3;

    _this.image9 = _this.add.sprite(600, 375, 'SG23_2_5ink7');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(1.1, 1.1);
    _this.image9.name = "img9";
    _this.image9.frame = 2;

    _this.image10 = _this.add.sprite(830, 400, 'SG23_2_5ink7');
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(1.1, 1.1);
    _this.image10.name = "img10";
    _this.image10.frame = 1;

    _this.shapesGrp.add(_this.image2);
    _this.shapesGrp.add(_this.image3);
    _this.shapesGrp.add(_this.image4);
    _this.shapesGrp.add(_this.image7);
    _this.shapesGrp.add(_this.image8);
    _this.shapesGrp.add(_this.image9);

    _this.shapes.add(_this.image1);
    _this.shapes.add(_this.image5);
    _this.shapes.add(_this.image6);
    _this.shapes.add(_this.image10);
  },

  gotoTenthQuestion: function () {

    _this.questioNo = 10;

    if (_this.soundplayed == false) {
      _this.getVoice();
      _this.soundplayed = true;
    }

    _this.shapesGrp = _this.add.group();
    _this.shapes = _this.add.group();

    _this.shapesGrp.x = -1000;
    var tween = _this.add.tween(_this.shapesGrp);
    tween.to({ x: 0 }, 2000, 'Linear', true, 0);

    _this.shapes.x = -1000;
    var tween = _this.add.tween(_this.shapes);
    tween.to({ x: 0 }, 2000, 'Linear', true, 0);

    _this.image1 = _this.add.sprite(250, 290, 'SG23_2_5book');
    _this.image1.anchor.setTo(0.5);
    _this.image1.scale.setTo(1, 1);
    _this.image1.name = "img1";

    _this.image2 = _this.add.sprite(600, 180, 'SG23_2_5Box');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1, 1);
    _this.image2.name = "img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.selected, _this);

    _this.image3 = _this.add.sprite(820, 180, 'SG23_2_5Box');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1, 1);
    _this.image3.name = "img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.selected, _this);

    _this.image4 = _this.add.sprite(600, 390, 'SG23_2_5Box');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(1, 1);
    _this.image4.name = "img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.selected, _this);

    _this.image5 = _this.add.sprite(820, 390, 'SG23_2_5Box');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(1, 1);
    _this.image5.name = "img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.selected, _this);

    _this.image6 = _this.add.sprite(170, 270, 'SG23_2_5ink6');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(1.1, 1.1);
    _this.image6.name = "img6";
    _this.image6.frame = 0;

    _this.image7 = _this.add.sprite(610, 180, 'SG23_2_5ink6');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(1.1, 1.1);
    _this.image7.name = "img7";
    _this.image7.frame = 3;

    _this.image8 = _this.add.sprite(820, 200, 'SG23_2_5ink6');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(1.1, 1.1);
    _this.image8.name = "img8";
    _this.image8.frame = 1;

    _this.image9 = _this.add.sprite(600, 410, 'SG23_2_5ink6');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(1.1, 1.1);
    _this.image9.name = "img9";
    _this.image9.frame = 2;

    _this.image10 = _this.add.sprite(830, 400, 'SG23_2_5ink6');
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(1.1, 1.1);
    _this.image10.name = "img10";
    _this.image10.frame = 0;

    _this.shapesGrp.add(_this.image3);
    _this.shapesGrp.add(_this.image4);
    _this.shapesGrp.add(_this.image5);
    _this.shapesGrp.add(_this.image8);
    _this.shapesGrp.add(_this.image9);
    _this.shapesGrp.add(_this.image10);

    _this.shapes.add(_this.image1);
    _this.shapes.add(_this.image2);
    _this.shapes.add(_this.image6);
    _this.shapes.add(_this.image7);
  },

  removeCelebration: function () {

    console.log("removeCeleb");
    //	_this.celebration = false;
    console.log("no" + _this.no11);
    _this.correct = 0;
    // _this.count=0;

    _this.no11++;

    _this.noofAttempts = 0;
    _this.AnsTimerCount = 0;

    if (_this.no11 < 6) {
      _this.wrong = true;
      _this.timer1.stop();
      _this.count = 0;
      if (_this.shapeGrp1)
        _this.shapeGrp1.destroy();
      if (_this.shapeGrp)
        _this.shapeGrp.destroy();
      if (_this.shapesGrp1)
        _this.shapesGrp1.destroy();
      if (_this.shapes)
        _this.shapes.destroy();
      _this.countIncrement = 0;
      //_this.sceneCount++;
      _this.time.events.add(1000, function () {
        _this.getQuestion();
      }, _this);

    }

    else {

      _this.stopvoice();
      _this.timer1.stop();
      _this.timer1 = null;
      _this.countIncrement = 0;
      _this.counterForTimer = null;
      //_this.state.start('score',true,false);
      this.state.start('score', true, false, gameID,_this.microConcepts);
    }
  },

  correctAns: function (target) {
    _this.score++;
    _this.stopvoice();

    _this.noofAttempts++;

    // _this.currentTime = window.timeSaveFunc();
    // _this.interactEvent = 
    //      { 
    //           id_game_play: _this.savedVar, 
    //           id_question: _this.questionid+"#SCR-"+_this.sceneCount,
    //           date_time_event: _this.currentTime, 
    //           event_type: "click"+target, 
    //           res_id: target, 
    //           access_token: window.acctkn 
    //      } 

    //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;


    if (_this.timer) {
      _this.timer.stop();
      _this.timer = null;
    }
    // _this.currentTime = window.timeSaveFunc();

    //    _this.saveAsment = 
    //    { 
    //        id_game_play: _this.savedVar,
    //        id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
    //        pass: "yes",
    //        time2answer: _this.AnsTimerCount,
    //        attempts: _this.noofAttempts,
    //        date_time_submission: _this.currentTime, 
    //        access_token: window.acctkn 
    //    }

    _this.sceneCount++;

    telInitializer.tele_saveAssessment(_this.questionid, "yes", _this.AnsTimerCount, _this.noofAttempts, _this.sceneCount);



    // _this.wrongAnswer = false;

    _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
    console.log(_this.starAnim);

    _this.starAnim.smoothed = false;
    _this.anim4 = _this.starAnim.animations.add('star');
    //     //* star Actions changes
    //     _this.userHasPlayed =1;
    //     _this.timeinMinutes = _this.minutes;
    //     _this.timeinSeconds = _this.seconds;
    //     _this.game_id = "GMS_03_G6";
    //     _this.grade = "6";
    //     _this.gradeTopics = "Shapes";
         _this.microConcepts = "Geometry";

    _this.anim4.play();
    console.log("correct11");
    _this.speaker.inputEnabled = false;
    _this.count1++;

    _this.celebration = true;

    _this.click3 = _this.add.audio('ClickSound');
    _this.click3.play();
    _this.cmusic = _this.add.audio('celebration');
    _this.cmusic.play();

    if (_this.questioNo == 4) {
      _this.shapesGrp.destroy();
      _this.time.events.add(2000, function () {
        _this.image2.frame = 0;
        var tween = _this.add.tween(_this.image2);
        tween.to({ x: 340, y: 260 }, 2000, 'Linear', true, 0);
        var tween = _this.add.tween(_this.image7);
        tween.to({ x: 340, y: 260 }, 2000, 'Linear', true, 0);
        _this.time.events.add(2000, function () {
          _this.image2.destroy();
        }, _this);
      }, _this);
      _this.time.events.add(6000, _this.removeCelebration, _this);
    }

    else if (_this.questioNo == 5) {
      _this.shapesGrp.destroy();
      _this.time.events.add(2000, function () {
        _this.image3.frame = 0;
        var tween = _this.add.tween(_this.image3);
        tween.to({ x: 350, y: 260 }, 2000, 'Linear', true, 0);
        var tween = _this.add.tween(_this.image8);
        tween.to({ x: 350, y: 260 }, 2000, 'Linear', true, 0);
        _this.time.events.add(2000, function () {
          _this.image3.destroy();
        }, _this);
      }, _this);

      _this.time.events.add(6000, _this.removeCelebration, _this);
    }

    else if (_this.questioNo == 6) {
      _this.shapesGrp.destroy();
      _this.time.events.add(2000, function () {
        _this.image4.frame = 0;
        var tween = _this.add.tween(_this.image4);
        tween.to({ x: 335, y: 270 }, 2000, 'Linear', true, 0);
        var tween = _this.add.tween(_this.image9);
        tween.to({ x: 335, y: 270 }, 2000, 'Linear', true, 0);
        _this.time.events.add(2000, function () {
          _this.image4.destroy();
        }, _this);
      }, _this);

      _this.time.events.add(6000, _this.removeCelebration, _this);
    }
    else if (_this.questioNo == 9) {
      _this.shapesGrp.destroy();
      _this.time.events.add(2000, function () {
        _this.image5.frame = 0;
        var tween = _this.add.tween(_this.image5);
        tween.to({ x: 360, y: 280 }, 2000, 'Linear', true, 0);
        var tween = _this.add.tween(_this.image10);
        tween.to({ x: 360, y: 280 }, 2000, 'Linear', true, 0);
        _this.time.events.add(2000, function () {
          _this.image5.destroy();
        }, _this);
      }, _this);

      _this.time.events.add(6000, _this.removeCelebration, _this);
    }

    else if (_this.questioNo == 10) {
      _this.shapesGrp.destroy();
      _this.time.events.add(2000, function () {
        _this.image2.frame = 0;
        var tween = _this.add.tween(_this.image2);
        tween.to({ x: 350, y: 270 }, 2000, 'Linear', true, 0);
        var tween = _this.add.tween(_this.image7);
        tween.to({ x: 350, y: 270 }, 2000, 'Linear', true, 0);
        _this.time.events.add(2000, function () {
          _this.image2.destroy();
        }, _this);
      }, _this);

      _this.time.events.add(6000, _this.removeCelebration, _this);
    }

    else if (_this.questioNo == 1, 2, 3, 7, 8) {
      _this.time.events.add(1500, _this.removeCelebration, _this);

    }
  },
  getVoice: function () {
    _this.stopvoice();
    _this.playQuestionSound = document.createElement('audio');
    _this.src = document.createElement('source');
    switch (_this.qArrays[_this.no11]) {
      case 1:
      case 3:
      case 8: _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMS-03-G6/" + _this.languageSelected + "/GMS-03-G6-a.mp3");
        break;
      case 2:
      case 7: _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMS-03-G6/" + _this.languageSelected + "/GMS-03-G6-b.mp3");
        break;

      case 4:
      case 5:
      case 6:
      case 9:
      case 10: _this.src.setAttribute("src", window.baseUrl + "questionSounds/GMS-03-G6/" + _this.languageSelected + "/GMS-03-G6-c.mp3");
        break;
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
  shutdown: function () {
    this.stopvoice();
  }
};






















