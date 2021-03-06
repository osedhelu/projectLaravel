"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BconstoExpress = void 0;
const _models_1 = require("../../_models");
const function_1 = require("../../function");
const middleware_1 = require("../../middleware");
const model = new _models_1.BasesCostoModel();
const BconstoExpress = () => {
    const router = function_1.Router();
    router.get('/dominios', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        function_1._console.error(JSON.stringify(req.body));
        const aa = yield model.dominios({ ID_UN: req.my_data.ID_UN });
        function_1.r._200(res, aa);
    }));
    router.put('/dominios', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const dat = {
                code: req.body.code,
                ud_descticcion: req.body.ud_descticcion,
                udclase: req.body.udclase,
                ID_UN: req.my_data.ID_UN
            };
            const aa = yield model.updateDominio(dat);
            return function_1.r._200(res, aa);
        }
        catch (error) {
            function_1._console.error(JSON.stringify(error));
            function_1.r._401(res, error);
        }
    }));
    // TODO: Fin del Servicio
    return router;
};
exports.BconstoExpress = BconstoExpress;
//# sourceMappingURL=bConstos._service.js.map