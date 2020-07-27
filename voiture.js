"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.voiture = void 0;
var voiture = /** @class */ (function () {
    function voiture(_marque, _coleur) {
        this._marque = _marque;
        this._coleur = _coleur;
    }
    Object.defineProperty(voiture.prototype, "Marque", {
        get: function () {
            return this._marque;
        },
        set: function (value) {
            this._marque = value;
        },
        enumerable: false,
        configurable: true
    });
    voiture.prototype.Afficher = function () {
        console.log(this._marque + " " + this._coleur);
    };
    return voiture;
}());
exports.voiture = voiture;
