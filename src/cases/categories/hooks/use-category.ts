import { useQuery } from "@tanstack/react-query";
import { CategoryService } from "@/cases/service/catagory.service";

export function useCategories(){
    return useQuery({
        queryKey: ['categories'],
        queryFn: CategoryService.listAll
    })
}

export function useCategory(id: string){
    return useQuery({
        queryKey: ['categories', id],
        queryFn: () => CategoryService.findOne(id),
        enabled: !!id// ou Boolean(id)
    })
}