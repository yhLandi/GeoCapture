angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})


.controller('MapCtrl', function($scope, $cordovaGeolocation, $cordovaCamera) {
   
        var posOptions = {timeout: 1000, enableHighAccuracy: false};

        $scope.$on('ionicView.enter', function(event) {
                 $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
                    $scope.map.setCenter( new google.maps.LatLng(position.coords.latitude, position.coords.longitude));                 
                 }, function(err) {
            console.log("Something went wrong: " + err);
        });
        })


        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            var options = {
             center: {lat: position.coords.latitude, lng: position.coords.longitude},
             zoom: 16
        };

        $scope.map = new google.maps.Map(document.getElementById('map'), options);
        $scope.marker = new google.maps.Marker({
            position:{lat: position.coords.latitude, lng: position.coords.longitude},
            map: $scope.map
        });
        
        
        }, function(err) {
            console.log("Something went wrong: " + err);
        });
    })


.controller('ShareCtrl', function($scope, $cordovaSocialSharing) {
   
    $scope.share = function() {
        $cordovaSocialSharing.share("Share this message", "Title", null, "https://facebook.com");
    } 
})
/*
//add contacts controller
.controller('AddContactCtrl', function($scope, $cordovaContacts) {
    $scope.clear = function() {
        $scope.contact = {displayName: "", addresses: []};
        $scope.address = "";
    };
    
    $scope.addContact = function() {
        $scope.address.pref = true;
        $scope.address.type = "home";
        $scope.contact.addresses = [$scope.address];
        
        $cordovaContacts.save($scope.contact).then(function(result) {
            $scope.message = "Saved " + $scope.contact.displayName + " to the database.";
            // Clear the form after saving a contact
            $scope.clear();
        }, function(err) {
            $scope.message = "Something went wrong: " + err;
        });
    };
    
    // Clear the form when loading the screen
    $scope.clear();
})


//Contacts Controller
.controller('ViewContactsCtrl', function($scope, $cordovaContacts) {
    $scope.getContactList = function() {
        $cordovaContacts.find({filter: ''}).then(function(result) {
            $scope.contacts = result;
        })
    };
    
    $scope.$on("$ionicView.enter", function(event) {
        $scope.getContactList();
    });
})




/*
.controller('popUpCtrl', function($scope) {
 // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Activity Added',
       template: 'Now go explore more places!'
     });
     alertPopup.then(function(res) {
       console.log('Event Logged');
     });
   };
})

*/


.controller('CameraCtrl', function($scope, $cordovaCamera) {
    
      $scope.takePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
        $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                }
                
                $scope.choosePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                }
                
        });


