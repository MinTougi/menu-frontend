import { useQuery } from '@tanstack/react-query'
import { SpotService } from '../services/spot.service'
import '.index.css'
import App from './App.tsx'
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(

)

export function useSpots() {
  return useQuery({
    queryKey: ['spots'],
    queryFn: SpotService.listAll,
  })
}