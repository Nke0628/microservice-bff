import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('execute auth guard');
    /**
     * Step1 リクエストヘッダーからメールアドレスを取得する。
    メールアドレスが取得できない場合は認証エラー
    */

    /**
     * Step2 auth serviceから取得する
     */
    return true;
  }
}
