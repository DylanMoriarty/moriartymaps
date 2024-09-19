// elements
const news = document.querySelector('#n')
const maps = document.querySelector('#m')
const inter = document.querySelector('#i')
const person = document.querySelector('#p')
// const prints = document.querySelector('#s')

const items = document.querySelectorAll('.item')

const checkboxes = [news, maps, inter, person, /*prints*/]

checkboxes.map((c, i) => {
    c.addEventListener('click', (e) => {
        const targetId = e.target.id

        checkboxes.map((box) => {
            if(box.id != targetId) {
                box.checked = false
            }
        })

        filter()
    })
})

function filter() {
    let checkedBoxes = []

    checkboxes.map((c, i) => {
        if(c.checked) {
            checkedBoxes.push(c.id)
        }
    })

    if(checkedBoxes.length === 0) {
        console.log('reaching reachin')

        items.forEach((item) => {
            prevClass = item.className

            item.className = prevClass.replaceAll('hidden', '')
        })
    } else {
        const filterList = checkedBoxes.map((c) => '&' + c)

        items.forEach((item) => {
            prevClass = item.className
            let hasCat = false

            filterList.map((f) => {
                if(prevClass.includes(f)) {
                    hasCat = true
                }
            })

            if(!hasCat) {
                item.className = prevClass + ' hidden'
            } else {
                item.className = prevClass.replaceAll('hidden', '')
            }
        })
    }
}

