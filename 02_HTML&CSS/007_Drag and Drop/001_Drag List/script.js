const items = sortableList.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        item.classList.add("dragging")
    })
    item.addEventListener("dragend", () => {
        item.classList.remove("dragging")
    })
});
