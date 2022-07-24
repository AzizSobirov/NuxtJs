let d = new Date();
let year = d.getFullYear();
let en = {
  lang: "English",
  navbar: [
    {
      icon: "view-dashboard-outline",
      title: "Home",
    },
    {
      icon: "briefcase-account-outline",
      title: "Resume",
    },
    {
      icon: "monitor-cellphone",
      title: "Projects",
    },
    {
      icon: "message-reply-text-outline",
      title: "My Blog",
    },
    {
      icon: "account-circle-outline",
      title: "Profile",
    },
  ],
  home: {
    title: "Hi there. I'm",
    description: `${
      year - 2005
    } y.o Frontend Developer from Uzbekistan. <br> Welcome to my personal website`,
    start_btn: "Get Started",
    about_btn: "About me",
  },
  resume: {
    about: "About me",
    name: "Aziz Sobirov",
    description:
      "I'm web developer from Uzbekistan. I have a bachelor's degree in computer science and I'm currently working as a frontend developer.",
    education: "Education",
    experience: "Experience",
    skills: "Skills",
    languages: "Languages",
    projects: "Projects",
    contact: "Contact",
    age: "Age",
    email: "Email",
    phone: "Phone",
    address: "Address",
    additional: "Additional",
    langs: [
      {
        name: "Uzbek",
        level: "Native",
      },
      {
        name: "English",
        level: "Intermediate - B1",
      },
      {
        name: "Russian",
        level: "Elementary - A2",
      },
      {
        name: "Arabic",
        level: "Elementary - A2",
      },
    ],
  },
  service: {
    title: "services",
    services: [
      {
        img: "https://www.svgrepo.com/show/249559/browser-web-development.svg",
        title: "Web Development",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum numquam ratione officiis nostrum quasi dolores!",
      },
      {
        img: "https://www.svgrepo.com/show/245839/design-pencil.svg",
        title: "UI/UX design",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum numquam ratione officiis nostrum quasi dolores!",
      },
      {
        img:
          "https://www.svgrepo.com/show/343854/digital-marketing-promotion-advertising.svg",
        title: "Digital Marketing",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum numquam ratione officiis nostrum quasi dolores!",
      },
    ],
  },
  profile: {
    login_title: "Welcome!",
    login_alert: "Please Log in to your account.",
  },
  params: {
    ok: "Ok",
    cancel: "Cancel",
    register: "Create Account",

    signUp: "Sign Up",
    signUpErr: "Sign Up error. Please, try again",
    signUpExists: "This user already exists",
    signUpSuccess: "You have successfully signed up",
    login: "Login",
    loginErr: "Login error. Please, try again",
    loginExists: "This user not registered",
    loginSuccess: "You have successfully logged in",
    logOut: "Log Out",
    logOutAsk: "Are you sure you want to log out?",
    logOutYes: "Yes, log out",
    logOutNo: "No, cancel",
    logOutErr: "Log Out error. Please, try again",
    logOutSuccess: "You have successfully logged out",
    name: "Full Name",
    nameErr: "Name error. Please, try again",
    namePlaceholder: "Enter your full name",
    email: "Email",
    emailErr: "Email error. Please, try again",
    emailPlaceholder: "Enter your email",
    password: "Password",
    passwordErr: "Password error. Please, try again",
    passwordPlaceholder: "Enter your password",
    forgotPassword: "Forgot password",
    warning:
      'By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>',
  },
};
export default en;
