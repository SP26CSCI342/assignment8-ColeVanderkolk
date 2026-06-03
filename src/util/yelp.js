const SEARCH_PATH = '/api/yelp/businesses/search';

async function searchBusinesses(term, location, sortBy) {
    //Create URL search parameters using term, location, sort_by, and limit
    const params = new URLSearchParams({
        term,
        location,
        sort_by: sortBy,
        limit: "20",
    });

    //send a fetch request to the yelp backend search endpoint
    const res = await fetch(`${SEARCH_PATH}?${params}`);
    // Check if the response failed and throw an error if needed
    if (!res.ok) {
        throw new Error(`Yelp API request failed (${res.status})`);
    }
    // TODO: Convert the response to JSON and return the list of businesses
    const data = await res.json();
    // TODO: return the businesses array mapped into the format used by the business component
    return data.businesses.map(business => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title, 
        rating: business.rating,
        reviewCount: business.review_count,
    }));
}

export default searchBusinesses;