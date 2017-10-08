import {CanDeactivate} from "@angular/router";
import {HomeDetailComponent} from "../pages/home/home-detail/home-detail.component";
/**
 * Created by Administrator on 2017/8/31.
 */

export class Leave implements CanDeactivate<HomeDetailComponent>{
    canDeactivate(component: HomeDetailComponent){
        console.log(component)
        if(component.canLeave){
            return true;
        }else{
            return false;
        }

    }
}