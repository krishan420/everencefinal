// import { useState, useEffect, useRef, useCallback } from "react";
// import axios from "axios";
// import config from "../../lib/config";
// import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
// import { GetCourseAbout } from "../../api/fetchComponentData";

// // Helper function to find courses
// const findCourseByQuery = (courses, query) => {
//   query = query.toLowerCase().trim();

//   // First check exact matches
//   for (const category of courses) {
//     if (category.title.toLowerCase() === query) {
//       return { title: category.title, isSubCourse: false };
//     }
//     if (category.subMenu) {
//       for (const subCourse of category.subMenu) {
//         if (subCourse.title.toLowerCase() === query) {
//           return { title: subCourse.title, isSubCourse: true };
//         }
//       }
//     }
//   }

//   // Then check partial matches
//   for (const category of courses) {
//     if (category.title.toLowerCase().includes(query)) {
//       return { title: category.title, isSubCourse: false };
//     }
//     if (category.subMenu) {
//       for (const subCourse of category.subMenu) {
//         if (subCourse.title.toLowerCase().includes(query)) {
//           return { title: subCourse.title, isSubCourse: true };
//         }
//       }
//     }
//   }

//   return null;
// };

// const useChatBotLogic = () => {
//   const [open, setOpen] = useState(false);
//   const [currentCategory, setCurrentCategory] = useState(null);
//   const [messages, setMessages] = useState([
//     {
//       from: "bot",
//       text: "👋 Hey there! I'm here to help you find the perfect path. How can I assist you today?",
//       options: ["Browse courses", "Help me to fill the form"]
//     },
//   ]);
//   const [userInput, setUserInput] = useState("");
//   const [step, setStep] = useState("intro");
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     course: "",
//     location: "",
//   });
//   const [isTyping, setIsTyping] = useState(false);
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const [selectedCourseDetails, setSelectedCourseDetails] = useState(null);
//   const messagesEndRef = useRef(null);
//   const courses = useSelector((state) => state.navbar.menuItems);

//   // Auto-scroll to bottom
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, expandedCategory, selectedCourseDetails]);

//   const validateStep = useCallback((field, value) => {
//     if (!value.trim()) return "This field is required.";
//     if (field === "phone" && !/^\d{10}$/.test(value))
//       return "Please enter a valid 10-digit phone number.";
//     return null;
//   }, []);

//   const addBotMessage = useCallback((text, options = []) => {
//     setIsTyping(true);
//     setTimeout(() => {
//       setMessages(prev => [...prev, { from: "bot", text, options }]);
//       setIsTyping(false);
//     }, 800);
//   }, []);

//   const toggleCategory = useCallback((categoryTitle) => {
//     setExpandedCategory(prev => prev === categoryTitle ? null : categoryTitle);
//     setSelectedCourseDetails(null);
//   }, []);

//   const fetchCourseDetails = useCallback(async (courseTitle) => {
//     try {
//       setIsTyping(true);

//       const points = await GetCourseAbout(courseTitle);
//       if (points && points.length > 0) {
//         const markdownList = points.map(point => `- ${point}`).join('\n');
//         setSelectedCourseDetails({
//           title: courseTitle,
//           description: markdownList
//         });
//       } else {
//         addBotMessage(`I'd love to tell you more about ${courseTitle}, but I don't have the full details right now. Would you like me to connect you with a course advisor?`,
//           ["Yes, connect me", "Browse other courses"]);
//       }
//     } catch (error) {
//       console.error("Error fetching course details:", error);
//       addBotMessage("Hmm, I'm having trouble accessing the course details at the moment. Would you like to try another course or ask something else?");
//     } finally {
//       setIsTyping(false);
//     }
//   }, [addBotMessage]);

//   const handleCourseSelect = useCallback((courseTitle, isSubCourse = false, categoryTitle = null) => {
//     // If it's a main course with sub-courses
//     const category = courses.find(c => c.title === (categoryTitle || courseTitle));
//     if (!isSubCourse && category?.subMenu?.length > 0) {
//       setCurrentCategory(category.title);
//       setExpandedCategory(category.title);
//       setSelectedCourseDetails(null);
//       addBotMessage(`You selected ${category.title}. Please choose a specialization:`, []);
//       return;
//     }

//     // For final course selection (sub-courses or main without sub-courses)
//     setFormData(prev => ({ ...prev, course: courseTitle }));
//     setExpandedCategory(null);
//     setCurrentCategory(null);

//     const message = isSubCourse
//       ? `Great choice! You've selected ${courseTitle} under ${categoryTitle}.`
//       : `Excellent! You've selected the ${courseTitle} course.`;

//     addBotMessage(`${message} Now, may I know your name?`);
//     setStep("name");
//   }, [courses, addBotMessage]);

//   const handleSend = useCallback(async () => {
//     if (!userInput.trim()) return;

//     const input = userInput.trim();
//     setMessages(prev => [...prev, { from: "user", text: input }]);
//     setUserInput("");
//     setSelectedCourseDetails(null);

//     let nextStep = step;

//     // Handle course info requests
//     const infoMatch = /(tell me about|what is|info about|explain|details on|learn more about|describe|information on|explore|define|tell me more about) (.+)/i.exec(input);
//     if (infoMatch && infoMatch[2]) {
//       const courseQuery = infoMatch[2].trim();
//       const courseMatch = findCourseByQuery(courses, courseQuery);

//       if (courseMatch) {
//         fetchCourseDetails(courseMatch.title);
//         return;
//       } else {
//         addBotMessage(`I'm not sure about "${courseQuery}". Could you clarify which course you're interested in? Or type "show courses" to see our offerings.`);
//         return;
//       }
//     }

//     // Handle course browsing requests
//     if (/(courses|list|offer|show me|browse)/i.test(input)) {
//       nextStep = "show_courses";
//       addBotMessage("Sure! Here are the courses we offer:");
//       setExpandedCategory("all");
//     }

//     // Conversation flow
//     switch (step) {
//       case "intro":
//         if (input === "Browse courses") {
//           nextStep = "show_courses";
//           addBotMessage("Here are our available courses:");
//           setExpandedCategory("all");
//         } else if (input === "Help me to fill the form") {
//           addBotMessage("Sure! Let's start with your name. What should I call you?");
//           nextStep = "name";
//         } else if (/(yes|please|sure|ok|start)/i.test(input)) {
//           addBotMessage("Awesome! Would you like to browse courses or get help filling the form?",
//             ["Browse courses", "Help me to fill the form"]);
//         }
//         else if (/(yes|please|sure|ok|start)/i.test(input)) {
//           const responses = [
//             "Awesome! Let's get started 🤝",
//             "Great choice! Let's begin 😊",
//             "Perfect! Let's find your ideal course 👍"
//           ];
//           addBotMessage(responses[Math.floor(Math.random() * responses.length)]);
//           addBotMessage("First, what should I call you?");
//           nextStep = "name";
//         } else if (/(no|not now|later)/i.test(input)) {
//           addBotMessage("No problem! I'll be here when you're ready. Just say 'Hi' whenever you need help 👋");
//           nextStep = "done";
//         } else {
//           addBotMessage("I'm here to help with course information. Would you like to explore our offerings?",
//             ["Yes, show courses", "Maybe later"]);
//         }
//         break;

//       case "name": {
//         const error = validateStep("name", input);
//         if (error) {
//           addBotMessage(error);
//           return;
//         }
//         setFormData(f => ({ ...f, name: input }));
//         addBotMessage(`Nice to meet you, ${input}! 😊`);
//         addBotMessage("Can I have your phone number so we can contact you?", ["Skip for now"]);
//         nextStep = "phone";
//         break;
//       }

//       case "phone": {
//         if (/skip/i.test(input.toLowerCase())) {
//           addBotMessage("No problem! We'll contact you via email then.");
//           nextStep = "location";
//           break;
//         }

//         const error = validateStep("phone", input);
//         if (error) {
//           addBotMessage(error);
//           return;
//         }
//         setFormData(f => ({ ...f, phone: input }));
//         addBotMessage("Thanks! Where are you from?");
//         nextStep = "location";
//         break;
//       }

//       case "location": {
//         const error = validateStep("location", input);
//         if (error) {
//           addBotMessage(error);
//           return;
//         }
//         setFormData(f => ({ ...f, location: input }));
//         addBotMessage("Perfect! Now, which course would you like to enroll in?");
//         nextStep = "course";
//         if (formData.course) {
//           // If course already selected (from browsing), submit immediately
//           nextStep = "submit_form";
//         } else {
//           addBotMessage("Perfect! Which course are you interested in?");
//           nextStep = "course_selection";
//         }
//         break;
//       }

//       case "course_selection": {
//         const courseMatch = findCourseByQuery(courses, input);
//         if (courseMatch) {
//           handleCourseSelect(courseMatch.title, courseMatch.isSubCourse);
//         } else {
//           addBotMessage(`I'm not sure about "${input}". Please select from the options below.`);
//         }
//         break;
//       }

//       case "connect_advisor":
//         setFormData(f => ({ ...f, name: input }));
//         addBotMessage(`Thank you ${input}! A course advisor will contact you shortly.`);
//         // Submit logic would go here
//         nextStep = "done";
//         break;

//       case "course": {
//         const error = validateStep("course", input);
//         if (error) {
//           addBotMessage(error);
//           return;
//         }

//         const finalData = { ...formData, course: input };
//         setFormData(finalData);
//         addBotMessage("Awesome! Submitting your details now... 🔄");

//         try {
//           const web3Res = await axios.post(
//             "https://api.web3forms.com/submit",
//             {
//               access_key: "fabb3cfb-5cb8-4f83-81ae-b1c5caf0797a",
//               subject: "New Contact Form Submission",
//               from_name: "Sap Training",
//               recipient_email: "shivanihiware77@gmail.com",
//               ...finalData,
//             },
//             { headers: { "Content-Type": "application/json" } }
//           );

//           if (web3Res.data.success) {
//             const dbRes = await axios.post(config.apiUrl, finalData, {
//               headers: { "Content-Type": "application/json" },
//             });

//             if (dbRes.data.success) {
//               addBotMessage("✅ All set! We've received your info and will reach out shortly.");
//               toast.success("Form submitted successfully!");
//             } else {
//               addBotMessage("⚠️ Info submitted to Web3Forms, but saving to DB failed.");
//               toast.warn("Saved to Web3Forms, but DB failed.");
//             }
//           } else {
//             addBotMessage("❌ Web3Forms submission failed.");
//             toast.error("Web3Forms submission failed.");
//           }
//         } catch (err) {
//           console.error("Submission Error:", err);
//           addBotMessage("❌ Something went wrong while submitting.");
//           toast.error("Something went wrong while submitting.");
//         }

//         nextStep = "done";
//         break;
//       }

//       case "show_courses":
//         addBotMessage("Here are the courses we offer:");
//         nextStep = "course_selection";
//         break;

//       case "course_selection":
//         setFormData(f => ({ ...f, course: input }));
//         addBotMessage(`Great choice! You've selected ${input}.`);
//         addBotMessage("May I know your name to proceed?");
//         nextStep = "name";
//         break;

//       default:
//         if (/hi|hello|start/i.test(input)) {
//           const greetings = [
//             "👋 Welcome back! Ready to explore courses?",
//             "Hello again! How can I assist you today?",
//             "Hi there! What can I help you with?"
//           ];
//           addBotMessage(greetings[Math.floor(Math.random() * greetings.length)]);
//           nextStep = "intro";
//         } else {
//           addBotMessage("I'm here if you need anything else. Just say 'Hi' to start again 👋");
//         }
//         break;
//     }

//     setStep(nextStep);
//   }, [step, userInput, courses, formData, addBotMessage, handleCourseSelect, validateStep]);

//   const handleQuickReply = useCallback((reply) => {
//     // Add user message immediately
//     setMessages(prev => [...prev, { from: "user", text: reply }]);

//     // Process reply directly
//     if (reply === "Browse courses") {
//       setStep("show_courses");
//       setExpandedCategory("all");
//       addBotMessage("Here are our available courses:");
//     }
//     else if (reply === "Help me to fill the form") {
//       setStep("name");
//       addBotMessage("Sure! Let's start with your name. What should I call you?");
//     }
//     else if (reply === "Yes, connect me") {
//       setStep("connect_advisor");
//       addBotMessage("Great! Please share your name so I can connect you with an advisor.");
//     }
//   }, [addBotMessage]);

//   return {
//     open,
//     setOpen,
//     messages,
//     userInput,
//     setUserInput,
//     isTyping,
//     expandedCategory,
//     selectedCourseDetails,
//     messagesEndRef,
//     courses,
//     handleQuickReply,
//     handleSend,
//     toggleCategory,
//     handleCourseSelect
//   };
// };

// export default useChatBotLogic;







import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import config from "../../lib/config";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { GetCourseAbout } from "../../api/fetchComponentData";

const findCourseByQuery = (courses, query) => {
  query = query.toLowerCase().trim();

  // First pass: exact matches
  for (const category of courses) {
    if (category.title.toLowerCase() === query) {
      return { 
        title: category.title, 
        isSubCourse: false, 
        categoryTitle: category.title 
      };
    }
    if (category.subMenu) {
      for (const subCourse of category.subMenu) {
        if (subCourse.title.toLowerCase() === query) {
          return { 
            title: subCourse.title, 
            isSubCourse: true, 
            categoryTitle: category.title 
          };
        }
      }
    }
  }

  // Second pass: partial matches
  for (const category of courses) {
    if (category.title.toLowerCase().includes(query)) {
      return { 
        title: category.title, 
        isSubCourse: false, 
        categoryTitle: category.title 
      };
    }
    if (category.subMenu) {
      for (const subCourse of category.subMenu) {
        if (subCourse.title.toLowerCase().includes(query)) {
          return { 
            title: subCourse.title, 
            isSubCourse: true, 
            categoryTitle: category.title 
          };
        }
      }
    }
  }

  return null;
};

const useChatBotLogic = () => {
  const initialMessages = [
    {
      from: "bot",
      text: "👋 Hey there! I'm here to help you find the perfect course. How can I assist you today?",
      options: ["Browse courses", "Help me to fill the form"]
    }
  ];

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [userInput, setUserInput] = useState("");
  const [step, setStep] = useState("intro");
  const [formData, setFormData] = useState({ name: "", phone: "", course: "", location: "" });
  const [isTyping, setIsTyping] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedCourseDetails, setSelectedCourseDetails] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState(null);
  const messagesEndRef = useRef(null);
  const courses = useSelector((state) => state.navbar.menuItems);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, expandedCategory, selectedCourseDetails]);

  const resetConversation = useCallback(() => {
    setMessages(initialMessages);
    setUserInput("");
    setStep("intro");
    setFormData({ name: "", phone: "", course: "", location: "" });
    setExpandedCategory(null);
    setSelectedCourseDetails(null);
    setFilteredCourses(null);
  }, []);

  const validateStep = useCallback((field, value) => {
    if (!value.trim()) return "This field is required.";
    if (field === "phone" && !/^\d{10}$/.test(value)) return "Please enter a valid 10-digit phone number.";
    return null;
  }, []);

  const addBotMessage = useCallback((text, options = []) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text, options }]);
      setIsTyping(false);
    }, 800);
  }, []);

  const toggleCategory = useCallback((categoryTitle) => {
    setExpandedCategory(prev => (prev === categoryTitle ? null : categoryTitle));
    setSelectedCourseDetails(null);
  }, []);

  const fetchCourseDetails = useCallback(async (courseTitle) => {
    try {
      setIsTyping(true);
      const points = await GetCourseAbout(courseTitle);
      if (points?.length > 0) {
        const markdownList = points.map(point => `- ${point}`).join("\n");
        setSelectedCourseDetails({ title: courseTitle, description: markdownList });
      } else {
        addBotMessage(`I'd love to tell you more about ${courseTitle}, but I don't have the details right now. Want to speak to a course advisor?`, ["Yes, connect me", "Browse other courses"]);
      }
    } catch (error) {
      console.error("Error fetching course details:", error);
      addBotMessage("Hmm, I'm having trouble getting the course info. Want to try another course?");
    } finally {
      setIsTyping(false);
    }
  }, [addBotMessage]);

  const handleCourseSelect = useCallback((courseTitle, isSubCourse = false, categoryTitle = null) => {
    const message = isSubCourse
      ? `Great choice! You've selected ${courseTitle} under ${categoryTitle}.`
      : `Excellent! You've selected the ${courseTitle} course.`;

    setFormData(prev => ({ ...prev, course: courseTitle }));
    
    // Filter courses to only show selected category when sub-course is selected
    if (isSubCourse && categoryTitle) {
      const filtered = courses.filter(course => course.title === categoryTitle);
      setFilteredCourses(filtered);
      setExpandedCategory(categoryTitle);
    } else {
      setFilteredCourses(null);
      setExpandedCategory(null);
    }
    
    setSelectedCourseDetails(null);

    // Check if we already have personal info
    if (formData.name && formData.location) {
      addBotMessage(`${message} Submitting your details now... 🔄`);
      setStep("submit_form");
    } else {
      addBotMessage(`${message} Now, may I know your name?`);
      setStep("name");
    }
  }, [addBotMessage, formData, courses]);

  const submitFormData = useCallback(async (data) => {
    try {
      setIsTyping(true);
      
      const web3Res = await axios.post("https://api.web3forms.com/submit", {
        access_key: "fabb3cfb-5cb8-4f83-81ae-b1c5caf0797a",
        subject: "New Contact Form Submission",
        from_name: "Sap Training",
        recipient_email: "shivanihiware77@gmail.com",
        ...data,
      });

      if (web3Res.data.success) {
        const dbRes = await axios.post(config.apiUrl, data, {
          headers: { "Content-Type": "application/json" },
        });

        if (dbRes.data.success) {
          addBotMessage("✅ Thank you! Your info is submitted. We'll be in touch soon.");
          toast.success("Form submitted successfully!");
        } else {
          addBotMessage("Submitted to Web3Forms, but couldn't save to our system.");
          toast.warn("Partial submission.");
        }
      } else {
        addBotMessage("Hmm, something went wrong with Web3Forms.");
        toast.error("Submission failed.");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      addBotMessage("❌ Oops! Something broke. Let's try again from the beginning.");
      toast.error("Submission failed.");
    } finally {
      setIsTyping(false);
      setStep("done");
    }
  }, [addBotMessage]);

  const handleSend = useCallback(async () => {
    if (!userInput.trim()) return;

    const input = userInput.trim();
    setMessages(prev => [...prev, { from: "user", text: input }]);
    setUserInput("");
    setSelectedCourseDetails(null);

    let nextStep = step;

    const infoMatch = /(tell me about|what is|info about|explain|details on|learn more about|describe|information on|explore|define|tell me more about) (.+)/i.exec(input);
    if (infoMatch?.[2]) {
      const courseQuery = infoMatch[2].trim();
      const courseMatch = findCourseByQuery(courses, courseQuery);
      if (courseMatch) {
        fetchCourseDetails(courseMatch.title);
      } else {
        addBotMessage(`Hmm, I couldn't find "${courseQuery}". Try again or type "show courses" to see options.`);
      }
      return;
    }

    if (/(courses|list|offer|show me|browse)/i.test(input)) {
      setExpandedCategory("all");
      setFilteredCourses(null); // Reset filtering when showing all courses
      addBotMessage("Sure! Here are the courses we offer:");
      setStep("course_selection");
      return;
    }

    switch (step) {
      case "intro":
        if (input === "Browse courses") {
          setExpandedCategory("all");
          setFilteredCourses(null); // Reset filtering
          addBotMessage("Here are our available courses:");
          nextStep = "course_selection";
        } else if (input === "Help me to fill the form") {
          addBotMessage("Great! Let's start. What's your name?");
          nextStep = "name";
        } else {
          addBotMessage("Would you like to browse our courses or get help with the form?", ["Browse courses", "Help me to fill the form"]);
        }
        break;

      case "name": {
        const error = validateStep("name", input);
        if (error) return addBotMessage(error);

        setFormData(f => ({ ...f, name: input }));
        addBotMessage(`Nice to meet you, ${input}! 😊`);
        addBotMessage("Can I get your phone number please?", ["Skip for now"]);
        nextStep = "phone";
        break;
      }

      case "phone": {
        if (/skip/i.test(input)) {
          addBotMessage("No worries! We'll skip it.");
          nextStep = "location";
          break;
        }
        const error = validateStep("phone", input);
        if (error) return addBotMessage(error);

        setFormData(f => ({ ...f, phone: input }));
        addBotMessage("Awesome! Where are you from?");
        nextStep = "location";
        break;
      }

      case "location": {
        const error = validateStep("location", input);
        if (error) return addBotMessage(error);

        const updatedData = { ...formData, location: input };
        setFormData(updatedData);
        
        if (formData.course) {
          nextStep = "submit_form";
        } else {
          nextStep = "course_selection";
          addBotMessage("Got it! Which course are you interested in?");
        }
        break;
      }

      case "course_selection": {
        const courseMatch = findCourseByQuery(courses, input);
        if (courseMatch) {
          handleCourseSelect(courseMatch.title, courseMatch.isSubCourse, courseMatch.categoryTitle);
        } else {
          addBotMessage(`Hmm, couldn't find "${input}". Please try another course name.`);
        }
        break;
      }

      case "submit_form":
        await submitFormData(formData);
        break;

      case "connect_advisor":
        setFormData(f => ({ ...f, name: input }));
        addBotMessage(`Thanks ${input}! A course advisor will contact you soon.`);
        nextStep = "done";
        break;

      default:
        if (/hi|hello|hey|start/i.test(input)) {
          resetConversation();
        } else {
          addBotMessage("I'm still here if you need anything. Just say 'Hi' to begin again 👋");
        }
        break;
    }

    setStep(nextStep);
  }, [step, userInput, courses, formData, addBotMessage, fetchCourseDetails, validateStep, handleCourseSelect, resetConversation, submitFormData]);

  const handleQuickReply = useCallback((reply) => {
    setMessages(prev => [...prev, { from: "user", text: reply }]);
    if (reply === "Browse courses") {
      setStep("course_selection");
      setExpandedCategory("all");
      setFilteredCourses(null); // Reset filtering
      addBotMessage("Here are our available courses:");
    } else if (reply === "Help me to fill the form") {
      setStep("name");
      addBotMessage("Sure! Let's start with your name.");
    } else if (reply === "Yes, connect me") {
      setStep("connect_advisor");
      addBotMessage("Great! Please share your name to connect you with an advisor.");
    } else if (reply === "Browse other courses") {
      setStep("course_selection");
      setExpandedCategory("all");
      setFilteredCourses(null); // Reset filtering
      addBotMessage("Here are our available courses:");
    }
  }, [addBotMessage]);

  return {
    open,
    setOpen,
    messages,
    userInput,
    setUserInput,
    isTyping,
    expandedCategory,
    selectedCourseDetails,
    filteredCourses,
    messagesEndRef,
    courses,
    handleQuickReply,
    handleSend,
    toggleCategory,
    handleCourseSelect,
    resetConversation,
    setSelectedCourseDetails
  };
};

export default useChatBotLogic;
