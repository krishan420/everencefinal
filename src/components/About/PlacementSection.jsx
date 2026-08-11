import React from 'react';
import CompanyMarquee from '../CourseDetails/CompanyMarquee';

const PlacementsSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
            <CompanyMarquee title="Our Students Placed At"/>
        </section>
    );
};

export default PlacementsSection;