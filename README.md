
# Phonegap - Barcode and Push

### Referências
* [Phonegap](http://phonegap.com/getstarted/)
* [Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/)
* [Plugin - Barcode Scanner](https://github.com/phonegap/phonegap-plugin-barcodescanner)
* [Plugin - Push Notifications](https://github.com/phonegap/phonegap-plugin-push)

### Instruções

#### Push Notification

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

#### Barcode Scanner

Shell:
```
phonegap plugin add phonegap-plugin-barcodescanner
```

config.xml (phonegap builder):
```
<plugin name="phonegap-plugin-barcodescanner" spec="4.1.0"/>
```

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