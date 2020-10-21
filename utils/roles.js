const accesControl = require('accesscontrol');

const ac = new accesControl();

const roles = () =>{
    ac.grant('cliente')
        .readAny('products')
        .readOwn('sales_orders')
        .readOwn('order_products')
        .readOwn('categories')
        .createOwn('sales_orders')
        .createOwn('cc_transactions')
        .createOwn('order_products')
        .updateOwn('order_products')
        
    ac.grant('gerente').extend('cliente')
        .readAny('products')
        .readAny('sales_orders')
        .readAny('order_products')
        .readAny('categories')
        .readAny('cuopons')
        .readAny('product_statuses')
        .readAny('product_categories')
        .readAny('sessions')
        .createAny('sales_orders')
        .createAny('cc_transactions')
        .createAny('order_products')
        
    ac.grant('administrador').extend('gerente')
        
    
    return ac;
}

module.exports = roles;