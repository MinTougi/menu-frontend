import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@base-ui/react";
import { MapPin } from "lucide-react";

export function SpotDialog() {

  const{} = useSpotDialog();

  return (
    <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Seleciona a sua mesa</DialogTitle>
      <DialogDescription>
        Escolha a mesa que você está para fazer o pedido.
      </DialogDescription>
    </DialogHeader>
    
    <div className="min-h-o overflow-y-auto">
    <div className="grid grid-cols-3 gap-3">

    <Button 
      variant="outline"
      className="h-auto min-h-20 flex-col p-4"
    >
      <MapPin className="size-6" />
      Mesa 1
    </Button>

    </div>
    </div>
  </DialogContent>
</Dialog>
  );
}