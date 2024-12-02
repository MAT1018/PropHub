// Handle image uploads
const propertyImages = document.getElementById('propertyImages');
const imagePreviewContainer = document.getElementById('imagePreviewContainer');
let uploadedImages = [];

propertyImages.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    
    if (uploadedImages.length + files.length > 10) {
        alert('Maximum 10 images allowed');
        return;
    }

    files.forEach(file => {
        if (!file.type.startsWith('image/')) {
            alert('Please upload only image files');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const preview = document.createElement('div');
            preview.className = 'image-preview';
            preview.innerHTML = `
                <img src="${e.target.result}" alt="Property Image">
                <button class="remove-image" onclick="removeImage(this)">
                    <i class="fas fa-times"></i>
                </button>
            `;
            imagePreviewContainer.appendChild(preview);
            uploadedImages.push(file);
        };
        reader.readAsDataURL(file);
    });
});

function removeImage(button) {
    const preview = button.parentElement;
    const index = Array.from(imagePreviewContainer.children).indexOf(preview);
    uploadedImages.splice(index, 1);
    preview.remove();
}

// Handle property papers upload
const propertyPapers = document.getElementById('propertyPapers');
propertyPapers.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        alert(`File "${file.name}" selected`);
    }
});

// Mock DigiLocker connection
function connectToDigilocker() {
    alert('Connecting to DigiLocker... This is a mock implementation.');
}

// Handle form submission
document.getElementById('propertyListingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData();
    formData.append('propertyType', document.getElementById('propertyType').value);
    formData.append('listingType', document.getElementById('listingType').value);
    formData.append('price', document.getElementById('price').value);
    formData.append('area', document.getElementById('area').value);
    formData.append('bedrooms', document.getElementById('bedrooms').value);
    formData.append('bathrooms', document.getElementById('bathrooms').value);
    formData.append('address', document.getElementById('address').value);
    formData.append('city', document.getElementById('city').value);
    formData.append('state', document.getElementById('state').value);

    // Append images
    uploadedImages.forEach((image, index) => {
        formData.append(`image${index}`, image);
    });

    console.log('Form submitted with data:', Object.fromEntries(formData));
    alert('Property listed successfully!');
});