var SPhcon ={
    data:[
        {
            name:"Đồ Chơi Mô Hình Pokemon Moncolle - Takara Tomy MS-01 - Pikachu",
            img:"img/pikachu.jpg",
            tien:"100.000 đ",
        },
        {
            name:"Đồ Chơi Mô Hình Pokemon - Takara Tomy ML-02 - Lugia",
            img:"img/luugia.jpg",
            tien:"65.000",
        },
        
        {
            name:"Đồ Chơi Mô Hình Pokemon - Takara Tomy MS-26 - Gengar",
            img:"img/genga pokemon.jpg",
            tien:"50.000",
        },
        {
            name:"Đồ Chơi Mô Hình Pokemon - Takara Tomy MS-21 - Machamp",
            img:"img/machap.jpg",
            tien:"60.000",
        },
        {
            name:"Đồ Chơi Mô Hình Pokemon - Takara Tomy MS-05 - Sobble (Messon)",
            img:"img/ếch khóc nhè.jpg",
            tien:"55.000",
        },
    ]
}

for (let items of SPhcon.data) {

    let card = document.createElement("div")
    card.classList.add("san-ph")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("anh-sp")

    let image = document.createElement("img")
    image.setAttribute("src", items.img)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let ttsp = document.createElement("div");
    ttsp.classList.add("thong-tin-sp")
    let name = document.createElement("h3");
    name.innerText = items.name;
    ttsp.appendChild(name);

    let gsp = document.createElement("div");
    gsp.classList.add("gia-sp")
    let price = document.createElement("h4");
    price.innerHTML = items.tien + " VNĐ";
    gsp.appendChild(price);

    // let btn = document.createElement("button")
    // btn.setAttribute("onclick", "addToCart()")
    // btn.innerHTML = "Thêm vào giỏ hàng"
    // container.appendChild(btn)
  
    card.appendChild(ttsp);
    card.appendChild(gsp);
    document.getElementById("h-con").appendChild(card);
}

var loaiSP

var SP ={
    data:[
        {
            name:"Đồ Chơi Mô Hình Pokemon - Takara Tomy MS-04 - Fuecoco (Hogeita)",
            img:"img/fuecoco2.jpg",
            tien:"65.000",
        },
        {
            name:"Đồ Chơi Mô Hình Pokemon Moncolle - Takara Tomy MS-40 - Zarude",
            img:"img/khỉ huyền thoại.jpg",
            tien:"60.000",
        },
        
        {
            name:"Đồ Chơi Mô Hình Pokemon Moncolle - Takara Tomy ML-22 - Arceus",
            img:"img/đấng toàn năng.jpg",
            tien:"45.000",
        },
        {
            name:"Đồ Chơi Mô Hình Pokemon Moncolle - Takara Tomy MS-37 - Inteleon",
            img:"img/dạng tiến hóa của ếch khóc nhè.jpg",
            tien:"30.000",
        },
        {
            name:"Đồ Chơi Mô Hình Pokemon - Takara Tomy MS-03 - Sprigatito (Nyaoha)",
            img:"img/mèo lá.jpg",
            tien:"30.000",
        },
        {
            name:"Đồ Chơi Mô Hình Pokemon - Takara Tomy MS-28 - Duraludon (Jyuradon)",
            img:"img/khủng long thép.jpg",
            tien:"50.000",
        },
        {
            name:"Đồ Chơi Mô Hình Pokemon - Takara Tomy MS-19 - Snorlax (Kabigon)",
            img:"img/snorlax.jpg",
            tien:"25.000",
        },
        
        {
            name:"Đồ Chơi Mô Hình Pokemon Moncolle - Takara Tomy MS-02 - Eevee",
            img:"img/eve pokemon.jpg",
            tien:"35.000",
        },
        {
            name:"Đồ Chơi Mô Hình Pokemon Moncolle - Takara Tomy MS-03 - Grookey (Sarunori)",
            img:"img/moncolle pokemon.jpg",
            tien:"40.000",
        },
        {
            name:"Đồ Chơi Mô Hình Pokemon - Takara Tomy MS-23 - Lycanroc Midday Form",
            img:"img/sói đá.jpg",
            tien:"55.000",
        },
    ]
}

for (let items of SP.data) {

    let card = document.createElement("div")
    card.classList.add("san-ph")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("anh-sp")

    let image = document.createElement("img")
    image.setAttribute("src", items.img)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let ttsp = document.createElement("div");
    ttsp.classList.add("thong-tin-sp")
    let name = document.createElement("h3");
    name.innerText = items.name;
    ttsp.appendChild(name);

    let gsp = document.createElement("div");
    gsp.classList.add("gia-sp")
    let price = document.createElement("h4");
    price.innerHTML = items.tien + " VNĐ";
    gsp.appendChild(price);

    // let btn = document.createElement("button")
    // btn.setAttribute("onclick", "addToCart()")
    // btn.innerHTML = "Thêm vào giỏ hàng"
    // container.appendChild(btn)
  
    card.appendChild(ttsp);
    card.appendChild(gsp);
    document.getElementById("1").appendChild(card);
}

var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 5s
      setTimeout(showSlides, 5000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
 
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
