axios.get('https://jsonplaceholder.typicode.com/photos/10')
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reload(res.data)
            reloadContent(res.data)
        }
    })
    .catch(err => console.log(err))

let more = document.querySelector('.more')
let content = document.querySelector('.content')


function reloadContent(arr) {
    for (let i = 0; i < 4; i++) {
        let img = document.createElement('img')
        img.classList.add('img_js')
        img.src = arr.url
        content.append(img)

    }
}

function reload(arr) {
    for (let i = 0; i < 24; i++) {
        let img = document.createElement('img')
        img.classList.add('image')
        img.src = arr.url
        more.append(img)
    }
}


