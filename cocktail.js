const input = document.querySelector('input')

const items = document.getElementById('items')



// (()=>{
//     console.log('hello')
//     })()

const data = [
    {
        name: 'A1',
        type: 'Cocktail glass',
        image: './img/cock1.jpg',
        category: 'Alcoholic'
    },
    {
        name: 'ABC',
        type: 'Short glass',
        image: './img/cock2.jpg',
        category: 'Alcoholic'
    },
    {
        name: 'Ace',
        type: 'Martini glass',
        image: './img/cock3.jpg',
        category: 'Alcoholic'
    }
]

const renderHTML =(arrayInput) => {
    const result = arrayInput.map(item => {
        return `<div class="img-txt" id="cocktail1">
                     <div class="img"><img src="${item.image}" alt=""></div>
                     <div class="text">
                        <p class="a1">${item.name}</p>
                        <p class="glass"> ${item.type}</p>
                        <p class="alcoholic">${item.category}</p>
                    </div>
    
                </div>`
    })
    // setting innerHTML
    items.innerHTML = result.join('')
}

renderHTML(data)


input.addEventListener('keyup', (e)=>{
    e.preventDefault()
    
  const filteredData =  data.filter(item => {
        if(item.name.toLowerCase().includes(e.target.value.toLowerCase())){
            return true
        }
        return false
    })

    // console.log({filteredData})
    renderHTML(filteredData)
})
