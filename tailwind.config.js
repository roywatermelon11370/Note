module.exports = {
  purge: {
    enabled: true,
    mode: 'all',
    content: [
      './views/index.html',
      './views/list.html',
      './views/register.html',
      './views/login.html',
      './views/note.html',
      './views/modify.html',
      './views/modify_voc.html',
      './views/voc_list.html',
    ],

    options: {
      
    }
  },
  theme: {
    extend: {
      colors: {

      },
      
    }
  },

  varients: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
}