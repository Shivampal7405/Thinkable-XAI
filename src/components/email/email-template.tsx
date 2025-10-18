// components/email/email-template.tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Section,
  Text,
} from '@react-email/components';
import type * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Section style={section}>
          <Heading style={heading}>New Contact Form Submission</Heading>
          <Text style={text}>
            You’ve received a new inquiry about our cutting-edge AI tools and web applications.
          </Text>
        </Section>

        <Section style={section}>
          <Text style={label}>Name:</Text>
          <Text style={value}>{name}</Text>
        </Section>

        <Section style={section}>
          <Text style={label}>Email:</Text>
          <Text style={value}>{email}</Text>
        </Section>

        <Section style={section}>
          <Text style={label}>Message:</Text>
          <Text style={value}>{message}</Text>
        </Section>

        <Section style={section}>
          <Text style={footerText}>
            This email was generated automatically from your websites contact form.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: '#f9f9f9',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  width: '600px',
  maxWidth: '100%',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  border: '1px solid #e5e5e5',
};

const section = {
  padding: '16px 0',
};

const heading = {
  fontSize: '24px',
  fontWeight: '700',
  textAlign: 'center' as const,
  marginBottom: '12px',
};

const text = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#333333',
  textAlign: 'center' as const,
};

const label = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#555555',
  marginBottom: '4px',
};

const value = {
  fontSize: '16px',
  color: '#000000',
  marginBottom: '12px',
};

const footerText = {
  fontSize: '12px',
  color: '#888888',
  textAlign: 'center' as const,
  marginTop: '20px',
};