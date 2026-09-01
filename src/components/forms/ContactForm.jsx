"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BUSINESS_TYPES, INQUIRY_TYPES } from "@/lib/constants";
import styles from "./ContactForm.module.css";

// docs/handoff/pages/Contact.dc.html 84-139行目準拠。フィールド構成・必須項目
// (お名前/会社名・店舗名/メールアドレスのみ*付き)・業種の初期値(先頭要素)は
// handoffの通り。desiredProduct/useCase/timingはhandoffに存在しないため削除。
const initialState = {
  contactName: "",
  companyName: "",
  email: "",
  phone: "",
  businessType: BUSINESS_TYPES[0].value,
  inquiryType: INQUIRY_TYPES[0].value,
  message: "",
};

const REQUIRED_FIELDS = ["contactName", "companyName", "email"];

export function ContactForm() {
  const router = useRouter();
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError(null);

    const nextErrors = {};
    REQUIRED_FIELDS.forEach((field) => {
      if (!values[field].trim()) {
        nextErrors[field] = "必須項目です";
      }
    });
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (values.email && !emailPattern.test(values.email)) {
      nextErrors.email = "メールアドレスの形式が正しくありません";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("送信に失敗しました");
      router.push("/contact/thanks");
    } catch {
      setSubmitError("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.inquiryBlock}>
        <p className={styles.inquiryLabel}>お問い合わせ内容</p>
        <div className={styles.inquiryList}>
          {INQUIRY_TYPES.map((type) => (
            <label key={type.value} className={styles.inquiryItem}>
              <input
                type="radio"
                name="inquiryType"
                value={type.value}
                checked={values.inquiryType === type.value}
                onChange={handleChange}
                className={styles.radio}
              />
              <span>{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="contactName">
            お名前 <span className={styles.required}>*</span>
          </label>
          <input id="contactName" name="contactName" value={values.contactName} onChange={handleChange} />
          {errors.contactName && <p className={styles.error}>{errors.contactName}</p>}
        </div>

        <div className={styles.field}>
          <label htmlFor="companyName">
            会社名・店舗名 <span className={styles.required}>*</span>
          </label>
          <input id="companyName" name="companyName" value={values.companyName} onChange={handleChange} />
          {errors.companyName && <p className={styles.error}>{errors.companyName}</p>}
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="email">
              メールアドレス <span className={styles.required}>*</span>
            </label>
            <input id="email" name="email" type="email" value={values.email} onChange={handleChange} />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <div className={styles.field}>
            <label htmlFor="phone">電話番号</label>
            <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="businessType">業種</label>
          <select id="businessType" name="businessType" value={values.businessType} onChange={handleChange}>
            {BUSINESS_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="message">ご相談内容</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="ご相談内容をご記入ください"
            value={values.message}
            onChange={handleChange}
          />
        </div>

        {submitError && <p className={styles.error}>{submitError}</p>}

        <div className={styles.submitRow}>
          <button type="submit" className={styles.submit} disabled={submitting}>
            {submitting ? "送信中…" : "お問い合わせを送信する"}
          </button>
        </div>
      </form>

      <p className={styles.disclaimer}>
        お問い合わせ内容によっては、回答までお時間をいただく場合があります。あらかじめご了承ください。
      </p>

      <p className={styles.faqLink}>
        <a href="/faq">よくあるご質問はこちら</a>
      </p>
    </div>
  );
}
