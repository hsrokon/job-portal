import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData();

  const {
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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      {/* Header Section */}
      <div className="flex items-center mb-6">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-16 h-16 object-cover rounded-full border mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600">{company} • {location}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4 text-sm">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">{jobType}</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{category}</span>
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Deadline: {applicationDeadline}</span>
        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full capitalize">Status: {status}</span>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Job Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Requirements</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {requirements.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Salary and HR Info */}
      <div className="border-t pt-4 mt-4">
        <p className="text-sm text-gray-700">
          <strong>Salary:</strong> {currency.toUpperCase()} {min.toLocaleString()} - {max.toLocaleString()}
        </p>
        <p className="text-sm text-gray-700">
          <strong>HR Contact:</strong> {hr_name} (<a className="text-blue-600 hover:underline" href={`mailto:${hr_email}`}>{hr_email}</a>)
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-medium">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
