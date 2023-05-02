import React from 'react'

import {Character} from "@/pages/character";
import {Main} from "@/pages/main";


export function routing() {
  return (
      [
          {
              path: '/character/:characterId',
              element: <Character />,
          },
          {
              path: '/',
              element: <Main />,
          },
      ]
  )
}
