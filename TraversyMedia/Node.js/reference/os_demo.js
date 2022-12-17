const os = require("os");

// ! Platform
console.log(os.platform()); // win32

// ! CPU Architecture
console.log(os.arch()); // x64

// ! CPU Core Info
console.log(os.cpus()); // cpu core info

// ! Free memory
console.log(os.freemem()); // 3377659904

// ! Total memory
console.log(os.totalmem()); // 17113300992

// ! Home directory
console.log(os.homedir()); // C:\Users\soumy

// ! Uptime --> No of secs that your system has been up.
console.log(os.uptime()); // 454068.187
