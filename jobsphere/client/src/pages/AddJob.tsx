import React, { useState } from 'react';
import { createJob } from '../api/jobs.service';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const navigate = useNavigate();
    const [company_name, setCompany_name] = useState<string>('');
    const [job_title, setJob_title] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [experience, setExperience] = useState<string>('');
    const [job_type, setJob_type] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [responsibilities, setResponsibilities] = useState<string[]>([]);
    const [company_logo, setCompany_logo] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);
    const [detail_desc, setDetail_desc] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const [tempTag, setTempTag] = useState('');
    const [tempResp, setTempResp] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAddJob = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const jobData = {
                company_name, job_title, location, experience,
                job_type, description, responsibilities,
                company_logo, tags, detail_desc
            };
            await createJob(jobData);
            navigate('/'); 
        } catch (error) {
            console.error(error);
            setErrorMessage('Failed to create job. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const addToArray = (e: React.KeyboardEvent, value: string, setter: any, currentArr: string[], clearInternal: any) => {
        if (e.key === 'Enter' && value.trim() !== '') {
            e.preventDefault();
            setter([...currentArr, value.trim()]);
            clearInternal('');
        }
    };

    const removeFromArray = (index: number, setter: any, currentArr: string[]) => {
        setter(currentArr.filter((_, i) => i !== index));
    };

    const inputStyles = "w-full p-4 border border-gray-300 rounded-xl outline-none transition-all bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent";
    const labelStyles = "block text-sm font-semibold text-gray-700 mb-2 ml-1";

    return (
        <section className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                <header className="mb-10 text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-gray-800">Post a New Job</h1>
                    <p className="text-gray-500">Fill in the details below to find your next great hire.</p>
                </header>
                {errorMessage && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
                    <p className="text-red-700 text-sm font-medium">{errorMessage}</p>
                    </div>
                )}
                <form onSubmit={handleAddJob} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className={labelStyles}>Company Name</label>
                            <input required value={company_name} onChange={(e) => setCompany_name(e.target.value)} className={inputStyles} placeholder="e.g. Google" />
                        </div>
                        <div>
                            <label className={labelStyles}>Job Title</label>
                            <input required value={job_title} onChange={(e) => setJob_title(e.target.value)} className={inputStyles} placeholder="e.g. Senior Frontend Developer" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className={labelStyles}>Location</label>
                            <input required value={location} onChange={(e) => setLocation(e.target.value)} className={inputStyles} placeholder="e.g. Remote / New York" />
                        </div>
                        <div>
                            <label className={labelStyles}>Company Logo URL</label>
                            <input value={company_logo} onChange={(e) => setCompany_logo(e.target.value)} className={inputStyles} placeholder="https://logo-url.com/img.png" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className={labelStyles}>Experience Level</label>
                            <input value={experience} onChange={(e) => setExperience(e.target.value)} className={inputStyles} placeholder="Enter years of experience required" />
                        </div>
                        <div>
                            <label className={labelStyles}>Job Type</label>
                            <select required value={job_type} onChange={(e) => setJob_type(e.target.value)} className={inputStyles}>
                                <option value="">Select Type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Remote">Remote</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className={labelStyles}>Short Description</label>
                        <textarea required value={description} onChange={(e) => setDescription(e.target.value)} className={`${inputStyles} h-24`} placeholder="Brief overview of the role..." />
                    </div>

                    <div>
                        <label className={labelStyles}>Detailed Description</label>
                        <textarea required value={detail_desc} onChange={(e) => setDetail_desc(e.target.value)} className={`${inputStyles} h-40`} placeholder="Detailed responsibilities, benefits, etc..." />
                    </div>

                    <div>
                        <label className={labelStyles}>Tags (Press Enter to add)</label>
                        <input 
                            value={tempTag} 
                            onKeyDown={(e) => addToArray(e, tempTag, setTags, tags, setTempTag)} 
                            onChange={(e) => setTempTag(e.target.value)}
                            className={inputStyles} 
                            placeholder="e.g. React, TypeScript, Node.js" 
                        />
                        <div className="flex flex-wrap gap-2 mt-3">
                            {tags.map((tag, i) => (
                                <span key={i} className="bg-blue-100 text-primaryBlue px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                                    {tag}
                                    <button type="button" onClick={() => removeFromArray(i, setTags, tags)} className="hover:text-red-500">×</button>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className={labelStyles}>Key Responsibilities (Press Enter to add)</label>
                        <input 
                            value={tempResp} 
                            onKeyDown={(e) => addToArray(e, tempResp, setResponsibilities, responsibilities, setTempResp)} 
                            onChange={(e) => setTempResp(e.target.value)}
                            className={inputStyles} 
                            placeholder="e.g. Lead a team of 5 developers" 
                        />
                        <ul className="mt-3 space-y-2">
                            {responsibilities.map((resp, i) => (
                                <li key={i} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                                    <span className="text-gray-700 text-sm italic">• {resp}</span>
                                    <button type="button" onClick={() => removeFromArray(i, setResponsibilities, responsibilities)} className="text-red-400 font-bold px-2 hover:text-red-600">×</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full p-4 bg-primaryBlue text-white font-bold rounded-xl shadow-lg hover:bg-blue-600 transition-all active:scale-[0.98] disabled:opacity-70 mt-8"
                    >
                        {loading ? 'Posting Job...' : 'Post Job Now'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddJob;