const shop_list = [
                {
                    name : "小米10",
                    price : 3999,
                    category : "phone",
                    link : "mi10.html"
                },
                {
                    name : "小米10 Pro",
                    price : 4999,
                    category : "phone",
                    link : "mi10pro.html"
                },
                {
                    name : "小米CC 9",
                    price : 1499,
                    category : "phone",
                    link : "micc9.html"
                },
                {
                    name : "小米CC 9E",
                    price : 1399,
                    category : "phone",
                    link : "cc9e.html"
                },
                {
                    name : "小米笔记本Pro GTX",
                    price : 7299,
                    category : "laptap",
                    link : "pro.html"
                },
                {
                    name : "shit",
                    price : "shit",
                    category : "laptap",
                    link : "shit.html"
                }
            ];

            for(let i in shop_list) {
                if(shop_list[i].category == "phone") {
                    document.write("<p class='list'>" + shop_list[i].name + "<br />价格: " + shop_list[i].price + "<br />" + "<a href='" + shop_list[i].link + "' class='buy'>立即购买</a>");
                }
                if(shop_list[i].category == "laptap") {
                    console.log("shit");
                }
            }