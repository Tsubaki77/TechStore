// const modalcontainer = document.querySelector('.modal-container');

// const modalTrigger = document.querySelectorAll('.modal-trigger1');

// modalTrigger.forEach(trigger => {
//   trigger.addEventListener('click', toggleModal );
// });

// Fonction FenêtreModale

const modalbtn = document.querySelectorAll('[data-toggle="modal"]');


for(let button of modalbtn){
    button.addEventListener('click', function(e){
        let target = this.dataset.target;
        
        let modal = document.querySelector(target);
        modal.classList.add('active'); 

        const closebtn = modal.querySelectorAll('.close-modal');

        for(let close of closebtn){
            close.addEventListener("click", () =>{
                modal.classList.remove('active');
            })
        }

        modal.addEventListener("click", function(){
            this.classList.remove('active');
        })

    });
}


// Fonction Slick Slider

$(document).ready(function(){
$('.slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('#sliderRight').click(function(){
    $('.slider').slick('slickNext');
});

$('#sliderLeft').click(function(){
    $('.slider').slick('slickPrev');
});
});




