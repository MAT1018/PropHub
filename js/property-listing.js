// Mock property data for sale
const properties = [
    {
        id: 1,
        title: 'Luxury Apartment with Sea View',
        price: 15000000,
        location: 'Bandra West, Mumbai',
        bedrooms: 3,
        bathrooms: 2,
        area: 1800,
        type: 'apartment',
        images: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
            'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4'
        ]
    },
    {
        id: 2,
        title: 'Modern Villa in Gated Community',
        price: 45000000,
        location: 'Juhu, Mumbai',
        bedrooms: 5,
        bathrooms: 4,
        area: 4500,
        type: 'villa',
        images: [
            'https://images.unsplash.com/photo-1613977257363-707ba9348227',
            'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4',
            'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c5'
        ]
    },
    {
        id: 3,
        title: 'Spacious 4BHK Penthouse',
        price: 35000000,
        location: 'Powai, Mumbai',
        bedrooms: 4,
        bathrooms: 4,
        area: 3200,
        type: 'apartment',
        images: [
            'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde',
            'https://images.unsplash.com/photo-1600047509358-9dc75507daeb',
            'https://images.unsplash.com/photo-1600047509697-5191934d7e86'
        ]
    },
    {
        id: 4,
        title: 'Contemporary House with Garden',
        price: 25000000,
        location: 'Andheri West, Mumbai',
        bedrooms: 3,
        bathrooms: 3,
        area: 2500,
        type: 'house',
        images: [
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
            'https://images.unsplash.com/photo-1600566753251-47145d6bfb40'
        ]
    },
    {
        id: 5,
        title: 'Premium Villa with Pool',
        price: 55000000,
        location: 'Worli, Mumbai',
        bedrooms: 6,
        bathrooms: 6,
        area: 6000,
        type: 'villa',
        images: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
            'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4',
            'https://images.unsplash.com/photo-1600607687668-7c2ca68d592a'
        ]
    }
];

// Format price in Indian currency
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price);
}

// Render property cards
function renderProperties(properties) {
    const grid = document.querySelector('.properties-grid');
    grid.innerHTML = properties.map(property => `
        <div class="property-card" onclick="openGallery(${property.id})">
            <div class="property-image">
                <img src="${property.images[0]}" alt="${property.title}">
            </div>
            <div class="property-details">
                <div class="property-price">${formatPrice(property.price)}</div>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i> ${property.location}
                </div>
                <div class="property-features">
                    <span><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>
                    <span><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>
                    <span><i class="fas fa-ruler-combined"></i> ${property.area} sq ft</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Image gallery functionality
const modal = document.getElementById('galleryModal');
let currentProperty = null;
let currentImageIndex = 0;

function openGallery(propertyId) {
    currentProperty = properties.find(p => p.id === propertyId);
    currentImageIndex = 0;
    updateGallery();
    modal.style.display = 'block';
}

function updateGallery() {
    const galleryImage = document.getElementById('galleryImage');
    galleryImage.src = currentProperty.images[currentImageIndex];
    
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    thumbnailContainer.innerHTML = currentProperty.images.map((img, index) => `
        <img src="${img}" 
             class="thumbnail ${index === currentImageIndex ? 'active' : ''}"
             onclick="setImage(${index})"
             alt="Property Image ${index + 1}">
    `).join('');
}

function setImage(index) {
    currentImageIndex = index;
    updateGallery();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentProperty.images.length;
    updateGallery();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentProperty.images.length) % currentProperty.images.length;
    updateGallery();
}

// Close modal
document.querySelector('.close-modal').onclick = () => {
    modal.style.display = 'none';
};

// Navigation buttons
document.querySelector('.next').onclick = nextImage;
document.querySelector('.prev').onclick = prevImage;

// Apply filters
document.querySelector('.apply-filters').onclick = () => {
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;
    const propertyType = document.getElementById('propertyType').value;
    const bedrooms = document.getElementById('bedrooms').value;

    let filtered = [...properties];

    if (minPrice) filtered = filtered.filter(p => p.price >= minPrice);
    if (maxPrice) filtered = filtered.filter(p => p.price <= maxPrice);
    if (propertyType) filtered = filtered.filter(p => p.type === propertyType);
    if (bedrooms) filtered = filtered.filter(p => p.bedrooms >= parseInt(bedrooms));

    renderProperties(filtered);
};

// Initial render
renderProperties(properties);