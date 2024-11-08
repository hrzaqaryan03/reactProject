import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import style from "../requestForm/requestform.module.scss";
const RequestForm = ({ onClose, title }) => {
  const [checked, setCheked] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.therapyType = title;
    try {
      console.log(data);
      reset();
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h5>Оставьте заявку</h5>
      </div>
      <div>
        <label>Ваше имя</label>
        <input 
          {...register("name", { required: true })}
          placeholder="Ваше имя"
          style={{
            border: errors.name ? "1px solid #D61C1C" : "",
          }}
        />
      </div>
      <div>
        <label>Ваш номер телефона</label>
        <input
          {...register("phone", { required: true })}
          placeholder="Ваш номер телефона"
          style={{
            border: errors.name ? "1px solid #D61C1C" : "",
          }}
        />
      </div>
      <div>
        <label>Ваш вопрос</label>
        <textarea
          {...register("message", { required: true })}
          placeholder="Ваш вопрос"
          style={{
            border: errors.name ? "1px solid #D61C1C" : "",
          }}
        />
      </div>
      {errors.name ? (
        <div className={style.error_mesage}>
          <p>Пожалуйста, заполните!</p>
        </div>
      ) : (
        ""
      )}

      <div className={style.check}>
        <label className={style.customCheckbox}>
          <input
            type="checkbox"
            {...register("agreement", { required: true })}
          />
          <span></span>
        </label>
        <span>
          Нажимая кнопку отправить , вы соглашаетесь с{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            политикой конфиденциальности
          </a>{" "}
        </span>
      </div>
      <div>
        <button type="submit">Отправить</button>
      </div>
    </form>
  );
};

export default RequestForm;
