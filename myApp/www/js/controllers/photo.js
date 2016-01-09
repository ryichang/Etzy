'use strict';

app.controller('PhotoCtrl', function($scope, $cordovaCamera, $rootScope, $state) {
  
  var options = {
      quality: 75,
      destinationType: navigator.camera.DestinationType.DATA_URL,
      allowEdit: true,
      encodingType: navigator.camera.EncodingType.JPEG,
      popoverOption: CameraPopoverOptions,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: false
    };


  $scope.takePhoto = function() {
    console.log('takePhoto was clicked');
    //Camera Plugin
    
    options.sourceType = navigator.camera.PictureSourceType.CAMERA;
    

    $cordovaCamera.getPicture(options).then(function(photo){
      $rootScope.imgURI = "data:image/jpeg;base64," +photo;
      $state.go('tab.photo-detail');
    });
  };

  $scope.choosePhoto = function() {
    console.log('will link up to the photoLibrary');
    
    options.sourceType = navigator.camera.PictureSourceType.PHOTOLIBRARY;

    $cordovaCamera.getPicture(options).then(function(photo){
      $rootScope.imgURI = "data:image/jpeg;base64," +photo;
      $state.go('tab.photo-detail');
    });

  };
});