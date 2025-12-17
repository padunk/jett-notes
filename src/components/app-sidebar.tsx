import { ChevronRight } from "lucide-react"
import { useId } from "react"
import { Collection, TreeItemContent } from "react-aria-components"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { SearchField } from "./ui/SearchField"
import { Tree, TreeItem } from "./ui/Tree"

const albums = [
  {
    id: "favorites",
    name: "Favorites",
  },
  {
    id: "nature",
    name: "Nature",
    children: [
      { id: "nature-landscapes", name: "Landscapes" },
      { id: "nature-mountains", name: "Mountains" },
      { id: "nature-forests", name: "Forests" },
      { id: "nature-beaches", name: "Beaches" },
      { id: "nature-sunsets", name: "Sunsets" },
      { id: "nature-weather", name: "Weather & Skies" },
    ],
  },
]

export function AppSidebar() {
  const id = useId()

  const renderAlbum = (album: Album) => (
    <TreeItem textValue={album.name} className='sidebar-TreeItem'>
      <TreeItemContent>
        {album.children && (
          <Button slot='chevron' className='chevron'>
            <ChevronRight size={16} />
          </Button>
        )}
        <span>{album.name}</span>
      </TreeItemContent>
      {album.children && (
        <Collection items={album.children}>{renderAlbum}</Collection>
      )}
    </TreeItem>
  )

  return (
    <Sidebar className='mt-18'>
      <SidebarContent className='bg-gray-50'>
        <SidebarGroup>
          <SearchField />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Tree
                aria-label='Files'
                selectionMode='single'
                disallowEmptySelection
                selectionBehavior='replace'
                // selectedKeys={[selectedAlbum]}
                // onSelectionChange={(keys) =>
                //   onSelectionChange([...keys][0] as string)
                // }
                // dragAndDropHooks={dragAndDropHooks}
                className='sidebar-Tree'
              >
                <TreeItem
                  id={id}
                  textValue='All Photos'
                  className='sidebar-TreeItem'
                >
                  <TreeItemContent>All Photos</TreeItemContent>
                </TreeItem>
                <Collection items={albums}>{renderAlbum}</Collection>
              </Tree>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
