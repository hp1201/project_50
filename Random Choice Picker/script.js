// 获取 textarea tags 的节点
const textarea = document.querySelector('#textarea')
const tagsEl = document.querySelector('#tags')
// *‘    是页面加载进来自动获取文本焦点
textarea.focus()
// todo- 封装函数 使用户敲击 Enter键 时 产生 随机选择的效果
textarea.addEventListener('keyup', (e) => {
  createTag(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    randomSelect()
  }
})
// todo- 封装一个函数 createTag  当用户输入文本内容时 获取文本内容并渲染到 tagsEl 中
function createTag(text) {
  // !先对用户输入的内容进行 空白 处理
  const tags = text
    .split(',')
    .filter((text) => text.trim() !== '')
    .map((text) => text.trim())
  // !再使 tagsEl 的文本内容为空
  tagsEl.innerHTML = ''
  // !遍历创建span节点作为内容 容器
  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}
// todo- 封装函数 使其 生产随机数 | 添加 highlight 样式 | 删除 highlight 样式
function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}
function highlightTag(tag) {
  tag.classList.add('highlight')
}
function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
// todo-   封装一个定时延时函数  使其让 tagsEl 有随机选择的效果
function randomSelect() {
  const timer = 30
  // 首先  让其拥有 highlight 类，延时0.5s后 删除 highlight 类
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    if (randomTag !== undefined) {
      // 添加 highlight 类
      highlightTag(randomTag)
      // 删除 highlight 类
      setTimeout(() => {
        unHighlightTag(randomTag)
      }, 100)
    }
  }, 100)

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100)
  }, timer * 100)
}
