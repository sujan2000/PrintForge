
import { getAllCategories } from "@/app/lib/categories"
import Link from "next/link"
import { ReactNode } from "react"
import { Category } from "../types"

export default function ModelsLayout({
    children,
}: { children: ReactNode }) {

    const allCategories: Category[] = getAllCategories()

    return (
        <div>
            <nav>
                <Link href="/3d-models">All</Link>
                {allCategories.map((category) =>
                    < Link href={`/3d-models/categories/${category.slug}`} key={category.slug}>
                        <h2>{category.displayName}</h2>
                    </ Link >
                )}
            </nav>
            {children}

        </div>)

}

