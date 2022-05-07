const validate = () => {
  const calcItem = document.querySelectorAll(".calc-item");

  const validateCalc = () => {
    calcItem.forEach((input) => {
      input.addEventListener("input", () => {
        if (input.type == "text") {
          input.value = input.value.replace(/\D+/, "");
        }
      });
    });
  };

  const validateForm = () => {
    const input = document.querySelectorAll("input");
    input.forEach((input) => {
      const inputId = input.id;
      if (inputId.match(/form[0-9]-name/) !== null) {
        input.addEventListener("input", () => {
          input.value = input.value.replace(/[^А-Яа-я\s\-]/g, "");
        });
      }
      if (inputId.match(/form[0-9]-email/) !== null) {
        input.addEventListener("input", () => {
          input.value = input.value.replace(/[^\w\@\~\-\.\!\~\*]/g, "");
        });
      }
      if (inputId.match(/form[0-9]-phone/) !== null) {
        input.addEventListener("input", () => {
          input.value = input.value.replace(/[^0-9\()\-]/g, "");
        });
      }
    });
  };

  validateCalc();
  validateForm();
};

export default validate;
