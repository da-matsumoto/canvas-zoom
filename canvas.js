const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
document.getElementById('image').appendChild(canvas)

const img = new Image()
img.src = 'girl.jpg'

img.onload = () => {
    canvas.height = img.height
    canvas.width = img.width
    ctx.drawImage(img, 0, 0)
}

img.onerror = () => {
    console.log('画像の読み込み失敗')
}

const slider = document.getElementById('zoom-slider')
slider.value = 1
slider.min = 0.01
slider.max = 2
slider.step = 'any'

slider.addEventListener('input', e => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const scale = e.target.value
    ctx.scale(scale,scale)
    ctx.drawImage(img, 0, 0)
    ctx.scale(1/ scale, 1/ scale)
})
