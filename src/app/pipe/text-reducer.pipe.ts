import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textReducer'
})
export class TextReducerPipe implements PipeTransform {

  transform(input: string, param: number): unknown {
    if (input)
    return (input.length > length) ? input.slice(0, param)+"...": input
    else return ''
  }

}
