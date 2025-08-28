import { useState, ChangeEvent, FormEvent } from 'react';
import { IconMail, IconPhone, IconMapPin, IconSend, IconCheck, IconAlertCircle } from '@tabler/icons-react';
import { useMotionTemplate, useMotionValue, MotionValue, motion } from 'motion/react';
import axios from 'axios';

const BrevoAPIKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface AnimatedInputProps {
  className?: string;
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

interface AnimatedTextareaProps {
  className?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  placeholder?: string;
}

// Animated Input Component
const AnimatedInput: React.FC<AnimatedInputProps> = ({ className = '', type = 'text', ...props }) => {
  const radius = 100;
  const [visible, setVisible] = useState<boolean>(false);
  const mouseX: MotionValue<number> = useMotionValue(0);
  const mouseY: MotionValue<number> = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
            #3b82f6,
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group/input rounded-xl p-[2px] transition duration-300"
    >
      <input
        type={type}
        className={`shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-xl border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600 ${className}`}
        {...props}
      />
    </motion.div>
  );
};

// Animated Textarea Component
const AnimatedTextarea: React.FC<AnimatedTextareaProps> = ({ className = '', ...props }) => {
  const radius = 100;
  const [visible, setVisible] = useState<boolean>(false);
  const mouseX: MotionValue<number> = useMotionValue(0);
  const mouseY: MotionValue<number> = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
            #3b82f6,
            transparent 80%
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group/input rounded-xl p-[2px] transition duration-300"
    >
      <textarea
        className={`shadow-input dark:placeholder-text-neutral-600 flex min-h-[80px] w-full rounded-xl border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600 resize-none ${className}`}
        {...props}
      />
    </motion.div>
  );
};

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormData];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');

    const senderEmail = 'info@tezzeract.net'; // Replace with your verified Brevo sender email
    const adminEmail = 'wehan@tezzeract.com'; // Replace with your admin email

    const emailToAdmin = {
      sender: { name: 'Website Contact', email: senderEmail },
      to: [{ email: adminEmail, name: 'Admin' }],
      subject: 'New Contact Form Submission',
      htmlContent: `
        <html>
          <body>
            <h2>New Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </body>
        </html>
      `,
    };

    const emailToCustomer = {
      sender: { name: 'Website Contact', email: senderEmail },
      to: [{ email: formData.email, name: formData.name }],
      subject: 'Thank You for Your Submission',
      htmlContent: `
        <html>
          <body>
            <h2>Thank You, ${formData.name}!</h2>
            <p>We received your message and will get back to you soon.</p>
            <p><strong>Your Details:</strong></p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </body>
        </html>
      `,
    };

    try {
      await axios.post('https://api.brevo.com/v3/smtp/email', emailToAdmin, {
        headers: {
          accept: 'application/json',
          'api-key': BrevoAPIKey,
          'content-type': 'application/json',
        },
      });

      await axios.post('https://api.brevo.com/v3/smtp/email', emailToCustomer, {
        headers: {
          accept: 'application/json',
          'api-key': BrevoAPIKey,
          'content-type': 'application/json',
        },
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error sending emails:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        request: error.request,
      });
      setIsSubmitting(false);
      setSubmitError(error.response?.data?.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-[#121212]">
      <div className="bg-[#121212] text-white bg-[linear-gradient(to_bottom,#121212,#00398C_34%,#0060EB_65%,#01A6EB_82%)] py-[72px] sm:py-[250px] relative overflow-clip lg:h-[60vh]">
        <div className="container relative mx-auto">
          <div className="flex justify-center -mt-6">
            <div className="inline-flex relative">
              <h1 className="text-6xl sm:text-[104px] font-medium tracking-tighter text-center leading-tight">
                <span>Reach Us</span>
              </h1>
              <div className="absolute h-[500px] w-[1200px] sm:w-[3400px] sm:h-[1200px] lg:w-[3000px] lg:h-[1400px] sm:py-24 rounded-[100%] bg-[#121212] left-1/2 -translate-x-1/2 border-2 border-[#84DBFF] bg-[radial-gradient(closest-side,#121212_84%,#003D8F)] sm:top-[calc(100%-38px)] top-[calc(100%-100px)]"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto pb-[100px]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>

          <div className="px-12  md:w-[80%] sm:w-full ">
            <div className="space-y-8">
              {isSubmitted ? (
                <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 text-center">
                  <div className="flex justify-center mb-4">
                    <IconCheck className="w-12 h-12 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-neutral-300 mb-6">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                          Name
                        </label>
                        <AnimatedInput
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="h-12"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                          Email
                        </label>
                        <AnimatedInput
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="h-12"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                        Subject
                      </label>
                      <AnimatedInput
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                        className="h-12"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                        Message
                      </label>
                      <AnimatedTextarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us more about your project or question..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-white to-[#9AE1FE] text-black font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <IconSend className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    {submitError && (
                      <div className="flex items-center justify-center space-x-2 text-red-500">
                        <IconAlertCircle className="w-5 h-5" />
                        <p className="text-sm">{submitError}</p>
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}