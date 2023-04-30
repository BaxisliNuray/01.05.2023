const base_URL = 'https://northwind.vercel.app/api';

// get all categories
export const getAllCategories = async () => {
    let globalData;
    await fetch(`${base_URL}/categories`)
        .then(resp => resp.json())
        .then(data => {
            globalData = data;
        })
    return globalData;
}


// categories by ID
export const getCategoriesByID = async (id) => {
    let globalData;
    await fetch(`${base_URL}/categories/${id}`)
        .then(resp => resp.json())
        .then(data => {
            globalData = data;
        })
    return globalData;
};

// delete category by ID
export const deleteCategoryByID = async (id) => {
    let globalData;
    await fetch(`${base_URL}/categories/${id}`, {
        method: 'DELETE'
    })
    return globalData;
};


// post category
export const postCategory = async (supply) => {
    await fetch(`${base_URL}/categories`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(supply)
    })
}

// put category by ID
export const editCAtegoryByID = async (id, supply) => {
    await fetch(`${base_URL}/categories/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(supply)
    })
}