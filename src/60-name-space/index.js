/* eslint-disable @typescript-eslint/no-namespace */
var MyNameSpace;
(function (MyNameSpace) {
    MyNameSpace.nameMynameSpace = 'Luis';
    var PersonMyNameSpace = /** @class */ (function () {
        function PersonMyNameSpace(name) {
            this.name = name;
        }
        return PersonMyNameSpace;
    }());
    MyNameSpace.PersonMyNameSpace = PersonMyNameSpace;
    var personMyNameSpace = new PersonMyNameSpace('Luis');
    var OtherNameSpace;
    (function (OtherNameSpace) {
        OtherNameSpace.nameMynameSpace = 'Nome do outro namespace';
    })(OtherNameSpace = MyNameSpace.OtherNameSpace || (MyNameSpace.OtherNameSpace = {}));
})(MyNameSpace || (MyNameSpace = {}));
var constNameSpace = 'Valor da const do namespace';
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/module.ts" />
console.log(MyNameSpace.nameMynameSpace);
console.log(constNameSpace);
