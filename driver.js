var DeviceType = require('./configs/DeviceType.js');



var connectDeviceConfig = require('./configs/connect.conf.json');


//New connect Device
var connect = new DeviceType(connectDeviceConfig);

console.log("DevicesinORder");
console.log(connect.getHeadersInOrder(['macAddressWiFi','shipDate']));

console.log("missing Columns");
console.log(connect.checkMissingColumns(['macAddressWiFi','shipDate']));


console.log("check Criteria");
console.log(connect.checkCriteria('macAddressWiFi','a4:5e:60:e7:96:fb'));


console.log("get DBName");
console.log(connect.getDBName('macAddressWiFi'));



console.log("DevicesinORder");
console.log(connect.getHeadersInOrder(['macAddressWiFi','shipDate']));
