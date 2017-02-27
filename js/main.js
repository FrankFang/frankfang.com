items = document.querySelectorAll('x-markdown')

Array.prototype.forEach.call(items, function(item){
  html = marked(item.textContent)
  item.innerHTML = html
  item.classList.add('converted')
})


