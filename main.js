const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const tabActive = $('.tab-item.active');
const lineActive = $('.tabs .line');

lineActive.style.left = tabActive.offsetLeft + 'px';
lineActive.style.width = tabActive.offsetWidth + 'px';

console.log([lineActive])
tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function(){
        // console.log(pane)
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        
        lineActive.style.left = this.offsetLeft + 'px';
        lineActive.style.width = this.offsetWidth + 'px';

        this.classList.add('active')
        pane.classList.add('active')
    }
})