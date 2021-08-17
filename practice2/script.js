function navFunc() {
    document.querySelector('html').classList.toggle('open');
}

function iePolyfill() {
    if ( !document.currentScript ) {
        let ie1 = document.createElement('script');
        ie1.src = 'ie/css-var-polyfill.js';
        document.head.appendChild(ie1);

        let ie2 = document.createElement('script');
        ie2.src = 'ie/ofi.min.js'
        document.head.appendChild(ie2);

        let ie3 = document.createElement('script');
        let ie3Text = document.createTextNode('window.onload=function() {objectFitImages();}');
        ie3.appendChild(ie3Text);
        document.head.appendChild(ie3);

        let ie4 = document.createElement('script');
        let ie4Text = document.createTextNode('img { font-family: "object-fit: cover; }');
        ie4.appendChild(ie4Text);
        document.head.appendChild(ie4);
    }
}