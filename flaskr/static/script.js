document.addEventListener('DOMContentLoaded', () => {
    let show_detail = document.getElementsByTagName('h2')[0];
    let images = document.querySelectorAll('.img');
    let detail1 = document.querySelectorAll('.detail1');
    hide_detail = true;
    show_detail.addEventListener('click', () => {
        if (hide_detail) {
            hide_detail = false;
            show_detail.innerHTML = '&#215;';
            profile_pic.style.height = '100px';
            profile_pic.style.width = '100px';
            profile_pic.style.margin = '7.5px';
            profile_pic.style.border = '3px solid black';
            detail1.forEach(detail2 => {
                detail2.classList.remove('detail1');
                detail2.classList.add('detailhide');
            });
            images.forEach(image => {
                image.classList.remove('img');
                image.classList.add('imgs');
            });
        } else {
            hide_detail = true;
            show_detail.innerHTML = '&#8801;';
            profile_pic.style.height = '0px';
            profile_pic.style.width = '0px';
            profile_pic.style.border = '0px';
            profile_pic.style.margin = '0px';
            detail1.forEach(detail2 => {
                detail2.classList.remove('detailhide');
                detail2.classList.add('detail1');
            });
            images.forEach(image => {
                image.classList.remove('imgs');
                image.classList.add('img');
            });
        }
    });
});