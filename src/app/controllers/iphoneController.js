class IphoneController {
    index(req, res) {
        res.render('iphone', {
            banners: [
                "../img/banner_home_1.png",
                "../img/banner_home_2.png",
                "../img/banner_home_3.png",
                "../img/banner_home_4.png",
                "../img/banner_home_5.png",
                "../img/banner_home_6.png",
                "../img/banner_home_7.png",
            ],
            iphone: {
                title: "iPhone",
                products: [
                    {
                        name: "iPhone 16 128GB",
                        price: "18.990.000đ",
                        oldPrice: "20.990.000đ",
                        discount: "Giảm 10%",
                        image: "../img/iphone16.png"
                    },
                    {
                        name: "iPhone 16 128GB",
                        price: "18.990.000đ",
                        oldPrice: "20.990.000đ",
                        discount: "Giảm 10%",
                        image: "../img/iphone16.png"
                    },
                    {
                        name: "iPhone 16 128GB",
                        price: "18.990.000đ",
                        oldPrice: "20.990.000đ",
                        discount: "Giảm 10%",
                        image: "../img/iphone16.png"
                    },
                    {
                        name: "iPhone 16 128GB",
                        price: "18.990.000đ",
                        oldPrice: "20.990.000đ",
                        discount: "Giảm 10%",
                        image: "../img/iphone16.png"
                    },

                ],
                infoSections: [
                    { 
                        img: '../img/iphone16.png',
                        title: 'Tìm iPhone phù hợp với bạn',
                        link: '/compare',
                        linkText: 'So sánh các iPhone ›'
                    },
                    { 
                        img: '../img/iphone16.png',
                        title: 'Phụ kiện iPhone thường mua kèm',
                        link: '/accessories',
                        linkText: 'Tìm phụ kiện ›'
                    }
                ]
            }
        });
    }
}
module.exports = new IphoneController();