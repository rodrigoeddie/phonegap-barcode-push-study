
# Phonegap - Barcode and Push

### Referencias
[Phonegap](http://phonegap.com/getstarted/)
[Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/)
[Plugin - Barcode Scanner](https://github.com/phonegap/phonegap-plugin-barcodescanner)
[Plugin - Push Notifications](https://github.com/phonegap/phonegap-plugin-push)

### Instruções

```
phonegap plugin add phonegap-plugin-push --variable SENDER_ID="XXXXXXX"
```


```
phonegap plugin add phonegap-plugin-barcodescanner
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