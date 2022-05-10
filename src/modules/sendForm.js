import { validate } from "schema-utils";

const sendForm = ({ formId }) => {
  const form = document.querySelector(`#${formId}`);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка";
  const errorText = "Ошибка";
  const successText = "Спасибо! Наш менеджер с вами свяжется";

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };
  const validate = (list) => {
    let success = true;
    list.forEach((input) => {
      if (
        input.id.match(/form[0-9]-name/) ||
        input.id.match(/form[0-9]-email/) ||
        input.id.match(/form[0-9]-phone/)
      ) {
        if (input.value == "") {
          success = false;
        }
      }
      //
    });

    return success;
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;

          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Заполните все поля");
      statusBlock.textContent = "";
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место");
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
