@Component({
selector: 'app-ecommerce',
templateUrl: './ecommerce.component.html',
styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
private collapsed = true;
orderFinished = false;

@ViewChild('productsC')
productsC: ProductsComponent;

@ViewChild('shoppingCartC')
shoppingCartC: ShoppingCartComponent;

@ViewChild('ordersC')
ordersC: OrdersComponent;

toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
    }

    finishOrder(orderFinished: boolean) {
        this.orderFinished = orderFinished;
    }

    reset() {
        this.orderFinished = false;
        this.productsC.reset();
        this.shoppingCartC.reset();
        this.ordersC.paid = false;
    }
}
