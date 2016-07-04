var getForegroundWindow;

if (process.platform === 'win32') {
  var ref = require('ref');
  var ffi = require('ffi');

  var intPtr = ref.refType(ref.types.int32);
  var user32 = ffi.Library('user32', {
      'GetForegroundWindow': ['int', []],
      'GetWindowThreadProcessId': ['int', [ref.types.int32, intPtr]],
    });

  /** Gets the process id of the foreground window. */
  getForegroundWindow = function () {
    var hwnd = user32.GetForegroundWindow();
    var pid = ref.alloc(ref.types.int32);
    var result = user32.GetWindowThreadProcessId(hwnd, pid);
    if (result) {
      return pid.deref()
    }
  }
} else {
  throw new Error("Platform not supported: " + process.platform);
}

module.exports = getForegroundWindow;
