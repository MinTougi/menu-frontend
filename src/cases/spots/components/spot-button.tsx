import { Button } from '@base-ui/react/button'
import { MapPin } from 'lucide-react'
import { SpotDialog } from './spot-dialog'
import { useState } from 'react'
import type { SpotDTO } from '../dtos/spot.dto'

export function SpotButton() {
  
  const [selectedSpot, setSelectedSpot] = useState<SpotDTO | null>(() => {
    const spotStorage = localStorage.getItem('spot');
    return spotStorage ? JSON.parse(spotStorage) : null
  });

  const [dialogOpen, setDialogOpen] = useState(() => selectedSpot === null)

  function handleSelect(spot: SpotDTO) {
    // Grava Spot
    localStorage.setItem('spot', JSON.stringify(spot))
    setSelectedSpot(spot);
  }

  return (
    <div className="flex items-center justify-center">
      <Button
        className="flex cursor-pointer flex-col items-center gap-1 
          rounded-2xl px-6 py-3 text-brand-foreground 
          transition-colors hover:bg-primary hover:text-brand-foreground"
        onClick={() => {setDialogOpen(true)}}
      >
        <MapPin className="size-6" aria-hidden="true" />
        <span className="whitespace-nowrap">
          { selectedSpot ? selectedSpot.name : 'Selecionar Mesa' }
        </span>
      </Button>

      <SpotDialog 
        selectedSpotId={selectedSpot?.id}
        onSelect={handleSelect} 
        onOpenChange={setDialogOpen} 
        open={dialogOpen} 
      />
    </div>
  )
}