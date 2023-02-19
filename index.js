document.getElementById('first-card').addEventListener('click',function(e){
    // get the data from the card 
   const firstElementName = document.getElementById('first-card-name').innerText;
   const firstCardPrice=document.getElementById('first-card-price').innerText;
   const firstCardQuantity=document.getElementById('first-card-quantity').innerText;

    //price calculation
    const firstCardPriceNumber=parseInt(firstCardPrice)
    const firstCardQuantityNumber=parseInt(firstCardQuantity)
    //Multiply
   const total=firstCardPriceNumber*firstCardQuantityNumber;
   
    //show the data function call================
   displaydata(firstElementName,firstCardPrice,firstCardQuantity,total)
})

// -=-===========-=-=-=-=-=-=-=Addition==-=-=-=-=-======
function addition(x,y){
    const z=x+y;
    return z;
}
// for second card===========using event function======childNode
document.getElementById('second-card').addEventListener('click',function(event){
    // console.log(event.target.parentNode.parentNode.children);
    const secondCardName=event.target.parentNode.parentNode.children[0].innerText;
    const secondCardPrice=event.target.parentNode.parentNode.children[2].children[0].innerText;
       const secondCardPriceNumber=parseInt(secondCardPrice);
    const secondCardQuantity=event.target.parentNode.parentNode.children[3].children[0].innerText
        const secondCardQuantityNumber=parseInt(secondCardQuantity);

      const total=addition(secondCardPriceNumber,secondCardQuantityNumber);
      displaydata(secondCardName,secondCardPriceNumber,secondCardQuantityNumber,total)
})

function getName(name,price,quantity){
    const pName=document.getElementById(name).innerText;
    const pPrice=document.getElementById(price).innerText;
        const pPriceNum=parseInt(pPrice)//
    const pQuantity=document.getElementById(quantity).innerText;
        const pQuantityNum=parseInt(pQuantity);//

        const total=addition(pPriceNum,pQuantityNum);

        displaydata(pName,pPriceNum,pQuantityNum,total)
}



//for thid card==============
document.getElementById('third-card').addEventListener('click',function(){
  getName('third-card-name','third-card-price','third-card-quantity')
        

})











let sl=0;
//display data=====================
function displaydata(firstElementName,firstCardPrice,firstCardQuantity,total){

     //get the table container parent 
   const container=document.getElementById('table-data-container');
   //create the tr and show the data
sl=sl+1
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <th>${sl}</th>
    <td>${firstElementName}</td>
    <td>${firstCardPrice}</td>
    <td>${firstCardQuantity}</td>
    <td>${total}</td>
    `
    container.appendChild(tr)
}