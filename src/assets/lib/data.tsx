// import adobexdicon from "../../assets/icons/adobexdicon.svg";
// import canvaicon from "../../assets/icons/canvaicon.svg";
// import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
// import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejs.svg";
// import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
// import vuejsicon from "../../assets/icons/vueicon.svg";
// import expressicon from "../../assets/icons/expressicon.svg";
// import sassscssicon from "../../assets/icons/sassicon.svg";
import bootstrap from "../../assets/icons/bootstrap5.svg";
import ggcolab from "../../assets/icons/colab.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axios.svg";
import healthapp from "../../assets/img/healthapp.webp";
// import netlifyicon from "../../assets/icons/netlifyicon.svg";
import expoicon from "../../assets/icons/expo.svg";
import flask from "../../assets/icons/flask.svg";
import jwticon from "../../assets/icons/jwticon.svg";
// import wordpressicon from "../../assets/icons/wordpressicon.svg";
// import shopifyicon from "../../assets/icons/shopifyicon.svg";
// import webflowicon from "../../assets/icons/webflowicon.svg";
// import instorMockup from "../../assets/img/instor_mockup.webp";
// import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import ecom from "../../assets/img/webecom.webp";
import profilepicture from "../img/anh1.jpg";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
// import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import reactnativeicon from "../../assets/icons/reactnativeicon.svg";
import mysql from "../../assets/icons/mysqlicon.svg";
import python from "../../assets/icons/python.svg";
import yolo from "../../assets/icons/yolo.svg";
import laravel from "../../assets/icons/laravel.svg";
import sqlserver from "../../assets/icons/sqlserver.svg";
import powerapp from "../../assets/icons/powerapp.svg";
import powerautomate from "../../assets/icons/powerautomate.svg";
import sharepoint from "../../assets/icons/sharepoint.svg";
import java from "../../assets/icons/java.svg";
import php from "../../assets/icons/php.svg";
import cpp from "../../assets/icons/cpp.svg";
import oracle from "../../assets/icons/oracle.svg";
import aibuilder from "../../assets/icons/aibuilder.svg";
import docker from "../../assets/icons/docker.svg";
import cloudinary from "../../assets/icons/cloudinary.svg";
import pusher from "../../assets/icons/pusher.svg";
import jewelry from "../../assets/img/jewelry.webp";
// import sqlserverwhite from "../../assets/icons/sqlserver.png";

import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    vn: "Hé lô, mình là Thắng",
    en: "Hi, I'm Thang",
  },
  subtitle: "Backend Developer ",
  description: {
    vn: "Mình là Thắng, một sinh viên năm thứ ba cùng niềm đam mê với công nghệ. Hiện tại, mình đang trên con đường trở thành một lập trình viên backend, và đây chính là nơi tóm tắt lại hành trình đó!",
    en: "I'm Thang, a third-year student with a deep passion for technology. I am on a journey to becoming a backend developer, and this space will serve as a chronicle of my progress and experiences."
  },
  buttons: [
    {
      name: "Contact",
      label: {
        vn: "Mail cho mình",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        vn: "Sản phẩm của mình",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Health Buddy App",
    description:
      "Ứng dụng di động nhắm vào việc quản lý sức khỏe, theo dõi hoạt động thể chất, giám sát lượng calo tiêu thụ, theo dõi lượng nước uống, cung cấp các gợi ý món ăn và thực đơn bữa ăn dựa trên dữ liệu cá nhân và các nguyên liệu được nhận diện từ camera.",
    description_EN:
      "The mobile application aims to manage health, track physical activity, monitor calorie intake, track water consumption, provide personalized dish suggestions and meal plans based on individual data and ingredient detected from the camera.",
    technologies: [
      { name: "JavaScript", icon: javascripticon },
      { name: "React Native", icon: reactnativeicon },
      { name: "Python", icon: python },
      { name: "Flask", icon: flask },
      { name: "Expo", icon: expoicon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "REST APIs", icon: apiicon },
      { name: "MySQL", icon: mysql },
      { name: "YOLOv8", icon: yolo },

    ],
    image: healthapp,
    deploymenturl: "",
    githuburl: "https://github.com/mthangit/HealthBuddyApp",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Jewelry Recognition",
    description:
      "Trang web nhận diện và kiểm đếm trang sức nhằm hỗ trợ việc kiểm soát số lượng trang sức đã được bán trong cửa hàng khi kết thúc ca làm việc. Dựa vào dữ liệu từ ảnh được tải lên, hệ thống sẽ nhận diện và đếm số lượng trang sức của từng loại nhờ sử dụng mô hình YOLOv8.",
    description_EN:
      "The website uses a YOLOv8 model to recognize and count jewelry items, aiding in the control of jewelry sold in the store at the end of each shift. It processes uploaded images to identify and tally the quantity of each type of jewelry.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Python", icon: python },
      { name: "Flask", icon: flask },
      { name: "YOLOv8", icon: yolo },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Cloudinary", icon: cloudinary },
      { name: "Google Colab", icon: ggcolab },
    ],
    image: jewelry,
    deploymenturl: "http://neuralparking.online:5000",
    githuburl:
      "https://github.com/duonguwu/CS338.O21_PNJ",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "E-commerce Website",
    description:
      "Trang web thương mại điện tử hỗ trợ phương thức mua sắm online mỹ phẩm từ cửa hàng cho khách hàng và trang Admin panel hỗ trợ việc quản lý số lượng mỹ phẩm và thông tin khách hàng. Trang web được xây dựng với Laravel và được tích hợp API thanh toán MoMo và VNPAY.",
    description_EN:
      "The e-commerce website supports online shopping for cosmetics from the store to customers, with an Admin panel for managing product inventory and customer information. The website is built using Laravel and integrates payment APIs from MoMo and VNPAY.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Bootstrap", icon: bootstrap },
      { name: "JavaScript", icon: javascripticon },
      { name: "Laravel", icon: laravel },
      { name: "PHP", icon: php },
      { name: "Axios", icon: axiosicon },
      { name: "Pusher", icon: pusher },
      { name: "MySQL", icon: mysql },


    ],
    image: ecom,
    deploymenturl: "",
    githuburl: "https://github.com/mthangit/Web_IS207.O11",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    vn: "Github của mình",
    en: "Check my Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Technologies",
    skills: [
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React Native",
        hash: "#ReactNative",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: python,
        color: "#327EBD",
      },
      {
        title: "Flask",
        hash: "#Flask",
        icon: flask,
        color: "#6c6b6b",
      },
      {
        title: "Java",
        hash: "#Java",
        icon: java,
        color: "#5382A1",
      },
      {
        title: "PHP",
        hash: "#PHP",
        icon: php,
        color: "#4C6B97",
      },
      {
        title: "Laravel",
        hash: "#Laravel",
        icon: laravel,
        color: "#FF2D20",
      },
      {
        title: "C++",
        hash: "#C++",
        icon: cpp,
        color: "#00599c",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "Docker",
        hash: "#Docker",
        icon: docker,
        color: "#2396ED",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Database",
    skills: [
      {
        title: "MySQL",
        hash: "#MySQL",
        icon: mysql,
        color: "#00758F",
      },
      {
        title: "SQL Server",
        hash: "#SQLServer",
        icon: sqlserver,
        color: "#b60a0a"
      },
      {
        title: "Oracle",
        hash: "#Oracle",
        icon: oracle,
        color: "#EA1B22"
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Sharepoint",
        hash: "#Sharepoint",
        icon: sharepoint,
        color: "#1D9097",
      },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Microsoft 365",
    skills: [
      {
        title: "PowerApps",
        hash: "#PowerApps",
        icon: powerapp,
        color: "#9c4bb9",
      },
      {
        title: "PowerAutomate",
        hash: "#PowerAutomate",
        icon: powerautomate,
        color: "#3885f1",
      },
      {
        title: "AI Builder",
        hash: "#AIBuilder",
        icon: aibuilder,
        color: "#1D9097",
      },
    ],
  },
] as const;

export const navLinks = [
  { vn: "Home", en: "Home", hash: "#home", icon: GoHome },
  { vn: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { vn: "Projects", en: "Projects", hash: "#projects", icon: GoProject },
  { vn: "About me", en: "About me", hash: "#about-me", icon: GoPerson },
  { vn: "Contact", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { vn: "Nguồn", en: "Source", hash: "#imprint", data: <Imprint /> },
  { vn: "Chính sách riêng tư", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:manhthang085213@com",
  text: "mailtome",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/mthangit",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/mthangit",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:manhthang085213@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    vn: '"Độc lập – Tự do – Hạnh phúc"',
    en: `"Independence – Liberty – Happiness"`,
    author_en: "President Ho Chi Minh",
    author_vn: "Chủ tịch Hồ Chí Minh",
  },
  {
    vn: '"Ngôn ngữ chỉ là công cụ, tư duy mới tạo nên sự khác biệt!"',
    en: `"Language is a Tool, Mindset Makes the Difference."`,
  },
] as const;

export const aboutMeData = {
  title: "About me",
  title_EN: "About me",
  description: "Một số thứ về mình",
  description_EN: "A few things about me",
  paragraphs_vn: [
    {
      title: "Kinh nghiệm làm việc",
      description:
        "Thực tập sinh Python Software Engineer\n Bosch Global Software Technologies \n\n  - Thời gian: 08/2024 - Present\n\n Thực tập sinh Power Platform, khối CNTT - PNJ\n\n - Thời gian 09/2023 - 03/2024",
      icon: hardwareicon,
      link: "",
    },
    {
      title: "Học vấn",
      description:
        "Trường Đại học CNTT, ĐHQG TPHCM  \n\n - Thời gian: 2021 - Hiện tại\n\n - Ngành học: Hệ thống thông tin\n\n - GPA: 8.36/10",
      icon: caricon,
      link: "",
    },
    {
      title: "Thông tin cá nhân",
      description:
        "Ngày sinh: 20/07/2003\n\n Địa chỉ: Hóc Môn, Thành phố Hồ Chí Minh\n",
      icon: travelicon,
      link: "https://drive.google.com/file/d/1aeMzl0uu70c8OCtu_ncn0zCiSgWR22KF/view?usp=sharing"
    },
  ],
  paragraphs_EN: [
    {
      title: "Work experience",
      description:
        "Intern - Python Software Engineer\n Bosch Global Software Technologies\n\n  - Duration: 08/2024 - Present\n\n Intern - Power Platform, IT Department - PNJ\n\n - Duration: 09/2023 - 03/2024",
      icon: hardwareicon,
      link: "",
    },
    {
      title: "Education",
      description:
        "University of Information Technology, VNU-HCM \n\n - Duration: 2021 - Present \n\n - Major: Information Systems\n\n - GPA: 8.36/10",
      icon: caricon,
      link: "",
    },
    {
      title: "Personal Information",
      description:
        "Date of Birth: July 20, 2003\n\n Address: Hoc Mon, Ho Chi Minh City\n",
      icon: travelicon,
      link: "https://drive.google.com/file/d/1aeMzl0uu70c8OCtu_ncn0zCiSgWR22KF/view?usp=sharing",
    },
  ],
};

export const contactData = {
  title: {
    vn: "Contact",
    en: "Contact",
  },
  description: {
    vn: "Gửi tin nhắn cho mình.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        vn: "Tên bạn là gì?",
        en: "Your Name",
      },
      type: "text",
      validation: {
        vn: "Nhớ điền tên nhé",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        vn: "Email",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        vn: "Nhớ nhập email vô nha",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        vn: "Tiêu đề",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        vn: "Điền tiêu đề vào đây nè",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      vn: "Bạn muốn nói gì với mình?",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      vn: "Điền nội dung vào đây nè",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      vn: "Gửi",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      vn: "Tôi đồng ý cho Thắng dùng email và tên để liên lạc với tôi.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      vn: "Khi gửi yêu cầu này, bạn đã đọc và đồng ý với chính sách riêng tư",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    vn: "🦄 Hiện tại chưa có live demo cho dự án này...",
    en: "🦄 There is currently no live demo for this project",
  },
  successEmailSent: {
    vn: "🦄 Cảm ơn vì đã gửi mail cho mình. Mình sẽ trả lời sớm nhất có thể",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    vn: "🦄 Lỗi xảy ra, bạn thử lại sau nhé",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    vn: "Nhớ nhập tên bạn vào nhé",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    vn: "VN",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
