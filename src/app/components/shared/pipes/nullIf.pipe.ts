import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'nullIf'
})
export class NullIfPipe implements PipeTransform {
  transform(value: any, params: string): any {
    return (value == null || value == undefined || value == '')? params: value;
  }
}