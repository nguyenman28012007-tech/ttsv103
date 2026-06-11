/*javascript*/
//Khai báo một đối tượng
const product = {
    id:"1",
    name:" GÀ QUAY ",
    price:279000,
    description:" Gà quay mật ong da giòn...",
    image:"../assets/images/gaquay.jpg",
    link:"chi-tiet.html"
};

const products = [
    { 
        id:"1",
    name:" HAMBURGER ",
    price:79000,
    description:"Hamburger đậm vị Ngon trên từng thớ thịt...",
    image:"../assets/images/hamburger.jpg",
    link:"chi-tiet.html"
    },
    { 
        id:"2",
    name:" BÁNH MÌ ",
    price:25000,
    description:"Bánh mì heo quay,Da giòn rôm rốp, thịt đầy ngập răng...",
    image:"../assets/images/banhmi.jpg",
    link:"chi-tiet.html"
    },
    {
       id:"3",
    name:"MÌ CAY",
    price:50000,
    description:"Sợi mì dai chuẩn Hàn đẫm trong nước dùng đậm đà...",
    image:"../assets/images/micay.jpg",
    link:"chi-tiet.html" 
    },

   {
    id:"4",
    name:" GÀ QUAY ",
    price:279000,
    description:" Gà quay mật ong da giòn...",
    image:"../assets/images/gaquay.jpg",
    link:"chi-tiet.html"
   }
];

function addItemV2(product){
    document.getElementById("product-list").innerHTML += `
        <div class="col">
            <div class="card product-item h-100">
                <div class="product-image">
                    <img class="card-img-top" src="${product.image}" alt="${product.name}">
                </div>
                <div class="card-body bg-light product-info">
                    <h4 class="card-title">${product.name}</h4>
                    <h5 class="card-text">${product.price} VNĐ</h5>
                    <p class="card-text">${product.description}</p>
                    <a class="btn btn-info" href="${product.link}">Xem chi tiết</a>
                </div>
            </div>
        </div>
    `;
}

function loadAllProduct(){
    let i = 0;
    while(i < products.length)
    {
        addItemV2(products[i]);
        i++;
    }
}





function inBCC(n)
{
    let result = "";
    let i = 1;
    while(i<=10)
    {
        result += `${n} x ${i} = ${n*i} <br>`;
        i++;
    }
    document.getElementById("result").innerHTML = result;
}
function addItem(name, price, description, link, image)
{
const item = document.createElement ("div"); 

item.setAttribute("class", "container-item");

const containerImage = document.createElement ("div");

containerImage.setAttribute( "class", "container-image");

const imageProduct = document.createElement ("img");
imageProduct.setAttribute("src", image);
imageProduct.setAttribute("alt", name);
imageProduct.setAttribute("style", "width:100%; max-width:150px;");

containerImage.appendChild(imageProduct);

const containerInfo = document.createElement ("div");
containerInfo.setAttribute("class", "container-info");

const nameProduct = document.createElement ("p");
nameProduct.innerHTML = name;

const priceProduct = document.createElement ("p");
priceProduct.innerHTML = price;

const descProduct = document.createElement ("p");
descProduct.innerHTML = description;

const linkProduct = document.createElement ("a");
linkProduct.innerHTML = "Xem chi tiết";
linkProduct.setAttribute("href", link);

containerInfo.appendChild(nameProduct);
containerInfo.appendChild(priceProduct);
containerInfo.appendChild(descProduct);
containerInfo.appendChild(linkProduct);

item.appendChild(containerImage);
item.appendChild(containerInfo);
document.getElementById("container-product-list").appendChild(item);
}
