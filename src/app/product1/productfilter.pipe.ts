import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(productArray: Product[], minPrice : number, maxPrice : number): Product[]{

    if(!productArray || !minPrice || !maxPrice) {
      return productArray;
    }

    let filteredProducts = productArray.filter((p)=>{return p.unitPrice>=minPrice && p.unitPrice<=maxPrice;});
    return filteredProducts;
}
  }


