document.addEventListener("DOMContentLoaded", () => {
    const materialsSelect = document.getElementById('materials');

    materialsSelect.addEventListener("change", () => {
        const selectedOptions = Array.from(materialsSelect.selectedOptions);
        const quantitiesContainer = document.getElementById('quantities-container');

        quantitiesContainer.innerHTML = '';

        selectedOptions.forEach(option => {
            const materialId = option.value;
            const materialName = option.text;

            const formGroup = document.createElement('div');
            formGroup.className = 'form-group mb-2';

            const label = document.createElement('label');
            label.for = `quantity-${materialId}`;
            label.textContent = `Quantité de ${materialName} :`;

            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'form-control';
            input.name = `quantities[${materialId}]`;
            input.id = `quantity-${materialId}`;
            input.required = true;
            input.placeholder = 'en grammes';

            formGroup.appendChild(label);
            formGroup.appendChild(input);
            quantitiesContainer.appendChild(formGroup);
        });
    });
});
