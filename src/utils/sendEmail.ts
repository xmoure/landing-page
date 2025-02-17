export const sendEmail = () => {
    const email = "example@email.com";
    const subject = encodeURIComponent("Hello");
    const body = encodeURIComponent("I want to talk about...");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };