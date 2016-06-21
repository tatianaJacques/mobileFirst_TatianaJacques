document.addEventListener('DOMContentLoaded', function() {

    var visit = document.querySelector('.c-search .visit');
    var containerVisit = document.querySelector('.c-show-visit');
    var cPost = document.querySelector('.formSearch .c-post');

    var guide = document.querySelector('.c-search .guide');
    var containerGuide = document.querySelector('.c-show-guide');

    visit.addEventListener('click', function() {

        if(containerVisit.classList.contains('isShow')) {
            cPost.classList.remove('isShow');
        }else{
            cPost.classList.add('isShow');
        }
        
        containerVisit.classList.toggle('isShow');
        containerGuide.classList.remove('isShow');
    }, false);

    guide.addEventListener('click', function() {

        if(containerGuide.classList.contains('isShow')) {
            cPost.classList.remove('isShow');
        }else{
            cPost.classList.add('isShow');
        }

        containerGuide.classList.toggle('isShow');
        containerVisit.classList.remove('isShow');
    }, false);
})