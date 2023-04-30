import { getAllCategories, deleteCategoryByID } from "./script.js";

let cardRow = document.querySelector(".card-row")
let loader = document.querySelector(".loader")
loader.style.display = "block"


getAllCategories().then(data => {
    data.forEach(post => {
        loader.style.display = "none"
        let col3 = document.createElement("div")
        col3.classList.add("col-3")


        let card = document.createElement("div")
        card.classList.add("card")
        card.classList.add("mt-3")
        card.classList.add("border-0")


        let CardBody = document.createElement("div")
        CardBody.classList.add("card-body")

        let CardTitle = document.createElement("div")
        CardTitle.classList.add("card-title")
        let h3 = document.createElement("h3")
        let link = document.createElement("a")
        link.setAttribute("href", "./detail.html")

        h3.append(link)
        link.textContent = post.name

        let CardText = document.createElement("div")
        CardText.classList.add("card-text")
        let p = document.createElement("p")
        p.textContent = post.description

        let Btns = document.createElement("div")
        Btns.classList.add("card-btns")
        Btns.classList.add("text-end")
        let editBtn = document.createElement("a")
        editBtn.setAttribute("href", "#")
        editBtn.textContent = "Edit"

        let deleteBtn = document.createElement("a")
        deleteBtn.setAttribute("href", "#")
        deleteBtn.textContent = "Delete"


        cardRow.append(col3)
        col3.append(CardBody)
        CardBody.append(CardTitle, CardText, Btns)
        CardTitle.append(h3)
        CardText.append(p)
        Btns.append(editBtn, deleteBtn)



        // delete

        deleteBtn.addEventListener("click", function () {

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-warning',
                    cancelButton: 'btn btn-success'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    let id = post.id
                    deleteCategoryByID(id)
                    CardBody.remove()
                    swalWithBootstrapButtons.fire(
                        'Deleted!',
                        'success'
                    )
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
            })
        })
    });


    // search
    let searchInput = document.querySelector(".search-input")
    searchInput.addEventListener("keydown", () => {
        getAllCategories().then(data => {
            cardRow.innerHTML = "";
            data.forEach(categories => {
                if (categories.name.trim().toLowerCase().includes(searchInput.value.trim().toLowerCase())) {

                    let col3 = document.createElement("div")
                    col3.classList.add("col-3")

                    col3.classList.add("mb-3");
                    col3.classList.add("mt-3");


                    let card = document.createElement("div")
                    card.classList.add("card")
                    card.classList.add("mt-3")
                    card.classList.add("border-0")

                    let CardBody = document.createElement("div")
                    CardBody.classList.add("card-body")

                    let CardTitle = document.createElement("div")
                    CardTitle.classList.add("card-title")
                    let h3 = document.createElement("h3")
                    let link = document.createElement("a")
                    link.setAttribute("href", "./detail.html")
                    h3.append(link)
                    link.textContent = categories.name

                    let CardText = document.createElement("div")
                    CardText.classList.add("card-text")
                    let p = document.createElement("p")
                    p.textContent = categories.description

                    let Btns = document.createElement("div")
                    Btns.classList.add("card-btns")
                    Btns.classList.add("text-end")
                    let editBtn = document.createElement("a")
                    editBtn.setAttribute("href", "./edit.html")
                    editBtn.textContent = "Edit"

                    let deleteBtn = document.createElement("a")
                    deleteBtn.setAttribute("href", "#")
                    deleteBtn.textContent = "Delete"


                    cardRow.append(col3)
                    col3.append(CardBody)
                    CardBody.append(CardTitle, CardText, Btns)
                    CardTitle.append(h3)
                    CardText.append(p)
                    Btns.append(editBtn, deleteBtn)
                }
            })
        })

       
    })

})





