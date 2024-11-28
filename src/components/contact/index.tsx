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
    <Section id="contact" title="Connect with Me" className="justify-center items-center">
      <div className="flex flex-col items-center space-y-6 mb-5">
        <form onSubmit={handleSubmit} className="max-w-4xl text-lg md:text-xl text-gray-300 space-y-4 w-full">
          <p>
            I&apos;m actively seeking new opportunities and would love to connect! Feel free to leave me a message, and
            I’ll get back to you promptly.
          </p>

          <div className="grid w-full max-w-md items-center gap-1.5">
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
          <div className="grid w-full max-w-md items-center gap-1.5">
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

          <div className="grid w-full max-w-md items-center gap-1.5">
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

          <Button type="submit" variant="threeD" className="max-w-md w-full" disabled={formData.email.length === 0}>
            Send Message
          </Button>
          {status && <p className="mt-4 text-sm">{status}</p>}
        </form>
      </div>

      <div className="flex-col items-center space-y-3 mt-5">
        <div className="max-w-4xl flex flex-col space-y-4">
          <h2 className="text-2xl mb-2">
            Using Social Link
            <span className="block h-[1px] bg-[#5ceac9] w-full mt-2" />
          </h2>
        </div>

        <div className="max-w-4xl flex space-x-4 w-full">
          <a href="mailto:ravisharmacs09@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="threeD" size="default" className="flex items-center space-x-2">
              <FaEnvelope className="w-5 h-5" />
              <span>Email Me</span>
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/ravics09/" target="_blank" rel="noopener noreferrer">
            <Button variant="threeD" size="default" className="flex items-center space-x-2">
              <FaLinkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </Button>
          </a>
          <a
            href="https://wa.me/8817147753?text=Hello%20Ravi,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="threeD" size="default" className="flex items-center space-x-2">
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
