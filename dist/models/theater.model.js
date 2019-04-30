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
class theater {
    constructor(norm) {
        this.model = [{
                THEATER_ID: { type: Number, key: 'primary' },
                Location: { type: String, maxlength: 24 },
                THEATER_TYPE: { type: String, maxlength: 24 },
                Number_of_Rooms: { type: String, maxlength: 24 },
                Number_of_Employees: { type: String, maxlength: 24 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store Theater Info', [
                {
                    route: '/get-all-theaters',
                    method: 'POST',
                    callback: this.getAllTheaters,
                    requireToken: true,
                },
                {
                    route: '/get-theater-by-id/:THEATER_ID',
                    method: 'POST',
                    callback: this.getTheaterById,
                    requireToken: true,
                },
                {
                    route: '/create-theater',
                    method: 'POST',
                    callback: this.createTheater,
                    requireToken: true,
                },
                {
                    route: '/update-theater/id/:THEATER_ID',
                    method: 'PUT',
                    callback: this.updateTheater,
                    requireToken: true,
                },
                {
                    route: '/delete/id/:THEATER_ID',
                    method: 'DELETE',
                    callback: this.deleteTheater,
                    requireToken: true,
                }
            ]
        ];
    }
    getAllTheaters(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let theaterCtrl = model.controller;
            let resp = yield theaterCtrl.controller.get(req, null, null);
            res.json({ message: 'Car information retrieved successfully!', resp });
        });
    }
    getTheaterById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let theaterCtrl = model.controller;
            let resp = yield theaterCtrl.controller.get(req, null, null);
            res.json({ message: 'Theater ID found succssfully!', resp });
        });
    }
    createTheater(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let theaterCtrl = model.controller;
            let resp = yield theaterCtrl.controller.insert(req, null, null);
            res.json({ message: 'Theater created successfully!', resp });
        });
    }
    updateTheater(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let theaterCtrl = model.controller;
            let resp = yield theaterCtrl.controller.update(req, null, null);
            res.json({ message: 'Theater Info updated successfully!', resp });
        });
    }
    deleteTheater(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let theaterCtrl = model.controller;
            let resp = yield theaterCtrl.controller.remove(req, null, null);
            res.json({ message: 'Theater deleted successfully!', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.theater = theater;
