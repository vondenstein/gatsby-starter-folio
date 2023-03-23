import React, { useState } from "react"

type MenuContextType = {
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const iMenuContextType = {
  isOpen: false,
  setOpen: () => {},
}

const MenuContext = React.createContext<MenuContextType>(iMenuContextType)

export const MenuProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <MenuContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
