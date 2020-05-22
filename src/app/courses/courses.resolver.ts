import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class CoursesResolver implements Resolve<any> {

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ) : Observable<any> {

    }
} 