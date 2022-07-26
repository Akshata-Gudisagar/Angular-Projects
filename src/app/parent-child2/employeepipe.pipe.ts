import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'employeepipe'
})
export class EmployeepipePipe implements PipeTransform {

  transform(partiregister:Employee[], participantId:string): Employee[] {
    if(!participantId) {
      return partiregister;
  }
  return partiregister.filter(partiregister => partiregister.participantId == participantId);
  }

}
