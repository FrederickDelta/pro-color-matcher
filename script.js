const inputs = document.querySelectorAll("#controls input");
inputs.forEach(input => input.addEventListener("change",handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove",handleUpdate));

function handleUpdate() {
    console.log(this.value);
    const unit = this.dataset.unit || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);
}