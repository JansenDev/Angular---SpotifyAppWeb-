import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(item: any): string {
    if (!item) {
      return 'assets/img/102 noimage.png';
    }

    if (item.length > 0) {
      return item[0].url;
    } else {
      return 'assets/img/102 noimage.png';
    }
  }

}
