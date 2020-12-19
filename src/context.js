import React from 'react'


const Context = React.createContext({
  folderSelect: () => {},
  noteSelect: () => {},
  deleteNote: () => {},
  foldersStore:
  [
    {
      id: 1,
      name: "Test"
    },
    {
      id: 2,
      name: "Test 2"
    }
  ],
      notesStore:
  [ 
    {
      content: "Test content",
      date_modified: "2020-12-19T19:59:29.169Z",
      folder: 1,
      id: 1,
      name: "Test"
    }
  ]
})

export default Context