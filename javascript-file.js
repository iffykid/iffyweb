
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);

  /*
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
  */
}


function openCloseModal(input) {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
      const paragraph = document.getElementById("modalText");
      if(input === "logo-design"){
      paragraph.textContent = "Logo design is a crucial element of any business's branding and marketing strategy. It's the visual representation of your company's identity, and it helps customers to quickly and easily recognize and remember your brand. A well-designed logo can help to differentiate your business from your competitors and create a strong, professional image that inspires trust and confidence in your customers. Our logo design services provide your business with a unique, eye-catching design that accurately reflects your brand's values and personality, helping you to stand out in a crowded market and attract more customers. Whether you're starting a new business or looking to revamp your existing branding, our team of experienced designers can help you create a logo that effectively communicates your message and resonates with your target audience.";
      }
      else if(input === "web-design"){
        paragraph.textContent = "Web design is a crucial element of any business's online presence and marketing strategy. It's the visual representation of your company's online identity, and it helps customers to quickly and easily navigate and interact with your website. A well-designed website can help to differentiate your business from your competitors and create a strong, professional image that inspires trust and confidence in your customers. Our web design services provide your business with a unique, user-friendly design that accurately reflects your brand's values and personality, helping you to stand out in a crowded market and attract more customers. Whether you're starting a new business or looking to revamp your existing website, our team of experienced designers can help you create a website that effectively communicates your message and resonates with your target audience.";
      }
      else if(input === "social-media"){
        paragraph.textContent = "Our social media design services provide your business with professional, visually appealing designs for your social media platforms. From profile pictures and cover photos to posts and ads, we can help you create a cohesive and on-brand social media presence that effectively communicates your message and resonates with your target audience. Let us help you make a strong impression on social media and stand out in a crowded market.";
      }
      else if(input === "aa-edit"){
        paragraph.textContent = "Our album art design and graphic edit services provide your business or personal brand with visually stunning and professional designs for your music releases and promotional materials. From custom album covers and liner notes to promotional posters and social media graphics, we can help you create a cohesive and on-brand visual identity that effectively communicates your message and resonates with your target audience. We can also provide customised wallpapers and pictures for your personal or professional use, helping you to add a unique and professional touch to your digital spaces. Let us help you make a strong visual impact and stand out in your industry.";
      }
      else if(input === "customized-apparel"){
        paragraph.textContent = "Our customised apparel services provide you or your business or personal brand with high-quality and professionally designed clothing options. From graphic tees to hats and hoodies, we can help you create a cohesive and on-brand wardrobe that effectively communicates your message and resonates with your target audience. We offer a wide range of popular graphic tees and can work with you to design custom apparel that is unique to your brand. Our team of experienced designers and manufacturers ensures that every piece of clothing is of the highest quality and meets your exact specifications. Let us help you make a strong fashion statement and stand out in your industry.";
      }


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


function notification(input) {
  // Get the modal
  //alert("working " + input);
  var noty = document.getElementById("noty");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  noty.style.display = "block";
  const txt = document.getElementById("notification-text");
  txt.textContent = " " + input;

  span.onclick = function() {
    noty.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == noty) {
      noty.style.display = "none";
    }
  }
}


function processFormData(email, image, message) {
  // Validate the email
  if (!validateEmail(email)) {
    alert('invalid email');
    return 'Invalid email';
  }

  // Store the form data in variables
  var emailField = email;
  var imageField = image;
  var messageField = message;

  alert("thank you " + emailField)
  return 'Form data stored';

}

function validateEmail(email) {
  // Check if the email is in a valid format
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}



function changeImage(id_name) {
const sliderMainImage = document.getElementById("product-main-image"); //product container image
const sliderImageList = document.getElementsByClassName("image-list"); // image thumblian group selection
console.log(sliderImageList);

sliderImageList[0].onclick = function() {
    sliderMainImage.src = sliderImageList[0].src;
    //console.log(sliderMainImage.src);
};

sliderImageList[1].onclick = function(){
    sliderMainImage.src = sliderImageList[1].src;
    //console.log(sliderMainImage.src);
};

sliderImageList[2].onclick = function(){
    sliderMainImage.src = sliderImageList[2].src;
    //console.log(sliderMainImage.src);
};

}


function downloadImage( ) {
  const url = "../" + localStorage.getItem("product_image_url");
  const name =  localStorage.getItem("product_name");
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}



/*
window.addEventListener("load", function(){
  setTimeout(
    function open(event){
      document.querySelector(".popup").style.display = "block";
    },
    2000
  )
});

document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});*/


////////////////////////// product handler



/*radio buttons for custom design
document.getElementById("single-side").addEventListener("change", function() {
    if(this.checked) {
        document.getElementById("front-back").checked = false;
    }
});

document.getElementById("front-back").addEventListener("change", function() {
    if(this.checked) {
        document.getElementById("single-side").checked = false;
    }
});
*/
