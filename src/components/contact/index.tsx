import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';
import { FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset the form fields

        // Clear success message after 3 seconds
        setTimeout(() => {
          setStatus('');
        }, 3000);
      } else {
        const errorData = await response.json();
        setStatus(errorData.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <Section id="contact" title="Connect with Me" className="justify-center items-center p-4 sm:p-6 md:p-10">
      <div className="flex flex-col space-y-6 mb-8">
        <form onSubmit={handleSubmit} className="mx-auto max-w-4xl text-lg md:text-xl text-gray-500 space-y-6 w-full">
          <p>
            I&apos;m actively seeking new opportunities and would love to connect! Feel free to leave me a message, and
            I’ll get back to you promptly.
          </p>

          <div className="grid w-full max-w-md items-start gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid w-full max-w-md items-start gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid w-full max-w-md items-start gap-1.5">
            <Label htmlFor="email">Message</Label>
            <Textarea
              name="message"
              placeholder="Type your message for ravi."
              value={formData.message}
              onChange={handleChange}
              className="resize-none h-32"
              required
            />
          </div>

          <Button
            type="submit"
            variant="threeD"
            className="grid max-w-md w-full items-start"
            disabled={formData.email.length === 0}
          >
            Send Message
          </Button>
          {status && <p className="mt-4 text-sm">{status}</p>}
        </form>
      </div>

      <div className="flex flex-col space-y-3 mt-10">
        <h2 className="text-xl md:text-3xl mb-2">
          Using Social Link
          <span className="block h-[1px] bg-[#5ceac9] w-full mt-2" />
        </h2>

        {/* Social Links */}
        <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4 w-full">
          <a href="mailto:ravisharmacs09@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="threeD" size="default" className="max-w-xs flex items-center space-x-2">
              <FaEnvelope className="w-5 h-5" />
              <span>Email Me</span>
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/ravics09/" target="_blank" rel="noopener noreferrer">
            <Button variant="threeD" size="default" className="max-w-xs flex items-center space-x-2">
              <FaLinkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </Button>
          </a>
          <a
            href="https://wa.me/8817147753?text=Hello%20Ravi,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="threeD" size="default" className="max-w-xs flex items-center space-x-2">
              <FaWhatsapp className="w-5 h-5" />
              <span>Message on WhatsApp</span>
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
