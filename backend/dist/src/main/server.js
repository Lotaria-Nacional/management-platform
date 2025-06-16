"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const env_1 = require("./config/env");
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
const { port } = env_1.env;
async function startServer() {
    try {
        await (0, prisma_config_1.startPrismaConnection)();
        app_1.app.listen(port, () => {
            console.log(`App running on port: ${port}`);
        });
    }
    catch (error) {
        console.error("Error starting server:", error);
    }
}
startServer();
//# sourceMappingURL=server.js.map