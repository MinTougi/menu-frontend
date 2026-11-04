import { useQuery } from "@tanstack/react-query";
import { CategoryService } from "@/cases/service/catagory.service";

export function useCategories(){
    return useQuery({
        queryKey: ['categories'],
        queryFn: CategoryService.listAll
    })
}