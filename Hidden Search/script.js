//拿到 input btn 节点
let ipt = document.querySelector('#ipt')
let btn = document.querySelector('#btn')
ipt.focus()
let hd = true
btn.addEventListener('click', () => {
  if (hd === true) {
    ipt.style.width = 0 + 'px'
    ipt.style.padding = 0 + 'px'
    hd = false
  } else {
    ipt.style.width = 200 + 'px'
    ipt.style.padding = 15 + 'px'
    ipt.focus()
    hd = true
  }
})
