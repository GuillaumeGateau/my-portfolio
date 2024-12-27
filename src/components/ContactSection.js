import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import emailjs from "emailjs-com";

const ContactSection = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  // State for field errors
  const [errors, setErrors] = useState({});

  /*
    1. Validation for each field (except "message" which is optional).
  */
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "name":
        if (!value.match(/^[a-zA-Z\s]+$/)) {
          return "Name should only contain letters and spaces.";
        }
        break;
      case "company":
        if (!value.trim()) {
          return "Company is required.";
        }
        break;
      case "email":
        if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          return "Please enter a valid email.";
        }
        break;
      default:
        // message is optional
        return "";
    }
    return "";
  };

  /*
    2. Handle blur event to validate each field individually.
  */
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMessage = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  /*
    3. Handle changes (typing) in each field. 
       If there's an existing error, re-check it as the user types.
  */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const newError = validateField(name, value);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: newError }));
    }
  };

  /*
    4. Submit handler to validate all fields and, if valid,
       send the form via EmailJS.
  */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Full check of required fields
    const newErrors = {};
    const nameError = validateField("name", formData.name);
    if (nameError) newErrors.name = nameError;

    const companyError = validateField("company", formData.company);
    if (companyError) newErrors.company = companyError;

    const emailError = validateField("email", formData.email);
    if (emailError) newErrors.email = emailError;

    setErrors(newErrors);

    // If any required field is invalid, stop
    if (Object.values(newErrors).some((err) => err !== "")) {
      return;
    }

    console.log("Form validated successfully:", formData);

    /*
      5. SEND the email with EmailJS
         - We use your service ID, your template ID, 
           and your public key (H9FJtuvnDmqMMf6BJ).
    */
    emailjs
      .send(
        "service_ta5yo2d",          // Your Service ID
        "YOUR_TEMPLATE_ID_HERE",    // Replace with your actual EmailJS template ID
        {
          // Match EXACTLY the placeholders in your EmailJS template
          to_name:   "William",            // or any name to greet yourself
          from_name: formData.name,        // user "Name" from the form
          company:   formData.company,     // user "Company"
          email:     formData.email,       // user "Email"
          message:   formData.message,     // user "Message"
        },
        "H9FJtuvnDmqMMf6BJ" // Your Public Key (User ID)
      )
      .then(
        (result) => {
          console.log("EmailJS result:", result.text);
          alert("Message sent successfully!");
          // (Optional) Clear the form
          setFormData({ name: "", company: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          alert("Oops, something went wrong... please try again.");
        }
      );
  };

  /*
    6. Calendly script effect (unchanged).
       If you no longer need Calendly, remove this entire useEffect.
  */
  useEffect(() => {
    // Calendly CSS
    const existingCSS = document.querySelector(
      'link[href="https://assets.calendly.com/assets/external/widget.css"]'
    );
    if (!existingCSS) {
      const linkEl = document.createElement("link");
      linkEl.rel = "stylesheet";
      linkEl.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(linkEl);
      console.log("Calendly CSS loaded dynamically.");
    }

    // Calendly JS
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (!existingScript) {
      const scriptEl = document.createElement("script");
      scriptEl.src = "https://assets.calendly.com/assets/external/widget.js";
      scriptEl.async = true;
      scriptEl.onload = () => {
        console.log("Calendly script has loaded successfully!");
      };
      document.body.appendChild(scriptEl);
      console.log("Calendly JS loaded dynamically.");
    }
  }, []);

  /*
    7. Opens Calendly popup
  */
  const openCalendlyPopup = () => {
    console.log("Button was clicked. Checking Calendly...");

    if (!window.Calendly) {
      console.warn("Calendly script not loaded or blocked!");
      return;
    }
    console.log("Calendly is defined. Opening popup now...");
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/keck-william?hide_gdpr_banner=1&background_color=eaf2f8&text_color=34495e&primary_color=2980b9",
    });
  };

  return (
    <Box
      component="section"
      className="contact-section"
      sx={{
        backgroundColor: "var(--color-card-background)",
        padding: "3rem 1rem 6rem",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "var(--color-primary-text)",
          fontWeight: "bold",
          fontSize: "1.8rem",
        }}
      >
        Get in Touch
      </Typography>

      {/*
        8. Plain <form> with onSubmit={handleSubmit}.
      */}
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        {["name", "company", "email", "message"].map((field, idx) => (
          <TextField
            key={idx}
            fullWidth
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            onBlur={handleBlur}
            margin="normal"
            multiline={field === "message"}
            minRows={field === "message" ? 3 : undefined}
            error={Boolean(errors[field])}
            helperText={errors[field]}
          />
        ))}
        <Button
          type="submit"
          variant="contained"
          className="primary-contact-button"
          sx={{
            marginTop: "1rem",
            backgroundColor: "var(--color-primary-text)",
            color: "var(--color-card-background)",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "var(--color-primary-text)",
              color: "var(--color-card-background)",
            },
          }}
        >
          Let's Chat!
        </Button>
      </form>

      <Divider
        sx={{
          margin: "2rem auto",
          maxWidth: "500px",
        }}
      >
        <Typography
          component="span"
          sx={{
            backgroundColor: "var(--color-card-background)",
            padding: "0 1rem",
            color: "var(--color-primary-text)",
          }}
        >
          or
        </Typography>
      </Divider>

      <Box display="flex" justifyContent="center" gap={2}>
        <Button
          type="button"
          onClick={openCalendlyPopup}
          variant="outlined"
          className="calendly-button"
          startIcon={<CalendarTodayIcon />}
          sx={{
            borderColor: "var(--color-primary-text)",
            color: "var(--color-primary-text)",
            "&:hover": {
              backgroundColor: "transparent",
              color: "var(--color-primary-text)",
            },
            "&:active, &:focus": {
              backgroundColor: "transparent",
              color: "var(--color-primary-text)",
            },
          }}
        >
          Schedule a Call
        </Button>

        <Button
          href="https://www.linkedin.com/in/williamkeck"
          target="_blank"
          variant="outlined"
          className="linkedin-button"
          startIcon={<LinkedInIcon />}
          sx={{
            borderColor: "var(--color-primary-text)",
            color: "var(--color-primary-text)",
            "&:hover": {
              backgroundColor: "transparent",
              color: "var(--color-primary-text)",
            },
            "&:active, &:focus": {
              backgroundColor: "transparent",
              color: "var(--color-primary-text)",
            },
          }}
        >
          LinkedIn
        </Button>
      </Box>
    </Box>
  );
};

export default ContactSection;