export const createAdaptedCategoryFromFirestore = (doc) => {
    const data = doc.data()
    
    const categoriesAdapted = {
        id: doc.id,
        label: data.label,
        order: data.order,
        slug: data.slug,
    }


    return categoriesAdapted
}