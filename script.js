const product = [
    {
     id: 0,              
     image: 'https://wallpapercave.com/dwp1x/wp7483437.jpg',
     title: 'onda',
     price: 79,
     id: 1,
     image: 'https://img.ltwebstatic.com/images3_pi/2023/02/23/167713576779c76bf8d5c01ad6795d63dea888f05a_thumbnail_900x.webp',
     title: 'verd',
     price: 129,
     id: 2,
     image: 'https://img.ltwebstatic.com/images3_pi/2023/02/23/167713576779c76bf8d5c01ad6795d63dea888f05a_thumbnail_900x.webp',
     title: 'vops',
     price: 109,
    }

  ];
  
const categories = [...new Set(product.map((item)=>
   {return item}))]
   let i=0;
   document.getElementById('root').innerHTML= categories.map((item)=>
   {
    var {image, title, price} = item;
    return(
        `<div class='box'>
           <div class='img-box'>
           <img class='images' src=${image}></img>
           </div>
           <div class='bottom'>
           <p>${title}</p>
           <h2>$ ${price}.00</h2>` +
          "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
          `</div>
          </div>`
          )
   }).join('')
  
  var cart = [];
  
  function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
  }
  function delElement(a){
    cart.splice(a, 1);
    displaycart();
  }
  function displaycart(a){
    let j= 0; total=0;
     document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
      document.getElementById('cartItem').innerHTML= "Your cart is empty";
       document.getElementById("total").innerHTML= "$ "+0+".00";
    }
    else{
      document.getElementById('cartItem').innerHTML= cart.map((items)=>
   {
        var {image, title, price} = items;
        total=total+price;
        document.getElementById("total").innerHTML="$ "+total+".00";
        return(
        `<div class='cart-item'>
        <div class='row-img'>
        <img class='rowimg' src=${image}></img>
        </div>
        <p style='font-size:12px;'>${title}</p>
        <h2 style='font-style:15px;'>$ ${price}.00</h2>+"<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>`
        );
      }).join('');
    }
  }
                                                            