import React from 'react'


const Context = React.createContext({
  folderSelect: () => {},
  noteSelect: () => {},
  deleteNote: () => {},
})

export default Context