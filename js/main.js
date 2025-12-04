(function ($) {
    "use strict";

    // Render Portfolio Data
    function renderPortfolio() {
        const data = portfolioData;

        // Render Site Info
        if (data.site) {
            $('title').text(data.site.title);
            $('.navbar-brand h1').text(data.site.brandName);
        }

        // Render Navigation
        if (data.navigation) {
            const leftNav = data.navigation.left.map(item => 
                `<a href="${item.href}" class="nav-item nav-link ${item.href === '#home' ? 'active' : ''}">${item.text}</a>`
            ).join('');
            const rightNav = data.navigation.right.map(item => 
                `<a href="${item.href}" class="nav-item nav-link">${item.text}</a>`
            ).join('');
            $('.navbar-nav.ms-auto').html(leftNav);
            $('.navbar-nav.me-auto').html(rightNav);
        }

        // Render Header
        if (data.header) {
            $('#home h3.text-primary.mb-3').text(data.header.prefix);
            $('#home h1.display-3').text(data.header.name);
            $('#home .typed-text').text(data.header.typedText.join(', '));
            $('#home .btn-primary').first().attr('href', data.header.cvLink || '#');
            $('#home .col-lg-6 img.img-fluid').attr('src', data.header.profileImage);
            
            // Set music URL
            if (data.header.musicUrl) {
                const audioPlayer = document.getElementById('backgroundMusic');
                const audioSource = document.getElementById('audioSource');
                if (audioPlayer && audioSource) {
                    audioSource.src = data.header.musicUrl;
                    audioPlayer.load(); // Reload audio dengan source baru
                }
            }
        }

        // Render About
        if (data.about) {
            $('#about .years h1.display-1').text(data.about.years);
            $('#about .years h5').text(data.about.yearsLabel);
            $('#about .years + h3').text(data.about.experience);
            $('#about .col-lg-6.wow.fadeInUp p.mb-4').first().text(data.about.description);
            data.about.features.forEach((feature, index) => {
                $('#about .col-lg-6.wow.fadeInUp p.mb-3').eq(index).html(`<i class="far fa-check-circle text-primary me-3"></i>${feature}`);
            });
            if (data.about.images && data.about.images.length >= 2) {
                $('#about .col-lg-6 .row.g-3 img').eq(0).attr('src', data.about.images[0]);
                $('#about .col-lg-6 .row.g-3 img').eq(1).attr('src', data.about.images[1]);
            }
            if (data.about.stats && data.about.stats.length >= 2) {
                $('#about h5:contains("Happy Clients")').next('h2').text(data.about.stats[0].value).attr('data-toggle', 'counter-up');
                $('#about h5:contains("Projects Completed")').next('h2').text(data.about.stats[1].value).attr('data-toggle', 'counter-up');
            }
        }

        // Render Skills
        if (data.skills) {
            $('#skill h1.display-5').text(data.skills.title);
            $('#skill p.mb-4').first().text(data.skills.description);
            $('#skill h3.mb-4').text(data.skills.mySkillsTitle);
            
            // Render skills progress bars
            const skillsHtml = data.skills.skills.map((skill, index) => {
                return `
                    <div class="col-md-6">
                        <div class="skill mb-4">
                            <div class="d-flex justify-content-between">
                                <h6 class="font-weight-bold">${skill.name}</h6>
                                <h6 class="font-weight-bold">${skill.percentage}%</h6>
                            </div>
                            <div class="progress">
                                <div class="progress-bar ${skill.color}" role="progressbar" aria-valuenow="${skill.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            $('#skill .row.align-items-center').html(skillsHtml);

            // Render Experience
            const experienceHtml = data.skills.experience.map(exp => `
                <div class="col-sm-6">
                    <h5>${exp.title}</h5>
                    <hr class="text-primary my-2">
                    <p class="text-primary mb-1">${exp.period}</p>
                    <h6 class="mb-0">${exp.company}</h6>
                </div>
            `).join('');
            $('#tab-1 .row').html(experienceHtml);

            // Render Education
            const educationHtml = data.skills.education.map(edu => `
                <div class="col-sm-6">
                    <h5>${edu.title}</h5>
                    <hr class="text-primary my-2">
                    <p class="text-primary mb-1">${edu.period}</p>
                    <h6 class="mb-0">${edu.company}</h6>
                </div>
            `).join('');
            $('#tab-2 .row').html(educationHtml);
        }

        // Render Services
        if (data.services) {
            $('#service h1.display-5').text(data.services.title);
            $('#service .btn-primary').first().attr('href', data.services.hireMeLink || '#');
            const servicesHtml = data.services.items.map((service, index) => {
                const delay = index % 2 === 0 ? '0.1s' : '0.3s';
                return `
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="${delay}">
                        <div class="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                            <div class="bg-icon flex-shrink-0 mb-3">
                                <i class="${service.icon} fa-2x text-dark"></i>
                            </div>
                            <div class="ms-sm-4">
                                <h4 class="mb-3">${service.title}</h4>
                                <h6 class="mb-3">Start from <span class="text-primary">$${service.price}</span></h6>
                                <span>${service.description}</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            $('#service .row.g-4').html(servicesHtml);
        }

        // Render Projects
        if (data.projects) {
            $('#project h1.display-5').text(data.projects.title);
            const filtersHtml = data.projects.filters.map(filter => 
                `<li class="mx-3 ${filter.active ? 'active' : ''}" data-filter="${filter.filter}">${filter.text}</li>`
            ).join('');
            $('#portfolio-flters').html(filtersHtml);
            
            const projectsHtml = data.projects.items.map(project => `
                <div class="col-lg-4 col-md-6 portfolio-item ${project.category}">
                    <div class="portfolio-img rounded overflow-hidden">
                        <img class="img-fluid" src="${project.image}" alt="">
                        <div class="portfolio-btn">
                            <a class="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="${project.lightbox}" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="${project.link || '#'}"><i class="fa fa-link"></i></a>
                        </div>
                    </div>
                </div>
            `).join('');
            $('.portfolio-container').html(projectsHtml);
        }

        // Render Contact
        if (data.contact) {
            $('#contact h1.display-5').text(data.contact.title);
            $('#contact .btn-primary').first().attr('href', data.contact.sayHelloLink || '#');
            $('#contact h3.fw-bold').eq(0).text(data.contact.office);
            $('#contact h3.fw-bold').eq(1).text(data.contact.phone);
            $('#contact h3.fw-bold').eq(2).text(data.contact.email);
            const socialHtml = data.contact.socialLinks.map(link => 
                `<a class="btn btn-square btn-primary me-2" href="${link.url || '#'}"><i class="${link.icon}"></i></a>`
            ).join('');
            $('#contact .d-flex.pt-2').html(socialHtml);
            $('#contact p.mb-4').html(data.contact.formNote);
        }

        // Render Footer
        if (data.footer) {
            $('.container-fluid.bg-dark a').first().text(data.footer.siteName).attr('href', data.footer.siteLink);
            $('a:contains("HTML Codex")').text(data.footer.designedBy).attr('href', data.footer.designedByLink);
            $('a:contains("ThemeWagon")').text(data.footer.distributedBy).attr('href', data.footer.distributedByLink);
        }

        // Reinitialize components after render
        initializeComponents();
    }

    // Initialize Components
    function initializeComponents() {
        // Reinitialize Typed
        if ($('.typed-text-output').length == 1) {
            const typed_strings = $('.typed-text').text();
            if (typeof Typed !== 'undefined') {
                $('.typed-text-output').each(function() {
                    if ($(this).data('typed')) {
                        $(this).data('typed').destroy();
                    }
                });
                var typed = new Typed('.typed-text-output', {
                    strings: typed_strings.split(', '),
                    typeSpeed: 100,
                    backSpeed: 20,
                    smartBackspace: false,
                    loop: true
                });
                $('.typed-text-output').data('typed', typed);
            }
        }

        // Reinitialize Portfolio Isotope
        if ($('.portfolio-container').length > 0) {
            var portfolioIsotope = $('.portfolio-container').isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });
            $('#portfolio-flters li').off('click').on('click', function () {
                $("#portfolio-flters li").removeClass('active');
                $(this).addClass('active');
                portfolioIsotope.isotope({filter: $(this).data('filter')});
            });
        }

        // Reinitialize Counter
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // Hot Reload using Server-Sent Events
    function initHotReload() {
        if (typeof EventSource !== 'undefined') {
            const eventSource = new EventSource('/hot-reload');
            
            eventSource.onmessage = function(event) {
                const data = JSON.parse(event.data);
                console.log('File changed:', data.file);
                
                // Reload the page to show changes
                if (data.file.includes('data.js') || data.file.includes('main.js') || data.file.includes('index.html')) {
                    location.reload();
                } else if (data.file.includes('css')) {
                    // Reload CSS without full page reload
                    const links = document.querySelectorAll('link[rel="stylesheet"]');
                    links.forEach(link => {
                        const href = link.href.split('?')[0];
                        link.href = href + '?v=' + Date.now();
                    });
                }
            };
            
            eventSource.onerror = function(error) {
                // SSE connection closed or error - try to reconnect
                console.log('Hot reload connection closed');
            };
        }
    }

    // Initialize hot reload if on localhost
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.port === '3000') {
        initHotReload();
    }

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Render portfolio on document ready
    $(document).ready(function() {
        if (typeof portfolioData !== 'undefined') {
            renderPortfolio();
        }
    });
    
    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(document).on('click', ".navbar-nav a", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Play/Pause Music Button
    let isPlaying = false;
    const playMusicBtn = document.getElementById('playMusicBtn');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const musicStatus = document.getElementById('musicStatus');
    
    if (playMusicBtn && backgroundMusic) {
        playMusicBtn.addEventListener('click', function() {
            if (isPlaying) {
                // Pause music
                backgroundMusic.pause();
                isPlaying = false;
                playMusicBtn.classList.remove('playing');
                if (musicStatus) {
                    musicStatus.textContent = 'Play Music';
                }
            } else {
                // Play music
                backgroundMusic.play().then(() => {
                    isPlaying = true;
                    playMusicBtn.classList.add('playing');
                    if (musicStatus) {
                        musicStatus.textContent = 'Pause Music';
                    }
                }).catch(error => {
                    console.log('Error playing music:', error);
                    // Some browsers require user interaction first
                    alert('Silakan klik sekali lagi untuk memutar musik');
                });
            }
        });
        
        // Update status when music ends or is paused by other means
        backgroundMusic.addEventListener('pause', function() {
            isPlaying = false;
            playMusicBtn.classList.remove('playing');
            if (musicStatus) {
                musicStatus.textContent = 'Play Music';
            }
        });
        
        // Monitor if music stops unexpectedly and restart if needed
        let musicCheckInterval;
        function startMusicMonitor() {
            if (musicCheckInterval) return; // Already monitoring
            musicCheckInterval = setInterval(function() {
                if (isPlaying && backgroundMusic.paused && !backgroundMusic.ended) {
                    // Music was paused unexpectedly, restart it
                    backgroundMusic.play().catch(error => {
                        console.log('Error restarting music:', error);
                    });
                }
            }, 1000); // Check every second
        }
        
        function stopMusicMonitor() {
            if (musicCheckInterval) {
                clearInterval(musicCheckInterval);
                musicCheckInterval = null;
            }
        }
        
        backgroundMusic.addEventListener('play', function() {
            isPlaying = true;
            playMusicBtn.classList.add('playing');
            if (musicStatus) {
                musicStatus.textContent = 'Pause Music';
            }
            // Start monitoring when music plays
            startMusicMonitor();
        });
        
        // Ensure music continues playing (loop is already set in HTML)
        // If music ends (shouldn't happen with loop, but just in case)
        backgroundMusic.addEventListener('ended', function() {
            if (isPlaying) {
                backgroundMusic.currentTime = 0;
                backgroundMusic.play().catch(error => {
                    console.log('Error replaying music:', error);
                });
            }
        });
        
        // Ensure loop attribute is set
        backgroundMusic.setAttribute('loop', 'loop');
        
        // Stop monitoring when music is paused
        backgroundMusic.addEventListener('pause', function() {
            stopMusicMonitor();
        });
    }


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

    
})(jQuery);

