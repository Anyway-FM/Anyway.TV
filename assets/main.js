var t = new Vue({
  el: '#wrapper',
  data: {
    characterSlide: 1,
    initBgName: 'tile2.gif',
    initBgOpacity: 0.8,
    playerOpen: false,
    bgStyle: {
      backgroundImage: 'url(assets/tile2.gif)',
      opacity: 0.8
    }
  },
  methods: {
    openPlayer: function() {
      t.playerOpen = true
    },
    mouseLeave: function() {
      console.log('Leave')
      t.bgStyle.backgroundImage = 'url(assets/' + t.initBgName + ')'
      t.bgStyle.backgroundSize = 'unset'
      t.bgStyle.opacity = t.initBgOpacity
    },
    mouseOver: function(name, opacity, way){
      console.log(name, opacity, way)
      t.bgStyle.backgroundImage = 'url(assets/' + name + ')'
      t.bgStyle.opacity = opacity
      if ( way == 'full') {
        t.bgStyle.backgroundSize = 'cover'
      }
      else {
        t.bgStyle.backgroundSize = 'unset'
      }
    }
  }
})
