import React, { useState } from "react";
import { useLanguage } from "../context/language-context";

const Imprint = () => {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  // CSS inline styles
  const linkStyle = {
    color: "#007bff",       // Màu chữ xanh dương
    fontWeight: "bold",     // Chữ đậm
    textDecoration: "none", // Xóa gạch chân
    transition: "color 0.3s ease", // Hiệu ứng chuyển đổi màu khi di chuột qua
  };

  const linkHoverStyle = {
    color: "#0056b3", // Màu chữ thay đổi khi di chuột qua
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <React.Fragment>
      {language === "VN" ? (
        <article className="flex flex-col gap-6 max-w-[32vw]">
          <p>
            <strong>
              Trang web này được cá nhân hoá dựa trên một mã nguồn mở từ Github.
            </strong>
          </p>
          <p>
            <strong>
              Mã nguồn website này thuộc về :{" "}
              <a
                href="https://github.com/AlpayC/portfolio_site"
                style={isHovered ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Alpay Celik
              </a>{" "}
            </strong>
          </p>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[32vw]">
          <p>
            <strong>
              My profile website is based on a template from GitHub, customized to reflect my journey and interests.
            </strong>
          </p>
          <p>
            <strong>
              The code for this website is belong to :{" "}
              <a
                href="https://github.com/AlpayC/portfolio_site"
                style={isHovered ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Alpay Celik
              </a>{" "}
            </strong>
          </p>
        </article>
      )}
    </React.Fragment>
  );
};

export default Imprint;
