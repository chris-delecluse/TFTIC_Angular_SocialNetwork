import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  transform(value: Date): unknown {
    return moment(value).add(2, "hours").fromNow()
  }
}
