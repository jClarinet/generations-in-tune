// components/ContactForm.tsx
'use client'; // Required if using Next.js App Router components

import React, { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessageStatus('idle');

    try {
      // Post the form data to our Next.js API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessageStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setMessageStatus('error');
        console.error('Form submission failed');
      }
    } catch (error) {
      setMessageStatus('error');
      console.error('Network error during form submission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-4 text-primary flex justify-center items-center">Send Us a Message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-base" />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary text-base" />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary" />
        </div>
        
        <button type="submit" disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {messageStatus === 'success' && (
        <p className="mt-4 text-green-600">Message sent successfully! We will respond soon.</p>
      )}
      {messageStatus === 'error' && (
        <p className="mt-4 text-red-600">An error occurred. Please try again later.</p>
      )}
    </div>
  );
}
