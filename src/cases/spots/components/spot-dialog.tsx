import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SpotDTO } from '../dtos/spot.dto'
import { useSpots } from '../hooks/use-spots'
import { cn } from "cn"

interface SpotDialogProps {
  open: boolean
  selectedSpotId?: string
  onOpenChange: (open: boolean) => void
  onSelect: (spot: SpotDTO) => void
}

export function SpotDialog({
  open,
  selectedSpotId,
  onOpenChange,
  onSelect,
}: SpotDialogProps) {
  const { data: spots = [] } = useSpots()

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen && !selectedSpotId) return
    onOpenChange(nextOpen)
  }

  function handleSelect(spot: SpotDTO) {
    onSelect(spot)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent 
        showCloseButton={Boolean(selectedSpotId)}
        className="flex h-[60dvh] flex-col overflow-hidden"
      >
        <DialogHeader  className="shrink-0">
          <DialogTitle>Selecione sua mesa</DialogTitle>
          <DialogDescription>
            Escolha a mesa em que você está para fazer seu pedido.
          </DialogDescription>
        </DialogHeader>
        
        <div className="min-h-0 overflow-y-auto">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {spots.map((spot) => (
              <Button
                key={spot.id}
                variant="outline"
                className={cn(
                  'h-auto min-h-20 flex-col gap-2 whitespace-normal p-4',
                  spot.id === selectedSpotId && 'border-primary bg-accent text-primary'
                )}
                onClick={() => handleSelect(spot)}
              >
                <MapPin className="size-6" aria-hidden="true" />
                <span>{spot.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
    
  )
}