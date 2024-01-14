import { useForm } from "react-hook-form";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";


const ContactMe = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        // Your form submission logic here
        window.location.href = `mailto:divyab979@gmail.com?subject${data.Subject}&body=Hi, my name is ${data.Name}. ${data.Message} (${data.Email})`;
    };
    const validateEmail = (value) => {
        // Custom validation to check if the email contains '@'
        return value.includes('@') || 'Please enter a valid email address';
    };

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                contact
            </h3>

            <div className="flex flex-col space-y-10 mt-48">
                <h4 className="text-4xl font-semibold text-center">
                    Contact me
                </h4>

                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <FaPhoneAlt className="text-[#f7ab0a] animate-pulse" />
                        <p className="text-2xl">+123456789</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <FaEnvelope className="text-[#f7ab0a] animate-pulse" />
                        <p className="text-2xl">divyab979@gmail.com</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input
                            {...register("Name", { required: true, maxLength: 20 })}
                            placeholder="Name"
                            type="text"
                            className="contactInput" />
                        <input
                            {...register("Email", { required: true, validate: validateEmail })}
                            placeholder="Email"
                            type="text"
                            className="contactInput"
                        />
                    </div>
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    <input
                        {...register("Subject", { required: true, maxLength: 100 })}
                        placeholder="Subject" type="text"
                        className="contactInput" />
                    <textarea
                        {...register("Message", { required: true, maxLength: 100 })}
                        placeholder="Message"
                        className="contactInput"></textarea>
                    <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default ContactMe