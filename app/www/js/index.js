
function scanear(){
    cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      }
    );
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
        var push = PushNotification.init({
            "android": {
                "senderID": "20159675467"
            },
            "ios": {
                "senderID"  : "20159675467",
                "alert"     : true,
                "sound"     : true,
                "gcmSandbox": true
            }
        });

        push.on('registration', function(data) {
            var regId = data.registrationId;
              alert(regId);
            $.get( "http://162.243.3.240/a/teste-barcode-push/save_register_id.php?regId="+regId, function(data){
              alert(regId);
              alert(data);
            } );
        });

        push.on('notification', function(data) {
            // console.log(JSON.stringify(data));
            var cards = document.getElementById("cards");
            var card = '<div class="row">' +
                  '<div class="col s12 m6">' +
                  '  <div class="card darken-1">' +
                  '    <div class="card-content black-text">' +
                  '      <span class="card-title black-text">' + data.title + '</span>' +
                  '      <p>' + data.message + '</p>' +
                  '    </div>' +
                  '  </div>' +
                  ' </div>' +
                  '</div>';
            cards.innerHTML += card;

            push.finish(function () {
                // console.log('finish successfully called');
            });
        });

        push.on('error', function(e) {
            alert(e);
        });
    }
};

app.initialize();