$(document).ready(function () {
    let currentSlide = 0;
    const totalSlides = $('.slide').length;

    function updateSlider() {
        const newTransform = -currentSlide * 100;
        $('.slide').each(function(index) {
            $(this).css('transform', 'translateX(' + newTransform + '%)');
        });
        $('.dot').removeClass('active');
        $('.dot[data-slide="' + currentSlide + '"]').addClass('active');

        // Update dot colors based on current slide
        $('.dot').each(function(index) {
            if (index <= currentSlide) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }

    $('.dot').click(function () {
        currentSlide = $(this).data('slide');
        updateSlider();
    });

    function autoSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    setInterval(autoSlide, 3000); // Change slide every 3 seconds

    $('.slide').hover(
        function () {
            $(this).find('.overlay').css('opacity', '1');
        },
        function () {
            $(this).find('.overlay').css('opacity', '0');
        }
    );
});



// our project
        // Change project image and show overlay on click of info-box
        $('.info-box').click(function () {
            // Remove active class from all info-boxes
            $('.info-box').removeClass('active');
            // Add active class to the clicked info-box
            $(this).addClass('active');
    
            // Get data attributes from clicked info-box
            const imageUrl = $(this).data('image');
            const headingText = $(this).find('h3').text();
            const infoText = $(this).find('p').text();
    
            // Update project heading
            $('#project-heading').text(headingText);
    
            // Update project image
            $('.project-image').attr('src', imageUrl);
    
            // Update overlay content
            $('.overlay-heading').text(headingText);
            $('.overlay-info').text(infoText);
    
            // Show info overlay
            $('.info-overlay').addClass('active');
        });
    

        //pop up window code
        $(document).ready(function() {
            // Load the modal HTML content
            $('#modalContainer').load('modal.html', function() {
                // Show the modal when the 'Contact Us' button is clicked
                $('#contactUsBtn').on('click', function() {
                    $('#contactUsModal').modal('show');
                });
        
                // Enable the submit button only when all fields are filled and checkbox is checked
                $('#contactForm input').on('input change', function() {
                    const allFieldsFilled = $('#email').val() && $('#firstName').val() && $('#lastName').val();
                    const agreementChecked = $('#agreement').is(':checked');
                    $('#submitBtn').prop('disabled', !(allFieldsFilled && agreementChecked));
                });
            });
        });
      