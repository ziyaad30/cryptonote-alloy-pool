// Load required modules
var fs = require('fs');

// Set pool software version
global.version = "v1.0.0";

/**
 * Load pool configuration
 **/
 
// Get configuration file path
var configFile = (function(){
    for (var i = 0; i < process.argv.length; i++){
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();

// Read configuration file data
try {
    global.config = JSON.parse(fs.readFileSync(configFile));
}
catch(e){
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

/**
 * Developper donation addresses -- thanks for supporting my works!
 **/
 
var donationAddresses = {
    XAO: 'A4XhHr1vRn44nzgtq6vfUjMtvUkHVk4fp4LW9oAUpCTPSPVgpjpDT9EdZUsKUaRzXj4qL4J1fEwCc4K3VLfhJvBuEXXxch7'
};

global.donations = {};

var percent = config.blockUnlocker.devDonation;
var wallet = donationAddresses[config.symbol];
if (percent && wallet) {
    global.donations[wallet] = percent;
}
