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
exports.startVenomBot = void 0;
const venom_bot_1 = require("venom-bot");
const startVenomBot = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, venom_bot_1.create)({
        session: "sesion_confirm",
    })
        .then((client) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield client
                .sendText("5521994123123@c.us", "A plataforma iniciou!")
                .then()
                .catch((erro) => {
                console.error("Error when sending: ", erro); //return object error
            });
            return client;
        }
        catch (error) {
            console.log(error);
            throw new Error("Error");
        }
    }))
        .catch(() => {
        throw new Error("Error");
    });
    return client;
});
exports.startVenomBot = startVenomBot;
(() => __awaiter(void 0, void 0, void 0, function* () {
    const whats = yield (0, exports.startVenomBot)();
    whats.onMessage((message) => {
        whats
            .sendText(message.from, '[Messagem automática] No momento estou sem Whatsapp. Por hora estou acessível no telegram.')
            .then((result) => { })
            .catch(() => { console.log("deu merdaaaaaaaaaaa"); });
    });
    // whats.sendText("5571986751101@c.us", "tu é gay!");
}))();
