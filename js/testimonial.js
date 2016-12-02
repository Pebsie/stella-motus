//this script powers the testimonials seen on the About page

var testimonials = document.querySelectorAll("#testimonials .testimonial"); //grab all of the testimonials
var currentTestimonial = Math.floor(Math.random() *  testimonials.length); //set the current testimonial to be random
var testimonialInterval = setInterval(nextTestimonial, 5000); //create an interval timer to call nextTestimonial() every 5000ms
testimonials[currentTestimonial].className = "testimonial showing"; //set the randomly selected testimonial as showing


function nextTestimonial() { //cycle testimonials
  testimonials[currentTestimonial].className = 'testimonial';
  currentTestimonial = (currentTestimonial+1) % testimonials.length; //modulo to ensure that we aren't trying to change to a testimonial that doesn't exist
  testimonials[currentTestimonial].className = "testimonial showing";
}
