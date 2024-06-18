const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classlist.add('show'); //determines whether elements on the page will be visible or not
        } else { 
            entry.target.classlist.remove('show');
        }
    });
});
        
const hiddenElements = document.querySelectorAll('.hidden'); 
hiddenElements.forEach((el) => observer.observe(el)); 
/*
grabbing all the elements under the hidden class 
so they can have an animation through CSS styling applied later on 
*/

