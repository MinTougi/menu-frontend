import type {CategoryDTO} from "@/cases/categories/dto/category.dto";
import { api } from "@/lib/axios";

const ENDPOINT = '/categories'

export const CategoryService = {
    
    async listAll(): Promise<CategoryDTO[]> {
        const result = await api.get<CategoryDTO[]>(ENDPOINT);
        return result.data
    },

    async findOne(id : string): Promise<CategoryDTO> {
        const result = await api.get<CategoryDTO>(`${ENDPOINT}/${id}`);
        return result.data
    }
}