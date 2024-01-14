import { useState } from 'react';

const AdminPanel = () => {
    const [aboutTitle, setAboutTitle] = useState('');
    const [aboutImage, setAboutImage] = useState('');
    const [aboutDescription, setAboutDescription] = useState('');
    const [buildTitle, setBuildTitle] = useState('');
    const [buildLink, setBuildLink] = useState('');
    const [buildImage, setBuildImage] = useState('');
    const [buildDescription, setBuildDescription] = useState('');
    const [experienceTitle, setExperienceTitle] = useState('');
    const [experienceCompanyImage, setExperienceCompanyImage] = useState('');
    const [experienceSummary, setExperienceSummary] = useState('');
    const [experienceEndDate, setExperienceEndDate] = useState('');
    const [experienceStartDate, setExperienceStartDate] = useState('');
    const [experienceSkillUsed, setExperienceSkillUsed] = useState('');
    const [experiencePlace, setExperiencePlace] = useState('');
    const [profImage, setProfImage] = useState('');
    const [profAmount, setProfAmount] = useState('');

    const addAbout = async (e) => {
        e.preventDefault();
        const formData = {
            aboutTitle,
            aboutDescription,
            aboutImage
        };
        try {
            const response = await fetch('/api/createAbouts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log(' about created successfully');
            } else {
                console.error('Failed to create about');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const addExperience = async (e) => {
        e.preventDefault();
        const formData = {
            experienceTitle,
            experiencePlace,
            experienceSkillUsed,
            experienceStartDate,
            experienceEndDate,
            experienceSummary,
            experienceCompanyImage
        };
        try {
            const response = await fetch('/api/createExperiences', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log(' experience created successfully');
            } else {
                console.error('Failed to create experience');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const addSkills = async (e) => {
        e.preventDefault();
        const formData = {
            profAmount,
            profImage
        };
        try {
            const response = await fetch('/api/createProficiency', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log(' skill created successfully');
            } else {
                console.error('Failed to create skill');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const addProject = async (e) => {
        e.preventDefault();
        const formData = {
            buildTitle,
            buildDescription,
            buildImage,
            buildLink,
        };
        console.log('formData:', formData);
        try {
            const response = await fetch('/api/createBuilds', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('project created successfully');
            } else {
                console.error('Failed to create project');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfImage(reader.result); // Assign the image to profImage
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            // Assuming you are using FileReader to convert the image to a data URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setBuildImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <form onSubmit={addAbout} className="max-w-xl mx-auto  p-4">

                <div className="mb-4">
                    <label htmlFor="aboutImage" className="block text-lg mb-1">
                        Set your own image url
                    </label>
                    <input
                        type="text"
                        id="aboutImage"
                        className="contactInput w-full px-4 py-2"
                        placeholder="Your Image URL"
                        value={aboutImage}
                        onChange={(e) => setAboutImage(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="aboutDescription" className="block text-lg mb-1">
                        Description of yourself
                    </label>
                    <input
                        type="text"
                        id="aboutDescription"
                        className="contactInput w-full px-4 py-2"
                        placeholder="Description of yourself"
                        value={aboutDescription}
                        onChange={(e) => setAboutDescription(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="aboutTitle" className="block text-lg mb-1">
                        Give a title for self Description
                    </label>
                    <input
                        type="text"
                        id="aboutTitle"
                        className="contactInput w-full px-4 py-2"
                        placeholder="Title for about"
                        value={aboutTitle}
                        onChange={(e) => setAboutTitle(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#f7ab0a] p-3 rounded-md text-black font-bold text-md"
                >
                    Post About
                </button>
            </form>
            <form onSubmit={addExperience} className="max-w-xl mx-auto  p-4">

                <div className="mb-4">
                    <label htmlFor="experienceCompanyImage" className="block text-lg mb-1">
                        Post company image url
                    </label>
                    <input
                        type="text"
                        id="experienceCompanyImage"
                        className="contactInput w-full px-4 py-2"
                        placeholder="Company Image URL"
                        value={experienceCompanyImage}
                        onChange={(e) => setExperienceCompanyImage(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="experienceImage" className="block text-lg mb-1">
                        Post skills used image
                    </label>
                    <input
                        type="text"
                        id="experinceSkillUsed"
                        className="contactInput w-full px-4 py-2"
                        placeholder="Image URL of skills used/acquired"
                        value={experienceSkillUsed}
                        onChange={(e) => setExperienceSkillUsed(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="experienceTitle" className="block text-lg mb-1">
                        Job title/role
                    </label>
                    <input
                        type="text"
                        id="experienceTitle"
                        className="contactInput w-full px-4 py-2"
                        placeholder="Your Role"
                        value={experienceTitle}
                        onChange={(e) => setExperienceTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="experiencePlace" className="block text-lg mb-1">
                        Name of the Company
                    </label>
                    <input
                        type="text"
                        id="experiencePlace"
                        className="contactInput w-full px-4 py-2"
                        placeholder="Company Name"
                        value={experiencePlace}
                        onChange={(e) => setExperiencePlace(e.target.value)}
                    />
                </div>
                <div className="mb-4 flex space-x-10">
                    <div>
                        <label htmlFor="experienceStartDate" className="block text-lg mb-1">
                            Date of starting
                        </label>
                        <input
                            type="text"
                            id="experienceStartDate"
                            className="contactInput w-full px-4 py-2"
                            placeholder="Start date of work"
                            value={experienceStartDate}
                            onChange={(e) => setExperienceStartDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="experienceEndDate" className="block text-lg mb-1">
                            Date of ending
                        </label>
                        <input
                            type="text"
                            id="experienceEndDate"
                            className="contactInput w-full px-4 py-2"
                            placeholder="End date of work"
                            value={experienceEndDate}
                            onChange={(e) => setExperienceEndDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="experienceSummary" className="block text-lg mb-1">
                        Summary points
                    </label>
                    <input
                        type="text"
                        id="experienceSummary"
                        className="contactInput w-full px-4 py-2"
                        placeholder="Summary of work done"
                        value={experienceSummary}
                        onChange={(e) => setExperienceSummary(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#f7ab0a] p-3 rounded-md text-black font-bold text-md"
                >
                    Post Work Experience
                </button>
            </form>
            <form onSubmit={addSkills} className="max-w-xl mx-auto p-4">
                <div className="mb-4">
                    <label htmlFor="profImage" className="block text-lg mb-1">
                        Post Skill Image URL
                    </label>
                    <input
                        type="text"
                        id="profImage"
                        className="contactInput w-full px-4 py-2"
                        placeholder="Skill Image URL"
                        value={profImage}
                        onChange={(e) => setProfImage(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="imageUpload" className="block text-lg mb-1">
                        Upload Skill Image
                    </label>
                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="contactInput w-full px-4 py-2"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="profAmount" className="block text-lg mb-1">
                        Set Proficiency
                    </label>
                    <input
                        type="text"
                        id="profAmount"
                        className="contactInput w-full px-4 py-2"
                        placeholder="Proficiency of skill"
                        value={profAmount}
                        onChange={(e) => setProfAmount(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#f7ab0a] p-3 rounded-md text-black font-bold text-md"
                >
                    Post Skill
                </button>
            </form>
            <form onSubmit={addProject} className="max-w-xl mx-auto p-4">
                <div className="mb-4">
                    <label htmlFor="buildImage" className="block text-lg mb-1">
                        Project Image
                    </label>
                    {/* Replace text input with file input */}
                    <input
                        type="file"
                        id="buildImage"
                        className="contactInput w-full px-4 py-2"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="buildTitle" className="block text-lg mb-1">
                        Project name
                    </label>
                    <input
                        type="text"
                        id="buildTitle"
                        className="contactInput w-full px-4 py-2"
                        placeholder="Project name"
                        value={buildTitle}
                        onChange={(e) => setBuildTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="buildDescription" className="block text-lg mb-1">
                        Description of project
                    </label>
                    <input
                        type="text"
                        id="buildDescription"
                        className="contactInput w-full px-4 py-2"
                        placeholder="Description of project"
                        value={buildDescription}
                        onChange={(e) => setBuildDescription(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="buildLink" className="block text-lg mb-1">
                        Link for the project
                    </label>
                    <input
                        type="text"
                        id="buildLink"
                        className="contactInput w-full px-4 py-2"
                        placeholder="Enter link"
                        value={buildLink}
                        onChange={(e) => setBuildLink(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#f7ab0a] p-3 rounded-md text-black font-bold text-md"
                >
                    Post Project
                </button>
            </form>
        </div>

    );
};

export default AdminPanel;