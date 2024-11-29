// Mock rental property data
const rentalProperties = [
    {
        id: 1,
        title: 'Modern 3BHK Apartment',
        price: 45000,
        location: 'Powai, Mumbai',
        bedrooms: 3,
        bathrooms: 2,
        area: 1500,
        furnishing: 'furnished',
        type: 'apartment',
        images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
            'https://images.unsplash.com/photo-1560448204-603b3fc33ddc'
        ]
    },
    {
        id: 2,
        title: 'Luxury Villa with Garden',
        price: 150000,
        location: 'Juhu, Mumbai',
        bedrooms: 4,
        bathrooms: 4,
        area: 3500,
        furnishing: 'furnished',
        type: 'villa',
        images: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
            'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4'
        ]
    },
    {
        id: 3,
        title: 'Cozy Studio Apartment',
        price: 25000,
        location: 'Andheri West, Mumbai',
        bedrooms: 1,
        bathrooms: 1,
        area: 500,
        furnishing: 'semi',
        type: 'studio',
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c203602cb',
            'https://images.unsplash.com/photo-1630699144867-37acec97df5a',
            'https://images.unsplash.com/photo-1630699144867-37acec97df5b'
        ]
    },
    {
        id: 4,
        title: 'Spacious 2BHK with Sea View',
        price: 55000,
        location: 'Worli, Mumbai',
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        furnishing: 'furnished',
        type: 'apartment',
        images: [
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e',
            'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8',
            'https://images.unsplash.com/photo-1560185893-d9680d601237'
        ]
    },
    {
        id: 5,
        title: 'Traditional House with Modern Amenities',
        price: 85000,
        location: 'Bandra East, Mumbai',
        bedrooms: 3,
        bathrooms: 3,
        area: 2000,
        furnishing: 'semi',
        type: 'house',
        images: [
            'https://images.unsplash.com/photo-1598228723793-52759bba239c',
            'https://images.unsplash.com/photo-1598228723793-52759bba239d',
            'https://images.unsplash.com/photo-1598228723793-52759bba239e'
        ]
    }
];

// Render rental properties
function renderRentalProperties(properties) {
    const grid = document.querySelector('.properties-grid');
    grid.innerHTML = properties.map(property => `
        <div class="property-card" onclick="openGallery(${property.id})">
            <div class="property-image">
                <img src="${property.images[0]}" alt="${property.title}">
            </div>
            <div class="property-details">
                <div class="property-price">₹${property.price.toLocaleString('en-IN')}/month</div>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i> ${property.location}
                </div>
                <div class="property-features">
                    <span><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>
                    <span><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>
                    <span><i class="fas fa-ruler-combined"></i> ${property.area} sq ft</span>
                </div>
                <div class="property-furnishing">
                    <i class="fas fa-couch"></i> ${property.furnishing.charAt(0).toUpperCase() + property.furnishing.slice(1)}
                </div>
            </div>
        </div>
    `).join('');
}

// Apply filters for rental properties
document.querySelector('.apply-filters').onclick = () => {
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;
    const propertyType = document.getElementById('propertyType').value;
    const bedrooms = document.getElementById('bedrooms').value;
    const furnishing = document.getElementById('furnishing').value;

    let filtered = [...rentalProperties];

    if (minPrice) filtered = filtered.filter(p => p.price >= minPrice);
    if (maxPrice) filtered = filtered.filter(p => p.price <= maxPrice);
    if (propertyType) filtered = filtered.filter(p => p.type === propertyType);
    if (bedrooms) filtered = filtered.filter(p => p.bedrooms >= parseInt(bedrooms));
    if (furnishing) filtered = filtered.filter(p => p.furnishing === furnishing);

    renderRentalProperties(filtered);
};

// Initialize the rental properties display
renderRentalProperties(rentalProperties);

// Update gallery functionality for rental properties
function openGallery(propertyId) {
    currentProperty = rentalProperties.find(p => p.id === propertyId);
    currentImageIndex = 0;
    updateGallery();
    modal.style.display = 'block';
}