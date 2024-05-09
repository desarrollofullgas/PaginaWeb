<template>
    <div>
      <input v-model="to" placeholder="To" />
      <input v-model="subject" placeholder="Subject" />
      <textarea v-model="text" placeholder="Email body"></textarea>
      <button @click="sendEmail">Send Email</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        to: '',
        subject: '',
        text: ''
      };
    },
    methods: {
      async sendEmail() {
        try {
          const response = await axios.post('/send-email', {
            to: this.to,
            subject: this.subject,
            text: this.text
          });
          console.log('Email sent:', response.data);
        } catch (error) {
          console.error('Error sending email:', error);
        }
      }
    }
  };
  </script>
  