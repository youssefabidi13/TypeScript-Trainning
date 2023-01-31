var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//let's create an instance 
var myCustomer = new Customer("Youssef", "Abidi");
console.log("my customer is : ".concat(myCustomer.firstName, "  ").concat(myCustomer.lastName));
