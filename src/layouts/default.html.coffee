--- cson

styles: [
  '/assets/styles/app.css']
scripts: [
  '/assets/scripts/vendors.js'
  '/assets/scripts/app.js']

---


doctype 5
html ->

  head ->
    
    meta charset:"utf-8"
    meta name:"viewport", content:"width=device-width, initial-scale=1.0"
    title ""
    link rel:"shortcut icon", href:"data:;base64,="

    if @document.description?
      meta(name:"description", content:@document.description)
    
    #insert styles using frontend plugin
    for url in @assets('styles')
      link rel:"stylesheet", href:url

  body ->

    #text(@partial('navigation.html.coffee'))

    text @content

    #insert script using frontend plugin
    #this picks up incrementally-named document scripts as well
    for url in @assets('scripts')
      script src:url, defer:"defer"
