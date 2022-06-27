import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projector'
})
export class ProjectorPipe<T> implements PipeTransform {

  transform(value: T, col: {projector?: Function}, row: {[x: string]: any}): T {
    if (!value || !col.projector) {
      return value;
    }

    return col.projector(row);
  }

}
