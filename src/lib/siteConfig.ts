export const PHONE = "+502 57886144";
export const EMAIL = "realdanii135@gmail.com";
export const LOCATION = "Guatemala";

export const LINKEDIN_URL = "https://www.linkedin.com/in/nestor-montenegro";
export const GITHUB_URL = "https://github.com/nestord23";

// Helpers para derivar los links a partir del dato "crudo"
export const toTelLink = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;
export const toMailLink = (email: string) => `mailto:${email}`;
