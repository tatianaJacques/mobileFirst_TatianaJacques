document.addEventListener('DOMContentLoaded', function () {

    var visit = document.querySelector('.c-search .visit');
    var containerVisit = document.querySelector('.c-show-visit');
    var cPost = document.querySelector('.formSearch .c-post');

    var guide = document.querySelector('.c-search .guide');
    var containerGuide = document.querySelector('.c-show-guide');

    visit.addEventListener('click', function () {

        if (containerVisit.classList.contains('isShow')) {
            cPost.classList.remove('isShow');
        } else {
            cPost.classList.add('isShow');
        }

        visit.classList.add('active');
        guide.classList.add('lock');

        guide.classList.remove('active');
        visit.classList.remove('lock');

        containerVisit.classList.toggle('isShow');
        containerGuide.classList.remove('isShow');

        if (!containerVisit.classList.contains('isShow')) {
            guide.classList.remove('active');
            guide.classList.remove('lock');
            visit.classList.remove('lock');
            visit.classList.remove('active');
        }

    }, false);

    guide.addEventListener('click', function () {

        if (containerGuide.classList.contains('isShow')) {
            cPost.classList.remove('isShow');
        } else {
            cPost.classList.add('isShow');
        }

        guide.classList.add('active');
        visit.classList.add('lock');

        visit.classList.remove('active');
        guide.classList.remove('lock');

        containerGuide.classList.toggle('isShow');
        containerVisit.classList.remove('isShow');

        if (!containerGuide.classList.contains('isShow')) {
            guide.classList.remove('active');
            guide.classList.remove('lock');
            visit.classList.remove('lock');
            visit.classList.remove('active');
        }
        
    }, false);

    //notifications

    var body = document.querySelector('.container');

    var not = document.querySelector('header .not');
    var notIcon = document.querySelector('header .not .icon');

    var param = document.querySelector('header .informations');
    var paramIcon = document.querySelector('header .informations .icon');


    var cNotifications = document.querySelector('.c-sub-header.c-notifications');
    var cParam = document.querySelector('.c-sub-header.c-param');

    not.addEventListener('click', function () {
        cParam.classList.remove('isShow');
        cNotifications.classList.toggle('isShow');
        notIcon.classList.toggle('isActive');
        paramIcon.classList.remove('isActive');
        body.classList.remove('overlay');

        if (cNotifications.classList.contains('isShow')) {
            body.classList.add('overlay');
        } else {
            body.classList.remove('overlay');
        }

    });

    //param

    param.addEventListener('click', function () {
        cNotifications.classList.remove('isShow');
        cParam.classList.toggle('isShow');
        paramIcon.classList.toggle('isActive');
        notIcon.classList.remove('isActive');
        body.classList.remove('overlay');

        if (cParam.classList.contains('isShow')) {
            body.classList.add('overlay');
        } else {
            body.classList.remove('overlay');
        }

    });

    body.addEventListener('click', function () {
        cNotifications.classList.remove('isShow');
        cParam.classList.remove('isShow');
        paramIcon.classList.remove('isActive');
        notIcon.classList.remove('isActive');
        body.classList.remove('overlay');

    });

})