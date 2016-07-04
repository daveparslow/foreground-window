var getForegroundWindow = require("../foreground-window");

console.log("Getting the process id (pid) of the foreground window (i.e. the window that is getting the input)");
console.log("pid: %d", getForegroundWindow());
