const AtomInterface = require('atom').Interface;

// var msgCount = 0;

const InterfaceSpecs = require("./introspective_interface_specs");

global.component = {};

const _interface = new AtomInterface(InterfaceSpecs);
_interface.advertiseAndActivate();

// module.exports = _interface;