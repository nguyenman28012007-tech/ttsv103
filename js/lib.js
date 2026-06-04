/*javascript*/
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
