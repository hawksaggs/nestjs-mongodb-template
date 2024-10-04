import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class LoggingInterceptor implements NestInterceptor {
    private logger;
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> | Promise<Observable<any>>;
}
