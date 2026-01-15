

import { getModels } from "@/app/lib/models";
import ModelsGrid from "../components/ModelsGrid";
import type { ModelsPageProps } from "@/app/types";



export default async function Page({ searchParams }: ModelsPageProps) {


    const models = await getModels()
    const { query } = await searchParams
    console.log(await searchParams)

    const filteredModel = query ? models.filter(model =>
        model.name.toLowerCase() === query?.toLowerCase() || model.description.toLowerCase().includes(query)
    ) : models

    return (
        <>
            <form>
                <input name="query" type="text" placeholder="e.g. education" />
            </form>
            <ModelsGrid title="3D Models" models={filteredModel} />
        </>
    )
}