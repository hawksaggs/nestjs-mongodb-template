"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logging_interceptor_1 = require("./common/interceptors/logging.interceptor");
const all_exceptions_filter_1 = require("./common/filters/all-exceptions.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter());
    await app.listen(3000);
}
bootstrap().catch((err) => console.log(err));
//# sourceMappingURL=main.js.map