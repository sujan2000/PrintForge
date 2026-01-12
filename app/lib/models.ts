


import modelsData from "@/app/data/models.json"
import type { Model } from "@/app/types"


export async function getAllModels() {

    const model = modelsData

    return modelsData
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