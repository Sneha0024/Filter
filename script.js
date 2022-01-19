let products = {
    data: [
      {
        productName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, optio! Similique odio deserunt eius dolorum doloremque provident optio minima maxime hic, ducimus corporis minus in, suscipit voluptate nobis odit doloribus!",
        category: "Bottomwear",
        price: "Pre registration",
        image: "circle.png",
        pName: "Course1",
        pDate: "22 week course, 4 hrs per day",
        price1: "March18 - August19",
      },
      {
        productName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, optio! Similique odio deserunt eius dolorum doloremque provident optio minima maxime hic, ducimus corporis minus in, suscipit voluptate nobis odit doloribus!",
        category: "Bottomwear",
        price: "Pre registration",
        image: "circle.png",
        pName: "Course2",
        pDate: "22 week course, 3 hrs per day",
        price1: "March18 - August19",
      },
      {
        productName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, optio! Similique odio deserunt eius dolorum doloremque provident optio minima maxime hic, ducimus corporis minus in, suscipit voluptate nobis odit doloribus!",
        category: "Jacket",
        price: "Pre registration",
        image: "circle.png",
        pName: "Course3",
        pDate: "5 week course, 2 hrs per day",
        price1: "August22 - May27",
      },
      {
        productName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, optio! Similique odio deserunt eius dolorum doloremque provident optio minima maxime hic, ducimus corporis minus in, suscipit voluptate nobis odit doloribus!",
        category: "Topwear",
        price: "Pre registration",
        image: "circle.png",
        pName: "Course4 - Hello World",
        pDate: "5 week course, 2 hrs per day",
        price1: "August22 - May27",
            },
      // {
      //   productName: "Black Leather Jacket",
      //   category: "Jacket",
      //   price: "129",
      //   image: "black-leather-jacket.jpg",
      // },
      // {
      //   productName: "Stylish Pink Trousers",
      //   category: "Bottomwear",
      //   price: "89",
      //   image: "pink-trousers.jpg",
      // },
      // {
      //   productName: "Brown Men's Jacket",
      //   category: "Jacket",
      //   price: "189",
      //   image: "brown-jacket.jpg",
      // },
      // {
      //   productName: "Comfy Gray Pants",
      //   category: "Bottomwear",
      //   price: "49",
      //   image: "comfy-gray-pants.jpg",
      // },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //span name
    let span1 = document.createElement("span");
    span1.classList.add("course-name");
    span1.innerText = i.pName;
    imgContainer.appendChild(span1);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("p");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
    //price1
    let price1 = document.createElement("h6");
    price1.classList.add("price1");
    price1.innerText = i.price1;
    container.appendChild(price1);
    //date
    let date1 = document.createElement("div");
    date1.classList.add("date");
    date1.innerText = i.pDate;
    container.appendChild(date1);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };