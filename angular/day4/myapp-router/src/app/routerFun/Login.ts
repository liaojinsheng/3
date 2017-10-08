import {CanActivate} from "@angular/router";
/**
 * Created by Administrator on 2017/8/31.
 */

export class Login implements CanActivate{
    canActivate(){//判断可不可以进入路由的页面
        //判断用户是否登录了
        return false;
    }
}

//1.创建路由守卫