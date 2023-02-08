Game.downloadData = function () {

};

Game.downloadData.prototype = {

    init: function (user) {
        _this = this;
        _this.user = user;
        console.log(_this.user);
        screen.orientation.lock('portrait');
        AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_FULLSCREEN, null, null);
        _this.game.scale.setGameSize(540, 960);
    },

    preload: function (game) {
        /*var bmd = game.add.bitmapData(800,600);                
        bmd.ctx.beginPath();        
        bmd.ctx.lineWidth = "4";        
        bmd.ctx.strokeStyle = 'white';        
        bmd.ctx.setLineDash([2,3]);        
        bmd.ctx.moveTo(10, 10);        
        bmd.ctx.lineTo(400 , 400);        
        bmd.ctx.stroke();        
        bmd.ctx.closePath();        
        var sprite = game.add.sprite(200, 400, bmd);*/
    },

    create: function (game) {

        _this = this;
 
        _this.i = 0; 

        _this.basePath = cordova.file.externalRootDirectory + "Android/data/com.Akshara.HINBBplusplus/Files/Download/.gameFilesBB++V10_2/www/";

        _this.fullSize = 125433088;

        _this.zipFiles = [["Assets1.zip", 565373], ["Assets2.zip", 25572815], ["Assets4.zip", 66338462], ["questionSounds.zip", 29272691], ["sounds.zip", 3683747]];
        
        _this.counter = 0;
        _this.counter1 = 0;

        // _this.language = "en";

        _this.fileCheck = [
            [_this.basePath + "questionSounds/ALAS-01-G6/HIN", localStorage.getItem("language") + "/questionSounds.zip"],
            [_this.basePath + "assets/commonAssets", "Assets1.zip"],
            [_this.basePath + "assets/demoVideos", "Assets2.zip"],
            // [_this.basePath + "assets/exitAssets", localStorage.getItem("language") + "/Assets3.zip"],
            [_this.basePath + "assets/gradeAssets", "Assets4.zip"],
            // [_this.basePath + "assets/gradeSelectionScreenAssets", localStorage.getItem("language") + "/Assets5.zip"],
            [_this.basePath + "sounds", "sounds.zip"]
        ];

        _this.splash = game.add.sprite(game.world.centerX, game.world.centerY, 'registrationbg');
        _this.splash.scale.setTo(1);
        _this.splash.anchor.setTo(0.5);

        var titleBar = game.add.graphics(0, 0);
        titleBar.anchor.setTo(0.5);
        titleBar.lineStyle(2, 0x000000, 0.8);
        titleBar.beginFill(0x4E342E, 1);
        titleBar.drawRect(0, 0, 540, 80);

        var titleTxt = game.add.text(game.world.centerX, 45, "Hindi BB++");
        titleTxt.x = Math.round(titleTxt.x);
        titleTxt.anchor.setTo(0.5);
        titleTxt.align = 'center';
        titleTxt.font = 'regfont4';
        titleTxt.fontSize = '22pt';
        titleTxt.fontWeight = 500;
        titleTxt.fill = '#FFFFFF';
        titleTxt.wordWrap = true;
        titleTxt.wordWrapWidth = 500;

        _this.checkPermission();
    },

    checkPermission: function () {
        var permissions = cordova.plugins.permissions;
        permissions.checkPermission(permissions.READ_EXTERNAL_STORAGE, function (status) {
            if (status.hasPermission) {
                console.log("Yes :D ");
                _this.checkIfAllAssetsPresent();
            }
            else {
                console.warn("No :( ");
                permissions.requestPermission(permissions.READ_EXTERNAL_STORAGE, function (status) {
                    if (status.hasPermission) {
                        console.log("Yes :D ");

                        _this.checkIfAllAssetsPresent();
                    }
                    else {
                        console.warn("No :( ");
                        _this.checkPermission();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
        });

    },

    checkIfAllAssetsPresent: function () {
        if (_this.counter < _this.fileCheck.length)
            _this.fileChecker(_this.fileCheck[_this.counter][0], _this.fileCheck[_this.counter][1]);
        else {
            //Back button and start button was there
            localStorage.setItem("downloadComplete", "true");
            window.baseUrl = cordova.file.externalRootDirectory + "Android/data/com.Akshara.HINBBplusplus/Files/Download/.gameFilesBB++V10_2/www/";//cordova.file.externalDataDirectory + 
            _this.state.start('practiceModegradeSelectionScreen', true, false);
        }
    },

    fileChecker: function (filepath, filename) {
        window.resolveLocalFileSystemURL(filepath,
            function (fileEntry) {
                console.log("file present");
                _this.counter++;
                _this.checkIfAllAssetsPresent();
            }, function (error) {
                console.log("file not present:download" + filename);
                _this.downloadFiles(filename);
            });
    },

    downloadFiles: function (filename) {
        if (navigator.connection.type != "none" && navigator.connection.type != "unknown" && navigator.connection.type != null && navigator.connection.type != "undefined") {
            _this.displayMessageAndDownloadAgain();

            _this.baseUrl = "https://abbmath.klp.org.in/bbplusplus/assets/";
            var fileTransfer = new FileTransfer();

            fileTransfer.onprogress = function (progressEvent) {
                if (progressEvent.lengthComputable) {
                    //loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
                    _this.regloding.frame = Math.round((progressEvent.loaded / progressEvent.total) * 100) - 1;
                    _this.progressPercentageTxt.text = Math.round((progressEvent.loaded / progressEvent.total) * 100) + "%";
                    _this.progressPercentageTxt2.text = Math.round((progressEvent.loaded / progressEvent.total) * 100) + "/100";

                    if (filename == localStorage.getItem("language") + "/questionSounds.zip")
                        _this.noOfAssets.text = "1/5";
                    else if (filename == "Assets1.zip")
                        _this.noOfAssets.text = "2/5";
                    else if (filename == "Assets2.zip")
                        _this.noOfAssets.text = "3/5";

                    else if (filename == "Assets4.zip")
                        _this.noOfAssets.text = "4/5";

                    else if (filename == "sounds.zip")
                        _this.noOfAssets.text = "5/5";

                    _this.noOfAssets.visible = true;

                    console.log((progressEvent.loaded / progressEvent.total) * 100);
                } else {
                }
            };

            var uri = encodeURI(_this.baseUrl + filename);

            fileTransfer.download(
                uri,
                _this.basePath + filename,
                function (entry) {
                    console.log("download complete: " + entry.toURL());
                    _this.unzipFile(_this.basePath, filename);
                },
                function (error) {
                    console.log("download error source " + error.source);
                    console.log("download error target " + error.target);
                    console.log("download error code" + error.code);
                    _this.pleaseWaitTxt.text = "Download Failed";
                    _this.downloadProgressTxt.text = "Something went wrong."

                    document.addEventListener("online", _this.checkNetwork, false);
                    window.plugins.toast.show("something went wrong with download please try again", 3000, "bottom");
                }
            );
        }
        else {
            window.plugins.toast.show("please check your internet connection and try again", 3000, "bottom");
            document.addEventListener("online", _this.checkNetwork, false);
        }
    },

    displayMessageAndDownloadAgain: function () {

        _this.splash.alpha = 0.5;

        _this.progressGroup = _this.add.group();

        _this.graphics = _this.add.graphics(10, 50);
        _this.graphics.lineStyle(1, 0x000000, 0);
        _this.graphics.beginFill(0xFFFFFF, 1);
        _this.graphics.drawRoundedRect(10, 350, 500, 260, 5);
        _this.graphics.inputEnabled = true;
        _this.graphics.events.onInputDown.add(function () {
            //do nothing
        }, _this);

        _this.pleaseWaitTxt = _this.add.text(55, 430, "Please wait..");
        _this.pleaseWaitTxt.x = Math.round(_this.pleaseWaitTxt.x);
        //_this.pleaseWaitTxt.anchor.setTo(0.5);
        _this.pleaseWaitTxt.align = 'center';
        _this.pleaseWaitTxt.font = 'regfont4';
        _this.pleaseWaitTxt.fontSize = '22pt';
        _this.pleaseWaitTxt.fontWeight = 'normal';
        _this.pleaseWaitTxt.fill = '#000000';
        _this.pleaseWaitTxt.wordWrap = true;
        _this.pleaseWaitTxt.wordWrapWidth = 500;

        _this.downloadProgressTxt = _this.add.text(55, 470, "Download in progress");
        _this.downloadProgressTxt.x = Math.round(_this.downloadProgressTxt.x);
        //_this.downloadProgressTxt.anchor.setTo(0.5);
        _this.downloadProgressTxt.align = 'center';
        _this.downloadProgressTxt.font = 'regfont3';
        _this.downloadProgressTxt.fontSize = '16pt';
        _this.downloadProgressTxt.fontWeight = 'normal';
        _this.downloadProgressTxt.fill = '#000000';
        _this.downloadProgressTxt.wordWrap = true;
        _this.downloadProgressTxt.wordWrapWidth = 500;

        _this.regloding = _this.add.sprite(50, 580, "regloding");
        _this.regloding.scale.setTo(0.48, 0.5);
        _this.regloding.frame = 0;

        _this.progressPercentageTxt = _this.add.text(50, 600, "0%");
        _this.progressPercentageTxt.x = Math.round(_this.progressPercentageTxt.x);
        //_this.downloadProgressTxt.anchor.setTo(0.5);
        _this.progressPercentageTxt.align = 'center';
        _this.progressPercentageTxt.font = 'regfont4';
        _this.progressPercentageTxt.fontSize = '16pt';
        _this.progressPercentageTxt.fontWeight = 'normal';
        _this.progressPercentageTxt.fill = '#000000';
        _this.progressPercentageTxt.wordWrap = true;
        _this.progressPercentageTxt.wordWrapWidth = 500;


        _this.progressPercentageTxt2 = _this.add.text(420, 600, "0/100");
        _this.progressPercentageTxt2.x = Math.round(_this.progressPercentageTxt2.x);
        //_this.progressPercentageTxt2.anchor.setTo(0.5);
        _this.progressPercentageTxt2.align = 'center';
        _this.progressPercentageTxt2.font = 'regfont3';
        _this.progressPercentageTxt2.fontSize = '16pt';
        _this.progressPercentageTxt2.fontWeight = 'normal';
        _this.progressPercentageTxt2.fill = '#000000';
        _this.progressPercentageTxt2.wordWrap = true;
        _this.progressPercentageTxt2.wordWrapWidth = 500;

        _this.noOfAssets = _this.add.text(300, 470, "1/5");
        _this.noOfAssets.x = Math.round(_this.noOfAssets.x);
        //_this.progressPercentageTxt2.anchor.setTo(0.5);
        _this.noOfAssets.align = 'center';
        _this.noOfAssets.font = 'regfont3';
        _this.noOfAssets.fontSize = '16pt';
        _this.noOfAssets.fontWeight = 'normal';
        _this.noOfAssets.fill = '#000000';
        _this.noOfAssets.wordWrap = true;
        _this.noOfAssets.wordWrapWidth = 500;
        _this.noOfAssets.visible = false;

        _this.progressGroup.add(_this.graphics);
        _this.progressGroup.add(_this.pleaseWaitTxt);
        _this.progressGroup.add(_this.downloadProgressTxt);
        _this.progressGroup.add(_this.regloding);
        _this.progressGroup.add(_this.progressPercentageTxt);
        _this.progressGroup.add(_this.progressPercentageTxt2);
        _this.progressGroup.add(_this.noOfAssets);
    },

    checkNetwork: function () {
        document.removeEventListener("online", _this.checkNetwork, false);
        _this.game.state.start('appLoginEditScreen', true, false, _this.user);
    },

    unzipFile: function (path, filename) {
        zip.unzip(path + filename, _this.basePath, function (message) {
            console.log(message);
            if (message == 0) {
                _this.removeZipFile(path, filename);
            }
            else {
                console.log("error unzipping");
            }
        }, function (progressEvent) {
            console.log(Math.round((progressEvent.loaded / progressEvent.total) * 100));
        });
    },

    removeZipFile: function (path, filename) {
        window.resolveLocalFileSystemURL(path + filename,
            function (fileEntry) {
                fileEntry.remove(function (file) {
                    console.log("file removed!");
                    _this.progressGroup.destroy();
                    _this.splash.alpha = 1;
                    _this.checkIfAllAssetsPresent();
                }, function (error) {
                    console.log("error occurred: " + error.code);
                }, function () {
                    console.log("file does not exist");
                });
            });
    },

    //Shutdown removed
};