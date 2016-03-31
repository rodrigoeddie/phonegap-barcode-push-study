
# Phonegap - Barcode and Push

### Referências
* [Phonegap](http://phonegap.com/getstarted/)
* [Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/)
* [Plugin - Barcode Scanner](https://github.com/phonegap/phonegap-plugin-barcodescanner)
* [Plugin - Push Notifications](https://github.com/phonegap/phonegap-plugin-push)
* [Google Developers Console](https://console.developers.google.com/project?pli=1)
* [Google Cloud Messaging](https://developers.google.com/cloud-messaging/gcm)

### Instruções

#### Push Notification
1. Sadastrar um projeto no Google Developers Console
2. Pegar informações de senderID, e API KEY do GCM (Google Cloud Messaging)
3. Após o registro do push é necessário salvar o registrationId do device em um banco a ser utilizado quando os notifications forem enviados.

Shell:
```
phonegap plugin add phonegap-plugin-push --variable SENDER_ID="XXXXXXX"
```

config.xml (phonegap builder):
```
<preference name="android-build-tool" value="gradle" />
<plugin name="phonegap-plugin-push" source="npm">
    <param name="SENDER_ID" value="XXXXXXX" />
</plugin>
```

Exemplo de utilização
```
var push = PushNotification.init({
    "android": {
        "senderID": "XXXXXXX"
    },
    "ios": {
        "senderID"  : "XXXXXXX",
        "alert"     : true,
        "sound"     : true,
        "gcmSandbox": true
    }
});

push.on('registration', function(data) {
    var texto = document.getElementById("texto");
    texto.innerHTML = data.registrationId;
    console.log(data.registrationId);
});
```

#### Barcode Scanner

Shell:
```
phonegap plugin add phonegap-plugin-barcodescanner
```

config.xml (phonegap builder):
```
<plugin name="phonegap-plugin-barcodescanner" spec="4.1.0"/>
```

Exemplo de utilização
```
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
```