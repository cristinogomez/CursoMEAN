import { Pipe, PipeTransform } from "@angular/core";
import { Bloqueo } from "../modelos/bloqueo";

@Pipe({
    name:'orderBy'
})

export class OrderBYPipe implements PipeTransform{
    transform(value: Bloqueo[], ...args: any[]):Bloqueo[]{
        if(!Array.isArray(value)){
            return value;
        }

        const[order='asc']= args;
        return value.sort((a,b)=> {
            const compare=a.fecha.localeCompare(b.fecha);
            return order === 'asc' ? compare:-compare;
        })

    }
}