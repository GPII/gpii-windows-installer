/*!
* Morphic automatic installer
*
* Copyright 2019 Raising the Floor - US
*
* Licensed under the New BSD license. You may not use this file except in
* compliance with this License.
*
* The R&D leading to these results received funding from the
* Department of Education - Grant H421A150005 (GPII-APCP). However,
* these results do not necessarily represent the policy of the
* Department of Education, and you should not assume endorsement by the
* Federal Government.
*
* You may obtain a copy of the License at
* https://github.com/GPII/universal/blob/master/LICENSE.txt
*/
"use strict"

var fluid = require("infusion");

fluid.module.register("gpii-windows-installer", __dirname, require);

var gpii = fluid.registerNamespace("gpii");

require("./src/main.js");
