


import modelsData from "@/app/data/models.json"
import type { Model, GetModelsParams } from "@/app/types"


export async function getModels({ category }: GetModelsParams = {}): Promise<Model[]> {

    let filteredModels = [...modelsData]

    if (category) {
        filteredModels = modelsData.filter((model: Model) => model.category === category)
    }

    return filteredModels
}



export async function getModelById(id: string | number): Promise<Model> {

    const foundmodel = modelsData.find(
        (model: Model) => model.id.toString() === id.toString()
    )

    if (!foundmodel) {
        throw new Error(`Model with id ${id} not found`)
    }

    return foundmodel
}