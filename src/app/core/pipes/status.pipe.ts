import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFormat',
  standalone: true,
})
export class StatusPipe implements PipeTransform {
  private statusMap: { [key: number]: string } = {
    0: 'Inactivo',
    1: 'Activo',
  };

  transform(value: number): string {
    return this.statusMap[value] || '';
  }
}
