
var myVariable = "Hello World";

function storeUIDInSession(uid) {
  // Set the session storage
  sessionStorage.setItem("uid", uid);

  // Set the expiration time to one hour from now
  var expirationTime = new Date();
  expirationTime.setHours(expirationTime.getSeconds() + 5);
  sessionStorage.setItem("expirationTime", expirationTime);
}

/*window.onload = function() {
console.log(lastname + "hello");
}*/


//storing session database
/////////////////////////////////////////////////
function notification(input) {
  // Get the modal
  //alert("working " + input);
  var noty = document.getElementById("noty");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  noty.style.display = "block";
  const txt = document.getElementById("notification-text");
  txt.textContent = " " + input;

  span.onclick = function () {
    noty.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == noty) {
      noty.style.display = "none";
    }
  }
}


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyC5_IvZgKAsnMZmqssAxD5LXHGCA8Q41_U",
  authDomain: "my-site-fa227.firebaseapp.com",
  databaseURL: "https://my-site-fa227-default-rtdb.firebaseio.com",
  projectId: "my-site-fa227",
  storageBucket: "my-site-fa227.appspot.com",
  messagingSenderId: "191879368910",
  appId: "1:191879368910:web:24b74a685c2f3bf4b9c09f",
  measurementId: "G-4M55D2J4SL"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// reference your database

function inqSubmit(name, email, message) {

  //var name = "customer";
  //var email = "customer@email.com";
  //var message = "hi who are you";
  db.collection("inquiries").add({
    inq_contact_name: name,
    inq_contact_email: email,
    inq_message: message,
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      notification("Error adding document: ", error);
    });
}

function cloudGet() {
  db.collection("inquiries").where("inq_desc", "==", "Ada").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.data().inq_desc);
      console.log(doc.id);
    });
  })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}


function getUserOrders() {
  const tableData = [];
  db.collection("orders").where("user_id", "==", sessionStorage.getItem("uid")).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      //console.log("from orders: " + doc.data().product_name);
      tableData.push([doc.data().order_num, doc.data().product_id, doc.data().product_name, doc.data().order_date,
      doc.data().order_status]);
      // doc.data() is never undefined for query doc snapshots
      //return data;
    });
    sessionStorage.setItem("orderTable", JSON.stringify(tableData));
    //console.log(tableData);
  })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

function getUserCart() {
  //console.log("cart work");
  const cartData = [];
  db.collection("carts").where("user_id", "==", sessionStorage.getItem("uid")).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      //console.log("from cart: " + doc.data().user_id);
      cartData.push(doc.data().cart_items);
      // doc.data() is never undefined for query doc snapshots
      //return data;
      //console.log("this is what is in the cart: " + doc.data().user_id);
    });
    sessionStorage.setItem("cartTable", JSON.stringify(cartData));
    console.log("items saved");
  })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}


//var tableArr = tableData
//console.log(tableData);
/*var options = {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
};

var today = new Date();
var dateString = today.toLocaleDateString('en-UK', options);
console.log(dateString);*/
//}


var products = [];
/*const product = {
  product_name: undifined,
  product_color: undifined,
  product_desc: undifined,
  product_image_url: undifined,
  product_price: undifined
};
*/
var loggedInUser = {
  user_id: "",
  user_name: "",
  user_email: "",
  user_phone: ""
};

function setUserValues(id, name, email, phone) {
  sessionStorage.setItem("user_id", id);
  sessionStorage.setItem("user_name", name);
  sessionStorage.setItem("user_email", email);
  sessionStorage.setItem("user_phone", phone);
}

//document.getElementById("user-name").innerHTML = loggedInUser.user_name;
//document.getElementById("user-email").innerHTML = loggedInUser.user_email;
//document.getElementById("user-number").innerHTML = loggedInUser.user_phone;

/*setInterval(function() {
  var storedSession = sessionStorage.getItem("loggedInUser");
  if (!storedSession) {
    console.log("Session has expired");
  } else {
    console.log("Session is active");
  }
}, 60000);*/


/*
var inquiries = {
  inq_description: undifined,
  ing_num: undifined,
  user_id: undifined
};

var orders = {
  order_date: undifined,
  odrer_num: undifined,
  order_paid: undifined,
  order_status: undifined,
  product_id: undifined,
  user_id: undifined
};
*/


function getProduct(productName) {
  //localStorage.clear();

  db.collection("products").where("product_name", "==", productName).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      //const product = {
      //localStorage.clear();
      localStorage.setItem("product_name", doc.data().product_name);
      localStorage.setItem("product_color", doc.data().product_color);
      localStorage.setItem("product_desc", doc.data().product_desc);
      //var imageLinks = doc.data().product_image_url;
      //console.log(imageLinks);
      localStorage.setItem("product_image_url", doc.data().product_image_url);
      console.log(localStorage.getItem("product_desc"));
      localStorage.setItem("product_price", doc.data().product_price);
      //location.assign('order.html')
      //};
      //products.push(product);
      //localStorage.setItem("product_name", products[0].product_image_url[0]);
      //console.log("this is product:"+ products[0].product_image_url[0]);
      //var image1 = document.getElementById("product-image1");
      //var data = localStorage.getItem("storedProduct");
      //console.log("the data" + data);
      //image1.src = products[0].product_image_url[0];
    });
  })
    .catch((error) => {
      notification(error);
    });
  //document.location.href = document.location.href;
}





var usersDB = firebase.database().ref("Users");

function signUp() {

  var email = document.getElementById('sign-email').value;
  var password = document.getElementById('sign-psw').value;

  const saveMessages = (name, pnumber, email, password) => {
    var newUser = usersDB.push();
    newUser.set({
      user_email: email,
      user_id: password,
      user_name: name,
      user_pnumber: pnumber
    });
  };
  saveMessages(name, pnumber, email, password);

  alert("user" + email + " created")

  //   reset the form
  document.getElementById("contactForm").reset();
}



const getElementVal = (id) => {
  return document.getElementById(id).value;
};



function signIn(useremail, username) {
  //const dbRef = firebase.database().ref();
  var email = "";
  var password = "";
  usersDB.orderByChild("email").equalTo("hi@gmail.com").once("value").then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      email = childSnapshot.val().email;
      password = childSnapshot.val().password;
      //console.log(email , "password is ", password);
    });
  });
}



function googleSignUp() {
  var name = document.getElementById('user-name').value;
  var phone = document.getElementById('user-phone').value
  var email = document.getElementById('user-email').value;
  var password = document.getElementById('user-password1').value;


  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      //console.log("new users uid is: " + user.uid);


      //var email = document.getElementById('sign-email').value;
      //var password = document.getElementById('sign-psw').value;
      var userid = user.uid;
      db.collection("users").add({
        user_name: name,
        user_phone: phone,
        user_email: email,
        user_id: userid,

      })
        .then(function (docRef) {
          document.getElementById("signup-form").style.display = "none";
          firebase.auth().currentUser.sendEmailVerification()
            .then(() => {
              notification("Email verification sent to: " + email);
            });
          //notification("Welcome to iffyweb " + name);

        })
        .catch(function (error) {
          notification("Error adding document: ", error);
        });

    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      notification(errorMessage);
    });
}


function googleSignIn() {
  var userSession = sessionStorage.getItem("uid");

  //if(userSession !== null){
  var email = document.getElementById('sign-email').value;
  var password = document.getElementById('sign-psw').value;
  firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in

    var user = userCredential.user;

    //sessionStorage.setItem("userUID", user.uid);
    //console.log("signed in" , user.uid);
    db.collection("users").where("user_id", "==", user.uid).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //console.log(doc.data());
        storeUIDInSession(doc.data().user_id);
        //console.console.log("user logged in: " , sessionStorage.get("uid"));
        setUserValues(doc.data().user_id, doc.data().user_name, doc.data().user_email, doc.data().user_phone);


      });
      document.getElementById("login-form").style.display = "none";
      //document.getElementById("login").style.display = "none";
      notification("WELCOME BACK " + sessionStorage.getItem("user_name"));
      // Set the session storage with the user object
      sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      getUserCart();
      document.location.href = document.location.href;
    });
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    notification(errorMessage);
  });
  //}
  /*else{
    console.log(sessionStorage.getItem("uid"))
    notification("User Signed In. Please Sign Out")
  }*/
}

function googleSignOut() {
  firebase.auth().signOut().then(() => {
    location.reload();
    sessionStorage.clear();
    notification("Signed Out");

  }).catch((error) => {
    notification("Unable to sign out");
  });
}


function forgotPassword() {
  var email = document.getElementById("forgot-email").value;

  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      notification("Password reset email sent!");

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      notification(errorMessage);
    });
}

function createOrder(ORDER) {
  let now = new Date();
  let date = now.toLocaleDateString();

  db.collection('order').add({
    to: sessionStorage.getItem("user_email"),
    message: {
      subject: "Order -" + localStorage.getItem("product_name"),
      html: "Order Confirmation for: " + orderInfo + ".",
    },
    order_date: date,
    order_num: 01,
    order_paid: false,
    order_status: "awaiting confirmation",
    product_id: localStorage.getItem("product_id"),
    product_name: localStorage.getItem("product_name"),
    user_id: sessionStorage.getItem("uid"),
  }).then(function (docRef) {
    document.getElementById("signup-form").style.display = "none";
    firebase.auth().currentUser.sendEmailVerification()
      .then(() => {
        notification("Email verification sent to: " + email);
      });
    //notification("Welcome to iffyweb " + name);
  })
    .catch(function (error) {
      notification("Error adding document: ", error);
    });


}

/*function signUp(){
  var email = document.getElementById('sign-email').value;
  var password = document.getElementById('sign-psw').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    alert("welcome" , email)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert(errorMessage)
  });

}*/
