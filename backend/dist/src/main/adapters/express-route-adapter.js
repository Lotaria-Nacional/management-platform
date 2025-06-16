"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressRouteAdapter = expressRouteAdapter;
function expressRouteAdapter(controller) {
    return async (req, res) => {
        const httpRequest = {
            body: req.body,
            params: req.params,
            query: req.query,
            file: req.file,
        };
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
}
//# sourceMappingURL=express-route-adapter.js.map