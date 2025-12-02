import { Card } from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"

const TodoList = () => {
  return (
    <div className = "" >
      Calender
     {/* LIST */}
     <ScrollArea className = "max-h-[400px] mt-4 overflow-y-auto">
        {/* TODO ITEMS */ }
        <Card>
            
        </Card>
     </ScrollArea>
    </div>
  )
}

export default TodoList