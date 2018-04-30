const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

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