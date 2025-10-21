var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }

            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab")

        }

        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }

        function closemenu(){
            sidemenu.style.right = "-200px";
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzyg4Rs8zLH4MQ0bGkCAqO7ZlCLxhGe6L8heDAtr1_r6vWAJTRPLqdK7NeH4UZ5KKPGBQ/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully."
                setTimeout(function(){
                    msg.innerHTML = ""
                }, 5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })

document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('backToTop');

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Show button after scrolling 100px
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  // Scroll to top when button is clicked
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  });
});
