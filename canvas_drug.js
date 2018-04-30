const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
document.getElementById('image').appendChild(canvas)

const img = new Image()
img.src = 'https://ja.wikipedia.org/static/images/project-logos/jawiki.png'
img.crossOrigin = 'anonymous'

img.onload = () => {
    canvas.height = img.height
    canvas.width = img.width
    ctx.drawImage(img, 0, 0)
}

img.onerror = () => {
    console.log('画像の読み込み失敗')
}

let isDragging = false

let start = {
    x: 0,
    y: 0
}

let diff = {
    x: 0,
    y: 0
}

let end = {
    x: 0,
    y: 0
}

const redraw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, diff.x, diff.y)
}
canvas.addEventListener('mousedown', event => {
    isDragging = true
    start.x = event.clientX
    start.y = event.clientY
})
canvas.addEventListener('mousemove', event => {
    if (isDragging) {
        diff.x = (event.clientX - start.x) + end.x
        diff.y = (event.clientY - start.y) + end.y
        redraw()
    }
})
canvas.addEventListener('mouseup', event => {
    isDragging = false
    end.x = diff.x
    end.y = diff.y
})