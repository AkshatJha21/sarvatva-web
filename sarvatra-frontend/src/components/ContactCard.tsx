import banner from "../assets/cu.png";
import React, { useRef, ChangeEvent, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { z } from 'zod';
import PhoneInput from "react-phone-input-2";

// Define the Zod schema for the form data
const formSchema = z.object({
  company: z.string().min(1, { message: "Company is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "Last name is required" }),
  user_email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
  subscribe: z.boolean().optional(),
});

const PhoneInputField: React.FC<{ phoneNumber: string, setPhoneNumber: (phone: string) => void }> = ({ phoneNumber, setPhoneNumber }) => {
  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <div className="flex flex-col my-4">
      <PhoneInput
        country={'in'}
        value={phoneNumber}
        inputStyle={{
          width: '100%',
          backgroundColor: 'transparent',
          color: '#131313',
          borderBottom: '1px solid #131313',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          borderRadius: '0px',
          fontFamily: 'avenir',
          fontWeight: 'light',
          padding: '0 40px',
        }}
        buttonStyle={{
          backgroundColor: 'transparent',
          border: 'none',
        }}
        dropdownStyle={{
          backgroundColor: '#EDE6D6',
          color: '#131313',
          borderRadius: '6px',
          fontFamily: 'avenir'
        }}
        containerStyle={{
          width: '100%',
        }}
        onChange={handlePhoneChange}
      />
    </div>
  );
};

const initialFormState = {
  company: '',
  country: '',
  first_name: '',
  last_name: '',
  user_email: '',
  message: '',
  subscribe: false
};

const ContactCard = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState(initialFormState);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const errors = result.error.format();
      const errorMessages = Object.values(errors).map((err: any) => err._errors).flat();
      alert(`Validation errors:\n${errorMessages.join('\n')}`);
      return;
    }

    emailjs
      .sendForm('service_0ezieoa', 'template_2ce02ob', form.current!, { publicKey: 'XcW2jNaUhvrtFXOHS' })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent successfully');
          setFormData(initialFormState);
          setPhoneNumber(''); 
          form.current?.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email');
        }
      );
  };

  return (
    <div className="h-[140vh] md:h-[130vh] bg-white">
      <img src={banner} alt="" className="w-full h-[30vh] object-cover" />
      <form ref={form} className="flex h-[110vh] md:h-[100vh] flex-col justify-center items-center" onSubmit={sendEmail}>
        <div className="flex flex-col text-center mb-2">
          <h1 className="font-cormorant text-[#131313] text-3xl md:text-4xl">Let's Connect</h1>
          <p className="font-avenir font-light text-lg md:text-xl text-[#131313]/50">Over a cup of Tea...</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-2 md:my-8 gap-x-4 md:gap-x-24 gap-y-2 md:gap-y-10 w-[90%]">
          <input type="hidden" name="phone" value={phoneNumber} />
          <input name="company" id="company" type="text" placeholder="Company / Name *" className="text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313] rounded-none" onChange={handleChange} required />
          <input name="country" id="country" type="text" placeholder="Country *" className="text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313] rounded-none" onChange={handleChange} required />
          <input name="first_name" id="first_name" type="text" placeholder="First Name *" className="text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313] rounded-none" onChange={handleChange} required />
          <input name="last_name" id="last_name" type="text" placeholder="Last Name *" className="text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313] rounded-none" onChange={handleChange} required />
          <input name="user_email" id="user_email" type="email" placeholder="Email *" className="text-[#131313] font-avenir font-light md:text-xl px-4 py-2 border-b border-[#131313] rounded-none" onChange={handleChange} required />
          <PhoneInputField phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
        </div>
        <div className="flex flex-col my-4 w-[90%]">
          <textarea name="message" id="message" placeholder="Tell us more about your vision? We would love to collaborate with you *" className="border rounded-md text-sm md:text-lg font-avenir placeholder:italic border-[#131313] p-2 resize-none" rows={8} onChange={handleChange} required></textarea>
          <div className="flex my-2 font-avenir font-light text-sm md:text-lg">
            <input name="subscribe" type="checkbox" id="notifications" onChange={handleChange} />
            <label htmlFor="notifications" className="px-4">I would like to receive the Sarvatva newsletter with updates, inspiration and more</label>
          </div>
          <button type="submit" className="text-[#131313] tracking-widest font-medium opacity-80 border-[#131313] backdrop-blur-sm w-full md:w-[200px] my-2 transition-all rounded-md border-[0.5px] font-avenir text-[10px] md:text-sm text-center hover:text-[#EDE6D6] hover:bg-[#131313] px-4 py-2 bg-white/10 shadow-lg">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
