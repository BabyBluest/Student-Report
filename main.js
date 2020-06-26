
var app = angular.module("onlineShopping", []);

app.controller("ctrl", function ($scope) {

    //Bir ürün listesi oluşturuyoruz.
    $scope.products = [

        { id: 0, name: "yavşakhüso", price: 20 },
        { id: 1, name: "Kemer", price: 15 },
        { id: 2, name: "Kol Düğmesi", price: 3 },
        { id: 3, name: "Gömlek", price: 50 },
        { id: 4, name: "Pantolon", price: 50 }
    ]

    //Seçtiğimiz ürünleri tutmak için bir sepet oluşturuyoruz.
    $scope.myProducts = [];

    $scope.totalPrice = 0;

    /*Tıklanan her ürünün ng-click olayında bu metodu çalıştırıp
    buraya bir ürün göndermiş oluyoruz.*/
    $scope.addMyproducts = function (product) {

        $scope.totalPrice += product.price;

        if ($scope.myProducts.indexOf(product) == -1) {
            /*Eğer gelen ürün ilk defa ekleniyorsa listeye atıp 
            bir count property si oluşturup 0 değer veriyoruz.*/
            product.count = 1;
            $scope.myProducts.push(product);
        }
        else {
            $.each($scope.myProducts, function (index, item) {
                if (item.id == product.id) {
                    /*Eğer ürün daha önceden eklenmişse parametre olarak gelen ürünün 
                    myProducts listesindeki karşılığını bulup count'unu 1 artırıyoruz.*/
                    item.count++;
                }
            })
        }


    }


})