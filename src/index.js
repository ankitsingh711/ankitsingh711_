const resume_btn = document.querySelector("#resume-button-2");
const resume_btn2 = document.querySelector("#resume-button-1");

resume_btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1SrZY8hcrTTfCHNj68JYLp95Nqz0JTmOX/view?usp=sharing"
  );
  window.location.href =
    "https://drive.google.com/u/0/uc?id=1SrZY8hcrTTfCHNj68JYLp95Nqz0JTmOX&export=download";
});

resume_btn2.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1SrZY8hcrTTfCHNj68JYLp95Nqz0JTmOX/view?usp=sharing"
  );
  window.location.href =
    "https://drive.google.com/u/0/uc?id=1SrZY8hcrTTfCHNj68JYLp95Nqz0JTmOX&export=download";
});

const sendMessgaeFunction = () => {
  const sendDetails = {
    email: document.querySelector("#email").value,
    phone_number: document.querySelector("#phone_no").value,
    message: document.querySelector("#message").value,
  };

  const url = "https://ankit-portfolio-214u.onrender.com/submit-form";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendDetails),
  });
};

