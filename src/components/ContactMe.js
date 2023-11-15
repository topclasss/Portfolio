import React from "react";
import {
  ContactContainer,
  ContactTitle,
  ContactForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
  SocialLinks,
  SocialLink,
} from "../styles/styledComponents";

const ContactMe = () => {
  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact Me</ContactTitle>
      <ContactForm>
        <FormGroup>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="message">Message:</FormLabel>
          <FormTextarea
            id="message"
            name="message"
            placeholder="THIS IS A PLACEHOLDER THIS WILL NOT BE SENT OUT!"
            rows="4"
            required
          ></FormTextarea>
        </FormGroup>
        <FormButton type="submit">Send Message</FormButton>
      </ContactForm>
      <SocialLinks>
        <SocialLink
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </SocialLink>
        <SocialLink
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </SocialLink>
      </SocialLinks>
    </ContactContainer>
  );
};

export default ContactMe;
