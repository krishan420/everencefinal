

export const fetchSeoLandingPageDetails = async(DynamicRoute) => {
    try {
        const response = await fetch("/data/seo/landingpage-details.json");
        if(!response.ok) throw new Error("Failed to fetch data :: SEO Landing Page Data")
        const data = await response.json();
        return data[DynamicRoute] || {};
    } catch (error) {
        console.error('Error while fetching seo landing page details :: ', error);
        return {};
    }
}


export const fetchCourseSeoData = async (DynamicRoute) => {
    try {
        const response = await fetch("/data/seo/seo-data/course-seo.json");
        if (!response.ok) throw new Error('Failed to fetch data :: SEO Data');
        const data = await response.json();
        return data.courseSeoData[DynamicRoute] || {};
    } catch (error) {
        console.error('Error fetching seo data:', error);
        return {};
    }
}