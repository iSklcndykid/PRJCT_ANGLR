"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Concession {
    constructor(norm) {
        this.model = [{
                SNACK_ID: { type: Number, key: 'primary' },
                SNACK_TYPE: { type: String, maxlength: 24 },
                Price: { type: Number, maxlength: 24 },
                THEATER_ID: { type: Number, key: 'foreign', references: { table: 'theater', foreignKey: 'THEATER_ID' } },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store Customer Info', [
                {
                    route: '/get-all-snack',
                    method: 'POST',
                    callback: this.getAllSnacks,
                    requireToken: true,
                },
                {
                    route: '/get-snack-by-id/:SNACK_ID',
                    method: 'POST',
                    callback: this.getSnackById,
                    requireToken: true,
                },
                {
                    route: '/create-snack',
                    method: 'POST',
                    callback: this.createSnack,
                    requireToken: true,
                },
                {
                    route: '/update-snack/id/:SNACK_ID',
                    method: 'PUT',
                    callback: this.updateSnack,
                    requireToken: true,
                },
                {
                    route: '/delete/id/:SNACK_ID',
                    method: 'DELETE',
                    callback: this.deleteSnack,
                    requireToken: true,
                }
            ]
        ];
    }
    getAllSnacks(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let concessionCtrl = model.controller;
            let resp = yield concessionCtrl.controller.get(req, null, null);
            res.json({ message: 'Customer information retrieved successfully!', resp });
        });
    }
    getSnackById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let concessionCtrl = model.controller;
            let resp = yield concessionCtrl.controller.get(req, null, null);
            res.json({ message: 'Customer ID found succssfully!', resp });
        });
    }
    createSnack(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let concessionCtrlCtrl = model.controller;
            let resp = yield concessionCtrlCtrl.controller.insert(req, null, null);
            res.json({ message: 'Customer created successfully!', resp });
        });
    }
    updateSnack(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let concessionCtrl = model.controller;
            let resp = yield concessionCtrl.controller.update(req, null, null);
            res.json({ message: 'Customer Info updated successfully!', resp });
        });
    }
    deleteSnack(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let concessionCtrl = model.controller;
            let resp = yield concessionCtrl.controller.remove(req, null, null);
            res.json({ message: 'Customer deleted successfully!', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Concession = Concession;
