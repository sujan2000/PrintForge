import ModelCard from "@/app/components/ModelCard"
import { Model, ModelsGridProps } from "@/app/types"

export default function ModelsGrid({ title, models }: ModelsGridProps) {
    return (
        <div className="container px-4 py-8 mx-auto">
            <h1 className="mb-8 text-3xl font-bold">{title}</h1>
            <div>
                {models.map((model: Model) => {
                    <ModelCard key={model.id} model={model} />
                })}
            </div>
        </div>
    )
}