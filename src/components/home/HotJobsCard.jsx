import React from 'react';
import { Link } from 'react-router-dom';

const HotJobsCard = ({job}) => {

     const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange: { min, max, currency },
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_email,
        hr_name,
        company_logo,
    } = job;

    return (
        <div className="max-w-md mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center px-6 py-4">
                <img
                className="w-12 h-12 object-cover rounded-full border"
                src={company_logo}
                alt={`${company} logo`}
                />
                <div className="ml-4">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-500">
                    {company} • {location}
                </p>
                </div>
            </div>

            {/* Tags & Description */}
            <div className="px-6 py-4">
                <div className="mb-2 flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {jobType}
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {category}
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    Deadline: {applicationDeadline}
                </span>
                </div>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>

            {/* Salary and HR */}
            <div className="px-6 py-4 border-t border-gray-300 text-sm text-gray-700">
                <p>
                <span className="font-semibold">Salary:</span>{' '}
                {currency.toUpperCase()} {min.toLocaleString()} - {max.toLocaleString()}
                </p>
                <p>
                <span className="font-semibold">HR:</span> {hr_name} (
                <a className="text-blue-600 hover:underline" href={`mailto:${hr_email}`}>
                    {hr_email}
                </a>
                )
                </p>
            </div>

            {/* CTA */}
        <div className="px-6 py-4">
            <Link to={`/job/${_id}`}>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Apply Now
                </button>
            </Link>
        </div>
    </div>
    );
};

export default HotJobsCard;