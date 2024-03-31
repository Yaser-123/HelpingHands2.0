function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 3000
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    detectColorScheme();
  });
 
  

    document.getElementById('submit-button').addEventListener('click', function() {
      alert('Thank you for submitting the form, here is a list of candidates curated especially according to your requirements..');
      window.location.href = 'recruiter.html';
    });

// for aside
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.querySelector(".openbtn").style.display = "none"; // Hide the hamburger button
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.querySelector(".openbtn").style.display = "block"; // Show the hamburger button
}

document.getElementById('survey-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for filling the form, here is a list of jobs curated especially according to your skill set..');
  window.location.href = 'listofjob.html';
});