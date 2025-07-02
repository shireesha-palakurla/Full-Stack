//fetch an api and display the data on the page
const alpha=async()=>{
    const res=await fetch("https://fakestoreapi.com/products");
    const data=await res.json();
    console.log(data[0]);
    document.querySelector("h1").innerHTML=data[0].title;
    document.querySelector("img").setAttribute("src",data[2].image);
    // Accesses the 3rd product
}
alpha();
