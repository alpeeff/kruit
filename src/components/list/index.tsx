import { Box } from "@/atoms"
import { IListItem, ListItem } from "@/components/list/item"

interface Props {
  items: IListItem[]
}

const List: React.FC<Props> = ({ items }) => {
  return (
    <Box width="100%">
      {items.map((x) => (
        <ListItem key={x.id} {...x} />
      ))}
    </Box>
  )
}

export { List }
