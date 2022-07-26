export class Product {
        productCode:string;
        productDescription:string;
        unitPrice:number;
        quantity:number;
        category:string;
        manufacturer:string;
    
        constructor(productCode:string="",productDescription:string="",unitPrice:number=0,quantity:number=0,
                  category:string="",manufacturer:string="")
            {
                this.productCode=productCode;
                this.productDescription=productDescription;
                this.unitPrice = unitPrice;
                this.quantity = quantity;
                this.category = category;
                this.manufacturer = manufacturer;
            }
    
    }
    

